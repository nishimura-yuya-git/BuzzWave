import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  }, []);

  const navigation = [
    { name: '特徴', href: 'features' },
    { name: '実績', href: 'results' },
    { name: 'カリキュラム', href: 'curriculum' },
    { name: '大特典', href: 'benefits' },
    { name: 'FAQ', href: 'faq' }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMobileNav(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileNav(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/BuzzWave.png" 
              alt="BuzzWave Logo" 
              className="h-12"
            />
          </motion.div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex space-x-6">
                {navigation.map((item, index) => (
                  <motion.li 
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 * index
                    }}
                  >
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="text-white hover:text-blue-300 transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"/>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button 
                className="
                  bg-blue-600
                  text-white 
                  px-6 
                  py-2 
                  rounded-lg 
                  font-semibold 
                  border-b-[5px]
                  border-blue-800
                  shadow-[0_3px_5px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-200
                  hover:translate-y-[3px]
                  hover:border-b-[2px]
                  hover:bg-blue-500
                "
              >
                無料相談はこちら ▶
              </button>
            </motion.div>
          </div>

          {/* ハンバーガーメニューボタン */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="md:hidden relative w-16 h-16 rounded-full group focus:outline-none pl-10"
            aria-label="メニュー"
          >
            <div className="absolute inset-0 rounded-full">
              <motion.div
                className="absolute -inset-2 rounded-full bg-gray-50/50 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-white group-hover:border-gray-300"
              />
            </div>

            <div className="relative w-full h-full flex items-center justify-center -ml-5">
              <div className="flex flex-col gap-2 relative" style={{ marginLeft: "-15px" }}>
                <motion.span 
                  className="absolute w-4 h-[1px] bg-white origin-center"
                  animate={{
                    rotate: showMobileNav ? 45 : 0,
                    translateY: showMobileNav ? 2 : -8,
                    translateX: showMobileNav ? 0 : '0.25rem',
                    width: '16px'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.span 
                  className="absolute w-4 h-[1px] bg-white"
                  animate={{
                    opacity: showMobileNav ? 0 : 1,
                    translateX: '0rem',
                    width: '16px'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.span 
                  className="absolute w-4 h-[1px] bg-white origin-center"
                  animate={{
                    rotate: showMobileNav ? -45 : 0,
                    translateY: showMobileNav ? 2 : 8,
                    translateX: showMobileNav ? 0 : '-0.25rem',
                    width: '16px'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-[480px] h-full bg-blue-900/95 backdrop-blur-md shadow-xl"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowMobileNav(false)}
              className="absolute top-8 right-8"
              aria-label="閉じる"
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-white">×</span>
                </div>
              </div>
            </motion.button>

            <div className="p-8 h-full overflow-y-auto">
              <div className="space-y-6 pt-20">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="pb-4"
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left group relative block"
                    >
                      <div className="flex items-end gap-3">
                        <span className="text-2xl font-medium text-white relative">
                          {item.name}
                          <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                        </span>
                      </div>
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                >
                  <div className="h-[72px] flex items-center">
                    <button
                      className="
                        block
                        text-white 
                        px-8 
                        py-4 
                        rounded-lg 
                        text-xl 
                        font-bold 
                        bg-blue-600
                        border-b-[5px]
                        border-blue-800
                        shadow-[0_3px_5px_rgba(0,0,0,0.3)]
                        transition-all
                        duration-200
                        hover:translate-y-[3px]
                        hover:border-b-[2px]
                        hover:bg-blue-500
                        w-full
                      "
                    >
                      無料相談はこちら ▶
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}