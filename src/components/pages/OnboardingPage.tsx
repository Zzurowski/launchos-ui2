import { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Building2,
  Palette,
  Users,
  FileText,
  Megaphone,
  Database,
  Clock,
} from 'lucide-react';

import { PageHero } from '../PageHero';
import { BusinessInformationForm } from '../forms/BusinessInformationForm';
import { BrandGuidelinesForm } from '../forms/BrandGuidelinesForm';
import { TargetAudienceForm } from '../forms/TargetAudienceForm';
import { ContentPreferencesForm } from '../forms/ContentPreferencesForm';
import { AdsTrackingForm } from '../forms/AdsTrackingForm';
import { CRMSetupForm } from '../forms/CRMSetupForm';
import { ReviewSubmitPage } from '../forms/ReviewSubmitPage';

type StepStatus = 'not-started' | 'in-progress' | 'completed';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  status: StepStatus;
}

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const [steps, setSteps] = useState<OnboardingStep[]>([
    {
      id: 1,
      title: 'Business Information',
      description: 'Tell us about your business, location, and services',
      icon: Building2,
      status: 'not-started',
    },
    {
      id: 2,
      title: 'Brand Guidelines',
      description: 'Upload your logo, colors, and brand assets',
      icon: Palette,
      status: 'not-started',
    },
    {
      id: 3,
      title: 'Target Audience',
      description: 'Define your ideal customer and market',
      icon: Users,
      status: 'not-started',
    },
    {
      id: 4,
      title: 'Content Preferences',
      description: 'Set your messaging style and content tone',
      icon: FileText,
      status: 'not-started',
    },
    {
      id: 5,
      title: 'Ads & Tracking Setup',
      description: 'Configure your advertising and analytics',
      icon: Megaphone,
      status: 'not-started',
    },
    {
      id: 6,
      title: 'CRM Setup',
      description: 'Connect your Fieldd account for lead management',
      icon: Database,
      status: 'not-started',
    },
  ]);

  const completedCount = steps.filter(s => s.status === 'completed').length;
  const progressPercentage = (completedCount / steps.length) * 100;
  const allStepsCompleted = completedCount === steps.length;

  const openStep = (id: number) => {
    setSteps(prev =>
      prev.map(s =>
        s.id === id && s.status === 'not-started'
          ? { ...s, status: 'in-progress' }
          : s
      )
    );
    setActiveStep(id);
  };

  const handleSave = () => {
    setSteps(prev =>
      prev.map(s =>
        s.id === activeStep ? { ...s, status: 'completed' } : s
      )
    );
    setActiveStep(null);
  };

  const handleBack = () => setActiveStep(null);

  const getBadge = (status: StepStatus) => {
    if (status === 'completed')
      return (
        <span className="text-green-400 flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4" /> Completed
        </span>
      );

    if (status === 'in-progress')
      return (
        <span className="text-blue-400 flex items-center gap-1">
          <Clock className="w-4 h-4" /> In Progress
        </span>
      );

    return (
      <span className="text-gray-400 flex items-center gap-1">
        <Circle className="w-4 h-4" /> Not Started
      </span>
    );
  };

  // Active step views
  if (activeStep === 1) return <BusinessInformationForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 2) return <BrandGuidelinesForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 3) return <TargetAudienceForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 4) return <ContentPreferencesForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 5) return <AdsTrackingForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 6) return <CRMSetupForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 99) return <ReviewSubmitPage onBack={handleBack} onSubmit={() => alert('Submitted')} onEdit={setActiveStep} />;

  return (
    <div>
      <PageHero
        title="Onboarding Checklist"
        subtitle="Complete these steps to launch your marketing package"
        icon={<CheckCircle2 className="w-8 h-8 text-white" />}
        iconGradient="from-[#10B981] to-[#059669]"
      />

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-white">Overall Progress</span>
          <span className="text-blue-400">
            {completedCount} of {steps.length} completed
          </span>
        </div>
        <div className="h-2 bg-gray-800 rounded">
          <div
            className="h-full bg-blue-500 rounded transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {steps.map(step => {
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => openStep(step.id)}
              className="w-full p-5 rounded-xl border border-gray-700 bg-[#12161D] hover:border-blue-400 transition text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">{step.title}</div>
                    <div className="text-sm text-gray-400">{step.description}</div>
                  </div>
                </div>
                {getBadge(step.status)}
              </div>
            </button>
          );
        })}
      </div>

      {allStepsCompleted && (
        <button
          onClick={() => setActiveStep(99)}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl"
        >
          Review & Submit Onboarding
        </button>
      )}
    </div>
  );
}
