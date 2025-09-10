import React, { useState } from 'react';
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
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <div className="min-h-screen">
        {/* Back to Landing Button */}
        <div className="fixed top-4 left-4 z-50">
          <Button
            onClick={() => setShowDashboard(false)}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Button>
        </div>
        <DashboardMain />
      </div>
    );
  }

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
          onClick={() => setShowDashboard(true)}
          className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
        >
          🚀 Dashboard'a Git
        </Button>
      </div>
    </div>
  );
}