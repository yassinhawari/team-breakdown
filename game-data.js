// Sept décisions liées entre elles, quatre choix possibles et une meilleure réponse par manche.
// Les réponses sont consultables dans le code : ce jeu pédagogique ne convient pas à un examen surveillé.
window.SHOW = {
  name: 'L’ÉQUIPE EN CRISE',
  brand: 'LE GRAND JEU DES COMPÉTENCES HUMAINES',
  intro: 'Un contrat de deux millions d’euros. Une équipe divisée. Quinze minutes pour rétablir la confiance.',
  questions: [
    {
      act: '01 / 07', time: '09:45', title: 'La dispute', slug: 'LA DISPUTE', kind: 'video', points: 10, duration: 75,
      photo: 'assets/conflict.jpg', skill: 'Capacité à diriger · Écoute active · Gestion des priorités',
      setup: 'Olivia veut promettre une amélioration de 35 %. Ethan affirme que ce chiffre n’est pas représentatif. Tous deux refusent de partager la même scène. Le client arrive dans quinze minutes. Vous dirigez le projet : vous avez le pouvoir de coordonner l’équipe, mais pas de falsifier les résultats.',
      prompt: 'Quelle est votre première action ?',
      answers: [
        {id: 'A', text: 'Rencontrer chaque responsable séparément, puis réunir les meilleurs éléments de leurs deux propositions.', why: 'Cela peut apaiser les émotions, mais le temps manque pour deux négociations séparées. Réunir des affirmations incompatibles ne permet pas de vérifier les faits.'},
        {id: 'B', text: 'Réunir les deux responsables pendant 90 secondes : rappeler l’objectif commun, préciser le fait contesté et désigner une personne chargée de le vérifier.', why: 'Cette démarche fixe un objectif commun, ramène le désaccord à une question vérifiable et évite de prendre parti avant d’examiner les preuves.'},
        {id: 'C', text: 'Demander au directeur général de décider quel responsable aura le dernier mot sur le diaporama.', why: 'Une autorité clairement établie peut débloquer la situation, mais elle ne résout ni le problème d’exactitude ni la dégradation de la relation de travail.'},
        {id: 'D', text: 'Confier les questions techniques à Ethan et laisser Olivia responsable des diapositives commerciales.', why: 'Clarifier les rôles est utile, mais cette répartition laisse dans la présentation une affirmation potentiellement trompeuse.'}
      ], correct: 'B',
      good: 'L’équipe s’accorde sur un objectif : protéger la relation client grâce à des preuves. Nina est chargée de vérifier le chiffre contesté.',
      bad: 'La dispute s’interrompt, mais personne n’a convenu d’une méthode pour évaluer les preuves. L’équipe reste divisée.',
      insight: 'Diriger sous pression consiste à construire un processus de décision commun, et pas seulement à exercer son autorité.'
    },
    {
      act: '02 / 07', time: '09:47', title: 'Les accusations', slug: 'LES ACCUSATIONS', kind: 'audio-olivia', points: 15, duration: 80,
      photo: 'assets/olivia.jpg', skill: 'Résolution des conflits · Régulation des émotions · Sécurité psychologique',
      setup: 'Olivia accuse Ethan d’avoir saboté le contrat en attendant la dernière minute. Ethan affirme qu’Olivia a ignoré ses avertissements précédents. Leurs collègues cessent de participer. Il ne reste que quatre minutes avant le premier appel de préparation avec les investisseurs.',
      prompt: 'Quelle intervention permet le mieux de réduire les accusations tout en maintenant la responsabilité de chacun ?',
      answers: [
        {id: 'A', text: 'Demander aux deux responsables de présenter des excuses publiques, puis reprendre l’ordre du jour initial.', why: 'Des excuses peuvent apaiser le ton, mais des excuses imposées risquent de rester superficielles et n’établissent pas ce qui s’est réellement passé.'},
        {id: 'B', text: 'Poursuivre la discussion en privé et laisser le reste de l’équipe terminer les diapositives.', why: 'Un échange privé peut éviter l’escalade, mais l’équipe reste sans orientation vérifiée ni responsable clairement désigné.'},
        {id: 'C', text: 'Distinguer les faits observés des interprétations, écouter brièvement chaque partie et convenir d’une action fondée sur les preuves, avec des responsables désignés.', why: 'Cette démarche prend en compte les émotions sans encourager les accusations, clarifie la tâche et attribue les responsabilités de façon précise et équitable.'},
        {id: 'D', text: 'Confier la même tâche aux deux responsables et exiger qu’ils se mettent d’accord avant l’appel avec le client.', why: 'Une responsabilité partagée peut aider, mais une consigne sans cadre précis risque de provoquer un nouveau blocage alors qu’une décision étayée est urgente.'}
      ], correct: 'C',
      good: 'Les accusations deviennent un problème que l’on peut résoudre. L’équipe décide d’examiner le rapport de Nina avant de modifier les affirmations destinées au client.',
      bad: 'L’équipe obéit en apparence, mais les accusations restent sans réponse et chacun hésite davantage à prendre la parole.',
      insight: 'Une résolution saine des conflits distingue les preuves, les émotions et les responsabilités.'
    },
    {
      act: '03 / 07', time: '09:49', title: 'Les preuves cachées', slug: 'LES PREUVES CACHÉES', kind: 'evidence', points: 15, duration: 90,
      photo: 'assets/screen_evidence.png', skill: 'Esprit critique · Communication éthique · Compréhension des données',
      setup: 'Nina transmet deux rapports vérifiés. Un test contrôlé portant sur 20 processus prédéfinis montre un gain de rapidité de 35 %. Un essai pilote distinct, réalisé en conditions réelles sur 400 processus, montre un gain médian de 8 %. Le client souhaite connaître les performances à attendre dans ses conditions habituelles d’activité.',
      prompt: 'Comment présenter ces résultats dans l’argumentaire commercial ?',
      answers: [
        {id: 'A', text: 'Mettre en avant les +35 %, préciser clairement qu’il s’agit d’un test contrôlé et placer les résultats de l’essai pilote en annexe.', why: 'La précision est exacte, mais l’accent mis sur ce chiffre ne répond pas à la question du client sur les conditions réelles et risque de créer des attentes trop élevées.'},
        {id: 'B', text: 'Présenter une fourchette d’amélioration de 8 à 35 % et expliquer que les performances dépendent de l’environnement.', why: 'Ces chiffres correspondent à des méthodes et à des indicateurs statistiques différents. Rien ne justifie d’en faire une seule fourchette de résultats attendus.'},
        {id: 'C', text: 'Mettre en avant le gain médian de 8 % de l’essai pilote, en expliquer les limites et présenter séparément les 35 % comme le résultat d’un test contrôlé, sans en faire une promesse.', why: 'L’essai pilote correspond mieux aux conditions habituelles d’activité. Distinguer sa médiane du résultat contrôlé permet de replacer chaque constat dans son contexte.'},
        {id: 'D', text: 'Supprimer les deux chiffres et se concentrer sur les avantages qualitatifs du produit en attendant des recherches supplémentaires.', why: 'Des vérifications supplémentaires peuvent être utiles, mais écarter des preuves disponibles et correctement nuancées revient à éviter inutilement la question.'}
      ], correct: 'C',
      good: 'Les chiffres ne s’opposent plus. L’équipe décide de ne dire que ce que les preuves permettent réellement d’affirmer.',
      bad: 'Le message destiné au client reste confus. Le chiffre le plus élevé risque d’éclipser les résultats plus pertinents de l’essai pilote.',
      insight: 'L’esprit critique ne consiste pas à choisir le chiffre le plus impressionnant, mais les preuves adaptées à la question.'
    },
    {
      act: '04 / 07', time: '09:51', title: 'La voix ignorée', slug: 'LA VOIX IGNORÉE', kind: 'audio-nina', points: 15, duration: 75,
      photo: 'assets/nina.jpg', skill: 'Empathie · Écoute active · Direction inclusive',
      setup: 'Nina révèle qu’elle a envoyé le rapport actualisé par courriel vendredi, sans recevoir de réponse. Elle a aussi essayé d’en parler hier, mais on l’a interrompue. Olivia se sent maintenant accusée publiquement. Ethan veut utiliser le courriel pour prouver qu’il avait raison.',
      prompt: 'Comment réagir aux révélations de Nina ?',
      answers: [
        {id: 'A', text: 'Remercier Nina en privé, puis demander au directeur général d’examiner le problème de communication après la réunion avec le client.', why: 'Un remerciement privé reconnaît la contribution de Nina, mais l’équipe doit encore agir sur les preuves vérifiées et établir immédiatement une démarche équitable.'},
        {id: 'B', text: 'Montrer à l’équipe les dates et heures des courriels, identifier les personnes qui ont manqué l’alerte et exiger des comptes immédiatement.', why: 'La chronologie compte, mais rechercher publiquement des fautifs risque de transformer une occasion de corriger le problème en sanction, avant même d’en comprendre les causes.'},
        {id: 'C', text: 'Demander à Nina de présenter elle-même les résultats et de porter publiquement la responsabilité de l’affirmation révisée.', why: 'Cela lui donne la parole, mais reporte injustement la responsabilité des décisions collectives sur une employée débutante.'},
        {id: 'D', text: 'Remercier Nina devant l’équipe, vérifier l’historique des échanges sans accuser personne, lui confier un rôle précis dans la révision et prévoir un examen des procédures après la réunion.', why: 'Cette démarche reconnaît sa contribution, protège la sécurité psychologique, utilise immédiatement l’information et maintient une attribution appropriée des responsabilités.'}
      ], correct: 'D',
      good: 'Nina participe à la mise à jour de la diapositive. Olivia entend une explication sans accusation et accepte de réviser le message principal.',
      bad: 'Les révélations de Nina augmentent la tension. L’équipe cherche des coupables au lieu de réfléchir à une communication exacte.',
      insight: 'Une direction inclusive transforme les informations difficiles en occasions d’apprendre, sans faire des personnes des boucs émissaires.'
    },
    {
      act: '05 / 07', time: '09:53', title: 'Le compromis impossible', slug: 'LE COMPROMIS IMPOSSIBLE', kind: 'revision', points: 15, duration: 80,
      photo: 'assets/conference.jpg', skill: 'Négociation · Collaboration · Résolution créative des problèmes',
      setup: 'L’affirmation est corrigée, mais Olivia craint qu’un résultat moins spectaculaire affaiblisse l’argumentaire. Ethan redoute qu’une future garantie reproduise la même erreur. Tous deux acceptent de présenter la démonstration aujourd’hui, mais estiment qu’un engagement de performance signé serait prématuré.',
      prompt: 'Quel accord devriez-vous demander à l’équipe de construire ?',
      answers: [
        {id: 'A', text: 'Conserver l’objectif ambitieux de 35 % dans le titre, en ajoutant en petits caractères que les résultats peuvent varier.', why: 'Une réserve en petits caractères ne résout pas l’écart entre un test contrôlé favorable et ce que l’on amène le client à attendre.'},
        {id: 'B', text: 'Présenter le résultat vérifié de l’essai pilote, montrer des processus réels et proposer une phase de validation définie ensemble avant tout engagement de performance.', why: 'Cette proposition crée une valeur commerciale sans promesse excessive, renforce la crédibilité technique d’Ethan et offre à Olivia une voie constructive vers un contrat.'},
        {id: 'C', text: 'Abaisser l’objectif commercial à une amélioration garantie de 8 % et demander à Ethan de la valider.', why: 'La médiane de l’essai pilote ne constitue pas une garantie pour un nouveau client. La transformer en garantie crée une nouvelle promesse excessive.'},
        {id: 'D', text: 'Partager équitablement la présentation : Olivia présente le potentiel de gain et Ethan expose séparément toutes les limites.', why: 'Cette solution semble équilibrée, mais deux discours séparés peuvent dérouter le client et montrer que l’équipe n’est toujours pas unie.'}
      ], correct: 'B',
      good: 'L’équipe construit un discours commun : des résultats vérifiés aujourd’hui, une validation mesurable ensuite et une responsabilité partagée pour la proposition.',
      bad: 'Le diaporama révisé envoie encore des messages contradictoires. Olivia et Ethan restent inquiets des promesses qui seront faites.',
      insight: 'Une bonne négociation élargit les possibilités au lieu d’obliger une personne à céder.'
    },
    {
      act: '06 / 07', time: '09:55', title: 'L’appel du client', slug: 'L’APPEL DU CLIENT', kind: 'audio-client', points: 15, duration: 80,
      photo: 'assets/conference.jpg', skill: 'Communication transparente · Assurance · Gestion des parties prenantes',
      setup: 'ASTER Retail appelle en avance. Son directeur des achats demande si le gain annoncé de 35 % s’applique à ses activités. Le directeur général vous demande de parler avec assurance sans révéler les conflits internes. Le client attend une réponse concrète maintenant.',
      prompt: 'Quelle réponse préserve le mieux votre crédibilité ?',
      answers: [
        {id: 'A', text: 'Expliquer que les 35 % proviennent de tests contrôlés, communiquer le gain médian de 8 % de l’essai pilote et proposer un plan de validation propre au client, avec des étapes précises.', why: 'Cette réponse s’appuie directement sur les preuves, distingue les méthodes et propose une démarche concrète sans exposer des conflits internes sans rapport avec la question.'},
        {id: 'B', text: 'Dire que les 35 % sont possibles dans des conditions idéales et promettre de communiquer la méthodologie détaillée après la réunion.', why: 'Ce n’est pas un mensonge au sens strict, mais cela ne répond pas à l’attente du client sur ses conditions habituelles et risque de présenter les données de manière sélective.'},
        {id: 'C', text: 'Dire que la présentation initiale était provisoire et proposer de reporter la réunion jusqu’à ce que tous les chiffres aient été revérifiés.', why: 'Vérifier davantage peut être prudent, mais les deux études ont déjà été contrôlées. Reporter sans nécessité précise fait perdre une occasion précieuse.'},
        {id: 'D', text: 'Demander au client de se concentrer sur la démonstration du produit et de réserver les questions statistiques à une séance technique ultérieure.', why: 'Le client a posé une question essentielle. L’esquiver peut affaiblir la confiance, même si la démonstration est convaincante.'}
      ], correct: 'A',
      good: 'Le client apprécie la franchise et accepte d’écouter la proposition révisée. La relation reste constructive.',
      bad: 'Le client devient plus sceptique et demande au directeur général pourquoi le message a changé si tard.',
      insight: 'L’assurance est plus convaincante lorsqu’elle repose sur une information transparente et pertinente.'
    },
    {
      act: '07 / 07', time: '09:58', title: 'La décision finale', slug: 'LA DÉCISION FINALE', kind: 'final', points: 15, duration: 80,
      photo: 'assets/screen_final.png', skill: 'Jugement éthique · Décision stratégique · Cohésion d’équipe',
      setup: 'Il reste deux minutes. Le directeur général peut conserver le diaporama initial pour préserver un argumentaire spectaculaire, utiliser la version révisée avec des étapes de validation ou reporter la réunion. Ethan ne présentera que des faits étayés ; Olivia veut une voie crédible vers le contrat de 2 millions d’euros. ASTER est prêt à rejoindre la réunion.',
      prompt: 'Quelle consigne finale concilie le mieux le contrat, les preuves et l’équipe ?',
      answers: [
        {id: 'A', text: 'Approuver le diaporama initial et laisser le directeur général répondre aux questions difficiles si le client conteste le chiffre principal.', why: 'L’autorité d’un dirigeant ne rend pas une affirmation trompeuse plus fiable et cette décision ravive le conflit.'},
        {id: 'B', text: 'Reporter la réunion d’une semaine pour rétablir la cohésion de l’équipe et éliminer toute incertitude.', why: 'Une pause peut se justifier si les informations sont risquées ou non vérifiées. Ici, une présentation sincère et un plan de validation sont prêts : un report systématique est donc disproportionné.'},
        {id: 'C', text: 'Utiliser le diaporama révisé, mais autoriser Olivia à promettre oralement un résultat supérieur si le client ne semble pas convaincu.', why: 'Un engagement oral informel peut induire le client en erreur autant qu’une affirmation écrite mise en avant.'},
        {id: 'D', text: 'Approuver l’argumentaire révisé fondé sur les preuves, attribuer des rôles de présentation complémentaires et proposer des étapes claires pour l’essai pilote avant toute garantie de performance.', why: 'Cette décision réunit les points de vue commercial et technique, respecte la vérité et donne au client un chemin concret vers la confiance et la décision.'}
      ], correct: 'D',
      good: 'L’équipe se présente unie. Le client accepte une phase de validation au périmètre défini et les négociations se poursuivent sur des bases crédibles.',
      bad: 'La présentation finale révèle le désaccord non résolu. ASTER demande une clarification écrite avant de poursuivre les négociations.',
      insight: 'Les meilleurs responsables protègent à la fois le résultat et les principes qui permettent de l’atteindre.'
    }
  ]
};
