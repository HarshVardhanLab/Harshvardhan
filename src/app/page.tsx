'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
      <span className="text-6xl font-headline font-bold text-primary/30">Loading...</span>
    </div>
  ),
});

export default function Home() {
  const projects = [
    {
      title: "NovaMailer",
      description: "Full-stack email marketing platform with JWT + OTP authentication, optional 2FA, bulk email campaign management with CSV upload, reusable templates, and real-time analytics.",
      tags: ["Python", "FastAPI", "Flask", "Supabase", "TypeScript", "JWT"],
      category: "Web App",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRTs5cvGdLG1y-f_QLTtuibS34sd4kHq1Y_ie3LIJl_D5p2wZqJfakYsmY18VwZsgQEzw0CmzgLsLkVWEdPQlYFt_zb45UXW6IXxzweFyKZjaWE9xuLVfKb7l6GJHVKgwwQxah3ILGnRj94KYIK6XC2V0sH4YxyqdhPdCfCEizqRr7LTdoB3sgpcZ_4ELMmqLjDilgxjfkCXSDXe82q6cRg2kFWRARr4d0orWX4xJShp_UQ7zTuaqndkF44uGnYcJtJIHT5JEvpVOW"
    },
    {
      title: "Encryption Tool",
      description: "CLI-based AES-256 encryption tool for secure file and text encryption with password-protected vault, PBKDF2-HMAC key derivation, and clipboard integration.",
      tags: ["Python", "AES", "Cryptography", "Security"],
      category: "Security Tool",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZOjG8SdI6a50hesjYflHc1TManQq-_DhWTlcPDuddM-6LD_nkIH6kkw18wJQuBHUdWl4GNcOOgImS_eQJO504PvPc2eGNczTnVND-6wGvmw9pqN-yen2e-eMlN90dZThi6-vBLYsMrttJwhjxuuYqDlmGGZATShn8GwO65AroUhe7R4i9NYtoBryBYvmV5vITZQbcYjCfmPlVENGYrUc9R9e1QX7n9VZN8UtJOWbE4HQCKQk2_2Zs77MDXo1CK5gzMf1nsY13vz4"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full md:rounded-sm border border-outline-variant/15">
              <span className="font-mono text-[9px] md:text-[10px] text-primary uppercase tracking-[0.2em]">System Status: Operational</span>
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-on-background">
              Harsh Vardhan: <span className="text-primary text-glow block sm:inline">Python Backend Developer</span> & Ethical Hacker
            </h1>
            
            <p className="font-body text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Motivated Computer Science undergraduate specializing in building REST APIs with FastAPI and Flask, developing AI/ML models, and creating automation solutions. Co-founder of NovaCoder and organizer of Hack Gear hackathons. Portfolio includes NovaMailer (email marketing platform), EduSystem (educational management), Flask Hack Gear 1.0 (event management with QR verification), and various automation tools.
              <span className="block mt-3 md:mt-4 text-slate-400 italic border-l-2 border-primary/30 pl-3 md:pl-4 font-mono text-sm md:text-base">
                "Building scalable, production-ready software solutions with a strong drive for innovation."
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.25)] flex items-center justify-center gap-3 group"
              >
                View Projects
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </motion.button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border border-outline-variant/20 text-on-surface hover:bg-white/5 transition-all font-bold rounded-lg">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative group"
          >
            <div className="relative w-full aspect-square glass-card rounded-xl border border-white/5 p-8 overflow-hidden transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
              <div className="absolute inset-0 card-light-leak"></div>
              <img 
                src="/profile.jpg" 
                alt="Harsh Vardhan"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Floating Tech Tags */}
              <div className="absolute top-10 right-10 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded border border-white/10 font-mono text-xs text-secondary-fixed">
                python --version
              </div>
              <div className="absolute bottom-20 left-10 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded border border-white/10 font-mono text-xs text-primary">
                npm start
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div className="space-y-3 md:space-y-4">
              <span className="font-mono text-primary text-xs md:text-sm uppercase tracking-widest">Selected Works</span>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            </div>
            <a className="text-primary flex items-center gap-2 font-bold hover:underline underline-offset-8 transition-all text-sm md:text-base" href="/projects">
              VIEW ALL PROJECTS
              <span className="material-symbols-outlined text-sm md:text-base">open_in_new</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative glass-card rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 card-light-leak opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="aspect-video overflow-hidden">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-headline text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="material-symbols-outlined text-slate-500 flex-shrink-0">design_services</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-sm font-mono text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-surface-container-lowest to-surface">
        <div className="max-w-5xl mx-auto glass-card rounded-xl md:rounded-2xl border border-white/5 p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 md:p-4 font-mono text-[8px] md:text-[10px] text-slate-600 opacity-50">HV_OS_CORE_V1</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3 md:space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h4 className="font-headline font-bold text-lg md:text-xl">High Performance</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Optimized architecture ensuring millisecond-latency responses and smooth interactions across all devices.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <h4 className="font-headline font-bold text-lg md:text-xl">Secure by Default</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Integrated ethical hacking mindset into the development lifecycle, preventing vulnerabilities before deployment.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h4 className="font-headline font-bold text-lg md:text-xl">AI Integration</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Leveraging large language models and neural networks to create intuitive, smart user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
