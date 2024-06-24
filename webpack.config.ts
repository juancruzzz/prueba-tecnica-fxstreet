import path from 'path';
const __dirname = path.resolve();
export default {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/prueba-tecnica-fxstreet/',
  },
};
