declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "reshaped/postcss" {
  export = {
    config: {
      plugins: any,
    },
  };
}
