"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">
              A2V <span className="text-primary">Codes</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              The premium mentorship hub for engineering students. 
              Don't just submit. Build, Understand, and Lead.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-background transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-background transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Available for students across Hubli-Dharwad & Online</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span>+91 [Your WhatsApp]</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Hero</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2026 A2V Codes. All rights reserved. Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Engineers.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-10 -right-10 text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none">
        A2V
      </div>
    </footer>
  );
}
