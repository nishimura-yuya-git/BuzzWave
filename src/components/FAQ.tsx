import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { FAQItem } from './FAQItem';

interface FAQProps {
  id: string;
}

const faqs = [
  {
    question: "AIおよび副業未経験でビジネスの知識もありませんが、ついていけるでしょうか？",
    answer: "未経験の方でも、はじめから丁寧に理解できるようなカリキュラムや サポート体制を用意しておりますので、全く問題ありません。実際にこれまで参加いただいた方の６割以上、成果を出している方の過半数が、 入会当初はAI・ビジネス未経験者でした。"
  },
  {
    question: "どれくらいの期間でどれほどの成果が出るのでしょうか？",
    answer: "成果にはもちろん個人差があるので、期間をお約束することはできませんが、失敗しづらい・遠回りしづらい・挫折しづらい充実した環境を提供することはお約束することができます。"
  },
  {
    question: "受講生はどんな方が多いですか？(卒業生にはどんな方がいますか？)",
    answer: "会社員・フリーランサー・大学生・起業家・主婦まで色んな職業の方に ご参加頂いております。年齢は２０〜４０代が８割以上。発信ジャンルや 事業領域は「ビジネス」「恋愛」「受験勉強」「ダイエット」「コーチング」 「筋トレ」「美容」などさまざまです。"
  },
  {
    question: "得意なことや強みがなくても、ビジネスできますでしょうか？",
    answer: "ビジネスを学んだりリサーチを進めることによって、マネタイズ できる自分の強みに初めて気づく方は非常に多いです。また、 得意でなくても、情熱を持って取り組めるものがあれば、 情報発信をビジネスに変え、収益化することは十分に可能です。"
  },
  {
    question: "BuzzWaveのサポート内容など詳しい説明を聞きたいです。",
    answer: "下記のお問い合わせボタンから、ご気軽にご相談下さい。"
  }
];

export default function FAQ({ id }: FAQProps) {
  return (
    <section id={id}>
      <Section className="bg-[#1d40ae]">
        <Container>
          <div className="relative h-[10px] md:h-[60px] mb-20 mt-10">
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
                question
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
                よくある質問
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            className="mx-auto space-y-6 px-4 md:px-8 lg:px-12"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <FAQItem 
                  {...faq}
                  number={String(index + 1)} 
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
    </section>
  );
}