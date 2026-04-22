"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Globe, Users } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "Expert Engineers", value: "Team" },
  { icon: Cpu, label: "IoT Systems Built", value: "Real-world" },
  { icon: Globe, label: "Cloud & Web", value: "Expertise" },
  { icon: Users, label: "Student Success", value: "Proven" },
];

export function Authority() {
  return (
    <section className="py-24 bg-card/50 border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by Engineers, <span className="text-primary">for future Engineers.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We’re not random sellers. We’re seniors who’ve built real IoT systems, 
              led technical communities, and guided students through the same phase you’re in right now.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for partner/tech logos */}
            <div className="text-2xl font-bold tracking-tighter">IoT</div>
            <div className="text-2xl font-bold tracking-tighter">CLOUD</div>
            <div className="text-2xl font-bold tracking-tighter">WEB3</div>
            <div className="text-2xl font-bold tracking-tighter">AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
