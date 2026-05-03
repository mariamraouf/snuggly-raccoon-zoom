"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Compass, Camera, Users } from 'lucide-react';

const Tours = () => {
  const tourTypes = [
    {
      title: "Everest Base Camp",
      description: "The ultimate trekking challenge with breathtaking views of the world's highest peak.",
      icon: Mountain,
      duration: "14-16 Days",
      difficulty: "Challenging"
    },
    {
      title: "Cultural Heritage",
      description: "Explore the ancient temples, vibrant markets, and rich history of Kathmandu Valley.",
      icon: Compass,
      duration: "3-5 Days",
      difficulty: "Easy"
    },
    {
      title: "Photography Tours",
      description: "Capture the golden hour over the Himalayas and the colorful life of local villages.",
      icon: Camera,
      duration: "7-10 Days",
      difficulty: "Moderate"
    },
    {
      title: "Village Immersion",
      description: "Stay with local families and experience the authentic lifestyle of rural Nepal.",
      icon: Users,
      duration: "5-7 Days",
      difficulty: "Moderate"
    }
  ];

  return (
    <section id="tours" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">Our Adventures</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Curated Experiences for Every Traveler</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for high-altitude thrills or peaceful cultural discovery, I have the perfect journey for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tourTypes.map((tour, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                  <tour.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-bold">{tour.title}</CardTitle>
                <CardDescription className="text-gray-500 leading-relaxed">
                  {tour.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-emerald-600 uppercase">{tour.duration}</span>
                  <span className="text-xs font-bold text-gray-400 uppercase">{tour.difficulty}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;