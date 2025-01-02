import { 
  Flame, 
  Snowflake, 
  Leaf, 
  Zap, 
  Sparkles, 
  Droplets 
} from 'lucide-react';

interface TeamIconProps {
  teamId: string;
  className?: string;
}

export function TeamIcon({ teamId, className = "w-5 h-5" }: TeamIconProps) {
  const iconProps = {
    className,
    strokeWidth: 2.5,
  };

  switch (teamId) {
    case 'red':
      return <Flame {...iconProps} />;
    case 'ocean':
      return <Snowflake {...iconProps} />;
    case 'green':
      return <Leaf {...iconProps} />;
    case 'yellow':
      return <Zap {...iconProps} />;
    case 'pink':
      return <Sparkles {...iconProps} />;
    case 'blue':
      return <Droplets {...iconProps} />;
    default:
      return null;
  }
}
