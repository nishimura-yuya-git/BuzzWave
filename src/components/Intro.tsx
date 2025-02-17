import { motion } from 'framer-motion';

const Intro = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="bg-gradient-to-b from-white-900 to-white text-black py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            AIとSNSで自由なライフスタイルを
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            BuzzWaveは、未経験からでもAIとSNSスキルを習得し、AIを活用したSNSを仕事にする方へ導くサービスです。
            最前線で活躍するマーケターが教える最新ノウハウと、徹底的なサポート体制で自由なライフスタイルを実現させるフリーランスへとあなたを導きます。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro; 