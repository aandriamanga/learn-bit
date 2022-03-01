import React, { ReactNode } from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * sets the primary or secondary color
   */
  importance?: 'primary' | 'secondary';
};

export function Button({ children, importance }: ButtonProps) {
  return (
    <button className={styles.button} data-variation={importance}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: 'Button label',
  importance: 'primary',
};
