import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export function OnboardingFormsCard() {
  const forms = [
    { name: 'Business Information', completed: true },
    { name: 'Brand Guidelines', completed: true },
    { name: 'Target Audience', completed: false },
    { name: 'Content Preferences', completed: false },
  ];

  const completedCount = forms.filter(f => f.completed).length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900">Onboarding Forms</h3>
            <p className="text-gray-500 text-sm">{completedCount} of {forms.length} completed</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        {forms.map((form, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <span className={`text-sm ${form.completed ? 'text-gray-900' : 'text-gray-500'}`}>
              {form.name}
            </span>
            {form.completed ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-orange-400" />
            )}
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/30">
        Complete Forms
      </button>
    </div>
  );
}
