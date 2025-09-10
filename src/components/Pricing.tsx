import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Check, Star, Zap } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'SınavKoç Plus',
      price: '299',
      period: 'ay',
      description: 'Bireysel öğrenciler için temel AI koçluk paketi',
      features: [
        'Yapay zeka destekli kişisel çalışma planı',
        'Aylık 2 saat uzman koç görüşmesi',
        '10.000+ soru bankası erişimi',
        'Performans takibi ve raporlama',
        'Mobil uygulama erişimi',
        'Temel analitik raporlar',
        'E-posta desteği'
      ],
      popular: false,
      gradient: 'from-purple-500 to-purple-600',
      buttonText: 'Plus\'ı Seç'
    },
    {
      name: 'SınavKoç Pro',
      price: '499',
      period: 'ay',
      description: 'Yoğun hazırlık yapan öğrenciler için premium paket',
      features: [
        'Gelişmiş AI analizi ve öneriler',
        'Haftalık 4 saat uzman koç görüşmesi',
        'Sınırsız soru bankası erişimi',
        'Detaylı performans analizi',
        'Öncelikli mobil uygulama özellikleri',
        'Gelişmiş analitik ve tahmin raporları',
        '7/24 öncelikli destek',
        'Sınav stratejileri atölyesi',
        'Stres yönetimi seansları'
      ],
      popular: true,
      gradient: 'from-orange-500 to-orange-600',
      buttonText: 'Pro\'yu Seç'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="text-sm">💎 Fiyatlandırma</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hedefine Uygun{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Planı Seç
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her bütçeye uygun paketlerle sınav başarına giden yolculuğunu bugün başlat. 
            7 gün ücretsiz deneme ile risk almadan keşfet.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  <Star className="w-4 h-4 mr-1" />
                  En Popüler
                </motion.div>
              )}

              <div className="p-8 lg:p-10">
                {/* Plan Header */}
                <div className="mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    {plan.popular ? (
                      <Zap className="w-8 h-8 text-white" />
                    ) : (
                      <Star className="w-8 h-8 text-white" />
                    )}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">₺{plan.price}</span>
                    <span className="text-xl text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>

                <p className="text-center text-sm text-gray-500 mt-4">
                  7 gün ücretsiz deneme • İstediğin zaman iptal et
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-700 font-medium">
              30 gün koşulsuz para iade garantisi
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}