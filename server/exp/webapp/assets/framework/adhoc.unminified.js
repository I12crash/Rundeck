//! moment.js
//! version : 2.14.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(v(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;c>b;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]}function fa(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null):(e=sd.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:(e=sd.call(this._longMonthsParse,g),-1!==e?e:null)):(e=sd.call(this._longMonthsParse,g),-1!==e?e:(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){
// test the regex
if(e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;24>b;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function Fa(a){return this._weekdaysShort[a.day()]}function Ga(a){return this._weekdaysMin[a.day()]}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){
// test the regex
if(e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;7>b;b++)c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;7>b;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&-2===l(a).overflow&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(Yd>b||b>$d)&&(b=$d),l(a)._overflowWeeks&&-1===b&&(b=de),l(a)._overflowWeekday&&-1===b&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;c>b;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;c>b;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(f+=l(b).charsLeftOver,f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||d>f)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}
// FORMATTING
function xb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function yb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function zb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Ab(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Bb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=yb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ab(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Mb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ab(this):null!=b?this:NaN}function Cb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Db(a){return this.utcOffset(0,a)}function Eb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ab(this),"m")),this}function Fb(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(yb(Sd,this._i)),this}function Gb(a){return this.isValid()?(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Hb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ib(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Jb(){return this.isValid()?!this._isUTC:!1}function Kb(){return this.isValid()?this._isUTC:!1}function Lb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Mb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(g[ce])*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Nb(g[2],c),M:Nb(g[3],c),w:Nb(g[4],c),d:Nb(g[5],c),h:Nb(g[6],c),m:Nb(g[7],c),s:Nb(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Pb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Nb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Ob(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Pb(a,b){var c;return a.isValid()&&b.isValid()?(b=zb(b,a),a.isBefore(b)?c=Ob(a,b):(c=Ob(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Qb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Mb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=Qb(c._days),h=Qb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=zb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function Xb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return this.isValid()&&d.isValid()?(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=zb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Mb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Mb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Mb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Mb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||1>=f&&["m"]||f<kf.m&&["mm",f]||1>=g&&["h"]||g<kf.h&&["hh",g]||1>=h&&["d"]||h<kf.d&&["dd",h]||1>=i&&["M"]||i<kf.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a?(jf=a,!0):!1}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0===kf[a]?!1:void 0===b?kf[a]:(kf[a]=b,!0)}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);a=s(d/60),b=s(a/60),d%=60,a%=60,c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),I("month","M"),L("month",8),Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};xb("Z",":"),xb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=yb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Mb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Bb,Re.utc=Db,Re.local=Eb,Re.parseZone=Fb,Re.hasAlignedHourOffset=Gb,Re.isDST=Hb,Re.isLocal=Jb,Re.isUtcOffset=Kb,Re.isUtc=Lb,Re.isUTC=Lb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Cb),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ib);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.14.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Mb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});
/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require moment.min

 var MomentUtil =(function(){
     return {

    duration : function (start, end) {
        return (end?moment(end):moment()).diff(moment(start));
    },

    formatTime : function (text, format) {
        var time = moment.isMoment(text) ? text : moment(text);
        if (text && time.isValid()) {
            return time.format(format);
        } else {
            return '';
        }
    },
         formatTimeUTC: function (text, format) {
             "use strict";
             return MomentUtil.formatTime(moment.utc(text), format);
         },
    formatTimeSimple : function (text) {
        return MomentUtil.formatTime(text, 'h:mm:ss a');
    },
         formatTimeSimpleUTC: function (text) {
             return MomentUtil.formatTimeUTC(text, 'h:mm:ss a');
         },
    formatTimeAtDate : function (text) {
        var time = moment.isMoment(text) ? text : moment(text);
        if (!text || !time.isValid()) {
            return '';
        }
        var now = moment();
        var ms = now.diff(time);
        var since = moment.duration(ms);
        if (since.asDays() < 1 && now.month() == time.month()) {
            //same date
            return time.format('h:mm a');
        }
        if (since.asDays() < 1 && now.month() != time.month()) {
            //within a day
            return time.format('h:mm a');
        } else if (since.asWeeks() < 1) {
            return time.format('ddd h:mm a');
        } else if (time.year() != now.year()) {
            return time.format('MMM Do YYYY h a');
        } else {
            return time.format('M/D ha');
        }
    },
         formatTimeAtDateUTC: function (text) {
             "use strict";

             return MomentUtil.formatTimeAtDate(moment.utc(text));
         },
    formatDurationSimple : function (ms) {
        if (ms < 0) {
            return '';
        }
        var duration = moment.duration(ms);
        var y = 0;
        if (duration.asYears() >= 1) {
            y = Math.floor(duration.asYears());
            duration = duration.subtract(y, 'years');
        }
        var d = 0 ;
        if(duration.asDays()>=1.0){
            d = Math.floor(duration.asDays());
            duration = duration.subtract(d,'days');
        }
        var m = duration.minutes();
        var s = duration.seconds();
        return (y>0?y+'y ':'') + (d>0?d+'d ':'') + duration.hours() + '.' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    },
    formatDurationHumanize : function (ms) {
        if (ms < 0) {
            return '';
        }
        var duration = moment.duration(ms);
        var valarr = [];
        if (duration.days() > 0) {
            valarr.push(duration.days() + 'd');
        }
        if (duration.hours() > 0) {
            valarr.push(duration.hours() + 'h');
        }
        if (duration.minutes() > 0) {
            valarr.push(duration.minutes() + 'm');
        }
        if (duration.seconds() > 0) {
            var s = duration.seconds();
            if (duration.milliseconds() > 0) {
                s++;
            }
            valarr.push(s + 's');
        } else if (ms < 1000) {
            valarr.push('0s');
        }
        return valarr.join(' ');
    },
    formatDurationMomentHumanize : function (ms) {
        if (ms < 0) {
            return '';
        }
        var duration = moment.duration(ms);
        return duration.humanize();
    }
};
})();

/*!
 * Knockout JavaScript library v3.4.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),u=x.document,M=x.navigator,v=x.jQuery,F=x.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in T?a===c:!1}function U(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function V(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function W(a,
c){c&&c!==I?"beforeChange"===c?this.Kb(a):this.Ha(a,c):this.Lb(a)}function X(a,c){null!==c&&c.k&&c.k()}function Y(a,c){var d=this.Hc,e=d[s];e.R||(this.lb&&this.Ma[c]?(d.Pb(c,a,this.Ma[c]),this.Ma[c]=null,--this.lb):e.r[c]||d.Pb(c,a,e.s?{ia:a}:d.uc(a)))}function K(b,c,d,e){a.d[b]={init:function(b,g,k,l,m){var h,r;a.m(function(){var q=a.a.c(g()),p=!d!==!q,A=!r;if(A||c||p!==h)A&&a.va.Aa()&&(r=a.a.ua(a.f.childNodes(b),!0)),p?(A||a.f.da(b,a.a.ua(r)),a.eb(e?e(m,q):m,b)):a.f.xa(b),h=p},null,{i:b});return{controlsDescendantBindings:!0}}};
a.h.ta[b]=!1;a.f.Z[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.G=function(a,c,d){a[c]=d};a.version="3.4.0";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var h=b[c].match(r)||
[];a.a.q(d.match(r),function(b){a.a.pa(h,b,e)});b[c]=h.join(" ")}var f={__proto__:[]}instanceof Array,g="function"===typeof Symbol,k={},l={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(k,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},h=u&&function(){for(var a=3,b=u.createElement("div"),c=
b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),r=/\S+/g;return{cc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],q:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Sb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];
return null},La:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Tb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},fb:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ka:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ra:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},pa:function(b,c,d){var e=
a.a.o(a.a.zb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},ka:f,extend:c,Xa:d,Ya:f?d:c,D:b,Ca:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},ob:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},jc:function(b){b=a.a.V(b);for(var c=(b[0]&&b[0].ownerDocument||u).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.$(b[d]));return c},ua:function(b,c){for(var d=0,e=b.length,h=[];d<e;d++){var m=b[d].cloneNode(!0);h.push(c?a.$(m):m)}return h},
da:function(b,c){a.a.ob(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},qc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],h=e.parentNode,m=0,l=c.length;m<l;m++)h.insertBefore(c[m],e);m=0;for(l=d.length;m<l;m++)a.removeNode(d[m])}},za:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),
c=c.nextSibling;a.push(d)}}return a},sc:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},$a:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},nd:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Mc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=
b;)a=a.parentNode;return!!a},nb:function(b){return a.a.Mc(b,b.ownerDocument.documentElement)},Qb:function(b){return!!a.a.Sb(b,a.a.nb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Wb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Wb(b),c)},$b:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},p:function(b,c,d){var e=a.a.Wb(d);d=h&&m[c];if(a.options.useOnlyNativeEvents||
d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var l=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,l);a.a.F.oa(b,function(){b.detachEvent(f,l)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else v(b).bind(c,e)},Da:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.A(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==
d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof u.createEvent)if("function"==typeof b.dispatchEvent)d=u.createEvent(l[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},c:function(b){return a.H(b)?
b():b},zb:function(b){return a.H(b)?b.t():b},bb:function(b,c,d){var h;c&&("object"===typeof b.classList?(h=b.classList[d?"add":"remove"],a.a.q(c.match(r),function(a){h.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Za:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.da(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Rc(b)},rc:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(u.createElement("<input name='"+
a.name+"'/>"),!1)}catch(c){}},Rc:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Nc:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},hd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},V:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Yb:function(a){return g?Symbol(a):a},rd:6===h,sd:7===h,C:h,ec:function(b,c){for(var d=a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},h=[],m=d.length-1;0<=m;m--)e(d[m])&&h.push(d[m]);return h},ed:function(b){return"string"==typeof b&&(b=a.a.$a(b))?F&&F.parse?F.parse(b):(new Function("return "+b))():null},Eb:function(b,c,d){if(!F||!F.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return F.stringify(a.a.c(b),c,d)},fd:function(c,d,e){e=e||{};var h=e.params||{},m=e.includeFields||this.cc,l=c;if("object"==typeof c&&"form"===a.a.A(c))for(var l=c.action,f=m.length-1;0<=f;f--)for(var g=a.a.ec(c,m[f]),k=g.length-1;0<=k;k--)h[g[k].name]=g[k].value;d=a.a.c(d);var r=u.createElement("form");r.style.display="none";r.action=l;r.method="post";for(var n in d)c=u.createElement("input"),c.type="hidden",c.name=n,c.value=a.a.Eb(a.a.c(d[n])),r.appendChild(c);b(h,function(a,b){var c=u.createElement("input");
c.type="hidden";c.name=a;c.value=b;r.appendChild(c)});u.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.q);a.b("utils.arrayFirst",a.a.Sb);a.b("utils.arrayFilter",a.a.Ka);a.b("utils.arrayGetDistinctValues",a.a.Tb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.fb);a.b("utils.arrayPushAll",a.a.ra);a.b("utils.arrayRemoveItem",a.a.La);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.cc);a.b("utils.getFormFields",a.a.ec);a.b("utils.peekObservable",a.a.zb);a.b("utils.postJson",a.a.fd);a.b("utils.parseJson",a.a.ed);a.b("utils.registerEventHandler",a.a.p);a.b("utils.stringifyJson",a.a.Eb);a.b("utils.range",a.a.hd);a.b("utils.toggleDomNodeCssClass",a.a.bb);a.b("utils.triggerEvent",a.a.Da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.pa);a.b("utils.setTextContent",a.a.Za);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var k=b[d];if(!k||"null"===k||!e[k]){if(!g)return n;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=
e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},I:function(){return c++ +d}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.F=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.F.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.I(),e={1:!0,8:!0,9:!0},
f={1:!0,9:!0};return{oa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},pc:function(c,e){var l=b(c,!1);l&&(a.a.La(l,e),0==l.length&&a.a.e.set(c,d,n))},$:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ra(d,b.getElementsByTagName("*"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.$(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};
a.$=a.a.F.$;a.removeNode=a.a.F.removeNode;a.b("cleanNode",a.$);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.F);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.F.oa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.F.pc);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},
g=8>=a.a.C;a.a.ma=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var h=e[0];h.parentNode&&11!==h.parentNode.nodeType;)h=h.parentNode;h.parentNode&&h.parentNode.removeChild(h)}}else{(e=d)||(e=u);var h=e.parentWindow||e.defaultView||x,r=a.a.$a(c).toLowerCase(),q=e.createElement("div"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p="ignored<div>"+p[1]+c+p[2]+"</div>";"function"==typeof h.innerShiv?q.appendChild(h.innerShiv(p)):(g&&e.appendChild(q),
q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.V(q.lastChild.childNodes)}return e};a.a.Cb=function(b,c){a.a.ob(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ma(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ma);a.b("utils.setHtml",a.a.Cb);a.M=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.M.lc(c.nodeValue);null!=f&&e.push({Lc:c,cd:f})}else if(1==c.nodeType)for(var f=
0,g=c.childNodes,k=g.length;f<k;f++)b(g[f],e)}var c={};return{wb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},xc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),
!0}finally{delete c[a]}},yc:function(c,e){var f=[];b(c,f);for(var g=0,k=f.length;g<k;g++){var l=f[g].Lc,m=[l];e&&a.a.ra(m,e);a.M.xc(f[g].cd,m);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},lc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.M);a.b("memoization.memoize",a.M.wb);a.b("memoization.unmemoize",a.M.xc);a.b("memoization.parseMemoText",a.M.lc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.M.yc);a.Y=function(){function b(){if(e)for(var b=
e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.$b(Error("'Too much recursion' after processing "+c+" task groups."));break}b=e}try{m()}catch(h){a.a.$b(h)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=u.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):u&&"onreadystatechange"in u.createElement("script")?function(a){var b=u.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;u.documentElement.removeChild(b);b=null;a()};u.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Wa:function(b){e||a.Y.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},md:b}}();a.b("tasks",a.Y);a.b("tasks.schedule",a.Y.Wa);a.b("tasks.runEarly",a.Y.md);a.ya={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);
d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.cb=!1;f="notifyWhenChangesStop"==e?V:U;a.Ta(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.cb||(b.cb=!0,b.Ta(function(c){var e;return function(){a.Y.cancel(e);e=a.Y.Wa(c);b.notifySubscribers(n,"dirty")}}))},notify:function(a,c){a.equalityComparer=
"always"==c?null:J}};var T={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.ya);a.vc=function(b,c,d){this.ia=b;this.gb=c;this.Kc=d;this.R=!1;a.G(this,"dispose",this.k)};a.vc.prototype.k=function(){this.R=!0;this.Kc()};a.J=function(){a.a.Ya(this,D);D.rb(this)};var I="change",D={rb:function(a){a.K={};a.Nb=1},X:function(b,c,d){var e=this;d=d||I;var f=new a.vc(e,c?b.bind(c):b,function(){a.a.La(e.K[d],f);e.Ia&&e.Ia(d)});e.sa&&e.sa(d);e.K[d]||(e.K[d]=[]);e.K[d].push(f);return f},notifySubscribers:function(b,
c){c=c||I;c===I&&this.zc();if(this.Pa(c))try{a.l.Ub();for(var d=this.K[c].slice(0),e=0,f;f=d[e];++e)f.R||f.gb(b)}finally{a.l.end()}},Na:function(){return this.Nb},Uc:function(a){return this.Na()!==a},zc:function(){++this.Nb},Ta:function(b){var c=this,d=a.H(c),e,f,g;c.Ha||(c.Ha=c.notifySubscribers,c.notifySubscribers=W);var k=b(function(){c.Mb=!1;d&&g===c&&(g=c());e=!1;c.tb(f,g)&&c.Ha(f=g)});c.Lb=function(a){c.Mb=e=!0;g=a;k()};c.Kb=function(a){e||(f=a,c.Ha(a,"beforeChange"))}},Pa:function(a){return this.K[a]&&
this.K[a].length},Sc:function(b){if(b)return this.K[b]&&this.K[b].length||0;var c=0;a.a.D(this.K,function(a,b){"dirty"!==a&&(c+=b.length)});return c},tb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.ya[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.G(D,"subscribe",D.X);a.G(D,"extend",D.extend);a.G(D,"getSubscriptionsCount",D.Sc);a.a.ka&&a.a.Xa(D,Function.prototype);a.J.fn=D;a.hc=function(a){return null!=
a&&"function"==typeof a.X&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.J);a.b("isSubscribable",a.hc);a.va=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Ub:b,end:c,oc:function(b){if(e){if(!a.hc(b))throw Error("Only subscribable things can act as dependencies");e.gb.call(e.Gc,b,b.Cc||(b.Cc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Aa:function(){if(e)return e.m.Aa()},Sa:function(){if(e)return e.Sa}}}();a.b("computedContext",
a.va);a.b("computedContext.getDependenciesCount",a.va.Aa);a.b("computedContext.isInitial",a.va.Sa);a.b("ignoreDependencies",a.qd=a.l.w);var E=a.a.Yb("_latestValue");a.N=function(b){function c(){if(0<arguments.length)return c.tb(c[E],arguments[0])&&(c.ga(),c[E]=arguments[0],c.fa()),this;a.l.oc(c);return c[E]}c[E]=b;a.a.ka||a.a.extend(c,a.J.fn);a.J.fn.rb(c);a.a.Ya(c,B);a.options.deferUpdates&&a.ya.deferred(c,!0);return c};var B={equalityComparer:J,t:function(){return this[E]},fa:function(){this.notifySubscribers(this[E])},
ga:function(){this.notifySubscribers(this[E],"beforeChange")}};a.a.ka&&a.a.Xa(B,a.J.fn);var H=a.N.gd="__ko_proto__";B[H]=a.N;a.Oa=function(b,c){return null===b||b===n||b[H]===n?!1:b[H]===c?!0:a.Oa(b[H],c)};a.H=function(b){return a.Oa(b,a.N)};a.Ba=function(b){return"function"==typeof b&&b[H]===a.N||"function"==typeof b&&b[H]===a.B&&b.Vc?!0:!1};a.b("observable",a.N);a.b("isObservable",a.H);a.b("isWriteableObservable",a.Ba);a.b("isWritableObservable",a.Ba);a.b("observable.fn",B);a.G(B,"peek",B.t);a.G(B,
"valueHasMutated",B.fa);a.G(B,"valueWillMutate",B.ga);a.la=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.N(b);a.a.Ya(b,a.la.fn);return b.extend({trackArrayChanges:!0})};a.la.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.H(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ga(),d.push(g),c.splice(f,1),f--)}d.length&&
this.fa();return d},removeAll:function(b){if(b===n){var c=this.t(),d=c.slice(0);this.ga();c.splice(0,c.length);this.fa();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.H(b)?function(a){return a===b}:b;this.ga();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.fa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=
this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ga(),this.t()[d]=c,this.fa())}};a.a.ka&&a.a.Xa(a.la.fn,a.N.fn);a.a.q("pop push reverse shift sort splice unshift".split(" "),function(b){a.la.fn[b]=function(){var a=this.t();this.ga();this.Vb(a,b,arguments);var d=a[b].apply(a,arguments);this.fa();return d===a?this:d}});a.a.q(["slice"],function(b){a.la.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.la);a.ya.trackArrayChanges=function(b,
c){function d(){if(!e){e=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==I||++k;return c.apply(this,arguments)};var d=[].concat(b.t()||[]);f=null;g=b.X(function(c){c=[].concat(c||[]);if(b.Pa("arrayChange")){var e;if(!f||1<k)f=a.a.ib(d,c,b.hb);e=f}d=c;f=null;k=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.hb={};c&&"object"==typeof c&&a.a.extend(b.hb,c);b.hb.sparse=!0;if(!b.Vb){var e=!1,f=null,g,k=0,l=b.sa,m=b.Ia;b.sa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};
b.Ia=function(a){m&&m.call(b,a);"arrayChange"!==a||b.Pa("arrayChange")||(g.k(),e=!1)};b.Vb=function(b,c,d){function m(a,b,c){return l[l.length]={status:a,value:b,index:c}}if(e&&!k){var l=[],g=b.length,t=d.length,G=0;switch(c){case "push":G=g;case "unshift":for(c=0;c<t;c++)m("added",d[c],G+c);break;case "pop":G=g-1;case "shift":g&&m("deleted",b[G],G);break;case "splice":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===t?g:Math.min(c+(d[1]||0),g),t=c+t-2,G=Math.max(g,t),P=[],n=[],Q=2;c<G;++c,
++Q)c<g&&n.push(m("deleted",b[c],c)),c<t&&P.push(m("added",d[Q],c));a.a.dc(n,P);break;default:return}f=l}}}};var s=a.a.Yb("_state");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.pb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.l.oc(e);(g.S||g.s&&e.Qa())&&e.aa();return g.T}"object"===typeof b?d=b:(d=d||{},b&&(d.read=
b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={T:n,S:!0,Ra:!1,Fb:!1,R:!1,Va:!1,s:!1,jd:d.read,pb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,wa:d.disposeWhen||d.wa,mb:null,r:{},L:0,bc:null};e[s]=g;e.Vc="function"===typeof f;a.a.ka||a.a.extend(e,a.J.fn);a.J.fn.rb(e);a.a.Ya(e,z);d.pure?(g.Va=!0,g.s=!0,a.a.extend(e,$)):d.deferEvaluation&&a.a.extend(e,aa);a.options.deferUpdates&&a.ya.deferred(e,!0);g.i&&(g.Fb=!0,g.i.nodeType||
(g.i=null));g.s||d.deferEvaluation||e.aa();g.i&&e.ba()&&a.a.F.oa(g.i,g.mb=function(){e.k()});return e};var z={equalityComparer:J,Aa:function(){return this[s].L},Pb:function(a,c,d){if(this[s].Va&&c===this)throw Error("A 'pure' computed must not be called recursively");this[s].r[a]=d;d.Ga=this[s].L++;d.na=c.Na()},Qa:function(){var a,c,d=this[s].r;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],c.ia.Uc(c.na)))return!0},bd:function(){this.Fa&&!this[s].Ra&&this.Fa()},ba:function(){return this[s].S||0<this[s].L},
ld:function(){this.Mb||this.ac()},uc:function(a){if(a.cb&&!this[s].i){var c=a.X(this.bd,this,"dirty"),d=a.X(this.ld,this);return{ia:a,k:function(){c.k();d.k()}}}return a.X(this.ac,this)},ac:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].bc),this[s].bc=a.a.setTimeout(function(){b.aa(!0)},c)):b.Fa?b.Fa():b.aa(!0)},aa:function(b){var c=this[s],d=c.wa;if(!c.Ra&&!c.R){if(c.i&&!a.a.nb(c.i)||d&&d()){if(!c.Fb){this.k();return}}else c.Fb=!1;c.Ra=!0;try{this.Qc(b)}finally{c.Ra=!1}c.L||
this.k()}},Qc:function(b){var c=this[s],d=c.Va?n:!c.L,e={Hc:this,Ma:c.r,lb:c.L};a.l.Ub({Gc:e,gb:Y,m:this,Sa:d});c.r={};c.L=0;e=this.Pc(c,e);this.tb(c.T,e)&&(c.s||this.notifySubscribers(c.T,"beforeChange"),c.T=e,c.s?this.zc():b&&this.notifySubscribers(c.T));d&&this.notifySubscribers(c.T,"awake")},Pc:function(b,c){try{var d=b.jd;return b.pb?d.call(b.pb):d()}finally{a.l.end(),c.lb&&!b.s&&a.a.D(c.Ma,X),b.S=!1}},t:function(){var a=this[s];(a.S&&!a.L||a.s&&this.Qa())&&this.aa();return a.T},Ta:function(b){a.J.fn.Ta.call(this,
b);this.Fa=function(){this.Kb(this[s].T);this[s].S=!0;this.Lb(this)}},k:function(){var b=this[s];!b.s&&b.r&&a.a.D(b.r,function(a,b){b.k&&b.k()});b.i&&b.mb&&a.a.F.pc(b.i,b.mb);b.r=null;b.L=0;b.R=!0;b.S=!1;b.s=!1;b.i=null}},$={sa:function(b){var c=this,d=c[s];if(!d.R&&d.s&&"change"==b){d.s=!1;if(d.S||c.Qa())d.r=null,d.L=0,d.S=!0,c.aa();else{var e=[];a.a.D(d.r,function(a,b){e[b.Ga]=a});a.a.q(e,function(a,b){var e=d.r[a],l=c.uc(e.ia);l.Ga=b;l.na=e.na;d.r[a]=l})}d.R||c.notifySubscribers(d.T,"awake")}},
Ia:function(b){var c=this[s];c.R||"change"!=b||this.Pa("change")||(a.a.D(c.r,function(a,b){b.k&&(c.r[a]={ia:b.ia,Ga:b.Ga,na:b.na},b.k())}),c.s=!0,this.notifySubscribers(n,"asleep"))},Na:function(){var b=this[s];b.s&&(b.S||this.Qa())&&this.aa();return a.J.fn.Na.call(this)}},aa={sa:function(a){"change"!=a&&"beforeChange"!=a||this.t()}};a.a.ka&&a.a.Xa(z,a.J.fn);var R=a.N.gd;a.m[R]=a.N;z[R]=a.m;a.Xc=function(b){return a.Oa(b,a.m)};a.Yc=function(b){return a.Oa(b,a.m)&&b[s]&&b[s].Va};a.b("computed",a.m);
a.b("dependentObservable",a.m);a.b("isComputed",a.Xc);a.b("isPureComputed",a.Yc);a.b("computed.fn",z);a.G(z,"peek",z.t);a.G(z,"dispose",z.k);a.G(z,"isActive",z.ba);a.G(z,"getDependenciesCount",z.Aa);a.nc=function(b,c){if("function"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b("pureComputed",a.nc);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof
Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};g.save(a,k);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var h=g.get(d);k[c]=h!==n?h:b(d,f,g)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.Ib=[]}a.wc=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
return b(c,function(b){for(var c=0;a.H(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.wc(b);return a.a.Eb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,b);0<=d?this.Ib[d]=c:(this.keys.push(b),this.Ib.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Ib[b]:n}}})();a.b("toJS",a.wc);a.b("toJSON",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.xb):7>=a.a.C?b.getAttributeNode("value")&&
b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ha:function(b,c,d){switch(a.a.A(b)){case "option":switch(typeof c){case "string":a.a.e.set(b,a.d.options.xb,n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.xb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||
null===c)c=n;for(var e=-1,f=0,g=b.options.length,k;f<g;++f)if(k=a.j.u(b.options[f]),k==c||""==k&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ha);a.h=function(){function b(b){b=a.a.$a(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,k=[],p=0;if(d){d.push(",");for(var A=0,y;y=d[A];++A){var t=y.charCodeAt(0);
if(44===t){if(0>=p){c.push(r&&k.length?{key:r,value:k.join("")}:{unknown:r||k.join("")});r=p=0;k=[];continue}}else if(58===t){if(!p&&!r&&1===k.length){r=k.pop();continue}}else 47===t&&A&&1<y.length?(t=d[A-1].match(f))&&!g[t[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(","),A=-1,y="/"):40===t||123===t||91===t?++p:41===t||125===t||93===t?--p:r||k.length||34!==t&&39!==t||(y=y.slice(1,-1));k.push(y)}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},k={};return{ta:[],ea:k,yb:b,Ua:function(e,m){function h(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,h)))return;if(l=k[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:m),l=m;l&&g.push("'"+b+"':function(_z){"+m+"=_z}")}p&&(e=
"function(){return "+e+" }");f.push("'"+b+"':"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y="string"===typeof e?b(e):e;a.a.q(y,function(a){h(a.key||a.unknown,a.value)});g.length&&h("_ko_property_writers","{"+g.join(",")+" }");return f.join(",")},ad:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ea:function(b,c,d,e,f){if(b&&a.H(b))!a.Ba(b)||f&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",
a.h.ta);a.b("expressionRewriting.parseObjectLiteral",a.h.yb);a.b("expressionRewriting.preProcessBindings",a.h.Ua);a.b("expressionRewriting._twoWayBindings",a.h.ea);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ua);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);
b(e)&&f++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=u&&"\x3c!--test--\x3e"===u.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.f={Z:{},childNodes:function(a){return b(a)?d(a):a.childNodes},xa:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=
0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.ob(c)},da:function(c,d){if(b(c)){a.f.xa(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.da(c,d)},mc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},gc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.mc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||
c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Tc:b,pd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},kc:function(d){if(l[a.a.A(d)]){var h=d.firstChild;if(h){do if(1===h.nodeType){var f;f=h.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var k=e(f,!0);k?f=k:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=h.nextSibling,k=0;k<f.length;k++)g?d.insertBefore(f[k],
g):d.appendChild(f[k])}while(h=h.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.Z);a.b("virtualElements.emptyNode",a.f.xa);a.b("virtualElements.insertAfter",a.f.gc);a.b("virtualElements.prepend",a.f.mc);a.b("virtualElements.setDomNodeChildren",a.f.da);(function(){a.Q=function(){this.Fc={}};a.a.extend(a.Q.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.Tc(b);
default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Ob(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Ob(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.pd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Fc,g=b+(e&&e.valueAccessors||
""),k;if(!(k=f[g])){var l,m="with($context){with($data||{}){return{"+a.h.Ua(b,e)+"}}}";l=new Function("$context","$element",m);k=f[g]=l}return k(c,d)}catch(h){throw h.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+h.message,h;}}});a.Q.instance=new a.Q})();a.b("bindingProvider",a.Q);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ca(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,h){return"function"===
typeof c?d(c.bind(null,e,h)):a.a.Ca(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,h=a.f.firstChild(c),f=a.Q.instance,m=f.preprocessNode;if(m){for(;e=h;)h=a.f.nextSibling(e),m.call(f,e);h=a.f.firstChild(c)}for(;e=h;)h=a.f.nextSibling(e),k(b,e,d)}function k(b,c,d){var e=!0,h=1===c.nodeType;h&&a.f.kc(c);if(h&&d||a.Q.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!h)}function l(b){var c=[],d={},e=[];a.a.D(b,function Z(h){if(!d[h]){var f=
a.getBindingHandler(h);f&&(f.after&&(e.push(h),a.a.q(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));Z(c)}}),e.length--),c.push({key:h,fc:f}));d[h]=!0}});return c}function m(b,d,e,h){var m=a.a.e.get(b,q);if(!d){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&h&&a.tc(b,e);var g;if(d&&"function"!==typeof d)g=d;else{var k=a.Q.instance,r=k.getBindingAccessors||
f,p=a.B(function(){(g=d?d(e,b):r.call(k,b,e))&&e.P&&e.P();return g},null,{i:b});g&&p.ba()||(p=null)}var u;if(g){var v=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},s=function(){return a.a.Ca(p?p():g,c)};s.get=function(a){return g[a]&&c(v(a))};s.has=function(a){return a in g};h=l(g);a.a.q(h,function(c){var d=c.fc.init,h=c.fc.update,f=c.key;if(8===b.nodeType&&!a.f.Z[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.l.w(function(){var a=
d(b,v(f),s,e.$data,e);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof h&&a.B(function(){h(b,v(f),s,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===n}}function h(b){return b&&b instanceof a.U?b:new a.U(b)}
a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.U=function(b,c,d,e){var h=this,f="function"==typeof b&&!a.H(b),m,g=a.B(function(){var m=f?b():b,l=a.a.c(m);c?(c.P&&c.P(),a.a.extend(h,c),g&&(h.P=g)):(h.$parents=[],h.$root=l,h.ko=a);h.$rawData=m;h.$data=l;d&&(h[d]=l);e&&e(h,c,l);return h.$data},null,{wa:function(){return m&&!a.a.Qb(m)},i:!0});g.ba()&&(h.P=g,g.equalityComparer=null,m=[],g.Ac=function(b){m.push(b);a.a.F.oa(b,function(b){a.a.La(m,b);m.length||
(g.k(),h.P=g=n)})})};a.U.prototype.createChildContext=function(b,c,d){return new a.U(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.U.prototype.extend=function(b){return new a.U(this.P||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.e.I(),p=a.a.e.I();a.tc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.P&&c.P.Ac(b);else return a.a.e.get(b,
p)};a.Ja=function(b,c,d){1===b.nodeType&&a.f.kc(b);return m(b,c,h(d),!0)};a.Dc=function(b,c,d){d=h(d);return a.Ja(b,e(c,d,b),d)};a.eb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(h(a),b,!0)};a.Rb=function(a,b){!v&&x.jQuery&&(v=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||x.document.body;k(h(a),b,!0)};a.kb=function(b){switch(b.nodeType){case 1:case 8:var c=a.tc(b);if(c)return c;
if(b.parentNode)return a.kb(b.parentNode)}return n};a.Jc=function(b){return(b=a.kb(b))?b.$data:n};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Rb);a.b("applyBindingsToDescendants",a.eb);a.b("applyBindingAccessorsToNode",a.Ja);a.b("applyBindingsToNode",a.Dc);a.b("contextFor",a.kb);a.b("dataFor",a.Jc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,h;m?m.X(e):(m=f[c]=new a.J,m.X(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Zc:e};delete f[c];h||e?m.notifySubscribers(b):
a.Y.Wa(function(){m.notifySubscribers(b)})}),h=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,h){h||(h=a.g.loaders.slice(0));var g=h.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,h)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,h)}else f(null)}
var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.Zc?a.l.w(function(){e(f.definition)}):a.Y.Wa(function(){e(f.definition)}):c(d,e)},Xb:function(a){delete g[a]},Jb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.Xb)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(k)}var k={},y=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.Jb("loadTemplate",[b,c],function(a){k.template=a;g()})}):g();d?f(c,d,function(c){a.g.Jb("loadViewModel",
[b,c],function(a){k[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.A(b)){case "script":return a.a.ma(b.text);case "textarea":return a.a.ma(b.value);case "template":if(e(b.content))return a.a.ua(b.content.childNodes)}return a.a.ua(b.childNodes)}function e(a){return x.DocumentFragment?
a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||x.require?(O||x.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var k={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.ub(b))throw Error("Component "+b+" is already registered");k[b]=c};a.g.ub=function(a){return k.hasOwnProperty(a)};a.g.od=function(b){delete k[b];
a.g.Xb(b)};a.g.Zb={getConfig:function(a,b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ma(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.V(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var l=u.getElementById(c);l?f(d(l)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.ub);a.b("components.unregister",a.g.od);a.b("components.defaultLoader",a.g.Zb);a.g.loaders.push(a.g.Zb);a.g.Bc=k})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ca(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ca(f,function(c){var e=
c.t();return c.ba()?a.m({read:function(){return a.a.c(c())},write:a.Ba(e)&&function(a){c()(a)},i:b}):e});g.hasOwnProperty("$raw")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.ub(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.C&&b.tagName===c))return c};a.g.Ob=function(c,e,f,g){if(1===e.nodeType){var k=a.g.getComponentNameForNode(e);if(k){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var l={name:k,params:b(e,f)};c.component=g?function(){return l}:l}}return c};var c=new a.Q;9>a.a.C&&(a.g.register=function(a){return function(b){u.createElement(b);return a.apply(this,arguments)}}(a.g.register),u.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Bc,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(u.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.ua(c);a.f.da(d,b)}
function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,k,l,m){function h(){var a=r&&r.dispose;"function"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.V(a.f.childNodes(f));a.a.F.oa(f,h);a.m(function(){var l=a.a.c(g()),k,t;"string"===typeof l?k=l:(k=a.a.c(l.name),t=a.a.c(l.params));if(!k)throw Error("No component name specified");var n=q=++e;a.g.get(k,function(e){if(q===n){h();if(!e)throw Error("Unknown component '"+k+
"'");c(k,e,f);var g=d(e,f,p,t);e=m.createChildContext(g,b,function(a){a.$component=g;a.$componentTemplateNodes=p});r=g;a.eb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.Z.component=!0})();var S={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in S?(c=S[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());"name"===c&&a.a.rc(b,
g?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=p?g():e;if(!a.va.Sa()&&(!l||e)){var m=a.l.w(c);if(h){var k=r?m.t():m;q!==f?(e&&(a.a.pa(k,f,!0),a.a.pa(k,q,!1)),q=f):a.a.pa(k,f,e);r&&a.Ba(m)&&m(k)}else a.h.Ea(m,d,"checked",f,!0)}}function f(){var d=a.a.c(c());b.checked=h?0<=a.a.o(d,g()):k?d:g()===d}var g=a.nc(function(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):d.has("value")?a.a.c(d.get("value")):b.value}),k=
"checkbox"==b.type,l="radio"==b.type;if(k||l){var m=c(),h=k&&a.a.c(m)instanceof Array,r=!(h&&m.push&&m.splice),q=h?g():n,p=l||h;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.p(b,"click",e);a.m(f,null,{i:b});m=n}}};a.h.ea.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.bb(b,c,d)}):(d=a.a.$a(String(d||"")),a.a.bb(b,b.__ko__cssValue,
!1),b.__ko__cssValue=d,a.a.bb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){"string"==typeof g&&a.a.p(b,g,function(b){var m,h=c()[g];if(h){try{var r=a.a.V(arguments);e=f.$data;r.unshift(e);m=h.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():
b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={ic:function(b){return function(){var c=b(),d=a.a.zb(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.W.sb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.W.sb}}},init:function(b,c){return a.d.template.init(b,
a.d.foreach.ic(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.ic(c),d,e,f)}};a.h.ta.foreach=!1;a.f.Z.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=c();a.h.Ea(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.p(b,"focus",f);a.a.p(b,"focusin",f);a.a.p(b,"blur",g);a.a.p(b,
"focusout",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Da,null,[b,d?"focusin":"focusout"]))}};a.h.ea.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ea.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Cb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,c){return a.createChildContext(c)});var L={};
a.d.options={init:function(b){if("select"!==a.a.A(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ka(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(A&&h)a.j.ha(b,a.a.c(d.get("value")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.sc(e[0],f);A&&!f&&a.l.w(a.a.Da,null,[b,
"change"])}}var k=b.multiple,l=0!=b.length&&k?b.scrollTop:null,m=a.a.c(c()),h=d.get("valueAllowUnset")&&d.has("value"),r=d.get("optionsIncludeDestroyed");c={};var q,p=[];h||(k?p=a.a.fb(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&("undefined"==typeof m.length&&(m=[m]),q=a.a.Ka(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(m=a.a.c(d.get("optionsCaption")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};
m=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(m=function(b,c){g(0,c);a.l.w(d.get("optionsAfterRender"),null,[c[0],b!==L?b:n])});a.a.Bb(b,q,function(c,e,g){g.length&&(p=!h&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement("option");c===L?(a.a.Za(e,d.get("optionsCaption")),a.j.ha(e,n)):(g=f(c,d.get("optionsValue"),c),a.j.ha(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Za(e,c));return[e]},c,m);a.l.w(function(){h?a.j.ha(b,a.a.c(d.get("value")),
!0):(k?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.a.Da(b,"change")});a.a.Nc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.xb=a.a.e.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.p(b,"change",function(){var e=c(),f=[];a.a.q(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ea(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=
a.a.A(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.q(b.getElementsByTagName("option"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.sc(b,c)});b.scrollTop=e}};a.h.ea.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.p(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Za(b,c())}};a.f.Z.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(d.match(/Firefox\/([^ ]*)/));
if(10>a.a.C)var g=a.a.e.I(),k=a.a.e.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.p(d,"selectionchange",l));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.p(b,c,d)}function k(){var c=a.a.c(d());if(null===c||c===n)c="";v!==n&&c===v?a.a.setTimeout(k,4):b.value!==c&&(u=c,b.value=c)}function y(){s||(v=b.value,s=a.a.setTimeout(t,4))}function t(){clearTimeout(s);v=s=n;var c=
b.value;u!==c&&(u=c,a.h.Ea(d(),g,"textInput",c))}var u=b.value,s,v,x=9==a.a.C?y:t;10>a.a.C?(l("propertychange",function(a){"value"===a.propertyName&&x(a)}),8==a.a.C&&(l("keyup",t),l("keydown",t)),8<=a.a.C&&(m(b,x),l("dragend",y))):(l("input",t),5>e&&"textarea"===a.a.A(b)?(l("keydown",y),l("paste",y),l("cut",y)):11>c?l("keydown",y):4>f&&(l("DOMAutoComplete",t),l("dragdrop",t),l("drop",t)));l("change",t);a.m(k,null,{i:b})}};a.h.ea.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",
a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ic;a.a.rc(b,d)}}};a.d.uniqueName.Ic=0;a.d.value={after:["options","foreach"],init:function(b,c,d){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=d.get("valueUpdate"),g=!1,k=null;f&&("string"==typeof f&&(f=[f]),a.a.ra(e,f),e=a.a.Tb(e));var l=function(){k=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ea(e,d,"value",f)};!a.a.C||"input"!=b.tagName.toLowerCase()||"text"!=b.type||
"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.o(e,"propertychange")||(a.a.p(b,"propertychange",function(){g=!0}),a.a.p(b,"focus",function(){g=!1}),a.a.p(b,"blur",function(){g&&l()}));a.a.q(e,function(c){var d=l;a.a.nd(c,"after")&&(d=function(){k=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.p(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==k&&e===k)a.a.setTimeout(m,0);else if(e!==f)if("select"===a.a.A(b)){var g=d.get("valueAllowUnset"),f=function(){a.j.ha(b,
e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Da,null,[b,"change"])}else a.j.ha(b,e)};a.m(m,null,{i:b})}else a.Ja(b,{checkedValue:c})},update:function(){}};a.h.ea.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.O=function(){};a.O.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.O.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.O.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||u;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.qa(b);throw Error("Unknown template type: "+b);};a.O.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,c,d,e)};a.O.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.O.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.O);a.Gb=function(){function b(b,c,d,k){b=a.h.yb(b);for(var l=a.h.ta,m=0;m<b.length;m++){var h=b[m].key;if(l.hasOwnProperty(h)){var r=l[h];if("function"===typeof r){if(h=
r(b[m].value))throw Error(h);}else if(!r)throw Error("This template engine does not support the '"+h+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ua(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Oc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Gb.dd(b,c)},d)},dd:function(a,f){return a.replace(c,function(a,c,d,e,h){return b(h,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},Ec:function(b,c){return a.M.wb(function(d,k){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.Ja(l,b,k)})}}}();a.b("__tr_ambtns",a.Gb.Ec);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&
b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.n[b];var c=arguments[0];"innerHTML"===b?a.a.Cb(this.n,c):this.n[b]=c};var b=a.a.e.I()+"_";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.I();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).jb||(3===this.ab?
b.content:4===this.ab?b:n);a.a.e.set(b,c,{jb:arguments[0]})};a.v.qa=function(a){this.n=a};a.v.qa.prototype=new a.v.n;a.v.qa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Hb===n&&b.jb&&(b.Hb=b.jb.innerHTML);return b.Hb}a.a.e.set(this.n,c,{Hb:arguments[0]})};a.b("templateSources",a.v);a.b("templateSources.domElement",a.v.n);a.b("templateSources.anonymousTemplate",a.v.qa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),
d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,k=a.Q.instance,n=k.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.za(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Rb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.M.yc(b,[d])});a.a.za(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,
e,f,k,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;a.Gb.Oc(f,n,p);f=n.renderTemplate(f,k,q,p);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(e){case "replaceChildren":a.f.da(b,f);p=!0;break;case "replaceNode":a.a.qc(b,f);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}p&&(c(f,k),q.afterRender&&a.l.w(q.afterRender,null,[f,k.$data]));
return f}function f(b,c,d){return a.H(b)?b():"function"===typeof b?b(c,d):b}var g;a.Db=function(b){if(b!=n&&!(b instanceof a.O))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ab=function(b,c,h,k,q){h=h||{};if((h.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(k){var p=d(k);return a.B(function(){var g=c&&c instanceof a.U?c:new a.U(a.a.c(c)),n=f(b,g.$data,g),g=e(k,q,n,g,h);"replaceNode"==q&&(k=g,p=d(k))},null,
{wa:function(){return!p||!a.a.nb(p)},i:p&&"replaceNode"==q?p.parentNode:p})}return a.M.wb(function(d){a.Ab(b,c,h,d,"replaceNode")})};a.kd=function(b,d,g,k,q){function p(a,b){c(b,s);g.afterRender&&g.afterRender(b,a);s=null}function u(a,c){s=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,s);return e(null,"ignoreTargetNode",d,s,g)}var s;return a.B(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Ka(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});
a.l.w(a.a.Bb,null,[k,b,u,g,p])},null,{i:k})};var k=a.a.e.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.f.xa(b);else{if("nodes"in d){if(d=d.nodes||[],a.H(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.jc(d);(new a.v.qa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c(),s;c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in
c&&(d=!a.a.c(c.ifnot)),s=a.a.c(c.data));"foreach"in c?e=a.kd(g||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(s,c.as):f,e=a.Ab(g||b,f,c,b)):a.f.xa(b);f=e;(s=a.a.e.get(b,k))&&"function"==typeof s.k&&s.k();a.a.e.set(b,k,f&&f.ba()?f:n)}};a.h.ta.template=function(b){b=a.h.yb(b);return 1==b.length&&b[0].unknown||a.h.ad(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.Z.template=!0})();a.b("setTemplateEngine",a.Db);a.b("renderTemplate",
a.Ab);a.a.dc=function(a,c,d){if(a.length&&c.length){var e,f,g,k,l;for(e=f=0;(!d||e<d)&&(k=a[f]);++f){for(g=0;l=c[g];++g)if(k.value===l.value){k.moved=l.index;l.moved=k.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.ib=function(){function b(b,d,e,f,g){var k=Math.min,l=Math.max,m=[],h,n=b.length,q,p=d.length,s=p-n||1,u=n+p+1,t,v,x;for(h=0;h<=n;h++)for(v=t,m.push(t=[]),x=k(p,h+s),q=l(0,h-1);q<=x;q++)t[q]=q?h?b[h-1]===d[q-1]?v[q-1]:k(v[q]||u,t[q-1]||u)+1:q+1:h+1;k=[];l=[];s=[];h=n;for(q=p;h||q;)p=m[h][q]-
1,q&&p===m[h][q-1]?l.push(k[k.length]={status:e,value:d[--q],index:q}):h&&p===m[h-1][q]?s.push(k[k.length]={status:f,value:b[--h],index:h}):(--q,--h,g.sparse||k.push({status:"retained",value:d[q]}));a.a.dc(s,l,!g.dontLimitMoves&&10*n);return k.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ib);(function(){function b(b,c,d,k,l){var m=[],
h=a.B(function(){var h=c(d,l,a.a.za(m,b))||[];0<m.length&&(a.a.qc(m,h),k&&a.l.w(k,null,[d,h,l]));m.length=0;a.a.ra(m,h)},null,{i:b,wa:function(){return!a.a.Qb(m)}});return{ca:m,B:h.ba()?h:n}}var c=a.a.e.I(),d=a.a.e.I();a.a.Bb=function(e,f,g,k,l){function m(b,c){w=q[c];v!==c&&(D[b]=w);w.qb(v++);a.a.za(w.ca,e);u.push(w);z.push(w)}function h(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.q(c[d].ca,function(a){b(a,d,c[d].ja)})}f=f||[];k=k||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.fb(q,
function(a){return a.ja}),s=a.a.ib(p,f,k.dontLimitMoves),u=[],t=0,v=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case "deleted":E===n&&(w=q[t],w.B&&(w.B.k(),w.B=n),a.a.za(w.ca,e).length&&(k.beforeRemove&&(u.push(w),z.push(w),w.ja===d?w=null:f[C]=w),w&&x.push.apply(x,w.ca)));t++;break;case "retained":m(C,t++);break;case "added":E!==n?m(C,E):(w={ja:B.value,qb:a.N(v++)},u.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,u);h(k.beforeMove,D);a.a.q(x,k.beforeRemove?a.$:
a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ca||a.a.extend(w,b(e,g,w.ja,l,w.qb));for(t=0;s=w.ca[t];r=s.nextSibling,F=s,t++)s!==r&&a.f.gc(e,s,F);!w.Wc&&l&&(l(w.ja,w.ca,w.qb),w.Wc=!0)}h(k.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ja=d);h(k.afterMove,D);h(k.afterAdd,p)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Bb);a.W=function(){this.allowTemplateRewriting=!1};a.W.prototype=new a.O;a.W.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?
b.nodes():null)return a.a.V(c.cloneNode(!0).childNodes);b=b.text();return a.a.ma(b,e)};a.W.sb=new a.W;a.Db(a.W.sb);a.b("nativeTemplateEngine",a.W);(function(){a.vb=function(){var a=this.$c=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||u;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var k=b.data("precompiled");
k||(k=b.text()||"",k=v.template(null,"{{ko_with $item.koBindingContext}}"+k+"{{/ko_with}}"),b.data("precompiled",k));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(k,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){u.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},
v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.vb.prototype=new a.O;var b=new a.vb;0<b.$c&&a.Db(b);a.b("jqueryTmplTemplateEngine",a.vb)})()})})();})();

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min

/// Knockout Mapping plugin v2.4.1
/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(e){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?e(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.mapping={})})(function(e,f){function y(b,c){var a,d;for(d in c)if(c.hasOwnProperty(d)&&c[d])if(a=f.getType(b[d]),d&&b[d]&&"array"!==a&&"string"!==a)y(b[d],c[d]);else if("array"===f.getType(b[d])&&"array"===f.getType(c[d])){a=b;for(var e=d,l=b[d],n=c[d],t={},g=l.length-1;0<=g;--g)t[l[g]]=l[g];for(g=
n.length-1;0<=g;--g)t[n[g]]=n[g];l=[];n=void 0;for(n in t)l.push(t[n]);a[e]=l}else b[d]=c[d]}function E(b,c){var a={};y(a,b);y(a,c);return a}function z(b,c){for(var a=E({},b),e=L.length-1;0<=e;e--){var f=L[e];a[f]&&(a[""]instanceof Object||(a[""]={}),a[""][f]=a[f],delete a[f])}c&&(a.ignore=h(c.ignore,a.ignore),a.include=h(c.include,a.include),a.copy=h(c.copy,a.copy),a.observe=h(c.observe,a.observe));a.ignore=h(a.ignore,j.ignore);a.include=h(a.include,j.include);a.copy=h(a.copy,j.copy);a.observe=h(a.observe,
j.observe);a.mappedProperties=a.mappedProperties||{};a.copiedProperties=a.copiedProperties||{};return a}function h(b,c){"array"!==f.getType(b)&&(b="undefined"===f.getType(b)?[]:[b]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(b.concat(c))}function F(b,c,a,d,k,l,n){var t="array"===f.getType(e.utils.unwrapObservable(c));l=l||"";if(f.isMapped(b)){var g=e.utils.unwrapObservable(b)[p];a=E(g,a)}var j=n||k,h=function(){return a[d]&&a[d].create instanceof
Function},x=function(b){var f=G,g=e.dependentObservable;e.dependentObservable=function(a,b,c){c=c||{};a&&"object"==typeof a&&(c=a);var d=c.deferEvaluation,M=!1;c.deferEvaluation=!0;a=new H(a,b,c);if(!d){var g=a,d=e.dependentObservable;e.dependentObservable=H;a=e.isWriteableObservable(g);e.dependentObservable=d;d=H({read:function(){M||(e.utils.arrayRemoveItem(f,g),M=!0);return g.apply(g,arguments)},write:a&&function(a){return g(a)},deferEvaluation:!0});d.__DO=g;a=d;f.push(a)}return a};e.dependentObservable.fn=
H.fn;e.computed=e.dependentObservable;b=e.utils.unwrapObservable(k)instanceof Array?a[d].create({data:b||c,parent:j,skip:N}):a[d].create({data:b||c,parent:j});e.dependentObservable=g;e.computed=e.dependentObservable;return b},u=function(){return a[d]&&a[d].update instanceof Function},v=function(b,f){var g={data:f||c,parent:j,target:e.utils.unwrapObservable(b)};e.isWriteableObservable(b)&&(g.observable=b);return a[d].update(g)};if(n=I.get(c))return n;d=d||"";if(t){var t=[],s=!1,m=function(a){return a};
a[d]&&a[d].key&&(m=a[d].key,s=!0);e.isObservable(b)||(b=e.observableArray([]),b.mappedRemove=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.remove(function(a){return c(m(a))})},b.mappedRemoveAll=function(a){var c=C(a,m);return b.remove(function(a){return-1!=e.utils.arrayIndexOf(c,m(a))})},b.mappedDestroy=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.destroy(function(a){return c(m(a))})},b.mappedDestroyAll=function(a){var c=C(a,m);return b.destroy(function(a){return-1!=
e.utils.arrayIndexOf(c,m(a))})},b.mappedIndexOf=function(a){var c=C(b(),m);a=m(a);return e.utils.arrayIndexOf(c,a)},b.mappedGet=function(a){return b()[b.mappedIndexOf(a)]},b.mappedCreate=function(a){if(-1!==b.mappedIndexOf(a))throw Error("There already is an object with the key that you specified.");var c=h()?x(a):a;u()&&(a=v(c,a),e.isWriteableObservable(c)?c(a):c=a);b.push(c);return c});n=C(e.utils.unwrapObservable(b),m).sort();g=C(c,m);s&&g.sort();s=e.utils.compareArrays(n,g);n={};var J,A=e.utils.unwrapObservable(c),
y={},z=!0,g=0;for(J=A.length;g<J;g++){var r=m(A[g]);if(void 0===r||r instanceof Object){z=!1;break}y[r]=A[g]}var A=[],B=0,g=0;for(J=s.length;g<J;g++){var r=s[g],q,w=l+"["+g+"]";switch(r.status){case "added":var D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=F(void 0,D,a,d,b,w,k);h()||(q=e.utils.unwrapObservable(q));w=O(e.utils.unwrapObservable(c),D,n);q===N?B++:A[w-B]=q;n[w]=!0;break;case "retained":D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=K(b,r.value,m);F(q,D,a,d,b,w,
k);w=O(e.utils.unwrapObservable(c),D,n);A[w]=q;n[w]=!0;break;case "deleted":q=K(b,r.value,m)}t.push({event:r.status,item:q})}b(A);a[d]&&a[d].arrayChanged&&e.utils.arrayForEach(t,function(b){a[d].arrayChanged(b.event,b.item)})}else if(P(c)){b=e.utils.unwrapObservable(b);if(!b){if(h())return s=x(),u()&&(s=v(s)),s;if(u())return v(s);b={}}u()&&(b=v(b));I.save(c,b);if(u())return b;Q(c,function(d){var f=l.length?l+"."+d:d;if(-1==e.utils.arrayIndexOf(a.ignore,f))if(-1!=e.utils.arrayIndexOf(a.copy,f))b[d]=
c[d];else if("object"!=typeof c[d]&&"array"!=typeof c[d]&&0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=c[d],a.copiedProperties[f]=!0;else{var g=I.get(c[d]),k=F(b[d],c[d],a,d,b,f,b),g=g||k;if(0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=g(),a.copiedProperties[f]=!0;else{if(e.isWriteableObservable(b[d])){if(g=e.utils.unwrapObservable(g),b[d]()!==g)b[d](g)}else g=void 0===b[d]?g:e.utils.unwrapObservable(g),b[d]=g;a.mappedProperties[f]=!0}}})}else switch(f.getType(c)){case "function":u()?
e.isWriteableObservable(c)?(c(v(c)),b=c):b=v(c):b=c;break;default:if(e.isWriteableObservable(b))return q=u()?v(b):e.utils.unwrapObservable(c),b(q),q;h()||u();b=h()?x():e.observable(e.utils.unwrapObservable(c));u()&&b(v(b))}return b}function O(b,c,a){for(var d=0,e=b.length;d<e;d++)if(!0!==a[d]&&b[d]===c)return d;return null}function R(b,c){var a;c&&(a=c(b));"undefined"===f.getType(a)&&(a=b);return e.utils.unwrapObservable(a)}function K(b,c,a){b=e.utils.unwrapObservable(b);for(var d=0,f=b.length;d<
f;d++){var l=b[d];if(R(l,a)===c)return l}throw Error("When calling ko.update*, the key '"+c+"' was not found!");}function C(b,c){return e.utils.arrayMap(e.utils.unwrapObservable(b),function(a){return c?R(a,c):a})}function Q(b,c){if("array"===f.getType(b))for(var a=0;a<b.length;a++)c(a);else for(a in b)c(a)}function P(b){var c=f.getType(b);return("object"===c||"array"===c)&&null!==b}function T(){var b=[],c=[];this.save=function(a,d){var f=e.utils.arrayIndexOf(b,a);0<=f?c[f]=d:(b.push(a),c.push(d))};
this.get=function(a){a=e.utils.arrayIndexOf(b,a);return 0<=a?c[a]:void 0}}function S(){var b={},c=function(a){var c;try{c=a}catch(e){c="$$$"}a=b[c];void 0===a&&(a=new T,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var p="__ko_mapping__",H=e.dependentObservable,B=0,G,I,L=["create","update","key","arrayChanged"],N={},x={include:["_destroy"],ignore:[],copy:[],observe:[]},j=x;f.isMapped=function(b){return(b=e.utils.unwrapObservable(b))&&b[p]};f.fromJS=
function(b){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");try{B++||(G=[],I=new S);var c,a;2==arguments.length&&(arguments[1][p]?a=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],a=arguments[2]);a&&(c=E(c,a[p]));c=z(c);var d=F(a,b,c);a&&(d=a);if(!--B)for(;G.length;){var e=G.pop();e&&(e(),e.__DO.throttleEvaluation=e.throttleEvaluation)}d[p]=E(d[p],c);return d}catch(f){throw B=0,f;}};f.fromJSON=function(b){var c=e.utils.parseJson(b);
arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};f.toJS=function(b,c){j||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
if("array"!==f.getType(j.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(j.include))throw Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==f.getType(j.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=z(c,b[p]);return f.visitModel(b,function(a){return e.utils.unwrapObservable(a)},c)};f.toJSON=function(b,c){var a=f.toJS(b,c);return e.utils.stringifyJson(a)};f.defaultOptions=function(){if(0<arguments.length)j=
arguments[0];else return j};f.resetDefaultOptions=function(){j={include:x.include.slice(0),ignore:x.ignore.slice(0),copy:x.copy.slice(0)}};f.getType=function(b){if(b&&"object"===typeof b){if(b.constructor===Date)return"date";if(b.constructor===Array)return"array"}return typeof b};f.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new S;var d,k=e.utils.unwrapObservable(b);if(P(k))a=z(a,k[p]),c(b,a.parentName),d="array"===f.getType(k)?[]:{};else return c(b,a.parentName);a.visitedObjects.save(b,
d);var l=a.parentName;Q(k,function(b){if(!(a.ignore&&-1!=e.utils.arrayIndexOf(a.ignore,b))){var j=k[b],g=a,h=l||"";"array"===f.getType(k)?l&&(h+="["+b+"]"):(l&&(h+="."),h+=b);g.parentName=h;if(!(-1===e.utils.arrayIndexOf(a.copy,b)&&-1===e.utils.arrayIndexOf(a.include,b)&&k[p]&&k[p].mappedProperties&&!k[p].mappedProperties[b]&&k[p].copiedProperties&&!k[p].copiedProperties[b]&&"array"!==f.getType(k)))switch(f.getType(e.utils.unwrapObservable(j))){case "object":case "array":case "undefined":g=a.visitedObjects.get(j);
d[b]="undefined"!==f.getType(g)?g:f.visitModel(j,c,a);break;default:d[b]=c(j,a.parentName)}}});return d}});

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
/*
 source: http://stackoverflow.com/questions/14838135/how-to-use-knockout-to-iterate-over-an-object-not-array
 */
/**
 *
 * binding: foreachprop:
 * can also define "unsorted:" binding to not sort keys.
 * <pre><code>
 *      &lt;span data-bind="foreachprop: execution().jobArguments"&gt;
 &lt;span data-bind="text: key"&gt;&lt;/span&gt;:
 &lt;span data-bind="text: value" class="optvalue"&gt;&lt;/span&gt;
 &lt;/span&gt;
 </code></pre>
 */
ko.bindingHandlers.foreachprop = {
    transformObject: function (obj,unsorted) {
        var properties = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                properties.push({ key: key, value: obj[key] });
            }
        }
        if(!unsorted) {
            properties.sort(function (a, b) {
                return a.key.localeCompare(b.key);
            });
        }
        return ko.observableArray(properties);
    },
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var unsorted = allBindingsAccessor.get('unsorted');
        var value = ko.utils.unwrapObservable(valueAccessor()),
            properties = ko.bindingHandlers.foreachprop.transformObject(value,unsorted);
        var childBindingContext = bindingContext.createChildContext(
            bindingContext.$rawData,
            null // Optionally, pass a string here as an alias for the data item in descendant contexts
        );
        jQuery(element).data('childBindingContext', childBindingContext);
        ko.applyBindingsToNode(element, { foreach: properties }, childBindingContext);
        return { controlsDescendantBindings: true };
    },
    update:function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext){
        "use strict";
        var unsorted = allBindingsAccessor.get('unsorted');
        var value = ko.utils.unwrapObservable(valueAccessor()),
            properties = ko.bindingHandlers.foreachprop.transformObject(value,unsorted);
        var childBindingContext=jQuery(element).data('childBindingContext');
        ko.bindingHandlers['foreach'].update(element, properties, allBindingsAccessor, viewModel, childBindingContext);
        return { controlsDescendantBindings: true };

    }
};

/*
 * Copyright 2013 SimplifyOps Inc, <http://simplifyops.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
 * the specific language governing permissions and limitations under the License.
 */
/**
 * Represents a workflow
 */
function _wfTypeForStep(step){
    "use strict";
    if (typeof(step) != 'undefined') {
        if (step['exec']) {
            return 'command';
        } else if (step['jobref']) {
            return 'job';
        } else if (step['script']) {
            return 'script';
        } else if (step['scriptfile']) {
            return 'scriptfile';
        } else if (step['scripturl']) {
            return 'scripturl';
        } else if (step['type']) {//plugin
            if (step['nodeStep'] ) {
                return 'node-step-plugin plugin';
            } else if (null != step['nodeStep'] && !step['nodeStep'] ) {
                return 'workflow-step-plugin plugin';
            }else{
                return 'plugin';
            }
        }
    }
    return 'console';
}
function _wfStringForStep(step){
    "use strict";
    var string = "";
    if (typeof(step) != 'undefined') {
        if(step['description']){
            string = step['description'];
        }else if (step['exec']) {
//                        string+=' $ '+step['exec'];
            string = 'Command';
        } else if (step['jobref']) {
            string = (step['jobref']['group'] ? step['jobref']['group'] + '/' : '') + step['jobref']['name'];
        } else if (step['script']) {
            string = "Script";
        } else if (step['scriptfile']) {
            string = 'File';
        }else if (step['scripturl']) {
            string = 'URL';
        } else if (step['type']) {//plugin
            var title = "Plugin " + step['type'];
            if (step['nodeStep'] && RDWorkflow.nodeSteppluginDescriptions && RDWorkflow.nodeSteppluginDescriptions[step['type']]) {
                title = RDWorkflow.nodeSteppluginDescriptions[step['type']].title || title;
            } else if (!step['nodeStep'] && RDWorkflow.wfSteppluginDescriptions && RDWorkflow.wfSteppluginDescriptions[step['type']]) {
                title = RDWorkflow.wfSteppluginDescriptions[step['type']].title || title;
            }
            string = title;
        }
    }else{
        return "[?]";
    }
    return string;
}
var RDWorkflow = Class.create({
    workflow:null,
    initialize: function(wf,params){
        this.workflow=wf;
        Object.extend(this, params);
    },
    contextType: function (ctx) {
        if(typeof(ctx)=='string'){
            ctx= RDWorkflow.parseContextId(ctx);
        }
        var step = this.workflow[RDWorkflow.workflowIndexForContextId(ctx[0])];
        return _wfTypeForStep(step);
    },
    renderContextStepNumber: function (ctx) {
        if (typeof(ctx) == 'string') {
            ctx = RDWorkflow.parseContextId(ctx);
        }
        var string = '';
        string += RDWorkflow.stepNumberForContextId(ctx[0]);
        if (ctx.length > 1) {
//                string += "/" + ctx.slice(1).join("/")
        }
        string += ". ";
        return string;
    },
    renderContextString: function (ctx) {
        if(typeof(ctx)=='string'){
            ctx= RDWorkflow.parseContextId(ctx);
        }
        var step = this.workflow[RDWorkflow.workflowIndexForContextId(ctx[0])];
        return _wfStringForStep(step);
    }
});
/**
 * remove escaping and halt processing at any break chars, returns object with 'text' (unescaped text), 'bchar' (seen break char or null),
 * 'rest' (remaining escaped text after first seen breakchar or null)
 * @param input input
 * @param echar escape char (e.g. '\\')
 * @param chars chars to process as escaped
 * @param breakchars chars to halt processing
 * @returns {{text: string, bchar: *, rest: *}}
 */
RDWorkflow.unescape=function(input,echar,chars,breakchars){
    "use strict";
    var arr=[];
    var e=false;
    var i=0;
    var bchar=null;
    for(;i<input.length;i++){
        var c = input.charAt(i);
        if(c==echar){
            if(e){
                arr.push(echar);
                e=false;
            }else{
                e=true;
            }
        }else if(chars.indexOf(c)>=0){
            if(e){
                arr.push(c);
                e=false;
            }else if(breakchars.indexOf(c)>=0){
                bchar=c;
                break;
            }else{
                arr.push(c);
            }
        }else{
            if(e){
                arr.push(echar);
                e=false;
            }
            arr.push(c);
        }
    }
    return {text:arr.join(""),bchar:bchar,rest:i<=input.length-1?input.substring(i+1):null};
};
/**
 *
 * @param input
 * @param sep
 * @returns {Array}
 */
RDWorkflow.splitEscaped=function(input,sep){
    "use strict";
    var parts=[];

    var rest=input;
    while(rest){
        var result=RDWorkflow.unescape(rest,'\\',['\\','/'],[sep]);
        parts.push(result.text);
        rest=result.rest;
    }
    return parts;
};
/**
 * Returns array of step context strings given the context identifier
 * @param context
 * @returns {*}
 */
RDWorkflow.contextStringSeparator = '/';
RDWorkflow.parseContextId= function (context) {
    if (context == null) {
        return null;
    }
    //split context into project,type,object
    var t = RDWorkflow.splitEscaped(context,RDWorkflow.contextStringSeparator);
    return t.slice();
};

/**
 * Return the parameter string for the context id. If id is "1@abc=xyz,tyf=lmn", then returns "abc=xyz,tyf=lmn"
 * @param ctxid
 * @returns {*}
 */
RDWorkflow.paramsForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@(.+))?$/);
    if (m[4]) {
        return m[4].replace(/\\([/@,=])/g, '$1');
    }
    return null;
}
;
RDWorkflow.isErrorhandlerForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@.+)?$/);
    if (m[2] == 'e') {
        return true
    }
    return false;
}
;
RDWorkflow.stepNumberForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@.+)?$/);
    if (m[1]) {
        return parseInt(m[1]);
    }
    return null;
};
RDWorkflow.workflowIndexForContextId = function (ctxid) {
    var m = RDWorkflow.stepNumberForContextId(ctxid);
    if (m!=null) {
        return m - 1;
    }
    return null;
};
/**
 * removes error handler/parameters from the context path
 * @param context
 */
RDWorkflow.cleanContextId = function (context) {
    var parts=RDWorkflow.parseContextId(context);
    for (var i=0;i<parts.length;i++){
        parts[i]=RDWorkflow.stepNumberForContextId(parts[i]);
    }
    return parts.join(RDWorkflow.contextStringSeparator);
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require momentutil
//= require knockout.min
//= require knockout-foreachprop
//= require knockout-mapping


function Report(data) {
    var self = this;
    self.status = ko.observable();
    self.dateCompleted = ko.observable();
    self.dateStarted = ko.observable();
    self.execution = ko.observable();
    self.executionHref = ko.observable();
    self.jobId = ko.observable();
    self.jobDeleted = ko.observable(false);
    self.executionId = ko.observable();
    self.reportId = ko.observable();
    self.title = ko.observable();
    self.jobAverageDuration = ko.observable(0);
    self.duration = ko.observable(0);
    self.timeNow = ko.observable(new Date());
    window.setInterval(function() { self.timeNow(new Date()) }, 5000);
    //true if checked for bulk edit
    self.bulkEditSelected=ko.observable(false);

    self.durationSimple = ko.computed(function () {
        return MomentUtil.formatDurationSimple(self.duration());
    });
    self.durationHumanize = ko.computed(function () {
        return MomentUtil.formatDurationHumanize(self.duration());
    });
    self.startTimeFormat = function (format) {
        return MomentUtil.formatTime(self.dateStarted(), format);
    };
    self.endTimeSimple = ko.computed(function () {
        return MomentUtil.formatTimeSimple(self.dateCompleted());
    });
    self.timeToStart = ko.computed(function () {
        self.timeNow();
        return moment(self.dateStarted()).fromNow();
    });
    self.statusList = ['scheduled','running','succeed','succeeded','failed',
        'cancel','aborted','retry','timedout','timeout','fail'];

    self.isCustomStatus = ko.computed(function () {
        return self.statusList.indexOf(self.status()) < 0 ;
    });
    self.customStatusString = ko.computed(function () {
        return self.execution()?self.execution().status():status();
    });
    self.isRetry = ko.computed(function () {
        return self.execution() && self.execution().retry && self.execution().retry();
    });
    self.hasRetryExec = ko.computed(function () {
        return self.execution() && self.execution().retryExecutionId && self.execution().retryExecutionId();
    });
    self.wasTimedOut = ko.computed(function () {
        return self.execution() && self.execution().timedOut && self.execution().timedOut();
    });
    self.css = ko.computed(function () {
        if (self.status() == 'scheduled') {
            return 'scheduled';
        }
        if (self.status() == 'succeed' || self.status() == 'succeeded') {
            return 'succeeded';
        }
        if (self.status() == 'fail' || self.status() == 'failed') {
            return 'failed';
        }
        if (self.status() == 'cancel' || self.status() == 'aborted') {
            return 'aborted';
        }
        if (self.status() == 'running') {
            return 'running';
        }
        if (self.status() == 'timedout') {
            return 'timedout';
        }
        if (self.status() == 'retry') {
            return 'failed-with-retry';
        }
        return 'other';
    });
    self.executionState = ko.computed(function () {
        var css = self.css();
        var exec = self.execution();

        if (self.hasRetryExec()) {
            return 'FAILED-WITH-RETRY';
        }
        if (self.wasTimedOut()) {
            return 'TIMEDOUT';
        }

        return css.toUpperCase();
    });
    self.isJob = ko.computed(function () {
        var id = self.jobId();
        var deleted=self.jobDeleted();
        return id || deleted;
    });
    self.isAdhoc = ko.computed(function () {
        return !self.isJob();
    });

    self.jobPercentage = ko.computed(function () {
        if (self.jobAverageDuration() > 0) {
            return 100 * (self.duration() / self.jobAverageDuration());
        } else {
            return -1;
        }
    });
    self.jobPercentageFixed = ko.computed(function () {
        var pct = self.jobPercentage();
        if (pct >= 0) {
            return pct.toFixed(0)
        } else {
            return '0';
        }
    });
    self.jobOverrunDuration = ko.computed(function () {
        var jobAverageDuration = self.jobAverageDuration();
        var execDuration = self.duration();
        if (jobAverageDuration > 0 && execDuration > jobAverageDuration) {
            return MomentUtil.formatDurationSimple(execDuration - jobAverageDuration);
        } else {
            return '';
        }
    });
    self.endTimeFormat = function (format) {
        var value = self.dateCompleted();
        return MomentUtil.formatTime(value, format);
    };
    self.nodeFailCount = ko.computed(function () {
        var ncount = ko.utils.unwrapObservable(self.node);
        if(ncount){
            var ns = ncount.split('/');
            if (ns.length == 3) {
                return parseInt(ns[1]);
            }
        }
    });

    self.nodeSucceedCount = ko.computed(function () {
        var ncount = ko.utils.unwrapObservable(self.node);
        if(ncount){

        var ns = ncount.split('/');
        if (ns.length == 3) {
            return parseInt(ns[0]);
        }
        }
    });
    ko.mapping.fromJS(data, {}, self);
}
function History(ajaxHistoryLink,ajaxNowRunningLink,ajaxBulkDeleteLink) {
    var self = this;
    self.ajaxHistoryLink = ajaxHistoryLink;
    self.ajaxNowRunningLink = ajaxNowRunningLink;
    self.ajaxBulkDeleteLink = ajaxBulkDeleteLink? ajaxBulkDeleteLink: typeof(appLinks)=='object'? appLinks.apiExecutionsBulkDelete:null;
    self.reports = ko.observableArray([]);
    self.nowrunning = ko.observableArray([]);
    self.showReports=ko.observable(false);
    self.nowRunningEnabled=ko.observable(true);
    self.href = ko.observable();
    self.selected = ko.observable(false);
    self.max = ko.observable(20);
    self.total = ko.observable(0);
    self.offset = ko.observable(0);
    self.params = ko.observable();
    self.reloadInterval=ko.observable(0);
    self.highlightExecutionId=ko.observable();
    //bulk edit mode
    self.bulkEditMode=ko.observable(false);
    self.bulkEditPrevious=ko.observable(-1);
    self.bulkEditResults=ko.observable();
    self.bulkEditProgress=ko.observable(false);
    self.results=ko.computed(function(){
       if(self.showReports()){
           return self.reports()
       } else{
           return self.nowrunning()
       }
    });
    self.count = ko.computed(function () {
        return self.reports().length + self.offset() * self.max();
    });
    self.pageCount=ko.computed(function(){
        return totalPageCount(self.max(),self.total());
    });
    self.pages=ko.computed(function(){
        var total = self.total();
        var offset = self.offset();
        var max = self.max();
        var href = self.href();
        if (total < 1 || !href) {
            return '';
        }
        var pages = [];
        //remove offset/max params from href
        href=href.replace(/[&\?](offset|max)=\d+/ig,'');

        foreachPage(offset, max, total, {maxSteps:10}, function (pg) {
            var a;
            var url = _genUrl(href, {offset: pg.offset, max: pg.max});
            var label = pg.prevPage ? 'Previous' : pg.nextPage ? 'Next' : pg.skipped? '…' : (pg.page);
            pages.push(ko.utils.extend({url:url,label:label},pg));
        });

        return pages;
    });
    //array of selected ids for bulk edit
    self.bulkEditIds=ko.computed(function(){
       var ids=[];
        ko.utils.arrayForEach(self.reports(),function(el){
           if(el.bulkEditSelected()){
               ids.push(el.executionId());
           }
        });
        return ids;
    });
    self.visitPage=function(page){
        loadHistoryLink(self,self.ajaxHistoryLink,page.url);
    };
    self.activateNowRunningTab=function() {
        jQuery('ul.activity_links > li:first-child').addClass('active');
        jQuery('ul.activity_links > li:first-child > a').each(function (e) {
            loadHistoryLink(self, self.ajaxNowRunningLink, this.getAttribute('href'), jQuery(this).data('auto-refresh'));
        });
    };

    self.toggleBulkEdit=function(){
        self.bulkEditMode(!self.bulkEditMode());
    };

    //report was clicked
    self.rowClicked=function(report, multiselect){
        if (!self.bulkEditMode()) {
            document.location=report.executionHref();
        } else {
            //select default input checkbox
            //if shift key held down
            var index = ko.utils.arrayIndexOf(self.reports(), report);
            if(multiselect && self.bulkEditPrevious()>=0){
                var prevVal = self.bulkEditPrevious();
                var a = prevVal < index ? prevVal : index;
                var b = prevVal < index ? index : prevVal;
                var c;
                var prevSel=report.bulkEditSelected();

                //traverse reports
                for(c=b;c>=a && c>=0;c--){
                    var x=self.reports()[c];
                    x.bulkEditSelected(!prevSel);
                }
            }else{
                report.bulkEditSelected(!report.bulkEditSelected());
            }
            self.bulkEditPrevious(index);
        }
    };
    self.bulkEditToggleAll=function(){
        ko.utils.arrayForEach(self.reports(),function(e){
            e.bulkEditSelected(!e.bulkEditSelected());
        });
    };
    self.bulkEditSelectAll=function(){
        ko.utils.arrayForEach(self.reports(),function(e){
            e.bulkEditSelected(true);
        });
    };
    self.bulkEditDeselectAll=function(){
        ko.utils.arrayForEach(self.reports(),function(e){
            e.bulkEditSelected(false);
        });
    };

    //bulk delete invoked
    self.doBulkDelete=function(modal,resultmodal){
        jQuery(modal).modal('hide');
        self.bulkEditProgress(true);
        jQuery.ajax({
            url: self.ajaxBulkDeleteLink,
            type:'post',
            data: JSON.stringify({"ids": self.bulkEditIds()}),
            contentType: 'application/json',
            dataType:'json',
            beforeSend:_ajaxSendTokens.curry('history_tokens'),
            success:function(data,status,xhr){
                self.bulkEditProgress(false);
                self.bulkEditResults(data);
                if(data.allsuccessful){
                    self.bulkEditMode(false);
                }else{
                    jQuery(resultmodal).modal('show');
                }
                self.reloadData();
            },
            error:function(xhr,status,err){
                self.bulkEditProgress(false);
                self.bulkEditResults({error:"Request did not succeed: "+((xhr.responseJSON && xhr.responseJSON.message)? xhr.responseJSON.message:err)});
                jQuery(resultmodal).modal('show');
            }
        }).success(_ajaxReceiveTokens.curry('history_tokens'));
    };

    //load dataset again
    self.reloadData=function(){
        loadHistoryLink(self,self.ajaxHistoryLink,self.href());
    }
}

var binding = {
    'reports': {
        key: function (data) {
            return ko.utils.unwrapObservable(data.id);
        },
        create: function (options) {
            return new Report(options.data);
        }
    },
    'nowrunning': {
        key: function (data) {
            return ko.utils.unwrapObservable(data.id);
        },
        create: function (options) {
            return new Report(jQuery.extend({execution: options.data},options.data));
        }
    }
};
function loadHistoryLink(history, ajaxBaseUrl, href,reload) {
    var params = href.substring(href.indexOf('?')+1);
    var url = ajaxBaseUrl.indexOf("?")>0? ajaxBaseUrl+'&' + params : ajaxBaseUrl+'?' + params;

    var handleResult;
    var load=function(){
        history.href(href);
        jQuery.getJSON(url, handleResult);
    };
    handleResult= function (data) {
        history.selected(true);
        ko.mapping.fromJS(Object.extend(data, { params: params }), binding, history);
        setTimeout(function(){
            if (reload && history.href() == href) {
                load();
            }
        }, reload * 1000);
    };
    load();
}

function setupActivityLinks(id, history) {
    var activitysection=jQuery('#' + id);
    activitysection.on('click','a.activity_link',function (e) {
        e.preventDefault();
        var me = jQuery(this)[0];
        jQuery('#' + id + ' .activity_links > li').removeClass('active');
        jQuery(me.parentNode).addClass('active');
        history.showReports(true);
        loadHistoryLink(history, history.ajaxHistoryLink, me.getAttribute('href'),jQuery(this).data('auto-refresh'));
    });
    activitysection.on('click','a.running_link',function (e) {
        e.preventDefault();
        var me = jQuery(this)[0];
        if(history.nowRunningEnabled()){
            jQuery('#' + id + ' .activity_links > li').removeClass('active');
            jQuery(me.parentNode).addClass('active');
            history.showReports(false);

            loadHistoryLink(history, history.ajaxNowRunningLink, me.getAttribute('href'), jQuery(this).data('auto-refresh'));
        }
    });

    //click handler for rows, and prevent shift-click selection in bulk edit mode
    activitysection.on('click', '.autoclick .autoclickable',function (e) {
        e.preventDefault();
        history.rowClicked(ko.dataFor(this), e.shiftKey);
        return false;
    }).on('mousedown', '.autoclick .autoclickable', function (e) {
        if (history.bulkEditMode()) {
            //prevent text selection for shift click
            e.preventDefault();
        }
    });
}

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
/*
 */
ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var handler = allBindings.get('executeOnEnter');
        jQuery(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                handler.call(bindingContext.$data,event);
                return false;
            }
            return true;
        });
    }
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function NodeFilterLinkParams(params){
    var self=this;
    self.linkicon=params.linkicon||'';
    self.classnames=params.classnames||'';
    self.filterval=params.filterval||'';
    self.filterkey=params.filterkey||'';
    self.filter=params.filter||'';
    self.linktext=params.linktext||'';
    self.textcss=params.textcss||'';
    self.suffix=params.suffix||'';
    self.tag=params.tag;
    self.title=params.title||'';
    self.filterData=function($root){
        if(self.filter){
            return {
                'data-node-filter':ko.unwrap(self.filter),
                href:$root.linkForFilterString(ko.unwrap(self.filter))
            }
        }else{
            return {
                'data-node-filter': $root.escapeFilter(self.filterkey + ':')+' ' + $root.escapeFilter(ko.unwrap(self.filterval)) ,
                href: $root.linkForFilterParams(self.filterkey,ko.unwrap(self.filterval))
            };
        }
    };
    self.attributes=function($root){
        var data= self.filterData($root);
        if(self.tag){
            data['data-node-tag']=ko.unwrap(self.tag);
        }
        if(self.title){
            data['title']=ko.unwrap(self.title);
        }
        return data;
    };
    self.viewtext=function(){
        return (self.linktext? ko.unwrap(self.linktext) : self.filter?ko.unwrap(self.filter):ko.unwrap(self.filterval))+ko.unwrap(self.suffix);
    };
}
ko.components.register('node-filter-link', {
    viewModel:NodeFilterLinkParams,
    template: '<a  class="nodefilterlink"  href="#"  data-bind="attr: attributes($root),  css: classnames"  > \
    <span data-bind="if: linkicon"><i data-bind="css: linkicon"></i></span>\
<span data-bind="if: !linkicon"><span data-bind="text: viewtext(), css: textcss"></span></span></a>'
});
/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
/**
 * hook to initialize custom bootstrap popover mechanism
 * &ltdiv data-bind="bootstrapPopover: true, bootstrapPopoverContentRef: '#elemid' &gt;
 * or
 * &ltdiv data-bind="bootstrapPopover: true, bootstrapPopoverContentFor: '#elemid' &gt;
 */
ko.bindingHandlers.bootstrapPopover = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if(allBindings.get('bootstrapPopoverContentRef')){
            _initPopoverContentRef(null,{element:element,contentRef:ko.unwrap(allBindings.get('bootstrapPopoverContentRef'))});
        }else if (allBindings.get('bootstrapPopoverContentFor')) {
            _initPopoverContentFor(null,{element:element,target:ko.unwrap(allBindings.get('bootstrapPopoverContentFor'))});
        }
    }
};

/**
 * Initializes bootstrap tooltip on the dom element. Usage: &lt;div data-bind="bootstrapTooltip: true" title="blah" &gt;
 * tip: if the title of the element is bound to an observable, pass the same one as the binding, like
 * &lt;div data-bind="bootstrapTooltip: mytooltipObservable" title="blah" &gt;, to trigger updates when it changes.
 * @type {{init: ko.bindingHandlers.bootstrapTooltip.init}}
 */
ko.bindingHandlers.bootstrapTooltip = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        "use strict";
        jQuery(element).tooltip({});

        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
            jQuery(element).tooltip("destroy");
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        "use strict";
        var val = valueAccessor();
        if(ko.isObservable(val)){
            val = ko.unwrap(val);
            jQuery(element).tooltip('destroy');
            jQuery(element).data('original-title',null);
            jQuery(element).tooltip({});
        }
    }
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
/*
 * Useful for i18n messages; replace the text content of an element, by substituting values into placeholders.
 * Placeholders are in the form '{0}','{1}', etc.  The "messageTemplate" binding value can be a single value, which
 * will be used for {0}, or it can be an object with a 'value' property, possibly observable, containing an array
 * for the replacement values.
 * If a binding "messageTemplatePluralize: true" is set, then the template text is treated as a singular and a plural
 * version of the same text, separated by "|" character.  If the first bound data value is "1", then singular form
 * is used, otherwise the plural form is used.
 *
 */
ko.bindingHandlers.messageTemplate = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        var text=jQuery(element).text();
        jQuery(element).data('ko-message-template',text);
        return { 'controlsDescendantBindings': true };
    },
    update:function(element, valueAccessor, allBindings, viewModel, bindingContext){
        var pluralize=allBindings.get('messageTemplatePluralize');
        var data=ko.utils.unwrapObservable(valueAccessor());
        var template=jQuery(element).data('ko-message-template');
        
        var text = messageTemplate(template,data,pluralize);
        ko.utils.setTextContent(element, text);
    }
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
//= require knockout-mapping
//= require knockout-onenter
//= require knockout-foreachprop
//= require knockout-node-filter-link
//= require ko/binding-popover
//= require ko/binding-message-template

var NODE_FILTER_ALL='.*';
function NodeSummary(data){
    var self=this;
    self.error=ko.observable();
    self.tags=ko.observableArray();
    self.filters=ko.observableArray();
    self.defaultFilter=ko.observable();
    self.totalCount=ko.observable(0);
    self.baseUrl=data.baseUrl?data.baseUrl:'';
    self.filterToDelete=ko.observable();
    
    self.reload=function(){
      jQuery.ajax({
          url:_genUrl(appLinks.frameworkNodeSummaryAjax),
          type:'GET',

          error:function(data,jqxhr,err){
              self.error('Recent commands list: request failed for '+requrl+': '+err+", "+jqxhr);
          }
      }).success(function(data){
          ko.mapping.fromJS(data,{},self);
      });
    };
    self.linkForTagFilter=function(tag){
        return _genUrl(self.baseUrl,{filter: 'tags:'+tag.tag()});
    };
    self.linkForFilterName=function(filter){
        return _genUrl(self.baseUrl,{filterName: filter.name()});
    };
    /**
     * Generate URL for the NodeFilters object
     * @param nodefilters
     * @returns {*}
     */
    self.linkForNodeFilters=function(nodefilters){
        return _genUrl(self.baseUrl,nodefilters.getPageParams());
    };
    self.findFilterByName=function(name){
        var found=ko.utils.arrayFilter(self.filters(),function(e){return e.name()==name;});
        if(found && found.length==1){
            return found[0];
        }else{
            return null;
        }
    };
    self.removeDefault=function(){
        setFilter('nodes','!').success(function(data, status, jqxhr){
            self.defaultFilter(null);
        });
    };
    self.setDefaultAll=function(){
        self.setDefault(NODE_FILTER_ALL);
    };

    self.setDefault=function(filter){
        var fname=null;
        if(typeof(filter)=='string'){
            if(filter==NODE_FILTER_ALL){
                fname=filter;
            }else {
                filter = self.findFilterByName(filter);
                if (!filter) {
                    return;
                }
                fname = filter.name();
            }
        }else{
            fname=filter.name();
        }
        setFilter('nodes',fname).success(function(data, status, jqxhr){
            self.defaultFilter(fname);
        });
    };
    self.deleteFilterConfirm=function(filter){
        if(typeof(filter)=='string'){
            filter = self.findFilterByName(filter);
            if(!filter){
                return;
            }
        }
        self.filterToDelete(filter);
        jQuery('#deleteFilterKOModal').modal('show');
    };
    self.deleteFilter=function(filter){

        jQuery('#deleteFilterKOModal').modal('hide');
        jQuery.ajax({
            url:_genUrl(appLinks.frameworkDeleteNodeFilterAjax,{filtername:filter.name()}),
            beforeSend: _ajaxSendTokens.curry('ajaxDeleteFilterTokens')
        }).success(function (resp, status, jqxhr) {
            self.filterToDelete(null);
            self.filters.remove(filter);
        }).success(_ajaxReceiveTokens.curry('ajaxDeleteFilterTokens'));
    };
    if(data) {
        ko.mapping.fromJS(data, {}, self);
    }
}
var CSSColors='aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen'.split(' ');
function NodeEntry(data){
    var self=this;

    if(data) {
        ko.mapping.fromJS(data, {}, self);
    }
}
function TagSummary(data){
    var self=this;
    self.tag=ko.observable(data.tag);
    self.value=ko.observable(data.value);
    if(data){
        ko.mapping.fromJS(data, {}, self);
    }
}
/**
 * The set of node results
 * @param data
 * @constructor
 */
function NodeSet(data) {
    var self = this;
    self.nodes=ko.observableArray([]);
    self.tagsummary=ko.observableArray([]);

    var mapping = {

        'nodes': {
            //nb: don't use a key: function because in some cases
            //we need a new dom element every time we redraw nodes,
            //and a key function will cause re-use of the element

            create: function (options) {
                return new NodeEntry(options.data);
            }
        }
        ,
        'tagsummary': {
            key: function (data) {
                return ko.utils.unwrapObservable(data.tag);
            },
            create: function (options) {
                return new TagSummary(options.data);
            }
        }
    };

    self.glyphiconCss=function(name){
        if(name.match(/^glyphicon-[a-z-]+$/)){
            return 'glyphicon '+name;
        }
        return '';
    };
    self.glyphiconBadges=function(attributes){
        var badges=[];
        if(attributes['ui:badges']){
            var found=attributes['ui:badges']().split(/,\s*/g);
            for(var i=0;i<found.length;i++){
                if(found[i].match(/^glyphicon-[a-z-]+$/)){
                    badges.push(found[i]);
                }
            }
        }

        return badges;
    };
    self.isAnsiFg=function(str){
        return str!=null && typeof(str)=='string' && str.match(/^ansi-fg-(light-)?(black|green|red|yellow|blue|magenta|cyan|white)$/);
    };
    self.isStyleFg=function(str){
        return str!=null && typeof(str)=='string' && str.match(/^#[0-9a-fA-F]{3,6}$/) || CSSColors.indexOf(str)>=0;
    };
    self.isAnsiBg=function(str){
        return str!=null && typeof(str)=='string' && str.match(/^ansi-bg-(black|green|red|yellow|blue|magenta|cyan|white|default)$/);
    };
    self.isStyleBg=function(str){
        return str!=null && typeof(str)=='string' && str.match(/^#[0-9a-fA-F]{3,6}$/)|| CSSColors.indexOf(str)>=0;
    };
    self.iconFgCss=function(attrs){

        var uiIconColor = attrs['ui:icon:color']?attrs['ui:icon:color']():null;
        var uiColor = attrs['ui:color']?attrs['ui:color']():null;
        if(self.isAnsiFg(uiIconColor)){
            return uiIconColor;
        }else if(self.isAnsiFg(uiColor)){
            return uiColor;
        }
        return null;
    };
    self.iconBgCss=function(attrs){
        var uiIconBgcolor = attrs['ui:icon:bgcolor']?attrs['ui:icon:bgcolor']():null;
        var uiBgcolor = attrs['ui:bgcolor']?attrs['ui:bgcolor']():null;
        if(self.isAnsiBg(uiIconBgcolor)){
            return uiIconBgcolor;
        }else if(self.isAnsiBg(uiBgcolor)){
            return uiBgcolor;
        }
        return null;
    };
    self.iconCss=function(attrs){
        var classnames=[];
        var fgColor= self.iconFgCss(attrs);
        if(fgColor){
            classnames.push(fgColor);
        }
        var bgColor = self.iconBgCss(attrs);
        if(bgColor){
            classnames.push(bgColor);
        }
        return classnames.join(' ');
    };
    self.nodeFgCss=function(attrs) {
        var uiColor = attrs['ui:color'] ? attrs['ui:color']() : null;
        if (self.isAnsiFg(uiColor)) {
            return uiColor;
        }
        return null
    };
    self.nodeBgCss=function(attrs) {
        var uiBgcolor = attrs['ui:bgcolor']?attrs['ui:bgcolor']():null;
        if(self.isAnsiBg(uiBgcolor)){
            return uiBgcolor;
        }
        return null
    };
    self.nodeCss=function(attrs){
        var classnames=[];
        var uiColor = self.nodeFgCss(attrs);
        if(uiColor){
            classnames.push(uiColor);
        }
        var uiBgcolor = self.nodeBgCss(attrs);
        if(uiBgcolor){
            classnames.push(uiBgcolor);
        }
        return classnames.join(' ');
    };
    self.iconStyle=function(attrs){

        var styles={};
        if(!self.iconFgCss(attrs)) {
            var uiIconColor = attrs['ui:icon:color']?attrs['ui:icon:color']():null;
            var uiColor = attrs['ui:color']?attrs['ui:color']():null;
            if (self.isStyleFg(uiIconColor)){
                styles['color']=uiIconColor;
            }else if(self.isStyleFg(uiColor)){
                styles['color']=uiColor;
            }
        }
        if(!self.iconBgCss(attrs)) {
            var uiIconBgcolor = attrs['ui:icon:bgcolor']?attrs['ui:icon:bgcolor']():null;
            var uiBgcolor = attrs['ui:bgcolor']?attrs['ui:bgcolor']():null;
            if (self.isStyleBg(uiIconBgcolor)){
                styles['background-color']=uiIconBgcolor;
            }else if(self.isStyleBg(uiBgcolor)){
                styles['background-color']=uiBgcolor;
            }
        }
        return styles;
    };
    self.nodeStyle=function(attrs){

        var styles={};
        var uiColor = attrs['ui:color']?attrs['ui:color']():null;
        if(!self.nodeFgCss(attrs) && self.isStyleFg(uiColor)){
            styles['color']=uiColor;
        }
        var uiBgcolor = attrs['ui:bgcolor']?attrs['ui:bgcolor']():null;
        if(!self.nodeBgCss(attrs) && self.isStyleBg(uiBgcolor)){
            styles['background-color']=uiBgcolor;
        }
        return styles;
    };
    self.startsWith = function (a, b) {
        return ( a.length >= (b.length)) && a.substring(0, b.length) == b;
    };

    self.attributesInNamespace=function(attrs,ns){
        var result=[];
        for(var e in attrs){
            if(self.startsWith(e, ns+':') && attrs[e]()){
                result.push({name:e,value:attrs[e](),shortname: e.substring(ns.length+1)});
            }
        }
        result.sort(function(a,b){return a.shortname.localeCompare(b.shortname);});
        return result;
    };
    self.attributeNamespaceRegex=/^(.+?):.+$/;
    self.attributeNamespaceNames=function(attrs){
        var namespaces=[];
        for(var e in attrs){
            var found=e.match(self.attributeNamespaceRegex);
            if(found && found.length>1){
                if(namespaces.indexOf(found[1])<0){
                    namespaces.push(found[1]);
                }
            }
        }
        namespaces.sort();
        return namespaces;
    };
    self.attributeNamespaces=function(attrs){
        var index={};
        var names=[];
        for(var e in attrs){
            var found=e.match(self.attributeNamespaceRegex);
            if(found && found.length>1){
                if(!index[found[1]]){
                    index[found[1]]=[];
                    names.push(found[1]);
                }
                index[found[1]].push({
                    name:e,
                    value:ko.utils.unwrapObservable(attrs[e]),
                    shortname: e.substring(found[1].length+1)
                });
            }
        }
        names.sort();

        var results=[];
        for(var i=0;i<names.length;i++){
            var values=index[names[i]];
            values.sort(function(a,b){return a.shortname.localeCompare(b.shortname);});
            results.push({ns:names[i],values:values});
        }

        return results;
    };
    self.OsAttributeNames='nodename hostname username description tags osFamily osName osVersion osArch'.split(' ');
    /**
     * Return an object with only attributes for display, excluding ui: namespace, and osAttrs
     *
     * @param attrs
     */
    self.displayAttributes = function (attrs) {
        var result = {};
        for(var e in attrs){
            if(e.indexOf(':')<0 && self.OsAttributeNames.indexOf(e)<0){
                result[e]=attrs[e];
            }
        }
        return result;
    };
    /**
     * Replace context variables in the string for the node details.
     * @param attrs
     * @param str
     */
    self.expandNodeAttributes=function(attrs,str){
        return str.replace(/\$\{node\.([a-zA-Z-.]+)\}/g,function(match, g1, offset, string){
            if(attrs[g1]){
                return attrs[g1]()||'';
            }else{
                return string;
            }
        });
    };
    self.convertTagSummary=function(obj){
        var arr=[];
        for(var e in obj){
            arr.push({tag:e,value:obj[e]});
        }
        return arr;
    };
    self.loadJS=function(data){
        ko.mapping.fromJS({
            nodes:data.nodes,
            tagsummary:self.convertTagSummary(data.tagsummary)
        },mapping,self);
    };
    if(data){
        self.loadJS(data);
    }
}
function NodeFilters(baseRunUrl, baseSaveJobUrl, baseNodesPageUrl, data) {
    var self = this;
    self.baseRunUrl = baseRunUrl;
    self.baseSaveJobUrl = baseSaveJobUrl;
    self.baseNodesPageUrl = baseNodesPageUrl;
    self.filterName = ko.observable(data.filterName);
    self.filter = ko.observable(data.filter);
    self.filterAll = ko.observable(data.filterAll);
    self.nodeExcludePrecedence = ko.observable(null== data.nodeExcludePrecedence || data.nodeExcludePrecedence?'true':'false');
    self.nodefilterLinkId=data.nodefilterLinkId;
    self.total = ko.observable(0);
    self.allcount = ko.observable(0);
    self.loading=ko.observable(false);
    self.error=ko.observable(null);
    self.project=ko.observable(data.project);
    self.page=ko.observable(data.page?data.page:0);
    self.pagingMax=ko.observable(data.pagingMax?data.pagingMax:20);
    self.paging=ko.observable(data.paging != null ? (data.paging ? true : false) : false);
    self.maxShown=ko.observable(data.maxShown);
    self.view=ko.observable(data.view);
    self.emptyMode=ko.observable(data.emptyMode?data.emptyMode:'localnode');
    self.emptyMessage=ko.observable(data.emptyMessage?data.emptyMessage:'No match');
    self.hideAll=ko.observable(data.hideAll!=null?(data.hideAll?true:false):false);
    self.nodeSummary=ko.observable(data.nodeSummary?data.nodeSummary:null);
    self.nodeSet=ko.observable(new NodeSet());
    self.truncated=ko.observable(false);
    self.loaded=ko.observable(false);
    /**
     *
     * can be subscribed to for browser history updating, will be changed to 'true'
     * when a browse event should be recorded, the listener should set it to false.
     */
    self.browse=ko.observable(false);
    /**
     * Names of node attributes to show as columns in table results
     */
    self.colkeys=ko.observableArray([]);

    /**
     * Display value of page number, indexed starting at 1,
     */
    this.pageDisplay = ko.computed({
        read: function () {
            return self.page()+1;
        },
        write: function (value) {
            self.page(value-1);
            self.browse(true);
            self.updateMatchedNodes();
        },
        owner: self
    });
    /**
     * Names of node attributes to show as columns removing ui: namespace
     */
    self.filterColumns=ko.pureComputed(function(){
       return ko.utils.arrayFilter(self.colkeys(),function(el){
           return !self.nodeSet().startsWith(el,'ui:');
       });
    });

    self.useDefaultColumns=ko.pureComputed(function(){
       return self.filterColumns().size()<1;
    });

    /**
     * Total column count for table view
     */
    self.totalColumnsCount=ko.pureComputed(function(){
       return self.useDefaultColumns()? 5 : 2 + self.filterColumns().size();
    });

    self.isFilterNameAll=ko.pureComputed(function(){
        return self.filterName()==NODE_FILTER_ALL;
    });
    self.filterNameDisplay=ko.pureComputed(function(){
       return self.isFilterNameAll()?'All Nodes':self.filterName();
    });
    self.canSaveFilter=ko.pureComputed(function(){
       return !self.filterName() && self.filterWithoutAll();
    });
    self.canDeleteFilter=ko.pureComputed(function(){
       return self.filterName() && !self.isFilterNameAll();
    });
    self.canSetDefaultFilter=ko.pureComputed(function(){
       return self.filterName() && self.filterName()!=self.nodeSummary().defaultFilter();
    });
    self.canRemoveDefaultFilter=ko.pureComputed(function(){
       return self.filterName() && self.filterName()==self.nodeSummary().defaultFilter();
    });
    self.deleteFilter=function(){
        self.nodeSummary().deleteFilterConfirm(self.filterName());
    };
    self.setDefaultFilter=function(){
        self.nodeSummary().setDefault(self.filterName());
    };
    self.pageRemaining=ko.computed(function(){
        if(self.total()<=0 || self.page()<0){
            return 0;
        }
        return self.allcount()-(self.page()+1)*self.pagingMax();
    });
    self.hasMoreNodes=ko.computed(function(){
        return self.pageRemaining()>0;
    });
    self.hasMultiplePages=ko.computed(function(){
        return self.pageRemaining()>self.pagingMax();
    });
    self.hasPaging=ko.computed(function(){
        return self.paging() && self.total()>self.pagingMax();
    });
    /**
     * highest number of pages
     */
    self.maxPages = ko.pureComputed(function(){
        return self.paging() && Math.ceil(self.total()/self.pagingMax());
    });
    self.pageNumbersSkipped=ko.computed(function(){
        var arr=[];
        var cur = self.page();
        var maxPages = self.maxPages();
        var buffer=3;
        for(var i=0;i< maxPages;i++){
            if(i>=(cur-buffer) && i<=(cur+buffer) || i<buffer || i>=(maxPages-buffer)) {
                arr.push(i);
            }else if(i==(cur-buffer-1) || i==(cur+buffer+1)) {
                arr.push('..');
            }
        }
        return arr;
    });
    self.nodesTitle = ko.computed(function () {
        return self.allcount() == 1 ?
            data.nodesTitleSingular || 'Node' :
            data.nodesTitlePlural || 'Nodes';
    });
    self.filterWithoutAll = ko.computed({
        read: function () {
            if (self.filterAll() && self.filter() == NODE_FILTER_ALL && self.hideAll()) {
                return '';
            }
            return self.filter();
        },
        write: function (value) {
            self.filter(value);
        },
        owner: this
    });
    self.filterIsSet=ko.pureComputed(function(){
        return !!self.filterWithoutAll() || !!self.filterName();
    });
    self.filter.subscribe(function (newValue) {
        if (newValue == '' && self.hideAll()) {
            self.filterAll(true);
        }else if(newValue==NODE_FILTER_ALL){
            self.filterAll(true);
        }
    });
    self.filter.subscribe(function (newValue) {
        if (newValue == '' && self.emptyMode() == 'blank') {
            self.clear();
        }
    });
    self.filter.subscribe(function (newValue) {
        if (newValue === NODE_FILTER_ALL) {
            self.filterName(NODE_FILTER_ALL);
        }else if (newValue != '' && self.filterName()) {
            self.filterName(null);
        }
    });
    self.nodeExcludePrecedence.subscribe(function(newValue){
        self.updateMatchedNodes();
    });
    self.loading.subscribe(function(newValue){
        if(!newValue){
            self.loaded(true);
        }
    });
    self.hasNodes = ko.computed(function () {
        return 0 != self.allcount();
    });
    self.runCommand = function () {
        document.location = _genUrl(self.baseRunUrl, {
            filter: self.filter(),
            filterName: self.filterName() ? self.filterName() : ''
        });
    };
    self.saveJob = function () {
        document.location = _genUrl(self.baseSaveJobUrl, {
            filter: self.filter(),
            filterName: self.filterName() ? self.filterName() : ''
        });
    };
    self.nodesPageView=function(){
        document.location = _genUrl(self.baseNodesPageUrl, {
            filter: self.filter(),
            filterName: self.filterName()? self.filterName():''
        });
    };
    self.clear=function(){
        self.page(0);
        self.total(0);
        self.allcount(-1);
    };
    /**
     * clear filters and results count
     */
    self.reset=function(){
        self.clear();
        self.filterAll(false);
        self.filterWithoutAll(null);
        self.filterName(null);
    };
    /**
     * Use a specific filter string and update
     * @param filter the filter string
     */
    self.useFilterString=function(filter){
        self.filterAll(false);
        self.filterWithoutAll(filter);
        self.filterName(null);
        self.clear();
        self.updateMatchedNodes();
    };
    /**
     * Generate state object for the current filter
     * @returns {{filter: (*|string), filterName: (*|string), filterAll: (*|string)}}
     */
    self.getPageParams=function(){
        return {
            filter: self.filter()||'',
            filterName: self.filterName()||'',
            filterAll: self.filterAll()||'',
            page:self.page()||0,
            max:self.pagingMax()||20
        };
    };
    /**
     * generate URL for the current filters
     */
    self.getPageUrl=function(){
        return self.nodeSummary().linkForNodeFilters(self);
    };
    /**
     * Generate filter string for params
     * @param params
     */
    self.escapeFilter=function(str){

        if(str != '' && !(str.match(/[ '"\r\n]/))){
            return str==null?'':str;
        }
        var outstr='"';
        if(null!=str) {
            outstr += str.replace(/"/g, '""');
        }
        outstr+='"';
        return outstr;
    };
    /**
     * Generate filter string for params
     * @param params
     */
    self.paramsAsfilter=function(params){
        var comps=[];
        for (var e in params) {
            comps.push(self.escapeFilter(e + ":"));
            comps.push(self.escapeFilter(params[e]));
        }
        return comps.join(" ");
    };
    self.linkForFilterString=function(filter){
        return _genUrl(self.baseNodesPageUrl,{filter:filter});
    };
    /**
     * Generate URL for some filter params
     * @param params
     * @returns {*}
     */
    self.linkForFilterParams=function(params,extra){
        var filter;
        if(typeof(params) == 'object'){
            filter=self.paramsAsfilter(params);
        }else if(typeof(params)=='string' && typeof(extra)=='string'){
            var nparams={};
            nparams[params]=extra;
            filter=self.paramsAsfilter(nparams);
        }
        return self.linkForFilterString(filter);
    };
    self.triggerNodeRemoteEdit=function(node){
        doRemoteEdit(node.nodename(),self.project(),self.nodeSet().expandNodeAttributes(node.attributes,node.attributes['remoteUrl']()))
    };
    /**
     * Update to match state parameters
     * @param data
     */
    self.setPageParams=function(data){
        self.filterAll(data.filterAll);
        self.filter(data.filter);
        self.filterName(data.filterName);
        self.clear();
        self.page(data.page||0);
        self.pagingMax(data.max||20);
        self.updateMatchedNodes();
    };
    self.selectNodeFilterLink=function(link,isappend){
        var oldfilter = self.filter();
        var filterName = jQuery(link).data('node-filter-name');
        var filterString = jQuery(link).data('node-filter');
        var filterTag = jQuery(link).data('node-tag');
        if(filterString && filterString.indexOf("&")>=0){
            filterString = html_unescape(filterString);
        }
        var filterAll = jQuery(link).data('node-filter-all');
        var v=oldfilter?oldfilter.indexOf('tags: '):-1;
        if(isappend && filterTag && v>=0){
            var first=oldfilter.substring(0, v);
            var rest=oldfilter.substring(v + 6);
            var last='';
            while(rest.indexOf(" ")==0){
                rest = rest.substring(1);
            }
            v = rest.indexOf(" ");
            if(v>0){
                last = rest.substring(v);
                rest = rest.substring(0,v);
            }
            filterString = first + 'tags: ' + rest + '+' + filterTag + last ;
        }else if (filterString && !filterName && oldfilter && !filterAll && oldfilter != NODE_FILTER_ALL) {
            filterString = oldfilter + ' ' + filterString;
        } else if (filterAll) {
            filterString = NODE_FILTER_ALL;
        }
        self.filterAll(filterAll);
        self.filter(filterString);
        self.filterName(filterName);
        self.clear();
        self.updateMatchedNodes();
    };
    self.updateNodesNextPage=function(){
        if(!self.page()){
            self.page(0);
        }
        self.page(self.page()+1);
        self.updateMatchedNodes();
    };
    self.browseNodesPage=function(newpage){
        if(self.page()==newpage){
            return;
        }
        if (!newpage || newpage >= self.maxPages() || newpage < 0) {
            newpage=0;
        }
        self.pageDisplay(newpage+1);
    };
    self.browseNodesPageNext=function(){
        if(self.page()+ 1<self.maxPages()) {
            self.browseNodesPage(self.page() + 1);
        }
    };
    self.browseNodesPagePrev=function(){
        if(self.page()>0) {
            self.browseNodesPage(self.page() - 1);
        }
    };
    self.browseNodesPageUrl=function(page){
        var pageParams = self.getPageParams();
        if (page >= 0 && page < self.maxPages()) {
            pageParams.page = page;
        }else{
            pageParams.page=0;
        }
        return _genUrl(self.baseNodesPageUrl, pageParams);
    };
    self.browseNodesPagePrevUrl=function(){
        return self.browseNodesPageUrl(self.page()-1);
    };
    self.browseNodesPageNextUrl=function(){
        return self.browseNodesPageUrl(self.page()+1);
    };
    self.updateNodesRemainingPages=function(){
        self.page(-1);
        self.updateMatchedNodes();
    };
    self.loadJS=function(data){
        ko.mapping.fromJS(data,{},self);
    };
    self.pagingMax.subscribe(function (){
        self.updateMatchedNodes();
    });
    self.newFilterText=function(){
        self.page(0);
        self.updateMatchedNodes();
    };
    self.updateMatchedNodes= function () {
        if(!self.filter() && self.emptyMode()=='blank'){
            return;
        }
        var project=self.project();
        if (!project) {
            return;
        }
        var filterdata = self.filterName() ? {filterName: self.filterName()} : self.filter()?{filter: self.filter()}:{};
        var page = self.page();
        var view = self.view() ? self.view() : 'table';
        var basedata = {view: view, declarenone: true, fullresults: true, expanddetail: true, inlinepaging: false, nodefilterLinkId: self.nodefilterLinkId};
        if(self.paging()){
            basedata.page = page;
            basedata.max = self.pagingMax();
            basedata.inlinepaging=true;
            if (page != 0) {
                basedata.view= 'tableContent';
            }
        }
        if(self.maxShown()){
            basedata.maxShown=self.maxShown();
        }

        var params = Object.extend(basedata, filterdata);
        if(self.emptyMode()=='localnode' && !self.filter()){
            params.localNodeOnly = 'true';
        }else if(self.emptyMode()=='blank' && !self.filter()){
            self.clear();
            return;
        }
        var exclude=self.nodeExcludePrecedence();
        if (typeof(exclude) == 'string' && exclude === "false"
            || typeof(exclude) == 'boolean' && !exclude) {
            params.nodeExcludePrecedence = "false";
        } else {
            params.nodeExcludePrecedence = "true";
        }
        self.loading(true);

        var requrl=_genUrl(appLinks.frameworkNodesQueryAjax, params);
        jQuery.ajax({
            type:'GET',
            dataType:'json',
            url:requrl,

            error:function(data,jqxhr,err){
                self.loading(false);
                if (typeof(errcallback) == 'function') {
                    self.error('Failed '+requrl+': '+err+", "+jqxhr);
                }
            },
            success:function(data,status,jqxhr){
                self.loading(false);
                self.nodeSet().loadJS(
                    {
                        nodes:data.allnodes,
                        tagsummary:data.tagsummary
                    });
                self.loadJS({
                    allcount:data.allcount,
                    total:data.total,
                    truncated:data.truncated,
                    colkeys:data.colkeys

                });

            }
        });
    };
}

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
//= require knockout-mapping

function AdhocLink(data,nodefilter) {
    var self = this;
    self.nodefilter=nodefilter;
    self.href=ko.observable(null);
    self.title=ko.observable(null);
    self.execid=ko.observable(null);
    self.filter=ko.observable(null);

    self.status=ko.observable(null);
    self.succeeded=ko.observable(null);

    var statusMap={
        'scheduled':'running',
        'running':'running',
        'succeed':'succeed',
        'succeeded':'succeed',
        'fail':'fail',
        'failed':'fail',
        'cancel':'aborted',
        'aborted':'aborted',
        'retry':'failedretry',
        'timedout':'timedout',
        'timeout':'timedout'
    };

    self.statusClass=ko.pureComputed(function(){
        var css=statusMap[self.status()];
        return css?css:'other';
    });

    //set the command and filter strings
    self.fillCommand=function(){
        jQuery('#runFormExec').val(self.title());
        self.nodefilter.useFilterString(self.filter());
    };

    ko.mapping.fromJS(data,{},self);
}
function AdhocCommand(data,nodefilter) {
    var self = this;
    self.nodefilter=nodefilter;
    self.loadMax=20;
    self.recentCommandsLoaded=ko.observable(false);
    self.recentCommands=ko.observableArray([]);
    self.commandString=ko.observable();
    self.commandStringDelayed = ko.pureComputed(this.commandString)
        .extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 1000 } });
    self.running=ko.observable(false);
    self.canRun=ko.observable(false);
    self.allowInput = ko.pureComputed(function(){
       return !self.running() && self.canRun();
    });
    self.followControl=null;
    var mapping = {
        'recentCommands': {
            create: function (options) {
                return new AdhocLink(options.data,self.nodefilter);
            }
        }
    };
    self.recentCommandsNoneFound=ko.pureComputed(function(){
        return self.recentCommands().length<1 && self.recentCommandsLoaded();
    });
    self.loadList=function(params){
        var requrl=_genUrl(appLinks.adhocHistoryAjax,jQuery.extend({max:self.loadMax},params));
        return jQuery.ajax({
            type:'GET',
            url:requrl,

            error:function(data,jqxhr,err){
                runError('Recent commands list: request failed for '+requrl+': '+err+", "+jqxhr);
            }
        });
    };
    self.loadRecentCommands=function(){
        self.loadList({}).done(function (data,status,xhr) {
            self.recentCommandsLoaded(true);
            try {
                ko.mapping.fromJS({recentCommands:data.executions},mapping,self);
            } catch (e) {
                console.log('Recent commands list: error receiving data',e);
                runError('Recent commands list: error receiving data: '+e);
            }
        });
    };
    //self.commandStringDelayed.subscribe(function(newval){
    //    if(newval && newval.length>3) {
    //        self.loadList({query: newval}).done(function (data, status, xhr) {
    //            console.log('new query: ' + newval, data);
    //        });
    //    }
    //});
    if(data){
        ko.mapping.fromJS(data,{},self);
    }
}

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require knockout.min
/*
 * Useful for generated URLs; replace a path element of a href URL, by substituting values into placeholders.
 * Placeholders are in the form '<$>'.  The "messageTemplate" binding value can be a single value, which
 * will be used for the first $, or it can be an object with a 'value' property, possibly observable, containing an array
 * for the replacement values.
 *
 */
ko.bindingHandlers.urlPathParam = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        var text=jQuery(element).attr('href');
        jQuery(element).data('ko-orig-href',text);
    },
    update:function(element, valueAccessor, allBindings, viewModel, bindingContext){
        var data=ko.utils.unwrapObservable(valueAccessor());
        var template=jQuery(element).data('ko-orig-href');
        var values=[];
        if(typeof(data)!='object'){
            values=[data];
        }else if(jQuery.isArray(data)){
            values=data;
        }else if(typeof(data)=='object'){
            values=ko.utils.unwrapObservable(data['value']);
            if(!jQuery.isArray(values)){
                values=[values];
            }
        }
        for(var i=0;i<values.length;i++){
            values[i] = ko.utils.unwrapObservable(values[i]);
        }
        var count=0;
        var text = template.replace(/%3C%24%3E/ig,function(match, offset, string){
            return values[count++];
        });
        element.setAttribute('href',text);
    }
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require momentutil
//= require knockout.min
//= require knockout-mapping
//= require ko/binding-popover
//= require ko/binding-url-path-param


/**
 * Info about an indexed step within a particular job
 * @param parent
 * @param ndx 0 based index
 * @param data
 * @constructor
 */
function JobStepInfo(parent,ndx,data){
    "use strict";
    var self = this;
    /**
     * Owner is a JobWorkflow
     */
    self.parent = parent;
    self.ndx = ndx;
    self.jobId = ko.observable(data.id);
    self.ehJobId = ko.observable(data.ehId);
    self.type = ko.observable(data.type||'unknown-step-type');
    self.stepident = ko.observable(data.stepident||'(Unknown)');
    self.ehType = ko.observable(data.ehType);
    self.ehStepident = ko.observable(data.ehStepident);
    self.ehKeepgoingOnSuccess = ko.observable(data.ehKeepgoingOnSuccess);
}

/**
 * A job containing a sequence of steps
 * @param multi multiworkflow object
 * @param workflow array of JobStepInfo
 * @param id job id
 * @constructor
 */
function JobWorkflow(multi,workflow,id){
    "use strict";
    var self=this;
    self.id=id;
    self.multi=multi;
    self.workflow=workflow||[];

    /**
     * Insert a step
     * @param ndx index
     * @param data step
     */
    self.insert=function(ndx,data){
        self.workflow[ndx]=data;
    };
}
/**
 * A step in an execution identified by a stepctx string,
 * which corresponds to a particular job step within the hierarchy
 * @param stepctx step context string for this step
 * @param data data
 * @constructor
 */
function WorkflowStepInfo(multiworkflow,stepctx,data){
    "use strict";
    var self = this;
    /**
     * The MultiWorkflow
     */
    self.multiworkflow=multiworkflow;
    /**
     * The step context
     */
    self.stepctx = stepctx;
    self.stepctxArray = ko.observableArray(RDWorkflow.parseContextId(stepctx));
    /**
     * the job referenced by this step
     * @type {null}
     */
    self.job = data.job;
    /**
     * the job referenced by an error handler
     */
    self.ehJob = data.ehJob;
    /**
     * The JobStepInfo containing the details of the step
     */
    self.jobstep = ko.observable();
    /**
     * Job ID
     */
    self.jobId = ko.observable(data.id);
    /**
     * ID of errorhandler Job
     */
    self.ehJobId = ko.observable(data.ehId);
    /**
     * Step type info
     */
    self.type = ko.observable(data.type||'unknown-step-type');
    /**
     * Step type info
     */
    self.ehType = ko.observable(data.ehType);
    /**
     * Step identity string
     */
    self.stepident = ko.observable(data.stepident||'Step: '+stepctx);
    /**
     * Error handler step identity
     */
    self.ehStepident = ko.observable(data.ehStepident);
    self.ehKeepgoingOnSuccess = ko.observable(data.ehKeepgoingOnSuccess);

    self.hasParent=ko.pureComputed(function(){
       return self.stepctxArray().length>1;
    });

    /**
     * Return true if this step is a job ref step or has a parent job
     */
    self.hasLink=ko.pureComputed(function () {
        var has = self.hasParent();
        var isjob = self.type() == 'job';
        return has || isjob;
    });

    /**
     * Return appropriate JobID for linking this step,
     * for a non-job reference, this is the parent Job ID.
     * For a
     */
    self.linkJobId=ko.pureComputed(function(){
        if(self.type()=='job'){
            return self.jobId();
        }else if(self.hasParent()){
            return self.parentJobId();
        }else{
            return self.multiworkflow.jobId;
        }
    });
    /**
     * Return the title for linked job
     */
    self.linkTitle=ko.pureComputed(function(){
        if(self.type()=='job'){
            return self.stepident();
        }else if(self.hasParent()){
            return self.parentJobTitle();
        }else{
            return 'Current Job';
        }
    });
    self.parentJobId=ko.pureComputed(function(){
        var has=self.hasParent();
        var parent=self.parentStepInfo();
        if(has && parent){
            if(parent.isErrorhandler()){
                return parent.ehJobId();
            }
            return parent.jobId()||parent.ehJobId();
        }
        return null;
    });
    self.parentJobTitle=ko.pureComputed(function(){
        var has=self.hasParent();
        var parent=self.parentStepInfo();
        if(has && parent){
            if(parent.isErrorhandler()){
                return parent.ehStepident();
            }
            return parent.jobId() && parent.stepident() ||parent.ehStepident();
        }
        return null;
    });

    self.parentStepInfo=ko.computed(function(){
        var ctx=self.stepctxArray();
        if(ctx.length>1) {
            var parent = ctx.slice(0, -1).join('/');
            return self.multiworkflow.getStepInfoForStepctx(parent);
        }
        return null;
    });
    /**
     * Step number
     */
    self.stepnum=ko.pureComputed(function(){
        var stepctxArray = self.stepctxArray();
        if(stepctxArray.length>0){
            return RDWorkflow.stepNumberForContextId(stepctxArray[stepctxArray.length-1]);
        }else{
            return null;
        }
    });
    /**
     * Step is error handler
     */
    self.isErrorhandler=ko.pureComputed(function(){
        var stepctxArray = self.stepctxArray();
        if(stepctxArray.length>0){
            for(var i =0;i<stepctxArray.length;i++){
                if(RDWorkflow.isErrorhandlerForContextId(stepctxArray[i])){
                    return true;
                }
            }
        }
        return false;
    });

    /**
     * Computed name like "1. stepident"
     */
    self.stepdesc=ko.pureComputed(function(){
        var num = self.stepnum();
        if(!num){
            return null;
        }
        return num+". "+self.stepident();
    });
    /**
     * Computed name like "1. stepident"
     */
    self.stepdescFull=ko.pureComputed(function(){
        var num = self.stepnum();
        if(!num){
            return null;
        }
        var text= self.stepdesc();
        if(self.isErrorhandler() && self.ehType()){
            text=text+' ! '+self.ehStepident();
        }
        return text;
    });
    /**
     * full context string
     */
    self.stepctxString=ko.pureComputed(function(){
        return self.stepctx;
    });
    /**
     * Clean context string
     */
    self.stepctxClean=ko.pureComputed(function(){
        return 'Workflow step: '+RDWorkflow.cleanContextId(self.stepctx)
    });
    /**
     * Clean context string
     */
    self.stepctxPathFull=ko.computed(function(){
        var ctx=self.stepctxArray();
        if(ctx.length>1){
            var obj=self.parentStepInfo();
            return obj.stepctxPathFull()+' / '
                    // + ctx[ctx.length-1]
                    + self.stepdescFull()
                ;
        }else{
            return self.stepdescFull();
        }
    });
    /**
     * When a JobStepInfo is set for this step, update our details
     */
    self.jobstep.subscribe(function(newval){
        if(newval) {
            self.type(newval.type());
            self.stepident(newval.stepident());
            self.jobId(newval.jobId());
            self.ehJobId(newval.ehJobId());
            self.ehType(newval.ehType());
            self.ehStepident(newval.ehStepident());
            self.ehKeepgoingOnSuccess(newval.ehKeepgoingOnSuccess());
        }
    });
}
/**
 * Cache of loaded job workflow data, keyed by job ID
 * @param url remote URL for loading job workflow data
 * @param data any preloaded data
 * @constructor
 */
function JobWorkflowsCache(url,data){
    "use strict";
    var self=this;
    /**
     * Remote url
     */
    self.url=url;
    /**
     * loaded data: ID -> ko.observable(Object)
     */
    self.jobs=jQuery.extend({},data);
    /**
     * Load remote data for a job ID, add it to the cache
     * @param id
     * @returns {*}
     */
    self.load=function(id){
        return jQuery.ajax({
            url:_genUrl(self.url,{id:id}),
            method:'GET',
            contentType:'json',
            success:function(data){
                // setTimeout(function(){
                    self.add(id,data.workflow);
                // },2000);
            }
        });
    };
    /**
     * add job ID data
     * @param id job ID
     * @param value data
     */
    self.add=function(id,value){
        if(self.jobs[id] && ko.isObservable(self.jobs[id])){
            self.jobs[id](value);
        }else {
            self.jobs[id] = ko.observable(value);
        }
    };
    /**
     * One time subscription to observable, will be disposed after first call
     * @param obs observable
     * @param then callback
     */
    self.tempSubscribe=function(obs,then){
        var sub;
        sub=obs.subscribe(function(data){
            sub.dispose();
            then(data);
        });
    };
    /**
     * Get data for an ID
     * @param id ID
     * @param then callback for result of data, may be called immediately if data is available
     */
    self.getJob=function(id,then){
        if(self.jobs[id] && ko.isObservable(self.jobs[id]) && self.jobs[id]()){
            then(self.jobs[id]());
        }else if(ko.isObservable(self.jobs[id])){
            self.tempSubscribe(self.jobs[id],then);
        }else{
            self.jobs[id]=ko.observable();
            self.tempSubscribe(self.jobs[id],then);
            self.load(id);
        }
    };
}

/**
 * Manage display data for execution workflow steps
 * @param parent owner is a NodeFlowViewModel
 * @param data config data: 'dynamicStepDescriptionDisabled' (true/false) if true, do not load any dynamic data.
 *      'workflow' preloaded top level workflow info
 *      'id' job/execution ID
 * @constructor
 */
function MultiWorkflow(workflowInfo,data){
    "use strict";
    var self=this;
    /**
     * workflowInfo is a RDWorkflow
     */
    self.workflowInfo=workflowInfo;
    /**
     * If true, do not load data dynamically
     */
    self.dynamicStepDescriptionDisabled=data.dynamicStepDescriptionDisabled;
    /**
     * Cache for loaded data
     * @type {JobWorkflowsCache}
     */
    self.cache=new JobWorkflowsCache(data.url,{});
    /**
     * JobWorkflow if initial workflow is loaded
     * @type {JobWorkflow}
     */
    self.job=null;
    /**
     * ID of job or execution
     */
    self.jobId=data.id;
    /**
     * Placeholder indicating a JobWorkflow data has or will be loaded. Object: Job ID->JobWorkflow
     * @type {{}}
     */
    self.workflowsets={};
    /**
     * context-string-id -> WorkflowStepInfo
     * @type {{}}
     */
    self.stepinfoset={};

    /**
     * Load or return a JobWorkflow with all workflow data filled in
     * @param id job ID
     * @param callback called with the JobWorkflow as a parameter after loading
     * @returns {JobWorkflow}
     */
    self.loadJob=function(id,callback){
        if(self.workflowsets[id] && self.workflowsets[id].workflow.length>0){
            //job data was already loaded, so return existing
            callback(self.workflowsets[id]);
            return self.workflowsets[id];
        }
        //create or retrieve an entry in the workflowsets indicating loading for the job will start
        self.workflowsets[id] = self.workflowsets[id] || new JobWorkflow(self, [], id);
        var job = self.workflowsets[id];
        //ask cache to load or return cached data
        self.cache.getJob(id,function(data){
            //if this is the first time loading this data, we need to fill in the workflow for the job
            var job = self.fillJobWorkflow(id,data);
            //result will be JobWorkflow
            callback(job);
        });
        return job;
    };

    /**
     * Given ID and possible preloaded workflow data, update the job cache
     * @param id job ID
     * @param workflow preloaded workflow, or null may cause remote load if not already in the cache
     */
    self.updateJobCache=function(id,workflow){
        if(id && !self.workflowsets[id]){
            if(workflow) {
                //if workflow is available, put it in the cache
                self.cache.add(id, workflow);
            }
            self.loadJob(id,function(){});
        }
    };
    /**
     * Fill in a JobWorkflow's workflow given ID and steps, if not already filled in
     * @param id job ID
     * @param steps load workflow step data
     * @returns {JobWorkflow}
     */
    self.fillJobWorkflow=function (id, steps) {
        "use strict";
        if(self.workflowsets[id] && self.workflowsets[id].workflow.length>0){
            //job data was already loaded, so return existing
            return self.workflowsets[id];
        }
        var job = self.workflowsets[id] || new JobWorkflow(self, [], id);
        self.workflowsets[id] = job;

        for (var x = 0; x < steps.length; x++) {
            var stepdata={
                type: _wfTypeForStep(steps[x]),
                stepident: _wfStringForStep(steps[x]),
                id:steps[x].jobId
            };
            if(steps[x].errorhandler){
                //errorhandler info for the job
                stepdata.ehType=_wfTypeForStep(steps[x].errorhandler);
                stepdata.ehStepident=_wfStringForStep(steps[x].errorhandler);
                stepdata.ehKeepgoingOnSuccess=_wfStringForStep(steps[x].errorhandler.keepgoingOnSuccess);
            }
            if(steps[x].ehJobId){
                //errorhandler job id
                stepdata.ehId=steps[x].ehJobId;
            }

            job.insert(x,new JobStepInfo(job,x,stepdata));

            if (stepdata.type == 'job') {
                //load job reference if not already in progress
                self.updateJobCache(stepdata.id,steps[x].workflow);
            }
            //do the same for error handler job reference
            if (stepdata.ehId) {
                self.updateJobCache(stepdata.ehId,steps[x].ehWorkflow);
            }
        }

        return job;
    };

    /**
     * Get stepctx info for a parent job reference, with loaded workflow for the job
     * @param parentctx
     * @param callback called with WorkflowStepInfo parameter
     */
    self.getParentJobStepInfoForStepctx=function(parentctx,callback){
        if(parentctx) {
            //load higher level
            self.getStepInfoForStepctx(parentctx, function (parentinfo) {
                if(parentinfo.type()=='job' && parentinfo.jobId()){
                    //load subjob for this step
                    self.loadJob(parentinfo.jobId(),function(job){
                        parentinfo.job=job;
                        if(parentinfo.ehJobId()) {
                            self.loadJob(parentinfo.ehJobId(), function (job) {
                                parentinfo.ehJob = job;
                                callback(parentinfo);
                            });
                        }else {
                            callback(parentinfo);
                        }
                    });
                }else if(parentinfo.ehJobId()){
                    self.loadJob(parentinfo.ehJobId(),function(job){
                        parentinfo.ehJob=job;
                        callback(parentinfo);
                    });
                }else{
                    console.log("stepctx was not job: "+parentctx,parentinfo);
                    //callback(stepinfo);
                }
            });
        }else {
            //parent is top level job
            self.loadJob(self.jobId, function(job){
                callback(new WorkflowStepInfo(self,'',{id:self.jobId,type:'job',job:job}));
            });
        }
    };
    /**
     * Look up step context info for a context string. If not dynamic, returns the placeholder object,
     * otherwise looks up step info dynamically and returns WorkflowStepInfo via callback
     * @param stepctx context string
     * @param callback called with WorkflowStepInfo
     * @returns {*} WorkflowStepInfo which may not have loaded contents, or placeholder object
     */
    self.getStepInfoForStepctx=function(stepctx,callback){
        "use strict";
        if(self.dynamicStepDescriptionDisabled){
            if(!self.stepinfoset[stepctx]) {
                self.stepinfoset[stepctx] = new WorkflowStepInfo(self, stepctx, {
                    type: self.workflowInfo.contextType(stepctx),
                    stepident: self.workflowInfo.renderContextString(stepctx)
                });
            }
            return self.stepinfoset[stepctx];
        }
        if(self.stepinfoset[stepctx]){

            var stepinfo = self.stepinfoset[stepctx];
            if(typeof(callback)=='function' && stepinfo.jobstep()){
                callback(stepinfo);
            }else if (typeof(callback)=='function'){
                var remove;
                remove=stepinfo.jobstep.subscribe(function(newval){
                    if(newval) {
                        remove.dispose();
                        callback(stepinfo);
                    }
                });
            }
            return stepinfo;
        }
        var info = new WorkflowStepInfo(self,stepctx,{});
        self.stepinfoset[stepctx] = info;
        var ctx = RDWorkflow.parseContextId(stepctx);
        var lastctx=ctx.pop();
        var ndx = RDWorkflow.workflowIndexForContextId(lastctx);

        //get the parent workflow, and then fill in the current step
        self.getParentJobStepInfoForStepctx(ctx.join('/'),function(parentjobinfo){
            //TODO: currently node summary state context string does not indicate errorHandler, but
            //in case it does in the future, force use of correct job info
            var iseh=ctx.length>0?RDWorkflow.isErrorhandlerForContextId(ctx[ctx.length-1]):false;
            var job = iseh?parentjobinfo.ehJob:(parentjobinfo.job||parentjobinfo.ehJob);
            var jobstep = job && job.workflow[ndx];
            info.parent=job;
            info.jobstep(jobstep);

            if(typeof(callback)=='function'){
                callback(info);
            }
        });

        return info;
    };
    /**
     * Initialize with preloaded data
     * @param data
     */
    self.initialLoad=function(data){
        //only trigger load if containing a preloaded workflow
        if(data.workflow) {
            self.updateJobCache(data.id, data.workflow);
        }
    };
    self.initialLoad(data);
}
/**
 * Represents a (node, stepctx) state.
 * @param data state data object
 * @param node RDNode object
 * @param flow NodeFlowViewModel object
 * @constructor
 */
function RDNodeStep(data, node, flow){
    var self = this;
    self.node = node;
    self.flow = flow;
    self.stepctx = data.stepctx;
    self.stepinfo=ko.observable(flow.multiWorkflow.getStepInfoForStepctx(data.stepctx));
    self.type = ko.observable(flow.workflow.contextType(data.stepctx));
    self.stepident = ko.observable(flow.workflow.renderContextString(data.stepctx));
    self.stepctxdesc = ko.observable("Workflow Step: " + data.stepctx);
    self.parameters = ko.observable(data.parameters || null);
    self.followingOutput = ko.observable(false);
    self.hovering = ko.observable(false);
    self.outputLineCount = ko.observable(-1);
    self.startTime = ko.observable(data.startTime || null);
    self.updateTime = ko.observable(data.updateTime || null);
    self.endTime = ko.observable(data.endTime || null);
    self.duration = ko.observable(data.duration || -1);
    self.executionState = ko.observable(data.executionState || null);
    self.parameterizedStep = ko.observable(data.stepctx.indexOf('@')>=0);
    self.startTimeSimple=ko.pureComputed(function(){
        //TODO: fix incorrect startTime format: it is not actually UTC time
        return MomentUtil.formatTimeSimpleUTC(self.startTime());
    });
    self.startTimeFormat=function(format){
        //TODO: fix incorrect startTime format: it is not actually UTC time
        return MomentUtil.formatTimeUTC(self.startTime(),format);
    };
    self.endTimeSimple=ko.pureComputed(function(){
        //TODO: fix incorrect endTime format: it is not actually UTC time
        return MomentUtil.formatTimeSimpleUTC(self.endTime());
    });
    self.endTimeFormat= function (format) {
        //TODO: fix incorrect endTime format: it is not actually UTC time
        return MomentUtil.formatTimeUTC(self.endTime(), format);
    };
    self.durationCalc=ko.pureComputed(function(){
        var dur=self.duration();
        if(dur<0 && self.endTime() && self.startTime()){
            return moment(self.endTime()).diff(moment(self.startTime()));
        }else{
            return dur;
        }
    });
    self.durationSimple=ko.pureComputed(function(){
        return MomentUtil.formatDurationSimple(self.durationCalc());
    });
}
/**
 * Return true if state B should be used instead of a
 * @param a
 * @param b
 */
RDNodeStep.stateCompare= function (a, b) {
    if (a == b) {
        return false;
    }
    var states = ['SUCCEEDED', 'NONE','NOT_STARTED', 'WAITING', 'FAILED', 'ABORTED', 'RUNNING', 'RUNNING_HANDLER'];
    var ca = states.indexOf(a);
    var cb = states.indexOf(b);
    if (ca < 0) {
        return true;
    }
    return cb > ca;
};
RDNodeStep.completedStates= ['SUCCEEDED', 'FAILED', 'ABORTED', 'NONE_SUCCEEDED','PARTIAL_SUCCEEDED'];
RDNodeStep.runningStates= ['RUNNING','RUNNING_HANDLER'];

function RDNode(name, steps,flow){
    var self=this;
    self.flow= flow;
    self.name=name;
    self.state=ko.observable();
    self.steps=ko.observableArray([]).extend({ rateLimit: 200 });
    self.expanded=ko.observable(false);
    var mapping = {
        'steps': {
            key: function (data) {
                return ko.utils.unwrapObservable(data.stepctx);
            },
            create: function (options) {
                return new RDNodeStep(options.data, self, flow);
            }
        }
    };
    self.durationMs=ko.observable(-1);
    self.toggleExpand=function(){
        self.expanded(!self.expanded());
        if(self.expanded()){
            flow.selectedNodes.push(self.name);
            flow.loadStateForNode(self);
        }else {
            flow.selectedNodes.remove(self.name);
        }
    };
    self.duration=ko.pureComputed(function(){
        //sum up duration of all completed steps
       var ms=self.durationMs();
        if(ms<0) {
            ko.utils.arrayForEach(self.steps(), function (x) {
                if (!x.parameterizedStep()) {
                    var ms2 = x.duration();
                    if (ms2 >= 0 && ms < 0) {
                        ms = ms2;
                    } else if (ms2 >= 0) {
                        ms += ms2;
                    }
                }
            });
        }
       return ms;
    });
    self.durationSimple=ko.pureComputed(function(){
       return MomentUtil.formatDurationSimple(self.duration());
    });
    self.summary=ko.observable();
    self.summaryState=ko.observable();
    self.currentStep=ko.observable();
    //date string indicating last updated
    self.lastUpdated=ko.observable(null);
    self.findStepForCtx=function(stepctx){

        var found=ko.utils.arrayFilter(self.steps(),function(e){
            return e.stepctx==stepctx;
        });
        if(found && found.length==1){
            return found[0];
        }
        return null;
    };
    self.summaryDescriptionForState=function(data){
        var state = data.summaryState;
        if (state=='RUNNING') {
            return "Running";
        } else if (state=='RUNNING_HANDLER') {
            return ("Running");
        } else if (state=='SUCCEEDED') {
            return ("All Steps OK");
        } else if (state=='FAILED') {
            if(data.FAILED){
                return (data.FAILED + " " + flow.pluralize(data.FAILED, "Step") + " FAILED");
            }
            return ("Failed");
        } else if (state=='WAITING' && data.WAITING) {
            return("Waiting to run " + (data.WAITING||"some") + " " + flow.pluralize(data.WAITING, "Step"));
        } else if (state=='NOT_STARTED') {
            return("No steps were run");
        } else if (state=='PARTIAL_NOT_STARTED') {
            return((data.PARTIAL_NOT_STARTED||"Some") + " " + flow.pluralize(data.PARTIAL_NOT_STARTED, "Step") + " not run");
        }else if(state=='WAITING' ){
            return("Waiting");
        } else if (state=='PARTIAL_SUCCEEDED') {
            return ((data.PARTIAL_SUCCEEDED||"Some") + " did not succeed");
        } else if(state=='NONE_SUCCEEDED'){
            return("No steps succeeded");
        } else if(state=='NONE') {
          return("No Steps");
        }
        return null;
    };
    /**
     * Determine summary data for the node, sets the summaryState and summary and currentStep
     */
    self.summarize=function(){
        var currentStep=null;

        //step summary info
        var summarydata = {
            total: 0,
            SUCCEEDED: 0,
            FAILED: 0,
            WAITING: 0,
            NOT_STARTED: 0,
            RUNNING: 0,
            RUNNING_HANDLER: 0,
            other: 0,
            duration_ms_total: 0,
            pending: self.flow.pendingStepsForNode(self.name)
        };

        var testStates= ['SUCCEEDED', 'FAILED', 'WAITING', 'NOT_STARTED', 'RUNNING', 'RUNNING_HANDLER'];
        //determine count for step states
        ko.utils.arrayForEach(self.steps(),function(step){
            var z = step.executionState();

            if(!step.parameterizedStep()) {
                summarydata.total++;
                if (testStates.indexOf(z) >= 0 && null != summarydata[z]) {
                    summarydata[z]++;
                } else {
                    summarydata['other']++;
                }
            }
            if (!currentStep && RDNodeStep.stateCompare('NONE', step.executionState())
                || currentStep && RDNodeStep.stateCompare(currentStep.executionState(), step.executionState())) {
                currentStep = step;
            }
        });
        self.currentStep(currentStep);

        //based on step states set the summary for this node
        if (summarydata.total > 0) {
            if (summarydata.RUNNING > 0) {
                self.summary("Running");
                self.summaryState("RUNNING");
            } else if (summarydata.RUNNING_HANDLER > 0) {
                self.summary("Running");
                self.summaryState("RUNNING_HANDLER");
            } else if (summarydata.total == summarydata.SUCCEEDED && summarydata.pending < 1) {
                self.summary("All Steps OK");
                self.summaryState("SUCCEEDED");
            } else if (summarydata.FAILED > 0) {
                self.summary(summarydata.FAILED + " " + flow.pluralize(summarydata.FAILED, "Step") + " FAILED");
                self.summaryState("FAILED");
            } else if (summarydata.WAITING > 0) {
                self.summary("Waiting to run " + summarydata.WAITING + " " + flow.pluralize(summarydata.WAITING, "Step"));
                self.summaryState("WAITING");
            } else if (summarydata.NOT_STARTED == summarydata.total && summarydata.pending < 1) {
                self.summary("No steps were run");
                self.summaryState("NOT_STARTED");
            } else if (summarydata.NOT_STARTED > 0) {
                self.summary(summarydata.NOT_STARTED + " " + flow.pluralize(summarydata.NOT_STARTED, "Step") + " not run");
                self.summaryState("PARTIAL_NOT_STARTED");
            }else if(summarydata.pending > 0 ){
                self.summary("Waiting");
                self.summaryState("WAITING");
            } else if (summarydata.SUCCEEDED > 0) {
                self.summary((summarydata.total - summarydata.SUCCEEDED) + " did not succeed");
                self.summaryState("PARTIAL_SUCCEEDED");
            } else {
                self.summary("No steps succeeded");
                self.summaryState("NONE_SUCCEEDED");
            }
        } else if(summarydata.pending > 0){
            self.summary("Waiting");
            self.summaryState("WAITING");
        } else {
            self.summary("No Steps");
            self.summaryState("NONE");
        }
    };
    self.currentStepFromData=function(data){
        self.currentStep(new RDNodeStep(data, self, self.flow));
    };
    self.updateSummary=function(nodesummary){
        if(nodesummary.lastUpdated && self.lastUpdated()==nodesummary.lastUpdated
            && nodesummary.summaryState==self.summaryState()){
            return;
        }
        self.lastUpdated(nodesummary.lastUpdated);
        self.summaryState(nodesummary.summaryState);
        self.summary(self.summaryDescriptionForState(nodesummary));

        self.durationMs(nodesummary.duration);
        if(nodesummary.currentStep){
            self.currentStepFromData(nodesummary.currentStep);
        }else{
            self.currentStep(null);
        }
    };
    /**
     * Update from direct ajax response
     * @param steps
     */
    self.loadData=function(data){
        self.updateSummary(data.summary);
        self.updateSteps(data.steps);
    };
    self.updateSteps=function(steps){
        ko.mapping.fromJS({steps: steps}, mapping, this);
        self.summarize();
    };
    if(steps){
        self.updateSteps(steps);
    }
}

function NodeFlowViewModel(workflow, outputUrl, nodeStateUpdateUrl, multiworkflow, data) {
    var self=this;
    self.workflow=workflow;
    self.multiWorkflow=multiworkflow;
    self.errorMessage=ko.observable();
    self.statusMessage=ko.observable();
    self.stateLoaded=ko.observable(false);
    self.pendingNodeSteps=ko.observable({});
    self.nodes=ko.observableArray([ ]).extend({ rateLimit: 500 });
    self.selectedNodes=ko.observableArray([ ]);
    self.followingStep=ko.observable();
    self.execFollowingControl = data.followControl;
    self.followingControl=null;
    self.followOutputUrl= outputUrl;
    self.nodeStateUpdateUrl= nodeStateUpdateUrl;
    self.completed=ko.observable();
    self.executionState=ko.observable();
    self.executionStatusString=ko.observable();
    self.retryExecutionId=ko.observable();
    self.retryExecutionState=ko.observable();
    self.retryExecutionUrl=ko.observable();
    self.retryExecutionAttempt=ko.observable();
    self.retry=ko.observable();
    self.execDuration=ko.observable();
    self.jobAverageDuration=ko.observable();
    self.startTime=ko.observable();
    self.endTime=ko.observable();
    self.executionId = ko.observable(data.executionId);
    self.outputScrollOffset=0;
    self.activeTab=ko.observable("summary");
    self.scheduled = ko.pureComputed(function () {
        return self.executionState() === 'SCHEDULED';
    });
    self.failed = ko.pureComputed(function () {
        return self.executionState() === 'FAILED';
    });
    self.incompleteState = ko.pureComputed(function () {
        return self.executionState() === 'OTHER' && self.executionStatusString() === 'incomplete';
    });
    self.totalSteps=ko.pureComputed(function(){ return self.workflow.workflow.length; });
    self.activeNodes=ko.pureComputed(function(){
        return ko.utils.arrayFilter(self.nodes(), function (n) {
            return n.summaryState() !== 'NONE';
        });
    });
    self.displayStatusString = ko.computed(function () {
        var statusString = self.executionStatusString();
        return statusString != null && self.executionState() != statusString.toUpperCase() && !self.incompleteState();
    });
    self.canKillExec = ko.computed(function () {
        return self.execFollowingControl && self.execFollowingControl.killjobauth
    });
    self.killRequested = ko.observable(false);
    self.killResponseData = ko.observable({});
    self.killExecAction = function () {
        if (self.execFollowingControl) {
            self.execFollowingControl.docancel().then(function (data) {
                self.killRequested(true);
                self.killResponseData(data);
            });
        }
    };
    self.killStatusFailed = ko.computed(function () {
        "use strict";
        var req = self.killRequested();
        var data = self.killResponseData();
        if (!req) {
            return false;
        }
        return data && !data.cancelled;
    });
    self.killStatusPending = ko.computed(function () {
        "use strict";
        var req = self.killRequested();
        var data = self.killResponseData();
        if (!req) {
            return false;
        }
        return data && data.cancelled && data.abortstate === 'pending';
    });
    self.killStatusText = ko.computed(function () {
        var req = self.killRequested();
        var data = self.killResponseData();
        if (!req) {
            return "";
        }
        if (data && data.cancelled && data.abortstate === 'pending') {
            return data.reason || 'Killing Job...';
        } else if (data && data.cancelled && data.abortstate === 'aborted') {
            return data.reason || 'Killed.';
        } else {
            return (data ? data['error'] || data.reason : '') || 'Failed to Kill Job.';
        }
    });
    self.totalNodeCount=ko.observable(0);
    self.nodeIndex={};
    self.totalNodes=ko.pureComputed(function(){
        var nodes = ko.utils.arrayFilter(self.nodes(), function (n) {
            return n.summaryState() !== 'NONE';
        });
        return nodes?nodes.length:0;
    });
    self.jobPercentage=ko.pureComputed(function(){
        if(self.jobAverageDuration()>0){
            return 100*(self.execDuration()/self.jobAverageDuration());
        }else{
            return -1;
        }
    });
    self.jobPercentageFixed=ko.pureComputed(function(){
        var pct = self.jobPercentage();
        if(pct>=0){
            return pct.toFixed(0)
        }else{
            return '0';
        }
    });
    self.jobOverrunDuration=ko.pureComputed(function(){
        var jobAverageDuration = self.jobAverageDuration();
        var execDuration = self.execDuration();
        if(jobAverageDuration > 0 && execDuration > jobAverageDuration){
            return MomentUtil.formatDurationSimple(execDuration - jobAverageDuration);
        }else{
            return '';
        }
    });
    self.completedNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(RDNodeStep.completedStates.indexOf(n.summaryState())>=0){
                completed.push(n);
            }
        });
        return completed;
    });
    self.succeededNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(n.summaryState()=='SUCCEEDED'){
                completed.push(n);
            }
        });
        return completed;
    });

    self.runningNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(RDNodeStep.runningStates.indexOf(n.summaryState())>=0){
                completed.push(n);
            }
        });
        return completed;
    });
    self.waitingNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(n.summaryState()=='WAITING'){
                completed.push(n);
            }
        });
        return completed;
    });
    self.notstartedNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(n.summaryState()=='NOT_STARTED'){
                completed.push(n);
            }
        });
        return completed;
    });
    self.partialNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(n.summaryState() == 'PARTIAL_NOT_STARTED' || n.summaryState() == 'PARTIAL_SUCCEEDED'){
                completed.push(n);
            }
        });
        return completed;
    });
    self.failedNodes=ko.computed(function(){
        var completed=new Array();
        ko.utils.arrayForEach(self.nodes(), function (n) {
            if(n.summaryState()=='FAILED'){
                completed.push(n);
            }
        });
        return completed;
    });
    self.percentageFixed = function(a,b){
        return (b==0)?0:(100*(a/b)).toFixed(0);
    };

    self.stopShowingOutput= function () {
        if(self.followingControl){
            self.followingControl.stopFollowingOutput();
            self.followingControl=null;
        }
    };
    self.showOutput= function (nodestep) {
        var node=nodestep.node.name;
        var stepctx=nodestep.stepctx;
        var sel = '.wfnodeoutput[data-node="' + node + '"]';
        if (stepctx) {
            sel += '[data-stepctx=\'' + stepctx + '\']';
        } else {
            sel += '[data-stepctx=]';
        }
        var targetElement = jQuery.find(sel);
        if (!targetElement || targetElement.length!=1) {
            throw "could not find output area";
        }
        targetElement=targetElement[0];
        var params = {nodename: node};
        if (stepctx) {
            Object.extend(params, {stepctx: stepctx});
        }
        var ctrl = new FollowControl(null, null, {
            parentElement: targetElement,
            extraParams: '&' + Object.toQueryString(params),
            appLinks: {tailExecutionOutput: self.followOutputUrl},
            finishedExecutionAction: false,
            autoscroll:false,
            onAppend:function(){
                nodestep.outputLineCount(ctrl.getLineCount());
            }
        });
        ctrl.workflow = self.workflow;
        ctrl.setColNode(false);
        ctrl.setColStep(null == stepctx);
        ctrl.beginFollowingOutput();
        return ctrl;
    };

    self.toggleOutputForNodeStep = function (nodestep,callback) {
        self.stopShowingOutput();
        //toggle following output for selected nodestep
        var node = nodestep.node;
        var stepctx=RDWorkflow.cleanContextId(nodestep.stepctx);
        //
        var postload=function(){
            node.expanded(true);
            //find correct nodestep given the context string, strip of parameters
            var nodestep=node.findStepForCtx(stepctx);
            if(!nodestep){
                throw "failed to find step for context: "+stepctx +" and node: "+node.name;
            }
            nodestep.followingOutput(true);
            ko.utils.arrayForEach(self.nodes(), function (n) {
                ko.utils.arrayForEach(n.steps(), function (step) {
                    //disable following for every other nodestep
                    if(step != nodestep){
                        step.followingOutput(false);
                    }
                });
            });
            var ctrl = self.showOutput(nodestep);
            self.followingStep(nodestep);
            self.followingControl=ctrl;
            if(typeof(callback)=='function'){callback();}
        };
        if(!node.expanded() && !nodestep.followingOutput()){
            //need to load the step states for the node before showing the output
            return self.loadStateForNode(node).then(postload);
        }else if(!nodestep.followingOutput()){
            postload();
        }else{
            nodestep.followingOutput(false);
            self.followingStep(null);
        }
        return true;
    };
    self.scrollTo= function (element,offx,offy) {
        var x = element.x ? element.x : element.offsetLeft,
            y = element.y ? element.y : element.offsetTop;
        window.scrollTo(x+(offx?offx:0), y+(offy?offy:0));
    };

    self.scrollToNodeStep=function(node,stepctx){
        var elem = $$('.wfnodestep[data-node="' + node + '"][data-stepctx="' + stepctx + '"]');
        if (elem) {
            jQuery('#tab_link_flow a').tab('show');
            //scroll to
            self.scrollTo($(elem[0]));
        }
    };
    self.scrollToNode=function(node){
        var elem = jQuery.find('.wfnodestate.container[data-node="' + node + '"]');
        if (elem) {
            jQuery('#tab_link_flow a').tab('show');
            //scroll to
            self.scrollTo(elem[0]);
        }
    };
    self.scrollToOutput=function(nodestep){
        if(!nodestep.followingOutput()){
            self.toggleOutputForNodeStep(nodestep,function(){
                self.scrollToNode(nodestep.node.name);
            });
        }else {
            self.scrollToNode(nodestep.node.name);
        }
    };

    self.pluralize = function (count, singular, plural) {
        return count == 1 ? singular : null != plural ? plural : (singular + 's');
    };
    self.stepStateForCtx=function (model, stepctx) {
        if(typeof(stepctx)=='string'){
            stepctx = RDWorkflow.parseContextId(stepctx);
        }
        var stepid = stepctx[0];

        var ndx = RDWorkflow.workflowIndexForContextId(stepid);
        var params = RDWorkflow.paramsForContextId(stepid);
        var step = model.steps[ndx];
        if(params && step.parameterStates && step.parameterStates[params]){
            step = step.parameterStates[params];
        }
        if (stepctx.length>1 && step.workflow) {
            return self.stepStateForCtx(step.workflow, stepctx.slice(1));
        } else {
            return step;
        }
    };
    self.pendingStepsForNode = function(node){
        var pendingData=self.pendingNodeSteps();
        if(pendingData[node] != null){
            return pendingData[node];
        }else if(pendingData['_other'] != null){
            return pendingData['_other'];
        }else{
            return 0;
        }
    };
    /**
     * Recursively count the number of steps that may be pending for the given nodes
     * @param workflowData workflow structure
     * @param nodes set of all nodes
     * @param pending result dataset object
     * @returns {*} the dataset object
     */
    self.countPendingStepsForNodes = function (workflowData, nodes, pending) {
        if(typeof(pending)=='undefined'){
            pending = {};
        }
        for (var k = 0; k < workflowData.steps.length; k++) {
            var step = workflowData.steps[k];

            if (step.hasSubworkflow) {
                self.countPendingStepsForNodes(step.workflow, nodes, pending);
            }
            if (step.hasSubworkflow && step.nodeStep && step.parameterStates || step.nodeStep && !step.hasSubworkflow) {
                //node step may have empty targetNodes => implies targets unknown, so node may be pending for this step
                //otherwise if targetNodes contains nodes => only they might be pending for this step
                var targetNodes = null==workflowData.targetNodes || workflowData.targetNodes.length==0 ? nodes : workflowData.targetNodes;

                if(null != step.nodeStates){
                    //include only nodes that do not have states for this step
                    targetNodes=ko.utils.arrayFilter(targetNodes,function(el){
                        return step.nodeStates[el] == null;
                    });
                }else if(step.parameterStates !=null ){
                    //include only nodes that do not have parameter states for this step
                    targetNodes = ko.utils.arrayFilter(targetNodes, function (el) {
                        return step.parameterStates["node="+el] == null;
                    });
                }

                //consider this step pending for these nodes
                ko.utils.arrayForEach(targetNodes,function(node){
                    if (null == pending[node]) {
                        pending[node] = 1;
                    } else {
                        pending[node]++;
                    }
                });
            }
        }
        return pending;
    };

    self.extractNodeStepStates=function(node,steps,model){
        var count= steps?steps.length:0;
        var newsteps=[];
        for (var i = 0; i < count; i++) {
            var stepstate = steps[i];
            var stepStateForCtx = self.stepStateForCtx(model, stepstate.stepctx);
            var found = stepStateForCtx.nodeStates[node];
            found.stepctx=stepstate.stepctx;
            newsteps.push(found);
        }
        return newsteps;
    };
    self.updateNodes=function(model){
        if ( !model.allNodes) {
            return;
        }
        self.stateLoaded(true);
        //determine count of unevaluated steps
        self.pendingNodeSteps(model.completed ? {'_other':0} : self.countPendingStepsForNodes(model, model.allNodes));
        var nodeList= model.allNodes;
        var count = nodeList.length;
        self.totalNodeCount(count);
        for (var i = 0; i < count; i++) {
            var node = nodeList[i];
            //var data = model.nodes[node];

            var nodeSummary = model.nodeSummaries[node];
            var nodesteps =null;//= model.steps &&
                                // model.steps.length>0?self.extractNodeStepStates(node,data,model):null;
            if(!nodesteps && model.nodeSteps && model.nodeSteps[node]){
                nodesteps=model.nodeSteps[node];
            }
            var nodea = self.findNode(node);

            if (nodea && nodesteps) {
                nodea.updateSteps(nodesteps);
            } else if(nodea) {
                nodea.updateSummary(nodeSummary);
            } else {
                var rdNode = new RDNode(node, nodesteps, self);
                rdNode.updateSummary(nodeSummary);
                self.nodes.push(rdNode);
                self.nodeIndex[rdNode.name]=rdNode;
            }
        }
    };

    self.loadStateForNode=function(node){
        var obj=self;
        return jQuery.ajax({
            url:_genUrl(self.nodeStateUpdateUrl,{node:node.name}),
            dataType:'json',
            success: function (data,status,jqxhr) {
                if(data.error){
                    obj.errorMessage( "Failed to load state: " + (jqxhr.responseJSON && jqxhr.responseJSON.error? jqxhr.responseJSON.error: err),jqxhr.responseJSON);
                }else{
                    node.loadData(data);
                }
            },
            error: function (jqxhr,status,err) {
                obj.errorMessage( "Failed to load state: " + (jqxhr.responseJSON && jqxhr.responseJSON.error? jqxhr.responseJSON.error: err),jqxhr.responseJSON);
            }
        });
    };
    self.formatTimeAtDate=function(text){
        //TODO: fix incorrect endTime/startTime format: it is not actually UTC time
        return MomentUtil.formatTimeAtDateUTC(text);
    };
    self.formatDurationHumanize=function(ms){
        return MomentUtil.formatDurationHumanize(ms);
    };
    self.formatDurationMomentHumanize=function(ms){
        return MomentUtil.formatDurationMomentHumanize(ms);
    };
    self.addNode=function(node,steps){
        var rdNode = new RDNode(node, steps, self);
        self.nodes.push(rdNode);
        self.nodeIndex[rdNode.name]=rdNode;
    };
    self.findNode=function(node){
        return self.nodeIndex[node];
    };


    self.execDurationSimple = ko.pureComputed(function () {
        return MomentUtil.formatDurationSimple(self.execDuration());
    });
    self.execDurationHumanized = ko.pureComputed(function () {
        return MomentUtil.formatDurationHumanize(self.execDuration());
    });
    self.followFlowState = function (flowState,followNodes) {
        "use strict";
        flowState.addUpdater({
            updateError: function (error, data) {
                self.stateLoaded(false);
                if (error !== 'pending') {
                    self.errorMessage(data.state.errorMessage ? data.state.errorMessage : error);
                } else {
                    self.statusMessage(data.state.errorMessage ? data.state.errorMessage : error);
                }
                ko.mapping.fromJS({
                    executionState: data.executionState,
                    executionStatusString: data.executionStatusString,
                    retryExecutionId: data.retryExecutionId,
                    retryExecutionUrl: data.retryExecutionUrl,
                    retryExecutionState: data.retryExecutionState,
                    retryExecutionAttempt: data.retryExecutionAttempt,
                    retry: data.retry,
                    completed: data.completed,
                    execDuration: data.execDuration,
                    jobAverageDuration: data.jobAverageDuration,
                    startTime: data.startTime ? data.startTime : data.state ? data.state.startTime : null,
                    endTime: data.endTime ? data.endTime : data.state ? data.state.endTime : null
                }, {}, self);
            },
            updateState: function (data) {
                ko.mapping.fromJS({
                    executionState: data.executionState,
                    executionStatusString: data.executionStatusString,
                    retryExecutionId: data.retryExecutionId,
                    retryExecutionUrl: data.retryExecutionUrl,
                    retryExecutionState: data.retryExecutionState,
                    retryExecutionAttempt: data.retryExecutionAttempt,
                    retry: data.retry,
                    completed: data.completed,
                    execDuration: data.execDuration,
                    jobAverageDuration: data.jobAverageDuration,
                    startTime: data.startTime ? data.startTime : data.state ? data.state.startTime : null,
                    endTime: data.endTime ? data.endTime : data.state ? data.state.endTime : null
                }, {}, self);
                if(followNodes) {
                    self.updateNodes(data.state);
                }
            }
        });
    }
}



/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require momentutil
//= require knockout.min
//= require knockout-mapping
//= require knockout-foreachprop
//= require workflow
//= require historyKO
//= require nodeFiltersKO
//= require adhocCommandKO
//= require executionStateKO

/*
 Manifest for "framework/adhoc.gsp" page
 */



function showError(message) {
    appendText($("error"), message);
    $("error").show();
}

/**
 * START run execution code
 */

    function disableRunBar(runnning) {
        var runbox = jQuery('#runbox');
        if (runnning) {
            runbox.find('button.runbutton').button('loading');
        }
    }
function enableRunBar() {
    var runbox = jQuery('#runbox');
    runbox.find('button.runbutton')
        .button('reset');
}
var running = false;
function runStarted() {
    running = true;
}
function afterRun() {
    running = false;
    jQuery('.execRerun').show();
    jQuery('#runFormExec').focus();
}
function runError(msg) {
    jQuery('.errormessage').html(msg);
    jQuery('#runerror').collapse('show');
    jQuery('#runcontent').hide();
    onRunComplete();
}
function requestFailure(trans) {
    runError("Request failed: " + trans.statusText);
}
/**
 * Run the command
 * @param elem
 */
function runFormSubmit(elem) {
    if (running || !$F('runFormExec')) {
        return false;
    }
    if (!nodeFilter.filter() && !nodeFilter.filterName()) {
        //no node filter
        return false;
    }
    var data = jQuery('#' + elem + " :input").serialize();
    adhocCommand.running(true);
    disableRunBar(true);
    runStarted();
    $('runcontent').loading('Starting Execution…');
    jQuery.ajax({
        type: 'POST',
        url: _genUrl(appLinks.scheduledExecutionRunAdhocInline, data),
        beforeSend: _ajaxSendTokens.curry('adhoc_req_tokens'),
        success: function (data, status, xhr) {
            try {
                startRunFollow(data);
            } catch (e) {
                console.log(e);
                runError(e);
            }
        },
        error: function (data, jqxhr, err) {
            requestFailure(jqxhr);
        }
    }).success(_ajaxReceiveTokens.curry('adhoc_req_tokens'));
    return false;
}
/**
 * Load content view to contain output
 * @param data
 */
function startRunFollow(data) {
    if (data.error) {
        runError(data.error);
    } else if (!data.id) {
        runError("Server response was invalid: " + data.toString());
    } else {
        $('runcontent').loading('Loading Output…');
        jQuery('#runcontent').load(_genUrl(appLinks.executionFollowFragment, {
            id: data.id,
            mode: 'tail'
        }), function (resp, status, jqxhr) {
            if (status == 'success') {
                Element.show('runcontent');
                _initAffix();
                var nodeflowvm=continueRunFollow(data);
                ko.applyBindings(nodeflowvm,jQuery('#runcontent .executionshow')[0]);
            } else {
                requestFailure(jqxhr);
            }
        });
    }
}
/**
 * Start following the output
 * @param data
 */
function continueRunFollow(data) {
    var pageParams = loadJsonData('pageParams');
    var workflowData=[{exec:adhocCommand.commandString()}];
    var workflow = new RDWorkflow(workflowData,{});
    var followControl = new FollowControl(data.id, 'runcontent', {
        workflow:workflow,
        parentElement: 'commandPerform',
        viewoptionsCompleteId: 'viewoptionscomplete',
        cmdOutputErrorId: 'cmdoutputerror',
        outfileSizeId: 'outfilesize',
        extraParams: pageParams.disableMarkdown,
        smallIconUrl: pageParams.smallIconUrl,
        iconUrl: pageParams.iconUrl,
        lastlines: pageParams.lastlines,
        maxLastLines: pageParams.maxLastLines,
        killjobauth: pageParams.adhocKillAllowed,
        //showFinalLine: {value: false, changed: false},
        colStep: {value: false},
        collapseCtx: {value: false, changed: false},
        groupOutput:{value:false},
        tailmode: true,
        taildelay: 1.5,
        browsemode: false,
        nodemode: false,
        //taildelay: 1,
        //truncateToTail: false,
        execData: {},
        appLinks: appLinks,
        onComplete: onRunComplete,
        dobind: true
    });
    var nodeflowvm=new NodeFlowViewModel(
        workflow,
        null,
        null,
        null,
        {followControl:followControl,executionId:data.id}
    );
    var flowState = new FlowState(data.id,null,{
        workflow:workflow,
        loadUrl:_genUrl(appLinks.executionAjaxExecState,{id:data.id}),
        outputUrl:null,
        selectedOutputStatusId:null,
        reloadInterval:1500
    });
    nodeflowvm.followFlowState(flowState);
    followControl.beginFollowingOutput(data.id);
    flowState.beginFollowing();
    var oldControl=adhocCommand.followControl;
    adhocCommand.followControl=followControl;
    if(oldControl){
        oldControl.stopFollowingOutput();
    }
    return nodeflowvm;
}
function onRunComplete() {
    adhocCommand.running(false);
    enableRunBar();
    afterRun();
}

var nodeFilter;
var adhocCommand;

/**
 * Handle embedded content updates
 */
function _updateBoxInfo(name, data) {
    if (data.total && data.total != "0" && !running) {
        enableRunBar();
        adhocCommand.canRun(true);
    } else if (!running) {
        disableRunBar(false);
        adhocCommand.canRun(false);
    }
    if (null != data.total && typeof(nodeFilter) != 'undefined') {
        nodeFilter.total(data.total);
    }
    if (null != data.allcount) {
        if (typeof(nodeFilter) != 'undefined') {
            nodeFilter.allcount(data.allcount);
        }
    }
    if (null != data.filter) {
        if (typeof(nodeFilter) != 'undefined') {
            nodeFilter.filter(data.filter);
        }
    }
}

function closeOutputArea(){
    jQuery('#runcontent').hide();
    onRunComplete();
    if(adhocCommand.followControl) {
        adhocCommand.followControl.stopFollowingOutput();
    }
}


/**
 * START page init
 */
function init() {
    var pageParams = loadJsonData('pageParams');
    jQuery('body').on('click', '.nodefilterlink', function (evt) {
        evt.preventDefault();
        nodeFilter.selectNodeFilterLink(this);
    });
    jQuery('#nodesContent').on('click', '.closeoutput', function (evt) {
        evt.preventDefault();
        closeOutputArea();
    });
    $$('#runbox input').each(function (elem) {
        if (elem.type == 'text') {
            elem.observe('keypress', function (evt) {
                if (!noenter(evt)) {
                    runFormSubmit('runbox');
                    return false;
                } else {
                    return true;
                }
            });
        }
    });

    //history tabs binding
    var history = new History(appLinks.reportsEventsAjax, appLinks.menuNowrunningAjax);
    ko.applyBindings(history, document.getElementById('activity_section'));
    setupActivityLinks('activity_section', history);
    //if empty query, automatically load first activity_link
    if (pageParams.emptyQuery == 'true') {
        history.activateNowRunningTab();
    }

    //setup node filters knockout bindings
    var filterParams = loadJsonData('filterParamsJSON');
    var nodeSummary = new NodeSummary({baseUrl:appLinks.frameworkNodes});
    nodeFilter = new NodeFilters(
        appLinks.frameworkAdhoc,
        appLinks.scheduledExecutionCreate,
        appLinks.frameworkNodes,
        Object.extend(filterParams, {
            nodeSummary:nodeSummary,
            view: 'embed',
            maxShown: 100,
            emptyMode: 'blank',
            project: pageParams.project,
            nodesTitleSingular: message('Node'),
            nodesTitlePlural: message('Node.plural')
        }));
    ko.applyBindings(nodeFilter, document.getElementById('actionButtonArea'));
    ko.applyBindings(nodeFilter, document.getElementById('nodefilterViewArea'));
    ko.applyBindings(nodeFilter, document.getElementById('nodefiltersHidden'));

    adhocCommand = new AdhocCommand({commandString:pageParams.runCommand}, nodeFilter);
    ko.applyBindings(adhocCommand, document.getElementById('adhocInput'));

    //show selected named filter
    nodeFilter.filterName.subscribe(function (val) {
        if (val) {
            jQuery('a[data-node-filter-name]').removeClass('active');
            jQuery('a[data-node-filter-name=\'' + val + '\']').addClass('active');
        }
    });
    nodeFilter.total.subscribe(function(val){
        if (val && val != "0" && !running) {
            enableRunBar();
            adhocCommand.canRun(true);
        } else if (!running) {
            disableRunBar(false);
            adhocCommand.canRun(false);
        }
    });
    nodeSummary.reload();
    nodeFilter.updateMatchedNodes();
    jQuery('.act_adhoc_history_dropdown').click(function () {
        adhocCommand.loadRecentCommands();
    });
}
jQuery(document).ready(init);
