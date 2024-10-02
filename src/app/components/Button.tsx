import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  children,
}) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-xl ${className}`}>
    {children}
  </button>
);

export default Button;
