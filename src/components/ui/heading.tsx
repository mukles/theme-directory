import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight leading-[1.2] font-secondary", {
  variants: {
    variant: {
      default: "",
      muted: "text-muted-foreground",
      gradient: "text-gradient",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const levelStyles: Record<number, string> = {
  1: "text-7xl",
  2: "text-6xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    asChild?: boolean;
  };

function Heading({ level = 1, className, variant, asChild = false, ...props }: HeadingProps) {
  const Comp: any = asChild ? Slot : (`h${level}` as any);

  return <Comp data-slot="heading" className={cn(headingVariants({ variant }), levelStyles[level], className)} {...props} />;
}

export { Heading, headingVariants };

export type { HeadingProps };
