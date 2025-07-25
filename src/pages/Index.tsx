import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, RefreshCw, Users, Wrench } from "lucide-react";
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
      description: "Framework builders, planning templates, and metric libraries",
      link: "/tools/framework-builder"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Evaluation in the Development Sector
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              A living playbook for implementing a four-level evaluation frameworks for AI tools 
              in the development sector.
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
            
            {/* Authors Credit */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="/lovable-uploads/9a3d750a-2eef-48e5-9815-5a79d2de32ef.png" 
                    alt="The Agency Fund" 
                    className="h-8 w-auto brightness-0 invert"
                  />
                  <p className="text-sm text-white/90 mb-0">
                    This playbook is created by the Agency Fund.
                  </p>
                </div>
                <p className="text-sm text-white/70">
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

      {/* Greg Brockman Quote Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-y border-cyan-200/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif">"</div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-400/30 font-serif">"</div>
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6 relative z-10">
              Evals are surprisingly often all you need.
            </blockquote>
            <cite className="text-lg text-muted-foreground">
              — Greg Brockman, Co-founder of OpenAI
            </cite>
          </div>
          <div className="mt-8 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-cyan-200/20">
            <p className="text-base text-foreground leading-relaxed">
              We believe that's true, but only if we're clear on what evaluation really means. In the AI for 
              development space, "eval" isn't just about model accuracy. It's also about whether the entire 
              product drives real, measurable change in people's lives. This playbook is your starting point 
              for making that kind of evaluation not just possible, but practical.
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
