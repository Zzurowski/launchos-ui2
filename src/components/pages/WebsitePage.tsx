import { Globe, ExternalLink, Eye, Edit, Check, Clock, FileText, TrendingUp, Sparkles, Calendar, Zap } from 'lucide-react';
import { PageHero } from '../PageHero';

export function WebsitePage() {
  // Project data
  const websiteProgress = 75; // Overall progress percentage
  const designProgress = 100;
  const contentProgress = 60;
  const launchProgress = 25;

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Your Website"
        subtitle="Track your website build progress and launch timeline"
        icon={<Globe className="w-8 h-8 text-white" />}
        iconGradient="from-[#3AB8FF] to-[#5DAEFF]"
      />

      {/* Main Website Status Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-[#3AB8FF]/10 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-[#5DAEFF]/5"></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left side - Status and Progress */}
            <div className="flex items-start gap-6 flex-1">
              {/* Circular Progress Indicator */}
              <div className="relative flex-shrink-0">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#293038"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - websiteProgress / 100)}`}
                    className="transition-all duration-1000 drop-shadow-[0_0_8px_rgba(58,184,255,0.5)]"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3AB8FF" />
                      <stop offset="50%" stopColor="#5DAEFF" />
                      <stop offset="100%" stopColor="#00CFFF" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#3AB8FF] to-[#00CFFF] bg-clip-text text-transparent">{websiteProgress}%</span>
                  <span className="text-xs text-[#94A3B8]">Complete</span>
                </div>
              </div>

              {/* Status Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[#E8F1FF] mb-1">Website Build</h2>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3AB8FF]/20 text-[#3AB8FF] text-sm border border-[#3AB8FF]/30">
                        <div className="w-2 h-2 bg-[#3AB8FF] rounded-full mr-2 animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-[#94A3B8]">Your website draft is ready for review. Preview the design and provide feedback.</p>
                  <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Est. Launch: Dec 18, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Last Updated: 2 hours ago</span>
                    </div>
                  </div>
                </div>

                {/* Progress Breakdown */}
                <div className="bg-[#1A1D23]/60 backdrop-blur-sm rounded-xl p-4 border border-[#293038]">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E8F1FF]">8</div>
                      <div className="text-xs text-[#94A3B8]">Total Pages</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E8F1FF]">6</div>
                      <div className="text-xs text-[#94A3B8]">Pages Ready</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E8F1FF]">2</div>
                      <div className="text-xs text-[#94A3B8]">In Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Action Buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[240px]">
              <button className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] text-white shadow-xl shadow-[#3AB8FF]/40 hover:shadow-2xl hover:shadow-[#3AB8FF]/60 hover:-translate-y-0.5 transition-all font-medium">
                <Eye className="w-5 h-5" />
                <span>View Draft</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#1A1D23] text-[#E8F1FF] border-2 border-[#293038] hover:border-[#3AB8FF]/50 hover:bg-[#21262D] transition-all">
                <Edit className="w-5 h-5" />
                <span>Request Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Three Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Design Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10B981]/50">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center border border-[#10B981]/30">
                <Sparkles className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-[#E8F1FF]">Design</h3>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
              Completed
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Pages Designed</span>
              <span className="text-[#E8F1FF]">8 of 8</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Mockups Created</span>
              <span className="text-[#E8F1FF]">12</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Last Updated</span>
              <span className="text-[#E8F1FF]">Dec 5, 2025</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#94A3B8]">Design Progress</span>
              <span className="text-[#E8F1FF]">{designProgress}%</span>
            </div>
            <div className="h-2 bg-[#21262D] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full shadow-lg shadow-[#10B981]/50 transition-all duration-700"
                style={{ width: `${designProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
              <Edit className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#3AB8FF]/10 rounded-xl flex items-center justify-center border border-[#3AB8FF]/30">
                <FileText className="w-6 h-6 text-[#3AB8FF]" />
              </div>
              <h3 className="text-[#E8F1FF]">Content</h3>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#3AB8FF]/20 text-[#3AB8FF] text-sm border border-[#3AB8FF]/30">
              <div className="w-2 h-2 bg-[#3AB8FF] rounded-full mr-2 animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
              In Progress
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Pages Written</span>
              <span className="text-[#E8F1FF]">5 of 8</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">SEO Score</span>
              <div className="flex items-center gap-2">
                <span className="text-[#E8F1FF]">78/100</span>
                <span className="text-xs text-[#FBBF24] bg-[#FBBF24]/20 px-2 py-0.5 rounded-full border border-[#FBBF24]/30">
                  Good
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Images Added</span>
              <span className="text-[#E8F1FF]">24/30</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#94A3B8]">Content Progress</span>
              <span className="text-[#E8F1FF]">{contentProgress}%</span>
            </div>
            <div className="h-2 bg-[#21262D] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] rounded-full shadow-lg shadow-[#3AB8FF]/50 transition-all duration-700"
                style={{ width: `${contentProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Launch Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center border border-[#8B5CF6]/30">
                <Zap className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-[#E8F1FF]">Launch</h3>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#293038] text-[#94A3B8] text-sm border border-[#293038]">
              Pending
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Launch Date</span>
              <span className="text-[#E8F1FF]">Dec 18, 2025</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Readiness Score</span>
              <div className="flex items-center gap-2">
                <span className="text-[#E8F1FF]">65/100</span>
                <span className="text-xs text-[#FBBF24] bg-[#FBBF24]/20 px-2 py-0.5 rounded-full border border-[#FBBF24]/30">
                  Almost
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Days Until Launch</span>
              <span className="text-[#E8F1FF]">8 days</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#94A3B8]">Launch Progress</span>
              <span className="text-[#E8F1FF]">{launchProgress}%</span>
            </div>
            <div className="h-2 bg-[#21262D] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full shadow-lg shadow-[#8B5CF6]/50 transition-all duration-700"
                style={{ width: `${launchProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Activity */}
        <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
          <h3 className="text-[#E8F1FF] mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Homepage design approved', time: '2 hours ago', type: 'success' },
              { action: 'Content draft uploaded for Services page', time: '5 hours ago', type: 'info' },
              { action: 'SEO optimization in progress', time: '1 day ago', type: 'warning' },
              { action: 'Logo assets received', time: '2 days ago', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#21262D]/50 border border-[#293038] hover:bg-[#21262D] transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 shadow-lg ${
                  activity.type === 'success' ? 'bg-[#10B981] shadow-[#10B981]/50' :
                  activity.type === 'warning' ? 'bg-[#FBBF24] shadow-[#FBBF24]/50' :
                  'bg-[#3AB8FF] shadow-[#3AB8FF]/50'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#E8F1FF] text-sm">{activity.action}</p>
                  <p className="text-[#94A3B8] text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Launch Checklist */}
        <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
          <h3 className="text-[#E8F1FF] mb-6">Launch Checklist</h3>
          <div className="space-y-3">
            {[
              { task: 'Complete all page content', done: false },
              { task: 'SEO optimization (score 85+)', done: false },
              { task: 'Mobile responsiveness testing', done: true },
              { task: 'Connect domain and hosting', done: false },
              { task: 'Final client approval', done: false },
              { task: 'Setup analytics and tracking', done: true },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#21262D]/50 transition-colors">
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${
                  item.done 
                    ? 'bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg shadow-[#10B981]/50' 
                    : 'bg-[#293038]'
                }`}>
                  {item.done && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm flex-1 ${item.done ? 'text-[#94A3B8] line-through' : 'text-[#E8F1FF]'}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}