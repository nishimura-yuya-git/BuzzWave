import { motion } from 'framer-motion';
import Container from './ui/Container';

interface HeroProps {
  id: string;
}

const BackgroundGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute top-0 -right-1/4 w-96 h-96  rounded-full blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute bottom-0 -left-1/4 w-96 h-96  rounded-full blur-3xl"
    />
  </div>
);

export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="relative">
      <div className="relative min-h-screen bg-[#1d40ae] flex items-center pt-20">
        <BackgroundGlow />
        
        <Container>
          <div className="max-w-4xl">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  <span className="block mb-4">波に流される</span>
                  <span className="block text-blue-400 mb-4">AI初心者から</span>
                  <span className="block text-3xl md:text-6xl text-gray-200">
                    今すぐ始める未来の学び
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-gray-300 text-sm md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AIバブルを乗りこなし、年収アップを目指せる環境
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8"
              >
                <button 
                  className="
                    relative
                    text-white 
                    px-8 
                    py-4 
                    rounded-lg 
                    text-xl 
                    font-bold 
                    bg-blue-600
                    shadow-[0_3px_5px_rgba(0,0,0,0.3)]
                    transition-transform
                    duration-200
                    hover:translate-y-[3px]
                  "
                >
                  無料相談に申し込む  ▶
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}