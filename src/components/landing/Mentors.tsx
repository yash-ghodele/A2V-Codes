"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Cpu, Users, GraduationCap, Compass, Cloud, Server, Layers, ShieldCheck } from "lucide-react";

const mentors = [
  {
    name: "Yash",
    role: "Co-Founder, A2V Codes",
    points: [
      { text: "Executive Head of technical community & event leadership", icon: Users },
      { text: "Built multiple IoT systems (real-time monitoring, embedded solutions)", icon: Cpu },
      { text: "Experience in guiding students through technical projects and presentations", icon: Compass },
      { text: "Strong focus on making students confident in viva and practical understanding", icon: GraduationCap }
    ],
    highlightLine: "Focuses on helping students not just build projects, but explain them like experts."
  },
  {
    name: "Aniket Bankar",
    role: "Co-Founder, A2V Codes",
    points: [
      { text: "Full Stack & Cloud Engineer (Next.js, AWS, DevOps)", icon: Cloud },
      { text: "Built secure, scalable web systems and SaaS platforms", icon: Server },
      { text: "Expertise in cloud deployment, automation, and system architecture", icon: Layers },
      { text: "Led technical teams and engineered real-world applications with 99.9% uptime", icon: ShieldCheck }
    ],
    highlightLine: "Ensures every project is technically strong, scalable, and industry-level — not just a college demo."
  }
];

export function Mentors() {
  return (
    <section className="py-24 relative bg-secondary/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Your Mentors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We’ve been in your place. That’s why we built A2V Codes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-colors group-hover:bg-primary/10" />
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-secondary/50 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-xl">
                  {/* Placeholder for actual image */}
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{mentor.name}</h3>
                  <p className="text-primary font-medium">{mentor.role}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8 relative z-10 flex-grow">
                {mentor.points.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{point.text}</span>
                    </li>
                  );
                })}
              </ul>
              
              <div className="pt-6 border-t border-white/10 relative z-10">
                <p className="text-sm font-semibold italic text-primary">
                  "{mentor.highlightLine}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
