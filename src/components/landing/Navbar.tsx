"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 pt-4 px-4 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass bg-background/50 backdrop-blur-2xl border border-white/10 rounded-full h-16 px-6 flex items-center justify-between pointer-events-auto shadow-2xl shadow-primary/5">
          <Logo />
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>

          <a 
            href="#lead-magnet" 
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-5 hidden sm:flex group")}
          >
            Get Guidance
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
