import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DashboardMain } from './components/dashboard/DashboardMain';
import { Button } from './components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
      
      {/* Dashboard Access Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => navigate('/dashboard')}
          className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
        >
          🚀 Dashboard'a Git
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname.startsWith('/dashboard') && (
        <DashboardMain onBackToHome={() => navigate('/')} />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}