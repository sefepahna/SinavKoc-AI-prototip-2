import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Elif Yılmaz',
      exam: 'YKS 2024',
      score: '478.6',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      content: 'SınavKoç AI sayesinde hedeflediğim üniversiteye yerleştim. Yapay zeka analizleri gerçekten işe yarıyor, hangi konularda eksik olduğumu net bir şekilde gösterdi.',
      rating: 5
    },
    {
      name: 'Ahmet Kaya',
      exam: 'ALES 2024',
      score: '85.4',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      content: 'Uzman koçlarla yaptığım görüşmeler motivasyonumu çok artırdı. Kişiselleştirilmiş çalışma planı sayesinde daha verimli çalışmaya başladım.',
      rating: 5
    },
    {
      name: 'Zeynep Demir',
      exam: 'KPSS 2024',
      score: '91.2',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400',
      content: 'Platform sayesinde zayıf olduğum matematik konularını güçlendirdim. AI\'ın önerdiği sorular tam ihtiyacım olan şeylerdi.',
      rating: 5
    },
    {
      name: 'Murat Özkan',
      exam: 'DGS 2024',
      score: '487.1',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      content: 'Performans takibi özelliği harika! İlerlemeyi görmek motivasyonumu artırıyor. Koçum da sürekli destek oluyor.',
      rating: 5
    },
    {
      name: 'Ayşe Şahin',
      exam: 'YDS 2024',
      score: '87.5',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      content: 'İngilizce seviyemi çok hızlı geliştirdim. Adaptif öğrenme sistemi gerçekten çok etkili, tam seviyeme uygun sorularla çalıştım.',
      rating: 5
    },
    {
      name: 'Can Arslan',
      exam: 'TYT 2024',
      score: '412.8',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      content: 'Stres yönetimi seansları sınav kaygımı çok azalttı. Şimdi sınavlara çok daha rahat giriyorum.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
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
            <span className="text-sm">💬 Başarı Hikayeleri</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Öğrencilerimiz{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce öğrencinin hayallerine ulaşmasına yardım ettik. 
            Onların başarı hikayelerini keşfedin.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                {/* Background Quote */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-purple-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{testimonial.exam}</span>
                      <span className="mx-2">•</span>
                      <span className="font-semibold text-green-600">{testimonial.score}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-orange-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-700 mb-2">4.9/5</div>
              <div className="text-purple-600">Ortalama Puan</div>
              <div className="text-sm text-purple-500 mt-1">2,847 değerlendirme</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-orange-700 mb-2">%95</div>
              <div className="text-orange-600">Başarı Oranı</div>
              <div className="text-sm text-orange-500 mt-1">Hedef sınavlarda</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-700 mb-2">%98</div>
              <div className="text-green-600">Tavsiye Oranı</div>
              <div className="text-sm text-green-500 mt-1">Arkadaşlara tavsiye</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}