interface WelcomeHeaderProps {
  name: string;
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div>
      <h1 className="text-gray-900 mb-2">Welcome back, {name} 👋</h1>
      <p className="text-gray-500">{currentDate}</p>
    </div>
  );
}
