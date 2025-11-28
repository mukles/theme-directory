import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const floatDotVariants = cva("bg-accent absolute", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-none hover:rounded-full transition-all duration-300 hover:gradient-primary hover:scale-150 hover:shadow-xl shadow-primary",
    },
    position: {
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "bottom-0 right-0",
    },
    size: {
      sm: "w-2 h-2",
      md: "w-3 h-3",
      lg: "w-4 h-4",
    },
  },
  defaultVariants: {
    shape: "circle",
    position: "bottom-right",
    size: "md",
  },
});

export interface FloatDotProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof floatDotVariants> {}

export function FloatDot({ className, shape, position, size, ...props }: FloatDotProps) {
  return <div aria-hidden className={cn(floatDotVariants({ shape, position, size, className }))} {...props} />;
}

export { floatDotVariants };
