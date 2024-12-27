import { motion } from 'framer-motion';
import Container from './ui/Container';

interface HeroProps {
  id: string;
}

const BackgroundImage = () => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#1d40ae]/90" />
    </div>
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/images/mainvisual.jpg"
        alt="BuzzWave Main Visual"
        className="w-full h-full object-cover"
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </div>
  </div>
);

// 成果指標画像
const AchievementImage = ({
  src,
  alt,
  index
}: {
  src: string;
  alt: string;
  index: number;
}) => (
  <motion.div
    key={index}
    className="relative overflow-hidden rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-auto rounded-lg transition-transform duration-300"
      loading={index === 0 ? "eager" : "lazy"}
      decoding="async"
    />
  </motion.div>
);

export default function Hero({ id }: HeroProps) {
  // 実績画像データ
  const achievementImages = [
    { src: "/images/trackrecord1.png", alt: "実績1" },
    { src: "/images/trackrecord2.png", alt: "実績2" },
    { src: "/images/trackrecord3.png", alt: "実績3" }
  ];

  return (
    <section id={id} className="relative">
      <div className="relative min-h-screen flex items-center md:pt-32 pt-8 overflow-hidden">
        <BackgroundImage />
        
        <Container className="relative z-20">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
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
                  className="text-gray-300 text-sm md:text-lg pl-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  AIバブルを乗りこなし、年収アップを目指せる環境
                </motion.p>

                <motion.div
                  className="grid grid-cols-3 max-w-[600px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {achievementImages.map((image, index) => (
                    <AchievementImage
                      key={index}
                      {...image}
                      index={index}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="hidden lg:block w-1/3 mr-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/images/mainvisualright.png"
                alt="Main Visual Right"
                className="w-full h-auto scale-150 transform origin-center"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}