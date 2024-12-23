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
  keywords = 'BuzzWave,buzzwave,AI学習,ai学習,AI副業,ai副業,AIビジネス,aiビジネス,AI活用,ai活用,AIスキル,aiスキル,スキルアップ,副業,独立,ビジネススクール,オンラインスクール',
  ogTitle,
  ogDescription,
  ogImage = '/images/BuzzWaveOG.png',
  ogUrl = 'https://wave.leanstack-buzz.com',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false
}: MetaProps) => {
  const domain = 'https://wave.leanstack-buzz.com';
  const fullTitle = `${title}`;  // タイトルの直接使用

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || `${domain}${window.location.pathname}`} />
      <meta property="og:image" content={`${domain}${ogImage}`} />
      <meta property="og:site_name" content="BuzzWave" />
      
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${domain}${ogImage}`} />
      
      <html lang="ja" />
      <meta httpEquiv="content-language" content="ja" />
      
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <>
          <meta name="robots" content="index,follow,max-image-preview:large" />
          <meta name="googlebot" content="index,follow" />
        </>
      )}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      <meta name="theme-color" content="#1d40ae" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={fullTitle} />
    </Helmet>
  );
};