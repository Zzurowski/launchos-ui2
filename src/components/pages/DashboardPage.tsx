import { Clock, CheckCircle, Sparkles, Globe, TrendingUp, Zap, Rocket, ArrowRight, Palette, FileText, Calendar, Database, Star, Loader2, User, Briefcase, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { LaunchOSLogo } from '../LaunchOSLogo';

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  
  // Owner information from onboarding
  const ownerName = 'Sarah Johnson';
  const businessName = 'Acme Plumbing';
  
  // Deployment started - countdown from 72 hours
  const deploymentStartTime = new Date('2025-12-09T00:00:00'); // Started 2 days ago
  const totalDeploymentHours = 72;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate countdown from 72 hours
  const elapsedTime = currentTime.getTime() - deploymentStartTime.getTime();
  const elapsedHours = elapsedTime / (1000 * 60 * 60);
  const remainingHours = Math.max(0, totalDeploymentHours - elapsedHours);
  const hoursLeft = Math.max(0, Math.ceil(remainingHours));
  
  // Calculate HH:MM:SS for display
  const totalSecondsRemaining = Math.max(0, Math.floor(remainingHours * 3600));
  const hours = Math.floor(totalSecondsRemaining / 3600);
  const minutes = Math.floor((totalSecondsRemaining % 3600) / 60);
  const seconds = totalSecondsRemaining % 60;
  
  // Calculate percentage for progress (72 hours = 100%)
  const progressPercentage = Math.max(0, Math.min(100, (elapsedHours / totalDeploymentHours) * 100));

  // Activity ticker messages
  const activities = [
    { icon: Zap, message: 'Deploying automation workflows...', color: '#3AB8FF' },
    { icon: Palette, message: 'Importing brand assets...', color: '#8B5CF6' },
    { icon: TrendingUp, message: 'Building Google Ads campaigns...', color: '#10B981' },
    { icon: Calendar, message: 'Syncing booking calendar...', color: '#F59E0B' },
    { icon: Database, message: 'Configuring CRM pipelines...', color: '#EC4899' },
    { icon: Star, message: 'Setting up review automation...', color: '#FBBF24' },
  ];

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(activityTimer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
            linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#3AB8FF]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-8 space-y-8">
        
        {/* Top Header Section - Welcome Hero */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Logo with Neon Glow */}
            <LaunchOSLogo size={56} withGlow={true} />
            
            {/* Header Text */}
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Welcome back, {ownerName}
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-2.5">
                Everything you need to run your business is loading in the background.
              </p>
            </div>
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-3 bg-[#1A1D23] rounded-xl px-5 py-3 border border-[#293038] hover:border-[#3AB8FF]/30 transition-all cursor-pointer"
            >
              <div className="text-right">
                <div className="text-sm text-[#E8F1FF] font-medium">{ownerName}</div>
                <div className="text-xs text-[#94A3B8]">{businessName}</div>
              </div>
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] flex items-center justify-center text-white font-bold shadow-lg shadow-[#3AB8FF]/30">
                S
              </div>
              <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown Panel */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038]/50 shadow-2xl overflow-hidden z-50"
                style={{
                  boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.5), 0 0 40px rgba(58, 184, 255, 0.08)'
                }}
              >
                {/* Soft inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
                      linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative p-3 space-y-1">
                  {/* Edit Personal Info */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('settings');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0D1114]/50 border border-[#293038]/30 hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <User className="w-6 h-6 text-[#3AB8FF]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#E8F1FF] font-semibold mb-0.5">Edit Personal Info</div>
                      <div className="text-[#94A3B8] text-sm opacity-70">Update your name and contact details</div>
                    </div>
                  </button>

                  {/* Edit Business Info */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('onboarding');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0D1114]/50 border border-[#293038]/30 hover:border-[#8B5CF6]/40 hover:bg-[#1A1D23]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#E8F1FF] font-semibold mb-0.5">Edit Business Info</div>
                      <div className="text-[#94A3B8] text-sm opacity-70">Business name, company info, and industry</div>
                    </div>
                  </button>

                  {/* Account Settings */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('settings');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0D1114]/50 border border-[#293038]/30 hover:border-[#5DAEFF]/40 hover:bg-[#1A1D23]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] flex items-center justify-center">
                        <Settings className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#E8F1FF] font-semibold mb-0.5">Account Settings</div>
                      <div className="text-[#94A3B8] text-sm opacity-70">Manage notifications and preferences</div>
                    </div>
                  </button>

                  {/* Contact Support */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      // Could open a support modal or navigate to support
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0D1114]/50 border border-[#293038]/30 hover:border-[#00CFFF]/40 hover:bg-[#1A1D23]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-[#00CFFF]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#E8F1FF] font-semibold mb-0.5">Contact Support</div>
                      <div className="text-[#94A3B8] text-sm opacity-70">Get help from our team</div>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#293038] to-transparent my-2"></div>

                  {/* Log Out */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      alert('Logging out...');
                    }}
                    className="group w-full flex items-center gap-4 p-4 rounded-xl bg-[#0D1114]/50 border border-[#293038]/30 hover:border-[#EF4444]/40 hover:bg-[#1A1D23]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <LogOut className="w-6 h-6 text-[#EF4444]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#EF4444] font-semibold">Log Out</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 72-Hour Deployment Progress Module */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>
          
          <div className="relative">
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AB8FF]/10 border border-[#3AB8FF]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3AB8FF] animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
                <span className="text-xs text-[#3AB8FF] font-medium uppercase tracking-wider">System Deployment In Progress</span>
              </div>
              <div className="text-sm text-[#94A3B8]">
                {hoursLeft} hours remaining
              </div>
            </div>

            {/* Countdown Display */}
            <div className="flex items-center justify-center gap-6 mb-4">
              {/* Hours */}
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] bg-clip-text text-transparent tabular-nums">
                  {String(hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Hours</div>
              </div>
              
              <div className="text-3xl font-bold text-[#3AB8FF]/30">•</div>
              
              {/* Minutes */}
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] bg-clip-text text-transparent tabular-nums">
                  {String(minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Minutes</div>
              </div>
              
              <div className="text-3xl font-bold text-[#3AB8FF]/30">•</div>
              
              {/* Seconds */}
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] bg-clip-text text-transparent tabular-nums">
                  {String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Seconds</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="h-2 bg-[#0A0B0D] rounded-full overflow-hidden border border-[#293038] shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#8B5CF6] rounded-full shadow-lg shadow-[#3AB8FF]/50 transition-all duration-1000 relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3AB8FF] to-[#8B5CF6] blur-sm opacity-50"></div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-[#94A3B8]">
                <span>Started</span>
                <span className="text-[#3AB8FF]">{Math.round(progressPercentage)}% Complete</span>
                <span>Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Panel - Matching Timer Section Style */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>
          
          <div className="relative">
            {/* Header with Status Badge Style */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent" style={{ letterSpacing: '0.01em' }}>
                Next Steps to Activate Your System
              </h2>
              <div className="text-sm text-[#94A3B8] font-medium">
                <span className="bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] bg-clip-text text-transparent font-semibold">2</span> of 5 completed
              </div>
            </div>

            {/* Step Cards - Glass Panel Style with Blue/Purple Gradient */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { step: 1, text: 'Upload your business info & brand assets', icon: FileText, completed: true },
                { step: 2, text: 'Preview your new business hub', icon: Globe, completed: true },
                { step: 3, text: 'Your backend completes in 72 hours', icon: Clock, completed: false },
                { step: 4, text: 'Explore Fieldd (your new CRM)', icon: Database, completed: false },
                { step: 5, text: 'Use our resources to scale your business', icon: Sparkles, completed: false },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.step} 
                    className="group rounded-xl p-4 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                    style={{
                      background: item.completed 
                        ? 'linear-gradient(135deg, rgba(58, 184, 255, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'
                        : 'transparent'
                    }}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/10 to-[#8B5CF6]/10 blur-xl"></div>
                    </div>
                    
                    <div className="relative">
                      {/* Step Number with Timer-Style Gradient */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl font-bold bg-gradient-to-br from-[#3AB8FF] to-[#8B5CF6] bg-clip-text text-transparent tabular-nums relative">
                          {item.step}
                          {item.completed && (
                            <CheckCircle className="absolute -top-1 -right-1 w-3 h-3 text-[#3AB8FF]" />
                          )}
                        </div>
                        <Icon className={`w-5 h-5 ${
                          item.completed ? 'text-[#3AB8FF]' : 'text-[#94A3B8]/30'
                        }`} />
                      </div>
                      
                      {/* Step Description with Timer Caption Style */}
                      <p className={`text-xs uppercase tracking-wider font-medium mb-2 ${
                        item.completed ? 'text-[#3AB8FF]/80' : 'text-[#94A3B8]/50'
                      }`}>
                        Step {item.step}
                      </p>
                      <p className={`text-sm leading-relaxed font-medium ${
                        item.completed ? 'text-[#E8F1FF]' : 'text-[#94A3B8]'
                      }`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Onboarding Button - Matching Progress Bar Gradient */}
            <div className="flex flex-col items-center">
              <button 
                onClick={() => onNavigate && onNavigate('onboarding')}
                className="group relative px-12 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 overflow-hidden"
              >
                {/* Button gradient matching timer progress bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#8B5CF6]"></div>
                {/* Neon glow matching timer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#8B5CF6] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <span className="relative text-white font-semibold text-base drop-shadow-lg">Complete Onboarding</span>
                <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
              {/* Caption matching timer's "Started / Complete" style */}
              <p className="text-xs text-[#94A3B8] opacity-70 mt-4 text-center max-w-md font-medium bg-gradient-to-r from-[#8B5CF6]/20 via-[#3AB8FF]/20 to-[#8B5CF6]/20 bg-clip-text">
                Completing onboarding unlocks your full system and deploys remaining subsystems automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Activity Ticker - Minimal Floating Overlay */}
        <div className="relative flex items-center justify-center gap-3 py-2 overflow-hidden">
          {/* Subtle glow behind icon only */}
          {activities[currentActivityIndex].icon && (
            <div className="relative">
              <div 
                className="absolute inset-0 blur-xl opacity-[0.02]"
                style={{
                  background: 'linear-gradient(135deg, #3AB8FF 0%, #8B5CF6 100%)',
                  transform: 'scale(2)',
                }}
              ></div>
              <div className="relative w-5 h-5 rounded-lg flex items-center justify-center" style={{ color: activities[currentActivityIndex].color }}>
                {(() => {
                  const Icon = activities[currentActivityIndex].icon;
                  return <Icon className="w-5 h-5" />;
                })()}
              </div>
            </div>
          )}
          <span className="text-sm text-[#E8F1FF]/80 font-medium animate-fade-in">
            {activities[currentActivityIndex].message}
          </span>
          <Loader2 className="w-4 h-4 text-[#3AB8FF]/60 animate-spin" />
        </div>

      </div>
    </div>
  );
}