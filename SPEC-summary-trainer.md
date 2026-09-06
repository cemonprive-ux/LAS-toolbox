# SPEC — Summary Trainer DSCG (« Summary Writing Trainer », 7 étapes)

Référence exacte : `Digital-currency-summary-trainer.html`. Copier ce fichier et l'adapter au texte du nouveau chapitre — ne pas repartir de zéro, ne pas revenir à l'ancien modèle 4 blocs (Document Synthesis Trainer).

## Principe directeur

L'étudiant doit voir son résumé se construire progressivement sous ses yeux : chaque étape produit quelque chose que l'étape suivante réutilise, jusqu'au résumé final. Pas huit exercices indépendants — une chaîne : texte source → topic/position → idées principales retenues → idées condensées → reformulations → plan de résumé → rédaction → vérification.

Esthétique : learning workspace / writing tool, sobre et professionnelle (public post-bac). Pas de cartes gamifiées, pas de badges/récompenses, pas d'animations superflues.

## Architecture d'écran

- **Header** navy avec titre + bouton "Summary Method" (ouvre une modale mémo, cf. plus bas).
- **Barre de progression** sticky : 7 pastilles numérotées cliquables (Understand·Select·Condense·Reformulate·Organise·Write·Check), pastille active surlignée or, pastille visitée cochée (✓ vert). Navigation libre entre étapes (pas de verrouillage).
- **Workspace en deux colonnes** (desktop) : texte source à gauche (sticky, scrollable, toujours accessible), contenu de l'étape courante à droite (un seul `.step-panel` visible à la fois, changé via `goStep(i)`).
- **Mobile** : colonne source devient un tiroir plein écran ouvert par un bouton "📄 Show source text" ; nav des étapes scrollable horizontalement.
- Persistance totale en `localStorage` (clé unique par page, ex. `lsa-dscg-summary-trainer-<chapitre>-v1`) : réponses, plan, texte rédigé, étape courante — rien n'est perdu en changeant d'étape ou en rechargeant.

## Les 7 étapes

1. **Understand** — 2 QCM : TOPIC puis AUTHOR'S POSITION (bien distincts, rappel visuel TOPIC ≠ POSITION). Un encadré récapitule les deux réponses validées ; elles seront réutilisées dans Organise.
2. **Select** — 2.1 : 2 exercices « spot the main idea » (un passage, 4 reformulations : main idea / example / statistic-detail / too vague, l'étudiant choisit la main idea). 2.2 : liste de ~9 affirmations tirées du texte, boutons KEEP / LEAVE OUT par item, feedback court à chaque clic. Les items "KEEP" alimentent automatiquement les idées principales + la conclusion de l'étape Organise.
3. **Condense** — 2 exercices complets « Original → Remove details (cases à cocher) → Find the common idea (QCM) → Condense (phrase révélée) », plus un exercice de calibrage « Too detailed / Appropriate / Too vague » (3 selects à faire correspondre).
4. **Reformulate** — 4 mini-exercices, un par technique : Synonym, Change structure (voix passive), Generalise, Combine. Chacun : input + bouton Check (feedback heuristique) + bouton **« Show model »** qui masque le modèle par défaut (jamais affiché directement).
5. **Organise** — « My Summary Plan » : Topic + Position pré-remplis (Understand), 4 Main Ideas pré-remplies avec les items KEEP de Select (et les phrases condensées de Condense), Conclusion pré-remplie avec l'item KEEP conclusif. Tout reste éditable ; réordonnancement des idées via boutons ▲▼ (pas de drag & drop).
6. **Write** — recap du plan affiché, zone de rédaction 130–180 mots, compteur de mots dynamique coloré (< 130 / 130–180 ✓ / > 180), bouton discret **« Need help? »** qui révèle des connecteurs (masqués par défaut).
7. **Check** — aperçu du résumé rédigé + bouton « Analyser mon résumé » : 6 catégories heuristiques (Content, Selection, Reformulation, Organisation, Language, Length), chacune ✓ Good ou ⚠ Improve this. Bouton « ✏ Edit my summary » ramène à Write sans perdre le texte. Bouton « Compare with a model answer » (désactivé tant que l'analyse n'a pas tourné une fois) révèle un modèle 130–180 mots (viser 150–170) avec légende de surlignage (idée principale / reformulation / connecteur) et la mention "This is one possible summary. Other answers are possible."

## Mémo transférable

Bouton "Summary Method" (toujours accessible, dans le header) ouvre une modale listant la méthode en 7 points (Understand → Select → Condense → Reformulate → Organise → Write → Check), une phrase d'explication par étape.

## Bouton d'impression
Au bas de la page (étape Check, à côté de "← Back to Write"), toujours un bouton **🖨 Imprimer** (`onclick="window.print()"`). Prévoir des règles `@media print` qui masquent topbar, step-nav, tiroir source, footer-nav, compteur de visites et modale, et qui affichent tous les `.step-panel` (pas seulement l'étape courante) pour une impression complète.

## Règles obligatoires

- Les QCM/options doivent être de longueur globalement égale et toutes plausibles (pas d'option absurde qui trahit la réponse par sa brièveté).
- Dans les exercices Condense (3.1/3.2, « Find the common idea ») : varier la position de la bonne réponse (pas toujours en A), et équilibrer la longueur des 3 options — la bonne réponse ne doit jamais être systématiquement la plus longue.
- Dans le calibrage 3.3 (« Too detailed / Appropriate / Too vague ») : équilibrer autant que possible la longueur des 3 phrases candidates (éviter qu'une phrase soit 3-4x plus longue que les autres).
- Le modèle final (étape 7) doit être vérifié réellement entre 130 et 180 mots (idéalement 150–165) — compter les mots avant de livrer.
- Chaque `.card`/exercice interactif référencé par `checkMCQ`/`checkReformulate` DOIT porter l'`id` attendu par son `onclick` — vérifier après écriture que chaque bouton répond au clic (bug fréquent : carte sans id).
- Aucun modèle/corrigé ne doit s'afficher par défaut : toujours derrière un bouton de révélation.
- Compteur de visites (voir section dédiée dans `CLAUDE.md`) à ajouter avant `</body>`.

## Adapter à un nouveau chapitre

1. Remplacer le texte source (panneau gauche) et sa légende de source.
2. Réécrire les 2 QCM Understand (topic/position) sur le nouveau texte.
3. Réécrire les 2 exercices « spot the main idea » + les ~9 items Keep/Leave out (viser 4-5 KEEP dont 1 conclusion, 4-5 LEAVE OUT) — cohérents avec les mêmes idées reprises dans Condense.
4. Réécrire les 2 exercices Condense (passage → détails à cocher → idée commune → phrase condensée) en réutilisant les idées gardées à l'étape Select, + le calibrage too-detailed/appropriate/too-vague.
5. Réécrire les 4 exercices Reformulate (synonym/structure/generalise/combine) avec du vocabulaire du nouveau texte.
6. Vérifier que le pré-remplissage d'Organise (topic/position/4 idées/conclusion) correspond bien aux réponses correctes des étapes précédentes.
7. Réécrire le modèle final (Write/Check) et vérifier son nombre de mots (130–180).
8. Adapter les 6 catégories heuristiques de Check (mots-clés de contenu, chiffres à repérer comme "trop de détails", phrases verbatim à détecter) au nouveau texte.
9. Changer la clé `localStorage`, lier depuis le hub du chapitre, copier dans `site-a-publier/`.
