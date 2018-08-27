const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify').uglify
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')

export default [

    {
        input: 'index.js',
        plugins: rollupPlugins(),
        external: ['lodash', '@jeoga/util'],
        output: {
            file: './dist/cjs/jgoption.development.js',
            format: 'cjs',
            sourcemap: true,
            globals: {
                'express': 'express',
                '@jeoga/util': 'Util'
            }
        }
    },

    {
        input: 'index.js',
        plugins: [ ...rollupPlugins(), uglify({})],
        external: ['lodash', '@jeoga/util'],
        output: {
            file: './dist/cjs/jgoption.production.min.js',
            format: 'cjs',
            globals: {
                'express': 'express',
                '@jeoga/util': 'Util'
            }
        }
    },

    // {
    //     input: 'src/assets/index.js',
    //     output: {
    //         file: './dist/css/jgoption.min.css',
    //         format: 'es'
    //     },
    //     plugins: [
    //         postcss({
    //             extract: true,
    //             sourceMap: true,
    //             minimize: {
    //                 discardComments: {removeAll: true}}
    //         })
    //     ]
    // }
];

function rollupPlugins() {
    return [
        resolve(),
        babel({
            babelrc: false,
            exclude: './node_modules/**', // only transpile our source code
            presets: ["es2015-rollup", 'stage-0'],
            plugins: [
                [
                    "transform-runtime", {
                        "helpers": false,
                        "polyfill": false,
                        "regenerator": true,
                        "moduleName": "babel-runtime"
                    }
                ],
                "transform-decorators-legacy",
                "transform-object-rest-spread", 
                "transform-do-expressions",
                'external-helpers'
            ],
            // externalHelpers: true,
            runtimeHelpers: true
        }),
        commonjs()
    ];
}