import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

const IntroMain = ({ id }: { id?: string }) => {
  return (
    <Section id={id} className="bg-white pt-20 md:pt-24 mb-12 md:mb-12">
      <Container>
        {/* タイトル部分 */}
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
                WebkitTextStroke: '1px rgba(29,64,174,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About
            </motion.div>
          </motion.div>

          <motion.h2 
            className="relative text-xl font-bold px-2 text-[#1d40ae] md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            BuzzWaveってどんなサービス？
          </motion.h2>
        </div>

        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* 左側の画像 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/people.jpg"
              alt="スマートフォンを操作する女性"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

          {/* 右側のテキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-left"
          >
            <div className="space-y-2 md:space-y-3 mb-12">
              <div className="bg-gradient-to-r from-[#FF00FF] to-[#3B82F6] rounded-md py-3 px-6 inline-block">
                <h3 className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
                  AIとSNSで自由な
                </h3>
              </div>
              <div className="bg-gradient-to-r from-[#FF00FF] to-[#3B82F6] rounded-md py-3 px-6 inline-block">
                <h3 className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
                  ライフスタイルを。
                </h3>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-loose md:leading-loose max-w-2xl">
              BuzzWaveは、未経験からでもAIとSNSスキルを習得し、AIを活用したSNSを仕事にする方へ導くサービスです。
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-loose md:leading-loose mt-6 max-w-2xl">
              最前線で活躍するマーケターが教える最新ノウハウと、徹底的なサポート体制で自由なライフスタイルを実現させるフリーランスへとあなたを導きます。
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default IntroMain;