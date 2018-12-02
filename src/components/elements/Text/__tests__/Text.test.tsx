import { pureFunction } from '../Text';

describe('pureFunction', () => {
  it('should work', () => {
    expect(pureFunction('test')).toEqual('test');
  });
});

describe('test test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
