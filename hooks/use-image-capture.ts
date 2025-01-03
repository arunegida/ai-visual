"use client";

import { useToast } from '@/hooks/use-toast';

export function useImageCapture() {
  const { toast } = useToast();

  const captureImage = async (): Promise<string | null> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0);

      const dataUrl = canvas.toDataURL('image/jpeg');
      stream.getTracks().forEach(track => track.stop());
      
      return dataUrl;
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Failed to access camera. Please check permissions.",
        variant: "destructive"
      });
      return null;
    }
  };

  return { captureImage };
}