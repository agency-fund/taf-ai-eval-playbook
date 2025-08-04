import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Shield, Settings, Users, TrendingUp, AlertTriangle, BookOpen, FileText, Users2, Globe, Activity, Zap, CheckCircle, XCircle, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "@/components/ExternalLink";

const Level4 = () => {
  const keyMetrics = [
    {
      title: "Development Outcomes",
      description: "Long-term, measurable improvements in areas like health, education, income, or overall well-being",
      examples: ["Health improvements", "Educational attainment", "Income increases", "Well-being measures"],
      icon: TrendingUp
    },
    {
      title: "Cost-Effectiveness",
      description: "Assessment of impact relative to cost, enabling comparison with other interventions",
      examples: ["Cost per outcome achieved", "Return on investment", "Cost-benefit analysis"],
      icon: BarChart3
    },
    {
      title: "Scalability Evidence",
      description: "Evidence that the intervention can be effectively scaled to larger populations",
      examples: ["Replication studies", "Multi-site evaluations", "Policy adoption evidence"],
      icon: Globe
    }
  ];

  const evaluationMethods = [
    {
      title: "Randomized Controlled Trials (RCTs)",
      description: "Gold standard for establishing causal relationships between interventions and outcomes",
      icon: CheckCircle,
      details: "Random assignment to treatment and control groups to isolate intervention effects"
    },
    {
      title: "Quasi-Experimental Designs",
      description: "Alternative approaches when RCTs are not feasible or ethical",
      icon: Activity,
      details: "Natural experiments, regression discontinuity, difference-in-differences"
    },
    {
      title: "Longitudinal Studies",
      description: "Tracking outcomes over extended periods to measure sustained impact",
      icon: Clock,
      details: "Multi-year follow-up studies to assess long-term effects"
    }
  ];

  const designConsiderations = [
    {
      title: "Selecting the Right Counterfactual",
      description: "What would participants receive in the absence of the AI tool?",
      icon: Target,
      details: [
        "Business-as-usual (no digital support, sporadic human guidance)",
        "Non-AI digital tools (static chatbots or curated content)",
        "Human-delivered services (when AI substitutes for scarce professional labor)"
      ]
    },
    {
      title: "Contextual Sensitivity",
      description: "AI's marginal benefit depends on existing environment and capabilities",
      icon: Globe,
      details: [
        "Be explicit about latent alternatives",
        "Consider heterogeneity by geography, institution, or digital access",
        "High-resource vs. low-capacity settings"
      ]
    },
    {
      title: "Managing Product Dynamism",
      description: "AI systems are rarely static - models may be continuously retrained",
      icon: Settings,
      details: [
        "Freeze product versions during trials where possible",
        "Version tagging and audit trails for continuous learning",
        "Managing adaptive or personalized systems",
        "Retraining and data updates protocols"
      ]
    },
    {
      title: "Measuring True Development Outcomes",
      description: "AI tools often simulate expertise - but does the user learn or just copy?",
      icon: Users,
      details: [
        "Use industry standard validated assessments",
        "Leverage administrative data for credible measurement",
        "Avoid measurement tools that can be gamed by repeating AI output"
      ]
    },
    {
      title: "Randomization Strategy",
      description: "Managing spillovers and contamination in AI product evaluations",
      icon: Shield,
      details: [
        "Individual or cluster randomization for controlled access",
        "Randomized encouragement design for publicly available products",
        "Cluster randomization to reduce spillovers",
        "Monitor usage and adjust power calculations if needed"
      ]
    }
  ];

  const commonPitfalls = [
    {
      title: "Being Underpowered",
      description: "Even if your product has real impact, an underpowered study may fail to detect it",
      icon: AlertTriangle,
      details: [
        "Ensure adequate representation of subgroups",
        "Consider stratified randomization for subgroup analysis",
        "Account for heterogeneous effects across populations"
      ]
    },
    {
      title: "Weak or Noisy Measurement",
      description: "No evaluation is better than its outcomes",
      icon: XCircle,
      details: [
        "Invest in one-off high-quality measurement",
        "Use validated instruments for comparison",
        "Clear, interpretable metrics matter for both learning and persuasion"
      ]
    },
    {
      title: "Mismanaging Transparency",
      description: "RCTs should build confidence through credible, independent investigation",
      icon: Shield,
      details: [
        "Involve credible, independent investigators",
        "Share data where appropriate",
        "Pre-specify key measures and analytic strategies",
        "Balance rigor and responsiveness"
      ]
    },
    {
      title: "Letting Product Evolution Obscure Analysis",
      description: "If your product is likely to change during the study, pre-specify how changes will be handled",
      icon: Settings,
      details: [
        "Freeze a version for the trial when possible",
        "Log all changes and version-tag exposure",
        "Use metadata in analysis to test for improvements or degradations"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/framework" className="text-black hover:text-taf-blue transition-colors">
            ← Back to Framework
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6">Level 4: Impact Evaluation</h1>
        <p className="text-xl text-black leading-relaxed max-w-3xl">
          Assessment of whether the AI product improves long-term development outcomes. This level focuses on 
          measuring real-world impact and establishing causal relationships between the intervention and outcomes.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-taf-yellow/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 border-green-200 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg text-black">
                  Does the product improve development outcomes?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why is this level of evaluation important?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Even if levels 1–3 show that the technology functions well, users are engaged, and data suggests 
            improved knowledge or behaviors, organizations deploying AI for social good ultimately care whether 
            their solutions improve users' health, income, well-being, or other development outcomes.
          </p>
          <p>
            <ExternalLink href="https://www.povertyactionlab.org/resource/introduction-randomized-evaluations">
              Randomized evaluations
            </ExternalLink>{" "}
            offer the most credible way to measure this, clearly attributing changes in 
            outcomes to the intervention. Without doing these evaluations, we risk overinvestment in products 
            that feel good, at the expense of investing those resources in products that actually do good.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription className="text-black">Behavioral Researchers and/or Economists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Apply evaluation methods with the proper measurement tools.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Data Scientists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Support design of randomized experiments.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Engineers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Ensure that the product functions as expected throughout the evaluation phase.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why do an RCT?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            For nonprofits working with AI products, the goal of an RCT is not just academic—it is strategic. 
            Funders increasingly expect rigorous evidence that a product improves people's lives, beyond engagement 
            or satisfaction metrics. A well-designed RCT sends a clear signal that your product delivers real, 
            measurable impact—on learning, health, livelihoods, or other development outcomes.
          </p>
          <p>
            Moreover, when paired with cost data, an RCT allows you to make claims about cost-effectiveness. 
            This can be critical when seeking support from donors, governments, or multilateral institutions who 
            must weigh competing priorities. In many cases, the result of an RCT becomes the key input in decisions 
            to scale, adopt, or exit.
          </p>
          <p>
            In short: if your product works, an RCT is how you prove it.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When is it appropriate to do an RCT?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            RCTs are high-investment undertakings. They are most useful when your product is mature enough to test 
            and when the decision stakes are high enough to justify the effort. In general, consider an RCT when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Levels 1–3 are strong:</strong> The model performs well, users engage meaningfully, and early evidence suggests improvements in knowledge, attitudes, or behavior.</li>
            <li><strong>You are preparing to scale:</strong> Funders or policymakers are considering wider adoption, but want evidence to support the decision.</li>
            <li><strong>You have bandwidth:</strong> Implementing an RCT is a lot of work for both the research team and implementer; doing it well takes time and effort.</li>
            <li><strong>You are confident your product works:</strong> The world may be uncertain that your product has a meaningful impact but you shouldn't be. Your internal research should give you confident priors that you'll find treatment effects.</li>
          </ul>
          <p>
            You do <em>not</em> need to run an RCT if your product is still in early design, if usage is inconsistent, 
            or if key hypotheses about mechanism remain untested. In those cases, Level 3 evaluations—focused on user 
            cognition and behavior—can be more appropriate.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How to do an RCT responsibly</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Rigorous RCTs require expertise. In almost all cases, we recommend working with an{" "}
            <strong>independent evaluator</strong>—such as an academic partner, a research NGO (e.g. J-PAL, IPA), 
            or a third-party M&E firm. This enhances both the technical quality and the perceived credibility of your evaluation.
          </p>
          <p>At minimum, we suggest:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clarifying roles:</strong> who builds the product, who runs the study, who communicates findings</li>
            <li><strong>Pre-registering the design:</strong> on platforms such as the AEA RCT Registry or EGAP</li>
            <li><strong>Sharing results transparently:</strong> including null or negative findings</li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Running RCTs on AI Products</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">A Quick Primer on RCT Design</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6">
            <p>
              At its core, an RCT compares outcomes between two (or more) groups that differ only in whether they 
              received the intervention. Random assignment ensures that, on average, the groups are comparable at baseline. 
              Any difference in outcomes can then be causally attributed to the intervention.
            </p>
            <p>
              For a step-by-step guide to RCT planning—including sampling, power calculations, randomization, and analysis—we strongly recommend:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>• <ExternalLink href="https://openknowledge.worldbank.org/server/api/core/bitstreams/4659ef23-61ff-5df7-9b4e-89fda12b074d/content">Impact Evaluation in Practice</ExternalLink> (World Bank)</li>
              <li>• <ExternalLink href="https://www.amazon.co.uk/Running-Randomized-Evaluations-Practical-Guide/dp/0691159270">Running Randomized Evaluations</ExternalLink> (Glennerster & Takavarasha, MIT Press)</li>
            </ul>
            <p>
              In this section, we do not replicate that guidance. Instead, we focus on what is <em>distinctive</em> when 
              evaluating AI-based products in the development sector.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Key Design Considerations for AI-Specific RCTs</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6">
            <p>
              With the increased evaluations of AI products, distinct challenges for impact evaluation are emerging. 
              Below are some considerations that merit special attention.
            </p>
          </div>
          
          <div className="space-y-8">
            {designConsiderations.map((consideration, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                      <consideration.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{consideration.title}</CardTitle>
                      <CardDescription className="text-base text-black">{consideration.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-black">
                    {consideration.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Common Pitfalls to Avoid</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6">
            <p>
              RCTs are high-leverage, high-cost undertakings. Avoiding a few predictable errors can significantly 
              improve the value—and credibility—of your results.
            </p>
          </div>
          
          <div className="space-y-8">
            {commonPitfalls.map((pitfall, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                      <pitfall.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pitfall.title}</CardTitle>
                      <CardDescription className="text-base text-black">{pitfall.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-black">
                    {pitfall.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                    <CardDescription className="text-black">{metric.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-black">Examples:</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-black">
                    {metric.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Evaluation Methods</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="text-black">{method.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black">{method.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Tools and Resources</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-semibold">Recommended Reading</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>• <ExternalLink href="https://openknowledge.worldbank.org/server/api/core/bitstreams/4659ef23-61ff-5df7-9b4e-89fda12b074d/content">Impact Evaluation in Practice</ExternalLink> (World Bank)</li>
            <li>• <ExternalLink href="https://www.amazon.co.uk/Running-Randomized-Evaluations-Practical-Guide/dp/0691159270">Running Randomized Evaluations</ExternalLink> (Glennerster & Takavarasha, MIT Press)</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Platforms and Registries</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>• <ExternalLink href="https://www.socialscienceregistry.org/">AEA RCT Registry</ExternalLink> - Pre-registration platform for RCTs</li>
            <li>• <ExternalLink href="https://egap.org/">EGAP</ExternalLink> - Evidence in Governance and Politics registry</li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            <em>Case studies to be added - examples include Letrus in Brazil, World Bank AI study, etc.</em>
          </p>
          
          <h3 className="text-xl font-semibold">Guidance questions to address in case studies:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>What is the GenAI use case?</li>
            <li>How was the product evaluated, on what metrics?</li>
            <li>What methods and tools were used?</li>
            <li>How was success determined?</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to implement?</h3>
          <p className="text-black">Learn about repeatable motions and cross-functional collaboration</p>
        </div>
        <Button asChild size="lg">
          <Link to="/motions">
            Repeatable Motions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level4; 