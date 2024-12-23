import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reasons from './components/Reasons';
import Curriculum from './components/Curriculum';
import Results from './components/Results';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import LoadingScreen from './components/LoadingScreen';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Meta, DefaultJsonLd } from './components/SEO';

// スクロール位置をリセットするコンポーネント
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const validPaths = ['/', '/legal', '/privacy'];
  const isSpecialPage = !validPaths.includes(location.pathname);

  useEffect(() => {
    if (!isSpecialPage) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [isSpecialPage]);

  if (isLoading && !isSpecialPage) {
    return <LoadingScreen setIsLoading={setIsLoading} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={
          <>
            <Meta 
              title="BuzzWave | AI時代を切り開くあなたの第一歩"
              description="BuzzWaveはAIスキルの習得から収益化まで、あなたのビジネス成功をトータルにサポート。未経験からでもAI時代のビジネススキルが身につく、実践的なカリキュラムを提供します。"
              ogTitle="BuzzWave | AI時代を切り開くあなたの第一歩"
              ogDescription="未経験からでもAI時代のビジネススキルが身につく、実践的なカリキュラムを提供。AIスキルの習得から収益化まで、あなたのビジネス成功をトータルにサポートします。"
              canonicalUrl="https://wave.leanstack-buzz.com/"
            />
            <DefaultJsonLd />
            <Header />
            <main>
              <Hero id="hero" />
              <Features id="features" />
              <Reasons />
              <Advantages />
              <Results id="results" />
              <Curriculum id="curriculum" />
              <Pricing />
              <Benefits id="benefits" />
              <FAQ id="faq" />
            </main>
          </>
        } />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <MainContent />
        </AnimatePresence>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;