!function (t, e) {
    for (var n in e)t[n] = e[n]
}(window, function (t) {
    function e(i) {
        if (n[i])return n[i].exports;
        var o = n[i] = {i: i, l: !1, exports: {}};
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
        return t
    }, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: i})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 12)
}([function (t, e, n) {
    "use strict";
    function i() {
        var t = [], e = function (e) {
            t.push(e)
        };
        return e.emit = function (e) {
            for (var n = 0; n < t.length; n++) {
                (0, t[n])(e)
            }
        }, e.off = function (e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var o = t[i];
                e && e === o || n.push(o)
            }
            t = n
        }, e
    }

    e.a = i
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return (t < 10 ? "0" : "") + t
    }

    function o(t) {
        return parseInt(t, 10) || 0
    }

    function s(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function a(t, e) {
        if ("string" == typeof t && (t = l(t)), !(t instanceof Date))return h;
        var n = "", i = e.match($);
        if (!i)return h;
        for (var o = 0; o < i.length; o++) {
            var s = i[o];
            s in C ? n += C[s](t, i, o) : "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? n += s.substring(1, s.length - 1) : n += s
        }
        return n
    }

    function r(t) {
        return t instanceof Date && isFinite(t) ? t.getFullYear() + "-" + i(t.getMonth() + 1) + "-" + i(t.getDate()) : d
    }

    function l(t) {
        var e = b.exec(t);
        return e ? new Date(+e[1], +e[2] - 1, +e[3], o(e[4]), o(e[5]), o(e[6])) : null
    }

    function u(t) {
        return t instanceof Date && isFinite(t) ? i(t.getDate()) + "." + i(t.getMonth() + 1) + "." + t.getFullYear() : d
    }

    function c(t) {
        var e = w.exec(t);
        return e ? new Date(+e[3], +e[2] - 1, +e[1], o(e[4]), o(e[5]), o(e[6])) : null
    }

    e.a = s, e.b = a, e.e = r, e.d = l, e.c = u, e.f = c;
    var d = "", h = "Invalid date",
        p = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
        f = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        m = "янв,фев,мар,апр,май,июн,июл,авг,сен,окт,ноя,дек".split(","),
        v = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        g = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], y = ["вос", "пон", "вто", "сре", "чет", "пят", "суб"],
        $ = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        C = {
            YYYY: function (t) {
                return t.getFullYear()
            }, YYY: function (t) {
                return t.getYear()
            }, YY: function (t) {
                return i(t.getFullYear() % 100)
            }, Y: function (t) {
                return t.getFullYear()
            }, MMMM: function (t, e, n) {
                return "DD" === e[n - 2] || "D" === e[n - 2] ? p[t.getMonth()] : f[t.getMonth()]
            }, MMM: function (t) {
                return m[t.getMonth()]
            }, MM: function (t) {
                return i(t.getMonth() + 1)
            }, M: function (t) {
                return t.getMonth() + 1
            }, DD: function (t) {
                return i(t.getDate())
            }, D: function (t) {
                return t.getDate()
            }, d: function (t) {
                return t.getDay()
            }, dd: function (t) {
                return g[t.getDay()]
            }, ddd: function (t) {
                return y[t.getDay()]
            }, dddd: function (t) {
                return v[t.getDay()]
            }, HH: function (t) {
                return i(t.getHours())
            }, H: function (t) {
                return t.getHours()
            }, mm: function (t) {
                return i(t.getMinutes())
            }, m: function (t) {
                return t.getMinutes()
            }, ss: function (t) {
                return i(t.getSeconds())
            }, s: function (t) {
                return t.getSeconds()
            }, Z: function (t) {
                var e = t.getTimezoneOffset();
                return (e < 0 ? "-" : "+") + Math.floor(Math.abs(e) / 60) + ":" + i(Math.abs(e) % 60)
            }, ZZ: function (t) {
                var e = t.getTimezoneOffset();
                return (e < 0 ? "-" : "+") + i(Math.floor(Math.abs(e) / 60)) + ":" + i(Math.abs(e) % 60)
            }
        }, b = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):?(\d{2})?)?/,
        w = /^(\d{2}).(\d{2}).(\d{4})(?:\s+(\d{1,2}):(\d{2}):?(\d{2})?)?$/
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        function i(n) {
            $.ajax({
                url: o.url + (t ? "?Commander.Command=" + t + "&_=" + Math.random() : ""),
                dataType: o.dataType,
                data: n,
                type: "post"
            }).success(function (r) {
                if (r = r || {}, !a) {
                    a = {}, o.saveParams && $.extend(a, e);
                    var l = r.CommandId || n["Commander.CommandId"];
                    if (l && (a["Commander.CommandId"] = l, a["Commander.CommandExecutionMode"] = "SHOW_STATE"), o.xmllog) {
                        var u = o.url + "?" + (t ? "Commander.Command=" + t + "&" : "") + $.param($.extend({}, e, a)) + "&mode=xmlj",
                            c = 0 === o.url.indexOf("/new/ajax/ajax-request-commander") ? t : o.url;
                        $("#debug").append('<br /><a href="' + u + '">XML: ' + c + "</a>")
                    }
                }
                if ("DONE" != r.Activity && !0 !== r.Success && o.async)if ("PROCESSING" == r.Activity) {
                    var d = "ASYNCHRONOUS" === n["Commander.CommandExecutionMode"] ? o.intervalFirst : o.interval;
                    window.setTimeout(function () {
                        i(a)
                    }, d)
                } else s["html" === o.dataType || o.alwaysResolve ? "resolve" : "reject"](r); else s.resolve(r)
            }).error(function (t) {
                s.reject({})
            })
        }

        e = e || {}, n = n || {}, "string" != typeof t && (n = $.extend({}, t, n), t = n.command), "undefined" == typeof n.async && (n.async = "ASYNCHRONOUS" === e["Commander.CommandExecutionMode"]);
        var o = {
            url: "/new/ajax/ajax-request-commander2.html",
            saveParams: !1,
            dataType: "json",
            async: !1,
            interval: 1e3,
            intervalFirst: 1e3,
            xmllog: window.DevWeb,
            alwaysResolve: !1
        };
        $.extend(o, n), o.async && !e["Commander.CommandExecutionMode"] && (e["Commander.CommandExecutionMode"] = "ASYNCHRONOUS");
        var s = $.Deferred(), a = void 0;
        return i(e), s
    }

    function o(t, e, n) {
        var o = {url: "/new/ajax/ajax-userservice-commander.html"};
        return i(t, e, $.extend(o, n))
    }

    e.a = o
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        w.removeClass("is-header is-mailing").addClass(e);
        var n = t.offset(), s = t.outerHeight(), a = t.outerWidth(), r = w.width(), l = $("body").width(),
            u = n.top + s, c = n.left + a / 2 - r / 2, h = c + r - l, p = r / 2;
        h > 0 && (c -= h, p += h), w.css({
            left: c + "px",
            top: u + "px"
        }), w.find("dfn").css({left: p + "px"}), w.removeClass("hidden"), T[S].focus(), d(o), V = "mailing-button" == t.attr("id"), E.onShow.emit(), R = setTimeout(function () {
            var n = $(window);
            L = n.width(), n.on("resize.login", function () {
                var o = n.width() / L - 1;
                Math.abs(o) > .1 && (n.off("resize.login"), i(t, e))
            })
        }, 100)
    }

    function o() {
        w.addClass("hidden"), x.removeClass("disabled"), d(), E.onHide.emit(), clearTimeout(R), $(window).off("resize.login")
    }

    function s(t) {
        if (void 0 === t)return S;
        if (t = !!t + 0, S ^ t) {
            $(".form-group", _.eq(S)).removeClass("error"), l();
            var e = a();
            w.removeClass("auth reg").addClass(D[S = t]), a() != e && a(e)
        }
    }

    function a(t) {
        if (void 0 === t)return $.trim(T[S].val());
        a() != t && (T[S].val(t), T[S].parent().next().find("input").focus())
    }

    function r() {
        var t = _.eq(S).find("input[data-check]");
        return v.a.checkFields(t, window.FieldsSettingsMailing)
    }

    function l(t) {
        var e = k.eq(S);
        t && e.html(t), e.parent().toggleClass("error", !!t)
    }

    function u() {
        var t = B ? B.check() : Promise.resolve(), e = {Password: $.trim(O.val())}, i = a();
        e[i.indexOf("@") < 0 ? "Login" : "Email"] = i, t.then(function (t) {
            t = t || {};
            var i = t.validate;
            if (i) {
                if (i.error)return v.a.setFieldError(i.$element, i.description), void x.removeClass("is-loading");
                v.a.setFieldError(i.$element, "")
            }
            var s = C({}, e, t.data);
            n.i(m.a)("Logon", s).always(function (e) {
                if ("true" === e.IsPartner && $(".login").attr("href", "/partner/details/"), e.IsEmployee && $(".login").addClass("employee"), t.afterUse && t.afterUse(), x.removeClass("is-loading"), e = e || {}, !e.Success)return void l(e.Error || "Произвести авторизацию не удалось.");
                E.onLogin.emit(e), E.onAuthorization.emit(e), o(), w.find(".form-control").val("").blur()
            })
        }), V && tellerEvents.gaEvent("Subsription", "Logon", window.location.pathname)
    }

    function c() {
        var t = {
            Email: a(),
            FirstName: $.trim(P.val()),
            LastName: $.trim(M.val()),
            Sex: $.trim(I.filter(":checked").val()),
            MailDelivery: V,
            SmsPhone: null,
            AutoPassword: !0,
            AutoLogon: !0,
            KindOfRegistration: "express"
        };
        n.i(m.a)("Registration", t).always(function (t) {
            x.removeClass("is-loading"), t = t || {}, t.Success ? (T[1].val(""), P.val(""), M.val(""), I.prop("checked", !1).removeClass("checked"), o(), E.onLogin.emit(t), E.onAuthorization.emit(), E.updatePageFn(t)) : l(t.Error || "Произвести регистрацию не удалось.")
        }), V && tellerEvents.gaEvent("Subsription", "Registration", window.location.pathname)
    }

    function d(t) {
        var e = $(document.body), n = $("#fade"), i = function () {
            try {
                t && t()
            } catch (i) {
            }
            $(document).unbind("keydown.fade"), n.unbind("click"), e.removeClass("fade")
        };
        t ? e.addClass("fade") : i(), "function" == typeof t && (n.click(i), $(document).bind("keydown.fade", function (t) {
            27 == t.which && i()
        }))
    }

    function h() {
        $.getJSON(H, {"Commander.Command": "GetUserInfo", r: Date.now()}, function (t) {
            t && t.Success ? E.onLogin.emit(t) : E.onLogout.emit()
        })
    }

    function p() {
        $.getJSON(H, "ClientInfo.Command=Logoff", function (t) {
            /\/my\//.test(window.location.href) && window.location.reload(), /\/partner\//.test(window.location.href) && window.location.reload(), t && t.LogoutSuccess && (E.onLogout.emit(), E.onAuthorization.emit())
        })
    }

    function f(t) {
        E.isAuthorized = !!t
    }

    n.d(e, "a", function () {
        return E
    });
    var m = n(2), v = n(15), g = n(0), y = n(58), C = (n.n(y), Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }), b = {
            MALE: "|александр|алексей|дмитрий|сергей|андрей|антон|артём|артем|артемий|виталий|владимир|денис|евгений|иван|игорь|константин|максим|михаил|николай|павел|роман|станислав|август|адам|адриан|аким|ананий|анатолий|антонин|аполлон|аркадий|арсений|богдан|болеслав|борис|бронислав|вадим|валентин|валериан|валерий|василий|вениамин|виктор|викентий|виль|витольд|владислав|владлен|всеволод|вячеслав|геннадий|георгий|герасим|герман|глеб|гордей|григорий|давид|дан|даниил|данила|добрыня|донат|егор|ефим|захар|игнатий|игнат|илларион|илья|иннокентий|иосиф|ираклий|кирилл|клим|кузьма|лаврентий|лев|леонид|макар|марк|матвей|милан|мирослав|назар|никита|никодим|олег|петр|пётр|платон|прохор|радислав|рафаил|родион|ростислав|руслан|савва|сава|святослав|семён|семен|степан|стефан|тарас|тимофей|тит|фёдор|федор|феликс|филипп|юлиан|юлий|юрий|яков|ян|ярослав|",
            FEMALE: "|анастасия|анна|екатерина|мария|наталья|ольга|юлия|александра|виктория|дарья|елена|ирина|ксения|светлана|августа|ада|алевтина|александрия|алёна|алена|алина|алиса|алла|альбина|ангелина|антонина|анфиса|арина|аэлита|валентина|валерия|ванда|варвара|василина|василиса|вера|вероника|веселина|викторина|вилена|виталина|виталия|влада|владилена|владислава|власта|галина|дана|дарина|дина|ева|евгения|евдокия|елизавета|зарина|зинаида|злата|зоя|иванна|инна|ия|капитолина|катерина|кира|клавдия|кристина|лада|лариса|лидия|лилиана|лилия|лия|любава|любовь|людмила|майя|маргарита|марианна|марина|марьяна|мелитина|милада|милана|милена|надежда|настасья|ника|нина|нинель|нонна|оксана|олеся|полина|рада|радмила|раиса|регина|римма|руслана|руфина|серафима|симона|славяна|снежана|софья|станислава|сусанна|таисия|тамара|тамила|ульяна|фаина|христина|эльмира|эмилия|юлиана|яна|янина|ярослава|"
        }, w = $("#login"), _ = $("fieldset", w), x = $('fieldset input[type="submit"]', w), k = x.next(),
        F = $('label[for="auth-pwd"] a', w), D = ["auth", "reg"], S = 0, T = [$("#auth-email"), $("#reg-email")],
        O = $("#auth-pwd"), P = $("#reg-firstname"), M = $("#reg-lastname"), I = $('input[name="Sex"]', w), E = {
            onHide: n.i(g.a)(),
            onShow: n.i(g.a)(),
            onLogin: n.i(g.a)(),
            onLogout: n.i(g.a)(),
            onAuthorization: n.i(g.a)(),
            $el: w,
            show: i,
            hide: o,
            kind: s,
            email: a,
            getUserInfo: h,
            doLogout: p,
            _setAuthorizedStatus: f,
            isAuthorized: !1
        }, L = void 0, R = void 0, V = !1, N = _.find("input[data-check]");
    N.on("keydown paste", function () {
        v.a.setFieldError(N.not(this), ""), l("")
    }), v.a.initFields(N, window.FieldsSettingsMailing), $('input[type="button"]', w).click(function (t) {
        t.preventDefault(), s(!s())
    }), $("input", w).focus(function () {
        x.eq(S).removeClass("is-loading")
    }), I.siblings("span").mousedown(function () {
        var t = $(this).siblings("input");
        I.not(t).prop("checked", !1).removeClass("checked"), t.prop("checked", !0).addClass("checked")
    }), P.on("keyup change cut paste", function () {
        var t = $.trim(P.val()).toLowerCase(), e = b;
        if (t.length) {
            var n = e.MALE.indexOf("|" + t + "|") >= 0, i = e.FEMALE.indexOf("|" + t + "|") >= 0;
            I.prop("checked", !1).removeClass("checked"), n ^ i && I.eq(n ? 0 : 1).prop("checked", !0).addClass("checked")
        }
    }), F.click(function (t) {
        t.preventDefault();
        var e = a(), n = e && e.length > 7 && e.indexOf("@") > 0,
            i = n ? "Выслать письмо с паролем по данному адресу? Это должен быть адрес, с которым вы регистрировались на нашем сайте." : "Введите адрес электронной почты, указанный при регистрации, и скоро на него придёт письмо с паролем.";
        (e = prompt(i, n ? e : "")) && $.getJSON("/new/ajax/ajax-userservice-commander-nocaptcha.html", {
            "Commander.Command": "RememberPassword",
            Email: e
        }, function (t) {
            t = t || {};
            var n = t.Error || "",
                i = t.Success ? "Пароль отправлен. Проверьте почтовый ящик" : "Пароль не отправлен! " + n;
            a(e), alert(i)
        })
    });
    var A = window.CaptchaController, B = void 0;
    if (A) {
        var j = $("#auth-captcha-container");
        B = new A(j, function () {
            v.a.setFieldError(j, ""), l("")
        })
    }
    w.submit(function (t) {
        t.preventDefault();
        var e = x.eq(S);
        r() && !e.hasClass("is-loading") && (e.addClass("is-loading"), l(), 0 == S ? u() : c())
    });
    var H = "/new/ajax/ajax-userservice-commander-nocaptcha.html";
    E.onLogin(function () {
        E.isAuthorized = !0
    }), E.onLogout(function () {
        E.isAuthorized = !1
    })
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        if ("string" == typeof t)return t;
        if (!t)return "";
        var n = "";
        return "error" !== e && "info" !== e || (n = ' <span class="separator">или</span> '), t.map(function (t, n) {
            return o(t, e, 0 === n)
        }).join(n)
    }

    function o(t, e, n) {
        if ("string" == typeof t)return t;
        var i = [], o = ["button"], s = t.title;
        return o.push(n ? "is-primary" : "is-secondary"), t.className && o.push(t.className), "error" === e ? n ? (s = "<span>" + s + "</span>", o.push("btn", "btn-orange")) : o.push("link-ajax") : "info" === e && o.push(n ? "sbtn sbtn-default sbtn-s" : "link-ajax"), t.name && i.push('data-button="' + t.name + '"'), i.push('class="' + o.join(" ") + '"'), t.href ? '<a href="' + t.href + '" ' + i.join(" ") + ">" + s + "</a>" : "<span " + i.join(" ") + ">" + s + "</span>"
    }

    function s(t, e) {
        return function (n) {
            var i = c._defaultModals[t];
            if (!n && i)return i;
            e.theme = e.theme || c._defaultThemes[t];
            var o = l({}, e, n);
            return i ? i.setOptions(o) : (i = new c(o), c._defaultModals[t] = i), i.show(), i
        }
    }

    n.d(e, "a", function () {
        return c
    });
    var a = n(0), r = n(38), l = (n.n(r), Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }), u = {isModal: !1, header: null, content: null, buttons: null, theme: "", drawButtonsMethod: i},
        c = function () {
            function t(t, e) {
                if (this.onToggle = n.i(a.a)(), this.onClose = n.i(a.a)(), this._buttonEmitters = {}, "string" == typeof t) {
                    this._options = l({}, u, e), e = this._options;
                    var i = $(t);
                    if (!i.length)return;
                    if (i.data("ModalPopup"))return i.data("ModalPopup");
                    i.data("ModalPopup", this), this.$root = i, this.$container = this.$root.find(".modal-popup"), l(e, this.$root.data())
                } else this._options = l({}, u, t), this.$root = this._$createRoot(), this.$container = this.$root.find(".modal-popup"), this.renderContainer();
                this.addHandlers()
            }

            return t.showLoading = function (e) {
                return t.loading({content: e || "Загрузка"})
            }, t.hideLoading = function () {
                t.loading().hide()
            }, t.hide = function () {
                t._lastOpenModal && t._lastOpenModal.hide()
            }, t.globalInit = function () {
                $("body").on("click", '*[data-toggle="modal-popup"]', function (e) {
                    new t($(this).attr("href")).show()
                })
            }, t.getBackdrop = function () {
                return t._$backdrop || (t._$backdrop = $('<div class="modal-popup-backdrop"></div>').appendTo("body")), t._$backdrop
            }, t.prototype.onClickButtonByName = function (t) {
                return this._buttonEmitters[t] = this._buttonEmitters[t] || n.i(a.a)()
            }, t.prototype.toggle = function (e) {
                e === undefined && (e = !this.isOpen), e = !!e, this.isOpen !== e && (this.isOpen = e, e ? this !== t._lastOpenModal && (t._lastOpenModal && t._lastOpenModal.toggle(!1), t._lastOpenModal = this) : t._lastOpenModal = undefined, t.getBackdrop().toggleClass("in", e), this.$root.toggleClass("in", e), this._toggleBodyScroll(e), $("html").toggleClass("is-modal-popup-open", e), this.onToggle.emit(e), e || this.onClose.emit())
            }, t.prototype.show = function () {
                this.toggle(!0)
            }, t.prototype.hide = function () {
                this.toggle(!1)
            }, t.prototype.setOptions = function (t) {
                t.theme && this._setTheme(t.theme), this._options = l({}, u, t), this.renderContainer()
            }, t.prototype.set = function (t) {
                for (var e in t)t.hasOwnProperty(e) && this._set(e, t[e])
            }, t.prototype.destroy = function () {
                this.hide(), this.$root.remove()
            }, t.prototype._$createRoot = function () {
                var t = this._options;
                return $('<div class="modal-popup-wrapper theme-' + t.theme + " " + (t.className || "") + '">\n\t\t\t\t<div class="modal-popup"></div>\n\t\t\t</div>').appendTo("body")
            }, t.prototype.renderContainer = function () {
                var t = this._options;
                this.$container.html(this._drawInner(t)), this._bindButtons()
            }, t.prototype._bindButtons = function () {
                var t = this, e = this._options;
                if (e.buttons && e.buttons.forEach) {
                    var n = this.$container.find(".modal-popup-buttons .button");
                    e.buttons.forEach(function (e, i) {
                        var o = e.callback;
                        if ("function" == typeof o) {
                            var s = n.eq(i);
                            s.on("click", function () {
                                return o.call(t, s, i)
                            })
                        }
                    })
                }
            }, t.prototype._drawInner = function (t) {
                var e = t.isModal ? null : $('<span class="modal-popup-close fontello-close" data-button="close"></span>');
                return this._$header = $('<div class="modal-popup-header">' + t.header + "</div>").css("display", t.header ? "" : "none"), this._$content = $('<div class="modal-popup-content">' + t.content + "</div>").css("display", t.content ? "" : "none"), this._$buttons = $('<div class="modal-popup-buttons">' + this._options.drawButtonsMethod(t.buttons, t.theme) + "</div>").css("display", t.buttons ? "" : "none"), $(document.createDocumentFragment()).append(e || "").append(this._$header).append(this._$content).append(this._$buttons)
            }, t.prototype._setTheme = function (t) {
                var e = this.$root.attr("class"), n = e.split(/\s+/).filter(function (t) {
                    return 0 !== t.indexOf("theme-")
                }).join(" ");
                this.$root.attr("class", n + " theme-" + t)
            }, t.prototype.addHandlers = function () {
                var e = this, n = this;
                this.$root.on("click", "[data-button]", function () {
                    var t = $(this), e = t.data("button");
                    n.onClickButtonByName(e).emit(t), "close" === e && n.toggle(!1)
                }), this._options.isModal || this.$root.on("click", function (t) {
                    t.target === e.$root[0] && (n.onClickButtonByName("close").emit(e.$root), e.toggle(!1))
                }), $("body").on("keyup", function (e) {
                    27 === e.keyCode && t._lastOpenModal && !t._lastOpenModal._options.isModal && (n.onClickButtonByName("close").emit(this.$root), t._lastOpenModal.hide())
                })
            }, t.prototype._toggleBodyScroll = function (t) {
                var e = window.innerWidth;
                if (e)if (t) {
                    var n = e - document.body.clientWidth;
                    $("body").css({"padding-right": n + "px"}), this.$root.css({"padding-right": n + "px"})
                } else $("body").css({"padding-right": ""}), this.$root.css({"padding-right": ""})
            }, t.prototype._set = function (t, e) {
                this._options[t] = e, "header" === t && this._$header.html(e).css("display", e ? "" : "none"), "content" === t && this._$content.html(e).css("display", e ? "" : "none"), "buttons" === t && (this._$buttons.html(this._options.drawButtonsMethod(e, this._options.theme)).css("display", e ? "" : "none"), this._bindButtons())
            }, t
        }();
    c.error = s("error", {isModal: !0}), c.warning = s("warning", {isModal: !1}), c.info = s("info", {isModal: !1}), c.loading = s("loading", {
        isModal: !0,
        header: null,
        buttons: null
    }), c._defaultModals = {}, c._defaultThemes = {
        error: "error",
        warning: "error",
        info: "info",
        loading: "loading"
    }, c.globalInit()
}, function (t, e, n) {
    "use strict";
    function i(t) {
        var e = "";
        for (var n in t)if (t.hasOwnProperty(n) && null != t[n]) {
            e && (e += "&");
            var i = t[n];
            e += encodeURIComponent(n) + ("" === i ? "" : "=" + encodeURIComponent(i))
        }
        return e
    }

    e.a = i
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return i
    });
    var i = {
        getSVG: function (t) {
            var e = window.SVGListRaw && window.SVGListRaw[t];
            return !!e && $(e).get(0)
        }, getSVGString: function (t) {
            return $("<div>").append($(this.getSVG(t)).clone()).html()
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(26), o = n(16), s = (n(17), n(45));
    n.n(s), new i.a("#slider"), new o.a($("section#special"), !0)
}, function (t, e, n) {
    "use strict";
    var i = n(65), o = (n.n(i), n(21)), s = (n.n(o), n(54)), a = (n.n(s), n(43)), r = (n.n(a), n(14), n(18), n(56)),
        l = (n.n(r), n(13), n(23), n(53)), u = (n.n(l), n(55)), c = (n.n(u), n(59));
    n.n(c)
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        t = s({}, a, t);
        var i = {};
        t.ServiceClass !== a.ServiceClass && (i.ServiceClass = t.ServiceClass), t.Dlts + t.Children + t.Infants > 1 && (i.Dlts = t.Dlts, t.Children && (i.Children = t.Children), t.Infants && (i.Infants = t.Infants));
        var r = n.i(o.a)(s(i, e));
        return "/flight/search/" + t.Routes.map(function (t) {
                return t.From + t.To
            }).join("").toLowerCase() + "/" + t.Routes.map(function (t) {
                return "d" + t.Date
            }).join("") + "/" + (r ? "?" + r : "")
    }

    e.a = i;
    var o = n(5), s = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, a = {Routes: [], ServiceClass: "ECONOMY", Dlts: 1, Children: 0, Infants: 0}
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return '<div class="country-field u-field -default-index-theme -large -is-empty">\n\t\t<div class="u-control">\n\t\t\t<input class="u-input" type="text" placeholder="откуда" autocomplete="off" />\n\t\t\t' + (t ? '<button type="button" class="u-icon remove-field fontello-delete"></button>' : "") + '\n\t\t\t<div style="display: none;" class="u-popdown combobox-popdown">\n\t\t\t\t<div class="u-popdown-title"><span>Подходящие города и аэропорты</span></div>\n\t\t\t\t<ul class="combobox-list u-popdown-list"></ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>'
    }

    function o(t, e) {
        return '<tr data-row-index="' + e + '">\n\t\t\t<td class="middle break">\n\t\t\t\t<div class="point"></div>\n\t\t\t</td>\n\t\t\t<td class="input input' + (e + 1) + '" id="input' + t + '">' + i(!1) + "</td>\n\t\t</tr>"
    }

    function s(t, e) {
        return '<tr data-row-index="' + e + '">\n\t\t\t<td id="date' + e + '" class="date-cell" colspan="2">\n\t\t\t<div class="date-field u-field -default-index-theme --colored-' + e + ' -is-empty">\n\t\t\t\t<div class="u-control">\n\t\t\t\t\t<input class="u-input" type="text" placeholder="" autocomplete="off" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr data-row-index="' + e + '">\n\t\t\t<td class="middle step' + (e + 1) + '">\n\t\t\t\t<div class="point">' + C.a.getSVGString("MainStepsArrow") + '</div>\n\t\t\t</td>\n\t\t\t<td class="input input' + (e + 1) + '" id="input' + t + '">' + i(!0) + "</td>\n\t\t</tr>"
    }

    function a(t) {
        var e = [F.slice(0, 3), D.slice(0, 3), D.slice(3, 6), D.slice(6, 9), D.slice(9, 12)];
        if (t.ipCity) {
            var n = t.ipCity.Code;
            e[1].some(function (t) {
                return t.Code === n
            }) && (i = [e[2], e[1]], e[1] = i[0], e[2] = i[1])
        }
        return t.aviaExamples && t.aviaExamples.forEach(function (t, n) {
            e[n] = t
        }), e;
        var i
    }

    n.d(e, "a", function () {
        return k
    });
    var r = n(34), l = n(28), u = n(29), c = n(30), d = n(62), h = (n.n(d), n(22)), p = n(1), f = n(24), m = n(25),
        v = n(35), g = n(49), y = (n.n(g), n(46)), C = (n.n(y), n(6)), b = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }, w = {ECONOMY: "Эконом", BUSINESS: "Бизнес", FIRST: "Первый"}, _ = Object.keys(w), x = n.i(p.a)(window.now),
        k = function () {
            function t(e) {
                var i = this;
                this.$form = $("#flight-index-form"), this.$resetForm = $("#resetForm"), this.$button = $("#button"), this.$table = $("#form-table tbody"), this.$addRemoveControls = $("#add-remove-controls"), this.$returnControl = this.$addRemoveControls.find(".control-return"), this.$continueControl = this.$addRemoveControls.find(".control-continue"), this.$breakControl = this.$addRemoveControls.find(".control-break"), this.fastBackPrevDate = null, this.calendar = new f.a({
                    length: 365,
                    begin: x,
                    dateLimit: 1
                }), this.formPoints = [], this.resetForm = function () {
                    for (var t = i.form.uFields, e = t.routeFields.length; e > 1; e--)i.removeLastRouteField();
                    var n = t.routeFields[0];
                    n.fromField.setValue(null), n.toField.setValue(null), n.dateField.setValue(""), t.tripClassField.setValue("ECONOMY"), t.personsField.setValue(m.a._defaultData)
                }, this.removeLastRouteField = function () {
                    var t = i.formPoints.pop();
                    t && (i.form.uFields.routeFields = i.form.uFields.routeFields.slice(0, -1), i.form.setFields(i.form.uFields), i.calendar.changeMode(i.formPoints.length), t.$html.remove(), i.updateTable(), i.$table.find(".remove-field").last().show())
                }, this.options = e, this.examples = a(e);
                var o = new r.a({control: new m.a("#index-form-persons", t.personsPresetFlight)}),
                    s = $(".class-block"), u = new r.a({
                        control: new l.a(s.find(".u-input"), {
                            list: _,
                            value: _[0],
                            itemToString: function (t) {
                                return w[t]
                            }
                        }), theme: n.i(c.a)(s, {iconToggle: !0})
                    }), d = this.createRouteField(1, 1, 0);
                this.formPoints.push({
                    pointType: 0,
                    isReturn: !1,
                    $html: this.$table.find("tr")
                }), this.form = new r.b({
                    routeFields: [d],
                    personsField: o,
                    tripClassField: u
                }), this._patchCalendarForMobile(), this.addHandlers()
            }

            return t.prototype.init = function (t) {
                t = t || {};
                var e = [];
                if (Array.isArray(t.Routes)) e = t.Routes; else if (t.Routes)for (var n in t.Routes) {
                    var i = t.Routes[n];
                    e.push(i)
                }
                var o = {
                    personsField: t.PersonsCount ? {
                        adult: t.PersonsCount.Dlts,
                        child: t.PersonsCount.Children,
                        infant: t.PersonsCount.Infants
                    } : undefined, tripClassField: t.Class || undefined
                };
                this.form.setData(o), this.initRoutes(e)
            }, t.prototype.initRoutes = function (t) {
                if (t && t.length)for (var e = 0; e < t.length; e++) {
                    var i = t[e], o = t[e - 1], s = n.i(p.b)(window.now, "YYYY-MM-DD"), a = i.Date;
                    if (e) {
                        var r = !e || o.To && i.From && o.To.Code !== i.From.Code;
                        this.addRouteField(r ? 2 : 1)
                    }
                    var l = this.form.uFields.routeFields[e];
                    if (l.fromField && i.From && l.fromField.setValue(i.From), i.To && l.toField.setValue(i.To), a) {
                        var u = s > a ? s : a;
                        l.dateField.setValue(n.i(p.c)(n.i(p.d)(u)))
                    }
                }
            }, t.prototype.getDataNormalized = function () {
                for (var t = this.form.getData(), e = [], i = 0; i < t.routeFields.length; i++) {
                    var o = t.routeFields[i], s = t.routeFields[i - 1];
                    e.push({
                        Date: o.dateField ? n.i(p.e)(n.i(p.f)(o.dateField)) : "",
                        From: o.fromField || s.toField,
                        To: o.toField
                    })
                }
                return {
                    Routes: e,
                    Class: t.tripClassField,
                    PersonsCount: {
                        Dlts: t.personsField.adult,
                        Children: t.personsField.child,
                        Infants: t.personsField.infant
                    }
                }
            }, t.prototype.addHandlers = function () {
                var t = this;
                this.form.onChangeUnverified(function (e) {
                    t.$resetForm.toggle(!t.isEmptyCheck());
                    var n = e.routeFields;
                    if (n.length > 1) {
                        var i = n[0].fromField, o = n[n.length - 1].toField, s = !(!i || !o || i.Code !== o.Code),
                            a = t.formPoints[t.formPoints.length - 1];
                        a.isReturn !== s && (a.isReturn = s, t.updateTable())
                    }
                }), this.$resetForm.on("click", this.resetForm);
                var e = function (e) {
                    e.preventDefault(), t.form.validateForm("Submit").then(function (e) {
                        e.length || t.options.onSubmit(t.getDataNormalized())
                    })
                };
                this.$button.on("click", e), this.$form.on("submit", e), this.$continueControl.on("click", function () {
                    t.addRouteField(1)
                }), this.$breakControl.on("click", function () {
                    t.addRouteField(2)
                }), this.$returnControl.on("click", function () {
                    t.addRouteField(1, !0);
                    var e = t.form.uFields.routeFields, n = e[0].fromField.getValue();
                    n && e[e.length - 1].toField.setValue(n)
                })
            }, t.prototype.isEmptyCheck = function () {
                var t = this.form.getDataUnverified(), e = t.routeFields, n = t.tripClassField, i = t.personsField;
                return !(e.length > 1 || e[0].fromField || e[0].toField || e[0].dateField || "ECONOMY" !== n || i.adult !== m.a._defaultData.adult || i.child !== m.a._defaultData.child || i.infant !== m.a._defaultData.infant)
            }, t.prototype._patchCalendarForMobile = function () {
                function t(t) {
                    +t && (t += "px"), d.css("transform", "translateY(" + t + ")")
                }

                function e(e, n) {
                    if (void 0 === n && (n = -1), a || (e = !1), t(e ? 0 : "100%"), i.toggleClass("disable-scroll", e), u.toggleClass("is-date-select", e), u.toggleClass("is-not-date-select", !e), !e && a) {
                        var o = document.activeElement;
                        o && o.blur()
                    }
                    n >= 0 && e && c.setChooseIndex(n)
                }

                var n = this, i = $("html"), o = $("body"), s = !1, a = !1, r = function () {
                    n.calendar.setSeparateInputs(a), n.form.uFields.routeFields.forEach(function (t, n) {
                        var i = t.dateField.control;
                        i.$input.prop("readonly", a), i.$input.off("focus._forCalendar click._forCalendar"), i.$input.on("focus._forCalendar click._forCalendar", function () {
                            if (a) {
                                var t = document.activeElement;
                                t && t.blur(), e(!0, n)
                            }
                        })
                    })
                }, l = function () {
                    s = a, a = o.width() < 768, s !== a && r()
                };
                l(), $(window).on("resize", l);
                var u = this.$form, c = this.calendar, d = c.$root, h = d.find(".touch-close"), p = 0;
                this.form.onChangeUnverified(function () {
                    var t = n.form.uFields.routeFields, e = p < t.length;
                    p = t.length, e && r()
                }), this.calendar.onCalendarDaySelected(function (t) {
                    t.index;
                    t.date && e(!1)
                }), h.on("click", function () {
                    e(!1)
                });
                var f, m, v = !1, g = !1;
                h.on("touchstart", function (t) {
                    f = t.originalEvent.touches[0].pageY, v = !0, d.toggleClass("is-touched", !0), t.preventDefault()
                }), h.on("touchmove", function (e) {
                    if (v) {
                        var n = e.originalEvent.touches[0].pageY, i = n - f;
                        i < 0 && (i = 0), g = m > i, m = i, t(i), e.preventDefault()
                    }
                }), h.on("touchend", function (t) {
                    f = 0, v = !1, d.toggleClass("is-touched", !1), e(g), t.preventDefault()
                })
            }, t.prototype.addRouteField = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.formPoints.length + 1, i = n + this.formPoints.filter(function (t) {
                        return 2 === t.pointType || 0 === t.pointType
                    }).length, a = 2 === t ? o(i, n) + s(i + 1, n) : s(i, n);
                this.$table.find(".remove-field").hide();
                var r = $(a).appendTo(this.$table);
                this.formPoints.push({pointType: t, isReturn: e, $html: r});
                var l = this.createRouteField(i, n, t);
                this.updateTable(), r.find(".remove-field").on("click", this.removeLastRouteField), this.form.uFields.routeFields.push(l), this.form.setFields(this.form.uFields)
            }, t.prototype.createRouteField = function (t, e, n) {
                var i = {}, o = 2 === n || 0 === n;
                if (o) {
                    var s = 0 === n ? undefined : this.form.uFields.routeFields[e - 2].toField;
                    i.fromField = this.createCountryField("#input" + t + " .country-field", this.examples[t - 1], s)
                }
                var a = o ? i.fromField : this.form.uFields.routeFields[e - 2].toField, r = t + (o ? 1 : 0),
                    l = this.createCountryField("#input" + r + " .country-field", this.examples[r - 1], a),
                    u = this.createDateField("#date" + e + " .date-field", e, "когда");
                return b(i, {toField: l, dateField: u}), i
            }, t.prototype.createCountryField = function (t, e, i) {
                var o = $(t), s = new l.a(o.find(".u-input"), {
                    getList: function (t) {
                        return n.i(h.a)("/ajax/cities.html?Commander.Command=SearchAirLocation&Top=7", {Word: t})
                    }, itemToString: function (t) {
                        return t ? t.Name : ""
                    }, itemToHTML: function (t) {
                        return t ? t.Name + '<span class="country">, ' + t.Country + '</span> <span class="code">' + t.Code + "</span>" : ""
                    }, value: null
                }), a = n.i(c.a)(o, {
                    showLoader: !0, tipTemplate: function (t, i) {
                        return i ? "город или аэропорт" : t ? t.Code + ", " + t.Country : n.i(c.b)(e, function (t) {
                            return t.Name
                        }, function (t) {
                            return s.setValue(t)
                        })
                    }
                }), u = new r.a({
                    control: s,
                    theme: a,
                    validation: {
                        messages: {
                            Empty: "Введите название города или аэропорта",
                            Double: "Пункт вылета не может совпадать с пунктом прилёта",
                            EmptyList: "Неизвестный город или аэропорт"
                        }, required: !0, func: i ? function (t) {
                            var e = i.getValueUnverified();
                            if (t && e && t.Code === e.Code)return "Double"
                        } : undefined
                    }
                });
                return s.onAfterLoad(function (t) {
                    var e = t.input, n = t.response;
                    e && n && !n.length ? a.setError("Неизвестный город или аэропорт") : a.setError("")
                }), s.$input.on("blur", function () {
                    u.updateField()
                }), i && i.onFieldChangeUnverified(function () {
                    u.updateField()
                }), u
            }, t.prototype.createDateField = function (t, e, i) {
                var o = this, s = $(t), a = new r.a({
                    theme: n.i(c.a)(s, {
                        isEmptyFn: function (t) {
                            return !t || t.length < 10
                        }
                    }), control: new u.a(s.find(".u-input"), {
                        valueOnBlurFn: function (t) {
                            if (!t)return i;
                            if (!(t.length < 10)) {
                                var e = n.i(p.f)(t);
                                if (e && n.i(p.c)(e) === t)return n.i(p.b)(e, "D MMMM")
                            }
                        }
                    })
                }), l = this.calendar;
                l.changeMode(e), l.onCalendarDaySelected(function (t) {
                    var i = t.index, s = t.date;
                    i === e - 1 && a.control.setValue(n.i(p.c)(s)), s && o.checkFastBack(s)
                });
                var d;
                return a.onFieldChange(function (t) {
                    d !== t && (d = t, l.setDateSilent(e - 1, t ? n.i(p.f)(t) : null), o.form.uFields.routeFields.forEach(function (t) {
                        t.dateField !== a && t.dateField.updateField()
                    }))
                }), a.setValidationOptions({
                    messages: {
                        Empty: "Введите дату",
                        DateOutOfRange: "Дата находится вне диапазона",
                        Incorrect: "Проверьте правильность ввода даты"
                    }, required: !0, func: function (t, i) {
                        var s = n.i(p.f)(t);
                        if (s) {
                            if (n.i(p.c)(s) !== t)return "Incorrect";
                            for (var a = x, r = o.calendar.end, l = 0; l < o.calendar.dates.length; l++) {
                                var u = o.calendar.dates[l];
                                if (u && l !== e - 1) {
                                    if (!(l < e - 1)) {
                                        r = u;
                                        break
                                    }
                                    a = u
                                }
                            }
                            return s < a || s > r ? "DateOutOfRange" : void 0
                        }
                    }
                }), a
            }, t.prototype.checkFastBack = function (t) {
                var e = this;
                if (1 !== this.form.uFields.routeFields.length)return void(this.fastBackPrevDate = null);
                var i = this.fastBackPrevDate;
                i && t && i < t && (this.$returnControl.toggleClass("shake", !1), this.$returnControl.toggleClass("shake", !0), this.$returnControl.on("click.fastBack", function () {
                    var o = e.form.uFields.routeFields;
                    o[0].dateField.setValue(n.i(p.c)(i)), o[1].dateField.setValue(n.i(p.c)(t))
                }), setTimeout(function () {
                    e.$returnControl.toggleClass("shake", !1)
                }, 1500), setTimeout(function () {
                    e.$returnControl.off("click.fastBack")
                }, 5e3)), this.fastBackPrevDate = t
            }, t.prototype.updateTable = function () {
                var t = this.formPoints.some(function (t) {
                    return t.isReturn
                }), e = this.formPoints.some(function (t) {
                    return 2 === t.pointType
                });
                this.$addRemoveControls.toggle(this.formPoints.length < 3 && !t).toggleClass("controls-green", 2 === this.formPoints.length);
                var n = this.$addRemoveControls.find(".control-break");
                n.add(n.prev()).toggle(!e);
                for (var i = 0; i < this.formPoints.length; i++) {
                    var o = this.formPoints[i], s = this.formPoints[i - 1];
                    if (o.$html.attr("class", ""), 2 === o.pointType) {
                        o.$html.first().attr("class", "openJaw_bottom"), s.$html.last().attr("class", "openJaw_top");
                        o.$html.children("td").first().attr("class", "middle break")
                    }
                    i === this.formPoints.length - 1 && o.$html.last().attr("class", "one_way");
                    o.$html.last().children("td").first().attr("class", o.isReturn ? "back" : "middle step" + (i + 1))
                }
            }, t
        }();
    k.personsPresetFlight = {
        types: ["adult", "child", "infant"],
        declensions: {
            adult: ["взрослый", "взрослых", "взрослых"],
            child: ["ребёнок", "ребёнка", "детей"],
            infant: ["младенец", "младенца", "младенцев"]
        },
        maxTotal: 6,
        tips: {
            adult: {
                add: "добавить взрослого (старше 12-ти лет)",
                remove: "исключить взрослого (старше 12-ти лет)",
                removeDisabled: "нельзя исключить"
            },
            child: {
                add: "добавить ребёнка от 0 до 12-ти лет с предоставлением места",
                remove: "исключить ребёнка от 0 до 12-ти лет с предоставлением места"
            },
            infant: {
                add: "добавить младенца до 2-х лет c предоставлением места",
                remove: "исключить младенца до 2-х лет c предоставлением места",
                addWithoutSeat: "добавить младенца до 2-х лет без предоставления места",
                removeWithoutSeat: "исключить младенца до 2-х лет без предоставления места"
            }
        },
        counts: {
            adult: {
                max: function (t, e) {
                    return e.maxTotal - t.child - (t.infant > t.adult ? 1 : 0)
                }, min: 1
            }, child: {
                max: function (t, e) {
                    return e.maxTotal - t.adult - (t.infant > t.adult ? 1 : 0)
                }
            }, infant: {
                max: function (t, e) {
                    return t.adult + t.child < e.maxTotal ? 1 : 0
                }, maxWithoutSeat: function (t, e) {
                    return t.adult
                }
            }
        }
    };
    var F = [{
        Name: "Москва",
        Country: "Россия",
        Id: "607b4aa2-5281-406c-a2ce-4bd52c29ef9a",
        Code: "MOW"
    }, {
        Name: "Санкт-Петербург",
        Country: "Россия",
        Id: "48e5f1c7-aa5f-4d1f-adcb-61e87f3b45bf",
        Code: "LED"
    }, {
        Name: "Екатеринбург",
        Country: "Россия",
        Id: "c7a16438-08f9-4fe1-ae72-318a0ffba95e",
        Code: "SVX"
    }, {
        Name: "Новосибирск",
        Country: "Россия",
        Id: "d5f518ca-3df1-4c34-bf5e-2659e207acca",
        Code: "OVB"
    }, {
        Name: "Хельсинки",
        Country: "Финляндия",
        Id: "44775e13-d38b-4eb0-99a8-b8f7118cc793",
        Code: "HEL"
    }, {
        Name: "Краснодар",
        Country: "Россия",
        Id: "552a5eee-63ab-4e41-b7d3-76c9ed94c3af",
        Code: "KRR"
    }, {
        Name: "Красноярск",
        Country: "Россия",
        Id: "1749c698-b410-42ca-8321-db79a952a867",
        Code: "KJA"
    }, {Name: "Самара", Country: "Россия", Id: "f6c81bcd-e307-4b78-867e-20ab104e3bb0", Code: "KUF"}, {
        Name: "Хабаровск",
        Country: "Россия",
        Id: "c8547b82-8660-476a-9b91-1d98d0f511ea",
        Code: "KHV"
    }, {
        Name: "Владивосток",
        Country: "Россия",
        Id: "2963f88c-febd-4d17-afcc-058ba89d74d8",
        Code: "VVO"
    }, {
        Name: "Ростов-на-Дону",
        Country: "Россия",
        Id: "a12e8b34-1823-402c-b81b-6377420cb217",
        Code: "ROV"
    }, {Name: "Сургут", Country: "Россия", Id: "81746f88-f966-437d-ad4a-e371191f6ddd", Code: "SGC"}, {
        Name: "Тиват",
        Country: "Черногория",
        Id: "3d475c27-9627-4c0a-8b39-07949f27194a",
        Code: "TIV"
    }, {Name: "Бангкок", Country: "Тайланд", Id: "119b46aa-ac71-47e4-9262-e630d2e0e5f0", Code: "BKK"}, {
        Name: "Сочи",
        Country: "Россия",
        Id: "645f2348-4d99-4705-8716-28ba6c58dd6e",
        Code: "AER"
    }], D = n.i(v.a)(F.slice(0))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return i
    });
    var i = function () {
        function t(t, e) {
            this._storageName = t, e = e || {}, this._version = e.version
        }

        return t.prototype.setItem = function (t, e) {
            var n = this.get() || {};
            n[t] = e, this.set(n)
        }, t.prototype.getItem = function (t) {
            return (this.get() || {})[t]
        }, t.prototype.get = function () {
            if (window.localStorage) {
                var t = localStorage.getItem(this._storageName);
                if (t) {
                    var e = JSON.parse(t);
                    if (e)return this._version && (!e._version || e._version < this._version) ? void this.clear() : e
                }
            }
        }, t.prototype.set = function (t) {
            if (window.localStorage) {
                this._version && (t._version = this._version), t._ts = +window.now || Date.now();
                try {
                    localStorage.setItem(this._storageName, JSON.stringify(t))
                } catch (e) {
                }
            }
        }, t.prototype.clear = function () {
            window.localStorage && localStorage.removeItem(this._storageName)
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0}), n.d(e, "Controller", function () {
        return c
    });
    var o, s, a, r = (n(8), n(7), n(11)), l = n(10), u = n(9), c = (s = o = function d(t) {
        i(this, d), a.call(this), this._storage = new r.a("FlightIndex"), this.flightIndexForm = new l.a({
            ipCity: t.ipCity,
            aviaExamples: t.aviaExamples,
            onSubmit: this.submit
        });
        var e = t.dataPromo ? {Routes: t.dataPromo} : this._storage.get();
        this.flightIndexForm.init(e), window.localStorage && localStorage.removeItem("undefined")
    }, a = function () {
        var t = this;
        this.submit = function (e) {
            t._storage.set(e);
            var i = n.i(u.a)({
                Routes: e.Routes.map(function (t) {
                    return {From: t.From.Code, To: t.To.Code, Date: t.Date}
                }),
                ServiceClass: e.Class,
                Dlts: e.PersonsCount.Dlts,
                Children: e.PersonsCount.Children,
                Infants: e.PersonsCount.Infants
            });
            window.location = i
        }
    }, s)
}, function (t, e, n) {
    "use strict";
    var i = n(39), o = (n.n(i), {});
    o.toggle = function (t) {
        t.closest(".popover-wrap").hasClass("open") ? o.closeAll() : o.open(t)
    }, o.open = function (t, e) {
        var n = t.closest(".popover-wrap"), i = t.data("target"), o = void 0;
        if (i ? (o = $(i), n.append(o)) : o = n.find(".popover"), o.length) {
            o.children(".caret").length || o.append('<div class="caret" />');
            var s = o.children(".caret"), a = n.hasClass("popover-wrap-right-side") ? "right" : "left", r = n.offset(),
                l = o.outerWidth(), u = $(window).width(), c = "right" === a ? r.left : u - r.left - l - 15,
                d = "right" === a ? r.left : u - r.left - l - 15;
            c < 0 && (o.css(a, c + "px"), s.css("margin-" + a, -d + "px")), n.addClass("open"), $(".popover-wrap.open").not(n).removeClass("open")
        }
    }, o.close = function (t) {
        var e = t.closest(".popover-wrap");
        e.removeClass("open"), e.find(".popover").css({left: ""})
    }, o.closeAll = function () {
        $(".popover-wrap.open").removeClass("open").find(".popover").css({left: ""})
    }, o.globalInit = function () {
        $("body").on("click", '*[data-toggle="popover"]', function (t) {
            t.stopPropagation(), o.toggle($(this))
        }).on("click", function () {
            o.closeAll()
        })
    }, o.globalInit()
}, function (t, e, n) {
    "use strict";
    var i = n(41), o = (n.n(i), $("body"));
    o.on("mousedown", ".btn", function () {
        var t = $(this).addClass("active");
        o.one("mouseup", function (e) {
            navigator.userAgent.indexOf("Presto") >= 0 && $(e.target).closest(t).length && t.click(), t.removeClass("active")
        })
    })
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        o(t), h("validCheck.initFields", t, e), t.on("keyup.validCheck paste.validCheck", function (t) {
            var n = t.keyCode;
            if (13 !== n && 9 !== n) {
                var i = $(this);
                l(i, e && e[i.data("check")], "Typing")
            }
        }), t.on("change.validCheck", function (t) {
            if (13 !== t.keyCode) {
                var n = $(this);
                l(n, e && e[n.data("check")], "Change")
            }
        });
        var n = void 0;
        t.on("keyup.validCheck paste.validCheck", function (t) {
            if (13 !== t.keyCode) {
                window.clearTimeout(n);
                var i = $(this), o = e && e[i.data("check")];
                n = window.setTimeout(function () {
                    l(i, o, "TypingDelay")
                }, 500)
            }
        }), t.on("change.validCheck", function (t) {
            n && window.clearTimeout(n), n = null
        })
    }

    function o(t) {
        t.off(".validCheck")
    }

    function s(t, e, n) {
        var i = [];
        return e = e || window.FieldsSettings || {}, t.each(function () {
            var t = $(this), o = t.data("check");
            o = o.replace("WithCorrect", "");
            var s = e[o];
            if (s) {
                var a = r(t, s, n);
                a && i.push({
                    $field: t,
                    errorType: a,
                    error: s.messages && s.messages[a]
                }), void 0 !== a && s.messages && c(t, a ? s.messages[a] || s.messages.Incorrect : "")
            }
        }), h("validCheck.getFieldsError", i, "arguments:", arguments), i
    }

    function a(t, e, n) {
        var i = s(t, e, n);
        return h("validCheck.checkFields ", !i.length, "arguments:", arguments), !i.length
    }

    function r(t, e, n) {
        var i = t.data("check");
        if (!(e = e || FieldsSettings[i]))return h("validCheck.getFieldError !no options!", "arguments:", arguments), !1;
        var o = t.data(), s = "required" in o ? o.required : e.required;
        n = n || "Submit";
        var a = e.patterns && (e.patterns[n] || "Submit" !== n && e.patterns.Typing), r = e.func, l = e.checkList,
            u = $.trim(t.val()), c = "";
        return !u.length && s && "Submit" == n ? c = "Empty" : s > 1 && u.length < s && "Submit" == n ? c = "MinLength" : e.maxlength && u.length > e.maxlength ? c = "LengthExceeded" : a && !a.test(u) && (c = "Submit" !== n ? "IncorrectOnTyping" : "Incorrect"), !c && l && l.some(function (t) {
            if (m[t] && !m[t](u, n))return c = t, !0
        }), !c && r && (c = r.call(t.get(0), u, i, n)), h("validCheck.getFieldError", c, "arguments:", arguments), c
    }

    function l(t, e, n) {
        var i = t.data("check");
        try {
            e = e || window.FieldsSettings[i]
        } catch (s) {
            return !0
        }
        if (!e)return !0;
        var o = r(t, e, n);
        return void 0 !== o && c(t, o ? e.messages[o] || e.messages.Incorrect : ""), $(".root_error_info").is(":visible") && $(".root_error_info").hide(), h("validCheck.checkField", !o, "arguments:", arguments), !o
    }

    function u(t) {
        return !t.closest(f).hasClass("error")
    }

    function c(t, e, n) {
        var i = "error";
        if (h("validCheck.setFieldError", "arguments:", arguments), void 0 !== e) {
            var o = t.closest(f);
            o.is(".component-form-group") && (i = "group-with-error"), o.toggleClass(i + (n ? " error-hide-message" : ""), !!e), o.find(".error span, .error-msg, .input-error-msg").html(e || "")
        }
    }

    function d(t, e) {
        if ("дд.мм.гггг" === t || !t || t.length < 10)return e.required ? "Incorrect" : "";
        var i = n.i(p.f)(t), o = "";
        return i.valueOf() ? t !== n.i(p.b)(i, "DD.MM.YYYY") ? o = "Incorrect" : e.min && i < e.min ? o = "Min" : e.max && i > e.max && (o = "Max") : o = e.required ? "Incorrect" : "", o
    }

    function h() {
        g.debug && console.log.apply(console, arguments)
    }

    n.d(e, "a", function () {
        return g
    });
    var p = n(1), f = ".field, .input-row, .field_root, .form-group, .book-field, .component-form-group", m = {
        isDiffersFromNo: function (t, e) {
            return "Typing" === e || "нет" !== t.toLowerCase()
        }, notMoreThreeSame: function (t, e) {
            if ("Typing" === e)return !0;
            for (var n = 0, i = 1; i < t.length; i++)if (t.charAt(i).toLowerCase() === t.charAt(i - 1).toLowerCase() ? n++ : n = 0, n > 2)return !1;
            return !0
        }, hasVowel: function (t, e) {
            return "Typing" === e || (!t || /[аяоёуюыиэеeyuioa]/gi.test(t))
        }
    }, v = {
        Birthdate: {
            func: function (t, e, n) {
                return d(t, {required: "Submit" === n, min: new Date(1900, 0, 1), max: window.now})
            }
        }, DateOut: {
            messages: {Min: "Документ просрочен", Incorrect: "Введите дату"}, func: function (t, e, n) {
                return d(t, {required: "Submit" === n, min: window.now})
            }
        }, PredicateField: {
            messages: {Empty: "Заполните поле"}, func: function (t, e, n) {
                if ("Submit" !== n)return !1;
                var i = $(this).data("Predicate");
                return !i || i.data.id && i.data.name ? void 0 : "Empty"
            }
        }, Checked: {
            messages: {Empty: "Заполните поле"}, func: function (t, e, n) {
                if ("Submit" !== n)return !1;
                var i = $(this), o = void 0;
                if ("radio" === i.attr("type")) {
                    o = $('input[name="' + i.attr("name") + '"]').filter(":checked").length
                } else o = $(this).is(":checked");
                return o ? "" : "Empty"
            }
        }, Exists: {messages: {Empty: "Заполните поле"}}
    }, g = {
        presets: v,
        initFields: i,
        uninitFields: o,
        getFieldError: r,
        getFieldsError: s,
        checkField: l,
        checkFields: a,
        setFieldError: c,
        isFieldValid: u,
        utils: {getDateError: d, checkListFuncs: m}
    }
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        var n = t, i = $.cookie("SA_IC") || "";
        n.children("dl").first().click(function (t) {
            var e = $(t.target), i = e.data("type");
            i && !e.hasClass("current") && n.find("[data-type]").each(function () {
                $(this).toggleClass("current", $(this).data("type") == i)
            })
        }), e && (n.one("click", "footer", function () {
            n.addClass("expanded")
        }), n.one("click", "footer", function () {
            var t = n.children("ul.current").data("type");
            t = "Offers" + t[0].toUpperCase() + t.slice(1), tellerEvents.gaEvent(t, "IndexAvia", "Expand")
        }), n.on("click", "li a[href]", function () {
            var t = $(this), e = t.parent().index() + 1, n = t.closest("ul").data("type");
            n = "Offers" + n[0].toUpperCase() + n.slice(1), tellerEvents.gaEvent(n, "IndexAvia", e)
        })), n.on("click", "dl[data-id]", function (t) {
            t.stopPropagation(), t.preventDefault();
            var e = $(this), n = {ID: e.data("id")};
            ~i.indexOf(n.ID) || (e.css("cursor", "wait").addClass("pressed"), $.getJSON("/new/ajax/like_offer.html", n).done(function (t) {
                t.success && t.rating && e.fadeTo(200, .5, function () {
                    e.find("dt").text(t.rating).end().css("cursor", "default").removeAttr("data-id").fadeTo(100, 1), $.cookie("SA_IC", i + n.ID + ",")
                }).attr("title", "Спасибо, ваш голос учтён")
            }).fail(function () {
                e.css("cursor", "pointer").removeClass("pressed")
            }))
        })
    }

    e.a = i;
    var o = n(51);
    n.n(o)
}, function (t, e, n) {
    "use strict";
    var i = n(3), o = n(2), s = n(52);
    n.n(s);
    $(function () {
        function t(t) {
            var e = $(window).height(), n = r.height() + i.a.$el.height(), o = r.offset().top,
                a = e > n ? o - (e - n) / 2 : o - 5;
            $("html").animate({scrollTop: a}, 400, "swing", function () {
                i.a.show(t, "is-mailing"), i.a.onAuthorization(s), i.a.onHide(function () {
                    i.a.onAuthorization.off(s)
                })
            })
        }

        function e(t) {
            r.data("signed", !!t), t && ($("#mailing-button").text("Вы успешно подписались на рассылку OZON.travel").attr("title", "").addClass("disabled"), $("#mailing-address").hide())
        }

        function s() {
            var t = $("#mailing-button");
            t.addClass("disabled"), a({Email: $("#mailing-address").val()}).always(function () {
                t.removeClass("disabled"), e(!0)
            })
        }

        function a(t) {
            return tellerEvents.gaEvent("Subsription", "ChangeMailDeliverySubscription", window.location.pathname), t = $.extend({
                Email: "",
                MailDelivery: !0
            }, t), n.i(o.a)("ChangeMailDeliverySubscription", t)
        }

        var r = $("#mailing");
        r.length && (r.on("click", function (t) {
            var e = $(this);
            e.addClass("active");
            var n = $(document.body);
            n.unbind("click.auth").on("click.auth", function (t) {
                $.contains(e[0], t.target) || e[0] == t.target || (n.unbind("click.auth"), e.removeClass("active"))
            })
        }), r.on("keypress", "#mailing-address", function (t) {
            13 == t.which && $("#mailing-button").trigger("click")
        }), r.on("click", "#mailing-button", function () {
            var e = $(this);
            if (!e.hasClass("disabled")) {
                var n = r.data("signed");
                if (i.a.isAuthorized && !n)return s();
                if (!i.a.isAuthorized) {
                    var o = $.trim($("#mailing-address").val());
                    o ? (e.addClass("disabled"), $.ajax({
                        url: "/new/ajax/check_user_by_email.html",
                        dataType: "json",
                        data: {Email: o},
                        success: function (t) {
                            i.a.kind(!t.Success)
                        },
                        complete: function () {
                            e.removeClass("disabled"), t(e), i.a.email(o)
                        }
                    })) : t(e)
                }
            }
        }))
    })
}, function (t, e, n) {
    "use strict";
    function i(t) {
        t = d({
            Login: "",
            FirstName: "",
            LastName: "",
            ClientSalt: "",
            RequestCount: 0
        }, t), t.ClientSalt && (window.__uid = t.ClientSalt);
        var e = "Перейти в личный кабинет";
        (t.FirstName || t.LastName) && (e += " (" + t.FirstName + " " + t.LastName + ")"), m.filter(".login").html(t.Login).attr("title", e), m.filter(".request").find(".count").html(0 | t.RequestCount), m.filter(".request").toggle(t.RequestCount > 0), h.addClass("logged"), p.addClass("show")
    }

    function o(t) {
        v.toggleClass("open", t), g = v.hasClass("open")
    }

    function s() {
        $.getJSON("/new/ajax/get_common_index_dynamic.html").done(function (t) {
            for (var e in t)t.hasOwnProperty(e) && a(e, t[e])
        })
    }

    function a(t, e) {
        var n = $("#" + t), i = $(e);
        n.html(i.children()).data(i.data()).attr("class", i.attr("class"))
    }

    var r = n(42), l = (n.n(r), n(3)), u = n(57), c = (n.n(u), n(20)), d = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, h = $("#private"), p = $(".corporate-stats"), f = $(".out a", h), m = $(".in a", h);
    l.a._setAuthorizedStatus(h.hasClass("logged")), l.a.getUserInfo(), f.click(function (t) {
        t.preventDefault(), l.a.show(h, "is-header")
    }), m.last().click(function (t) {
        t.preventDefault(), l.a.doLogout()
    }), l.a.onLogin(function (t) {
        i(t), s()
    }), l.a.onLogout(function () {
        m.filter(".login").html(), m.filter(".request").hide(), h.removeClass("logged"), p.removeClass("show"), s()
    }), l.a.onLogin(function (t) {
        var e = "";
        switch (t.ClientTagSite) {
            case"ionozontravel":
                e = "ion";
                break;
            case"mtsozontravel":
                e = "mts";
                break;
            case"letobankozontravel":
                e = "letobank";
                break;
            case"tradeozontravel":
                e = "trade";
                break;
            case"banzaiozontravel":
                e = "banzai"
        }
        if (e) {
            var n = "";
            switch (window.location.host) {
                case"betadev.ozon.travel":
                    n = "beta" + e + "dev.ozon.travel";
                    break;
                case"beta.ozon.travel":
                    n = "beta" + e + ".ozon.travel";
                    break;
                case"stage.ozon.travel":
                    n = "stage" + e + ".ozon.travel";
                    break;
                default:
                    n = e + ".ozon.travel"
            }
            window.location = "//" + n
        }
    }), $("body").on("click", "#my .nr_requests, #private .request", function (t) {
        t.preventDefault(), $.ajax({
            url: "/new/ajax/missions/get-missions-list-by-client.html",
            dataType: "json",
            success: function (t) {
                1 == t.length ? c.a.showRequestPopup(t[0].id) : t.length > 1 && c.a.showMissionsListPopup(t)
            }
        })
    }), $(".root-nav").on("click", ".root-nav-toggle", function () {
        var t = $(this).closest(".main-header");
        t.find(".root-nav-list").toggleClass("expand-root-nav"), t.find(".icon-hamburger").toggleClass("is-active")
    }), $(".login").on("click", function (t) {
        var e = $(this).siblings(".cabinet-switcher");
        e.length && (t.preventDefault(), e.toggle())
    });
    var v = $(".root-nav .sub-menu"), g = void 0;
    v.children("a").on("click", function (t) {
        t.preventDefault(), o()
    }), $("body").on("click", function (t) {
        g && !$(t.target).closest(v).length && o(!1)
    })
}, function (t, e, n) {
    "use strict";
    function i() {
        this.attch = {
            max: 9,
            counter: 0,
            form: null,
            form_state: null,
            mission_id: null,
            inputs: null
        }, this._missionPopup = new o.a({
            theme: "mission-popup",
            isModal: !1,
            content: "[empty]"
        }), this._missionPopup.onToggle(function (t) {
            $("html").toggleClass("is-mission-popup-open", t)
        }), this.addHandlers()
    }

    e.a = i;
    var o = n(4), s = n(44), a = (n.n(s), n(60));
    n.n(a);
    i.prototype.updateMissionInfo = function (t) {
        this._missionPopup.set({content: t}), this.$mission = this._missionPopup.$container.find(".mission"), this._missionId = this.$mission.attr("id"), this._missionPopup.show()
    }, i.prototype.addHandlers = function () {
        var t = this;
        this._missionPopup.onClickButtonByName("mission-popup-answer")(function () {
            var e = t._missionId;
            t.sendMessage(e)
        }), this._missionPopup.onClickButtonByName("mission-popup-agree")(function () {
            var e = t._missionId;
            t.sendAgreement(e, !0)
        }), this._missionPopup.onClickButtonByName("mission-popup-cancellation-agree")(function (e) {
            var n = t._missionId, i = e.data("token");
            t.cancelMission(n, i)
        });
        var e = this;
        this._missionPopup.$container.on("click", ".mission .mission-text .expand-mission-text", function (t) {
            var e = $(this).parents(".mission-text");
            e.toggleClass("mt-expanded"), $(this).html(e.hasClass("mt-expanded") ? "Скрыть текст заявки" : "Показать текст заявки")
        }).on("mousedown", ".mission .thumbler", function (e) {
            e.stopPropagation(), t.startDND(e)
        }).on("click", ".mission .actions .files .add", function () {
            var t = $(this).parents(".mission").attr("id");
            e.sendAddFileField(t)
        }).on("change", ".mission .actions .file input", function () {
            $(this).val() && e.setFileFieldMask($(this))
        }).on("click", ".mission .actions .file label.pseudo", function () {
            $(this).parents(".file").find("input").trigger("click")
        }).on("click", ".mission .actions .file .remove", function () {
            $(this).parents(".file").remove()
        })
    }, i.prototype.startDND = function (t) {
        var e = this;
        this.$mission.addClass("dnd unselectable"), $("body").on("mousemove.dnd", function (t) {
            e.moveDND(t)
        }).on("mouseup.dnd", function (t) {
            e.stopDND()
        }), $(document).on("mouseleave.dnd", function (t) {
            e.stopDND()
        }), this.$textarea = this.$mission.find(".actions textarea"), this.dndOpts = {
            startClientY: t.clientY,
            startHeight: this.$textarea.height()
        }
    }, i.prototype.moveDND = function (t) {
        var e = this.dndOpts.startClientY - t.clientY, n = Math.max(40, Math.min(250, this.dndOpts.startHeight + e));
        this.$textarea.height(n)
    }, i.prototype.stopDND = function () {
        $("body").off("mousemove.dnd mouseup.dnd"), $(document).off("mouseleave.dnd"), this.$mission.removeClass("dnd unselectable"), delete this.dndOpts
    }, i.prototype.sendAddFileField = function (t) {
        var e = this.$mission.find(".files"), n = e.find("input").length;
        $('<div class="file"><input type="file" id="f' + t + "_" + n + '" name="f' + t + "_" + n + '" /></div>').insertAfter(e.find(".add")), n == this.attch.max - 1 && e.find(".add").hide()
    }, i.prototype.setFileFieldMask = function (t) {
        t.is(":visible") ? (t.hide(), t.parent().append('<div class="label">\n\t\t\t\t<label for="' + t.attr("id") + '" class="pseudo">' + t.val() + '</label>\n\t\t\t\t<span class="remove">×</span>\n\t\t\t</div>')) : t.parent().find(".label label").html(t.val())
    }, i.prototype.cancelMission = function (t, e) {
        var n = this, i = void 0, o = void 0;
        e ? (i = "/new/ajax/missions/cancel-mission-by-token.html", o = {
            TUID: e,
            MissionID: t
        }) : (i = "/new/ajax/missions/cancel-mission-by-client.html", o = {ID: t, MissionID: t}), $.ajax({
            url: i,
            data: o,
            type: "post",
            success: function (t) {
                return n.updateMissionInfo(t)
            }
        })
    }, i.prototype.sendMessage = function (t) {
        var e = this.$mission.find("textarea").val(), n = this.$mission.find(".files input");
        if (n.length) {
            this.attch.form = $('form[name = "upload_attachments"]'), this.attch.form_state = $('iframe[name = "upload_attachments_state"]');
            var i = this;
            this.attch.form_state.on("load", function () {
                i.attch.mission_id && i.uploadAttachment()
            }), this.attch.inputs = n, this.uploadAttachments(t)
        } else this.sendTextMessage(t, e)
    }, i.prototype.sendAgreement = function (t, e) {
        if (this.$mission.find(".actions button.agree").length) {
            var n = "";
            n = e ? "Я согласен с условиями возврата." : "Я не согласен с условиями возврата.", this.sendTextMessage(t, n)
        }
    }, i.prototype.sendTextMessage = function (t, e) {
        var n = this;
        e && $.ajax({
            url: "/new/ajax/missions/send-mission-message.html",
            data: {MissionID: t, ClientMessage: e},
            type: "post",
            success: function (t) {
                return n.updateMissionInfo(t)
            }
        })
    }, i.prototype.uploadAttachments = function (t) {
        this.$mission.find(".files .list").hide(), this.$mission.find(".loading").show(), this.attch.mission_id = t, this.attch.form.find('input[name = "MissionID"]').val(t), this.uploadAttachment()
    }, i.prototype.uploadAttachment = function () {
        if (this.attch.counter == this.attch.inputs.length) {
            var t = this.$mission.find("textarea").val(), e = (t || "") + "\r\n";
            this.attch.inputs.length > 1 ? e += "Прикреплены файлы:" : e += "Прикреплен файл:";
            for (var n = [], i = 0; i < this.attch.inputs.length; i++) {
                var o = this.attch.inputs.eq(i).val(), s = o.split(".");
                if ("exe" != s[s.length - 1]) {
                    var a = o.split(/\\/), r = a[a.length - 1];
                    n.push(r)
                }
            }
            return e += " " + n.join(", "), this.sendTextMessage(this.attch.mission_id + "", e), this.attch.inputs = 0, this.attch.mission_id = null, void(this.attch.counter = 0)
        }
        var l = this.attch.inputs.eq(this.attch.counter), u = l.val().split(".");
        "exe" !== u[u.length - 1] && (this.attch.form.find('input[name = "File"]').remove(), l.attr({name: "File"}), this.attch.form.append(l), this.attch.form.submit()), this.attch.counter++
    }
}, function (t, e, n) {
    "use strict";
    function i() {
        this.addHandlers()
    }

    n.d(e, "a", function () {
        return r
    });
    var o = n(4), s = n(19), a = n(61);
    n.n(a);
    i.prototype.addHandlers = function () {
        var t = this;
        $("body").on("click", ".missions-list-request", function () {
            var e = $(this).data("mission-id");
            t.showRequestPopup(e, function () {
                t._requestsPopup.show()
            })
        }).on("click", ".req_title", function () {
            var e = $(this).data("mission-id");
            t.showRequestPopup(e)
        })
    }, i.prototype.showRequestPopup = function (t, e) {
        var n = this, i = this._missionController;
        i || (i = new s.a, i._missionPopup.onClose(function () {
            n._onCloseMissionsPopup && n._onCloseMissionsPopup()
        }), this._missionController = i), this._onCloseMissionsPopup = e, $.ajax({
            url: "/new/ajax/missions/get-mission-info.html",
            dataType: "html",
            data: {MissionID: t}
        }).done(function (t) {
            i.updateMissionInfo(t)
        }).fail(function (t) {
            console.error("Ошибка загрузки", t)
        })
    }, i.prototype.showMissionsListPopup = function (t, e, n) {
        var i = this, s = this._requestsPopup;
        s || (s = new o.a({
            className: "missions-list-popup",
            theme: "info",
            isModal: !1,
            content: "[empty]",
            buttons: [{title: "Закрыть", name: "close"}]
        }), this._requestsPopup = s, s.onClose(function () {
            i._onCloseRequestsPopup && (i._onCloseRequestsPopup(), i._onCloseRequestsPopup = null)
        })), this._onCloseRequestsPopup = n;
        var a = '<table>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class="name">Название</th>\n\t\t\t\t\t<th>Статус</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t' + t.map(function (t) {
                return '<tr class="' + t["state-sysname"] + '">\n\t\t\t\t\t\t<td class="name">\n\t\t\t\t\t\t\t<span class="pseudo missions-list-request" data-mission-id="' + t.id + '">' + t.name + '</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="state">' + t.state + "</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t" + (t.count > 0 ? '<span data-mission-id="' + t.id + '" class="nr_requests req_title">\n\t\t\t\t\t\t\t\t\t<span>' + t.count + "</span>\n\t\t\t\t\t\t\t\t</span>" : "") + "\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>"
            }).join("") + "\n\t\t\t</tbody>\n\t\t</table>";
        s.set({header: e, content: a}), s.show()
    };
    var r = new i, l = window.__requestPopupMissionID;
    l && r.showRequestPopup(l)
}, function (t, e) {
    !function (t) {
        function e(e, s) {
            function a(n, i) {
                e["scroll" + i.Dir](0);
                var o = s.prefix + "bar" + i.suffix, a = e.children("." + o);
                a.length || (a = t(s.barHtml).addClass(o).appendTo(e)), a.on("mousedown touchstart", function (t) {
                    t.preventDefault();
                    var e = m["scroll" + i.Dir](),
                        o = t[i.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][i.clientAxis],
                        s = r(n, i).ratio;
                    C.on("mousemove.custom-scroll touchmove.custom-scroll", function (t) {
                        t.preventDefault();
                        var n = t[i.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][i.clientAxis];
                        m["scroll" + i.Dir](e + (n - o) / s)
                    }), C.on("mouseup.custom-scroll touchend.custom-scroll", function () {
                        C.off(".custom-scroll")
                    })
                }), b[n] = a
            }

            function r(t, n) {
                var i = 0 | m.prop("scroll" + n.Dim), o = e["inner" + n.Dim](), a = m["inner" + n.Dim](),
                    r = o - s["offset" + n.Dir] - s["offset" + n.Dir2];
                f["x" == t ? "y" : "x"] || (r -= s["track" + n.Dim]);
                var l = Math.max(r * o / i | 0, s["barMin" + n.Dim]);
                return {ratio: (r - l) / (i - a), dim: o, scroll: r, total: i, bar: l}
            }

            function l() {
                t.each(h, u)
            }

            function u(t, n) {
                var i = r(t, n);
                if (i.total) {
                    var o = m["scroll" + n.Dir]();
                    if (p[t].scrollPos !== o || p[t].scroll !== i.scroll || p[t].total !== i.total) {
                        p[t] = i, p[t].scrollPos = o;
                        var a = i.bar >= i.scroll;
                        a !== f[t] && (e.toggleClass(s.prefix + "hidden" + n.suffix, a), f[t] = a);
                        var l = o * i.ratio;
                        l < 0 && (l = 0), l > i.scroll - i.bar && (l = i.scroll - i.bar), b[t][n.dim](i.bar).css(n.dir, s["offset" + n.Dir] + l)
                    }
                }
            }

            function c() {
                t.each(h, function (t) {
                    b[t].remove()
                }), e.removeClass(s.prefix + "container").removeData("custom-scroll").css({
                    padding: "",
                    maxHeight: ""
                }), m.contents().appendTo(e), m.remove()
            }

            var d = e.data("custom-scroll");
            s = d ? d.options : t.extend({}, n, s);
            var h = {}, p = {}, f = {x: +s.vertical, y: +s.horizontal};
            if (s.horizontal && (h.x = o, p.x = {}), s.vertical && (h.y = i, p.y = {}), e.hasClass(s.prefix + "container") && d)return d.updateBars(), d;
            var m = e.children("." + s.prefix + "inner");
            m.length || (m = e.wrapInner('<div class="' + s.prefix + 'inner"></div>').children()), e.addClass(s.prefix + "container");
            var v = t('<div class="' + s.prefix + 'inner" />').width(100).height(100).appendTo("body").css({overflow: "scroll"})[0],
                g = v.offsetWidth - v.clientWidth, y = v.offsetHeight - v.clientHeight;
            v.parentElement.removeChild(v), s.vertical ? (m.css({
                paddingLeft: e.css("paddingLeft"),
                paddingRight: e.css("paddingRight"),
                marginRight: -g + "px"
            }), e.css({
                paddingLeft: 0,
                paddingRight: 0
            })) : m.css({overflowY: "hidden"}), s.horizontal ? (m.css({
                marginBottom: -y + "px",
                paddingBottom: y + "px"
            }), e.css({paddingTop: 0, paddingBottom: 0})) : m.css({overflowX: "hidden"});
            var $ = e.css("maxHeight");
            parseInt($) && (e.css("maxHeight", "none"), m.css("maxHeight", $)), e.scrollTop(0);
            var C = t("body"), b = {};
            t.each(h, a), m.on("scroll", l), l(), s.preventParentScroll && function () {
                m.on("DOMMouseScroll mousewheel", function (e) {
                    var n = t(this), i = this.scrollTop, o = this.scrollHeight, s = n.height();
                    o <= s || (("DOMMouseScroll" == e.type ? -40 * e.originalEvent.detail : e.originalEvent.wheelDelta) > 0 ? 0 === i : i === o - s) && e.preventDefault()
                })
            }();
            var w = {$container: e, $bar: b.y, $barX: b.x, $inner: m, destroy: c, updateBars: l, options: s};
            return e.data("custom-scroll", w), w
        }

        t.fn.customScroll = function (i) {
            return this.length ? "destroy" === i ? (this.each(function () {
                var e = t(this).data("custom-scroll");
                e && e.destroy()
            }), this) : 1 === this.length ? e(this, i) : void this.each(function () {
                e(t(this), i)
            }) : t.extend(n, i)
        };
        var n = {
            prefix: "custom-scroll_",
            barMinHeight: 10,
            barMinWidth: 10,
            offsetTop: 0,
            offsetBottom: 0,
            offsetLeft: 0,
            offsetRight: 0,
            trackWidth: 10,
            trackHeight: 10,
            barHtml: "<div />",
            vertical: !0,
            horizontal: !0,
            preventParentScroll: !0
        }, i = {
            dim: "height",
            Dim: "Height",
            dir: "top",
            Dir: "Top",
            dir2: "bottom",
            Dir2: "Bottom",
            clientAxis: "clientY",
            suffix: "-y"
        }, o = {
            dim: "width",
            Dim: "Width",
            dir: "left",
            Dir: "Left",
            dir2: "right",
            Dir2: "Right",
            clientAxis: "clientX",
            suffix: "-x"
        }
    }(jQuery)
}, function (t, e, n) {
    "use strict";
    function i(t, e, i) {
        var l = r({method: "GET", cookie: !0, cache: !0, timeout: 0}, i), u = l.method.toUpperCase(),
            c = {method: u, headers: {}};
        l.type && (c.headers.Accept = "json" === l.type ? "application/json" : "text/html"), l.cookie && (c.credentials = "same-origin"), e && ("POST" === u ? e instanceof FormData ? c.body = e : (c.body = n.i(a.a)(e), c.headers["Content-Type"] = "application/x-www-form-urlencoded") : (t += -1 === t.indexOf("?") ? "?" : "&", t += n.i(a.a)(e))), l.cache || "GET" !== u || (t += -1 === t.indexOf("?") ? "?" : "&", t += "_=" + (Date.now() % 1e9).toString(36));
        var d = fetch(t, c).then(function (t) {
            return t.ok ? "json" === l.type ? t.json()["catch"](function (t) {
                return o("JsonError", t.message)
            }) : t.text() : o("Response" + t.status, "Сервис временно недоступен", 503)
        })["catch"](function (t) {
            return o("NetworkError", t.message)
        });
        return l.timeout ? Promise.race([d, s(l.timeout)]) : d
    }

    function o(t, e, n) {
        return void 0 === n && (n = 500), {error: {code: t, description: e}, _code: n}
    }

    function s(t) {
        return new Promise(function (e) {
            setTimeout(function () {
                return e(o("TimeoutError", "Превышено время ожидания запроса", 408))
            }, t)
        })
    }

    n.d(e, "a", function () {
        return l
    });
    var a = n(5), r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, l = function (t, e, n) {
        return i(t, e, r({}, n, {method: "GET", type: "json"}))
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), o = n(40), s = (n.n(o), Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }), a = function () {
        function t(e, o) {
            if (this.isOpen = !1, this.onToggle = n.i(i.a)(), this.onCreate = n.i(i.a)(), this.$trigger = $(e), this.$trigger.data("popover2"))return this.$trigger.data("popover2");
            this.$trigger.data("popover2", this), this.options = s({}, {
                content: this.$trigger.data("content") || "",
                placing: this.$trigger.data("placing") || "bottom",
                direction: this.$trigger.data("direction") || "auto",
                className: this.$trigger.data("class") || ""
            }, o), this.createPopover(), t.addHandlers(), this.addHandlers()
        }

        return t.addHandlers = function () {
            t.hasGlobalHandlers || ($("body").on("click", function () {
                t.closeLast()
            }), $(window).on("resize", function () {
                t.closeLast()
            }), t.hasGlobalHandlers = !0)
        }, t.globalInit = function () {
            $('[data-toggle="popover2"]').each(function () {
                new t($(this))
            })
        }, t.closeLast = function () {
            t.lastPopover && t.lastPopover.toggle(!1)
        }, t.prototype.addHandlers = function () {
            var e = this;
            this.$trigger.on("click", function (n) {
                n.stopPropagation(), t.closeLast(), e.toggle()
            })
        }, t.prototype.toggle = function (e) {
            e === undefined && (e = !this.isOpen), e = !!e, this.isOpen !== e && (this.isOpen = e, e && this.position(), this.$popover.toggle(this.isOpen), t.lastPopover = e ? this : null, this.onToggle.emit(e))
        }, t.prototype.position = function () {
            if (this.isOpen) {
                var t = this.$popover.find(".caret"), e = this.$trigger.offset(), n = this.$trigger.outerWidth(),
                    i = this.$trigger.outerHeight(), o = this.$popover.outerWidth(), s = this.$popover.outerHeight(),
                    a = t.outerHeight(), r = t.outerWidth(), l = $(window).width(),
                    u = this.$popover.find(".close").outerWidth(), c = 0, d = 0;
                switch (this.getPlacing()) {
                    case"top":
                        c = e.top - s - a;
                        break;
                    case"bottom":
                        c = e.top + i
                }
                switch (this.getCalculatedDirection()) {
                    case"left":
                        d = e.left - parseInt(this.$popover.css("border-right-width"), 10) - parseInt(this.$popover.css("padding-right"), 10) - parseInt(this.$popover.css("margin-right"), 10);
                        break;
                    case"right":
                        var h = parseInt(this.$popover.css("border-left-width"), 10) + parseInt(this.$popover.css("padding-left"), 10) + parseInt(this.$popover.css("margin-left"), 10);
                        d = e.left + n - o + h
                }
                d <= 0 && (d = 0), d + o >= l && (d = l - o);
                var p = e.left - d + n / 2 - r / 2;
                p > o - u - r && (p = o - u - r), p < 4 && (p = 4), this.$popover.css({
                    left: d,
                    top: c
                }), t.css("left", p)
            }
        }, t.prototype.getPlacing = function () {
            return this.options.placing
        }, t.prototype.setPlacing = function (t) {
            this.options.placing = t, this.$popover.data("placing", t), this.position()
        }, t.prototype.getDirection = function () {
            return this.options.direction
        }, t.prototype.setDirection = function (t) {
            this.options.direction = t, this.$popover.data("direction", this.getCalculatedDirection()), this.position()
        }, t.prototype.getCalculatedDirection = function () {
            switch (this.options.direction) {
                case"left":
                case"right":
                    return this.options.direction;
                default:
                    var t = this.$trigger.offset(), e = $(window).width();
                    return t.left <= e / 2 ? "left" : "right"
            }
        }, t.prototype.getContent = function () {
            return this.options.content
        }, t.prototype.setContent = function (t) {
            this.options.content = t, this.$popover.find("p").html(t)
        }, t.prototype.createPopover = function () {
            this.$popover = $('\n            <div class="popover2 ' + this.options.className + '" data-placing="' + this.getPlacing() + '" data-direction="' + this.getCalculatedDirection() + '">\n                <p>' + this.options.content + '</p>\n                <div class="caret"></div>\n                <div class="close"></div>\n            </div>'), this.$popover.appendTo("body"), this.onCreate.emit()
        }, t
    }();
    a.hasGlobalHandlers = !1, a.globalInit()
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        if (t > e)return "";
        for (var i = new Date(t.getFullYear(), t.getMonth(), 1), s = e.getMonth(), r = e.getFullYear(), l = "", u = 0; i.valueOf() <= e.valueOf();) {
            var c = i.getFullYear(), d = i.getMonth(), h = 0 === u ? t.getDate() : 1,
                p = r === c && s === d ? e.getDate() : 0;
            l += '<div class="index-calendar-month">\n\t\t\t\t\t<div class="index-calendar-month-name">\n\t\t\t\t\t\t<span class="short-month">' + n.i(a.b)(i, "MMM") + '</span>\n\t\t\t\t\t\t<span class="full-month">' + n.i(a.b)(i, "MMMM") + "</span>\n\t\t\t\t\t\t" + (0 === u || 0 === d ? n.i(a.b)(i, "YYYY") : "") + "\n\t\t\t\t\t</div>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t" + o(c, d, h, p) + "\n\t\t\t\t\t</table>\n\t\t\t\t</div>", i.setMonth(d + 1), u++
        }
        return l
    }

    function o(t, e, n, i) {
        n = n || 1;
        var o = new Date(t, e, n), a = new Date(t, e + (i ? 0 : 1), i || 0);
        i = a.getDate();
        for (var r = (o.getDay() + 6) % 7, l = (a.getDay() + 6) % 7, u = [], c = 0; c < r; c++)u.push(0);
        for (var d = n; d <= i; d++)u.push(d);
        for (var h = 1; h < 7 - l; h++)u.push(0);
        for (var p = "", f = 0; f < u.length; f++) {
            f % 7 == 0 && (p += "<tr>");
            p += s(u[f], e, t), f % 7 == 6 && (p += "</tr>")
        }
        return p
    }

    function s(t, e, n) {
        if (t > 0) {
            return '<td class="day" data-date="' + (n + "-" + (e < 9 ? "0" : "") + (e + 1) + "-" + (t < 10 ? "0" : "") + t) + '"><span>' + t + "</span></td>"
        }
        return '<td class="day empty disabled"><span></span></td>'
    }

    n.d(e, "a", function () {
        return c
    });
    var a = n(1), r = n(0), l = n(47), u = (n.n(l), n(6)), c = function () {
        function t(t) {
            this.onCalendarDaySelected = n.i(r.a)(), this.length = 0, this.dates = [], this._isSeparateInputs = !1, this._chooseIndex = 0, this._hasScroll = !1, this.$root = $(t.target || "#index-calendar"), this.dateLimit = t.dateLimit || 1, this._init(), this.setOptions(t), this.addHandlers()
        }

        return t.prototype.setOptions = function (t) {
            this.length = t.length;
            var e = t.begin || this.begin || new Date;
            this.begin = new Date(e.getFullYear(), e.getMonth(), e.getDate()), this.end = new Date(e.getFullYear(), e.getMonth(), e.getDate() + this.length - 1), this._draw()
        }, t.prototype.checkHeight = function () {
            var t = this.$months[0], e = t.scrollHeight > t.clientHeight;
            this._hasScroll = e, this.$root.toggleClass("has-scroll", e)
        }, t.prototype.changeMode = function (t) {
            this.dateLimit = t, this.dates.length > t && this.dates.splice(t, 1), this._chooseIndex > this.dates.length && (this._chooseIndex = this.dates.length), this._drawPeriod()
        }, t.prototype.setSeparateInputs = function (t) {
            this._isSeparateInputs = !!t
        }, t.prototype.setChooseIndex = function (t) {
            this._chooseIndex = t, this._drawPeriod()
        }, t.prototype.setDate = function (t, e) {
            this.setDateSilent(t, e), this.onCalendarDaySelected.emit({index: t, date: e})
        }, t.prototype.getDate = function (t) {
            return this.dates[t]
        }, t.prototype.setDateSilent = function (t, e) {
            if (!(t > this.dateLimit - 1)) {
                this.dates[t] = e;
                for (var n = this.dates.length - 1; n >= 0 && !this.dates[n];)n--;
                this.dates.splice(n + 1, 1), !this._isSeparateInputs && e && (this._chooseIndex = this.dates.length), this._drawPeriod(), this._hasScroll && e && (this.dateLimit <= 1 || t < this.dateLimit - 1) && this._scrollToMonth(e)
            }
        }, t.prototype.clear = function () {
            this._scrollTo(0, !1), this._clearPeriod(), this.dates = []
        }, t.prototype.setError = function (t) {
            this.$root.find(".index-calendar-error").html(t || "").toggleClass("-empty", !t)
        }, t.prototype.chooseDate = function (t) {
            if (!(t instanceof Date))return console.error("IndexCalendar.chooseDate: argument should be Date", t);
            if (!(t < this.begin || t > this.end)) {
                var e = this.dates, n = this._chooseIndex;
                if (n >= this.dateLimit && (n = 0), this._isSeparateInputs)for (var i = e.length - 1; i >= 0; i--) {
                    var o = e[i];
                    (!o || n !== i && t.valueOf() !== o.valueOf() && t.valueOf() < o.valueOf() != n < i) && this.setDate(i, null)
                } else for (var i = e.length - 1; i >= n; i--)this.setDate(i, null);
                (this._isSeparateInputs || e.every(function (e) {
                    return !e || e.valueOf() <= t.valueOf()
                })) && this.setDate(n, t)
            }
        }, t.prototype.addHandlers = function () {
            var t = this;
            if (this.$root.find(".index-calendar-arrow").on("click", function () {
                    var e = $(this).hasClass("is-prev");
                    t._scrollToNextMonth(e ? -1 : 1)
                }), this._androidBrowserDetect()) {
                var e = {};
                this.$root.on("touchstart touchend", ".day:not(.disabled) > span", function (n) {
                    if ("touchstart" === n.type) e.ts = Date.now(); else if (Date.now() - e.ts < 300) {
                        t._chooseDateByNode($(this).parent());
                        var i = n.originalEvent, o = i.changedTouches[0] || i.touches[0] || {};
                        e.ts = Date.now(), e.screenX = o.screenX, e.screenY = o.screenY, n.preventDefault()
                    }
                }), this.$root.on("click", ".day:not(.disabled) > span", function (n) {
                    Math.abs(n.screenX - e.screenX) + Math.abs(n.screenY - e.screenY) < 3 && Date.now() - e.ts < 500 || t._chooseDateByNode($(this).parent())
                })
            } else this.$root.on("click", ".day:not(.disabled) > span", function () {
                t._chooseDateByNode($(this).parent())
            })
        }, t.prototype._androidBrowserDetect = function () {
            var t = navigator.userAgent,
                e = t.indexOf("Android") > -1 && t.indexOf("Mozilla/5.0") > -1 && t.indexOf("AppleWebKit") > -1,
                n = new RegExp(/AppleWebKit\/([\d.]+)/), i = n.exec(t),
                o = null === i ? null : parseFloat(n.exec(t)[1]), s = new RegExp(/Chrome\/([\d.]+)/), a = s.exec(t),
                r = null === a ? null : parseFloat(s.exec(t)[1]);
            return !!(e && null !== o && o < 537 || null !== r && r < 37)
        }, t.prototype._draw = function () {
            this.$months.html(i(this.begin, this.end)), this.$days = this.$root.find(".day[data-date]"), this.checkHeight()
        }, t.prototype._init = function () {
            this.$root.append('<div class="touch-close"><span class="fontello-up"></span></div>\n\t\t\t<div class="index-calendar-header">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>пн</td>\n\t\t\t\t\t\t<td>вт</td>\n\t\t\t\t\t\t<td>ср</td>\n\t\t\t\t\t\t<td>чт</td>\n\t\t\t\t\t\t<td>пт</td>\n\t\t\t\t\t\t<td>сб</td>\n\t\t\t\t\t\t<td>вс</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class="index-calendar-container">\n\t\t\t\t<div class="index-calendar-months"></div>\n\t\t\t</div>\n\t\t\t<div class="index-calendar-error -empty"></div>\n\t\t\t<div class="index-calendar-arrow is-prev">' + u.a.getSVGString("CalendarArrowUp") + '</div>\n\t\t\t<div class="index-calendar-arrow is-next">' + u.a.getSVGString("CalendarArrowDown") + "</div>"), this.$months = this.$root.find(".index-calendar-months");
            var t = $("<div />").css({overflow: "scroll", width: "100px", height: "100px"}).appendTo("body")[0],
                e = t.offsetWidth - t.clientWidth;
            t.parentNode.removeChild(t);
            var n = parseInt(this.$months.css("paddingRight"), 10);
            this.$months.css({paddingRight: n + 100 + "px", marginRight: -100 - e + "px"})
        }, t.prototype._chooseDateByNode = function (t) {
            var e = t.data("date"), i = n.i(a.d)(e);
            this.chooseDate(i)
        }, t.prototype._clearPeriod = function () {
            this.$days.removeClass(["dp", "na", "cd0", "cd1", "cd2", "cd3"].join(" ")), this.$root.removeClass("na d1 d2")
        }, t.prototype._drawPeriod = function () {
            function t(t, e, n) {
                o.slice(t, e).attr("class", "day " + n)
            }

            var e = this.dates, i = this.dateLimit, o = this.$days, s = this._chooseIndex, r = this._isSeparateInputs;
            if (!r && !e.length)return void t(0, -1, "");
            var l = e.length === i && e.every(function (t) {
                    return !!t
                }), u = e.map(function (t) {
                if (!t)return null;
                var e = n.i(a.e)(t), i = o.filter('[data-date="' + e + '"]');
                return o.index(i)
            });
            if (r) t(0, -1, "d" + s); else {
                var c = u[0], d = u[u.length - 1];
                i > 1 ? (t(0, c, "na"), t(d + 1, undefined, l ? "na" : "d" + s)) : (t(0, c, ""), t(d + 1, undefined, "")), c + 1 < d && t(c + 1, d, "dp")
            }
            u.forEach(function (e, n) {
                null !== e && t(e, e + 1, "cd" + n)
            })
        }, t.prototype._scrollTo = function (t, e) {
            t = +t, isNaN(t) || (e = e === undefined || !!e, t < 0 && (t = 0), e ? this.$months.stop(!0).animate({scrollTop: t}, {duration: 200}) : this.$months.scrollTop(t))
        }, t.prototype._scrollByDiff = function (t, e) {
            var n = this.$months.scrollTop() - parseInt(this.$root.css("padding-top"), 10);
            this._scrollTo(n + t, e)
        }, t.prototype._scrollToMonth = function (t) {
            var e = n.i(a.e)(t), i = this.$days.filter('[data-date="' + e + '"]'),
                o = i.closest(".index-calendar-month");
            o.length && this._scrollByDiff(o.position().top, !0)
        }, t.prototype._scrollToNextMonth = function (t) {
            var e = this.$root.find(".index-calendar-month"), n = this.$months.offset().top, i = e.first();
            e.each(function () {
                var t = $(this);
                if (t.offset().top - n > 10)return !1;
                i = t
            });
            var o = t > 0 ? i.next() : i.prev();
            o.length && this._scrollByDiff(o.position().top, !0)
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return r
    });
    var i = n(0), o = n(37), s = n(48), a = (n.n(s), Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }), r = function () {
        function t(e, o) {
            if (this.onSetValue = n.i(i.a)(), this._data = a({}, t._defaultData), !o)throw new Error("IndexFormPersons: options is required");
        }

        return t._htmlPersonsByType = function (t, e, n) {
            var i = "";
            n = n ? " " + n : "";
            for (var o = $(".index-form-persons-selector .person." + t).html(), s = 0; s < e; s++)i += '<div class="person ' + t + n + '">' + o + "</div>";
            return i
        }, t._getTypeByNode = function (t) {
            return t.hasClass("child") ? "child" : t.hasClass("infant") ? "infant" : t.hasClass("adult") ? "adult" : ""
        }, t.prototype.setOptions = function (t) {
            this._options = t, this._actualCounts = this._getActualCounts(), this._drawPersons()
        }, t.prototype._getActualCounts = function () {
            var t = this._options.counts, e = this._data, n = {};
            for (var i in t)if (t.hasOwnProperty(i)) {
                n[i] = {};
                var o = t[i];
                for (var s in o)if (o.hasOwnProperty(s)) {
                    var a = o[s];
                    n[i][s] = "function" == typeof a ? a(e, this._options) : a || 0
                }
            }
            return n
        }, t.prototype.addHandlers = function () {
            var e = this;
            this.$selectorPersons.on("click", function () {
                var n = $(this), i = t._getTypeByNode(n);
                e.addPerson(i, 1)
            }), this.$selectedPersonsRoot.on("click", ".person:not(.disabled)", function () {
                var n = $(this), i = t._getTypeByNode(n);
                e.addPerson(i, -1)
            });
            var n = this.$selectedTip;
            this.$selectedPersonsRoot.on("mouseover touchend", ".person", function () {
                var i = $(this), o = t._getTypeByNode(i), s = e._options.tips[o], a = i.hasClass("disabled"),
                    r = i.closest(".row-without-seats").length, l = s.remove;
                r && (l = s.removeWithoutSeat), a && (l = s.removeDisabled), n.html(l || ""), e.$arrow.toggle(!1)
            }), this.$selectedPersonsRoot.on("mouseleave click touchend", ".person", function (t) {
                var i = $(this);
                ("click" !== t.type && "touchend" !== t.type || !i.hasClass("disabled")) && (e.$selectorPersons.not(".disabled").length && e.$arrow.toggle(!0), n.html(""))
            }), this.$selectorPersons.on("mouseover click touchend", function () {
                var i = $(this), o = t._getTypeByNode(i), s = e._options.tips[o], a = e._actualCounts[o], r = e._data,
                    l = (a.max || 0) + (a.maxWithoutSeat || 0), u = r[o] >= l, c = r[o] < a.maxWithoutSeat, d = s.add;
                c && (d = s.addWithoutSeat), u && (d = s.addDisabled), n.html(d || ""), e.$arrow.toggle(!u)
            }), this.$selectorPersons.on("mouseleave touchend", function () {
                n.html(""), e.$selectorPersons.not(".disabled").length && e.$arrow.toggle(!0)
            })
        }, t.prototype.reset = function () {
            this.setValue(t._defaultData)
        }, t.prototype.setValue = function (t) {
            a(this._data, t), this._actualCounts = this._getActualCounts(), this._checkCounts(), this._drawPersons(), this.onSetValue.emit(this._data)
        }, t.prototype.getValue = function () {
            return this._data
        }, t.prototype.addPerson = function (t, e) {
            this._data[t] += e || 1, this._checkCounts(), this.setValue(this._data)
        }, t.prototype._checkCounts = function () {
            var t = this._actualCounts, e = this._data;
            for (var n in t)if (t.hasOwnProperty(n)) {
                var i = t[n], o = e[n], s = i.min || 0;
                o < s && (o = s);
                var a = (i.max || 0) + (i.maxWithoutSeat || 0);
                o > a && (o = a), e[n] = o, this.$selectorPersons.filter("." + n).toggleClass("disabled", o >= a)
            }
        }, t.prototype._drawPersons = function () {
            for (var e = this._options, i = this._data, s = this._actualCounts, a = "", r = "", l = 0; l < e.types.length; l++) {
                var u = e.types[l], c = i[u];
                if (c) {
                    var d = s[u];
                    d.maxWithoutSeat ? (r += t._htmlPersonsByType(u, Math.min(c, d.maxWithoutSeat), "selected"), a += t._htmlPersonsByType(u, c - d.maxWithoutSeat, "selected")) : a += t._htmlPersonsByType(u, c, "selected" + (c <= d.min ? " disabled" : ""))
                }
            }
            this.$selectedPersonsWithSeatRoot.html(a), this.$selectedPersonsWithoutSeatsRoot.html(r), this.$rowWithoutSeats.toggle(!!r);
            var h = n.i(o.a)(i.adult, e.declensions.adult, "&nbsp;");
            i.child && (h += ", " + n.i(o.a)(i.child, e.declensions.child, "&nbsp;")), i.infant && (h += ", " + n.i(o.a)(i.infant, e.declensions.infant, "&nbsp;")), this.$selectedCount.html(h)
        }, t
    }();
    r._defaultData = {adult: 1, child: 0, infant: 0}
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return r
    });
    var i = n(50), o = (n.n(i), Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }), s = $("body"), a = .01, r = function () {
        function t(t, e) {
            var n = this;
            this.isAnimating = !1, this.isDragging = !1, this.lastDelta = 0, this.shouldPreventDefault = !1, this.handleDragStart = function (t) {
                n.stop(), n.isDragging = !0, n.isAnimating && n.slideStop(), n.width = n.$root.width(), n.lastDelta = 0, n.dragStartClickPosition = t.pageX || t.originalEvent.touches[0].pageX, n.dragStartSliderPosition = n.$slidesRoot.position().left / n.width, s.on("mousemove touchmove", n.handleDragMove), s.on("mouseup touchend touchcancel mouseleave", n.handleDragStop)
            }, this.handleDragMove = function (t) {
                var e = n.getDelta(t);
                n.lastDelta = e;
                var i = e + n.dragStartSliderPosition;
                if (Math.abs(i + 1) >= 1) {
                    var o = e < 0 ? 1 : -1;
                    n.dragStartSliderPosition += o, n.setSlide(n.slideIndex + o, o > 0)
                } else n.$slidesRoot.css("left", 100 * i + "%");
                !n.shouldPreventDefault && Math.abs(e) > a && (n.shouldPreventDefault = !0)
            }, this.handleDragStop = function (t) {
                if (n.isDragging) {
                    n.isDragging = !1;
                    var e = n.lastDelta;
                    s.off("mousemove touchmove", n.handleDragMove), s.off("mouseup touchend mouseleave", n.handleDragStop);
                    var i = 0;
                    Math.abs(e) > a && (i = e < 0 ? 1 : -1, t.preventDefault()), n.slideTo(i), n.start(), setTimeout(function () {
                        n.shouldPreventDefault = !1
                    }, 10)
                }
            }, this.$root = $(t), this.$slidesRoot = this.$root.children("ul"), this.$slides = this.$slidesRoot.children("li"), this.$dotsList = this.$root.children(".dots-list"), this.options = o({
                interval: 8e3,
                animateSpeed: 700,
                fadeSpeed: 100
            }, e), this.width = this.$root.width(), this.slideIndex = 0, this.totalCount = this.$slides.length, this.totalCount > 1 && (this.addHandlers(), this.setSlide(0), this.start())
        }

        return t.prototype.addHandlers = function () {
            var t = this, e = this, n = this.$root;
            n.get(0).ondragstart = function () {
                return !1
            }, n.get(0).onselectstart = function () {
                return !1
            }, n.find(".dots-list .dot").not("active").on("click", function () {
                e.fadeTo($(this).data("index"))
            }), this.$slidesRoot.on("mousedown touchstart", this.handleDragStart);
            var i = function (e) {
                t.shouldPreventDefault && e.preventDefault()
            };
            this.$slidesRoot.on("click", "a", i), this.$slidesRoot.on("touchmove", i), s.on("touchmove", i)
        }, t.prototype.getDelta = function (t) {
            return ((t.pageX || t.originalEvent.touches[0].pageX) - this.dragStartClickPosition) / this.width
        }, t.prototype.start = function () {
            var t = this;
            this.intervalId = setInterval(function () {
                t.slideTo(1)
            }, this.options.interval)
        }, t.prototype.stop = function () {
            clearInterval(this.intervalId), this.intervalId = null
        }, t.prototype.normalizeIndex = function (t) {
            return t %= this.totalCount, t >= 0 ? t : t + this.totalCount
        }, t.prototype.fadeTo = function (t) {
            var e = this, n = this.$slidesRoot;
            n.fadeOut(this.options.fadeSpeed, function () {
                e.setSlide(t), n.fadeIn(e.options.fadeSpeed)
            })
        }, t.prototype.setSlide = function (t, e) {
            void 0 === e && (e = !0);
            var n = this.totalCount < 3 ? e ? -1 : 1 : null;
            t = this.normalizeIndex(t);
            var i = this, o = i.$slides, s = i.$slidesRoot;
            s.empty();
            for (var a = -1; a <= 1; a++)a === n ? s.append(o.eq(this.normalizeIndex(t + a)).clone()) : s.append(o.eq(this.normalizeIndex(t + a)));
            s.css("left", "-100%"), this.toggleDot(t), this.slideIndex = t
        }, t.prototype.slideTo = function (t) {
            var e = this;
            this.isAnimating = !0;
            var n = this.normalizeIndex(this.slideIndex + t);
            this.$slidesRoot.stop(!0, !0).animate({left: 100 * -(t + 1) + "%"}, this.options.animateSpeed, function () {
                e.setSlide(n, t > 0), e.isAnimating = !1
            })
        }, t.prototype.slideStop = function () {
            this.$slidesRoot.stop(!0, !1), this.isAnimating = !1
        }, t.prototype.toggleDot = function (t) {
            this.$dotsList.find(".active").removeClass("active"), this.$dotsList.find(".dot").eq(t).addClass("active")
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return s
    });
    var i = n(0), o = n(36), s = function () {
        function t(t, e) {
            var s = this;
            if (this.isOpen = !1, this.isLoading = !1, this.onSetValue = n.i(i.a)(), this.onPickValue = n.i(i.a)(), this.onToggle = n.i(i.a)(), this.onBeforeLoad = n.i(i.a)(), this.onAfterLoad = n.i(i.a)(), this.cursorIndex = -1, this.wrappedList = [], this.isDisabled = !1, this.isActiveFor = function (t) {
                    var e = s.options.itemToString, n = e(t);
                    return function (t) {
                        return n === e(t)
                    }
                }, this.keydownHandler = function (t) {
                    if (!s.isDisabled) {
                        var e = t.keyCode, n = t.shiftKey, i = !0;
                        38 === e ? s._moveCursor(-1) : 40 === e ? s._moveCursor(1) : 33 === e ? s._moveCursor(-10) : 34 === e ? s._moveCursor(10) : 36 !== e || n ? 35 !== e || n ? 9 === e ? (i = !1, s.toggle(!1)) : 13 === e ? (s.setValueFromCursor(), i = s.isOpen, s.toggle(!1)) : 27 === e ? (s.value && s.setValue(s.value), s.toggle(!1)) : i = !1 : s._setCursor(s.wrappedList.length - 1) : s._setCursor(0), i && t.preventDefault()
                    }
                }, this.inputHandler = function (t) {
                    if (!s.isDisabled) {
                        var e = s.$input.val();
                        s.lastInputValue !== e && (s.lastInputValue = e, s._inputHandler(e), s.isLoading || (s.isLoading = !0, s.onBeforeLoad.emit(e)))
                    }
                }, this.handleValueAndList = function (t) {
                    s.options.getList && Promise.resolve(s.options.getList(t)).then(function (e) {
                        s.setComboboxList(e), s.handleValue(t), s.isLoading = !1, s.onAfterLoad.emit({
                            input: t,
                            response: e
                        })
                    })
                }, this.handleValue = function (t) {
                    if (s.options.autoSearch && t) {
                        var e = s.findByInput(t);
                        s._setCursor(s.wrappedList.indexOf(e))
                    }
                    s.toggle(!0)
                }, this.$input = $(t), !this.$input.length);
            var a = e.$popdown || this.$input.siblings(".combobox-popdown");
            a.length || (a = $('<div class="combobox-popdown" style="display: none;"><ul class="combobox-list"></ul></div>').insertAfter(this.$input)), this.$list = e.$list || a.find(".combobox-list"), this.$list.length || (this.$list = $('<ul class="combobox-list"></ul>').appendTo(a)), this.$popdown = a, this.options = this.getDefaultOptions(e), this.isInput = this.$input.is("input"), this._setValue(e.value), this.options.list && this.setComboboxList(this.options.list), this.options.getList ? this._inputHandler = this.options.threshold ? n.i(o.a)(this.handleValueAndList, this.options.threshold) : this.handleValueAndList : this._inputHandler = this.handleValue, this.addHandlers()
        }

        return t._defaultPriorityFn = function (t) {
            return function (e, n) {
                var i = t(e).toLowerCase().indexOf(n.toLowerCase());
                return i < 0 ? Infinity : i
            }
        }, t.prototype.setComboboxList = function (t) {
            this.wrappedList = t.map(function (t) {
                return {value: t}
            }), this.cursorIndex = -1, t.length || this.toggle(!1), this.options.checkSingle && this.$input.toggleClass("-is-single", 1 === t.length), this.drawList(this.wrappedList)
        }, t.prototype.getComboboxList = function () {
            return this.wrappedList.map(function (t) {
                return t.value
            })
        }, t.prototype._setValue = function (t) {
            if (!this.options.onlyFromList || this.isValueInList(t)) {
                null == t && "undefined" != typeof this.options.emptyValue && (t = this.options.emptyValue);
                var e = this.options.valueToTitle(t);
                this.isInput ? this.$input.val(e) : e ? this.$input.html(e) : this.$input.html(this.$input.data("placeholder")), this.lastInputValue = e, this.value = t, this.redrawList()
            }
        }, t.prototype.setValue = function (t) {
            this._setValue(t), this.onSetValue.emit(this.getValue())
        }, t.prototype.getValue = function () {
            return this.value
        }, t.prototype.toggle = function (t) {
            t === undefined && (t = !this.isOpen), t && !this.wrappedList.length || t === this.isOpen || (this.isOpen = t, this.$popdown.toggle(t), this.onToggle.emit(t), t && this._scrollToCursor())
        }, t.prototype.addHandlersForInput = function () {
            var t = this;
            this.$input.on("keydown", this.keydownHandler), this.$input.on("keyup input", this.inputHandler), this.options.autoSelect && this.$input.on("focus", function () {
                setTimeout(function () {
                    return t.$input.select()
                })
            }), this.options.restoreOnBlur && this.$input.on("blur", function () {
                t.options.resetEmptyOnBlur && !t.$input.val() && t.setValue(null);
                var e = t.options.valueToTitle(t.value);
                t.$input.val(e)
            })
        }, t.prototype.addHandlersForButton = function () {
            var t = this;
            this.onToggle(function (e) {
                $(document).off("keydown", t.keydownHandler), e && $(document).on("keydown", t.keydownHandler)
            })
        }, t.prototype.addHandlers = function () {
            var t = this;
            this.isInput ? this.addHandlersForInput() : this.addHandlersForButton();
            var e = this.$input, n = this.$popdown, i = !1, o = !1;
            e.on("focus", function () {
                o || t.toggle(!0)
            }), e.on("blur", function () {
                i || t.toggle(!1)
            }), n.on("mousedown", function () {
                i = !0, $("body").one("mouseup mouseleave", function () {
                    i = !1
                })
            }), $("body").on("click", function (i) {
                t.isOpen && e[0] !== i.target && n[0] !== i.target && !$.contains(n[0], i.target) && t.toggle(!1)
            }), e.on("mousedown", function () {
                o = !0, t.toggle(), $("body").one("mouseup mouseleave", function () {
                    o = !1
                })
            })
        }, t.prototype.findByInput = function (t) {
            var e, n = null, i = this.options;
            return this.wrappedList.forEach(function (o) {
                var s = i.priorityFn(o.value, t);
                (!n || e > s) && (e = s, n = o)
            }), n
        }, t.prototype._setCursor = function (t) {
            if (this.cursorIndex !== t) {
                var e = this.wrappedList[t];
                this.cursorIndex = e ? t : -1, this.$list.find("li.cursor").removeClass("cursor"), e && (e.$element.addClass("cursor"), this._scrollToCursor())
            }
        }, t.prototype._moveCursor = function (t) {
            this.isOpen || (this.toggle(!0), t = 0), this.cursorIndex < 0 && (t = 0);
            var e = this.wrappedList.length, n = Math.min(e - 1, Math.max(0, this.cursorIndex + t));
            this._setCursor(n)
        }, t.prototype._scrollToCursor = function () {
            if (!(this.cursorIndex < 0)) {
                var t = this.wrappedList[this.cursorIndex];
                if (t) {
                    var e = t.$element, n = this.$popdown, i = n.scrollTop(),
                        o = e.position().top - parseInt(n.css("padding-top"), 10),
                        s = n.height() - e.position().top - e.outerHeight() + parseInt(n.css("padding-top"), 10);
                    o < 0 ? n.scrollTop(i + o) : s < 0 && n.scrollTop(i - s)
                }
            }
        }, t
    }();
    s.defaultOptions = {
        threshold: 0,
        restoreOnBlur: !0,
        resetEmptyOnBlur: !0,
        autoSearch: !1,
        autoSelect: !0,
        onlyFromList: !1,
        checkSingle: !1,
        itemToString: function (t) {
            return t
        }
    }
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
            var o = n[i], s = Object.getOwnPropertyDescriptor(e, o);
            s && s.configurable && t[o] === undefined && Object.defineProperty(t, o, s)
        }
        return t
    }

    n.d(e, "a", function () {
        return r
    });
    var o = n(27), s = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, a = this && this.__extends || function () {
            var t = Object.setPrototypeOf || s({}, []) instanceof Array && function (t, e) {
                    i(t, e)
                } || function (t, e) {
                    for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n])
                };
            return function (e, n) {
                function i() {
                    this.constructor = e
                }

                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(), r = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return a(e, t), e.prototype.getDefaultOptions = function (t) {
            var e = t.itemToString || o.a.defaultOptions.itemToString;
            return s({}, o.a.defaultOptions, {valueToTitle: e, itemToHTML: e, priorityFn: o.a._defaultPriorityFn(e)}, t)
        }, e.prototype.setValueFromCursor = function () {
            if (this.cursorIndex >= 0) {
                var t = this.wrappedList[this.cursorIndex];
                this.setValue(t.value)
            }
        }, e.prototype.drawList = function (t) {
            for (var e = this, n = $(document.createDocumentFragment()), i = this.isActiveFor(this.value), o = this, s = 0; s < t.length; s++)!function (s) {
                var a = t[s], r = a.value, l = i(r),
                    u = $("<li" + (l ? ' class="selected"' : "") + ">" + o.options.itemToHTML(r) + "</li>");
                n.append(u), a.$element = u, u.on("click", function () {
                    e.setValue(r), e.onPickValue.emit(r), e.toggle(!1)
                })
            }(s);
            this.$list.html(n)
        }, e.prototype.redrawList = function () {
            var t = this.value;
            this.$list.find("li.selected").removeClass("selected");
            var e = this.isActiveFor(t), n = this.wrappedList.find(function (t) {
                return e(t.value)
            });
            this.cursorIndex = this.wrappedList.indexOf(n), n && n.$element.addClass("selected")
        }, e.prototype.isValueInList = function (t) {
            var e = this.options.itemToString, n = e(t);
            return this.wrappedList.some(function (t) {
                return n === e(t.value)
            })
        }, e
    }(o.a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return r
    });
    var i = n(1), o = n(0), s = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, a = [37, 39, 38, 40, 33, 34, 36, 35, 9, 13, 27], r = function () {
        function t(t, e) {
            var i = this;
            this.onSetValue = n.i(o.a)(), this.value = "", this._caret = -1, this.onInput = function (t) {
                i._caret = -1;
                var e = i.$input.val();
                e !== i.value && i.setValue(e)
            }, this.onKeyUp = function (t) {
                if (!(i._caret < 0)) {
                    var e = t.keyCode, n = t.ctrlKey;
                    a.includes(e) || n || i._caret !== i._getCaret() && (i._setCaret(i._caret), i._caret = -1)
                }
            }, this._drawTitle = function () {
                var t = i.value, e = i.$input[0] === document.activeElement, n = -1;
                e && (n = i._getCaret());
                var o = !1;
                if (!e && i.options.valueOnBlurFn) {
                    var s = i.options.valueOnBlurFn(t);
                    "string" == typeof s && (t = s, o = !0)
                }
                var a = i._mask;
                o || (t = t.replace(/[^\d]/gi, ""), t.length > 2 && (t = t.substring(0, 2) + "." + t.substring(2)), t.length > 5 && (t = t.substring(0, 5) + "." + t.substring(5)), t.length > a.length && (t = t.substring(0, a.length)), i.value.length < t.length && n === i.value.length && (n = t.length), i.value = t);
                var r = "";
                t || !i.options.maskOnEmptyBlur || e ? o || (r = t + a.substring(t.length)) : r = i.options.maskOnEmptyBlur, i.$fieldShadow.val(r), i.$input.val(t), i._caret = n, e && n >= 0 && i._setCaret(n)
            }, this.options = s({
                maskOnEmptyBlur: "",
                value: null,
                mask: "дд.мм.гггг",
                valueOnBlurFn: undefined
            }, e), this._mask = this.options.mask, this.$input = $(t), this.$input.attr({maxlength: 10}).css({
                position: "relative",
                "z-index": "1"
            }), this.$fieldShadow = $('<input type="text" />').attr({
                "class": this.$input.attr("class"),
                readonly: "readonly",
                value: this.$input.val(),
                maxlength: 10,
                tabIndex: -1
            }).addClass("mask-tip").css({
                position: "absolute",
                "z-index": "0"
            }).insertBefore(this.$input), this.$input.removeClass("mask-tip").css({
                boxShadow: "none",
                background: "transparent",
                borderColor: "transparent",
                "float": "none"
            }), this.$input.val() || this.$fieldShadow.val(this._mask), null != this.options.value ? this.setValue(this.options.value) : this.value = this.$input.val(), this.addHandlers()
        }

        return t.prototype.setValue = function (t) {
            t = t || "", this.value = t, this._drawTitle(), this.onSetValue.emit(this.value)
        }, t.prototype.getValue = function () {
            return this.value
        }, t.prototype.setDate = function (t) {
            var e = n.i(i.c)(t);
            this.$input.val(e)
        }, t.prototype.getDate = function () {
            var t = this.getValue();
            return t.length === this._mask.length ? n.i(i.f)(t) : null
        }, t.prototype.addHandlers = function () {
            var t = this;
            this.$input.on("input paste", this.onInput), this.$input.on("keyup", this.onKeyUp), this.$fieldShadow.on("click focus", function (e) {
                t.$input.focus()
            }), (this.options.maskOnEmptyBlur || this.options.valueOnBlurFn) && (this.$input.on("focus blur", this._drawTitle), this._drawTitle())
        }, t.prototype._getCaret = function () {
            var t = this.$input.get(0);
            if (null != t.selectionStart)return t.selectionStart;
            if (document.selection) {
                t.focus();
                var e = document.selection.createRange();
                if (null == e)return -1;
                var n = t.createTextRange(), i = n.duplicate();
                return n.moveToBookmark(e.getBookmark()), i.setEndPoint("EndToStart", n), i.text.length
            }
            return -1
        }, t.prototype._setCaret = function (t) {
            var e = this.$input.get(0);
            if (e)if (null != e.selectionStart) e.selectionStart = e.selectionEnd = t || 0; else if (e.setSelectionRange) e.setSelectionRange(t, t); else if (e.createTextRange) {
                var n = e.createTextRange();
                n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
            }
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        for (var i = $(document.createTextNode("например: ")), o = 0; o < t.length; o++)!function (o) {
            var s = t[o], a = $('<span class="u-example">' + e(s) + "</span>");
            o && (i = i.add(document.createTextNode(", "))), i = i.add(a), a.on("click", function () {
                n(s)
            })
        }(o);
        return i
    }

    e.b = i;
    var o = n(32);
    n.d(e, "a", function () {
        return o.a
    });
    var s = n(63);
    n.n(s)
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        var i = t.find("." + e);
        return i.length ? i : $(n || '<div class="' + e + '"></div>').appendTo(t)
    }

    function o(t, e) {
        return new p(t, e)
    }

    e.a = o;
    var s = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }, a = "u-control", r = "u-input", l = "u-error-message", u = "u-icon", c = "u-icon-toggle", d = "u-icon-clear",
        h = "u-tip", p = function () {
            function t(t, e) {
                var n = this;
                this.options = s({
                    iconToggle: !1, iconClear: !1, showLoader: !1, isEmptyFn: function (t) {
                        return null === t
                    }, tipTemplate: undefined
                }, e), e = this.options;
                var o = $(t), p = o.find("." + a), f = p.find("." + r);
                this.$root = o, f.length && (this.$input = f), this.$errorMessage = i(p, l), e.iconToggle && (this.$iconToggle = i(p, c, '<div class="' + u + " " + c + ' -default"></div>')), e.iconClear && (this.$iconClear = i(p, d, '<div class="' + u + " " + d + ' -default"></div>')), e.tipTemplate && (this.$tip = i(p, h)), this.$input && this.$input.on("focus blur", function (t) {
                    n._onFocus("focus" === t.type)
                })
            }

            return t.prototype.setOpen = function (t) {
                this.$root.toggleClass("-is-open", !!t)
            }, t.prototype.onValue = function (t) {
                var e = this.options, n = this.$root, i = !!e.isEmptyFn(t), o = e.iconToggle || e.iconClear && i;
                o || (this._hasIcon = "boolean" == typeof this._hasIcon ? this._hasIcon : n.find("." + u).length > 0, o = this._hasIcon), n.toggleClass("-is-empty", i).toggleClass("-has-icon", o), this._value = t, this._onChange()
            }, t.prototype._onFocus = function (t) {
                this.$root.toggleClass("-has-focus", t), t && this.$input.select(), this._isFocus = t, this._onChange()
            }, t.prototype._onChange = function () {
                var t = this.options;
                this.$tip && t.tipTemplate && this.$tip.html(t.tipTemplate(this._value, !!this._isFocus))
            }, t.prototype.setDisabled = function (t) {
                t = !!t, this.$root.toggleClass("-disabled", t), this.$input && this.$input.prop("disabled", t)
            }, t.prototype.getDisabled = function () {
                return !!this.$input && this.$input.prop("disabled")
            }, t.prototype.setError = function (t) {
                this.$root.toggleClass("-has-error", !!t), this.$errorMessage.html(t)
            }, t.prototype.setLoading = function (t) {
                this.$root.toggleClass("-is-loading", t)
            }, t
        }()
}, function (t, e, n) {
    "use strict";
    var i = n(31);
    n.d(e, "a", function () {
        return i.a
    });
    var o = n(64);
    n.n(o)
}, function (t, e, n) {
    "use strict";
    function i() {
    }

    function o(t, e, n) {
        if (!e)return Promise.resolve(null);
        n = n || "Submit";
        var i = e.patterns && (e.patterns[n] || "Submit" !== n && e.patterns.Typing), o = "";
        return (null === t || t === undefined || !1 === t || "string" == typeof t && !t.length) && e.required && "Submit" === n ? o = "Empty" : "string" == typeof t && (e.required && e.required > 1 && t.length < e.required && "Submit" === n ? o = "MinLength" : e.maxlength && t.length > e.maxlength ? o = "LengthExceeded" : i && !i.test(t) && (o = "Submit" === n ? "Incorrect" : "IncorrectOnTyping")), o ? Promise.resolve({
            code: o,
            description: e.messages[o]
        }) : e.func ? Promise.resolve(e.func(t, n)).then(function (t) {
            return t ? "string" == typeof t ? {code: t, description: e.messages[t]} : t : null
        }) : Promise.resolve(null)
    }

    n.d(e, "a", function () {
        return u
    });
    var s = n(0), a = {description: "", code: "_SkipValidation"}, r = {description: "", code: "_Unverified"},
        l = {$root: $(), onValue: i, setError: i, setOpen: i}, u = function () {
            function t(t) {
                var e = t.theme, i = t.control, o = t.validation, a = t.getValueCallback;
                this.onFieldChangeUnverified = n.i(s.a)(), this.onFieldChange = n.i(s.a)(), this.onFieldValidationError = n.i(s.a)(), this._defaultCheckType = "Typing", this._value = null, this._validatingByCheckType = {}, this.theme = e || l, this.control = i, this._validation = o, this.getValueCallback = a, this._initField(), this._checkField()
            }

            return t.prototype.getValue = function () {
                return this._value && this.getValueCallback ? this.getValueCallback(this._value) : this._value
            }, t.prototype.getValueUnverified = function () {
                return this._valueUnverified && this.getValueCallback ? this.getValueCallback(this._valueUnverified) : this._valueUnverified
            }, t.prototype.setValue = function (t) {
                this.control.setValue(t)
            }, t.prototype.updateField = function () {
                var t = this, e = this._valueUnverified;
                this.onFieldChangeUnverified.emit(e), this.validateField().then(function (n) {
                    n ? n !== a && t.onFieldValidationError.emit(n) : t.onFieldChange.emit(e)
                })
            }, t.prototype.setDefaultCheckType = function (t) {
                this._defaultCheckType !== t && (this._defaultCheckType = t, this._value = null)
            }, t.prototype.validateField = function (t) {
                var e = this;
                return this._checkField(t).then(function (t) {
                    return t === a ? t : (e.theme.setError(t ? t.description : ""), t)
                })
            }, t.prototype.isLastCheckValid = function (t) {
                return t = t || this._defaultCheckType, !this._validatingByCheckType[t]
            }, t.prototype.getValidationOptions = function () {
                return this._validation
            }, t.prototype.setValidationOptions = function (t) {
                this._validation = t
            }, t.prototype._checkFieldNoSkipped = function (t) {
                var e = this;
                return void 0 === t && (t = this._defaultCheckType), this._checkField(t).then(function (n) {
                    return n === a ? e._validatingByCheckType[t] : n
                })
            }, t.prototype._checkField = function (t) {
                var e = this;
                void 0 === t && (t = this._defaultCheckType);
                var n = this._validation, i = this._valueUnverified, s = o(i, n, t).then(function (n) {
                    var o = e._validatingByCheckType[t];
                    return o === r ? e._checkField(t) : o !== s ? a : (e._validatingByCheckType[t] = n || null, e._value = n ? null : i, n)
                });
                return this._validatingByCheckType[t] = s, s
            }, t.prototype._initField = function () {
                var t = this, e = this.theme, n = this.control;
                if (this._valueUnverified = n.getValue(), n.onSetValue(function (n) {
                        t._valueUnverified = n, t.updateField(), e.onValue(n)
                    }), e.onValue(n.getValue()), e.$iconToggle && n.toggle && (e.$iconToggle.on("mousedown", function (t) {
                        n.isOpen && t.preventDefault()
                    }), e.$iconToggle.on("click", function (t) {
                        n.toggle && (n.isOpen ? n.toggle(!1) : window.setTimeout(function () {
                            n.toggle && n.toggle(!0), e.$input && e.$input.focus()
                        }, 0))
                    })), e.$iconClear && e.$iconClear.on("click", function (t) {
                        n.setValue(null), e.$input && e.$input.focus()
                    }), e.$examples && e.$examples.on("click", function () {
                        var t = $(this);
                        n.setValue(t.data("value"))
                    }), e.options && e.options.showLoader && e.setLoading && n.onBeforeLoad && n.onAfterLoad) {
                    var i, o = function (t) {
                        return e.setLoading(t)
                    };
                    n.onBeforeLoad(function () {
                        clearTimeout(i), i = setTimeout(o, 100, !0)
                    }), n.onAfterLoad(function () {
                        clearTimeout(i), o(!1)
                    })
                }
                if (n.onToggle) {
                    n.onToggle(function (t) {
                        n.isOpen = t = !!t, e.setOpen(t)
                    });
                    var s = n.isOpen = !!n.isOpen;
                    e.setOpen(s)
                }
            }, t
        }()
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        return {error: n, name: e, field: t}
    }

    function o(t) {
        return t instanceof l.a
    }

    function s(t, e, n, i) {
        var o;
        if (t(n)) o = e(n, i || ""); else if (Array.isArray(n)) {
            var a = i ? i + "." : "";
            o = [];
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                o[r] = s(t, e, l, a + r)
            }
        } else {
            if (null === n || "object" !== (void 0 === n ? "undefined" : u(n)))return n;
            var a = i ? i + "." : "";
            o = {};
            for (var c in n)if (Object.prototype.hasOwnProperty.call(n, c)) {
                var l = n[c];
                o[c] = s(t, e, l, a + c)
            }
        }
        return o
    }

    function a(t, e) {
        return e && e.length && t ? 1 === e.length ? t[e[0]] : a(t[e[0]], e.slice(1)) : null
    }

    n.d(e, "b", function () {
        return d
    });
    var r = n(0), l = n(33);
    n.d(e, "a", function () {
        return l.a
    });
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, c = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, d = function () {
        function t(t, e) {
            var i = this;
            this.onChangeUnverified = n.i(r.a)(), this.onChange = n.i(r.a)(), this.onValidationError = n.i(r.a)(), this.emitterOffCallbacks = [], this.fieldChangeUnverifiedCallback = function () {
                i.onChangeUnverified.emit(i.getDataUnverified())
            }, this.fieldChangeCallback = function () {
                i.onChange.emit(i.getData())
            }, this._options = c({checkTypeOnChange: "Typing"}, e), this.setFields(t)
        }

        return t.prototype.getData = function () {
            return this.mapFields(function (t) {
                return t.getValue()
            })
        }, t.prototype.setData = function (t) {
            this.mapFields(function (e, n) {
                var i = a(t, n.split("."));
                null != i && e.setValue(i)
            })
        }, t.prototype.resetData = function () {
            this.mapFields(function (t) {
                t.setValue(null)
            })
        }, t.prototype.getDataUnverified = function () {
            return this.mapFields(function (t) {
                return t.getValueUnverified()
            })
        }, t.prototype.setCheckTypeOnChange = function (t) {
            this._options.checkTypeOnChange = t, this.mapFields(function (e) {
                e.setDefaultCheckType(t)
            })
        }, t.prototype.setFields = function (t) {
            var e = this;
            this.emitterOffCallbacks.forEach(function (t) {
                return t()
            }), this.uFields = t, this.emitterOffCallbacks = [], this.mapFields(function (t, n) {
                t.setDefaultCheckType(e._options.checkTypeOnChange), t.onFieldChangeUnverified(e.fieldChangeUnverifiedCallback), e.emitterOffCallbacks.push(function () {
                    return t.onFieldChangeUnverified.off(e.fieldChangeUnverifiedCallback)
                }), t.onFieldChange(e.fieldChangeCallback), e.emitterOffCallbacks.push(function () {
                    return t.onFieldChange.off(e.fieldChangeCallback)
                });
                var o = function (o) {
                    e.onValidationError.emit(i(t, n, o))
                };
                t.onFieldValidationError(o), e.emitterOffCallbacks.push(function () {
                    return t.onFieldValidationError.off(o)
                })
            }), this.fieldChangeUnverifiedCallback(), this.fieldChangeCallback()
        }, t.prototype.isAllValid = function (t) {
            var e = !0;
            return this.mapFields(function (n) {
                e && (e = n.isLastCheckValid(t))
            }), e
        }, t.prototype.mapFields = function (t) {
            return s(o, t, this.uFields)
        }, t.prototype.validateForm = function (t) {
            return this._checkForm(t, function (t) {
                t.field.theme.setError(t.error ? t.error.description : "")
            }).then(function (t) {
                return t.filter(function (t) {
                    return t.error
                })
            })
        }, t.prototype.checkForm = function (t) {
            return this._checkForm(t, function (t) {
                return t
            }).then(function (t) {
                return t.filter(function (t) {
                    return t.error
                })
            })
        }, t.prototype._checkForm = function (t, e) {
            t = t || this._options.checkTypeOnChange;
            var n = [];
            return this.mapFields(function (o, s) {
                var a = o._checkFieldNoSkipped(t).then(function (t) {
                    return i(o, s, t)
                });
                a.then(e), n.push(a)
            }), Promise.all(n)
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    function i(t) {
        for (var e = t.length; 0 !== e;) {
            var n = Math.floor(Math.random() * e);
            e--;
            var i = t[e];
            t[e] = t[n], t[n] = i
        }
        return t
    }

    e.a = i
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        var n;
        return function () {
            for (var i = this, o = [], s = 0; s < arguments.length; s++)o[s] = arguments[s];
            clearTimeout(n), n = setTimeout(function () {
                n = null, t.apply(i, o)
            }, e)
        }
    }

    e.a = i;
    Object.assign
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        var i = [2, 0, 1, 1, 1, 2], o = "";
        return "string" == typeof n ? o = t + n : n && (o = t + " "), t = parseInt(t, 10) || 0, o + e[t % 100 > 4 && t % 100 < 20 ? 2 : i[Math.min(t % 10, 5)]]
    }

    e.a = i
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}]));
//# sourceMappingURL=flight_index.js.map