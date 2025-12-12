import { Megaphone, TrendingUp, Pin, ExternalLink, DollarSign, Users, MousePointerClick, Eye, Target, CheckCircle, RefreshCw, BarChart3, Award, Zap } from 'lucide-react';
import { PageHero } from '../PageHero';

export function PaidMarketingPage() {
  // Mock Google Ads data
  const googleAdsData = {
    adSpend: 2847,
    leadsGenerated: 47,
    costPerLead: 60.57,
    clicks: 1842,
    impressions: 24680,
    conversionRate: 2.6,
    topCampaign: 'Emergency Plumbing - Atlanta',
    topKeyword: 'emergency plumber near me',
    qualityScore: 8.2,
    lastSynced: '1 hour ago',
    accountName: 'Acme Plumbing & HVAC - Ads',
    verified: true
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Paid Marketing"
        subtitle="Monitor and optimize your paid advertising campaigns"
        icon={<TrendingUp className="w-8 h-8 text-white" />}
        iconGradient="from-[#10B981] to-[#059669]"
      />

      {/* Google Ads - Hero Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-[#10B981]/10 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#059669]/5"></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left side - Header and Status */}
            <div className="flex items-start gap-6 flex-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10B981]/50 flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#E8F1FF] mb-2">Google Ads</h2>
                <p className="text-[#94A3B8] mb-3">Real-time performance metrics and campaign insights</p>
                
                {/* Connection Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1A1D23]/60 backdrop-blur-sm border border-[#10B981]/30">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <div className="flex items-center gap-2">
                    <span className="text-[#E8F1FF] text-sm">{googleAdsData.accountName}</span>
                    {googleAdsData.verified && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs border border-[#10B981]/30">
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#94A3B8] mt-3">
                  <RefreshCw className="w-4 h-4 text-[#10B981]" />
                  <span>Last synced: {googleAdsData.lastSynced}</span>
                </div>
              </div>
            </div>

            {/* Right side - Action Buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[240px]">
              <a
                href="https://ads.google.com/aw/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-xl shadow-[#10B981]/40 hover:shadow-2xl hover:shadow-[#10B981]/60 hover:-translate-y-0.5 transition-all font-medium"
              >
                <span>Open Google Ads</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#1A1D23] text-[#E8F1FF] border-2 border-[#293038] hover:border-[#10B981]/50 hover:bg-[#21262D] transition-all">
                <RefreshCw className="w-5 h-5" />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Five Metric Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {/* Ad Spend */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center shadow-md shadow-[#10B981]/30">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs text-[#94A3B8] mb-1">Ad Spend</div>
            <div className="text-3xl font-bold text-[#E8F1FF]">${googleAdsData.adSpend.toLocaleString()}</div>
          </div>
          <div className="text-xs text-[#94A3B8]">30 days</div>
        </div>

        {/* Leads Generated */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-lg flex items-center justify-center shadow-md shadow-[#3AB8FF]/30">
              <Users className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs text-[#94A3B8] mb-1">Leads</div>
            <div className="text-3xl font-bold text-[#E8F1FF]">{googleAdsData.leadsGenerated}</div>
          </div>
          <div className="text-xs text-[#94A3B8]">generated</div>
        </div>

        {/* Cost Per Lead */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-lg flex items-center justify-center shadow-md shadow-[#8B5CF6]/30">
              <Target className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs text-[#94A3B8] mb-1">Cost/Lead</div>
            <div className="text-3xl font-bold text-[#E8F1FF]">${googleAdsData.costPerLead}</div>
          </div>
          <div className="text-xs text-[#94A3B8]">average</div>
        </div>

        {/* Clicks */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#F59E0B]/20 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center shadow-md shadow-[#F59E0B]/30">
              <MousePointerClick className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs text-[#94A3B8] mb-1">Clicks</div>
            <div className="text-3xl font-bold text-[#E8F1FF]">{googleAdsData.clicks.toLocaleString()}</div>
          </div>
          <div className="text-xs text-[#94A3B8]">total</div>
        </div>

        {/* Impressions */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#00CFFF]/20 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00CFFF] to-[#3AB8FF] rounded-lg flex items-center justify-center shadow-md shadow-[#00CFFF]/30">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs text-[#94A3B8] mb-1">Impressions</div>
            <div className="text-3xl font-bold text-[#E8F1FF]">{(googleAdsData.impressions / 1000).toFixed(1)}k</div>
          </div>
          <div className="text-xs text-[#94A3B8]">views</div>
        </div>
      </div>

      {/* Unified Analytics Row - Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Conversion & Performance Card */}
        <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
          <h3 className="text-[#E8F1FF] mb-6">Performance Analytics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#94A3B8]">Conversion Rate</span>
              </div>
              <span className="text-[#E8F1FF] font-medium">{googleAdsData.conversionRate}%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#94A3B8]">vs. Last Month</span>
              </div>
              <span className="text-[#10B981] font-medium">↑ 18%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#FBBF24]" />
                <span className="text-[#94A3B8]">Quality Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E8F1FF] font-medium">{googleAdsData.qualityScore}/10</span>
                <span className="text-xs text-[#FBBF24] bg-[#FBBF24]/20 px-2 py-0.5 rounded-full border border-[#FBBF24]/30">
                  Excellent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers Card */}
        <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
          <h3 className="text-[#E8F1FF] mb-6">Top Performers</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#3AB8FF]" />
                <span className="text-[#94A3B8]">Top Campaign</span>
              </div>
              <span className="text-[#E8F1FF] text-sm text-right max-w-[200px] truncate" title={googleAdsData.topCampaign}>
                {googleAdsData.topCampaign}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-[#94A3B8]">Top Keyword</span>
              </div>
              <span className="text-[#E8F1FF] text-sm text-right max-w-[180px] truncate" title={googleAdsData.topKeyword}>
                {googleAdsData.topKeyword}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#94A3B8]">Account Status</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                <div className="w-2 h-2 bg-[#10B981] rounded-full mr-2 animate-pulse shadow-lg shadow-[#10B981]/50"></div>
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* External Platforms - LSA and Thumbtack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Local Service Ads */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Local Service Ads</h3>
                <p className="text-[#94A3B8] text-sm">Google LSA campaigns</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FBBF24]/20 text-[#FBBF24] text-sm border border-[#FBBF24]/30">
              <div className="w-2 h-2 bg-[#FBBF24] rounded-full mr-2 animate-pulse shadow-sm shadow-[#FBBF24]/50"></div>
              In Progress
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Setup Status</span>
              <span className="text-[#E8F1FF]">In Progress</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Background Check</span>
              <span className="text-[#E8F1FF]">Pending</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Google Guarantee</span>
              <span className="text-[#E8F1FF]">Not Eligible Yet</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://ads.google.com/localservices/inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#3AB8FF]/40 hover:-translate-y-0.5 transition-all shadow-md shadow-[#3AB8FF]/30 font-medium"
          >
            <span>Open LSA Platform</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Thumbtack */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
                <Pin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Thumbtack</h3>
                <p className="text-[#94A3B8] text-sm">Profile and leads management</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
              <div className="w-2 h-2 bg-[#10B981] rounded-full mr-2 animate-pulse shadow-sm shadow-[#10B981]/50"></div>
              Active
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Profile Status</span>
              <span className="text-[#E8F1FF]">Active ✓</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Response Rate</span>
              <span className="text-[#E8F1FF]">92%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Avg. Response Time</span>
              <span className="text-[#E8F1FF]">2.5 hours</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://www.thumbtack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all shadow-md shadow-[#8B5CF6]/30 font-medium"
          >
            <span>Open Thumbtack</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}