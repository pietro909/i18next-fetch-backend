import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const input = 'src/index.js';
const plugins = [
  babel({ exclude: '**/node_modules/**' }),
];

const name = 'I18nextFetchBackend';
const external = ['i18next-xhr-backend'];

export default [{
  external,
  input,
  output: { file: `dist/${pkg.name}.cjs.js`, format: 'cjs' },
  plugins,
}, {
  external,
  input,
  output: { file: `dist/${pkg.name}.esm.js`, format: 'esm' },
  plugins,
}, {
  input,
  output: { file: `dist/${pkg.name}.umd.js`, format: 'umd', name },
  plugins: [
    ...plugins,
    resolve(),
    commonjs({ include: /node_modules/ }),
  ],
}];
