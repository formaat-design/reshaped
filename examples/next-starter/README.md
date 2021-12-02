## Arcade - Create React App starter

This is a starter example for [Arcade](https://arcade.design) using NextJS.

### Manual installation steps

If you don't want to just copy this example, but rather install it manually, it can be done in a following way:

1. Create a new React application using `yarn create next-app`. Use `--typescript` flag if you plan using Typescript.
2. Add Arcade to the dependencies. For example, [here](https://github.com/arcade-design/community/blob/master/examples/next-starter/package.json#L6) we use it from an package in the file system.
3. Add Arcade js and css bundles. You can use [index.tsx](https://github.com/arcade-design/community/blob/master/examples/next-starter/pages/index.tsx) as an example starting page.

```
import { Arcade, Button } from "arcade/bundle";
import "arcade/bundle.css";
```

4. Run `yarn dev` to start the application.

### Additional information

You can use this codebase as an example of how to use Arcade together with NextJS.
Arcade is relying on vanilla CSS and a minimal set of PostCSS plugins, heavily using modern features like CSS variables for implementing dynamic styling.

This means that you won't need any runtime dependency for writing CSS in your product.
However, since we want to provide features like CSS tree-shaking, we don't ship our CSS as a single bundle with styles from all components.

NextJS is currently working on supporting that: https://github.com/vercel/next.js/discussions/27953.
Meanwhile CSS support can be provided by using `next-transpile-modules` together with `arcade-next-css` plugin that's responsible for webpack config customization.

When using multiple routes in development mode, there is also a known issue due to the css tree-shaking.
While it's in development for NextJS, there is a known workaround for development mode: https://github.com/vercel/next-plugins/issues/263#issuecomment-751485616.
Note that it works without errors for production with no workarounds required.
