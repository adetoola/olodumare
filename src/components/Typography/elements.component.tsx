import React from 'react';

import styled from 'styled-components';

export interface ElementProps {
  color?: string;
}
export const Small: React.FC<ElementProps> = styled.small<ElementProps>`
  color: ${props => props.color || '#777777'};
`;

export const Strong: React.FC<ElementProps> = styled.strong<ElementProps>`
  color: ${props => props.color || '#777777'};
`;
