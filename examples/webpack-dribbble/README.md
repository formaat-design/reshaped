## Arcade - Webpack example

This is an example of [Arcade](https://arcade.design) being used to create a [dribbble.com](https://dribbble.com) homepage.

### Setup

You can use this codebase as an example of how to use Arcade together with Webpack.
Arcade is relying on vanilla CSS and a minimal set of PostCSS plugins, heavily using modern features like CSS variables for implementing dynamic styling.

This means that you won't need any runtime dependency for writing CSS in your product.
However, since we want to provide features like CSS tree-shaking, we don't ship our CSS as a single bundle with styles from all components.

NextJS is currently working on supporting that: https://github.com/vercel/next.js/discussions/27953.
Meanwhile CSS support can be provided by using `next-transpile-modules` together with `@zeit/next-css`.
