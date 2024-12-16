import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface BenefitCardProps {
  imageUrl: string;
  alt: string;
}

const BenefitCard = ({ imageUrl, alt }: BenefitCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-xl"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full">
        {/* 画像部分 */}
        <div className="relative bg-black h-64">
          <div className="absolute inset-0 bg-[url('/images/sparkle-bg.png')] bg-cover opacity-50" />
          <img 
            src={imageUrl}
            alt={alt}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-48 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;