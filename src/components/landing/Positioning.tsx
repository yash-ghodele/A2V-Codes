"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Build",
    description: "Hands-on guidance to assemble your project from scratch. You see it coming to life.",
  },
  {
    title: "Understand",
    description: "Deep dive into every sensor, line of code, and connection. No black boxes.",
  },
  {
    title: "Present",
    description: "Mock viva sessions and presentation training to make you the expert in the room.",
  },
];

export function Positioning() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We work <span className="text-primary">differently.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A2V TECH Solutions is not a project factory. We are a mentorship hub. 
              We focus on the student as much as the system.
            </p>
            
            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{pillar.title}</h4>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-white/10 flex items-center justify-center p-12">
              <div className="relative w-full h-full glass rounded-2xl flex items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-primary">100%</div>
                  <div className="text-2xl font-medium">Viva Readiness</div>
                  <p className="text-muted-foreground">Our students don't just pass. They impress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
