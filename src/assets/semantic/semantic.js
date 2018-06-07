 /*
  * # Semantic UI - 2.1.7
  * https://github.com/Semantic-Org/Semantic-UI
  * http://www.semantic-ui.com/
  *
  * Copyright 2014 Contributors
  * Released under the MIT license
  * http://opensource.org/licenses/MIT
  *
  */
 ! function(e, t, n, i) {
     e.site = e.fn.site = function(o) {
         var a, r, s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1),
             m = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
             f = m.namespace,
             g = m.error,
             p = "module-" + f,
             v = e(n),
             h = v,
             b = this,
             y = h.data(p);
         return a = {
             initialize: function() {
                 a.instantiate()
             },
             instantiate: function() {
                 a.verbose("Storing instance of site", a), y = a, h.data(p, a)
             },
             normalize: function() {
                 a.fix.console(), a.fix.requestAnimationFrame()
             },
             fix: {
                 console: function() {
                     a.debug("Normalizing window.console"), (console === i || console.log === i) && (a.verbose("Console not available, normalizing events"), a.disable.console()), ("undefined" == typeof console.group || "undefined" == typeof console.groupEnd || "undefined" == typeof console.groupCollapsed) && (a.verbose("Console group not available, normalizing events"), t.console.group = function() {}, t.console.groupEnd = function() {}, t.console.groupCollapsed = function() {}), "undefined" == typeof console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function() {})
                 },
                 consoleClear: function() {
                     a.debug("Disabling programmatic console clearing"), t.console.clear = function() {}
                 },
                 requestAnimationFrame: function() {
                     a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                         setTimeout(e, 0)
                     })
                 }
             },
             moduleExists: function(t) {
                 return e.fn[t] !== i && e.fn[t].settings !== i
             },
             enabled: {
                 modules: function(t) {
                     var n = [];
                     return t = t || m.modules, e.each(t, function(e, t) {
                         a.moduleExists(t) && n.push(t)
                     }), n
                 }
             },
             disabled: {
                 modules: function(t) {
                     var n = [];
                     return t = t || m.modules, e.each(t, function(e, t) {
                         a.moduleExists(t) || n.push(t)
                     }), n
                 }
             },
             change: {
                 setting: function(t, n, o, r) {
                     o = "string" == typeof o ? "all" === o ? m.modules : [o] : o || m.modules, r = r !== i ? r : !0, e.each(o, function(i, o) {
                         var s, c = a.moduleExists(o) ? e.fn[o].settings.namespace || !1 : !0;
                         a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && c && (s = e(":data(module-" + c + ")"), s.length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n))))
                     })
                 },
                 settings: function(t, n, o) {
                     n = "string" == typeof n ? [n] : n || m.modules, o = o !== i ? o : !0, e.each(n, function(n, i) {
                         var r;
                         a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && f && (r = e(":data(module-" + f + ")"), r.length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t))))
                     })
                 }
             },
             enable: {
                 console: function() {
                     a.console(!0)
                 },
                 debug: function(e, t) {
                     e = e || m.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
                 },
                 verbose: function(e, t) {
                     e = e || m.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
                 }
             },
             disable: {
                 console: function() {
                     a.console(!1)
                 },
                 debug: function(e, t) {
                     e = e || m.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
                 },
                 verbose: function(e, t) {
                     e = e || m.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
                 }
             },
             console: function(e) {
                 if (e) {
                     if (y.cache.console === i) return void a.error(g.console);
                     a.debug("Restoring console function"), t.console = y.cache.console
                 } else a.debug("Disabling console function"), y.cache.console = t.console, t.console = {
                     clear: function() {},
                     error: function() {},
                     group: function() {},
                     groupCollapsed: function() {},
                     groupEnd: function() {},
                     info: function() {},
                     log: function() {},
                     markTimeline: function() {},
                     warn: function() {}
                 }
             },
             destroy: function() {
                 a.verbose("Destroying previous site for", h), h.removeData(p)
             },
             cache: {},
             setting: function(t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, m, t);
                 else {
                     if (n === i) return m[t];
                     m[t] = n
                 }
             },
             internal: function(t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, a, t);
                 else {
                     if (n === i) return a[t];
                     a[t] = n
                 }
             },
             debug: function() {
                 m.debug && (m.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), a.debug.apply(console, arguments)))
             },
             verbose: function() {
                 m.verbose && m.debug && (m.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), a.verbose.apply(console, arguments)))
             },
             error: function() {
                 a.error = Function.prototype.bind.call(console.error, console, m.name + ":"), a.error.apply(console, arguments)
             },
             performance: {
                 log: function(e) {
                     var t, n, i;
                     m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                         Element: b,
                         Name: e[0],
                         Arguments: [].slice.call(e, 1) || "",
                         "Execution Time": n
                     })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                 },
                 display: function() {
                     var t = m.name + ":",
                         n = 0;
                     s = !1, clearTimeout(a.performance.timer), e.each(c, function(e, t) {
                         n += t["Execution Time"]
                     }), t += " " + n + "ms", (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                         console.log(t.Name + ": " + t["Execution Time"] + "ms")
                     }), console.groupEnd()), c = []
                 }
             },
             invoke: function(t, n, o) {
                 var s, c, l, u = y;
                 return n = n || d, o = b || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
                     var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                     if (e.isPlainObject(u[r]) && n != s) u = u[r];
                     else {
                         if (u[r] !== i) return c = u[r], !1;
                         if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                         u = u[o]
                     }
                 })), e.isFunction(c) ? l = c.apply(o, n) : c !== i && (l = c), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), c
             }
         }, u ? (y === i && a.initialize(), a.invoke(l)) : (y !== i && a.destroy(), a.initialize()), r !== i ? r : this
     }, e.site.settings = {
         name: "Site",
         namespace: "site",
         error: {
             console: "Console cannot be restored, most likely it was overwritten outside of module",
             method: "The method you called is not defined."
         },
         debug: !1,
         verbose: !1,
         performance: !0,
         modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
         siteNamespace: "site",
         namespaceStub: {
             cache: {},
             config: {},
             sections: {},
             section: {},
             utilities: {}
         }
     }, e.extend(e.expr[":"], {
         data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
             return function(n) {
                 return !!e.data(n, t)
             }
         }) : function(t, n, i) {
             return !!e.data(t, i[3])
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.form = function(t) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = arguments[1],
             d = "string" == typeof l,
             m = [].slice.call(arguments, 1);
         return a.each(function() {
             var f, g, p, v, h, b, y, x, C, w, k, S, T, A, R, E, P, F, D = e(this),
                 O = this,
                 q = [],
                 j = !1;
             F = {
                 initialize: function() {
                     F.get.settings(), d ? (P === i && F.instantiate(), F.invoke(l)) : (F.verbose("Initializing form validation", D, x), F.bindEvents(), F.set.defaults(), F.instantiate())
                 },
                 instantiate: function() {
                     F.verbose("Storing instance of module", F), P = F, D.data(R, F)
                 },
                 destroy: function() {
                     F.verbose("Destroying previous module", P), F.removeEvents(), D.removeData(R)
                 },
                 refresh: function() {
                     F.verbose("Refreshing selector cache"), f = D.find(k.field), g = D.find(k.group), p = D.find(k.message), v = D.find(k.prompt), h = D.find(k.submit), b = D.find(k.clear), y = D.find(k.reset)
                 },
                 submit: function() {
                     F.verbose("Submitting form", D), D.submit()
                 },
                 attachEvents: function(t, n) {
                     n = n || "submit", e(t).on("click" + E, function(e) {
                         F[n](), e.preventDefault()
                     })
                 },
                 bindEvents: function() {
                     F.verbose("Attaching form events"), D.on("submit" + E, F.validate.form).on("blur" + E, k.field, F.event.field.blur).on("click" + E, k.submit, F.submit).on("click" + E, k.reset, F.reset).on("click" + E, k.clear, F.clear), x.keyboardShortcuts && D.on("keydown" + E, k.field, F.event.field.keydown), f.each(function() {
                         var t = e(this),
                             n = t.prop("type"),
                             i = F.get.changeEvent(n, t);
                         e(this).on(i + E, F.event.field.change)
                     })
                 },
                 clear: function() {
                     f.each(function() {
                         var t = e(this),
                             n = t.parent(),
                             i = t.closest(g),
                             o = i.find(k.prompt),
                             a = t.data(w.defaultValue) || "",
                             r = n.is(k.uiCheckbox),
                             s = n.is(k.uiDropdown),
                             c = i.hasClass(S.error);
                         c && (F.verbose("Resetting error on field", i), i.removeClass(S.error), o.remove()), s ? (F.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (F.verbose("Resetting field value", t, a), t.val(""))
                     })
                 },
                 reset: function() {
                     f.each(function() {
                         var t = e(this),
                             n = t.parent(),
                             o = t.closest(g),
                             a = o.find(k.prompt),
                             r = t.data(w.defaultValue),
                             s = n.is(k.uiCheckbox),
                             c = n.is(k.uiDropdown),
                             l = o.hasClass(S.error);
                         r !== i && (l && (F.verbose("Resetting error on field", o), o.removeClass(S.error), a.remove()), c ? (F.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : s ? (F.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (F.verbose("Resetting field value", t, r), t.val(r)))
                     })
                 },
                 is: {
                     bracketedRule: function(e) {
                         return e.type && e.type.match(x.regExp.bracket)
                     },
                     valid: function() {
                         var t = !0;
                         return F.verbose("Checking if form is valid"), e.each(C, function(e, n) {
                             F.validate.field(n, e) || (t = !1)
                         }), t
                     }
                 },
                 removeEvents: function() {
                     D.off(E), f.off(E), h.off(E), f.off(E)
                 },
                 event: {
                     field: {
                         keydown: function(t) {
                             var n = e(this),
                                 i = t.which,
                                 o = {
                                     enter: 13,
                                     escape: 27
                                 };
                             i == o.escape && (F.verbose("Escape key pressed blurring field"), n.blur()), !t.ctrlKey && i == o.enter && n.is(k.input) && n.not(k.checkbox).length > 0 && (j || (n.one("keyup" + E, F.event.field.keyup), F.submit(), F.debug("Enter pressed on input submitting form")), j = !0)
                         },
                         keyup: function() {
                             j = !1
                         },
                         blur: function(t) {
                             var n = e(this),
                                 i = n.closest(g),
                                 o = F.get.validation(n);
                             i.hasClass(S.error) ? (F.debug("Revalidating field", n, o), F.validate.form.call(F, t, !0)) : ("blur" == x.on || "change" == x.on) && o && F.validate.field(o)
                         },
                         change: function(t) {
                             var n = e(this),
                                 i = n.closest(g);
                             ("change" == x.on || i.hasClass(S.error) && x.revalidate) && (clearTimeout(F.timer), F.timer = setTimeout(function() {
                                 F.debug("Revalidating field", n, F.get.validation(n)), F.validate.form.call(F, t, !0)
                             }, x.delay))
                         }
                     }
                 },
                 get: {
                     ancillaryValue: function(e) {
                         return e.type && F.is.bracketedRule(e) ? e.type.match(x.regExp.bracket)[1] + "" : !1
                     },
                     ruleName: function(e) {
                         return F.is.bracketedRule(e) ? e.type.replace(e.type.match(x.regExp.bracket)[0], "") : e.type
                     },
                     changeEvent: function(e, t) {
                         return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : F.get.inputEvent()
                     },
                     inputEvent: function() {
                         return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     },
                     prompt: function(e, t) {
                         var n, i, o, a = F.get.ruleName(e),
                             r = F.get.ancillaryValue(e),
                             s = e.prompt || x.prompt[a] || x.text.unspecifiedRule,
                             c = -1 !== s.search("{value}"),
                             l = -1 !== s.search("{name}");
                         return (l || c) && (i = F.get.field(t.identifier)), c && (s = s.replace("{value}", i.val())), l && (n = i.closest(k.group).find("label").eq(0), o = 1 == n.size() ? n.text() : i.prop("placeholder") || x.text.unspecifiedField, s = s.replace("{name}", o)), s = s.replace("{identifier}", t.identifier), s = s.replace("{ruleValue}", r), e.prompt || F.verbose("Using default validation prompt for type", s, a), s
                     },
                     settings: function() {
                         if (e.isPlainObject(t)) {
                             var n, o = Object.keys(t),
                                 a = o.length > 0 ? t[o[0]].identifier !== i && t[o[0]].rules !== i : !1;
                             a ? (x = e.extend(!0, {}, e.fn.form.settings, u), C = e.extend({}, e.fn.form.settings.defaults, t), F.error(x.error.oldSyntax, O), F.verbose("Extending settings from legacy parameters", C, x)) : (t.fields && (n = Object.keys(t.fields), ("string" == typeof t.fields[n[0]] || e.isArray(t.fields[n[0]])) && e.each(t.fields, function(n, i) {
                                 "string" == typeof i && (i = [i]), t.fields[n] = {
                                     rules: []
                                 }, e.each(i, function(e, i) {
                                     t.fields[n].rules.push({
                                         type: i
                                     })
                                 })
                             })), x = e.extend(!0, {}, e.fn.form.settings, t), C = e.extend({}, e.fn.form.settings.defaults, x.fields), F.verbose("Extending settings", C, x))
                         } else x = e.fn.form.settings, C = e.fn.form.settings.defaults, F.verbose("Using default form validation", C, x);
                         A = x.namespace, w = x.metadata, k = x.selector, S = x.className, T = x.error, R = "module-" + A, E = "." + A, P = D.data(R), F.refresh()
                     },
                     field: function(t) {
                         return F.verbose("Finding field with identifier", t), f.filter("#" + t).length > 0 ? f.filter("#" + t) : f.filter('[name="' + t + '"]').length > 0 ? f.filter('[name="' + t + '"]') : f.filter('[name="' + t + '[]"]').length > 0 ? f.filter('[name="' + t + '[]"]') : f.filter("[data-" + w.validate + '="' + t + '"]').length > 0 ? f.filter("[data-" + w.validate + '="' + t + '"]') : e("<input/>")
                     },
                     fields: function(t) {
                         var n = e();
                         return e.each(t, function(e, t) {
                             n = n.add(F.get.field(t))
                         }), n
                     },
                     validation: function(t) {
                         var n, i;
                         return C ? (e.each(C, function(e, o) {
                             i = o.identifier || e, F.get.field(i)[0] == t[0] && (o.identifier = i, n = o)
                         }), n || !1) : !1
                     },
                     value: function(e) {
                         var t, n = [];
                         return n.push(e), t = F.get.values.call(O, n), t[e]
                     },
                     values: function(t) {
                         var n = e.isArray(t) ? F.get.fields(t) : f,
                             i = {};
                         return n.each(function(t, n) {
                             var o = e(n),
                                 a = (o.prop("type"), o.prop("name")),
                                 r = o.val(),
                                 s = o.is(k.checkbox),
                                 c = o.is(k.radio),
                                 l = -1 !== a.indexOf("[]"),
                                 u = s ? o.is(":checked") : !1;
                             a && (l ? (a = a.replace("[]", ""), i[a] || (i[a] = []), i[a].push(s ? u ? r || !0 : !1 : r)) : c ? u && (i[a] = r) : i[a] = s ? u ? r || !0 : !1 : r)
                         }), i
                     }
                 },
                 has: {
                     field: function(e) {
                         return F.verbose("Checking for existence of a field with identifier", e), "string" != typeof e && F.error(T.identifier, e), f.filter("#" + e).length > 0 ? !0 : f.filter('[name="' + e + '"]').length > 0 ? !0 : f.filter("[data-" + w.validate + '="' + e + '"]').length > 0 ? !0 : !1
                     }
                 },
                 add: {
                     prompt: function(t, n) {
                         var o = F.get.field(t),
                             a = o.closest(g),
                             r = a.children(k.prompt),
                             s = 0 !== r.length;
                         n = "string" == typeof n ? [n] : n, F.verbose("Adding field error state", t), a.addClass(S.error), x.inline && (s || (r = x.templates.prompt(n), r.appendTo(a)), r.html(n[0]), s ? F.verbose("Inline errors are disabled, no inline error added", t) : x.transition && e.fn.transition !== i && D.transition("is supported") ? (F.verbose("Displaying error with css transition", x.transition), r.transition(x.transition + " in", x.duration)) : (F.verbose("Displaying error with fallback javascript animation"), r.fadeIn(x.duration)))
                     },
                     errors: function(e) {
                         F.debug("Adding form error messages", e), F.set.error(), p.html(x.templates.error(e))
                     }
                 },
                 remove: {
                     prompt: function(t) {
                         var n = F.get.field(t),
                             o = n.closest(g),
                             a = o.children(k.prompt);
                         o.removeClass(S.error), x.inline && a.is(":visible") && (F.verbose("Removing prompt for field", t), x.transition && e.fn.transition !== i && D.transition("is supported") ? a.transition(x.transition + " out", x.duration, function() {
                             a.remove()
                         }) : a.fadeOut(x.duration, function() {
                             a.remove()
                         }))
                     }
                 },
                 set: {
                     success: function() {
                         D.removeClass(S.error).addClass(S.success)
                     },
                     defaults: function() {
                         f.each(function() {
                             var t = e(this),
                                 n = t.filter(k.checkbox).length > 0,
                                 i = n ? t.is(":checked") : t.val();
                             t.data(w.defaultValue, i)
                         })
                     },
                     error: function() {
                         D.removeClass(S.success).addClass(S.error)
                     },
                     value: function(e, t) {
                         var n = {};
                         return n[e] = t, F.set.values.call(O, n)
                     },
                     values: function(t) {
                         e.isEmptyObject(t) || e.each(t, function(t, n) {
                             var i, o = F.get.field(t),
                                 a = o.parent(),
                                 r = e.isArray(n),
                                 s = a.is(k.uiCheckbox),
                                 c = a.is(k.uiDropdown),
                                 l = o.is(k.radio) && s,
                                 u = o.length > 0;
                             u && (r && s ? (F.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function(e, t) {
                                 i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check")
                             })) : l ? (F.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(k.uiCheckbox).checkbox("check")) : s ? (F.verbose("Setting checkbox value", n, a), a.checkbox(n === !0 ? "check" : "uncheck")) : c ? (F.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (F.verbose("Setting field value", n, o), o.val(n)))
                         })
                     }
                 },
                 validate: {
                     form: function(e, t) {
                         var n = F.get.values();
                         if (j) return !1;
                         if (q = [], F.is.valid()) {
                             if (F.debug("Form has no validation errors, submitting"), F.set.success(), t !== !0) return x.onSuccess.call(O, e, n)
                         } else if (F.debug("Form has errors"), F.set.error(), x.inline || F.add.errors(q), D.data("moduleApi") !== i && e.stopImmediatePropagation(), t !== !0) return x.onFailure.call(O, q, n)
                     },
                     field: function(t, n) {
                         var o = t.identifier || n,
                             a = F.get.field(o),
                             r = !0,
                             s = [];
                         return t.identifier || (F.debug("Using field name as identifier", o), t.identifier = o), a.prop("disabled") ? (F.debug("Field is disabled. Skipping", o), r = !0) : t.optional && "" === e.trim(a.val()) ? (F.debug("Field is optional and empty. Skipping", o), r = !0) : t.rules !== i && e.each(t.rules, function(e, n) {
                             F.has.field(o) && !F.validate.rule(t, n) && (F.debug("Field is invalid", o, n.type), s.push(F.get.prompt(n, t)), r = !1)
                         }), r ? (F.remove.prompt(o, s), x.onValid.call(a), !0) : (q = q.concat(s), F.add.prompt(o, s), x.onInvalid.call(a, s), !1)
                     },
                     rule: function(t, n) {
                         var o = F.get.field(t.identifier),
                             a = (n.type, o.val()),
                             r = F.get.ancillaryValue(n),
                             s = F.get.ruleName(n),
                             c = x.rules[s];
                         return e.isFunction(c) ? (a = a === i || "" === a || null === a ? "" : e.trim(a + ""), c.call(o, a, r)) : void F.error(T.noRule, s)
                     }
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, x, t);
                     else {
                         if (n === i) return x[t];
                         x[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, F, t);
                     else {
                         if (n === i) return F[t];
                         F[t] = n
                     }
                 },
                 debug: function() {
                     x.debug && (x.performance ? F.performance.log(arguments) : (F.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), F.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     x.verbose && x.debug && (x.performance ? F.performance.log(arguments) : (F.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), F.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     F.error = Function.prototype.bind.call(console.error, console, x.name + ":"), F.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         x.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: O,
                             "Execution Time": n
                         })), clearTimeout(F.performance.timer), F.performance.timer = setTimeout(F.performance.display, 500)
                     },
                     display: function() {
                         var t = x.name + ":",
                             n = 0;
                         s = !1, clearTimeout(F.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = P;
                     return n = n || m, a = O || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, F.initialize()
         }), o !== i ? o : this
     }, e.fn.form.settings = {
         name: "Form",
         namespace: "form",
         debug: !1,
         verbose: !1,
         performance: !0,
         fields: !1,
         keyboardShortcuts: !0,
         on: "submit",
         inline: !1,
         delay: 200,
         revalidate: !0,
         transition: "scale",
         duration: 200,
         onValid: function() {},
         onInvalid: function() {},
         onSuccess: function() {
             return !0
         },
         onFailure: function() {
             return !1
         },
         metadata: {
             defaultValue: "default",
             validate: "validate"
         },
         regExp: {
             bracket: /\[(.*)\]/i,
             decimal: /^\d*(\.)\d+/,
             email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
             escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
             flags: /^\/(.*)\/(.*)?/,
             integer: /^\-?\d+$/,
             number: /^\-?\d*(\.\d+)?$/,
             url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
         },
         text: {
             unspecifiedRule: "Please enter a valid value",
             unspecifiedField: "This field"
         },
         prompt: {
             empty: "{name} must have a value",
             checked: "{name} must be checked",
             email: "{name} must be a valid e-mail",
             url: "{name} must be a valid url",
             regExp: "{name} is not formatted correctly",
             integer: "{name} must be an integer",
             decimal: "{name} must be a decimal number",
             number: "{name} must be set to a number",
             is: '{name} must be "{ruleValue}"',
             isExactly: '{name} must be exactly "{ruleValue}"',
             not: '{name} cannot be set to "{ruleValue}"',
             notExactly: '{name} cannot be set to exactly "{ruleValue}"',
             contain: '{name} cannot contain "{ruleValue}"',
             containExactly: '{name} cannot contain exactly "{ruleValue}"',
             doesntContain: '{name} must contain  "{ruleValue}"',
             doesntContainExactly: '{name} must contain exactly "{ruleValue}"',
             minLength: "{name} must be at least {ruleValue} characters",
             length: "{name} must be at least {ruleValue} characters",
             exactLength: "{name} must be exactly {ruleValue} characters",
             maxLength: "{name} cannot be longer than {ruleValue} characters",
             match: "{name} must match {ruleValue} field",
             different: "{name} must have a different value than {ruleValue} field",
             creditCard: "{name} must be a valid credit card number",
             minCount: "{name} must have at least {ruleValue} choices",
             exactCount: "{name} must have exactly {ruleValue} choices",
             maxCount: "{name} must have {ruleValue} or less choices"
         },
         selector: {
             checkbox: 'input[type="checkbox"], input[type="radio"]',
             clear: ".clear",
             field: "input, textarea, select",
             group: ".field",
             input: "input",
             message: ".error.message",
             prompt: ".prompt.label",
             radio: 'input[type="radio"]',
             reset: '.reset:not([type="reset"])',
             submit: '.submit:not([type="submit"])',
             uiCheckbox: ".ui.checkbox",
             uiDropdown: ".ui.dropdown"
         },
         className: {
             error: "error",
             label: "ui prompt label",
             pressed: "down",
             success: "success"
         },
         error: {
             identifier: "You must specify a string identifier for each field",
             method: "The method you called is not defined.",
             noRule: "There is no rule matching the one you specified",
             oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
         },
         templates: {
             error: function(t) {
                 var n = '<ul class="list">';
                 return e.each(t, function(e, t) {
                     n += "<li>" + t + "</li>"
                 }), n += "</ul>", e(n)
             },
             prompt: function(t) {
                 return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])
             }
         },
         rules: {
             empty: function(t) {
                 return !(t === i || "" === t || e.isArray(t) && 0 === t.length)
             },
             checked: function() {
                 return e(this).filter(":checked").length > 0
             },
             email: function(t) {
                 var n = new RegExp(e.fn.form.settings.regExp.email, "i");
                 return n.test(t)
             },
             url: function(t) {
                 return e.fn.form.settings.regExp.url.test(t)
             },
             regExp: function(t, n) {
                 var i, o = n.match(e.fn.form.settings.regExp.flags);
                 return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i))
             },
             integer: function(t, n) {
                 var o, a, r, s = e.fn.form.settings.regExp.integer;
                 return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? s.test(n) && (o = a = n - 0) : (r = n.split("..", 2), s.test(r[0]) && (o = r[0] - 0), s.test(r[1]) && (a = r[1] - 0))), s.test(t) && (o === i || t >= o) && (a === i || a >= t)
             },
             decimal: function(t) {
                 return e.fn.form.settings.regExp.decimal.test(t)
             },
             number: function(t) {
                 return e.fn.form.settings.regExp.number.test(t)
             },
             is: function(e, t) {
                 return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t
             },
             isExactly: function(e, t) {
                 return e == t
             },
             not: function(e, t) {
                 return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t
             },
             notExactly: function(e, t) {
                 return e != t
             },
             contains: function(t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"))
             },
             containsExactly: function(t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n))
             },
             doesntContain: function(t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"))
             },
             doesntContainExactly: function(t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n))
             },
             minLength: function(e, t) {
                 return e !== i ? e.length >= t : !1
             },
             length: function(e, t) {
                 return e !== i ? e.length >= t : !1
             },
             exactLength: function(e, t) {
                 return e !== i ? e.length == t : !1
             },
             maxLength: function(e, t) {
                 return e !== i ? e.length <= t : !1
             },
             match: function(t, n) {
                 {
                     var o;
                     e(this)
                 }
                 return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() == o.toString() : !1
             },
             different: function(t, n) {
                 {
                     var o;
                     e(this)
                 }
                 return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() !== o.toString() : !1
             },
             creditCard: function(t, n) {
                 var i, o, a = {
                         visa: {
                             pattern: /^4/,
                             length: [16]
                         },
                         amex: {
                             pattern: /^3[47]/,
                             length: [15]
                         },
                         mastercard: {
                             pattern: /^5[1-5]/,
                             length: [16]
                         },
                         discover: {
                             pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                             length: [16]
                         },
                         unionPay: {
                             pattern: /^(62|88)/,
                             length: [16, 17, 18, 19]
                         },
                         jcb: {
                             pattern: /^35(2[89]|[3-8][0-9])/,
                             length: [16]
                         },
                         maestro: {
                             pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                             length: [12, 13, 14, 15, 16, 17, 18, 19]
                         },
                         dinersClub: {
                             pattern: /^(30[0-5]|^36)/,
                             length: [14]
                         },
                         laser: {
                             pattern: /^(6304|670[69]|6771)/,
                             length: [16, 17, 18, 19]
                         },
                         visaElectron: {
                             pattern: /^(4026|417500|4508|4844|491(3|7))/,
                             length: [16]
                         }
                     },
                     r = {},
                     s = !1,
                     c = "string" == typeof n ? n.split(",") : !1;
                 if ("string" == typeof t && 0 !== t.length) {
                     if (c && (e.each(c, function(n, i) {
                             o = a[i], o && (r = {
                                 length: -1 !== e.inArray(t.length, o.length),
                                 pattern: -1 !== t.search(o.pattern)
                             }, r.length && r.pattern && (s = !0))
                         }), !s)) return !1;
                     if (i = {
                             number: -1 !== e.inArray(t.length, a.unionPay.length),
                             pattern: -1 !== t.search(a.unionPay.pattern)
                         }, i.number && i.pattern) return !0;
                     for (var l = t.length, u = 0, d = [
                             [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                             [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                         ], m = 0; l--;) m += d[u][parseInt(t.charAt(l), 10)], u ^= 1;
                     return m % 10 === 0 && m > 0
                 }
             },
             minCount: function(e, t) {
                 return 0 == t ? !0 : 1 == t ? "" !== e : e.split(",").length >= t
             },
             exactCount: function(e, t) {
                 return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
             },
             maxCount: function(e, t) {
                 return 0 == t ? !1 : 1 == t ? -1 === e.search(",") : e.split(",").length <= t
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.accordion = function(n) {
         {
             var o, a = e(this),
                 r = (new Date).getTime(),
                 s = [],
                 c = arguments[0],
                 l = "string" == typeof c,
                 u = [].slice.call(arguments, 1);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function() {
             var d, m, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
                 g = f.className,
                 p = f.namespace,
                 v = f.selector,
                 h = f.error,
                 b = "." + p,
                 y = "module-" + p,
                 x = a.selector || "",
                 C = e(this),
                 w = C.find(v.title),
                 k = C.find(v.content),
                 S = this,
                 T = C.data(y);
             m = {
                 initialize: function() {
                     m.debug("Initializing", C), m.bind.events(), f.observeChanges && m.observeChanges(), m.instantiate()
                 },
                 instantiate: function() {
                     T = m, C.data(y, m)
                 },
                 destroy: function() {
                     m.debug("Destroying previous instance", C), C.off(b).removeData(y)
                 },
                 refresh: function() {
                     w = C.find(v.title), k = C.find(v.content)
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (d = new MutationObserver(function(e) {
                         m.debug("DOM tree modified, updating selector cache"), m.refresh()
                     }), d.observe(S, {
                         childList: !0,
                         subtree: !0
                     }), m.debug("Setting up mutation observer", d))
                 },
                 bind: {
                     events: function() {
                         m.debug("Binding delegated events"), C.on(f.on + b, v.trigger, m.event.click)
                     }
                 },
                 event: {
                     click: function() {
                         m.toggle.call(this)
                     }
                 },
                 toggle: function(t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
                         o = n.next(k),
                         a = o.hasClass(g.animating),
                         r = o.hasClass(g.active),
                         s = r && !a,
                         c = !r && a;
                     m.debug("Toggling visibility of content", n), s || c ? f.collapsible ? m.close.call(n) : m.debug("Cannot close accordion content collapsing is disabled") : m.open.call(n)
                 },
                 open: function(t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
                         o = n.next(k),
                         a = o.hasClass(g.animating),
                         r = o.hasClass(g.active),
                         s = r || a;
                     return s ? void m.debug("Accordion already open, skipping", o) : (m.debug("Opening accordion content", n), f.onOpening.call(o), f.exclusive && m.closeOthers.call(n), n.addClass(g.active), o.stop(!0, !0).addClass(g.animating), f.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                         animation: "fade in",
                         queue: !1,
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : o.children().stop(!0, !0).animate({
                         opacity: 1
                     }, f.duration, m.resetOpacity)), void o.slideDown(f.duration, f.easing, function() {
                         o.removeClass(g.animating).addClass(g.active), m.reset.display.call(this), f.onOpen.call(this), f.onChange.call(this)
                     }))
                 },
                 close: function(t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
                         o = n.next(k),
                         a = o.hasClass(g.animating),
                         r = o.hasClass(g.active),
                         s = !r && a,
                         c = r && a;
                     !r && !s || c || (m.debug("Closing accordion content", o), f.onClosing.call(o), n.removeClass(g.active), o.stop(!0, !0).addClass(g.animating), f.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                         animation: "fade out",
                         queue: !1,
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : o.children().stop(!0, !0).animate({
                         opacity: 0
                     }, f.duration, m.resetOpacity)), o.slideUp(f.duration, f.easing, function() {
                         o.removeClass(g.animating).removeClass(g.active), m.reset.display.call(this), f.onClose.call(this), f.onChange.call(this)
                     }))
                 },
                 closeOthers: function(t) {
                     var n, o, a, r = t !== i ? w.eq(t) : e(this).closest(v.title),
                         s = r.parents(v.content).prev(v.title),
                         c = r.closest(v.accordion),
                         l = v.title + "." + g.active + ":visible",
                         u = v.content + "." + g.active + ":visible";
                     f.closeNested ? (n = c.find(l).not(s), a = n.next(k)) : (n = c.find(l).not(s), o = c.find(u).find(l).not(s), n = n.not(o), a = n.next(k)), n.length > 0 && (m.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), a.removeClass(g.animating).stop(!0, !0), f.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? a.children().transition({
                         animation: "fade out",
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : a.children().stop(!0, !0).animate({
                         opacity: 0
                     }, f.duration, m.resetOpacity)), a.slideUp(f.duration, f.easing, function() {
                         e(this).removeClass(g.active), m.reset.display.call(this)
                     }))
                 },
                 reset: {
                     display: function() {
                         m.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     },
                     opacity: function() {
                         m.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     return m.debug("Changing internal", t, n), n === i ? m[t] : void(e.isPlainObject(t) ? e.extend(!0, m, t) : m[t] = n)
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         r = !1, clearTimeout(m.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = T;
                     return n = n || u, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, l ? (T === i && m.initialize(), m.invoke(c)) : (T !== i && T.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.accordion.settings = {
         name: "Accordion",
         namespace: "accordion",
         debug: !1,
         verbose: !1,
         performance: !0,
         on: "click",
         observeChanges: !0,
         exclusive: !0,
         collapsible: !0,
         closeNested: !1,
         animateChildren: !0,
         duration: 350,
         easing: "easeOutQuad",
         onOpening: function() {},
         onOpen: function() {},
         onClosing: function() {},
         onClose: function() {},
         onChange: function() {},
         error: {
             method: "The method you called is not defined"
         },
         className: {
             active: "active",
             animating: "animating"
         },
         selector: {
             accordion: ".accordion",
             title: ".title",
             trigger: ".title",
             content: ".content"
         }
     }, e.extend(e.easing, {
         easeOutQuad: function(e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.checkbox = function(o) {
         var a, r = e(this),
             s = r.selector || "",
             c = (new Date).getTime(),
             l = [],
             u = arguments[0],
             d = "string" == typeof u,
             m = [].slice.call(arguments, 1);
         return r.each(function() {
             var r, f, g = e.extend(!0, {}, e.fn.checkbox.settings, o),
                 p = g.className,
                 v = g.namespace,
                 h = g.selector,
                 b = g.error,
                 y = "." + v,
                 x = "module-" + v,
                 C = e(this),
                 w = e(this).children(h.label),
                 k = e(this).children(h.input),
                 S = k[0],
                 T = !1,
                 A = !1,
                 R = C.data(x),
                 E = this;

             f = {
                 initialize: function() {
                     f.verbose("Initializing checkbox", g), f.create.label(), f.bind.events(), f.set.tabbable(), f.hide.input(), f.observeChanges(), f.instantiate(), f.setup()
                 },
                 instantiate: function() {
                     f.verbose("Storing instance of module", f), R = f, C.data(x, f)
                 },
                 destroy: function() {
                     f.verbose("Destroying module"), f.unbind.events(), f.show.input(), C.removeData(x)
                 },
                 fix: {
                     reference: function() {
                         C.is(h.input) && (f.debug("Behavior called on <input> adjusting invoked element"), C = C.closest(h.checkbox), f.refresh())
                     }
                 },
                 setup: function() {
                     f.set.initialLoad(), f.is.indeterminate() ? (f.debug("Initial value is indeterminate"), f.indeterminate()) : f.is.checked() ? (f.debug("Initial value is checked"), f.check()) : (f.debug("Initial value is unchecked"), f.uncheck()), f.remove.initialLoad()
                 },
                 refresh: function() {
                     w = C.children(h.label), k = C.children(h.input), S = k[0]
                 },
                 hide: {
                     input: function() {
                         f.verbose("Modfying <input> z-index to be unselectable"), k.addClass(p.hidden)
                     }
                 },
                 show: {
                     input: function() {
                         f.verbose("Modfying <input> z-index to be selectable"), k.removeClass(p.hidden)
                     }
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (r = new MutationObserver(function(e) {
                         f.debug("DOM tree modified, updating selector cache"), f.refresh()
                     }), r.observe(E, {
                         childList: !0,
                         subtree: !0
                     }), f.debug("Setting up mutation observer", r))
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + y, n)) : f.error(b.notFound)
                 },
                 event: {
                     click: function(t) {
                         var n = e(t.target);
                         return n.is(h.input) ? void f.verbose("Using default check action on initialized checkbox") : n.is(h.link) ? void f.debug("Clicking link inside checkbox, skipping toggle") : (f.toggle(), k.focus(), void t.preventDefault())
                     },
                     keydown: function(e) {
                         var t = e.which,
                             n = {
                                 enter: 13,
                                 space: 32,
                                 escape: 27
                             };
                         t == n.escape ? (f.verbose("Escape key pressed blurring field"), k.blur(), A = !0) : e.ctrlKey || t != n.space && t != n.enter ? A = !1 : (f.verbose("Enter/space key pressed, toggling checkbox"), f.toggle(), A = !0)
                     },
                     keyup: function(e) {
                         A && e.preventDefault()
                     }
                 },
                 check: function() {
                     f.should.allowCheck() && (f.debug("Checking checkbox", k), f.set.checked(), f.should.ignoreCallbacks() || (g.onChecked.call(S), g.onChange.call(S)))
                 },
                 uncheck: function() {
                     f.should.allowUncheck() && (f.debug("Unchecking checkbox"), f.set.unchecked(), f.should.ignoreCallbacks() || (g.onUnchecked.call(S), g.onChange.call(S)))
                 },
                 indeterminate: function() {
                     return f.should.allowIndeterminate() ? void f.debug("Checkbox is already indeterminate") : (f.debug("Making checkbox indeterminate"), f.set.indeterminate(), void(f.should.ignoreCallbacks() || (g.onIndeterminate.call(S), g.onChange.call(S))))
                 },
                 determinate: function() {
                     return f.should.allowDeterminate() ? void f.debug("Checkbox is already determinate") : (f.debug("Making checkbox determinate"), f.set.determinate(), void(f.should.ignoreCallbacks() || (g.onDeterminate.call(S), g.onChange.call(S))))
                 },
                 enable: function() {
                     return f.is.enabled() ? void f.debug("Checkbox is already enabled") : (f.debug("Enabling checkbox"), f.set.enabled(), void g.onEnabled.call(S))
                 },
                 disable: function() {
                     return f.is.disabled() ? void f.debug("Checkbox is already disabled") : (f.debug("Disabling checkbox"), f.set.disabled(), void g.onDisabled.call(S))
                 },
                 get: {
                     radios: function() {
                         var t = f.get.name();
                         return e('input[name="' + t + '"]').closest(h.checkbox)
                     },
                     otherRadios: function() {
                         return f.get.radios().not(C)
                     },
                     name: function() {
                         return k.attr("name")
                     }
                 },
                 is: {
                     initialLoad: function() {
                         return T
                     },
                     radio: function() {
                         return k.hasClass(p.radio) || "radio" == k.attr("type")
                     },
                     indeterminate: function() {
                         return k.prop("indeterminate") !== i && k.prop("indeterminate")
                     },
                     checked: function() {
                         return k.prop("checked") !== i && k.prop("checked")
                     },
                     disabled: function() {
                         return k.prop("disabled") !== i && k.prop("disabled")
                     },
                     enabled: function() {
                         return !f.is.disabled()
                     },
                     determinate: function() {
                         return !f.is.indeterminate()
                     },
                     unchecked: function() {
                         return !f.is.checked()
                     }
                 },
                 should: {
                     allowCheck: function() {
                         return f.is.determinate() && f.is.checked() && !f.should.forceCallbacks() ? (f.debug("Should not allow check, checkbox is already checked"), !1) : g.beforeChecked.apply(S) === !1 ? (f.debug("Should not allow check, beforeChecked cancelled"), !1) : !0
                     },
                     allowUncheck: function() {
                         return f.is.determinate() && f.is.unchecked() && !f.should.forceCallbacks() ? (f.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : g.beforeUnchecked.apply(S) === !1 ? (f.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1) : !0
                     },
                     allowIndeterminate: function() {
                         return f.is.indeterminate() && !f.should.forceCallbacks() ? (f.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : g.beforeIndeterminate.apply(S) === !1 ? (f.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1) : !0
                     },
                     allowDeterminate: function() {
                         return f.is.determinate() && !f.should.forceCallbacks() ? (f.debug("Should not allow determinate, checkbox is already determinate"), !1) : g.beforeDeterminate.apply(S) === !1 ? (f.debug("Should not allow determinate, beforeDeterminate cancelled"), !1) : !0
                     },
                     forceCallbacks: function() {
                         return f.is.initialLoad() && g.fireOnInit
                     },
                     ignoreCallbacks: function() {
                         return T && !g.fireOnInit
                     }
                 },
                 can: {
                     change: function() {
                         return !(C.hasClass(p.disabled) || C.hasClass(p.readOnly) || k.prop("disabled") || k.prop("readonly"))
                     },
                     uncheck: function() {
                         return "boolean" == typeof g.uncheckable ? g.uncheckable : !f.is.radio()
                     }
                 },
                 set: {
                     initialLoad: function() {
                         T = !0
                     },
                     checked: function() {
                         return f.verbose("Setting class to checked"), C.removeClass(p.indeterminate).addClass(p.checked), f.is.radio() && f.uncheckOthers(), !f.is.indeterminate() && f.is.checked() ? void f.debug("Input is already checked, skipping input property change") : (f.verbose("Setting state to checked", S), k.prop("indeterminate", !1).prop("checked", !0), void f.trigger.change())
                     },
                     unchecked: function() {
                         return f.verbose("Removing checked class"), C.removeClass(p.indeterminate).removeClass(p.checked), !f.is.indeterminate() && f.is.unchecked() ? void f.debug("Input is already unchecked") : (f.debug("Setting state to unchecked"), k.prop("indeterminate", !1).prop("checked", !1), void f.trigger.change())
                     },
                     indeterminate: function() {
                         return f.verbose("Setting class to indeterminate"), C.addClass(p.indeterminate), f.is.indeterminate() ? void f.debug("Input is already indeterminate, skipping input property change") : (f.debug("Setting state to indeterminate"), k.prop("indeterminate", !0), void f.trigger.change())
                     },
                     determinate: function() {
                         return f.verbose("Removing indeterminate class"), C.removeClass(p.indeterminate), f.is.determinate() ? void f.debug("Input is already determinate, skipping input property change") : (f.debug("Setting state to determinate"), void k.prop("indeterminate", !1))
                     },
                     disabled: function() {
                         return f.verbose("Setting class to disabled"), C.addClass(p.disabled), f.is.disabled() ? void f.debug("Input is already disabled, skipping input property change") : (f.debug("Setting state to disabled"), k.prop("disabled", "disabled"), void f.trigger.change())
                     },
                     enabled: function() {
                         return f.verbose("Removing disabled class"), C.removeClass(p.disabled), f.is.enabled() ? void f.debug("Input is already enabled, skipping input property change") : (f.debug("Setting state to enabled"), k.prop("disabled", !1), void f.trigger.change())
                     },
                     tabbable: function() {
                         f.verbose("Adding tabindex to checkbox"), k.attr("tabindex") === i && k.attr("tabindex", 0)
                     }
                 },
                 remove: {
                     initialLoad: function() {
                         T = !1
                     }
                 },
                 trigger: {
                     change: function() {
                         var e = n.createEvent("HTMLEvents"),
                             t = k[0];
                         t && (f.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                     }
                 },
                 create: {
                     label: function() {
                         k.prevAll(h.label).length > 0 ? (k.prev(h.label).detach().insertAfter(k), f.debug("Moving existing label", w)) : f.has.label() || (w = e("<label>").insertAfter(k), f.debug("Creating label", w))
                     }
                 },
                 has: {
                     label: function() {
                         return w.length > 0
                     }
                 },
                 bind: {
                     events: function() {
                         f.verbose("Attaching checkbox events"), C.on("click" + y, f.event.click).on("keydown" + y, h.input, f.event.keydown).on("keyup" + y, h.input, f.event.keyup)
                     }
                 },
                 unbind: {
                     events: function() {
                         f.debug("Removing events"), C.off(y)
                     }
                 },
                 uncheckOthers: function() {
                     var e = f.get.otherRadios();
                     f.debug("Unchecking other radios", e), e.removeClass(p.checked)
                 },
                 toggle: function() {
                     return f.can.change() ? void(f.is.indeterminate() || f.is.unchecked() ? (f.debug("Currently unchecked"), f.check()) : f.is.checked() && f.can.uncheck() && (f.debug("Currently checked"), f.uncheck())) : void(f.is.radio() || f.debug("Checkbox is read-only or disabled, ignoring toggle"))
                 },
                 setting: function(t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function() {
                     g.debug && (g.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     g.verbose && g.debug && (g.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     f.error = Function.prototype.bind.call(console.error, console, g.name + ":"), f.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: E,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function() {
                         var t = g.name + ":",
                             n = 0;
                         c = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = R;
                     return n = n || m, o = E || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (R === i && f.initialize(), f.invoke(u)) : (R !== i && R.invoke("destroy"), f.initialize())
         }), a !== i ? a : this
     }, e.fn.checkbox.settings = {
         name: "Checkbox",
         namespace: "checkbox",
         debug: !1,
         verbose: !0,
         performance: !0,
         uncheckable: "auto",
         fireOnInit: !1,
         onChange: function() {},
         beforeChecked: function() {},
         beforeUnchecked: function() {},
         beforeDeterminate: function() {},
         beforeIndeterminate: function() {},
         onChecked: function() {},
         onUnchecked: function() {},
         onDeterminate: function() {},
         onIndeterminate: function() {},
         onEnable: function() {},
         onDisable: function() {},
         className: {
             checked: "checked",
             indeterminate: "indeterminate",
             disabled: "disabled",
             hidden: "hidden",
             radio: "radio",
             readOnly: "read-only"
         },
         error: {
             method: "The method you called is not defined"
         },
         selector: {
             checkbox: ".ui.checkbox",
             label: "label, .box",
             input: 'input[type="checkbox"], input[type="radio"]',
             link: "a[href]"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.dimmer = function(t) {
         var o, a = e(this),
             r = (new Date).getTime(),
             s = [],
             c = arguments[0],
             l = "string" == typeof c,
             u = [].slice.call(arguments, 1);
         return a.each(function() {
             var d, m, f, g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                 p = g.selector,
                 v = g.namespace,
                 h = g.className,
                 b = g.error,
                 y = "." + v,
                 x = "module-" + v,
                 C = a.selector || "",
                 w = "ontouchstart" in n.documentElement ? "touchstart" : "click",
                 k = e(this),
                 S = this,
                 T = k.data(x);
             f = {
                 preinitialize: function() {
                     f.is.dimmer() ? (m = k.parent(), d = k) : (m = k, d = f.has.dimmer() ? g.dimmerName ? m.find(p.dimmer).filter("." + g.dimmerName) : m.find(p.dimmer) : f.create())
                 },
                 initialize: function() {
                     f.debug("Initializing dimmer", g), f.bind.events(), f.set.dimmable(), f.instantiate()
                 },
                 instantiate: function() {
                     f.verbose("Storing instance of module", f), T = f, k.data(x, T)
                 },
                 destroy: function() {
                     f.verbose("Destroying previous module", d), f.unbind.events(), f.remove.variation(), m.off(y)
                 },
                 bind: {
                     events: function() {
                         "hover" == g.on ? m.on("mouseenter" + y, f.show).on("mouseleave" + y, f.hide) : "click" == g.on && m.on(w + y, f.toggle), f.is.page() && (f.debug("Setting as a page dimmer", m), f.set.pageDimmer()), f.is.closable() && (f.verbose("Adding dimmer close event", d), m.on(w + y, p.dimmer, f.event.click))
                     }
                 },
                 unbind: {
                     events: function() {
                         k.removeData(x)
                     }
                 },
                 event: {
                     click: function(t) {
                         f.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (f.hide(), t.stopImmediatePropagation())
                     }
                 },
                 addContent: function(t) {
                     var n = e(t);
                     f.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
                 },
                 create: function() {
                     var t = e(g.template.dimmer());
                     return g.variation && (f.debug("Creating dimmer with variation", g.variation), t.addClass(g.variation)), g.dimmerName && (f.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(m), t
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, f.debug("Showing dimmer", d, g), f.is.dimmed() && !f.is.animating() || !f.is.enabled() ? f.debug("Dimmer is already shown or disabled") : (f.animate.show(t), g.onShow.call(S), g.onChange.call(S))
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, f.is.dimmed() || f.is.animating() ? (f.debug("Hiding dimmer", d), f.animate.hide(t), g.onHide.call(S), g.onChange.call(S)) : f.debug("Dimmer is not visible")
                 },
                 toggle: function() {
                     f.verbose("Toggling dimmer visibility", d), f.is.dimmed() ? f.hide() : f.show()
                 },
                 animate: {
                     show: function(t) {
                         t = e.isFunction(t) ? t : function() {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && f.set.opacity(), d.transition({
                             animation: g.transition + " in",
                             queue: !1,
                             duration: f.get.duration(),
                             useFailSafe: !0,
                             onStart: function() {
                                 f.set.dimmed()
                             },
                             onComplete: function() {
                                 f.set.active(), t()
                             }
                         })) : (f.verbose("Showing dimmer animation with javascript"), f.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({
                             opacity: 0,
                             width: "100%",
                             height: "100%"
                         }).fadeTo(f.get.duration(), g.opacity, function() {
                             d.removeAttr("style"), f.set.active(), t()
                         }))
                     },
                     hide: function(t) {
                         t = e.isFunction(t) ? t : function() {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (f.verbose("Hiding dimmer with css"), d.transition({
                             animation: g.transition + " out",
                             queue: !1,
                             duration: f.get.duration(),
                             useFailSafe: !0,
                             onStart: function() {
                                 f.remove.dimmed()
                             },
                             onComplete: function() {
                                 f.remove.active(), t()
                             }
                         })) : (f.verbose("Hiding dimmer with javascript"), f.remove.dimmed(), d.stop().fadeOut(f.get.duration(), function() {
                             f.remove.active(), d.removeAttr("style"), t()
                         }))
                     }
                 },
                 get: {
                     dimmer: function() {
                         return d
                     },
                     duration: function() {
                         return "object" == typeof g.duration ? f.is.active() ? g.duration.hide : g.duration.show : g.duration
                     }
                 },
                 has: {
                     dimmer: function() {
                         return g.dimmerName ? k.find(p.dimmer).filter("." + g.dimmerName).length > 0 : k.find(p.dimmer).length > 0
                     }
                 },
                 is: {
                     active: function() {
                         return d.hasClass(h.active)
                     },
                     animating: function() {
                         return d.is(":animated") || d.hasClass(h.animating)
                     },
                     closable: function() {
                         return "auto" == g.closable ? "hover" == g.on ? !1 : !0 : g.closable
                     },
                     dimmer: function() {
                         return k.hasClass(h.dimmer)
                     },
                     dimmable: function() {
                         return k.hasClass(h.dimmable)
                     },
                     dimmed: function() {
                         return m.hasClass(h.dimmed)
                     },
                     disabled: function() {
                         return m.hasClass(h.disabled)
                     },
                     enabled: function() {
                         return !f.is.disabled()
                     },
                     page: function() {
                         return m.is("body")
                     },
                     pageDimmer: function() {
                         return d.hasClass(h.pageDimmer)
                     }
                 },
                 can: {
                     show: function() {
                         return !d.hasClass(h.disabled)
                     }
                 },
                 set: {
                     opacity: function(e) {
                         var t = d.css("background-color"),
                             n = t.split(","),
                             i = n && 4 == n.length;
                         e = 0 === g.opacity ? 0 : g.opacity || e, i ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", f.debug("Setting opacity to", e), d.css("background-color", t)
                     },
                     active: function() {
                         d.addClass(h.active)
                     },
                     dimmable: function() {
                         m.addClass(h.dimmable)
                     },
                     dimmed: function() {
                         m.addClass(h.dimmed)
                     },
                     pageDimmer: function() {
                         d.addClass(h.pageDimmer)
                     },
                     disabled: function() {
                         d.addClass(h.disabled)
                     },
                     variation: function(e) {
                         e = e || g.variation, e && d.addClass(e)
                     }
                 },
                 remove: {
                     active: function() {
                         d.removeClass(h.active)
                     },
                     dimmed: function() {
                         m.removeClass(h.dimmed)
                     },
                     disabled: function() {
                         d.removeClass(h.disabled)
                     },
                     variation: function(e) {
                         e = e || g.variation, e && d.removeClass(e)
                     }
                 },
                 setting: function(t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function() {
                     g.debug && (g.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     g.verbose && g.debug && (g.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     f.error = Function.prototype.bind.call(console.error, console, g.name + ":"), f.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function() {
                         var t = g.name + ":",
                             n = 0;
                         r = !1, clearTimeout(f.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", C && (t += " '" + C + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = T;
                     return n = n || u, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, f.preinitialize(), l ? (T === i && f.initialize(), f.invoke(c)) : (T !== i && T.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.dimmer.settings = {
         name: "Dimmer",
         namespace: "dimmer",
         debug: !1,
         verbose: !1,
         performance: !0,
         dimmerName: !1,
         variation: !1,
         closable: "auto",
         useCSS: !0,
         transition: "fade",
         on: !1,
         opacity: "auto",
         duration: {
             show: 500,
             hide: 500
         },
         onChange: function() {},
         onShow: function() {},
         onHide: function() {},
         error: {
             method: "The method you called is not defined."
         },
         className: {
             active: "active",
             animating: "animating",
             dimmable: "dimmable",
             dimmed: "dimmed",
             dimmer: "dimmer",
             disabled: "disabled",
             hide: "hide",
             pageDimmer: "page",
             show: "show"
         },
         selector: {
             dimmer: "> .ui.dimmer",
             content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
         },
         template: {
             dimmer: function() {
                 return e("<div />").attr("class", "ui dimmer")
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.dropdown = function(o) {
         var a, r = e(this),
             s = e(n),
             c = r.selector || "",
             l = "ontouchstart" in n.documentElement,
             u = (new Date).getTime(),
             d = [],
             m = arguments[0],
             f = "string" == typeof m,
             g = [].slice.call(arguments, 1);
         return r.each(function(p) {
             var v, h, b, y, x, C, w, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
                 S = k.className,
                 T = k.message,
                 A = k.fields,
                 R = k.keys,
                 E = k.metadata,
                 P = k.namespace,
                 F = k.regExp,
                 D = k.selector,
                 O = k.error,
                 q = k.templates,
                 j = "." + P,
                 z = "module-" + P,
                 I = e(this),
                 L = e(k.context),
                 N = I.find(D.text),
                 V = I.find(D.search),
                 H = I.find(D.input),
                 M = I.find(D.icon),
                 U = I.prev().find(D.text).length > 0 ? I.prev().find(D.text) : I.prev(),
                 W = I.children(D.menu),
                 B = W.find(D.item),
                 Q = !1,
                 X = !1,
                 $ = !1,
                 Y = this,
                 Z = I.data(z);
             w = {
                 initialize: function() {
                     w.debug("Initializing dropdown", k), w.is.alreadySetup() ? w.setup.reference() : (w.setup.layout(), w.refreshData(), w.save.defaults(), w.restore.selected(), w.create.id(), w.bind.events(), w.observeChanges(), w.instantiate())
                 },
                 instantiate: function() {
                     w.verbose("Storing instance of dropdown", w), Z = w, I.data(z, w)
                 },
                 destroy: function() {
                     w.verbose("Destroying previous dropdown", I), w.remove.tabbable(), I.off(j).removeData(z), W.off(j), s.off(b), x && x.disconnect(), C && C.disconnect()
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (x = new MutationObserver(function(e) {
                         w.debug("<select> modified, recreating menu"), w.setup.select()
                     }), C = new MutationObserver(function(e) {
                         w.debug("Menu modified, updating selector cache"), w.refresh()
                     }), w.has.input() && x.observe(H[0], {
                         childList: !0,
                         subtree: !0
                     }), w.has.menu() && C.observe(W[0], {
                         childList: !0,
                         subtree: !0
                     }), w.debug("Setting up mutation observer", x, C))
                 },
                 create: {
                     id: function() {
                         y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y)
                     },
                     userChoice: function(t) {
                         var n, o, a;
                         return (t = t || w.get.userValues()) ? (t = e.isArray(t) ? t : [t], e.each(t, function(t, r) {
                             w.get.item(r) === !1 && (a = k.templates.addition(w.add.variables(T.addResult, r)), o = e("<div />").html(a).attr("data-" + E.value, r).attr("data-" + E.text, r).addClass(S.addition).addClass(S.item), n = n === i ? o : n.add(o), w.verbose("Creating user choices for value", r, o))
                         }), n) : !1
                     },
                     userLabels: function(t) {
                         var n = w.get.userValues();
                         n && (w.debug("Adding user labels", n), e.each(n, function(e, t) {
                             w.verbose("Adding custom user value"), w.add.label(t, t)
                         }))
                     },
                     menu: function() {
                         W = e("<div />").addClass(S.menu).appendTo(I)
                     }
                 },
                 search: function(e) {
                     e = e !== i ? e : w.get.query(), w.verbose("Searching for query", e), w.filter(e)
                 },
                 select: {
                     firstUnfiltered: function() {
                         w.verbose("Selecting first non-filtered element"), w.remove.selectedItem(), B.not(D.unselectable).eq(0).addClass(S.selected)
                     },
                     nextAvailable: function(e) {
                         e = e.eq(0);
                         var t = e.nextAll(D.item).not(D.unselectable).eq(0),
                             n = e.prevAll(D.item).not(D.unselectable).eq(0),
                             i = t.length > 0;
                         i ? (w.verbose("Moving selection to", t), t.addClass(S.selected)) : (w.verbose("Moving selection to", n), n.addClass(S.selected))
                     }
                 },
                 setup: {
                     api: function() {
                         var e = {
                             debug: k.debug,
                             on: !1
                         };
                         w.verbose("First request, initializing API"), I.api(e)
                     },
                     layout: function() {
                         I.is("select") && (w.setup.select(), w.setup.returnedObject()), w.has.menu() || w.create.menu(), w.is.search() && !w.has.search() && (w.verbose("Adding search input"), V = e("<input />").addClass(S.search).prop("autocomplete", "off").insertBefore(N)), k.allowTab && w.set.tabbable()
                     },
                     select: function() {
                         var t = w.get.selectValues();
                         w.debug("Dropdown initialized on a select", t), I.is("select") && (H = I), H.parent(D.dropdown).length > 0 ? (w.debug("UI dropdown already exists. Creating dropdown menu only"), I = H.closest(D.dropdown), w.has.menu() || w.create.menu(), W = I.children(D.menu), w.setup.menu(t)) : (w.debug("Creating entire dropdown from select"), I = e("<div />").attr("class", H.attr("class")).addClass(S.selection).addClass(S.dropdown).html(q.dropdown(t)).insertBefore(H), H.hasClass(S.multiple) && H.prop("multiple") === !1 && (w.error(O.missingMultiple), H.prop("multiple", !0)), H.is("[multiple]") && w.set.multiple(), H.prop("disabled") && (w.debug("Disabling dropdown"), I.addClass(S.disabled)), H.removeAttr("class").detach().prependTo(I)), w.refresh()
                     },
                     menu: function(e) {
                         W.html(q.menu(e, A)), B = W.find(D.item)
                     },
                     reference: function() {
                         w.debug("Dropdown behavior was called on select, replacing with closest dropdown"), I = I.parent(D.dropdown), w.refresh(), w.setup.returnedObject(), f && (Z = w, w.invoke(m))
                     },
                     returnedObject: function() {
                         var e = r.slice(0, p),
                             t = r.slice(p + 1);
                         r = e.add(I).add(t)
                     }
                 },
                 refresh: function() {
                     w.refreshSelectors(), w.refreshData()
                 },
                 refreshSelectors: function() {
                     w.verbose("Refreshing selector cache"), N = I.find(D.text), V = I.find(D.search), H = I.find(D.input), M = I.find(D.icon), U = I.prev().find(D.text).length > 0 ? I.prev().find(D.text) : I.prev(), W = I.children(D.menu), B = W.find(D.item)
                 },
                 refreshData: function() {
                     w.verbose("Refreshing cached metadata"), B.removeData(E.text).removeData(E.value), I.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText)
                 },
                 toggle: function() {
                     w.verbose("Toggling menu visibility"), w.is.active() ? w.hide() : w.show()
                 },
                 show: function(t) {
                     if (t = e.isFunction(t) ? t : function() {}, w.can.show() && !w.is.active()) {
                         if (w.debug("Showing dropdown"), w.is.multiple() && !w.has.search() && w.is.allFiltered()) return !0;
                         !w.has.message() || w.has.maxSelections() || w.has.allResultsFiltered() || w.remove.message(), k.onShow.call(Y) !== !1 && w.animate.show(function() {
                             w.can.click() && w.bind.intent(), w.set.visible(), t.call(Y)
                         })
                     }
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, w.is.active() && (w.debug("Hiding dropdown"), k.onHide.call(Y) !== !1 && w.animate.hide(function() {
                         w.remove.visible(), t.call(Y)
                     }))
                 },
                 hideOthers: function() {
                     w.verbose("Finding other dropdowns to hide"), r.not(I).has(D.menu + "." + S.visible).dropdown("hide")
                 },
                 hideMenu: function() {
                     w.verbose("Hiding menu  instantaneously"), w.remove.active(), w.remove.visible(), W.transition("hide")
                 },
                 hideSubMenus: function() {
                     var e = W.children(D.item).find(D.menu);
                     w.verbose("Hiding sub menus", e), e.transition("hide")
                 },
                 bind: {
                     events: function() {
                         l && w.bind.touchEvents(), w.bind.keyboardEvents(), w.bind.inputEvents(), w.bind.mouseEvents()
                     },
                     touchEvents: function() {
                         w.debug("Touch device detected binding additional touch events"), w.is.searchSelection() || w.is.single() && I.on("touchstart" + j, w.event.test.toggle), W.on("touchstart" + j, D.item, w.event.item.mouseenter)
                     },
                     keyboardEvents: function() {
                         w.verbose("Binding keyboard events"), I.on("keydown" + j, w.event.keydown), w.has.search() && I.on(w.get.inputEvent() + j, D.search, w.event.input), w.is.multiple() && s.on("keydown" + b, w.event.document.keydown)
                     },
                     inputEvents: function() {
                         w.verbose("Binding input change events"), I.on("change" + j, D.input, w.event.change)
                     },
                     mouseEvents: function() {
                         w.verbose("Binding mouse events"), w.is.multiple() && I.on("click" + j, D.label, w.event.label.click).on("click" + j, D.remove, w.event.remove.click), w.is.searchSelection() ? (I.on("mousedown" + j, D.menu, w.event.menu.mousedown).on("mouseup" + j, D.menu, w.event.menu.mouseup).on("click" + j, D.icon, w.event.icon.click).on("click" + j, D.search, w.show).on("focus" + j, D.search, w.event.search.focus).on("blur" + j, D.search, w.event.search.blur).on("click" + j, D.text, w.event.text.focus), w.is.multiple() && I.on("click" + j, w.event.click)) : ("click" == k.on ? I.on("click" + j, D.icon, w.event.icon.click).on("click" + j, w.event.test.toggle) : "hover" == k.on ? I.on("mouseenter" + j, w.delay.show).on("mouseleave" + j, w.delay.hide) : I.on(k.on + j, w.toggle), I.on("mousedown" + j, w.event.mousedown).on("mouseup" + j, w.event.mouseup).on("focus" + j, w.event.focus).on("blur" + j, w.event.blur)), W.on("mouseenter" + j, D.item, w.event.item.mouseenter).on("mouseleave" + j, D.item, w.event.item.mouseleave).on("click" + j, D.item, w.event.item.click)
                     },
                     intent: function() {
                         w.verbose("Binding hide intent event to document"), l && s.on("touchstart" + b, w.event.test.touch).on("touchmove" + b, w.event.test.touch), s.on("click" + b, w.event.test.hide)
                     }
                 },
                 unbind: {
                     intent: function() {
                         w.verbose("Removing hide intent event from document"), l && s.off("touchstart" + b).off("touchmove" + b), s.off("click" + b)
                     }
                 },
                 filter: function(e) {
                     var t = e !== i ? e : w.get.query(),
                         n = function() {
                             w.is.multiple() && w.filterActive(), w.select.firstUnfiltered(), w.has.allResultsFiltered() ? k.onNoResults.call(Y, t) ? k.allowAdditions || (w.verbose("All items filtered, showing message", t), w.add.message(T.noResults)) : (w.verbose("All items filtered, hiding dropdown", t), w.hideMenu()) : w.remove.message(), k.allowAdditions && w.add.userSuggestion(e), w.is.searchSelection() && w.can.show() && w.is.focusedOnSearch() && w.show()
                         };
                     k.useLabels && w.has.maxSelections() || (k.apiSettings ? w.can.useAPI() ? w.queryRemote(t, function() {
                         n()
                     }) : w.error(O.noAPI) : (w.filterItems(t), n()))
                 },
                 queryRemote: function(t, n) {
                     var i = {
                         errorDuration: !1,
                         throttle: k.throttle,
                         urlData: {
                             query: t
                         },
                         onError: function() {
                             w.add.message(T.serverError), n()
                         },
                         onFailure: function() {
                             w.add.message(T.serverError), n()
                         },
                         onSuccess: function(e) {
                             w.remove.message(), w.setup.menu({
                                 values: e[A.remoteValues]
                             }), n()
                         }
                     };
                     I.api("get request") || w.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), I.api("setting", i).api("query")
                 },
                 filterItems: function(t) {
                     var n = t !== i ? t : w.get.query(),
                         o = null,
                         a = w.escape.regExp(n),
                         r = new RegExp("^" + a, "igm");
                     w.has.query() && (o = [], w.verbose("Searching for matching values", n), B.each(function() {
                         var t, i, a = e(this);
                         if ("both" == k.match || "text" == k.match) {
                             if (t = String(w.get.choiceText(a, !1)), -1 !== t.search(r)) return o.push(this), !0;
                             if (k.fullTextSearch && w.fuzzySearch(n, t)) return o.push(this), !0
                         }
                         if ("both" == k.match || "value" == k.match) {
                             if (i = String(w.get.choiceValue(a, t)), -1 !== i.search(r)) return o.push(this), !0;
                             if (k.fullTextSearch && w.fuzzySearch(n, i)) return o.push(this), !0
                         }
                     })), w.debug("Showing only matched items", n), w.remove.filteredItem(), o && B.not(o).addClass(S.filtered)
                 },
                 fuzzySearch: function(e, t) {
                     var n = t.length,
                         i = e.length;
                     if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                     if (i === n) return e === t;
                     e: for (var o = 0, a = 0; i > o; o++) {
                         for (var r = e.charCodeAt(o); n > a;)
                             if (t.charCodeAt(a++) === r) continue e;
                         return !1
                     }
                     return !0
                 },
                 filterActive: function() {
                     k.useLabels && B.filter("." + S.active).addClass(S.filtered)
                 },
                 focusSearch: function() {
                     w.is.search() && !w.is.focusedOnSearch() && V[0].focus()
                 },
                 forceSelection: function() {
                     var e = B.not(S.filtered).filter("." + S.selected).eq(0),
                         t = B.not(S.filtered).filter("." + S.active).eq(0),
                         n = e.length > 0 ? e : t,
                         i = n.size() > 0;
                     if (w.has.query()) {
                         if (i) return w.debug("Forcing partial selection to selected item", n), void w.event.item.click.call(n);
                         w.remove.searchTerm()
                     }
                     w.hide()
                 },
                 event: {
                     change: function() {
                         $ || (w.debug("Input changed, updating selection"), w.set.selected())
                     },
                     focus: function() {
                         k.showOnFocus && !Q && w.is.hidden() && !h && w.show()
                     },
                     click: function(t) {
                         var n = e(t.target);
                         n.is(I) && !w.is.focusedOnSearch() && w.focusSearch()
                     },
                     blur: function(e) {
                         h = n.activeElement === this, Q || h || (w.remove.activeLabel(), w.hide())
                     },
                     mousedown: function() {
                         Q = !0
                     },
                     mouseup: function() {
                         Q = !1
                     },
                     search: {
                         focus: function() {
                             Q = !0, w.is.multiple() && w.remove.activeLabel(), k.showOnFocus && (w.search(), w.show())
                         },
                         blur: function(e) {
                             h = n.activeElement === this, X || h ? h && k.forceSelection && w.forceSelection() : w.is.multiple() ? (w.remove.activeLabel(), w.hide()) : k.forceSelection ? w.forceSelection() : w.hide()
                         }
                     },
                     icon: {
                         click: function(e) {
                             w.toggle(), e.stopPropagation()
                         }
                     },
                     text: {
                         focus: function(e) {
                             Q = !0, w.focusSearch()
                         }
                     },
                     input: function(e) {
                         (w.is.multiple() || w.is.searchSelection()) && w.set.filtered(), clearTimeout(w.timer), w.timer = setTimeout(w.search, k.delay.search)
                     },
                     label: {
                         click: function(t) {
                             var n = e(this),
                                 i = I.find(D.label),
                                 o = i.filter("." + S.active),
                                 a = n.nextAll("." + S.active),
                                 r = n.prevAll("." + S.active),
                                 s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);
                             t.shiftKey ? (o.removeClass(S.active), s.addClass(S.active)) : t.ctrlKey ? n.toggleClass(S.active) : (o.removeClass(S.active), n.addClass(S.active)), k.onLabelSelect.apply(this, i.filter("." + S.active))
                         }
                     },
                     remove: {
                         click: function() {
                             var t = e(this).parent();
                             t.hasClass(S.active) ? w.remove.activeLabels() : w.remove.activeLabels(t)
                         }
                     },
                     test: {
                         toggle: function(e) {
                             var t = w.is.multiple() ? w.show : w.toggle;
                             w.determine.eventOnElement(e, t) && e.preventDefault()
                         },
                         touch: function(e) {
                             w.determine.eventOnElement(e, function() {
                                 "touchstart" == e.type ? w.timer = setTimeout(function() {
                                     w.hide()
                                 }, k.delay.touch) : "touchmove" == e.type && clearTimeout(w.timer)
                             }), e.stopPropagation()
                         },
                         hide: function(e) {
                             w.determine.eventInModule(e, w.hide)
                         }
                     },
                     menu: {
                         mousedown: function() {
                             X = !0
                         },
                         mouseup: function() {
                             X = !1
                         }
                     },
                     item: {
                         mouseenter: function(t) {
                             var n = e(this).children(D.menu),
                                 i = e(this).siblings(D.item).children(D.menu);
                             n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function() {
                                 w.verbose("Showing sub-menu", n), e.each(i, function() {
                                     w.animate.hide(!1, e(this))
                                 }), w.animate.show(!1, n)
                             }, k.delay.show), t.preventDefault())
                         },
                         mouseleave: function(t) {
                             var n = e(this).children(D.menu);
                             n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function() {
                                 w.verbose("Hiding sub-menu", n), w.animate.hide(!1, n)
                             }, k.delay.hide))
                         },
                         touchend: function() {},
                         click: function(t) {
                             var n = e(this),
                                 i = e(t ? t.target : ""),
                                 o = n.find(D.menu),
                                 a = w.get.choiceText(n),
                                 r = w.get.choiceValue(n, a),
                                 s = o.length > 0,
                                 c = o.find(i).length > 0;
                             c || s && !k.allowCategorySelection || (k.useLabels || (w.remove.filteredItem(), w.remove.searchTerm(), w.set.scrollPosition(n)), w.determine.selectAction.call(this, a, r))
                         }
                     },
                     document: {
                         keydown: function(e) {
                             var t = e.which,
                                 n = w.is.inObject(t, R);
                             if (n) {
                                 var i = I.find(D.label),
                                     o = i.filter("." + S.active),
                                     a = (o.data(E.value), i.index(o)),
                                     r = i.length,
                                     s = o.length > 0,
                                     c = o.length > 1,
                                     l = 0 === a,
                                     u = a + 1 == r,
                                     d = w.is.searchSelection(),
                                     m = w.is.focusedOnSearch(),
                                     f = w.is.focused(),
                                     g = m && 0 === w.get.caretPosition();
                                 if (d && !s && !m) return;
                                 t == R.leftArrow ? !f && !g || s ? s && (e.shiftKey ? w.verbose("Adding previous label to selection") : (w.verbose("Selecting previous label"), i.removeClass(S.active)), l && !c ? o.addClass(S.active) : o.prev(D.siblingLabel).addClass(S.active).end(),
                                     e.preventDefault()) : (w.verbose("Selecting previous label"), i.last().addClass(S.active)) : t == R.rightArrow ? (f && !s && i.first().addClass(S.active), s && (e.shiftKey ? w.verbose("Adding next label to selection") : (w.verbose("Selecting next label"), i.removeClass(S.active)), u ? d ? m ? i.removeClass(S.active) : w.focusSearch() : c ? o.next(D.siblingLabel).addClass(S.active) : o.addClass(S.active) : o.next(D.siblingLabel).addClass(S.active), e.preventDefault())) : t == R.deleteKey || t == R.backspace ? s ? (w.verbose("Removing active labels"), u && d && !m && w.focusSearch(), o.last().next(D.siblingLabel).addClass(S.active), w.remove.activeLabels(o), e.preventDefault()) : g && !s && t == R.backspace && (w.verbose("Removing last label on input backspace"), o = i.last().addClass(S.active), w.remove.activeLabels(o)) : o.removeClass(S.active)
                             }
                         }
                     },
                     keydown: function(e) {
                         var t = e.which,
                             n = w.is.inObject(t, R);
                         if (n) {
                             var i, o, a = B.not(D.unselectable).filter("." + S.selected).eq(0),
                                 r = W.children("." + S.active).eq(0),
                                 s = a.length > 0 ? a : r,
                                 c = s.length > 0 ? s.siblings(":not(." + S.filtered + ")").andSelf() : W.children(":not(." + S.filtered + ")"),
                                 l = s.children(D.menu),
                                 u = s.closest(D.menu),
                                 d = u.hasClass(S.visible) || u.hasClass(S.animating) || u.parent(D.menu).length > 0,
                                 m = l.length > 0,
                                 f = s.length > 0,
                                 g = s.not(D.unselectable).length > 0,
                                 p = t == R.delimiter && k.allowAdditions && w.is.multiple();
                             if (w.is.visible()) {
                                 if ((t == R.enter || p) && (t == R.enter && f && m && !k.allowCategorySelection ? (w.verbose("Pressed enter on unselectable category, opening sub menu"), t = R.rightArrow) : g && (w.verbose("Selecting item from keyboard shortcut", s), w.event.item.click.call(s, e), w.is.searchSelection() && w.remove.searchTerm()), e.preventDefault()), t == R.leftArrow && (o = u[0] !== W[0], o && (w.verbose("Left key pressed, closing sub-menu"), w.animate.hide(!1, u), s.removeClass(S.selected), u.closest(D.item).addClass(S.selected), e.preventDefault())), t == R.rightArrow && m && (w.verbose("Right key pressed, opening sub-menu"), w.animate.show(!1, l), s.removeClass(S.selected), l.find(D.item).eq(0).addClass(S.selected), e.preventDefault()), t == R.upArrow) {
                                     if (i = f && d ? s.prevAll(D.item + ":not(" + D.unselectable + ")").eq(0) : B.eq(0), c.index(i) < 0) return w.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                     w.verbose("Up key pressed, changing active item"), s.removeClass(S.selected), i.addClass(S.selected), w.set.scrollPosition(i), e.preventDefault()
                                 }
                                 if (t == R.downArrow) {
                                     if (i = f && d ? i = s.nextAll(D.item + ":not(" + D.unselectable + ")").eq(0) : B.eq(0), 0 === i.length) return w.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                     w.verbose("Down key pressed, changing active item"), B.removeClass(S.selected), i.addClass(S.selected), w.set.scrollPosition(i), e.preventDefault()
                                 }
                                 t == R.pageUp && (w.scrollPage("up"), e.preventDefault()), t == R.pageDown && (w.scrollPage("down"), e.preventDefault()), t == R.escape && (w.verbose("Escape key pressed, closing dropdown"), w.hide())
                             } else p && e.preventDefault(), t == R.downArrow && (w.verbose("Down key pressed, showing dropdown"), w.show(), e.preventDefault())
                         } else w.is.selection() && !w.is.search() && w.set.selectedLetter(String.fromCharCode(t))
                     }
                 },
                 trigger: {
                     change: function() {
                         var e = n.createEvent("HTMLEvents"),
                             t = H[0];
                         t && (w.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                     }
                 },
                 determine: {
                     selectAction: function(t, n) {
                         w.verbose("Determining action", k.action), e.isFunction(w.action[k.action]) ? (w.verbose("Triggering preset action", k.action, t, n), w.action[k.action].call(this, t, n)) : e.isFunction(k.action) ? (w.verbose("Triggering user action", k.action, t, n), k.action.call(this, t, n)) : w.error(O.action, k.action)
                     },
                     eventInModule: function(t, i) {
                         var o = e(t.target),
                             a = o.closest(n.documentElement).length > 0,
                             r = o.closest(I).length > 0;
                         return i = e.isFunction(i) ? i : function() {}, a && !r ? (w.verbose("Triggering event", i), i(), !0) : (w.verbose("Event occurred in dropdown, canceling callback"), !1)
                     },
                     eventOnElement: function(t, n) {
                         var i = e(t.target),
                             o = i.closest(D.siblingLabel),
                             a = 0 === I.find(o).length,
                             r = 0 === i.closest(W).length;
                         return n = e.isFunction(n) ? n : function() {}, a && r ? (w.verbose("Triggering event", n), n(), !0) : (w.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                     }
                 },
                 action: {
                     nothing: function() {},
                     activate: function(t, n) {
                         if (n = n !== i ? n : t, w.can.activate(e(this))) {
                             if (w.set.selected(n, e(this)), w.is.multiple() && !w.is.allFiltered()) return;
                             w.hideAndClear()
                         }
                     },
                     select: function(e, t) {
                         w.action.activate.call(this)
                     },
                     combo: function(t, n) {
                         n = n !== i ? n : t, w.set.selected(n, e(this)), w.hideAndClear()
                     },
                     hide: function(e, t) {
                         w.set.value(t), w.hideAndClear()
                     }
                 },
                 get: {
                     id: function() {
                         return y
                     },
                     defaultText: function() {
                         return I.data(E.defaultText)
                     },
                     defaultValue: function() {
                         return I.data(E.defaultValue)
                     },
                     placeholderText: function() {
                         return I.data(E.placeholderText) || ""
                     },
                     text: function() {
                         return N.text()
                     },
                     query: function() {
                         return e.trim(V.val())
                     },
                     searchWidth: function(e) {
                         return e * k.glyphWidth + "em"
                     },
                     selectionCount: function() {
                         var t, n = w.get.values();
                         return t = w.is.multiple() ? e.isArray(n) ? n.length : 0 : "" !== w.get.value() ? 1 : 0
                     },
                     transition: function(e) {
                         return "auto" == k.transition ? w.is.upward(e) ? "slide up" : "slide down" : k.transition
                     },
                     userValues: function() {
                         var t = w.get.values();
                         return t ? (t = e.isArray(t) ? t : [t], e.grep(t, function(e) {
                             return w.get.item(e) === !1
                         })) : !1
                     },
                     uniqueArray: function(t) {
                         return e.grep(t, function(n, i) {
                             return e.inArray(n, t) === i
                         })
                     },
                     caretPosition: function() {
                         var e, t, i = V.get(0);
                         return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0
                     },
                     value: function() {
                         var t = H.length > 0 ? H.val() : I.data(E.value);
                         return e.isArray(t) && 1 === t.length && "" === t[0] ? "" : t
                     },
                     values: function() {
                         var e = w.get.value();
                         return "" === e ? "" : !w.has.selectInput() && w.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e
                     },
                     remoteValues: function() {
                         var t = w.get.values(),
                             n = !1;
                         return t && ("string" == typeof t && (t = [t]), n = {}, e.each(t, function(e, t) {
                             var i = w.read.remoteData(t);
                             w.verbose("Restoring value from session data", i, t), n[t] = i ? i : t
                         })), n
                     },
                     choiceText: function(t, n) {
                         return n = n !== i ? n : k.preserveHTML, t ? (t.find(D.menu).length > 0 && (w.verbose("Retreiving text of element with sub-menu"), t = t.clone(), t.find(D.menu).remove(), t.find(D.menuIcon).remove()), t.data(E.text) !== i ? t.data(E.text) : e.trim(n ? t.html() : t.text())) : void 0
                     },
                     choiceValue: function(t, n) {
                         return n = n || w.get.choiceText(t), t ? t.data(E.value) !== i ? String(t.data(E.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n) : !1
                     },
                     inputEvent: function() {
                         var e = V[0];
                         return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1
                     },
                     selectValues: function() {
                         var t = {};
                         return t.values = [], I.find("option").each(function() {
                             var n = e(this),
                                 o = n.html(),
                                 a = n.attr("disabled"),
                                 r = n.attr("value") !== i ? n.attr("value") : o;
                             "auto" === k.placeholder && "" === r ? t.placeholder = o : t.values.push({
                                 name: o,
                                 value: r,
                                 disabled: a
                             })
                         }), k.placeholder && "auto" !== k.placeholder && (w.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function(e, t) {
                             return e.name > t.name ? 1 : -1
                         }), w.debug("Retrieved and sorted values from select", t)) : w.debug("Retreived values from select", t), t
                     },
                     activeItem: function() {
                         return B.filter("." + S.active)
                     },
                     selectedItem: function() {
                         var e = B.not(D.unselectable).filter("." + S.selected);
                         return e.length > 0 ? e : B.eq(0)
                     },
                     itemWithAdditions: function(e) {
                         var t = w.get.item(e),
                             n = w.create.userChoice(e),
                             i = n && n.length > 0;
                         return i && (t = t.length > 0 ? t.add(n) : n), t
                     },
                     item: function(t, n) {
                         var o, a, r = !1;
                         return t = t !== i ? t : w.get.values() !== i ? w.get.values() : w.get.text(), o = a ? t.length > 0 : t !== i && null !== t, a = w.is.multiple() && e.isArray(t), n = "" === t || 0 === t ? !0 : n || !1, o && B.each(function() {
                             var o = e(this),
                                 s = w.get.choiceText(o),
                                 c = w.get.choiceValue(o, s);
                             if (null !== c && c !== i)
                                 if (a)(-1 !== e.inArray(String(c), t) || -1 !== e.inArray(s, t)) && (r = r ? r.add(o) : o);
                                 else if (n) {
                                 if (w.verbose("Ambiguous dropdown value using strict type check", o, t), c === t || s === t) return r = o, !0
                             } else if (String(c) == String(t) || s == t) return w.verbose("Found select item by value", c, t), r = o, !0
                         }), r
                     }
                 },
                 check: {
                     maxSelections: function(e) {
                         return k.maxSelections ? (e = e !== i ? e : w.get.selectionCount(), e >= k.maxSelections ? (w.debug("Maximum selection count reached"), k.useLabels && (B.addClass(S.filtered), w.add.message(T.maxSelections)), !0) : (w.verbose("No longer at maximum selection count"), w.remove.message(), w.remove.filteredItem(), w.is.searchSelection() && w.filterItems(), !1)) : !0
                     }
                 },
                 restore: {
                     defaults: function() {
                         w.clear(), w.restore.defaultText(), w.restore.defaultValue()
                     },
                     defaultText: function() {
                         var e = w.get.defaultText(),
                             t = w.get.placeholderText;
                         e === t ? (w.debug("Restoring default placeholder text", e), w.set.placeholderText(e)) : (w.debug("Restoring default text", e), w.set.text(e))
                     },
                     defaultValue: function() {
                         var e = w.get.defaultValue();
                         e !== i && (w.debug("Restoring default value", e), "" !== e ? (w.set.value(e), w.set.selected()) : (w.remove.activeItem(), w.remove.selectedItem()))
                     },
                     labels: function() {
                         k.allowAdditions && (k.useLabels || (w.error(O.labels), k.useLabels = !0), w.debug("Restoring selected values"), w.create.userLabels()), w.check.maxSelections()
                     },
                     selected: function() {
                         w.restore.values(), w.is.multiple() ? (w.debug("Restoring previously selected values and labels"), w.restore.labels()) : w.debug("Restoring previously selected values")
                     },
                     values: function() {
                         w.set.initialLoad(), k.apiSettings ? k.saveRemoteData ? w.restore.remoteValues() : w.clearValue() : w.set.selected(), w.remove.initialLoad()
                     },
                     remoteValues: function() {
                         var t = w.get.remoteValues();
                         w.debug("Recreating selected from session data", t), t && (w.is.single() ? e.each(t, function(e, t) {
                             w.set.text(t)
                         }) : e.each(t, function(e, t) {
                             w.add.label(e, t)
                         }))
                     }
                 },
                 read: {
                     remoteData: function(e) {
                         var n;
                         return t.Storage === i ? void w.error(O.noStorage) : (n = sessionStorage.getItem(e), n !== i ? n : !1)
                     }
                 },
                 save: {
                     defaults: function() {
                         w.save.defaultText(), w.save.placeholderText(), w.save.defaultValue()
                     },
                     defaultValue: function() {
                         var e = w.get.value();
                         w.verbose("Saving default value as", e), I.data(E.defaultValue, e)
                     },
                     defaultText: function() {
                         var e = w.get.text();
                         w.verbose("Saving default text as", e), I.data(E.defaultText, e)
                     },
                     placeholderText: function() {
                         var e;
                         k.placeholder !== !1 && N.hasClass(S.placeholder) && (e = w.get.text(), w.verbose("Saving placeholder text as", e), I.data(E.placeholderText, e))
                     },
                     remoteData: function(e, n) {
                         return t.Storage === i ? void w.error(O.noStorage) : (w.verbose("Saving remote data to session storage", n, e), void sessionStorage.setItem(n, e))
                     }
                 },
                 clear: function() {
                     w.is.multiple() ? w.remove.labels() : (w.remove.activeItem(), w.remove.selectedItem()), w.set.placeholderText(), w.clearValue()
                 },
                 clearValue: function() {
                     w.set.value("")
                 },
                 scrollPage: function(e, t) {
                     var n, i, o, a = t || w.get.selectedItem(),
                         r = a.closest(D.menu),
                         s = r.outerHeight(),
                         c = r.scrollTop(),
                         l = B.eq(0).outerHeight(),
                         u = Math.floor(s / l),
                         d = (r.prop("scrollHeight"), "up" == e ? c - l * u : c + l * u),
                         m = B.not(D.unselectable);
                     o = "up" == e ? m.index(a) - u : m.index(a) + u, n = "up" == e ? o >= 0 : o < m.length, i = n ? m.eq(o) : "up" == e ? m.first() : m.last(), i.length > 0 && (w.debug("Scrolling page", e, i), a.removeClass(S.selected), i.addClass(S.selected), r.scrollTop(d))
                 },
                 set: {
                     filtered: function() {
                         var e = w.is.multiple(),
                             t = w.is.searchSelection(),
                             n = e && t,
                             i = t ? w.get.query() : "",
                             o = "string" == typeof i && i.length > 0,
                             a = w.get.searchWidth(i.length),
                             r = "" !== i;
                         e && o && (w.verbose("Adjusting input width", a, k.glyphWidth), V.css("width", a)), o || n && r ? (w.verbose("Hiding placeholder text"), N.addClass(S.filtered)) : (!e || n && !r) && (w.verbose("Showing placeholder text"), N.removeClass(S.filtered))
                     },
                     loading: function() {
                         I.addClass(S.loading)
                     },
                     placeholderText: function(e) {
                         e = e || w.get.placeholderText(), w.debug("Setting placeholder text", e), w.set.text(e), N.addClass(S.placeholder)
                     },
                     tabbable: function() {
                         w.has.search() ? (w.debug("Added tabindex to searchable dropdown"), V.val("").attr("tabindex", 0), W.attr("tabindex", -1)) : (w.debug("Added tabindex to dropdown"), I.attr("tabindex") === i && (I.attr("tabindex", 0), W.attr("tabindex", -1)))
                     },
                     initialLoad: function() {
                         w.verbose("Setting initial load"), v = !0
                     },
                     activeItem: function(e) {
                         e.addClass(k.allowAdditions && e.filter(D.addition).length > 0 ? S.filtered : S.active)
                     },
                     scrollPosition: function(e, t) {
                         var n, o, a, r, s, c, l, u, d, m = 5;
                         e = e || w.get.selectedItem(), n = e.closest(D.menu), o = e && e.length > 0, t = t !== i ? t : !1, e && n.length > 0 && o && (r = e.position().top, n.addClass(S.loading), c = n.scrollTop(), s = n.offset().top, r = e.offset().top, a = c - s + r, t || (l = n.height(), d = a + m > c + l, u = c > a - m), w.debug("Scrolling to active item", a), (t || u || d) && n.scrollTop(a), n.removeClass(S.loading))
                     },
                     text: function(e) {
                         "select" !== k.action && ("combo" == k.action ? (w.debug("Changing combo button text", e, U), k.preserveHTML ? U.html(e) : U.text(e)) : (e !== w.get.placeholderText() && N.removeClass(S.placeholder), w.debug("Changing text", e, N), N.removeClass(S.filtered), k.preserveHTML ? N.html(e) : N.text(e)))
                     },
                     selectedLetter: function(t) {
                         var n, i = B.filter("." + S.selected),
                             o = i.length > 0 && w.has.firstLetter(i, t),
                             a = !1;
                         o && (n = i.nextAll(B).eq(0), w.has.firstLetter(n, t) && (a = n)), a || B.each(function() {
                             return w.has.firstLetter(e(this), t) ? (a = e(this), !1) : void 0
                         }), a && (w.verbose("Scrolling to next value with letter", t), w.set.scrollPosition(a), i.removeClass(S.selected), a.addClass(S.selected))
                     },
                     direction: function(e) {
                         "auto" == k.direction ? w.is.onScreen(e) ? w.remove.upward(e) : w.set.upward(e) : "upward" == k.direction && w.set.upward(e)
                     },
                     upward: function(e) {
                         var t = e || I;
                         t.addClass(S.upward)
                     },
                     value: function(e, t, n) {
                         var o = H.length > 0,
                             a = (!w.has.value(e), w.get.values()),
                             r = e !== i ? String(e) : e;
                         if (o) {
                             if (r == a && (w.verbose("Skipping value update already same value", e, a), !w.is.initialLoad())) return;
                             w.is.single() && w.has.selectInput() && w.can.extendSelect() && (w.debug("Adding user option", e), w.add.optionValue(e)), w.debug("Updating input value", e, a), $ = !0, H.val(e), k.fireOnInit === !1 && w.is.initialLoad() ? w.debug("Input native change event ignored on initial load") : w.trigger.change(), $ = !1
                         } else w.verbose("Storing value in metadata", e, H), e !== a && I.data(E.value, r);
                         k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onChange) : k.onChange.call(Y, e, t, n)
                     },
                     active: function() {
                         I.addClass(S.active)
                     },
                     multiple: function() {
                         I.addClass(S.multiple)
                     },
                     visible: function() {
                         I.addClass(S.visible)
                     },
                     exactly: function(e, t) {
                         w.debug("Setting selected to exact values"), w.clear(), w.set.selected(e, t)
                     },
                     selected: function(t, n) {
                         var i = w.is.multiple();
                         n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t), n && (w.debug("Setting selected menu item to", n), w.is.single() ? (w.remove.activeItem(), w.remove.selectedItem()) : k.useLabels && w.remove.selectedItem(), n.each(function() {
                             var t = e(this),
                                 o = w.get.choiceText(t),
                                 a = w.get.choiceValue(t, o),
                                 r = t.hasClass(S.filtered),
                                 s = t.hasClass(S.active),
                                 c = t.hasClass(S.addition),
                                 l = i && 1 == n.length;
                             i ? !s || c ? (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), k.useLabels ? (w.add.value(a, o, t), w.add.label(a, o, l), w.set.activeItem(t), w.filterActive(), w.select.nextAvailable(n)) : (w.add.value(a, o, t), w.set.text(w.add.variables(T.count)), w.set.activeItem(t))) : r || (w.debug("Selected active value, removing label"), w.remove.selected(a)) : (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), w.set.text(o), w.set.value(a, o, t), t.addClass(S.active).addClass(S.selected))
                         }))
                     }
                 },
                 add: {
                     label: function(t, n, i) {
                         var o, a = w.is.searchSelection() ? V : N;
                         return o = e("<a />").addClass(S.label).attr("data-value", t).html(q.label(t, n)), o = k.onLabelCreate.call(o, t, n), w.has.label(t) ? void w.debug("Label already exists, skipping", t) : (k.label.variation && o.addClass(k.label.variation), void(i === !0 ? (w.debug("Animating in label", o), o.addClass(S.hidden).insertBefore(a).transition(k.label.transition, k.label.duration)) : (w.debug("Adding selection label", o), o.insertBefore(a))))
                     },
                     message: function(t) {
                         var n = W.children(D.message),
                             i = k.templates.message(w.add.variables(t));
                         n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(S.message).appendTo(W)
                     },
                     optionValue: function(t) {
                         var n = H.find('option[value="' + t + '"]'),
                             i = n.length > 0;
                         i || (x && (x.disconnect(), w.verbose("Temporarily disconnecting mutation observer", t)), w.is.single() && (w.verbose("Removing previous user addition"), H.find("option." + S.addition).remove()), e("<option/>").prop("value", t).addClass(S.addition).html(t).appendTo(H), w.verbose("Adding user addition as an <option>", t), x && x.observe(H[0], {
                             childList: !0,
                             subtree: !0
                         }))
                     },
                     userSuggestion: function(e) {
                         var t, n = W.children(D.addition),
                             i = w.get.item(e),
                             o = i && i.not(D.addition).length,
                             a = n.length > 0;
                         if (!k.useLabels || !w.has.maxSelections()) {
                             if ("" === e || o) return void n.remove();
                             B.removeClass(S.selected), a ? (t = k.templates.addition(w.add.variables(T.addResult, e)), n.html(t).attr("data-" + E.value, e).attr("data-" + E.text, e).removeClass(S.filtered).addClass(S.selected), w.verbose("Replacing user suggestion with new value", n)) : (n = w.create.userChoice(e), n.prependTo(W).addClass(S.selected), w.verbose("Adding item choice to menu corresponding with user choice addition", n))
                         }
                     },
                     variables: function(e, t) {
                         var n, i, o = -1 !== e.search("{count}"),
                             a = -1 !== e.search("{maxCount}"),
                             r = -1 !== e.search("{term}");
                         return w.verbose("Adding templated variables to message", e), o && (n = w.get.selectionCount(), e = e.replace("{count}", n)), a && (n = w.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (i = t || w.get.query(), e = e.replace("{term}", i)), e
                     },
                     value: function(t, n, i) {
                         var o, a = w.get.values();
                         return "" === t ? void w.debug("Cannot select blank values from multiselect") : (e.isArray(a) ? (o = a.concat([t]), o = w.get.uniqueArray(o)) : o = [t], w.has.selectInput() ? w.can.extendSelect() && (w.debug("Adding value to select", t, o, H), w.add.optionValue(t)) : (o = o.join(k.delimiter), w.debug("Setting hidden input to delimited value", o, H)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("Skipping onadd callback on initial load", k.onAdd) : k.onAdd.call(Y, t, n, i), w.set.value(o, t, n, i), void w.check.maxSelections())
                     }
                 },
                 remove: {
                     active: function() {
                         I.removeClass(S.active)
                     },
                     activeLabel: function() {
                         I.find(D.label).removeClass(S.active)
                     },
                     loading: function() {
                         I.removeClass(S.loading)
                     },
                     initialLoad: function() {
                         v = !1
                     },
                     upward: function(e) {
                         var t = e || I;
                         t.removeClass(S.upward)
                     },
                     visible: function() {
                         I.removeClass(S.visible)
                     },
                     activeItem: function() {
                         B.removeClass(S.active)
                     },
                     filteredItem: function() {
                         k.useLabels && w.has.maxSelections() || (k.useLabels && w.is.multiple() ? B.not("." + S.active).removeClass(S.filtered) : B.removeClass(S.filtered))
                     },
                     optionValue: function(e) {
                         var t = H.find('option[value="' + e + '"]'),
                             n = t.length > 0;
                         n && t.hasClass(S.addition) && (x && (x.disconnect(), w.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), w.verbose("Removing user addition as an <option>", e), x && x.observe(H[0], {
                             childList: !0,
                             subtree: !0
                         }))
                     },
                     message: function() {
                         W.children(D.message).remove()
                     },
                     searchTerm: function() {
                         w.verbose("Cleared search term"), V.val(""), w.set.filtered()
                     },
                     selected: function(t, n) {
                         return (n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t)) ? void n.each(function() {
                             var t = e(this),
                                 n = w.get.choiceText(t),
                                 i = w.get.choiceValue(t, n);
                             w.is.multiple() ? k.useLabels ? (w.remove.value(i, n, t), w.remove.label(i)) : (w.remove.value(i, n, t), 0 === w.get.selectionCount() ? w.set.placeholderText() : w.set.text(w.add.variables(T.count))) : w.remove.value(i, n, t), t.removeClass(S.filtered).removeClass(S.active), k.useLabels && t.removeClass(S.selected)
                         }) : !1
                     },
                     selectedItem: function() {
                         B.removeClass(S.selected)
                     },
                     value: function(e, t, n) {
                         var i, o = w.get.values();
                         w.has.selectInput() ? (w.verbose("Input is <select> removing selected option", e), i = w.remove.arrayValue(e, o), w.remove.optionValue(e)) : (w.verbose("Removing from delimited values", e), i = w.remove.arrayValue(e, o), i = i.join(k.delimiter)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(Y, e, t, n), w.set.value(i, t, n), w.check.maxSelections()
                     },
                     arrayValue: function(t, n) {
                         return e.isArray(n) || (n = [n]), n = e.grep(n, function(e) {
                             return t != e
                         }), w.verbose("Removed value from delimited string", t, n), n
                     },
                     label: function(e, t) {
                         var n = I.find(D.label),
                             i = n.filter('[data-value="' + e + '"]');
                         w.verbose("Removing label", i), i.remove()
                     },
                     activeLabels: function(e) {
                         e = e || I.find(D.label).filter("." + S.active), w.verbose("Removing active label selections", e), w.remove.labels(e)
                     },
                     labels: function(t) {
                         t = t || I.find(D.label), w.verbose("Removing labels", t), t.each(function() {
                             var t = e(this),
                                 n = t.data(E.value),
                                 o = n !== i ? String(n) : n,
                                 a = w.is.userValue(o);
                             return k.onLabelRemove.call(t, n) === !1 ? void w.debug("Label remove callback cancelled removal") : void(a ? (w.remove.value(o), w.remove.label(o)) : w.remove.selected(o))
                         })
                     },
                     tabbable: function() {
                         w.has.search() ? (w.debug("Searchable dropdown initialized"), V.removeAttr("tabindex"), W.removeAttr("tabindex")) : (w.debug("Simple selection dropdown initialized"), I.removeAttr("tabindex"), W.removeAttr("tabindex"))
                     }
                 },
                 has: {
                     search: function() {
                         return V.length > 0
                     },
                     selectInput: function() {
                         return H.is("select")
                     },
                     firstLetter: function(e, t) {
                         var n, i;
                         return e && 0 !== e.length && "string" == typeof t ? (n = w.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i) : !1
                     },
                     input: function() {
                         return H.length > 0
                     },
                     items: function() {
                         return B.length > 0
                     },
                     menu: function() {
                         return W.length > 0
                     },
                     message: function() {
                         return 0 !== W.children(D.message).length
                     },
                     label: function(e) {
                         var t = I.find(D.label);
                         return t.filter('[data-value="' + e + '"]').length > 0
                     },
                     maxSelections: function() {
                         return k.maxSelections && w.get.selectionCount() >= k.maxSelections
                     },
                     allResultsFiltered: function() {
                         return B.filter(D.unselectable).length === B.length
                     },
                     query: function() {
                         return "" !== w.get.query()
                     },
                     value: function(t) {
                         var n = w.get.values(),
                             i = e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t;
                         return i ? !0 : !1
                     }
                 },
                 is: {
                     active: function() {
                         return I.hasClass(S.active)
                     },
                     alreadySetup: function() {
                         return I.is("select") && I.parent(D.dropdown).length > 0 && 0 === I.prev().length
                     },
                     animating: function(e) {
                         return e ? e.transition && e.transition("is animating") : W.transition && W.transition("is animating")
                     },
                     disabled: function() {
                         return I.hasClass(S.disabled)
                     },
                     focused: function() {
                         return n.activeElement === I[0]
                     },
                     focusedOnSearch: function() {
                         return n.activeElement === V[0]
                     },
                     allFiltered: function() {
                         return (w.is.multiple() || w.has.search()) && !w.has.message() && w.has.allResultsFiltered()
                     },
                     hidden: function(e) {
                         return !w.is.visible(e)
                     },
                     initialLoad: function() {
                         return v
                     },
                     onScreen: function(e) {
                         var t, n = e || W,
                             i = !0,
                             o = {};
                         return n.addClass(S.loading), t = {
                             context: {
                                 scrollTop: L.scrollTop(),
                                 height: L.outerHeight()
                             },
                             menu: {
                                 offset: n.offset(),
                                 height: n.outerHeight()
                             }
                         }, o = {
                             above: t.context.scrollTop <= t.menu.offset.top - t.menu.height,
                             below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height
                         }, o.below ? (w.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (w.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (w.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0), n.removeClass(S.loading), i
                     },
                     inObject: function(t, n) {
                         var i = !1;
                         return e.each(n, function(e, n) {
                             return n == t ? (i = !0, !0) : void 0
                         }), i
                     },
                     multiple: function() {
                         return I.hasClass(S.multiple)
                     },
                     single: function() {
                         return !w.is.multiple()
                     },
                     selectMutation: function(t) {
                         var n = !1;
                         return e.each(t, function(t, i) {
                             return i.target && e(i.target).is("select") ? (n = !0, !0) : void 0
                         }), n
                     },
                     search: function() {
                         return I.hasClass(S.search)
                     },
                     searchSelection: function() {
                         return w.has.search() && 1 === V.parent(D.dropdown).length
                     },
                     selection: function() {
                         return I.hasClass(S.selection)
                     },
                     userValue: function(t) {
                         return -1 !== e.inArray(t, w.get.userValues())
                     },
                     upward: function(e) {
                         var t = e || I;
                         return t.hasClass(S.upward)
                     },
                     visible: function(e) {
                         return e ? e.hasClass(S.visible) : W.hasClass(S.visible)
                     }
                 },
                 can: {
                     activate: function(e) {
                         return k.useLabels ? !0 : w.has.maxSelections() ? w.has.maxSelections() && e.hasClass(S.active) ? !0 : !1 : !0
                     },
                     click: function() {
                         return l || "click" == k.on
                     },
                     extendSelect: function() {
                         return k.allowAdditions || k.apiSettings
                     },
                     show: function() {
                         return !w.is.disabled() && (w.has.items() || w.has.message())
                     },
                     useAPI: function() {
                         return e.fn.api !== i
                     }
                 },
                 animate: {
                     show: function(t, n) {
                         var o, a = n || W,
                             r = n ? function() {} : function() {
                                 w.hideSubMenus(), w.hideOthers(), w.set.active()
                             };
                         t = e.isFunction(t) ? t : function() {}, w.verbose("Doing menu show animation", a), w.set.direction(n), o = w.get.transition(n), w.is.selection() && w.set.scrollPosition(w.get.selectedItem(), !0), (w.is.hidden(a) || w.is.animating(a)) && ("none" == o ? (r(), a.transition("show"), t.call(Y)) : e.fn.transition !== i && I.transition("is supported") ? a.transition({
                             animation: o + " in",
                             debug: k.debug,
                             verbose: k.verbose,
                             duration: k.duration,
                             queue: !0,
                             onStart: r,
                             onComplete: function() {
                                 t.call(Y)
                             }
                         }) : w.error(O.noTransition, o))
                     },
                     hide: function(t, n) {
                         var o = n || W,
                             a = (n ? .9 * k.duration : k.duration, n ? function() {} : function() {
                                 w.can.click() && w.unbind.intent(), w.remove.active()
                             }),
                             r = w.get.transition(n);
                         t = e.isFunction(t) ? t : function() {}, (w.is.visible(o) || w.is.animating(o)) && (w.verbose("Doing menu hide animation", o), "none" == r ? (a(), o.transition("hide"), t.call(Y)) : e.fn.transition !== i && I.transition("is supported") ? o.transition({
                             animation: r + " out",
                             duration: k.duration,
                             debug: k.debug,
                             verbose: k.verbose,
                             queue: !0,
                             onStart: a,
                             onComplete: function() {
                                 "auto" == k.direction && w.remove.upward(n), t.call(Y)
                             }
                         }) : w.error(O.transition))
                     }
                 },
                 hideAndClear: function() {
                     w.remove.searchTerm(), w.has.maxSelections() || (w.has.search() ? w.hide(function() {
                         w.remove.filteredItem()
                     }) : w.hide())
                 },
                 delay: {
                     show: function() {
                         w.verbose("Delaying show event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.show, k.delay.show)
                     },
                     hide: function() {
                         w.verbose("Delaying hide event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.hide, k.delay.hide)
                     }
                 },
                 escape: {
                     regExp: function(e) {
                         return e = String(e), e.replace(F.escape, "\\$&")
                     }
                 },
                 setting: function(t, n) {
                     if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, w, t);
                     else {
                         if (n === i) return w[t];
                         w[t] = n
                     }
                 },
                 debug: function() {
                     k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         k.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: Y,
                             "Execution Time": n
                         })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                     },
                     display: function() {
                         var t = k.name + ":",
                             n = 0;
                         u = !1, clearTimeout(w.performance.timer), e.each(d, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), d = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = Z;
                     return n = n || g, o = Y || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (w.error(O.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, f ? (Z === i && w.initialize(), w.invoke(m)) : (Z !== i && Z.invoke("destroy"), w.initialize())
         }), a !== i ? a : r
     }, e.fn.dropdown.settings = {
         debug: !1,
         verbose: !1,
         performance: !0,
         on: "click",
         action: "activate",
         apiSettings: !1,
         saveRemoteData: !0,
         throttle: 200,
         context: t,
         direction: "auto",
         keepOnScreen: !0,
         match: "text",
         fullTextSearch: 'exact',
         placeholder: "auto",
         preserveHTML: !0,
         sortSelect: !1,
         forceSelection: !0,
         allowAdditions: !1,
         maxSelections: !1,
         useLabels: !0,
         delimiter: ",",
         showOnFocus: !0,
         allowTab: !0,
         allowCategorySelection: !1,
         fireOnInit: !1,
         transition: "auto",
         duration: 200,
         glyphWidth: 1.0714,
         label: {
             transition: "scale",
             duration: 200,
             variation: !1
         },
         delay: {
             hide: 300,
             show: 200,
             search: 20,
             touch: 50
         },
         onChange: function(e, t, n) {},
         onAdd: function(e, t, n) {},
         onRemove: function(e, t, n) {},
         onLabelSelect: function(e) {},
         onLabelCreate: function(t, n) {
             return e(this)
         },
         onLabelRemove: function(e) {
             return !0
         },
         onNoResults: function(e) {
             return !0
         },
         onShow: function() {},
         onHide: function() {},
         name: "Dropdown",
         namespace: "dropdown",
         message: {
             addResult: "Add <b>{term}</b>",
             count: "{count} selected",
             maxSelections: "Max {maxCount} selections",
             noResults: "No results found.",
             serverError: "There was an error contacting the server"
         },
         error: {
             action: "You called a dropdown action that was not defined",
             alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
             labels: "Allowing user additions currently requires the use of labels.",
             missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
             method: "The method you called is not defined.",
             noAPI: "The API module is required to load resources remotely",
             noStorage: "Saving remote data requires session storage",
             noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
         },
         regExp: {
             escape: /[-[\]{}()*+?.,\\^$|#\s]/g
         },
         metadata: {
             defaultText: "defaultText",
             defaultValue: "defaultValue",
             placeholderText: "placeholder",
             text: "text",
             value: "value"
         },
         fields: {
             remoteValues: "results",
             values: "values",
             name: "name",
             value: "value"
         },
         keys: {
             backspace: 8,
             delimiter: 188,
             deleteKey: 46,
             enter: 13,
             escape: 27,
             pageUp: 33,
             pageDown: 34,
             leftArrow: 37,
             upArrow: 38,
             rightArrow: 39,
             downArrow: 40
         },
         selector: {
             addition: ".addition",
             dropdown: ".ui.dropdown",
             icon: "> .dropdown.icon",
             input: '> input[type="hidden"], > select',
             item: ".item",
             label: "> .label",
             remove: "> .label > .delete.icon",
             siblingLabel: ".label",
             menu: ".menu",
             message: ".message",
             menuIcon: ".dropdown.icon",
             search: "input.search, .menu > .search > input",
             text: "> .text:not(.icon)",
             unselectable: ".disabled, .filtered"
         },
         className: {
             active: "active",
             addition: "addition",
             animating: "animating",
             disabled: "disabled",
             dropdown: "ui dropdown",
             filtered: "filtered",
             hidden: "hidden transition",
             item: "item",
             label: "ui label",
             loading: "loading",
             menu: "menu",
             message: "message",
             multiple: "multiple",
             placeholder: "default",
             search: "search",
             selected: "selected",
             selection: "selection",
             upward: "upward",
             visible: "visible"
         }
     }, e.fn.dropdown.settings.templates = {
         dropdown: function(t) {
             var n = t.placeholder || !1,
                 i = (t.values || {}, "");
             return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function(e, t) {
                 i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), i += "</div>"
         },
         menu: function(t, n) {
             var i = t[n.values] || {},
                 o = "";
             return e.each(i, function(e, t) {
                 o += '<div class="item" data-value="' + t[n.value] + '">' + t[n.name] + "</div>"
             }), o
         },
         label: function(e, t) {
             return t + '<i class="delete icon"></i>'
         },
         message: function(e) {
             return e
         },
         addition: function(e) {
             return e
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.embed = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var m, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
                 g = f.selector,
                 p = f.className,
                 v = f.sources,
                 h = f.error,
                 b = f.metadata,
                 y = f.namespace,
                 x = f.templates,
                 C = "." + y,
                 w = "module-" + y,
                 k = (e(t), e(this)),
                 S = k.find(g.placeholder),
                 T = k.find(g.icon),
                 A = k.find(g.embed),
                 R = this,
                 E = k.data(w);
             m = {
                 initialize: function() {
                     m.debug("Initializing embed"), m.determine.autoplay(), m.create(), m.bind.events(), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of module", m), E = m, k.data(w, m)
                 },
                 destroy: function() {
                     m.verbose("Destroying previous instance of embed"), m.reset(), k.removeData(w).off(C)
                 },
                 refresh: function() {
                     m.verbose("Refreshing selector cache"), S = k.find(g.placeholder), T = k.find(g.icon), A = k.find(g.embed)
                 },
                 bind: {
                     events: function() {
                         m.has.placeholder() && (m.debug("Adding placeholder events"), k.on("click" + C, g.placeholder, m.createAndShow).on("click" + C, g.icon, m.createAndShow))
                     }
                 },
                 create: function() {
                     var e = m.get.placeholder();
                     e ? m.createPlaceholder() : m.createAndShow()
                 },
                 createPlaceholder: function(e) {
                     {
                         var t = m.get.icon(),
                             n = m.get.url();
                         m.generate.embed(n)
                     }
                     e = e || m.get.placeholder(), k.html(x.placeholder(e, t)), m.debug("Creating placeholder for embed", e, t)
                 },
                 createEmbed: function(t) {
                     m.refresh(), t = t || m.get.url(), A = e("<div/>").addClass(p.embed).html(m.generate.embed(t)).appendTo(k), f.onCreate.call(R, t), m.debug("Creating embed object", A)
                 },
                 createAndShow: function() {
                     m.createEmbed(), m.show()
                 },
                 change: function(e, t, n) {
                     m.debug("Changing video to ", e, t, n), k.data(b.source, e).data(b.id, t).data(b.url, n),
                         m.create()
                 },
                 reset: function() {
                     m.debug("Clearing embed and showing placeholder"), m.remove.active(), m.remove.embed(), m.showPlaceholder(), f.onReset.call(R)
                 },
                 show: function() {
                     m.debug("Showing embed"), m.set.active(), f.onDisplay.call(R)
                 },
                 hide: function() {
                     m.debug("Hiding embed"), m.showPlaceholder()
                 },
                 showPlaceholder: function() {
                     m.debug("Showing placeholder image"), m.remove.active(), f.onPlaceholderDisplay.call(R)
                 },
                 get: {
                     id: function() {
                         return f.id || k.data(b.id)
                     },
                     placeholder: function() {
                         return f.placeholder || k.data(b.placeholder)
                     },
                     icon: function() {
                         return f.icon ? f.icon : k.data(b.icon) !== i ? k.data(b.icon) : m.determine.icon()
                     },
                     source: function(e) {
                         return f.source ? f.source : k.data(b.source) !== i ? k.data(b.source) : m.determine.source()
                     },
                     type: function() {
                         var e = m.get.source();
                         return v[e] !== i ? v[e].type : !1
                     },
                     url: function() {
                         return f.url ? f.url : k.data(b.url) !== i ? k.data(b.url) : m.determine.url()
                     }
                 },
                 determine: {
                     autoplay: function() {
                         m.should.autoplay() && (f.autoplay = !0)
                     },
                     source: function(t) {
                         var n = !1;
                         return t = t || m.get.url(), t && e.each(v, function(e, i) {
                             return -1 !== t.search(i.domain) ? (n = e, !1) : void 0
                         }), n
                     },
                     icon: function() {
                         var e = m.get.source();
                         return v[e] !== i ? v[e].icon : !1
                     },
                     url: function() {
                         var e, t = f.id || k.data(b.id),
                             n = f.source || k.data(b.source);
                         return e = v[n] !== i ? v[n].url.replace("{id}", t) : !1, e && k.data(b.url, e), e
                     }
                 },
                 set: {
                     active: function() {
                         k.addClass(p.active)
                     }
                 },
                 remove: {
                     active: function() {
                         k.removeClass(p.active)
                     },
                     embed: function() {
                         A.empty()
                     }
                 },
                 encode: {
                     parameters: function(e) {
                         var t, n = [];
                         for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                         return n.join("&amp;")
                     }
                 },
                 generate: {
                     embed: function(e) {
                         m.debug("Generating embed html");
                         var t, n, i = m.get.source();
                         return e = m.get.url(e), e ? (n = m.generate.parameters(i), t = x.iframe(e, n)) : m.error(h.noURL, k), t
                     },
                     parameters: function(t, n) {
                         var o = v[t] && v[t].parameters !== i ? v[t].parameters(f) : {};
                         return n = n || f.parameters, n && (o = e.extend({}, o, n)), o = f.onEmbed(o), m.encode.parameters(o)
                     }
                 },
                 has: {
                     placeholder: function() {
                         return f.placeholder || k.data(b.placeholder)
                     }
                 },
                 should: {
                     autoplay: function() {
                         return "auto" === f.autoplay ? f.placeholder || k.data(b.placeholder) !== i : f.autoplay
                     }
                 },
                 is: {
                     video: function() {
                         return "video" == m.get.type()
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: R,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = E;
                     return n = n || d, a = R || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (E === i && m.initialize(), m.invoke(l)) : (E !== i && E.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.embed.settings = {
         name: "Embed",
         namespace: "embed",
         debug: !1,
         verbose: !1,
         performance: !0,
         icon: !1,
         source: !1,
         url: !1,
         id: !1,
         autoplay: "auto",
         color: "#444444",
         hd: !0,
         brandedUI: !1,
         parameters: !1,
         onDisplay: function() {},
         onPlaceholderDisplay: function() {},
         onReset: function() {},
         onCreate: function(e) {},
         onEmbed: function(e) {
             return e
         },
         metadata: {
             id: "id",
             icon: "icon",
             placeholder: "placeholder",
             source: "source",
             url: "url"
         },
         error: {
             noURL: "No URL specified",
             method: "The method you called is not defined"
         },
         className: {
             active: "active",
             embed: "embed"
         },
         selector: {
             embed: ".embed",
             placeholder: ".placeholder",
             icon: ".icon"
         },
         sources: {
             youtube: {
                 name: "youtube",
                 type: "video",
                 icon: "video play",
                 domain: "youtube.com",
                 url: "//www.youtube.com/embed/{id}",
                 parameters: function(e) {
                     return {
                         autohide: !e.brandedUI,
                         autoplay: e.autoplay,
                         color: e.colors || i,
                         hq: e.hd,
                         jsapi: e.api,
                         modestbranding: !e.brandedUI
                     }
                 }
             },
             vimeo: {
                 name: "vimeo",
                 type: "video",
                 icon: "video play",
                 domain: "vimeo.com",
                 url: "//player.vimeo.com/video/{id}",
                 parameters: function(e) {
                     return {
                         api: e.api,
                         autoplay: e.autoplay,
                         byline: e.brandedUI,
                         color: e.colors || i,
                         portrait: e.brandedUI,
                         title: e.brandedUI
                     }
                 }
             }
         },
         templates: {
             iframe: function(e, t) {
                 return '<iframe src="' + e + "?" + t + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
             },
             placeholder: function(e, t) {
                 var n = "";
                 return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
             }
         },
         api: !0,
         onPause: function() {},
         onPlay: function() {},
         onStop: function() {}
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.modal = function(o) {
         var a, r = e(this),
             s = e(t),
             c = e(n),
             l = e("body"),
             u = r.selector || "",
             d = (new Date).getTime(),
             m = [],
             f = arguments[0],
             g = "string" == typeof f,
             p = [].slice.call(arguments, 1),
             v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var r, h, b, y, x, C, w, k, S, T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
                 A = T.selector,
                 R = T.className,
                 E = T.namespace,
                 P = T.error,
                 F = "." + E,
                 D = "module-" + E,
                 O = e(this),
                 q = e(T.context),
                 j = O.find(A.close),
                 z = this,
                 I = O.data(D);
             S = {
                 initialize: function() {
                     S.verbose("Initializing dimmer", q), S.create.id(), S.create.dimmer(), S.refreshModals(), S.bind.events(), T.observeChanges && S.observeChanges(), S.instantiate()
                 },
                 instantiate: function() {
                     S.verbose("Storing instance of modal"), I = S, O.data(D, I)
                 },
                 create: {
                     dimmer: function() {
                         var t = {
                                 debug: T.debug,
                                 dimmerName: "modals",
                                 duration: {
                                     show: T.duration,
                                     hide: T.duration
                                 }
                             },
                             n = e.extend(!0, t, T.dimmerSettings);
                         return T.inverted && (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted"), e.fn.dimmer === i ? void S.error(P.dimmer) : (S.debug("Creating dimmer with settings", n), y = q.dimmer(n), T.detachable ? (S.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", O)) : S.set.undetached(), T.blurring && y.addClass(R.blurring), void(x = y.dimmer("get dimmer")))
                     },
                     id: function() {
                         w = (Math.random().toString(16) + "000000000").substr(2, 8), C = "." + w, S.verbose("Creating unique id for element", w)
                     }
                 },
                 destroy: function() {
                     S.verbose("Destroying previous modal"), O.removeData(D).off(F), s.off(C), j.off(F), q.dimmer("destroy")
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (k = new MutationObserver(function(e) {
                         S.debug("DOM tree modified, refreshing"), S.refresh()
                     }), k.observe(z, {
                         childList: !0,
                         subtree: !0
                     }), S.debug("Setting up mutation observer", k))
                 },
                 refresh: function() {
                     S.remove.scrolling(), S.cacheSizes(), S.set.screenHeight(), S.set.type(), S.set.position()
                 },
                 refreshModals: function() {
                     h = O.siblings(A.modal), r = h.add(O)
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(S[n]) ? S[n] : S.toggle, i.length > 0 ? (S.debug("Attaching modal events to element", t, n), i.off(F).on("click" + F, n)) : S.error(P.notFound, t)
                 },
                 bind: {
                     events: function() {
                         S.verbose("Attaching events"), O.on("click" + F, A.close, S.event.close).on("click" + F, A.approve, S.event.approve).on("click" + F, A.deny, S.event.deny), s.on("resize" + C, S.event.resize)
                     }
                 },
                 get: {
                     id: function() {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 },
                 event: {
                     approve: function() {
                         return T.onApprove.call(z, e(this)) === !1 ? void S.verbose("Approve callback returned false cancelling hide") : void S.hide()
                     },
                     deny: function() {
                         return T.onDeny.call(z, e(this)) === !1 ? void S.verbose("Deny callback returned false cancelling hide") : void S.hide()
                     },
                     close: function() {
                         S.hide()
                     },
                     click: function(t) {
                         var i = e(t.target),
                             o = i.closest(A.modal).length > 0,
                             a = e.contains(n.documentElement, t.target);
                         !o && a && (S.debug("Dimmer clicked, hiding all modals"), S.is.active() && (S.remove.clickaway(), T.allowMultiple ? S.hide() : S.hideAll()))
                     },
                     debounce: function(e, t) {
                         clearTimeout(S.timer), S.timer = setTimeout(e, t)
                     },
                     keyboard: function(e) {
                         var t = e.which,
                             n = 27;
                         t == n && (T.closable ? (S.debug("Escape key pressed hiding modal"), S.hide()) : S.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                     },
                     resize: function() {
                         y.dimmer("is active") && v(S.refresh)
                     }
                 },
                 toggle: function() {
                     S.is.active() || S.is.animating() ? S.hide() : S.show()
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, S.refreshModals(), S.showModal(t)
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, S.refreshModals(), S.hideModal(t)
                 },
                 showModal: function(t) {
                     t = e.isFunction(t) ? t : function() {}, S.is.animating() || !S.is.active() ? (S.showDimmer(), S.cacheSizes(), S.set.position(), S.set.screenHeight(), S.set.type(), S.set.clickaway(), !T.allowMultiple && S.others.active() ? S.hideOthers(S.showModal) : (T.onShow.call(z), T.transition && e.fn.transition !== i && O.transition("is supported") ? (S.debug("Showing modal with css animations"), O.transition({
                         debug: T.debug,
                         animation: T.transition + " in",
                         queue: T.queue,
                         duration: T.duration,
                         useFailSafe: !0,
                         onComplete: function() {
                             T.onVisible.apply(z), S.add.keyboardShortcuts(), S.save.focus(), S.set.active(), T.autofocus && S.set.autofocus(), t()
                         }
                     })) : S.error(P.noTransition))) : S.debug("Modal is already visible")
                 },
                 hideModal: function(t, n) {
                     return t = e.isFunction(t) ? t : function() {}, S.debug("Hiding modal"), T.onHide.call(z, e(this)) === !1 ? void S.verbose("Hide callback returned false cancelling hide") : void((S.is.animating() || S.is.active()) && (T.transition && e.fn.transition !== i && O.transition("is supported") ? (S.remove.active(), O.transition({
                         debug: T.debug,
                         animation: T.transition + " out",
                         queue: T.queue,
                         duration: T.duration,
                         useFailSafe: !0,
                         onStart: function() {
                             S.others.active() || n || S.hideDimmer(), S.remove.keyboardShortcuts()
                         },
                         onComplete: function() {
                             T.onHidden.call(z), S.restore.focus(), t()
                         }
                     })) : S.error(P.noTransition)))
                 },
                 showDimmer: function() {
                     y.dimmer("is animating") || !y.dimmer("is active") ? (S.debug("Showing dimmer"), y.dimmer("show")) : S.debug("Dimmer already visible")
                 },
                 hideDimmer: function() {
                     return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function() {
                         S.remove.clickaway(), S.remove.screenHeight()
                     }) : void S.debug("Dimmer is not visible cannot hide")
                 },
                 hideAll: function(t) {
                     var n = r.filter("." + R.active + ", ." + R.animating);
                     t = e.isFunction(t) ? t : function() {}, n.length > 0 && (S.debug("Hiding all visible modals"), S.hideDimmer(), n.modal("hide modal", t))
                 },
                 hideOthers: function(t) {
                     var n = h.filter("." + R.active + ", ." + R.animating);
                     t = e.isFunction(t) ? t : function() {}, n.length > 0 && (S.debug("Hiding other modals", h), n.modal("hide modal", t, !0))
                 },
                 others: {
                     active: function() {
                         return h.filter("." + R.active).length > 0
                     },
                     animating: function() {
                         return h.filter("." + R.animating).length > 0
                     }
                 },
                 add: {
                     keyboardShortcuts: function() {
                         S.verbose("Adding keyboard shortcuts"), c.on("keyup" + F, S.event.keyboard)
                     }
                 },
                 save: {
                     focus: function() {
                         b = e(n.activeElement).blur()
                     }
                 },
                 restore: {
                     focus: function() {
                         b && b.length > 0 && b.focus()
                     }
                 },
                 remove: {
                     active: function() {
                         O.removeClass(R.active)
                     },
                     clickaway: function() {
                         T.closable && x.off("click" + C)
                     },
                     bodyStyle: function() {
                         "" === l.attr("style") && (S.verbose("Removing style attribute"), l.removeAttr("style"))
                     },
                     screenHeight: function() {
                         S.debug("Removing page height"), l.css("height", "")
                     },
                     keyboardShortcuts: function() {
                         S.verbose("Removing keyboard shortcuts"), c.off("keyup" + F)
                     },
                     scrolling: function() {
                         y.removeClass(R.scrolling), O.removeClass(R.scrolling)
                     }
                 },
                 cacheSizes: function() {
                     var o = O.outerHeight();
                     (S.cache === i || 0 !== o) && (S.cache = {
                         pageHeight: e(n).outerHeight(),
                         height: o + T.offset,
                         contextHeight: "body" == T.context ? e(t).height() : y.height()
                     }), S.debug("Caching modal and container sizes", S.cache)
                 },
                 can: {
                     fit: function() {
                         return S.cache.height + 2 * T.padding < S.cache.contextHeight
                     }
                 },
                 is: {
                     active: function() {
                         return O.hasClass(R.active)
                     },
                     animating: function() {
                         return O.transition("is supported") ? O.transition("is animating") : O.is(":visible")
                     },
                     scrolling: function() {
                         return y.hasClass(R.scrolling)
                     },
                     modernBrowser: function() {
                         return !(t.ActiveXObject || "ActiveXObject" in t)
                     }
                 },
                 set: {
                     autofocus: function() {
                         var e = O.find(":input").filter(":visible"),
                             t = e.filter("[autofocus]"),
                             n = t.length > 0 ? t.first() : e.first();
                         n.length > 0 && n.focus()
                     },
                     clickaway: function() {
                         T.closable && x.on("click" + C, S.event.click)
                     },
                     screenHeight: function() {
                         S.can.fit() ? l.css("height", "") : (S.debug("Modal is taller than page content, resizing page height"), l.css("height", S.cache.height + 2 * T.padding))
                     },
                     active: function() {
                         O.addClass(R.active)
                     },
                     scrolling: function() {
                         y.addClass(R.scrolling), O.addClass(R.scrolling)
                     },
                     type: function() {
                         S.can.fit() ? (S.verbose("Modal fits on screen"), S.others.active() || S.others.animating() || S.remove.scrolling()) : (S.verbose("Modal cannot fit on screen setting to scrolling"), S.set.scrolling())
                     },
                     position: function() {
                         S.verbose("Centering modal on page", S.cache), O.css(S.can.fit() ? {
                             top: "",
                             marginTop: -(S.cache.height / 2)
                         } : {
                             marginTop: "",
                             top: c.scrollTop()
                         })
                     },
                     undetached: function() {
                         y.addClass(R.undetached)
                     }
                 },
                 setting: function(t, n) {
                     if (S.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, T, t);
                     else {
                         if (n === i) return T[t];
                         T[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, S, t);
                     else {
                         if (n === i) return S[t];
                         S[t] = n
                     }
                 },
                 debug: function() {
                     T.debug && (T.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), S.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     T.verbose && T.debug && (T.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), S.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     S.error = Function.prototype.bind.call(console.error, console, T.name + ":"), S.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         T.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, m.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: z,
                             "Execution Time": n
                         })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500)
                     },
                     display: function() {
                         var t = T.name + ":",
                             n = 0;
                         d = !1, clearTimeout(S.performance.timer), e.each(m, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), m = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = I;
                     return n = n || p, o = z || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, g ? (I === i && S.initialize(), S.invoke(f)) : (I !== i && I.invoke("destroy"), S.initialize())
         }), a !== i ? a : this
     }, e.fn.modal.settings = {
         name: "Modal",
         namespace: "modal",
         debug: !1,
         verbose: !1,
         performance: !0,
         observeChanges: !1,
         allowMultiple: !1,
         detachable: !0,
         closable: !0,
         autofocus: !0,
         inverted: !1,
         blurring: !1,
         dimmerSettings: {
             closable: !1,
             useCSS: !0
         },
         context: "body",
         queue: !1,
         duration: 500,
         offset: 0,
         transition: "scale",
         padding: 50,
         onShow: function() {},
         onVisible: function() {},
         onHide: function() {
             return !0
         },
         onHidden: function() {},
         onApprove: function() {
             return !0
         },
         onDeny: function() {
             return !0
         },
         selector: {
             close: "> .close",
             approve: ".actions .positive, .actions .approve, .actions .ok",
             deny: ".actions .negative, .actions .deny, .actions .cancel",
             modal: ".ui.modal"
         },
         error: {
             dimmer: "UI Dimmer, a required component is not included in this page",
             method: "The method you called is not defined.",
             notFound: "The element you specified could not be found"
         },
         className: {
             active: "active",
             animating: "animating",
             blurring: "blurring",
             scrolling: "scrolling",
             undetached: "undetached"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.nag = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             {
                 var a, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
                     f = (m.className, m.selector),
                     g = m.error,
                     p = m.namespace,
                     v = "." + p,
                     h = p + "-module",
                     b = e(this),
                     y = (b.find(f.close), e(m.context ? m.context : "body")),
                     x = this,
                     C = b.data(h);
                 t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 }
             }
             a = {
                 initialize: function() {
                     a.verbose("Initializing element"), b.on("click" + v, f.close, a.dismiss).data(h, a), m.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), m.displayTime > 0 && setTimeout(a.hide, m.displayTime), a.show()
                 },
                 destroy: function() {
                     a.verbose("Destroying instance"), b.removeData(h).off(v)
                 },
                 show: function() {
                     a.should.show() && !b.is(":visible") && (a.debug("Showing nag", m.animation.show), "fade" == m.animation.show ? b.fadeIn(m.duration, m.easing) : b.slideDown(m.duration, m.easing))
                 },
                 hide: function() {
                     a.debug("Showing nag", m.animation.hide), "fade" == m.animation.show ? b.fadeIn(m.duration, m.easing) : b.slideUp(m.duration, m.easing)
                 },
                 onHide: function() {
                     a.debug("Removing nag", m.animation.hide), b.remove(), m.onHide && m.onHide()
                 },
                 dismiss: function(e) {
                     m.storageMethod && a.storage.set(m.key, m.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
                 },
                 should: {
                     show: function() {
                         return m.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(m.key) != m.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(m.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(m.key)), !1)
                     }
                 },
                 get: {
                     storageOptions: function() {
                         var e = {};
                         return m.expires && (e.expires = m.expires), m.domain && (e.domain = m.domain), m.path && (e.path = m.path), e
                     }
                 },
                 clear: function() {
                     a.storage.remove(m.key)
                 },
                 storage: {
                     set: function(n, o) {
                         var r = a.get.storageOptions();
                         if ("localstorage" == m.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);
                         else if ("sessionstorage" == m.storageMethod && t.sessionStorage !== i) t.sessionStorage.setItem(n, o), a.debug("Value stored using session storage", n, o);
                         else {
                             if (e.cookie === i) return void a.error(g.noCookieStorage);
                             e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r)
                         }
                     },
                     get: function(n, o) {
                         var r;
                         return "localstorage" == m.storageMethod && t.localStorage !== i ? r = t.localStorage.getItem(n) : "sessionstorage" == m.storageMethod && t.sessionStorage !== i ? r = t.sessionStorage.getItem(n) : e.cookie !== i ? r = e.cookie(n) : a.error(g.noCookieStorage), ("undefined" == r || "null" == r || r === i || null === r) && (r = i), r
                     },
                     remove: function(n) {
                         var o = a.get.storageOptions();
                         "localstorage" == m.storageMethod && t.localStorage !== i ? t.localStorage.removeItem(n) : "sessionstorage" == m.storageMethod && t.sessionStorage !== i ? t.sessionStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage)
                     }
                 },
                 setting: function(t, n) {
                     if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, a, t);
                     else {
                         if (n === i) return a[t];
                         a[t] = n
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), a.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), a.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     a.error = Function.prototype.bind.call(console.error, console, m.name + ":"), a.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: x,
                             "Execution Time": n
                         })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                     },
                     display: function() {
                         var t = m.name + ":",
                             n = 0;
                         s = !1, clearTimeout(a.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, r) {
                     var s, c, l, u = C;
                     return n = n || d, r = x || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
                         var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (C === i && a.initialize(), a.invoke(l)) : (C !== i && C.invoke("destroy"), a.initialize())
         }), o !== i ? o : this
     }, e.fn.nag.settings = {
         name: "Nag",
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "Nag",
         persist: !1,
         displayTime: 0,
         animation: {
             show: "slide",
             hide: "slide"
         },
         context: !1,
         detachable: !1,
         expires: 30,
         domain: !1,
         path: "/",
         storageMethod: "cookie",
         key: "nag",
         value: "dismiss",
         error: {
             noCookieStorage: "$.cookie is not included. A storage solution is required.",
             noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
             method: "The method you called is not defined."
         },
         className: {
             bottom: "bottom",
             fixed: "fixed"
         },
         selector: {
             close: ".close.icon"
         },
         speed: 500,
         easing: "easeOutQuad",
         onHide: function() {}
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.popup = function(o) {
         var a, r = e(this),
             s = e(n),
             c = e(t),
             l = e("body"),
             u = r.selector || "",
             d = !0,
             m = (new Date).getTime(),
             f = [],
             g = arguments[0],
             p = "string" == typeof g,
             v = [].slice.call(arguments, 1);
         return r.each(function() {
             var n, r, h, b, y, x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
                 C = x.selector,
                 w = x.className,
                 k = x.error,
                 S = x.metadata,
                 T = x.namespace,
                 A = "." + x.namespace,
                 R = "module-" + T,
                 E = e(this),
                 P = e(x.context),
                 F = x.target ? e(x.target) : E,
                 D = 0,
                 O = !1,
                 q = !1,
                 j = this,
                 z = E.data(R);
             y = {
                 initialize: function() {
                     y.debug("Initializing", E), y.createID(), y.bind.events(), !y.exists() && x.preserve && y.create(), y.instantiate()
                 },
                 instantiate: function() {
                     y.verbose("Storing instance", y), z = y, E.data(R, z)
                 },
                 refresh: function() {
                     x.popup ? n = e(x.popup).eq(0) : x.inline && (n = F.nextAll(C.popup).eq(0), x.popup = n), x.popup ? (n.addClass(w.loading), r = y.get.offsetParent(), n.removeClass(w.loading), x.movePopup && y.has.popup() && y.get.offsetParent(n)[0] !== r[0] && (y.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(r))) : r = x.inline ? y.get.offsetParent(F) : y.has.popup() ? y.get.offsetParent(n) : l, r.is("html") && r[0] !== l[0] && (y.debug("Setting page as offset parent"), r = l), y.get.variation() && y.set.variation()
                 },
                 reposition: function() {
                     y.refresh(), y.set.position()
                 },
                 destroy: function() {
                     y.debug("Destroying previous module"), n && !x.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), c.off(h), E.off(A).removeData(R)
                 },
                 event: {
                     start: function(t) {
                         var n = e.isPlainObject(x.delay) ? x.delay.show : x.delay;
                         clearTimeout(y.hideTimer), q || (y.showTimer = setTimeout(y.show, n))
                     },
                     end: function() {
                         var t = e.isPlainObject(x.delay) ? x.delay.hide : x.delay;
                         clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, t)
                     },
                     touchstart: function(e) {
                         q = !0, y.show()
                     },
                     resize: function() {
                         y.is.visible() && y.set.position()
                     },
                     hideGracefully: function(t) {
                         t && 0 === e(t.target).closest(C.popup).length ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open")
                     }
                 },
                 create: function() {
                     var t = y.get.html(),
                         i = y.get.title(),
                         o = y.get.content();
                     t || o || i ? (y.debug("Creating pop-up html"), t || (t = x.templates.popup({
                         title: i,
                         content: o
                     })), n = e("<div/>").addClass(w.popup).data(S.activator, E).html(t), x.inline ? (y.verbose("Inserting popup element inline", n), n.insertAfter(E)) : (y.verbose("Appending popup element to body", n), n.appendTo(P)), y.refresh(), y.set.variation(), x.hoverable && y.bind.popup(), x.onCreate.call(n, j)) : 0 !== F.next(C.popup).length ? (y.verbose("Pre-existing popup found"), x.inline = !0, x.popups = F.next(C.popup).data(S.activator, E), y.refresh(), x.hoverable && y.bind.popup()) : x.popup ? (e(x.popup).data(S.activator, E), y.verbose("Used popup specified in settings"), y.refresh(), x.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", j)
                 },
                 createID: function() {
                     b = (Math.random().toString(16) + "000000000").substr(2, 8), h = "." + b, y.verbose("Creating unique id for element", b)
                 },
                 toggle: function() {
                     y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide())
                 },
                 show: function(e) {
                     if (e = e || function() {}, y.debug("Showing pop-up", x.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) {
                         if (y.exists() || y.create(), x.onShow.call(n, j) === !1) return void y.debug("onShow callback returned false, cancelling popup animation");
                         x.preserve || x.popup || y.refresh(), n && y.set.position() && (y.save.conditions(), x.exclusive && y.hideAll(), y.animate.show(e))
                     }
                 },
                 hide: function(e) {
                     if (e = e || function() {}, y.is.visible() || y.is.animating()) {
                         if (x.onHide.call(n, j) === !1) return void y.debug("onHide callback returned false, cancelling popup animation");
                         y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(e)
                     }
                 },
                 hideAll: function() {
                     e(C.popup).filter("." + w.visible).each(function() {
                         e(this).data(S.activator).popup("hide")
                     })
                 },
                 exists: function() {
                     return n ? x.inline || x.popup ? y.has.popup() : n.closest(P).length >= 1 ? !0 : !1 : !1
                 },
                 removePopup: function() {
                     y.has.popup() && !x.popup && (y.debug("Removing popup", n), n.remove(), n = i, x.onRemove.call(n, j))
                 },
                 save: {
                     conditions: function() {
                         y.cache = {
                             title: E.attr("title")
                         }, y.cache.title && E.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title)
                     }
                 },
                 restore: {
                     conditions: function() {
                         return y.cache && y.cache.title && (E.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0
                     }
                 },
                 animate: {
                     show: function(t) {
                         t = e.isFunction(t) ? t : function() {}, x.transition && e.fn.transition !== i && E.transition("is supported") ? (y.set.visible(), n.transition({
                             animation: x.transition + " in",
                             queue: !1,
                             debug: x.debug,
                             verbose: x.verbose,
                             duration: x.duration,
                             onComplete: function() {
                                 y.bind.close(), t.call(n, j), x.onVisible.call(n, j)
                             }
                         })) : y.error(k.noTransition)
                     },
                     hide: function(t) {
                         return t = e.isFunction(t) ? t : function() {}, y.debug("Hiding pop-up"), x.onHide.call(n, j) === !1 ? void y.debug("onHide callback returned false, cancelling popup animation") : void(x.transition && e.fn.transition !== i && E.transition("is supported") ? n.transition({
                             animation: x.transition + " out",
                             queue: !1,
                             duration: x.duration,
                             debug: x.debug,
                             verbose: x.verbose,
                             onComplete: function() {
                                 y.reset(), t.call(n, j), x.onHidden.call(n, j)
                             }
                         }) : y.error(k.noTransition))
                     }
                 },
                 change: {
                     content: function(e) {
                         n.html(e)
                     }
                 },
                 get: {
                     html: function() {
                         return E.removeData(S.html), E.data(S.html) || x.html
                     },
                     title: function() {
                         return E.removeData(S.title), E.data(S.title) || x.title
                     },
                     content: function() {
                         return E.removeData(S.content), E.data(S.content) || E.attr("title") || x.content
                     },
                     variation: function() {
                         return E.removeData(S.variation), E.data(S.variation) || x.variation
                     },
                     popup: function() {
                         return n
                     },
                     popupOffset: function() {
                         return n.offset()
                     },
                     calculations: function() {
                         var e, i = F[0],
                             o = x.inline || x.popup && x.movePopup ? F.position() : F.offset(),
                             a = {};
                         return a = {
                             target: {
                                 element: F[0],
                                 width: F.outerWidth(),
                                 height: F.outerHeight(),
                                 top: o.top,
                                 left: o.left,
                                 margin: {}
                             },
                             popup: {
                                 width: n.outerWidth(),
                                 height: n.outerHeight()
                             },
                             parent: {
                                 width: r.outerWidth(),
                                 height: r.outerHeight()
                             },
                             screen: {
                                 scroll: {
                                     top: c.scrollTop(),
                                     left: c.scrollLeft()
                                 },
                                 width: c.width(),
                                 height: c.height()
                             }
                         }, x.setFluidWidth && y.is.fluid() && (a.container = {
                             width: n.parent().outerWidth()
                         }, a.popup.width = a.container.width), a.target.margin.top = x.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0, a.target.margin.left = x.inline ? y.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0, e = a.screen, a.boundary = {
                             top: e.scroll.top,
                             bottom: e.scroll.top + e.height,
                             left: e.scroll.left,
                             right: e.scroll.left + e.width
                         }, a
                     },
                     id: function() {
                         return b
                     },
                     startEvent: function() {
                         return "hover" == x.on ? "mouseenter" : "focus" == x.on ? "focus" : !1
                     },
                     scrollEvent: function() {
                         return "scroll"
                     },
                     endEvent: function() {
                         return "hover" == x.on ? "mouseleave" : "focus" == x.on ? "blur" : !1
                     },
                     distanceFromBoundary: function(e, t) {
                         var n, i, o = {};
                         return e = e || y.get.offset(), t = t || y.get.calculations(), n = t.popup, i = t.boundary, e && (o = {
                             top: e.top - i.top,
                             left: e.left - i.left,
                             right: i.right - (e.left + n.width),
                             bottom: i.bottom - (e.top + n.height)
                         }, y.verbose("Distance from boundaries determined", e, o)), o
                     },
                     offsetParent: function(t) {
                         var n = t !== i ? t[0] : E[0],
                             o = n.parentNode,
                             a = e(o);
                         if (o)
                             for (var r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html"); o && !c && s && r;) o = o.parentNode, a = e(o), r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html");
                         return a && a.length > 0 ? a : e()
                     },
                     positions: function() {
                         return {
                             "top left": !1,
                             "top center": !1,
                             "top right": !1,
                             "bottom left": !1,
                             "bottom center": !1,
                             "bottom right": !1,
                             "left center": !1,
                             "right center": !1
                         }
                     },
                     nextPosition: function(e) {
                         var t = e.split(" "),
                             n = t[0],
                             i = t[1],
                             o = {
                                 top: "bottom",
                                 bottom: "top",
                                 left: "right",
                                 right: "left"
                             },
                             a = {
                                 left: "center",
                                 center: "right",
                                 right: "left"
                             },
                             r = {
                                 "top left": "top center",
                                 "top center": "top right",
                                 "top right": "right center",
                                 "right center": "bottom right",
                                 "bottom right": "bottom center",
                                 "bottom center": "bottom left",
                                 "bottom left": "left center",
                                 "left center": "top left"
                             },
                             s = "top" == n || "bottom" == n,
                             c = !1,
                             l = !1,
                             u = !1;
                         return O || (y.verbose("All available positions available"), O = y.get.positions()), y.debug("Recording last position tried", e), O[e] = !0, "opposite" === x.prefer && (u = [o[n], i], u = u.join(" "), c = O[u] === !0, y.debug("Trying opposite strategy", u)), "adjacent" === x.prefer && s && (u = [n, a[i]], u = u.join(" "), l = O[u] === !0, y.debug("Trying adjacent strategy", u)), (l || c) && (y.debug("Using backup position", u), u = r[e]), u
                     }
                 },
                 set: {
                     position: function(e, t) {
                         if (0 === F.length || 0 === n.length) return void y.error(k.notFound);
                         var o, a, r, s, c, l, u, d;
                         if (t = t || y.get.calculations(), e = e || E.data(S.position) || x.position, o = E.data(S.offset) || x.offset, a = x.distanceAway, r = t.target, s = t.popup, c = t.parent, 0 === r.width && 0 === r.height && !(r.element instanceof SVGGraphicsElement)) return y.debug("Popup target is hidden, no action taken"), !1;
                         switch (x.inline && (y.debug("Adding margin to calculation", r.margin), "left center" == e || "right center" == e ? (o += r.margin.top, a += -r.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (o += r.margin.left, a -= r.margin.top) : (o += r.margin.left, a += r.margin.top)), y.debug("Determining popup position from calculations", e, t), y.is.rtl() && (e = e.replace(/left|right/g, function(e) {
                             return "left" == e ? "right" : "left"
                         }), y.debug("RTL: Popup position updated", e)), D == x.maxSearchDepth && "string" == typeof x.lastResort && (e = x.lastResort), e) {
                             case "top left":
                                 l = {
                                     top: "auto",
                                     bottom: c.height - r.top + a,
                                     left: r.left + o,
                                     right: "auto"
                                 };
                                 break;
                             case "top center":
                                 l = {
                                     bottom: c.height - r.top + a,
                                     left: r.left + r.width / 2 - s.width / 2 + o,
                                     top: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "top right":
                                 l = {
                                     bottom: c.height - r.top + a,
                                     right: c.width - r.left - r.width - o,
                                     top: "auto",
                                     left: "auto"
                                 };
                                 break;
                             case "left center":
                                 l = {
                                     top: r.top + r.height / 2 - s.height / 2 + o,
                                     right: c.width - r.left + a,
                                     left: "auto",
                                     bottom: "auto"
                                 };
                                 break;
                             case "right center":
                                 l = {
                                     top: r.top + r.height / 2 - s.height / 2 + o,
                                     left: r.left + r.width + a,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom left":
                                 l = {
                                     top: r.top + r.height + a,
                                     left: r.left + o,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom center":
                                 l = {
                                     top: r.top + r.height + a,
                                     left: r.left + r.width / 2 - s.width / 2 + o,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom right":
                                 l = {
                                     top: r.top + r.height + a,
                                     right: c.width - r.left - r.width - o,
                                     left: "auto",
                                     bottom: "auto"
                                 }
                         }
                         if (l === i && y.error(k.invalidPosition, e), y.debug("Calculated popup positioning values", l), n.css(l).removeClass(w.position).addClass(e).addClass(w.loading), u = y.get.popupOffset(),
                             d = y.get.distanceFromBoundary(u, t), y.is.offstage(d, e)) {
                             if (y.debug("Position is outside viewport", e), D < x.maxSearchDepth) return D++, e = y.get.nextPosition(e), y.debug("Trying new position", e), n ? y.set.position(e, t) : !1;
                             if (!x.lastResort) return y.debug("Popup could not find a position to display", n), y.error(k.cannotPlace, j), y.remove.attempts(), y.remove.loading(), y.reset(), x.onUnplaceable.call(n, j), !1;
                             y.debug("No position found, showing with last position")
                         }
                         return y.debug("Position is on stage", e), y.remove.attempts(), y.remove.loading(), x.setFluidWidth && y.is.fluid() && y.set.fluidWidth(t), !0
                     },
                     fluidWidth: function(e) {
                         e = e || y.get.calculations(), y.debug("Automatically setting element width to parent width", e.parent.width), n.css("width", e.container.width)
                     },
                     variation: function(e) {
                         e = e || y.get.variation(), e && y.has.popup() && (y.verbose("Adding variation to popup", e), n.addClass(e))
                     },
                     visible: function() {
                         E.addClass(w.visible)
                     }
                 },
                 remove: {
                     loading: function() {
                         n.removeClass(w.loading)
                     },
                     variation: function(e) {
                         e = e || y.get.variation(), e && (y.verbose("Removing variation", e), n.removeClass(e))
                     },
                     visible: function() {
                         E.removeClass(w.visible)
                     },
                     attempts: function() {
                         y.verbose("Resetting all searched positions"), D = 0, O = !1
                     }
                 },
                 bind: {
                     events: function() {
                         y.debug("Binding popup events to module"), "click" == x.on && E.on("click" + A, y.toggle), "hover" == x.on && d && E.on("touchstart" + A, y.event.touchstart), y.get.startEvent() && E.on(y.get.startEvent() + A, y.event.start).on(y.get.endEvent() + A, y.event.end), x.target && y.debug("Target set to element", F), c.on("resize" + h, y.event.resize)
                     },
                     popup: function() {
                         y.verbose("Allowing hover events on popup to prevent closing"), n && y.has.popup() && n.on("mouseenter" + A, y.event.start).on("mouseleave" + A, y.event.end)
                     },
                     close: function() {
                         (x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.one(y.get.scrollEvent() + h, y.event.hideGracefully), P.one(y.get.scrollEvent() + h, y.event.hideGracefully)), "hover" == x.on && q && (y.verbose("Binding popup close event to document"), s.on("touchstart" + h, function(e) {
                             y.verbose("Touched away from popup"), y.event.hideGracefully.call(j, e)
                         })), "click" == x.on && x.closable && (y.verbose("Binding popup close event to document"), s.on("click" + h, function(e) {
                             y.verbose("Clicked away from popup"), y.event.hideGracefully.call(j, e)
                         }))
                     }
                 },
                 unbind: {
                     close: function() {
                         (x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.off("scroll" + h, y.hide), P.off("scroll" + h, y.hide)), "hover" == x.on && q && (s.off("touchstart" + h), q = !1), "click" == x.on && x.closable && (y.verbose("Removing close event from document"), s.off("click" + h))
                     }
                 },
                 has: {
                     popup: function() {
                         return n && n.length > 0
                     }
                 },
                 is: {
                     offstage: function(t, n) {
                         var i = [];
                         return e.each(t, function(e, t) {
                             t < -x.jitter && (y.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                         }), i.length > 0 ? !0 : !1
                     },
                     active: function() {
                         return E.hasClass(w.active)
                     },
                     animating: function() {
                         return n !== i && n.hasClass(w.animating)
                     },
                     fluid: function() {
                         return n !== i && n.hasClass(w.fluid)
                     },
                     visible: function() {
                         return n !== i && n.hasClass(w.visible)
                     },
                     dropdown: function() {
                         return E.hasClass(w.dropdown)
                     },
                     hidden: function() {
                         return !y.is.visible()
                     },
                     rtl: function() {
                         return "rtl" == E.css("direction")
                     }
                 },
                 reset: function() {
                     y.remove.visible(), x.preserve ? e.fn.transition !== i && n.transition("remove transition") : y.removePopup()
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, x, t);
                     else {
                         if (n === i) return x[t];
                         x[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, y, t);
                     else {
                         if (n === i) return y[t];
                         y[t] = n
                     }
                 },
                 debug: function() {
                     x.debug && (x.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), y.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     x.verbose && x.debug && (x.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), y.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     y.error = Function.prototype.bind.call(console.error, console, x.name + ":"), y.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         x.performance && (t = (new Date).getTime(), i = m || t, n = t - i, m = t, f.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: j,
                             "Execution Time": n
                         })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500)
                     },
                     display: function() {
                         var t = x.name + ":",
                             n = 0;
                         m = !1, clearTimeout(y.performance.timer), e.each(f, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = z;
                     return n = n || v, o = j || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, p ? (z === i && y.initialize(), y.invoke(g)) : (z !== i && z.invoke("destroy"), y.initialize())
         }), a !== i ? a : this
     }, e.fn.popup.settings = {
         name: "Popup",
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "popup",
         onCreate: function() {},
         onRemove: function() {},
         onShow: function() {},
         onVisible: function() {},
         onHide: function() {},
         onUnplaceable: function() {},
         onHidden: function() {},
         on: "hover",
         addTouchEvents: !0,
         position: "top left",
         variation: "",
         movePopup: !0,
         target: !1,
         popup: !1,
         inline: !1,
         preserve: !1,
         hoverable: !1,
         content: !1,
         html: !1,
         title: !1,
         closable: !0,
         hideOnScroll: "auto",
         exclusive: !1,
         context: "body",
         prefer: "opposite",
         lastResort: !1,
         delay: {
             show: 50,
             hide: 70
         },
         setFluidWidth: !0,
         duration: 200,
         transition: "scale",
         distanceAway: 0,
         jitter: 2,
         offset: 0,
         maxSearchDepth: 15,
         error: {
             invalidPosition: "The position you specified is not a valid position",
             cannotPlace: "Popup does not fit within the boundaries of the viewport",
             method: "The method you called is not defined.",
             noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
             notFound: "The target or popup you specified does not exist on the page"
         },
         metadata: {
             activator: "activator",
             content: "content",
             html: "html",
             offset: "offset",
             position: "position",
             title: "title",
             variation: "variation"
         },
         className: {
             active: "active",
             animating: "animating",
             dropdown: "dropdown",
             fluid: "fluid",
             loading: "loading",
             popup: "ui popup",
             position: "top left center bottom right",
             visible: "visible"
         },
         selector: {
             popup: ".ui.popup"
         },
         templates: {
             escape: function(e) {
                 var t = /[&<>"'`]/g,
                     n = /[&<>"'`]/,
                     i = {
                         "&": "&amp;",
                         "<": "&lt;",
                         ">": "&gt;",
                         '"': "&quot;",
                         "'": "&#x27;",
                         "`": "&#x60;"
                     },
                     o = function(e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             },
             popup: function(t) {
                 var n = "",
                     o = e.fn.popup.settings.templates.escape;
                 return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.progress = function(t) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
                 g = f.className,
                 p = f.metadata,
                 v = f.namespace,
                 h = f.selector,
                 b = f.error,
                 y = "." + v,
                 x = "module-" + v,
                 C = e(this),
                 w = e(this).find(h.bar),
                 k = e(this).find(h.progress),
                 S = e(this).find(h.label),
                 T = this,
                 A = C.data(x),
                 R = !1;
             m = {
                 initialize: function() {
                     m.debug("Initializing progress bar", f), m.set.duration(), m.set.transitionEvent(), m.read.metadata(), m.read.settings(), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of progress", m), A = m, C.data(x, m)
                 },
                 destroy: function() {
                     m.verbose("Destroying previous progress for", C), clearInterval(A.interval), m.remove.state(), C.removeData(x), A = i
                 },
                 reset: function() {
                     m.set.percent(0), m.set.value(0)
                 },
                 complete: function() {
                     (m.percent === i || m.percent < 100) && m.set.percent(100)
                 },
                 read: {
                     metadata: function() {
                         var e = {
                             percent: C.data(p.percent),
                             total: C.data(p.total),
                             value: C.data(p.value)
                         };
                         e.percent && (m.debug("Current percent value set from metadata", e.percent), m.set.percent(e.percent)), e.total && (m.debug("Total value set from metadata", e.total), m.set.total(e.total)), e.value && (m.debug("Current value set from metadata", e.value), m.set.value(e.value), m.set.progress(e.value))
                     },
                     settings: function() {
                         f.total !== !1 && (m.debug("Current total set in settings", f.total), m.set.total(f.total)), f.value !== !1 && (m.debug("Current value set in settings", f.value), m.set.value(f.value), m.set.progress(m.value)), f.percent !== !1 && (m.debug("Current percent set in settings", f.percent), m.set.percent(f.percent))
                     }
                 },
                 increment: function(e) {
                     var t, n, i;
                     m.has.total() ? (n = m.get.value(), e = e || 1, i = n + e, t = m.get.total(), m.debug("Incrementing value", n, i, t), i > t && (m.debug("Value cannot increment above total", t), i = t)) : (n = m.get.percent(), e = e || m.get.randomValue(), i = n + e, t = 100, m.debug("Incrementing percentage by", n, i), i > t && (m.debug("Value cannot increment above 100 percent"), i = t)), m.set.progress(i)
                 },
                 decrement: function(e) {
                     var t, n, i = m.get.total();
                     i ? (t = m.get.value(), e = e || 1, n = t - e, m.debug("Decrementing value by", e, t)) : (t = m.get.percent(), e = e || m.get.randomValue(), n = t - e, m.debug("Decrementing percentage by", e, t)), 0 > n && (m.debug("Value cannot decrement below 0"), n = 0), m.set.progress(n)
                 },
                 has: {
                     total: function() {
                         return m.get.total() !== !1
                     }
                 },
                 get: {
                     text: function(e) {
                         var t = m.value || 0,
                             n = m.total || 0,
                             i = R ? m.get.displayPercent() : m.percent || 0,
                             o = m.total > 0 ? n - t : 100 - i;
                         return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), m.debug("Adding variables to progress bar text", e), e
                     },
                     randomValue: function() {
                         return m.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min)
                     },
                     numericValue: function(e) {
                         return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") ? +e.replace(/[^\d.]/g, "") : !1 : e
                     },
                     transitionEnd: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     displayPercent: function() {
                         var e = w.width(),
                             t = C.width(),
                             n = parseInt(w.css("min-width"), 10),
                             i = e > n ? e / t * 100 : m.percent;
                         return f.precision > 0 ? Math.round(10 * i * f.precision) / (10 * f.precision) : Math.round(i)
                     },
                     percent: function() {
                         return m.percent || 0
                     },
                     value: function() {
                         return m.value || 0
                     },
                     total: function() {
                         return m.total || !1
                     }
                 },
                 is: {
                     success: function() {
                         return C.hasClass(g.success)
                     },
                     warning: function() {
                         return C.hasClass(g.warning)
                     },
                     error: function() {
                         return C.hasClass(g.error)
                     },
                     active: function() {
                         return C.hasClass(g.active)
                     },
                     visible: function() {
                         return C.is(":visible")
                     }
                 },
                 remove: {
                     state: function() {
                         m.verbose("Removing stored state"), delete m.total, delete m.percent, delete m.value
                     },
                     active: function() {
                         m.verbose("Removing active state"), C.removeClass(g.active)
                     },
                     success: function() {
                         m.verbose("Removing success state"), C.removeClass(g.success)
                     },
                     warning: function() {
                         m.verbose("Removing warning state"), C.removeClass(g.warning)
                     },
                     error: function() {
                         m.verbose("Removing error state"), C.removeClass(g.error)
                     }
                 },
                 set: {
                     barWidth: function(e) {
                         e > 100 ? m.error(b.tooHigh, e) : 0 > e ? m.error(b.tooLow, e) : (w.css("width", e + "%"), C.attr("data-percent", parseInt(e, 10)))
                     },
                     duration: function(e) {
                         e = e || f.duration, e = "number" == typeof e ? e + "ms" : e, m.verbose("Setting progress bar transition duration", e), w.css({
                             "transition-duration": e
                         })
                     },
                     percent: function(e) {
                         e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(10 * e * f.precision) / (10 * f.precision) : Math.round(e), m.percent = e, m.has.total() || (m.value = f.precision > 0 ? Math.round(e / 100 * m.total * 10 * f.precision) / (10 * f.precision) : Math.round(e / 100 * m.total * 10) / 10, f.limitValues && (m.value = m.value > 100 ? 100 : m.value < 0 ? 0 : m.value)), m.set.barWidth(e), m.set.labelInterval(), m.set.labels(), f.onChange.call(T, e, m.value, m.total)
                     },
                     labelInterval: function() {
                         var e = function() {
                             m.verbose("Bar finished animating, removing continuous label updates"), clearInterval(m.interval), R = !1, m.set.labels()
                         };
                         clearInterval(m.interval), w.one(a + y, e), m.timer = setTimeout(e, f.duration + 100), R = !0, m.interval = setInterval(m.set.labels, f.framerate)
                     },
                     labels: function() {
                         m.verbose("Setting both bar progress and outer label text"), m.set.barLabel(), m.set.state()
                     },
                     label: function(e) {
                         e = e || "", e && (e = m.get.text(e), m.debug("Setting label to text", e), S.text(e))
                     },
                     state: function(e) {
                         e = e !== i ? e : m.percent, 100 === e ? !f.autoSuccess || m.is.warning() || m.is.error() ? (m.verbose("Reached 100% removing active state"), m.remove.active()) : (m.set.success(), m.debug("Automatically triggering success at 100%")) : e > 0 ? (m.verbose("Adjusting active progress bar label", e), m.set.active()) : (m.remove.active(), m.set.label(f.text.active))
                     },
                     barLabel: function(e) {
                         e !== i ? k.text(m.get.text(e)) : "ratio" == f.label && m.total ? (m.debug("Adding ratio to bar label"), k.text(m.get.text(f.text.ratio))) : "percent" == f.label && (m.debug("Adding percentage to bar label"), k.text(m.get.text(f.text.percent)))
                     },
                     active: function(e) {
                         e = e || f.text.active, m.debug("Setting active state"), f.showActivity && !m.is.active() && C.addClass(g.active), m.remove.warning(), m.remove.error(), m.remove.success(), e && m.set.label(e), f.onActive.call(T, m.value, m.total)
                     },
                     success: function(e) {
                         e = e || f.text.success, m.debug("Setting success state"), C.addClass(g.success), m.remove.active(), m.remove.warning(), m.remove.error(), m.complete(), e && m.set.label(e), f.onSuccess.call(T, m.total)
                     },
                     warning: function(e) {
                         e = e || f.text.warning, m.debug("Setting warning state"), C.addClass(g.warning), m.remove.active(), m.remove.success(), m.remove.error(), m.complete(), e && m.set.label(e), f.onWarning.call(T, m.value, m.total)
                     },
                     error: function(e) {
                         e = e || f.text.error, m.debug("Setting error state"), C.addClass(g.error), m.remove.active(), m.remove.success(), m.remove.warning(), m.complete(), e && m.set.label(e), f.onError.call(T, m.value, m.total)
                     },
                     transitionEvent: function() {
                         a = m.get.transitionEnd()
                     },
                     total: function(e) {
                         m.total = e
                     },
                     value: function(e) {
                         m.value = e
                     },
                     progress: function(e) {
                         var t, n = m.get.numericValue(e);
                         n === !1 && m.error(b.nonNumeric, e), m.has.total() ? (m.set.value(n), t = n / m.total * 100, m.debug("Calculating percent complete from total", t), m.set.percent(t)) : (t = n, m.debug("Setting value to exact percentage value", t), m.set.percent(t))
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: T,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = A;
                     return n = n || d, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (A === i && m.initialize(), m.invoke(l)) : (A !== i && A.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.progress.settings = {
         name: "Progress",
         namespace: "progress",
         debug: !1,
         verbose: !1,
         performance: !0,
         random: {
             min: 2,
             max: 5
         },
         duration: 300,
         autoSuccess: !0,
         showActivity: !0,
         limitValues: !0,
         label: "percent",
         precision: 0,
         framerate: 1e3 / 30,
         percent: !1,
         total: !1,
         value: !1,
         onChange: function(e, t, n) {},
         onSuccess: function(e) {},
         onActive: function(e, t) {},
         onError: function(e, t) {},
         onWarning: function(e, t) {},
         error: {
             method: "The method you called is not defined.",
             nonNumeric: "Progress value is non numeric",
             tooHigh: "Value specified is above 100%",
             tooLow: "Value specified is below 0%"
         },
         regExp: {
             variable: /\{\$*[A-z0-9]+\}/g
         },
         metadata: {
             percent: "percent",
             total: "total",
             value: "value"
         },
         selector: {
             bar: "> .bar",
             label: "> .label",
             progress: ".bar > .progress"
         },
         text: {
             active: !1,
             error: !1,
             success: !1,
             warning: !1,
             percent: "{percent}%",
             ratio: "{value} of {total}"
         },
         className: {
             active: "active",
             error: "error",
             success: "success",
             warning: "warning"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.rating = function(t) {
         var n, o = e(this),
             a = o.selector || "",
             r = (new Date).getTime(),
             s = [],
             c = arguments[0],
             l = "string" == typeof c,
             u = [].slice.call(arguments, 1);
         return o.each(function() {
             var d, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                 f = m.namespace,
                 g = m.className,
                 p = m.metadata,
                 v = m.selector,
                 h = (m.error, "." + f),
                 b = "module-" + f,
                 y = this,
                 x = e(this).data(b),
                 C = e(this),
                 w = C.find(v.icon);
             d = {
                 initialize: function() {
                     d.verbose("Initializing rating module", m), 0 === w.length && d.setup.layout(), m.interactive ? d.enable() : d.disable(), d.set.rating(d.get.initialRating()), d.instantiate()
                 },
                 instantiate: function() {
                     d.verbose("Instantiating module", m), x = d, C.data(b, d)
                 },
                 destroy: function() {
                     d.verbose("Destroying previous instance", x), d.remove.events(), C.removeData(b)
                 },
                 refresh: function() {
                     w = C.find(v.icon)
                 },
                 setup: {
                     layout: function() {
                         var t = d.get.maxRating(),
                             n = e.fn.rating.settings.templates.icon(t);
                         d.debug("Generating icon html dynamically"), C.html(n), d.refresh()
                     }
                 },
                 event: {
                     mouseenter: function() {
                         var t = e(this);
                         t.nextAll().removeClass(g.selected), C.addClass(g.selected), t.addClass(g.selected).prevAll().addClass(g.selected)
                     },
                     mouseleave: function() {
                         C.removeClass(g.selected), w.removeClass(g.selected)
                     },
                     click: function() {
                         var t = e(this),
                             n = d.get.rating(),
                             i = w.index(t) + 1,
                             o = "auto" == m.clearable ? 1 === w.length : m.clearable;
                         o && n == i ? d.clearRating() : d.set.rating(i)
                     }
                 },
                 clearRating: function() {
                     d.debug("Clearing current rating"), d.set.rating(0)
                 },
                 bind: {
                     events: function() {
                         d.verbose("Binding events"), C.on("mouseenter" + h, v.icon, d.event.mouseenter).on("mouseleave" + h, v.icon, d.event.mouseleave).on("click" + h, v.icon, d.event.click)
                     }
                 },
                 remove: {
                     events: function() {
                         d.verbose("Removing events"), C.off(h)
                     }
                 },
                 enable: function() {
                     d.debug("Setting rating to interactive mode"), d.bind.events(), C.removeClass(g.disabled)
                 },
                 disable: function() {
                     d.debug("Setting rating to read-only mode"), d.remove.events(), C.addClass(g.disabled)
                 },
                 get: {
                     initialRating: function() {
                         return C.data(p.rating) !== i ? (C.removeData(p.rating), C.data(p.rating)) : m.initialRating
                     },
                     maxRating: function() {
                         return C.data(p.maxRating) !== i ? (C.removeData(p.maxRating), C.data(p.maxRating)) : m.maxRating
                     },
                     rating: function() {
                         var e = w.filter("." + g.active).length;
                         return d.verbose("Current rating retrieved", e), e
                     }
                 },
                 set: {
                     rating: function(e) {
                         var t = e - 1 >= 0 ? e - 1 : 0,
                             n = w.eq(t);
                         C.removeClass(g.selected), w.removeClass(g.selected).removeClass(g.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(g.active)), m.onRate.call(y, e)
                     }
                 },
                 setting: function(t, n) {
                     if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, d, t);
                     else {
                         if (n === i) return d[t];
                         d[t] = n
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), d.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), d.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     d.error = Function.prototype.bind.call(console.error, console, m.name + ":"), d.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: y,
                             "Execution Time": n
                         })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500)
                     },
                     display: function() {
                         var t = m.name + ":",
                             n = 0;
                         r = !1, clearTimeout(d.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, o, a) {
                     var r, s, c, l = x;
                     return o = o || u, a = y || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, o) : s !== i && (c = s), e.isArray(n) ? n.push(c) : n !== i ? n = [n, c] : c !== i && (n = c), s
                 }
             }, l ? (x === i && d.initialize(), d.invoke(c)) : (x !== i && x.invoke("destroy"), d.initialize())
         }), n !== i ? n : this
     }, e.fn.rating.settings = {
         name: "Rating",
         namespace: "rating",
         debug: !1,
         verbose: !1,
         performance: !0,
         initialRating: 0,
         interactive: !0,
         maxRating: 4,
         clearable: "auto",
         onRate: function(e) {},
         error: {
             method: "The method you called is not defined",
             noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
         },
         metadata: {
             rating: "rating",
             maxRating: "maxRating"
         },
         className: {
             active: "active",
             disabled: "disabled",
             selected: "selected",
             loading: "loading"
         },
         selector: {
             icon: ".icon"
         },
         templates: {
             icon: function(e) {
                 for (var t = 1, n = ""; e >= t;) n += '<i class="icon"></i>', t++;
                 return n
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.search = function(o) {
         var a, r = e(this),
             s = r.selector || "",
             c = (new Date).getTime(),
             l = [],
             u = arguments[0],
             d = "string" == typeof u,
             m = [].slice.call(arguments, 1);
         return e(this).each(function() {
             var f, g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
                 p = g.className,
                 v = g.metadata,
                 h = g.regExp,
                 b = g.fields,
                 y = g.selector,
                 x = g.error,
                 C = g.namespace,
                 w = "." + C,
                 k = C + "-module",
                 S = e(this),
                 T = S.find(y.prompt),
                 A = S.find(y.searchButton),
                 R = S.find(y.results),
                 E = (S.find(y.result), S.find(y.category), this),
                 P = S.data(k);
             f = {
                 initialize: function() {
                     f.verbose("Initializing module"), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate()
                 },
                 instantiate: function() {
                     f.verbose("Storing instance of module", f), P = f, S.data(k, f)
                 },
                 destroy: function() {
                     f.verbose("Destroying instance"), S.off(w).removeData(k)
                 },
                 bind: {
                     events: function() {
                         f.verbose("Binding events to search"), g.automatic && (S.on(f.get.inputEvent() + w, y.prompt, f.event.input), T.attr("autocomplete", "off")), S.on("focus" + w, y.prompt, f.event.focus).on("blur" + w, y.prompt, f.event.blur).on("keydown" + w, y.prompt, f.handleKeyboard).on("click" + w, y.searchButton, f.query).on("mousedown" + w, y.results, f.event.result.mousedown).on("mouseup" + w, y.results, f.event.result.mouseup).on("click" + w, y.result, f.event.result.click)
                     }
                 },
                 determine: {
                     searchFields: function() {
                         o && o.searchFields !== i && (g.searchFields = o.searchFields)
                     }
                 },
                 event: {
                     input: function() {
                         clearTimeout(f.timer), f.timer = setTimeout(f.query, g.searchDelay)
                     },
                     focus: function() {
                         f.set.focus(), f.has.minimumCharacters() && (f.query(), f.can.show() && f.showResults())
                     },
                     blur: function(e) {
                         var t = n.activeElement === this,
                             i = function() {
                                 f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, g.hideDelay)
                             };
                         t || (f.resultsClicked ? (f.debug("Determining if user action caused search to close"), S.one("click", y.results, function(e) {
                             f.is.animating() || f.is.hidden() || i()
                         })) : (f.debug("Input blurred without user action, closing results"), i()))
                     },
                     result: {
                         mousedown: function() {
                             f.resultsClicked = !0
                         },
                         mouseup: function() {
                             f.resultsClicked = !1
                         },
                         click: function(n) {
                             f.debug("Search result selected");
                             var i = e(this),
                                 o = i.find(y.title).eq(0),
                                 a = i.find("a[href]").eq(0),
                                 r = a.attr("href") || !1,
                                 s = a.attr("target") || !1,
                                 c = (o.html(), o.length > 0 ? o.text() : !1),
                                 l = f.get.results(),
                                 u = i.data(v.result) || f.get.result(c, l);
                             return e.isFunction(g.onSelect) && g.onSelect.call(E, u, l) === !1 ? void f.debug("Custom onSelect callback cancelled default select action") : (f.hideResults(), c && f.set.value(c), void(r && (f.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r)))
                         }
                     }
                 },
                 handleKeyboard: function(e) {
                     var t, n = S.find(y.result),
                         i = S.find(y.category),
                         o = n.index(n.filter("." + p.active)),
                         a = n.length,
                         r = e.which,
                         s = {
                             backspace: 8,
                             enter: 13,
                             escape: 27,
                             upArrow: 38,
                             downArrow: 40
                         };
                     if (r == s.escape && (f.verbose("Escape key pressed, blurring search field"), f.trigger.blur()), f.is.visible())
                         if (r == s.enter) {
                             if (f.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return f.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1
                         } else r == s.upArrow ? (f.verbose("Up key pressed, changing active result"), t = 0 > o - 1 ? o : o - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : r == s.downArrow && (f.verbose("Down key pressed, changing active result"), t = o + 1 >= a ? o : o + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
                     else r == s.enter && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), T.one("keyup", f.remove.buttonFocus))
                 },
                 setup: {
                     api: function() {
                         var e = {
                             debug: g.debug,
                             on: !1,
                             cache: "local",
                             action: "search",
                             onError: f.error
                         };
                         f.verbose("First request, initializing API"), S.api(e)
                     }
                 },
                 can: {
                     useAPI: function() {
                         return e.fn.api !== i
                     },
                     show: function() {
                         return f.is.focused() && !f.is.visible() && !f.is.empty()
                     },
                     transition: function() {
                         return g.transition && e.fn.transition !== i && S.transition("is supported")
                     }
                 },
                 is: {
                     animating: function() {
                         return R.hasClass(p.animating)
                     },
                     hidden: function() {
                         return R.hasClass(p.hidden)
                     },
                     empty: function() {
                         return "" === R.html()
                     },
                     visible: function() {
                         return R.filter(":visible").length > 0
                     },
                     focused: function() {
                         return T.filter(":focus").length > 0
                     }
                 },
                 trigger: {
                     blur: function() {
                         var e = n.createEvent("HTMLEvents"),
                             t = T[0];
                         t && (f.verbose("Triggering native blur event"), e.initEvent("blur", !1, !1), t.dispatchEvent(e))
                     }
                 },
                 get: {
                     inputEvent: function() {
                         var e = T[0],
                             t = e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
                         return t
                     },
                     value: function() {
                         return T.val()
                     },
                     results: function() {
                         var e = S.data(v.results);
                         return e
                     },
                     result: function(t, n) {
                         var o = ["title", "id"],
                             a = !1;
                         return t = t !== i ? t : f.get.value(), n = n !== i ? n : f.get.results(), "category" === g.type ? (f.debug("Finding result that matches", t), e.each(n, function(n, i) {
                             return e.isArray(i.results) && (a = f.search.object(t, i.results, o)[0]) ? !1 : void 0
                         })) : (f.debug("Finding result in results object", t), a = f.search.object(t, n, o)[0]), a || !1
                     }
                 },
                 set: {
                     focus: function() {
                         S.addClass(p.focus)
                     },
                     loading: function() {
                         S.addClass(p.loading)
                     },
                     value: function(e) {
                         f.verbose("Setting search input value", e), T.val(e)
                     },
                     type: function(e) {
                         e = e || g.type, "category" == g.type && S.addClass(g.type)
                     },
                     buttonPressed: function() {
                         A.addClass(p.pressed)
                     }
                 },
                 remove: {
                     loading: function() {
                         S.removeClass(p.loading)
                     },
                     focus: function() {
                         S.removeClass(p.focus)
                     },
                     buttonPressed: function() {
                         A.removeClass(p.pressed)
                     }
                 },
                 query: function() {
                     var t = f.get.value(),
                         n = f.read.cache(t);
                     f.has.minimumCharacters() ? (n ? (f.debug("Reading result from cache", t), f.save.results(n.results), f.addResults(n.html), f.inject.id(n.results)) : (f.debug("Querying for", t), e.isPlainObject(g.source) || e.isArray(g.source) ? f.search.local(t) : f.can.useAPI() ? f.search.remote(t) : f.error(x.source)), g.onSearchQuery.call(E, t)) : f.hideResults()
                 },
                 search: {
                     local: function(e) {
                         var t, n = f.search.object(e, g.content);
                         f.set.loading(), f.save.results(n), f.debug("Returned local search results", n), t = f.generateResults({
                             results: n
                         }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, {
                             html: t,
                             results: n
                         })
                     },
                     remote: function(t) {
                         var n = {
                             onSuccess: function(e) {
                                 f.parse.response.call(E, e, t)
                             },
                             onFailure: function() {
                                 f.displayMessage(x.serverError)
                             },
                             urlData: {
                                 query: t
                             }
                         };
                         S.api("get request") || f.setup.api(), e.extend(!0, n, g.apiSettings), f.debug("Executing search", n), f.cancel.query(), S.api("setting", n).api("query")
                     },
                     object: function(t, n, o) {
                         var a = [],
                             r = [],
                             s = t.toString().replace(h.escape, "\\$&"),
                             c = new RegExp(h.beginsWith + s, "i"),
                             l = function(t, n) {
                                 var i = -1 == e.inArray(n, a),
                                     o = -1 == e.inArray(n, r);
                                 i && o && t.push(n)
                             };
                         return n = n || g.source, o = o !== i ? o : g.searchFields, e.isArray(o) || (o = [o]), n === i || n === !1 ? (f.error(x.source), []) : (e.each(o, function(i, o) {
                             e.each(n, function(e, n) {
                                 var i = "string" == typeof n[o];
                                 i && (-1 !== n[o].search(c) ? l(a, n) : g.searchFullText && f.fuzzySearch(t, n[o]) && l(r, n))
                             })
                         }), e.merge(a, r))
                     }
                 },
                 fuzzySearch: function(e, t) {
                     var n = t.length,
                         i = e.length;
                     if ("string" != typeof e) return !1;
                     if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                     if (i === n) return e === t;
                     e: for (var o = 0, a = 0; i > o; o++) {
                         for (var r = e.charCodeAt(o); n > a;)
                             if (t.charCodeAt(a++) === r) continue e;
                         return !1
                     }
                     return !0
                 },
                 parse: {
                     response: function(e, t) {
                         var n = f.generateResults(e);
                         f.verbose("Parsing server response", e), e !== i && t !== i && e[b.results] !== i && (f.addResults(n), f.inject.id(e[b.results]), f.write.cache(t, {
                             html: n,
                             results: e[b.results]
                         }), f.save.results(e[b.results]))
                     }
                 },
                 cancel: {
                     query: function() {
                         f.can.useAPI() && S.api("abort")
                     }
                 },
                 has: {
                     minimumCharacters: function() {
                         var e = f.get.value(),
                             t = e.length;
                         return t >= g.minCharacters
                     }
                 },
                 clear: {
                     cache: function(e) {
                         var t = S.data(v.cache);
                         e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], S.data(v.cache, t)) : (f.debug("Clearing cache", e), S.removeData(v.cache))
                     }
                 },
                 read: {
                     cache: function(e) {
                         var t = S.data(v.cache);
                         return g.cache ? (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i ? t[e] : !1) : !1
                     }
                 },
                 create: {
                     id: function(e, t) {
                         var n, o, a = e + 1;
                         return t !== i ? (n = String.fromCharCode(97 + t), o = n + a, f.verbose("Creating category result id", o)) : (o = a, f.verbose("Creating result id", o)), o
                     },
                     results: function() {
                         0 === R.length && (R = e("<div />").addClass(p.results).appendTo(S))
                     }
                 },
                 inject: {
                     result: function(e, t, n) {
                         f.verbose("Injecting result into results");
                         var o = n !== i ? R.children().eq(n).children(y.result).eq(t) : R.children(y.result).eq(t);
                         f.verbose("Injecting results metadata", o), o.data(v.result, e)
                     },
                     id: function(t) {
                         f.debug("Injecting unique ids into results");
                         var n = 0,
                             o = 0;
                         return "category" === g.type ? e.each(t, function(t, a) {
                             o = 0, e.each(a.results, function(e, t) {
                                 var r = a.results[e];
                                 r.id === i && (r.id = f.create.id(o, n)), f.inject.result(r, o, n), o++
                             }), n++
                         }) : e.each(t, function(e, n) {
                             var a = t[e];
                             a.id === i && (a.id = f.create.id(o)), f.inject.result(a, o), o++
                         }), t
                     }
                 },
                 save: {
                     results: function(e) {
                         f.verbose("Saving current search results to metadata", e), S.data(v.results, e)
                     }
                 },
                 write: {
                     cache: function(e, t) {
                         var n = S.data(v.cache) !== i ? S.data(v.cache) : {};
                         g.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, S.data(v.cache, n))
                     }
                 },
                 addResults: function(t) {
                     return e.isFunction(g.onResultsAdd) && g.onResultsAdd.call(R, t) === !1 ? (f.debug("onResultsAdd callback cancelled default action"), !1) : (R.html(t), void(f.can.show() && f.showResults()))
                 },
                 showResults: function() {
                     f.is.visible() || (f.can.transition() ? (f.debug("Showing results with css animations"), R.transition({
                         animation: g.transition + " in",
                         debug: g.debug,
                         verbose: g.verbose,
                         duration: g.duration,
                         queue: !0
                     })) : (f.debug("Showing results with javascript"), R.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(R))
                 },
                 hideResults: function() {
                     f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), R.transition({
                         animation: g.transition + " out",
                         debug: g.debug,
                         verbose: g.verbose,
                         duration: g.duration,
                         queue: !0
                     })) : (f.debug("Hiding results with javascript"), R.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(R))
                 },
                 generateResults: function(t) {
                     f.debug("Generating html from response", t);
                     var n = g.templates[g.type],
                         i = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
                         o = e.isArray(t[b.results]) && t[b.results].length > 0,
                         a = "";
                     return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && f.error(x.maxResults) : t[b.results] = t[b.results].slice(0, g.maxResults)),
                         e.isFunction(n) ? a = n(t, b) : f.error(x.noTemplate, !1)) : a = f.displayMessage(x.noResults, "empty"), g.onResults.call(E, t), a
                 },
                 displayMessage: function(e, t) {
                     return t = t || "standard", f.debug("Displaying message", e, t), f.addResults(g.templates.message(e, t)), g.templates.message(e, t)
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function() {
                     g.debug && (g.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     g.verbose && g.debug && (g.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     f.error = Function.prototype.bind.call(console.error, console, g.name + ":"), f.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: E,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function() {
                         var t = g.name + ":",
                             n = 0;
                         c = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = P;
                     return n = n || m, o = E || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (P === i && f.initialize(), f.invoke(u)) : (P !== i && P.invoke("destroy"), f.initialize())
         }), a !== i ? a : this
     }, e.fn.search.settings = {
         name: "Search",
         namespace: "search",
         debug: !1,
         verbose: !1,
         performance: !0,
         type: "standard",
         minCharacters: 1,
         apiSettings: !1,
         source: !1,
         searchFields: ["title", "description"],
         displayField: "",
         searchFullText: !0,
         automatic: !0,
         hideDelay: 0,
         searchDelay: 200,
         maxResults: 7,
         cache: !0,
         transition: "scale",
         duration: 200,
         easing: "easeOutExpo",
         onSelect: !1,
         onResultsAdd: !1,
         onSearchQuery: function(e) {},
         onResults: function(e) {},
         onResultsOpen: function() {},
         onResultsClose: function() {},
         className: {
             animating: "animating",
             active: "active",
             empty: "empty",
             focus: "focus",
             hidden: "hidden",
             loading: "loading",
             results: "results",
             pressed: "down"
         },
         error: {
             source: "Cannot search. No source used, and Semantic API module was not included",
             noResults: "Your search returned no results",
             logging: "Error in debug logging, exiting.",
             noEndpoint: "No search endpoint was specified",
             noTemplate: "A valid template name was not specified.",
             serverError: "There was an issue querying the server.",
             maxResults: "Results must be an array to use maxResults setting",
             method: "The method you called is not defined."
         },
         metadata: {
             cache: "cache",
             results: "results",
             result: "result"
         },
         regExp: {
             escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
             beginsWith: "(?:s|^)"
         },
         fields: {
             categories: "results",
             categoryName: "name",
             categoryResults: "results",
             description: "description",
             image: "image",
             price: "price",
             results: "results",
             title: "title",
             url: "url",
             action: "action",
             actionText: "text",
             actionURL: "url"
         },
         selector: {
             prompt: ".prompt",
             searchButton: ".search.button",
             results: ".results",
             category: ".category",
             result: ".result",
             title: ".title, .name"
         },
         templates: {
             escape: function(e) {
                 var t = /[&<>"'`]/g,
                     n = /[&<>"'`]/,
                     i = {
                         "&": "&amp;",
                         "<": "&lt;",
                         ">": "&gt;",
                         '"': "&quot;",
                         "'": "&#x27;",
                         "`": "&#x60;"
                     },
                     o = function(e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             },
             message: function(e, t) {
                 var n = "";
                 return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
             },
             category: function(t, n) {
                 {
                     var o = "";
                     e.fn.search.settings.templates.escape
                 }
                 return t[n.categoryResults] !== i ? (e.each(t[n.categoryResults], function(t, a) {
                     a[n.results] !== i && a.results.length > 0 && (o += '<div class="category">', a[n.categoryName] !== i && (o += '<div class="name">' + a[n.categoryName] + "</div>"), e.each(a.results, function(e, t) {
                         o += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                     }), o += "</div>")
                 }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o) : !1
             },
             standard: function(t, n) {
                 var o = "";
                 return t[n.results] !== i ? (e.each(t[n.results], function(e, t) {
                     o += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                 }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o) : !1
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.shape = function(o) {
         var a, r = e(this),
             s = (e("body"), (new Date).getTime()),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1),
             m = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var t, f, g, p = r.selector || "",
                 v = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
                 h = v.namespace,
                 b = v.selector,
                 y = v.error,
                 x = v.className,
                 C = "." + h,
                 w = "module-" + h,
                 k = e(this),
                 S = k.find(b.sides),
                 T = k.find(b.side),
                 A = !1,
                 R = this,
                 E = k.data(w);
             g = {
                 initialize: function() {
                     g.verbose("Initializing module for", R), g.set.defaultSide(), g.instantiate()
                 },
                 instantiate: function() {
                     g.verbose("Storing instance of module", g), E = g, k.data(w, E)
                 },
                 destroy: function() {
                     g.verbose("Destroying previous module for", R), k.removeData(w).off(C)
                 },
                 refresh: function() {
                     g.verbose("Refreshing selector cache for", R), k = e(R), S = e(this).find(b.shape), T = e(this).find(b.side)
                 },
                 repaint: function() {
                     g.verbose("Forcing repaint event"); {
                         var e = S[0] || n.createElement("div");
                         e.offsetWidth
                     }
                 },
                 animate: function(e, n) {
                     g.verbose("Animating box with properties", e), n = n || function(e) {
                         g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active()
                     }, v.beforeChange.call(f[0]), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), k.addClass(x.animating), S.css(e).one(g.get.transitionEvent(), n), g.set.duration(v.duration), m(function() {
                         k.addClass(x.animating), t.addClass(x.hidden)
                     })) : n()
                 },
                 queue: function(e) {
                     g.debug("Queueing animation of", e), S.one(g.get.transitionEvent(), function() {
                         g.debug("Executing queued animation"), setTimeout(function() {
                             k.shape(e)
                         }, 0)
                     })
                 },
                 reset: function() {
                     g.verbose("Animating states reset"), k.removeClass(x.animating).attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style").removeClass(x.hidden), f.removeClass(x.animating).attr("style", "").removeAttr("style")
                 },
                 is: {
                     complete: function() {
                         return T.filter("." + x.active)[0] == f[0]
                     },
                     animating: function() {
                         return k.hasClass(x.animating)
                     }
                 },
                 set: {
                     defaultSide: function() {
                         t = k.find("." + v.className.active), f = t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", f)
                     },
                     duration: function(e) {
                         e = e || v.duration, e = "number" == typeof e ? e + "ms" : e, g.verbose("Setting animation duration", e), (v.duration || 0 === v.duration) && S.add(T).css({
                             "-webkit-transition-duration": e,
                             "-moz-transition-duration": e,
                             "-ms-transition-duration": e,
                             "-o-transition-duration": e,
                             "transition-duration": e
                         })
                     },
                     currentStageSize: function() {
                         var e = k.find("." + v.className.active),
                             t = e.outerWidth(!0),
                             n = e.outerHeight(!0);
                         k.css({
                             width: t,
                             height: n
                         })
                     },
                     stageSize: function() {
                         var e = k.clone().addClass(x.loading),
                             t = e.find("." + v.className.active),
                             n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                             i = {};
                         g.set.currentStageSize(), t.removeClass(x.active), n.addClass(x.active), e.insertAfter(k), i = {
                             width: n.outerWidth(!0),
                             height: n.outerHeight(!0)
                         }, e.remove(), k.css(i), g.verbose("Resizing stage to fit new content", i)
                     },
                     nextSide: function(e) {
                         A = e, f = T.filter(e), A = T.index(f), 0 === f.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", f)
                     },
                     active: function() {
                         g.verbose("Setting new side to active", f), T.removeClass(x.active), f.addClass(x.active), v.onChange.call(f[0]), g.set.defaultSide()
                     }
                 },
                 flip: {
                     up: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip up") : (g.debug("Flipping up", f), g.set.stageSize(), g.stage.above(), g.animate(g.get.transform.up()))) : void g.debug("Side already visible", f)
                     },
                     down: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip down") : (g.debug("Flipping down", f), g.set.stageSize(), g.stage.below(), g.animate(g.get.transform.down()))) : void g.debug("Side already visible", f)
                     },
                     left: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip left") : (g.debug("Flipping left", f), g.set.stageSize(), g.stage.left(), g.animate(g.get.transform.left()))) : void g.debug("Side already visible", f)
                     },
                     right: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip right") : (g.debug("Flipping right", f), g.set.stageSize(), g.stage.right(), g.animate(g.get.transform.right()))) : void g.debug("Side already visible", f)
                     },
                     over: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", f), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over()))) : void g.debug("Side already visible", f)
                     },
                     back: function() {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", f), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back()))) : void g.debug("Side already visible", f)
                     }
                 },
                 get: {
                     transform: {
                         up: function() {
                             var e = {
                                 y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2),
                                 z: -(t.outerHeight(!0) / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
                             }
                         },
                         down: function() {
                             var e = {
                                 y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2),
                                 z: -(t.outerHeight(!0) / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
                             }
                         },
                         left: function() {
                             var e = {
                                 x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2),
                                 z: -(t.outerWidth(!0) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
                             }
                         },
                         right: function() {
                             var e = {
                                 x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2),
                                 z: -(t.outerWidth(!0) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
                             }
                         },
                         over: function() {
                             var e = {
                                 x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(180deg)"
                             }
                         },
                         back: function() {
                             var e = {
                                 x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(-180deg)"
                             }
                         }
                     },
                     transitionEvent: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     nextSide: function() {
                         return t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first()
                     }
                 },
                 stage: {
                     above: function() {
                         var e = {
                             origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                             depth: {
                                 active: f.outerHeight(!0) / 2,
                                 next: t.outerHeight(!0) / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as above", f, e), S.css({
                             transform: "translateZ(-" + e.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             top: e.origin + "px",
                             transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     below: function() {
                         var e = {
                             origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                             depth: {
                                 active: f.outerHeight(!0) / 2,
                                 next: t.outerHeight(!0) / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as below", f, e), S.css({
                             transform: "translateZ(-" + e.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             top: e.origin + "px",
                             transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     left: function() {
                         var e = {
                                 active: t.outerWidth(!0),
                                 next: f.outerWidth(!0)
                             },
                             n = {
                                 origin: (e.active - e.next) / 2,
                                 depth: {
                                     active: e.next / 2,
                                     next: e.active / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as left", f, n), S.css({
                             transform: "translateZ(-" + n.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             left: n.origin + "px",
                             transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
                         })
                     },
                     right: function() {
                         var e = {
                                 active: t.outerWidth(!0),
                                 next: f.outerWidth(!0)
                             },
                             n = {
                                 origin: (e.active - e.next) / 2,
                                 depth: {
                                     active: e.next / 2,
                                     next: e.active / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as left", f, n), S.css({
                             transform: "translateZ(-" + n.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             left: n.origin + "px",
                             transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
                         })
                     },
                     behind: function() {
                         var e = {
                                 active: t.outerWidth(!0),
                                 next: f.outerWidth(!0)
                             },
                             n = {
                                 origin: (e.active - e.next) / 2,
                                 depth: {
                                     active: e.next / 2,
                                     next: e.active / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as behind", f, n), t.css({
                             transform: "rotateY(0deg)"
                         }), f.addClass(x.animating).css({
                             left: n.origin + "px",
                             transform: "rotateY(-180deg)"
                         })
                     }
                 },
                 setting: function(t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     v.debug && (v.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     v.verbose && v.debug && (v.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, v.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         v.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: R,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
                     },
                     display: function() {
                         var t = v.name + ":",
                             n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = E;
                     return n = n || d, o = R || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, u ? (E === i && g.initialize(), g.invoke(l)) : (E !== i && E.invoke("destroy"), g.initialize())
         }), a !== i ? a : this
     }, e.fn.shape.settings = {
         name: "Shape",
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "shape",
         beforeChange: function() {},
         onChange: function() {},
         allowRepeats: !1,
         duration: !1,
         error: {
             side: "You tried to switch to a side that does not exist.",
             method: "The method you called is not defined"
         },
         className: {
             animating: "animating",
             hidden: "hidden",
             loading: "loading",
             active: "active"
         },
         selector: {
             sides: ".sides",
             side: ".side"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.sidebar = function(o) {
         var a, r = e(this),
             s = e(t),
             c = e(n),
             l = e("html"),
             u = e("head"),
             d = r.selector || "",
             m = (new Date).getTime(),
             f = [],
             g = arguments[0],
             p = "string" == typeof g,
             v = [].slice.call(arguments, 1),
             h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var r, b, y, x, C, w, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
                 S = k.selector,
                 T = k.className,
                 A = k.namespace,
                 R = k.regExp,
                 E = k.error,
                 P = "." + A,
                 F = "module-" + A,
                 D = e(this),
                 O = e(k.context),
                 q = D.children(S.sidebar),
                 j = O.children(S.fixed),
                 z = O.children(S.pusher),
                 I = this,
                 L = D.data(F);
             w = {
                 initialize: function() {
                     w.debug("Initializing sidebar", o), w.create.id(), C = w.get.transitionEvent(), w.is.ios() && w.set.ios(), k.delaySetup ? h(w.setup.layout) : w.setup.layout(), h(function() {
                         w.setup.cache()
                     }), w.instantiate()
                 },
                 instantiate: function() {
                     w.verbose("Storing instance of module", w), L = w, D.data(F, w)
                 },
                 create: {
                     id: function() {
                         y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y)
                     }
                 },
                 destroy: function() {
                     w.verbose("Destroying previous module for", D), D.off(P).removeData(F), w.is.ios() && w.remove.ios(), O.off(b), s.off(b), c.off(b)
                 },
                 event: {
                     clickaway: function(e) {
                         var t = z.find(e.target).length > 0 || z.is(e.target),
                             n = O.is(e.target);
                         t && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide())
                     },
                     touch: function(e) {},
                     containScroll: function(e) {
                         I.scrollTop <= 0 && (I.scrollTop = 1), I.scrollTop + I.offsetHeight >= I.scrollHeight && (I.scrollTop = I.scrollHeight - I.offsetHeight - 1)
                     },
                     scroll: function(t) {
                         0 === e(t.target).closest(S.sidebar).length && t.preventDefault()
                     }
                 },
                 bind: {
                     clickaway: function() {
                         w.verbose("Adding clickaway events to context", O), k.closable && O.on("click" + b, w.event.clickaway).on("touchend" + b, w.event.clickaway)
                     },
                     scrollLock: function() {
                         k.scrollLock && (w.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), c.on("touchmove" + b, w.event.touch), D.on("scroll" + P, w.event.containScroll)
                     }
                 },
                 unbind: {
                     clickaway: function() {
                         w.verbose("Removing clickaway events from context", O), O.off(b)
                     },
                     scrollLock: function() {
                         w.verbose("Removing scroll lock from page"), c.off(b), s.off(b), D.off("scroll" + P)
                     }
                 },
                 add: {
                     inlineCSS: function() {
                         var t, n = w.cache.width || D.outerWidth(),
                             i = w.cache.height || D.outerHeight(),
                             o = w.is.rtl(),
                             a = w.get.direction(),
                             s = {
                                 left: n,
                                 right: -n,
                                 top: i,
                                 bottom: -i
                             };
                         o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : ("top" === a || "bottom" == a) && (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : ("top" === a || "bottom" == a) && (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", r = e(t).appendTo(u), w.debug("Adding sizing css to head", r)
                     }
                 },
                 refresh: function() {
                     w.verbose("Refreshing selector cache"), O = e(k.context), q = O.children(S.sidebar), z = O.children(S.pusher), j = O.children(S.fixed), w.clear.cache()
                 },
                 refreshSidebars: function() {
                     w.verbose("Refreshing other sidebars"), q = O.children(S.sidebar)
                 },
                 repaint: function() {
                     w.verbose("Forcing repaint event"), I.style.display = "none";
                     I.offsetHeight;
                     I.scrollTop = I.scrollTop, I.style.display = ""
                 },
                 setup: {
                     cache: function() {
                         w.cache = {
                             width: D.outerWidth(),
                             height: D.outerHeight(),
                             rtl: "rtl" == D.css("direction")
                         }
                     },
                     layout: function() {
                         0 === O.children(S.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(E.pusher), z = e('<div class="pusher" />'), O.children().not(S.omitted).not(q).wrapAll(z), w.refresh()), (0 === D.nextAll(S.pusher).length || D.nextAll(S.pusher)[0] !== z[0]) && (w.debug("Moved sidebar to correct parent element"), w.error(E.movedSidebar, I), D.detach().prependTo(O), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction()
                     }
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(w[n]) ? w[n] : w.toggle, i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + P, n)) : w.error(E.notFound, t)
                 },
                 show: function(t) {
                     if (t = e.isFunction(t) ? t : function() {}, w.is.hidden()) {
                         if (w.refreshSidebars(), k.overlay && (w.error(E.overlay), k.transition = "overlay"), w.refresh(), w.othersActive())
                             if (w.debug("Other sidebars currently visible"), k.exclusive) {
                                 if ("overlay" != k.transition) return void w.hideOthers(w.show);
                                 w.hideOthers()
                             } else k.transition = "overlay";
                         w.pushPage(function() {
                             t.call(I), k.onShow.call(I)
                         }), k.onChange.call(I), k.onVisible.call(I)
                     } else w.debug("Sidebar is already visible")
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function() {
                         t.call(I), k.onHidden.call(I)
                     }), k.onChange.call(I), k.onHide.call(I))
                 },
                 othersAnimating: function() {
                     return q.not(D).filter("." + T.animating).length > 0
                 },
                 othersVisible: function() {
                     return q.not(D).filter("." + T.visible).length > 0
                 },
                 othersActive: function() {
                     return w.othersVisible() || w.othersAnimating()
                 },
                 hideOthers: function(e) {
                     var t = q.not(D).filter("." + T.visible),
                         n = t.length,
                         i = 0;
                     e = e || function() {}, t.sidebar("hide", function() {
                         i++, i == n && e()
                     })
                 },
                 toggle: function() {
                     w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide()
                 },
                 pushPage: function(t) {
                     var n, i, o, a = w.get.transition(),
                         r = "overlay" === a || w.othersActive() ? D : z;
                     t = e.isFunction(t) ? t : function() {}, "scale down" == k.transition && w.scrollToTop(), w.set.transition(a), w.repaint(), n = function() {
                         w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible()
                     }, i = function() {
                         w.set.dimmed()
                     }, o = function(e) {
                         e.target == r[0] && (r.off(C + b, o), w.remove.animating(), w.bind.scrollLock(), t.call(I))
                     }, r.off(C + b), r.on(C + b, o), h(n), k.dimPage && !w.othersVisible() && h(i)
                 },
                 pullPage: function(t) {
                     var n, i, o = w.get.transition(),
                         a = "overlay" == o || w.othersActive() ? D : z;
                     t = e.isFunction(t) ? t : function() {}, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function() {
                         w.set.transition(o), w.set.animating(), w.remove.visible(), k.dimPage && !w.othersVisible() && z.removeClass(T.dimmed)
                     }, i = function(e) {
                         e.target == a[0] && (a.off(C + b, i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || k.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(I))
                     }, a.off(C + b), a.on(C + b, i), h(n)
                 },
                 scrollToTop: function() {
                     w.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), D.scrollTop(0), t.scrollTo(0, 0)
                 },
                 scrollBack: function() {
                     w.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
                 },
                 clear: {
                     cache: function() {
                         w.verbose("Clearing cached dimensions"), w.cache = {}
                     }
                 },
                 set: {
                     ios: function() {
                         l.addClass(T.ios)
                     },
                     pushed: function() {
                         O.addClass(T.pushed)
                     },
                     pushable: function() {
                         O.addClass(T.pushable)
                     },
                     dimmed: function() {
                         z.addClass(T.dimmed)
                     },
                     active: function() {
                         D.addClass(T.active)
                     },
                     animating: function() {
                         D.addClass(T.animating)
                     },
                     transition: function(e) {
                         e = e || w.get.transition(), D.addClass(e)
                     },
                     direction: function(e) {
                         e = e || w.get.direction(), D.addClass(T[e])
                     },
                     visible: function() {
                         D.addClass(T.visible)
                     },
                     overlay: function() {
                         D.addClass(T.overlay)
                     }
                 },
                 remove: {
                     inlineCSS: function() {
                         w.debug("Removing inline css styles", r), r && r.length > 0 && r.remove()
                     },
                     ios: function() {
                         l.removeClass(T.ios)
                     },
                     pushed: function() {
                         O.removeClass(T.pushed)
                     },
                     pushable: function() {
                         O.removeClass(T.pushable)
                     },
                     active: function() {
                         D.removeClass(T.active)
                     },
                     animating: function() {
                         D.removeClass(T.animating)
                     },
                     transition: function(e) {
                         e = e || w.get.transition(), D.removeClass(e)
                     },
                     direction: function(e) {
                         e = e || w.get.direction(), D.removeClass(T[e])
                     },
                     visible: function() {
                         D.removeClass(T.visible)
                     },
                     overlay: function() {
                         D.removeClass(T.overlay)
                     }
                 },
                 get: {
                     direction: function() {
                         return D.hasClass(T.top) ? T.top : D.hasClass(T.right) ? T.right : D.hasClass(T.bottom) ? T.bottom : T.left
                     },
                     transition: function() {
                         var e, t = w.get.direction();
                         return e = w.is.mobile() ? "auto" == k.mobileTransition ? k.defaultTransition.mobile[t] : k.mobileTransition : "auto" == k.transition ? k.defaultTransition.computer[t] : k.transition, w.verbose("Determined transition", e), e
                     },
                     transitionEvent: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     }
                 },
                 is: {
                     ie: function() {
                         var e = !t.ActiveXObject && "ActiveXObject" in t,
                             n = "ActiveXObject" in t;
                         return e || n
                     },
                     ios: function() {
                         var e = navigator.userAgent,
                             t = e.match(R.ios),
                             n = e.match(R.mobileChrome);
                         return t && !n ? (w.verbose("Browser was found to be iOS", e), !0) : !1
                     },
                     mobile: function() {
                         var e = navigator.userAgent,
                             t = e.match(R.mobile);
                         return t ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1)
                     },
                     hidden: function() {
                         return !w.is.visible()
                     },
                     visible: function() {
                         return D.hasClass(T.visible)
                     },
                     open: function() {
                         return w.is.visible()
                     },
                     closed: function() {
                         return w.is.hidden()
                     },
                     vertical: function() {
                         return D.hasClass(T.top)
                     },
                     animating: function() {
                         return O.hasClass(T.animating)
                     },
                     rtl: function() {
                         return w.cache.rtl === i && (w.cache.rtl = "rtl" == D.css("direction")), w.cache.rtl
                     }
                 },
                 setting: function(t, n) {
                     if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, w, t);
                     else {
                         if (n === i) return w[t];
                         w[t] = n
                     }
                 },
                 debug: function() {
                     k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         k.performance && (t = (new Date).getTime(), i = m || t, n = t - i, m = t, f.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: I,
                             "Execution Time": n
                         })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                     },
                     display: function() {
                         var t = k.name + ":",
                             n = 0;
                         m = !1, clearTimeout(w.performance.timer), e.each(f, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = L;
                     return n = n || v, o = I || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (w.error(E.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, p ? (L === i && w.initialize(), w.invoke(g)) : (L !== i && w.invoke("destroy"), w.initialize())
         }), a !== i ? a : this
     }, e.fn.sidebar.settings = {
         name: "Sidebar",
         namespace: "sidebar",
         debug: !1,
         verbose: !1,
         performance: !0,
         transition: "auto",
         mobileTransition: "auto",
         defaultTransition: {
             computer: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             },
             mobile: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             }
         },
         context: "body",
         exclusive: !1,
         closable: !0,
         dimPage: !0,
         scrollLock: !1,
         returnScroll: !1,
         delaySetup: !1,
         duration: 500,
         onChange: function() {},
         onShow: function() {},
         onHide: function() {},
         onHidden: function() {},
         onVisible: function() {},
         className: {
             active: "active",
             animating: "animating",
             dimmed: "dimmed",
             ios: "ios",
             pushable: "pushable",
             pushed: "pushed",
             right: "right",
             top: "top",
             left: "left",
             bottom: "bottom",
             visible: "visible"
         },
         selector: {
             fixed: ".fixed",
             omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
             pusher: ".pusher",
             sidebar: ".ui.sidebar"
         },
         regExp: {
             ios: /(iPad|iPhone|iPod)/g,
             mobileChrome: /(CriOS)/g,
             mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
         },
         error: {
             method: "The method you called is not defined.",
             pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
             movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
             overlay: "The overlay setting is no longer supported, use animation: overlay",
             notFound: "There were no elements that matched the specified selector"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.sticky = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f, g, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.sticky.settings, n) : e.extend({}, e.fn.sticky.settings),
                 v = p.className,
                 h = p.namespace,
                 b = p.error,
                 y = "." + h,
                 x = "module-" + h,
                 C = e(this),
                 w = e(t),
                 k = e(p.scrollContext),
                 S = (C.selector || "", C.data(x)),
                 T = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 },
                 A = this;
             g = {
                 initialize: function() {
                     g.determineContainer(), g.determineContext(), g.verbose("Initializing sticky", p, a), g.save.positions(), g.checkErrors(), g.bind.events(), p.observeChanges && g.observeChanges(), g.instantiate()
                 },
                 instantiate: function() {
                     g.verbose("Storing instance of module", g), S = g, C.data(x, g)
                 },
                 destroy: function() {
                     g.verbose("Destroying previous instance"), g.reset(), f && f.disconnect(), w.off("load" + y, g.event.load).off("resize" + y, g.event.resize), k.off("scrollchange" + y, g.event.scrollchange), C.removeData(x)
                 },
                 observeChanges: function() {
                     var e = m[0];
                     "MutationObserver" in t && (f = new MutationObserver(function(e) {
                         clearTimeout(g.timer), g.timer = setTimeout(function() {
                             g.verbose("DOM tree modified, updating sticky menu", e), g.refresh()
                         }, 100)
                     }), f.observe(A, {
                         childList: !0,
                         subtree: !0
                     }), f.observe(e, {
                         childList: !0,
                         subtree: !0
                     }), g.debug("Setting up mutation observer", f))
                 },
                 determineContainer: function() {
                     a = C.offsetParent()
                 },
                 determineContext: function() {
                     return m = p.context ? e(p.context) : a, 0 === m.length ? void g.error(b.invalidContext, p.context, C) : void 0
                 },
                 checkErrors: function() {
                     return g.is.hidden() && g.error(b.visible, C), g.cache.element.height > g.cache.context.height ? (g.reset(), void g.error(b.elementSize, C)) : void 0
                 },
                 bind: {
                     events: function() {
                         w.on("load" + y, g.event.load).on("resize" + y, g.event.resize), k.off("scroll" + y).on("scroll" + y, g.event.scroll).on("scrollchange" + y, g.event.scrollchange)
                     }
                 },
                 event: {
                     load: function() {
                         g.verbose("Page contents finished loading"), T(g.refresh)
                     },
                     resize: function() {
                         g.verbose("Window resized"), T(g.refresh)
                     },
                     scroll: function() {
                         T(function() {
                             k.triggerHandler("scrollchange" + y, k.scrollTop())
                         })
                     },
                     scrollchange: function(e, t) {
                         g.stick(t), p.onScroll.call(A)
                     }
                 },
                 refresh: function(e) {
                     g.reset(), p.context || g.determineContext(), e && g.determineContainer(),
                         g.save.positions(), g.stick(), p.onReposition.call(A)
                 },
                 supports: {
                     sticky: function() {
                         {
                             var t = e("<div/>");
                             t[0]
                         }
                         return t.addClass(v.supported), t.css("position").match("sticky")
                     }
                 },
                 save: {
                     lastScroll: function(e) {
                         g.lastScroll = e
                     },
                     elementScroll: function(e) {
                         g.elementScroll = e
                     },
                     positions: function() {
                         {
                             var e = {
                                     height: k.height()
                                 },
                                 t = {
                                     margin: {
                                         top: parseInt(C.css("margin-top"), 10),
                                         bottom: parseInt(C.css("margin-bottom"), 10)
                                     },
                                     offset: C.offset(),
                                     width: C.outerWidth(),
                                     height: C.outerHeight()
                                 },
                                 n = {
                                     offset: m.offset(),
                                     height: m.outerHeight()
                                 };
                             ({
                                 height: a.outerHeight()
                             })
                         }
                         g.is.standardScroll() || (g.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = k.scrollTop(), e.left = k.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), g.cache = {
                             fits: t.height < e.height,
                             scrollContext: {
                                 height: e.height
                             },
                             element: {
                                 margin: t.margin,
                                 top: t.offset.top - t.margin.top,
                                 left: t.offset.left,
                                 width: t.width,
                                 height: t.height,
                                 bottom: t.offset.top + t.height
                             },
                             context: {
                                 top: n.offset.top,
                                 height: n.height,
                                 bottom: n.offset.top + n.height
                             }
                         }, g.set.containerSize(), g.set.size(), g.stick(), g.debug("Caching element positions", g.cache)
                     }
                 },
                 get: {
                     direction: function(e) {
                         var t = "down";
                         return e = e || k.scrollTop(), g.lastScroll !== i && (g.lastScroll < e ? t = "down" : g.lastScroll > e && (t = "up")), t
                     },
                     scrollChange: function(e) {
                         return e = e || k.scrollTop(), g.lastScroll ? e - g.lastScroll : 0
                     },
                     currentElementScroll: function() {
                         return g.elementScroll ? g.elementScroll : g.is.top() ? Math.abs(parseInt(C.css("top"), 10)) || 0 : Math.abs(parseInt(C.css("bottom"), 10)) || 0
                     },
                     elementScroll: function(e) {
                         e = e || k.scrollTop();
                         var t = g.cache.element,
                             n = g.cache.scrollContext,
                             i = g.get.scrollChange(e),
                             o = t.height - n.height + p.offset,
                             a = g.get.currentElementScroll(),
                             r = a + i;
                         return a = g.cache.fits || 0 > r ? 0 : r > o ? o : r
                     }
                 },
                 remove: {
                     lastScroll: function() {
                         delete g.lastScroll
                     },
                     elementScroll: function(e) {
                         delete g.elementScroll
                     },
                     offset: function() {
                         C.css("margin-top", "")
                     }
                 },
                 set: {
                     offset: function() {
                         g.verbose("Setting offset on element", p.offset), C.css("margin-top", p.offset)
                     },
                     containerSize: function() {
                         var e = a.get(0).tagName;
                         "HTML" === e || "body" == e ? g.determineContainer() : Math.abs(a.outerHeight() - g.cache.context.height) > p.jitter && (g.debug("Context has padding, specifying exact height for container", g.cache.context.height), a.css({
                             height: g.cache.context.height
                         }))
                     },
                     minimumSize: function() {
                         var e = g.cache.element;
                         a.css("min-height", e.height)
                     },
                     scroll: function(e) {
                         g.debug("Setting scroll on element", e), g.elementScroll != e && (g.is.top() && C.css("bottom", "").css("top", -e), g.is.bottom() && C.css("top", "").css("bottom", e))
                     },
                     size: function() {
                         0 !== g.cache.element.height && 0 !== g.cache.element.width && (A.style.setProperty("width", g.cache.element.width + "px", "important"), A.style.setProperty("height", g.cache.element.height + "px", "important"))
                     }
                 },
                 is: {
                     standardScroll: function() {
                         return k[0] == t
                     },
                     top: function() {
                         return C.hasClass(v.top)
                     },
                     bottom: function() {
                         return C.hasClass(v.bottom)
                     },
                     initialPosition: function() {
                         return !g.is.fixed() && !g.is.bound()
                     },
                     hidden: function() {
                         return !C.is(":visible")
                     },
                     bound: function() {
                         return C.hasClass(v.bound)
                     },
                     fixed: function() {
                         return C.hasClass(v.fixed)
                     }
                 },
                 stick: function(e) {
                     var t = e || k.scrollTop(),
                         n = g.cache,
                         i = n.fits,
                         o = n.element,
                         a = n.scrollContext,
                         r = n.context,
                         s = g.is.bottom() && p.pushing ? p.bottomOffset : p.offset,
                         e = {
                             top: t + s,
                             bottom: t + s + a.height
                         },
                         c = (g.get.direction(e.top), i ? 0 : g.get.elementScroll(e.top)),
                         l = !i,
                         u = 0 !== o.height;
                     u && (g.is.initialPosition() ? e.top >= r.bottom ? (g.debug("Initial element position is bottom of container"), g.bindBottom()) : e.top > o.top && (o.height + e.top - c >= r.bottom ? (g.debug("Initial element position is bottom of container"), g.bindBottom()) : (g.debug("Initial element position is fixed"), g.fixTop())) : g.is.fixed() ? g.is.top() ? e.top <= o.top ? (g.debug("Fixed element reached top of container"), g.setInitialPosition()) : o.height + e.top - c >= r.bottom ? (g.debug("Fixed element reached bottom of container"), g.bindBottom()) : l && (g.set.scroll(c), g.save.lastScroll(e.top), g.save.elementScroll(c)) : g.is.bottom() && (e.bottom - o.height <= o.top ? (g.debug("Bottom fixed rail has reached top of container"), g.setInitialPosition()) : e.bottom >= r.bottom ? (g.debug("Bottom fixed rail has reached bottom of container"), g.bindBottom()) : l && (g.set.scroll(c), g.save.lastScroll(e.top), g.save.elementScroll(c))) : g.is.bottom() && (e.top <= o.top ? (g.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), g.setInitialPosition()) : p.pushing ? g.is.bound() && e.bottom <= r.bottom && (g.debug("Fixing bottom attached element to bottom of browser."), g.fixBottom()) : g.is.bound() && e.top <= r.bottom - o.height && (g.debug("Fixing bottom attached element to top of browser."), g.fixTop())))
                 },
                 bindTop: function() {
                     g.debug("Binding element to top of parent container"), g.remove.offset(), C.css({
                         left: "",
                         top: "",
                         marginBottom: ""
                     }).removeClass(v.fixed).removeClass(v.bottom).addClass(v.bound).addClass(v.top), p.onTop.call(A), p.onUnstick.call(A)
                 },
                 bindBottom: function() {
                     g.debug("Binding element to bottom of parent container"), g.remove.offset(), C.css({
                         left: "",
                         top: ""
                     }).removeClass(v.fixed).removeClass(v.top).addClass(v.bound).addClass(v.bottom), p.onBottom.call(A), p.onUnstick.call(A)
                 },
                 setInitialPosition: function() {
                     g.debug("Returning to initial position"), g.unfix(), g.unbind()
                 },
                 fixTop: function() {
                     g.debug("Fixing element to top of page"), g.set.minimumSize(), g.set.offset(), C.css({
                         left: g.cache.element.left,
                         bottom: "",
                         marginBottom: ""
                     }).removeClass(v.bound).removeClass(v.bottom).addClass(v.fixed).addClass(v.top), p.onStick.call(A)
                 },
                 fixBottom: function() {
                     g.debug("Sticking element to bottom of page"), g.set.minimumSize(), g.set.offset(), C.css({
                         left: g.cache.element.left,
                         bottom: "",
                         marginBottom: ""
                     }).removeClass(v.bound).removeClass(v.top).addClass(v.fixed).addClass(v.bottom), p.onStick.call(A)
                 },
                 unbind: function() {
                     g.is.bound() && (g.debug("Removing container bound position on element"), g.remove.offset(), C.removeClass(v.bound).removeClass(v.top).removeClass(v.bottom))
                 },
                 unfix: function() {
                     g.is.fixed() && (g.debug("Removing fixed position on element"), g.remove.offset(), C.removeClass(v.fixed).removeClass(v.top).removeClass(v.bottom), p.onUnstick.call(A))
                 },
                 reset: function() {
                     g.debug("Reseting elements position"), g.unbind(), g.unfix(), g.resetCSS(), g.remove.offset(), g.remove.lastScroll()
                 },
                 resetCSS: function() {
                     C.css({
                         width: "",
                         height: ""
                     }), a.css({
                         height: ""
                     })
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, p, t);
                     else {
                         if (n === i) return p[t];
                         p[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: A,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 0)
                     },
                     display: function() {
                         var t = p.name + ":",
                             n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = S;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (S === i && g.initialize(), g.invoke(l)) : (S !== i && S.invoke("destroy"), g.initialize())
         }), o !== i ? o : this
     }, e.fn.sticky.settings = {
         name: "Sticky",
         namespace: "sticky",
         debug: !1,
         verbose: !0,
         performance: !0,
         pushing: !1,
         context: !1,
         scrollContext: t,
         offset: 0,
         bottomOffset: 0,
         jitter: 5,
         observeChanges: !1,
         onReposition: function() {},
         onScroll: function() {},
         onStick: function() {},
         onUnstick: function() {},
         onTop: function() {},
         onBottom: function() {},
         error: {
             container: "Sticky element must be inside a relative container",
             visible: "Element is hidden, you must call refresh after element becomes visible",
             method: "The method you called is not defined.",
             invalidContext: "Context specified does not exist",
             elementSize: "Sticky element is larger than its container, cannot create sticky."
         },
         className: {
             bound: "bound",
             fixed: "fixed",
             supported: "native",
             top: "top",
             bottom: "bottom"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.tab = function(o) {
         var a, r = e(e.isFunction(this) ? t : this),
             s = r.selector || "",
             c = (new Date).getTime(),
             l = [],
             u = arguments[0],
             d = "string" == typeof u,
             m = [].slice.call(arguments, 1),
             f = !1;
         return r.each(function() {
             var g, p, v, h, b, y, x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
                 C = x.className,
                 w = x.metadata,
                 k = x.selector,
                 S = x.error,
                 T = "." + x.namespace,
                 A = "module-" + x.namespace,
                 R = e(this),
                 E = {},
                 P = !0,
                 F = 0,
                 D = this,
                 O = R.data(A);
             b = {
                 initialize: function() {
                     b.debug("Initializing tab menu item", R), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, p), x.auto && b.set.auto(), b.bind.events(), x.history && !f && (b.initializeHistory(), f = !0), b.instantiate()
                 },
                 instantiate: function() {
                     b.verbose("Storing instance of module", b), O = b, R.data(A, b)
                 },
                 destroy: function() {
                     b.debug("Destroying tabs", R), R.removeData(A).off(T)
                 },
                 bind: {
                     events: function() {
                         e.isWindow(D) || (b.debug("Attaching tab activation events to element", R), R.on("click" + T, b.event.click))
                     }
                 },
                 determineTabs: function() {
                     var t;
                     "parent" === x.context ? (R.closest(k.ui).length > 0 ? (t = R.closest(k.ui), b.verbose("Using closest UI element as parent", t)) : t = R, g = t.parent(), b.verbose("Determined parent element for creating context", g)) : x.context ? (g = e(x.context), b.verbose("Using selector for tab context", x.context, g)) : g = e("body"), x.childrenOnly ? (p = g.children(k.tabs), b.debug("Searching tab context children for tabs", g, p)) : (p = g.find(k.tabs), b.debug("Searching tab context for tabs", g, p))
                 },
                 fix: {
                     callbacks: function() {
                         e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(S.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(S.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o))
                     }
                 },
                 initializeHistory: function() {
                     if (b.debug("Initializing page state"), e.address === i) return b.error(S.state), !1;
                     if ("state" == x.historyType) {
                         if (b.debug("Using HTML5 to manage state"), x.path === !1) return b.error(S.path), !1;
                         e.address.history(!0).state(x.path)
                     }
                     e.address.bind("change", b.event.history.change)
                 },
                 event: {
                     click: function(t) {
                         var n = e(this).data(w.tab);
                         n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified")
                     },
                     history: {
                         change: function(t) {
                             var n = t.pathNames.join("/") || b.get.initialPath(),
                                 o = x.templates.determineTitle(n) || !1;
                             b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o)
                         }
                     }
                 },
                 refresh: function() {
                     v && (b.debug("Refreshing tab", v), b.changeTab(v))
                 },
                 cache: {
                     read: function(e) {
                         return e !== i ? E[e] : !1
                     },
                     add: function(e, t) {
                         e = e || v, b.debug("Adding cached content for", e), E[e] = t
                     },
                     remove: function(e) {
                         e = e || v, b.debug("Removing cached content for", e), delete E[e]
                     }
                 },
                 set: {
                     auto: function() {
                         var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                         b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = {
                             url: t
                         }
                     },
                     loading: function(e) {
                         var t = b.get.tabElement(e),
                             n = t.hasClass(C.loading);
                         n || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onRequest.call(t[0], e))
                     },
                     state: function(t) {
                         e.address.value(t)
                     }
                 },
                 changeTab: function(n) {
                     var i = t.history && t.history.pushState,
                         o = i && x.ignoreFirstLoad && P,
                         a = x.auto || e.isPlainObject(x.apiSettings),
                         r = a && !o ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);
                     n = b.utilities.arrayToPath(r), e.each(r, function(t, i) {
                         var s, c, l, u, d = r.slice(0, t + 1),
                             m = b.utilities.arrayToPath(d),
                             f = b.is.tab(m),
                             p = t + 1 == r.length,
                             k = b.get.tabElement(m);
                         if (b.verbose("Looking for tab", i), f) {
                             if (b.verbose("Tab was found", i), v = m, h = b.utilities.filterArray(r, d), p ? u = !0 : (c = r.slice(0, t + 2), l = b.utilities.arrayToPath(c), u = !b.is.tab(l), u && b.verbose("Tab parameters found", c)), u && a) return o ? (b.debug("Ignoring remote content on first tab load", m), P = !1, b.cache.add(n, k.html()), b.activate.all(m), x.onFirstLoad.call(k[0], m, h, y), x.onLoad.call(k[0], m, h, y)) : (b.activate.navigation(m), b.fetch.content(m, n)), !1;
                             b.debug("Opened local tab", m), b.activate.all(m), b.cache.read(m) || (b.cache.add(m, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], m, h, y)), x.onLoad.call(k[0], m, h, y)
                         } else {
                             if (-1 != n.search("/") || "" === n) return b.error(S.missingTab, R, g, m), !1;
                             if (s = e("#" + n + ', a[name="' + n + '"]'), m = s.closest("[data-tab]").data(w.tab), k = b.get.tabElement(m), s && s.length > 0 && m) return b.debug("Anchor link used, opening parent tab", k, s), k.hasClass(C.active) || setTimeout(function() {
                                 b.scrollTo(s)
                             }, 0), b.activate.all(m), b.cache.read(m) || (b.cache.add(m, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], m, h, y)), x.onLoad.call(k[0], m, h, y), !1
                         }
                     })
                 },
                 scrollTo: function(t) {
                     var i = t && t.length > 0 ? t.offset().top : !1;
                     i !== !1 && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i))
                 },
                 update: {
                     content: function(e, t, n) {
                         var o = b.get.tabElement(e),
                             a = o[0];
                         n = n !== i ? n : x.evaluateScripts, n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), o.html(t)) : (b.debug("Updating HTML", e, t), a.innerHTML = t)
                     }
                 },
                 fetch: {
                     content: function(t, n) {
                         var o, a, r = b.get.tabElement(t),
                             s = {
                                 dataType: "html",
                                 encodeParameters: !1,
                                 on: "now",
                                 cache: x.alwaysRefresh,
                                 headers: {
                                     "X-Remote": !0
                                 },
                                 onSuccess: function(e) {
                                     b.cache.add(n, e), b.update.content(t, e), t == v ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(r[0], t, h, y), x.onLoad.call(r[0], t, h, y)
                                 },
                                 urlData: {
                                     tab: n
                                 }
                             },
                             c = r.api("get request") || !1,
                             l = c && "pending" === c.state();
                         n = n || t, a = b.cache.read(n), x.cache && a ? (b.activate.tab(t), b.debug("Adding cached content", n), "once" == x.evaluateScripts ? b.update.content(t, a, !1) : b.update.content(t, a), x.onLoad.call(r[0], t, h, y)) : l ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), r.api(o)) : b.error(S.api)
                     }
                 },
                 activate: {
                     all: function(e) {
                         b.activate.tab(e), b.activate.navigation(e)
                     },
                     tab: function(e) {
                         var t = b.get.tabElement(e),
                             n = t.hasClass(C.active);
                         b.verbose("Showing tab content for", t), n || (t.addClass(C.active).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onVisible.call(t[0], e))
                     },
                     navigation: function(e) {
                         var t = b.get.navElement(e),
                             n = t.hasClass(C.active);
                         b.verbose("Activating tab navigation for", t, e), n || t.addClass(C.active).siblings(r).removeClass(C.active + " " + C.loading)
                     }
                 },
                 deactivate: {
                     all: function() {
                         b.deactivate.navigation(), b.deactivate.tabs()
                     },
                     navigation: function() {
                         r.removeClass(C.active)
                     },
                     tabs: function() {
                         p.removeClass(C.active + " " + C.loading)
                     }
                 },
                 is: {
                     tab: function(e) {
                         return e !== i ? b.get.tabElement(e).length > 0 : !1
                     }
                 },
                 get: {
                     initialPath: function() {
                         return r.eq(0).data(w.tab) || p.eq(0).data(w.tab)
                     },
                     path: function() {
                         return e.address.value()
                     },
                     defaultPathArray: function(e) {
                         return b.utilities.pathToArray(b.get.defaultPath(e))
                     },
                     defaultPath: function(e) {
                         var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0),
                             n = t.data(w.tab) || !1;
                         if (n) {
                             if (b.debug("Found default tab", n), F < x.maxDepth) return F++, b.get.defaultPath(n);
                             b.error(S.recursion)
                         } else b.debug("No default tabs found for", e, p);
                         return F = 0, e
                     },
                     navElement: function(e) {
                         return e = e || v, r.filter("[data-" + w.tab + '="' + e + '"]')
                     },
                     tabElement: function(e) {
                         var t, n, i, o;
                         return e = e || v, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = p.filter("[data-" + w.tab + '="' + e + '"]'), n = p.filter("[data-" + w.tab + '="' + o + '"]'), t.length > 0 ? t : n
                     },
                     tab: function() {
                         return v
                     }
                 },
                 utilities: {
                     filterArray: function(t, n) {
                         return e.grep(t, function(t) {
                             return -1 == e.inArray(t, n)
                         })
                     },
                     last: function(t) {
                         return e.isArray(t) ? t[t.length - 1] : !1
                     },
                     pathToArray: function(e) {
                         return e === i && (e = v), "string" == typeof e ? e.split("/") : [e]
                     },
                     arrayToPath: function(t) {
                         return e.isArray(t) ? t.join("/") : !1
                     }
                 },
                 setting: function(t, n) {
                     if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t);
                     else {
                         if (n === i) return x[t];
                         x[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 },
                 debug: function() {
                     x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         x.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: D,
                             "Execution Time": n
                         })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                     },
                     display: function() {
                         var t = x.name + ":",
                             n = 0;
                         c = !1, clearTimeout(b.performance.timer), e.each(l, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = O;
                     return n = n || m, o = D || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (b.error(S.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (O === i && b.initialize(), b.invoke(u)) : (O !== i && O.invoke("destroy"), b.initialize())
         }), a !== i ? a : this
     }, e.tab = function() {
         e(t).tab.apply(this, arguments)
     }, e.fn.tab.settings = {
         name: "Tab",
         namespace: "tab",
         debug: !1,
         verbose: !1,
         performance: !0,
         auto: !1,
         history: !1,
         historyType: "hash",
         path: !1,
         context: !1,
         childrenOnly: !1,
         maxDepth: 25,
         alwaysRefresh: !1,
         cache: !0,
         ignoreFirstLoad: !1,
         apiSettings: !1,
         evaluateScripts: "once",
         onFirstLoad: function(e, t, n) {},
         onLoad: function(e, t, n) {},
         onVisible: function(e, t, n) {},
         onRequest: function(e, t, n) {},
         templates: {
             determineTitle: function(e) {}
         },
         error: {
             api: "You attempted to load content without API module",
             method: "The method you called is not defined",
             missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
             noContent: "The tab you specified is missing a content url.",
             path: "History enabled, but no path was specified",
             recursion: "Max recursive depth reached",
             legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
             legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
             state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
         },
         metadata: {
             tab: "tab",
             loaded: "loaded",
             promise: "promise"
         },
         className: {
             loading: "loading",
             active: "active"
         },
         selector: {
             tabs: ".ui.tab",
             ui: ".ui"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.transition = function() {
         {
             var o, a = e(this),
                 r = a.selector || "",
                 s = (new Date).getTime(),
                 c = [],
                 l = arguments,
                 u = l[0],
                 d = [].slice.call(arguments, 1),
                 m = "string" == typeof u;
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function(t) {
             var f, g, p, v, h, b, y, x, C, w = e(this),
                 k = this;
             C = {
                 initialize: function() {
                     f = C.get.settings.apply(k, l), v = f.className, p = f.error, h = f.metadata, x = "." + f.namespace, y = "module-" + f.namespace, g = w.data(y) || C, b = C.get.animationEndEvent(), m && (m = C.invoke(u)), m === !1 && (C.verbose("Converted arguments into settings object", f), f.interval ? C.delay(f.animate) : C.animate(), C.instantiate())
                 },
                 instantiate: function() {
                     C.verbose("Storing instance of module", C), g = C, w.data(y, g)
                 },
                 destroy: function() {
                     C.verbose("Destroying previous module for", k), w.removeData(y)
                 },
                 refresh: function() {
                     C.verbose("Refreshing display type on next animation"), delete C.displayType
                 },
                 forceRepaint: function() {
                     C.verbose("Forcing element repaint");
                     var e = w.parent(),
                         t = w.next();
                     0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t)
                 },
                 repaint: function() {
                     C.verbose("Repainting element");
                     k.offsetWidth
                 },
                 delay: function(e) {
                     var n, o, r = C.get.animationDirection();
                     r || (r = C.can.transition() ? C.get.direction() : "static"), e = e !== i ? e : f.interval, n = "auto" == f.reverse && r == v.outward, o = n || 1 == f.reverse ? (a.length - t) * f.interval : t * f.interval, C.debug("Delaying animation by", o), setTimeout(C.animate, o)
                 },
                 animate: function(e) {
                     if (f = e || f, !C.is.supported()) return C.error(p.support), !1;
                     if (C.debug("Preparing animation", f.animation), C.is.animating()) {
                         if (f.queue) return !f.allowRepeats && C.has.direction() && C.is.occurring() && C.queuing !== !0 ? C.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : C.queue(f.animation), !1;
                         if (!f.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", f.animation), !1;
                         C.debug("New animation started, completing previous early", f.animation), g.complete()
                     }
                     C.can.animate() ? C.set.animating(f.animation) : C.error(p.noAnimation, f.animation, k)
                 },
                 reset: function() {
                     C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating()
                 },
                 queue: function(e) {
                     C.debug("Queueing animation of", e), C.queuing = !0, w.one(b + ".queue" + x, function() {
                         C.queuing = !1, C.repaint(), C.animate.apply(this, f)
                     })
                 },
                 complete: function(e) {
                     C.debug("Animation complete", f.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), f.onComplete.call(k)))
                 },
                 force: {
                     visible: function() {
                         var e = w.attr("style"),
                             t = C.get.userStyle(),
                             n = C.get.displayType(),
                             o = t + "display: " + n + " !important;",
                             a = w.css("display"),
                             r = e === i || "" === e;
                         a !== n ? (C.verbose("Overriding default display to show element", n), w.attr("style", o)) : r && w.removeAttr("style")
                     },
                     hidden: function() {
                         var e = w.attr("style"),
                             t = w.css("display"),
                             n = e === i || "" === e;
                         "none" === t || C.is.hidden() ? n && w.removeAttr("style") : (C.verbose("Overriding default display to hide element"), w.css("display", "none"))
                     }
                 },
                 has: {
                     direction: function(t) {
                         var n = !1;
                         return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
                             (t === v.inward || t === v.outward) && (n = !0)
                         })), n
                     },
                     inlineDisplay: function() {
                         var t = w.attr("style") || "";
                         return e.isArray(t.match(/display.*?;/, ""))
                     }
                 },
                 set: {
                     animating: function(e) {
                         var t;
                         C.remove.completeCallback(), e = e || f.animation, t = C.get.animationClass(e), C.save.animation(t), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(t)
                     },
                     duration: function(e, t) {
                         t = t || f.duration, t = "number" == typeof t ? t + "ms" : t, (t || 0 === t) && (C.verbose("Setting animation duration", t), w.css({
                             "animation-duration": t
                         }))
                     },
                     direction: function(e) {
                         e = e || C.get.direction(), e == v.inward ? C.set.inward() : C.set.outward()
                     },
                     looping: function() {
                         C.debug("Transition set to loop"), w.addClass(v.looping)
                     },
                     hidden: function() {
                         w.addClass(v.transition).addClass(v.hidden)
                     },
                     inward: function() {
                         C.debug("Setting direction to inward"), w.removeClass(v.outward).addClass(v.inward)
                     },
                     outward: function() {
                         C.debug("Setting direction to outward"), w.removeClass(v.inward).addClass(v.outward)
                     },
                     visible: function() {
                         w.addClass(v.transition).addClass(v.visible)
                     }
                 },
                 start: {
                     animation: function(e) {
                         e = e || C.get.animationClass(), C.debug("Starting tween", e), w.addClass(e).one(b + ".complete" + x, C.complete), f.useFailSafe && C.add.failSafe(), C.set.duration(f.duration), f.onStart.call(k)
                     }
                 },
                 save: {
                     animation: function(e) {
                         C.cache || (C.cache = {}), C.cache.animation = e
                     },
                     displayType: function(e) {
                         "none" !== e && w.data(h.displayType, e)
                     },
                     transitionExists: function(t, n) {
                         e.fn.transition.exists[t] = n, C.verbose("Saving existence of transition", t, n)
                     }
                 },
                 restore: {
                     conditions: function() {
                         var e = C.get.currentAnimation();
                         e && (w.removeClass(e), C.verbose("Removing animation class", C.cache)), C.remove.duration()
                     }
                 },
                 add: {
                     failSafe: function() {
                         var e = C.get.duration();
                         C.timer = setTimeout(function() {
                             w.triggerHandler(b)
                         }, e + f.failSafeDelay), C.verbose("Adding fail safe timer", C.timer)
                     }
                 },
                 remove: {
                     animating: function() {
                         w.removeClass(v.animating)
                     },
                     animationCallbacks: function() {
                         C.remove.queueCallback(), C.remove.completeCallback()
                     },
                     queueCallback: function() {
                         w.off(".queue" + x)
                     },
                     completeCallback: function() {
                         w.off(".complete" + x)
                     },
                     display: function() {
                         w.css("display", "")
                     },
                     direction: function() {
                         w.removeClass(v.inward).removeClass(v.outward)
                     },
                     duration: function() {
                         w.css("animation-duration", "")
                     },
                     failSafe: function() {
                         C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer)
                     },
                     hidden: function() {
                         w.removeClass(v.hidden)
                     },
                     visible: function() {
                         w.removeClass(v.visible)
                     },
                     looping: function() {
                         C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), w.removeClass(v.looping))
                     },
                     transition: function() {
                         w.removeClass(v.visible).removeClass(v.hidden)
                     }
                 },
                 get: {
                     settings: function(t, n, i) {
                         return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: i,
                             duration: n
                         }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             duration: n
                         }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {
                             animation: t
                         }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: n
                         }) : e.extend({}, e.fn.transition.settings, {
                             animation: t
                         })
                     },
                     animationClass: function(e) {
                         var t = e || f.animation,
                             n = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";
                         return v.animating + " " + v.transition + " " + n + t
                     },
                     currentAnimation: function() {
                         return C.cache && C.cache.animation !== i ? C.cache.animation : !1
                     },
                     currentDirection: function() {
                         return C.is.inward() ? v.inward : v.outward
                     },
                     direction: function() {
                         return C.is.hidden() || !C.is.visible() ? v.inward : v.outward
                     },
                     animationDirection: function(t) {
                         var n;
                         return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
                             t === v.inward ? n = v.inward : t === v.outward && (n = v.outward)
                         })), n ? n : !1
                     },
                     duration: function(e) {
                         return e = e || f.duration, e === !1 && (e = w.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                     },
                     displayType: function() {
                         return f.displayType ? f.displayType : (w.data(h.displayType) === i && C.can.transition(!0), w.data(h.displayType))
                     },
                     userStyle: function(e) {
                         return e = e || w.attr("style") || "", e.replace(/display.*?;/, "")
                     },
                     transitionExists: function(t) {
                         return e.fn.transition.exists[t]
                     },
                     animationStartEvent: function() {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationstart",
                                 OAnimation: "oAnimationStart",
                                 MozAnimation: "mozAnimationStart",
                                 WebkitAnimation: "webkitAnimationStart"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     },
                     animationEndEvent: function() {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationend",
                                 OAnimation: "oAnimationEnd",
                                 MozAnimation: "mozAnimationEnd",
                                 WebkitAnimation: "webkitAnimationEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                 },
                 can: {
                     transition: function(t) {
                         var n, o, a, r, s, c, l, u = f.animation,
                             d = C.get.transitionExists(u);
                         if (d === i || t) {
                             if (C.verbose("Determining whether animation exists"), n = w.attr("class"), o = w.prop("tagName"), a = e("<" + o + " />").addClass(n).insertAfter(w), r = a.addClass(u).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"), s = a.addClass(v.inward).css("animationName"), l = a.attr("class", n).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), C.verbose("Determining final display state", l), C.save.displayType(l), a.remove(), r != s) C.debug("Direction exists for animation", u), c = !0;
                             else {
                                 if ("none" == r || !r) return void C.debug("No animation defined in css", u);
                                 C.debug("Static animation found", u, l), c = !1
                             }
                             C.save.transitionExists(u, c)
                         }
                         return d !== i ? d : c
                     },
                     animate: function() {
                         return C.can.transition() !== i
                     }
                 },
                 is: {
                     animating: function() {
                         return w.hasClass(v.animating)
                     },
                     inward: function() {
                         return w.hasClass(v.inward)
                     },
                     outward: function() {
                         return w.hasClass(v.outward)
                     },
                     looping: function() {
                         return w.hasClass(v.looping)
                     },
                     occurring: function(e) {
                         return e = e || f.animation, e = "." + e.replace(" ", "."), w.filter(e).length > 0
                     },
                     visible: function() {
                         return w.is(":visible")
                     },
                     hidden: function() {
                         return "hidden" === w.css("visibility")
                     },
                     supported: function() {
                         return b !== !1
                     }
                 },
                 hide: function() {
                     C.verbose("Hiding element"), C.is.animating() && C.reset(), k.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), f.onHide.call(k), f.onComplete.call(k)
                 },
                 show: function(e) {
                     C.verbose("Showing element", e), C.remove.hidden(), C.set.visible(), C.force.visible(), f.onShow.call(k), f.onComplete.call(k)
                 },
                 toggle: function() {
                     C.is.visible() ? C.hide() : C.show()
                 },
                 stop: function() {
                     C.debug("Stopping current animation"), w.triggerHandler(b)
                 },
                 stopAll: function() {
                     C.debug("Stopping all animation"), C.remove.queueCallback(), w.triggerHandler(b)
                 },
                 clear: {
                     queue: function() {
                         C.debug("Clearing animation queue"), C.remove.queueCallback()
                     }
                 },
                 enable: function() {
                     C.verbose("Starting animation"), w.removeClass(v.disabled)
                 },
                 disable: function() {
                     C.debug("Stopping animation"), w.addClass(v.disabled)
                 },
                 setting: function(t, n) {
                     if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, C, t);
                     else {
                         if (n === i) return C[t];
                         C[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), C.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), C.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     C.error = Function.prototype.bind.call(console.error, console, f.name + ":"), C.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(C.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = g;
                     return n = n || d, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s !== i ? s : !1
                 }
             }, C.initialize()
         }), o !== i ? o : this
     }, e.fn.transition.exists = {}, e.fn.transition.settings = {
         name: "Transition",
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "transition",
         interval: 0,
         reverse: "auto",
         onStart: function() {},
         onComplete: function() {},
         onShow: function() {},
         onHide: function() {},
         useFailSafe: !0,
         failSafeDelay: 100,
         allowRepeats: !1,
         displayType: !1,
         animation: "fade",
         duration: !1,
         queue: !0,
         metadata: {
             displayType: "display"
         },
         className: {
             animating: "animating",
             disabled: "disabled",
             hidden: "hidden",
             inward: "in",
             loading: "loading",
             looping: "looping",
             outward: "out",
             transition: "transition",
             visible: "visible"
         },
         error: {
             noAnimation: "Element is no longer attached to DOM. Unable to animate.",
             repeated: "That animation is already occurring, cancelling repeated animation",
             method: "The method you called is not defined",
             support: "This browser does not support CSS animations"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.api = e.fn.api = function(n) {
         var o, a = e(e.isFunction(this) ? t : this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f, g, p, v, h = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                 b = h.namespace,
                 y = h.metadata,
                 x = h.selector,
                 C = h.error,
                 w = h.className,
                 k = "." + b,
                 S = "module-" + b,
                 T = e(this),
                 A = T.closest(x.form),
                 R = h.stateContext ? e(h.stateContext) : T,
                 E = this,
                 P = R[0],
                 F = T.data(S);
             v = {
                 initialize: function() {
                     u || v.bind.events(), v.instantiate()
                 },
                 instantiate: function() {
                     v.verbose("Storing instance of module", v), F = v, T.data(S, F)
                 },
                 destroy: function() {
                     v.verbose("Destroying previous module for", E), T.removeData(S).off(k)
                 },
                 bind: {
                     events: function() {
                         var e = v.get.event();
                         e ? (v.verbose("Attaching API events to element", e), T.on(e + k, v.event.trigger)) : "now" == h.on && (v.debug("Querying API endpoint immediately"), v.query())
                     }
                 },
                 decode: {
                     json: function(e) {
                         if (e !== i && "string" == typeof e) try {
                             e = JSON.parse(e)
                         } catch (t) {}
                         return e
                     }
                 },
                 read: {
                     cachedResponse: function(e) {
                         var n;
                         return t.Storage === i ? void v.error(C.noStorage) : (n = sessionStorage.getItem(e), v.debug("Using cached response", e, n), n = v.decode.json(n), !1)
                     }
                 },
                 write: {
                     cachedResponse: function(n, o) {
                         return o && "" === o ? void v.debug("Response empty, not caching", o) : t.Storage === i ? void v.error(C.noStorage) : (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), void v.verbose("Storing cached response for url", n, o))
                     }
                 },
                 query: function() {
                     if (v.is.disabled()) return void v.debug("Element is disabled API request aborted");
                     if (v.is.loading()) {
                         if (!h.interruptRequests) return void v.debug("Cancelling request, previous request is still pending");
                         v.debug("Interrupting previous request"), v.abort()
                     }
                     return h.defaultData && e.extend(!0, h.urlData, v.get.defaultData()), h.serializeForm && (h.data = v.add.formData(h.data)), m = v.get.settings(), m === !1 ? (v.cancelled = !0, void v.error(C.beforeSend)) : (v.cancelled = !1, f = v.get.templatedURL(), f || v.is.mocked() ? (f = v.add.urlData(f), f || v.is.mocked() ? (m.url = h.base + f, a = e.extend(!0, {}, h, {
                         type: h.method || h.type,
                         data: g,
                         url: h.base + f,
                         beforeSend: h.beforeXHR,
                         success: function() {},
                         failure: function() {},
                         complete: function() {}
                     }), v.debug("Querying URL", a.url), v.verbose("Using AJAX settings", a), "local" === h.cache && v.read.cachedResponse(f) ? (v.debug("Response returned from local cache"), v.request = v.create.request(), void v.request.resolveWith(P, [v.read.cachedResponse(f)])) : void(h.throttle ? h.throttleFirstRequest || v.timer ? (v.debug("Throttling request", h.throttle), clearTimeout(v.timer), v.timer = setTimeout(function() {
                         v.timer && delete v.timer, v.debug("Sending throttled request", g, a.method), v.send.request()
                     }, h.throttle)) : (v.debug("Sending request", g, a.method), v.send.request(), v.timer = setTimeout(function() {}, h.throttle)) : (v.debug("Sending request", g, a.method), v.send.request()))) : void 0) : void v.error(C.missingURL))
                 },
                 should: {
                     removeError: function() {
                         return h.hideError === !0 || "auto" === h.hideError && !v.is.form()
                     }
                 },
                 is: {
                     disabled: function() {
                         return T.filter(x.disabled).length > 0
                     },
                     form: function() {
                         return T.is("form") || R.is("form")
                     },
                     mocked: function() {
                         return h.mockResponse || h.mockResponseAsync || h.response || h.responseAsync
                     },
                     input: function() {
                         return T.is("input")
                     },
                     loading: function() {
                         return v.request && "pending" == v.request.state()
                     },
                     abortedRequest: function(e) {
                         return e && e.readyState !== i && 0 === e.readyState ? (v.verbose("XHR request determined to be aborted"), !0) : (v.verbose("XHR request was not aborted"), !1)
                     },
                     validResponse: function(t) {
                         return "json" !== h.dataType && "jsonp" !== h.dataType || !e.isFunction(h.successTest) ? (v.verbose("Response is not JSON, skipping validation", h.successTest, t), !0) : (v.debug("Checking JSON returned success", h.successTest, t), h.successTest(t) ? (v.debug("Response passed success test", t), !0) : (v.debug("Response failed success test", t), !1))
                     }
                 },
                 was: {
                     cancelled: function() {
                         return v.cancelled || !1
                     },
                     succesful: function() {
                         return v.request && "resolved" == v.request.state()
                     },
                     failure: function() {
                         return v.request && "rejected" == v.request.state()
                     },
                     complete: function() {
                         return v.request && ("resolved" == v.request.state() || "rejected" == v.request.state())
                     }
                 },
                 add: {
                     urlData: function(t, n) {
                         var o, a;
                         return t && (o = t.match(h.regExp.required), a = t.match(h.regExp.optional), n = n || h.urlData, o && (v.debug("Looking for required URL variables", o), e.each(o, function(o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];
                             return s === i ? (v.error(C.requiredParameter, r, t), t = !1, !1) : (v.verbose("Found required variable", r, s), s = h.encodeParameters ? v.get.urlEncodedValue(s) : s, t = t.replace(a, s), void 0)
                         })), a && (v.debug("Looking for optional URL variables", o), e.each(a, function(o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];
                             s !== i ? (v.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (v.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""))
                         }))), t
                     },
                     formData: function(t) {
                         var n, o = e.fn.serializeObject !== i,
                             a = o ? A.serializeObject() : A.serialize();
                         return t = t || h.data, n = e.isPlainObject(t), n ? o ? (v.debug("Extending existing data with form data", t, a), t = e.extend(!0, {}, t, a)) : (v.error(C.missingSerialize), v.debug("Cant extend data. Replacing data with form data", t, a), t = a) : (v.debug("Adding form data", a), t = a), t
                     }
                 },
                 send: {
                     request: function() {
                         v.set.loading(), v.request = v.create.request(), v.is.mocked() ? v.mockedXHR = v.create.mockedXHR() : v.xhr = v.create.xhr(), h.onRequest.call(P, v.request, v.xhr)
                     }
                 },
                 event: {
                     trigger: function(e) {
                         v.query(), ("submit" == e.type || "click" == e.type) && e.preventDefault()
                     },
                     xhr: {
                         always: function() {},
                         done: function(t, n, i) {
                             var o = this,
                                 a = (new Date).getTime() - p,
                                 r = h.loadingDuration - a,
                                 s = e.isFunction(h.onResponse) ? h.onResponse.call(o, e.extend(!0, {}, t)) : !1;
                             r = r > 0 ? r : 0, s && (v.debug("Modified API response in onResponse callback", h.onResponse, s, t), t = s), r > 0 && v.debug("Response completed early delaying state change by", r), setTimeout(function() {
                                 v.is.validResponse(t) ? v.request.resolveWith(o, [t, i]) : v.request.rejectWith(o, [i, "invalid"])
                             }, r)
                         },
                         fail: function(e, t, n) {
                             var i = this,
                                 o = (new Date).getTime() - p,
                                 a = h.loadingDuration - o;
                             a = a > 0 ? a : 0, a > 0 && v.debug("Response completed early delaying state change by", a), setTimeout(function() {
                                 v.is.abortedRequest(e) ? v.request.rejectWith(i, [e, "aborted", n]) : v.request.rejectWith(i, [e, "error", t, n])
                             }, a)
                         }
                     },
                     request: {
                         done: function(e, t) {
                             v.debug("Successful API Response", e), "local" === h.cache && f && (v.write.cachedResponse(f, e), v.debug("Saving server response locally", v.cache)), h.onSuccess.call(P, e, T, t)
                         },
                         complete: function(e, t) {
                             var n, i;
                             v.was.succesful() ? (i = e, n = t) : (n = e, i = v.get.responseFromXHR(n)), v.remove.loading(), h.onComplete.call(P, i, T, n)
                         },
                         fail: function(e, t, n) {
                             var o = v.get.responseFromXHR(e),
                                 r = v.get.errorFromRequest(o, t, n);
                             "aborted" == t ? (v.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), h.onAbort.call(P, t, T, e)) : "invalid" == t ? v.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (v.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && v.error(C.statusMessage + n, a.url), h.onError.call(P, r, T, e)), h.errorDuration && "aborted" !== t && (v.debug("Adding error state"), v.set.error(), v.should.removeError() && setTimeout(v.remove.error, h.errorDuration)), v.debug("API Request failed", r, e), h.onFailure.call(P, o, T, e)
                         }
                     }
                 },
                 create: {
                     request: function() {
                         return e.Deferred().always(v.event.request.complete).done(v.event.request.done).fail(v.event.request.fail)
                     },
                     mockedXHR: function() {
                         var t, n, i, o = !1,
                             a = !1,
                             r = !1,
                             s = h.mockResponse || h.response,
                             c = h.mockResponseAsync || h.responseAsync;
                         return i = e.Deferred().always(v.event.xhr.complete).done(v.event.xhr.done).fail(v.event.xhr.fail), s ? (e.isFunction(s) ? (v.debug("Using specified synchronous callback", s), n = s.call(P, m)) : (v.debug("Using settings specified response", s), n = s), i.resolveWith(P, [n, o, {
                             responseText: n
                         }])) : e.isFunction(c) && (t = function(e) {
                             v.debug("Async callback returned response", e), e ? i.resolveWith(P, [e, o, {
                                 responseText: e
                             }]) : i.rejectWith(P, [{
                                 responseText: e
                             }, a, r])
                         }, v.debug("Using specified async response callback", c), c.call(P, m, t)), i
                     },
                     xhr: function() {
                         var t;
                         return t = e.ajax(a).always(v.event.xhr.always).done(v.event.xhr.done).fail(v.event.xhr.fail), v.verbose("Created server request", t), t
                     }
                 },
                 set: {
                     error: function() {
                         v.verbose("Adding error state to element", R), R.addClass(w.error)
                     },
                     loading: function() {
                         v.verbose("Adding loading state to element", R), R.addClass(w.loading), p = (new Date).getTime()
                     }
                 },
                 remove: {
                     error: function() {
                         v.verbose("Removing error state from element", R), R.removeClass(w.error)
                     },
                     loading: function() {
                         v.verbose("Removing loading state from element", R), R.removeClass(w.loading)
                     }
                 },
                 get: {
                     responseFromXHR: function(t) {
                         return e.isPlainObject(t) ? "json" == h.dataType || "jsonp" == h.dataType ? v.decode.json(t.responseText) : t.responseText : !1
                     },
                     errorFromRequest: function(t, n, o) {
                         return e.isPlainObject(t) && t.error !== i ? t.error : h.error[n] !== i ? h.error[n] : o
                     },
                     request: function() {
                         return v.request || !1
                     },
                     xhr: function() {
                         return v.xhr || !1
                     },
                     settings: function() {
                         var t;
                         return t = h.beforeSend.call(P, h), t && (t.success !== i && (v.debug("Legacy success callback detected", t), v.error(C.legacyParameters, t.success), t.onSuccess = t.success), t.failure !== i && (v.debug("Legacy failure callback detected", t), v.error(C.legacyParameters, t.failure), t.onFailure = t.failure), t.complete !== i && (v.debug("Legacy complete callback detected", t), v.error(C.legacyParameters, t.complete), t.onComplete = t.complete)), t === i && v.error(C.noReturnedValue), t !== i ? e.extend(!0, {}, t) : e.extend(!0, {}, h)
                     },
                     urlEncodedValue: function(e) {
                         var n = t.decodeURIComponent(e),
                             i = t.encodeURIComponent(e),
                             o = n !== e;
                         return o ? (v.debug("URL value is already encoded, avoiding double encoding", e), e) : (v.verbose("Encoding value using encodeURIComponent", e, i), i)
                     },
                     defaultData: function() {
                         var t = {};
                         return e.isWindow(E) || (v.is.input() ? t.value = T.val() : v.is.form() && (t.text = T.text())), t
                     },
                     event: function() {
                         return e.isWindow(E) || "now" == h.on ? (v.debug("API called without element, no events attached"), !1) : "auto" == h.on ? T.is("input") ? E.oninput !== i ? "input" : E.onpropertychange !== i ? "propertychange" : "keyup" : T.is("form") ? "submit" : "click" : h.on
                     },
                     templatedURL: function(e) {
                         if (e = e || T.data(y.action) || h.action || !1, f = T.data(y.url) || h.url || !1) return v.debug("Using specified url", f), f;
                         if (e) {
                             if (v.debug("Looking up url for action", e, h.api), h.api[e] === i && !v.is.mocked()) return void v.error(C.missingAction, h.action, h.api);
                             f = h.api[e]
                         } else v.is.form() && (f = T.attr("action") || R.attr("action") || !1, v.debug("No url or action specified, defaulting to form action", f));
                         return f
                     }
                 },
                 abort: function() {
                     var e = v.get.xhr();
                     e && "resolved" !== e.state() && (v.debug("Cancelling API request"), e.abort())
                 },
                 reset: function() {
                     v.remove.error(), v.remove.loading()
                 },
                 setting: function(t, n) {
                     if (v.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         h[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 },
                 debug: function() {
                     h.debug && (h.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), v.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     h.verbose && h.debug && (h.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), v.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     v.error = Function.prototype.bind.call(console.error, console, h.name + ":"), v.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             "Execution Time": n
                         })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500)
                     },
                     display: function() {
                         var t = h.name + ":",
                             n = 0;
                         s = !1, clearTimeout(v.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = F;
                     return n = n || d, a = E || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (v.error(C.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (F === i && v.initialize(), v.invoke(l)) : (F !== i && F.invoke("destroy"), v.initialize())
         }), o !== i ? o : this
     }, e.api.settings = {
         name: "API",
         namespace: "api",
         debug: !1,
         verbose: !1,
         performance: !0,
         api: {},
         cache: !0,
         interruptRequests: !0,
         on: "auto",
         stateContext: !1,
         loadingDuration: 0,
         hideError: "auto",
         errorDuration: 2e3,
         encodeParameters: !0,
         action: !1,
         url: !1,
         base: "",
         urlData: {},
         defaultData: !0,
         serializeForm: !1,
         throttle: 0,
         throttleFirstRequest: !0,
         method: "get",
         data: {},
         dataType: "json",
         mockResponse: !1,
         mockResponseAsync: !1,
         response: !1,
         responseAsync: !1,
         beforeSend: function(e) {
             return e
         },
         beforeXHR: function(e) {},
         onRequest: function(e, t) {},
         onResponse: !1,
         onSuccess: function(e, t) {},
         onComplete: function(e, t) {},
         onFailure: function(e, t) {},
         onError: function(e, t) {},
         onAbort: function(e, t) {},
         successTest: !1,
         error: {
             beforeSend: "The before send function has aborted the request",
             error: "There was an error with your request",
             exitConditions: "API Request Aborted. Exit conditions met",
             JSONParse: "JSON could not be parsed during error handling",
             legacyParameters: "You are using legacy API success callback names",
             method: "The method you called is not defined",
             missingAction: "API action used but no url was defined",
             missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
             missingURL: "No URL specified for api event",
             noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
             noStorage: "Caching responses locally requires session storage",
             parseError: "There was an error parsing your request",
             requiredParameter: "Missing a required URL parameter: ",
             statusMessage: "Server gave an error: ",
             timeout: "Your request timed out"
         },
         regExp: {
             required: /\{\$*[A-z0-9]+\}/g,
             optional: /\{\/\$*[A-z0-9]+\}/g
         },
         className: {
             loading: "loading",
             error: "error"
         },
         selector: {
             disabled: ".disabled",
             form: "form"
         },
         metadata: {
             action: "action",
             url: "url"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.state = function(t) {
         var o, a = e(this),
             r = a.selector || "",
             s = ("ontouchstart" in n.documentElement, (new Date).getTime()),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var n, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
                 f = m.error,
                 g = m.metadata,
                 p = m.className,
                 v = m.namespace,
                 h = m.states,
                 b = m.text,
                 y = "." + v,
                 x = v + "-module",
                 C = e(this),
                 w = this,
                 k = C.data(x);
             n = {
                 initialize: function() {
                     n.verbose("Initializing module"), m.automatic && n.add.defaults(), m.context && "" !== r ? e(m.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : C.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate()
                 },
                 instantiate: function() {
                     n.verbose("Storing instance of module", n), k = n, C.data(x, n)
                 },
                 destroy: function() {
                     n.verbose("Destroying previous module", k), C.off(y).removeData(x)
                 },
                 refresh: function() {
                     n.verbose("Refreshing selector cache"), C = e(w)
                 },
                 add: {
                     defaults: function() {
                         var o = t && e.isPlainObject(t.states) ? t.states : {};
                         e.each(m.defaults, function(t, a) {
                             n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, w), e.extend(m.states, a, o))
                         })
                     }
                 },
                 is: {
                     active: function() {
                         return C.hasClass(p.active)
                     },
                     loading: function() {
                         return C.hasClass(p.loading)
                     },
                     inactive: function() {
                         return !C.hasClass(p.active)
                     },
                     state: function(e) {
                         return p[e] === i ? !1 : C.hasClass(p[e])
                     },
                     enabled: function() {
                         return !C.is(m.filter.active)
                     },
                     disabled: function() {
                         return C.is(m.filter.active)
                     },
                     textEnabled: function() {
                         return !C.is(m.filter.text)
                     },
                     button: function() {
                         return C.is(".button:not(a, .submit)")
                     },
                     input: function() {
                         return C.is("input")
                     },
                     progress: function() {
                         return C.is(".ui.progress")
                     }
                 },
                 allow: function(e) {
                     n.debug("Now allowing state", e), h[e] = !0
                 },
                 disallow: function(e) {
                     n.debug("No longer allowing", e), h[e] = !1
                 },
                 allows: function(e) {
                     return h[e] || !1
                 },
                 enable: function() {
                     C.removeClass(p.disabled)
                 },
                 disable: function() {
                     C.addClass(p.disabled)
                 },
                 setState: function(e) {
                     n.allows(e) && C.addClass(p[e])
                 },
                 removeState: function(e) {
                     n.allows(e) && C.removeClass(p[e])
                 },
                 toggle: {
                     state: function() {
                         var t, o;
                         if (n.allows("active") && n.is.enabled()) {
                             if (n.refresh(), e.fn.api !== i)
                                 if (t = C.api("get request"), o = C.api("was cancelled")) n.debug("API Request cancelled by beforesend"), m.activateTest = function() {
                                     return !1
                                 }, m.deactivateTest = function() {
                                     return !1
                                 };
                                 else if (t) return void n.listenTo(t);
                             n.change.state()
                         }
                     }
                 },
                 listenTo: function(t) {
                     n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function() {
                         "resolved" == t.state() ? (n.debug("API request succeeded"), m.activateTest = function() {
                             return !0
                         }, m.deactivateTest = function() {
                             return !0
                         }) : (n.debug("API request failed"), m.activateTest = function() {
                             return !1
                         }, m.deactivateTest = function() {
                             return !1
                         }), n.change.state()
                     }))
                 },
                 change: {
                     state: function() {
                         n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), m.sync && n.sync(), m.onChange.call(w)
                     },
                     text: function() {
                         n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)))
                     }
                 },
                 activate: function() {
                     m.activateTest.call(w) && (n.debug("Setting state to active"), C.addClass(p.active), n.update.text(b.active), m.onActivate.call(w))
                 },
                 deactivate: function() {
                     m.deactivateTest.call(w) && (n.debug("Setting state to inactive"), C.removeClass(p.active), n.update.text(b.inactive), m.onDeactivate.call(w))
                 },
                 sync: function() {
                     n.verbose("Syncing other buttons to current state"), a.not(C).state(n.is.active() ? "activate" : "deactivate")
                 },
                 get: {
                     text: function() {
                         return m.selector.text ? C.find(m.selector.text).text() : C.html()
                     },
                     textFor: function(e) {
                         return b[e] || !1
                     }
                 },
                 flash: {
                     text: function(e, t, i) {
                         var o = n.get.text();
                         n.debug("Flashing text message", e, t), e = e || m.text.flash, t = t || m.flashDuration, i = i || function() {}, n.update.text(e), setTimeout(function() {
                             n.update.text(o), i.call(w)
                         }, t)
                     }
                 },
                 reset: {
                     text: function() {
                         var e = b.active || C.data(g.storedText),
                             t = b.inactive || C.data(g.storedText);
                         n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
                     }
                 },
                 update: {
                     text: function(e) {
                         var t = n.get.text();
                         e && e !== t ? (n.debug("Updating text", e), m.selector.text ? C.data(g.storedText, e).find(m.selector.text).text(e) : C.data(g.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e)
                     }
                 },
                 setting: function(t, o) {
                     if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (o === i) return m[t];
                         m[t] = o
                     }
                 },
                 internal: function(t, o) {
                     if (e.isPlainObject(t)) e.extend(!0, n, t);
                     else {
                         if (o === i) return n[t];
                         n[t] = o
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), n.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), n.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     n.error = Function.prototype.bind.call(console.error, console, m.name + ":"), n.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, i, o;
                         m.performance && (t = (new Date).getTime(), o = s || t, i = t - o, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: w,
                             "Execution Time": i
                         })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500)
                     },
                     display: function() {
                         var t = m.name + ":",
                             o = 0;
                         s = !1, clearTimeout(n.performance.timer), e.each(c, function(e, t) {
                             o += t["Execution Time"]
                         }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, a, r) {
                     var s, c, l, u = k;
                     return a = a || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(o, a) {
                         var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && o != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (c = u[a], !1) : (n.error(f.method, t), !1);
                             u = u[a]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, a) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (k === i && n.initialize(), n.invoke(l)) : (k !== i && k.invoke("destroy"), n.initialize())
         }), o !== i ? o : this
     }, e.fn.state.settings = {
         name: "State",
         debug: !1,
         verbose: !1,
         namespace: "state",
         performance: !0,
         onActivate: function() {},
         onDeactivate: function() {},
         onChange: function() {},
         activateTest: function() {
             return !0
         },
         deactivateTest: function() {
             return !0
         },
         automatic: !0,
         sync: !1,
         flashDuration: 1e3,
         filter: {
             text: ".loading, .disabled",
             active: ".disabled"
         },
         context: !1,
         error: {
             beforeSend: "The before send function has cancelled state change",
             method: "The method you called is not defined."
         },
         metadata: {
             promise: "promise",
             storedText: "stored-text"
         },
         className: {
             active: "active",
             disabled: "disabled",
             error: "error",
             loading: "loading",
             success: "success",
             warning: "warning"
         },
         selector: {
             text: !1
         },
         defaults: {
             input: {
                 disabled: !0,
                 loading: !0,
                 active: !0
             },
             button: {
                 disabled: !0,
                 loading: !0,
                 active: !0
             },
             progress: {
                 active: !0,
                 success: !0,
                 warning: !0,
                 error: !0
             }
         },
         states: {
             active: !0,
             disabled: !0,
             error: !0,
             loading: !0,
             success: !0,
             warning: !0
         },
         text: {
             disabled: !1,
             flash: !1,
             hover: !1,
             active: !1,
             inactive: !1,
             activate: !1,
             deactivate: !1
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.visibility = function(o) {
         var a, r = e(this),
             s = r.selector || "",
             c = (new Date).getTime(),
             l = [],
             u = arguments[0],
             d = "string" == typeof u,
             m = [].slice.call(arguments, 1);
         return r.each(function() {
             var r, f, g, p = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
                 v = p.className,
                 h = p.namespace,
                 b = p.error,
                 y = p.metadata,
                 x = "." + h,
                 C = "module-" + h,
                 w = e(t),
                 k = e(this),
                 S = e(p.context),
                 T = (k.selector || "", k.data(C)),
                 A = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 },
                 R = this,
                 E = !1;
             g = {
                 initialize: function() {
                     g.debug("Initializing", p), g.setup.cache(), g.should.trackChanges() && ("image" == p.type && g.setup.image(), "fixed" == p.type && g.setup.fixed(), p.observeChanges && g.observeChanges(), g.bind.events()), g.save.position(), g.is.visible() || g.error(b.visible, k), p.initialCheck && g.checkVisibility(), g.instantiate()
                 },
                 instantiate: function() {
                     g.debug("Storing instance", g), k.data(C, g), T = g
                 },
                 destroy: function() {
                     g.verbose("Destroying previous module"), f && f.disconnect(), w.off("load" + x, g.event.load).off("resize" + x, g.event.resize), S.off("scrollchange" + x, g.event.scrollchange), k.off(x).removeData(C)
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (f = new MutationObserver(function(e) {
                         g.verbose("DOM tree modified, updating visibility calculations"), g.timer = setTimeout(function() {
                             g.verbose("DOM tree modified, updating sticky menu"), g.refresh()
                         }, 100)
                     }), f.observe(R, {
                         childList: !0,
                         subtree: !0
                     }), g.debug("Setting up mutation observer", f))
                 },
                 bind: {
                     events: function() {
                         g.verbose("Binding visibility events to scroll and resize"), p.refreshOnLoad && w.on("load" + x, g.event.load), w.on("resize" + x, g.event.resize), S.off("scroll" + x).on("scroll" + x, g.event.scroll).on("scrollchange" + x, g.event.scrollchange)
                     }
                 },
                 event: {
                     resize: function() {
                         g.debug("Window resized"), p.refreshOnResize && A(g.refresh)
                     },
                     load: function() {
                         g.debug("Page finished loading"), A(g.refresh)
                     },
                     scroll: function() {
                         p.throttle ? (clearTimeout(g.timer), g.timer = setTimeout(function() {
                             S.triggerHandler("scrollchange" + x, [S.scrollTop()])
                         }, p.throttle)) : A(function() {
                             S.triggerHandler("scrollchange" + x, [S.scrollTop()])
                         })
                     },
                     scrollchange: function(e, t) {
                         g.checkVisibility(t)
                     }
                 },
                 precache: function(t, i) {
                     t instanceof Array || (t = [t]);
                     for (var o = t.length, a = 0, r = [], s = n.createElement("img"), c = function() {
                             a++, a >= t.length && e.isFunction(i) && i()
                         }; o--;) s = n.createElement("img"), s.onload = c, s.onerror = c, s.src = t[o], r.push(s)
                 },
                 enableCallbacks: function() {
                     g.debug("Allowing callbacks to occur"), E = !1
                 },
                 disableCallbacks: function() {
                     g.debug("Disabling all callbacks temporarily"), E = !0
                 },
                 should: {
                     trackChanges: function() {
                         return d ? (g.debug("One time query, no need to bind events"), !1) : (g.debug("Callbacks being attached"), !0)
                     }
                 },
                 setup: {
                     cache: function() {
                         g.cache = {
                             occurred: {},
                             screen: {},
                             element: {}
                         }
                     },
                     image: function() {
                         var e = k.data(y.src);
                         e && (g.verbose("Lazy loading image", e), p.once = !0, p.observeChanges = !1, p.onOnScreen = function() {
                             g.debug("Image on screen", R), g.precache(e, function() {
                                 g.set.image(e)
                             })
                         })
                     },
                     fixed: function() {
                         g.debug("Setting up fixed"), p.once = !1, p.observeChanges = !1, p.initialCheck = !0, p.refreshOnLoad = !0, o.transition || (p.transition = !1), g.create.placeholder(), g.debug("Added placeholder", r), p.onTopPassed = function() {
                             g.debug("Element passed, adding fixed position", k), g.show.placeholder(), g.set.fixed(), p.transition && e.fn.transition !== i && k.transition(p.transition, p.duration)
                         }, p.onTopPassedReverse = function() {
                             g.debug("Element returned to position, removing fixed", k), g.hide.placeholder(), g.remove.fixed()
                         }
                     }
                 },
                 create: {
                     placeholder: function() {
                         g.verbose("Creating fixed position placeholder"), r = k.clone(!1).css("display", "none").addClass(v.placeholder).insertAfter(k)
                     }
                 },
                 show: {
                     placeholder: function() {
                         g.verbose("Showing placeholder"), r.css("display", "block").css("visibility", "hidden")
                     }
                 },
                 hide: {
                     placeholder: function() {
                         g.verbose("Hiding placeholder"), r.css("display", "none").css("visibility", "")
                     }
                 },
                 set: {
                     fixed: function() {
                         g.verbose("Setting element to fixed position"), k.addClass(v.fixed).css({
                             position: "fixed",
                             top: p.offset + "px",
                             left: "auto",
                             zIndex: "1"
                         })
                     },
                     image: function(t) {
                         k.attr("src", t), p.transition ? e.fn.transition !== i ? k.transition(p.transition, p.duration) : k.fadeIn(p.duration) : k.show()
                     }
                 },
                 is: {
                     onScreen: function() {
                         var e = g.get.elementCalculations();
                         return e.onScreen
                     },
                     offScreen: function() {
                         var e = g.get.elementCalculations();
                         return e.offScreen
                     },
                     visible: function() {
                         return g.cache && g.cache.element ? !(0 === g.cache.element.width && 0 === g.cache.element.offset.top) : !1
                     }
                 },
                 refresh: function() {
                     g.debug("Refreshing constants (width/height)"), "fixed" == p.type && (g.remove.fixed(), g.remove.occurred()), g.reset(), g.save.position(), p.checkOnRefresh && g.checkVisibility(), p.onRefresh.call(R)
                 },
                 reset: function() {
                     g.verbose("Reseting all cached values"), e.isPlainObject(g.cache) && (g.cache.screen = {}, g.cache.element = {})
                 },
                 checkVisibility: function(e) {
                     g.verbose("Checking visibility of element", g.cache.element), !E && g.is.visible() && (g.save.scroll(e), g.save.calculations(), g.passed(), g.passingReverse(), g.topVisibleReverse(), g.bottomVisibleReverse(), g.topPassedReverse(), g.bottomPassedReverse(), g.onScreen(), g.offScreen(), g.passing(), g.topVisible(), g.bottomVisible(), g.topPassed(), g.bottomPassed(), p.onUpdate && p.onUpdate.call(R, g.get.elementCalculations()))
                 },
                 passed: function(t, n) {
                     var o = g.get.elementCalculations();
                     if (t && n) p.onPassed[t] = n;
                     else {
                         if (t !== i) return g.get.pixelsPassed(t) > o.pixelsPassed;
                         o.passing && e.each(p.onPassed, function(e, t) {
                             o.bottomVisible || o.pixelsPassed > g.get.pixelsPassed(e) ? g.execute(t, e) : p.once || g.remove.occurred(t)
                         })
                     }
                 },
                 onScreen: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onOnScreen,
                         o = "onScreen";
                     return e && (g.debug("Adding callback for onScreen", e), p.onOnScreen = e), t.onScreen ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.onOnScreen : void 0
                 },
                 offScreen: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onOffScreen,
                         o = "offScreen";
                     return e && (g.debug("Adding callback for offScreen", e), p.onOffScreen = e), t.offScreen ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.onOffScreen : void 0
                 },
                 passing: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onPassing,
                         o = "passing";
                     return e && (g.debug("Adding callback for passing", e), p.onPassing = e), t.passing ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.passing : void 0
                 },
                 topVisible: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onTopVisible,
                         o = "topVisible";
                     return e && (g.debug("Adding callback for top visible", e), p.onTopVisible = e), t.topVisible ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.topVisible : void 0
                 },
                 bottomVisible: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onBottomVisible,
                         o = "bottomVisible";
                     return e && (g.debug("Adding callback for bottom visible", e), p.onBottomVisible = e), t.bottomVisible ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.bottomVisible : void 0
                 },
                 topPassed: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onTopPassed,
                         o = "topPassed";
                     return e && (g.debug("Adding callback for top passed", e), p.onTopPassed = e), t.topPassed ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.topPassed : void 0
                 },
                 bottomPassed: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onBottomPassed,
                         o = "bottomPassed";
                     return e && (g.debug("Adding callback for bottom passed", e), p.onBottomPassed = e), t.bottomPassed ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.bottomPassed : void 0
                 },
                 passingReverse: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onPassingReverse,
                         o = "passingReverse";
                     return e && (g.debug("Adding callback for passing reverse", e), p.onPassingReverse = e), t.passing ? p.once || g.remove.occurred(o) : g.get.occurred("passing") && g.execute(n, o), e !== i ? !t.passing : void 0
                 },
                 topVisibleReverse: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onTopVisibleReverse,
                         o = "topVisibleReverse";
                     return e && (g.debug("Adding callback for top visible reverse", e), p.onTopVisibleReverse = e), t.topVisible ? p.once || g.remove.occurred(o) : g.get.occurred("topVisible") && g.execute(n, o), e === i ? !t.topVisible : void 0
                 },
                 bottomVisibleReverse: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onBottomVisibleReverse,
                         o = "bottomVisibleReverse";
                     return e && (g.debug("Adding callback for bottom visible reverse", e), p.onBottomVisibleReverse = e), t.bottomVisible ? p.once || g.remove.occurred(o) : g.get.occurred("bottomVisible") && g.execute(n, o), e === i ? !t.bottomVisible : void 0
                 },
                 topPassedReverse: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onTopPassedReverse,
                         o = "topPassedReverse";
                     return e && (g.debug("Adding callback for top passed reverse", e), p.onTopPassedReverse = e), t.topPassed ? p.once || g.remove.occurred(o) : g.get.occurred("topPassed") && g.execute(n, o), e === i ? !t.onTopPassed : void 0
                 },
                 bottomPassedReverse: function(e) {
                     var t = g.get.elementCalculations(),
                         n = e || p.onBottomPassedReverse,
                         o = "bottomPassedReverse";
                     return e && (g.debug("Adding callback for bottom passed reverse", e), p.onBottomPassedReverse = e), t.bottomPassed ? p.once || g.remove.occurred(o) : g.get.occurred("bottomPassed") && g.execute(n, o), e === i ? !t.bottomPassed : void 0
                 },
                 execute: function(e, t) {
                     var n = g.get.elementCalculations(),
                         i = g.get.screenCalculations();
                     e = e || !1, e && (p.continuous ? (g.debug("Callback being called continuously", t, n), e.call(R, n, i)) : g.get.occurred(t) || (g.debug("Conditions met", t, n), e.call(R, n, i))), g.save.occurred(t)
                 },
                 remove: {
                     fixed: function() {
                         g.debug("Removing fixed position"), k.removeClass(v.fixed).css({
                             position: "",
                             top: "",
                             left: "",
                             zIndex: ""
                         })
                     },
                     occurred: function(e) {
                         if (e) {
                             var t = g.cache.occurred;
                             t[e] !== i && t[e] === !0 && (g.debug("Callback can now be called again", e), g.cache.occurred[e] = !1)
                         } else g.cache.occurred = {}
                     }
                 },
                 save: {
                     calculations: function() {
                         g.verbose("Saving all calculations necessary to determine positioning"), g.save.direction(), g.save.screenCalculations(), g.save.elementCalculations();

                     },
                     occurred: function(e) {
                         e && (g.cache.occurred[e] === i || g.cache.occurred[e] !== !0) && (g.verbose("Saving callback occurred", e), g.cache.occurred[e] = !0)
                     },
                     scroll: function(e) {
                         e = e + p.offset || S.scrollTop() + p.offset, g.cache.scroll = e
                     },
                     direction: function() {
                         var e, t = g.get.scroll(),
                             n = g.get.lastScroll();
                         return e = t > n && n ? "down" : n > t && n ? "up" : "static", g.cache.direction = e, g.cache.direction
                     },
                     elementPosition: function() {
                         var e = g.cache.element,
                             t = g.get.screenSize();
                         return g.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = k.offset(), e.width = k.outerWidth(), e.height = k.outerHeight(), g.cache.element = e, e
                     },
                     elementCalculations: function() {
                         var e = g.get.screenCalculations(),
                             t = g.get.elementPosition();
                         return p.includeMargin ? (t.margin = {}, t.margin.top = parseInt(k.css("margin-top"), 10), t.margin.bottom = parseInt(k.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topVisible = e.bottom >= t.top, t.topPassed = e.top >= t.top, t.bottomVisible = e.bottom >= t.bottom, t.bottomPassed = e.top >= t.bottom, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), g.cache.element = t, g.verbose("Updated element calculations", t), t
                     },
                     screenCalculations: function() {
                         var e = g.get.scroll();
                         return g.save.direction(), g.cache.screen.top = e, g.cache.screen.bottom = e + g.cache.screen.height, g.cache.screen
                     },
                     screenSize: function() {
                         g.verbose("Saving window position"), g.cache.screen = {
                             height: S.height()
                         }
                     },
                     position: function() {
                         g.save.screenSize(), g.save.elementPosition()
                     }
                 },
                 get: {
                     pixelsPassed: function(e) {
                         var t = g.get.elementCalculations();
                         return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                     },
                     occurred: function(e) {
                         return g.cache.occurred !== i ? g.cache.occurred[e] || !1 : !1
                     },
                     direction: function() {
                         return g.cache.direction === i && g.save.direction(), g.cache.direction
                     },
                     elementPosition: function() {
                         return g.cache.element === i && g.save.elementPosition(), g.cache.element
                     },
                     elementCalculations: function() {
                         return g.cache.element === i && g.save.elementCalculations(), g.cache.element
                     },
                     screenCalculations: function() {
                         return g.cache.screen === i && g.save.screenCalculations(), g.cache.screen
                     },
                     screenSize: function() {
                         return g.cache.screen === i && g.save.screenSize(), g.cache.screen
                     },
                     scroll: function() {
                         return g.cache.scroll === i && g.save.scroll(), g.cache.scroll
                     },
                     lastScroll: function() {
                         return g.cache.screen === i ? (g.debug("First scroll event, no last scroll could be found"), !1) : g.cache.screen.top
                     }
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, p, t);
                     else {
                         if (n === i) return p[t];
                         p[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         p.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: R,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
                     },
                     display: function() {
                         var t = p.name + ":",
                             n = 0;
                         c = !1, clearTimeout(g.performance.timer), e.each(l, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = T;
                     return n = n || m, o = R || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (g.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (T === i && g.initialize(), T.save.scroll(), T.save.calculations(), g.invoke(u)) : (T !== i && T.invoke("destroy"), g.initialize())
         }), a !== i ? a : this
     }, e.fn.visibility.settings = {
         name: "Visibility",
         namespace: "visibility",
         debug: !1,
         verbose: !1,
         performance: !0,
         observeChanges: !0,
         initialCheck: !0,
         refreshOnLoad: !0,
         refreshOnResize: !0,
         checkOnRefresh: !0,
         once: !0,
         continuous: !1,
         offset: 0,
         includeMargin: !1,
         context: t,
         throttle: !1,
         type: !1,
         transition: "fade in",
         duration: 1e3,
         onPassed: {},
         onOnScreen: !1,
         onOffScreen: !1,
         onPassing: !1,
         onTopVisible: !1,
         onBottomVisible: !1,
         onTopPassed: !1,
         onBottomPassed: !1,
         onPassingReverse: !1,
         onTopVisibleReverse: !1,
         onBottomVisibleReverse: !1,
         onTopPassedReverse: !1,
         onBottomPassedReverse: !1,
         onUpdate: !1,
         onRefresh: function() {},
         metadata: {
             src: "src"
         },
         className: {
             fixed: "fixed",
             placeholder: "placeholder"
         },
         error: {
             method: "The method you called is not defined.",
             visible: "Element is hidden, you must call refresh after element becomes visible"
         }
     }
 }(jQuery, window, document);