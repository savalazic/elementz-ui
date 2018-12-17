export const getButtonColor = ({ type, theme }: { type: any; theme: any }) =>
  type ? theme[type] : theme.default;
