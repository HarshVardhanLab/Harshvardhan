'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="max-w-7xl mx-auto pt-32 pb-24 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content: Header & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <div className="font-mono text-secondary text-sm font-bold tracking-[0.2em] mb-4 uppercase">System.Communication</div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-on-surface mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">Work Together?</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              I'm always excited to work on new projects and collaborate with amazing people. Let's build something great together!
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Contact Cards */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-high border border-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Protocol.Email</div>
                <div className="text-on-surface font-headline font-bold">harshvardhan02102002@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-high border border-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">hub</span>
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Protocol.GitHub</div>
                <div className="text-on-surface font-headline font-bold">github.com/HarshVardhanLab</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-high border border-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">phone</span>
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Protocol.Phone</div>
                <div className="text-on-surface font-headline font-bold">+91 9528693084</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button className="font-headline text-sm font-bold flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
              <span>VIEW MY WORK</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </motion.div>

        {/* Right Content: Glassmorphic Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Subtle light leak */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-1">Identity.Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/50 text-on-surface placeholder:text-slate-600 font-body"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-1">Identity.Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/50 text-on-surface placeholder:text-slate-600 font-body"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-1">Payload.Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/50 text-on-surface placeholder:text-slate-600 font-body"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-1">Payload.Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/50 text-on-surface placeholder:text-slate-600 font-body resize-none"
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-black py-5 rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 transform active:scale-95 group"
              >
                GET IN TOUCH
                <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>

          {/* Footer-style Technical Stats */}
          <div className="mt-8 flex flex-wrap gap-4 justify-end">
            <div className="bg-surface-container-low px-4 py-2 rounded border border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="font-mono text-[10px] text-slate-400">STATUS: AVAILABLE_FOR_HIRE</span>
            </div>
            <div className="bg-surface-container-low px-4 py-2 rounded border border-white/5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
              <span className="font-mono text-[10px] text-slate-400">TIMEZONE: GMT+5:30</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
