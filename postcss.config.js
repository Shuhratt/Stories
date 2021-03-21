const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        plugins: [
          autoprefixer({
            browsers:['ie >= 11', 'last 4 version'],
            grid: 'autoplace',
            supports: true,
            flexbox: true
          })
        ],
        sourceMap: true
      },

    ],
  ],
};