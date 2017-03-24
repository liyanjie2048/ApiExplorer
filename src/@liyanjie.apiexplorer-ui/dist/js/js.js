var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (_angular_core, _angular_platformBrowserDynamic, _angular_common, _angular_platformBrowser, _angular_http) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var AbstractControlDirective = (function () {
        function AbstractControlDirective() {
        }
        Object.defineProperty(AbstractControlDirective.prototype, "control", {
            get: function () { throw new Error('unimplemented'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            get: function () { return this.control ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            get: function () { return this.control ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
            get: function () { return this.control ? this.control.invalid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
            get: function () { return this.control ? this.control.pending : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            get: function () { return this.control ? this.control.errors : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            get: function () { return this.control ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            get: function () { return this.control ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            get: function () { return this.control ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            get: function () { return this.control ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
            get: function () { return this.control ? this.control.disabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
            get: function () { return this.control ? this.control.enabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
            get: function () { return this.control ? this.control.statusChanges : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
            get: function () { return this.control ? this.control.valueChanges : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        AbstractControlDirective.prototype.reset = function (value) {
            if (value === void 0) {
                value = undefined;
            }
            if (this.control)
                this.control.reset(value);
        };
        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
            if (path === void 0) {
                path = null;
            }
            return this.control ? this.control.hasError(errorCode, path) : false;
        };
        AbstractControlDirective.prototype.getError = function (errorCode, path) {
            if (path === void 0) {
                path = null;
            }
            return this.control ? this.control.getError(errorCode, path) : null;
        };
        return AbstractControlDirective;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ControlContainer = (function (_super) {
        __extends$1(ControlContainer, _super);
        function ControlContainer() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            globalScope = (self);
        }
        else {
            globalScope = (global);
        }
    }
    else {
        globalScope = (window);
    }
    var _global = globalScope;
    _global.assert = function assert(condition) {
    };
    function isPresent(obj) {
        return obj != null;
    }
    function isBlank(obj) {
        return obj == null;
    }
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    var root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        root = freeGlobal;
    }
    function toPromise(PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.Rx && root.Rx.config && root.Rx.config.Promise) {
                PromiseCtor = root.Rx.config.Promise;
            }
            else if (root.Promise) {
                PromiseCtor = root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        StringMapWrapper.merge = function (m1, m2) {
            var /** @type {?} */ m = {};
            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
                var k = _a[_i];
                m[k] = m1[k];
            }
            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
                var k = _c[_b];
                m[k] = m2[k];
            }
            return m;
        };
        StringMapWrapper.equals = function (m1, m2) {
            var /** @type {?} */ k1 = Object.keys(m1);
            var /** @type {?} */ k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
                var /** @type {?} */ key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        ListWrapper.findLast = function (arr, condition) {
            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
                if (condition(arr[i])) {
                    return arr[i];
                }
            }
            return null;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
                var /** @type {?} */ index = list.indexOf(items[i]);
                if (index > -1) {
                    list.splice(index, 1);
                }
            }
        };
        ListWrapper.remove = function (list, el) {
            var /** @type {?} */ index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.flatten = function (list) {
            return list.reduce(function (flat, item) {
                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
                return ((flat)).concat(flatItem);
            }, []);
        };
        return ListWrapper;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var isPromise = _angular_core.__core_private__.isPromise;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function isEmptyInputValue(value) {
        return value == null || typeof value === 'string' && value.length === 0;
    }
    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
    var Validators = (function () {
        function Validators() {
        }
        Validators.required = function (control) {
            return isEmptyInputValue(control.value) ? { 'required': true } : null;
        };
        Validators.requiredTrue = function (control) {
            return control.value === true ? null : { 'required': true };
        };
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null;
                }
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                    null;
            };
        };
        Validators.maxLength = function (maxLength) {
            return function (control) {
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                    null;
            };
        };
        Validators.pattern = function (pattern) {
            if (!pattern)
                return Validators.nullValidator;
            var /** @type {?} */ regex;
            var /** @type {?} */ regexStr;
            if (typeof pattern === 'string') {
                regexStr = "^" + pattern + "$";
                regex = new RegExp(regexStr);
            }
            else {
                regexStr = pattern.toString();
                regex = pattern;
            }
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null;
                }
                var /** @type {?} */ value = control.value;
                return regex.test(value) ? null :
                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
            };
        };
        Validators.nullValidator = function (c) { return null; };
        Validators.compose = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        Validators.composeAsync = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return Promise.all(promises).then(_mergeErrors);
            };
        };
        return Validators;
    }());
    function _convertToPromise(obj) {
        return isPromise(obj) ? obj : toPromise.call(obj);
    }
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _mergeErrors(arrayOfErrors) {
        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true,
    };
    var CheckboxControlValueAccessor = (function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        };
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        CheckboxControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                        providers: [CHECKBOX_VALUE_ACCESSOR]
                    },] },
        ];
        CheckboxControlValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return CheckboxControlValueAccessor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    var DefaultValueAccessor = (function () {
        function DefaultValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        DefaultValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [DEFAULT_VALUE_ACCESSOR]
                    },] },
        ];
        DefaultValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return DefaultValueAccessor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function normalizeValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }
    function normalizeAsyncValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    var NumberValueAccessor = (function () {
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        NumberValueAccessor.prototype.writeValue = function (value) {
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        NumberValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [NUMBER_VALUE_ACCESSOR]
                    },] },
        ];
        NumberValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return NumberValueAccessor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    function unimplemented() {
        throw new Error('unimplemented');
    }
    var NgControl = (function (_super) {
        __extends$2(NgControl, _super);
        function NgControl() {
            _super.apply(this, arguments);
            this._parent = null;
            this.name = null;
            this.valueAccessor = null;
            this._rawValidators = [];
            this._rawAsyncValidators = [];
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        NgControl.prototype.viewToModelUpdate = function (newValue) { };
        return NgControl;
    }(AbstractControlDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    var RadioControlRegistry = (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        RadioControlRegistry.prototype.remove = function (accessor) {
            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
                if (this._accessors[i][1] === accessor) {
                    this._accessors.splice(i, 1);
                    return;
                }
            }
        };
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        };
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control)
                return false;
            return controlPair[0]._parent === accessor._control._parent &&
                controlPair[1].name === accessor.name;
        };
        RadioControlRegistry.decorators = [
            { type: _angular_core.Injectable },
        ];
        RadioControlRegistry.ctorParameters = function () { return []; };
        return RadioControlRegistry;
    }());
    var RadioControlValueAccessor = (function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        };
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value === this.value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
        };
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(_this.value);
                _this._registry.select(_this);
            };
        };
        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RadioControlValueAccessor.prototype._checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName)
                this.name = this.formControlName;
        };
        RadioControlValueAccessor.prototype._throwNameError = function () {
            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        };
        RadioControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                        providers: [RADIO_VALUE_ACCESSOR]
                    },] },
        ];
        RadioControlValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
                { type: RadioControlRegistry, },
                { type: _angular_core.Injector, },
            ];
        };
        RadioControlValueAccessor.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'formControlName': [{ type: _angular_core.Input },],
            'value': [{ type: _angular_core.Input },],
        };
        return RadioControlValueAccessor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
        multi: true
    };
    var RangeValueAccessor = (function () {
        function RangeValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        RangeValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        };
        RangeValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RangeValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [RANGE_VALUE_ACCESSOR]
                    },] },
        ];
        RangeValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return RangeValueAccessor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    function _buildValueString(id, value) {
        if (id == null)
            return "" + value;
        if (!isPrimitive(value))
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    var SelectControlValueAccessor = (function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        SelectControlValueAccessor.prototype.writeValue = function (value) {
            this.value = value;
            var /** @type {?} */ valueString = _buildValueString(this._getOptionId(value), value);
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
        };
        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (valueString) {
                _this.value = valueString;
                fn(_this._getOptionValue(valueString));
            };
        };
        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
        SelectControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id), value))
                    return id;
            }
            return null;
        };
        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        };
        SelectControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [SELECT_VALUE_ACCESSOR]
                    },] },
        ];
        SelectControlValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return SelectControlValueAccessor;
    }());
    var NgSelectOption = (function () {
        function NgSelectOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select)
                this.id = this._select._registerOption();
        }
        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectOption.prototype, "value", {
            set: function (value) {
                this._setElementValue(value);
                if (this._select)
                    this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        NgSelectOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        NgSelectOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        NgSelectOption.ctorParameters = function () {
            return [
                { type: _angular_core.ElementRef, },
                { type: _angular_core.Renderer, },
                { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
            ];
        };
        NgSelectOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectOption;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
        multi: true
    };
    function _buildValueString$1(id, value) {
        if (id == null)
            return "" + value;
        if (typeof value === 'string')
            value = "'" + value + "'";
        if (!isPrimitive(value))
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    var SelectMultipleControlValueAccessor = (function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._optionMap = new Map();
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
            var _this = this;
            this.value = value;
            var /** @type {?} */ optionSelectedStateSetter;
            if (Array.isArray(value)) {
                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
            }
            else {
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
            }
            this._optionMap.forEach(optionSelectedStateSetter);
        };
        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (_) {
                var /** @type {?} */ selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var /** @type {?} */ options = _.selectedOptions;
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
                else {
                    var /** @type {?} */ options = (_.options);
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        if (opt.selected) {
                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    }
                }
                _this.value = selected;
                fn(selected);
            };
        };
        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
            var /** @type {?} */ id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        };
        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id)._value, value))
                    return id;
            }
            return null;
        };
        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId$1(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        };
        SelectMultipleControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                    },] },
        ];
        SelectMultipleControlValueAccessor.ctorParameters = function () {
            return [
                { type: _angular_core.Renderer, },
                { type: _angular_core.ElementRef, },
            ];
        };
        return SelectMultipleControlValueAccessor;
    }());
    var NgSelectMultipleOption = (function () {
        function NgSelectMultipleOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) {
                this.id = this._select._registerOption(this);
            }
        }
        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
            set: function (value) {
                if (this._select) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                }
                else {
                    this._setElementValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        NgSelectMultipleOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        NgSelectMultipleOption.prototype._setSelected = function (selected) {
            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
        };
        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectMultipleOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        NgSelectMultipleOption.ctorParameters = function () {
            return [
                { type: _angular_core.ElementRef, },
                { type: _angular_core.Renderer, },
                { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
            ];
        };
        NgSelectMultipleOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectMultipleOption;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function controlPath(name, parent) {
        return parent.path.concat([name]);
    }
    function setUpControl(control, dir) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        dir.valueAccessor.registerOnChange(function (newValue) {
            dir.viewToModelUpdate(newValue);
            control.markAsDirty();
            control.setValue(newValue, { emitModelToViewChange: false });
        });
        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
        control.registerOnChange(function (newValue, emitModelEvent) {
            dir.valueAccessor.writeValue(newValue);
            if (emitModelEvent)
                dir.viewToModelUpdate(newValue);
        });
        if (dir.valueAccessor.setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
        }
        dir._rawValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
    }
    function cleanUpControl(control, dir) {
        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        if (control)
            control._clearChangeFns();
    }
    function setUpFormContainer(control, dir) {
        if (isBlank(control))
            _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    function _throwError(dir, message) {
        var /** @type {?} */ messageEnd;
        if (dir.path.length > 1) {
            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
        }
        else if (dir.path[0]) {
            messageEnd = "name: '" + dir.path + "'";
        }
        else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + " " + messageEnd);
    }
    function composeValidators(validators) {
        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    function composeAsyncValidators(validators) {
        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
            null;
    }
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model'))
            return false;
        var /** @type {?} */ change = changes['model'];
        if (change.isFirstChange())
            return true;
        return !looseIdentical(viewModel, change.currentValue);
    }
    var BUILTIN_ACCESSORS = [
        CheckboxControlValueAccessor,
        RangeValueAccessor,
        NumberValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
    ];
    function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
    }
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors)
            return null;
        var /** @type {?} */ defaultAccessor;
        var /** @type {?} */ builtinAccessor;
        var /** @type {?} */ customAccessor;
        valueAccessors.forEach(function (v) {
            if (v.constructor === DefaultValueAccessor) {
                defaultAccessor = v;
            }
            else if (isBuiltInAccessor(v)) {
                if (builtinAccessor)
                    _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            }
            else {
                if (customAccessor)
                    _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (customAccessor)
            return customAccessor;
        if (builtinAccessor)
            return builtinAccessor;
        if (defaultAccessor)
            return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AbstractFormGroupDirective = (function (_super) {
        __extends(AbstractFormGroupDirective, _super);
        function AbstractFormGroupDirective() {
            _super.apply(this, arguments);
        }
        AbstractFormGroupDirective.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormGroup(this);
        };
        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        };
        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
            get: function () { return this.formDirective.getFormGroup(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        AbstractFormGroupDirective.prototype._checkParentType = function () { };
        return AbstractFormGroupDirective;
    }(ControlContainer));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$3 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AbstractControlStatus = (function () {
        function AbstractControlStatus(cd) {
            this._cd = cd;
        }
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
            get: function () { return this._cd.control ? this._cd.control.touched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
            get: function () { return this._cd.control ? this._cd.control.valid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
            get: function () { return this._cd.control ? this._cd.control.pending : false; },
            enumerable: true,
            configurable: true
        });
        return AbstractControlStatus;
    }());
    var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending',
    };
    var NgControlStatus = (function (_super) {
        __extends$3(NgControlStatus, _super);
        function NgControlStatus(cd) {
            _super.call(this, cd);
        }
        NgControlStatus.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
        ];
        NgControlStatus.ctorParameters = function () {
            return [
                { type: NgControl, decorators: [{ type: _angular_core.Self },] },
            ];
        };
        return NgControlStatus;
    }(AbstractControlStatus));
    var NgControlStatusGroup = (function (_super) {
        __extends$3(NgControlStatusGroup, _super);
        function NgControlStatusGroup(cd) {
            _super.call(this, cd);
        }
        NgControlStatusGroup.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                        host: ngControlStatusHost
                    },] },
        ];
        NgControlStatusGroup.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
            ];
        };
        return NgControlStatusGroup;
    }(AbstractControlStatus));
    function isFunction(x) {
        return typeof x === 'function';
    }
    var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    var errorObject = { e: {} };
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject.e = e;
            return errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    var UnsubscriptionError = (function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            var _this = _super.call(this) || this;
            _this.errors = errors;
            var err = Error.call(_this, errors ?
                errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '');
            _this.name = err.name = 'UnsubscriptionError';
            _this.stack = err.stack;
            _this.message = err.message;
            return _this;
        }
        return UnsubscriptionError;
    }(Error));
    var Subscription = (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            this.closed = true;
            var _e = this, _unsubscribe = _e._unsubscribe, _subscriptions = _e._subscriptions;
            this._subscriptions = null;
            if (isFunction(_unsubscribe)) {
                var trial = tryCatch(_unsubscribe).call(this);
                if (trial === errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject.e);
                }
            }
            if (isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        var trial = tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject.e;
                            if (err instanceof UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            if (!teardown || (teardown === Subscription.EMPTY)) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var sub = teardown;
            switch (typeof teardown) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
                        break;
                    }
                    else if (this.closed) {
                        sub.unsubscribe();
                    }
                    else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        Subscription.prototype.remove = function (subscription) {
            if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        return Subscription;
    }());
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) { throw err; },
        complete: function () { }
    };
    var Symbol$1 = root.Symbol;
    var $$rxSubscriber = (typeof Symbol$1 === 'function' && typeof Symbol$1.for === 'function') ?
        Symbol$1.for('rxSubscriber') : '@@rxSubscriber';
    var Subscriber = (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.destination = destinationOrNext;
                            _this.destination.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[$$rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parent = _parent;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                }
                else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[$$rxSubscriber]) {
                return nextOrObserver[$$rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber();
        }
        return new Subscriber(nextOrObserver, error, complete);
    }
    function getSymbolObservable(context) {
        var $$observable;
        var Symbol = context.Symbol;
        if (typeof Symbol === 'function') {
            if (Symbol.observable) {
                $$observable = Symbol.observable;
            }
            else {
                $$observable = Symbol('observable');
                Symbol.observable = $$observable;
            }
        }
        else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    var $$observable = getSymbolObservable(root);
    var Observable = (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this);
            }
            else {
                sink.add(this._subscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root.Rx && root.Rx.config && root.Rx.config.Promise) {
                    PromiseCtor = root.Rx.config.Promise;
                }
                else if (root.Promise) {
                    PromiseCtor = root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        try {
                            next(value);
                        }
                        catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    }
                    else {
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        Observable.prototype[$$observable] = function () {
            return this;
        };
        return Observable;
    }());
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    var ObjectUnsubscribedError = (function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var _this = this;
            var err = _this = _super.call(this, 'object unsubscribed') || this;
            _this.name = err.name = 'ObjectUnsubscribedError';
            _this.stack = err.stack;
            _this.message = err.message;
            return _this;
        }
        return ObjectUnsubscribedError;
    }(Error));
    var SubjectSubscription = (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));
    var SubjectSubscriber = (function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber));
    var Subject = (function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[$$rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        return Subject;
    }(Observable));
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    var AnonymousSubject = (function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$5 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var EventEmitter = (function (_super) {
        __extends$5(EventEmitter, _super);
        function EventEmitter(isAsync) {
            if (isAsync === void 0) {
                isAsync = false;
            }
            _super.call(this);
            this.__isAsync = isAsync;
        }
        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
            var /** @type {?} */ schedulerFn;
            var /** @type {?} */ errorFn = function (err) { return null; };
            var /** @type {?} */ completeFn = function () { return null; };
            if (generatorOrNext && typeof generatorOrNext === 'object') {
                schedulerFn = this.__isAsync ? function (value) {
                    setTimeout(function () { return generatorOrNext.next(value); });
                } : function (value) { generatorOrNext.next(value); };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                        function (err) { generatorOrNext.error(err); };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                        function () { generatorOrNext.complete(); };
                }
            }
            else {
                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
                    function (value) { generatorOrNext(value); };
                if (error) {
                    errorFn =
                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
                }
                if (complete) {
                    completeFn =
                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
                }
            }
            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
        };
        return EventEmitter;
    }(Subject));
    var PromiseObservable = (function (_super) {
        __extends(PromiseObservable, _super);
        function PromiseObservable(promise, scheduler) {
            var _this = _super.call(this) || this;
            _this.promise = promise;
            _this.scheduler = scheduler;
            return _this;
        }
        PromiseObservable.create = function (promise, scheduler) {
            return new PromiseObservable(promise, scheduler);
        };
        PromiseObservable.prototype._subscribe = function (subscriber) {
            var _this = this;
            var promise = this.promise;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        subscriber.next(this.value);
                        subscriber.complete();
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.next(value);
                            subscriber.complete();
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.error(err);
                        }
                    })
                        .then(null, function (err) {
                        root.setTimeout(function () { throw err; });
                    });
                }
            }
            else {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                        }
                    })
                        .then(null, function (err) {
                        root.setTimeout(function () { throw err; });
                    });
                }
            }
        };
        return PromiseObservable;
    }(Observable));
    function dispatchNext(arg) {
        var value = arg.value, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.error(err);
        }
    }
    var fromPromise = PromiseObservable.create;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$6 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var VALID = 'VALID';
    var INVALID = 'INVALID';
    var PENDING = 'PENDING';
    var DISABLED = 'DISABLED';
    function _find(control, path, delimiter) {
        if (path == null)
            return null;
        if (!(path instanceof Array)) {
            path = ((path)).split(delimiter);
        }
        if (path instanceof Array && (path.length === 0))
            return null;
        return ((path)).reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return v.controls[name] || null;
            }
            if (v instanceof FormArray) {
                return v.at(/** @type {?} */ (name)) || null;
            }
            return null;
        }, control);
    }
    function toObservable(r) {
        return isPromise(r) ? fromPromise(r) : r;
    }
    function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator;
    }
    function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
    }
    var AbstractControl = (function () {
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            this._onCollectionChange = function () { };
            this._pristine = true;
            this._touched = false;
            this._onDisabledChange = [];
        }
        Object.defineProperty(AbstractControl.prototype, "value", {
            get: function () { return this._value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "parent", {
            get: function () { return this._parent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "status", {
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            get: function () { return this._status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "invalid", {
            get: function () { return this._status === INVALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            get: function () { return this._status == PENDING; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "disabled", {
            get: function () { return this._status === DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "enabled", {
            get: function () { return this._status !== DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "errors", {
            get: function () { return this._errors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pristine", {
            get: function () { return this._pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "touched", {
            get: function () { return this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            get: function () { return !this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
            get: function () { return this._valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
            get: function () { return this._statusChanges; },
            enumerable: true,
            configurable: true
        });
        AbstractControl.prototype.setValidators = function (newValidator) {
            this.validator = coerceToValidator(newValidator);
        };
        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        };
        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
        AbstractControl.prototype.markAsTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = true;
            if (this._parent && !onlySelf) {
                this._parent.markAsTouched({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.markAsUntouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = false;
            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.markAsDirty = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = false;
            if (this._parent && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.markAsPristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = true;
            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.markAsPending = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._status = PENDING;
            if (this._parent && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.disable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._status = DISABLED;
            this._errors = null;
            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
            this._updateValue();
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
        };
        AbstractControl.prototype.enable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._status = VALID;
            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
        };
        AbstractControl.prototype._updateAncestors = function (onlySelf) {
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity();
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        };
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        AbstractControl.prototype.setValue = function (value, options) { };
        AbstractControl.prototype.patchValue = function (value, options) { };
        AbstractControl.prototype.reset = function (value, options) { };
        AbstractControl.prototype.updateValueAndValidity = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._errors = this._runValidator();
                this._status = this._calculateStatus();
                if (this._status === VALID || this._status === PENDING) {
                    this._runAsyncValidator(emitEvent);
                }
            }
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        };
        AbstractControl.prototype._updateTreeValidity = function (_a) {
            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        };
        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
        AbstractControl.prototype._runValidator = function () {
            return this.validator ? this.validator(this) : null;
        };
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (this.asyncValidator) {
                this._status = PENDING;
                this._cancelExistingSubscription();
                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription =
                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
            }
        };
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
            }
        };
        AbstractControl.prototype.setErrors = function (errors, _a) {
            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
            this._errors = errors;
            this._updateControlsErrors(emitEvent !== false);
        };
        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
        AbstractControl.prototype.getError = function (errorCode, path) {
            if (path === void 0) {
                path = null;
            }
            var /** @type {?} */ control = path ? this.get(path) : this;
            return control && control._errors ? control._errors[errorCode] : null;
        };
        AbstractControl.prototype.hasError = function (errorCode, path) {
            if (path === void 0) {
                path = null;
            }
            return !!this.getError(errorCode, path);
        };
        Object.defineProperty(AbstractControl.prototype, "root", {
            get: function () {
                var /** @type {?} */ x = this;
                while (x._parent) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                this._statusChanges.emit(this._status);
            }
            if (this._parent) {
                this._parent._updateControlsErrors(emitEvent);
            }
        };
        AbstractControl.prototype._initObservables = function () {
            this._valueChanges = new EventEmitter();
            this._statusChanges = new EventEmitter();
        };
        AbstractControl.prototype._calculateStatus = function () {
            if (this._allControlsDisabled())
                return DISABLED;
            if (this._errors)
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        AbstractControl.prototype._updateValue = function () { };
        AbstractControl.prototype._forEachChild = function (cb) { };
        AbstractControl.prototype._anyControls = function (condition) { };
        AbstractControl.prototype._allControlsDisabled = function () { };
        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
            return this._anyControls(function (control) { return control.status === status; });
        };
        AbstractControl.prototype._anyControlsDirty = function () {
            return this._anyControls(function (control) { return control.dirty; });
        };
        AbstractControl.prototype._anyControlsTouched = function () {
            return this._anyControls(function (control) { return control.touched; });
        };
        AbstractControl.prototype._updatePristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = !this._anyControlsDirty();
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype._updateTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = this._anyControlsTouched();
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype._isBoxedValue = function (formState) {
            return typeof formState === 'object' && formState !== null &&
                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        };
        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
        return AbstractControl;
    }());
    var FormControl = (function (_super) {
        __extends$6(FormControl, _super);
        function FormControl(formState, validator, asyncValidator) {
            if (formState === void 0) {
                formState = null;
            }
            if (validator === void 0) {
                validator = null;
            }
            if (asyncValidator === void 0) {
                asyncValidator = null;
            }
            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
            this._onChange = [];
            this._applyFormState(formState);
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            this._initObservables();
        }
        FormControl.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
            this._value = value;
            if (this._onChange.length && emitModelToViewChange !== false) {
                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormControl.prototype.patchValue = function (value, options) {
            if (options === void 0) {
                options = {};
            }
            this.setValue(value, options);
        };
        FormControl.prototype.reset = function (formState, _a) {
            if (formState === void 0) {
                formState = null;
            }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._applyFormState(formState);
            this.markAsPristine({ onlySelf: onlySelf });
            this.markAsUntouched({ onlySelf: onlySelf });
            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormControl.prototype._updateValue = function () { };
        FormControl.prototype._anyControls = function (condition) { return false; };
        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
        FormControl.prototype._clearChangeFns = function () {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () { };
        };
        FormControl.prototype.registerOnDisabledChange = function (fn) {
            this._onDisabledChange.push(fn);
        };
        FormControl.prototype._forEachChild = function (cb) { };
        FormControl.prototype._applyFormState = function (formState) {
            if (this._isBoxedValue(formState)) {
                this._value = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                    this.enable({ onlySelf: true, emitEvent: false });
            }
            else {
                this._value = formState;
            }
        };
        return FormControl;
    }(AbstractControl));
    var FormGroup = (function (_super) {
        __extends$6(FormGroup, _super);
        function FormGroup(controls, validator, asyncValidator) {
            if (validator === void 0) {
                validator = null;
            }
            if (asyncValidator === void 0) {
                asyncValidator = null;
            }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        FormGroup.prototype.registerControl = function (name, control) {
            if (this.controls[name])
                return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        };
        FormGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormGroup.prototype.removeControl = function (name) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormGroup.prototype.setControl = function (name, control) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            if (control)
                this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormGroup.prototype.contains = function (controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        };
        FormGroup.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this._throwIfControlMissing(name);
                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormGroup.prototype.patchValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            Object.keys(value).forEach(function (name) {
                if (_this.controls[name]) {
                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormGroup.prototype.reset = function (value, _a) {
            if (value === void 0) {
                value = {};
            }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        FormGroup.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control.value;
                return acc;
            });
        };
        FormGroup.prototype._throwIfControlMissing = function (name) {
            if (!Object.keys(this.controls).length) {
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.controls[name]) {
                throw new Error("Cannot find form control with name: " + name + ".");
            }
        };
        FormGroup.prototype._forEachChild = function (cb) {
            var _this = this;
            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
        };
        FormGroup.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) {
                control.setParent(_this);
                control._registerOnCollectionChange(_this._onCollectionChange);
            });
        };
        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
        FormGroup.prototype._anyControls = function (condition) {
            var _this = this;
            var /** @type {?} */ res = false;
            this._forEachChild(function (control, name) {
                res = res || (_this.contains(name) && condition(control));
            });
            return res;
        };
        FormGroup.prototype._reduceValue = function () {
            var _this = this;
            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        };
        FormGroup.prototype._reduceChildren = function (initValue, fn) {
            var /** @type {?} */ res = initValue;
            this._forEachChild(function (control, name) { res = fn(res, control, name); });
            return res;
        };
        FormGroup.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                var controlName = _a[_i];
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
            return Object.keys(this.controls).length > 0 || this.disabled;
        };
        FormGroup.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
                }
            });
        };
        return FormGroup;
    }(AbstractControl));
    var FormArray = (function (_super) {
        __extends$6(FormArray, _super);
        function FormArray(controls, validator, asyncValidator) {
            if (validator === void 0) {
                validator = null;
            }
            if (asyncValidator === void 0) {
                asyncValidator = null;
            }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        FormArray.prototype.at = function (index) { return this.controls[index]; };
        FormArray.prototype.push = function (control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormArray.prototype.insert = function (index, control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormArray.prototype.removeAt = function (index) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        FormArray.prototype.setControl = function (index, control) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            if (control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        Object.defineProperty(FormArray.prototype, "length", {
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        FormArray.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this._throwIfControlMissing(index);
                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormArray.prototype.patchValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            value.forEach(function (newValue, index) {
                if (_this.at(index)) {
                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        FormArray.prototype.reset = function (value, _a) {
            if (value === void 0) {
                value = [];
            }
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
        FormArray.prototype._throwIfControlMissing = function (index) {
            if (!this.controls.length) {
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.at(index)) {
                throw new Error("Cannot find form control at index " + index);
            }
        };
        FormArray.prototype._forEachChild = function (cb) {
            this.controls.forEach(function (control, index) { cb(control, index); });
        };
        FormArray.prototype._updateValue = function () {
            var _this = this;
            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
        };
        FormArray.prototype._anyControls = function (condition) {
            return this.controls.some(function (control) { return control.enabled && condition(control); });
        };
        FormArray.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) { return _this._registerControl(control); });
        };
        FormArray.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error("Must supply a value for form control at index: " + i + ".");
                }
            });
        };
        FormArray.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.enabled)
                    return false;
            }
            return this.controls.length > 0 || this.disabled;
        };
        FormArray.prototype._registerControl = function (control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        };
        return FormArray;
    }(AbstractControl));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$4 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgForm; })
    };
    var resolvedPromise = Promise.resolve(null);
    var NgForm = (function (_super) {
        __extends$4(NgForm, _super);
        function NgForm(validators, asyncValidators) {
            _super.call(this);
            this._submitted = false;
            this.ngSubmit = new EventEmitter();
            this.form =
                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        }
        Object.defineProperty(NgForm.prototype, "submitted", {
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "controls", {
            get: function () { return this.form.controls; },
            enumerable: true,
            configurable: true
        });
        NgForm.prototype.addControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                dir._control = (container.registerControl(dir.name, dir.control));
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        };
        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        NgForm.prototype.removeControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        NgForm.prototype.addFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                var /** @type {?} */ group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        };
        NgForm.prototype.removeFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        NgForm.prototype.updateModel = function (dir, value) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
                ctrl.setValue(value);
            });
        };
        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
        NgForm.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        NgForm.prototype.onReset = function () { this.resetForm(); };
        NgForm.prototype.resetForm = function (value) {
            if (value === void 0) {
                value = undefined;
            }
            this.form.reset(value);
            this._submitted = false;
        };
        NgForm.prototype._findContainer = function (path) {
            path.pop();
            return path.length ? (this.form.get(path)) : this.form;
        };
        NgForm.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                        providers: [formDirectiveProvider],
                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                        outputs: ['ngSubmit'],
                        exportAs: 'ngForm'
                    },] },
        ];
        NgForm.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            ];
        };
        return NgForm;
    }(ControlContainer));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var TemplateDrivenErrors = (function () {
        function TemplateDrivenErrors() {
        }
        TemplateDrivenErrors.modelParentException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
        };
        TemplateDrivenErrors.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        TemplateDrivenErrors.missingNameException = function () {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        };
        TemplateDrivenErrors.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        return TemplateDrivenErrors;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$8 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
    };
    var NgModelGroup = (function (_super) {
        __extends$8(NgModelGroup, _super);
        function NgModelGroup(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        NgModelGroup.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        };
        NgModelGroup.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
        ];
        NgModelGroup.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            ];
        };
        NgModelGroup.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
        };
        return NgModelGroup;
    }(AbstractFormGroupDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$7 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formControlBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return NgModel; })
    };
    var resolvedPromise$1 = Promise.resolve(null);
    var NgModel = (function (_super) {
        __extends$7(NgModel, _super);
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this._control = new FormControl();
            this._registered = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        NgModel.prototype.ngOnChanges = function (changes) {
            this._checkForErrors();
            if (!this._registered)
                this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        };
        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
        Object.defineProperty(NgModel.prototype, "control", {
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "path", {
            get: function () {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        NgModel.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        NgModel.prototype._setUpControl = function () {
            this._isStandalone() ? this._setUpStandalone() :
                this.formDirective.addControl(this);
            this._registered = true;
        };
        NgModel.prototype._isStandalone = function () {
            return !this._parent || (this.options && this.options.standalone);
        };
        NgModel.prototype._setUpStandalone = function () {
            setUpControl(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        };
        NgModel.prototype._checkForErrors = function () {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        };
        NgModel.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        };
        NgModel.prototype._checkName = function () {
            if (this.options && this.options.name)
                this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        };
        NgModel.prototype._updateValue = function (value) {
            var _this = this;
            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
        };
        NgModel.prototype._updateDisabled = function (changes) {
            var _this = this;
            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this.control.disabled) {
                    _this.control.disable();
                }
                else if (!isDisabled && _this.control.disabled) {
                    _this.control.enable();
                }
            });
        };
        NgModel.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[ngModel]:not([formControlName]):not([formControl])',
                        providers: [formControlBinding],
                        exportAs: 'ngModel'
                    },] },
        ];
        NgModel.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
            ];
        };
        NgModel.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
        };
        return NgModel;
    }(NgControl));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ReactiveErrors = (function () {
        function ReactiveErrors() {
        }
        ReactiveErrors.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
        };
        ReactiveErrors.ngModelGroupException = function () {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
        };
        ReactiveErrors.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
        };
        ReactiveErrors.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
        };
        ReactiveErrors.arrayParentException = function () {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
        };
        ReactiveErrors.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        };
        return ReactiveErrors;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$9 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formControlBinding$1 = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
    };
    var FormControlDirective = (function (_super) {
        __extends$9(FormControlDirective, _super);
        function FormControlDirective(validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this.update = new EventEmitter();
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.ngOnChanges = function (changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        };
        Object.defineProperty(FormControlDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        FormControlDirective.prototype._isControlChanged = function (changes) {
            return changes.hasOwnProperty('form');
        };
        FormControlDirective.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
        ];
        FormControlDirective.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
            ];
        };
        FormControlDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlDirective;
    }(NgControl));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$11 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
    };
    var FormGroupDirective = (function (_super) {
        __extends$11(FormGroupDirective, _super);
        function FormGroupDirective(_validators, _asyncValidators) {
            _super.call(this);
            this._validators = _validators;
            this._asyncValidators = _asyncValidators;
            this._submitted = false;
            this.directives = [];
            this.form = null;
            this.ngSubmit = new EventEmitter();
        }
        FormGroupDirective.prototype.ngOnChanges = function (changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        };
        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        FormGroupDirective.prototype.addControl = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        };
        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
        FormGroupDirective.prototype.addFormGroup = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        FormGroupDirective.prototype.addFormArray = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormArray = function (dir) { };
        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
        FormGroupDirective.prototype.updateModel = function (dir, value) {
            var /** @type {?} */ ctrl = (this.form.get(dir.path));
            ctrl.setValue(value);
        };
        FormGroupDirective.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
        FormGroupDirective.prototype.resetForm = function (value) {
            if (value === void 0) {
                value = undefined;
            }
            this.form.reset(value);
            this._submitted = false;
        };
        FormGroupDirective.prototype._updateDomValue = function () {
            var _this = this;
            this.directives.forEach(function (dir) {
                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
                if (dir._control !== newCtrl) {
                    cleanUpControl(dir._control, dir);
                    if (newCtrl)
                        setUpControl(newCtrl, dir);
                    dir._control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype._updateRegistrations = function () {
            var _this = this;
            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
            if (this._oldForm)
                this._oldForm._registerOnCollectionChange(function () { });
            this._oldForm = this.form;
        };
        FormGroupDirective.prototype._updateValidators = function () {
            var /** @type {?} */ sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        };
        FormGroupDirective.prototype._checkFormPresent = function () {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        };
        FormGroupDirective.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroup]',
                        providers: [formDirectiveProvider$1],
                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                        exportAs: 'ngForm'
                    },] },
        ];
        FormGroupDirective.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            ];
        };
        FormGroupDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
            'ngSubmit': [{ type: _angular_core.Output },],
        };
        return FormGroupDirective;
    }(ControlContainer));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$12 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
    };
    var FormGroupName = (function (_super) {
        __extends$12(FormGroupName, _super);
        function FormGroupName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        FormGroupName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        };
        FormGroupName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
        ];
        FormGroupName.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            ];
        };
        FormGroupName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
        };
        return FormGroupName;
    }(AbstractFormGroupDirective));
    var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
    };
    var FormArrayName = (function (_super) {
        __extends$12(FormArrayName, _super);
        function FormArrayName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        FormArrayName.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormArray(this);
        };
        FormArrayName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        };
        Object.defineProperty(FormArrayName.prototype, "control", {
            get: function () { return this.formDirective.getFormArray(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "formDirective", {
            get: function () {
                return this._parent ? (this._parent.formDirective) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "validator", {
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        FormArrayName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        };
        FormArrayName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
        ];
        FormArrayName.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            ];
        };
        FormArrayName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
        };
        return FormArrayName;
    }(ControlContainer));
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
            !(parent instanceof FormArrayName);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$10 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var controlNameBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
    };
    var FormControlName = (function (_super) {
        __extends$10(FormControlName, _super);
        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this._added = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlName.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype.ngOnChanges = function (changes) {
            if (!this._added)
                this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        };
        FormControlName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        };
        FormControlName.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        Object.defineProperty(FormControlName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "control", {
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype._checkParentType = function () {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        };
        FormControlName.prototype._setUpControl = function () {
            this._checkParentType();
            this._control = this.formDirective.addControl(this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this._added = true;
        };
        FormControlName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
        ];
        FormControlName.ctorParameters = function () {
            return [
                { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
                { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
            ];
        };
        FormControlName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlName;
    }(NgControl));
    var __extends$13 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
        multi: true
    };
    var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
        multi: true
    };
    var RequiredValidator = (function () {
        function RequiredValidator() {
        }
        Object.defineProperty(RequiredValidator.prototype, "required", {
            get: function () { return this._required; },
            set: function (value) {
                this._required = value != null && value !== false && "" + value !== 'false';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        RequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.required(c) : null;
        };
        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        RequiredValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                        providers: [REQUIRED_VALIDATOR],
                        host: { '[attr.required]': 'required ? "" : null' }
                    },] },
        ];
        RequiredValidator.ctorParameters = function () { return []; };
        RequiredValidator.propDecorators = {
            'required': [{ type: _angular_core.Input },],
        };
        return RequiredValidator;
    }());
    var CheckboxRequiredValidator = (function (_super) {
        __extends$13(CheckboxRequiredValidator, _super);
        function CheckboxRequiredValidator() {
            _super.apply(this, arguments);
        }
        CheckboxRequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.requiredTrue(c) : null;
        };
        CheckboxRequiredValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
                        host: { '[attr.required]': 'required ? "" : null' }
                    },] },
        ];
        CheckboxRequiredValidator.ctorParameters = function () { return []; };
        return CheckboxRequiredValidator;
    }(RequiredValidator));
    var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
        multi: true
    };
    var MinLengthValidator = (function () {
        function MinLengthValidator() {
        }
        MinLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('minlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MinLengthValidator.prototype.validate = function (c) {
            return this.minlength == null ? null : this._validator(c);
        };
        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MinLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        };
        MinLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                        providers: [MIN_LENGTH_VALIDATOR],
                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
                    },] },
        ];
        MinLengthValidator.ctorParameters = function () { return []; };
        MinLengthValidator.propDecorators = {
            'minlength': [{ type: _angular_core.Input },],
        };
        return MinLengthValidator;
    }());
    var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
        multi: true
    };
    var MaxLengthValidator = (function () {
        function MaxLengthValidator() {
        }
        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('maxlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MaxLengthValidator.prototype.validate = function (c) {
            return this.maxlength != null ? this._validator(c) : null;
        };
        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MaxLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        };
        MaxLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                        providers: [MAX_LENGTH_VALIDATOR],
                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                    },] },
        ];
        MaxLengthValidator.ctorParameters = function () { return []; };
        MaxLengthValidator.propDecorators = {
            'maxlength': [{ type: _angular_core.Input },],
        };
        return MaxLengthValidator;
    }());
    var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
        multi: true
    };
    var PatternValidator = (function () {
        function PatternValidator() {
        }
        PatternValidator.prototype.ngOnChanges = function (changes) {
            if ('pattern' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
        PatternValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                        providers: [PATTERN_VALIDATOR],
                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
                    },] },
        ];
        PatternValidator.ctorParameters = function () { return []; };
        PatternValidator.propDecorators = {
            'pattern': [{ type: _angular_core.Input },],
        };
        return PatternValidator;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var VERSION = new _angular_core.Version('2.4.1');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SHARED_FORM_DIRECTIVES = [
        NgSelectOption,
        NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
    ];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var InternalFormsSharedModule = (function () {
        function InternalFormsSharedModule() {
        }
        InternalFormsSharedModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: SHARED_FORM_DIRECTIVES,
                        exports: SHARED_FORM_DIRECTIVES,
                    },] },
        ];
        InternalFormsSharedModule.ctorParameters = function () { return []; };
        return InternalFormsSharedModule;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var FormsModule = (function () {
        function FormsModule() {
        }
        FormsModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                        providers: [RadioControlRegistry],
                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                    },] },
        ];
        FormsModule.ctorParameters = function () { return []; };
        return FormsModule;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var RequestService = (function () {
        function RequestService(http) {
            this.http = http;
        }
        RequestService.prototype.get = function (url, query, headers) {
            return this.send("GET", url, query, null, headers);
        };
        RequestService.prototype.post = function (url, query, data, headers) {
            return this.send("POST", url, query, data, headers);
        };
        RequestService.prototype.put = function (url, query, data, headers) {
            return this.send("PUT", url, query, data, headers);
        };
        RequestService.prototype.patch = function (url, query, data, headers) {
            return this.send("PATCH", url, query, data, headers);
        };
        RequestService.prototype.delete = function (url, query, headers) {
            return this.send("DELETE", url, query, null, headers);
        };
        RequestService.prototype.send = function (method, url, query, data, header) {
            var options = new _angular_http.RequestOptions({
                method: method,
                headers: this.getHeaders(header),
                search: this.getSearch(query),
                body: this.getBody(data)
            });
            return this.http.request(url, options);
        };
        RequestService.prototype.getSearch = function (query) {
            var params = "";
            if (query) {
                for (var key in query) {
                    if (key === undefined || key === null || key.length === 0) {
                        continue;
                    }
                    if (query.hasOwnProperty(key)) {
                        params += "&" + key + "=" + query[key];
                    }
                }
            }
            return new _angular_http.URLSearchParams(params);
        };
        RequestService.prototype.getHeaders = function (header) {
            var headers = new _angular_http.Headers();
            if (header) {
                for (var key in header) {
                    if (header.hasOwnProperty(key)) {
                        headers.append(key, header[key]);
                    }
                }
            }
            return headers;
        };
        RequestService.prototype.getBody = function (data) {
            return data ? JSON.stringify(data) : "";
        };
        return RequestService;
    }());
    RequestService = __decorate$1([
        _angular_core.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_http.Http !== "undefined" && _angular_http.Http) === "function" && _a || Object])
    ], RequestService);
    var _a;
    var services = Object.freeze({
        get RequestService() { return RequestService; }
    });
    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var IndexComponent = (function () {
        function IndexComponent() {
        }
        return IndexComponent;
    }());
    IndexComponent = __decorate$2([
        _angular_core.Component({
            //
            selector: "index",
            template: "<header><div class=\"content-wrapper\"><div><a href=\"http://liyanjie.me\"><b>ApiExplorer</b> by liyanjie.me</a></div><navigator #navigator></navigator></div></header><section><div class=\"content-wrapper\"><header><info [info]=\"main.info\" #info></info><section><span class=\"day0\">1\u5929\u5185</span> <span class=\"day1\">2\u5929\u5185</span> <span class=\"day2\">3\u5929\u5185</span> <span class=\"week0\">1\u5468\u5185</span> <span class=\"week1\">2\u5468\u5185</span> <span class=\"month0\">1\u6708\u5185</span> <span class=\"month1\">2\u6708\u5185</span> <span class=\"year0\">1\u5E74\u5185</span> <span class=\"years\">1\u5E74\u524D</span></section></header><section [ngClass]=\"{testing:section.testing}\" #section><main [section]=\"section\" [docUrl]=\"navigator.docUrl\" [setParameterValue]=\"test.setParameterValue\" #main></main><test [section]=\"section\" [basePath]=\"main.basePath||'/'\" [resource]=\"main.resource\" [headers]=\"main.headers\" #test></test></section></div></section>"
        })
    ], IndexComponent);
    var __extends$14 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Enumerable = (function () {
        function Enumerable(source) {
            Enumerable._check(source);
            this.source = source;
        }
        Enumerable._check = function (array) {
            if (array === null || array === undefined)
                throw new Error('Array parameter can not be null or undefined!');
        };
        Enumerable.new = function (source) {
            return new Enumerable(source);
        };
        Enumerable.prototype.all = function (predicate) {
            return this.source.every(predicate) === true;
        };
        Enumerable.prototype.any = function (predicate) {
            if (predicate)
                return this.source.some(predicate) === true;
            return this.source.length > 0;
        };
        Enumerable.prototype.append = function () {
            var elements = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                elements[_i - 0] = arguments[_i];
            }
            Enumerable._check(elements);
            (_a = this.source).push.apply(_a, elements);
            return this;
            var _a;
        };
        Enumerable.prototype.average = function (selector) {
            return this.sum(selector) / this.source.length;
        };
        Enumerable.prototype.concat = function () {
            var targets = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                targets[_i - 0] = arguments[_i];
            }
            Enumerable._check(targets);
            return new Enumerable((_a = this.source).concat.apply(_a, targets));
            var _a;
        };
        Enumerable.prototype.contains = function (element, comparer) {
            if (comparer)
                return this.source.some(function (_) { return comparer(_, element); }) === true;
            return this.source.indexOf(element) > -1;
        };
        Enumerable.prototype.count = function (predicate) {
            if (predicate)
                return this.source.filter(predicate).length;
            return this.source.length;
        };
        Enumerable.prototype.defaultIfEmpty = function (defaultValue) {
            return this.isEmpty() ? new Enumerable(defaultValue ? [defaultValue] : []) : this;
        };
        Enumerable.prototype.distinct = function (comparer) {
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            this.source.forEach(function (item) {
                if (result.some(function (_) { return comparer(_, item); }) === false)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.elementAtOrDefault = function (index) {
            if (this.source.length > index)
                return this.source[index];
            return null;
        };
        Enumerable.empty = function () {
            return new Enumerable([]);
        };
        Enumerable.prototype.except = function (target, comparer) {
            Enumerable._check(target);
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            this.source.forEach(function (item) {
                if (target.some(function (_) { return comparer(_, item); }) === false)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.firstOrDefault = function (predicate) {
            var source = predicate ? this.source.filter(predicate) : this.source;
            if (source.length > 0)
                return source[0];
            return null;
        };
        Enumerable.prototype.forEach = function (callbackFn) {
            this.source.forEach(callbackFn);
        };
        Enumerable.prototype.groupBy = function (keySelector, comparer) {
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            this.source.forEach(function (item) {
                var key = keySelector(item);
                var array = result.filter(function (_) { return comparer(_.key, key) === true; });
                array.length > 0
                    ? array[0].source.push(item)
                    : result.push(new GroupedEnumerable({ key: key, source: [item] }));
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.groupJoin = function (target, keySelector, targetKeySelector, resultSelector, comparer) {
            Enumerable._check(target);
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            var _loop_1 = function (i) {
                var item1 = this_1.source[i];
                var key = keySelector(item1);
                var item2 = target.filter(function (_) { return comparer(key, targetKeySelector(_)) === true; });
                var selected = resultSelector(item1, item2, key);
                selected && result.push(selected);
            };
            var this_1 = this;
            for (var i = 0; i < this.source.length; i++) {
                _loop_1(i);
            }
            return new Enumerable(result);
        };
        Enumerable.prototype.intersect = function (target, comparer) {
            Enumerable._check(target);
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            this.source.forEach(function (item) {
                if (target.some(function (_) { return comparer(_, item); }) === true)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.isEmpty = function () {
            return this.source.length == 0;
        };
        Enumerable.prototype.join = function (target, keySelector, targetKeySelector, resultSelector, comparer) {
            Enumerable._check(target);
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            var _loop_2 = function (i) {
                var item1 = this_2.source[i];
                var key = keySelector(item1);
                var filteredTarget = target.filter(function (_) { return comparer(key, targetKeySelector(_)) === true; });
                var item2 = filteredTarget.length > 0 ? filteredTarget[0] : null;
                var selected = resultSelector(item1, item2, key);
                selected && result.push(selected);
            };
            var this_2 = this;
            for (var i = 0; i < this.source.length; i++) {
                _loop_2(i);
            }
            return new Enumerable(result);
        };
        Enumerable.prototype.lastOrDefault = function (predicate) {
            var source = predicate ? this.source.filter(predicate) : this.source;
            if (this.source.length > 0)
                return this.source[this.source.length - 1];
            return null;
        };
        Enumerable.prototype.max = function (selector) {
            if (this.source.length === 0)
                return 0;
            return selector(this.source.sort(function (item1, item2) { return selector(item2) - selector(item1); })[0]);
        };
        Enumerable.prototype.min = function (selector) {
            if (this.source.length === 0)
                return 0;
            return selector(this.source.sort(function (item1, item2) { return selector(item1) - selector(item2); })[0]);
        };
        Enumerable.prototype.orderBy = function (keySelector, comparer) {
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var keys = [];
            var group = [];
            this.source.forEach(function (item) {
                var key = keySelector(item);
                keys.push(key);
                var array = group.filter(function (_) { return comparer(_.key, key) === true; });
                array.length > 0
                    ? array[0].source.push(item)
                    : group.push({ key: key, source: [item] });
            });
            var result = [];
            keys.sort().forEach(function (item) {
                result.push(new GroupedEnumerable(group.filter(function (_) { return comparer(item, _.key) === true; })[0]));
            });
            keys = null;
            group = null;
            return new OrderedEnumerable(result);
        };
        Enumerable.prototype.prepend = function () {
            var elements = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                elements[_i - 0] = arguments[_i];
            }
            Enumerable._check(elements);
            this.source = new (Array.bind.apply(Array, [void 0].concat(elements, this.source)))();
            return this;
        };
        Enumerable.range = function (start, count) {
            var result = [];
            for (var i = 0; i < count; i++) {
                result.push(start + i);
            }
            return new NumberEnumerable(result);
        };
        Enumerable.repeat = function (element, count) {
            var result = [];
            for (var i = 0; i < count; i++) {
                result.push(element);
            }
            return new Enumerable(result);
        };
        Enumerable.prototype.reverse = function () {
            return new Enumerable(new (Array.bind.apply(Array, [void 0].concat(this.source)))().reverse());
        };
        Enumerable.prototype.select = function (selector) {
            var result = [];
            this.source.forEach(function (item, index) {
                var selected = selector(item, index);
                selected && result.push(selected);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.selectMany = function (resultSelector) {
            var result = [];
            this.source.forEach(function (item, index) {
                var selected = resultSelector(item, index);
                selected && result.push.apply(result, selected);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.sequenceEqual = function (target, comparer) {
            Enumerable._check(target);
            if (this.source.length !== target.length)
                return false;
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = true;
            for (var i = 0; i < this.source.length; i++) {
                var item1 = this.source[i];
                var item2 = target.length > i ? target[i] : null;
                if (comparer(item1, item2) === false) {
                    result = false;
                    break;
                }
            }
            comparer = null;
            return result;
        };
        Enumerable.prototype.skip = function (count) {
            var result = [];
            this.source.forEach(function (item, index) {
                if (index >= count)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.skipWhile = function (predicate) {
            var result = [];
            var flag = false;
            for (var i = 0; i < this.source.length; i++) {
                var item = this.source[i];
                if (predicate(item, i) === false) {
                    if (!flag)
                        flag = true;
                    result.push(item);
                }
                else if (flag)
                    break;
            }
            this.source.forEach(function (item, index) {
                if (predicate(item, index) === false)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.sum = function (selector) {
            if (this.source.length === 0)
                return 0;
            var sum = 0;
            this.source.forEach(function (item) {
                sum += selector(item);
            });
            return sum;
        };
        Enumerable.prototype.take = function (count) {
            var result = [];
            this.source.forEach(function (item, index) {
                if (index < count)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.takeWhile = function (predicate) {
            var result = [];
            var flag = false;
            for (var i = 0; i < this.source.length; i++) {
                var item = this.source[i];
                if (predicate(item, i) === true) {
                    if (!flag)
                        flag = true;
                    result.push(item);
                }
                else if (flag)
                    break;
            }
            return new Enumerable(result);
        };
        Enumerable.prototype.toArray = function () {
            return this.source;
        };
        Enumerable.prototype.toDictionary = function (keySelector, valueSelector) {
            var result = {};
            this.source.forEach(function (item) {
                var key = keySelector(item);
                if (!result[key])
                    result[key] = valueSelector(item);
            });
            return result;
        };
        Enumerable.prototype.toString = function (seperator, stringSelector) {
            seperator = seperator || ',';
            stringSelector = stringSelector || (function (item) { return item.toString(); });
            var result = '';
            this.source.forEach(function (item) {
                result += stringSelector(item) + seperator;
            });
            return result.substr(0, result.length - seperator.length);
        };
        Enumerable.prototype.union = function (target, comparer) {
            Enumerable._check(target);
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = new (Array.bind.apply(Array, [void 0].concat(this.source)))();
            target.forEach(function (item) {
                if (result.some(function (item2) { return comparer(item, item2); }) === false)
                    result.push(item);
            });
            comparer = null;
            return new Enumerable(result);
        };
        Enumerable.prototype.where = function (predicate) {
            var result = [];
            this.source.forEach(function (item, index) {
                if (predicate(item, index) === true)
                    result.push(item);
            });
            return new Enumerable(result);
        };
        Enumerable.prototype.zip = function (target, resultSelector) {
            Enumerable._check(target);
            var result = [];
            for (var i = 0; i < this.source.length; i++) {
                var item1 = this.source[i];
                var item2 = target.length > i ? target[i] : null;
                result.push(resultSelector(item1, item2, i));
            }
            return new Enumerable(result);
        };
        return Enumerable;
    }());
    var GroupedEnumerable = (function (_super) {
        __extends$14(GroupedEnumerable, _super);
        function GroupedEnumerable(groupedSource) {
            _super.call(this, groupedSource.source);
            this.key = groupedSource.key;
        }
        return GroupedEnumerable;
    }(Enumerable));
    var OrderedEnumerable = (function (_super) {
        __extends$14(OrderedEnumerable, _super);
        function OrderedEnumerable(orderedSource) {
            _super.call(this, Enumerable.new(orderedSource).selectMany(function (item) { return item.source; }).toArray());
            this.orderedSource = orderedSource;
        }
        OrderedEnumerable.new = function (orderedSource) {
            return new OrderedEnumerable(orderedSource);
        };
        OrderedEnumerable.prototype.thenBy = function (keySelector, comparer) {
            comparer = comparer || (function (item1, item2) { return item1 == item2; });
            var result = [];
            this.orderedSource.forEach(function (item) {
                item.orderBy(keySelector, comparer).orderedSource.forEach(function (item2) {
                    result.push(new GroupedEnumerable({ key: item.key + ':' + item2.key, source: item2.source }));
                });
            });
            return new OrderedEnumerable(result);
        };
        return OrderedEnumerable;
    }(Enumerable));
    var NumberEnumerable = (function (_super) {
        __extends$14(NumberEnumerable, _super);
        function NumberEnumerable(source) {
            _super.call(this, source);
        }
        NumberEnumerable.new = function (source) {
            return new NumberEnumerable(source);
        };
        NumberEnumerable.prototype.average = function () {
            return this.sum() / this.source.length;
        };
        NumberEnumerable.prototype.elementAtOrDefault = function (index) {
            if (this.source.length > index)
                return this.source[index];
            return 0;
        };
        NumberEnumerable.prototype.firstOrDefault = function (predicate) {
            if (this.source.length > 0)
                return this.source[0];
            return 0;
        };
        NumberEnumerable.prototype.lastOrDefault = function (predicate) {
            if (this.source.length > 0)
                return this.source[this.source.length - 1];
            return 0;
        };
        NumberEnumerable.prototype.max = function () {
            if (this.source.length === 0)
                return 0;
            return this.source.sort(function (item1, item2) { return item2 - item1; })[0];
        };
        NumberEnumerable.prototype.min = function () {
            if (this.source.length === 0)
                return 0;
            return this.source.sort(function (item1, item2) { return item1 - item2; })[0];
        };
        NumberEnumerable.repeat = function (element, count) {
            var result = [];
            for (var i = 0; i < count; i++) {
                result.push(element);
            }
            return new NumberEnumerable(result);
        };
        NumberEnumerable.prototype.sum = function () {
            if (this.source.length === 0)
                return 0;
            var sum = 0;
            this.source.forEach(function (item) {
                sum += item;
            });
            return sum;
        };
        return NumberEnumerable;
    }(Enumerable));
    var KeyValuePair = (function () {
        function KeyValuePair(key, value) {
            this.key = key;
            this.value = value;
        }
        return KeyValuePair;
    }());
    var NameValueCollection = (function () {
        function NameValueCollection() {
        }
        return NameValueCollection;
    }());
    var GroupedList = (function () {
        function GroupedList() {
        }
        return GroupedList;
    }());
    var ApiBind = (function () {
        function ApiBind() {
        }
        return ApiBind;
    }());
    var ApiDefinition = (function () {
        function ApiDefinition() {
        }
        return ApiDefinition;
    }());
    var ApiDocument = (function () {
        function ApiDocument() {
        }
        return ApiDocument;
    }());
    var ApiHeader = (function () {
        function ApiHeader() {
        }
        return ApiHeader;
    }());
    var ApiInfo = (function () {
        function ApiInfo() {
        }
        return ApiInfo;
    }());
    var ApiParameter = (function () {
        function ApiParameter() {
        }
        return ApiParameter;
    }());
    var ApiProperty = (function () {
        function ApiProperty() {
        }
        return ApiProperty;
    }());
    var ApiResource = (function () {
        function ApiResource() {
        }
        return ApiResource;
    }());
    var ApiResponse = (function () {
        function ApiResponse() {
        }
        return ApiResponse;
    }());
    var ApiType = (function () {
        function ApiType() {
        }
        return ApiType;
    }());
    var DocUrl = (function () {
        function DocUrl() {
        }
        return DocUrl;
    }());
    var models = Object.freeze({
        KeyValuePair: KeyValuePair,
        NameValueCollection: NameValueCollection,
        GroupedList: GroupedList,
        ApiBind: ApiBind,
        ApiDefinition: ApiDefinition,
        ApiDocument: ApiDocument,
        ApiHeader: ApiHeader,
        ApiInfo: ApiInfo,
        ApiParameter: ApiParameter,
        ApiProperty: ApiProperty,
        ApiResource: ApiResource,
        ApiResponse: ApiResponse,
        ApiType: ApiType,
        DocUrl: DocUrl
    });
    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    };
    var NavigatorComponent = (function () {
        function NavigatorComponent(requestService) {
            this.requestService = requestService;
        }
        NavigatorComponent.prototype.export = function (url) {
            this.docUrl = url;
        };
        NavigatorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.requestService
                .get("./init.json?v=1.0.1")
                .subscribe(function (response) {
                _this.docUrls = response.json();
            }, function (error) {
                console.log(error);
            }, function () {
                var dft = Enumerable.new(_this.docUrls).firstOrDefault(function (_) { return _.default; });
                _this.docUrl = (dft || (_this.docUrls.length > 0 ? _this.docUrls[0] : new DocUrl())).url;
            });
        };
        return NavigatorComponent;
    }());
    __decorate$3([
        _angular_core.Output(),
        __metadata$1("design:type", String)
    ], NavigatorComponent.prototype, "docUrl", void 0);
    NavigatorComponent = __decorate$3([
        _angular_core.Component({
            //
            selector: "navigator",
            template: "<template [ngIf]=\"docUrls\"><input value=\"{{select.value}}\" readonly=\"readonly\"><select name=\"url\" #select><option value=\"{{docUrl.url}}\" [selected]=\"docUrl.default\" *ngFor=\"let docUrl of docUrls\">{{docUrl.url}}</option></select><button type=\"button\" (click)=\"export(select.value)\">Explor</button></template>"
        }),
        __param(0, _angular_core.Inject(RequestService)),
        __metadata$1("design:paramtypes", [typeof (_a$1 = (typeof services !== "undefined" && services).RequestService) === "function" && _a$1 || Object])
    ], NavigatorComponent);
    var _a$1;
    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var __param$1 = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    };
    var InfoComponent = (function () {
        function InfoComponent(title) {
            this.title = title;
        }
        InfoComponent.prototype.ngOnChanges = function () {
            this.info && this.title.setTitle(this.info.title);
        };
        return InfoComponent;
    }());
    __decorate$4([
        _angular_core.Input(),
        __metadata$2("design:type", typeof (_a$2 = (typeof models !== "undefined" && models).ApiInfo) === "function" && _a$2 || Object)
    ], InfoComponent.prototype, "info", void 0);
    InfoComponent = __decorate$4([
        _angular_core.Component({
            //
            selector: "info",
            template: "<h4><b>{{info?.title}}</b> &nbsp; {{info?.version}}</h4><div>{{info?.description}}</div>"
        }),
        __param$1(0, _angular_core.Inject(_angular_platformBrowser.Title)),
        __metadata$2("design:paramtypes", [typeof (_b = typeof _angular_platformBrowser.Title !== "undefined" && _angular_platformBrowser.Title) === "function" && _b || Object])
    ], InfoComponent);
    var _a$2;
    var _b;
    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var __param$2 = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    };
    var MainComponent = (function () {
        function MainComponent(requestService, location) {
            this.requestService = requestService;
            this.location = location;
        }
        MainComponent.prototype.timestamp = function (time) {
            if (!time)
                return "";
            try {
                var timespan = (Date.now() - Date.parse(time)) / (1000 * 60 * 60 * 24);
                if (timespan < 1)
                    return "day0";
                if (timespan < 2)
                    return "day1";
                if (timespan < 3)
                    return "day2";
                if (timespan < 7)
                    return "week0";
                if (timespan < 14)
                    return "week1";
                if (timespan < 30)
                    return "month0";
                if (timespan < 60)
                    return "month1";
                if (timespan < 365)
                    return "year0";
                return "years";
            }
            catch (e) { }
        };
        MainComponent.prototype._replaceUrl = function (input) {
            return input.replace(/\{/g, '_').replace(/\}/g, '').replace(/\//g, '-').replace(/\-\_/g, '_').replace(/\_\-/g, '-').replace(/\_\_/g, '_');
        };
        MainComponent.prototype.path = function (group, item) {
            return item
                ? window.location.pathname + "#" + group + "/" + this._replaceUrl(item)
                : window.location.pathname + "#" + group;
        };
        MainComponent.prototype.select = function (resource) {
            this.resource = resource;
            return true;
        };
        MainComponent.prototype.hash = function (hash) {
            return window.location.hash.substr(1).split('/').indexOf(this._replaceUrl(hash)) > -1;
        };
        MainComponent.prototype._explor = function (docUrl) {
            var _this = this;
            this.requestService
                .get(docUrl, null, { accept: "application/json" })
                .subscribe(function (response) {
                var document = response.json();
                _this.basePath = document.basePath;
                _this.info = document.info;
                _this.headers = document.headers;
                _this.resources = Enumerable.new(document.resources)
                    .groupBy(function (_) { return _.groupName; })
                    .groupBy(function (_) { return _.key.substring(0, _.key.indexOf('.')); })
                    .select(function (_) {
                    return ({
                        groupName: _.key,
                        groupList: _.select(function (__) {
                            return ({
                                groupName: __.key.substring(__.key.indexOf('.') + 1),
                                groupList: __.toArray()
                            });
                        }).toArray(),
                    });
                })
                    .toArray();
                _this.definitions = Enumerable.new(document.definitions)
                    .toDictionary(function (_) { return _.name; }, function (_) { return _; });
            });
        };
        MainComponent.prototype.ngOnChanges = function () {
            this.docUrl && this._explor(this.docUrl);
        };
        return MainComponent;
    }());
    __decorate$5([
        _angular_core.Input(),
        __metadata$3("design:type", Object)
    ], MainComponent.prototype, "section", void 0);
    __decorate$5([
        _angular_core.Input(),
        __metadata$3("design:type", String)
    ], MainComponent.prototype, "docUrl", void 0);
    __decorate$5([
        _angular_core.Input(),
        __metadata$3("design:type", Function)
    ], MainComponent.prototype, "setParameterValue", void 0);
    __decorate$5([
        _angular_core.Output(),
        __metadata$3("design:type", String)
    ], MainComponent.prototype, "basePath", void 0);
    __decorate$5([
        _angular_core.Output(),
        __metadata$3("design:type", typeof (_a$3 = (typeof models !== "undefined" && models).ApiInfo) === "function" && _a$3 || Object)
    ], MainComponent.prototype, "info", void 0);
    __decorate$5([
        _angular_core.Output(),
        __metadata$3("design:type", Array)
    ], MainComponent.prototype, "headers", void 0);
    __decorate$5([
        _angular_core.Output(),
        __metadata$3("design:type", typeof (_b$1 = (typeof models !== "undefined" && models).ApiResource) === "function" && _b$1 || Object)
    ], MainComponent.prototype, "resource", void 0);
    MainComponent = __decorate$5([
        _angular_core.Component({
            //
            selector: "main",
            template: "<template [ngIf]=\"resources\"><dl [ngClass]=\"{expanded:hash(group1.groupName)}\" *ngFor=\"let group1 of resources\" #groupA><dt><a href=\"{{path(group1.groupName)}}\">{{group1.groupName}}</a> <i class=\"fa fa-plus-square-o\" *ngIf=\"!hash(group1.groupName)\"></i></dt><dd><dl [ngClass]=\"{expanded:!groupB.folded}\" *ngFor=\"let group2 of group1.groupList\" #groupB><dt (click)=\"groupB.folded=!groupB.folded\"><span>{{group2.groupName}}</span> <i class=\"fa fa-plus-square-o\" *ngIf=\"groupB.folded\"></i> <i class=\"fa fa-minus-square-o\" *ngIf=\"!groupB.folded\"></i></dt><dd class=\"{{resource.method}} {{timestamp(resource.timestamp)}}\" [ngClass]=\"{expanded:hash(resource.method+'-'+resource.path)}\" *ngFor=\"let resource of group2.groupList\" #groupC><header title=\"\u66F4\u65B0\u4E8E\uFF1A{{resource.timestamp||'\u65E0'}}\"><div><b>{{resource.method}}</b> <a href=\"{{path(group1.groupName,resource.method+'-'+resource.path)}}\">{{resource.path}}</a></div><div>{{resource.summary}}</div></header><section class=\"produces\"><div>\u652F\u6301\u683C\u5F0F</div><span *ngFor=\"let produce of resource.produces\">{{produce}}</span></section><section class=\"parameters\"><div>\u8BF7\u6C42\u53C2\u6570</div><table class=\"list\"><thead><tr><td class=\"name\">\u540D\u79F0</td><td class=\"desc\">\u8BF4\u660E</td><td class=\"source\">\u53C2\u6570\u7C7B\u578B</td><td class=\"datatype\">\u6570\u636E\u7C7B\u578B</td></tr></thead><tbody><tr *ngFor=\"let parameter of resource.parameters\"><td>{{parameter.name}}</td><td>{{parameter.summary}}</td><td>{{parameter.source}}</td><td><div *ngIf=\"!parameter.type.definition\"><span>{{parameter.type.name}}</span> <span *ngIf=\"parameter.defaultValue\">(default\uFF1A<pre style=\"display:inline\" (click)=\"setParameterValue&&setParameterValue(parameter.source,parameter.name,parameter.defaultValue)\">{{parameter.defaultValue}}</pre>)</span></div><dl class=\"tabs\" *ngIf=\"parameter.type.definition\" #tabs><dt [ngClass]=\"{selected:tabs.selected==1}\" (click)=\"tabs.selected=1\">\u6A21\u578B</dt><dd><definition [type]=\"parameter.type\" [bind]=\"parameter.bindInclude\" [clude]=\"true\" [definitions]=\"definitions\"></definition></dd><dt [ngClass]=\"{selected:tabs.selected==2||!tabs.selected}\" (click)=\"tabs.selected=2\">\u793A\u4F8B</dt><dd><example [type]=\"parameter.type\" [bind]=\"parameter.bindInclude\" [clude]=\"true\" [definitions]=\"definitions\" (click)=\"setParameterValue&&setParameterValue(parameter.source,parameter.name,example.content)\" #example></example></dd></dl></td></tr></tbody></table></section><section class=\"responses\"><div>\u8FD4\u56DE\u7ED3\u679C</div><table class=\"list\"><thead><tr><td class=\"name\">HTTP\u72B6\u6001\u7801</td><td class=\"desc\">\u8BF4\u660E</td><td class=\"datatype\">\u6570\u636E\u7C7B\u578B</td></tr></thead><tbody><tr *ngFor=\"let response of resource.responses\"><td>{{response.statusCode}}</td><td>{{response.summary}}</td><td><span *ngIf=\"!response.type.definition\">{{response.type.name}}</span><dl class=\"tabs\" *ngIf=\"response.type.definition\" #tabs><dt [ngClass]=\"{selected:tabs.selected==1}\" (click)=\"tabs.selected=1\">\u6A21\u578B</dt><dd><definition [type]=\"response.type\" [bind]=\"response.bindExclude\" [clude]=\"false\" [definitions]=\"definitions\"></definition></dd><dt [ngClass]=\"{selected:tabs.selected==2||!tabs.selected}\" (click)=\"tabs.selected=2\">\u793A\u4F8B</dt><dd><example [type]=\"response.type\" [bind]=\"response.bindExclude\" [clude]=\"false\" [definitions]=\"definitions\"></example></dd></dl></td></tr></tbody></table></section><section class=\"buttons\"><button type=\"button\" (click)=\"select(resource)&&section.testing=true\">\u6D4B\u8BD5\u4E00\u4E0B</button></section></dd></dl></dd></dl></template>"
        }),
        __param$2(0, _angular_core.Inject(RequestService)), __param$2(1, _angular_core.Inject(_angular_common.Location)),
        __metadata$3("design:paramtypes", [typeof (_c = (typeof services !== "undefined" && services).RequestService) === "function" && _c || Object, typeof (_d = typeof _angular_common.Location !== "undefined" && _angular_common.Location) === "function" && _d || Object])
    ], MainComponent);
    var _a$3;
    var _b$1;
    var _c;
    var _d;
    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var DefinitionComponent = (function () {
        function DefinitionComponent() {
            this.types = [];
        }
        DefinitionComponent.prototype.isDelete = function (name, bind) {
            if (this.clude)
                return bind && !Enumerable.new(bind).any(function (_) { return _.name == name; });
            else
                return bind && Enumerable.new(bind).any(function (_) { return _.name == name && (_.bind == null || _.bind.length == 0); });
        };
        DefinitionComponent.prototype._resolve = function (type, bind) {
            var _this = this;
            if (type.definition) {
                var definition_1 = this.definitions[type.definition];
                if (this.types.some(function (_) { return _.key.name == definition_1.name; }))
                    return;
                this.types.push(new KeyValuePair(definition_1, bind));
                definition_1.properties.forEach(function (property) {
                    var apiBind = Enumerable.new(bind || []).firstOrDefault(function (_) { return _.name == property.name; });
                    _this._resolve(property.type, apiBind ? apiBind.bind : null);
                });
            }
            else {
                type.itemType && this._resolve(type.itemType, bind);
                type.additionalTypes && type.additionalTypes.forEach(function (t) {
                    _this._resolve(t, bind);
                });
            }
        };
        DefinitionComponent.prototype.ngOnInit = function () {
            this._resolve(this.type, this.bind);
        };
        DefinitionComponent.prototype.ngOnDestroy = function () {
            this.type = null;
            this.definitions = null;
        };
        return DefinitionComponent;
    }());
    __decorate$6([
        _angular_core.Input(),
        __metadata$4("design:type", typeof (_a$4 = (typeof models !== "undefined" && models).ApiType) === "function" && _a$4 || Object)
    ], DefinitionComponent.prototype, "type", void 0);
    __decorate$6([
        _angular_core.Input(),
        __metadata$4("design:type", Array)
    ], DefinitionComponent.prototype, "bind", void 0);
    __decorate$6([
        _angular_core.Input(),
        __metadata$4("design:type", Boolean)
    ], DefinitionComponent.prototype, "clude", void 0);
    __decorate$6([
        _angular_core.Input(),
        __metadata$4("design:type", typeof (_b$2 = (typeof models !== "undefined" && models).NameValueCollection) === "function" && _b$2 || Object)
    ], DefinitionComponent.prototype, "definitions", void 0);
    DefinitionComponent = __decorate$6([
        _angular_core.Component({
            //
            selector: "definition",
            template: "<pre>\n<span *ngFor=\"let type of types\"><span class=\"comment\" *ngIf=\"type.key.summary\">//{{type.key.summary}}</span>\n<b class=\"class\">{{type.key.name}}</b> {{'{'}}\n<span *ngFor=\"let property of type.key.properties\" [ngClass]=\"{deleted:isDelete(property.name,type.value)}\">    {{property.name}}: (<span class=\"type\">{{property.type.definition||property.type.name||property.type.value}}<template [ngIf]=\"property.type.itemType\">&lt;{{property.type.itemType.definition||property.type.itemType.name}}&gt;</template></span>, <cite class=\"annotation\">{{property.required?'required':'optional'}}</cite>); <span class=\"comment\" *ngIf=\"property.summary\">//{{property.summary}}</span>\n</span>{{'}'}}\n</span></pre>"
        })
    ], DefinitionComponent);
    var _a$4;
    var _b$2;
    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var ExampleComponent = (function () {
        function ExampleComponent() {
            this._resolved = [];
        }
        ExampleComponent.prototype._resolve = function (type, bind) {
            var _this = this;
            if (!(type && type.name))
                return "";
            switch (type.name.toLowerCase()) {
                case "int8":
                case "int16":
                case "int32":
                case "int64":
                    return "0";
                case "float":
                case "double":
                case "decimal":
                    return "0.0";
                case "boolean":
                    return "false";
                case "string":
                    if (type.format) {
                        switch (type.format.toLowerCase()) {
                            case "uuid":
                                return "\"00000000-0000-0000-0000-000000000000\"";
                            case "date-time":
                                return "\"0001-01-01 00:00:00\"";
                        }
                    }
                    return "\"string\"";
                case "array":
                    if (type.itemType) {
                        return "[" + this._resolve(type.itemType, bind) + "]";
                    }
                    return "[]";
                case "enum":
                    if (this.definitions[type.definition]) {
                        var properties = this._filter(type.definition, bind);
                        return "\"(" + Enumerable.new(properties).toString('|', function (_) { return _.name + ":" + _.type.value; }) + ")\"";
                    }
                    return "0";
                case "object":
                    if (this.definitions[type.definition]) {
                        if (this._resolved.some(function (_) { return _ == type.definition; }))
                            return "\"(recursive reference: " + type.definition + ")\"";
                        this._resolved.push(type.definition);
                        var properties = this._filter(type.definition, bind);
                        var string = Enumerable.new(properties).select(function (_) {
                            var apiBind = Enumerable.new(bind || []).firstOrDefault(function (_) { return _.name == _.name; });
                            return "\"" + _.name + "\":" + _this._resolve(_.type, apiBind ? apiBind.bind : []);
                        }).toString(",");
                        return JSON.stringify(JSON.parse("{" + string + "}"), null, 4);
                    }
                    return "{}";
                default:
                    return "";
            }
        };
        ExampleComponent.prototype._filter = function (definition, bind) {
            var properties = this.definitions[definition].properties;
            if (bind) {
                var enumerable_1 = Enumerable.new(bind);
                if (this.clude)
                    properties = Enumerable.new(properties).where(function (_) { return enumerable_1.any(function (__) { return __.name == _.name; }); }).toArray();
                else
                    properties = Enumerable.new(properties).where(function (_) { return !enumerable_1.any(function (__) { return __.name == _.name && (__.bind == undefined || __.bind == null || __.bind.length == 0); }); }).toArray();
            }
            return properties;
        };
        ExampleComponent.prototype.ngOnDestroy = function () {
            this.type = null;
            this.definitions = null;
            this._resolved = null;
        };
        ExampleComponent.prototype.ngOnChanges = function () {
            this._resolved = [];
            this.content = this._resolve(this.type, this.bind);
        };
        return ExampleComponent;
    }());
    __decorate$7([
        _angular_core.Input(),
        __metadata$5("design:type", typeof (_a$5 = (typeof models !== "undefined" && models).ApiType) === "function" && _a$5 || Object)
    ], ExampleComponent.prototype, "type", void 0);
    __decorate$7([
        _angular_core.Input(),
        __metadata$5("design:type", Array)
    ], ExampleComponent.prototype, "bind", void 0);
    __decorate$7([
        _angular_core.Input(),
        __metadata$5("design:type", Boolean)
    ], ExampleComponent.prototype, "clude", void 0);
    __decorate$7([
        _angular_core.Input(),
        __metadata$5("design:type", Object)
    ], ExampleComponent.prototype, "definitions", void 0);
    __decorate$7([
        _angular_core.Output(),
        __metadata$5("design:type", String)
    ], ExampleComponent.prototype, "content", void 0);
    ExampleComponent = __decorate$7([
        _angular_core.Component({
            //
            selector: "example",
            template: "<pre>\n{{content}}\n</pre>"
        })
    ], ExampleComponent);
    var _a$5;
    var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$6 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    };
    var __param$3 = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    };
    var TestComponent = (function () {
        function TestComponent(requestService) {
            var _this = this;
            this.requestService = requestService;
            this.setParameterValue = function (source, name, value) {
                if (source == "Header")
                    _this.header[name] = value;
                if (source == "Path")
                    _this.path[name] = value;
                if (source == "Query")
                    _this.query[name] = value;
                if (source == "Body")
                    _this.body[name] = value;
                if (source == "Body")
                    _this.body[name] = value;
                if (source == "FromUri")
                    _this.path[name] = value;
                if (source == "FromBody")
                    _this.body[name] = value;
            };
            this.header = {};
            this.path = {};
            this.query = {};
            this.body = {};
            this.submitting = false;
            this.consumingTime = null;
        }
        TestComponent.prototype.values = function (array) {
            return Enumerable.new(array).toString(',');
        };
        TestComponent.prototype.submit = function () {
            var _this = this;
            this.submitting = true;
            this.consumingTime = 0;
            this.consumingTimer = setInterval(function () {
                _this.consumingTime += 0.01;
            }, 10);
            var url = this.basePath + this.resource.path;
            var header = {};
            for (var key in this.header) {
                header[key] = this.header[key];
            }
            var path = {};
            for (var key in this.path) {
                path[key.toLowerCase()] = this.path[key];
            }
            var match = url.match(/{[^\s}]+}/g); //match在没有匹配的情况下返回null
            match && match.forEach(function (item) {
                var key = item.substr(1, item.length - 2).toLowerCase();
                var value = path[key];
                url = url.replace(item, value || "");
                delete path[key];
            });
            var query = {};
            for (var key in this.query) {
                query[key] = this.query[key];
            }
            for (var key in path) {
                query[key] = path[key];
            }
            var data = {};
            for (var key1 in this.body) {
                try {
                    var value = this.body[key1];
                    if (!/{[^{}]*}/.test(value.trim())) {
                        data[key1] = value;
                        continue;
                    }
                    var model = JSON.parse(value);
                    for (var key2 in model) {
                        data[key2] = model[key2];
                    }
                }
                catch (ex) {
                    continue;
                }
            }
            this.requestService
                .send(this.resource.method, url, query, data, header)
                .subscribe(function (reponse) {
                _this.requestUrl = reponse.url;
                _this.responseCode = reponse.status.toString();
                _this.responseBody = _this._format(reponse.text());
                _this.responseHeaders = JSON.stringify(reponse.headers, null, 4);
                _this.submitting = false;
                clearInterval(_this.consumingTimer);
            }, function (error) {
                _this.requestUrl = error.url;
                _this.responseCode = error.status.toString();
                _this.responseBody = _this._format(error.text());
                _this.responseHeaders = JSON.stringify(error.headers, null, 4);
                _this.submitting = false;
                clearInterval(_this.consumingTimer);
            }, function () {
                _this.submitting = false;
                clearInterval(_this.consumingTimer);
            });
        };
        TestComponent.prototype.close = function () {
            this.section.testing = false;
            this.ngOnChanges();
        };
        TestComponent.prototype._format = function (input) {
            try {
                return JSON.stringify(JSON.parse(input), null, 4);
            }
            catch (e) {
                return input.replace('<', '&lt;').replace('>', '&gt;');
            }
        };
        TestComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.header = (_a = {}, _a["Content-Type"] = (this.resource && this.resource.produces[0]) || "application/json", _a);
            this.path = {};
            this.query = {};
            this.body = {};
            this.headers && this.headers.forEach(function (item) {
                _this.header[item.name] = Enumerable.new(item.values).toString(',');
            });
            this.resource && this.resource.parameters && this.resource.parameters.forEach(function (item) {
                if (item.defaultValue !== undefined && item.defaultValue !== null) {
                    if (item.source == "Header")
                        _this.header[item.name] = item.defaultValue;
                    if (item.source == "Path" || item.source == "FromUri")
                        _this.path[item.name] = item.defaultValue;
                    if (item.source == "Query")
                        _this.query[item.name] = item.defaultValue;
                }
            });
            this.requestUrl = null;
            this.responseCode = null;
            this.responseBody = null;
            this.responseHeaders = null;
            this.submitting = false;
            this.consumingTime = null;
            clearInterval(this.consumingTimer);
            var _a;
        };
        return TestComponent;
    }());
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", Object)
    ], TestComponent.prototype, "section", void 0);
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", String)
    ], TestComponent.prototype, "basePath", void 0);
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", Array)
    ], TestComponent.prototype, "headers", void 0);
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", typeof (_a$6 = (typeof models !== "undefined" && models).ApiResource) === "function" && _a$6 || Object)
    ], TestComponent.prototype, "resource", void 0);
    __decorate$8([
        _angular_core.Output(),
        __metadata$6("design:type", Function)
    ], TestComponent.prototype, "setParameterValue", void 0);
    TestComponent = __decorate$8([
        _angular_core.Component({
            //
            selector: "test",
            template: "<section *ngIf=\"resource\"><h4>\u3010{{resource.method}}\u3011 {{basePath}}{{resource.path}} &nbsp; <span (click)=\"close()\">[<i class=\"fa fa-close\"></i>]</span></h4><div class=\"{{resource.method}}\"><section><div>\u8BF7\u6C42</div><table class=\"list\"><thead><tr><td class=\"name\"></td><td class=\"content\"></td></tr></thead><tbody><tr><td>Content-Type</td><td><select [(ngModel)]=\"header['Content-Type']\"><option value=\"{{produce}}\" [selected]=\"i==0\" *ngFor=\"let produce of resource.produces;let i=index\">{{produce}}</option><option value=\"application/json\" *ngIf=\"!resource.produces||resource.produces.length==0\">application/json</option></select></td></tr><tr *ngFor=\"let item of headers\"><td>{{item.name}}</td><td><input placeholder=\"Header parameter.\" value=\"{{values(item.values)}}\" [(ngModel)]=\"header[item.name]\"></td></tr><tr *ngFor=\"let item of resource.parameters\"><td>{{item.name}}</td><td><input placeholder=\"{{item.source}} parameter.\" *ngIf=\"item.source=='Header'\" [(ngModel)]=\"header[item.name]\" [required]=\"item.required\"> <input placeholder=\"{{item.source}} parameter.\" *ngIf=\"item.source=='Path'||item.source=='FromUri'\" [(ngModel)]=\"path[item.name]\" [required]=\"item.required\"> <input placeholder=\"{{item.source}} parameter.\" *ngIf=\"item.source=='Query'\" [(ngModel)]=\"query[item.name]\" [required]=\"item.required\"><textarea placeholder=\"{{item.source}} parameter.\" *ngIf=\"item.source=='Body'||item.source=='FromBody'\" [(ngModel)]=\"body[item.name]\"></textarea></td></tr></tbody></table></section><section><button type=\"button\" (click)=\"submit()\" [disabled]=\"submitting\"><template [ngIf]=\"submitting\"><i class=\"fa fa-gear fa-spin\"></i> <span>\u63D0\u4EA4\u4E2D\u2026</span></template><template [ngIf]=\"!submitting\"><i class=\"fa fa-play-circle\"></i> <span>\u63D0\u4EA4\u6D4B\u8BD5</span></template></button> <span style=\"float:right\" *ngIf=\"consumingTime!=null\"><i class=\"fa fa-hourglass-end\"></i>\uFF1A{{consumingTime|number:'1.2-2'}} ms</span></section><section><div>\u54CD\u5E94</div><table class=\"list\"><thead><tr><td class=\"name\"></td><td class=\"content\"></td></tr></thead><tbody><tr><td>Url</td><td class=\"url\"><code><pre>\n{{requestUrl}}\n</pre></code></td></tr><tr><td>Http Code</td><td><code><pre>\n{{responseCode}}\n</pre></code></td></tr><tr><td>Response Body</td><td><code><pre>\n{{responseBody}}\n</pre></code></td></tr><tr><td>Response Headers</td><td><code><pre>\n{{responseHeaders}}\n</pre></code></td></tr></tbody></table></section></div></section>"
        }),
        __param$3(0, _angular_core.Inject(RequestService)),
        __metadata$6("design:paramtypes", [typeof (_b$3 = (typeof services !== "undefined" && services).RequestService) === "function" && _b$3 || Object])
    ], TestComponent);
    var _a$6;
    var _b$3;
    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Module = (function () {
        function Module() {
        }
        return Module;
    }());
    Module = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_platformBrowser.BrowserModule,
                FormsModule,
                _angular_http.HttpModule
            ],
            declarations: [
                IndexComponent,
                NavigatorComponent,
                InfoComponent,
                MainComponent,
                DefinitionComponent,
                ExampleComponent,
                TestComponent
            ],
            providers: [
                _angular_common.Location,
                {
                    provide: _angular_common.LocationStrategy,
                    useClass: _angular_common.PathLocationStrategy
                },
                RequestService
            ],
            bootstrap: [
                IndexComponent
            ]
        })
    ], Module);
    _angular_core.enableProdMode();
    _angular_platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(Module)
        .catch(function (err) { return console.log(err); });
}(angular._angular_core, angular._angular_platformBrowserDynamic, angular._angular_common, angular._angular_platformBrowser, angular._angular_http));
//# sourceMappingURL=js.js.map
