import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Settings, Zap, MessageSquare, Briefcase, FileText, ArrowUpRight, Code, Database, Brain, TrendingUp, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const Roles = () => {
  const evaluationLevels = [
    {
      level: "Level 1",
      title: "Model Evaluation", 
      stakeholders: [
        { name: "AI Engineers", icon: Code, color: "from-blue-500 to-blue-600" },
        { name: "ML Researchers", icon: Database, color: "from-blue-500 to-blue-600" },
        { name: "Domain Experts", icon: BookOpen, color: "from-green-500 to-green-600" }
      ],
      responsibilities: "Build and fine-tune models; run offline tests; ensure relevance and safety; log outputs for downstream use. Early domain input (e.g., educators for tutor bots) is essential.",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      level: "Level 2",
      title: "Product Evaluation",
      stakeholders: [
        { name: "Product Managers", icon: Briefcase, color: "from-purple-500 to-purple-600" },
        { name: "Data Scientists", icon: TrendingUp, color: "from-teal-500 to-teal-600" }
      ],
      responsibilities: "Integrate AI into workflows; track engagement through A/B tests; maintain shared dashboards; align usage data with user behavior and product design.",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      level: "Level 3",
      title: "User Evaluation",
      stakeholders: [
        { name: "Behavioral Scientists", icon: Brain, color: "from-orange-500 to-orange-600" },
        { name: "Psychologists", icon: User, color: "from-orange-500 to-orange-600" }
      ],
      responsibilities: "Measure user outcomes (cognitive, affective, and behavioral) and run A/B tests on these outcomes; run surveys and interviews; co-design metrics with end users; and integrate qualitative insights with usage data",
      bgColor: "from-orange-50 to-amber-50"
    },
    {
      level: "Level 4",
      title: "Impact Evaluation",
      stakeholders: [
        { name: "Economists", icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
        { name: "Policy Analysts", icon: FileText, color: "from-emerald-500 to-emerald-600" }
      ],
      responsibilities: "Evaluate long-term outcomes (e.g., learning, health, income); define theory of change; run RCTs;",
      bgColor: "from-emerald-50 to-green-50"
    }
  ];

  const bestPractices = [
    {
      title: "Look Beyond Your Slices of Evaluation",
      description: "Every team member should understand how their work affects other levels of evaluation. For instance, AI engineers should go beyond benchmarks and ask product or research teams if the model improves user experience. A data scientist looking at engagement (Level 2) might learn more by talking to a behavioral expert (Level 3). Regular cross-functional check-ins focused on the user journey help spot these connections and prevent tunnel vision.",
      icon: Zap
    },
    {
      title: "Pair Engineers with Domain Experts Early",
      description: "Involve domain experts at Level 1 (model evaluation) from the start. Model builders need input from those who understand user needs – teachers, doctors, researchers – to define success beyond technical metrics. This ensures evaluations reflect what really matters for users.",
      icon: Users
    },
    {
      title: "Identify a Cross-Functional Lead",
      description: "Product Managers (or cross-functional leads) should connect the dots across roles, and coordinate timelines, facilitate experiments, and translate insights into decisions. An evaluation plan outlining how a feature will be tested across Levels 1–4 keeps the team aligned on goals and evidence.",
      icon: Briefcase
    },
    {
      title: "Use a Shared Evaluation Language",
      description: "Adopt a common vocabulary using levels (e.g., \"Level 1: better model accuracy, Level 2: more engagement, Level 3: better learning gains, Level 4: better literacy outcomes\"). Document what's been tested and learned in a shared space. This builds memory across the team and avoids reinventing the wheel.",
      icon: MessageSquare
    },
    {
      title: "Use Tools that Support Collaboration",
      description: "Evaluation Platform: A concentrated AI evaluation platform can help track model behavior and user impact in one place. Dashboards & Data Pipelines: Centralized, annotated dashboards can ensure that key metrics are accessible to all. Experimentation Platform: Use lightweight tools (e.g., Evidential to run and track experiments collaboratively. Project & Knowledge Tools: Keep tasks visible, foster quick feedback, and hold regular debriefs for deeper insights.",
      icon: Settings
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Building Repeatable Motions with a Cross-Functional Team
        </h1>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-xl mb-6">
            Building effective AI evaluation practices is fundamentally a team sport. No single role can cover all four evaluation levels – success comes from a cross-functional team in which each member understands their responsibilities and how they complement others.
          </p>
          <p className="text-xl mb-6">
            In leading tech companies, AI product teams are deliberately cross-functional: AI engineers focus on model development, data scientists on analytics, user researchers on human factors, and product managers tie everything together. Adopting this approach in the development sector helps avoid silos and ensures that improvements at one level translate into progress at others.
          </p>
          <p className="text-xl font-medium">
            Below, we outline the typical roles at each level, how they collaborate, the tools that support them, and ways to align team goals with evaluation outcomes.
          </p>
        </div>
      </div>

      {/* Evaluation Levels - Visual Design */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Cross-Functional Roles by Evaluation Level</h2>
        <div className="grid gap-8">
          {evaluationLevels.map((level, index) => (
            <Card key={index} className={`border-0 shadow-lg bg-gradient-to-br ${level.bgColor} backdrop-blur-sm`}>
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{level.level}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary/80">
                        {level.title}
                      </CardDescription>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary/60" />
                </div>
                
                {/* Stakeholder Icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {level.stakeholders.map((stakeholder, stakeholderIndex) => {
                    const IconComponent = stakeholder.icon;
                    return (
                      <div key={stakeholderIndex} className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${stakeholder.color} flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{stakeholder.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="bg-white/60 rounded-xl p-4 border border-white/40">
                  <h4 className="font-semibold text-gray-800 mb-2">Core Responsibilities:</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {level.responsibilities}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900 mb-2">Important Note:</p>
                  <p className="text-sm leading-relaxed text-amber-800">
                    In small teams, one person may wear multiple hats across these levels. What matters is that all four perspectives are represented. For instance, an AI engineer might initially also gather user feedback, but they should still seek input from a behavioral researcher or domain specialist to fill Level 3 considerations. Likewise, product managers should be conversant in model metrics, and researchers should understand product constraints. The team should collectively decide what "enough evaluation" looks like at each stage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Best Practices - Streamlined Cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Best Practices for Cross-Level Collaboration</h2>
        <p className="text-lg text-muted-foreground mb-8">
          From our experiences working with AI4GD organizations, here are the broader best practices that we'd recommend for cross-level collaboration in AI evaluation projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPractices.map((practice, index) => (
            <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <practice.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg leading-tight">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Supporting Note */}
      <div className="mb-16">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900 mb-2">Note:</p>
                <p className="text-sm leading-relaxed text-blue-800">
                  Besides tooling around repeatable motions, in the following sections of this introductory playbook, we'll also share an initial overview of the key resources and tools available for each phase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">See it in action</h3>
          <p className="text-muted-foreground">Explore real-world case studies from development projects</p>
        </div>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
          <Link to="/case-studies">
            Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Roles;