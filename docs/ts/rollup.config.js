import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';

export default {
  plugins: [
    // Rollup plugin to compile the ts directly in rollup
    typescript(),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
  ],
  input: 'src/app.ts',
  output: {
    dir: '../js',
    sourcemap: true,
  },
  preserveEntrySignatures: 'strict',
};