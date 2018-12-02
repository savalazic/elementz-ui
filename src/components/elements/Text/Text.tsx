import React from 'react';
import styled from 'styled-components';

const Test = styled.p`
  color: #333;
`;

export const pureFunction = (state: string) => state;
pureFunction('test');

export interface Props {
  /** @default aa */
  /** Text description */
  text?: string;
}

export const Text = ({ text = 'aa' }: Props) => {
  return (
    <div>
      <Test>{text}</Test>
    </div>
  );
};

export default Text;
