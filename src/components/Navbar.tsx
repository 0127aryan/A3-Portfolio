"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6" suppressHydrationWarning>
        <div className={`glass rounded-full px-8 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "shadow-2xl" : "shadow-lg"}`} suppressHydrationWarning>
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 pb-1">
            A³ Tech.
          </Link>
          
          <div className="hidden md:flex space-x-8" suppressHydrationWarning>
            <Link href="#home" className="text-foreground/80 hover:text-pink-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-pink-500 transition-colors font-medium">
              About
            </Link>
            <Link href="#projects" className="text-foreground/80 hover:text-pink-500 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-pink-500 transition-colors font-medium">
              Contact Me
            </Link>
          </div>

          <Link href="#contact" className="hidden md:block px-6 py-2 rounded-full bg-foreground text-background font-medium hover:bg-pink-500 hover:text-white transition-colors">
            Hire Me
          </Link>
          
          {/* Mobile menu button could go here */}
          <button className="md:hidden text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
