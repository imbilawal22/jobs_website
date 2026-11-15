# Rozgar Jawan (روزگار جوان) — Pakistan Job Portal

**Rozgar Jawan** ek modern, clean, minimalist aur 100% responsive jobs portal website hai jahan Pakistan bhar ki sarkari (Government) aur private jobs shaya ki jati hain.

Website main **Google Gemini AI** aur **GitHub Actions** ke zariye **Automated Job Research, Verification, aur Auto-Deployment** ka mukammal nizam shamil kar diya gaya hai!

---

## 🤖 AI Auto Job Researcher & Deployment (Kaise Kaam Karta Hai?)

1. **Daily Auto-Research (Cron Schedule)**:
   - GitHub Action rozana do martaba (Subah 8 baje aur Shaam 8 baje Pakistan Time) khud ba khud chalta hai.
2. **Gemini AI Verification**:
   - Google Gemini AI Pakistan ke verified sarkari idaron (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, SBP, NADRA, WAPDA) aur authentic banks/IT companies ki genuine bhartiyaan research aur verify karta hai.
   - Kisi bhi qisam ke fraud, fake fee ya unverified ads ko filter out kar deta hai.
3. **Smart Deduplication & Publishing**:
   - AI script `js/jobs.js` ko check karta hai aur sirf bilkul nayi aur unique jobs ko publish karta hai (koi duplicate nahi banti).
   - Nayi jobs ko GitHub par automatically commit aur push karta hai.
4. **Instant Auto-Deployment (GitHub Pages)**:
   - Jaise hi nayi jobs aati hain, GitHub Pages automatically website ko deploy kar deta hai.

---

## 🔑 AI Setup: GitHub Secrets Main API Key Kaise Add Karein?

Apni Gemini API Key ko safe rakhne ke liye GitHub Repository Secrets main add karein:

1. Apni repository kholiye:  
   👉 **[https://github.com/imbilawal22/jobs_website](https://github.com/imbilawal22/jobs_website)**
2. Upar **Settings** par click karein.
3. Left menu main **Secrets and variables** &rarr; **Actions** par click karein.
4. Green button **"New repository secret"** dabayein:
   - **Name:** `GEMINI_API_KEY`
   - **Secret:** *(Apni Gemini API Key paste karein)*
5. **Add secret** button par click kar dein!

---

## 🌐 GitHub Pages Enable Karne Ka Tareeqa:

Website ko internet par live chalane ke liye:

1. Repository **Settings** &rarr; **Pages** par jayein:  
   👉 `https://github.com/imbilawal22/jobs_website/settings/pages`
2. **Build and deployment** section main:
   - **Source:** Dropdown se **"GitHub Actions"** select karein.
3. Bas! Ab har dafa job update hone par website automatic live update ho jayegi:  
   👉 **`https://imbilawal22.github.io/jobs_website/`**

---

## ⚡ Ek Click Main AI Ko Test Karein (Manual Run):

Agar aap foran AI se jobs fetch karwana chahte hain:
1. GitHub Actions page par jayein:  
   👉 **[https://github.com/imbilawal22/jobs_website/actions](https://github.com/imbilawal22/jobs_website/actions)**
2. Left side par **"AI Job Researcher & Auto Deploy"** workflow par click karein.
3. Right side par **"Run workflow"** button dabayein!
4. AI khud ba khud jobs verify karke website par daal dega aur site deploy kar dega!

---

## 📁 Files & Folder Structure

```
jobs_website/
├── index.html                           # Main responsive website
├── publish-job.html                     # Manual job posting form
├── .github/
│   └── workflows/
│       └── ai-jobs-updater.yml          # GitHub Actions workflow (Gemini AI + Pages Deploy)
├── scripts/
│   └── fetch_and_publish_jobs.py        # Python AI job researcher & verifier engine
├── css/
│   └── style.css                        # Modern responsive CSS
├── js/
│   ├── jobs.js                          # Jobs database & dynamic renderer
│   └── main.js                          # Mobile menu & interactive triggers
└── README.md                            # Mukammal Guide
```

---

**Rozgar Jawan** — *Empowering the Youth of Pakistan 🇵🇰*
