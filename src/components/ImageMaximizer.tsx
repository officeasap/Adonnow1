// @/components/ImageMaximizer.tsx
import { useState } from 'react';
import DepthContainer from './DepthContainer';

interface ImageMaximizerProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const ImageMaximizer: React.FC<ImageMaximizerProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-square'
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMaximized(false);
    }
  };

  return (
    <>
      <div 
        className={`cursor-pointer ${aspectRatio} overflow-hidden rounded-xl ${className}`}
        onClick={() => setIsMaximized(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {isMaximized && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <DepthContainer depth="raised" className="max-w-4xl max-h-[80vh] p-4">
            <div className="relative">
              <button
                onClick={() => setIsMaximized(false)}
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-canvas-dark text-text-primary border border-border shadow-permanent flex items-center justify-center hover:brightness-102 transition-all"
              >
                ×
              </button>
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </DepthContainer>
        </div>
      )}
    </>
  );
};

export default ImageMaximizer;