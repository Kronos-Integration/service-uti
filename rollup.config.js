import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [resolve(), commonjs()],
  external: ['kronos-service', 'uti', 'path'],
  input: pkg.module,

  output: {
    format: 'cjs',
    file: pkg.main
  }
};
