"use client";

import React from 'react';
import { Mountain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold text-white">Andip<span className="text-emerald-500">Tours</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#tours" className="hover:text-white transition-colors">Tours</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Nepal
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} Andip Tours Nepal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;