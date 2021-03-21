const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        plugins: [
          autoprefixer({
            grid: 'autoplace',
            supports: true,
            flexbox: true
          })
        ],
      },
    ],
  ],
};