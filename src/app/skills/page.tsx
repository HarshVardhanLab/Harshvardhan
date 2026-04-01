'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Skills() {
  const frontendSkills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX Design"];
  const backendSkills = ["Python", "FastAPI", "Flask", "REST APIs", "JWT", "Node.js", "SMTP"];
  const aiSkills = ["Machine Learning", "NLP", "Computer Vision", "TensorFlow", "Scikit-learn"];
  const databaseSkills = ["MySQL", "SQLite", "Supabase"];
  const securitySkills = ["AES Encryption", "PBKDF2-HMAC", "Cryptography", "Security Audits", "Cybersecurity Tools"];
  const tools = [
    { name: "Git / GitHub", icon: "account_tree" },
    { name: "Docker", icon: "cloud_upload" },
    { name: "Jenkins", icon: "settings_input_component" },
    { name: "Linux", icon: "terminal" },
    { name: "VS Code", icon: "code" },
    { name: "Postman", icon: "api" },
    { name: "GCP", icon: "cloud" },
    { name: "Android Studio", icon: "phone_android" }
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-secondary text-xs tracking-widest uppercase">Process_Module_v2.0</span>
          <div className="h-px flex-grow bg-gradient-to-r from-secondary/30 to-transparent"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-6">
          Skills & <span className="text-primary italic">Technologies</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed">
          The tools and technologies I use to architect secure, high-performance digital ecosystems. Merging visual excellence with cryptographic integrity.
        </p>
      </motion.header>

      {/* 3D Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Frontend Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl relative overflow-hidden group border border-white/5"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">fluid_med</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Frontend Development</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-secondary-container/20 text-on-secondary-container border border-white/5 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:border-primary/40"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Cybersecurity Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl border border-secondary/20 shadow-[0_0_30px_rgba(54,38,206,0.05)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Security & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {securitySkills.map((skill, i) => (
                <span key={i} className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-red-500/10 text-red-400 border border-red-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-surface-container-highest p-4 rounded-sm border-l-2 border-secondary font-mono text-[10px] text-on-surface-variant">
            <div className="flex justify-between items-center mb-2">
              <span>&gt; STATUS_REPORT</span>
              <span className="text-green-400">SECURE</span>
            </div>
            <p className="opacity-70 leading-relaxed italic">
              Implementing rate limiting, security headers, and input validation protocols for zero-trust environments.
            </p>
          </div>
        </motion.div>

        {/* Backend & AI Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl border border-white/5 group"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-tertiary text-3xl">memory</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Backend & APIs</h3>
          </div>
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, i) => (
                <span key={i} className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-surface-container-high text-on-surface-variant">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI/ML Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl border border-white/5 group"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-tertiary text-3xl">psychology</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">AI & Machine Learning</h3>
          </div>
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">ML Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {aiSkills.map((skill, i) => (
                <span key={i} className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-tertiary/10 text-tertiary border border-tertiary/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Database Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl border border-white/5"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">storage</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {databaseSkills.map((skill, i) => (
              <span key={i} className="font-mono text-[11px] px-3 py-1.5 rounded-sm bg-surface-container-high text-on-surface-variant">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-gradient-to-br from-surface-container-low to-surface-container p-8 rounded-xl border border-white/5 relative"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">construction</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Tools & Ecosystem</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-surface-container-lowest rounded border border-white/5">
                <span className="material-symbols-outlined text-xs">{tool.icon}</span>
                <span className="font-mono text-[11px]">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-surface flex items-center justify-center text-[10px] text-on-primary font-bold">HV</div>
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-surface flex items-center justify-center text-[10px] text-on-secondary font-bold">OS</div>
            </div>
            <span className="font-mono text-[10px] text-slate-500 uppercase">System_Integrated: 100%</span>
          </div>
        </motion.div>
      </section>

      {/* Secondary Skills */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 bg-surface-container-lowest/50 p-12 rounded-xl border border-white/5"
      >
        <h2 className="text-3xl font-headline font-bold mb-10 text-on-surface">Advanced Implementation Knowledge</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-primary text-[10px] uppercase font-bold tracking-tighter mb-4">Architecture</h5>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              <li>Microservices</li>
              <li>RESTful APIs</li>
              <li>Event-Driven Design</li>
              <li>Scalability Patterns</li>
            </ul>
          </div>
          <div>
            <h5 className="text-secondary text-[10px] uppercase font-bold tracking-tighter mb-4">Optimization</h5>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              <li>Flask-Caching</li>
              <li>Asset Compression</li>
              <li>Core Web Vitals</li>
              <li>Edge Computing</li>
            </ul>
          </div>
          <div>
            <h5 className="text-tertiary text-[10px] uppercase font-bold tracking-tighter mb-4">Protection</h5>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              <li>Flask-Limiter</li>
              <li>XSS/CSRF Prevention</li>
              <li>OAuth2 / JWT</li>
              <li>Security Auditing</li>
            </ul>
          </div>
          <div>
            <h5 className="text-on-surface-variant text-[10px] uppercase font-bold tracking-tighter mb-4">Automation</h5>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              <li>Python Scripts</li>
              <li>CI/CD Pipelines</li>
              <li>Bot Development</li>
              <li>Web Scraping</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
