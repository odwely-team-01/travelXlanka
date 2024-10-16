import React from 'react';

interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={`px-3 py-1 rounded-md text-xs sm:text-sm ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
