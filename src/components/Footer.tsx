import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Ürün': [
      { label: 'Özellikler', href: '#features' },
      { label: 'Fiyatlandırma', href: '#pricing' },
      { label: 'Mobil Uygulama', href: '#' },
      { label: 'API', href: '#' }
    ],
    'Şirket': [
      { label: 'Hakkımızda', href: '#team' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın Kiti', href: '#' },
      { label: 'İletişim', href: '#contact' }
    ],
    'Kaynaklar': [
      { label: 'Blog', href: '#blog' },
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'Sık Sorulan Sorular', href: '#' },
      { label: 'Webinarlar', href: '#' }
    ],
    'Yasal': [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Şartları', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Çerez Politikası', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-orange-500 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sınav Başarı Haberleri
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              En güncel sınav stratejileri, başarı hikayeleri ve özel indirimlerden haberdar olun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="E-posta adresinizi girin"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200 rounded-xl focus:bg-white/20 focus:border-white/40"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold"
                >
                  Abone Ol
                </Button>
              </motion.div>
            </div>
            
            <p className="text-sm text-purple-200 mt-4">
              Spam göndermiyoruz. İstediğiniz zaman aboneliği iptal edebilirsiniz.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    SınavKoç AI
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Yapay zeka ve uzman koçluğun birleştiği benzersiz platformda 
                  sınav başarınızı maksimuma çıkarın. Binlerce öğrencinin tercih ettiği güvenilir partner.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Mail size={16} className="mr-3 text-purple-400" />
                    info@sinavkoc.ai
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-3 text-purple-400" />
                    0850 123 45 67
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-3 text-purple-400" />
                    Levent, İstanbul
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Link Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category} className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-white">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-all duration-200 text-sm"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2025 SınavKoç AI. Tüm hakları saklıdır.
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              SSL Güvenli
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              KVKK Uyumlu
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              ISO 27001
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              7/24 Destek
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}