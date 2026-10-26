# Deploy your French site to GitHub Pages

The site is ready to publish. No build tools are required: it contains HTML, CSS, JavaScript, and local French media files.

## 1. Create your repository

1. Sign in to your account on [GitHub](https://github.com/new).
2. Under **Repository name**, enter `team-breakdown`. Your selected repository is [yassinhawari/team-breakdown](https://github.com/yassinhawari/team-breakdown).
3. Choose **Public** to use GitHub Pages with a free account.
4. Enable **Add a README file**, then click **Create repository**.

## 2. Upload the files

1. If you are using `french-team-breakdown.zip`, extract it first.
2. In your repository, click **Add file → Upload files**.
3. Drag **everything inside** the extracted `french-team-breakdown` folder into the upload area: all files at its top level and the complete `assets` folder.
4. Click **Commit changes**.

The file `index.html` must appear directly at the repository root. Upload the extracted files, with no extra enclosing `french-team-breakdown` folder inside the repository.

Required files: `index.html`, `style.css`, `app.js`, `game-data.js`, `media-fr.js`, `config.js`, `database.rules.json`, and the complete `assets/` folder. Include the supplied `.nojekyll` file to disable Jekyll processing. You can also upload the documentation.

## 3. Enable GitHub Pages

1. Open **Settings → Pages** in your repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select **main**, then **/(root)**.
4. Click **Save**.
5. Wait a few minutes. Publishing can take up to ten minutes.
6. Return to **Settings → Pages** and click **Visit site**.

Your address will be: `https://yassinhawari.github.io/team-breakdown/`.

The repository name is `team-breakdown`; the local project folder and ZIP are named `french-team-breakdown`. If you use another account or repository later, update the site address accordingly.

To publish directly at `https://YOUR_USERNAME.github.io/`, use a repository named exactly `YOUR_USERNAME.github.io`, with your username in lowercase. If you already have a repository with that name, check its contents before making changes.

[Official guide: creating a site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Try the game immediately

The game stays in French. On your published site:

- Click **S’ENTRAÎNER EN SOLO** (practice solo) to play all seven rounds with an individual score.
- Click **ANIMER LE JEU → ESSAYER LA DÉMONSTRATION** (host the game → try the demo) to run a classroom demonstration with six simulated players.
- Both modes work without Firebase configuration.
- To connect several real phones to the same room, complete the next step.

## 5. Enable live multiplayer

GitHub Pages hosts the site files; Firebase synchronizes players, answers, and scores. The configuration you supplied for project `taxi-947dd` is already saved in `config.js`. The game already imports and initializes the Firebase SDK, so no extra Firebase script needs to be pasted into `index.html`. Live multiplayer still needs the console settings below and a connection test.

1. Open your existing project **taxi-947dd** in the [Firebase console](https://console.firebase.google.com/).
2. In **Project settings → Your apps**, select the Web app whose App ID is `1:107541115959:web:984c54b7f7637d419dbbb2`. This is the app configured in the site.
3. Under **Authentication**, enable the **Anonymous** sign-in provider.
4. Open **Realtime Database** and confirm that the database URL is `https://taxi-947dd-default-rtdb.firebaseio.com`.
5. Your Web app configuration is already in `config.js`. If you switch Firebase projects later, replace these values with the new project's configuration and exact database URL.
6. If this database is dedicated to the game, publish the contents of `database.rules.json` in its **Rules** tab. If the database already serves another app, review and merge the game rules with its existing rules first. The game stores data under `/rooms`; check for an existing use of that path before connecting. Adding a Web app does not create a separate database.
7. Under **Authentication → Settings → Authorized domains**, add `yassinhawari.github.io` if needed, without `https://` or a path. To test Firebase locally, also add `localhost` if needed.
8. Upload the updated `config.js` to your GitHub repository. Wait for the site to update, then reload it with **Ctrl+Shift+R**.
9. Click **ANIMER LE JEU → CRÉER UNE SALLE EN DIRECT** (host the game → create a live room). Share the join link or QR code with players.
10. Players join before the game starts. The host starts the game, reveals the answers, and advances to the next round.

References: [anonymous authentication](https://firebase.google.com/docs/auth/web/anonymous-auth) and [Realtime Database setup](https://firebase.google.com/docs/database/web/start).

The Web app configuration contains public identifiers. Keep service-account private keys out of the site. Database rules and authentication control access. Use nicknames for classroom play.

## Preview on your computer

Open PowerShell and run:

```powershell
cd 'C:\Users\hawar\OneDrive\Desktop\french\french-team-breakdown'
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000` in your browser. Keep PowerShell open during the preview; press **Ctrl+C** to stop the server. Opening `index.html` by double-clicking can block JavaScript modules, so use the local server or GitHub Pages.

## Troubleshooting

- **404 page:** Check that `index.html` is at the repository root and the selected branch is `main`. Check the repository’s **Actions** tab for deployment errors.
- **Missing images, audio, or video:** Check that the entire `assets/` folder was uploaded and that filenames retain their lowercase spelling.
- **Old version displayed:** Reload with **Ctrl+Shift+R**.
- **Phones cannot connect:** Check your Firebase configuration, Realtime Database, database rules, and Anonymous Authentication. Demo mode uses simulated players; create a live room for real phones.
- **No sound:** Click the play button. Your browser may block automatic playback.
- **Missing QR code:** Use the written join link beside it. The QR code depends on an external service.

Before using live multiplayer in class, test it with your own Firebase project and at least two phones.
