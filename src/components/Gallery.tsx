"use client";

import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/src/assets/andip-waterfall.jpg", title: "Hidden Falls", span: "md:col-span-2 md:row-span-2" },
    { src: "/src/assets/andip-lake.jpg", title: "Alpine Lakes", span: "md:col-span-2 md:row-span-1" },
    { src: "/src/assets/andip-dogs.jpg", title: "Mountain Friends", span: "md:col-span-1 md:row-span-1" },
    { src: "/src/assets/andip-temple.jpg", title: "Sacred Spaces", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-40 bg-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.5em] text-sm mb-4">Visual Journey</h2>
          <h3 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none">
            Captured <br /> <span className="text-gray-600">Moments</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[400px] md:auto-rows-[500px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-[4rem] group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <p className="text-4xl font-black text-white uppercase italic">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;