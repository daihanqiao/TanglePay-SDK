/**
 * @license
 * author:
 * tanglepaysdk-common.js v0.1.8
 * Released under the ISC license.
 */
var TanglePaySdkCommon = (function (e) {
  'use strict';
  var t = function (e, n) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      t(e, n)
    );
  };
  function n(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function r(e, t) {
    var n,
      r,
      i,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(a) {
      return function (u) {
        return (function (a) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; o && ((o = 0), a[0] && (s = 0)), s; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & a[0]
                      ? r.return
                      : a[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, a[1])).done)
              )
                return i;
              switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, (r = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((i = s.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    (s.label = i[1]), (i = a);
                    break;
                  }
                  if (i && s.label < i[2]) {
                    (s.label = i[2]), s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              (a = [6, e]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, u]);
      };
    }
  }
  function i() {}
  function o() {
    o.init.call(this);
  }
  function s(e) {
    return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
  }
  function a(e, t, n, r) {
    var o, a, u, f;
    if ('function' != typeof n)
      throw new TypeError('"listener" argument must be a function');
    if (
      ((a = e._events)
        ? (a.newListener &&
            (e.emit('newListener', t, n.listener ? n.listener : n),
            (a = e._events)),
          (u = a[t]))
        : ((a = e._events = new i()), (e._eventsCount = 0)),
      u)
    ) {
      if (
        ('function' == typeof u
          ? (u = a[t] = r ? [n, u] : [u, n])
          : r
          ? u.unshift(n)
          : u.push(n),
        !u.warned && (o = s(e)) && o > 0 && u.length > o)
      ) {
        u.warned = !0;
        var h = new Error(
          'Possible EventEmitter memory leak detected. ' +
            u.length +
            ' ' +
            t +
            ' listeners added. Use emitter.setMaxListeners() to increase limit',
        );
        (h.name = 'MaxListenersExceededWarning'),
          (h.emitter = e),
          (h.type = t),
          (h.count = u.length),
          (f = h),
          'function' == typeof console.warn ? console.warn(f) : console.log(f);
      }
    } else (u = a[t] = n), ++e._eventsCount;
    return e;
  }
  function u(e, t, n) {
    var r = !1;
    function i() {
      e.removeListener(t, i), r || ((r = !0), n.apply(e, arguments));
    }
    return (i.listener = n), i;
  }
  function f(e) {
    var t = this._events;
    if (t) {
      var n = t[e];
      if ('function' == typeof n) return 1;
      if (n) return n.length;
    }
    return 0;
  }
  function h(e, t) {
    for (var n = new Array(t); t--; ) n[t] = e[t];
    return n;
  }
  (i.prototype = Object.create(null)),
    (o.EventEmitter = o),
    (o.usingDomains = !1),
    (o.prototype.domain = void 0),
    (o.prototype._events = void 0),
    (o.prototype._maxListeners = void 0),
    (o.defaultMaxListeners = 10),
    (o.init = function () {
      (this.domain = null),
        o.usingDomains && undefined.active,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new i()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (o.prototype.setMaxListeners = function (e) {
      if ('number' != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return (this._maxListeners = e), this;
    }),
    (o.prototype.getMaxListeners = function () {
      return s(this);
    }),
    (o.prototype.emit = function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u = 'error' === e;
      if ((s = this._events)) u = u && null == s.error;
      else if (!u) return !1;
      if (((a = this.domain), u)) {
        if (((t = arguments[1]), !a)) {
          if (t instanceof Error) throw t;
          var f = new Error('Uncaught, unspecified "error" event. (' + t + ')');
          throw ((f.context = t), f);
        }
        return (
          t || (t = new Error('Uncaught, unspecified "error" event')),
          (t.domainEmitter = this),
          (t.domain = a),
          (t.domainThrown = !1),
          a.emit('error', t),
          !1
        );
      }
      if (!(n = s[e])) return !1;
      var c = 'function' == typeof n;
      switch ((r = arguments.length)) {
        case 1:
          !(function (e, t, n) {
            if (t) e.call(n);
            else
              for (var r = e.length, i = h(e, r), o = 0; o < r; ++o)
                i[o].call(n);
          })(n, c, this);
          break;
        case 2:
          !(function (e, t, n, r) {
            if (t) e.call(n, r);
            else
              for (var i = e.length, o = h(e, i), s = 0; s < i; ++s)
                o[s].call(n, r);
          })(n, c, this, arguments[1]);
          break;
        case 3:
          !(function (e, t, n, r, i) {
            if (t) e.call(n, r, i);
            else
              for (var o = e.length, s = h(e, o), a = 0; a < o; ++a)
                s[a].call(n, r, i);
          })(n, c, this, arguments[1], arguments[2]);
          break;
        case 4:
          !(function (e, t, n, r, i, o) {
            if (t) e.call(n, r, i, o);
            else
              for (var s = e.length, a = h(e, s), u = 0; u < s; ++u)
                a[u].call(n, r, i, o);
          })(n, c, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (i = new Array(r - 1), o = 1; o < r; o++) i[o - 1] = arguments[o];
          !(function (e, t, n, r) {
            if (t) e.apply(n, r);
            else
              for (var i = e.length, o = h(e, i), s = 0; s < i; ++s)
                o[s].apply(n, r);
          })(n, c, this, i);
      }
      return !0;
    }),
    (o.prototype.addListener = function (e, t) {
      return a(this, e, t, !1);
    }),
    (o.prototype.on = o.prototype.addListener),
    (o.prototype.prependListener = function (e, t) {
      return a(this, e, t, !0);
    }),
    (o.prototype.once = function (e, t) {
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, u(this, e, t)), this;
    }),
    (o.prototype.prependOnceListener = function (e, t) {
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, u(this, e, t)), this;
    }),
    (o.prototype.removeListener = function (e, t) {
      var n, r, o, s, a;
      if ('function' != typeof t)
        throw new TypeError('"listener" argument must be a function');
      if (!(r = this._events)) return this;
      if (!(n = r[e])) return this;
      if (n === t || (n.listener && n.listener === t))
        0 == --this._eventsCount
          ? (this._events = new i())
          : (delete r[e],
            r.removeListener &&
              this.emit('removeListener', e, n.listener || t));
      else if ('function' != typeof n) {
        for (o = -1, s = n.length; s-- > 0; )
          if (n[s] === t || (n[s].listener && n[s].listener === t)) {
            (a = n[s].listener), (o = s);
            break;
          }
        if (o < 0) return this;
        if (1 === n.length) {
          if (((n[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new i()), this;
          delete r[e];
        } else
          !(function (e, t) {
            for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
              e[n] = e[r];
            e.pop();
          })(n, o);
        r.removeListener && this.emit('removeListener', e, a || t);
      }
      return this;
    }),
    (o.prototype.off = function (e, t) {
      return this.removeListener(e, t);
    }),
    (o.prototype.removeAllListeners = function (e) {
      var t, n;
      if (!(n = this._events)) return this;
      if (!n.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new i()), (this._eventsCount = 0))
            : n[e] &&
              (0 == --this._eventsCount
                ? (this._events = new i())
                : delete n[e]),
          this
        );
      if (0 === arguments.length) {
        for (var r, o = Object.keys(n), s = 0; s < o.length; ++s)
          'removeListener' !== (r = o[s]) && this.removeAllListeners(r);
        return (
          this.removeAllListeners('removeListener'),
          (this._events = new i()),
          (this._eventsCount = 0),
          this
        );
      }
      if ('function' == typeof (t = n[e])) this.removeListener(e, t);
      else if (t)
        do {
          this.removeListener(e, t[t.length - 1]);
        } while (t[0]);
      return this;
    }),
    (o.prototype.listeners = function (e) {
      var t,
        n = this._events;
      return n && (t = n[e])
        ? 'function' == typeof t
          ? [t.listener || t]
          : (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(t)
        : [];
    }),
    (o.listenerCount = function (e, t) {
      return 'function' == typeof e.listenerCount
        ? e.listenerCount(t)
        : f.call(e, t);
    }),
    (o.prototype.listenerCount = f),
    (o.prototype.eventNames = function () {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    });
  var c =
      'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : {},
    l = [],
    d = [],
    p = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
    g = !1;
  function v() {
    g = !0;
    for (
      var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        t = 0;
      t < 64;
      ++t
    )
      (l[t] = e[t]), (d[e.charCodeAt(t)] = t);
    (d['-'.charCodeAt(0)] = 62), (d['_'.charCodeAt(0)] = 63);
  }
  function w(e, t, n) {
    for (var r, i, o = [], s = t; s < n; s += 3)
      (r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
        o.push(
          l[((i = r) >> 18) & 63] +
            l[(i >> 12) & 63] +
            l[(i >> 6) & 63] +
            l[63 & i],
        );
    return o.join('');
  }
  function y(e) {
    var t;
    g || v();
    for (
      var n = e.length, r = n % 3, i = '', o = [], s = 16383, a = 0, u = n - r;
      a < u;
      a += s
    )
      o.push(w(e, a, a + s > u ? u : a + s));
    return (
      1 === r
        ? ((t = e[n - 1]),
          (i += l[t >> 2]),
          (i += l[(t << 4) & 63]),
          (i += '=='))
        : 2 === r &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          (i += l[t >> 10]),
          (i += l[(t >> 4) & 63]),
          (i += l[(t << 2) & 63]),
          (i += '=')),
      o.push(i),
      o.join('')
    );
  }
  function b(e, t, n, r, i) {
    var o,
      s,
      a = 8 * i - r - 1,
      u = (1 << a) - 1,
      f = u >> 1,
      h = -7,
      c = n ? i - 1 : 0,
      l = n ? -1 : 1,
      d = e[t + c];
    for (
      c += l, o = d & ((1 << -h) - 1), d >>= -h, h += a;
      h > 0;
      o = 256 * o + e[t + c], c += l, h -= 8
    );
    for (
      s = o & ((1 << -h) - 1), o >>= -h, h += r;
      h > 0;
      s = 256 * s + e[t + c], c += l, h -= 8
    );
    if (0 === o) o = 1 - f;
    else {
      if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
      (s += Math.pow(2, r)), (o -= f);
    }
    return (d ? -1 : 1) * s * Math.pow(2, o - r);
  }
  function m(e, t, n, r, i, o) {
    var s,
      a,
      u,
      f = 8 * o - i - 1,
      h = (1 << f) - 1,
      c = h >> 1,
      l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      d = r ? 0 : o - 1,
      p = r ? 1 : -1,
      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((a = isNaN(t) ? 1 : 0), (s = h))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
            (t += s + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) * u >= 2 &&
              (s++, (u /= 2)),
            s + c >= h
              ? ((a = 0), (s = h))
              : s + c >= 1
              ? ((a = (t * u - 1) * Math.pow(2, i)), (s += c))
              : ((a = t * Math.pow(2, c - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      e[n + d] = 255 & a, d += p, a /= 256, i -= 8
    );
    for (
      s = (s << i) | a, f += i;
      f > 0;
      e[n + d] = 255 & s, d += p, s /= 256, f -= 8
    );
    e[n + d - p] |= 128 * g;
  }
  var _ = {}.toString,
    E =
      Array.isArray ||
      function (e) {
        return '[object Array]' == _.call(e);
      };
  function R() {
    return A.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function S(e, t) {
    if (R() < t) throw new RangeError('Invalid typed array length');
    return (
      A.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = A.prototype)
        : (null === e && (e = new A(t)), (e.length = t)),
      e
    );
  }
  function A(e, t, n) {
    if (!(A.TYPED_ARRAY_SUPPORT || this instanceof A)) return new A(e, t, n);
    if ('number' == typeof e) {
      if ('string' == typeof t)
        throw new Error(
          'If encoding is specified then the first argument must be a string',
        );
      return T(this, e);
    }
    return L(this, e, t, n);
  }
  function L(e, t, n, r) {
    if ('number' == typeof t)
      throw new TypeError('"value" argument must not be a number');
    return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
      ? (function (e, t, n, r) {
          if ((t.byteLength, n < 0 || t.byteLength < n))
            throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < n + (r || 0))
            throw new RangeError("'length' is out of bounds");
          t =
            void 0 === n && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, n)
              : new Uint8Array(t, n, r);
          A.TYPED_ARRAY_SUPPORT
            ? ((e = t).__proto__ = A.prototype)
            : (e = M(e, t));
          return e;
        })(e, t, n, r)
      : 'string' == typeof t
      ? (function (e, t, n) {
          ('string' == typeof n && '' !== n) || (n = 'utf8');
          if (!A.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | C(t, n);
          e = S(e, r);
          var i = e.write(t, n);
          i !== r && (e = e.slice(0, i));
          return e;
        })(e, t, n)
      : (function (e, t) {
          if (x(t)) {
            var n = 0 | P(t.length);
            return 0 === (e = S(e, n)).length || t.copy(e, 0, 0, n), e;
          }
          if (t) {
            if (
              ('undefined' != typeof ArrayBuffer &&
                t.buffer instanceof ArrayBuffer) ||
              'length' in t
            )
              return 'number' != typeof t.length || (r = t.length) != r
                ? S(e, 0)
                : M(e, t);
            if ('Buffer' === t.type && E(t.data)) return M(e, t.data);
          }
          var r;
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
          );
        })(e, t);
  }
  function k(e) {
    if ('number' != typeof e)
      throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }
  function T(e, t) {
    if ((k(t), (e = S(e, t < 0 ? 0 : 0 | P(t))), !A.TYPED_ARRAY_SUPPORT))
      for (var n = 0; n < t; ++n) e[n] = 0;
    return e;
  }
  function M(e, t) {
    var n = t.length < 0 ? 0 : 0 | P(t.length);
    e = S(e, n);
    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
    return e;
  }
  function P(e) {
    if (e >= R())
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          R().toString(16) +
          ' bytes',
      );
    return 0 | e;
  }
  function x(e) {
    return !(null == e || !e._isBuffer);
  }
  function C(e, t) {
    if (x(e)) return e.length;
    if (
      'undefined' != typeof ArrayBuffer &&
      'function' == typeof ArrayBuffer.isView &&
      (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    )
      return e.byteLength;
    'string' != typeof e && (e = '' + e);
    var n = e.length;
    if (0 === n) return 0;
    for (var r = !1; ; )
      switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return n;
        case 'utf8':
        case 'utf-8':
        case void 0:
          return oe(e).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * n;
        case 'hex':
          return n >>> 1;
        case 'base64':
          return se(e).length;
        default:
          if (r) return oe(e).length;
          (t = ('' + t).toLowerCase()), (r = !0);
      }
  }
  function O(e, t, n) {
    var r = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
      return '';
    if ((n >>>= 0) <= (t >>>= 0)) return '';
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return $(this, t, n);
        case 'utf8':
        case 'utf-8':
          return F(this, t, n);
        case 'ascii':
          return G(this, t, n);
        case 'latin1':
        case 'binary':
          return J(this, t, n);
        case 'base64':
          return W(this, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return V(this, t, n);
        default:
          if (r) throw new TypeError('Unknown encoding: ' + e);
          (e = (e + '').toLowerCase()), (r = !0);
      }
  }
  function B(e, t, n) {
    var r = e[t];
    (e[t] = e[n]), (e[n] = r);
  }
  function j(e, t, n, r, i) {
    if (0 === e.length) return -1;
    if (
      ('string' == typeof n
        ? ((r = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      isNaN(n) && (n = i ? 0 : e.length - 1),
      n < 0 && (n = e.length + n),
      n >= e.length)
    ) {
      if (i) return -1;
      n = e.length - 1;
    } else if (n < 0) {
      if (!i) return -1;
      n = 0;
    }
    if (('string' == typeof t && (t = A.from(t, r)), x(t)))
      return 0 === t.length ? -1 : U(e, t, n, r, i);
    if ('number' == typeof t)
      return (
        (t &= 255),
        A.TYPED_ARRAY_SUPPORT &&
        'function' == typeof Uint8Array.prototype.indexOf
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, n)
            : Uint8Array.prototype.lastIndexOf.call(e, t, n)
          : U(e, [t], n, r, i)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function U(e, t, n, r, i) {
    var o,
      s = 1,
      a = e.length,
      u = t.length;
    if (
      void 0 !== r &&
      ('ucs2' === (r = String(r).toLowerCase()) ||
        'ucs-2' === r ||
        'utf16le' === r ||
        'utf-16le' === r)
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (s = 2), (a /= 2), (u /= 2), (n /= 2);
    }
    function f(e, t) {
      return 1 === s ? e[t] : e.readUInt16BE(t * s);
    }
    if (i) {
      var h = -1;
      for (o = n; o < a; o++)
        if (f(e, o) === f(t, -1 === h ? 0 : o - h)) {
          if ((-1 === h && (h = o), o - h + 1 === u)) return h * s;
        } else -1 !== h && (o -= o - h), (h = -1);
    } else
      for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
        for (var c = !0, l = 0; l < u; l++)
          if (f(e, o + l) !== f(t, l)) {
            c = !1;
            break;
          }
        if (c) return o;
      }
    return -1;
  }
  function D(e, t, n, r) {
    n = Number(n) || 0;
    var i = e.length - n;
    r ? (r = Number(r)) > i && (r = i) : (r = i);
    var o = t.length;
    if (o % 2 != 0) throw new TypeError('Invalid hex string');
    r > o / 2 && (r = o / 2);
    for (var s = 0; s < r; ++s) {
      var a = parseInt(t.substr(2 * s, 2), 16);
      if (isNaN(a)) return s;
      e[n + s] = a;
    }
    return s;
  }
  function I(e, t, n, r) {
    return ae(oe(t, e.length - n), e, n, r);
  }
  function Y(e, t, n, r) {
    return ae(
      (function (e) {
        for (var t = [], n = 0; n < e.length; ++n)
          t.push(255 & e.charCodeAt(n));
        return t;
      })(t),
      e,
      n,
      r,
    );
  }
  function z(e, t, n, r) {
    return Y(e, t, n, r);
  }
  function N(e, t, n, r) {
    return ae(se(t), e, n, r);
  }
  function q(e, t, n, r) {
    return ae(
      (function (e, t) {
        for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
          (r = (n = e.charCodeAt(s)) >> 8), (i = n % 256), o.push(i), o.push(r);
        return o;
      })(t, e.length - n),
      e,
      n,
      r,
    );
  }
  function W(e, t, n) {
    return 0 === t && n === e.length ? y(e) : y(e.slice(t, n));
  }
  function F(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], i = t; i < n; ) {
      var o,
        s,
        a,
        u,
        f = e[i],
        h = null,
        c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
      if (i + c <= n)
        switch (c) {
          case 1:
            f < 128 && (h = f);
            break;
          case 2:
            128 == (192 & (o = e[i + 1])) &&
              (u = ((31 & f) << 6) | (63 & o)) > 127 &&
              (h = u);
            break;
          case 3:
            (o = e[i + 1]),
              (s = e[i + 2]),
              128 == (192 & o) &&
                128 == (192 & s) &&
                (u = ((15 & f) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
                (u < 55296 || u > 57343) &&
                (h = u);
            break;
          case 4:
            (o = e[i + 1]),
              (s = e[i + 2]),
              (a = e[i + 3]),
              128 == (192 & o) &&
                128 == (192 & s) &&
                128 == (192 & a) &&
                (u =
                  ((15 & f) << 18) |
                  ((63 & o) << 12) |
                  ((63 & s) << 6) |
                  (63 & a)) > 65535 &&
                u < 1114112 &&
                (h = u);
        }
      null === h
        ? ((h = 65533), (c = 1))
        : h > 65535 &&
          ((h -= 65536),
          r.push(((h >>> 10) & 1023) | 55296),
          (h = 56320 | (1023 & h))),
        r.push(h),
        (i += c);
    }
    return (function (e) {
      var t = e.length;
      if (t <= H) return String.fromCharCode.apply(String, e);
      var n = '',
        r = 0;
      for (; r < t; )
        n += String.fromCharCode.apply(String, e.slice(r, (r += H)));
      return n;
    })(r);
  }
  (A.TYPED_ARRAY_SUPPORT =
    void 0 === c.TYPED_ARRAY_SUPPORT || c.TYPED_ARRAY_SUPPORT),
    R(),
    (A.poolSize = 8192),
    (A._augment = function (e) {
      return (e.__proto__ = A.prototype), e;
    }),
    (A.from = function (e, t, n) {
      return L(null, e, t, n);
    }),
    A.TYPED_ARRAY_SUPPORT &&
      ((A.prototype.__proto__ = Uint8Array.prototype),
      (A.__proto__ = Uint8Array),
      'undefined' != typeof Symbol && Symbol.species && A[Symbol.species]),
    (A.alloc = function (e, t, n) {
      return (function (e, t, n, r) {
        return (
          k(t),
          t <= 0
            ? S(e, t)
            : void 0 !== n
            ? 'string' == typeof r
              ? S(e, t).fill(n, r)
              : S(e, t).fill(n)
            : S(e, t)
        );
      })(null, e, t, n);
    }),
    (A.allocUnsafe = function (e) {
      return T(null, e);
    }),
    (A.allocUnsafeSlow = function (e) {
      return T(null, e);
    }),
    (A.isBuffer = function (e) {
      return (
        null != e &&
        (!!e._isBuffer ||
          ue(e) ||
          (function (e) {
            return (
              'function' == typeof e.readFloatLE &&
              'function' == typeof e.slice &&
              ue(e.slice(0, 0))
            );
          })(e))
      );
    }),
    (A.compare = function (e, t) {
      if (!x(e) || !x(t)) throw new TypeError('Arguments must be Buffers');
      if (e === t) return 0;
      for (
        var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
        i < o;
        ++i
      )
        if (e[i] !== t[i]) {
          (n = e[i]), (r = t[i]);
          break;
        }
      return n < r ? -1 : r < n ? 1 : 0;
    }),
    (A.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0;
        default:
          return !1;
      }
    }),
    (A.concat = function (e, t) {
      if (!E(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return A.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var r = A.allocUnsafe(t),
        i = 0;
      for (n = 0; n < e.length; ++n) {
        var o = e[n];
        if (!x(o))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, i), (i += o.length);
      }
      return r;
    }),
    (A.byteLength = C),
    (A.prototype._isBuffer = !0),
    (A.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0)
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (var t = 0; t < e; t += 2) B(this, t, t + 1);
      return this;
    }),
    (A.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (var t = 0; t < e; t += 4) B(this, t, t + 3), B(this, t + 1, t + 2);
      return this;
    }),
    (A.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (var t = 0; t < e; t += 8)
        B(this, t, t + 7),
          B(this, t + 1, t + 6),
          B(this, t + 2, t + 5),
          B(this, t + 3, t + 4);
      return this;
    }),
    (A.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e
        ? ''
        : 0 === arguments.length
        ? F(this, 0, e)
        : O.apply(this, arguments);
    }),
    (A.prototype.equals = function (e) {
      if (!x(e)) throw new TypeError('Argument must be a Buffer');
      return this === e || 0 === A.compare(this, e);
    }),
    (A.prototype.inspect = function () {
      var e = '';
      return (
        this.length > 0 &&
          ((e = this.toString('hex', 0, 50).match(/.{2}/g).join(' ')),
          this.length > 50 && (e += ' ... ')),
        '<Buffer ' + e + '>'
      );
    }),
    (A.prototype.compare = function (e, t, n, r, i) {
      if (!x(e)) throw new TypeError('Argument must be a Buffer');
      if (
        (void 0 === t && (t = 0),
        void 0 === n && (n = e ? e.length : 0),
        void 0 === r && (r = 0),
        void 0 === i && (i = this.length),
        t < 0 || n > e.length || r < 0 || i > this.length)
      )
        throw new RangeError('out of range index');
      if (r >= i && t >= n) return 0;
      if (r >= i) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (
        var o = (i >>>= 0) - (r >>>= 0),
          s = (n >>>= 0) - (t >>>= 0),
          a = Math.min(o, s),
          u = this.slice(r, i),
          f = e.slice(t, n),
          h = 0;
        h < a;
        ++h
      )
        if (u[h] !== f[h]) {
          (o = u[h]), (s = f[h]);
          break;
        }
      return o < s ? -1 : s < o ? 1 : 0;
    }),
    (A.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }),
    (A.prototype.indexOf = function (e, t, n) {
      return j(this, e, t, n, !0);
    }),
    (A.prototype.lastIndexOf = function (e, t, n) {
      return j(this, e, t, n, !1);
    }),
    (A.prototype.write = function (e, t, n, r) {
      if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
      else if (void 0 === n && 'string' == typeof t)
        (r = t), (n = this.length), (t = 0);
      else {
        if (!isFinite(t))
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported',
          );
        (t |= 0),
          isFinite(n)
            ? ((n |= 0), void 0 === r && (r = 'utf8'))
            : ((r = n), (n = void 0));
      }
      var i = this.length - t;
      if (
        ((void 0 === n || n > i) && (n = i),
        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError('Attempt to write outside buffer bounds');
      r || (r = 'utf8');
      for (var o = !1; ; )
        switch (r) {
          case 'hex':
            return D(this, e, t, n);
          case 'utf8':
          case 'utf-8':
            return I(this, e, t, n);
          case 'ascii':
            return Y(this, e, t, n);
          case 'latin1':
          case 'binary':
            return z(this, e, t, n);
          case 'base64':
            return N(this, e, t, n);
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return q(this, e, t, n);
          default:
            if (o) throw new TypeError('Unknown encoding: ' + r);
            (r = ('' + r).toLowerCase()), (o = !0);
        }
    }),
    (A.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  var H = 4096;
  function G(e, t, n) {
    var r = '';
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
    return r;
  }
  function J(e, t, n) {
    var r = '';
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
    return r;
  }
  function $(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
    for (var i = '', o = t; o < n; ++o) i += ie(e[o]);
    return i;
  }
  function V(e, t, n) {
    for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2)
      i += String.fromCharCode(r[o] + 256 * r[o + 1]);
    return i;
  }
  function Z(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
    if (e + t > n)
      throw new RangeError('Trying to access beyond buffer length');
  }
  function K(e, t, n, r, i, o) {
    if (!x(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError('Index out of range');
  }
  function Q(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);
    for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
      e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
  }
  function X(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
      e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
  }
  function ee(e, t, n, r, i, o) {
    if (n + r > e.length) throw new RangeError('Index out of range');
    if (n < 0) throw new RangeError('Index out of range');
  }
  function te(e, t, n, r, i) {
    return i || ee(e, 0, n, 4), m(e, t, n, r, 23, 4), n + 4;
  }
  function ne(e, t, n, r, i) {
    return i || ee(e, 0, n, 8), m(e, t, n, r, 52, 8), n + 8;
  }
  (A.prototype.slice = function (e, t) {
    var n,
      r = this.length;
    if (
      ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
      (t = void 0 === t ? r : ~~t) < 0
        ? (t += r) < 0 && (t = 0)
        : t > r && (t = r),
      t < e && (t = e),
      A.TYPED_ARRAY_SUPPORT)
    )
      (n = this.subarray(e, t)).__proto__ = A.prototype;
    else {
      var i = t - e;
      n = new A(i, void 0);
      for (var o = 0; o < i; ++o) n[o] = this[o + e];
    }
    return n;
  }),
    (A.prototype.readUIntLE = function (e, t, n) {
      (e |= 0), (t |= 0), n || Z(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
        r += this[e + o] * i;
      return r;
    }),
    (A.prototype.readUIntBE = function (e, t, n) {
      (e |= 0), (t |= 0), n || Z(e, t, this.length);
      for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
        r += this[e + --t] * i;
      return r;
    }),
    (A.prototype.readUInt8 = function (e, t) {
      return t || Z(e, 1, this.length), this[e];
    }),
    (A.prototype.readUInt16LE = function (e, t) {
      return t || Z(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (A.prototype.readUInt16BE = function (e, t) {
      return t || Z(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (A.prototype.readUInt32LE = function (e, t) {
      return (
        t || Z(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      );
    }),
    (A.prototype.readUInt32BE = function (e, t) {
      return (
        t || Z(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      );
    }),
    (A.prototype.readIntLE = function (e, t, n) {
      (e |= 0), (t |= 0), n || Z(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
        r += this[e + o] * i;
      return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }),
    (A.prototype.readIntBE = function (e, t, n) {
      (e |= 0), (t |= 0), n || Z(e, t, this.length);
      for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
        o += this[e + --r] * i;
      return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
    }),
    (A.prototype.readInt8 = function (e, t) {
      return (
        t || Z(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      );
    }),
    (A.prototype.readInt16LE = function (e, t) {
      t || Z(e, 2, this.length);
      var n = this[e] | (this[e + 1] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (A.prototype.readInt16BE = function (e, t) {
      t || Z(e, 2, this.length);
      var n = this[e + 1] | (this[e] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (A.prototype.readInt32LE = function (e, t) {
      return (
        t || Z(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      );
    }),
    (A.prototype.readInt32BE = function (e, t) {
      return (
        t || Z(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      );
    }),
    (A.prototype.readFloatLE = function (e, t) {
      return t || Z(e, 4, this.length), b(this, e, !0, 23, 4);
    }),
    (A.prototype.readFloatBE = function (e, t) {
      return t || Z(e, 4, this.length), b(this, e, !1, 23, 4);
    }),
    (A.prototype.readDoubleLE = function (e, t) {
      return t || Z(e, 8, this.length), b(this, e, !0, 52, 8);
    }),
    (A.prototype.readDoubleBE = function (e, t) {
      return t || Z(e, 8, this.length), b(this, e, !1, 52, 8);
    }),
    (A.prototype.writeUIntLE = function (e, t, n, r) {
      ((e = +e), (t |= 0), (n |= 0), r) ||
        K(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
        o = 0;
      for (this[t] = 255 & e; ++o < n && (i *= 256); )
        this[t + o] = (e / i) & 255;
      return t + n;
    }),
    (A.prototype.writeUIntBE = function (e, t, n, r) {
      ((e = +e), (t |= 0), (n |= 0), r) ||
        K(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
        o = 1;
      for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
        this[t + i] = (e / o) & 255;
      return t + n;
    }),
    (A.prototype.writeUInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 1, 255, 0),
        A.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (A.prototype.writeUInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 2, 65535, 0),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : Q(this, e, t, !0),
        t + 2
      );
    }),
    (A.prototype.writeUInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 2, 65535, 0),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : Q(this, e, t, !1),
        t + 2
      );
    }),
    (A.prototype.writeUInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 4, 4294967295, 0),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : X(this, e, t, !0),
        t + 4
      );
    }),
    (A.prototype.writeUInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 4, 4294967295, 0),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : X(this, e, t, !1),
        t + 4
      );
    }),
    (A.prototype.writeIntLE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var i = Math.pow(2, 8 * n - 1);
        K(this, e, t, n, i - 1, -i);
      }
      var o = 0,
        s = 1,
        a = 0;
      for (this[t] = 255 & e; ++o < n && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
          (this[t + o] = (((e / s) >> 0) - a) & 255);
      return t + n;
    }),
    (A.prototype.writeIntBE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var i = Math.pow(2, 8 * n - 1);
        K(this, e, t, n, i - 1, -i);
      }
      var o = n - 1,
        s = 1,
        a = 0;
      for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
          (this[t + o] = (((e / s) >> 0) - a) & 255);
      return t + n;
    }),
    (A.prototype.writeInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 1, 127, -128),
        A.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (A.prototype.writeInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 2, 32767, -32768),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : Q(this, e, t, !0),
        t + 2
      );
    }),
    (A.prototype.writeInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 2, 32767, -32768),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : Q(this, e, t, !1),
        t + 2
      );
    }),
    (A.prototype.writeInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 4, 2147483647, -2147483648),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : X(this, e, t, !0),
        t + 4
      );
    }),
    (A.prototype.writeInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || K(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        A.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : X(this, e, t, !1),
        t + 4
      );
    }),
    (A.prototype.writeFloatLE = function (e, t, n) {
      return te(this, e, t, !0, n);
    }),
    (A.prototype.writeFloatBE = function (e, t, n) {
      return te(this, e, t, !1, n);
    }),
    (A.prototype.writeDoubleLE = function (e, t, n) {
      return ne(this, e, t, !0, n);
    }),
    (A.prototype.writeDoubleBE = function (e, t, n) {
      return ne(this, e, t, !1, n);
    }),
    (A.prototype.copy = function (e, t, n, r) {
      if (
        (n || (n = 0),
        r || 0 === r || (r = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        r > 0 && r < n && (r = n),
        r === n)
      )
        return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError('targetStart out of bounds');
      if (n < 0 || n >= this.length)
        throw new RangeError('sourceStart out of bounds');
      if (r < 0) throw new RangeError('sourceEnd out of bounds');
      r > this.length && (r = this.length),
        e.length - t < r - n && (r = e.length - t + n);
      var i,
        o = r - n;
      if (this === e && n < t && t < r)
        for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
      else if (o < 1e3 || !A.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < o; ++i) e[i + t] = this[i + n];
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
      return o;
    }),
    (A.prototype.fill = function (e, t, n, r) {
      if ('string' == typeof e) {
        if (
          ('string' == typeof t
            ? ((r = t), (t = 0), (n = this.length))
            : 'string' == typeof n && ((r = n), (n = this.length)),
          1 === e.length)
        ) {
          var i = e.charCodeAt(0);
          i < 256 && (e = i);
        }
        if (void 0 !== r && 'string' != typeof r)
          throw new TypeError('encoding must be a string');
        if ('string' == typeof r && !A.isEncoding(r))
          throw new TypeError('Unknown encoding: ' + r);
      } else 'number' == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError('Out of range index');
      if (n <= t) return this;
      var o;
      if (
        ((t >>>= 0),
        (n = void 0 === n ? this.length : n >>> 0),
        e || (e = 0),
        'number' == typeof e)
      )
        for (o = t; o < n; ++o) this[o] = e;
      else {
        var s = x(e) ? e : oe(new A(e, r).toString()),
          a = s.length;
        for (o = 0; o < n - t; ++o) this[o + t] = s[o % a];
      }
      return this;
    });
  var re = /[^+\/0-9A-Za-z-_]/g;
  function ie(e) {
    return e < 16 ? '0' + e.toString(16) : e.toString(16);
  }
  function oe(e, t) {
    var n;
    t = t || 1 / 0;
    for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
      if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
        if (!i) {
          if (n > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          if (s + 1 === r) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = n;
          continue;
        }
        if (n < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
          continue;
        }
        n = 65536 + (((i - 55296) << 10) | (n - 56320));
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), n < 128)) {
        if ((t -= 1) < 0) break;
        o.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) break;
        o.push((n >> 6) | 192, (63 & n) | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) break;
        o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
      } else {
        if (!(n < 1114112)) throw new Error('Invalid code point');
        if ((t -= 4) < 0) break;
        o.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (63 & n) | 128,
        );
      }
    }
    return o;
  }
  function se(e) {
    return (function (e) {
      var t, n, r, i, o, s;
      g || v();
      var a = e.length;
      if (a % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4');
      (o = '=' === e[a - 2] ? 2 : '=' === e[a - 1] ? 1 : 0),
        (s = new p((3 * a) / 4 - o)),
        (r = o > 0 ? a - 4 : a);
      var u = 0;
      for (t = 0, n = 0; t < r; t += 4, n += 3)
        (i =
          (d[e.charCodeAt(t)] << 18) |
          (d[e.charCodeAt(t + 1)] << 12) |
          (d[e.charCodeAt(t + 2)] << 6) |
          d[e.charCodeAt(t + 3)]),
          (s[u++] = (i >> 16) & 255),
          (s[u++] = (i >> 8) & 255),
          (s[u++] = 255 & i);
      return (
        2 === o
          ? ((i = (d[e.charCodeAt(t)] << 2) | (d[e.charCodeAt(t + 1)] >> 4)),
            (s[u++] = 255 & i))
          : 1 === o &&
            ((i =
              (d[e.charCodeAt(t)] << 10) |
              (d[e.charCodeAt(t + 1)] << 4) |
              (d[e.charCodeAt(t + 2)] >> 2)),
            (s[u++] = (i >> 8) & 255),
            (s[u++] = 255 & i)),
        s
      );
    })(
      (function (e) {
        if (
          (e = (function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
          })(e).replace(re, '')).length < 2
        )
          return '';
        for (; e.length % 4 != 0; ) e += '=';
        return e;
      })(e),
    );
  }
  function ae(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
      t[i + n] = e[i];
    return i;
  }
  function ue(e) {
    return (
      !!e.constructor &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    );
  }
  function fe() {
    throw new Error('setTimeout has not been defined');
  }
  function he() {
    throw new Error('clearTimeout has not been defined');
  }
  var ce = fe,
    le = he;
  function de(e) {
    if (ce === setTimeout) return setTimeout(e, 0);
    if ((ce === fe || !ce) && setTimeout)
      return (ce = setTimeout), setTimeout(e, 0);
    try {
      return ce(e, 0);
    } catch (t) {
      try {
        return ce.call(null, e, 0);
      } catch (t) {
        return ce.call(this, e, 0);
      }
    }
  }
  'function' == typeof c.setTimeout && (ce = setTimeout),
    'function' == typeof c.clearTimeout && (le = clearTimeout);
  var pe,
    ge = [],
    ve = !1,
    we = -1;
  function ye() {
    ve &&
      pe &&
      ((ve = !1),
      pe.length ? (ge = pe.concat(ge)) : (we = -1),
      ge.length && be());
  }
  function be() {
    if (!ve) {
      var e = de(ye);
      ve = !0;
      for (var t = ge.length; t; ) {
        for (pe = ge, ge = []; ++we < t; ) pe && pe[we].run();
        (we = -1), (t = ge.length);
      }
      (pe = null),
        (ve = !1),
        (function (e) {
          if (le === clearTimeout) return clearTimeout(e);
          if ((le === he || !le) && clearTimeout)
            return (le = clearTimeout), clearTimeout(e);
          try {
            return le(e);
          } catch (t) {
            try {
              return le.call(null, e);
            } catch (t) {
              return le.call(this, e);
            }
          }
        })(e);
    }
  }
  function me(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    ge.push(new _e(e, t)), 1 !== ge.length || ve || de(be);
  }
  function _e(e, t) {
    (this.fun = e), (this.array = t);
  }
  _e.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function Ee() {}
  var Re = Ee,
    Se = Ee,
    Ae = Ee,
    Le = Ee,
    ke = Ee,
    Te = Ee,
    Me = Ee;
  var Pe = c.performance || {},
    xe =
      Pe.now ||
      Pe.mozNow ||
      Pe.msNow ||
      Pe.oNow ||
      Pe.webkitNow ||
      function () {
        return new Date().getTime();
      };
  var Ce = new Date();
  var Oe = {
      nextTick: me,
      title: 'browser',
      browser: !0,
      env: {},
      argv: [],
      version: '',
      versions: {},
      on: Re,
      addListener: Se,
      once: Ae,
      off: Le,
      removeListener: ke,
      removeAllListeners: Te,
      emit: Me,
      binding: function (e) {
        throw new Error('process.binding is not supported');
      },
      cwd: function () {
        return '/';
      },
      chdir: function (e) {
        throw new Error('process.chdir is not supported');
      },
      umask: function () {
        return 0;
      },
      hrtime: function (e) {
        var t = 0.001 * xe.call(Pe),
          n = Math.floor(t),
          r = Math.floor((t % 1) * 1e9);
        return e && ((n -= e[0]), (r -= e[1]) < 0 && (n--, (r += 1e9))), [n, r];
      },
      platform: 'browser',
      release: {},
      config: {},
      uptime: function () {
        return (new Date() - Ce) / 1e3;
      },
    },
    Be =
      'function' == typeof Object.create
        ? function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
        : function (e, t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          },
    je = /%[sdj%]/g;
  function Ue(e) {
    if (!$e(e)) {
      for (var t = [], n = 0; n < arguments.length; n++)
        t.push(ze(arguments[n]));
      return t.join(' ');
    }
    n = 1;
    for (
      var r = arguments,
        i = r.length,
        o = String(e).replace(je, function (e) {
          if ('%%' === e) return '%';
          if (n >= i) return e;
          switch (e) {
            case '%s':
              return String(r[n++]);
            case '%d':
              return Number(r[n++]);
            case '%j':
              try {
                return JSON.stringify(r[n++]);
              } catch (e) {
                return '[Circular]';
              }
            default:
              return e;
          }
        }),
        s = r[n];
      n < i;
      s = r[++n]
    )
      Je(s) || !Ke(s) ? (o += ' ' + s) : (o += ' ' + ze(s));
    return o;
  }
  function De(e, t) {
    if (Ve(c.process))
      return function () {
        return De(e, t).apply(this, arguments);
      };
    if (!0 === Oe.noDeprecation) return e;
    var n = !1;
    return function () {
      if (!n) {
        if (Oe.throwDeprecation) throw new Error(t);
        Oe.traceDeprecation ? console.trace(t) : console.error(t), (n = !0);
      }
      return e.apply(this, arguments);
    };
  }
  var Ie,
    Ye = {};
  function ze(e, t) {
    var n = { seen: [], stylize: qe };
    return (
      arguments.length >= 3 && (n.depth = arguments[2]),
      arguments.length >= 4 && (n.colors = arguments[3]),
      Ge(t)
        ? (n.showHidden = t)
        : t &&
          (function (e, t) {
            if (!t || !Ke(t)) return e;
            var n = Object.keys(t),
              r = n.length;
            for (; r--; ) e[n[r]] = t[n[r]];
          })(n, t),
      Ve(n.showHidden) && (n.showHidden = !1),
      Ve(n.depth) && (n.depth = 2),
      Ve(n.colors) && (n.colors = !1),
      Ve(n.customInspect) && (n.customInspect = !0),
      n.colors && (n.stylize = Ne),
      We(n, e, n.depth)
    );
  }
  function Ne(e, t) {
    var n = ze.styles[t];
    return n
      ? '[' + ze.colors[n][0] + 'm' + e + '[' + ze.colors[n][1] + 'm'
      : e;
  }
  function qe(e, t) {
    return e;
  }
  function We(e, t, n) {
    if (
      e.customInspect &&
      t &&
      et(t.inspect) &&
      t.inspect !== ze &&
      (!t.constructor || t.constructor.prototype !== t)
    ) {
      var r = t.inspect(n, e);
      return $e(r) || (r = We(e, r, n)), r;
    }
    var i = (function (e, t) {
      if (Ve(t)) return e.stylize('undefined', 'undefined');
      if ($e(t)) {
        var n =
          "'" +
          JSON.stringify(t)
            .replace(/^"|"$/g, '')
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') +
          "'";
        return e.stylize(n, 'string');
      }
      if (((r = t), 'number' == typeof r)) return e.stylize('' + t, 'number');
      var r;
      if (Ge(t)) return e.stylize('' + t, 'boolean');
      if (Je(t)) return e.stylize('null', 'null');
    })(e, t);
    if (i) return i;
    var o = Object.keys(t),
      s = (function (e) {
        var t = {};
        return (
          e.forEach(function (e, n) {
            t[e] = !0;
          }),
          t
        );
      })(o);
    if (
      (e.showHidden && (o = Object.getOwnPropertyNames(t)),
      Xe(t) && (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))
    )
      return Fe(t);
    if (0 === o.length) {
      if (et(t)) {
        var a = t.name ? ': ' + t.name : '';
        return e.stylize('[Function' + a + ']', 'special');
      }
      if (Ze(t)) return e.stylize(RegExp.prototype.toString.call(t), 'regexp');
      if (Qe(t)) return e.stylize(Date.prototype.toString.call(t), 'date');
      if (Xe(t)) return Fe(t);
    }
    var u,
      f,
      h = '',
      c = !1,
      l = ['{', '}'];
    ((u = t), Array.isArray(u) && ((c = !0), (l = ['[', ']'])), et(t)) &&
      (h = ' [Function' + (t.name ? ': ' + t.name : '') + ']');
    return (
      Ze(t) && (h = ' ' + RegExp.prototype.toString.call(t)),
      Qe(t) && (h = ' ' + Date.prototype.toUTCString.call(t)),
      Xe(t) && (h = ' ' + Fe(t)),
      0 !== o.length || (c && 0 != t.length)
        ? n < 0
          ? Ze(t)
            ? e.stylize(RegExp.prototype.toString.call(t), 'regexp')
            : e.stylize('[Object]', 'special')
          : (e.seen.push(t),
            (f = c
              ? (function (e, t, n, r, i) {
                  for (var o = [], s = 0, a = t.length; s < a; ++s)
                    nt(t, String(s))
                      ? o.push(He(e, t, n, r, String(s), !0))
                      : o.push('');
                  return (
                    i.forEach(function (i) {
                      i.match(/^\d+$/) || o.push(He(e, t, n, r, i, !0));
                    }),
                    o
                  );
                })(e, t, n, s, o)
              : o.map(function (r) {
                  return He(e, t, n, s, r, c);
                })),
            e.seen.pop(),
            (function (e, t, n) {
              var r = e.reduce(function (e, t) {
                return (
                  t.indexOf('\n'),
                  e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                );
              }, 0);
              if (r > 60)
                return (
                  n[0] +
                  ('' === t ? '' : t + '\n ') +
                  ' ' +
                  e.join(',\n  ') +
                  ' ' +
                  n[1]
                );
              return n[0] + t + ' ' + e.join(', ') + ' ' + n[1];
            })(f, h, l))
        : l[0] + h + l[1]
    );
  }
  function Fe(e) {
    return '[' + Error.prototype.toString.call(e) + ']';
  }
  function He(e, t, n, r, i, o) {
    var s, a, u;
    if (
      ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
        ? (a = u.set
            ? e.stylize('[Getter/Setter]', 'special')
            : e.stylize('[Getter]', 'special'))
        : u.set && (a = e.stylize('[Setter]', 'special')),
      nt(r, i) || (s = '[' + i + ']'),
      a ||
        (e.seen.indexOf(u.value) < 0
          ? (a = Je(n) ? We(e, u.value, null) : We(e, u.value, n - 1)).indexOf(
              '\n',
            ) > -1 &&
            (a = o
              ? a
                  .split('\n')
                  .map(function (e) {
                    return '  ' + e;
                  })
                  .join('\n')
                  .substr(2)
              : '\n' +
                a
                  .split('\n')
                  .map(function (e) {
                    return '   ' + e;
                  })
                  .join('\n'))
          : (a = e.stylize('[Circular]', 'special'))),
      Ve(s))
    ) {
      if (o && i.match(/^\d+$/)) return a;
      (s = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((s = s.substr(1, s.length - 2)), (s = e.stylize(s, 'name')))
        : ((s = s
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")),
          (s = e.stylize(s, 'string')));
    }
    return s + ': ' + a;
  }
  function Ge(e) {
    return 'boolean' == typeof e;
  }
  function Je(e) {
    return null === e;
  }
  function $e(e) {
    return 'string' == typeof e;
  }
  function Ve(e) {
    return void 0 === e;
  }
  function Ze(e) {
    return Ke(e) && '[object RegExp]' === tt(e);
  }
  function Ke(e) {
    return 'object' == typeof e && null !== e;
  }
  function Qe(e) {
    return Ke(e) && '[object Date]' === tt(e);
  }
  function Xe(e) {
    return Ke(e) && ('[object Error]' === tt(e) || e instanceof Error);
  }
  function et(e) {
    return 'function' == typeof e;
  }
  function tt(e) {
    return Object.prototype.toString.call(e);
  }
  function nt(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function rt() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  (ze.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  }),
    (ze.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red',
    }),
    (rt.prototype.push = function (e) {
      var t = { data: e, next: null };
      this.length > 0 ? (this.tail.next = t) : (this.head = t),
        (this.tail = t),
        ++this.length;
    }),
    (rt.prototype.unshift = function (e) {
      var t = { data: e, next: this.head };
      0 === this.length && (this.tail = t), (this.head = t), ++this.length;
    }),
    (rt.prototype.shift = function () {
      if (0 !== this.length) {
        var e = this.head.data;
        return (
          1 === this.length
            ? (this.head = this.tail = null)
            : (this.head = this.head.next),
          --this.length,
          e
        );
      }
    }),
    (rt.prototype.clear = function () {
      (this.head = this.tail = null), (this.length = 0);
    }),
    (rt.prototype.join = function (e) {
      if (0 === this.length) return '';
      for (var t = this.head, n = '' + t.data; (t = t.next); ) n += e + t.data;
      return n;
    }),
    (rt.prototype.concat = function (e) {
      if (0 === this.length) return A.alloc(0);
      if (1 === this.length) return this.head.data;
      for (var t = A.allocUnsafe(e >>> 0), n = this.head, r = 0; n; )
        n.data.copy(t, r), (r += n.data.length), (n = n.next);
      return t;
    });
  var it =
    A.isEncoding ||
    function (e) {
      switch (e && e.toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return !0;
        default:
          return !1;
      }
    };
  function ot(e) {
    switch (
      ((this.encoding = (e || 'utf8').toLowerCase().replace(/[-_]/, '')),
      (function (e) {
        if (e && !it(e)) throw new Error('Unknown encoding: ' + e);
      })(e),
      this.encoding)
    ) {
      case 'utf8':
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        (this.surrogateSize = 2), (this.detectIncompleteChar = at);
        break;
      case 'base64':
        (this.surrogateSize = 3), (this.detectIncompleteChar = ut);
        break;
      default:
        return void (this.write = st);
    }
    (this.charBuffer = new A(6)),
      (this.charReceived = 0),
      (this.charLength = 0);
  }
  function st(e) {
    return e.toString(this.encoding);
  }
  function at(e) {
    (this.charReceived = e.length % 2),
      (this.charLength = this.charReceived ? 2 : 0);
  }
  function ut(e) {
    (this.charReceived = e.length % 3),
      (this.charLength = this.charReceived ? 3 : 0);
  }
  (ot.prototype.write = function (e) {
    for (var t = ''; this.charLength; ) {
      var n =
        e.length >= this.charLength - this.charReceived
          ? this.charLength - this.charReceived
          : e.length;
      if (
        (e.copy(this.charBuffer, this.charReceived, 0, n),
        (this.charReceived += n),
        this.charReceived < this.charLength)
      )
        return '';
      if (
        ((e = e.slice(n, e.length)),
        !(
          (i = (t = this.charBuffer
            .slice(0, this.charLength)
            .toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 &&
          i <= 56319
        ))
      ) {
        if (((this.charReceived = this.charLength = 0), 0 === e.length))
          return t;
        break;
      }
      (this.charLength += this.surrogateSize), (t = '');
    }
    this.detectIncompleteChar(e);
    var r = e.length;
    this.charLength &&
      (e.copy(this.charBuffer, 0, e.length - this.charReceived, r),
      (r -= this.charReceived));
    var i;
    r = (t += e.toString(this.encoding, 0, r)).length - 1;
    if ((i = t.charCodeAt(r)) >= 55296 && i <= 56319) {
      var o = this.surrogateSize;
      return (
        (this.charLength += o),
        (this.charReceived += o),
        this.charBuffer.copy(this.charBuffer, o, 0, o),
        e.copy(this.charBuffer, 0, 0, o),
        t.substring(0, r)
      );
    }
    return t;
  }),
    (ot.prototype.detectIncompleteChar = function (e) {
      for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
        var n = e[e.length - t];
        if (1 == t && n >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (t <= 2 && n >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (t <= 3 && n >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = t;
    }),
    (ot.prototype.end = function (e) {
      var t = '';
      if ((e && e.length && (t = this.write(e)), this.charReceived)) {
        var n = this.charReceived,
          r = this.charBuffer,
          i = this.encoding;
        t += r.slice(0, n).toString(i);
      }
      return t;
    }),
    (ct.ReadableState = ht);
  var ft = (function (e) {
    if (
      (Ve(Ie) && (Ie = Oe.env.NODE_DEBUG || ''), (e = e.toUpperCase()), !Ye[e])
    )
      if (new RegExp('\\b' + e + '\\b', 'i').test(Ie)) {
        Ye[e] = function () {
          var t = Ue.apply(null, arguments);
          console.error('%s %d: %s', e, 0, t);
        };
      } else Ye[e] = function () {};
    return Ye[e];
  })('stream');
  function ht(e, t) {
    (e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof Yt &&
        (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var n = e.highWaterMark,
      r = this.objectMode ? 16 : 16384;
    (this.highWaterMark = n || 0 === n ? n : r),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.buffer = new rt()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.defaultEncoding = e.defaultEncoding || 'utf8'),
      (this.ranOut = !1),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      e.encoding &&
        ((this.decoder = new ot(e.encoding)), (this.encoding = e.encoding));
  }
  function ct(e) {
    if (!(this instanceof ct)) return new ct(e);
    (this._readableState = new ht(e, this)),
      (this.readable = !0),
      e && 'function' == typeof e.read && (this._read = e.read),
      o.call(this);
  }
  function lt(e, t, n, r, i) {
    var o = (function (e, t) {
      var n = null;
      A.isBuffer(t) ||
        'string' == typeof t ||
        null == t ||
        e.objectMode ||
        (n = new TypeError('Invalid non-string/buffer chunk'));
      return n;
    })(t, n);
    if (o) e.emit('error', o);
    else if (null === n)
      (t.reading = !1),
        (function (e, t) {
          if (t.ended) return;
          if (t.decoder) {
            var n = t.decoder.end();
            n &&
              n.length &&
              (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
          }
          (t.ended = !0), gt(e);
        })(e, t);
    else if (t.objectMode || (n && n.length > 0))
      if (t.ended && !i) {
        var s = new Error('stream.push() after EOF');
        e.emit('error', s);
      } else if (t.endEmitted && i) {
        var a = new Error('stream.unshift() after end event');
        e.emit('error', a);
      } else {
        var u;
        !t.decoder ||
          i ||
          r ||
          ((n = t.decoder.write(n)), (u = !t.objectMode && 0 === n.length)),
          i || (t.reading = !1),
          u ||
            (t.flowing && 0 === t.length && !t.sync
              ? (e.emit('data', n), e.read(0))
              : ((t.length += t.objectMode ? 1 : n.length),
                i ? t.buffer.unshift(n) : t.buffer.push(n),
                t.needReadable && gt(e))),
          (function (e, t) {
            t.readingMore || ((t.readingMore = !0), me(wt, e, t));
          })(e, t);
      }
    else i || (t.reading = !1);
    return (function (e) {
      return (
        !e.ended &&
        (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
      );
    })(t);
  }
  Be(ct, o),
    (ct.prototype.push = function (e, t) {
      var n = this._readableState;
      return (
        n.objectMode ||
          'string' != typeof e ||
          ((t = t || n.defaultEncoding) !== n.encoding &&
            ((e = A.from(e, t)), (t = ''))),
        lt(this, n, e, t, !1)
      );
    }),
    (ct.prototype.unshift = function (e) {
      return lt(this, this._readableState, e, '', !0);
    }),
    (ct.prototype.isPaused = function () {
      return !1 === this._readableState.flowing;
    }),
    (ct.prototype.setEncoding = function (e) {
      return (
        (this._readableState.decoder = new ot(e)),
        (this._readableState.encoding = e),
        this
      );
    });
  var dt = 8388608;
  function pt(e, t) {
    return e <= 0 || (0 === t.length && t.ended)
      ? 0
      : t.objectMode
      ? 1
      : e != e
      ? t.flowing && t.length
        ? t.buffer.head.data.length
        : t.length
      : (e > t.highWaterMark &&
          (t.highWaterMark = (function (e) {
            return (
              e >= dt
                ? (e = dt)
                : (e--,
                  (e |= e >>> 1),
                  (e |= e >>> 2),
                  (e |= e >>> 4),
                  (e |= e >>> 8),
                  (e |= e >>> 16),
                  e++),
              e
            );
          })(e)),
        e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
  }
  function gt(e) {
    var t = e._readableState;
    (t.needReadable = !1),
      t.emittedReadable ||
        (ft('emitReadable', t.flowing),
        (t.emittedReadable = !0),
        t.sync ? me(vt, e) : vt(e));
  }
  function vt(e) {
    ft('emit readable'), e.emit('readable'), mt(e);
  }
  function wt(e, t) {
    for (
      var n = t.length;
      !t.reading &&
      !t.flowing &&
      !t.ended &&
      t.length < t.highWaterMark &&
      (ft('maybeReadMore read 0'), e.read(0), n !== t.length);

    )
      n = t.length;
    t.readingMore = !1;
  }
  function yt(e) {
    ft('readable nexttick read 0'), e.read(0);
  }
  function bt(e, t) {
    t.reading || (ft('resume read 0'), e.read(0)),
      (t.resumeScheduled = !1),
      (t.awaitDrain = 0),
      e.emit('resume'),
      mt(e),
      t.flowing && !t.reading && e.read(0);
  }
  function mt(e) {
    var t = e._readableState;
    for (ft('flow', t.flowing); t.flowing && null !== e.read(); );
  }
  function _t(e, t) {
    return 0 === t.length
      ? null
      : (t.objectMode
          ? (n = t.buffer.shift())
          : !e || e >= t.length
          ? ((n = t.decoder
              ? t.buffer.join('')
              : 1 === t.buffer.length
              ? t.buffer.head.data
              : t.buffer.concat(t.length)),
            t.buffer.clear())
          : (n = (function (e, t, n) {
              var r;
              e < t.head.data.length
                ? ((r = t.head.data.slice(0, e)),
                  (t.head.data = t.head.data.slice(e)))
                : (r =
                    e === t.head.data.length
                      ? t.shift()
                      : n
                      ? (function (e, t) {
                          var n = t.head,
                            r = 1,
                            i = n.data;
                          e -= i.length;
                          for (; (n = n.next); ) {
                            var o = n.data,
                              s = e > o.length ? o.length : e;
                            if (
                              (s === o.length ? (i += o) : (i += o.slice(0, e)),
                              0 === (e -= s))
                            ) {
                              s === o.length
                                ? (++r,
                                  n.next
                                    ? (t.head = n.next)
                                    : (t.head = t.tail = null))
                                : ((t.head = n), (n.data = o.slice(s)));
                              break;
                            }
                            ++r;
                          }
                          return (t.length -= r), i;
                        })(e, t)
                      : (function (e, t) {
                          var n = A.allocUnsafe(e),
                            r = t.head,
                            i = 1;
                          r.data.copy(n), (e -= r.data.length);
                          for (; (r = r.next); ) {
                            var o = r.data,
                              s = e > o.length ? o.length : e;
                            if (
                              (o.copy(n, n.length - e, 0, s), 0 === (e -= s))
                            ) {
                              s === o.length
                                ? (++i,
                                  r.next
                                    ? (t.head = r.next)
                                    : (t.head = t.tail = null))
                                : ((t.head = r), (r.data = o.slice(s)));
                              break;
                            }
                            ++i;
                          }
                          return (t.length -= i), n;
                        })(e, t));
              return r;
            })(e, t.buffer, t.decoder)),
        n);
    var n;
  }
  function Et(e) {
    var t = e._readableState;
    if (t.length > 0)
      throw new Error('"endReadable()" called on non-empty stream');
    t.endEmitted || ((t.ended = !0), me(Rt, t, e));
  }
  function Rt(e, t) {
    e.endEmitted ||
      0 !== e.length ||
      ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
  }
  function St(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
  }
  function At() {}
  function Lt(e, t, n) {
    (this.chunk = e),
      (this.encoding = t),
      (this.callback = n),
      (this.next = null);
  }
  function kt(e, t) {
    Object.defineProperty(this, 'buffer', {
      get: De(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.'),
    }),
      (e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof Yt &&
        (this.objectMode = this.objectMode || !!e.writableObjectMode);
    var n = e.highWaterMark,
      r = this.objectMode ? 16 : 16384;
    (this.highWaterMark = n || 0 === n ? n : r),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1);
    var i = !1 === e.decodeStrings;
    (this.decodeStrings = !i),
      (this.defaultEncoding = e.defaultEncoding || 'utf8'),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (e) {
        !(function (e, t) {
          var n = e._writableState,
            r = n.sync,
            i = n.writecb;
          if (
            ((function (e) {
              (e.writing = !1),
                (e.writecb = null),
                (e.length -= e.writelen),
                (e.writelen = 0);
            })(n),
            t)
          )
            !(function (e, t, n, r, i) {
              --t.pendingcb, n ? me(i, r) : i(r);
              (e._writableState.errorEmitted = !0), e.emit('error', r);
            })(e, n, r, t, i);
          else {
            var o = Ct(n);
            o ||
              n.corked ||
              n.bufferProcessing ||
              !n.bufferedRequest ||
              xt(e, n),
              r ? me(Pt, e, n, o, i) : Pt(e, n, o, i);
          }
        })(t, e);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new jt(this));
  }
  function Tt(e) {
    if (!(this instanceof Tt || this instanceof Yt)) return new Tt(e);
    (this._writableState = new kt(e, this)),
      (this.writable = !0),
      e &&
        ('function' == typeof e.write && (this._write = e.write),
        'function' == typeof e.writev && (this._writev = e.writev)),
      o.call(this);
  }
  function Mt(e, t, n, r, i, o, s) {
    (t.writelen = r),
      (t.writecb = s),
      (t.writing = !0),
      (t.sync = !0),
      n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
      (t.sync = !1);
  }
  function Pt(e, t, n, r) {
    n ||
      (function (e, t) {
        0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
      })(e, t),
      t.pendingcb--,
      r(),
      Bt(e, t);
  }
  function xt(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
      var r = t.bufferedRequestCount,
        i = new Array(r),
        o = t.corkedRequestsFree;
      o.entry = n;
      for (var s = 0; n; ) (i[s] = n), (n = n.next), (s += 1);
      Mt(e, t, !0, t.length, i, '', o.finish),
        t.pendingcb++,
        (t.lastBufferedRequest = null),
        o.next
          ? ((t.corkedRequestsFree = o.next), (o.next = null))
          : (t.corkedRequestsFree = new jt(t));
    } else {
      for (; n; ) {
        var a = n.chunk,
          u = n.encoding,
          f = n.callback;
        if (
          (Mt(e, t, !1, t.objectMode ? 1 : a.length, a, u, f),
          (n = n.next),
          t.writing)
        )
          break;
      }
      null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequestCount = 0),
      (t.bufferedRequest = n),
      (t.bufferProcessing = !1);
  }
  function Ct(e) {
    return (
      e.ending &&
      0 === e.length &&
      null === e.bufferedRequest &&
      !e.finished &&
      !e.writing
    );
  }
  function Ot(e, t) {
    t.prefinished || ((t.prefinished = !0), e.emit('prefinish'));
  }
  function Bt(e, t) {
    var n = Ct(t);
    return (
      n &&
        (0 === t.pendingcb
          ? (Ot(e, t), (t.finished = !0), e.emit('finish'))
          : Ot(e, t)),
      n
    );
  }
  function jt(e) {
    var t = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function (n) {
        var r = t.entry;
        for (t.entry = null; r; ) {
          var i = r.callback;
          e.pendingcb--, i(n), (r = r.next);
        }
        e.corkedRequestsFree
          ? (e.corkedRequestsFree.next = t)
          : (e.corkedRequestsFree = t);
      });
  }
  (ct.prototype.read = function (e) {
    ft('read', e), (e = parseInt(e, 10));
    var t = this._readableState,
      n = e;
    if (
      (0 !== e && (t.emittedReadable = !1),
      0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
    )
      return (
        ft('read: emitReadable', t.length, t.ended),
        0 === t.length && t.ended ? Et(this) : gt(this),
        null
      );
    if (0 === (e = pt(e, t)) && t.ended)
      return 0 === t.length && Et(this), null;
    var r,
      i = t.needReadable;
    return (
      ft('need readable', i),
      (0 === t.length || t.length - e < t.highWaterMark) &&
        ft('length less than watermark', (i = !0)),
      t.ended || t.reading
        ? ft('reading or ended', (i = !1))
        : i &&
          (ft('do read'),
          (t.reading = !0),
          (t.sync = !0),
          0 === t.length && (t.needReadable = !0),
          this._read(t.highWaterMark),
          (t.sync = !1),
          t.reading || (e = pt(n, t))),
      null === (r = e > 0 ? _t(e, t) : null)
        ? ((t.needReadable = !0), (e = 0))
        : (t.length -= e),
      0 === t.length &&
        (t.ended || (t.needReadable = !0), n !== e && t.ended && Et(this)),
      null !== r && this.emit('data', r),
      r
    );
  }),
    (ct.prototype._read = function (e) {
      this.emit('error', new Error('not implemented'));
    }),
    (ct.prototype.pipe = function (e, t) {
      var n = this,
        r = this._readableState;
      switch (r.pipesCount) {
        case 0:
          r.pipes = e;
          break;
        case 1:
          r.pipes = [r.pipes, e];
          break;
        default:
          r.pipes.push(e);
      }
      (r.pipesCount += 1), ft('pipe count=%d opts=%j', r.pipesCount, t);
      var i = !t || !1 !== t.end ? s : f;
      function o(e) {
        ft('onunpipe'), e === n && f();
      }
      function s() {
        ft('onend'), e.end();
      }
      r.endEmitted ? me(i) : n.once('end', i), e.on('unpipe', o);
      var a = (function (e) {
        return function () {
          var t = e._readableState;
          ft('pipeOnDrain', t.awaitDrain),
            t.awaitDrain && t.awaitDrain--,
            0 === t.awaitDrain &&
              e.listeners('data').length &&
              ((t.flowing = !0), mt(e));
        };
      })(n);
      e.on('drain', a);
      var u = !1;
      function f() {
        ft('cleanup'),
          e.removeListener('close', d),
          e.removeListener('finish', p),
          e.removeListener('drain', a),
          e.removeListener('error', l),
          e.removeListener('unpipe', o),
          n.removeListener('end', s),
          n.removeListener('end', f),
          n.removeListener('data', c),
          (u = !0),
          !r.awaitDrain ||
            (e._writableState && !e._writableState.needDrain) ||
            a();
      }
      var h = !1;
      function c(t) {
        ft('ondata'),
          (h = !1),
          !1 !== e.write(t) ||
            h ||
            (((1 === r.pipesCount && r.pipes === e) ||
              (r.pipesCount > 1 && -1 !== St(r.pipes, e))) &&
              !u &&
              (ft('false write response, pause', n._readableState.awaitDrain),
              n._readableState.awaitDrain++,
              (h = !0)),
            n.pause());
      }
      function l(t) {
        var n;
        ft('onerror', t),
          g(),
          e.removeListener('error', l),
          0 === ((n = 'error'), e.listeners(n).length) && e.emit('error', t);
      }
      function d() {
        e.removeListener('finish', p), g();
      }
      function p() {
        ft('onfinish'), e.removeListener('close', d), g();
      }
      function g() {
        ft('unpipe'), n.unpipe(e);
      }
      return (
        n.on('data', c),
        (function (e, t, n) {
          if ('function' == typeof e.prependListener)
            return e.prependListener(t, n);
          e._events && e._events[t]
            ? Array.isArray(e._events[t])
              ? e._events[t].unshift(n)
              : (e._events[t] = [n, e._events[t]])
            : e.on(t, n);
        })(e, 'error', l),
        e.once('close', d),
        e.once('finish', p),
        e.emit('pipe', n),
        r.flowing || (ft('pipe resume'), n.resume()),
        e
      );
    }),
    (ct.prototype.unpipe = function (e) {
      var t = this._readableState;
      if (0 === t.pipesCount) return this;
      if (1 === t.pipesCount)
        return (
          (e && e !== t.pipes) ||
            (e || (e = t.pipes),
            (t.pipes = null),
            (t.pipesCount = 0),
            (t.flowing = !1),
            e && e.emit('unpipe', this)),
          this
        );
      if (!e) {
        var n = t.pipes,
          r = t.pipesCount;
        (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
        for (var i = 0; i < r; i++) n[i].emit('unpipe', this);
        return this;
      }
      var o = St(t.pipes, e);
      return (
        -1 === o ||
          (t.pipes.splice(o, 1),
          (t.pipesCount -= 1),
          1 === t.pipesCount && (t.pipes = t.pipes[0]),
          e.emit('unpipe', this)),
        this
      );
    }),
    (ct.prototype.on = function (e, t) {
      var n = o.prototype.on.call(this, e, t);
      if ('data' === e) !1 !== this._readableState.flowing && this.resume();
      else if ('readable' === e) {
        var r = this._readableState;
        r.endEmitted ||
          r.readableListening ||
          ((r.readableListening = r.needReadable = !0),
          (r.emittedReadable = !1),
          r.reading ? r.length && gt(this) : me(yt, this));
      }
      return n;
    }),
    (ct.prototype.addListener = ct.prototype.on),
    (ct.prototype.resume = function () {
      var e = this._readableState;
      return (
        e.flowing ||
          (ft('resume'),
          (e.flowing = !0),
          (function (e, t) {
            t.resumeScheduled || ((t.resumeScheduled = !0), me(bt, e, t));
          })(this, e)),
        this
      );
    }),
    (ct.prototype.pause = function () {
      return (
        ft('call pause flowing=%j', this._readableState.flowing),
        !1 !== this._readableState.flowing &&
          (ft('pause'), (this._readableState.flowing = !1), this.emit('pause')),
        this
      );
    }),
    (ct.prototype.wrap = function (e) {
      var t = this._readableState,
        n = !1,
        r = this;
      for (var i in (e.on('end', function () {
        if ((ft('wrapped end'), t.decoder && !t.ended)) {
          var e = t.decoder.end();
          e && e.length && r.push(e);
        }
        r.push(null);
      }),
      e.on('data', function (i) {
        (ft('wrapped data'),
        t.decoder && (i = t.decoder.write(i)),
        t.objectMode && null == i) ||
          ((t.objectMode || (i && i.length)) &&
            (r.push(i) || ((n = !0), e.pause())));
      }),
      e))
        void 0 === this[i] &&
          'function' == typeof e[i] &&
          (this[i] = (function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          })(i));
      return (
        (function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
        })(['error', 'close', 'destroy', 'pause', 'resume'], function (t) {
          e.on(t, r.emit.bind(r, t));
        }),
        (r._read = function (t) {
          ft('wrapped _read', t), n && ((n = !1), e.resume());
        }),
        r
      );
    }),
    (ct._fromList = _t),
    (Tt.WritableState = kt),
    Be(Tt, o),
    (kt.prototype.getBuffer = function () {
      for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
      return t;
    }),
    (Tt.prototype.pipe = function () {
      this.emit('error', new Error('Cannot pipe, not readable'));
    }),
    (Tt.prototype.write = function (e, t, n) {
      var r = this._writableState,
        i = !1;
      return (
        'function' == typeof t && ((n = t), (t = null)),
        A.isBuffer(e) ? (t = 'buffer') : t || (t = r.defaultEncoding),
        'function' != typeof n && (n = At),
        r.ended
          ? (function (e, t) {
              var n = new Error('write after end');
              e.emit('error', n), me(t, n);
            })(this, n)
          : (function (e, t, n, r) {
              var i = !0,
                o = !1;
              return (
                null === n
                  ? (o = new TypeError('May not write null values to stream'))
                  : A.isBuffer(n) ||
                    'string' == typeof n ||
                    void 0 === n ||
                    t.objectMode ||
                    (o = new TypeError('Invalid non-string/buffer chunk')),
                o && (e.emit('error', o), me(r, o), (i = !1)),
                i
              );
            })(this, r, e, n) &&
            (r.pendingcb++,
            (i = (function (e, t, n, r, i) {
              (n = (function (e, t, n) {
                e.objectMode ||
                  !1 === e.decodeStrings ||
                  'string' != typeof t ||
                  (t = A.from(t, n));
                return t;
              })(t, n, r)),
                A.isBuffer(n) && (r = 'buffer');
              var o = t.objectMode ? 1 : n.length;
              t.length += o;
              var s = t.length < t.highWaterMark;
              s || (t.needDrain = !0);
              if (t.writing || t.corked) {
                var a = t.lastBufferedRequest;
                (t.lastBufferedRequest = new Lt(n, r, i)),
                  a
                    ? (a.next = t.lastBufferedRequest)
                    : (t.bufferedRequest = t.lastBufferedRequest),
                  (t.bufferedRequestCount += 1);
              } else Mt(e, t, !1, o, n, r, i);
              return s;
            })(this, r, e, t, n))),
        i
      );
    }),
    (Tt.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (Tt.prototype.uncork = function () {
      var e = this._writableState;
      e.corked &&
        (e.corked--,
        e.writing ||
          e.corked ||
          e.finished ||
          e.bufferProcessing ||
          !e.bufferedRequest ||
          xt(this, e));
    }),
    (Tt.prototype.setDefaultEncoding = function (e) {
      if (
        ('string' == typeof e && (e = e.toLowerCase()),
        !(
          [
            'hex',
            'utf8',
            'utf-8',
            'ascii',
            'binary',
            'base64',
            'ucs2',
            'ucs-2',
            'utf16le',
            'utf-16le',
            'raw',
          ].indexOf((e + '').toLowerCase()) > -1
        ))
      )
        throw new TypeError('Unknown encoding: ' + e);
      return (this._writableState.defaultEncoding = e), this;
    }),
    (Tt.prototype._write = function (e, t, n) {
      n(new Error('not implemented'));
    }),
    (Tt.prototype._writev = null),
    (Tt.prototype.end = function (e, t, n) {
      var r = this._writableState;
      'function' == typeof e
        ? ((n = e), (e = null), (t = null))
        : 'function' == typeof t && ((n = t), (t = null)),
        null != e && this.write(e, t),
        r.corked && ((r.corked = 1), this.uncork()),
        r.ending ||
          r.finished ||
          (function (e, t, n) {
            (t.ending = !0),
              Bt(e, t),
              n && (t.finished ? me(n) : e.once('finish', n));
            (t.ended = !0), (e.writable = !1);
          })(this, r, n);
    }),
    Be(Yt, ct);
  for (var Ut = Object.keys(Tt.prototype), Dt = 0; Dt < Ut.length; Dt++) {
    var It = Ut[Dt];
    Yt.prototype[It] || (Yt.prototype[It] = Tt.prototype[It]);
  }
  function Yt(e) {
    if (!(this instanceof Yt)) return new Yt(e);
    ct.call(this, e),
      Tt.call(this, e),
      e && !1 === e.readable && (this.readable = !1),
      e && !1 === e.writable && (this.writable = !1),
      (this.allowHalfOpen = !0),
      e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
      this.once('end', zt);
  }
  function zt() {
    this.allowHalfOpen || this._writableState.ended || me(Nt, this);
  }
  function Nt(e) {
    e.end();
  }
  function qt(e) {
    (this.afterTransform = function (t, n) {
      return (function (e, t, n) {
        var r = e._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (!i)
          return e.emit('error', new Error('no writecb in Transform class'));
        (r.writechunk = null), (r.writecb = null), null != n && e.push(n);
        i(t);
        var o = e._readableState;
        (o.reading = !1),
          (o.needReadable || o.length < o.highWaterMark) &&
            e._read(o.highWaterMark);
      })(e, t, n);
    }),
      (this.needTransform = !1),
      (this.transforming = !1),
      (this.writecb = null),
      (this.writechunk = null),
      (this.writeencoding = null);
  }
  function Wt(e) {
    if (!(this instanceof Wt)) return new Wt(e);
    Yt.call(this, e), (this._transformState = new qt(this));
    var t = this;
    (this._readableState.needReadable = !0),
      (this._readableState.sync = !1),
      e &&
        ('function' == typeof e.transform && (this._transform = e.transform),
        'function' == typeof e.flush && (this._flush = e.flush)),
      this.once('prefinish', function () {
        'function' == typeof this._flush
          ? this._flush(function (e) {
              Ft(t, e);
            })
          : Ft(t);
      });
  }
  function Ft(e, t) {
    if (t) return e.emit('error', t);
    var n = e._writableState,
      r = e._transformState;
    if (n.length) throw new Error('Calling transform done when ws.length != 0');
    if (r.transforming)
      throw new Error('Calling transform done when still transforming');
    return e.push(null);
  }
  function Ht(e) {
    if (!(this instanceof Ht)) return new Ht(e);
    Wt.call(this, e);
  }
  function Gt() {
    o.call(this);
  }
  Be(Wt, Yt),
    (Wt.prototype.push = function (e, t) {
      return (
        (this._transformState.needTransform = !1),
        Yt.prototype.push.call(this, e, t)
      );
    }),
    (Wt.prototype._transform = function (e, t, n) {
      throw new Error('Not implemented');
    }),
    (Wt.prototype._write = function (e, t, n) {
      var r = this._transformState;
      if (
        ((r.writecb = n),
        (r.writechunk = e),
        (r.writeencoding = t),
        !r.transforming)
      ) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
      }
    }),
    (Wt.prototype._read = function (e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming
        ? ((t.transforming = !0),
          this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        : (t.needTransform = !0);
    }),
    Be(Ht, Wt),
    (Ht.prototype._transform = function (e, t, n) {
      n(null, e);
    }),
    Be(Gt, o),
    (Gt.Readable = ct),
    (Gt.Writable = Tt),
    (Gt.Duplex = Yt),
    (Gt.Transform = Wt),
    (Gt.PassThrough = Ht),
    (Gt.Stream = Gt),
    (Gt.prototype.pipe = function (e, t) {
      var n = this;
      function r(t) {
        e.writable && !1 === e.write(t) && n.pause && n.pause();
      }
      function i() {
        n.readable && n.resume && n.resume();
      }
      n.on('data', r),
        e.on('drain', i),
        e._isStdio || (t && !1 === t.end) || (n.on('end', a), n.on('close', u));
      var s = !1;
      function a() {
        s || ((s = !0), e.end());
      }
      function u() {
        s || ((s = !0), 'function' == typeof e.destroy && e.destroy());
      }
      function f(e) {
        if ((h(), 0 === o.listenerCount(this, 'error'))) throw e;
      }
      function h() {
        n.removeListener('data', r),
          e.removeListener('drain', i),
          n.removeListener('end', a),
          n.removeListener('close', u),
          n.removeListener('error', f),
          e.removeListener('error', f),
          n.removeListener('end', h),
          n.removeListener('close', h),
          e.removeListener('close', h);
      }
      return (
        n.on('error', f),
        e.on('error', f),
        n.on('end', h),
        n.on('close', h),
        e.on('close', h),
        e.emit('pipe', n),
        e
      );
    });
  var Jt,
    $t = (function () {
      function e() {
        (this._middlewares = []), (this._handler = void 0);
      }
      return (
        (e.builder = function () {
          return new e();
        }),
        (e.prototype.add = function (e) {
          return this._middlewares.push(e), this;
        }),
        (e.prototype.build = function () {
          var e = this;
          this._middlewares = this._middlewares.reverse();
          for (
            var t = void 0,
              i = function (i) {
                var o = t;
                t = function (t) {
                  return n(e, void 0, void 0, function () {
                    var e, n;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return r.trys.push([0, 2, , 3]), [4, i(t, o)];
                        case 1:
                          return [2, r.sent()];
                        case 2:
                          return (
                            (e = r.sent()),
                            (n = {
                              code: 99999,
                              name: 'unhandled exception',
                              message: 'unhandled exception',
                              data: e,
                            }),
                            [2, { id: t.id, version: 0, error: n }]
                          );
                        case 3:
                          return [2];
                      }
                    });
                  });
                };
              },
              o = 0,
              s = this._middlewares;
            o < s.length;
            o++
          ) {
            i(s[o]);
          }
          return (this._handler = t), this;
        }),
        (e.prototype.request = function (e) {
          return n(this, void 0, void 0, function () {
            var t;
            return r(this, function (n) {
              return this._handler
                ? [2, this._handler(e)]
                : ((t = {
                    code: 99998,
                    name: 'uninit',
                    message: 'engine not initialized',
                  }),
                  [2, { id: e.id, version: 0, error: t }]);
            });
          });
        }),
        e
      );
    })(),
    Vt = (function (e) {
      function n(t) {
        var n = this,
          r = Object.assign(null != t ? t : {}, {
            readableObjectMode: !0,
            writableObjectMode: !0,
          });
        return (
          ((n = e.call(this, r) || this)._isMobile = !1),
          window.addEventListener(
            'message',
            function (e) {
              var t = e.data;
              n.push(t);
            },
            !1,
          ),
          n
        );
      }
      return (
        (function (e, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function r() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        })(n, e),
        Object.defineProperty(n.prototype, 'isMobile', {
          set: function (e) {
            this._isMobile = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype._write = function (e, t, n) {
          var r = window;
          this._isMobile && r.ReactNativeWebView
            ? r.ReactNativeWebView.postMessage(JSON.stringify(e))
            : window.postMessage(e, '*'),
            n();
        }),
        (n.prototype._read = function (e) {}),
        n
      );
    })(Yt);
  return (
    (e.JsonRpcEngine = $t),
    (e.WindowPostStream = Vt),
    (e.ethGasPrice = function () {
      return n(void 0, void 0, void 0, function () {
        return r(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, null == Jt ? void 0 : Jt.eth.getGasPrice()];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (e.ethGetBlockByNumber = function (e, t) {
      return n(void 0, void 0, void 0, function () {
        return r(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, null == Jt ? void 0 : Jt.eth.getBlock(e, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }),
    (e.ethPersonalSign = function (e, t, i) {
      return n(void 0, void 0, void 0, function () {
        return r(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, null == Jt ? void 0 : Jt.eth.personal.sign(e, t, i)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }),
    (e.ethSign = function (e, t) {
      return n(void 0, void 0, void 0, function () {
        return r(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, null == Jt ? void 0 : Jt.eth.sign(e, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }),
    (e.setWeb3Client = function (e) {
      Jt = e;
    }),
    e
  );
})({});
//# sourceMappingURL=index.js.map
