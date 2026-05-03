"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Tours = () => {
  const adventures = [
    {
      title: "Everest Base Camp",
      image: "/src/assets/nepal-mountains.jpg",
      tag: "The Ultimate Challenge",
      duration: "14 Days"
    },
    {
      title: "Hidden Waterfalls",
      image: "/src/assets/andip-waterfall.jpg",
      tag: "Nature's Secret",
      duration: "1 Day"
    },
    {
      title: "Mountain Life",
      image: "/src/assets/andip-dogs.jpg",
      tag: "Village Immersion",
      duration: "5 Days"
    },
    {
      title: "Sacred Temples",
      image: "/src/assets/andip-temple.jpg",
      tag: "Cultural Soul",
      duration: "3 Days"
    }
  ];

  return (
    <section id="adventures" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">The Adventures</h2>
            <h3 className="text-6xl md:text-7xl font-black text-black uppercase italic leading-none">
              Pick Your <br /> Journey
            </h3>
          </div>
          <p className="text-xl text-gray-500 font-medium max-w-md">
            From high-altitude treks to peaceful village stays, we'll find the perfect pace for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adventures.map((adv, index) => (
            <div 
              key={index} 
              className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] cursor-pointer"
            >
              <img 
                src={adv.image} 
                alt={adv.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-8 left-8">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/30">
                  {adv.tag}
                </span>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">{adv.duration}</p>
                  <h4 className="text-4xl font-black text-white uppercase italic">{adv.title}</h4>
                </div>
                <div className="bg-white p-4 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <ArrowUpRight className="h-6 w-6" />
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