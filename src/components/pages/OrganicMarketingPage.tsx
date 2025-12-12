import { MapPin, Search, Users, ExternalLink, Star, Eye, Phone, MessageCircle, TrendingUp, AlertCircle, CheckCircle, RefreshCw, Clock, Zap } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../PageHero';

export function OrganicMarketingPage() {
  // GBP Connection States: 'connected' | 'not-connected' | 'error-permissions' | 'error-not-verified'
  const [gbpStatus, setGbpStatus] = useState<'connected' | 'not-connected' | 'error-permissions' | 'error-not-verified'>('connected');
  
  // Mock GBP data
  const gbpData = {
    rating: 4.8,
    reviewCount: 127,
    monthlyViews: 1284,
    interactions: 342,
    callCount: 89,
    messageCount: 24,
    websiteClicks: 156,
    directionRequests: 73,
    lastSynced: '2 hours ago',
    locationName: 'Acme Plumbing & HVAC',
    verified: true
  };

  const handleConnect = () => {
    setGbpStatus('connected');
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Organic Marketing"
        subtitle="Grow your online presence organically"
        icon={<MapPin className="w-8 h-8 text-white" />}
        iconGradient="from-[#F59E0B] to-[#D97706]"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Google Business Profile - Connected State */}
        {gbpStatus === 'connected' && (
          <div className="lg:col-span-2">
            {/* Hero Header Banner - Matching Website Build Style */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#3AB8FF]/20 shadow-2xl shadow-[#3AB8FF]/10 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-[#5DAEFF]/5"></div>
              <div className="relative p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  {/* Left side - Header and Status */}
                  <div className="flex items-start gap-6 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F59E0B]/50 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#E8F1FF] mb-2">Google Business Profile</h2>
                      <p className="text-[#94A3B8] mb-3">Real-time insights from your Google listing</p>
                      
                      {/* Connection Status Badge */}
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1A1D23]/60 backdrop-blur-sm border border-[#10B981]/30">
                        <CheckCircle className="w-5 h-5 text-[#10B981]" />
                        <div className="flex items-center gap-2">
                          <span className="text-[#E8F1FF] text-sm">{gbpData.locationName}</span>
                          {gbpData.verified && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs border border-[#10B981]/30">
                              Verified
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#94A3B8] mt-3">
                        <RefreshCw className="w-4 h-4 text-[#10B981]" />
                        <span>Last synced: {gbpData.lastSynced}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Action Buttons */}
                  <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[240px]">
                    <a
                      href="https://business.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white shadow-xl shadow-[#F59E0B]/40 hover:shadow-2xl hover:shadow-[#F59E0B]/60 hover:-translate-y-0.5 transition-all font-medium"
                    >
                      <span>Open GBP Dashboard</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#1A1D23] text-[#E8F1FF] border-2 border-[#293038] hover:border-[#F59E0B]/50 hover:bg-[#21262D] transition-all">
                      <RefreshCw className="w-5 h-5" />
                      <span>Refresh Data</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Metric Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Rating */}
              <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#3AB8FF]/20 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#FBBF24]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-lg flex items-center justify-center shadow-md shadow-[#FBBF24]/30">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-[#94A3B8] mb-1">Rating</div>
                  <div className="text-3xl font-bold text-[#E8F1FF]">{gbpData.rating}</div>
                </div>
                <div className="text-xs text-[#94A3B8]">{gbpData.reviewCount} reviews</div>
              </div>

              {/* Monthly Views */}
              <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#3AB8FF]/20 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-lg flex items-center justify-center shadow-md shadow-[#3AB8FF]/30">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-[#94A3B8] mb-1">Views</div>
                  <div className="text-3xl font-bold text-[#E8F1FF]">{gbpData.monthlyViews.toLocaleString()}</div>
                </div>
                <div className="text-xs text-[#94A3B8]">this month</div>
              </div>

              {/* Total Interactions */}
              <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#3AB8FF]/20 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center shadow-md shadow-[#10B981]/30">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-[#94A3B8] mb-1">Interactions</div>
                  <div className="text-3xl font-bold text-[#E8F1FF]">{gbpData.interactions}</div>
                </div>
                <div className="text-xs text-[#94A3B8]">total actions</div>
              </div>

              {/* Calls */}
              <div className="group relative bg-[#1A1D23] rounded-[24px] p-6 border border-[#3AB8FF]/20 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-lg flex items-center justify-center shadow-md shadow-[#8B5CF6]/30">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-[#94A3B8] mb-1">Calls</div>
                  <div className="text-3xl font-bold text-[#E8F1FF]">{gbpData.callCount}</div>
                </div>
                <div className="text-xs text-[#94A3B8]">this month</div>
              </div>
            </div>

            {/* Unified Analytics Row - Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Detailed Interactions Card */}
              <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
                <h3 className="text-[#E8F1FF] mb-6">Customer Interactions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#293038]">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-[#00CFFF]" />
                      <span className="text-[#94A3B8]">Messages</span>
                    </div>
                    <span className="text-[#E8F1FF] font-medium">{gbpData.messageCount}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#293038]">
                    <div className="flex items-center gap-3">
                      <ExternalLink className="w-5 h-5 text-[#6366F1]" />
                      <span className="text-[#94A3B8]">Website Clicks</span>
                    </div>
                    <span className="text-[#E8F1FF] font-medium">{gbpData.websiteClicks}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#F59E0B]" />
                      <span className="text-[#94A3B8]">Direction Requests</span>
                    </div>
                    <span className="text-[#E8F1FF] font-medium">{gbpData.directionRequests}</span>
                  </div>
                </div>
              </div>

              {/* Performance Trend Card */}
              <div className="bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20">
                <h3 className="text-[#E8F1FF] mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#293038]">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#10B981]" />
                      <span className="text-[#94A3B8]">vs. Last Month</span>
                    </div>
                    <span className="text-[#10B981] font-medium">↑ 12%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#293038]">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-[#3AB8FF]" />
                      <span className="text-[#94A3B8]">Search Ranking</span>
                    </div>
                    <span className="text-[#E8F1FF] font-medium">#3 in area</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-[#FBBF24]" />
                      <span className="text-[#94A3B8]">Response Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#E8F1FF] font-medium">94%</span>
                      <span className="text-xs text-[#10B981] bg-[#10B981]/20 px-2 py-0.5 rounded-full border border-[#10B981]/30">
                        Excellent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Not Connected State */}
        {gbpStatus === 'not-connected' && (
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-black/20 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent"></div>
            <div className="relative">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#64748B] to-[#475569] rounded-2xl flex items-center justify-center shadow-lg shadow-[#64748B]/30 flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-[#E8F1FF] mb-2">Google Business Profile</h2>
                  <p className="text-[#94A3B8]">Connect your account to see insights and performance</p>
                </div>
              </div>

              <div className="bg-[#1A1D23]/60 backdrop-blur-sm rounded-xl p-6 border border-[#3AB8FF]/20 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-[#3AB8FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#E8F1FF] mb-2">GBP Not Connected</h4>
                    <p className="text-[#94A3B8] text-sm mb-3">Connect your Google Business Profile to unlock:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#94A3B8]">
                      <li>Real-time review monitoring and ratings</li>
                      <li>Customer interaction analytics (calls, messages, clicks)</li>
                      <li>Monthly views and search performance</li>
                      <li>Automated performance reports</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConnect}
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white shadow-xl shadow-[#F59E0B]/40 hover:shadow-2xl hover:shadow-[#F59E0B]/60 hover:-translate-y-0.5 transition-all font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Connect Google Business Profile</span>
              </button>
            </div>
          </div>
        )}

        {/* Error: Permissions Missing */}
        {gbpStatus === 'error-permissions' && (
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#EF4444]/20 shadow-2xl shadow-[#EF4444]/10 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-2xl flex items-center justify-center shadow-lg shadow-[#EF4444]/50 flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-[#E8F1FF] mb-2">Permissions Required</h2>
                  <p className="text-[#94A3B8]">Additional permissions needed to access your GBP data</p>
                </div>
              </div>

              <div className="bg-[#1A1D23]/60 backdrop-blur-sm rounded-xl p-6 border border-[#EF4444]/20 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#E8F1FF] mb-2">Account Permissions Missing</h4>
                    <p className="text-[#94A3B8] text-sm mb-3">LaunchOS needs additional permissions to read your Google Business Profile data.</p>
                    <div className="bg-[#EF4444]/10 rounded-lg p-3 mb-3 border border-[#EF4444]/20">
                      <p className="text-sm text-[#EF4444] mb-1">Required permissions:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#FCA5A5]">
                        <li>Read business profile information</li>
                        <li>Access reviews and ratings</li>
                        <li>View performance insights</li>
                      </ul>
                    </div>
                    <p className="text-[#94A3B8] text-sm">Click below to grant the necessary permissions.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConnect}
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white shadow-xl shadow-[#EF4444]/40 hover:shadow-2xl hover:shadow-[#EF4444]/60 hover:-translate-y-0.5 transition-all font-medium"
              >
                <span>Grant Permissions</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        )}

        {/* Error: Location Not Verified */}
        {gbpStatus === 'error-not-verified' && (
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#FBBF24]/20 shadow-2xl shadow-[#FBBF24]/10 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FBBF24]/50 flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-[#E8F1FF] mb-2">Location Not Verified</h2>
                  <p className="text-[#94A3B8]">Your Google Business Profile needs verification</p>
                </div>
              </div>

              <div className="bg-[#1A1D23]/60 backdrop-blur-sm rounded-xl p-6 border border-[#FBBF24]/20 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#E8F1FF] mb-2">Verification Pending</h4>
                    <p className="text-[#94A3B8] text-sm mb-3">Your Google Business Profile location has not been verified yet. Data syncing will begin once verification is complete.</p>
                    <div className="bg-[#FBBF24]/10 rounded-lg p-3 mb-3 border border-[#FBBF24]/20">
                      <p className="text-sm text-[#FBBF24] mb-2">Verification methods:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#FCD34D]">
                        <li>Postcard verification (5-7 business days)</li>
                        <li>Phone verification (instant, if available)</li>
                        <li>Email verification (instant, if available)</li>
                      </ul>
                    </div>
                    <p className="text-[#94A3B8] text-sm">Visit your Google Business Profile to complete verification.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://business.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-white shadow-xl shadow-[#FBBF24]/40 hover:shadow-2xl hover:shadow-[#FBBF24]/60 hover:-translate-y-0.5 transition-all font-medium"
              >
                <span>Complete Verification</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        )}

        {/* Website SEO Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3AB8FF] to-[#6366F1] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Website SEO</h3>
                <p className="text-[#94A3B8] text-sm">Search engine optimization</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#64748B]/20 text-[#94A3B8] text-sm border border-[#64748B]/30">
              Coming Soon
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">SEO Score</span>
              <span className="text-[#64748B]">-</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Keywords Tracked</span>
              <span className="text-[#64748B]">-</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Organic Traffic</span>
              <span className="text-[#64748B]">-</span>
            </div>
          </div>

          {/* Button */}
          <button
            disabled
            className="flex items-center justify-center gap-2 w-full bg-[#293038] text-[#64748B] px-6 py-3 rounded-2xl cursor-not-allowed opacity-50"
          >
            <span>Open SEO Tools</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Nextdoor Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10B981]/50">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Nextdoor / Neighbor</h3>
                <p className="text-[#94A3B8] text-sm">Local community connection</p>
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
              <span className="text-[#94A3B8]">Recommendations</span>
              <span className="text-[#E8F1FF]">34</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Neighborhood Reach</span>
              <span className="text-[#E8F1FF]">8 neighborhoods</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://nextdoor.com/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#10B981]/40 hover:-translate-y-0.5 transition-all shadow-md shadow-[#10B981]/30 font-medium"
          >
            <span>Open Nextdoor</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}