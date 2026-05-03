"use client";

import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src="/src/assets/nepal-mountains.jpg" alt="Background" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-emerald-500 font-black uppercase tracking-[0.5em] text-sm mb-8">Let's Start Planning</h2>
        <h3 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter mb-16 leading-none">
          Ready to <br /> <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '2px white' }}>Go?</span>
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-white px-12 py-8 rounded-full transition-all hover:scale-105"
          >
            <Instagram className="h-10 w-10 text-pink-500" />
            <div className="text-left">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Follow Me</p>
              <p className="text-2xl font-black text-black uppercase italic">Instagram</p>
            </div>
          </a>
          
          <a 
            href="https://wa.me/97798XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-emerald-500 px-12 py-8 rounded-full transition-all hover:scale-105"
          >
            <MessageCircle className="h-10 w-10 text-white" />
            <div className="text-left">
              <p className="text-xs font-black text-emerald-200 uppercase tracking-widest">Chat Now</p>
              <p className="text-2xl font-black text-white uppercase italic">WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;