'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { LoadingSpinner } from './LoadingSpinner';

export const PageTransition = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isChanging) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-[99999] animate-in fade-in duration-300">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary animate-pulse opacity-80">
          Initialising
        </p>
      </div>
    </div>
  );
};
