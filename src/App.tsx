import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Framework from "./pages/Framework";
import Motions from "./pages/Motions";
import Roles from "./pages/Roles";
import CaseStudies from "./pages/CaseStudies";
import Methods from "./pages/Methods";
import Glossary from "./pages/Glossary";
import FrameworkBuilder from "./pages/tools/FrameworkBuilder";
import Planning from "./pages/tools/Planning";
import Metrics from "./pages/tools/Metrics";
import NotFound from "./pages/NotFound";
import Authors from "./pages/Authors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/motions" element={<Motions />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/tools/framework-builder" element={<FrameworkBuilder />} />
            <Route path="/tools/planning" element={<Planning />} />
            <Route path="/tools/metrics" element={<Metrics />} />
            <Route path="/authors" element={<Authors />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
