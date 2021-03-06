import React from 'react';
import Props from './Props';
import Component from './component';

const Cancelled = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M11.9996 2.0004c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm4.6559 5.3327a.9.9 0 0 0-1.2728.001l-3.1006
      3.1053-.0633.0517a.4001.4001 0 0 1-.5029-.0517L8.617 7.334a.9.9 0 0 0-1.2728-.001l-.0806.0921A.9002.9002 0 0 0 7.343 8.606l3.1029
      3.1085a.4.4 0 0 1 0 .5652L7.343 15.3885a.9.9 0 0 0 1.2738 1.2718l3.099-3.1065a.4002.4002 0 0 1 .5663 0l3.1005 3.1065a.9.9 0 0 0
      1.2728.001l.0806-.0921a.9002.9002 0 0 0-.0797-1.1807l-3.1033-3.1089a.4.4 0 0 1 0-.5652l3.1033-3.1085a.9.9 0 0 0-.0009-1.2728z"
      />
    </Component>
  );
};

export default Cancelled;
