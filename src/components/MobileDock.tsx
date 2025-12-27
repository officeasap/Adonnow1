import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, Target, Briefcase, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/minerals", icon: Target, label: "Minerals" },
  { path: "/services", icon: Briefcase, label: "Services", children: [
      { path: "/who-we-are", label: "Who We Are" },
      { path: "/our-vision", label: "Vision" },
      { path: "/expertise", label: "Expertise" },
    ]
  },
  { path: "/contact", icon: Phone, label: "Contact" },
];

export const MobileDock = () => {
  const location = useLocation();
  const [openServices, setOpenServices] = useState(false);

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 mobile-dock md:hidden bg-canvas neu-raised"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center justify-between h-full px-4 py-3 safe-area-inset-bottom">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0 mr-4">
          <img
            src="/images/LogoAdonnowOfficial.png"
            alt="Adonnow Limited Logo"
            className="h-9 w-auto neu-raised p-1"
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex flex-1 items-center justify-around gap-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <div key={item.path} className="relative flex-1 h-full">
                <NavLink
                  to={item.path}
                  className="flex-1 h-full"
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      setOpenServices(!openServices);
                    }
                  }}
                >
                  <motion.div
                    className={cn(
                      "flex flex-col items-center justify-center h-full gap-1 px-3 py-2",
                      "transition-colors touch-target",
                      isActive ? "text-text-highlight" : "text-text-secondary"
                    )}
                    whileTap={{
                      y: 2,
                      transition: { type: "spring", stiffness: 400, damping: 25 },
                    }}
                  >
                    <motion.div
                      className={cn(
                        "p-3 rounded-[18px] transition-all duration-200",
                        isActive ? "neu-sunken" : "hover:bg-depth-3/30"
                      )}
                      animate={isActive ? { y: 2 } : { y: 0 }}
                    >
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    </motion.div>
                    <span className="text-xs font-body tracking-wide">
                      {item.label}
                    </span>
                  </motion.div>
                </NavLink>

                {/* Child menu under Services */}
                {item.children && openServices && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-canvas neu-raised rounded-lg shadow-lg p-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="px-4 py-2 rounded-[12px] text-sm font-body neu-button text-text-secondary hover:text-text-primary"
                        onClick={() => setOpenServices(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default MobileDock;

