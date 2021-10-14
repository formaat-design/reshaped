## Arcade - Webpack starter

This is a starter example for [Arcade](https://arcade.design) using a simple Webpack config.

### Manual installation steps

If you don't want to just copy this example, but rather install it manually, it can be done in a following way:

1. Install Webpack and all Webpack loaders required for the library. You can find a simle dependencies example in [package.json](./package.json), but you can extend your webpack config with additional loaders if you need to.
2. Add Arcade to the dependencies. For example, [here](https://github.com/arcade-design/community/blob/master/examples/cra-starter/package.json#L6) we use it from an package in the file system.
3. Add [postcss.config.js](./postcss.config.js) file to the root folder of your project.
4. Add Arcade component to your page. You can use [App.tsx](https://github.com/arcade-design/community/blob/master/examples/cra-starter/src/App.tsx) as an example starting page.
5. Add and run `yarn start` script from [package.json](./package.json) to start the application.
