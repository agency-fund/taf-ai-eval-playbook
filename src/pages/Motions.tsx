import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Target, Zap, GitBranch, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Motions = () => {
  const motions = [
    {
      number: "01",
      title: "Constructing a clear user funnel across Levels 1-4",
      icon: <Target className="w-6 h-6" />,
      description: "Map how individuals move through your product, from first exposure to long-term impact with a structured framework.",
      content: [
        "Define the final development outcome (Level 4) - improved learning, health decisions, or crop yields",
        "Work backward to break down the journey into specific user stages",
        "Structure includes: Recruitment → Onboarding → Engagement → Retention → Proximal Outcome → Development Outcome",
        "For each stage, define what the program does, what users must do, metrics that confirm entry, target values, and associated costs"
      ],
      highlight: "Transforms a generic funnel into a measurable, cost-aware tool that enables tracking progress and pinpointing drop-offs."
    },
    {
      number: "02", 
      title: "Building metrics through robust ETL pipelines",
      icon: <Database className="w-6 h-6" />,
      description: "Extract, Transform, and Load data to power consistent, reliable measurement across all evaluation levels.",
      content: [
        "Extract: Collect from model logs, product telemetry, surveys, APIs, and spreadsheets",
        "Transform: Clean, standardize, and reshape raw data - timestamp alignment, anonymization, session stitching",
        "Load: Store in centralized systems for team access, analysis, and visualization",
        "Handle high volumes of complex, unstructured data from generative models"
      ],
      highlight: "Without clear ETL pipelines, it becomes impossible to turn raw AI product data into actionable metrics at scale."
    },
    {
      number: "03",
      title: "Diagnosing weak links through targeted hypotheses", 
      icon: <Zap className="w-6 h-6" />,
      description: "Use specific, testable questions to understand why metrics underperform rather than relying on intuition.",
      content: [
        "Pose targeted questions: Why are users stalling? What explains this drop-off? What change could move the needle?",
        "Surface competing hypotheses: unclear value proposition, overwhelming interface, AI mistrust",
        "Each hypothesis becomes a lens for focused measurement or experiments",
        "Co-design with product, user research, and behavioral science leads"
      ],
      highlight: "Makes evaluation generative - not just judging what works, but helping teams ask better questions, faster."
    },
    {
      number: "04",
      title: "Running experiments with rigor and speed",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Test hypotheses through experimentation to generate credible, causal evidence about interventions.",
      content: [
        "Match experimentation to product maturity: A/B tests for prompt changes, RCTs for policy questions",
        "Use structured templates, clear success metrics, and automation tools",
        "Integrate into ongoing development cycles for continuous learning",
        "Each result refines the product, sharpens theory of change, and builds institutional knowledge"
      ],
      highlight: "Transforms evaluation from a descriptive activity into a decision-making tool through causal evidence."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Repeatable Motions in AI Evaluation
        </h1>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-xl mb-6">
            We strongly believe the success of AI evaluation depends on building practical tools that connect and operationalize all four levels in real time. Unlike traditional development interventions, generative AI systems allow for precise control over deployment and the passive collection of rich interaction data.
          </p>
          <p className="text-lg mb-6">
            This creates a unique opportunity to evaluate, iterate, and improve continuously. For example, a deployment could automatically flag when a change that improves model helpfulness (Level 1) unexpectedly reduces user trust (Level 3), or when a product that boosts short-term engagement fails to shift long-term outcomes (Level 4).
          </p>
          <p className="text-lg font-medium">
            This kind of end-to-end instrumentation allows us to move beyond static best practices toward repeatable motions that are tested, iterated, and embedded in real AI development cycles.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Four Concrete, Actionable Steps</h2>
        <p className="text-lg text-muted-foreground mb-12">
          These motions move evaluation from theory into practice with speed and discipline.
        </p>
        
        <div className="space-y-12">
          {motions.map((motion, index) => (
            <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl border border-primary/20">
                    {motion.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-mono font-bold text-primary/70">{motion.number}</span>
                      <CardTitle className="text-2xl leading-tight">{motion.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground">
                      {motion.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {motion.content.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-sm leading-relaxed">{motion.highlight}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-xl">Supporting Tools & Playbooks</CardTitle>
                <CardDescription className="text-amber-700/80">Resources to accelerate implementation</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white/70 rounded-lg p-6 border border-amber-200/50">
              <p className="text-sm leading-relaxed text-amber-900/90">
                <strong>Note:</strong> To support this vision of repeatable motions, TAF is developing a suite of practical playbooks to complement the AI Evaluation Playbook, focused on user funnels, user research, product design, and experimentation. Each playbook offers actionable guidance and tools to help teams move from insight to impact with speed and discipline.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Build your evaluation team</h3>
          <p className="text-muted-foreground">Learn about roles and responsibilities for effective evaluation</p>
        </div>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
          <Link to="/roles">
            Roles & Best Practices <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Motions;