(function() {
    /**
   * @function CDE_TrkData
   * @class
   * @description Generates and updates a cookie in the browser, tracking various details at each page load.
   * @author Ash Durham
   */ this.CDE_TrkData = function() {
        /**
       * Define globals 
       */ /** 
       * List of Data Points. A defining function, prepended with "DP" should also reside in this class. formFill() function should also be updated to autofill Marketo fields.
       * @member {Array}
       */ this.cookieDataPoints = [
            'firstVisit',
            'referrerURL',
            'lastReferrerURL',
            'landingURL',
            'lastLandingURL',
            'lastViewedURL',
            'signupVar'
        ];
        /** 
       * Name of cookie
       * @member {string}
       */ this.cookieName = "_cdeTrkData";
        /** 
       * Expiry (in days) of cookie
       * @member {number}
       */ this.cookieDays = 365;
        /** 
       * Host name of cookie (populates automatically if not manually updated )
       * @member {string}
       */ this.cookieHost = false;
        /** 
       * Path of cookie
       * @member {string}
       */ this.cookiePath = escape("/");
        /** 
       * Data to be housed in cookie
       * @member {Object}
       */ this.cookieData = {
        };
        /**
       * Data Points 
       */ /**
       * @function DPfirstVisit
       * @description Defines the date of the users first visit to the website. If the value already exists, function returns the existing value.
       * @return {string} GMT Date string of the date and time the user first visits the website
       */ this.DPfirstVisit = function() {
            if (!this.cookieData.hasOwnProperty('firstVisit')) {
                var firstVisit = new Date;
                return firstVisit.toGMTString();
            } else return this.cookieData.firstVisit;
        };
        /**
       * @function DPreferrerURL
       * @description Defines the referrer URL of the users first visit to the website. If the value already exists, function returns the existing value.
       * @return {url} URL of the referring webpage
       */ this.DPreferrerURL = function() {
            if (!this.cookieData.hasOwnProperty('referrerURL')) return document.referrer;
            else return this.cookieData.referrerURL;
        };
        /**
       * @function DPlastReferrerURL
       * @description Defines the last external referrer URL of the users return visit to the website. If the value already exists and no external referrer is present, function returns the existing value.
       * @return {url} URL of the referring webpage
       */ this.DPlastReferrerURL = function() {
            if (document.referrer && document.referrer.indexOf(location.protocol + "//" + location.host) === -1) return document.referrer;
            else if (!this.cookieData.hasOwnProperty('lastReferrerURL')) return document.referrer;
            else return this.cookieData.lastReferrerURL;
        };
        /**
       * @function DPlastViewedURL
       * @description Defines the last viewed page the user saw on the website.
       * @return {url} URL of the referring webpage
       */ this.DPlastViewedURL = function() {
            return document.referrer;
        };
        /**
       * @function DPlandingURL
       * @description Defines the entry page the user came to for the first time seeing the website. If the value already exists, function returns the existing value.
       * @return {url} URL of the landing webpage
       */ this.DPlandingURL = function() {
            if (!this.cookieData.hasOwnProperty('landingURL')) return location.href;
            else return this.cookieData.landingURL;
        };
        /**
       * @function DPlastLandingURL
       * @description Defines the entry page the user came to for a return visit to the website from an external source. If the value already exists and no external referrer is present, function returns the existing value.
       * @return {url} URL of the landing webpage
       */ this.DPlastLandingURL = function() {
            if (document.referrer && document.referrer.indexOf(location.protocol + "//" + location.host) === -1) return location.href;
            else if (!this.cookieData.hasOwnProperty('lastLandingURL')) return location.href;
            else return this.cookieData.lastLandingURL;
        };
        /**
       * @function DPsignupVar
       * @description Defines the signup value on the current page. If the value is not set in the query string, the existing value is returned, if present.
       * @return {string} signup value
       */ this.DPsignupVar = function() {
            var currentSV = '';
            if (this.cookieData.hasOwnProperty('signupVar')) currentSV = this.cookieData.signupVar;
            var signupVar = this.getQuerystringParamByName("sv") || currentSV;
            return signupVar.replace(/[^a-z0-9]/gi, '');
        };
        console.log(this.cookieDataPoints);
        console.log('scumpt');
        /* 
       * Query String
       */ /**
       * @function getUTMParams
       * @description Obtains all variables and their values with keys that begin with 'utm_'
       * @return {Object} All keys and values found
       */ this.getUTMParams = function(url) {
            var vars = {
            };
            var parts = url.replace(/[?&]+(utm_[^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            // Add gclid as a custom UTM var given its accompanied by them
            var gclid = url.replace(/[?&]+(gclid)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars;
        };
        /**
       * @function getMarinParams
       * @description Obtains all variables and their values with keys
       * @return {Object} All keys and values found
       */ this.getMarinParams = function(url) {
            var vars = {
            };
            var values = url.replace(/[?&]+(mkwid)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars['mkwid'] || null;
        };
        /**
       * @function getQuerystringParamByName
       * @description Finds requested querystring and returns its value
       * @param {string} name - Name of querystring key
       * @return {string} Value of requested querystring variable
       */ this.getQuerystringParamByName = function(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        };
        /* 
       * Supporting data  
       */ /**
       * @function defineCookieHost
       * @description Defines the host name for the cookie
       * @return {string} host name for the cookies "domain" value
       */ this.defineCookieHost = function() {
            if (/^localhost(\:\d+)?$/.test(location.host)) return;
            else {
                var host = location.host;
                host = host.split('.');
                host = host.splice(host.length - 2, host.length).join('.');
                return escape("." + host);
            }
        };
        /**
       * @function isEmptyObj
       * @description Checks if the given object is empty
       * @param {Object} obj - Object to be checked
       * @return {boolean} confirmation of whether object is empty
       */ this.isEmptyObj = function(obj) {
            for(var prop in obj){
                if (obj.hasOwnProperty(prop)) return false;
            }
            return true;
        };
        /**
       * @function JSONparse
       * @description Checks if the given string is JSON and parses, otherwise returns string
       * @param {string} json - String to be checked
       * @return {Object|string|boolean} Depending the outcome, a parsed JSON object, the entered value or a false boolean will be returned
       */ this.JSONparse = function(json) {
            var parsed = false;
            try {
                parsed = JSON.parse(json);
                if (parsed && typeof parsed === "object") return parsed;
                else return json;
            } catch (e) {
                return json;
            }
            return parsed;
        };
        /**
       * @function countObj
       * @description Counts object values
       * @param {Object} obj - Object to be counted
       * @return {number} number of keys present in object
       */ this.countObj = function(obj) {
            var size = 0, key;
            for(key in obj)if (obj.hasOwnProperty(key)) size++;
            return size;
        };
        /**
       * @function extendObject
       * @description Merges two objects together, working the second into the first
       * @param {Object} obj - Object to be merged into
       * @param {Object} src - Object to be merged from
       * @return {Object} Merged object
       */ this.extendObject = function(obj, src) {
            for(var key in src)if (src.hasOwnProperty(key)) obj[key] = src[key];
            return obj;
        };
        /*
       * Cross browser base64 encoder/decoder
       */ var Base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while(f < e.length){
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) u = a = 64;
                    else if (isNaN(i)) a = 64;
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
                }
                return t;
            },
            decode: function(e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while(f < e.length){
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) t = t + String.fromCharCode(r);
                    if (a != 64) t = t + String.fromCharCode(i);
                }
                t = Base64._utf8_decode(t);
                return t;
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                var t = "";
                for(var n = 0; n < e.length; n++){
                    var r = e.charCodeAt(n);
                    if (r < 128) t += String.fromCharCode(r);
                    else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128);
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128);
                    }
                }
                return t;
            },
            _utf8_decode: function(e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while(n < e.length){
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2;
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            }
        };
        /**
       * @function encode
       * @description Encodes a given string
       * @param {string} str - String to be encoded
       * @return {string} Encoded string
       */ this.encode = function(str) {
            if (window.btoa) return window.btoa(unescape(encodeURIComponent(str)));
            else return Base64.encode(unescape(encodeURIComponent(str)));
        };
        /**
       * @function decode
       * @description Decodes an encoded string
       * @param {string} str - String to be decoded
       * @return {string} Decoded string
       */ this.decode = function(str) {
            try {
                if (window.atob) return decodeURIComponent(escape(window.atob(str)));
                else return decodeURIComponent(escape(Base64.decode(str)));
            } catch (e) {
                return str;
            }
        };
        /**
       * Cookie control 
       */ /**
       * @function processCookie
       * @description Obtains values from functions to populate the cookie with - creating or updating values if already defined, assigning any override value if provided
       * @param {Object} overrides - keys and values in this object will add/override values in the cookie
       */ this.processCookie = function(overrides) {
            var cookie = this.getCookie(this.cookieName);
            if (cookie && typeof cookie === "object") this.cookieData = cookie;
            if (typeof overrides === 'undefined') overrides = {
            };
            for(var dp = 0; dp < this.cookieDataPoints.length; dp++){
                var func = "DP" + this.cookieDataPoints[dp];
                this.cookieData[this.cookieDataPoints[dp]] = this[func]();
            }
            this.cookieData = this.extendObject(this.cookieData, overrides);
            this.setCookie();
        };
        /**
       * @function getCookie
       * @description Obtains existing cookie. Cookie value assumed to be encoded
       * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
       * @return {Object|string} values stored in cookie
       * @todo add in checks to ensure value is able to be decoded and parsed as JSON
       */ this.getCookie = function(cookieName) {
            if (typeof cookieName === "undefined") cookieName = this.cookieName;
            var results = document.cookie.match(cookieName + '=(.*?)(;|$)');
            if (results) {
                var cookieValue = results[1];
                cookieValue = this.decode(cookieValue);
                cookieValue = this.JSONparse(cookieValue);
                return cookieValue;
            } else return null;
        };
        /**
       * @function setCookie
       * @description Sets cookie with defined values to the browser. Object is stringified into JSON and encoded for storage.
       * @param {Object} data - key/value items to be stored in cookie
       * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
       * @param {boolean} encodeData - By default data in cookies are encoded unless set to false
       */ this.setCookie = function(data, cookieName, encodeData) {
            if (typeof cookieName === "undefined") cookieName = this.cookieName;
            if (typeof encodeData === "undefined") encodeData = true;
            if (typeof data === "undefined") data = this.cookieData;
            if (this.cookieHost === false) this.cookieHost = this.defineCookieHost();
            if (typeof data === "object") data = JSON.stringify(data);
            if (encodeData) data = this.encode(data);
            var cookie_string = cookieName + "=" + data;
            var expires = new Date();
            expires.setDate(expires.getDate() + this.cookieDays);
            cookie_string += "; expires=" + expires.toGMTString();
            cookie_string += "; path=" + this.cookiePath;
            cookie_string += "; domain=" + this.cookieHost;
            document.cookie = cookie_string;
        };
        /**
       * @function deleteCookie
       * @description Delete cookie
       * @param {string} cookieName - Name of cookie to pull data from. If omitted, will use preset value
       */ this.deleteCookie = function(cookieName) {
            if (typeof cookieName === "undefined") cookieName = this.cookieName;
            var cookie_string = cookieName + "=";
            if (this.cookieHost === false) this.cookieHost = this.defineCookieHost();
            var expires = new Date();
            expires.setDate(expires.getDate() - 9999);
            cookie_string += "; expires=" + expires.toGMTString();
            cookie_string += "; path=" + this.cookiePath;
            cookie_string += "; domain=" + this.cookieHost;
            document.cookie = cookie_string;
        };
        /**
       * Form automation
       */ /**
       * @function mktoFormFill
       * @description If Marketo form fields are present, look for expected hidden fields and automatically populate them
       */ this.mktoFormFill = function() {
            var CDE_data = this.getCookie();
            var $this = this;
            if (typeof MktoForms2 === "undefined") return false;
            else MktoForms2.onFormRender(function() {
                // signupVar
                var signvarElements = document.getElementsByName('SV_Value__c');
                for(var i = 0; i < signvarElements.length; i++)if (signvarElements[i] && !signvarElements[i].value) signvarElements[i].value = CDE_data.signupVar;
                // referrerURL
                var ref_urls = document.getElementsByName('Referral_URL__c');
                for(var i = 0; i < ref_urls.length; i++)if (ref_urls[i] !== null) ref_urls[i].value = encodeURIComponent(CDE_data.referrerURL);
                // landingURL
                var lp_urls = document.getElementsByName('Landing_Page_URL__c');
                for(var i = 0; i < lp_urls.length; i++)if (lp_urls[i] !== null) lp_urls[i].value = encodeURIComponent(CDE_data.landingURL);
                // lastReferrerURL
                var last_ref_urls = document.getElementsByName('Last_Referral_URL__c');
                for(var i = 0; i < last_ref_urls.length; i++)if (last_ref_urls[i] !== null) last_ref_urls[i].value = encodeURIComponent(CDE_data.lastReferrerURL);
                // lastLandingURL
                var last_lp_urls = document.getElementsByName('Last_Landing_Page_URL__c');
                for(var i = 0; i < last_lp_urls.length; i++)if (last_lp_urls[i] !== null) last_lp_urls[i].value = encodeURIComponent(CDE_data.lastLandingURL);
                // lastLandingURL
                var last_lpc_urls = document.getElementsByName('Last_Landing_Page_URL_Contact__c');
                for(var i = 0; i < last_lpc_urls.length; i++)if (last_lpc_urls[i] != null) last_lpc_urls[i].value = encodeURIComponent(CDE_data.lastLandingURL);
                // lastViewedURL
                var last_viewed_urls = document.getElementsByName('Last_Viewed_Page_URL__c');
                for(var i = 0; i < last_viewed_urls.length; i++)if (last_viewed_urls[i] != null) last_viewed_urls[i].value = encodeURIComponent(CDE_data.lastViewedURL);
                // Parse out UTM vars from Landing URL and populate
                var cmLandingUTMs = $this.getUTMParams(CDE_data.landingURL);
                for(var param in cmLandingUTMs){
                    var raw = param.replace("utm_", "");
                    var field_name = '';
                    if (raw !== 'gclid') field_name = 'UTM_';
                    field_name += raw.charAt(0).toUpperCase() + raw.slice(1) + "__c";
                    field_name = field_name.replace("Campaign_id", "Campaign_Id");
                    var fields = document.getElementsByName(field_name);
                    for(var i = 0; i < fields.length; i++)if (cmLandingUTMs.hasOwnProperty(param) && fields[i] !== null) fields[i].value = encodeURIComponent(cmLandingUTMs[param]);
                }
                // Parse out UTM vars from Last Landing URL and populate
                var cmLastLandingUTMs = $this.getUTMParams(CDE_data.lastLandingURL);
                for(var param in cmLastLandingUTMs){
                    var raw = param.replace("utm_", "");
                    var field_name = '';
                    if (raw !== 'gclid') field_name = 'Last_UTM_';
                    field_name += raw.charAt(0).toUpperCase() + raw.slice(1) + "__c";
                    field_name = field_name.replace("Campaign_id", "Campaign_Id");
                    var fields = document.getElementsByName(field_name);
                    for(var i = 0; i < fields.length; i++)if (cmLastLandingUTMs.hasOwnProperty(param) && fields[i] !== null) fields[i].value = encodeURIComponent(cmLastLandingUTMs[param]);
                }
                // Parse out Marin KW ID var from URLs and populate
                var cmLandingMarin = $this.getMarinParams(CDE_data.landingURL);
                var cmLastLandingMarin = $this.getMarinParams(CDE_data.lastLandingURL);
                var marin_kwid = document.getElementsByName('Marin_KWID__c');
                var mkwid = cmLandingMarin || cmLastLandingMarin || null;
                if (marin_kwid.length === 1 && mkwid !== null) marin_kwid[0].value = encodeURIComponent(mkwid);
            });
        };
        /**
       * @function waitForMkto
       * @description Watch page and wait for a Marketo form to be present in DOM. Once found, run form fill function and disconnect.
       * @todo Handle the event of the page not finding a Marketo and disconnect accordingly to potentially prevent memory leaks and/or CPU load. From all research, shouldn't be a problem however need to monitor.
       */ this.waitForMkto = function() {
            var $this = this;
            var observer = new MutationObserver(function(mutations) {
                for(var i = 0; i < mutations.length; i++){
                    for(var j = 0; j < mutations[i].addedNodes.length; j++)if (typeof mutations[i].addedNodes[j].matches !== "undefined" && mutations[i].addedNodes[j].matches('form.mktoForm')) {
                        var complete = $this.mktoFormFill();
                        if (complete) observer.disconnect();
                    }
                }
            });
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        };
        /**
       * Legacy handling
       */ /**
       * @function cmCookieData
       * @description Handling existing CM cookie data and reformat into current cookie
       */ this.cmCookieData = function() {
            var cookieData = this.getCookie("CM-Ref");
            if (cookieData) {
                cookieData = unescape(cookieData).split('|');
                this.cookieData.referrerURL = cookieData[0];
                this.cookieData.firstVisit = cookieData[1];
                this.cookieData.landingURL = cookieData[2];
                this.cookieData.signupVar = cookieData[3];
                this.cookieData.lastReferrerURL = cookieData[4];
                this.cookieData.lastLandingURL = cookieData[5];
                this.setCookie(cookieData[6], 'CM-currency', false);
                this.deleteCookie("CM-Ref");
            }
        };
        /**
       * Action functions
       */ this.cmCookieData();
        this.processCookie();
        this.waitForMkto();
    };
})();
var CDE_TrkData = new CDE_TrkData();

//# sourceMappingURL=index.579125c3.js.map
