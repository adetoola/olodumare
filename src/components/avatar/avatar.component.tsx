import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import { Sizes, Appearances } from './avatar.types';
import { size, borderSize, borderHelper, borderRadius } from './avatar.styles';

export interface AvatarProps {
  size?: Sizes;
  appearance?: Appearances;
  enableBorder?: boolean;
  source?: string;
  alt?: string;
  username?: string;
  initial?: boolean;
}

const Container = styled.div<{
  size?: Sizes;
  appearance?: Appearances;
  enableBorder?: boolean;
}>`
  position: relative;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  height: ${size};
  width: ${size};
  border-radius: ${borderRadius};
  border: ${borderSize};
  ${p => (p.enableBorder ? null : borderHelper)};
`;

const Img = styled.img<{
  appearance?: Appearances;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: ${borderRadius};
`;

export const Avatar: React.FC<AvatarProps> = ({
  size,
  appearance,
  enableBorder,
  source,
  alt,
  username,
  initial,
}: AvatarProps) => {
  return (
    <ThemeProvider theme={{ size }}>
      <Container
        size={size}
        appearance={appearance}
        enableBorder={enableBorder}
      >
        {initial ? (
          <span>{username}</span>
        ) : (
          <Img appearance={appearance} src={source} alt={alt} />
        )}
      </Container>
    </ThemeProvider>
  );
};

Avatar.defaultProps = {
  size: 'md' as Sizes,
  appearance: 'circle' as Appearances,
  enableBorder: false,
  username: '',
  initial: false,
};
