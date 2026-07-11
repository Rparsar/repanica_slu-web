import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineViewerProps {
  sceneUrl: string;
  className?: string;
}

export default function SplineViewer({ sceneUrl, className = '' }: SplineViewerProps) {
  return (
    <div className={`spline-container ${className}`}>
      <Spline scene={sceneUrl} />
    </div>
  );
}
