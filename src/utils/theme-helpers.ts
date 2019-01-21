export const get = (obj: any, ...paths: any) =>
  paths
    .join('.')
    .split('.')
    .reduce((a: any, b: any) => (a && a[b] ? a[b] : null), obj);

export const themeGet = (paths: string, fallback?: string) => (props: any) =>
  get(props.theme, paths) || fallback;
