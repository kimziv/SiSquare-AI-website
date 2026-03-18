import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl" />
              
              {/* Avatar Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-slate-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                <User className="text-gray-400" size={120} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t('about.name')}
                </h3>
                <p className="text-cyan-500 font-medium">{t('about.role')}</p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.bio1')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.bio2')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">48h</div>
                  <div className="text-sm text-gray-500 mt-1">{t('about.stats.mvpDelivery')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">{t('about.stats.aiOperation')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">{t('about.stats.clientBase')}</div>
                  <div className="text-sm text-gray-500 mt-1">{t('about.stats.clientBase')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
