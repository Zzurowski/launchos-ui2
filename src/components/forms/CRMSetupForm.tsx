import {
  Database,
  ChevronLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { useState } from "react";

interface CRMSetupFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function CRMSetupForm({
  onBack,
  onSave,
}: CRMSetupFormProps) {
  const [expandedPlan, setExpandedPlan] = useState<
    string | null
  >(null);
  const [selectedPlan, setSelectedPlan] = useState<
    string | null
  >(null);

  const togglePlan = (plan: string) => {
    if (expandedPlan === plan) {
      setExpandedPlan(null);
    } else {
      setExpandedPlan(plan);
      setSelectedPlan(plan);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
            linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
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

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7C3AED]/50">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                CRM Setup
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Choose your Fieldd plan and provide login access
                so we can configure your CRM for you
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Choose Your Fieldd Plan */}
        <div className="mb-6">
          <h3 className="text-[#E8F1FF] font-semibold mb-4">
            Step 1: Choose Your Fieldd Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* START Plan */}
            <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-xl border border-[#293038] shadow-md hover:border-[#3AB8FF]/40 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-transparent"></div>

              <button
                type="button"
                onClick={() => togglePlan("start")}
                className="w-full p-6 text-left relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[#E8F1FF] text-xl font-semibold mb-1">
                      START
                    </h4>
                    <div className="text-[#3AB8FF] text-2xl font-bold">
                      $199
                      <span className="text-sm text-[#94A3B8] font-normal">
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className="text-[#64748B]">
                    {expandedPlan === "start" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  For solo detailers and small teams.
                </p>
              </button>

              {/* Expanded Content */}
              {expandedPlan === "start" && (
                <div className="px-6 pb-6 border-t border-[#293038] pt-4 space-y-4 animate-[slideDown_200ms_ease-out]">
                  <p className="text-[#94A3B8] text-sm">
                    Perfect for getting started with
                    professional booking and customer
                    management.
                  </p>
                  <a
                    href="https://fieldd.co/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#3AB8FF] to-[#00CFFF] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium"
                  >
                    Go to Fieldd to Purchase
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* SCALE Plan */}
            <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-xl border-2 border-[#8B5CF6]/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                POPULAR
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent"></div>

              <button
                type="button"
                onClick={() => togglePlan("scale")}
                className="w-full p-6 text-left relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[#E8F1FF] text-xl font-semibold mb-1">
                      SCALE
                    </h4>
                    <div className="text-[#8B5CF6] text-2xl font-bold">
                      $299
                      <span className="text-sm text-[#94A3B8] font-normal">
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className="text-[#64748B]">
                    {expandedPlan === "scale" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  For growing teams who need more automation +
                  marketing tools.
                </p>
              </button>

              {/* Expanded Content */}
              {expandedPlan === "scale" && (
                <div className="px-6 pb-6 border-t border-[#8B5CF6]/20 pt-4 space-y-4 animate-[slideDown_200ms_ease-out]">
                  <p className="text-[#94A3B8] text-sm">
                    Advanced features for scaling operations
                    with more automation and integrations.
                  </p>
                  <a
                    href="https://fieldd.co/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all font-medium"
                  >
                    Go to Fieldd to Purchase
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* PRO Plan */}
            <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-xl border border-[#293038] shadow-md hover:border-[#F59E0B]/40 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent"></div>

              <button
                type="button"
                onClick={() => togglePlan("pro")}
                className="w-full p-6 text-left relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[#E8F1FF] text-xl font-semibold mb-1">
                      PRO
                    </h4>
                    <div className="text-[#F59E0B] text-2xl font-bold">
                      $999
                      <span className="text-sm text-[#94A3B8] font-normal">
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className="text-[#64748B]">
                    {expandedPlan === "pro" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  For established operators with advanced needs.
                </p>
              </button>

              {/* Expanded Content */}
              {expandedPlan === "pro" && (
                <div className="px-6 pb-6 border-t border-[#293038] pt-4 space-y-4 animate-[slideDown_200ms_ease-out]">
                  <p className="text-[#94A3B8] text-sm">
                    Enterprise-level features for large teams
                    with complex operational requirements.
                  </p>
                  <a
                    href="https://fieldd.co/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all font-medium"
                  >
                    Go to Fieldd to Purchase
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: Provide Your Fieldd Login Information - Only show when plan is selected */}
        {selectedPlan && (
          <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

            <form className="relative space-y-6">
              <h3 className="text-[#E8F1FF] font-semibold mb-6">
                Step 2: Provide Your Fieldd Login Information
              </h3>

              {/* Fieldd Login Email */}
              <div>
                <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                  Fieldd Account Email *
                </label>
                <input
                  type="email"
                  placeholder="your-email@business.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
              </div>

              {/* Fieldd Login Password */}
              <div>
                <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                  Fieldd Account Password *
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                />
                <p className="text-[#64748B] text-sm mt-2">
                  We will securely set up your entire Fieldd
                  system for you.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Confirm Setup Card */}
        {selectedPlan && (
          <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl overflow-hidden relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent"></div>

            <div className="relative">
              <h3 className="text-[#E8F1FF] font-semibold mb-4">
                We will fully configure your Fieldd CRM,
                including:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Services",
                  "Booking flow",
                  "Notifications",
                  "Automations",
                  "Calendar sync",
                  "Technicians",
                  "Website booking button",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#94A3B8] text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Save Button - Only show when plan is selected */}
        {selectedPlan && (
          <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>
            <div className="relative">
              <button
                type="button"
                onClick={onSave}
                className="w-full bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium"
              >
                Save & Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}