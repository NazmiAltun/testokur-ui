import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Badge, BadgeTypes } from '.';
import { Check } from '../Icons';
import { Sizes } from '../../modules';

export const Default = (): JSX.Element => {
  const type = select('Type', Object.values(BadgeTypes), BadgeTypes.Info);
  const size = select('Size', Object.values(Sizes), Sizes.Medium);
  const children = text('Children', 'This is a badge');

  return (
    <Badge type={type} icon={<Check />} dataTestId="default" size={size}>
      <>{children}</>
    </Badge>
  );
};

export const OnlyIcon = (): JSX.Element => {
  const type = select('Type', Object.values(BadgeTypes), BadgeTypes.Info);

  return <Badge type={type} icon={<Check />} dataTestId="default" />;
};

export const OnlyText = (): JSX.Element => {
  const type = select('Type', Object.values(BadgeTypes), BadgeTypes.Info);
  const children = text('Children', 'This is a badge');

  return (
    <Badge type={type} dataTestId="default">
      <>{children}</>
    </Badge>
  );
};

export default {
  title: 'Badge',
};
