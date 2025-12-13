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
  color: string;
}

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // 🔒 SINGLE SOURCE OF TRUTH — ALL STEPS START NOT_STARTED
  const [steps, setSteps] = useState<OnboardingStep[]>([
    {
      id: 1,
      title: 'Business Information',
      description: 'Tell us about your business, location, and services',
      icon: Building2,
      status: 'not-started',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Brand Guidelines',
      description: 'Upload your logo, colors, and brand assets',
      icon: Palette,
      status: 'not-started',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Target Audience',
      description: 'Define your ideal customer and market',
      icon: Users,
      status: 'not-started',
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

  const completedCount = steps.filter(s => s.status === 'completed').length;
  const progressPercentage = (completedCount / steps.length) * 100;
  const allStepsCompleted = completedCount === steps.length;

  const handleStepClick = (stepId: number) => {
    setSteps(prev =>
      prev.map(step =>
        step.id === stepId && step.status === 'not-started'
          ? { ...step, status: 'in-progress' }
          : step
      )
    );
    setActiveStep(stepId);
  };

  const handleBack = () => {
    setActiveStep(null);
  };

  const handleSave = () => {
    setSteps(prev =>
      prev.map(step =>
        step.id === activeStep
          ? { ...step, status: 'completed' }
          : step
      )
    );
    setActiveStep(null);
  };

  const handleReviewClick = () => {
    setActiveStep(99);
  };

  const handleSubmit = () => {
    alert('Onboarding submitted successfully!');
    setActiveStep(null);
  };

  const getStatusBadge = (status: StepStatus) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
          <CheckCircle2 className="w-4 h-4 mr-1" />
          Completed
        </span>
      );
    }

    if (status === 'in-progress') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
          <Clock className="w-4 h-4 mr-1" />
          In Progress
        </span>
      );
    }

    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-400">
        <Circle className="w-4 h-4 mr-1" />
        Not Started
      </span>
    );
  };

  // ---- FORM ROUTING ----
  if (activeStep === 1) return <BusinessInformationForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 2) return <BrandGuidelinesForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 3) return <TargetAudienceForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 4) return <ContentPreferencesForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 5) return <AdsTrackingForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 6) return <CRMSetupForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 99) {
    return <ReviewSubmitPage onBack={handleBack} onSubmit={handleSubmit} />;
  }

  // ---- CHECKLIST VIEW ----
  return (
    <div>
      <PageHero
        title="Onboarding Checklist"
        subtitle="Complete these steps to launch your marketing package"
        icon={<CheckCircle2 className="w-8 h-8 text-white" />}
        iconGradient="from-emerald-500 to-green-600"
      />

      <div className="mt-6 mb-8">
        <div className="flex justify-between text-sm text-blue-400 mb-2">
          <span>Overall Progress</span>
          <span>{completedCount} of {steps.length} completed</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {steps.map(step => {
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className="w-full text-left bg-[#141820] border border-[#222] rounded-xl p-6 hover:border-blue-500/40 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium">{step.title}</h3>
                    {getStatusBadge(step.status)}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {allStepsCompleted && (
        <button
          onClick={handleReviewClick}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium"
        >
          Review & Submit Onboarding
        </button>
      )}
    </div>
  );
}
