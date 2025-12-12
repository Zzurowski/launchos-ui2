import { Bell, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function NotificationsCard() {
  const messages = [
    {
      type: 'success' as const,
      message: 'Your website draft is ready for review!',
      time: '2 hours ago',
    },
    {
      type: 'info' as const,
      message: 'Complete your billing verification to activate ads',
      time: '1 day ago',
    },
    {
      type: 'info' as const,
      message: 'Welcome to LaunchOS! Your team is here to help.',
      time: '3 days ago',
    },
  ];

  const iconMap = {
    success: CheckCircle2,
    warning: AlertCircle,
    info: Info,
  };

  const colorMap = {
    success: 'text-green-500',
    warning: 'text-orange-500',
    info: 'text-blue-500',
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
          <Bell className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-gray-900">Notifications</h3>
          <p className="text-gray-500 text-sm">Messages from your team</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {messages.map((msg, index) => {
          const Icon = iconMap[msg.type];
          return (
            <div key={index} className="flex gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
              <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorMap[msg.type]}`} />
              <div className="flex-1">
                <p className="text-gray-900 text-sm">{msg.message}</p>
                <p className="text-gray-400 text-xs mt-1">{msg.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
