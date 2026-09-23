# Siddharth Singh — Portfolio

Static site (HTML/CSS/JS, no build step). Ready to deploy on Vercel as-is.

## Deploy options

### A) Vercel CLI (fastest)
```bash
npm i -g vercel
cd this-folder
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

### B) Vercel dashboard (drag-and-drop)
1. Go to https://vercel.com/new
2. Choose "Deploy" → drag this folder in, or "Import" a Git repo containing it
3. Framework preset: **Other** (no build command, no output directory needed)
4. Click Deploy

### C) Git-based (recommended for ongoing updates)
1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. Import the repo at https://vercel.com/new
3. Vercel auto-detects it as a static site — leave Build Command empty and Output Directory as `.`
4. Deploy — every push to `main` auto-redeploys

## Content in this build
- **About**: real bio, BCA (Veer Bahadur Singh Purvanchal University) + MCA (Shri Ramswaroop Memorial University), 1 year hands-on experience.
- **Internship Experience** section (repurposed from the old generic "Expertise" timeline): Internship Studio, Code Alpha, Code Eternity, EazyByte Infotech (Java Full Stack). Descriptions are generic placeholders — swap in your actual responsibilities/tasks per internship.
- **Skills**: MERN stack, Frontend, Python/Flask/Django, AI/ML (ML, DL, NLP, OpenCV), Data & Automation (NumPy, Pandas, Matplotlib, Web Scraping, Selenium).
- **Projects**: AI Developer OS (featured), plus ClipSnap AI, Cryptalk, No-Code API Automation Builder, AI Mock Interview Simulator, Real-Time Collaborative Code Editor, and Inventory/Product Data Manager. Tags and descriptions are reasonable guesses based on each project's name — please correct/expand them with the real details, tech stack, and links.
- **Contact/footer**: real email, phone, GitHub, and LinkedIn.
- **Removed**: the fabricated "Client Success Stories" testimonials and the "Enterprise Solutions / Global Clients" stats — those were placeholder corporate copy that didn't fit a personal developer portfolio. The stats block now shows real-ish numbers (7+ projects, 1+ year experience, 4 internships, 15+ technologies) — adjust as needed.

## Before going live, consider
- Replace the placeholder project images (`placehold.co`) with real screenshots of each project.
- Add real `Live Demo` / `View Code` links (currently `#`) for each project once they're deployed/pushed to GitHub.
- Fill in specific bullet points for each internship (what you actually built/did).
- The contact form only shows an `alert()` and logs to console — it doesn't send email. Wire it to a real endpoint (e.g. a Vercel Serverless Function, Formspree, or EmailJS) if you want submissions delivered.
