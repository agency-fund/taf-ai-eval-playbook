import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, Target, Shield, Settings, Users, TrendingUp, AlertTriangle, BookOpen, FileText, Users2, Globe, Activity, Zap, CheckCircle, XCircle, Clock, Star, Brain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Level4 = () => {
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
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Why is this level of evaluation important?</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              In this section, we use the term "randomized controlled trial" (RCT) to refer to an evaluation in which eligible participants are randomly assigned either to receive access to the program or product (treatment) or to have no access (control). We focus specifically on RCTs that measure effects on development outcomes, rather than on intermediate measures such as engagement or self-reported satisfaction.
            </p>
            <p className="text-black leading-relaxed">
              RCTs is the most credible way to determine whether an intervention actually causes changes in outcomes. By randomly assigning eligible participants to either a treatment group (which receives the intervention) or a control group (which does not), an RCT – when designed well – ensures that any observed differences in outcomes between groups can be causally attributed to the intervention itself, rather than to underlying differences in population characteristics or to external factors.
            </p>
          </CardContent>
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
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Why do an RCT?</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              For many funders and public sector partners, RCTs are a gold standard for decision-making. They want credible evidence that a product meaningfully improves people's lives—beyond engagement metrics or self-reported satisfaction—before committing to scale. A well-designed RCT sends a strong signal that your product works in real-world conditions, and that scaling it is likely to generate meaningful social returns (see <a href="https://www.nature.com/articles/d41586-025-02266-7.epdf?sharing_token=jCKO3Tx8dFeQfucqP5VCcNRgN0jAjWel9jnR3ZoTv0PS1htX8Sko7IudKf1MVjrKQ-g3NeuYAsnuJ-Io9wHN3uMBrjSLLnu_wjpJLF2G-unWgOw27UqLqC_yalnt2AFTYmMZAO31agMcWvNwKRpfYsfrMt3fmIKm0iVbftxqAsY%3D" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">Hauser et al., 2025</a>; <a href="https://www.gov.uk/government/publications/the-magenta-book/guidance-on-the-impact-evaluation-of-ai-interventions-html" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">UK GOV, 2025</a>).
            </p>
            <p className="text-black leading-relaxed">
              RCTs also help funders compare across opportunities. When paired with cost data, they allow for robust estimates of cost-effectiveness—crucial when governments, donors, and multilateral institutions are allocating scarce resources. In many cases, the result of an RCT becomes a key input in decisions to scale, replicate, or exit.
            </p>
            <p className="text-black leading-relaxed font-semibold">
              In short: if your product works, an RCT is how you demonstrate that it's worth scaling.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">When is it appropriate to do an RCT?</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              RCTs are high-investment undertakings, both financially (they often cost millions of dollars) and operationally (non-profits have to adapt their operations, often in challenging ways, to make them work). They are most useful when your product is mature enough to test and when the decision stakes are high enough to justify the effort. In general, consider an RCT when:
            </p>
            <ul className="space-y-4 list-disc list-inside pl-4">
              <li>
                <strong>Levels 1–3 are strong:</strong> The model performs well, users engage meaningfully, and early evidence suggests improvements in knowledge, attitudes, or behavior.
              </li>
              <li>
                <strong>You are preparing to scale:</strong> Funders or policymakers are considering wider adoption, but want evidence to support the decision.
              </li>
              <li>
                <strong>You are confident your product works:</strong> The world may be uncertain that your product has a meaningful impact but you shouldn't be. Your internal research should give you confident priors that you'll find treatment effects on development outcomes.
              </li>
            </ul>
            <p className="text-black leading-relaxed">
              You do <em>not</em> need to run an RCT if your product is still in early design, if usage is inconsistent, or if key hypotheses about mechanism remain untested. In those cases, Level 3 evaluations—focused on user cognition and behavior—can be more appropriate.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Plan for Evaluability Early</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black leading-relaxed">
              Although impact evaluations are typically conducted at later stages, designing credible and cost-effective RCTs often requires thinking about design decisions far earlier in the process. Incorporating features like holdout groups, staged rollouts, or embedded randomization into the initial product architecture ensures that rigorous causal evaluation remains possible—without requiring disruptive redesigns later on. Even if a full RCT is not yet justified, these design choices create structured opportunities for credible inference when the time comes and can significantly reduce the burden of evaluation. Funders assessing scale readiness should look for these signals of early evaluability.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">How to do an RCT responsibly</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              Rigorous RCTs require expertise. We recommend working with an <strong>independent evaluator</strong>—such as an academic partner, a research NGO (e.g. J-PAL, IPA), or a third-party M&E firm. This enhances both the technical quality and the perceived credibility of your evaluation.
            </p>
            <p className="text-black leading-relaxed">At minimum, we suggest:</p>
            <ul className="space-y-2 list-disc list-inside pl-4">
              <li><strong>Clarifying roles:</strong> who builds the product, who runs the study, who communicates findings</li>
              <li><strong>Pre-registering the design:</strong> on platforms such as the AEA RCT Registry or EGAP</li>
              <li><strong>Sharing results transparently:</strong> Disclose all findings, including null or negative results, and make methods and materials publicly available where feasible to support reproducibility and sector-wide learning.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Learning If It Works vs. Whether It Will Scale</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              When designing an RCT, it's important to clarify whether the evaluation is meant to demonstrate <em>proof of concept</em>—that the product works in a specific setting—or to build confidence that it will work at scale, whether in new regions of the same country or in entirely new countries. Funders often rely on RCTs for this latter purpose, so implementers should anticipate that external validity will be a core concern. To improve generalizability, implementers should make deliberate design choices from the outset:
            </p>
            <ul className="space-y-4 list-disc list-inside pl-4">
              <li>
                <strong>Diverse Site and User Sampling:</strong> Select heterogeneous settings and stratify randomization by key contextual factors (e.g., region and language group) to test generalizability across plausible rollout contexts.
              </li>
              <li>
                <strong>Mechanism and Moderator Clarity:</strong> Collect rich baseline data and pre-specify hypotheses about effect moderators (e.g., digital literacy, gender, region). Embed Level 3 measures to clarify <em>why</em> the product works, which aids policy transportability.
              </li>
              <li>
                <strong>Replication and Meta-Learning Strategy:</strong> If feasible, conduct parallel trials or structured pilots across diverse settings. Pre-plan for meta-analytic synthesis and use statistical adjustment tools to assess generalizability to broader populations.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Running RCTs on AI Products</h2>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="primer" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="primer">RCT Design Primer</TabsTrigger>
                <TabsTrigger value="considerations">AI-Specific Considerations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primer" className="mt-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4">A Quick Primer on RCT Design</h3>
                  <div className="prose prose-lg max-w-none text-black space-y-6">
                    <p>
                      At its core, an RCT compares outcomes between two (or more) groups that differ only in whether they received the intervention. Random assignment ensures that, on average, the groups are comparable at baseline. Any difference in outcomes can then be causally attributed to the intervention.
                    </p>
                    <p>
                      For a step-by-step guide to RCT planning—including sampling, power calculations, randomization, and analysis—we strongly recommend:
                    </p>
                    <ul className="space-y-2 list-disc list-inside pl-4">
                      <li>
                        <a href="https://openknowledge.worldbank.org/server/api/core/bitstreams/4659ef23-61ff-5df7-9b4e-89fda12b074d/content" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">
                          Impact Evaluation in Practice
                        </a> (Gertler et al., World Bank)
                      </li>
                      <li>
                        <a href="https://www.amazon.co.uk/Running-Randomized-Evaluations-Practical-Guide/dp/0691159270" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">
                          Running Randomized Evaluations
                        </a> (Glennerster & Takavarasha)
                      </li>
                    </ul>
                    <p>
                      In this section, we do not replicate that guidance. Instead, we focus on what is <em>distinctive</em> when evaluating AI-based products in the social sector.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="considerations" className="mt-6">
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
                      <ul className="space-y-2 list-disc list-inside pl-4">
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
                    <h4 className="text-xl font-bold mb-4">2. Measuring Latent Access and Contextual Factors</h4>
                    <div className="prose prose-lg max-w-none text-black space-y-4">
                      <p>
                        The marginal benefit of an AI product depends critically on what other sources of support users already have. This includes latent access to AI tools, related technologies, the product itself (including informal or indirect use), and competing products. Measuring this baseline access is essential for interpreting treatment effects. In high-resource environments where AI or other digital tools are already widely available, the gains from a new tool may be modest. In low-capacity settings, however, the same tool may deliver substantially larger benefits.
                      </p>
                      <p>Evaluators should:</p>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li><strong>Measure existing technology use</strong> — including frequency, type, and purpose of AI or other digital tool usage, whether directly or indirectly.</li>
                        <li><strong>Measure what users rely on today</strong> — such as informal networks, human advisors, basic technology, or no support at all.</li>
                      </ol>
                      <p>
                        These fallback options and access patterns shape the incremental value added by the AI product. Consider heterogeneity by geography, institution, and digital access, as these contextual factors influence both uptake and impact.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">3. Managing product dynamism</h4>
                    <div className="prose prose-lg max-w-none text-black space-y-4">
                      <p>
                        RCTs enable powerful causal inferences, but only under specific assumptions. One of the most important is the <em>Stable Unit Treatment Value Assumption</em> (SUTVA). A key component of SUTVA is the <em>no-multiple-versions</em> condition: all treated units must receive the same version of the intervention.
                      </p>
                      <p>
                        In practice, this condition is often imperfectly met. But for AI and other digital products, it is almost systematically violated. These products are designed to improve iteratively—through retraining, interface changes, or content adjustments—often as part of ongoing experimentation. As a result, different participants in the same trial may interact with different versions of the product. This can bias estimates if version exposure is correlated with unobserved potential outcomes, and even when identification holds, it can make the causal estimand difficult to interpret.
                      </p>
                      <p>
                        Freezing the product version for the duration of a trial would restore the single-version condition, but it would also undermine ecological validity by removing the very adaptation that makes product interventions distinct. A better approach is to design evaluations that allow the product to evolve while still yielding credible and interpretable causal estimates.
                      </p>
                      <p>We recommend four practices:</p>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li><strong>Tag your versions</strong> – Define in advance what constitutes a substantively distinct upgrade. Tag each release with a unique version label. Think carefully about granularity: overly fine definitions reduce statistical power, while overly coarse definitions can mask meaningful heterogeneity.</li>
                        <li><strong>If A/B testing, randomise test participation</strong> – Do not only randomise between versions A and B; also randomise which users enter the A/B test. Specify this procedure in advance so that participation itself is not correlated with unobserved outcomes.</li>
                        <li><strong>Maintain a hold-out group on the baseline version</strong> – Keep a subset of treated participants on the frozen baseline version for the duration of the trial. Compare outcomes between the hold-out and updated groups to estimate the incremental effect of product changes.</li>
                        <li><strong>Pre-specify at a high level</strong> – In your pre-analysis plan, outline how versions will be defined, how rollouts will occur, and how version exposure will be measured. Avoid overly detailed commitments that constrain your ability to respond to unforeseen product changes.</li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">4. Measuring true development outcomes</h4>
                    <div className="prose prose-lg max-w-none text-black space-y-4">
                      <p>
                        AI tools often simulate expertise. But does the user <em>learn</em>, or just <em>copy</em>?
                      </p>
                      <ul className="space-y-2 list-disc list-inside pl-4">
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
                      <ul className="space-y-2 list-disc list-inside pl-4">
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
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-white">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Common Pitfalls to Avoid</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black leading-relaxed mb-6">
              RCTs are high-leverage, high-cost undertakings. Avoiding a few predictable errors can significantly improve the value—and credibility—of your results.
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-taf-blue bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-taf-blue text-white rounded-lg flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="text-lg font-bold">Being underpowered</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    Even if your product has real impact, an underpowered study may fail to detect it. This is especially problematic when you expect heterogeneous effects across subgroups (e.g., gender, baseline ability, region). Ensure these groups are <strong>adequately represented</strong> in your sample, and consider <strong>stratified randomisation</strong> if subgroup analysis is central to your theory of change.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-taf-blue bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-taf-blue text-white rounded-lg flex items-center justify-center text-sm font-bold">2</div>
                    <h3 className="text-lg font-bold">Weak or noisy measurement</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    No evaluation is better than its outcomes. If administrative data is incomplete or unreliable, invest in <strong>one-off high-quality measurement</strong> (e.g., direct assessments, verified outcomes). Use <strong>validated instruments</strong> that allow for comparison to other programs or investment cases. Clear, interpretable metrics matter as much for internal learning as they do for external persuasion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-taf-blue bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-taf-blue text-white rounded-lg flex items-center justify-center text-sm font-bold">3</div>
                    <h3 className="text-lg font-bold">Mismanaging transparency</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    RCTs should build confidence. That means involving <strong>credible, independent investigators</strong>, sharing data where appropriate, and pre-specifying key measures and analytic strategies. But transparency should not come at the expense of adaptability. Leave room to make <strong>reasonable adjustments</strong> when implementation realities shift. Work with evaluators to balance rigour and responsiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-taf-blue bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-taf-blue text-white rounded-lg flex items-center justify-center text-sm font-bold">4</div>
                    <h3 className="text-lg font-bold">Letting product evolution obscure the analysis</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    If your product is likely to change during the study, pre-specify <strong>how changes will be handled analytically</strong>. One approach is to "freeze" a version for the trial. If this is not possible, <strong>log all changes</strong>, version-tag exposure, and use this metadata in the analysis to test whether improvements or degradations occurred over time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-taf-blue bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-taf-blue text-white rounded-lg flex items-center justify-center text-sm font-bold">5</div>
                    <h3 className="text-lg font-bold">Underestimating the risks of attrition</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black">
                    Attrition—whether through disengagement or lost follow-up—can severely undermine the power and interpretability of your study. In digital interventions, only a small fraction of users who sign up may meaningfully engage with the product. Plan accordingly: track engagement from the start, conduct power calculations accordingly, and build in passive data collection where feasible. If attrition is unavoidable, pre-specify how it will be handled analytically and report it transparently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the framework further?</h3>
          <p className="text-black">Learn about the repeatable motions around AI evaluation</p>
        </div>
        <Button asChild size="lg" className="bg-taf-blue hover:bg-taf-blue/90 text-white">
          <Link to="/motions">
            Repeatable Motions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level4; 