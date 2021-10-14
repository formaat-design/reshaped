## Arcade - NextJS demo

This is an example of [Arcade](https://arcade.design) being used to create a social media card component.
It covers some of the layout principles Arcade follows and provides some examples for interactive components.
It doesn't go much into stucturing of your React project so all code is written in a single file, which is totally fine for the scope of this example.

You can a video demo of this codebase being written on our [homepage](https://arcade.design).

### Setup

You can use this codebase as an example of how to use Arcade together with NextJS.
Arcade is relying on vanilla CSS and a minimal set of PostCSS plugins, heavily using modern features like CSS variables for implementing dynamic styling.

This means that you won't need any runtime dependency for writing CSS in your product.
However, since we want to provide features like CSS tree-shaking, we don't ship our CSS as a single bundle with styles from all components.

NextJS is currently working on supporting that: https://github.com/vercel/next.js/discussions/27953.
Meanwhile CSS support can be provided by using `next-transpile-modules` together with `arcade-next-css` plugin that's responsible for webpack config customization.

When using multiple routes in development mode, there is also a known issue due to the css tree-shaking.
While it's in development for NextJS, there is a known workaround for development mode: https://github.com/vercel/next-plugins/issues/263#issuecomment-751485616.
Note that it works without errors for production with no workarounds required.
