<template>
  <div>
    <p class="codepen" :data-height="getHeight" :data-theme-id="theme" data-default-tab="css,result" :data-user="user"
       :data-slug-hash="penId"
       :style="`height: ${getHeight}px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;`"
       :data-pen-title="title">
  <span>See the Pen <a href="`https://codepen.io/${user}/pen/${penId}`">
  {{title}}</a> by {{name}} (<a :href="`https://codepen.io/${user}`">@{{user}}</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "CodePen",
    props: {
      title: String,
      user: String,
      name: String,
      penId: String,
      theme: String,
      height: Number
    },
    computed: {
      getHeight() {
        return this.height ? this.height : 300
      }
    },
    mounted() {
      // Taken from https://static.codepen.io/assets/embed/ei.js
      !function (e) {
        var t = {};

        function r(n) {
          if (t[n]) return t[n].exports;
          var a = t[n] = {i: n, l: !1, exports: {}};
          return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
        }

        r.m = e, r.c = t, r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, r.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
          }.bind(null, a));
          return n
        }, r.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default
          } : function () {
            return e
          };
          return r.d(t, "a", t), t
        }, r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "https://static.codepen.io/assets/packs/", r(r.s = 455)
      }({
        455: function (e, t, r) {
          "use strict";
          r.r(t);
          var n = {
            _HTML_TYPES: ["html", "xml", "haml", "markdown", "slim", "pug", "application/x-slim"],
            _CSS_TYPES: ["css", "less", "scss", "sass", "stylus", "postcss", "text/css", "text/x-sass", "text/x-scss", "text/x-less", "text/x-styl"],
            _JS_TYPES: ["js", "javascript", "coffeescript", "livescript", "typescript", "babel", "text/javascript", "text/x-coffeescript", "text/x-livescript", "text/typescript"],
            _CUSTOM_EDITOR_TYPES: {vue: "js", flutter: "js"},
            cmModeToType: function (e) {
              var t = this._getSafeInputMode(e);
              return this._getType(t)
            },
            _getSafeInputMode: function (e) {
              return ("string" == typeof e ? e : e.name).toLowerCase()
            },
            syntaxToType: function (e) {
              return this._getType(e)
            },
            _getType: function (e) {
              return -1 !== this._HTML_TYPES.indexOf(e) ? "html" : -1 !== this._CSS_TYPES.indexOf(e) ? "css" : -1 !== this._JS_TYPES.indexOf(e) ? "js" : this._CUSTOM_EDITOR_TYPES[e] ? this._CUSTOM_EDITOR_TYPES[e] : "unknown"
            }
          }, a = function e(t) {
            "loading" === document.readyState ? setTimeout((function () {
              e(t)
            }), 9) : t()
          }, i = ["title", "description", "tags", "html_classes", "head", "stylesheets", "scripts"], o = function (e) {
            for (var t = {}, r = e.attributes, n = 0, a = r.length; n < a; n++) {
              var i = r[n].name;
              0 === i.indexOf("data-") && (t[i.replace("data-", "")] = r[n].value)
            }
            return t = l(t), u(t) ? (t.user = s(t, e), t) : null
          }, s = function (e, t) {
            if ("string" == typeof e.user) return e.user;
            for (var r = 0, n = t.children.length; r < n; r++) {
              var a = (t.children[r].href || "").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
              if (a) return a[2]
            }
            return "anon"
          }, u = function (e) {
            return "prefill" in e || e["slug-hash"]
          }, l = function (e) {
            return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && ("true" === e.safe ? e.animations = "run" : e.animations = "stop-after-5"), e
          }, c = function (e) {
            return e.host ? p(e.host) : "https://codepen.io"
          }, p = function (e) {
            return e.match(/^\/\//) || !e.match(/https?:/) ? document.location.protocol + "//" + e : e
          }, d = function (e) {
            var t = "";
            for (var r in e) "prefill" !== r && ("" !== t && (t += "&"), t += r + "=" + encodeURIComponent(e[r]));
            return t
          }, f = function (e) {
            return e.height ? e.height : 300
          }, m = function (e, t) {
            var r, n = document.createDocumentFragment();
            n.appendChild(v(e)), "prefill" in e && (r = h(e, t), n.appendChild(r)), y(t, n), r && r.submit()
          }, _ = function (e, t) {
            var r = document.createElement(e);
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.setAttribute(n, t[n]);
            return r
          }, h = function (e, t) {
            var r = c(e), a = _("form", {
              class: "cp_embed_form",
              style: "display: none;",
              method: "post",
              action: r + "/embed/prefill/",
              target: e.name
            });
            for (var o in e.data = function (e) {
              if (e.hasAttribute("data-prefill")) {
                var t = {}, r = e.getAttribute("data-prefill");
                for (var a in r = JSON.parse(decodeURI(r) || "{}")) i.indexOf(a) > -1 && (t[a] = r[a]);
                for (var o = e.querySelectorAll("[data-lang]"), s = 0; s < o.length; s++) {
                  var u = o[s], l = u.getAttribute("data-lang");
                  u.getAttribute("data-options-autoprefixer") && (t.css_prefix = "autoprefixer");
                  var c = n.syntaxToType(l);
                  t[c] = u.innerText, l !== c && (t[c + "_pre_processor"] = l);
                  var p = u.getAttribute("data-lang-version");
                  p && (t[c + "_version"] = p)
                }
                return JSON.stringify(t)
              }
            }(t), e) "prefill" !== o && a.appendChild(_("input", {type: "hidden", name: o, value: e[o]}));
            return a
          }, v = function (e) {
            var t, r = function (e) {
              var t = c(e);
              if ("prefill" in e) return t + "/embed/prefill/";
              var r = d(e);
              return [t, e.user ? e.user : "anon", e.preview && "true" === e.preview ? "embed/preview" : "embed", e["slug-hash"] + "?" + r].join("/").replace(/\/\//g, "//")
            }(e);
            t = e["pen-title"] ? e["pen-title"] : "CodePen Embed";
            var n = {
              name: e.name || "CodePen Embed",
              src: r,
              scrolling: "no",
              frameborder: "0",
              height: f(e),
              allowTransparency: "true",
              allowfullscreen: "true",
              allowpaymentrequest: "true",
              title: t,
              class: "cp_embed_iframe " + (e.class ? e.class : ""),
              style: "width: 100%; overflow:hidden; display:block;",
              loading: "lazy"
            };
            return e["slug-hash"] && (n.id = "cp_embed_" + e["slug-hash"].replace("/", "_")), _("iframe", n)
          }, y = function (e, t) {
            if (e.parentNode) {
              var r = document.createElement("div");
              return r.className = "cp_embed_wrapper", r.appendChild(t), e.parentNode.replaceChild(r, e), r
            }
            return e.appendChild(t), e
          };
          var g = 1;

          function b(e) {
            e = "string" == typeof e ? e : ".codepen";
            for (var t = document.querySelectorAll(e), r = 0, n = t.length; r < n; r++) {
              var a = t[r], i = o(a);
              i && (i.name = "cp_embed_" + g++, m(i, a))
            }
            "function" == typeof __CodePenIFrameAddedToPage && __CodePenIFrameAddedToPage()
          }

          b.readme = "2019-01-18 - added version number back in.", window.__cp_eijs_version = "3.1.0", window.__cp_domReady = a, window.__CPEmbed = b, a(b)
        }
      });
    }
  }
</script>

<style scoped>

</style>