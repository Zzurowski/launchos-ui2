import { useState } from 'react';
import { CheckCircle2, Circle, Building2, Palette, Users, FileText, Megaphone, Database, Clock } from 'lucide-react';
import { PageHero } from '../PageHero';
import { BusinessInformationForm } from '../forms/BusinessInformationForm';
import { BrandGuidelinesForm } from '../forms/BrandGuidelinesForm';
import { TargetAudienceForm } from '../forms/TargetAudienceForm';
import { ContentPreferencesForm } from '../forms/ContentPreferencesForm';
import { AdsTrackingForm } from '../forms/AdsTrackingForm';
import { CRMSetupForm } from '../forms/CRMSetupForm';
import { ReviewSubmitPage } from '../forms/ReviewSubmitPage';

type StepStatus = 'completed' | 'in-progress' | 'not-started';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  status: StepStatus;
  color: string;
}

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const [steps, setSteps] = useState<OnboardingStep[]>([
    {
      id: 1,
      title: 'Business Information',
      description: 'Tell us about your business, location, and services',
      icon: Building2,
      status: 'completed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Brand Guidelines',
      description: 'Upload your logo, colors, and brand assets',
      icon: Palette,
      status: 'completed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Target Audience',
      description: 'Define your ideal customer and market',
      icon: Users,
      status: 'in-progress',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Content Preferences',
      description: 'Set your messaging style and content tone',
      icon: FileText,
      status: 'not-started',
      color: 'from-orange-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Ads & Tracking Setup',
      description: 'Configure your advertising and analytics',
      icon: Megaphone,
      status: 'not-started',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 6,
      title: 'CRM Setup',
      description: 'Connect your Fieldd account for lead management',
      icon: Database,
      status: 'not-started',
      color: 'from-violet-500 to-purple-500',
    },
  ]);

  const completedCount = steps.filter(step => step.status === 'completed').length;
  const progressPercentage = (completedCount / steps.length) * 100;
  const allStepsCompleted = completedCount === steps.length;

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const handleBack = () => {
    setActiveStep(null);
  };

  const handleSave = () => {
    // Update step status to completed
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.id === activeStep ? { ...step, status: 'completed' as StepStatus } : step
      )
    );
    setActiveStep(null);
  };

  const handleReviewClick = () => {
    setActiveStep(8); // Review & Submit page
  };

  const handleEditFromReview = (stepId: number) => {
    setActiveStep(stepId);
  };

  const handleSubmit = () => {
    alert('Onboarding submitted successfully! 🎉');
    setActiveStep(null);
  };

  const getStatusBadge = (status: StepStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 shadow-sm shadow-[#10B981]/20">
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#3AB8FF]/20 text-[#3AB8FF] border border-[#3AB8FF]/30 shadow-sm shadow-[#3AB8FF]/20">
            <Clock className="w-4 h-4 mr-1" />
            In Progress
          </span>
        );
      case 'not-started':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#64748B]/10 text-[#94A3B8] border border-[#64748B]/20">
            <Circle className="w-4 h-4 mr-1" />
            Not Started
          </span>
        );
    }
  };

  // Show form if a step is active
  if (activeStep === 1) {
    return <BusinessInformationForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 2) {
    return <BrandGuidelinesForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 3) {
    return <TargetAudienceForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 4) {
    return <ContentPreferencesForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 5) {
    return <AdsTrackingForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 6) {
    return <CRMSetupForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 8) {
    return <ReviewSubmitPage onBack={handleBack} onEdit={handleEditFromReview} onSubmit={handleSubmit} />;
  }

  // Show checklist view
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Onboarding Checklist"
        subtitle="Complete these steps to launch your marketing package"
        icon={<CheckCircle2 className="w-8 h-8 text-white" />}
        iconGradient="from-[#10B981] to-[#059669]"
      />

      {/* Progress Overview - Neon Blue Progress Bar */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1D23] to-[#1A1D23] border border-[#293038] shadow-md mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent"></div>
        <div className="relative p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#E8F1FF] font-medium">Overall Progress</h3>
            <span className="text-[#3AB8FF] font-medium">
              {completedCount} of {steps.length} completed
            </span>
          </div>
          <div className="h-2.5 bg-[#21262D] rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] rounded-full transition-all duration-500 shadow-lg shadow-[#3AB8FF]/40"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Onboarding Steps - Dark Card Panels */}
      <div className="space-y-3">
        {steps.map((step) => {
          const Icon = step.icon;
          
          // Map colors to dark theme gradients
          const colorMap: { [key: string]: { gradient: string; shadow: string } } = {
            'from-blue-500 to-cyan-500': { 
              gradient: 'from-[#3AB8FF] to-[#00CFFF]', 
              shadow: 'shadow-[#3AB8FF]/30' 
            },
            'from-purple-500 to-pink-500': { 
              gradient: 'from-[#8B5CF6] to-[#EC4899]', 
              shadow: 'shadow-[#8B5CF6]/30' 
            },
            'from-green-500 to-emerald-500': { 
              gradient: 'from-[#10B981] to-[#059669]', 
              shadow: 'shadow-[#10B981]/30' 
            },
            'from-orange-500 to-pink-500': { 
              gradient: 'from-[#F59E0B] to-[#EC4899]', 
              shadow: 'shadow-[#F59E0B]/30' 
            },
            'from-cyan-500 to-blue-500': { 
              gradient: 'from-[#00CFFF] to-[#3AB8FF]', 
              shadow: 'shadow-[#00CFFF]/30' 
            },
            'from-indigo-500 to-purple-500': { 
              gradient: 'from-[#6366F1] to-[#8B5CF6]', 
              shadow: 'shadow-[#6366F1]/30' 
            },
            'from-violet-500 to-purple-500': { 
              gradient: 'from-[#7C3AED] to-[#8B5CF6]', 
              shadow: 'shadow-[#7C3AED]/30' 
            },
          };
          
          const colorTheme = colorMap[step.color] || { gradient: 'from-[#3AB8FF] to-[#00CFFF]', shadow: 'shadow-[#3AB8FF]/30' };
          
          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className="w-full bg-gradient-to-br from-[#1A1D23] to-[#1A1D23] rounded-xl p-6 border border-[#293038] shadow-md hover:shadow-lg hover:border-[#3AB8FF]/30 hover:-translate-y-1 transition-all text-left group"
            >
              <div className="flex items-center gap-5">
                {/* Icon with Vibrant Gradient */}
                <div className={`w-14 h-14 bg-gradient-to-br ${colorTheme.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${colorTheme.shadow} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#E8F1FF] text-lg font-medium">{step.title}</h3>
                    {getStatusBadge(step.status)}
                  </div>
                  <div className="h-px bg-gradient-to-r from-[#293038] to-transparent my-2"></div>
                  <p className="text-[#94A3B8] text-sm">{step.description}</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-6 h-6 text-[#3AB8FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Review & Submit Button */}
      {allStepsCompleted && (
        <div className="mt-6">
          <button
            onClick={handleReviewClick}
            className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#10B981] text-white px-8 py-6 rounded-xl hover:shadow-lg hover:shadow-[#10B981]/40 hover:-translate-y-1 transition-all shadow-md shadow-[#10B981]/30 flex items-center justify-center gap-3 font-medium"
          >
            <CheckCircle2 className="w-6 h-6" />
            <span className="text-lg">Review & Submit Onboarding</span>
          </button>
        </div>
      )}

      {/* Help Section - Dark Gradient Card */}
      <div className="mt-6 relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#1A1D23] rounded-xl p-6 border border-[#293038] shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-transparent"></div>
        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-[#3AB8FF]/30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[#E8F1FF] font-medium mb-1">Need Help?</h3>
            <p className="text-[#94A3B8] text-sm">Our team is here to assist you with the onboarding process. Click any step above to get started or contact support if you have questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}