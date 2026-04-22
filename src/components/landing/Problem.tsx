"use client";

import { motion } from "framer-motion";
import { AlertCircle, Brain, Copy, XCircle } from "lucide-react";

const problems = [
  {
    icon: Copy,
    title: "Copied Projects",
    description: "Submitting generic, copied projects that thousands of others have already submitted.",
  },
  {
    icon: XCircle,
    title: "No Understanding",
    description: "Having a working project but zero clue how the circuit or code actually works.",
  },
  {
    icon: AlertCircle,
    title: "Viva Fear",
    description: "The paralyzing fear of examiners asking questions you can't answer.",
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Submission Trap</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Your project is not just for submission. It’s how you score. 
            Most students fall into the trap of "just getting it done."
          </p>
          <div className="inline-block p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive font-bold text-lg">
            “If your plan is ‘kisi tarah submit ho jaye’, you’re setting yourself up to lose marks.”
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
          <p className="text-2xl font-semibold italic text-primary">
            "We reframe the game: Don't just submit. Build, Understand, and Lead."
          </p>
        </div>
      </div>
    </section>
  );
}
