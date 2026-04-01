'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = [
    {
      title: "NovaMailer - Email Marketing Platform",
      description: "Engineered a full-stack email marketing platform with JWT + OTP authentication, optional 2FA, and secure password reset flows for production-grade user onboarding. Implemented bulk email campaign management with CSV-based recipient upload, reusable templates, attachment support, and real-time campaign analytics.",
      tags: ["Python", "FastAPI", "Flask", "Supabase", "TypeScript", "Node.js", "Vercel", "JWT", "bcrypt"],
      category: "Web App",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRTs5cvGdLG1y-f_QLTtuibS34sd4kHq1Y_ie3LIJl_D5p2wZqJfakYsmY18VwZsgQEzw0CmzgLsLkVWEdPQlYFt_zb45UXW6IXxzweFyKZjaWE9xuLVfKb7l6GJHVKgwwQxah3ILGnRj94KYIK6XC2V0sH4YxyqdhPdCfCEizqRr7LTdoB3sgpcZ_4ELMmqLjDilgxjfkCXSDXe82q6cRg2kFWRARr4d0orWX4xJShp_UQ7zTuaqndkF44uGnYcJtJIHT5JEvpVOW"
    },
    {
      title: "Encryption Tool - Secure CLI Vault",
      description: "Designed a CLI-based AES-256 encryption tool for secure file and text encryption, integrated with a password-protected vault and PBKDF2-HMAC key derivation. Built clipboard integration, export/delete operations, and operation history logging ensuring zero plaintext key exposure.",
      tags: ["Python", "AES (Fernet)", "PBKDF2-HMAC", "SHA-256", "Cryptography"],
      category: "Security Tool",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZOjG8SdI6a50hesjYflHc1TManQq-_DhWTlcPDuddM-6LD_nkIH6kkw18wJQuBHUdWl4GNcOOgImS_eQJO504PvPc2eGNczTnVND-6wGvmw9pqN-yen2e-eMlN90dZThi6-vBLYsMrttJwhjxuuYqDlmGGZATShn8GwO65AroUhe7R4i9NYtoBryBYvmV5vITZQbcYjCfmPlVENGYrUc9R9e1QX7n9VZN8UtJOWbE4HQCKQk2_2Zs77MDXo1CK5gzMf1nsY13vz4"
    },
    {
      title: "Shiv Kumar Mehandi Arts",
      description: "Developed and deployed a fully responsive, SEO-optimized business website with a services showcase, gallery, and contact form. Successfully improved client's online customer engagement and visibility at shivkumarmehandiarts.in.",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
      category: "Client Website",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7vG1u8h5sNeisBiGMOCQ7IcZseMhRIoBIpUndG9PjUX2wF_htucizYC3PO4waycG6mLze_g7sayTXpDS5wn7-GEZGbSR6RzaSNlWiYLLNbLKGO546M_kBg5tgcmUf7NO0aRmo-sD50Q4fHQFJBdeW7eTCYQZsRo61dacRHKFXxYP5MZ_zJbyWQa8EsCMT1qeByUFn456gXota_XUOjhHfFO3bDE56laoGQBChN2W4H6kEBDsNAuS4aiSeD2IZAiT2H1dF8L3IoI0W"
    },
    {
      title: "WhatsApp Bill Delivery Automation",
      description: "Developed and automated bill delivery workflows via the Meta WhatsApp Business API using Python at Edubuddy. Implemented dynamic backend logic to generate and dispatch billing messages through WhatsApp templates, validated with Postman for payload accuracy.",
      tags: ["Python", "WhatsApp API", "Automation", "Postman"],
      category: "Automation",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNFHQTOOX7G7X__3F66YddRRC99dQSfNDJmw8Xp9dz262yWuF1tozE2zpGysYcAI93XE3VVZvYLhF0kUJi58ACbohZrtsyGyKkut_khuOyZ0q7QauadY2VDUuEx8IWFxZwGOVVwya69J0CP6h6tXzzq-cwVinHqP5zYLGIo0iCazbJQlo8myDzZeFpYOpYJg46fJjcm268jmAFRvbaJAlexQ51_qi3cCME5h4NVMpgvp3BCv9RCMJphkAD9lbbvvTAHDO0lbk-fus4"
    },
    {
      title: "EduSystem - Educational Management Platform",
      description: "Comprehensive educational management system for streamlining academic operations. Features student enrollment, course management, attendance tracking, and grade reporting with role-based access control for administrators, teachers, and students.",
      tags: ["Python", "Flask", "MySQL", "Bootstrap", "CRUD Operations"],
      category: "Web App",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRTs5cvGdLG1y-f_QLTtuibS34sd4kHq1Y_ie3LIJl_D5p2wZqJfakYsmY18VwZsgQEzw0CmzgLsLkVWEdPQlYFt_zb45UXW6IXxzweFyKZjaWE9xuLVfKb7l6GJHVKgwwQxah3ILGnRj94KYIK6XC2V0sH4YxyqdhPdCfCEizqRr7LTdoB3sgpcZ_4ELMmqLjDilgxjfkCXSDXe82q6cRg2kFWRARr4d0orWX4xJShp_UQ7zTuaqndkF44uGnYcJtJIHT5JEvpVOW"
    },
    {
      title: "Flask Hack Gear 1.0 - Hackathon Management System",
      description: "Flask-based web application for managing Hack Gear hackathon with 50+ participants. Implemented participant registration, RSVP system, QR-based verification for check-ins, team management, and real-time event updates dashboard.",
      tags: ["Python", "Flask", "SQLite", "QR Code", "Event Management"],
      category: "Web App",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7vG1u8h5sNeisBiGMOCQ7IcZseMhRIoBIpUndG9PjUX2wF_htucizYC3PO4waycG6mLze_g7sayTXpDS5wn7-GEZGbSR6RzaSNlWiYLLNbLKGO546M_kBg5tgcmUf7NO0aRmo-sD50Q4fHQFJBdeW7eTCYQZsRo61dacRHKFXxYP5MZ_zJbyWQa8EsCMT1qeByUFn456gXota_XUOjhHfFO3bDE56laoGQBChN2W4H6kEBDsNAuS4aiSeD2IZAiT2H1dF8L3IoI0W"
    },
    {
      title: "YTDown - YouTube Video Downloader",
      description: "CLI-based YouTube video downloader tool built with Python. Supports multiple video quality options, playlist downloads, audio extraction, and progress tracking. Utilizes yt-dlp for reliable video fetching with format selection capabilities.",
      tags: ["Python", "yt-dlp", "CLI", "Automation"],
      category: "Utility Tool",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZOjG8SdI6a50hesjYflHc1TManQq-_DhWTlcPDuddM-6LD_nkIH6kkw18wJQuBHUdWl4GNcOOgImS_eQJO504PvPc2eGNczTnVND-6wGvmw9pqN-yen2e-eMlN90dZThi6-vBLYsMrttJwhjxuuYqDlmGGZATShn8GwO65AroUhe7R4i9NYtoBryBYvmV5vITZQbcYjCfmPlVENGYrUc9R9e1QX7n9VZN8UtJOWbE4HQCKQk2_2Zs77MDXo1CK5gzMf1nsY13vz4"
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-left relative"
      >
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          A showcase of my recent work spanning backend platforms, security tools, automation solutions, and educational systems. From email marketing platforms to production-grade web applications.
        </p>
        <div className="mt-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-secondary">
          <span className="w-12 h-[1px] bg-secondary"></span>
          FILTERED BY EXCELLENCE
        </div>
      </motion.header>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-surface-container-low rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-64 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-slate-950/80 backdrop-blur-md text-secondary text-[10px] font-mono px-2 py-1 rounded border border-white/5">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-body">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-secondary-container/30 text-on-secondary-container font-mono text-[10px] px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all" href="#">
                View Details 
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
