import { CheckCircle2, Globe, Megaphone, BarChart3, HeadphonesIcon } from 'lucide-react';

export function ServicesSummaryCard() {
  const services = [
    { icon: Globe, label: 'Website Included', color: 'from-blue-500 to-blue-600' },
    { icon: Megaphone, label: 'Ads Included', color: 'from-cyan-500 to-blue-500' },
    { icon: BarChart3, label: 'Tracking Included', color: 'from-purple-500 to-blue-500' },
    { icon: HeadphonesIcon, label: 'Support Included', color: 'from-pink-500 to-blue-500' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-gray-900">Your Services</h3>
          <p className="text-gray-500 text-sm">What's included</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
              <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-2`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700 text-sm">{service.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
