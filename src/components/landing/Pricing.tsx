"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, AlertTriangle } from "lucide-react";

const benefits = [
  "Personalized engineer-led guidance",
  "Working hardware/software project",
  "Complete source code & circuit files",
  "Mock viva & presentation prep",
  "Full project report & documentation",
  "24/7 Priority chat support",
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="hero-glow opacity-30" />
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[3rem] overflow-hidden border-primary/20">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-3/5">
                <h2 className="text-3xl font-bold mb-6">Invest in your <span className="text-primary">Skills.</span></h2>
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Limited slots: We only take 5 projects per month to ensure quality mentorship.
                  </p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 md:w-2/5 bg-primary/5 flex flex-col justify-center items-center text-center border-l border-white/5">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground line-through mb-1">Most spend ₹500–₹700 on projects they don’t understand...</p>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">Per Student</span>
                  <div className="text-6xl font-bold mt-2">₹1200</div>
                </div>
                <p className="text-lg font-bold text-primary mb-6">
                  = You actually understand + score
                </p>
                <div className="w-full space-y-4">
                  <Button className="w-full h-14 rounded-2xl text-lg font-bold">
                    Get Project Guidance
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-2xl glass group">
                    <MessageCircle className="mr-2 w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
