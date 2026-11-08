'use client';

import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function ThreeSceneWrapper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 w-full h-full opacity-60">
      <ThreeScene />
    </div>
  );
}
