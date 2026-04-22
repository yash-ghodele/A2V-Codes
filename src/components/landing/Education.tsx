"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, Info } from "lucide-react";

const reasons = [
  {
    title: "Zero Customization",
    description: "Cheap projects are mass-produced. If the examiner asks to change one value in the code, you're stuck.",
    icon: XCircle
  },
  {
    title: "The 'Black Box' Effect",
    description: "You get a working box but no understanding. When asked 'Why this resistor?', you lose marks.",
    icon: AlertTriangle
  },
  {
    title: "No Support",
    description: "Most sellers vanish after payment. If a wire breaks 10 minutes before viva, you're on your own.",
    icon: Info
  }
];

export function Education() {
  return (
    <section className="py-24 relative bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why "Cheap" Projects Fail</h2>
            <p className="text-xl text-muted-foreground">Don't risk your grades for a few hundred rupees.</p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-secondary/10 border border-white/5 items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          <div className="mt-16 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
            <p className="text-xl font-bold text-destructive">
              "If your project fails in viva, the money you saved doesn’t matter."
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
