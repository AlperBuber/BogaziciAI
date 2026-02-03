import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  strokeWidth = 2,
}) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
};

export default Icon;
