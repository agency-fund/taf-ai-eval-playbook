import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Framework from "./pages/Framework";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Level4 from "./pages/Level4";
import Motions from "./pages/Motions";
import Roles from "./pages/Roles";
import CaseStudies from "./pages/CaseStudies";
import Methods from "./pages/Methods";
import Glossary from "./pages/Glossary";
import ModelEvaluation from "./pages/tools/ModelEvaluation";
import InteractiveTools from "./pages/tools/InteractiveTools";
import UserEvaluationIntroduction from "./pages/tools/UserEvaluationIntroduction";
import UserEvaluationBehavioral from "./pages/tools/UserEvaluationBehavioral";
import UserEvaluationMetrics from "./pages/tools/UserEvaluationMetrics";
import UserEvaluationNLP from "./pages/tools/UserEvaluationNLP";
import L3MeasurePractice from "./pages/tools/L3MeasurePractice";
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
            <Route path="/level1" element={<Level1 />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/level3" element={<Level3 />} />
            <Route path="/level4" element={<Level4 />} />
            <Route path="/motions" element={<Motions />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/tools" element={<InteractiveTools />} />
            <Route path="/tools/model-evaluation" element={<ModelEvaluation />} />
            <Route path="/tools/user-evaluation-introduction" element={<UserEvaluationIntroduction />} />
            <Route path="/tools/user-evaluation-behavioral" element={<UserEvaluationBehavioral />} />
            <Route path="/tools/user-evaluation-metrics" element={<UserEvaluationMetrics />} />
            <Route path="/tools/user-evaluation-nlp" element={<UserEvaluationNLP />} />
            <Route path="/tools/l3-measure-practice" element={<L3MeasurePractice />} />
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
