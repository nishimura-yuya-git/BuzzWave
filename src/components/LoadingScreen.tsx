import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  setIsLoading: (loading: boolean) => void;
}

export default function LoadingScreen({ setIsLoading }: LoadingScreenProps) {
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalLoading(false);
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (!localLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-[#1d40ae] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="relative">
          <motion.h1 
            className="text-[clamp(6rem,8vw,6rem)] leading-none font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              BUZZ
            </span>
            <br />
            <span className="text-transparent font-black" style={{ WebkitTextStroke: '2px white' }}>
              WAVE
            </span>
          </motion.h1>
        </div>
        
        <motion.p
          className="mt-8 text-white text-xl tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI時代の、新たな波に乗る。
        </motion.p>
        
        <motion.p
          className="mt-16 text-white tracking-[0.5em] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          NOW LOADING
        </motion.p>
      </div>

      {/* Geometric pattern background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg width="100%" height="100%" className="absolute opacity-10">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(30)"
          >
            <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
    </motion.div>
  );
}