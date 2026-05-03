"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/nepal-mountains.jpg" 
          alt="Nepal Mountains" 
          className="w-full h-full object-cover scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 animate-in slide-in-from-bottom-4 duration-700">
          <MapPin className="h-4 w-4 text-emerald-400" />
          Discover the Heart of the Himalayas
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom-6 duration-700 delay-100">
          Experience Nepal with <span className="text-emerald-400">Andip</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
          Authentic journeys, hidden trails, and unforgettable memories. Let a local expert show you the true magic of Nepal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg group">
            Explore Tours
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-full px-8 h-14 text-lg">
            Contact Andip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;