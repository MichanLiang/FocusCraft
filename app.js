/* FocusCraft v2 — 日期/週 + 自訂任務 + 設定 + 階段成就 */
const BASE_SCHEDULE = {
  Mon: { name: '星期一', tagline: '英文、中文、體育與 PM 思維學習', tasks: [
    { id: 'mon_1', time: '07:00 - 07:30', title: '多鄰國日文 (10 min) + 晨間梳洗', category: 'habit', xp: 15 },
    { id: 'mon_2', time: '07:30 - 08:00', title: '早餐 & 檢視當日規劃 / 小說閱讀', category: 'focus', xp: 15 },
    { id: 'mon_3', time: '08:00 - 09:50', title: '【課業】中高級英文三-閱讀 (EDU教102)', category: 'class', xp: 25 },
    { id: 'mon_4', time: '09:50 - 10:10', title: '圖書館移動 & 課間喘息', category: 'habit', xp: 10 },
    { id: 'mon_5', time: '10:10 - 12:10', title: '【課業&心諮】英文課後整理 + 心諮系先修導讀', category: 'study', xp: 25 },
    { id: 'mon_6', time: '12:10 - 13:20', title: '【訊息集中1】午餐 & 回覆師生訊息', category: 'msg', xp: 15 },
    { id: 'mon_7', time: '13:20 - 15:10', title: '【課業】大學中文 (HSS人社C507)', category: 'class', xp: 25 },
    { id: 'mon_8', time: '15:10 - 15:30', title: '體育場移動與更衣準備', category: 'habit', xp: 10 },
    { id: 'mon_9', time: '15:30 - 17:20', title: '【課業】大一體育 (體育場)', category: 'class', xp: 25 },
    { id: 'mon_10', time: '17:20 - 17:30', title: '運動後收操與盥洗', category: 'habit', xp: 10 },
    { id: 'mon_11', time: '17:30 - 19:00', title: '【訊息集中2】晚餐 & 訊息處理', category: 'msg', xp: 15 },
    { id: 'mon_12', time: '19:00 - 20:30', title: '【額外日文&PM】日文文法與 PM 產品思維專注學習', category: 'study', xp: 25 },
    { id: 'mon_13', time: '20:30 - 21:30', title: '【放鬆休閒】小說沉浸閱讀 / 看動漫學日文 (不排動腦)', category: 'focus', xp: 15 },
    { id: 'mon_14', time: '21:30 - 22:00', title: '【手遊定時】每日登入 / 解任務 (10-30 min) + 訊息結算', category: 'game', xp: 15 },
    { id: 'mon_15', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Tue: { name: '星期二', tagline: '日語、美學與管弦樂團夜練', tasks: [
    { id: 'tue_1', time: '07:00 - 07:30', title: '多鄰國日文 (10 min) + 晨間梳洗', category: 'habit', xp: 15 },
    { id: 'tue_2', time: '07:30 - 08:30', title: '早餐 & 【心諮先修】普通心理學概論閱讀', category: 'focus', xp: 20 },
    { id: 'tue_3', time: '08:30 - 09:00', title: '步行至 HSS人社C407 教室', category: 'habit', xp: 10 },
    { id: 'tue_4', time: '09:00 - 12:00', title: '【課業】初級日語一 (HSS人社C407)', category: 'class', xp: 30 },
    { id: 'tue_5', time: '12:00 - 13:30', title: '【訊息集中1】午餐 & 回覆訊息', category: 'msg', xp: 15 },
    { id: 'tue_6', time: '13:30 - 15:30', title: '【課業&額外日文】圖書館日文課後複習與單字鞏固', category: 'study', xp: 25 },
    { id: 'tue_7', time: '15:30 - 18:20', title: '【課業】當代美學與藝術 (EDU教116)', category: 'class', xp: 30 },
    { id: 'tue_8', time: '18:20 - 19:30', title: '【訊息集中2】晚餐 & 樂團樂器準備與集合', category: 'msg', xp: 15 },
    { id: 'tue_9', time: '19:30 - 21:30', title: '管弦樂團 — 專注沉浸團練 2 小時', category: 'orchestra', xp: 35 },
    { id: 'tue_10', time: '21:30 - 22:00', title: '【手遊定時】解任務 (10-30 min) + 睡前放鬆', category: 'game', xp: 15 },
    { id: 'tue_11', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Wed: { name: '星期三', tagline: '全天空堂・深層學習與 PM / 心諮推進', tasks: [
    { id: 'wed_1', time: '07:00 - 07:30', title: '多鄰國日文 + 晨間起床（不躺床滑 Threads）', category: 'habit', xp: 20 },
    { id: 'wed_2', time: '07:30 - 08:30', title: '早餐 & 小說沉浸閱讀', category: 'focus', xp: 15 },
    { id: 'wed_3', time: '08:30 - 09:30', title: '前往圖書館 / 咖啡廳，準備黃金專注時段', category: 'habit', xp: 10 },
    { id: 'wed_4', time: '09:30 - 11:00', title: '【課業專注】經濟學與法律科系課業密集預習', category: 'study', xp: 30 },
    { id: 'wed_5', time: '11:00 - 12:10', title: '【額外日文】日檢聽力與文章閱讀訓練', category: 'study', xp: 25 },
    { id: 'wed_6', time: '12:10 - 13:30', title: '【訊息集中1】午餐 & 回覆師生同學', category: 'msg', xp: 15 },
    { id: 'wed_7', time: '13:30 - 15:30', title: '【PM學習】產品規格書 (PRD) 與 Wireframe 邏輯', category: 'focus', xp: 30 },
    { id: 'wed_8', time: '15:30 - 17:30', title: '【心諮先修】諮商與心理治療理論研讀', category: 'study', xp: 25 },
    { id: 'wed_9', time: '17:30 - 19:00', title: '【訊息集中2】晚餐 & 散步放鬆', category: 'msg', xp: 15 },
    { id: 'wed_10', time: '19:00 - 20:30', title: '【課業 / 心諮複習】當週重點整理與筆記彙整', category: 'focus', xp: 20 },
    { id: 'wed_11', time: '20:30 - 21:30', title: '【放鬆休閒】小說沉浸閱讀 / 看動漫學日文 (不排動腦)', category: 'focus', xp: 15 },
    { id: 'wed_12', time: '21:30 - 22:00', title: '【手遊定時】手遊收尾 & 訊息最終結算', category: 'game', xp: 15 },
    { id: 'wed_13', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Thu: { name: '星期四', tagline: '法律、智財高強度思考與 PM 實務', tasks: [
    { id: 'thu_1', time: '07:00 - 07:30', title: '多鄰國日文 + 晨間梳洗', category: 'habit', xp: 15 },
    { id: 'thu_2', time: '07:30 - 08:00', title: '早餐 & 前往 EDU教311 教室', category: 'habit', xp: 10 },
    { id: 'thu_3', time: '08:00 - 09:50', title: '【課業】智慧財產權 (EDU教311)', category: 'class', xp: 25 },
    { id: 'thu_4', time: '09:50 - 10:10', title: '移動至 MXIC旺宏243 教室', category: 'habit', xp: 10 },
    { id: 'thu_5', time: '10:10 - 12:00', title: '【課業】法律與科技 (MXIC旺宏243)', category: 'class', xp: 25 },
    { id: 'thu_6', time: '12:00 - 13:20', title: '【訊息集中1】午餐 & 回覆訊息 / 法律課重點整理', category: 'msg', xp: 15 },
    { id: 'thu_7', time: '13:20 - 15:10', title: '【課業】藝術經典 (EDU教311)', category: 'class', xp: 25 },
    { id: 'thu_8', time: '15:10 - 17:30', title: '【課業&PM】圖書館智財筆記 & PM 產品案例研讀', category: 'study', xp: 30 },
    { id: 'thu_9', time: '17:30 - 19:00', title: '【訊息集中2】晚餐 & 訊息處理', category: 'msg', xp: 15 },
    { id: 'thu_10', time: '19:00 - 20:30', title: '【額外日文】日文影音聽力與情境口說練習', category: 'study', xp: 25 },
    { id: 'thu_11', time: '20:30 - 21:30', title: '【放鬆休閒】小說沉浸閱讀 / 看動漫學日文 (不排動腦)', category: 'focus', xp: 15 },
    { id: 'thu_12', time: '21:30 - 22:00', title: '【手遊定時】解任務 (10-30 min) + 訊息結算', category: 'game', xp: 15 },
    { id: 'thu_13', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Fri: { name: '星期五', tagline: '經濟學、生涯規劃與心諮閱讀', tasks: [
    { id: 'fri_1', time: '07:00 - 07:30', title: '多鄰國日文 (10 min) + 晨間梳洗', category: 'habit', xp: 15 },
    { id: 'fri_2', time: '07:30 - 08:30', title: '早餐 & 【心諮先修】諮商與輔導導論閱讀', category: 'focus', xp: 20 },
    { id: 'fri_3', time: '08:30 - 09:00', title: '前往 TSMC台積103 教室', category: 'habit', xp: 10 },
    { id: 'fri_4', time: '09:00 - 12:00', title: '【課業】經濟學原理一 (TSMC台積103)', category: 'class', xp: 30 },
    { id: 'fri_5', time: '12:00 - 13:20', title: '【訊息集中1】午餐 & 訊息集中回覆', category: 'msg', xp: 15 },
    { id: 'fri_6', time: '13:20 - 15:10', title: '【課業】生涯導航 (EDU教314)', category: 'class', xp: 25 },
    { id: 'fri_7', time: '15:10 - 17:30', title: '【課業專注】一週課業總結：經濟學題目演算', category: 'study', xp: 30 },
    { id: 'fri_8', time: '17:30 - 19:00', title: '【訊息集中2】晚餐時間', category: 'msg', xp: 15 },
    { id: 'fri_9', time: '19:00 - 20:30', title: '【額外日文】日文閱讀或課外單字複習', category: 'study', xp: 25 },
    { id: 'fri_10', time: '20:30 - 21:30', title: '【放鬆休閒】週末前夕小說放鬆 / 看動漫學日文', category: 'focus', xp: 15 },
    { id: 'fri_11', time: '21:30 - 22:00', title: '【手遊定時】手遊週末活動', category: 'game', xp: 15 },
    { id: 'fri_12', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Sat: { name: '星期六', tagline: '電腦日・做遊戲主戰場 + 額外日文', tasks: [
    { id: 'sat_1', time: '07:30 - 08:00', title: '多鄰國日文 (10 min) + 晨間梳洗', category: 'habit', xp: 15 },
    { id: 'sat_2', time: '08:00 - 09:00', title: '早餐 & 小說閱讀放鬆', category: 'focus', xp: 15 },
    { id: 'sat_3', time: '09:00 - 12:00', title: '【做遊戲 - 上午場】企劃案撰寫與核心邏輯寫作', category: 'focus', xp: 40 },
    { id: 'sat_4', time: '12:00 - 13:30', title: '【訊息集中1】午餐 & 訊息集中回覆', category: 'msg', xp: 15 },
    { id: 'sat_5', time: '13:30 - 15:30', title: '【做遊戲 - 下午場】關卡設計與程式碼實作', category: 'focus', xp: 35 },
    { id: 'sat_6', time: '15:30 - 17:30', title: '【額外日文】週末進階日語學習與閱讀', category: 'study', xp: 25 },
    { id: 'sat_7', time: '17:30 - 19:00', title: '【訊息集中2】晚餐 & 戶外散步運動', category: 'msg', xp: 15 },
    { id: 'sat_8', time: '19:00 - 20:30', title: '【做遊戲 - 夜間場】遊戲測試與 Bug 修復 (20:30 喊卡)', category: 'focus', xp: 25 },
    { id: 'sat_9', time: '20:30 - 21:30', title: '【放鬆休閒】小說沉浸閱讀 / 看動漫學日文 (不排動腦)', category: 'focus', xp: 15 },
    { id: 'sat_10', time: '21:30 - 22:00', title: '【手遊定時】解任務 (10-30 min)', category: 'game', xp: 15 },
    { id: 'sat_11', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
  Sun: { name: '星期日', tagline: '4 小時管樂團團練 + 遊戲開發收尾', tasks: [
    { id: 'sun_1', time: '08:00 - 08:30', title: '多鄰國日文 (維持連勝紀錄)', category: 'habit', xp: 15 },
    { id: 'sun_2', time: '08:30 - 09:00', title: '早餐 & 檢視今日管樂團練樂譜', category: 'habit', xp: 10 },
    { id: 'sun_3', time: '09:00 - 12:00', title: '【做遊戲 - 假日電腦時段】遊戲機制強化與程式寫作', category: 'focus', xp: 40 },
    { id: 'sun_4', time: '12:00 - 13:30', title: '【訊息集中1】午餐 & 準備樂器出門', category: 'msg', xp: 15 },
    { id: 'sun_5', time: '14:00 - 18:00', title: '管樂團團練 — 專注大合練 4 小時', category: 'orchestra', xp: 45 },
    { id: 'sun_6', time: '18:00 - 19:30', title: '【訊息集中2】晚餐 & 團員交流與訊息回覆', category: 'msg', xp: 15 },
    { id: 'sun_7', time: '19:30 - 20:30', title: '【做遊戲 - 週末收尾】遊戲進度存檔與整理 (20:30 喊卡)', category: 'focus', xp: 20 },
    { id: 'sun_8', time: '20:30 - 21:30', title: '【放鬆休閒】小說沉浸閱讀 / 看動漫學日文 (不排動腦)', category: 'focus', xp: 15 },
    { id: 'sun_9', time: '21:30 - 22:00', title: '【手遊定時】最後任務解完即關', category: 'game', xp: 15 },
    { id: 'sun_10', time: '22:00', title: '【準時熄燈】晚上 10:00 睡覺', category: 'sleep', xp: 30 },
  ]},
};

const CATEGORY_LABEL = { class:'課 業', study:'研 讀', habit:'習 慣', msg:'訊 息', focus:'專 注', game:'手 遊', sleep:'睡 眠', orchestra:'樂 團' };
const DAY_ORDER = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const RING_C = 163.3;

/* ---- 階段成就：thresholds 之後用 step 無限延伸 ---- */
const TRACKS = [
  { id:'task',      name:'任務收割者', seal:'割', thresholds:[1,10,30,60,100], step:100, get:s=>s.tasksDone, hint:'累計完成任務' },
  { id:'orchestra', name:'樂團演奏家', seal:'樂', thresholds:[1,3,5,10,20],    step:10,  get:s=>s.orchestra, hint:'完成樂團團練' },
  { id:'sleep',     name:'十點睡眠者', seal:'眠', thresholds:[1,3,7,14,30],     step:30,  get:s=>s.sleep,     hint:'準時熄燈' },
  { id:'duo',       name:'多鄰國達人', seal:'語', thresholds:[1,3,7,14,30],     step:30,  get:s=>s.duo,       hint:'晨間日文' },
  { id:'perfect',   name:'全勤專注日', seal:'勤', thresholds:[1,3,7,14,30],     step:30,  get:s=>s.perfectDays.length, hint:'整天 100% 完成' },
  { id:'urge',      name:'社群克星',   seal:'克', thresholds:[1,3,7,15,30],     step:30,  get:s=>s.urge,      hint:'使用解癮急救' },
  { id:'level',     name:'專注師',     seal:'冠', thresholds:[2,5,10,20],       step:10,  get:(s,st)=>st.level, hint:'等級', isLevel:true },
];
function thresholdFor(track, tierIdx){
  if (tierIdx < track.thresholds.length) return track.thresholds[tierIdx];
  const last = track.thresholds[track.thresholds.length-1];
  return last + track.step * (tierIdx - track.thresholds.length + 1);
}

/* ---- state ---- */
const LS_KEY = 'focuscraft_v2';
let state = null;
function defaultState(){
  const today = isoOf(new Date());
  return {
    v:2, xp:0, level:1, streak:0, updatedAt:0,
    selectedDate: today, viewMonday: isoOf(mondayOf(new Date())),
    completedByDate:{}, customWeekly:{}, customOnce:{}, hiddenOnce:{}, editedOnce:{},
    stats:{ tasksDone:0, orchestra:0, sleep:0, duo:0, urge:0, perfectDays:[] },
    ach:{},
    settings:{ accent:'#b03a24', paper:'cream', fs:'std', hf:'serif', dir:'left', density:'cozy',
      cards:{ cover:true, detox:true, rules:true, nextbadge:true } },
  };
}
function load(){
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) { state = Object.assign(defaultState(), JSON.parse(raw)); return; }
    // 從 v1 遷移 xp/level
    const old = localStorage.getItem('focuscraft_user_state');
    state = defaultState();
    if (old) {
      const o = JSON.parse(old);
      state.xp = o.xp||0; state.level = o.level||1; state.streak = 0;
    }
  } catch(e){ state = defaultState(); }
  if (!state.selectedDate) state.selectedDate = isoOf(new Date());
  if (!state.viewMonday) state.viewMonday = isoOf(mondayOf(new Date()));
  ['completedByDate','customWeekly','customOnce','hiddenOnce','editedOnce'].forEach(k=>{ if(!state[k]) state[k]={}; });
  if (!state.stats) state.stats = defaultState().stats;
  if (!state.ach) state.ach = {};
  if (!state.settings) state.settings = defaultState().settings;
  if (!state.settings.cards) state.settings.cards = defaultState().settings.cards;
}
function save(){
  state.updatedAt = Date.now();
  try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){}
  if (typeof queueCloudSave==='function'){ try{ queueCloudSave(); }catch(e){} }
}

/* ---- 日期工具 ---- */
function pad(n){ return String(n).padStart(2,'0'); }
function isoOf(d){ return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function parseISO(s){ const [y,m,dd]=s.split('-').map(Number); return new Date(y, m-1, dd); }
function mondayOf(d){ const x=new Date(d); const dow=(x.getDay()+6)%7; x.setDate(x.getDate()-dow); x.setHours(0,0,0,0); return x; }
function addDaysISO(iso,n){ const d=parseISO(iso); d.setDate(d.getDate()+n); return isoOf(d); }
function codeOfISO(iso){ return DAY_ORDER[(parseISO(iso).getDay()+6)%7]; }
function fmtMD(iso){ const d=parseISO(iso); return (d.getMonth()+1)+'/'+d.getDate(); }

/* ---- boot ---- */
window.onload = function(){
  load();
  // 若存檔的選擇日和本週差太多，仍保留（可看歷史）；viewMonday 若遺失則重算
  renderAll();
  applySettings();
};

/* ---- 週導覽 ---- */
function weekDates(){ const out=[]; for(let i=0;i<7;i++) out.push(addDaysISO(state.viewMonday,i)); return out; }
function shiftWeek(n){
  state.viewMonday = addDaysISO(state.viewMonday, n*7);
  const idx = DAY_ORDER.indexOf(codeOfISO(state.selectedDate));
  state.selectedDate = addDaysISO(state.viewMonday, idx<0?0:idx);
  save(); renderAll();
}
function goThisWeek(){
  const t = isoOf(new Date());
  state.viewMonday = isoOf(mondayOf(new Date()));
  state.selectedDate = t;
  save(); renderAll();
}
function jumpToDate(val){
  if(!val) return;
  state.selectedDate = val;
  state.viewMonday = isoOf(mondayOf(parseISO(val)));
  save(); renderAll();
}
function selectWeekday(code){
  const dates = weekDates();
  state.selectedDate = dates[DAY_ORDER.indexOf(code)];
  save(); renderAll();
}
function renderWeek(){
  const dates = weekDates();
  const today = isoOf(new Date());
  const selCode = codeOfISO(state.selectedDate);
  DAY_ORDER.forEach((c,i)=>{
    document.getElementById('date-'+c).innerText = fmtMD(dates[i]);
    const btn = document.getElementById('btn-'+c);
    btn.classList.toggle('active', c===selCode);
    btn.classList.toggle('today', dates[i]===today);
  });
  const label = fmtMD(dates[0])+' – '+fmtMD(dates[6]);
  const isThis = state.viewMonday === isoOf(mondayOf(new Date()));
  document.getElementById('week-label').innerText = label + (isThis ? ' · 本週' : ' · 回到本週');
  document.getElementById('brand-week-label').innerText = label;
  const dp = document.getElementById('date-picker');
  if (dp && dp.value !== state.selectedDate) dp.value = state.selectedDate;
  const code = selCode, base = BASE_SCHEDULE[code];
  document.getElementById('current-day-tag').innerText = base.name + ' ' + fmtMD(state.selectedDate);
  document.getElementById('day-highlight-note').innerText = base.tagline;
  document.getElementById('cover-date-label').innerText = state.selectedDate===today ? '今日完成度' : fmtMD(state.selectedDate)+' 完成度';
}

/* ---- 任務集合（模板 - 略過 + 自訂） ---- */
function tasksFor(dateISO){
  const code = codeOfISO(dateISO);
  const base = BASE_SCHEDULE[code].tasks;
  const hidden = ((state.hiddenOnce||{})[dateISO]||[]);
  const over = ((state.editedOnce||{})[dateISO]||{});
  const weekly = ((state.customWeekly||{})[code]||[]);
  const once = ((state.customOnce||{})[dateISO]||[]);
  const list = base.filter(t=>!hidden.includes(t.id)).map(t=> over[t.id]
    ? {...t, ...over[t.id], custom:false, edited:true}
    : {...t, custom:false});
  weekly.forEach(t=>list.push({...t, custom:true, scope:'weekly'}));
  once.forEach(t=>list.push({...t, custom:true, scope:'once'}));
  return { code, list, hiddenCount: hidden.length };
}
function renderTasks(){
  renderWeek();
  const dateISO = state.selectedDate;
  const { list, hiddenCount } = tasksFor(dateISO);
  const doneMap = state.completedByDate[dateISO]||{};
  const box = document.getElementById('tasks-container');
  box.innerHTML = '';
  let done = 0;
  list.forEach(task=>{
    const isDone = !!doneMap[task.id];
    if (isDone) done++;
    const el = document.createElement('div');
    el.className = 'task'+(isDone?' done':'')+(task.custom?' custom':'')+(task.edited?' edited':'');
    el.onclick = ()=>toggleTask(task.id);
    const timeHtml = escapeHtml(task.time||'—').replace(' - ','<br>— ');
    const action = task.custom
      ? `<button class="task-mini-btn danger" onclick="event.stopPropagation();deleteTask('${task.id}')">刪除</button>`
      : `<button class="task-mini-btn" onclick="event.stopPropagation();hideTask('${task.id}')">今日略過</button>`;
    el.innerHTML =
      '<div class="task-time">'+timeHtml+'</div><span class="task-dot"></span>'+
      '<div class="task-body"><div class="task-cat">'+(CATEGORY_LABEL[task.category]||task.category)+' · +'+task.xp+' XP</div>'+
      '<div class="task-title">'+escapeHtml(task.title)+'</div></div>'+
      '<div class="task-actions"><span class="task-check">'+(isDone?'✓':'')+'</span>'+
      `<button class="task-mini-btn" onclick="event.stopPropagation();startEditTask('${task.id}')">編輯</button>`+action+'</div>';
    box.appendChild(el);
  });
  if (!list.length){
    box.innerHTML = '<p class="modal-sub" style="padding:12px 4px">今天沒有任務，去設定還原或新增一個吧。</p>';
  }
  const pct = list.length ? Math.round(done/list.length*100) : 0;
  document.getElementById('daily-progress-percent').innerText = pct;
  document.getElementById('progress-circle').style.strokeDashoffset = String(RING_C - RING_C*pct/100);
  const hh = document.getElementById('hidden-hint');
  const rb = document.getElementById('restore-btn');
  if (hiddenCount>0){ hh.innerText = '今日略過 '+hiddenCount+' 項'; rb.style.display=''; }
  else { hh.innerText=''; rb.style.display='none'; }
  return { done, total: list.length };
}
function findTask(dateISO, taskId){
  return tasksFor(dateISO).list.find(t=>t.id===taskId);
}
function toggleTask(taskId){
  const dateISO = state.selectedDate;
  const task = findTask(dateISO, taskId);
  if (!task) return;
  const map = state.completedByDate[dateISO] = state.completedByDate[dateISO]||{};
  const nowDone = !map[taskId];
  if (nowDone){ map[taskId]=true; onTaskDone(task); }
  else { delete map[taskId]; addXP(-task.xp); }
  // 全勤判定
  const { done, total } = renderTasks();
  if (total>0 && done===total && !state.stats.perfectDays.includes(dateISO)){
    state.stats.perfectDays.push(dateISO);
  }
  updateStreak();
  save(); renderAll(false);
  if (nowDone) popConfetti(25);
}
function onTaskDone(task){
  addXP(task.xp);
  state.stats.tasksDone++;
  if (task.category==='orchestra') state.stats.orchestra++;
  if (task.category==='sleep') state.stats.sleep++;
  if (task.id.endsWith('_1') || /多鄰國|Duolingo/i.test(task.title)) state.stats.duo++;
  checkAchievements();
}
function hideTask(taskId){
  const d = state.selectedDate;
  const arr = state.hiddenOnce[d] = state.hiddenOnce[d]||[];
  if (!arr.includes(taskId)) arr.push(taskId);
  if (state.completedByDate[d]) delete state.completedByDate[d][taskId];
  save(); renderAll(false);
}
function restoreHidden(){
  delete state.hiddenOnce[state.selectedDate];
  save(); renderAll(false);
}
function deleteTask(taskId){
  const d = state.selectedDate, code = codeOfISO(d);
  const rm = arr => { const i=(arr||[]).findIndex(t=>t.id===taskId); if(i>=0){arr.splice(i,1);return true;} return false; };
  if (rm(state.customOnce[d]) || rm(state.customWeekly[code])){
    if (state.completedByDate[d]) delete state.completedByDate[d][taskId];
    save(); renderAll(false);
  }
}
function clearToday(){
  delete state.completedByDate[state.selectedDate];
  save(); renderAll(false);
}

/* ---- 新增 / 編輯任務表單 ---- */
let editing = null; // {kind:'override'|'custom', taskId}
function toggleTaskForm(force){
  const f = document.getElementById('task-form');
  const show = force!==undefined ? force : f.style.display==='none';
  f.style.display = show ? '' : 'none';
  if (show) document.getElementById('f-title').focus();
}
function resetTaskForm(){
  editing = null;
  document.getElementById('f-title').value='';
  document.getElementById('f-time').value='';
  document.getElementById('f-repeat-label').style.display='';
  document.getElementById('f-submit').innerText='加入';
  document.getElementById('f-restore').style.display='none';
}
function openNewTaskForm(){ resetTaskForm(); toggleTaskForm(true); }
function cancelTaskForm(){ resetTaskForm(); toggleTaskForm(false); }
function startEditTask(taskId){
  const task = findTask(state.selectedDate, taskId);
  if (!task) return;
  editing = { kind: task.custom ? 'custom' : 'override', taskId };
  document.getElementById('f-title').value = task.title;
  document.getElementById('f-time').value = task.time==='—' ? '' : task.time;
  document.getElementById('f-cat').value = task.category;
  document.getElementById('f-xp').value = String(task.xp);
  document.getElementById('f-repeat-label').style.display='none';
  document.getElementById('f-submit').innerText='儲存修改';
  document.getElementById('f-restore').style.display = editing.kind==='override' ? '' : 'none';
  toggleTaskForm(true);
}
function updateCustomInPlace(taskId, patch){
  const d = state.selectedDate, code = codeOfISO(d);
  const lists = [state.customOnce[d], (state.customWeekly||{})[code]];
  for (const arr of lists){
    const t = (arr||[]).find(t=>t.id===taskId);
    if (t){ Object.assign(t, patch); return true; }
  }
  return false;
}
function restoreTemplate(){
  if (!editing || editing.kind!=='override') return;
  const o = (state.editedOnce||{})[state.selectedDate];
  if (o) delete o[editing.taskId];
  resetTaskForm(); toggleTaskForm(false);
  save(); renderAll(false);
}
function submitCustomTask(e){
  e.preventDefault();
  const title = document.getElementById('f-title').value.trim();
  if (!title) return false;
  const time = document.getElementById('f-time').value.trim() || '—';
  const category = document.getElementById('f-cat').value;
  const xp = parseInt(document.getElementById('f-xp').value,10)||15;
  if (editing){
    if (editing.kind==='override'){
      const o = (state.editedOnce[state.selectedDate] = state.editedOnce[state.selectedDate]||{});
      o[editing.taskId] = { time, title, category, xp };
    } else {
      updateCustomInPlace(editing.taskId, { time, title, category, xp });
    }
    resetTaskForm(); toggleTaskForm(false);
    save(); renderAll(false);
    return false;
  }
  const repeat = document.getElementById('f-repeat').checked;
  const task = { id:'c'+Date.now().toString(36), time, title, category, xp };
  if (repeat){
    const code = codeOfISO(state.selectedDate);
    (state.customWeekly[code] = state.customWeekly[code]||[]).push(task);
  } else {
    (state.customOnce[state.selectedDate] = state.customOnce[state.selectedDate]||[]).push(task);
  }
  document.getElementById('f-title').value=''; document.getElementById('f-time').value='';
  toggleTaskForm(false);
  save(); renderAll(false);
  return false;
}

/* ---- XP / 連勝 ---- */
function addXP(amount){
  state.xp += amount;
  if (state.xp<0) state.xp=0;
  while (state.xp >= state.level*100){
    state.level++;
    popConfetti(90);
  }
  checkAchievements();
}
function updateStreak(){
  // 從今天往回數連續有完成≥1 項的天數
  let s=0; let d = isoOf(new Date());
  for(let i=0;i<365;i++){
    const m = state.completedByDate[d];
    if (m && Object.keys(m).length>0){ s++; d = addDaysISO(d,-1); }
    else break;
  }
  state.streak = s;
}
function renderHeader(){
  document.getElementById('player-level').innerText = 'LV '+state.level;
  document.getElementById('streak-count').innerText = state.streak;
  const inLevel = state.xp - (state.level-1)*100;
  const pct = Math.min(Math.max(inLevel/100*100,0),100);
  document.getElementById('xp-text').innerText = Math.floor(inLevel)+' / 100';
  document.getElementById('xp-bar').style.width = pct+'%';
}

/* ---- 階段成就引擎 ---- */
function trackValue(t){ return t.get(state.stats, state); }
function checkAchievements(){
  let fresh = [];
  TRACKS.forEach(t=>{
    const unlocked = state.ach[t.id]||0;
    let v = trackValue(t), n = unlocked, guard=0;
    while (guard++<50 && v >= thresholdFor(t,n)){ n++; fresh.push({track:t, tier:n}); }
    if (n!==unlocked) state.ach[t.id]=n;
  });
  if (fresh.length){
    save(); renderAchievements(); renderNextBadge();
    const top = fresh[fresh.length-1];
    popConfetti(70);
  }
}
function totalTiers(){
  let got=0, inf=0;
  TRACKS.forEach(t=>{ got += (state.ach[t.id]||0); inf += t.thresholds.length; });
  return { got, base:inf };
}
function renderAchievements(){
  const box = document.getElementById('badges-grid');
  if (!box) return;
  box.innerHTML='';
  TRACKS.forEach(t=>{
    const v = trackValue(t);
    const unlocked = state.ach[t.id]||0;
    const next = thresholdFor(t, unlocked);
    const prev = unlocked>0 ? thresholdFor(t, unlocked-1) : 0;
    const pct = next>prev ? Math.min(100, Math.round((v-prev)/(next-prev)*100)) : 100;
    const doneAllBase = unlocked>=t.thresholds.length;
    const el = document.createElement('div');
    el.className = 'track'+(unlocked>0?' done':'');
    el.innerHTML =
      '<div class="track-top"><div class="seal">'+t.seal+'</div>'+
      '<div><strong>'+t.name+' · '+unlocked+' 階</strong>'+
      '<div class="track-sub">'+t.hint+' — 目前 '+v+' / 下一階 '+next+(doneAllBase?'（無限延伸中）':'')+'</div></div>'+
      '<span class="tier">'+(unlocked>0?'已晉級':'未開始')+'</span></div>'+
      '<div class="track-bar"><div class="track-fill" style="width:'+pct+'%"></div></div>';
    box.appendChild(el);
  });
  const { got } = totalTiers();
  document.getElementById('badge-summary').innerText = '累計晉級 '+got+' 階 · 後段無限延伸，下一階永遠在前面';
}
function renderNextBadge(){
  const box = document.getElementById('next-badge');
  if (!box) return;
  let best=null, bestGap=Infinity;
  TRACKS.forEach(t=>{
    const unlocked = state.ach[t.id]||0;
    const next = thresholdFor(t, unlocked);
    const gap = next - trackValue(t);
    if (gap<bestGap){ bestGap=gap; best={t,next,gap}; }
  });
  if (!best){ box.innerHTML='全部完成，太強了。'; return; }
  const v = trackValue(best.t);
  const pct = Math.min(100, Math.round(v/best.next*100));
  box.innerHTML = '<div class="seal">'+best.t.seal+'</div>'+
    '<div style="flex:1"><strong>'+best.t.name+' — 第 '+( (state.ach[best.t.id]||0)+1 )+' 階</strong>'+
    '<span>'+v+' / '+best.next+'（還差 '+Math.max(0,best.gap)+'）</span>'+
    '<div class="nb-track"><div class="nb-fill" style="width:'+pct+'%"></div></div></div>';
}

/* ---- 設定 ---- */
function openSettings(tab){
  document.getElementById('settings-modal').classList.remove('hidden');
  switchSettingsTab(tab||'appear');
  renderAchievements();
}
function closeSettings(){ document.getElementById('settings-modal').classList.add('hidden'); }
function switchSettingsTab(t){
  ['appear','layout','badges','data'].forEach(k=>{
    document.getElementById('stab-'+k).classList.toggle('active', k===t);
    document.getElementById('s-pane-'+k).style.display = k===t?'':'none';
  });
  if (t==='badges') renderAchievements();
}
function markSel(containerId, attr, val){
  const c = document.getElementById(containerId);
  if (!c) return;
  c.querySelectorAll('button').forEach(b=>b.classList.toggle('sel', b.dataset[attr]===val));
}
function setAccent(v,el){ state.settings.accent=v; save(); applySettings(); }
function setPaper(v,el){ state.settings.paper=v; save(); applySettings(); }
function setFontSize(v,el){ state.settings.fs=v; save(); applySettings(); }
function setHeadFont(v,el){ state.settings.hf=v; save(); applySettings(); }
function setLayoutDir(v,el){ state.settings.dir=v; save(); applySettings(); }
function setDensity(v,el){ state.settings.density=v; save(); applySettings(); }
function toggleCard(name,on){
  state.settings.cards[name]=on; save(); applySettings();
}
function applySettings(){
  const s = state.settings;
  document.documentElement.style.setProperty('--accent', s.accent);
  document.body.dataset.paper = s.paper;
  document.body.dataset.fs = s.fs;
  document.body.dataset.hf = s.hf;
  document.body.dataset.density = s.density;
  document.getElementById('layout').classList.toggle('swap', s.dir==='swap');
  document.querySelectorAll('[data-card]').forEach(el=>{
    el.style.display = s.cards[el.dataset.card]===false ? 'none' : '';
  });
  markSel('accent-swatches','accent',s.accent);
  markSel('paper-row','paper',s.paper);
  markSel('font-row','fs',s.fs);
  markSel('headfont-row','hf',s.hf);
  markSel('dir-row','dir',s.dir);
  markSel('density-row','density',s.density);
  ['cover','detox','rules','nextbadge'].forEach(k=>{
    const cb = document.getElementById('tg-'+k);
    if (cb) cb.checked = s.cards[k]!==false;
  });
}

/* ---- 資料管理 ---- */
function exportData(){
  const blob = new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'focuscraft-'+state.selectedDate+'.json';
  a.click();
}
function importData(e){
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = ()=>{ try{ state = Object.assign(defaultState(), JSON.parse(r.result)); save(); applySettings(); renderAll(); }catch(err){ alert('匯入失敗：檔案格式不正確'); } };
  r.readAsText(f);
}
function resetAll(){
  if (!confirm('確定清除所有進度、自訂任務與設定？')) return;
  localStorage.removeItem(LS_KEY);
  state = defaultState();
  save(); applySettings(); renderAll();
}

/* ---- 急救 modal（保留） ---- */
function openUrgeModal(){
  document.getElementById('urge-modal').classList.remove('hidden');
  switchModalTab('sudoku');
  state.stats.urge++;
  checkAchievements(); save(); renderNextBadge();
}
function closeUrgeModal(){ document.getElementById('urge-modal').classList.add('hidden'); }
function launchMiniGame(t){ openUrgeModal(); switchModalTab(t); }
function switchModalTab(type){
  ['sudoku','wordsearch','breath'].forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active', t===type);
  });
  const area = document.getElementById('game-canvas-area');
  if (type==='sudoku') renderSudoku(area);
  else if (type==='wordsearch') renderWordSearch(area);
  else renderBreath(area);
}
/* 外嵌免費無廣告遊戲：載入失敗時用下方連結開新分頁 */
function renderSudoku(c){
  c.innerHTML = '<div class="embed-wrap"><p class="game-title">Suuudokuuu · 免費開源、無廣告（Newbie → Hell 六種難度）</p>'+
    '<iframe class="embed-frame" src="https://www.suuudokuuu.com/" title="免費數獨" loading="lazy" allowfullscreen></iframe>'+
    '<div style="text-align:center"><a class="open-ext" href="https://www.suuudokuuu.com/" target="_blank" rel="noopener">在新分頁開啟 ↗</a></div></div>';
}
function renderWordSearch(c){
  c.innerHTML = '<div class="embed-wrap"><p class="game-title">Pure Word Search · 每日一局、免費免註冊、無廣告</p>'+
    '<iframe class="embed-frame" src="https://www.purewordsearch.com/daily-word-search/" title="英文尋字遊戲" loading="lazy" allowfullscreen></iframe>'+
    '<div style="text-align:center"><a class="open-ext" href="https://www.purewordsearch.com/daily-word-search/" target="_blank" rel="noopener">在新分頁開啟 ↗</a></div></div>';
}
function renderBreath(c){
  c.innerHTML = '<div style="text-align:center"><div class="breath-circle" style="margin:0 auto">息</div>'+
    '<p class="game-title" style="margin-top:14px">吸氣 4 秒 → 憋氣 7 秒 → 吐氣 8 秒</p>'+
    '<p style="font-size:12px;color:var(--muted);margin:0">跟著圓的起伏呼吸，擺脫搜尋衝動。</p></div>';
}
function completeGameReward(){
  addXP(20); save(); renderHeader(); closeUrgeModal(); popConfetti(30);
}

/* ---- 共用 ---- */
function renderAll(skipTasks){
  updateStreak();
  renderHeader();
  if (!skipTasks) renderTasks(); else { renderWeek(); renderHeader(); }
  renderNextBadge();
  if (!document.getElementById('settings-modal').classList.contains('hidden')) renderAchievements();
}
function popConfetti(count){
  if (typeof confetti==='undefined') return;
  confetti({ particleCount:count, spread:55, origin:{y:0.75},
    colors:['#1d1b16', state.settings.accent||'#b03a24', '#9a7b2d', '#4d5d3f'] });
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
