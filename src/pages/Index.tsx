import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, RefreshCw, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Four-Level Framework",
      description: "Comprehensive evaluation framework covering Model, Product, User, and Impact levels",
      link: "/framework"
    },
    {
      icon: RefreshCw,
      title: "Repeatable Motions",
      description: "Integrate evaluation seamlessly into your product development cycles",
      link: "/motions"
    },
    {
      icon: Users,
      title: "Cross-functional Teams",
      description: "Best practices for roles and collaboration in AI evaluation",
      link: "/roles"
    },
    {
      icon: Wrench,
      title: "Interactive Tools",
      description: "Framework builders, planning templates, and metric libraries",
      link: "/tools/framework-builder"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Evaluation in the Development Sector
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              A living playbook for implementing effective evaluation frameworks for AI tools 
              in development and social good contexts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/introduction">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/tools/framework-builder">
                  Try Interactive Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Created by</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a href="https://www.linkedin.com/in/zezhenwu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Zezhen Wu
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://www.linkedin.com/in/robert-on/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Robert On
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://www.linkedin.com/in/jamessonamwalsh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                James Walsh
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://www.linkedin.com/in/edmundkorley/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Edmund Korley
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              For questions and requests, please reach out to{" "}
              <a href="mailto:zezhen@agency.fund" className="text-primary hover:underline">
                Zezhen Wu at zezhen@agency.fund
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What's Inside the Playbook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
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

      {/* Quote Section */}
      <section className="py-24 bg-gradient-accent/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <a 
                href="https://x.com/gdb/status/1733553161884127435" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-card p-2 max-w-md mx-auto lg:mx-0 relative group-hover:shadow-float transition-shadow">
                  <img 
                    src="/lovable-uploads/402503cb-15e8-45c4-aff5-a795f2eb860a.png" 
                    alt="Greg Brockman tweet about evals"
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
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground">
                  Greg Brockman, co-founder of OpenAI, famously said, "evals are surprisingly often all you need." 
                  We believe that's true, but only if we're clear on what evaluation really means. In the AI for 
                  development space, "eval" isn't just about model accuracy. It's also about whether the entire 
                  product drives real, measurable change in people's lives. This playbook is your starting point 
                  for making that kind of evaluation not just possible, but practical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-playbook-gray-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Evaluating?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
