import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Shield, Settings, Users, TrendingUp, AlertTriangle, BookOpen, FileText, Users2, Globe, Activity, Zap, CheckCircle, XCircle, Clock, Star, Brain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Level4 = () => {
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
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
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
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription className="text-black">Behavioral Researchers and/or Economists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Apply evaluation methods with the proper measurement tools
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Data Scientists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Support design of randomized experiments
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
                  <CardDescription className="text-black">Engineers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Ensure that the product functions as expected throughout the evaluation phase
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why do an RCT?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            A randomized controlled trial (RCT) is one of the most credible ways to determine whether an intervention actually causes changes in outcomes. By randomly assigning eligible participants to either a treatment group (which receives the intervention) or a control group (which does not), an RCT helps ensure that any differences in outcomes between groups can be attributed to the intervention itself—rather than to other underlying differences or external factors.
          </p>
          <p>
            For many funders and public sector partners, randomized controlled trials (RCTs) are a gold standard for decision-making. They want credible evidence that a product meaningfully improves people's lives—beyond engagement metrics or self-reported satisfaction—before committing to scale. A well-designed RCT sends a strong signal that your product works in real-world conditions, and that scaling it is likely to generate meaningful social returns (see <a href="https://www.nature.com/articles/d41586-025-02266-7.epdf?sharing_token=jCKO3Tx8dFeQfucqP5VCcNRgN0jAjWel9jnR3ZoTv0PS1htX8Sko7IudKf1MVjrKQ-g3NeuYAsnuJ-Io9wHN3uMBrjSLLnu_wjpJLF2G-unWgOw27UqLqC_yalnt2AFTYmMZAO31agMcWvNwKRpfYsfrMt3fmIKm0iVbftxqAsY%3D" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">Hauser et al., 2025</a>; <a href="https://www.gov.uk/government/publications/the-magenta-book/guidance-on-the-impact-evaluation-of-ai-interventions-html" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">UK GOV, 2025</a>).
          </p>
          <p>
            RCTs also help funders compare across opportunities. When paired with cost data, they allow for robust estimates of cost-effectiveness—crucial when governments, donors, and multilateral institutions are allocating scarce resources. In many cases, the result of an RCT becomes a key input in decisions to scale, replicate, or exit.
          </p>
          <p>
            In short: if your product works, an RCT is how you demonstrate that it's worth scaling.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When is it appropriate to do an RCT?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            RCTs are high-investment undertakings. They are most useful when your product is mature enough to test and when the decision stakes are high enough to justify the effort. In general, consider an RCT when:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Levels 1–3 are strong:</strong> The model performs well, users engage meaningfully, and early evidence suggests improvements in knowledge, attitudes, or behavior.
            </li>
            <li>
              <strong>You are preparing to scale:</strong> Funders or policymakers are considering wider adoption, but want evidence to support the decision.
            </li>
            <li>
              <strong>You have bandwidth:</strong> Implementing an RCT is a lot of work for both the research team and implementer; doing it well takes time and effort.
            </li>
            <li>
              <strong>You are confident your product works:</strong> The world may be uncertain that your product has a meaningful impact but you shouldn't be. Your internal research should give you confident priors that you'll find treatment effects.
            </li>
          </ul>
          <p>
            You do <em>not</em> need to run an RCT if your product is still in early design, if usage is inconsistent, or if key hypotheses about mechanism remain untested. In those cases, Level 3 evaluations—focused on user cognition and behavior—can be more appropriate.
          </p>
          <div className="mt-6 p-4 bg-taf-yellow/10 rounded-lg">
            <h4 className="font-semibold mb-3">Plan for Evaluability Early</h4>
            <p className="text-sm">
              Although impact evaluations are typically conducted at later stages, designing credible and cost-effective RCTs often requires thinking about design decisions far earlier in the process. Incorporating features like holdout groups, staged rollouts, or embedded randomization into the initial product architecture ensures that rigorous causal evaluation remains possible—without requiring disruptive redesigns later on. Even if a full RCT is not yet justified, these design choices create structured opportunities for credible inference when the time comes and can significantly reduce the burden of evaluation. Funders assessing scale readiness should look for these signals of early evaluability.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How to do an RCT responsibly</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Rigorous RCTs require expertise. In almost all cases, we recommend working with an <strong>independent evaluator</strong>—such as an academic partner, a research NGO (e.g. J-PAL, IPA), or a third-party M&E firm. This enhances both the technical quality and the perceived credibility of your evaluation.
          </p>
          <p>At minimum, we suggest:</p>
          <ul className="space-y-2">
            <li><strong>Clarifying roles:</strong> who builds the product, who runs the study, who communicates findings</li>
            <li><strong>Pre-registering the design:</strong> on platforms such as the AEA RCT Registry or EGAP</li>
            <li><strong>Sharing results transparently:</strong> Disclose all findings, including null or negative results, and make methods and materials publicly available where feasible to support reproducibility and sector-wide learning.</li>
          </ul>
          
          <div className="mt-6 p-4 bg-taf-yellow/10 rounded-lg">
            <h4 className="font-semibold mb-3">Clarify the Purpose: Learning If It Works vs. Whether It Will Scale</h4>
            <p className="text-sm mb-4">
              When designing an RCT, it's important to clarify whether the evaluation is meant to demonstrate <em>proof of concept</em>—that the product works in a specific setting—or to build confidence that it will work at scale, whether in new regions of the same country or in entirely new countries. Funders often rely on RCTs for this latter purpose, so implementers should anticipate that external validity will be a core concern. To improve generalizability, implementers should make deliberate design choices from the outset:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Diverse Site and User Sampling:</strong> Select heterogeneous settings and stratify randomization by key contextual factors (e.g., region and language group) to test generalizability across plausible rollout contexts.</li>
              <li><strong>Mechanism and Moderator Clarity:</strong> Collect rich baseline data and pre-specify hypotheses about effect moderators (e.g., digital literacy, gender, region). Embed Level 3 measures to clarify <em>why</em> the product works, which aids policy transportability.</li>
              <li><strong>Replication and Meta-Learning Strategy:</strong> If feasible, conduct parallel trials or structured pilots across diverse settings. Pre-plan for meta-analytic synthesis and use statistical adjustment tools to assess generalizability to broader populations.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Running RCTs on AI Products</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">A Quick Primer on RCT Design</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6">
            <p>
              At its core, an RCT compares outcomes between two (or more) groups that differ only in whether they received the intervention. Random assignment ensures that, on average, the groups are comparable at baseline. Any difference in outcomes can then be causally attributed to the intervention.
            </p>
            <p>
              For a step-by-step guide to RCT planning—including sampling, power calculations, randomization, and analysis—we strongly recommend:
            </p>
            <ul className="space-y-2">
              <li>
                <a href="https://openknowledge.worldbank.org/server/api/core/bitstreams/4659ef23-61ff-5df7-9b4e-89fda12b074d/content" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">
                  Impact Evaluation in Practice
                </a> (World Bank)
              </li>
              <li>
                <a href="https://www.amazon.co.uk/Running-Randomized-Evaluations-Practical-Guide/dp/0691159270" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">
                  Running Randomized Evaluations
                </a> (Glennerster & Takavarasha, MIT Press)
              </li>
            </ul>
            <p>
              In this section, we do not replicate that guidance. Instead, we focus on what is <em>distinctive</em> when evaluating AI-based products in the social sector.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Key Design Considerations for AI-Specific RCTs</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6">
            <p>
              With the increased evaluations of AI products, distinct challenges for impact evaluation are emerging. Below are some considerations that merit special attention.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">1. Selecting the right counterfactual</h4>
            <div className="prose prose-lg max-w-none text-black space-y-4">
              <p>
                The choice of counterfactual—what participants would receive in the absence of the AI tool—is a foundational aspect of RCT design. In AI evaluations, the number of plausible comparators often expands, which makes clear justification especially important. The counterfactual you select should not only represent a real difference from receiving your product, but also credibly reflect what the world might look like if your tool were not deployed at scale.
              </p>
              <p>
                There is no single "correct" counterfactual. In some cases, a <strong>pure control</strong> (no intervention at all) may be appropriate. In others, a more active comparator offers greater policy relevance. Common options include:
              </p>
              <ul className="space-y-2">
                <li><strong>Business-as-usual</strong> (e.g., no digital support or sporadic human guidance), especially when evaluating incremental improvement in an existing service delivery model.</li>
                <li><strong>Non-AI digital tools</strong> (e.g., static chatbots or curated content), when assessing whether generative AI adds value over existing tech products.</li>
                <li><strong>Human-delivered services</strong>, when the AI tool substitutes for scarce professional labor (e.g., teachers, health workers). In such cases, it can be valuable to measure not only outcomes but also the cost of implementation.</li>
              </ul>
              <p>
                Thoughtful counterfactual selection shapes not only your measured effect size, but also the <em>interpretability</em> and <em>generalizability</em> of your findings. A strong evaluation will explain both why a given comparator was selected, and what alternative scenarios it helps illuminate.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">2. Contextual sensitivity</h4>
            <div className="prose prose-lg max-w-none text-black space-y-4">
              <p>
                The marginal benefit of an AI product often depends on what other sources of support users currently have access to. In high-resource environments where AI or other digital tools are already widely available, the gains from a new tool may be modest. In low-capacity settings, however, the same tool may deliver transformational value.
              </p>
              <p>
                Be explicit about what users rely on today—whether it's informal networks, human advisors, basic technology, or nothing at all. These existing fallback options shape how much value the AI product adds.
              </p>
              <p>
                Consider heterogeneity by geography, institution, or digital access. These contextual factors influence both who adopts the product and how much it improves outcomes.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">3. Managing product dynamism</h4>
            <div className="prose prose-lg max-w-none text-black space-y-4">
              <p>
                AI systems are rarely static. Models may be continuously retrained ("model drift"), outputs may adjust as data or user feedback changes, and product features may evolve during the evaluation window. To ensure the integrity and interpretability of your results:
              </p>
              <ul className="space-y-2">
                <li><strong>Freezing Product Versions:</strong> Where possible, "freeze" the model parameters and product version for the duration of the trial. This means that all users in the study interact with the same model configuration, even as the broader product continues to evolve outside the RCT. This protocol makes it clear <em>what</em> is being tested and simplifies interpretation.</li>
                <li><strong>Version Tagging and Audit Trails:</strong> If continuous learning or product iteration cannot be paused, record exactly which users are exposed to which model versions. Use explicit version tags and maintain a detailed audit trail (date, nature, and purpose of changes) using standard tools such as Langfuse or Evidential to track model updates.</li>
                <li><strong>Managing Adaptive or Personalized Systems:</strong> When AI systems use A/B testing, multi-armed bandits, or contextual bandits during the study, clarify whether personalization is part of the treatment. Document assignment algorithms, track exposures, and ensure appropriate statistical analysis for adaptive randomization.</li>
                <li><strong>Retraining and Data Updates:</strong> If the model is periodically retrained or the training dataset is updated, pre-specify how such "model drift" will be handled in the analysis. Assess whether outcome measures remain stable across versions. In fast-changing products, consider rolling analyses or meta-analytic adjustment for version effects</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">4. Measuring true development outcomes</h4>
            <div className="prose prose-lg max-w-none text-black space-y-4">
              <p>
                AI tools often simulate expertise. But does the user <em>learn</em>, or just <em>copy</em>?
              </p>
              <ul className="space-y-2">
                <li>Invest in using industry standard <strong>validated assessments</strong> and <strong>administrative data</strong> to credibly measure improvements in capabilities and welfare.</li>
                <li>Avoid measurement tools that can be gamed by simply repeating AI output (e.g., regurgitating chatbot answers). In educational contexts, for example, use measures where performance tests students' ability when they don't have access to AI.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">5. Randomisation Strategy: Managing Spillovers and Contamination</h4>
            <div className="prose prose-lg max-w-none text-black space-y-4">
              <p>
                AI tools are often designed for scale—freely accessible, easy to share—which makes contamination a real risk in RCTs. Your randomisation strategy should reflect how the product is delivered.
              </p>
              <ul className="space-y-2">
                <li>If access is controlled (e.g., via onboarding or closed rollout), individual or cluster randomisation may be appropriate.</li>
                <li>If the product is publicly available or spreads organically, consider a randomised encouragement design, where only some users are actively invited or incentivised to engage.</li>
              </ul>
              <p>
                When contamination risk is high, it may be wise to run the trial in settings with low existing exposure—for example, regions or populations where the product is not yet known.
              </p>
              <p>
                Cluster randomisation (e.g., by school or clinic) can further reduce spillovers. In all cases, monitor usage and be prepared to adjust power calculations or analytic strategies if cross-group exposure occurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Common Pitfalls to Avoid</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            RCTs are high-leverage, high-cost undertakings. Avoiding a few predictable errors can significantly improve the value—and credibility—of your results.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">1. Being underpowered</h3>
            <p className="text-sm">
              Even if your product has real impact, an underpowered study may fail to detect it. This is especially problematic when you expect heterogeneous effects across subgroups (e.g., gender, baseline ability, region). Ensure these groups are <strong>adequately represented</strong> in your sample, and consider <strong>stratified randomisation</strong> if subgroup analysis is central to your theory of change.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">2. Weak or noisy measurement</h3>
            <p className="text-sm">
              No evaluation is better than its outcomes. If administrative data is incomplete or unreliable, invest in <strong>one-off high-quality measurement</strong> (e.g., direct assessments, verified outcomes). Use <strong>validated instruments</strong> that allow for comparison to other programs or investment cases. Clear, interpretable metrics matter as much for internal learning as they do for external persuasion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">3. Mismanaging transparency</h3>
            <p className="text-sm">
              RCTs should build confidence. That means involving <strong>credible, independent investigators</strong>, sharing data where appropriate, and pre-specifying key measures and analytic strategies. But transparency should not come at the expense of adaptability. Leave room to make <strong>reasonable adjustments</strong> when implementation realities shift. Work with evaluators to balance rigour and responsiveness.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">4. Letting product evolution obscure the analysis</h3>
            <p className="text-sm">
              If your product is likely to change during the study, pre-specify <strong>how changes will be handled analytically</strong>. One approach is to "freeze" a version for the trial. If this is not possible, <strong>log all changes</strong>, version-tag exposure, and use this metadata in the analysis to test whether improvements or degradations occurred over time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">5. Underestimating the risks of attrition</h3>
            <p className="text-sm">
              Attrition—whether through disengagement or lost follow-up—can severely undermine the power and interpretability of your study. In digital interventions, only a small fraction of users who sign up may meaningfully engage with the product. Plan accordingly: track engagement from the start, conduct power calculations accordingly, and build in passive data collection where feasible. If attrition is unavoidable, pre-specify how it will be handled analytically and report it transparently.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black">
          <p>
            <em>We will add more case studies in the future based on our learnings from the AI4GD accelerator.</em>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the framework?</h3>
          <p className="text-black">Learn about the complete evaluation framework</p>
        </div>
        <Button asChild size="lg">
          <Link to="/framework">
            Back to Framework <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level4; 