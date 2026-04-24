# True Shine Auto Detailing

Premium car detailing website built with Vite + React.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `/dist` — ready to deploy.

---

## Deploy to Vercel via GitHub

### Step 1 — Push to GitHub

```bash
# From the project folder:
git init
git add .
git commit -m "Initial commit – True Shine Auto Detailing"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/true-shine-auto.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up free)
2. Click **"Add New Project"**
3. Select your `true-shine-auto` GitHub repo
4. Vercel auto-detects Vite — leave all settings as-is
5. Click **"Deploy"**

Your site will be live at `https://true-shine-auto.vercel.app` (or a custom domain you configure).

### Auto-deploy
Every time you push to `main`, Vercel automatically redeploys. ✅

---

## Customization

| What to change | Where |
|---|---|
| Business name / tagline | `src/App.jsx` → `Hero` component |
| Services list | `src/App.jsx` → `Services` component |
| Pricing details | `src/App.jsx` → `Pricing` component |
| Contact email / Instagram | `src/App.jsx` → `Booking` + `Footer` |
| Colors / fonts | `src/App.css` → `:root` variables |
| Gallery images | Replace placeholder divs in `Gallery` with `<img>` tags |

## Adding Real Gallery Photos

Replace each `gallery-placeholder` div inside `.gallery-item` with:

```jsx
<img src="/photos/your-photo.jpg" alt="Detail result" style={{width:'100%',height:'100%',objectFit:'cover'}} />
```

Put your photos in the `/public/photos/` folder.
