// components/ui/Command.tsx
import React, { ReactNode } from 'react';

interface CommandProps {
  children: ReactNode;
}

interface CommandItemProps {
  children: ReactNode;
  onSelect?: () => void;
  className?: string;
}

export const Command = ({ children }: CommandProps) => {
  return <div className="command">{children}</div>;
};

export const CommandGroup = ({ children }: CommandProps) => {
  return <div className="command-group">{children}</div>;
};

export const CommandInput = ({ ...props }) => {
  return <input className="command-input" {...props} />;
};

export const CommandItem = ({ children, onSelect, className }: CommandItemProps) => {
  return (
    <div
      className={`command-item ${className}`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export const CommandEmpty = ({ children }: CommandProps) => {
  return (
    <div className="command-empty">{children}</div>
  );
};