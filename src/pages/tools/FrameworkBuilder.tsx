import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FrameworkBuilder = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Framework Builder</h1>
      <p className="text-xl text-black mb-8">
        Interactive tool to help you build a customized evaluation framework for your AI project.
      </p>
      
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black">
            This interactive framework builder tool is currently in development. 
            It will help you select appropriate evaluation methods based on your project context.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrameworkBuilder;