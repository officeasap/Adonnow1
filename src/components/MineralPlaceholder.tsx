import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MineralType = "coltan" | "copper" | "tanzanite";

interface MineralPlaceholderProps {
  mineral: MineralType;
  className?: string;
  label?: string;
}

const mineralGradients: Record<MineralType, string> = {
  coltan: "from-depth-3 via-depth-2 to-depth-4", // Dark metallic
  copper: "from-depth-4 via-depth-3 to-depth-2", // Warm charcoal
  tanzanite: "from-depth-2 via-depth-4 to-depth-3", // Cool charcoal
};

const mineralShimmer: Record<MineralType, string> = {
  coltan: "bg-gradient-to-r from-transparent via-depth-5/20 to-transparent",
  copper: "bg-gradient-to-r from-transparent via-depth-5/30 to-transparent",
  tanzanite: "bg-gradient-to-r from-transparent via-depth-5/25 to-transparent",
};

export const MineralPlaceholder = ({
  mineral,
  className,
  label,
}: MineralPlaceholderProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg neu-raised",
        "bg-gradient-to-br",
        mineralGradients[mineral],
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 animate-shimmer",
          mineralShimmer[mineral]
        )}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Label */}
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-text-secondary font-body text-sm uppercase tracking-widest haptic-text-1">
            {label}
          </span>
        </div>
      )}

      {/* Corner accent */}
      <div className="absolute bottom-2 right-2">
        <div className="w-2 h-2 rounded-full bg-depth-5/30" />
      </div>
    </motion.div>
  );
};

export default MineralPlaceholder;
