import React from 'react';
import { Heading } from '@aandriamanga/getting-started.ui.heading';
import { Text } from '@aandriamanga/getting-started.ui.text';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { Button, ButtonProps } from '@aandriamanga/getting-started.ui.button';

import styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading: string;
  /**
   * text for the card
   */
  text: string;
  /**
   * command for the copy box component
   */
  command?: string;
} & ButtonProps;

export function Card({
  heading,
  command,
  text,
  link,
  children,
  importance,
}: CardProps) {
  return (
    <div className={styles.card}>
      <ExternalLink href={link}>
        <Heading element="h3" className={styles.heading}>
          {heading}
        </Heading>
        <Text className={styles.text} text={text} />
      </ExternalLink>
      {command ? (
        <CopyBox className={styles['copy-box']}>{command}</CopyBox>
      ) : null}
      <Button importance={importance}>{children}</Button>
    </div>
  );
}
