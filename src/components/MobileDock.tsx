import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, Target, Briefcase, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/who-we-are", icon: Users, label: "About" },
  { path: "/minerals", icon: Target, label: "Minerals" },
  { path: "/services", icon: Briefcase, label: "Services" },
  { path: "/contact", icon: Phone, label: "Contact" },
];

export const MobileDock = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 mobile-dock md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center justify-around h-full px-2 safe-area-inset-bottom">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex-1 h-full"
            >
              <motion.div
                className={cn(
                  "flex flex-col items-center justify-center h-full gap-1",
                  "text-text-secondary transition-colors touch-target",
                  isActive && "text-text-highlight"
                )}
                whileTap={{
                  y: 2,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
              >
                <motion.div
                  className={cn(
                    "p-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "neu-sunken"
                      : "hover:bg-depth-3/30"
                  )}
                  animate={isActive ? { y: 2 } : { y: 0 }}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span className="text-xs font-body haptic-text-1">
                  {item.label}
                </span>
              </motion.div>
            </NavLink>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileDock;
