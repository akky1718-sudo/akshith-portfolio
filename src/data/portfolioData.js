/**
 * Centralized Portfolio Data Configuration
 * Single source of truth for Bajjuri Akshith's personal portfolio.
 * 
 * To update any social links or details, edit the values in this file.
 */

export const personalData = {
  name: "Bajjuri Akshith",
  shortName: "Akshith",
  initials: "BA",
  role: "B.Tech CSE (Cybersecurity) Student",
  status: "Undergrad Student & Cybersecurity Trainee",
  location: "Warangal, Telangana, India",
  email: "bajjuriakshith2006@gmail.com",
  phone: "+91 8247801903",
  resumePath: "/Bajjuri_Akshith_Resume.pdf",
  resumeFileName: "Bajjuri_Akshith_Resume.pdf",
  heroBio: "Cybersecurity-focused CSE student with hands-on learning experience in network security, penetration testing tools, web technologies, programming, and machine learning-based security projects.",
  aboutBio: [
    "I am a Computer Science & Engineering undergraduate specializing in Cybersecurity at SR University, Warangal (2023 – 2027). My academic and technical journey centers on understanding core system vulnerabilities, secure network infrastructures, and practical cybersecurity methodologies.",
    "Through hands-on trainee experience, I have developed foundational familiarity with essential industry tools including Wireshark, Nmap, Burp Suite, and Kali Linux. I focus on learning network traffic analysis, vulnerability assessment workflows, and web application security fundamentals.",
    "Beyond foundational network security, I apply my programming and development skills to security-oriented projects—ranging from tamper-resistant blockchain supply chain management to machine learning-assisted phishing URL detection using BERT and XGBoost."
  ],
  identityCard: {
    degree: "B.Tech in CSE (Cybersecurity)",
    university: "SR University",
    location: "Warangal, India",
    period: "2023 – 2027",
    cgpa: "7.1 / 10",
  },
  // Social links - Replace placeholders with actual URLs when available
  socials: {
    github: {
      url: "https://github.com/placeholder-akshith", // REPLACE WITH YOUR ACTUAL GITHUB URL
      label: "GitHub",
      isPlaceholder: true,
      username: "github.com/akshith",
    },
    linkedin: {
      url: "https://linkedin.com/in/placeholder-akshith", // REPLACE WITH YOUR ACTUAL LINKEDIN URL
      label: "LinkedIn",
      isPlaceholder: true,
      username: "linkedin.com/in/akshith",
    },
    leetcode: {
      url: "https://leetcode.com/u/placeholder-akshith", // REPLACE WITH YOUR ACTUAL LEETCODE URL
      label: "LeetCode",
      isPlaceholder: true,
      username: "leetcode.com/akshith",
    },
    email: {
      url: "mailto:bajjuriakshith2006@gmail.com",
      label: "Email",
      isPlaceholder: false,
      value: "bajjuriakshith2006@gmail.com",
    },
    phone: {
      url: "tel:+918247801903",
      label: "Phone",
      isPlaceholder: false,
      value: "+91 8247801903",
    }
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core programming languages used for problem solving, automation, and project development.",
    skills: [
      { name: "Python", level: "Core Language", tag: "Development & Scripting" },
      { name: "Java", level: "Core Language", tag: "Object-Oriented Programming" }
    ]
  },
  {
    category: "Web Technologies",
    description: "Frontend building blocks utilized for interactive and responsive user interfaces.",
    skills: [
      { name: "HTML", level: "Markup", tag: "Structure & Semantics" },
      { name: "CSS", level: "Styling", tag: "Layouts & Responsive Design" },
      { name: "JavaScript", level: "Scripting", tag: "Dynamic Interactions" }
    ]
  },
  {
    category: "Databases",
    description: "Relational database querying, schema structuring, and data management.",
    skills: [
      { name: "SQL", level: "Query Language", tag: "Relational Queries" },
      { name: "MySQL", level: "RDBMS", tag: "Database Management" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Developer tooling, source control workflows, and code environments.",
    skills: [
      { name: "VS Code", level: "IDE", tag: "Development Environment" },
      { name: "Git", level: "Version Control", tag: "Branching & Tracking" },
      { name: "GitHub", level: "Repository Hosting", tag: "Collaboration & Repos" }
    ]
  },
  {
    category: "Cybersecurity Tools (Trainee Hands-On Exposure)",
    description: "Tools practiced during penetration testing and network security trainee learning.",
    badge: "Basic Hands-On Practice",
    skills: [
      { name: "Wireshark", level: "Basic Hands-On", tag: "Packet & Traffic Analysis" },
      { name: "Nmap", level: "Basic Hands-On", tag: "Network Scanning & Discovery" },
      { name: "Burp Suite", level: "Basic Hands-On", tag: "Web Vulnerability Testing" },
      { name: "Kali Linux", level: "Basic Hands-On", tag: "Security Testing OS" }
    ]
  }
];

export const experienceData = [
  {
    role: "Penetration Testing & Network Security Trainee",
    type: "Trainee / Learning Experience",
    period: "Hands-on Practice & Training",
    summary: "Practical training curriculum focused on cybersecurity fundamentals, network inspection, vulnerability assessment methods, and essential security testing toolkits.",
    points: [
      "Gained basic hands-on experience with Wireshark, Nmap, Burp Suite, and Kali Linux for cybersecurity learning and practice.",
      "Learned basic concepts of network security, vulnerability assessment, and web application security.",
      "Practiced analyzing network traffic and identifying common security issues using basic cybersecurity tools."
    ],
    tools: ["Wireshark", "Nmap", "Burp Suite", "Kali Linux"],
    keyCompetencies: [
      "Network Security Fundamentals",
      "Vulnerability Assessment",
      "Web Application Security",
      "Network Traffic Analysis"
    ]
  }
];

export const projectsData = [
  {
    id: "eco-chain-shipping",
    title: "Eco Chain Shipping",
    tagline: "Blockchain-based shipping management system for secure and transparent logistics.",
    technologies: ["Blockchain", "Smart Contracts", "Web Development"],
    category: "Blockchain & Supply Chain Security",
    iconName: "Link2",
    description: "Designed and developed a blockchain-based shipping management system to provide secure, transparent, and tamper-resistant shipment tracking across different stages of the supply chain.",
    bullets: [
      "Designed and developed a blockchain-based shipping management system to provide secure, transparent, and tamper-resistant shipment tracking.",
      "Implemented blockchain technology and smart contracts to improve data integrity, transaction security, and transparency throughout the shipping process.",
      "Developed a user-friendly system for tracking shipments and managing shipping information efficiently across different stages of the supply chain."
    ],
    securityRelevance: "Leverages decentralized ledger immutability and cryptographically validated smart contracts to mitigate supply chain fraud, prevent unauthorized cargo record modification, and ensure authentic milestone tracking.",
    keyHighlights: [
      "Tamper-resistant ledger for milestone status updates",
      "Smart contract enforcement for transaction data integrity",
      "Clean user interface for shipment lifecycle visibility"
    ],
    githubUrl: null // Set to actual GitHub repository URL when available
  },
  {
    id: "intelligent-phishing-url-detection",
    title: "Intelligent Phishing URL Detection",
    tagline: "Hybrid machine learning framework for proactive detection of malicious URLs.",
    technologies: ["BERT", "DOM", "HYNA Optimization", "XGBoost", "Machine Learning", "Cybersecurity"],
    category: "AI / ML Threat Detection",
    iconName: "ShieldAlert",
    description: "Designed and developed a hybrid framework for detecting phishing URLs using BERT, DOM-based features, and machine learning techniques with HYNA optimization and XGBoost.",
    bullets: [
      "Designed and developed a hybrid framework for detecting phishing URLs using BERT, DOM-based features, and machine learning techniques.",
      "Implemented HYNA optimization and XGBoost to improve phishing URL classification and enhance detection performance.",
      "Analyzed URL and web page characteristics to identify potential phishing threats and support intelligent cybersecurity solutions."
    ],
    securityRelevance: "Defends against social engineering and credential-stealing attacks by identifying deceptive lexical patterns in URLs and underlying DOM structural anomalies before users can be compromised.",
    keyHighlights: [
      "Combined natural language representations (BERT) with structural DOM features",
      "HYNA-optimized hyperparameter tuning for XGBoost classifier",
      "Feature analysis designed for robust identification of deceptive web addresses"
    ],
    githubUrl: null // Set to actual GitHub repository URL when available
  }
];

export const certificationsData = [
  {
    id: "azure-ai",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 2025",
    category: "Artificial Intelligence & Cloud",
    iconBadge: "MS",
    accentColor: "blue"
  },
  {
    id: "cisco-cyber",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "December 2024",
    category: "Security Fundamentals",
    iconBadge: "Cisco",
    accentColor: "emerald"
  },
  {
    id: "aws-sec-builder",
    title: "Cloud Security Builder",
    issuer: "AWS Academy",
    date: "November 2025",
    category: "Cloud Security",
    iconBadge: "AWS",
    accentColor: "amber"
  },
  {
    id: "aws-foundations",
    title: "Cloud Foundations Training",
    issuer: "AWS Academy",
    date: "November 2025",
    category: "Cloud Infrastructure",
    iconBadge: "AWS",
    accentColor: "amber"
  },
  {
    id: "google-cyber",
    title: "Google Cybersecurity",
    issuer: "Coursera",
    date: "August 2026",
    category: "Professional Security Training",
    iconBadge: "Google",
    accentColor: "cyan"
  }
];

export const educationData = [
  {
    institution: "SR University",
    location: "Warangal, India",
    degree: "B.Tech in CSE (Cybersecurity)",
    period: "2023 – 2027",
    scoreType: "CGPA",
    score: "7.1 / 10",
    description: "Undergraduate degree focusing on core Computer Science and Engineering principles integrated with specialized Cybersecurity coursework, network security, operating systems, algorithms, and secure software development."
  },
  {
    institution: "Narayana Junior College",
    location: "Hyderabad, India",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    scoreType: "Percentage",
    score: "78.7%",
    description: "Higher secondary education concentrating on Mathematics, Physics, and Chemistry (MPC), building analytical thinking and problem-solving fundamentals."
  }
];

export const achievementsData = [
  {
    title: "Top 9 Position (As a Team)",
    event: "On-Campus Hackathon 2023",
    track: "Python Programming",
    date: "November 2023",
    description: "Secured a Top 9 position as a collaborative student team in an on-campus competitive hackathon, developing solutions focused on Python programming."
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
