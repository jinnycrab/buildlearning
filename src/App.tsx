
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import CampDetails from "./pages/CampDetails";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Pedagogy from "./pages/Pedagogy";
import Resources from "./pages/Resources";
import StudentProjects from "./pages/StudentProjects";
import WhatsAppButton from "./components/common/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/camp/:id" element={<CampDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Pedagogy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/camps" element={<CampDetails />} />
          <Route path="/projects" element={<StudentProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
