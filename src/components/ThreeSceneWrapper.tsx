'use client';

import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function ThreeSceneWrapper() {
  return (
    <div className='absolute inset-0 z-[-1] min-h-screen w-full'>
       <ThreeScene />
    </div>
  );
}
