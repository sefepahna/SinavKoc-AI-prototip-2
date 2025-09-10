import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { 
  Home, 
  Calendar, 
  FileText, 
  MessageCircle, 
  User, 
  Users, 
  ClipboardList, 
  BarChart3, 
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';
import { Input } from '../ui/input';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    name: string;
    email: string;
    role: 'student' | 'coach';
  };
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

export function DashboardLayout({ children, user, currentPage, onPageChange, onLogout }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentNavItems = [
    { id: 'home', label: 'Ana Sayfa', icon: Home },
    { id: 'plan', label: 'Planım', icon: Calendar },
    { id: 'tests', label: 'Testlerim', icon: FileText },
    { id: 'messages', label: 'Mesajlar', icon: MessageCircle },
    { id: 'profile', label: 'Profil', icon: User }
  ];

  const coachNavItems = [
    { id: 'students', label: 'Öğrenciler', icon: Users },
    { id: 'plans', label: 'Planlar', icon: ClipboardList },
    { id: 'messages', label: 'Mesajlar', icon: MessageCircle },
    { id: 'reports', label: 'Raporlar', icon: BarChart3 },
    { id: 'profile', label: 'Profil', icon: User }
  ];

  const navItems = user.role === 'student' ? studentNavItems : coachNavItems;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 lg:translate-x-0 lg:relative lg:z-auto lg:shadow-none`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">S</span>
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  SınavKoç AI
                </span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${
                user.role === 'student' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'
              } rounded-full flex items-center justify-center`}>
                <span className="text-white font-semibold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {user.role === 'student' ? 'Öğrenci' : 'Koç'}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onPageChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? user.role === 'student'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-orange-50 text-orange-700 border border-orange-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogout}
              className="w-full flex items-center px-3 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
            >
              <LogOut size={20} className="mr-3" />
              <span className="font-medium">Çıkış Yap</span>
            </motion.button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <Menu size={20} />
              </button>

              {/* Search */}
              <div className="flex-1 max-w-lg mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Arama yapın..."
                    className="pl-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 relative"
                >
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </motion.button>

                {/* User menu */}
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${
                    user.role === 'student' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'
                  } rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">
                      {user.role === 'student' ? 'Öğrenci' : 'Koç'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}