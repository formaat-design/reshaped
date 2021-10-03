## Arcade - Webpack starter

This is a starter example for [Arcade](https://arcade.design) using a simple Webpack config.

### Setup

Arcade works with out-of-the-box Create React App setup by using their default PostCSS config.
However, Create React App doesn't allow PostCSS customisation.
This means that custom media plugin won't be applied to the CSS code.

That's not a problem for Arcade components since we pre-compile the media queries before publishing the package.
For the product code though, custom media queries are not available until you add PostCSS config provided by Arcade to your build.
You can achieve that by using tools like [Craco](https://github.com/gsoft-inc/craco).
