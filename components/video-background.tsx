"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage: string;
  alt: string;
  className?: string;
}

export default function VideoBackground({ 
  videoSrc, 
  fallbackImage, 
  alt, 
  className = "" 
}: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // If no video source is provided, show fallback immediately
    if (!videoSrc) {
      setVideoError(true);
    }
  }, [videoSrc]);

  if (videoError || !videoSrc) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <Image
          src={fallbackImage}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster={fallbackImage}
        onError={() => setVideoError(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>
    </div>
  );
} 