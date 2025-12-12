import { Megaphone, ChevronLeft, Send, Upload } from 'lucide-react';
import { useState } from 'react';

interface AdsTrackingFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function AdsTrackingForm({ onBack, onSave }: AdsTrackingFormProps) {
  const [hasGoogleAds, setHasGoogleAds] = useState<'yes' | 'no' | null>(null);

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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#3AB8FF] hover:text-[#5DAEFF] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Page Header - Homepage Style */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#3AB8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00CFFF]/50">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Ads & Tracking Setup
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Configure your advertising and analytics
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form className="relative space-y-8">
            {/* 1. Google Ads Account Setup */}
            <div>
              <h3 className="text-[#E8F1FF] font-semibold mb-6">1. Google Ads Account Setup</h3>
              
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                  Do you currently have a Google Ads account? *
                </label>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                    <input 
                      type="radio" 
                      name="googleAdsAccount" 
                      value="yes" 
                      className="w-5 h-5 accent-[#3AB8FF]"
                      onChange={() => setHasGoogleAds('yes')}
                      checked={hasGoogleAds === 'yes'}
                    />
                    <div>
                      <span className="text-[#E8F1FF] block font-medium">Yes, I have an account</span>
                      <span className="text-[#94A3B8] text-sm">We'll connect to your existing account.</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                    <input 
                      type="radio" 
                      name="googleAdsAccount" 
                      value="no" 
                      className="w-5 h-5 accent-[#3AB8FF]"
                      onChange={() => setHasGoogleAds('no')}
                      checked={hasGoogleAds === 'no'}
                    />
                    <div>
                      <span className="text-[#E8F1FF] block font-medium">No, create one for me</span>
                      <span className="text-[#94A3B8] text-sm">We'll create a new Google Ads account for you.</span>
                    </div>
                  </label>
                </div>

                {/* Conditional Email Fields - Only show when "Yes" is selected */}
                {hasGoogleAds === 'yes' && (
                  <div className="mt-6 space-y-6 pl-2 border-l-2 border-[#3AB8FF]/20">
                    <div className="pl-6">
                      <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                        Google Ads Account Email *
                      </label>
                      <input
                        type="email"
                        placeholder="your-email@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                      />
                    </div>

                    <div className="pl-6">
                      <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                        Google Business Profile Access Email *
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="email"
                          placeholder="your-email@business.com"
                          className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                        />
                        <button
                          type="button"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all whitespace-nowrap font-medium"
                        >
                          <Send className="w-4 h-4" />
                          Send Access Request
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Local Services Ads (LSA) Requirements */}
            <div>
              <h3 className="text-[#E8F1FF] font-semibold mb-6">2. Local Services Ads (LSA) Requirements</h3>
              
              <div className="bg-[#0D1114]/50 rounded-xl p-6 border border-[#293038] space-y-6">
                {/* Insurance Certificate */}
                <div>
                  <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                    Insurance Certificate
                  </label>
                  <div className="border-2 border-dashed border-[#293038] rounded-xl p-8 text-center hover:border-[#3AB8FF]/40 transition-colors cursor-pointer bg-[#0D1114]/50">
                    <Upload className="w-8 h-8 text-[#3AB8FF] mx-auto mb-2" />
                    <p className="text-[#E8F1FF] mb-1">Click to upload or drag and drop</p>
                    <p className="text-[#64748B] text-sm">PDF, JPG, or PNG (max. 10MB)</p>
                  </div>
                </div>

                {/* Background Check */}
                <div className="flex items-start gap-3 p-4 bg-[#1A1D23]/50 rounded-xl border border-[#293038]">
                  <div className="w-2 h-2 rounded-full bg-[#3AB8FF] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-[#E8F1FF] font-medium mb-1">Background Check</div>
                    <div className="text-[#94A3B8] text-sm">We'll contact you with a secure link to complete your background check.</div>
                  </div>
                </div>

                {/* Google Guarantee */}
                <div className="flex items-start gap-3 p-4 bg-[#1A1D23]/50 rounded-xl border border-[#293038]">
                  <div className="w-2 h-2 rounded-full bg-[#3AB8FF] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-[#E8F1FF] font-medium mb-1">Google Guarantee</div>
                    <div className="text-[#94A3B8] text-sm">We'll handle verification and submit your business for Google Guarantee activation.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Monthly Ad Budget */}
            <div>
              <h3 className="text-[#E8F1FF] font-semibold mb-6">3. Monthly Ad Budget</h3>
              
              <div>
                <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                  Monthly Ad Budget *
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all">
                  <option value="">Select Budget Range</option>
                  <option value="500">$500 - $1,000</option>
                  <option value="1000">$1,000 - $2,500</option>
                  <option value="2500">$2,500 - $5,000</option>
                  <option value="5000">$5,000 - $10,000</option>
                  <option value="10000">$10,000+</option>
                </select>
              </div>
            </div>

            {/* 4. Advertising Platforms */}
            <div>
              <h3 className="text-[#E8F1FF] font-semibold mb-2">4. Advertising Platforms</h3>
              <p className="text-[#64748B] text-sm mb-6">We run campaigns across multiple channels. Select the platforms you'd like us to activate.</p>
              
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-xl border border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-[#3AB8FF] rounded" defaultChecked />
                    <div>
                      <span className="text-[#E8F1FF] block font-medium">Google Ads</span>
                      <span className="text-[#94A3B8] text-sm">Search & Display advertising</span>
                    </div>
                  </div>
                </label>
                
                <label className="flex items-center justify-between p-4 rounded-xl border border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-[#3AB8FF] rounded" defaultChecked />
                    <div>
                      <span className="text-[#E8F1FF] block font-medium">Local Services Ads</span>
                      <span className="text-[#94A3B8] text-sm">Google Guaranteed badge program</span>
                    </div>
                  </div>
                </label>
                
                <label className="flex items-center justify-between p-4 rounded-xl border border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-[#3AB8FF] rounded" defaultChecked />
                    <div>
                      <span className="text-[#E8F1FF] block font-medium">Nextdoor Ads</span>
                      <span className="text-[#94A3B8] text-sm">Target local neighborhoods</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* 5. Additional Campaign Notes */}
            <div>
              <h3 className="text-[#E8F1FF] font-semibold mb-2">5. Additional Campaign Notes</h3>
              <p className="text-[#64748B] text-sm mb-3">Any targeting preferences, exclusions, or campaign goals?</p>
              <textarea
                placeholder="Enter details here…"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="flex-1 bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium"
              >
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
