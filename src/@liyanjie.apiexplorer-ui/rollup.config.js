import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/main.aot.js',
    dest: 'build/js.js',
    sourceMap: true,
    sourceMapFile: 'build/js.js.mpa',
    format: 'iife',
    onwarn: function (warning) {
        if (warning.code === 'THIS_IS_UNDEFIND')
            return;
        console.warn(warning.message);
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            module: true
        }),
        commonjs({
            include: 'node_modules/rxjs/**'
        })
    ]
};