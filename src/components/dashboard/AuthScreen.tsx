import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Eye, EyeOff, User, Users, Mail, Lock, BookOpen, GraduationCap } from 'lucide-react';

interface AuthScreenProps {
  onLogin: (userType: 'student' | 'coach', userData: any) => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'student' | 'coach'>('student');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app would validate credentials
    onLogin(selectedRole, {
      name: selectedRole === 'student' ? 'Ahmet Yılmaz' : 'Dr. Ayşe Kara',
      email: loginData.email,
      role: selectedRole
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    onLogin(selectedRole, {
      name: signupData.name,
      email: signupData.email,
      role: selectedRole
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-30" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              SınavKoç AI
            </span>
          </div>
          <p className="text-gray-600">Giriş yapın ve sınav başarınızı artırın</p>
        </motion.div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-sm font-medium text-gray-700 mb-3 text-center">Rolünüzü seçin</p>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedRole('student')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedRole === 'student'
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-purple-300'
              }`}
            >
              <BookOpen className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Öğrenci</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedRole('coach')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedRole === 'coach'
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-orange-300'
              }`}
            >
              <GraduationCap className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Koç</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Auth Forms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Giriş Yap</TabsTrigger>
                <TabsTrigger value="signup">Kayıt Ol</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="ornek@email.com"
                        className="pl-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Şifrenizi girin"
                        className="pl-10 pr-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="ml-2 text-gray-600">Beni hatırla</span>
                    </label>
                    <a href="#" className="text-purple-600 hover:text-purple-700">Şifremi unuttum</a>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className={`w-full py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                        selectedRole === 'student'
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                          : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                      } text-white`}
                    >
                      {selectedRole === 'student' ? 'Öğrenci' : 'Koç'} Olarak Giriş Yap
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>

              {/* Signup Form */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="text"
                        value={signupData.name}
                        onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Adınızı ve soyadınızı girin"
                        className="pl-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="ornek@email.com"
                        className="pl-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Güçlü bir şifre oluşturun"
                        className="pl-10 pr-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre Tekrar
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Şifrenizi tekrar girin"
                        className="pl-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-sm">
                    <label className="flex items-start">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1" required />
                      <span className="ml-2 text-gray-600">
                        <a href="#" className="text-purple-600 hover:text-purple-700">Kullanım Şartları</a> ve{' '}
                        <a href="#" className="text-purple-600 hover:text-purple-700">Gizlilik Politikası</a>'nı kabul ediyorum.
                      </span>
                    </label>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className={`w-full py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                        selectedRole === 'student'
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                          : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                      } text-white`}
                    >
                      {selectedRole === 'student' ? 'Öğrenci' : 'Koç'} Olarak Kayıt Ol
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>

        {/* Demo Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-500 text-sm mb-3">Demo hesapla hızlı giriş</p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onLogin('student', { name: 'Demo Öğrenci', email: 'ogrenci@demo.com', role: 'student' })}
              className="flex-1 py-2 text-sm border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              Demo Öğrenci
            </Button>
            <Button
              variant="outline"
              onClick={() => onLogin('coach', { name: 'Demo Koç', email: 'koc@demo.com', role: 'coach' })}
              className="flex-1 py-2 text-sm border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              Demo Koç
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}