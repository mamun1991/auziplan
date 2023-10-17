function initialiseLocationSelector() {
    $("#loc_all_states").on("click", function() {
        verifyALL(1, 8) ? changeState(1, 8, !1) : changeState(1, 8, !0)
    });
    verifyALL = function(n, t) {
        for (var i = 0, i = n; i <= t; i++)
            if ($("#form-loc-" + i).is(":checked"))
                return !0;
        return !1
    };
    changeState = function(n, t, i) {
        for (var r = 0, r = n; r <= t; r++)
            $("#form-loc-" + r).prop("checked", i)
    }
}
function requestWatch(n) {
    var t = n.href + "&redirect=false";
    $.ajax({
        type: "POST",
        cache: !0,
        dataType: "json",
        url: t + getCacheBuster(),
        data: n.href
    }).done(function(t, i, r) {
        var u = checkLogin(r);
        t.STATUS == "ok" ? toggleWatch(n) : alert("An error occurred. Try refreshing the page, or logging out and logging in again.")
    })
}
function toggleWatch(n) {
    var i = $(n).attr("id"),
        n = $("#" + i),
        t;
    n.hasClass("icon-bookmarked") ? (t = n.attr("href").replace("unwatch", "watch"), n.attr("href", t), $(n.find("span.action")[0]).html("Bookmark"), n.attr("title", "Start watching this Forecast Opportunity"), n.removeClass("icon-bookmarked")) : (t = n.attr("href").replace("watch", "unwatch"), n.attr("href", t), $(n.find("span.action")[0]).html("Unbookmark"), n.attr("title", "Stop watching this Forecast Opportunity"), n.addClass("icon-bookmarked"))
}
function sizeFormat(n) {
    return n = parseInt(n), n < 1024 ? n + "b" : n < Math.pow(1024, 2) ? Math.round(n * 10 / Math.pow(1024, 1)) / 10 + "kb" : n < Math.pow(1024, 3) ? Math.round(n * 10 / Math.pow(1024, 2)) / 10 + "mb" : n < Math.pow(1024, 4) ? Math.round(n * 10 / Math.pow(1024, 3)) / 10 + "gb" : ""
}
function timeFormat(n) {
    var i = parseInt(n) / 1e3,
        t,
        r = "";
    return i >= Math.pow(60, 2) && (t = Math.round(i / Math.pow(60, 2)) % 60, r += t != 1 ? t + " hours, " : t + " hour, "), i >= Math.pow(60, 1) && (t = Math.round(i / Math.pow(60, 1)) % 60, r += t != 1 ? t + " minutes, " : t + " minute, "), t = Math.round(i) % 60, r + (t != 1 ? t + " seconds" : t + " second")
}
function parseDateTime(n) {
    var t = n.split(" "),
        o = "2068",
        f = "1",
        e = "1",
        s = "12",
        h = "00",
        c = "00",
        i = new Date,
        r,
        u;
    if (t.length != 2)
        throw "Invalid Date Format";
    if (typeof t[0] != "undefined" && t[0] != "") {
        if (r = t[0].split("-"), r.length != 3)
            throw "Invalid Date Format";
        o = r[0] || o;
        f = new String(r[1]) || f;
        e = new String(r[2] || e)
    }
    if (typeof t[1] != "undefined" && t[1] != "") {
        if (u = t[1].split(":"), u.length != 3)
            throw "Invalid Date Format";
        s = new String(u[0]) || s;
        h = new String(u[1]) || h;
        c = new String(u[2]) || c
    }
    return i.setFullYear(o, f - 1, e), i.setMonth(f - 1, e), i.setHours(s), i.setMinutes(h), i.setSeconds(c), i
}
function set_countdown(n, t) {
    return Math.floor((t - n) / 1e3)
}
function display_countdown(n, t) {
    if (t < 1)
        setOutput(t, t);
    else {
        var u = t % 60,
            r = (t - u) / 60,
            f = r % 60;
        r = (r - f) / 60;
        var e = r % 24,
            o = (r - e) / 24,
            i = new String(n);
        i = i.replace(/%days%/, o);
        i = i.replace(/%hours%/, e);
        i = i.replace(/%mins%/, f);
        i = i.replace(/%secs%/, u);
        o == 1 && (i = i.replace(/days/, "day"));
        setOutput(i, t)
    }
}
function prep_countdown(n) {
    var i = new Date,
        r = i.getTime(),
        t = Math.floor((n - r) / 1e3);
    display_countdown("%days% days, %hours% hours, %mins% minutes and %secs% seconds", t);
    t > 0 && (countDownClock = setTimeout("prep_countdown(" + n + ");", 1e3))
}
function getServerTime() {
    $.ajax({
        type: "POST",
        cache: !0,
        dataType: "html",
        url: "/?event=public.GO.application.checkTime" + getCacheBuster(),
        data: {
            CSRFtoken: $("#form-CSRFtoken").val()
        },
        success: function(n, t, i) {
            initCounter(i)
        },
        error: function(n, t, i) {
            responseErrFunc(i)
        }
    })
}
function getServerTime1() {
    $.ajax({
        type: "POST",
        cache: !0,
        dataType: "html",
        url: "/?event=public.GO.application.checkTime" + getCacheBuster(),
        data: {
            CSRFtoken: $("#form-CSRFtoken").val()
        },
        success: function(n, t, i) {
            initCounter1(i)
        },
        error: function(n, t, i) {
            responseErrFunc(i)
        }
    })
}
function disableLodgeButtons() {
    $("#form-btnLodgeResponse").addClass("btn-disabled");
    $("#form-btnLodgeResponse").attr("disabled", !0);
    disableRemoveFileLinks()
}
function setOutput(n, t) {
    if (t > 0) {
        if (isNaN($("#form-RemainingTime").val()) && ($("#form-btnLodgeResponse").removeClass("btn-disabled"), $("#form-btnLodgeResponse").attr("disabled", !1), enableRemoveFileLinks()), $("#form-RemainingTime").val(t), $("#timerSpan").html(n), t < 300 && $("#five-minute").length == 0) {
            var i = document.createElement("P");
            i.id = "five-minute";
            i.appendChild(document.createTextNode("This GO will close within the next 5 minutes. You will not be able to submit an application once the GO has closed."));
            $("#warningText").html(i);
            $("#warningText").attr("style", "display:block;")
        }
    } else
        $("#form-late").val() && $("#form-late").val() != "false" || $("#responseFormDiv").fadeOut("normal", function() {
            $("#form-btnLodgeResponse").remove();
            $("#form-reset").remove()
        }), $("#form-RemainingTime").val(0), $("#timer").hide(), $("#warningText").html("<p>This GO has closed. You cannot submit an application after the specified close time and date.<\/p>"), $("#warningText").attr("style", "display:block;")
}
function isValidFileType(n) {
    var i = "ACTION,APK,APP,BAT,BIN,CMD,COM,COMMAND,CPL,CSH,EXE,GADGET,INF1,INS,INX,IPA,ISU,JAR,JOB,JS,JSE,KSH,LNK,MSC,MSI,MSP,MST,OSX,OUT,PAF,PIF,PRG,PS1,REG,RGS,RUN,SCT,SHB,SHS,U3P,VB,VBE,VBS,VBSCRIPT,WORKFLOW,WS,WSF".split(","),
        t = n.substr(n.lastIndexOf(".") + 1);
    return !(t.length > 0 && $.inArray(t.toUpperCase(), i) !== -1)
}
function enableRemoveFileLinks() {
    var n,
        t;
    for ($("#form-reset").removeClass("disabled"), $("#form-reset").attr("disabled", !1), n = 1; n <= 5; n++)
        t = "form_responseFile" + n + "_removeLink", $("#" + t).removeClass("disabled"), $("#" + t).attr("disabled", !1)
}
function disableRemoveFileLinks() {
    var n,
        t;
    for ($("#form-reset").addClass("disabled"), $("#form-reset").attr("disabled", !0), n = 1; n <= 5; n++)
        t = "form_responseFile" + n + "_removeLink", $("#" + t).addClass("disabled"), $("#" + t).attr("disabled", !0)
}
function logResponse() {
    var isInvalidFileType,
        aryFN,
        n,
        uri;
    for (blnSafe = !0, strError = "invalid", aryErrorDetail = [], aryFilenames = [], isInvalidFileType = !1, aryFileTypeErrorDetail = [], n = 1; n <= 5; n++)
        f = eval("$('#form_responseFile" + n + "').val()"), f != "" && (f.substr(0, 1) == "/" ? ary = f.split("/") : (str = f.replace("/", "\\"), ary = str.split("\\")), fn = ary[ary.length - 1], fn.indexOf(" ") == 0 && (blnSafe = !1, aryErrorDetail.push("Filename " + n + " begins with a space")), fn.indexOf(".") == -1 && (blnSafe = !1, aryErrorDetail.push("Filename " + n + " has no extension")), fn.length > 100 && (blnSafe = !1, aryErrorDetail.push("Filename " + n + " is more than 100 characters")), _fn = fn.replace(reNonAscii, ""), _fn = _fn.replace(reWindows, ""), fn.length != _fn.length && (blnSafe = !1, aryErrorDetail.push("Filename " + n + " contains invalid characters")), $.inArray(fn, aryFilenames) != -1 && (blnSafe = !1, strError = "duplicate"), isValidFileType(fn) || (isInvalidFileType = !0, aryFileTypeErrorDetail.push("Filename " + n)), aryFilenames.push(fn));
    if (blnSafe && isInvalidFileType && (blnSafe = !1, strError = "invalidFileType"), FileUploadFormControl.disableFileUpload($("#responseForm").get(0)), blnSafe)
        $("#response-message").attr("style", "display:none"), $("#form-btnLodgeResponse").addClass("btn-disabled"), $("#form-btnLodgeResponse").attr("disabled", !0), disableRemoveFileLinks(), uri = "/?event=public.GO.application.submitApplication&GOUUID=" + $("#form-GOUUID").val() + "&remainingTime=" + $("#form-RemainingTime").val(), $.ajax({
            type: "POST",
            cache: !0,
            dataType: "html",
            url: uri + getCacheBuster(),
            data: {
                CSRFtoken: $("#form-CSRFtoken").val(),
                GoInviteeUUID: $("#form-GOInviteeUUID").val()
            },
            success: function(n, t, i) {
                processResponse(i)
            },
            error: function() {
                responseErrFunc()
            }
        });
    else {
        for ($("#form-btnLodgeResponse").addClass("btn-disabled"), $("#form-btnLodgeResponse").attr("disabled", !0), disableRemoveFileLinks(), aryFN = [], n = 1; n <= 5; n++)
            aryFN.push("File" + n + "=" + escape(eval("$('#form_responseFile" + n + "').val()")));
        uri = "/?event=public.GO.application.submitApplication&GOUUID=" + $("#form-GOUUID").val() + "&remainingTime=" + $("#form-RemainingTime").val() + "&filenameError=" + strError + "&" + aryFN.join("&");
        $.ajax({
            type: "POST",
            cache: !0,
            dataType: "html",
            url: uri + getCacheBuster(),
            data: {
                CSRFtoken: $("#form-CSRFtoken").val(),
                GoInviteeUUID: $("#form-GOInviteeUUID").val()
            },
            success: function() {
                displayFilenameError()
            },
            error: function() {
                responseErrFunc()
            }
        })
    }
}
function submitResponseForm() {
    FileUploadFormControl.doSubmit($("#responseForm").get(0))
}
function logResponseEmptyError(input) {
    var n = input.name.substr(-1),
        aryFN,
        uri;
    for (aryErrorDetail.push("File " + n + " is corrupt or is zero bytes"), $("#form-btnLodgeResponse").addClass("btn-disabled"), $("#form-btnLodgeResponse").attr("disabled", !0), disableRemoveFileLinks(), aryFN = [], n = 1; n <= 5; n++)
        aryFN.push("File" + n + "=" + escape(eval("$('#form_responseFile" + n + "').val()")));
    uri = "";
    $("#form-LogOfGOApplicationAttemptUUID").length && (uri = "./?event=public.GO.application.submitApplicationEmptyError&LogOfGOApplicationAttemptUUID=" + $("#form-LogOfGOApplicationAttemptUUID").val() + "&GOUUID=" + $("#form-GOUUID").val() + "&" + aryFN.join("&"));
    $.ajax({
        type: "POST",
        cache: !0,
        dataType: "html",
        url: uri + getCacheBuster(),
        data: {
            CSRFtoken: $("#form-CSRFtoken").val(),
            GoInviteeUUID: $("#form-GOInviteeUUID").val()
        },
        success: function() {
            displayEmptyFileError()
        },
        error: function() {
            responseErrFunc()
        }
    })
}
function displayEmptyFileError() {
    if (aryErrorDetail.length > 0) {
        var n = "<p>";
        n = aryErrorDetail.length == 1 ? n + "A file you are attempting to submit is zero bytes in size. Please check your file size and try again.<\/p><p>The error encountered was: " : n + aryErrorDetail.length + " files you are attempting to submit are zero bytes in size. Please check your file size and try again.<\/p><p>The errors encountered were: ";
        n = n + aryErrorDetail.join(", ") + ".<\/p>";
        $("#response-message").html(n);
        $("#response-message").attr("style", "display:block;");
        $("#response-message").focus();
        $("html, body").animate({
            scrollTop: $("#response-message").offset().top
        }, 800)
    }
}
function displayFilenameError() {
    FileUploadFormControl.enableFileUpload($("#responseForm").get(0));
    $("#form-btnLodgeResponse").removeClass("btn-disabled");
    $("#form-btnLodgeResponse").attr("disabled", !1);
    enableRemoveFileLinks();
    strError === "duplicate" ? ($("#response-message").html("<p>You are attempting to upload multiple files with the same filename. Please re-name the file(s) and try again.<\/p>"), $("#response-message").attr("style", "display:block;")) : strError === "invalid" ? ($("#response-message").html('<p>A file you are attempting to submit contains either unacceptable characters or an unacceptable file extension. Filenames must not contain the following characters  / : * ? " < > |. Please re-name the file and try again.<\/p><p>The error encountered was: ' + aryErrorDetail.join(", ") + ".<\/p>"), $("#response-message").attr("style", "display:block")) : strError === "invalidFileType" && ($("#response-message").html("<p>The file type you are attempting to upload is not permitted in GrantConnect. Please try another file type.<\/p><p>The following file(s) have invalid file type: " + aryFileTypeErrorDetail.join(", ") + ".<\/p>"), $("#response-message").attr("style", "display:block"));
    $("#response-message").focus();
    $("html, body").animate({
        scrollTop: $("#response-message").offset().top
    }, 800)
}
function decodeHtml(n) {
    var t = document.createElement("textarea");
    return t.innerHTML = n, t.value
}
var JSON,
    FileUploadControl,
    FileUploadFormControl,
    countDownClock,
    processResponse,
    arrBreadcrumbs;
(function(n) {
    Class = {
        create: function() {
            var u = arguments.length > 0 && arguments[arguments.length - 1].constructor == Boolean ? arguments[arguments.length - 1] : !1,
                r = u ? {} : function() {
                    this.init.apply(this, arguments)
                },
                f = {
                    ns: [],
                    supers: {},
                    init: function() {},
                    namespace: function(t) {
                        var r,
                            u,
                            f,
                            i;
                        if (!t)
                            return null;
                        if (r = this, t.constructor == Array) {
                            n.each(t, function() {
                                r.namespace.apply(r, [this])
                            });
                            return
                        }
                        if (t.constructor == Object) {
                            for (u in t)
                                [Object, Function].indexOf(t[u].constructor) > -1 && (this.ns || (this.ns = []), this.ns[u] = t[u], this.namespace.apply(this, [u]));
                            return
                        }
                        return f = t.split("."), i = this.prototype ? this.prototype : this, n.each(f, function() {
                            i[this] = r.ns[this] || i[this] || window[this] || Class.create(!0);
                            delete r.ns[this];
                            i = i[this]
                        }), i
                    },
                    create: function() {
                        var n = Array.prototype.slice.call(arguments),
                            i = n.shift(),
                            r = Class.create.apply(Class, n),
                            t = {};
                        t[i] = r;
                        this.namespace(t)
                    },
                    sup: function() {
                        try {
                            var n = this.sup.caller.name;
                            this.supers[n].apply(this, arguments)
                        } catch (t) {
                            return !1
                        }
                    }
                },
                t;
            return u ? delete f.init : null, n.extend(r, f), u || n.extend(r.prototype, f), t = u ? r : r.prototype, n.each(arguments, function() {
                if (this.constructor == Object || typeof this.init != undefined)
                    for (i in this)
                        t[i] && t[i].constructor == Function && ["namespace", "create", "sup"].indexOf(i) == -1 && (this[i].name = t[i].name = i, t.supers[i] = t[i]), t[i] = this[i]
            }), r
        }
    }
})(jQuery);
JSON || (JSON = {}), function() {
    "use strict";
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    function quote(n) {
        return escapable.lastIndex = 0, escapable.test(n) ? '"' + n.replace(escapable, function(n) {
            var t = meta[n];
            return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + n + '"'
    }
    function str(n, t) {
        var r,
            e,
            u,
            o,
            s = gap,
            f,
            i = t[n];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(n));
        typeof rep == "function" && (i = rep.call(t, n, i));
        switch (typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i)
                return "null";
            if (gap += indent, f = [], Object.prototype.toString.apply(i) === "[object Array]") {
                for (o = i.length, r = 0; r < o; r += 1)
                    f[r] = str(r, i) || "null";
                return u = f.length === 0 ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + s + "]" : "[" + f.join(",") + "]", gap = s, u
            }
            if (rep && typeof rep == "object")
                for (o = rep.length, r = 0; r < o; r += 1)
                    typeof rep[r] == "string" && (e = rep[r], u = str(e, i), u && f.push(quote(e) + (gap ? ": " : ":") + u));
            else
                for (e in i)
                    Object.prototype.hasOwnProperty.call(i, e) && (u = str(e, i), u && f.push(quote(e) + (gap ? ": " : ":") + u));
            return u = f.length === 0 ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + s + "}" : "{" + f.join(",") + "}", gap = s, u
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(n, t, i) {
        var r;
        if (gap = "", indent = "", typeof i == "number")
            for (r = 0; r < i; r += 1)
                indent += " ";
        else
            typeof i == "string" && (indent = i);
        if (rep = t, t && typeof t != "function" && (typeof t != "object" || typeof t.length != "number"))
            throw new Error("JSON.stringify");
        return str("", {
            "": n
        })
    });
    typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(n, t) {
            var r,
                u,
                i = n[t];
            if (i && typeof i == "object")
                for (r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u : delete i[r]);
            return reviver.call(n, t, i)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(n) {
            return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse");
    })
}();
$(document).ready(function() {
    for (var i, t, n = 0; n < document.forms.length; n++) {
        for (i = document.forms[n].getElementsByTagName("INPUT"), document.forms[n].aryActionInputs = [], t = 0; t < i.length; t++)
            i[t].type == "submit" && document.forms[n].aryActionInputs.push(i[t]);
        document.forms[n].aryActionInputs.length && $(document.forms[n]).bind("submit", function(n) {
            if (this.submitted != undefined) {
                var t = window.event || n;
                if (!this.submitted)
                    return;
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            } else
                this.submitted = !0
        })
    }
});
blnFormEnabled = !0;
FileUploadControl = Class.create();
FileUploadControl.prototype = {
    init: function(n) {
        var e,
            u,
            f,
            i,
            r,
            t,
            o;
        this.strInputId = n;
        this.strInputName = $("#" + this.strInputId).attr("name");
        try {
            e = document.createElement('<form enctype="multipart/form-data">')
        } catch (s) {
            e = document.createElement("FORM")
        }
        this.actionUrl = "?event=public.system.fileUpload&lKVal=";
        this.elmForm = e;
        this.elmForm.id = this.strInputId + "_upload_form";
        this.elmForm.method = "post";
        this.elmForm.enctype = "multipart/form-data";
        this.elmForm.action = this.actionUrl;
        this.elmForm.target = this.strInputId + "_upload_target";
        u = document.createElement("INPUT");
        u.type = "hidden";
        u.name = "input";
        u.value = this.strInputName;
        this.elmForm.appendChild(u);
        f = document.createElement("INPUT");
        f.type = "hidden";
        f.name = "callback";
        f.value = "window.parent.fileUploadControls." + this.strInputId + ".doComplete";
        this.elmForm.appendChild(f);
        i = document.createElement("INPUT");
        i.type = "hidden";
        i.id = this.strInputId + "_IDkeyType";
        i.name = "keyType";
        i.value = "";
        this.elmForm.appendChild(i);
        r = document.createElement("INPUT");
        r.type = "hidden";
        r.id = this.strInputId + "_IDkeyValue";
        r.name = "keyValue";
        r.value = "";
        this.elmForm.appendChild(r);
        $("#" + this.strInputId + "_div").appendTo($(this.elmForm));
        try {
            t = document.createElement('<iframe name="' + this.strInputId + '_upload_target">')
        } catch (s) {
            t = document.createElement("IFRAME")
        }
        t.id = this.strInputId + "_upload_target";
        t.name = this.strInputId + "_upload_target";
        t.src = "";
        t.style.display = "none";
        t.style.height = "0";
        t.style.width = "0";
        this.elmForm.appendChild(t);
        o = $("#" + this.strInputId + "_container").get(0);
        o.appendChild(this.elmForm);
        this.replacedInput = document.createElement("INPUT");
        this.replacedInput.type = "hidden";
        this.replacedInput.name = this.strInputName;
        this.replacedInput.id = this.strInputName + "_replacement";
        this.elmForm.parentNode.appendChild(this.replacedInput);
        $("#" + this.strInputId + "_label").append('<span style="display:none;" id="' + this.strInputId + '_spinner"><img src="/images/process.gif" alt="Please wait"><\/span>');
        this.elmSpinner = $("#" + this.strInputId + "_spinner")
    },
    doComplete: function(n, t) {
        n == "true" ? (this.replacedInput.value = t, this.markComplete()) : this.markFailed()
    },
    preventDefault: function(n) {
        n.preventDefault()
    },
    disableFileUpload: function(n) {
        $("#" + this.strInputId + "_div").addClass("file-upload-disabled");
        $("#" + this.strInputId).bind("click", this.preventDefault);
        n && this.elmSpinner.attr("style", "display=block;")
    },
    enableFileUpload: function(n) {
        $("#" + this.strInputId + "_div").removeClass("file-upload-disabled");
        $("#" + this.strInputId).unbind("click", this.preventDefault);
        n && this.elmSpinner.attr("style", "display:none;");
        var t = this.strInputId + "_removeLink";
        $("#" + t).removeClass("disabled");
        $("#" + t).attr("disabled", !1)
    },
    submitForm: function(n, t, i) {
        this.dtUploadStarted = new Date;
        var r = $("#" + this.strInputId + "_upload_target"),
            u = this.strInputId;
        $("#" + this.strInputId + "_IDkeyType").val(t);
        $("#" + this.strInputId + "_IDkeyValue").val(i);
        r.bind("load", function(n) {
            fileUploadControls[u].formLoaded(n)
        });
        try {
            this.elmForm.action = this.actionUrl + n;
            this.elmForm.submit()
        } catch (f) {
            alert("An error occurred as you have not selected a valid directory location for your application file(s).");
            this.markFailed();
            return
        }
        $("#" + this.strInputId).attr("disabled", !0)
    },
    formLoaded: function(n) {
        var t = n.target,
            u,
            i,
            f,
            r;
        (u = typeof t.contentDocument == "undefined" ? document.frames[t.name].document : t.contentDocument, i = u.getElementsByTagName("script"), i.length && (f = i[0], r = f.innerHTML.replace(/^\s+|\s+$/g, ""), r.length > 33 && r.substr(0, 33) == "window.parent.fileUploadControls.")) || alert("An error occurred uploading your file. Please check your internet connection and try again.")
    },
    markComplete: function(n) {
        n == null && (n = !1);
        this.elmSpinner.attr("style", "display:none;");
        n ? $(this.elmForm).hide() : $("#" + this.strInputId).attr("disabled", !0);
        FileUploadFormControl.markComplete(this.strInputId, this.replacedInput)
    },
    markFailed: function() {
        var t = !0,
            n;
        $("#" + this.replacedInput.form.name + "_upload_target").length != 0 && (logResponseEmptyError(this.replacedInput), t = !0);
        n = "An error occurred. Check the file size and try again.";
        t && (n = n + ' <a href="javascript:reinitialiseFileUploadFormControl(window.fileUploadFormControlCallback)">Click here to reset file uploads.<\/a>');
        this.elmSpinner.attr("style", "display:none;");
        $(this.elmForm).append('<p class="error">' + n + "<\/p>")
    },
    clear: function() {
        var n = navigator.appVersion.indexOf("MSIE") !== -1 ? parseInt(navigator.appVersion.split("MSIE")[1]) : !1,
            t = $("#" + this.strInputId);
        n && n === 10 && n && n === 10 && (t[0].type = "", t[0].type = "file");
        t.val("");
        t.next().find("span").html("No file chosen")
    }
};
fileUploadControls = {};
FileUploadFormControl = {
    init: function(n, t, i, r, u, f, e) {
        var c,
            o,
            l,
            a,
            s,
            h;
        for (this.callback = e, this.logKeyID = n, this.keyType = t, this.keyID = i, window.fileUploadFormControlCallback = e, c = r.split(","), o = $("#" + c[0]).get(0).form, o.arySubmits = [], l = u.split(","), s = 0; s < l.length; s++)
            a = $("#" + l[s]), o.arySubmits.push(a), a.bind("click", function(n) {
                FileUploadFormControl.registerClick(n)
            });
        for ($(o).bind("submit", function(n) {
            FileUploadFormControl.submitObserver(n)
        }), o.aryFiles = [], s = 0; s < c.length; s++)
            fileUploadControls[c[s]] = new FileUploadControl(c[s]), o.aryFiles.push(c[s]);
        if (o.arySubmittedFiles = o.aryFiles.slice(), f) {
            try {
                h = document.createElement('<iframe frameborder="0" name="' + o.name + '_upload_target">')
            } catch (v) {
                h = document.createElement("IFRAME")
            }
            h.id = o.name + "_upload_target";
            h.name = o.name + "_upload_target";
            h.src = "";
            h.style.display = "none";
            h.style.height = "0";
            h.style.width = "0";
            o.appendChild(h)
        }
        this.elmForm = o
    },
    registerClick: function(n) {
        var t = n.target;
        $("<input>", {
            type: "hidden",
            name: t.name,
            value: t.value
        }).appendTo("form")
    },
    submitObserver: function(n) {
        var i = window.event || n,
            t;
        for (i.preventDefault ? i.preventDefault() : i.returnValue = !1, t = 0; t < this.elmForm.arySubmits.length; t++)
            this.elmForm.arySubmits[t].addClass("btn-disabled"), this.elmForm.arySubmits[t].attr("disabled", !0);
        FileUploadFormControl.doSubmit(this.elmForm)
    },
    disableFileUpload: function(n) {
        var i,
            t,
            r;
        for (blnFormEnabled = !1, i = !1, t = 0; t < n.aryFiles.length; t++)
            r = $("#" + n.aryFiles[t]), i = r.val() ? !0 : !1, fileUploadControls[n.aryFiles[t]].disableFileUpload(i)
    },
    enableFileUpload: function(n) {
        var i,
            t,
            r;
        for (blnFormEnabled = !0, i = !1, t = 0; t < n.aryFiles.length; t++)
            r = $("#" + n.aryFiles[t]), i = r.val() ? !0 : !1, fileUploadControls[n.aryFiles[t]].enableFileUpload(i)
    },
    doSubmit: function(n) {
        for (var i, r = $("#" + this.keyID).val(), u = $("#" + this.logKeyID).val(), t = 0; t < n.aryFiles.length; t++)
            i = $("#" + n.aryFiles[t]), i.val() ? fileUploadControls[n.aryFiles[t]].submitForm(u, this.keyType, r) : fileUploadControls[n.aryFiles[t]].markComplete(!1)
    },
    markComplete: function(n, t) {
        var r = t.form,
            i,
            u,
            f;
        r.arySubmittedFiles.pop($.inArray(n, r.arySubmittedFiles));
        r.arySubmittedFiles.length == 0 && ($("#" + r.name + "_upload_target").length != 0 && (i = $("#" + r.name + "_upload_target").get(0), $("#iframeReplacement").length != 0 ? (u = $("#iframeReplacement").get(0), f = Element.getDimensions(u), i.style.width = f.width + "px", i.style.height = f.height + "px", u.style.display = "none") : (i.style.width = "422px", i.style.height = "140px", i.style.marginTop = "-200px", i.style.marginLeft = "240px"), i.style.border = "none", i.style.visibility = "visible"), this.callback ? this.callback() : r.submit())
    },
    clearAllUploads: function(n) {
        var i,
            t;
        if (blnFormEnabled)
            for (i = $("#" + n).get(0), $("#" + n)[0].reset(), t = 0; t < i.aryFiles.length; t++)
                fileUploadControls[i.aryFiles[t]].clear()
    },
    clearUpload: function(n, t) {
        if (blnFormEnabled) {
            var i = $("#" + n).get(0);
            fileUploadControls[i.aryFiles[t - 1]].clear()
        }
    }
};
window.reinitialiseFileUploadFormControl = function() {
    var n = "",
        e,
        i,
        t,
        u,
        f,
        r;
    blnFormEnabled = !0;
    $(".error").each(function() {
        $(this).remove()
    });
    for (e in fileUploadControls)
        i = fileUploadControls[e], t = $("#" + i.strInputId), i.enableFileUpload(t.length != 0), t.length != 0 && ($("#" + i.strInputId + "_div").removeClass("file-upload-disabled"), $("#" + i.strInputId).attr("disabled", !1), u = navigator.appVersion.indexOf("MSIE") !== -1 ? parseInt(navigator.appVersion.split("MSIE")[1]) : !1, u && u === 10 && u && u === 10 && (t[0].type = "", t[0].type = "file"), t.val(""), t.next().find("span").html("No file chosen")), f = $("#" + i.strInputName + "_replacement"), f.val("");
    for (n = f.get(0).form, n.arySubmittedFiles = n.aryFiles.slice(), r = 0; r < n.arySubmits.length; r++)
        $(n.arySubmits[r]).removeClass("btn-disabled"), $(n.arySubmits[r]).removeClass("disabled"), $(n.arySubmits[r].attr("disabled", !1))
};
var initCounter = function(n) {
        var t;
        clearTimeout(countDownClock);
        t = "";
        try {
            t = parseDateTime(n.responseText)
        } catch (f) {
            return responseErrFunc(), !1
        }
        var u = parseDateTime($("#form-CloseDateTime").val()),
            i = new Date,
            r = new Date(i.getTime() + (u - t));
        prep_countdown(r.getTime());
        r > i && setTimeout("getServerTime();", 1e4)
    },
    initCounter1 = function(n) {
        clearTimeout(countDownClock);
        var t = "";
        try {
            t = parseDateTime(n.responseText)
        } catch (i) {
            return responseErrFunc(), !1
        }
        setTimeout("getServerTime1();", 1e4)
    },
    responseErrFunc = function() {
        alert("An error occurred. Please check your internet connection and try again.");
        $("#warningText").html() != "" ? ($("#timer").attr("style", "display:none;"), $("#timer").html("")) : ($("#green-box").attr("style", "display:none;"), $("#green-box").html(""));
        $("#response-message").attr("style", "display:block;");
        $("#response-message").html("<p>An error occurred. Please check your internet connection and try again.<\/p>");
        disableLodgeButtons()
    };
reNonAscii = new RegExp("[^ -ÿ]", "g");
reWindows = new RegExp('[*|?|/|\\\\|<|>|:|"||]', "g");
processResponse = function(n) {
    $("#error-message").attr("style", "display:none;");
    $("#response-message").attr("style", "display:block;");
    responseArray = n.responseText.split("|");
    responseArray.length == 2 ? ($("#response-message").html(responseArray[0]), $("#form-LogOfGOApplicationAttemptUUID").val(responseArray[1]), setTimeout("submitResponseForm();", 12e3)) : $("#response-message").html("<p>The system was unable to create a log of this application. This may be due to temporary loss of your internet connection or a timeout. Please return to the Current Tender Detail View page and lodge your response again.<br/>If you continue to receive this message please contact the eTendering helpdesk.<\/p>");
    $("#response-message").focus();
    $("html, body").animate({
        scrollTop: $("#response-message").offset().top
    }, 800)
};
/*! v0.2.3 https://github.com/codekipple/conformity. Plugin adapted from this code:- http://codepen.io/micahgodbolt/details/FgqLc */
if (function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
}(function(n) {
    n.fn.conformity = function(t) {
        var f = {
                mode: "min-height"
            },
            s = n(this),
            u = 0,
            o = 0,
            r = [],
            i,
            e = 0;
        return t && n.extend(f, t), s.each(function() {
            if (i = n(this), f.mode === "min-height" ? i.height("auto").css("min-height", 0) : f.mode === "height" && i.height("auto"), e = i.offset().top, o != e) {
                for (currentDiv = 0; currentDiv < r.length; currentDiv++)
                    r[currentDiv].css(f.mode, u);
                r.length = 0;
                o = e;
                u = i.outerHeight();
                r.push(i)
            } else
                r.push(i), u = u < i.outerHeight() ? i.outerHeight() : u;
            for (currentDiv = 0; currentDiv < r.length; currentDiv++)
                r[currentDiv].css(f.mode, u)
        })
    }
}), $(document).ready(function(n) {
    n(".boxEQH").length && (".rBox" && n(".rBox").conformity(), ".boxEQH .box" && n(".boxEQH .box").conformity());
    var t = n(window).width();
    n(window).resize(function() {
        n(window).width() != t && (t = n(window).width(), n(".boxEQH").length && (".boxEQH .rBox" && n(".boxEQH .rBox").conformity(), ".boxEQH .box" && n(".boxEQH .box").conformity()))
    })
}), window.getCacheBuster = function() {
    return "&now=" + (new Date).getTime()
}, window.checkLogin = function(n) {
    var t = n.getResponseHeader("LoginPage");
    t && t !== "" && location.reload(t)
}, $("#bread-crumbs")) {
    arrBreadcrumbs = [{
        title: "Home",
        href: "event=public.home"
    }];
    function setBreadcrumb(n) {
        if ($.jStorage.storageAvailable()) {
            if (n.kb && $.jStorage.get("arrBreadcrumbs") !== null && (arrBreadcrumbs = $.jStorage.get("arrBreadcrumbs")), n.nu) {
                var t = arrBreadcrumbs[arrBreadcrumbs.length - 1],
                    i = n.t,
                    r = n.u;
                r !== t.href && i !== t.title && arrBreadcrumbs.push({
                    title: i,
                    href: r
                });
                arrBreadcrumbs.length > 4 && arrBreadcrumbs.shift()
            }
            $.jStorage.set("arrBreadcrumbs", arrBreadcrumbs)
        }
        arrBreadcrumbs[arrBreadcrumbs.length - 1].href == n.qs && arrBreadcrumbs.pop()
    }
    function renderBreadcrumb(n) {
        var u = 0,
            t = arrBreadcrumbs,
            i,
            r;
        for (t.length > 3 && (u = t.length - 3), i = u; i < t.length; i++)
            $("#bread-crumbs").append('<li ><a class="blue" href="./?' + t[i].href + '" title="' + $.trim(t[i].title) + '">' + $.trim(t[i].title) + "<\/a><\/li>");
        $("#bread-crumbs").append("<li>" + $.trim(n) + "<\/li>");
        $("#login-form").length && (r = "event=public.home", $.jStorage.storageAvailable() && $.jStorage.get("arrBreadcrumbs") !== null && (r = decodeHtml($.jStorage.get("arrBreadcrumbs")[$.jStorage.get("arrBreadcrumbs").length - 1].href)), $("#form-redirectString1").val(r), $("#form-redirectString2").val(r))
    }
}

