import { Card } from '@/components/ui/card';

interface AnalysisResultsProps {
  analysis: string;
}

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {analysis}
      </p>
    </Card>
  );
}