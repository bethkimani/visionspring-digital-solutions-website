'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback: ReactNode;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallback,
  width,
  height,
  sizes = '100vw',
  className,
}: ImageWithFallbackProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  );
}
