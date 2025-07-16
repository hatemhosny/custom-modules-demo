/* esm.sh - react@19.1.0/compiler-runtime */
import * as __0$ from 'react';
var require = (n) => {
  const e = (m) => (typeof m.default < 'u' ? m.default : m),
    c = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case 'react':
      return e(__0$);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var p = Object.create;
var u = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf,
  d = Object.prototype.hasOwnProperty;
var R = ((e) =>
  typeof require < 'u'
    ? require
    : typeof Proxy < 'u'
      ? new Proxy(e, { get: (r, t) => (typeof require < 'u' ? require : r)[t] })
      : e)(function (e) {
  if (typeof require < 'u') return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var _ = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var f = (e, r, t, o) => {
  if ((r && typeof r == 'object') || typeof r == 'function')
    for (let s of E(r))
      !d.call(e, s) &&
        s !== t &&
        u(e, s, { get: () => r[s], enumerable: !(o = N(r, s)) || o.enumerable });
  return e;
};
var O = (e, r, t) => (
  (t = e != null ? p(l(e)) : {}),
  f(r || !e || !e.__esModule ? u(t, 'default', { value: e, enumerable: !0 }) : t, e)
);
var n = _((i) => {
  'use strict';
  var S = R('react').__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  i.c = function (e) {
    return S.H.useMemoCache(e);
  };
});
var m = _((x, a) => {
  'use strict';
  a.exports = n();
});
var c = O(m()),
  { c: A } = c,
  q = c.default ?? c;
export { A as c, q as default };
/*! Bundled license information:

react/cjs/react-compiler-runtime.production.js:
  (**
   * @license React
   * react-compiler-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
