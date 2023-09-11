"use strict";
var Ol = Object.create;
var yr = Object.defineProperty;
var kl = Object.getOwnPropertyDescriptor;
var _l = Object.getOwnPropertyNames;
var Nl = Object.getPrototypeOf, Ll = Object.prototype.hasOwnProperty;
var q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Mt = (e, t) => { for (var r in t)
    yr(e, r, { get: t[r], enumerable: !0 }); }, Hi = (e, t, r, n) => { if (t && typeof t == "object" || typeof t == "function")
    for (let i of _l(t))
        !Ll.call(e, i) && i !== r && yr(e, i, { get: () => t[i], enumerable: !(n = kl(t, i)) || n.enumerable }); return e; };
var S = (e, t, r) => (r = e != null ? Ol(Nl(e)) : {}, Hi(t || !e || !e.__esModule ? yr(r, "default", { value: e, enumerable: !0 }) : r, e)), $l = e => Hi(yr({}, "__esModule", { value: !0 }), e);
var oo = q((ud, io) => {
    "use strict";
    var tt = 1e3, rt = tt * 60, nt = rt * 60, Ue = nt * 24, ql = Ue * 7, jl = Ue * 365.25;
    io.exports = function (e, t) { t = t || {}; var r = typeof e; if (r === "string" && e.length > 0)
        return Vl(e); if (r === "number" && isFinite(e))
        return t.long ? Kl(e) : Bl(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)); };
    function Vl(e) { if (e = String(e), !(e.length > 100)) {
        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y": return r * jl;
                case "weeks":
                case "week":
                case "w": return r * ql;
                case "days":
                case "day":
                case "d": return r * Ue;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h": return r * nt;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m": return r * rt;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s": return r * tt;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms": return r;
                default: return;
            }
        }
    } }
    function Bl(e) { var t = Math.abs(e); return t >= Ue ? Math.round(e / Ue) + "d" : t >= nt ? Math.round(e / nt) + "h" : t >= rt ? Math.round(e / rt) + "m" : t >= tt ? Math.round(e / tt) + "s" : e + "ms"; }
    function Kl(e) { var t = Math.abs(e); return t >= Ue ? Er(e, t, Ue, "day") : t >= nt ? Er(e, t, nt, "hour") : t >= rt ? Er(e, t, rt, "minute") : t >= tt ? Er(e, t, tt, "second") : e + " ms"; }
    function Er(e, t, r, n) { var i = t >= r * 1.5; return Math.round(e / r) + " " + n + (i ? "s" : ""); }
});
var Rn = q((cd, so) => {
    "use strict";
    function Ul(e) { r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = oo(), r.destroy = u, Object.keys(e).forEach(c => { r[c] = e[c]; }), r.names = [], r.skips = [], r.formatters = {}; function t(c) { let p = 0; for (let m = 0; m < c.length; m++)
        p = (p << 5) - p + c.charCodeAt(m), p |= 0; return r.colors[Math.abs(p) % r.colors.length]; } r.selectColor = t; function r(c) { let p, m = null, f, y; function g(...P) { if (!g.enabled)
        return; let T = g, C = Number(new Date), x = C - (p || C); T.diff = x, T.prev = p, T.curr = C, p = C, P[0] = r.coerce(P[0]), typeof P[0] != "string" && P.unshift("%O"); let A = 0; P[0] = P[0].replace(/%([a-zA-Z%])/g, (G, Ke) => { if (G === "%%")
        return "%"; A++; let $ = r.formatters[Ke]; if (typeof $ == "function") {
        let z = P[A];
        G = $.call(T, z), P.splice(A, 1), A--;
    } return G; }), r.formatArgs.call(T, P), (T.log || r.log).apply(T, P); } return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: !0, configurable: !1, get: () => m !== null ? m : (f !== r.namespaces && (f = r.namespaces, y = r.enabled(c)), y), set: P => { m = P; } }), typeof r.init == "function" && r.init(g), g; } function n(c, p) { let m = r(this.namespace + (typeof p > "u" ? ":" : p) + c); return m.log = this.log, m; } function i(c) { r.save(c), r.namespaces = c, r.names = [], r.skips = []; let p, m = (typeof c == "string" ? c : "").split(/[\s,]+/), f = m.length; for (p = 0; p < f; p++)
        m[p] && (c = m[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$"))); } function o() { let c = [...r.names.map(a), ...r.skips.map(a).map(p => "-" + p)].join(","); return r.enable(""), c; } function s(c) { if (c[c.length - 1] === "*")
        return !0; let p, m; for (p = 0, m = r.skips.length; p < m; p++)
        if (r.skips[p].test(c))
            return !1; for (p = 0, m = r.names.length; p < m; p++)
        if (r.names[p].test(c))
            return !0; return !1; } function a(c) { return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*"); } function l(c) { return c instanceof Error ? c.stack || c.message : c; } function u() { console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."); } return r.enable(r.load()), r; }
    so.exports = Ul;
});
var ao = q((ue, wr) => {
    "use strict";
    ue.formatArgs = Jl;
    ue.save = Gl;
    ue.load = Hl;
    ue.useColors = Ql;
    ue.storage = Wl();
    ue.destroy = (() => { let e = !1; return () => { e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")); }; })();
    ue.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function Ql() { return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/); }
    function Jl(e) { if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + wr.exports.humanize(this.diff), !this.useColors)
        return; let t = "color: " + this.color; e.splice(1, 0, t, "color: inherit"); let r = 0, n = 0; e[0].replace(/%[a-zA-Z%]/g, i => { i !== "%%" && (r++, i === "%c" && (n = r)); }), e.splice(n, 0, t); }
    ue.log = console.debug || console.log || (() => { });
    function Gl(e) { try {
        e ? ue.storage.setItem("debug", e) : ue.storage.removeItem("debug");
    }
    catch { } }
    function Hl() { let e; try {
        e = ue.storage.getItem("debug");
    }
    catch { } return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e; }
    function Wl() { try {
        return localStorage;
    }
    catch { } }
    wr.exports = Rn()(ue);
    var { formatters: zl } = wr.exports;
    zl.j = function (e) { try {
        return JSON.stringify(e);
    }
    catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
    } };
});
var Sn = q((pd, lo) => {
    "use strict";
    lo.exports = (e, t = process.argv) => { let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--"); return n !== -1 && (i === -1 || n < i); };
});
var Dn = q((md, co) => {
    "use strict";
    var Yl = require("os"), uo = require("tty"), de = Sn(), { env: B } = process, Ie;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Ie = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Ie = 1);
    "FORCE_COLOR" in B && (B.FORCE_COLOR === "true" ? Ie = 1 : B.FORCE_COLOR === "false" ? Ie = 0 : Ie = B.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(B.FORCE_COLOR, 10), 3));
    function Fn(e) { return e === 0 ? !1 : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }; }
    function In(e, t) { if (Ie === 0)
        return 0; if (de("color=16m") || de("color=full") || de("color=truecolor"))
        return 3; if (de("color=256"))
        return 2; if (e && !t && Ie === void 0)
        return 0; let r = Ie || 0; if (B.TERM === "dumb")
        return r; if (process.platform === "win32") {
        let n = Yl.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
    } if ("CI" in B)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(n => n in B) || B.CI_NAME === "codeship" ? 1 : r; if ("TEAMCITY_VERSION" in B)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(B.TEAMCITY_VERSION) ? 1 : 0; if (B.COLORTERM === "truecolor")
        return 3; if ("TERM_PROGRAM" in B) {
        let n = parseInt((B.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (B.TERM_PROGRAM) {
            case "iTerm.app": return n >= 3 ? 3 : 2;
            case "Apple_Terminal": return 2;
        }
    } return /-256(color)?$/i.test(B.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(B.TERM) || "COLORTERM" in B ? 1 : r; }
    function Zl(e) { let t = In(e, e && e.isTTY); return Fn(t); }
    co.exports = { supportsColor: Zl, stdout: Fn(In(!0, uo.isatty(1))), stderr: Fn(In(!0, uo.isatty(2))) };
});
var mo = q((H, vr) => {
    "use strict";
    var Xl = require("tty"), Pr = require("util");
    H.init = su;
    H.log = nu;
    H.formatArgs = tu;
    H.save = iu;
    H.load = ou;
    H.useColors = eu;
    H.destroy = Pr.deprecate(() => { }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    H.colors = [6, 2, 3, 4, 5, 1];
    try {
        let e = Dn();
        e && (e.stderr || e).level >= 2 && (H.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
    }
    catch { }
    H.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => { let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t]; return /^(yes|on|true|enabled)$/i.test(n) ? n = !0 : /^(no|off|false|disabled)$/i.test(n) ? n = !1 : n === "null" ? n = null : n = Number(n), e[r] = n, e; }, {});
    function eu() { return "colors" in H.inspectOpts ? !!H.inspectOpts.colors : Xl.isatty(process.stderr.fd); }
    function tu(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
            let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
            e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + vr.exports.humanize(this.diff) + "\x1B[0m");
        }
        else
            e[0] = ru() + t + " " + e[0];
    }
    function ru() { return H.inspectOpts.hideDate ? "" : new Date().toISOString() + " "; }
    function nu(...e) {
        return process.stderr.write(Pr.format(...e) + `
`);
    }
    function iu(e) { e ? process.env.DEBUG = e : delete process.env.DEBUG; }
    function ou() { return process.env.DEBUG; }
    function su(e) { e.inspectOpts = {}; let t = Object.keys(H.inspectOpts); for (let r = 0; r < t.length; r++)
        e.inspectOpts[t[r]] = H.inspectOpts[t[r]]; }
    vr.exports = Rn()(H);
    var { formatters: po } = vr.exports;
    po.o = function (e) {
        return this.inspectOpts.colors = this.useColors, Pr.inspect(e, this.inspectOpts).split(`
`).map(t => t.trim()).join(" ");
    };
    po.O = function (e) { return this.inspectOpts.colors = this.useColors, Pr.inspect(e, this.inspectOpts); };
});
var fo = q((dd, On) => {
    "use strict";
    typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? On.exports = ao() : On.exports = mo();
});
var Co = q((Qd, qn) => {
    "use strict";
    var M = qn.exports;
    qn.exports.default = M;
    var F = "\x1B[", St = "\x1B]", st = "\x07", Rr = ";", To = process.env.TERM_PROGRAM === "Apple_Terminal";
    M.cursorTo = (e, t) => { if (typeof e != "number")
        throw new TypeError("The `x` argument is required"); return typeof t != "number" ? F + (e + 1) + "G" : F + (t + 1) + ";" + (e + 1) + "H"; };
    M.cursorMove = (e, t) => { if (typeof e != "number")
        throw new TypeError("The `x` argument is required"); let r = ""; return e < 0 ? r += F + -e + "D" : e > 0 && (r += F + e + "C"), t < 0 ? r += F + -t + "A" : t > 0 && (r += F + t + "B"), r; };
    M.cursorUp = (e = 1) => F + e + "A";
    M.cursorDown = (e = 1) => F + e + "B";
    M.cursorForward = (e = 1) => F + e + "C";
    M.cursorBackward = (e = 1) => F + e + "D";
    M.cursorLeft = F + "G";
    M.cursorSavePosition = To ? "\x1B7" : F + "s";
    M.cursorRestorePosition = To ? "\x1B8" : F + "u";
    M.cursorGetPosition = F + "6n";
    M.cursorNextLine = F + "E";
    M.cursorPrevLine = F + "F";
    M.cursorHide = F + "?25l";
    M.cursorShow = F + "?25h";
    M.eraseLines = e => { let t = ""; for (let r = 0; r < e; r++)
        t += M.eraseLine + (r < e - 1 ? M.cursorUp() : ""); return e && (t += M.cursorLeft), t; };
    M.eraseEndLine = F + "K";
    M.eraseStartLine = F + "1K";
    M.eraseLine = F + "2K";
    M.eraseDown = F + "J";
    M.eraseUp = F + "1J";
    M.eraseScreen = F + "2J";
    M.scrollUp = F + "S";
    M.scrollDown = F + "T";
    M.clearScreen = "\x1Bc";
    M.clearTerminal = process.platform === "win32" ? `${M.eraseScreen}${F}0f` : `${M.eraseScreen}${F}3J${F}H`;
    M.beep = st;
    M.link = (e, t) => [St, "8", Rr, Rr, t, st, e, St, "8", Rr, Rr, st].join("");
    M.image = (e, t = {}) => { let r = `${St}1337;File=inline=1`; return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === !1 && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + st; };
    M.iTerm = { setCwd: (e = process.cwd()) => `${St}50;CurrentDir=${e}${st}`, annotation: (e, t = {}) => { let r = `${St}1337;`, n = typeof t.x < "u", i = typeof t.y < "u"; if ((n || i) && !(n && i && typeof t.length < "u"))
            throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined"); return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + st; } };
});
var Ro = q((Jd, Ao) => {
    "use strict";
    var mu = Dn(), at = Sn();
    function Mo(e) { if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
    } let t = (e || "").split(".").map(r => parseInt(r, 10)); return { major: t[0], minor: t[1], patch: t[2] }; }
    function jn(e) { let { env: t } = process; if ("FORCE_HYPERLINK" in t)
        return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0); if (at("no-hyperlink") || at("no-hyperlinks") || at("hyperlink=false") || at("hyperlink=never"))
        return !1; if (at("hyperlink=true") || at("hyperlink=always") || "NETLIFY" in t)
        return !0; if (!mu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
        return !1; if ("TERM_PROGRAM" in t) {
        let r = Mo(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
            case "iTerm.app": return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm": return r.major >= 20200620;
            case "vscode": return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
    } if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0")
            return !1;
        let r = Mo(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
    } return !1; }
    Ao.exports = { supportsHyperlink: jn, stdout: jn(process.stdout), stderr: jn(process.stderr) };
});
var Fo = q((Gd, Ft) => {
    "use strict";
    var du = Co(), Vn = Ro(), So = (e, t, { target: r = "stdout", ...n } = {}) => Vn[r] ? du.link(e, t) : n.fallback === !1 ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
    Ft.exports = (e, t, r = {}) => So(e, t, r);
    Ft.exports.stderr = (e, t, r = {}) => So(e, t, { target: "stderr", ...r });
    Ft.exports.isSupported = Vn.stdout;
    Ft.exports.stderr.isSupported = Vn.stderr;
});
var jo = q((mf, Ru) => { Ru.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } }; });
var Bo = q((df, Or) => {
    "use strict";
    var Su = require("fs"), Vo = require("path"), Fu = require("os"), Iu = jo(), Du = Iu.version, Ou = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ku(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Ou.exec(r)) != null;) {
            let i = n[1], o = n[2] || "";
            o = o.trim();
            let s = o[0];
            o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
    }
    function Qn(e) { console.log(`[dotenv@${Du}][DEBUG] ${e}`); }
    function _u(e) { return e[0] === "~" ? Vo.join(Fu.homedir(), e.slice(1)) : e; }
    function Nu(e) { let t = Vo.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override); e && (e.path != null && (t = _u(e.path)), e.encoding != null && (r = e.encoding)); try {
        let o = Dr.parse(Su.readFileSync(t, { encoding: r }));
        return Object.keys(o).forEach(function (s) { Object.prototype.hasOwnProperty.call(process.env, s) ? (i === !0 && (process.env[s] = o[s]), n && Qn(i === !0 ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s]; }), { parsed: o };
    }
    catch (o) {
        return n && Qn(`Failed to load ${t} ${o.message}`), { error: o };
    } }
    var Dr = { config: Nu, parse: ku };
    Or.exports.config = Dr.config;
    Or.exports.parse = Dr.parse;
    Or.exports = Dr;
});
var Ho = q((Ef, Go) => {
    "use strict";
    Go.exports = e => { let t = e.match(/^[ \t]*(?=\S)/gm); return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0; };
});
var zo = q((wf, Wo) => {
    "use strict";
    var ju = Ho();
    Wo.exports = e => { let t = ju(e); if (t === 0)
        return e; let r = new RegExp(`^[ \\t]{${t}}`, "gm"); return e.replace(r, ""); };
});
var Yo = q((Pf, Vu) => { Vu.exports = { name: "@prisma/engines-version", version: "5.2.0-25.2804dc98259d2ea960602aca6b8e7fdc03c1758f", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "2804dc98259d2ea960602aca6b8e7fdc03c1758f" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.17.5", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } }; });
var Wn = q(_r => {
    "use strict";
    Object.defineProperty(_r, "__esModule", { value: !0 });
    _r.enginesVersion = void 0;
    _r.enginesVersion = Yo().prisma.enginesVersion;
});
var ei = q((_f, es) => {
    "use strict";
    es.exports = (e, t = 1, r) => { if (r = { indent: " ", includeEmptyLines: !1, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``); if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``); if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``); if (t === 0)
        return e; let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm; return e.replace(n, r.indent.repeat(t)); };
});
var is = q(($f, ns) => {
    "use strict";
    ns.exports = ({ onlyFirst: e = !1 } = {}) => { let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"); return new RegExp(t, e ? void 0 : "g"); };
});
var ii = q((qf, os) => {
    "use strict";
    var Yu = is();
    os.exports = e => typeof e == "string" ? e.replace(Yu(), "") : e;
});
var ss = q((Vf, Nr) => {
    "use strict";
    Nr.exports = (e = {}) => { let t; if (e.repoUrl)
        t = e.repoUrl;
    else if (e.user && e.repo)
        t = `https://github.com/${e.user}/${e.repo}`;
    else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options"); let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"]; for (let i of n) {
        let o = e[i];
        if (o !== void 0) {
            if (i === "labels" || i === "projects") {
                if (!Array.isArray(o))
                    throw new TypeError(`The \`${i}\` option should be an array`);
                o = o.join(",");
            }
            r.searchParams.set(i, o);
        }
    } return r.toString(); };
    Nr.exports.default = Nr.exports;
});
var qi = q((oP, qa) => {
    "use strict";
    qa.exports = function () { function e(t, r, n, i, o) { return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1; } return function (t, r) { if (t === r)
        return 0; if (t.length > r.length) {
        var n = t;
        t = r, r = n;
    } for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);)
        i--, o--; for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s);)
        s++; if (i -= s, o -= s, i === 0 || o < 3)
        return o; var a = 0, l, u, c, p, m, f, y, g, P, T, C, x, A = []; for (l = 0; l < i; l++)
        A.push(l + 1), A.push(t.charCodeAt(s + l)); for (var pe = A.length - 1; a < o - 3;)
        for (P = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), C = r.charCodeAt(s + (p = a + 2)), x = r.charCodeAt(s + (m = a + 3)), f = a += 4, l = 0; l < pe; l += 2)
            y = A[l], g = A[l + 1], u = e(y, u, c, P, g), c = e(u, c, p, T, g), p = e(c, p, m, C, g), f = e(p, m, f, x, g), A[l] = f, m = p, p = c, c = u, u = y; for (; a < o;)
        for (P = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < pe; l += 2)
            y = A[l], A[l] = f = e(y, u, f, P, A[l + 1]), u = y; return f; }; }();
});
var Wm = {};
Mt(Wm, { DMMF: () => me, DMMFClass: () => At, Debug: () => kn, Decimal: () => Pe, Extensions: () => Cn, MetricsClient: () => pt, NotFoundError: () => Me, PrismaClientInitializationError: () => D, PrismaClientKnownRequestError: () => K, PrismaClientRustPanicError: () => ce, PrismaClientUnknownRequestError: () => U, PrismaClientValidationError: () => X, Public: () => Mn, Sql: () => se, Types: () => An, defineDmmfProperty: () => us, empty: () => ps, getPrismaClient: () => Fl, join: () => cs, makeStrictEnum: () => Il, objectEnumValues: () => jr, raw: () => ui, sqltag: () => ci, warnEnvConflicts: () => Dl, warnOnce: () => Lt });
module.exports = $l(Wm);
var Cn = {};
Mt(Cn, { defineExtension: () => Wi, getExtensionContext: () => zi });
function Wi(e) { return typeof e == "function" ? e : t => t.$extends(e); }
function zi(e) { return e; }
var Mn = {};
Mt(Mn, { validator: () => Yi });
function Yi(...e) { return t => t; }
var An = {};
Mt(An, { Extensions: () => Zi, Public: () => Xi, Result: () => eo, Utils: () => to });
var Zi = {};
var Xi = {};
var eo = {};
var to = {};
function ro(e, t) { for (let r of t)
    for (let n of Object.getOwnPropertyNames(r.prototype))
        Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(r.prototype, n) ?? Object.create(null)); }
var te = (e, t) => { let r = {}; for (let n of e) {
    let i = n[t];
    r[i] = n;
} return r; };
function no(e) { return e.substring(0, 1).toLowerCase() + e.substring(1); }
var hr = class {
    constructor({ datamodel: t }) { this.datamodel = t, this.datamodelEnumMap = this.getDatamodelEnumMap(), this.modelMap = this.getModelMap(), this.typeMap = this.getTypeMap(), this.typeAndModelMap = this.getTypeModelMap(); }
    getDatamodelEnumMap() { return te(this.datamodel.enums, "name"); }
    getModelMap() { return { ...te(this.datamodel.models, "name") }; }
    getTypeMap() { return { ...te(this.datamodel.types, "name") }; }
    getTypeModelMap() { return { ...this.getTypeMap(), ...this.getModelMap() }; }
}, xr = class {
    constructor({ mappings: t }) { this.mappings = t, this.mappingsMap = this.getMappingsMap(); }
    getMappingsMap() { return te(this.mappings.modelOperations, "model"); }
    getOtherOperationNames() { return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat(); }
}, br = class {
    constructor({ schema: t }) { this.outputTypeToMergedOutputType = t => ({ ...t, fields: t.fields }); this.schema = t, this.enumMap = this.getEnumMap(), this.outputTypes = this.getOutputTypes(), this.outputTypeMap = this.getMergedOutputTypeMap(), this.resolveOutputTypes(), this.inputObjectTypes = this.schema.inputObjectTypes, this.inputTypeMap = this.getInputTypeMap(), this.resolveInputTypes(), this.resolveFieldArgumentTypes(), this.queryType = this.outputTypeMap.prisma.Query, this.mutationType = this.outputTypeMap.prisma.Mutation, this.rootFieldMap = this.getRootFieldMap(); }
    get [Symbol.toStringTag]() { return "DMMFClass"; }
    resolveOutputTypes() { this.resolveOutputTypesInNamespace("prisma"), this.resolveOutputTypesInNamespace("model"); }
    resolveOutputTypesInNamespace(t) { for (let r of this.outputTypes[t]) {
        for (let n of r.fields) {
            if (typeof n.outputType.type != "string" || n.outputType.location === "scalar")
                continue;
            let i = n.outputType.namespace ?? "model";
            n.outputType.location === "outputObjectTypes" ? n.outputType.type = this.outputTypeMap[i][n.outputType.type] : n.outputType.location === "enumTypes" && (n.outputType.type = this.enumMap[i][n.outputType.type]);
        }
        r.fieldMap = te(r.fields, "name");
    } }
    resolveInputTypes() { this.resolveNamespaceInputTypes("model"), this.resolveNamespaceInputTypes("prisma"); }
    resolveNamespaceInputTypes(t) { let r = this.inputObjectTypes[t] ?? []; for (let n of r) {
        for (let i of n.fields)
            for (let o of i.inputTypes) {
                if (typeof o.type != "string")
                    continue;
                let s = o.type;
                if (o.location === "scalar")
                    continue;
                let a = o.namespace ?? "model";
                o.location === "inputObjectTypes" && (o.type = this.inputTypeMap[a][s]), o.location === "enumTypes" && (o.type = this.enumMap[a][s]);
            }
        n.fieldMap = te(n.fields, "name");
    } }
    resolveFieldArgumentTypes() { this.resolveFieldArgumentTypesInNamespace("model"), this.resolveFieldArgumentTypesInNamespace("prisma"); }
    resolveFieldArgumentTypesInNamespace(t) { let r = this.outputTypes[t] ?? []; for (let n of r)
        for (let i of n.fields)
            for (let o of i.args)
                for (let s of o.inputTypes) {
                    let a = s.type;
                    if (typeof a != "string" || s.location === "scalar")
                        continue;
                    let l = s.namespace ?? "model";
                    s.location === "inputObjectTypes" && (s.type = this.inputTypeMap[l][a]), s.location === "enumTypes" && (s.type = this.enumMap[l][a]);
                } }
    getOutputTypes() { return { model: this.schema.outputObjectTypes.model.map(this.outputTypeToMergedOutputType), prisma: this.schema.outputObjectTypes.prisma.map(this.outputTypeToMergedOutputType) }; }
    getEnumMap() { return { prisma: te(this.schema.enumTypes.prisma, "name"), model: this.schema.enumTypes.model ? te(this.schema.enumTypes.model, "name") : {} }; }
    hasEnumInNamespace(t, r) { return this.schema.enumTypes[r]?.find(n => n.name === t) !== void 0; }
    getMergedOutputTypeMap() { return { model: te(this.outputTypes.model, "name"), prisma: te(this.outputTypes.prisma, "name") }; }
    getInputTypeMap() { return { prisma: te(this.schema.inputObjectTypes.prisma, "name"), model: this.schema.inputObjectTypes.model ? te(this.schema.inputObjectTypes.model, "name") : {} }; }
    getRootFieldMap() { return { ...te(this.queryType.fields, "name"), ...te(this.mutationType.fields, "name") }; }
}, At = class {
    constructor(t) { return Object.assign(this, new hr(t), new xr(t), new br(t)); }
};
ro(At, [hr, xr, br]);
var me;
(t => { let e; (x => (x.findUnique = "findUnique", x.findUniqueOrThrow = "findUniqueOrThrow", x.findFirst = "findFirst", x.findFirstOrThrow = "findFirstOrThrow", x.findMany = "findMany", x.create = "create", x.createMany = "createMany", x.update = "update", x.updateMany = "updateMany", x.upsert = "upsert", x.delete = "delete", x.deleteMany = "deleteMany", x.groupBy = "groupBy", x.count = "count", x.aggregate = "aggregate", x.findRaw = "findRaw", x.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {})); })(me || (me = {}));
var Tr = S(fo()), au = 100, Rt = [];
typeof process < "u" && typeof process.stderr?.write != "function" && (Tr.default.log = console.debug ?? console.log);
function lu(e) { let t = (0, Tr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && Rt.push([e, ...n]), Rt.length > au && Rt.shift(), t("", ...n)), t); return r; }
var kn = Object.assign(lu, Tr.default);
function go(e = 7500) {
    let t = Rt.map(r => r.map(n => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
    return t.length < e ? t : t.slice(-e);
}
function yo() { Rt.length = 0; }
var k = kn;
var _n, ho, xo, bo, Eo = !0;
typeof process < "u" && ({ FORCE_COLOR: _n, NODE_DISABLE_COLORS: ho, NO_COLOR: xo, TERM: bo } = process.env || {}, Eo = process.stdout && process.stdout.isTTY);
var uu = { enabled: !ho && xo == null && bo !== "dumb" && (_n != null && _n !== "0" || Eo) };
function _(e, t) { let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`; return function (o) { return !uu.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i; }; }
var gd = _(0, 0), ie = _(1, 22), De = _(2, 22), yd = _(3, 23), re = _(4, 24), hd = _(7, 27), xd = _(8, 28), bd = _(9, 29), Ed = _(30, 39), fe = _(31, 39), Qe = _(32, 39), xe = _(33, 39), it = _(34, 39), wd = _(35, 39), Oe = _(36, 39), Pd = _(37, 39), Cr = _(90, 39), vd = _(90, 39), Td = _(40, 49), Cd = _(41, 49), Md = _(42, 49), Ad = _(43, 49), Rd = _(44, 49), Sd = _(45, 49), Fd = _(46, 49), Id = _(47, 49);
var wo = S(require("fs"));
function Nn() { let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY; if (!(e && wo.default.existsSync(e)) && process.arch === "ia32")
    throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)'); }
var Mr = "libquery_engine";
function Ln(e, t) { let r = t === "url"; return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Mr}.dylib.node` : `${Mr}-${e}.dylib.node` : r ? `${Mr}.so.node` : `${Mr}-${e}.so.node`; }
var ko = S(require("child_process")), Bn = S(require("fs/promises")), Fr = S(require("os"));
var Ar = Symbol("@ts-pattern/matcher"), Po = "@ts-pattern/anonymous-select-key", vo = function (e) { return !!(e && typeof e == "object"); }, $n = function (e) { return e && !!e[Ar]; }, cu = function e(t, r, n) { if (vo(t)) {
    if ($n(t)) {
        var i = t[Ar]().match(r), o = i.matched, s = i.selections;
        return o && s && Object.keys(s).forEach(function (l) { return n(l, s[l]); }), o;
    }
    if (!vo(r))
        return !1;
    if (Array.isArray(t))
        return !!Array.isArray(r) && t.length === r.length && t.every(function (l, u) { return e(l, r[u], n); });
    if (t instanceof Map)
        return r instanceof Map && Array.from(t.keys()).every(function (l) { return e(t.get(l), r.get(l), n); });
    if (t instanceof Set) {
        if (!(r instanceof Set))
            return !1;
        if (t.size === 0)
            return r.size === 0;
        if (t.size === 1) {
            var a = Array.from(t.values())[0];
            return $n(a) ? Array.from(r.values()).every(function (l) { return e(a, l, n); }) : r.has(a);
        }
        return Array.from(t.values()).every(function (l) { return r.has(l); });
    }
    return Object.keys(t).every(function (l) { var u, c = t[l]; return (l in r || $n(u = c) && u[Ar]().matcherType === "optional") && e(c, r[l], n); });
} return Object.is(r, t); };
function Je(e) { var t; return (t = {})[Ar] = function () { return { match: function (r) { return { matched: !!e(r) }; } }; }, t; }
var Ld = Je(function (e) { return !0; });
var $d = Je(function (e) { return typeof e == "string"; }), qd = Je(function (e) { return typeof e == "number"; }), jd = Je(function (e) { return typeof e == "boolean"; }), Vd = Je(function (e) { return typeof e == "bigint"; }), Bd = Je(function (e) { return typeof e == "symbol"; }), Kd = Je(function (e) { return e == null; });
function ot(e) { return new pu(e, []); }
var pu = function () { function e(r, n) { this.value = void 0, this.cases = void 0, this.value = r, this.cases = n; } var t = e.prototype; return t.with = function () { var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = []; return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function (s) { var a = {}, l = !!(i.some(function (u) { return cu(u, s, function (c, p) { a[c] = p; }); }) && o.every(function (u) { return u(s); })); return { matched: l, value: l && Object.keys(a).length ? Po in a ? a[Po] : a : s }; }, handler: n }])); }, t.when = function (r, n) { return new e(this.value, this.cases.concat([{ match: function (i) { return { matched: !!r(i), value: i }; }, handler: n }])); }, t.otherwise = function (r) { return new e(this.value, this.cases.concat([{ match: function (n) { return { matched: !0, value: n }; }, handler: r }])).run(); }, t.exhaustive = function () { return this.run(); }, t.run = function () { for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
    var o = this.cases[i], s = o.match(this.value);
    if (s.matched) {
        r = s.value, n = o.handler;
        break;
    }
} if (!n) {
    var a;
    try {
        a = JSON.stringify(this.value);
    }
    catch {
        a = this.value;
    }
    throw new Error("Pattern matching error: no pattern matches value " + a);
} return n(r, this.value); }, e; }();
var _o = require("util");
var Io = S(Fo());
function It(e) { return (0, Io.default)(e, e, { fallback: re }); }
var fu = { warn: xe("prisma:warn") }, gu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Dt(e, ...t) { gu.warn() && console.warn(`${fu.warn} ${e}`, ...t); }
var yu = (0, _o.promisify)(ko.default.exec), oe = k("prisma:get-platform"), hu = ["1.0.x", "1.1.x", "3.0.x"];
async function No() { let e = Fr.default.platform(), t = process.arch; if (e === "freebsd") {
    let s = await Ir("freebsd-version");
    if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
            return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
    }
} if (e !== "linux")
    return { platform: e, arch: t }; let r = await bu(), n = await Au(), i = wu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Pu(i); return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r }; }
function xu(e) {
    let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = ot({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
    return oe(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function bu() { let e = "/etc/os-release"; try {
    let t = await Bn.default.readFile(e, { encoding: "utf-8" });
    return xu(t);
}
catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
} }
function Eu(e) { let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e); if (t) {
    let r = `${t[1]}.x`;
    return Lo(r);
} }
function Do(e) { let t = /libssl\.so\.(\d)(\.\d)?/.exec(e); if (t) {
    let r = `${t[1]}${t[2] ?? ".0"}.x`;
    return Lo(r);
} }
function Lo(e) { let t = (() => { if (qo(e))
    return e; let r = e.split("."); return r[1] = "0", r.join("."); })(); if (hu.includes(t))
    return t; }
function wu(e) { return ot(e).with({ familyDistro: "musl" }, () => (oe('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (oe('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (oe('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (oe(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), [])); }
async function Pu(e) { let t = 'grep -v "libssl.so.0"', r = await Oo(e); if (r) {
    oe(`Found libssl.so file using platform-specific paths: ${r}`);
    let o = Do(r);
    if (oe(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "libssl-specific-path" };
} oe('Falling back to "ldconfig" and other generic paths'); let n = await Ir(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`); if (n || (n = await Oo(["/lib64", "/usr/lib64", "/lib"])), n) {
    oe(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = Do(n);
    if (oe(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "ldconfig" };
} let i = await Ir("openssl version -v"); if (i) {
    oe(`Found openssl binary with version: ${i}`);
    let o = Eu(i);
    if (oe(`The parsed openssl version is: ${o}`), o)
        return { libssl: o, strategy: "openssl-binary" };
} return oe("Couldn't find any version of libssl or OpenSSL in the system"), {}; }
async function Oo(e) { for (let t of e) {
    let r = await vu(t);
    if (r)
        return r;
} }
async function vu(e) { try {
    return (await Bn.default.readdir(e)).find(r => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
}
catch (t) {
    if (t.code === "ENOENT")
        return;
    throw t;
} }
async function lt() { let { binaryTarget: e } = await $o(); return e; }
function Tu(e) { return e.binaryTarget !== void 0; }
async function Kn() { let { memoized: e, ...t } = await $o(); return t; }
var Sr = {};
async function $o() { if (Tu(Sr))
    return Promise.resolve({ ...Sr, memoized: !0 }); let e = await No(), t = Cu(e); return Sr = { ...e, binaryTarget: t }, { ...Sr, memoized: !1 }; }
function Cu(e) {
    let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    t === "linux" && !["x64", "arm64"].includes(r) && Dt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (t === "linux" && i === void 0) {
        let c = ot({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Dt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (t === "linux" && o === void 0 && Dt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${It("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
    if (t === "darwin")
        return "darwin";
    if (t === "win32")
        return "windows";
    if (t === "freebsd")
        return o;
    if (t === "openbsd")
        return "openbsd";
    if (t === "netbsd")
        return "netbsd";
    if (t === "linux" && o === "nixos")
        return "linux-nixos";
    if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || qo(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Dt(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function Mu(e) { try {
    return await e();
}
catch {
    return;
} }
function Ir(e) { return Mu(async () => { let t = await yu(e); return oe(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout; }); }
async function Au() { return typeof Fr.default.machine == "function" ? Fr.default.machine() : (await Ir("uname -m"))?.trim(); }
function qo(e) { return e.startsWith("1."); }
var Un = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
var Gn = S(Bo()), kr = S(require("fs"));
var ut = S(require("path"));
function Ko(e) { let t = e.ignoreProcessEnv ? {} : process.env, r = n => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) { let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s); if (!a)
    return o; let l = a[1], u, c; if (l === "\\")
    c = a[0], u = c.replace("\\$", "$");
else {
    let p = a[2];
    c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
} return o.replace(c, u); }, n) ?? n; for (let n in e.parsed) {
    let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
    e.parsed[n] = r(i);
} for (let n in e.parsed)
    t[n] = e.parsed[n]; return e; }
var Jn = k("prisma:tryLoadEnv");
function Ot({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
    let n = Uo(e);
    r.conflictCheck !== "none" && Lu(n, t, r.conflictCheck);
    let i = null;
    return Qo(n?.path, t) || (i = Uo(t)), !n && !i && Jn("No Environment variables loaded"), i?.dotenvResult.error ? console.error(fe(ie("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
}
function Lu(e, t, r) {
    let n = e?.dotenvResult.parsed, i = !Qo(e?.path, t);
    if (n && t && i && kr.default.existsSync(t)) {
        let o = Gn.default.parse(kr.default.readFileSync(t)), s = [];
        for (let a in o)
            n[a] === o[a] && s.push(a);
        if (s.length > 0) {
            let a = ut.default.relative(process.cwd(), e.path), l = ut.default.relative(process.cwd(), t);
            if (r === "error") {
                let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${re(a)} and ${re(l)}
Conflicting env vars:
${s.map(c => `  ${ie(c)}`).join(`
`)}

We suggest to move the contents of ${re(l)} to ${re(a)} to consolidate your env vars.
`;
                throw new Error(u);
            }
            else if (r === "warn") {
                let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map(c => ie(c)).join(", ")} in ${re(a)} and ${re(l)}
Env vars from ${re(l)} overwrite the ones from ${re(a)}
      `;
                console.warn(`${xe("warn(prisma)")} ${u}`);
            }
        }
    }
}
function Uo(e) { return $u(e) ? (Jn(`Environment variables loaded from ${e}`), { dotenvResult: Ko(Gn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0 })), message: De(`Environment variables loaded from ${ut.default.relative(process.cwd(), e)}`), path: e }) : (Jn(`Environment variables not found at ${e}`), null); }
function Qo(e, t) { return e && t && ut.default.resolve(e) === ut.default.resolve(t); }
function $u(e) { return !!(e && kr.default.existsSync(e)); }
var Jo = "library";
function Hn(e) { let t = qu(); return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Jo); }
function qu() { let e = process.env.PRISMA_CLIENT_ENGINE_TYPE; return e === "library" ? "library" : e === "binary" ? "binary" : void 0; }
var Bu = S(Wn());
var N = S(require("path")), Ku = S(Wn()), Cf = k("prisma:engines");
function Zo() { return N.default.join(__dirname, "../"); }
var Mf = "libquery-engine";
N.default.join(__dirname, "../query-engine-darwin");
N.default.join(__dirname, "../query-engine-darwin-arm64");
N.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
N.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
N.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
N.default.join(__dirname, "../query-engine-linux-static-x64");
N.default.join(__dirname, "../query-engine-linux-static-arm64");
N.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
N.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
N.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
N.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
N.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
N.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
N.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
N.default.join(__dirname, "../query_engine-windows.dll.node");
var zn = S(require("fs")), Xo = k("chmodPlusX");
function Yn(e) { if (process.platform === "win32")
    return; let t = zn.default.statSync(e), r = t.mode | 64 | 8 | 1; if (t.mode === r) {
    Xo(`Execution permissions of ${e} are fine`);
    return;
} let n = r.toString(8).slice(-3); Xo(`Have to call chmodPlusX on ${e}`), zn.default.chmodSync(e, n); }
function Zn(e) {
    let t = e.e, r = a => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${It("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${De(e.id)}\`).`, s = ot({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => { let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl"; return `${r("libssl")}. Please install ${a} and try again.`; }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${t.message}`;
}
var kt = S(require("path"));
function Xn(e) { return kt.default.sep === kt.default.posix.sep ? e : e.split(kt.default.sep).join(kt.default.posix.sep); }
var ts = S(ei());
function ri(e) { return String(new ti(e)); }
var ti = class {
    constructor(t) { this.config = t; }
    toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Uu(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, ts.default)(Qu(n), 2)}
}`;
    }
};
function Uu(e) { let t; if (e.length > 0) {
    let r = e.find(n => n.fromEnvVar !== null);
    r ? t = `env("${r.fromEnvVar}")` : t = e.map(n => n.native ? "native" : n.value);
}
else
    t = void 0; return t; }
function Qu(e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Ju(n)}`).join(`
`);
}
function Ju(e) { return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map(n => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r))); }
var Nt = {};
Mt(Nt, { error: () => Wu, info: () => Hu, log: () => Gu, query: () => zu, should: () => rs, tags: () => _t, warn: () => ni });
var _t = { error: fe("prisma:error"), warn: xe("prisma:warn"), info: Oe("prisma:info"), query: it("prisma:query") }, rs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Gu(...e) { console.log(...e); }
function ni(e, ...t) { rs.warn() && console.warn(`${_t.warn} ${e}`, ...t); }
function Hu(e, ...t) { console.info(`${_t.info} ${e}`, ...t); }
function Wu(e, ...t) { console.error(`${_t.error} ${e}`, ...t); }
function zu(e, ...t) { console.log(`${_t.query} ${e}`, ...t); }
function Ge(e, t) { throw new Error(t); }
function oi(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }
var si = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
function ct(e, t) { let r = {}; for (let n of Object.keys(e))
    r[n] = t(e[n], n); return r; }
function ai(e, t) { if (e.length === 0)
    return; let r = e[0]; for (let n = 1; n < e.length; n++)
    t(r, e[n]) < 0 && (r = e[n]); return r; }
function E(e, t) { Object.defineProperty(e, "name", { value: t, configurable: !0 }); }
var as = new Set, Lt = (e, t, ...r) => { as.has(e) || (as.add(e), ni(t, ...r)); };
var K = class extends Error {
    constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) { super(r); this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: !1, writable: !0 }); }
    get [Symbol.toStringTag]() { return "PrismaClientKnownRequestError"; }
};
E(K, "PrismaClientKnownRequestError");
var Me = class extends K {
    constructor(t, r) { super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError"; }
};
E(Me, "NotFoundError");
var D = class e extends Error {
    constructor(r, n, i) { super(r); this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(e); }
    get [Symbol.toStringTag]() { return "PrismaClientInitializationError"; }
};
E(D, "PrismaClientInitializationError");
var ce = class extends Error {
    constructor(r, n) { super(r); this.name = "PrismaClientRustPanicError", this.clientVersion = n; }
    get [Symbol.toStringTag]() { return "PrismaClientRustPanicError"; }
};
E(ce, "PrismaClientRustPanicError");
var U = class extends Error {
    constructor(r, { clientVersion: n, batchRequestIdx: i }) { super(r); this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: !0, enumerable: !1 }); }
    get [Symbol.toStringTag]() { return "PrismaClientUnknownRequestError"; }
};
E(U, "PrismaClientUnknownRequestError");
var X = class extends Error {
    constructor(r, { clientVersion: n }) { super(r); this.name = "PrismaClientValidationError"; this.clientVersion = n; }
    get [Symbol.toStringTag]() { return "PrismaClientValidationError"; }
};
E(X, "PrismaClientValidationError");
var pt = class {
    constructor(t) { this._engine = t; }
    prometheus(t) { return this._engine.metrics({ format: "prometheus", ...t }); }
    json(t) { return this._engine.metrics({ format: "json", ...t }); }
};
function $t(e) { let t; return { get() { return t || (t = { value: e() }), t.value; } }; }
function us(e, t) { let r = $t(() => Zu(t)); Object.defineProperty(e, "dmmf", { get: () => r.get() }); }
function Zu(e) { return { datamodel: { models: li(e.models), enums: li(e.enums), types: li(e.types) } }; }
function li(e) { return Object.entries(e).map(([t, r]) => ({ name: t, ...r })); }
var Al = require("async_hooks"), Rl = require("events"), Sl = S(require("fs")), fr = S(require("path"));
var se = class e {
    constructor(t, r) { if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`); let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0); this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0]; let i = 0, o = 0; for (; i < r.length;) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length;)
                this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
        }
        else
            this.values[o++] = s, this.strings[o] = a;
    } }
    get text() { let t = 1, r = this.strings[0]; for (; t < this.strings.length;)
        r += `$${t}${this.strings[t++]}`; return r; }
    get sql() { let t = 1, r = this.strings[0]; for (; t < this.strings.length;)
        r += `?${this.strings[t++]}`; return r; }
    inspect() { return { text: this.text, sql: this.sql, values: this.values }; }
};
function cs(e, t = ",", r = "", n = "") { if (e.length === 0)
    throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array"); return new se([r, ...Array(e.length - 1).fill(t), n], e); }
function ui(e) { return new se([e], []); }
var ps = ui("");
function ci(e, ...t) { return new se(e, t); }
function qt(e) { return { getKeys() { return Object.keys(e); }, getPropertyValue(t) { return e[t]; } }; }
function ne(e, t) { return { getKeys() { return [e]; }, getPropertyValue() { return t(); } }; }
var be = class {
    constructor() { this._map = new Map; }
    get(t) { return this._map.get(t)?.value; }
    set(t, r) { this._map.set(t, { value: r }); }
    getOrCreate(t, r) { let n = this._map.get(t); if (n)
        return n.value; let i = r(); return this.set(t, i), i; }
};
function He(e) { let t = new be; return { getKeys() { return e.getKeys(); }, getPropertyValue(r) { return t.getOrCreate(r, () => e.getPropertyValue(r)); }, getPropertyDescriptor(r) { return e.getPropertyDescriptor?.(r); } }; }
var fs = require("util");
var Lr = { enumerable: !0, configurable: !0, writable: !0 };
function $r(e) { let t = new Set(e); return { getOwnPropertyDescriptor: () => Lr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] }; }
var ms = Symbol.for("nodejs.util.inspect.custom");
function Ee(e, t) { let r = Xu(t), n = new Set, i = new Proxy(e, { get(o, s) { if (n.has(s))
        return o[s]; let a = r.get(s); return a ? a.getPropertyValue(s) : o[s]; }, has(o, s) { if (n.has(s))
        return !0; let a = r.get(s); return a ? a.has?.(s) ?? !0 : Reflect.has(o, s); }, ownKeys(o) { let s = ds(Reflect.ownKeys(o), r), a = ds(Array.from(r.keys()), r); return [...new Set([...s, ...a, ...n])]; }, set(o, s, a) { return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a)); }, getOwnPropertyDescriptor(o, s) { let a = Reflect.getOwnPropertyDescriptor(o, s); if (a && !a.configurable)
        return a; let l = r.get(s); return l ? l.getPropertyDescriptor ? { ...Lr, ...l?.getPropertyDescriptor(s) } : Lr : a; }, defineProperty(o, s, a) { return n.add(s), Reflect.defineProperty(o, s, a); } }); return i[ms] = function (o, s, a = fs.inspect) { let l = { ...this }; return delete l[ms], a(l, s); }, i; }
function Xu(e) { let t = new Map; for (let r of e) {
    let n = r.getKeys();
    for (let i of n)
        t.set(i, r);
} return t; }
function ds(e, t) { return e.filter(r => t.get(r)?.has?.(r) ?? !0); }
function jt(e) { return { getKeys() { return e; }, has() { return !1; }, getPropertyValue() { } }; }
var mt = class {
    constructor(t = 0, r) { this.context = r; this.lines = []; this.currentLine = ""; this.currentIndent = 0; this.currentIndent = t; }
    write(t) { return typeof t == "string" ? this.currentLine += t : t.write(this), this; }
    writeJoined(t, r) { let n = r.length - 1; for (let i = 0; i < r.length; i++)
        this.write(r[i]), i !== n && this.write(t); return this; }
    writeLine(t) { return this.write(t).newLine(); }
    newLine() { this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0; let t = this.afterNextNewLineCallback; return this.afterNextNewLineCallback = void 0, t?.(), this; }
    withIndent(t) { return this.indent(), t(this), this.unindent(), this; }
    afterNextNewline(t) { return this.afterNextNewLineCallback = t, this; }
    indent() { return this.currentIndent++, this; }
    unindent() { return this.currentIndent > 0 && this.currentIndent--, this; }
    addMarginSymbol(t) { return this.marginSymbol = t, this; }
    toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() { return this.currentLine.length; }
    indentedCurrentLine() { let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent); return this.marginSymbol ? this.marginSymbol + t.slice(1) : t; }
};
var qr = Symbol(), pi = new WeakMap, Ae = class {
    constructor(t) { t === qr ? pi.set(this, `Prisma.${this._getName()}`) : pi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`); }
    _getName() { return this.constructor.name; }
    toString() { return pi.get(this); }
}, Vt = class extends Ae {
    _getNamespace() { return "NullTypes"; }
}, Bt = class extends Vt {
};
mi(Bt, "DbNull");
var Kt = class extends Vt {
};
mi(Kt, "JsonNull");
var Ut = class extends Vt {
};
mi(Ut, "AnyNull");
var jr = { classes: { DbNull: Bt, JsonNull: Kt, AnyNull: Ut }, instances: { DbNull: new Bt(qr), JsonNull: new Kt(qr), AnyNull: new Ut(qr) } };
function mi(e, t) { Object.defineProperty(e, "name", { value: t, configurable: !0 }); }
function dt(e) { return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"; }
function Vr(e) { return e.toString() !== "Invalid Date"; }
var ft = 9e15, Le = 1e9, di = "0123456789abcdef", Kr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ur = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", fi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ft, maxE: ft, crypto: !1 }, xs, Re, w = !0, Jr = "[DecimalError] ", Ne = Jr + "Invalid argument: ", bs = Jr + "Precision limit exceeded", Es = Jr + "crypto unavailable", ws = "[object Decimal]", ee = Math.floor, V = Math.pow, ec = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, tc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, rc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ps = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ye = 1e7, b = 7, nc = 9007199254740991, ic = Kr.length - 1, gi = Ur.length - 1, d = { toStringTag: ws };
d.absoluteValue = d.abs = function () { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), h(e); };
d.ceil = function () { return h(new this.constructor(this), this.e + 1, 2); };
d.clampedTo = d.clamp = function (e, t) { var r, n = this, i = n.constructor; if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN); if (e.gt(t))
    throw Error(Ne + t); return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n); };
d.comparedTo = d.cmp = function (e) { var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s; if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1; if (!s[0] || !a[0])
    return s[0] ? l : a[0] ? -u : 0; if (l !== u)
    return l; if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1; for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1; return n === i ? 0 : n > i ^ l < 0 ? 1 : -1; };
d.cosine = d.cos = function () { var e, t, r = this, n = r.constructor; return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = oc(n, As(n, r)), n.precision = e, n.rounding = t, h(Re == 2 || Re == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN); };
d.cubeRoot = d.cbrt = function () { var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor; if (!c.isFinite() || c.isZero())
    return new p(c); for (w = !1, o = c.s * V(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = W(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = V(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;;)
    if (a = n, l = a.times(a).times(a), u = l.plus(c), n = O(u.plus(c).times(a), u.plus(l), s + 2, 1), W(a.d).slice(0, s) === (r = W(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (h(a, e + 1, 0), a.times(a).times(a).eq(c))) {
                n = a;
                break;
            }
            s += 4, i = 1;
        }
        else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
        } return w = !0, h(n, e, p.rounding, t); };
d.decimalPlaces = d.dp = function () { var e, t = this.d, r = NaN; if (t) {
    if (e = t.length - 1, r = (e - ee(this.e / b)) * b, e = t[e], e)
        for (; e % 10 == 0; e /= 10)
            r--;
    r < 0 && (r = 0);
} return r; };
d.dividedBy = d.div = function (e) { return O(this, new this.constructor(e)); };
d.dividedToIntegerBy = d.divToInt = function (e) { var t = this, r = t.constructor; return h(O(t, new r(e), 0, 1, 1), r.precision, r.rounding); };
d.equals = d.eq = function (e) { return this.cmp(e) === 0; };
d.floor = function () { return h(new this.constructor(this), this.e + 1, 3); };
d.greaterThan = d.gt = function (e) { return this.cmp(e) > 0; };
d.greaterThanOrEqualTo = d.gte = function (e) { var t = this.cmp(e); return t == 1 || t === 0; };
d.hyperbolicCosine = d.cosh = function () { var e, t, r, n, i, o = this, s = o.constructor, a = new s(1); if (!o.isFinite())
    return new s(o.s ? 1 / 0 : NaN); if (o.isZero())
    return a; r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Hr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = gt(s, 1, o.times(t), new s(1), !0); for (var l, u = e, c = new s(8); u--;)
    l = o.times(o), o = a.minus(l.times(c.minus(l.times(c)))); return h(o, s.precision = r, s.rounding = n, !0); };
d.hyperbolicSine = d.sinh = function () { var e, t, r, n, i = this, o = i.constructor; if (!i.isFinite() || i.isZero())
    return new o(i); if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = gt(o, 2, i, i, !0);
else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Hr(5, e)), i = gt(o, 2, i, i, !0);
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--;)
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
} return o.precision = t, o.rounding = r, h(i, t, r, !0); };
d.hyperbolicTangent = d.tanh = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, O(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s); };
d.inverseCosine = d.acos = function () { var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding; return n !== -1 ? n === 0 ? t.isNeg() ? ge(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ge(r, i + 4, o).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ge(r, i + 4, o).times(.5), r.precision = i, r.rounding = o, e.minus(t)); };
d.inverseHyperbolicCosine = d.acosh = function () { var e, t, r = this, n = r.constructor; return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, w = !1, r = r.times(r).minus(1).sqrt().plus(r), w = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r); };
d.inverseHyperbolicSine = d.asinh = function () { var e, t, r = this, n = r.constructor; return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, w = !1, r = r.times(r).plus(1).sqrt().plus(r), w = !0, n.precision = e, n.rounding = t, r.ln()); };
d.inverseHyperbolicTangent = d.atanh = function () { var e, t, r, n, i = this, o = i.constructor; return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? h(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = O(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(.5))) : new o(NaN); };
d.inverseSine = d.asin = function () { var e, t, r, n, i = this, o = i.constructor; return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ge(o, r + 4, n).times(.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2))); };
d.inverseTangent = d.atan = function () { var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding; if (u.isFinite()) {
    if (u.isZero())
        return new c(u);
    if (u.abs().eq(1) && p + 4 <= gi)
        return s = ge(c, p + 4, m).times(.25), s.s = u.s, s;
}
else {
    if (!u.s)
        return new c(NaN);
    if (p + 4 <= gi)
        return s = ge(c, p + 4, m).times(.5), s.s = u.s, s;
} for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1)); for (w = !1, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1;)
    if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
        for (e = t; s.d[e] === o.d[e] && e--;)
            ; return r && (s = s.times(2 << r - 1)), w = !0, h(s, c.precision = p, c.rounding = m, !0); };
d.isFinite = function () { return !!this.d; };
d.isInteger = d.isInt = function () { return !!this.d && ee(this.e / b) > this.d.length - 2; };
d.isNaN = function () { return !this.s; };
d.isNegative = d.isNeg = function () { return this.s < 0; };
d.isPositive = d.isPos = function () { return this.s > 0; };
d.isZero = function () { return !!this.d && this.d[0] === 0; };
d.lessThan = d.lt = function (e) { return this.cmp(e) < 0; };
d.lessThanOrEqualTo = d.lte = function (e) { return this.cmp(e) < 1; };
d.logarithm = d.log = function (e) { var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding, f = 5; if (e == null)
    e = new c(10), t = !0;
else {
    if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c(NaN);
    t = e.eq(10);
} if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0); if (t)
    if (r.length > 1)
        o = !0;
    else {
        for (i = r[0]; i % 10 === 0;)
            i /= 10;
        o = i !== 1;
    } if (w = !1, a = p + f, s = _e(u, a), n = t ? Qr(c, a + 10) : _e(e, a), l = O(s, n, a, 1), Qt(l.d, i = p, m))
    do
        if (a += 10, s = _e(u, a), n = t ? Qr(c, a + 10) : _e(e, a), l = O(s, n, a, 1), !o) {
            +W(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = h(l, p + 1, 0));
            break;
        }
    while (Qt(l.d, i += 10, m)); return w = !0, h(l, p, m); };
d.minus = d.sub = function (e) { var t, r, n, i, o, s, a, l, u, c, p, m, f = this, y = f.constructor; if (e = new y(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e; if (f.s != e.s)
    return e.s = -e.s, f.plus(e); if (u = f.d, m = e.d, a = y.precision, l = y.rounding, !u[0] || !m[0]) {
    if (m[0])
        e.s = -e.s;
    else if (u[0])
        e = new y(f);
    else
        return new y(l === 3 ? -0 : 0);
    return w ? h(e, a, l) : e;
} if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
    for (p = o < 0, p ? (t = u, o = -o, s = m.length) : (t = m, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--;)
        t.push(0);
    t.reverse();
}
else {
    for (n = u.length, s = m.length, p = n < s, p && (s = n), n = 0; n < s; n++)
        if (u[n] != m[n]) {
            p = u[n] < m[n];
            break;
        }
    o = 0;
} for (p && (t = u, u = m, m = t, e.s = -e.s), s = u.length, n = m.length - s; n > 0; --n)
    u[s++] = 0; for (n = m.length; n > o;) {
    if (u[--n] < m[n]) {
        for (i = n; i && u[--i] === 0;)
            u[i] = ye - 1;
        --u[i], u[n] += ye;
    }
    u[n] -= m[n];
} for (; u[--s] === 0;)
    u.pop(); for (; u[0] === 0; u.shift())
    --r; return u[0] ? (e.d = u, e.e = Gr(u, r), w ? h(e, a, l) : e) : new y(l === 3 ? -0 : 0); };
d.modulo = d.mod = function (e) { var t, r = this, n = r.constructor; return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? h(new n(r), n.precision, n.rounding) : (w = !1, n.modulo == 9 ? (t = O(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = O(r, e, 0, n.modulo, 1), t = t.times(e), w = !0, r.minus(t)); };
d.naturalExponential = d.exp = function () { return yi(this); };
d.naturalLogarithm = d.ln = function () { return _e(this); };
d.negated = d.neg = function () { var e = new this.constructor(this); return e.s = -e.s, h(e); };
d.plus = d.add = function (e) { var t, r, n, i, o, s, a, l, u, c, p = this, m = p.constructor; if (e = new m(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new m(NaN) : p.d || (e = new m(e.d || p.s === e.s ? p : NaN)), e; if (p.s != e.s)
    return e.s = -e.s, p.minus(e); if (u = p.d, c = e.d, a = m.precision, l = m.rounding, !u[0] || !c[0])
    return c[0] || (e = new m(p)), w ? h(e, a, l) : e; if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
    for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--;)
        r.push(0);
    r.reverse();
} for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i;)
    t = (u[--i] = u[i] + c[i] + t) / ye | 0, u[i] %= ye; for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0;)
    u.pop(); return e.d = u, e.e = Gr(u, n), w ? h(e, a, l) : e; };
d.precision = d.sd = function (e) { var t, r = this; if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Ne + e); return r.d ? (t = vs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t; };
d.round = function () { var e = this, t = e.constructor; return h(new t(e), e.e + 1, t.rounding); };
d.sine = d.sin = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = ac(n, As(n, r)), n.precision = e, n.rounding = t, h(Re > 2 ? r.neg() : r, e, t, !0)) : new n(NaN); };
d.squareRoot = d.sqrt = function () { var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor; if (u !== 1 || !a || !a[0])
    return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0); for (w = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = W(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3;;)
    if (o = n, n = o.plus(O(s, o, r + 2, 1)).times(.5), W(o.d).slice(0, r) === (t = W(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (h(o, l + 1, 0), o.times(o).eq(s))) {
                n = o;
                break;
            }
            r += 4, i = 1;
        }
        else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (h(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
        } return w = !0, h(n, l, c.rounding, e); };
d.tangent = d.tan = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = O(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, h(Re == 2 || Re == 4 ? r.neg() : r, e, t, !0)) : new n(NaN); };
d.times = d.mul = function (e) { var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, m = c.d, f = (e = new p(e)).d; if (e.s *= c.s, !m || !m[0] || !f || !f[0])
    return new p(!e.s || m && !m[0] && !f || f && !f[0] && !m ? NaN : !m || !f ? e.s / 0 : e.s * 0); for (r = ee(c.e / b) + ee(e.e / b), l = m.length, u = f.length, l < u && (o = m, m = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--;)
    o.push(0); for (n = u; --n >= 0;) {
    for (t = 0, i = l + n; i > n;)
        a = o[i] + f[n] * m[i - n - 1] + t, o[i--] = a % ye | 0, t = a / ye | 0;
    o[i] = (o[i] + t) % ye | 0;
} for (; !o[--s];)
    o.pop(); return t ? ++r : o.shift(), e.d = o, e.e = Gr(o, r), w ? h(e, p.precision, p.rounding) : e; };
d.toBinary = function (e, t) { return xi(this, 2, e, t); };
d.toDecimalPlaces = d.toDP = function (e, t) { var r = this, n = r.constructor; return r = new n(r), e === void 0 ? r : (ae(e, 0, Le), t === void 0 ? t = n.rounding : ae(t, 0, 8), h(r, e + r.e + 1, t)); };
d.toExponential = function (e, t) { var r, n = this, i = n.constructor; return e === void 0 ? r = we(n, !0) : (ae(e, 0, Le), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = h(new i(n), e + 1, t), r = we(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r; };
d.toFixed = function (e, t) { var r, n, i = this, o = i.constructor; return e === void 0 ? r = we(i) : (ae(e, 0, Le), t === void 0 ? t = o.rounding : ae(t, 0, 8), n = h(new o(i), e + i.e + 1, t), r = we(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r; };
d.toFraction = function (e) { var t, r, n, i, o, s, a, l, u, c, p, m, f = this, y = f.d, g = f.constructor; if (!y)
    return new g(f); if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = vs(y) - f.e - 1, s = o % b, t.d[0] = V(10, s < 0 ? b + s : s), e == null)
    e = o > 0 ? t : u;
else {
    if (a = new g(e), !a.isInt() || a.lt(u))
        throw Error(Ne + a);
    e = a.gt(t) ? o > 0 ? t : u : a;
} for (w = !1, a = new g(W(y)), c = g.precision, g.precision = o = y.length * b * 2; p = O(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1;)
    r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i; return i = O(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, m = O(u, n, o, 1).minus(f).abs().cmp(O(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, w = !0, m; };
d.toHexadecimal = d.toHex = function (e, t) { return xi(this, 16, e, t); };
d.toNearest = function (e, t) { var r = this, n = r.constructor; if (r = new n(r), e == null) {
    if (!r.d)
        return r;
    e = new n(1), t = n.rounding;
}
else {
    if (e = new n(e), t === void 0 ? t = n.rounding : ae(t, 0, 8), !r.d)
        return e.s ? r : e;
    if (!e.d)
        return e.s && (e.s = r.s), e;
} return e.d[0] ? (w = !1, r = O(r, e, 0, t, 1).times(e), w = !0, h(r)) : (e.s = r.s, r = e), r; };
d.toNumber = function () { return +this; };
d.toOctal = function (e, t) { return xi(this, 8, e, t); };
d.toPower = d.pow = function (e) { var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e)); if (!a.d || !e.d || !a.d[0] || !e.d[0])
    return new l(V(+a, u)); if (a = new l(a), a.eq(1))
    return a; if (n = l.precision, o = l.rounding, e.eq(1))
    return h(a, n, o); if (t = ee(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= nc)
    return i = Ts(l, a, r, n), e.s < 0 ? new l(1).div(i) : h(i, n, o); if (s = a.s, s < 0) {
    if (t < e.d.length - 1)
        return new l(NaN);
    if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
} return r = V(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + W(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (w = !1, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = yi(e.times(_e(a, n + r)), n), i.d && (i = h(i, n + 5, 1), Qt(i.d, n, o) && (t = n + 10, i = h(yi(e.times(_e(a, t + r)), t), t + 5, 1), +W(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = h(i, n + 1, 0)))), i.s = s, w = !0, l.rounding = o, h(i, n, o)); };
d.toPrecision = function (e, t) { var r, n = this, i = n.constructor; return e === void 0 ? r = we(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ae(e, 1, Le), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = h(new i(n), e, t), r = we(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r; };
d.toSignificantDigits = d.toSD = function (e, t) { var r = this, n = r.constructor; return e === void 0 ? (e = n.precision, t = n.rounding) : (ae(e, 1, Le), t === void 0 ? t = n.rounding : ae(t, 0, 8)), h(new n(r), e, t); };
d.toString = function () { var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() && !e.isZero() ? "-" + r : r; };
d.truncated = d.trunc = function () { return h(new this.constructor(this), this.e + 1, 1); };
d.valueOf = d.toJSON = function () { var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() ? "-" + r : r; };
function W(e) { var t, r, n, i = e.length - 1, o = "", s = e[0]; if (i > 0) {
    for (o += s, t = 1; t < i; t++)
        n = e[t] + "", r = b - n.length, r && (o += ke(r)), o += n;
    s = e[t], n = s + "", r = b - n.length, r && (o += ke(r));
}
else if (s === 0)
    return "0"; for (; s % 10 === 0;)
    s /= 10; return o + s; }
function ae(e, t, r) { if (e !== ~~e || e < t || e > r)
    throw Error(Ne + e); }
function Qt(e, t, r, n) { var i, o, s, a; for (o = e[0]; o >= 10; o /= 10)
    --t; return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = V(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == V(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == V(10, t - 3) - 1, s; }
function Br(e, t, r) { for (var n, i = [0], o, s = 0, a = e.length; s < a;) {
    for (o = i.length; o--;)
        i[o] *= t;
    for (i[0] += di.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
} return i.reverse(); }
function oc(e, t) { var r, n, i; if (t.isZero())
    return t; n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Hr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = gt(e, 1, t.times(i), new e(1)); for (var o = r; o--;) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
} return e.precision -= r, t; }
var O = function () { function e(n, i, o) { var s, a = 0, l = n.length; for (n = n.slice(); l--;)
    s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0; return a && n.unshift(a), n; } function t(n, i, o, s) { var a, l; if (o != s)
    l = o > s ? 1 : -1;
else
    for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
        } return l; } function r(n, i, o, s) { for (var a = 0; o--;)
    n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o]; for (; !n[0] && n.length > 1;)
    n.shift(); } return function (n, i, o, s, a, l) { var u, c, p, m, f, y, g, P, T, C, x, A, pe, G, Ke, $, z, Ce, Y, et, gr = n.constructor, Tn = n.s == i.s ? 1 : -1, Z = n.d, I = i.d; if (!Z || !Z[0] || !I || !I[0])
    return new gr(!n.s || !i.s || (Z ? I && Z[0] == I[0] : !I) ? NaN : Z && Z[0] == 0 || !I ? Tn * 0 : Tn / 0); for (l ? (f = 1, c = n.e - i.e) : (l = ye, f = b, c = ee(n.e / f) - ee(i.e / f)), Y = I.length, z = Z.length, T = new gr(Tn), C = T.d = [], p = 0; I[p] == (Z[p] || 0); p++)
    ; if (I[p] > (Z[p] || 0) && c--, o == null ? (G = o = gr.precision, s = gr.rounding) : a ? G = o + (n.e - i.e) + 1 : G = o, G < 0)
    C.push(1), y = !0;
else {
    if (G = G / f + 2 | 0, p = 0, Y == 1) {
        for (m = 0, I = I[0], G++; (p < z || m) && G--; p++)
            Ke = m * l + (Z[p] || 0), C[p] = Ke / I | 0, m = Ke % I | 0;
        y = m || p < z;
    }
    else {
        for (m = l / (I[0] + 1) | 0, m > 1 && (I = e(I, m, l), Z = e(Z, m, l), Y = I.length, z = Z.length), $ = Y, x = Z.slice(0, Y), A = x.length; A < Y;)
            x[A++] = 0;
        et = I.slice(), et.unshift(0), Ce = I[0], I[1] >= l / 2 && ++Ce;
        do
            m = 0, u = t(I, x, Y, A), u < 0 ? (pe = x[0], Y != A && (pe = pe * l + (x[1] || 0)), m = pe / Ce | 0, m > 1 ? (m >= l && (m = l - 1), g = e(I, m, l), P = g.length, A = x.length, u = t(g, x, P, A), u == 1 && (m--, r(g, Y < P ? et : I, P, l))) : (m == 0 && (u = m = 1), g = I.slice()), P = g.length, P < A && g.unshift(0), r(x, g, A, l), u == -1 && (A = x.length, u = t(I, x, Y, A), u < 1 && (m++, r(x, Y < A ? et : I, A, l))), A = x.length) : u === 0 && (m++, x = [0]), C[p++] = m, u && x[0] ? x[A++] = Z[$] || 0 : (x = [Z[$]], A = 1);
        while (($++ < z || x[0] !== void 0) && G--);
        y = x[0] !== void 0;
    }
    C[0] || C.shift();
} if (f == 1)
    T.e = c, xs = y;
else {
    for (p = 1, m = C[0]; m >= 10; m /= 10)
        p++;
    T.e = p + c * f - 1, h(T, a ? o + T.e + 1 : o, s, y);
} return T; }; }();
function h(e, t, r, n) { var i, o, s, a, l, u, c, p, m, f = e.constructor; e: if (t != null) {
    if (p = e.d, !p)
        return e;
    for (i = 1, a = p[0]; a >= 10; a /= 10)
        i++;
    if (o = t - i, o < 0)
        o += b, s = t, c = p[m = 0], l = c / V(10, i - s - 1) % 10 | 0;
    else if (m = Math.ceil((o + 1) / b), a = p.length, m >= a)
        if (n) {
            for (; a++ <= m;)
                p.push(0);
            c = l = 0, i = 1, o %= b, s = o - b + 1;
        }
        else
            break e;
    else {
        for (c = a = p[m], i = 1; a >= 10; a /= 10)
            i++;
        o %= b, s = o - b + i, l = s < 0 ? 0 : c / V(10, i - s - 1) % 10 | 0;
    }
    if (n = n || t < 0 || p[m + 1] !== void 0 || (s < 0 ? c : c % V(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / V(10, i - s) : 0 : p[m - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
        return p.length = 0, u ? (t -= e.e + 1, p[0] = V(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
    if (o == 0 ? (p.length = m, a = 1, m--) : (p.length = m + 1, a = V(10, b - o), p[m] = s > 0 ? (c / V(10, i - s) % V(10, s) | 0) * a : 0), u)
        for (;;)
            if (m == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                    o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                    a++;
                o != a && (e.e++, p[0] == ye && (p[0] = 1));
                break;
            }
            else {
                if (p[m] += a, p[m] != ye)
                    break;
                p[m--] = 0, a = 1;
            }
    for (o = p.length; p[--o] === 0;)
        p.pop();
} return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e; }
function we(e, t, r) { if (!e.isFinite())
    return Ms(e); var n, i = e.e, o = W(e.d), s = o.length; return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ke(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ke(-i - 1) + o, r && (n = r - s) > 0 && (o += ke(n))) : i >= s ? (o += ke(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + ke(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += ke(n))), o; }
function Gr(e, t) { var r = e[0]; for (t *= b; r >= 10; r /= 10)
    t++; return t; }
function Qr(e, t, r) { if (t > ic)
    throw w = !0, r && (e.precision = r), Error(bs); return h(new e(Kr), t, 1, !0); }
function ge(e, t, r) { if (t > gi)
    throw Error(bs); return h(new e(Ur), t, r, !0); }
function vs(e) { var t = e.length - 1, r = t * b + 1; if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
        r--;
    for (t = e[0]; t >= 10; t /= 10)
        r++;
} return r; }
function ke(e) { for (var t = ""; e--;)
    t += "0"; return t; }
function Ts(e, t, r, n) { var i, o = new e(1), s = Math.ceil(n / b + 4); for (w = !1;;) {
    if (r % 2 && (o = o.times(t), ys(o.d, s) && (i = !0)), r = ee(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
    }
    t = t.times(t), ys(t.d, s);
} return w = !0, o; }
function gs(e) { return e.d[e.d.length - 1] & 1; }
function Cs(e, t, r) { for (var n, i = new e(t[0]), o = 0; ++o < t.length;)
    if (n = new e(t[o]), n.s)
        i[r](n) && (i = n);
    else {
        i = n;
        break;
    } return i; }
function yi(e, t) { var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, m = e.constructor, f = m.rounding, y = m.precision; if (!e.d || !e.d[0] || e.e > 17)
    return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0); for (t == null ? (w = !1, l = y) : l = t, a = new m(.03125); e.e > -2;)
    e = e.times(a), p += 5; for (n = Math.log(V(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new m(1), m.precision = l;;) {
    if (o = h(o.times(e), l, 1), r = r.times(++c), a = s.plus(O(o, r, l, 1)), W(a.d).slice(0, l) === W(s.d).slice(0, l)) {
        for (i = p; i--;)
            s = h(s.times(s), l, 1);
        if (t == null)
            if (u < 3 && Qt(s.d, l - n, f, u))
                m.precision = l += 10, r = o = a = new m(1), c = 0, u++;
            else
                return h(s, m.precision = y, f, w = !0);
        else
            return m.precision = y, s;
    }
    s = a;
} }
function _e(e, t) { var r, n, i, o, s, a, l, u, c, p, m, f = 1, y = 10, g = e, P = g.d, T = g.constructor, C = T.rounding, x = T.precision; if (g.s < 0 || !P || !P[0] || !g.e && P[0] == 1 && P.length == 1)
    return new T(P && !P[0] ? -1 / 0 : g.s != 1 ? NaN : P ? 0 : g); if (t == null ? (w = !1, c = x) : c = t, T.precision = c += y, r = W(P), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;)
        g = g.times(e), r = W(g.d), n = r.charAt(0), f++;
    o = g.e, n > 1 ? (g = new T("0." + r), o++) : g = new T(n + "." + r.slice(1));
}
else
    return u = Qr(T, c + 2, x).times(o + ""), g = _e(new T(n + "." + r.slice(1)), c - y).plus(u), T.precision = x, t == null ? h(g, x, C, w = !0) : g; for (p = g, l = s = g = O(g.minus(1), g.plus(1), c, 1), m = h(g.times(g), c, 1), i = 3;;) {
    if (s = h(s.times(m), c, 1), u = l.plus(O(s, new T(i), c, 1)), W(u.d).slice(0, c) === W(l.d).slice(0, c))
        if (l = l.times(2), o !== 0 && (l = l.plus(Qr(T, c + 2, x).times(o + ""))), l = O(l, new T(f), c, 1), t == null)
            if (Qt(l.d, c - y, C, a))
                T.precision = c += y, u = s = g = O(p.minus(1), p.plus(1), c, 1), m = h(g.times(g), c, 1), i = a = 1;
            else
                return h(l, T.precision = x, C, w = !0);
        else
            return T.precision = x, l;
    l = u, i += 2;
} }
function Ms(e) { return String(e.s * e.s / 0); }
function hi(e, t) { var r, n, i; for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
    ; for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ; if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= b; n < i;)
            e.d.push(+t.slice(n, n += b));
        t = t.slice(n), n = b - t.length;
    }
    else
        n -= i;
    for (; n--;)
        t += "0";
    e.d.push(+t), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
}
else
    e.e = 0, e.d = [0]; return e; }
function sc(e, t) { var r, n, i, o, s, a, l, u, c; if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ps.test(t))
        return hi(e, t);
}
else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e; if (tc.test(t))
    r = 16, t = t.toLowerCase();
else if (ec.test(t))
    r = 2;
else if (rc.test(t))
    r = 8;
else
    throw Error(Ne + t); for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ts(n, new n(r), o, o * 2)), u = Br(t, r, ye), c = u.length - 1, o = c; u[o] === 0; --o)
    u.pop(); return o < 0 ? new n(e.s * 0) : (e.e = Gr(u, c), e.d = u, w = !1, s && (e = O(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? V(2, l) : We.pow(2, l))), w = !0, e); }
function ac(e, t) { var r, n = t.d.length; if (n < 3)
    return t.isZero() ? t : gt(e, 2, t, t); r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Hr(5, r)), t = gt(e, 2, t, t); for (var i, o = new e(5), s = new e(16), a = new e(20); r--;)
    i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a)))); return t; }
function gt(e, t, r, n, i) { var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b); for (w = !1, l = r.times(r), a = new e(n);;) {
    if (s = O(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = O(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
        for (o = p; s.d[o] === a.d[o] && o--;)
            ;
        if (o == -1)
            break;
    }
    o = a, a = n, n = s, s = o, u++;
} return w = !0, s.d.length = p + 1, s; }
function Hr(e, t) { for (var r = e; --t;)
    r *= e; return r; }
function As(e, t) { var r, n = t.s < 0, i = ge(e, e.precision, 1), o = i.times(.5); if (t = t.abs(), t.lte(o))
    return Re = n ? 4 : 1, t; if (r = t.divToInt(i), r.isZero())
    Re = n ? 3 : 2;
else {
    if (t = t.minus(r.times(i)), t.lte(o))
        return Re = gs(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    Re = gs(r) ? n ? 1 : 4 : n ? 3 : 2;
} return t.minus(i).abs(); }
function xi(e, t, r, n) { var i, o, s, a, l, u, c, p, m, f = e.constructor, y = r !== void 0; if (y ? (ae(r, 1, Le), n === void 0 ? n = f.rounding : ae(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
    c = Ms(e);
else {
    for (c = we(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), m = new f(1), m.e = c.length - s, m.d = Br(we(m), 10, i), m.e = m.d.length), p = Br(c, 10, i), o = l = p.length; p[--l] == 0;)
        p.pop();
    if (!p[0])
        c = y ? "0p+0" : "0";
    else {
        if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = O(e, m, r, n, 0, i), p = e.d, o = e.e, u = xs), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1;)
                p[r] = 0, r || (++o, p.unshift(1));
        for (l = p.length; !p[l - 1]; --l)
            ;
        for (s = 0, c = ""; s < l; s++)
            c += di.charAt(p[s]);
        if (y) {
            if (l > 1)
                if (t == 16 || t == 8) {
                    for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                        c += "0";
                    for (p = Br(c, i, t), l = p.length; !p[l - 1]; --l)
                        ;
                    for (s = 1, c = "1."; s < l; s++)
                        c += di.charAt(p[s]);
                }
                else
                    c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
        }
        else if (o < 0) {
            for (; ++o;)
                c = "0" + c;
            c = "0." + c;
        }
        else if (++o > l)
            for (o -= l; o--;)
                c += "0";
        else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
} return e.s < 0 ? "-" + c : c; }
function ys(e, t) { if (e.length > t)
    return e.length = t, !0; }
function lc(e) { return new this(e).abs(); }
function uc(e) { return new this(e).acos(); }
function cc(e) { return new this(e).acosh(); }
function pc(e, t) { return new this(e).plus(t); }
function mc(e) { return new this(e).asin(); }
function dc(e) { return new this(e).asinh(); }
function fc(e) { return new this(e).atan(); }
function gc(e) { return new this(e).atanh(); }
function yc(e, t) { e = new this(e), t = new this(t); var r, n = this.precision, i = this.rounding, o = n + 4; return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ge(this, o, 1).times(t.s > 0 ? .25 : .75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ge(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ge(this, o, 1).times(.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(O(e, t, o, 1)), t = ge(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(O(e, t, o, 1)), r; }
function hc(e) { return new this(e).cbrt(); }
function xc(e) { return h(e = new this(e), e.e + 1, 2); }
function bc(e, t, r) { return new this(e).clamp(t, r); }
function Ec(e) { if (!e || typeof e != "object")
    throw Error(Jr + "Object expected"); var t, r, n, i = e.defaults === !0, o = ["precision", 1, Le, "rounding", 0, 8, "toExpNeg", -ft, 0, "toExpPos", 0, ft, "maxE", 0, ft, "minE", -ft, 0, "modulo", 0, 9]; for (t = 0; t < o.length; t += 3)
    if (r = o[t], i && (this[r] = fi[r]), (n = e[r]) !== void 0)
        if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
        else
            throw Error(Ne + r + ": " + n); if (r = "crypto", i && (this[r] = fi[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
        if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                this[r] = !0;
            else
                throw Error(Es);
        else
            this[r] = !1;
    else
        throw Error(Ne + r + ": " + n); return this; }
function wc(e) { return new this(e).cos(); }
function Pc(e) { return new this(e).cosh(); }
function Rs(e) { var t, r, n; function i(o) { var s, a, l, u = this; if (!(u instanceof i))
    return new i(o); if (u.constructor = i, hs(o)) {
    u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
    return;
} if (l = typeof o, l === "number") {
    if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
    }
    if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, a = o; a >= 10; a /= 10)
            s++;
        w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
        return;
    }
    else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
    }
    return hi(u, o.toString());
}
else if (l !== "string")
    throw Error(Ne + o); return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Ps.test(o) ? hi(u, o) : sc(u, o); } if (i.prototype = d, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ec, i.clone = Rs, i.isDecimal = hs, i.abs = lc, i.acos = uc, i.acosh = cc, i.add = pc, i.asin = mc, i.asinh = dc, i.atan = fc, i.atanh = gc, i.atan2 = yc, i.cbrt = hc, i.ceil = xc, i.clamp = bc, i.cos = wc, i.cosh = Pc, i.div = vc, i.exp = Tc, i.floor = Cc, i.hypot = Mc, i.ln = Ac, i.log = Rc, i.log10 = Fc, i.log2 = Sc, i.max = Ic, i.min = Dc, i.mod = Oc, i.mul = kc, i.pow = _c, i.random = Nc, i.round = Lc, i.sign = $c, i.sin = qc, i.sinh = jc, i.sqrt = Vc, i.sub = Bc, i.sum = Kc, i.tan = Uc, i.tanh = Qc, i.trunc = Jc, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length;)
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]); return i.config(e), i; }
function vc(e, t) { return new this(e).div(t); }
function Tc(e) { return new this(e).exp(); }
function Cc(e) { return h(e = new this(e), e.e + 1, 3); }
function Mc() { var e, t, r = new this(0); for (w = !1, e = 0; e < arguments.length;)
    if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
    else {
        if (t.s)
            return w = !0, new this(1 / 0);
        r = t;
    } return w = !0, r.sqrt(); }
function hs(e) { return e instanceof We || e && e.toStringTag === ws || !1; }
function Ac(e) { return new this(e).ln(); }
function Rc(e, t) { return new this(e).log(t); }
function Sc(e) { return new this(e).log(2); }
function Fc(e) { return new this(e).log(10); }
function Ic() { return Cs(this, arguments, "lt"); }
function Dc() { return Cs(this, arguments, "gt"); }
function Oc(e, t) { return new this(e).mod(t); }
function kc(e, t) { return new this(e).mul(t); }
function _c(e, t) { return new this(e).pow(t); }
function Nc(e) { var t, r, n, i, o = 0, s = new this(1), a = []; if (e === void 0 ? e = this.precision : ae(e, 1, Le), n = Math.ceil(e / b), this.crypto)
    if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;)
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4); o < n;)
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
    }
    else
        throw Error(Es);
else
    for (; o < n;)
        a[o++] = Math.random() * 1e7 | 0; for (n = a[--o], e %= b, n && e && (i = V(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
    a.pop(); if (o < 0)
    r = 0, a = [0];
else {
    for (r = -1; a[0] === 0; r -= b)
        a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10)
        n++;
    n < b && (r -= b - n);
} return s.e = r, s.d = a, s; }
function Lc(e) { return h(e = new this(e), e.e + 1, this.rounding); }
function $c(e) { return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN; }
function qc(e) { return new this(e).sin(); }
function jc(e) { return new this(e).sinh(); }
function Vc(e) { return new this(e).sqrt(); }
function Bc(e, t) { return new this(e).sub(t); }
function Kc() { var e = 0, t = arguments, r = new this(t[e]); for (w = !1; r.s && ++e < t.length;)
    r = r.plus(t[e]); return w = !0, h(r, this.precision, this.rounding); }
function Uc(e) { return new this(e).tan(); }
function Qc(e) { return new this(e).tanh(); }
function Jc(e) { return h(e = new this(e), e.e + 1, 1); }
d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
d[Symbol.toStringTag] = "Decimal";
var We = d.constructor = Rs(fi);
Kr = new We(Kr);
Ur = new We(Ur);
var Pe = We;
function yt(e) { return We.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d); }
var Jt = class {
    constructor(t, r, n, i, o) { this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o; }
    _toGraphQLInputType() { let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : ""; return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`; }
};
function ht(e) { return e instanceof Jt; }
var Wr = e => e, zr = { bold: Wr, red: Wr, green: Wr, dim: Wr }, Ss = { bold: ie, red: fe, green: Qe, dim: De }, xt = { write(e) { e.writeLine(","); } };
var ve = class {
    constructor(t) { this.contents = t; this.isUnderlined = !1; this.color = t => t; }
    underline() { return this.isUnderlined = !0, this; }
    setColor(t) { return this.color = t, this; }
    write(t) { let r = t.getCurrentLineLength(); t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => { t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length))); }); }
};
var $e = class {
    constructor() { this.hasError = !1; }
    markAsError() { return this.hasError = !0, this; }
};
var Yr = class extends $e {
    constructor() { super(...arguments); this.items = []; }
    addItem(r) { return this.items.push(r), this; }
    getPrintWidth() { return this.items.length === 0 ? 2 : Math.max(...this.items.map(n => n.getPrintWidth())) + 2; }
    write(r) { if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
    } this.writeWithItems(r); }
    writeEmpty(r) { let n = new ve("[]"); this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n); }
    writeWithItems(r) { let { colors: n } = r.context; r.writeLine("[").withIndent(() => r.writeJoined(xt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => { r.writeLine(n.red("~".repeat(this.getPrintWidth()))); }); }
};
var Fs = ": ", Zr = class {
    constructor(t, r) { this.name = t; this.value = r; this.hasError = !1; }
    markAsError() { this.hasError = !0; }
    getPrintWidth() { return this.name.length + this.value.getPrintWidth() + Fs.length; }
    write(t) { let r = new ve(this.name); this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Fs).write(this.value); }
};
var Q = class e extends $e {
    constructor() { super(...arguments); this.fields = {}; this.suggestions = []; }
    addField(r) { this.fields[r.name] = r; }
    addSuggestion(r) { this.suggestions.push(r); }
    getField(r) { return this.fields[r]; }
    getDeepField(r) { let [n, ...i] = r, o = this.getField(n); if (!o)
        return; let s = o; for (let a of i) {
        if (!(s.value instanceof e))
            return;
        let l = s.value.getField(a);
        if (!l)
            return;
        s = l;
    } return s; }
    getDeepFieldValue(r) { return r.length === 0 ? this : this.getDeepField(r)?.value; }
    hasField(r) { return !!this.getField(r); }
    removeAllFields() { this.fields = {}; }
    removeField(r) { delete this.fields[r]; }
    getFields() { return this.fields; }
    isEmpty() { return Object.keys(this.fields).length === 0; }
    getFieldValue(r) { return this.getField(r)?.value; }
    getDeepSubSelectionValue(r) { let n = this; for (let i of r) {
        if (!(n instanceof e))
            return;
        let o = n.getSubSelectionValue(i);
        if (!o)
            return;
        n = o;
    } return n; }
    getDeepSelectionParent(r) { let n = this.getSelectionParent(); if (!n)
        return; let i = n; for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
            return;
        let a = s.getSelectionParent();
        if (!a)
            return;
        i = a;
    } return i; }
    getSelectionParent() { let r = this.getField("select"); if (r?.value instanceof e)
        return { kind: "select", value: r.value }; let n = this.getField("include"); if (n?.value instanceof e)
        return { kind: "include", value: n.value }; }
    getSubSelectionValue(r) { return this.getSelectionParent()?.value.fields[r].value; }
    getPrintWidth() { let r = Object.values(this.fields); return r.length == 0 ? 2 : Math.max(...r.map(i => i.getPrintWidth())) + 2; }
    write(r) { let n = Object.values(this.fields); if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
    } this.writeWithContents(r, n); }
    writeEmpty(r) { let n = new ve("{}"); this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n); }
    writeWithContents(r, n) { r.writeLine("{").withIndent(() => { r.writeJoined(xt, [...n, ...this.suggestions]).newLine(); }), r.write("}"), this.hasError && r.afterNextNewline(() => { r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth()))); }); }
};
var J = class extends $e {
    constructor(r) { super(); this.text = r; }
    getPrintWidth() { return this.text.length; }
    write(r) { let n = new ve(this.text); this.hasError && n.underline().setColor(r.context.colors.red), r.write(n); }
};
var bi = class {
    constructor(t) { this.errorMessages = []; this.arguments = t; }
    write(t) { t.write(this.arguments); }
    addErrorMessage(t) { this.errorMessages.push(t); }
    renderAllMessages(t) {
        return this.errorMessages.map(r => r(t)).join(`
`);
    }
};
function Xr(e) { return new bi(Is(e)); }
function Is(e) { let t = new Q; for (let [r, n] of Object.entries(e)) {
    let i = new Zr(r, Ds(n));
    t.addField(i);
} return t; }
function Ds(e) { if (typeof e == "string")
    return new J(JSON.stringify(e)); if (typeof e == "number" || typeof e == "boolean")
    return new J(String(e)); if (typeof e == "bigint")
    return new J(`${e}n`); if (e === null)
    return new J("null"); if (e === void 0)
    return new J("undefined"); if (yt(e))
    return new J(`new Prisma.Decimal("${e.toFixed()}")`); if (e instanceof Uint8Array)
    return Buffer.isBuffer(e) ? new J(`Buffer.alloc(${e.byteLength})`) : new J(`new Uint8Array(${e.byteLength})`); if (e instanceof Date) {
    let t = Vr(e) ? e.toISOString() : "Invalid Date";
    return new J(`new Date("${t}")`);
} return e instanceof Ae ? new J(`Prisma.${e._getName()}`) : ht(e) ? new J(`prisma.${no(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Hc(e) : typeof e == "object" ? Is(e) : new J(Object.prototype.toString.call(e)); }
function Hc(e) { let t = new Yr; for (let r of e)
    t.addItem(Ds(r)); return t; }
function Os(e) { if (e === void 0)
    return ""; let t = Xr(e); return new mt(0, { colors: zr }).write(t).toString(); }
var Gt = "<unknown>";
function ks(e) {
    var t = e.split(`
`);
    return t.reduce(function (r, n) { var i = Yc(n) || Xc(n) || rp(n) || sp(n) || ip(n); return i && r.push(i), r; }, []);
}
var Wc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, zc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Yc(e) { var t = Wc.exec(e); if (!t)
    return null; var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = zc.exec(t[2]); return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Gt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null }; }
var Zc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Xc(e) { var t = Zc.exec(e); return t ? { file: t[2], methodName: t[1] || Gt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null; }
var ep = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, tp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function rp(e) { var t = ep.exec(e); if (!t)
    return null; var r = t[3] && t[3].indexOf(" > eval") > -1, n = tp.exec(t[3]); return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Gt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null }; }
var np = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function ip(e) { var t = np.exec(e); return t ? { file: t[3], methodName: t[1] || Gt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null; }
var op = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function sp(e) { var t = op.exec(e); return t ? { file: t[2], methodName: t[1] || Gt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null; }
var Ei = class {
    getLocation() { return null; }
}, wi = class {
    constructor() { this._error = new Error; }
    getLocation() { let t = this._error.stack; if (!t)
        return null; let n = ks(t).find(i => { if (!i.file)
        return !1; let o = Xn(i.file); return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4; }); return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column }; }
};
function qe(e) { return e === "minimal" ? new Ei : new wi; }
var _s = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function bt(e = {}) { let t = lp(e); return Object.entries(t).reduce((n, [i, o]) => (_s[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} }); }
function lp(e = {}) { return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e; }
function en(e = {}) { return t => (typeof e._count == "boolean" && (t._count = t._count._all), t); }
function Ns(e, t) { let r = en(e); return t({ action: "aggregate", unpacker: r, argsMapper: bt })(e); }
function up(e = {}) { let { select: t, ...r } = e; return typeof t == "object" ? bt({ ...r, _count: t }) : bt({ ...r, _count: { _all: !0 } }); }
function cp(e = {}) { return typeof e.select == "object" ? t => en(e)(t)._count : t => en(e)(t)._count._all; }
function Ls(e, t) { return t({ action: "count", unpacker: cp(e), argsMapper: up })(e); }
function pp(e = {}) { let t = bt(e); if (Array.isArray(t.by))
    for (let r of t.by)
        typeof r == "string" && (t.select[r] = !0);
else
    typeof t.by == "string" && (t.select[t.by] = !0); return t; }
function mp(e = {}) { return t => (typeof e?._count == "boolean" && t.forEach(r => { r._count = r._count._all; }), t); }
function $s(e, t) { return t({ action: "groupBy", unpacker: mp(e), argsMapper: pp })(e); }
function qs(e, t, r) { if (t === "aggregate")
    return n => Ns(n, r); if (t === "count")
    return n => Ls(n, r); if (t === "groupBy")
    return n => $s(n, r); }
function js(e, t) { let r = t.fields.filter(i => !i.relationName), n = si(r, i => i.name); return new Proxy({}, { get(i, o) { if (o in i || typeof o == "symbol")
        return i[o]; let s = n[o]; if (s)
        return new Jt(e, o, s.type, s.isList, s.kind === "enum"); }, ...$r(Object.keys(n)) }); }
var Vs = e => Array.isArray(e) ? e : e.split("."), Pi = (e, t) => Vs(t).reduce((r, n) => r && r[n], e), Bs = (e, t, r) => Vs(t).reduceRight((n, i, o, s) => Object.assign({}, Pi(e, s.slice(0, o)), { [i]: n }), r);
function dp(e, t) { return e === void 0 || t === void 0 ? [] : [...t, "select", e]; }
function fp(e, t, r) { return t === void 0 ? e ?? {} : Bs(t, r, e || !0); }
function vi(e, t, r, n, i, o) { let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {}); return l => { let u = qe(e._errorFormat), c = dp(n, i), p = fp(l, o, c), m = r({ dataPath: c, callsite: u })(p), f = gp(e, t); return new Proxy(m, { get(y, g) { if (!f.includes(g))
        return y[g]; let T = [a[g].type, r, g], C = [c, p]; return vi(e, ...T, ...C); }, ...$r([...f, ...Object.getOwnPropertyNames(m)]) }); }; }
function gp(e, t) { return e._runtimeDataModel.models[t].fields.filter(r => r.kind === "object").map(r => r.name); }
var Hs = S(ei());
var Gs = S(require("fs"));
var Ks = { keyword: Oe, entity: Oe, value: e => ie(it(e)), punctuation: it, directive: Oe, function: Oe, variable: e => ie(it(e)), string: e => ie(Qe(e)), boolean: xe, number: Oe, comment: Cr };
var yp = e => e, tn = {}, hp = 0, v = { manual: tn.Prism && tn.Prism.manual, disableWorkerMessageHandler: tn.Prism && tn.Prism.disableWorkerMessageHandler, util: { encode: function (e) { if (e instanceof he) {
            let t = e;
            return new he(t.type, v.util.encode(t.content), t.alias);
        }
        else
            return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " "); }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1); }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++hp }), e.__id; }, clone: function e(t, r) { let n, i, o = v.util.type(t); switch (r = r || {}, o) {
            case "Object":
                if (i = v.util.objId(t), r[i])
                    return r[i];
                n = {}, r[i] = n;
                for (let s in t)
                    t.hasOwnProperty(s) && (n[s] = e(t[s], r));
                return n;
            case "Array": return i = v.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function (s, a) { n[a] = e(s, r); }), n);
            default: return t;
        } } }, languages: { extend: function (e, t) { let r = v.util.clone(v.languages[e]); for (let n in t)
            r[n] = t[n]; return r; }, insertBefore: function (e, t, r, n) { n = n || v.languages; let i = n[e], o = {}; for (let a in i)
            if (i.hasOwnProperty(a)) {
                if (a == t)
                    for (let l in r)
                        r.hasOwnProperty(l) && (o[l] = r[l]);
                r.hasOwnProperty(a) || (o[a] = i[a]);
            } let s = n[e]; return n[e] = o, v.languages.DFS(v.languages, function (a, l) { l === s && a != e && (this[a] = o); }), o; }, DFS: function e(t, r, n, i) { i = i || {}; let o = v.util.objId; for (let s in t)
            if (t.hasOwnProperty(s)) {
                r.call(t, s, t[s], n || s);
                let a = t[s], l = v.util.type(a);
                l === "Object" && !i[o(a)] ? (i[o(a)] = !0, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = !0, e(a, r, s, i));
            } } }, plugins: {}, highlight: function (e, t, r) { let n = { code: e, grammar: t, language: r }; return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), he.stringify(v.util.encode(n.tokens), n.language); }, matchGrammar: function (e, t, r, n, i, o, s) { for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
            continue;
        if (g == s)
            return;
        let P = r[g];
        P = v.util.type(P) === "Array" ? P : [P];
        for (let T = 0; T < P.length; ++T) {
            let C = P[T], x = C.inside, A = !!C.lookbehind, pe = !!C.greedy, G = 0, Ke = C.alias;
            if (pe && !C.pattern.global) {
                let $ = C.pattern.toString().match(/[imuy]*$/)[0];
                C.pattern = RegExp(C.pattern.source, $ + "g");
            }
            C = C.pattern || C;
            for (let $ = n, z = i; $ < t.length; z += t[$].length, ++$) {
                let Ce = t[$];
                if (t.length > e.length)
                    return;
                if (Ce instanceof he)
                    continue;
                if (pe && $ != t.length - 1) {
                    C.lastIndex = z;
                    var p = C.exec(e);
                    if (!p)
                        break;
                    var c = p.index + (A ? p[1].length : 0), m = p.index + p[0].length, a = $, l = z;
                    for (let I = t.length; a < I && (l < m || !t[a].type && !t[a - 1].greedy); ++a)
                        l += t[a].length, c >= l && (++$, z = l);
                    if (t[$] instanceof he)
                        continue;
                    u = a - $, Ce = e.slice(z, l), p.index -= z;
                }
                else {
                    C.lastIndex = 0;
                    var p = C.exec(Ce), u = 1;
                }
                if (!p) {
                    if (o)
                        break;
                    continue;
                }
                A && (G = p[1] ? p[1].length : 0);
                var c = p.index + G, p = p[0].slice(G), m = c + p.length, f = Ce.slice(0, c), y = Ce.slice(m);
                let Y = [$, u];
                f && (++$, z += f.length, Y.push(f));
                let et = new he(g, x ? v.tokenize(p, x) : p, Ke, p, pe);
                if (Y.push(et), y && Y.push(y), Array.prototype.splice.apply(t, Y), u != 1 && v.matchGrammar(e, t, r, $, z, !0, g), o)
                    break;
            }
        }
    } }, tokenize: function (e, t) { let r = [e], n = t.rest; if (n) {
        for (let i in n)
            t[i] = n[i];
        delete t.rest;
    } return v.matchGrammar(e, r, t, 0, 0, !1), r; }, hooks: { all: {}, add: function (e, t) { let r = v.hooks.all; r[e] = r[e] || [], r[e].push(t); }, run: function (e, t) { let r = v.hooks.all[e]; if (!(!r || !r.length))
            for (var n = 0, i; i = r[n++];)
                i(t); } }, Token: he };
v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
v.languages.ts = v.languages.typescript;
function he(e, t, r, n, i) { this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i; }
he.stringify = function (e, t) { return typeof e == "string" ? e : Array.isArray(e) ? e.map(function (r) { return he.stringify(r, t); }).join("") : xp(e.type)(e.content); };
function xp(e) { return Ks[e] || yp; }
function Us(e) { return bp(e, v.languages.javascript); }
function bp(e, t) { return v.tokenize(e, t).map(n => he.stringify(n)).join(""); }
var Qs = S(zo());
function Js(e) { return (0, Qs.default)(e); }
var rn = class e {
    static read(t) { let r; try {
        r = Gs.default.readFileSync(t, "utf-8");
    }
    catch {
        return null;
    } return e.fromContent(r); }
    static fromContent(t) { let r = t.split(/\r?\n/); return new e(1, r); }
    constructor(t, r) { this.firstLineNumber = t, this.lines = r; }
    get lastLineNumber() { return this.firstLineNumber + this.lines.length - 1; }
    mapLineAt(t, r) { if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
        return this; let n = t - this.firstLineNumber, i = [...this.lines]; return i[n] = r(i[n]), new e(this.firstLineNumber, i); }
    mapLines(t) { return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n))); }
    lineAt(t) { return this.lines[t - this.firstLineNumber]; }
    prependSymbolAt(t, r) { return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`); }
    slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Js(n).split(`
`));
    }
    highlight() {
        let t = Us(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
    }
    toString() {
        return this.lines.join(`
`);
    }
};
var Ep = { red: fe, gray: Cr, dim: De, bold: ie, underline: re, highlightSource: e => e.highlight() }, wp = { red: e => e, gray: e => e, dim: e => e, bold: e => e, underline: e => e, highlightSource: e => e };
function Pp({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) { let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? !1, callArguments: i }; if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
    return s; let a = e.getLocation(); if (!a || !a.lineNumber || !a.columnNumber)
    return s; let l = Math.max(1, a.lineNumber - 3), u = rn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber); if (u && c) {
    let p = Tp(c), m = vp(c);
    if (!m)
        return s;
    s.functionName = `${m.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, y => y.slice(0, m.openingBraceIndex))), u = o.highlightSource(u);
    let f = String(u.lastLineNumber).length;
    if (s.contextLines = u.mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y).mapLines(y => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
        let y = p + f + 1;
        y += 2, s.callArguments = (0, Hs.default)(i, y).slice(y);
    }
} return s; }
function vp(e) { let t = Object.keys(me.ModelAction).join("|"), n = new RegExp(String.raw `\.(${t})\(`).exec(e); if (n) {
    let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
} return null; }
function Tp(e) { let t = 0; for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ")
        return t;
    t++;
} return t; }
function Cp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Mp(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    }
    else
        a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
}
function Mp(e) { let t = [e.fileName]; return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":"); }
function Et(e) { let t = e.showColors ? Ep : wp, r = Pp(e, t); return Cp(r, t); }
function Ws(e, t, r, n) { return e === me.ModelAction.findFirstOrThrow || e === me.ModelAction.findUniqueOrThrow ? Ap(t, r, n) : n; }
function Ap(e, t, r) { return async (n) => { if ("rejectOnNotFound" in n.args) {
    let o = Et({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
    throw new X(o, { clientVersion: t });
} return await r(n).catch(o => { throw o instanceof K && o.code === "P2025" ? new Me(`No ${e} found`, t) : o; }); }; }
function Te(e) { return e.replace(/^./, t => t.toLowerCase()); }
var Rp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"], Sp = ["aggregate", "count", "groupBy"];
function Ti(e, t) { let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Fp(e, t), Dp(e, t), qt(r), ne("name", () => t), ne("$name", () => t), ne("$parent", () => e._appliedParent)]; return Ee({}, n); }
function Fp(e, t) { let r = Te(t), n = Object.keys(me.ModelAction).concat("count"); return { getKeys() { return n; }, getPropertyValue(i) { let o = i, s = l => e._request(l); s = Ws(o, t, e._clientVersion, s); let a = l => u => { let c = qe(e._errorFormat); return e._createPrismaPromise(p => { let m = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c }; return s({ ...m, ...l }); }); }; return Rp.includes(o) ? vi(e, t, a) : Ip(i) ? qs(e, i, a) : a({}); } }; }
function Ip(e) { return Sp.includes(e); }
function Dp(e, t) { return He(ne("fields", () => { let r = e._runtimeDataModel.models[t]; return js(t, r); })); }
function zs(e) { return e.replace(/^./, t => t.toUpperCase()); }
var Ci = Symbol();
function Ht(e) { let t = [Op(e), ne(Ci, () => e), ne("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions(); return r && t.push(qt(r)), Ee(e, t); }
function Op(e) { let t = Object.keys(e._runtimeDataModel.models), r = t.map(Te), n = [...new Set(t.concat(r))]; return He({ getKeys() { return n; }, getPropertyValue(i) { let o = zs(i); if (e._runtimeDataModel.models[o] !== void 0)
        return Ti(e, o); if (e._runtimeDataModel.models[i] !== void 0)
        return Ti(e, i); }, getPropertyDescriptor(i) { if (!r.includes(i))
        return { enumerable: !1 }; } }); }
function nn(e) { return e[Ci] ? e[Ci] : e; }
function Ys(e) { if (typeof e == "function")
    return e(this); let t = nn(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: !0 }, $use: { value: void 0 }, $on: { value: void 0 } }); return Ht(r); }
function Zs({ result: e, modelName: t, select: r, extensions: n }) { let i = n.getAllComputedFields(t); if (!i)
    return e; let o = [], s = []; for (let a of Object.values(i)) {
    if (r) {
        if (!r[a.name])
            continue;
        let l = a.needs.filter(u => !r[u]);
        l.length > 0 && s.push(jt(l));
    }
    kp(e, a.needs) && o.push(_p(a, Ee(e, o)));
} return o.length > 0 || s.length > 0 ? Ee(e, [...o, ...s]) : e; }
function kp(e, t) { return t.every(r => oi(e, r)); }
function _p(e, t) { return He(ne(e.name, () => e.compute(t))); }
function on({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) { if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
        t[s] = on({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
    return t;
} let o = e(t, i, r) ?? t; return r.include && Xs({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Xs({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o; }
function Xs({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) { for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null)
        continue;
    let l = n.models[r].fields.find(c => c.name === o);
    if (!l || l.kind !== "object" || !l.relationName)
        continue;
    let u = typeof s == "object" ? s : {};
    t[o] = on({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
} }
function ea({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) { return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : on({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Zs({ result: s, modelName: Te(a), select: l.select, extensions: n }) }); }
function ta(e) { if (e instanceof se)
    return Np(e); if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++)
        r[n] = Wt(e[n]);
    return r;
} let t = {}; for (let r in e)
    t[r] = Wt(e[r]); return t; }
function Np(e) { return new se(e.strings, e.values); }
function Wt(e) { if (typeof e != "object" || e == null || e instanceof Ae || ht(e))
    return e; if (yt(e))
    return new Pe(e.toFixed()); if (dt(e))
    return new Date(+e); if (ArrayBuffer.isView(e))
    return e.slice(0); if (Array.isArray(e)) {
    let t = e.length, r;
    for (r = Array(t); t--;)
        r[t] = Wt(e[t]);
    return r;
} if (typeof e == "object") {
    let t = {};
    for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: Wt(e[r]), configurable: !0, enumerable: !0, writable: !0 }) : t[r] = Wt(e[r]);
    return t;
} Ge(e, "Unknown value"); }
function na(e, t, r, n = 0) { return e._createPrismaPromise(i => { let o = t.customDataProxyFetch; return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: ta(t.args ?? {}), __internalParams: t, query: (s, a = t) => { let l = a.customDataProxyFetch; return a.customDataProxyFetch = aa(o, l), a.args = s, na(e, a, r, n + 1); } }); }); }
function ia(e, t) { let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i; if (e._extensions.isEmpty())
    return e._executeRequest(t); let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o); return na(e, t, s); }
function oa(e) { return t => { let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks(); return n.length ? sa(r, n, 0, e) : e(r); }; }
function sa(e, t, r, n) { if (r === t.length)
    return n(e); let i = e.customDataProxyFetch, o = e.requests[0].transaction; return t[r]({ args: { queries: e.requests.map(s => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) { let l = a.customDataProxyFetch; return a.customDataProxyFetch = aa(i, l), sa(a, t, r + 1, n); } }); }
var ra = e => e;
function aa(e = ra, t = ra) { return r => e(t(r)); }
function ua(e, t, r) { let n = Te(r); return !t.result || !(t.result.$allModels || t.result[n]) ? e : Lp({ ...e, ...la(t.name, e, t.result.$allModels), ...la(t.name, e, t.result[n]) }); }
function Lp(e) { let t = new be, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap(o => r(o, i)) : [n])); return ct(e, n => ({ ...n, needs: r(n.name, new Set) })); }
function la(e, t, r) { return r ? ct(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter(s => n[s]) : [], compute: $p(t, o, i) })) : {}; }
function $p(e, t, r) { let n = e?.[t]?.compute; return n ? i => r({ ...i, [t]: n(i) }) : r; }
function ca(e, t) { if (!t)
    return e; let r = { ...e }; for (let n of Object.values(t))
    if (e[n.name])
        for (let i of n.needs)
            r[i] = !0; return r; }
var sn = class {
    constructor(t, r) { this.extension = t; this.previous = r; this.computedFieldsCache = new be; this.modelExtensionsCache = new be; this.queryCallbacksCache = new be; this.clientExtensions = $t(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions()); this.batchCallbacks = $t(() => { let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch; return r ? t.concat(r) : t; }); }
    getAllComputedFields(t) { return this.computedFieldsCache.getOrCreate(t, () => ua(this.previous?.getAllComputedFields(t), this.extension, t)); }
    getAllClientExtensions() { return this.clientExtensions.get(); }
    getAllModelExtensions(t) { return this.modelExtensionsCache.getOrCreate(t, () => { let r = Te(t); return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] }; }); }
    getAllQueryCallbacks(t, r) { return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => { let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query; return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i)); }); }
    getAllBatchQueryCallbacks() { return this.batchCallbacks.get(); }
}, an = class e {
    constructor(t) { this.head = t; }
    static empty() { return new e; }
    static single(t) { return new e(new sn(t)); }
    isEmpty() { return this.head === void 0; }
    append(t) { return new e(new sn(t, this.head)); }
    getAllComputedFields(t) { return this.head?.getAllComputedFields(t); }
    getAllClientExtensions() { return this.head?.getAllClientExtensions(); }
    getAllModelExtensions(t) { return this.head?.getAllModelExtensions(t); }
    getAllQueryCallbacks(t, r) { return this.head?.getAllQueryCallbacks(t, r) ?? []; }
    getAllBatchQueryCallbacks() { return this.head?.getAllBatchQueryCallbacks() ?? []; }
};
var pa = k("prisma:client"), ma = { Vercel: "vercel", "Netlify CI": "netlify" };
function da({ postinstall: e, ciName: t, clientVersion: r }) {
    if (pa("checkPlatformCaching:postinstall", e), pa("checkPlatformCaching:ciName", t), e === !0 && t && t in ma) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ma[t]}-build`;
        throw console.error(n), new D(n, r);
    }
}
function fa(e, t) { return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {}; }
function zt({ error: e, user_facing_error: t }, r) { return t.error_code ? new K(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new U(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx }); }
var wt = class {
};
var ba = S(require("fs")), Yt = S(require("path"));
function ln(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${qp(e)}`;
}
function qp(e) { let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i]; return ri({ ...t, binaryTargets: o }); }
function je(e) { let { runtimeBinaryTarget: t } = e; return `Prisma Client could not locate the Query Engine for runtime "${t}".`; }
function Ve(e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map(i => `  ${i}`).join(`
`)}`;
}
function ga(e) {
    let { runtimeBinaryTarget: t } = e;
    return `${je(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${ln(e)}

${Ve(e)}`;
}
function un(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function ya(e) {
    let { queryEngineName: t } = e;
    return `${je(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${un("engine-not-found-bundler-investigation")}

${Ve(e)}`;
}
function ha(e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find(i => i.native);
    return `${je(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${ln(e)}

${Ve(e)}`;
}
function xa(e) {
    let { queryEngineName: t } = e;
    return `${je(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${un("engine-not-found-tooling-investigation")}

${Ve(e)}`;
}
var jp = k("prisma:client:engines:resolveEnginePath"), Vp = () => new RegExp("runtime[\\\\/]library\\.m?js$");
async function Ea(e, t) { let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath; if (r !== void 0)
    return r; let { enginePath: n, searchedLocations: i } = await Bp(e, t); if (jp("enginePath", n), n !== void 0 && e === "binary" && Yn(n), n !== void 0)
    return t.prismaPath = n; let o = await lt(), s = t.generator?.binaryTargets ?? [], a = s.some(m => m.native), l = !s.some(m => m.value === o), u = __filename.match(Vp()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: wa(e, o), expectedLocation: Yt.default.relative(process.cwd(), t.dirname) }, p; throw a && l ? p = ha(c) : l ? p = ga(c) : u ? p = ya(c) : p = xa(c), new D(p, t.clientVersion); }
async function Bp(engineType, config) { let binaryTarget = await lt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Yt.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, Yt.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd]; __filename.includes("resolveEnginePath") && searchLocations.push(Zo()); for (let e of searchLocations) {
    let t = wa(engineType, binaryTarget), r = Yt.default.join(e, t);
    if (searchedLocations.push(e), ba.default.existsSync(r))
        return { enginePath: r, searchedLocations };
} return { enginePath: void 0, searchedLocations }; }
function wa(e, t) { return e === "library" ? Ln(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`; }
function cn(e, t) { return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 }; }
var Mi = S(ii());
function Pa(e) { return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, t => `${t[0]}5`) : ""; }
function va(e) {
    return e.split(`
`).map(t => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var Ta = S(ss());
function Ca({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) { return (0, Ta.default)({ user: t, repo: r, template: n, title: e, body: i }); }
function Ma({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
    let a = go(6e3 - (s?.length ?? 0)), l = va((0, Mi.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Mi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Pa(s) : ""}
\`\`\`
`), p = Ca({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${re(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function pn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) { let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url; if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
    throw new D(`error: Environment variable not found: ${s.fromEnvVar}.`, n); if (i === void 0)
    throw new D("error: Missing URL environment variable, value, or override.", n); return i; }
var mn = class extends Error {
    constructor(r, n) { super(r); this.clientVersion = n.clientVersion, this.cause = n.cause; }
    get [Symbol.toStringTag]() { return this.name; }
};
var le = class extends mn {
    constructor(r, n) { super(r, n); this.isRetryable = n.isRetryable ?? !0; }
};
function R(e, t) { return { ...e, isRetryable: t }; }
var Pt = class extends le {
    constructor(r) { super("This request must be retried", R(r, !0)); this.name = "ForcedRetryError"; this.code = "P5001"; }
};
E(Pt, "ForcedRetryError");
var ze = class extends le {
    constructor(r, n) { super(r, R(n, !1)); this.name = "InvalidDatasourceError"; this.code = "P5002"; }
};
E(ze, "InvalidDatasourceError");
var Ye = class extends le {
    constructor(r, n) { super(r, R(n, !1)); this.name = "NotImplementedYetError"; this.code = "P5004"; }
};
E(Ye, "NotImplementedYetError");
var L = class extends le {
    constructor(r, n) { super(r, n); this.response = n.response; let i = this.response.headers.get("prisma-request-id"); if (i) {
        let o = `(The request id was: ${i})`;
        this.message = this.message + " " + o;
    } }
};
var Ze = class extends L {
    constructor(r) { super("Schema needs to be uploaded", R(r, !0)); this.name = "SchemaMissingError"; this.code = "P5005"; }
};
E(Ze, "SchemaMissingError");
var Ai = "This request could not be understood by the server", Zt = class extends L {
    constructor(r, n, i) { super(n || Ai, R(r, !1)); this.name = "BadRequestError"; this.code = "P5000"; i && (this.code = i); }
};
E(Zt, "BadRequestError");
var Xt = class extends L {
    constructor(r, n) { super("Engine not started: healthcheck timeout", R(r, !0)); this.name = "HealthcheckTimeoutError"; this.code = "P5013"; this.logs = n; }
};
E(Xt, "HealthcheckTimeoutError");
var er = class extends L {
    constructor(r, n, i) { super(n, R(r, !0)); this.name = "EngineStartupError"; this.code = "P5014"; this.logs = i; }
};
E(er, "EngineStartupError");
var tr = class extends L {
    constructor(r) { super("Engine version is not supported", R(r, !1)); this.name = "EngineVersionNotSupportedError"; this.code = "P5012"; }
};
E(tr, "EngineVersionNotSupportedError");
var Ri = "Request timed out", rr = class extends L {
    constructor(r, n = Ri) { super(n, R(r, !1)); this.name = "GatewayTimeoutError"; this.code = "P5009"; }
};
E(rr, "GatewayTimeoutError");
var Kp = "Interactive transaction error", nr = class extends L {
    constructor(r, n = Kp) { super(n, R(r, !1)); this.name = "InteractiveTransactionError"; this.code = "P5015"; }
};
E(nr, "InteractiveTransactionError");
var Up = "Request parameters are invalid", ir = class extends L {
    constructor(r, n = Up) { super(n, R(r, !1)); this.name = "InvalidRequestError"; this.code = "P5011"; }
};
E(ir, "InvalidRequestError");
var Si = "Requested resource does not exist", or = class extends L {
    constructor(r, n = Si) { super(n, R(r, !1)); this.name = "NotFoundError"; this.code = "P5003"; }
};
E(or, "NotFoundError");
var Fi = "Unknown server error", vt = class extends L {
    constructor(r, n, i) { super(n || Fi, R(r, !0)); this.name = "ServerError"; this.code = "P5006"; this.logs = i; }
};
E(vt, "ServerError");
var Ii = "Unauthorized, check your connection string", sr = class extends L {
    constructor(r, n = Ii) { super(n, R(r, !1)); this.name = "UnauthorizedError"; this.code = "P5007"; }
};
E(sr, "UnauthorizedError");
var Di = "Usage exceeded, retry again later", ar = class extends L {
    constructor(r, n = Di) { super(n, R(r, !0)); this.name = "UsageExceededError"; this.code = "P5008"; }
};
E(ar, "UsageExceededError");
async function Qp(e) { let t; try {
    t = await e.text();
}
catch {
    return { type: "EmptyError" };
} try {
    let r = JSON.parse(t);
    if (typeof r == "string")
        switch (r) {
            case "InternalDataProxyError": return { type: "DataProxyError", body: r };
            default: return { type: "UnknownTextError", body: r };
        }
    if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
    }
    return { type: "UnknownJsonError", body: r };
}
catch {
    return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
} }
async function lr(e, t) { if (e.ok)
    return; let r = { clientVersion: t, response: e }, n = await Qp(e); if (n.type === "QueryEngineError")
    throw new K(n.body.message, { code: n.body.error_code, clientVersion: t }); if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
        throw new vt(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Ze(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new tr(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new er(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new D(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Xt(r, i);
        }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new nr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
        throw new ir(r, n.body.InvalidRequestError.reason);
} if (e.status === 401 || e.status === 403)
    throw new sr(r, Tt(Ii, n)); if (e.status === 404)
    return new or(r, Tt(Si, n)); if (e.status === 429)
    throw new ar(r, Tt(Di, n)); if (e.status === 504)
    throw new rr(r, Tt(Ri, n)); if (e.status >= 500)
    throw new vt(r, Tt(Fi, n)); if (e.status >= 400)
    throw new Zt(r, Tt(Ai, n)); }
function Tt(e, t) { return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`; }
function Aa(e) { let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r; return new Promise(i => setTimeout(() => i(n), n)); }
function Ra(e) { if (!!e.generator?.previewFeatures.some(r => r.toLowerCase().includes("metrics")))
    throw new D("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion); }
var Sa = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.2.0-25.2804dc98259d2ea960602aca6b8e7fdc03c1758f", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*", "@swc/core": "1.3.75", "@swc/jest": "0.2.29", "@types/jest": "29.5.3", "@types/node": "18.17.5", execa: "5.1.1", jest: "29.6.2", typescript: "4.9.5" };
var ur = class extends le {
    constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, R(n, !0));
        this.name = "RequestError";
        this.code = "P5010";
    }
};
E(ur, "RequestError");
async function Xe(e, t, r = n => n) { let n = t.clientVersion; try {
    return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Oi)(e, t);
}
catch (i) {
    console.log(e);
    let o = i.message ?? "Unknown error";
    throw new ur(o, { clientVersion: n });
} }
function Gp(e) { return { ...e.headers, "Content-Type": "application/json" }; }
function Hp(e) { return { method: e.method, headers: Gp(e) }; }
function Wp(e, t) { return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new ki(t.headers) }; }
async function Oi(e, t = {}) { let r = zp("https"), n = Hp(t), i = [], { origin: o } = new URL(e); return new Promise((s, a) => { let l = r.request(e, n, u => { let { statusCode: c, headers: { location: p } } = u; c >= 301 && c <= 399 && p && (p.startsWith("http") === !1 ? s(Oi(`${o}${p}`, t)) : s(Oi(p, t))), u.on("data", m => i.push(m)), u.on("end", () => s(Wp(i, u))), u.on("error", a); }); l.on("error", a), l.end(t.body ?? ""); }); }
var zp = typeof require < "u" ? require : () => { }, ki = class {
    constructor(t = {}) { this.headers = new Map; for (let [r, n] of Object.entries(t))
        if (typeof n == "string")
            this.headers.set(r, n);
        else if (Array.isArray(n))
            for (let i of n)
                this.headers.set(r, i); }
    append(t, r) { this.headers.set(t, r); }
    delete(t) { this.headers.delete(t); }
    get(t) { return this.headers.get(t) ?? null; }
    has(t) { return this.headers.has(t); }
    set(t, r) { this.headers.set(t, r); }
    forEach(t, r) { for (let [n, i] of this.headers)
        t.call(r, i, n, this); }
};
var Yp = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Fa = k("prisma:client:dataproxyEngine");
async function Zp(e, t) { let r = Sa["@prisma/engines-version"], n = t.clientVersion ?? "unknown"; if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION; if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
    return n; let [i, o] = n?.split("-") ?? []; if (o === void 0 && Yp.test(i))
    return i; if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
    let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = Xp(`<=${a}.${l}.${u}`), p = await Xe(c, { clientVersion: n });
    if (!p.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
    let m = await p.text();
    Fa("length of body fetched from unpkg.com", m.length);
    let f;
    try {
        f = JSON.parse(m);
    }
    catch (y) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", m), y;
    }
    return f.version;
} throw new Ye("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n }); }
async function Ia(e, t) { let r = await Zp(e, t); return Fa("version", r), r; }
function Xp(e) { return encodeURI(`https://unpkg.com/prisma@${e}/package.json`); }
var Da = 3, _i = k("prisma:client:dataproxyEngine"), Ni = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i }) { this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i; }
    build({ traceparent: t, interactiveTransaction: r } = {}) { let n = { Authorization: `Bearer ${this.apiKey}` }; this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id); let i = this.buildCaptureSettings(); return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n; }
    buildCaptureSettings() { let t = []; return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t; }
}, cr = class extends wt {
    constructor(r) { super(); Ra(r), this.config = r, this.env = { ...this.config.env, ...process.env }, this.inlineSchema = r.inlineSchema ?? "", this.inlineDatasources = r.inlineDatasources ?? {}, this.inlineSchemaHash = r.inlineSchemaHash ?? "", this.clientVersion = r.clientVersion ?? "unknown", this.logEmitter = r.logEmitter, this.tracingHelper = this.config.tracingHelper; }
    apiKey() { return this.headerBuilder.apiKey; }
    version() { return "unknown"; }
    async start() { this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => { let [r, n] = this.extractHostAndApiKey(); this.host = r, this.headerBuilder = new Ni({ apiKey: n, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries }), this.remoteClientVersion = await Ia(r, this.config), _i("host", this.host); })(), await this.startPromise; }
    async stop() { }
    propagateResponseExtensions(r) { r?.logs?.length && r.logs.forEach(n => { switch (n.level) {
        case "debug":
        case "error":
        case "trace":
        case "warn":
        case "info": break;
        case "query": {
            let i = typeof n.attributes.query == "string" ? n.attributes.query : "";
            if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split("/* traceparent");
                i = o;
            }
            this.logEmitter.emit("query", { query: i, timestamp: n.timestamp, duration: n.attributes.duration_ms, params: n.attributes.params, target: n.attributes.target });
        }
    } }), r?.traces?.length && this.tracingHelper.createEngineSpan({ span: !0, spans: r.traces }); }
    on(r, n) { if (r === "beforeExit")
        throw new Error('"beforeExit" hook is not applicable to the remote query engine'); this.logEmitter.on(r, n); }
    async url(r) { return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`; }
    async uploadSchema() { let r = { name: "schemaUpload", internal: !0 }; return this.tracingHelper.runInChildSpan(r, async () => { let n = await Xe(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion }); n.ok || _i("schema response status", n.status); let i = await lr(n, this.clientVersion); if (i)
        throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${i.message}` }), i; this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})` }); }); }
    request(r, { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }) { return this.requestInternal({ body: r, traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }); }
    async requestBatch(r, { traceparent: n, transaction: i, customDataProxyFetch: o }) { let s = i?.kind === "itx" ? i.options : void 0, a = cn(r, i), { batchResult: l, elapsed: u } = await this.requestInternal({ body: a, customDataProxyFetch: o, interactiveTransaction: s, traceparent: n }); return l.map(c => "errors" in c && c.errors.length > 0 ? zt(c.errors[0], this.clientVersion) : { data: c, elapsed: u }); }
    requestInternal({ body: r, traceparent: n, customDataProxyFetch: i, interactiveTransaction: o }) { return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: s }) => { let a = o ? `${o.payload.endpoint}/graphql` : await this.url("graphql"); s(a); let l = await Xe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n, interactiveTransaction: o }), body: JSON.stringify(r), clientVersion: this.clientVersion }, i); l.ok || _i("graphql response status", l.status), await this.handleError(await lr(l, this.clientVersion)); let u = await l.json(), c = u.extensions; if (c && this.propagateResponseExtensions(c), u.errors)
            throw u.errors.length === 1 ? zt(u.errors[0], this.config.clientVersion) : new U(u.errors, { clientVersion: this.config.clientVersion }); return u; } }); }
    async transaction(r, n, i) { let o = { start: "starting", commit: "committing", rollback: "rolling back" }; return this.withRetry({ actionGerund: `${o[r]} transaction`, callback: async ({ logHttpCall: s }) => { if (r === "start") {
            let a = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel }), l = await this.url("transaction/start");
            s(l);
            let u = await Xe(l, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), body: a, clientVersion: this.clientVersion });
            await this.handleError(await lr(u, this.clientVersion));
            let c = await u.json(), p = c.extensions;
            p && this.propagateResponseExtensions(p);
            let m = c.id, f = c["data-proxy"].endpoint;
            return { id: m, payload: { endpoint: f } };
        }
        else {
            let a = `${i.payload.endpoint}/${r}`;
            s(a);
            let l = await Xe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await lr(l, this.clientVersion));
            let c = (await l.json()).extensions;
            c && this.propagateResponseExtensions(c);
            return;
        } } }); }
    extractHostAndApiKey() { let r = { clientVersion: this.clientVersion }, n = Object.keys(this.inlineDatasources)[0], i = pn({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), o; try {
        o = new URL(i);
    }
    catch {
        throw new ze(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
    } let { protocol: s, host: a, searchParams: l } = o; if (s !== "prisma:")
        throw new ze(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r); let u = l.get("api_key"); if (u === null || u.length < 1)
        throw new ze(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, r); return [a, u]; }
    metrics() { throw new Ye("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion }); }
    async withRetry(r) { for (let n = 0;; n++) {
        let i = o => { this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})` }); };
        try {
            return await r.callback({ logHttpCall: i });
        }
        catch (o) {
            if (!(o instanceof le) || !o.isRetryable)
                throw o;
            if (n >= Da)
                throw o instanceof Pt ? o.cause : o;
            this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${Da} failed for ${r.actionGerund}: ${o.message ?? "(unknown)"}` });
            let s = await Aa(n);
            this.logEmitter.emit("warn", { message: `Retrying after ${s}ms` });
        }
    } }
    async handleError(r) { if (r instanceof Ze)
        throw await this.uploadSchema(), new Pt({ clientVersion: this.clientVersion, cause: r }); if (r)
        throw r; }
};
var La = S(require("fs"));
function Oa(e) { if (e?.kind === "itx")
    return e.options.id; }
var $i = S(require("os")), ka = S(require("path"));
var Li = Symbol("PrismaLibraryEngineCache");
function em() { let e = globalThis; return e[Li] === void 0 && (e[Li] = {}), e[Li]; }
function tm(e) { let t = em(); if (t[e] !== void 0)
    return t[e]; let r = ka.default.toNamespacedPath(e), n = { exports: {} }, i = 0; return process.platform !== "win32" && (i = $i.default.constants.dlopen.RTLD_LAZY | $i.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports; }
var dn = class {
    constructor(t) { this.config = t; }
    async loadLibrary() { let t = await Kn(), r = await Ea("library", this.config); try {
        return this.config.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: !0 }, () => tm(r));
    }
    catch (n) {
        let i = Zn({ e: n, platformInfo: t, id: r });
        throw new D(i, this.config.clientVersion);
    } }
};
var Se = k("prisma:client:libraryEngine");
function rm(e) { return e.item_type === "query" && "query" in e; }
function nm(e) { return "level" in e ? e.level === "error" && e.message === "PANIC" : !1; }
var _a = [...Un, "native"], Na = 0, pr = class extends wt {
    constructor(r, n = new dn(r)) {
        super();
        try {
            this.datamodel = La.default.readFileSync(r.datamodelPath, "utf-8");
        }
        catch (s) {
            throw s.stack.match(/\/\.next|\/next@|\/next\//) ? new D(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : r.isBundled === !0 ? new D("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r.clientVersion) : s;
        }
        this.config = r, this.libraryStarted = !1, this.logQueries = r.logQueries ?? !1, this.logLevel = r.logLevel ?? "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, r.enableDebugLogs && (this.logLevel = "debug");
        let i = Object.keys(r.overrideDatasources)[0], o = r.overrideDatasources[i]?.url;
        i !== void 0 && o !== void 0 && (this.datasourceOverrides = { [i]: o }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
    }
    checkForTooManyEngines() { Na === 10 && console.warn(`${xe("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`); }
    async transaction(r, n, i) { await this.start(); let o = JSON.stringify(n), s; if (r === "start") {
        let l = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel });
        s = await this.engine?.startTransaction(l, o);
    }
    else
        r === "commit" ? s = await this.engine?.commitTransaction(i.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(i.id, o)); let a = this.parseEngineResponse(s); if (a.error_code)
        throw new K(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta }); return a; }
    async instantiateLibrary() { if (Se("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise; Nn(), this.platform = await this.getPlatform(), await this.loadEngine(), this.version(); }
    async getPlatform() {
        if (this.platform)
            return this.platform;
        let r = await lt();
        if (!_a.includes(r))
            throw new D(`Unknown ${fe("PRISMA_QUERY_ENGINE_LIBRARY")} ${fe(ie(r))}. Possible binaryTargets: ${Qe(_a.join(", "))} or a path to the query engine library.
You may have to run ${Qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return r;
    }
    parseEngineResponse(r) { if (!r)
        throw new U("Response from the Engine was empty", { clientVersion: this.config.clientVersion }); try {
        return JSON.parse(r);
    }
    catch {
        throw new U("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
    } }
    async loadEngine() { if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
            let r = new WeakRef(this);
            this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, n => { r.deref()?.logger(n); }), Na++;
        }
        catch (r) {
            let n = r, i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new D(i.message, this.config.clientVersion, i.error_code);
        }
    } }
    logger(r) { let n = this.parseEngineResponse(r); if (n) {
        if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
        }
        n.level = n?.level.toLowerCase() ?? "unknown", rm(n) ? this.logEmitter.emit("query", { timestamp: new Date, query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : nm(n) ? this.loggerRustPanic = new ce(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: new Date, message: n.message, target: n.module_path });
    } }
    getErrorMessageWithLink(r) { return Ma({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: this.versionInfo?.commit, database: this.config.activeProvider, query: this.lastQuery }); }
    parseInitError(r) { try {
        return JSON.parse(r);
    }
    catch { } return r; }
    parseRequestError(r) { try {
        return JSON.parse(r);
    }
    catch { } return r; }
    on(r, n) { if (r === "beforeExit")
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.'); this.logEmitter.on(r, n); }
    async start() { if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return Se(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise; if (this.libraryStarted)
        return; let r = async () => { Se("library starting"); try {
        let n = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.connect(JSON.stringify(n)), this.libraryStarted = !0, Se("library started");
    }
    catch (n) {
        let i = this.parseInitError(n.message);
        throw typeof i == "string" ? n : new D(i.message, this.config.clientVersion, i.error_code);
    }
    finally {
        this.libraryStartingPromise = void 0;
    } }; return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise; }
    async stop() { if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return Se("library is already stopping"), this.libraryStoppingPromise; if (!this.libraryStarted)
        return; let r = async () => { await new Promise(i => setTimeout(i, 5)), Se("library stopping"); let n = { traceparent: this.config.tracingHelper.getTraceParent() }; await this.engine?.disconnect(JSON.stringify(n)), this.libraryStarted = !1, this.libraryStoppingPromise = void 0, Se("library stopped"); }; return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise; }
    version() { return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown"; }
    debugPanic(r) { return this.library?.debugPanic(r); }
    async request(r, { traceparent: n, interactiveTransaction: i }) {
        Se(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
        try {
            await this.start(), this.executingQueryPromise = this.engine?.query(s, o, i?.id), this.lastQuery = s;
            let a = this.parseEngineResponse(await this.executingQueryPromise);
            if (a.errors)
                throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new U(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
            if (this.loggerRustPanic)
                throw this.loggerRustPanic;
            return { data: a, elapsed: 0 };
        }
        catch (a) {
            if (a instanceof D)
                throw a;
            if (a.code === "GenericFailure" && a.message?.startsWith("PANIC:"))
                throw new ce(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
            let l = this.parseRequestError(a.message);
            throw typeof l == "string" ? a : new U(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
        }
    }
    async requestBatch(r, { transaction: n, traceparent: i }) { Se("requestBatch"); let o = cn(r, n); await this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Oa(n)); let s = await this.executingQueryPromise, a = this.parseEngineResponse(s); if (a.errors)
        throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new U(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion }); let { batchResult: l, errors: u } = a; if (Array.isArray(l))
        return l.map(c => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 }); throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a)); }
    buildQueryError(r) { return r.user_facing_error.is_panic ? new ce(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion) : zt(r, this.config.clientVersion); }
    async metrics(r) { await this.start(); let n = await this.engine.metrics(JSON.stringify(r)); return r.format === "prometheus" ? n : this.parseEngineResponse(n); }
};
function $a(e, t) { let r; try {
    r = pn({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
}
catch { } e.noEngine !== !0 && r?.startsWith("prisma://") && Lt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"); let n = Hn(t.generator); if (r?.startsWith("prisma://") || e.noEngine)
    return new cr(t); if (n === "library")
    return new pr(t); throw "binary", new X("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion }); }
var Ua = S(qi());
function Ba(e, t) { let r = Ka(e), n = im(r), i = sm(n); i ? fn(i, t) : t.addErrorMessage(() => "Unknown error"); }
function Ka(e) { return e.errors.flatMap(t => t.kind === "Union" ? Ka(t) : [t]); }
function im(e) { let t = new Map, r = []; for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
    o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: om(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
} return r.push(...t.values()), r; }
function om(e, t) { return [...new Set(e.concat(t))]; }
function sm(e) { return ai(e, (t, r) => { let n = ja(t), i = ja(r); return n !== i ? n - i : Va(t) - Va(r); }); }
function ja(e) { let t = 0; return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t; }
function Va(e) { switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge": return 20;
    case "InvalidArgumentType": return 10;
    case "RequiredArgumentMissing": return -10;
    default: return 0;
} }
var Fe = class {
    constructor(t, r) { this.name = t; this.value = r; this.isRequired = !1; }
    makeRequired() { return this.isRequired = !0, this; }
    write(t) { let { colors: { green: r } } = t.context; t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value); }
};
var gn = class {
    constructor() { this.fields = []; }
    addField(t, r) { return this.fields.push({ write(n) { let { green: i, dim: o } = n.context.colors; n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+"))); } }), this; }
    write(t) { let { colors: { green: r } } = t.context; t.writeLine(r("{")).withIndent(() => { t.writeJoined(xt, this.fields).newLine(); }).write(r("}")).addMarginSymbol(r("+")); }
};
function fn(e, t) { switch (e.kind) {
    case "IncludeAndSelect":
        am(e, t);
        break;
    case "IncludeOnScalar":
        lm(e, t);
        break;
    case "EmptySelection":
        um(e, t);
        break;
    case "UnknownSelectionField":
        cm(e, t);
        break;
    case "UnknownArgument":
        pm(e, t);
        break;
    case "UnknownInputField":
        mm(e, t);
        break;
    case "RequiredArgumentMissing":
        dm(e, t);
        break;
    case "InvalidArgumentType":
        fm(e, t);
        break;
    case "InvalidArgumentValue":
        gm(e, t);
        break;
    case "ValueTooLarge":
        ym(e, t);
        break;
    case "SomeFieldsMissing":
        hm(e, t);
        break;
    case "TooManyFieldsGiven":
        xm(e, t);
        break;
    case "Union":
        Ba(e, t);
        break;
    default: throw new Error("not implemented: " + e.kind);
} }
function am(e, t) { let r = t.arguments.getDeepSubSelectionValue(e.selectionPath); r && r instanceof Q && (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()), t.addErrorMessage(n => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`); }
function lm(e, t) {
    let [r, n] = yn(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
            s.isRelation && o.addSuggestion(new Fe(s.name, "true"));
    t.addErrorMessage(s => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${mr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
}
function um(e, t) { let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? !1; n && (n.removeAllFields(), Ga(n, r)), t.addErrorMessage(o => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${mr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`); }
function cm(e, t) { let [r, n] = yn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r); i && (i.value.getField(n)?.markAsError(), Ga(i.value, e.outputType)), t.addErrorMessage(o => { let s = [`Unknown field ${o.red(`\`${n}\``)}`]; return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(mr(o)), s.join(" "); }); }
function pm(e, t) { let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath); n instanceof Q && (n.getField(r)?.markAsError(), bm(n, e.arguments)), t.addErrorMessage(i => Qa(i, r, e.arguments.map(o => o.name))); }
function mm(e, t) { let [r, n] = yn(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath); if (i instanceof Q) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r);
    o instanceof Q && Ha(o, e.inputType);
} t.addErrorMessage(o => Qa(o, n, e.inputType.fields.map(s => s.name))); }
function Qa(e, t, r) { let n = [`Unknown argument \`${e.red(t)}\`.`], i = wm(t, r); return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(mr(e)), n.join(" "); }
function dm(e, t) { let r; t.addErrorMessage(l => r?.value instanceof J && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`); let n = t.arguments.getDeepSubSelectionValue(e.selectionPath); if (!(n instanceof Q))
    return; let [i, o] = yn(e.argumentPath), s = new gn, a = n.getDeepFieldValue(i); if (a instanceof Q)
    if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new Fe(o, s).makeRequired());
    }
    else {
        let l = e.inputTypes.map(Ja).join(" | ");
        a.addSuggestion(new Fe(o, l).makeRequired());
    } }
function Ja(e) { return e.kind === "list" ? `${Ja(e.elementType)}[]` : e.name; }
function fm(e, t) { let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath); n instanceof Q && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage(i => { let o = hn("or", e.argument.typeNames.map(s => i.green(s))); return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`; }); }
function gm(e, t) { let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath); n instanceof Q && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage(i => { let o = [`Invalid value for argument \`${i.bold(r)}\``]; if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
    let s = hn("or", e.argument.typeNames.map(a => i.green(a)));
    o.push(` Expected ${s}.`);
} return o.join(""); }); }
function ym(e, t) { let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i; if (n instanceof Q) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof J && (i = s.text);
} t.addErrorMessage(o => { let s = ["Unable to fit value"]; return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" "); }); }
function hm(e, t) { let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath); if (n instanceof Q) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof Q && Ha(i, e.inputType);
} t.addErrorMessage(i => { let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${hn("or", e.constraints.requiredFields.map(s => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(mr(i)), o.join(" "); }); }
function xm(e, t) { let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = []; if (n instanceof Q) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof Q && (o.markAsError(), i = Object.keys(o.getFields()));
} t.addErrorMessage(o => { let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${hn("and", i.map(a => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" "); }); }
function Ga(e, t) { for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new Fe(r.name, "true")); }
function bm(e, t) { for (let r of t)
    e.hasField(r.name) || e.addSuggestion(new Fe(r.name, r.typeNames.join(" | "))); }
function Ha(e, t) { if (t.kind === "object")
    for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Fe(r.name, r.typeNames.join(" | "))); }
function yn(e) { let t = [...e], r = t.pop(); if (!r)
    throw new Error("unexpected empty path"); return [t, r]; }
function mr({ green: e }) { return `Available options are listed in ${e("green")}.`; }
function hn(e, t) { if (t.length === 1)
    return t[0]; let r = [...t], n = r.pop(); return `${r.join(", ")} ${e} ${n}`; }
var Em = 3;
function wm(e, t) { let r = 1 / 0, n; for (let i of t) {
    let o = (0, Ua.default)(e, i);
    o > Em || o < r && (r = o, n = i);
} return n; }
function xn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) { let s = Xr(e); for (let p of t)
    fn(p, s); let a = r === "pretty" ? Ss : zr, l = s.renderAllMessages(a), u = new mt(0, { colors: a }).write(s).toString(), c = Et({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u }); throw new X(c, { clientVersion: o }); }
var Pm = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
function Wa({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) { let u = new ji({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l }); return { modelName: e, action: Pm[t], query: Vi(r, u) }; }
function Vi({ select: e, include: t, ...r } = {}, n) { return { arguments: Ya(r, n), selection: vm(e, t, n) }; }
function vm(e, t, r) { return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Mm(e, r) : Tm(r, t); }
function Tm(e, t) { let r = {}; return e.model && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0), t && Cm(r, t, e), r; }
function Cm(e, t, r) { for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o && o?.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === !0 ? e[n] = !0 : typeof i == "object" && (e[n] = Vi(i, r.nestSelection(n)));
} }
function Mm(e, t) { let r = {}, n = t.getComputedFields(), i = ca(e, n); for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    n?.[o] && !a || (s === !0 ? r[o] = !0 : typeof s == "object" && (r[o] = Vi(s, t.nestSelection(o))));
} return r; }
function za(e, t) { if (e === null)
    return null; if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e; if (typeof e == "bigint")
    return { $type: "BigInt", value: String(e) }; if (dt(e)) {
    if (Vr(e))
        return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
} if (ht(e))
    return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } }; if (Array.isArray(e))
    return Am(e, t); if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: Buffer.from(e).toString("base64") }; if (Rm(e))
    return e.values; if (yt(e))
    return { $type: "Decimal", value: e.toFixed() }; if (e instanceof Ae) {
    if (e !== jr.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
} if (Sm(e))
    return e.toJSON(); if (typeof e == "object")
    return Ya(e, t); t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` }); }
function Ya(e, t) { if (e.$type)
    return { $type: "Json", value: JSON.stringify(e) }; let r = {}; for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = za(i, t.nestArgument(n)));
} return r; }
function Am(e, t) { let r = []; for (let n = 0; n < e.length; n++) {
    let i = e[n];
    i !== void 0 && r.push(za(i, t.nestArgument(String(n))));
} return r; }
function Rm(e) { return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0; }
function Sm(e) { return typeof e == "object" && e !== null && typeof e.toJSON == "function"; }
var ji = class e {
    constructor(t) { this.params = t; this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]); }
    throwValidationError(t) { xn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion }); }
    getSelectionPath() { return this.params.selectionPath; }
    getArgumentPath() { return this.params.argumentPath; }
    getArgumentName() { return this.params.argumentPath[this.params.argumentPath.length - 1]; }
    getOutputTypeDescription() { if (!(!this.params.modelName || !this.model))
        return { name: this.params.modelName, fields: this.model.fields.map(t => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) }; }
    isRawAction() { return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action); }
    getComputedFields() { if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName); }
    findField(t) { return this.model?.fields.find(r => r.name === t); }
    nestSelection(t) { let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0; return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) }); }
    nestArgument(t) { return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) }); }
};
var Za = e => ({ command: e });
var Xa = e => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
function dr(e) { try {
    return el(e, "fast");
}
catch {
    return el(e, "slow");
} }
function el(e, t) { return JSON.stringify(e.map(r => Fm(r, t))); }
function Fm(e, t) { return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : dt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Pe.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Im(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? rl(e) : e; }
function Im(e) { return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1; }
function rl(e) { if (typeof e != "object" || e === null)
    return e; if (typeof e.toJSON == "function")
    return e.toJSON(); if (Array.isArray(e))
    return e.map(tl); let t = {}; for (let r of Object.keys(e))
    t[r] = tl(e[r]); return t; }
function tl(e) { return typeof e == "bigint" ? e.toString() : rl(e); }
var Dm = /^(\s*alter\s)/i, nl = k("prisma:client");
function Bi(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Dm.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Ki = (e, t) => r => { let n = "", i; if (Array.isArray(r)) {
    let [o, ...s] = r;
    n = o, i = { values: dr(s || []), __prismaRawParameters__: !0 };
}
else
    switch (e) {
        case "sqlite":
        case "mysql": {
            n = r.sql, i = { values: dr(r.values), __prismaRawParameters__: !0 };
            break;
        }
        case "cockroachdb":
        case "postgresql": {
            n = r.text, i = { values: dr(r.values), __prismaRawParameters__: !0 };
            break;
        }
        case "sqlserver": {
            n = Xa(r), i = { values: dr(r.values), __prismaRawParameters__: !0 };
            break;
        }
        default: throw new Error(`The ${e} provider does not support ${t}`);
    } return i?.values ? nl(`prisma.${t}(${n}, ${i.values})`) : nl(`prisma.${t}(${n})`), { query: n, parameters: i }; }, il = { requestArgsToMiddlewareArgs(e) { return [e.strings, ...e.values]; }, middlewareArgsToRequestArgs(e) { let [t, ...r] = e; return new se(t, r); } }, ol = { requestArgsToMiddlewareArgs(e) { return [e]; }, middlewareArgsToRequestArgs(e) { return e[0]; } };
function Ui(e) { return function (r) { let n, i = (o = e) => { try {
    return o === void 0 || o?.kind === "itx" ? n ?? (n = sl(r(o))) : sl(r(o));
}
catch (s) {
    return Promise.reject(s);
} }; return { then(o, s) { return i().then(o, s); }, catch(o) { return i().catch(o); }, finally(o) { return i().finally(o); }, requestTransaction(o) { let s = i(o); return s.requestTransaction ? s.requestTransaction(o) : s; }, [Symbol.toStringTag]: "PrismaPromise" }; }; }
function sl(e) { return typeof e.then == "function" ? e : Promise.resolve(e); }
var al = { isEnabled() { return !1; }, getTraceParent() { return "00-10-10-00"; }, async createEngineSpan() { }, getActiveContext() { }, runInChildSpan(e, t) { return t(); } }, Qi = class {
    isEnabled() { return this.getGlobalTracingHelper().isEnabled(); }
    getTraceParent(t) { return this.getGlobalTracingHelper().getTraceParent(t); }
    createEngineSpan(t) { return this.getGlobalTracingHelper().createEngineSpan(t); }
    getActiveContext() { return this.getGlobalTracingHelper().getActiveContext(); }
    runInChildSpan(t, r) { return this.getGlobalTracingHelper().runInChildSpan(t, r); }
    getGlobalTracingHelper() { return globalThis.PRISMA_INSTRUMENTATION?.helper ?? al; }
};
function ll(e) { return e.includes("tracing") ? new Qi : al; }
function ul(e, t = () => { }) { let r, n = new Promise(i => r = i); return { then(i) { return --e === 0 && r(t()), i?.(n); } }; }
function cl(e) { return typeof e == "string" ? e : e.reduce((t, r) => { let n = typeof r == "string" ? r : r.level; return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n; }, void 0); }
var Om = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"], pl = Om;
var bn = class {
    constructor() { this._middlewares = []; }
    use(t) { this._middlewares.push(t); }
    get(t) { return this._middlewares[t]; }
    has(t) { return !!this._middlewares[t]; }
    length() { return this._middlewares.length; }
};
var dl = S(ii());
function En(e) { return typeof e.batchRequestIdx == "number"; }
function wn(e) { return e === null ? e : Array.isArray(e) ? e.map(wn) : typeof e == "object" ? km(e) ? _m(e) : ct(e, wn) : e; }
function km(e) { return e !== null && typeof e == "object" && typeof e.$type == "string"; }
function _m({ $type: e, value: t }) { switch (e) {
    case "BigInt": return BigInt(t);
    case "Bytes": return Buffer.from(t, "base64");
    case "DateTime": return new Date(t);
    case "Decimal": return new Pe(t);
    case "Json": return JSON.parse(t);
    default: Ge(t, "Unknown tagged value");
} }
function ml(e) { if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
    return; let t = []; return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Ji(e.query.arguments)), t.push(Ji(e.query.selection)), t.join(""); }
function Ji(e) { return `(${Object.keys(e).sort().map(r => { let n = e[r]; return typeof n == "object" && n !== null ? `(${r} ${Ji(n)})` : r; }).join(" ")})`; }
var Nm = { aggregate: !1, aggregateRaw: !1, createMany: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateOne: !0, upsertOne: !0 };
function Gi(e) { return Nm[e]; }
var Pn = class {
    constructor(t) { this.options = t; this.tickActive = !1; this.batches = {}; }
    request(t) { let r = this.options.batchBy(t); return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = !0, process.nextTick(() => { this.dispatchBatches(), this.tickActive = !1; }))), new Promise((n, i) => { this.batches[r].push({ request: t, resolve: n, reject: i }); })) : this.options.singleLoader(t); }
    dispatchBatches() { for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then(n => { n instanceof Error ? r[0].reject(n) : r[0].resolve(n); }).catch(n => { r[0].reject(n); }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map(n => n.request)).then(n => { if (n instanceof Error)
            for (let i = 0; i < r.length; i++)
                r[i].reject(n);
        else
            for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            } }).catch(n => { for (let i = 0; i < r.length; i++)
            r[i].reject(n); }));
    } }
    get [Symbol.toStringTag]() { return "DataLoader"; }
};
var Lm = k("prisma:client:request_handler"), vn = class {
    constructor(t, r) { this.logEmitter = r, this.client = t, this.dataloader = new Pn({ batchLoader: oa(async ({ requests: n, customDataProxyFetch: i }) => { let { transaction: o, otelParentCtx: s } = n[0], a = n.map(p => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some(p => Gi(p.protocolQuery.action)); return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: $m(o), containsWrite: u, customDataProxyFetch: i })).map((p, m) => { if (p instanceof Error)
            return p; try {
            return this.mapQueryEngineResult(n[m], p);
        }
        catch (f) {
            return f;
        } }); }), singleLoader: async (n) => { let i = n.transaction?.kind === "itx" ? fl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Gi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch }); return this.mapQueryEngineResult(n, o); }, batchBy: n => n.transaction?.id ? `transaction-${n.transaction.id}` : ml(n.protocolQuery), batchOrder(n, i) { return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0; } }); }
    async request(t) { try {
        return await this.dataloader.request(t);
    }
    catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s });
    } }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) { let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r); return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s; }
    handleAndLogRequestError(t) { try {
        this.handleRequestError(t);
    }
    catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
    } }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) { if (Lm(t), qm(t, i) || t instanceof Me)
        throw t; if (t instanceof K && jm(t)) {
        let a = gl(t.meta);
        xn({ args: o, errors: [a], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
    } let s = t.message; throw n && (s = Et({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new K(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new ce(s, this.client._clientVersion) : t instanceof U ? new U(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof D ? new D(s, this.client._clientVersion) : t instanceof ce ? new ce(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t); }
    sanitizeMessage(t) { return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, dl.default)(t) : t; }
    unpack(t, r, n) { if (!t || (t.data && (t = t.data), !t))
        return t; let i = Object.values(t)[0], o = r.filter(a => a !== "select" && a !== "include"), s = wn(Pi(i, o)); return n ? n(s) : s; }
    get [Symbol.toStringTag]() { return "RequestHandler"; }
};
function $m(e) { if (e) {
    if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx")
        return { kind: "itx", options: fl(e) };
    Ge(e, "Unknown transaction kind");
} }
function fl(e) { return { id: e.id, payload: e.payload }; }
function qm(e, t) { return En(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index; }
function jm(e) { return e.code === "P2009" || e.code === "P2012"; }
function gl(e) { if (e.kind === "Union")
    return { kind: "Union", errors: e.errors.map(gl) }; if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
} return e; }
var yl = "5.2.0";
var hl = yl;
function xl(e) { return e.map(t => { let r = {}; for (let n of Object.keys(t))
    r[n] = bl(t[n]); return r; }); }
function bl({ prisma__type: e, prisma__value: t }) { switch (e) {
    case "bigint": return BigInt(t);
    case "bytes": return Buffer.from(t, "base64");
    case "decimal": return new Pe(t);
    case "datetime":
    case "date": return new Date(t);
    case "time": return new Date(`1970-01-01T${t}Z`);
    case "array": return t.map(bl);
    default: return t;
} }
var vl = S(qi());
var j = class extends Error {
    constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() { return "PrismaClientConstructorValidationError"; }
};
E(j, "PrismaClientConstructorValidationError");
var El = ["datasources", "datasourceUrl", "errorFormat", "log", "__internal"], wl = ["pretty", "colorless", "minimal"], Pl = ["info", "query", "warn", "error"], Bm = { datasources: (e, t) => {
        if (e) {
            if (typeof e != "object" || Array.isArray(e))
                throw new j(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
            for (let [r, n] of Object.entries(e)) {
                if (!t.includes(r)) {
                    let i = Ct(r, t) || ` Available datasources: ${t.join(", ")}`;
                    throw new j(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
                }
                if (typeof n != "object" || Array.isArray(n))
                    throw new j(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                if (n && typeof n == "object")
                    for (let [i, o] of Object.entries(n)) {
                        if (i !== "url")
                            throw new j(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                        if (typeof o != "string")
                            throw new j(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                    }
            }
        }
    }, datasourceUrl: e => {
        if (typeof e < "u" && typeof e != "string")
            throw new j(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: e => { if (e) {
        if (typeof e != "string")
            throw new j(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!wl.includes(e)) {
            let t = Ct(e, wl);
            throw new j(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
    } }, log: e => { if (!e)
        return; if (!Array.isArray(e))
        throw new j(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`); function t(r) { if (typeof r == "string" && !Pl.includes(r)) {
        let n = Ct(r, Pl);
        throw new j(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
    } } for (let r of e) {
        t(r);
        let n = { level: t, emit: i => { let o = ["stdout", "event"]; if (!o.includes(i)) {
                let s = Ct(i, o);
                throw new j(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
            } } };
        if (r && typeof r == "object")
            for (let [i, o] of Object.entries(r))
                if (n[i])
                    n[i](o);
                else
                    throw new j(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    } }, __internal: e => { if (!e)
        return; let t = ["debug", "hooks", "engine", "measurePerformance"]; if (typeof e != "object")
        throw new j(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`); for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
            let n = Ct(r, t);
            throw new j(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        } } };
function Tl(e, t) { for (let [r, n] of Object.entries(e)) {
    if (!El.includes(r)) {
        let i = Ct(r, El);
        throw new j(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
    }
    Bm[r](n, t);
} if (e.datasourceUrl && e.datasources)
    throw new j('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them'); }
function Ct(e, t) { if (t.length === 0 || typeof e != "string")
    return ""; let r = Km(e, t); return r ? ` Did you mean "${r}"?` : ""; }
function Km(e, t) { if (t.length === 0)
    return null; let r = t.map(i => ({ value: i, distance: (0, vl.default)(e, i) })); r.sort((i, o) => i.distance < o.distance ? -1 : 1); let n = r[0]; return n.distance < 3 ? n.value : null; }
function Cl(e) { return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => { let n = new Array(e.length), i = null, o = !1, s = 0, a = () => { o || (s++, s === e.length && (o = !0, i ? r(i) : t(n))); }, l = u => { o || (o = !0, r(u)); }; for (let u = 0; u < e.length; u++)
    e[u].then(c => { n[u] = c, a(); }, c => { if (!En(c)) {
        l(c);
        return;
    } c.batchRequestIdx === u ? l(c) : (i || (i = c), a()); }); }); }
var Be = k("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Um = { requestArgsToMiddlewareArgs: e => e, middlewareArgsToRequestArgs: e => e }, Qm = Symbol.for("prisma.client.transaction.id"), Jm = { id: 0, nextId() { return ++this.id; } };
function Fl(e) {
    class t {
        constructor(n) { this._middlewares = new bn; this._createPrismaPromise = Ui(); this.$extends = Ys; da(e), n && Tl(n, e.datasourceNames); let i = new Rl.EventEmitter().on("error", () => { }); this._extensions = an.empty(), this._previewFeatures = e.generator?.previewFeatures ?? [], this._clientVersion = e.clientVersion ?? hl, this._activeProvider = e.activeProvider, this._tracingHelper = ll(this._previewFeatures); let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && fr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && fr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s = Ot(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.(); try {
            let a = n ?? {}, l = a.__internal ?? {}, u = l.debug === !0;
            u && k.enable("prisma:client");
            let c = fr.default.resolve(e.dirname, e.relativePath);
            Sl.default.existsSync(c) || (c = e.dirname), Be("dirname", e.dirname), Be("relativePath", e.relativePath), Be("cwd", c);
            let p = l.engine || {};
            if (a.errorFormat ? this._errorFormat = a.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: c, dirname: e.dirname, enableDebugLogs: u, allowTriggerPanic: p.allowTriggerPanic, datamodelPath: fr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: p.binaryPath ?? void 0, engineEndpoint: p.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: a.log && cl(a.log), logQueries: a.log && !!(typeof a.log == "string" ? a.log === "query" : a.log.find(m => typeof m == "string" ? m === "query" : m.level === "query")), env: s?.parsed ?? {}, flags: [], clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: fa(a, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: i, isBundled: e.isBundled }, Be("clientVersion", e.clientVersion), this._engine = $a(e, this._engineConfig), this._requestHandler = new vn(this, i), a.log)
                for (let m of a.log) {
                    let f = typeof m == "string" ? m : m.emit === "stdout" ? m.level : null;
                    f && this.$on(f, y => { Nt.log(`${Nt.tags[f] ?? ""}`, y.message || y.query); });
                }
            this._metrics = new pt(this._engine);
        }
        catch (a) {
            throw a.clientVersion = this._clientVersion, a;
        } return this._appliedParent = Ht(this); }
        get [Symbol.toStringTag]() { return "PrismaClient"; }
        $use(n) { this._middlewares.use(n); }
        $on(n, i) { n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, o => { let s = o.fields; return i(n === "query" ? { timestamp: o.timestamp, query: s?.query ?? o.query, params: s?.params ?? o.params, duration: s?.duration_ms ?? o.duration, target: o.target } : { timestamp: o.timestamp, message: s?.message ?? o.message, target: o.target }); }); }
        $connect() { try {
            return this._engine.start();
        }
        catch (n) {
            throw n.clientVersion = this._clientVersion, n;
        } }
        async $disconnect() { try {
            await this._engine.stop();
        }
        catch (n) {
            throw n.clientVersion = this._clientVersion, n;
        }
        finally {
            yo();
        } }
        $executeRawInternal(n, i, o, s) { return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ki(this._activeProvider, i), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }); }
        $executeRaw(n, ...i) { return this._createPrismaPromise(o => { if (n.raw !== void 0 || n.sql !== void 0) {
            let [s, a] = Ml(n, i);
            return Bi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
        } throw new X("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion }); }); }
        $executeRawUnsafe(n, ...i) { return this._createPrismaPromise(o => (Bi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i]))); }
        $runCommandRaw(n) { if (e.activeProvider !== "mongodb")
            throw new X(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion }); return this._createPrismaPromise(i => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Za, callsite: qe(this._errorFormat), transaction: i })); }
        async $queryRawInternal(n, i, o, s) { return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ki(this._activeProvider, i), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(xl); }
        $queryRaw(n, ...i) { return this._createPrismaPromise(o => { if (n.raw !== void 0 || n.sql !== void 0)
            return this.$queryRawInternal(o, "$queryRaw", ...Ml(n, i)); throw new X("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion }); }); }
        $queryRawUnsafe(n, ...i) { return this._createPrismaPromise(o => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i])); }
        _transactionWithArray({ promises: n, options: i }) { let o = Jm.nextId(), s = ul(n.length), a = n.map((l, u) => { if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function."); let c = i?.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s }; return l.requestTransaction?.(p) ?? l; }); return Cl(a); }
        async _transactionWithCallback({ callback: n, options: i }) { let o = { traceparent: this._tracingHelper.getTraceParent() }, s = await this._engine.transaction("start", o, i), a; try {
            let l = { kind: "itx", ...s };
            a = await n(this._createItxClient(l)), await this._engine.transaction("commit", o, s);
        }
        catch (l) {
            throw await this._engine.transaction("rollback", o, s).catch(() => { }), l;
        } return a; }
        _createItxClient(n) { return Ht(Ee(nn(this), [ne("_appliedParent", () => this._appliedParent._createItxClient(n)), ne("_createPrismaPromise", () => Ui(n)), ne(Qm, () => n.id), jt(pl)])); }
        $transaction(n, i) { let o; typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i }); let s = { name: "transaction", attributes: { method: "$transaction" } }; return this._tracingHelper.runInChildSpan(s, o); }
        _request(n) { n.otelParentCtx = this._tracingHelper.getActiveContext(); let i = n.middlewareArgsMapper ?? Um, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: !0, attributes: { method: "$use" }, active: !1 }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => { let c = this._middlewares.get(++a); if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, P => c(u, T => (P?.end(), l(T)))); let { runInTransaction: p, args: m, ...f } = u, y = { ...n, ...f }; m && (y.args = i.middlewareArgsToRequestArgs(m)), n.transaction !== void 0 && p === !1 && delete y.transaction; let g = await ia(this, y); return y.model ? ea({ result: g, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g; }; return this._tracingHelper.runInChildSpan(s.operation, () => new Al.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o))); }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: m, customDataProxyFetch: f }) {
            try {
                n = u ? u(n) : n;
                let y = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(y, () => Wa({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
                return k.enabled("prisma:client") && (Be("Prisma Client call:"), Be(`prisma.${i}(${Os(n)})`), Be("Generated request:"), Be(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: m, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
            }
            catch (y) {
                throw y.clientVersion = this._clientVersion, y;
            }
        }
        get $metrics() { if (!this._hasPreviewFlag("metrics"))
            throw new X("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion }); return this._metrics; }
        _hasPreviewFlag(n) { return !!this._engineConfig.previewFeatures?.includes(n); }
    }
    return t;
}
function Ml(e, t) { return Gm(e) ? [new se(e, t), il] : [e, ol]; }
function Gm(e) { return Array.isArray(e) && Array.isArray(e.raw); }
var Hm = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
function Il(e) { return new Proxy(e, { get(t, r) { if (r in t)
        return t[r]; if (!Hm.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`); } }); }
function Dl(e) { Ot(e, { conflictCheck: "warn" }); }
0 && (module.exports = { DMMF, DMMFClass, Debug, Decimal, Extensions, MetricsClient, NotFoundError, PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, Public, Sql, Types, defineDmmfProperty, empty, getPrismaClient, join, makeStrictEnum, objectEnumValues, raw, sqltag, warnEnvConflicts, warnOnce });