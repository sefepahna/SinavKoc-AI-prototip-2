import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, BookOpen, Target, Brain } from 'lucide-react';
import { Button } from './ui/button';

export function Blog() {
  const posts = [
    {
      title: 'YKS 2025 Hazırlık Rehberi: Son 6 Ayda Neler Yapmalı?',
      excerpt: 'YKS\'ye kalan son aylarda etkili çalışma stratejileri ve zaman yönetimi teknikleri ile sınav başarınızı maksimuma çıkarın.',
      date: '15 Mart 2025',
      readTime: '8 dk',
      category: 'Sınav Stratejileri',
      image: 'https://images.unsplash.com/photo-1606660956148-5291deb68185?w=400',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Yapay Zeka ile Kişiselleştirilmiş Öğrenme: Geleceğin Eğitimi',
      excerpt: 'AI destekli eğitim platformları nasıl çalışır? Kişiselleştirilmiş öğrenmenin avantajlarını ve etkilerini keşfedin.',
      date: '12 Mart 2025',
      readTime: '6 dk',
      category: 'Teknoloji',
      image: 'https://images.unsplash.com/photo-1646583288948-24548aedffd8?w=400',
      icon: Brain,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Sınav Kaygısını Yenmenin 10 Etkili Yolu',
      excerpt: 'Sınav stresi ve kaygısı normal bir durumdur. Bu duyguları kontrol altına alarak performansınızı artırmanın yollarını öğrenin.',
      date: '10 Mart 2025',
      readTime: '5 dk',
      category: 'Psikoloji',
      image: 'https://images.unsplash.com/photo-1579389248774-07907f421a6b?w=400',
      icon: BookOpen,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const tips = [
    {
      tip: 'Günlük çalışma planınızı yaparken, zor konuları zihinsel performansınızın en yüksek olduğu saatlere yerleştirin.',
      category: 'Zaman Yönetimi'
    },
    {
      tip: 'Pomodoro tekniği ile 25 dakika odaklanın, 5 dakika mola verin. Bu döngüyü 4 kez tekrarlayın, sonra uzun mola yapın.',
      category: 'Verimlilik'
    },
    {
      tip: 'Yanlış çözdüğünüz soruları not edin ve haftada bir kez tekrar çözün. Bu, benzer hataları önler.',
      category: 'Çalışma Tekniği'
    },
    {
      tip: 'Sınav günü için mentalinizi hazırlayın. Görselleştirme tekniği ile başarılı sınav geçirdiğinizi hayal edin.',
      category: 'Mental Hazırlık'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
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
            <span className="text-sm">📚 Blog & İpuçları</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Başarı için{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Rehberlik
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sınav hazırlığından eğitim teknolojilerine, uzmanlarımızdan değerli 
            içerikler ve güncel ipuçları ile başarıya giden yolda rehberlik ediyoruz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts - Left 2/3 */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative overflow-hidden">
                        <div className="aspect-video md:aspect-square bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`w-16 h-16 bg-gradient-to-r ${post.color} rounded-2xl flex items-center justify-center`}
                          >
                            <post.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        
                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-700"
                        >
                          {post.category}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={16} className="mr-2" />
                          {post.date}
                          <Clock size={16} className="ml-4 mr-2" />
                          {post.readTime}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700 transition-colors duration-300"
                        >
                          Devamını Oku
                          <ArrowRight size={16} className="ml-2" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 rounded-full border-2 border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  Tüm Yazıları Görüntüle
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Tips Sidebar - Right 1/3 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💡</span>
                </div>
                Günün İpuçları
              </h3>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
                  >
                    <div className="text-xs font-medium text-purple-600 mb-2 uppercase tracking-wide">
                      {tip.category}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {tip.tip}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 bg-white rounded-xl p-4 border border-white/50"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Haftalık İpuçları</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Her hafta en güncel sınav ipuçları ve başarı stratejileri e-postanızda.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4">
                      Abone Ol
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}