import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { TrendingUp, Globe, Zap, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "成長市場への参入",
    description: "AIマーケットは2030年までに約1,847億ドル規模に成長すると予測されています。2021年の96億ドルから飛躍的な成長が見込まれており、今がビジネスチャンスを掴むベストなタイミングです。",
    image: "/images/FutureAI.png",
    stats: {
      label: "AI市場規模",
      value: "1,847億ドル",
      subtext: "2030年予測"
    }
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "グローバル競争力",
    description: "日本のAI活用率は31カ国中最下位の32%と、世界平均75%を大きく下回っています。他のアジア諸国（インド92%、中国91%など）と比較しても日本は著しく後れを取っており、AIの導入・活用において「AI後進国」となっています。早期にAIスキルを習得することで、このグローバルな競争格差を埋めるチャンスがあります。",
    image: "/images/OverseasComparison.png",
    stats: {
      label: "AI人材不足",
      value: "34万人",
      subtext: "2025年予測"
    }
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "収入の飛躍的向上",
    description: "多くの人がAIに消極的な中（43%が必要性を感じないと回答）、AIスキルを早期に習得することで大きなアドバンテージを得られます。AI関連スキルを持つエンジニアの平均年収は、通常のエンジニアと比較して30%以上高くなっています。",
    image: "/images/Thecause.png",
    stats: {
      label: "収入増加率",
      value: "30%↑",
      subtext: "業界平均比"
    }
  }
];

export default function Reasons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className="bg-[#1d40ae]">
      <Container>
        <div className="relative h-[50px] md:h-[60px] mb-16">
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="text-transparent text-[80px] md:text-9xl font-bold leading-tight -mt-16 md:-mt-20 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              reason
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
              今AIを学ぶべき理由
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div 
                className="lg:w-1/2 space-y-6 text-white"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Lightbulb className="h-8 w-8 text-yellow-400" fill="currentColor" />
                  <h3 className="text-2xl font-bold">{reason.title}</h3>
                </div>
                
                <p className="text-lg leading-relaxed">
                  {reason.description}
                </p>

                <motion.div 
                  className="bg-blue-50 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {reason.stats.label}
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">
                    {reason.stats.value}
                  </div>
                  <div className="text-sm text-blue-600">
                    {reason.stats.subtext}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -inset-4 rounded-xl -z-10" />
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}