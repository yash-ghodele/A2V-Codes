"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, ArrowRight, Zap, AlertTriangle } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-glow-alt" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border rounded-full border-primary/30 bg-primary/10 text-primary">
              A2V Codes • Engineering Mentorship
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Build. Understand. <span className="text-gradient">Score.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Don’t just submit your EE project. Learn it, explain it, and <span className="text-foreground font-semibold">score confidently in your viva.</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#lead-magnet" 
              className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg rounded-full group")}
            >
              Get Project Guidance
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg rounded-full glass group")}
            >
              <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground/80 font-medium">
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-500" /> Guided by experienced engineers</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-orange-500" /> Only 5 groups per month</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
