import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MobileDock from "./components/MobileDock";
import DesktopCommandBar from "./components/DesktopCommandBar";

// Pages
import WhoWeAre from "./pages/WhoWeAre";
import OurVision from "./pages/OurVision";
import Expertise from "./pages/Expertise";
import Minerals from "./pages/Minerals";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ MOBILE FLOATING LOGO (PNG, GLOBAL) */}
        <div className="fixed top-4 left-4 z-50 md:hidden pointer-events-auto">
          <img
            src="/images/LogoAdonnowOfficial.png"
            alt="Adonnow Trading Limited"
            className="h-9 w-auto neu-raised p-1"
          />
        </div>

        <DesktopCommandBar />

        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/minerals" element={<Minerals />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <MobileDock />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

