import styled from 'styled-components';
import React from 'react';
import { isUndefined } from 'testokur-utils';
import { Sizes, getSize, Colors, getColor } from '../../modules';

type StyledIconProps = {
  readonly size: Sizes;
  readonly color: Colors;
  readonly customColor?: string;
};

const IconWithoutAtrrs = styled.svg<StyledIconProps>`
  width: ${(props): string => getSize(props.theme)(props.size)};
  height: ${(props): string => getSize(props.theme)(props.size)};
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
  color: ${(props): string | undefined => (isUndefined(props.customColor) ? getColor(props.theme)(props.color) : props.customColor)};
`;

const StyledIcon = styled(({ viewBox, children, ariaHidden, ariaLabel, size, color, customColor }) => (
  <IconWithoutAtrrs
    size={size}
    color={color}
    viewBox={viewBox}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? 'true' : undefined}
    aria-label={ariaLabel}
    customColor={customColor}
  >
    {children}
  </IconWithoutAtrrs>
))``;

export default StyledIcon;
