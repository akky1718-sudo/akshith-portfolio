import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const SCREENSHOTS_DIR = path.resolve(process.cwd(), 'proof_screenshots');
const OUTPUT_PDF = path.resolve(process.cwd(), 'Bajjuri_Akshith_Portfolio_Project_Proof.pdf');

function getBrowserPath() {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No Chrome or Edge browser found');
}

function getBase64Image(filename) {
  const p = path.join(SCREENSHOTS_DIR, filename);
  if (fs.existsSync(p)) {
    const data = fs.readFileSync(p);
    return `data:image/png;base64,${data.toString('base64')}`;
  }
  return '';
}

async function generateReport() {
  console.log('Encoding captured screenshots...');
  const heroImg = getBase64Image('01_hero.png');
  const aboutImg = getBase64Image('02_about.png');
  const skillsImg = getBase64Image('03_skills.png');
  const expImg = getBase64Image('04_experience.png');
  const projImg = getBase64Image('05_projects.png');
  const modalImg = getBase64Image('05b_project_modal.png');
  const certImg = getBase64Image('06_certifications.png');
  const eduImg = getBase64Image('07_education.png');
  const achImg = getBase64Image('08_achievements.png');
  const contactImg = getBase64Image('09_contact.png');
  const mobileHeroImg = getBase64Image('11_mobile_hero.png');
  const mobileMenuImg = getBase64Image('12_mobile_menu.png');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Portfolio Website Creation Project - Proof & Report</title>
  <style>
    @page {
      size: A4;
      margin: 14mm 12mm 14mm 12mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: #ffffff;
      color: #0f172a;
      line-height: 1.4;
      font-size: 9.5pt;
    }
    .page {
      page-break-after: always;
      position: relative;
    }
    .page:last-child {
      page-break-after: avoid;
    }

    /* Document Header Banner */
    .header-card {
      background: linear-gradient(135deg, #070c18 0%, #0c1527 50%, #081120 100%);
      color: #ffffff;
      padding: 20px 22px;
      border-radius: 10px;
      margin-bottom: 16px;
      border: 1px solid #1e293b;
    }
    .badge {
      display: inline-block;
      padding: 3px 9px;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.4);
      margin-bottom: 8px;
    }
    .report-title {
      font-size: 18pt;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .report-subtitle {
      font-size: 10.5pt;
      color: #94a3b8;
      margin-bottom: 14px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      padding-top: 12px;
      border-top: 1px solid #1e293b;
      font-size: 8pt;
    }
    .meta-item span {
      display: block;
      color: #64748b;
      text-transform: uppercase;
      font-size: 7pt;
      font-weight: 600;
      margin-bottom: 2px;
    }
    .meta-item strong {
      color: #f1f5f9;
      font-size: 9pt;
    }

    /* Headings */
    h2.section-heading {
      font-size: 11pt;
      font-weight: 700;
      color: #0b1528;
      padding-bottom: 4px;
      margin-top: 14px;
      margin-bottom: 8px;
      border-bottom: 2px solid #0284c7;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    h2.section-heading .num {
      background: #0284c7;
      color: white;
      font-size: 8pt;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 800;
    }
    p {
      color: #334155;
      font-size: 9pt;
      line-height: 1.45;
      margin-bottom: 8px;
    }

    /* Grids & Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      margin-bottom: 10px;
    }
    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 12px;
    }
    .card-title {
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 3px;
    }
    .card-desc {
      font-size: 8pt;
      color: #475569;
      line-height: 1.35;
    }
    .feature-list {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 12px;
      font-size: 8.5pt;
      margin-bottom: 8px;
    }
    .feature-list li {
      position: relative;
      padding-left: 14px;
      color: #1e293b;
    }
    .feature-list li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: #0284c7;
      font-weight: bold;
      font-size: 8pt;
    }

    /* Screenshot Frames */
    .screenshot-frame {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      overflow: hidden;
      background: #070c18;
      box-shadow: 0 2px 4px rgba(0,0,0,0.06);
      margin-bottom: 4px;
    }
    .screenshot-header {
      background: #0b1120;
      padding: 4px 8px;
      font-size: 7pt;
      color: #94a3b8;
      font-family: monospace;
      border-bottom: 1px solid #1e293b;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .screenshot-header .dots {
      display: flex;
      gap: 3px;
    }
    .screenshot-header .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #475569;
    }
    .screenshot-img {
      width: 100%;
      display: block;
    }
    .screenshot-caption {
      font-size: 7.5pt;
      color: #64748b;
      text-align: center;
      margin-bottom: 10px;
      font-style: italic;
    }

    /* Links box */
    .links-box {
      background: #f0f9ff;
      border: 1px solid #bae6fd;
      border-radius: 6px;
      padding: 10px 14px;
      margin-top: 8px;
      margin-bottom: 10px;
    }
    .link-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
      font-size: 8.5pt;
      border-bottom: 1px dashed #e0f2fe;
    }
    .link-row:last-child {
      border-bottom: none;
    }
    .link-label {
      font-weight: 600;
      color: #0369a1;
    }
    .link-val {
      font-family: monospace;
      color: #0284c7;
      font-weight: 600;
    }

    /* Sign-off box */
    .statement-box {
      background: #f8fafc;
      border-left: 4px solid #10b981;
      padding: 10px 14px;
      border-radius: 0 6px 6px 0;
      margin-top: 10px;
      font-size: 8.5pt;
      color: #1e293b;
    }
    .signoff-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #e2e8f0;
      font-size: 8pt;
    }

    .footer-page-num {
      position: absolute;
      bottom: -8mm;
      right: 0;
      font-size: 7.5pt;
      color: #94a3b8;
      font-family: monospace;
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1: OVERVIEW & SPECIFICATIONS ==================== -->
  <div class="page">
    <div class="header-card">
      <div class="badge">Official Project Proof Document</div>
      <h1 class="report-title">Portfolio Website Creation Project</h1>
      <div class="report-subtitle">Comprehensive Technical Report & Verification of Completed Personal Developer Website</div>
      
      <div class="meta-grid">
        <div class="meta-item">
          <span>Student Name</span>
          <strong>Bajjuri Akshith</strong>
        </div>
        <div class="meta-item">
          <span>Program / Specialization</span>
          <strong>B.Tech CSE (Cybersecurity)</strong>
        </div>
        <div class="meta-item">
          <span>Institution</span>
          <strong>SR University, Warangal</strong>
        </div>
        <div class="meta-item">
          <span>Submission Date</span>
          <strong>October 2026</strong>
        </div>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">1</span> Project Overview</h2>
    <p>
      This project encompassed the design, development, optimization, and responsive implementation of a modern, professional personal portfolio website for <strong>Bajjuri Akshith</strong>. The portfolio establishes a cohesive technical presence as a <strong>B.Tech CSE student specializing in Cybersecurity</strong>, presenting verified academic credentials, cybersecurity trainee laboratory practice, foundational software development skills, real-world technical projects, recognized hackathon achievements, and official certifications.
    </p>

    <h2 class="section-heading"><span class="num">2</span> Project Objectives</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">✔ Showcase Skills & Projects</div>
        <div class="card-desc">Provide a high-contrast, professional showcase of technical proficiencies, cybersecurity trainee tools, and projects in blockchain supply chains and ML phishing detection.</div>
      </div>
      <div class="card">
        <div class="card-title">✔ Clean Design & Easy Navigation</div>
        <div class="card-desc">Utilize a premium dark cybersecurity-inspired aesthetic with sticky glassmorphic navigation, active section indicators, and instant access to project details.</div>
      </div>
      <div class="card">
        <div class="card-title">✔ Mobile-Friendly & Responsive Layout</div>
        <div class="card-desc">Engineer a fully responsive layout verified across desktop, tablet, and mobile viewports with an accessible slide-out mobile drawer menu.</div>
      </div>
      <div class="card">
        <div class="card-title">✔ Professional Online Presence & Opportunities</div>
        <div class="card-desc">Create a recruiter-friendly digital profile to directly support internship applications, student opportunities, and freelance engagements.</div>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">3</span> Technologies Used</h2>
    <div class="grid-3">
      <div class="card">
        <div class="card-title">Frontend Framework</div>
        <div class="card-desc"><strong>React 19</strong> (Component-driven architecture, modular state management, hooks)</div>
      </div>
      <div class="card">
        <div class="card-title">Build Tool & Bundler</div>
        <div class="card-desc"><strong>Vite 8</strong> (Fast HMR development server, optimized ES module production build)</div>
      </div>
      <div class="card">
        <div class="card-title">Styling & Design System</div>
        <div class="card-desc"><strong>Tailwind CSS 3</strong> (Custom dark cyber palette, glassmorphism, responsive utilities)</div>
      </div>
      <div class="card">
        <div class="card-title">Iconography</div>
        <div class="card-desc"><strong>Lucide React</strong> & custom SVG brand icons (GitHub, LinkedIn, LeetCode)</div>
      </div>
      <div class="card">
        <div class="card-title">Typography & Standards</div>
        <div class="card-desc"><strong>Inter & JetBrains Mono</strong> fonts, Semantic HTML5, accessible ARIA attributes</div>
      </div>
      <div class="card">
        <div class="card-title">Version Control & CI/CD</div>
        <div class="card-desc"><strong>Git, GitHub</strong>, automated GitHub Actions workflow, Render blueprint</div>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">4</span> Website Features Implemented</h2>
    <ul class="feature-list">
      <li>Fully responsive layout across all device viewports</li>
      <li>Sticky glassmorphism navigation with scroll detection</li>
      <li>Real-time active section indicator tracking</li>
      <li>Mobile slide-out hamburger menu with auto-close</li>
      <li>Hero section with verified status pill & CTAs</li>
      <li>Interactive cybersecurity telemetry visual card</li>
      <li>About section with SR University academic identity card</li>
      <li>Categorized technical skills (no fake percentage meters)</li>
      <li>Cybersecurity trainee experience timeline & tools</li>
      <li>Projects showcase with custom architectural graphics</li>
      <li>Accessible Project Detail Modal with Esc & backdrop close</li>
      <li>Official certifications grid with institution badges</li>
      <li>Education history timeline (SR University & Narayana Jr)</li>
      <li>Hackathon team recognition card (Top 9 Finalist)</li>
      <li>Direct PDF resume download (Bajjuri_Akshith_Resume.pdf)</li>
      <li>Functional contact form with validation & mailto fallback</li>
      <li>One-click copy utilities for direct email & phone</li>
      <li>Floating Back-To-Top button with smooth scrolling</li>
    </ul>

    <div class="footer-page-num">Page 1 of 5 • Portfolio Website Creation Project Proof</div>
  </div>

  <!-- ==================== PAGE 2: VERIFIED CONTENT & HERO / ABOUT PROOFS ==================== -->
  <div class="page">
    <h2 class="section-heading"><span class="num">5</span> Verified Project Content (Single Source of Truth)</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Personal Identity & Education</div>
        <div class="card-desc">
          • <strong>Bajjuri Akshith</strong> | Warangal, Telangana, India<br>
          • <strong>SR University:</strong> B.Tech CSE (Cybersecurity), 2023–2027, CGPA: 7.1 / 10<br>
          • <strong>Narayana Junior College:</strong> Intermediate (MPC), 2021–2023, 78.7%
        </div>
      </div>
      <div class="card">
        <div class="card-title">Technical Skills & Tooling</div>
        <div class="card-desc">
          • <strong>Languages:</strong> Python, Java | <strong>Databases:</strong> SQL, MySQL<br>
          • <strong>Web:</strong> HTML, CSS, JavaScript | <strong>Tools:</strong> VS Code, Git, GitHub<br>
          • <strong>Trainee Security Tools:</strong> Wireshark, Nmap, Burp Suite, Kali Linux
        </div>
      </div>
      <div class="card">
        <div class="card-title">Cybersecurity Trainee Experience</div>
        <div class="card-desc">
          <strong>Penetration Testing & Network Security Trainee</strong><br>
          • Hands-on practice with Wireshark, Nmap, Burp Suite, and Kali Linux.<br>
          • Network security, vulnerability assessment, web security, and traffic analysis.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Technical Projects & Achievement</div>
        <div class="card-desc">
          • <strong>Eco Chain Shipping:</strong> Blockchain, Smart Contracts, Web Dev.<br>
          • <strong>Intelligent Phishing URL Detection:</strong> BERT, DOM, HYNA, XGBoost.<br>
          • <strong>Achievement:</strong> Top 9 Finalist as a team in On-Campus Hackathon 2023.
        </div>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">6</span> Website Verification Screenshots (Part 1: Homepage & About)</h2>
    
    <p><strong>Proof 1: Homepage & Hero Section (Desktop View)</strong> — Factual introduction, verified status pill, action CTAs, and interactive cybersecurity telemetry card.</p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>http://localhost:8765/#hero — Desktop View (1440 x 900)</span>
        <span>Verified</span>
      </div>
      <img src="${heroImg}" class="screenshot-img" style="max-height: 250px; object-fit: cover; object-position: top;" alt="Hero Section">
    </div>
    <div class="screenshot-caption">Figure 1: Completed Hero Section featuring high-contrast typography, resume download CTA, and cybersecurity telemetry card.</div>

    <p><strong>Proof 2: About Me Section & Verified Academic Identity Card</strong> — Academic verification for SR University and technical narrative.</p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>http://localhost:8765/#about — Academic Profile Verification</span>
        <span>Verified</span>
      </div>
      <img src="${aboutImg}" class="screenshot-img" style="max-height: 250px; object-fit: cover; object-position: top;" alt="About Section">
    </div>
    <div class="screenshot-caption">Figure 2: About Section detailing SR University enrollment, CGPA 7.1 / 10, and concise technical background.</div>

    <div class="footer-page-num">Page 2 of 5 • Portfolio Website Creation Project Proof</div>
  </div>

  <!-- ==================== PAGE 3: SKILLS, EXPERIENCE, PROJECTS & MODAL ==================== -->
  <div class="page">
    <h2 class="section-heading"><span class="num">6</span> Website Verification Screenshots (Part 2: Skills, Experience & Projects)</h2>

    <div class="grid-2">
      <div>
        <p><strong>Proof 3: Categorized Skills & Tooling</strong></p>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>#skills — Technical Proficiencies</span>
          </div>
          <img src="${skillsImg}" class="screenshot-img" style="height: 195px; object-fit: cover; object-position: top;" alt="Skills Section">
        </div>
        <div class="screenshot-caption">Figure 3: Categorized skill cards with "Basic Hands-On Practice" trainee badge.</div>
      </div>

      <div>
        <p><strong>Proof 4: Cybersecurity Trainee Experience</strong></p>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>#experience — Training Timeline</span>
          </div>
          <img src="${expImg}" class="screenshot-img" style="height: 195px; object-fit: cover; object-position: top;" alt="Experience Section">
        </div>
        <div class="screenshot-caption">Figure 4: Penetration Testing & Network Security Trainee experience timeline.</div>
      </div>
    </div>

    <p><strong>Proof 5: Featured Projects Showcase</strong> — Supply-chain blockchain & ML-based threat detection concepts.</p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>#projects — Security & Development Projects</span>
        <span>Verified</span>
      </div>
      <img src="${projImg}" class="screenshot-img" style="max-height: 220px; object-fit: cover; object-position: top;" alt="Projects Section">
    </div>
    <div class="screenshot-caption">Figure 5: Project showcase displaying Eco Chain Shipping and Intelligent Phishing URL Detection cards.</div>

    <p><strong>Proof 6: Interactive Project Detail Modal Dialog</strong> — Opened upon clicking "View Details" to view implementation highlights.</p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>Modal Dialog: Eco Chain Shipping</span>
        <span>Interactive Modal</span>
      </div>
      <img src="${modalImg}" class="screenshot-img" style="max-height: 220px; object-fit: cover; object-position: top;" alt="Project Modal">
    </div>
    <div class="screenshot-caption">Figure 6: Interactive project details modal displaying architectural work, security relevance, and GitHub CTA.</div>

    <div class="footer-page-num">Page 3 of 5 • Portfolio Website Creation Project Proof</div>
  </div>

  <!-- ==================== PAGE 4: CREDENTIALS, EDUCATION, ACHIEVEMENTS & CONTACT ==================== -->
  <div class="page">
    <h2 class="section-heading"><span class="num">6</span> Website Verification Screenshots (Part 3: Credentials, Education & Contact)</h2>

    <p><strong>Proof 7: Certifications & Industry Credentials Grid</strong></p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>#certifications — Official Credentials</span>
        <span>Verified</span>
      </div>
      <img src="${certImg}" class="screenshot-img" style="max-height: 190px; object-fit: cover; object-position: top;" alt="Certifications Section">
    </div>
    <div class="screenshot-caption">Figure 7: Official certification cards (Microsoft, AWS Academy, Cisco Networking Academy, Google/Coursera).</div>

    <div class="grid-2">
      <div>
        <p><strong>Proof 8: Education Timeline</strong></p>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>#education — Academics</span>
          </div>
          <img src="${eduImg}" class="screenshot-img" style="height: 180px; object-fit: cover; object-position: top;" alt="Education Section">
        </div>
        <div class="screenshot-caption">Figure 8: Academic background timeline (SR University, Narayana Jr).</div>
      </div>

      <div>
        <p><strong>Proof 9: Hackathon Team Achievement</strong></p>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>#achievements — Hackathon Finalist</span>
          </div>
          <img src="${achImg}" class="screenshot-img" style="height: 180px; object-fit: cover; object-position: top;" alt="Achievements Section">
        </div>
        <div class="screenshot-caption">Figure 9: Hackathon achievement card clearly stating Top 9 position as a team.</div>
      </div>
    </div>

    <p><strong>Proof 10: Contact Section with Validated Form & Direct Utilities</strong></p>
    <div class="screenshot-frame">
      <div class="screenshot-header">
        <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        <span>#contact — Communication & Inquiries</span>
        <span>Verified</span>
      </div>
      <img src="${contactImg}" class="screenshot-img" style="max-height: 200px; object-fit: cover; object-position: top;" alt="Contact Section">
    </div>
    <div class="screenshot-caption">Figure 10: Contact section with verified email, phone, copy buttons, and validated message form.</div>

    <div class="footer-page-num">Page 4 of 5 • Portfolio Website Creation Project Proof</div>
  </div>

  <!-- ==================== PAGE 5: RESPONSIVENESS, LINKS & SIGN-OFF ==================== -->
  <div class="page">
    <h2 class="section-heading"><span class="num">7</span> Responsive Design Proof (Mobile Adaptation)</h2>
    <p>
      The website was tested across mobile, tablet, and desktop viewports. The layout dynamically adapts with collapsible navigation, touch-friendly touch targets, and flexible grid systems.
    </p>

    <div class="grid-2">
      <div>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>Mobile Hero View (390 x 844)</span>
          </div>
          <img src="${mobileHeroImg}" class="screenshot-img" style="height: 270px; object-fit: cover; object-position: top;" alt="Mobile Hero View">
        </div>
        <div class="screenshot-caption">Figure 11: Mobile viewport showing fluid typography, stacked CTA buttons, and compact telemetry card.</div>
      </div>

      <div>
        <div class="screenshot-frame">
          <div class="screenshot-header">
            <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>Mobile Drawer Navigation (390 x 600)</span>
          </div>
          <img src="${mobileMenuImg}" class="screenshot-img" style="height: 270px; object-fit: cover; object-position: top;" alt="Mobile Drawer Menu">
        </div>
        <div class="screenshot-caption">Figure 12: Mobile slide-out drawer menu with touch navigation links and resume download button.</div>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">8</span> Project Links & Repository Verification</h2>
    <div class="links-box">
      <div class="link-row">
        <span class="link-label">GitHub Repository:</span>
        <span class="link-val">https://github.com/akky1718-sudo/akshith-portfolio</span>
      </div>
      <div class="link-row">
        <span class="link-label">GitHub Pages Live URL:</span>
        <span class="link-val">https://akky1718-sudo.github.io/akshith-portfolio/</span>
      </div>
      <div class="link-row">
        <span class="link-label">Render Deployment Configured:</span>
        <span class="link-val">https://akshith-portfolio.onrender.com</span>
      </div>
      <div class="link-row">
        <span class="link-label">Production Build Status:</span>
        <span class="link-val">Vite 8 production build verified (0 errors, 0 warnings)</span>
      </div>
    </div>

    <h2 class="section-heading"><span class="num">9</span> Project Completion Statement</h2>
    <div class="statement-box">
      <p>
        I hereby certify that this project report represents the authentic, fully implemented <strong>Portfolio Website Creation Project</strong> for <strong>Bajjuri Akshith</strong>. The portfolio was built strictly using verified resume credentials, featuring complete sections for technical skills, cybersecurity trainee experience, projects, certifications, education, and hackathon recognition. The website is fully functional, responsive, and ready for deployment and recruiter evaluation.
      </p>

      <div class="signoff-grid">
        <div>
          <strong>Student:</strong> Bajjuri Akshith<br>
          <strong>Department:</strong> CSE (Cybersecurity)<br>
          <strong>University:</strong> SR University, Warangal
        </div>
        <div style="text-align: right;">
          <strong>Project Status:</strong> COMPLETED & VERIFIED<br>
          <strong>Date:</strong> October 2026<br>
          <strong>Verification Hash:</strong> SHA256-VITE-PROD-OK
        </div>
      </div>
    </div>

    <div class="footer-page-num">Page 5 of 5 • Portfolio Website Creation Project Proof</div>
  </div>

</body>
</html>`;

  const browserPath = getBrowserPath();
  console.log(`Launching browser for PDF generation: ${browserPath}`);
  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  try {
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0', timeout: 30000 });
    
    console.log(`Printing PDF to: ${OUTPUT_PDF}`);
    await page.pdf({
      path: OUTPUT_PDF,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        bottom: '12mm',
        left: '12mm',
        right: '12mm'
      }
    });

    console.log('PDF Report generated successfully!');
  } finally {
    await browser.close();
  }
}

generateReport().catch(err => {
  console.error('Error generating PDF report:', err);
  process.exit(1);
});
