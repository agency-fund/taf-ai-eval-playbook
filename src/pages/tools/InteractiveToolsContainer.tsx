import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useLocation } from "react-router-dom";
import InteractiveTools from "./InteractiveTools";
import ModelEvaluation from "./ModelEvaluation";
import UserEvaluationIntroduction from "./UserEvaluationIntroduction";
import UserEvaluationBehavioral from "./UserEvaluationBehavioral";
import UserEvaluationMetrics from "./UserEvaluationMetrics";
import UserEvaluationNLP from "./UserEvaluationNLP";

const InteractiveToolsContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  // Map route paths to tab values
  const getTabFromPath = (pathname: string) => {
    if (pathname === "/tools/model-evaluation") return "model-evaluation";
    if (pathname === "/tools/user-evaluation-introduction") return "user-intro";
    if (pathname === "/tools/user-evaluation-behavioral") return "user-behavioral";
    if (pathname === "/tools/user-evaluation-metrics") return "user-metrics";
    if (pathname === "/tools/user-evaluation-nlp") return "user-nlp";
    return "overview";
  };

  const activeTab = searchParams.get("tab") || getTabFromPath(location.pathname);

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Interactive Tools</TabsTrigger>
            <TabsTrigger value="model-evaluation">Model Evaluation</TabsTrigger>
            <TabsTrigger value="user-intro">User Intro</TabsTrigger>
            <TabsTrigger value="user-behavioral">User Behavioral</TabsTrigger>
            <TabsTrigger value="user-metrics">User Metrics</TabsTrigger>
            <TabsTrigger value="user-nlp">User NLP</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <InteractiveTools />
          </TabsContent>
          
          <TabsContent value="model-evaluation" className="mt-0">
            <ModelEvaluation />
          </TabsContent>
          
          <TabsContent value="user-intro" className="mt-0">
            <UserEvaluationIntroduction />
          </TabsContent>
          
          <TabsContent value="user-behavioral" className="mt-0">
            <UserEvaluationBehavioral />
          </TabsContent>
          
          <TabsContent value="user-metrics" className="mt-0">
            <UserEvaluationMetrics />
          </TabsContent>
          
          <TabsContent value="user-nlp" className="mt-0">
            <UserEvaluationNLP />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InteractiveToolsContainer;