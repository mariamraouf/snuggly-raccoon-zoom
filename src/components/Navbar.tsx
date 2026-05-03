"use client";

import React, { useState, useEffect } from 'react';
import { Mountain, Instagram, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Mountain className={cn("h-8 w-8 transition-colors", isScrolled ? "text-emerald-600" : "text-white")} />
          <span className={cn("text-2xl font-bold tracking-tighter uppercase italic", isScrolled ? "text-black" : "text-white")}>
            Andip<span className="text-emerald-500">!</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Adventures', 'Gallery'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-emerald-500",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className={cn("h-5 w-5 transition-colors hover:text-pink-500", isScrolled ? "text-black" : "text-white")} />
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full px-8">
              Let's Chat
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;