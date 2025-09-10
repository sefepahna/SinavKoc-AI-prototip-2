import React from 'react';
import { motion } from 'motion/react';
import { Brain, Users, Target, BookOpen, TrendingUp, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Yapay Zeka Analizi',
      description: 'Gelişmiş AI algoritmaları ile kişisel öğrenme tarzını analiz eder ve optimum çalışma stratejisi geliştirir.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Uzman Koç Desteği',
      description: 'Deneyimli eğitmenlerden birebir mentorluk alarak motivasyonunu yüksek tut ve hedeflerine odaklan.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Hedef Odaklı Plan',
      description: 'Sınav tarihine özel, günlük ve haftalık hedeflerle organize bir çalışma programı oluştur.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: BookOpen,
      title: 'Akıllı İçerik',
      description: 'Binlerce soru, özet ve konu anlatımına erişim. Yapay zeka eksik konularını tespit eder.',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Performans Takibi',
      description: 'Detaylı raporlar ve istatistiklerle ilerlemenizi takip edin, güçlü ve zayıf yönlerinizi keşfedin.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Verileriniz tamamen güvende. KVKK uyumlu, şifreli ve güvenilir altyapı ile çalışın.',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 mb-4"
          >
            <span className="text-sm">🚀 Benzersiz Özellikler</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI + İnsan Koçluğu ={' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Başarı
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geleneksel koçluk ile yapay zeka teknolojisini harmanlayan devrimci yaklaşımımızla 
            sınav başarınızı maksimuma çıkarın.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Başarılı Öğrenci' },
              { number: '%95', label: 'Başarı Oranı' },
              { number: '1M+', label: 'Çözülen Soru' },
              { number: '7/24', label: 'Destek Hizmeti' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}