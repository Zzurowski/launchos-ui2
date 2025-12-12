import { FileText, ChevronLeft } from 'lucide-react';

interface ContentPreferencesFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ContentPreferencesForm({ onBack, onSave }: ContentPreferencesFormProps) {
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F97316]/50">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Content Preferences
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Set your content style and messaging
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form className="relative space-y-6">
            {/* Tone/Voice Selection */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Tone & Voice *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <input type="radio" name="tone" value="professional" className="w-5 h-5 accent-[#3AB8FF]" />
                  <div>
                    <span className="text-[#E8F1FF] block font-medium">Professional</span>
                    <span className="text-[#94A3B8] text-sm">Formal, expert, trustworthy</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <input type="radio" name="tone" value="friendly" className="w-5 h-5 accent-[#3AB8FF]" />
                  <div>
                    <span className="text-[#E8F1FF] block font-medium">Friendly</span>
                    <span className="text-[#94A3B8] text-sm">Warm, approachable, casual</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <input type="radio" name="tone" value="luxury" className="w-5 h-5 accent-[#3AB8FF]" />
                  <div>
                    <span className="text-[#E8F1FF] block font-medium">Luxury</span>
                    <span className="text-[#94A3B8] text-sm">Premium, sophisticated, exclusive</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#293038] bg-[#0D1114]/50 cursor-pointer hover:border-[#3AB8FF]/40 hover:bg-[#1A1D23]/60 transition-all">
                  <input type="radio" name="tone" value="aggressive" className="w-5 h-5 accent-[#3AB8FF]" />
                  <div>
                    <span className="text-[#E8F1FF] block font-medium">Aggressive</span>
                    <span className="text-[#94A3B8] text-sm">Bold, direct, action-oriented</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Unique Selling Points */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Unique Selling Points *
              </label>
              <p className="text-[#64748B] text-sm mb-3">What makes you different from competitors?</p>
              <textarea
                placeholder="e.g., '24/7 emergency service, licensed and insured, 10+ years experience, satisfaction guarantee'"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Services Offered */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Services Offered *
              </label>
              <p className="text-[#64748B] text-sm mb-3">List all services you provide</p>
              <textarea
                placeholder="e.g., 'AC repair, heating repair, installation, maintenance, ductwork, indoor air quality'"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Pricing Structure */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Pricing Structure *
              </label>
              <p className="text-[#64748B] text-sm mb-3">How do you price your services?</p>
              <textarea
                placeholder="e.g., 'Flat-rate pricing for most services, free estimates, financing available, senior discounts'"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Website Examples */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Examples of Websites You Like
              </label>
              <p className="text-[#64748B] text-sm mb-3">Share links to websites with styles you admire</p>
              <div className="space-y-3">
                <input
                  type="url"
                  placeholder="https://example1.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
                <input
                  type="url"
                  placeholder="https://example2.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
                <input
                  type="url"
                  placeholder="https://example3.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Additional Notes
              </label>
              <p className="text-[#64748B] text-sm mb-3">Any other information or preferences we should know?</p>
              <textarea
                placeholder="Share any additional thoughts, preferences, or requirements..."
                rows={5}
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
