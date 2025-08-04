import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Planning = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Planning Templates</h1>
      <p className="text-xl text-black mb-8">
        Ready-to-use templates for evaluation planning and tracking.
      </p>
      
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black">
            Interactive planning templates will be available here to help you organize 
            and track your evaluation activities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Planning;