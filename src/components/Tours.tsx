"use client";

import React from 'react';
import { Mountain, Camera, Users, Zap } from 'lucide-react';

const Tours = () => {
  const adventures = [
    {
      title: "The Big One",
      desc: "Everest Base Camp. It's tough, it's epic, it's life-changing.",
      icon: Mountain,
      color: "bg-emerald-400",
      tag: "14 DAYS"
    },
    {
      title: "Culture Trip",
      desc: "Temples, markets, and the best food you've ever tasted in Kathmandu.",
      icon: Zap,
      color: "bg-yellow-400",
      tag: "3 DAYS"
    },
    {
      title: "Insta-Worthy",
      desc: "We go where the light is perfect and the views are insane.",
      icon: Camera,
      color: "bg-pink-400",
      tag: "7 DAYS"
    },
    {
      title: "Village Life",
      desc: "Stay with my friends in the mountains. Real people, real stories.",
      icon: Users,
      color: "bg-blue-400",
      tag: "5 DAYS"
    }
  ];

  return (
    <section id="tours" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
            What's the <span className="text-emerald-400">Plan?</span>
          </h2>
          <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto">
            Pick your vibe. I can customize anything to make it perfect for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {adventures.map((adv, index) => (
            <div 
              key={index} 
              className="group relative bg-white text-black p-10 rounded-[40px] border-4 border-white hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              <div className={`absolute -top-6 -right-6 ${adv.color} text-black font-black px-6 py-2 rounded-full border-4 border-black rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
                {adv.tag}
              </div>
              <div className="flex items-start gap-6">
                <div className={`${adv.color} p-5 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
                  <adv.icon className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase mb-4 italic">{adv.title}</h3>
                  <p className="text-lg font-bold text-gray-600 leading-tight">{adv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;