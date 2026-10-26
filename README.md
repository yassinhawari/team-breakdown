# L’équipe en crise — version française

Jeu pédagogique d’environ quinze minutes sur les compétences humaines au travail. Un contrat de deux millions d’euros, une équipe divisée et sept décisions pour rétablir la confiance.

Adaptation française du [site de Hamdi Ben Hmida](https://hamdibenhmida.github.io/team-breakdown-show/) et de son [dépôt source](https://github.com/hamdibenhmida/team-breakdown-show).

## Démarrage

- Pour publier le site sur votre compte, consultez [le guide de déploiement](GUIDE_DEPLOIEMENT_FR.md).
- Pour jouer sans configuration : **S’ENTRAÎNER EN SOLO** ou **ANIMER LE JEU → ESSAYER LA DÉMONSTRATION**.
- Pour jouer à plusieurs sur téléphone : configurez votre propre projet Firebase dans `config.js` en suivant le guide.
- Pour un essai local, lancez `python -m http.server 8000` depuis ce dossier, puis ouvrez `http://localhost:8000`.

## Contenu traduit

L’interface d’accueil, les écrans animateur et joueur, les sept scénarios, les 28 réponses et leurs explications, les compétences, les dénouements, les cinq niveaux de résultats, les messages d’erreur, les libellés d’accessibilité et l’export CSV sont en français.

Les quatre visuels contenant du texte ont été adaptés en français. Le film a été remonté à partir des photographies originales avec des titres français, la musique d’origine et le même déroulement d’environ 54 secondes. Il ne comporte pas de voix off, comme l’original : l’animateur peut utiliser [la narration française](NARRATION_FR.md), également disponible à l’écran et en sous-titres.

Les cinq messages vocaux ont été réenregistrés en français avec des voix de synthèse. Les messages utilisés pendant le jeu disposent d’une transcription consultable. Les noms des personnages, NEXORA et ASTER Retail sont conservés.

## Déroulement et score

Les sept actes suivent la dispute, les accusations, les preuves cachées, la voix ignorée, le compromis impossible, l’appel du client et la décision finale. Chaque manche comporte quatre choix et une meilleure réponse. La première vaut 10 points ; les six suivantes valent 15 points chacune, soit 100 points au total.

Le score individuel dépend des réponses du joueur. Le vote majoritaire détermine le dénouement collectif. L’animateur contrôle le dévoilement des résultats et les transitions. Le chronomètre sert de repère ; il ne ferme pas automatiquement la manche.

| Score | Niveau |
|---|---|
| 90–100 | Exceptionnel |
| 70–89 | Solide |
| 45–69 | Compétent |
| 25–44 | En progression |
| 0–24 | À construire |

## Fonctionnement

Le site est statique : aucun outil de compilation ni serveur applicatif n’est nécessaire pour les démonstrations. Firebase est nécessaire pour synchroniser de vrais participants. Les fichiers audio et vidéo sont locaux. Les polices Google sont facultatives et disposent de polices système de secours ; le code QR utilise un service en ligne.

Gardez l’onglet de l’animateur ouvert pendant une partie. Les joueurs doivent rejoindre la salle avant le démarrage. Chaque participant ne peut envoyer qu’une réponse par manche. Le jeu reste un outil pédagogique : les réponses se trouvent dans le JavaScript et ne sont pas protégées comme celles d’un examen surveillé.

## Crédits et conditions d’origine

Le code pédagogique et les images du projet source sont fournis par leur auteur pour adaptation dans le cadre de cette présentation, selon son README. L’entreprise et les personnages sont fictifs ; les portraits sont des images de synthèse, pas les photographies de personnes réelles.

Musique du film : **« Echoes of Time v2 » — Kevin MacLeod (incompetech.com)**, sous licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). Ce crédit doit accompagner toute redistribution du film, y compris sa version française.

Les visuels avec texte ont été localisés avec l’outil intégré imagegen. Les messages français utilisent des voix de synthèse Microsoft Edge. Les bibliothèques Firebase restent soumises aux conditions et licences de Google. Les noms de produits et titres d’œuvres sont conservés pour l’attribution.
