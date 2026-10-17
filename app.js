const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const STORAGE = { lang:"searoute-lang", theme:"searoute-theme", checks:"searoute-checks", trips:"searoute-trips" };
let lang = localStorage.getItem(STORAGE.lang) || "en";
let currentPage = "home";
const english = {};
$$("[data-i18n]").forEach(el => english[el.dataset.i18n] = el.innerHTML);
const bn = {"brandSub": "সবুজ সামুদ্রিক বুদ্ধিমত্তা", "workspace": "ওয়ার্কস্পেস", "navHome": "ওভারভিউ", "navPlanner": "রুট পরিকল্পনা", "navFleet": "ফ্লিট ম্যাপ", "navCarbon": "কার্বন CII", "navSafety": "নিরাপত্তা ও নীতি", "navCopilot": "এআই সহকারী", "demoMode": "ডেমো ওয়ার্কস্পেস", "demoNote": "লাইভ সামুদ্রিক ডেটা সংযুক্ত নয়", "dataUnavailable": "লাইভ ডেটা নেই", "heroEyebrow": "সামুদ্রিক সিদ্ধান্ত সহায়তা", "heroTitle": "আরও বুদ্ধিমত্তার সাথে চলুন।<br><span>আরও নিরাপদে ফিরুন।</span>", "heroText": "ভ্রমণ পরিকল্পনা, পরিচালন নিরাপত্তা এবং পরিবেশ সচেতনতার সমন্বিত কর্মক্ষেত্র।", "planVoyage": "＋ ভ্রমণ পরিকল্পনা", "safetyReview": "নিরাপত্তা পর্যালোচনা", "routeVisual": "রুটের চিত্র · ডেমো", "atAGlance": "এক নজরে", "overviewTitle": "পরিচালন ওভারভিউ", "sampleWorkspace": "নমুনা ওয়ার্কস্পেস · লাইভ ডেটা নয়", "plannedVoyages": "পরিকল্পিত ভ্রমণ", "savedOnDevice": "এই ডিভাইসে সংরক্ষিত", "checklistProgress": "নিরাপত্তা চেকলিস্ট", "checklistComplete": "চেকলিস্ট সম্পন্ন", "distancePlanned": "পরিকল্পিত দূরত্ব", "demoEstimate": "শুধু ডেমো হিসাব", "carbonEstimate": "CO₂ হিসাব", "basedOnInputs": "আপনার দেওয়া তথ্য অনুযায়ী", "safetySnapshot": "নিরাপত্তার অবস্থা", "safetySnapshotText": "যাত্রার আগে সরকারি উৎস থেকে অবস্থা যাচাই করুন।", "needsReview": "পর্যালোচনা দরকার", "noLiveWarnings": "লাইভ সতর্কতা সংযুক্ত নয়", "noLiveWarningsText": "এই ওয়েবসাইট বর্তমানে সরকারি সামুদ্রিক সতর্কতা আনতে পারে না। যাত্রার আগে স্থানীয় কর্তৃপক্ষের তথ্য যাচাই করুন।", "openSafety": "নিরাপত্তা কেন্দ্র খুলুন →", "quickActions": "দ্রুত কাজ", "quickActionsText": "দৈনন্দিন কাজ শুরু করুন।", "newVoyage": "ভ্রমণ পরিকল্পনা তৈরি", "newVoyageSub": "দূরত্ব ও জ্বালানি হিসাব", "runChecklist": "নিরাপত্তা চেকলিস্ট", "runChecklistSub": "প্রয়োজনীয় সরঞ্জাম যাচাই", "askCopilot": "এআই সহকারীকে জিজ্ঞেস করুন", "askCopilotSub": "সাধারণ সামুদ্রিক নির্দেশনা", "voyageManagement": "ভ্রমণ ব্যবস্থাপনা", "plannerTitle": "রুট পরিকল্পনা", "plannerIntro": "আপনার দেওয়া তথ্য থেকে পরিকল্পনার হিসাব তৈরি করুন। এটি প্রত্যয়িত নেভিগেশন ব্যবস্থা নয়।", "routeInputs": "রুটের তথ্য", "routeInputsText": "ভ্রমণের তথ্য দিন।", "origin": "যাত্রা শুরুর বন্দর / স্থান", "destination": "গন্তব্য", "distance": "আনুমানিক দূরত্ব (নটিক্যাল মাইল)", "speed": "গড় গতি (নট)", "fuelRate": "জ্বালানি ব্যবহার (লিটার/ঘণ্টা)", "fuelPrice": "প্রতি লিটারে জ্বালানির দাম", "departureTime": "পরিকল্পিত যাত্রা শুরুর সময়", "calculateSave": "হিসাব করুন ও সংরক্ষণ করুন", "voyageEstimate": "ভ্রমণের আনুমানিক হিসাব", "estimateDisclaimer": "শুধু আপনার দেওয়া তথ্য থেকে হিসাব।", "estimateOnly": "আনুমানিক", "estimatedDuration": "আনুমানিক চলার সময়", "fuelRequired": "আনুমানিক জ্বালানি", "fuelCost": "আনুমানিক জ্বালানি খরচ", "returnReminder": "ফেরার সময়ের স্মারক", "plannerWarning": "স্রোত, আবহাওয়া, নিষিদ্ধ জলসীমা, জাহাজের সক্ষমতা বা রুটের ঝুঁকি বিবেচনা করে না। নেভিগেশন সিদ্ধান্ত স্বাধীনভাবে যাচাই করুন।", "savedVoyages": "সংরক্ষিত ভ্রমণ পরিকল্পনা", "savedVoyagesText": "এই ব্রাউজারে স্থানীয়ভাবে সংরক্ষিত।", "noVoyages": "এখনও কোনো পরিকল্পনা সংরক্ষিত নেই।", "situationalAwareness": "পরিস্থিতি সচেতনতা", "fleetTitle": "ফ্লিট ম্যাপ", "fleetIntro": "রুট ধারণা দেখানোর জন্য একটি ভিজ্যুয়াল কর্মক্ষেত্র। লাইভ GPS বা জাহাজ ট্র্যাকিং সংযুক্ত নয়।", "routeCanvas": "রুট ক্যানভাস", "routeCanvasText": "চিত্রভিত্তিক মানচিত্র — নেভিগেশনের জন্য নয়।", "demoMap": "ডেমো ম্যাপ", "plannedRoute": "চিত্রভিত্তিক রুট", "noLiveVessels": "লাইভ জাহাজ নেই", "fleetStatus": "ফ্লিটের অবস্থা", "fleetStatusText": "কোনো লাইভ ফিড সংযুক্ত নেই।", "noFleetData": "লাইভ ফ্লিট ডেটা নেই", "noFleetDataText": "জাহাজের অবস্থান দেখাতে বিশ্বস্ত ট্র্যাকিং প্রদানকারী ও প্রয়োজনীয় অনুমতি দরকার।", "privacyNotice": "সম্মতি ছাড়া ব্যক্তিগত জাহাজের অবস্থান প্রকাশ করবেন না।", "environmentalInsights": "পরিবেশগত বিশ্লেষণ", "carbonTitle": "কার্বন ও CII হিসাবকারী", "carbonIntro": "আপনার দেওয়া জ্বালানি তথ্য দিয়ে CO₂ হিসাব করুন। এটি সরকারি IMO CII রেটিং নয়।", "emissionInputs": "নির্গমন তথ্য", "emissionInputsText": "সম্ভব হলে যাচাইকৃত জাহাজ ও জ্বালানির তথ্য ব্যবহার করুন।", "fuelBurned": "ব্যবহৃত জ্বালানি (টন)", "emissionFactor": "CO₂ ফ্যাক্টর (টন CO₂ / টন জ্বালানি)", "cargoDistance": "কার্গো × দূরত্ব (টন-নটিক্যাল মাইল)", "calculateEmissions": "নির্গমন হিসাব করুন", "carbonResults": "হিসাবের ফল", "carbonResultsText": "প্রদত্ত মান থেকে হিসাব।", "estimatedEmissions": "আনুমানিক CO₂ নির্গমন", "notVerified": "স্বাধীনভাবে যাচাই করা হয়নি", "intensity": "চিত্রভিত্তিক কার্বন তীব্রতা", "ciiNote": "সরকারি Carbon Intensity Indicator হিসাবের জন্য জাহাজ-নির্দিষ্ট তথ্য ও প্রযোজ্য নিয়ম দরকার। এই সহজ হিসাবকে নিয়ম মেনে চলার ফল হিসেবে দেখাবেন না।", "safetyCenter": "নিরাপত্তা কেন্দ্র", "safetyTitle": "নিরাপত্তা ও নীতি", "safetyIntro": "যাত্রার আগে ব্যবহারিক চেকলিস্ট ও নিরাপত্তার স্মারক।", "officialWarningTitle": "সরকারি সামুদ্রিক সতর্কতা যাচাই করুন", "officialWarningText": "এই সংস্করণে সরকারি লাইভ সতর্কতার ফিড নেই। যাত্রার আগে সংশ্লিষ্ট আবহাওয়া ও সামুদ্রিক কর্তৃপক্ষের তথ্য নিন।", "preDeparture": "যাত্রার আগের চেকলিস্ট", "preDepartureText": "অগ্রগতি এই ব্রাউজারে সংরক্ষিত।", "lifeJackets": "লাইফ জ্যাকেট / ভাসমান সরঞ্জাম", "lifeJacketsSub": "সব ক্রুর জন্য উপযুক্ত সরঞ্জাম আছে।", "communications": "যোগাযোগের সরঞ্জাম", "communicationsSub": "রেডিও বা ফোন চার্জ ও কার্যকর।", "weatherCheck": "সরকারি পূর্বাভাস ও সতর্কতা যাচাই", "weatherCheckSub": "সরকারি উৎস থেকে বর্তমান তথ্য যাচাই করুন।", "fuelCheck": "জ্বালানি ও ইঞ্জিন পরীক্ষা", "fuelCheckSub": "জ্বালানির মজুত ও ইঞ্জিনের অবস্থা যাচাই।", "firstAid": "প্রাথমিক চিকিৎসার বাক্স", "firstAidSub": "সরঞ্জাম আছে এবং সহজে পাওয়া যায়।", "water": "পানি ও প্রয়োজনীয় সরবরাহ", "waterSub": "ভ্রমণ ও জরুরি পরিস্থিতির জন্য যথেষ্ট।", "crewPlan": "ক্রু সংখ্যা ও যোগাযোগ পরিকল্পনা", "crewPlanSub": "বিশ্বস্ত ব্যক্তি ফেরার সম্ভাব্য সময় জানেন।", "emergencyKit": "জরুরি সরঞ্জাম যাচাই", "emergencyKitSub": "উপযুক্ত বিপদ সংকেত ও জরুরি সরঞ্জাম পরীক্ষা।", "resetChecklist": "চেকলিস্ট রিসেট", "safetyPrinciples": "নিরাপত্তার মূলনীতি", "safetyPrinciplesText": "প্রশিক্ষণের বিকল্প নয়; স্মারক হিসেবে ব্যবহার করুন।", "verifyConditions": "পরিস্থিতি যাচাই করুন", "verifyConditionsText": "বর্তমান সরকারি সতর্কতা ও স্থানীয় পরামর্শ নিন।", "sharePlan": "পরিকল্পনা জানিয়ে রাখুন", "sharePlanText": "বিশ্বস্ত কাউকে রুট ও ফেরার সময় জানান।", "respectLimits": "জাহাজের সীমা মেনে চলুন", "respectLimitsText": "সফটওয়্যারের হিসাবকে নিরাপত্তা বিচারবুদ্ধির ওপরে রাখবেন না।", "protectPrivacy": "গোপনীয়তা রক্ষা করুন", "protectPrivacyText": "প্রয়োজন ও সম্মতি ছাড়া ক্রু বা জাহাজের তথ্য শেয়ার করবেন না।", "safetyDisclaimer": "এই অ্যাপ উদ্ধার পরিষেবা পাঠায় না বা নিরাপদ যাত্রার নিশ্চয়তা দেয় না।", "intelligentSupport": "বুদ্ধিমান সহায়তা", "copilotTitle": "এআই সামুদ্রিক সহকারী", "copilotIntro": "সাধারণ সামুদ্রিক নিরাপত্তা সম্পর্কে প্রশ্ন করুন। এই স্ট্যাটিক GitHub Pages সংস্করণে নিরাপদ এআই ব্যাকএন্ড না থাকলে স্থানীয় নির্দেশনা ব্যবহৃত হয়।", "localGuidance": "স্থানীয় নির্দেশনা · Gemini সংযুক্ত নয়", "assistant": "সহকারী", "welcomeCopilot": "স্বাগতম।", "welcomeCopilotText": "যাত্রার আগের পরীক্ষা, পরিকল্পনা, জ্বালানির হিসাব বা সাধারণ সামুদ্রিক নিরাপত্তা সম্পর্কে জিজ্ঞেস করুন। এই সংস্করণে লাইভ অবস্থা যাচাই করতে পারি না।", "suggestChecklist": "যাত্রার আগের চেকলিস্ট", "suggestWeather": "খারাপ আবহাওয়ার প্রস্তুতি", "suggestTrip": "ভ্রমণ পরিকল্পনার মূল বিষয়", "aiDisclaimer": "শুধু সাধারণ নির্দেশনা। জরুরি অবস্থায় যাচাইকৃত স্থানীয় জরুরি পরিষেবার সাথে যোগাযোগ করুন। এই সহকারীকে লাইভ সতর্কতার উৎস হিসেবে ব্যবহার করবেন না।", "whatICanHelp": "যে বিষয়ে সাহায্য করতে পারি", "capSafety": "নিরাপত্তার প্রস্তুতি", "capSafetyText": "সরঞ্জাম ও যাত্রার আগের পরীক্ষা।", "capPlanning": "ভ্রমণ পরিকল্পনা", "capPlanningText": "রুটের তথ্য ও আনুমানিক হিসাব।", "capFuel": "জ্বালানি ও কার্বন", "capFuelText": "অ্যাপের সাধারণ হিসাব বোঝা।", "capLive": "লাইভ সামুদ্রিক তথ্য", "capLiveText": "যাচাইকৃত ডেটা ও নিরাপদ এআই ব্যাকএন্ড সংযুক্ত না হওয়া পর্যন্ত অনুপলব্ধ।", "connectGemini": "আসল Gemini AI চান?", "connectGeminiText": "ব্যাকএন্ড ফাংশন বা সার্ভার-সাইড এন্ডপয়েন্ট ব্যবহার করুন। এই পাবলিক ওয়েবসাইটের JavaScript-এ গোপন API কী রাখবেন না।", "footerNote": "শুধু পরিকল্পনার সহায়তা · প্রত্যয়িত নেভিগেশন বা জরুরি পরিষেবা নয়", "toastSaved": "পরিকল্পনা সংরক্ষণ হয়েছে", "toastReset": "চেকলিস্ট রিসেট হয়েছে", "toastCopied": "প্রশ্ন যোগ হয়েছে", "emptyAnswer": "আমি এই বিষয়ে নিশ্চিত তথ্য দিতে পারছি না। সরকারি সামুদ্রিক কর্তৃপক্ষের তথ্য যাচাই করুন।", "answerChecklist": "যাত্রার আগে লাইফ জ্যাকেট, যোগাযোগের সরঞ্জাম, সরকারি আবহাওয়া সতর্কতা, জ্বালানি ও ইঞ্জিন, প্রাথমিক চিকিৎসা, পানি ও জরুরি সরঞ্জাম পরীক্ষা করুন। বিশ্বস্ত কাউকে রুট ও ফেরার সময় জানান।", "answerWeather": "খারাপ আবহাওয়ার সম্ভাবনা থাকলে সরকারি সতর্কতা অনুসরণ করুন, প্রয়োজনে যাত্রা স্থগিত করুন, ক্রুদের নিরাপত্তা নিশ্চিত করুন এবং স্থানীয় সামুদ্রিক কর্তৃপক্ষের নির্দেশনা মানুন। এই অ্যাপ লাইভ আবহাওয়া যাচাই করে না।", "answerTrip": "যাত্রা পরিকল্পনায় যাত্রার স্থান, গন্তব্য, প্রস্থানের সময়, সম্ভাব্য ফেরার সময়, ক্রু সংখ্যা, জ্বালানি, যোগাযোগ ব্যবস্থা, জরুরি যোগাযোগ এবং সরকারি সতর্কতা যাচাই অন্তর্ভুক্ত করুন।", "answerEmergency": "তাৎক্ষণিক বিপদে যাচাইকৃত স্থানীয় জরুরি বা সামুদ্রিক উদ্ধার পরিষেবার সাথে যোগাযোগ করুন এবং তাদের নির্দেশনা অনুসরণ করুন। এই ওয়েবসাইট উদ্ধার পাঠাতে পারে না।", "answerFuel": "জ্বালানির আনুমানিক হিসাব = চলার সময় × প্রতি ঘণ্টার জ্বালানি ব্যবহার। বাস্তব খরচ স্রোত, আবহাওয়া, ইঞ্জিন, গতি ও লোডে পরিবর্তিত হয়। জরুরি মজুত রাখুন।", "answerData": "এই GitHub Pages সংস্করণে লাইভ সামুদ্রিক ডেটা বা Gemini API ব্যাকএন্ড সংযুক্ত নয়। তাই বর্তমান সতর্কতা বা আবহাওয়ার বিষয়ে কোনো দাবি করা হচ্ছে না।"};
function t(key){ return (lang==="bn" && bn[key]) || english[key] || key; }
function applyLanguage(){
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { const key=el.dataset.i18n; if(lang==="bn" && bn[key]) el.innerHTML=bn[key]; else if(english[key]!==undefined) el.innerHTML=english[key]; });
  $("#languageBtn").textContent = lang==="en" ? "বাংলা / EN" : "English / বাংলা";
  $("#currentTitle").textContent = t(({home:"navHome",planner:"navPlanner",fleet:"navFleet",carbon:"navCarbon",safety:"navSafety",copilot:"navCopilot"})[currentPage]);
  $("#chatInput").placeholder = lang==="bn" ? "সামুদ্রিক নিরাপত্তা সম্পর্কে প্রশ্ন করুন…" : "Ask a maritime safety question…";
}
function showPage(page){
  currentPage=page;
  $$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));
  $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  $("#currentTitle").textContent=t(({home:"navHome",planner:"navPlanner",fleet:"navFleet",carbon:"navCarbon",safety:"navSafety",copilot:"navCopilot"})[page]);
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".nav-item").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
$$("[data-goto]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.goto)));
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#languageBtn").addEventListener("click",()=>{lang=lang==="en"?"bn":"en";localStorage.setItem(STORAGE.lang,lang);applyLanguage();renderTrips();renderChecks();});
$("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light-mode");localStorage.setItem(STORAGE.theme,document.body.classList.contains("light-mode")?"light":"dark");});
if(localStorage.getItem(STORAGE.theme)==="light") document.body.classList.add("light-mode");
function fmt(n, digits=1){return Number(n).toLocaleString(lang==="bn"?"bn-BD":"en-US",{maximumFractionDigits:digits});}
function getTrips(){try{return JSON.parse(localStorage.getItem(STORAGE.trips)||"[]")}catch{return []}}
function saveTrips(v){localStorage.setItem(STORAGE.trips,JSON.stringify(v))}
function renderTrips(){
 const trips=getTrips();$("#voyageCount").textContent=fmt(trips.length,0);
 const total=trips.reduce((s,x)=>s+Number(x.distance||0),0);$("#distanceTotal").textContent=trips.length?fmt(total)+" nm":"—";
 $("#voyageList").classList.toggle("empty-state",!trips.length);
 if(!trips.length){$("#voyageList").textContent=t("noVoyages");return}
 $("#voyageList").innerHTML=trips.map((x,i)=>`<div class="saved-trip"><div><strong>${escapeHTML(x.origin)} → ${escapeHTML(x.destination)}</strong><small>${fmt(x.distance)} nm · ${fmt(x.hours)} h · ${escapeHTML(x.date||"")}</small></div><button class="delete-trip" data-delete="${i}" aria-label="Delete plan">×</button></div>`).join("");
 $$("[data-delete]").forEach(b=>b.addEventListener("click",()=>{const list=getTrips();list.splice(Number(b.dataset.delete),1);saveTrips(list);renderTrips();toast(lang==="bn"?"পরিকল্পনা মুছে ফেলা হয়েছে":"Plan deleted");}));
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
let lastEstimate={distance:0,fuel:0,cost:0,hours:0};
$("#plannerForm").addEventListener("submit",e=>{
 e.preventDefault();
 const origin=$("#origin").value.trim(),destination=$("#destination").value.trim(),distance=+$("#distance").value,speed=+$("#speed").value,rate=+$("#fuelRate").value,price=+$("#fuelPrice").value;
 if(!origin||!destination||distance<=0||speed<=0||rate<0||price<0)return;
 const hours=distance/speed,fuel=hours*rate,cost=fuel*price;
 lastEstimate={distance,fuel,cost,hours};
 $("#durationResult").textContent=fmt(hours)+" h";$("#fuelResult").textContent=fmt(fuel)+" L";$("#costResult").textContent=fmt(cost);$("#routeLabel").textContent=origin+" → "+destination;
 const dep=$("#departureTime").value?new Date($("#departureTime").value):new Date();
 const ret=new Date(dep.getTime()+hours*3600000);$("#returnResult").textContent=ret.toLocaleString(lang==="bn"?"bn-BD":"en-US",{dateStyle:"medium",timeStyle:"short"});
 const trips=getTrips();trips.unshift({origin,destination,distance,hours,fuel,cost,date:dep.toLocaleString(lang==="bn"?"bn-BD":"en-US",{dateStyle:"medium",timeStyle:"short"})});saveTrips(trips.slice(0,30));renderTrips();updateCarbonDashboard();toast(t("toastSaved"));
});
function getChecks(){try{return JSON.parse(localStorage.getItem(STORAGE.checks)||"{}")}catch{return {}}}
function renderChecks(){
 const saved=getChecks();$$("[data-check]").forEach(el=>el.checked=!!saved[el.dataset.check]);
 const all=$$("[data-check]"),done=all.filter(x=>x.checked).length,pct=Math.round(done/all.length*100);
 $("#checkProgress").textContent=pct+"%";$("#checkBar").style.width=pct+"%";$("#safetyBar").style.width=pct+"%";$("#checkPill").textContent=done+" / "+all.length;
}
$$("[data-check]").forEach(el=>el.addEventListener("change",()=>{const s=getChecks();s[el.dataset.check]=el.checked;localStorage.setItem(STORAGE.checks,JSON.stringify(s));renderChecks();}));
$("#resetChecklist").addEventListener("click",()=>{localStorage.removeItem(STORAGE.checks);renderChecks();toast(t("toastReset"));});
function updateCarbon(){
 const fuel=Math.max(0,+$("#carbonFuel").value||0),factor=Math.max(0,+$("#emissionFactor").value||0),cargo=Math.max(0,+$("#cargoDistance").value||0),co2=fuel*factor;
 $("#co2Result").textContent=fmt(co2,3)+" t";$("#intensityResult").textContent=cargo>0?fmt(co2*1000000/cargo,3)+" g/t-nm":"—";
}
$("#carbonForm").addEventListener("submit",e=>{e.preventDefault();updateCarbon();updateCarbonDashboard();});
function updateCarbonDashboard(){const f=Math.max(0,+$("#carbonFuel").value||0),factor=Math.max(0,+$("#emissionFactor").value||0);$("#carbonTotal").textContent=fmt(f*factor,2)+" t";}
$$("[data-question]").forEach(b=>b.addEventListener("click",()=>{ $("#chatInput").value=b.dataset.question.trim();$("#chatInput").focus();}));
function localAnswer(q){
 const s=q.toLowerCase();
 if(/weather|storm|rough|wave|cyclone|আবহাওয়া|ঝড়|ঢেউ/.test(s))return t("answerWeather");
 if(/checklist|before departure|life jacket|equipment|যাত্রার আগে|লাইফ জ্যাকেট|সরঞ্জাম/.test(s))return t("answerChecklist");
 if(/trip|plan|route|departure|voyage|ভ্রমণ|রুট|যাত্রা/.test(s))return t("answerTrip");
 if(/emergency|rescue|danger|help|জরুরি|বিপদ|উদ্ধার/.test(s))return t("answerEmergency");
 if(/fuel|carbon|co2|জ্বালানি|কার্বন/.test(s))return t("answerFuel");
 if(/live|warning|forecast|data|সতর্কতা|পূর্বাভাস|ডেটা/.test(s))return t("answerData");
 return t("emptyAnswer");
}
function addMessage(who, text){
 const row=document.createElement("div");row.className="message "+who;
 const avatar=document.createElement("span");avatar.className="message-avatar";avatar.textContent=who==="assistant"?"✧":"You";
 const bubble=document.createElement("div");bubble.className="bubble";const p=document.createElement("p");p.textContent=text;bubble.appendChild(p);row.append(avatar,bubble);$("#chatMessages").appendChild(row);$("#chatMessages").scrollTop=$("#chatMessages").scrollHeight;
}
$("#chatForm").addEventListener("submit",e=>{e.preventDefault();const q=$("#chatInput").value.trim();if(!q)return;addMessage("user",q);$("#chatInput").value="";setTimeout(()=>addMessage("assistant",localAnswer(q)),180);});
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2400);}
$("#year").textContent=new Date().getFullYear();
applyLanguage();renderTrips();renderChecks();updateCarbon();updateCarbonDashboard();
