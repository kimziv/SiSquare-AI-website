import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('brand.name')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('nav.solutions')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('nav.opcModel')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.privacy')}</li>
              <li>{t('footer.terms')}</li>
              <li>{t('footer.copyright', { year: currentYear })}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
