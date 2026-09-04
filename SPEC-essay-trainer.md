# SPEC — Essay Trainer DSCG (« Structured Response Trainer »)

Référence exacte : `Accounting-auditing-essay-trainer.html`. Copier ce fichier et l'adapter au sujet/texte du nouveau chapitre — ne pas repartir de zéro.

## Principe

Plan **dialectique en trois temps** : I. Thèse — II. Antithèse — III. Synthèse, sur une question « To what extent… ? ». 9 étapes numérotées + un corrigé complet imprimable.

## Structure des étapes (identique à chaque chapitre)

1. **Brainstorm & Sort** — liste de 9 idées (mélange texte/connaissances), classées par l'étudiant en cliquant I / II / III, vérification immédiate (bouton correct/wrong).
2. **Build the Introduction** — QCM 4 choix (A–D) pour repérer la meilleure amorce (la bonne réponse est toujours un constat général neutre, jamais une annonce de plan ni une opinion tranchée) + feedback ; puis textarea libre (~70–110 mots) + bouton *Analyser* + reveal *Voir un modèle*.
3. **Develop Part I** (Thèse) — paragraphe argumenté ~120–180 mots + *Analyser* + *Voir le corrigé* (5 bullets, chacun tagué **texte** ou **connaissances**, mélange des deux).
4. **Transition I → II** — courte transition ~15–40 mots + *Analyser* + *Voir le modèle*.
5. **Develop Part II** (Antithèse) — même format que l'étape 3.
6. **Transition II → III** — même format que l'étape 4.
7. **Develop Part III** (Synthèse) — même format que l'étape 3.
8. **Write the Conclusion** — ~80–120 mots, bilan + réponse à la problématique + ouverture, *Analyser* + *Voir le corrigé*.
9. **★ Corrigé complet** — bouton *Afficher le corrigé complet* (intro, I/II/III avec bullets tagués, transitions, conclusion) + bouton *Imprimer le corrigé* (masque tout le reste via `body.printing`).

## Règle du double ancrage (texte + connaissances)

**Obligatoire dans le Brainstorm ET dans chaque partie (I/II/III)** : les arguments doivent venir à la fois du document source et des connaissances personnelles attendues de l'étudiant (cours, actualité, théories). Chaque item/bullet porte un badge visible :
- `<small class="src-tag src-doc">Idée tirée du texte / Source : texte</small>` — reformule un élément du document.
- `<small class="src-tag src-ext">Connaissance extérieure / Source : connaissances</small>` — savoir hors document (ex. cadre réglementaire connexe, théorie économique, exemple d'actualité).

Chaque partie doit contenir au moins 1 item de chaque type. Ne jamais mettre 100% texte ou 100% connaissances dans une partie.

## Progression, feedback, persistance

- Barre de progression sticky en haut : `Progression X / 9 étapes`, remplie via `localStorage` (une clé unique par page, ex. `lsa-essay-str-<chapitre>-v1`).
- Bouton *Analyser mon X* : vérification heuristique locale (pas d'appel API) — longueur (mots) vs plage cible, présence de linking words, présence de mots-clés du document/cours, alerte si "I think/in my opinion" en conclusion. Jamais présenté comme une correction par IA — toujours "Auto-vérification".
- Bouton *Voir un modèle / Voir le corrigé* : reveal togglé, ne se ferme pas automatiquement.
- Toutes les réponses (textarea, QCM, brainstorm) sont sauvegardées en `localStorage` à chaque `input`/`click`.

## Charte visuelle (reprise identique)

- Polices : Playfair Display (titres) + Source Serif 4 (texte), Google Fonts.
- Couleurs : navy `#1a2744` / navy-deep `#0f1a33` / bleu `#2d5fa6` / or accent `#c8a84b` / vert `#2a7a4b` / rouge `#b5302b` / fond crème `#f5f3ef`.
- Bandeau supérieur navy→navy-deep, liseré or 3px, encadré `.qbox` avec la question de l'essai.
- Composants : `.step` (carte blanche, numéro rond bleu), `.tag` (pilule dorée pour Thèse/Antithèse/Synthèse), `.mcq .opt` (options cliquables, vert=correct/rouge=faux), `.sortitem` (brainstorm cliquable I/II/III), `.reveal`/`.fb-panel` (fond vert/bleu clair), `.final` (carte encadrée or pour le corrigé complet).
- Impression : classe `body.printing` masque tout sauf `.final`, affiche `.final-toggle` en entier — bouton *Imprimer le corrigé* l'active puis appelle `window.print()`.

## Adapter à un nouveau chapitre

1. Remplacer la question d'essai (`.qbox p`) et le titre de page.
2. Réécrire les 9 idées du Brainstorm et les bullets des 3 parties avec le contenu du nouveau chapitre, en conservant le ratio texte/connaissances et les tags `src-doc`/`src-ext`.
3. Réécrire les 4 options du QCM (étape 2) sur le même schéma : A = fait secondaire mal placé, B = annonce de plan (piège), C = constat général neutre (**bonne réponse**), D = opinion tranchée à éviter.
4. Réécrire intro/transitions/conclusion modèles avec le vocabulaire du nouveau sujet.
5. Changer la clé `localStorage` (`lsa-essay-str-<chapitre>-v1`).
6. Lier depuis le hub du chapitre (`<chapitre>.html`) et copier dans `site-a-publier/`.
