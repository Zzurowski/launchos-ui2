import { Megaphone, TrendingUp, DollarSign, Users, ExternalLink } from 'lucide-react';

export function AdsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Google Ads</h1>
        <p className="text-gray-500">Manage your advertising campaigns</p>
      </div>

      {/* Campaign Status */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-blue-400/10 to-blue-500/10 rounded-3xl p-8 border border-blue-200/50 backdrop-blur-sm mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Megaphone className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-gray-900 mb-1">Campaign Status: Setting Up</h2>
            <p className="text-gray-600">Complete billing verification to go live</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Open Google Ads Manager
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm">Ready</span>
          </div>
          <h3 className="text-gray-900 mb-1">Campaign</h3>
          <p className="text-gray-500 text-sm">Configured and ready</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm">Active</span>
          </div>
          <h3 className="text-gray-900 mb-1">Tracking Pixel</h3>
          <p className="text-gray-500 text-sm">Installed on website</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-orange-600 text-sm">Pending</span>
          </div>
          <h3 className="text-gray-900 mb-1">Billing</h3>
          <p className="text-gray-500 text-sm">Verification needed</p>
        </div>
      </div>

      {/* Setup Checklist */}
      <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
        <h3 className="text-gray-900 mb-4">Setup Checklist</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-900">Pixel Installed</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-900">Campaign Ready</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">!</span>
            </div>
            <span className="text-gray-900">Billing Verified</span>
            <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
              Verify Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
