import { motion } from 'framer-motion';
import { Bot, Globe, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Bot,
      title: t('solutions.aiAgents.title'),
      description: t('solutions.aiAgents.description'),
      examples: t('solutions.aiAgents.examples', { returnObjects: true }),
    },
    {
      icon: Globe,
      title: t('solutions.ecommerce.title'),
      description: t('solutions.ecommerce.description'),
      examples: t('solutions.ecommerce.examples', { returnObjects: true }),
    },
    {
      icon: Zap,
      title: t('solutions.mvp.title'),
      description: t('solutions.mvp.description'),
      examples: t('solutions.mvp.examples', { returnObjects: true }),
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Examples */}
                <ul className="space-y-2">
                  {solution.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
