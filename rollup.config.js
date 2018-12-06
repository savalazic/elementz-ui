import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const dev = 'development';
const prod = 'production';
const env =
  process.env.NODE_ENV === prod || process.env.NODE_ENV === dev
    ? process.env.NODE_ENV
    : dev;

const config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      externalHelpers: true,
    }),
    typescript(),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};

if (env === 'production') {
  config.plugins.push(terser());
}

export default config;
