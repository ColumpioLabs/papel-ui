import { BORDER, ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const trigger = cva(
  twMerge(
    `inline-flex
  items-center
  justify-center
  gap-[5px]
  outline-none
  px-3
  py-2
  m-px
  transition
  focus:outline-none
  focus:ring-1`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      variant: "outline",
      color: "neutral",
    },
    variants: {
      variant: {
        outline: "",
        plane: "border-transparent",
      },
      color: {
        neutral: cx(
          `bg-neutral-50
          text-neutral-900`,

          // PLACEHOLDER
          `placeholder:text-neutral-500`,

          // FOCUS VISIBLE
          `focus-visible:border-neutral-950`,

          // FOCUS
          `focus:ring-neutral-950`,
        ),
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "outline",
        className: `border-neutral-300`,
      },
    ],
  },
);

export { trigger };
