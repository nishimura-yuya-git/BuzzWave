import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebSite' | 'Course' | 'FAQPage';
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
    description: 'AIスキルの習得から収益化まで、実践的なカリキュラムで学べる総合プログラム。ChatGPTなどのAIツールを活用したビジネススキルを習得できます。',
    potentialAction: [{
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${domain}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }]
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
    sameAs: [
      'https://twitter.com/leanstack',
      'https://www.facebook.com/leanstack',
      'https://www.linkedin.com/company/leanstack'
    ],
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
      telephone: '+81-6-XXXX-XXXX',
      contactType: 'customer service',
      email: 'leanstackbuzz@gmail.com',
      areaServed: 'JP',
      availableLanguage: ['Japanese']
    }]
  };

  const courseData = {
    '@type': 'Course',
    name: 'BuzzWave AIビジネスマスターコース',
    description: 'AIスキルの習得から収益化まで、実践的なカリキュラムで学べる総合プログラム。ChatGPTなどのAIツールを活用したビジネススキルを習得できます。',
    provider: {
      '@type': 'Organization',
      name: '株式会社Lean Stack',
      url: domain
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '500000',
      highPrice: '900000',
      priceCurrency: 'JPY',
      category: 'Online Course',
      offers: [{
        '@type': 'Offer',
        name: 'ノーマルコース',
        price: '500000',
        priceCurrency: 'JPY',
        description: '6ヶ月間の基本プログラム',
        availability: 'https://schema.org/InStock',
        url: `${domain}/#pricing`
      }, {
        '@type': 'Offer',
        name: 'スタンダードコース',
        price: '900000',
        priceCurrency: 'JPY',
        description: '12ヶ月間の総合プログラム',
        availability: 'https://schema.org/InStock',
        url: `${domain}/#pricing`
      }]
    },
    coursePrerequisites: '基本的なPCスキル',
    educationalLevel: 'beginner',
    learningResourceType: 'Online Course',
    teaches: [
      'AIビジネス戦略',
      'ChatGPT活用スキル',
      'デジタルマーケティング',
      'ビジネスプランニング'
    ],
    hasCourseInstance: [{
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: 'P6M',
      courseWorkload: 'PT10H'
    }]
  };

  const faqData = {
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'AIおよび副業未経験でビジネスの知識もありませんが、ついていけるでしょうか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、未経験の方でも安心して学べます。これまでの受講者の6割以上がAI・ビジネス未経験者で、多くの方が成果を出しています。'
      }
    }, {
      '@type': 'Question',
      name: 'どれくらいの期間でどれほどの成果が出るのでしょうか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差はありますが、充実した環境とサポート体制により、最短での成果達成を支援します。'
      }
    }, {
      '@type': 'Question',
      name: '受講生はどんな方が多いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '会社員、フリーランサー、大学生、起業家、主婦まで幅広い方々にご参加いただいております。年齢は20〜40代が8割以上を占めています。'
      }
    }]
  };

  return (
    <>
      <JsonLd type="WebSite" data={websiteData} />
      <JsonLd type="Organization" data={organizationData} />
      <JsonLd type="Course" data={courseData} />
      <JsonLd type="FAQPage" data={faqData} />
    </>
  );
};