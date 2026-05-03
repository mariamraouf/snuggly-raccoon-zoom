"use client";

import React from 'react';
import { Button } from "./ui/button";
import { ChevronDown, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/nepal-mountains.jpg" 
          alt="Nepal Mountains" 
          className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in-110 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <p className="text-emerald-400 font-black tracking-[0.5em] uppercase mb-8 animate-in slide-in-from-bottom-4 duration-700">
          Your Local Guide to the Himalayas
        </p>
        <h1 className="text-7xl md:text-[10rem] font-black text-white mb-12 tracking-tighter leading-[0.8] uppercase italic animate-in slide-in-from-bottom-6 duration-700 delay-100">
          The Real <br />
          <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '3px white' }}>Nepal</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 animate-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-full px-16 h-20 text-2xl transition-all hover:scale-105 shadow-2xl">
            EXPLORE TRIPS
          </Button>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-black rounded-full px-16 h-20 text-2xl border border-white/30 transition-all hover:scale-105"
          >
            <Instagram className="h-8 w-8" />
            INSTAGRAM
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-12 w-12 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;