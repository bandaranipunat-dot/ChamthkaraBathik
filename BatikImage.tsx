import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BatikImageProps {
  src: string;
  alt: string;
  className?: string;
  filter?: string;
  objectPosition?: 'center' | 'top';
  fallbackLabel?: string;
}

export function BatikImage({
  src,
  alt,
  className = '',
  filter,
  objectPosition = 'center',
  fallbackLabel,
}: BatikImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#3B1018] via-[#221f18] to-[#182A4A] ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-16 h-16 text-primary/40 mb-3"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" />
          <path
            d="M50 8 C56 26, 62 32, 50 44 C38 32, 44 26, 50 8 Z M50 92 C56 74, 62 68, 50 56 C38 68, 44 74, 50 92 Z M8 50 C26 56, 32 62, 44 50 C32 38, 26 44, 8 50 Z M92 50 C74 56, 68 62, 56 50 C68 38, 74 44, 92 50 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.3" />
        </svg>
        <Sparkles className="w-4 h-4 text-primary/60 mb-1" aria-hidden="true" />
        <span className="font-serif text-sm text-primary/90 tracking-wide">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={filter ? { filter } : undefined}
      className={`${objectPosition === 'top' ? 'object-top' : 'object-center'} ${className}`}
      loading="lazy"
    />
  );
}
