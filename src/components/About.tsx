"use client";

import React from 'react';
import { Heart, Camera, Map, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-black shadow-[20px_20px_0px_0px_rgba(16,185,129,1)]">
                <img 
                  src="/src/assets/andip-temple.jpg" 
                  alt="Andip" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full -z-0 blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-300 rounded-full -z-0 blur-3xl opacity-50" />
          </div>
          
          <div>
            <h2 className="text-2xl font-black text-emerald-600 uppercase tracking-tighter mb-4 italic">Who is this guy?</h2>
            <h3 className="text-5xl md:text-6xl font-black text-black mb-8 leading-[0.9] uppercase">
              Just a local <br /> with a <span className="text-yellow-500">big heart</span> <br /> for the mountains.
            </h3>
            <p className="text-xl text-gray-700 mb-10 font-medium leading-relaxed">
              I've been wandering these trails since I could walk. I don't do "tours"—I do experiences. Whether we're chasing waterfalls, hanging with mountain dogs, or drinking tea with locals, it's all about the vibe. 
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-yellow-50 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Camera className="h-8 w-8 text-pink-500 mb-3" />
                <p className="font-black uppercase text-sm">Pro Photo Spots</p>
              </div>
              <div className="p-6 bg-emerald-50 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Map className="h-8 w-8 text-emerald-600 mb-3" />
                <p className="font-black uppercase text-sm">Secret Trails</p>
              </div>
              <div className="p-6 bg-pink-50 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Coffee className="h-8 w-8 text-orange-500 mb-3" />
                <p className="font-black uppercase text-sm">Local Tea Stops</p>
              </div>
              <div className="p-6 bg-blue-50 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="h-8 w-8 text-red-500 mb-3" />
                <p className="font-black uppercase text-sm">Good Times Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;