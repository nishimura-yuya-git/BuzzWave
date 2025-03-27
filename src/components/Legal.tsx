import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Meta } from './SEO';

export function Legal() {
  return (
    <div className="min-h-screen bg-[#1d40ae] flex flex-col">
      <Meta 
        title="特定商取引法に基づく表記 | BuzzWave"
        description="BuzzWaveの特定商取引法に基づく表記。サービスの提供者情報や取引条件、支払い方法、返品・キャンセルポリシーなど、法律で定められた表記事項をご確認いただけます。"
        keywords="BuzzWave,buzzwave,特定商取引法,特商法,利用規約,取引条件,キャンセルポリシー,返品規定,法的開示"
        ogTitle="特定商取引法に基づく表記 | BuzzWave"
        ogDescription="BuzzWaveの特定商取引法に基づく表記。サービスの提供者情報や取引条件について確認できます。"
        canonicalUrl="https://wave.leanstack-buzz.com/legal"
      />
      <div className="flex-grow">
        {/* シンプルなヘッダー */}
        <header className="w-full fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center">
            <Link to="/" className="inline-block">
              <img 
                src="/images/BuzzWave.png" 
                alt="BuzzWave Logo" 
                className="h-12"
              />
            </Link>
          </div>
        </header>

        {/* ヘッダーの高さ分のスペーサー */}
        <div className="h-[76px]"></div>

        {/* パンくずリスト */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center text-sm text-white/80">
              <Link to="/" className="hover:text-white flex items-center gap-1">
                <Home size={14} />
                ホーム
              </Link>
              <span className="mx-2 text-white/60">{'>'}</span>
              <span className="text-white">特定商取引法に基づく表記</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* タイトル */}
          <h1 className="text-2xl font-bold text-white mb-12">
            特定商取引法に基づく表記
          </h1>

          {/* テーブル */}
          <div className="bg-white/10 backdrop-blur rounded-lg overflow-hidden">
            {[
              { label: '事業者の名称', value: '株式会社Lean Stack' },
              { label: '代表者名', value: '代表取締役 吹上由樹' },
              { label: '所在地', value: '大阪府大阪市中央区徳井町2丁目2-13 3F' },
              { label: 'メールアドレス', value: 'leanstackbuzz@gmail.com', isLink: true },
              { 
                label: '販売価格',
                value: [
                  'ノーマルコース500,000円（税込）',
                  'スタンダードコース900,000円（税込）'
                ]
              },
              { label: '支払方法', value: '銀行振込・クレジットカード・ショッピングクレジット' },
              { label: '支払時期', value: '契約締結日を含めて7日限り' },
              { label: 'サービス提供時期', value: '支払いが確認できた後、３営業日以内にサービスの提供を開始します' }
            ].map((item, index, array) => (
              <div 
                key={index}
                className={`
                  md:grid md:grid-cols-[200px,1fr] 
                  ${index !== array.length - 1 ? 'border-b border-white/10' : ''}
                `}
              >
                <div className="px-6 py-4 bg-white/5 text-white/90 font-medium">
                  {item.label}
                </div>
                <div className="px-6 py-4 text-white/80 border-t border-white/10 md:border-t-0">
                  {Array.isArray(item.value) ? (
                    <ul className="list-disc ml-4 space-y-2">
                      {item.value.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : item.isLink ? (
                    <a 
                      href={`mailto:${item.value}`} 
                      className="text-white hover:text-white/60 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}