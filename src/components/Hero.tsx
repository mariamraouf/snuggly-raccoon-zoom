"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-yellow-50">
      <div className="absolute top-20 left-10 animate-bounce hidden lg:block">
        <div className="bg-pink-400 text-white font-black px-4 py-2 rounded-full border-2 border-black -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          NEPAL IS CALLING! 🏔️
        </div>
      </div>
      
      <div className="absolute bottom-40 right-20 animate-pulse hidden lg:block">
        <div className="bg-emerald-400 text-black font-black px-4 py-2 rounded-full border-2 border-black rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          BEST VIBES ONLY ✨
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-4 border-black text-black text-lg font-black mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          YO! I'M ANDIP
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase italic">
          Let's Explore <br />
          <span className="text-emerald-600 underline decoration-yellow-400 decoration-8">Nepal</span> Together
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl mx-auto font-bold leading-tight">
          Forget the boring tourist traps. I'll show you the hidden waterfalls, the best mountain dogs, and the real soul of the Himalayas. 
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-2xl px-10 h-20 text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            SEE THE ADVENTURES
          </Button>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-pink-50 text-black font-black rounded-2xl px-10 h-20 text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <Instagram className="h-8 w-8 text-pink-500" />
            HIT ME ON INSTA
          </a>
        </div>
      </div>

      {/* Background Image with funky frame */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img 
          src="/src/assets/nepal-mountains.jpg" 
          alt="Nepal" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;