import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { 
  Calendar, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Clock, 
  Award, 
  Brain, 
  CheckCircle,
  AlertCircle,
  Play,
  BarChart3
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export function StudentDashboard() {
  // Sample data - in real app this would come from API
  const weeklyPlan = [
    { day: 'Pazartesi', subject: 'Matematik', completed: true, duration: '2 saat' },
    { day: 'Salı', subject: 'Fizik', completed: true, duration: '1.5 saat' },
    { day: 'Çarşamba', subject: 'Kimya', completed: false, duration: '2 saat' },
    { day: 'Perşembe', subject: 'Biyoloji', completed: false, duration: '1 saat' },
    { day: 'Cuma', subject: 'Matematik', completed: false, duration: '2 saat' }
  ];

  const performanceData = [
    { subject: 'Matematik', correct: 85, wrong: 12, empty: 3 },
    { subject: 'Fizik', correct: 78, wrong: 18, empty: 4 },
    { subject: 'Kimya', correct: 82, wrong: 15, empty: 3 },
    { subject: 'Biyoloji', correct: 90, wrong: 8, empty: 2 }
  ];

  const weeklyProgress = [
    { day: 'Pzt', score: 75 },
    { day: 'Sal', score: 82 },
    { day: 'Çar', score: 78 },
    { day: 'Per', score: 85 },
    { day: 'Cum', score: 88 },
    { day: 'Cmt', score: 92 },
    { day: 'Paz', score: 90 }
  ];

  const pieData = [
    { name: 'Doğru', value: 85, color: '#10B981' },
    { name: 'Yanlış', value: 12, color: '#F59E0B' },
    { name: 'Boş', value: 3, color: '#EF4444' }
  ];

  const motivationalMessages = [
    "Bugün harika bir performans sergiliyorsun! 🎉",
    "Matematik konusunda %15 ilerleme kaydettin",
    "Bu hafta hedefine ulaşmak için sadece 2 saat daha çalış"
  ];

  const dailyReminders = [
    "Bugün Fizik test çözme vakti - 1 saat",
    "Yarın Kimya koçu ile görüşme var - 14:00",
    "Bu hafta 5/7 günlük hedefini tamamladın"
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl p-4 md:p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-2">Hoş geldin, Ahmet! 👋</h1>
            <p className="text-purple-100 mb-4">Bugün hedeflerine bir adım daha yaklaşmanın zamanı</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                <span>Hedef: YKS 2025</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Kalan süre: 127 gün</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: 'Haftalık İlerleme', value: '87%', change: '+12%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
          { title: 'Çözülen Soru', value: '1,247', change: '+45', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
          { title: 'Çalışma Saati', value: '42h', change: '+8h', icon: Clock, color: 'from-purple-500 to-purple-600' },
          { title: 'Başarı Oranı', value: '%92', change: '+5%', icon: Award, color: 'from-orange-500 to-orange-600' }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Plan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                Haftalık Çalışma Planım
              </h3>
              <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                Planı Düzenle
              </Button>
            </div>
            <div className="space-y-3">
              {weeklyPlan.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    item.completed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.completed
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {item.completed ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.day}</p>
                      <p className="text-sm text-gray-600">{item.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{item.duration}</p>
                    <Badge variant={item.completed ? "default" : "secondary"} className="text-xs">
                      {item.completed ? 'Tamamlandı' : 'Bekliyor'}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Motivational Messages & Reminders */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Motivational Messages */}
          <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-orange-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-orange-600" />
              Motivasyon
            </h3>
            <div className="space-y-3">
              {motivationalMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-3 bg-white rounded-lg shadow-sm"
                >
                  <p className="text-sm text-gray-700">{message}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Daily Reminders */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
              Günlük Hatırlatıcılar
            </h3>
            <div className="space-y-3">
              {dailyReminders.map((reminder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">{reminder}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance by Subject */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
              Ders Bazında Performans
            </h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Bar dataKey="correct" fill="#10B981" radius={[4, 4, 0, 0]} animationDuration={1000} />
                  <Bar dataKey="wrong" fill="#F59E0B" radius={[4, 4, 0, 0]} animationDuration={1000} />
                  <Bar dataKey="empty" fill="#EF4444" radius={[4, 4, 0, 0]} animationDuration={1000} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Doğru</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Yanlış</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Boş</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
              Haftalık İlerleme Grafiği
            </h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Bu hafta ortalama puanın: <span className="font-semibold text-gray-900">84.3</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 border-0 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Hızlı İşlemler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full h-20 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl shadow-lg">
                <div className="text-center">
                  <Play className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Yeni Test Başlat</span>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full h-20 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-xl">
                <div className="text-center">
                  <Brain className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">AI Önerisi Al</span>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full h-20 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
                <div className="text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Ders Notları</span>
                </div>
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}