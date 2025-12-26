import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type NeuButtonVariant = "raised" | "floating" | "hero" | "ghost";
type NeuButtonSize = "sm" | "md" | "lg" | "xl";

interface NeuButtonProps {
  variant?: NeuButtonVariant;
  size?: NeuButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<NeuButtonVariant, string> = {
  raised: "neu-raised",
  floating: "neu-floating",
  hero: "neu-hero",
  ghost: "bg-transparent hover:bg-depth-2/50",
};

const sizeStyles: Record<NeuButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[52px]",
  lg: "px-8 py-4 text-lg min-h-[60px]",
  xl: "px-10 py-5 text-xl min-h-[72px]",
};

export const NeuButton = forwardRef<HTMLButtonElement, NeuButtonProps>(
  (
    {
      variant = "raised",
      size = "md",
      icon,
      iconPosition = "left",
      className,
      children,
      onClick,
      disabled,
      type = "button",
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-3 font-body font-medium",
          "rounded-[18px] cursor-pointer touch-target",
          "transition-colors duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "hero" || variant === "floating" 
            ? "gold-text-subtle" 
            : "text-text-primary",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        whileHover={!disabled ? {
          y: -1,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        } : undefined}
        whileTap={!disabled ? {
          y: 1,
          boxShadow: "inset -4px -4px 8px hsl(0 0% 12%), inset 4px 4px 8px hsl(0 0% 2%)",
          transition: { type: "spring", stiffness: 400, damping: 25 },
        } : undefined}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

NeuButton.displayName = "NeuButton";

export default NeuButton;
