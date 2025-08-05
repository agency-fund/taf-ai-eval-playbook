import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Target, Zap, GitBranch, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Motions = () => {
  const motions = [
    {
      number: "01",
      title: "Construct a clear user funnel across Levels 1-4",
      icon: <Target className="w-6 h-6" />,
      description: "One of the most useful motions in AI for the social sector is the construction of a user funnel – a structured way to map how individuals move through your product or program, from first exposure to long-term life impact.",
      fullContent: `A comprehensive funnel does more than describe usage of a product; it creates a shared framework for tracking a user's experience through a journey. It surfaces weak points along the user journey, and creates a common focus for all four levels of evaluation.

To build a robust funnel, teams should begin by defining the final development outcome they're targeting (Level 4) – for instance, improved learning outcomes, better health decisions, or increased crop yields. From there, work backward to break down the journey into specific user stages. A typical funnel includes:

• Recruitment – The beneficiary is identified and enters the program. (Level 2)
• Onboarding – The user is introduced to the AI product and completes initial setup. (Level 2)
• Engagement – The user begins actively interacting with the AI product (Level 2). Level 1 evaluation may continue as needed to monitor model behavior.
• Retention – The user continues engaging with the AI product over time, rather than dropping off (Level 2). Level 1 evaluation may continue as needed to monitor model behavior.
• Proximal Outcome – The user demonstrates near-term cognitive or behavioral change (Level 3). Level 1 evaluation may continue as needed to monitor model behavior.
• Development Outcome – The user achieves the desired long-term result (Level 4).

For each stage, teams should clearly define:
• What the program does to bring users into that stage.
• What the user must do to count as having entered the stage.
• The metric that confirms entry into the stage (e.g., login rate, session length, quiz completion).
• Target metric values and transition rates between stages.
• Costs associated with moving a user through a given stage.
• DRIs (Directly Responsible Individuals) for performance and metrics at each stage.

This structure transforms a generic theory of change into a measurable, cost-aware program design tool. It enables product teams to track performance over time, pinpointing user drop-offs or failure points. It exposes how well a user's behavior aligns with the product's intended outcomes. It also gives funders and evaluators clear indicators of where progress is occurring and where it's stalling. For instance, a shift in prompt design (Level 1) can be traced through to changes in engagement (Level 2), user behavior (Level 3), and finally into human development outcomes (Level 4).`
    },
    {
      number: "02", 
      title: "Build and track metrics through robust ETL pipelines",
      icon: <Database className="w-6 h-6" />,
      description: "A well-designed evaluation framework is only as good as the data infrastructure that supports it. At the heart of that infrastructure is a robust ETL pipeline – a system that Extracts, Transforms, and Loads data to power consistent, reliable measurement of program indicators.",
      fullContent: `An ETL pipeline is a system that Extracts, Transforms, and Loads data to power consistent, reliable measurement.

• Extract: Collect data from various sources – chat logs, product telemetry, survey tools, third-party APIs, or even spreadsheets.
• Transform: Clean, standardize, and reshape the raw data into a usable format. This could involve timestamp alignment, anonymization, session stitching, or deriving new metrics like time-on-task or trust indicators.
• Load: Store the transformed data in a centralized system (like a data warehouse or analytics dashboard) where teams can access it for analysis, visualization, or modeling.

AI products, especially those using generative models, produce high volumes of complex, often unstructured data: prompts, outputs, clicks, feedback, engagement patterns, and more. Without a clear ETL pipeline, it becomes impossible to turn this raw data into actionable metrics at scale. For example, imagine a product designed to support adolescent mental health. It might collect:

• Model-level outputs (Level 1): response quality, toxicity flags, factuality scores.
• Engagement logs (Level 2): sessions per user, conversation length, feature use.
• Behavioral indicators (Level 3): changes in sentiment or self-reported stress levels.
• Outcome data (Level 4): improvement in standardized well-being scores over time.

To make sense of this, the team needs a pipeline that can integrate various data sets – raw logs from their LLM service, frontend product analytics, periodic user surveys, and outcomes data – and then shape them into consistent indicators for each level of evaluation.`
    },
    {
      number: "03",
      title: "Diagnose weak links through targeted hypotheses", 
      icon: <Zap className="w-6 h-6" />,
      description: "Once a user funnel is in place and metrics are flowing through a robust ETL pipeline, the next challenge is understanding why certain funnel metrics are underperforming. We start by identifying major user drop-offs along the funnel: if users are not engaging, they are unlikely to be benefiting from a product.",
      fullContent: `Next, we must explore the causes of drop-off. This is where targeted hypotheses become essential. Rather than jumping to conclusions or relying on intuition, teams can develop targeted hypotheses to pose specific, testable questions about user behavior: Why are users stalling here? What mechanism might explain this drop-off? What change could move the needle? This approach sits at the intersection of product management and behavioral science. It acknowledges that while product development is nonlinear, evaluation must remain disciplined and driven by clearly defined learning goals.

Importantly, this doesn't mean evaluation should dictate what teams build; rather, it means that evaluation should clarify what needs to be understood. For example, if engagement dips after onboarding, evaluators might surface competing hypotheses: Is the product's value proposition unclear? Are users overwhelmed by the interface? Do they mistrust the AI? 

Each hypothesis then becomes a lens for focused measurement or experiments, often co-designed with product, user research, and behavioral science leads. This makes evaluation generative: it is not just a judgment of what works, but a process that helps teams ask better questions, faster.`
    },
    {
      number: "04",
      title: "Run experiments with rigor and speed",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Once hypotheses are defined, the next step is to test them through experimentation. In the context of AI evaluation, experimentation is the bridge between observing a problem and understanding what causes it.",
      fullContent: `Whether it's an A/B test, a hold-out test, a pragmatic Randomized Controlled Trial (RCT), or a full-scale RCT, the goal is the same: to generate credible, causal evidence about what interventions improve user outcomes. This step is crucial for turning evaluation from a descriptive activity into a decision-making tool.

Experimentation should be matched to the maturity of the product, the scale of the hypothesis, and the type of decision at hand. For lightweight product tweaks like changing a prompt or onboarding message, A/B tests are often the fastest and most cost-effective approach. For more complex behavioral shifts or policy-relevant questions, teams might deploy staggered rollouts or holdout-based designs. In some cases, a full RCT may be warranted, but only when the causal question justifies the cost.

Across AI4GD teams, we've seen experimentation work best when it's integrated into ongoing development. Structured templates, clear success metrics, and tools like Evidential help teams automate randomization, track real-time results, and reduce analysis bottlenecks. More importantly, a culture of experimentation creates room for continuous learning. Each result, positive or not, refines the product, sharpens the theory of change, and builds institutional knowledge.`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-16 -mx-6 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Repeatable Motions in AI Evaluation
        </h1>
      </div>

      <div className="mb-12 -mx-6 px-6">
        <div className="prose prose-lg max-w-none text-black leading-relaxed">
          <p className="text-md mb-6">
            Our experience suggests that the success of GenAI products relies on <strong>building practical tools that connect and operationalize all four levels of AI evaluation in real time</strong>. Unlike traditional social sector interventions, which can be cumbersome to iteratively modify and retest, GenAI allows for precise control over the product's configuration, deployment, and monitoring. Like many digital services, GenAI products also enable the passive collection of rich interaction data, creating opportunities to continuously analyze, iterate, and improve. 
          </p>
          <p className="text-md mb-6">
            For example, the deployment of a GenAI chatbot can be configured to automatically flag when a change in prompt improves model helpfulness (Level 1) or unexpectedly reduces user trust (Level 3). You can also build model pipelines that flag when a new product feature boosts short-term engagement (Level 2), but fails to shift long-term outcomes (Level 4). The sort of end-to-end instrumentation that we describe in this playbook allows organizations to move beyond static intervention design and delivery, toward <strong>"repeatable motions"</strong> that are embedded in AI product development cycles, and enable continuous improvement.
          </p>
          <p className="text-md mb-6">
            What are these "repeatable motions"? We lay out below four concrete, actionable steps that move evaluation from theory into practice. 
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Four Concrete, Actionable Steps</h2>

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
                    <CardDescription className="text-lg text-black">
                      {motion.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-6 border border-border/30">
                  <div className="prose prose-sm max-w-none">
                    <div className="text-foreground/90 leading-relaxed space-y-4">
                      {motion.fullContent.split('\n\n').map((paragraph, index) => {
                        if (paragraph.includes('•')) {
                          const lines = paragraph.split('\n');
                          return (
                            <div key={index} className="space-y-2">
                              {lines.map((line, lineIndex) => {
                                if (line.trim().startsWith('•')) {
                                  return (
                                    <div key={lineIndex} className="flex items-start gap-3">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                      <p className="text-sm leading-relaxed">{line.replace('•', '').trim()}</p>
                                    </div>
                                  );
                                } else if (line.trim()) {
                                  return <p key={lineIndex} className="text-sm leading-relaxed">{line}</p>;
                                }
                                return null;
                              })}
                            </div>
                          );
                        } else {
                          return <p key={index} className="text-sm leading-relaxed">{paragraph}</p>;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-taf-yellow/5 to-taf-yellow/10 border-taf-yellow/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-taf-yellow rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-taf-blue" />
              </div>
              <div>
                <CardTitle className="text-2xl text-taf-blue">Building Repeatable Motions through an AI Evaluation Platform</CardTitle>
                <CardDescription className="text-taf-blue/80">Creating unified infrastructure for systematic evaluation</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white/70 rounded-xl p-6 border border-taf-yellow/20">
              <div className="prose prose-sm max-w-none">
                <div className="text-taf-blue leading-relaxed space-y-4">
                  <p className="text-sm leading-relaxed">
                    To host the essential repeatable motions, we are creating a <strong>unified platform</strong> that can systematically <strong>instrument, track, and optimize</strong> evaluation across all four levels. Specifically, this <strong>AI evaluation platform</strong> allows teams to track changes to models (e.g., prompt tweaks, fine-tuning), measure their downstream impact on engagement (Level 2), user cognition, emotion, and behavior (Level 3), and development outcomes (Level 4), and close the loop through integrated feedback and versioning tools. This would enable organizations to make evidence-based decisions at every stage of AI product development and deployment.
                  </p>
                  
                  <p className="text-sm leading-relaxed">
                    Unlike traditional development interventions, generative AI systems offer two key advantages:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Passive, high-resolution data capture of on-platform interactions and behavior, and</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Precise, version-controlled deployment of models and product features.</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed">
                    These properties respectively map to outcomes and interventions allowing for a <strong>rigorous, tech-enabled approach</strong> to continuous evaluation. But today, most social sector organizations lack the tools to make use of that potential. Evaluation often happens in silos – spread across spreadsheets, analytics dashboards, user interviews, and research reports – without a central system to connect the dots or guide action.
                  </p>

                  <p className="text-sm leading-relaxed">
                    We envision building an <strong>AI evaluation platform</strong> that supports:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Version-aware evaluation pipelines, where each model change (e.g., new prompt, fine-tuned model, updated retrieval source) is logged, compared, and tested across all evaluation levels.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Real-time metric tracking from model performance (Level 1) through to user retention (Level 2), changes in cognition, emotion, and behavior (Level 3), and development outcomes – where feasible (Level 4).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Integrated experiment frameworks that allow teams to run A/B tests, holdout studies, or pragmatic RCTs on product variations and their effects on user behavior or impact metrics.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Custom metric builders that let teams define what matters in their context (e.g., empathy in a mental health bot, or cultural relevance in a chatbot using low-resource languages).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">Safety auditing tools that flag hallucinations, toxicity, or failures in grounding across both automated and human-in-the-loop evaluations.</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed">
                    The platform would ideally integrate with existing tools such as <strong>Langfuse</strong>, <strong>Helicone</strong>, <strong>Traceloop</strong>, and <strong>Evidential</strong>, combining model observability with behavioral analytics, survey pipelines, and impact reporting. It would enable organizations to track how a model tweak made today propagates through user behavior in a month and potentially improves outcomes a year from now.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>



      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Build your evaluation team</h3>
          <p className="text-black">Learn about roles and responsibilities for effective evaluation</p>
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