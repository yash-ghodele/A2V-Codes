import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 font-black tracking-tighter", className)}>
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary blur-[10px] opacity-60 rounded-full" />
        
        {/* Icon Background */}
        <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg border border-white/20">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-background"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
      </div>
      <span className="text-2xl">
        A2V<span className="text-primary">Codes</span><span className="text-blue-500">.</span>
      </span>
    </div>
  );
}
