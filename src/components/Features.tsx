import { motion } from 'framer-motion';

interface AIBusinessHeroProps {
  id: string;
}

const AIBusinessHero = ({ id }: AIBusinessHeroProps) => {
  const textContent = [
    {
      lines: ["AI副業で変わり映えのない", "人生を変える"],
      style: "text-4xl font-bold tracking-wider flex flex-col"
    },
    {
      lines: [
        "「AIを使った副業で収入を増やしたい」",
        "「今の会社を辞めて、ゆくゆくは独立したい」",
        "「本業以上の収入を稼げるスキルを身につけたい」"
      ],
      style: "font-medium tracking-wider leading-relaxed text-sm md:text-2xl"
    },
    {
      lines: [
        "今まさに来ているAIバブルに乗っかって、",
        "AIスキルを身につけ、「価値」へと変換させ、",
        "最短最速で大きく稼ぐ"
      ],
      style: "font-medium text-sm md:text-2xl"
    },
    {
      lines: [
        "そして、誰にも縛られることなく、",
        "人生の舵を自分でコントロールできる。"
      ],
      style: "font-medium text-sm md:text-2xl"
    },
    {
      lines: [
        "そんな誰もが理想とするライフスタイルを",
        "再現性高く実現させるための環境です。"
      ],
      style: "font-medium text-sm md:text-2xl"
    }
  ];

  return (
    <div id={id} className="min-h-screen bg-[#2148c7] text-white relative overflow-hidden pt-32 md:pt-20 -mb-16 md:mb-0">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto px-5 md:py-32 md:px-20">
        <div className="space-y-12">
          {textContent.map((content, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.2
              }}
              className={groupIndex === 0 ? "relative h-[100px] md:h-[200px]" : ""}
            >
              {groupIndex === 0 ? (
                <>
                  <div className="absolute inset-0">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {content.lines.map((line, index) => (
                        <div
                          key={index}
                          className={`text-transparent text-[${index === 0 ? '29px' : '35px'}] text-2xl md:text-8xl font-bold leading-9 ${
                            index === 0 ? '-mt-3 md:-mt-11' : 'mt-3 md:pt-10 md:-mt-8'
                          }`}
                          style={{
                            WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  <div className="relative">
                    <h1 className={content.style}>
                      {content.lines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                          className={`${index === 0 ? 'text-[24px] mb-3 px-2 md:text-7xl md:mb-8' : 'text-[27px] px-2 md:text-7xl'}`}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </h1>
                  </div>
                </>
              ) : (
                <div
                  className="space-y-6 text-2xl md:text-3xl text-blue-100"
                  style={{
                    fontFamily: 'Noto Sans JP, sans-serif',
                    letterSpacing: '0.1em',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <p className={content.style}>
                    {content.lines.map((line, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="block"
                      >
                        {line}
                      </motion.span>
                    ))}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-12 right-12 w-64 md:w-[660px] hidden md:block"
        >
          <img
            src="/images/Features.png"
            alt="Features"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AIBusinessHero;