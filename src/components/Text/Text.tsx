import React from 'react';
import styled from 'styled-components';

const Test = styled.p`
  font-family: sans-serif;
  color: #333;
`;

export const pureFunction = (state: string) => state;
pureFunction('test');

const Text: React.SFC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <Test>{text}</Test>
    </div>
  );
};

export default Text;
