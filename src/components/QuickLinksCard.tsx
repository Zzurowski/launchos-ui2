import { ExternalLink, Megaphone, Globe, HelpCircle, CreditCard } from 'lucide-react';

export function QuickLinksCard() {
  const links = [
    { icon: Megaphone, label: 'Google Ads', color: 'from-red-500 to-orange-500' },
    { icon: Globe, label: 'Website Editor', color: 'from-blue-500 to-cyan-500' },
    { icon: HelpCircle, label: 'Support', color: 'from-purple-500 to-pink-500' },
    { icon: CreditCard, label: 'Billing', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">
        <h3 className="text-gray-900 mb-2">Quick Links</h3>
        <p className="text-gray-500 text-sm">Access your tools</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md hover:scale-105 transition-all group"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 text-sm text-center">{link.label}</span>
              <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
