import React from 'react';

export interface Props {
  /** test */
  test: string;
}

export const Grid = ({ test }: Props) => {
  return (
    <div>
      <p>{test}</p>
    </div>
  );
};
