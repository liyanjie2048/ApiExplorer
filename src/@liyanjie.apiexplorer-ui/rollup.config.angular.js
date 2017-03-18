// rollup.config.vendor.js
import rollupAlias from 'rollup-plugin-alias';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupTS from 'rollup-plugin-ts';
import rollupCleanup from 'rollup-plugin-cleanup';
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
    entry: 'src/scripts/angular.ts',
    dest: 'build/angular.js',
    format: 'iife',
    moduleName: 'angular',
    plugins: [
        rollupTS({
            typescript: typescript,
            tsconfig: tsconfig.compilerOptions
        }),
        rollupRxjs(),
        rollupAlias ({ rxjs: `${__dirname}/node_modules/rxjs-es` }),
        rollupNodeResolve ({
            jsnext: true,
            main: true,
            browser: true
        }),
        rollupCleanup()
    ]
}
export default config;