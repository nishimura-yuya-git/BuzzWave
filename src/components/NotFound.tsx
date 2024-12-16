import { Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1d40ae] flex flex-col">
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

      {/* パンくずリスト */}
      <div className="w-full mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-white/80">
            <button 
              onClick={handleHomeClick}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Home size={14} />
              ホーム
            </button>
            <span className="mx-2 text-white/60">{'>'}</span>
            <span className="text-white">ページが見つかりません</span>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl bg-blue-400/10" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl bg-blue-400/10" />
        </div>

        <div className="w-full max-w-4xl relative">
          <div className="text-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-auto mb-12" />
            
            <h2 className="text-4xl font-bold text-white/40 mb-4">404 ERROR</h2>
            
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-8">
              ページが見つかりません
            </h1>
            
            <p className="text-xl text-white/80 mb-12">
              お探しのページは存在しないか、移動もしくは削除された可能性があります。
            </p>

            <button
              onClick={handleHomeClick}
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                text-xl
                font-bold
                text-blue-600
                bg-white
                rounded-lg
                shadow-lg
                transition-all
                duration-200
                hover:bg-blue-50
                group
                border-b-[5px]
                border-blue-200
                hover:translate-y-[3px]
                hover:border-b-[2px]
              "
            >
              <span>ホームに戻る</span>
            </button>
            
            <div className="mt-20 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
          </div>
        </div>
      </div>

      {/* フッター */}
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
};

export default NotFound;