interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-blue-900">Setup Progress</span>
        <span className="text-blue-600">{percentage}% Complete</span>
      </div>
      <div className="h-3 bg-white/50 rounded-full overflow-hidden border border-blue-200/50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 shadow-lg shadow-blue-400/50"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
