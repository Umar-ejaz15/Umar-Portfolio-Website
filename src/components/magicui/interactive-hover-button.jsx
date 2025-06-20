import React from "react";
import { ArrowRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative text-center w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6  font-semibold",
          className
        )}
        {...props}
      >
        
        <div className="flex text-center items-center gap-2">
         
          <span className="inline-block text-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
