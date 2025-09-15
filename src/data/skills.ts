export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
      "UI/UX Design",
      "Responsive Design"
    ]
  },
  {
    name: "Backend & AI/ML",
    skills: [
      "Python",
      "Flask",
      "Flask-Caching",
      "Flask-Limiter",
      "SQLite",
      "Machine Learning",
      "NLP",
      "AI Development",
      "Predictive Models",
      "Automation"
    ]
  },
  {
    name: "Cybersecurity & Cloud",
    skills: [
      "Ethical Hacking",
      "Cybersecurity",
      "Vulnerability Assessment",
      "Azure Cloud",
      "IoT Integration",
      "Security Headers",
      "Rate Limiting",
      "Input Validation",
      "Threat Analysis",
      "Security Automation"
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "CDN",
      "PWA",
      "Service Workers",
      "Linux",
      "VS Code",
      "Discord"
    ]
  }
];

export const getTechnicalSkills = (): string[] => {
  return skills.flatMap(category => category.skills);
};