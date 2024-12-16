import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reasons from './components/Reasons';
import Curriculum from './components/Curriculum';
import Results from './components/Results';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import './index.css';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';

// スクロール位置をリセットするコンポーネント
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 overscroll-none">
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

      <footer className="bg-gray-900 text-white py-12">
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

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* スクロール位置をリセットするコンポーネントを追加 */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;