"use client";

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/andip-temple.jpg" 
                alt="Andip" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 text-white p-12 rounded-[2rem] shadow-2xl hidden xl:block">
              <p className="text-6xl font-black mb-2">10+</p>
              <p className="text-emerald-100 font-bold uppercase tracking-widest text-sm">Years Guiding</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-emerald-600 font-black uppercase tracking-widest text-sm">Namaste! I'm Andip</h2>
            <h3 className="text-6xl md:text-7xl font-black text-black leading-[0.9] uppercase italic">
              More than a guide, <br /> <span className="text-gray-300">I'm your local friend.</span>
            </h3>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              I don't do standard tourist packages. I show you the Nepal that I love—the hidden trails, the quietest temples, and the best mountain tea spots that only locals know.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-black font-black uppercase mb-2">Authentic</h4>
                <p className="text-gray-500">Real experiences with real local families.</p>
              </div>
              <div>
                <h4 className="text-black font-black uppercase mb-2">Personal</h4>
                <p className="text-gray-500">Every trip is tailored exactly to your vibe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;