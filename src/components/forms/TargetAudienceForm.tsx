import { Users, ChevronLeft } from 'lucide-react';

interface TargetAudienceFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function TargetAudienceForm({ onBack, onSave }: TargetAudienceFormProps) {
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10B981]/50">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Target Audience
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Define your ideal customer profile
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form className="relative space-y-6">
            {/* Ideal Customer */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Ideal Customer *
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all mb-3">
                <option value="">Select Customer Type</option>
                <option value="homeowners">Homeowners</option>
                <option value="renters">Renters</option>
                <option value="business">Small Business Owners</option>
                <option value="enterprise">Enterprise/Corporate</option>
                <option value="property">Property Managers</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Describe your ideal customer in detail (e.g., 'Homeowners aged 35-55 in suburban areas who value quality and reliability')"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Age Range */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Age Range *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#64748B] text-sm mb-2">From</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all">
                    <option value="">Select</option>
                    <option value="18">18-24</option>
                    <option value="25">25-34</option>
                    <option value="35">35-44</option>
                    <option value="45">45-54</option>
                    <option value="55">55-64</option>
                    <option value="65">65+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#64748B] text-sm mb-2">To</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all">
                    <option value="">Select</option>
                    <option value="18">18-24</option>
                    <option value="25">25-34</option>
                    <option value="35">35-44</option>
                    <option value="45">45-54</option>
                    <option value="55">55-64</option>
                    <option value="65">65+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Household Income */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Household Income (Optional)
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all">
                <option value="">Select Income Range</option>
                <option value="under50">Under $50,000</option>
                <option value="50-75">$50,000 - $75,000</option>
                <option value="75-100">$75,000 - $100,000</option>
                <option value="100-150">$100,000 - $150,000</option>
                <option value="150-250">$150,000 - $250,000</option>
                <option value="over250">Over $250,000</option>
              </select>
            </div>

            {/* Key Customer Problems */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Key Customer Problems *
              </label>
              <p className="text-[#64748B] text-sm mb-3">What problems do your customers face that you solve?</p>
              <textarea
                placeholder="e.g., 'Emergency repairs, unreliable contractors, high prices, poor communication'"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Areas of Specialization */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Areas of Specialization *
              </label>
              <p className="text-[#64748B] text-sm mb-3">What services or solutions are you known for?</p>
              <textarea
                placeholder="e.g., 'AC replacement, emergency HVAC service, preventive maintenance, ductwork installation'"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Competitors */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Competitors
              </label>
              <p className="text-[#64748B] text-sm mb-3">List your main competitors (names or websites)</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Competitor 1"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
                <input
                  type="text"
                  placeholder="Competitor 2"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
                <input
                  type="text"
                  placeholder="Competitor 3"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
              </div>
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
