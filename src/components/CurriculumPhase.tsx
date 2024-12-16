import { motion } from 'framer-motion';
import { CheckCircle } from "lucide-react";

interface CurriculumPhaseProps {
  title: string;
  steps: string[];
  level: string;
  imageNumber: number;
}

export function CurriculumPhase({
  steps,
  imageNumber,
}: CurriculumPhaseProps) {
  const getImagePath = (number: number) => {
    switch (number) {
      case 1:
        return "/images/zeroichi.png";
      case 2:
        return "/images/ichijyu.png";
      case 3:
        return "/images/jyuhyaku.png";
      default:
        return "/images/zeroichi.png";
    }
  };

  const checklistVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const checklistItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-start md:gap-8">
        <motion.div 
          className="w-full md:w-48 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
        >
          <motion.img
            src={getImagePath(imageNumber)}
            alt={`フェーズ ${imageNumber}`}
            className="w-full md:w-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div 
          className="space-y-4 flex-grow"
          variants={checklistVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-3"
              variants={checklistItemVariants}
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
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              </motion.div>
              <motion.p 
                className="text-gray-800 text-base md:text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + (0.1 * index)
                }}
              >
                {step}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}