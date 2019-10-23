import React from 'react';

export interface Props {
  color: string
  onClick?: (color: string) => void
}

export default (props: Props) => {
  const {color, onClick} = props;
  return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>
}
