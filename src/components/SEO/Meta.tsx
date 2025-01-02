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
  lang?: string;
  schema?: Record<string, any>[];
}

export const Meta = ({
  title = 'BuzzWave｜AI時代のビジネスを加速させるオンラインスクール',
  description = 'BuzzWaveは、AI技術とChatGPTを活用したビジネススキルを0から学べる実践型オンラインスクール。未経験からでも最短で収益化を実現し、多くの受講生が月収10万円以上を達成。AI時代に必要なビジネススキルを、確実に身につけられる環境を提供します。',
  keywords = 'BuzzWave,AI学習,AI副業,AIビジネス,ChatGPT,AI収益化,オンラインスクール,AI教育,デジタルマーケティング,ビジネススクール,AI活用,プログラミング,AI開発,人工知能,スキルアップ,副業,独立,AI転職,AI人材,AI講座,AI研修,ビジネスAI',
  ogTitle,
  ogDescription,
  ogImage = '/images/ogp.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false,
  lang = 'ja',
  schema = []
}: MetaProps) => {
  const domain = 'https://wave.leanstack-buzz.com';
  const fullTitle = `${title}`;

  return (
    <Helmet>
      {/* 基本設定 */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BuzzWave" />
      <meta name="copyright" content="© 2024 BuzzWave All Rights Reserved." />
      
      {/* OGP設定 */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || `${domain}${window.location.pathname}`} />
      <meta property="og:image" content={`${domain}${ogImage}`} />
      <meta property="og:site_name" content="BuzzWave" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BuzzWave - AI時代のビジネススクール" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@BuzzWave" />
      <meta name="twitter:creator" content="@BuzzWave" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${domain}${ogImage}`} />
      
      {/* インデックス制御 */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <>
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
        </>
      )}
      
      {/* リンク関連 */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <link rel="alternate" href={`${domain}${window.location.pathname}`} hrefLang="ja" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* モバイル最適化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="theme-color" content="#1d40ae" />
      
      {/* PWA対応 */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="BuzzWave" />
      <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      <link rel="apple-touch-startup-image" href="/images/splash.png" />
      
      {/* パフォーマンス最適化 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* ソーシャルメディア検証用メタタグ */}
      <meta name="facebook-domain-verification" content="[あなたの検証コード]" />
      <meta name="google-site-verification" content="[あなたの検証コード]" />
      
      {/* スキーママークアップ */}
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};