import { motion } from 'framer-motion';
import Container from './ui/Container';
import BenefitCard from './BenefitCard';

interface BenefitsProps {
  id?: string;
}

const Benefits = ({ id }: BenefitsProps) => {
  const benefits = [
    {
      imageUrl: "/images/specialfeature1.jpg",
      alt: "5ステップマニュアル"
    },
    {
      imageUrl: "/images/specialfeature2.jpg",
      alt: "台本作成バイブル"
    },
    {
      imageUrl: "/images/specialfeature3.jpg",
      alt: "バズワード300選"
    },
    {
      imageUrl: "/images/specialfeature4.jpg",
      alt: "カラクリ"
    },
    {
      imageUrl: "/images/specialfeature5.jpg",
      alt: "錬金術"
    },
    {
      imageUrl: "/images/specialfeature6.jpg",
      alt: "スキマ時間フル活用マニュアル"
    },
    {
      imageUrl: "/images/specialfeature7.jpg",
      alt: "AI実践動画講座"
    },
    {
      imageUrl: "/images/specialfeature8.jpg",
      alt: "ビジネスツール集"
    },
    {
      imageUrl: "/images/specialfeature9.jpg",
      alt: "優先サポート権"
    },
    {
      imageUrl: "/images/specialfeature10.jpg",
      alt: "実践ワークショップ"
    }
  ];

  return (
    <section 
      id={id} 
      className="bg-[#1d40ae] pt-20"
    >
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
              className="text-transparent text-[46px] md:text-8xl font-bold leading-tight -mt-7 md:-mt-14 px-2"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Special Feature
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.h2 
              className="text-[22px] font-bold px-2 text-white md:text-3xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              今だけ入会者に10大特典配布中！
            </motion.h2>
            <motion.p 
              className="text-left text-gray-200 text-sm mt-4 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              期間限定の特別特典をご用意しました
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Benefits;