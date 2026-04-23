"use client";

import { motion } from "framer-motion";
import { Hammer, BrainCircuit, Presentation } from "lucide-react";

const pillars = [
  {
    icon: Hammer,
    title: "1. Build",
    description: "Hands-on guidance to assemble your project from scratch. You see it coming to life.",
  },
  {
    icon: BrainCircuit,
    title: "2. Understand",
    description: "Deep dive into every sensor, line of code, and connection. No black boxes.",
  },
  {
    icon: Presentation,
    title: "3. Present",
    description: "Mock viva sessions and presentation training to make you the expert in the room.",
  },
];

export function Positioning() {
  return (
    <section className="py-32 relative bg-secondary/5">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            We work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">differently.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A2V Codes is not a project factory. We are a mentorship hub. 
            We focus on the student as much as the system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-3xl bg-background border-2 border-white/5 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary/50 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-500">
                <pillar.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
