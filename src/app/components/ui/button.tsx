// components/ui/Button.tsx
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from '../../lib/utils'; // Asegúrate de importar la función cn si la estás usando

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  variant?: 'outline' | 'solid'; // Puedes agregar más variantes según tus necesidades
}

export function Button({ children, className, variant, ...props }: ButtonProps) {
  const variantClass = variant === 'outline' ? 'border border-gray-700' : '';
  return (
    <button className={`px-4 py-2 rounded ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}