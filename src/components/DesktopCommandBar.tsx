import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NeuButton from "./NeuButton";
import { Phone } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/who-we-are", label: "Who We Are" },
  { path: "/our-vision", label: "Vision" },
  { path: "/expertise", label: "Expertise" },
  { path: "/minerals", label: "Minerals" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

export const DesktopCommandBar = () => {
  return (
    <motion.header
      className="hidden md:flex fixed top-0 left-0 right-0 z-40 command-bar items-center justify-between px-8"
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Logo */}
      <NavLink to="/" className="flex-shrink-0">
        <Logo size="md" />
      </NavLink>

      {/* Navigation - Light gray text, NO GOLD */}
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-[18px] font-body text-sm transition-all duration-200 ${
                isActive
                  ? "text-text-highlight neu-sunken"
                  : "text-text-secondary hover:text-text-primary hover:bg-depth-2/50"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <NeuButton
        variant="raised"
        size="sm"
        icon={<Phone size={16} />}
        onClick={() => window.location.href = "tel:+254707513272"}
      >
        +254 707 513 272
      </NeuButton>
    </motion.header>
  );
};

export default DesktopCommandBar;
