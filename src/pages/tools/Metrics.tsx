import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Metrics = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Metric Libraries</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Curated collections of metrics for AI evaluation in development contexts.
      </p>
      
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Comprehensive metric libraries and selection tools will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Metrics;