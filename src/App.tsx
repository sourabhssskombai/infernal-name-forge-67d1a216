
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import BlogPage from "./pages/blog/BlogPage";
import TieflingNamingConventions from "./pages/blog/TieflingNamingConventions";
import TieflingSubraceGuide from "./pages/blog/TieflingSubraceGuide";
import RoleplayingTieflings from "./pages/blog/RoleplayingTieflings";
import FamousTieflings from "./pages/blog/FamousTieflings";
import TieflingClassCombos from "./pages/blog/TieflingClassCombos";
import TieflingOrigins from "./pages/blog/TieflingOrigins";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/tiefling-naming-conventions" element={<TieflingNamingConventions />} />
        <Route path="/blog/tiefling-subrace-guide" element={<TieflingSubraceGuide />} />
        <Route path="/blog/roleplaying-tieflings" element={<RoleplayingTieflings />} />
        <Route path="/blog/famous-tieflings" element={<FamousTieflings />} />
        <Route path="/blog/tiefling-class-combos" element={<TieflingClassCombos />} />
        <Route path="/blog/tiefling-origins" element={<TieflingOrigins />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
