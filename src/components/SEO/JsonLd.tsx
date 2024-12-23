import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
    type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebSite' | 'Course';
    data: Record<string, any>;
  }
  
export const JsonLd = ({ type, data }: JsonLdProps) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};
  
// Default JSON-LD implementation
export const DefaultJsonLd = () => {
  const domain = 'https://buzzwave.jp';
  
  const websiteData = {
    '@type': 'WebSite',
    name: 'BuzzWave',
    url: domain,
    description: 'AIスキルの習得から収益化まで、あなたのビジネス成功をトータルにサポートするBuzzWaveの公式サイト。',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${domain}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationData = {
    name: '株式会社Lean Stack',
    url: domain,
    logo: `${domain}/images/BuzzWave.png`,
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '南久宝寺町1丁目7-8-1110',
      addressLocality: '大阪市中央区',
      addressRegion: '大阪府',
      postalCode: '541-0057',
      addressCountry: 'JP'
    }
  };

  const courseData = {
    name: 'BuzzWave AIビジネスマスターコース',
    description: 'AIスキルの習得から収益化まで、実践的なカリキュラムで学べる総合プログラム。',
    provider: {
      '@type': 'Organization',
      name: '株式会社Lean Stack',
      url: domain
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'ノーマルコース',
        description: '6ヶ月間の基本プログラム',
        price: '500000',
        priceCurrency: 'JPY',
        duration: 'P6M',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'スタンダードコース',
        description: '12ヶ月間の総合プログラム',
        price: '900000',
        priceCurrency: 'JPY',
        duration: 'P12M',
        availability: 'https://schema.org/InStock'
      }
    ]
  };

  return (
    <>
      <JsonLd type="WebSite" data={websiteData} />
      <JsonLd type="Organization" data={organizationData} />
      <JsonLd type="Course" data={courseData} />
    </>
  );
};