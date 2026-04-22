"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowUp, Heart, ChevronRight, Github, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="text-4xl font-black mb-6 tracking-tighter">
              A2V <span className="text-primary">Codes</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-sm">
              Stop surviving submissions. Start mastering engineering. 
              The premium mentorship hub for real builders.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-background hover:scale-105 transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-background hover:scale-105 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-background hover:scale-105 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spacer for layout balancing on large screens */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'The Problem', 'Mentors', 'Pricing', 'Free Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Block */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6">Direct Contact</h4>
            <div className="glass-card p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Hubli-Dharwad & Online globally</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-20" />
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp Us</p>
                    <p className="text-sm text-muted-foreground">+91 [Your WhatsApp]</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5 font-medium">
            © {new Date().getFullYear()} A2V Codes. Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Engineers.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-2 rounded-full glass text-sm font-bold hover:bg-primary hover:text-background transition-all duration-300 shadow-lg"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.015] pointer-events-none select-none whitespace-nowrap">
        A2V CODES
      </div>
    </footer>
  );
}
