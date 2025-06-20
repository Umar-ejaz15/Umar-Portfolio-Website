import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";

const rainbowButtonVariants = cva(cn(
  "relative cursor-pointer group transition-all duration-300",
  "inline-flex items-center justify-center gap-2 shrink-0",
  "rounded-sm outline-none focus-visible:ring-[3px] aria-invalid:border-destructive",
  "text-sm font-medium whitespace-nowrap",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  "hover:scale-105 hover:shadow-lg active:scale-95",
  "animate-gradient bg-white bg-[length:var(--bg-size)_100%]"
), {
  variants: {
    variant: {
      default:
        "text-white before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#4F46E5] before:via-[#E935C1] before:to-[#4F46E5] before:[filter:blur(0.75rem)] before:transition-all before:duration-300 text-black font-semibold hover:before:w-4/5 hover:before:h-2/5 hover:before:[filter:blur(1rem)]",
      outline:
        "border border-input bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#E935C1] to-[#4F46E5] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#4F46E5] before:via-[#E935C1] before:to-[#4F46E5] before:[filter:blur(0.75rem)] before:transition-all before:duration-300 hover:before:w-4/5 hover:before:h-2/5 hover:before:[filter:blur(1rem)]",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-xl px-3 text-xs",
      lg: "h-11 rounded-xl px-8",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const RainbowButton = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      type="button"
      data-slot="button"
      className={cn(rainbowButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
});

RainbowButton.displayName = "RainbowButton";

export { RainbowButton, rainbowButtonVariants };