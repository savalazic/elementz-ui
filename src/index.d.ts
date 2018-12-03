declare module 'elementz-ui';

declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }
}
