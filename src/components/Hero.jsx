import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {t('hero.title').split(/(,|，)/).map((part, i) => (
              <span key={i}>
                {part === ',' || part === '，' ? part : part}
                {i === 0 && <br />}
              </span>
            ))}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {t('hero.title').split(/(,|，)/)[1] || ''}
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#features"
              className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/20 flex items-center gap-2"
            >
              {t('hero.exploreModel')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#solutions"
              className="group bg-white hover:bg-gray-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:border-cyan-500 flex items-center gap-2"
            >
              <Play size={20} className="text-cyan-500" />
              {t('hero.viewDemo')}
            </a>
          </motion.div>
        </div>

        {/* Abstract Visual - CSS Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="relative w-full max-w-3xl mx-auto h-64 md:h-96">
            {/* Central Circle - Human */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-80 blur-xl animate-pulse" />
            
            {/* Right Circle - AI */}
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-80 blur-xl animate-pulse delay-500" />
            
            {/* Connection Lines */}
            <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full opacity-60" />
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full" />
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-300 rounded-full" />
              <div className="absolute right-0 top-1/2 w-4 h-4 bg-blue-400 rounded-full" />
            </div>

            {/* Center Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
