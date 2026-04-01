'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'person' },
    { name: 'Projects', path: '/projects', icon: 'work' },
    { name: 'Skills', path: '/skills', icon: 'code' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-[60] w-12 h-12 rounded-lg bg-slate-900/80 backdrop-blur-lg border border-white/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(249,115,22,0.2)]"
      >
        {isOpen ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {/* Logo */}
            <div className="mb-8">
              <h2 className="text-3xl font-headline font-bold text-primary tracking-tighter">
                HARSH VARDHAN
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  System Online
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center space-y-6 w-full max-w-xs">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 text-primary'
                      : 'bg-surface-container-high border border-white/5 text-on-surface-variant hover:border-primary/20'
                  }`}
                >
                  <span className="font-headline text-lg font-bold">{item.name}</span>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/HarshVardhanLab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/harsh-vardhan-285122235"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:harshvardhan02102002@gmail.com"
                className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
