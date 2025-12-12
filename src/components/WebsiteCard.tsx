import { Globe, ExternalLink } from 'lucide-react';

export function WebsiteCard() {
  const status: 'In Progress' | 'Needs Info' | 'Completed' = 'In Progress';
  
  const statusColors = {
    'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
    'Needs Info': 'bg-orange-100 text-orange-700 border-orange-200',
    'Completed': 'bg-green-100 text-green-700 border-green-200',
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900">Website Build</h3>
            <p className="text-gray-500 text-sm">Status</p>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
        View Website Draft
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}
