import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Email */}
          <motion.a
            href="mailto:hello@sisquare.ai"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">{t('contact.emailUs')}</div>
              <div className="text-lg font-semibold text-slate-900 group-hover:text-cyan-500 transition-colors">
                hello@sisquare.ai
              </div>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">{t('contact.location')}</div>
              <div className="text-lg font-semibold text-slate-900">
                {t('contact.address')}
              </div>
              <div className="text-sm text-gray-500">{t('contact.servingGlobal')}</div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group"
          >
            <Linkedin className="text-gray-600 group-hover:text-white transition-colors" size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group"
          >
            <Github className="text-gray-600 group-hover:text-white transition-colors" size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group"
          >
            <Twitter className="text-gray-600 group-hover:text-white transition-colors" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
