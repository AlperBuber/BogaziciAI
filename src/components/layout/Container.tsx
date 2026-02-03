import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1440px]',
  };

  return (
    <div className={`container ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
