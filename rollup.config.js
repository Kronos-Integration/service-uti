import pkg from './package.json';

export default {
  plugins: [],
  external: ['kronos-service'],
  input: pkg.module,

  output: {
    format: 'cjs',
    file: pkg.main
  }
};
