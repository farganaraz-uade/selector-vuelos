// components/ui/Calendar.tsx
import React from 'react';
import { parseISO, format } from 'date-fns';

interface CalendarProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
  mode?: 'single' | 'multiple'; // Puedes agregar más modos según tus necesidades
  initialFocus?: boolean;
  className?: string;
}

export function Calendar({ selected, onSelect, mode, initialFocus, className }: CalendarProps) {
  return (
    <input
      type="date"
      value={selected ? format(selected, 'yyyy-MM-dd') : ''}
      onChange={(e) => onSelect(parseISO(e.target.value))}
      className={`border rounded p-2 w-full ${className}`}
      autoFocus={initialFocus}
    />
  );
}