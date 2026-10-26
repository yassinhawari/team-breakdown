# Notes sur l’adaptation française

Version préparée le 27 octobre 2026 à partir du dépôt public `hamdibenhmida/team-breakdown-show`. La copie anglaise téléchargée reste dans le dossier `original`, à côté du site français dans l’espace de travail. Elle n’est pas incluse dans l’archive française.

## Vérifications réalisées

- Les sept scénarios et les 28 réponses avec leurs explications sont traduits. Les bonnes réponses, les points et les durées n’ont pas changé.
- La démonstration animateur a été parcourue jusqu’au podium avec six participants simulés ; l’export CSV français fonctionne.
- Six parties individuelles ont vérifié les scores de 0, 25, 45, 70, 90 et 100, les cinq niveaux et les trois dénouements.
- Les écrans ont été contrôlés sur ordinateur et sur des largeurs de 390 et 320 pixels, sans débordement horizontal.
- Tous les médias se chargent ; la vidéo et les fichiers audio sont lisibles dans Chromium. Le film dure 54,27 secondes.
- Aucune erreur JavaScript ni ressource locale manquante n’a été relevée pendant ces parcours.
- Les vraies parties multijoueurs restent à vérifier avec votre propre projet Firebase.

## Images localisées

L’outil intégré **imagegen** a été utilisé pour modifier les textes des quatre visuels. Les autres photographies sont conservées. Les fichiers définitifs sont enregistrés dans `assets/screen_intro.png`, `assets/screen_evidence.png`, `assets/screen_final.png` et `assets/hero.png`.

Les consignes demandaient de remplacer uniquement les textes anglais, de préserver le format 16:9, les photographies, les personnages, la composition et les couleurs, et de conserver les accents français. Voici les textes exacts demandés pour chaque visuel :

| Fichier | Bandeau | Titre | Sous-titre |
|---|---|---|---|
| `screen_intro.png` | ALERTE · NEXORA | L’ÉQUIPE / EN CRISE | La réunion commence dans 15 minutes. |
| `screen_evidence.png` | PREUVES · 09:49 | LE RAPPORT / CACHÉ | Deux chiffres. Une même histoire. / Que pouvons-nous vraiment promettre ? |
| `screen_final.png` | DERNIÈRE MANCHE · 09:58 | LA DÉCISION / FINALE | Vérité. Confiance. / Un contrat de deux millions d’euros. |
| `hero.png` | EN DIRECT · 09:45 | L’ÉQUIPE / EN CRISE | Un contrat. Un conflit. / Sept décisions pour le sauver. |

Pied de page commun demandé : **LE GRAND JEU DES COMPÉTENCES HUMAINES · NEXORA**.

Les messages vocaux français utilisent des voix de synthèse et correspondent aux transcriptions du contenu anglais. Le film a été remonté à partir des photographies originales sans texte, avec des légendes françaises. La musique et son attribution ont été conservées.
