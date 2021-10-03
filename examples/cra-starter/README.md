## Arcade - Create React App starter

This is a starter example for [Arcade](https://arcade.design) using the default Create React Setup

### Setup

This example is relying on a Webpack config that uses multiple standard loaders.

`ts-loader` is used to compile Typescript files you would write in the project and get access to the Arcade type definitions.
In case you're not using Typescript, it can be replaced by `babel-loader`.

For styles, it's using a combination of `style-loader`, `css-loader` and `postcss-loader`.
This should be enough for the development mode.
For production mode, `style-loader` can be replaced with `mini-css-extract-plugin`.
You can find an example of it being used in the webpack.config.js comments.
