import React from 'react';
import { TwButton } from './tw-button';

export const BasicTwButton = () => {
  return (
    <TwButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20">
      Styled By Tailwind
    </TwButton>
  );
};
