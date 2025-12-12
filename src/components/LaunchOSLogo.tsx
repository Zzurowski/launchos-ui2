interface LaunchOSLogoProps {
  size?: number;
  withGlow?: boolean;
  className?: string;
}

export function LaunchOSLogo({ size = 40, withGlow = false, className = '' }: LaunchOSLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {withGlow && (
        <>
          {/* Enhanced neon glow effect - purple/blue gradient */}
          <div 
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #3AB8FF 0%, #8B5CF6 100%)',
              filter: 'blur(50px)',
              opacity: 0.5,
              transform: 'scale(1.2)',
            }}
          ></div>
          <div 
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #3AB8FF 0%, #8B5CF6 100%)',
              filter: 'blur(40px)',
              opacity: 0.4,
            }}
          ></div>
        </>
      )}
      
      {/* SVG Gradient L Logo */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3AB8FF" />
            <stop offset="50%" stopColor="#5DAEFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* L Shape with gradient */}
        <path
          d="M25 15 L45 15 L45 70 L75 70 L75 85 L25 85 Z"
          fill="url(#logoGradient)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}
