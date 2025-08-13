import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Github, FileText } from "lucide-react";

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
    },
    {
      name: "Temina Madon",
      linkedIn: "https://www.linkedin.com/in/temina/",
      email: "temina@agency.fund"
    },
    {
      name: "Linus Wong",
      linkedIn: "https://www.linkedin.com/in/linus-wong-999b551/",
      email: "linus@agency.fund"
    }
  ];

  const contributors = [
    {
      name: "Farhan Abrol",
      linkedIn: "https://www.linkedin.com/in/fabrol/"
    },
    {
      name: "Han Sheng Chia",
      linkedIn: "https://www.linkedin.com/in/han-sheng-chia-427a0448/"
    },
    {
      name: "Kang-Xing (KX) Jin",
      linkedIn: "https://www.linkedin.com/in/kxjin/"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Authors and Contributors</h1>
          <p className="text-lg text-black mb-8">
            This AI Evaluation Playbook was created by the team at Agency Fund, 
            bringing together expertise in AI development, evaluation frameworks, 
            and social impact measurement. The content is drafted based on our 
            experience working with many NGOs in the social sector developing AI tools.
          </p>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b9f4f807-9529-43f8-9b6a-515216823f99.png" 
              alt="Agency Fund team at Nairobi AI4GD Sprint" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              The Agency Fund June 2025 Nairobi AI4GD Sprint
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-left">Authors</h2>
                      <p className="text-black text-left mb-8">
              The authors are the team members who wrote the content and developed the core framework for this playbook.
            </p>
          <div className="grid md:grid-cols-2 gap-6">
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
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-left">Contributors</h2>
                      <p className="text-black text-left mb-8">
              The contributors generously shared their expertise and provided valuable insights during the idea generation phase.
            </p>
          <div className="grid md:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <Card key={index} className="hover:shadow-float transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a 
                        href={contributor.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#003087]">Contribute to the Playbook</h2>
          <p className="text-[#003087] mb-6">
            Interested in contributing to this playbook? We welcome contributions 
            from the AI evaluation community. For questions, collaboration opportunities, 
            or to suggest improvements, please reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#003087] hover:bg-[#003087]/90">
              <a 
                href="https://github.com/agency-fund/taf-ai-eval-playbook" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Contribute via GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#003087] hover:bg-[#003087]/90">
              <a 
                href="https://forms.gle/oe9BCdhQyKgvCTaS9" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Contribute via Google Form
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;