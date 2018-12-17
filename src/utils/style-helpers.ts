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

export const setAbsoluteCenter = (size: string) => {
  return `
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -${parseFloat(size.replace(/\D/g, '')) / 2}px;
    margin-left: -${parseFloat(size.replace(/\D/g, '')) / 2}px;
  `;
};

export const alignVertical = () => {
  return `
    display: flex;
    align-items: center;
    justify-content: center;
  `;
};
