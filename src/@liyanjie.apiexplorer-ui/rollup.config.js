import { minify as minifyHtml } from 'html-minifier';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import rollupAngular from 'rollup-plugin-angular';
import rollupAlias from 'rollup-plugin-alias';
import rollupCleanup from 'rollup-plugin-cleanup';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupTS from 'rollup-plugin-ts';
import typescript from 'typescript';

const tsconfig = require('./tsconfig.json');

const rollupRxjs = options => ({
    resolveId: id => {
        if (id.startsWith('rxjs/')) {
            return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
        }
    }
});

const config = {
    entry: 'src/modules/main.ts',
    format: 'iife',
    dest: 'build/js.js',
    sourceMap: true,
    plugins: [
        rollupAngular({
            preprocessors: {
                template: template => minifyHtml(template, {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    removeComments: true
                }),
                style: style => (new CleanCSS()).minify(sass.renderSync({ data: scss }).css).styles
            }
        }),
        rollupTS({
            typescript: typescript,
            tsconfig: tsconfig.compilerOptions
        }),
        rollupRxjs(),
        rollupAlias({ rxjs: `${__dirname}/node_modules/rxjs-es` }),
        rollupNodeResolve({
            module: true,
            jsnext: true,
            main: true,
            browser: true
        }),
        rollupCleanup()
    ],
    external: [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/form',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic'
    ],
    globals: {
        '@angular/common': 'angular._angular_common',
        '@angular/compiler': 'angular._angular_compiler',
        '@angular/core': 'angular._angular_core',
        '@angular/forms': 'angular._angular_forms',
        '@angular/http': 'angular._angular_http',
        '@angular/platform-browser': 'angular._angular_platformBrowser',
        '@angular/platform-browser-dynamic': 'angular._angular_platformBrowserDynamic'
    }
};
export default config;