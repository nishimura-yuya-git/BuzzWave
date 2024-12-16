import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export default function Button({ children, onClick, className = '', icon = true }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
}