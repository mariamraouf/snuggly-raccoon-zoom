"use client";

import React from 'react';
import { Mountain, Instagram, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-white/90 backdrop-blur-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-yellow-400 p-2 rounded-lg border-2 border-black group-hover:rotate-12 transition-transform">
            <Mountain className="h-6 w-6 text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter text-black uppercase italic">Andip<span className="text-emerald-500">!</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-bold text-black hover:text-emerald-600 transition-colors uppercase tracking-widest">The Vibe</a>
          <a href="#tours" className="text-sm font-bold text-black hover:text-emerald-600 transition-colors uppercase tracking-widest">Adventures</a>
          <a href="#gallery" className="text-sm font-bold text-black hover:text-emerald-600 transition-colors uppercase tracking-widest">Pics</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-black hover:text-pink-500 transition-colors uppercase tracking-widest">
            <Instagram className="h-4 w-4" />
            Insta
          </a>
          <Button className="bg-black hover:bg-emerald-600 text-white font-bold rounded-xl px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            Let's Go!
          </Button>
        </div>

        <div className="md:hidden">
          <Zap className="h-6 w-6 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;