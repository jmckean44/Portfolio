(function () {
	'use strict';
	var Zt = typeof document < 'u' ? document.currentScript : null,
		Vy = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
	function Wr(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
	}
	var Hc = { exports: {} },
		Qi = {},
		Gc = { exports: {} },
		Z = {};
	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Ur = Symbol.for('react.element'),
		zy = Symbol.for('react.portal'),
		By = Symbol.for('react.fragment'),
		$y = Symbol.for('react.strict_mode'),
		Wy = Symbol.for('react.profiler'),
		Uy = Symbol.for('react.provider'),
		Hy = Symbol.for('react.context'),
		Gy = Symbol.for('react.forward_ref'),
		Ky = Symbol.for('react.suspense'),
		Yy = Symbol.for('react.memo'),
		Xy = Symbol.for('react.lazy'),
		Kc = Symbol.iterator;
	function Qy(e) {
		return e === null || typeof e != 'object' ? null : ((e = (Kc && e[Kc]) || e['@@iterator']), typeof e == 'function' ? e : null);
	}
	var Yc = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		Xc = Object.assign,
		Qc = {};
	function rr(e, t, n) {
		(this.props = e), (this.context = t), (this.refs = Qc), (this.updater = n || Yc);
	}
	(rr.prototype.isReactComponent = {}),
		(rr.prototype.setState = function (e, t) {
			if (typeof e != 'object' && typeof e != 'function' && e != null)
				throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
			this.updater.enqueueSetState(this, e, t, 'setState');
		}),
		(rr.prototype.forceUpdate = function (e) {
			this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
		});
	function qc() {}
	qc.prototype = rr.prototype;
	function Ko(e, t, n) {
		(this.props = e), (this.context = t), (this.refs = Qc), (this.updater = n || Yc);
	}
	var Yo = (Ko.prototype = new qc());
	(Yo.constructor = Ko), Xc(Yo, rr.prototype), (Yo.isPureReactComponent = !0);
	var Zc = Array.isArray,
		Jc = Object.prototype.hasOwnProperty,
		Xo = { current: null },
		ef = { key: !0, ref: !0, __self: !0, __source: !0 };
	function tf(e, t, n) {
		var r,
			i = {},
			s = null,
			o = null;
		if (t != null) for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t)) Jc.call(t, r) && !ef.hasOwnProperty(r) && (i[r] = t[r]);
		var a = arguments.length - 2;
		if (a === 1) i.children = n;
		else if (1 < a) {
			for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
			i.children = l;
		}
		if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
		return { $$typeof: Ur, type: e, key: s, ref: o, props: i, _owner: Xo.current };
	}
	function qy(e, t) {
		return { $$typeof: Ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
	}
	function Qo(e) {
		return typeof e == 'object' && e !== null && e.$$typeof === Ur;
	}
	function Zy(e) {
		var t = { '=': '=0', ':': '=2' };
		return (
			'$' +
			e.replace(/[=:]/g, function (n) {
				return t[n];
			})
		);
	}
	var nf = /\/+/g;
	function qo(e, t) {
		return typeof e == 'object' && e !== null && e.key != null ? Zy('' + e.key) : t.toString(36);
	}
	function qi(e, t, n, r, i) {
		var s = typeof e;
		(s === 'undefined' || s === 'boolean') && (e = null);
		var o = !1;
		if (e === null) o = !0;
		else
			switch (s) {
				case 'string':
				case 'number':
					o = !0;
					break;
				case 'object':
					switch (e.$$typeof) {
						case Ur:
						case zy:
							o = !0;
					}
			}
		if (o)
			return (
				(o = e),
				(i = i(o)),
				(e = r === '' ? '.' + qo(o, 0) : r),
				Zc(i)
					? ((n = ''),
					  e != null && (n = e.replace(nf, '$&/') + '/'),
					  qi(i, t, n, '', function (c) {
							return c;
					  }))
					: i != null && (Qo(i) && (i = qy(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(nf, '$&/') + '/') + e)), t.push(i)),
				1
			);
		if (((o = 0), (r = r === '' ? '.' : r + ':'), Zc(e)))
			for (var a = 0; a < e.length; a++) {
				s = e[a];
				var l = r + qo(s, a);
				o += qi(s, t, n, l, i);
			}
		else if (((l = Qy(e)), typeof l == 'function')) for (e = l.call(e), a = 0; !(s = e.next()).done; ) (s = s.value), (l = r + qo(s, a++)), (o += qi(s, t, n, l, i));
		else if (s === 'object')
			throw (
				((t = String(e)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
						'). If you meant to render a collection of children, use an array instead.'
				))
			);
		return o;
	}
	function Zi(e, t, n) {
		if (e == null) return e;
		var r = [],
			i = 0;
		return (
			qi(e, r, '', '', function (s) {
				return t.call(n, s, i++);
			}),
			r
		);
	}
	function Jy(e) {
		if (e._status === -1) {
			var t = e._result;
			(t = t()),
				t.then(
					function (n) {
						(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
					},
					function (n) {
						(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
					}
				),
				e._status === -1 && ((e._status = 0), (e._result = t));
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var $e = { current: null },
		Ji = { transition: null },
		ev = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: Ji, ReactCurrentOwner: Xo };
	(Z.Children = {
		map: Zi,
		forEach: function (e, t, n) {
			Zi(
				e,
				function () {
					t.apply(this, arguments);
				},
				n
			);
		},
		count: function (e) {
			var t = 0;
			return (
				Zi(e, function () {
					t++;
				}),
				t
			);
		},
		toArray: function (e) {
			return (
				Zi(e, function (t) {
					return t;
				}) || []
			);
		},
		only: function (e) {
			if (!Qo(e)) throw Error('React.Children.only expected to receive a single React element child.');
			return e;
		},
	}),
		(Z.Component = rr),
		(Z.Fragment = By),
		(Z.Profiler = Wy),
		(Z.PureComponent = Ko),
		(Z.StrictMode = $y),
		(Z.Suspense = Ky),
		(Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev),
		(Z.cloneElement = function (e, t, n) {
			if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
			var r = Xc({}, e.props),
				i = e.key,
				s = e.ref,
				o = e._owner;
			if (t != null) {
				if ((t.ref !== void 0 && ((s = t.ref), (o = Xo.current)), t.key !== void 0 && (i = '' + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
				for (l in t) Jc.call(t, l) && !ef.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
			}
			var l = arguments.length - 2;
			if (l === 1) r.children = n;
			else if (1 < l) {
				a = Array(l);
				for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
				r.children = a;
			}
			return { $$typeof: Ur, type: e.type, key: i, ref: s, props: r, _owner: o };
		}),
		(Z.createContext = function (e) {
			return (
				(e = { $$typeof: Hy, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
				(e.Provider = { $$typeof: Uy, _context: e }),
				(e.Consumer = e)
			);
		}),
		(Z.createElement = tf),
		(Z.createFactory = function (e) {
			var t = tf.bind(null, e);
			return (t.type = e), t;
		}),
		(Z.createRef = function () {
			return { current: null };
		}),
		(Z.forwardRef = function (e) {
			return { $$typeof: Gy, render: e };
		}),
		(Z.isValidElement = Qo),
		(Z.lazy = function (e) {
			return { $$typeof: Xy, _payload: { _status: -1, _result: e }, _init: Jy };
		}),
		(Z.memo = function (e, t) {
			return { $$typeof: Yy, type: e, compare: t === void 0 ? null : t };
		}),
		(Z.startTransition = function (e) {
			var t = Ji.transition;
			Ji.transition = {};
			try {
				e();
			} finally {
				Ji.transition = t;
			}
		}),
		(Z.unstable_act = function () {
			throw Error('act(...) is not supported in production builds of React.');
		}),
		(Z.useCallback = function (e, t) {
			return $e.current.useCallback(e, t);
		}),
		(Z.useContext = function (e) {
			return $e.current.useContext(e);
		}),
		(Z.useDebugValue = function () {}),
		(Z.useDeferredValue = function (e) {
			return $e.current.useDeferredValue(e);
		}),
		(Z.useEffect = function (e, t) {
			return $e.current.useEffect(e, t);
		}),
		(Z.useId = function () {
			return $e.current.useId();
		}),
		(Z.useImperativeHandle = function (e, t, n) {
			return $e.current.useImperativeHandle(e, t, n);
		}),
		(Z.useInsertionEffect = function (e, t) {
			return $e.current.useInsertionEffect(e, t);
		}),
		(Z.useLayoutEffect = function (e, t) {
			return $e.current.useLayoutEffect(e, t);
		}),
		(Z.useMemo = function (e, t) {
			return $e.current.useMemo(e, t);
		}),
		(Z.useReducer = function (e, t, n) {
			return $e.current.useReducer(e, t, n);
		}),
		(Z.useRef = function (e) {
			return $e.current.useRef(e);
		}),
		(Z.useState = function (e) {
			return $e.current.useState(e);
		}),
		(Z.useSyncExternalStore = function (e, t, n) {
			return $e.current.useSyncExternalStore(e, t, n);
		}),
		(Z.useTransition = function () {
			return $e.current.useTransition();
		}),
		(Z.version = '18.2.0'),
		(Gc.exports = Z);
	var C = Gc.exports;
	const I = Wr(C);
	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var tv = C,
		nv = Symbol.for('react.element'),
		rv = Symbol.for('react.fragment'),
		iv = Object.prototype.hasOwnProperty,
		sv = tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		ov = { key: !0, ref: !0, __self: !0, __source: !0 };
	function rf(e, t, n) {
		var r,
			i = {},
			s = null,
			o = null;
		n !== void 0 && (s = '' + n), t.key !== void 0 && (s = '' + t.key), t.ref !== void 0 && (o = t.ref);
		for (r in t) iv.call(t, r) && !ov.hasOwnProperty(r) && (i[r] = t[r]);
		if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
		return { $$typeof: nv, type: e, key: s, ref: o, props: i, _owner: sv.current };
	}
	(Qi.Fragment = rv), (Qi.jsx = rf), (Qi.jsxs = rf), (Hc.exports = Qi);
	var g = Hc.exports,
		Zo = {},
		sf = { exports: {} },
		et = {},
		of = { exports: {} },
		af = {};
	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ (function (e) {
		function t(M, D) {
			var H = M.length;
			M.push(D);
			e: for (; 0 < H; ) {
				var B = (H - 1) >>> 1,
					O = M[B];
				if (0 < i(O, D)) (M[B] = D), (M[H] = O), (H = B);
				else break e;
			}
		}
		function n(M) {
			return M.length === 0 ? null : M[0];
		}
		function r(M) {
			if (M.length === 0) return null;
			var D = M[0],
				H = M.pop();
			if (H !== D) {
				M[0] = H;
				e: for (var B = 0, O = M.length, W = O >>> 1; B < W; ) {
					var G = 2 * (B + 1) - 1,
						K = M[G],
						X = G + 1,
						J = M[X];
					if (0 > i(K, H)) X < O && 0 > i(J, K) ? ((M[B] = J), (M[X] = H), (B = X)) : ((M[B] = K), (M[G] = H), (B = G));
					else if (X < O && 0 > i(J, H)) (M[B] = J), (M[X] = H), (B = X);
					else break e;
				}
			}
			return D;
		}
		function i(M, D) {
			var H = M.sortIndex - D.sortIndex;
			return H !== 0 ? H : M.id - D.id;
		}
		if (typeof performance == 'object' && typeof performance.now == 'function') {
			var s = performance;
			e.unstable_now = function () {
				return s.now();
			};
		} else {
			var o = Date,
				a = o.now();
			e.unstable_now = function () {
				return o.now() - a;
			};
		}
		var l = [],
			c = [],
			u = 1,
			f = null,
			d = 3,
			m = !1,
			w = !1,
			T = !1,
			j = typeof setTimeout == 'function' ? setTimeout : null,
			v = typeof clearTimeout == 'function' ? clearTimeout : null,
			p = typeof setImmediate < 'u' ? setImmediate : null;
		typeof navigator < 'u' && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
		function h(M) {
			for (var D = n(c); D !== null; ) {
				if (D.callback === null) r(c);
				else if (D.startTime <= M) r(c), (D.sortIndex = D.expirationTime), t(l, D);
				else break;
				D = n(c);
			}
		}
		function P(M) {
			if (((T = !1), h(M), !w))
				if (n(l) !== null) (w = !0), q(R);
				else {
					var D = n(c);
					D !== null && V(P, D.startTime - M);
				}
		}
		function R(M, D) {
			(w = !1), T && ((T = !1), v(y), (y = -1)), (m = !0);
			var H = d;
			try {
				for (h(D), f = n(l); f !== null && (!(f.expirationTime > D) || (M && !_())); ) {
					var B = f.callback;
					if (typeof B == 'function') {
						(f.callback = null), (d = f.priorityLevel);
						var O = B(f.expirationTime <= D);
						(D = e.unstable_now()), typeof O == 'function' ? (f.callback = O) : f === n(l) && r(l), h(D);
					} else r(l);
					f = n(l);
				}
				if (f !== null) var W = !0;
				else {
					var G = n(c);
					G !== null && V(P, G.startTime - D), (W = !1);
				}
				return W;
			} finally {
				(f = null), (d = H), (m = !1);
			}
		}
		var L = !1,
			S = null,
			y = -1,
			x = 5,
			k = -1;
		function _() {
			return !(e.unstable_now() - k < x);
		}
		function b() {
			if (S !== null) {
				var M = e.unstable_now();
				k = M;
				var D = !0;
				try {
					D = S(!0, M);
				} finally {
					D ? N() : ((L = !1), (S = null));
				}
			} else L = !1;
		}
		var N;
		if (typeof p == 'function')
			N = function () {
				p(b);
			};
		else if (typeof MessageChannel < 'u') {
			var $ = new MessageChannel(),
				Q = $.port2;
			($.port1.onmessage = b),
				(N = function () {
					Q.postMessage(null);
				});
		} else
			N = function () {
				j(b, 0);
			};
		function q(M) {
			(S = M), L || ((L = !0), N());
		}
		function V(M, D) {
			y = j(function () {
				M(e.unstable_now());
			}, D);
		}
		(e.unstable_IdlePriority = 5),
			(e.unstable_ImmediatePriority = 1),
			(e.unstable_LowPriority = 4),
			(e.unstable_NormalPriority = 3),
			(e.unstable_Profiling = null),
			(e.unstable_UserBlockingPriority = 2),
			(e.unstable_cancelCallback = function (M) {
				M.callback = null;
			}),
			(e.unstable_continueExecution = function () {
				w || m || ((w = !0), q(R));
			}),
			(e.unstable_forceFrameRate = function (M) {
				0 > M || 125 < M ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (x = 0 < M ? Math.floor(1e3 / M) : 5);
			}),
			(e.unstable_getCurrentPriorityLevel = function () {
				return d;
			}),
			(e.unstable_getFirstCallbackNode = function () {
				return n(l);
			}),
			(e.unstable_next = function (M) {
				switch (d) {
					case 1:
					case 2:
					case 3:
						var D = 3;
						break;
					default:
						D = d;
				}
				var H = d;
				d = D;
				try {
					return M();
				} finally {
					d = H;
				}
			}),
			(e.unstable_pauseExecution = function () {}),
			(e.unstable_requestPaint = function () {}),
			(e.unstable_runWithPriority = function (M, D) {
				switch (M) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
						break;
					default:
						M = 3;
				}
				var H = d;
				d = M;
				try {
					return D();
				} finally {
					d = H;
				}
			}),
			(e.unstable_scheduleCallback = function (M, D, H) {
				var B = e.unstable_now();
				switch ((typeof H == 'object' && H !== null ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? B + H : B)) : (H = B), M)) {
					case 1:
						var O = -1;
						break;
					case 2:
						O = 250;
						break;
					case 5:
						O = 1073741823;
						break;
					case 4:
						O = 1e4;
						break;
					default:
						O = 5e3;
				}
				return (
					(O = H + O),
					(M = { id: u++, callback: D, priorityLevel: M, startTime: H, expirationTime: O, sortIndex: -1 }),
					H > B ? ((M.sortIndex = H), t(c, M), n(l) === null && M === n(c) && (T ? (v(y), (y = -1)) : (T = !0), V(P, H - B))) : ((M.sortIndex = O), t(l, M), w || m || ((w = !0), q(R))),
					M
				);
			}),
			(e.unstable_shouldYield = _),
			(e.unstable_wrapCallback = function (M) {
				var D = d;
				return function () {
					var H = d;
					d = D;
					try {
						return M.apply(this, arguments);
					} finally {
						d = H;
					}
				};
			});
	})(af),
		(of.exports = af);
	var av = of.exports;
	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var lf = C,
		tt = av;
	function A(e) {
		for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
		return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
	}
	var uf = new Set(),
		Hr = {};
	function _n(e, t) {
		ir(e, t), ir(e + 'Capture', t);
	}
	function ir(e, t) {
		for (Hr[e] = t, e = 0; e < t.length; e++) uf.add(t[e]);
	}
	var Nt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
		Jo = Object.prototype.hasOwnProperty,
		lv =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		cf = {},
		ff = {};
	function uv(e) {
		return Jo.call(ff, e) ? !0 : Jo.call(cf, e) ? !1 : lv.test(e) ? (ff[e] = !0) : ((cf[e] = !0), !1);
	}
	function cv(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case 'function':
			case 'symbol':
				return !0;
			case 'boolean':
				return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
			default:
				return !1;
		}
	}
	function fv(e, t, n, r) {
		if (t === null || typeof t > 'u' || cv(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null)
			switch (n.type) {
				case 3:
					return !t;
				case 4:
					return t === !1;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t;
			}
		return !1;
	}
	function We(e, t, n, r, i, s, o) {
		(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
			(this.attributeName = r),
			(this.attributeNamespace = i),
			(this.mustUseProperty = n),
			(this.propertyName = e),
			(this.type = t),
			(this.sanitizeURL = s),
			(this.removeEmptyString = o);
	}
	var De = {};
	'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
		De[e] = new We(e, 0, !1, e, null, !1, !1);
	}),
		[
			['acceptCharset', 'accept-charset'],
			['className', 'class'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
		].forEach(function (e) {
			var t = e[0];
			De[t] = new We(t, 1, !1, e[1], null, !1, !1);
		}),
		['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
			De[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
		}),
		['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
			De[e] = new We(e, 2, !1, e, null, !1, !1);
		}),
		'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
			.split(' ')
			.forEach(function (e) {
				De[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
			}),
		['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
			De[e] = new We(e, 3, !0, e, null, !1, !1);
		}),
		['capture', 'download'].forEach(function (e) {
			De[e] = new We(e, 4, !1, e, null, !1, !1);
		}),
		['cols', 'rows', 'size', 'span'].forEach(function (e) {
			De[e] = new We(e, 6, !1, e, null, !1, !1);
		}),
		['rowSpan', 'start'].forEach(function (e) {
			De[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
		});
	var ea = /[\-:]([a-z])/g;
	function ta(e) {
		return e[1].toUpperCase();
	}
	'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
		.split(' ')
		.forEach(function (e) {
			var t = e.replace(ea, ta);
			De[t] = new We(t, 1, !1, e, null, !1, !1);
		}),
		'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
			var t = e.replace(ea, ta);
			De[t] = new We(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
		}),
		['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
			var t = e.replace(ea, ta);
			De[t] = new We(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
		}),
		['tabIndex', 'crossOrigin'].forEach(function (e) {
			De[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
		}),
		(De.xlinkHref = new We('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
		['src', 'href', 'action', 'formAction'].forEach(function (e) {
			De[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
		});
	function na(e, t, n, r) {
		var i = De.hasOwnProperty(t) ? De[t] : null;
		(i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
			(fv(t, n, i, r) && (n = null),
			r || i === null
				? uv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
				: i.mustUseProperty
				? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
				: ((t = i.attributeName),
				  (r = i.attributeNamespace),
				  n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var It = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		es = Symbol.for('react.element'),
		sr = Symbol.for('react.portal'),
		or = Symbol.for('react.fragment'),
		ra = Symbol.for('react.strict_mode'),
		ia = Symbol.for('react.profiler'),
		df = Symbol.for('react.provider'),
		pf = Symbol.for('react.context'),
		sa = Symbol.for('react.forward_ref'),
		oa = Symbol.for('react.suspense'),
		aa = Symbol.for('react.suspense_list'),
		la = Symbol.for('react.memo'),
		Jt = Symbol.for('react.lazy'),
		hf = Symbol.for('react.offscreen'),
		mf = Symbol.iterator;
	function Gr(e) {
		return e === null || typeof e != 'object' ? null : ((e = (mf && e[mf]) || e['@@iterator']), typeof e == 'function' ? e : null);
	}
	var he = Object.assign,
		ua;
	function Kr(e) {
		if (ua === void 0)
			try {
				throw Error();
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				ua = (t && t[1]) || '';
			}
		return (
			`
` +
			ua +
			e
		);
	}
	var ca = !1;
	function fa(e, t) {
		if (!e || ca) return '';
		ca = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t)
				if (
					((t = function () {
						throw Error();
					}),
					Object.defineProperty(t.prototype, 'props', {
						set: function () {
							throw Error();
						},
					}),
					typeof Reflect == 'object' && Reflect.construct)
				) {
					try {
						Reflect.construct(t, []);
					} catch (c) {
						var r = c;
					}
					Reflect.construct(e, [], t);
				} else {
					try {
						t.call();
					} catch (c) {
						r = c;
					}
					e.call(t.prototype);
				}
			else {
				try {
					throw Error();
				} catch (c) {
					r = c;
				}
				e();
			}
		} catch (c) {
			if (c && r && typeof c.stack == 'string') {
				for (
					var i = c.stack.split(`
`),
						s = r.stack.split(`
`),
						o = i.length - 1,
						a = s.length - 1;
					1 <= o && 0 <= a && i[o] !== s[a];

				)
					a--;
				for (; 1 <= o && 0 <= a; o--, a--)
					if (i[o] !== s[a]) {
						if (o !== 1 || a !== 1)
							do
								if ((o--, a--, 0 > a || i[o] !== s[a])) {
									var l =
										`
` + i[o].replace(' at new ', ' at ');
									return e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)), l;
								}
							while (1 <= o && 0 <= a);
						break;
					}
			}
		} finally {
			(ca = !1), (Error.prepareStackTrace = n);
		}
		return (e = e ? e.displayName || e.name : '') ? Kr(e) : '';
	}
	function dv(e) {
		switch (e.tag) {
			case 5:
				return Kr(e.type);
			case 16:
				return Kr('Lazy');
			case 13:
				return Kr('Suspense');
			case 19:
				return Kr('SuspenseList');
			case 0:
			case 2:
			case 15:
				return (e = fa(e.type, !1)), e;
			case 11:
				return (e = fa(e.type.render, !1)), e;
			case 1:
				return (e = fa(e.type, !0)), e;
			default:
				return '';
		}
	}
	function da(e) {
		if (e == null) return null;
		if (typeof e == 'function') return e.displayName || e.name || null;
		if (typeof e == 'string') return e;
		switch (e) {
			case or:
				return 'Fragment';
			case sr:
				return 'Portal';
			case ia:
				return 'Profiler';
			case ra:
				return 'StrictMode';
			case oa:
				return 'Suspense';
			case aa:
				return 'SuspenseList';
		}
		if (typeof e == 'object')
			switch (e.$$typeof) {
				case pf:
					return (e.displayName || 'Context') + '.Consumer';
				case df:
					return (e._context.displayName || 'Context') + '.Provider';
				case sa:
					var t = e.render;
					return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e;
				case la:
					return (t = e.displayName || null), t !== null ? t : da(e.type) || 'Memo';
				case Jt:
					(t = e._payload), (e = e._init);
					try {
						return da(e(t));
					} catch {}
			}
		return null;
	}
	function pv(e) {
		var t = e.type;
		switch (e.tag) {
			case 24:
				return 'Cache';
			case 9:
				return (t.displayName || 'Context') + '.Consumer';
			case 10:
				return (t._context.displayName || 'Context') + '.Provider';
			case 18:
				return 'DehydratedFragment';
			case 11:
				return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef');
			case 7:
				return 'Fragment';
			case 5:
				return t;
			case 4:
				return 'Portal';
			case 3:
				return 'Root';
			case 6:
				return 'Text';
			case 16:
				return da(t);
			case 8:
				return t === ra ? 'StrictMode' : 'Mode';
			case 22:
				return 'Offscreen';
			case 12:
				return 'Profiler';
			case 21:
				return 'Scope';
			case 13:
				return 'Suspense';
			case 19:
				return 'SuspenseList';
			case 25:
				return 'TracingMarker';
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof t == 'function') return t.displayName || t.name || null;
				if (typeof t == 'string') return t;
		}
		return null;
	}
	function en(e) {
		switch (typeof e) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return e;
			case 'object':
				return e;
			default:
				return '';
		}
	}
	function gf(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
	}
	function hv(e) {
		var t = gf(e) ? 'checked' : 'value',
			n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			r = '' + e[t];
		if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
			var i = n.get,
				s = n.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return i.call(this);
					},
					set: function (o) {
						(r = '' + o), s.call(this, o);
					},
				}),
				Object.defineProperty(e, t, { enumerable: n.enumerable }),
				{
					getValue: function () {
						return r;
					},
					setValue: function (o) {
						r = '' + o;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function ts(e) {
		e._valueTracker || (e._valueTracker = hv(e));
	}
	function yf(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = '';
		return e && (r = gf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
	}
	function ns(e) {
		if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function pa(e, t) {
		var n = t.checked;
		return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
	}
	function vf(e, t) {
		var n = t.defaultValue == null ? '' : t.defaultValue,
			r = t.checked != null ? t.checked : t.defaultChecked;
		(n = en(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null });
	}
	function xf(e, t) {
		(t = t.checked), t != null && na(e, 'checked', t, !1);
	}
	function ha(e, t) {
		xf(e, t);
		var n = en(t.value),
			r = t.type;
		if (n != null) r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
		else if (r === 'submit' || r === 'reset') {
			e.removeAttribute('value');
			return;
		}
		t.hasOwnProperty('value') ? ma(e, t.type, n) : t.hasOwnProperty('defaultValue') && ma(e, t.type, en(t.defaultValue)),
			t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function wf(e, t, n) {
		if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
			var r = t.type;
			if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
			(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
		}
		(n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
	}
	function ma(e, t, n) {
		(t !== 'number' || ns(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
	}
	var Yr = Array.isArray;
	function ar(e, t, n, r) {
		if (((e = e.options), t)) {
			t = {};
			for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
			for (n = 0; n < e.length; n++) (i = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = '' + en(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					(e[i].selected = !0), r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function ga(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
		return he({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
	}
	function kf(e, t) {
		var n = t.value;
		if (n == null) {
			if (((n = t.children), (t = t.defaultValue), n != null)) {
				if (t != null) throw Error(A(92));
				if (Yr(n)) {
					if (1 < n.length) throw Error(A(93));
					n = n[0];
				}
				t = n;
			}
			t == null && (t = ''), (n = t);
		}
		e._wrapperState = { initialValue: en(n) };
	}
	function Sf(e, t) {
		var n = en(t.value),
			r = en(t.defaultValue);
		n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = '' + r);
	}
	function Ef(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
	}
	function Cf(e) {
		switch (e) {
			case 'svg':
				return 'http://www.w3.org/2000/svg';
			case 'math':
				return 'http://www.w3.org/1998/Math/MathML';
			default:
				return 'http://www.w3.org/1999/xhtml';
		}
	}
	function ya(e, t) {
		return e == null || e === 'http://www.w3.org/1999/xhtml' ? Cf(t) : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : e;
	}
	var rs,
		Pf = (function (e) {
			return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
				? function (t, n, r, i) {
						MSApp.execUnsafeLocalFunction(function () {
							return e(t, n, r, i);
						});
				  }
				: e;
		})(function (e, t) {
			if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
			else {
				for (rs = rs || document.createElement('div'), rs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = rs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
				for (; t.firstChild; ) e.appendChild(t.firstChild);
			}
		});
	function Xr(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Qr = {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0,
		},
		mv = ['Webkit', 'ms', 'Moz', 'O'];
	Object.keys(Qr).forEach(function (e) {
		mv.forEach(function (t) {
			(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
		});
	});
	function Tf(e, t, n) {
		return t == null || typeof t == 'boolean' || t === '' ? '' : n || typeof t != 'number' || t === 0 || (Qr.hasOwnProperty(e) && Qr[e]) ? ('' + t).trim() : t + 'px';
	}
	function Lf(e, t) {
		e = e.style;
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var r = n.indexOf('--') === 0,
					i = Tf(n, t[n], r);
				n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
			}
	}
	var gv = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
	function va(e, t) {
		if (t) {
			if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(A(60));
				if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(A(61));
			}
			if (t.style != null && typeof t.style != 'object') throw Error(A(62));
		}
	}
	function xa(e, t) {
		if (e.indexOf('-') === -1) return typeof t.is == 'string';
		switch (e) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var wa = null;
	function ka(e) {
		return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Sa = null,
		lr = null,
		ur = null;
	function Of(e) {
		if ((e = vi(e))) {
			if (typeof Sa != 'function') throw Error(A(280));
			var t = e.stateNode;
			t && ((t = Ts(t)), Sa(e.stateNode, e.type, t));
		}
	}
	function jf(e) {
		lr ? (ur ? ur.push(e) : (ur = [e])) : (lr = e);
	}
	function _f() {
		if (lr) {
			var e = lr,
				t = ur;
			if (((ur = lr = null), Of(e), t)) for (e = 0; e < t.length; e++) Of(t[e]);
		}
	}
	function Rf(e, t) {
		return e(t);
	}
	function bf() {}
	var Ea = !1;
	function Df(e, t, n) {
		if (Ea) return e(t, n);
		Ea = !0;
		try {
			return Rf(e, t, n);
		} finally {
			(Ea = !1), (lr !== null || ur !== null) && (bf(), _f());
		}
	}
	function qr(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = Ts(n);
		if (r === null) return null;
		n = r[t];
		e: switch (t) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				(r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (n && typeof n != 'function') throw Error(A(231, t, typeof n));
		return n;
	}
	var Ca = !1;
	if (Nt)
		try {
			var Zr = {};
			Object.defineProperty(Zr, 'passive', {
				get: function () {
					Ca = !0;
				},
			}),
				window.addEventListener('test', Zr, Zr),
				window.removeEventListener('test', Zr, Zr);
		} catch {
			Ca = !1;
		}
	function yv(e, t, n, r, i, s, o, a, l) {
		var c = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, c);
		} catch (u) {
			this.onError(u);
		}
	}
	var Jr = !1,
		is = null,
		ss = !1,
		Pa = null,
		vv = {
			onError: function (e) {
				(Jr = !0), (is = e);
			},
		};
	function xv(e, t, n, r, i, s, o, a, l) {
		(Jr = !1), (is = null), yv.apply(vv, arguments);
	}
	function wv(e, t, n, r, i, s, o, a, l) {
		if ((xv.apply(this, arguments), Jr)) {
			if (Jr) {
				var c = is;
				(Jr = !1), (is = null);
			} else throw Error(A(198));
			ss || ((ss = !0), (Pa = c));
		}
	}
	function Rn(e) {
		var t = e,
			n = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function Af(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
		}
		return null;
	}
	function Mf(e) {
		if (Rn(e) !== e) throw Error(A(188));
	}
	function kv(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = Rn(e)), t === null)) throw Error(A(188));
			return t !== e ? null : e;
		}
		for (var n = e, r = t; ; ) {
			var i = n.return;
			if (i === null) break;
			var s = i.alternate;
			if (s === null) {
				if (((r = i.return), r !== null)) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === s.child) {
				for (s = i.child; s; ) {
					if (s === n) return Mf(i), e;
					if (s === r) return Mf(i), t;
					s = s.sibling;
				}
				throw Error(A(188));
			}
			if (n.return !== r.return) (n = i), (r = s);
			else {
				for (var o = !1, a = i.child; a; ) {
					if (a === n) {
						(o = !0), (n = i), (r = s);
						break;
					}
					if (a === r) {
						(o = !0), (r = i), (n = s);
						break;
					}
					a = a.sibling;
				}
				if (!o) {
					for (a = s.child; a; ) {
						if (a === n) {
							(o = !0), (n = s), (r = i);
							break;
						}
						if (a === r) {
							(o = !0), (r = s), (n = i);
							break;
						}
						a = a.sibling;
					}
					if (!o) throw Error(A(189));
				}
			}
			if (n.alternate !== r) throw Error(A(190));
		}
		if (n.tag !== 3) throw Error(A(188));
		return n.stateNode.current === n ? e : t;
	}
	function Nf(e) {
		return (e = kv(e)), e !== null ? If(e) : null;
	}
	function If(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null; ) {
			var t = If(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var Ff = tt.unstable_scheduleCallback,
		Vf = tt.unstable_cancelCallback,
		Sv = tt.unstable_shouldYield,
		Ev = tt.unstable_requestPaint,
		Se = tt.unstable_now,
		Cv = tt.unstable_getCurrentPriorityLevel,
		Ta = tt.unstable_ImmediatePriority,
		zf = tt.unstable_UserBlockingPriority,
		os = tt.unstable_NormalPriority,
		Pv = tt.unstable_LowPriority,
		Bf = tt.unstable_IdlePriority,
		as = null,
		Lt = null;
	function Tv(e) {
		if (Lt && typeof Lt.onCommitFiberRoot == 'function')
			try {
				Lt.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
			} catch {}
	}
	var vt = Math.clz32 ? Math.clz32 : jv,
		Lv = Math.log,
		Ov = Math.LN2;
	function jv(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((Lv(e) / Ov) | 0)) | 0;
	}
	var ls = 64,
		us = 4194304;
	function ei(e) {
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return e & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return e;
		}
	}
	function cs(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0,
			i = e.suspendedLanes,
			s = e.pingedLanes,
			o = n & 268435455;
		if (o !== 0) {
			var a = o & ~i;
			a !== 0 ? (r = ei(a)) : ((s &= o), s !== 0 && (r = ei(s)));
		} else (o = n & ~i), o !== 0 ? (r = ei(o)) : s !== 0 && (r = ei(s));
		if (r === 0) return 0;
		if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))) return t;
		if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
		return r;
	}
	function _v(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
				return t + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function Rv(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
			var o = 31 - vt(s),
				a = 1 << o,
				l = i[o];
			l === -1 ? (!(a & n) || a & r) && (i[o] = _v(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a);
		}
	}
	function La(e) {
		return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
	}
	function $f() {
		var e = ls;
		return (ls <<= 1), !(ls & 4194240) && (ls = 64), e;
	}
	function Oa(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ti(e, t, n) {
		(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - vt(t)), (e[t] = n);
	}
	function bv(e, t) {
		var n = e.pendingLanes & ~t;
		(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n; ) {
			var i = 31 - vt(n),
				s = 1 << i;
			(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
		}
	}
	function ja(e, t) {
		var n = (e.entangledLanes |= t);
		for (e = e.entanglements; n; ) {
			var r = 31 - vt(n),
				i = 1 << r;
			(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
		}
	}
	var re = 0;
	function Wf(e) {
		return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
	}
	var Uf,
		_a,
		Hf,
		Gf,
		Kf,
		Ra = !1,
		fs = [],
		tn = null,
		nn = null,
		rn = null,
		ni = new Map(),
		ri = new Map(),
		sn = [],
		Dv =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
				' '
			);
	function Yf(e, t) {
		switch (e) {
			case 'focusin':
			case 'focusout':
				tn = null;
				break;
			case 'dragenter':
			case 'dragleave':
				nn = null;
				break;
			case 'mouseover':
			case 'mouseout':
				rn = null;
				break;
			case 'pointerover':
			case 'pointerout':
				ni.delete(t.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				ri.delete(t.pointerId);
		}
	}
	function ii(e, t, n, r, i, s) {
		return e === null || e.nativeEvent !== s
			? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }), t !== null && ((t = vi(t)), t !== null && _a(t)), e)
			: ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Av(e, t, n, r, i) {
		switch (t) {
			case 'focusin':
				return (tn = ii(tn, e, t, n, r, i)), !0;
			case 'dragenter':
				return (nn = ii(nn, e, t, n, r, i)), !0;
			case 'mouseover':
				return (rn = ii(rn, e, t, n, r, i)), !0;
			case 'pointerover':
				var s = i.pointerId;
				return ni.set(s, ii(ni.get(s) || null, e, t, n, r, i)), !0;
			case 'gotpointercapture':
				return (s = i.pointerId), ri.set(s, ii(ri.get(s) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Xf(e) {
		var t = bn(e.target);
		if (t !== null) {
			var n = Rn(t);
			if (n !== null) {
				if (((t = n.tag), t === 13)) {
					if (((t = Af(n)), t !== null)) {
						(e.blockedOn = t),
							Kf(e.priority, function () {
								Hf(n);
							});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function ds(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				(wa = r), n.target.dispatchEvent(r), (wa = null);
			} else return (t = vi(n)), t !== null && _a(t), (e.blockedOn = n), !1;
			t.shift();
		}
		return !0;
	}
	function Qf(e, t, n) {
		ds(e) && n.delete(t);
	}
	function Mv() {
		(Ra = !1), tn !== null && ds(tn) && (tn = null), nn !== null && ds(nn) && (nn = null), rn !== null && ds(rn) && (rn = null), ni.forEach(Qf), ri.forEach(Qf);
	}
	function si(e, t) {
		e.blockedOn === t && ((e.blockedOn = null), Ra || ((Ra = !0), tt.unstable_scheduleCallback(tt.unstable_NormalPriority, Mv)));
	}
	function oi(e) {
		function t(i) {
			return si(i, e);
		}
		if (0 < fs.length) {
			si(fs[0], e);
			for (var n = 1; n < fs.length; n++) {
				var r = fs[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (tn !== null && si(tn, e), nn !== null && si(nn, e), rn !== null && si(rn, e), ni.forEach(t), ri.forEach(t), n = 0; n < sn.length; n++) (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); ) Xf(n), n.blockedOn === null && sn.shift();
	}
	var cr = It.ReactCurrentBatchConfig,
		ps = !0;
	function Nv(e, t, n, r) {
		var i = re,
			s = cr.transition;
		cr.transition = null;
		try {
			(re = 1), ba(e, t, n, r);
		} finally {
			(re = i), (cr.transition = s);
		}
	}
	function Iv(e, t, n, r) {
		var i = re,
			s = cr.transition;
		cr.transition = null;
		try {
			(re = 4), ba(e, t, n, r);
		} finally {
			(re = i), (cr.transition = s);
		}
	}
	function ba(e, t, n, r) {
		if (ps) {
			var i = Da(e, t, n, r);
			if (i === null) Qa(e, t, r, hs, n), Yf(e, r);
			else if (Av(i, e, t, n, r)) r.stopPropagation();
			else if ((Yf(e, r), t & 4 && -1 < Dv.indexOf(e))) {
				for (; i !== null; ) {
					var s = vi(i);
					if ((s !== null && Uf(s), (s = Da(e, t, n, r)), s === null && Qa(e, t, r, hs, n), s === i)) break;
					i = s;
				}
				i !== null && r.stopPropagation();
			} else Qa(e, t, r, null, n);
		}
	}
	var hs = null;
	function Da(e, t, n, r) {
		if (((hs = null), (e = ka(r)), (e = bn(e)), e !== null))
			if (((t = Rn(e)), t === null)) e = null;
			else if (((n = t.tag), n === 13)) {
				if (((e = Af(t)), e !== null)) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		return (hs = e), null;
	}
	function qf(e) {
		switch (e) {
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 1;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'toggle':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 4;
			case 'message':
				switch (Cv()) {
					case Ta:
						return 1;
					case zf:
						return 4;
					case os:
					case Pv:
						return 16;
					case Bf:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var on = null,
		Aa = null,
		ms = null;
	function Zf() {
		if (ms) return ms;
		var e,
			t = Aa,
			n = t.length,
			r,
			i = 'value' in on ? on.value : on.textContent,
			s = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
		return (ms = i.slice(e, 1 < r ? 1 - r : void 0));
	}
	function gs(e) {
		var t = e.keyCode;
		return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function ys() {
		return !0;
	}
	function Jf() {
		return !1;
	}
	function nt(e) {
		function t(n, r, i, s, o) {
			(this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = s), (this.target = o), (this.currentTarget = null);
			for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
			return (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ys : Jf), (this.isPropagationStopped = Jf), this;
		}
		return (
			he(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1), (this.isDefaultPrevented = ys));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0), (this.isPropagationStopped = ys));
				},
				persist: function () {},
				isPersistent: ys,
			}),
			t
		);
	}
	var fr = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ma = nt(fr),
		ai = he({}, fr, { view: 0, detail: 0 }),
		Fv = nt(ai),
		Na,
		Ia,
		li,
		vs = he({}, ai, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Va,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
			},
			movementX: function (e) {
				return 'movementX' in e ? e.movementX : (e !== li && (li && e.type === 'mousemove' ? ((Na = e.screenX - li.screenX), (Ia = e.screenY - li.screenY)) : (Ia = Na = 0), (li = e)), Na);
			},
			movementY: function (e) {
				return 'movementY' in e ? e.movementY : Ia;
			},
		}),
		ed = nt(vs),
		Vv = he({}, vs, { dataTransfer: 0 }),
		zv = nt(Vv),
		Bv = he({}, ai, { relatedTarget: 0 }),
		Fa = nt(Bv),
		$v = he({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Wv = nt($v),
		Uv = he({}, fr, {
			clipboardData: function (e) {
				return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
			},
		}),
		Hv = nt(Uv),
		Gv = he({}, fr, { data: 0 }),
		td = nt(Gv),
		Kv = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		Yv = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		Xv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
	function Qv(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Xv[e]) ? !!t[e] : !1;
	}
	function Va() {
		return Qv;
	}
	var qv = he({}, ai, {
			key: function (e) {
				if (e.key) {
					var t = Kv[e.key] || e.key;
					if (t !== 'Unidentified') return t;
				}
				return e.type === 'keypress' ? ((e = gs(e)), e === 13 ? 'Enter' : String.fromCharCode(e)) : e.type === 'keydown' || e.type === 'keyup' ? Yv[e.keyCode] || 'Unidentified' : '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Va,
			charCode: function (e) {
				return e.type === 'keypress' ? gs(e) : 0;
			},
			keyCode: function (e) {
				return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === 'keypress' ? gs(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
			},
		}),
		Zv = nt(qv),
		Jv = he({}, vs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
		nd = nt(Jv),
		e0 = he({}, ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Va }),
		t0 = nt(e0),
		n0 = he({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		r0 = nt(n0),
		i0 = he({}, vs, {
			deltaX: function (e) {
				return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
			},
			deltaY: function (e) {
				return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		s0 = nt(i0),
		o0 = [9, 13, 27, 32],
		za = Nt && 'CompositionEvent' in window,
		ui = null;
	Nt && 'documentMode' in document && (ui = document.documentMode);
	var a0 = Nt && 'TextEvent' in window && !ui,
		rd = Nt && (!za || (ui && 8 < ui && 11 >= ui)),
		id = String.fromCharCode(32),
		sd = !1;
	function od(e, t) {
		switch (e) {
			case 'keyup':
				return o0.indexOf(t.keyCode) !== -1;
			case 'keydown':
				return t.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function ad(e) {
		return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
	}
	var dr = !1;
	function l0(e, t) {
		switch (e) {
			case 'compositionend':
				return ad(t);
			case 'keypress':
				return t.which !== 32 ? null : ((sd = !0), id);
			case 'textInput':
				return (e = t.data), e === id && sd ? null : e;
			default:
				return null;
		}
	}
	function u0(e, t) {
		if (dr) return e === 'compositionend' || (!za && od(e, t)) ? ((e = Zf()), (ms = Aa = on = null), (dr = !1), e) : null;
		switch (e) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case 'compositionend':
				return rd && t.locale !== 'ko' ? null : t.data;
			default:
				return null;
		}
	}
	var c0 = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
	function ld(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === 'input' ? !!c0[e.type] : t === 'textarea';
	}
	function ud(e, t, n, r) {
		jf(r), (t = Es(t, 'onChange')), 0 < t.length && ((n = new Ma('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
	}
	var ci = null,
		fi = null;
	function f0(e) {
		Ld(e, 0);
	}
	function xs(e) {
		var t = yr(e);
		if (yf(t)) return e;
	}
	function d0(e, t) {
		if (e === 'change') return t;
	}
	var cd = !1;
	if (Nt) {
		var Ba;
		if (Nt) {
			var $a = 'oninput' in document;
			if (!$a) {
				var fd = document.createElement('div');
				fd.setAttribute('oninput', 'return;'), ($a = typeof fd.oninput == 'function');
			}
			Ba = $a;
		} else Ba = !1;
		cd = Ba && (!document.documentMode || 9 < document.documentMode);
	}
	function dd() {
		ci && (ci.detachEvent('onpropertychange', pd), (fi = ci = null));
	}
	function pd(e) {
		if (e.propertyName === 'value' && xs(fi)) {
			var t = [];
			ud(t, fi, e, ka(e)), Df(f0, t);
		}
	}
	function p0(e, t, n) {
		e === 'focusin' ? (dd(), (ci = t), (fi = n), ci.attachEvent('onpropertychange', pd)) : e === 'focusout' && dd();
	}
	function h0(e) {
		if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return xs(fi);
	}
	function m0(e, t) {
		if (e === 'click') return xs(t);
	}
	function g0(e, t) {
		if (e === 'input' || e === 'change') return xs(t);
	}
	function y0(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var xt = typeof Object.is == 'function' ? Object.is : y0;
	function di(e, t) {
		if (xt(e, t)) return !0;
		if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Jo.call(t, i) || !xt(e[i], t[i])) return !1;
		}
		return !0;
	}
	function hd(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function md(e, t) {
		var n = hd(e);
		e = 0;
		for (var r; n; ) {
			if (n.nodeType === 3) {
				if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
				e = r;
			}
			e: {
				for (; n; ) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = hd(n);
		}
	}
	function gd(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? gd(e, t.parentNode)
				: 'contains' in e
				? e.contains(t)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function yd() {
		for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
			try {
				var n = typeof t.contentWindow.location.href == 'string';
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = ns(e.document);
		}
		return t;
	}
	function Wa(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) || t === 'textarea' || e.contentEditable === 'true');
	}
	function v0(e) {
		var t = yd(),
			n = e.focusedElem,
			r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && gd(n.ownerDocument.documentElement, n)) {
			if (r !== null && Wa(n)) {
				if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
				else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
					e = e.getSelection();
					var i = n.textContent.length,
						s = Math.min(r.start, i);
					(r = r.end === void 0 ? s : Math.min(r.end, i)), !e.extend && s > r && ((i = r), (r = s), (s = i)), (i = md(n, s));
					var o = md(n, r);
					i &&
						o &&
						(e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) &&
						((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
				}
			}
			for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
			for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
		}
	}
	var x0 = Nt && 'documentMode' in document && 11 >= document.documentMode,
		pr = null,
		Ua = null,
		pi = null,
		Ha = !1;
	function vd(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Ha ||
			pr == null ||
			pr !== ns(r) ||
			((r = pr),
			'selectionStart' in r && Wa(r)
				? (r = { start: r.selectionStart, end: r.selectionEnd })
				: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
				  (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
			(pi && di(pi, r)) || ((pi = r), (r = Es(Ua, 'onSelect')), 0 < r.length && ((t = new Ma('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = pr))));
	}
	function ws(e, t) {
		var n = {};
		return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
	}
	var hr = {
			animationend: ws('Animation', 'AnimationEnd'),
			animationiteration: ws('Animation', 'AnimationIteration'),
			animationstart: ws('Animation', 'AnimationStart'),
			transitionend: ws('Transition', 'TransitionEnd'),
		},
		Ga = {},
		xd = {};
	Nt &&
		((xd = document.createElement('div').style),
		'AnimationEvent' in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation),
		'TransitionEvent' in window || delete hr.transitionend.transition);
	function ks(e) {
		if (Ga[e]) return Ga[e];
		if (!hr[e]) return e;
		var t = hr[e],
			n;
		for (n in t) if (t.hasOwnProperty(n) && n in xd) return (Ga[e] = t[n]);
		return e;
	}
	var wd = ks('animationend'),
		kd = ks('animationiteration'),
		Sd = ks('animationstart'),
		Ed = ks('transitionend'),
		Cd = new Map(),
		Pd =
			'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' '
			);
	function an(e, t) {
		Cd.set(e, t), _n(t, [e]);
	}
	for (var Ka = 0; Ka < Pd.length; Ka++) {
		var Ya = Pd[Ka],
			w0 = Ya.toLowerCase(),
			k0 = Ya[0].toUpperCase() + Ya.slice(1);
		an(w0, 'on' + k0);
	}
	an(wd, 'onAnimationEnd'),
		an(kd, 'onAnimationIteration'),
		an(Sd, 'onAnimationStart'),
		an('dblclick', 'onDoubleClick'),
		an('focusin', 'onFocus'),
		an('focusout', 'onBlur'),
		an(Ed, 'onTransitionEnd'),
		ir('onMouseEnter', ['mouseout', 'mouseover']),
		ir('onMouseLeave', ['mouseout', 'mouseover']),
		ir('onPointerEnter', ['pointerout', 'pointerover']),
		ir('onPointerLeave', ['pointerout', 'pointerover']),
		_n('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
		_n('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
		_n('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		_n('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
		_n('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
		_n('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
	var hi =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' '
			),
		S0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(hi));
	function Td(e, t, n) {
		var r = e.type || 'unknown-event';
		(e.currentTarget = n), wv(r, t, void 0, e), (e.currentTarget = null);
	}
	function Ld(e, t) {
		t = (t & 4) !== 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				i = r.event;
			r = r.listeners;
			e: {
				var s = void 0;
				if (t)
					for (var o = r.length - 1; 0 <= o; o--) {
						var a = r[o],
							l = a.instance,
							c = a.currentTarget;
						if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
						Td(i, a, c), (s = l);
					}
				else
					for (o = 0; o < r.length; o++) {
						if (((a = r[o]), (l = a.instance), (c = a.currentTarget), (a = a.listener), l !== s && i.isPropagationStopped())) break e;
						Td(i, a, c), (s = l);
					}
			}
		}
		if (ss) throw ((e = Pa), (ss = !1), (Pa = null), e);
	}
	function le(e, t) {
		var n = t[nl];
		n === void 0 && (n = t[nl] = new Set());
		var r = e + '__bubble';
		n.has(r) || (Od(t, e, 2, !1), n.add(r));
	}
	function Xa(e, t, n) {
		var r = 0;
		t && (r |= 4), Od(n, e, r, t);
	}
	var Ss = '_reactListening' + Math.random().toString(36).slice(2);
	function mi(e) {
		if (!e[Ss]) {
			(e[Ss] = !0),
				uf.forEach(function (n) {
					n !== 'selectionchange' && (S0.has(n) || Xa(n, !1, e), Xa(n, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Ss] || ((t[Ss] = !0), Xa('selectionchange', !1, t));
		}
	}
	function Od(e, t, n, r) {
		switch (qf(t)) {
			case 1:
				var i = Nv;
				break;
			case 4:
				i = Iv;
				break;
			default:
				i = ba;
		}
		(n = i.bind(null, t, n, e)),
			(i = void 0),
			!Ca || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
			r
				? i !== void 0
					? e.addEventListener(t, n, { capture: !0, passive: i })
					: e.addEventListener(t, n, !0)
				: i !== void 0
				? e.addEventListener(t, n, { passive: i })
				: e.addEventListener(t, n, !1);
	}
	function Qa(e, t, n, r, i) {
		var s = r;
		if (!(t & 1) && !(t & 2) && r !== null)
			e: for (;;) {
				if (r === null) return;
				var o = r.tag;
				if (o === 3 || o === 4) {
					var a = r.stateNode.containerInfo;
					if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
					if (o === 4)
						for (o = r.return; o !== null; ) {
							var l = o.tag;
							if ((l === 3 || l === 4) && ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))) return;
							o = o.return;
						}
					for (; a !== null; ) {
						if (((o = bn(a)), o === null)) return;
						if (((l = o.tag), l === 5 || l === 6)) {
							r = s = o;
							continue e;
						}
						a = a.parentNode;
					}
				}
				r = r.return;
			}
		Df(function () {
			var c = s,
				u = ka(n),
				f = [];
			e: {
				var d = Cd.get(e);
				if (d !== void 0) {
					var m = Ma,
						w = e;
					switch (e) {
						case 'keypress':
							if (gs(n) === 0) break e;
						case 'keydown':
						case 'keyup':
							m = Zv;
							break;
						case 'focusin':
							(w = 'focus'), (m = Fa);
							break;
						case 'focusout':
							(w = 'blur'), (m = Fa);
							break;
						case 'beforeblur':
						case 'afterblur':
							m = Fa;
							break;
						case 'click':
							if (n.button === 2) break e;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							m = ed;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							m = zv;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							m = t0;
							break;
						case wd:
						case kd:
						case Sd:
							m = Wv;
							break;
						case Ed:
							m = r0;
							break;
						case 'scroll':
							m = Fv;
							break;
						case 'wheel':
							m = s0;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							m = Hv;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							m = nd;
					}
					var T = (t & 4) !== 0,
						j = !T && e === 'scroll',
						v = T ? (d !== null ? d + 'Capture' : null) : d;
					T = [];
					for (var p = c, h; p !== null; ) {
						h = p;
						var P = h.stateNode;
						if ((h.tag === 5 && P !== null && ((h = P), v !== null && ((P = qr(p, v)), P != null && T.push(gi(p, P, h)))), j)) break;
						p = p.return;
					}
					0 < T.length && ((d = new m(d, w, null, n, u)), f.push({ event: d, listeners: T }));
				}
			}
			if (!(t & 7)) {
				e: {
					if (((d = e === 'mouseover' || e === 'pointerover'), (m = e === 'mouseout' || e === 'pointerout'), d && n !== wa && (w = n.relatedTarget || n.fromElement) && (bn(w) || w[Ft]))) break e;
					if (
						(m || d) &&
						((d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window),
						m ? ((w = n.relatedTarget || n.toElement), (m = c), (w = w ? bn(w) : null), w !== null && ((j = Rn(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((m = null), (w = c)),
						m !== w)
					) {
						if (
							((T = ed),
							(P = 'onMouseLeave'),
							(v = 'onMouseEnter'),
							(p = 'mouse'),
							(e === 'pointerout' || e === 'pointerover') && ((T = nd), (P = 'onPointerLeave'), (v = 'onPointerEnter'), (p = 'pointer')),
							(j = m == null ? d : yr(m)),
							(h = w == null ? d : yr(w)),
							(d = new T(P, p + 'leave', m, n, u)),
							(d.target = j),
							(d.relatedTarget = h),
							(P = null),
							bn(u) === c && ((T = new T(v, p + 'enter', w, n, u)), (T.target = h), (T.relatedTarget = j), (P = T)),
							(j = P),
							m && w)
						)
							t: {
								for (T = m, v = w, p = 0, h = T; h; h = mr(h)) p++;
								for (h = 0, P = v; P; P = mr(P)) h++;
								for (; 0 < p - h; ) (T = mr(T)), p--;
								for (; 0 < h - p; ) (v = mr(v)), h--;
								for (; p--; ) {
									if (T === v || (v !== null && T === v.alternate)) break t;
									(T = mr(T)), (v = mr(v));
								}
								T = null;
							}
						else T = null;
						m !== null && jd(f, d, m, T, !1), w !== null && j !== null && jd(f, j, w, T, !0);
					}
				}
				e: {
					if (((d = c ? yr(c) : window), (m = d.nodeName && d.nodeName.toLowerCase()), m === 'select' || (m === 'input' && d.type === 'file'))) var R = d0;
					else if (ld(d))
						if (cd) R = g0;
						else {
							R = h0;
							var L = p0;
						}
					else (m = d.nodeName) && m.toLowerCase() === 'input' && (d.type === 'checkbox' || d.type === 'radio') && (R = m0);
					if (R && (R = R(e, c))) {
						ud(f, R, n, u);
						break e;
					}
					L && L(e, d, c), e === 'focusout' && (L = d._wrapperState) && L.controlled && d.type === 'number' && ma(d, 'number', d.value);
				}
				switch (((L = c ? yr(c) : window), e)) {
					case 'focusin':
						(ld(L) || L.contentEditable === 'true') && ((pr = L), (Ua = c), (pi = null));
						break;
					case 'focusout':
						pi = Ua = pr = null;
						break;
					case 'mousedown':
						Ha = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						(Ha = !1), vd(f, n, u);
						break;
					case 'selectionchange':
						if (x0) break;
					case 'keydown':
					case 'keyup':
						vd(f, n, u);
				}
				var S;
				if (za)
					e: {
						switch (e) {
							case 'compositionstart':
								var y = 'onCompositionStart';
								break e;
							case 'compositionend':
								y = 'onCompositionEnd';
								break e;
							case 'compositionupdate':
								y = 'onCompositionUpdate';
								break e;
						}
						y = void 0;
					}
				else dr ? od(e, n) && (y = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (y = 'onCompositionStart');
				y &&
					(rd && n.locale !== 'ko' && (dr || y !== 'onCompositionStart' ? y === 'onCompositionEnd' && dr && (S = Zf()) : ((on = u), (Aa = 'value' in on ? on.value : on.textContent), (dr = !0))),
					(L = Es(c, y)),
					0 < L.length && ((y = new td(y, e, null, n, u)), f.push({ event: y, listeners: L }), S ? (y.data = S) : ((S = ad(n)), S !== null && (y.data = S)))),
					(S = a0 ? l0(e, n) : u0(e, n)) &&
						((c = Es(c, 'onBeforeInput')), 0 < c.length && ((u = new td('onBeforeInput', 'beforeinput', null, n, u)), f.push({ event: u, listeners: c }), (u.data = S)));
			}
			Ld(f, t);
		});
	}
	function gi(e, t, n) {
		return { instance: e, listener: t, currentTarget: n };
	}
	function Es(e, t) {
		for (var n = t + 'Capture', r = []; e !== null; ) {
			var i = e,
				s = i.stateNode;
			i.tag === 5 && s !== null && ((i = s), (s = qr(e, n)), s != null && r.unshift(gi(e, s, i)), (s = qr(e, t)), s != null && r.push(gi(e, s, i))), (e = e.return);
		}
		return r;
	}
	function mr(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function jd(e, t, n, r, i) {
		for (var s = t._reactName, o = []; n !== null && n !== r; ) {
			var a = n,
				l = a.alternate,
				c = a.stateNode;
			if (l !== null && l === r) break;
			a.tag === 5 && c !== null && ((a = c), i ? ((l = qr(n, s)), l != null && o.unshift(gi(n, l, a))) : i || ((l = qr(n, s)), l != null && o.push(gi(n, l, a)))), (n = n.return);
		}
		o.length !== 0 && e.push({ event: t, listeners: o });
	}
	var E0 = /\r\n?/g,
		C0 = /\u0000|\uFFFD/g;
	function _d(e) {
		return (typeof e == 'string' ? e : '' + e)
			.replace(
				E0,
				`
`
			)
			.replace(C0, '');
	}
	function Cs(e, t, n) {
		if (((t = _d(t)), _d(e) !== t && n)) throw Error(A(425));
	}
	function Ps() {}
	var qa = null,
		Za = null;
	function Ja(e, t) {
		return (
			e === 'textarea' ||
			e === 'noscript' ||
			typeof t.children == 'string' ||
			typeof t.children == 'number' ||
			(typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var el = typeof setTimeout == 'function' ? setTimeout : void 0,
		P0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Rd = typeof Promise == 'function' ? Promise : void 0,
		T0 =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Rd < 'u'
				? function (e) {
						return Rd.resolve(null).then(e).catch(L0);
				  }
				: el;
	function L0(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function tl(e, t) {
		var n = t,
			r = 0;
		do {
			var i = n.nextSibling;
			if ((e.removeChild(n), i && i.nodeType === 8))
				if (((n = i.data), n === '/$')) {
					if (r === 0) {
						e.removeChild(i), oi(t);
						return;
					}
					r--;
				} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
			n = i;
		} while (n);
		oi(t);
	}
	function ln(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
				if (t === '/$') return null;
			}
		}
		return e;
	}
	function bd(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === '$' || n === '$!' || n === '$?') {
					if (t === 0) return e;
					t--;
				} else n === '/$' && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var gr = Math.random().toString(36).slice(2),
		Ot = '__reactFiber$' + gr,
		yi = '__reactProps$' + gr,
		Ft = '__reactContainer$' + gr,
		nl = '__reactEvents$' + gr,
		O0 = '__reactListeners$' + gr,
		j0 = '__reactHandles$' + gr;
	function bn(e) {
		var t = e[Ot];
		if (t) return t;
		for (var n = e.parentNode; n; ) {
			if ((t = n[Ft] || n[Ot])) {
				if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
					for (e = bd(e); e !== null; ) {
						if ((n = e[Ot])) return n;
						e = bd(e);
					}
				return t;
			}
			(e = n), (n = e.parentNode);
		}
		return null;
	}
	function vi(e) {
		return (e = e[Ot] || e[Ft]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
	}
	function yr(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(A(33));
	}
	function Ts(e) {
		return e[yi] || null;
	}
	var rl = [],
		vr = -1;
	function un(e) {
		return { current: e };
	}
	function ue(e) {
		0 > vr || ((e.current = rl[vr]), (rl[vr] = null), vr--);
	}
	function oe(e, t) {
		vr++, (rl[vr] = e.current), (e.current = t);
	}
	var cn = {},
		Ie = un(cn),
		Ke = un(!1),
		Dn = cn;
	function xr(e, t) {
		var n = e.type.contextTypes;
		if (!n) return cn;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {},
			s;
		for (s in n) i[s] = t[s];
		return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
	}
	function Ye(e) {
		return (e = e.childContextTypes), e != null;
	}
	function Ls() {
		ue(Ke), ue(Ie);
	}
	function Dd(e, t, n) {
		if (Ie.current !== cn) throw Error(A(168));
		oe(Ie, t), oe(Ke, n);
	}
	function Ad(e, t, n) {
		var r = e.stateNode;
		if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
		r = r.getChildContext();
		for (var i in r) if (!(i in t)) throw Error(A(108, pv(e) || 'Unknown', i));
		return he({}, n, r);
	}
	function Os(e) {
		return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn), (Dn = Ie.current), oe(Ie, e), oe(Ke, Ke.current), !0;
	}
	function Md(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(A(169));
		n ? ((e = Ad(e, t, Dn)), (r.__reactInternalMemoizedMergedChildContext = e), ue(Ke), ue(Ie), oe(Ie, e)) : ue(Ke), oe(Ke, n);
	}
	var Vt = null,
		js = !1,
		il = !1;
	function Nd(e) {
		Vt === null ? (Vt = [e]) : Vt.push(e);
	}
	function _0(e) {
		(js = !0), Nd(e);
	}
	function fn() {
		if (!il && Vt !== null) {
			il = !0;
			var e = 0,
				t = re;
			try {
				var n = Vt;
				for (re = 1; e < n.length; e++) {
					var r = n[e];
					do r = r(!0);
					while (r !== null);
				}
				(Vt = null), (js = !1);
			} catch (i) {
				throw (Vt !== null && (Vt = Vt.slice(e + 1)), Ff(Ta, fn), i);
			} finally {
				(re = t), (il = !1);
			}
		}
		return null;
	}
	var wr = [],
		kr = 0,
		_s = null,
		Rs = 0,
		at = [],
		lt = 0,
		An = null,
		zt = 1,
		Bt = '';
	function Mn(e, t) {
		(wr[kr++] = Rs), (wr[kr++] = _s), (_s = e), (Rs = t);
	}
	function Id(e, t, n) {
		(at[lt++] = zt), (at[lt++] = Bt), (at[lt++] = An), (An = e);
		var r = zt;
		e = Bt;
		var i = 32 - vt(r) - 1;
		(r &= ~(1 << i)), (n += 1);
		var s = 32 - vt(t) + i;
		if (30 < s) {
			var o = i - (i % 5);
			(s = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (i -= o), (zt = (1 << (32 - vt(t) + i)) | (n << i) | r), (Bt = s + e);
		} else (zt = (1 << s) | (n << i) | r), (Bt = e);
	}
	function sl(e) {
		e.return !== null && (Mn(e, 1), Id(e, 1, 0));
	}
	function ol(e) {
		for (; e === _s; ) (_s = wr[--kr]), (wr[kr] = null), (Rs = wr[--kr]), (wr[kr] = null);
		for (; e === An; ) (An = at[--lt]), (at[lt] = null), (Bt = at[--lt]), (at[lt] = null), (zt = at[--lt]), (at[lt] = null);
	}
	var rt = null,
		it = null,
		pe = !1,
		wt = null;
	function Fd(e, t) {
		var n = dt(5, null, null, 0);
		(n.elementType = 'DELETED'), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
	}
	function Vd(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (rt = e), (it = ln(t.firstChild)), !0) : !1;
			case 6:
				return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (rt = e), (it = null), !0) : !1;
			case 13:
				return (
					(t = t.nodeType !== 8 ? null : t),
					t !== null
						? ((n = An !== null ? { id: zt, overflow: Bt } : null),
						  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
						  (n = dt(18, null, null, 0)),
						  (n.stateNode = t),
						  (n.return = e),
						  (e.child = n),
						  (rt = e),
						  (it = null),
						  !0)
						: !1
				);
			default:
				return !1;
		}
	}
	function al(e) {
		return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
	}
	function ll(e) {
		if (pe) {
			var t = it;
			if (t) {
				var n = t;
				if (!Vd(e, t)) {
					if (al(e)) throw Error(A(418));
					t = ln(n.nextSibling);
					var r = rt;
					t && Vd(e, t) ? Fd(r, n) : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e));
				}
			} else {
				if (al(e)) throw Error(A(418));
				(e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e);
			}
		}
	}
	function zd(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
		rt = e;
	}
	function bs(e) {
		if (e !== rt) return !1;
		if (!pe) return zd(e), (pe = !0), !1;
		var t;
		if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ja(e.type, e.memoizedProps))), t && (t = it))) {
			if (al(e)) throw (Bd(), Error(A(418)));
			for (; t; ) Fd(e, t), (t = ln(t.nextSibling));
		}
		if ((zd(e), e.tag === 13)) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === '/$') {
							if (t === 0) {
								it = ln(e.nextSibling);
								break e;
							}
							t--;
						} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
					}
					e = e.nextSibling;
				}
				it = null;
			}
		} else it = rt ? ln(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Bd() {
		for (var e = it; e; ) e = ln(e.nextSibling);
	}
	function Sr() {
		(it = rt = null), (pe = !1);
	}
	function ul(e) {
		wt === null ? (wt = [e]) : wt.push(e);
	}
	var R0 = It.ReactCurrentBatchConfig;
	function kt(e, t) {
		if (e && e.defaultProps) {
			(t = he({}, t)), (e = e.defaultProps);
			for (var n in e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	var Ds = un(null),
		As = null,
		Er = null,
		cl = null;
	function fl() {
		cl = Er = As = null;
	}
	function dl(e) {
		var t = Ds.current;
		ue(Ds), (e._currentValue = t);
	}
	function pl(e, t, n) {
		for (; e !== null; ) {
			var r = e.alternate;
			if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
			e = e.return;
		}
	}
	function Cr(e, t) {
		(As = e), (cl = Er = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), (e.firstContext = null));
	}
	function ut(e) {
		var t = e._currentValue;
		if (cl !== e)
			if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
				if (As === null) throw Error(A(308));
				(Er = e), (As.dependencies = { lanes: 0, firstContext: e });
			} else Er = Er.next = e;
		return t;
	}
	var Nn = null;
	function hl(e) {
		Nn === null ? (Nn = [e]) : Nn.push(e);
	}
	function $d(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? ((n.next = n), hl(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), $t(e, r);
	}
	function $t(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
		return n.tag === 3 ? n.stateNode : null;
	}
	var dn = !1;
	function ml(e) {
		e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
	}
	function Wd(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
	}
	function Wt(e, t) {
		return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function pn(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (((r = r.shared), te & 2)) {
			var i = r.pending;
			return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), $t(e, n);
		}
		return (i = r.interleaved), i === null ? ((t.next = t), hl(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), $t(e, n);
	}
	function Ms(e, t, n) {
		if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
			var r = t.lanes;
			(r &= e.pendingLanes), (n |= r), (t.lanes = n), ja(e, n);
		}
	}
	function Ud(e, t) {
		var n = e.updateQueue,
			r = e.alternate;
		if (r !== null && ((r = r.updateQueue), n === r)) {
			var i = null,
				s = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
					s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
				} while (n !== null);
				s === null ? (i = s = t) : (s = s.next = t);
			} else i = s = t;
			(n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
			return;
		}
		(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
	}
	function Ns(e, t, n, r) {
		var i = e.updateQueue;
		dn = !1;
		var s = i.firstBaseUpdate,
			o = i.lastBaseUpdate,
			a = i.shared.pending;
		if (a !== null) {
			i.shared.pending = null;
			var l = a,
				c = l.next;
			(l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
			var u = e.alternate;
			u !== null && ((u = u.updateQueue), (a = u.lastBaseUpdate), a !== o && (a === null ? (u.firstBaseUpdate = c) : (a.next = c), (u.lastBaseUpdate = l)));
		}
		if (s !== null) {
			var f = i.baseState;
			(o = 0), (u = c = l = null), (a = s);
			do {
				var d = a.lane,
					m = a.eventTime;
				if ((r & d) === d) {
					u !== null && (u = u.next = { eventTime: m, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
					e: {
						var w = e,
							T = a;
						switch (((d = t), (m = n), T.tag)) {
							case 1:
								if (((w = T.payload), typeof w == 'function')) {
									f = w.call(m, f, d);
									break e;
								}
								f = w;
								break e;
							case 3:
								w.flags = (w.flags & -65537) | 128;
							case 0:
								if (((w = T.payload), (d = typeof w == 'function' ? w.call(m, f, d) : w), d == null)) break e;
								f = he({}, f, d);
								break e;
							case 2:
								dn = !0;
						}
					}
					a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
				} else (m = { eventTime: m, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), u === null ? ((c = u = m), (l = f)) : (u = u.next = m), (o |= d);
				if (((a = a.next), a === null)) {
					if (((a = i.shared.pending), a === null)) break;
					(d = a), (a = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
				}
			} while (1);
			if ((u === null && (l = f), (i.baseState = l), (i.firstBaseUpdate = c), (i.lastBaseUpdate = u), (t = i.shared.interleaved), t !== null)) {
				i = t;
				do (o |= i.lane), (i = i.next);
				while (i !== t);
			} else s === null && (i.shared.lanes = 0);
			(Vn |= o), (e.lanes = o), (e.memoizedState = f);
		}
	}
	function Hd(e, t, n) {
		if (((e = t.effects), (t.effects = null), e !== null))
			for (t = 0; t < e.length; t++) {
				var r = e[t],
					i = r.callback;
				if (i !== null) {
					if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(A(191, i));
					i.call(r);
				}
			}
	}
	var Gd = new lf.Component().refs;
	function gl(e, t, n, r) {
		(t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : he({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Is = {
		isMounted: function (e) {
			return (e = e._reactInternals) ? Rn(e) === e : !1;
		},
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var r = He(),
				i = yn(e),
				s = Wt(r, i);
			(s.payload = t), n != null && (s.callback = n), (t = pn(e, s, i)), t !== null && (Ct(t, e, i, r), Ms(t, e, i));
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var r = He(),
				i = yn(e),
				s = Wt(r, i);
			(s.tag = 1), (s.payload = t), n != null && (s.callback = n), (t = pn(e, s, i)), t !== null && (Ct(t, e, i, r), Ms(t, e, i));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = He(),
				r = yn(e),
				i = Wt(n, r);
			(i.tag = 2), t != null && (i.callback = t), (t = pn(e, i, r)), t !== null && (Ct(t, e, r, n), Ms(t, e, r));
		},
	};
	function Kd(e, t, n, r, i, s, o) {
		return (e = e.stateNode), typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !di(n, r) || !di(i, s) : !0;
	}
	function Yd(e, t, n) {
		var r = !1,
			i = cn,
			s = t.contextType;
		return (
			typeof s == 'object' && s !== null ? (s = ut(s)) : ((i = Ye(t) ? Dn : Ie.current), (r = t.contextTypes), (s = (r = r != null) ? xr(e, i) : cn)),
			(t = new t(n, s)),
			(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
			(t.updater = Is),
			(e.stateNode = t),
			(t._reactInternals = e),
			r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = s)),
			t
		);
	}
	function Xd(e, t, n, r) {
		(e = t.state),
			typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
			typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
			t.state !== e && Is.enqueueReplaceState(t, t.state, null);
	}
	function yl(e, t, n, r) {
		var i = e.stateNode;
		(i.props = n), (i.state = e.memoizedState), (i.refs = Gd), ml(e);
		var s = t.contextType;
		typeof s == 'object' && s !== null ? (i.context = ut(s)) : ((s = Ye(t) ? Dn : Ie.current), (i.context = xr(e, s))),
			(i.state = e.memoizedState),
			(s = t.getDerivedStateFromProps),
			typeof s == 'function' && (gl(e, t, s, n), (i.state = e.memoizedState)),
			typeof t.getDerivedStateFromProps == 'function' ||
				typeof i.getSnapshotBeforeUpdate == 'function' ||
				(typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
				((t = i.state),
				typeof i.componentWillMount == 'function' && i.componentWillMount(),
				typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
				t !== i.state && Is.enqueueReplaceState(i, i.state, null),
				Ns(e, n, i, r),
				(i.state = e.memoizedState)),
			typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
	}
	function xi(e, t, n) {
		if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
			if (n._owner) {
				if (((n = n._owner), n)) {
					if (n.tag !== 1) throw Error(A(309));
					var r = n.stateNode;
				}
				if (!r) throw Error(A(147, e));
				var i = r,
					s = '' + e;
				return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
					? t.ref
					: ((t = function (o) {
							var a = i.refs;
							a === Gd && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
					  }),
					  (t._stringRef = s),
					  t);
			}
			if (typeof e != 'string') throw Error(A(284));
			if (!n._owner) throw Error(A(290, e));
		}
		return e;
	}
	function Fs(e, t) {
		throw ((e = Object.prototype.toString.call(t)), Error(A(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
	}
	function Qd(e) {
		var t = e._init;
		return t(e._payload);
	}
	function qd(e) {
		function t(v, p) {
			if (e) {
				var h = v.deletions;
				h === null ? ((v.deletions = [p]), (v.flags |= 16)) : h.push(p);
			}
		}
		function n(v, p) {
			if (!e) return null;
			for (; p !== null; ) t(v, p), (p = p.sibling);
			return null;
		}
		function r(v, p) {
			for (v = new Map(); p !== null; ) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
			return v;
		}
		function i(v, p) {
			return (v = xn(v, p)), (v.index = 0), (v.sibling = null), v;
		}
		function s(v, p, h) {
			return (v.index = h), e ? ((h = v.alternate), h !== null ? ((h = h.index), h < p ? ((v.flags |= 2), p) : h) : ((v.flags |= 2), p)) : ((v.flags |= 1048576), p);
		}
		function o(v) {
			return e && v.alternate === null && (v.flags |= 2), v;
		}
		function a(v, p, h, P) {
			return p === null || p.tag !== 6 ? ((p = eu(h, v.mode, P)), (p.return = v), p) : ((p = i(p, h)), (p.return = v), p);
		}
		function l(v, p, h, P) {
			var R = h.type;
			return R === or
				? u(v, p, h.props.children, P, h.key)
				: p !== null && (p.elementType === R || (typeof R == 'object' && R !== null && R.$$typeof === Jt && Qd(R) === p.type))
				? ((P = i(p, h.props)), (P.ref = xi(v, p, h)), (P.return = v), P)
				: ((P = ro(h.type, h.key, h.props, null, v.mode, P)), (P.ref = xi(v, p, h)), (P.return = v), P);
		}
		function c(v, p, h, P) {
			return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation
				? ((p = tu(h, v.mode, P)), (p.return = v), p)
				: ((p = i(p, h.children || [])), (p.return = v), p);
		}
		function u(v, p, h, P, R) {
			return p === null || p.tag !== 7 ? ((p = Wn(h, v.mode, P, R)), (p.return = v), p) : ((p = i(p, h)), (p.return = v), p);
		}
		function f(v, p, h) {
			if ((typeof p == 'string' && p !== '') || typeof p == 'number') return (p = eu('' + p, v.mode, h)), (p.return = v), p;
			if (typeof p == 'object' && p !== null) {
				switch (p.$$typeof) {
					case es:
						return (h = ro(p.type, p.key, p.props, null, v.mode, h)), (h.ref = xi(v, null, p)), (h.return = v), h;
					case sr:
						return (p = tu(p, v.mode, h)), (p.return = v), p;
					case Jt:
						var P = p._init;
						return f(v, P(p._payload), h);
				}
				if (Yr(p) || Gr(p)) return (p = Wn(p, v.mode, h, null)), (p.return = v), p;
				Fs(v, p);
			}
			return null;
		}
		function d(v, p, h, P) {
			var R = p !== null ? p.key : null;
			if ((typeof h == 'string' && h !== '') || typeof h == 'number') return R !== null ? null : a(v, p, '' + h, P);
			if (typeof h == 'object' && h !== null) {
				switch (h.$$typeof) {
					case es:
						return h.key === R ? l(v, p, h, P) : null;
					case sr:
						return h.key === R ? c(v, p, h, P) : null;
					case Jt:
						return (R = h._init), d(v, p, R(h._payload), P);
				}
				if (Yr(h) || Gr(h)) return R !== null ? null : u(v, p, h, P, null);
				Fs(v, h);
			}
			return null;
		}
		function m(v, p, h, P, R) {
			if ((typeof P == 'string' && P !== '') || typeof P == 'number') return (v = v.get(h) || null), a(p, v, '' + P, R);
			if (typeof P == 'object' && P !== null) {
				switch (P.$$typeof) {
					case es:
						return (v = v.get(P.key === null ? h : P.key) || null), l(p, v, P, R);
					case sr:
						return (v = v.get(P.key === null ? h : P.key) || null), c(p, v, P, R);
					case Jt:
						var L = P._init;
						return m(v, p, h, L(P._payload), R);
				}
				if (Yr(P) || Gr(P)) return (v = v.get(h) || null), u(p, v, P, R, null);
				Fs(p, P);
			}
			return null;
		}
		function w(v, p, h, P) {
			for (var R = null, L = null, S = p, y = (p = 0), x = null; S !== null && y < h.length; y++) {
				S.index > y ? ((x = S), (S = null)) : (x = S.sibling);
				var k = d(v, S, h[y], P);
				if (k === null) {
					S === null && (S = x);
					break;
				}
				e && S && k.alternate === null && t(v, S), (p = s(k, p, y)), L === null ? (R = k) : (L.sibling = k), (L = k), (S = x);
			}
			if (y === h.length) return n(v, S), pe && Mn(v, y), R;
			if (S === null) {
				for (; y < h.length; y++) (S = f(v, h[y], P)), S !== null && ((p = s(S, p, y)), L === null ? (R = S) : (L.sibling = S), (L = S));
				return pe && Mn(v, y), R;
			}
			for (S = r(v, S); y < h.length; y++)
				(x = m(S, v, y, h[y], P)), x !== null && (e && x.alternate !== null && S.delete(x.key === null ? y : x.key), (p = s(x, p, y)), L === null ? (R = x) : (L.sibling = x), (L = x));
			return (
				e &&
					S.forEach(function (_) {
						return t(v, _);
					}),
				pe && Mn(v, y),
				R
			);
		}
		function T(v, p, h, P) {
			var R = Gr(h);
			if (typeof R != 'function') throw Error(A(150));
			if (((h = R.call(h)), h == null)) throw Error(A(151));
			for (var L = (R = null), S = p, y = (p = 0), x = null, k = h.next(); S !== null && !k.done; y++, k = h.next()) {
				S.index > y ? ((x = S), (S = null)) : (x = S.sibling);
				var _ = d(v, S, k.value, P);
				if (_ === null) {
					S === null && (S = x);
					break;
				}
				e && S && _.alternate === null && t(v, S), (p = s(_, p, y)), L === null ? (R = _) : (L.sibling = _), (L = _), (S = x);
			}
			if (k.done) return n(v, S), pe && Mn(v, y), R;
			if (S === null) {
				for (; !k.done; y++, k = h.next()) (k = f(v, k.value, P)), k !== null && ((p = s(k, p, y)), L === null ? (R = k) : (L.sibling = k), (L = k));
				return pe && Mn(v, y), R;
			}
			for (S = r(v, S); !k.done; y++, k = h.next())
				(k = m(S, v, y, k.value, P)), k !== null && (e && k.alternate !== null && S.delete(k.key === null ? y : k.key), (p = s(k, p, y)), L === null ? (R = k) : (L.sibling = k), (L = k));
			return (
				e &&
					S.forEach(function (b) {
						return t(v, b);
					}),
				pe && Mn(v, y),
				R
			);
		}
		function j(v, p, h, P) {
			if ((typeof h == 'object' && h !== null && h.type === or && h.key === null && (h = h.props.children), typeof h == 'object' && h !== null)) {
				switch (h.$$typeof) {
					case es:
						e: {
							for (var R = h.key, L = p; L !== null; ) {
								if (L.key === R) {
									if (((R = h.type), R === or)) {
										if (L.tag === 7) {
											n(v, L.sibling), (p = i(L, h.props.children)), (p.return = v), (v = p);
											break e;
										}
									} else if (L.elementType === R || (typeof R == 'object' && R !== null && R.$$typeof === Jt && Qd(R) === L.type)) {
										n(v, L.sibling), (p = i(L, h.props)), (p.ref = xi(v, L, h)), (p.return = v), (v = p);
										break e;
									}
									n(v, L);
									break;
								} else t(v, L);
								L = L.sibling;
							}
							h.type === or
								? ((p = Wn(h.props.children, v.mode, P, h.key)), (p.return = v), (v = p))
								: ((P = ro(h.type, h.key, h.props, null, v.mode, P)), (P.ref = xi(v, p, h)), (P.return = v), (v = P));
						}
						return o(v);
					case sr:
						e: {
							for (L = h.key; p !== null; ) {
								if (p.key === L)
									if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
										n(v, p.sibling), (p = i(p, h.children || [])), (p.return = v), (v = p);
										break e;
									} else {
										n(v, p);
										break;
									}
								else t(v, p);
								p = p.sibling;
							}
							(p = tu(h, v.mode, P)), (p.return = v), (v = p);
						}
						return o(v);
					case Jt:
						return (L = h._init), j(v, p, L(h._payload), P);
				}
				if (Yr(h)) return w(v, p, h, P);
				if (Gr(h)) return T(v, p, h, P);
				Fs(v, h);
			}
			return (typeof h == 'string' && h !== '') || typeof h == 'number'
				? ((h = '' + h), p !== null && p.tag === 6 ? (n(v, p.sibling), (p = i(p, h)), (p.return = v), (v = p)) : (n(v, p), (p = eu(h, v.mode, P)), (p.return = v), (v = p)), o(v))
				: n(v, p);
		}
		return j;
	}
	var Pr = qd(!0),
		Zd = qd(!1),
		wi = {},
		jt = un(wi),
		ki = un(wi),
		Si = un(wi);
	function In(e) {
		if (e === wi) throw Error(A(174));
		return e;
	}
	function vl(e, t) {
		switch ((oe(Si, t), oe(ki, e), oe(jt, wi), (e = t.nodeType), e)) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : ya(null, '');
				break;
			default:
				(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ya(t, e));
		}
		ue(jt), oe(jt, t);
	}
	function Tr() {
		ue(jt), ue(ki), ue(Si);
	}
	function Jd(e) {
		In(Si.current);
		var t = In(jt.current),
			n = ya(t, e.type);
		t !== n && (oe(ki, e), oe(jt, n));
	}
	function xl(e) {
		ki.current === e && (ue(jt), ue(ki));
	}
	var me = un(0);
	function Vs(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	var wl = [];
	function kl() {
		for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
		wl.length = 0;
	}
	var zs = It.ReactCurrentDispatcher,
		Sl = It.ReactCurrentBatchConfig,
		Fn = 0,
		ge = null,
		Le = null,
		je = null,
		Bs = !1,
		Ei = !1,
		Ci = 0,
		b0 = 0;
	function Fe() {
		throw Error(A(321));
	}
	function El(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!xt(e[n], t[n])) return !1;
		return !0;
	}
	function Cl(e, t, n, r, i, s) {
		if (((Fn = s), (ge = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (zs.current = e === null || e.memoizedState === null ? N0 : I0), (e = n(r, i)), Ei)) {
			s = 0;
			do {
				if (((Ei = !1), (Ci = 0), 25 <= s)) throw Error(A(301));
				(s += 1), (je = Le = null), (t.updateQueue = null), (zs.current = F0), (e = n(r, i));
			} while (Ei);
		}
		if (((zs.current = Us), (t = Le !== null && Le.next !== null), (Fn = 0), (je = Le = ge = null), (Bs = !1), t)) throw Error(A(300));
		return e;
	}
	function Pl() {
		var e = Ci !== 0;
		return (Ci = 0), e;
	}
	function _t() {
		var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
		return je === null ? (ge.memoizedState = je = e) : (je = je.next = e), je;
	}
	function ct() {
		if (Le === null) {
			var e = ge.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = Le.next;
		var t = je === null ? ge.memoizedState : je.next;
		if (t !== null) (je = t), (Le = e);
		else {
			if (e === null) throw Error(A(310));
			(Le = e),
				(e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }),
				je === null ? (ge.memoizedState = je = e) : (je = je.next = e);
		}
		return je;
	}
	function Pi(e, t) {
		return typeof t == 'function' ? t(e) : t;
	}
	function Tl(e) {
		var t = ct(),
			n = t.queue;
		if (n === null) throw Error(A(311));
		n.lastRenderedReducer = e;
		var r = Le,
			i = r.baseQueue,
			s = n.pending;
		if (s !== null) {
			if (i !== null) {
				var o = i.next;
				(i.next = s.next), (s.next = o);
			}
			(r.baseQueue = i = s), (n.pending = null);
		}
		if (i !== null) {
			(s = i.next), (r = r.baseState);
			var a = (o = null),
				l = null,
				c = s;
			do {
				var u = c.lane;
				if ((Fn & u) === u)
					l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
				else {
					var f = { lane: u, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
					l === null ? ((a = l = f), (o = r)) : (l = l.next = f), (ge.lanes |= u), (Vn |= u);
				}
				c = c.next;
			} while (c !== null && c !== s);
			l === null ? (o = r) : (l.next = a), xt(r, t.memoizedState) || (Xe = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = l), (n.lastRenderedState = r);
		}
		if (((e = n.interleaved), e !== null)) {
			i = e;
			do (s = i.lane), (ge.lanes |= s), (Vn |= s), (i = i.next);
			while (i !== e);
		} else i === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Ll(e) {
		var t = ct(),
			n = t.queue;
		if (n === null) throw Error(A(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch,
			i = n.pending,
			s = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var o = (i = i.next);
			do (s = e(s, o.action)), (o = o.next);
			while (o !== i);
			xt(s, t.memoizedState) || (Xe = !0), (t.memoizedState = s), t.baseQueue === null && (t.baseState = s), (n.lastRenderedState = s);
		}
		return [s, r];
	}
	function ep() {}
	function tp(e, t) {
		var n = ge,
			r = ct(),
			i = t(),
			s = !xt(r.memoizedState, i);
		if ((s && ((r.memoizedState = i), (Xe = !0)), (r = r.queue), Ol(ip.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || (je !== null && je.memoizedState.tag & 1))) {
			if (((n.flags |= 2048), Ti(9, rp.bind(null, n, r, i, t), void 0, null), _e === null)) throw Error(A(349));
			Fn & 30 || np(n, t, i);
		}
		return i;
	}
	function np(e, t, n) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: n }),
			(t = ge.updateQueue),
			t === null ? ((t = { lastEffect: null, stores: null }), (ge.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
	}
	function rp(e, t, n, r) {
		(t.value = n), (t.getSnapshot = r), sp(t) && op(e);
	}
	function ip(e, t, n) {
		return n(function () {
			sp(t) && op(e);
		});
	}
	function sp(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !xt(e, n);
		} catch {
			return !0;
		}
	}
	function op(e) {
		var t = $t(e, 1);
		t !== null && Ct(t, e, 1, -1);
	}
	function ap(e) {
		var t = _t();
		return (
			typeof e == 'function' && (e = e()),
			(t.memoizedState = t.baseState = e),
			(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pi, lastRenderedState: e }),
			(t.queue = e),
			(e = e.dispatch = M0.bind(null, ge, e)),
			[t.memoizedState, e]
		);
	}
	function Ti(e, t, n, r) {
		return (
			(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
			(t = ge.updateQueue),
			t === null
				? ((t = { lastEffect: null, stores: null }), (ge.updateQueue = t), (t.lastEffect = e.next = e))
				: ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
			e
		);
	}
	function lp() {
		return ct().memoizedState;
	}
	function $s(e, t, n, r) {
		var i = _t();
		(ge.flags |= e), (i.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r));
	}
	function Ws(e, t, n, r) {
		var i = ct();
		r = r === void 0 ? null : r;
		var s = void 0;
		if (Le !== null) {
			var o = Le.memoizedState;
			if (((s = o.destroy), r !== null && El(r, o.deps))) {
				i.memoizedState = Ti(t, n, s, r);
				return;
			}
		}
		(ge.flags |= e), (i.memoizedState = Ti(1 | t, n, s, r));
	}
	function up(e, t) {
		return $s(8390656, 8, e, t);
	}
	function Ol(e, t) {
		return Ws(2048, 8, e, t);
	}
	function cp(e, t) {
		return Ws(4, 2, e, t);
	}
	function fp(e, t) {
		return Ws(4, 4, e, t);
	}
	function dp(e, t) {
		if (typeof t == 'function')
			return (
				(e = e()),
				t(e),
				function () {
					t(null);
				}
			);
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function pp(e, t, n) {
		return (n = n != null ? n.concat([e]) : null), Ws(4, 4, dp.bind(null, t, e), n);
	}
	function jl() {}
	function hp(e, t) {
		var n = ct();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && El(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
	}
	function mp(e, t) {
		var n = ct();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && El(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
	}
	function gp(e, t, n) {
		return Fn & 21 ? (xt(n, t) || ((n = $f()), (ge.lanes |= n), (Vn |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
	}
	function D0(e, t) {
		var n = re;
		(re = n !== 0 && 4 > n ? n : 4), e(!0);
		var r = Sl.transition;
		Sl.transition = {};
		try {
			e(!1), t();
		} finally {
			(re = n), (Sl.transition = r);
		}
	}
	function yp() {
		return ct().memoizedState;
	}
	function A0(e, t, n) {
		var r = yn(e);
		if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), vp(e))) xp(t, n);
		else if (((n = $d(e, t, n, r)), n !== null)) {
			var i = He();
			Ct(n, e, r, i), wp(n, t, r);
		}
	}
	function M0(e, t, n) {
		var r = yn(e),
			i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
		if (vp(e)) xp(t, i);
		else {
			var s = e.alternate;
			if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
				try {
					var o = t.lastRenderedState,
						a = s(o, n);
					if (((i.hasEagerState = !0), (i.eagerState = a), xt(a, o))) {
						var l = t.interleaved;
						l === null ? ((i.next = i), hl(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
						return;
					}
				} catch {
				} finally {
				}
			(n = $d(e, t, i, r)), n !== null && ((i = He()), Ct(n, e, r, i), wp(n, t, r));
		}
	}
	function vp(e) {
		var t = e.alternate;
		return e === ge || (t !== null && t === ge);
	}
	function xp(e, t) {
		Ei = Bs = !0;
		var n = e.pending;
		n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
	}
	function wp(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			(r &= e.pendingLanes), (n |= r), (t.lanes = n), ja(e, n);
		}
	}
	var Us = {
			readContext: ut,
			useCallback: Fe,
			useContext: Fe,
			useEffect: Fe,
			useImperativeHandle: Fe,
			useInsertionEffect: Fe,
			useLayoutEffect: Fe,
			useMemo: Fe,
			useReducer: Fe,
			useRef: Fe,
			useState: Fe,
			useDebugValue: Fe,
			useDeferredValue: Fe,
			useTransition: Fe,
			useMutableSource: Fe,
			useSyncExternalStore: Fe,
			useId: Fe,
			unstable_isNewReconciler: !1,
		},
		N0 = {
			readContext: ut,
			useCallback: function (e, t) {
				return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: ut,
			useEffect: up,
			useImperativeHandle: function (e, t, n) {
				return (n = n != null ? n.concat([e]) : null), $s(4194308, 4, dp.bind(null, t, e), n);
			},
			useLayoutEffect: function (e, t) {
				return $s(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				return $s(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var n = _t();
				return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
			},
			useReducer: function (e, t, n) {
				var r = _t();
				return (
					(t = n !== void 0 ? n(t) : t),
					(r.memoizedState = r.baseState = t),
					(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
					(r.queue = e),
					(e = e.dispatch = A0.bind(null, ge, e)),
					[r.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = _t();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: ap,
			useDebugValue: jl,
			useDeferredValue: function (e) {
				return (_t().memoizedState = e);
			},
			useTransition: function () {
				var e = ap(!1),
					t = e[0];
				return (e = D0.bind(null, e[1])), (_t().memoizedState = e), [t, e];
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (e, t, n) {
				var r = ge,
					i = _t();
				if (pe) {
					if (n === void 0) throw Error(A(407));
					n = n();
				} else {
					if (((n = t()), _e === null)) throw Error(A(349));
					Fn & 30 || np(r, t, n);
				}
				i.memoizedState = n;
				var s = { value: n, getSnapshot: t };
				return (i.queue = s), up(ip.bind(null, r, s, e), [e]), (r.flags |= 2048), Ti(9, rp.bind(null, r, s, n, t), void 0, null), n;
			},
			useId: function () {
				var e = _t(),
					t = _e.identifierPrefix;
				if (pe) {
					var n = Bt,
						r = zt;
					(n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n), (t = ':' + t + 'R' + n), (n = Ci++), 0 < n && (t += 'H' + n.toString(32)), (t += ':');
				} else (n = b0++), (t = ':' + t + 'r' + n.toString(32) + ':');
				return (e.memoizedState = t);
			},
			unstable_isNewReconciler: !1,
		},
		I0 = {
			readContext: ut,
			useCallback: hp,
			useContext: ut,
			useEffect: Ol,
			useImperativeHandle: pp,
			useInsertionEffect: cp,
			useLayoutEffect: fp,
			useMemo: mp,
			useReducer: Tl,
			useRef: lp,
			useState: function () {
				return Tl(Pi);
			},
			useDebugValue: jl,
			useDeferredValue: function (e) {
				var t = ct();
				return gp(t, Le.memoizedState, e);
			},
			useTransition: function () {
				var e = Tl(Pi)[0],
					t = ct().memoizedState;
				return [e, t];
			},
			useMutableSource: ep,
			useSyncExternalStore: tp,
			useId: yp,
			unstable_isNewReconciler: !1,
		},
		F0 = {
			readContext: ut,
			useCallback: hp,
			useContext: ut,
			useEffect: Ol,
			useImperativeHandle: pp,
			useInsertionEffect: cp,
			useLayoutEffect: fp,
			useMemo: mp,
			useReducer: Ll,
			useRef: lp,
			useState: function () {
				return Ll(Pi);
			},
			useDebugValue: jl,
			useDeferredValue: function (e) {
				var t = ct();
				return Le === null ? (t.memoizedState = e) : gp(t, Le.memoizedState, e);
			},
			useTransition: function () {
				var e = Ll(Pi)[0],
					t = ct().memoizedState;
				return [e, t];
			},
			useMutableSource: ep,
			useSyncExternalStore: tp,
			useId: yp,
			unstable_isNewReconciler: !1,
		};
	function Lr(e, t) {
		try {
			var n = '',
				r = t;
			do (n += dv(r)), (r = r.return);
			while (r);
			var i = n;
		} catch (s) {
			i =
				`
Error generating stack: ` +
				s.message +
				`
` +
				s.stack;
		}
		return { value: e, source: t, stack: i, digest: null };
	}
	function _l(e, t, n) {
		return { value: e, source: null, stack: n ?? null, digest: t ?? null };
	}
	function Rl(e, t) {
		try {
			console.error(t.value);
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	var V0 = typeof WeakMap == 'function' ? WeakMap : Map;
	function kp(e, t, n) {
		(n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
		var r = t.value;
		return (
			(n.callback = function () {
				qs || ((qs = !0), (Gl = r)), Rl(e, t);
			}),
			n
		);
	}
	function Sp(e, t, n) {
		(n = Wt(-1, n)), (n.tag = 3);
		var r = e.type.getDerivedStateFromError;
		if (typeof r == 'function') {
			var i = t.value;
			(n.payload = function () {
				return r(i);
			}),
				(n.callback = function () {
					Rl(e, t);
				});
		}
		var s = e.stateNode;
		return (
			s !== null &&
				typeof s.componentDidCatch == 'function' &&
				(n.callback = function () {
					Rl(e, t), typeof r != 'function' && (mn === null ? (mn = new Set([this])) : mn.add(this));
					var o = t.stack;
					this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
				}),
			n
		);
	}
	function Ep(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new V0();
			var i = new Set();
			r.set(t, i);
		} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
		i.has(n) || (i.add(n), (e = J0.bind(null, e, t, n)), t.then(e, e));
	}
	function Cp(e) {
		do {
			var t;
			if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Pp(e, t, n, r, i) {
		return e.mode & 1
			? ((e.flags |= 65536), (e.lanes = i), e)
			: (e === t
					? (e.flags |= 65536)
					: ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Wt(-1, 1)), (t.tag = 2), pn(n, t, 1))), (n.lanes |= 1)),
			  e);
	}
	var z0 = It.ReactCurrentOwner,
		Xe = !1;
	function Ue(e, t, n, r) {
		t.child = e === null ? Zd(t, null, n, r) : Pr(t, e.child, n, r);
	}
	function Tp(e, t, n, r, i) {
		n = n.render;
		var s = t.ref;
		return (
			Cr(t, i),
			(r = Cl(e, t, n, r, s, i)),
			(n = Pl()),
			e !== null && !Xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ut(e, t, i)) : (pe && n && sl(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
		);
	}
	function Lp(e, t, n, r, i) {
		if (e === null) {
			var s = n.type;
			return typeof s == 'function' && !Jl(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
				? ((t.tag = 15), (t.type = s), Op(e, t, s, r, i))
				: ((e = ro(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
		}
		if (((s = e.child), !(e.lanes & i))) {
			var o = s.memoizedProps;
			if (((n = n.compare), (n = n !== null ? n : di), n(o, r) && e.ref === t.ref)) return Ut(e, t, i);
		}
		return (t.flags |= 1), (e = xn(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
	}
	function Op(e, t, n, r, i) {
		if (e !== null) {
			var s = e.memoizedProps;
			if (di(s, r) && e.ref === t.ref)
				if (((Xe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Xe = !0);
				else return (t.lanes = e.lanes), Ut(e, t, i);
		}
		return bl(e, t, n, r, i);
	}
	function jp(e, t, n) {
		var r = t.pendingProps,
			i = r.children,
			s = e !== null ? e.memoizedState : null;
		if (r.mode === 'hidden')
			if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oe(jr, st), (st |= n);
			else {
				if (!(n & 1073741824))
					return (
						(e = s !== null ? s.baseLanes | n : n),
						(t.lanes = t.childLanes = 1073741824),
						(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
						(t.updateQueue = null),
						oe(jr, st),
						(st |= e),
						null
					);
				(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = s !== null ? s.baseLanes : n), oe(jr, st), (st |= r);
			}
		else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), oe(jr, st), (st |= r);
		return Ue(e, t, i, n), t.child;
	}
	function _p(e, t) {
		var n = t.ref;
		((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
	}
	function bl(e, t, n, r, i) {
		var s = Ye(n) ? Dn : Ie.current;
		return (
			(s = xr(t, s)),
			Cr(t, i),
			(n = Cl(e, t, n, r, s, i)),
			(r = Pl()),
			e !== null && !Xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ut(e, t, i)) : (pe && r && sl(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
		);
	}
	function Rp(e, t, n, r, i) {
		if (Ye(n)) {
			var s = !0;
			Os(t);
		} else s = !1;
		if ((Cr(t, i), t.stateNode === null)) Gs(e, t), Yd(t, n, r), yl(t, n, r, i), (r = !0);
		else if (e === null) {
			var o = t.stateNode,
				a = t.memoizedProps;
			o.props = a;
			var l = o.context,
				c = n.contextType;
			typeof c == 'object' && c !== null ? (c = ut(c)) : ((c = Ye(n) ? Dn : Ie.current), (c = xr(t, c)));
			var u = n.getDerivedStateFromProps,
				f = typeof u == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
			f || (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') || ((a !== r || l !== c) && Xd(t, o, r, c)), (dn = !1);
			var d = t.memoizedState;
			(o.state = d),
				Ns(t, r, o, i),
				(l = t.memoizedState),
				a !== r || d !== l || Ke.current || dn
					? (typeof u == 'function' && (gl(t, n, u, r), (l = t.memoizedState)),
					  (a = dn || Kd(t, n, a, r, d, l, c))
							? (f ||
									(typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
									(typeof o.componentWillMount == 'function' && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
							  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
							: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
					  (o.props = r),
					  (o.state = l),
					  (o.context = c),
					  (r = a))
					: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
		} else {
			(o = t.stateNode),
				Wd(e, t),
				(a = t.memoizedProps),
				(c = t.type === t.elementType ? a : kt(t.type, a)),
				(o.props = c),
				(f = t.pendingProps),
				(d = o.context),
				(l = n.contextType),
				typeof l == 'object' && l !== null ? (l = ut(l)) : ((l = Ye(n) ? Dn : Ie.current), (l = xr(t, l)));
			var m = n.getDerivedStateFromProps;
			(u = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
				(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
				((a !== f || d !== l) && Xd(t, o, r, l)),
				(dn = !1),
				(d = t.memoizedState),
				(o.state = d),
				Ns(t, r, o, i);
			var w = t.memoizedState;
			a !== f || d !== w || Ke.current || dn
				? (typeof m == 'function' && (gl(t, n, m, r), (w = t.memoizedState)),
				  (c = dn || Kd(t, n, c, r, d, w, l) || !1)
						? (u ||
								(typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
								(typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, w, l), typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, w, l)),
						  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
						  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
						: (typeof o.componentDidUpdate != 'function' || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
						  typeof o.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
						  (t.memoizedProps = r),
						  (t.memoizedState = w)),
				  (o.props = r),
				  (o.state = w),
				  (o.context = l),
				  (r = c))
				: (typeof o.componentDidUpdate != 'function' || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
				  typeof o.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
				  (r = !1));
		}
		return Dl(e, t, n, r, s, i);
	}
	function Dl(e, t, n, r, i, s) {
		_p(e, t);
		var o = (t.flags & 128) !== 0;
		if (!r && !o) return i && Md(t, n, !1), Ut(e, t, s);
		(r = t.stateNode), (z0.current = t);
		var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
		return (t.flags |= 1), e !== null && o ? ((t.child = Pr(t, e.child, null, s)), (t.child = Pr(t, null, a, s))) : Ue(e, t, a, s), (t.memoizedState = r.state), i && Md(t, n, !0), t.child;
	}
	function bp(e) {
		var t = e.stateNode;
		t.pendingContext ? Dd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dd(e, t.context, !1), vl(e, t.containerInfo);
	}
	function Dp(e, t, n, r, i) {
		return Sr(), ul(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
	}
	var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
	function Ml(e) {
		return { baseLanes: e, cachePool: null, transitions: null };
	}
	function Ap(e, t, n) {
		var r = t.pendingProps,
			i = me.current,
			s = !1,
			o = (t.flags & 128) !== 0,
			a;
		if (
			((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
			a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
			oe(me, i & 1),
			e === null)
		)
			return (
				ll(t),
				(e = t.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)
					? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
					: ((o = r.children),
					  (e = r.fallback),
					  s
							? ((r = t.mode),
							  (s = t.child),
							  (o = { mode: 'hidden', children: o }),
							  !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = io(o, r, 0, null)),
							  (e = Wn(e, r, n, null)),
							  (s.return = t),
							  (e.return = t),
							  (s.sibling = e),
							  (t.child = s),
							  (t.child.memoizedState = Ml(n)),
							  (t.memoizedState = Al),
							  e)
							: Nl(t, o))
			);
		if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return B0(e, t, o, r, a, i, n);
		if (s) {
			(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
			var l = { mode: 'hidden', children: r.children };
			return (
				!(o & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null)) : ((r = xn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
				a !== null ? (s = xn(a, s)) : ((s = Wn(s, o, n, null)), (s.flags |= 2)),
				(s.return = t),
				(r.return = t),
				(r.sibling = s),
				(t.child = r),
				(r = s),
				(s = t.child),
				(o = e.child.memoizedState),
				(o = o === null ? Ml(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
				(s.memoizedState = o),
				(s.childLanes = e.childLanes & ~n),
				(t.memoizedState = Al),
				r
			);
		}
		return (
			(s = e.child),
			(e = s.sibling),
			(r = xn(s, { mode: 'visible', children: r.children })),
			!(t.mode & 1) && (r.lanes = n),
			(r.return = t),
			(r.sibling = null),
			e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
			(t.child = r),
			(t.memoizedState = null),
			r
		);
	}
	function Nl(e, t) {
		return (t = io({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
	}
	function Hs(e, t, n, r) {
		return r !== null && ul(r), Pr(t, e.child, null, n), (e = Nl(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
	}
	function B0(e, t, n, r, i, s, o) {
		if (n)
			return t.flags & 256
				? ((t.flags &= -257), (r = _l(Error(A(422)))), Hs(e, t, o, r))
				: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((s = r.fallback),
				  (i = t.mode),
				  (r = io({ mode: 'visible', children: r.children }, i, 0, null)),
				  (s = Wn(s, i, o, null)),
				  (s.flags |= 2),
				  (r.return = t),
				  (s.return = t),
				  (r.sibling = s),
				  (t.child = r),
				  t.mode & 1 && Pr(t, e.child, null, o),
				  (t.child.memoizedState = Ml(o)),
				  (t.memoizedState = Al),
				  s);
		if (!(t.mode & 1)) return Hs(e, t, o, null);
		if (i.data === '$!') {
			if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
			return (r = a), (s = Error(A(419))), (r = _l(s, r, void 0)), Hs(e, t, o, r);
		}
		if (((a = (o & e.childLanes) !== 0), Xe || a)) {
			if (((r = _e), r !== null)) {
				switch (o & -o) {
					case 4:
						i = 2;
						break;
					case 16:
						i = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						i = 32;
						break;
					case 536870912:
						i = 268435456;
						break;
					default:
						i = 0;
				}
				(i = i & (r.suspendedLanes | o) ? 0 : i), i !== 0 && i !== s.retryLane && ((s.retryLane = i), $t(e, i), Ct(r, e, i, -1));
			}
			return Zl(), (r = _l(Error(A(421)))), Hs(e, t, o, r);
		}
		return i.data === '$?'
			? ((t.flags |= 128), (t.child = e.child), (t = e1.bind(null, e)), (i._reactRetry = t), null)
			: ((e = s.treeContext),
			  (it = ln(i.nextSibling)),
			  (rt = t),
			  (pe = !0),
			  (wt = null),
			  e !== null && ((at[lt++] = zt), (at[lt++] = Bt), (at[lt++] = An), (zt = e.id), (Bt = e.overflow), (An = t)),
			  (t = Nl(t, r.children)),
			  (t.flags |= 4096),
			  t);
	}
	function Mp(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), pl(e.return, t, n);
	}
	function Il(e, t, n, r, i) {
		var s = e.memoizedState;
		s === null
			? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
			: ((s.isBackwards = t), (s.rendering = null), (s.renderingStartTime = 0), (s.last = r), (s.tail = n), (s.tailMode = i));
	}
	function Np(e, t, n) {
		var r = t.pendingProps,
			i = r.revealOrder,
			s = r.tail;
		if ((Ue(e, t, r.children, n), (r = me.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && e.flags & 128)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Mp(e, n, t);
					else if (e.tag === 19) Mp(e, n, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			r &= 1;
		}
		if ((oe(me, r), !(t.mode & 1))) t.memoizedState = null;
		else
			switch (i) {
				case 'forwards':
					for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Vs(e) === null && (i = n), (n = n.sibling);
					(n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Il(t, !1, i, n, s);
					break;
				case 'backwards':
					for (n = null, i = t.child, t.child = null; i !== null; ) {
						if (((e = i.alternate), e !== null && Vs(e) === null)) {
							t.child = i;
							break;
						}
						(e = i.sibling), (i.sibling = n), (n = i), (i = e);
					}
					Il(t, !0, n, null, s);
					break;
				case 'together':
					Il(t, !1, null, null, void 0);
					break;
				default:
					t.memoizedState = null;
			}
		return t.child;
	}
	function Gs(e, t) {
		!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
	}
	function Ut(e, t, n) {
		if ((e !== null && (t.dependencies = e.dependencies), (Vn |= t.lanes), !(n & t.childLanes))) return null;
		if (e !== null && t.child !== e.child) throw Error(A(153));
		if (t.child !== null) {
			for (e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t);
			n.sibling = null;
		}
		return t.child;
	}
	function $0(e, t, n) {
		switch (t.tag) {
			case 3:
				bp(t), Sr();
				break;
			case 5:
				Jd(t);
				break;
			case 1:
				Ye(t.type) && Os(t);
				break;
			case 4:
				vl(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context,
					i = t.memoizedProps.value;
				oe(Ds, r._currentValue), (r._currentValue = i);
				break;
			case 13:
				if (((r = t.memoizedState), r !== null))
					return r.dehydrated !== null
						? (oe(me, me.current & 1), (t.flags |= 128), null)
						: n & t.child.childLanes
						? Ap(e, t, n)
						: (oe(me, me.current & 1), (e = Ut(e, t, n)), e !== null ? e.sibling : null);
				oe(me, me.current & 1);
				break;
			case 19:
				if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
					if (r) return Np(e, t, n);
					t.flags |= 128;
				}
				if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), oe(me, me.current), r)) break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), jp(e, t, n);
		}
		return Ut(e, t, n);
	}
	var Ip, Fl, Fp, Vp;
	(Ip = function (e, t) {
		for (var n = t.child; n !== null; ) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				(n.child.return = n), (n = n.child);
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null; ) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			(n.sibling.return = n.return), (n = n.sibling);
		}
	}),
		(Fl = function () {}),
		(Fp = function (e, t, n, r) {
			var i = e.memoizedProps;
			if (i !== r) {
				(e = t.stateNode), In(jt.current);
				var s = null;
				switch (n) {
					case 'input':
						(i = pa(e, i)), (r = pa(e, r)), (s = []);
						break;
					case 'select':
						(i = he({}, i, { value: void 0 })), (r = he({}, r, { value: void 0 })), (s = []);
						break;
					case 'textarea':
						(i = ga(e, i)), (r = ga(e, r)), (s = []);
						break;
					default:
						typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ps);
				}
				va(n, r);
				var o;
				n = null;
				for (c in i)
					if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
						if (c === 'style') {
							var a = i[c];
							for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
						} else
							c !== 'dangerouslySetInnerHTML' &&
								c !== 'children' &&
								c !== 'suppressContentEditableWarning' &&
								c !== 'suppressHydrationWarning' &&
								c !== 'autoFocus' &&
								(Hr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
				for (c in r) {
					var l = r[c];
					if (((a = i != null ? i[c] : void 0), r.hasOwnProperty(c) && l !== a && (l != null || a != null)))
						if (c === 'style')
							if (a) {
								for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
								for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
							} else n || (s || (s = []), s.push(c, n)), (n = l);
						else
							c === 'dangerouslySetInnerHTML'
								? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (s = s || []).push(c, l))
								: c === 'children'
								? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(c, '' + l)
								: c !== 'suppressContentEditableWarning' &&
								  c !== 'suppressHydrationWarning' &&
								  (Hr.hasOwnProperty(c) ? (l != null && c === 'onScroll' && le('scroll', e), s || a === l || (s = [])) : (s = s || []).push(c, l));
				}
				n && (s = s || []).push('style', n);
				var c = s;
				(t.updateQueue = c) && (t.flags |= 4);
			}
		}),
		(Vp = function (e, t, n, r) {
			n !== r && (t.flags |= 4);
		});
	function Li(e, t) {
		if (!pe)
			switch (e.tailMode) {
				case 'hidden':
					t = e.tail;
					for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
					n === null ? (e.tail = null) : (n.sibling = null);
					break;
				case 'collapsed':
					n = e.tail;
					for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
					r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
			}
	}
	function Ve(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			n = 0,
			r = 0;
		if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
		else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
		return (e.subtreeFlags |= r), (e.childLanes = n), t;
	}
	function W0(e, t, n) {
		var r = t.pendingProps;
		switch ((ol(t), t.tag)) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ve(t), null;
			case 1:
				return Ye(t.type) && Ls(), Ve(t), null;
			case 3:
				return (
					(r = t.stateNode),
					Tr(),
					ue(Ke),
					ue(Ie),
					kl(),
					r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
					(e === null || e.child === null) && (bs(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), wt !== null && (Xl(wt), (wt = null)))),
					Fl(e, t),
					Ve(t),
					null
				);
			case 5:
				xl(t);
				var i = In(Si.current);
				if (((n = t.type), e !== null && t.stateNode != null)) Fp(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(A(166));
						return Ve(t), null;
					}
					if (((e = In(jt.current)), bs(t))) {
						(r = t.stateNode), (n = t.type);
						var s = t.memoizedProps;
						switch (((r[Ot] = t), (r[yi] = s), (e = (t.mode & 1) !== 0), n)) {
							case 'dialog':
								le('cancel', r), le('close', r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								le('load', r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < hi.length; i++) le(hi[i], r);
								break;
							case 'source':
								le('error', r);
								break;
							case 'img':
							case 'image':
							case 'link':
								le('error', r), le('load', r);
								break;
							case 'details':
								le('toggle', r);
								break;
							case 'input':
								vf(r, s), le('invalid', r);
								break;
							case 'select':
								(r._wrapperState = { wasMultiple: !!s.multiple }), le('invalid', r);
								break;
							case 'textarea':
								kf(r, s), le('invalid', r);
						}
						va(n, s), (i = null);
						for (var o in s)
							if (s.hasOwnProperty(o)) {
								var a = s[o];
								o === 'children'
									? typeof a == 'string'
										? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Cs(r.textContent, a, e), (i = ['children', a]))
										: typeof a == 'number' && r.textContent !== '' + a && (s.suppressHydrationWarning !== !0 && Cs(r.textContent, a, e), (i = ['children', '' + a]))
									: Hr.hasOwnProperty(o) && a != null && o === 'onScroll' && le('scroll', r);
							}
						switch (n) {
							case 'input':
								ts(r), wf(r, s, !0);
								break;
							case 'textarea':
								ts(r), Ef(r);
								break;
							case 'select':
							case 'option':
								break;
							default:
								typeof s.onClick == 'function' && (r.onclick = Ps);
						}
						(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
					} else {
						(o = i.nodeType === 9 ? i : i.ownerDocument),
							e === 'http://www.w3.org/1999/xhtml' && (e = Cf(n)),
							e === 'http://www.w3.org/1999/xhtml'
								? n === 'script'
									? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
									: typeof r.is == 'string'
									? (e = o.createElement(n, { is: r.is }))
									: ((e = o.createElement(n)), n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
								: (e = o.createElementNS(e, n)),
							(e[Ot] = t),
							(e[yi] = r),
							Ip(e, t, !1, !1),
							(t.stateNode = e);
						e: {
							switch (((o = xa(n, r)), n)) {
								case 'dialog':
									le('cancel', e), le('close', e), (i = r);
									break;
								case 'iframe':
								case 'object':
								case 'embed':
									le('load', e), (i = r);
									break;
								case 'video':
								case 'audio':
									for (i = 0; i < hi.length; i++) le(hi[i], e);
									i = r;
									break;
								case 'source':
									le('error', e), (i = r);
									break;
								case 'img':
								case 'image':
								case 'link':
									le('error', e), le('load', e), (i = r);
									break;
								case 'details':
									le('toggle', e), (i = r);
									break;
								case 'input':
									vf(e, r), (i = pa(e, r)), le('invalid', e);
									break;
								case 'option':
									i = r;
									break;
								case 'select':
									(e._wrapperState = { wasMultiple: !!r.multiple }), (i = he({}, r, { value: void 0 })), le('invalid', e);
									break;
								case 'textarea':
									kf(e, r), (i = ga(e, r)), le('invalid', e);
									break;
								default:
									i = r;
							}
							va(n, i), (a = i);
							for (s in a)
								if (a.hasOwnProperty(s)) {
									var l = a[s];
									s === 'style'
										? Lf(e, l)
										: s === 'dangerouslySetInnerHTML'
										? ((l = l ? l.__html : void 0), l != null && Pf(e, l))
										: s === 'children'
										? typeof l == 'string'
											? (n !== 'textarea' || l !== '') && Xr(e, l)
											: typeof l == 'number' && Xr(e, '' + l)
										: s !== 'suppressContentEditableWarning' &&
										  s !== 'suppressHydrationWarning' &&
										  s !== 'autoFocus' &&
										  (Hr.hasOwnProperty(s) ? l != null && s === 'onScroll' && le('scroll', e) : l != null && na(e, s, l, o));
								}
							switch (n) {
								case 'input':
									ts(e), wf(e, r, !1);
									break;
								case 'textarea':
									ts(e), Ef(e);
									break;
								case 'option':
									r.value != null && e.setAttribute('value', '' + en(r.value));
									break;
								case 'select':
									(e.multiple = !!r.multiple), (s = r.value), s != null ? ar(e, !!r.multiple, s, !1) : r.defaultValue != null && ar(e, !!r.multiple, r.defaultValue, !0);
									break;
								default:
									typeof i.onClick == 'function' && (e.onclick = Ps);
							}
							switch (n) {
								case 'button':
								case 'input':
								case 'select':
								case 'textarea':
									r = !!r.autoFocus;
									break e;
								case 'img':
									r = !0;
									break e;
								default:
									r = !1;
							}
						}
						r && (t.flags |= 4);
					}
					t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
				}
				return Ve(t), null;
			case 6:
				if (e && t.stateNode != null) Vp(e, t, e.memoizedProps, r);
				else {
					if (typeof r != 'string' && t.stateNode === null) throw Error(A(166));
					if (((n = In(Si.current)), In(jt.current), bs(t))) {
						if (((r = t.stateNode), (n = t.memoizedProps), (r[Ot] = t), (s = r.nodeValue !== n) && ((e = rt), e !== null)))
							switch (e.tag) {
								case 3:
									Cs(r.nodeValue, n, (e.mode & 1) !== 0);
									break;
								case 5:
									e.memoizedProps.suppressHydrationWarning !== !0 && Cs(r.nodeValue, n, (e.mode & 1) !== 0);
							}
						s && (t.flags |= 4);
					} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ot] = t), (t.stateNode = r);
				}
				return Ve(t), null;
			case 13:
				if ((ue(me), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
					if (pe && it !== null && t.mode & 1 && !(t.flags & 128)) Bd(), Sr(), (t.flags |= 98560), (s = !1);
					else if (((s = bs(t)), r !== null && r.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(A(318));
							if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(A(317));
							s[Ot] = t;
						} else Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
						Ve(t), (s = !1);
					} else wt !== null && (Xl(wt), (wt = null)), (s = !0);
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128
					? ((t.lanes = n), t)
					: ((r = r !== null),
					  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || me.current & 1 ? Oe === 0 && (Oe = 3) : Zl())),
					  t.updateQueue !== null && (t.flags |= 4),
					  Ve(t),
					  null);
			case 4:
				return Tr(), Fl(e, t), e === null && mi(t.stateNode.containerInfo), Ve(t), null;
			case 10:
				return dl(t.type._context), Ve(t), null;
			case 17:
				return Ye(t.type) && Ls(), Ve(t), null;
			case 19:
				if ((ue(me), (s = t.memoizedState), s === null)) return Ve(t), null;
				if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
					if (r) Li(s, !1);
					else {
						if (Oe !== 0 || (e !== null && e.flags & 128))
							for (e = t.child; e !== null; ) {
								if (((o = Vs(e)), o !== null)) {
									for (t.flags |= 128, Li(s, !1), r = o.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
										(s = n),
											(e = r),
											(s.flags &= 14680066),
											(o = s.alternate),
											o === null
												? ((s.childLanes = 0),
												  (s.lanes = e),
												  (s.child = null),
												  (s.subtreeFlags = 0),
												  (s.memoizedProps = null),
												  (s.memoizedState = null),
												  (s.updateQueue = null),
												  (s.dependencies = null),
												  (s.stateNode = null))
												: ((s.childLanes = o.childLanes),
												  (s.lanes = o.lanes),
												  (s.child = o.child),
												  (s.subtreeFlags = 0),
												  (s.deletions = null),
												  (s.memoizedProps = o.memoizedProps),
												  (s.memoizedState = o.memoizedState),
												  (s.updateQueue = o.updateQueue),
												  (s.type = o.type),
												  (e = o.dependencies),
												  (s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
											(n = n.sibling);
									return oe(me, (me.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						s.tail !== null && Se() > _r && ((t.flags |= 128), (r = !0), Li(s, !1), (t.lanes = 4194304));
					}
				else {
					if (!r)
						if (((e = Vs(o)), e !== null)) {
							if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), Li(s, !0), s.tail === null && s.tailMode === 'hidden' && !o.alternate && !pe))
								return Ve(t), null;
						} else 2 * Se() - s.renderingStartTime > _r && n !== 1073741824 && ((t.flags |= 128), (r = !0), Li(s, !1), (t.lanes = 4194304));
					s.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
				}
				return s.tail !== null
					? ((t = s.tail), (s.rendering = t), (s.tail = t.sibling), (s.renderingStartTime = Se()), (t.sibling = null), (n = me.current), oe(me, r ? (n & 1) | 2 : n & 1), t)
					: (Ve(t), null);
			case 22:
			case 23:
				return (
					ql(),
					(r = t.memoizedState !== null),
					e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
					r && t.mode & 1 ? st & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(A(156, t.tag));
	}
	function U0(e, t) {
		switch ((ol(t), t.tag)) {
			case 1:
				return Ye(t.type) && Ls(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
			case 3:
				return Tr(), ue(Ke), ue(Ie), kl(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
			case 5:
				return xl(t), null;
			case 13:
				if ((ue(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
					if (t.alternate === null) throw Error(A(340));
					Sr();
				}
				return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
			case 19:
				return ue(me), null;
			case 4:
				return Tr(), null;
			case 10:
				return dl(t.type._context), null;
			case 22:
			case 23:
				return ql(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var Ks = !1,
		ze = !1,
		H0 = typeof WeakSet == 'function' ? WeakSet : Set,
		z = null;
	function Or(e, t) {
		var n = e.ref;
		if (n !== null)
			if (typeof n == 'function')
				try {
					n(null);
				} catch (r) {
					xe(e, t, r);
				}
			else n.current = null;
	}
	function Vl(e, t, n) {
		try {
			n();
		} catch (r) {
			xe(e, t, r);
		}
	}
	var zp = !1;
	function G0(e, t) {
		if (((qa = ps), (e = yd()), Wa(e))) {
			if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					n = ((n = e.ownerDocument) && n.defaultView) || window;
					var r = n.getSelection && n.getSelection();
					if (r && r.rangeCount !== 0) {
						n = r.anchorNode;
						var i = r.anchorOffset,
							s = r.focusNode;
						r = r.focusOffset;
						try {
							n.nodeType, s.nodeType;
						} catch {
							n = null;
							break e;
						}
						var o = 0,
							a = -1,
							l = -1,
							c = 0,
							u = 0,
							f = e,
							d = null;
						t: for (;;) {
							for (
								var m;
								f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
									f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
									f.nodeType === 3 && (o += f.nodeValue.length),
									(m = f.firstChild) !== null;

							)
								(d = f), (f = m);
							for (;;) {
								if (f === e) break t;
								if ((d === n && ++c === i && (a = o), d === s && ++u === r && (l = o), (m = f.nextSibling) !== null)) break;
								(f = d), (d = f.parentNode);
							}
							f = m;
						}
						n = a === -1 || l === -1 ? null : { start: a, end: l };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (Za = { focusedElem: e, selectionRange: n }, ps = !1, z = t; z !== null; )
			if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (z = e);
			else
				for (; z !== null; ) {
					t = z;
					try {
						var w = t.alternate;
						if (t.flags & 1024)
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (w !== null) {
										var T = w.memoizedProps,
											j = w.memoizedState,
											v = t.stateNode,
											p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? T : kt(t.type, T), j);
										v.__reactInternalSnapshotBeforeUpdate = p;
									}
									break;
								case 3:
									var h = t.stateNode.containerInfo;
									h.nodeType === 1 ? (h.textContent = '') : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(A(163));
							}
					} catch (P) {
						xe(t, t.return, P);
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (z = e);
						break;
					}
					z = t.return;
				}
		return (w = zp), (zp = !1), w;
	}
	function Oi(e, t, n) {
		var r = t.updateQueue;
		if (((r = r !== null ? r.lastEffect : null), r !== null)) {
			var i = (r = r.next);
			do {
				if ((i.tag & e) === e) {
					var s = i.destroy;
					(i.destroy = void 0), s !== void 0 && Vl(t, n, s);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function Ys(e, t) {
		if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
			var n = (t = t.next);
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function zl(e) {
		var t = e.ref;
		if (t !== null) {
			var n = e.stateNode;
			switch (e.tag) {
				case 5:
					e = n;
					break;
				default:
					e = n;
			}
			typeof t == 'function' ? t(e) : (t.current = e);
		}
	}
	function Bp(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), Bp(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ot], delete t[yi], delete t[nl], delete t[O0], delete t[j0])),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	function $p(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function Wp(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || $p(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Bl(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode),
				t
					? n.nodeType === 8
						? n.parentNode.insertBefore(e, t)
						: n.insertBefore(e, t)
					: (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Ps));
		else if (r !== 4 && ((e = e.child), e !== null)) for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), (e = e.sibling);
	}
	function $l(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && ((e = e.child), e !== null)) for ($l(e, t, n), e = e.sibling; e !== null; ) $l(e, t, n), (e = e.sibling);
	}
	var Ae = null,
		St = !1;
	function hn(e, t, n) {
		for (n = n.child; n !== null; ) Up(e, t, n), (n = n.sibling);
	}
	function Up(e, t, n) {
		if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
			try {
				Lt.onCommitFiberUnmount(as, n);
			} catch {}
		switch (n.tag) {
			case 5:
				ze || Or(n, t);
			case 6:
				var r = Ae,
					i = St;
				(Ae = null),
					hn(e, t, n),
					(Ae = r),
					(St = i),
					Ae !== null && (St ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
				break;
			case 18:
				Ae !== null && (St ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), oi(e)) : tl(Ae, n.stateNode));
				break;
			case 4:
				(r = Ae), (i = St), (Ae = n.stateNode.containerInfo), (St = !0), hn(e, t, n), (Ae = r), (St = i);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
					i = r = r.next;
					do {
						var s = i,
							o = s.destroy;
						(s = s.tag), o !== void 0 && (s & 2 || s & 4) && Vl(n, t, o), (i = i.next);
					} while (i !== r);
				}
				hn(e, t, n);
				break;
			case 1:
				if (!ze && (Or(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
					try {
						(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
					} catch (a) {
						xe(n, t, a);
					}
				hn(e, t, n);
				break;
			case 21:
				hn(e, t, n);
				break;
			case 22:
				n.mode & 1 ? ((ze = (r = ze) || n.memoizedState !== null), hn(e, t, n), (ze = r)) : hn(e, t, n);
				break;
			default:
				hn(e, t, n);
		}
	}
	function Hp(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new H0()),
				t.forEach(function (r) {
					var i = t1.bind(null, e, r);
					n.has(r) || (n.add(r), r.then(i, i));
				});
		}
	}
	function Et(e, t) {
		var n = t.deletions;
		if (n !== null)
			for (var r = 0; r < n.length; r++) {
				var i = n[r];
				try {
					var s = e,
						o = t,
						a = o;
					e: for (; a !== null; ) {
						switch (a.tag) {
							case 5:
								(Ae = a.stateNode), (St = !1);
								break e;
							case 3:
								(Ae = a.stateNode.containerInfo), (St = !0);
								break e;
							case 4:
								(Ae = a.stateNode.containerInfo), (St = !0);
								break e;
						}
						a = a.return;
					}
					if (Ae === null) throw Error(A(160));
					Up(s, o, i), (Ae = null), (St = !1);
					var l = i.alternate;
					l !== null && (l.return = null), (i.return = null);
				} catch (c) {
					xe(i, t, c);
				}
			}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gp(t, e), (t = t.sibling);
	}
	function Gp(e, t) {
		var n = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((Et(t, e), Rt(e), r & 4)) {
					try {
						Oi(3, e, e.return), Ys(3, e);
					} catch (T) {
						xe(e, e.return, T);
					}
					try {
						Oi(5, e, e.return);
					} catch (T) {
						xe(e, e.return, T);
					}
				}
				break;
			case 1:
				Et(t, e), Rt(e), r & 512 && n !== null && Or(n, n.return);
				break;
			case 5:
				if ((Et(t, e), Rt(e), r & 512 && n !== null && Or(n, n.return), e.flags & 32)) {
					var i = e.stateNode;
					try {
						Xr(i, '');
					} catch (T) {
						xe(e, e.return, T);
					}
				}
				if (r & 4 && ((i = e.stateNode), i != null)) {
					var s = e.memoizedProps,
						o = n !== null ? n.memoizedProps : s,
						a = e.type,
						l = e.updateQueue;
					if (((e.updateQueue = null), l !== null))
						try {
							a === 'input' && s.type === 'radio' && s.name != null && xf(i, s), xa(a, o);
							var c = xa(a, s);
							for (o = 0; o < l.length; o += 2) {
								var u = l[o],
									f = l[o + 1];
								u === 'style' ? Lf(i, f) : u === 'dangerouslySetInnerHTML' ? Pf(i, f) : u === 'children' ? Xr(i, f) : na(i, u, f, c);
							}
							switch (a) {
								case 'input':
									ha(i, s);
									break;
								case 'textarea':
									Sf(i, s);
									break;
								case 'select':
									var d = i._wrapperState.wasMultiple;
									i._wrapperState.wasMultiple = !!s.multiple;
									var m = s.value;
									m != null ? ar(i, !!s.multiple, m, !1) : d !== !!s.multiple && (s.defaultValue != null ? ar(i, !!s.multiple, s.defaultValue, !0) : ar(i, !!s.multiple, s.multiple ? [] : '', !1));
							}
							i[yi] = s;
						} catch (T) {
							xe(e, e.return, T);
						}
				}
				break;
			case 6:
				if ((Et(t, e), Rt(e), r & 4)) {
					if (e.stateNode === null) throw Error(A(162));
					(i = e.stateNode), (s = e.memoizedProps);
					try {
						i.nodeValue = s;
					} catch (T) {
						xe(e, e.return, T);
					}
				}
				break;
			case 3:
				if ((Et(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
					try {
						oi(t.containerInfo);
					} catch (T) {
						xe(e, e.return, T);
					}
				break;
			case 4:
				Et(t, e), Rt(e);
				break;
			case 13:
				Et(t, e),
					Rt(e),
					(i = e.child),
					i.flags & 8192 && ((s = i.memoizedState !== null), (i.stateNode.isHidden = s), !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Hl = Se())),
					r & 4 && Hp(e);
				break;
			case 22:
				if (((u = n !== null && n.memoizedState !== null), e.mode & 1 ? ((ze = (c = ze) || u), Et(t, e), (ze = c)) : Et(t, e), Rt(e), r & 8192)) {
					if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
						for (z = e, u = e.child; u !== null; ) {
							for (f = z = u; z !== null; ) {
								switch (((d = z), (m = d.child), d.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										Oi(4, d, d.return);
										break;
									case 1:
										Or(d, d.return);
										var w = d.stateNode;
										if (typeof w.componentWillUnmount == 'function') {
											(r = d), (n = d.return);
											try {
												(t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
											} catch (T) {
												xe(r, n, T);
											}
										}
										break;
									case 5:
										Or(d, d.return);
										break;
									case 22:
										if (d.memoizedState !== null) {
											Xp(f);
											continue;
										}
								}
								m !== null ? ((m.return = d), (z = m)) : Xp(f);
							}
							u = u.sibling;
						}
					e: for (u = null, f = e; ; ) {
						if (f.tag === 5) {
							if (u === null) {
								u = f;
								try {
									(i = f.stateNode),
										c
											? ((s = i.style), typeof s.setProperty == 'function' ? s.setProperty('display', 'none', 'important') : (s.display = 'none'))
											: ((a = f.stateNode), (l = f.memoizedProps.style), (o = l != null && l.hasOwnProperty('display') ? l.display : null), (a.style.display = Tf('display', o)));
								} catch (T) {
									xe(e, e.return, T);
								}
							}
						} else if (f.tag === 6) {
							if (u === null)
								try {
									f.stateNode.nodeValue = c ? '' : f.memoizedProps;
								} catch (T) {
									xe(e, e.return, T);
								}
						} else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
							(f.child.return = f), (f = f.child);
							continue;
						}
						if (f === e) break e;
						for (; f.sibling === null; ) {
							if (f.return === null || f.return === e) break e;
							u === f && (u = null), (f = f.return);
						}
						u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
					}
				}
				break;
			case 19:
				Et(t, e), Rt(e), r & 4 && Hp(e);
				break;
			case 21:
				break;
			default:
				Et(t, e), Rt(e);
		}
	}
	function Rt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				e: {
					for (var n = e.return; n !== null; ) {
						if ($p(n)) {
							var r = n;
							break e;
						}
						n = n.return;
					}
					throw Error(A(160));
				}
				switch (r.tag) {
					case 5:
						var i = r.stateNode;
						r.flags & 32 && (Xr(i, ''), (r.flags &= -33));
						var s = Wp(e);
						$l(e, s, i);
						break;
					case 3:
					case 4:
						var o = r.stateNode.containerInfo,
							a = Wp(e);
						Bl(e, a, o);
						break;
					default:
						throw Error(A(161));
				}
			} catch (l) {
				xe(e, e.return, l);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function K0(e, t, n) {
		(z = e), Kp(e);
	}
	function Kp(e, t, n) {
		for (var r = (e.mode & 1) !== 0; z !== null; ) {
			var i = z,
				s = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || Ks;
				if (!o) {
					var a = i.alternate,
						l = (a !== null && a.memoizedState !== null) || ze;
					a = Ks;
					var c = ze;
					if (((Ks = o), (ze = l) && !c)) for (z = i; z !== null; ) (o = z), (l = o.child), o.tag === 22 && o.memoizedState !== null ? Qp(i) : l !== null ? ((l.return = o), (z = l)) : Qp(i);
					for (; s !== null; ) (z = s), Kp(s), (s = s.sibling);
					(z = i), (Ks = a), (ze = c);
				}
				Yp(e);
			} else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (z = s)) : Yp(e);
		}
	}
	function Yp(e) {
		for (; z !== null; ) {
			var t = z;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								ze || Ys(5, t);
								break;
							case 1:
								var r = t.stateNode;
								if (t.flags & 4 && !ze)
									if (n === null) r.componentDidMount();
									else {
										var i = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
										r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
									}
								var s = t.updateQueue;
								s !== null && Hd(t, s, r);
								break;
							case 3:
								var o = t.updateQueue;
								if (o !== null) {
									if (((n = null), t.child !== null))
										switch (t.child.tag) {
											case 5:
												n = t.child.stateNode;
												break;
											case 1:
												n = t.child.stateNode;
										}
									Hd(t, o, n);
								}
								break;
							case 5:
								var a = t.stateNode;
								if (n === null && t.flags & 4) {
									n = a;
									var l = t.memoizedProps;
									switch (t.type) {
										case 'button':
										case 'input':
										case 'select':
										case 'textarea':
											l.autoFocus && n.focus();
											break;
										case 'img':
											l.src && (n.src = l.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (t.memoizedState === null) {
									var c = t.alternate;
									if (c !== null) {
										var u = c.memoizedState;
										if (u !== null) {
											var f = u.dehydrated;
											f !== null && oi(f);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(A(163));
						}
					ze || (t.flags & 512 && zl(t));
				} catch (d) {
					xe(t, t.return, d);
				}
			}
			if (t === e) {
				z = null;
				break;
			}
			if (((n = t.sibling), n !== null)) {
				(n.return = t.return), (z = n);
				break;
			}
			z = t.return;
		}
	}
	function Xp(e) {
		for (; z !== null; ) {
			var t = z;
			if (t === e) {
				z = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				(n.return = t.return), (z = n);
				break;
			}
			z = t.return;
		}
	}
	function Qp(e) {
		for (; z !== null; ) {
			var t = z;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							Ys(4, t);
						} catch (l) {
							xe(t, n, l);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == 'function') {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (l) {
								xe(t, i, l);
							}
						}
						var s = t.return;
						try {
							zl(t);
						} catch (l) {
							xe(t, s, l);
						}
						break;
					case 5:
						var o = t.return;
						try {
							zl(t);
						} catch (l) {
							xe(t, o, l);
						}
				}
			} catch (l) {
				xe(t, t.return, l);
			}
			if (t === e) {
				z = null;
				break;
			}
			var a = t.sibling;
			if (a !== null) {
				(a.return = t.return), (z = a);
				break;
			}
			z = t.return;
		}
	}
	var Y0 = Math.ceil,
		Xs = It.ReactCurrentDispatcher,
		Wl = It.ReactCurrentOwner,
		ft = It.ReactCurrentBatchConfig,
		te = 0,
		_e = null,
		Ce = null,
		Me = 0,
		st = 0,
		jr = un(0),
		Oe = 0,
		ji = null,
		Vn = 0,
		Qs = 0,
		Ul = 0,
		_i = null,
		Qe = null,
		Hl = 0,
		_r = 1 / 0,
		Ht = null,
		qs = !1,
		Gl = null,
		mn = null,
		Zs = !1,
		gn = null,
		Js = 0,
		Ri = 0,
		Kl = null,
		eo = -1,
		to = 0;
	function He() {
		return te & 6 ? Se() : eo !== -1 ? eo : (eo = Se());
	}
	function yn(e) {
		return e.mode & 1
			? te & 2 && Me !== 0
				? Me & -Me
				: R0.transition !== null
				? (to === 0 && (to = $f()), to)
				: ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qf(e.type))), e)
			: 1;
	}
	function Ct(e, t, n, r) {
		if (50 < Ri) throw ((Ri = 0), (Kl = null), Error(A(185)));
		ti(e, n, r), (!(te & 2) || e !== _e) && (e === _e && (!(te & 2) && (Qs |= n), Oe === 4 && vn(e, Me)), qe(e, r), n === 1 && te === 0 && !(t.mode & 1) && ((_r = Se() + 500), js && fn()));
	}
	function qe(e, t) {
		var n = e.callbackNode;
		Rv(e, t);
		var r = cs(e, e === _e ? Me : 0);
		if (r === 0) n !== null && Vf(n), (e.callbackNode = null), (e.callbackPriority = 0);
		else if (((t = r & -r), e.callbackPriority !== t)) {
			if ((n != null && Vf(n), t === 1))
				e.tag === 0 ? _0(Zp.bind(null, e)) : Nd(Zp.bind(null, e)),
					T0(function () {
						!(te & 6) && fn();
					}),
					(n = null);
			else {
				switch (Wf(r)) {
					case 1:
						n = Ta;
						break;
					case 4:
						n = zf;
						break;
					case 16:
						n = os;
						break;
					case 536870912:
						n = Bf;
						break;
					default:
						n = os;
				}
				n = oh(n, qp.bind(null, e));
			}
			(e.callbackPriority = t), (e.callbackNode = n);
		}
	}
	function qp(e, t) {
		if (((eo = -1), (to = 0), te & 6)) throw Error(A(327));
		var n = e.callbackNode;
		if (Rr() && e.callbackNode !== n) return null;
		var r = cs(e, e === _e ? Me : 0);
		if (r === 0) return null;
		if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
		else {
			t = r;
			var i = te;
			te |= 2;
			var s = eh();
			(_e !== e || Me !== t) && ((Ht = null), (_r = Se() + 500), Bn(e, t));
			do
				try {
					q0();
					break;
				} catch (a) {
					Jp(e, a);
				}
			while (1);
			fl(), (Xs.current = s), (te = i), Ce !== null ? (t = 0) : ((_e = null), (Me = 0), (t = Oe));
		}
		if (t !== 0) {
			if ((t === 2 && ((i = La(e)), i !== 0 && ((r = i), (t = Yl(e, i)))), t === 1)) throw ((n = ji), Bn(e, 0), vn(e, r), qe(e, Se()), n);
			if (t === 6) vn(e, r);
			else {
				if (((i = e.current.alternate), !(r & 30) && !X0(i) && ((t = no(e, r)), t === 2 && ((s = La(e)), s !== 0 && ((r = s), (t = Yl(e, s)))), t === 1)))
					throw ((n = ji), Bn(e, 0), vn(e, r), qe(e, Se()), n);
				switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
					case 0:
					case 1:
						throw Error(A(345));
					case 2:
						$n(e, Qe, Ht);
						break;
					case 3:
						if ((vn(e, r), (r & 130023424) === r && ((t = Hl + 500 - Se()), 10 < t))) {
							if (cs(e, 0) !== 0) break;
							if (((i = e.suspendedLanes), (i & r) !== r)) {
								He(), (e.pingedLanes |= e.suspendedLanes & i);
								break;
							}
							e.timeoutHandle = el($n.bind(null, e, Qe, Ht), t);
							break;
						}
						$n(e, Qe, Ht);
						break;
					case 4:
						if ((vn(e, r), (r & 4194240) === r)) break;
						for (t = e.eventTimes, i = -1; 0 < r; ) {
							var o = 31 - vt(r);
							(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
						}
						if (((r = i), (r = Se() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Y0(r / 1960)) - r), 10 < r)) {
							e.timeoutHandle = el($n.bind(null, e, Qe, Ht), r);
							break;
						}
						$n(e, Qe, Ht);
						break;
					case 5:
						$n(e, Qe, Ht);
						break;
					default:
						throw Error(A(329));
				}
			}
		}
		return qe(e, Se()), e.callbackNode === n ? qp.bind(null, e) : null;
	}
	function Yl(e, t) {
		var n = _i;
		return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), (e = no(e, t)), e !== 2 && ((t = Qe), (Qe = n), t !== null && Xl(t)), e;
	}
	function Xl(e) {
		Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
	}
	function X0(e) {
		for (var t = e; ; ) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && ((n = n.stores), n !== null))
					for (var r = 0; r < n.length; r++) {
						var i = n[r],
							s = i.getSnapshot;
						i = i.value;
						try {
							if (!xt(s(), i)) return !1;
						} catch {
							return !1;
						}
					}
			}
			if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function vn(e, t) {
		for (t &= ~Ul, t &= ~Qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
			var n = 31 - vt(t),
				r = 1 << n;
			(e[n] = -1), (t &= ~r);
		}
	}
	function Zp(e) {
		if (te & 6) throw Error(A(327));
		Rr();
		var t = cs(e, 0);
		if (!(t & 1)) return qe(e, Se()), null;
		var n = no(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = La(e);
			r !== 0 && ((t = r), (n = Yl(e, r)));
		}
		if (n === 1) throw ((n = ji), Bn(e, 0), vn(e, t), qe(e, Se()), n);
		if (n === 6) throw Error(A(345));
		return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), $n(e, Qe, Ht), qe(e, Se()), null;
	}
	function Ql(e, t) {
		var n = te;
		te |= 1;
		try {
			return e(t);
		} finally {
			(te = n), te === 0 && ((_r = Se() + 500), js && fn());
		}
	}
	function zn(e) {
		gn !== null && gn.tag === 0 && !(te & 6) && Rr();
		var t = te;
		te |= 1;
		var n = ft.transition,
			r = re;
		try {
			if (((ft.transition = null), (re = 1), e)) return e();
		} finally {
			(re = r), (ft.transition = n), (te = t), !(te & 6) && fn();
		}
	}
	function ql() {
		(st = jr.current), ue(jr);
	}
	function Bn(e, t) {
		(e.finishedWork = null), (e.finishedLanes = 0);
		var n = e.timeoutHandle;
		if ((n !== -1 && ((e.timeoutHandle = -1), P0(n)), Ce !== null))
			for (n = Ce.return; n !== null; ) {
				var r = n;
				switch ((ol(r), r.tag)) {
					case 1:
						(r = r.type.childContextTypes), r != null && Ls();
						break;
					case 3:
						Tr(), ue(Ke), ue(Ie), kl();
						break;
					case 5:
						xl(r);
						break;
					case 4:
						Tr();
						break;
					case 13:
						ue(me);
						break;
					case 19:
						ue(me);
						break;
					case 10:
						dl(r.type._context);
						break;
					case 22:
					case 23:
						ql();
				}
				n = n.return;
			}
		if (((_e = e), (Ce = e = xn(e.current, null)), (Me = st = t), (Oe = 0), (ji = null), (Ul = Qs = Vn = 0), (Qe = _i = null), Nn !== null)) {
			for (t = 0; t < Nn.length; t++)
				if (((n = Nn[t]), (r = n.interleaved), r !== null)) {
					n.interleaved = null;
					var i = r.next,
						s = n.pending;
					if (s !== null) {
						var o = s.next;
						(s.next = i), (r.next = o);
					}
					n.pending = r;
				}
			Nn = null;
		}
		return e;
	}
	function Jp(e, t) {
		do {
			var n = Ce;
			try {
				if ((fl(), (zs.current = Us), Bs)) {
					for (var r = ge.memoizedState; r !== null; ) {
						var i = r.queue;
						i !== null && (i.pending = null), (r = r.next);
					}
					Bs = !1;
				}
				if (((Fn = 0), (je = Le = ge = null), (Ei = !1), (Ci = 0), (Wl.current = null), n === null || n.return === null)) {
					(Oe = 1), (ji = t), (Ce = null);
					break;
				}
				e: {
					var s = e,
						o = n.return,
						a = n,
						l = t;
					if (((t = Me), (a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
						var c = l,
							u = a,
							f = u.tag;
						if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var d = u.alternate;
							d ? ((u.updateQueue = d.updateQueue), (u.memoizedState = d.memoizedState), (u.lanes = d.lanes)) : ((u.updateQueue = null), (u.memoizedState = null));
						}
						var m = Cp(o);
						if (m !== null) {
							(m.flags &= -257), Pp(m, o, a, s, t), m.mode & 1 && Ep(s, c, t), (t = m), (l = c);
							var w = t.updateQueue;
							if (w === null) {
								var T = new Set();
								T.add(l), (t.updateQueue = T);
							} else w.add(l);
							break e;
						} else {
							if (!(t & 1)) {
								Ep(s, c, t), Zl();
								break e;
							}
							l = Error(A(426));
						}
					} else if (pe && a.mode & 1) {
						var j = Cp(o);
						if (j !== null) {
							!(j.flags & 65536) && (j.flags |= 256), Pp(j, o, a, s, t), ul(Lr(l, a));
							break e;
						}
					}
					(s = l = Lr(l, a)), Oe !== 4 && (Oe = 2), _i === null ? (_i = [s]) : _i.push(s), (s = o);
					do {
						switch (s.tag) {
							case 3:
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var v = kp(s, l, t);
								Ud(s, v);
								break e;
							case 1:
								a = l;
								var p = s.type,
									h = s.stateNode;
								if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == 'function' || (h !== null && typeof h.componentDidCatch == 'function' && (mn === null || !mn.has(h))))) {
									(s.flags |= 65536), (t &= -t), (s.lanes |= t);
									var P = Sp(s, a, t);
									Ud(s, P);
									break e;
								}
						}
						s = s.return;
					} while (s !== null);
				}
				nh(n);
			} catch (R) {
				(t = R), Ce === n && n !== null && (Ce = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function eh() {
		var e = Xs.current;
		return (Xs.current = Us), e === null ? Us : e;
	}
	function Zl() {
		(Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), _e === null || (!(Vn & 268435455) && !(Qs & 268435455)) || vn(_e, Me);
	}
	function no(e, t) {
		var n = te;
		te |= 2;
		var r = eh();
		(_e !== e || Me !== t) && ((Ht = null), Bn(e, t));
		do
			try {
				Q0();
				break;
			} catch (i) {
				Jp(e, i);
			}
		while (1);
		if ((fl(), (te = n), (Xs.current = r), Ce !== null)) throw Error(A(261));
		return (_e = null), (Me = 0), Oe;
	}
	function Q0() {
		for (; Ce !== null; ) th(Ce);
	}
	function q0() {
		for (; Ce !== null && !Sv(); ) th(Ce);
	}
	function th(e) {
		var t = sh(e.alternate, e, st);
		(e.memoizedProps = e.pendingProps), t === null ? nh(e) : (Ce = t), (Wl.current = null);
	}
	function nh(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (((e = t.return), t.flags & 32768)) {
				if (((n = U0(n, t)), n !== null)) {
					(n.flags &= 32767), (Ce = n);
					return;
				}
				if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
				else {
					(Oe = 6), (Ce = null);
					return;
				}
			} else if (((n = W0(n, t, st)), n !== null)) {
				Ce = n;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				Ce = t;
				return;
			}
			Ce = t = e;
		} while (t !== null);
		Oe === 0 && (Oe = 5);
	}
	function $n(e, t, n) {
		var r = re,
			i = ft.transition;
		try {
			(ft.transition = null), (re = 1), Z0(e, t, n, r);
		} finally {
			(ft.transition = i), (re = r);
		}
		return null;
	}
	function Z0(e, t, n, r) {
		do Rr();
		while (gn !== null);
		if (te & 6) throw Error(A(327));
		n = e.finishedWork;
		var i = e.finishedLanes;
		if (n === null) return null;
		if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(A(177));
		(e.callbackNode = null), (e.callbackPriority = 0);
		var s = n.lanes | n.childLanes;
		if (
			(bv(e, s),
			e === _e && ((Ce = _e = null), (Me = 0)),
			(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
				Zs ||
				((Zs = !0),
				oh(os, function () {
					return Rr(), null;
				})),
			(s = (n.flags & 15990) !== 0),
			n.subtreeFlags & 15990 || s)
		) {
			(s = ft.transition), (ft.transition = null);
			var o = re;
			re = 1;
			var a = te;
			(te |= 4), (Wl.current = null), G0(e, n), Gp(n, e), v0(Za), (ps = !!qa), (Za = qa = null), (e.current = n), K0(n), Ev(), (te = a), (re = o), (ft.transition = s);
		} else e.current = n;
		if ((Zs && ((Zs = !1), (gn = e), (Js = i)), (s = e.pendingLanes), s === 0 && (mn = null), Tv(n.stateNode), qe(e, Se()), t !== null))
			for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
		if (qs) throw ((qs = !1), (e = Gl), (Gl = null), e);
		return Js & 1 && e.tag !== 0 && Rr(), (s = e.pendingLanes), s & 1 ? (e === Kl ? Ri++ : ((Ri = 0), (Kl = e))) : (Ri = 0), fn(), null;
	}
	function Rr() {
		if (gn !== null) {
			var e = Wf(Js),
				t = ft.transition,
				n = re;
			try {
				if (((ft.transition = null), (re = 16 > e ? 16 : e), gn === null)) var r = !1;
				else {
					if (((e = gn), (gn = null), (Js = 0), te & 6)) throw Error(A(331));
					var i = te;
					for (te |= 4, z = e.current; z !== null; ) {
						var s = z,
							o = s.child;
						if (z.flags & 16) {
							var a = s.deletions;
							if (a !== null) {
								for (var l = 0; l < a.length; l++) {
									var c = a[l];
									for (z = c; z !== null; ) {
										var u = z;
										switch (u.tag) {
											case 0:
											case 11:
											case 15:
												Oi(8, u, s);
										}
										var f = u.child;
										if (f !== null) (f.return = u), (z = f);
										else
											for (; z !== null; ) {
												u = z;
												var d = u.sibling,
													m = u.return;
												if ((Bp(u), u === c)) {
													z = null;
													break;
												}
												if (d !== null) {
													(d.return = m), (z = d);
													break;
												}
												z = m;
											}
									}
								}
								var w = s.alternate;
								if (w !== null) {
									var T = w.child;
									if (T !== null) {
										w.child = null;
										do {
											var j = T.sibling;
											(T.sibling = null), (T = j);
										} while (T !== null);
									}
								}
								z = s;
							}
						}
						if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (z = o);
						else
							e: for (; z !== null; ) {
								if (((s = z), s.flags & 2048))
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											Oi(9, s, s.return);
									}
								var v = s.sibling;
								if (v !== null) {
									(v.return = s.return), (z = v);
									break e;
								}
								z = s.return;
							}
					}
					var p = e.current;
					for (z = p; z !== null; ) {
						o = z;
						var h = o.child;
						if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (z = h);
						else
							e: for (o = p; z !== null; ) {
								if (((a = z), a.flags & 2048))
									try {
										switch (a.tag) {
											case 0:
											case 11:
											case 15:
												Ys(9, a);
										}
									} catch (R) {
										xe(a, a.return, R);
									}
								if (a === o) {
									z = null;
									break e;
								}
								var P = a.sibling;
								if (P !== null) {
									(P.return = a.return), (z = P);
									break e;
								}
								z = a.return;
							}
					}
					if (((te = i), fn(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
						try {
							Lt.onPostCommitFiberRoot(as, e);
						} catch {}
					r = !0;
				}
				return r;
			} finally {
				(re = n), (ft.transition = t);
			}
		}
		return !1;
	}
	function rh(e, t, n) {
		(t = Lr(n, t)), (t = kp(e, t, 1)), (e = pn(e, t, 1)), (t = He()), e !== null && (ti(e, 1, t), qe(e, t));
	}
	function xe(e, t, n) {
		if (e.tag === 3) rh(e, e, n);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					rh(t, e, n);
					break;
				} else if (t.tag === 1) {
					var r = t.stateNode;
					if (typeof t.type.getDerivedStateFromError == 'function' || (typeof r.componentDidCatch == 'function' && (mn === null || !mn.has(r)))) {
						(e = Lr(n, e)), (e = Sp(t, e, 1)), (t = pn(t, e, 1)), (e = He()), t !== null && (ti(t, 1, e), qe(t, e));
						break;
					}
				}
				t = t.return;
			}
	}
	function J0(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t),
			(t = He()),
			(e.pingedLanes |= e.suspendedLanes & n),
			_e === e && (Me & n) === n && (Oe === 4 || (Oe === 3 && (Me & 130023424) === Me && 500 > Se() - Hl) ? Bn(e, 0) : (Ul |= n)),
			qe(e, t);
	}
	function ih(e, t) {
		t === 0 && (e.mode & 1 ? ((t = us), (us <<= 1), !(us & 130023424) && (us = 4194304)) : (t = 1));
		var n = He();
		(e = $t(e, t)), e !== null && (ti(e, t, n), qe(e, n));
	}
	function e1(e) {
		var t = e.memoizedState,
			n = 0;
		t !== null && (n = t.retryLane), ih(e, n);
	}
	function t1(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode,
					i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			default:
				throw Error(A(314));
		}
		r !== null && r.delete(t), ih(e, n);
	}
	var sh;
	sh = function (e, t, n) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps || Ke.current) Xe = !0;
			else {
				if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), $0(e, t, n);
				Xe = !!(e.flags & 131072);
			}
		else (Xe = !1), pe && t.flags & 1048576 && Id(t, Rs, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 2:
				var r = t.type;
				Gs(e, t), (e = t.pendingProps);
				var i = xr(t, Ie.current);
				Cr(t, n), (i = Cl(null, t, r, e, i, n));
				var s = Pl();
				return (
					(t.flags |= 1),
					typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
						? ((t.tag = 1),
						  (t.memoizedState = null),
						  (t.updateQueue = null),
						  Ye(r) ? ((s = !0), Os(t)) : (s = !1),
						  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
						  ml(t),
						  (i.updater = Is),
						  (t.stateNode = i),
						  (i._reactInternals = t),
						  yl(t, r, e, n),
						  (t = Dl(null, t, r, !0, s, n)))
						: ((t.tag = 0), pe && s && sl(t), Ue(null, t, i, n), (t = t.child)),
					t
				);
			case 16:
				r = t.elementType;
				e: {
					switch ((Gs(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = r1(r)), (e = kt(r, e)), i)) {
						case 0:
							t = bl(null, t, r, e, n);
							break e;
						case 1:
							t = Rp(null, t, r, e, n);
							break e;
						case 11:
							t = Tp(null, t, r, e, n);
							break e;
						case 14:
							t = Lp(null, t, r, kt(r.type, e), n);
							break e;
					}
					throw Error(A(306, r, ''));
				}
				return t;
			case 0:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : kt(r, i)), bl(e, t, r, i, n);
			case 1:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : kt(r, i)), Rp(e, t, r, i, n);
			case 3:
				e: {
					if ((bp(t), e === null)) throw Error(A(387));
					(r = t.pendingProps), (s = t.memoizedState), (i = s.element), Wd(e, t), Ns(t, r, null, n);
					var o = t.memoizedState;
					if (((r = o.element), s.isDehydrated))
						if (
							((s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }),
							(t.updateQueue.baseState = s),
							(t.memoizedState = s),
							t.flags & 256)
						) {
							(i = Lr(Error(A(423)), t)), (t = Dp(e, t, r, n, i));
							break e;
						} else if (r !== i) {
							(i = Lr(Error(A(424)), t)), (t = Dp(e, t, r, n, i));
							break e;
						} else for (it = ln(t.stateNode.containerInfo.firstChild), rt = t, pe = !0, wt = null, n = Zd(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
					else {
						if ((Sr(), r === i)) {
							t = Ut(e, t, n);
							break e;
						}
						Ue(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5:
				return (
					Jd(t),
					e === null && ll(t),
					(r = t.type),
					(i = t.pendingProps),
					(s = e !== null ? e.memoizedProps : null),
					(o = i.children),
					Ja(r, i) ? (o = null) : s !== null && Ja(r, s) && (t.flags |= 32),
					_p(e, t),
					Ue(e, t, o, n),
					t.child
				);
			case 6:
				return e === null && ll(t), null;
			case 13:
				return Ap(e, t, n);
			case 4:
				return vl(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Pr(t, null, r, n)) : Ue(e, t, r, n), t.child;
			case 11:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : kt(r, i)), Tp(e, t, r, i, n);
			case 7:
				return Ue(e, t, t.pendingProps, n), t.child;
			case 8:
				return Ue(e, t, t.pendingProps.children, n), t.child;
			case 12:
				return Ue(e, t, t.pendingProps.children, n), t.child;
			case 10:
				e: {
					if (((r = t.type._context), (i = t.pendingProps), (s = t.memoizedProps), (o = i.value), oe(Ds, r._currentValue), (r._currentValue = o), s !== null))
						if (xt(s.value, o)) {
							if (s.children === i.children && !Ke.current) {
								t = Ut(e, t, n);
								break e;
							}
						} else
							for (s = t.child, s !== null && (s.return = t); s !== null; ) {
								var a = s.dependencies;
								if (a !== null) {
									o = s.child;
									for (var l = a.firstContext; l !== null; ) {
										if (l.context === r) {
											if (s.tag === 1) {
												(l = Wt(-1, n & -n)), (l.tag = 2);
												var c = s.updateQueue;
												if (c !== null) {
													c = c.shared;
													var u = c.pending;
													u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)), (c.pending = l);
												}
											}
											(s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), pl(s.return, n, t), (a.lanes |= n);
											break;
										}
										l = l.next;
									}
								} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
								else if (s.tag === 18) {
									if (((o = s.return), o === null)) throw Error(A(341));
									(o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), pl(o, n, t), (o = s.sibling);
								} else o = s.child;
								if (o !== null) o.return = s;
								else
									for (o = s; o !== null; ) {
										if (o === t) {
											o = null;
											break;
										}
										if (((s = o.sibling), s !== null)) {
											(s.return = o.return), (o = s);
											break;
										}
										o = o.return;
									}
								s = o;
							}
					Ue(e, t, i.children, n), (t = t.child);
				}
				return t;
			case 9:
				return (i = t.type), (r = t.pendingProps.children), Cr(t, n), (i = ut(i)), (r = r(i)), (t.flags |= 1), Ue(e, t, r, n), t.child;
			case 14:
				return (r = t.type), (i = kt(r, t.pendingProps)), (i = kt(r.type, i)), Lp(e, t, r, i, n);
			case 15:
				return Op(e, t, t.type, t.pendingProps, n);
			case 17:
				return (
					(r = t.type),
					(i = t.pendingProps),
					(i = t.elementType === r ? i : kt(r, i)),
					Gs(e, t),
					(t.tag = 1),
					Ye(r) ? ((e = !0), Os(t)) : (e = !1),
					Cr(t, n),
					Yd(t, r, i),
					yl(t, r, i, n),
					Dl(null, t, r, !0, e, n)
				);
			case 19:
				return Np(e, t, n);
			case 22:
				return jp(e, t, n);
		}
		throw Error(A(156, t.tag));
	};
	function oh(e, t) {
		return Ff(e, t);
	}
	function n1(e, t, n, r) {
		(this.tag = e),
			(this.key = n),
			(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
			(this.index = 0),
			(this.ref = null),
			(this.pendingProps = t),
			(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
			(this.mode = r),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function dt(e, t, n, r) {
		return new n1(e, t, n, r);
	}
	function Jl(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function r1(e) {
		if (typeof e == 'function') return Jl(e) ? 1 : 0;
		if (e != null) {
			if (((e = e.$$typeof), e === sa)) return 11;
			if (e === la) return 14;
		}
		return 2;
	}
	function xn(e, t) {
		var n = e.alternate;
		return (
			n === null
				? ((n = dt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
				: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
			(n.flags = e.flags & 14680064),
			(n.childLanes = e.childLanes),
			(n.lanes = e.lanes),
			(n.child = e.child),
			(n.memoizedProps = e.memoizedProps),
			(n.memoizedState = e.memoizedState),
			(n.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(n.sibling = e.sibling),
			(n.index = e.index),
			(n.ref = e.ref),
			n
		);
	}
	function ro(e, t, n, r, i, s) {
		var o = 2;
		if (((r = e), typeof e == 'function')) Jl(e) && (o = 1);
		else if (typeof e == 'string') o = 5;
		else
			e: switch (e) {
				case or:
					return Wn(n.children, i, s, t);
				case ra:
					(o = 8), (i |= 8);
					break;
				case ia:
					return (e = dt(12, n, t, i | 2)), (e.elementType = ia), (e.lanes = s), e;
				case oa:
					return (e = dt(13, n, t, i)), (e.elementType = oa), (e.lanes = s), e;
				case aa:
					return (e = dt(19, n, t, i)), (e.elementType = aa), (e.lanes = s), e;
				case hf:
					return io(n, i, s, t);
				default:
					if (typeof e == 'object' && e !== null)
						switch (e.$$typeof) {
							case df:
								o = 10;
								break e;
							case pf:
								o = 9;
								break e;
							case sa:
								o = 11;
								break e;
							case la:
								o = 14;
								break e;
							case Jt:
								(o = 16), (r = null);
								break e;
						}
					throw Error(A(130, e == null ? e : typeof e, ''));
			}
		return (t = dt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
	}
	function Wn(e, t, n, r) {
		return (e = dt(7, e, r, t)), (e.lanes = n), e;
	}
	function io(e, t, n, r) {
		return (e = dt(22, e, r, t)), (e.elementType = hf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
	}
	function eu(e, t, n) {
		return (e = dt(6, e, null, t)), (e.lanes = n), e;
	}
	function tu(e, t, n) {
		return (t = dt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
	}
	function i1(e, t, n, r, i) {
		(this.tag = t),
			(this.containerInfo = e),
			(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode = this.pendingContext = this.context = null),
			(this.callbackPriority = 0),
			(this.eventTimes = Oa(0)),
			(this.expirationTimes = Oa(-1)),
			(this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
			(this.entanglements = Oa(0)),
			(this.identifierPrefix = r),
			(this.onRecoverableError = i),
			(this.mutableSourceEagerHydrationData = null);
	}
	function nu(e, t, n, r, i, s, o, a, l) {
		return (
			(e = new i1(e, t, n, a, l)),
			t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
			(s = dt(3, null, null, t)),
			(e.current = s),
			(s.stateNode = e),
			(s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
			ml(s),
			e
		);
	}
	function s1(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return { $$typeof: sr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
	}
	function ah(e) {
		if (!e) return cn;
		e = e._reactInternals;
		e: {
			if (Rn(e) !== e || e.tag !== 1) throw Error(A(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break e;
					case 1:
						if (Ye(t.type)) {
							t = t.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				t = t.return;
			} while (t !== null);
			throw Error(A(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (Ye(n)) return Ad(e, n, t);
		}
		return t;
	}
	function lh(e, t, n, r, i, s, o, a, l) {
		return (
			(e = nu(n, r, !0, e, i, s, o, a, l)),
			(e.context = ah(null)),
			(n = e.current),
			(r = He()),
			(i = yn(n)),
			(s = Wt(r, i)),
			(s.callback = t ?? null),
			pn(n, s, i),
			(e.current.lanes = i),
			ti(e, i, r),
			qe(e, r),
			e
		);
	}
	function so(e, t, n, r) {
		var i = t.current,
			s = He(),
			o = yn(i);
		return (
			(n = ah(n)),
			t.context === null ? (t.context = n) : (t.pendingContext = n),
			(t = Wt(s, o)),
			(t.payload = { element: e }),
			(r = r === void 0 ? null : r),
			r !== null && (t.callback = r),
			(e = pn(i, t, o)),
			e !== null && (Ct(e, i, o, s), Ms(e, i, o)),
			o
		);
	}
	function oo(e) {
		if (((e = e.current), !e.child)) return null;
		switch (e.child.tag) {
			case 5:
				return e.child.stateNode;
			default:
				return e.child.stateNode;
		}
	}
	function uh(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ru(e, t) {
		uh(e, t), (e = e.alternate) && uh(e, t);
	}
	function o1() {
		return null;
	}
	var ch =
		typeof reportError == 'function'
			? reportError
			: function (e) {
					console.error(e);
			  };
	function iu(e) {
		this._internalRoot = e;
	}
	(ao.prototype.render = iu.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(A(409));
			so(e, t, null, null);
		}),
		(ao.prototype.unmount = iu.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					zn(function () {
						so(null, e, null, null);
					}),
						(t[Ft] = null);
				}
			});
	function ao(e) {
		this._internalRoot = e;
	}
	ao.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = Gf();
			e = { blockedOn: null, target: e, priority: t };
			for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
			sn.splice(n, 0, e), n === 0 && Xf(e);
		}
	};
	function su(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	function lo(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable ')));
	}
	function fh() {}
	function a1(e, t, n, r, i) {
		if (i) {
			if (typeof r == 'function') {
				var s = r;
				r = function () {
					var c = oo(o);
					s.call(c);
				};
			}
			var o = lh(t, r, e, 0, null, !1, !1, '', fh);
			return (e._reactRootContainer = o), (e[Ft] = o.current), mi(e.nodeType === 8 ? e.parentNode : e), zn(), o;
		}
		for (; (i = e.lastChild); ) e.removeChild(i);
		if (typeof r == 'function') {
			var a = r;
			r = function () {
				var c = oo(l);
				a.call(c);
			};
		}
		var l = nu(e, 0, !1, null, null, !1, !1, '', fh);
		return (
			(e._reactRootContainer = l),
			(e[Ft] = l.current),
			mi(e.nodeType === 8 ? e.parentNode : e),
			zn(function () {
				so(t, l, n, r);
			}),
			l
		);
	}
	function uo(e, t, n, r, i) {
		var s = n._reactRootContainer;
		if (s) {
			var o = s;
			if (typeof i == 'function') {
				var a = i;
				i = function () {
					var l = oo(o);
					a.call(l);
				};
			}
			so(t, o, e, i);
		} else o = a1(n, t, e, i, r);
		return oo(o);
	}
	(Uf = function (e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = ei(t.pendingLanes);
					n !== 0 && (ja(t, n | 1), qe(t, Se()), !(te & 6) && ((_r = Se() + 500), fn()));
				}
				break;
			case 13:
				zn(function () {
					var r = $t(e, 1);
					if (r !== null) {
						var i = He();
						Ct(r, e, 1, i);
					}
				}),
					ru(e, 1);
		}
	}),
		(_a = function (e) {
			if (e.tag === 13) {
				var t = $t(e, 134217728);
				if (t !== null) {
					var n = He();
					Ct(t, e, 134217728, n);
				}
				ru(e, 134217728);
			}
		}),
		(Hf = function (e) {
			if (e.tag === 13) {
				var t = yn(e),
					n = $t(e, t);
				if (n !== null) {
					var r = He();
					Ct(n, e, t, r);
				}
				ru(e, t);
			}
		}),
		(Gf = function () {
			return re;
		}),
		(Kf = function (e, t) {
			var n = re;
			try {
				return (re = e), t();
			} finally {
				re = n;
			}
		}),
		(Sa = function (e, t, n) {
			switch (t) {
				case 'input':
					if ((ha(e, n), (t = n.name), n.type === 'radio' && t != null)) {
						for (n = e; n.parentNode; ) n = n.parentNode;
						for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = Ts(r);
								if (!i) throw Error(A(90));
								yf(r), ha(r, i);
							}
						}
					}
					break;
				case 'textarea':
					Sf(e, n);
					break;
				case 'select':
					(t = n.value), t != null && ar(e, !!n.multiple, t, !1);
			}
		}),
		(Rf = Ql),
		(bf = zn);
	var l1 = { usingClientEntryPoint: !1, Events: [vi, yr, Ts, jf, _f, Ql] },
		bi = { findFiberByHostInstance: bn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
		u1 = {
			bundleType: bi.bundleType,
			version: bi.version,
			rendererPackageName: bi.rendererPackageName,
			rendererConfig: bi.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: It.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return (e = Nf(e)), e === null ? null : e.stateNode;
			},
			findFiberByHostInstance: bi.findFiberByHostInstance || o1,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!co.isDisabled && co.supportsFiber)
			try {
				(as = co.inject(u1)), (Lt = co);
			} catch {}
	}
	(et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l1),
		(et.createPortal = function (e, t) {
			var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!su(t)) throw Error(A(200));
			return s1(e, t, null, n);
		}),
		(et.createRoot = function (e, t) {
			if (!su(e)) throw Error(A(299));
			var n = !1,
				r = '',
				i = ch;
			return (
				t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
				(t = nu(e, 1, !1, null, null, n, !1, r, i)),
				(e[Ft] = t.current),
				mi(e.nodeType === 8 ? e.parentNode : e),
				new iu(t)
			);
		}),
		(et.findDOMNode = function (e) {
			if (e == null) return null;
			if (e.nodeType === 1) return e;
			var t = e._reactInternals;
			if (t === void 0) throw typeof e.render == 'function' ? Error(A(188)) : ((e = Object.keys(e).join(',')), Error(A(268, e)));
			return (e = Nf(t)), (e = e === null ? null : e.stateNode), e;
		}),
		(et.flushSync = function (e) {
			return zn(e);
		}),
		(et.hydrate = function (e, t, n) {
			if (!lo(t)) throw Error(A(200));
			return uo(null, e, t, !0, n);
		}),
		(et.hydrateRoot = function (e, t, n) {
			if (!su(e)) throw Error(A(405));
			var r = (n != null && n.hydratedSources) || null,
				i = !1,
				s = '',
				o = ch;
			if (
				(n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
				(t = lh(t, null, e, 1, n ?? null, i, !1, s, o)),
				(e[Ft] = t.current),
				mi(e),
				r)
			)
				for (e = 0; e < r.length; e++)
					(n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
			return new ao(t);
		}),
		(et.render = function (e, t, n) {
			if (!lo(t)) throw Error(A(200));
			return uo(null, e, t, !1, n);
		}),
		(et.unmountComponentAtNode = function (e) {
			if (!lo(e)) throw Error(A(40));
			return e._reactRootContainer
				? (zn(function () {
						uo(null, null, e, !1, function () {
							(e._reactRootContainer = null), (e[Ft] = null);
						});
				  }),
				  !0)
				: !1;
		}),
		(et.unstable_batchedUpdates = Ql),
		(et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
			if (!lo(n)) throw Error(A(200));
			if (e == null || e._reactInternals === void 0) throw Error(A(38));
			return uo(e, t, n, !1, r);
		}),
		(et.version = '18.2.0-next-9e3b772b8-20220608');
	function dh() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dh);
			} catch (e) {
				console.error(e);
			}
	}
	dh(), (sf.exports = et);
	var c1 = sf.exports,
		ph = c1;
	(Zo.createRoot = ph.createRoot), (Zo.hydrateRoot = ph.hydrateRoot);
	const ou = C.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
		fo = C.createContext({}),
		po = C.createContext(null),
		ho = typeof document < 'u',
		au = ho ? C.useLayoutEffect : C.useEffect,
		hh = C.createContext({ strict: !1 });
	function f1(e, t, n, r) {
		const { visualElement: i } = C.useContext(fo),
			s = C.useContext(hh),
			o = C.useContext(po),
			a = C.useContext(ou).reducedMotion,
			l = C.useRef();
		(r = r || s.renderer), !l.current && r && (l.current = r(e, { visualState: t, parent: i, props: n, presenceContext: o, blockInitialAnimation: o ? o.initial === !1 : !1, reducedMotionConfig: a }));
		const c = l.current;
		C.useInsertionEffect(() => {
			c && c.update(n, o);
		});
		const u = C.useRef(!!window.HandoffAppearAnimations);
		return (
			au(() => {
				c && (c.render(), u.current && c.animationState && c.animationState.animateChanges());
			}),
			C.useEffect(() => {
				c && (c.updateFeatures(), !u.current && c.animationState && c.animationState.animateChanges(), (window.HandoffAppearAnimations = void 0), (u.current = !1));
			}),
			c
		);
	}
	function br(e) {
		return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
	}
	function d1(e, t, n) {
		return C.useCallback(
			(r) => {
				r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == 'function' ? n(r) : br(n) && (n.current = r));
			},
			[t]
		);
	}
	function Di(e) {
		return typeof e == 'string' || Array.isArray(e);
	}
	function mo(e) {
		return typeof e == 'object' && typeof e.start == 'function';
	}
	const lu = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
		uu = ['initial', ...lu];
	function go(e) {
		return mo(e.animate) || uu.some((t) => Di(e[t]));
	}
	function mh(e) {
		return !!(go(e) || e.variants);
	}
	function p1(e, t) {
		if (go(e)) {
			const { initial: n, animate: r } = e;
			return { initial: n === !1 || Di(n) ? n : void 0, animate: Di(r) ? r : void 0 };
		}
		return e.inherit !== !1 ? t : {};
	}
	function h1(e) {
		const { initial: t, animate: n } = p1(e, C.useContext(fo));
		return C.useMemo(() => ({ initial: t, animate: n }), [gh(t), gh(n)]);
	}
	function gh(e) {
		return Array.isArray(e) ? e.join(' ') : e;
	}
	const yh = {
			animation: ['animate', 'variants', 'whileHover', 'whileTap', 'exit', 'whileInView', 'whileFocus', 'whileDrag'],
			exit: ['exit'],
			drag: ['drag', 'dragControls'],
			focus: ['whileFocus'],
			hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
			tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
			pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
			inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
			layout: ['layout', 'layoutId'],
		},
		Ai = {};
	for (const e in yh) Ai[e] = { isEnabled: (t) => yh[e].some((n) => !!t[n]) };
	function m1(e) {
		for (const t in e) Ai[t] = { ...Ai[t], ...e[t] };
	}
	const cu = C.createContext({}),
		vh = C.createContext({}),
		g1 = Symbol.for('motionComponentSymbol');
	function y1({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
		e && m1(e);
		function s(a, l) {
			let c;
			const u = { ...C.useContext(ou), ...a, layoutId: v1(a) },
				{ isStatic: f } = u,
				d = h1(a),
				m = r(a, f);
			if (!f && ho) {
				d.visualElement = f1(i, m, u, t);
				const w = C.useContext(vh),
					T = C.useContext(hh).strict;
				d.visualElement && (c = d.visualElement.loadFeatures(u, T, e, w));
			}
			return C.createElement(
				fo.Provider,
				{ value: d },
				c && d.visualElement ? C.createElement(c, { visualElement: d.visualElement, ...u }) : null,
				n(i, a, d1(m, d.visualElement, l), m, f, d.visualElement)
			);
		}
		const o = C.forwardRef(s);
		return (o[g1] = i), o;
	}
	function v1({ layoutId: e }) {
		const t = C.useContext(cu).id;
		return t && e !== void 0 ? t + '-' + e : e;
	}
	function x1(e) {
		function t(r, i = {}) {
			return y1(e(r, i));
		}
		if (typeof Proxy > 'u') return t;
		const n = new Map();
		return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
	}
	const w1 = [
		'animate',
		'circle',
		'defs',
		'desc',
		'ellipse',
		'g',
		'image',
		'line',
		'filter',
		'marker',
		'mask',
		'metadata',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'rect',
		'stop',
		'switch',
		'symbol',
		'svg',
		'text',
		'tspan',
		'use',
		'view',
	];
	function fu(e) {
		return typeof e != 'string' || e.includes('-') ? !1 : !!(w1.indexOf(e) > -1 || /[A-Z]/.test(e));
	}
	const yo = {};
	function k1(e) {
		Object.assign(yo, e);
	}
	const Mi = ['transformPerspective', 'x', 'y', 'z', 'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'],
		Un = new Set(Mi);
	function xh(e, { layout: t, layoutId: n }) {
		return Un.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!yo[e] || e === 'opacity'));
	}
	const Ze = (e) => !!(e && e.getVelocity),
		S1 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
		E1 = Mi.length;
	function C1(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
		let s = '';
		for (let o = 0; o < E1; o++) {
			const a = Mi[o];
			if (e[a] !== void 0) {
				const l = S1[a] || a;
				s += `${l}(${e[a]}) `;
			}
		}
		return t && !e.z && (s += 'translateZ(0)'), (s = s.trim()), i ? (s = i(e, r ? '' : s)) : n && r && (s = 'none'), s;
	}
	const wh = (e) => (t) => typeof t == 'string' && t.startsWith(e),
		kh = wh('--'),
		du = wh('var(--'),
		P1 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
		T1 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
		wn = (e, t, n) => Math.min(Math.max(n, e), t),
		Hn = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
		Ni = { ...Hn, transform: (e) => wn(0, 1, e) },
		vo = { ...Hn, default: 1 },
		Ii = (e) => Math.round(e * 1e5) / 1e5,
		xo = /(-)?([\d]*\.?[\d])+/g,
		Sh = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
		L1 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
	function Fi(e) {
		return typeof e == 'string';
	}
	const Vi = (e) => ({ test: (t) => Fi(t) && t.endsWith(e) && t.split(' ').length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
		kn = Vi('deg'),
		bt = Vi('%'),
		Y = Vi('px'),
		O1 = Vi('vh'),
		j1 = Vi('vw'),
		Eh = { ...bt, parse: (e) => bt.parse(e) / 100, transform: (e) => bt.transform(e * 100) },
		Ch = { ...Hn, transform: Math.round },
		Ph = {
			borderWidth: Y,
			borderTopWidth: Y,
			borderRightWidth: Y,
			borderBottomWidth: Y,
			borderLeftWidth: Y,
			borderRadius: Y,
			radius: Y,
			borderTopLeftRadius: Y,
			borderTopRightRadius: Y,
			borderBottomRightRadius: Y,
			borderBottomLeftRadius: Y,
			width: Y,
			maxWidth: Y,
			height: Y,
			maxHeight: Y,
			size: Y,
			top: Y,
			right: Y,
			bottom: Y,
			left: Y,
			padding: Y,
			paddingTop: Y,
			paddingRight: Y,
			paddingBottom: Y,
			paddingLeft: Y,
			margin: Y,
			marginTop: Y,
			marginRight: Y,
			marginBottom: Y,
			marginLeft: Y,
			rotate: kn,
			rotateX: kn,
			rotateY: kn,
			rotateZ: kn,
			scale: vo,
			scaleX: vo,
			scaleY: vo,
			scaleZ: vo,
			skew: kn,
			skewX: kn,
			skewY: kn,
			distance: Y,
			translateX: Y,
			translateY: Y,
			translateZ: Y,
			x: Y,
			y: Y,
			z: Y,
			perspective: Y,
			transformPerspective: Y,
			opacity: Ni,
			originX: Eh,
			originY: Eh,
			originZ: Y,
			zIndex: Ch,
			fillOpacity: Ni,
			strokeOpacity: Ni,
			numOctaves: Ch,
		};
	function pu(e, t, n, r) {
		const { style: i, vars: s, transform: o, transformOrigin: a } = e;
		let l = !1,
			c = !1,
			u = !0;
		for (const f in t) {
			const d = t[f];
			if (kh(f)) {
				s[f] = d;
				continue;
			}
			const m = Ph[f],
				w = T1(d, m);
			if (Un.has(f)) {
				if (((l = !0), (o[f] = w), !u)) continue;
				d !== (m.default || 0) && (u = !1);
			} else f.startsWith('origin') ? ((c = !0), (a[f] = w)) : (i[f] = w);
		}
		if ((t.transform || (l || r ? (i.transform = C1(e.transform, n, u, r)) : i.transform && (i.transform = 'none')), c)) {
			const { originX: f = '50%', originY: d = '50%', originZ: m = 0 } = a;
			i.transformOrigin = `${f} ${d} ${m}`;
		}
	}
	const hu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
	function Th(e, t, n) {
		for (const r in t) !Ze(t[r]) && !xh(r, n) && (e[r] = t[r]);
	}
	function _1({ transformTemplate: e }, t, n) {
		return C.useMemo(() => {
			const r = hu();
			return pu(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
		}, [t]);
	}
	function R1(e, t, n) {
		const r = e.style || {},
			i = {};
		return Th(i, r, e), Object.assign(i, _1(e, t, n)), e.transformValues ? e.transformValues(i) : i;
	}
	function b1(e, t, n) {
		const r = {},
			i = R1(e, t, n);
		return (
			e.drag &&
				e.dragListener !== !1 &&
				((r.draggable = !1), (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'), (i.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
			e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
			(r.style = i),
			r
		);
	}
	const D1 = new Set([
		'animate',
		'exit',
		'variants',
		'initial',
		'style',
		'values',
		'variants',
		'transition',
		'transformTemplate',
		'transformValues',
		'custom',
		'inherit',
		'onLayoutAnimationStart',
		'onLayoutAnimationComplete',
		'onLayoutMeasure',
		'onBeforeLayoutMeasure',
		'onAnimationStart',
		'onAnimationComplete',
		'onUpdate',
		'onDragStart',
		'onDrag',
		'onDragEnd',
		'onMeasureDragConstraints',
		'onDirectionLock',
		'onDragTransitionEnd',
		'_dragX',
		'_dragY',
		'onHoverStart',
		'onHoverEnd',
		'onViewportEnter',
		'onViewportLeave',
		'ignoreStrict',
		'viewport',
	]);
	function wo(e) {
		return e.startsWith('while') || (e.startsWith('drag') && e !== 'draggable') || e.startsWith('layout') || e.startsWith('onTap') || e.startsWith('onPan') || D1.has(e);
	}
	let Lh = (e) => !wo(e);
	function A1(e) {
		e && (Lh = (t) => (t.startsWith('on') ? !wo(t) : e(t)));
	}
	try {
		A1(require('@emotion/is-prop-valid').default);
	} catch {}
	function M1(e, t, n) {
		const r = {};
		for (const i in e) (i === 'values' && typeof e.values == 'object') || ((Lh(i) || (n === !0 && wo(i)) || (!t && !wo(i)) || (e.draggable && i.startsWith('onDrag'))) && (r[i] = e[i]));
		return r;
	}
	function Oh(e, t, n) {
		return typeof e == 'string' ? e : Y.transform(t + n * e);
	}
	function N1(e, t, n) {
		const r = Oh(t, e.x, e.width),
			i = Oh(n, e.y, e.height);
		return `${r} ${i}`;
	}
	const I1 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
		F1 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
	function V1(e, t, n = 1, r = 0, i = !0) {
		e.pathLength = 1;
		const s = i ? I1 : F1;
		e[s.offset] = Y.transform(-r);
		const o = Y.transform(t),
			a = Y.transform(n);
		e[s.array] = `${o} ${a}`;
	}
	function mu(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a = 1, pathOffset: l = 0, ...c }, u, f, d) {
		if ((pu(e, c, u, d), f)) {
			e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
			return;
		}
		(e.attrs = e.style), (e.style = {});
		const { attrs: m, style: w, dimensions: T } = e;
		m.transform && (T && (w.transform = m.transform), delete m.transform),
			T && (i !== void 0 || s !== void 0 || w.transform) && (w.transformOrigin = N1(T, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)),
			t !== void 0 && (m.x = t),
			n !== void 0 && (m.y = n),
			r !== void 0 && (m.scale = r),
			o !== void 0 && V1(m, o, a, l, !1);
	}
	const jh = () => ({ ...hu(), attrs: {} }),
		gu = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
	function z1(e, t, n, r) {
		const i = C.useMemo(() => {
			const s = jh();
			return mu(s, t, { enableHardwareAcceleration: !1 }, gu(r), e.transformTemplate), { ...s.attrs, style: { ...s.style } };
		}, [t]);
		if (e.style) {
			const s = {};
			Th(s, e.style, e), (i.style = { ...s, ...i.style });
		}
		return i;
	}
	function B1(e = !1) {
		return (n, r, i, { latestValues: s }, o) => {
			const l = (fu(n) ? z1 : b1)(r, s, o, n),
				u = { ...M1(r, typeof n == 'string', e), ...l, ref: i },
				{ children: f } = r,
				d = C.useMemo(() => (Ze(f) ? f.get() : f), [f]);
			return C.createElement(n, { ...u, children: d });
		};
	}
	const yu = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	function _h(e, { style: t, vars: n }, r, i) {
		Object.assign(e.style, t, i && i.getProjectionStyles(r));
		for (const s in n) e.style.setProperty(s, n[s]);
	}
	const Rh = new Set([
		'baseFrequency',
		'diffuseConstant',
		'kernelMatrix',
		'kernelUnitLength',
		'keySplines',
		'keyTimes',
		'limitingConeAngle',
		'markerHeight',
		'markerWidth',
		'numOctaves',
		'targetX',
		'targetY',
		'surfaceScale',
		'specularConstant',
		'specularExponent',
		'stdDeviation',
		'tableValues',
		'viewBox',
		'gradientTransform',
		'pathLength',
		'startOffset',
		'textLength',
		'lengthAdjust',
	]);
	function bh(e, t, n, r) {
		_h(e, t, void 0, r);
		for (const i in t.attrs) e.setAttribute(Rh.has(i) ? i : yu(i), t.attrs[i]);
	}
	function vu(e, t) {
		const { style: n } = e,
			r = {};
		for (const i in n) (Ze(n[i]) || (t.style && Ze(t.style[i])) || xh(i, e)) && (r[i] = n[i]);
		return r;
	}
	function Dh(e, t) {
		const n = vu(e, t);
		for (const r in e)
			if (Ze(e[r]) || Ze(t[r])) {
				const i = Mi.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r;
				n[i] = e[r];
			}
		return n;
	}
	function xu(e, t, n, r = {}, i = {}) {
		return (
			typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
			typeof t == 'string' && (t = e.variants && e.variants[t]),
			typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
			t
		);
	}
	function ko(e) {
		const t = C.useRef(null);
		return t.current === null && (t.current = e()), t.current;
	}
	const So = (e) => Array.isArray(e),
		$1 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
		W1 = (e) => (So(e) ? e[e.length - 1] || 0 : e);
	function Eo(e) {
		const t = Ze(e) ? e.get() : e;
		return $1(t) ? t.toValue() : t;
	}
	function U1({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, s) {
		const o = { latestValues: H1(r, i, s, e), renderState: t() };
		return n && (o.mount = (a) => n(r, a, o)), o;
	}
	const Ah = (e) => (t, n) => {
		const r = C.useContext(fo),
			i = C.useContext(po),
			s = () => U1(e, t, r, i);
		return n ? s() : ko(s);
	};
	function H1(e, t, n, r) {
		const i = {},
			s = r(e, {});
		for (const d in s) i[d] = Eo(s[d]);
		let { initial: o, animate: a } = e;
		const l = go(e),
			c = mh(e);
		t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
		let u = n ? n.initial === !1 : !1;
		u = u || o === !1;
		const f = u ? a : o;
		return (
			f &&
				typeof f != 'boolean' &&
				!mo(f) &&
				(Array.isArray(f) ? f : [f]).forEach((m) => {
					const w = xu(e, m);
					if (!w) return;
					const { transitionEnd: T, transition: j, ...v } = w;
					for (const p in v) {
						let h = v[p];
						if (Array.isArray(h)) {
							const P = u ? h.length - 1 : 0;
							h = h[P];
						}
						h !== null && (i[p] = h);
					}
					for (const p in T) i[p] = T[p];
				}),
			i
		);
	}
	const we = (e) => e;
	class Mh {
		constructor() {
			(this.order = []), (this.scheduled = new Set());
		}
		add(t) {
			if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0;
		}
		remove(t) {
			const n = this.order.indexOf(t);
			n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
		}
		clear() {
			(this.order.length = 0), this.scheduled.clear();
		}
	}
	function G1(e) {
		let t = new Mh(),
			n = new Mh(),
			r = 0,
			i = !1,
			s = !1;
		const o = new WeakSet(),
			a = {
				schedule: (l, c = !1, u = !1) => {
					const f = u && i,
						d = f ? t : n;
					return c && o.add(l), d.add(l) && f && i && (r = t.order.length), l;
				},
				cancel: (l) => {
					n.remove(l), o.delete(l);
				},
				process: (l) => {
					if (i) {
						s = !0;
						return;
					}
					if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
						for (let c = 0; c < r; c++) {
							const u = t.order[c];
							u(l), o.has(u) && (a.schedule(u), e());
						}
					(i = !1), s && ((s = !1), a.process(l));
				},
			};
		return a;
	}
	const Co = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
		K1 = 40;
	function Y1(e, t) {
		let n = !1,
			r = !0;
		const i = { delta: 0, timestamp: 0, isProcessing: !1 },
			s = Co.reduce((f, d) => ((f[d] = G1(() => (n = !0))), f), {}),
			o = (f) => s[f].process(i),
			a = () => {
				const f = performance.now();
				(n = !1), (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, K1), 1)), (i.timestamp = f), (i.isProcessing = !0), Co.forEach(o), (i.isProcessing = !1), n && t && ((r = !1), e(a));
			},
			l = () => {
				(n = !0), (r = !0), i.isProcessing || e(a);
			};
		return {
			schedule: Co.reduce((f, d) => {
				const m = s[d];
				return (f[d] = (w, T = !1, j = !1) => (n || l(), m.schedule(w, T, j))), f;
			}, {}),
			cancel: (f) => Co.forEach((d) => s[d].cancel(f)),
			state: i,
			steps: s,
		};
	}
	const { schedule: ae, cancel: Gt, state: Re, steps: wu } = Y1(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : we, !0),
		X1 = {
			useVisualState: Ah({
				scrapeMotionValuesFromProps: Dh,
				createRenderState: jh,
				onMount: (e, t, { renderState: n, latestValues: r }) => {
					ae.read(() => {
						try {
							n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
						} catch {
							n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
						}
					}),
						ae.render(() => {
							mu(n, r, { enableHardwareAcceleration: !1 }, gu(t.tagName), e.transformTemplate), bh(t, n);
						});
				},
			}),
		},
		Q1 = { useVisualState: Ah({ scrapeMotionValuesFromProps: vu, createRenderState: hu }) };
	function q1(e, { forwardMotionProps: t = !1 }, n, r) {
		return { ...(fu(e) ? X1 : Q1), preloadedFeatures: n, useRender: B1(t), createVisualElement: r, Component: e };
	}
	function Kt(e, t, n, r = { passive: !0 }) {
		return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
	}
	const Nh = (e) => (e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1);
	function Po(e, t = 'page') {
		return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
	}
	const Z1 = (e) => (t) => Nh(t) && e(t, Po(t));
	function Yt(e, t, n, r) {
		return Kt(e, t, Z1(n), r);
	}
	const J1 = (e, t) => (n) => t(e(n)),
		Sn = (...e) => e.reduce(J1);
	function Ih(e) {
		let t = null;
		return () => {
			const n = () => {
				t = null;
			};
			return t === null ? ((t = e), n) : !1;
		};
	}
	const Fh = Ih('dragHorizontal'),
		Vh = Ih('dragVertical');
	function zh(e) {
		let t = !1;
		if (e === 'y') t = Vh();
		else if (e === 'x') t = Fh();
		else {
			const n = Fh(),
				r = Vh();
			n && r
				? (t = () => {
						n(), r();
				  })
				: (n && n(), r && r());
		}
		return t;
	}
	function Bh() {
		const e = zh(!0);
		return e ? (e(), !1) : !0;
	}
	class En {
		constructor(t) {
			(this.isMounted = !1), (this.node = t);
		}
		update() {}
	}
	function $h(e, t) {
		const n = 'pointer' + (t ? 'enter' : 'leave'),
			r = 'onHover' + (t ? 'Start' : 'End'),
			i = (s, o) => {
				if (s.type === 'touch' || Bh()) return;
				const a = e.getProps();
				e.animationState && a.whileHover && e.animationState.setActive('whileHover', t), a[r] && ae.update(() => a[r](s, o));
			};
		return Yt(e.current, n, i, { passive: !e.getProps()[r] });
	}
	class ex extends En {
		mount() {
			this.unmount = Sn($h(this.node, !0), $h(this.node, !1));
		}
		unmount() {}
	}
	class tx extends En {
		constructor() {
			super(...arguments), (this.isActive = !1);
		}
		onFocus() {
			let t = !1;
			try {
				t = this.node.current.matches(':focus-visible');
			} catch {
				t = !0;
			}
			!t || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
		}
		onBlur() {
			!this.isActive || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
		}
		mount() {
			this.unmount = Sn(
				Kt(this.node.current, 'focus', () => this.onFocus()),
				Kt(this.node.current, 'blur', () => this.onBlur())
			);
		}
		unmount() {}
	}
	const Wh = (e, t) => (t ? (e === t ? !0 : Wh(e, t.parentElement)) : !1);
	function ku(e, t) {
		if (!t) return;
		const n = new PointerEvent('pointer' + e);
		t(n, Po(n));
	}
	class nx extends En {
		constructor() {
			super(...arguments),
				(this.removeStartListeners = we),
				(this.removeEndListeners = we),
				(this.removeAccessibleListeners = we),
				(this.startPointerPress = (t, n) => {
					if ((this.removeEndListeners(), this.isPressing)) return;
					const r = this.node.getProps(),
						s = Yt(
							window,
							'pointerup',
							(a, l) => {
								if (!this.checkPressEnd()) return;
								const { onTap: c, onTapCancel: u } = this.node.getProps();
								ae.update(() => {
									Wh(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
								});
							},
							{ passive: !(r.onTap || r.onPointerUp) }
						),
						o = Yt(window, 'pointercancel', (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
					(this.removeEndListeners = Sn(s, o)), this.startPress(t, n);
				}),
				(this.startAccessiblePress = () => {
					const t = (s) => {
							if (s.key !== 'Enter' || this.isPressing) return;
							const o = (a) => {
								a.key !== 'Enter' ||
									!this.checkPressEnd() ||
									ku('up', (l, c) => {
										const { onTap: u } = this.node.getProps();
										u && ae.update(() => u(l, c));
									});
							};
							this.removeEndListeners(),
								(this.removeEndListeners = Kt(this.node.current, 'keyup', o)),
								ku('down', (a, l) => {
									this.startPress(a, l);
								});
						},
						n = Kt(this.node.current, 'keydown', t),
						r = () => {
							this.isPressing && ku('cancel', (s, o) => this.cancelPress(s, o));
						},
						i = Kt(this.node.current, 'blur', r);
					this.removeAccessibleListeners = Sn(n, i);
				});
		}
		startPress(t, n) {
			this.isPressing = !0;
			const { onTapStart: r, whileTap: i } = this.node.getProps();
			i && this.node.animationState && this.node.animationState.setActive('whileTap', !0), r && ae.update(() => r(t, n));
		}
		checkPressEnd() {
			return this.removeEndListeners(), (this.isPressing = !1), this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive('whileTap', !1), !Bh();
		}
		cancelPress(t, n) {
			if (!this.checkPressEnd()) return;
			const { onTapCancel: r } = this.node.getProps();
			r && ae.update(() => r(t, n));
		}
		mount() {
			const t = this.node.getProps(),
				n = Yt(this.node.current, 'pointerdown', this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
				r = Kt(this.node.current, 'focus', this.startAccessiblePress);
			this.removeStartListeners = Sn(n, r);
		}
		unmount() {
			this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
		}
	}
	const Su = new WeakMap(),
		Eu = new WeakMap(),
		rx = (e) => {
			const t = Su.get(e.target);
			t && t(e);
		},
		ix = (e) => {
			e.forEach(rx);
		};
	function sx({ root: e, ...t }) {
		const n = e || document;
		Eu.has(n) || Eu.set(n, {});
		const r = Eu.get(n),
			i = JSON.stringify(t);
		return r[i] || (r[i] = new IntersectionObserver(ix, { root: e, ...t })), r[i];
	}
	function ox(e, t, n) {
		const r = sx(t);
		return (
			Su.set(e, n),
			r.observe(e),
			() => {
				Su.delete(e), r.unobserve(e);
			}
		);
	}
	const ax = { some: 0, all: 1 };
	class lx extends En {
		constructor() {
			super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
		}
		startObserver() {
			this.unmount();
			const { viewport: t = {} } = this.node.getProps(),
				{ root: n, margin: r, amount: i = 'some', once: s } = t,
				o = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == 'number' ? i : ax[i] },
				a = (l) => {
					const { isIntersecting: c } = l;
					if (this.isInView === c || ((this.isInView = c), s && !c && this.hasEnteredView)) return;
					c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive('whileInView', c);
					const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
						d = c ? u : f;
					d && d(l);
				};
			return ox(this.node.current, o, a);
		}
		mount() {
			this.startObserver();
		}
		update() {
			if (typeof IntersectionObserver > 'u') return;
			const { props: t, prevProps: n } = this.node;
			['amount', 'margin', 'root'].some(ux(t, n)) && this.startObserver();
		}
		unmount() {}
	}
	function ux({ viewport: e = {} }, { viewport: t = {} } = {}) {
		return (n) => e[n] !== t[n];
	}
	const cx = { inView: { Feature: lx }, tap: { Feature: nx }, focus: { Feature: tx }, hover: { Feature: ex } };
	function Uh(e, t) {
		if (!Array.isArray(t)) return !1;
		const n = t.length;
		if (n !== e.length) return !1;
		for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
		return !0;
	}
	function fx(e) {
		const t = {};
		return e.values.forEach((n, r) => (t[r] = n.get())), t;
	}
	function dx(e) {
		const t = {};
		return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
	}
	function To(e, t, n) {
		const r = e.getProps();
		return xu(r, t, n !== void 0 ? n : r.custom, fx(e), dx(e));
	}
	const px = 'data-' + yu('framerAppearId');
	let hx = we,
		Cu = we;
	const Cn = (e) => e * 1e3,
		Xt = (e) => e / 1e3,
		mx = { current: !1 },
		Hh = (e) => Array.isArray(e) && typeof e[0] == 'number';
	function Gh(e) {
		return !!(!e || (typeof e == 'string' && Kh[e]) || Hh(e) || (Array.isArray(e) && e.every(Gh)));
	}
	const zi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
		Kh = {
			linear: 'linear',
			ease: 'ease',
			easeIn: 'ease-in',
			easeOut: 'ease-out',
			easeInOut: 'ease-in-out',
			circIn: zi([0, 0.65, 0.55, 1]),
			circOut: zi([0.55, 0, 1, 0.45]),
			backIn: zi([0.31, 0.01, 0.66, -0.59]),
			backOut: zi([0.33, 1.53, 0.69, 0.99]),
		};
	function Yh(e) {
		if (e) return Hh(e) ? zi(e) : Array.isArray(e) ? e.map(Yh) : Kh[e];
	}
	function gx(e, t, n, { delay: r = 0, duration: i, repeat: s = 0, repeatType: o = 'loop', ease: a, times: l } = {}) {
		const c = { [t]: n };
		l && (c.offset = l);
		const u = Yh(a);
		return (
			Array.isArray(u) && (c.easing = u),
			e.animate(c, { delay: r, duration: i, easing: Array.isArray(u) ? 'linear' : u, fill: 'both', iterations: s + 1, direction: o === 'reverse' ? 'alternate' : 'normal' })
		);
	}
	function yx(e, { repeat: t, repeatType: n = 'loop' }) {
		const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
		return e[r];
	}
	const Xh = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
		vx = 1e-7,
		xx = 12;
	function wx(e, t, n, r, i) {
		let s,
			o,
			a = 0;
		do (o = t + (n - t) / 2), (s = Xh(o, r, i) - e), s > 0 ? (n = o) : (t = o);
		while (Math.abs(s) > vx && ++a < xx);
		return o;
	}
	function Bi(e, t, n, r) {
		if (e === t && n === r) return we;
		const i = (s) => wx(s, 0, 1, e, n);
		return (s) => (s === 0 || s === 1 ? s : Xh(i(s), t, r));
	}
	const kx = Bi(0.42, 0, 1, 1),
		Sx = Bi(0, 0, 0.58, 1),
		Qh = Bi(0.42, 0, 0.58, 1),
		Ex = (e) => Array.isArray(e) && typeof e[0] != 'number',
		qh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
		Zh = (e) => (t) => 1 - e(1 - t),
		Jh = (e) => 1 - Math.sin(Math.acos(e)),
		Pu = Zh(Jh),
		Cx = qh(Pu),
		em = Bi(0.33, 1.53, 0.69, 0.99),
		Tu = Zh(em),
		Px = qh(Tu),
		Tx = {
			linear: we,
			easeIn: kx,
			easeInOut: Qh,
			easeOut: Sx,
			circIn: Jh,
			circInOut: Cx,
			circOut: Pu,
			backIn: Tu,
			backInOut: Px,
			backOut: em,
			anticipate: (e) => ((e *= 2) < 1 ? 0.5 * Tu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
		},
		tm = (e) => {
			if (Array.isArray(e)) {
				Cu(e.length === 4);
				const [t, n, r, i] = e;
				return Bi(t, n, r, i);
			} else if (typeof e == 'string') return Tx[e];
			return e;
		},
		Lu = (e, t) => (n) => !!((Fi(n) && L1.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
		nm = (e, t, n) => (r) => {
			if (!Fi(r)) return r;
			const [i, s, o, a] = r.match(xo);
			return { [e]: parseFloat(i), [t]: parseFloat(s), [n]: parseFloat(o), alpha: a !== void 0 ? parseFloat(a) : 1 };
		},
		Lx = (e) => wn(0, 255, e),
		Ou = { ...Hn, transform: (e) => Math.round(Lx(e)) },
		Gn = {
			test: Lu('rgb', 'red'),
			parse: nm('red', 'green', 'blue'),
			transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => 'rgba(' + Ou.transform(e) + ', ' + Ou.transform(t) + ', ' + Ou.transform(n) + ', ' + Ii(Ni.transform(r)) + ')',
		};
	function Ox(e) {
		let t = '',
			n = '',
			r = '',
			i = '';
		return (
			e.length > 5
				? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
				: ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (i = e.substring(4, 5)), (t += t), (n += n), (r += r), (i += i)),
			{ red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
		);
	}
	const ju = { test: Lu('#'), parse: Ox, transform: Gn.transform },
		Dr = {
			test: Lu('hsl', 'hue'),
			parse: nm('hue', 'saturation', 'lightness'),
			transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => 'hsla(' + Math.round(e) + ', ' + bt.transform(Ii(t)) + ', ' + bt.transform(Ii(n)) + ', ' + Ii(Ni.transform(r)) + ')',
		},
		Ge = {
			test: (e) => Gn.test(e) || ju.test(e) || Dr.test(e),
			parse: (e) => (Gn.test(e) ? Gn.parse(e) : Dr.test(e) ? Dr.parse(e) : ju.parse(e)),
			transform: (e) => (Fi(e) ? e : e.hasOwnProperty('red') ? Gn.transform(e) : Dr.transform(e)),
		},
		ye = (e, t, n) => -n * e + n * t + e;
	function _u(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
	}
	function jx({ hue: e, saturation: t, lightness: n, alpha: r }) {
		(e /= 360), (t /= 100), (n /= 100);
		let i = 0,
			s = 0,
			o = 0;
		if (!t) i = s = o = n;
		else {
			const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
				l = 2 * n - a;
			(i = _u(l, a, e + 1 / 3)), (s = _u(l, a, e)), (o = _u(l, a, e - 1 / 3));
		}
		return { red: Math.round(i * 255), green: Math.round(s * 255), blue: Math.round(o * 255), alpha: r };
	}
	const Ru = (e, t, n) => {
			const r = e * e;
			return Math.sqrt(Math.max(0, n * (t * t - r) + r));
		},
		_x = [ju, Gn, Dr],
		Rx = (e) => _x.find((t) => t.test(e));
	function rm(e) {
		const t = Rx(e);
		let n = t.parse(e);
		return t === Dr && (n = jx(n)), n;
	}
	const im = (e, t) => {
		const n = rm(e),
			r = rm(t),
			i = { ...n };
		return (s) => ((i.red = Ru(n.red, r.red, s)), (i.green = Ru(n.green, r.green, s)), (i.blue = Ru(n.blue, r.blue, s)), (i.alpha = ye(n.alpha, r.alpha, s)), Gn.transform(i));
	};
	function bx(e) {
		var t, n;
		return isNaN(e) && Fi(e) && (((t = e.match(xo)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Sh)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
	}
	const sm = { regex: P1, countKey: 'Vars', token: '${v}', parse: we },
		om = { regex: Sh, countKey: 'Colors', token: '${c}', parse: Ge.parse },
		am = { regex: xo, countKey: 'Numbers', token: '${n}', parse: Hn.parse };
	function bu(e, { regex: t, countKey: n, token: r, parse: i }) {
		const s = e.tokenised.match(t);
		s && ((e['num' + n] = s.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...s.map(i)));
	}
	function Lo(e) {
		const t = e.toString(),
			n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
		return n.value.includes('var(--') && bu(n, sm), bu(n, om), bu(n, am), n;
	}
	function lm(e) {
		return Lo(e).values;
	}
	function um(e) {
		const { values: t, numColors: n, numVars: r, tokenised: i } = Lo(e),
			s = t.length;
		return (o) => {
			let a = i;
			for (let l = 0; l < s; l++) l < r ? (a = a.replace(sm.token, o[l])) : l < r + n ? (a = a.replace(om.token, Ge.transform(o[l]))) : (a = a.replace(am.token, Ii(o[l])));
			return a;
		};
	}
	const Dx = (e) => (typeof e == 'number' ? 0 : e);
	function Ax(e) {
		const t = lm(e);
		return um(e)(t.map(Dx));
	}
	const Pn = { test: bx, parse: lm, createTransformer: um, getAnimatableNone: Ax },
		cm = (e, t) => (n) => `${n > 0 ? t : e}`;
	function fm(e, t) {
		return typeof e == 'number' ? (n) => ye(e, t, n) : Ge.test(e) ? im(e, t) : e.startsWith('var(') ? cm(e, t) : pm(e, t);
	}
	const dm = (e, t) => {
			const n = [...e],
				r = n.length,
				i = e.map((s, o) => fm(s, t[o]));
			return (s) => {
				for (let o = 0; o < r; o++) n[o] = i[o](s);
				return n;
			};
		},
		Mx = (e, t) => {
			const n = { ...e, ...t },
				r = {};
			for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = fm(e[i], t[i]));
			return (i) => {
				for (const s in r) n[s] = r[s](i);
				return n;
			};
		},
		pm = (e, t) => {
			const n = Pn.createTransformer(t),
				r = Lo(e),
				i = Lo(t);
			return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Sn(dm(r.values, i.values), n) : cm(e, t);
		},
		$i = (e, t, n) => {
			const r = t - e;
			return r === 0 ? 1 : (n - e) / r;
		},
		hm = (e, t) => (n) => ye(e, t, n);
	function Nx(e) {
		return typeof e == 'number' ? hm : typeof e == 'string' ? (Ge.test(e) ? im : pm) : Array.isArray(e) ? dm : typeof e == 'object' ? Mx : hm;
	}
	function Ix(e, t, n) {
		const r = [],
			i = n || Nx(e[0]),
			s = e.length - 1;
		for (let o = 0; o < s; o++) {
			let a = i(e[o], e[o + 1]);
			if (t) {
				const l = Array.isArray(t) ? t[o] || we : t;
				a = Sn(l, a);
			}
			r.push(a);
		}
		return r;
	}
	function mm(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
		const s = e.length;
		if ((Cu(s === t.length), s === 1)) return () => t[0];
		e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
		const o = Ix(t, r, i),
			a = o.length,
			l = (c) => {
				let u = 0;
				if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
				const f = $i(e[u], e[u + 1], c);
				return o[u](f);
			};
		return n ? (c) => l(wn(e[0], e[s - 1], c)) : l;
	}
	function Fx(e, t) {
		const n = e[e.length - 1];
		for (let r = 1; r <= t; r++) {
			const i = $i(0, t, r);
			e.push(ye(n, 1, i));
		}
	}
	function Vx(e) {
		const t = [0];
		return Fx(t, e.length - 1), t;
	}
	function zx(e, t) {
		return e.map((n) => n * t);
	}
	function Bx(e, t) {
		return e.map(() => t || Qh).splice(0, e.length - 1);
	}
	function Oo({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
		const i = Ex(r) ? r.map(tm) : tm(r),
			s = { done: !1, value: t[0] },
			o = zx(n && n.length === t.length ? n : Vx(t), e),
			a = mm(o, t, { ease: Array.isArray(i) ? i : Bx(t, i) });
		return { calculatedDuration: e, next: (l) => ((s.value = a(l)), (s.done = l >= e), s) };
	}
	function gm(e, t) {
		return t ? e * (1e3 / t) : 0;
	}
	const $x = 5;
	function ym(e, t, n) {
		const r = Math.max(t - $x, 0);
		return gm(n - e(r), t - r);
	}
	const Du = 0.001,
		Wx = 0.01,
		vm = 10,
		Ux = 0.05,
		Hx = 1;
	function Gx({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
		let i, s;
		hx(e <= Cn(vm));
		let o = 1 - t;
		(o = wn(Ux, Hx, o)),
			(e = wn(Wx, vm, Xt(e))),
			o < 1
				? ((i = (c) => {
						const u = c * o,
							f = u * e,
							d = u - n,
							m = Au(c, o),
							w = Math.exp(-f);
						return Du - (d / m) * w;
				  }),
				  (s = (c) => {
						const f = c * o * e,
							d = f * n + n,
							m = Math.pow(o, 2) * Math.pow(c, 2) * e,
							w = Math.exp(-f),
							T = Au(Math.pow(c, 2), o);
						return ((-i(c) + Du > 0 ? -1 : 1) * ((d - m) * w)) / T;
				  }))
				: ((i = (c) => {
						const u = Math.exp(-c * e),
							f = (c - n) * e + 1;
						return -Du + u * f;
				  }),
				  (s = (c) => {
						const u = Math.exp(-c * e),
							f = (n - c) * (e * e);
						return u * f;
				  }));
		const a = 5 / e,
			l = Yx(i, s, a);
		if (((e = Cn(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
		{
			const c = Math.pow(l, 2) * r;
			return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
		}
	}
	const Kx = 12;
	function Yx(e, t, n) {
		let r = n;
		for (let i = 1; i < Kx; i++) r = r - e(r) / t(r);
		return r;
	}
	function Au(e, t) {
		return e * Math.sqrt(1 - t * t);
	}
	const Xx = ['duration', 'bounce'],
		Qx = ['stiffness', 'damping', 'mass'];
	function xm(e, t) {
		return t.some((n) => e[n] !== void 0);
	}
	function qx(e) {
		let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
		if (!xm(e, Qx) && xm(e, Xx)) {
			const n = Gx(e);
			(t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
		}
		return t;
	}
	function wm({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
		const i = e[0],
			s = e[e.length - 1],
			o = { done: !1, value: i },
			{ stiffness: a, damping: l, mass: c, velocity: u, duration: f, isResolvedFromDuration: d } = qx(r),
			m = u ? -Xt(u) : 0,
			w = l / (2 * Math.sqrt(a * c)),
			T = s - i,
			j = Xt(Math.sqrt(a / c)),
			v = Math.abs(T) < 5;
		n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5);
		let p;
		if (w < 1) {
			const h = Au(j, w);
			p = (P) => {
				const R = Math.exp(-w * j * P);
				return s - R * (((m + w * j * T) / h) * Math.sin(h * P) + T * Math.cos(h * P));
			};
		} else if (w === 1) p = (h) => s - Math.exp(-j * h) * (T + (m + j * T) * h);
		else {
			const h = j * Math.sqrt(w * w - 1);
			p = (P) => {
				const R = Math.exp(-w * j * P),
					L = Math.min(h * P, 300);
				return s - (R * ((m + w * j * T) * Math.sinh(L) + h * T * Math.cosh(L))) / h;
			};
		}
		return {
			calculatedDuration: (d && f) || null,
			next: (h) => {
				const P = p(h);
				if (d) o.done = h >= f;
				else {
					let R = m;
					h !== 0 && (w < 1 ? (R = ym(p, h, P)) : (R = 0));
					const L = Math.abs(R) <= n,
						S = Math.abs(s - P) <= t;
					o.done = L && S;
				}
				return (o.value = o.done ? s : P), o;
			},
		};
	}
	function km({
		keyframes: e,
		velocity: t = 0,
		power: n = 0.8,
		timeConstant: r = 325,
		bounceDamping: i = 10,
		bounceStiffness: s = 500,
		modifyTarget: o,
		min: a,
		max: l,
		restDelta: c = 0.5,
		restSpeed: u,
	}) {
		const f = e[0],
			d = { done: !1, value: f },
			m = (y) => (a !== void 0 && y < a) || (l !== void 0 && y > l),
			w = (y) => (a === void 0 ? l : l === void 0 || Math.abs(a - y) < Math.abs(l - y) ? a : l);
		let T = n * t;
		const j = f + T,
			v = o === void 0 ? j : o(j);
		v !== j && (T = v - f);
		const p = (y) => -T * Math.exp(-y / r),
			h = (y) => v + p(y),
			P = (y) => {
				const x = p(y),
					k = h(y);
				(d.done = Math.abs(x) <= c), (d.value = d.done ? v : k);
			};
		let R, L;
		const S = (y) => {
			m(d.value) && ((R = y), (L = wm({ keyframes: [d.value, w(d.value)], velocity: ym(h, y, d.value), damping: i, stiffness: s, restDelta: c, restSpeed: u })));
		};
		return (
			S(0),
			{
				calculatedDuration: null,
				next: (y) => {
					let x = !1;
					return !L && R === void 0 && ((x = !0), P(y), S(y)), R !== void 0 && y > R ? L.next(y - R) : (!x && P(y), d);
				},
			}
		);
	}
	const Zx = (e) => {
			const t = ({ timestamp: n }) => e(n);
			return { start: () => ae.update(t, !0), stop: () => Gt(t), now: () => (Re.isProcessing ? Re.timestamp : performance.now()) };
		},
		Sm = 2e4;
	function Em(e) {
		let t = 0;
		const n = 50;
		let r = e.next(t);
		for (; !r.done && t < Sm; ) (t += n), (r = e.next(t));
		return t >= Sm ? 1 / 0 : t;
	}
	const Jx = { decay: km, inertia: km, tween: Oo, keyframes: Oo, spring: wm };
	function jo({
		autoplay: e = !0,
		delay: t = 0,
		driver: n = Zx,
		keyframes: r,
		type: i = 'keyframes',
		repeat: s = 0,
		repeatDelay: o = 0,
		repeatType: a = 'loop',
		onPlay: l,
		onStop: c,
		onComplete: u,
		onUpdate: f,
		...d
	}) {
		let m = 1,
			w = !1,
			T,
			j;
		const v = () => {
			j = new Promise((B) => {
				T = B;
			});
		};
		v();
		let p;
		const h = Jx[i] || Oo;
		let P;
		h !== Oo && typeof r[0] != 'number' && ((P = mm([0, 100], r, { clamp: !1 })), (r = [0, 100]));
		const R = h({ ...d, keyframes: r });
		let L;
		a === 'mirror' && (L = h({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
		let S = 'idle',
			y = null,
			x = null,
			k = null;
		R.calculatedDuration === null && s && (R.calculatedDuration = Em(R));
		const { calculatedDuration: _ } = R;
		let b = 1 / 0,
			N = 1 / 0;
		_ !== null && ((b = _ + o), (N = b * (s + 1) - o));
		let $ = 0;
		const Q = (B) => {
				if (x === null) return;
				m > 0 && (x = Math.min(x, B)), m < 0 && (x = Math.min(B - N / m, x)), y !== null ? ($ = y) : ($ = Math.round(B - x) * m);
				const O = $ - t * (m >= 0 ? 1 : -1),
					W = m >= 0 ? O < 0 : O > N;
				($ = Math.max(O, 0)), S === 'finished' && y === null && ($ = N);
				let G = $,
					K = R;
				if (s) {
					const U = $ / b;
					let ee = Math.floor(U),
						ne = U % 1;
					!ne && U >= 1 && (ne = 1), ne === 1 && ee--, (ee = Math.min(ee, s + 1));
					const ke = !!(ee % 2);
					ke && (a === 'reverse' ? ((ne = 1 - ne), o && (ne -= o / b)) : a === 'mirror' && (K = L));
					let ie = wn(0, 1, ne);
					$ > N && (ie = a === 'reverse' && ke ? 1 : 0), (G = ie * b);
				}
				const X = W ? { done: !1, value: r[0] } : K.next(G);
				P && (X.value = P(X.value));
				let { done: J } = X;
				!W && _ !== null && (J = m >= 0 ? $ >= N : $ <= 0);
				const fe = y === null && (S === 'finished' || (S === 'running' && J));
				return f && f(X.value), fe && M(), X;
			},
			q = () => {
				p && p.stop(), (p = void 0);
			},
			V = () => {
				(S = 'idle'), q(), T(), v(), (x = k = null);
			},
			M = () => {
				(S = 'finished'), u && u(), q(), T();
			},
			D = () => {
				if (w) return;
				p || (p = n(Q));
				const B = p.now();
				l && l(), y !== null ? (x = B - y) : (!x || S === 'finished') && (x = B), S === 'finished' && v(), (k = x), (y = null), (S = 'running'), p.start();
			};
		e && D();
		const H = {
			then(B, O) {
				return j.then(B, O);
			},
			get time() {
				return Xt($);
			},
			set time(B) {
				(B = Cn(B)), ($ = B), y !== null || !p || m === 0 ? (y = B) : (x = p.now() - B / m);
			},
			get duration() {
				const B = R.calculatedDuration === null ? Em(R) : R.calculatedDuration;
				return Xt(B);
			},
			get speed() {
				return m;
			},
			set speed(B) {
				B === m || !p || ((m = B), (H.time = Xt($)));
			},
			get state() {
				return S;
			},
			play: D,
			pause: () => {
				(S = 'paused'), (y = $);
			},
			stop: () => {
				(w = !0), S !== 'idle' && ((S = 'idle'), c && c(), V());
			},
			cancel: () => {
				k !== null && Q(k), V();
			},
			complete: () => {
				S = 'finished';
			},
			sample: (B) => ((x = 0), Q(B)),
		};
		return H;
	}
	function ew(e) {
		let t;
		return () => (t === void 0 && (t = e()), t);
	}
	const tw = ew(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
		nw = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
		_o = 10,
		rw = 2e4,
		iw = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !Gh(t.ease);
	function sw(e, t, { onUpdate: n, onComplete: r, ...i }) {
		if (!(tw() && nw.has(t) && !i.repeatDelay && i.repeatType !== 'mirror' && i.damping !== 0 && i.type !== 'inertia')) return !1;
		let o = !1,
			a,
			l;
		const c = () => {
			l = new Promise((p) => {
				a = p;
			});
		};
		c();
		let { keyframes: u, duration: f = 300, ease: d, times: m } = i;
		if (iw(t, i)) {
			const p = jo({ ...i, repeat: 0, delay: 0 });
			let h = { done: !1, value: u[0] };
			const P = [];
			let R = 0;
			for (; !h.done && R < rw; ) (h = p.sample(R)), P.push(h.value), (R += _o);
			(m = void 0), (u = P), (f = R - _o), (d = 'linear');
		}
		const w = gx(e.owner.current, t, u, { ...i, duration: f, ease: d, times: m });
		i.syncStart && (w.startTime = Re.isProcessing ? Re.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
		const T = () => w.cancel(),
			j = () => {
				ae.update(T), a(), c();
			};
		return (
			(w.onfinish = () => {
				e.set(yx(u, i)), r && r(), j();
			}),
			{
				then(p, h) {
					return l.then(p, h);
				},
				attachTimeline(p) {
					return (w.timeline = p), (w.onfinish = null), we;
				},
				get time() {
					return Xt(w.currentTime || 0);
				},
				set time(p) {
					w.currentTime = Cn(p);
				},
				get speed() {
					return w.playbackRate;
				},
				set speed(p) {
					w.playbackRate = p;
				},
				get duration() {
					return Xt(f);
				},
				play: () => {
					o || (w.play(), Gt(T));
				},
				pause: () => w.pause(),
				stop: () => {
					if (((o = !0), w.playState === 'idle')) return;
					const { currentTime: p } = w;
					if (p) {
						const h = jo({ ...i, autoplay: !1 });
						e.setWithVelocity(h.sample(p - _o).value, h.sample(p).value, _o);
					}
					j();
				},
				complete: () => w.finish(),
				cancel: j,
			}
		);
	}
	function ow({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
		const i = () => (n && n(e[e.length - 1]), r && r(), { time: 0, speed: 1, duration: 0, play: we, pause: we, stop: we, then: (s) => (s(), Promise.resolve()), cancel: we, complete: we });
		return t ? jo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
	}
	const aw = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
		lw = (e) => ({ type: 'spring', stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
		uw = { type: 'keyframes', duration: 0.8 },
		cw = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
		fw = (e, { keyframes: t }) => (t.length > 2 ? uw : Un.has(e) ? (e.startsWith('scale') ? lw(t[1]) : aw) : cw),
		Mu = (e, t) => (e === 'zIndex' ? !1 : !!(typeof t == 'number' || Array.isArray(t) || (typeof t == 'string' && (Pn.test(t) || t === '0') && !t.startsWith('url(')))),
		dw = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
	function pw(e) {
		const [t, n] = e.slice(0, -1).split('(');
		if (t === 'drop-shadow') return e;
		const [r] = n.match(xo) || [];
		if (!r) return e;
		const i = n.replace(r, '');
		let s = dw.has(t) ? 1 : 0;
		return r !== n && (s *= 100), t + '(' + s + i + ')';
	}
	const hw = /([a-z-]*)\(.*?\)/g,
		Nu = {
			...Pn,
			getAnimatableNone: (e) => {
				const t = e.match(hw);
				return t ? t.map(pw).join(' ') : e;
			},
		},
		mw = {
			...Ph,
			color: Ge,
			backgroundColor: Ge,
			outlineColor: Ge,
			fill: Ge,
			stroke: Ge,
			borderColor: Ge,
			borderTopColor: Ge,
			borderRightColor: Ge,
			borderBottomColor: Ge,
			borderLeftColor: Ge,
			filter: Nu,
			WebkitFilter: Nu,
		},
		Iu = (e) => mw[e];
	function Cm(e, t) {
		let n = Iu(e);
		return n !== Nu && (n = Pn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
	}
	const Pm = (e) => /^0[^.\s]+$/.test(e);
	function gw(e) {
		if (typeof e == 'number') return e === 0;
		if (e !== null) return e === 'none' || e === '0' || Pm(e);
	}
	function yw(e, t, n, r) {
		const i = Mu(t, n);
		let s;
		Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
		const o = r.from !== void 0 ? r.from : e.get();
		let a;
		const l = [];
		for (let c = 0; c < s.length; c++) s[c] === null && (s[c] = c === 0 ? o : s[c - 1]), gw(s[c]) && l.push(c), typeof s[c] == 'string' && s[c] !== 'none' && s[c] !== '0' && (a = s[c]);
		if (i && l.length && a)
			for (let c = 0; c < l.length; c++) {
				const u = l[c];
				s[u] = Cm(t, a);
			}
		return s;
	}
	function vw({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u }) {
		return !!Object.keys(u).length;
	}
	function Tm(e, t) {
		return e[t] || e.default || e;
	}
	const Fu =
		(e, t, n, r = {}) =>
		(i) => {
			const s = Tm(r, e) || {},
				o = s.delay || r.delay || 0;
			let { elapsed: a = 0 } = r;
			a = a - Cn(o);
			const l = yw(t, e, n, s),
				c = l[0],
				u = l[l.length - 1],
				f = Mu(e, c),
				d = Mu(e, u);
			let m = {
				keyframes: l,
				velocity: t.getVelocity(),
				ease: 'easeOut',
				...s,
				delay: -a,
				onUpdate: (w) => {
					t.set(w), s.onUpdate && s.onUpdate(w);
				},
				onComplete: () => {
					i(), s.onComplete && s.onComplete();
				},
			};
			if ((vw(s) || (m = { ...m, ...fw(e, m) }), m.duration && (m.duration = Cn(m.duration)), m.repeatDelay && (m.repeatDelay = Cn(m.repeatDelay)), !f || !d || mx.current || s.type === !1))
				return ow(m);
			if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
				const w = sw(t, e, m);
				if (w) return w;
			}
			return jo(m);
		};
	function Ro(e) {
		return !!(Ze(e) && e.add);
	}
	const Lm = (e) => /^\-?\d*\.?\d+$/.test(e);
	function Vu(e, t) {
		e.indexOf(t) === -1 && e.push(t);
	}
	function zu(e, t) {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	}
	class Bu {
		constructor() {
			this.subscriptions = [];
		}
		add(t) {
			return Vu(this.subscriptions, t), () => zu(this.subscriptions, t);
		}
		notify(t, n, r) {
			const i = this.subscriptions.length;
			if (i)
				if (i === 1) this.subscriptions[0](t, n, r);
				else
					for (let s = 0; s < i; s++) {
						const o = this.subscriptions[s];
						o && o(t, n, r);
					}
		}
		getSize() {
			return this.subscriptions.length;
		}
		clear() {
			this.subscriptions.length = 0;
		}
	}
	const xw = (e) => !isNaN(parseFloat(e));
	class ww {
		constructor(t, n = {}) {
			(this.version = '10.16.4'),
				(this.timeDelta = 0),
				(this.lastUpdated = 0),
				(this.canTrackVelocity = !1),
				(this.events = {}),
				(this.updateAndNotify = (r, i = !0) => {
					(this.prev = this.current), (this.current = r);
					const { delta: s, timestamp: o } = Re;
					this.lastUpdated !== o && ((this.timeDelta = s), (this.lastUpdated = o), ae.postRender(this.scheduleVelocityCheck)),
						this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
						this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
						i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
				}),
				(this.scheduleVelocityCheck = () => ae.postRender(this.velocityCheck)),
				(this.velocityCheck = ({ timestamp: r }) => {
					r !== this.lastUpdated && ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
				}),
				(this.hasAnimated = !1),
				(this.prev = this.current = t),
				(this.canTrackVelocity = xw(this.current)),
				(this.owner = n.owner);
		}
		onChange(t) {
			return this.on('change', t);
		}
		on(t, n) {
			this.events[t] || (this.events[t] = new Bu());
			const r = this.events[t].add(n);
			return t === 'change'
				? () => {
						r(),
							ae.read(() => {
								this.events.change.getSize() || this.stop();
							});
				  }
				: r;
		}
		clearListeners() {
			for (const t in this.events) this.events[t].clear();
		}
		attach(t, n) {
			(this.passiveEffect = t), (this.stopPassiveEffect = n);
		}
		set(t, n = !0) {
			!n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
		}
		setWithVelocity(t, n, r) {
			this.set(n), (this.prev = t), (this.timeDelta = r);
		}
		jump(t) {
			this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
		}
		get() {
			return this.current;
		}
		getPrevious() {
			return this.prev;
		}
		getVelocity() {
			return this.canTrackVelocity ? gm(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
		}
		start(t) {
			return (
				this.stop(),
				new Promise((n) => {
					(this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify();
				}).then(() => {
					this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
				})
			);
		}
		stop() {
			this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
		}
		isAnimating() {
			return !!this.animation;
		}
		clearAnimation() {
			delete this.animation;
		}
		destroy() {
			this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
		}
	}
	function Kn(e, t) {
		return new ww(e, t);
	}
	const Om = (e) => (t) => t.test(e),
		jm = [Hn, Y, bt, kn, j1, O1, { test: (e) => e === 'auto', parse: (e) => e }],
		Wi = (e) => jm.find(Om(e)),
		kw = [...jm, Ge, Pn],
		Sw = (e) => kw.find(Om(e));
	function Ew(e, t, n) {
		e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kn(n));
	}
	function Cw(e, t) {
		const n = To(e, t);
		let { transitionEnd: r = {}, transition: i = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
		s = { ...s, ...r };
		for (const o in s) {
			const a = W1(s[o]);
			Ew(e, o, a);
		}
	}
	function Pw(e, t, n) {
		var r, i;
		const s = Object.keys(t).filter((a) => !e.hasValue(a)),
			o = s.length;
		if (o)
			for (let a = 0; a < o; a++) {
				const l = s[a],
					c = t[l];
				let u = null;
				Array.isArray(c) && (u = c[0]),
					u === null && (u = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
					u != null &&
						(typeof u == 'string' && (Lm(u) || Pm(u)) ? (u = parseFloat(u)) : !Sw(u) && Pn.test(c) && (u = Cm(l, c)),
						e.addValue(l, Kn(u, { owner: e })),
						n[l] === void 0 && (n[l] = u),
						u !== null && e.setBaseTarget(l, u));
			}
	}
	function Tw(e, t) {
		return t ? (t[e] || t.default || t).from : void 0;
	}
	function Lw(e, t, n) {
		const r = {};
		for (const i in e) {
			const s = Tw(i, t);
			if (s !== void 0) r[i] = s;
			else {
				const o = n.getValue(i);
				o && (r[i] = o.get());
			}
		}
		return r;
	}
	function Ow({ protectedKeys: e, needsAnimating: t }, n) {
		const r = e.hasOwnProperty(n) && t[n] !== !0;
		return (t[n] = !1), r;
	}
	function _m(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
		let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = e.makeTargetAnimatable(t);
		const l = e.getValue('willChange');
		r && (s = r);
		const c = [],
			u = i && e.animationState && e.animationState.getState()[i];
		for (const f in a) {
			const d = e.getValue(f),
				m = a[f];
			if (!d || m === void 0 || (u && Ow(u, f))) continue;
			const w = { delay: n, elapsed: 0, ...s };
			if (window.HandoffAppearAnimations && !d.hasAnimated) {
				const j = e.getProps()[px];
				j && ((w.elapsed = window.HandoffAppearAnimations(j, f, d, ae)), (w.syncStart = !0));
			}
			d.start(Fu(f, d, m, e.shouldReduceMotion && Un.has(f) ? { type: !1 } : w));
			const T = d.animation;
			Ro(l) && (l.add(f), T.then(() => l.remove(f))), c.push(T);
		}
		return (
			o &&
				Promise.all(c).then(() => {
					o && Cw(e, o);
				}),
			c
		);
	}
	function $u(e, t, n = {}) {
		const r = To(e, t, n.custom);
		let { transition: i = e.getDefaultTransition() || {} } = r || {};
		n.transitionOverride && (i = n.transitionOverride);
		const s = r ? () => Promise.all(_m(e, r, n)) : () => Promise.resolve(),
			o =
				e.variantChildren && e.variantChildren.size
					? (l = 0) => {
							const { delayChildren: c = 0, staggerChildren: u, staggerDirection: f } = i;
							return jw(e, t, c + l, u, f, n);
					  }
					: () => Promise.resolve(),
			{ when: a } = i;
		if (a) {
			const [l, c] = a === 'beforeChildren' ? [s, o] : [o, s];
			return l().then(() => c());
		} else return Promise.all([s(), o(n.delay)]);
	}
	function jw(e, t, n = 0, r = 0, i = 1, s) {
		const o = [],
			a = (e.variantChildren.size - 1) * r,
			l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
		return (
			Array.from(e.variantChildren)
				.sort(_w)
				.forEach((c, u) => {
					c.notify('AnimationStart', t), o.push($u(c, t, { ...s, delay: n + l(u) }).then(() => c.notify('AnimationComplete', t)));
				}),
			Promise.all(o)
		);
	}
	function _w(e, t) {
		return e.sortNodePosition(t);
	}
	function Rw(e, t, n = {}) {
		e.notify('AnimationStart', t);
		let r;
		if (Array.isArray(t)) {
			const i = t.map((s) => $u(e, s, n));
			r = Promise.all(i);
		} else if (typeof t == 'string') r = $u(e, t, n);
		else {
			const i = typeof t == 'function' ? To(e, t, n.custom) : t;
			r = Promise.all(_m(e, i, n));
		}
		return r.then(() => e.notify('AnimationComplete', t));
	}
	const bw = [...lu].reverse(),
		Dw = lu.length;
	function Aw(e) {
		return (t) => Promise.all(t.map(({ animation: n, options: r }) => Rw(e, n, r)));
	}
	function Mw(e) {
		let t = Aw(e);
		const n = Iw();
		let r = !0;
		const i = (l, c) => {
			const u = To(e, c);
			if (u) {
				const { transition: f, transitionEnd: d, ...m } = u;
				l = { ...l, ...m, ...d };
			}
			return l;
		};
		function s(l) {
			t = l(e);
		}
		function o(l, c) {
			const u = e.getProps(),
				f = e.getVariantContext(!0) || {},
				d = [],
				m = new Set();
			let w = {},
				T = 1 / 0;
			for (let v = 0; v < Dw; v++) {
				const p = bw[v],
					h = n[p],
					P = u[p] !== void 0 ? u[p] : f[p],
					R = Di(P),
					L = p === c ? h.isActive : null;
				L === !1 && (T = v);
				let S = P === f[p] && P !== u[p] && R;
				if ((S && r && e.manuallyAnimateOnMount && (S = !1), (h.protectedKeys = { ...w }), (!h.isActive && L === null) || (!P && !h.prevProp) || mo(P) || typeof P == 'boolean')) continue;
				const y = Nw(h.prevProp, P);
				let x = y || (p === c && h.isActive && !S && R) || (v > T && R);
				const k = Array.isArray(P) ? P : [P];
				let _ = k.reduce(i, {});
				L === !1 && (_ = {});
				const { prevResolvedValues: b = {} } = h,
					N = { ...b, ..._ },
					$ = (Q) => {
						(x = !0), m.delete(Q), (h.needsAnimating[Q] = !0);
					};
				for (const Q in N) {
					const q = _[Q],
						V = b[Q];
					w.hasOwnProperty(Q) ||
						(q !== V ? (So(q) && So(V) ? (!Uh(q, V) || y ? $(Q) : (h.protectedKeys[Q] = !0)) : q !== void 0 ? $(Q) : m.add(Q)) : q !== void 0 && m.has(Q) ? $(Q) : (h.protectedKeys[Q] = !0));
				}
				(h.prevProp = P),
					(h.prevResolvedValues = _),
					h.isActive && (w = { ...w, ..._ }),
					r && e.blockInitialAnimation && (x = !1),
					x && !S && d.push(...k.map((Q) => ({ animation: Q, options: { type: p, ...l } })));
			}
			if (m.size) {
				const v = {};
				m.forEach((p) => {
					const h = e.getBaseTarget(p);
					h !== void 0 && (v[p] = h);
				}),
					d.push({ animation: v });
			}
			let j = !!d.length;
			return r && u.initial === !1 && !e.manuallyAnimateOnMount && (j = !1), (r = !1), j ? t(d) : Promise.resolve();
		}
		function a(l, c, u) {
			var f;
			if (n[l].isActive === c) return Promise.resolve();
			(f = e.variantChildren) === null ||
				f === void 0 ||
				f.forEach((m) => {
					var w;
					return (w = m.animationState) === null || w === void 0 ? void 0 : w.setActive(l, c);
				}),
				(n[l].isActive = c);
			const d = o(u, l);
			for (const m in n) n[m].protectedKeys = {};
			return d;
		}
		return { animateChanges: o, setActive: a, setAnimateFunction: s, getState: () => n };
	}
	function Nw(e, t) {
		return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Uh(t, e) : !1;
	}
	function Yn(e = !1) {
		return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
	}
	function Iw() {
		return { animate: Yn(!0), whileInView: Yn(), whileHover: Yn(), whileTap: Yn(), whileDrag: Yn(), whileFocus: Yn(), exit: Yn() };
	}
	class Fw extends En {
		constructor(t) {
			super(t), t.animationState || (t.animationState = Mw(t));
		}
		updateAnimationControlsSubscription() {
			const { animate: t } = this.node.getProps();
			this.unmount(), mo(t) && (this.unmount = t.subscribe(this.node));
		}
		mount() {
			this.updateAnimationControlsSubscription();
		}
		update() {
			const { animate: t } = this.node.getProps(),
				{ animate: n } = this.node.prevProps || {};
			t !== n && this.updateAnimationControlsSubscription();
		}
		unmount() {}
	}
	let Vw = 0;
	class zw extends En {
		constructor() {
			super(...arguments), (this.id = Vw++);
		}
		update() {
			if (!this.node.presenceContext) return;
			const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
				{ isPresent: i } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || t === i) return;
			const s = this.node.animationState.setActive('exit', !t, { custom: r ?? this.node.getProps().custom });
			n && !t && s.then(() => n(this.id));
		}
		mount() {
			const { register: t } = this.node.presenceContext || {};
			t && (this.unmount = t(this.id));
		}
		unmount() {}
	}
	const Bw = { animation: { Feature: Fw }, exit: { Feature: zw } },
		Rm = (e, t) => Math.abs(e - t);
	function $w(e, t) {
		const n = Rm(e.x, t.x),
			r = Rm(e.y, t.y);
		return Math.sqrt(n ** 2 + r ** 2);
	}
	class bm {
		constructor(t, n, { transformPagePoint: r } = {}) {
			if (
				((this.startEvent = null),
				(this.lastMoveEvent = null),
				(this.lastMoveEventInfo = null),
				(this.handlers = {}),
				(this.updatePoint = () => {
					if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
					const c = Uu(this.lastMoveEventInfo, this.history),
						u = this.startEvent !== null,
						f = $w(c.offset, { x: 0, y: 0 }) >= 3;
					if (!u && !f) return;
					const { point: d } = c,
						{ timestamp: m } = Re;
					this.history.push({ ...d, timestamp: m });
					const { onStart: w, onMove: T } = this.handlers;
					u || (w && w(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)), T && T(this.lastMoveEvent, c);
				}),
				(this.handlePointerMove = (c, u) => {
					(this.lastMoveEvent = c), (this.lastMoveEventInfo = Wu(u, this.transformPagePoint)), ae.update(this.updatePoint, !0);
				}),
				(this.handlePointerUp = (c, u) => {
					if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
					const { onEnd: f, onSessionEnd: d } = this.handlers,
						m = Uu(c.type === 'pointercancel' ? this.lastMoveEventInfo : Wu(u, this.transformPagePoint), this.history);
					this.startEvent && f && f(c, m), d && d(c, m);
				}),
				!Nh(t))
			)
				return;
			(this.handlers = n), (this.transformPagePoint = r);
			const i = Po(t),
				s = Wu(i, this.transformPagePoint),
				{ point: o } = s,
				{ timestamp: a } = Re;
			this.history = [{ ...o, timestamp: a }];
			const { onSessionStart: l } = n;
			l && l(t, Uu(s, this.history)),
				(this.removeListeners = Sn(Yt(window, 'pointermove', this.handlePointerMove), Yt(window, 'pointerup', this.handlePointerUp), Yt(window, 'pointercancel', this.handlePointerUp)));
		}
		updateHandlers(t) {
			this.handlers = t;
		}
		end() {
			this.removeListeners && this.removeListeners(), Gt(this.updatePoint);
		}
	}
	function Wu(e, t) {
		return t ? { point: t(e.point) } : e;
	}
	function Dm(e, t) {
		return { x: e.x - t.x, y: e.y - t.y };
	}
	function Uu({ point: e }, t) {
		return { point: e, delta: Dm(e, Am(t)), offset: Dm(e, Ww(t)), velocity: Uw(t, 0.1) };
	}
	function Ww(e) {
		return e[0];
	}
	function Am(e) {
		return e[e.length - 1];
	}
	function Uw(e, t) {
		if (e.length < 2) return { x: 0, y: 0 };
		let n = e.length - 1,
			r = null;
		const i = Am(e);
		for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Cn(t))); ) n--;
		if (!r) return { x: 0, y: 0 };
		const s = Xt(i.timestamp - r.timestamp);
		if (s === 0) return { x: 0, y: 0 };
		const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
		return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
	}
	function ot(e) {
		return e.max - e.min;
	}
	function Hu(e, t = 0, n = 0.01) {
		return Math.abs(e - t) <= n;
	}
	function Mm(e, t, n, r = 0.5) {
		(e.origin = r),
			(e.originPoint = ye(t.min, t.max, e.origin)),
			(e.scale = ot(n) / ot(t)),
			(Hu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
			(e.translate = ye(n.min, n.max, e.origin) - e.originPoint),
			(Hu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
	}
	function Ui(e, t, n, r) {
		Mm(e.x, t.x, n.x, r ? r.originX : void 0), Mm(e.y, t.y, n.y, r ? r.originY : void 0);
	}
	function Nm(e, t, n) {
		(e.min = n.min + t.min), (e.max = e.min + ot(t));
	}
	function Hw(e, t, n) {
		Nm(e.x, t.x, n.x), Nm(e.y, t.y, n.y);
	}
	function Im(e, t, n) {
		(e.min = t.min - n.min), (e.max = e.min + ot(t));
	}
	function Hi(e, t, n) {
		Im(e.x, t.x, n.x), Im(e.y, t.y, n.y);
	}
	function Gw(e, { min: t, max: n }, r) {
		return t !== void 0 && e < t ? (e = r ? ye(t, e, r.min) : Math.max(e, t)) : n !== void 0 && e > n && (e = r ? ye(n, e, r.max) : Math.min(e, n)), e;
	}
	function Fm(e, t, n) {
		return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
	}
	function Kw(e, { top: t, left: n, bottom: r, right: i }) {
		return { x: Fm(e.x, n, i), y: Fm(e.y, t, r) };
	}
	function Vm(e, t) {
		let n = t.min - e.min,
			r = t.max - e.max;
		return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
	}
	function Yw(e, t) {
		return { x: Vm(e.x, t.x), y: Vm(e.y, t.y) };
	}
	function Xw(e, t) {
		let n = 0.5;
		const r = ot(e),
			i = ot(t);
		return i > r ? (n = $i(t.min, t.max - r, e.min)) : r > i && (n = $i(e.min, e.max - i, t.min)), wn(0, 1, n);
	}
	function Qw(e, t) {
		const n = {};
		return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
	}
	const Gu = 0.35;
	function qw(e = Gu) {
		return e === !1 ? (e = 0) : e === !0 && (e = Gu), { x: zm(e, 'left', 'right'), y: zm(e, 'top', 'bottom') };
	}
	function zm(e, t, n) {
		return { min: Bm(e, t), max: Bm(e, n) };
	}
	function Bm(e, t) {
		return typeof e == 'number' ? e : e[t] || 0;
	}
	const $m = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
		Ar = () => ({ x: $m(), y: $m() }),
		Wm = () => ({ min: 0, max: 0 }),
		Pe = () => ({ x: Wm(), y: Wm() });
	function Dt(e) {
		return [e('x'), e('y')];
	}
	function Um({ top: e, left: t, right: n, bottom: r }) {
		return { x: { min: t, max: n }, y: { min: e, max: r } };
	}
	function Zw({ x: e, y: t }) {
		return { top: t.min, right: e.max, bottom: t.max, left: e.min };
	}
	function Jw(e, t) {
		if (!t) return e;
		const n = t({ x: e.left, y: e.top }),
			r = t({ x: e.right, y: e.bottom });
		return { top: n.y, left: n.x, bottom: r.y, right: r.x };
	}
	function Ku(e) {
		return e === void 0 || e === 1;
	}
	function Yu({ scale: e, scaleX: t, scaleY: n }) {
		return !Ku(e) || !Ku(t) || !Ku(n);
	}
	function Xn(e) {
		return Yu(e) || Hm(e) || e.z || e.rotate || e.rotateX || e.rotateY;
	}
	function Hm(e) {
		return Gm(e.x) || Gm(e.y);
	}
	function Gm(e) {
		return e && e !== '0%';
	}
	function bo(e, t, n) {
		const r = e - n,
			i = t * r;
		return n + i;
	}
	function Km(e, t, n, r, i) {
		return i !== void 0 && (e = bo(e, i, r)), bo(e, n, r) + t;
	}
	function Xu(e, t = 0, n = 1, r, i) {
		(e.min = Km(e.min, t, n, r, i)), (e.max = Km(e.max, t, n, r, i));
	}
	function Ym(e, { x: t, y: n }) {
		Xu(e.x, t.translate, t.scale, t.originPoint), Xu(e.y, n.translate, n.scale, n.originPoint);
	}
	function ek(e, t, n, r = !1) {
		const i = n.length;
		if (!i) return;
		t.x = t.y = 1;
		let s, o;
		for (let a = 0; a < i; a++) {
			(s = n[a]), (o = s.projectionDelta);
			const l = s.instance;
			(l && l.style && l.style.display === 'contents') ||
				(r && s.options.layoutScroll && s.scroll && s !== s.root && Mr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
				o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ym(e, o)),
				r && Xn(s.latestValues) && Mr(e, s.latestValues));
		}
		(t.x = Xm(t.x)), (t.y = Xm(t.y));
	}
	function Xm(e) {
		return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
	}
	function Tn(e, t) {
		(e.min = e.min + t), (e.max = e.max + t);
	}
	function Qm(e, t, [n, r, i]) {
		const s = t[i] !== void 0 ? t[i] : 0.5,
			o = ye(e.min, e.max, s);
		Xu(e, t[n], t[r], o, t.scale);
	}
	const tk = ['x', 'scaleX', 'originX'],
		nk = ['y', 'scaleY', 'originY'];
	function Mr(e, t) {
		Qm(e.x, t, tk), Qm(e.y, t, nk);
	}
	function qm(e, t) {
		return Um(Jw(e.getBoundingClientRect(), t));
	}
	function rk(e, t, n) {
		const r = qm(e, n),
			{ scroll: i } = t;
		return i && (Tn(r.x, i.offset.x), Tn(r.y, i.offset.y)), r;
	}
	const ik = new WeakMap();
	class sk {
		constructor(t) {
			(this.openGlobalLock = null),
				(this.isDragging = !1),
				(this.currentDirection = null),
				(this.originPoint = { x: 0, y: 0 }),
				(this.constraints = !1),
				(this.hasMutatedConstraints = !1),
				(this.elastic = Pe()),
				(this.visualElement = t);
		}
		start(t, { snapToCursor: n = !1 } = {}) {
			const { presenceContext: r } = this.visualElement;
			if (r && r.isPresent === !1) return;
			const i = (l) => {
					this.stopAnimation(), n && this.snapToCursor(Po(l, 'page').point);
				},
				s = (l, c) => {
					const { drag: u, dragPropagation: f, onDragStart: d } = this.getProps();
					if (u && !f && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = zh(u)), !this.openGlobalLock)) return;
					(this.isDragging = !0),
						(this.currentDirection = null),
						this.resolveConstraints(),
						this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
						Dt((w) => {
							let T = this.getAxisMotionValue(w).get() || 0;
							if (bt.test(T)) {
								const { projection: j } = this.visualElement;
								if (j && j.layout) {
									const v = j.layout.layoutBox[w];
									v && (T = ot(v) * (parseFloat(T) / 100));
								}
							}
							this.originPoint[w] = T;
						}),
						d && ae.update(() => d(l, c), !1, !0);
					const { animationState: m } = this.visualElement;
					m && m.setActive('whileDrag', !0);
				},
				o = (l, c) => {
					const { dragPropagation: u, dragDirectionLock: f, onDirectionLock: d, onDrag: m } = this.getProps();
					if (!u && !this.openGlobalLock) return;
					const { offset: w } = c;
					if (f && this.currentDirection === null) {
						(this.currentDirection = ok(w)), this.currentDirection !== null && d && d(this.currentDirection);
						return;
					}
					this.updateAxis('x', c.point, w), this.updateAxis('y', c.point, w), this.visualElement.render(), m && m(l, c);
				},
				a = (l, c) => this.stop(l, c);
			this.panSession = new bm(t, { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
		}
		stop(t, n) {
			const r = this.isDragging;
			if ((this.cancel(), !r)) return;
			const { velocity: i } = n;
			this.startAnimation(i);
			const { onDragEnd: s } = this.getProps();
			s && ae.update(() => s(t, n));
		}
		cancel() {
			this.isDragging = !1;
			const { projection: t, animationState: n } = this.visualElement;
			t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
			const { dragPropagation: r } = this.getProps();
			!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive('whileDrag', !1);
		}
		updateAxis(t, n, r) {
			const { drag: i } = this.getProps();
			if (!r || !Do(t, i, this.currentDirection)) return;
			const s = this.getAxisMotionValue(t);
			let o = this.originPoint[t] + r[t];
			this.constraints && this.constraints[t] && (o = Gw(o, this.constraints[t], this.elastic[t])), s.set(o);
		}
		resolveConstraints() {
			const { dragConstraints: t, dragElastic: n } = this.getProps(),
				{ layout: r } = this.visualElement.projection || {},
				i = this.constraints;
			t && br(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? (this.constraints = Kw(r.layoutBox, t)) : (this.constraints = !1),
				(this.elastic = qw(n)),
				i !== this.constraints &&
					r &&
					this.constraints &&
					!this.hasMutatedConstraints &&
					Dt((s) => {
						this.getAxisMotionValue(s) && (this.constraints[s] = Qw(r.layoutBox[s], this.constraints[s]));
					});
		}
		resolveRefConstraints() {
			const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
			if (!t || !br(t)) return !1;
			const r = t.current,
				{ projection: i } = this.visualElement;
			if (!i || !i.layout) return !1;
			const s = rk(r, i.root, this.visualElement.getTransformPagePoint());
			let o = Yw(i.layout.layoutBox, s);
			if (n) {
				const a = n(Zw(o));
				(this.hasMutatedConstraints = !!a), a && (o = Um(a));
			}
			return o;
		}
		startAnimation(t) {
			const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(),
				l = this.constraints || {},
				c = Dt((u) => {
					if (!Do(u, n, this.currentDirection)) return;
					let f = (l && l[u]) || {};
					o && (f = { min: 0, max: 0 });
					const d = i ? 200 : 1e6,
						m = i ? 40 : 1e7,
						w = { type: 'inertia', velocity: r ? t[u] : 0, bounceStiffness: d, bounceDamping: m, timeConstant: 750, restDelta: 1, restSpeed: 10, ...s, ...f };
					return this.startAxisValueAnimation(u, w);
				});
			return Promise.all(c).then(a);
		}
		startAxisValueAnimation(t, n) {
			const r = this.getAxisMotionValue(t);
			return r.start(Fu(t, r, 0, n));
		}
		stopAnimation() {
			Dt((t) => this.getAxisMotionValue(t).stop());
		}
		getAxisMotionValue(t) {
			const n = '_drag' + t.toUpperCase(),
				r = this.visualElement.getProps(),
				i = r[n];
			return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
		}
		snapToCursor(t) {
			Dt((n) => {
				const { drag: r } = this.getProps();
				if (!Do(n, r, this.currentDirection)) return;
				const { projection: i } = this.visualElement,
					s = this.getAxisMotionValue(n);
				if (i && i.layout) {
					const { min: o, max: a } = i.layout.layoutBox[n];
					s.set(t[n] - ye(o, a, 0.5));
				}
			});
		}
		scalePositionWithinConstraints() {
			if (!this.visualElement.current) return;
			const { drag: t, dragConstraints: n } = this.getProps(),
				{ projection: r } = this.visualElement;
			if (!br(n) || !r || !this.constraints) return;
			this.stopAnimation();
			const i = { x: 0, y: 0 };
			Dt((o) => {
				const a = this.getAxisMotionValue(o);
				if (a) {
					const l = a.get();
					i[o] = Xw({ min: l, max: l }, this.constraints[o]);
				}
			});
			const { transformTemplate: s } = this.visualElement.getProps();
			(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
				r.root && r.root.updateScroll(),
				r.updateLayout(),
				this.resolveConstraints(),
				Dt((o) => {
					if (!Do(o, t, null)) return;
					const a = this.getAxisMotionValue(o),
						{ min: l, max: c } = this.constraints[o];
					a.set(ye(l, c, i[o]));
				});
		}
		addListeners() {
			if (!this.visualElement.current) return;
			ik.set(this.visualElement, this);
			const t = this.visualElement.current,
				n = Yt(t, 'pointerdown', (l) => {
					const { drag: c, dragListener: u = !0 } = this.getProps();
					c && u && this.start(l);
				}),
				r = () => {
					const { dragConstraints: l } = this.getProps();
					br(l) && (this.constraints = this.resolveRefConstraints());
				},
				{ projection: i } = this.visualElement,
				s = i.addEventListener('measure', r);
			i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
			const o = Kt(window, 'resize', () => this.scalePositionWithinConstraints()),
				a = i.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: c }) => {
					this.isDragging &&
						c &&
						(Dt((u) => {
							const f = this.getAxisMotionValue(u);
							f && ((this.originPoint[u] += l[u].translate), f.set(f.get() + l[u].translate));
						}),
						this.visualElement.render());
				});
			return () => {
				o(), n(), s(), a && a();
			};
		}
		getProps() {
			const t = this.visualElement.getProps(),
				{ drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = Gu, dragMomentum: a = !0 } = t;
			return { ...t, drag: n, dragDirectionLock: r, dragPropagation: i, dragConstraints: s, dragElastic: o, dragMomentum: a };
		}
	}
	function Do(e, t, n) {
		return (t === !0 || t === e) && (n === null || n === e);
	}
	function ok(e, t = 10) {
		let n = null;
		return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
	}
	class ak extends En {
		constructor(t) {
			super(t), (this.removeGroupControls = we), (this.removeListeners = we), (this.controls = new sk(t));
		}
		mount() {
			const { dragControls: t } = this.node.getProps();
			t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || we);
		}
		unmount() {
			this.removeGroupControls(), this.removeListeners();
		}
	}
	const Zm = (e) => (t, n) => {
		e && ae.update(() => e(t, n));
	};
	class lk extends En {
		constructor() {
			super(...arguments), (this.removePointerDownListener = we);
		}
		onPointerDown(t) {
			this.session = new bm(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
		}
		createPanHandlers() {
			const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
			return {
				onSessionStart: Zm(t),
				onStart: Zm(n),
				onMove: r,
				onEnd: (s, o) => {
					delete this.session, i && ae.update(() => i(s, o));
				},
			};
		}
		mount() {
			this.removePointerDownListener = Yt(this.node.current, 'pointerdown', (t) => this.onPointerDown(t));
		}
		update() {
			this.session && this.session.updateHandlers(this.createPanHandlers());
		}
		unmount() {
			this.removePointerDownListener(), this.session && this.session.end();
		}
	}
	function uk() {
		const e = C.useContext(po);
		if (e === null) return [!0, null];
		const { isPresent: t, onExitComplete: n, register: r } = e,
			i = C.useId();
		return C.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
	}
	const Ao = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
	function Jm(e, t) {
		return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
	}
	const Gi = {
			correct: (e, t) => {
				if (!t.target) return e;
				if (typeof e == 'string')
					if (Y.test(e)) e = parseFloat(e);
					else return e;
				const n = Jm(e, t.target.x),
					r = Jm(e, t.target.y);
				return `${n}% ${r}%`;
			},
		},
		ck = {
			correct: (e, { treeScale: t, projectionDelta: n }) => {
				const r = e,
					i = Pn.parse(e);
				if (i.length > 5) return r;
				const s = Pn.createTransformer(e),
					o = typeof i[0] != 'number' ? 1 : 0,
					a = n.x.scale * t.x,
					l = n.y.scale * t.y;
				(i[0 + o] /= a), (i[1 + o] /= l);
				const c = ye(a, l, 0.5);
				return typeof i[2 + o] == 'number' && (i[2 + o] /= c), typeof i[3 + o] == 'number' && (i[3 + o] /= c), s(i);
			},
		};
	class fk extends I.Component {
		componentDidMount() {
			const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
				{ projection: s } = t;
			k1(dk),
				s &&
					(n.group && n.group.add(s),
					r && r.register && i && r.register(s),
					s.root.didUpdate(),
					s.addEventListener('animationComplete', () => {
						this.safeToRemove();
					}),
					s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
				(Ao.hasEverUpdated = !0);
		}
		getSnapshotBeforeUpdate(t) {
			const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props,
				o = r.projection;
			return (
				o &&
					((o.isPresent = s),
					i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
					t.isPresent !== s &&
						(s
							? o.promote()
							: o.relegate() ||
							  ae.postRender(() => {
									const a = o.getStack();
									(!a || !a.members.length) && this.safeToRemove();
							  }))),
				null
			);
		}
		componentDidUpdate() {
			const { projection: t } = this.props.visualElement;
			t &&
				(t.root.didUpdate(),
				queueMicrotask(() => {
					!t.currentAnimation && t.isLead() && this.safeToRemove();
				}));
		}
		componentWillUnmount() {
			const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
				{ projection: i } = t;
			i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
		}
		safeToRemove() {
			const { safeToRemove: t } = this.props;
			t && t();
		}
		render() {
			return null;
		}
	}
	function eg(e) {
		const [t, n] = uk(),
			r = C.useContext(cu);
		return I.createElement(fk, { ...e, layoutGroup: r, switchLayoutGroup: C.useContext(vh), isPresent: t, safeToRemove: n });
	}
	const dk = {
			borderRadius: { ...Gi, applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'] },
			borderTopLeftRadius: Gi,
			borderTopRightRadius: Gi,
			borderBottomLeftRadius: Gi,
			borderBottomRightRadius: Gi,
			boxShadow: ck,
		},
		tg = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
		pk = tg.length,
		ng = (e) => (typeof e == 'string' ? parseFloat(e) : e),
		rg = (e) => typeof e == 'number' || Y.test(e);
	function hk(e, t, n, r, i, s) {
		i
			? ((e.opacity = ye(0, n.opacity !== void 0 ? n.opacity : 1, mk(r))), (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, gk(r))))
			: s && (e.opacity = ye(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
		for (let o = 0; o < pk; o++) {
			const a = `border${tg[o]}Radius`;
			let l = ig(t, a),
				c = ig(n, a);
			if (l === void 0 && c === void 0) continue;
			l || (l = 0), c || (c = 0), l === 0 || c === 0 || rg(l) === rg(c) ? ((e[a] = Math.max(ye(ng(l), ng(c), r), 0)), (bt.test(c) || bt.test(l)) && (e[a] += '%')) : (e[a] = c);
		}
		(t.rotate || n.rotate) && (e.rotate = ye(t.rotate || 0, n.rotate || 0, r));
	}
	function ig(e, t) {
		return e[t] !== void 0 ? e[t] : e.borderRadius;
	}
	const mk = sg(0, 0.5, Pu),
		gk = sg(0.5, 0.95, we);
	function sg(e, t, n) {
		return (r) => (r < e ? 0 : r > t ? 1 : n($i(e, t, r)));
	}
	function og(e, t) {
		(e.min = t.min), (e.max = t.max);
	}
	function pt(e, t) {
		og(e.x, t.x), og(e.y, t.y);
	}
	function ag(e, t, n, r, i) {
		return (e -= t), (e = bo(e, 1 / n, r)), i !== void 0 && (e = bo(e, 1 / i, r)), e;
	}
	function yk(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
		if ((bt.test(t) && ((t = parseFloat(t)), (t = ye(o.min, o.max, t / 100) - o.min)), typeof t != 'number')) return;
		let a = ye(s.min, s.max, r);
		e === s && (a -= t), (e.min = ag(e.min, t, n, a, i)), (e.max = ag(e.max, t, n, a, i));
	}
	function lg(e, t, [n, r, i], s, o) {
		yk(e, t[n], t[r], t[i], t.scale, s, o);
	}
	const vk = ['x', 'scaleX', 'originX'],
		xk = ['y', 'scaleY', 'originY'];
	function ug(e, t, n, r) {
		lg(e.x, t, vk, n ? n.x : void 0, r ? r.x : void 0), lg(e.y, t, xk, n ? n.y : void 0, r ? r.y : void 0);
	}
	function cg(e) {
		return e.translate === 0 && e.scale === 1;
	}
	function fg(e) {
		return cg(e.x) && cg(e.y);
	}
	function wk(e, t) {
		return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
	}
	function dg(e, t) {
		return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
	}
	function pg(e) {
		return ot(e.x) / ot(e.y);
	}
	class kk {
		constructor() {
			this.members = [];
		}
		add(t) {
			Vu(this.members, t), t.scheduleRender();
		}
		remove(t) {
			if ((zu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
				const n = this.members[this.members.length - 1];
				n && this.promote(n);
			}
		}
		relegate(t) {
			const n = this.members.findIndex((i) => t === i);
			if (n === 0) return !1;
			let r;
			for (let i = n; i >= 0; i--) {
				const s = this.members[i];
				if (s.isPresent !== !1) {
					r = s;
					break;
				}
			}
			return r ? (this.promote(r), !0) : !1;
		}
		promote(t, n) {
			const r = this.lead;
			if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
				r.instance && r.scheduleRender(),
					t.scheduleRender(),
					(t.resumeFrom = r),
					n && (t.resumeFrom.preserveOpacity = !0),
					r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
					t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
				const { crossfade: i } = t.options;
				i === !1 && r.hide();
			}
		}
		exitAnimationComplete() {
			this.members.forEach((t) => {
				const { options: n, resumingFrom: r } = t;
				n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
			});
		}
		scheduleRender() {
			this.members.forEach((t) => {
				t.instance && t.scheduleRender(!1);
			});
		}
		removeLeadSnapshot() {
			this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
		}
	}
	function hg(e, t, n) {
		let r = '';
		const i = e.x.translate / t.x,
			s = e.y.translate / t.y;
		if (((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
			const { rotate: l, rotateX: c, rotateY: u } = n;
			l && (r += `rotate(${l}deg) `), c && (r += `rotateX(${c}deg) `), u && (r += `rotateY(${u}deg) `);
		}
		const o = e.x.scale * t.x,
			a = e.y.scale * t.y;
		return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || 'none';
	}
	const Sk = (e, t) => e.depth - t.depth;
	class Ek {
		constructor() {
			(this.children = []), (this.isDirty = !1);
		}
		add(t) {
			Vu(this.children, t), (this.isDirty = !0);
		}
		remove(t) {
			zu(this.children, t), (this.isDirty = !0);
		}
		forEach(t) {
			this.isDirty && this.children.sort(Sk), (this.isDirty = !1), this.children.forEach(t);
		}
	}
	function Ck(e, t) {
		const n = performance.now(),
			r = ({ timestamp: i }) => {
				const s = i - n;
				s >= t && (Gt(r), e(s - t));
			};
		return ae.read(r, !0), () => Gt(r);
	}
	function Pk(e) {
		window.MotionDebug && window.MotionDebug.record(e);
	}
	function Tk(e) {
		return e instanceof SVGElement && e.tagName !== 'svg';
	}
	function Lk(e, t, n) {
		const r = Ze(e) ? e : Kn(e);
		return r.start(Fu('', r, t, n)), r.animation;
	}
	const mg = ['', 'X', 'Y', 'Z'],
		gg = 1e3;
	let Ok = 0;
	const Qn = { type: 'projectionFrame', totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
	function yg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
		return class {
			constructor(o = {}, a = t == null ? void 0 : t()) {
				(this.id = Ok++),
					(this.animationId = 0),
					(this.children = new Set()),
					(this.options = {}),
					(this.isTreeAnimating = !1),
					(this.isAnimationBlocked = !1),
					(this.isLayoutDirty = !1),
					(this.isProjectionDirty = !1),
					(this.isSharedProjectionDirty = !1),
					(this.isTransformDirty = !1),
					(this.updateManuallyBlocked = !1),
					(this.updateBlockedByResize = !1),
					(this.isUpdating = !1),
					(this.isSVG = !1),
					(this.needsReset = !1),
					(this.shouldResetTransform = !1),
					(this.treeScale = { x: 1, y: 1 }),
					(this.eventHandlers = new Map()),
					(this.hasTreeAnimated = !1),
					(this.updateScheduled = !1),
					(this.checkUpdateFailed = () => {
						this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
					}),
					(this.updateProjection = () => {
						(Qn.totalNodes = Qn.resolvedTargetDeltas = Qn.recalculatedProjection = 0), this.nodes.forEach(Rk), this.nodes.forEach(Nk), this.nodes.forEach(Ik), this.nodes.forEach(bk), Pk(Qn);
					}),
					(this.hasProjected = !1),
					(this.isVisible = !0),
					(this.animationProgress = 0),
					(this.sharedNodes = new Map()),
					(this.latestValues = o),
					(this.root = a ? a.root || a : this),
					(this.path = a ? [...a.path, a] : []),
					(this.parent = a),
					(this.depth = a ? a.depth + 1 : 0);
				for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
				this.root === this && (this.nodes = new Ek());
			}
			addEventListener(o, a) {
				return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Bu()), this.eventHandlers.get(o).add(a);
			}
			notifyListeners(o, ...a) {
				const l = this.eventHandlers.get(o);
				l && l.notify(...a);
			}
			hasListeners(o) {
				return this.eventHandlers.has(o);
			}
			mount(o, a = this.root.hasTreeAnimated) {
				if (this.instance) return;
				(this.isSVG = Tk(o)), (this.instance = o);
				const { layoutId: l, layout: c, visualElement: u } = this.options;
				if ((u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e)) {
					let f;
					const d = () => (this.root.updateBlockedByResize = !1);
					e(o, () => {
						(this.root.updateBlockedByResize = !0), f && f(), (f = Ck(d, 250)), Ao.hasAnimatedSinceResize && ((Ao.hasAnimatedSinceResize = !1), this.nodes.forEach(xg));
					});
				}
				l && this.root.registerSharedNode(l, this),
					this.options.animate !== !1 &&
						u &&
						(l || c) &&
						this.addEventListener('didUpdate', ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: m, layout: w }) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const T = this.options.transition || u.getDefaultTransition() || $k,
								{ onLayoutAnimationStart: j, onLayoutAnimationComplete: v } = u.getProps(),
								p = !this.targetLayout || !dg(this.targetLayout, w) || m,
								h = !d && m;
							if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || h || (d && (p || !this.currentAnimation))) {
								this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(f, h);
								const P = { ...Tm(T, 'layout'), onPlay: j, onComplete: v };
								(u.shouldReduceMotion || this.options.layoutRoot) && ((P.delay = 0), (P.type = !1)), this.startAnimation(P);
							} else d || xg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
							this.targetLayout = w;
						});
			}
			unmount() {
				this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
				const o = this.getStack();
				o && o.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), Gt(this.updateProjection);
			}
			blockUpdate() {
				this.updateManuallyBlocked = !0;
			}
			unblockUpdate() {
				this.updateManuallyBlocked = !1;
			}
			isUpdateBlocked() {
				return this.updateManuallyBlocked || this.updateBlockedByResize;
			}
			isTreeAnimationBlocked() {
				return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
			}
			startUpdate() {
				this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Fk), this.animationId++);
			}
			getTransformTemplate() {
				const { visualElement: o } = this.options;
				return o && o.getProps().transformTemplate;
			}
			willUpdate(o = !0) {
				if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
					this.options.onExitComplete && this.options.onExitComplete();
					return;
				}
				if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
				this.isLayoutDirty = !0;
				for (let u = 0; u < this.path.length; u++) {
					const f = this.path[u];
					(f.shouldResetTransform = !0), f.updateScroll('snapshot'), f.options.layoutRoot && f.willUpdate(!1);
				}
				const { layoutId: a, layout: l } = this.options;
				if (a === void 0 && !l) return;
				const c = this.getTransformTemplate();
				(this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0), this.updateSnapshot(), o && this.notifyListeners('willUpdate');
			}
			update() {
				if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
					this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vg);
					return;
				}
				this.isUpdating || this.nodes.forEach(Ak), (this.isUpdating = !1), this.nodes.forEach(Mk), this.nodes.forEach(jk), this.nodes.forEach(_k), this.clearAllSnapshots();
				const a = performance.now();
				(Re.delta = wn(0, 1e3 / 60, a - Re.timestamp)), (Re.timestamp = a), (Re.isProcessing = !0), wu.update.process(Re), wu.preRender.process(Re), wu.render.process(Re), (Re.isProcessing = !1);
			}
			didUpdate() {
				this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
			}
			clearAllSnapshots() {
				this.nodes.forEach(Dk), this.sharedNodes.forEach(Vk);
			}
			scheduleUpdateProjection() {
				ae.preRender(this.updateProjection, !1, !0);
			}
			scheduleCheckAfterUnmount() {
				ae.postRender(() => {
					this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
				});
			}
			updateSnapshot() {
				this.snapshot || !this.instance || (this.snapshot = this.measure());
			}
			updateLayout() {
				if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
				if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
				const o = this.layout;
				(this.layout = this.measure(!1)), (this.layoutCorrected = Pe()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners('measure', this.layout.layoutBox);
				const { visualElement: a } = this.options;
				a && a.notify('LayoutMeasure', this.layout.layoutBox, o ? o.layoutBox : void 0);
			}
			updateScroll(o = 'measure') {
				let a = !!(this.options.layoutScroll && this.instance);
				this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
					a && (this.scroll = { animationId: this.root.animationId, phase: o, isRoot: r(this.instance), offset: n(this.instance) });
			}
			resetTransform() {
				if (!i) return;
				const o = this.isLayoutDirty || this.shouldResetTransform,
					a = this.projectionDelta && !fg(this.projectionDelta),
					l = this.getTransformTemplate(),
					c = l ? l(this.latestValues, '') : void 0,
					u = c !== this.prevTransformTemplateValue;
				o && (a || Xn(this.latestValues) || u) && (i(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
			}
			measure(o = !0) {
				const a = this.measurePageBox();
				let l = this.removeElementScroll(a);
				return o && (l = this.removeTransform(l)), Wk(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
			}
			measurePageBox() {
				const { visualElement: o } = this.options;
				if (!o) return Pe();
				const a = o.measureViewportBox(),
					{ scroll: l } = this.root;
				return l && (Tn(a.x, l.offset.x), Tn(a.y, l.offset.y)), a;
			}
			removeElementScroll(o) {
				const a = Pe();
				pt(a, o);
				for (let l = 0; l < this.path.length; l++) {
					const c = this.path[l],
						{ scroll: u, options: f } = c;
					if (c !== this.root && u && f.layoutScroll) {
						if (u.isRoot) {
							pt(a, o);
							const { scroll: d } = this.root;
							d && (Tn(a.x, -d.offset.x), Tn(a.y, -d.offset.y));
						}
						Tn(a.x, u.offset.x), Tn(a.y, u.offset.y);
					}
				}
				return a;
			}
			applyTransform(o, a = !1) {
				const l = Pe();
				pt(l, o);
				for (let c = 0; c < this.path.length; c++) {
					const u = this.path[c];
					!a && u.options.layoutScroll && u.scroll && u !== u.root && Mr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }), Xn(u.latestValues) && Mr(l, u.latestValues);
				}
				return Xn(this.latestValues) && Mr(l, this.latestValues), l;
			}
			removeTransform(o) {
				const a = Pe();
				pt(a, o);
				for (let l = 0; l < this.path.length; l++) {
					const c = this.path[l];
					if (!c.instance || !Xn(c.latestValues)) continue;
					Yu(c.latestValues) && c.updateSnapshot();
					const u = Pe(),
						f = c.measurePageBox();
					pt(u, f), ug(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
				}
				return Xn(this.latestValues) && ug(a, this.latestValues), a;
			}
			setTargetDelta(o) {
				(this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
			}
			setOptions(o) {
				this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : !0 };
			}
			clearMeasurements() {
				(this.scroll = void 0),
					(this.layout = void 0),
					(this.snapshot = void 0),
					(this.prevTransformTemplateValue = void 0),
					(this.targetDelta = void 0),
					(this.target = void 0),
					(this.isLayoutDirty = !1);
			}
			forceRelativeParentToResolveTarget() {
				this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp && this.relativeParent.resolveTargetDelta(!0);
			}
			resolveTargetDelta(o = !1) {
				var a;
				const l = this.getLead();
				this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
					this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
					this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
				const c = !!this.resumingFrom || this !== l;
				if (!(o || (c && this.isSharedProjectionDirty) || this.isProjectionDirty || (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) || this.attemptToResolveRelativeTarget))
					return;
				const { layout: f, layoutId: d } = this.options;
				if (!(!this.layout || !(f || d))) {
					if (((this.resolvedRelativeTargetAt = Re.timestamp), !this.targetDelta && !this.relativeTarget)) {
						const m = this.getClosestProjectingParent();
						m && m.layout && this.animationProgress !== 1
							? ((this.relativeParent = m),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = Pe()),
							  (this.relativeTargetOrigin = Pe()),
							  Hi(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
							  pt(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					if (!(!this.relativeTarget && !this.targetDelta)) {
						if (
							(this.target || ((this.target = Pe()), (this.targetWithTransforms = Pe())),
							this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
								? (this.forceRelativeParentToResolveTarget(), Hw(this.target, this.relativeTarget, this.relativeParent.target))
								: this.targetDelta
								? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : pt(this.target, this.layout.layoutBox), Ym(this.target, this.targetDelta))
								: pt(this.target, this.layout.layoutBox),
							this.attemptToResolveRelativeTarget)
						) {
							this.attemptToResolveRelativeTarget = !1;
							const m = this.getClosestProjectingParent();
							m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1
								? ((this.relativeParent = m),
								  this.forceRelativeParentToResolveTarget(),
								  (this.relativeTarget = Pe()),
								  (this.relativeTargetOrigin = Pe()),
								  Hi(this.relativeTargetOrigin, this.target, m.target),
								  pt(this.relativeTarget, this.relativeTargetOrigin))
								: (this.relativeParent = this.relativeTarget = void 0);
						}
						Qn.resolvedTargetDeltas++;
					}
				}
			}
			getClosestProjectingParent() {
				if (!(!this.parent || Yu(this.parent.latestValues) || Hm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
			}
			isProjecting() {
				return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
			}
			calcProjection() {
				var o;
				const a = this.getLead(),
					l = !!this.resumingFrom || this !== a;
				let c = !0;
				if (
					((this.isProjectionDirty || (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) && (c = !1),
					l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
					this.resolvedRelativeTargetAt === Re.timestamp && (c = !1),
					c)
				)
					return;
				const { layout: u, layoutId: f } = this.options;
				if (
					((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
					this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
					!this.layout || !(u || f))
				)
					return;
				pt(this.layoutCorrected, this.layout.layoutBox);
				const d = this.treeScale.x,
					m = this.treeScale.y;
				ek(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
				const { target: w } = a;
				if (!w) {
					this.projectionTransform && ((this.projectionDelta = Ar()), (this.projectionTransform = 'none'), this.scheduleRender());
					return;
				}
				this.projectionDelta || ((this.projectionDelta = Ar()), (this.projectionDeltaWithTransform = Ar()));
				const T = this.projectionTransform;
				Ui(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
					(this.projectionTransform = hg(this.projectionDelta, this.treeScale)),
					(this.projectionTransform !== T || this.treeScale.x !== d || this.treeScale.y !== m) && ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', w)),
					Qn.recalculatedProjection++;
			}
			hide() {
				this.isVisible = !1;
			}
			show() {
				this.isVisible = !0;
			}
			scheduleRender(o = !0) {
				if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
					const a = this.getStack();
					a && a.scheduleRender();
				}
				this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
			}
			setAnimationOrigin(o, a = !1) {
				const l = this.snapshot,
					c = l ? l.latestValues : {},
					u = { ...this.latestValues },
					f = Ar();
				(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !a);
				const d = Pe(),
					m = l ? l.source : void 0,
					w = this.layout ? this.layout.source : void 0,
					T = m !== w,
					j = this.getStack(),
					v = !j || j.members.length <= 1,
					p = !!(T && !v && this.options.crossfade === !0 && !this.path.some(Bk));
				this.animationProgress = 0;
				let h;
				(this.mixTargetDelta = (P) => {
					const R = P / 1e3;
					wg(f.x, o.x, R),
						wg(f.y, o.y, R),
						this.setTargetDelta(f),
						this.relativeTarget &&
							this.relativeTargetOrigin &&
							this.layout &&
							this.relativeParent &&
							this.relativeParent.layout &&
							(Hi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
							zk(this.relativeTarget, this.relativeTargetOrigin, d, R),
							h && wk(this.relativeTarget, h) && (this.isProjectionDirty = !1),
							h || (h = Pe()),
							pt(h, this.relativeTarget)),
						T && ((this.animationValues = u), hk(u, c, this.latestValues, R, p, v)),
						this.root.scheduleUpdateProjection(),
						this.scheduleRender(),
						(this.animationProgress = R);
				}),
					this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
			}
			startAnimation(o) {
				this.notifyListeners('animationStart'),
					this.currentAnimation && this.currentAnimation.stop(),
					this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
					this.pendingAnimation && (Gt(this.pendingAnimation), (this.pendingAnimation = void 0)),
					(this.pendingAnimation = ae.update(() => {
						(Ao.hasAnimatedSinceResize = !0),
							(this.currentAnimation = Lk(0, gg, {
								...o,
								onUpdate: (a) => {
									this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
								},
								onComplete: () => {
									o.onComplete && o.onComplete(), this.completeAnimation();
								},
							})),
							this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
							(this.pendingAnimation = void 0);
					}));
			}
			completeAnimation() {
				this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
				const o = this.getStack();
				o && o.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners('animationComplete');
			}
			finishAnimation() {
				this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gg), this.currentAnimation.stop()), this.completeAnimation();
			}
			applyTransformsToTarget() {
				const o = this.getLead();
				let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = o;
				if (!(!a || !l || !c)) {
					if (this !== o && this.layout && c && Pg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
						l = this.target || Pe();
						const f = ot(this.layout.layoutBox.x);
						(l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
						const d = ot(this.layout.layoutBox.y);
						(l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
					}
					pt(a, l), Mr(a, u), Ui(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
				}
			}
			registerSharedNode(o, a) {
				this.sharedNodes.has(o) || this.sharedNodes.set(o, new kk()), this.sharedNodes.get(o).add(a);
				const c = a.options.initialPromotionConfig;
				a.promote({ transition: c ? c.transition : void 0, preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0 });
			}
			isLead() {
				const o = this.getStack();
				return o ? o.lead === this : !0;
			}
			getLead() {
				var o;
				const { layoutId: a } = this.options;
				return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
			}
			getPrevLead() {
				var o;
				const { layoutId: a } = this.options;
				return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead) : void 0;
			}
			getStack() {
				const { layoutId: o } = this.options;
				if (o) return this.root.sharedNodes.get(o);
			}
			promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
				const c = this.getStack();
				c && c.promote(this, l), o && ((this.projectionDelta = void 0), (this.needsReset = !0)), a && this.setOptions({ transition: a });
			}
			relegate() {
				const o = this.getStack();
				return o ? o.relegate(this) : !1;
			}
			resetRotation() {
				const { visualElement: o } = this.options;
				if (!o) return;
				let a = !1;
				const { latestValues: l } = o;
				if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)) return;
				const c = {};
				for (let u = 0; u < mg.length; u++) {
					const f = 'rotate' + mg[u];
					l[f] && ((c[f] = l[f]), o.setStaticValue(f, 0));
				}
				o.render();
				for (const u in c) o.setStaticValue(u, c[u]);
				o.scheduleRender();
			}
			getProjectionStyles(o = {}) {
				var a, l;
				const c = {};
				if (!this.instance || this.isSVG) return c;
				if (this.isVisible) c.visibility = '';
				else return { visibility: 'hidden' };
				const u = this.getTransformTemplate();
				if (this.needsReset) return (this.needsReset = !1), (c.opacity = ''), (c.pointerEvents = Eo(o.pointerEvents) || ''), (c.transform = u ? u(this.latestValues, '') : 'none'), c;
				const f = this.getLead();
				if (!this.projectionDelta || !this.layout || !f.target) {
					const T = {};
					return (
						this.options.layoutId && ((T.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1), (T.pointerEvents = Eo(o.pointerEvents) || '')),
						this.hasProjected && !Xn(this.latestValues) && ((T.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
						T
					);
				}
				const d = f.animationValues || f.latestValues;
				this.applyTransformsToTarget(), (c.transform = hg(this.projectionDeltaWithTransform, this.treeScale, d)), u && (c.transform = u(d, c.transform));
				const { x: m, y: w } = this.projectionDelta;
				(c.transformOrigin = `${m.origin * 100}% ${w.origin * 100}% 0`),
					f.animationValues
						? (c.opacity =
								f === this
									? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0
										? l
										: 1
									: this.preserveOpacity
									? this.latestValues.opacity
									: d.opacityExit)
						: (c.opacity = f === this ? (d.opacity !== void 0 ? d.opacity : '') : d.opacityExit !== void 0 ? d.opacityExit : 0);
				for (const T in yo) {
					if (d[T] === void 0) continue;
					const { correct: j, applyTo: v } = yo[T],
						p = c.transform === 'none' ? d[T] : j(d[T], f);
					if (v) {
						const h = v.length;
						for (let P = 0; P < h; P++) c[v[P]] = p;
					} else c[T] = p;
				}
				return this.options.layoutId && (c.pointerEvents = f === this ? Eo(o.pointerEvents) || '' : 'none'), c;
			}
			clearSnapshot() {
				this.resumeFrom = this.snapshot = void 0;
			}
			resetTree() {
				this.root.nodes.forEach((o) => {
					var a;
					return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
				}),
					this.root.nodes.forEach(vg),
					this.root.sharedNodes.clear();
			}
		};
	}
	function jk(e) {
		e.updateLayout();
	}
	function _k(e) {
		var t;
		const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
		if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
			const { layoutBox: r, measuredBox: i } = e.layout,
				{ animationType: s } = e.options,
				o = n.source !== e.layout.source;
			s === 'size'
				? Dt((f) => {
						const d = o ? n.measuredBox[f] : n.layoutBox[f],
							m = ot(d);
						(d.min = r[f].min), (d.max = d.min + m);
				  })
				: Pg(s, n.layoutBox, r) &&
				  Dt((f) => {
						const d = o ? n.measuredBox[f] : n.layoutBox[f],
							m = ot(r[f]);
						(d.max = d.min + m), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
				  });
			const a = Ar();
			Ui(a, r, n.layoutBox);
			const l = Ar();
			o ? Ui(l, e.applyTransform(i, !0), n.measuredBox) : Ui(l, r, n.layoutBox);
			const c = !fg(a);
			let u = !1;
			if (!e.resumeFrom) {
				const f = e.getClosestProjectingParent();
				if (f && !f.resumeFrom) {
					const { snapshot: d, layout: m } = f;
					if (d && m) {
						const w = Pe();
						Hi(w, n.layoutBox, d.layoutBox);
						const T = Pe();
						Hi(T, r, m.layoutBox), dg(w, T) || (u = !0), f.options.layoutRoot && ((e.relativeTarget = T), (e.relativeTargetOrigin = w), (e.relativeParent = f));
					}
				}
			}
			e.notifyListeners('didUpdate', { layout: r, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: c, hasRelativeTargetChanged: u });
		} else if (e.isLead()) {
			const { onExitComplete: r } = e.options;
			r && r();
		}
		e.options.transition = void 0;
	}
	function Rk(e) {
		Qn.totalNodes++,
			e.parent &&
				(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
				e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
				e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
	}
	function bk(e) {
		e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
	}
	function Dk(e) {
		e.clearSnapshot();
	}
	function vg(e) {
		e.clearMeasurements();
	}
	function Ak(e) {
		e.isLayoutDirty = !1;
	}
	function Mk(e) {
		const { visualElement: t } = e.options;
		t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
	}
	function xg(e) {
		e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
	}
	function Nk(e) {
		e.resolveTargetDelta();
	}
	function Ik(e) {
		e.calcProjection();
	}
	function Fk(e) {
		e.resetRotation();
	}
	function Vk(e) {
		e.removeLeadSnapshot();
	}
	function wg(e, t, n) {
		(e.translate = ye(t.translate, 0, n)), (e.scale = ye(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
	}
	function kg(e, t, n, r) {
		(e.min = ye(t.min, n.min, r)), (e.max = ye(t.max, n.max, r));
	}
	function zk(e, t, n, r) {
		kg(e.x, t.x, n.x, r), kg(e.y, t.y, n.y, r);
	}
	function Bk(e) {
		return e.animationValues && e.animationValues.opacityExit !== void 0;
	}
	const $k = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
		Sg = (e) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(e),
		Eg = Sg('applewebkit/') && !Sg('chrome/') ? Math.round : we;
	function Cg(e) {
		(e.min = Eg(e.min)), (e.max = Eg(e.max));
	}
	function Wk(e) {
		Cg(e.x), Cg(e.y);
	}
	function Pg(e, t, n) {
		return e === 'position' || (e === 'preserve-aspect' && !Hu(pg(t), pg(n), 0.2));
	}
	const Uk = yg({
			attachResizeListener: (e, t) => Kt(e, 'resize', t),
			measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
			checkIsScrollRoot: () => !0,
		}),
		Qu = { current: void 0 },
		Tg = yg({
			measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
			defaultParent: () => {
				if (!Qu.current) {
					const e = new Uk({});
					e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qu.current = e);
				}
				return Qu.current;
			},
			resetTransform: (e, t) => {
				e.style.transform = t !== void 0 ? t : 'none';
			},
			checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
		}),
		Hk = { pan: { Feature: lk }, drag: { Feature: ak, ProjectionNode: Tg, MeasureLayout: eg } },
		Gk = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
	function Kk(e) {
		const t = Gk.exec(e);
		if (!t) return [,];
		const [, n, r] = t;
		return [n, r];
	}
	function qu(e, t, n = 1) {
		const [r, i] = Kk(e);
		if (!r) return;
		const s = window.getComputedStyle(t).getPropertyValue(r);
		if (s) {
			const o = s.trim();
			return Lm(o) ? parseFloat(o) : o;
		} else return du(i) ? qu(i, t, n + 1) : i;
	}
	function Yk(e, { ...t }, n) {
		const r = e.current;
		if (!(r instanceof Element)) return { target: t, transitionEnd: n };
		n && (n = { ...n }),
			e.values.forEach((i) => {
				const s = i.get();
				if (!du(s)) return;
				const o = qu(s, r);
				o && i.set(o);
			});
		for (const i in t) {
			const s = t[i];
			if (!du(s)) continue;
			const o = qu(s, r);
			o && ((t[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
		}
		return { target: t, transitionEnd: n };
	}
	const Xk = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y', 'translateX', 'translateY']),
		Lg = (e) => Xk.has(e),
		Qk = (e) => Object.keys(e).some(Lg),
		Og = (e) => e === Hn || e === Y,
		jg = (e, t) => parseFloat(e.split(', ')[t]),
		_g =
			(e, t) =>
			(n, { transform: r }) => {
				if (r === 'none' || !r) return 0;
				const i = r.match(/^matrix3d\((.+)\)$/);
				if (i) return jg(i[1], t);
				{
					const s = r.match(/^matrix\((.+)\)$/);
					return s ? jg(s[1], e) : 0;
				}
			},
		qk = new Set(['x', 'y', 'z']),
		Zk = Mi.filter((e) => !qk.has(e));
	function Jk(e) {
		const t = [];
		return (
			Zk.forEach((n) => {
				const r = e.getValue(n);
				r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
			}),
			t.length && e.render(),
			t
		);
	}
	const Nr = {
		width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
		height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
		top: (e, { top: t }) => parseFloat(t),
		left: (e, { left: t }) => parseFloat(t),
		bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
		right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
		x: _g(4, 13),
		y: _g(5, 14),
	};
	(Nr.translateX = Nr.x), (Nr.translateY = Nr.y);
	const eS = (e, t, n) => {
			const r = t.measureViewportBox(),
				i = t.current,
				s = getComputedStyle(i),
				{ display: o } = s,
				a = {};
			o === 'none' && t.setStaticValue('display', e.display || 'block'),
				n.forEach((c) => {
					a[c] = Nr[c](r, s);
				}),
				t.render();
			const l = t.measureViewportBox();
			return (
				n.forEach((c) => {
					const u = t.getValue(c);
					u && u.jump(a[c]), (e[c] = Nr[c](l, s));
				}),
				e
			);
		},
		tS = (e, t, n = {}, r = {}) => {
			(t = { ...t }), (r = { ...r });
			const i = Object.keys(t).filter(Lg);
			let s = [],
				o = !1;
			const a = [];
			if (
				(i.forEach((l) => {
					const c = e.getValue(l);
					if (!e.hasValue(l)) return;
					let u = n[l],
						f = Wi(u);
					const d = t[l];
					let m;
					if (So(d)) {
						const w = d.length,
							T = d[0] === null ? 1 : 0;
						(u = d[T]), (f = Wi(u));
						for (let j = T; j < w && d[j] !== null; j++) m ? Cu(Wi(d[j]) === m) : (m = Wi(d[j]));
					} else m = Wi(d);
					if (f !== m)
						if (Og(f) && Og(m)) {
							const w = c.get();
							typeof w == 'string' && c.set(parseFloat(w)), typeof d == 'string' ? (t[l] = parseFloat(d)) : Array.isArray(d) && m === Y && (t[l] = d.map(parseFloat));
						} else
							f != null && f.transform && m != null && m.transform && (u === 0 || d === 0)
								? u === 0
									? c.set(m.transform(u))
									: (t[l] = f.transform(d))
								: (o || ((s = Jk(e)), (o = !0)), a.push(l), (r[l] = r[l] !== void 0 ? r[l] : t[l]), c.jump(d));
				}),
				a.length)
			) {
				const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
					c = eS(t, e, a);
				return (
					s.length &&
						s.forEach(([u, f]) => {
							e.getValue(u).set(f);
						}),
					e.render(),
					ho && l !== null && window.scrollTo({ top: l }),
					{ target: c, transitionEnd: r }
				);
			} else return { target: t, transitionEnd: r };
		};
	function nS(e, t, n, r) {
		return Qk(t) ? tS(e, t, n, r) : { target: t, transitionEnd: r };
	}
	const rS = (e, t, n, r) => {
			const i = Yk(e, t, r);
			return (t = i.target), (r = i.transitionEnd), nS(e, t, n, r);
		},
		Zu = { current: null },
		Rg = { current: !1 };
	function iS() {
		if (((Rg.current = !0), !!ho))
			if (window.matchMedia) {
				const e = window.matchMedia('(prefers-reduced-motion)'),
					t = () => (Zu.current = e.matches);
				e.addListener(t), t();
			} else Zu.current = !1;
	}
	function sS(e, t, n) {
		const { willChange: r } = t;
		for (const i in t) {
			const s = t[i],
				o = n[i];
			if (Ze(s)) e.addValue(i, s), Ro(r) && r.add(i);
			else if (Ze(o)) e.addValue(i, Kn(s, { owner: e })), Ro(r) && r.remove(i);
			else if (o !== s)
				if (e.hasValue(i)) {
					const a = e.getValue(i);
					!a.hasAnimated && a.set(s);
				} else {
					const a = e.getStaticValue(i);
					e.addValue(i, Kn(a !== void 0 ? a : s, { owner: e }));
				}
		}
		for (const i in n) t[i] === void 0 && e.removeValue(i);
		return t;
	}
	const bg = new WeakMap(),
		Dg = Object.keys(Ai),
		oS = Dg.length,
		Ag = ['AnimationStart', 'AnimationComplete', 'Update', 'BeforeLayoutMeasure', 'LayoutMeasure', 'LayoutAnimationStart', 'LayoutAnimationComplete'],
		aS = uu.length;
	class lS {
		constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s }, o = {}) {
			(this.current = null),
				(this.children = new Set()),
				(this.isVariantNode = !1),
				(this.isControllingVariants = !1),
				(this.shouldReduceMotion = null),
				(this.values = new Map()),
				(this.features = {}),
				(this.valueSubscriptions = new Map()),
				(this.prevMotionValues = {}),
				(this.events = {}),
				(this.propEventSubscriptions = {}),
				(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
				(this.render = () => {
					this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
				}),
				(this.scheduleRender = () => ae.render(this.render, !1, !0));
			const { latestValues: a, renderState: l } = s;
			(this.latestValues = a),
				(this.baseTarget = { ...a }),
				(this.initialValues = n.initial ? { ...a } : {}),
				(this.renderState = l),
				(this.parent = t),
				(this.props = n),
				(this.presenceContext = r),
				(this.depth = t ? t.depth + 1 : 0),
				(this.reducedMotionConfig = i),
				(this.options = o),
				(this.isControllingVariants = go(n)),
				(this.isVariantNode = mh(n)),
				this.isVariantNode && (this.variantChildren = new Set()),
				(this.manuallyAnimateOnMount = !!(t && t.current));
			const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
			for (const f in u) {
				const d = u[f];
				a[f] !== void 0 && Ze(d) && (d.set(a[f], !1), Ro(c) && c.add(f));
			}
		}
		scrapeMotionValuesFromProps(t, n) {
			return {};
		}
		mount(t) {
			(this.current = t),
				bg.set(t, this),
				this.projection && !this.projection.instance && this.projection.mount(t),
				this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
				this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
				Rg.current || iS(),
				(this.shouldReduceMotion = this.reducedMotionConfig === 'never' ? !1 : this.reducedMotionConfig === 'always' ? !0 : Zu.current),
				this.parent && this.parent.children.add(this),
				this.update(this.props, this.presenceContext);
		}
		unmount() {
			bg.delete(this.current),
				this.projection && this.projection.unmount(),
				Gt(this.notifyUpdate),
				Gt(this.render),
				this.valueSubscriptions.forEach((t) => t()),
				this.removeFromVariantTree && this.removeFromVariantTree(),
				this.parent && this.parent.children.delete(this);
			for (const t in this.events) this.events[t].clear();
			for (const t in this.features) this.features[t].unmount();
			this.current = null;
		}
		bindToMotionValue(t, n) {
			const r = Un.has(t),
				i = n.on('change', (o) => {
					(this.latestValues[t] = o), this.props.onUpdate && ae.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
				}),
				s = n.on('renderRequest', this.scheduleRender);
			this.valueSubscriptions.set(t, () => {
				i(), s();
			});
		}
		sortNodePosition(t) {
			return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
		}
		loadFeatures({ children: t, ...n }, r, i, s) {
			let o, a;
			for (let l = 0; l < oS; l++) {
				const c = Dg[l],
					{ isEnabled: u, Feature: f, ProjectionNode: d, MeasureLayout: m } = Ai[c];
				d && (o = d), u(n) && (!this.features[c] && f && (this.features[c] = new f(this)), m && (a = m));
			}
			if (!this.projection && o) {
				this.projection = new o(this.latestValues, this.parent && this.parent.projection);
				const { layoutId: l, layout: c, drag: u, dragConstraints: f, layoutScroll: d, layoutRoot: m } = n;
				this.projection.setOptions({
					layoutId: l,
					layout: c,
					alwaysMeasureLayout: !!u || (f && br(f)),
					visualElement: this,
					scheduleRender: () => this.scheduleRender(),
					animationType: typeof c == 'string' ? c : 'both',
					initialPromotionConfig: s,
					layoutScroll: d,
					layoutRoot: m,
				});
			}
			return a;
		}
		updateFeatures() {
			for (const t in this.features) {
				const n = this.features[t];
				n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
			}
		}
		triggerBuild() {
			this.build(this.renderState, this.latestValues, this.options, this.props);
		}
		measureViewportBox() {
			return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Pe();
		}
		getStaticValue(t) {
			return this.latestValues[t];
		}
		setStaticValue(t, n) {
			this.latestValues[t] = n;
		}
		makeTargetAnimatable(t, n = !0) {
			return this.makeTargetAnimatableFromInstance(t, this.props, n);
		}
		update(t, n) {
			(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
				(this.prevProps = this.props),
				(this.props = t),
				(this.prevPresenceContext = this.presenceContext),
				(this.presenceContext = n);
			for (let r = 0; r < Ag.length; r++) {
				const i = Ag[r];
				this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
				const s = t['on' + i];
				s && (this.propEventSubscriptions[i] = this.on(i, s));
			}
			(this.prevMotionValues = sS(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue();
		}
		getProps() {
			return this.props;
		}
		getVariant(t) {
			return this.props.variants ? this.props.variants[t] : void 0;
		}
		getDefaultTransition() {
			return this.props.transition;
		}
		getTransformPagePoint() {
			return this.props.transformPagePoint;
		}
		getClosestVariantNode() {
			return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
		}
		getVariantContext(t = !1) {
			if (t) return this.parent ? this.parent.getVariantContext() : void 0;
			if (!this.isControllingVariants) {
				const r = this.parent ? this.parent.getVariantContext() || {} : {};
				return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
			}
			const n = {};
			for (let r = 0; r < aS; r++) {
				const i = uu[r],
					s = this.props[i];
				(Di(s) || s === !1) && (n[i] = s);
			}
			return n;
		}
		addVariantChild(t) {
			const n = this.getClosestVariantNode();
			if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
		}
		addValue(t, n) {
			n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), (this.latestValues[t] = n.get());
		}
		removeValue(t) {
			this.values.delete(t);
			const n = this.valueSubscriptions.get(t);
			n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
		}
		hasValue(t) {
			return this.values.has(t);
		}
		getValue(t, n) {
			if (this.props.values && this.props.values[t]) return this.props.values[t];
			let r = this.values.get(t);
			return r === void 0 && n !== void 0 && ((r = Kn(n, { owner: this })), this.addValue(t, r)), r;
		}
		readValue(t) {
			var n;
			return this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0
				? n
				: this.readValueFromInstance(this.current, t, this.options);
		}
		setBaseTarget(t, n) {
			this.baseTarget[t] = n;
		}
		getBaseTarget(t) {
			var n;
			const { initial: r } = this.props,
				i = typeof r == 'string' || typeof r == 'object' ? ((n = xu(this.props, r)) === null || n === void 0 ? void 0 : n[t]) : void 0;
			if (r && i !== void 0) return i;
			const s = this.getBaseTargetFromProps(this.props, t);
			return s !== void 0 && !Ze(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
		}
		on(t, n) {
			return this.events[t] || (this.events[t] = new Bu()), this.events[t].add(n);
		}
		notify(t, ...n) {
			this.events[t] && this.events[t].notify(...n);
		}
	}
	class Mg extends lS {
		sortInstanceNodePosition(t, n) {
			return t.compareDocumentPosition(n) & 2 ? 1 : -1;
		}
		getBaseTargetFromProps(t, n) {
			return t.style ? t.style[n] : void 0;
		}
		removeValueFromRenderState(t, { vars: n, style: r }) {
			delete n[t], delete r[t];
		}
		makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, s) {
			let o = Lw(r, t || {}, this);
			if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
				Pw(this, r, o);
				const a = rS(this, r, o, n);
				(n = a.transitionEnd), (r = a.target);
			}
			return { transition: t, transitionEnd: n, ...r };
		}
	}
	function uS(e) {
		return window.getComputedStyle(e);
	}
	class cS extends Mg {
		readValueFromInstance(t, n) {
			if (Un.has(n)) {
				const r = Iu(n);
				return (r && r.default) || 0;
			} else {
				const r = uS(t),
					i = (kh(n) ? r.getPropertyValue(n) : r[n]) || 0;
				return typeof i == 'string' ? i.trim() : i;
			}
		}
		measureInstanceViewportBox(t, { transformPagePoint: n }) {
			return qm(t, n);
		}
		build(t, n, r, i) {
			pu(t, n, r, i.transformTemplate);
		}
		scrapeMotionValuesFromProps(t, n) {
			return vu(t, n);
		}
		handleChildMotionValue() {
			this.childSubscription && (this.childSubscription(), delete this.childSubscription);
			const { children: t } = this.props;
			Ze(t) &&
				(this.childSubscription = t.on('change', (n) => {
					this.current && (this.current.textContent = `${n}`);
				}));
		}
		renderInstance(t, n, r, i) {
			_h(t, n, r, i);
		}
	}
	class fS extends Mg {
		constructor() {
			super(...arguments), (this.isSVGTag = !1);
		}
		getBaseTargetFromProps(t, n) {
			return t[n];
		}
		readValueFromInstance(t, n) {
			if (Un.has(n)) {
				const r = Iu(n);
				return (r && r.default) || 0;
			}
			return (n = Rh.has(n) ? n : yu(n)), t.getAttribute(n);
		}
		measureInstanceViewportBox() {
			return Pe();
		}
		scrapeMotionValuesFromProps(t, n) {
			return Dh(t, n);
		}
		build(t, n, r, i) {
			mu(t, n, r, this.isSVGTag, i.transformTemplate);
		}
		renderInstance(t, n, r, i) {
			bh(t, n, r, i);
		}
		mount(t) {
			(this.isSVGTag = gu(t.tagName)), super.mount(t);
		}
	}
	const dS = (e, t) => (fu(e) ? new fS(t, { enableHardwareAcceleration: !1 }) : new cS(t, { enableHardwareAcceleration: !0 })),
		pS = { ...Bw, ...cx, ...Hk, ...{ layout: { ProjectionNode: Tg, MeasureLayout: eg } } },
		Ne = x1((e, t) => q1(e, t, pS, dS));
	function Ng() {
		const e = C.useRef(!1);
		return (
			au(
				() => (
					(e.current = !0),
					() => {
						e.current = !1;
					}
				),
				[]
			),
			e
		);
	}
	function hS() {
		const e = Ng(),
			[t, n] = C.useState(0),
			r = C.useCallback(() => {
				e.current && n(t + 1);
			}, [t]);
		return [C.useCallback(() => ae.postRender(r), [r]), t];
	}
	class mS extends C.Component {
		getSnapshotBeforeUpdate(t) {
			const n = this.props.childRef.current;
			if (n && t.isPresent && !this.props.isPresent) {
				const r = this.props.sizeRef.current;
				(r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft);
			}
			return null;
		}
		componentDidUpdate() {}
		render() {
			return this.props.children;
		}
	}
	function gS({ children: e, isPresent: t }) {
		const n = C.useId(),
			r = C.useRef(null),
			i = C.useRef({ width: 0, height: 0, top: 0, left: 0 });
		return (
			C.useInsertionEffect(() => {
				const { width: s, height: o, top: a, left: l } = i.current;
				if (t || !r.current || !s || !o) return;
				r.current.dataset.motionPopId = n;
				const c = document.createElement('style');
				return (
					document.head.appendChild(c),
					c.sheet &&
						c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
					() => {
						document.head.removeChild(c);
					}
				);
			}, [t]),
			C.createElement(mS, { isPresent: t, childRef: r, sizeRef: i }, C.cloneElement(e, { ref: r }))
		);
	}
	const Ju = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
		const a = ko(yS),
			l = C.useId(),
			c = C.useMemo(
				() => ({
					id: l,
					initial: t,
					isPresent: n,
					custom: i,
					onExitComplete: (u) => {
						a.set(u, !0);
						for (const f of a.values()) if (!f) return;
						r && r();
					},
					register: (u) => (a.set(u, !1), () => a.delete(u)),
				}),
				s ? void 0 : [n]
			);
		return (
			C.useMemo(() => {
				a.forEach((u, f) => a.set(f, !1));
			}, [n]),
			C.useEffect(() => {
				!n && !a.size && r && r();
			}, [n]),
			o === 'popLayout' && (e = C.createElement(gS, { isPresent: n }, e)),
			C.createElement(po.Provider, { value: c }, e)
		);
	};
	function yS() {
		return new Map();
	}
	function vS(e) {
		return C.useEffect(() => () => e(), []);
	}
	const Ir = (e) => e.key || '';
	function xS(e, t) {
		e.forEach((n) => {
			const r = Ir(n);
			t.set(r, n);
		});
	}
	function wS(e) {
		const t = [];
		return (
			C.Children.forEach(e, (n) => {
				C.isValidElement(n) && t.push(n);
			}),
			t
		);
	}
	const qn = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s = !0, mode: o = 'sync' }) => {
		const a = C.useContext(cu).forceRender || hS()[0],
			l = Ng(),
			c = wS(e);
		let u = c;
		const f = C.useRef(new Map()).current,
			d = C.useRef(u),
			m = C.useRef(new Map()).current,
			w = C.useRef(!0);
		if (
			(au(() => {
				(w.current = !1), xS(c, m), (d.current = u);
			}),
			vS(() => {
				(w.current = !0), m.clear(), f.clear();
			}),
			w.current)
		)
			return C.createElement(
				C.Fragment,
				null,
				u.map((p) => C.createElement(Ju, { key: Ir(p), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: o }, p))
			);
		u = [...u];
		const T = d.current.map(Ir),
			j = c.map(Ir),
			v = T.length;
		for (let p = 0; p < v; p++) {
			const h = T[p];
			j.indexOf(h) === -1 && !f.has(h) && f.set(h, void 0);
		}
		return (
			o === 'wait' && f.size && (u = []),
			f.forEach((p, h) => {
				if (j.indexOf(h) !== -1) return;
				const P = m.get(h);
				if (!P) return;
				const R = T.indexOf(h);
				let L = p;
				if (!L) {
					const S = () => {
						m.delete(h), f.delete(h);
						const y = d.current.findIndex((x) => x.key === h);
						if ((d.current.splice(y, 1), !f.size)) {
							if (((d.current = c), l.current === !1)) return;
							a(), r && r();
						}
					};
					(L = C.createElement(Ju, { key: Ir(P), isPresent: !1, onExitComplete: S, custom: t, presenceAffectsLayout: s, mode: o }, P)), f.set(h, L);
				}
				u.splice(R, 0, L);
			}),
			(u = u.map((p) => {
				const h = p.key;
				return f.has(h) ? p : C.createElement(Ju, { key: Ir(p), isPresent: !0, presenceAffectsLayout: s, mode: o }, p);
			})),
			C.createElement(C.Fragment, null, f.size ? u : u.map((p) => C.cloneElement(p)))
		);
	};
	function Zn(e) {
		const t = ko(() => Kn(e)),
			{ isStatic: n } = C.useContext(ou);
		if (n) {
			const [, r] = C.useState(e);
			C.useEffect(() => t.on('change', r), []);
		}
		return t;
	}
	class kS {
		constructor() {
			this.componentControls = new Set();
		}
		subscribe(t) {
			return this.componentControls.add(t), () => this.componentControls.delete(t);
		}
		start(t, n) {
			this.componentControls.forEach((r) => {
				r.start(t.nativeEvent || t, n);
			});
		}
	}
	const SS = () => new kS();
	function ES() {
		return ko(SS);
	}
	var Ig = { exports: {} },
		CS = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
		PS = CS,
		TS = PS;
	function Fg() {}
	function Vg() {}
	Vg.resetWarningCache = Fg;
	var LS = function () {
		function e(r, i, s, o, a, l) {
			if (l !== TS) {
				var c = new Error(
					'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
				);
				throw ((c.name = 'Invariant Violation'), c);
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var n = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: Vg,
			resetWarningCache: Fg,
		};
		return (n.PropTypes = n), n;
	};
	Ig.exports = LS();
	var OS = Ig.exports;
	const F = Wr(OS);
	function ec() {
		return (
			(ec =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			ec.apply(this, arguments)
		);
	}
	function jS(e, t) {
		if (e == null) return {};
		var n = _S(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function _S(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var tc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = jS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			ec({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '19', y1: '12', x2: '5', y2: '12' }),
			I.createElement('polyline', { points: '12 19 5 12 12 5' })
		);
	});
	(tc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (tc.displayName = 'ArrowLeft');
	const RS = tc;
	function nc() {
		return (
			(nc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			nc.apply(this, arguments)
		);
	}
	function bS(e, t) {
		if (e == null) return {};
		var n = DS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function DS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var rc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = bS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			nc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '7', y1: '17', x2: '17', y2: '7' }),
			I.createElement('polyline', { points: '7 7 17 7 17 17' })
		);
	});
	(rc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (rc.displayName = 'ArrowUpRight');
	const zg = rc;
	function ic() {
		return (
			(ic =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			ic.apply(this, arguments)
		);
	}
	function AS(e, t) {
		if (e == null) return {};
		var n = MS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function MS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var sc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = AS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			ic({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('polyline', { points: '6 9 12 15 18 9' })
		);
	});
	(sc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (sc.displayName = 'ChevronDown');
	const NS = sc;
	function oc() {
		return (
			(oc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			oc.apply(this, arguments)
		);
	}
	function IS(e, t) {
		if (e == null) return {};
		var n = FS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function FS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var ac = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = IS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			oc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('circle', { cx: '12', cy: '12', r: '10' }),
			I.createElement('polyline', { points: '12 6 12 12 16 14' })
		);
	});
	(ac.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (ac.displayName = 'Clock');
	const VS = ac;
	function lc() {
		return (
			(lc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			lc.apply(this, arguments)
		);
	}
	function zS(e, t) {
		if (e == null) return {};
		var n = BS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function BS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var uc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = zS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			lc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '8', y1: '6', x2: '21', y2: '6' }),
			I.createElement('line', { x1: '8', y1: '12', x2: '21', y2: '12' }),
			I.createElement('line', { x1: '8', y1: '18', x2: '21', y2: '18' }),
			I.createElement('line', { x1: '3', y1: '6', x2: '3.01', y2: '6' }),
			I.createElement('line', { x1: '3', y1: '12', x2: '3.01', y2: '12' }),
			I.createElement('line', { x1: '3', y1: '18', x2: '3.01', y2: '18' })
		);
	});
	(uc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (uc.displayName = 'List');
	const $S = uc;
	function cc() {
		return (
			(cc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			cc.apply(this, arguments)
		);
	}
	function WS(e, t) {
		if (e == null) return {};
		var n = US(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function US(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var fc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = WS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			cc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
			I.createElement('polyline', { points: '22,6 12,13 2,6' })
		);
	});
	(fc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (fc.displayName = 'Mail');
	const HS = fc;
	function dc() {
		return (
			(dc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			dc.apply(this, arguments)
		);
	}
	function GS(e, t) {
		if (e == null) return {};
		var n = KS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function KS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var pc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = GS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			dc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('polyline', { points: '15 3 21 3 21 9' }),
			I.createElement('polyline', { points: '9 21 3 21 3 15' }),
			I.createElement('line', { x1: '21', y1: '3', x2: '14', y2: '10' }),
			I.createElement('line', { x1: '3', y1: '21', x2: '10', y2: '14' })
		);
	});
	(pc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (pc.displayName = 'Maximize2');
	const YS = pc;
	function hc() {
		return (
			(hc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			hc.apply(this, arguments)
		);
	}
	function XS(e, t) {
		if (e == null) return {};
		var n = QS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function QS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var mc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = XS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			hc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('path', { d: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3' })
		);
	});
	(mc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (mc.displayName = 'Maximize');
	const qS = mc;
	function gc() {
		return (
			(gc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			gc.apply(this, arguments)
		);
	}
	function ZS(e, t) {
		if (e == null) return {};
		var n = JS(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function JS(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var yc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = ZS(e, ['color', 'size']);
		return I.createElement(
			'svg',
			gc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('polyline', { points: '4 14 10 14 10 20' }),
			I.createElement('polyline', { points: '20 10 14 10 14 4' }),
			I.createElement('line', { x1: '14', y1: '10', x2: '21', y2: '3' }),
			I.createElement('line', { x1: '3', y1: '21', x2: '10', y2: '14' })
		);
	});
	(yc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (yc.displayName = 'Minimize2');
	const eE = yc;
	function vc() {
		return (
			(vc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			vc.apply(this, arguments)
		);
	}
	function tE(e, t) {
		if (e == null) return {};
		var n = nE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function nE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var xc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = tE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			vc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
		);
	});
	(xc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (xc.displayName = 'Minus');
	const rE = xc;
	function wc() {
		return (
			(wc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			wc.apply(this, arguments)
		);
	}
	function iE(e, t) {
		if (e == null) return {};
		var n = sE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function sE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var kc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = iE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			wc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('polygon', { points: '3 11 22 2 13 21 11 13 3 11' })
		);
	});
	(kc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (kc.displayName = 'Navigation');
	const Sc = kc;
	function Ec() {
		return (
			(Ec =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			Ec.apply(this, arguments)
		);
	}
	function oE(e, t) {
		if (e == null) return {};
		var n = aE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function aE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var Cc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = oE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			Ec({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('path', {
				d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
			})
		);
	});
	(Cc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (Cc.displayName = 'Phone');
	const lE = Cc;
	function Pc() {
		return (
			(Pc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			Pc.apply(this, arguments)
		);
	}
	function uE(e, t) {
		if (e == null) return {};
		var n = cE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function cE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var Tc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = uE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			Pc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
			I.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
		);
	});
	(Tc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (Tc.displayName = 'Plus');
	const Bg = Tc;
	function Lc() {
		return (
			(Lc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			Lc.apply(this, arguments)
		);
	}
	function fE(e, t) {
		if (e == null) return {};
		var n = dE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function dE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var Oc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = fE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			Lc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('polyline', { points: '17 1 21 5 17 9' }),
			I.createElement('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
			I.createElement('polyline', { points: '7 23 3 19 7 15' }),
			I.createElement('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
		);
	});
	(Oc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (Oc.displayName = 'Repeat');
	const pE = Oc;
	function jc() {
		return (
			(jc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			jc.apply(this, arguments)
		);
	}
	function hE(e, t) {
		if (e == null) return {};
		var n = mE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function mE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var _c = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = hE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			jc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('circle', { cx: '11', cy: '11', r: '8' }),
			I.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
		);
	});
	(_c.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (_c.displayName = 'Search');
	const gE = _c;
	function Rc() {
		return (
			(Rc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			Rc.apply(this, arguments)
		);
	}
	function yE(e, t) {
		if (e == null) return {};
		var n = vE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function vE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var bc = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = yE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			Rc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '4', y1: '21', x2: '4', y2: '14' }),
			I.createElement('line', { x1: '4', y1: '10', x2: '4', y2: '3' }),
			I.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '12' }),
			I.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '3' }),
			I.createElement('line', { x1: '20', y1: '21', x2: '20', y2: '16' }),
			I.createElement('line', { x1: '20', y1: '12', x2: '20', y2: '3' }),
			I.createElement('line', { x1: '1', y1: '14', x2: '7', y2: '14' }),
			I.createElement('line', { x1: '9', y1: '8', x2: '15', y2: '8' }),
			I.createElement('line', { x1: '17', y1: '16', x2: '23', y2: '16' })
		);
	});
	(bc.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (bc.displayName = 'Sliders');
	const xE = bc;
	function Dc() {
		return (
			(Dc =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
			Dc.apply(this, arguments)
		);
	}
	function wE(e, t) {
		if (e == null) return {};
		var n = kE(e, t),
			r,
			i;
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (i = 0; i < s.length; i++) (r = s[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
		}
		return n;
	}
	function kE(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i,
			s;
		for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	var Ac = C.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			i = e.size,
			s = i === void 0 ? 24 : i,
			o = wE(e, ['color', 'size']);
		return I.createElement(
			'svg',
			Dc({ ref: t, xmlns: 'http://www.w3.org/2000/svg', width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: r, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, o),
			I.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
			I.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
		);
	});
	(Ac.propTypes = { color: F.string, size: F.oneOfType([F.string, F.number]) }), (Ac.displayName = 'X');
	const Ki = Ac;
	var $g = { exports: {} };
	/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
		(function () {
			var t = {}.hasOwnProperty;
			function n() {
				for (var r = [], i = 0; i < arguments.length; i++) {
					var s = arguments[i];
					if (s) {
						var o = typeof s;
						if (o === 'string' || o === 'number') r.push(s);
						else if (Array.isArray(s)) {
							if (s.length) {
								var a = n.apply(null, s);
								a && r.push(a);
							}
						} else if (o === 'object') {
							if (s.toString !== Object.prototype.toString && !s.toString.toString().includes('[native code]')) {
								r.push(s.toString());
								continue;
							}
							for (var l in s) t.call(s, l) && s[l] && r.push(l);
						}
					}
				}
				return r.join(' ');
			}
			e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
		})();
	})($g);
	var SE = $g.exports;
	const Je = Wr(SE),
		EE = (e) => (t, n, r) => {
			const i = r.subscribe;
			return (
				(r.subscribe = (o, a, l) => {
					let c = o;
					if (a) {
						const u = (l == null ? void 0 : l.equalityFn) || Object.is;
						let f = o(r.getState());
						(c = (d) => {
							const m = o(d);
							if (!u(f, m)) {
								const w = f;
								a((f = m), w);
							}
						}),
							l != null && l.fireImmediately && a(f, f);
					}
					return i(c);
				}),
				e(t, n, r)
			);
		},
		Wg = (e) => {
			let t;
			const n = new Set(),
				r = (l, c) => {
					const u = typeof l == 'function' ? l(t) : l;
					if (!Object.is(u, t)) {
						const f = t;
						(t = c ?? typeof u != 'object' ? u : Object.assign({}, t, u)), n.forEach((d) => d(t, f));
					}
				},
				i = () => t,
				a = {
					setState: r,
					getState: i,
					subscribe: (l) => (n.add(l), () => n.delete(l)),
					destroy: () => {
						n.clear();
					},
				};
			return (t = e(r, i, a)), a;
		},
		CE = (e) => (e ? Wg(e) : Wg);
	var Ug = { exports: {} },
		Hg = {},
		Gg = { exports: {} },
		Kg = {};
	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Fr = C;
	function PE(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var TE = typeof Object.is == 'function' ? Object.is : PE,
		LE = Fr.useState,
		OE = Fr.useEffect,
		jE = Fr.useLayoutEffect,
		_E = Fr.useDebugValue;
	function RE(e, t) {
		var n = t(),
			r = LE({ inst: { value: n, getSnapshot: t } }),
			i = r[0].inst,
			s = r[1];
		return (
			jE(
				function () {
					(i.value = n), (i.getSnapshot = t), Mc(i) && s({ inst: i });
				},
				[e, n, t]
			),
			OE(
				function () {
					return (
						Mc(i) && s({ inst: i }),
						e(function () {
							Mc(i) && s({ inst: i });
						})
					);
				},
				[e]
			),
			_E(n),
			n
		);
	}
	function Mc(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !TE(e, n);
		} catch {
			return !0;
		}
	}
	function bE(e, t) {
		return t();
	}
	var DE = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? bE : RE;
	(Kg.useSyncExternalStore = Fr.useSyncExternalStore !== void 0 ? Fr.useSyncExternalStore : DE), (Gg.exports = Kg);
	var AE = Gg.exports;
	/**
	 * @license React
	 * use-sync-external-store-shim/with-selector.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Mo = C,
		ME = AE;
	function NE(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var IE = typeof Object.is == 'function' ? Object.is : NE,
		FE = ME.useSyncExternalStore,
		VE = Mo.useRef,
		zE = Mo.useEffect,
		BE = Mo.useMemo,
		$E = Mo.useDebugValue;
	(Hg.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
		var s = VE(null);
		if (s.current === null) {
			var o = { hasValue: !1, value: null };
			s.current = o;
		} else o = s.current;
		s = BE(
			function () {
				function l(m) {
					if (!c) {
						if (((c = !0), (u = m), (m = r(m)), i !== void 0 && o.hasValue)) {
							var w = o.value;
							if (i(w, m)) return (f = w);
						}
						return (f = m);
					}
					if (((w = f), IE(u, m))) return w;
					var T = r(m);
					return i !== void 0 && i(w, T) ? w : ((u = m), (f = T));
				}
				var c = !1,
					u,
					f,
					d = n === void 0 ? null : n;
				return [
					function () {
						return l(t());
					},
					d === null
						? void 0
						: function () {
								return l(d());
						  },
				];
			},
			[t, n, r, i]
		);
		var a = FE(e, s[0], s[1]);
		return (
			zE(
				function () {
					(o.hasValue = !0), (o.value = a);
				},
				[a]
			),
			$E(a),
			a
		);
	}),
		(Ug.exports = Hg);
	var WE = Ug.exports;
	const UE = Wr(WE),
		{ useSyncExternalStoreWithSelector: HE } = UE;
	let qP = !1;
	function GE(e, t = e.getState, n) {
		const r = HE(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
		return C.useDebugValue(r), r;
	}
	const be = (e, t = 2) => {
			const n = Math.pow(10, t);
			return Math.round(e * n) / n;
		},
		KE = (e) => (e == null ? void 0 : e.split(/[#?]/)[0].split('.').pop().trim().toLowerCase()),
		Yg = (e, t = 'desc') => (!e || !e[t] ? '' : e[t].replace(/{{(\w+)}}/gi, (n, r) => e[r.toLowerCase()])),
		YE = (e) => {
			if (!e) return '#fff';
			e = e.replace('#', '');
			const [t, n, r] = e.match(/.{2}/g).map((o) => parseInt(o, 16));
			return (0.299 * t + 0.587 * n + 0.114 * r) / 255 > 0.8 ? '#000' : '#fff';
		},
		XE = () =>
			CE(
				EE((e, t) => ({
					selectedVector: null,
					setSelectedVector: (n) => e({ selectedVector: n }),
					getVectorById: (n = t().selectedVector) => {
						var r, i;
						return (i = (r = t().data) == null ? void 0 : r.routes) == null ? void 0 : i.find((s) => s.id === n);
					},
					routesEditing: !1,
					setRoutesEditing: (n) => e({ routesEditing: n }),
					from: null,
					to: null,
					setFrom: (n) => e({ from: n, to: t().to === n ? null : t().to }),
					setTo: (n) => e({ to: n, from: t().from === n ? null : t().from }),
					setAny: (n) => {
						!t().to || t().from ? t().setTo(n) : t().setFrom(n), e({ routesOpened: !0 });
					},
					hasRoute: (n) => t().routeGraph.some((r) => r.end === n),
					routesAccessible: !1,
					setRoutesAccessible: (n) => e({ routesAccessible: n }),
					routesOpened: !1,
					setRoutesOpened: (n) => e({ routesOpened: n }),
					routeGraph: [],
					setRouteGraph: (n) => e({ routeGraph: n }),
					paths: [],
					setPaths: (n) => e({ paths: n }),
					animatedPath: !1,
					setAnimatedPath: (n) => {
						const r = t().paths[n];
						e({ animatedPath: n, layer: r ? r[0].layer : t().layer });
					},
					setFixedFrom: (n) => {
						e((r) => {
							var i;
							return {
								from: n,
								data: {
									...r.data,
									settings: { ...r.data.settings, wayfindingFixedFrom: n },
									locations: (i = r.data.locations) == null ? void 0 : i.map((s) => (s.id !== n ? s : { ...s, disable: !1 })),
								},
							};
						});
					},
					outerSettings: {},
					setOuterSettings: (n) => e({ outerSettings: n }),
					loading: !0,
					dataLoaded: !1,
					error: null,
					admin: !1,
					hovered: !1,
					offset: { w: 0, h: 0 },
					setOffset: (n) => e((r) => ({ offset: { ...r.offset, ...n } })),
					target: { scale: 1, x: 0.5, y: 0.5 },
					pos: { scale: 1, x: 0.5, y: 0.5 },
					location: void 0,
					transition: { duration: 0 },
					breakpoint: {},
					dragging: !1,
					sidebarClosed: !1,
					portrait: !1,
					layer: !1,
					filters: {},
					filterLogic: {},
					filtersOpened: !1,
					estPos: {},
					data: {},
					csv: [],
					latLonCache: {},
					setLatLonCache: () => {
						var a;
						const n = (a = t().data) == null ? void 0 : a.settings;
						if (!(n != null && n.geo) || !(n != null && n.extent)) {
							e({ latLonCache: {} });
							return;
						}
						let r = n.extent[2] - n.extent[0],
							i = (n.extent[1] * Math.PI) / 180,
							s = (((n == null ? void 0 : n.mapWidth) / r) * 360) / (2 * Math.PI),
							o = (s / 2) * Math.log((1 + Math.sin(i)) / (1 - Math.sin(i)));
						e({ latLonCache: { deltaLon: r, mapWidth: s, mapOffsetY: o } });
					},
					latLonToXY: (n) => {
						var s;
						const r = (s = t().data) == null ? void 0 : s.settings;
						if (!n || !r.geo || !r.extent) return !1;
						const i = (n[0] * Math.PI) / 180;
						return [
							((n[1] - r.extent[0]) * (r.mapWidth / t().latLonCache.deltaLon)) / r.mapWidth,
							(r.mapHeight - ((t().latLonCache.mapWidth / 2) * Math.log((1 + Math.sin(i)) / (1 - Math.sin(i))) - t().latLonCache.mapOffsetY)) / r.mapHeight,
						];
					},
					containerMessage: null,
					setContainerMessage: (n) => e({ containerMessage: n }),
					setData: (n) => e((r) => ({ data: { ...r.data, ...n } })),
					setAdmin: (n) => e({ admin: n }),
					fetchData: async (n) => {
						if (typeof n == 'object' && n !== null) {
							t().process(n);
							return;
						}
						if (typeof n == 'string' && n.trim().charAt(0) === '{') {
							t().process(JSON.parse(n));
							return;
						}
						try {
							let i = await (await fetch(n)).json();
							e({ source: n }), t().process(i);
						} catch (r) {
							console.error('An error occurred while fetching map data: ', r), e({ loading: !1, error: "Couldn't fetch map data.", data: {} });
						}
					},
					migrate: (n) => (
						(n.layers = n.levels),
						delete n.levels,
						n.layers.forEach((r) => {
							'map' in r && ((r.file = r.map), delete r.map), 'title' in r && ((r.name = r.title), delete r.title);
						}),
						(n.settings = { mapWidth: n.mapwidth, mapHeight: n.mapheight, resetButton: 'bottom-right', zoomButtons: 'bottom-right', layerSwitcher: 'top-right', zoom: !0, maxZoom: 3 }),
						delete n.mapwidth,
						delete n.mapheight,
						(n.breakpoints = [
							{ container: 600, below: 9e3, name: 'all-screens' },
							{ portrait: !0, name: 'mobile', below: 480 },
						]),
						n.locations ||
							((n.locations = n.layers
								.map((r) => r.locations)
								.flat()
								.map((r) => ({ layer: n.layers.find((i) => i.locations.includes(r)).id, ...r }))),
							n.layers.forEach((r) => delete r.locations)),
						n.locations.forEach((r) => {
							'description' in r && ((r.desc = r.description), delete r.description),
								'x' in r && 'y' in r && ((r.coord = [parseFloat(r.x), parseFloat(r.y)]), delete r.x, delete r.y),
								'fill' in r && ((r.color = r.fill), delete r.fill);
						}),
						n
					),
					process: (n) => {
						var i, s, o;
						n.layers || (n = t().migrate(n));
						const r = { ...n.settings, ...t().outerSettings };
						e({
							loading: !1,
							data: { ...n, settings: r },
							layer: (r == null ? void 0 : r.layer) || (n == null ? void 0 : n.layers[0].id),
							sidebarClosed: (r == null ? void 0 : r.sidebarClosed) && (r == null ? void 0 : r.toggleSidebar),
							filters: n.filters ? Object.fromEntries(n.filters.filter((a) => !a.disable).map((a) => [a.id, a.default])) : {},
							filtersOpened: ((r == null ? void 0 : r.filtersOpened) && !(r != null && r.sidebarClosed)) || !1,
							routesOpened: ((i = n == null ? void 0 : n.settings) == null ? void 0 : i.wayfindingOpened) || !1,
						}),
							(!((s = n == null ? void 0 : n.settings) != null && s.csv) || !((o = n == null ? void 0 : n.settings) != null && o.csvEnabled)) && e({ dataLoaded: !0 }),
							t().setFilterLogic();
					},
					fetchCsv: async (n) => {
						var r, i, s, o;
						if (!((i = (r = t().data) == null ? void 0 : r.settings) != null && i.csv) && !((o = (s = t().data) == null ? void 0 : s.settings) != null && o.csvEnabled)) return !1;
						try {
							const a = await n;
							e({ csv: a });
						} catch (a) {
							console.error('An error occured while fetching the CSV file: ', a), e({ csv: [] });
						} finally {
							e({ dataLoaded: !0 });
						}
					},
					setFilterLogic: () => {
						var s;
						let n = !1;
						const r = (o, a) => {
							var l;
							if (a === ((l = t().filterLogic[o]) == null ? void 0 : l.logic)) return t().filterLogic.apply;
							try {
								return (n = !0), new Function('l', 'value', `return !value || ${a} ? true : false`);
							} catch (c) {
								console.error(c.message);
								return;
							}
						};
						let i;
						(s = t().data) != null &&
							s.filters &&
							(i = Object.fromEntries(
								t()
									.data.filters.filter((o) => !o.disable)
									.map((o) => [o.id, { logic: o.logic, apply: r(o.id, o.logic) }])
							)),
							n && e({ filterLogic: i });
					},
					setCsv: (n) => e({ csv: n }),
					setHovered: (n) => e({ hovered: n }),
					setTarget: (n) => e((r) => ({ target: { ...r.target, ...n } })),
					setPos: (n) => e({ pos: n }),
					setTransition: (n) => e({ transition: n }),
					setDragging: (n) => e({ dragging: n }),
					setBreakpoint: (n) => e({ breakpoint: n }),
					setSearch: (n) => e({ search: n }),
					setEstPos: (n) => e({ estPos: n }),
					setNewLocation: (n) => e({ newLocation: n }),
					switchLayer: (n) => e({ layer: n }),
					getLayer: (n = t().layer) => t().data.layers.find((r) => r.id === n),
					getFilterCount: () => Object.values(t().filters).filter((n) => n === !0 || (n == null ? void 0 : n.length) > 0).length,
					displayList: (n = !0) => {
						var s, o, a;
						let r = new Set((s = t().data.locations) == null ? void 0 : s.map((l) => l.id)),
							i = [...(((o = t().data) == null ? void 0 : o.locations) || []), ...((a = t().csv) == null ? void 0 : a.filter((l) => !r.has(l.id)))]
								.filter((l) => l.sample !== 'true')
								.map((l) => t().getSampledLocation(l))
								.filter((l) => l.disable !== !0 && (l.hide !== !0 || n));
						return (
							t().data.settings.exclude && (i = i.filter(new Function('l', `return ${t().data.settings.exclude}`))),
							(i = t().applyFilters(i)),
							t().filters.group && (i = t().applyGroups(i)),
							t().search && (i = i.filter(t().appliedSearch)),
							t().data.settings.ordered &&
								(i = i.sort((l, c) => {
									var u;
									return (u = l.title) == null ? void 0 : u.localeCompare(c.title);
								})),
							i
						);
					},
					applyFilters: (n) =>
						t().data.filters
							? t().data.filters.reduce(
									(r, i) => {
										var s;
										if (!((s = t().filterLogic[i.id]) != null && s.apply)) return r;
										try {
											const o = t().filters[i.id];
											return r.filter((a) => t().filterLogic[i.id].apply(a, o));
										} catch {
											return r;
										}
									},
									[...n]
							  )
							: n,
					clearFilters: () => e((n) => ({ search: '', sidebarClosed: !1, filtersOpened: !1, filters: Object.keys(n.filters).reduce((r, i) => ({ ...r, [i]: !1 }), {}) })),
					applyGroups: (n) => (t().filters.group.length < 1 ? n : n.filter((r) => (r.group ? t().filters.group.some((i) => r.group.includes(i)) : !1))),
					appliedSearch: (n) => {
						var r;
						return n.title
							? (r = `${n == null ? void 0 : n.title} ${n == null ? void 0 : n.about}`) == null
								? void 0
								: r.toLowerCase().normalize('NFD').includes(t().search.toLowerCase().normalize('NFD'))
							: !0;
					},
					toggleGroup: (n, r) => e((i) => ({ filters: { ...i.filters, group: r ? i.filters.group.filter((s) => s !== n.name) : i.filters.group ? [...i.filters.group, n.name] : [n.name] } })),
					setFilter: (n, r) => e((i) => ({ filters: { ...i.filters, [n]: r } })),
					getGlobalSample: () => {
						var n, r;
						return ((n = t().data.samples) == null ? void 0 : n.find((i) => i.id === 'def')) || ((r = t().data.locations) == null ? void 0 : r.find((i) => i.id === 'def'));
					},
					getSample: (n, r = 'sample') => {
						var i, s, o, a;
						return (
							((s = (i = t().data) == null ? void 0 : i.samples) == null ? void 0 : s.find((l) => l.id === (n == null ? void 0 : n[r]))) ||
							((a = (o = t().data) == null ? void 0 : o.locations) == null ? void 0 : a.find((l) => l.id === (n == null ? void 0 : n[r]))) ||
							(n && t().getGlobalSample()) ||
							{}
						);
					},
					getCoord: (n) => {
						var r;
						return { coord: (n == null ? void 0 : n.coord) || ((r = t().estPos[n == null ? void 0 : n.id]) == null ? void 0 : r.coord) || t().latLonToXY(n == null ? void 0 : n.latlon) };
					},
					getSampledLocation: (n = t().getLocationById(), r = 'sample') => {
						const i = { ...t().getCoord(n), ...t().getSample(n, r), ...n };
						return (i.desc = Yg(i, 'desc')), (i.about = Yg(i, 'about')), i;
					},
					getLocationById: (n = t().location) => {
						var r;
						return [...(((r = t().data) == null ? void 0 : r.locations) || []), ...t().csv].find((i) => i.id === n) || {};
					},
					openLocation: (n, r = 0.8) => {
						const i = t().getLocationById(n);
						if (!(i != null && i.id)) {
							t().admin && e({ newLocation: n });
							return;
						}
						if (i.disable && !t().admin) return;
						if (i.action === 'link') {
							window.location.href = i.link;
							return;
						}
						if (i.action === 'switch' && !t().admin) {
							t().switchLayer(i.switch), t().setTarget({ scale: 1 });
							return;
						}
						const s = t().getSampledLocation(i);
						e((o) => ({
							location: s.id,
							newLocation: !1,
							transition: { duration: r },
							layer: s.layer || o.layer,
							target: { scale: (s == null ? void 0 : s.zoom) || t().data.settings.maxZoom, x: s.coord[0], y: s.coord[1] },
							sidebarClosed: o.sidebarClosed ? s.action !== 'sidebar' : !1,
						}));
					},
					closeLocation: (n = !1) => {
						(n || t().data.settings.closeReset) && (t().setTransition({ duration: 0.4 }), t().setTarget({ scale: 1 })), e({ location: null, newLocation: !1 });
					},
					toggleSidebar: (n) => e((r) => ({ location: !1, filtersOpened: !1, transition: { duration: 0 }, sidebarClosed: n === void 0 ? !r.sidebarClosed : !n })),
					toggleFilters: (n) => e((r) => ({ sidebarClosed: !1, filtersOpened: !r.filtersOpened })),
				}))
			),
		Xg = C.createContext(null),
		QE = ({ children: e, onStore: t }) => {
			const n = XE();
			return (
				C.useEffect(() => {
					t && t(n);
				}, [t, n]),
				g.jsx(Xg.Provider, { value: n, children: e })
			);
		},
		E = (e) => {
			const t = C.useContext(Xg);
			if (t === null) throw new Error('no provider');
			return GE(t, e);
		},
		qE = ({ value: e, anim: t }) => {
			const n = E((s) => s.data),
				r = E((s) => s.filtersOpened),
				i = () => {
					var s;
					return (r || n.settings.filtersAlwaysVisible) && ((s = n.filters) == null ? void 0 : s.length) > 0;
				};
			return g.jsxs('div', { className: Je('mapplic-search-filter', { opened: i() }), children: [g.jsx(ZE, { value: e }), i() && g.jsx(tC, { anim: t })] });
		},
		ZE = ({ value: e }) => {
			const t = E((l) => l.data.settings),
				n = E((l) => l.data.filters),
				r = E((l) => l.toggleFilters),
				i = E((l) => l.toggleSidebar),
				s = E((l) => l.setSearch),
				o = E((l) => l.filtersOpened),
				a = E((l) => l.getFilterCount);
			return g.jsxs('div', {
				className: 'mapplic-search-bar',
				children: [
					g.jsxs('label', {
						className: 'mapplic-search',
						children: [
							g.jsx(gE, { size: 16 }),
							g.jsx('input', { type: 'text', placeholder: t.searchText || 'Search', spellCheck: !1, onClick: () => i(!0), onInput: (l) => s(l.target.value), value: e }),
							e && g.jsx('button', { type: 'button', onClick: () => s(''), children: g.jsx(Ki, { size: 12 }) }),
						],
					}),
					g.jsx(JE, {
						value: !o,
						active: (n == null ? void 0 : n.length) > 0 && !t.filtersAlwaysVisible,
						children: g.jsxs('button', { type: 'button', onClick: () => r(), children: [g.jsx(xE, { size: 16 }), t.accessibility && g.jsx('span', { children: 'Filter' }), g.jsx(eC, { nr: a() })] }),
					}),
				],
			});
		},
		JE = ({ children: e, value: t, active: n }) => (n ? g.jsxs('div', { className: 'mapplic-switch', children: [t && g.jsx('div', { className: 'mapplic-switch-background' }), e] }) : null),
		eC = ({ nr: e }) => {
			if (!(e < 1)) return g.jsx('small', { className: 'mapplic-count', children: e });
		},
		tC = ({ anim: e }) => {
			const t = E((i) => i.data.filters),
				n = E((i) => i.search),
				r = E((i) => i.getFilterCount);
			return t
				? g.jsxs(
						Ne.div,
						{
							className: 'mapplic-filters',
							...e,
							style: { display: 'flex', flexDirection: 'column', overflowY: 'auto' },
							children: [g.jsx('div', { className: 'mapplic-filters-body', children: t.map((i) => g.jsx(rC, { f: i }, i.id)) }), g.jsx(nC, { shown: r() > 0 || n })],
						},
						'filters'
				  )
				: null;
		},
		nC = ({ shown: e }) => {
			const t = E((o) => o.data.settings),
				n = E((o) => o.displayList),
				r = E((o) => o.clearFilters),
				i = E((o) => o.toggleSidebar),
				s = E((o) => o.data.settings.clearText);
			return e
				? g.jsxs('div', {
						className: 'mapplic-filters-footer',
						children: [
							g.jsxs('button', { type: 'button', onClick: r, children: [g.jsx(Ki, { size: 12 }), s || 'Clear'] }),
							g.jsxs('button', { type: 'button', onClick: i, children: [g.jsx('b', { children: n(!1).length }), ' ', t.foundText || 'found', g.jsx(zg, { size: 12 })] }),
						],
				  })
				: null;
		},
		rC = ({ f: e }) => {
			var i, s;
			const t = E((o) => o.filters),
				n = E((o) => o.setFilter),
				r = E((o) => o.data.groups);
			if (!e.disable)
				switch (e.type) {
					case 'tags':
						return g.jsx('div', {
							className: 'mapplic-tags',
							'data-filter': e == null ? void 0 : e.id,
							children: r && r.map((o) => g.jsx(iC, { group: o, active: Array.isArray(t.group) && t.group.includes(o.name) }, o.name)),
						});
					case 'checkbox':
						return g.jsxs('label', {
							className: 'mapplic-toggle',
							'data-filter': e == null ? void 0 : e.id,
							children: [
								g.jsx('span', { children: e.name }),
								g.jsxs('div', { className: 'mapplic-toggle-switch', children: [g.jsx('input', { type: 'checkbox', checked: t[e.id] || !1, onChange: () => n(e.id, !t[e.id]) }), g.jsx('span', {})] }),
							],
						});
					case 'dropdown':
						return g.jsx('label', {
							'data-filter': e == null ? void 0 : e.id,
							children: g.jsx('select', {
								className: 'mapplic-dropdown',
								value: t[e.id],
								onChange: (o) => n(e.id, o.target.value),
								children:
									(i = e.value) == null
										? void 0
										: i.split(';').map((o) => {
												const a = o.split(':');
												return g.jsx('option', { value: a[0], children: a[1] }, o);
										  }),
							}),
						});
					case 'toggle':
						return g.jsx('div', {
							className: 'mapplic-filter-toggle',
							'data-filter': e == null ? void 0 : e.id,
							children:
								(s = e.value) == null
									? void 0
									: s.split(';').map((o) => {
											const a = o.split(':');
											return g.jsx(
												'button',
												{ type: 'button', className: Je({ 'mapplic-selected': (!t[e.id] && a[0] === '') || t[e.id] === a[0] }), onClick: (l) => n(e.id, a[0]), children: a[1] },
												o
											);
									  }),
						});
					default:
						return;
				}
		};
	function iC({ group: e, active: t }) {
		const n = E((i) => i.toggleGroup),
			r = { color: t ? '#fff' : e.color };
		return (
			t && ((r.borderColor = e.color), (r.backgroundColor = e.color)),
			e.hide ? !1 : g.jsx('button', { type: 'button', className: Je('mapplic-tag', { 'mapplic-active': t }), style: r, onClick: () => n(e, t), children: e.name })
		);
	}
	const sC = 'modulepreload',
		oC = function (e, t) {
			return new URL(e, t).href;
		},
		Qg = {},
		No = function (t, n, r) {
			return t();
		},
		aC = I.lazy(() => No(() => Promise.resolve().then(() => AP), void 0, (Zt && Zt.src) || new URL('mapplic.js', document.baseURI).href)),
		qg = ({ location: e }) => {
			const t = E((s) => s.closeLocation),
				n = E((s) => s.data.settings),
				[r, i] = C.useState(!1);
			return g.jsxs(g.Fragment, {
				children: [
					e.image && g.jsx('div', { className: 'mapplic-popup-image', children: g.jsx('img', { src: e.image, alt: e == null ? void 0 : e.title }, e.image) }),
					g.jsxs('div', {
						className: 'mapplic-popup-content',
						children: [
							g.jsx('button', { type: 'button', className: 'mapplic-popup-close', onClick: () => t(), children: g.jsx(Ki, { size: 12 }) }),
							g.jsxs('div', { className: 'mapplic-popup-title', children: [e.title && g.jsx('h4', { children: e.title }), e.about && g.jsx('h5', { dangerouslySetInnerHTML: { __html: e.about } })] }),
							(e == null ? void 0 : e.desc) && g.jsx('div', { className: 'mapplic-popup-body', dangerouslySetInnerHTML: { __html: e.desc } }),
							g.jsx(lC, { location: e, field: r }),
							((e == null ? void 0 : e.link) || (e == null ? void 0 : e.hours) || (e == null ? void 0 : e.phone) || (e == null ? void 0 : e.email) || n.wayfinding) &&
								g.jsxs('div', {
									className: 'mapplic-popup-footer',
									children: [
										g.jsxs('div', {
											className: 'mapplic-popup-actions',
											children: [
												n.wayfinding && g.jsx(C.Suspense, { fallback: null, children: g.jsx(aC, { id: e.id }) }),
												g.jsx(Nc, { location: e, field: 'phone', details: r, setDetails: i, children: g.jsx(lE, { size: 16 }) }),
												g.jsx(Nc, { location: e, field: 'email', details: r, setDetails: i, children: g.jsx(HS, { size: 16 }) }),
												g.jsx(Nc, { location: e, field: 'hours', details: r, setDetails: i, children: g.jsx(VS, { size: 16 }) }),
											],
										}),
										e.link &&
											g.jsxs('a', {
												href: e.link,
												target: e.target || '_blank',
												className: 'mapplic-popup-link mapplic-button mapplic-button-primary',
												rel: 'noreferrer',
												children: [g.jsx('span', { children: e.more || n.moreText || 'More' }), g.jsx(zg, { size: 16 })],
											}),
									],
								}),
						],
					}),
				],
			});
		},
		lC = ({ location: e, field: t, ...n }) => {
			var r;
			return e[t]
				? g.jsxs('div', {
						className: 'mapplic-popup-details',
						children: [
							t === 'phone' && g.jsx(Zg, { content: e.phone, prefix: 'tel:', ...n }),
							t === 'email' && g.jsx(Zg, { content: e.email, prefix: 'mailto:', ...n }),
							t === 'hours' &&
								g.jsx('div', { className: 'mapplic-hours', children: (r = e == null ? void 0 : e.hours) == null ? void 0 : r.split(';').map((i, s) => g.jsx('div', { children: i }, s)) }),
						],
				  })
				: null;
		},
		Zg = ({ content: e, prefix: t = '', ...n }) => (e == null ? void 0 : e.split(',').map((r) => g.jsx('a', { href: `${t}${r.trim()}`, ...n, children: r.trim() }, r))),
		Nc = ({ location: e, field: t, details: n, setDetails: r, children: i }) =>
			e[t] ? g.jsx('button', { className: Je('mapplic-button mapplic-button-icon', { 'mapplic-active': n === t }), onClick: () => r((s) => (s === t ? !1 : t)), children: i }) : null,
		uC = ({ element: e }) => {
			const [t, n] = C.useState(0),
				r = E((d) => d.data.breakpoint),
				i = E((d) => d.data.settings),
				s = E((d) => d.sidebarClosed),
				o = E((d) => d.breakpoint),
				a = E((d) => d.search),
				l = E((d) => d.location),
				c = E((d) => d.getSampledLocation);
			E((d) => d.filters);
			const u = () => l && c().action === 'sidebar',
				f = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } };
			return (
				C.useEffect(() => {
					o != null && o.sidebar && e.current.style.setProperty('--sidebar', o.sidebar + 'px');
				}, [e, r, o == null ? void 0 : o.sidebar]),
				g.jsx('div', {
					className: 'mapplic-sidebar',
					children: g.jsx(qn, {
						mode: 'wait',
						children: u()
							? g.jsx(Ne.div, { className: 'mapplic-sidebar-popup', ...f, children: g.jsx(qg, { location: c() }) })
							: g.jsxs(g.Fragment, { children: [i.filters && g.jsx(qE, { value: a || '', anim: f }), !s && g.jsx(cC, { scrollPosition: t, setScrollPosition: n })] }),
					}),
				})
			);
		},
		cC = ({ scrollPosition: e, setScrollPosition: t = () => !1 }) => {
			const n = C.useRef(null),
				r = E((s) => s.displayList),
				i = () => {
					var o;
					const s = (o = n.current) == null ? void 0 : o.scrollTop;
					t(s);
				};
			return (
				C.useEffect(
					() => (
						n.current && ((n.current.scrollTop = e), n.current.addEventListener('scroll', i, { passive: !0 })),
						() => {
							var s;
							(s = n.current) == null || s.removeEventListener('scroll', i);
						}
					),
					[n.current]
				),
				g.jsx('div', { className: 'mapplic-dir', ref: n, children: g.jsx(fC, { locations: r(!1) }) })
			);
		},
		fC = ({ locations: e }) => {
			const t = E((o) => o.search),
				n = E((o) => o.data.settings),
				r = E((o) => o.data.groups),
				i = E((o) => o.getFilterCount),
				s = (o, a) => {
					if (!o || !a) return {};
					const l = o.reduce((c, u) => ((c[u] = e.filter((f) => a(f, u))), c), {});
					return Object.entries(l);
				};
			return e.length < 1
				? g.jsx('i', { className: 'mapplic-empty-message', children: n.noresultsText || 'No results found.' })
				: !n.groupBy || i() > 0 || t
				? g.jsx(Jg, { locations: e })
				: s(
						r.map((o) => o.name),
						(o, a) => {
							var l;
							return (l = o.group) == null ? void 0 : l.includes(a);
						}
				  ).map(([o, a]) => g.jsx(Jg, { locations: a, group: o }, o));
		},
		Jg = ({ locations: e, group: t = null }) => {
			const n = E((i) => i.breakpoint),
				r = E((i) => i.getSampledLocation);
			return e.length < 1
				? null
				: g.jsxs('div', {
						className: 'mapplic-dir-group',
						children: [
							g.jsx(dC, { group: t, count: e.length }),
							g.jsx('ul', {
								className: Je('mapplic-dir-items', `mapplic-${n == null ? void 0 : n.type}-items`),
								style: { gridTemplateColumns: n != null && n.column ? `repeat(${n.column}, 1fr)` : '100%' },
								children: e.map((i) => g.jsx(pC, { location: r(i) }, i.id)),
							}),
						],
				  });
		},
		dC = ({ group: e, count: t }) =>
			e ? g.jsxs('div', { className: 'mapplic-dir-group-title', children: [g.jsx('span', { children: e }), g.jsx('div', { className: 'mapplic-line' }), g.jsx('span', { children: t })] }) : null,
		pC = ({ location: e, ...t }) => {
			const n = E((u) => u.hovered),
				r = E((u) => u.setHovered),
				i = E((u) => u.location),
				s = E((u) => u.openLocation),
				o = E((u) => u.breakpoint),
				a = E((u) => u.search),
				l = (u) => {
					u.preventDefault(), s(e.id);
				},
				c = (u) => (u == null ? void 0 : u.replace(new RegExp(a, 'gi'), (f) => `<mark>${f}</mark>`));
			return g.jsx('li', {
				'data-location': e.id,
				'data-group': e == null ? void 0 : e.group,
				children: g.jsx('a', {
					...t,
					className: Je('mapplic-dir-item', `mapplic-${o == null ? void 0 : o.type}-item`, { 'mapplic-highlight': n === e.id, 'mapplic-active': i === e.id }),
					onClick: l,
					onMouseEnter: () => r(e.id),
					onTouchStart: () => r(e.id),
					onMouseLeave: () => r(!1),
					onTouchEnd: () => r(!1),
					children: g.jsx(hC, { location: e, mark: c, type: o == null ? void 0 : o.type }),
				}),
			});
		},
		hC = ({ location: e, mark: t, type: n = 'list' }) => {
			const r = E((i) => i.data.settings);
			return n === 'grid'
				? g.jsxs(g.Fragment, {
						children: [
							r.thumbnails && g.jsx(ey, { location: e }),
							g.jsxs('div', {
								className: 'mapplic-item-body',
								children: [g.jsx('h3', { dangerouslySetInnerHTML: { __html: t(e.title) } }), g.jsx('h5', { dangerouslySetInnerHTML: { __html: e.about } })],
							}),
						],
				  })
				: g.jsxs(g.Fragment, {
						children: [
							r.thumbnails && g.jsx(ey, { location: e }),
							g.jsxs('div', {
								className: 'mapplic-item-body',
								children: [g.jsx('h4', { dangerouslySetInnerHTML: { __html: t(e.title) } }), g.jsx('h5', { dangerouslySetInnerHTML: { __html: e.about } })],
							}),
						],
				  });
		},
		ey = ({ location: e }) => {
			const t = () => {
				var n;
				return e.thumb
					? e.thumb.length <= 3
						? g.jsx('span', { children: e.thumb.toUpperCase() })
						: g.jsx('img', { src: e.thumb, alt: e.title })
					: g.jsx('span', { children: (n = e.title) == null ? void 0 : n.charAt(0) });
			};
			return g.jsx('div', { className: 'mapplic-thumbnail', children: t() });
		},
		mC = ({ element: e, accessibility: t, ...n }) => {
			const [r, i] = C.useState(!1),
				s = C.useRef(document.fullscreenEnabled ?? document.webkitFullscreenEnabled);
			C.useEffect(() => {
				const a = () => {
					i(!!document.fullscreenElement);
				};
				return document.addEventListener('fullscreenchange', a), () => document.removeEventListener('fullscreenchange', a);
			}, []);
			const o = () => {
				r ? document.exitFullscreen() : e.current.requestFullscreen();
			};
			return s.current
				? g.jsxs('button', {
						type: 'button',
						onClick: o,
						...n,
						children: [!r && g.jsx(YS, { size: 16 }), r && g.jsx(eE, { size: 16 }), t && g.jsxs('span', { children: [r && 'Exit', ' Fullscreen'] })],
				  })
				: null;
		},
		gC = I.lazy(() => No(() => Promise.resolve().then(() => IP), void 0, (Zt && Zt.src) || new URL('mapplic.js', document.baseURI).href)),
		yC = I.lazy(() => No(() => Promise.resolve().then(() => $P), void 0, (Zt && Zt.src) || new URL('mapplic.js', document.baseURI).href)),
		vC = (e) => {
			const t = E((o) => o.data.settings),
				n = E((o) => o.toggleSidebar),
				r = E((o) => o.sidebarClosed),
				i = E((o) => o.breakpoint),
				s = E((o) => o.containerMessage);
			return g.jsxs('div', {
				className: 'mapplic-controls',
				children: [
					t.sidebar && t.toggleSidebar && (!r || !t.filters) && g.jsx('button', { className: 'mapplic-sidebar-close', onClick: () => n(), children: g.jsx(RS, { size: 16 }) }),
					g.jsx(qn, {
						children:
							s === 'mouseWheelShift' &&
							g.jsx(Ne.div, {
								className: 'mapplic-controls-messages',
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								children: g.jsxs('div', { children: ['Use ', g.jsx('b', { className: 'mapplic-key', children: 'Shift' }), ' + ', g.jsx('b', { children: 'Scroll' }), ' to Zoom'] }),
							}),
					}),
					g.jsx(Io, { position: 'top-left', ...e, style: t.sidebar && t.filters && r && !t.rightSidebar && !(i != null && i.portrait) ? { top: '60px' } : {} }),
					g.jsx(Io, { position: 'top-right', ...e, style: t.sidebar && t.filters && r && t.rightSidebar && !(i != null && i.portrait) ? { top: '60px' } : {} }),
					g.jsx(Io, { position: 'bottom-left', ...e, style: t.sidebar && r && i != null && i.portrait ? { bottom: '60px' } : {} }),
					g.jsx(Io, { position: 'bottom-right', ...e }),
				],
			});
		},
		Io = ({ position: e, element: t, style: n }) => {
			const r = E((s) => s.data.layers),
				i = E((s) => s.data.settings);
			return g.jsxs('div', {
				className: `mapplic-control-zone mapplic-${e}`,
				style: n,
				children: [
					i.legend === e && g.jsx(C.Suspense, { fallback: null, children: g.jsx(gC, {}) }),
					i.layerSwitcher === e && r.length > 1 && g.jsx(kC, { list: r }),
					i.zoom && i.zoomButtons === e && g.jsx(wC, {}),
					i.zoom && i.resetButton === e && g.jsx(xC, { accessibility: i.accessibility }),
					i.fullscreen === e && g.jsx(mC, { element: t, className: 'mapplic-control-button', accessibility: i.accessibility }),
					i.wayfinding && i.wayfindingControls === e && g.jsx(C.Suspense, { fallback: null, children: g.jsx(yC, {}) }),
				],
			});
		},
		xC = ({ accessibility: e }) => {
			const t = E((i) => i.pos),
				n = E((i) => i.location),
				r = E((i) => i.closeLocation);
			if (!(t.scale <= 1 && !n))
				return g.jsxs('button', { type: 'button', className: 'mapplic-control-button', onClick: () => r(!0), children: [e && g.jsx('span', { children: 'Reset' }), g.jsx(qS, { size: 16 })] });
		},
		wC = () => {
			const e = E((s) => s.data.settings.maxZoom),
				t = E((s) => s.pos),
				n = E((s) => s.setTarget),
				r = E((s) => s.setTransition),
				i = (s) => {
					r({ duration: 0.4 }), n({ scale: s });
				};
			return g.jsxs('div', {
				className: 'mapplic-control-group',
				children: [
					g.jsx('button', { type: 'button', className: 'mapplic-control-button', disabled: t.scale >= e, onClick: () => i(t.scale * 1.6), children: g.jsx(Bg, { size: 16 }) }),
					g.jsx('button', { type: 'button', className: 'mapplic-control-button', disabled: t.scale <= 1, onClick: () => i(t.scale / 1.6), children: g.jsx(rE, { size: 16 }) }),
				],
			});
		},
		kC = ({ list: e }) => {
			const t = E((r) => r.layer),
				n = E((r) => r.switchLayer);
			return (
				E((r) => r.layer),
				g.jsx('div', {
					className: 'mapplic-layer-switcher',
					children: e.map((r) => g.jsx('button', { type: 'button', className: `${r.id === t ? 'mapplic-active' : ''}`, onClick: () => n(r.id), 'data-layer': r.id, children: r.name }, r.id)),
				})
			);
		},
		ty = ({ cond: e = !0, location: t, hover: n = !1, offset: r = 0, layer: i, containerSize: s }) => {
			const o = C.useRef(null),
				a = E((c) => c.data.settings.hoverAbout),
				l = E((c) => c.setOffset);
			return (
				C.useEffect(() => {
					var c;
					e && !n && l({ h: ((c = o.current) == null ? void 0 : c.offsetHeight) - r });
				}, [t.id]),
				!e || !t.id || !t.coord || t.disable || (t.layer && t.layer !== i) || (n && !t.title) || (!n && (t == null ? void 0 : t.action) === 'none')
					? null
					: g.jsx(Ne.div, {
							className: Je('mapplic-tooltip mapplic-popup', { 'mapplic-tooltip-mini': (s == null ? void 0 : s.width) < 400, 'mapplic-tooltip-hover': n }),
							'data-location': t.id,
							'data-group': t == null ? void 0 : t.group,
							style: {
								maxWidth: `min(360px, ${(s == null ? void 0 : s.width) * 0.8}px)`,
								maxHeight: `min(240px, ${(s == null ? void 0 : s.height) * 0.8}px)`,
								top: `calc(${t.coord[1] * 100}% + ${r - 16}px)`,
								left: t.coord[0] * 100 + '%',
							},
							initial: { scale: 0.4, opacity: 0 },
							animate: { scale: 1, opacity: 1 },
							exit: { scale: 0.4, opacity: 0 },
							transition: { duration: 0.2 },
							onWheel: (c) => c.stopPropagation(),
							ref: o,
							children:
								!n && t.action !== 'sidebar'
									? g.jsx(qg, { location: t })
									: g.jsx('div', {
											className: 'mapplic-popup-content mapplic-popup-micro',
											children: g.jsxs('div', { className: 'mapplic-popup-title', children: [g.jsx('h4', { children: t.title }), a && g.jsx('h5', { dangerouslySetInnerHTML: { __html: t.about } })] }),
									  }),
					  })
			);
		},
		SC = ({ location: e, active: t, setOffsets: n }) => {
			const r = E((u) => u.hovered),
				i = E((u) => u.setHovered),
				s = E((u) => u.openLocation),
				o = E((u) => u.location),
				a = E((u) => u.dragging),
				l = C.useRef(null),
				c = parseFloat(e.scale) || 1;
			if (
				(C.useEffect(() => {
					l.current && n((u) => ({ ...u, [e.id]: parseFloat(window.getComputedStyle(l.current).getPropertyValue('margin-top')) * c }));
				}, [e.id, e.type, c, n]),
				!(e.disable || !e.coord || e.type === 'hidden'))
			)
				return g.jsxs(Ne.a, {
					ref: l,
					whileTap: { scale: c },
					whileHover: { scale: c * 1.4 },
					whileDrag: { scale: c * 1.2 },
					initial: { scale: c * 0.4, opacity: 0 },
					animate: { scale: c, opacity: 1 },
					exit: { scale: c * 0.4, opacity: 0 },
					transition: { type: 'spring', duration: 0.4 },
					onMouseEnter: () => i(e.id),
					onMouseLeave: () => i(!1),
					className: Je('mapplic-marker', { 'mapplic-highlight': r === e.id, 'mapplic-active': o === e.id, [e.type]: e.type, [e.style]: e.style }),
					style: { top: (e == null ? void 0 : e.coord[1]) * 100 + '%', left: (e == null ? void 0 : e.coord[0]) * 100 + '%', backgroundColor: e.color, zIndex: t ? 101 : 'auto' },
					onClick: () => {
						a || s(e.id);
					},
					children: [
						g.jsx(EC, { type: e.type, color: e.color, thumb: e.thumb }),
						g.jsx('span', { children: e.label }),
						(e == null ? void 0 : e.type) === 'pulse' && g.jsx('div', { className: 'mapplic-marker-pulse' }),
						(e == null ? void 0 : e.type) === 'text' &&
							(e == null ? void 0 : e.title) &&
							g.jsx('span', { className: 'title', style: { color: (e == null ? void 0 : e.color) || 'black', textShadow: '0 0 4px #fff' }, children: e.title }),
					],
				});
		},
		EC = ({ type: e, color: t, thumb: n }) => {
			switch (e) {
				case 'pin1':
					return g.jsx('svg', {
						width: '22px',
						height: '26px',
						viewBox: '0 0 22 26',
						xmlns: 'http://www.w3.org/2000/svg',
						children: g.jsx('path', { fill: t, d: 'M22,11c0-6.1-4.9-11-11-11S0,4.9,0,11c0,5,3.4,9.3,8,10.6l3,4.4l3-4.4C18.6,20.3,22,16,22,11z' }),
					});
				case 'pin2':
					return g.jsxs('svg', {
						width: '21px',
						height: '28px',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 21 28',
						children: [
							g.jsx('path', {
								fill: t,
								d: 'M10.5,0C4.71,0,0,4.71,0,10.5c0,7.75,9.69,16.95,10.1,17.34c0.11,0.11,0.26,0.16,0.4,0.16s0.29-0.05,0.4-0.16C11.31,27.45,21,18.25,21,10.5C21,4.71,16.29,0,10.5,0z',
							}),
							g.jsx('circle', { fill: 'rgba(0, 0, 0, 0.3)', cx: '10.5', cy: '10.5', r: '8' }),
						],
					});
				case 'thumb':
					return g.jsx('img', { src: n, alt: 'marker' });
				default:
					return;
			}
		},
		ny = ({ location: e, layer: t, dragConstraints: n, setTempCoord: r }) => {
			const [i, s] = C.useState(e == null ? void 0 : e.coord),
				[o, a] = C.useState(!1),
				l = E((v) => v.location),
				c = E((v) => v.data.locations),
				u = E((v) => v.setData),
				f = Zn(0),
				d = Zn(0);
			if (
				(C.useEffect(() => {
					s(e == null ? void 0 : e.coord);
				}, [l]),
				!i || (e != null && e.layer && (e == null ? void 0 : e.layer) !== t))
			)
				return;
			const m = (v, p, h) => {
					u({ locations: c.map((P) => (P.id === v ? { ...P, [p]: h } : P)) });
				},
				w = (v) => {
					const p = [Math.round((i[0] + v.x / n.current.offsetWidth) * 1e4) / 1e4, Math.round((i[1] + v.y / n.current.offsetHeight) * 1e4) / 1e4];
					r({ coord: p, latlng: null });
				},
				T = (v) => {
					const p = [Math.round((i[0] + v.x / n.current.offsetWidth) * 1e4) / 1e4, Math.round((i[1] + v.y / n.current.offsetHeight) * 1e4) / 1e4];
					m(e == null ? void 0 : e.id, 'coord', p), s(p), r({});
				},
				j = () => {
					f.set(0), d.set(0);
				};
			return e.id
				? g.jsx(Ne.div, {
						className: 'mapplic-location-drag',
						//style: { x: f, y: d, top: i[1] * 100 + '%', left: i[0] * 100 + '%', cursor: o ? 'grabbing' : 'grab' },
						drag: !0,
						onTapStart: (v) => a(!0),
						onDrag: (v, p) => {
							w(p.offset);
						},
						onDragEnd: (v, p) => {
							a(!1), T(p.offset);
						},
						onTap: j,
						onTapCancel: j,
						dragConstraints: n,
						dragMomentum: !1,
				  })
				: null;
		},
		ry = ({ location: e, layer: t }) => {
			const n = E((u) => u.data),
				r = E((u) => u.setData),
				i = E((u) => u.openLocation),
				s = E((u) => u.setNewLocation),
				o = C.useRef(null),
				a = () => {
					s(!1);
				},
				l = (u) => u.replace(/-/g, ' ').replace(/\b[a-z]/g, (f) => f.toUpperCase()),
				c = () => {
					r({ locations: [{ title: e.title || l(e.id), type: 'hidden', ...e }, ...n.locations] }), s(!1), i(e.id);
				};
			return (e.layer && e.layer !== t) || !e.coord
				? null
				: g.jsxs(Ne.div, {
						className: 'mapplic-tooltip',
						initial: { scale: 0.4, opacity: 0 },
						animate: { scale: 1, opacity: 1 },
						exit: { scale: 0.4, opacity: 0 },
						transition: { duration: 0.2 },
						ref: o,
						style: { maxWidth: '320px', maxHeight: '200px', top: `calc(${e.coord[1] * 100}% + ${0 - 16}px)`, left: e.coord[0] * 100 + '%' },
						children: [
							g.jsxs('div', {
								className: 'mapplic-tooltip-content',
								children: [
									g.jsx('button', { type: 'button', className: 'mapplic-tooltip-close', onClick: a, children: g.jsx(Ki, { size: 12 }) }),
									g.jsx('div', { className: 'mapplic-tooltip-title', children: g.jsx('h5', { children: 'Add location' }) }),
									g.jsxs('div', {
										className: 'mapplic-tooltip-footer',
										children: [
											g.jsx('button', { type: 'button', className: 'mapplic-button-small', style: { backgroundColor: '#9747FF' }, onClick: c, children: g.jsx(Bg, { size: 16 }) }),
											g.jsx('code', { children: e.id }),
										],
									}),
								],
							}),
							g.jsx(CC, {}),
						],
				  });
		},
		CC = () =>
			g.jsx('svg', {
				width: '100%',
				height: '100%',
				style: { position: 'absolute', pointerEvents: 'none' },
				children: g.jsx('defs', {
					children: g.jsxs('pattern', {
						id: 'mapplic-stripe-pattern',
						patternTransform: 'rotate(135)',
						width: '100%',
						height: '2',
						x: '0',
						y: '0',
						patternUnits: 'userSpaceOnUse',
						children: [g.jsx('rect', { x: '0', y: '0', width: '100%', height: '1', fill: 'rgba(151, 71, 255, 0.2)' }), g.jsx('rect', { x: '0', y: '1', width: '100%', height: '1', fill: '#fafafa' })],
					}),
				}),
			}),
		iy = ({ width: e, aspectRatio: t, containerSize: n }) => {
			var p;
			const r = E((h) => h.data.settings),
				i = E((h) => h.hovered),
				s = E((h) => h.transition),
				o = E((h) => h.location),
				a = E((h) => h.layer),
				l = E((h) => h.newLocation),
				c = E((h) => h.estPos),
				u = E((h) => h.getLocationById),
				f = E((h) => h.getSampledLocation),
				d = E((h) => h.displayList);
			E((h) => h.filters), E((h) => h.search);
			const [m, w] = C.useState({}),
				[T, j] = C.useState({}),
				v = C.useRef(null);
			return g.jsx(Ne.div, {
				className: 'mapplic-overlay',
				ref: v,
				style: { aspectRatio: t },
				animate: { width: e || 0 },
				transition: s,
				children: g.jsxs(qn, {
					children: [
						(p = d()) == null ? void 0 : p.map((h) => (!h.layer || h.layer === a) && g.jsx(SC, { location: f(h), setOffsets: w }, h.id)),
						ny && o && g.jsx(ny, { location: u(), layer: a, dragConstraints: v, setTempCoord: j }),
						ry && l && g.jsx(ry, { location: { id: l, ...c[l] }, layer: a }, 'new'),
						g.jsx(ty, { cond: o, location: { ...f(), ...T }, offset: m[o], containerSize: n, layer: a }, 'focused'),
						g.jsx(ty, { cond: r.hoverTooltip && i && i !== o, hover: !0, location: f(u(i)), offset: m[i], layer: a }, 'hovered'),
					],
				}),
			});
		},
		PC = ({ source: e, parentScale: t, active: n = !0 }) => {
			const r = E((u) => u.admin),
				i = E((u) => u.data.settings),
				s = E((u) => u.selectedVector),
				o = E((u) => u.setSelectedVector),
				a = E((u) => u.layer),
				l = C.useRef(null),
				c = 12 / t || 2;
			return n
				? g.jsx('svg', {
						viewBox: `0 0 ${i.mapWidth} ${i.mapHeight}`,
						style: { cursor: 'crosshair', pointerEvents: 'none', position: 'absolute', top: 0, left: 0 },
						ref: l,
						children:
							e == null
								? void 0
								: e
										.filter((u) => u.layer === a && u.id !== s)
										.map((u) =>
											g.jsx(
												u.element,
												{
													points: u.points,
													onClick: (f) => {
														!s && r && (f && f.stopPropagation(), o(u.id));
													},
													style: { pointerEvents: s ? 'none' : 'auto', cursor: 'pointer' },
													stroke: u.endpoint ? 'green' : 'red',
													strokeWidth: c / 10,
													strokeLinejoin: 'round',
													strokeDasharray: u.inaccessible ? c / 5 : 'none',
													fill: u.element !== 'polygon' ? 'none' : 'black',
													fillOpacity: '0.2',
												},
												u.id
											)
										),
				  })
				: null;
		},
		Fo = '#9747FF',
		Vo = 2,
		TC = ({ size: e, element: t, elementRef: n, modifyElement: r, getCursorPos: i, snapTo: s, parentScale: o }) => {
			var L;
			const a = E((S) => S.data.settings),
				l = E((S) => S.dragging),
				c = C.useRef(0),
				u = () => (c.current++, c.current),
				[f, d] = C.useState(!1),
				[m, w] = C.useState(
					(L = t == null ? void 0 : t.points) == null
						? void 0
						: L.split(' ')
								.map((S) => S.split(',').map(Number))
								.map((S) => ({ id: u(), x: S[0], y: S[1] }))
				);
			C.useEffect(() => {
				n.current = { ...t, points: m == null ? void 0 : m.map((S) => `${S.x},${S.y}`).join(' ') };
			}, [t, n, m]);
			const T = (S) => (Array.isArray(S) ? { x: be(S[0], Vo), y: be(S[1], Vo) } : { x: be(S.x, Vo), y: be(S.y, Vo) }),
				j = (S) => {
					const y = e;
					let x = null,
						k = y;
					for (const _ of s) {
						const b = { x: _[0], y: _[1] },
							N = Math.sqrt((S.x - b.x) ** 2 + (S.y - b.y) ** 2);
						N <= y && N < k && ((x = b), (k = N));
					}
					return x || S;
				},
				v = (S, y = m.length) => {
					w((x) => [...x.slice(0, y), { id: u(), ...j(T(S)) }, ...x.slice(y)]);
				},
				p = (S) => {
					const y = m.find((k) => k.id === S.id),
						x = j(T(S));
					if (!y || (x.x === y.x && x.y === y.y)) return !1;
					w((k) => k.map((_) => (_.id === S.id ? { ...S, ...x } : _)));
				},
				h = (S) => {
					w((y) => y.filter((x) => x.id !== S));
				},
				P = (S) => {
					S.stopPropagation(), (t == null ? void 0 : t.element) === 'polyline' && !l && v(i(S));
				},
				R = () => {
					r(t.id, { element: n.current.element === 'polygon' ? 'polyline' : 'polygon' });
				};
			return m
				? g.jsxs('g', {
						style: { pointerEvents: 'auto' },
						children: [
							g.jsx('rect', { onClick: P, style: { pointerEvents: 'auto' }, x: '0', y: '0', width: a.mapWidth, height: a.mapHeight, fill: 'green', opacity: '0' }),
							m == null ? void 0 : m.map((S, y) => (y > 0 ? g.jsx(sy, { i: y, size: e, editing: f, p1: m[y - 1], p2: S, getCursorPos: i, addPoint: v }, S.id) : null)),
							t.element === 'polygon' && g.jsx(sy, { size: e, editing: f, p1: m[0], p2: m[m.length - 1], getCursorPos: i, addPoint: v }),
							m == null ? void 0 : m.map((S, y) => g.jsx(oy, { i: y, point: S, getCursorPos: i, modifyPoint: p, deletePoint: h, toggleType: R, setEditing: d, size: e, parentScale: o }, S.id)),
						],
				  })
				: null;
		},
		LC = (e, t, n) => {
			const r = n.x - t.x,
				i = n.y - t.y;
			if (r === 0) return { x: t.x, y: e.y };
			const s = i / r,
				o = -1 / s,
				a = (s * t.x - o * e.x + e.y - t.y) / (s - o),
				l = o * (a - e.x) + e.y;
			return { x: a, y: l };
		},
		sy = ({ i: e, p1: t, p2: n, size: r, getCursorPos: i, addPoint: s, editing: o }) => {
			const [a, l] = C.useState(null),
				c = (f) => {
					if (!i) return;
					const d = i(f);
					l(LC({ x: d[0], y: d[1] }, t, n));
				},
				u = (f) => {
					f.stopPropagation(), s([a.x, a.y], e), l(null);
				};
			return g.jsxs('g', {
				onMouseMove: c,
				onMouseLeave: () => l(null),
				onMouseDown: u,
				children: [
					g.jsx('line', { x1: t.x, y1: t.y, x2: n.x, y2: n.y, stroke: Fo, strokeWidth: r / 10 }),
					g.jsx('line', { style: { cursor: 'pointer', pointerEvents: 'auto' }, x1: t.x, y1: t.y, x2: n.x, y2: n.y, stroke: Fo, strokeOpacity: 0.1, strokeWidth: (r / 10) * 6 }),
					a && !o && g.jsx(oy, { point: a, size: r }),
				],
			});
		},
		oy = ({ i: e, point: t, modifyPoint: n, deletePoint: r, toggleType: i, size: s, parentScale: o, setEditing: a }) => {
			const l = Zn(0),
				c = Zn(0),
				[u, f] = C.useState(null);
			return g.jsx(Ne.circle, {
				drag: !0,
				dragMomentum: !1,
				onDragStart: () => {
					f(t), a && a(!0);
				},
				onDrag: (d, m) => {
					u && n && (n({ ...t, x: u.x + m.offset.x / o, y: u.y + m.offset.y / o }), l.set(0), c.set(0));
				},
				onDragEnd: (d, m) => {
					if (!n) return;
					const w = [l.get(), c.get()];
					n({ ...t, x: t.x + w[0], y: t.y + w[1] }), l.set(0), c.set(0), f(null), a && a(!1);
				},
				onClick: (d) => {
					d.stopPropagation(), d.detail === 2 && r && u === null ? r(t.id) : e === 0 && u === null && i();
				},
				cx: t.x,
				cy: t.y,
				r: s / 2,
				style: { x: l, y: c, outline: 'none', pointerEvents: 'auto', cursor: 'pointer' },
				stroke: Fo,
				fill: e === 0 ? Fo : 'white',
				strokeWidth: (s / 10) * 2,
			});
		},
		ay = ({ source: e, setSource: t, prefix: n, parentScale: r, active: i = !0 }) => {
			var R;
			const s = E((L) => L.layer),
				o = E((L) => L.selectedVector),
				a = E((L) => L.setSelectedVector),
				l = E((L) => L.getVectorById),
				c = E((L) => L.data.settings),
				u = E((L) => L.dragging),
				f = C.useRef(null),
				d = C.useRef((e == null ? void 0 : e.length) + 1),
				m = 12 / r || 2,
				w = C.useRef(null);
			C.useEffect(() => {
				var L;
				w.current && !o && (P((L = w.current) == null ? void 0 : L.id, w.current), (w.current = null));
			}, [o]),
				C.useEffect(() => {
					const L = (S) => {
						S.key === 'Escape' && (S.preventDefault(), a(null));
					};
					return (
						document.addEventListener('keydown', L),
						() => {
							document.removeEventListener('keydown', L);
						}
					);
				}, [a]);
			const T = (L) => {
					const S = f.current.getBoundingClientRect();
					return [be((L.clientX - S.left) / r), be((L.clientY - S.top) / r)];
				},
				j = () => {
					const L = (y) => e.some((x) => x.id === y);
					let S = n + d.current;
					for (; L(S); ) d.current++, (S = n + d.current);
					return S;
				},
				v = (L) => {
					!u && !o && h(L);
				},
				p = () =>
					e == null
						? void 0
						: e
								.filter((L) => L.layer === s && L.id !== o)
								.map((L) => L.points.split(' ').map((S) => [...S.split(',').map(Number), L.id]))
								.flat(),
				h = (L) => {
					const S = j();
					t([...e, { id: S, layer: s, element: 'polyline', points: T(L).join(',') }]), a(S);
				},
				P = (L, S) => {
					t(e.map((y) => (y.id === L ? { ...y, ...S } : y)));
				};
			return !e || !i
				? null
				: g.jsxs('svg', {
						viewBox: `0 0 ${c.mapWidth} ${c.mapHeight}`,
						style: { cursor: 'crosshair', pointerEvents: 'auto', position: 'absolute', top: 0, left: 0 },
						onClick: v,
						ref: f,
						children: [
							g.jsx('g', {
								children: p().map((L, S) =>
									g.jsx(
										'circle',
										{
											style: { pointerEvents: 'auto', cursor: 'pointer' },
											onClick: (y) => {
												y.stopPropagation(), a(L[2]);
											},
											cx: L[0],
											cy: L[1],
											r: be(m, 2),
											fill: '#000',
											fillOpacity: 0.1,
											strokeWidth: be((m / 10) * 2),
										},
										S
									)
								),
							}),
							((R = l(o)) == null ? void 0 : R.layer) === s && g.jsx(TC, { elementRef: w, size: m, snapTo: p(), element: l(o), getCursorPos: T, modifyElement: P, parentScale: r }),
						],
				  });
		};
	var OC =
			(globalThis && globalThis.__read) ||
			function (e, t) {
				var n = typeof Symbol == 'function' && e[Symbol.iterator];
				if (!n) return e;
				var r = n.call(e),
					i,
					s = [],
					o;
				try {
					for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) s.push(i.value);
				} catch (a) {
					o = { error: a };
				} finally {
					try {
						i && !i.done && (n = r.return) && n.call(r);
					} finally {
						if (o) throw o.error;
					}
				}
				return s;
			},
		jC = function (e) {
			var t = e.split(/ ?; ?/);
			return t.reduce(function (n, r) {
				var i = OC(r.split(/ ?: ?/), 2),
					s = i[0],
					o = i[1];
				return (
					s &&
						o &&
						(n[
							s.replace(/-(\w)/g, function (a, l) {
								return l.toUpperCase();
							})
						] = Number.isNaN(Number(o)) ? o : Number(o)),
					n
				);
			}, {});
		};
	function _C(e) {
		e === void 0 && (e = 6);
		for (var t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', n = '', r = e; r > 0; --r) n += t[Math.round(Math.random() * (t.length - 1))];
		return n;
	}
	var RC = ['br', 'col', 'colgroup', 'dl', 'hr', 'iframe', 'img', 'input', 'link', 'menuitem', 'meta', 'ol', 'param', 'select', 'table', 'tbody', 'tfoot', 'thead', 'tr', 'ul', 'wbr'],
		ly = {
			'accept-charset': 'acceptCharset',
			acceptcharset: 'acceptCharset',
			accesskey: 'accessKey',
			allowfullscreen: 'allowFullScreen',
			autocapitalize: 'autoCapitalize',
			autocomplete: 'autoComplete',
			autocorrect: 'autoCorrect',
			autofocus: 'autoFocus',
			autoplay: 'autoPlay',
			autosave: 'autoSave',
			cellpadding: 'cellPadding',
			cellspacing: 'cellSpacing',
			charset: 'charSet',
			class: 'className',
			classid: 'classID',
			classname: 'className',
			colspan: 'colSpan',
			contenteditable: 'contentEditable',
			contextmenu: 'contextMenu',
			controlslist: 'controlsList',
			crossorigin: 'crossOrigin',
			dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
			datetime: 'dateTime',
			defaultchecked: 'defaultChecked',
			defaultvalue: 'defaultValue',
			enctype: 'encType',
			for: 'htmlFor',
			formmethod: 'formMethod',
			formaction: 'formAction',
			formenctype: 'formEncType',
			formnovalidate: 'formNoValidate',
			formtarget: 'formTarget',
			frameborder: 'frameBorder',
			hreflang: 'hrefLang',
			htmlfor: 'htmlFor',
			httpequiv: 'httpEquiv',
			'http-equiv': 'httpEquiv',
			icon: 'icon',
			innerhtml: 'innerHTML',
			inputmode: 'inputMode',
			itemid: 'itemID',
			itemprop: 'itemProp',
			itemref: 'itemRef',
			itemscope: 'itemScope',
			itemtype: 'itemType',
			keyparams: 'keyParams',
			keytype: 'keyType',
			marginwidth: 'marginWidth',
			marginheight: 'marginHeight',
			maxlength: 'maxLength',
			mediagroup: 'mediaGroup',
			minlength: 'minLength',
			nomodule: 'noModule',
			novalidate: 'noValidate',
			playsinline: 'playsInline',
			radiogroup: 'radioGroup',
			readonly: 'readOnly',
			referrerpolicy: 'referrerPolicy',
			rowspan: 'rowSpan',
			spellcheck: 'spellCheck',
			srcdoc: 'srcDoc',
			srclang: 'srcLang',
			srcset: 'srcSet',
			tabindex: 'tabIndex',
			typemustmatch: 'typeMustMatch',
			usemap: 'useMap',
			accentheight: 'accentHeight',
			'accent-height': 'accentHeight',
			alignmentbaseline: 'alignmentBaseline',
			'alignment-baseline': 'alignmentBaseline',
			allowreorder: 'allowReorder',
			arabicform: 'arabicForm',
			'arabic-form': 'arabicForm',
			attributename: 'attributeName',
			attributetype: 'attributeType',
			autoreverse: 'autoReverse',
			basefrequency: 'baseFrequency',
			baselineshift: 'baselineShift',
			'baseline-shift': 'baselineShift',
			baseprofile: 'baseProfile',
			calcmode: 'calcMode',
			capheight: 'capHeight',
			'cap-height': 'capHeight',
			clippath: 'clipPath',
			'clip-path': 'clipPath',
			clippathunits: 'clipPathUnits',
			cliprule: 'clipRule',
			'clip-rule': 'clipRule',
			colorinterpolation: 'colorInterpolation',
			'color-interpolation': 'colorInterpolation',
			colorinterpolationfilters: 'colorInterpolationFilters',
			'color-interpolation-filters': 'colorInterpolationFilters',
			colorprofile: 'colorProfile',
			'color-profile': 'colorProfile',
			colorrendering: 'colorRendering',
			'color-rendering': 'colorRendering',
			contentscripttype: 'contentScriptType',
			contentstyletype: 'contentStyleType',
			diffuseconstant: 'diffuseConstant',
			dominantbaseline: 'dominantBaseline',
			'dominant-baseline': 'dominantBaseline',
			edgemode: 'edgeMode',
			enablebackground: 'enableBackground',
			'enable-background': 'enableBackground',
			externalresourcesrequired: 'externalResourcesRequired',
			fillopacity: 'fillOpacity',
			'fill-opacity': 'fillOpacity',
			fillrule: 'fillRule',
			'fill-rule': 'fillRule',
			filterres: 'filterRes',
			filterunits: 'filterUnits',
			floodopacity: 'floodOpacity',
			'flood-opacity': 'floodOpacity',
			floodcolor: 'floodColor',
			'flood-color': 'floodColor',
			fontfamily: 'fontFamily',
			'font-family': 'fontFamily',
			fontsize: 'fontSize',
			'font-size': 'fontSize',
			fontsizeadjust: 'fontSizeAdjust',
			'font-size-adjust': 'fontSizeAdjust',
			fontstretch: 'fontStretch',
			'font-stretch': 'fontStretch',
			fontstyle: 'fontStyle',
			'font-style': 'fontStyle',
			fontvariant: 'fontVariant',
			'font-variant': 'fontVariant',
			fontweight: 'fontWeight',
			'font-weight': 'fontWeight',
			glyphname: 'glyphName',
			'glyph-name': 'glyphName',
			glyphorientationhorizontal: 'glyphOrientationHorizontal',
			'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
			glyphorientationvertical: 'glyphOrientationVertical',
			'glyph-orientation-vertical': 'glyphOrientationVertical',
			glyphref: 'glyphRef',
			gradienttransform: 'gradientTransform',
			gradientunits: 'gradientUnits',
			horizadvx: 'horizAdvX',
			'horiz-adv-x': 'horizAdvX',
			horizoriginx: 'horizOriginX',
			'horiz-origin-x': 'horizOriginX',
			imagerendering: 'imageRendering',
			'image-rendering': 'imageRendering',
			kernelmatrix: 'kernelMatrix',
			kernelunitlength: 'kernelUnitLength',
			keypoints: 'keyPoints',
			keysplines: 'keySplines',
			keytimes: 'keyTimes',
			lengthadjust: 'lengthAdjust',
			letterspacing: 'letterSpacing',
			'letter-spacing': 'letterSpacing',
			lightingcolor: 'lightingColor',
			'lighting-color': 'lightingColor',
			limitingconeangle: 'limitingConeAngle',
			markerend: 'markerEnd',
			'marker-end': 'markerEnd',
			markerheight: 'markerHeight',
			markermid: 'markerMid',
			'marker-mid': 'markerMid',
			markerstart: 'markerStart',
			'marker-start': 'markerStart',
			markerunits: 'markerUnits',
			markerwidth: 'markerWidth',
			maskcontentunits: 'maskContentUnits',
			maskunits: 'maskUnits',
			numoctaves: 'numOctaves',
			overlineposition: 'overlinePosition',
			'overline-position': 'overlinePosition',
			overlinethickness: 'overlineThickness',
			'overline-thickness': 'overlineThickness',
			paintorder: 'paintOrder',
			'paint-order': 'paintOrder',
			'panose-1': 'panose1',
			pathlength: 'pathLength',
			patterncontentunits: 'patternContentUnits',
			patterntransform: 'patternTransform',
			patternunits: 'patternUnits',
			pointerevents: 'pointerEvents',
			'pointer-events': 'pointerEvents',
			pointsatx: 'pointsAtX',
			pointsaty: 'pointsAtY',
			pointsatz: 'pointsAtZ',
			preservealpha: 'preserveAlpha',
			preserveaspectratio: 'preserveAspectRatio',
			primitiveunits: 'primitiveUnits',
			refx: 'refX',
			refy: 'refY',
			renderingintent: 'renderingIntent',
			'rendering-intent': 'renderingIntent',
			repeatcount: 'repeatCount',
			repeatdur: 'repeatDur',
			requiredextensions: 'requiredExtensions',
			requiredfeatures: 'requiredFeatures',
			shaperendering: 'shapeRendering',
			'shape-rendering': 'shapeRendering',
			specularconstant: 'specularConstant',
			specularexponent: 'specularExponent',
			spreadmethod: 'spreadMethod',
			startoffset: 'startOffset',
			stddeviation: 'stdDeviation',
			stitchtiles: 'stitchTiles',
			stopcolor: 'stopColor',
			'stop-color': 'stopColor',
			stopopacity: 'stopOpacity',
			'stop-opacity': 'stopOpacity',
			strikethroughposition: 'strikethroughPosition',
			'strikethrough-position': 'strikethroughPosition',
			strikethroughthickness: 'strikethroughThickness',
			'strikethrough-thickness': 'strikethroughThickness',
			strokedasharray: 'strokeDasharray',
			'stroke-dasharray': 'strokeDasharray',
			strokedashoffset: 'strokeDashoffset',
			'stroke-dashoffset': 'strokeDashoffset',
			strokelinecap: 'strokeLinecap',
			'stroke-linecap': 'strokeLinecap',
			strokelinejoin: 'strokeLinejoin',
			'stroke-linejoin': 'strokeLinejoin',
			strokemiterlimit: 'strokeMiterlimit',
			'stroke-miterlimit': 'strokeMiterlimit',
			strokewidth: 'strokeWidth',
			'stroke-width': 'strokeWidth',
			strokeopacity: 'strokeOpacity',
			'stroke-opacity': 'strokeOpacity',
			suppresscontenteditablewarning: 'suppressContentEditableWarning',
			suppresshydrationwarning: 'suppressHydrationWarning',
			surfacescale: 'surfaceScale',
			systemlanguage: 'systemLanguage',
			tablevalues: 'tableValues',
			targetx: 'targetX',
			targety: 'targetY',
			textanchor: 'textAnchor',
			'text-anchor': 'textAnchor',
			textdecoration: 'textDecoration',
			'text-decoration': 'textDecoration',
			textlength: 'textLength',
			textrendering: 'textRendering',
			'text-rendering': 'textRendering',
			underlineposition: 'underlinePosition',
			'underline-position': 'underlinePosition',
			underlinethickness: 'underlineThickness',
			'underline-thickness': 'underlineThickness',
			unicodebidi: 'unicodeBidi',
			'unicode-bidi': 'unicodeBidi',
			unicoderange: 'unicodeRange',
			'unicode-range': 'unicodeRange',
			unitsperem: 'unitsPerEm',
			'units-per-em': 'unitsPerEm',
			unselectable: 'unselectable',
			valphabetic: 'vAlphabetic',
			'v-alphabetic': 'vAlphabetic',
			vectoreffect: 'vectorEffect',
			'vector-effect': 'vectorEffect',
			vertadvy: 'vertAdvY',
			'vert-adv-y': 'vertAdvY',
			vertoriginx: 'vertOriginX',
			'vert-origin-x': 'vertOriginX',
			vertoriginy: 'vertOriginY',
			'vert-origin-y': 'vertOriginY',
			vhanging: 'vHanging',
			'v-hanging': 'vHanging',
			videographic: 'vIdeographic',
			'v-ideographic': 'vIdeographic',
			viewbox: 'viewBox',
			viewtarget: 'viewTarget',
			vmathematical: 'vMathematical',
			'v-mathematical': 'vMathematical',
			wordspacing: 'wordSpacing',
			'word-spacing': 'wordSpacing',
			writingmode: 'writingMode',
			'writing-mode': 'writingMode',
			xchannelselector: 'xChannelSelector',
			xheight: 'xHeight',
			'x-height': 'xHeight',
			xlinkactuate: 'xlinkActuate',
			'xlink:actuate': 'xlinkActuate',
			xlinkarcrole: 'xlinkArcrole',
			'xlink:arcrole': 'xlinkArcrole',
			xlinkhref: 'xlinkHref',
			'xlink:href': 'xlinkHref',
			xlinkrole: 'xlinkRole',
			'xlink:role': 'xlinkRole',
			xlinkshow: 'xlinkShow',
			'xlink:show': 'xlinkShow',
			xlinktitle: 'xlinkTitle',
			'xlink:title': 'xlinkTitle',
			xlinktype: 'xlinkType',
			'xlink:type': 'xlinkType',
			xmlbase: 'xmlBase',
			'xml:base': 'xmlBase',
			xmllang: 'xmlLang',
			'xml:lang': 'xmlLang',
			'xml:space': 'xmlSpace',
			xmlnsxlink: 'xmlnsXlink',
			'xmlns:xlink': 'xmlnsXlink',
			xmlspace: 'xmlSpace',
			ychannelselector: 'yChannelSelector',
			zoomandpan: 'zoomAndPan',
			onblur: 'onBlur',
			onchange: 'onChange',
			onclick: 'onClick',
			oncontextmenu: 'onContextMenu',
			ondoubleclick: 'onDoubleClick',
			ondrag: 'onDrag',
			ondragend: 'onDragEnd',
			ondragenter: 'onDragEnter',
			ondragexit: 'onDragExit',
			ondragleave: 'onDragLeave',
			ondragover: 'onDragOver',
			ondragstart: 'onDragStart',
			ondrop: 'onDrop',
			onerror: 'onError',
			onfocus: 'onFocus',
			oninput: 'onInput',
			oninvalid: 'onInvalid',
			onkeydown: 'onKeyDown',
			onkeypress: 'onKeyPress',
			onkeyup: 'onKeyUp',
			onload: 'onLoad',
			onmousedown: 'onMouseDown',
			onmouseenter: 'onMouseEnter',
			onmouseleave: 'onMouseLeave',
			onmousemove: 'onMouseMove',
			onmouseout: 'onMouseOut',
			onmouseover: 'onMouseOver',
			onmouseup: 'onMouseUp',
			onscroll: 'onScroll',
			onsubmit: 'onSubmit',
			ontouchcancel: 'onTouchCancel',
			ontouchend: 'onTouchEnd',
			ontouchmove: 'onTouchMove',
			ontouchstart: 'onTouchStart',
			onwheel: 'onWheel',
		},
		zo =
			(globalThis && globalThis.__assign) ||
			function () {
				return (
					(zo =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++) {
								t = arguments[n];
								for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
							}
							return e;
						}),
					zo.apply(this, arguments)
				);
			},
		uy =
			(globalThis && globalThis.__read) ||
			function (e, t) {
				var n = typeof Symbol == 'function' && e[Symbol.iterator];
				if (!n) return e;
				var r = n.call(e),
					i,
					s = [],
					o;
				try {
					for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) s.push(i.value);
				} catch (a) {
					o = { error: a };
				} finally {
					try {
						i && !i.done && (n = r.return) && n.call(r);
					} finally {
						if (o) throw o.error;
					}
				}
				return s;
			},
		cy =
			(globalThis && globalThis.__spreadArray) ||
			function (e, t, n) {
				if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++) (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
				return e.concat(s || Array.prototype.slice.call(t));
			};
	function bC(e, t) {
		var n = { key: t };
		if (e instanceof Element) {
			var r = e.getAttribute('class');
			r && (n.className = r),
				cy([], uy(e.attributes), !1).forEach(function (i) {
					switch (i.name) {
						case 'class':
							break;
						case 'style':
							n[i.name] = jC(i.value);
							break;
						case 'allowfullscreen':
						case 'allowpaymentrequest':
						case 'async':
						case 'autofocus':
						case 'autoplay':
						case 'checked':
						case 'controls':
						case 'default':
						case 'defer':
						case 'disabled':
						case 'formnovalidate':
						case 'hidden':
						case 'ismap':
						case 'itemscope':
						case 'loop':
						case 'multiple':
						case 'muted':
						case 'nomodule':
						case 'novalidate':
						case 'open':
						case 'readonly':
						case 'required':
						case 'reversed':
						case 'selected':
						case 'typemustmatch':
							n[ly[i.name] || i.name] = !0;
							break;
						default:
							n[ly[i.name] || i.name] = i.value;
					}
				});
		}
		return n;
	}
	function DC(e, t, n) {
		var r = cy([], uy(e), !1)
			.map(function (i, s) {
				return Ic(i, zo(zo({}, n), { index: s, level: t + 1 }));
			})
			.filter(Boolean);
		return r.length ? r : null;
	}
	function AC(e) {
		return /[a-z]+[A-Z]+[a-z]+/.test(e) ? e : e.toLowerCase();
	}
	function Ic(e, t) {
		var n;
		if ((t === void 0 && (t = {}), !e || !(e instanceof Node))) return null;
		var r = t.actions,
			i = r === void 0 ? [] : r,
			s = t.index,
			o = s === void 0 ? 0 : s,
			a = t.level,
			l = a === void 0 ? 0 : a,
			c = t.randomKey,
			u = e,
			f = ''.concat(l, '-').concat(o),
			d = [];
		if (
			(c && l === 0 && (f = ''.concat(_C(), '-').concat(f)),
			Array.isArray(i) &&
				i.forEach(function (T) {
					T.condition(u, f, l) && (typeof T.pre == 'function' && ((u = T.pre(u, f, l)), u instanceof Node || (u = e)), typeof T.post == 'function' && d.push(T.post(u, f, l)));
				}),
			d.length)
		)
			return d;
		switch (u.nodeType) {
			case 1:
				return C.createElement(AC(u.nodeName), bC(u, f), DC(u.childNodes, l, t));
			case 3: {
				var m = ((n = u.nodeValue) === null || n === void 0 ? void 0 : n.toString()) || '';
				if (/^\s+$/.test(m) && !/[\u00A0\u202F]/.test(m)) return null;
				if (!u.parentNode) return m;
				var w = u.parentNode.nodeName.toLowerCase();
				return RC.includes(w) ? (/\S/.test(m) && console.warn("A textNode is not allowed inside '".concat(w, `'. Your text "`).concat(m, '" will be ignored')), null) : m;
			}
			case 8:
				return null;
			default:
				return null;
		}
	}
	function MC(e, t) {
		if ((t === void 0 && (t = {}), !e || typeof e != 'string')) return null;
		var n = t.nodeOnly,
			r = n === void 0 ? !1 : n,
			i = t.selector,
			s = i === void 0 ? 'body > *' : i,
			o = t.type,
			a = o === void 0 ? 'text/html' : o;
		try {
			var l = new DOMParser(),
				c = l.parseFromString(e, a),
				u = c.querySelector(s);
			if (!(u instanceof Node)) throw new TypeError('Error parsing input');
			return r ? u : Ic(u, t);
		} catch {}
		return null;
	}
	function fy(e, t) {
		return t === void 0 && (t = {}), typeof e == 'string' ? MC(e, t) : e instanceof Node ? Ic(e, t) : null;
	}
	var NC = Object.defineProperty,
		IC = (e, t, n) => (t in e ? NC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
		Pt = (e, t, n) => (IC(e, typeof t != 'symbol' ? t + '' : t, n), n),
		dy = 'react-inlinesvg',
		py = 10,
		ce = { IDLE: 'idle', LOADING: 'loading', LOADED: 'loaded', FAILED: 'failed', READY: 'ready', UNSUPPORTED: 'unsupported' };
	function Bo() {
		return !!(typeof window < 'u' && window.document && window.document.createElement);
	}
	function FC() {
		return zC() && typeof window < 'u' && window !== null;
	}
	async function hy(e, t) {
		const n = await fetch(e, t),
			r = n.headers.get('content-type'),
			[i] = (r ?? '').split(/ ?; ?/);
		if (n.status > 299) throw new Error('Not found');
		if (!['image/svg+xml', 'text/plain'].some((s) => i.includes(s))) throw new Error(`Content type isn't valid: ${i}`);
		return n.text();
	}
	function VC(e = 1) {
		return new Promise((t) => {
			setTimeout(t, e * 1e3);
		});
	}
	function zC() {
		if (!document) return !1;
		const e = document.createElement('div');
		e.innerHTML = '<svg />';
		const t = e.firstChild;
		return !!t && t.namespaceURI === 'http://www.w3.org/2000/svg';
	}
	function BC(e) {
		return e[Math.floor(Math.random() * e.length)];
	}
	function $C(e) {
		const t = 'abcdefghijklmnopqrstuvwxyz',
			n = '1234567890',
			r = `${t}${t.toUpperCase()}${n}`;
		let i = '';
		for (let s = 0; s < e; s++) i += BC(r);
		return i;
	}
	function WC(e, ...t) {
		const n = {};
		for (const r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
		return n;
	}
	var UC = class {
			constructor() {
				Pt(this, 'cacheApi'), Pt(this, 'cacheStore'), Pt(this, 'subscribers', []), Pt(this, 'isReady', !1), (this.cacheStore = new Map());
				let e = dy,
					t = !1;
				Bo() && ((e = window.REACT_INLINESVG_CACHE_NAME ?? dy), (t = !!window.REACT_INLINESVG_PERSISTENT_CACHE)),
					t
						? caches.open(e).then((n) => {
								(this.cacheApi = n), (this.isReady = !0), this.subscribers.forEach((r) => r());
						  })
						: (this.isReady = !0);
			}
			onReady(e) {
				this.isReady ? e() : this.subscribers.push(e);
			}
			async get(e, t) {
				var n;
				return await (this.cacheApi ? this.fetchAndAddToPersistentCache(e, t) : this.fetchAndAddToInternalCache(e, t)), ((n = this.cacheStore.get(e)) == null ? void 0 : n.content) ?? '';
			}
			set(e, t) {
				this.cacheStore.set(e, t);
			}
			isCached(e) {
				var t;
				return ((t = this.cacheStore.get(e)) == null ? void 0 : t.status) === ce.LOADED;
			}
			async fetchAndAddToInternalCache(e, t) {
				const n = this.cacheStore.get(e);
				if ((n == null ? void 0 : n.status) === ce.LOADING) {
					await this.handleLoading(e, async () => {
						this.cacheStore.set(e, { content: '', status: ce.IDLE }), await this.fetchAndAddToInternalCache(e, t);
					});
					return;
				}
				if (!(n != null && n.content)) {
					this.cacheStore.set(e, { content: '', status: ce.LOADING });
					try {
						const r = await hy(e, t);
						this.cacheStore.set(e, { content: r, status: ce.LOADED });
					} catch (r) {
						throw (this.cacheStore.set(e, { content: '', status: ce.FAILED }), r);
					}
				}
			}
			async fetchAndAddToPersistentCache(e, t) {
				var i, s, o;
				const n = this.cacheStore.get(e);
				if ((n == null ? void 0 : n.status) === ce.LOADED) return;
				if ((n == null ? void 0 : n.status) === ce.LOADING) {
					await this.handleLoading(e, async () => {
						this.cacheStore.set(e, { content: '', status: ce.IDLE }), await this.fetchAndAddToPersistentCache(e, t);
					});
					return;
				}
				this.cacheStore.set(e, { content: '', status: ce.LOADING });
				const r = await ((i = this.cacheApi) == null ? void 0 : i.match(e));
				if (r) {
					const a = await r.text();
					this.cacheStore.set(e, { content: a, status: ce.LOADED });
					return;
				}
				try {
					await ((s = this.cacheApi) == null ? void 0 : s.add(new Request(e, t)));
					const a = await ((o = this.cacheApi) == null ? void 0 : o.match(e)),
						l = (await (a == null ? void 0 : a.text())) ?? '';
					this.cacheStore.set(e, { content: l, status: ce.LOADED });
				} catch (a) {
					throw (this.cacheStore.set(e, { content: '', status: ce.FAILED }), a);
				}
			}
			async handleLoading(e, t) {
				var r;
				let n = 0;
				for (; ((r = this.cacheStore.get(e)) == null ? void 0 : r.status) === ce.LOADING && n < py; ) await VC(0.1), (n += 1);
				n >= py && (await t());
			}
			keys() {
				return [...this.cacheStore.keys()];
			}
			data() {
				return [...this.cacheStore.entries()].map(([e, t]) => ({ [e]: t }));
			}
			async delete(e) {
				this.cacheApi && (await this.cacheApi.delete(e)), this.cacheStore.delete(e);
			}
			async clear() {
				if (this.cacheApi) {
					const e = await this.cacheApi.keys();
					for (const t of e) await this.cacheApi.delete(t);
				}
				this.cacheStore.clear();
			}
		},
		Vr,
		my = class extends C.PureComponent {
			constructor(e) {
				super(e),
					Pt(this, 'hash'),
					Pt(this, 'isActive', !1),
					Pt(this, 'isInitialized', !1),
					Pt(this, 'fetchContent', async () => {
						const { fetchOptions: t, src: n } = this.props,
							r = await hy(n, t);
						this.handleLoad(r);
					}),
					Pt(this, 'handleError', (t) => {
						const { onError: n } = this.props,
							r = t.message === 'Browser does not support SVG' ? ce.UNSUPPORTED : ce.FAILED;
						this.isActive &&
							this.setState({ status: r }, () => {
								typeof n == 'function' && n(t);
							});
					}),
					Pt(this, 'handleLoad', (t, n = !1) => {
						this.isActive && this.setState({ content: t, isCached: n, status: ce.LOADED }, this.getElement);
					}),
					(this.state = { content: '', element: null, isCached: !!e.cacheRequests && Vr.isCached(e.src), status: ce.IDLE }),
					(this.hash = e.uniqueHash ?? $C(8));
			}
			componentDidMount() {
				if (((this.isActive = !0), !Bo() || this.isInitialized)) return;
				const { status: e } = this.state,
					{ src: t } = this.props;
				try {
					if (e === ce.IDLE) {
						if (!FC()) throw new Error('Browser does not support SVG');
						if (!t) throw new Error('Missing src');
						this.load();
					}
				} catch (n) {
					this.handleError(n);
				}
				this.isInitialized = !0;
			}
			componentDidUpdate(e, t) {
				if (!Bo()) return;
				const { isCached: n, status: r } = this.state,
					{ description: i, onLoad: s, src: o, title: a } = this.props;
				if ((t.status !== ce.READY && r === ce.READY && s && s(o, n), e.src !== o)) {
					if (!o) {
						this.handleError(new Error('Missing src'));
						return;
					}
					this.load();
				}
				(e.title !== a || e.description !== i) && this.getElement();
			}
			componentWillUnmount() {
				this.isActive = !1;
			}
			getElement() {
				try {
					const e = this.getNode(),
						t = fy(e);
					if (!t || !C.isValidElement(t)) throw new Error('Could not convert the src to a React element');
					this.setState({ element: t, status: ce.READY });
				} catch (e) {
					this.handleError(new Error(e.message));
				}
			}
			getNode() {
				const { description: e, title: t } = this.props;
				try {
					const n = this.processSVG(),
						r = fy(n, { nodeOnly: !0 });
					if (!r || !(r instanceof SVGSVGElement)) throw new Error('Could not convert the src to a DOM Node');
					const i = this.updateSVGAttributes(r);
					if (e) {
						const s = i.querySelector('desc');
						s != null && s.parentNode && s.parentNode.removeChild(s);
						const o = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
						(o.innerHTML = e), i.prepend(o);
					}
					if (typeof t < 'u') {
						const s = i.querySelector('title');
						if ((s != null && s.parentNode && s.parentNode.removeChild(s), t)) {
							const o = document.createElementNS('http://www.w3.org/2000/svg', 'title');
							(o.innerHTML = t), i.prepend(o);
						}
					}
					return i;
				} catch (n) {
					return this.handleError(n);
				}
			}
			load() {
				this.isActive &&
					this.setState({ content: '', element: null, isCached: !1, status: ce.LOADING }, async () => {
						const { cacheRequests: e, fetchOptions: t, src: n } = this.props,
							r = /^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(n);
						let i;
						if ((r ? (i = r[1] ? window.atob(r[2]) : decodeURIComponent(r[2])) : n.includes('<svg') && (i = n), i)) {
							this.handleLoad(i);
							return;
						}
						try {
							if (e) {
								const s = await Vr.get(n, t);
								this.handleLoad(s, !0);
							} else await this.fetchContent();
						} catch (s) {
							this.handleError(s);
						}
					});
			}
			processSVG() {
				const { content: e } = this.state,
					{ preProcessor: t } = this.props;
				return t ? t(e) : e;
			}
			updateSVGAttributes(e) {
				const { baseURL: t = '', uniquifyIDs: n } = this.props,
					r = ['id', 'href', 'xlink:href', 'xlink:role', 'xlink:arcrole'],
					i = ['href', 'xlink:href'],
					s = (o, a) => i.includes(o) && (a ? !a.includes('#') : !1);
				return (
					n &&
						[...e.children].forEach((o) => {
							var a;
							if ((a = o.attributes) != null && a.length) {
								const l = Object.values(o.attributes).map((c) => {
									const u = c,
										f = /url\((.*?)\)/.exec(c.value);
									return f != null && f[1] && (u.value = c.value.replace(f[0], `url(${t}${f[1]}__${this.hash})`)), u;
								});
								r.forEach((c) => {
									const u = l.find((f) => f.name === c);
									u && !s(c, u.value) && (u.value = `${u.value}__${this.hash}`);
								});
							}
							return o.children.length ? this.updateSVGAttributes(o) : o;
						}),
					e
				);
			}
			render() {
				const { element: e, status: t } = this.state,
					{ children: n = null, innerRef: r, loader: i = null } = this.props,
					s = WC(
						this.props,
						'baseURL',
						'cacheRequests',
						'children',
						'description',
						'fetchOptions',
						'innerRef',
						'loader',
						'onError',
						'onLoad',
						'preProcessor',
						'src',
						'title',
						'uniqueHash',
						'uniquifyIDs'
					);
				return Bo() ? (e ? C.cloneElement(e, { ref: r, ...s }) : [ce.UNSUPPORTED, ce.FAILED].includes(t) ? n : i) : i;
			}
		};
	Pt(my, 'defaultProps', { cacheRequests: !0, uniquifyIDs: !1 });
	function HC(e) {
		Vr || (Vr = new UC());
		const { loader: t } = e,
			n = C.useRef(!1),
			[r, i] = C.useState(Vr.isReady);
		return (
			C.useEffect(() => {
				n.current ||
					(Vr.onReady(() => {
						i(!0);
					}),
					(n.current = !0));
			}, []),
			r ? g.jsx(my, { ...e }) : t
		);
	}
	const GC = I.lazy(() => No(() => Promise.resolve().then(() => HP), void 0, (Zt && Zt.src) || new URL('mapplic.js', document.baseURI).href)),
		gy = ({ parentScale: e }) => {
			const t = E((u) => u.data),
				n = E((u) => u.setData),
				r = E((u) => u.data.settings),
				i = E((u) => u.layer),
				s = E((u) => u.data.layers),
				o = E((u) => u.setLatLonCache),
				a = E((u) => u.routesEditing);
			E((u) => u.layer),
				C.useEffect(() => {
					o();
				}, [r == null ? void 0 : r.geo, r == null ? void 0 : r.extent, r.mapWidth, o]);
			const l = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } },
				c = () => (r.zoom ? { width: r.mapWidth + 'px', height: r.mapHeight + 'px' } : {});
			return g.jsx(qn, {
				mode: 'wait',
				children: s.map(
					(u) =>
						u.id === i &&
						g.jsxs(
							Ne.div,
							{
								className: 'mapplic-layer',
								style: c(),
								...l,
								children: [
									KE(u.file) === 'svg' ? g.jsx(KC, { layer: u }) : g.jsx('img', { className: 'mapImage', loading: 'lazy', src: u.file, alt: u.name }),
									ay && g.jsx(ay, { source: (t == null ? void 0 : t.routes) || [], setSource: (f) => n({ routes: f }), prefix: 'path_', parentScale: e, active: a }),
									g.jsx(PC, { source: t == null ? void 0 : t.routes, parentScale: e, active: a }),
									r.wayfinding && g.jsx(C.Suspense, { fallback: null, children: g.jsx(GC, { layer: u.id }) }),
								],
							},
							u.id
						)
				),
			});
		},
		KC = ({ layer: e, ...t }) => {
			const n = E((k) => k.csv),
				r = E((k) => k.search),
				i = E((k) => k.admin),
				s = E((k) => k.filters),
				o = E((k) => k.newLocation),
				a = E((k) => k.dragging),
				l = E((k) => k.setEstPos),
				c = E((k) => k.displayList),
				u = E((k) => k.getFilterCount),
				f = E((k) => k.getLocationById),
				d = E((k) => k.getSampledLocation),
				m = E((k) => k.data.settings),
				w = E((k) => k.data.locations),
				T = E((k) => k.data.layers),
				j = E((k) => k.hovered),
				v = E((k) => k.setHovered),
				p = E((k) => k.openLocation),
				h = E((k) => k.location),
				P = C.useRef(null),
				R = (k) => {
					if (!k) return;
					const _ = k == null ? void 0 : k.closest('[id^=MLOC]');
					_ && (_ == null || _.appendChild(k)), k == null || k.classList.add('mapplic-active');
				};
			C.useEffect(() => {
				P.current && (P.current.querySelectorAll('.mapplic-active').forEach((k) => k.classList.remove('mapplic-active')), h && R(P.current.getElementById(h)));
			}, [h]),
				C.useEffect(() => {
					var k;
					P.current &&
						(P.current.querySelectorAll('.mapplic-highlight').forEach((_) => _.classList.remove('mapplic-highlight')),
						j && ((k = P.current.getElementById(j)) == null || k.classList.add('mapplic-highlight')));
				}, [j]),
				C.useEffect(() => {
					P.current && (P.current.querySelectorAll('.mapplic-filtered').forEach((k) => k.classList.remove('mapplic-filtered')), L());
				}, [r, s, n]),
				C.useEffect(() => {
					var k;
					P.current &&
						i &&
						(P.current.querySelectorAll('.mapplic-new-location').forEach((_) => _.classList.remove('mapplic-new-location')),
						o && ((k = P.current.getElementById(o)) == null || k.classList.add('mapplic-new-location')));
				}, [i, o]),
				C.useEffect(() => {
					var k;
					(k = P.current) == null ||
						k.querySelectorAll('[id^=MLOC] > *').forEach((_) => {
							y(_);
						});
				}, [w, T, n]);
			const L = () => {
					(r || u() > 0) &&
						c().forEach((k) => {
							var _;
							(_ = P.current.getElementById(k.id)) == null || _.classList.add('mapplic-filtered');
						});
				},
				S = () => {
					let k = {};
					P.current.querySelectorAll('[id^=MLOC] > *').forEach((_) => {
						if (!_.id || typeof _.getBBox != 'function') return !1;
						const b = _ == null ? void 0 : _.getBBox(),
							N = _.getAttribute('data-name'),
							$ = {
								coord: [be((b.x + b.width / 2) / m.mapWidth, 4), be((b.y + b.height / 2) / m.mapHeight, 4)],
								zoom: be(Math.min(m.mapWidth / (b.width + 40), m.mapHeight / (b.height + 40)), 4),
								layer: e.id,
								...(N && { title: N }),
							};
						(k = { ...k, [_.id]: $ }), y(_);
					}),
						L(),
						l(k);
				},
				y = (k) => {
					k.setAttribute('class', e.style || '');
					const _ = f(k.id);
					if (!_.id) return;
					const b = d(_);
					b.disable || (b.color && k.setAttribute('fill', b.color), b.style && k.classList.add(b.style), h === k.id && R(k));
				},
				x = (k) => {
					var _;
					return (_ = k.closest('*[id^=MLOC] > *[id]')) == null ? void 0 : _.id;
				};
			return g.jsx(HC, {
				...t,
				width: m.mapWidth,
				height: m.mapHeight,
				innerRef: P,
				src: e.file,
				onClick: (k) => {
					a || p(x(k.target));
				},
				onMouseMove: (k) => v(x(k.target)),
				onTouchStart: (k) => v(x(k.target)),
				onMouseOut: () => v(!1),
				onTouchEnd: () => v(!1),
				onLoad: () => S(),
			});
		},
		YC = ({ container: e, containerSize: t, aspectRatio: n }) => {
			const r = E((O) => O.data.settings),
				i = E((O) => O.pos),
				s = E((O) => O.setPos),
				o = E((O) => O.target),
				a = E((O) => O.transition),
				l = E((O) => O.setTransition),
				c = E((O) => O.dragging),
				u = E((O) => O.setDragging),
				f = E((O) => O.offset),
				d = E((O) => O.setContainerMessage),
				[m, w] = C.useState(!1),
				T = C.useRef(),
				j = ES(),
				[v, p] = C.useState(null),
				[h, P] = C.useState({ scale: 1, x: 0, y: 0 }),
				R = Zn(0),
				L = Zn(0),
				S = Zn(1);
			C.useEffect(() => {
				N(i.scale, i.x, i.y, { duration: 0 });
			}, [t]),
				C.useEffect(() => {
					const O = 0.5 + f.h / (t == null ? void 0 : t.height) / 2;
					N(o.scale, o.x, o.y, a, O ? [0.5, O] : void 0);
				}, [o, f.h]);
			const y = C.useMemo(
					() => be(Math.min((t == null ? void 0 : t.height) / r.mapHeight, (t == null ? void 0 : t.width) / r.mapWidth), 4),
					[t == null ? void 0 : t.height, t == null ? void 0 : t.width, r.mapHeight, r.mapWidth]
				),
				x = (O = i.scale) => be(Math.min(Math.max(O, 1), r.maxZoom), 4),
				k = (O = h.scale) => {
					const W = Math.max(O === y ? 0 : t == null ? void 0 : t.width, (t == null ? void 0 : t.width) - r.mapWidth * O) / 2,
						G = Math.max(O === y ? 0 : t == null ? void 0 : t.height, (t == null ? void 0 : t.height) - r.mapHeight * O) / 2;
					return {
						top: Math.round((t == null ? void 0 : t.height) - r.mapHeight * O - G),
						bottom: Math.round(G),
						left: Math.round((t == null ? void 0 : t.width) - r.mapWidth * O - W),
						right: Math.round(W),
					};
				},
				_ = (O = h.x, W = h.y, G = h.scale, K = [0.5, 0.5]) => ({
					scale: G / y,
					x: ((t == null ? void 0 : t.width) * K[0] - O) / (r.mapWidth * G),
					y: ((t == null ? void 0 : t.height) * K[1] - W) / (r.mapHeight * G),
				}),
				b = (O = i.x, W = i.y, G = i.scale, K = [0.5, 0.5]) => ({
					scale: G * y,
					x: Math.round((t == null ? void 0 : t.width) * K[0] - O * r.mapWidth * G * y),
					y: Math.round((t == null ? void 0 : t.height) * K[1] - W * r.mapHeight * G * y),
				}),
				N = (O = i.scale, W = i.x, G = i.y, K = { duration: 0.4 }, X = [0.5, 0.5]) => {
					const J = b(W, G, x(O), X),
						fe = k(J.scale),
						U = { scale: J.scale, x: Math.max(Math.min(J.x, fe.right), fe.left), y: Math.max(Math.min(J.y, fe.bottom), fe.top) };
					U.scale && (l(K), P(U), s(_(U.x, U.y, U.scale, X)));
				},
				$ = (O) => {
					const W = e.current.getBoundingClientRect(),
						G = 1.6,
						K = x(O.deltaY + O.deltaX < 0 ? i.scale * G : i.scale / G);
					if (r.mouseWheelShift && !O.shiftKey) {
						d('mouseWheelShift'),
							v && clearTimeout(v),
							p(
								setTimeout(() => {
									d(null);
								}, 1e3)
							);
						return;
					}
					if (K > r.maxZoom) return;
					const X = [(O.clientX - W.x) / W.width, (O.clientY - W.y) / W.height],
						J = _(h.x, h.y, h.scale, X);
					N(K, J.x, J.y, { duration: r.reduceMotion ? 0 : 0.4 }, X);
				};
			C.useEffect(() => {
				const O = T.current,
					W = (K, X) => (!K || !K.parentElement ? !1 : K.parentElement.classList.contains(X) || W(K.parentElement, X)),
					G = (K) => {
						(r != null && r.mouseWheelShift && !K.shiftKey) || W(K.target, 'mapplic-tooltip') || K.preventDefault();
					};
				if (O)
					return (
						r.mouseWheel !== !1 ? O.addEventListener('wheel', G, { passive: !1 }) : O.removeEventListener('wheel', G),
						() => {
							O.removeEventListener('wheel', G);
						}
					);
			}, [T, r == null ? void 0 : r.mouseWheel, r == null ? void 0 : r.mouseWheelShift]);
			const Q = (O) => {
					if (O.detail === 2) {
						const W = e.current.getBoundingClientRect(),
							G = [(O.clientX - W.x) / W.width, (O.clientY - W.y) / W.height],
							K = _(h.x, h.y, h.scale, G);
						N(x(i.scale * 2), K.x, K.y, { duration: 0.4 }, G);
					}
				},
				q = () => {
					const O = { ...h, x: R.get(), y: L.get() };
					P(O), s(_(O.x, O.y, O.scale));
				},
				V = ({ scale: O }) => `matrix(${O}, 0, 0, ${O}, 0, 0)`,
				M = (O) => ({
					x: (O.touches[0].clientX + O.touches[1].clientX) / 2,
					y: (O.touches[0].clientY + O.touches[1].clientY) / 2,
					dist: Math.sqrt(Math.pow(O.touches[0].clientX - O.touches[1].clientX, 2), Math.pow(O.touches[0].clientY - O.touches[1].clientY, 2)),
				}),
				D = (O) => {
					if (O.touches.length > 1 && !m) {
						const W = M(O);
						w({ x: W.x, y: W.y, dist: W.dist, scale: h.scale });
					}
				},
				H = (O) => {
					if (m) {
						const W = M(O),
							G = e.current.getBoundingClientRect(),
							K = [(m.x - G.x) / G.width, (m.y - G.y) / G.height],
							X = _(h.x, h.y, h.scale, K);
						N(x(((m.scale / y) * W.dist) / m.dist), X.x, X.y, { duration: 0 }, K);
					}
				},
				B = (O) => {
					O.touches.length < 2 && w(!1);
				};
			return g.jsxs(Ne.div, {
				className: 'mapplic-panzoom',
				drag: !m,
				dragControls: j,
				dragListener: !1,
				onWheel: (r == null ? void 0 : r.mouseWheel) === !1 ? void 0 : $,
				onClick: Q,
				ref: T,
				onTouchStart: D,
				onTouchMove: H,
				onTouchEnd: B,
				//style: { x: R, y: L, cursor: c ? 'grabbing' : 'grab' },
				animate: { x: h.x || 0, y: h.y || 0 },
				transition: a,
				dragTransition: r.reduceMotion ? { bounceStiffness: 0, bounceDamping: 0, timeConstant: 0, power: 0 } : { bounceStiffness: 100, bounceDamping: 20, timeConstant: 100, power: 0.2 },
				dragElastic: r.reduceMotion ? 0 : 0.3,
				dragConstraints: k(),
				onDragStart: () => u(!0),
				onDragEnd: () => setTimeout(() => u(!1), 50),
				onDragTransitionEnd: q,
				children: [
					g.jsx(Ne.div, {
						className: 'mapplic-layers',
						style: { scale: S, aspectRatio: n },
						transformTemplate: V,
						animate: { scale: h.scale || 1 },
						transition: a,
						onPointerDown: (O) => j.start(O),
						children: g.jsx(gy, { parentScale: h.scale }),
					}),
					g.jsx(iy, { width: r.mapWidth * h.scale, aspectRatio: n, containerSize: t }),
				],
			});
		};
	var Jn = [],
		XC = function () {
			return Jn.some(function (e) {
				return e.activeTargets.length > 0;
			});
		},
		QC = function () {
			return Jn.some(function (e) {
				return e.skippedTargets.length > 0;
			});
		},
		yy = 'ResizeObserver loop completed with undelivered notifications.',
		qC = function () {
			var e;
			typeof ErrorEvent == 'function' ? (e = new ErrorEvent('error', { message: yy })) : ((e = document.createEvent('Event')), e.initEvent('error', !1, !1), (e.message = yy)), window.dispatchEvent(e);
		},
		Yi;
	(function (e) {
		(e.BORDER_BOX = 'border-box'), (e.CONTENT_BOX = 'content-box'), (e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
	})(Yi || (Yi = {}));
	var er = function (e) {
			return Object.freeze(e);
		},
		ZC = (function () {
			function e(t, n) {
				(this.inlineSize = t), (this.blockSize = n), er(this);
			}
			return e;
		})(),
		vy = (function () {
			function e(t, n, r, i) {
				return (
					(this.x = t),
					(this.y = n),
					(this.width = r),
					(this.height = i),
					(this.top = this.y),
					(this.left = this.x),
					(this.bottom = this.top + this.height),
					(this.right = this.left + this.width),
					er(this)
				);
			}
			return (
				(e.prototype.toJSON = function () {
					var t = this,
						n = t.x,
						r = t.y,
						i = t.top,
						s = t.right,
						o = t.bottom,
						a = t.left,
						l = t.width,
						c = t.height;
					return { x: n, y: r, top: i, right: s, bottom: o, left: a, width: l, height: c };
				}),
				(e.fromRect = function (t) {
					return new e(t.x, t.y, t.width, t.height);
				}),
				e
			);
		})(),
		Fc = function (e) {
			return e instanceof SVGElement && 'getBBox' in e;
		},
		xy = function (e) {
			if (Fc(e)) {
				var t = e.getBBox(),
					n = t.width,
					r = t.height;
				return !n && !r;
			}
			var i = e,
				s = i.offsetWidth,
				o = i.offsetHeight;
			return !(s || o || e.getClientRects().length);
		},
		wy = function (e) {
			var t;
			if (e instanceof Element) return !0;
			var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
			return !!(n && e instanceof n.Element);
		},
		JC = function (e) {
			switch (e.tagName) {
				case 'INPUT':
					if (e.type !== 'image') break;
				case 'VIDEO':
				case 'AUDIO':
				case 'EMBED':
				case 'OBJECT':
				case 'CANVAS':
				case 'IFRAME':
				case 'IMG':
					return !0;
			}
			return !1;
		},
		Xi = typeof window < 'u' ? window : {},
		$o = new WeakMap(),
		ky = /auto|scroll/,
		eP = /^tb|vertical/,
		tP = /msie|trident/i.test(Xi.navigator && Xi.navigator.userAgent),
		At = function (e) {
			return parseFloat(e || '0');
		},
		zr = function (e, t, n) {
			return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ZC((n ? t : e) || 0, (n ? e : t) || 0);
		},
		Sy = er({ devicePixelContentBoxSize: zr(), borderBoxSize: zr(), contentBoxSize: zr(), contentRect: new vy(0, 0, 0, 0) }),
		Ey = function (e, t) {
			if ((t === void 0 && (t = !1), $o.has(e) && !t)) return $o.get(e);
			if (xy(e)) return $o.set(e, Sy), Sy;
			var n = getComputedStyle(e),
				r = Fc(e) && e.ownerSVGElement && e.getBBox(),
				i = !tP && n.boxSizing === 'border-box',
				s = eP.test(n.writingMode || ''),
				o = !r && ky.test(n.overflowY || ''),
				a = !r && ky.test(n.overflowX || ''),
				l = r ? 0 : At(n.paddingTop),
				c = r ? 0 : At(n.paddingRight),
				u = r ? 0 : At(n.paddingBottom),
				f = r ? 0 : At(n.paddingLeft),
				d = r ? 0 : At(n.borderTopWidth),
				m = r ? 0 : At(n.borderRightWidth),
				w = r ? 0 : At(n.borderBottomWidth),
				T = r ? 0 : At(n.borderLeftWidth),
				j = f + c,
				v = l + u,
				p = T + m,
				h = d + w,
				P = a ? e.offsetHeight - h - e.clientHeight : 0,
				R = o ? e.offsetWidth - p - e.clientWidth : 0,
				L = i ? j + p : 0,
				S = i ? v + h : 0,
				y = r ? r.width : At(n.width) - L - R,
				x = r ? r.height : At(n.height) - S - P,
				k = y + j + R + p,
				_ = x + v + P + h,
				b = er({
					devicePixelContentBoxSize: zr(Math.round(y * devicePixelRatio), Math.round(x * devicePixelRatio), s),
					borderBoxSize: zr(k, _, s),
					contentBoxSize: zr(y, x, s),
					contentRect: new vy(f, l, y, x),
				});
			return $o.set(e, b), b;
		},
		Cy = function (e, t, n) {
			var r = Ey(e, n),
				i = r.borderBoxSize,
				s = r.contentBoxSize,
				o = r.devicePixelContentBoxSize;
			switch (t) {
				case Yi.DEVICE_PIXEL_CONTENT_BOX:
					return o;
				case Yi.BORDER_BOX:
					return i;
				default:
					return s;
			}
		},
		nP = (function () {
			function e(t) {
				var n = Ey(t);
				(this.target = t),
					(this.contentRect = n.contentRect),
					(this.borderBoxSize = er([n.borderBoxSize])),
					(this.contentBoxSize = er([n.contentBoxSize])),
					(this.devicePixelContentBoxSize = er([n.devicePixelContentBoxSize]));
			}
			return e;
		})(),
		Py = function (e) {
			if (xy(e)) return 1 / 0;
			for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
			return t;
		},
		rP = function () {
			var e = 1 / 0,
				t = [];
			Jn.forEach(function (o) {
				if (o.activeTargets.length !== 0) {
					var a = [];
					o.activeTargets.forEach(function (c) {
						var u = new nP(c.target),
							f = Py(c.target);
						a.push(u), (c.lastReportedSize = Cy(c.target, c.observedBox)), f < e && (e = f);
					}),
						t.push(function () {
							o.callback.call(o.observer, a, o.observer);
						}),
						o.activeTargets.splice(0, o.activeTargets.length);
				}
			});
			for (var n = 0, r = t; n < r.length; n++) {
				var i = r[n];
				i();
			}
			return e;
		},
		Ty = function (e) {
			Jn.forEach(function (n) {
				n.activeTargets.splice(0, n.activeTargets.length),
					n.skippedTargets.splice(0, n.skippedTargets.length),
					n.observationTargets.forEach(function (i) {
						i.isActive() && (Py(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
					});
			});
		},
		iP = function () {
			var e = 0;
			for (Ty(e); XC(); ) (e = rP()), Ty(e);
			return QC() && qC(), e > 0;
		},
		Vc,
		Ly = [],
		sP = function () {
			return Ly.splice(0).forEach(function (e) {
				return e();
			});
		},
		oP = function (e) {
			if (!Vc) {
				var t = 0,
					n = document.createTextNode(''),
					r = { characterData: !0 };
				new MutationObserver(function () {
					return sP();
				}).observe(n, r),
					(Vc = function () {
						n.textContent = ''.concat(t ? t-- : t++);
					});
			}
			Ly.push(e), Vc();
		},
		aP = function (e) {
			oP(function () {
				requestAnimationFrame(e);
			});
		},
		Wo = 0,
		lP = function () {
			return !!Wo;
		},
		uP = 250,
		cP = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
		Oy = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
		jy = function (e) {
			return e === void 0 && (e = 0), Date.now() + e;
		},
		zc = !1,
		fP = (function () {
			function e() {
				var t = this;
				(this.stopped = !0),
					(this.listener = function () {
						return t.schedule();
					});
			}
			return (
				(e.prototype.run = function (t) {
					var n = this;
					if ((t === void 0 && (t = uP), !zc)) {
						zc = !0;
						var r = jy(t);
						aP(function () {
							var i = !1;
							try {
								i = iP();
							} finally {
								if (((zc = !1), (t = r - jy()), !lP())) return;
								i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
							}
						});
					}
				}),
				(e.prototype.schedule = function () {
					this.stop(), this.run();
				}),
				(e.prototype.observe = function () {
					var t = this,
						n = function () {
							return t.observer && t.observer.observe(document.body, cP);
						};
					document.body ? n() : Xi.addEventListener('DOMContentLoaded', n);
				}),
				(e.prototype.start = function () {
					var t = this;
					this.stopped &&
						((this.stopped = !1),
						(this.observer = new MutationObserver(this.listener)),
						this.observe(),
						Oy.forEach(function (n) {
							return Xi.addEventListener(n, t.listener, !0);
						}));
				}),
				(e.prototype.stop = function () {
					var t = this;
					this.stopped ||
						(this.observer && this.observer.disconnect(),
						Oy.forEach(function (n) {
							return Xi.removeEventListener(n, t.listener, !0);
						}),
						(this.stopped = !0));
				}),
				e
			);
		})(),
		Bc = new fP(),
		_y = function (e) {
			!Wo && e > 0 && Bc.start(), (Wo += e), !Wo && Bc.stop();
		},
		dP = function (e) {
			return !Fc(e) && !JC(e) && getComputedStyle(e).display === 'inline';
		},
		pP = (function () {
			function e(t, n) {
				(this.target = t), (this.observedBox = n || Yi.CONTENT_BOX), (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
			}
			return (
				(e.prototype.isActive = function () {
					var t = Cy(this.target, this.observedBox, !0);
					return dP(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
				}),
				e
			);
		})(),
		hP = (function () {
			function e(t, n) {
				(this.activeTargets = []), (this.skippedTargets = []), (this.observationTargets = []), (this.observer = t), (this.callback = n);
			}
			return e;
		})(),
		Uo = new WeakMap(),
		Ry = function (e, t) {
			for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
			return -1;
		},
		Ho = (function () {
			function e() {}
			return (
				(e.connect = function (t, n) {
					var r = new hP(t, n);
					Uo.set(t, r);
				}),
				(e.observe = function (t, n, r) {
					var i = Uo.get(t),
						s = i.observationTargets.length === 0;
					Ry(i.observationTargets, n) < 0 && (s && Jn.push(i), i.observationTargets.push(new pP(n, r && r.box)), _y(1), Bc.schedule());
				}),
				(e.unobserve = function (t, n) {
					var r = Uo.get(t),
						i = Ry(r.observationTargets, n),
						s = r.observationTargets.length === 1;
					i >= 0 && (s && Jn.splice(Jn.indexOf(r), 1), r.observationTargets.splice(i, 1), _y(-1));
				}),
				(e.disconnect = function (t) {
					var n = this,
						r = Uo.get(t);
					r.observationTargets.slice().forEach(function (i) {
						return n.unobserve(t, i.target);
					}),
						r.activeTargets.splice(0, r.activeTargets.length);
				}),
				e
			);
		})(),
		mP = (function () {
			function e(t) {
				if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
				if (typeof t != 'function') throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
				Ho.connect(this, t);
			}
			return (
				(e.prototype.observe = function (t, n) {
					if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
					if (!wy(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
					Ho.observe(this, t, n);
				}),
				(e.prototype.unobserve = function (t) {
					if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
					if (!wy(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
					Ho.unobserve(this, t);
				}),
				(e.prototype.disconnect = function () {
					Ho.disconnect(this);
				}),
				(e.toString = function () {
					return 'function ResizeObserver () { [polyfill code] }';
				}),
				e
			);
		})();
	const gP = I[typeof document < 'u' && document.createElement !== void 0 ? 'useLayoutEffect' : 'useEffect'],
		yP = (e) => {
			const t = C.useRef(e);
			return (
				C.useEffect(() => {
					t.current = e;
				}),
				t
			);
		},
		vP = typeof window < 'u' && 'ResizeObserver' in window ? window.ResizeObserver : mP;
	function xP() {}
	function wP(e, t) {
		const n = SP(),
			r = yP(t);
		return (
			gP(() => {
				let i = !1;
				const s = e && 'current' in e ? e.current : e;
				if (!s) return xP;
				function o(a, l) {
					i || r.current(a, l);
				}
				return (
					n.subscribe(s, o),
					() => {
						(i = !0), n.unsubscribe(s, o);
					}
				);
			}, [e, n, r]),
			n.observer
		);
	}
	function kP() {
		let e = !1,
			t = [];
		const n = new Map(),
			r = new vP((i, s) => {
				t = t.concat(i);
				function o() {
					const a = new Set();
					for (let l = 0; l < t.length; l++) {
						if (a.has(t[l].target)) continue;
						a.add(t[l].target);
						const c = n.get(t[l].target);
						c == null || c.forEach((u) => u(t[l], s));
					}
					(t = []), (e = !1);
				}
				e || window.requestAnimationFrame(o), (e = !0);
			});
		return {
			observer: r,
			subscribe(i, s) {
				var o;
				r.observe(i);
				const a = (o = n.get(i)) !== null && o !== void 0 ? o : [];
				a.push(s), n.set(i, a);
			},
			unsubscribe(i, s) {
				var o;
				const a = (o = n.get(i)) !== null && o !== void 0 ? o : [];
				if (a.length === 1) {
					r.unobserve(i), n.delete(i);
					return;
				}
				const l = a.indexOf(s);
				l !== -1 && a.splice(l, 1), n.set(i, a);
			},
		};
	}
	let $c;
	const SP = () => $c || ($c = kP()),
		by = (e) => {
			const [t, n] = C.useState();
			return (
				C.useLayoutEffect(() => {
					var r;
					n((r = e.current) == null ? void 0 : r.getBoundingClientRect());
				}, [e]),
				wP(e, (r) => n(r.contentRect)),
				t
			);
		},
		EP = ({ element: e }) => {
			const [t, n] = C.useState(1.6),
				r = E((d) => d.data.settings),
				i = E((d) => d.data.layers),
				s = E((d) => d.breakpoint),
				o = E((d) => d.location),
				a = E((d) => d.sidebarClosed),
				l = C.useRef(null),
				c = by(l);
			C.useEffect(() => {
				r != null && r.mapWidth && r != null && r.mapHeight ? n(r.mapWidth / r.mapHeight) : n(1.6);
			}, [r.mapHeight, r.mapWidth]),
				C.useEffect(() => {
					r.padding && e.current.style.setProperty('--container-padding', r.padding + 'px');
				}, [e, r.padding]),
				C.useEffect(() => {
					s != null &&
						s.portrait &&
						l.current.getBoundingClientRect().top < 0 &&
						(document.documentElement.scrollHeight > document.documentElement.clientHeight
							? window.scrollTo({ top: l.current.getBoundingClientRect().top + window.scrollY - (r.scrollTop || 0), behavior: 'smooth' })
							: l.current.scrollIntoView({ behavior: 'smooth' }));
				}, [s == null ? void 0 : s.portrait, o, r.scrollTop]);
			const u = () => (s != null && s.sidebar ? (s == null ? void 0 : s.sidebar) + 'px' : e.current ? getComputedStyle(e.current).getPropertyValue('--sidebar') : 0),
				f = () => (r != null && r.kiosk && !(s != null && s.portrait) ? '100vh' : s != null && s.container ? s.container + 'px' : 'auto');
			return g.jsxs(Ne.div, {
				className: 'mapplic-container',
				ref: l,
				initial: !1,
				transition: { duration: 0.4 },
				animate: { marginLeft: !a && !r.rightSidebar && r.sidebar ? u() : 0, marginRight: !a && r.rightSidebar && r.sidebar ? u() : 0 },
				style: { height: f() },
				children: [
					r.zoom
						? g.jsx(YC, { container: l, containerSize: c, aspectRatio: t })
						: g.jsxs(Ne.div, { className: 'mapplic-layers', children: [g.jsx(gy, { list: i }), g.jsx(iy, { aspectRatio: t, width: r == null ? void 0 : r.mapWidth })] }),
					g.jsx(vC, { element: e }),
				],
			});
		},
		CP = ({ element: e }) => {
			const t = E((i) => i.data.settings),
				n = E((i) => i.data.styles);
			return (
				C.useEffect(() => {
					t.primaryColor ? e.current.style.setProperty('--primary', t.primaryColor) : e.current.style.removeProperty('--primary');
				}, [e, t.primaryColor]),
				C.useMemo(() => {
					let i = '';
					const s = (u, f = '') => `.mapplic-layer svg .${u}${f}, .mapplic-layer svg .${u}${f} > *`,
						o = (u, f = '') => `.mapplic-overlay .mapplic-marker.${u}${f}`,
						a = (u, f) => (f ? `${u}:${f} !important;` : ''),
						l = (u) => {
							if (!u.svg) return '';
							let f = `${s(u.class)} {${a('fill', u['base-color']) + a('stroke', u['base-stroke']) + a('stroke-width', u['stroke-width'])}}`;
							return (
								(f += `${s(u.class, '.mapplic-highlight')} {${a('fill', u['hover-color']) + a('stroke', u['hover-stroke'])}}`),
								(f += `${s(u.class, '.mapplic-filtered')} {${a('fill', u['hover-color']) + a('stroke', u['hover-stroke'])}}`),
								(f += `${s(u.class, '.mapplic-active')} {${a('fill', u['active-color']) + a('stroke', u['active-stroke'])}}`),
								f
							);
						},
						c = (u) => {
							if (!u.marker) return '';
							let f = `${o(u.class)} {${a('background-color', u['base-color']) + a('outline', `${u['stroke-width']}px solid ${u['base-stroke']}`) + a('color', u['text-color'])}}`;
							return (
								(f += `${o(u.class, '.mapplic-highlight')} {${a('background-color', u['hover-color']) + a('border-color', u['hover-stroke'])}}`),
								(f += `${o(u.class, '.mapplic-active')} {${a('background-color', u['active-color']) + a('outline-color', u['active-stroke'])}}`),
								f
							);
						};
					return (
						n &&
							n.forEach((u) => {
								i += l(u) + c(u);
							}),
						t != null && t.css && (i += t.css),
						i ? g.jsx('style', { children: i }) : null
					);
				}, [n, t.css])
			);
		};
	var Dy = { exports: {} };
	/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/ (function (e, t) {
		(function (n, r) {
			e.exports = r();
		})(Vy, function n() {
			var r = typeof self < 'u' ? self : typeof window < 'u' ? window : r !== void 0 ? r : {},
				i = !r.document && !!r.postMessage,
				s = r.IS_PAPA_WORKER || !1,
				o = {},
				a = 0,
				l = {
					parse: function (y, x) {
						var k = (x = x || {}).dynamicTyping || !1;
						if ((S(k) && ((x.dynamicTypingFunction = k), (k = {})), (x.dynamicTyping = k), (x.transform = !!S(x.transform) && x.transform), x.worker && l.WORKERS_SUPPORTED)) {
							var _ = (function () {
								if (!l.WORKERS_SUPPORTED) return !1;
								var N =
										((Q = r.URL || r.webkitURL || null),
										(q = n.toString()),
										l.BLOB_URL ||
											(l.BLOB_URL = Q.createObjectURL(
												new Blob(
													[
														"var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
														'(',
														q,
														')();',
													],
													{ type: 'text/javascript' }
												)
											))),
									$ = new r.Worker(N),
									Q,
									q;
								return ($.onmessage = p), ($.id = a++), (o[$.id] = $);
							})();
							return (
								(_.userStep = x.step),
								(_.userChunk = x.chunk),
								(_.userComplete = x.complete),
								(_.userError = x.error),
								(x.step = S(x.step)),
								(x.chunk = S(x.chunk)),
								(x.complete = S(x.complete)),
								(x.error = S(x.error)),
								delete x.worker,
								void _.postMessage({ input: y, config: x, workerId: _.id })
							);
						}
						var b = null;
						return (
							l.NODE_STREAM_INPUT,
							typeof y == 'string'
								? ((y = (function (N) {
										return N.charCodeAt(0) === 65279 ? N.slice(1) : N;
								  })(y)),
								  (b = x.download ? new f(x) : new m(x)))
								: y.readable === !0 && S(y.read) && S(y.on)
								? (b = new w(x))
								: ((r.File && y instanceof File) || y instanceof Object) && (b = new d(x)),
							b.stream(y)
						);
					},
					unparse: function (y, x) {
						var k = !1,
							_ = !0,
							b = ',',
							N = `\r
`,
							$ = '"',
							Q = $ + $,
							q = !1,
							V = null,
							M = !1;
						(function () {
							if (typeof x == 'object') {
								if (
									(typeof x.delimiter != 'string' ||
										l.BAD_DELIMITERS.filter(function (O) {
											return x.delimiter.indexOf(O) !== -1;
										}).length ||
										(b = x.delimiter),
									(typeof x.quotes == 'boolean' || typeof x.quotes == 'function' || Array.isArray(x.quotes)) && (k = x.quotes),
									(typeof x.skipEmptyLines != 'boolean' && typeof x.skipEmptyLines != 'string') || (q = x.skipEmptyLines),
									typeof x.newline == 'string' && (N = x.newline),
									typeof x.quoteChar == 'string' && ($ = x.quoteChar),
									typeof x.header == 'boolean' && (_ = x.header),
									Array.isArray(x.columns))
								) {
									if (x.columns.length === 0) throw new Error('Option columns is empty');
									V = x.columns;
								}
								x.escapeChar !== void 0 && (Q = x.escapeChar + $),
									(typeof x.escapeFormulae == 'boolean' || x.escapeFormulae instanceof RegExp) && (M = x.escapeFormulae instanceof RegExp ? x.escapeFormulae : /^[=+\-@\t\r].*$/);
							}
						})();
						var D = new RegExp(j($), 'g');
						if ((typeof y == 'string' && (y = JSON.parse(y)), Array.isArray(y))) {
							if (!y.length || Array.isArray(y[0])) return H(null, y, q);
							if (typeof y[0] == 'object') return H(V || Object.keys(y[0]), y, q);
						} else if (typeof y == 'object')
							return (
								typeof y.data == 'string' && (y.data = JSON.parse(y.data)),
								Array.isArray(y.data) &&
									(y.fields || (y.fields = (y.meta && y.meta.fields) || V),
									y.fields || (y.fields = Array.isArray(y.data[0]) ? y.fields : typeof y.data[0] == 'object' ? Object.keys(y.data[0]) : []),
									Array.isArray(y.data[0]) || typeof y.data[0] == 'object' || (y.data = [y.data])),
								H(y.fields || [], y.data || [], q)
							);
						throw new Error('Unable to serialize unrecognized input');
						function H(O, W, G) {
							var K = '';
							typeof O == 'string' && (O = JSON.parse(O)), typeof W == 'string' && (W = JSON.parse(W));
							var X = Array.isArray(O) && 0 < O.length,
								J = !Array.isArray(W[0]);
							if (X && _) {
								for (var fe = 0; fe < O.length; fe++) 0 < fe && (K += b), (K += B(O[fe], fe));
								0 < W.length && (K += N);
							}
							for (var U = 0; U < W.length; U++) {
								var ee = X ? O.length : W[U].length,
									ne = !1,
									ke = X ? Object.keys(W[U]).length === 0 : W[U].length === 0;
								if ((G && !X && (ne = G === 'greedy' ? W[U].join('').trim() === '' : W[U].length === 1 && W[U][0].length === 0), G === 'greedy' && X)) {
									for (var ie = [], Be = 0; Be < ee; Be++) {
										var Ee = J ? O[Be] : Be;
										ie.push(W[U][Ee]);
									}
									ne = ie.join('').trim() === '';
								}
								if (!ne) {
									for (var de = 0; de < ee; de++) {
										0 < de && !ke && (K += b);
										var Tt = X && J ? O[de] : de;
										K += B(W[U][Tt], de);
									}
									U < W.length - 1 && (!G || (0 < ee && !ke)) && (K += N);
								}
							}
							return K;
						}
						function B(O, W) {
							if (O == null) return '';
							if (O.constructor === Date) return JSON.stringify(O).slice(1, 25);
							var G = !1;
							M && typeof O == 'string' && M.test(O) && ((O = "'" + O), (G = !0));
							var K = O.toString().replace(D, Q);
							return (G =
								G ||
								k === !0 ||
								(typeof k == 'function' && k(O, W)) ||
								(Array.isArray(k) && k[W]) ||
								(function (X, J) {
									for (var fe = 0; fe < J.length; fe++) if (-1 < X.indexOf(J[fe])) return !0;
									return !1;
								})(K, l.BAD_DELIMITERS) ||
								-1 < K.indexOf(b) ||
								K.charAt(0) === ' ' ||
								K.charAt(K.length - 1) === ' ')
								? $ + K + $
								: K;
						}
					},
				};
			if (
				((l.RECORD_SEP = String.fromCharCode(30)),
				(l.UNIT_SEP = String.fromCharCode(31)),
				(l.BYTE_ORDER_MARK = '\uFEFF'),
				(l.BAD_DELIMITERS = [
					'\r',
					`
`,
					'"',
					l.BYTE_ORDER_MARK,
				]),
				(l.WORKERS_SUPPORTED = !i && !!r.Worker),
				(l.NODE_STREAM_INPUT = 1),
				(l.LocalChunkSize = 10485760),
				(l.RemoteChunkSize = 5242880),
				(l.DefaultDelimiter = ','),
				(l.Parser = v),
				(l.ParserHandle = T),
				(l.NetworkStreamer = f),
				(l.FileStreamer = d),
				(l.StringStreamer = m),
				(l.ReadableStreamStreamer = w),
				r.jQuery)
			) {
				var c = r.jQuery;
				c.fn.parse = function (y) {
					var x = y.config || {},
						k = [];
					return (
						this.each(function (N) {
							if (!(c(this).prop('tagName').toUpperCase() === 'INPUT' && c(this).attr('type').toLowerCase() === 'file' && r.FileReader) || !this.files || this.files.length === 0) return !0;
							for (var $ = 0; $ < this.files.length; $++) k.push({ file: this.files[$], inputElem: this, instanceConfig: c.extend({}, x) });
						}),
						_(),
						this
					);
					function _() {
						if (k.length !== 0) {
							var N,
								$,
								Q,
								q,
								V = k[0];
							if (S(y.before)) {
								var M = y.before(V.file, V.inputElem);
								if (typeof M == 'object') {
									if (M.action === 'abort') return (N = 'AbortError'), ($ = V.file), (Q = V.inputElem), (q = M.reason), void (S(y.error) && y.error({ name: N }, $, Q, q));
									if (M.action === 'skip') return void b();
									typeof M.config == 'object' && (V.instanceConfig = c.extend(V.instanceConfig, M.config));
								} else if (M === 'skip') return void b();
							}
							var D = V.instanceConfig.complete;
							(V.instanceConfig.complete = function (H) {
								S(D) && D(H, V.file, V.inputElem), b();
							}),
								l.parse(V.file, V.instanceConfig);
						} else S(y.complete) && y.complete();
					}
					function b() {
						k.splice(0, 1), _();
					}
				};
			}
			function u(y) {
				(this._handle = null),
					(this._finished = !1),
					(this._completed = !1),
					(this._halted = !1),
					(this._input = null),
					(this._baseIndex = 0),
					(this._partialLine = ''),
					(this._rowCount = 0),
					(this._start = 0),
					(this._nextChunk = null),
					(this.isFirstChunk = !0),
					(this._completeResults = { data: [], errors: [], meta: {} }),
					function (x) {
						var k = R(x);
						(k.chunkSize = parseInt(k.chunkSize)), x.step || x.chunk || (k.chunkSize = null), (this._handle = new T(k)), ((this._handle.streamer = this)._config = k);
					}.call(this, y),
					(this.parseChunk = function (x, k) {
						if (this.isFirstChunk && S(this._config.beforeFirstChunk)) {
							var _ = this._config.beforeFirstChunk(x);
							_ !== void 0 && (x = _);
						}
						(this.isFirstChunk = !1), (this._halted = !1);
						var b = this._partialLine + x;
						this._partialLine = '';
						var N = this._handle.parse(b, this._baseIndex, !this._finished);
						if (!this._handle.paused() && !this._handle.aborted()) {
							var $ = N.meta.cursor;
							this._finished || ((this._partialLine = b.substring($ - this._baseIndex)), (this._baseIndex = $)), N && N.data && (this._rowCount += N.data.length);
							var Q = this._finished || (this._config.preview && this._rowCount >= this._config.preview);
							if (s) r.postMessage({ results: N, workerId: l.WORKER_ID, finished: Q });
							else if (S(this._config.chunk) && !k) {
								if ((this._config.chunk(N, this._handle), this._handle.paused() || this._handle.aborted())) return void (this._halted = !0);
								(N = void 0), (this._completeResults = void 0);
							}
							return (
								this._config.step ||
									this._config.chunk ||
									((this._completeResults.data = this._completeResults.data.concat(N.data)),
									(this._completeResults.errors = this._completeResults.errors.concat(N.errors)),
									(this._completeResults.meta = N.meta)),
								this._completed || !Q || !S(this._config.complete) || (N && N.meta.aborted) || (this._config.complete(this._completeResults, this._input), (this._completed = !0)),
								Q || (N && N.meta.paused) || this._nextChunk(),
								N
							);
						}
						this._halted = !0;
					}),
					(this._sendError = function (x) {
						S(this._config.error) ? this._config.error(x) : s && this._config.error && r.postMessage({ workerId: l.WORKER_ID, error: x, finished: !1 });
					});
			}
			function f(y) {
				var x;
				(y = y || {}).chunkSize || (y.chunkSize = l.RemoteChunkSize),
					u.call(this, y),
					(this._nextChunk = i
						? function () {
								this._readChunk(), this._chunkLoaded();
						  }
						: function () {
								this._readChunk();
						  }),
					(this.stream = function (k) {
						(this._input = k), this._nextChunk();
					}),
					(this._readChunk = function () {
						if (this._finished) this._chunkLoaded();
						else {
							if (
								((x = new XMLHttpRequest()),
								this._config.withCredentials && (x.withCredentials = this._config.withCredentials),
								i || ((x.onload = L(this._chunkLoaded, this)), (x.onerror = L(this._chunkError, this))),
								x.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !i),
								this._config.downloadRequestHeaders)
							) {
								var k = this._config.downloadRequestHeaders;
								for (var _ in k) x.setRequestHeader(_, k[_]);
							}
							if (this._config.chunkSize) {
								var b = this._start + this._config.chunkSize - 1;
								x.setRequestHeader('Range', 'bytes=' + this._start + '-' + b);
							}
							try {
								x.send(this._config.downloadRequestBody);
							} catch (N) {
								this._chunkError(N.message);
							}
							i && x.status === 0 && this._chunkError();
						}
					}),
					(this._chunkLoaded = function () {
						x.readyState === 4 &&
							(x.status < 200 || 400 <= x.status
								? this._chunkError()
								: ((this._start += this._config.chunkSize ? this._config.chunkSize : x.responseText.length),
								  (this._finished =
										!this._config.chunkSize ||
										this._start >=
											(function (k) {
												var _ = k.getResponseHeader('Content-Range');
												return _ === null ? -1 : parseInt(_.substring(_.lastIndexOf('/') + 1));
											})(x)),
								  this.parseChunk(x.responseText)));
					}),
					(this._chunkError = function (k) {
						var _ = x.statusText || k;
						this._sendError(new Error(_));
					});
			}
			function d(y) {
				var x, k;
				(y = y || {}).chunkSize || (y.chunkSize = l.LocalChunkSize), u.call(this, y);
				var _ = typeof FileReader < 'u';
				(this.stream = function (b) {
					(this._input = b),
						(k = b.slice || b.webkitSlice || b.mozSlice),
						_ ? (((x = new FileReader()).onload = L(this._chunkLoaded, this)), (x.onerror = L(this._chunkError, this))) : (x = new FileReaderSync()),
						this._nextChunk();
				}),
					(this._nextChunk = function () {
						this._finished || (this._config.preview && !(this._rowCount < this._config.preview)) || this._readChunk();
					}),
					(this._readChunk = function () {
						var b = this._input;
						if (this._config.chunkSize) {
							var N = Math.min(this._start + this._config.chunkSize, this._input.size);
							b = k.call(b, this._start, N);
						}
						var $ = x.readAsText(b, this._config.encoding);
						_ || this._chunkLoaded({ target: { result: $ } });
					}),
					(this._chunkLoaded = function (b) {
						(this._start += this._config.chunkSize), (this._finished = !this._config.chunkSize || this._start >= this._input.size), this.parseChunk(b.target.result);
					}),
					(this._chunkError = function () {
						this._sendError(x.error);
					});
			}
			function m(y) {
				var x;
				u.call(this, (y = y || {})),
					(this.stream = function (k) {
						return (x = k), this._nextChunk();
					}),
					(this._nextChunk = function () {
						if (!this._finished) {
							var k,
								_ = this._config.chunkSize;
							return _ ? ((k = x.substring(0, _)), (x = x.substring(_))) : ((k = x), (x = '')), (this._finished = !x), this.parseChunk(k);
						}
					});
			}
			function w(y) {
				u.call(this, (y = y || {}));
				var x = [],
					k = !0,
					_ = !1;
				(this.pause = function () {
					u.prototype.pause.apply(this, arguments), this._input.pause();
				}),
					(this.resume = function () {
						u.prototype.resume.apply(this, arguments), this._input.resume();
					}),
					(this.stream = function (b) {
						(this._input = b), this._input.on('data', this._streamData), this._input.on('end', this._streamEnd), this._input.on('error', this._streamError);
					}),
					(this._checkIsFinished = function () {
						_ && x.length === 1 && (this._finished = !0);
					}),
					(this._nextChunk = function () {
						this._checkIsFinished(), x.length ? this.parseChunk(x.shift()) : (k = !0);
					}),
					(this._streamData = L(function (b) {
						try {
							x.push(typeof b == 'string' ? b : b.toString(this._config.encoding)), k && ((k = !1), this._checkIsFinished(), this.parseChunk(x.shift()));
						} catch (N) {
							this._streamError(N);
						}
					}, this)),
					(this._streamError = L(function (b) {
						this._streamCleanUp(), this._sendError(b);
					}, this)),
					(this._streamEnd = L(function () {
						this._streamCleanUp(), (_ = !0), this._streamData('');
					}, this)),
					(this._streamCleanUp = L(function () {
						this._input.removeListener('data', this._streamData), this._input.removeListener('end', this._streamEnd), this._input.removeListener('error', this._streamError);
					}, this));
			}
			function T(y) {
				var x,
					k,
					_,
					b = Math.pow(2, 53),
					N = -b,
					$ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
					Q =
						/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
					q = this,
					V = 0,
					M = 0,
					D = !1,
					H = !1,
					B = [],
					O = { data: [], errors: [], meta: {} };
				if (S(y.step)) {
					var W = y.step;
					y.step = function (U) {
						if (((O = U), X())) K();
						else {
							if ((K(), O.data.length === 0)) return;
							(V += U.data.length), y.preview && V > y.preview ? k.abort() : ((O.data = O.data[0]), W(O, q));
						}
					};
				}
				function G(U) {
					return y.skipEmptyLines === 'greedy' ? U.join('').trim() === '' : U.length === 1 && U[0].length === 0;
				}
				function K() {
					return (
						O && _ && (fe('Delimiter', 'UndetectableDelimiter', "Unable to auto-detect delimiting character; defaulted to '" + l.DefaultDelimiter + "'"), (_ = !1)),
						y.skipEmptyLines &&
							(O.data = O.data.filter(function (U) {
								return !G(U);
							})),
						X() &&
							(function () {
								if (!O) return;
								function U(ne, ke) {
									S(y.transformHeader) && (ne = y.transformHeader(ne, ke)), B.push(ne);
								}
								if (Array.isArray(O.data[0])) {
									for (var ee = 0; X() && ee < O.data.length; ee++) O.data[ee].forEach(U);
									O.data.splice(0, 1);
								} else O.data.forEach(U);
							})(),
						(function () {
							if (!O || (!y.header && !y.dynamicTyping && !y.transform)) return O;
							function U(ne, ke) {
								var ie,
									Be = y.header ? {} : [];
								for (ie = 0; ie < ne.length; ie++) {
									var Ee = ie,
										de = ne[ie];
									y.header && (Ee = ie >= B.length ? '__parsed_extra' : B[ie]),
										y.transform && (de = y.transform(de, Ee)),
										(de = J(Ee, de)),
										Ee === '__parsed_extra' ? ((Be[Ee] = Be[Ee] || []), Be[Ee].push(de)) : (Be[Ee] = de);
								}
								return (
									y.header &&
										(ie > B.length
											? fe('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + B.length + ' fields but parsed ' + ie, M + ke)
											: ie < B.length && fe('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + B.length + ' fields but parsed ' + ie, M + ke)),
									Be
								);
							}
							var ee = 1;
							return !O.data.length || Array.isArray(O.data[0]) ? ((O.data = O.data.map(U)), (ee = O.data.length)) : (O.data = U(O.data, 0)), y.header && O.meta && (O.meta.fields = B), (M += ee), O;
						})()
					);
				}
				function X() {
					return y.header && B.length === 0;
				}
				function J(U, ee) {
					return (
						(ne = U),
						y.dynamicTypingFunction && y.dynamicTyping[ne] === void 0 && (y.dynamicTyping[ne] = y.dynamicTypingFunction(ne)),
						(y.dynamicTyping[ne] || y.dynamicTyping) === !0
							? ee === 'true' ||
							  ee === 'TRUE' ||
							  (ee !== 'false' &&
									ee !== 'FALSE' &&
									((function (ke) {
										if ($.test(ke)) {
											var ie = parseFloat(ke);
											if (N < ie && ie < b) return !0;
										}
										return !1;
									})(ee)
										? parseFloat(ee)
										: Q.test(ee)
										? new Date(ee)
										: ee === ''
										? null
										: ee))
							: ee
					);
					var ne;
				}
				function fe(U, ee, ne, ke) {
					var ie = { type: U, code: ee, message: ne };
					ke !== void 0 && (ie.row = ke), O.errors.push(ie);
				}
				(this.parse = function (U, ee, ne) {
					var ke = y.quoteChar || '"';
					if (
						(y.newline ||
							(y.newline = (function (Ee, de) {
								Ee = Ee.substring(0, 1048576);
								var Tt = new RegExp(j(de) + '([^]*?)' + j(de), 'gm'),
									ht = (Ee = Ee.replace(Tt, '')).split('\r'),
									Mt = Ee.split(`
`),
									Qt = 1 < Mt.length && Mt[0].length < ht[0].length;
								if (ht.length === 1 || Qt)
									return `
`;
								for (var mt = 0, ve = 0; ve < ht.length; ve++)
									ht[ve][0] ===
										`
` && mt++;
								return mt >= ht.length / 2
									? `\r
`
									: '\r';
							})(U, ke)),
						(_ = !1),
						y.delimiter)
					)
						S(y.delimiter) && ((y.delimiter = y.delimiter(U)), (O.meta.delimiter = y.delimiter));
					else {
						var ie = (function (Ee, de, Tt, ht, Mt) {
							var Qt, mt, ve, Te;
							Mt = Mt || [',', '	', '|', ';', l.RECORD_SEP, l.UNIT_SEP];
							for (var tr = 0; tr < Mt.length; tr++) {
								var se = Mt[tr],
									$r = 0,
									qt = 0,
									nr = 0;
								ve = void 0;
								for (var Ln = new v({ comments: ht, delimiter: se, newline: de, preview: 10 }).parse(Ee), On = 0; On < Ln.data.length; On++)
									if (Tt && G(Ln.data[On])) nr++;
									else {
										var jn = Ln.data[On].length;
										(qt += jn), ve !== void 0 ? 0 < jn && (($r += Math.abs(jn - ve)), (ve = jn)) : (ve = jn);
									}
								0 < Ln.data.length && (qt /= Ln.data.length - nr), (mt === void 0 || $r <= mt) && (Te === void 0 || Te < qt) && 1.99 < qt && ((mt = $r), (Qt = se), (Te = qt));
							}
							return { successful: !!(y.delimiter = Qt), bestDelimiter: Qt };
						})(U, y.newline, y.skipEmptyLines, y.comments, y.delimitersToGuess);
						ie.successful ? (y.delimiter = ie.bestDelimiter) : ((_ = !0), (y.delimiter = l.DefaultDelimiter)), (O.meta.delimiter = y.delimiter);
					}
					var Be = R(y);
					return y.preview && y.header && Be.preview++, (x = U), (k = new v(Be)), (O = k.parse(x, ee, ne)), K(), D ? { meta: { paused: !0 } } : O || { meta: { paused: !1 } };
				}),
					(this.paused = function () {
						return D;
					}),
					(this.pause = function () {
						(D = !0), k.abort(), (x = S(y.chunk) ? '' : x.substring(k.getCharIndex()));
					}),
					(this.resume = function () {
						q.streamer._halted ? ((D = !1), q.streamer.parseChunk(x, !0)) : setTimeout(q.resume, 3);
					}),
					(this.aborted = function () {
						return H;
					}),
					(this.abort = function () {
						(H = !0), k.abort(), (O.meta.aborted = !0), S(y.complete) && y.complete(O), (x = '');
					});
			}
			function j(y) {
				return y.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			}
			function v(y) {
				var x,
					k = (y = y || {}).delimiter,
					_ = y.newline,
					b = y.comments,
					N = y.step,
					$ = y.preview,
					Q = y.fastMode,
					q = (x = y.quoteChar === void 0 || y.quoteChar === null ? '"' : y.quoteChar);
				if ((y.escapeChar !== void 0 && (q = y.escapeChar), (typeof k != 'string' || -1 < l.BAD_DELIMITERS.indexOf(k)) && (k = ','), b === k)) throw new Error('Comment character same as delimiter');
				b === !0 ? (b = '#') : (typeof b != 'string' || -1 < l.BAD_DELIMITERS.indexOf(b)) && (b = !1),
					_ !==
						`
` &&
						_ !== '\r' &&
						_ !==
							`\r
` &&
						(_ = `
`);
				var V = 0,
					M = !1;
				(this.parse = function (D, H, B) {
					if (typeof D != 'string') throw new Error('Input must be a string');
					var O = D.length,
						W = k.length,
						G = _.length,
						K = b.length,
						X = S(N),
						J = [],
						fe = [],
						U = [],
						ee = (V = 0);
					if (!D) return gt();
					if (y.header && !H) {
						var ne = D.split(_)[0].split(k),
							ke = [],
							ie = {},
							Be = !1;
						for (var Ee in ne) {
							var de = ne[Ee];
							S(y.transformHeader) && (de = y.transformHeader(de, Ee));
							var Tt = de,
								ht = ie[de] || 0;
							for (0 < ht && ((Be = !0), (Tt = de + '_' + ht)), ie[de] = ht + 1; ke.includes(Tt); ) Tt = Tt + '_' + ht;
							ke.push(Tt);
						}
						if (Be) {
							var Mt = D.split(_);
							(Mt[0] = ke.join(k)), (D = Mt.join(_));
						}
					}
					if (Q || (Q !== !1 && D.indexOf(x) === -1)) {
						for (var Qt = D.split(_), mt = 0; mt < Qt.length; mt++) {
							if (((U = Qt[mt]), (V += U.length), mt !== Qt.length - 1)) V += _.length;
							else if (B) return gt();
							if (!b || U.substring(0, K) !== b) {
								if (X) {
									if (((J = []), nr(U.split(k)), Go(), M)) return gt();
								} else nr(U.split(k));
								if ($ && $ <= mt) return (J = J.slice(0, $)), gt(!0);
							}
						}
						return gt();
					}
					for (var ve = D.indexOf(k, V), Te = D.indexOf(_, V), tr = new RegExp(j(q) + j(x), 'g'), se = D.indexOf(x, V); ; )
						if (D[V] !== x)
							if (b && U.length === 0 && D.substring(V, V + K) === b) {
								if (Te === -1) return gt();
								(V = Te + G), (Te = D.indexOf(_, V)), (ve = D.indexOf(k, V));
							} else if (ve !== -1 && (ve < Te || Te === -1)) U.push(D.substring(V, ve)), (V = ve + W), (ve = D.indexOf(k, V));
							else {
								if (Te === -1) break;
								if ((U.push(D.substring(V, Te)), jn(Te + G), X && (Go(), M))) return gt();
								if ($ && J.length >= $) return gt(!0);
							}
						else
							for (se = V, V++; ; ) {
								if ((se = D.indexOf(x, se + 1)) === -1) return B || fe.push({ type: 'Quotes', code: 'MissingQuotes', message: 'Quoted field unterminated', row: J.length, index: V }), On();
								if (se === O - 1) return On(D.substring(V, se).replace(tr, x));
								if (x !== q || D[se + 1] !== q) {
									if (x === q || se === 0 || D[se - 1] !== q) {
										ve !== -1 && ve < se + 1 && (ve = D.indexOf(k, se + 1)), Te !== -1 && Te < se + 1 && (Te = D.indexOf(_, se + 1));
										var $r = Ln(Te === -1 ? ve : Math.min(ve, Te));
										if (D.substr(se + 1 + $r, W) === k) {
											U.push(D.substring(V, se).replace(tr, x)), D[(V = se + 1 + $r + W)] !== x && (se = D.indexOf(x, V)), (ve = D.indexOf(k, V)), (Te = D.indexOf(_, V));
											break;
										}
										var qt = Ln(Te);
										if (D.substring(se + 1 + qt, se + 1 + qt + G) === _) {
											if ((U.push(D.substring(V, se).replace(tr, x)), jn(se + 1 + qt + G), (ve = D.indexOf(k, V)), (se = D.indexOf(x, V)), X && (Go(), M))) return gt();
											if ($ && J.length >= $) return gt(!0);
											break;
										}
										fe.push({ type: 'Quotes', code: 'InvalidQuotes', message: 'Trailing quote on quoted field is malformed', row: J.length, index: V }), se++;
									}
								} else se++;
							}
					return On();
					function nr(yt) {
						J.push(yt), (ee = V);
					}
					function Ln(yt) {
						var Fy = 0;
						if (yt !== -1) {
							var Uc = D.substring(se + 1, yt);
							Uc && Uc.trim() === '' && (Fy = Uc.length);
						}
						return Fy;
					}
					function On(yt) {
						return B || (yt === void 0 && (yt = D.substring(V)), U.push(yt), (V = O), nr(U), X && Go()), gt();
					}
					function jn(yt) {
						(V = yt), nr(U), (U = []), (Te = D.indexOf(_, V));
					}
					function gt(yt) {
						return { data: J, errors: fe, meta: { delimiter: k, linebreak: _, aborted: M, truncated: !!yt, cursor: ee + (H || 0) } };
					}
					function Go() {
						N(gt()), (J = []), (fe = []);
					}
				}),
					(this.abort = function () {
						M = !0;
					}),
					(this.getCharIndex = function () {
						return V;
					});
			}
			function p(y) {
				var x = y.data,
					k = o[x.workerId],
					_ = !1;
				if (x.error) k.userError(x.error, x.file);
				else if (x.results && x.results.data) {
					var b = {
						abort: function () {
							(_ = !0), h(x.workerId, { data: [], errors: [], meta: { aborted: !0 } });
						},
						pause: P,
						resume: P,
					};
					if (S(k.userStep)) {
						for (var N = 0; N < x.results.data.length && (k.userStep({ data: x.results.data[N], errors: x.results.errors, meta: x.results.meta }, b), !_); N++);
						delete x.results;
					} else S(k.userChunk) && (k.userChunk(x.results, b, x.file), delete x.results);
				}
				x.finished && !_ && h(x.workerId, x.results);
			}
			function h(y, x) {
				var k = o[y];
				S(k.userComplete) && k.userComplete(x), k.terminate(), delete o[y];
			}
			function P() {
				throw new Error('Not implemented.');
			}
			function R(y) {
				if (typeof y != 'object' || y === null) return y;
				var x = Array.isArray(y) ? [] : {};
				for (var k in y) x[k] = R(y[k]);
				return x;
			}
			function L(y, x) {
				return function () {
					y.apply(x, arguments);
				};
			}
			function S(y) {
				return typeof y == 'function';
			}
			return (
				s &&
					(r.onmessage = function (y) {
						var x = y.data;
						if ((l.WORKER_ID === void 0 && x && (l.WORKER_ID = x.workerId), typeof x.input == 'string')) r.postMessage({ workerId: l.WORKER_ID, results: l.parse(x.input, x.config), finished: !0 });
						else if ((r.File && x.input instanceof File) || x.input instanceof Object) {
							var k = l.parse(x.input, x.config);
							k && r.postMessage({ workerId: l.WORKER_ID, results: k, finished: !0 });
						}
					}),
				((f.prototype = Object.create(u.prototype)).constructor = f),
				((d.prototype = Object.create(u.prototype)).constructor = d),
				((m.prototype = Object.create(m.prototype)).constructor = m),
				((w.prototype = Object.create(u.prototype)).constructor = w),
				l
			);
		});
	})(Dy);
	var PP = Dy.exports;
	const TP = Wr(PP),
		LP = (e) => {
			const t = E((s) => s.fetchData),
				n = E((s) => s.fetchCsv),
				r = E((s) => s.setCsv),
				i = E((s) => s.data.settings);
			E((s) => s.csv),
				C.useEffect(() => {
					e && t(e);
				}, [e, t]),
				C.useEffect(() => {
					i != null && i.csvEnabled && i != null && i.csv
						? n(
								new Promise((s, o) => {
									TP.parse(i == null ? void 0 : i.csv, {
										header: !0,
										download: !0,
										encoding: 'UTF-8',
										skipEmptyLines: !0,
										transformHeader: (a) => a.trim().toLowerCase(),
										transform: (a, l) => {
											if (a) return l === 'coord' || l === 'latlon' ? a.split(',').map(parseFloat) : a;
										},
										complete: (a) => {
											const l = a.data.map((c) => {
												const u = {};
												for (const f in c) c[f] !== void 0 && (u[f] = c[f]);
												return u;
											});
											s(l);
										},
										error: (a) => {
											o(a);
										},
									});
								})
						  )
						: r([]);
				}, [i == null ? void 0 : i.csv, i == null ? void 0 : i.csvEnabled, n, r]);
		},
		Wc = (e) => {
			const [t, n] = C.useState(() => {
				if (typeof window > 'u') return '';
				const { search: r } = window.location,
					i = new URLSearchParams(r);
				return i.has(e) ? i.get(e) : '';
			});
			return (
				C.useEffect(() => {
					const r = (i) => {
						const o = new URLSearchParams(window.location.search).get(e);
						n(o);
					};
					return window.addEventListener('popstate', r), () => window.removeEventListener('popstate', r);
				}, [e]),
				C.useEffect(() => {
					const r = new URL(window.location);
					r.searchParams.get(e) !== t && (t ? r.searchParams.set(e, t) : r.searchParams.delete(e), window.history.pushState(window.history.state, '', r));
				}, [e, t]),
				[t, n]
			);
		},
		OP = ({ enabled: e, children: t }) => {
			const n = E((m) => m.loading),
				r = E((m) => m.location),
				i = E((m) => m.openLocation),
				s = E((m) => m.setFrom),
				o = E((m) => m.setTo),
				[a, l] = Wc('location'),
				[c, u] = C.useState(!1),
				[f] = Wc('from'),
				[d] = Wc('to');
			return (
				C.useEffect(() => {
					e && (!n && !c && a && (u(a), setTimeout(() => i(a), 200)), c && a && a !== c && (u(!0), i(a)));
				}, [e, n, c, u, a, i]),
				C.useEffect(() => {
					e && (r === null && l(''), r && l(r));
				}, [e, r, l]),
				C.useEffect(() => {
					s(f);
				}, [f, s]),
				C.useEffect(() => {
					o(d);
				}, [d, o]),
				t
			);
		},
		Ay = (e, t) => be(Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2)),
		My = (e, t, n, r) => {
			for (let i = 0; i < e.length; i++) if (e[i].x === t && e[i].y === n && e[i].layer === r) return e[i];
			return null;
		},
		jP = (e, t, n, r, i, s) => {
			let o = My(e, t, n, r);
			return o || (e.push({ x: t, y: n, layer: r, n: [] }), (o = e[e.length - 1]), i && (o.end = i), s && (o.connect = s)), o;
		},
		Br = (e, t, n = 1, r = 1, i) => {
			if (!My(e.n, t.x, t.y)) {
				const s = { to: t, dist: n, realDist: r };
				i && (s.iac = !0), e.n.push(s);
			}
		},
		_P = (e) => {
			const t = [];
			e == null ||
				e.forEach((r) => {
					const i = r == null ? void 0 : r.points.split(' '),
						s = [];
					for (let o = 0; o < i.length; o++) {
						const [a, l] = i[o].split(','),
							c = jP(t, a, l, r.layer, r.endpoint, r.connect);
						if (o > 0) {
							const u = Ay(c, s[s.length - 1]);
							let f = u * (parseFloat(r.weight) || 1);
							if ((Br(c, s[s.length - 1], f, u, r.inaccessible), Br(s[s.length - 1], c, f, u, r.inaccessible), r.element === 'polygon'))
								for (let d = s.length - 2; d >= 0; d--) (f = Ay(c, s[d])), Br(c, s[d], f, f, r.inaccessible), Br(s[d], c, f, f, r.inaccessible);
						}
						s.push(c);
					}
				});
			for (let r = 0; r < t.length; r++)
				if (t[r].connect && t[r].end && t[r].n.length < 2)
					for (var n = r + 1; n < t.length; n++) t[n].connect && t[n].end && t[n].n.length < 2 && t[r].end === t[n].end && (Br(t[r], t[n], 1), Br(t[n], t[r], 1));
			return t;
		},
		RP = () => {
			const e = E((r) => {
					var i, s;
					return (s = (i = r.data) == null ? void 0 : i.settings) == null ? void 0 : s.wayfinding;
				}),
				t = E((r) => r.data.routes),
				n = E((r) => r.setRouteGraph);
			C.useEffect(() => {
				e && n(_P(t));
			}, [t, n, e]);
		},
		e2 = '',
		bP = ({ json: e, className: t, outerSettings: n, ...r }) => {
			const i = C.useRef(null),
				s = by(i),
				o = E((L) => L.loading),
				a = E((L) => L.error),
				l = E((L) => L.data.settings),
				c = E((L) => L.sidebarClosed),
				u = E((L) => L.breakpoint),
				f = E((L) => L.data.breakpoints),
				d = E((L) => L.setBreakpoint),
				m = E((L) => {
					var S, y;
					return (y = (S = L.data) == null ? void 0 : S.settings) == null ? void 0 : y.deeplinking;
				}),
				w = E((L) => L.dataLoaded),
				T = E((L) => L.openLocation),
				j = E((L) => L.setFixedFrom),
				v = E((L) => L.setOuterSettings),
				p = E((L) => L.search);
			E((L) => L.data);
			const [h, P] = C.useState(!1);
			LP(e),
				RP(),
				C.useEffect(() => {
					n && v(JSON.parse(n));
				}, [n, v]),
				C.useEffect(() => {
					w && r.location && setTimeout(() => T(r.location), 600);
				}, [w, T, r.location]),
				C.useEffect(() => {
					r.fixedfrom && j(r.fixedfrom);
				}, [w, r.fixedfrom, j]),
				C.useEffect(() => {
					const L = f == null ? void 0 : f.reduce((S, y) => ((s == null ? void 0 : s.width) <= y.below && y.below < S.below ? y : S), { below: 1e4 });
					d(L);
				}, [s, f, d]);
			const R = () => (l != null && l.kiosk ? '100vh' : u != null && u.element ? u.element + 'px' : 'auto');
			return o
				? g.jsx('div', { ref: i, className: 'mapplic-placeholder', children: g.jsx('div', { className: 'mapplic-loader' }) })
				: a
				? g.jsx('div', { ref: i, className: 'mapplic-placeholder', children: g.jsx('i', { children: a }) })
				: g.jsx('div', {
						...r,
						ref: i,
						style: { maxHeight: R() },
						className: Je('mapplic-element', t, u == null ? void 0 : u.name, {
							'mapplic-portrait': u == null ? void 0 : u.portrait,
							'mapplic-sidebar-right': l.rightSidebar,
							'mapplic-sidebar-closed': c && l.toggleSidebar,
							'mapplic-sidebar-toggle': l.toggleSidebar,
							'mapplic-filtered': p,
						}),
						onClick: () => {
							h || ((window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: 'mapplicUsed' }), P(!0));
						},
						children: g.jsxs(OP, { enabled: m, children: [g.jsx(CP, { element: i }), g.jsx(EP, { element: i }), l.sidebar && g.jsx(uC, { element: i })] }),
				  });
		};
	class DP extends HTMLElement {
		constructor() {
			super(), (this._root = this.attachShadow({ mode: 'open' }));
		}
		connectedCallback() {
			if (this._root.childElementCount > 0) return;
			const t = this.dataset;
			let n = '/sitemap/';
			if (t.path) n = t.path;
			else {
				const s = document.getElementById('mapplic-script');
				s && (n = s.src.substring(0, s.src.lastIndexOf('/') + 1));
			}
			const r = document.createElement('link');
			r.setAttribute('rel', 'stylesheet'), r.setAttribute('type', 'text/css'), r.setAttribute('href', n + 'mapplic-res.css'), this._root.appendChild(r);
			const i = (s) => {
				this.store = s;
				const o = new CustomEvent('mapReady', { detail: { store: s } });
				this.dispatchEvent(o);
			};
			Zo.createRoot(this._root).render(g.jsx(QE, { onStore: i, children: g.jsx(bP, { className: this.className, json: t.json, ...t, outerSettings: t.settings }) }));
		}
	}
	customElements.define('mapplic-map', DP);
	const AP = Object.freeze(
			Object.defineProperty(
				{
					__proto__: null,
					default: ({ id: e }) => {
						const t = E((a) => a.setAny),
							n = E((a) => a.hasRoute),
							r = E((a) => a.routeGraph),
							i = E((a) => a.data.settings.wayfindingFixedFrom),
							[s, o] = C.useState(!1);
						return (
							C.useEffect(() => {
								o(n(e) && e !== i);
							}, [e, n, r, i]),
							s
								? g.jsx('button', {
										onClick: () => {
											t(e);
										},
										className: 'mapplic-button mapplic-button-icon',
										children: g.jsx(Sc, { size: 16 }),
								  })
								: null
						);
					},
				},
				Symbol.toStringTag,
				{ value: 'Module' }
			)
		),
		MP = () => {
			const e = E((u) => u.data.legend),
				t = E((u) => u.data.settings.legendTitle),
				n = E((u) => u.data.settings.legendToggle),
				r = E((u) => u.data.settings.legendClosed),
				i = E((u) => u.data.settings.legendColumns),
				s = E((u) => u.data.settings.legendHorizontal),
				[o, a] = C.useState(!1),
				[l, c] = C.useState(r);
			return g.jsxs('div', {
				className: Je('mapplic-legend', { closed: l }),
				onMouseEnter: () => a(!0),
				onMouseLeave: () => a(!1),
				children: [
					g.jsx(qn, {
						children:
							((o && !l) || !n) &&
							g.jsx(
								Ne.div,
								{
									initial: { height: 0, width: 0, opacity: 0 },
									animate: { height: 'auto', width: 'auto', opacity: 1 },
									exit: { height: 0, width: 0, opacity: 0 },
									transition: { duration: 0.2, ease: 'easeOut' },
									children: g.jsxs('div', {
										className: 'mapplic-legend-title',
										children: [g.jsx('span', { children: t || 'Map legend' }), n && g.jsx('button', { onClick: () => c(!0), children: g.jsx(NS, { size: 12 }) })],
									}),
								},
								'title'
							),
					}),
					g.jsx(qn, {
						children:
							!l &&
							g.jsx(
								Ne.div,
								{
									initial: { height: 0, width: 0, opacity: 0 },
									animate: { height: 'auto', width: 'auto', opacity: 1 },
									exit: { height: 0, width: 0, opacity: 0 },
									transition: { duration: 0.2, ease: 'easeOut' },
									style: { overflowY: 'auto' },
									children: g.jsx('div', {
										className: Je('mapplic-legend-list', { horizontal: s }),
										style: { gridTemplateColumns: i ? `repeat(${i}, 1fr)` : '100%' },
										children: e == null ? void 0 : e.map((u) => g.jsx(NP, { ...u }, u.id)),
									}),
								},
								'list'
							),
					}),
					g.jsx('div', { children: l && g.jsx('button', { className: 'mapplic-control-button', onClick: () => c(!1), children: g.jsx($S, { size: 16 }) }) }),
				],
			});
		},
		NP = ({ id: e, text: t, color: n, icon: r, scale: i = 1, radius: s = 4, disable: o }) =>
			o
				? null
				: g.jsxs('div', {
						className: 'mapplic-legend-item',
						children: [
							g.jsx('div', {
								style: { backgroundColor: n, color: YE(n), borderRadius: s + 'px', transform: `scale(${i})` },
								className: 'mapplic-legend-symbol',
								children: (r == null ? void 0 : r.length) > 3 ? g.jsx('img', { src: r, alt: e }) : r,
							}),
							t,
						],
				  }),
		IP = Object.freeze(Object.defineProperty({ __proto__: null, default: MP }, Symbol.toStringTag, { value: 'Module' })),
		Ny = (e, t) => {
			const n = [];
			for (let r = 0; r < e.length; r++) e[r].end === t && e[r].n.length < 2 && n.push(r);
			return n.length < 1 && console.error('There is no path to ' + t), n;
		},
		FP = (e, t, n, r = !1) => {
			for (let l = 0; l < e.length; l++) (e[l].dist = Number.POSITIVE_INFINITY), (e[l].realDist = Number.POSITIVE_INFINITY), (e[l].prev = void 0);
			for (let l = 0; l < t.length; l++) (e[t[l]].dist = 0), (e[t[l]].realDist = 0);
			let i = e.slice();
			for (; i.length > 0; ) {
				let l = Number.POSITIVE_INFINITY,
					c = 0;
				for (let f = 0; f < i.length; f++) i[f].dist < l && ((c = f), (l = i[f].dist));
				let u = i[c];
				i.splice(c, 1);
				for (let f = 0; f < u.n.length; f++)
					if (!r || !u.n[f].iac) {
						let d = u.dist + u.n[f].dist;
						d < u.n[f].to.dist && ((u.n[f].to.dist = d), (u.n[f].to.realDist = u.realDist + u.n[f].realDist), (u.n[f].to.prev = u));
					}
			}
			let s = Number.POSITIVE_INFINITY,
				o = null,
				a = [];
			for (let l = 0; l < n.length; l++) e[n[l]].dist < s && ((o = e[n[l]]), (s = o.dist));
			if ((a.push(o), !o)) return !1;
			for (; o.prev !== void 0; ) (o = o.prev), a.unshift(o);
			return a;
		},
		VP = (e) =>
			e.reduce((t, n) => {
				const r = t[t.length - 1];
				return r && r.length > 0 && r[0].layer === n.layer ? r.push(n) : t.push([n]), t;
			}, []),
		zP = () => {
			const e = E((S) => S.location),
				t = E((S) => S.getLocationById),
				n = E((S) => S.from),
				r = E((S) => S.setFrom),
				i = E((S) => S.to),
				s = E((S) => S.setTo),
				o = E((S) => S.routeGraph),
				a = E((S) => S.setPaths),
				l = E((S) => S.routesOpened),
				c = E((S) => S.setRoutesOpened),
				u = E((S) => S.routesAccessible),
				f = E((S) => S.hasRoute),
				d = E((S) => S.data.settings),
				m = E((S) => S.closeLocation),
				w = E((S) => S.switchLayer),
				T = E((S) => S.setAnimatedPath),
				[j, v] = C.useState(!1),
				[p, h] = C.useState(!1);
			C.useEffect(() => {
				var S;
				if (n && i) {
					v(!1);
					const y = Ny(o, n),
						x = Ny(o, i),
						k = FP(o, y, x, u);
					(S = k[0]) != null && S.layer && w(k[0].layer), m();
					let _;
					k && (_ = VP(k)), _ && ((_ = _.filter((b) => b.length > 1)), a(_)), T(0);
				} else a([]);
			}, [o, n, i, a, u, m, w, T]),
				C.useEffect(() => {
					d.wayfindingFixedFrom && r(d.wayfindingFixedFrom), j && e && f(e) && (j === 'from' ? (r(e), i || v('to')) : j === 'to' && (s(e), n || v('from')));
				}, [e]);
			const P = () => {
					c(!1), d.wayfindingFixedFrom || r(null), s(null), v(!1);
				},
				R = () => {
					const S = n;
					r(i), s(S), h((y) => !y);
				},
				L = () => {
					c(!0), v('from');
				};
			return g.jsx(Ne.div, {
				layout: !0,
				className: Je('mapplic-wayfinding', { 'mapplic-active': l }),
				children: g.jsx(qn, {
					children: l
						? g.jsxs(g.Fragment, {
								children: [
									g.jsx('button', { className: 'mapplic-close', onClick: P, children: g.jsx(Ki, { size: 12 }) }),
									g.jsxs('div', {
										className: 'mapplic-wayfinding-content',
										children: [
											g.jsx('div', { className: 'mapplic-wayfinding-title', children: d.directionsText || 'Directions' }),
											g.jsxs('div', {
												className: 'mapplic-wayfinding-body',
												children: [
													g.jsxs('div', { className: 'mapplic-wayfinding-dots', children: [g.jsx('div', {}), g.jsx('div', {}), g.jsx('div', {})] }),
													(i || n) && !d.wayfindingFixedFrom && g.jsx('button', { className: Je('mapplic-wayfinding-swap', { rotated: p }), onClick: R, children: g.jsx(pE, { size: 12 }) }),
													g.jsxs('div', {
														className: 'mapplic-wayfinding-positions',
														children: [
															g.jsx(Iy, { type: 'from', location: t(n), selected: j, setSelected: v, fixed: d.wayfindingFixedFrom, placeholder: d.selectFromText || 'Select from' }),
															g.jsx(Iy, { type: 'to', location: t(i), selected: j, setSelected: v, placeholder: d.selectToText || 'Select to' }),
														],
													}),
												],
											}),
										],
									}),
									g.jsxs('div', {
										className: 'mapplic-wayfinding-bar',
										children: [g.jsx(BP, {}), g.jsx('button', { className: 'mapplic-button mapplic-button-secondary', disabled: !i || !n, onClick: () => T(0), children: g.jsx(Sc, { size: 16 }) })],
									}),
								],
						  })
						: g.jsx('button', { className: 'mapplic-control-button', onClick: L, children: g.jsx(Sc, { size: 16 }) }),
				}),
			});
		},
		BP = () => {
			const e = E((r) => r.data.settings.wayfindingAccessibility),
				t = E((r) => r.routesAccessible),
				n = E((r) => r.setRoutesAccessible);
			return e
				? g.jsx('button', {
						className: Je('mapplic-button', { 'mapplic-active': t }),
						onClick: () => n(!t),
						style: { padding: 8 },
						children: g.jsxs('svg', {
							xmlns: 'http://www.w3.org/2000/svg',
							width: '16',
							height: '16',
							viewBox: '0 0 16 16',
							fill: 'none',
							children: [
								g.jsx('path', {
									d: 'M11.0933 11.8933C10.7667 11.7533 10.3933 11.9 10.2533 12.2266C9.59333 13.74 8.1 14.72 6.44 14.72C4.14667 14.72 2.28 12.8533 2.28 10.56C2.28 9.07331 3.08 7.69331 4.37333 6.95331C4.68 6.77998 4.78667 6.38664 4.61333 6.07998C4.43333 5.77331 4.04 5.66665 3.73333 5.84665C2.04667 6.80665 1 8.61331 1 10.56C1 13.56 3.44 16 6.44 16C8.60667 16 10.5667 14.72 11.4267 12.7333C11.5667 12.4133 11.4133 12.0333 11.0933 11.8933Z',
									fill: '#030712',
								}),
								g.jsx('path', {
									d: 'M15.6733 12.56C15.54 12.2333 15.1733 12.0733 14.84 12.2L13.88 12.5867L12.4867 8.12667C12.4 7.86 12.1533 7.68 11.8733 7.68H7.3L7.1 6.4H9.62667C9.98 6.4 10.2667 6.11333 10.2667 5.76C10.2667 5.40667 9.98 5.12 9.62667 5.12H6.91333L6.58 2.98667C7.06667 2.71333 7.4 2.19333 7.4 1.6C7.4 0.72 6.68 0 5.8 0C4.92 0 4.2 0.72 4.2 1.6C4.2 2.30667 4.66667 2.90667 5.30667 3.11333L6.12667 8.42C6.17333 8.73333 6.44667 8.96 6.76 8.96H11.4067L12.8667 13.6333C12.92 13.8067 13.04 13.9467 13.2 14.02C13.2867 14.06 13.38 14.08 13.4733 14.08C13.5533 14.08 13.6333 14.0667 13.7133 14.0333L15.3133 13.3933C15.6467 13.2667 15.8067 12.8933 15.6733 12.56Z',
									fill: '#030712',
								}),
							],
						}),
				  })
				: null;
		},
		Iy = ({ type: e, location: t, selected: n, setSelected: r, fixed: i = !1, placeholder: s }) => {
			const o = () => {
				e === n ? r(null) : i || r(e);
			};
			return g.jsxs('div', {
				className: 'mapplic-wayfinding-position',
				children: [
					g.jsx('span', { className: 'mapplic-wayfinding-pin', style: { backgroundColor: t != null && t.id ? '#000' : 'transparent' } }),
					g.jsx('button', {
						style: {
							color: t != null && t.id ? 'var(--neutral-900)' : 'var(--neutral-500)',
							outlineColor: e === n ? 'var(--primary)' : 'transparent',
							fontWeight: t != null && t.id ? 'bold' : 'normal',
							backgroundColor: e === n ? 'var(--neutral-100)' : 'transparent',
						},
						onClick: o,
						children: g.jsx('span', { style: { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }, children: (t == null ? void 0 : t.title) || (t == null ? void 0 : t.id) || s }),
					}),
				],
			});
		},
		$P = Object.freeze(Object.defineProperty({ __proto__: null, default: zP }, Symbol.toStringTag, { value: 'Module' })),
		WP = ({ layer: e }) => {
			var o, a;
			const t = E((l) => l.paths),
				n = E((l) => l.data.settings),
				r = E((l) => l.data.settings.wayfindingLineColor),
				i = E((l) => l.data.settings.wayfindingLineWidth) || 3,
				s = (a = (o = t == null ? void 0 : t[t.length - 1]) == null ? void 0 : o.slice(-1)) == null ? void 0 : a[0];
			return t.length < 1
				? null
				: g.jsxs('svg', {
						viewBox: `0 0 ${n.mapWidth} ${n.mapHeight}`,
						style: { cursor: 'crosshair', pointerEvents: 'none', position: 'absolute', top: 0, left: 0 },
						children: [
							t.map((l, c) => (l[0].layer !== e ? null : g.jsx(UP, { i: c, path: l, dist: be(l[l.length - 1].realDist - l[0].realDist, 2) }, c))),
							s.layer === e &&
								g.jsxs('g', {
									children: [
										g.jsxs('circle', {
											cx: s.x,
											cy: s.y,
											fill: 'none',
											r: i,
											stroke: r,
											strokeWidth: '1',
											children: [
												g.jsx('animate', { attributeName: 'r', from: i, to: i * 2, dur: '1.5s', begin: '0s', repeatCount: 'indefinite' }),
												g.jsx('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1.5s', begin: '0s', repeatCount: 'indefinite' }),
											],
										}),
										g.jsx('circle', { cx: s.x, cy: s.y, fill: r, r: i }),
									],
								}),
						],
				  });
		},
		UP = ({ path: e, dist: t, i: n }) => {
			const r = E((j) => j.data.settings.wayfindingLineColor),
				i = E((j) => j.data.settings.wayfindingSmoothing),
				s = E((j) => j.data.settings.wayfindingLineWidth) || 3,
				o = E((j) => j.data.settings),
				a = E((j) => j.setTarget),
				l = E((j) => j.setOffset),
				c = E((j) => j.animatedPath),
				u = E((j) => j.setAnimatedPath),
				f = C.useRef(null),
				[d, m] = C.useState(!1);
			C.useEffect(() => {
				if (n === c) {
					const j = () => {
							m(!0),
								setTimeout(() => {
									u(c + 1);
								}, (o.wayfindingSpeed || 2) * 1e3 + 400);
						},
						v = f.current.getBBox();
					m(!1);
					const p = Math.max(v.width, v.height) / 2,
						h = { x: be((v.x + v.width / 2) / o.mapWidth, 4), y: be((v.y + v.height / 2) / o.mapHeight, 4), scale: be(Math.min(o.mapWidth / (v.width + p), o.mapHeight / (v.height + p)), 4) };
					l({ h: 0 }), a(h);
					const P = setTimeout(j, 200);
					return () => clearTimeout(P);
				}
			}, [t, e, l, a, o, n, c, u]);
			const w = (j, v, p) => {
					const h = parseFloat(v.x) - parseFloat(j.x),
						P = parseFloat(v.y) - parseFloat(j.y),
						R = Math.abs(j.realDist - v.realDist),
						L = Math.min(p, R / 2),
						S = L / R;
					return { x: parseFloat(j.x) + h * S, y: parseFloat(j.y) + P * S };
				},
				T = (j) => {
					let v = 'M ' + j[0].x + ',' + j[0].y;
					for (let p = 0; p < j.length; p++)
						if (i && p > 0 && p < j.length - 1) {
							const h = w(j[p], j[p - 1], i);
							(v += ' L' + h.x + ',' + h.y), (v += ' Q' + j[p].x + ',' + j[p].y);
							const P = w(j[p], j[p + 1], i);
							v += ' ' + P.x + ',' + P.y;
						} else v += ' L' + j[p].x + ',' + j[p].y;
					return v;
				};
			return g.jsxs('g', {
				children: [
					g.jsx('path', {
						className: 'mapplic-routes-line',
						ref: f,
						stroke: r,
						strokeOpacity: 0.3,
						strokeWidth: s,
						strokeLinecap: 'round',
						fill: 'none',
						d: T(e),
						style: {
							strokeDasharray: n >= c ? t + ' ' + t : 0,
							strokeDashoffset: d ? 0 : t,
							transitionDelay: '0.4s',
							transitionTimingFunction: 'ease-in-out',
							transitionDuration: `${o.wayfindingSpeed || 2}s`,
							transitionProperty: d ? 'stroke-dashoffset' : 'none',
						},
					}),
					g.jsx('path', { className: 'mapplic-routes-dashed', stroke: r, strokeOpacity: 1, strokeWidth: s / 2, strokeDasharray: `${s} ${s * 1.5}`, strokeLinecap: 'round', fill: 'none', d: T(e) }),
				],
			});
		},
		HP = Object.freeze(Object.defineProperty({ __proto__: null, default: WP }, Symbol.toStringTag, { value: 'Module' }));
})();
