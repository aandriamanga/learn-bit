import React from 'react';
import { Card } from './card';

export const BasicCard = () => (
  <Card
    link="https://harmony-docs.bit.dev/reference/bit-oss-server"
    heading="Self Host"
    text="lean how to self host these components"
    children="Click here"
    importance="primary"
  />
);

export const CardWithCopyBox = () => (
  <Card
    link="https://harmony-docs.bit.dev/aspects/generator"
    heading="Templates"
    text="to see a list of available templates"
    command="bit templates"
    children="Read more"
    importance="secondary"
  />
);
