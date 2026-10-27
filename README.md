# Bajjuri Akshith — Personal Portfolio Website

A modern, professional, high-performance developer portfolio website designed for **Bajjuri Akshith**, B.Tech in CSE (Cybersecurity) student at SR University, Warangal.

The website presents a cohesive technical identity: **"CSE Student + Cybersecurity Learner + Developer"**, strictly grounded in verified academic credentials, trainee security experience, and core software engineering projects.

---

## 🚀 Live Features & Highlights

- **Dark Cybersecurity Aesthetic:** Deep navy canvas (`#070c18`), cyan and emerald accents, high-contrast typography, and subtle glassmorphic styling without unnecessary neon clutter.
- **Sticky Dynamic Navigation:** Desktop navigation with real-time active section tracking, mobile slide-out drawer, accessible ARIA states, and smooth jump scrolling.
- **Hero Showcase:** High-impact introduction, verified academic tags, resume download CTA, and an interactive abstract cyber security telemetry card.
- **About Me & Academic Identity Card:** Detailed overview of education at SR University and Narayana Junior College, along with verified CGPA (7.1 / 10).
- **Categorized Technical Skills:** Organized by Programming Languages, Databases, Web Technologies, Developer Tools, and Trainee Cybersecurity Tools (with explicit trainee-level badges and no fake percentage bars).
- **Practical Experience Timeline:** Highlight of Penetration Testing & Network Security Trainee learning with tools (Wireshark, Nmap, Burp Suite, Kali Linux) and domains (Network Security, Vulnerability Assessment, Web App Security, Traffic Analysis).
- **Interactive Project Showcase with Modal:**
  - **Eco Chain Shipping:** Blockchain-based shipping management system with smart contracts.
  - **Intelligent Phishing URL Detection:** Hybrid BERT + DOM + HYNA Optimization + XGBoost threat classification.
  - Accessible modal dialog for detailed architecture and cybersecurity relevance.
- **Certifications & Badges:** Official credentials from Microsoft (Azure AI Fundamentals), AWS Academy (Cloud Security Builder & Cloud Foundations), Cisco Networking Academy (Cybersecurity Essentials), and Coursera (Google Cybersecurity).
- **Hackathon Achievement Card:** Top 9 team finalist recognition from On-Campus Hackathon 2023 (Python Programming).
- **Functional Contact Section:** Contact information, one-click copy utilities, configurable social profiles (LinkedIn, GitHub, LeetCode), and contact form with client-side validation and mailto prefilled fallback.
- **Direct Resume Download:** Includes the verified resume PDF (`Bajjuri_Akshith_Resume.pdf`) ready for instant viewing and downloading.
- **Accessibility & Performance:** Semantic HTML5, accessible focus rings, keyboard navigability, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React & Handcrafted Brand SVG Icons
- **Typography:** Inter & JetBrains Mono (Google Fonts)
- **Linter:** Oxlint (0 errors, 0 warnings)

---

## 📁 Project Architecture

```
port/
├── public/
│   ├── Bajjuri_Akshith_Resume.pdf  # Resume PDF file
│   └── shield-icon.svg             # Cybersecurity favicon
├── src/
│   ├── assets/                     # Static media
│   ├── components/
│   │   ├── About.jsx               # About Me & Identity Card
│   │   ├── Achievements.jsx        # Hackathon Team Achievement
│   │   ├── BackToTop.jsx           # Floating scroll-to-top button
│   │   ├── Certifications.jsx      # Credentials grid & verification
│   │   ├── Contact.jsx             # Contact cards & validated form
│   │   ├── Education.jsx           # Education timeline & verified marks
│   │   ├── Experience.jsx          # Trainee penetration testing timeline
│   │   ├── Footer.jsx              # Footer links & copyright notice
│   │   ├── Hero.jsx                # Landing hero & cyber telemetry card
│   │   ├── Icons.jsx               # GitHub, LinkedIn, LeetCode SVG icons
│   │   ├── Navbar.jsx              # Sticky header & responsive mobile drawer
│   │   ├── ProjectModal.jsx        # Accessible project detail dialog
│   │   └── Projects.jsx            # Project showcase with visual concepts
│   │   └── Skills.jsx              # Categorized skills & tool cards
│   ├── data/
│   │   └── portfolioData.js        # Centralized single source of truth config
│   ├── App.jsx                     # Application root with active section tracker
│   ├── index.css                   # Tailwind directives & cyber utility classes
│   └── main.jsx                    # React DOM entrypoint
├── index.html                      # HTML entry with SEO metadata & fonts
├── tailwind.config.js              # Custom cyber palette & shadow configurations
└── vite.config.js                  # Vite configuration
```

---

## 💻 How to Run Locally

### Prerequisites
Make sure **Node.js** (v18 or higher) and **npm** are installed on your machine.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The compiled, minified production assets will be generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ How to Update Your Information & Links

All personal details, skills, projects, certifications, education, and external URLs are stored in one centralized file:
📂 **`src/data/portfolioData.js`**

### Updating Social Links:
Open `src/data/portfolioData.js` and edit the `socials` object:
```javascript
socials: {
  github: {
    url: "https://github.com/your-username", // <-- Replace with your real URL
    label: "GitHub",
    isPlaceholder: false,
    username: "github.com/your-username",
  },
  linkedin: {
    url: "https://linkedin.com/in/your-username", // <-- Replace with your real URL
    label: "LinkedIn",
    isPlaceholder: false,
    username: "linkedin.com/in/your-username",
  },
  leetcode: {
    url: "https://leetcode.com/u/your-username", // <-- Replace with your real URL
    label: "LeetCode",
    isPlaceholder: false,
    username: "leetcode.com/your-username",
  },
  // ...
}
```

### Updating Project Repositories:
If you want to attach a public repository link to either project:
```javascript
// In src/data/portfolioData.js -> projectsData:
githubUrl: "https://github.com/your-username/eco-chain-shipping"
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this project repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into Netlify Drop, or connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **"Deploy site"**.

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.js`, set `base: '/<repo-name>/'`.
3. In `package.json`, add `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.
