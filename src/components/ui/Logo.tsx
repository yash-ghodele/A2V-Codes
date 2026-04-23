"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary/10 border border-white/10 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500">
        <Image
          src="/logo.png"
          alt="A2V Codes Logo"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      {showText && (
        <span className="text-2xl font-black tracking-tighter">
          A2V <span className="text-primary">Codes</span>
        </span>
      )}
    </Link>
  );
}
