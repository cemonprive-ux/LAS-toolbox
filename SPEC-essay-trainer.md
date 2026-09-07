# SPEC — Essay Trainer DSCG (« Structured Oral Response Trainer »)

Référence exacte : `Digital-currency-essay-trainer.html`. Copier ce fichier et l'adapter au sujet/texte du nouveau chapitre — ne pas repartir de zéro. Ce modèle **remplace** l'ancien plan dialectique thèse/antithèse/synthèse : la finalité n'est jamais une dissertation écrite mais une préparation à une réponse ORALE structurée.

## Principe directeur

QUESTION → ANALYSE → BRAINSTORM → CONNECT → BUILD → ORGANISE → PREPARE → SPEAK → CHECK. Le plan n'est jamais imposé à l'avance (jamais de « for/against/compromise » automatique) : il découle du type de question (to what extent / should / is X a threat or opportunity / how can / why / what impact). Chaque argument doit combiner **texte + connaissances personnelles**, jamais l'un sans l'autre.

## Structure des étapes (identique à chaque chapitre)

0. **Header** navy avec titre « Structured Oral Response Trainer · [Thème] », badge UE6, `.lede` d'intro méthodo, `.question-box` avec la question de discussion, bouton `.source-toggle` (« 📄 Show source text ») qui ouvre le panneau source.
1. **Analyse the Question** — QCM identifier l'instruction word (4 options) + textarea « reformulate in simple words » avec *Analyser* (heuristique : pas de oui/non binaire, présence d'un mot de degré) + *Voir un modèle*.
2. **Identify the Type of Question** — tableau générique question-type → structure (`.qtype-grid`, ligne active surlignée or) + QCM confirmant la structure adaptée à CETTE question + `.strategy-box` annonçant le plan retenu (Part 1/2/3).
3. **Brainstorm & Sort** — 9 idées mélangées (texte/connaissances), classées par l'étudiant dans les 3 parties du plan (boutons, vérif immédiate), badge `.src-tag src-doc` / `.src-tag src-ext` sur chaque idée, résumé final X/9.
4. **Connect Document and Knowledge** — exemple travaillé (From the document / From your knowledge / Argument you can build) puis exercice libre à compléter par l'étudiant + *Analyser* (détecte référence au texte ET référence aux connaissances) + *Voir un exemple*.
5. **Build a Strong Argument** — rappel weak/better/stronger (Idea only → +Explain → +Example), puis scaffold **Idea → Explain → Example → Link** (4 textarea) pour Part 1 puis Part 2, *Analyser mon argument* (heuristique mots-clés par thème) + *Voir un modèle* (reveal `.model-box` avec les 4 champs rédigés).
6. **Organise the Response** — QCM : quel plan est le plus logique pour CETTE question (piège = résumé du texte, piège = plan chronologique/liste).
7. **Prepare Your Introduction** — QCM repérer la meilleure amorce générale (options mélangées, PAS dans l'ordre logique/chronologique : jamais amorce en A, annonce de plan en B, opinion tranchée en C, fait trop précis en D dans cet ordre — varier l'ordre à chaque page) ; puis 3 textarea (Position / Main issue / Announce structure) + *Analyser* + *Voir un modèle*.
8. **Nuance Your Answer** — rappel binaire→nuancé, exercice réécriture avec *Analyser* (détecte may/can/could/to some extent/depending on/unless…) + *Voir un modèle*.
9. **Build Your Oral Roadmap** — 6 blocs `.roadmap-part` (Position, Introduction, Part 1, Part 2, Part 3 optionnelle, Conclusion), chacun : textarea notes courtes + alerte si >15 mots (« keep your notes short ») + bouton **« Possible answer »** (reveal avec une réponse courte modèle, toujours présent sur chaque bloc) + bouton global *Vérifier mes notes*.
10. **Oral Language Toolkit** — 9 catégories en `<details>` (opinion, introducing argument, explaining, example, referring to document, personal knowledge, contrasting, nuancing, concluding), formulations fixes réutilisables à l'identique sur toutes les pages.
11. **Oral Challenge** — zone timer (3:00 par défaut, Démarrer/Pause/Réinitialiser), consigne « use your notes only, do not read a fully written answer ».
12. **Final Checklist** — 12 items fixes (cf. liste ci-dessous), identiques sur toutes les pages.
★ **Possible Oral Version** — reveal d'un corrigé complet en notes courtes par partie (intro/Part1/Part2/Part3/conclusion), bullets tagués `.src` (texte §n / connaissances), jamais un texte à lire mot à mot.

## Checklist fixe (12 items, ne pas modifier le texte)
I answered the exact question · My position is clear · My response is logically organised · I used relevant ideas from the document · I added personal knowledge · I developed my arguments (idea → explain → example) · I used relevant examples · I linked my arguments to the question · I used appropriate linking words · I nuanced my answer · My conclusion clearly answers the question · I used notes rather than reading a written text.

## Règle des boutons « Voir un modèle / Possible answer »

**Toujours proposer un modèle quand c'est pertinent** — jamais laisser un exercice de production libre sans bouton reveal associé (`.btn.ghost` → `reveal('id-model')` → `.model-box`). Ne jamais l'afficher par défaut : toujours un clic explicite. Accès progressif : Student task → Hint/Analyser → Modèle.

## Panneau texte source

Bouton `.source-toggle` dans le header → `.source-panel` (tiroir fixe, hors écran par défaut `translateX(-100%)`, glisse depuis la GAUCHE), `.source-backdrop` en overlay cliquable pour fermer, `.source-head` avec titre + bouton Imprimer (`printSource()` → `body.printing-source` + `window.print()`, restauré par l'event `afterprint`) + bouton ✕. Sur mobile : `.source-panel{width:100vw}`. Le texte source complet (article) est reproduit intégralement dans `.source-body`.

## Progression (step-nav en pastilles, identique au Summary Trainer)

`.step-nav-wrap` sticky sous le header, pastilles rondes numérotées cliquables (`.step-pill`), pastille active surlignée or, pastille visitée cochée verte (`✓`), clic = scroll fluide vers la section (`goStep`). Liste `NAV_STEPS` = les 12 étapes ci-dessus. JAMAIS la barre linéaire simple (`.progress-fill` %) — toujours le style pastilles du Summary Trainer.

## Règle du double ancrage (texte + connaissances)

Obligatoire dans le Brainstorm ET dans chaque argument construit : mélange de `src-doc` (reformule le document, avec référence de paragraphe si possible) et `src-ext` (connaissance personnelle — théorie économique, exemple d'entreprise/pays, actualité). Ne jamais un exercice 100% texte ou 100% connaissances.

## Type de plan — jamais figé

Ne jamais enseigner un plan unique. Toujours afficher le tableau générique question-type → structure, et n'indiquer qu'ensuite quelle structure convient à LA question de la page (via `.qtype-grid .c.active` et `.strategy-box`).

## Progression, feedback, persistance

- `localStorage`, une clé unique par page : `lsa-oral-str-<chapitre>-v1`. Tous les champs `[data-persist]` sont sauvegardés à chaque `input`/`change` et restaurés au chargement.
- Boutons *Analyser* : vérification heuristique locale (mots-clés, longueur, nuance, présence doc+connaissances) — jamais présentée comme une correction IA.
- Timer par défaut 3:00, facilement modifiable dans le code (`timerSeconds`).

## Charte visuelle (reprise identique)

- Polices : Cormorant Garamond (titres, italique pour citations) + Karla (texte) + DM Mono (labels/kickers). Google Fonts.
- Couleurs : navy `#0d1b2a` / navy-mid `#1a2f45` / or `#c9a355` / or clair `#e8c87a` / crème fond `#fdfcfa` / vert correct `#2e7d5e` / rouge faux `#9b2335` / warn or foncé `#7a5c00`. Trois teintes de parties : part1 vert `#1a5c4a`, part2 brun-rouge `#8a2f1d`, part3 bleu-violet `#3a3a6b`.
- Bandeau supérieur navy, liseré or 3px en bas, `.question-box` encadré or à gauche.
- Composants réutilisables : `.ex-card`, `.strategy-box`, `.mcq-btn`, `.idea-card`/`.sort-btn`, `.scaffold`/`.scaffold-row` (Idea/Explain/Example/Link), `.roadmap-part`, `.toolkit-cat`, `.model-box` (bordure top colorée t1/t2/t3), `.correction-block`/`.cb-head`/`.cb-body`, `.checklist`, `.timer-box`.
- Impression : `@media print` masque tout sauf `.print-only` par défaut ; `body.printing-source` bascule pour n'imprimer QUE `.source-panel` (le texte source).

## Navigation & compteur (rappel des règles globales du site)

Bouton retour au chapitre + bouton retour à l'accueil dans `.topbar`. Badge de compteur de visites (`visitorbadge.io`) juste avant `</body>`.

## Adapter à un nouveau chapitre

1. Remplacer la question de discussion (`.question-box .q-text`), le titre de page, le badge chapitre, les liens topbar (retour chapitre).
2. Remplacer le texte source complet dans `.source-panel .source-body` (article intégral du nouveau chapitre) + le lede/source dans le panneau.
3. Réécrire les 9 idées du Brainstorm (`IDEAS`) et les bullets de la Possible Oral Version avec le contenu du nouveau chapitre, en conservant le ratio texte/connaissances et les tags `src-doc`/`src-ext`.
4. Adapter le tableau `.qtype-grid` si le type de question change, et mettre à jour la ligne `.active` + `.strategy-box`.
5. Réécrire les options du QCM Step 7 (introduction) sur le même schéma (amorce générale correcte / annonce de plan piège / opinion tranchée piège / fait trop précis piège), en VARIANT l'ordre des options (ne jamais répéter le même ordre A-B-C-D que la page précédente).
6. Réécrire les modèles (`reveal` model-box) de Build 1/2, Nuance, Introduction, et les « Possible answer » du Roadmap avec le vocabulaire du nouveau sujet.
7. Garder identiques : Oral Language Toolkit (9 catégories, formulations fixes), Final Checklist (12 items fixes), structure du timer, step-nav en pastilles.
8. Changer la clé `localStorage` (`lsa-oral-str-<chapitre>-v1`).
9. Lier depuis le hub du chapitre (`<chapitre>.html`) et copier dans `site-a-publier/`.
