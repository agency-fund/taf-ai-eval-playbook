import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Code, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Roles = () => {
  const roles = [
    {
      title: "Product Manager",
      icon: User,
      responsibilities: [
        "Define evaluation objectives aligned with product goals",
        "Coordinate evaluation activities across teams",
        "Make data-driven product decisions",
        "Communicate evaluation insights to stakeholders"
      ],
      skills: ["Strategic thinking", "Stakeholder management", "Data interpretation"]
    },
    {
      title: "ML Engineer/Data Scientist", 
      icon: Code,
      responsibilities: [
        "Design and implement model evaluation frameworks",
        "Monitor model performance and drift", 
        "Develop automated evaluation pipelines",
        "Analyze technical evaluation metrics"
      ],
      skills: ["Machine learning", "Statistics", "Software engineering"]
    },
    {
      title: "UX Researcher",
      icon: BarChart,
      responsibilities: [
        "Design user-centered evaluation studies",
        "Conduct usability testing and interviews",
        "Analyze user behavior and satisfaction",
        "Translate user insights into recommendations"
      ],
      skills: ["Research methods", "User empathy", "Data analysis"]
    },
    {
      title: "Impact Specialist",
      icon: Users,
      responsibilities: [
        "Define impact measurement frameworks",
        "Design outcome evaluation studies",
        "Measure long-term behavioral change",
        "Assess cost-effectiveness and sustainability"
      ],
      skills: ["Program evaluation", "Development expertise", "Statistical analysis"]
    }
  ];

  const bestPractices = [
    "Establish clear roles and responsibilities from project start",
    "Create regular cross-functional evaluation reviews",
    "Share evaluation tools and methodologies across teams",
    "Build evaluation capacity through training and mentorship",
    "Document and share evaluation learnings organization-wide"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Roles & Best Practices</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Successful AI evaluation requires collaboration across disciplines. Learn how to build 
          and coordinate effective cross-functional evaluation teams.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Key Roles in AI Evaluation</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Essential Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-playbook-gray-light">
          <CardHeader>
            <CardTitle className="text-2xl">Cross-Functional Best Practices</CardTitle>
            <CardDescription className="text-base">
              Guidelines for effective collaboration and knowledge sharing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">See it in action</h3>
          <p className="text-muted-foreground">Explore real-world case studies from development projects</p>
        </div>
        <Button asChild size="lg">
          <Link to="/case-studies">
            Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Roles;