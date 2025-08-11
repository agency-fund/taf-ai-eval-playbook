import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight, Target, RefreshCw, Users, Wrench, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Four-Level Framework",
      description: "Introducing a comprehensive evaluation framework covering Model, Product, User, and Impact Evaluation",
      link: "/framework"
    },
    {
      icon: RefreshCw,
      title: "Repeatable Motions",
      description: "Building end-to-end instrumentation that moves beyond static best practices toward repeatable motions that are tested, iterated, and embedded in real AI development cycles",
      link: "/motions"
    },
    {
      icon: Users,
      title: "Cross-Functional Teams",
      description: "Outlining the typical roles at each level, how they collaborate, the tools that support them, and ways to align team goals with evaluation outcomes",
      link: "/roles"
    },
    {
      icon: Wrench,
      title: "Interactive Tools",
      description: "Interactive tools to help you evaluate AI models, products, and user agency and behavior",
      link: "/tools"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Development Banner */}
      <Alert className="rounded-none border-x-0 border-t-0 bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Development Notice:</strong> This website is still in development. All content is tentative and subject to change.
        </AlertDescription>
      </Alert>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/788062f4-0122-4cde-9d5e-89c816ba3e27.png)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Evaluation in the Social Sector
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              A <span className="animate-pulse text-white font-semibold">living</span> <span className="animate-pulse text-white font-semibold">playbook</span> for evaluating AI products in the social sector, created by the Agency Fund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/introduction">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/tools">
                  Try Interactive Tools
                </Link>
              </Button>
            </div>
            
            {/* Authors Credit */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-left">
                <p className="text-sm text-white/70">
                  This playbook is created by <a href="https://www.agency.fund/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors underline">the Agency Fund</a>.
                  <br />
                  <br />
                  If you have any questions or feedback, please contact the authors {" "}
                  <Link to="/authors" className="text-white hover:text-white/80 transition-colors underline">
                    here
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-y border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-6 gap-12 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <a 
                href="https://x.com/gdb/status/1733553161884127435" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white/90 backdrop-blur rounded-2xl shadow-card p-2 max-w-3xl mx-auto lg:mx-0 relative group-hover:shadow-float transition-shadow border border-cyan-200/50 lg:origin-right lg:scale-[1.15] lg:-ml-12">
                  <img 
                    src="/lovable-uploads/3da3ccde-b885-477e-8ee8-01328de60316.png" 
                    alt="Screenshot of a tweet about AI evaluation"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-black rounded-full p-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-md leading-relaxed text-slate-700 dark:text-slate-200 mb-6">
                Greg Brockman, co-founder of OpenAI, famously said, “<strong>evals are surprisingly often all you need.</strong>” We agree that continuous evaluation and iteration is the only way to develop a successful GenAI product. However, <strong>we need to be clear about what evaluation means.</strong> In the social sector, AI evals aren’t just about model accuracy. We must assess whether a GenAI product or service drives positive, measurable change in people’s lives. 
                </p>
                <p className="text-md leading-relaxed text-slate-700 dark:text-slate-200 mb-6">
                That means <strong>rethinking how evaluation is done</strong>. In global development, programs are often judged by one-off experiments where evaluation is treated as the finish line. We believe that evaluation should instead be a rapid, ongoing cycle, where deployment, adaptation, and improvement happen in tandem. This is even more important given the fast pace of AI’s technological evolution. 
                </p>
                <p className="text-md leading-relaxed text-slate-700 dark:text-slate-200 mb-6">
                In this new <strong>paradigm shift</strong>, every evaluation is both a milestone and a lesson. This current playbook is your guide to making that kind of evaluation not only possible, but practical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What's Inside the Playbook</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Comprehensive guidance, practical tools, and real-world case studies to help you 
              implement effective AI evaluation in development contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-float transition-all duration-300 cursor-pointer border-0 shadow-card">
                <Link to={feature.link}>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-[#003087]" />
                    </div>
                                          <CardTitle className="text-lg group-hover:text-taf-blue transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-playbook-gray-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Evaluating?</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Whether you're building your first AI tool or refining existing evaluation practices, 
            this playbook provides the frameworks and tools you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/introduction">
                Start with Introduction <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
