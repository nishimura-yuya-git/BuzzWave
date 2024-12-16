import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';
import Container from './ui/Container';
import Section from './ui/Section';
import { Plan } from './types';

const plans: Plan[] = [
  {
    name: "ノーマルコース",
    price: "500,000",
    duration: "6ヶ月",
    features: [
      "会員限定AI×ショート動画講座閲覧",
      "毎週のグループコンサルティング",
      "個別チャットサポート無制限",
      "プロフ・コンテンツ添削無制限",
      "アフィリエイト案件の提供"
    ],
    type: "normal"
  },
  {
    name: "スタンダードコース",
    price: "900,000",
    duration: "12ヶ月",
    features: [
      "会員限定AI×ショート動画講座閲覧",
      "毎週のグループコンサルティング",
      "個別チャットサポート無制限",
      "プロフ・コンテンツ添削無制限",
      "アフィリエイト案件の提供",
      "アフィリエイト案件獲得サポート",
      "独立・開業サポート"
    ],
    type: "standard"
  }
];

export default function Pricing() {
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
              className="text-transparent text-[70px] md:text-8xl font-bold leading-tight -mt-16 md:-mt-14 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Price
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold px-2 text-white md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              料金プラン
            </motion.h2>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-300 text-sm">
            ※ 価格は全て税込表示です
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}