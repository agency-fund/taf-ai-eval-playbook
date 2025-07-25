import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Motions = () => {
  const motions = [
    {
      title: "Sprint Integration",
      description: "Embed evaluation checkpoints into agile development sprints",
      frequency: "Every 2-3 sprints",
      activities: [
        "Review model performance metrics",
        "Conduct user testing sessions", 
        "Assess product integration quality",
        "Plan next evaluation cycle"
      ]
    },
    {
      title: "Milestone Assessment",
      description: "Comprehensive evaluation at major product milestones",
      frequency: "At key milestones",
      activities: [
        "Full four-level framework review",
        "Stakeholder feedback collection",
        "Impact measurement planning",
        "Strategy adjustment decisions"
      ]
    },
    {
      title: "Continuous Monitoring",
      description: "Ongoing performance and impact tracking",
      frequency: "Real-time/Daily",
      activities: [
        "Automated model monitoring",
        "User behavior analytics",
        "System performance tracking",
        "Early warning indicators"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Repeatable Evaluation Motions</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Integrate evaluation seamlessly into your product development cycles with these 
          proven patterns and practices for sustainable AI assessment.
        </p>
      </div>

      <div className="mb-16">
        <div className="space-y-8">
          {motions.map((motion, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <CardTitle className="text-xl">{motion.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {motion.description}
                </CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">{motion.frequency}</span>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Key Activities:</h4>
                <ul className="space-y-2">
                  {motion.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-amber-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              <CardTitle className="text-xl">Implementation Best Practices</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Start Small</h4>
                <p className="text-sm text-muted-foreground">
                  Begin with one motion that fits your current workflow before expanding
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Automate Where Possible</h4>
                <p className="text-sm text-muted-foreground">
                  Use automated monitoring for continuous metrics collection
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Document Everything</h4>
                <p className="text-sm text-muted-foreground">
                  Maintain clear records of evaluation results and decisions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Iterate and Improve</h4>
                <p className="text-sm text-muted-foreground">
                  Regularly refine your evaluation processes based on learnings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Build your team</h3>
          <p className="text-muted-foreground">Learn about roles and responsibilities for effective evaluation</p>
        </div>
        <Button asChild size="lg">
          <Link to="/roles">
            Roles & Best Practices <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Motions;