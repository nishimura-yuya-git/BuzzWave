import { Check } from 'lucide-react';
import { Plan, PlanType } from './types';
import { motion } from 'framer-motion';

type PricingCardProps = Plan;

function ConsultButton({ type }: { type: PlanType }) {
  const buttonStyles = {
    normal: {
      button: "bg-blue-600 text-white",
      shadow: "bg-blue-800"
    },
    standard: {
      button: "bg-white text-blue-600",
      shadow: "bg-gray-200"
    },
    executive: {
      button: "bg-gradient-to-br from-[#DAAF08] via-[#C69C06] to-[#B67B03] text-white",
      shadow: "bg-[#B67B03]"
    }
  };

  return (
    <div className="relative isolate">
      <div className={`absolute inset-x-0 -bottom-1.5 h-6 ${buttonStyles[type].shadow} rounded-lg`} />
      
      <motion.a
        href="https://lpfunnnel.yoshiki-buzz.com/line/open/JbYM7MdQ88vT?mtid=NDT2gMeM1gZU"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative
          w-full
          ${buttonStyles[type].button}
          font-bold
          px-6
          py-3
          rounded-lg
          transform-gpu
          transition-transform
          duration-200
          hover:translate-y-1.5
          active:translate-y-1.5
          text-center
          inline-block
        `}
      >
        無料相談へ申し込む
      </motion.a>
    </div>
  );
}

export function PricingCard({ name, price, duration, features, type }: PricingCardProps) {
  const isStandard = type === 'standard';
  const isExecutive = type === 'executive';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className={`
        rounded-2xl p-8 h-full flex flex-col relative
        ${isExecutive
          ? 'bg-gradient-to-br from-[#B67B03] via-[#DAAF08] to-[#B67B03] text-white border-4 border-[#B67B03] outline outline-2 outline-offset-2 outline-[#B67B03]'
          : isStandard
            ? 'bg-blue-600 text-white border-4 border-blue-600 outline outline-2 outline-offset-2 outline-blue-600'
            : 'bg-white shadow-xl'
        }
      `}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-grow">
        <motion.h3 
          className="text-2xl font-bold mb-2"
          variants={itemVariants}
        >
          {name}
        </motion.h3>
        <motion.div 
          className="flex items-baseline gap-1 mb-6"
          variants={itemVariants}
        >
          <span className="text-3xl font-bold">¥{price}</span>
          <span className="text-lg">（税込）/{duration}</span>
        </motion.div>
        
        <motion.div 
          className="space-y-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-2"
              variants={itemVariants}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 * index 
                }}
              >
                <Check 
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    isStandard ? 'text-white' : 'text-blue-600'
                  }`} 
                />
              </motion.div>
              <motion.span 
                className="leading-tight"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + (0.1 * index)
                }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ConsultButton type={type} />
    </motion.div>
  );
}