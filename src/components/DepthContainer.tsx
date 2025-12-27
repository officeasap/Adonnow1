import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type DepthState = "engraved" | "raised" | "pressed";

interface DepthContainerProps {
  depth?: DepthState;
  animate?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const depthStyles: Record<DepthState, string> = {
  engraved: "depth-engraved",
  raised: "depth-raised",
  pressed: "depth-pressed",
};

export const DepthContainer = forwardRef<HTMLDivElement, DepthContainerProps>(
  ({ depth = "engraved", animate = true, className, children, onClick }, ref) => {
    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={cn(depthStyles[depth], "rounded-[18px]", className)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(depthStyles[depth], "rounded-[18px]", className)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

DepthContainer.displayName = "DepthContainer";

export default DepthContainer;
