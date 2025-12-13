import { useEffect, useState } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
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
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  // ─────────────────────────────────────────────
  // INIT AUTH + PROFILE
  // ─────────────────────────────────────────────
  useEffect(() => {
    const initUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      setUserId(user.id);

      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single();

      if (!profile) {
        await supabase.from('profiles').insert({
          id: user.id,
          email: user.email,
        });
      }

      setLoading(false);
    };

    initUser();
  }, []);

  // ─────────────────────────────────────────────
  // INTERCOM INITIALIZATION
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (!userId) return;

    Intercom({
      app_id: 'nod3jhrj',
      user_id: userId,
    });

    return () => {
      Intercom('shutdown');
    };
  }, [userId]);

  // ─────────────────────────────────────────────
  // PAGE RENDERER
  // ─────────────────────────────────────────────
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

  // ─────────────────────────────────────────────
  // LOADING STATE
  // ─────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0C0F14] flex items-center justify-center text-white">
        Loading…
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // APP LAYOUT
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0C0F14]">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userId={userId}
      />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <div className="max-w-7xl mx-auto p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
