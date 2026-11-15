# Rozgar Jawan (روزگار جوان) — Pakistan Job Portal

**Rozgar Jawan** ek modern, clean, minimalist aur 100% mobile responsive jobs portal website hai jahan Pakistan bhar ki sarkari (Government) aur private jobs shaya ki ja sakti hain.

---

## 📁 Files & Folder Structure

```
rozgar_jawan/
├── index.html              # Main responsive website (Homepage)
├── publish-job.html        # Nayi job publish karne ka helper form
├── css/
│   └── style.css           # Clean & minimalist CSS (Mobile + Desktop responsive)
├── js/
│   ├── jobs.js             # Jobs data, search filter, aur empty state engine
│   └── main.js             # Navigation menu, interactive buttons & toast alerts
├── assets/
│   ├── icons/              # Icons folder
│   └── images/             # Images / Logos folder
└── README.md               # Tafseeli guide (Urdu & English)
```

---

## 🌟 Khususiyat (Key Features)

1. **Clean & Minimalist Design**:
   - Modern emerald green (#059669) Pakistani theme ke sath banayi gayi hai.
   - Tez raftaar (fast loading) aur bilkul lightweight hai (koi heavy library nahi).
2. **100% Responsive**:
   - Mobile phones, tablets, laptops aur desktop screens par behtareen display.
   - Mobile ke liye slide-out hamburger menu.
3. **Blank Jobs Section (As Requested)**:
   - Filhal jobs section bilkul **blank** rakha gaya hai jaisa aap ne kaha tha.
   - Jab koi job na ho, to ek nihayat khubsoorat aur friendly **Empty State** show hota hai jo users ko batata hai ke jald authentic jobs publish hongi aur WhatsApp alert join karne ka option deta hai.
4. **Smart Filters & Search**:
   - Keyword search (Title, Idara ya Scale)
   - Shehar ke hisab se filter (Islamabad, Lahore, Karachi, Peshawar, Quetta, Remote, etc.)
   - Category filter (Govt / FPSC / PPSC, IT & Tech, Banking, Healthcare, Education, Defense Forces)
   - Job tabs (All, Government, Private, Remote, Fresh/Internship)
5. **Job Detail Popup Modal**:
   - Jab jobs add hon gi, to user "Details" button par click karke mukammal eligibility criteria aur scale dekh sakta hai.
6. **WhatsApp Alert System**:
   - Job seekers ke liye WhatsApp alerts ka button shamil hai.
7. **Nayi Job Publish Tool (`publish-job.html`)**:
   - Agar aapko code likhna mushkil lage, to aap `publish-job.html` open karke asan form fill karke job ka code generate kar sakte hain.

---

## 🚀 Website Ko Kaise Chalayein? (How to Run)

1. Apne computer par `rozgar_jawan` folder kholiye.
2. `index.html` file par double click karke kisi bhi browser (Google Chrome, Microsoft Edge, Firefox) main open karein.
3. Website mukammal responsive design ke sath open ho jayegi!

---

## 📝 Nayi Job Kaise Publish Karein? (How to Publish Jobs)

Aap do (2) asan tareeqon se nayi job publish kar sakte hain:

### Tareeqa 1: `publish-job.html` Form Ke Zariye (Sab Se Asan)
1. Browser main `publish-job.html` file open karein.
2. Form main job ki details likhein (Title, Idara, Shehar, Category, Scale, Aakhri Tareekh, Apply Link).
3. **"Generate Code"** button dabayein.
4. Jo code box main aye usay copy karein.
5. `js/jobs.js` file khol kar `const jobsData = [` ke andar paste kar dein aur save kar lein.

---

### Tareeqa 2: Seedha `js/jobs.js` Main Add Karein
`js/jobs.js` file ko Notepad ya VS Code main kholen aur `jobsData` array ke andar is format main nayi job ka object shamil kar dein:

```javascript
const jobsData = [
  {
    id: 1,
    title: "Assistant Director (BPS-17)",
    department: "Federal Public Service Commission (FPSC)",
    category: "govt",           // govt, private, it, banking, healthcare, education, remote
    type: "Government",         // Government, Private, Remote, Internship
    city: "Islamabad",          // Karachi, Lahore, Islamabad, etc.
    scale: "BPS-17",
    deadline: "30 Nov 2026",
    education: "Master's Degree (16 Years)",
    experience: "Fresh / 1 Year",
    isUrgent: true,
    applyUrl: "https://www.fpsc.gov.pk",
    description: "Federal Government main asamiyaan khali hain. Pakistan bhar se apply karein."
  }
];
```

Jaise hi aap `jobsData` main job add karenge:
- Empty state khud ba khud hat jayega.
- Job card khoobsurat design ke sath show hoga.
- Search bar aur City / Category filters foran kaam karne lagenge!

---

## ⚙️ WhatsApp Group Link Kaise Badalna Hai?
`index.html` file main `https://chat.whatsapp.com` ko search karein aur uski jagah apne asal WhatsApp group ya channel ka link paste kar dein.

---

**Rozgar Jawan** — *Empowering the Youth of Pakistan 🇵🇰*
