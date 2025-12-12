import { useState, useEffect } from 'react';
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

  const [onboardingStatus, setOnboardingStatus] = useState<
    'loading' | 'not_started' | 'in_progress' | 'completed'
  >('loading');

  // Fetch onboarding status from Supabase
  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setOnboardingStatus('not_started');
        return;
      }

      const { data, error } = await supabase
        .from('onboarding_progress')
        .select('onboarding_status')
        .eq('user_id', user.id)
        .single();

      if (error || !data) {
        setOnboardingStatus('not_started');
        return;
      }

      setOnboardingStatus(data.onboarding_status);
    };

    fetchOnboardingStatus();
  }, []);

  const onboardingComplete = onboardingStatus === 'completed';

  // Force onboarding until complete
  useEffect(() => {
    if (onboardingStatus === 'loading') return;

    if (!onboardingComplete && currentPage !== 'onboarding') {
      setCurrentPage('onboarding');
    }

    if (onboardingComplete && currentPage === 'onboarding') {
      setCurrentPage('dashboard');
    }
  }, [onboardingStatus, onboardingComplete, currentPage]);

  const renderPage = () => {
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

  // Optional: loading guard to prevent flicker
  if (onboardingStatus === 'loading') {
    return (
      <div className="min-h-screen bg-[#0C0F14] flex items-center justify-center text-white">
        Loading...
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
