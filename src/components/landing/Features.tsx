"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  BookOpen, 
  Shield, 
  Settings, 
  Headphones, 
  FileCheck 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Working Project",
    description: "Fully functional hardware/software system tested for reliability.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Explanation",
    description: "Clear breakdown of how every component works together.",
  },
  {
    icon: Shield,
    title: "Viva Preparation",
    description: "Mock questions and answers based on your specific project.",
  },
  {
    icon: Settings,
    title: "Custom Modifications",
    description: "Need changes? We help you tweak the project to your needs.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Stuck somewhere? Our engineers are just a call away.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "Full report, circuit diagrams, and presentation slides.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Get</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Everything you need to not just pass, but excel in your engineering exploration projects.
          </p>
          <p className="text-2xl font-bold text-primary italic">
            “You won’t just carry a project into viva — you’ll own it.”
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
