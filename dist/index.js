var dr = Object.defineProperty;
var vr = (w, g, o) => g in w ? dr(w, g, { enumerable: !0, configurable: !0, writable: !0, value: o }) : w[g] = o;
var j = (w, g, o) => vr(w, typeof g != "symbol" ? g + "" : g, o);
import je from "react";
import { StageBase as pr } from "@chub-ai/stages-ts";
import Ce from "axios";
var ee = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function hr() {
  if (Pe) return M;
  Pe = 1;
  var w = je, g = Symbol.for("react.element"), o = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, b = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(x, d, C) {
    var v, y = {}, E = null, S = null;
    C !== void 0 && (E = "" + C), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) l.call(d, v) && !A.hasOwnProperty(v) && (y[v] = d[v]);
    if (x && x.defaultProps) for (v in d = x.defaultProps, d) y[v] === void 0 && (y[v] = d[v]);
    return { $$typeof: g, type: x, key: E, ref: S, props: y, _owner: b.current };
  }
  return M.Fragment = o, M.jsx = P, M.jsxs = P, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function gr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var w = je, g = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), D = Symbol.iterator, Y = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var I = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var a = I.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, De = !1, Ie = !1, $e = !1, Fe = !1, re;
    re = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === A || Fe || e === b || e === C || e === v || $e || e === S || Ae || De || Ie || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === y || e.$$typeof === P || e.$$typeof === x || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case o:
          return "Portal";
        case A:
          return "Profiler";
        case b:
          return "StrictMode";
        case C:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return te(r) + ".Consumer";
          case P:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Ge(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : T(e.type) || "Memo";
          case E: {
            var s = e, u = s._payload, i = s._init;
            try {
              return T(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, U = 0, ae, ne, ie, oe, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if (U === 0) {
          ae = console.log, ne = console.info, ie = console.warn, oe = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        U++;
      }
    }
    function We() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ae
            }),
            info: O({}, e, {
              value: ne
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: oe
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: ue
            }),
            groupEnd: O({}, e, {
              value: le
            })
          });
        }
        U < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = I.ReactCurrentDispatcher, z;
    function L(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            z = a && a[1] || "";
          }
        return `
` + z + e;
      }
    }
    var q = !1, V;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ye();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              a = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              a = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            a = m;
          }
          e();
        }
      } catch (m) {
        if (m && a && typeof m.stack == "string") {
          for (var n = m.stack.split(`
`), h = a.stack.split(`
`), c = n.length - 1, f = h.length - 1; c >= 1 && f >= 0 && n[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (n[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || n[c] !== h[f]) {
                    var R = `
` + n[c].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, R), R;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = u, We(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", k = F ? L(F) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case C:
          return L("Suspense");
        case v:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Le(e.render);
          case y:
            return K(e.type, r, t);
          case E: {
            var a = e, s = a._payload, u = a._init;
            try {
              return K(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, de = {}, ve = I.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ke(e, r, t, a, s) {
      {
        var u = Function.call.bind(G);
        for (var i in e)
          if (u(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              n = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              n = c;
            }
            n && !(n instanceof Error) && (N(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), N(null)), n instanceof Error && !(n.message in de) && (de[n.message] = !0, N(s), p("Failed %s type: %s", t, n.message), N(null));
          }
      }
    }
    var Ne = Array.isArray;
    function J(e) {
      return Ne(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var ge = I.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, me;
    function Je(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, s, u, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function rr(e, r, t, a, s) {
      {
        var u, i = {}, n = null, h = null;
        t !== void 0 && (he(t), n = "" + t), Xe(r) && (he(r.key), n = "" + r.key), Je(r) && (h = r.ref, He(r, s));
        for (u in r)
          G.call(r, u) && !qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (n || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Qe(i, f), h && Ze(i, f);
        }
        return er(e, n, h, s, a, ge.current, i);
      }
    }
    var X = I.ReactCurrentOwner, be = I.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Se() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var _e = {};
    function ar(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + T(e._owner.type) + "."), $(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Q(a) && Ee(a, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Oe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              Q(i.value) && Ee(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = T(r);
          Ke(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var s = T(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var xe = {};
    function we(e, r, t, a, s, u) {
      {
        var i = Ue(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = tr();
          h ? n += h : n += Se();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === g ? (c = "<" + (T(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, n);
        }
        var f = rr(e, r, t, s, u);
        if (f == null)
          return f;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (a)
              if (J(R)) {
                for (var F = 0; F < R.length; F++)
                  Re(R[F], e);
                Object.freeze && Object.freeze(R);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(R, e);
        }
        if (G.call(r, "key")) {
          var k = T(e), m = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Z = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[k + Z]) {
            var cr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, k, cr, k), xe[k + Z] = !0;
          }
        }
        return e === l ? ir(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = or;
    W.Fragment = l, W.jsx = ur, W.jsxs = lr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = hr() : ee.exports = gr();
var _ = ee.exports;
class _r extends pr {
  constructor(o) {
    super(o);
    // Visual Scene Composer state
    j(this, "visualState");
    // Configuration
    j(this, "chubApiKey");
    j(this, "imageQuality");
    j(this, "sceneStyle");
    j(this, "maxCharacters");
    // Main scene capture function - triggered by button press
    j(this, "captureScene", async () => {
      if (!this.visualState.isGenerating) {
        this.visualState.isGenerating = !0, this.visualState.generationProgress = "Analyzing scene context...", this.visualState.errorMessage = void 0, this.forceUpdate();
        try {
          const o = await this.parseSceneContext();
          this.visualState.sceneContext = o;
          const l = this.createScenePrompt(o);
          this.visualState.generationProgress = "Generating scene image...", this.forceUpdate();
          const b = await this.generateSceneImage(l);
          if (b)
            this.visualState.lastGeneratedImage = b, this.visualState.generationProgress = "Scene captured successfully!";
          else
            throw new Error("No image URL returned");
        } catch (o) {
          console.error("Scene capture error:", o), this.visualState.errorMessage = o.message || "Unknown error occurred", this.visualState.generationProgress = "Generation failed";
        } finally {
          this.visualState.isGenerating = !1, this.forceUpdate(), setTimeout(() => {
            this.visualState.generationProgress = "Ready", this.visualState.errorMessage = void 0, this.forceUpdate();
          }, 3e3);
        }
      }
    });
    j(this, "forceUpdate", () => {
      this.visualState = { ...this.visualState };
    });
    const { config: l, messageState: b } = o;
    this.chubApiKey = (l == null ? void 0 : l.chub_api_key) || "", this.imageQuality = (l == null ? void 0 : l.image_quality) || "standard", this.sceneStyle = (l == null ? void 0 : l.scene_style) || "cinematic", this.maxCharacters = (l == null ? void 0 : l.max_characters) || 3, this.visualState = {
      isGenerating: !1,
      lastGeneratedImage: b == null ? void 0 : b.last_generated_image,
      sceneContext: void 0,
      generationProgress: "Ready",
      errorMessage: void 0
    };
  }
  async load() {
    return {
      success: !0,
      error: null,
      initState: { composer_ready: !0 },
      chatState: { generated_images: [] }
    };
  }
  async setState(o) {
    o != null && (this.visualState = {
      ...this.visualState,
      lastGeneratedImage: o.last_generated_image || this.visualState.lastGeneratedImage
    });
  }
  // NO AUTO-GENERATION - Only context storage
  async beforePrompt(o) {
    return {
      stageDirections: null,
      messageState: null,
      modifiedMessage: null,
      systemMessage: null,
      error: null,
      chatState: null
    };
  }
  async afterResponse(o) {
    return {
      stageDirections: null,
      messageState: null,
      modifiedMessage: null,
      systemMessage: null,
      error: null,
      chatState: null
    };
  }
  // Visual Scene Composer - Chub Image API Integration
  async generateSceneImage(o) {
    var P;
    if (!this.chubApiKey)
      throw new Error("No Chub API key configured");
    const l = "https://api.chub.ai", b = "/images/text2img", A = {
      prompt: o,
      width: 1024,
      height: 1024,
      num_inference_steps: this.imageQuality === "high" ? 50 : 30,
      guidance_scale: 3.5
    };
    try {
      const d = (P = (await Ce.post(`${l}${b}`, A, {
        headers: {
          Authorization: `Bearer ${this.chubApiKey}`,
          "Content-Type": "application/json"
        },
        timeout: 1e4
      })).data) == null ? void 0 : P.generation_uuid;
      if (!d)
        throw new Error("No generation UUID received");
      const C = 30, v = 2e3;
      for (let y = 1; y <= C; y++) {
        this.visualState.generationProgress = `Generating... ${y}/${C}`, this.forceUpdate(), await new Promise((E) => setTimeout(E, v));
        try {
          const S = (await Ce.post(`${l}/check`, {
            generation_uuid: d,
            request_type: "image"
          }, {
            headers: {
              Authorization: `Bearer ${this.chubApiKey}`,
              "Content-Type": "application/json"
            },
            timeout: 5e3
          })).data, D = S.status || S.state;
          if (D === "completed") {
            const Y = S.image_url || S.url;
            if (Y)
              return Y;
            if (S.images && S.images.length > 0)
              return S.images[0];
          } else if (D === "failed" || D === "error")
            throw new Error(`Generation failed: ${S.error || "Unknown error"}`);
        } catch (E) {
          console.warn(`Poll attempt ${y} failed:`, E);
        }
      }
      throw new Error("Generation timed out");
    } catch (x) {
      throw console.error("Image generation error:", x), x;
    }
  }
  async parseSceneContext() {
    return {
      characters: ["characters"],
      // Will implement character detection
      location: "scene location",
      actions: "conversation",
      mood: "neutral",
      timeOfDay: "day"
    };
  }
  createScenePrompt(o) {
    return `${this.sceneStyle} scene: ${o.characters.join(" and ")} ${o.actions} at ${o.location}, ${o.mood} mood, ${o.timeOfDay} lighting, high quality, detailed`;
  }
  render() {
    return /* @__PURE__ */ _.jsxs("div", { style: {
      width: "100%",
      height: "100%",
      padding: "20px",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      color: "#ffffff",
      fontFamily: "sans-serif",
      overflow: "auto"
    }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { marginBottom: "20px" }, children: [
        /* @__PURE__ */ _.jsx("h3", { style: { margin: "0 0 10px 0", color: "#ffd700" }, children: "📸 Visual Scene Composer" }),
        /* @__PURE__ */ _.jsxs("div", { style: { fontSize: "14px", opacity: 0.8 }, children: [
          this.sceneStyle,
          " • ",
          this.imageQuality,
          " quality"
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: {
        background: "rgba(255,255,255,0.1)",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        border: "1px solid rgba(255,215,0,0.3)"
      }, children: [
        /* @__PURE__ */ _.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px"
        }, children: [
          /* @__PURE__ */ _.jsx("strong", { style: { color: "#ffd700" }, children: "📸 Scene Capture" }),
          /* @__PURE__ */ _.jsx(
            "button",
            {
              onClick: this.captureScene,
              disabled: this.visualState.isGenerating || !this.chubApiKey,
              style: {
                background: this.visualState.isGenerating || !this.chubApiKey ? "#666" : "#4a9eff",
                border: "none",
                color: "white",
                padding: "8px 16px",
                borderRadius: "15px",
                cursor: this.visualState.isGenerating || !this.chubApiKey ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "bold"
              },
              children: this.visualState.isGenerating ? "⏳ Generating..." : "📸 Capture Scene"
            }
          )
        ] }),
        /* @__PURE__ */ _.jsxs("div", { style: {
          fontSize: "12px",
          color: this.visualState.errorMessage ? "#ff6b6b" : this.visualState.isGenerating ? "#4a9eff" : "#ffd700",
          marginBottom: "10px"
        }, children: [
          "Status: ",
          this.visualState.errorMessage || this.visualState.generationProgress
        ] }),
        this.visualState.lastGeneratedImage && /* @__PURE__ */ _.jsx("div", { style: { marginTop: "15px" }, children: /* @__PURE__ */ _.jsx(
          "img",
          {
            src: this.visualState.lastGeneratedImage,
            style: {
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              border: "2px solid rgba(255,215,0,0.5)"
            },
            alt: "Generated scene"
          }
        ) }),
        this.visualState.sceneContext && /* @__PURE__ */ _.jsxs("div", { style: {
          marginTop: "10px",
          fontSize: "12px",
          opacity: 0.7,
          fontStyle: "italic"
        }, children: [
          "Scene: ",
          this.visualState.sceneContext.characters.join(", "),
          " • ",
          this.visualState.sceneContext.location,
          " • ",
          this.visualState.sceneContext.mood
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("div", { style: {
        fontSize: "12px",
        opacity: 0.7,
        textAlign: "center"
      }, children: this.chubApiKey ? "🟢 Connected to Chub API" : "⚠️ No Chub API key configured - Add chub_api_key to stage settings" })
    ] });
  }
}
export {
  _r as Stage
};
