/* Grammar Assistant B2 — générateurs d'exercices (phrases renouvelées à chaque série)
   Un générateur renvoie UN exercice au format standard.
   Le moteur en tire 7 par série, sans doublon. */
window.GRAM_GEN={};
(function(){
const pick=a=>a[Math.floor(Math.random()*a.length)];

/* ── i. SINCE / FOR ── */
const PEOPLE=[
 {s:'She',h:'has',p:1},{s:'He',h:'has',p:1},{s:'My tutor',h:'has',p:1},
 {s:'Her manager',h:'has',p:1},{s:'They',h:'have',p:0},{s:'We',h:'have',p:0},{s:'I',h:'have',p:0}];
const ORGS=[
 {s:'The company',h:'has',p:1},{s:'This firm',h:'has',p:1},
 {s:'The department',h:'has',p:1},{s:'Our main supplier',h:'has',p:1},{s:'This agency',h:'has',p:1}];
const PRED_P=[
 {s:'works in this department',b:'work in this department',pp:'worked in this department'},
 {s:'lives in Manchester',b:'live in Manchester',pp:'lived in Manchester'},
 {s:'teaches this course',b:'teach this course',pp:'taught this course'},
 {s:'uses this software',b:'use this software',pp:'used this software'},
 {s:'studies accounting',b:'study accounting',pp:'studied accounting'},
 {s:'commutes by train',b:'commute by train',pp:'commuted by train'},
 {s:'works from home',b:'work from home',pp:'worked from home'}];
const PRED_O=[
 {s:'operates in Asia',b:'operate in Asia',pp:'operated in Asia'},
 {s:'employs over 200 people',b:'employ over 200 people',pp:'employed over 200 people'},
 {s:'sells its products online',b:'sell its products online',pp:'sold its products online'},
 {s:'invests in renewable energy',b:'invest in renewable energy',pp:'invested in renewable energy'}];
const DUR=['three years','six months','ten days','two weeks','over a decade','almost a year','five years','eighteen months'];
const START_ANY=['2019','last September','the beginning of the year','March','2022','the pandemic'];
const START_ORG=['the merger','the last audit','the change of management'];
function start(org){return org&&Math.random()<.5?pick(START_ORG):pick(START_ANY)}
const PAIRS_ANY=[{st:'2019',d:'six years'},{st:'last September',d:'almost a year'},
 {st:'the beginning of the year',d:'several months'},{st:'March',d:'six months'},{st:'2022',d:'three years'}];
const PAIRS_ORG=[{st:'the merger',d:'three years'},{st:'the last audit',d:'over a year'}];
function pair(org){return org&&Math.random()<.5?pick(PAIRS_ORG):pick(PAIRS_ANY)}
const PAST=[
 {s:'left the company',o:0},{s:'joined the team',o:0},{s:'moved to Bristol',o:0},
 {s:'graduated',o:0},{s:'signed the contract',o:1},{s:'opened its first office',o:1},
 {s:'changed its logo',o:1}];

function subj(org){return org?pick(ORGS):pick(PEOPLE)}
function pred(su,org){const p=org?pick(PRED_O):pick(PRED_P);return su.p?p.s:p.b}
function pp(org){return org?pick(PRED_O):pick(PRED_P)}

const FB_FOR=["FOR introduit une durée : on répond à « combien de temps ? ».",
 "Une durée (un nombre + une unité de temps) appelle FOR.",
 "FOR + durée. SINCE marquerait un point de départ."];
const FB_SINCE=["SINCE introduit un point de départ : on répond à « depuis quand ? ».",
 "Un repère daté ou un événement appelle SINCE.",
 "SINCE + point de départ. FOR marquerait une durée."];

GRAM_GEN['v_i']=function(){
 const shape=Math.floor(Math.random()*5);
 const org=Math.random()<.4, su=subj(org), pr=pp(org);
 if(shape===0){ /* choisir since ou for */
  const isFor=Math.random()<.5, x=isFor?pick(DUR):start(org);
  return {type:'fill',q:`${su.s} ${su.h} ${pr.pp} ___ ${x}.`,a:[isFor?'for':'since'],
   fb:(isFor?pick(FB_FOR):pick(FB_SINCE))+` Ici : ${isFor?'for':'since'} ${x}.`};
 }
 if(shape===1){ /* QCM since / for / ago */
  const isFor=Math.random()<.5, x=isFor?pick(DUR):start(org);
  return {type:'mcq',q:`${su.s} ${su.h} not ${pr.pp} ___ ${x}.`,opts:['for','since','ago'],correct:isFor?0:1,
   fb:(isFor?pick(FB_FOR):pick(FB_SINCE))+" AGO est impossible ici : il s'emploie avec un preterite et se place après la durée."};
 }
 if(shape===2){ /* ago */
  const p=pick(PAST.filter(p=>org?p.o===1:p.o===0)), s2=org?pick(ORGS):pick(PEOPLE), d=pick(DUR);
  return {type:'fill',q:`${s2.s.replace(/^I$/,'I')} ${p.s} ${d} ___.`,a:['ago'],
   fb:`AGO se place APRÈS la durée et s'emploie avec un preterite : ${d} ago.`};
 }
 if(shape===3){ /* corriger : présent + since + durée */
  const d=pick(DUR);
  return {type:'fix',q:`Corrige : <i>${su.s} ${su.p?pr.s:pr.b} since ${d}.</i>`,
   a:[`${su.s} ${su.h} ${pr.pp} for ${d}.`],
   fb:`Deux corrections : une durée appelle FOR, et le lien passé-présent impose le present perfect → ${su.s} ${su.h} ${pr.pp} for ${d}.`};
 }
 /* shape 4 : compléter les deux, avec repère et durée cohérents */
 const pr2=pair(org);
 return {type:'fill',q:`${su.s} ${su.h} ${pr.pp} ___ ${pr2.st} — that is ___ ${pr2.d} now.`,
  a:['since / for','since, for','since for'],
  fb:`« ${pr2.st} » est un point de départ (since) ; « ${pr2.d} » est une durée (for).`};
};
})();
