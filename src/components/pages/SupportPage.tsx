import { HelpCircle, MessageSquare, Mail, Phone, Clock, ChevronDown, CheckCircle, Loader } from 'lucide-react';
import { useState } from 'react';

export function SupportPage() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      color: 'from-[#3AB8FF] to-[#00CFFF]',
      shadowColor: '#3AB8FF',
      action: 'Start Chat',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 4 hours',
      color: 'from-[#8B5CF6] to-[#6366F1]',
      shadowColor: '#8B5CF6',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a specialist',
      availability: 'Mon-Fri, 9am-6pm EST',
      color: 'from-[#10B981] to-[#059669]',
      shadowColor: '#10B981',
      action: 'Call Now',
    },
  ];

  const recentTickets = [
    {
      id: '#1234',
      subject: 'Question about website design',
      status: 'Resolved',
      date: '2 days ago',
    },
    {
      id: '#1235',
      subject: 'Google Ads billing inquiry',
      status: 'In Progress',
      date: '1 day ago',
    },
    {
      id: '#1236',
      subject: 'Update my business information',
      status: 'Resolved',
      date: '5 days ago',
    },
  ];

  const faqItems = [
    { question: 'How do I update my business profile?', url: '#' },
    { question: 'How can I track my Google Ads performance?', url: '#' },
    { question: 'What is included in my marketing package?', url: '#' },
    { question: 'How do I connect my Google Business Profile?', url: '#' },
    { question: 'Can I request changes to my website?', url: '#' },
  ];

  return (
    <div>
      {/* Page Header - Homepage Style */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
          Support
        </h1>
        <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-2.5">
          We're here to help you succeed
        </p>
      </div>

      {/* Contact Options - Premium Dark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {supportOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent pointer-events-none"></div>
              
              {/* Glowing Icon with Neon Shadow */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${option.color} rounded-[20px] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 duration-300`}
                  style={{
                    boxShadow: `0 20px 60px -10px ${option.shadowColor}60, 0 0 40px ${option.shadowColor}20`,
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-[#E8F1FF] text-xl mb-2">{option.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{option.description}</p>
                
                {/* Availability Badge */}
                <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-[#1A1D23]/60 backdrop-blur-sm border border-[#293038] w-fit">
                  <Clock className="w-4 h-4 text-[#94A3B8]" />
                  <span className="text-[#94A3B8] text-xs">{option.availability}</span>
                </div>

                {/* LaunchOS Gradient Button */}
                <button
                  className={`group/btn w-full bg-gradient-to-r ${option.color} text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all font-medium`}
                  style={{
                    boxShadow: `0 10px 30px -5px ${option.shadowColor}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 50px -5px ${option.shadowColor}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 30px -5px ${option.shadowColor}40`;
                  }}
                >
                  {option.action}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Support Tickets - Dark Mini-Cards */}
      <div className="bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 p-8 mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent pointer-events-none rounded-[24px]"></div>
          
          <div className="relative">
            <h3 className="text-[#E8F1FF] text-xl mb-6">Recent Support Tickets</h3>
            
            <div className="space-y-3">
              {recentTickets.map((ticket, index) => (
                <div
                  key={index}
                  className="group/ticket relative flex items-center justify-between p-5 rounded-xl bg-[#1A1D23]/80 backdrop-blur-sm border border-[#293038] hover:border-[#3AB8FF]/30 hover:bg-[#21262D]/80 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3AB8FF]/0 group-hover/ticket:from-[#3AB8FF]/5 to-transparent rounded-xl transition-all duration-300 pointer-events-none"></div>
                  
                  <div className="relative flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#94A3B8] text-sm font-medium">{ticket.id}</span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                          ticket.status === 'Resolved'
                            ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 shadow-sm shadow-[#10B981]/20'
                            : 'bg-[#3AB8FF]/20 text-[#3AB8FF] border-[#3AB8FF]/30 shadow-sm shadow-[#3AB8FF]/20'
                        }`}
                      >
                        {ticket.status === 'Resolved' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Loader className="w-3 h-3 mr-1 animate-spin" />
                        )}
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-[#E8F1FF] text-sm">{ticket.subject}</p>
                  </div>
                  
                  <span className="relative text-[#64748B] text-sm ml-4">{ticket.date}</span>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1A1D23] text-[#E8F1FF] border-2 border-[#293038] hover:border-[#3AB8FF]/50 hover:bg-[#21262D] transition-all">
              <span>View All Tickets</span>
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section - Collapsible Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/5 to-transparent pointer-events-none"></div>
        
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className="relative w-full p-8 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-6">
            {/* Glowing Red/Pink Icon */}
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#EF4444] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 duration-300"
              style={{
                boxShadow: '0 20px 60px -10px #EF444460, 0 0 40px #EF444420',
              }}
            >
              <HelpCircle className="w-8 h-8 text-white" />
            </div>

            {/* Title and Subtitle */}
            <div className="text-left">
              <h3 className="text-[#E8F1FF] text-xl mb-1">Frequently Asked Questions</h3>
              <p className="text-[#94A3B8] text-sm">Find quick answers to common questions</p>
            </div>
          </div>

          {/* Chevron Arrow */}
          <div className="flex items-center gap-4">
            <span className="text-[#94A3B8] text-sm hidden md:block">
              {faqItems.length} questions
            </span>
            <ChevronDown
              className={`w-6 h-6 text-[#94A3B8] transition-transform duration-300 ${
                isFaqOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </button>

        {/* Expandable FAQ Content */}
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            isFaqOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-8 pb-8">
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#293038] to-transparent mb-6"></div>

            {/* FAQ Items */}
            <div className="space-y-3 mb-6">
              {faqItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="group/faq relative flex items-center justify-between px-5 py-4 rounded-xl bg-[#1A1D23] border border-[#293038] hover:border-[#EC4899]/40 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px #EC489920';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/0 group-hover/faq:from-[#EC4899]/5 to-transparent rounded-xl transition-opacity duration-300 pointer-events-none"></div>

                  <div className="relative flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#94A3B8] group-hover/faq:text-[#EC4899] transition-colors" />
                    <span className="text-[#E8F1FF] text-sm font-medium">{item.question}</span>
                  </div>

                  {/* Arrow */}
                  <ChevronDown className="relative w-4 h-4 text-[#94A3B8] -rotate-90 opacity-0 group-hover/faq:opacity-100 transition-all" />
                </a>
              ))}
            </div>

            {/* View All FAQ Button */}
            <a
              href="#"
              className="group/btn flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#EF4444] to-[#EC4899] text-white shadow-xl shadow-[#EF4444]/40 hover:shadow-2xl hover:shadow-[#EF4444]/60 hover:-translate-y-0.5 transition-all font-medium"
            >
              <span>View Full FAQ</span>
              <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}