/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null), l, d = function () { clearTimeout(l); l = setTimeout(n, 100) }, m = function () { }, t = function () {
      window.addEventListener("resize", d, !1); window.addEventListener("orientationchange", d, !1); if (window.MutationObserver) {
        var k = new MutationObserver(d); k.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }); m = function () {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange",
              d, !1)
          } catch (v) { }
        }
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function () { document.documentElement.removeEventListener("DOMSubtreeModified", d, !1); window.removeEventListener("resize", d, !1); window.removeEventListener("orientationchange", d, !1) }
    }, u = function (k) {
      function e(a) { if (void 0 !== a.protocol) var c = a; else c = document.createElement("a"), c.href = a; return c.protocol.replace(/:/g, "") + c.host } if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest; var m = e(location); k = e(k); d = void 0 ===
          d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest
      } return d
    }; var n = function () {
      function d() { --q; 0 === q && (m(), t()) } function l(a) { return function () { !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash)) } } function p(a) {
        return function () {
          var c = document.body, b = document.createElement("x"); a.onload = null; b.innerHTML = a.responseText; if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden",
            "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild); d()
        }
      } function n(a) { return function () { a.onerror = null; a.ontimeout = null; d() } } var a, c, q = 0; m(); var f = document.getElementsByTagName("use"); for (c = 0; c < f.length; c += 1) {
        try { var g = f[c].getBoundingClientRect() } catch (w) { g = !1 } var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""]; var b =
          h[0]; h = h[1]; var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom; g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({ useEl: f[c], base: b, hash: h }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h, e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({ useEl: f[c], base: b, hash: h }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(),
            delete e[b].onload, e[b] = !0)
      } f = ""; q += 1; d()
    }; var p = function () { window.removeEventListener("load", p, !1); l = setTimeout(n, 0) }; "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p()
  }
})();

// zenscroll
!function (t, e) { "function" == typeof define && define.amd ? define([], e()) : "object" == typeof module && module.exports ? module.exports = e() : function n() { document && document.body ? t.zenscroll = e() : setTimeout(n, 9) }() }(this, function () { "use strict"; var t = function (t) { return t && "getComputedStyle" in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"] }; if ("undefined" == typeof window || !("document" in window)) return {}; var e = function (e, n, o) { n = n || 999, o || 0 === o || (o = 9); var i, r = function (t) { i = t }, u = function () { clearTimeout(i), r(0) }, c = function (t) { return Math.max(0, e.getTopOf(t) - o) }, a = function (o, i, c) { if (u(), 0 === i || i && i < 0 || t(e.body)) e.toY(o), c && c(); else { var a = e.getY(), f = Math.max(0, o) - a, s = (new Date).getTime(); i = i || Math.min(Math.abs(f), n), function t() { r(setTimeout(function () { var n = Math.min(1, ((new Date).getTime() - s) / i), o = Math.max(0, Math.floor(a + f * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1))); e.toY(o), n < 1 && e.getHeight() + o < e.body.scrollHeight ? t() : (setTimeout(u, 99), c && c()) }, 9)) }() } }, f = function (t, e, n) { a(c(t), e, n) }, s = function (t, n, i) { var r = t.getBoundingClientRect().height, u = e.getTopOf(t) + r, s = e.getHeight(), l = e.getY(), d = l + s; c(t) < l || r + o > s ? f(t, n, i) : u + o > d ? a(u - s + o, n, i) : i && i() }, l = function (t, n, o, i) { a(Math.max(0, e.getTopOf(t) - e.getHeight() / 2 + (o || t.getBoundingClientRect().height / 2)), n, i) }; return { setup: function (t, e) { return (0 === t || t) && (n = t), (0 === e || e) && (o = e), { defaultDuration: n, edgeOffset: o } }, to: f, toY: a, intoView: s, center: l, stop: u, moving: function () { return !!i }, getY: e.getY, getTopOf: e.getTopOf } }, n = document.documentElement, o = function () { return window.scrollY || n.scrollTop }, i = e({ body: document.scrollingElement || document.body, toY: function (t) { window.scrollTo(0, t) }, getY: o, getHeight: function () { return window.innerHeight || n.clientHeight }, getTopOf: function (t) { return t.getBoundingClientRect().top + o() - n.offsetTop } }); if (i.createScroller = function (t, o, i) { return e({ body: t, toY: function (e) { t.scrollTop = e }, getY: function () { return t.scrollTop }, getHeight: function () { return Math.min(t.clientHeight, window.innerHeight || n.clientHeight) }, getTopOf: function (t) { return t.offsetTop } }, o, i) }, "addEventListener" in window && !window.noZensmooth && !t(document.body)) { var r = "history" in window && "pushState" in history, u = r && "scrollRestoration" in history; u && (history.scrollRestoration = "auto"), window.addEventListener("load", function () { u && (setTimeout(function () { history.scrollRestoration = "manual" }, 9), window.addEventListener("popstate", function (t) { t.state && "zenscrollY" in t.state && i.toY(t.state.zenscrollY) }, !1)), window.location.hash && setTimeout(function () { var t = i.setup().edgeOffset; if (t) { var e = document.getElementById(window.location.href.split("#")[1]); if (e) { var n = Math.max(0, i.getTopOf(e) - t), o = i.getY() - n; 0 <= o && o < 9 && window.scrollTo(0, n) } } }, 9) }, !1); var c = new RegExp("(^|\\s)noZensmooth(\\s|$)"); window.addEventListener("click", function (t) { for (var e = t.target; e && "A" !== e.tagName;)e = e.parentNode; if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) { if (u) { var n = history.state && "object" == typeof history.state ? history.state : {}; n.zenscrollY = i.getY(); try { history.replaceState(n, "") } catch (t) { } } var o = e.getAttribute("href") || ""; if (0 === o.indexOf("#") && !c.test(e.className)) { var a = 0, f = document.getElementById(o.substring(1)); if ("#" !== o) { if (!f) return; a = i.getTopOf(f) } t.preventDefault(); var s = function () { window.location = o }, l = i.setup().edgeOffset; l && (a = Math.max(0, a - l), r && (s = function () { history.pushState({}, "", o) })), i.toY(a, null, s) } } }, !1) } return i });

// numbered

(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { module.exports = factory() } else { root.Numbered = factory() } }(this, function () {
  'use strict'; var defaults = { mask: '+7 (###) ### - ## - ##', numbered: '#', empty: '_', placeholder: !1 }; var Numbered = function (target, params) {
    var self = this; if (typeof target !== 'object') { self.inputs = document.querySelectorAll(target) } else if (typeof target.length !== 'undefined') { self.inputs = target } else { self.inputs = [target] }
    self.inputs = Array.prototype.slice.call(self.inputs); params = params || (typeof self.inputs[0].numbered !== 'undefined' ? self.inputs[0].numbered.params : {}); for (var def in defaults) { if (typeof params[def] === 'undefined') { params[def] = defaults[def] } }
    self.params = params; self.config = {}; self.config.placeholder = self.params.mask.replace(new RegExp(self.params.numbered, 'g'), self.params.empty); self.config.numbered = self.params.numbered.replace(/([()[\]\.^\#$|?+-])/g, '\\\\$1'); self.config.numberedCol = self.params.mask.split(self.params.numbered).length - 1; self.config.empty = self.params.empty.replace(/([()[\]\.^\#$|?+-])/g, '\\$1'); self.config.mask = self.params.mask.replace(/([()[\]\.^\#$|?+-])/g, '\\$1').replace(new RegExp(self.config.numbered, 'g'), '(\\d)'); self.config.maskNums = self.params.mask.replace(/[^\d]/gi, '').split(''); self.config.maskNumsCol = self.config.maskNums.length; self.config.regexp = new RegExp('^' + self.config.mask + '$'); self.config.events = ['input', 'change', 'click', 'focusin', 'blur']; self._eventFire = function (el, etype) { if (el.fireEvent) { el.fireEvent('on' + etype) } else { var evObj = document.createEvent('Events'); evObj.initEvent(etype, !0, !1); el.dispatchEvent(evObj) } }; self._getSelectionRange = function (oElm) {
      var r = { text: '', start: 0, end: 0, length: 0 }; if (oElm.setSelectionRange) { r.start = oElm.selectionStart; r.end = oElm.selectionEnd; r.text = (r.start != r.end) ? oElm.value.substring(r.start, r.end) : '' } else if (document.selection) {
        var oR; if (oElm.tagName && oElm.tagName === 'TEXTAREA') { var oS = document.selection.createRange().duplicate(); oR = oElm.createTextRange(); var sB = oS.getBookmark(); oR.moveToBookmark(sB) } else { oR = document.selection.createRange().duplicate() }
        r.text = oR.text; for (; oR.moveStart('character', -1) !== 0; r.start++); r.end = r.text.length + r.start
      }
      r.length = r.text.length; return r
    }; self.magic = function (event) {
      var numbered = this.numbered; var value = numbered.input.value || ' '; var valueFormatted = value.replace(/[^\d]/gi, '').split('').join(''); var valueFormattedArr = valueFormatted.split(''); var valueFormattedCol = valueFormattedArr.length; var valueFormattedIndex = 0; var positionStart = -1; var positionEnd = -1; var positionOld = self._getSelectionRange(numbered.input); var maskNumsIndex = 0; var valueFormattedRes = []; var maskSplit = numbered.params.mask.split(''); for (var key in maskSplit) {
        var val = maskSplit[key]; key = parseInt(key); if (maskNumsIndex <= numbered.config.maskNumsCol && val == numbered.config.maskNums[maskNumsIndex] && val == valueFormattedArr[valueFormattedIndex]) { valueFormattedRes.push(val); maskNumsIndex++; valueFormattedIndex++ } else if (val == numbered.params.numbered) {
          if (positionStart < 0) { positionStart = key }
          if (valueFormattedIndex < valueFormattedCol) { valueFormattedRes.push(valueFormattedArr[valueFormattedIndex]); valueFormattedIndex++; positionEnd = key } else { valueFormattedRes.push(numbered.params.empty) }
        } else { valueFormattedRes.push(val) }
      }
      value = valueFormattedRes.join(''); var position = (positionEnd >= 0 ? positionEnd + 1 : positionStart); if (event.type !== 'click') { if ((event.type === 'blur' || event.type === 'change') && valueFormattedIndex - maskNumsIndex === 0 && !numbered.params.placeholder) { this.value = '' } else if (numbered.oldValue !== numbered.input.value || event.type === 'focusin') { this.value = value } }
      if (event.type !== 'change' && event.type !== 'blur' && (event.type !== 'click' || (numbered.lastEvent === 'focusin' && event.type === 'click'))) { if (numbered.input.setSelectionRange) { numbered.input.setSelectionRange(position, position) } else if (numbered.input.createTextRange) { var range = numbered.input.createTextRange(); range.collapse(!0); range.moveEnd('character', position); range.moveStart('character', position); range.select() } }
      numbered.oldValue = this.value; numbered.lastEvent = event.type; return event.target
    }; for (var index in self.inputs) {
      var $input = self.inputs[index]; var is = !1; if (typeof $input.numbered === 'оbject' || typeof $input.numbered !== 'undefined') { is = !0 }
      $input.numbered = { input: self.inputs[index], config: self.config, params: self.params, oldValue: !1 }; if (!is) {
        for (var key in self.config.events) { $input.addEventListener(self.config.events[key], self.magic) }
        self._eventFire($input, 'blur')
      }
      self.inputs[index] = $input
    }
    self.destroy = function () {
      var self = this; for (var index in self.inputs) { var $input = self.inputs[index]; for (var key in self.config.events) { $input.removeEventListener(self.config.events[key], self.magic); $input.numbered = null } }
      return null
    }; self.validate = function (i) {
      var input = i || !1; var self = this; var res = self.inputs.length > 1 ? [] : !1; var inputs = input !== !1 ? [input] : self.inputs; for (var index in inputs) {
        var $input = inputs[index]; var validate; if (inputs[index].numbered.config.regexp.test(inputs[index].numbered.input.value)) { validate = 1 } else if (inputs[index].numbered.input.value === '' || inputs[index].numbered.input.value === inputs[index].numbered.config.placeholder) { validate = 0 } else { validate = -1 }
        if (inputs.length > 1) { res.push(validate) } else { res = validate }
      }
      return res
    }; self.reInit = function () {
      var self = this; var res = self.inputs.length > 1 ? [] : !1; for (var index in self.inputs) { var $input = self.inputs[index]; self._eventFire($input, 'blur') }
      return res
    }; self.setVal = function (value) {
      var self = this; var res = self.inputs.length > 1 ? [] : !1; for (var index in self.inputs) { var $input = self.inputs[index]; $input.value = value; self._eventFire($input, 'blur') }
      return res
    }; self.getVal = function (r) {
      var raw = r || !1; var values = []; for (var index in this.inputs) {
        var $input = this.inputs[index]; var value = $input.value; if (raw) { if (this.validate($input) > 0) { var arr = value.match(this.config.regexp); value = arr.slice(1, arr.length).join('') } else { value = $input.value.replace(/[^\d]/gi, '') } }
        values.push(value)
      }
      return values.length > 1 ? values : values[0]
    }; return self
  }; return Numbered
}))

var phones = document.querySelectorAll('input[type=tel]');

if (phones) {
  new Numbered(phones);
}
