import * as React from 'react';
import { Testable } from '../../modules';
import { StyledHeadingProps, StyledHeading } from './styled';
import { Elements, Types } from './const';

type Props = Testable &
StyledHeadingProps & {
  element: Elements;
  children?: React.ReactNode;
};

const component = (props: Props): JSX.Element => {
  const { element, type, spacingsAfter, children = <></>, dataTestId } = props;

  return (
    <StyledHeading data-testid={dataTestId} as={element as never} type={type} spacingsAfter={spacingsAfter}>
      {children}
    </StyledHeading>
  );
};

component.defaultProps = {
  element: Elements.Div,
  type: Types.PageTitle,
} as Props;

export default component;
