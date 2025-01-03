"use client";

import { useRef } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useImageCapture } from '@/hooks/use-image-capture';

interface ImageUploaderProps {
  onImageCapture: (image: string) => void;
  onImageUpload: (image: string) => void;
}

export function ImageUploader({ onImageCapture, onImageUpload }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { captureImage } = useImageCapture();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = async () => {
    const image = await captureImage();
    if (image) {
      onImageCapture(image);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-40"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>
          <Button
            onClick={handleCameraCapture}
            variant="outline"
            className="w-40"
          >
            <Camera className="mr-2 h-4 w-4" />
            Take Photo
          </Button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </Card>
  );
}