import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar } from '../ui/avatar';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Award, 
  MessageCircle, 
  Send, 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Target,
  BarChart3
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export function CoachDashboard() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');

  // Sample data
  const students = [
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      exam: 'YKS 2025',
      progress: 87,
      lastActive: '2 saat önce',
      status: 'active',
      weeklyHours: 42,
      testScore: 92,
      avatar: 'AY'
    },
    {
      id: '2',
      name: 'Elif Demir',
      exam: 'ALES 2024',
      progress: 75,
      lastActive: '1 gün önce',
      status: 'needs-attention',
      weeklyHours: 28,
      testScore: 78,
      avatar: 'ED'
    },
    {
      id: '3',
      name: 'Mehmet Kaya',
      exam: 'KPSS 2024',
      progress: 93,
      lastActive: '30 dk önce',
      status: 'excellent',
      weeklyHours: 45,
      testScore: 95,
      avatar: 'MK'
    },
    {
      id: '4',
      name: 'Zeynep Öz',
      exam: 'DGS 2024',
      progress: 82,
      lastActive: '5 saat önce',
      status: 'active',
      weeklyHours: 38,
      testScore: 85,
      avatar: 'ZÖ'
    }
  ];

  const overallStats = [
    { title: 'Toplam Öğrenci', value: '24', change: '+3', icon: Users, color: 'from-blue-500 to-blue-600' },
    { title: 'Ortalama İlerleme', value: '%84', change: '+7%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { title: 'Haftalık Ders Saati', value: '156h', change: '+12h', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { title: 'Başarı Oranı', value: '%91', change: '+4%', icon: Award, color: 'from-orange-500 to-orange-600' }
  ];

  const weeklyProgressData = [
    { week: 'Hf 1', progress: 78 },
    { week: 'Hf 2', progress: 82 },
    { week: 'Hf 3', progress: 85 },
    { week: 'Hf 4', progress: 84 },
    { week: 'Hf 5', progress: 89 },
    { week: 'Hf 6', progress: 91 }
  ];

  const subjectPerformance = [
    { subject: 'Matematik', score: 85 },
    { subject: 'Fizik', score: 78 },
    { subject: 'Kimya', score: 92 },
    { subject: 'Biyoloji', score: 88 },
    { subject: 'Türkçe', score: 83 }
  ];

  const messages = [
    {
      id: '1',
      studentName: 'Ahmet Yılmaz',
      message: 'Matematik konusunda zorlanıyorum, ekstra materyal önerir misiniz?',
      time: '10 dk önce',
      unread: true
    },
    {
      id: '2',
      studentName: 'Elif Demir',
      message: 'Bu hafta planımı tamamladım, yeni hedefler belirleyebilir miyiz?',
      time: '1 saat önce',
      unread: true
    },
    {
      id: '3',
      studentName: 'Mehmet Kaya',
      message: 'Test sonuçlarım hakkında görüşmek istiyorum.',
      time: '2 saat önce',
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'needs-attention': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'excellent': return 'Mükemmel';
      case 'active': return 'Aktif';
      case 'needs-attention': return 'Dikkat Gerekli';
      default: return 'Bilinmiyor';
    }
  };

  const sendMessage = () => {
    if (messageText.trim() && selectedStudent) {
      // In real app, send message to API
      console.log('Sending message to student:', selectedStudent, messageText);
      setMessageText('');
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-4 md:p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-2">Merhaba Dr. Ayşe! 👋</h1>
            <p className="text-orange-100 mb-4">Bugün 4 öğrencinizin desteğe ihtiyacı var</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>24 Aktif Öğrenci</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Bu hafta 12 görüşme</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {overallStats.map((stat, index) => (
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
        {/* Students List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-600" />
                Öğrencilerim
              </h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filtrele
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                  <Plus className="w-4 h-4 mr-1" />
                  Yeni Öğrenci
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Öğrenci ara..."
                className="pl-10 rounded-xl border-gray-200"
              />
            </div>

            {/* Students Grid */}
            <div className="space-y-4">
              {students.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.exam}</p>
                        <p className="text-xs text-gray-500">{student.lastActive}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{student.progress}%</p>
                        <p className="text-xs text-gray-500">İlerleme</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{student.weeklyHours}h</p>
                        <p className="text-xs text-gray-500">Haftalık</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{student.testScore}</p>
                        <p className="text-xs text-gray-500">Test Puanı</p>
                      </div>
                      <Badge className={getStatusColor(student.status)}>
                        {getStatusText(student.status)}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Student Details */}
                  {selectedStudent === student.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                          <Calendar className="w-4 h-4 mr-1" />
                          Görüşme Planla
                        </Button>
                        <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                          <FileText className="w-4 h-4 mr-1" />
                          Görev Ver
                        </Button>
                        <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          Rapor Görüntüle
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Messages Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Recent Messages */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
              Son Mesajlar
            </h3>
            <div className="space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-200 ${
                    message.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-900 text-sm">{message.studentName}</h5>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  )}
                </motion.div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200">
              Tüm Mesajları Görüntüle
            </Button>
          </Card>

          {/* Quick Message */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Mesaj Gönder</h3>
            <div className="space-y-3">
              <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Öğrenci seçin...</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </select>
              <Textarea
                placeholder="Mesajınızı yazın..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="resize-none rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                rows={3}
              />
              <Button 
                onClick={sendMessage}
                className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white"
                disabled={!messageText.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Gönder
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
              Genel İlerleme Trendi
            </h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#F97316" 
                    strokeWidth={3}
                    dot={{ fill: '#F97316', strokeWidth: 2, r: 4 }}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Subject Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
              Ders Bazında Ortalama Başarı
            </h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Bar dataKey="score" fill="#F97316" radius={[4, 4, 0, 0]} animationDuration={1000} />
                </BarChart>
              </ResponsiveContainer>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full h-20 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg">
                <div className="text-center">
                  <Plus className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Yeni Görev Oluştur</span>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full h-20 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl">
                <div className="text-center">
                  <Upload className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Kaynak Yükle</span>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full h-20 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Görüşme Planla</span>
                </div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full h-20 border-2 border-green-200 text-green-600 hover:bg-green-50 rounded-xl">
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">Rapor Oluştur</span>
                </div>
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}