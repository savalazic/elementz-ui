export const truncateStyles = (width: string) => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const setDimensions = (width: string, height: string) => {
  return `
    width: ${width};
    height: ${height};
  `;
};
