import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { CurriculumPhase } from './CurriculumPhase';
import { CurriculumPhaseData } from './types';

interface CurriculumProps {
  id: string;
}

const phaseContent: CurriculumPhaseData = {
  mainSteps: [
    "過去の経験や強みからビジネスの「タネ」を発掘",
    "事業の方向性を定めてまずは小さくテスト販売",
    "独自商品を1つ販売してゼロイチ突破をゴールに"
  ],
  details: []  // DetailCardコンポーネント内で定義
};

export default function Curriculum({ id }: CurriculumProps) {
  return (
    <section id={id}>
      <Section className="bg-[#2148c7]">
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
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Curriculum
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
          
          <div className="mt-12">
            <CurriculumPhase {...phaseContent} />
          </div>
        </Container>
      </Section>
    </section>
  );
}