import { Megaphone, CheckCircle2, Circle, ExternalLink } from 'lucide-react';

export function GoogleAdsCard() {
  const steps = [
    { label: 'Pixel Installed', completed: true },
    { label: 'Campaign Ready', completed: true },
    { label: 'Billing Verified', completed: false },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900">Google Ads</h3>
            <p className="text-gray-500 text-sm">Setup Progress</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            {step.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
            <span className={step.completed ? 'text-gray-900' : 'text-gray-400'}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2">
        Open Google Ads Manager
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}
