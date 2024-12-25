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

export const DefaultJsonLd = () => {
  const domain = 'https://wave.leanstack-buzz.com';
  
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
    '@type': 'Organization',
    name: '株式会社Lean Stack',
    url: domain,
    logo: {
      '@type': 'ImageObject',
      url: `${domain}/images/BuzzWave.png`,
      width: '180',
      height: '60'
    },
    sameAs: [], // ソーシャルメディアのURLを追加
    address: {
      '@type': 'PostalAddress',
      streetAddress: '南久宝寺町1丁目7-8-1110',
      addressLocality: '大阪市中央区',
      addressRegion: '大阪府',
      postalCode: '541-0057',
      addressCountry: 'JP'
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'leanstackbuzz@gmail.com',
      areaServed: 'JP',
      availableLanguage: ['Japanese']
    }]
  };

  const courseData = {
    '@type': 'Course',
    name: 'BuzzWave AIビジネスマスターコース',
    description: 'AIスキルの習得から収益化まで、実践的なカリキュラムで学べる総合プログラム。',
    provider: {
      '@type': 'Organization',
      name: '株式会社Lean Stack',
      url: domain
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'ノーマルコース',
        description: '6ヶ月間の基本プログラム',
        courseMode: ['online'],
        duration: 'P6M',
        courseWorkload: 'P2H30M',
        courseSchedule: {
          '@type': 'Schedule',
          duration: 'P6M',
          repeatFrequency: 'P1W',
          byDay: ['WE'],
          startDate: '2024-01-01',
          endDate: '2024-12-31'
        },
        offer: {
          '@type': 'Offer',
          price: '500000',
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          validThrough: '2024-12-31'
        }
      },
      {
        '@type': 'CourseInstance',
        name: 'スタンダードコース',
        description: '12ヶ月間の総合プログラム',
        courseMode: ['online'],
        duration: 'P1Y',
        courseWorkload: 'P3H',
        courseSchedule: {
          '@type': 'Schedule',
          duration: 'P1Y',
          repeatFrequency: 'P1W',
          byDay: ['WE'],
          startDate: '2024-01-01',
          endDate: '2024-12-31'
        },
        offer: {
          '@type': 'Offer',
          price: '900000',
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          validThrough: '2024-12-31'
        }
      }
    ],
    educationalLevel: 'beginner',
    learningResourceType: 'Course',
    teaches: [
      'AIビジネス戦略',
      'AI活用スキル',
      'デジタルマーケティング',
      'ビジネスプランニング'
    ],
    category: ['AI/Business Training', 'Professional Development'],
    coursePrerequisites: '基本的なPCスキル',
    timeRequired: 'P6M',
    availableLanguage: ['Japanese']
  };

  return (
    <>
      <JsonLd type="WebSite" data={websiteData} />
      <JsonLd type="Organization" data={organizationData} />
      <JsonLd type="Course" data={courseData} />
    </>
  );
};