import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex h-11 items-center justify-center whitespace-nowrap rounded-[10px] px-5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,.2),0_18px_42px_rgba(255,255,255,.16)] hover:-translate-y-0.5 hover:bg-zinc-100",
        glow:
          "bg-[linear-gradient(135deg,#f7f7ff_0%,#dbe7ff_45%,#bdf7e6_100%)] text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,.2),0_20px_60px_rgba(105,129,255,.34)] hover:-translate-y-0.5",
        glass:
          "border border-white/10 bg-white/[.045] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/[.075]",
        dark:
          "border border-white/10 bg-zinc-950 text-white hover:-translate-y-0.5 hover:border-white/18 hover:bg-zinc-900"
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-7 text-[15px]",
        icon: "h-10 w-10 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
