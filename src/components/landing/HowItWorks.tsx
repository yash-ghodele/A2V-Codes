"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Fill the form or WhatsApp us to discuss your project domain.",
  },
  {
    number: "02",
    title: "Brainstorm",
    description: "Discuss ideas with an engineer to find the perfect project for you.",
  },
  {
    number: "03",
    title: "Build & Guide",
    description: "We guide you step-by-step while building it together.",
  },
  {
    number: "04",
    title: "Ace Viva",
    description: "Present with confidence and score high marks in your final viva.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground">Four steps to engineering excellence.</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-background border-2 border-primary/30 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
