import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

const advantages = [
  {
    title: "最先端のAI活用ノウハウを提供",
    description: "最新のAIツールやマーケティング戦略を学べるため、受講後すぐに実務に活かせるスキルが身につきます。AIを活用した具体的な成功事例や実践的なカリキュラムで、他社との差別化を実現します。",
    image: "/images/Providingcutting-edgeAI.png",
    numberPosition: "left"
  },
  {
    title: "初心者からでも安心のサポート体制",
    description: "未経験者やスキルに不安がある方でも、基礎からしっかり学べるカリキュラムを用意しています。さらに、個別のメンター制度やチャットでの質問対応など、充実したサポートで学習を完全バックアップ。",
    image: "/images/Supportsystemforbeginners.png",
    numberPosition: "right"
  },
  {
    title: "短期間で成果を出す実践型プログラム",
    description: "「結果を出すこと」にフォーカスしたプログラム設計。具体的なターゲティング方法や広告効果を最大化するテクニックを短期間で習得可能。多くの受講者が受講後すぐにSNSマーケティングで成果を実感しています。",
    image: "/images/Apracticalprogramthatdelivers.png",
    numberPosition: "left"
  },
  {
    title: "業界トップクラスの講師",
    description: "実際にマーケティング業界で活躍するプロフェッショナルが講師を担当。AI技術を活用したマーケティングの最前線を熟知しているため、現場で通用するリアルなスキルが学べます。",
    image: "/images/Industry-leadinginstructors.png",
    numberPosition: "right"
  },
  {
    title: "受講後も続く強力なコミュニティ",
    description: "受講後は、卒業生や現役受講生とつながれるコミュニティに参加可能。成功事例や最新情報をシェアし合うことで、学びを継続しながら人脈を広げられます。業界ネットワークの形成にも最適です。",
    image: "/images/Strongcommunitythatcontinuesafterthecourse.png",
    numberPosition: "left"
  }
];

export default function Advantages() {
  return (
    <Section className='bg-[#2148c7] md:pt-28 pt-28'>
      {/* タイトルセクション */}
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[50px] md:h-[60px] mb-20">
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-transparent text-[50px] md:text-8xl font-bold leading-tight -mt-10 md:-mt-14 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              What you can.
            </motion.div>
          </motion.div>

          <motion.h2 
            className="relative text-2xl font-bold px-2 text-white md:text-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            BuzzWaveが選ばれる理由
          </motion.h2>
        </div>
      </Container>

      {/* アドバンテージリスト */}
      <div className="space-y-32">
        {advantages.map((advantage, index) => (
          <div key={index} className="relative">
            {/* 背景数字 */}
            <motion.div 
              className={`absolute -top-20 ${
                advantage.numberPosition === 'left' 
                  ? 'left-24 md:left-24 md:top-6 md:text-2xl' 
                  : 'right-24 md:right-24 md:top-10 md:text-2xl'
              } pointer-events-none select-none`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="text-[150px] md:text-[200px] font-bold leading-none text-transparent"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>

            {/* コンテンツエリア */}
            <Container className="px-4 sm:px-6 lg:px-8">
              <div className={`
                relative z-10 
                flex flex-col 
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                gap-8 md:gap-12
                items-center
              `}>
                {/* テキストコンテンツ */}
                <motion.div 
                  className="md:w-1/2 pt-10 md:pt-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-6 max-w-[480px]">
                    <motion.h3 
                      className="text-[20px] md:text-[28px] font-bold text-white text-center md:text-left"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {advantage.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-base md:text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {advantage.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* 画像コンテンツ */}
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative rounded-lg overflow-hidden w-full max-w-[560px] mx-auto">
                    <div className="aspect-[4/3]">
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </div>
        ))}
      </div>

      {/* CTAセクション */}
      {/* キャッチコピーセクション */}
      <div className="mt-32 relative">
        {/* グラデーションの背景 */}
        <div className="absolute inset-0 bg-white" />
        
        {/* コンテンツ */}
        <div className="relative py-20 px-11">
          <Container className="px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white leading-relaxed md:leading-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block md:inline text-[#1d40ae]">AI時代を切り開く、</span>
                <span className="block md:inline text-[#1d40ae]">あなたの第一歩。</span>
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-blue-100 leading-relaxed mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block md:inline text-[#1d40ae]">未経験からでも、</span>
                <span className="block md:inline text-[#1d40ae]">着実に成長できる学習環境</span>
              </motion.p>
            </motion.div>

            {/* CTAセクション */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-[72px] flex items-center">
                  <motion.button
                    whileHover={{ scale: 1 }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <a 
                      href="https://lpfunnnel.yoshiki-buzz.com/line/open/JbYM7MdQ88vT?mtid=NDT2gMeM1gZU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-block
                        text-white 
                        px-8 
                        py-4 
                        rounded-lg 
                        text-xl 
                        font-bold 
                        bg-amber-500
                        border-b-[5px]
                        border-amber-700
                        shadow-[0_3px_5px_rgba(0,0,0,0.3)]
                        transition-all
                        duration-200
                        hover:translate-y-[3px]
                        hover:border-b-[1.5px]
                        hover:bg-amber-500
                        active:translate-y-[3px]
                        active:border-b-[2px]
                        active:bg-amber-500
                        text-center
                      "
                    >
                      無料相談に申し込む ▶
                    </a>
                  </motion.button>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </Section>
  );
}