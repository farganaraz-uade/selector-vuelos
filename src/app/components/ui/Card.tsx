// components/ui/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`bg-white shadow rounded ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }: CardSectionProps) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: CardSectionProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className }: CardSectionProps) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }: CardSectionProps) {
  return <div className={`text-xl font-semibold ${className}`}>{children}</div>;
}