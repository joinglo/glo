import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Membership from "./pages/Membership";
import Nominate from "./pages/Nominate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// The router is supplied by main.tsx (browser) or entry-server.tsx (prerender).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/nominate" element={<Nominate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
