import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** image source */
  src: string;
  /** image alternate text */
  alt: string;
  /** rounded */
  rounded?: string;
  /** circle */
  circle?: string;
  /** square */
  square?: string;
}

export interface BackgroundImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** image source */
  src: string;
  /** @default center */
  /** image position */
  backgroundPosition?: 'center' | 'top' | 'right' | 'bottom' | 'left';
  /** children */
  children: React.ReactNode;
}

const StyledImage = styled.img<ImageProps>`
  max-width: 100%;
  object-fit: cover;

  border-radius: ${props => props.circle && '50%'};
  border-radius: ${props => props.rounded};
  width: ${props => props.circle || props.square};
  height: ${props => props.circle || props.square};
`;

const StyledBackgroundImage = styled.div<BackgroundImageProps>`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Image = ({
  src,
  alt,
  rounded,
  circle,
  square,
  ...rest
}: ImageProps) => (
  <StyledImage
    src={src}
    alt={alt}
    circle={circle}
    rounded={rounded}
    square={square}
    {...rest}
  />
);

export const BackgroundImage = ({
  src,
  backgroundPosition = 'center',
  children,
  ...rest
}: BackgroundImageProps) => (
  <StyledBackgroundImage src={src} {...rest}>
    {children}
  </StyledBackgroundImage>
);
