import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { CurriculumPhase } from './CurriculumPhase';

const phases = [
  {
    title: "「ゼロ→イチ」フェーズ",
    steps: [
      "AIビジネスの基本原則を理解する",
      "AIとSNSでマネタイズする流れの習得",
      "収益条件を満たし、ゼロイチ突破達成"
    ],
    level: "0→1"
  },
  {
    title: "「イチ→ジュウ」フェーズ",
    steps: [
      "独自商品を販売してより安定した収入を獲得",
      "AIを使って商品が売れる「パターン」を仕組み化",
      "商品の満足度や顧客の成果の再現性を高める"
    ],
    level: "1→10"
  },
  {
    title: "「ジュウ→ヒャク」フェーズ",
    steps: [
      "広告運用の内製化と商品力の強化",
      "内部管理体制のマニュアル化と組織づくり",
      "スケールアップを狙い年商「億」を超える事業家へ"
    ],
    level: "10→100"
  }
];

interface CurriculumProps {
  id: string;
}

export default function Curriculum({ id }: CurriculumProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id={id}>
      <Section className="bg-[#1d40ae]">
        <Container>
          <div className="relative h-[50px] md:h-[60px]">
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
                curriculum
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
                BuzzWaveの学習カリキュラム
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            className="space-y-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {phases.map((phase, index) => (
              <motion.div
                key={index}
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
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <CurriculumPhase 
                  {...phase}
                  imageNumber={index + 1} 
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </section>
  );
}