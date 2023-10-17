var searchPanel = $("#searchPanel"),
    loginPanel = $(".user-panel .loginPanel"),
    loggedInPanel = $(".user-panel .loggedInPanel"),
    loggedInMenu = $(".user-panel .loggedInMenu"),
    loginPanel_pc = $(".header .loginPanel"),
    loggedInPanel_pc = $(".header .loggedInPanel"),
    loggedInMenu_pc = $(".header .loggedInMenu"),
    wrap = $("html"),
    activeSelect,
    retiredSelect;
(function(n) {
    n(".header .menu-login").on("click", function(t) {
        t.stopPropagation();
        loginPanel_pc.is(":visible") ? (loginPanel_pc.slideUp(), n(".header .menu-login a").attr("aria-expanded", !1)) : (loginPanel_pc.slideDown(), n(".header .menu-login a").attr("aria-expanded", !0))
    });
    loginPanel_pc.click(function(n) {
        n.stopPropagation()
    });
    n("#logout").on("click", function() {
        n("#login-out-form").submit();
        n(".loginPanel").show()
    });
    n("#mobile-logout").on("click", function() {
        n("#mobile-login-out-form").submit();
        n(".loginPanel").show()
    });
    n(".header .loginIcon").on("click", function() {
        loggedInMenu_pc.is(":visible") ? (loggedInMenu_pc.slideUp(), n(this).removeClass("expand")) : (loggedInMenu_pc.slideDown(), n(this).addClass("expand"));
        n(this).attr("aria-expanded", n(this).hasClass("expand"))
    });
    loggedInPanel_pc.click(function(n) {
        n.stopPropagation()
    });
    n(document).on("click touchend", function(t) {
        loginPanel_pc.is(t.target) || n(t.target).parents(".header .loginPanel").length !== 0 || loginPanel_pc.slideUp()
    });
    n(document).on("click touchend", function(t) {
        loggedInPanel_pc.is(t.target) || n(t.target).parents(".header .loggedInMenu").length !== 0 || (loggedInMenu_pc.slideUp(), n(".header .loginIcon").removeClass("expand"))
    });
    loginPanel_pc.keydown(function(t) {
        var i = t.keyCode || t.which;
        if (t.shiftKey)
            n("#smenu a").on("focus", function() {
                loginPanel_pc.slideUp()
            });
        if (i === 9)
            n(".menu-reg a").on("focus", function() {
                loginPanel_pc.slideUp()
            })
    });
    loggedInMenu_pc.keydown(function(t) {
        var i = t.keyCode || t.which;
        if (t.shiftKey)
            n("#smenu a").on("focus", function() {
                loggedInMenu_pc.slideUp();
                n(".header .loginIcon").removeClass("expand")
            });
        if (i === 9)
            n(".nav a").on("focus", function() {
                loggedInMenu_pc.slideUp();
                n(".header .loginIcon").removeClass("expand")
            })
    });
    n(".search").on("click", function() {
        n(".search").each(function() {
            n(this).toggleClass("active");
            n(this).attr("aria-expanded", n(this).hasClass("active"))
        });
        searchPanel.slideToggle();
        n(".search").focus();
        loginPanel.is(":visible") ? (loginPanel.hide(), n("#user").removeClass("open")) : loggedInMenu.is(":visible") && (loggedInMenu.hide(), n("#user").removeClass("open"))
    });
    n(".searchPanel .btn-close").on("click", function() {
        n("form#header-tools .searchField").val(n("form#header-tools .searchField").data("reset-text"))
    });
    n("#user").click(function() {
        loginPanel.slideToggle();
        n(this).toggleClass("open");
        n(this).attr("aria-expanded", n(this).hasClass("open"));
        n("#user").focus();
        searchPanel.is(":visible") && searchPanel.hide();
        loggedInPanel.is(":visible") && (loginPanel.hide(), loggedInMenu.slideToggle())
    });
    n("#nav-sp .goLogIn").click(function() {
        loggedInPanel.show();
        n("#user").removeClass("open");
        loginPanel.slideUp()
    });
    loggedInPanel.click(function() {
        mobileUserMenu()
    })
})(jQuery);
var mobileUserMenu = function() {
        loggedInMenu.slideToggle();
        loggedInPanel.parent().siblings("#user").toggleClass("open");
        loggedInPanel.attr("aria-expanded", loggedInPanel.parent().siblings("#user").hasClass("open"));
        searchPanel.is(":visible") && searchPanel.hide()
    },
    $menuLeft = $(".pushmenu-left"),
    $nav_list = $("#nav_list"),
    mobileMenu = function() {
        wrap.toggleClass("stick");
        var n = $(".pushmenu-push").height(),
            t = $(window).height();
        n >= t ? ($(".stick").children("body").css("height", "auto"), $(".pushmenu").height(n)) : $(".pushmenu").height(t);
        $(".pushmenu-push").toggleClass("pushmenu-push-toright");
        $menuLeft.toggleClass("pushmenu-open");
        $nav_list.hasClass("open") ? $(".pushmenu-left a").each(function() {
            $(this).css("display", "block");
            $(this).attr("aria-hidden", "false")
        }) : $(".pushmenu-left a").each(function() {
            $(this).css("display", "none");
            $(this).attr("aria-hidden", "true")
        });
        $("#user").focus(function() {
            $(".pushmenu-push").removeClass("pushmenu-push-toright");
            $("html").removeClass("stick");
            $menuLeft.removeClass("pushmenu-open");
            $nav_list.removeClass("open");
            $(".pushmenu-left a").each(function() {
                $(this).css("display", "none");
                $(this).attr("aria-hidden", "true")
            })
        });
        (searchPanel.is(":visible") || loginPanel.is(":visible") || loggedInMenu.is(":visible")) && (searchPanel.hide(), loginPanel.hide(), loggedInMenu.hide(), $("#user").removeClass("open"))
    },
    highlightNav = function(n) {
        var t = window.location.href;
        $("#" + n + " li a").each(function() {
            var n = $(this).attr("href"),
                i = getParam(n, "event") === getParam(t, "event");
            i && $(this).addClass("active")
        })
    },
    getParam = function(n, t) {
        return decodeURI((RegExp(t + "=(.+?)(&|$)").exec(n) || [, null])[1])
    };
$(document).ready(function() {
    $(".pushmenu-left a").each(function() {
        $(this).css("display", "none");
        $(this).attr("aria-hidden", "true")
    });
    document.body.addEventListener("touchstart", function() {}, !1);
    $nav_list.click(function() {
        $(this).toggleClass("open");
        $(this).attr("aria-expanded", $(this).hasClass("open"));
        $nav_list.focus();
        mobileMenu()
    });
    $nav_list.keypress(function(n) {
        n.keyCode === 13 && (n.preventDefault(), $(this).toggleClass("open"), $(this).attr("aria-expanded", $(this).hasClass("open")), wrap.toggleClass("stick"), $nav_list.focus(), mobileMenu())
    });
    $(".return").length && $(".return").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    });
    $(".panel-title").length && $(".panel-title > a").click(function(n) {
        n.preventDefault()
    });
    $("#error-message").length && window.setTimeout(function() {
        $("#error-message").focus()
    }, 1600)
});
jQuery.keyFocus = {};
jQuery.keyFocus.conf = {
    keyFocusClass: "keyboard-focus",
    mouseFocusClass: "mouse-focus",
    focusClass: "focus",
    mouseTimeout: 50
}, function(n) {
    function t() {
        n("#search-type-go").is(":checked") ? (n("#form-currentGOs").removeAttr("disabled"), n("#form-closedGOs").removeAttr("disabled")) : (n("#form-currentGOs").attr("disabled", "disabled"), n("#form-closedGOs").attr("disabled", "disabled"))
    }
    function i() {
        if (n("#search-type-go") != null) {
            t();
            n("#search-type-go").on("click", function() {
                t();
                n("#search-type-go").focus()
            });
            n("#search-type-fo").on("click", function() {
                t();
                n("#search-type-fo").focus()
            })
        }
    }
    n(document).ready(function() {
        n("body").trackFocus();
        n("#search-type-go") != null && i()
    });
    n.fn.trackFocus = function() {
        n(this).data("last-device-used", "");
        n(this).data("last-foused-id", "");
        n(this).bind("mousedown", function() {
            n(this).data("last-device-used", "mouse");
            n(this).data("last-device-used-when", (new Date).getTime())
        }).bind("keydown", function() {
            n(this).data("last-device-used", "keyboard")
        }).bind("focusin", function(t) {
            n(this).data("last-foused-id") != n(t.target).attr("id") && (n(this).data("last-device-used") != "mouse" ? n(t.target).addClass(n.keyFocus.conf.keyFocusClass) : n(t.target).addClass(n.keyFocus.conf.mouseFocusClass), n(t.target).addClass(n.keyFocus.conf.focusClass), n(this).data("last-foused-id", n(t.target).attr("id")))
        }).bind("focusout", function(t) {
            n("." + n.keyFocus.conf.keyFocusClass + ", ." + n.keyFocus.conf.mouseFocusClass).removeClass(n.keyFocus.conf.keyFocusClass + " " + n.keyFocus.conf.mouseFocusClass);
            n(t.target).removeClass(n.keyFocus.conf.focusClass);
            n(this).data("last-foused-id", "")
        })
    }
}(jQuery);
$(document).ready(function() {
    $(".inputfile").each(function() {
        var n = this,
            t = $(n).next(),
            i = t[0].innerHTML;
        if ($(n).not(":disabled"))
            $(n).on("change", function(n) {
                var r = "";
                r = this.files && this.files.length > 1 ? (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : n.target.value.split("\\").pop();
                r ? $(t).find("span").html(r) : $(t).html(i)
            })
    })
});
/*!
 * Bootstrap-select v1.9.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function(n, t) {
    typeof define == "function" && define.amd ? define(["jquery"], function(n) {
        return t(n)
    }) : typeof exports == "object" ? module.exports = t(require("jquery")) : t(jQuery)
})(this, function(n) {
    (function(n) {
        "use strict";
        function i(t) {
            return n.each([{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }], function() {
                t = t.replace(this.re, this.ch)
            }), t
        }
        function r(n) {
            var i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                r = "(?:" + Object.keys(i).join("|") + ")",
                u = new RegExp(r),
                f = new RegExp(r, "g"),
                t = n == null ? "" : "" + n;
            return u.test(t) ? t.replace(f, function(n) {
                return i[n]
            }) : t
        }
        function u(i, r) {
            var e = arguments,
                u = i,
                s = r,
                f,
                o;
            return [].shift.apply(e), o = this.each(function() {
                var o = n(this),
                    i,
                    r,
                    c,
                    h;
                if (o.is("select")) {
                    if (i = o.data("selectpicker"), r = typeof u == "object" && u, i) {
                        if (r)
                            for (h in r)
                                r.hasOwnProperty(h) && (i.options[h] = r[h])
                    } else
                        c = n.extend({}, t.DEFAULTS, n.fn.selectpicker.defaults || {}, o.data(), r), c.template = n.extend({}, t.DEFAULTS.template, n.fn.selectpicker.defaults ? n.fn.selectpicker.defaults.template : {}, o.data().template, r.template), o.data("selectpicker", i = new t(this, c, s));
                    typeof u == "string" && (f = i[u] instanceof Function ? i[u].apply(i, e) : i.options[u])
                }
            }), typeof f != "undefined" ? f : o
        }
        var t,
            f;
        String.prototype.includes || function() {
            var i = {}.toString,
                n = function() {
                    try {
                        var n = {},
                            t = Object.defineProperty,
                            i = t(n, n, n) && t
                    } catch (r) {}
                    return i
                }(),
                r = "".indexOf,
                t = function(n) {
                    var u,
                        s;
                    if (this == null)
                        throw new TypeError;
                    if (u = String(this), n && i.call(n) == "[object RegExp]")
                        throw new TypeError;
                    var f = u.length,
                        e = String(n),
                        h = e.length,
                        o = arguments.length > 1 ? arguments[1] : undefined,
                        t = o ? Number(o) : 0;
                    return (t != t && (t = 0), s = Math.min(Math.max(t, 0), f), h + s > f) ? !1 : r.call(u, e, t) != -1
                };
            n ? n(String.prototype, "includes", {
                value: t,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = t
        }();
        String.prototype.startsWith || function() {
            var n = function() {
                    try {
                        var n = {},
                            t = Object.defineProperty,
                            i = t(n, n, n) && t
                    } catch (r) {}
                    return i
                }(),
                i = {}.toString,
                t = function(n) {
                    var u,
                        f,
                        r;
                    if (this == null)
                        throw new TypeError;
                    if (u = String(this), n && i.call(n) == "[object RegExp]")
                        throw new TypeError;
                    var e = u.length,
                        o = String(n),
                        s = o.length,
                        h = arguments.length > 1 ? arguments[1] : undefined,
                        t = h ? Number(h) : 0;
                    if (t != t && (t = 0), f = Math.min(Math.max(t, 0), e), s + f > e)
                        return !1;
                    for (r = -1; ++r < s;)
                        if (u.charCodeAt(f + r) != o.charCodeAt(r))
                            return !1;
                    return !0
                };
            n ? n(String.prototype, "startsWith", {
                value: t,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = t
        }();
        Object.keys || (Object.keys = function(n, t, i) {
            i = [];
            for (t in n)
                i.hasOwnProperty.call(n, t) && i.push(t);
            return i
        });
        n.fn.triggerNative = function(n) {
            var i = this[0],
                t;
            i.dispatchEvent ? (typeof Event == "function" ? t = new Event(n, {
                bubbles: !0
            }) : (t = document.createEvent("Event"), t.initEvent(n, !0, !1)), i.dispatchEvent(t)) : (i.fireEvent && (t = document.createEventObject(), t.eventType = n, i.fireEvent("on" + n, t)), this.trigger(n))
        };
        n.expr[":"].icontains = function(t, i, r) {
            var u = n(t),
                f = (u.data("tokens") || u.text()).toUpperCase();
            return f.includes(r[3].toUpperCase())
        };
        n.expr[":"].ibegins = function(t, i, r) {
            var u = n(t),
                f = (u.data("tokens") || u.text()).toUpperCase();
            return f.startsWith(r[3].toUpperCase())
        };
        n.expr[":"].aicontains = function(t, i, r) {
            var u = n(t),
                f = (u.data("tokens") || u.data("normalizedText") || u.text()).toUpperCase();
            return f.includes(r[3].toUpperCase())
        };
        n.expr[":"].aibegins = function(t, i, r) {
            var u = n(t),
                f = (u.data("tokens") || u.data("normalizedText") || u.text()).toUpperCase();
            return f.startsWith(r[3].toUpperCase())
        };
        t = function(i, r, u) {
            u && (u.stopPropagation(), u.preventDefault());
            this.$element = n(i);
            this.$newElement = null;
            this.$button = null;
            this.$menu = null;
            this.$lis = null;
            this.options = r;
            this.options.title === null && (this.options.title = this.$element.attr("title"));
            this.val = t.prototype.val;
            this.render = t.prototype.render;
            this.refresh = t.prototype.refresh;
            this.setStyle = t.prototype.setStyle;
            this.selectAll = t.prototype.selectAll;
            this.deselectAll = t.prototype.deselectAll;
            this.destroy = t.prototype.destroy;
            this.remove = t.prototype.remove;
            this.show = t.prototype.show;
            this.hide = t.prototype.hide;
            this.init()
        };
        t.VERSION = "1.9.4";
        t.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(n) {
                return n == 1 ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(n, t) {
                return [n == 1 ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", t == 1 ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Clear Selection",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            template: {
                caret: '<span class="caret"><\/span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !0,
            dropdownAlignRight: !1
        };
        t.prototype = {
            constructor: t,
            init: function() {
                var t = this,
                    i = this.$element.attr("id"),
                    r = this.$element.attr("aria-required");
                this.liObj = {};
                this.multiple = this.$element.prop("multiple");
                this.autofocus = this.$element.prop("autofocus");
                this.$newElement = this.createView();
                this.$element.after(this.$newElement).appendTo(this.$newElement);
                this.$button = this.$newElement.children("button");
                this.$menu = this.$newElement.children(".dropdown-menu");
                this.$menuInner = this.$menu.children(".inner");
                this.$searchbox = this.$menu.find("input");
                this.$menuInner.find("li:odd").addClass("even");
                this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right");
                typeof i != "undefined" && (this.$button.attr("data-id", i), n('label[for="' + i + '"]').click(function(n) {
                    n.preventDefault()
                }));
                typeof r != "undefined" && this.$button.attr("aria-required", r);
                this.checkDisabled();
                this.clickListener();
                this.options.liveSearch && this.liveSearchListener();
                this.render();
                this.setStyle();
                this.setWidth();
                this.options.container && this.selectPosition();
                this.$menu.data("this", this);
                this.$newElement.data("this", this);
                this.options.mobile && this.mobile();
                this.$newElement.on({
                    "hide.bs.dropdown": function(n) {
                        t.$element.trigger("hide.bs.select", n)
                    },
                    "hidden.bs.dropdown": function(n) {
                        t.$element.trigger("hidden.bs.select", n)
                    },
                    "show.bs.dropdown": function(n) {
                        t.$element.trigger("show.bs.select", n)
                    },
                    "shown.bs.dropdown": function(n) {
                        t.$element.trigger("shown.bs.select", n)
                    }
                });
                if (t.$element[0].hasAttribute("required"))
                    this.$element.on("invalid", function() {
                        t.$button.addClass("bs-invalid").focus();
                        t.$element.on({
                            "focus.bs.select": function() {
                                t.$button.focus();
                                t.$element.off("focus.bs.select")
                            },
                            "shown.bs.select": function() {
                                t.$element.val(t.$element.val()).off("shown.bs.select")
                            },
                            "rendered.bs.select": function() {
                                this.validity.valid && t.$button.removeClass("bs-invalid");
                                t.$element.off("rendered.bs.select")
                            }
                        })
                    });
                setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var i = this.$element.attr("id"),
                    t = i + "-1",
                    u = this.multiple ? " show-tick" : "",
                    f = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    e = this.autofocus ? " autofocus" : "",
                    o = this.options.header ? '<div class="popover-title" tabindex="-1"><button type="button" class="close" aria-hidden="true">Done<\/button>' + this.options.header + "<\/div>" : "",
                    s = this.options.liveSearch ? '<div tabindex="-1" aria-hidden="true" class="bs-searchbox"><i class="ico-search"><\/i><label class="sr-only" for="' + t + '">input box, type text to filter items<\/label><input role="search" type="text" class="form-control" autocomplete="off" id="' + t + '"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + r(this.options.liveSearchPlaceholder) + '"') + "><\/div>" : "",
                    h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox" tabindex="0"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '<\/button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "<\/button><\/div><\/div>" : "",
                    c = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "<\/button><\/div><\/div>" : "",
                    l = '<div class="btn-group bootstrap-select show-tick' + u + f + '"><button aria-haspopup="listbox" tabindex="0" type="button" aria-describedby="SRinstructions" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"><\/span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '<\/span><\/button><div class="dropdown-menu open" tabindex="-1">' + o + s + h + '<ul class="dropdown-menu inner" tabindex="0" role="listbox" aria-multiselectable="true"><\/ul>' + c + "<\/div><\/div>";
                return n(l)
            },
            createView: function() {
                var n = this.createDropdown(),
                    t = this.createLi();
                return n.find("ul")[0].innerHTML = t, n
            },
            reloadLi: function() {
                this.destroyLi();
                var n = this.createLi();
                this.$menuInner[0].innerHTML = n
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var e = this,
                    t = [],
                    o = 0,
                    s = document.createElement("option"),
                    u = -1,
                    f = function(n, t, i, r) {
                        return '<li role="option" tabindex="0" aria-selected="false"' + (typeof i != "undefined" & "" !== i ? ' class="' + i + '"' : "") + (typeof t != "undefined" & null !== t ? ' data-original-index="' + t + '"' : "") + (typeof r != "undefined" & null !== r ? 'data-optgroup="' + r + '"' : "") + ">" + n + "<\/li>"
                    },
                    c = function(n, t, u, f) {
                        return '<a tabindex="0"' + (typeof t != "undefined" ? ' class="' + t + '"' : "") + (typeof u != "undefined" ? ' style="' + u + '"' : "") + (e.options.liveSearchNormalize ? ' data-normalized-text="' + i(r(n)) + '"' : "") + (typeof f != "undefined" || f !== null ? ' data-tokens="' + f + '"' : "") + ">" + n + '<span aria-label="checked" class="check-mark"><\/span><\/a>'
                    },
                    h;
                return this.options.title && !this.multiple && (u--, this.$element.find(".bs-title-option").length || (h = this.$element[0], s.className = "bs-title-option", s.appendChild(document.createTextNode(this.options.title)), s.value = "", h.insertBefore(s, h.firstChild), n(h.options[h.selectedIndex]).attr("selected") === undefined && (s.selected = !0))), this.$element.find("option").each(function(i) {
                    var r = n(this),
                        w;
                    if (u++, !r.hasClass("bs-title-option")) {
                        var l = this.className || "",
                            a = this.style.cssText,
                            s = r.data("content") ? r.data("content") : r.html(),
                            v = r.data("tokens") ? r.data("tokens") : null,
                            k = typeof r.data("subtext") != "undefined" ? '<small class="text-muted">' + r.data("subtext") + "<\/small>" : "",
                            h = typeof r.data("icon") != "undefined" ? '<span class="' + e.options.iconBase + " " + r.data("icon") + '"><\/span> ' : "",
                            y = this.parentNode.tagName === "OPTGROUP",
                            p = this.disabled || y && this.parentNode.disabled;
                        if (h !== "" && p && (h = "<span>" + h + "<\/span>"), e.options.hideDisabled && p && !y) {
                            u--;
                            return
                        }
                        if (r.data("content") || (s = h + '<span class="text">' + s + k + "<\/span>"), y && r.data("divider") !== !0) {
                            if (w = " " + this.parentNode.className || "", r.index() === 0) {
                                o += 1;
                                var b = this.parentNode.label,
                                    d = typeof r.parent().data("subtext") != "undefined" ? '<small class="text-muted">' + r.parent().data("subtext") + "<\/small>" : "",
                                    g = r.parent().data("icon") ? '<span class="' + e.options.iconBase + " " + r.parent().data("icon") + '"><\/span> ' : "";
                                b = g + '<span class="text">' + b + d + "<\/span>";
                                i !== 0 && t.length > 0 && (u++, t.push(f("", null, "divider", o + "div")));
                                u++;
                                t.push(f(b, null, "dropdown-header" + w, o))
                            }
                            if (e.options.hideDisabled && p) {
                                u--;
                                return
                            }
                            t.push(f(c(s, "opt " + l + w, a, v), i, "", o))
                        } else
                            r.data("divider") === !0 ? t.push(f("", i, "divider")) : r.data("hidden") === !0 ? t.push(f(c(s, l, a, v), i, "hidden is-hidden")) : (this.previousElementSibling && this.previousElementSibling.tagName === "OPTGROUP" && (u++, t.push(f("", null, "divider", o + "div"))), t.push(f(c(s, l, a, v), i)));
                        e.liObj[i] = u
                    }
                }), this.multiple || this.$element.find("option:selected").length !== 0 || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), t.join("")
            },
            findLis: function() {
                return this.$lis == null && (this.$lis = this.$menu.find("li")), this.$lis
            },
            render: function(t) {
                var i = this,
                    o,
                    r,
                    u,
                    f,
                    e,
                    s;
                t !== !1 && this.$element.find("option").each(function(n) {
                    var t = i.findLis().eq(i.liObj[n]);
                    i.setDisabled(n, this.disabled || this.parentNode.tagName === "OPTGROUP" && this.parentNode.disabled, t);
                    i.setSelected(n, this.selected, t)
                });
                this.tabIndex();
                r = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (i.options.hideDisabled && (this.disabled || this.parentNode.tagName === "OPTGROUP" && this.parentNode.disabled))
                            return;
                        var t = n(this),
                            u = t.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + t.data("icon") + '"><\/i> ' : "",
                            r;
                        return r = i.options.showSubtext && t.data("subtext") && !i.multiple ? ' <small class="text-muted">' + t.data("subtext") + "<\/small>" : "", typeof t.attr("title") != "undefined" ? t.attr("title") : t.data("content") && i.options.showContent ? t.data("content") : u + t.html() + r
                    }
                }).toArray();
                u = this.multiple ? r.join(this.options.multipleSeparator) : r[0];
                this.multiple && this.options.selectedTextFormat.indexOf("count") > -1 && (f = this.options.selectedTextFormat.split(">"), (f.length > 1 && r.length > f[1] || f.length == 1 && r.length >= 2) && (o = this.options.hideDisabled ? ", [disabled]" : "", e = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + o).length, s = typeof this.options.countSelectedText == "function" ? this.options.countSelectedText(r.length, e) : this.options.countSelectedText, u = s.replace("{0}", r.length.toString()).replace("{1}", e.toString())));
                this.multiple && r.length > 0 && (u = r.length + " selected");
                this.options.title == undefined && (this.options.title = this.$element.attr("title"));
                this.options.selectedTextFormat == "static" && (u = this.options.title);
                u || (u = typeof this.options.title != "undefined" ? this.options.title : this.options.noneSelectedText);
                this.$button.attr("title", n.trim(u.replace(/<[^>]*>?/g, "")));
                this.$button.children(".filter-option").html(u);
                this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(n, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = n ? n : this.options.style;
                t == "add" ? this.$button.addClass(i) : t == "remove" ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            },
            liHeight: function(t) {
                var y;
                if (t || this.options.size !== !1 && !this.sizeInfo) {
                    var e = document.createElement("div"),
                        r = document.createElement("div"),
                        o = document.createElement("ul"),
                        l = document.createElement("li"),
                        p = document.createElement("li"),
                        a = document.createElement("a"),
                        v = document.createElement("span"),
                        s = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        u = this.options.liveSearch ? document.createElement("div") : null,
                        h = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        c = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    v.className = "text";
                    e.className = this.$menu[0].parentNode.className + " open";
                    r.className = "dropdown-menu open";
                    o.className = "dropdown-menu inner";
                    l.className = "divider";
                    v.appendChild(document.createTextNode("Inner text"));
                    a.appendChild(v);
                    p.appendChild(a);
                    o.appendChild(p);
                    o.appendChild(l);
                    s && r.appendChild(s);
                    u && (y = document.createElement("span"), u.className = "bs-searchbox", y.className = "form-control", u.appendChild(y), r.appendChild(u));
                    h && r.appendChild(h);
                    r.appendChild(o);
                    c && r.appendChild(c);
                    e.appendChild(r);
                    document.body.appendChild(e);
                    var b = a.offsetHeight,
                        k = s ? s.offsetHeight : 0,
                        d = u ? u.offsetHeight : 0,
                        g = h ? h.offsetHeight : 0,
                        nt = c ? c.offsetHeight : 0,
                        tt = n(l).outerHeight(!0),
                        i = typeof getComputedStyle == "function" ? getComputedStyle(r) : !1,
                        f = i ? null : n(r),
                        w = parseInt(i ? i.paddingTop : f.css("paddingTop")) + parseInt(i ? i.paddingBottom : f.css("paddingBottom")) + parseInt(i ? i.borderTopWidth : f.css("borderTopWidth")) + parseInt(i ? i.borderBottomWidth : f.css("borderBottomWidth")),
                        it = w + parseInt(i ? i.marginTop : f.css("marginTop")) + parseInt(i ? i.marginBottom : f.css("marginBottom")) + 2;
                    document.body.removeChild(e);
                    this.sizeInfo = {
                        liHeight: b,
                        headerHeight: k,
                        searchHeight: d,
                        actionsHeight: g,
                        doneButtonHeight: nt,
                        dividerHeight: tt,
                        menuPadding: w,
                        menuExtras: it
                    }
                }
            },
            setSize: function() {
                var h,
                    d,
                    g;
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var i = this,
                        t = this.$menu,
                        p = this.$menuInner,
                        c = n(window),
                        nt = this.$newElement[0].offsetHeight,
                        w = this.sizeInfo.liHeight,
                        l = this.sizeInfo.headerHeight,
                        a = this.sizeInfo.searchHeight,
                        v = this.sizeInfo.actionsHeight,
                        y = this.sizeInfo.doneButtonHeight,
                        tt = this.sizeInfo.dividerHeight,
                        o = this.sizeInfo.menuPadding,
                        f = this.sizeInfo.menuExtras,
                        b = this.options.hideDisabled ? ".disabled" : "",
                        r,
                        u,
                        e,
                        s,
                        k = function() {
                            e = i.$newElement.offset().top - c.scrollTop();
                            s = c.height() - e - nt
                        };
                    if (k(), this.options.size === "auto") {
                        h = function() {
                            var h,
                                b = function(t, i) {
                                    return function(r) {
                                        return i ? r.classList ? r.classList.contains(t) : n(r).hasClass(t) : !(r.classList ? r.classList.contains(t) : n(r).hasClass(t))
                                    }
                                },
                                d = i.$menuInner[0].getElementsByTagName("li"),
                                c = Array.prototype.filter ? Array.prototype.filter.call(d, b("hidden", !1)) : i.$lis.not(".hidden"),
                                g = Array.prototype.filter ? Array.prototype.filter.call(c, b("dropdown-header", !0)) : c.filter(".dropdown-header");
                            k();
                            r = s - f;
                            i.options.container ? (t.data("height") || t.data("height", t.height()), u = t.data("height")) : u = t.height();
                            i.options.dropupAuto && i.$newElement.toggleClass("dropup", e > s && r - f < u);
                            i.$newElement.hasClass("dropup") && (r = e - f);
                            h = c.length + g.length > 3 ? w * 3 + f - 2 : 0;
                            t.css({
                                "max-height": r + "px",
                                overflow: "hidden",
                                "min-height": h + l + a + v + y + "px"
                            });
                            p.css({
                                "max-height": r - l - a - v - y - o + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(h - o, 0) + "px"
                            })
                        };
                        h();
                        this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", h);
                        c.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", h)
                    } else
                        this.options.size && this.options.size != "auto" && this.$lis.not(b).length > this.options.size && (d = this.$lis.not(".divider").not(b).children().slice(0, this.options.size).last().parent().index(), g = this.$lis.slice(0, d + 1).filter(".divider").length, r = w * this.options.size + g * tt + o, i.options.container ? (t.data("height") || t.data("height", t.height()), u = t.data("height")) : u = t.height(), i.options.dropupAuto && this.$newElement.toggleClass("dropup", e > s && r - f < u), t.css({
                            "max-height": r + l + a + v + y + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), p.css({
                            "max-height": r - o + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        }))
                }
            },
            setWidth: function() {
                if (this.options.width === "auto") {
                    this.$menu.css("min-width", "0");
                    var n = this.$menu.parent().clone().appendTo("body"),
                        t = this.options.container ? this.$newElement.clone().appendTo("body") : n,
                        i = n.children(".dropdown-menu").outerWidth(),
                        r = t.css("width", "auto").children("button").outerWidth();
                    n.remove();
                    t.remove();
                    this.$newElement.css("width", Math.max(i, r) + "px")
                } else
                    this.options.width === "fit" ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && this.options.width !== "fit" && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = n('<div class="bs-container" />');
                var t = this,
                    i,
                    r,
                    u = function(n) {
                        t.$bsContainer.addClass(n.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", n.hasClass("dropup"));
                        i = n.offset();
                        r = n.hasClass("dropup") ? 0 : n[0].offsetHeight;
                        t.$bsContainer.css({
                            top: i.top + r,
                            left: i.left,
                            width: n[0].offsetWidth
                        })
                    };
                this.$button.on("click", function() {
                    var i = n(this);
                    t.isDisabled() || (u(t.$newElement), t.$bsContainer.appendTo(t.options.container).toggleClass("open", !i.hasClass("open")).append(t.$menu))
                });
                n(window).on("resize scroll", function() {
                    u(t.$newElement)
                });
                this.$element.on("hide.bs.select", function() {
                    t.$menu.data("height", t.$menu.height());
                    t.$bsContainer.detach()
                })
            },
            setSelected: function(n, t, i) {
                i || (i = this.findLis().eq(this.liObj[n]));
                i.toggleClass("selected", t);
                t ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false")
            },
            setDisabled: function(n, t, i) {
                i || (i = this.findLis().eq(this.liObj[n]));
                t ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", -1)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var n = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex"));
                this.$button.click(function() {
                    return !n.isDisabled()
                })
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && this.$element.attr("tabindex") !== "-98" && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")));
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this,
                    i = n(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(n) {
                    n.stopPropagation()
                });
                i.data("spaceSelect", !1);
                this.$button.on("keyup", function(n) {
                    /(32)/.test(n.keyCode.toString(10)) && i.data("spaceSelect") && (n.preventDefault(), i.data("spaceSelect", !1))
                });
                this.$button.on("click", function() {
                    t.setSize();
                    t.$element.on("shown.bs.select", function() {
                        var i,
                            n;
                        if (t.options.liveSearch && t.$menu.find("[role=search]").focus(), (t.options.liveSearch || t.multiple) && !t.multiple) {
                            if (i = t.liObj[t.$element[0].selectedIndex], typeof i != "number" || t.options.size === !1)
                                return;
                            n = t.$lis.eq(i)[0].offsetTop - t.$menuInner[0].offsetTop;
                            n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2;
                            t.$menuInner[0].scrollTop = n
                        }
                    });
                    t.$element.on("hidden.bs.select", function() {
                        t.$menuInner.find("li").removeClass("even").filter(":odd").addClass("even")
                    })
                });
                this.$menuInner.on("click", "li a", function(i) {
                    var s = n(this),
                        e = s.parent().data("originalIndex"),
                        k = t.$element.val(),
                        d = t.$element.prop("selectedIndex"),
                        v,
                        y,
                        b;
                    if (t.multiple && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !s.parent().hasClass("disabled")) {
                        var h = t.$element.find("option"),
                            f = h.eq(e),
                            l = f.prop("selected"),
                            a = f.parent("optgroup"),
                            r = t.options.maxOptions,
                            u = a.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (f.prop("selected", !l), t.setSelected(e, !l), s.blur(), (r !== !1 || u !== !1) && (v = r < h.filter(":selected").length, y = u < a.find("option:selected").length, r && v || u && y))
                                if (r && r == 1)
                                    h.prop("selected", !1), f.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(e, !0);
                                else if (u && u == 1)
                                    a.find("option:selected").prop("selected", !1), f.prop("selected", !0), b = s.parent().data("optgroup"), t.$menuInner.find('[data-optgroup="' + b + '"]').removeClass("selected"), t.setSelected(e, !0);
                                else {
                                    var o = typeof t.options.maxOptionsText == "function" ? t.options.maxOptionsText(r, u) : t.options.maxOptionsText,
                                        p = o[0].replace("{n}", r),
                                        w = o[1].replace("{n}", u),
                                        c = n('<div class="notify"><\/div>');
                                    o[2] && (p = p.replace("{var}", o[2][r > 1 ? 0 : 1]), w = w.replace("{var}", o[2][u > 1 ? 0 : 1]));
                                    f.prop("selected", !1);
                                    t.$menu.append(c);
                                    r && v && (c.append(n("<div>" + p + "<\/div>")), t.$element.trigger("maxReached.bs.select"));
                                    u && y && (c.append(n("<div>" + w + "<\/div>")), t.$element.trigger("maxReachedGrp.bs.select"));
                                    setTimeout(function() {
                                        t.setSelected(e, !1)
                                    }, 10);
                                    c.delay(750).fadeOut(300, function() {
                                        n(this).remove()
                                    })
                                }
                        } else
                            h.prop("selected", !1), f.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(e, !0);
                        t.multiple ? t.options.liveSearch && n(t.$searchbox).prop("bFocus") : t.$button.focus();
                        (k != t.$element.val() && t.multiple || d != t.$element.prop("selectedIndex") && !t.multiple) && (t.$element.triggerNative("change"), t.$element.trigger("changed.bs.select", [e, f.prop("selected"), l]))
                    }
                });
                this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
                    i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !n(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                });
                this.$menuInner.on("click", ".divider, .dropdown-header", function(n) {
                    n.preventDefault();
                    n.stopPropagation();
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                });
                this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                });
                this.$searchbox.on("click", function(n) {
                    n.stopPropagation()
                });
                this.$menu.on("click", ".actions-btn", function(i) {
                    t.options.liveSearch || t.$button.focus();
                    i.preventDefault();
                    i.stopPropagation();
                    n(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll();
                    t.$element.triggerNative("change")
                });
                this.$element.change(function() {
                    t.render(!1)
                })
            },
            liveSearchListener: function() {
                var t = this,
                    u = n('<li class="no-results"><\/li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    t.$menuInner.find(".active").removeClass("active");
                    !t.$searchbox.val() || (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hidden"), !u.parent().length || u.remove());
                    t.multiple || t.$menuInner.find(".selected").addClass("active");
                    t.$searchbox.prop("bFocus", !1)
                });
                this.$newElement.on("keydown.dropdown.data-api", function(n) {
                    var i = n.keyCode,
                        r = {
                            keyCode: n.keyCode
                        };
                    (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122) && t.$searchbox.trigger("input", r)
                });
                this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(n) {
                    n.stopPropagation()
                });
                this.$searchbox.on("input propertychange", function() {
                    var e,
                        f;
                    t.$searchbox.val() ? (e = t.$lis.not(".is-hidden").removeClass("hidden").children("a"), e = t.options.liveSearchNormalize ? e.not(":a" + t._searchStyle() + '("' + i(t.$searchbox.val()) + '")') : e.not(":" + t._searchStyle() + '("' + t.$searchbox.val() + '")'), e.parent().addClass("hidden").removeClass("even"), t.$lis.filter(".dropdown-header").each(function() {
                        var i = n(this),
                            r = i.data("optgroup");
                        t.$lis.filter("[data-optgroup=" + r + "]").not(i).not(".hidden").length === 0 && (i.addClass("hidden"), t.$lis.filter("[data-optgroup=" + r + "div]").addClass("hidden"))
                    }), f = t.$lis.not(".hidden"), f.removeClass("even").filter(":odd").addClass("even"), f.each(function(t) {
                        var i = n(this);
                        i.hasClass("divider") && (i.index() === f.first().index() || i.index() === f.last().index() || f.eq(t + 1).hasClass("divider")) && i.addClass("hidden")
                    }), t.$lis.not(".hidden, .no-results").length ? !u.parent().length || u.remove() : (!u.parent().length || u.remove(), u.html(t.options.noneResultsText.replace("{0}", '"' + r(t.$searchbox.val()) + '"')).show(), t.$menuInner.append(u))) : (t.$lis.not(".is-hidden").removeClass("hidden").removeClass("even").filter(":odd").addClass("even"), !u.parent().length || u.remove());
                    t.$lis.filter(".active").removeClass("active");
                    t.$searchbox.val() && t.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus();
                    n(this).focus()
                })
            },
            _searchStyle: function() {
                return {
                        begins: "ibegins",
                        startsWith: "ibegins"
                    }[this.options.liveSearchStyle] || "icontains"
            },
            val: function(n) {
                return typeof n != "undefined" ? (this.$element.val(n), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function(t, i) {
                var e,
                    r,
                    o,
                    u,
                    f,
                    s;
                for (typeof t == "undefined" && (t = !0), typeof i == "undefined" && (i = !0), this.findLis(), e = this.$element.find("option"), r = "", r = i ? this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t) : this.$lis.not(".divider, .dropdown-header, .disabled").toggleClass("selected", t), o = r.length, u = [], f = 0; f < o; f++)
                    s = r[f].getAttribute("data-original-index"), u[u.length] = e.eq(s)[0];
                n(u).prop("selected", t);
                this.render(!1)
            },
            selectAll: function() {
                return this.changeAll(!0, !0)
            },
            deselectAll: function() {
                return this.changeAll(!1, !1)
            },
            keydown: function(t, r) {
                var s = n(this),
                    v = s.is("input") ? s.parent().parent() : s.parent(),
                    f,
                    u = v.data("this"),
                    e,
                    l,
                    y,
                    p,
                    b,
                    k,
                    g,
                    c,
                    a = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    d = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    },
                    o = r ? r.keyCode : t.keyCode,
                    w,
                    h,
                    tt,
                    nt;
                (u.options.liveSearch && (v = s.parent().parent()), u.options.container && (v = u.$menu), f = n("[role=listbox] li", v), c = u.$newElement.hasClass("open"), !c && (o >= 48 && o <= 57 || o >= 96 && o <= 105 || o >= 65 && o <= 90) && (u.options.container ? u.$button.trigger("click") : (u.setSize(), u.$menu.parent().addClass("open"), c = !0), u.$searchbox.focus()), u.options.liveSearch && (/(27)/.test(o.toString(10)) && c && u.$menu.find(".active").length === 0 && (t.preventDefault(), u.$menu.parent().removeClass("open"), u.options.container && u.$newElement.removeClass("open"), u.$button.focus()), f = n("[role=listbox] li" + a, v), s.val() || /(38|40)/.test(o.toString(10)) || f.filter(".active").length === 0 && (f = u.$menuInner.find("li"), f = u.options.liveSearchNormalize ? f.filter(":a" + u._searchStyle() + "(" + i(d[o]) + ")") : f.filter(":" + u._searchStyle() + "(" + d[o] + ")"))), f.length) && (/(38|40)/.test(o.toString(10)) ? (n.each(f.find("a"), function(t, i) {
                    n(i).is(":focus") && (e = f.index(n(i).parent()))
                }), y = f.filter(a).first().index(), p = f.filter(a).last().index(), l = f.eq(e).nextAll(a).eq(0).index(), b = f.eq(e).prevAll(a).eq(0).index(), k = f.eq(l).prevAll(a).eq(0).index(), u.options.liveSearch && (f.each(function(t) {
                    n(this).hasClass("disabled") || n(this).data("index", t)
                }), e = f.index(f.filter(".active")), y = f.first().data("index"), p = f.last().data("index"), l = f.eq(e).nextAll().eq(0).data("index"), b = f.eq(e).prevAll().eq(0).data("index"), k = f.eq(l).prevAll().eq(0).data("index")), g = s.data("prevIndex"), o == 38 ? (u.options.liveSearch && e--, e != k && e > b && (e = b), e < y && (e = y), e == g && (e = p)) : o == 40 && (u.options.liveSearch && e++, e == -1 && (e = 0), e != k && e < l && (e = l), e > p && (e = p), e == g && (e = y)), s.data("prevIndex", e), u.options.liveSearch ? (t.preventDefault(), s.hasClass("dropdown-toggle") || f.removeClass("active").eq(e).addClass("active").children("a").focus()) : f.eq(e).children("a").focus()) : s.is("input") || (w = [], f.each(function() {
                    n(this).hasClass("disabled") || n.trim(n(this).children("a").text().toLowerCase()).substring(0, 1) == d[o] && w.push(n(this).index())
                }), h = n(document).data("keycount"), h++, n(document).data("keycount", h), tt = n.trim(n(":focus").text().toLowerCase()).substring(0, 1), tt != d[o] ? (h = 1, n(document).data("keycount", h)) : h >= w.length && (n(document).data("keycount", 0), h > w.length && (h = 1)), f.eq(w[h - 1]).children("a").focus()), (/(13|32)/.test(o.toString(10)) || /(^9$)/.test(o.toString(10)) && u.options.selectOnTab) && c && (/(32)/.test(o.toString(10)) || t.preventDefault(), u.options.liveSearch ? /(32)/.test(o.toString(10)) || (u.$menuInner.find(".active a").click(), s.focus()) : (nt = n(":focus"), nt.click(), nt.focus(), t.preventDefault(), n(document).data("spaceSelect", !0)), n(document).data("keycount", 0)), (/(^9$|27)/.test(o.toString(10)) && c && (u.multiple || u.options.liveSearch) || /(27)/.test(o.toString(10)) && !c) && (u.$menu.parent().removeClass("open"), u.$menu.find("li").removeClass("even").filter(":odd").addClass("even"), u.options.container && u.$newElement.removeClass("open"), u.$button.focus()))
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null;
                this.liObj = {};
                this.reloadLi();
                this.render();
                this.checkDisabled();
                this.liHeight(!0);
                this.setStyle();
                this.setWidth();
                this.$lis && this.$searchbox.trigger("propertychange");
                this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove();
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove();
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove();
                this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        f = n.fn.selectpicker;
        n.fn.selectpicker = u;
        n.fn.selectpicker.Constructor = t;
        n.fn.selectpicker.noConflict = function() {
            return n.fn.selectpicker = f, this
        };
        n(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', t.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(n) {
            n.stopPropagation()
        });
        n(document).on("focusin.modal", ".bs-searchbox input", function() {
            var t = document.activeElement;
            n(t).prop("bFocus", !0)
        });
        n(window).on("load.bs.select.data-api", function() {
            n(".selectpicker").each(function() {
                var t = n(this);
                u.call(t, t.data())
            })
        })
    })(n)
});
onResize = function() {
    var n = $(".summary");
    $(window).width() < 768 ? (n.is(":visible") && n.hide(), $(".boxB h2 a").unbind("click").click(function() {
        return $(this).parent().siblings(".summary").slideToggle(), $(this).toggleClass("active"), $(this).attr("aria-expanded", $(this).hasClass("active")), !1
    })) : ($(".pc").show(), $(".boxB h2 a").unbind("click"), $(".boxB h2 a").removeClass("active"))
};
$(document).ready(function(n) {
    onResize();
    var t = n(window).width();
    n(window).resize(function() {
        n(window).width() != t && (t = n(window).width(), onResize())
    })
});
/*!
 * Datepicker for Bootstrap v1.4.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
if (function(n, t) {
    function u() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function e() {
        var n = new Date;
        return u(n.getFullYear(), n.getMonth(), n.getDate())
    }
    function y(n, t) {
        return n.getUTCFullYear() === t.getUTCFullYear() && n.getUTCMonth() === t.getUTCMonth() && n.getUTCDate() === t.getUTCDate()
    }
    function c(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }
    function p(t, i) {
        function s(n, t) {
            return t.toLowerCase()
        }
        var u = n(t).data(),
            f = {},
            e,
            o = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
            r;
        i = new RegExp("^" + i.toLowerCase());
        for (r in u)
            i.test(r) && (e = r.replace(o, s), f[e] = u[r]);
        return f
    }
    function w(t) {
        var u = {},
            i;
        if (r[t] || (t = t.split("-")[0], r[t]))
            return i = r[t], n.each(v, function(n, t) {
                t in i && (u[t] = i[t])
            }), u
    }
    var l = function() {
            var t = {
                get: function(n) {
                    return this.slice(n)[0]
                },
                contains: function(n) {
                    for (var i = n && n.valueOf(), t = 0, r = this.length; t < r; t++)
                        if (this[t].valueOf() === i)
                            return t;
                    return -1
                },
                remove: function(n) {
                    this.splice(n, 1)
                },
                replace: function(t) {
                    t && (n.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var n = new l;
                    return n.replace(this), n
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), n.extend(i, t), i
            }
        }(),
        f = function(t, r) {
            this._process_options(r);
            this.dates = new l;
            this.viewDate = this.o.defaultViewDate;
            this.focusDate = null;
            this.element = n(t);
            this.isInline = !1;
            this.isInput = this.element.is("input");
            this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1;
            this.hasInput = this.component && this.element.find("input").length;
            this.component && this.component.length === 0 && (this.component = !1);
            this.picker = n(i.template);
            this._buildEvents();
            this._attachEvents();
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
            this.o.rtl && this.picker.addClass("datepicker-rtl");
            this.viewMode = this.o.startView;
            this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(n, t) {
                return parseInt(t) + 1
            });
            this._allow_update = !1;
            this.setStartDate(this._o.startDate);
            this.setEndDate(this._o.endDate);
            this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
            this.setDatesDisabled(this.o.datesDisabled);
            this.fillDow();
            this.fillMonths();
            this._allow_update = !0;
            this.update();
            this.showMode();
            this.isInline && this.show()
        },
        h,
        a,
        o,
        s,
        v,
        r,
        i;
    f.prototype = {
        constructor: f,
        _process_options: function(f) {
            var o,
                c,
                a,
                v,
                h,
                l;
            this._o = n.extend({}, this._o, f);
            o = this.o = n.extend({}, this._o);
            c = o.language;
            r[c] || (c = c.split("-")[0], r[c] || (c = s.language));
            o.language = c;
            switch (o.startView) {
            case 2:
            case "decade":
                o.startView = 2;
                break;
            case 1:
            case "year":
                o.startView = 1;
                break;
            default:
                o.startView = 0
            }
            switch (o.minViewMode) {
            case 1:
            case "months":
                o.minViewMode = 1;
                break;
            case 2:
            case "years":
                o.minViewMode = 2;
                break;
            default:
                o.minViewMode = 0
            }
            if (o.startView = Math.max(o.startView, o.minViewMode), o.multidate !== !0 && (o.multidate = Number(o.multidate) || !1, o.multidate !== !1 && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7, a = i.parseFormat(o.format), o.startDate !== -Infinity && (o.startDate = o.startDate ? o.startDate instanceof Date ? this._local_to_utc(this._zero_time(o.startDate)) : i.parseDate(o.startDate, a, o.language) : -Infinity), o.endDate !== Infinity && (o.endDate = o.endDate ? o.endDate instanceof Date ? this._local_to_utc(this._zero_time(o.endDate)) : i.parseDate(o.endDate, a, o.language) : Infinity), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], n.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = n.map(o.daysOfWeekDisabled, function(n) {
                return parseInt(n, 10)
            }), o.datesDisabled = o.datesDisabled || [], n.isArray(o.datesDisabled) || (v = [], v.push(i.parseDate(o.datesDisabled, a, o.language)), o.datesDisabled = v), o.datesDisabled = n.map(o.datesDisabled, function(n) {
                return i.parseDate(n, a, o.language)
            }), h = String(o.orientation).toLowerCase().split(/\s+/g), l = o.orientation.toLowerCase(), h = n.grep(h, function(n) {
                return /^auto|left|right|top|bottom$/.test(n)
            }), o.orientation = {
                x: "auto",
                y: "auto"
            }, l && l !== "auto")
                if (h.length === 1)
                    switch (h[0]) {
                    case "top":
                    case "bottom":
                        o.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        o.orientation.x = h[0]
                    }
                else
                    l = n.grep(h, function(n) {
                        return /^left|right$/.test(n)
                    }), o.orientation.x = l[0] || "auto", l = n.grep(h, function(n) {
                        return /^top|bottom$/.test(n)
                    }), o.orientation.y = l[0] || "auto";
            if (o.defaultViewDate) {
                var y = o.defaultViewDate.year || (new Date).getFullYear(),
                    p = o.defaultViewDate.month || 0,
                    w = o.defaultViewDate.day || 1;
                o.defaultViewDate = u(y, p, w)
            } else
                o.defaultViewDate = e();
            o.showOnFocus = o.showOnFocus !== t ? o.showOnFocus : !0
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var i = 0, f, r, u; i < n.length; i++) {
                f = n[i][0];
                n[i].length === 2 ? (r = t, u = n[i][1]) : n[i].length === 3 && (r = n[i][1], u = n[i][2]);
                f.on(u, r)
            }
        },
        _unapplyEvents: function(n) {
            for (var i = 0, f, r, u; i < n.length; i++)
                f = n[i][0], n[i].length === 2 ? (u = t, r = n[i][1]) : n[i].length === 3 && (u = n[i][1], r = n[i][2]), f.off(r, u)
        },
        _buildEvents: function() {
            var t = {
                keyup: n.proxy(function(t) {
                    n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this),
                keydown: n.proxy(this.keydown, this)
            };
            this.o.showOnFocus === !0 && (t.focus = n.proxy(this.show, this));
            this.isInput ? this._events = [[this.element, t]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), t], [this.component, {
                click: n.proxy(this.show, this)
            }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: n.proxy(this.show, this)
            }]];
            this._events.push([this.element, "*", {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }], [this.element, {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }]);
            this._secondaryEvents = [[this.picker, {
                click: n.proxy(this.click, this)
            }], [n(window), {
                resize: n.proxy(this.place, this)
            }], [n(document), {
                "mousedown touchend": n.proxy(function(n) {
                    console.log(n.target.tagName);
                    this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || n.target.tagName === "HTML" || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(t, r) {
            var u = r || this.dates.get(-1),
                f = this._utc_to_local(u);
            this.element.trigger({
                type: t,
                date: f,
                dates: n.map(this.dates, this._utc_to_local),
                format: n.proxy(function(n, t) {
                    arguments.length === 0 ? (n = this.dates.length - 1, t = this.o.format) : typeof n == "string" && (t = n, n = this.dates.length - 1);
                    t = t || this.o.format;
                    var r = this.dates.get(n);
                    return i.formatDate(r, t, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!this.element.attr("readonly") || this.o.enableOnReadonly !== !1)
                return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && n(this.element).blur(), this
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        },
        remove: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        _utc_to_local: function(n) {
            return n && new Date(n.getTime() + n.getTimezoneOffset() * 6e4)
        },
        _local_to_utc: function(n) {
            return n && new Date(n.getTime() - n.getTimezoneOffset() * 6e4)
        },
        _zero_time: function(n) {
            return n && new Date(n.getFullYear(), n.getMonth(), n.getDate())
        },
        _zero_utc_time: function(n) {
            return n && new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()))
        },
        getDates: function() {
            return n.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return n.map(this.dates, function(n) {
                return new Date(n)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var n = this.dates.get(-1);
            return typeof n != "undefined" ? new Date(n) : null
        },
        clearDates: function() {
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find("input"));
            n && n.val("").change();
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, n.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: c("setDates"),
        setUTCDate: c("setUTCDates"),
        setValue: function() {
            var n = this.getFormattedDate();
            return this.isInput ? this.element.val(n).change() : this.component && this.element.find("input").val(n).change(), this
        },
        getFormattedDate: function(r) {
            r === t && (r = this.o.format);
            var u = this.o.language;
            return n.map(this.dates, function(n) {
                return i.formatDate(n, r, u)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(n) {
            return this._process_options({
                startDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        setEndDate: function(n) {
            return this._process_options({
                endDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(n) {
            return this._process_options({
                daysOfWeekDisabled: n
            }), this.update(), this.updateNavArrows(), this
        },
        setDatesDisabled: function(n) {
            this._process_options({
                datesDisabled: n
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            var u,
                p,
                s,
                w;
            if (this.isInline)
                return this;
            var f = this.picker.outerWidth(),
                e = this.picker.outerHeight(),
                h = n(this.o.container).width(),
                b = n(this.o.container).height(),
                c = n(this.o.container).scrollTop(),
                l = n(this.o.container).offset(),
                a = [];
            this.element.parents().each(function() {
                var t = n(this).css("z-index");
                t !== "auto" && t !== 0 && a.push(parseInt(t))
            });
            var v = Math.max.apply(Math, a) + 10,
                r = this.component ? this.component.parent().offset() : this.element.offset(),
                y = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                o = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                t = r.left - l.left,
                i = r.top - l.top;
            return this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), this.o.orientation.x !== "auto" ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), this.o.orientation.x === "right" && (t -= f - o)) : r.left < 0 ? (this.picker.addClass("datepicker-orient-left"), t -= r.left - 10) : t + f > h ? (this.picker.addClass("datepicker-orient-right"), t = r.left + o - f) : this.picker.addClass("datepicker-orient-left"), u = this.o.orientation.y, u === "auto" && (p = -c + i - e, s = c + b - (i + y + e), u = Math.max(p, s) === s ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + u), u === "top" ? i += y : i -= e + parseInt(this.picker.css("padding-top")), this.o.rtl ? (w = h - (t + o), this.picker.css({
                top: i,
                right: w,
                zIndex: v
            })) : this.picker.css({
                top: i,
                left: t,
                zIndex: v
            }), this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update)
                return this;
            var r = this.dates.copy(),
                t = [],
                u = !1;
            return arguments.length ? (n.each(arguments, n.proxy(function(n, i) {
                i instanceof Date && (i = this._local_to_utc(i));
                t.push(i)
            }, this)), u = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t], delete this.element.data().date), t = n.map(t, n.proxy(function(n) {
                return i.parseDate(n, this.o.format, this.o.language)
            }, this)), t = n.grep(t, n.proxy(function(n) {
                return n < this.o.startDate || n > this.o.endDate || !n
            }, this), !0), this.dates.replace(t), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), u ? this.setValue() : t.length && String(r) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && r.length && this._trigger("clearDate"), this.fill(), this
        },
        fillDow: function() {
            var t = this.o.weekStart,
                n = "<tr>",
                i;
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(n, t) {
                return parseInt(t) + 1
            }), i = '<th class="cw">&#160;<\/th>', n += i); t < this.o.weekStart + 7;)
                n += '<th class="dow">' + r[this.o.language].daysMin[t++ % 7] + "<\/th>";
            n += "<\/tr>";
            this.picker.find(".datepicker-days thead").append(n)
        },
        fillMonths: function() {
            for (var n = "", t = 0; t < 12;)
                n += '<span class="month">' + r[this.o.language].monthsShort[t++] + "<\/span>";
            this.picker.find(".datepicker-months td").html(n)
        },
        setRange: function(t) {
            t && t.length ? this.range = n.map(t, function(n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function(t) {
            var i = [],
                r = this.viewDate.getUTCFullYear(),
                f = this.viewDate.getUTCMonth(),
                u = new Date;
            return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < f ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > f) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === u.getFullYear() && t.getUTCMonth() === u.getMonth() && t.getUTCDate() === u.getDate() && i.push("today"), this.dates.contains(t) !== -1 && i.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) && i.push("disabled"), this.o.datesDisabled.length > 0 && n.grep(this.o.datesDisabled, function(n) {
                return y(t, n)
            }).length > 0 && i.push("disabled", "disabled-date"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), n.inArray(t.valueOf(), this.range) !== -1 && i.push("selected")), i
        },
        fill: function() {
            var g = new Date(this.viewDate),
                f = g.getUTCFullYear(),
                p = g.getUTCMonth(),
                w = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                ft = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                b = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                et = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                ot = r[this.o.language].today || r.en.today || "",
                st = r[this.o.language].clear || r.en.clear || "",
                y,
                e,
                k,
                c,
                s,
                h,
                o,
                l,
                it,
                rt,
                ut,
                a,
                v;
            if (!isNaN(f) && !isNaN(p)) {
                for (this.picker.find(".datepicker-days thead .datepicker-switch").text(r[this.o.language].months[p] + " " + f), this.picker.find("tfoot .today").text(ot).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(st).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths(), e = u(f, p - 1, 28), k = i.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()), e.setUTCDate(k), e.setUTCDate(k - (e.getUTCDay() - this.o.weekStart + 7) % 7), c = new Date(e), c.setUTCDate(c.getUTCDate() + 42), c = c.valueOf(), s = []; e.valueOf() < c;) {
                    if (e.getUTCDay() === this.o.weekStart && (s.push("<tr>"), this.o.calendarWeeks)) {
                        var nt = new Date(+e + (this.o.weekStart - e.getUTCDay() - 7) % 7 * 864e5),
                            tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5),
                            d = new Date(Number(d = u(tt.getUTCFullYear(), 0, 1)) + (11 - d.getUTCDay()) % 7 * 864e5),
                            ht = (tt - d) / 6048e5 + 1;
                        s.push('<td class="cw">' + ht + "<\/td>")
                    }
                    h = this.getClassNames(e);
                    h.push("day");
                    this.o.beforeShowDay !== n.noop && (o = this.o.beforeShowDay(this._utc_to_local(e)), o === t ? o = {} : typeof o == "boolean" ? o = {
                        enabled: o
                    } : typeof o == "string" && (o = {
                        classes: o
                    }), o.enabled === !1 && h.push("disabled"), o.classes && (h = h.concat(o.classes.split(/\s+/))), o.tooltip && (y = o.tooltip));
                    h = n.unique(h);
                    s.push('<td class="' + h.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ">" + e.getUTCDate() + "<\/td>");
                    y = null;
                    e.getUTCDay() === this.o.weekEnd && s.push("<\/tr>");
                    e.setUTCDate(e.getUTCDate() + 1)
                }
                for (this.picker.find(".datepicker-days tbody").empty().append(s.join("")), l = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active"), n.each(this.dates, function(n, t) {
                    t.getUTCFullYear() === f && l.eq(t.getUTCMonth()).addClass("active")
                }), (f < w || f > b) && l.addClass("disabled"), f === w && l.slice(0, ft).addClass("disabled"), f === b && l.slice(et + 1).addClass("disabled"), this.o.beforeShowMonth !== n.noop && (it = this, n.each(l, function(t, i) {
                    if (!n(i).hasClass("disabled")) {
                        var r = new Date(f, t, 1),
                            u = it.o.beforeShowMonth(r);
                        u === !1 && n(i).addClass("disabled")
                    }
                })), s = "", f = parseInt(f / 10, 10) * 10, rt = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td"), f -= 1, ut = n.map(this.dates, function(n) {
                    return n.getUTCFullYear()
                }), v = -1; v < 11; v++)
                    a = ["year"], v === -1 ? a.push("old") : v === 10 && a.push("new"), n.inArray(f, ut) !== -1 && a.push("active"), (f < w || f > b) && a.push("disabled"), s += '<span class="' + a.join(" ") + '">' + f + "<\/span>", f += 1;
                rt.html(s)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    n = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                case 0:
                    this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    });
                    this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 1:
                case 2:
                    this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    });
                    this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    })
                }
            }
        },
        click: function(t) {
            var r,
                e,
                f,
                o,
                h,
                s,
                c;
            if (t.preventDefault(), r = n(t.target).closest("span, td, th"), r.length === 1)
                switch (r[0].nodeName.toLowerCase()) {
                case "th":
                    switch (r[0].className) {
                    case "datepicker-switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        h = i.modes[this.viewMode].navStep * (r[0].className === "prev" ? -1 : 1);
                        switch (this.viewMode) {
                        case 0:
                            this.viewDate = this.moveMonth(this.viewDate, h);
                            this._trigger("changeMonth", this.viewDate);
                            break;
                        case 1:
                        case 2:
                            this.viewDate = this.moveYear(this.viewDate, h);
                            this.viewMode === 1 && this._trigger("changeYear", this.viewDate)
                        }
                        this.fill();
                        break;
                    case "today":
                        s = new Date;
                        s = u(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
                        this.showMode(-2);
                        c = this.o.todayBtn === "linked" ? null : "view";
                        this._setDate(s, c);
                        break;
                    case "clear":
                        this.clearDates()
                    }
                    break;
                case "span":
                    r.hasClass("disabled") || (this.viewDate.setUTCDate(1), r.hasClass("month") ? (o = 1, f = r.parent().find("span").index(r), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(f), this._trigger("changeMonth", this.viewDate), this.o.minViewMode === 1 && this._setDate(u(e, f, o))) : (o = 1, f = 0, e = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), this.o.minViewMode === 2 && this._setDate(u(e, f, o))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    r.hasClass("day") && !r.hasClass("disabled") && (o = parseInt(r.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth(), r.hasClass("old") ? f === 0 ? (f = 11, e -= 1) : f -= 1 : r.hasClass("new") && (f === 11 ? (f = 0, e += 1) : f += 1), this._setDate(u(e, f, o)))
                }
            this.picker.is(":visible") && this._focused_from && n(this._focused_from).focus();
            delete this._focused_from
        },
        _toggle_multidate: function(n) {
            var t = this.dates.contains(n);
            if (n || this.dates.clear(), t !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(n)) : this.dates.push(n), typeof this.o.multidate == "number")
                while (this.dates.length > this.o.multidate)
                    this.dates.remove(0)
        },
        _setDate: function(n, t) {
            t && t !== "date" || this._toggle_multidate(n && new Date(n));
            t && t !== "view" || (this.viewDate = n && new Date(n));
            this.fill();
            this.setValue();
            t && t === "view" || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input"));
            i && i.change();
            this.o.autoclose && (!t || t === "date") && this.hide()
        },
        moveMonth: function(n, i) {
            var e;
            if (!n)
                return t;
            if (!i)
                return n;
            var r = new Date(n.valueOf()),
                o = r.getUTCDate(),
                s = r.getUTCMonth(),
                h = Math.abs(i),
                u,
                f;
            if (i = i > 0 ? 1 : -1, h === 1)
                f = i === -1 ? function() {
                    return r.getUTCMonth() === s
                } : function() {
                    return r.getUTCMonth() !== u
                }, u = s + i, r.setUTCMonth(u), (u < 0 || u > 11) && (u = (u + 12) % 12);
            else {
                for (e = 0; e < h; e++)
                    r = this.moveMonth(r, i);
                u = r.getUTCMonth();
                r.setUTCDate(o);
                f = function() {
                    return u !== r.getUTCMonth()
                }
            }
            while (f())
                r.setUTCDate(--o), r.setUTCMonth(u);
            return r
        },
        moveYear: function(n, t) {
            return this.moveMonth(n, t * 12)
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function(n) {
            var o,
                t,
                u,
                i,
                r,
                f;
            if (!this.picker.is(":visible")) {
                n.keyCode === 27 && this.show();
                return
            }
            o = !1;
            r = this.focusDate || this.viewDate;
            switch (n.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide();
                n.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation)
                    break;
                t = n.keyCode === 37 ? -1 : 1;
                n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t), i = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t), i = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()), u.setUTCDate(u.getUTCDate() + t), i = new Date(r), i.setUTCDate(r.getUTCDate() + t));
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), n.preventDefault());
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation)
                    break;
                t = n.keyCode === 38 ? -1 : 1;
                n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t), i = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t), i = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()), u.setUTCDate(u.getUTCDate() + t * 7), i = new Date(r), i.setUTCDate(r.getUTCDate() + t * 7));
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), n.preventDefault());
                break;
            case 13:
                r = this.focusDate || this.dates.get(-1) || this.viewDate;
                this.o.keyboardNavigation && (this._toggle_multidate(r), o = !0);
                this.focusDate = null;
                this.viewDate = this.dates.get(-1) || this.viewDate;
                this.setValue();
                this.fill();
                this.picker.is(":visible") && (n.preventDefault(), typeof n.stopPropagation == "function" ? n.stopPropagation() : n.cancelBubble = !0, this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null;
                this.viewDate = this.dates.get(-1) || this.viewDate;
                this.fill();
                this.hide()
            }
            o && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change())
        },
        showMode: function(n) {
            n && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n)));
            this.picker.children("div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    h = function(t, i) {
        this.element = n(t);
        this.inputs = n.map(i.inputs, function(n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        o.call(n(this.inputs), i).bind("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function(t) {
            return n(t).data("datepicker")
        });
        this.updateDates()
    };
    h.prototype = {
        updateDates: function() {
            this.dates = n.map(this.pickers, function(n) {
                return n.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = n.map(this.dates, function(n) {
                return n.valueOf()
            });
            n.each(this.pickers, function(n, i) {
                i.setRange(t)
            })
        },
        dateUpdated: function(t) {
            if (!this.updating) {
                this.updating = !0;
                var e = n(t.target).data("datepicker"),
                    i = e.getUTCDate(),
                    f = n.inArray(t.target, this.inputs),
                    r = f - 1,
                    u = f + 1,
                    o = this.inputs.length;
                if (f !== -1) {
                    if (n.each(this.pickers, function(n, t) {
                        t.getUTCDate() || t.setUTCDate(i)
                    }), i < this.dates[r])
                        while (r >= 0 && i < this.dates[r])
                            this.pickers[r--].setUTCDate(i);
                    else if (i > this.dates[u])
                        while (u < o && i > this.dates[u])
                            this.pickers[u++].setUTCDate(i);
                    this.updateDates();
                    delete this.updating
                }
            }
        },
        remove: function() {
            n.map(this.pickers, function(n) {
                n.remove()
            });
            delete this.element.data().datepicker
        }
    };
    a = n.fn.datepicker;
    o = function(i) {
        var u = Array.apply(null, arguments),
            r;
        return u.shift(), this.each(function() {
            var o = n(this),
                e = o.data("datepicker"),
                l = typeof i == "object" && i,
                v;
            if (!e) {
                var a = p(this, "date"),
                    y = n.extend({}, s, a, l),
                    b = w(y.language),
                    c = n.extend({}, s, b, a, l);
                o.hasClass("input-daterange") || c.inputs ? (v = {
                    inputs: c.inputs || o.find("input").toArray()
                }, o.data("datepicker", e = new h(this, n.extend(c, v)))) : o.data("datepicker", e = new f(this, c))
            }
            if (typeof i == "string" && typeof e[i] == "function" && (r = e[i].apply(e, u), r !== t))
                return !1
        }), r !== t ? r : this
    };
    n.fn.datepicker = o;
    s = n.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: n.noop,
        beforeShowMonth: n.noop,
        calendarWeeks: !1,
        clearBtn: !0,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -Infinity,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !0,
        enableOnReadonly: !0,
        container: "body"
    };
    v = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = f;
    r = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    i = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        },
        getDaysInMonth: function(n, t) {
            return [31, i.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(n) {
            var t = n.replace(this.validParts, '\0').split('\0'),
                i = n.match(this.validParts);
            if (!t || !t.length || !i || i.length === 0)
                throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function(e, o, s) {
            function tt() {
                var n = this.slice(0, c[h].length),
                    t = c[h].slice(0, n.length);
                return n.toLowerCase() === t.toLowerCase()
            }
            var nt,
                c,
                v,
                y,
                h,
                a,
                it,
                d,
                w;
            if (!e)
                return t;
            if (e instanceof Date)
                return e;
            if (typeof o == "string" && (o = i.parseFormat(o)), nt = /([\-+]\d+)([dmwy])/, c = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                for (e = new Date, h = 0; h < c.length; h++) {
                    v = nt.exec(c[h]);
                    y = parseInt(v[1]);
                    switch (v[2]) {
                    case "d":
                        e.setUTCDate(e.getUTCDate() + y);
                        break;
                    case "m":
                        e = f.prototype.moveMonth.call(f.prototype, e, y);
                        break;
                    case "w":
                        e.setUTCDate(e.getUTCDate() + y * 7);
                        break;
                    case "y":
                        e = f.prototype.moveYear.call(f.prototype, e, y)
                    }
                }
                return u(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0)
            }
            c = e && e.match(this.nonpunctuation) || [];
            e = new Date;
            var b = {},
                g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                l = {
                    yyyy: function(n, t) {
                        return n.setUTCFullYear(t)
                    },
                    yy: function(n, t) {
                        return n.setUTCFullYear(2e3 + t)
                    },
                    m: function(n, t) {
                        if (isNaN(n))
                            return n;
                        for (t -= 1; t < 0;)
                            t += 12;
                        for (t %= 12, n.setUTCMonth(t); n.getUTCMonth() !== t;)
                            n.setUTCDate(n.getUTCDate() - 1);
                        return n
                    },
                    d: function(n, t) {
                        return n.setUTCDate(t)
                    }
                },
                p,
                k;
            if (l.M = l.MM = l.mm = l.m, l.dd = l.d, e = u(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0), a = o.parts.slice(), c.length !== a.length && (a = n(a).filter(function(t, i) {
                return n.inArray(i, g) !== -1
            }).toArray()), c.length === a.length) {
                for (h = 0, it = a.length; h < it; h++) {
                    if (p = parseInt(c[h], 10), v = a[h], isNaN(p))
                        switch (v) {
                        case "MM":
                            k = n(r[s].months).filter(tt);
                            p = n.inArray(k[0], r[s].months) + 1;
                            break;
                        case "M":
                            k = n(r[s].monthsShort).filter(tt);
                            p = n.inArray(k[0], r[s].monthsShort) + 1
                        }
                    b[v] = p
                }
                for (h = 0; h < g.length; h++)
                    w = g[h], w in b && !isNaN(b[w]) && (d = new Date(e), l[w](d, b[w]), isNaN(d) || (e = d))
            }
            return e
        },
        formatDate: function(t, u, f) {
            var e,
                s,
                o,
                h;
            if (!t)
                return "";
            for (typeof u == "string" && (u = i.parseFormat(u)), e = {
                d: t.getUTCDate(),
                D: r[f].daysShort[t.getUTCDay()],
                DD: r[f].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: r[f].monthsShort[t.getUTCMonth()],
                MM: r[f].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            }, e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, t = [], s = n.extend([], u.separators), o = 0, h = u.parts.length; o <= h; o++)
                s.length && t.push(s.shift()), t.push(e[u.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&#171;<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">&#187;<\/th><\/tr><\/thead>',
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    i.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = i;
    n.fn.datepicker.noConflict = function() {
        return n.fn.datepicker = a, this
    };
    n.fn.datepicker.version = "1.4.0";
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(), o.call(i, "show"))
    });
    n(function() {
        o.call(n('[data-provide="datepicker-inline"]'))
    })
}(window.jQuery), $(document).ready(function() {
    $(".date input").datepicker({
        orientation: "top left",
        format: "dd-M-yyyy",
        todayHighlight: !0,
        autoclose: !0,
        forceParse: !1
    }).on("show", function() {
        return $(this).parent().addClass("active"), !1
    }).on("hide", function() {
        return $(this).parent().removeClass("active"), !1
    })
}), $(document).ready(function() {
    if ($("#agencyOptions-allActive").length) {
        var n = $("input[name='agencySearchType']");
        disableAgencySelect(!0, !1);
        n.change(function() {
            $(this).val() == "2" ? disableAgencySelect(!1, !0) : disableAgencySelect(!0, !0);
            $(this).focus()
        });
        $("input[name='agencySearchType']").click(function() {
            $(this).focus()
        });
        $("#agencyOptions-sel").is(":checked") && disableAgencySelect(!1, !0)
    }
}), $("#agencyOptions-allActive").length) {
    activeSelect = $("#activeSelect");
    retiredSelect = $("#retiredSelect");
    function disableAgencySelect(n, t) {
        n && t && (activeSelect.val(0), retiredSelect.val(0));
        n ? ($('#activeSelect, [for="activeSelect"]').addClass("labelDisabled"), $('#retiredSelect, [for="retiredSelect"]').addClass("labelDisabled")) : ($('#activeSelect, [for="activeSelect"]').removeClass("labelDisabled"), $('#retiredSelect, [for="retiredSelect"]').removeClass("labelDisabled"));
        activeSelect.attr("disabled", n);
        retiredSelect.attr("disabled", n);
        activeSelect.selectpicker("refresh");
        retiredSelect.selectpicker("refresh")
    }
    function writeError() {
        $("#agencyErrID").html("You must select an agency")
    }
    function validateAgencies() {
        var n = !1;
        return (clearErrors(), !$("#agencyOptions-sel").is(":checked")) ? !1 : (activeSelect.val() || retiredSelect.val() || (writeError(), n = !0), n)
    }
    function clearErrors() {
        $("#agencyErrID").html("")
    }
    $(activeSelect).closest("form").submit(function(n) {
        var t = validateAgencies();
        t ? (this.submitted = !0, n.preventDefault()) : this.submitted = !1
    })
}