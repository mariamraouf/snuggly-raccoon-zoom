"use client";

import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/src/assets/andip-waterfall.jpg", alt: "Andip at waterfall", span: "md:col-span-2 md:row-span-2" },
    { src: "/src/assets/andip-lake.jpg", alt: "Andip by the lake", span: "md:col-span-1 md:row-span-1" },
    { src: "/src/assets/andip-dogs.jpg", alt: "Andip with dogs", span: "md:col-span-1 md:row-span-1" },
    { src: "/src/assets/andip-temple.jpg", alt: "Andip at temple", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">Visual Journey</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Moments from the Trail</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the incredible landscapes and experiences that await you in Nepal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-3xl group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;