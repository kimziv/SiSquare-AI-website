import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
=======
import logo from '../assets/logo.svg';
>>>>>>> source/main

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', label: t('lang.en'), name: 'English' },
    { code: 'zh-CN', label: t('lang.zhCN'), name: '简体中文' },
    { code: 'zh-HK', label: t('lang.zhHK'), name: '繁體中文' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.solutions'), href: '#solutions' },
    { name: t('nav.opcModel'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<<<<<<< HEAD
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-900"
          >
            {t('brand.name')}
          </motion.div>
=======
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt={t('brand.name')} 
              className="h-15 w-auto"
            />
          </motion.a>
>>>>>>> source/main

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 hover:text-cyan-500 transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Globe size={18} className="text-gray-600" />
                <span className="font-medium text-gray-700">{currentLang.label}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-cyan-50 transition-colors flex items-center justify-between ${
                          i18n.language === lang.code ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="font-medium">{lang.label}</span>
                        {i18n.language === lang.code && (
                          <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {t('nav.startProject')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-600 hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="py-2 border-t border-gray-100 mt-2">
              <div className="text-sm text-gray-500 mb-2">Language / 语言</div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left py-2 ${
                    i18n.language === lang.code ? 'text-cyan-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {lang.label} {lang.name}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium text-center"
            >
              {t('nav.startProject')}
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
