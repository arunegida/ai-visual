"use client";

import { useState } from 'react';
import { ImageUploader } from './image-analyzer/image-uploader';
import { ImagePreview } from './image-analyzer/image-preview';
import { AnalysisResults } from './image-analyzer/analysis-results';
import { useImageAnalysis } from '@/hooks/use-image-analysis';

export default function ImageAnalyzer() {
  const [image, setImage] = useState<string | null>(null);
  const { analysis, isLoading, analyzeImage } = useImageAnalysis();

  return (
    <div className="space-y-8">
      <ImageUploader 
        onImageCapture={setImage} 
        onImageUpload={setImage} 
      />
      
      {image && (
        <ImagePreview 
          image={image} 
          isLoading={isLoading}
          onAnalyze={() => analyzeImage(image)}
        />
      )}

      {analysis && <AnalysisResults analysis={analysis} />}
    </div>
  );
}