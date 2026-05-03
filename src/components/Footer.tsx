"use client";

import React from 'react';
import { Mountain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t-8 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg border-2 border-white">
              <Mountain className="h-8 w-8 text-black" />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase italic">Andip<span className="text-emerald-500">!</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-lg font-black uppercase italic">
            <a href="#about" className="hover:text-emerald-400 transition-colors">The Vibe</a>
            <a href="#tours" className="hover:text-emerald-400 transition-colors">Adventures</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Pics</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Hit Me Up</a>
          </div>
          
          <div className="flex items-center gap-2 text-lg font-black uppercase italic">
            Made with <Heart className="h-6 w-6 text-red-500 fill-red-500 animate-pulse" /> in Nepal
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm font-bold text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} ANDIP TOURS NEPAL. NO BORING STUFF ALLOWED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;