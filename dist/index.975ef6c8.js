// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
const brand = 'EM';
(function() {
    /**
	 * @function CMG_TrkData
	 * @class
	 * @description Generates and updates a cookie in the browser, tracking various details at each page load.
	 * @author CMG Dev Team
	 */ this.TrkData = function(brand1) {
        /**
		 * Define globals
		 */ /**
		 * TODO brands array to validate brand
		 */ console.log(brand1);
        /**
		 * List of Data Points
		 * A corresponding defining function, prepended with "DP" should also reside in this class
		 * formFill() function should also be updated to autofill Marketo fields.
		 * @member {Array}
		 */ this.cookieDataPoints = [
            'referralURL',
            'lastReferralURL',
            'landingPageURL',
            'lastLandingPageURL',
            'signupVar', 
        ];
        /**
		 * Name of cookie
		 * @member {string}
		 */ this.cookieName = '_cmgTrkData';
        /**
		 * Expiry (in days) of cookie
		 * @member {number}
		 */ this.cookieDays = 365;
        /**
		 * Host name of cookie (populates automatically if not manually updated )
		 * @member {string}
		 */ this.cookieHost = false;
        /**
		 * Path of cookie
		 * @member {string}
		 */ this.cookiePath = escape('/');
        /**
		 * Data to be housed in cookie
		 * @member {Object}
		 */ this.cookieData = {
        };
        /**
		 * Data Points
		 */ /**
		 * @function DPreferralURL
		 * @description Defines the referrer URL of the users first visit to the website. If the value already exists, function returns the existing value.
		 * @return {url} URL of the referring webpage
		 */ this.DPreferralURL = function() {
            if (!this.cookieData.hasOwnProperty('referralURL')) return document.referrer;
            else return this.cookieData.referralURL;
        };
        /**
		 * @function DPlastReferralURL
		 * @description Defines the last external referrer URL of the users return visit to the website. If the value already exists and no external referrer is present, function returns the existing value.
		 * @return {url} URL of the referring webpage
		 */ this.DPlastReferralURL = function() {
            if (document.referrer && document.referrer.indexOf(location.protocol + '//' + location.host) === -1) return document.referrer;
            else if (!this.cookieData.hasOwnProperty('lastReferralURL')) return document.referrer;
            else return this.cookieData.lastReferralURL;
        };
        /**
		 * @function DPlandingPageURL
		 * @description Defines the entry page the user came to for the first time seeing the website. If the value already exists, function returns the existing value.
		 * @return {url} URL of the landing webpage
		 */ this.DPlandingPageURL = function() {
            if (!this.cookieData.hasOwnProperty('landingPageURL')) return location.href;
            else return this.cookieData.landingPageURL;
        };
        /**
		 * @function DPlastLandingPageURL
		 * @description Defines the entry page the user came to for a return visit to the website from an external source. If the value already exists and no external referrer is present, function returns the existing value.
		 * @return {url} URL of the landing webpage
		 */ this.DPlastLandingPageURL = function() {
            if (document.referrer && document.referrer.indexOf(location.protocol + '//' + location.host) === -1) return location.href;
            else if (!this.cookieData.hasOwnProperty('lastLandingPageURL')) return location.href;
            else return this.cookieData.lastLandingPageURL;
        };
        /**
		 * @function DPsignupVar
		 * @description Defines the signup value on the current page. If the value is not set in the query string, the existing value is returned, if present.
		 * @return {string} signup value
		 */ this.DPsignupVar = function() {
            var currentSV = '';
            if (this.cookieData.hasOwnProperty('signupVar')) currentSV = this.cookieData.signupVar;
            var signupVar = this.getQuerystringParamByName('sv') || currentSV;
            return signupVar.replace(/[^a-z0-9]/gi, '');
        };
        /*
		 * Query String
		 */ /**
		 * @function getUTMParams
		 * @description Obtains all variables and their values with keys that begin with 'utm_'
		 * @return {Object} All keys and values found
		 */ this.getUTMParams = function(url) {
            var vars = {
            };
            var parts = url.replace(/[?&]+(utm_[^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            // Add gclid as a custom UTM var given its accompanied by them
            var gclid = url.replace(/[?&]+(gclid)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            console.log(vars);
            return vars;
        };
        /**
		 * @function getMarinParams
		 * @description Obtains all variables and their values with keys
		 * @return {Object} All keys and values found
		 */ this.getMarinParams = function(url) {
            var vars = {
            };
            var values = url.replace(/[?&]+(mkwid)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars['mkwid'] || null;
        };
        /**
		 * @function getQuerystringParamByName
		 * @description Finds requested querystring and returns its value
		 * @param {string} name - Name of querystring key
		 * @return {string} Value of requested querystring variable
		 */ this.getQuerystringParamByName = function(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        };
        /*
		 * Supporting data
		 */ /**
		 * @function defineCookieHost
		 * @description Defines the host name for the cookie
		 * @return {string} host name for the cookies "domain" value
		 */ this.defineCookieHost = function() {
            if (/^localhost(\:\d+)?$/.test(location.host)) return;
            else {
                var host = location.host;
                host = host.split('.');
                host = host.splice(host.length - 2, host.length).join('.');
                return escape('.' + host);
            }
        };
        /**
		 * @function isEmptyObj
		 * @description Checks if the given object is empty
		 * @param {Object} obj - Object to be checked
		 * @return {boolean} confirmation of whether object is empty
		 */ this.isEmptyObj = function(obj) {
            for(var prop in obj){
                if (obj.hasOwnProperty(prop)) return false;
            }
            return true;
        };
        /**
		 * @function JSONparse
		 * @description Checks if the given string is JSON and parses, otherwise returns string
		 * @param {string} json - String to be checked
		 * @return {Object|string|boolean} Depending the outcome, a parsed JSON object, the entered value or a false boolean will be returned
		 */ this.JSONparse = function(json) {
            var parsed = false;
            try {
                parsed = JSON.parse(json);
                if (parsed && typeof parsed === 'object') return parsed;
                else return json;
            } catch (e) {
                return json;
            }
            return parsed;
        };
        /**
		 * @function countObj
		 * @description Counts object values
		 * @param {Object} obj - Object to be counted
		 * @return {number} number of keys present in object
		 */ this.countObj = function(obj) {
            var size = 0, key;
            for(key in obj)if (obj.hasOwnProperty(key)) size++;
            return size;
        };
        /**
		 * @function extendObject
		 * @description Merges two objects together, working the second into the first
		 * @param {Object} obj - Object to be merged into
		 * @param {Object} src - Object to be merged from
		 * @return {Object} Merged object
		 */ this.extendObject = function(obj, src) {
            for(var key in src)if (src.hasOwnProperty(key)) obj[key] = src[key];
            return obj;
        };
        /*
		 * Cross browser base64 encoder/decoder
		 */ var Base64 = {
            _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            encode: function(e) {
                var t = '';
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while(f < e.length){
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) u = a = 64;
                    else if (isNaN(i)) a = 64;
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
                }
                return t;
            },
            decode: function(e) {
                var t = '';
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                while(f < e.length){
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) t = t + String.fromCharCode(r);
                    if (a != 64) t = t + String.fromCharCode(i);
                }
                t = Base64._utf8_decode(t);
                return t;
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, '\n');
                var t = '';
                for(var n = 0; n < e.length; n++){
                    var r = e.charCodeAt(n);
                    if (r < 128) t += String.fromCharCode(r);
                    else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128);
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128);
                    }
                }
                return t;
            },
            _utf8_decode: function(e) {
                var t = '';
                var n = 0;
                var r = c1 = c2 = 0;
                while(n < e.length){
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2;
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            }
        };
        /**
		 * @function encode
		 * @description Encodes a given string
		 * @param {string} str - String to be encoded
		 * @return {string} Encoded string
		 */ this.encode = function(str) {
            if (window.btoa) return window.btoa(unescape(encodeURIComponent(str)));
            else return Base64.encode(unescape(encodeURIComponent(str)));
        };
        /**
		 * @function decode
		 * @description Decodes an encoded string
		 * @param {string} str - String to be decoded
		 * @return {string} Decoded string
		 */ this.decode = function(str) {
            try {
                if (window.atob) return decodeURIComponent(escape(window.atob(str)));
                else return decodeURIComponent(escape(Base64.decode(str)));
            } catch (e) {
                return str;
            }
        };
        /**
		 * Cookie control
		 */ /**
		 * @function processCookie
		 * @description Obtains values from functions to populate the cookie with - creating or updating values if already defined, assigning any override value if provided
		 * @param {Object} overrides - keys and values in this object will add/override values in the cookie
		 */ this.processCookie = function(overrides) {
            var cookie = this.getCookie(this.cookieName);
            if (cookie && typeof cookie === 'object') this.cookieData = cookie;
            if (typeof overrides === 'undefined') overrides = {
            };
            for(var dp = 0; dp < this.cookieDataPoints.length; dp++){
                var func = 'DP' + this.cookieDataPoints[dp];
                this.cookieData[this.cookieDataPoints[dp]] = this[func]();
            }
            this.cookieData = this.extendObject(this.cookieData, overrides);
            this.setCookie();
        };
        /**
		 * @function getCookie
		 * @description Obtains existing cookie. Cookie value assumed to be encoded
		 * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
		 * @return {Object|string} values stored in cookie
		 * @todo add in checks to ensure value is able to be decoded and parsed as JSON
		 */ this.getCookie = function(cookieName) {
            if (typeof cookieName === 'undefined') cookieName = this.cookieName;
            var results = document.cookie.match(cookieName + '=(.*?)(;|$)');
            if (results) {
                var cookieValue = results[1];
                cookieValue = this.decode(cookieValue);
                cookieValue = this.JSONparse(cookieValue);
                return cookieValue;
            } else return null;
        };
        /**
		 * @function setCookie
		 * @description Sets cookie with defined values to the browser. Object is stringified into JSON and encoded for storage.
		 * @param {Object} data - key/value items to be stored in cookie
		 * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
		 * @param {boolean} encodeData - By default data in cookies are encoded unless set to false
		 */ this.setCookie = function(data, cookieName, encodeData) {
            if (typeof cookieName === 'undefined') cookieName = this.cookieName;
            if (typeof encodeData === 'undefined') encodeData = true;
            if (typeof data === 'undefined') data = this.cookieData;
            if (this.cookieHost === false) this.cookieHost = this.defineCookieHost();
            if (typeof data === 'object') data = JSON.stringify(data);
            if (encodeData) data = this.encode(data);
            var cookie_string = cookieName + '=' + data;
            var expires = new Date();
            expires.setDate(expires.getDate() + this.cookieDays);
            cookie_string += '; expires=' + expires.toGMTString();
            cookie_string += '; path=' + this.cookiePath;
            cookie_string += '; domain=' + this.cookieHost;
            document.cookie = cookie_string;
        };
        /**
		 * @function deleteCookie
		 * @description Delete cookie
		 * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
		 */ this.deleteCookie = function(cookieName) {
            if (typeof cookieName === 'undefined') cookieName = this.cookieName;
            var cookie_string = cookieName + '=';
            if (this.cookieHost === false) this.cookieHost = this.defineCookieHost();
            var expires = new Date();
            expires.setDate(expires.getDate() - 9999);
            cookie_string += '; expires=' + expires.toGMTString();
            cookie_string += '; path=' + this.cookiePath;
            cookie_string += '; domain=' + this.cookieHost;
            document.cookie = cookie_string;
        };
        /**
		 * Form automation
		 */ /**
		 * @function mktoFormFill
		 * @description If Marketo form fields are present, look for expected hidden fields and automatically populate them
		 */ this.mktoFormFill = function() {
            // var CDE_data = this.getCookie();
            var CDE_data = 'eyJmaXJzdFZpc2l0IjoiV2VkLCAyNyBPY3QgMjAyMSAyMDowNTo1MCBHTVQiLCJyZWZlcnJlclVSTCI6IiIsImxhc3RSZWZlcnJlclVSTCI6Imh0dHBzOi8vYXBwLmFzYW5hLmNvbS8iLCJsYW5kaW5nVVJMIjoiaHR0cHM6Ly9teWVtbWEuY29tL2VtbWEtMTAxL2VtYWlsLWxpYnJhcnkiLCJsYXN0TGFuZGluZ1VSTCI6Imh0dHBzOi8vZGV2Lm15ZW1tYS5jb20vc2lnbi11cCIsImxhc3RWaWV3ZWRVUkwiOiJodHRwczovL215ZW1tYS5jb20vIiwic2lnbnVwVmFyIjoiaG9tZXBhZ2VuYXYifQ==';
            var $this = this;
            if (typeof MktoForms2 === 'undefined') return false;
            else MktoForms2.onFormRender(function() {
                // signupVar
                var signvarElements = document.getElementsByName('SV_Value');
                for(var i = 0; i < signvarElements.length; i++)if (signvarElements[i] && !signvarElements[i].value) // don't populate an already populated signupVar form value
                signvarElements[i].value = CDE_data.signupVar;
                // referralURL
                var ref_urls = document.getElementsByName('Referral_URL__c');
                for(var i = 0; i < ref_urls.length; i++)if (ref_urls[i] !== null) ref_urls[i].value = encodeURIComponent(CDE_data.referralURL);
                // landingPageURL
                var lp_urls = document.getElementsByName('LandingPageURL');
                for(var i = 0; i < lp_urls.length; i++)if (lp_urls[i] !== null) lp_urls[i].value = encodeURIComponent(CDE_data.landingPageURL);
                // lastReferralURL
                var last_ref_urls = document.getElementsByName('Last_Referral_URL__c');
                for(var i = 0; i < last_ref_urls.length; i++)if (last_ref_urls[i] !== null) last_ref_urls[i].value = encodeURIComponent(CDE_data.lastReferralURL);
                // lastLandingPageURL
                var last_lp_urls = document.getElementsByName('lastLandingPageURL');
                for(var i = 0; i < last_lp_urls.length; i++)if (last_lp_urls[i] !== null) last_lp_urls[i].value = encodeURIComponent(CDE_data.lastLandingPageURL);
                // Parse out UTM vars from Landing URL and populate
                var cmLandingUTMs = $this.getUTMParams(CDE_data.landingPageURL);
                for(var param in cmLandingUTMs){
                    var raw = param.replace('utm_', '');
                    var field_name = '';
                    if (raw !== 'gclid') field_name = 'UTM_';
                    field_name += raw.charAt(0).toUpperCase() + raw.slice(1) + '__c';
                    field_name = field_name.replace('Campaign_id', 'Campaign_Id');
                    var fields = document.getElementsByName(field_name);
                    for(var i = 0; i < fields.length; i++)if (cmLandingUTMs.hasOwnProperty(param) && fields[i] !== null) fields[i].value = encodeURIComponent(cmLandingUTMs[param]);
                }
                // Parse out UTM vars from Last Landing URL and populate
                var cmLastLandingUTMs = $this.getUTMParams(CDE_data.lastLandingPageURL);
                for(var param in cmLastLandingUTMs){
                    var raw = param.replace('utm_', '');
                    var field_name = '';
                    if (raw !== 'gclid') field_name = 'Last_UTM_';
                    field_name += raw.charAt(0).toUpperCase() + raw.slice(1) + '__c';
                    field_name = field_name.replace('Campaign_id', 'Campaign_Id');
                    var fields = document.getElementsByName(field_name);
                    for(var i = 0; i < fields.length; i++)if (cmLastLandingUTMs.hasOwnProperty(param) && fields[i] !== null) fields[i].value = encodeURIComponent(cmLastLandingUTMs[param]);
                }
                // Parse out Marin KW ID var from URLs and populate
                var cmLandingMarin = $this.getMarinParams(CDE_data.landingPageURL);
                var cmLastLandingMarin = $this.getMarinParams(CDE_data.lastLandingPageURL);
                var marin_kwid = document.getElementsByName('Marin_KWID__c');
                var mkwid = cmLandingMarin || cmLastLandingMarin || null;
                if (marin_kwid.length === 1 && mkwid !== null) marin_kwid[0].value = encodeURIComponent(mkwid);
            });
        };
        /**
		 * @function waitForMkto
		 * @description Watch page and wait for a Marketo form to be present in DOM. Once found, run form fill function and disconnect.
		 * @todo Handle the event of the page not finding a Marketo and disconnect accordingly to potentially prevent memory leaks and/or CPU load. From all research, shouldn't be a problem however need to monitor.
		 */ this.waitForMkto = function() {
            var $this = this;
            var observer = new MutationObserver(function(mutations) {
                for(var i = 0; i < mutations.length; i++){
                    for(var j = 0; j < mutations[i].addedNodes.length; j++)if (typeof mutations[i].addedNodes[j].matches !== 'undefined' && mutations[i].addedNodes[j].matches('form.mktoForm')) {
                        var complete = $this.mktoFormFill();
                        if (complete) observer.disconnect();
                    }
                }
            });
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        };
        /**
		 * Legacy handling
		 */ /**
		 * @function cmCookieData
		 * @description Handling existing CM cookie data and reformat into current cookie
		 */ this.cmCookieData = function() {
            var cookieData = this.getCookie('CM-Ref');
            if (cookieData) {
                cookieData = unescape(cookieData).split('|');
                this.cookieData.referralURL = cookieData[0];
                this.cookieData.firstVisit = cookieData[1];
                this.cookieData.landingPageURL = cookieData[2];
                this.cookieData.signupVar = cookieData[3];
                this.cookieData.lastReferralURL = cookieData[4];
                this.cookieData.lastLandingPageURL = cookieData[5];
                this.setCookie(cookieData[6], 'CM-currency', false);
                this.deleteCookie('CM-Ref');
            }
        };
        /**
		 * Action functions
		 */ this.cmCookieData();
        this.processCookie();
        this.waitForMkto();
    };
})();
var CMG_TrkData = new TrkData(brand);

},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire4ee4")

//# sourceMappingURL=index.975ef6c8.js.map
