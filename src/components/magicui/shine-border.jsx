"use client";;
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  colorFrom = "#4F46E5",
  colorTo = "#E935C1",
  className,
  style,
  ...props
}) {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--bg-size": "200%",

          backgroundImage: `linear-gradient(to right, var(--color-from), var(--color-to), var(--color-from))`,
          backgroundSize: "var(--bg-size) 100%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style
        }
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-gradient",
        className
      )}
      {...props} />
  );
}
