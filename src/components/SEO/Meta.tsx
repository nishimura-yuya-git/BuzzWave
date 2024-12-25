import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export const Meta = ({
  title = 'BuzzWave | AI時代を切り開くあなたの第一歩',
  description = 'BuzzWaveはAIスキルの習得から収益化まで、あなたのビジネス成功をトータルにサポート。未経験からでもAI時代のビジネススキルが身につく、実践的なカリキュラムを提供します。',
  keywords = 'BuzzWave,buzzwave,AI学習,ai学習,AI副業,ai副業,AIビジネス,aiビジネス,AI活用,ai活用,AIスキル,aiスキル,スキルアップ,副業,独立,ビジネススクール,オンラインスクール,AI教育,ai教育,デジタルマーケティング,digital marketing,収益化,monetization,キャリアアップ,career up,AI人材育成,ai人材育成,AI転職,ai転職,人工知能,artificial intelligence,AI講座,ai講座,AI事業,ai事業,オンライン学習,online learning,プログラミング学習,programming,AI開発,ai開発,ChatGPT,chatgpt,AI研修,ai研修,ビジネスAI,ビジネスai,AI活用ビジネス,ai活用ビジネス,AI収益化,ai収益化',
  ogTitle,
  ogDescription,
  ogImage = '/images/BuzzWaveOG.png',
  ogUrl = 'https://wave.leanstack-buzz.com',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false
}: MetaProps) => {
  const domain = 'https://wave.leanstack-buzz.com';
  const fullTitle = `${title}`;

  return (
    <Helmet>
      {/* 基本設定 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OGP設定 */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || `${domain}${window.location.pathname}`} />
      <meta property="og:image" content={`${domain}${ogImage}`} />
      <meta property="og:site_name" content="BuzzWave" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@BuzzWave" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${domain}${ogImage}`} />
      
      {/* 言語設定 */}
      <html lang="ja" />
      <meta httpEquiv="content-language" content="ja" />
      
      {/* インデックス制御 */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <>
          <meta name="robots" content="index,follow,max-image-preview:large" />
          <meta name="googlebot" content="index,follow" />
        </>
      )}
      
      {/* canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* レスポンシブ・互換性設定 */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* その他の設定 */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1d40ae" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={fullTitle} />

      {/* PWAサポート */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
    </Helmet>
  );
};