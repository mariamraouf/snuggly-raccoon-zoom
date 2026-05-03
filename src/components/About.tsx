"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    "Certified Professional Guide",
    "Deep Local Knowledge",
    "Customized Itineraries",
    "Safety First Approach",
    "Authentic Cultural Experiences",
    "Fluent in English & Local Dialects"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/andip-temple.jpg" 
                alt="Andip at a temple" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-emerald-100 font-medium">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">Meet Your Guide</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Namaste! I'm Andip, your gateway to the wonders of Nepal.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Born and raised in the shadows of the Himalayas, I've spent my life exploring the diverse landscapes and rich traditions of my homeland. My mission is to provide travelers with more than just a tour—I want to give you a deep, personal connection to the spirit of Nepal.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="italic text-emerald-800 text-lg">
                "Andip wasn't just a guide; he became a friend. He showed us places we never would have found on our own and made us feel completely at home in Nepal."
              </p>
              <p className="mt-4 font-bold text-emerald-900">— Sarah J., United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;