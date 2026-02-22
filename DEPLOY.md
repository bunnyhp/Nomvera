# Deploy Nomvera to Vercel

## Git status

Your repo is already set up:

- **Remote:** `origin` → https://github.com/bunnyhp/Nomvera.git  
- **Branch:** `main`  
- **Check status anytime:** `git status`  
- **Push changes:** `git add .` → `git commit -m "message"` → `git push origin main`

---

## Deploy to Vercel

### Option A: Deploy via GitHub (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub”).
2. Click **Add New…** → **Project**.
3. Import the **bunnyhp/Nomvera** repository (grant Vercel access to GitHub if asked).
4. Leave settings as-is:
   - **Framework Preset:** Other
   - **Build Command:** leave empty (static site)
   - **Output Directory:** `.` (root)
5. Click **Deploy**.  
   Vercel will build and give you a URL (e.g. `nomvera.vercel.app`).  
   Every push to `main` will trigger a new deployment.

### Option B: Deploy with Vercel CLI

1. Install the CLI (once):  
   `npm i -g vercel`
2. From the project folder:  
   `cd c:\Users\edith\Desktop\autonaties\nomvera`  
   `vercel`
3. Log in or create an account when prompted.
4. Accept the defaults (link to existing project or create new one).  
   Your site will be deployed and you’ll get a URL.

Later, to deploy again: run `vercel` (preview) or `vercel --prod` (production).

---

## Hero video (`out/`)

The site expects the hero video at **`out/Nomvera-hero-motion.mp4`**.

- If **`out/`** is committed to Git, Vercel will serve it automatically.
- If **`out/`** is in `.gitignore` or not committed:
  1. Generate it locally: `npm run build`
  2. Commit and push:  
     `git add out/`  
     `git commit -m "Add hero video"`  
     `git push origin main`  
  Or upload the video elsewhere and change the `index.html` video `src` to that URL.

---

## Quick reference

| Task              | Command / action                          |
|-------------------|-------------------------------------------|
| Check git status  | `git status`                              |
| See remote        | `git remote -v`                           |
| Push to GitHub    | `git push origin main`                    |
| Deploy (CLI)      | `vercel` or `vercel --prod`               |
| Build hero video  | `npm run build`                           |
