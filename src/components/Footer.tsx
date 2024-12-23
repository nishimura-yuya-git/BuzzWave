import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
  );
}