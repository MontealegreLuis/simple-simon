/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/main.js',
    dest: 'dist/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint(),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify()
    ],
};
