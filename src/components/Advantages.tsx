import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

const advantages = [
  {
    title: "最先端のAI活用ノウハウを提供",
    description: "最新のAIツールやマーケティング戦略を学べるため、受講後すぐに実務に活かせるスキルが身につきます。AIを活用した具体的な成功事例や実践的なカリキュラムで、他社との差別化を実現します。"
  },
  {
    title: "初心者からでも安心のサポート体制",
    description: "未経験者やスキルに不安がある方でも、基礎からしっかり学べるカリキュラムを用意しています。さらに、個別のメンター制度やチャットでの質問対応など、充実したサポートで学習を完全バックアップ。"
  },
  {
    title: "短期間で成果を出す実践型プログラム",
    description: "「結果を出すこと」にフォーカスしたプログラム設計。具体的なターゲティング方法や広告効果を最大化するテクニックを短期間で習得可能。多くの受講者が受講後すぐにSNSマーケティングで成果を実感しています。"
  },
  {
    title: "業界トップクラスの講師",
    description: "実際にマーケティング業界で活躍するプロフェッショナルが講師を担当。AI技術を活用したマーケティングの最前線を熟知しているため、現場で通用するリアルなスキルが学べます。"
  },
  {
    title: "受講後も続く強力なコミュニティ",
    description: "受講後は、卒業生や現役受講生とつながれるコミュニティに参加可能。成功事例や最新情報をシェアし合うことで、学びを継続しながら人脈を広げられます。業界ネットワークの形成にも最適です。"
  }
];

export default function Advantages() {
  return (
    <Section className='bg-[#1d40ae]'>
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
              className="text-transparent text-[50px] md:text-8xl font-bold leading-tight -mt-10 md:-mt-14 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              What you can.
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold px-2 text-left text-white md:text-3xl">
              BuzzWaveが選ばれる理由
            </h2>
          </motion.div>
        </div>
        
        <motion.div 
          className="space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col items-stretch gap-8 md:gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.div 
                className="md:w-1/2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.div 
                    className="text-[180px] md:text-[240px] font-bold leading-none text-transparent"
                    style={{
                      WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif'
                    }}
                    initial={{ opacity: 0, rotateX: -90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 space-y-4 flex flex-col justify-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {advantage.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {advantage.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="h-[72px] flex items-center">
            <motion.button 
              className="
                  block
                  text-white 
                  px-8 
                  py-4 
                  mt-10
                  rounded-lg 
                  text-xl 
                  font-bold 
                  bg-blue-600
                  border-b-[5px]
                  border-blue-800
                  shadow-[0_3px_5px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-200
                  hover:translate-y-[3px]
                  hover:border-b-[1.5px]
                  active:translate-y-[3px]
                  active:border-b-[2px]
                  active:bg-blue-500
              "
            >
              無料相談に申し込む  ▶
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}