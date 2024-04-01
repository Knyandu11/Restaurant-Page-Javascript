const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

console.log('Webpack is working!');

const content = document.getElementById('content');

function createHomePage() {
    content.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>We serve delicious food with love!</p>
    `;
}

createHomePage();