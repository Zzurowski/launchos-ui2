import { BookOpen, FileText, Video, Download, ExternalLink, ChevronDown, PlayCircle, FileCheck, Image, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../PageHero';

interface ResourceSection {
  icon: any;
  title: string;
  description: string;
  color: string;
  shadowColor: string;
  items: { name: string; url?: string }[];
}

export function ResourcesPage() {
  const [openSections, setOpenSections] = useState<number[]>([0]); // First section open by default

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const resources: ResourceSection[] = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Learn how to use your dashboard and manage your marketing',
      color: 'from-[#EF4444] to-[#EC4899]',
      shadowColor: '#EF4444',
      items: [
        { name: 'Dashboard Overview', url: '#' },
        { name: 'Managing Your Website', url: '#' },
        { name: 'Google Ads Basics', url: '#' },
        { name: 'Setting Up Your GBP', url: '#' },
        { name: 'Understanding Analytics', url: '#' },
      ],
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Step-by-step guides and best practices',
      color: 'from-[#3AB8FF] to-[#00CFFF]',
      shadowColor: '#3AB8FF',
      items: [
        { name: 'Getting Started Guide', url: '#' },
        { name: 'SEO Best Practices', url: '#' },
        { name: 'Content Guidelines', url: '#' },
        { name: 'Branding Standards', url: '#' },
        { name: 'Marketing Strategy Tips', url: '#' },
      ],
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'Brand assets and marketing materials',
      color: 'from-[#8B5CF6] to-[#6366F1]',
      shadowColor: '#8B5CF6',
      items: [
        { name: 'Logo Files (ZIP)', url: '#' },
        { name: 'Brand Guidelines PDF', url: '#' },
        { name: 'Social Media Templates', url: '#' },
        { name: 'Email Signatures', url: '#' },
        { name: 'Business Card Templates', url: '#' },
      ],
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Common questions and troubleshooting',
      color: 'from-[#10B981] to-[#059669]',
      shadowColor: '#10B981',
      items: [
        { name: 'How to Update My Profile', url: '#' },
        { name: 'Connecting Third-Party Tools', url: '#' },
        { name: 'Understanding Your Reports', url: '#' },
        { name: 'Billing & Subscription FAQ', url: '#' },
        { name: 'Contact Support', url: '#' },
      ],
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Resources"
        subtitle="Everything you need to succeed"
        icon={<BookOpen className="w-8 h-8 text-white" />}
        iconGradient="from-[#8B5CF6] to-[#6366F1]"
      />

      {/* Collapsible Resource Sections */}
      <div className="space-y-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          const isOpen = openSections.includes(index);

          return (
            <div
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent pointer-events-none"></div>
              
              {/* Header - Always Visible */}
              <button
                onClick={() => toggleSection(index)}
                className="relative w-full p-8 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-6">
                  {/* Colored Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300`}
                    style={{ boxShadow: `0 10px 30px -5px ${resource.shadowColor}40` }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Subtitle */}
                  <div className="text-left">
                    <h3 className="text-[#E8F1FF] text-xl mb-1">{resource.title}</h3>
                    <p className="text-[#94A3B8] text-sm">{resource.description}</p>
                  </div>
                </div>

                {/* Chevron Arrow */}
                <div className="flex items-center gap-4">
                  <span className="text-[#94A3B8] text-sm hidden md:block">
                    {resource.items.length} items
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#94A3B8] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#293038] to-transparent mb-6"></div>

                  {/* Resource Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {resource.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.url}
                        className="group/item relative flex items-center justify-between px-5 py-4 rounded-xl bg-[#1A1D23] border border-[#293038] hover:border-[#3AB8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 8px 24px ${resource.shadowColor}20`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                        }}
                      >
                        {/* Glow overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${resource.shadowColor}05, transparent)`,
                          }}
                        ></div>

                        <div className="relative flex items-center gap-3">
                          {/* Item Icon */}
                          {resource.icon === Video && <PlayCircle className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#EF4444] transition-colors" />}
                          {resource.icon === FileText && <FileCheck className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#3AB8FF] transition-colors" />}
                          {resource.icon === Download && <Image className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#8B5CF6] transition-colors" />}
                          {resource.icon === BookOpen && <Sparkles className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#10B981] transition-colors" />}
                          
                          <span className="text-[#E8F1FF] text-sm font-medium">{item.name}</span>
                        </div>

                        {/* Arrow Icon */}
                        <ExternalLink className="relative w-4 h-4 text-[#94A3B8] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Help Section - Premium Card */}
      <div className="mt-8 relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#10B981]/20 shadow-2xl shadow-[#10B981]/10 p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent"></div>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left side */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10B981]/50 flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF] text-xl mb-2">Need More Help?</h3>
                <p className="text-[#94A3B8]">Our knowledge base has answers to common questions and detailed guides</p>
              </div>
            </div>

            {/* Right side - Button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-xl shadow-[#10B981]/40 hover:shadow-2xl hover:shadow-[#10B981]/60 hover:-translate-y-0.5 transition-all font-medium whitespace-nowrap"
            >
              <span>Visit Knowledge Base</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}