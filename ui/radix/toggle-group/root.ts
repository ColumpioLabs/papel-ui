import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const DEFAULT_COLOR = "white_black";

const root = cva(
  twMerge(
    `inline-flex
  gap-x-2
  p-2`,
    ROUNDED,
    SHADOW,
    BORDER,
  ),
  {
    variants: {
      color: {
        white_black: `bg-white
        text-neutral-900
        border-neutral-300`,
      },
    },
    defaultVariants: {
      color: DEFAULT_COLOR,
    },
  },
);

export { root };