"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, ArrowRight, Zap, AlertTriangle } from "lucide-react";
import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border rounded-full border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                A2V Codes • Engineering Mentorship
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                Build. Understand. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">Score.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Don’t just submit your EE project. Learn it, explain it, and <span className="text-foreground font-semibold">score confidently in your viva.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#lead-magnet"
                className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg rounded-full group shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all")}
              >
                Get Project Guidance
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg rounded-full glass group hover:bg-secondary/50")}
              >
                <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 flex flex-col items-center lg:items-start gap-2"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground/80 font-medium">
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" /> Guided by experts</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]" /> Only 5 groups per month</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Spline Scene */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative z-10 hidden md:block"
          >
            {/* A beautiful dark-theme abstract 3D shape scene */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
