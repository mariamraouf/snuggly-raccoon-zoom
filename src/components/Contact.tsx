"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { showSuccess } from "@/utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! Andip will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">Ready to start your Himalayan adventure?</h3>
            <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
              Have questions about a specific trek or want a custom itinerary? Send me a message and let's start planning your dream trip to Nepal.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-medium">Email Me</p>
                  <p className="text-lg font-bold">andip.tours@nepal.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-medium">Follow on Instagram</p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-emerald-400 transition-colors">@andip_nepal_tours</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-medium">WhatsApp</p>
                  <p className="text-lg font-bold">+977 98XXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 text-gray-900 h-12 rounded-xl focus:ring-emerald-500" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 text-gray-900 h-12 rounded-xl focus:ring-emerald-500" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Interested In</label>
                <Input placeholder="e.g. Everest Base Camp Trek" className="bg-gray-50 border-gray-200 text-gray-900 h-12 rounded-xl focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Your Message</label>
                <Textarea placeholder="Tell me about your travel plans..." className="bg-gray-50 border-gray-200 text-gray-900 min-h-[150px] rounded-xl focus:ring-emerald-500" required />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 rounded-xl text-lg font-bold shadow-lg shadow-emerald-900/20">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;