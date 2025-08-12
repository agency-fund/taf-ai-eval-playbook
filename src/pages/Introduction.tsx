import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveFramework from "@/components/InteractiveFramework";
import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className = "", ...props }) => (
  <a
    href={href}
    className={`text-taf-blue hover:text-taf-blue/80 transition-colors underline ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

const Introduction = () => {
  const principles = [
    {
      icon: Target,
      title: "Purpose-Driven Evaluation",
      description: "Align evaluation efforts with development outcomes and social impact goals"
    },
    {
      icon: Users,
      title: "Human-Centered Approach", 
      description: "Center evaluation on user needs and real-world contexts of development work"
    },
    {
      icon: Lightbulb,
      title: "Practical Implementation",
      description: "Provide actionable frameworks that can be implemented with limited resources"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Introduction</h1>
      </div>

      <div className="mb-12 -mx-6 px-6">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
          Continuous evaluation is a critical tool for AI product developers. Generative AI (GenAI) is a relatively new technology, and as a result product development today is more of an art than a science. By rapidly iterating through different AI models, architectures, prompts, and knowledge bases, GenAI developers can steadily improve a product or workflow. So it is no surprise that AI evaluation tools have gained significant attention from software companies, investors, and academics alike.
          </p>
          <p>
          But what should evaluations look like in the social sector? One of the most compelling use cases for AI in the social sector is its potential to cost-effectively deliver personalized decision-making support for millions of people. Done right, this technology can help individuals exercise greater agency over their lives and improve outcomes in meaningful, measurable ways.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Four-Level Framework</h2>
        <p>
          To bring clarity and structure to the evaluation of AI services in the social sector -- for <em>both</em> the funders <em>and</em> the implementers -- we have introduced a four-level framework. We first shared the framework at a technical conference in Bangalore in March 2025. We later wrote about it in a <ExternalLink href="https://theagencyfund.substack.com/p/an-ai-evaluation-framework-for-the">blog post</ExternalLink> co-authored with the Center for Global Development (CGD) and J-PAL. This framework lays out four core questions to guide AI evaluation in human development contexts:
          </p>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <div className="bg-playbook-gray-light rounded-lg p-6 my-8">
            <ul className="space-y-3 text-foreground">
              <li><strong>Level 1 – Model evaluation:</strong> Does the AI model produce the desired responses?</li>
              <li><strong>Level 2 – Product evaluation:</strong> Does the product facilitate meaningful interactions?</li>
              <li><strong>Level 3 – User evaluation:</strong> Does the product positively support users' thoughts, feelings, and actions?</li>
              <li><strong>Level 4 – Impact evaluation:</strong> Does the product improve development outcomes?</li>
            </ul>
          </div>

      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            How did we get here? In 2025, <ExternalLink href="https://www.agency.fund/">The Agency Fund</ExternalLink> (TAF) launched an <ExternalLink href="https://agencyfund.notion.site/ai-for-global-development">AI for Global Development (AI4GD) accelerator</ExternalLink> in collaboration with our partners at <ExternalLink href="https://openai.com/">OpenAI</ExternalLink> and <ExternalLink href="https://www.cgdev.org/">Center for Global Development (CGD)</ExternalLink>. With an investment of $5 million, the accelerator represents an effort not only to identify successful use cases for the social sector, but also to learn how to appropriately develop and evaluate AI-assisted social services. 
          </p>
          <p>
            Through the accelerator, we have supported eight non-profit organizations building GenAI products and services across three critical sectors: education (e.g., learning support for students, parents, and teachers), health (e.g., personalized medical advice), and agricultural livelihoods (e.g., agriculture and business advice). As part of the process, we have engaged with funders, policymakers, and AI practitioners as well to understand how to scale new AI services responsibly.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            One thing has become clear: <strong>while there is broad consensus on the importance of evaluating AI in the social sector, there has been little agreement on what this actually means.</strong> Different organizations have adopted very different evaluation approaches.  Funders and academics have mixed opinions on what constitutes a “good” evaluation in this emerging space. In the absence of clear standards, some social service providers have defaulted to familiar benchmarks like randomized controlled trials (RCTs) to assess impact on human development outcomes, even when such methods are not appropriate or even feasible.
          </p>
        </div>
      </div>

          <div className="my-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">Interactive Framework Diagram</h3>
            <div className="w-full max-w-4xl">
              <InteractiveFramework />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Drag to explore • Click and zoom • Use controls to navigate the framework
            </p>
          </div>
          
          <p>
            While the four levels of AI evaluation are interconnected and iterative, they often follow a natural progression. An AI model pipeline is first built and its performance benchmarked (Level 1), then the resulting product or service is tested for usability and engagement (Level 2). If the tool sees consistent use, we need to understand how it affects users’ thoughts, feelings, and short-term behaviors (Level 3), before assessing whether it drives long-term improvements in development outcomes (Level 4). In the tech sector, evaluation of AI tools typically stops at Levels 1 and 2, because user engagement is often an adequate predictor of product success. But in the social sector, our bar is higher. We’re not just asking whether people use a tool – we’re asking whether it improves their lives in meaningful, measurable, and cost-effective ways.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cautionary Principles</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Importantly, there are three cautionary principles to applying this framework:
          </p>
          <p>
            <strong>First, each level of evaluation involves distinct skill sets and stakeholders</strong>. AI engineers tend to focus on model behavior (Level 1); product managers and data scientists on product analytics (Level 2); psychologists and behavioral researchers on user thoughts, feelings, and actions (Level 3); and economists and policymakers on social impact (Level 4). But these divisions can become a barrier in real-world collaborations. <em>Building better AI for the social sector requires all actors to see beyond their slice of the evals process.</em> This could mean resisting the urge to stop at a strong model benchmark, or to leap straight from a demo to an RCT, without understanding what lies in between. The development and delivery of an effective GenAI service involves continuous evaluation, modification, and improvement. This playbook includes a later section on how to build repeatable, continuous evaluation practices across cross-functional teams. We will continue adding more practical guidelines to this living book over time.
          </p>
          <p>
            <strong>Second, each level of evaluation varies in complexity, cost, and risk – but so does the potential for deep, sustained impact</strong>. Model iteration and evaluation is relatively cheap and fast to execute, and your evaluation strategy can evolve and grow quickly. In comparison, user surveys, which are typically found in user and impact evaluations, are relatively costly and time-consuming. The challenge is in deciding which level and intensity of evaluation is appropriate at each stage of a product’s maturity. There’s no one-size-fits-all answer. The goal is not to always aim for a particular level of evaluation, but to make informed tradeoffs about what constitutes “enough” evaluation, given the context. We will develop a guideline for balancing these tradeoffs in future iterations of the playbook.
          </p>
          <p>
            <strong>Third, this framework is meant to guide AI product development and evaluation, not to dictate specific practices</strong>. While Levels 1–3 of evaluation are especially valuable for informing product development, they are <em>necessary but not sufficient</em>. Good product development also depends on other critical activities, such as user research, UX design, and content strategy. These workstreams shape how a product functions and feels, and they often run in parallel to, or even ahead of, evaluation activities. For instance, user research, both qualitative and quantitative, is often essential before a product or model is prototyped. These activities help product developers understand user pain points, identify target use cases, define evaluation criteria, and design effective prompts, databases, or knowledge bases. In summary, insights collected prior to evaluation are critical. While many product choices are informed by the evaluation process, user research is especially important early in the process, and in low-data or low-resource settings (where the wrong assumptions can be costly). 
          </p>
          <p>
            This playbook focuses specifically on <strong>how to do AI evaluation well</strong>: what to measure, how to measure it, and how to generate evidence with rigor and speed. It is not a full product development guide. To support the broader development cycle, we are creating <strong>a complementary suite of playbooks</strong> on user research, product design, and experimentation. These resources will help teams translate insights into design decisions, test ideas before building prototypes, and iterate on a product or service with purpose. Together, these playbooks will offer a full set of repeatable motions that connect evidence to action. 
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            In conclusion, this playbook is designed to <strong>make explicit the evaluation activities required to build successful GenAI services for the social sector</strong>. It lays out a shared vocabulary for AI evaluation that implementers and funders alike can use to communicate clearly and align expectations. It also introduces practical tools and methods for each evaluation level, and offers guidance tailored to the needs of engineers, data scientists, behavioral researchers, economists, and policymakers.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003087]">This is a living playbook:</CardTitle>
            <CardDescription className="text-base text-[#003087]">
              The current version is grounded in what we've learned so far from working directly with AI4GD accelerator teams and engaging experts across disciplines.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-[#003087]">Continuous Evolution</h4>
                <p className="text-sm text-[#003087]">
                  In the next phase, we'll keep updating this playbook and collaborate more deeply with specialists to co-create shared evaluation tools.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#003087]">Practical Application</h4>
                <p className="text-sm text-[#003087]">
                  We'll refine methodologies and support their practical use in real-world settings across the social sector.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to dive in?</h3>
          <p className="text-black">Start with our comprehensive evaluation framework</p>
        </div>
        <Button asChild size="lg">
          <Link to="/framework">
            Four-Level Framework <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Introduction;