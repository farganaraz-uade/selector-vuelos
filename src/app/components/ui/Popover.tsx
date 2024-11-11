import React, { ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';

interface PopoverProps {
  children: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  asChild?: boolean;
}

export const Popover = ({ children, open, onOpenChange }: PopoverProps) => {
  return (
    <HeadlessPopover>
      {({ open: isOpen, close }) => (
        <>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { ...(onOpenChange ? { onOpenChange: onOpenChange ?? close } : {}) })
              : child
          )}
        </>
      )}
    </HeadlessPopover>
  );
};

export const PopoverButton = ({ children }: PopoverProps) => {
  return (
    <HeadlessPopover.Button>
      {children}
    </HeadlessPopover.Button>
  );
};

export const PopoverContent = ({ children, className }: PopoverProps) => {
  return (
    <HeadlessPopover.Panel className={className}>
      {children}
    </HeadlessPopover.Panel>
  );
};

export const PopoverTrigger = ({ children, asChild }: PopoverProps) => {
  return (
    <HeadlessPopover.Button as={asChild ? React.Fragment : 'button'}>
      {children}
    </HeadlessPopover.Button>
  );
};