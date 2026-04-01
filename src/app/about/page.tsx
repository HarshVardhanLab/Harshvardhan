'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

const HeroScene3D = dynamic(() => import('@/components/HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-xl">
      <span className="text-6xl font-headline font-bold text-primary/30">HV</span>
    </div>
  ),
});

export default function About() {
  const timeline = [
    {
      year: "2022 — Foundation",
      title: "B.Tech in Computer Science",
      description: "Started B.Tech in Computer Science Engineering at Vision Institute of Technology, Aligarh. CGPA: 8.26. Coursework in Data Structures, Algorithms, System Design, AI, Cyber Security, DBMS, Web Technology, and IoT.",
      color: "primary"
    },
    {
      year: "2023 — Leadership",
      title: "Hack Gear 1.0 Organizer",
      description: "Spearheaded event planning, team coordination, and problem statement design for the inaugural edition of the college hackathon series. Co-founded NovaCoder Developer Community for technical mentoring and collaborative project building.",
      color: "secondary"
    },
    {
      year: "2024 — Professional Growth",
      title: "Software Engineer Intern",
      description: "Developed and automated bill delivery workflows via Meta WhatsApp Business API at Edubuddy. Implemented dynamic backend logic for billing messages. Built Encryption Tool with AES-256 and PBKDF2-HMAC key derivation. Created Flask-based Hack Gear 1.0 management system with QR verification for 50+ participants.",
      color: "primary"
    },
    {
      year: "2025 — AI/ML Specialization",
      title: "AI & Machine Learning Intern",
      description: "Engineering ML models for fraud detection at Cyberfortech. Designed neural network architectures integrating NLP and computer vision. Built NovaMailer - full-stack email marketing platform with JWT authentication and real-time analytics. Developed EduSystem for educational management and YTDown CLI tool.",
      color: "secondary"
    }
  ];

  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em]">Identity // Protocol</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
              Building <span className="text-primary text-glow">Scalable</span> Backend Systems.
            </h1>
          </div>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-body">
            I am Harsh Vardhan, a Computer Science undergraduate and Python Backend Developer specializing in building REST APIs with FastAPI and Flask. Proficient in AI/ML model development, automation tools, and full-stack project delivery. Co-founder of NovaCoder Developer Community and organizer of Hack Gear hackathons.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-surface-container-high px-4 py-2 flex items-center gap-3 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary text-sm">school</span>
              <span className="font-mono text-xs text-on-surface-variant">CGPA: 8.26</span>
            </div>
            <div className="bg-surface-container-high px-4 py-2 flex items-center gap-3 border-l-2 border-secondary">
              <span className="material-symbols-outlined text-secondary text-sm">code</span>
              <span className="font-mono text-xs text-on-surface-variant">PYTHON | FASTAPI | FLASK</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 obsidian-gradient opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-surface-container-low aspect-square rounded-xl overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Harsh Vardhan"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border border-white/10 rounded-lg">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-mono text-[10px] text-primary mb-1">PROFILE_VERIFIED</p>
                  <p className="font-headline font-bold text-lg leading-tight uppercase">Harsh Vardhan</p>
                </div>
                <span className="material-symbols-outlined text-primary animate-pulse">verified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Grid */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-symbols-outlined text-9xl">auto_awesome_motion</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-6 text-on-surface">The Philosophy</h3>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                In the digital age, efficiency and scalability aren't features—they're the foundation. My approach to software development is rooted in building robust backend systems that power seamless user experiences.
              </p>
              <p>
                I don't just write code; I architect solutions. By combining the power of Python frameworks with AI/ML capabilities, I create systems that are intelligent, scalable, and production-ready.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-[10px] font-mono rounded-sm border border-secondary/20">
                #BACKEND_DEVELOPMENT
              </span>
              <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-[10px] font-mono rounded-sm border border-secondary/20">
                #AI_ML_ENGINEERING
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between border-t border-primary/20"
          >
            <div className="space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
              <h4 className="font-headline text-xl font-bold">API Development</h4>
              <p className="text-sm text-on-surface-variant font-body">
                Consistently building scalable REST APIs with FastAPI and Flask, implementing JWT authentication and secure endpoints.
              </p>
            </div>
            <div className="pt-8 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-mono opacity-60">OPTIMIZATION</span>
                <span className="text-xs font-mono text-primary">99.8%</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full rounded-full">
                <div className="h-full bg-primary w-[99.8%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-32">
        <div className="mb-16 text-center lg:text-left">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.3em]">Evolution // Timeline</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 tracking-tight">The Architectural Path</h2>
        </div>

        <div className="relative space-y-12 before:absolute before:left-[19px] lg:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row items-center lg:justify-between group ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`lg:w-5/12 flex flex-col ${index % 2 === 0 ? 'lg:items-end lg:text-right' : 'lg:items-start'} text-left pr-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ml-12 lg:ml-0`}>
                <span className={`font-mono text-${item.color} text-sm mb-2`}>{item.year}</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface group-hover:text-glow transition-all">
                  {item.title}
                </h3>
                <p className="mt-4 text-on-surface-variant max-w-sm">
                  {item.description}
                </p>
              </div>

              <div className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center z-10 group-hover:border-${item.color} transition-colors`}>
                <div className={`w-2 h-2 rounded-full bg-${item.color} group-hover:shadow-[0_0_12px_#f97316] transition-all`}></div>
              </div>

              <div className="lg:w-5/12 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border-t border-white/5"
          >
            <h4 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">api</span>
              Backend Development
            </h4>
            <p className="text-on-surface-variant text-sm mb-6">
              Building scalable REST APIs with Python frameworks, implementing secure authentication, and optimizing database operations for high-performance applications.
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
              <div className="bg-surface-container p-2 border-l border-primary">FASTAPI</div>
              <div className="bg-surface-container p-2 border-l border-primary">FLASK</div>
              <div className="bg-surface-container p-2 border-l border-primary">JWT_AUTH</div>
              <div className="bg-surface-container p-2 border-l border-primary">REST_API</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border-t border-white/5"
          >
            <h4 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">psychology</span>
              AI & Machine Learning
            </h4>
            <p className="text-on-surface-variant text-sm mb-6">
              Developing ML models for fraud detection, implementing neural networks with NLP and computer vision, and deploying AI solutions in production environments.
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
              <div className="bg-surface-container p-2 border-l border-secondary">TENSORFLOW</div>
              <div className="bg-surface-container p-2 border-l border-secondary">SCIKIT_LEARN</div>
              <div className="bg-surface-container p-2 border-l border-secondary">NLP</div>
              <div className="bg-surface-container p-2 border-l border-secondary">COMPUTER_VISION</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
