"use client";

import React, { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if HLS is supported natively
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      setIsLoading(false);
    } else {
      // For browsers that don't support HLS natively, we'll use the HTML5 video element
      // with fallback handling
      video.src = src;
      setIsLoading(false);
      
      video.addEventListener('error', () => {
        setError('Video format not supported by your browser');
        setIsLoading(false);
      });

      video.addEventListener('loadstart', () => setIsLoading(true));
      video.addEventListener('loadeddata', () => setIsLoading(false));
    }

    return () => {
      if (video) {
        video.removeEventListener('error', () => {});
        video.removeEventListener('loadstart', () => {});
        video.removeEventListener('loadeddata', () => {});
      }
    };
  }, [src]);

  if (error) {
    return (
      <div className={`relative bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2e3f3a] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading video...</p>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        controls
        preload="metadata"
        poster={poster}
        playsInline
        muted={false}
        style={{
          backgroundColor: '#000',
        }}
      >
        <source src={src} type="application/x-mpegURL" />
        <source src={src} type="video/mp4" />
        <p className="text-center text-gray-500 p-8">
          Your browser does not support this video format. Please try a different browser or 
          <a href={src} className="text-[#2e3f3a] underline ml-1">download the video</a>.
        </p>
      </video>
      
      {title && (
        <div className="absolute top-4 left-4 bg-[#2e3f3a]/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
          {title}
        </div>
      )}
    </div>
  );
} 