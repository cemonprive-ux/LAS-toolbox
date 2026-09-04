# SPEC — Summary Trainer DSCG (« Document Synthesis Trainer »)

Référence exacte : `Accounting-auditing-summary-trainer.html`. Copier ce fichier et l'adapter au texte du nouveau chapitre — ne pas repartir de zéro.

## Structure de la page

1. **Document source** — texte intégral affiché en clair (pas replié), dans une carte `.source`, avec titre et mention de la source en pied d'article.
2. **01 — Identify the Main Ideas** : 5 QCM de compréhension (A–D), un par `.qitem`, vérification immédiate au clic (vert=correct/rouge=faux) + feedback court.
3. **02 — Reformulate & Order** : 2 phrases du texte à reformuler (textarea + bouton *Vérifier ma reformulation* → reveal *Modèle*), puis un exercice de remise en ordre : 5 idées clés dans le désordre, un `<select>` (1 à 5) par ligne, boutons **Vérifier l'ordre** ET **Afficher le bon ordre** (celui-ci remplit les selects avec les bonnes valeurs et les marque correctes).
4. **03 — Summary Conventions** : 2 QCM sur les règles du résumé (reformuler vs copier ; registre neutre 3e personne vs 1re personne/avis).
5. **04 — Write Your Summary** : textarea ~130–180 mots, compteur de mots avec message (trop court / adapté / trop long), bouton *Analyser mon résumé* (auto-vérification heuristique locale : longueur, présence des sigles clés, absence d'avis personnel, détection de phrases copiées mot pour mot), bouton *Voir le corrigé* → résumé modèle + rappel de structure.
6. **✓ Checklist finale** — liste de ~11 cases à cocher reprenant les étapes de la méthode, sauvegardées en `localStorage`, compteur "X / 11 vérifications effectuées". **Toujours placée avant** la section Corrigé complet.
7. **★ Corrigé complet** — résumé modèle + points clés en bullet points (support de restitution orale) + bouton *Imprimer le corrigé* (masque tout sauf cette section via `body.printing`).

## Règle des QCM (obligatoire)

Les 4 options de chaque QCM doivent être **de longueur globalement égale** (viser un écart de 1-2 mots max entre la plus courte et la plus longue) et **toutes plausibles** dans leur domaine — jamais une option absurde ou hors-sujet qui trahit la bonne réponse par sa brièveté ou son invraisemblance. La bonne réponse ne doit jamais être systématiquement la plus longue.

## Progression et persistance

- Barre sticky "Progression X / N exercices" (N = total des items interactifs : QCM + reformulations + exercice d'ordre + rédaction).
- Toutes les réponses (textarea, QCM, ordre, checklist) sauvegardées en `localStorage`, clé unique par page (`lsa-summary-dst-<chapitre>-v1`).
- Bouton *Analyser* : heuristique locale uniquement (mots-clés, longueur, ton), jamais présenté comme correction par IA.

## Charte visuelle

Identique à l'Essay Trainer (voir `SPEC-essay-trainer.md`) : Playfair Display + Source Serif 4, navy `#1a2744` / bleu `#2d5fa6` / or `#c8a84b` / vert `#2a7a4b` / rouge `#b5302b`, cartes `.step` blanches à coin rond, `.qitem` pour chaque question, `.mcq .opt` cliquables (vert=correct/rouge=faux), `.reveal`/`.fb-panel` (vert/bleu clair), `.final` encadré or pour le corrigé complet.

## Adapter à un nouveau chapitre

1. Remplacer le texte source et sa légende de source.
2. Réécrire les 5 QCM de l'étape 1 sur le contenu du nouveau texte (sujet central, expression-clé, une raison, un point technique/institutionnel, la position globale de l'auteur), en respectant la règle de longueur égale.
3. Réécrire les 2 phrases à reformuler (étape 2) + les 5 idées de l'exercice d'ordre + leurs modèles.
4. Les 2 QCM de l'étape 3 (conventions du résumé) sont génériques et peuvent rester quasi identiques.
5. Réécrire le résumé modèle et les points clés (étape 4 + corrigé complet) avec le vocabulaire du nouveau texte.
6. Adapter les 11 items de la checklist si la méthode diffère légèrement (sinon les garder tels quels).
7. Changer la clé `localStorage`, lier depuis le hub du chapitre, copier dans `site-a-publier/`.
