import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

const Authors = () => {
  const authors = [
    {
      name: "Zezhen Wu",
      linkedIn: "https://www.linkedin.com/in/zezhenwu/",
      email: "zezhen@agency.fund"
    },
    {
      name: "Robert On",
      linkedIn: "https://www.linkedin.com/in/robert-on/",
      email: "robert@agency.fund"
    },
    {
      name: "James Walsh",
      linkedIn: "https://www.linkedin.com/in/jamessonamwalsh/",
      email: "james@agency.fund"
    },
    {
      name: "Edmund Korley",
      linkedIn: "https://www.linkedin.com/in/edmundkorley/",
      email: "edmund@agency.fund"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Authors</h1>
          <p className="text-lg text-muted-foreground">
            This AI Evaluation Playbook was created by the team at Agency Fund, 
            bringing together expertise in AI development, evaluation frameworks, 
            and social impact measurement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {authors.map((author, index) => (
            <Card key={index} className="hover:shadow-float transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{author.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={author.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  {author.email && (
                    <Button asChild variant="outline" size="sm">
                      <a 
                        href={`mailto:${author.email}`}
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        {author.email}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-accent/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions & Requests</h2>
          <p className="text-muted-foreground mb-6">
            For questions about this playbook, collaboration opportunities, 
            or to request additional content, please reach out to our team.
          </p>
          <Button asChild size="lg">
            <a href="mailto:zezhen@agency.fund" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Zezhen Wu
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Authors;