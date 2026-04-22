"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ChevronRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-background mb-8 leading-tight">
            Ready to do this the right way?
          </h2>
          <p className="text-xl md:text-2xl text-background/80 mb-12 font-medium">
            Don’t risk your viva with guesswork. Get guided by engineers who’ve been where you are.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl rounded-2xl group shadow-2xl">
              Get Started
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-2xl bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary transition-all shadow-2xl">
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Now
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2 text-background/70 font-bold">
            <p className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" /> Get your project guided by engineers
            </p>
            <p className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" /> Or talk to us directly on WhatsApp
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
