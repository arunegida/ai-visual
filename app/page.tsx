'use client';

import ImageAnalyzer from '@/components/image-analyzer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            AI Image Analyzer
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Upload an image or take a photo to get detailed AI analysis
          </p>
        </div>
        
        <ImageAnalyzer />
      </div>
    </main>
  );
}