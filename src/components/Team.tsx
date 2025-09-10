import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Team() {
  const founders = [
    {
      name: 'Dr. Mehmet Yılmaz',
      role: 'Kurucu & CEO',
      expertise: 'Yapay Zeka & Eğitim Teknolojileri',
      bio: '15 yıllık eğitim sektörü tecrübesi. Stanford\'da AI araştırmaları yapmış, 100+ bilimsel makale yayınlamış.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      linkedin: '#',
      twitter: '#',
      email: 'mehmet@sinavkoc.ai'
    },
    {
      name: 'Ayşe Kara',
      role: 'Kurucu & CTO',
      expertise: 'Makine Öğrenmesi & Veri Bilimi',
      bio: 'MIT mezunu, Google ve Microsoft\'ta senior engineer. 20+ AI projesi geliştirmiş, 5 patent sahibi.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400',
      linkedin: '#',
      twitter: '#',
      email: 'ayse@sinavkoc.ai'
    },
    {
      name: 'Prof. Dr. Ali Demir',
      role: 'Kurucu & CPO',
      expertise: 'Pedagoji & Öğrenme Psikolojisi',
      bio: 'Boğaziçi Üniversitesi\'nde öğretim üyesi. 25 yıllık akademik tecrübe, öğrenme methodları uzmanı.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      linkedin: '#',
      twitter: '#',
      email: 'ali@sinavkoc.ai'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="text-sm">👨‍💼 Ekibimiz</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Deneyimli{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Kurucularımız
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya çapında deneyime sahip, eğitim ve teknoloji alanında uzman kurucularımızla 
            tanışın. Onların vizyonu ile SınavKoç AI\'ı hayata geçirdik.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {[
                      { icon: Linkedin, href: founder.linkedin, color: 'bg-blue-600' },
                      { icon: Twitter, href: founder.twitter, color: 'bg-sky-500' },
                      { icon: Mail, href: `mailto:${founder.email}`, color: 'bg-gray-600' }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-200`}
                      >
                        <social.icon size={16} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mb-2">{founder.role}</p>
                    <p className="text-orange-600 text-sm font-medium">{founder.expertise}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Contact Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200"
                    >
                      <Mail size={16} className="mr-2" />
                      İletişime Geç
                    </a>
                  </motion.div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-purple-600 to-orange-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SınavKoç AI\'ı kurarken benimsediğimiz temel değerler ve prensipler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'İnsan Odaklılık',
                description: 'Teknoloji insana hizmet etmeli. Her öğrencinin benzersiz olduğuna inanır, kişiselleştirilmiş çözümler sunarız.',
                icon: '🤝'
              },
              {
                title: 'Sürekli İyileştirme',
                description: 'Hiçbir zaman "yeterli" demeyiz. Sürekli öğrenir, gelişir ve daha iyi hizmet vermenin yollarını ararız.',
                icon: '📈'
              },
              {
                title: 'Şeffaflık',
                description: 'Öğrencilerimiz ve veliler her zaman ne yaptığımızı bilmeli. Açık, dürüst ve güvenilir bir platform sunarız.',
                icon: '🔍'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}