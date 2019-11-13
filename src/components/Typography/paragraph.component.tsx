import React from 'react';

import styled from 'styled-components';

interface ParagraphProps {
  color?: string;
  small?: boolean;
  bold?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = styled.p<ParagraphProps>`
  color: ${props => props.color || '#777777'};
  font-size: ${props => (props.small ? '13px' : '16px')};
  font-weight: ${props => (props.bold ? 500 : 400)};
`;
