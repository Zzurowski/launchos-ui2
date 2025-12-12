import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconGradient?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, icon, iconGradient = 'from-[#3AB8FF] to-[#8B5CF6]', children }: PageHeroProps) {
  return (
    <div className="mb-8">
      {/* Hero Container - Matching Homepage Style */}
      <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl overflow-hidden relative">
        {/* Soft gradient glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
              linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative flex items-center gap-5">
          {/* Icon with gradient background */}
          {icon && (
            <div className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
              style={{
                boxShadow: '0 10px 30px -5px rgba(58, 184, 255, 0.3)'
              }}
            >
              {icon}
            </div>
          )}
          
          {/* Header Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-2.5">
              {subtitle}
            </p>
          </div>

          {/* Optional children (e.g., action buttons) */}
          {children}
        </div>
      </div>
    </div>
  );
}
