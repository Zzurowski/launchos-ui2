import { CheckCircle, ChevronLeft, Edit } from 'lucide-react';

interface ReviewSubmitPageProps {
  onBack: () => void;
  onEdit: (stepId: number) => void;
  onSubmit: () => void;
}

export function ReviewSubmitPage({ onBack, onEdit, onSubmit }: ReviewSubmitPageProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Checklist
      </button>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-gray-900 mb-1">Review & Submit</h2>
          <p className="text-gray-500">Review your information before submitting</p>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-green-500/10 via-green-400/10 to-emerald-400/10 rounded-xl p-6 border border-green-200/50 backdrop-blur-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900 mb-1">Great work! You're almost done.</h3>
            <p className="text-gray-600 text-sm">Review all your information below. Click Edit to make changes, or Submit to complete your onboarding.</p>
          </div>
        </div>
      </div>

      {/* Summary Sections */}
      <div className="space-y-4">
        {/* Business Information */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Business Information</h3>
            <button
              onClick={() => onEdit(1)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Business Name:</span>
              <p className="text-gray-900">ABC HVAC Services</p>
            </div>
            <div>
              <span className="text-gray-500">Owner Name:</span>
              <p className="text-gray-900">John Doe</p>
            </div>
            <div>
              <span className="text-gray-500">Email:</span>
              <p className="text-gray-900">hello@abchvac.com</p>
            </div>
            <div>
              <span className="text-gray-500">Phone:</span>
              <p className="text-gray-900">(555) 123-4567</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500">Industry:</span>
              <p className="text-gray-900">HVAC</p>
            </div>
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Brand Guidelines</h3>
            <button
              onClick={() => onEdit(2)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Primary Color:</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-6 h-6 bg-blue-500 rounded border border-gray-200"></div>
                <p className="text-gray-900">#3B82F6</p>
              </div>
            </div>
            <div>
              <span className="text-gray-500">Logo:</span>
              <p className="text-gray-900">Uploaded ✓</p>
            </div>
            <div>
              <span className="text-gray-500">Typography:</span>
              <p className="text-gray-900">Inter / Open Sans</p>
            </div>
            <div>
              <span className="text-gray-500">Photos:</span>
              <p className="text-gray-900">5 photos uploaded</p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Target Audience</h3>
            <button
              onClick={() => onEdit(3)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Ideal Customer:</span>
              <p className="text-gray-900">Homeowners</p>
            </div>
            <div>
              <span className="text-gray-500">Age Range:</span>
              <p className="text-gray-900">35-54</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500">Specializations:</span>
              <p className="text-gray-900">AC replacement, emergency HVAC service, preventive maintenance</p>
            </div>
          </div>
        </div>

        {/* Content Preferences */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Content Preferences</h3>
            <button
              onClick={() => onEdit(4)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Tone & Voice:</span>
              <p className="text-gray-900">Professional</p>
            </div>
            <div>
              <span className="text-gray-500">Services:</span>
              <p className="text-gray-900">AC repair, heating, installation</p>
            </div>
          </div>
        </div>

        {/* Ads & Tracking */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Ads & Tracking Setup</h3>
            <button
              onClick={() => onEdit(5)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Monthly Budget:</span>
              <p className="text-gray-900">$2,500 - $5,000</p>
            </div>
            <div>
              <span className="text-gray-500">Platforms:</span>
              <p className="text-gray-900">Google Ads, Local Services Ads</p>
            </div>
            <div>
              <span className="text-gray-500">Tracking Pixel:</span>
              <p className="text-gray-900">Installed ✓</p>
            </div>
            <div>
              <span className="text-gray-500">Billing:</span>
              <p className="text-gray-900">Verified ✓</p>
            </div>
          </div>
        </div>

        {/* Business Verification */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Business Verification</h3>
            <button
              onClick={() => onEdit(6)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Business License:</span>
              <p className="text-gray-900">Uploaded ✓</p>
            </div>
            <div>
              <span className="text-gray-500">Insurance Certificate:</span>
              <p className="text-gray-900">Uploaded ✓</p>
            </div>
          </div>
        </div>

        {/* CRM Setup */}
        <div className="border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">CRM Setup</h3>
            <button
              onClick={() => onEdit(7)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Fieldd Account:</span>
              <p className="text-gray-900">Connected ✓</p>
            </div>
            <div>
              <span className="text-gray-500">Sync Settings:</span>
              <p className="text-gray-900">Leads, Bookings enabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Submit */}
      <div className="mt-8 pt-6 border-t border-blue-100">
        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-600 rounded mt-1"
            defaultChecked
          />
          <span className="text-gray-600 text-sm">
            I confirm that all information provided is accurate and I agree to the{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
          </span>
        </label>

        <button
          onClick={onSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg shadow-green-500/30"
        >
          Submit Onboarding
        </button>
      </div>
    </div>
  );
}
