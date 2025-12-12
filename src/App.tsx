import { useEffect, useState } from 'react';
import { supabase } from './supabase';

import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './components/pages/DashboardPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { WebsitePage } from './components/pages/WebsitePage';
import { AdsPage } from './components/pages/AdsPage';
import { PaidMarketingPage } from './components/pages/PaidMarketingPage';
import { OrganicMarketingPage } from './components/pages/OrganicMarketingPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { SettingsPage } from './components/pages/SettingsPage';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOnboardingStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('onboarding_progress')
        .select('onboarding_status')
        .eq('id', user.id)
        .single();

      if (!error && data) {
        setOnboardingComplete(data.onboarding_status === 'completed');
      }

      setLoading(false);
    };

    loadOnboardingStatus();
  }, []);

  const renderPage = () => {
    // 🔒 HARD GATE: force onboarding
    if (!onboardingComplete && currentPage !== 'onboarding') {
      return <OnboardingPage />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'onboarding':
        return <OnboardingPage />;
      case 'website':
        return <WebsitePage />;
      case 'ads':
        return <AdsPage />;
      case 'paid-marketing':
        return <PaidMarketingPage />;
      case 'organic-marketing':
        return <OrganicMarketingPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage onNavigate={setCurrentPage} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0C0F14] flex items-center justify-center text-white">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0F14]">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onboardingComplete={onboardingComplete}
      />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
