"use client";

import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/src/assets/andip-waterfall.jpg", span: "md:col-span-2 md:row-span-2" },
    { src: "/src/assets/andip-lake.jpg", span: "md:col-span-2 md:row-span-1" },
    { src: "/src/assets/andip-dogs.jpg", span: "md:col-span-1 md:row-span-1" },
    { src: "/src/assets/andip-temple.jpg", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-black">
            The <span className="text-emerald-500">Gallery</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-[3rem] group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt="Nepal" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;