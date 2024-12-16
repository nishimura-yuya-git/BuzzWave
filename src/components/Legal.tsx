import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Legal() {
  return (
    <div className="min-h-screen bg-[#1e3a8a] flex flex-col">
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
              { label: '所在地', value: '大阪府大阪市中央区南久宝寺町1丁目7-8-1110' },
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

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <img 
              src="/images/BuzzWave.png"
              alt="BuzzWave Logo"
              className="h-24"
            />
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
              <Link to="/legal" className="hover:text-white transition-colors">
                特定商取引法に基づく表記
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
            </div>

            <p className="text-gray-400">© 2024 BuzzWave All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}