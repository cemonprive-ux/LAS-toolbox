/* Grammar Assistant B2 — AUTOUR DU NOM */
window.GRAM_NOM=[
{id:'n_n',letter:'n',t:'Articles',exp:[
`<h4>La règle</h4><p>Trois possibilités : <b>A / AN</b> (un parmi d'autres), <b>THE</b> (celui-là, identifié), <b>Ø</b> (pas d'article : sens général).</p>
<h4>Tableau</h4><table><tr><th>Article</th><th>Emploi</th><th>Exemple</th></tr><tr><td>a / an</td><td>singulier dénombrable, première mention, métier</td><td class="en">She is an engineer. I saw a report.</td></tr><tr><td>the</td><td>connu, unique, déjà mentionné, superlatif</td><td class="en">The report I sent you. The best solution.</td></tr><tr><td>Ø</td><td>pluriel ou indénombrable au sens général, pays, langues, repas</td><td class="en">Ø Prices are rising. Ø Money matters. She speaks Ø Spanish.</td></tr></table>
<h4>Exemples</h4><ul><li class="en">I need a laptop. The laptop I bought is broken.</li><li class="en">Ø Unemployment is falling in Ø France.</li><li class="en">The unemployment rate in this region is high. <em>(précisé → THE)</em></li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Calque du français : <span class="no">The life is hard</span> → <span class="yes">Life is hard</span>.</li><li><span class="no">He is engineer</span> → <span class="yes">He is an engineer</span>.</li><li>Pays : <span class="yes">Ø France</span> mais <span class="yes">the United States, the UK, the Netherlands</span>.</li><li>AN devant un <b>son</b> de voyelle : <span class="en">an hour, an MBA</span>, mais <span class="en">a university, a European partner</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux questions successives :</p><ol style="margin-left:20px"><li><b>Mon interlocuteur sait-il duquel je parle ?</b> Oui → THE.</li><li>Non → est-ce un singulier dénombrable ? Oui → A / AN. Sinon → Ø.</li></ol>
<h4>Le contraste à retenir</h4><table><tr><th>Sens général (Ø)</th><th>Cas précis (THE)</th></tr><tr><td class="en">Ø Books are expensive.</td><td class="en">The books on my desk.</td></tr><tr><td class="en">Ø Water is scarce.</td><td class="en">The water in this bottle.</td></tr><tr><td class="en">Ø Teenagers use social media.</td><td class="en">The teenagers in my class.</td></tr></table>
<h4>Cas classés</h4><p>Ø devant : les langues, les repas, les matières scolaires, les sports, les noms de pays (sauf pluriels et « royaumes »), <span class="en">go to school / to work / to bed</span>.<br>THE devant : les fleuves, les océans, les chaînes de montagnes, les institutions uniques (<span class="en">the government, the environment</span>).</p>`],
ex:[
{type:'fill',q:'She works as ___ accountant in a small firm.',a:['an'],fb:"AN devant un son de voyelle, et l'article est obligatoire devant un métier au singulier."},
{type:'mcq',q:'___ inflation has slowed down in recent months.',opts:['The','A','Ø (no article)'],correct:2,fb:"Nom indénombrable au sens général : pas d'article."},
{type:'fix',q:'Corrige : <i>The life in a big city is expensive.</i>',a:['Life in a big city is expensive.'],fb:"« Life » est employé au sens général : pas de THE. Le français met l'article, l'anglais non."},
{type:'fill',q:'I read ___ article about Brexit. ___ article was very clear.',a:['an / the','an, the'],fb:"Première mention → AN ; reprise de la même chose → THE."},
{type:'mcq',q:'He has lived in ___ Netherlands and in ___ Germany.',opts:['the / Ø','Ø / the','the / the'],correct:0,fb:"THE devant les noms de pays pluriels (the Netherlands, the United States), rien devant Germany."},
{type:'fill',q:'___ students in this group are motivated. (on parle de ce groupe précis)',a:['the'],fb:"Le groupe est identifié par « in this group » : THE."},
{type:'mcq',q:'Which sentence is correct?',opts:['She studies the economics at university.','She studies economics at university.'],correct:1,fb:"Pas d'article devant une matière scolaire."}]},

{id:'n_o',letter:'o',t:'Uncountable nouns',exp:[
`<h4>La règle</h4><p>Un nom <b>indénombrable</b> ne se met pas au pluriel et ne prend pas A / AN. Le verbe est au <b>singulier</b>.</p>
<h4>Les plus fréquents</h4><table><tr><th>Catégorie</th><th>Exemples</th></tr><tr><td>Abstraits</td><td class="en">information, advice, knowledge, progress, research, evidence, work</td></tr><tr><td>Matières</td><td class="en">money, water, paper, equipment, furniture</td></tr><tr><td>Notions</td><td class="en">news, transport, traffic, weather, homework, luggage</td></tr></table>
<h4>Comment les compter</h4><p><span class="struct">a piece of information</span> <span class="struct">a piece of advice</span> <span class="struct">an item of news</span> <span class="struct">two pieces of equipment</span></p>
<h4>Exemples</h4><ul><li class="en">This information is confidential.</li><li class="en">She gave me some useful advice.</li><li class="en">The news was worrying.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">informations</span>, <span class="no">advices</span>, <span class="no">researches</span>, <span class="no">furnitures</span> : jamais de -s.</li><li><span class="no">The news are bad</span> → <span class="yes">The news is bad</span>.</li><li><span class="no">a good advice</span> → <span class="yes">a good piece of advice</span>.</li><li>MANY / FEW sont réservés aux dénombrables : <span class="yes">much information</span>, <span class="yes">little progress</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Demande-toi : <b>puis-je dire « deux » devant ce mot en anglais ?</b> Si non, c'est un indénombrable : verbe au singulier, pas de -s, pas de A.</p>
<h4>Les quantifieurs qui vont avec</h4><table><tr><th>Dénombrable</th><th>Indénombrable</th></tr><tr><td class="en">many reports, few reports, a number of</td><td class="en">much data, little progress, a great deal of</td></tr><tr><td class="en">How many?</td><td class="en">How much?</td></tr></table><p><em>SOME, ANY, A LOT OF, PLENTY OF fonctionnent avec les deux.</em></p>
<h4>Mots à double statut</h4><p class="en">work <em>(travail, ind.)</em> / a work <em>(une œuvre)</em><br>experience <em>(expérience acquise)</em> / an experience <em>(un vécu ponctuel)</em><br>time <em>(le temps)</em> / three times <em>(trois fois)</em></p>
<h4>Liste-piège franco-anglaise</h4><p>Ces mots sont pluriels en français mais indénombrables en anglais : <span class="en">information, advice, progress, research, evidence, knowledge, luggage, furniture</span>.</p>`],
ex:[
{type:'fix',q:'Corrige : <i>He gave me some very useful informations.</i>',a:['He gave me some very useful information.'],fb:"INFORMATION est indénombrable : jamais de -s."},
{type:'mcq',q:'The news ___ better than expected.',opts:['were','was','are'],correct:1,fb:"NEWS est indénombrable malgré le -s : verbe au singulier."},
{type:'fill',q:'She gave me a useful ___ of advice.',a:['piece','bit'],fb:"On compte un indénombrable avec A PIECE OF."},
{type:'mcq',q:'We have made ___ progress this term.',opts:['many','much','a few'],correct:1,fb:"MUCH accompagne un indénombrable ; MANY et A FEW exigent un dénombrable."},
{type:'fix',q:'Corrige : <i>They bought new furnitures for the office.</i>',a:['They bought new furniture for the office.'],fb:"FURNITURE est indénombrable. Pour compter : two pieces of furniture."},
{type:'mcq',q:'How ___ research has been done on this topic?',opts:['many','much'],correct:1,fb:"RESEARCH est indénombrable : HOW MUCH."},
{type:'fill',q:'There is very ___ evidence to support this claim. (peu)',a:['little'],fb:"LITTLE s'emploie avec un indénombrable ; FEW avec un dénombrable pluriel."}]},

{id:'n_p',letter:'p',t:'Possessive case',exp:[
`<h4>La règle</h4><p>Pour dire « le X de Y », l'anglais met le <b>possesseur d'abord</b> avec <b>'S</b>, ou utilise <b>OF</b>.</p>
<h4>Structure</h4><table><tr><th>Cas</th><th>Forme</th><th>Exemple</th></tr><tr><td>Singulier</td><td>+ 's</td><td class="en">the manager's office</td></tr><tr><td>Pluriel régulier</td><td>+ '</td><td class="en">the students' results</td></tr><tr><td>Pluriel irrégulier</td><td>+ 's</td><td class="en">the children's books</td></tr><tr><td>Nom en -s</td><td>+ ' ou 's</td><td class="en">James' car / James's car</td></tr><tr><td>Choses, abstractions</td><td>of</td><td class="en">the cost of living</td></tr></table>
<h4>Le génitif s'emploie aussi pour</h4><ul><li>les organisations : <span class="en">the company's strategy</span> ;</li><li>les pays et villes : <span class="en">France's economy</span> ;</li><li>le temps : <span class="en">a week's holiday, two years' experience</span> ;</li><li>les lieux, sans nom répété : <span class="en">at the dentist's, at my parents'</span>.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Ordre inversé : <span class="no">the office of the manager</span> pour une personne → <span class="yes">the manager's office</span>.</li><li>Apostrophe mal placée : <span class="no">the student's results</span> pour plusieurs étudiants → <span class="yes">the students' results</span>.</li><li>Confondre <span class="en">its</span> (possessif) et <span class="en">it's</span> (= it is).</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux ordres opposés :</p><p>Français : <b>objet + de + possesseur</b> — « le bureau du directeur ».<br>Anglais : <b>possesseur + 's + objet</b> — <span class="en">the director's office</span>.</p>
<h4>'S ou OF ?</h4><table><tr><th>Plutôt 's</th><th>Plutôt of</th></tr><tr><td>personnes, animaux</td><td>objets inanimés</td></tr><tr><td>groupes, pays, entreprises</td><td>notions abstraites longues</td></tr><tr><td class="en">my sister's flat</td><td class="en">the end of the film</td></tr><tr><td class="en">the government's decision</td><td class="en">the price of oil</td></tr></table>
<h4>Deux génitifs enchaînés</h4><p class="en">my brother's girlfriend's car</p><p><em>C'est correct mais lourd : préfère <span class="en">the car of my brother's girlfriend</span>.</em></p>
<h4>Le génitif de durée</h4><p class="en">She has five years' experience in accounting.</p><p><em>Noter l'apostrophe après le pluriel : years'.</em></p>`],
ex:[
{type:'fix',q:'Corrige : <i>The office of the director is on the third floor.</i>',a:["The director's office is on the third floor."],fb:"Pour une personne, on utilise le génitif : possesseur + 's + objet."},
{type:'fill',q:'Traduis « les résultats des étudiants » : the ___ results',a:["students'"],fb:"Pluriel régulier : apostrophe après le -s (students')."},
{type:'mcq',q:'Which is correct?',opts:["the childrens' books","the children's books","the childrens books"],correct:1,fb:"CHILDREN est déjà un pluriel irrégulier : on ajoute 's."},
{type:'fill',q:'He has three ___ experience in marketing. (trois ans)',a:["years'",'years of'],fb:"Génitif de durée : three years' experience (ou three years of experience)."},
{type:'mcq',q:'___ has risen sharply this year.',opts:["The oil's price","The price of oil"],correct:1,fb:"Pour un objet inanimé, OF est plus naturel que le génitif."},
{type:'fix',q:'Corrige : <i>Its a very ambitious project, and it\'s budget is huge.</i>',a:["It's a very ambitious project, and its budget is huge."],fb:"IT'S = it is ; ITS = possessif. Les deux sont inversés dans la phrase de départ."},
{type:'fill',q:'I bought it at the ___. (chez le boulanger)',a:["baker's",'bakery'],fb:"Le génitif désigne aussi un lieu : at the baker's, at the dentist's."}]},

{id:'n_q',letter:'q',t:'Numbers and figures',exp:[
`<h4>La règle</h4><p>Les nombres suivent des conventions précises, différentes du français.</p>
<h4>Ponctuation</h4><table><tr><th>Anglais</th><th>Français</th></tr><tr><td class="en">1,500 <em>(virgule = milliers)</em></td><td>1 500</td></tr><tr><td class="en">3.75 <em>(point = décimales)</em></td><td>3,75</td></tr></table>
<h4>Hundred, thousand, million</h4><p><b>Invariables</b> après un chiffre : <span class="en">two hundred, five thousand, three million euros</span>.<br>Avec -S seulement au sens vague : <span class="en">hundreds of students, thousands of jobs, millions of people</span>.<br>Ne pas oublier AND : <span class="en">two hundred and fifty</span>.</p>
<h4>Pourcentages et évolutions</h4><p class="en">Sales rose by 12% <em>(hausse de 12 %)</em><br>Sales rose to 12 million <em>(jusqu'à un niveau)</em><br>a 5% increase / a rise of 5% / a slight drop / a sharp fall</p>
<h4>Dates et années</h4><p class="en">2026 = twenty twenty-six · 1998 = nineteen ninety-eight<br>in the 1990s <em>(pas d'apostrophe)</em> · on 12 May 2026 · the 21st century</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">two hundreds people</span> → <span class="yes">two hundred people</span>.</li><li><span class="no">increased of 5%</span> → <span class="yes">increased by 5%</span>.</li><li><span class="no">3,75 euros</span> → <span class="yes">3.75 euros</span>.</li><li><span class="no">the 90's</span> → <span class="yes">the 90s</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Trois réflexes suffisent à l'examen :</p><ol style="margin-left:20px"><li><b>Point</b> pour les décimales, <b>virgule</b> pour les milliers : l'inverse du français.</li><li><b>Pas de -s</b> à hundred / thousand / million derrière un chiffre.</li><li><b>BY</b> pour l'ampleur d'une variation, <b>TO</b> pour le niveau atteint.</li></ol>
<h4>Décrire un graphique</h4><p class="en">Turnover increased by 8% between 2023 and 2025.<br>Unemployment fell to 7.2% last quarter.<br>The figure doubled / halved / remained stable.<br>Roughly two thirds of respondents agreed.</p>
<h4>Fractions et proportions</h4><p class="en">a half · a third · two thirds · three quarters · one in five students · a quarter of the staff</p>
<h4>Grands ordres de grandeur</h4><p class="en">1,000 = a thousand · 1,000,000 = a million · 1,000,000,000 = a billion</p>`],
ex:[
{type:'fix',q:'Corrige : <i>The conference attracted two thousands visitors.</i>',a:['The conference attracted two thousand visitors.'],fb:"THOUSAND reste invariable après un chiffre. Le -s n'apparaît qu'avec OF : thousands of visitors."},
{type:'mcq',q:'Profits increased ___ 7% last year.',opts:['of','by','from'],correct:1,fb:"L'ampleur d'une variation s'exprime avec BY."},
{type:'fill',q:'Écris en chiffres à l\'anglaise : trois mille cinq cents → ___',a:['3,500','3500'],fb:"La virgule sépare les milliers en anglais : 3,500."},
{type:'mcq',q:'How do you read "1998"?',opts:['one thousand nine hundred ninety-eight','nineteen ninety-eight'],correct:1,fb:"Les années se lisent par groupes de deux chiffres : nineteen ninety-eight."},
{type:'fill',q:'Unemployment fell ___ 6.4% in the third quarter. (niveau atteint)',a:['to'],fb:"TO indique le niveau atteint ; BY indiquerait l'ampleur de la baisse."},
{type:'fix',q:'Corrige : <i>The price is 12,50 euros.</i>',a:['The price is 12.50 euros.'],fb:"En anglais, le point marque les décimales."},
{type:'mcq',q:'Which is correct?',opts:['Hundreds of jobs were created.','Hundred of jobs were created.'],correct:0,fb:"Sans chiffre précis, on emploie le pluriel + OF : hundreds of."}]},

{id:'n_r',letter:'r',t:'Comparatives',exp:[
`<h4>La règle</h4><p>Deux formations selon la longueur de l'adjectif.</p>
<h4>Structure</h4><table><tr><th>Adjectif</th><th>Comparatif</th><th>Exemple</th></tr><tr><td>1 syllabe</td><td>+ -er … than</td><td class="en">cheaper than</td></tr><tr><td>2 syllabes en -y</td><td>-y → -ier</td><td class="en">easier than, happier than</td></tr><tr><td>2 syllabes ou plus</td><td>more … than</td><td class="en">more efficient than</td></tr><tr><td>Irréguliers</td><td>—</td><td class="en">good → better · bad → worse · far → further</td></tr></table>
<h4>Autres comparaisons</h4><p><span class="struct">as + adj + as</span> égalité : <span class="en">as expensive as</span><br><span class="struct">not as + adj + as</span> infériorité : <span class="en">not as expensive as</span><br><span class="struct">less + adj + than</span> : <span class="en">less risky than</span><br><span class="struct">the + comp, the + comp</span> : <span class="en">The sooner, the better.</span></p>
<h4>Exemples B2</h4><ul><li class="en">Online courses are more flexible than traditional ones.</li><li class="en">This solution is less expensive but not as reliable.</li><li class="en">Prices are getting higher and higher.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">more cheaper</span> : jamais les deux marques ensemble.</li><li><span class="no">more good</span> → <span class="yes">better</span>.</li><li><span class="no">cheaper that</span> → <span class="yes">cheaper than</span>.</li><li>Doublement de consonne : <span class="en">big → bigger, hot → hotter</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Compte les syllabes : <b>une ou deux (en -y) → -ER</b> ; <b>trois ou plus → MORE</b>. Puis termine par <b>THAN</b>.</p>
<h4>Renforcer ou atténuer</h4><p class="en">much cheaper · far more efficient · a lot better · slightly higher · a bit easier</p><p><em>Jamais <span class="no">very cheaper</span> : VERY ne modifie pas un comparatif.</em></p>
<h4>Progression et proportion</h4><p class="en">The situation is getting worse and worse.<br>The more you practise, the more confident you become.</p>
<h4>Comparer des quantités</h4><p class="en">more money than · fewer employees than <em>(dénombrable)</em> · less time than <em>(indénombrable)</em></p>
<h4>Tableau des trois degrés</h4><table><tr><th>Égalité</th><th>Supériorité</th><th>Infériorité</th></tr><tr><td class="en">as fast as</td><td class="en">faster than</td><td class="en">not as fast as / less fast than</td></tr></table>`],
ex:[
{type:'fill',q:'Public transport is ___ <b>(cheap)</b> ___ driving.',a:['cheaper than'],fb:"Adjectif court : -ER + THAN."},
{type:'fill',q:'This method is ___ <b>(efficient)</b> ___ the previous one.',a:['more efficient than'],fb:"Adjectif long (trois syllabes) : MORE + adjectif + THAN."},
{type:'fix',q:'Corrige : <i>This laptop is more cheaper that the other one.</i>',a:['This laptop is cheaper than the other one.'],fb:"Deux erreurs : jamais MORE avec -ER, et la comparaison se fait avec THAN, pas THAT."},
{type:'mcq',q:'Her English is ___ mine.',opts:['as good as','as better as','so good than'],correct:0,fb:"Égalité : AS + adjectif + AS. Attention, GOOD reste au positif entre les deux AS."},
{type:'fill',q:'The film was ___ <b>(bad)</b> ___ I expected.',a:['worse than'],fb:"Comparatif irrégulier de BAD : worse."},
{type:'mcq',q:'We employ ___ staff than last year, and we have ___ time to train them.',opts:['fewer / less','less / fewer'],correct:0,fb:"FEWER pour un dénombrable (staff members), LESS pour un indénombrable (time)."},
{type:'fill',q:'Complète : The more you read, ___ ___ vocabulary you acquire.',a:['the more'],fb:"Structure de proportion : the + comparatif…, the + comparatif."}]},

{id:'n_s',letter:'s',t:'Superlatives',exp:[
`<h4>La règle</h4><p>Le superlatif désigne l'élément extrême d'un ensemble. Il s'emploie presque toujours avec <b>THE</b>.</p>
<h4>Structure</h4><table><tr><th>Adjectif</th><th>Superlatif</th><th>Exemple</th></tr><tr><td>1 syllabe</td><td>the + -est</td><td class="en">the cheapest option</td></tr><tr><td>2 syllabes en -y</td><td>the + -iest</td><td class="en">the easiest solution</td></tr><tr><td>Long</td><td>the most + adj</td><td class="en">the most expensive city</td></tr><tr><td>Irréguliers</td><td>—</td><td class="en">the best · the worst · the furthest</td></tr></table>
<h4>Compléments habituels</h4><p class="en">the biggest company <b>in</b> Europe <em>(lieu)</em><br>the best film <b>of</b> the year <em>(période, groupe)</em><br>one <b>of</b> the most influential economists</p>
<h4>Exemples B2</h4><ul><li class="en">It is the most widely used platform in the world.</li><li class="en">This is one of the worst crises the sector has faced.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Oublier THE : <span class="no">He is best student</span> → <span class="yes">the best student</span>.</li><li><span class="no">the most cheapest</span> : une seule marque.</li><li><span class="no">the most big</span> → <span class="yes">the biggest</span>.</li><li>Après ONE OF, le nom est au <b>pluriel</b> : <span class="yes">one of the biggest companies</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Même logique que le comparatif, mais avec <b>THE</b> et la terminaison <b>-EST</b> ou <b>THE MOST</b>.</p>
<table><tr><th>Positif</th><th>Comparatif</th><th>Superlatif</th></tr><tr><td class="en">large</td><td class="en">larger</td><td class="en">the largest</td></tr><tr><td class="en">successful</td><td class="en">more successful</td><td class="en">the most successful</td></tr><tr><td class="en">good</td><td class="en">better</td><td class="en">the best</td></tr><tr><td class="en">bad</td><td class="en">worse</td><td class="en">the worst</td></tr></table>
<h4>Renforcer</h4><p class="en">by far the best option · easily the most convincing argument · the second largest economy</p>
<h4>Structures voisines</h4><p class="en">It's the best film I have ever seen. <em>(superlatif + present perfect avec EVER)</em><br>the least expensive solution <em>(superlatif d'infériorité)</em></p>
<h4>IN ou OF ?</h4><p><b>IN</b> devant un lieu ou un groupe fermé, <b>OF</b> devant une période ou une catégorie : <span class="en">the tallest building in Paris</span>, <span class="en">the best day of my life</span>.</p>`],
ex:[
{type:'fill',q:'It is ___ <b>(big)</b> factory in the region.',a:['the biggest'],fb:"Adjectif court : THE + adjectif + -EST, avec doublement de la consonne (biggest)."},
{type:'fill',q:'This is ___ <b>(interesting)</b> presentation of the day.',a:['the most interesting'],fb:"Adjectif long : THE MOST + adjectif."},
{type:'fix',q:'Corrige : <i>She is one of the most talented student in her year.</i>',a:['She is one of the most talented students in her year.'],fb:"Après ONE OF, le nom se met au pluriel : students."},
{type:'mcq',q:'It was ___ decision I have ever made.',opts:['the worse','the worst','the baddest'],correct:1,fb:"Superlatif irrégulier de BAD : the worst. « Worse » est le comparatif."},
{type:'fill',q:'Tokyo is one of ___ ___ ___ cities ___ the world. (les plus peuplées, préposition incluse)',a:['the most populated / in','the most populous / in','the most populated in'],fb:"THE MOST + adjectif long, et IN devant un lieu."},
{type:'mcq',q:'Which sentence is correct?',opts:['This is the most cheapest ticket.','This is the cheapest ticket.'],correct:1,fb:"Une seule marque de superlatif : the cheapest."},
{type:'fill',q:'By ___, this is the best solution. (de loin)',a:['far'],fb:"BY FAR renforce un superlatif : by far the best."}]},

{id:'n_t',letter:'t',t:'SOME / ANY / NO',exp:[
`<h4>La règle</h4><p><b>SOME</b> = quantité indéterminée, phrase affirmative. <b>ANY</b> = négation et question. <b>NO</b> = absence totale, avec verbe affirmatif.</p>
<h4>Tableau</h4><table><tr><th></th><th>Affirmatif</th><th>Négatif</th><th>Interrogatif</th></tr><tr><td>Quantité</td><td class="en">some money</td><td class="en">not any money / no money</td><td class="en">any money?</td></tr><tr><td>Personnes</td><td class="en">somebody</td><td class="en">not anybody / nobody</td><td class="en">anybody?</td></tr><tr><td>Choses</td><td class="en">something</td><td class="en">not anything / nothing</td><td class="en">anything?</td></tr><tr><td>Lieux</td><td class="en">somewhere</td><td class="en">not anywhere / nowhere</td><td class="en">anywhere?</td></tr></table>
<h4>Exceptions utiles</h4><ul><li><b>SOME</b> dans une question = offre ou demande : <span class="en">Would you like some coffee?</span></li><li><b>ANY</b> en phrase affirmative = « n'importe quel » : <span class="en">Any student can apply.</span></li><li>Après WITHOUT, NEVER, HARDLY, on emploie ANY : <span class="en">without any help</span>.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">I don't have no time</span> → <span class="yes">I don't have any time</span> ou <span class="yes">I have no time</span>.</li><li><span class="no">Have you some questions?</span> → <span class="yes">Have you got any questions?</span></li><li><span class="no">Nobody didn't come</span> → <span class="yes">Nobody came</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Une seule négation par proposition. Tu choisis donc entre deux façons de dire la même chose :</p><p class="en">There isn't any solution. <em>(négation sur le verbe → ANY)</em><br>There is no solution. <em>(négation sur le nom → NO, verbe affirmatif)</em></p>
<h4>Nuance de ton</h4><p><span class="en">no</span> est plus catégorique et plus fréquent à l'écrit : <span class="en">There is no evidence for this claim.</span></p>
<h4>Composés</h4><p class="en">Somebody called you. → Did anybody call? → Nobody called.<br>I need something to eat. → I don't need anything. → There is nothing left.</p>
<h4>ANY = « peu importe lequel »</h4><p class="en">Come any day you like. · Anyone can learn a language.</p><p><em>Ce sens affirmatif est très courant en B2 ; ne le confonds pas avec l'ANY des négations.</em></p>`],
ex:[
{type:'fill',q:'I\'m afraid there isn\'t ___ time left before the deadline.',a:['any'],fb:"Phrase négative : ANY."},
{type:'mcq',q:'Would you like ___ help with your application?',opts:['any','some','no'],correct:1,fb:"SOME s'emploie dans une question quand on propose quelque chose."},
{type:'fix',q:'Corrige : <i>We don\'t have no information about the strike.</i>',a:["We don't have any information about the strike.",'We have no information about the strike.'],fb:"Une seule négation : soit don't … any, soit un verbe affirmatif + no."},
{type:'fill',q:'___ can register online — the course is open to all.',a:['anyone','anybody'],fb:"ANY en phrase affirmative signifie « n'importe qui »."},
{type:'mcq',q:'There is ___ evidence that the policy has worked.',opts:['any','no','none'],correct:1,fb:"NO + nom avec un verbe affirmatif. « None » s'emploie seul, sans nom."},
{type:'fill',q:'She left without ___ explanation.',a:['any'],fb:"Après WITHOUT, on emploie ANY (WITHOUT porte déjà la négation)."},
{type:'mcq',q:'Which sentence is correct?',opts:['Nobody didn\'t answer the phone.','Nobody answered the phone.'],correct:1,fb:"NOBODY est déjà négatif : le verbe reste affirmatif."}]},

{id:'n_u',letter:'u',t:'Possessive adjectives and possessive pronouns',exp:[
`<h4>La règle</h4><p>L'<b>adjectif</b> possessif précède un nom. Le <b>pronom</b> possessif remplace le groupe nominal entier.</p>
<h4>Tableau</h4><table><tr><th>Sujet</th><th>Adjectif</th><th>Pronom</th></tr><tr><td>I</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>your</td><td>yours</td></tr><tr><td>he</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>hers</td></tr><tr><td>it</td><td>its</td><td>—</td></tr><tr><td>we</td><td>our</td><td>ours</td></tr><tr><td>they</td><td>their</td><td>theirs</td></tr></table>
<h4>Exemples</h4><ul><li class="en">This is my report. → This report is mine.</li><li class="en">Their office is bigger than ours.</li><li class="en">She lent me her notes because I had lost mine.</li></ul>
<h4>Point clé</h4><p>L'anglais accorde le possessif avec le <b>possesseur</b>, pas avec l'objet : « sa voiture » = <span class="en">his car</span> si c'est un homme, <span class="en">her car</span> si c'est une femme.</p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">the my car</span> : jamais d'article devant le possessif.</li><li><span class="no">a friend of me</span> → <span class="yes">a friend of mine</span>.</li><li><span class="no">it's colour</span> → <span class="yes">its colour</span>.</li><li><span class="no">mine report</span> → <span class="yes">my report</span> : le pronom ne précède jamais un nom.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Un test simple : <b>y a-t-il un nom juste après ?</b></p><ul><li>Oui → adjectif : <span class="en">my, your, his, her, its, our, their</span>.</li><li>Non → pronom : <span class="en">mine, yours, his, hers, ours, theirs</span>.</li></ul>
<h4>Le piège du genre</h4><p>Le français dit « son ordinateur » pour un homme comme pour une femme. L'anglais tranche :</p><p class="en">Paul forgot his laptop.<br>Anna forgot her laptop.</p>
<h4>Parties du corps</h4><p>L'anglais met un possessif là où le français met l'article : <span class="en">She raised her hand</span> (« elle a levé la main »).</p>
<h4>Structure OF + pronom</h4><p class="en">a colleague of mine · some friends of theirs</p><p><em>Aucun pronom possessif ne prend d'apostrophe : <span class="no">her's</span>, <span class="no">their's</span> n'existent pas.</em></p>`],
ex:[
{type:'fill',q:'Anna forgot ___ badge at the reception desk.',a:['her'],fb:"Le possessif s'accorde avec le possesseur : Anna → HER."},
{type:'fill',q:'This desk is ___. (à moi)',a:['mine'],fb:"Aucun nom ne suit : on emploie le pronom possessif MINE."},
{type:'fix',q:'Corrige : <i>He is a colleague of me.</i>',a:['He is a colleague of mine.'],fb:"La structure OF exige un pronom possessif : of mine."},
{type:'mcq',q:'The committee published ___ report yesterday.',opts:["it's",'its','their'],correct:1,fb:"ITS est le possessif ; IT'S signifie « it is »."},
{type:'fill',q:'Our results are better than ___. (les leurs)',a:['theirs'],fb:"Pronom possessif de THEY : theirs, sans apostrophe."},
{type:'fix',q:'Corrige : <i>Paul lost her keys.</i> (Paul est un homme)',a:['Paul lost his keys.'],fb:"Le possessif suit le genre du possesseur : Paul → HIS."},
{type:'mcq',q:'Which sentence is correct?',opts:['She raised the hand.','She raised her hand.'],correct:1,fb:"Devant une partie du corps, l'anglais emploie le possessif."}]},

{id:'n_v',letter:'v',t:'Quantifiers',exp:[
`<h4>La règle</h4><p>Le choix du quantifieur dépend du <b>type de nom</b> (dénombrable ou non) et parfois du <b>type de phrase</b>.</p>
<h4>Tableau</h4><table><tr><th>Dénombrable pluriel</th><th>Indénombrable</th><th>Les deux</th></tr><tr><td class="en">many, few, a few, several, a number of</td><td class="en">much, little, a little, a great deal of</td><td class="en">some, any, a lot of, lots of, plenty of, most, all, enough, no</td></tr></table>
<h4>Nuance essentielle</h4><table><tr><th>Forme</th><th>Sens</th><th>Exemple</th></tr><tr><td>a few / a little</td><td>positif : « un peu, quelques »</td><td class="en">I have a few ideas.</td></tr><tr><td>few / little</td><td>négatif : « peu, trop peu »</td><td class="en">Few students attended.</td></tr></table>
<h4>Exemples B2</h4><ul><li class="en">Most companies use social media.</li><li class="en">Very few employees complained.</li><li class="en">We don't have enough data to conclude.</li></ul>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li><span class="no">much people</span> → <span class="yes">many people</span>.</li><li><span class="no">the most of students</span> → <span class="yes">most students</span> / <span class="yes">most of the students</span>.</li><li><span class="no">enough money not</span> : ENOUGH se place avant le nom mais après l'adjectif — <span class="en">enough time</span>, <span class="en">old enough</span>.</li><li>MUCH et MANY sont surtout employés en question et négation ; à l'affirmatif on préfère <span class="en">a lot of</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux questions :</p><ol style="margin-left:20px"><li><b>Le nom se compte-t-il ?</b> Oui → many, few, several. Non → much, little.</li><li><b>Le regard est-il positif ou négatif ?</b> <span class="en">a few / a little</span> = j'en ai un peu. <span class="en">few / little</span> = il n'y en a presque pas.</li></ol>
<h4>MOST et ALL</h4><p class="en">Most people agree. <em>(en général)</em><br>Most of the people in this room agree. <em>(groupe précis → of the)</em><br>All students must register. / All of the students in my class.</p>
<h4>Comparer les quantités</h4><p class="en">more · fewer <em>(dénombrable)</em> · less <em>(indénombrable)</em> · as much as · as many as</p>
<h4>Registre</h4><p>À l'écrit, <span class="en">a large number of, a significant proportion of, a minority of</span> remplacent avantageusement <span class="en">a lot of</span>.</p>`],
ex:[
{type:'mcq',q:'___ people believe that remote work is here to stay.',opts:['Much','Many','Little'],correct:1,fb:"PEOPLE est dénombrable pluriel : MANY."},
{type:'fill',q:'We have very ___ information on this candidate. (très peu)',a:['little'],fb:"INFORMATION est indénombrable : LITTLE."},
{type:'mcq',q:'"Few students attended the lecture" means:',opts:['A small number attended, and that is disappointing.','A reasonable number attended.'],correct:0,fb:"FEW sans article a une valeur négative : presque personne. A FEW serait positif."},
{type:'fix',q:'Corrige : <i>The most of employees work from home twice a week.</i>',a:['Most employees work from home twice a week.','Most of the employees work from home twice a week.'],fb:"MOST + nom au sens général, ou MOST OF THE + nom précis. Jamais « the most of »."},
{type:'fill',q:'There isn\'t ___ evidence to support this theory. (assez)',a:['enough'],fb:"ENOUGH se place avant le nom : enough evidence."},
{type:'mcq',q:'We received ___ complaints this month than last month.',opts:['less','fewer'],correct:1,fb:"COMPLAINTS est dénombrable : FEWER."},
{type:'fill',q:'I only need ___ ___ more minutes. (quelques)',a:['a few'],fb:"A FEW + dénombrable pluriel, avec une valeur positive."}]},

{id:'n_w',letter:'w',t:'THIS / THAT / THESE / THOSE',exp:[
`<h4>La règle</h4><p>Ces démonstratifs indiquent la <b>proximité</b> (dans l'espace, le temps ou le discours) et le <b>nombre</b>.</p>
<h4>Tableau</h4><table><tr><th></th><th>Proche</th><th>Éloigné</th></tr><tr><td>Singulier</td><td class="en">this</td><td class="en">that</td></tr><tr><td>Pluriel</td><td class="en">these</td><td class="en">those</td></tr></table>
<h4>Exemples</h4><ul><li class="en">This report is on my desk; that one is in the archive.</li><li class="en">These figures are recent; those figures date from 2019.</li><li class="en">This week I'm busy. That year was difficult.</li></ul>
<h4>Emplois dans le discours</h4><p><b>THIS</b> annonce ce qui vient : <span class="en">This is my main point: costs are too high.</span><br><b>THAT</b> reprend ce qui précède : <span class="en">Sales fell by 10%. That explains the losses.</span></p>
<h4>Structure utile</h4><p><span class="struct">those who + verbe</span> = « ceux qui » : <span class="en">Those who arrive late will not be admitted.</span></p>
<div class="warn"><div class="wh">Erreurs fréquentes</div><ul><li>Accord oublié : <span class="no">this figures</span> → <span class="yes">these figures</span>.</li><li>Prononciation et orthographe : <span class="en">this</span> (singulier) / <span class="en">these</span> (pluriel).</li><li>« Celui de » : <span class="no">the one of my brother</span> → <span class="yes">my brother's</span>.</li><li><span class="no">that ones</span> → <span class="yes">those ones</span> ou simplement <span class="yes">those</span>.</li></ul></div>`,
`<h4>Autrement dit</h4><p>Deux axes seulement : <b>près / loin</b> et <b>un / plusieurs</b>.</p><table><tr><th></th><th>Un</th><th>Plusieurs</th></tr><tr><td>Ici, maintenant</td><td class="en">this</td><td class="en">these</td></tr><tr><td>Là-bas, avant</td><td class="en">that</td><td class="en">those</td></tr></table>
<h4>Avec ONE / ONES</h4><p class="en">Which laptop do you prefer? — This one. / Those ones.</p><p><em>ONE évite de répéter le nom.</em></p>
<h4>Au téléphone et à l'écrit</h4><p class="en">Hello, this is Marie speaking. <em>(je me présente)</em><br>Is that Mr Blanchet? <em>(l'autre personne)</em></p>
<h4>Reprendre une idée entière</h4><p class="en">The deadline was moved forward. This means we have to work faster.</p><p><em>THIS peut résumer toute une phrase précédente : très utile pour enchaîner à l'écrit.</em></p>`],
ex:[
{type:'fill',q:'___ figures on the screen are from the latest survey. (proches, pluriel)',a:['these'],fb:"Pluriel et proche : THESE."},
{type:'mcq',q:'Do you remember ___ summer we spent in Ireland?',opts:['this','that','these'],correct:1,fb:"Renvoi à un moment passé et éloigné : THAT."},
{type:'fix',q:'Corrige : <i>This documents are confidential.</i>',a:['These documents are confidential.'],fb:"DOCUMENTS est au pluriel : THESE."},
{type:'fill',q:'___ who apply before Friday will be interviewed first. (ceux qui)',a:['those'],fb:"« Ceux qui » se dit THOSE WHO."},
{type:'mcq',q:'Which laptop do you want — this one or ___?',opts:['that one','that ones','this ones'],correct:0,fb:"Singulier éloigné : THAT ONE."},
{type:'fill',q:'Unemployment has fallen for six months. ___ shows the reform is working. (reprise de l\'idée)',a:['this','that'],fb:"THIS (ou THAT) peut reprendre toute une idée précédente."},
{type:'mcq',q:'On the phone, how do you introduce yourself?',opts:['Hello, that is Marie speaking.','Hello, this is Marie speaking.'],correct:1,fb:"On se désigne soi-même avec THIS IS ; THAT IS désigne l'interlocuteur."}]}
];
