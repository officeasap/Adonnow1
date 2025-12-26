import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type DepthTier = 0 | 1 | 2 | 3 | 4;

interface DepthContainerProps {
  tier?: DepthTier;
  animate?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const tierStyles: Record<DepthTier, string> = {
  0: "bg-gradient-to-b from-depth-void to-depth-1",
  1: "neu-raised",
  2: "neu-floating",
  3: "neu-sunken",
  4: "neu-hero",
};

export const DepthContainer = forwardRef<HTMLDivElement, DepthContainerProps>(
  ({ tier = 1, animate = true, className, children, onClick }, ref) => {
    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={cn(tierStyles[tier], "rounded-lg", className)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(tierStyles[tier], "rounded-lg", className)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

DepthContainer.displayName = "DepthContainer";

export default DepthContainer;
