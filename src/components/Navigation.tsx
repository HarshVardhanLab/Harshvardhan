'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-lg shadow-2xl shadow-orange-500/10">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter text-orange-500 font-headline">
            HARSH VARDHAN
          </Link>
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-orange-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-orange-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`transition-colors ${
                isActive('/projects') 
                  ? 'text-orange-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className={`transition-colors ${
                isActive('/skills') 
                  ? 'text-orange-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-orange-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full after:shadow-[0_0_8px_#f97316]' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary-container px-6 py-2 font-bold hover:scale-105 active:scale-95 transition-all duration-300 obsidian-gradient shadow-[0_0_15px_rgba(249,115,22,0.3)] rounded-lg"
            >
              Connect
            </Link>
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}
