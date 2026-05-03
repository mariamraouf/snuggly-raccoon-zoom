"use client";

import React from 'react';
import { Instagram, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-emerald-500 relative overflow-hidden">
      {/* Funky background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-black whitespace-nowrap uppercase italic">LET'S GO! LET'S GO!</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-black uppercase italic tracking-tighter mb-12 leading-none">
          Don't be a <br /> <span className="text-white underline decoration-black decoration-8">Stranger!</span>
        </h2>
        
        <p className="text-2xl font-black text-black/80 mb-16 uppercase italic">
          No boring forms here. Just hit me up directly and let's start planning!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-white p-12 rounded-[40px] border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"
          >
            <Instagram className="h-20 w-20 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
            <span className="text-3xl font-black uppercase italic">Instagram</span>
            <span className="text-lg font-bold text-gray-500 mt-2">@andip_nepal_tours</span>
          </a>
          
          <a 
            href="https://wa.me/97798XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-yellow-400 p-12 rounded-[40px] border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"
          >
            <MessageCircle className="h-20 w-20 text-black mb-6 group-hover:scale-110 transition-transform" />
            <span className="text-3xl font-black uppercase italic">WhatsApp</span>
            <span className="text-lg font-bold text-black/60 mt-2">+977 98XXXXXXXX</span>
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-4 bg-black text-white py-4 px-8 rounded-full border-4 border-white w-fit mx-auto rotate-2">
          <Phone className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-black uppercase italic">Call me anytime!</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;