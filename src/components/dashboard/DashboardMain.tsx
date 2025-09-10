import React, { useState } from 'react';
import { AuthScreen } from './AuthScreen';
import { DashboardLayout } from './DashboardLayout';
import { StudentDashboard } from './StudentDashboard';
import { CoachDashboard } from './CoachDashboard';

interface User {
  name: string;
  email: string;
  role: 'student' | 'coach';
}

export function DashboardMain() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (userType: 'student' | 'coach', userData: any) => {
    setUser({
      name: userData.name,
      email: userData.email,
      role: userType
    });
    setCurrentPage(userType === 'student' ? 'home' : 'students');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderDashboardContent = () => {
    if (!user) return null;

    if (user.role === 'student') {
      switch (currentPage) {
        case 'home':
          return <StudentDashboard />;
        case 'plan':
          return <div className="text-center py-20 text-gray-500">Planım sayfası geliştiriliyor...</div>;
        case 'tests':
          return <div className="text-center py-20 text-gray-500">Testlerim sayfası geliştiriliyor...</div>;
        case 'messages':
          return <div className="text-center py-20 text-gray-500">Mesajlar sayfası geliştiriliyor...</div>;
        case 'profile':
          return <div className="text-center py-20 text-gray-500">Profil sayfası geliştiriliyor...</div>;
        default:
          return <StudentDashboard />;
      }
    } else {
      switch (currentPage) {
        case 'students':
          return <CoachDashboard />;
        case 'plans':
          return <div className="text-center py-20 text-gray-500">Planlar sayfası geliştiriliyor...</div>;
        case 'messages':
          return <div className="text-center py-20 text-gray-500">Mesajlar sayfası geliştiriliyor...</div>;
        case 'reports':
          return <div className="text-center py-20 text-gray-500">Raporlar sayfası geliştiriliyor...</div>;
        case 'profile':
          return <div className="text-center py-20 text-gray-500">Profil sayfası geliştiriliyor...</div>;
        default:
          return <CoachDashboard />;
      }
    }
  };

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout
      user={user}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onLogout={handleLogout}
    >
      {renderDashboardContent()}
    </DashboardLayout>
  );
}