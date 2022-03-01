import React, { ReactNode } from 'react';

export type TwButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children: ReactNode;
  /**
   * some tailwind classes
   */
  className?: string;
};

export function TwButton({ children, className }: TwButtonProps) {
  return <button className={className}>{children}</button>;
}
