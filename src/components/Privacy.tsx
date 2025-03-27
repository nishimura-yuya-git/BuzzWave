import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Meta } from './SEO';

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#1d40ae] flex flex-col">
      <Meta 
        title="プライバシーポリシー | BuzzWave"
        description="BuzzWaveのプライバシーポリシー。お客様の個人情報の取り扱いについて定めています。収集する情報、利用目的、第三者提供、保護方針などをご確認いただけます。"
        keywords="BuzzWave,buzzwave,プライバシーポリシー,個人情報保護方針,privacy policy,個人情報,情報セキュリティ"
        ogTitle="プライバシーポリシー | BuzzWave"
        ogDescription="BuzzWaveのプライバシーポリシー。お客様の個人情報の取り扱い、保護方針についてご確認いただけます。"
        canonicalUrl="https://wave.leanstack-buzz.com/privacy"
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
              <span className="text-white">プライバシーポリシー</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* タイトル */}
          <h1 className="text-2xl font-bold text-white mb-12">
            プライバシーポリシー
          </h1>

          {/* コンテンツ */}
          <div className="bg-white/10 backdrop-blur rounded-lg overflow-hidden">
            {[
              {
                title: '基本方針',
                content: '株式会社Lean Stack（以下「当社」）は、個人情報の重要性を認識し、適切な管理、保護に努めます。当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守します。'
              },
              {
                title: '収集する個人情報の範囲',
                content: [
                  '氏名',
                  '会社名',
                  'メールアドレス',
                  '住所',
                  'その他、サービス提供に必要な情報'
                ]
              },
              {
                title: '個人情報の利用目的',
                content: [
                  'サービスの提供、運営、維持',
                  'お問い合わせへの対応',
                  'サービスの改善、新サービスの開発',
                  'キャンペーン、アンケートの実施',
                ]
              },
              {
                title: '個人情報の第三者提供',
                content: '当社は、法令に基づく場合を除き、本人の同意を得ることなく個人情報を第三者に提供することはありません。'
              },
              {
                title: '個人情報の安全管理',
                content: '当社は、個人情報の漏洩、滅失又は毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。'
              },
              {
                title: '開示請求等の手続き',
                content: '本人から個人情報の開示、訂正、削除等の請求があった場合、当社は合理的な期間内に対応いたします。'
              },
              {
                title: 'お問い合わせ窓口',
                content: [
                  '個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：',
                  '株式会社Lean Stack',
                  '住所：大阪府大阪市中央区徳井町2丁目2-13 3F',
                  'メール：leanstackbuzz@gmail.com'
                ]
              },
              {
                title: 'プライバシーポリシーの変更',
                content: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。'
              }
            ].map((section, index, array) => (
              <div 
                key={index}
                className={`
                  md:grid md:grid-cols-[230px,1fr]
                  ${index !== array.length - 1 ? 'border-b border-white/10' : ''}
                `}
              >
                <div className="px-6 py-4 bg-white/5 text-white/90 font-medium md:bg-white/5">
                  {section.title}
                </div>
                <div className="px-6 py-4 text-white/80 border-t border-white/10 md:border-t-0">
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc ml-4 space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 更新日 */}
          <div className="mt-8 text-right text-white/60 text-sm px-4">
            <p>制定日：2024年12月16日</p>
            <p>最終更新日：2024年12月16日</p>
          </div>
        </div>
      </div>
    </div>
  );
}