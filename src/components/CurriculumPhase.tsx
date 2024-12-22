import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { CurriculumPhaseData, DetailItem } from './types';

const DetailCard = ({ iconPath, title, description }: DetailItem) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-28 h-28 mb-4">
      <img 
        src={iconPath} 
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-[#173FB4] font-bold mb-3 text-[17px] whitespace-pre-line leading-relaxed">
      {title}
    </h3>
    <p className="text-[15px] md:text-[14px] text-gray-700 leading-relaxed text-left font-medium">
      {description}
    </p>
  </motion.div>
);

export function CurriculumPhase({ mainSteps }: CurriculumPhaseData) {
  const zeroToOneDetails: DetailItem[] = [
    {
      iconPath: "/images/curriculum01_1.png",
      title: "ビジネス全体像と\n基本原則の理解",
      description: "限られた時間の中で利益最大化を目指します。AIビジネスならではの効率的な収益化メカニズムと、その実践的な展開方法を学びます。"
    },
    {
      iconPath: "/images/curriculum01_2.png",
      title: "ペルソナ設定と\nSNSメディア構築",
      description: "ターゲットを明確にし、どのような発信をしていくかを言語化します。そして、実際にSNSで発信を行い、視聴者やファンを獲得します。"
    },
    {
      iconPath: "/images/curriculum01_3.png",
      title: "生産性を高める\nホンモノのAI活用術",
      description: "最短最速で収益化を達成するためにどのようにしてAIを活用すべきなのか、その全体像を学び実践で活かせるよう落とし込んでいきます。"
    },
    {
      iconPath: "/images/curriculum01_4.png",
      title: "収益の作り方と\n販売導線の構築",
      description: "AIとSNSを掛け合わせて実際にどのように収益化に繋げていくのか、その全体像を学び実践。そしてゼロイチ突破を達成していただきます。"
    }
  ];

  const oneToTenDetails: DetailItem[] = [
    {
      iconPath: "/images/curriculum110_1.png",
      title: "DRMを軸とした\n事業構築の完全理解",
      description: "自身のサービス販売に繋げるためのSNS発信を学び、ビジネスを加速させる3大スキル（コピーライティング・マーケティング・プロモーション）を実践的に身につけます。"
    },
    {
      iconPath: "/images/curriculum110_2.png",
      title: "セールスせずに売れる\nマーケティング設計",
      description: "戦略的な導線設計により、集客から販売までの完全自動化を目指します。時間に縛られることなく、継続的にクライアントを獲得できる効率的なマーケティングシステムを確立します。"
    },
    {
      iconPath: "/images/curriculum110_3.png",
      title: "安定した集客力を\n獲得するためのメディア戦略",
      description: "強固なブランド戦略と効果的な認知拡大により、特定のプラットフォームに縛られない、持続可能な事業基盤を確立。10年先を見据えた、揺るぎないビジネスモデルを構築します。"
    },
    {
      iconPath: "/images/curriculum110_4.png",
      title: "可能性を最大化する\nセルフマネジメントの極意",
      description: "ビジネスを通じて磨く習慣と環境設計のスキルがあなたに真の自由と強さをもたらします。誰にも縛られない、自分らしい人生の創造を実現させます。"
    }
  ];

  const tenToHundredDetails: DetailItem[] = [
    {
      iconPath: "/images/curriculum10100_1.png",
      title: "戦略的な一手で\n成果を変える広告運用",
      description: "成功する広告運用には明確な戦略と的確な判断が不可欠です。競争が激化する市場で、真の成果を生み出すのは、膨大なデータに基づいた戦略的な意思決定を行い、最大限の効果を実現します。"
    },
    {
      iconPath: "/images/curriculum10100_2.png",
      title: "サービスの潜在的価値を\n底上げするPR戦略",
      description: "サービスの価値は、適切に伝えられてこそ真の力を発揮します。戦略的なPR活動によってブランディングを構築し、より大きな価値へと進化させます。"
    },
    {
      iconPath: "/images/curriculum10100_3.png",
      title: "市場の潮流を作り出す\n戦略的マスマーケティング",
      description: "マスマーケティングの真髄は、市場の流れを読むだけでなく、新たな潮流を創り出すことにあります。徹底的なマーケット分析と戦略的なアプローチで、大衆の心を捉え、確実なムーブメントを生み出します。"
    },
    {
      iconPath: "/images/curriculum10100_4.png",
      title: "可能性を最大化する\n最適なM&A戦略",
      description: "M&Aは新たな価値を創造し、可能性を最大限に引き出すための戦略的な選択です。徹底的なデューデリジェンスと的確な価値評価に基づき、最適なM&A戦略を策定し、事業の出口まで見据えた戦略で成功へと導きます。"
    }
  ];

  return (
    <div className="space-y-12">
      {/* ゼロイチフェーズ */}
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:gap-12 items-center mb-8 sm:mb-16">
          <motion.div
            className="w-full sm:w-auto mb-8 sm:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/zeroichi.png"
              alt="ゼロイチフェーズ"
              className="w-full max-w-[380px] mx-auto sm:w-96"
            />
          </motion.div>

          <div className="space-y-4">
            {mainSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0" />
                <p className="text-[18px] md:text-[28px] font-bold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {zeroToOneDetails.map((detail, index) => (
            <DetailCard key={index} {...detail} />
          ))}
        </div>
      </div>

      {/* １→１０フェーズ */}
      <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:gap-12 items-center mb-8 sm:mb-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/ichijyu.png"
              alt="１→１０フェーズ"
              className="w-full max-w-[280px] md:max-w-[380px] mx-auto sm:w-96"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0 mt-10" />
              <p className="text-[16px] md:text-[28px] font-bold pt-10">独自商品を販売してより安定した収入を獲得</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0" />
              <p className="text-[16px] md:text-[28px] font-bold">AIを使って商品が売れる「パターン」を仕組み化</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0" />
              <p className="text-[16px] md:text-[28px] font-bold">商品の満足度や顧客の成果の再現性を高める</p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {oneToTenDetails.map((detail, index) => (
            <DetailCard key={index} {...detail} />
          ))}
        </div>
      </div>

      {/* 10→100フェーズ */}
      <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:gap-12 items-center mb-8 sm:mb-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/jyuhyaku.png"
              alt="10→100フェーズ"
              className="w-full max-w-[380px] mx-auto sm:w-96"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0 mt-10" />
              <p className="text-[15px] md:text-[28px] font-bold pt-10">広告運用の内製化と商品力の強化</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0" />
              <p className="text-[15px] md:text-[28px] font-bold">内部管理体制のマニュアル化と組織づくり</p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CheckCircle className="w-6 h-6 text-[#173FB4] flex-shrink-0" />
              <p className="text-[15px] md:text-[28px] font-bold">スケールアップを狙い年商「億」を超える事業家へ</p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tenToHundredDetails.map((detail, index) => (
            <DetailCard key={index} {...detail} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center space-y-2 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[15px]">
            10→100フェーズは主に事業者さまとの顧問契約やレベニューシェア型の契約となります。
          </p>
          <p className="text-[15px]">
            有力なビジネスパートナーさまとの協業のプランも用意しております。サービス・契約内容の詳細を希望される方は個別にお問い合わせ下さい。
          </p>
        </motion.div>
      </div>
    </div>
  );
}