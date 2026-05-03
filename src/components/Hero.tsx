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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-emerald-400 font-black tracking-[0.3em] uppercase mb-6 animate-in slide-in-from-bottom-4 duration-700">
          Your Local Guide to the Himalayas
        </p>
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic animate-in slide-in-from-bottom-6 duration-700 delay-100">
          Experience <br />
          <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '2px white' }}>The Real</span> Nepal
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button size="lg" className="bg-white hover:bg-emerald-500 text-black hover:text-white font-black rounded-full px-12 h-16 text-xl transition-all">
            SEE THE TRIPS
          </Button>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black rounded-full px-12 h-16 text-xl border border-white/30 transition-all"
          >
            <Instagram className="h-6 w-6" />
            INSTAGRAM
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;