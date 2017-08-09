/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "lib": [
                "es2015",
                "dom"
            ],
            "noImplicitAny": true,
            "suppressImplicitAnyIndexErrors": true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'ts': 'npm:plugin-typescript/lib/plugin.js',
            'typescript': 'npm:typescript/lib/typescript.js',
            '@liyanjie/jslinq': 'npm:@liyanjie/jslinq/bundles/jslinq.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main-jit.ts',
                defaultExtension: 'ts',
                meta: {
                    './*.ts': {
                        loader: 'systemjs.angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);