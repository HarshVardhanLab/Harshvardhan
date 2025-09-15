export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: string;
  featured: boolean;
  role: string;
  date: string;
  keyFeatures: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "shiv-kumar-mehandi-arts",
    title: "Shiv Kumar Mehandi Arts",
    description: "A portfolio website for a renowned Mehandi artist team based in Delhi. Built to showcase traditional and modern henna art, customer reviews, and booking services.",
    image: "/images/blog/shivpng.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    live: "https://www.shivkumarmehandiarts.in",
    category: "UI/UX",
    featured: true,
    role: "Full Stack Developer & UI/UX Designer",
    date: "2024-08",
    keyFeatures: [
      "Traditional and modern henna art showcase",
      "Customer reviews and testimonials",
      "Booking and appointment system",
      "Mobile-responsive design",
      "Multilingual support (Hindi/English)"
    ],
    gallery: [
      "/images/blog/shivpng.png"
    ]
  },
  {
    slug: "hack-gear-1-0",
    title: "Hack Gear 1.0",
    description: "Official website for Aligarh's first tech hackathon at Vision Institute of Technology. Served as the central hub for participants, mentors, and organizers with event information, timelines, rules, and registration support.",
    image: "/images/blog/hackgear.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Design"],
    github: "https://github.com/HarshVardhanLab/hack-gear-1.o",
    live: "https://hack-gear-1-o.vercel.app",
    category: "Web Design",
    featured: true,
    role: "Lead Organizer & Web Developer",
    date: "2024-05",
    keyFeatures: [
      "Event information and timeline display",
      "Registration and participation management",
      "Mentor and organizer coordination",
      "Domain-specific hackathon tracks",
      "Real-time countdown and updates"
    ],
    gallery: [
      "/images/blog/hackgear.png"
    ]
  },
  {
    slug: "mail-notifier-promails",
    title: "Mail Notifier (ProMails)",
    description: "A lightweight, Flask-powered web application designed to streamline event communication. Allows organizers to upload participant data (CSV), generate personalized QR codes, and send automated confirmation or shortlisting emails.",
    image: "/images/blog/Mail-Notifier.png",
    technologies: ["Python", "Flask", "Flask-Caching", "Flask-Limiter", "SQLite"],
    github: "https://github.com/HarshVardhanLab/ProMails",
    category: "Web App",
    featured: true,
    role: "Full Stack Developer",
    date: "2024-03",
    keyFeatures: [
      "CSV data upload and processing",
      "Personalized QR code generation",
      "Automated email notifications",
      "Event communication management",
      "Rate limiting and security features"
    ],
    gallery: [
      "/images/blog/Mail-Notifier.png",
      "/images/blog/Email_notifier.png"
    ]
  },
  {
    slug: "youtube-downloader",
    title: "YouTube Downloader",
    description: "A Python-based video downloader application using yt-dlp with format, quality, and playlist support. Features a clean web interface for easy video downloading.",
    image: "/images/blog/Ytdown.png",
    technologies: ["Python", "yt-dlp", "Flask", "JavaScript"],
    github: "https://github.com/HarshVardhanLab/YouTube-Downloader",
    live: "https://ytdown-ecru.vercel.app",
    category: "Python Tool",
    featured: true,
    role: "Backend Developer",
    date: "2024-01",
    keyFeatures: [
      "Multiple format and quality options",
      "Playlist download support",
      "Clean and intuitive web interface",
      "Fast and reliable downloads",
      "Cross-platform compatibility"
    ],
    gallery: [
      "/images/blog/Ytdown.png"
    ]
  },
  {
    slug: "ai-os",
    title: "AI-Powered OS",
    description: "A Linux-based operating system powered by an integrated AI assistant. Features voice control, intelligent task automation, and NLP-based command execution designed for smarter, hands-free computing.",
    image: "/images/blog/Project.png",
    technologies: ["Python", "Linux", "AI/ML", "NLP", "Voice Recognition"],
    github: "https://github.com/HarshVardhanLab/ai-os",
    category: "AI/ML",
    featured: false,
    role: "Lead Developer",
    date: "2024-06",
    keyFeatures: [
      "Voice-controlled interface",
      "Intelligent task automation",
      "NLP-based command execution",
      "Neural network integration",
      "Security modules"
    ],
    gallery: [
      "/images/blog/Project.png"
    ]
  },
  {
    slug: "mail-automation",
    title: "Mail Automation System",
    description: "An automated email management system built with Python and Flask for handling bulk communications, event notifications, and participant management.",
    image: "/images/blog/Project.png",
    technologies: ["Python", "Flask", "SMTP", "Email APIs"],
    github: "https://github.com/HarshVardhanLab/MailAutomation",
    category: "Automation",
    featured: false,
    role: "Backend Developer",
    date: "2023-12",
    keyFeatures: [
      "Bulk email management",
      "Automated notifications",
      "Participant data handling",
      "Template-based emails",
      "Delivery tracking"
    ],
    gallery: [
      "/images/blog/Project.png"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};

export const getProjectTechnologies = (): string[] => {
  const allTech = projects.flatMap(project => project.technologies);
  return [...new Set(allTech)];
};