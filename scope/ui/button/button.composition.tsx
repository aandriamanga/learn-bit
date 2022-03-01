import React from 'react';
import { Button } from './button';

export const BasicButton = () => {
  return <Button>Basic</Button>;
};

export const PrimaryButton = () => {
  return <Button importance="primary">Primary</Button>;
};

export const SecondaryButton = () => {
  return <Button importance="secondary">Secondary</Button>;
};
