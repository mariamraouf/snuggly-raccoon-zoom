"use client";

import React from 'react';
import { Mountain, Instagram, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">Andip<span className="text-emerald-600">Tours</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">About</a>
            <a href="#tours" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Tours</a>
            <a href="#gallery" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Gallery</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              Book Now
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;