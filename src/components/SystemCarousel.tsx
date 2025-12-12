import { useState, useEffect, useRef } from 'react';
import { Globe, TrendingUp, Search, Target, Mail, Calendar, Star, MessageSquare, CheckCircle, Clock, Loader2 } from 'lucide-react';

interface SystemCard {
  id: number;
  title: string;
  description: string;
  icon: any;
  status: 'Complete' | 'In Progress' | 'Pending';
  progress: number;
  items: { label: string; status: 'complete' | 'progress' | 'pending' }[];
  gradient: string;
  shadowColor: string;
}

const systemCards: SystemCard[] = [
  {
    id: 1,
    title: 'Website Build',
    description: 'Custom site being deployed',
    icon: Globe,
    status: 'In Progress',
    progress: 75,
    items: [
      { label: 'Design System', status: 'complete' },
      { label: 'Page Templates', status: 'progress' },
      { label: 'Content Integration', status: 'pending' },
    ],
    gradient: 'from-[#3AB8FF] to-[#5DAEFF]',
    shadowColor: 'shadow-[#3AB8FF]',
  },
  {
    id: 2,
    title: 'Google Ads Setup',
    description: 'Campaigns ready to launch',
    icon: TrendingUp,
    status: 'Complete',
    progress: 100,
    items: [
      { label: 'Account Configuration', status: 'complete' },
      { label: 'Campaign Structure', status: 'complete' },
      { label: 'Budget: $2,500/mo', status: 'complete' },
    ],
    gradient: 'from-[#10B981] to-[#059669]',
    shadowColor: 'shadow-[#10B981]',
  },
  {
    id: 3,
    title: 'Local SEO Setup',
    description: 'Search presence building',
    icon: Search,
    status: 'In Progress',
    progress: 45,
    items: [
      { label: 'Google Business Profile', status: 'complete' },
      { label: 'Location Pages', status: 'progress' },
      { label: 'Citation Building', status: 'pending' },
    ],
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    shadowColor: 'shadow-[#8B5CF6]',
  },
  {
    id: 4,
    title: 'Meta Ads Setup',
    description: 'Facebook & Instagram ads',
    icon: Target,
    status: 'Pending',
    progress: 15,
    items: [
      { label: 'Business Manager', status: 'pending' },
      { label: 'Pixel Integration', status: 'pending' },
      { label: 'Campaign Creation', status: 'pending' },
    ],
    gradient: 'from-[#EC4899] to-[#DB2777]',
    shadowColor: 'shadow-[#EC4899]',
  },
  {
    id: 5,
    title: 'Email & Automation Build',
    description: 'Workflow sequences deploying',
    icon: Mail,
    status: 'In Progress',
    progress: 60,
    items: [
      { label: 'Welcome Series', status: 'complete' },
      { label: 'Lead Nurture Flow', status: 'progress' },
      { label: 'Re-engagement', status: 'pending' },
    ],
    gradient: 'from-[#F59E0B] to-[#D97706]',
    shadowColor: 'shadow-[#F59E0B]',
  },
  {
    id: 6,
    title: 'Booking System Integration',
    description: 'Fieldd CRM deployment',
    icon: Calendar,
    status: 'In Progress',
    progress: 55,
    items: [
      { label: 'Service Catalog', status: 'complete' },
      { label: 'Booking Widget', status: 'progress' },
      { label: 'Calendar Sync', status: 'pending' },
    ],
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    shadowColor: 'shadow-[#06B6D4]',
  },
  {
    id: 7,
    title: 'Review System Setup',
    description: 'Automated review requests',
    icon: Star,
    status: 'Pending',
    progress: 20,
    items: [
      { label: 'SMS Automation', status: 'pending' },
      { label: 'Google Integration', status: 'pending' },
      { label: 'Follow-up Sequences', status: 'pending' },
    ],
    gradient: 'from-[#FBBF24] to-[#F59E0B]',
    shadowColor: 'shadow-[#FBBF24]',
  },
  {
    id: 8,
    title: 'AI Chat & Follow-Up Engine',
    description: 'Intelligent customer engagement',
    icon: MessageSquare,
    status: 'Pending',
    progress: 10,
    items: [
      { label: 'Chatbot Training', status: 'pending' },
      { label: 'Response Templates', status: 'pending' },
      { label: 'Lead Qualification', status: 'pending' },
    ],
    gradient: 'from-[#A855F7] to-[#9333EA]',
    shadowColor: 'shadow-[#A855F7]',
  },
];

export function SystemCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  // Duplicate cards for infinite loop effect
  const duplicatedCards = [...systemCards, ...systemCards, ...systemCards];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 288 + 16; // 72 (w-72) * 4 (1rem = 4px) + 16px gap
    const totalWidth = cardWidth * systemCards.length;
    
    let lastTimestamp = 0;
    const speed = 0.3; // pixels per frame (very slow)

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && container) {
        scrollPositionRef.current += speed * (delta / 16); // normalize to 60fps
        
        // Reset position for infinite loop
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-x-scroll scrollbar-none cursor-grab active:cursor-grabbing"
        style={{
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-4">
          {duplicatedCards.map((card, index) => {
            const Icon = card.icon;
            const statusConfig = {
              Complete: { bg: 'bg-[#10B981]/20', border: 'border-[#10B981]/30', text: 'text-[#10B981]' },
              'In Progress': { bg: 'bg-[#3AB8FF]/20', border: 'border-[#3AB8FF]/30', text: 'text-[#3AB8FF]' },
              Pending: { bg: 'bg-[#94A3B8]/20', border: 'border-[#94A3B8]/30', text: 'text-[#94A3B8]' },
            };

            return (
              <div
                key={`${card.id}-${index}`}
                className="group relative bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-xl p-5 border border-[#293038] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-72 flex-shrink-0 overflow-hidden"
                style={{
                  boxShadow: `0 0 30px rgba(0, 0, 0, 0.3)`,
                }}
                onMouseEnter={() => {
                  const el = document.getElementById(`card-${card.id}-${index}`);
                  if (el) {
                    el.style.boxShadow = `0 10px 40px ${card.shadowColor.replace('shadow-', 'rgba(')}/0.4)`;
                  }
                }}
                onMouseLeave={() => {
                  const el = document.getElementById(`card-${card.id}-${index}`);
                  if (el) {
                    el.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.3)';
                  }
                }}
                id={`card-${card.id}-${index}`}
              >
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg ${card.shadowColor}/50`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`px-2 py-1 rounded-md ${statusConfig[card.status].bg} border ${statusConfig[card.status].border}`}>
                      <span className={`text-xs ${statusConfig[card.status].text} font-medium`}>{card.status}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#E8F1FF] mb-1">{card.title}</h3>
                  <p className="text-xs text-[#94A3B8] mb-4">{card.description}</p>

                  {/* Items */}
                  <div className="space-y-2 mb-4">
                    {card.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-[#94A3B8]">{item.label}</span>
                        {item.status === 'complete' && <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />}
                        {item.status === 'progress' && <Loader2 className="w-3.5 h-3.5 text-[#3AB8FF] animate-spin" />}
                        {item.status === 'pending' && <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1 bg-[#0A0B0D] rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${card.gradient} rounded-full shadow-lg ${card.shadowColor}/50 transition-all duration-300`}
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}