import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    {
      term: "A/B Testing",
      definition: "A controlled experiment comparing two versions of a product feature to determine which performs better",
      category: "Product Evaluation"
    },
    {
      term: "Bias Assessment",
      definition: "Systematic evaluation of whether an AI model produces unfair or discriminatory outcomes for different groups",
      category: "Model Evaluation"
    },
    {
      term: "Cost-Effectiveness Analysis",
      definition: "Evaluation method comparing the costs of an intervention to its measured outcomes or benefits",
      category: "Impact Evaluation"
    },
    {
      term: "Cross-validation",
      definition: "Statistical method for assessing how well a model generalizes to independent datasets",
      category: "Model Evaluation"
    },
    {
      term: "Development Outcomes",
      definition: "Measurable changes in social, economic, or environmental conditions that development interventions aim to achieve",
      category: "Impact Evaluation"
    },
    {
      term: "Fairness Metrics",
      definition: "Quantitative measures used to assess whether an AI system treats different groups equitably",
      category: "Model Evaluation"
    },
    {
      term: "Human-in-the-Loop",
      definition: "AI system design that incorporates human judgment and oversight in the decision-making process",
      category: "Product Evaluation"
    },
    {
      term: "Impact Evaluation",
      definition: "Systematic assessment of the changes that can be attributed to a particular intervention",
      category: "Impact Evaluation"
    },
    {
      term: "Longitudinal Study",
      definition: "Research design that follows the same subjects over extended periods to track changes over time",
      category: "User Evaluation"
    },
    {
      term: "Model Drift",
      definition: "Degradation in model performance over time due to changes in data patterns or environment",
      category: "Model Evaluation"
    },
    {
      term: "Randomized Controlled Trial (RCT)",
      definition: "Experimental design where participants are randomly assigned to treatment and control groups",
      category: "Impact Evaluation"
    },
    {
      term: "User Acceptance Testing",
      definition: "Evaluation process where real users test a product to ensure it meets their needs and expectations",
      category: "User Evaluation"
    },
    {
      term: "Usability Testing",
      definition: "Evaluation method where users perform tasks while observers watch and take notes",
      category: "User Evaluation"
    }
  ];

  const categories = ["All", "Model Evaluation", "Product Evaluation", "User Evaluation", "Impact Evaluation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Glossary</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Key terms and concepts in AI evaluation for development contexts. Use the search and filters 
          to quickly find the definitions you need.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search terms and definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredTerms.map((item, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{item.term}</CardTitle>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full shrink-0 ml-4">
                  {item.category}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No terms found matching your search criteria.</p>
        </div>
      )}

      <div className="mt-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-xl">Suggest a Term</CardTitle>
            <CardDescription className="text-base">
              Missing a definition? Help us improve this glossary by suggesting new terms 
              relevant to AI evaluation in development contexts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              This is a living glossary that grows with community input and evolving best practices.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Glossary;