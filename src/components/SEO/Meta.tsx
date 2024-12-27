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
  description = 'BuzzWaveは、AI技術とChatGPTを活用したビジネススキルを0から学べるオンラインスクール。実践的なカリキュラムで、未経験から最短で収益化を実現。多くの受講生が月額10万円以上の収入を達成。AI時代のビジネススキルを身につけ、あなたの可能性を広げませんか？',
  keywords = 'BuzzWave,AI学習,AI副業,AIビジネス,ChatGPT,AI収益化,オンラインスクール,AI教育,デジタルマーケティング,ビジネススクール,AI活用,プログラミング,AI開発,人工知能,スキルアップ,副業,独立',
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
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1d40ae" />
      
      {/* PWA対応 */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={fullTitle} />
      <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      
      {/* アクセシビリティ */}
      <meta name="application-name" content="BuzzWave" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href={domain} />
      <link rel="preconnect" href={domain} />
      
      {/* スキーママークアップ */}
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};