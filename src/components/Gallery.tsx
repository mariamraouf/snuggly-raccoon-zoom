"use client";

import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/src/assets/andip-waterfall.jpg", alt: "Waterfall", rotate: "-rotate-2", scale: "hover:scale-105" },
    { src: "/src/assets/andip-lake.jpg", alt: "Lake", rotate: "rotate-3", scale: "hover:scale-110" },
    { src: "/src/assets/andip-dogs.jpg", alt: "Dogs", rotate: "-rotate-3", scale: "hover:scale-105" },
    { src: "/src/assets/andip-temple.jpg", alt: "Temple", rotate: "rotate-2", scale: "hover:scale-110" },
  ];

  return (
    <section id="gallery" className="py-24 bg-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-black">
            The <span className="text-pink-500">Photo</span> Dump
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative aspect-square bg-white p-4 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ${image.rotate} ${image.scale} z-10 hover:z-20`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover border-2 border-black"
              />
              <div className="mt-4 text-center font-black uppercase italic text-sm">
                {image.alt} #NepalVibes
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;