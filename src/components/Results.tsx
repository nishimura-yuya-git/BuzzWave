import { motion } from 'framer-motion';
import Container from './ui/Container';

const achievements = [
  { 
    level: "月収200万", 
    count: 1,
    gradient: "from-amber-300 via-yellow-400 to-orange-500",
    ringColor: "ring-amber-300/30"
  },
  { 
    level: "月収100万", 
    count: 4,
    gradient: "from-slate-200 via-slate-300 to-slate-400",
    ringColor: "ring-slate-300/30"
  },
  { 
    level: "月収50万", 
    count: 3,
    gradient: "from-orange-200 via-amber-200 to-yellow-300",
    ringColor: "ring-amber-200/30"
  },
  { 
    level: "月収20万", 
    count: 12,
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    ringColor: "ring-blue-400/30"
  }
];

function LuxuryTrophy({ gradient }: { gradient: string }) {
  return (
    <motion.div 
      className="relative w-24 h-24"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      <motion.div 
        className={`absolute inset-2 rounded-full bg-gradient-to-br ${gradient} shadow-lg 
          transform transition-all duration-300 group-hover:scale-105`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50" />
      </motion.div>

      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-12 h-12 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <motion.path 
            d="M7,19 L17,19 L17,21 L7,21 L7,19 Z" 
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.path 
            d="M11,21 L13,21 L13,23 L11,23 L11,21 Z" 
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          <motion.path 
            d="M12,2 L12,2 C15.5,2 18.5,5 18.5,8.5 C18.5,12 16,15 12,15 C8,15 5.5,12 5.5,8.5 C5.5,5 8.5,2 12,2 Z" 
            strokeLinecap="round" 
            className="stroke-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.path 
            d="M18.5,8.5 L19.5,8.5 C20.5,8.5 21.5,7.5 21.5,6.5 L21.5,4.5 C21.5,3.5 20.5,2.5 19.5,2.5 L18.5,2.5" 
            strokeLinecap="round" 
            className="stroke-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          <motion.path 
            d="M5.5,8.5 L4.5,8.5 C3.5,8.5 2.5,7.5 2.5,6.5 L2.5,4.5 C2.5,3.5 3.5,2.5 4.5,2.5 L5.5,2.5" 
            strokeLinecap="round" 
            className="stroke-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Results({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 bg-[#1d40ae]">
      <Container>
        <div className="relative h-[50px] md:h-[60px] mb-20">
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-transparent text-[56px] md:text-8xl font-bold leading-tight -mt-12 md:-mt-14 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Results
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold px-2 text-white md:text-3xl">
              受講者実績
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.div 
                className={`
                  relative p-8 rounded-2xl 
                  bg-gradient-to-br from-white/10 to-white/5 
                  backdrop-blur-sm
                  ring-1 ${achievement.ringColor}
                  hover:ring-2 transition-all duration-300
                `}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
                
                <div className="relative flex flex-col items-center">
                  <motion.div 
                    className="mb-6 transform group-hover:scale-105 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1 
                    }}
                  >
                    <LuxuryTrophy gradient={achievement.gradient} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                      {achievement.count}
                      <span className="text-xl ml-1">名</span>
                    </div>
                    <div className="text-lg text-blue-100">
                      {achievement.level}達成
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-white/80 text-lg">
            ※ 2023年度実績
          </p>
        </motion.div>
      </Container>
    </section>
  );
}