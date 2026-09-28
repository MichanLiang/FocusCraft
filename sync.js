/* FocusCraft — Firebase Google 登入 + Firestore 跨裝置同步
 * 規則：updatedAt 較新者勝；登入後自動合併＋即時監聽，手機電腦同帳號即時一致。
 * 未登入時一切照舊，只存 localStorage。 */

const firebaseConfig = {
  apiKey: "AIzaSyBJeHEcucu1Cd4-kHlDmIZ7L1XCn1wzpSM",
  authDomain: "focuscraft-683c4.firebaseapp.com",
  projectId: "focuscraft-683c4",
  storageBucket: "focuscraft-683c4.firebasestorage.app",
  messagingSenderId: "903901782433",
  appId: "1:903901782433:web:bef32f1cbc367e2a8a6be0"
};

let auth = null, db = null, authUser = null;
let cloudUnsub = null, saveTimer = null;

try {
  if (typeof firebase === 'undefined') throw new Error('sdk missing');
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  auth.onAuthStateChanged(onAuthChanged);
} catch (e) {
  console.warn('Firebase 初始化失敗（離線或被擋，僅用本機模式）:', e);
  setSyncUI('off', '雲端未連線，只存這台裝置');
}

function userDoc() { return db.collection('users').doc(authUser.uid); }

/* ---- 登入狀態變化 ---- */
async function onAuthChanged(user) {
  if (typeof state === 'undefined' || !state) { setTimeout(() => onAuthChanged(user), 500); return; }
  authUser = user || null;
  if (!user) {
    setAccountUI(false);
    setSyncUI('off', '未登入：只存這台裝置');
    if (cloudUnsub) { cloudUnsub(); cloudUnsub = null; }
    return;
  }
  setAccountUI(true);
  setSyncUI('saving', '同步中…');
  try {
    const snap = await userDoc().get();
    if (snap.exists) {
      const c = snap.data() || {};
      if ((c.updatedAt || 0) > (state.updatedAt || 0)) {
        applyCloudState(c);          // 雲端較新 → 蓋掉本機
      } else if ((state.updatedAt || 0) > (c.updatedAt || 0)) {
        await pushCloudNow();        // 本機較新 → 推上雲
      }
    } else {
      await pushCloudNow();          // 第一台登入 → 把本機資料上傳
    }
    setSyncUI('on', '已同步：手機電腦一致');
  } catch (e) {
    console.warn('讀取雲端失敗:', e);
    setSyncUI('off', '讀取失敗（可能是 Firestore 還沒建立或規則未設）');
  }
  subscribeCloud();
}

/* ---- 本機存檔時排隊上傳（app.js 的 save() 會呼叫） ---- */
function queueCloudSave() {
  if (!authUser || !db) return;
  setSyncUI('saving', '同步中…');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { pushCloudNow(); }, 800);
}

async function pushCloudNow() {
  if (!authUser || !db) { setSyncUI('off', '未登入：只存這台裝置'); return; }
  setSyncUI('saving', '同步中…');
  try {
    await userDoc().set({ state: state, updatedAt: state.updatedAt || Date.now() });
    setSyncUI('on', '已同步：手機電腦一致');
  } catch (e) {
    console.warn('上傳失敗:', e);
    setSyncUI('off', '同步失敗（檢查 Firestore 規則）');
  }
}

/* ---- 即時監聽：另一台裝置一改，這台自動更新 ---- */
function subscribeCloud() {
  if (!authUser || !db) return;
  if (cloudUnsub) cloudUnsub();
  cloudUnsub = userDoc().onSnapshot((snap) => {
    if (!snap.exists) return;
    const c = snap.data() || {};
    if ((c.updatedAt || 0) <= (state.updatedAt || 0)) return; // 自己的寫入或舊資料
    applyCloudState(c);
    setSyncUI('on', '已同步：手機電腦一致');
  }, (err) => {
    console.warn('監聽失敗:', err);
    setSyncUI('off', '即時同步中斷');
  });
}

function applyCloudState(c) {
  const fresh = Object.assign(defaultState(), c.state || {});
  ['completedByDate', 'customWeekly', 'customOnce', 'hiddenOnce', 'editedOnce'].forEach(k => { if (!fresh[k]) fresh[k] = {}; });
  if (!fresh.stats) fresh.stats = defaultState().stats;
  if (!fresh.settings) fresh.settings = defaultState().settings;
  state = fresh;
  state.updatedAt = c.updatedAt || Date.now();
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  applySettings();
  renderAll();
}

/* ---- 登入 / 登出 ---- */
async function signInWithGoogle() {
  if (!auth) { alert('Firebase 尚未載入，請確認網路連線後重整頁面。'); return; }
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
  } catch (e) {
    const code = (e && e.code) || '';
    if (code === 'auth/popup-blocked' || code === 'auth/cancelled-popup-request') {
      try { await auth.signInWithRedirect(provider); }
      catch (e2) { alert('登入失敗：' + ((e2 && e2.message) || e2)); }
    } else if (code === 'auth/operation-not-supported-in-this-environment') {
      alert('Google 登入需要用 http(s) 網址開啟（例如部署到 Firebase Hosting 後的網址），直接點檔案登不進去。');
    } else if (code === 'auth/unauthorized-domain') {
      alert('網域未授權：到 Firebase Console → Authentication → Settings → Authorized domains，把這個網址加進去。');
    } else if (code !== 'auth/popup-closed-by-user') {
      alert('登入失敗：' + ((e && e.message) || e));
    }
  }
}
function signOutUser() { if (auth) auth.signOut(); }

/* ---- UI ---- */
function setSyncUI(mode, text) {
  const dot = document.getElementById('sync-dot');
  if (dot) { dot.dataset.s = mode; dot.title = text || ''; }
  const st = document.getElementById('account-status');
  if (st && authUser) st.innerText = authUser.email + ' — ' + (text || '');
}
function setAccountUI(loggedIn) {
  const loginBtn = document.getElementById('login-btn');
  const chip = document.getElementById('user-chip');
  const lBtn = document.getElementById('account-login-btn');
  const oBtn = document.getElementById('account-logout-btn');
  const st = document.getElementById('account-status');
  if (loginBtn) loginBtn.style.display = loggedIn ? 'none' : '';
  if (chip) chip.style.display = loggedIn ? '' : 'none';
  if (lBtn) lBtn.style.display = loggedIn ? 'none' : '';
  if (oBtn) oBtn.style.display = loggedIn ? '' : 'none';
  if (loggedIn && authUser) {
    const av = document.getElementById('user-avatar');
    const em = document.getElementById('user-email');
    if (av) av.src = authUser.photoURL || '';
    if (em) em.innerText = authUser.email || '';
    if (st) st.innerText = (authUser.email || '') + ' — 同步中…';
  } else if (st) {
    st.innerText = '尚未登入，資料只存在這台裝置。登入後手機、電腦同帳號自動同步。';
  }
}
