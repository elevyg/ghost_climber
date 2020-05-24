const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('autoprefixer'),
    ('postcss-import': {}),
    ,
    tailwindcss('./tailwind.js'),
  ],
};
