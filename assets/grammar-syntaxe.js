/* Grammar Assistant B2 — AUTOUR DE LA SYNTAXE */
window.GRAM_SYNTAXE=[
{id:'s_x',letter:'x',t:'Word order',exp:[
`<h4>La règle</h4><p>L'anglais suit un ordre très stable : <b>Sujet – Verbe – Complément d'objet – Manière – Lieu – Temps</b>.</p>
<h4>Structure</h4><p><span class="struct">S + V + O + (comment) + (where) + (when)</span></p>
<h4>Exemples</h4><ul><li class="en">She presented her results clearly at the conference last week.</li><li class="en">We sent the invoice to the client yesterday.</li></ul>
<h4>Place des adverbes</h4><table><tr><th>Type</th><th>Place</th><th>Exemple</th></tr><tr><td>Fréquence (always, often, never)</td><td>avant le verbe, après BE</td><td class="en">He often works late. / He is often late.</td></tr><tr><td>Manière (quickly, clearly)</td><td>après le complément</td><td class="en">She read the report carefully.</td></tr><tr><td>Temps (yesterday, in 2020)</td><td>fin de phrase (ou début)</td><td class="en">Yesterday we finished early.</td></tr></table>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Séparer le verbe de son objet : <span class="no">I like very much this book</span> → <span class="yes">I like this book very much</span>.</li><li>Inversion abusive dans une question indirecte : <span class="no">I don't know where is he</span> → <span class="yes">I don't know where he is</span>.</li><li>Adverbe de fréquence mal placé : <span class="no">I go always</span> → <span class="yes">I always go</span>.</li></ul></div>
<h4>Questions</h4><p><span class="struct">(Wh-) + auxiliaire + sujet + verbe</span> : <span class="en">Where did she go? Why have they left?</span></p>`,
`<h4>Autrement dit</h4><p>Trois interdits suffisent à corriger la plupart des fautes :</p><ol style="margin-left:20px"><li><b>Ne jamais séparer le verbe de son objet.</b> Tout le reste vient après.</li><li><b>L'adverbe de fréquence colle au verbe</b> (avant un verbe ordinaire, après BE).</li><li><b>Pas d'inversion</b> dans une proposition subordonnée.</li></ol>
<h4>À comparer</h4><table><tr><th class="no">Faux</th><th class="yes">Correct</th></tr><tr><td class="en">I understand not this rule.</td><td class="en">I don't understand this rule.</td></tr><tr><td class="en">She speaks fluently English.</td><td class="en">She speaks English fluently.</td></tr><tr><td class="en">Do you know what is the problem?</td><td class="en">Do you know what the problem is?</td></tr></table>
<h4>Mise en relief</h4><p>Pour insister, l'anglais déplace le complément de temps en tête : <span class="en">In 2020, everything changed.</span> Ou utilise une structure clivée : <span class="en">It is the deadline that worries me.</span></p>`],
ex:[
{type:'fix',q:'Corrige : <i>I like very much this series.</i>',a:['I like this series very much.'],fb:"On ne sépare pas le verbe de son objet : l'adverbe passe après le complément."},
{type:'fix',q:'Corrige : <i>She speaks fluently three languages.</i>',a:['She speaks three languages fluently.'],fb:"Ordre : verbe + objet + manière."},
{type:'mcq',q:'Which is correct?',opts:['I go usually to the library on Fridays.','I usually go to the library on Fridays.'],correct:1,fb:"L'adverbe de fréquence se place avant le verbe ordinaire."},
{type:'fix',q:'Corrige : <i>Do you know where is the meeting room?</i>',a:['Do you know where the meeting room is?'],fb:"Question indirecte : pas d'inversion, l'ordre sujet-verbe est conservé."},
{type:'fill',q:'Remets dans l\'ordre : <i>the report / carefully / read / she / yesterday</i>',a:['She read the report carefully yesterday.'],fb:"Sujet + verbe + objet + manière + temps."},
{type:'mcq',q:'Which is correct?',opts:['He is often in Paris on business.','He often is in Paris on business.'],correct:0,fb:"Avec BE, l'adverbe de fréquence se place après le verbe."},
{type:'fill',q:'Remets dans l\'ordre : <i>at the conference / a presentation / gave / last week / he</i>',a:['He gave a presentation at the conference last week.'],fb:"Lieu avant temps : … at the conference last week."}]},

{id:'s_y',letter:'y',t:'Relative pronouns',exp:[
`<h4>La règle</h4><p>Le pronom relatif relie une proposition à un nom (l'antécédent). Le choix dépend de la nature de l'antécédent et de sa fonction.</p>
<h4>Tableau</h4><table><tr><th>Pronom</th><th>Antécédent</th><th>Exemple</th></tr><tr><td>who</td><td>personne (sujet ou objet)</td><td class="en">The manager who hired me.</td></tr><tr><td>which</td><td>chose</td><td class="en">The report which arrived today.</td></tr><tr><td>that</td><td>personne ou chose (déterminatif)</td><td class="en">The book that changed my mind.</td></tr><tr><td>whose</td><td>possession</td><td class="en">The firm whose CEO resigned.</td></tr><tr><td>where / when</td><td>lieu / moment</td><td class="en">The city where I grew up.</td></tr><tr><td>Ø</td><td>relatif objet, omissible</td><td class="en">The film (that) I saw.</td></tr></table>
<h4>Deux types de relatives</h4><p><b>Déterminative</b> (indispensable, sans virgule) : <span class="en">Students who fail can resit the exam.</span><br><b>Explicative</b> (ajout, entre virgules, jamais THAT) : <span class="en">My tutor, who is British, corrected my essay.</span></p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">The people which…</span> → <span class="yes">who / that</span>.</li><li><span class="no">the man that his car…</span> → <span class="yes">the man whose car…</span></li><li>Reprise du sujet : <span class="no">The book that I read it</span> → <span class="yes">The book that I read</span>.</li><li>Relative explicative avec THAT : impossible après une virgule.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux questions :</p><ol style="margin-left:20px"><li><b>Personne ou chose ?</b> WHO / WHICH.</li><li><b>Le relatif est-il sujet ou objet ?</b> S'il est objet, tu peux le supprimer : <span class="en">the email (that) she sent</span>.</li></ol>
<h4>Test de l'omission</h4><p class="en">The candidate who applied yesterday. <em>(sujet → obligatoire)</em><br>The candidate (whom / that) we interviewed. <em>(objet → omissible)</em></p>
<h4>WHOSE</h4><p>Un seul mot pour « dont le / de qui » : <span class="en">a company whose profits have doubled</span>.</p>
<h4>Préposition</h4><p class="en">the colleague I work with <em>(courant)</em><br>the colleague with whom I work <em>(formel)</em></p>
<h4>Virgule = information secondaire</h4><p class="en">Employees who work overtime get a bonus. <em>(seulement eux)</em><br>Employees, who work overtime, get a bonus. <em>(tous travaillent en heures sup.)</em></p><p><em>La virgule change le sens : à surveiller de près.</em></p>`],
ex:[
{type:'fill',q:'The colleague ___ helped me has just resigned.',a:['who','that'],fb:"Antécédent personne, fonction sujet : WHO (ou THAT)."},
{type:'fill',q:'This is the company ___ profits have doubled.',a:['whose'],fb:"Rapport de possession : WHOSE."},
{type:'mcq',q:'My tutor, ___ teaches economics, wrote the reference.',opts:['that','who','which'],correct:1,fb:"Relative explicative (entre virgules) : THAT est impossible, et l'antécédent est une personne."},
{type:'fix',q:'Corrige : <i>The report which I sent it yesterday was too long.</i>',a:['The report which I sent yesterday was too long.','The report I sent yesterday was too long.'],fb:"On ne reprend pas le complément : le relatif suffit."},
{type:'mcq',q:'Do you remember the day ___ we signed the contract?',opts:['where','when','which'],correct:1,fb:"Antécédent temporel : WHEN."},
{type:'fill',q:'The candidate ___ we interviewed yesterday accepted the offer. (relatif omissible : écris la phrase sans relatif)',a:['The candidate we interviewed yesterday accepted the offer.'],fb:"Le relatif objet peut être supprimé."},
{type:'mcq',q:'Which is correct?',opts:['The people which attended were students.','The people who attended were students.'],correct:1,fb:"WHICH ne s'emploie pas pour des personnes."}]},

{id:'s_z',letter:'z',t:'Traduire « pour »',exp:[
`<h4>La règle</h4><p>Le français « pour » couvre plusieurs valeurs que l'anglais distingue.</p>
<h4>Tableau</h4><table><tr><th>Valeur</th><th>Traduction</th><th>Exemple</th></tr><tr><td>But, intention (même sujet)</td><td>to / in order to / so as to + V</td><td class="en">I called to confirm the date.</td></tr><tr><td>But (sujet différent)</td><td>so that + proposition</td><td class="en">I called so that she could confirm.</td></tr><tr><td>Destinataire, bénéficiaire</td><td>for + nom</td><td class="en">This file is for the auditor.</td></tr><tr><td>Fonction d'un objet</td><td>for + V-ing</td><td class="en">A tool for measuring risk.</td></tr><tr><td>Durée prévue</td><td>for + durée</td><td class="en">I'm here for two days.</td></tr><tr><td>Cause</td><td>because of / for</td><td class="en">She was praised for her work.</td></tr></table>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">for to improve</span> : impossible → <span class="yes">to improve</span>.</li><li><span class="no">I came for see you</span> → <span class="yes">I came to see you</span>.</li><li><span class="no">so that to</span> → <span class="yes">so that + sujet + verbe</span>.</li><li><span class="no">for improve</span> → <span class="yes">for improving</span> ou <span class="yes">to improve</span>.</li></ul></div>
<h4>En contexte B2</h4><p class="en">The firm invested in training in order to reduce turnover, and offered bonuses so that employees would stay.</p>`,
`<h4>Autrement dit</h4><p>Un seul réflexe : <b>ce qui suit « pour » est-il un verbe ou un nom ?</b></p><ul><li><b>Verbe</b> → TO + base verbale (jamais FOR + verbe).</li><li><b>Nom ou pronom</b> → FOR.</li><li><b>Nouveau sujet</b> → SO THAT + sujet + verbe.</li></ul>
<h4>Trois phrases modèles</h4><p class="en">I stayed late to finish the report. <em>(même sujet)</em><br>I stayed late so that my colleague could leave. <em>(autre sujet)</em><br>I bought a present for my colleague. <em>(nom)</em></p>
<h4>Registre</h4><p><span class="en">to</span> est neutre, <span class="en">in order to</span> et <span class="en">so as to</span> sont plus formels et fréquents à l'écrit. Leur négation : <span class="en">in order not to / so as not to</span>.</p>
<h4>Cas particulier</h4><p>Après un adjectif, la structure est <span class="struct">for + complément + to + V</span> : <span class="en">It is important for students to attend.</span></p>`],
ex:[
{type:'fix',q:'Corrige : <i>She stayed late for finish the audit.</i>',a:['She stayed late to finish the audit.','She stayed late in order to finish the audit.'],fb:"« Pour + verbe » se traduit par TO + base verbale, jamais FOR + verbe."},
{type:'fill',q:'This report is ___ the finance department.',a:['for'],fb:"Destinataire (un nom) : FOR."},
{type:'mcq',q:'We changed the schedule ___ everyone could attend.',opts:['to','for','so that'],correct:2,fb:"Le sujet du but est différent (everyone) : SO THAT + proposition."},
{type:'fill',q:'It is a useful app ___ ___ <b>(track)</b> expenses. (fonction de l\'objet)',a:['for tracking'],fb:"Fonction d'un objet : FOR + V-ing (ou TO + base verbale)."},
{type:'fix',q:'Corrige : <i>He left early for to catch his train.</i>',a:['He left early to catch his train.'],fb:"« For to » n'existe pas en anglais moderne."},
{type:'mcq',q:'They cut costs ___ avoid redundancies.',opts:['in order to','for','so that'],correct:0,fb:"But avec le même sujet, registre soutenu : IN ORDER TO."},
{type:'fill',q:'It is essential ___ students ___ ___ <b>(read)</b> the instructions. (structure après adjectif)',a:['for / to read','for, to read','for to read'],fb:"Après un adjectif : FOR + complément + TO + base verbale (for students to read)."}]},

{id:'s_aa',letter:'aa',t:'Traduire « il y a »',exp:[
`<h4>La règle</h4><p>Deux sens à ne pas confondre : l'<b>existence</b> (there is / there are) et le <b>temps écoulé</b> (ago).</p>
<h4>Tableau</h4><table><tr><th>Sens</th><th>Structure</th><th>Exemple</th></tr><tr><td>Existence, singulier</td><td>there is / there was</td><td class="en">There is a problem with the file.</td></tr><tr><td>Existence, pluriel</td><td>there are / there were</td><td class="en">There are three options.</td></tr><tr><td>Temps écoulé</td><td>durée + ago (+ preterite)</td><td class="en">He left two years ago.</td></tr><tr><td>Durée qui continue</td><td>for + durée (+ present perfect)</td><td class="en">He has been away for two years.</td></tr></table>
<h4>Autres temps de THERE</h4><p class="en">There will be a meeting. · There has been a change. · There used to be a factory here. · There might be a delay.</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">It has a problem</span> → <span class="yes">There is a problem</span>.</li><li><span class="no">There is many people</span> → <span class="yes">There are many people</span> : accord avec ce qui suit.</li><li><span class="no">There is two years he left</span> → <span class="yes">He left two years ago</span>.</li><li><span class="no">ago two years</span> : AGO se place toujours <b>après</b> la durée.</li></ul></div>
<h4>En contexte B2</h4><p class="en">There have been several strikes since January; the last one took place three weeks ago.</p>`,
`<h4>Autrement dit</h4><p>Poser une question suffit : <b>« il y a » introduit-il une existence ou une date ?</b></p>
<p>« Il y a une erreur » = existence → <span class="en">There is a mistake.</span><br>« Il y a trois jours » = temps écoulé → <span class="en">three days ago.</span></p>
<h4>L'accord de THERE</h4><p>THERE n'est qu'un mot d'appui : le verbe s'accorde avec le nom qui suit.</p><p class="en">There is one exception. → There are two exceptions.</p>
<h4>Ne pas calquer le français</h4><p>Le français « il » de « il y a » n'a pas d'équivalent : <span class="no">it has</span> est toujours faux dans ce sens.</p>
<h4>AGO / FOR / SINCE</h4><table><tr><th>AGO</th><th>FOR</th><th>SINCE</th></tr><tr><td>preterite</td><td>present perfect</td><td>present perfect</td></tr><tr><td class="en">two years ago</td><td class="en">for two years</td><td class="en">since 2024</td></tr></table>`],
ex:[
{type:'fill',q:'___ ___ several errors in this spreadsheet.',a:['there are'],fb:"Nom pluriel (errors) : THERE ARE."},
{type:'fill',q:'The company was founded fifty years ___.',a:['ago'],fb:"Temps écoulé : durée + AGO, avec un preterite."},
{type:'fix',q:'Corrige : <i>It has a mistake in the second paragraph.</i>',a:['There is a mistake in the second paragraph.'],fb:"L'existence se dit THERE IS, jamais « it has »."},
{type:'mcq',q:'___ a meeting tomorrow at nine.',opts:['There will be','It will have','There will have'],correct:0,fb:"THERE + BE au futur : there will be."},
{type:'fix',q:'Corrige : <i>There is three years that I study English.</i>',a:['I have been studying English for three years.','I have studied English for three years.'],fb:"Durée qui continue : present perfect + FOR. La structure « there is … that » est un calque du français."},
{type:'mcq',q:'___ been a lot of changes since the merger.',opts:['There has','There have','It has'],correct:1,fb:"« Changes » est pluriel : there HAVE been."},
{type:'fill',q:'Traduis : <i>Il y a eu un accident hier.</i>',a:['There was an accident yesterday.'],fb:"Existence au passé : THERE WAS (« yesterday » impose le preterite)."}]},

{id:'s_ab',letter:'ab',t:'Adjectives',exp:[
`<h4>La règle</h4><p>L'adjectif anglais est <b>invariable</b> et se place <b>avant le nom</b>.</p>
<h4>Structure</h4><p><span class="struct">adjectif + nom</span> &nbsp; <span class="struct">BE / SEEM / LOOK + adjectif</span></p>
<h4>Exemples</h4><ul><li class="en">an ambitious project · two ambitious projects <em>(pas de -s)</em></li><li class="en">The results seem encouraging.</li><li class="en">She looks tired.</li></ul>
<h4>Adjectif employé comme nom</h4><p class="en">the unemployed, the rich, the elderly <em>(sens collectif, verbe au pluriel)</em></p>
<h4>Nationalités</h4><p>Majuscule obligatoire : <span class="en">a French company, the British economy</span>.</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">interestings books</span> : l'adjectif ne s'accorde jamais.</li><li><span class="no">a book interesting</span> → <span class="yes">an interesting book</span>.</li><li>Confondre adjectif et adverbe : <span class="no">He works good</span> → <span class="yes">He works well</span>.</li><li><span class="no">a french company</span> → <span class="yes">a French company</span>.</li></ul></div>
<h4>Adjectif + préposition</h4><p class="en">interested in · good at · responsible for · aware of · similar to · different from</p>`,
`<h4>Autrement dit</h4><p>Trois différences avec le français :</p><ol style="margin-left:20px"><li><b>Invariable</b> : ni genre, ni nombre.</li><li><b>Avant le nom</b>, presque toujours.</li><li><b>Majuscule</b> aux nationalités.</li></ol>
<h4>Adjectif ou adverbe ?</h4><table><tr><th>Adjectif</th><th>Adverbe</th></tr><tr><td class="en">a careful driver</td><td class="en">He drives carefully.</td></tr><tr><td class="en">a good presentation</td><td class="en">She presented it well.</td></tr><tr><td class="en">a hard question</td><td class="en">She works hard.</td></tr></table><p><em>L'adjectif qualifie un nom ; l'adverbe modifie un verbe.</em></p>
<h4>Nuancer un adjectif</h4><p class="en">quite useful · rather expensive · fairly clear · extremely relevant · slightly different</p>
<h4>Adjectifs non gradables</h4><p>Certains adjectifs sont déjà extrêmes : on dit <span class="en">absolutely essential</span>, <span class="en">completely wrong</span>, mais pas <span class="no">very essential</span>.</p>`],
ex:[
{type:'fix',q:'Corrige : <i>They are two interestings solutions.</i>',a:['They are two interesting solutions.','These are two interesting solutions.'],fb:"L'adjectif anglais est invariable : pas de -s."},
{type:'fix',q:'Corrige : <i>She works in a company french.</i>',a:['She works in a French company.'],fb:"L'adjectif précède le nom, et les nationalités prennent une majuscule."},
{type:'mcq',q:'He speaks English very ___.',opts:['good','well'],correct:1,fb:"Le verbe est modifié par un adverbe : WELL."},
{type:'fill',q:'She is very interested ___ international finance.',a:['in'],fb:"INTERESTED se construit avec IN."},
{type:'mcq',q:'Which is correct?',opts:['The results seem encouragingly.','The results seem encouraging.'],correct:1,fb:"Après SEEM, LOOK, BE, on emploie un adjectif, pas un adverbe."},
{type:'fill',q:'He is responsible ___ the marketing department.',a:['for'],fb:"RESPONSIBLE FOR est la construction attendue."},
{type:'mcq',q:'Which is natural English?',opts:['This point is very essential.','This point is absolutely essential.'],correct:1,fb:"ESSENTIAL est un adjectif non gradable : on le renforce avec ABSOLUTELY."}]},

{id:'s_ac',letter:'ac',t:'Adjectives ending in -ED / -ING',exp:[
`<h4>La règle</h4><p><b>-ED</b> décrit ce que <b>ressent</b> une personne. <b>-ING</b> décrit ce qui <b>provoque</b> ce sentiment.</p>
<h4>Tableau</h4><table><tr><th>-ED (sujet ressent)</th><th>-ING (cause)</th></tr><tr><td class="en">I am bored.</td><td class="en">The lecture is boring.</td></tr><tr><td class="en">She was surprised.</td><td class="en">The results were surprising.</td></tr><tr><td class="en">We are interested.</td><td class="en">The topic is interesting.</td></tr><tr><td class="en">They felt confused.</td><td class="en">The instructions were confusing.</td></tr></table>
<h4>Exemples B2</h4><ul><li class="en">The audience was fascinated by a fascinating presentation.</li><li class="en">I was disappointed: the figures were disappointing.</li></ul>
<h4>Prépositions habituelles</h4><p class="en">interested in · bored with · worried about · surprised at / by · excited about · disappointed with</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">I am boring</span> = « je suis ennuyeux » : le sens change complètement.</li><li><span class="no">The film was interested</span> → <span class="yes">interesting</span>.</li><li><span class="no">I am exciting about the trip</span> → <span class="yes">I am excited</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux rôles : <b>victime</b> ou <b>coupable</b>.</p><ul><li>Celui qui <b>subit</b> l'émotion → <b>-ED</b>.</li><li>Ce qui <b>déclenche</b> l'émotion → <b>-ING</b>.</li></ul>
<h4>Le test du « par »</h4><p>Si tu peux ajouter « par… », l'adjectif est en -ED : <span class="en">I was shocked by the news</span>. Si l'élément est la source, il est en -ING : <span class="en">The news was shocking</span>.</p>
<h4>La phrase à retenir</h4><p class="en">I'm not boring, I'm bored!</p><p><em>Dire <span class="en">I am boring</span> revient à s'accuser d'être ennuyeux.</em></p>
<h4>Autres paires fréquentes</h4><p class="en">tiring / tired · worrying / worried · frustrating / frustrated · challenging / challenged · exhausting / exhausted · terrifying / terrified</p>`],
ex:[
{type:'fill',q:'The presentation was so ___ <b>(bore)</b> that half the audience left.',a:['boring'],fb:"La présentation est la cause de l'ennui : -ING."},
{type:'fill',q:'I was really ___ <b>(surprise)</b> by the announcement.',a:['surprised'],fb:"C'est la personne qui ressent : -ED. Le complément est introduit par BY."},
{type:'mcq',q:'These figures are ___ — profits have halved.',opts:['worried','worrying'],correct:1,fb:"Les chiffres provoquent l'inquiétude : WORRYING."},
{type:'fix',q:'Corrige : <i>I am very exciting about my internship.</i>',a:['I am very excited about my internship.'],fb:"La personne ressent l'émotion : EXCITED ABOUT."},
{type:'fill',q:'After a ___ <b>(tire)</b> day, I was completely ___ <b>(exhaust)</b>.',a:['tiring / exhausted','tiring, exhausted'],fb:"La journée cause la fatigue (-ING) ; la personne la subit (-ED)."},
{type:'mcq',q:'"He is confusing" means:',opts:['He does not understand.','He makes things unclear for others.'],correct:1,fb:"-ING désigne la cause : il crée la confusion. « He is confused » signifierait qu'il ne comprend pas."},
{type:'fill',q:'The instructions were ___ <b>(confuse)</b>, so everyone felt ___ <b>(confuse)</b>.',a:['confusing / confused','confusing, confused'],fb:"Cause en -ING, ressenti en -ED."}]},

{id:'s_ad',letter:'ad',t:'Order of adjectives',exp:[
`<h4>La règle</h4><p>Quand plusieurs adjectifs précèdent un nom, l'anglais suit un ordre conventionnel : de l'<b>opinion</b> vers la <b>matière</b>.</p>
<h4>L'ordre</h4><table><tr><th>#</th><th>Catégorie</th><th>Exemples</th></tr><tr><td>1</td><td>Opinion</td><td class="en">nice, useful, boring</td></tr><tr><td>2</td><td>Taille</td><td class="en">big, small, tall</td></tr><tr><td>3</td><td>Âge</td><td class="en">new, old, modern</td></tr><tr><td>4</td><td>Forme</td><td class="en">round, square</td></tr><tr><td>5</td><td>Couleur</td><td class="en">black, blue</td></tr><tr><td>6</td><td>Origine</td><td class="en">French, Japanese</td></tr><tr><td>7</td><td>Matière</td><td class="en">wooden, plastic, steel</td></tr><tr><td>8</td><td>Usage / nom composé</td><td class="en">office (chair), running (shoes)</td></tr></table>
<h4>Exemples</h4><ul><li class="en">a useful little Japanese app</li><li class="en">an impressive new German factory</li><li class="en">a comfortable black leather office chair</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Inverser opinion et description : <span class="no">a French nice company</span> → <span class="yes">a nice French company</span>.</li><li>Ajouter une virgule entre catégories différentes : <span class="no">a big, new house</span> → <span class="yes">a big new house</span>.</li><li>Empiler plus de trois adjectifs : lourd et peu naturel.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Retiens la logique plutôt que la liste : <b>ce qui est subjectif d'abord, ce qui est objectif ensuite</b>, et la matière tout contre le nom.</p>
<h4>Moyen mnémotechnique</h4><p><b>O-S-A-Sh-C-O-M</b> : Opinion, Size, Age, Shape, Colour, Origin, Material.</p>
<h4>Trois exemples décomposés</h4><table><tr><th>Groupe</th><th>Analyse</th></tr><tr><td class="en">a lovely old stone house</td><td>opinion + âge + matière</td></tr><tr><td class="en">two small round wooden tables</td><td>taille + forme + matière</td></tr><tr><td class="en">an expensive Italian sports car</td><td>opinion + origine + usage</td></tr></table>
<h4>En pratique</h4><p>Deux adjectifs suffisent presque toujours. Au-delà, mieux vaut couper la phrase ou utiliser une relative : <span class="en">a leather chair which is very comfortable</span>.</p>
<h4>Virgule ou pas ?</h4><p>Virgule seulement entre adjectifs de <b>même catégorie</b> : <span class="en">a long, tedious meeting</span>.</p>`],
ex:[
{type:'fix',q:'Corrige : <i>She works for a German big company.</i>',a:['She works for a big German company.'],fb:"Taille avant origine : big German company."},
{type:'fill',q:'Remets dans l\'ordre : <i>Japanese / a / useful / app / little</i>',a:['a useful little Japanese app'],fb:"Opinion (useful) + taille (little) + origine (Japanese)."},
{type:'mcq',q:'Which is correct?',opts:['a black comfortable leather chair','a comfortable black leather chair'],correct:1,fb:"Opinion (comfortable) + couleur (black) + matière (leather)."},
{type:'fill',q:'Remets dans l\'ordre : <i>new / an / factory / impressive / German</i>',a:['an impressive new German factory'],fb:"Opinion + âge + origine."},
{type:'mcq',q:'Which order is right?',opts:['two small round wooden tables','two wooden round small tables'],correct:0,fb:"Taille, forme, matière : small round wooden."},
{type:'fix',q:'Corrige : <i>He drives an Italian expensive sports car.</i>',a:['He drives an expensive Italian sports car.'],fb:"Opinion avant origine : expensive Italian sports car."},
{type:'fill',q:'Remets dans l\'ordre : <i>old / a / house / lovely / stone</i>',a:['a lovely old stone house'],fb:"Opinion + âge + matière."}]},

{id:'s_ae',letter:'ae',t:'Linking words',exp:[
`<h4>La règle</h4><p>Les mots de liaison organisent le raisonnement. Chacun a une <b>place</b> et une <b>construction</b> propres.</p>
<h4>Tableau</h4><table><tr><th>Fonction</th><th>Connecteurs</th><th>Exemple</th></tr><tr><td>Ajouter</td><td class="en">moreover, furthermore, in addition, besides</td><td class="en">Moreover, costs have risen.</td></tr><tr><td>Opposer</td><td class="en">however, nevertheless, whereas, although, despite</td><td class="en">However, the results are encouraging.</td></tr><tr><td>Cause</td><td class="en">because, since, as, due to, owing to</td><td class="en">Sales fell because of the strike.</td></tr><tr><td>Conséquence</td><td class="en">therefore, consequently, so, as a result, thus</td><td class="en">Therefore, we had to adapt.</td></tr><tr><td>Illustrer</td><td class="en">for instance, for example, such as</td><td class="en">for instance, in the retail sector</td></tr><tr><td>Conclure</td><td class="en">to sum up, on the whole, all in all, finally</td><td class="en">All in all, the reform failed.</td></tr></table>
<h4>Construction : le point décisif</h4><table><tr><th>+ proposition (S + V)</th><th>+ nom / V-ing</th></tr><tr><td class="en">although, whereas, because, since</td><td class="en">despite, in spite of, because of, due to</td></tr><tr><td class="en">Although it was late, we finished.</td><td class="en">Despite the delay, we finished.</td></tr></table>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">Despite it was late</span> → <span class="yes">Although it was late</span> / <span class="yes">Despite the late hour</span>.</li><li><span class="no">Although… but…</span> : un seul connecteur suffit.</li><li><span class="no">Because of it rained</span> → <span class="yes">Because it rained</span>.</li><li>Confondre <span class="en">however</span> (adverbe, avec virgule) et <span class="en">but</span> (conjonction).</li></ul></div>`,
`<h4>Autrement dit</h4><p>Choisis d'abord la <b>fonction logique</b>, puis vérifie ce que le connecteur peut accueillir : <b>une phrase</b> ou <b>un nom</b>.</p>
<h4>Opposition : les quatre formes</h4><p class="en">Although the market is small, profits are high.<br>The market is small; however, profits are high.<br>Despite the small market, profits are high.<br>The market is small, whereas profits are high. <em>(contraste terme à terme)</em></p>
<h4>Cause et conséquence</h4><table><tr><th>Cause</th><th>Conséquence</th></tr><tr><td class="en">because + S + V</td><td class="en">so + S + V</td></tr><tr><td class="en">because of / due to + nom</td><td class="en">therefore, / as a result, + S + V</td></tr></table>
<h4>Registre</h4><p>À l'écrit : <span class="en">moreover, nevertheless, consequently, thus</span>. À l'oral : <span class="en">and, but, so, anyway</span>. Un devoir B2 gagne à varier plutôt qu'à répéter <span class="en">and</span> et <span class="en">but</span>.</p>
<h4>Ponctuation</h4><p><span class="en">However</span>, <span class="en">therefore</span>, <span class="en">moreover</span> sont des adverbes : ils s'écrivent en tête de phrase suivis d'une virgule.</p>`],
ex:[
{type:'fix',q:'Corrige : <i>Despite it was raining, the event took place.</i>',a:['Although it was raining, the event took place.','Despite the rain, the event took place.'],fb:"DESPITE est suivi d'un nom ou d'un V-ing ; devant une proposition, il faut ALTHOUGH."},
{type:'mcq',q:'The proposal is expensive. ___, it may save money in the long run.',opts:['However','Although','Despite'],correct:0,fb:"HOWEVER est un adverbe qui relie deux phrases, en tête et suivi d'une virgule."},
{type:'fill',q:'The flight was cancelled ___ ___ the storm.',a:['because of','due to','owing to'],fb:"Devant un nom, la cause s'exprime avec BECAUSE OF ou DUE TO."},
{type:'mcq',q:'Turnover dropped by 20%. ___, the board decided to restructure.',opts:['Moreover','Therefore','Whereas'],correct:1,fb:"Rapport de conséquence : THEREFORE."},
{type:'fix',q:'Corrige : <i>Although the price is high, but the quality is excellent.</i>',a:['Although the price is high, the quality is excellent.','The price is high, but the quality is excellent.'],fb:"ALTHOUGH et BUT ne se cumulent pas : il faut choisir."},
{type:'mcq',q:'Which connector shows a direct contrast between two facts?',opts:['whereas','moreover','thus'],correct:0,fb:"WHEREAS met en parallèle deux éléments opposés : X is cheap, whereas Y is expensive."},
{type:'fill',q:'___ ___ ___ ___, the reform has had mixed results. (pour conclure, en 3 ou 4 mots)',a:['to sum up','all in all','on the whole'],fb:"Connecteurs de conclusion : to sum up, all in all, on the whole."}]},

{id:'s_af',letter:'af',t:'Expressing a personal opinion',exp:[
`<h4>La règle</h4><p>Pour donner un avis, l'anglais dispose de formules graduées, du plus prudent au plus affirmé.</p>
<h4>Formules</h4><table><tr><th>Force</th><th>Formule</th></tr><tr><td>Prudent</td><td class="en">It seems to me that… · I would say that… · As far as I can tell…</td></tr><tr><td>Neutre</td><td class="en">In my opinion, … · I think (that)… · From my point of view, …</td></tr><tr><td>Affirmé</td><td class="en">I firmly believe (that)… · I am convinced that… · There is no doubt that…</td></tr><tr><td>Accord</td><td class="en">I agree with you. · That's a good point.</td></tr><tr><td>Désaccord</td><td class="en">I see your point, but… · I'm afraid I disagree.</td></tr></table>
<h4>Exemples B2</h4><ul><li class="en">In my opinion, social media has changed political debate.</li><li class="en">I am convinced that remote work is here to stay.</li><li class="en">I see your point, but the figures suggest otherwise.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">According to me</span> → <span class="yes">In my opinion</span> (ACCORDING TO ne s'emploie que pour autrui).</li><li><span class="no">I am agree</span> → <span class="yes">I agree</span> : AGREE est un verbe.</li><li><span class="no">In my opinion that…</span> → <span class="yes">In my opinion, …</span></li><li><span class="no">I think that not…</span> → <span class="yes">I don't think that…</span></li></ul></div>`,
`<h4>Autrement dit</h4><p>Structure une opinion en trois temps : <b>annonce, argument, exemple</b>.</p>
<p class="en">Personally, I believe online teaching has limits. Indeed, students need direct contact. For instance, group work is much harder online.</p>
<h4>Nuancer</h4><p class="en">To a certain extent, I agree.<br>It depends on the context.<br>I tend to think that…<br>Admittedly, there are counter-arguments.</p>
<h4>Le piège d'ACCORDING TO</h4><p class="en">According to the article, unemployment is falling. <em>(source extérieure : correct)</em><br><span class="no">According to me, unemployment is falling.</span> <em>(pour soi-même : incorrect)</em></p>
<h4>Verbes d'opinion à connaître</h4><p class="en">believe · consider · assume · argue · claim · point out · stress · admit</p><p><em>« He argues that… » et « She stresses that… » sont très utiles pour rendre compte d'un texte.</em></p>`],
ex:[
{type:'fix',q:'Corrige : <i>According to me, the reform is necessary.</i>',a:['In my opinion, the reform is necessary.','I think the reform is necessary.'],fb:"ACCORDING TO ne s'emploie pas pour soi-même : on dit IN MY OPINION."},
{type:'fix',q:'Corrige : <i>I am agree with this analysis.</i>',a:['I agree with this analysis.'],fb:"AGREE est un verbe : pas de BE devant."},
{type:'mcq',q:'Which formula is the most cautious?',opts:['There is no doubt that…','It seems to me that…','I am convinced that…'],correct:1,fb:"IT SEEMS TO ME THAT introduit une opinion prudente."},
{type:'fill',q:'Complète poliment le désaccord : I ___ your point, but I think the data say otherwise.',a:['see','take','understand'],fb:"« I see your point, but… » permet de contester sans agressivité."},
{type:'mcq',q:'Which is the most natural English?',opts:["I think that this argument is not convincing.","I don't think this argument is convincing."],correct:1,fb:"L'anglais remonte la négation sur le verbe d'opinion."},
{type:'fill',q:'___ ___ ___ the author, social networks weaken democracy. (pour citer la source)',a:['according to'],fb:"ACCORDING TO s'emploie pour rapporter l'avis d'autrui."},
{type:'mcq',q:'Which verb best reports a debated claim in a text?',opts:['argues','likes','says nothing'],correct:0,fb:"« The author argues that… » signale une thèse défendue, ce qui est attendu dans un compte rendu."}]},

{id:'s_ag',letter:'ag',t:'Presenting a document orally: introduction, transitions and conclusion',exp:[
`<h4>La règle</h4><p>Une présentation orale suit trois étapes : <b>introduire</b>, <b>articuler</b>, <b>conclure</b>. Les formules sont conventionnelles : autant les maîtriser.</p>
<h4>Introduire</h4><p class="en">This document is an article taken from The Guardian, published in March 2025.<br>It was written by… · It deals with… · The main topic is…<br>The document raises the question of whether…<br>I will first analyse…, then I will focus on…, and finally I will…</p>
<h4>Articuler</h4><p class="en">To begin with, … · First of all, …<br>Moving on to my second point, …<br>As far as … is concerned, …<br>This leads me to … · In other words, …<br>It is worth noting that…</p>
<h4>Conclure</h4><p class="en">To sum up, … · All in all, …<br>The author's main point is that…<br>To my mind, this document shows that…<br>This raises a further question: …</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">This document talks about</span> → <span class="yes">This document deals with</span>.</li><li><span class="no">I will speak about three parts</span> → <span class="yes">I will focus on three points</span>.</li><li><span class="no">To finish</span> → <span class="yes">To conclude / To sum up</span>.</li><li>Oublier de <b>situer la source et la date</b> : c'est attendu en introduction.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Ta présentation doit répondre à quatre questions, dans cet ordre :</p><ol style="margin-left:20px"><li><b>Quoi ?</b> nature du document, source, date, auteur.</li><li><b>De quoi ça parle ?</b> thème en une phrase.</li><li><b>Quelle question ?</b> problématique.</li><li><b>Comment j'avance ?</b> annonce du plan.</li></ol>
<h4>Modèle d'introduction</h4><p class="en">This document is a press article published in The Economist in June 2025. It deals with the impact of artificial intelligence on employment. We may therefore wonder whether AI destroys more jobs than it creates. I will first present the facts, then examine the consequences for workers.</p>
<h4>Modèle de conclusion</h4><p class="en">To sum up, the author shows that AI is transforming rather than destroying work. To my mind, the key issue is training. This leads to a broader question: are our education systems ready?</p>
<h4>Conseil</h4><p>Trois ou quatre connecteurs bien placés valent mieux qu'une accumulation. Le jury écoute la <b>structure</b> autant que la langue.</p>`],
ex:[
{type:'fix',q:'Corrige : <i>This document talks about the housing crisis.</i>',a:['This document deals with the housing crisis.'],fb:"DEAL WITH est la formule attendue ; « talk about » ne convient pas pour un document."},
{type:'fill',q:'Complète : This article was ___ in The Guardian in April 2025. (paru)',a:['published'],fb:"PUBLISHED IN + source + date : l'introduction doit situer le document."},
{type:'mcq',q:'Which phrase introduces the problematic question?',opts:['We may therefore wonder whether…','To sum up, …','In addition, …'],correct:0,fb:"« We may wonder whether… » formule la problématique en introduction."},
{type:'fill',q:'Complète la transition : ___ ___ ___ my second point, the social consequences are considerable.',a:['moving on to'],fb:"MOVING ON TO annonce le passage à la partie suivante."},
{type:'mcq',q:'Which is the best way to start the conclusion?',opts:['To finish, …','All in all, …','And after, …'],correct:1,fb:"ALL IN ALL (ou TO SUM UP) ouvre correctement une conclusion. « To finish » est un calque."},
{type:'fill',q:'Complète : ___ ___ ___ employment ___ concerned, the effects are unclear. (en ce qui concerne)',a:['as far as / is','as far as is'],fb:"Structure : As far as + sujet + is concerned."},
{type:'mcq',q:'What must an introduction always include?',opts:['Your personal opinion only','The nature, source and date of the document','A summary of the whole text'],correct:1,fb:"Le jury attend d'abord l'identification du document : nature, source, date, auteur."}]}
];
