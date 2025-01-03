"use client";

import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
  image: string;
  isLoading: boolean;
  onAnalyze: () => void;
}

export function ImagePreview({ image, isLoading, onAnalyze }: ImagePreviewProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="relative w-full max-w-lg mx-auto">
        <img
          src={image}
          alt="Selected"
          className="rounded-lg shadow-lg max-h-96 mx-auto"
        />
      </div>
      <Button
        onClick={onAnalyze}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Analyze Image
      </Button>
    </div>
  );
}