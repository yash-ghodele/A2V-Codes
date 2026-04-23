import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 font-black tracking-tighter", className)}>
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary blur-[10px] opacity-60 rounded-full" />
        
        {/* Icon Background */}
        <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg border border-white/20 overflow-hidden">
          <Image 
            src="/logo.png" 
            alt="A2V Codes Logo" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <span className="text-2xl">
        A2V<span className="text-primary">Codes</span><span className="text-blue-500">.</span>
      </span>
    </div>
  );
}
