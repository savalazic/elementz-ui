export const getButtonColor = ({ type, theme }: { type: any; theme: any }) => {
  let color = theme.default;

  if (type) {
    color = theme[type];
  }

  return color;
};
