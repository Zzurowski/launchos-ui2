import { Home, CheckCircle, Globe, DollarSign, TrendingUp, BookOpen, Settings, Menu, X, ExternalLink } from 'lucide-react';
import { LaunchOSLogo } from './LaunchOSLogo';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onboardingComplete: boolean;
}

export function Sidebar({ isOpen, setIsOpen, currentPage, setCurrentPage, onboardingComplete }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: CheckCircle, label: 'Onboarding', page: 'onboarding', highlightGreen: !onboardingComplete },
    { icon: Globe, label: 'Website', page: 'website' },
    { icon: DollarSign, label: 'Paid Marketing', page: 'paid-marketing' },
    { icon: TrendingUp, label: 'Organic Marketing', page: 'organic-marketing' },
    { icon: BookOpen, label: 'Resources', page: 'resources' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const handleCRMClick = () => {
    window.open('https://fieldd.co', '_blank');
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-[#1A1D23] rounded-xl shadow-lg shadow-black/20 border border-[#293038]"
      >
        {isOpen ? <X className="w-5 h-5 text-[#3AB8FF]" /> : <Menu className="w-5 h-5 text-[#3AB8FF]" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-[#111318] border-r border-[#293038] transition-all duration-300 z-40 ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0'}`}>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <LaunchOSLogo size={40} />
            <div>
              <h2 className="text-[#E8F1FF]">LaunchOS</h2>
              <p className="text-[#94A3B8] text-xs">Onboarding Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              const useGreenHighlight = item.highlightGreen && !isActive;
              
              return (
                <button
                  key={item.label}
                  onClick={() => setCurrentPage(item.page)}
                  className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#3AB8FF]/10 text-[#3AB8FF] shadow-lg shadow-[#3AB8FF]/20'
                      : useGreenHighlight
                      ? 'bg-[#10B981]/10 text-[#10B981] shadow-lg shadow-[#10B981]/20'
                      : 'text-[#94A3B8] hover:bg-[#1A1D23] hover:text-[#E8F1FF]'
                  }`}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#3AB8FF] to-[#00CFFF] rounded-r-full shadow-lg shadow-[#3AB8FF]/50"></div>
                  )}
                  {useGreenHighlight && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#10B981] to-[#059669] rounded-r-full shadow-lg shadow-[#10B981]/50"></div>
                  )}
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            {/* CRM Link */}
            <button
              onClick={handleCRMClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[#94A3B8] hover:bg-[#1A1D23] hover:text-[#E8F1FF]"
            >
              <ExternalLink className="w-5 h-5" />
              <span>CRM</span>
            </button>
          </nav>
        </div>

        {/* Bottom Help Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-xl p-4 border border-[#293038] shadow-lg shadow-black/10">
            <h4 className="text-[#E8F1FF] mb-1">Need Help?</h4>
            <p className="text-[#94A3B8] text-sm mb-3">Our team is here 24/7</p>
            <button className="w-full bg-[#3AB8FF]/10 text-[#3AB8FF] px-4 py-2 rounded-lg hover:bg-[#3AB8FF]/20 transition-all border border-[#3AB8FF]/20">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
