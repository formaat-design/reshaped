## Arcade - Create React App starter

This is a starter example for [Arcade](https://arcade.design) using Create React App.

### Manual installation steps

If you don't want to just copy this example, but rather install it manually, it can be done in a following way:

1. Create a new React application using `npx create-react-app my-app`. Use `--template typescript` if you plan using Typescript.
2. Add Arcade to the dependencies. For example, [here](https://github.com/arcade-design/community/blob/master/examples/cra-starter/package.json#L6) we use it from an package in the file system.
3. Add Arcade component to your page. You can use [App.tsx](https://github.com/arcade-design/community/blob/master/examples/cra-starter/src/App.tsx) as an example starting page.
4. Run `yarn start` to start the application.

### Additional information

This will get you going for a simple setup with the default loaders provided by Create React App. If you also want to use custom media queries provided by Arcade in you product CSS code - you can use a tool like [Craco](https://github.com/gsoft-inc/craco) that lets you customize your postcss.config.js and include plugins provided by Arcade there.
