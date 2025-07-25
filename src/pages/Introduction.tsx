import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Introduction</h1>
      </div>

      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Evaluation is a critical tool for AI product developers. Generative AI (GenAI) is a relatively new technology, and product development today seems more of an art than a science. By rapidly iterating through different models, architectures, prompts, and knowledge bases, developers can steadily improve a product or workflow. So it is no surprise that AI evaluation has gained significant attention from companies, investors, and academics alike.
          </p>
          <p>
            But what should evaluation look like in the development sector? One of the most compelling use cases for AI in the social sector is its potential to cost-effectively deliver personalized support for millions of people. Done right, this technology can help individuals exercise greater agency and improve their lives in meaningful, measurable ways.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            In 2025, The Agency Fund (TAF) launched an AI for Global Development (AI4GD) accelerator in collaboration with our partners at OpenAI and the Center for Global Development (CGD). With an investment of $5 million, the accelerator represents an effort to not only identify successful use cases for the development sector, but also learn how to appropriately evaluate AI-assisted social services.
          </p>
          <p>
            Through the accelerator, we have supported eight organizations building GenAI products and services across three critical sectors: education (e.g., learning support for students, parents, and teachers), health (e.g., personalized medical advice), and agriculture (e.g., agriculture and business advice). As part of the process, we have engaged with funders, policymakers, and AI practitioners as well to understand how to scale new tools responsibly.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            One thing has become clear: while there is broad consensus on the importance of evaluating AI in the social sector, there has been little agreement on what this actually means. Different organizations have adopted very different evaluation approaches. Funders and academics have mixed opinions on what constitutes a "good" evaluation in this emerging space. In the absence of clear standards, many social service providers have defaulted to familiar benchmarks like randomized controlled trials (RCTs) to assess impact on development outcomes, even when such methods are not appropriate or even feasible.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Four-Level Framework</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            To bring clarity and structure to the evaluation of AI services in the development sector for both the funders and the implementers, we introduced a four-level framework. We first shared the framework at the AI4GD accelerator launch in Bangalore in March 2025. We later wrote about it in a blog post co-authored with the Center for Global Development (CGD) and J-PAL. This framework lays out four core questions to guide AI evaluation in development contexts:
          </p>
          <div className="bg-playbook-gray-light rounded-lg p-6 my-8">
            <ul className="space-y-3 text-foreground">
              <li><strong>Level 1 – Model evaluation:</strong> Does the AI model produce the desired responses?</li>
              <li><strong>Level 2 – Product evaluation:</strong> Does the product facilitate meaningful interactions?</li>
              <li><strong>Level 3 – User evaluation:</strong> Does the product positively support users' thoughts, feelings, and actions?</li>
              <li><strong>Level 4 – Impact evaluation:</strong> Does the product improve development outcomes?</li>
            </ul>
          </div>
          <p>
            While these four levels of evaluation are interconnected and iterative, they often follow a natural progression. A model is first built and benchmarked (Level 1), then tested for usability and engagement (Level 2). If the tool sees consistent use, we need to understand how it affects users' thoughts, feelings, and short-term behaviors (Level 3), before assessing whether it drives long-term improvements in development outcomes (Level 4). In the tech sector, evaluation of AI tools typically stops at Levels 1 and 2, where user engagement is often a predictor of product success. But in the development sector, our bar is higher. We're not just asking whether people use a tool – we're asking whether it improves their lives in meaningful, measurable, and cost-effective ways.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cautionary Principles</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Importantly, there are three cautionary principles to applying this framework:
          </p>
          <p>
            <strong>First,</strong> each level maps to distinct skillsets and stakeholders. AI engineers tend to focus on model behavior (Level 1); product managers and data scientists on engagement patterns (Level 2); psychologists and behavioral researchers on cognitive, emotional, and behavioral mechanisms (Level 3); and economists and policymakers on developmental impact (Level 4). But this division can become a barrier in real-world collaborations. Building better AI for development requires all actors to see beyond their slice of the process. For instance, this could mean resisting the urge to stop at a strong model benchmark, or to leap straight from a demo to an RCT, without understanding what lies in between. We include a later section on building repeatable evaluation motions across cross-functional teams, and will continue adding more practical guidelines to this living book over time.
          </p>
          <p>
            <strong>Second,</strong> the complexity, cost, and risk increase at each level, but so does the potential for deep, sustained impact. The real challenge is deciding what level of evaluation is appropriate at each stage of product maturity. There's no one-size-fits-all answer. The goal is not to always aim for any particular level, but to make informed tradeoffs about what constitutes "enough" evaluation, given the context. We will develop a guideline for balancing these tradeoffs in future iterations of the playbook.
          </p>
          <p>
            <strong>Third,</strong> this framework is meant to guide evaluation, not dictate product development cycles. While Levels 1–3 of evaluation are especially valuable for informing product development, they are necessary but not sufficient. Good product development also depends on other critical activities, such as UX research, participatory design, and content strategy. These workstreams shape how a product functions and feels, and they often run in parallel to or even ahead of formal evaluation. For instance, pre-evaluation user research, both qualitative and quantitative, is often essential before any product or model is built. These activities help teams identify target use cases, understand user pain points, define evaluation criteria, and design effective prompts, databases, or knowledge bases. In other words, many foundational product choices are informed by, but not dictated by, the evaluation process. These upstream insights are especially important in low-data or low-resource settings where assumptions can be costly. This playbook focuses specifically on how to do evaluation well: what to measure, how to measure it, and how to generate evidence with rigor and speed. It is not a full product development guide. To support the broader development cycle, we are creating a complementary suite of playbooks on user research, product design, and experimentation. These resources will help teams translate evaluation insights into design decisions, test ideas before building, and iterate with purpose. Together, these playbooks will offer a full set of repeatable motions that connect evidence to action.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            In conclusion, this current playbook is designed to make the necessary evaluation questions explicit. It lays out a shared vocabulary for AI evaluation that implementers and funders alike can use to communicate clearly and align expectations. It also introduces practical tools and methods for each evaluation level, and offers guidance tailored to the needs of engineers, data scientists, behavioral researchers, economists, and policymakers.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-foreground">Living Playbook</h3>
          <p className="text-muted-foreground">
            This playbook is a living playbook. The current version is grounded in what we've learned so far from working directly with AI4GD accelerator teams and engaging experts across disciplines. In the next phase, we'll keep updating this playbook and collaborate more deeply with specialists to co-create shared evaluation tools, refine methodologies, and support their practical use in real-world settings.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to dive in?</h3>
          <p className="text-muted-foreground">Start with our comprehensive evaluation framework</p>
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