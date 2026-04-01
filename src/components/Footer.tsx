export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-gradient-to-b from-slate-950 to-surface-container-lowest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold text-on-surface tracking-tighter">
                HARSH VARDHAN
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  System Online
                </span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Building scalable backend systems and AI-powered solutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/HarshVardhanLab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all hover:scale-110"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/harsh-vardhan-285122235" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:harshvardhan02102002@gmail.com" 
                className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all hover:scale-110"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                Backend API Development
              </li>
              <li className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                AI/ML Model Development
              </li>
              <li className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                Full-Stack Development
              </li>
              <li className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                Automation Solutions
              </li>
              <li className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                Technical Consulting
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Email</p>
                <a href="mailto:harshvardhan02102002@gmail.com" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                  harshvardhan02102002@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Phone</p>
                <a href="tel:+919528693084" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                  +91 9528693084
                </a>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Availability</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-sm text-on-surface-variant">
                    Open for Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-mono uppercase tracking-widest">
              <span>© 2024 Harsh Vardhan</span>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-xs text-green-500">verified_user</span>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                Encrypted & Secured
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] font-mono text-slate-600">
            <span>Built with</span>
            <span className="px-2 py-1 bg-surface-container-high rounded border border-white/5">Next.js</span>
            <span className="px-2 py-1 bg-surface-container-high rounded border border-white/5">React Three Fiber</span>
            <span className="px-2 py-1 bg-surface-container-high rounded border border-white/5">Framer Motion</span>
            <span className="px-2 py-1 bg-surface-container-high rounded border border-white/5">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
