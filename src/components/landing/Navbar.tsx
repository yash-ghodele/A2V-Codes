"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Process", href: "#hero" },
  { name: "Mentors", href: "#mentors" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-white/10 py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex glass rounded-full" asChild>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4 text-green-500" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" className="rounded-full shadow-lg shadow-primary/20" asChild>
              <a href="#lead-magnet">Join Now</a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
