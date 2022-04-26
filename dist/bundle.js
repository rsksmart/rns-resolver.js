(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.RNSResolver = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (Buffer){(function (){
var r,t=require("bech32"),e=require("blakejs"),n=require("bs58"),o=require("crypto-addr-codec"),i=require("js-sha512"),a=require("nano-base32"),s=require("sha3"),u=(function(r){var t=function(r){var e=1e7,n=9007199254740992,o=c(n),i=Math.log(n);function a(r,t){return void 0===r?a[0]:void 0!==t?10==+t?H(r):K(r,t):H(r)}function s(r,t){this.value=r,this.sign=t,this.isSmall=!1}function u(r){this.value=r,this.sign=r<0,this.isSmall=!0}function f(r){return-n<r&&r<n}function c(r){return r<1e7?[r]:r<1e14?[r%1e7,Math.floor(r/1e7)]:[r%1e7,Math.floor(r/1e7)%1e7,Math.floor(r/1e14)]}function h(r){l(r);var t=r.length;if(t<4&&S(r,o)<0)switch(t){case 0:return 0;case 1:return r[0];case 2:return r[0]+r[1]*e;default:return r[0]+(r[1]+r[2]*e)*e}return r}function l(r){for(var t=r.length;0===r[--t];);r.length=t+1}function d(r){for(var t=new Array(r),e=-1;++e<r;)t[e]=0;return t}function p(r){return r>0?Math.floor(r):Math.ceil(r)}function g(r,t){var n,o,i=r.length,a=t.length,s=new Array(i),u=0,f=e;for(o=0;o<a;o++)s[o]=(n=r[o]+t[o]+u)-(u=n>=f?1:0)*f;for(;o<i;)n=r[o]+u,s[o++]=n-(u=n===f?1:0)*f;return u>0&&s.push(u),s}function v(r,t){return r.length>=t.length?g(r,t):g(t,r)}function m(r,t){var n,o,i=r.length,a=new Array(i),s=e;for(o=0;o<i;o++)n=r[o]-s+t,t=Math.floor(n/s),a[o]=n-t*s,t+=1;for(;t>0;)a[o++]=t%s,t=Math.floor(t/s);return a}function w(r,t){var e,n,o=r.length,i=t.length,a=new Array(o),s=0;for(e=0;e<i;e++)(n=r[e]-s-t[e])<0?(n+=1e7,s=1):s=0,a[e]=n;for(e=i;e<o;e++){if(!((n=r[e]-s)<0)){a[e++]=n;break}a[e]=n+=1e7}for(;e<o;e++)a[e]=r[e];return l(a),a}function y(r,t,e){var n,o,i=r.length,a=new Array(i),f=-t;for(n=0;n<i;n++)o=r[n]+f,f=Math.floor(o/1e7),a[n]=(o%=1e7)<0?o+1e7:o;return"number"==typeof(a=h(a))?(e&&(a=-a),new u(a)):new s(a,e)}function B(r,t){var e,n,o,i,a=r.length,s=t.length,u=d(a+s);for(o=0;o<a;++o){i=r[o];for(var f=0;f<s;++f)e=i*t[f]+u[o+f],n=Math.floor(e/1e7),u[o+f]=e-1e7*n,u[o+f+1]+=n}return l(u),u}function b(r,t){var n,o,i=r.length,a=new Array(i),s=e,u=0;for(o=0;o<i;o++)n=r[o]*t+u,u=Math.floor(n/s),a[o]=n-u*s;for(;u>0;)a[o++]=u%s,u=Math.floor(u/s);return a}function E(r,t){for(var e=[];t-- >0;)e.push(0);return e.concat(r)}function I(r,t,n){return new s(r<e?b(t,r):B(t,c(r)),n)}function U(r){var t,e,n,o,i=r.length,a=d(i+i);for(n=0;n<i;n++){e=0-(o=r[n])*o;for(var s=n;s<i;s++)t=o*r[s]*2+a[n+s]+e,e=Math.floor(t/1e7),a[n+s]=t-1e7*e;a[n+i]=e}return l(a),a}function A(r,t){var e,n,o,i,a=r.length,s=d(a);for(o=0,e=a-1;e>=0;--e)o=(i=1e7*o+r[e])-(n=p(i/t))*t,s[e]=0|n;return[s,0|o]}function x(r,t){var n,o,i=H(t),f=r.value,g=i.value;if(0===g)throw new Error("Cannot divide by zero");if(r.isSmall)return i.isSmall?[new u(p(f/g)),new u(f%g)]:[a[0],r];if(i.isSmall){if(1===g)return[r,a[0]];if(-1==g)return[r.negate(),a[0]];var v=Math.abs(g);if(v<e){o=h((n=A(f,v))[0]);var m=n[1];return r.sign&&(m=-m),"number"==typeof o?(r.sign!==i.sign&&(o=-o),[new u(o),new u(m)]):[new s(o,r.sign!==i.sign),new u(m)]}g=c(v)}var y=S(f,g);if(-1===y)return[a[0],r];if(0===y)return[a[r.sign===i.sign?1:-1],a[0]];n=f.length+g.length<=200?function(r,t){var n,o,i,a,s,u,f,c=r.length,l=t.length,p=e,g=d(t.length),v=t[l-1],m=Math.ceil(p/(2*v)),w=b(r,m),y=b(t,m);for(w.length<=c&&w.push(0),y.push(0),v=y[l-1],o=c-l;o>=0;o--){for(n=p-1,w[o+l]!==v&&(n=Math.floor((w[o+l]*p+w[o+l-1])/v)),i=0,a=0,u=y.length,s=0;s<u;s++)i+=n*y[s],f=Math.floor(i/p),a+=w[o+s]-(i-f*p),i=f,a<0?(w[o+s]=a+p,a=-1):(w[o+s]=a,a=0);for(;0!==a;){for(n-=1,i=0,s=0;s<u;s++)(i+=w[o+s]-p+y[s])<0?(w[o+s]=i+p,i=0):(w[o+s]=i,i=1);a+=i}g[o]=n}return w=A(w,m)[0],[h(g),h(w)]}(f,g):function(r,t){for(var e,n,o,i,a=r.length,s=t.length,u=[],f=[];a;)if(f.unshift(r[--a]),l(f),S(f,t)<0)u.push(0);else{o=1e7*f[(n=f.length)-1]+f[n-2],n>s&&(o=1e7*(o+1)),e=Math.ceil(o/(1e7*t[s-1]+t[s-2]));do{if(S(i=b(t,e),f)<=0)break;e--}while(e);u.push(e),f=w(f,i)}return u.reverse(),[h(u),h(f)]}(f,g);var B=r.sign!==i.sign,E=n[1],I=r.sign;return"number"==typeof(o=n[0])?(B&&(o=-o),o=new u(o)):o=new s(o,B),"number"==typeof E?(I&&(E=-E),E=new u(E)):E=new s(E,I),[o,E]}function S(r,t){if(r.length!==t.length)return r.length>t.length?1:-1;for(var e=r.length-1;e>=0;e--)if(r[e]!==t[e])return r[e]>t[e]?1:-1;return 0}function q(r){var t=r.abs();return!t.isUnit()&&(!!(t.equals(2)||t.equals(3)||t.equals(5))||!(t.isEven()||t.isDivisibleBy(3)||t.isDivisibleBy(5))&&(!!t.lesser(49)||void 0))}function N(r,e){for(var n,o,i,s=r.prev(),u=s,f=0;u.isEven();)u=u.divide(2),f++;r:for(o=0;o<e.length;o++)if(!r.lesser(e[o])&&!(i=t(e[o]).modPow(u,r)).equals(a[1])&&!i.equals(s)){for(n=f-1;0!=n;n--){if((i=i.square().mod(r)).isUnit())return!1;if(i.equals(s))continue r}return!1}return!0}s.prototype=Object.create(a.prototype),u.prototype=Object.create(a.prototype),s.prototype.add=function(r){var t=H(r);if(this.sign!==t.sign)return this.subtract(t.negate());var e=this.value,n=t.value;return new s(t.isSmall?m(e,Math.abs(n)):v(e,n),this.sign)},s.prototype.plus=s.prototype.add,u.prototype.add=function(r){var t=H(r),e=this.value;if(e<0!==t.sign)return this.subtract(t.negate());var n=t.value;if(t.isSmall){if(f(e+n))return new u(e+n);n=c(Math.abs(n))}return new s(m(n,Math.abs(e)),e<0)},u.prototype.plus=u.prototype.add,s.prototype.subtract=function(r){var t=H(r);if(this.sign!==t.sign)return this.add(t.negate());var e=this.value,n=t.value;return t.isSmall?y(e,Math.abs(n),this.sign):function(r,t,e){var n;return S(r,t)>=0?n=w(r,t):(n=w(t,r),e=!e),"number"==typeof(n=h(n))?(e&&(n=-n),new u(n)):new s(n,e)}(e,n,this.sign)},s.prototype.minus=s.prototype.subtract,u.prototype.subtract=function(r){var t=H(r),e=this.value;if(e<0!==t.sign)return this.add(t.negate());var n=t.value;return t.isSmall?new u(e-n):y(n,Math.abs(e),e>=0)},u.prototype.minus=u.prototype.subtract,s.prototype.negate=function(){return new s(this.value,!this.sign)},u.prototype.negate=function(){var r=this.sign,t=new u(-this.value);return t.sign=!r,t},s.prototype.abs=function(){return new s(this.value,!1)},u.prototype.abs=function(){return new u(Math.abs(this.value))},s.prototype.multiply=function(r){var t,n,o,i=H(r),u=this.value,f=i.value,h=this.sign!==i.sign;if(i.isSmall){if(0===f)return a[0];if(1===f)return this;if(-1===f)return this.negate();if((t=Math.abs(f))<e)return new s(b(u,t),h);f=c(t)}return-.012*(n=u.length)-.012*(o=f.length)+15e-6*n*o>0?new s(function r(t,e){var n=Math.max(t.length,e.length);if(n<=30)return B(t,e);n=Math.ceil(n/2);var o=t.slice(n),i=t.slice(0,n),a=e.slice(n),s=e.slice(0,n),u=r(i,s),f=r(o,a),c=r(v(i,o),v(s,a)),h=v(v(u,E(w(w(c,u),f),n)),E(f,2*n));return l(h),h}(u,f),h):new s(B(u,f),h)},s.prototype.times=s.prototype.multiply,u.prototype._multiplyBySmall=function(r){return f(r.value*this.value)?new u(r.value*this.value):I(Math.abs(r.value),c(Math.abs(this.value)),this.sign!==r.sign)},s.prototype._multiplyBySmall=function(r){return 0===r.value?a[0]:1===r.value?this:-1===r.value?this.negate():I(Math.abs(r.value),this.value,this.sign!==r.sign)},u.prototype.times=u.prototype.multiply=function(r){return H(r)._multiplyBySmall(this)},s.prototype.square=function(){return new s(U(this.value),!1)},u.prototype.square=function(){var r=this.value*this.value;return f(r)?new u(r):new s(U(c(Math.abs(this.value))),!1)},u.prototype.divmod=s.prototype.divmod=function(r){var t=x(this,r);return{quotient:t[0],remainder:t[1]}},u.prototype.over=u.prototype.divide=s.prototype.over=s.prototype.divide=function(r){return x(this,r)[0]},u.prototype.remainder=u.prototype.mod=s.prototype.remainder=s.prototype.mod=function(r){return x(this,r)[1]},s.prototype.pow=function(r){var t,e,n,o=H(r),i=this.value,s=o.value;if(0===s)return a[1];if(0===i)return a[0];if(1===i)return a[1];if(-1===i)return o.isEven()?a[1]:a[-1];if(o.sign)return a[0];if(!o.isSmall)throw new Error("The exponent "+o.toString()+" is too large.");if(this.isSmall&&f(t=Math.pow(i,s)))return new u(p(t));for(e=this,n=a[1];!0&s&&(n=n.times(e),--s),0!==s;)s/=2,e=e.square();return n},u.prototype.pow=s.prototype.pow,u.prototype.modPow=s.prototype.modPow=function(r,t){if(r=H(r),(t=H(t)).isZero())throw new Error("Cannot take modPow with modulus 0");for(var e=a[1],n=this.mod(t);r.isPositive();){if(n.isZero())return a[0];r.isOdd()&&(e=e.multiply(n).mod(t)),r=r.divide(2),n=n.square().mod(t)}return e},s.prototype.compareAbs=function(r){var t=H(r);return t.isSmall?1:S(this.value,t.value)},u.prototype.compareAbs=function(r){var t=H(r),e=Math.abs(this.value),n=t.value;return t.isSmall?e===(n=Math.abs(n))?0:e>n?1:-1:-1},s.prototype.compareTo=s.prototype.compare=function(r){if(Infinity===r)return-1;if(-Infinity===r)return 1;var t=H(r);return this.sign!==t.sign?t.sign?1:-1:t.isSmall?this.sign?-1:1:S(this.value,t.value)*(this.sign?-1:1)},u.prototype.compareTo=u.prototype.compare=function(r){if(Infinity===r)return-1;if(-Infinity===r)return 1;var t=H(r),e=this.value,n=t.value;return t.isSmall?e==n?0:e>n?1:-1:e<0!==t.sign?e<0?-1:1:e<0?1:-1},u.prototype.eq=u.prototype.equals=s.prototype.eq=s.prototype.equals=function(r){return 0===this.compare(r)},u.prototype.neq=u.prototype.notEquals=s.prototype.neq=s.prototype.notEquals=function(r){return 0!==this.compare(r)},u.prototype.gt=u.prototype.greater=s.prototype.gt=s.prototype.greater=function(r){return this.compare(r)>0},u.prototype.lt=u.prototype.lesser=s.prototype.lt=s.prototype.lesser=function(r){return this.compare(r)<0},u.prototype.geq=u.prototype.greaterOrEquals=s.prototype.geq=s.prototype.greaterOrEquals=function(r){return this.compare(r)>=0},u.prototype.leq=u.prototype.lesserOrEquals=s.prototype.leq=s.prototype.lesserOrEquals=function(r){return this.compare(r)<=0},s.prototype.isEven=function(){return 0==(1&this.value[0])},u.prototype.isEven=function(){return 0==(1&this.value)},s.prototype.isOdd=function(){return 1==(1&this.value[0])},u.prototype.isOdd=function(){return 1==(1&this.value)},s.prototype.isPositive=function(){return!this.sign},u.prototype.isPositive=function(){return this.value>0},s.prototype.isNegative=function(){return this.sign},u.prototype.isNegative=function(){return this.value<0},s.prototype.isUnit=function(){return!1},u.prototype.isUnit=function(){return 1===Math.abs(this.value)},s.prototype.isZero=function(){return!1},u.prototype.isZero=function(){return 0===this.value},u.prototype.isDivisibleBy=s.prototype.isDivisibleBy=function(r){var t=H(r),e=t.value;return 0!==e&&(1===e||(2===e?this.isEven():this.mod(t).equals(a[0])))},u.prototype.isPrime=s.prototype.isPrime=function(r){var e=q(this);if(void 0!==e)return e;var n=this.abs(),o=n.bitLength();if(o<=64)return N(n,[2,325,9375,28178,450775,9780504,1795265022]);for(var i=Math.log(2)*o,a=Math.ceil(!0===r?2*Math.pow(i,2):i),s=[],u=0;u<a;u++)s.push(t(u+2));return N(n,s)},u.prototype.isProbablePrime=s.prototype.isProbablePrime=function(r){var e=q(this);if(void 0!==e)return e;for(var n=this.abs(),o=void 0===r?5:r,i=[],a=0;a<o;a++)i.push(t.randBetween(2,n.minus(2)));return N(n,i)},u.prototype.modInv=s.prototype.modInv=function(r){for(var e,n,o,i=t.zero,a=t.one,s=H(r),u=this.abs();!u.equals(t.zero);)e=s.divide(u),n=i,o=s,i=a,s=u,a=n.subtract(e.multiply(a)),u=o.subtract(e.multiply(u));if(!s.equals(1))throw new Error(this.toString()+" and "+r.toString()+" are not co-prime");return-1===i.compare(0)&&(i=i.add(r)),this.isNegative()?i.negate():i},s.prototype.next=function(){var r=this.value;return this.sign?y(r,1,this.sign):new s(m(r,1),this.sign)},u.prototype.next=function(){var r=this.value;return r+1<n?new u(r+1):new s(o,!1)},s.prototype.prev=function(){var r=this.value;return this.sign?new s(m(r,1),!0):y(r,1,this.sign)},u.prototype.prev=function(){var r=this.value;return r-1>-n?new u(r-1):new s(o,!0)};for(var k=[1];2*k[k.length-1]<=e;)k.push(2*k[k.length-1]);var C=k.length,O=k[C-1];function R(r){return("number"==typeof r||"string"==typeof r)&&+Math.abs(r)<=e||r instanceof s&&r.value.length<=1}function D(r,e,n){e=H(e);for(var o=r.isNegative(),i=e.isNegative(),a=o?r.not():r,s=i?e.not():e,u=0,f=0,c=null,h=null,l=[];!a.isZero()||!s.isZero();)u=(c=x(a,O))[1].toJSNumber(),o&&(u=O-1-u),f=(h=x(s,O))[1].toJSNumber(),i&&(f=O-1-f),a=c[0],s=h[0],l.push(n(u,f));for(var d=0!==n(o?1:0,i?1:0)?t(-1):t(0),p=l.length-1;p>=0;p-=1)d=d.multiply(O).add(t(l[p]));return d}function T(r){var t=r.value,n="number"==typeof t?t|1<<30:t[0]+t[1]*e|1073758208;return n&-n}function L(r,t){return r=H(r),t=H(t),r.greater(t)?r:t}function F(r,t){return r=H(r),t=H(t),r.lesser(t)?r:t}function M(r,t){if(r=H(r).abs(),t=H(t).abs(),r.equals(t))return r;if(r.isZero())return t;if(t.isZero())return r;for(var e,n,o=a[1];r.isEven()&&t.isEven();)e=Math.min(T(r),T(t)),r=r.divide(e),t=t.divide(e),o=o.multiply(e);for(;r.isEven();)r=r.divide(T(r));do{for(;t.isEven();)t=t.divide(T(t));r.greater(t)&&(n=t,t=r,r=n),t=t.subtract(r)}while(!t.isZero());return o.isUnit()?r:r.multiply(o)}u.prototype.shiftLeft=s.prototype.shiftLeft=function(r){if(!R(r))throw new Error(String(r)+" is too large for shifting.");if((r=+r)<0)return this.shiftRight(-r);var t=this;if(t.isZero())return t;for(;r>=C;)t=t.multiply(O),r-=C-1;return t.multiply(k[r])},u.prototype.shiftRight=s.prototype.shiftRight=function(r){var t;if(!R(r))throw new Error(String(r)+" is too large for shifting.");if((r=+r)<0)return this.shiftLeft(-r);for(var e=this;r>=C;){if(e.isZero()||e.isNegative()&&e.isUnit())return e;e=(t=x(e,O))[1].isNegative()?t[0].prev():t[0],r-=C-1}return(t=x(e,k[r]))[1].isNegative()?t[0].prev():t[0]},u.prototype.not=s.prototype.not=function(){return this.negate().prev()},u.prototype.and=s.prototype.and=function(r){return D(this,r,function(r,t){return r&t})},u.prototype.or=s.prototype.or=function(r){return D(this,r,function(r,t){return r|t})},u.prototype.xor=s.prototype.xor=function(r){return D(this,r,function(r,t){return r^t})},u.prototype.bitLength=s.prototype.bitLength=function(){var r=this;return r.compareTo(t(0))<0&&(r=r.negate().subtract(t(1))),0===r.compareTo(t(0))?t(0):t(function r(e,n){if(n.compareTo(e)<=0){var o=r(e,n.square(n)),i=o.p,a=o.e,s=i.multiply(n);return s.compareTo(e)<=0?{p:s,e:2*a+1}:{p:i,e:2*a}}return{p:t(1),e:0}}(r,t(2)).e).add(t(1))};var K=function(r,t){for(var e=r.length,n=Math.abs(t),o=0;o<e;o++)if("-"!==(c=r[o].toLowerCase())&&/[a-z0-9]/.test(c)){if(/[0-9]/.test(c)&&+c>=n){if("1"===c&&1===n)continue;throw new Error(c+" is not a valid digit in base "+t+".")}if(c.charCodeAt(0)-87>=n)throw new Error(c+" is not a valid digit in base "+t+".")}if(2<=t&&t<=36&&e<=i/Math.log(t)){var a=parseInt(r,t);if(isNaN(a))throw new Error(c+" is not a valid digit in base "+t+".");return new u(parseInt(r,t))}t=H(t);var s=[],f="-"===r[0];for(o=f?1:0;o<r.length;o++){var c,h=(c=r[o].toLowerCase()).charCodeAt(0);if(48<=h&&h<=57)s.push(H(c));else if(97<=h&&h<=122)s.push(H(c.charCodeAt(0)-87));else{if("<"!==c)throw new Error(c+" is not a valid character");var l=o;do{o++}while(">"!==r[o]);s.push(H(r.slice(l+1,o)))}}return X(s,t,f)};function X(r,t,e){var n,o=a[0],i=a[1];for(n=r.length-1;n>=0;n--)o=o.add(r[n].times(i)),i=i.times(t);return e?o.negate():o}function Q(r){return r<=35?"0123456789abcdefghijklmnopqrstuvwxyz".charAt(r):"<"+r+">"}function P(r,e){if((e=t(e)).isZero()){if(r.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(r.isZero())return{value:[0],isNegative:!1};if(r.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-r)).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var n=Array.apply(null,Array(+r-1)).map(Array.prototype.valueOf,[0,1]);return n.unshift([1]),{value:[].concat.apply([],n),isNegative:!1}}var o=!1;if(r.isNegative()&&e.isPositive()&&(o=!0,r=r.abs()),e.equals(1))return r.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(+r)).map(Number.prototype.valueOf,1),isNegative:o};for(var i,a=[],s=r;s.isNegative()||s.compareAbs(e)>=0;){i=s.divmod(e),s=i.quotient;var u=i.remainder;u.isNegative()&&(u=e.minus(u).abs(),s=s.next()),a.push(u.toJSNumber())}return a.push(s.toJSNumber()),{value:a.reverse(),isNegative:o}}function V(r,t){var e=P(r,t);return(e.isNegative?"-":"")+e.value.map(Q).join("")}function W(r){if(f(+r)){var t=+r;if(t===p(t))return new u(t);throw new Error("Invalid integer: "+r)}var e="-"===r[0];e&&(r=r.slice(1));var n=r.split(/e/i);if(n.length>2)throw new Error("Invalid integer: "+n.join("e"));if(2===n.length){var o=n[1];if("+"===o[0]&&(o=o.slice(1)),(o=+o)!==p(o)||!f(o))throw new Error("Invalid integer: "+o+" is not a valid exponent.");var i=n[0],a=i.indexOf(".");if(a>=0&&(o-=i.length-a-1,i=i.slice(0,a)+i.slice(a+1)),o<0)throw new Error("Cannot include negative exponent part for integers");r=i+=new Array(o+1).join("0")}if(!/^([0-9][0-9]*)$/.test(r))throw new Error("Invalid integer: "+r);for(var c=[],h=r.length,d=h-7;h>0;)c.push(+r.slice(d,h)),(d-=7)<0&&(d=0),h-=7;return l(c),new s(c,e)}function H(r){return"number"==typeof r?function(r){if(f(r)){if(r!==p(r))throw new Error(r+" is not an integer.");return new u(r)}return W(r.toString())}(r):"string"==typeof r?W(r):r}s.prototype.toArray=function(r){return P(this,r)},u.prototype.toArray=function(r){return P(this,r)},s.prototype.toString=function(r){if(void 0===r&&(r=10),10!==r)return V(this,r);for(var t,e=this.value,n=e.length,o=String(e[--n]);--n>=0;)t=String(e[n]),o+="0000000".slice(t.length)+t;return(this.sign?"-":"")+o},u.prototype.toString=function(r){return void 0===r&&(r=10),10!=r?V(this,r):String(this.value)},s.prototype.toJSON=u.prototype.toJSON=function(){return this.toString()},s.prototype.toJSNumber=s.prototype.valueOf=function(){return parseInt(this.toString(),10)},u.prototype.toJSNumber=u.prototype.valueOf=function(){return this.value};for(var z=0;z<1e3;z++)a[z]=new u(z),z>0&&(a[-z]=new u(-z));return a.one=a[1],a.zero=a[0],a.minusOne=a[-1],a.max=L,a.min=F,a.gcd=M,a.lcm=function(r,t){return r=H(r).abs(),t=H(t).abs(),r.divide(M(r,t)).multiply(t)},a.isInstance=function(r){return r instanceof s||r instanceof u},a.randBetween=function(r,t){var n=F(r=H(r),t=H(t)),o=L(r,t).subtract(n).add(1);if(o.isSmall)return n.add(Math.floor(Math.random()*o));for(var i=[],a=!0,f=o.value.length-1;f>=0;f--){var c=a?o.value[f]:e,l=p(Math.random()*c);i.unshift(l),l<c&&(a=!1)}return i=h(i),n.add("number"==typeof i?new u(i):new s(i,!1))},a.fromArray=function(r,t,e){return X(r.map(H),H(t||10),e)},a}();r.hasOwnProperty("exports")&&(r.exports=t)}(r={path:void 0,exports:{},require:function(r,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),r.exports),f=require("bn.js"),c=function(){function r(r){void 0===r&&(r=Buffer.from([])),this.buffer=r,this.bytesRead=0}var t=r.prototype;return t.read=function(r){var t=this.buffer.slice(0,r);return this.buffer=this.buffer.slice(r),this.bytesRead+=r,t},t.write=function(r){this.buffer=Buffer.concat([this.buffer,Buffer.from(r)])},r}(),h=function(){function r(r){if(!r||r.length<1)throw new Error("Missing str in address");this.str=r}var t=r.prototype;return t.protocol=function(){if(this.str.length<1)throw Error("No address found.");return this.str[0]},t.payload=function(){if(this.str.length<1)throw Error("No address found.");return this.str.slice(1,this.str.length)},r}();function l(r){return e.blake2b(r,null,4)}function d(r,t){if(!t||!t.str)throw Error("Invalid address");var e="",n=t.payload(),i=t.protocol();switch(i){case 0:var a=function(r){for(var t,e=new f(0),n=0;t=r.read(1)[0],e.ior(new f(127&t).shln(n)),t>>7!=0;)n+=7;return e}(new c(n)).toString();e=r+String(i)+a;break;default:var s=Buffer.from([i]),u=l(Buffer.concat([s,n])),h=Buffer.concat([n,Buffer.from(u)]),d=o.hex2a(h.toString("hex")),p=o.b32encode(d).replace(/=/g,"").toLowerCase();e=String(r)+String(i)+p}return e}function p(r,t){var e=Buffer.from([r]),n=Buffer.concat([e,t]);return new h(n)}var g=[BigInt(1),BigInt(2),BigInt(4),BigInt(8),BigInt(16),BigInt(32),BigInt(64),BigInt(128),BigInt(256),BigInt(512),BigInt(1024),BigInt(2048),BigInt(4096),BigInt(8192),BigInt(16384),BigInt(32768),BigInt(65536),BigInt(131072),BigInt(262144),BigInt(471693),BigInt(419994),BigInt(397615),BigInt(395339),BigInt(275453),BigInt(273067),BigInt(268625),BigInt(144334),BigInt(141953),BigInt(137544),BigInt(126816),BigInt(122570),BigInt(116281),BigInt(114136),BigInt(107829),BigInt(103596),BigInt(101446),BigInt(90923),BigInt(86683),BigInt(84547),BigInt(78212),BigInt(76098),BigInt(71873),BigInt(63506),BigInt(57383),BigInt(53262),BigInt(51260),BigInt(45085),BigInt(43057),BigInt(38955),BigInt(28724),BigInt(26666),BigInt(22553),BigInt(14343),BigInt(2002),BigInt(1831),BigInt(1678),BigInt(1660),BigInt(1437),BigInt(1259),BigInt(948),BigInt(874),BigInt(729),BigInt(455),BigInt(63)],v=function(r){this.codeword=r};function m(r,t){this.hi=r>>>0,this.lo=t>>>0}function w(r,t){return new m(r,t)}function y(){var r=arguments,t=r[0].hi,e=r[0].lo,n=r.length-1;do{t^=r[n].hi,e^=r[n].lo,n--}while(n>0);return new this.u64(t,e)}function B(r,t,e,n,o){o|=0;for(var i=0;i<n;)r[i+t]=e[i+o],i++}function b(r){if(!r)return[];for(var t=r.length?1+(r.length-1>>>3):0,e=new Array(t),n=0;n<t;)e[n]=new m(r[8*n]<<24|r[8*n+1]<<16|r[8*n+2]<<8|r[8*n+3],r[8*n+4]<<24|r[8*n+5]<<16|r[8*n+6]<<8|r[8*n+7]),n++;return e}function E(r){for(var t=new Array(r.length),e=r.length,n=0;n<e;)t[4*n]=(4278190080&r[n])>>>24,t[4*n+1]=(16711680&r[n])>>>16,t[4*n+2]=(65280&r[n])>>>8,t[4*n+3]=255&r[n],n++;return t}v.mainnet=new v(BigInt(0)),v.testnet=new v(BigInt(0x6834ba37b3980400)),v.emulator=new v(BigInt(0x1cb159857af02000)),m.prototype.set=function(r){this.lo=r.lo,this.hi=r.hi},m.prototype.add=function(r){var t,e,n,o;return o=(this.hi>>>16)+(r.hi>>>16)+((n=(65535&this.hi)+(65535&r.hi)+((e=(this.lo>>>16)+(r.lo>>>16)+((t=(65535&this.lo)+(65535&r.lo))>>>16))>>>16))>>>16),this.lo=e<<16|65535&t,this.hi=o<<16|65535&n,this},m.prototype.addOne=function(){-1===this.lo||4294967295===this.lo?(this.lo=0,this.hi++):this.lo++},m.prototype.plus=function(r){var t,e,n,o,i=new m(0,0);return o=(this.hi>>>16)+(r.hi>>>16)+((n=(65535&this.hi)+(65535&r.hi)+((e=(this.lo>>>16)+(r.lo>>>16)+((t=(65535&this.lo)+(65535&r.lo))>>>16))>>>16))>>>16),i.lo=e<<16|65535&t,i.hi=o<<16|65535&n,i},m.prototype.not=function(){return new m(~this.hi,~this.lo)},m.prototype.one=function(){return new m(0,1)},m.prototype.zero=function(){return new m(0,0)},m.prototype.neg=function(){return this.not().plus(this.one())},m.prototype.minus=function(r){return this.plus(r.neg())},m.prototype.isZero=function(){return 0===this.lo&&0===this.hi},m.prototype.multiply=function(r){if(this.isZero())return this.zero();var t;if(!0!==((t=r)&&t.__isLong__)&&(r=function(r){return isNaN(r)||!isFinite(r)?this.zero():new m(r%1|0,r/1|0)}(r)),r.isZero())return this.zero();var e=65535&this.hi,n=this.lo>>>16,o=65535&this.lo,i=65535&r.hi,a=r.lo>>>16,s=65535&r.lo,u=0,f=0,c=0,h=0;return c+=(h+=o*s)>>>16,f+=(c+=n*s)>>>16,c&=65535,f+=(c+=o*a)>>>16,u+=(f+=e*s)>>>16,f&=65535,u+=(f+=n*a)>>>16,f&=65535,u+=(f+=o*i)>>>16,u+=(this.hi>>>16)*s+e*a+n*i+o*(r.hi>>>16),new m((u&=65535)<<16|(f&=65535),(c&=65535)<<16|(h&=65535))},m.prototype.shiftLeft=function(r){r%=64;var t=new m(0,0);if(0===r)return this.clone();if(r>31)t.lo=0,t.hi=this.lo<<r-32;else{var e=this.lo>>>32-r;t.lo=this.lo<<r,t.hi=this.hi<<r|e}return t},m.prototype.setShiftLeft=function(r){if(0===r)return this;if(r>63&&(r%=64),r>31)this.hi=this.lo<<r-32,this.lo=0;else{var t=this.lo>>>32-r;this.lo<<=r,this.hi=this.hi<<r|t}return this},m.prototype.shiftRight=function(r){r%=64;var t=new m(0,0);if(0===r)return this.clone();if(r>=32)t.hi=0,t.lo=this.hi>>>r-32;else{var e=32-r,n=this.hi<<e>>>e;t.hi=this.hi>>>r,t.lo=this.lo>>>r|n<<e}return t},m.prototype.rotateLeft=function(r){if(r>32)return this.rotateRight(64-r);var t=new m(0,0);return 0===r?(t.lo=this.lo>>>0,t.hi=this.hi>>>0):32===r?(t.lo=this.hi,t.hi=this.lo):(t.lo=this.lo<<r|this.hi>>>32-r,t.hi=this.hi<<r|this.lo>>>32-r),t},m.prototype.setRotateLeft=function(r){return r>32?this.setRotateRight(64-r):(0===r||(32===r?(t=this.lo,this.lo=this.hi,this.hi=t):(t=this.hi<<r|this.lo>>>32-r,this.lo=this.lo<<r|this.hi>>>32-r,this.hi=t)),this);var t},m.prototype.rotateRight=function(r){if(r>32)return this.rotateLeft(64-r);var t=new m(0,0);return 0===r?(t.lo=this.lo>>>0,t.hi=this.hi>>>0):32===r?(t.lo=this.hi,t.hi=this.lo):(t.lo=this.hi<<32-r|this.lo>>>r,t.hi=this.lo<<32-r|this.hi>>>r),t},m.prototype.setFlip=function(){var r;return r=this.lo,this.lo=this.hi,this.hi=r,this},m.prototype.setRotateRight=function(r){return r>32?this.setRotateLeft(64-r):(0===r||(32===r?(t=this.lo,this.lo=this.hi,this.hi=t):(newHigh=this.lo<<32-r|this.hi>>>r,this.lo=this.hi<<32-r|this.lo>>>r,this.hi=newHigh)),this);var t},m.prototype.xor=function(r){var t=new m(0,0);return t.hi=this.hi^r.hi,t.lo=this.lo^r.lo,t},m.prototype.setxorOne=function(r){return this.hi^=r.hi,this.lo^=r.lo,this},m.prototype.and=function(r){var t=new m(0,0);return t.hi=this.hi&r.hi,t.lo=this.lo&r.lo,t},m.prototype.clone=function(){return new m(this.hi,this.lo)},m.prototype.setxor64=function(){for(var r=arguments,t=r.length;t--;)this.hi^=r[t].hi,this.lo^=r[t].lo;return this};var I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function U(r){var t,e,n,o,i,a,s=[],u=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<r.length;)n=I.indexOf(r.charAt(u++)),t=(15&(o=I.indexOf(r.charAt(u++))))<<4|(i=I.indexOf(r.charAt(u++)))>>2,e=(3&i)<<6|(a=I.indexOf(r.charAt(u++))),s.push(n<<2|o>>4),64!==i&&s.push(t),64!==a&&s.push(e);return s}var A=b(U("xjL0pfSXpcb4b5eEl+uE+O5esJmwx5nu9nqMjYz3jfb/6BcNF+UN/9YK3L3ct73W3hbIscinsd6RbfxU/DlUkWCQ8FDwwFBgAgcFAwUEAwLOLuCp4IepzlbRh32HrH1W58wrGSvVGee1E6ZipnFitU18MeYxmuZN7Fm1mrXDmuyPQM9FzwVFjx+jvJ28Pp0fiUnAQMAJQIn6aJKHku+H+u/QPxU/xRXvspQm6yZ/67KOzkDJQAfJjvvmHQsd7Qv7QW4v7C+C7EGzGqlnqX1ns19DHP0cvv1fRWAl6iWK6kUj+dq/2ka/I1NRAvcCpvdT5EWhlqHTluSbdu1b7S1bm3UoXcJd6sJ14cUkHCTZHOE91Omu6XquPUzyvmq+mGpMbILuWu7YWmx+vcNBw/xBfvXzBgIG8QL1g1LRT9EdT4NojORc5NBcaFFWB/QHovRR0Y1cNFy5NNH54RgIGOkI+eJMrpOu35Piqz6Vc5VNc6til/VT9cRTYiprQT9BVD8qCBwUDBQQDAiVY/ZS9jFSlUbpr2WvjGVGnX/iXuIhXp0wSHgoeGAoMDfP+KH4bqE3ChsRDxEUDwov68S1xF61Lw4VGwkbHAkOJH5aNlpINiQbrbabtjabG9+YRz1HpT3fzadqJmqBJs1O9btpu5xpTn8zTM1M/s1/6lC6n7rPn+oSPy0bLSQbEh2kuZ65Op4dWMScdJywdFg0RnIucmguNDZBdy13bC023BHNss2jsty0nSnuKXPutFtNFvsWtvtbpKUB9gFT9qR2oddN1+xNdrcUo2GjdWG3fTRJzkn6zn1S3417jaR7Ut2fQj5CoT7dXs2TcZO8cV4TsaKXoiaXE6aiBPUEV/WmuQG4aLhpaLkAAAAAAAAAAMG1dCx0mSzBQOCgYKCAYEDjwiEfId0f43k6Q8hD8sh5tpos7Sx37bbUDdm+2bO+1I1HykbKAUaNZxdw2XDO2Wdyr91L3eRLcpTted55M96UmP9n1Gcr1JiwkyPoI3vosIVb3kreEUqFuwa9a71ta7vFu34qfpEqxU97NOU0nuVP7dc6FjrBFu2G0lTFVBfFhpr4YtdiL9eaZpn/Vf/MVWYRtqeUpyKUEYrASs9KD8+K6dkwEDDJEOkEDgoGCggGBP5mmIGY54H+oKsL8Atb8KB4tMxEzPBEeCXw1brVSrolS3U+4z6W40uirA7zDl/zol1EGf4Zuv5dgNtbwFsbwIAFgIWKhQqKBT/T7K3sfq0/If7fvN9CvCFwqNhI2OBIcPH9DAQM+QTxYxl633rG32N3L1jBWO7Bd68wn3WfRXWvQuelY6WEY0IgcFAwUEAwIOXLLhou0Rrl/e8SDhLhDv2/CLdtt2Vtv4FV1EzUGUyBGCQ8FDwwFBgmeV81X0w1JsOycS9xnS/DvoY44Thn4b41yP2i/WqiNYjHT8xPC8yILmVLOUtcOS6TavlX+T1Xk1VYDfINqvJV/GGdgp3jgvx6s8lHyfRHesgn76zvi6zIuogy5zJv57oyT30rfWQrMuZCpJWk15XmwDv7oPuboMAZqrOYszKYGZ72aNFoJ9GeoyKBf4Fdf6NE7qpmqohmRFTWgn6CqH5UO93mq+Z2qzsLlZ6DnhaDC4zJRcpFA8qMx7x7KXuVKcdrBW7TbtbTayhsRDxEUDwopyyLeYtVeae8gT3iPWPivBYxJx0nLB0WrTeadppBdq3blk07Ta0722Se+lb6yFZkdKbSTtLoTnQUNiIeIigeFJLkdtt2P9uSDBIeCh4YCgxI/LRstJBsSLiPN+Q3a+S4n3jnXeclXZ+9D7JusmFuvUNpKu8qhu9DxDXxpvGTpsQ52uOo43KoOTHG96T3YqQx04pZN1m9N9PydIaLhv+L8tWDVjJWsTLVi07FQ8UNQ4tuhetZ69xZbtoYwrfCr7faAY6PjI8CjAGxHaxkrHlksZzxbdJtI9KcSXI74DuS4EnYH8e0x6u02Ky5FfoVQ/qs8/oJBwn9B/PPoG8lb4Ulz8og6q/qj6/K9H2JjonzjvRHZyDpII7pRxA4KBgoIBgQbwtk1WTe1W/wc4OIg/uI8Er7sW+xlG9KXMqWcpa4clw4VGwkbHAkOFdfCPEIrvFXcyFSx1Lmx3OXZPNR8zVRl8uuZSNljSPLoSWEfIRZfKHoV7+cv8uc6D5dYyFjfCE+lup83Xw33ZZhHn/cf8LcYQ2ckYaRGoYND5uUhZQehQ/gS6uQq9uQ4Hy6xkLG+EJ8cSZXxFfixHHMKeWq5YOqzJDjc9hzO9iQBgkPBQ8MBQb39AMBA/UB9xwqNhI2OBIcwjz+o/6fo8Jqi+Ff4dRfaq6+EPkQR/muaQJr0GvS0GkXv6iRqC6RF5lx6FjoKViZOlNpJ2l0Jzon99C50E65J9mRSDhIqTjZ6941EzXNE+sr5c6zzlazKyJ3VTNVRDMi0gTWu9a/u9KpOZBwkElwqQeHgImADokHM8Hyp/JmpzMt7MG2wVq2LTxaZiJmeCI8Fbitkq0qkhXJqWAgYIkgyYdc20nbFUmHqrAa/xpP/6pQ2Ih4iKB4UKUrjnqOUXqlA4mKj4oGjwNZShP4E7L4WQmSm4CbEoAJGiM5Fzk0FxplEHXadcraZdeEUzFTtTHXhNVRxlETxoTQA9O407u40ILcXsNeH8OCKeLLsMtSsClaw5l3mbR3Wh4tMxEzPBEeez1Gy0b2y3uotx/8H0v8qG0MYdZh2tZtLGJOOk5YOiw=")),x=b(U("xsYy9KX0l6X4+G+XhJfrhO7uXrCZsMeZ9vZ6jI2M943//+gXDRflDdbWCty93Le93t4WyLHIp7GRkW38VPw5VGBgkPBQ8MBQAgIHBQMFBAPOzi7gqeCHqVZW0Yd9h6x95+fMKxkr1Rm1tROmYqZxYk1NfDHmMZrm7OxZtZq1w5qPj0DPRc8FRR8fo7ydvD6diYlJwEDACUD6+miSh5Lvh+/v0D8VP8UVsrKUJusmf+uOjs5AyUAHyfv75h0LHe0LQUFuL+wvguyzsxqpZ6l9Z19fQxz9HL79RUVgJeoliuojI/nav9pGv1NTUQL3Aqb35ORFoZah05abm3btW+0tW3V1KF3CXerC4eHFJBwk2Rw9PdTprul6rkxM8r5qvphqbGyC7lru2Fp+fr3DQcP8QfX18wYCBvECg4NS0U/RHU9oaIzkXOTQXFFRVgf0B6L00dGNXDRcuTT5+eEYCBjpCOLiTK6Trt+Tq6s+lXOVTXNiYpf1U/XEUyoqa0E/QVQ/CAgcFAwUEAyVlWP2UvYxUkZG6a9lr4xlnZ1/4l7iIV4wMEh4KHhgKDc3z/ih+G6hCgobEQ8RFA8vL+vEtcRetQ4OFRsJGxwJJCR+WjZaSDYbG622m7Y2m9/fmEc9R6U9zc2naiZqgSZOTvW7abucaX9/M0zNTP7N6upQup+6z58SEj8tGy0kGx0dpLmeuTqeWFjEnHScsHQ0NEZyLnJoLjY2QXctd2wt3NwRzbLNo7K0tJ0p7ilz7ltbTRb7Frb7pKSlAfYBU/Z2dqHXTdfsTbe3FKNho3VhfX00Sc5J+s5SUt+Ne42ke93dn0I+QqE+Xl7Nk3GTvHETE7Gil6Iml6amogT1BFf1ubkBuGi4aWgAAAAAAAAAAMHBtXQsdJksQEDgoGCggGDj48IhHyHdH3l5OkPIQ/LItraaLO0sd+3U1A3Zvtmzvo2NR8pGygFGZ2cXcNlwztlycq/dS93kS5SU7XneeTPemJj/Z9RnK9SwsJMj6CN76IWFW95K3hFKu7sGvWu9bWvFxbt+Kn6RKk9PezTlNJ7l7e3XOhY6wRaGhtJUxVQXxZqa+GLXYi/XZmaZ/1X/zFUREbanlKcilIqKwErPSg/P6enZMBAwyRAEBA4KBgoIBv7+ZpiBmOeBoKCrC/ALW/B4eLTMRMzwRCUl8NW61Uq6S0t1PuM+luOioqwO8w5f811dRBn+Gbr+gIDbW8BbG8AFBYCFioUKij8/0+yt7H6tISH+37zfQrxwcKjYSNjgSPHx/QwEDPkEY2MZet96xt93dy9YwVjuwa+vMJ91n0V1QkLnpWOlhGMgIHBQMFBAMOXlyy4aLtEa/f3vEg4S4Q6/vwi3bbdlbYGBVdRM1BlMGBgkPBQ8MBQmJnlfNV9MNcPDsnEvcZ0vvr6GOOE4Z+E1Ncj9ov1qooiIx0/MTwvMLi5lSzlLXDmTk2r5V/k9V1VVWA3yDary/PxhnYKd44J6erPJR8n0R8jIJ++s74usurqIMucyb+cyMk99K31kK+bmQqSVpNeVwMA7+6D7m6AZGaqzmLMymJ6e9mjRaCfRo6MigX+BXX9ERO6qZqqIZlRU1oJ+gqh+Ozvd5qvmdqsLC5Weg54Wg4yMyUXKRQPKx8e8eyl7lSlrawVu027W0ygobEQ8RFA8p6csi3mLVXm8vIE94j1j4hYWMScdJywdra03mnaaQXbb25ZNO02tO2RknvpW+shWdHSm0k7S6E4UFDYiHiIoHpKS5Hbbdj/bDAwSHgoeGApISPy0bLSQbLi4jzfkN2vkn594513nJV29vQ+ybrJhbkNDaSrvKobvxMQ18abxk6Y5OdrjqONyqDExxvek92Kk09OKWTdZvTfy8nSGi4b/i9XVg1YyVrEyi4tOxUPFDUNuboXrWevcWdraGMK3wq+3AQGOj4yPAoyxsR2sZKx5ZJyc8W3SbSPSSUlyO+A7kuDY2B/HtMertKysuRX6FUP68/P6CQcJ/QfPz6BvJW+FJcrKIOqv6o+v9PR9iY6J845HR2cg6SCO6RAQOCgYKCAYb28LZNVk3tXw8HODiIP7iEpK+7FvsZRvXFzKlnKWuHI4OFRsJGxwJFdXXwjxCK7xc3MhUsdS5seXl2TzUfM1UcvLrmUjZY0joaElhHyEWXzo6Fe/nL/LnD4+XWMhY3whlpbqfN18N91hYR5/3H/C3A0NnJGGkRqGDw+blIWUHoXg4EurkKvbkHx8usZCxvhCcXEmV8RX4sTMzCnlquWDqpCQ43PYczvYBgYJDwUPDAX39/QDAQP1ARwcKjYSNjgSwsI8/qP+n6NqaovhX+HUX66uvhD5EEf5aWkCa9Br0tAXF7+okagukZmZcehY6ClYOjpTaSdpdCcnJ/fQudBOudnZkUg4SKk46+veNRM1zRMrK+XOs85WsyIid1UzVUQz0tIE1rvWv7upqTmQcJBJcAcHh4CJgA6JMzPB8qfyZqctLezBtsFatjw8WmYiZngiFRW4rZKtKpLJyalgIGCJIIeHXNtJ2xVJqqqwGv8aT/9QUNiIeIigeKWlK456jlF6AwOJio+KBo9ZWUoT+BOy+AkJkpuAmxKAGhojORc5NBdlZRB12nXK2tfXhFMxU7UxhITVUcZRE8bQ0APTuNO7uIKC3F7DXh/DKSniy7DLUrBaWsOZd5m0dx4eLTMRMzwRe3s9RstG9suoqLcf/B9L/G1tDGHWYdrWLCxiTjpOWDo=")),S=b(U("pcbGMvSl9JeE+Phvl4SX65nu7l6wmbDHjfb2eoyNjPcN///oFw0X5b3W1grcvdy3sd7eFsixyKdUkZFt/FT8OVBgYJDwUPDAAwICBwUDBQSpzs4u4Kngh31WVtGHfYesGefnzCsZK9VitbUTpmKmceZNTXwx5jGamuzsWbWatcNFj49Az0XPBZ0fH6O8nbw+QImJScBAwAmH+vpokoeS7xXv79A/FT/F67KylCbrJn/Jjo7OQMlABwv7++YdCx3t7EFBbi/sL4Jns7MaqWepff1fX0Mc/Ry+6kVFYCXqJYq/IyP52r/aRvdTU1EC9wKmluTkRaGWodNbm5t27VvtLcJ1dShdwl3qHOHhxSQcJNmuPT3U6a7pempMTPK+ar6YWmxsgu5a7thBfn69w0HD/AL19fMGAgbxT4ODUtFP0R1caGiM5Fzk0PRRUVYH9AeiNNHRjVw0XLkI+fnhGAgY6ZPi4kyuk67fc6urPpVzlU1TYmKX9VP1xD8qKmtBP0FUDAgIHBQMFBBSlZVj9lL2MWVGRumvZa+MXp2df+Je4iEoMDBIeCh4YKE3N8/4ofhuDwoKGxEPERS1Ly/rxLXEXgkODhUbCRscNiQkflo2WkibGxuttpu2Nj3f35hHPUelJs3Np2omaoFpTk71u2m7nM1/fzNMzUz+n+rqULqfus8bEhI/LRstJJ4dHaS5nrk6dFhYxJx0nLAuNDRGci5yaC02NkF3LXdsstzcEc2yzaPutLSdKe4pc/tbW00W+xa29qSkpQH2AVNNdnah103X7GG3txSjYaN1zn19NEnOSfp7UlLfjXuNpD7d3Z9CPkKhcV5ezZNxk7yXExOxopeiJvWmpqIE9QRXaLm5AbhouGkAAAAAAAAAACzBwbV0LHSZYEBA4KBgoIAf4+PCIR8h3ch5eTpDyEPy7ba2miztLHe+1NQN2b7Zs0aNjUfKRsoB2WdnF3DZcM5LcnKv3Uvd5N6UlO153nkz1JiY/2fUZyvosLCTI+gje0qFhVveSt4Ra7u7Br1rvW0qxcW7fip+keVPT3s05TSeFu3t1zoWOsHFhobSVMVUF9eamvhi12IvVWZmmf9V/8yUERG2p5SnIs+KisBKz0oPEOnp2TAQMMkGBAQOCgYKCIH+/maYgZjn8KCgqwvwC1tEeHi0zETM8LolJfDVutVK40tLdT7jPpbzoqKsDvMOX/5dXUQZ/hm6wICA21vAWxuKBQWAhYqFCq0/P9Psrex+vCEh/t+830JIcHCo2EjY4ATx8f0MBAz532NjGXrfesbBd3cvWMFY7nWvrzCfdZ9FY0JC56VjpYQwICBwUDBQQBrl5csuGi7RDv397xIOEuFtv78It223ZUyBgVXUTNQZFBgYJDwUPDA1JiZ5XzVfTC/Dw7JxL3Gd4b6+hjjhOGeiNTXI/aL9asyIiMdPzE8LOS4uZUs5S1xXk5Nq+Vf5PfJVVVgN8g2qgvz8YZ2CneNHenqzyUfJ9KzIyCfvrO+L57q6iDLnMm8rMjJPfSt9ZJXm5kKklaTXoMDAO/ug+5uYGRmqs5izMtGenvZo0Wgnf6OjIoF/gV1mRETuqmaqiH5UVNaCfoKoqzs73ear5naDCwuVnoOeFsqMjMlFykUDKcfHvHspe5XTa2sFbtNu1jwoKGxEPERQeaenLIt5i1XivLyBPeI9Yx0WFjEnHScsdq2tN5p2mkE729uWTTtNrVZkZJ76VvrITnR0ptJO0ugeFBQ2Ih4iKNuSkuR223Y/CgwMEh4KHhhsSEj8tGy0kOS4uI835DdrXZ+feOdd5yVuvb0Psm6yYe9DQ2kq7yqGpsTENfGm8ZOoOTna46jjcqQxMcb3pPdiN9PTilk3Wb2L8vJ0houG/zLV1YNWMlaxQ4uLTsVDxQ1Zbm6F61nr3Lfa2hjCt8KvjAEBjo+MjwJksbEdrGSsedKcnPFt0m0j4ElJcjvgO5K02Ngfx7THq/qsrLkV+hVDB/Pz+gkHCf0lz8+gbyVvha/KyiDqr+qPjvT0fYmOifPpR0dnIOkgjhgQEDgoGCgg1W9vC2TVZN6I8PBzg4iD+29KSvuxb7GUclxcypZylrgkODhUbCRscPFXV18I8Qiux3NzIVLHUuZRl5dk81HzNSPLy65lI2WNfKGhJYR8hFmc6OhXv5y/yyE+Pl1jIWN83ZaW6nzdfDfcYWEef9x/woYNDZyRhpEahQ8Pm5SFlB6Q4OBLq5Cr20J8fLrGQsb4xHFxJlfEV+KqzMwp5arlg9iQkONz2HM7BQYGCQ8FDwwB9/f0AwED9RIcHCo2EjY4o8LCPP6j/p9famqL4V/h1Pmurr4Q+RBH0GlpAmvQa9KRFxe/qJGoLliZmXHoWOgpJzo6U2knaXS5Jyf30LnQTjjZ2ZFIOEipE+vr3jUTNc2zKyvlzrPOVjMiIndVM1VEu9LSBNa71r9wqak5kHCQSYkHB4eAiYAOpzMzwfKn8ma2LS3swbbBWiI8PFpmImZ4khUVuK2SrSogycmpYCBgiUmHh1zbSdsV/6qqsBr/Gk94UFDYiHiIoHqlpSuOeo5RjwMDiYqPigb4WVlKE/gTsoAJCZKbgJsSFxoaIzkXOTTaZWUQddp1yjHX14RTMVO1xoSE1VHGURO40NAD07jTu8OCgtxew14fsCkp4suwy1J3WlrDmXeZtBEeHi0zETM8y3t7PUbLRvb8qKi3H/wfS9ZtbQxh1mHaOiwsYk46Tlg=")),q=b(U("l6XGxjL0pfTrhPj4b5eEl8eZ7u5esJmw94329nqMjYzlDf//6BcNF7e91tYK3L3cp7He3hbIscg5VJGRbfxU/MBQYGCQ8FDwBAMCAgcFAwWHqc7OLuCp4Kx9VlbRh32H1Rnn58wrGStxYrW1E6ZipprmTU18MeYxw5rs7Fm1mrUFRY+PQM9Fzz6dHx+jvJ28CUCJiUnAQMDvh/r6aJKHksUV7+/QPxU/f+uyspQm6yYHyY6OzkDJQO0L+/vmHQsdguxBQW4v7C99Z7OzGqlnqb79X19DHP0ciupFRWAl6iVGvyMj+dq/2qb3U1NRAvcC05bk5EWhlqEtW5ubdu1b7erCdXUoXcJd2Rzh4cUkHCR6rj091Omu6ZhqTEzyvmq+2FpsbILuWu78QX5+vcNBw/EC9fXzBgIGHU+Dg1LRT9HQXGhojORc5KL0UVFWB/QHuTTR0Y1cNFzpCPn54RgIGN+T4uJMrpOuTXOrqz6Vc5XEU2Jil/VT9VQ/KiprQT9BEAwICBwUDBQxUpWVY/ZS9oxlRkbpr2WvIV6dnX/iXuJgKDAwSHgoeG6hNzfP+KH4FA8KChsRDxFetS8v68S1xBwJDg4VGwkbSDYkJH5aNlo2mxsbrbabtqU939+YRz1HgSbNzadqJmqcaU5O9btpu/7Nf38zTM1Mz5/q6lC6n7okGxISPy0bLTqeHR2kuZ65sHRYWMScdJxoLjQ0RnIucmwtNjZBdy13o7Lc3BHNss1z7rS0nSnuKbb7W1tNFvsWU/akpKUB9gHsTXZ2oddN13Vht7cUo2Gj+s59fTRJzkmke1JS3417jaE+3d2fQj5CvHFeXs2TcZMmlxMTsaKXolf1pqaiBPUEaWi5uQG4aLgAAAAAAAAAAJkswcG1dCx0gGBAQOCgYKDdH+PjwiEfIfLIeXk6Q8hDd+22tpos7SyzvtTUDdm+2QFGjY1HykbKztlnZxdw2XDkS3Jyr91L3TPelJTted55K9SYmP9n1Gd76LCwkyPoIxFKhYVb3krebWu7uwa9a72RKsXFu34qfp7lT097NOU0wRbt7dc6FjoXxYaG0lTFVC/Xmpr4YtdizFVmZpn/Vf8ilBERtqeUpw/PiorASs9KyRDp6dkwEDAIBgQEDgoGCueB/v5mmIGYW/CgoKsL8AvwRHh4tMxEzEq6JSXw1brVluNLS3U+4z5f86KirA7zDrr+XV1EGf4ZG8CAgNtbwFsKigUFgIWKhX6tPz/T7K3sQrwhIf7fvN/gSHBwqNhI2PkE8fH9DAQMxt9jYxl633ruwXd3L1jBWEV1r68wn3WfhGNCQuelY6VAMCAgcFAwUNEa5eXLLhou4Q79/e8SDhJlbb+/CLdttxlMgYFV1EzUMBQYGCQ8FDxMNSYmeV81X50vw8OycS9xZ+G+voY44ThqojU1yP2i/QvMiIjHT8xPXDkuLmVLOUs9V5OTavlX+aryVVVYDfIN44L8/GGdgp30R3p6s8lHyYusyMgn76zvb+e6uogy5zJkKzIyT30rfdeV5uZCpJWkm6DAwDv7oPsymBkZqrOYsyfRnp72aNFoXX+joyKBf4GIZkRE7qpmqqh+VFTWgn6Cdqs7O93mq+YWgwsLlZ6DngPKjIzJRcpFlSnHx7x7KXvW02trBW7TblA8KChsRDxEVXmnpyyLeYtj4ry8gT3iPSwdFhYxJx0nQXatrTeadpqtO9vblk07TchWZGSe+lb66E50dKbSTtIoHhQUNiIeIj/bkpLkdtt2GAoMDBIeCh6QbEhI/LRstGvkuLiPN+Q3JV2fn3jnXedhbr29D7JusobvQ0NpKu8qk6bExDXxpvFyqDk52uOo42KkMTHG96T3vTfT04pZN1n/i/LydIaLhrEy1dWDVjJWDUOLi07FQ8XcWW5uhetZ66+32toYwrfCAowBAY6PjI95ZLGxHaxkrCPSnJzxbdJtkuBJSXI74DurtNjYH8e0x0P6rKy5FfoV/Qfz8/oJBwmFJc/PoG8lb4+vysog6q/q84709H2JjomO6UdHZyDpICAYEBA4KBgo3tVvbwtk1WT7iPDwc4OIg5RvSkr7sW+xuHJcXMqWcpZwJDg4VGwkbK7xV1dfCPEI5sdzcyFSx1I1UZeXZPNR840jy8uuZSNlWXyhoSWEfITLnOjoV7+cv3whPj5dYyFjN92Wlup83XzC3GFhHn/cfxqGDQ2ckYaRHoUPD5uUhZTbkODgS6uQq/hCfHy6xkLG4sRxcSZXxFeDqszMKeWq5TvYkJDjc9hzDAUGBgkPBQ/1Aff39AMBAzgSHBwqNhI2n6PCwjz+o/7UX2pqi+Ff4Uf5rq6+EPkQ0tBpaQJr0GsukRcXv6iRqClYmZlx6FjodCc6OlNpJ2lOuScn99C50Kk42dmRSDhIzRPr6941EzVWsysr5c6zzkQzIiJ3VTNVv7vS0gTWu9ZJcKmpOZBwkA6JBweHgImAZqczM8Hyp/Jati0t7MG2wXgiPDxaZiJmKpIVFbitkq2JIMnJqWAgYBVJh4dc20nbT/+qqrAa/xqgeFBQ2Ih4iFF6paUrjnqOBo8DA4mKj4qy+FlZShP4ExKACQmSm4CbNBcaGiM5FznK2mVlEHXadbUx19eEUzFTE8aEhNVRxlG7uNDQA9O40x/DgoLcXsNeUrApKeLLsMu0d1paw5l3mTwRHh4tMxEz9st7ez1Gy0ZL/Kiotx/8H9rWbW0MYdZhWDosLGJOOk4=")),N=b(U("9JelxsYy9KWX64T4+G+XhLDHme7uXrCZjPeN9vZ6jI0X5Q3//+gXDdy3vdbWCty9yKex3t4WyLH8OVSRkW38VPDAUGBgkPBQBQQDAgIHBQPgh6nOzi7gqYesfVZW0Yd9K9UZ5+fMKxmmcWK1tROmYjGa5k1NfDHmtcOa7OxZtZrPBUWPj0DPRbw+nR8fo7ydwAlAiYlJwECS74f6+miShz/FFe/v0D8VJn/rsrKUJutAB8mOjs5AyR3tC/v75h0LL4LsQUFuL+ypfWezsxqpZxy+/V9fQxz9JYrqRUVgJeraRr8jI/navwKm91NTUQL3odOW5ORFoZbtLVubm3btW13qwnV1KF3CJNkc4eHFJBzpeq49PdTprr6YakxM8r5q7thabGyC7lrD/EF+fr3DQQbxAvX18wYC0R1Pg4NS0U/k0FxoaIzkXAei9FFRVgf0XLk00dGNXDQY6Qj5+eEYCK7fk+LiTK6TlU1zq6s+lXP1xFNiYpf1U0FUPyoqa0E/FBAMCAgcFAz2MVKVlWP2Uq+MZUZG6a9l4iFenZ1/4l54YCgwMEh4KPhuoTc3z/ihERQPCgobEQ/EXrUvL+vEtRscCQ4OFRsJWkg2JCR+Wja2NpsbG622m0elPd/fmEc9aoEmzc2naia7nGlOTvW7aUz+zX9/M0zNus+f6upQup8tJBsSEj8tG7k6nh0dpLmenLB0WFjEnHRyaC40NEZyLndsLTY2QXctzaOy3NwRzbIpc+60tJ0p7ha2+1tbTRb7AVP2pKSlAfbX7E12dqHXTaN1Ybe3FKNhSfrOfX00Sc6NpHtSUt+Ne0KhPt3dn0I+k7xxXl7Nk3GiJpcTE7GilwRX9aamogT1uGloubkBuGgAAAAAAAAAAHSZLMHBtXQsoIBgQEDgoGAh3R/j48IhH0PyyHl5OkPILHfttraaLO3Zs77U1A3ZvsoBRo2NR8pGcM7ZZ2cXcNnd5Etycq/dS3kz3pSU7XneZyvUmJj/Z9Qje+iwsJMj6N4RSoWFW95KvW1ru7sGvWt+kSrFxbt+KjSe5U9PezTlOsEW7e3XOhZUF8WGhtJUxWIv15qa+GLX/8xVZmaZ/1WnIpQREbanlEoPz4qKwErPMMkQ6enZMBAKCAYEBA4KBpjngf7+ZpiBC1vwoKCrC/DM8ER4eLTMRNVKuiUl8NW6PpbjS0t1PuMOX/OioqwO8xm6/l1dRBn+WxvAgIDbW8CFCooFBYCFiux+rT8/0+yt30K8ISH+37zY4EhwcKjYSAz5BPHx/QwEesbfY2MZet9Y7sF3dy9YwZ9Fda+vMJ91pYRjQkLnpWNQQDAgIHBQMC7RGuXlyy4aEuEO/f3vEg63ZW2/vwi3bdQZTIGBVdRMPDAUGBgkPBRfTDUmJnlfNXGdL8PDsnEvOGfhvr6GOOH9aqI1Ncj9ok8LzIiIx0/MS1w5Li5lSzn5PVeTk2r5Vw2q8lVVWA3yneOC/PxhnYLJ9Ed6erPJR++LrMjIJ++sMm/nurqIMud9ZCsyMk99K6TXlebmQqSV+5ugwMA7+6CzMpgZGaqzmGgn0Z6e9mjRgV1/o6MigX+qiGZERO6qZoKoflRU1oJ+5narOzvd5queFoMLC5Weg0UDyoyMyUXKe5Upx8e8eylu1tNrawVu00RQPCgobEQ8i1V5p6csi3k9Y+K8vIE94icsHRYWMScdmkF2ra03mnZNrTvb25ZNO/rIVmRknvpW0uhOdHSm0k4iKB4UFDYiHnY/25KS5HbbHhgKDAwSHgq0kGxISPy0bDdr5Li4jzfk5yVdn594512yYW69vQ+ybiqG70NDaSrv8ZOmxMQ18abjcqg5OdrjqPdipDExxvekWb0309OKWTeG/4vy8nSGi1axMtXVg1YyxQ1Di4tOxUPr3FluboXrWcKvt9raGMK3jwKMAQGOj4yseWSxsR2sZG0j0pyc8W3SO5LgSUlyO+DHq7TY2B/HtBVD+qysuRX6Cf0H8/P6CQdvhSXPz6BvJeqPr8rKIOqvifOO9PR9iY4gjulHR2cg6SggGBAQOCgYZN7Vb28LZNWD+4jw8HODiLGUb0pK+7FvlrhyXFzKlnJscCQ4OFRsJAiu8VdXXwjxUubHc3MhUsfzNVGXl2TzUWWNI8vLrmUjhFl8oaElhHy/y5zo6Fe/nGN8IT4+XWMhfDfdlpbqfN1/wtxhYR5/3JEahg0NnJGGlB6FDw+blIWr25Dg4EurkMb4Qnx8usZCV+LEcXEmV8Tlg6rMzCnlqnM72JCQ43PYDwwFBgYJDwUD9QH39/QDATY4EhwcKjYS/p+jwsI8/qPh1F9qaovhXxBH+a6uvhD5a9LQaWkCa9CoLpEXF7+okegpWJmZcehYaXQnOjpTaSfQTrknJ/fQuUipONnZkUg4Nc0T6+veNRPOVrMrK+XOs1VEMyIid1Uz1r+70tIE1ruQSXCpqTmQcIAOiQcHh4CJ8manMzPB8qfBWrYtLezBtmZ4Ijw8WmYirSqSFRW4rZJgiSDJyalgINsVSYeHXNtJGk//qqqwGv+IoHhQUNiIeI5ReqWlK456igaPAwOJio8TsvhZWUoT+JsSgAkJkpuAOTQXGhojORd1ytplZRB12lO1MdfXhFMxURPGhITVUcbTu7jQ0APTuF4fw4KC3F7Dy1KwKSniy7CZtHdaWsOZdzM8ER4eLTMRRvbLe3s9RssfS/yoqLcf/GHa1m1tDGHWTlg6LCxiTjo=")),k=b(U("pfSXpcbGMvSEl+uE+Phvl5mwx5nu7l6wjYz3jfb2eowNF+UN///oF73ct73W1grcscinsd7eFshU/DlUkZFt/FDwwFBgYJDwAwUEAwICBwWp4Iepzs4u4H2HrH1WVtGHGSvVGefnzCtipnFitbUTpuYxmuZNTXwxmrXDmuzsWbVFzwVFj49Az528Pp0fH6O8QMAJQImJScCHku+H+vpokhU/xRXv79A/6yZ/67KylCbJQAfJjo7OQAsd7Qv7++Yd7C+C7EFBbi9nqX1ns7Maqf0cvv1fX0Mc6iWK6kVFYCW/2ka/IyP52vcCpvdTU1EClqHTluTkRaFb7S1bm5t27cJd6sJ1dShdHCTZHOHhxSSu6XquPT3U6Wq+mGpMTPK+Wu7YWmxsgu5Bw/xBfn69wwIG8QL19fMGT9EdT4ODUtFc5NBcaGiM5PQHovRRUVYHNFy5NNHRjVwIGOkI+fnhGJOu35Pi4kyuc5VNc6urPpVT9cRTYmKX9T9BVD8qKmtBDBQQDAgIHBRS9jFSlZVj9mWvjGVGRumvXuIhXp2df+IoeGAoMDBIeKH4bqE3N8/4DxEUDwoKGxG1xF61Ly/rxAkbHAkODhUbNlpINiQkflqbtjabGxuttj1HpT3f35hHJmqBJs3Np2ppu5xpTk71u81M/s1/fzNMn7rPn+rqULobLSQbEhI/LZ65Op4dHaS5dJywdFhYxJwucmguNDRGci13bC02NkF3ss2jstzcEc3uKXPutLSdKfsWtvtbW00W9gFT9qSkpQFN1+xNdnah12GjdWG3txSjzkn6zn19NEl7jaR7UlLfjT5CoT7d3Z9CcZO8cV5ezZOXoiaXExOxovUEV/WmpqIEaLhpaLm5AbgAAAAAAAAAACx0mSzBwbV0YKCAYEBA4KAfId0f4+PCIchD8sh5eTpD7Sx37ba2miy+2bO+1NQN2UbKAUaNjUfK2XDO2WdnF3BL3eRLcnKv3d55M96UlO151Gcr1JiY/2foI3vosLCTI0reEUqFhVvea71ta7u7Br0qfpEqxcW7fuU0nuVPT3s0FjrBFu3t1zrFVBfFhobSVNdiL9eamvhiVf/MVWZmmf+UpyKUERG2p89KD8+KisBKEDDJEOnp2TAGCggGBAQOCoGY54H+/maY8Atb8KCgqwtEzPBEeHi0zLrVSrolJfDV4z6W40tLdT7zDl/zoqKsDv4Zuv5dXUQZwFsbwICA21uKhQqKBQWAha3sfq0/P9PsvN9CvCEh/t9I2OBIcHCo2AQM+QTx8f0M33rG32NjGXrBWO7Bd3cvWHWfRXWvrzCfY6WEY0JC56UwUEAwICBwUBou0Rrl5csuDhLhDv397xJtt2Vtv78It0zUGUyBgVXUFDwwFBgYJDw1X0w1JiZ5Xy9xnS/Dw7Jx4Thn4b6+hjii/WqiNTXI/cxPC8yIiMdPOUtcOS4uZUtX+T1Xk5Nq+fINqvJVVVgNgp3jgvz8YZ1HyfRHenqzyazvi6zIyCfv5zJv57q6iDIrfWQrMjJPfZWk15Xm5kKkoPuboMDAO/uYszKYGRmqs9FoJ9GenvZof4Fdf6OjIoFmqohmRETuqn6CqH5UVNaCq+Z2qzs73eaDnhaDCwuVnspFA8qMjMlFKXuVKcfHvHvTbtbTa2sFbjxEUDwoKGxEeYtVeaenLIviPWPivLyBPR0nLB0WFjEndppBdq2tN5o7Ta0729uWTVb6yFZkZJ76TtLoTnR0ptIeIigeFBQ2Itt2P9uSkuR2Ch4YCgwMEh5stJBsSEj8tOQ3a+S4uI83XeclXZ+feOdusmFuvb0Psu8qhu9DQ2kqpvGTpsTENfGo43KoOTna46T3YqQxMcb3N1m9N9PTilmLhv+L8vJ0hjJWsTLV1YNWQ8UNQ4uLTsVZ69xZbm6F67fCr7fa2hjCjI8CjAEBjo9krHlksbEdrNJtI9KcnPFt4DuS4ElJcju0x6u02Ngfx/oVQ/qsrLkVBwn9B/Pz+gklb4Ulz8+gb6/qj6/KyiDqjonzjvT0fYnpII7pR0dnIBgoIBgQEDgo1WTe1W9vC2SIg/uI8PBzg2+xlG9KSvuxcpa4clxcypYkbHAkODhUbPEIrvFXV18Ix1Lmx3NzIVJR8zVRl5dk8yNljSPLy65lfIRZfKGhJYScv8uc6OhXvyFjfCE+Pl1j3Xw33ZaW6nzcf8LcYWEef4aRGoYNDZyRhZQehQ8Pm5SQq9uQ4OBLq0LG+EJ8fLrGxFfixHFxJleq5YOqzMwp5dhzO9iQkONzBQ8MBQYGCQ8BA/UB9/f0AxI2OBIcHCo2o/6fo8LCPP5f4dRfamqL4fkQR/murr4Q0GvS0GlpAmuRqC6RFxe/qFjoKViZmXHoJ2l0Jzo6U2m50E65Jyf30DhIqTjZ2ZFIEzXNE+vr3jWzzlazKyvlzjNVRDMiIndVu9a/u9LSBNZwkElwqak5kImADokHB4eAp/JmpzMzwfK2wVq2LS3swSJmeCI8PFpmkq0qkhUVuK0gYIkgycmpYEnbFUmHh1zb/xpP/6qqsBp4iKB4UFDYiHqOUXqlpSuOj4oGjwMDiYr4E7L4WVlKE4CbEoAJCZKbFzk0FxoaIznadcraZWUQdTFTtTHX14RTxlETxoSE1VG407u40NAD08NeH8OCgtxesMtSsCkp4st3mbR3WlrDmREzPBEeHi0zy0b2y3t7PUb8H0v8qKi3H9Zh2tZtbQxhOk5YOiwsYk4=")),C=b(U("9KX0l6XGxjKXhJfrhPj4b7CZsMeZ7u5ejI2M94329noXDRflDf//6Ny93Le91tYKyLHIp7He3hb8VPw5VJGRbfBQ8MBQYGCQBQMFBAMCAgfgqeCHqc7OLod9h6x9VlbRKxkr1Rnn58ymYqZxYrW1EzHmMZrmTU18tZq1w5rs7FnPRc8FRY+PQLydvD6dHx+jwEDACUCJiUmSh5Lvh/r6aD8VP8UV7+/QJusmf+uyspRAyUAHyY6Ozh0LHe0L+/vmL+wvguxBQW6pZ6l9Z7OzGhz9HL79X19DJeoliupFRWDav9pGvyMj+QL3Aqb3U1NRoZah05bk5EXtW+0tW5ubdl3CXerCdXUoJBwk2Rzh4cXprul6rj091L5qvphqTEzy7lru2FpsbILDQcP8QX5+vQYCBvEC9fXz0U/RHU+Dg1LkXOTQXGhojAf0B6L0UVFWXDRcuTTR0Y0YCBjpCPn54a6Trt+T4uJMlXOVTXOrqz71U/XEU2Jil0E/QVQ/KiprFAwUEAwICBz2UvYxUpWVY69lr4xlRkbp4l7iIV6dnX94KHhgKDAwSPih+G6hNzfPEQ8RFA8KChvEtcRetS8v6xsJGxwJDg4VWjZaSDYkJH62m7Y2mxsbrUc9R6U939+YaiZqgSbNzae7abucaU5O9UzNTP7Nf38zup+6z5/q6lAtGy0kGxISP7meuTqeHR2knHScsHRYWMRyLnJoLjQ0Rnctd2wtNjZBzbLNo7Lc3BEp7ilz7rS0nRb7Frb7W1tNAfYBU/akpKXXTdfsTXZ2oaNho3Vht7cUSc5J+s59fTSNe42ke1JS30I+QqE+3d2fk3GTvHFeXs2il6ImlxMTsQT1BFf1pqaiuGi4aWi5uQEAAAAAAAAAAHQsdJkswcG1oGCggGBAQOAhHyHdH+PjwkPIQ/LIeXk6LO0sd+22tprZvtmzvtTUDcpGygFGjY1HcNlwztlnZxfdS93kS3Jyr3neeTPelJTtZ9RnK9SYmP8j6CN76LCwk95K3hFKhYVbvWu9bWu7uwZ+Kn6RKsXFuzTlNJ7lT097OhY6wRbt7ddUxVQXxYaG0mLXYi/Xmpr4/1X/zFVmZpmnlKcilBERtkrPSg/PiorAMBAwyRDp6dkKBgoIBgQEDpiBmOeB/v5mC/ALW/CgoKvMRMzwRHh4tNW61Uq6JSXwPuM+luNLS3UO8w5f86KirBn+Gbr+XV1EW8BbG8CAgNuFioUKigUFgOyt7H6tPz/T37zfQrwhIf7YSNjgSHBwqAwEDPkE8fH9et96xt9jYxlYwVjuwXd3L591n0V1r68wpWOlhGNCQudQMFBAMCAgcC4aLtEa5eXLEg4S4Q79/e+3bbdlbb+/CNRM1BlMgYFVPBQ8MBQYGCRfNV9MNSYmeXEvcZ0vw8OyOOE4Z+G+vob9ov1qojU1yE/MTwvMiIjHSzlLXDkuLmX5V/k9V5OTag3yDaryVVVYnYKd44L8/GHJR8n0R3p6s++s74usyMgnMucyb+e6uoh9K31kKzIyT6SVpNeV5uZC+6D7m6DAwDuzmLMymBkZqmjRaCfRnp72gX+BXX+joyKqZqqIZkRE7oJ+gqh+VFTW5qvmdqs7O92eg54WgwsLlUXKRQPKjIzJeyl7lSnHx7xu027W02trBUQ8RFA8KChsi3mLVXmnpyw94j1j4ry8gScdJywdFhYxmnaaQXatrTdNO02tO9vblvpW+shWZGSe0k7S6E50dKYiHiIoHhQUNnbbdj/bkpLkHgoeGAoMDBK0bLSQbEhI/DfkN2vkuLiP513nJV2fn3iybrJhbr29DyrvKobvQ0Np8abxk6bExDXjqONyqDk52vek92KkMTHGWTdZvTfT04qGi4b/i/LydFYyVrEy1dWDxUPFDUOLi07rWevcWW5uhcK3wq+32toYj4yPAowBAY6sZKx5ZLGxHW3SbSPSnJzxO+A7kuBJSXLHtMertNjYHxX6FUP6rKy5CQcJ/Qfz8/pvJW+FJc/PoOqv6o+vysogiY6J84709H0g6SCO6UdHZygYKCAYEBA4ZNVk3tVvbwuDiIP7iPDwc7FvsZRvSkr7lnKWuHJcXMpsJGxwJDg4VAjxCK7xV1dfUsdS5sdzcyHzUfM1UZeXZGUjZY0jy8uuhHyEWXyhoSW/nL/LnOjoV2MhY3whPj5dfN18N92Wlup/3H/C3GFhHpGGkRqGDQ2clIWUHoUPD5urkKvbkODgS8ZCxvhCfHy6V8RX4sRxcSblquWDqszMKXPYczvYkJDjDwUPDAUGBgkDAQP1Aff39DYSNjgSHBwq/qP+n6PCwjzhX+HUX2pqixD5EEf5rq6+a9Br0tBpaQKokagukRcXv+hY6ClYmZlxaSdpdCc6OlPQudBOuScn90g4SKk42dmRNRM1zRPr697Os85Wsysr5VUzVUQzIiJ31rvWv7vS0gSQcJBJcKmpOYCJgA6JBweH8qfyZqczM8HBtsFati0t7GYiZngiPDxarZKtKpIVFbhgIGCJIMnJqdtJ2xVJh4dcGv8aT/+qqrCIeIigeFBQ2I56jlF6paUrio+KBo8DA4kT+BOy+FlZSpuAmxKACQmSORc5NBcaGiN12nXK2mVlEFMxU7Ux19eEUcZRE8aEhNXTuNO7uNDQA17DXh/DgoLcy7DLUrApKeKZd5m0d1pawzMRMzwRHh4tRstG9st7ez0f/B9L/Kiot2HWYdrWbW0MTjpOWDosLGI=")),O=b(U("MvSl9JelxsZvl4SX64T4+F6wmbDHme7ueoyNjPeN9vboFw0X5Q3//wrcvdy3vdbWFsixyKex3t5t/FT8OVSRkZDwUPDAUGBgBwUDBQQDAgIu4Kngh6nOztGHfYesfVZWzCsZK9UZ5+cTpmKmcWK1tXwx5jGa5k1NWbWatcOa7OxAz0XPBUWPj6O8nbw+nR8fScBAwAlAiYlokoeS74f6+tA/FT/FFe/vlCbrJn/rsrLOQMlAB8mOjuYdCx3tC/v7bi/sL4LsQUEaqWepfWezs0Mc/Ry+/V9fYCXqJYrqRUX52r/aRr8jI1EC9wKm91NTRaGWodOW5OR27VvtLVubmyhdwl3qwnV1xSQcJNkc4eHU6a7peq49PfK+ar6YakxMgu5a7thabGy9w0HD/EF+fvMGAgbxAvX1UtFP0R1Pg4OM5Fzk0FxoaFYH9Aei9FFRjVw0XLk00dHhGAgY6Qj5+Uyuk67fk+LiPpVzlU1zq6uX9VP1xFNiYmtBP0FUPyoqHBQMFBAMCAhj9lL2MVKVlemvZa+MZUZGf+Je4iFenZ1IeCh4YCgwMM/4ofhuoTc3GxEPERQPCgrrxLXEXrUvLxUbCRscCQ4Oflo2Wkg2JCSttpu2NpsbG5hHPUelPd/fp2omaoEmzc31u2m7nGlOTjNMzUz+zX9/ULqfus+f6uo/LRstJBsSEqS5nrk6nh0dxJx0nLB0WFhGci5yaC40NEF3LXdsLTY2Ec2yzaOy3NydKe4pc+60tE0W+xa2+1tbpQH2AVP2pKSh103X7E12dhSjYaN1Ybe3NEnOSfrOfX3fjXuNpHtSUp9CPkKhPt3dzZNxk7xxXl6xopeiJpcTE6IE9QRX9aamAbhouGloubkAAAAAAAAAALV0LHSZLMHB4KBgoIBgQEDCIR8h3R/j4zpDyEPyyHl5miztLHfttrYN2b7Zs77U1EfKRsoBRo2NF3DZcM7ZZ2ev3Uvd5Etycu153nkz3pSU/2fUZyvUmJiTI+gje+iwsFveSt4RSoWFBr1rvW1ru7u7fip+kSrFxXs05TSe5U9P1zoWOsEW7e3SVMVUF8WGhvhi12Iv15qamf9V/8xVZma2p5SnIpQREcBKz0oPz4qK2TAQMMkQ6ekOCgYKCAYEBGaYgZjngf7+qwvwC1vwoKC0zETM8ER4ePDVutVKuiUldT7jPpbjS0usDvMOX/OiokQZ/hm6/l1d21vAWxvAgICAhYqFCooFBdPsrex+rT8//t+830K8ISGo2EjY4EhwcP0MBAz5BPHxGXrfesbfY2MvWMFY7sF3dzCfdZ9Fda+v56VjpYRjQkJwUDBQQDAgIMsuGi7RGuXl7xIOEuEO/f0It223ZW2/v1XUTNQZTIGBJDwUPDAUGBh5XzVfTDUmJrJxL3GdL8PDhjjhOGfhvr7I/aL9aqI1NcdPzE8LzIiIZUs5S1w5Li5q+Vf5PVeTk1gN8g2q8lVVYZ2CneOC/PyzyUfJ9Ed6eifvrO+LrMjIiDLnMm/nurpPfSt9ZCsyMkKklaTXlebmO/ug+5ugwMCqs5izMpgZGfZo0Wgn0Z6eIoF/gV1/o6PuqmaqiGZERNaCfoKoflRU3ear5narOzuVnoOeFoMLC8lFykUDyoyMvHspe5Upx8cFbtNu1tNra2xEPERQPCgoLIt5i1V5p6eBPeI9Y+K8vDEnHScsHRYWN5p2mkF2ra2WTTtNrTvb2576VvrIVmRkptJO0uhOdHQ2Ih4iKB4UFOR223Y/25KSEh4KHhgKDAz8tGy0kGxISI835Ddr5Li4eOdd5yVdn58Psm6yYW69vWkq7yqG70NDNfGm8ZOmxMTa46jjcqg5Ocb3pPdipDExilk3Wb0309N0houG/4vy8oNWMlaxMtXVTsVDxQ1Di4uF61nr3FlubhjCt8Kvt9rajo+MjwKMAQEdrGSseWSxsfFt0m0j0pyccjvgO5LgSUkfx7THq7TY2LkV+hVD+qys+gkHCf0H8/OgbyVvhSXPzyDqr+qPr8rKfYmOifOO9PRnIOkgjulHRzgoGCggGBAQC2TVZN7Vb29zg4iD+4jw8Puxb7GUb0pKypZylrhyXFxUbCRscCQ4OF8I8Qiu8VdXIVLHUubHc3Nk81HzNVGXl65lI2WNI8vLJYR8hFl8oaFXv5y/y5zo6F1jIWN8IT4+6nzdfDfdlpYef9x/wtxhYZyRhpEahg0Nm5SFlB6FDw9Lq5Cr25Dg4LrGQsb4Qnx8JlfEV+LEcXEp5arlg6rMzONz2HM72JCQCQ8FDwwFBgb0AwED9QH39yo2EjY4EhwcPP6j/p+jwsKL4V/h1F9qar4Q+RBH+a6uAmvQa9LQaWm/qJGoLpEXF3HoWOgpWJmZU2knaXQnOjr30LnQTrknJ5FIOEipONnZ3jUTNc0T6+vlzrPOVrMrK3dVM1VEMyIiBNa71r+70tI5kHCQSXCpqYeAiYAOiQcHwfKn8manMzPswbbBWrYtLVpmImZ4Ijw8uK2SrSqSFRWpYCBgiSDJyVzbSdsVSYeHsBr/Gk//qqrYiHiIoHhQUCuOeo5ReqWliYqPigaPAwNKE/gTsvhZWZKbgJsSgAkJIzkXOTQXGhoQddp1ytplZYRTMVO1MdfX1VHGURPGhIQD07jTu7jQ0Nxew14fw4KC4suwy1KwKSnDmXeZtHdaWi0zETM8ER4ePUbLRvbLe3u3H/wfS/yoqAxh1mHa1m1tYk46Tlg6LCw=")),R=function(r,t){if(7===r)return 255&t.lo;var e=8*(7-r);if(e>=32)return t.hi>>>e-32&255;var n=32-e;return 255&(t.lo>>>e|t.hi<<n>>>n<<n)},D=[w(0,0),w(0,16),w(0,32),w(0,48),w(0,64),w(0,80),w(0,96),w(0,112),w(0,128),w(0,144),w(0,160),w(0,176),w(0,192),w(0,208),w(0,224),w(0,240)],T=[w(4294967295,4294967295),w(4294967295,4294967279),w(4294967295,4294967263),w(4294967295,4294967247),w(4294967295,4294967231),w(4294967295,4294967215),w(4294967295,4294967199),w(4294967295,4294967183),w(4294967295,4294967167),w(4294967295,4294967151),w(4294967295,4294967135),w(4294967295,4294967119),w(4294967295,4294967103),w(4294967295,4294967087),w(4294967295,4294967071),w(4294967295,4294967055)],L=[w(0,0),w(0,1),w(0,2),w(0,3),w(0,4),w(0,5),w(0,6),w(0,7),w(0,8),w(0,9),w(0,10),w(0,11),w(0,12),w(0,13)],F=function(r,t){for(var e=new Array(16),n=new Array(16),o=0;o<16;o++)n[o]=r[o],e[o]=n[o].xor(t[o]);for(var i=new Array(16),a=0;a<14;a++){for(var s=0;s<16;s++)e[s].setxor64(D[s].plus(L[a]).setShiftLeft(56));for(var u=0;u<16;u++)i[u]=y(A[R(0,e[u])],x[R(1,e[u+1&15])],S[R(2,e[u+2&15])],q[R(3,e[u+3&15])],N[R(4,e[u+4&15])],k[R(5,e[u+5&15])],C[R(6,e[u+6&15])],O[R(7,e[u+11&15])]);var f=e;e=i,i=f}for(var c=0;c<14;c++){for(var h=0;h<16;h++)n[h].setxor64(L[c],T[h]);for(var l=0;l<16;l++)i[l]=y(A[R(0,n[l+1&15])],x[R(1,n[l+3&15])],S[R(2,n[l+5&15])],q[R(3,n[l+11&15])],N[R(4,n[l+0&15])],k[R(5,n[l+2&15])],C[R(6,n[l+4&15])],O[R(7,n[l+6&15])]);temp=n,n=i,i=temp}for(var d=0;d<16;d++)t[d].setxor64(e[d],n[d])},M=function(r,t,e){var n,o,i=new Array(16);if(n=r.buffer,e<r.buffer.length-(o=r.ptr))return B(n,o,t,t.length),void(r.ptr=o+=t.length);for(B(i,0,r.state,16);e>0;){var a=r.buffer.length-o;if(a>e&&(a=e),B(n,o,t,a),o+=a,t=t.slice(a),e-=a,o===r.buffer.length){var s=b(n);F(s,i),r.count.addOne(),o=0}}r.state=i,r.ptr=o};function K(r,t,e){var n;n=1===t?r:2===t?E(r):function(r){for(var t=r.length,e=new Array(t),n=0;n<t;)e[n]=r.charCodeAt(n),n++;return e}(r);var o={};o.state=new Array(16);for(var i=0;i<15;i++)o.state[i]=new m(0,0);o.state[15]=new m(0,512),o.ptr=0,o.count=new m(0,0),o.buffer=new Array(128),M(o,n,n.length);var a=function(r){var t,e,n,o,i,a=r.ptr,s=new Array(136);s[0]=128,a<120?(t=128-a,e=r.count.plus(w(0,1))):(t=256-a,e=r.count.plus(w(0,2))),function(r,t,e,n){for(var o=0;o<n;)r[o+1]=0,o++}(s,0,0,t-9),(n=s)[o=t-8]=(i=e).hi>>>24,n[o+1]=i.hi>>>16&255,n[o+2]=i.hi>>>8&255,n[o+3]=255&i.hi,n[o+4]=i.lo>>>24,n[o+5]=i.lo>>>16&255,n[o+6]=i.lo>>>8&255,n[o+7]=255&i.lo,M(r,s,t),function(r){var t=new Array(16);!function(r,t,e,n){for(var o=0;o<16;)r[o+0]=e[o].clone(),o++}(t,0,r);for(var e=new Array(16),n=0;n<14;n++){for(var o=0;o<16;o++)t[o].setxor64(D[o].plus(L[n]).setShiftLeft(56));for(var i=0;i<16;i++)e[i]=y(A[R(0,t[i])],x[R(1,t[i+1&15])],S[R(2,t[i+2&15])],q[R(3,t[i+3&15])],N[R(4,t[i+4&15])],k[R(5,t[i+5&15])],C[R(6,t[i+6&15])],O[R(7,t[i+11&15])]);var a=t;t=e,e=a}for(var s=0;s<16;s++)r[s].setxor64(t[s])}(r.state);for(var u=new Array(16),f=0,c=8;f<8;f++,c++)u[2*f]=r.state[c].hi,u[2*f+1]=r.state[c].lo;return u}(o);return 2===e?a:1===e?E(a):function(r){for(var t="",e=r.length,n=0;n<e;n++){var o=r[n];o<0&&(o=4294967295+r[n]+1);for(var i=o.toString(16);i.length<8;)i="0"+i;t+=i}return t}(a)}for(var X={},Q="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",P=[],V=0;V<Q.length;V++)P.push(Q.charCodeAt(V));var W=[0,2,3,5,6,7,9,10,11],H=P.length;function z(r){var t=function(r){if(r.length%2!=0)throw Error("Hex string has invalid length!");for(var t=new Uint8Array(r.length/2),e=0;e<r.length/2;++e)t[e]=parseInt(r.slice(2*e,2*e+2),16);return t}(r.toString("hex"));if(0===t.length)throw Error("Unrecognised address format");var e,n=Math.floor(t.length/8),o=t.length%8,i=11*n+W[o],a=new Uint8Array(i);for(e=0;e<i;++e)a[e]=P[0];for(e=0;e<n;e++)a=X.encodeBlock(t.subarray(8*e,8*e+8),a,11*e);return o>0&&(a=X.encodeBlock(t.subarray(8*n,8*n+o),a,11*n)),function(r){for(var t=[],e=0,n=Object.keys(r);e<n.length;e++)t.push(String.fromCharCode(r[Number(n[e])]));return t.join("")}(a)}function G(r){var t=function(r){for(var t=new Uint8Array(r.length),e=0;e<r.length;e++)t[e]=r.charCodeAt(e);return t}(r);if(0===t.length)throw Error("Unrecognised address format");var e=Math.floor(t.length/11),n=t.length%11,o=W.indexOf(n);if(o<0)throw Error("Invalid encoded length");for(var i=new Uint8Array(8*e+o),a=0;a<e;a++)i=X.decodeBlock(t.subarray(11*a,11*a+11),i,8*a);return n>0&&(i=X.decodeBlock(t.subarray(11*e,11*e+n),i,8*e)),Buffer.from(function(r){for(var t=[],e=0,n=Object.keys(r);e<n.length;e++)t.push(("0"+r[Number(n[e])].toString(16)).slice(-2));return t.join("")}(i),"hex")}function Z(r,t){return("00"+(98-function(r){for(var t=r.split("").map(function(r){var t=r.toUpperCase().charCodeAt(0);return t>=48&&t<=57?r:(t-55).toString()}).join(""),e="",n=0;n<Math.ceil(t.length/6);n++)e=(parseInt(e+t.substr(6*n,6),10)%97).toString();return parseInt(e,10)}(r+t+"00"))).slice(-2)}function Y(r,t){return function(e){var n;switch(e.readUInt8(0)){case 118:if(169!==e.readUInt8(1)||136!==e.readUInt8(e.length-2)||172!==e.readUInt8(e.length-1))throw Error("Unrecognised address format");return n=Buffer.concat([Buffer.from(r),e.slice(3,3+e.readUInt8(2))]),o.bs58Encode(n);case 169:if(135!==e.readUInt8(e.length-1))throw Error("Unrecognised address format");return n=Buffer.concat([Buffer.from(t),e.slice(2,2+e.readUInt8(1))]),o.bs58Encode(n);default:throw Error("Unrecognised address format")}}}function j(r,t){return function(e){var n=o.bs58Decode(e),i=function(r){return r.every(function(r,t){return t<n.length&&r===n.readUInt8(t)})};if(r.some(i))return Buffer.concat([Buffer.from([118,169,20]),n.slice(r[0].length),Buffer.from([136,172])]);if(t.some(i))return Buffer.concat([Buffer.from([169,20]),n.slice(t[0].length),Buffer.from([135])]);throw Error("Unrecognised address format")}}X.encodeBlock=function(r,t,e){if(r.length<1||r.length>11)throw Error("Invalid block length: "+r.length);for(var n=function(r){if(r.length<1||r.length>8)throw Error("Invalid input length");var t=u.zero,e=u(2).pow(8),n=0;switch(9-r.length){case 1:t=t.add(r[n++]);case 2:t=t.multiply(e).add(r[n++]);case 3:t=t.multiply(e).add(r[n++]);case 4:t=t.multiply(e).add(r[n++]);case 5:t=t.multiply(e).add(r[n++]);case 6:t=t.multiply(e).add(r[n++]);case 7:t=t.multiply(e).add(r[n++]);case 8:t=t.multiply(e).add(r[n++]);break;default:throw Error("Impossible condition")}return t}(r),o=W[r.length]-1;1===n.compare(0);){var i=n.divmod(H);n=i.quotient,t[e+o]=P[parseInt(i.remainder.toString(),10)],o--}return t},X.decodeBlock=function(r,t,e){if(r.length<1||r.length>11)throw Error("Invalid block length: "+r.length);var n=W.indexOf(r.length);if(n<=0)throw Error("Invalid block size");for(var o=u(0),i=u(1),a=r.length-1;a>=0;a--){var s=P.indexOf(r[a]);if(s<0)throw Error("Invalid symbol");var f=i.multiply(s).add(o);if(1===f.compare(u(2).pow(64)))throw Error("Overflow");o=f,i=i.multiply(H)}if(n<8&&u(2).pow(8*n).compare(o)<=0)throw Error("Overflow 2");return t.set(function(r,t){var e=new Uint8Array(t);if(t<1||t>8)throw Error("Invalid input length");for(var n=u(2).pow(8),o=t-1;o>=0;o--)e[o]=parseInt(r.remainder(n).toString(),10),r=r.divide(n);return e}(o,n),e),t};var J=function(r,t,e,n){return{coinType:t,decoder:j(e,n),encoder:Y(e[0],n[0]),name:r}};function _(r){return function(e){var n=e.readUInt8(0);if(n>=81&&n<=96)n-=80;else if(0!==n)throw Error("Unrecognised address format");var o=[n].concat(t.toWords(e.slice(2,e.readUInt8(1)+2)));return t.encode(r,o)}}function $(r){return function(e){var n=t.decode(e),o=n.words;if(n.prefix!==r)throw Error("Unexpected human-readable part in bech32 encoded address");var i=t.fromWords(o.slice(1)),a=o[0];return a>0&&(a+=80),Buffer.concat([Buffer.from([a,i.length]),Buffer.from(i)])}}function rr(r,t,e){var n=_(r),o=Y(t,e);return function(r){try{return o(r)}catch(t){return n(r)}}}function tr(r,t,e){var n=$(r),o=j(t,e);return function(t){return t.toLowerCase().startsWith(r+"1")?n(t):o(t)}}var er=function(r,t,e,n,o){return{coinType:t,decoder:tr(e,n,o),encoder:rr(e,n[0],o[0]),name:r}};function nr(r,t,e){var n=hr(r),o=Y(t,e);return function(r){try{return o(r)}catch(t){return n(r)}}}function or(r,t,e){var n=j(t,e),o=lr(r);return function(t){return t.toLowerCase().startsWith(r)?o(t):n(t)}}var ir=function(r,t,e,n,o){return{coinType:t,decoder:or(e,n,o),encoder:nr(e,n[0],o[0]),name:r}};function ar(r){var t,e=(t=K(r,1,2),E(t=(t=K(t,2,2)).slice(0,8)));return Buffer.from(e)}function sr(r){var t=ar(r);return n.encode(Buffer.concat([r,t],r.length+4))}function ur(r){return function(t){return o.toChecksumAddress(t.toString("hex"),r||null)}}function fr(r){return function(t){var e=o.stripHexPrefix(t);if(!o.isValidChecksumAddress(t,r||null)&&e!==e.toLowerCase()&&e!==e.toUpperCase())throw Error("Invalid address checksum");return Buffer.from(o.stripHexPrefix(t),"hex")}}var cr=function(r,t,e){return{coinType:t,decoder:fr(e),encoder:ur(e),name:r}};function hr(r){return function(e){return t.encode(r,t.toWords(e))}}function lr(r){return function(e){var n=t.decode(e),o=n.words;if(n.prefix!==r)throw Error("Unrecognised address format");return Buffer.from(t.fromWords(o))}}var dr=function(r,t,e){return{coinType:t,decoder:lr(e),encoder:hr(e),name:r}};function pr(r){return function(t){if(!o.eosPublicKey.isValid(t))throw Error("Unrecognised address format");return o.eosPublicKey.fromHex(t).toString().replace(/^.{3}/g,r)}}function gr(r){return function(t){if(!o.eosPublicKey.isValid(t))throw Error("Unrecognised address format");var e=new RegExp("^.{"+r.length+"}","g"),n=t.replace(e,"EOS");return o.eosPublicKey(n).toBuffer()}}var vr=function(r,t,e){return{coinType:t,decoder:gr(e),encoder:pr(e),name:r}};function mr(r){return Buffer.from(o.ss58Decode(r))}function wr(r){for(var t,e=o.stripHexPrefix(r).toLowerCase(),n=new s.Keccak(256).update(Buffer.from(e)).digest(),i="0x",a=e.length,u=0;u<a;u++)t=n[Math.floor(u/2)],u%2==0?t>>=4:t&=15,i+=e[u]>"9"&&t<=7?e[u].toUpperCase():e[u];return i}function yr(r){if(5!==r.readInt8(0)||r.readInt8(1)!=="M".charCodeAt(0)||26!==r.length)return!1;var t,n=r.slice(-4),o=(t=r.slice(0,-4),new s.Keccak(256).update(Buffer.from(e.blake2b(t,null,32))).digest().slice(0,4));return n.equals(o)}var Br=[0,0,1,18,2,5,19,11,3,29,6,27,20,8,12,23,4,10,30,17,7,22,28,26,21,25,9,16,13,14,24,15],br=[1,2,4,8,16,5,10,20,13,26,17,7,14,28,29,31,27,19,3,6,12,24,21,15,30,25,23,11,22,9,18,1],Er="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",Ir=[3,2,1,0,7,6,5,4,13,14,15,16,12,8,9,10,11];function Ur(r){return i.sha512_256.update(r).hex().substr(-8)}var Ar,xr,Sr,qr,Nr,kr,Cr=function(r,t,e,n){return{coinType:t,decoder:n,encoder:e,name:r}},Or=[er("BTC",0,"bc",[[0]],[[5]]),er("LTC",2,"ltc",[[48]],[[50],[5]]),J("DOGE",3,[[30]],[[22]]),J("RDD",4,[[61]],[[5]]),J("DASH",5,[[76]],[[16]]),J("PPC",6,[[55]],[[117]]),Cr("NMC",7,o.bs58Encode,o.bs58Decode),J("VIA",14,[[71]],[[33]]),(Ar=[[36]],xr=[[5]],{coinType:17,decoder:function(r,t,e){var o=$("grs"),i=function(r,t){return function(e){var o=function(r){var t=function(r){var t=r.slice(0,-4),e=r.slice(-4),n=ar(t);return e[0]^n[0]|e[1]^n[1]|e[2]^n[2]|e[3]^n[3]?Buffer.from([]):t}(n.decode(r));if(0===t.length)throw new Error("Invalid checksum");return t}(e),i=function(r){return r.every(function(r,t){return t<o.length&&r===o.readUInt8(t)})};if(r.some(i))return Buffer.concat([Buffer.from([118,169,20]),o.slice(r[0].length),Buffer.from([136,172])]);if(t.some(i))return Buffer.concat([Buffer.from([169,20]),o.slice(t[0].length),Buffer.from([135])]);throw Error("Unrecognised address format")}}(t,e);return function(r){return r.toLowerCase().startsWith("grs1")?o(r):i(r)}}(0,Ar,xr),encoder:(Sr=Ar[0],qr=xr[0],Nr=_("grs"),kr=function(r,t){return function(e){switch(e.readUInt8(0)){case 118:if(169!==e.readUInt8(1)||136!==e.readUInt8(e.length-2)||172!==e.readUInt8(e.length-1))throw Error("Unrecognised address format");return sr(Buffer.concat([Buffer.from(r),e.slice(3,3+e.readUInt8(2))]));case 169:if(135!==e.readUInt8(e.length-1))throw Error("Unrecognised address format");return sr(Buffer.concat([Buffer.from(t),e.slice(2,2+e.readUInt8(1))]));default:throw Error("Unrecognised address format")}}}(Sr,qr),function(r){try{return kr(r)}catch(t){return Nr(r)}}),name:"GRS"}),er("DGB",20,"dgb",[[30]],[[63]]),er("MONA",22,"mona",[[50]],[[55],[5]]),Cr("DCR",42,n.encode,n.decode),Cr("XEM",43,function(r){return o.b32encode(o.hex2a(r.toString("hex")))},function(r){if(!o.isValid(r))throw Error("Unrecognised address format");var t=r.toString().toUpperCase().replace(/-/g,"");return o.b32decode(t)}),J("AIB",55,[[23]],[[5]]),er("SYS",57,"sys",[[63]],[[5]]),cr("ETH",60),cr("ETC",61),Cr("ICX",74,function(r){if(21!==r.length)throw Error("Unrecognised address format");switch(r.readUInt8(0)){case 0:return"hx"+r.slice(1).toString("hex");case 1:return"cx"+r.slice(1).toString("hex");default:throw Error("Unrecognised address format")}},function(r){var t=r.slice(0,2),e=r.slice(2);switch(t){case"hx":return Buffer.concat([Buffer.from([0]),Buffer.from(e,"hex")]);case"cx":return Buffer.concat([Buffer.from([1]),Buffer.from(e,"hex")]);default:throw Error("Unrecognised address format")}}),J("XVG",77,[[30]],[[33]]),J("STRAT",105,[[63]],[[125]]),Cr("ARK",111,o.bs58Encode,function(r){var t=o.bs58Decode(r);if(23!==t[0])throw Error("Unrecognised address format");return t}),dr("ATOM",118,"cosmos"),dr("ZIL",119,"zil"),dr("EGLD",120,"erd"),Cr("ZEN",121,function(r){if(!(r.slice(0,2).equals(Buffer.from([32,137]))||r.slice(0,2).equals(Buffer.from([28,184]))||r.slice(0,2).equals(Buffer.from([32,150]))||r.slice(0,2).equals(Buffer.from([28,189]))||r.slice(0,2).equals(Buffer.from([22,154]))))throw Error("Unrecognised address format");return o.bs58Encode(r)},function(r){if(!(r.startsWith("zn")||r.startsWith("zs")||r.startsWith("zc")||r.startsWith("t1")||r.startsWith("t3")))throw Error("Unrecognised address format");return o.bs58Decode(r)}),Cr("XMR",128,z,G),ir("ZEC",133,"zs",[[28,184]],[[28,189]]),Cr("LSK",134,function(r){return u(r.toString("hex"),16).toString(10)+"L"},function(r){return function(r){if(r.length<2||r.length>22)throw new Error("Address length does not match requirements. Expected between 2 and 22 characters.");if("L"!==r[r.length-1])throw new Error('Address format does not match requirements. Expected "L" at the end.');if(r.includes("."))throw new Error("Address format does not match requirements. Address includes invalid character: `.`.")}(r),Buffer.from(u(r.slice(0,-1)).toString(16),"hex")}),vr("STEEM",135,"STM"),J("FIRO",136,[[82]],[[7]]),cr("RSK",137,30),J("KMD",141,[[60]],[[85]]),Cr("XRP",144,function(r){return o.codec.encodeChecked(r)},function(r){return o.codec.decodeChecked(r)}),Cr("BCH",145,function(r){switch(r.readUInt8(0)){case 118:if(169!==r.readUInt8(1)||136!==r.readUInt8(r.length-2)||172!==r.readUInt8(r.length-1))throw Error("Unrecognised address format");return o.cashaddrEncode("bitcoincash",0,r.slice(3,3+r.readUInt8(2)));case 169:if(135!==r.readUInt8(r.length-1))throw Error("Unrecognised address format");return o.cashaddrEncode("bitcoincash",1,r.slice(2,2+r.readUInt8(1)));default:throw Error("Unrecognised address format")}},function(r){var t=j([[0]],[[5]]);try{return t(r)}catch(t){return function(r){var t=o.cashaddrDecode(r),e=t.type,n=t.hash;if(0===e)return Buffer.concat([Buffer.from([118,169,20]),Buffer.from(n),Buffer.from([136,172])]);if(1===e)return Buffer.concat([Buffer.from([169,20]),Buffer.from(n),Buffer.from([135])]);throw Error("Unrecognised address format")}(r)}}),Cr("XLM",148,function(r){return o.encodeCheck("ed25519PublicKey",r)},function(r){return o.decodeCheck("ed25519PublicKey",r)}),Cr("BTM",153,_("bm"),$("bm")),er("BTG",156,"btg",[[38]],[[23]]),Cr("NANO",165,function(r){var t=a.encode(Uint8Array.from(r)),n=e.blake2b(r,null,5).reverse();return"nano_"+t+a.encode(n)},function(r){var t=a.decode(r.slice(5));return Buffer.from(t).slice(0,-5)}),J("RVN",175,[[60]],[[122]]),cr("POA",178),vr("EOS",194,"EOS"),Cr("TRX",195,o.bs58Encode,o.bs58Decode),Cr("BCN",204,function(r){var t=new s.Keccak(256).update(r).digest().slice(0,4);return z(Buffer.concat([r,t]))},function(r){var t=G(r),e=t.slice(0,-68).toString("hex");if(t.length<68||"06"!==e&&"cef622"!==e)throw Error("Unrecognised address format");var n=t.slice(-4);if(!new s.Keccak(256).update(t.slice(0,-4)).digest().slice(0,4).equals(n))throw Error("Invalid checksum");return t.slice(0,-4)}),vr("FIO",235,"FIO"),Cr("BSV",236,function(r){var t=Buffer.concat([Buffer.from([0]),r]);return o.bs58Encode(t)},function(r){var t=o.bs58Decode(r);if(21!==t.length)throw Error("Unrecognised address format");if(0!==t[0])throw Error("Invalid version byte");return t.slice(1)}),Cr("NEO",239,o.bs58Encode,o.bs58Decode),Cr("NIM",242,function(r){var t=function(r,t){void 0===t&&(t="0123456789ABCDEFGHJKLMNPQRSTUVXY");var e,n,o=3,i=0,a="";for(n=0;n<r.length;n++)a+=t[31&(i|(e=r[n])>>o)],o>5&&(a+=t[31&e>>(o-=5)]),i=e<<(o=5-o),o=8-o;for(3!==o&&(a+=t[31&i]);a.length%8!=0&&33===t.length;)a+=t[32];return a}(r);return("NQ"+Z(t,"NQ")+t).replace(/.{4}/g,"$& ").trim()},function(r){if(!r.startsWith("NQ"))throw Error("Unrecognised address format");var t=r.replace(/ /g,""),e=t.slice(2,4),n=t.slice(4);if(e!==Z(n,"NQ"))throw Error("Unrecognised address format");return function(r,t){void 0===t&&(t="0123456789ABCDEFGHJKLMNPQRSTUVXY");var e,n={};t.toUpperCase().split("").forEach(function(r,t){r in n||(n[r]=t)});var o=8,i=0,a=[];return r.toUpperCase().split("").forEach(function(r){33===t.length&&r===t[32]||(e=255&n[r],(o-=5)>0?i|=e<<o:o<0?(a.push(i|e>>-o),i=e<<(o+=8)&255):(a.push(i|e),o=8,i=0))}),8!==o&&0!==i&&a.push(i),Buffer.from(a)}(n)}),cr("EWT",246),Cr("ALGO",283,function(r){var t=Ur(r);return o.b32encode(o.hex2a(r.toString("hex").concat(t))).replace(/=/g,"")},function(r){var t=o.b32decode(r);if(36!==t.length)throw Error("Unrecognised address format");var e=t.slice(0,-4),n=t.slice(-4),i=Ur(e);if(n.toString("hex")!==i)throw Error("Unrecognised address format");return e}),Cr("IOST",291,n.encode,n.decode),J("DIVI",301,[[30]],[[13]]),dr("IOTX",304,"io"),vr("BTS",308,"BTS"),dr("CKB",309,"ckb"),dr("LUNA",330,"terra"),Cr("DOT",354,function(r){return o.ss58Encode(Uint8Array.from(r),0)},mr),Cr("VSYS",360,function(r){if(!yr(r))throw new Error("VSYS: Invalid checksum");return n.encode(r)},function(r){var t=r;if(r.startsWith("address:")&&(t=r.substr(r.length)),t.length>36)throw new Error("VSYS: Address length should not be more than 36");var e=n.decode(t);if(!yr(e))throw new Error("VSYS: Invalid checksum");return e}),vr("ABBC",367,"ABBC"),Cr("NEAR",397,function(r){var t=r.toString();if(t.length>64||t.length<2)throw Error("Invalid address format");return t},function(r){if(/(^(([a-z\d]+[\-_])*[a-z\d]+\.)*([a-z\d]+[\-_])*[a-z\d]+$)/g.test(r)){if(r.length>64||r.length<2)throw Error("Invalid address format");return Buffer.from(r)}throw Error("Invalid address string")}),Cr("ETN",415,function(r){var t=Buffer.concat([Buffer.from([18]),r]),e=new s.Keccak(256).update(t).digest().slice(0,4);return z(Buffer.concat([t,e]))},function(r){var t=G(r);if(18!==t[0])throw Error("Unrecognised address format");var e=t.slice(65,69);if(!new s.Keccak(256).update(t.slice(0,65)).digest().slice(0,4).equals(e))throw Error("Invalid checksum");return t.slice(1,65)}),Cr("AION",425,function(r){return"0x".concat(r.toString("hex"))},function(r){var t=r;if(null==t||0===t.length||t.length<64)throw Error("Unrecognised address format");if(t.startsWith("0x")&&(t=t.slice(2)),t.startsWith("a0")&&(64!==t.length||!t.substring(2).match("^[0-9A-Fa-f]+$")))throw Error("Unrecognised address format");return Buffer.from(t,"hex")}),Cr("KSM",434,function(r){return o.ss58Encode(Uint8Array.from(r),2)},mr),Cr("AE",457,function(r){return"ak_"+o.bs58Encode(r.slice(2))},function(r){return Buffer.concat([Buffer.from("0x"),o.bs58Decode(r.split("_")[1])])}),dr("KAVA",459,"kava"),Cr("FIL",461,function(r){return d("f",p(r[0],r.slice(1))).toString()},function(r){return function(r){!function(r){if(!r)throw Error("No bytes to validate.");if(r.length<3)throw Error("Address is too short to validate.");if("f"!==r[0]&&"t"!==r[0])throw Error("Unknown address network.");switch(r[1]){case"0":if(r.length>22)throw Error("Invalid ID address length.");break;case"1":if(41!==r.length)throw Error("Invalid secp256k1 address length.");break;case"2":if(41!==r.length)throw Error("Invalid Actor address length.");break;case"3":if(86!==r.length)throw Error("Invalid BLS address length.");break;default:throw new Error("Invalid address protocol.")}}(r);var t,e=r[0],n=parseInt(r[1],10),i=Buffer.from([n]),a=r.slice(2);if(0===n)return p(n,Buffer.from((function(r,t){for(var e=new f(r);;){var n=e.maskn(7).toNumber();if(e.ishrn(7),e.isZero()){t.write([n]);break}t.write([128|n])}}(a,t=new c),t.buffer)));var s,u,h=Buffer.from(o.b32decode(a.toUpperCase())),g=h.length,v=h.slice(0,g-4);if(s=h.slice(g-4,g),u=l(Buffer.concat([i,v])),Buffer.compare(Buffer.from(u),s))throw Error("Checksums don't match");var m=p(n,v);if(d(e,m)!==r)throw Error("Did not encode this address properly: "+r);return m}(r).str}),Cr("AR",472,function(r){return r.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")},function(r){return r=(r=r.replace(/\-/g,"+").replace(/\_/g,"/")).concat("=".repeat(r.length%4==0?0:4-r.length%4)),Buffer.from(r,"base64")}),J("CCA",489,[[11]],[[5]]),cr("THETA",500),Cr("SOL",501,n.encode,n.decode),Cr("XHV",535,z,G),Cr("FLOW",539,function(r){var t=Buffer.alloc(8,0);return r.length>8&&(t=r.slice(-8)),r.copy(t,8-r.length),"0x"+t.toString("hex").toLowerCase()},function(r){if(!function(r,t){var e=r;if((e=BigInt(e)^BigInt(t.codeword))===BigInt(0))return!1;for(var n=BigInt(0),o=0;o<64;o++)(BigInt(e)&BigInt(1))===BigInt(1)&&(n=BigInt(n)^BigInt(g[o])),e=BigInt(e)>>BigInt(1);return n===BigInt(0)&&e===BigInt(0)}(BigInt(r),v.mainnet))throw Error("Unrecognised address format");return Buffer.from(o.stripHexPrefix(r).replace(/^0+/,""),"hex")}),dr("IRIS",566,"iaa"),J("LRG",568,[[30]],[[13]]),Cr("SERO",569,function(r){return n.encode(r)},function(r){var t=n.decode(r);if(96===t.length)return t;throw Error("Unrecognised address format")}),Cr("BDX",570,z,G),er("CCXX",571,"ccx",[[137]],[[75],[5]]),Cr("SRM",573,n.encode,n.decode),Cr("VLX",574,n.encode,n.decode),J("BPS",576,[[0]],[[5]]),cr("TFUEL",589),dr("GRIN",592,"grin"),cr("XDAI",700),cr("VET",703),dr("BNB",714,"bnb"),cr("CLO",820),vr("HIVE",825,"STM"),cr("TOMO",889),Cr("HNT",904,function(r){var t=Buffer.concat([Buffer.from([0]),r]);return o.bs58Encode(t)},function(r){var t=o.bs58Decode(r);if(0!==t[0])throw Error("Invalid version byte");return t.slice(1)}),er("BCD",999,"bcd",[[0]],[[5]]),cr("TT",1001),dr("ONE",1023,"one"),Cr("ONT",1024,function(r){return o.bs58Encode(Buffer.concat([Buffer.from([23]),r]))},function(r){var t=o.bs58Decode(r);switch(t.readUInt8(0)){case 23:return t.slice(1);default:throw Error("Unrecognised address format")}}),{coinType:1729,decoder:function(r){var t=o.bs58Decode(r).slice(3);switch(r.substring(0,3)){case"tz1":return Buffer.concat([Buffer.from([0,0]),t]);case"tz2":return Buffer.concat([Buffer.from([0,1]),t]);case"tz3":return Buffer.concat([Buffer.from([0,2]),t]);case"KT1":return Buffer.concat([Buffer.from([1]),t,Buffer.from([0])]);default:throw Error("Unrecognised address format")}},encoder:function(r){if(22!==r.length&&21!==r.length)throw Error("Unrecognised address format");var t;switch(r.readUInt8(0)){case 0:if(0===r.readUInt8(1))t=Buffer.from([6,161,159]);else if(1===r.readUInt8(1))t=Buffer.from([6,161,161]);else{if(2!==r.readUInt8(1))throw Error("Unrecognised address format");t=Buffer.from([6,161,164])}return o.bs58Encode(Buffer.concat([t,r.slice(2)]));case 1:return t=Buffer.from([2,90,121]),o.bs58Encode(Buffer.concat([t,r.slice(1,21)]));default:throw Error("Unrecognised address format")}},name:"XTZ"},dr("ADA",1815,"addr"),Cr("SC",1991,function(r){var t=e.blake2bHex(r,null,32).slice(0,12);return r.toString("hex")+t},function(r){if(76!==r.length)throw Error("Unrecognised address format");var t=Buffer.from(r.slice(0,64),"hex");if(r.slice(64)!==e.blake2bHex(t,null,32).slice(0,12))throw Error("Unrecognised address format");return t}),Cr("QTUM",2301,o.bs58Encode,o.bs58Decode),vr("GXC",2303,"GXC"),Cr("ELA",2305,n.encode,n.decode),Cr("NAS",2718,function(r){var t=new s.SHA3(256).update(r).digest().slice(0,4);return n.encode(Buffer.concat([r,t]))},function(r){var t=n.decode(r);if(26!==t.length||25!==t[0]||87!==t[1]&&88!==t[1])throw Error("Unrecognised address format");var e=t.slice(0,22),o=t.slice(-4);if(!new s.SHA3(256).update(e).digest().slice(0,4).equals(o))throw Error("Invalid checksum");return e}),{coinType:3030,decoder:function(r){var t=Buffer.alloc(20),e=new DataView(t.buffer,0,20),n=r.split(".");if(3!==n.length)throw Error("Unrecognised address format");var o=Number(n[0]),i=BigInt(n[1]),a=BigInt(n[2]);return e.setUint32(0,o),e.setBigUint64(4,i),e.setBigUint64(12,a),t},encoder:function(r){if(20!==r.length)throw Error("Unrecognised address format");var t=new DataView(r.buffer,0);return[t.getUint32(0),t.getBigUint64(4),t.getBigUint64(12)].join(".")},name:"HBAR"},Cr("IOTA",4218,o.bs58Encode,o.bs58Decode),Cr("HNS",5353,function(r){if(20!==r.length)throw Error("P2WPKH must be 20 bytes");var e=[0].concat(t.toWords(r));return t.encode("hs",e)},function(r){var e=t.decode(r),n=e.words;if("hs"!==e.prefix)throw Error("Unrecognised address format");var o=n[0],i=t.fromWords(n.slice(1));if(0!==o)throw Error("Bad program version");if(20!==i.length)throw Error("Witness program hash is the wrong size");return Buffer.from(i)}),cr("GO",6060),Cr("NULS",8964,function(r){for(var t=255&r[0]|(255&r[1])<<8,e=Buffer.allocUnsafe(r.length+1),o=0,i=0,a=0;a<r.length;a++)e[a]=o=(o=r[a])>127?o-256:o,i^=o;e[r.length]=i;var s="";if(1===t)s="NULS";else if(2===t)s="tNULS";else{var u=Buffer.concat([Buffer.from([255&t>>0]),Buffer.from([255&t>>8])]);s=n.encode(u).toUpperCase()}return s+["a","b","c","d","e"][s.length-1]+n.encode(e)},function(r){if(r.startsWith("NULS"))r=r.substring(5);else if(r.startsWith("tNULS"))r=r.substring(6);else for(var t=0;t<r.length;t++)if(r.charAt(t).charCodeAt(0)>=97){r=r.substring(t+1);break}for(var e=n.decode(r),o=0,i=0,a=0;a<e.length-1;a++)e[a]=o=(o=e[a])>127?o-256:o,i^=o;if(i<0&&(i=256+i),i!==e[e.length-1])throw Error("Unrecognised address format");return e.slice(0,-1)}),dr("AVAX",9e3,"avax"),cr("NRG",9797),Cr("ARDR",16754,function(r){for(var t=r.toString("hex"),e=[],n=0,o=0;n<t.length;n+=2)e[Ir[o++]]=16*parseInt(t[n],16)+parseInt(t[n+1],16);for(var i="",a=[],s=0;s<17;s++){if(e[s]>=Er.length||17!==e.length)throw Error("Unrecognised address format");i+=Er[e[s]],(s<12&&(s+1)%4==0||16===s)&&(a.push(i),i="")}return"ARDOR-"+a.join("-")},function(r){var t=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];if("ARDOR"!==(r=r.replace(/(^\s+)|(\s+$)/g,"").toUpperCase()).slice(0,5)||5!==r.split("-").length)throw Error("Unrecognised address format");var e=[],n=0,o=r=r.substr(r.indexOf("-")),i=Array.isArray(o),a=0;for(o=i?o:o[Symbol.iterator]();;){var s;if(i){if(a>=o.length)break;s=o[a++]}else{if((a=o.next()).done)break;s=a.value}var u=Er.indexOf(s);if(u>=0&&(e[n++]=u,n>17))throw Error("Unrecognised address format")}for(var f=0,c=0;f<n;f++)t[Ir[c++]]=e[f];if(!function(r){for(var t,e,n=0,o=1;o<5;o++){for(var i=0,a=0;a<31;a++)if(!(a>12&&a<27)){var s=a;a>26&&(s-=14),i^=(e=br[o*a%31],0===(t=r[s])||0===e?0:br[(Br[t]+Br[e])%31])}n|=i}return 0===n}(t))throw Error("Unrecognised address format");return Buffer.from(t)}),ir("ZEL",19167,"za",[[28,184]],[[28,189]]),cr("CELO",52752),J("WICC",99999,[[73]],[[51]]),Cr("WAN",5718350,function(r){return wr("0x"+r.toString("hex"))},function(r){if(/^0x[0-9a-fA-F]{40}$/.test(t=r)&&wr(t)===t)return Buffer.from(o.stripHexPrefix(r),"hex");throw Error("Invalid address checksum");var t}),Cr("WAVES",5741564,n.encode,function(r){var t=n.decode(r);if(1!==t[0])throw Error("Bad program version");if(87!==t[1]||26!==t.length)throw Error("Unrecognised address format");var o=t.slice(0,22),i=t.slice(22,26);if(!new s.Keccak(256).update(Buffer.from(e.blake2b(o,null,32))).digest().slice(0,4).equals(i))throw Error("Invalid checksum");return t})],Rr=Object.assign.apply(Object,[{}].concat(Or.map(function(r){var t;return(t={})[r.name]=r,t}))),Dr=Object.assign.apply(Object,[{}].concat(Or.map(function(r){var t;return(t={})[r.coinType]=r,t})));exports.formats=Or,exports.formatsByCoinType=Dr,exports.formatsByName=Rr;


}).call(this)}).call(this,require("buffer").Buffer)
},{"bech32":5,"blakejs":9,"bn.js":2,"bs58":14,"buffer":12,"crypto-addr-codec":15,"js-sha512":22,"nano-base32":23,"sha3":27}],2:[function(require,module,exports){
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = require('buffer').Buffer;
    }
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // 'A' - 'F'
    if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    // '0' - '9'
    } else {
      return (c - 48) & 0xf;
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this.strip();
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is BN v4 instance
        r.strip();
      } else {
        // r is BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

},{"buffer":11}],3:[function(require,module,exports){
'use strict'
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = require('safe-buffer').Buffer
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (Array.isArray(source) || source instanceof Uint8Array) { source = _Buffer.from(source) }
    if (!_Buffer.isBuffer(source)) { throw new TypeError('Expected Buffer') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return _Buffer.alloc(0) }
    var psz = 0
        // Skip leading spaces.
    if (source[psz] === ' ') { return }
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip trailing spaces.
    if (source[psz] === ' ') { return }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = _Buffer.allocUnsafe(zeroes + (size - it4))
    vch.fill(0x00, 0, zeroes)
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base

},{"safe-buffer":26}],4:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],5:[function(require,module,exports){
'use strict'
var ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

// pre-compute lookup table
var ALPHABET_MAP = {}
for (var z = 0; z < ALPHABET.length; z++) {
  var x = ALPHABET.charAt(z)

  if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')
  ALPHABET_MAP[x] = z
}

function polymodStep (pre) {
  var b = pre >> 25
  return ((pre & 0x1FFFFFF) << 5) ^
    (-((b >> 0) & 1) & 0x3b6a57b2) ^
    (-((b >> 1) & 1) & 0x26508e6d) ^
    (-((b >> 2) & 1) & 0x1ea119fa) ^
    (-((b >> 3) & 1) & 0x3d4233dd) ^
    (-((b >> 4) & 1) & 0x2a1462b3)
}

function prefixChk (prefix) {
  var chk = 1
  for (var i = 0; i < prefix.length; ++i) {
    var c = prefix.charCodeAt(i)
    if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')'

    chk = polymodStep(chk) ^ (c >> 5)
  }
  chk = polymodStep(chk)

  for (i = 0; i < prefix.length; ++i) {
    var v = prefix.charCodeAt(i)
    chk = polymodStep(chk) ^ (v & 0x1f)
  }
  return chk
}

function encode (prefix, words, LIMIT) {
  LIMIT = LIMIT || 90
  if ((prefix.length + 7 + words.length) > LIMIT) throw new TypeError('Exceeds length limit')

  prefix = prefix.toLowerCase()

  // determine chk mod
  var chk = prefixChk(prefix)
  if (typeof chk === 'string') throw new Error(chk)

  var result = prefix + '1'
  for (var i = 0; i < words.length; ++i) {
    var x = words[i]
    if ((x >> 5) !== 0) throw new Error('Non 5-bit word')

    chk = polymodStep(chk) ^ x
    result += ALPHABET.charAt(x)
  }

  for (i = 0; i < 6; ++i) {
    chk = polymodStep(chk)
  }
  chk ^= 1

  for (i = 0; i < 6; ++i) {
    var v = (chk >> ((5 - i) * 5)) & 0x1f
    result += ALPHABET.charAt(v)
  }

  return result
}

function __decode (str, LIMIT) {
  LIMIT = LIMIT || 90
  if (str.length < 8) return str + ' too short'
  if (str.length > LIMIT) return 'Exceeds length limit'

  // don't allow mixed case
  var lowered = str.toLowerCase()
  var uppered = str.toUpperCase()
  if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str
  str = lowered

  var split = str.lastIndexOf('1')
  if (split === -1) return 'No separator character for ' + str
  if (split === 0) return 'Missing prefix for ' + str

  var prefix = str.slice(0, split)
  var wordChars = str.slice(split + 1)
  if (wordChars.length < 6) return 'Data too short'

  var chk = prefixChk(prefix)
  if (typeof chk === 'string') return chk

  var words = []
  for (var i = 0; i < wordChars.length; ++i) {
    var c = wordChars.charAt(i)
    var v = ALPHABET_MAP[c]
    if (v === undefined) return 'Unknown character ' + c
    chk = polymodStep(chk) ^ v

    // not in the checksum?
    if (i + 6 >= wordChars.length) continue
    words.push(v)
  }

  if (chk !== 1) return 'Invalid checksum for ' + str
  return { prefix: prefix, words: words }
}

function decodeUnsafe () {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res
}

function decode (str) {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res

  throw new Error(res)
}

function convert (data, inBits, outBits, pad) {
  var value = 0
  var bits = 0
  var maxV = (1 << outBits) - 1

  var result = []
  for (var i = 0; i < data.length; ++i) {
    value = (value << inBits) | data[i]
    bits += inBits

    while (bits >= outBits) {
      bits -= outBits
      result.push((value >> bits) & maxV)
    }
  }

  if (pad) {
    if (bits > 0) {
      result.push((value << (outBits - bits)) & maxV)
    }
  } else {
    if (bits >= inBits) return 'Excess padding'
    if ((value << (outBits - bits)) & maxV) return 'Non-zero padding'
  }

  return result
}

function toWordsUnsafe (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res
}

function toWords (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

function fromWordsUnsafe (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res
}

function fromWords (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

module.exports = {
  decodeUnsafe: decodeUnsafe,
  decode: decode,
  encode: encode,
  toWordsUnsafe: toWordsUnsafe,
  toWords: toWords,
  fromWordsUnsafe: fromWordsUnsafe,
  fromWords: fromWords
}

},{}],6:[function(require,module,exports){
var bigInt = (function (undefined) {
    "use strict";

    var BASE = 1e7,
        LOG_BASE = 7,
        MAX_INT = 9007199254740992,
        MAX_INT_ARR = smallToArray(MAX_INT),
        LOG_MAX_INT = Math.log(MAX_INT);

    function Integer(v, radix) {
        if (typeof v === "undefined") return Integer[0];
        if (typeof radix !== "undefined") return +radix === 10 ? parseValue(v) : parseBase(v, radix);
        return parseValue(v);
    }

    function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
    }
    BigInteger.prototype = Object.create(Integer.prototype);

    function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
    }
    SmallInteger.prototype = Object.create(Integer.prototype);

    function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
    }

    function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
        if (n < 1e7)
            return [n];
        if (n < 1e14)
            return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }

    function arrayToSmall(arr) { // If BASE changes this function may need to change
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
            switch (length) {
                case 0: return 0;
                case 1: return arr[0];
                case 2: return arr[0] + arr[1] * BASE;
                default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
            }
        }
        return arr;
    }

    function trim(v) {
        var i = v.length;
        while (v[--i] === 0);
        v.length = i + 1;
    }

    function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
        var x = new Array(length);
        var i = -1;
        while (++i < length) {
            x[i] = 0;
        }
        return x;
    }

    function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
    }

    function add(a, b) { // assumes a and b are arrays with a.length >= b.length
        var l_a = a.length,
            l_b = b.length,
            r = new Array(l_a),
            carry = 0,
            base = BASE,
            sum, i;
        for (i = 0; i < l_b; i++) {
            sum = a[i] + b[i] + carry;
            carry = sum >= base ? 1 : 0;
            r[i] = sum - carry * base;
        }
        while (i < l_a) {
            sum = a[i] + carry;
            carry = sum === base ? 1 : 0;
            r[i++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
    }

    function addAny(a, b) {
        if (a.length >= b.length) return add(a, b);
        return add(b, a);
    }

    function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
        var l = a.length,
            r = new Array(l),
            base = BASE,
            sum, i;
        for (i = 0; i < l; i++) {
            sum = a[i] - base + carry;
            carry = Math.floor(sum / base);
            r[i] = sum - carry * base;
            carry += 1;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    BigInteger.prototype.add = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
    };
    BigInteger.prototype.plus = BigInteger.prototype.add;

    SmallInteger.prototype.add = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            if (isPrecise(a + b)) return new SmallInteger(a + b);
            b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };
    SmallInteger.prototype.plus = SmallInteger.prototype.add;

    function subtract(a, b) { // assumes a and b are arrays with a >= b
        var a_l = a.length,
            b_l = b.length,
            r = new Array(a_l),
            borrow = 0,
            base = BASE,
            i, difference;
        for (i = 0; i < b_l; i++) {
            difference = a[i] - borrow - b[i];
            if (difference < 0) {
                difference += base;
                borrow = 1;
            } else borrow = 0;
            r[i] = difference;
        }
        for (i = b_l; i < a_l; i++) {
            difference = a[i] - borrow;
            if (difference < 0) difference += base;
            else {
                r[i++] = difference;
                break;
            }
            r[i] = difference;
        }
        for (; i < a_l; i++) {
            r[i] = a[i];
        }
        trim(r);
        return r;
    }

    function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
            value = subtract(a, b);
        } else {
            value = subtract(b, a);
            sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
            if (sign) value = -value;
            return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
    }

    function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
        var l = a.length,
            r = new Array(l),
            carry = -b,
            base = BASE,
            i, difference;
        for (i = 0; i < l; i++) {
            difference = a[i] + carry;
            carry = Math.floor(difference / base);
            difference %= base;
            r[i] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
            if (sign) r = -r;
            return new SmallInteger(r);
        } return new BigInteger(r, sign);
    }

    BigInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
            return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
    };
    BigInteger.prototype.minus = BigInteger.prototype.subtract;

    SmallInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
    };
    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

    BigInteger.prototype.negate = function () {
        return new BigInteger(this.value, !this.sign);
    };
    SmallInteger.prototype.negate = function () {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
    };

    BigInteger.prototype.abs = function () {
        return new BigInteger(this.value, false);
    };
    SmallInteger.prototype.abs = function () {
        return new SmallInteger(Math.abs(this.value));
    };

    function multiplyLong(a, b) {
        var a_l = a.length,
            b_l = b.length,
            l = a_l + b_l,
            r = createArray(l),
            base = BASE,
            product, carry, i, a_i, b_j;
        for (i = 0; i < a_l; ++i) {
            a_i = a[i];
            for (var j = 0; j < b_l; ++j) {
                b_j = b[j];
                product = a_i * b_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
        var l = a.length,
            r = new Array(l),
            base = BASE,
            carry = 0,
            product, i;
        for (i = 0; i < l; i++) {
            product = a[i] * b + carry;
            carry = Math.floor(product / base);
            r[i] = product - carry * base;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x);
    }

    function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);

        if (n <= 30) return multiplyLong(x, y);
        n = Math.ceil(n / 2);

        var b = x.slice(n),
            a = x.slice(0, n),
            d = y.slice(n),
            c = y.slice(0, n);

        var ac = multiplyKaratsuba(a, c),
            bd = multiplyKaratsuba(b, d),
            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
    }

    // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
    function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }

    BigInteger.prototype.multiply = function (v) {
        var n = parseValue(v),
            a = this.value, b = n.value,
            sign = this.sign !== n.sign,
            abs;
        if (n.isSmall) {
            if (b === 0) return Integer[0];
            if (b === 1) return this;
            if (b === -1) return this.negate();
            abs = Math.abs(b);
            if (abs < BASE) {
                return new BigInteger(multiplySmall(a, abs), sign);
            }
            b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
            return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
    };

    BigInteger.prototype.times = BigInteger.prototype.multiply;

    function multiplySmallAndArray(a, b, sign) { // a >= 0
        if (a < BASE) {
            return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }
    SmallInteger.prototype._multiplyBySmall = function (a) {
        if (isPrecise(a.value * this.value)) {
            return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };
    BigInteger.prototype._multiplyBySmall = function (a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };
    SmallInteger.prototype.multiply = function (v) {
        return parseValue(v)._multiplyBySmall(this);
    };
    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

    function square(a) {
        //console.assert(2 * BASE * BASE < MAX_INT);
        var l = a.length,
            r = createArray(l + l),
            base = BASE,
            product, carry, i, a_i, a_j;
        for (i = 0; i < l; i++) {
            a_i = a[i];
            carry = 0 - a_i * a_i;
            for (var j = i; j < l; j++) {
                a_j = a[j];
                product = 2 * (a_i * a_j) + r[i + j] + carry;
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
            }
            r[i + l] = carry;
        }
        trim(r);
        return r;
    }

    BigInteger.prototype.square = function () {
        return new BigInteger(square(this.value), false);
    };

    SmallInteger.prototype.square = function () {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };

    function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
        var a_l = a.length,
            b_l = b.length,
            base = BASE,
            result = createArray(b.length),
            divisorMostSignificantDigit = b[b_l - 1],
            // normalization
            lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
            remainder = multiplySmall(a, lambda),
            divisor = multiplySmall(b, lambda),
            quotientDigit, shift, carry, borrow, i, l, q;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
            quotientDigit = base - 1;
            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
            }
            // quotientDigit <= base - 1
            carry = 0;
            borrow = 0;
            l = divisor.length;
            for (i = 0; i < l; i++) {
                carry += quotientDigit * divisor[i];
                q = Math.floor(carry / base);
                borrow += remainder[shift + i] - (carry - q * base);
                carry = q;
                if (borrow < 0) {
                    remainder[shift + i] = borrow + base;
                    borrow = -1;
                } else {
                    remainder[shift + i] = borrow;
                    borrow = 0;
                }
            }
            while (borrow !== 0) {
                quotientDigit -= 1;
                carry = 0;
                for (i = 0; i < l; i++) {
                    carry += remainder[shift + i] - base + divisor[i];
                    if (carry < 0) {
                        remainder[shift + i] = carry + base;
                        carry = 0;
                    } else {
                        remainder[shift + i] = carry;
                        carry = 1;
                    }
                }
                borrow += carry;
            }
            result[shift] = quotientDigit;
        }
        // denormalization
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
    }

    function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
        // Performs faster than divMod1 on larger input sizes.
        var a_l = a.length,
            b_l = b.length,
            result = [],
            part = [],
            base = BASE,
            guess, xlen, highx, highy, check;
        while (a_l) {
            part.unshift(a[--a_l]);
            trim(part);
            if (compareAbs(part, b) < 0) {
                result.push(0);
                continue;
            }
            xlen = part.length;
            highx = part[xlen - 1] * base + part[xlen - 2];
            highy = b[b_l - 1] * base + b[b_l - 2];
            if (xlen > b_l) {
                highx = (highx + 1) * base;
            }
            guess = Math.ceil(highx / highy);
            do {
                check = multiplySmall(b, guess);
                if (compareAbs(check, part) <= 0) break;
                guess--;
            } while (guess);
            result.push(guess);
            part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
    }

    function divModSmall(value, lambda) {
        var length = value.length,
            quotient = createArray(length),
            base = BASE,
            i, q, remainder, divisor;
        remainder = 0;
        for (i = length - 1; i >= 0; --i) {
            divisor = remainder * base + value[i];
            q = truncate(divisor / lambda);
            remainder = divisor - q * lambda;
            quotient[i] = q | 0;
        }
        return [quotient, remainder | 0];
    }

    function divModAny(self, v) {
        var value, n = parseValue(v);
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
            if (n.isSmall) {
                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
            }
            return [Integer[0], self];
        }
        if (n.isSmall) {
            if (b === 1) return [self, Integer[0]];
            if (b == -1) return [self.negate(), Integer[0]];
            var abs = Math.abs(b);
            if (abs < BASE) {
                value = divModSmall(a, abs);
                quotient = arrayToSmall(value[0]);
                var remainder = value[1];
                if (self.sign) remainder = -remainder;
                if (typeof quotient === "number") {
                    if (self.sign !== n.sign) quotient = -quotient;
                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
                }
                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
            }
            b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

        // divMod1 is faster on smaller input sizes
        if (a.length + b.length <= 200)
            value = divMod1(a, b);
        else value = divMod2(a, b);

        quotient = value[0];
        var qSign = self.sign !== n.sign,
            mod = value[1],
            mSign = self.sign;
        if (typeof quotient === "number") {
            if (qSign) quotient = -quotient;
            quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
            if (mSign) mod = -mod;
            mod = new SmallInteger(mod);
        } else mod = new BigInteger(mod, mSign);
        return [quotient, mod];
    }

    BigInteger.prototype.divmod = function (v) {
        var result = divModAny(this, v);
        return {
            quotient: result[0],
            remainder: result[1]
        };
    };
    SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

    BigInteger.prototype.divide = function (v) {
        return divModAny(this, v)[0];
    };
    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

    BigInteger.prototype.mod = function (v) {
        return divModAny(this, v)[1];
    };
    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

    BigInteger.prototype.pow = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value,
            value, x, y;
        if (b === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
            return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
            if (isPrecise(value = Math.pow(a, b)))
                return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
            if (b & 1 === 1) {
                y = y.times(x);
                --b;
            }
            if (b === 0) break;
            b /= 2;
            x = x.square();
        }
        return y;
    };
    SmallInteger.prototype.pow = BigInteger.prototype.pow;

    BigInteger.prototype.modPow = function (exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1],
            base = this.mod(mod);
        while (exp.isPositive()) {
            if (base.isZero()) return Integer[0];
            if (exp.isOdd()) r = r.multiply(base).mod(mod);
            exp = exp.divide(2);
            base = base.square().mod(mod);
        }
        return r;
    };
    SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

    function compareAbs(a, b) {
        if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
        }
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
        }
        return 0;
    }

    BigInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b);
    };
    SmallInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = Math.abs(this.value),
            b = n.value;
        if (n.isSmall) {
            b = Math.abs(b);
            return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
    };

    BigInteger.prototype.compare = function (v) {
        // See discussion about comparison with Infinity:
        // https://github.com/peterolson/BigInteger.js/issues/61
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (this.sign !== n.sign) {
            return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
            return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
    };
    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

    SmallInteger.prototype.compare = function (v) {
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) {
            return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
            return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
    };
    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

    BigInteger.prototype.equals = function (v) {
        return this.compare(v) === 0;
    };
    SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

    BigInteger.prototype.notEquals = function (v) {
        return this.compare(v) !== 0;
    };
    SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

    BigInteger.prototype.greater = function (v) {
        return this.compare(v) > 0;
    };
    SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

    BigInteger.prototype.lesser = function (v) {
        return this.compare(v) < 0;
    };
    SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

    BigInteger.prototype.greaterOrEquals = function (v) {
        return this.compare(v) >= 0;
    };
    SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

    BigInteger.prototype.lesserOrEquals = function (v) {
        return this.compare(v) <= 0;
    };
    SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

    BigInteger.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
    };
    SmallInteger.prototype.isEven = function () {
        return (this.value & 1) === 0;
    };

    BigInteger.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
    };
    SmallInteger.prototype.isOdd = function () {
        return (this.value & 1) === 1;
    };

    BigInteger.prototype.isPositive = function () {
        return !this.sign;
    };
    SmallInteger.prototype.isPositive = function () {
        return this.value > 0;
    };

    BigInteger.prototype.isNegative = function () {
        return this.sign;
    };
    SmallInteger.prototype.isNegative = function () {
        return this.value < 0;
    };

    BigInteger.prototype.isUnit = function () {
        return false;
    };
    SmallInteger.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
    };

    BigInteger.prototype.isZero = function () {
        return false;
    };
    SmallInteger.prototype.isZero = function () {
        return this.value === 0;
    };
    BigInteger.prototype.isDivisibleBy = function (v) {
        var n = parseValue(v);
        var value = n.value;
        if (value === 0) return false;
        if (value === 1) return true;
        if (value === 2) return this.isEven();
        return this.mod(n).equals(Integer[0]);
    };
    SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

    function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(49)) return true;
        // we don't know if it's prime: let the other functions figure it out
    }
    
    function millerRabinTest(n, a) {
        var nPrev = n.prev(),
            b = nPrev,
            r = 0,
            d, t, i, x;
        while (b.isEven()) b = b.divide(2), r++;
        next : for (i = 0; i < a.length; i++) {
            if (n.lesser(a[i])) continue;
            x = bigInt(a[i]).modPow(b, n);
            if (x.equals(Integer[1]) || x.equals(nPrev)) continue;
            for (d = r - 1; d != 0; d--) {
                x = x.square().mod(n);
                if (x.isUnit()) return false;    
                if (x.equals(nPrev)) continue next;
            }
            return false;
        }
        return true;
    }
    
// Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2
    BigInteger.prototype.isPrime = function (strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var bits = n.bitLength();
        if(bits <= 64)
            return millerRabinTest(n, [2, 325, 9375, 28178, 450775, 9780504, 1795265022]);
        var logN = Math.log(2) * bits;
        var t = Math.ceil((strict === true) ? (2 * Math.pow(logN, 2)) : logN);
        for (var a = [], i = 0; i < t; i++) {
            a.push(bigInt(i + 2));
        }
        return millerRabinTest(n, a);
    };
    SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

    BigInteger.prototype.isProbablePrime = function (iterations) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var t = iterations === undefined ? 5 : iterations;
        for (var a = [], i = 0; i < t; i++) {
            a.push(bigInt.randBetween(2, n.minus(2)));
        }
        return millerRabinTest(n, a);
    };
    SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

    BigInteger.prototype.modInv = function (n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.equals(bigInt.zero)) {
            q = r.divide(newR);
            lastT = t;
            lastR = r;
            t = newT;
            r = newR;
            newT = lastT.subtract(q.multiply(newT));
            newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.equals(1)) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
            t = t.add(n);
        }
        if (this.isNegative()) {
            return t.negate();
        }
        return t;
    };

    SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

    BigInteger.prototype.next = function () {
        var value = this.value;
        if (this.sign) {
            return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
    };
    SmallInteger.prototype.next = function () {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
    };

    BigInteger.prototype.prev = function () {
        var value = this.value;
        if (this.sign) {
            return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
    };
    SmallInteger.prototype.prev = function () {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
    };

    var powersOfTwo = [1];
    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

    function shift_isSmall(n) {
        return ((typeof n === "number" || typeof n === "string") && +Math.abs(n) <= BASE) ||
            (n instanceof BigInteger && n.value.length <= 1);
    }

    BigInteger.prototype.shiftLeft = function (n) {
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        if (result.isZero()) return result;
        while (n >= powers2Length) {
            result = result.multiply(highestPower2);
            n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
    };
    SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

    BigInteger.prototype.shiftRight = function (n) {
        var remQuo;
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
            if (result.isZero() || (result.isNegative() && result.isUnit())) return result;
            remQuo = divModAny(result, highestPower2);
            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
            n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };
    SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

    function bitwise(x, y, fn) {
        y = parseValue(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x,
            yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
            xDivMod = divModAny(xRem, highestPower2);
            xDigit = xDivMod[1].toJSNumber();
            if (xSign) {
                xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
            }

            yDivMod = divModAny(yRem, highestPower2);
            yDigit = yDivMod[1].toJSNumber();
            if (ySign) {
                yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
            }

            xRem = xDivMod[0];
            yRem = yDivMod[0];
            result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i = result.length - 1; i >= 0; i -= 1) {
            sum = sum.multiply(highestPower2).add(bigInt(result[i]));
        }
        return sum;
    }

    BigInteger.prototype.not = function () {
        return this.negate().prev();
    };
    SmallInteger.prototype.not = BigInteger.prototype.not;

    BigInteger.prototype.and = function (n) {
        return bitwise(this, n, function (a, b) { return a & b; });
    };
    SmallInteger.prototype.and = BigInteger.prototype.and;

    BigInteger.prototype.or = function (n) {
        return bitwise(this, n, function (a, b) { return a | b; });
    };
    SmallInteger.prototype.or = BigInteger.prototype.or;

    BigInteger.prototype.xor = function (n) {
        return bitwise(this, n, function (a, b) { return a ^ b; });
    };
    SmallInteger.prototype.xor = BigInteger.prototype.xor;

    var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
    function roughLOB(n) { // get lowestOneBit (rough)
        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
        var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
    }

    function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
            var tmp = integerLogarithm(value, base.square(base));
            var p = tmp.p;
            var e = tmp.e;
            var t = p.multiply(base);
            return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
    }

    BigInteger.prototype.bitLength = function () {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
            n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
            return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    }
    SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

    function max(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.greater(b) ? a : b;
    }
    function min(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.lesser(b) ? a : b;
    }
    function gcd(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        if (a.equals(b)) return a;
        if (a.isZero()) return b;
        if (b.isZero()) return a;
        var c = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
            d = Math.min(roughLOB(a), roughLOB(b));
            a = a.divide(d);
            b = b.divide(d);
            c = c.multiply(d);
        }
        while (a.isEven()) {
            a = a.divide(roughLOB(a));
        }
        do {
            while (b.isEven()) {
                b = b.divide(roughLOB(b));
            }
            if (a.greater(b)) {
                t = b; b = a; a = t;
            }
            b = b.subtract(a);
        } while (!b.isZero());
        return c.isUnit() ? a : a.multiply(c);
    }
    function lcm(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
    }
    function randBetween(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(Math.random() * range));
        var length = range.value.length - 1;
        var result = [], restricted = true;
        for (var i = length; i >= 0; i--) {
            var top = restricted ? range.value[i] : BASE;
            var digit = truncate(Math.random() * top);
            result.unshift(digit);
            if (digit < top) restricted = false;
        }
        result = arrayToSmall(result);
        return low.add(typeof result === "number" ? new SmallInteger(result) : new BigInteger(result, false));
    }
    var parseBase = function (text, base) {
        var length = text.length;
        var i;
        var absBase = Math.abs(base);
        for (var i = 0; i < length; i++) {
            var c = text[i].toLowerCase();
            if (c === "-") continue;
            if (/[a-z0-9]/.test(c)) {
                if (/[0-9]/.test(c) && +c >= absBase) {
                    if (c === "1" && absBase === 1) continue;
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                } else if (c.charCodeAt(0) - 87 >= absBase) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
            }
        }
        if (2 <= base && base <= 36) {
            if (length <= LOG_MAX_INT / Math.log(base)) {
                var result = parseInt(text, base);
                if (isNaN(result)) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
                return new SmallInteger(parseInt(text, base));
            }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i = isNegative ? 1 : 0; i < text.length; i++) {
            var c = text[i].toLowerCase(),
                charCode = c.charCodeAt(0);
            if (48 <= charCode && charCode <= 57) digits.push(parseValue(c));
            else if (97 <= charCode && charCode <= 122) digits.push(parseValue(c.charCodeAt(0) - 87));
            else if (c === "<") {
                var start = i;
                do { i++; } while (text[i] !== ">");
                digits.push(parseValue(text.slice(start + 1, i)));
            }
            else throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
    };

    function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i;
        for (i = digits.length - 1; i >= 0; i--) {
            val = val.add(digits[i].times(pow));
            pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
    }

    function stringify(digit) {
        if (digit <= 35) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(digit);
        }
        return "<" + digit + ">";
    }

    function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
            if (n.isZero()) return { value: [0], isNegative: false };
            throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
            if (n.isZero()) return { value: [0], isNegative: false };
            if (n.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-n))
                        .map(Array.prototype.valueOf, [1, 0])
                    ),
                    isNegative: false
                };

            var arr = Array.apply(null, Array(+n - 1))
                .map(Array.prototype.valueOf, [0, 1]);
            arr.unshift([1]);
            return {
                value: [].concat.apply([], arr),
                isNegative: false
            };
        }

        var neg = false;
        if (n.isNegative() && base.isPositive()) {
            neg = true;
            n = n.abs();
        }
        if (base.equals(1)) {
            if (n.isZero()) return { value: [0], isNegative: false };

            return {
                value: Array.apply(null, Array(+n))
                    .map(Number.prototype.valueOf, 1),
                isNegative: neg
            };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
            divmod = left.divmod(base);
            left = divmod.quotient;
            var digit = divmod.remainder;
            if (digit.isNegative()) {
                digit = base.minus(digit).abs();
                left = left.next();
            }
            out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
    }

    function toBaseString(n, base) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(stringify).join('');
    }

    BigInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    SmallInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    BigInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix !== 10) return toBaseString(this, radix);
        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
            digit = String(v[l]);
            str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
    };

    SmallInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix != 10) return toBaseString(this, radix);
        return String(this.value);
    };
    BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); }

    BigInteger.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
    };
    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

    SmallInteger.prototype.valueOf = function () {
        return this.value;
    };
    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

    function parseStringValue(v) {
        if (isPrecise(+v)) {
            var x = +v;
            if (x === truncate(x))
                return new SmallInteger(x);
            throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign) v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
            var exp = split[1];
            if (exp[0] === "+") exp = exp.slice(1);
            exp = +exp;
            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
            var text = split[0];
            var decimalPlace = text.indexOf(".");
            if (decimalPlace >= 0) {
                exp -= text.length - decimalPlace - 1;
                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
            }
            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
            text += (new Array(exp + 1)).join("0");
            v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid) throw new Error("Invalid integer: " + v);
        var r = [], max = v.length, l = LOG_BASE, min = max - l;
        while (max > 0) {
            r.push(+v.slice(min, max));
            min -= l;
            if (min < 0) min = 0;
            max -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
    }

    function parseNumberValue(v) {
        if (isPrecise(v)) {
            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
            return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
    }

    function parseValue(v) {
        if (typeof v === "number") {
            return parseNumberValue(v);
        }
        if (typeof v === "string") {
            return parseStringValue(v);
        }
        return v;
    }
    // Pre-define numbers in range [-999,999]
    for (var i = 0; i < 1000; i++) {
        Integer[i] = new SmallInteger(i);
        if (i > 0) Integer[-i] = new SmallInteger(-i);
    }
    // Backwards compatibility
    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;
    Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger; };
    Integer.randBetween = randBetween;

    Integer.fromArray = function (digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };

    return Integer;
})();

// Node.js check
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
    module.exports = bigInt;
}

//amd check
if (typeof define === "function" && define.amd) {
    define("big-integer", [], function () {
        return bigInt;
    });
}

},{}],7:[function(require,module,exports){
// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

var util = require('./util')

// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA (v, a, b) {
  var o0 = v[a] + v[b]
  var o1 = v[a + 1] + v[b + 1]
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC (v, a, b0, b1) {
  var o0 = v[a] + b0
  if (b0 < 0) {
    o0 += 0x100000000
  }
  var o1 = v[a + 1] + b1
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// Little-endian byte access
function B2B_GET32 (arr, i) {
  return (arr[i] ^
  (arr[i + 1] << 8) ^
  (arr[i + 2] << 16) ^
  (arr[i + 3] << 24))
}

// G Mixing function
// The ROTRs are inlined for speed
function B2B_G (a, b, c, d, ix, iy) {
  var x0 = m[ix]
  var x1 = m[ix + 1]
  var y0 = m[iy]
  var y1 = m[iy + 1]

  ADD64AA(v, a, b) // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
  ADD64AC(v, a, x0, x1) // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
  var xor0 = v[d] ^ v[a]
  var xor1 = v[d + 1] ^ v[a + 1]
  v[d] = xor1
  v[d + 1] = xor0

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor0 >>> 24) ^ (xor1 << 8)
  v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8)

  ADD64AA(v, a, b)
  ADD64AC(v, a, y0, y1)

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
  xor0 = v[d] ^ v[a]
  xor1 = v[d + 1] ^ v[a + 1]
  v[d] = (xor0 >>> 16) ^ (xor1 << 16)
  v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16)

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor1 >>> 31) ^ (xor0 << 1)
  v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1)
}

// Initialization Vector
var BLAKE2B_IV32 = new Uint32Array([
  0xF3BCC908, 0x6A09E667, 0x84CAA73B, 0xBB67AE85,
  0xFE94F82B, 0x3C6EF372, 0x5F1D36F1, 0xA54FF53A,
  0xADE682D1, 0x510E527F, 0x2B3E6C1F, 0x9B05688C,
  0xFB41BD6B, 0x1F83D9AB, 0x137E2179, 0x5BE0CD19
])

var SIGMA8 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
  11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
  7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
  9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
  2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
  12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
  13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
  6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
  10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3
]

// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
var SIGMA82 = new Uint8Array(SIGMA8.map(function (x) { return x * 2 }))

// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
var v = new Uint32Array(32)
var m = new Uint32Array(32)
function blake2bCompress (ctx, last) {
  var i = 0

  // init work variables
  for (i = 0; i < 16; i++) {
    v[i] = ctx.h[i]
    v[i + 16] = BLAKE2B_IV32[i]
  }

  // low 64 bits of offset
  v[24] = v[24] ^ ctx.t
  v[25] = v[25] ^ (ctx.t / 0x100000000)
  // high 64 bits not supported, offset may not be higher than 2**53-1

  // last block flag set ?
  if (last) {
    v[28] = ~v[28]
    v[29] = ~v[29]
  }

  // get little-endian words
  for (i = 0; i < 32; i++) {
    m[i] = B2B_GET32(ctx.b, 4 * i)
  }

  // twelve rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 64)
  for (i = 0; i < 12; i++) {
    // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
    B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1])
    B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3])
    B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5])
    B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7])
    B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9])
    B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11])
    B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13])
    B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15])
  }
  // util.debugPrint('   (i=12) v[16]', v, 64)

  for (i = 0; i < 16; i++) {
    ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16]
  }
  // util.debugPrint('h[8]', ctx.h, 64)
}

// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function blake2bInit (outlen, key) {
  if (outlen === 0 || outlen > 64) {
    throw new Error('Illegal output length, expected 0 < length <= 64')
  }
  if (key && key.length > 64) {
    throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64')
  }

  // state, 'param block'
  var ctx = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0, // input count
    c: 0, // pointer within buffer
    outlen: outlen // output length in bytes
  }

  // initialize hash state
  for (var i = 0; i < 16; i++) {
    ctx.h[i] = BLAKE2B_IV32[i]
  }
  var keylen = key ? key.length : 0
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  // key the hash, if applicable
  if (key) {
    blake2bUpdate(ctx, key)
    // at the end
    ctx.c = 128
  }

  return ctx
}

// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate (ctx, input) {
  for (var i = 0; i < input.length; i++) {
    if (ctx.c === 128) { // buffer full ?
      ctx.t += ctx.c // add counters
      blake2bCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal (ctx) {
  ctx.t += ctx.c // mark last block offset

  while (ctx.c < 128) { // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2bCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  var out = new Uint8Array(ctx.outlen)
  for (var i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> (8 * (i & 3))
  }
  return out
}

// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2b (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 64
  input = util.normalizeInput(input)

  // do the math
  var ctx = blake2bInit(outlen, key)
  blake2bUpdate(ctx, input)
  return blake2bFinal(ctx)
}

// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2bHex (input, key, outlen) {
  var output = blake2b(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2b: blake2b,
  blake2bHex: blake2bHex,
  blake2bInit: blake2bInit,
  blake2bUpdate: blake2bUpdate,
  blake2bFinal: blake2bFinal
}

},{"./util":10}],8:[function(require,module,exports){
// BLAKE2s hash function in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

var util = require('./util')

// Little-endian byte access.
// Expects a Uint8Array and an index
// Returns the little-endian uint32 at v[i..i+3]
function B2S_GET32 (v, i) {
  return v[i] ^ (v[i + 1] << 8) ^ (v[i + 2] << 16) ^ (v[i + 3] << 24)
}

// Mixing function G.
function B2S_G (a, b, c, d, x, y) {
  v[a] = v[a] + v[b] + x
  v[d] = ROTR32(v[d] ^ v[a], 16)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 12)
  v[a] = v[a] + v[b] + y
  v[d] = ROTR32(v[d] ^ v[a], 8)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 7)
}

// 32-bit right rotation
// x should be a uint32
// y must be between 1 and 31, inclusive
function ROTR32 (x, y) {
  return (x >>> y) ^ (x << (32 - y))
}

// Initialization Vector.
var BLAKE2S_IV = new Uint32Array([
  0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
  0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19])

var SIGMA = new Uint8Array([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
  11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
  7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
  9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
  2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
  12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
  13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
  6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
  10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0])

// Compression function. "last" flag indicates last block
var v = new Uint32Array(16)
var m = new Uint32Array(16)
function blake2sCompress (ctx, last) {
  var i = 0
  for (i = 0; i < 8; i++) { // init work variables
    v[i] = ctx.h[i]
    v[i + 8] = BLAKE2S_IV[i]
  }

  v[12] ^= ctx.t // low 32 bits of offset
  v[13] ^= (ctx.t / 0x100000000) // high 32 bits
  if (last) { // last block flag set ?
    v[14] = ~v[14]
  }

  for (i = 0; i < 16; i++) { // get little-endian words
    m[i] = B2S_GET32(ctx.b, 4 * i)
  }

  // ten rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 32)
  for (i = 0; i < 10; i++) {
    // util.debugPrint('   (i=' + i + ')  v[16]', v, 32)
    B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]])
    B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]])
    B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]])
    B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]])
    B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]])
    B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]])
    B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]])
    B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]])
  }
  // util.debugPrint('   (i=10) v[16]', v, 32)

  for (i = 0; i < 8; i++) {
    ctx.h[i] ^= v[i] ^ v[i + 8]
  }
  // util.debugPrint('h[8]', ctx.h, 32)
}

// Creates a BLAKE2s hashing context
// Requires an output length between 1 and 32 bytes
// Takes an optional Uint8Array key
function blake2sInit (outlen, key) {
  if (!(outlen > 0 && outlen <= 32)) {
    throw new Error('Incorrect output length, should be in [1, 32]')
  }
  var keylen = key ? key.length : 0
  if (key && !(keylen > 0 && keylen <= 32)) {
    throw new Error('Incorrect key length, should be in [1, 32]')
  }

  var ctx = {
    h: new Uint32Array(BLAKE2S_IV), // hash state
    b: new Uint32Array(64), // input block
    c: 0, // pointer within block
    t: 0, // input count
    outlen: outlen // output length in bytes
  }
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  if (keylen > 0) {
    blake2sUpdate(ctx, key)
    ctx.c = 64 // at the end
  }

  return ctx
}

// Updates a BLAKE2s streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2sUpdate (ctx, input) {
  for (var i = 0; i < input.length; i++) {
    if (ctx.c === 64) { // buffer full ?
      ctx.t += ctx.c // add counters
      blake2sCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2s streaming hash
// Returns a Uint8Array containing the message digest
function blake2sFinal (ctx) {
  ctx.t += ctx.c // mark last block offset
  while (ctx.c < 64) { // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2sCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  var out = new Uint8Array(ctx.outlen)
  for (var i = 0; i < ctx.outlen; i++) {
    out[i] = (ctx.h[i >> 2] >> (8 * (i & 3))) & 0xFF
  }
  return out
}

// Computes the BLAKE2S hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2s (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 32
  input = util.normalizeInput(input)

  // do the math
  var ctx = blake2sInit(outlen, key)
  blake2sUpdate(ctx, input)
  return blake2sFinal(ctx)
}

// Computes the BLAKE2S hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2sHex (input, key, outlen) {
  var output = blake2s(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2s: blake2s,
  blake2sHex: blake2sHex,
  blake2sInit: blake2sInit,
  blake2sUpdate: blake2sUpdate,
  blake2sFinal: blake2sFinal
}

},{"./util":10}],9:[function(require,module,exports){
var b2b = require('./blake2b')
var b2s = require('./blake2s')

module.exports = {
  blake2b: b2b.blake2b,
  blake2bHex: b2b.blake2bHex,
  blake2bInit: b2b.blake2bInit,
  blake2bUpdate: b2b.blake2bUpdate,
  blake2bFinal: b2b.blake2bFinal,
  blake2s: b2s.blake2s,
  blake2sHex: b2s.blake2sHex,
  blake2sInit: b2s.blake2sInit,
  blake2sUpdate: b2s.blake2sUpdate,
  blake2sFinal: b2s.blake2sFinal
}

},{"./blake2b":7,"./blake2s":8}],10:[function(require,module,exports){
(function (Buffer){(function (){
var ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array'

// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput (input) {
  var ret
  if (input instanceof Uint8Array) {
    ret = input
  } else if (input instanceof Buffer) {
    ret = new Uint8Array(input)
  } else if (typeof (input) === 'string') {
    ret = new Uint8Array(Buffer.from(input, 'utf8'))
  } else {
    throw new Error(ERROR_MSG_INPUT)
  }
  return ret
}

// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex (bytes) {
  return Array.prototype.map.call(bytes, function (n) {
    return (n < 16 ? '0' : '') + n.toString(16)
  }).join('')
}

// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex (val) {
  return (0x100000000 + val).toString(16).substring(1)
}

// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint (label, arr, size) {
  var msg = '\n' + label + ' = '
  for (var i = 0; i < arr.length; i += 2) {
    if (size === 32) {
      msg += uint32ToHex(arr[i]).toUpperCase()
      msg += ' '
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
    } else if (size === 64) {
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
      msg += uint32ToHex(arr[i]).toUpperCase()
    } else throw new Error('Invalid size ' + size)
    if (i % 6 === 4) {
      msg += '\n' + new Array(label.length + 4).join(' ')
    } else if (i < arr.length - 2) {
      msg += ' '
    }
  }
  console.log(msg)
}

// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed (hashFn, N, M) {
  var startMs = new Date().getTime()

  var input = new Uint8Array(N)
  for (var i = 0; i < N; i++) {
    input[i] = i % 256
  }
  var genMs = new Date().getTime()
  console.log('Generated random input in ' + (genMs - startMs) + 'ms')
  startMs = genMs

  for (i = 0; i < M; i++) {
    var hashHex = hashFn(input)
    var hashMs = new Date().getTime()
    var ms = hashMs - startMs
    startMs = hashMs
    console.log('Hashed in ' + ms + 'ms: ' + hashHex.substring(0, 20) + '...')
    console.log(Math.round(N / (1 << 20) / (ms / 1000) * 100) / 100 + ' MB PER SECOND')
  }
}

module.exports = {
  normalizeInput: normalizeInput,
  toHex: toHex,
  debugPrint: debugPrint,
  testSpeed: testSpeed
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":12}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":4,"buffer":12,"ieee754":20}],13:[function(require,module,exports){
(function (global){(function (){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
var basex = require('base-x')
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)

},{"base-x":3}],15:[function(require,module,exports){
(function (Buffer){(function (){
function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=require("sha3"),e=t(require("base-x")),n=require("safe-buffer"),i=t(require("big-integer")),o=t(require("bs58")),f=require("ripemd160-min"),u=require("blakejs/blake2b"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],h=function(t){for(var r=new ArrayBuffer(5*t.length/8),e=new Uint8Array(r),n=0;n<t.length/8;n++){for(var i=[0,0,0,0,0,0,0,0],o=0;o<8;++o)i[o]=s.indexOf(t[8*n+o]);e[5*n+0]=i[0]<<3|i[1]>>2,e[5*n+1]=(3&i[1])<<6|i[2]<<1|i[3]>>4,e[5*n+2]=(15&i[3])<<4|i[4]>>1,e[5*n+3]=(1&i[4])<<7|i[5]<<2|i[6]>>3,e[5*n+4]=(7&i[6])<<5|i[7]}return Buffer.from(e)};function c(t,r){this._block=n.Buffer.alloc(t),this._finalSize=r,this._blockSize=t,this._len=0}c.prototype.update=function(t,r){"string"==typeof t&&(t=n.Buffer.from(t,r=r||"utf8"));for(var e=this._block,i=this._blockSize,o=t.length,f=this._len,u=0;u<o;){for(var s=f%i,a=Math.min(o-u,i-s),h=0;h<a;h++)e[s+h]=t[u+h];u+=a,(f+=a)%i==0&&this._update(e)}return this._len+=o,this},c.prototype.digest=function(t){var r=this._len%this._blockSize;this._block[r]=128,this._block.fill(0,r+1),r>=this._finalSize&&(this._update(this._block),this._block.fill(0));var e=8*this._len;if(e<=4294967295)this._block.writeUInt32BE(e,this._blockSize-4);else{var n=(4294967295&e)>>>0;this._block.writeUInt32BE((e-n)/4294967296,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var i=this._hash();return t?i.toString(t):i},c.prototype._update=function(){throw new Error("_update must be implemented by subclass")};var l,d,p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],v=new Array(64);function y(){this.init(),this._w=v,c.call(this,64,56)}function g(t,r,e){return e^t&(r^e)}function w(t,r,e){return t&r|e&(t|r)}function m(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function b(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function _(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function x(t){return void 0!==t.length}l=y,(d=c)&&(l.super_=d,l.prototype=Object.create(d.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}})),y.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},y.prototype._update=function(t){for(var r,e=this._w,n=0|this._a,i=0|this._b,o=0|this._c,f=0|this._d,u=0|this._e,s=0|this._f,a=0|this._g,h=0|this._h,c=0;c<16;++c)e[c]=t.readInt32BE(4*c);for(;c<64;++c)e[c]=0|(((r=e[c-2])>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+e[c-7]+_(e[c-15])+e[c-16];for(var l=0;l<64;++l){var d=h+b(u)+g(u,s,a)+p[l]+e[l]|0,v=m(n)+w(n,i,o)|0;h=a,a=s,s=u,u=f+d|0,f=o,o=i,i=n,n=d+v|0}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=f+this._d|0,this._e=u+this._e|0,this._f=s+this._f|0,this._g=a+this._g|0,this._h=h+this._h|0},y.prototype._hash=function(){var t=n.Buffer.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t};var E=new(function(){function t(t){this.sha256=t.sha256,this.alphabet=t.alphabet,this.codec=e(this.alphabet),this.base=this.alphabet.length}var r=t.prototype;return r.encodeChecked=function(t){var r=this.sha256(this.sha256(t)).slice(0,4);return this.encodeRaw(Buffer.from(function(){for(var t=[],r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return e.forEach(function(r){if(x(r))for(var e=0;e<r.length;e++)t.push(r[e]);else t.push(r)}),t}(t,r)))},r.encodeRaw=function(t){return this.codec.encode(t)},r.decodeChecked=function(t){var r=this.decodeRaw(t);if(r.length<5)throw new Error("invalid_input_size: decoded data must have length >= 5");if(!this.verifyCheckSum(r))throw new Error("checksum_invalid");return r.slice(0,-4)},r.decodeRaw=function(t){return this.codec.decode(t)},r.verifyCheckSum=function(t){return function(t,r){if(t.length!==r.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0}(this.sha256(this.sha256(t.slice(0,-4))).slice(0,4),t.slice(-4))},t}())({sha256:function(t){return(new y).update(Buffer.from(t)).digest()},alphabet:"rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"}),B=function(t){return"0x"===t.slice(0,2)?t.slice(2):t},I=function(t,e){if(void 0===e&&(e=null),"string"!=typeof t)throw new Error("stripHexPrefix param must be type 'string', is currently type "+typeof t+".");for(var n,i=B(t).toLowerCase(),o=(n=(null!=e?e.toString()+"0x":"")+i,new r.Keccak(256).update(n).digest()).toString("hex"),f="0x",u=0;u<i.length;u++)f+=parseInt(o[u],16)>=8?i[u].toUpperCase():i[u];return f},A=function(t,r){if(!t)throw r},S=function(t,r){if(!Buffer.isBuffer(t))throw r},k=i.one,z=i.zero,C=i(3);function O(t,r){return t.and(k.shiftLeft(r)).notEquals(z)}function U(t){return i.fromArray(Array.prototype.slice.call(t,0),256)}function P(t,r){var e=t.toArray(256).value,n=r?Math.max(r-e.length,0):0;return Buffer.from([].concat(Array(n).fill(0),e))}function q(t,r,e,n){A(void 0!==n,"Missing Z coordinate"),this.curve=t,this.x=r,this.y=e,this.z=n,this._zInv=null,this.compressed=!0}Object.defineProperty(q.prototype,"zInv",{get:function(){return null===this._zInv&&(this._zInv=this.z.modInv(this.curve.p)),this._zInv}}),Object.defineProperty(q.prototype,"affineX",{get:function(){return this.x.multiply(this.zInv).mod(this.curve.p)}}),Object.defineProperty(q.prototype,"affineY",{get:function(){return this.y.multiply(this.zInv).mod(this.curve.p)}}),q.fromAffine=function(t,r,e){return new q(t,r,e,k)},q.prototype.equals=function(t){return t===this||(this.curve.isInfinity(this)?this.curve.isInfinity(t):this.curve.isInfinity(t)?this.curve.isInfinity(this):0===t.y.multiply(this.z).subtract(this.y.multiply(t.z)).mod(this.curve.p).compare(z)&&0===t.x.multiply(this.z).subtract(this.x.multiply(t.z)).mod(this.curve.p).compare(z))},q.prototype.negate=function(){var t=this.curve.p.subtract(this.y);return new q(this.curve,this.x,t,this.z)},q.prototype.add=function(t){if(this.curve.isInfinity(this))return t;if(this.curve.isInfinity(t))return this;var r=this.x,e=this.y,n=t.x,i=t.y.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p),o=n.multiply(this.z).subtract(r.multiply(t.z)).mod(this.curve.p);if(0===o.compare(z))return 0===i.compare(z)?this.twice():this.curve.infinity;var f=o.square(),u=f.multiply(o),s=r.multiply(f),a=i.square().multiply(this.z),h=a.subtract(s.shiftLeft(1)).multiply(t.z).subtract(u).multiply(o).mod(this.curve.p),c=s.multiply(C).multiply(i).subtract(e.multiply(u)).subtract(a.multiply(i)).multiply(t.z).add(i.multiply(u)).mod(this.curve.p),l=u.multiply(this.z).multiply(t.z).mod(this.curve.p);return new q(this.curve,h,c,l)},q.prototype.twice=function(){if(this.curve.isInfinity(this))return this;if(0===this.y.compare(z))return this.curve.infinity;var t=this.x,r=this.y,e=r.multiply(this.z).mod(this.curve.p),n=e.multiply(r).mod(this.curve.p),i=this.curve.a,o=t.square().multiply(C);0!==i.compare(z)&&(o=o.add(this.z.square().multiply(i)));var f=(o=o.mod(this.curve.p)).square().subtract(t.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(e).mod(this.curve.p),u=o.multiply(C).multiply(t).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(o.pow(3)).mod(this.curve.p),s=e.pow(3).shiftLeft(3).mod(this.curve.p);return new q(this.curve,f,u,s)},q.prototype.multiply=function(t){if(this.curve.isInfinity(this))return this;if(0===t.compare(z))return this.curve.infinity;for(var r=t,e=r.multiply(C),n=this.negate(),i=this,o=e.bitLength()-2;o>0;--o){var f=O(e,o),u=O(r,o);i=i.twice(),f!==u&&(i=i.add(f?this:n))}return i},q.prototype.multiplyTwo=function(t,r,e){for(var n=Math.max(t.bitLength(),e.bitLength())-1,i=this.curve.infinity,o=this.add(r);n>=0;){var f=O(t,n),u=O(e,n);i=i.twice(),f?i=i.add(u?o:this):u&&(i=i.add(r)),--n}return i},q.prototype.getEncoded=function(t){if(null==t&&(t=this.compressed),this.curve.isInfinity(this))return new Buffer("00","hex");var r,e=this.affineX,n=this.affineY,i=this.curve.pLength;return t?(r=new Buffer(1+i)).writeUInt8(n.isEven()?2:3,0):((r=new Buffer(1+i+i)).writeUInt8(4,0),P(n,i).copy(r,1+i)),P(e,i).copy(r,1),r},q.decodeFrom=function(t,r){var e,n=r.readUInt8(0),i=4!==n,o=Math.floor((t.p.bitLength()+7)/8),f=U(r.slice(1,1+o));if(i)A(r.length===o+1,"Invalid sequence length"),A(2===n||3===n,"Invalid sequence tag"),e=t.pointFromX(3===n,f);else{A(r.length===1+o+o,"Invalid sequence length");var u=U(r.slice(1+o));e=q.fromAffine(t,f,u)}return e.compressed=i,e},q.prototype.toString=function(){return this.curve.isInfinity(this)?"(INFINITY)":"("+this.affineX.toString()+","+this.affineY.toString()+")"};var L=i.zero,j=i.one;function R(t,r,e,n,i,o,f){this.p=t,this.a=r,this.b=e,this.G=q.fromAffine(this,n,i),this.n=o,this.h=f,this.infinity=new q(this,null,null,L),this.pOverFour=t.add(j).shiftRight(2),this.pLength=Math.floor((this.p.bitLength()+7)/8)}R.prototype.pointFromX=function(t,r){var e=r.pow(3).add(this.a.multiply(r)).add(this.b).mod(this.p).modPow(this.pOverFour,this.p),n=e;return e.isEven()^!t&&(n=this.p.subtract(n)),q.fromAffine(this,r,n)},R.prototype.isInfinity=function(t){return t===this.infinity||0===t.z.compare(L)&&0!==t.y.compare(L)},R.prototype.isOnCurve=function(t){if(this.isInfinity(t))return!0;var r=t.affineX,e=t.affineY,n=this.a,i=this.b,o=this.p;if(r.compare(L)<0||r.compareTo(o)>=0)return!1;if(e.compare(L)<0||e.compareTo(o)>=0)return!1;var f=e.square().mod(o),u=r.pow(3).add(n.multiply(r)).add(i).mod(o);return f.equals(u)},R.prototype.validate=function(t){A(!this.isInfinity(t),"Point is at infinity"),A(this.isOnCurve(t),"Point is not on the curve");var r=t.multiply(this.n);return A(this.isInfinity(r),"Point is not a scalar multiple of G"),!0};var M={p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"};function F(t,e){return new r.SHA3(256).update(t).digest(e)}function T(t){return Buffer.from((new f.RIPEMD160).update(t).digest())}function D(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(S(t,"expecting keyBuffer<Buffer>"),"sha256x2"===r){var e=F(F(t)).slice(0,4);return o.encode(Buffer.concat([t,e]))}var n=[t];r&&n.push(Buffer.from(r));var i=T(Buffer.concat(n)).slice(0,4);return o.encode(Buffer.concat([t,i]))}function H(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;A(t,"private key expected");var e,n=new Buffer(o.decode(t)),i=n.slice(-4),f=n.slice(0,-4);if("sha256x2"===r)e=F(F(f)).slice(0,4);else{var u=[f];r&&u.push(Buffer.from(r)),e=T(Buffer.concat(u)).slice(0,4)}if(i.toString("hex")!==e.toString("hex"))throw new Error("Invalid checksum, "+"".concat(i.toString("hex")," != ").concat(e.toString("hex")));return f}var G=function(t){var r=M;if(!r)return null;var e=i(r.p,16),n=i(r.a,16),o=i(r.b,16),f=i(r.n,16),u=i(r.h,16);return new R(e,n,o,i(r.Gx,16),i(r.Gy,16),f,u)}();function N(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";if("string"==typeof t)return N.fromString(t,r);if(Buffer.isBuffer(t))return N.fromBuffer(t);if("object"==typeof t&&t.Q)return N(t.Q);function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.compressed;return t.getEncoded(r)}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EOS";return t+D(e())}function i(){return e().toString("hex")}return{Q:t,toString:n,toBuffer:e,toHex:i}}N.isValid=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";try{return N(t,r),!0}catch(t){return!1}},N.fromBuffer=function(t){return N(q.decodeFrom(G,t))},N.fromString=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";try{return N.fromStringOrThrow(t,r)}catch(t){return null}},N.fromStringOrThrow=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS",e=t.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);if(null===e){var n=new RegExp("^"+r);return n.test(t)&&(t=t.substring(r.length)),N.fromBuffer(H(t))}var i=e[1],o=e[2];return N.fromBuffer(H(o,i))},N.fromHex=function(t){return N.fromBuffer(new Buffer(t,"hex"))},N.fromStringHex=function(t){return N.fromString(new Buffer(t,"hex"))};var X=e("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),K=X.encode,Y=X.decode,V=function(t){return void 0===t},Q={ed25519PublicKey:48,ed25519SecretSeed:144,preAuthTx:152,sha256Hash:184},Z=function(t){var r=Buffer.alloc(2);return r.writeUInt16LE(function(t,r){Buffer.isBuffer(t)||(t=new Buffer);for(var e=0,n=0;n<t.length;n++){var i=e>>>8&255;i^=255&t[n],e=e<<8&65535,e^=i^=i>>>4,e^=i=i<<5&65535,e^=i=i<<7&65535}return e}(t),0),r};function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t,r){return(W=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function tt(t,r,e){return(tt=$()?Reflect.construct:function(t,r,e){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(t,n));return e&&W(i,e.prototype),i}).apply(null,arguments)}function rt(t){var r="function"==typeof Map?new Map:void 0;return(rt=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return tt(t,arguments,J(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),W(e,t)})(t)}var et=[0,1,2,42,43,68,69],nt=function(t){for(var r=new Uint8Array(t.length),e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}("SS58PRE"),it=function(t){var r,e;function n(){return t.apply(this,arguments)||this}return e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,n.prototype.toJSON=function(){return{_type:"AccountIndex",data:this+0}},n}(rt(Number));function ot(t,r){t.length||(t=[t]),r.length||(r=[r]);var e=new Uint8Array(t.length+r.length);return e.set(t),e.set(r,t.length),e}function ft(t){var r=new Error;this.name=r.name="ValidationError",this.message=r.message=t,this.stack=r.stack}function ut(t,r){if(null==r&&(r="Assertion failed."),!t)throw new ft(r)}ft.prototype=Object.create(Error.prototype);var st=function(){function t(t,r){this.hi=0|t,this.lo=0|r}return t.prototype.ushrn32=function(t){var r=this.lo;return 0==(t&=63)||(t<32?(r>>>=t,r|=this.hi<<32-t):r=this.hi>>>t-32),r},t}(),at=Buffer.allocUnsafe(105),ht="qpzry9x8gf2tvdw0s3jn54khce6mua7l",ct=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,15,-1,10,17,21,20,26,30,7,5,-1,-1,-1,-1,-1,-1,-1,29,-1,24,13,25,9,8,23,-1,18,22,31,27,19,-1,1,0,3,16,11,28,12,14,6,4,2,-1,-1,-1,-1,-1,-1,29,-1,24,13,25,9,8,23,-1,18,22,31,27,19,-1,1,0,3,16,11,28,12,14,6,4,2,-1,-1,-1,-1,-1],lt=new st(7,4294967295),dt=[new st(152,4072443489),new st(121,3077413346),new st(243,1046459332),new st(174,783016616),new st(30,1329849456)];function pt(t,r){var e=t,n=e.hi>>>3;e.hi&=lt.hi,e.lo&=lt.lo,e.hi<<=5,e.hi|=e.lo>>>27,e.lo<<=5;for(var i=0;i<dt.length;i++)n>>>i&1&&(e.hi^=dt[i].hi,e.lo^=dt[i].lo);return e.lo^=r,e}function vt(t,r,e,n,i,o,f){ut(Buffer.isBuffer(t)),ut(r>>>0===r),ut(Buffer.isBuffer(e)),ut(n>>>0===n),ut((255&i)===i),ut((255&o)===o),ut("boolean"==typeof f);for(var u=(1<<o)-1,s=0,a=0;r<t.length;r++){var h=t[r];if(h>>>i!=0)throw new Error("Invalid bits.");for(s=s<<i|h,a+=i;a>=o;)e[n++]=s>>>(a-=o)&u}if(f)a&&(e[n++]=s<<o-a&u);else if(a>=i||s<<o-a&u)throw new Error("Invalid bits.");return ut(n<=e.length),e.slice(0,n)}var yt=function(t){function r(r){var e=r.slice(0,-4),n=r.slice(-4),i=t(e);if(!(n[0]^i[0]|n[1]^i[1]|n[2]^i[2]|n[3]^i[3]))return e}return{bs58Encode:function(r){var e=t(r);return o.encode(Buffer.concat([r,e],r.length+4))},bs58Decode:function(t){var e=r(o.decode(t));if(!e)throw new Error("Invalid checksum");return e},decodeUnsafe:function(t){var e=o.decodeUnsafe(t);if(e)return r(e)}}}(function(t){var r=(new y).update(t).digest();return(new y).update(r).digest()}),gt=yt.bs58Decode,wt=yt.bs58Encode;exports.b32decode=h,exports.b32encode=function(t){var r=[],e=Math.floor(t.length/5),n=t.length%5;if(0!=n){for(var i=0;i<5-n;i++)t+="\0";e+=1}for(var o=0;o<e;o++)r.push(s.charAt(t.charCodeAt(5*o)>>3)),r.push(s.charAt((7&t.charCodeAt(5*o))<<2|t.charCodeAt(5*o+1)>>6)),r.push(s.charAt((63&t.charCodeAt(5*o+1))>>1)),r.push(s.charAt((1&t.charCodeAt(5*o+1))<<4|t.charCodeAt(5*o+2)>>4)),r.push(s.charAt((15&t.charCodeAt(5*o+2))<<1|t.charCodeAt(5*o+3)>>7)),r.push(s.charAt((127&t.charCodeAt(5*o+3))>>2)),r.push(s.charAt((3&t.charCodeAt(5*o+3))<<3|t.charCodeAt(5*o+4)>>5)),r.push(s.charAt(31&t.charCodeAt(5*o+4)));var f=0;1==n?f=6:2==n?f=4:3==n?f=3:4==n&&(f=1);for(var u=0;u<f;u++)r.pop();for(var a=0;a<f;a++)r.push("=");return r.join("")},exports.bs58Decode=gt,exports.bs58Encode=wt,exports.calculateChecksum=Z,exports.cashaddrDecode=function(t,r){void 0===r&&(r="bitcoincash"),ut("string"==typeof t),ut("string"==typeof r);var e=function(t,r){if(ut("string"==typeof t),t.length<8||t.length>196)throw new Error("Invalid cashaddr data length.");for(var e=!1,n=!1,i=!1,o=0,f=0;f<t.length;f++){var u=t.charCodeAt(f);if(u>=97&&u<=122)e=!0;else if(u>=65&&u<=90)n=!0;else if(u>=48&&u<=57)i=!0;else{if(58!==u)throw new Error("Invalid cashaddr character.");if(i||0===f||f>83)throw new Error("Invalid cashaddr prefix.");if(0!==o)throw new Error("Invalid cashaddr separators.");o=f}}if(n&&e)throw new Error("Invalid cashaddr casing.");var s,a=new st(0,1);0===o?s=r.toLowerCase():(s=t.substring(0,o).toLowerCase(),o+=1);for(var h=0;h<s.length;h++)pt(a,31&(32|s.charCodeAt(h)));pt(a,0);var c=t.length-o;if(c<=8||c>112)throw new Error("Invalid cashaddr data length.");for(var l=Buffer.allocUnsafe(c),d=o;d<t.length;d++){var p=t.charCodeAt(d),v=65408&p?-1:ct[p];if(-1===v)throw new Error("Invalid cashaddr character.");pt(a,v),d+8<t.length&&(l[d-o]=v)}if(0!==a.hi||1!==a.lo||s!==r)throw new Error("Invalid cashaddr checksum.");return[s,l.slice(0,-8)]}(t,r),n=e[0],i=e[1],o=5*i.length&7;if(o>=5)throw new Error("Invalid padding in data.");if(i[i.length-1]&(1<<o)-1)throw new Error("Non zero padding.");var f=vt(i,0,i,0,5,8,!1),u=f[0]>>>3&31,s=f.slice(1),a=20+4*(3&f[0]);if(4&f[0]&&(a*=2),a!==s.length)throw new Error("Invalid cashaddr data length.");return{prefix:n,type:u,hash:s}},exports.cashaddrEncode=function(t,r,e){if(ut("string"==typeof t),ut((15&r)===r,"Invalid cashaddr type."),ut(Buffer.isBuffer(e)),0===t.length||t.length>83)throw new Error("Invalid cashaddr prefix.");var n=function(t){switch(ut(t>>>0===t),t){case 20:return 0;case 24:return 1;case 28:return 2;case 32:return 3;case 40:return 4;case 48:return 5;case 56:return 6;case 64:return 7;default:throw new Error("Non standard length.")}}(e.length),i=Buffer.allocUnsafe(e.length+1);return i[0]=r<<3|n,e.copy(i,1),function(t,r){ut("string"==typeof t),ut(Buffer.isBuffer(r));for(var e=new st(0,1),n="",i=!1,o=!1,f=0;f<t.length;f++){var u=t.charCodeAt(f);if(65280&u||u>>>5==0)throw new Error("Invalid cashaddr character.");if(u>=97&&u<=122)o=!0;else if(u>=65&&u<=90)i=!0,u=u-65+97;else if(u>=48&&u<=57)throw new Error("Invalid cashaddr prefix.");pt(e,31&u),n+=String.fromCharCode(u)}if(o&&i)throw new Error("Invalid cashaddr prefix.");pt(e,0),n+=":";for(var s=0;s<r.length;s++){var a=r[s];if(a>>>5!=0)throw new Error("Invalid cashaddr value.");pt(e,a),n+=ht[a]}for(var h=0;h<8;h++)pt(e,0);e.lo^=1;for(var c=0;c<8;c++){var l=31&e.ushrn32(5*(7-c));n+=ht[l]}return n}(t,vt(i,0,at,0,8,5,!0))},exports.codec=E,exports.decodeCheck=function(t,r){if("string"!=typeof r)throw new TypeError("encoded argument must be of type String");var e=Y(r),n=e[0],i=e.slice(0,-2),o=i.slice(1),f=e.slice(-2);if(r!==K(e))throw new Error("invalid encoded string");var u=Q[t];if(V(u))throw new Error(t+' is not a valid version byte name.  expected one of "accountId" or "seed"');if(n!==u)throw new Error("invalid version byte. expected "+u+", got "+n);if(!function(t,r){if(t.length!==r.length)return!1;if(0===t.length)return!0;for(var e=0;e<t.length;e+=1)if(t[e]!==r[e])return!1;return!0}(Z(i),f))throw new Error("invalid checksum");return Buffer.from(o)},exports.encodeCheck=function(t,r){if(null===r||V(r))throw new Error("cannot encode null data");var e=Q[t];if(V(e))throw new Error(t+' is not a valid version byte name.  expected one of "ed25519PublicKey", "ed25519SecretSeed", "preAuthTx", "sha256Hash"');r=Buffer.from(r);var n=Buffer.from([e]),i=Buffer.concat([n,r]),o=Z(i),f=Buffer.concat([i,o]);return K(f)},exports.eosPublicKey=N,exports.hex2a=function(t){for(var r=t.toString(),e="",n=0;n<r.length;n+=2)e+=String.fromCharCode(parseInt(r.substr(n,2),16));return e},exports.isValid=function(t){var e=t.toString().toUpperCase().replace(/-/g,"");if(!e||40!==e.length)return!1;var n,i=function(t){for(var r="",e=0;e<t.length;e++){var n=Math.round(t[e]).toString(16);1===n.length&&(n="0"+n),r+=n}return r}(h(e));return n=Buffer.from(i.slice(0,42),"hex"),new r.Keccak(256).update(n).digest("hex").toString().substr(0,8)===i.slice(42)},exports.isValidChecksumAddress=function(t,r){return function(t){return/^0x[0-9a-fA-F]{40}$/.test(t)}(t)&&I(t,r)===t},exports.ss58Decode=function(t,r){var e;void 0===r&&(r=0);try{e=o.decode(t)}catch(t){return null}if(-1===et.indexOf(e[0]))return null;if(e.length<3)return null;var n,i=e.length<=3?1:e.length<=5?2:e.length<=9?4:e.length<=17?8:32,f=e.length-1-i,s=e.slice(1,1+i);e.slice(1+e.length),32===i&&(n=s);var a=i<32?new it(function(t){var r=0,e=1;return t.forEach(function(t){r+=t*e,e*=256}),r}(s)):new Buffer.from(s);if(e[0]%1&&!n&&!r)return null;for(var h=u.blake2b(ot(nt,e[0]%1?n||r(a):e.slice(0,1+i))),c=0;c<f;++c)if(h[c]!==e[1+i+c])return null;return a},exports.ss58Encode=function(t,r,e,n,i){var f;if(void 0===r&&(r=42),void 0===e&&(e=null),void 0===n&&(n=null),-1===et.indexOf(r))throw new Error("Unknown ss58 address type",r);if("number"==typeof t||t instanceof it){var s=t<256?1:t<65536?2:t<1?4:8;if(-1===[1,2,4,8].indexOf(n=n||s))throw new Error("Invalid length");if(n=Math.max(s,n),e&&"number"!=typeof e)throw new Error("Invalid checksum length");switch(n){case 1:e=1;break;case 2:e=[1,2].indexOf(e)+1||1;break;case 4:e=[1,2,3,4].indexOf(e)+1||1;break;case 8:e=[1,2,3,4,5,6,7,8].indexOf(e)+1||1}f=function(t,r){var e=!1;t<0&&(t=-t-1,e=!0);for(var n=new Uint8Array(r),i=0;i<r;++i)n[i]=t%256,e&&(n[i]=255&~n[i]),t/=256;return n}(t,n)}else{if(!(t instanceof Uint8Array)||32!==t.length&&35!==t.length)throw new Error("Unknown item to encode as ss58. Passing back.",t);e=2,i=f=35===t.length?t.slice(1,33):t}var a=u.blake2b(ot(nt,1&r?i:ot(r,f))),h=ot(ot(r,f),a.slice(0,e));return o.encode(Buffer.from(h))},exports.stripHexPrefix=B,exports.toChecksumAddress=I,exports.ua2hex=function(t){for(var r="",e=0;e<t.length;e++){var n=t[e];r+=a[n>>>4],r+=a[15&n]}return r};


}).call(this)}).call(this,require("buffer").Buffer)
},{"base-x":3,"big-integer":6,"blakejs/blake2b":7,"bs58":14,"buffer":12,"ripemd160-min":25,"safe-buffer":16,"sha3":27}],16:[function(require,module,exports){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":12}],17:[function(require,module,exports){
(function (Buffer){(function (){
var sha3 = require('js-sha3').keccak_256
var uts46 = require('idna-uts46-hx')

function namehash (inputName) {
  // Reject empty names:
  var node = ''
  for (var i = 0; i < 32; i++) {
    node += '00'
  }

  name = normalize(inputName)

  if (name) {
    var labels = name.split('.')

    for(var i = labels.length - 1; i >= 0; i--) {
      var labelSha = sha3(labels[i])
      node = sha3(new Buffer(node + labelSha, 'hex'))
    }
  }

  return '0x' + node
}

function normalize(name) {
  return name ? uts46.toUnicode(name, {useStd3ASCII: true, transitional: false}) : name
}

exports.hash = namehash
exports.normalize = normalize

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":12,"idna-uts46-hx":19,"js-sha3":21}],18:[function(require,module,exports){
/* This file is generated from the Unicode IDNA table, using
   the build-unicode-tables.py script. Please edit that
   script instead of this file. */

/* istanbul ignore next */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(); });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.uts46_map = factory();
  }
}(this, function () {
var blocks = [
  new Uint32Array([2157250,2157314,2157378,2157442,2157506,2157570,2157634,0,2157698,2157762,2157826,2157890,2157954,0,2158018,0]),
  new Uint32Array([2179041,6291456,2179073,6291456,2179105,6291456,2179137,6291456,2179169,6291456,2179201,6291456,2179233,6291456,2179265,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,14680064,14680064,14680064,14680064,14680064]),
  new Uint32Array([0,2113729,2197345,2197377,2113825,2197409,2197441,2113921,2197473,2114017,2197505,2197537,2197569,2197601,2197633,2197665]),
  new Uint32Array([6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,23068672,23068672,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,0,23068672,23068672,23068672,0,0,0,0,23068672]),
  new Uint32Array([14680064,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,14680064,14680064]),
  new Uint32Array([2196001,2196033,2196065,2196097,2196129,2196161,2196193,2196225,2196257,2196289,2196321,2196353,2196385,2196417,2196449,2196481]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,6291456,0,0,0,0,0]),
  new Uint32Array([2097281,2105921,2097729,2106081,0,2097601,2162337,2106017,2133281,2097505,2105889,2097185,2097697,2135777,2097633,2097441]),
  new Uint32Array([2177025,6291456,2177057,6291456,2177089,6291456,2177121,6291456,2177153,6291456,2177185,6291456,2177217,6291456,2177249,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,0,6291456,6291456,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456]),
  new Uint32Array([0,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,6291456]),
  new Uint32Array([2134435,2134531,2134627,2134723,2134723,2134819,2134819,2134915,2134915,2135011,2105987,2135107,2135203,2135299,2131587,2135395]),
  new Uint32Array([0,0,0,0,0,0,0,6291456,2168673,2169249,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2147906,2147970,2148034,2148098,2148162,2148226,2148290,2148354,2147906,2147970,2148034,2148098,2148162,2148226,2148290,2148354]),
  new Uint32Array([2125219,2125315,2152834,2152898,2125411,2152962,2153026,2125506,2125507,2125603,2153090,2153154,2153218,2153282,2153346,2105348]),
  new Uint32Array([2203393,6291456,2203425,6291456,2203457,6291456,2203489,6291456,6291456,6291456,6291456,2203521,6291456,2181281,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,23068672,6291456,2145538,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,6291456]),
  new Uint32Array([2139426,2160834,2160898,2160962,2134242,2161026,2161090,2161154,2161218,2161282,2161346,2161410,2138658,2161474,2161538,2134722]),
  new Uint32Array([2119939,2124930,2125026,2106658,2125218,2128962,2129058,2129154,2129250,2129346,2129442,2108866,2108770,2150466,2150530,2150594]),
  new Uint32Array([2201601,6291456,2201633,6291456,2201665,6291456,2201697,6291456,2201729,6291456,2201761,6291456,2201793,6291456,2201825,6291456]),
  new Uint32Array([2193537,2193569,2193601,2193633,2193665,2193697,2193729,2193761,2193793,2193825,2193857,2193889,2193921,2193953,2193985,2194017]),
  new Uint32Array([6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2190561,6291456,2190593,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2190625,6291456,2190657,6291456,23068672]),
  new Uint32Array([2215905,2215937,2215969,2216001,2216033,2216065,2216097,2216129,2216161,2216193,2216225,2216257,2105441,2216289,2216321,2216353]),
  new Uint32Array([23068672,18884130,23068672,23068672,23068672,6291456,23068672,23068672,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,23068672,23068672,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2191233,2191265,2191297,2191329,2191361,2191393,2191425,2117377,2191457,2191489,2191521,2191553,2191585,2191617,2191649,2117953]),
  new Uint32Array([2132227,2132323,2132419,2132419,2132515,2132515,2132611,2132707,2132707,2132803,2132899,2132899,2132995,2132995,2133091,2133187]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,6291456,0,0]),
  new Uint32Array([2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,10609889,10610785,10609921,10610817,2222241]),
  new Uint32Array([6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,0,0]),
  new Uint32Array([2219969,2157121,2157441,2157505,2157889,2157953,2220001,2158465,2158529,10575617,2156994,2157058,2129923,2130019,2157122,2157186]),
  new Uint32Array([6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0]),
  new Uint32Array([2185249,6291456,2185281,6291456,2185313,6291456,2185345,6291456,2185377,6291456,2185409,6291456,2185441,6291456,2185473,6291456]),
  new Uint32Array([0,0,0,0,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,0,23068672,23068672,0,0,23068672,23068672,23068672,6291456,0]),
  new Uint32Array([2183361,6291456,2183393,6291456,2183425,6291456,2183457,6291456,2183489,6291456,2183521,6291456,2183553,6291456,2183585,6291456]),
  new Uint32Array([2192161,2192193,2192225,2192257,2192289,2192321,2192353,2192385,2192417,2192449,2192481,2192513,2192545,2192577,2192609,2192641]),
  new Uint32Array([2212001,2212033,2212065,2212097,2212129,2212161,2212193,2212225,2212257,2212289,2212321,2212353,2212385,2212417,2212449,2207265]),
  new Uint32Array([2249825,2249857,2249889,2249921,2249954,2250018,2250082,2250145,2250177,2250209,2250241,2250274,2250337,2250370,2250433,2250465]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2147905,2147969,2148033,2148097,2148161,2148225,2148289,2148353]),
  new Uint32Array([10485857,6291456,2197217,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,23068672,23068672]),
  new Uint32Array([0,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([2180353,2180385,2144033,2180417,2180449,2180481,2180513,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,10610209,10610465,10610241,10610753,10609857]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,0,0]),
  new Uint32Array([2223842,2223906,2223970,2224034,2224098,2224162,2224226,2224290,2224354,2224418,2224482,2224546,2224610,2224674,2224738,2224802]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,6291456,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456]),
  new Uint32Array([23068672,23068672,23068672,18923650,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,18923714,23068672,23068672]),
  new Uint32Array([2126179,2125538,2126275,2126371,2126467,2125634,2126563,2105603,2105604,2125346,2126659,2126755,2126851,2098179,2098181,2098182]),
  new Uint32Array([2227426,2227490,2227554,2227618,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2192353,2240642,2240642,2240705,2240737,2240737,2240769,2240802,2240866,2240929,2240961,2240993,2241025,2241057,2241089,2241121]),
  new Uint32Array([6291456,2170881,2170913,2170945,6291456,2170977,6291456,2171009,2171041,6291456,6291456,6291456,2171073,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2132226,2132514,2163586,2132610,2160386,2133090,2133186,2160450,2160514,2160578,2133570,2106178,2160642,2133858,2160706,2160770]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,10532162,10532226,10532290,10532354,10532418,10532482,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,23068672]),
  new Uint32Array([2098209,2108353,2108193,2108481,2170241,2111713,2105473,2105569,2105601,2112289,2112481,2098305,2108321,0,0,0]),
  new Uint32Array([2209121,2209153,2209185,2209217,2209249,2209281,2209313,2209345,2209377,2209409,2209441,2209473,2207265,2209505,2209537,2209569]),
  new Uint32Array([2189025,6291456,2189057,6291456,2189089,6291456,2189121,6291456,2189153,6291456,2189185,6291456,2189217,6291456,2189249,6291456]),
  new Uint32Array([2173825,2153473,2173857,2173889,2173921,2173953,2173985,2173761,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233057]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2165764,2140004]),
  new Uint32Array([2215105,6291456,2215137,6291456,6291456,2215169,2215201,6291456,6291456,6291456,2215233,2215265,2215297,2215329,2215361,2215393]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,6291456,6291456,6291456,23068672,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([10505091,10505187,10505283,10505379,10505475,10505571,10505667,10505763,10505859,10505955,10506051,10506147,10506243,10506339,10506435,10506531]),
  new Uint32Array([2229730,2229794,2229858,2229922,2229986,2230050,2230114,2230178,2230242,2230306,2230370,2230434,2230498,2230562,2230626,2230690]),
  new Uint32Array([2105505,2098241,2108353,2108417,2105825,0,2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177]),
  new Uint32Array([6291456,6291456,6291456,6291456,10502115,10502178,10502211,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456]),
  new Uint32Array([2190305,6291456,2190337,6291456,2190369,6291456,2190401,6291456,2190433,6291456,2190465,6291456,2190497,6291456,2190529,6291456]),
  new Uint32Array([2173793,2173985,2174017,6291456,2173761,2173697,6291456,2174689,6291456,2174017,2174721,6291456,6291456,2174753,2174785,2174817]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2099521,2099105,2120705,2098369,2120801,2103361,2097985,2098433,2121377,2121473,2099169,2099873,2098401,2099393,2152609,2100033]),
  new Uint32Array([2132898,2163842,2163906,2133282,2132034,2131938,2137410,2132802,2132706,2164866,2133282,2160578,2165186,2165186,6291456,6291456]),
  new Uint32Array([10500003,10500099,10500195,10500291,10500387,10500483,10500579,10500675,10500771,10500867,10500963,10501059,10501155,10501251,10501347,10501443]),
  new Uint32Array([2163458,2130978,2131074,2131266,2131362,2163522,2160130,2132066,2131010,2131106,2106018,2131618,2131298,2132034,2131938,2137410]),
  new Uint32Array([2212961,2116993,2212993,2213025,2213057,2213089,2213121,2213153,2213185,2213217,2213249,2209633,2213281,2213313,2213345,2213377]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([2113729,2113825,2113921,2114017,2114113,2114209,2114305,2114401,2114497,2114593,2114689,2114785,2114881,2114977,2115073,2115169]),
  new Uint32Array([2238177,2238209,2238241,2238273,2238305,2238337,2238337,2217537,2238369,2238401,2238433,2238465,2215649,2238497,2238529,2238561]),
  new Uint32Array([2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905]),
  new Uint32Array([6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,0,0]),
  new Uint32Array([6291456,0,6291456,2145026,0,6291456,2145090,0,6291456,6291456,0,0,23068672,0,23068672,23068672]),
  new Uint32Array([2099233,2122017,2200673,2098113,2121537,2103201,2200705,2104033,2121857,2121953,2122401,2099649,2099969,2123009,2100129,2100289]),
  new Uint32Array([6291456,23068672,6291456,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,23068672,23068672,0,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0]),
  new Uint32Array([2187681,2187713,2187745,2187777,2187809,2187841,2187873,2187905,2187937,2187969,2188001,2188033,2188065,2188097,2188129,2188161]),
  new Uint32Array([0,10554498,10554562,10554626,10554690,10554754,10554818,10554882,10554946,10555010,10555074,6291456,6291456,0,0,0]),
  new Uint32Array([2235170,2235234,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0]),
  new Uint32Array([2181153,6291456,2188897,6291456,6291456,2188929,6291456,6291456,6291456,6291456,6291456,6291456,2111905,2100865,2188961,2188993]),
  new Uint32Array([2100833,2100897,0,0,2101569,2101697,2101825,2101953,2102081,2102209,10575617,2187041,10502177,10489601,10489697,2112289]),
  new Uint32Array([6291456,2172833,6291456,2172865,2172897,2172929,2172961,6291456,2172993,6291456,2173025,6291456,2173057,6291456,2173089,6291456]),
  new Uint32Array([6291456,0,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,0,0,23068672,6291456,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,2190721]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,23068672,6291456,6291456]),
  new Uint32Array([2184993,6291456,2185025,6291456,2185057,6291456,2185089,6291456,2185121,6291456,2185153,6291456,2185185,6291456,2185217,6291456]),
  new Uint32Array([2115265,2115361,2115457,2115553,2115649,2115745,2115841,2115937,2116033,2116129,2116225,2116321,2150658,2150722,2200225,6291456]),
  new Uint32Array([2168321,6291456,2168353,6291456,2168385,6291456,2168417,6291456,2168449,6291456,2168481,6291456,2168513,6291456,2168545,6291456]),
  new Uint32Array([23068672,23068672,23068672,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,0,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456,0,6291456,0,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,2186625,0,0,6291456,6291456,2186657,2186689,2186721,2173505,0,10496067,10496163,10496259]),
  new Uint32Array([2178785,6291456,2178817,6291456,2178849,6291456,2178881,6291456,2178913,6291456,2178945,6291456,2178977,6291456,2179009,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0]),
  new Uint32Array([2097152,0,0,0,2097152,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,0,2197857,2197889,2197921,2197953,2197985,2198017,0,0,2198049,2198081,2198113,2198145,2198177,2198209]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2098209,2167297,2111137,6291456]),
  new Uint32Array([2171393,6291456,2171425,6291456,2171457,6291456,2171489,6291456,2171521,6291456,2171553,6291456,2171585,6291456,2171617,6291456]),
  new Uint32Array([2206753,2206785,2195457,2206817,2206849,2206881,2206913,2197153,2197153,2206945,2117857,2206977,2207009,2207041,2207073,2207105]),
  new Uint32Array([0,0,0,0,0,0,0,23068672,0,0,0,0,2144834,2144898,0,2144962]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,23068672]),
  new Uint32Array([2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,0,2105505,2098241]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,2202049,6291456,2202081,6291456,2202113,6291456,2202145,6291456,2202177,6291456,2202209,6291456,2202241,6291456]),
  new Uint32Array([10501155,10501251,10501347,10501443,10501539,10501635,10501731,10501827,10501923,10502019,2141731,2105505,2098177,2155586,2166530,0]),
  new Uint32Array([2102081,2102209,2100833,2100737,2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209,2100833,2100737,2098337,2101441]),
  new Uint32Array([2146882,2146946,2147010,2147074,2147138,2147202,2147266,2147330,2146882,2146946,2147010,2147074,2147138,2147202,2147266,2147330]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([10502307,10502403,10502499,10502595,10502691,10502787,10502883,10502979,10503075,10503171,10503267,10503363,10503459,10503555,10503651,10503747]),
  new Uint32Array([2179937,2179969,2180001,2180033,2156545,2180065,2156577,2180097,2180129,2180161,2180193,2180225,2180257,2180289,2156737,2180321]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,0,0,0,6291456,0,0,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0]),
  new Uint32Array([2227682,2227746,2227810,2227874,2227938,2228002,2228066,2228130,2228194,2228258,2228322,2228386,2228450,2228514,2228578,2228642]),
  new Uint32Array([2105601,2169121,2108193,2170049,2181025,2181057,2112481,2108321,2108289,2181089,2170497,2100865,2181121,2173601,2173633,2173665]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2180641,6291456,6291456,6291456]),
  new Uint32Array([0,6291456,6291456,6291456,0,6291456,0,6291456,0,0,6291456,6291456,0,6291456,6291456,6291456]),
  new Uint32Array([2178273,6291456,2178305,6291456,2178337,6291456,2178369,6291456,2178401,6291456,2178433,6291456,2178465,6291456,2178497,6291456]),
  new Uint32Array([6291456,6291456,23068672,23068672,23068672,6291456,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,14680064,14680064,14680064,14680064,14680064,14680064]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456]),
  new Uint32Array([2237377,2237409,2236225,2237441,2237473,2217441,2215521,2215553,2217473,2237505,2237537,2209697,2237569,2215585,2237601,2237633]),
  new Uint32Array([2221985,2165601,2165601,2165665,2165665,2222017,2222017,2165729,2165729,2158913,2158913,2158913,2158913,2097281,2097281,2105921]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2149634,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2176897,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,2176929,6291456,2176961,6291456,2176993,6291456]),
  new Uint32Array([2172641,6291456,2172673,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2172705,2172737,6291456,2172769,2172801,6291456]),
  new Uint32Array([2099173,2104196,2121667,2099395,2121763,2152258,2152322,2098946,2152386,2121859,2121955,2099333,2122051,2104324,2099493,2122147]),
  new Uint32Array([6291456,6291456,6291456,2145794,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,2145858,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,0,0,6291456,0]),
  new Uint32Array([0,2105921,2097729,0,2097377,0,0,2106017,0,2097505,2105889,2097185,2097697,2135777,2097633,2097441]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2239074,2239138,2239201,2239233,2239265,2239297,2239329,2239361,0,2239393,2239425,2239425,2239458,2239521,2239553,2209569]),
  new Uint32Array([14680064,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,6291456,23068672]),
  new Uint32Array([2108321,2108289,2113153,2098209,2180897,2180929,2180961,2111137,2098241,2108353,2170241,2170273,2180993,2105825,6291456,2105473]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2146114,6291456,6291456,6291456,0,0,0]),
  new Uint32Array([2105921,2105921,2105921,2222049,2222049,2130977,2130977,2130977,2130977,2160065,2160065,2160065,2160065,2097729,2097729,2097729]),
  new Uint32Array([2218145,2214785,2207937,2218177,2218209,2192993,2210113,2212769,2218241,2218273,2216129,2218305,2216161,2218337,2218369,2218401]),
  new Uint32Array([0,0,0,2156546,2156610,2156674,2156738,2156802,0,0,0,0,0,2156866,23068672,2156930]),
  new Uint32Array([23068672,23068672,23068672,0,0,0,0,23068672,23068672,0,0,23068672,23068672,23068672,0,0]),
  new Uint32Array([2213409,2213441,2213473,2213505,2213537,2213569,2213601,2213633,2213665,2195681,2213697,2213729,2213761,2213793,2213825,2213857]),
  new Uint32Array([2100033,2099233,2122017,2200673,2098113,2121537,2103201,2200705,2104033,2121857,2121953,2122401,2099649,2099969,2123009,2100129]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2201857,6291456,2201889,6291456,2201921,6291456,2201953,6291456,2201985,6291456,2202017,6291456,2176193,2176257,23068672,23068672]),
  new Uint32Array([6291456,6291456,23068672,23068672,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2188193,2188225,2188257,2188289,2188321,2188353,2188385,2188417,2188449,2188481,2188513,2188545,2188577,2188609,2188641,0]),
  new Uint32Array([10554529,2221089,0,10502113,10562017,10537921,10538049,2221121,2221153,0,0,0,0,0,0,0]),
  new Uint32Array([2213889,2213921,2213953,2213985,2214017,2214049,2214081,2194177,2214113,2214145,2214177,2214209,2214241,2214273,2214305,2214337]),
  new Uint32Array([2166978,2167042,2099169,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2180545,6291456,6291456,6291456]),
  new Uint32Array([10518915,10519011,10519107,10519203,2162242,2162306,2159554,2162370,2159362,2159618,2105922,2162434,2159746,2162498,2159810,2159874]),
  new Uint32Array([2161730,2161794,2135586,2161858,2161922,2137186,2131810,2160290,2135170,2161986,2137954,2162050,2162114,2162178,10518723,10518819]),
  new Uint32Array([10506627,10506723,10506819,10506915,10507011,10507107,10507203,10507299,10507395,10507491,10507587,10507683,10507779,10507875,10507971,10508067]),
  new Uint32Array([6291456,23068672,23068672,23068672,0,23068672,23068672,0,0,0,0,0,23068672,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0]),
  new Uint32Array([2175873,2175905,2175937,2175969,2176001,2176033,2176065,2176097,2176129,2176161,2176193,2176225,2176257,2176289,2176321,2176353]),
  new Uint32Array([2140006,2140198,2140390,2140582,2140774,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,23068672,23068672,23068672]),
  new Uint32Array([2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241]),
  new Uint32Array([0,23068672,0,0,0,0,0,0,0,2145154,2145218,2145282,6291456,0,2145346,0]),
  new Uint32Array([0,0,0,0,10531458,10495395,2148545,2143201,2173473,2148865,2173505,0,2173537,0,2173569,2149121]),
  new Uint32Array([10537282,10495683,2148738,2148802,2148866,0,6291456,2148930,2186593,2173473,2148737,2148865,2148802,10495779,10495875,10495971]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2215425,2215457,2215489,2215521,2215553,2215585,2215617,2215649,2215681,2215713,2215745,2215777,2192033,2215809,2215841,2215873]),
  new Uint32Array([2242049,2242081,2242113,2242145,2242177,2242209,2242241,2242273,2215937,2242305,2242338,2242401,2242433,2242465,2242497,2216001]),
  new Uint32Array([10554529,2221089,0,0,10562017,10502113,10538049,10537921,2221185,10489601,10489697,10609889,10609921,2141729,2141793,10610273]),
  new Uint32Array([2141923,2142019,2142115,2142211,2142307,2142403,2142499,2142595,2142691,0,0,0,0,0,0,0]),
  new Uint32Array([0,2221185,2221217,10609857,10609857,10489601,10489697,10609889,10609921,2141729,2141793,2221345,2221377,2221409,2221441,2187105]),
  new Uint32Array([6291456,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,18923970,23068672,23068672,23068672,0,6291456,6291456]),
  new Uint32Array([2183105,6291456,2183137,6291456,2183169,6291456,2183201,6291456,2183233,6291456,2183265,6291456,2183297,6291456,2183329,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0]),
  new Uint32Array([23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456]),
  new Uint32Array([2134434,2134818,2097666,2097186,2097474,2097698,2105986,2131586,2132450,2131874,2131778,2135970,2135778,2161602,2136162,2161666]),
  new Uint32Array([2236865,2236897,2236930,2236993,2237025,2235681,2237058,2237121,2237153,2237185,2237217,2217281,2237250,2191233,2237313,2237345]),
  new Uint32Array([2190049,6291456,2190081,6291456,2190113,6291456,2190145,6291456,2190177,6291456,2190209,6291456,2190241,6291456,2190273,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2101922,2102050,2102178,2102306,10498755,10498851,10498947,10499043,10499139,10499235,10499331,10499427,10499523,10489604,10489732,10489860]),
  new Uint32Array([2166914,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0]),
  new Uint32Array([2181601,2170561,2181633,2181665,2170753,2181697,2172897,2170881,2181729,2170913,2172929,2113441,2181761,2181793,2171009,2173761]),
  new Uint32Array([0,2105921,2097729,2106081,0,2097601,2162337,2106017,2133281,2097505,0,2097185,2097697,2135777,2097633,2097441]),
  new Uint32Array([6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,0,0,0,0]),
  new Uint32Array([2248001,2248033,2248066,2248130,2248193,2248226,2248289,2248322,2248385,2248417,2216673,2248450,2248514,2248577,2248610,2248673]),
  new Uint32Array([6291456,6291456,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,0,0,0]),
  new Uint32Array([2169729,6291456,2169761,6291456,2169793,6291456,2169825,6291456,2169857,2169889,6291456,2169921,6291456,2143329,6291456,2098305]),
  new Uint32Array([2162178,2163202,2163266,2135170,2136226,2161986,2137954,2159426,2159490,2163330,2159554,2163394,2159682,2139522,2136450,2159746]),
  new Uint32Array([2173953,2173985,0,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2174209,2174241,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,4271169,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2174273]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,0,0,0,0,0,0,0,6291456,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,2190785,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2189793,6291456,2189825,6291456,2189857,6291456,2189889,6291456,2189921,6291456,2189953,6291456,2189985,6291456,2190017,6291456]),
  new Uint32Array([2105601,2112289,2108193,2112481,2112577,0,2098305,2108321,2108289,2100865,2113153,2108481,2113345,0,2098209,2111137]),
  new Uint32Array([2172129,6291456,2172161,6291456,2172193,6291456,2172225,6291456,2172257,6291456,2172289,6291456,2172321,6291456,2172353,6291456]),
  new Uint32Array([2214753,6291456,2214785,6291456,6291456,2214817,2214849,2214881,2214913,2214945,2214977,2215009,2215041,2215073,2194401,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,6291456,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([0,0,0,0,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([10610305,10610337,10575617,2221761,10610401,10610433,10502177,0,10610465,10610497,10610529,10610561,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,23068672,0,0,0,0,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2187105,2187137,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2199393,2199425,2199457,2199489,2199521,2199553,2199585,2199617,2199649,2199681,2199713,2199745,2199777,2199809,2199841,0]),
  new Uint32Array([2217249,2217281,2217313,2217345,2217377,2217409,2217441,2217473,2215617,2217505,2217537,2217569,2214753,2217601,2217633,2217665]),
  new Uint32Array([2170273,2170305,6291456,2170337,2170369,6291456,2170401,2170433,2170465,6291456,6291456,6291456,2170497,2170529,6291456,2170561]),
  new Uint32Array([2188673,6291456,2188705,2188737,2188769,6291456,6291456,2188801,6291456,2188833,6291456,2188865,6291456,2180929,2181505,2180897]),
  new Uint32Array([10489988,10490116,10490244,10490372,10490500,10490628,10490756,10490884,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2147393,2147457,2147521,2147585,2147649,2147713,2147777,2147841]),
  new Uint32Array([23068672,23068672,0,23068672,23068672,0,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0]),
  new Uint32Array([2241153,2241185,2241217,2215809,2241250,2241313,2241345,2241377,2217921,2241377,2241409,2215873,2241441,2241473,2241505,2241537]),
  new Uint32Array([23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2220417,2220417,2220449,2220449,2220481,2220481,2220513,2220513,2220545,2220545,2220577,2220577,2220609,2220609,2220641,2220641]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,2144002,0,6291456,6291456,0,0,6291456,6291456,6291456]),
  new Uint32Array([2167105,2167137,2167169,2167201,2167233,2167265,2167297,2167329,2167361,2167393,2167425,2167457,2167489,2167521,2167553,2167585]),
  new Uint32Array([10575521,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193]),
  new Uint32Array([2234146,2234210,2234274,2234338,2234402,2234466,2234530,2234594,2234658,2234722,2234786,2234850,2234914,2234978,2235042,2235106]),
  new Uint32Array([0,0,0,0,0,0,0,2180577,0,0,0,0,0,2180609,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,0,0,6291456,6291456]),
  new Uint32Array([2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2242529,2242561,2242593,2242625,2242657,2242689,2242721,2242753,2207937,2218177,2242785,2242817,2242849,2242882,2242945,2242977]),
  new Uint32Array([2118049,2105345,2118241,2105441,2118433,2118529,2118625,2118721,2118817,2200257,2200289,2191809,2200321,2200353,2200385,2200417]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0]),
  new Uint32Array([2185505,6291456,2185537,6291456,2185569,6291456,2185601,6291456,2185633,6291456,2185665,6291456,2185697,6291456,2185729,6291456]),
  new Uint32Array([2231970,2232034,2232098,2232162,2232226,2232290,2232354,2232418,2232482,2232546,2232610,2232674,2232738,2232802,2232866,2232930]),
  new Uint32Array([2218625,2246402,2246466,2246530,2246594,2246657,2246689,2246689,2218657,2219681,2246721,2246753,2246785,2246818,2246881,2208481]),
  new Uint32Array([2197025,2197057,2197089,2197121,2197153,2197185,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2219137,2216961,2219169,2219201,2219233,2219265,2219297,2217025,2215041,2219329,2217057,2219361,2217089,2219393,2197153,2219426]),
  new Uint32Array([23068672,23068672,23068672,0,0,0,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,0,0]),
  new Uint32Array([2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713]),
  new Uint32Array([2243522,2243585,2243617,2243649,2243681,2210113,2243713,2243746,2243810,2243874,2243937,2243970,2244033,2244065,2244097,2244129]),
  new Uint32Array([2178017,6291456,2178049,6291456,2178081,6291456,2178113,6291456,2178145,6291456,2178177,6291456,2178209,6291456,2178241,6291456]),
  new Uint32Array([10553858,2165314,10518722,6291456,10518818,0,10518914,2130690,10519010,2130786,10519106,2130882,10519202,2165378,10554050,2165506]),
  new Uint32Array([0,0,2135491,2135587,2135683,2135779,2135875,2135971,2135971,2136067,2136163,2136259,2136355,2136355,2136451,2136547]),
  new Uint32Array([23068672,23068672,23068672,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2220033,2220033,2220065,2220065,2220065,2220065,2220097,2220097,2220097,2220097,2220129,2220129,2220129,2220129,2220161,2220161]),
  new Uint32Array([6291456,6291456,6291456,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,23068672,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2100897,2100898,2100899,2150018,2100865,2100866,2100867,2100868,2150082,2108481,2109858,2109859,2105569,2105505,2098241,2105601]),
  new Uint32Array([2097217,2097505,2097505,2097505,2097505,2165570,2165570,2165634,2165634,2165698,2165698,2097858,2097858,0,0,2097152]),
  new Uint32Array([23068672,6291456,23068672,23068672,23068672,6291456,6291456,23068672,23068672,6291456,6291456,6291456,6291456,6291456,23068672,23068672]),
  new Uint32Array([23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([10503843,10503939,10504035,10504131,10504227,10504323,10504419,10504515,10504611,10504707,10504803,10504899,10504995,10491140,10491268,0]),
  new Uint32Array([2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889,2173921,2173953,2173985,2173761,2174017,2174049]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2134145,2097153,2134241,2105953,2132705,2130977,2160065,2131297,2162049,2133089,2160577,2133857,2235297,2220769,2235329,2235361]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2222401,2222433,2222465,10531394,2222497,2222529,2222561,0,2222593,2222625,2222657,2222689,2222721,2222753,2222785,0]),
  new Uint32Array([2184481,6291456,2184513,6291456,2184545,6291456,2184577,6291456,2184609,6291456,2184641,6291456,2184673,6291456,2184705,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,23068672,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2105570,2156034,2126947,2156098,2153666,2127043,2127139,2156162,0,2127235,2156226,2156290,2156354,2156418,2127331,2127427]),
  new Uint32Array([2215905,2207041,2153185,2241569,2241601,2241633,2241665,2241697,2241730,2241793,2241825,2241857,2241889,2241921,2241954,2242017]),
  new Uint32Array([2203777,6291456,2203809,6291456,2203841,6291456,2203873,6291456,2203905,6291456,2173121,2180993,2181249,2203937,2181313,0]),
  new Uint32Array([2168577,6291456,2168609,6291456,2168641,6291456,2168673,6291456,2168705,6291456,2168737,6291456,2168769,6291456,2168801,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,23068672,23068672,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,0,23068672,23068672,23068672,0,0]),
  new Uint32Array([2210113,2195521,2210145,2210177,2210209,2210241,2210273,2210305,2210337,2210369,2210401,2210433,2210465,2210497,2210529,2210561]),
  new Uint32Array([6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0]),
  new Uint32Array([2228706,2228770,2228834,2228898,2228962,2229026,2229090,2229154,2229218,2229282,2229346,2229410,2229474,2229538,2229602,2229666]),
  new Uint32Array([23068672,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,0,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,18874368,18874368,18874368,0,0]),
  new Uint32Array([2133089,2133281,2133281,2133281,2133281,2160577,2160577,2160577,2160577,2097441,2097441,2097441,2097441,2133857,2133857,2133857]),
  new Uint32Array([6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2173825,2153473,2173857,2173889,2173921,2173953,2173985,2174017,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233089]),
  new Uint32Array([2178529,6291456,2178561,6291456,2178593,6291456,2178625,6291456,2178657,6291456,2178689,6291456,2178721,6291456,2178753,6291456]),
  new Uint32Array([2221025,2221025,2221057,2221057,2159329,2159329,2159329,2159329,2097217,2097217,2158914,2158914,2158978,2158978,2159042,2159042]),
  new Uint32Array([2208161,2208193,2208225,2208257,2194433,2208289,2208321,2208353,2208385,2208417,2208449,2208481,2208513,2208545,2208577,2208609]),
  new Uint32Array([2169217,6291456,2169249,6291456,2169281,6291456,2169313,6291456,2169345,6291456,2169377,6291456,2169409,6291456,2169441,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456]),
  new Uint32Array([2133187,2133283,2133283,2133379,2133475,2133571,2133667,2133667,2133763,2133859,2133955,2134051,2134147,2134147,2134243,2134339]),
  new Uint32Array([2197697,2114113,2114209,2197729,2197761,2114305,2197793,2114401,2114497,2197825,2114593,2114689,2114785,2114881,2114977,0]),
  new Uint32Array([2193089,2193121,2193153,2193185,2117665,2117569,2193217,2193249,2193281,2193313,2193345,2193377,2193409,2193441,2193473,2193505]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2184225,6291456,2184257,6291456,2184289,6291456,2184321,6291456,2184353,6291456,2184385,6291456,2184417,6291456,2184449,6291456]),
  new Uint32Array([2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2100833,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2098657,2098049,2200737,2123489,2123681,2200769,2098625,2100321,2098145,2100449,2098017,2098753,2200801,2200833,2200865,0]),
  new Uint32Array([23068672,23068672,23068672,0,0,0,0,0,0,0,0,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0]),
  new Uint32Array([2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,0,2098241,2108353,2108417,2105825,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2181153,2105505,2181185,2167617,2180993]),
  new Uint32Array([2160002,2160066,2160130,2160194,2160258,2132066,2131010,2131106,2106018,2131618,2160322,2131298,2132034,2131938,2137410,2132226]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,6291456]),
  new Uint32Array([2183617,6291456,2183649,6291456,2183681,6291456,2183713,6291456,2183745,6291456,2183777,6291456,2183809,6291456,2183841,6291456]),
  new Uint32Array([0,6291456,6291456,0,6291456,0,0,6291456,6291456,0,6291456,0,0,6291456,0,0]),
  new Uint32Array([2250977,2251009,2251041,2251073,2195009,2251106,2251169,2251201,2251233,2251265,2251297,2251330,2251394,2251457,2251489,2251521]),
  new Uint32Array([2205729,2205761,2205793,2205825,2205857,2205889,2205921,2205953,2205985,2206017,2206049,2206081,2206113,2206145,2206177,2206209]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2143170,2168993,6291456,2169025,6291456,2169057,6291456,2169089,6291456,2143234,2169121,6291456,2169153,6291456,2169185,6291456]),
  new Uint32Array([23068672,23068672,2190689,6291456,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2248706,2248769,2248801,2248833,2248865,2248897,2248929,2248962,2249026,2249090,2249154,2240705,2249217,2249249,2249281,2249313]),
  new Uint32Array([10485857,6291456,6291456,6291456,6291456,6291456,6291456,6291456,10495394,6291456,2098209,6291456,6291456,2097152,6291456,10531394]),
  new Uint32Array([0,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,0]),
  new Uint32Array([14680064,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2173985,2173953,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889]),
  new Uint32Array([6291456,2186977,6291456,6291456,6291456,6291456,6291456,10537858,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2209601,2209633,2209665,2209697,2209729,2209761,2209793,2209825,2209857,2209889,2209921,2209953,2209985,2210017,2210049,2210081]),
  new Uint32Array([10501539,10501635,10501731,10501827,10501923,10502019,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905]),
  new Uint32Array([2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889,2173921,2173953,2173985,2174017,2174017,2174049]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([6291456,6291456,23068672,23068672,23068672,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2194561,2194593,2194625,2119777,2119873,2194657,2194689,2194721,2194753,2194785,2194817,2194849,2194881,2194913,2194945,2194977]),
  new Uint32Array([2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569]),
  new Uint32Array([2222818,2222882,2222946,2223010,2223074,2223138,2223202,2223266,2223330,2223394,2223458,2223522,2223586,2223650,2223714,2223778]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672]),
  new Uint32Array([0,2179553,2179585,2179617,2179649,2144001,2179681,2179713,2179745,2179777,2179809,2156705,2179841,2156833,2179873,2179905]),
  new Uint32Array([6291456,23068672,6291456,2145602,23068672,23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,6291456,0,0]),
  new Uint32Array([2196513,2196545,2196577,2196609,2196641,2196673,2196705,2196737,2196769,2196801,2196833,2196865,2196897,2196929,2196961,2196993]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2177281,6291456,2177313,6291456,2177345,6291456,2177377,6291456,2177409,6291456,2177441,6291456,2177473,6291456,2177505,6291456]),
  new Uint32Array([2187137,2221473,2221505,2221537,2221569,6291456,6291456,10610209,10610241,10537986,10537986,10537986,10537986,10609857,10609857,10609857]),
  new Uint32Array([2243009,2243041,2216033,2243074,2243137,2243169,2243201,2219617,2243233,2243265,2243297,2243329,2243362,2243425,2243457,2243489]),
  new Uint32Array([10485857,10485857,10485857,10485857,10485857,10485857,10485857,10485857,10485857,10485857,10485857,2097152,4194304,4194304,0,0]),
  new Uint32Array([2143042,6291456,2143106,2143106,2168833,6291456,2168865,6291456,6291456,2168897,6291456,2168929,6291456,2168961,6291456,2143170]),
  new Uint32Array([6291456,6291456,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2204193,2204225,2204257,2204289,2204321,2204353,2204385,2204417,2204449,2204481,2204513,2204545,2204577,2204609,2204641,2204673]),
  new Uint32Array([2202753,6291456,2202785,6291456,2202817,6291456,2202849,6291456,2202881,6291456,2202913,6291456,2202945,6291456,2202977,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177,2098305,2108321]),
  new Uint32Array([2147394,2147458,2147522,2147586,2147650,2147714,2147778,2147842,2147394,2147458,2147522,2147586,2147650,2147714,2147778,2147842]),
  new Uint32Array([2253313,2253346,2253409,2253441,2253473,2253505,2253537,2253569,2253601,2253634,2219393,2253697,2253729,2253761,2253793,2253825]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([2162562,2162626,2131362,2162690,2159938,2160002,2162754,2162818,2160130,2162882,2160194,2160258,2160834,2160898,2161026,2161090]),
  new Uint32Array([2175361,2175393,2175425,2175457,2175489,2175521,2175553,2175585,2175617,2175649,2175681,2175713,2175745,2175777,2175809,2175841]),
  new Uint32Array([2253858,2253921,2253954,2254018,2254082,2196737,2254145,2196865,2254177,2254209,2254241,2254273,2197025,2254306,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2202113,2204129,2188705,2204161]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,0,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([2173985,2174017,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233089,2173697,2173761,2173793,2174113,2173985,2173953]),
  new Uint32Array([2101569,2101697,2101825,2101953,2102081,2102209,2100833,2100737,2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209]),
  new Uint32Array([2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241,0,2108417,0,2111713,2100897,2111905]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0]),
  new Uint32Array([2175425,2175489,2175809,2175905,2175937,2175937,2176193,2176417,2180865,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,2143298,2143298,2143298,2143362,2143362,2143362,2143426,2143426,2143426,2171105,6291456,2171137]),
  new Uint32Array([2120162,2120258,2151618,2151682,2151746,2151810,2151874,2151938,2152002,2120035,2120131,2120227,2152066,2120323,2152130,2120419]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2195361,2142433,2236065,2236097,2236129,2236161,2118241,2117473,2236193,2236225,2236257,2236289,0,0,0,0]),
  new Uint32Array([2189281,6291456,2189313,6291456,2189345,6291456,2189377,6291456,2189409,6291456,2189441,6291456,2189473,6291456,2189505,6291456]),
  new Uint32Array([6291456,6291456,2145922,6291456,6291456,6291456,6291456,2145986,6291456,6291456,6291456,6291456,2146050,6291456,6291456,6291456]),
  new Uint32Array([2100833,2100737,2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209,10502113,10562017,10610401,10502177,10610433,10538049]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,2186401,0,2186433,0,2186465,0,2186497]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,23068672,23068672,23068672]),
  new Uint32Array([0,0,2198241,2198273,2198305,2198337,2198369,2198401,0,0,2198433,2198465,2198497,0,0,0]),
  new Uint32Array([6291456,0,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,0,6291456,0,23068672,23068672,23068672,23068672,23068672,23068672,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,0,0,23068672,6291456,23068672,23068672]),
  new Uint32Array([0,2105921,2097729,0,2097377,0,0,2106017,2133281,2097505,2105889,0,2097697,2135777,2097633,2097441]),
  new Uint32Array([2197889,2197921,2197953,2197985,2198017,2198049,2198081,2198113,2198145,2198177,2198209,2198241,2198273,2198305,2198337,2198369]),
  new Uint32Array([2132514,2132610,2160386,2133090,2133186,2160450,2160514,2133282,2160578,2133570,2106178,2160642,2133858,2160706,2160770,2134146]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,23068672,0,0,0,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,23068672,23068672,6291456,23068672,23068672,6291456,23068672,0,0,0,0,0,0,0,0]),
  new Uint32Array([2184737,6291456,2184769,6291456,2184801,6291456,2184833,6291456,2184865,6291456,2184897,6291456,2184929,6291456,2184961,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,0,6291456,6291456,6291456,6291456,0,6291456]),
  new Uint32Array([6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,23068672,23068672,23068672,6291456,23068672,23068672,23068672,23068672,23068672,0,0]),
  new Uint32Array([6291456,6291456,6291456,2186753,6291456,6291456,6291456,6291456,2186785,2186817,2186849,2173569,2186881,10496355,10495395,10575521]),
  new Uint32Array([0,0,2097729,0,0,0,0,2106017,0,2097505,0,2097185,0,2135777,2097633,2097441]),
  new Uint32Array([2189537,6291456,2189569,6291456,2189601,6291456,2189633,6291456,2189665,6291456,2189697,6291456,2189729,6291456,2189761,6291456]),
  new Uint32Array([2202497,6291456,2202529,6291456,2202561,6291456,2202593,6291456,2202625,6291456,2202657,6291456,2202689,6291456,2202721,6291456]),
  new Uint32Array([2245217,2218369,2245249,2245282,2245345,2245377,2245410,2245474,2245537,2245569,2245601,2245633,2245665,2245665,2245697,2245729]),
  new Uint32Array([6291456,0,23068672,23068672,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,0,0,0,0,0,0,23068672,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,6291456,23068672,6291456,23068672,6291456,6291456,6291456,6291456,23068672,23068672]),
  new Uint32Array([0,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2097281,2105921,2097729,2106081,2097377,2097601,2162337,2106017,2133281,2097505,0,2097185,2097697,2135777,2097633,2097441]),
  new Uint32Array([2176641,6291456,2176673,6291456,2176705,6291456,2176737,6291456,2176769,6291456,2176801,6291456,2176833,6291456,2176865,6291456]),
  new Uint32Array([2174145,2174177,2149057,2233089,2173697,2173761,2173793,2174113,2173985,2173953,2174369,2174369,0,0,2100833,2100737]),
  new Uint32Array([2116513,2190817,2190849,2190881,2190913,2190945,2116609,2190977,2191009,2191041,2191073,2117185,2191105,2191137,2191169,2191201]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,6291456,6291456,6291456]),
  new Uint32Array([0,0,0,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456]),
  new Uint32Array([2167617,2167649,2167681,2167713,2167745,2167777,2167809,6291456,2167841,2167873,2167905,2167937,2167969,2168001,2168033,4240130]),
  new Uint32Array([2165122,2163970,2164034,2164098,2164162,2164226,2164290,2164354,2164418,2164482,2164546,2133122,2134562,2132162,2132834,2136866]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,2186209,2186241,2186273,2186305,2186337,2186369,0,0]),
  new Uint32Array([2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,14680064,14680064,14680064,14680064,14680064]),
  new Uint32Array([0,0,23068672,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456]),
  new Uint32Array([0,10537921,10610689,10610273,10610497,10610529,10610305,10610721,10489601,10489697,10610337,10575617,10554529,2221761,2197217,10496577]),
  new Uint32Array([2105473,2105569,2105601,2112289,0,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441]),
  new Uint32Array([2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481]),
  new Uint32Array([2125346,2153410,2153474,2127394,2153538,2153602,2153666,2153730,2105507,2105476,2153794,2153858,2153922,2153986,2154050,2105794]),
  new Uint32Array([2200449,2119681,2200481,2153313,2199873,2199905,2199937,2200513,2200545,2200577,2200609,2119105,2119201,2119297,2119393,2119489]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2175777,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2222273,2197217,2221473,2221505,2221089,2222305,2200865,2099681,2104481,2222337,2099905,2120737,2222369,2103713,2100225,2098785]),
  new Uint32Array([2201377,6291456,2201409,6291456,2201441,6291456,2201473,6291456,2201505,6291456,2201537,6291456,2201569,6291456,6291456,23068672]),
  new Uint32Array([2174081,2174113,2174145,2174177,2149057,2233057,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793]),
  new Uint32Array([2200897,6291456,2200929,6291456,2200961,6291456,2200993,6291456,2201025,6291456,2180865,6291456,2201057,6291456,2201089,6291456]),
  new Uint32Array([0,0,0,0,0,23068672,23068672,0,6291456,6291456,6291456,0,0,0,0,0]),
  new Uint32Array([2161154,2161410,2138658,2161474,2161538,2097666,2097186,2097474,2162946,2132450,2163010,2163074,2136162,2163138,2161666,2161730]),
  new Uint32Array([2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889,2173921,2173953]),
  new Uint32Array([0,0,0,0,0,0,23068672,23068672,0,0,0,0,2145410,2145474,0,6291456]),
  new Uint32Array([2244161,2216065,2212769,2244193,2244225,2244257,2244290,2244353,2244385,2244417,2244449,2218273,2244481,2244514,2244577,2244609]),
  new Uint32Array([2125730,2125699,2125795,2125891,2125987,2154114,2154178,2154242,2154306,2154370,2154434,2154498,2126082,2126178,2126274,2126083]),
  new Uint32Array([2237665,2237697,2237697,2237697,2237730,2237793,2237825,2237857,2237890,2237953,2237985,2238017,2238049,2238081,2238113,2238145]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2150146,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,0,23068672,23068672,0,0,23068672,23068672,23068672,0,0]),
  new Uint32Array([2214369,2238593,2238625,2238657,2238689,2238721,2238753,2238785,2238817,2238850,2238913,2238945,2238977,2235457,2239009,2239041]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([2252066,2252130,2252193,2252225,2252257,2252290,2252353,2252385,2252417,2252449,2252481,2252513,2252545,2252578,2252641,2252673]),
  new Uint32Array([2197697,2114113,2114209,2197729,2197761,2114305,2197793,2114401,2114497,2197825,2114593,2114689,2114785,2114881,2114977,2197857]),
  new Uint32Array([2224866,2224930,2224994,2225058,2225122,2225186,2225250,2225314,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2219490,2219554,2219617,2219649,2219681,2219714,2219778,2219842,2219905,2219937,0,0,0,0,0,0]),
  new Uint32Array([6291456,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456]),
  new Uint32Array([2113345,2113441,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289]),
  new Uint32Array([2174081,2174113,2174145,2174177,2149057,2233089,2173697,2173761,2173793,2174113,2173985,2173953,2148481,2173601,2173633,2173665]),
  new Uint32Array([2220161,2220161,2220193,2220193,2220193,2220193,2220225,2220225,2220225,2220225,2220257,2220257,2220257,2220257,2220289,2220289]),
  new Uint32Array([2192673,2192705,2192737,2192769,2192801,2192833,2192865,2118049,2192897,2117473,2117761,2192929,2192961,2192993,2193025,2193057]),
  new Uint32Array([2179297,6291456,2179329,6291456,2179361,6291456,2179393,6291456,2179425,6291456,2179457,6291456,2179489,6291456,2179521,6291456]),
  new Uint32Array([6291456,6291456,6291456,23068672,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2235745,2235777,2193633,2235809,2235841,2235873,2235905,2235937,2235969,2116513,2116705,2236001,2200513,2199905,2200545,2236033]),
  new Uint32Array([2113153,2108481,2113345,2113441,2232993,2233025,0,0,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761]),
  new Uint32Array([2170593,6291456,2170625,6291456,2170657,6291456,2170689,2170721,6291456,2170753,6291456,6291456,2170785,6291456,2170817,2170849]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2166786,2166850,0,0,0,0]),
  new Uint32Array([23068672,6291456,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([2100833,2100737,2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209,10575617,2187041,10502177,10489601,10489697,0]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2134562,2132162,2132834,2136866,2136482,2164610,2164674,2164738,2164802,2132802,2132706,2164866,2132898,2164930,2164994,2165058]),
  new Uint32Array([6291456,6291456,2098337,2101441,10531458,2153473,6291456,6291456,10531522,2100737,2108193,6291456,2106499,2106595,2106691,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2233122,2233186,2233250,2233314,2233378,2233442,2233506,2233570,2233634,2233698,2233762,2233826,2233890,2233954,2234018,2234082]),
  new Uint32Array([23068672,6291456,23068672,23068672,23068672,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2205217,2205249,2205281,2205313,2205345,2205377,2205409,2205441,2205473,2205505,2205537,2205569,2205601,2205633,2205665,2205697]),
  new Uint32Array([6291456,0,6291456,0,0,0,6291456,6291456,6291456,6291456,0,0,23068672,6291456,23068672,23068672]),
  new Uint32Array([2173601,2173761,2174081,2173569,2174241,2174113,2173953,6291456,2174305,6291456,2174337,6291456,2174369,6291456,2174401,6291456]),
  new Uint32Array([6291456,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([2152450,2152514,2099653,2104452,2099813,2122243,2099973,2152578,2122339,2122435,2122531,2122627,2122723,2104580,2122819,2152642]),
  new Uint32Array([2236385,2236417,2236449,2236482,2236545,2215425,2236577,2236609,2236641,2236673,2215457,2236705,2236737,2236770,2215489,2236833]),
  new Uint32Array([2163394,2159746,2163458,2131362,2163522,2160130,2163778,2132226,2163842,2132898,2163906,2161410,2138658,2097666,2136162,2163650]),
  new Uint32Array([2218721,2246913,2246946,2216385,2247010,2247074,2215009,2247137,2247169,2216481,2247201,2247233,2247266,2247330,2247330,0]),
  new Uint32Array([2129730,2129762,2129858,2129731,2129827,2156482,2156482,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,0,0,0,0,0,6291456,0,0]),
  new Uint32Array([2203969,2204001,2181377,2204033,2204065,6291456,2204097,6291456,0,0,0,0,0,0,0,0]),
  new Uint32Array([2169473,6291456,2169505,6291456,2169537,6291456,2169569,6291456,2169601,6291456,2169633,6291456,2169665,6291456,2169697,6291456]),
  new Uint32Array([2141542,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2220801,2220801,2220801,2220801,2220833,2220833,2220865,2220865,2220865,2220865,2220897,2220897,2220897,2220897,2139873,2139873]),
  new Uint32Array([0,0,0,0,0,23068672,23068672,0,0,0,0,0,0,0,6291456,0]),
  new Uint32Array([2214849,2218433,2218465,2218497,2218529,2218561,2214881,2218593,2218625,2218657,2218689,2218721,2218753,2216545,2218785,2218817]),
  new Uint32Array([23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0,0,0,0,6291456]),
  new Uint32Array([2136482,2164610,2164674,2164738,2164802,2132802,2132706,2164866,2132898,2164930,2164994,2165058,2165122,2132802,2132706,2164866]),
  new Uint32Array([2207649,2207681,2207713,2207745,2207777,2207809,2207841,2207873,2207905,2207937,2207969,2208001,2208033,2208065,2208097,2208129]),
  new Uint32Array([2123683,2105092,2152706,2123779,2105220,2152770,2100453,2098755,2123906,2124002,2124098,2124194,2124290,2124386,2124482,2124578]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,6291456,0,0,0,0,0,0,0,10485857]),
  new Uint32Array([6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([10508163,10508259,10508355,10508451,2200129,2200161,2192737,2200193,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2203553,6291456,2203585,6291456,6291456,6291456,2203617,6291456,2203649,6291456,2203681,6291456,2203713,6291456,2203745,6291456]),
  new Uint32Array([18884449,18884065,23068672,18884417,18884034,18921185,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,18874368]),
  new Uint32Array([2247393,2247426,2247489,2247521,2247553,2247586,2247649,2247681,2247713,2247745,2247777,2247810,2247873,2247905,2247937,2247969]),
  new Uint32Array([6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,23068672]),
  new Uint32Array([2134145,2097153,2134241,0,2132705,2130977,2160065,2131297,0,2133089,2160577,2133857,2235297,0,2235329,0]),
  new Uint32Array([2182593,6291456,2182625,6291456,2182657,6291456,2182689,6291456,2182721,6291456,2182753,6291456,2182785,6291456,2182817,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2102402,2102403,6291456,2110050]),
  new Uint32Array([2149890,2108323,2149954,6291456,2113441,6291456,2149057,6291456,2113441,6291456,2105473,2167265,2111137,2105505,6291456,2108353]),
  new Uint32Array([2219105,2219137,2195233,2251554,2251617,2251649,2251681,2251713,2251746,2251810,2251873,2251905,2251937,2251970,2252033,2219169]),
  new Uint32Array([2203009,6291456,2203041,6291456,2203073,6291456,2203105,6291456,2203137,6291456,2203169,6291456,2203201,6291456,2203233,6291456]),
  new Uint32Array([2128195,2128291,2128387,2128483,2128579,2128675,2128771,2128867,2128963,2129059,2129155,2129251,2129347,2129443,2129539,2129635]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2140964,2141156,2140966,2141158,2141350]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2225378,2225442,2225506,2225570,2225634,2225698,2225762,2225826,2225890,2225954,2226018,2226082,2226146,2226210,2226274,2226338]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137,2105505,2098241,2108353,2108417]),
  new Uint32Array([2108353,2108417,0,2105601,2108193,2157121,2157313,2157377,2157441,2100897,6291456,2108419,2173953,2173633,2173633,2173953]),
  new Uint32Array([2111713,2173121,2111905,2098177,2173153,2173185,2173217,2113153,2113345,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,2190753]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,2197249,6291456,2117377,2197281,2197313,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,0,0,0,0,0,0,23068672,0,0,0,0,0,6291456,6291456,6291456]),
  new Uint32Array([2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209,2100833,2100737,2098337,2101441,2101569,2101697,2101825,2101953]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0]),
  new Uint32Array([0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,23068672,23068672,23068672]),
  new Uint32Array([2173281,6291456,2173313,6291456,2173345,6291456,2173377,6291456,0,0,10532546,6291456,6291456,6291456,10562017,2173441]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,0,0]),
  new Uint32Array([23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2159426,2159490,2159554,2159362,2159618,2159682,2139522,2136450,2159746,2159810,2159874,2130978,2131074,2131266,2131362,2159938]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2203233,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2203265,6291456,2203297,6291456,2203329,2203361,6291456]),
  new Uint32Array([6291456,6291456,2148418,2148482,2148546,0,6291456,2148610,2186529,2186561,2148417,2148545,2148482,10495778,2143969,10495778]),
  new Uint32Array([2134146,2139426,2160962,2134242,2161218,2161282,2161346,2161410,2138658,2134722,2134434,2134818,2097666,2097346,2097698,2105986]),
  new Uint32Array([2198881,2198913,2198945,2198977,2199009,2199041,2199073,2199105,2199137,2199169,2199201,2199233,2199265,2199297,2199329,2199361]),
  new Uint32Array([0,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456]),
  new Uint32Array([10610561,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193]),
  new Uint32Array([2183873,6291456,2183905,6291456,2183937,6291456,2183969,6291456,2184001,6291456,2184033,6291456,2184065,6291456,2184097,6291456]),
  new Uint32Array([2244642,2244706,2244769,2244801,2218305,2244833,2244865,2244897,2244929,2244961,2244993,2245026,2245089,2245122,2245185,0]),
  new Uint32Array([6291456,6291456,2116513,2116609,2116705,2116801,2199873,2199905,2199937,2199969,2190913,2200001,2200033,2200065,2200097,2191009]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,2180673,2180705,2180737,2180769,2180801,2180833,0,0]),
  new Uint32Array([2098081,2099521,2099105,2120705,2098369,2120801,2103361,2097985,2098433,2121377,2121473,2099169,2099873,2098401,2099393,2152609]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2150402]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,2145666,2145730,6291456,6291456]),
  new Uint32Array([2173921,2173953,2173985,2173761,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233057,2148481,2173601,2173633,2173665]),
  new Uint32Array([2187073,6291456,6291456,6291456,6291456,2098241,2098241,2108353,2100897,2111905,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2102404,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,2100612,6291456,6291456,6291456,6291456,6291456,6291456,6291456,10485857]),
  new Uint32Array([2149057,2233057,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889]),
  new Uint32Array([2217697,2217729,2217761,2217793,2217825,2217857,2217889,2217921,2217953,2215873,2217985,2215905,2218017,2218049,2218081,2218113]),
  new Uint32Array([2211233,2218849,2216673,2218881,2218913,2218945,2218977,2219009,2216833,2219041,2215137,2219073,2216865,2209505,2219105,2216897]),
  new Uint32Array([2240097,2240129,2240161,2240193,2240225,2240257,2240289,2240321,2240353,2240386,2240449,2240481,2240513,2240545,2207905,2240578]),
  new Uint32Array([6291456,6291456,2202273,6291456,2202305,6291456,2202337,6291456,2202369,6291456,2202401,6291456,2202433,6291456,2202465,6291456]),
  new Uint32Array([0,23068672,23068672,18923394,23068672,18923458,18923522,18884099,18923586,18884195,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2201121,6291456,2201153,6291456,2201185,6291456,2201217,6291456,2201249,6291456,2201281,6291456,2201313,6291456,2201345,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,6291456]),
  new Uint32Array([2211041,2211073,2211105,2211137,2211169,2211201,2211233,2211265,2211297,2211329,2211361,2211393,2211425,2211457,2211489,2211521]),
  new Uint32Array([2181825,6291456,2181857,6291456,2181889,6291456,2181921,6291456,2181953,6291456,2181985,6291456,2182017,6291456,2182049,6291456]),
  new Uint32Array([2162337,2097633,2097633,2097633,2097633,2132705,2132705,2132705,2132705,2097153,2097153,2097153,2097153,2133089,2133089,2133089]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,2148545,6291456,2173473,6291456,2148865,6291456,2173505,6291456,2173537,6291456,2173569,6291456,2149121,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,0,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0]),
  new Uint32Array([2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889,2173921,2173953,2173985,2174017,2174017,2174049,2174081,2174113]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2207137,2207169,2207201,2207233,2207265,2207297,2207329,2207361,2207393,2207425,2207457,2207489,2207521,2207553,2207585,2207617]),
  new Uint32Array([6291456,6291456,23068672,23068672,23068672,6291456,6291456,0,23068672,23068672,0,0,0,0,0,0]),
  new Uint32Array([2198401,2198433,2198465,2198497,0,2198529,2198561,2198593,2198625,2198657,2198689,2198721,2198753,2198785,2198817,2198849]),
  new Uint32Array([2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,0,0]),
  new Uint32Array([2216385,2118721,2216417,2216449,2216481,2216513,2216545,2211233,2216577,2216609,2216641,2216673,2216705,2216737,2216737,2216769]),
  new Uint32Array([2216801,2216833,2216865,2216897,2216929,2216961,2216993,2215169,2217025,2217057,2217089,2217121,2217154,2217217,0,0]),
  new Uint32Array([2210593,2191809,2210625,2210657,2210689,2210721,2210753,2210785,2210817,2210849,2191297,2210881,2210913,2210945,2210977,2211009]),
  new Uint32Array([0,0,2105825,0,0,2111905,2105473,0,0,2112289,2108193,2112481,2112577,0,2098305,2108321]),
  new Uint32Array([0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,2097153,2134241,0,2132705,0,0,2131297,0,2133089,0,2133857,0,2220769,0,2235361]),
  new Uint32Array([14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,6291456,6291456,14680064]),
  new Uint32Array([23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0]),
  new Uint32Array([2171873,6291456,2171905,6291456,2171937,6291456,2171969,6291456,2172001,6291456,2172033,6291456,2172065,6291456,2172097,6291456]),
  new Uint32Array([2220929,2220929,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2133857,2134145,2134145,2134145,2134145,2134241,2134241,2134241,2134241,2105889,2105889,2105889,2105889,2097185,2097185,2097185]),
  new Uint32Array([2173697,2173761,2173793,2174113,2173985,2173953,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,0,10499619,10499715,10499811,10499907]),
  new Uint32Array([0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,0,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,0,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,0,23068672,23068672,23068672,0,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,6291456,23068672,23068672]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,2144322,2144386,2144450,2144514,2144578,2144642,2144706,2144770]),
  new Uint32Array([23068672,23068672,23068672,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456]),
  new Uint32Array([2113153,2108481,2113345,2113441,2098209,2111137,0,2098241,2108353,2108417,2105825,0,0,2111905,2105473,2105569]),
  new Uint32Array([2236321,2236353,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2152194,2121283,2103684,2103812,2097986,2098533,2097990,2098693,2098595,2098853,2099013,2103940,2121379,2121475,2121571,2104068]),
  new Uint32Array([2206241,2206273,2206305,2206337,2206369,2206401,2206433,2206465,2206497,2206529,2206561,2206593,2206625,2206657,2206689,2206721]),
  new Uint32Array([6291456,6291456,6291456,6291456,16777216,16777216,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,23068672,23068672,10538818,10538882,6291456,6291456,2150338]),
  new Uint32Array([6291456,6291456,6291456,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2214369,2214401,2214433,2214465,2214497,2214529,2214561,2214593,2194977,2214625,2195073,2214657,2214689,2214721,6291456,6291456]),
  new Uint32Array([2097152,2097152,2097152,2097152,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2182081,6291456,2182113,6291456,2182145,6291456,2182177,6291456,2182209,6291456,2182241,6291456,2182273,6291456,2182305,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2146881,2146945,2147009,2147073,2147137,2147201,2147265,2147329]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,23068672,23068672]),
  new Uint32Array([0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2122915,2123011,2123107,2104708,2123203,2123299,2123395,2100133,2104836,2100290,2100293,2104962,2104964,2098052,2123491,2123587]),
  new Uint32Array([23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456]),
  new Uint32Array([6291456,2171169,6291456,2171201,6291456,2171233,6291456,2171265,6291456,2171297,6291456,2171329,6291456,6291456,2171361,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,0,2148994,2149058,2149122,0,6291456,2149186,2186945,2173537,2148993,2149121,2149058,10531458,10496066,0]),
  new Uint32Array([2195009,2195041,2195073,2195105,2195137,2195169,2195201,2195233,2195265,2195297,2195329,2195361,2195393,2195425,2195457,2195489]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,0,0,6291456,6291456]),
  new Uint32Array([2182849,6291456,2182881,6291456,2182913,6291456,2182945,6291456,2182977,6291456,2183009,6291456,2183041,6291456,2183073,6291456]),
  new Uint32Array([2211553,2210081,2211585,2211617,2211649,2211681,2211713,2211745,2211777,2211809,2209569,2211841,2211873,2211905,2211937,2211969]),
  new Uint32Array([2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2166594,2127298,2166658,2142978,2141827,2166722]),
  new Uint32Array([2173985,2173761,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233057,2148481,2173601,2173633,2173665,2173697,2173729]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,0,0,2185761,2185793,2185825,2185857,2185889,2185921,0,0]),
  new Uint32Array([6291456,2148481,2173601,2173633,2173665,2173697,2173729,2148801,2173761,2143969,2173793,2173825,2153473,2173857,2173889,2173921]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,6291456]),
  new Uint32Array([0,0,0,2220961,2220961,2220961,2220961,2144193,2144193,2159201,2159201,2159265,2159265,2144194,2220993,2220993]),
  new Uint32Array([2192641,2235393,2235425,2152257,2116609,2235457,2235489,2200065,2235521,2235553,2235585,2212449,2235617,2235649,2235681,2235713]),
  new Uint32Array([2194049,2194081,2194113,2194145,2194177,2194209,2194241,2194273,2194305,2194337,2194369,2194401,2194433,2194465,2194497,2194529]),
  new Uint32Array([2196673,2208641,2208673,2208705,2208737,2208769,2208801,2208833,2208865,2208897,2208929,2208961,2208993,2209025,2209057,2209089]),
  new Uint32Array([2191681,2191713,2191745,2191777,2153281,2191809,2191841,2191873,2191905,2191937,2191969,2192001,2192033,2192065,2192097,2192129]),
  new Uint32Array([2230946,2231010,2231074,2231138,2231202,2231266,2231330,2231394,2231458,2231522,2231586,2231650,2231714,2231778,2231842,2231906]),
  new Uint32Array([14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064,14680064]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,2185953,2185985,2186017,2186049,2186081,2186113,2186145,2186177]),
  new Uint32Array([2139811,2139907,2097284,2105860,2105988,2106116,2106244,2097444,2097604,2097155,10485778,10486344,2106372,6291456,0,0]),
  new Uint32Array([2110051,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,0,0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2172385,6291456,2172417,6291456,2172449,6291456,2172481,6291456,2172513,6291456,2172545,6291456,2172577,6291456,2172609,6291456]),
  new Uint32Array([0,0,23068672,23068672,6291456,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2249345,2249377,2249409,2249441,2249473,2249505,2249537,2249570,2210209,2249633,2249665,2249697,2249729,2249761,2249793,2216769]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,6291456,6291456,6291456,6291456]),
  new Uint32Array([2187169,2187201,2187233,2187265,2187297,2187329,2187361,2187393,2187425,2187457,2187489,2187521,2187553,2187585,2187617,2187649]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([0,0,0,6291456,6291456,0,0,0,6291456,6291456,6291456,0,0,0,6291456,6291456]),
  new Uint32Array([2182337,6291456,2182369,6291456,2182401,6291456,2182433,6291456,2182465,6291456,2182497,6291456,2182529,6291456,2182561,6291456]),
  new Uint32Array([2138179,2138275,2138371,2138467,2134243,2134435,2138563,2138659,2138755,2138851,2138947,2139043,2138947,2138755,2139139,2139235]),
  new Uint32Array([23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0]),
  new Uint32Array([0,0,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2250498,2250562,2250625,2250657,2208321,2250689,2250721,2250753,2250785,2250817,2250849,2218945,2250881,2250913,2250945,0]),
  new Uint32Array([2170369,2105569,2098305,2108481,2173249,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456]),
  new Uint32Array([2100897,2111905,2105473,2105569,2105601,0,2108193,0,0,0,2098305,2108321,2108289,2100865,2113153,2108481]),
  new Uint32Array([2100897,2100897,2105569,2105569,6291456,2112289,2149826,6291456,6291456,2112481,2112577,2098177,2098177,2098177,6291456,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,6291456,6291456,6291456]),
  new Uint32Array([6291456,2169953,2169985,6291456,2170017,6291456,2170049,2170081,6291456,2170113,2170145,2170177,6291456,6291456,2170209,2170241]),
  new Uint32Array([6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([0,0,0,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2220641,2220641,2220673,2220673,2220673,2220673,2220705,2220705,2220705,2220705,2220737,2220737,2220737,2220737,2220769,2220769]),
  new Uint32Array([2127650,2127746,2127842,2127938,2128034,2128130,2128226,2128322,2128418,2127523,2127619,2127715,2127811,2127907,2128003,2128099]),
  new Uint32Array([2143969,2173793,2173825,2153473,2173857,2173889,2173921,2173953,2173985,2173761,2174017,2174049,2174081,2174113,2174145,2174177]),
  new Uint32Array([0,0,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([2204705,2204737,2204769,2204801,2204833,2204865,2204897,2204929,2204961,2204993,2205025,2205057,2205089,2205121,2205153,2205185]),
  new Uint32Array([2176385,6291456,2176417,6291456,2176449,6291456,2176481,6291456,2176513,6291456,2176545,6291456,2176577,6291456,2176609,6291456]),
  new Uint32Array([2195521,2195553,2195585,2195617,2195649,2195681,2117857,2195713,2195745,2195777,2195809,2195841,2195873,2195905,2195937,2195969]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,6291456,6291456]),
  new Uint32Array([2173921,2173953,2173985,2174017,2174017,2174049,2174081,2174113,2174145,2174177,2149057,2233089,2173697,2173761,2173793,2174113]),
  new Uint32Array([2131586,2132450,2135970,2135778,2161602,2136162,2163650,2161794,2135586,2163714,2137186,2131810,2160290,2135170,2097506,2159554]),
  new Uint32Array([2134145,2097153,2134241,2105953,2132705,2130977,2160065,2131297,2162049,2133089,2160577,2133857,0,0,0,0]),
  new Uint32Array([2116513,2116609,2116705,2116801,2116897,2116993,2117089,2117185,2117281,2117377,2117473,2117569,2117665,2117761,2117857,2117953]),
  new Uint32Array([2100737,2098337,2101441,2101569,2101697,2101825,2101953,2102081,2102209,2100802,2101154,2101282,2101410,2101538,2101666,2101794]),
  new Uint32Array([2100289,2098657,2098049,2200737,2123489,2123681,2200769,2098625,2100321,2098145,2100449,2098017,2098753,2098977,2150241,2150305]),
  new Uint32Array([6291456,6291456,6291456,0,6291456,6291456,6291456,6291456,6291456,2109955,6291456,6291456,0,0,0,0]),
  new Uint32Array([18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368,18874368]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,6291456,0,6291456,0,0]),
  new Uint32Array([2130979,2131075,2131075,2131171,2131267,2131363,2131459,2131555,2131651,2131651,2131747,2131843,2131939,2132035,2132131,2132227]),
  new Uint32Array([0,2177793,6291456,2177825,6291456,2177857,6291456,2177889,6291456,2177921,6291456,2177953,6291456,2177985,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672]),
  new Uint32Array([6291456,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2113345,0,2098209,2111137,2105505,2098241,2108353,2108417,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289]),
  new Uint32Array([2136643,2136739,2136835,2136931,2137027,2137123,2137219,2137315,2137411,2137507,2137603,2137699,2137795,2137891,2137987,2138083]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0]),
  new Uint32Array([2174433,6291456,2174465,6291456,2174497,6291456,2174529,6291456,2174561,6291456,2174593,6291456,2174625,6291456,2174657,6291456]),
  new Uint32Array([0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441]),
  new Uint32Array([10496547,10496643,2105505,2149698,6291456,10496739,10496835,2170273,6291456,2149762,2105825,2111713,2111713,2111713,2111713,2168673]),
  new Uint32Array([6291456,2143490,2143490,2143490,2171649,6291456,2171681,2171713,2171745,6291456,2171777,6291456,2171809,6291456,2171841,6291456]),
  new Uint32Array([2159106,2159106,2159170,2159170,2159234,2159234,2159298,2159298,2159298,2159362,2159362,2159362,2106401,2106401,2106401,2106401]),
  new Uint32Array([2105601,2112289,2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865,2113153,2108481,2113345,2113441,2098209,2111137]),
  new Uint32Array([2108417,2181217,2181249,2181281,2170433,2170401,2181313,2181345,2181377,2181409,2181441,2181473,2181505,2181537,2170529,2181569]),
  new Uint32Array([2218433,2245761,2245793,2245825,2245857,2245890,2245953,2245986,2209665,2246050,2246113,2246146,2246210,2246274,2246337,2246369]),
  new Uint32Array([2230754,2230818,2230882,0,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([6291456,0,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,0,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2184129,6291456,2184161,6291456,2184193,6291456,6291456,6291456,6291456,6291456,2146818,2183361,6291456,6291456,2142978,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2135170,2097506,2130691,2130787,2130883,2163970,2164034,2164098,2164162,2164226,2164290,2164354,2164418,2164482,2164546,2133122]),
  new Uint32Array([2108515,2108611,2100740,2108707,2108803,2108899,2108995,2109091,2109187,2109283,2109379,2109475,2109571,2109667,2109763,2100738]),
  new Uint32Array([2102788,2102916,2103044,2120515,2103172,2120611,2120707,2098373,2103300,2120803,2120899,2120995,2103428,2103556,2121091,2121187]),
  new Uint32Array([2158082,2158146,0,2158210,2158274,0,2158338,2158402,2158466,2129922,2158530,2158594,2158658,2158722,2158786,2158850]),
  new Uint32Array([10499619,10499715,10499811,10499907,10500003,10500099,10500195,10500291,10500387,10500483,10500579,10500675,10500771,10500867,10500963,10501059]),
  new Uint32Array([2239585,2239618,2239681,2239713,0,2191969,2239745,2239777,2192033,2239809,2239841,2239874,2239937,2239970,2240033,2240065]),
  new Uint32Array([2252705,2252738,2252801,2252833,2252865,2252897,2252930,2252994,2253057,2253089,2253121,2253154,2253217,2253250,2219361,2219361]),
  new Uint32Array([2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,2108193,2112481,2112577,2098177,2098305,2108321,2108289,2100865]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,10538050,10538114,10538178,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([2226402,2226466,2226530,2226594,2226658,2226722,2226786,2226850,2226914,2226978,2227042,2227106,2227170,2227234,2227298,2227362]),
  new Uint32Array([23068672,6291456,6291456,6291456,6291456,2144066,2144130,2144194,2144258,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,23068672,23068672,23068672,6291456,23068672,23068672]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0]),
  new Uint32Array([2124674,2124770,2123875,2123971,2124067,2124163,2124259,2124355,2124451,2124547,2124643,2124739,2124835,2124931,2125027,2125123]),
  new Uint32Array([2168065,6291456,2168097,6291456,2168129,6291456,2168161,6291456,2168193,6291456,2168225,6291456,2168257,6291456,2168289,6291456]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0]),
  new Uint32Array([23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,2100610,2100611,6291456,2107842,2107843,6291456,6291456,6291456,6291456,10537922,6291456,10537986,6291456]),
  new Uint32Array([2174849,2174881,2174913,2174945,2174977,2175009,2175041,2175073,2175105,2175137,2175169,2175201,2175233,2175265,2175297,2175329]),
  new Uint32Array([2154562,2154626,2154690,2154754,2141858,2154818,2154882,2127298,2154946,2127298,2155010,2155074,2155138,2155202,2155266,2155202]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456,6291456,6291456,6291456,6291456,23068672,0]),
  new Uint32Array([2200641,2150786,2150850,2150914,2150978,2151042,2106562,2151106,2150562,2151170,2151234,2151298,2151362,2151426,2151490,2151554]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,23068672,0,0,0,0,0,0,0,0,6291456,6291456]),
  new Uint32Array([2220289,2220289,2220321,2220321,2220321,2220321,2220353,2220353,2220353,2220353,2220385,2220385,2220385,2220385,2220417,2220417]),
  new Uint32Array([2155330,2155394,0,2155458,2155522,2155586,2105732,0,2155650,2155714,2155778,2125314,2155842,2155906,2126274,2155970]),
  new Uint32Array([23068672,23068672,23068672,23068672,23068672,6291456,6291456,23068672,23068672,6291456,23068672,23068672,23068672,23068672,6291456,6291456]),
  new Uint32Array([6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,6291456,0,0,0,0,0,0]),
  new Uint32Array([2097729,2106017,2106017,2106017,2106017,2131297,2131297,2131297,2131297,2106081,2106081,2162049,2162049,2105953,2105953,2162337]),
  new Uint32Array([2097185,2097697,2097697,2097697,2097697,2135777,2135777,2135777,2135777,2097377,2097377,2097377,2097377,2097601,2097601,2097217]),
  new Uint32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23068672]),
  new Uint32Array([2139331,2139427,2139523,2139043,2133571,2132611,2139619,2139715,0,0,0,0,0,0,0,0]),
  new Uint32Array([2174113,2174145,2100897,2098177,2108289,2100865,2173601,2173633,2173985,2174113,2174145,6291456,6291456,6291456,6291456,6291456]),
  new Uint32Array([6291456,6291456,23068672,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456,23068672,6291456,6291456,6291456,6291456]),
  new Uint32Array([23068672,23068672,18923778,23068672,23068672,23068672,23068672,18923842,23068672,23068672,23068672,23068672,18923906,23068672,23068672,23068672]),
  new Uint32Array([2134145,2097153,2134241,0,2132705,2130977,2160065,2131297,0,2133089,0,2133857,0,0,0,0]),
  new Uint32Array([6291456,6291456,6291456,6291456,0,0,0,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2177537,6291456,2177569,6291456,2177601,6291456,2177633,6291456,2177665,6291456,2177697,6291456,2177729,6291456,2177761,6291456]),
  new Uint32Array([2212481,2212513,2212545,2212577,2197121,2212609,2212641,2212673,2212705,2212737,2212769,2212801,2212833,2212865,2212897,2212929]),
  new Uint32Array([6291456,6291456,23068672,23068672,23068672,6291456,6291456,0,0,0,0,0,0,0,0,0]),
  new Uint32Array([2098241,2108353,2170209,2105825,2111713,2100897,2111905,2105473,2105569,2105601,2112289,6291456,2108193,2172417,2112481,2098177]),
  new Uint32Array([6291456,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,23068672,6291456,6291456]),
];
var blockIdxes = new Uint16Array([616,616,565,147,161,411,330,2,131,131,328,454,241,408,86,86,696,113,285,350,325,301,473,214,639,232,447,64,369,598,124,672,567,223,621,154,107,86,86,86,86,86,86,505,86,68,634,86,218,218,218,218,486,218,218,513,188,608,216,86,217,463,668,85,700,360,184,86,86,86,647,402,153,10,346,718,662,260,145,298,117,1,443,342,138,54,563,86,240,572,218,70,387,86,118,460,641,602,86,86,306,218,86,692,86,86,86,86,86,162,707,86,458,26,86,218,638,86,86,86,86,86,65,449,86,86,306,183,86,58,391,667,86,157,131,131,131,131,86,433,131,406,31,218,247,86,86,693,218,581,351,86,438,295,69,462,45,126,173,650,14,295,69,97,168,187,641,78,523,390,69,108,287,664,173,219,83,295,69,108,431,426,173,694,412,115,628,52,257,398,641,118,501,121,69,579,151,423,173,620,464,121,69,382,151,476,173,27,53,121,86,594,578,226,173,86,632,130,86,96,228,268,641,622,563,86,86,21,148,650,131,131,321,43,144,343,381,531,131,131,178,20,86,399,156,375,164,541,30,60,715,198,92,118,131,131,86,86,306,407,86,280,457,196,488,358,131,131,244,86,86,143,86,86,86,86,86,667,563,86,86,86,86,86,86,86,86,86,86,86,86,86,336,363,86,86,336,86,86,380,678,67,86,86,86,678,86,86,86,512,86,307,86,708,86,86,86,86,86,528,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,563,307,86,86,86,86,86,104,450,337,86,720,86,32,450,397,86,86,86,587,218,558,708,708,293,708,86,86,86,86,86,694,205,86,8,86,86,86,86,549,86,667,697,697,679,86,458,460,86,86,650,86,708,543,86,86,86,245,86,86,86,140,218,127,708,708,458,197,131,131,131,131,500,86,86,483,251,86,306,510,515,86,722,86,86,86,65,201,86,86,483,580,470,86,86,86,368,131,131,131,694,114,110,555,86,86,123,721,163,142,713,418,86,317,675,209,218,218,218,371,545,592,629,490,603,199,46,320,525,680,310,279,388,111,42,252,593,607,235,617,410,377,50,548,135,356,17,520,189,116,392,600,349,332,482,699,690,535,119,106,451,71,152,667,131,218,218,265,671,637,492,504,533,683,269,269,658,86,86,86,86,86,86,86,86,86,491,619,86,86,6,86,86,86,86,86,86,86,86,86,86,86,229,86,86,86,86,86,86,86,86,86,86,86,86,667,86,86,171,131,118,131,656,206,234,571,89,334,670,246,311,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,534,86,86,86,86,86,86,82,86,86,86,86,86,430,86,86,86,86,86,86,86,86,86,599,86,324,86,470,69,640,264,131,626,101,174,86,86,667,233,105,73,374,394,221,204,84,28,326,86,86,471,86,86,86,109,573,86,171,200,200,200,200,218,218,86,86,86,86,460,131,131,131,86,506,86,86,86,86,86,220,404,34,614,47,442,305,25,612,338,601,648,7,344,255,131,131,51,86,312,507,563,86,86,86,86,588,86,86,86,86,86,530,511,86,458,3,435,384,556,522,230,527,86,118,86,86,717,86,137,273,79,181,484,23,93,112,655,249,417,703,370,87,98,313,684,585,155,465,596,481,695,18,416,428,61,701,706,282,643,495,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,549,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,549,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,307,86,86,86,171,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,650,131,422,542,420,263,24,172,86,86,86,86,86,566,86,86,132,540,395,353,494,519,19,485,284,472,131,131,131,16,714,86,211,708,86,86,86,694,698,86,86,483,704,708,218,272,86,86,120,86,159,478,86,307,247,86,86,663,597,459,627,667,86,86,277,455,39,302,86,250,86,86,86,271,99,452,306,281,329,400,200,86,86,362,549,352,646,461,323,586,86,86,4,708,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,717,86,518,86,86,650,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,125,554,480,300,613,72,333,288,561,544,604,48,719,91,169,176,590,224,76,191,29,559,560,231,537,166,477,538,256,437,131,131,469,167,40,0,685,266,441,705,239,642,475,568,640,610,299,673,517,318,385,22,202,180,179,359,424,215,90,66,521,653,467,682,453,409,479,88,131,661,35,303,15,262,666,630,712,131,131,618,659,175,218,195,347,193,227,261,150,165,709,546,294,569,710,270,413,376,524,55,242,38,419,529,170,657,3,304,122,379,278,131,651,86,67,576,458,458,131,131,86,86,86,86,86,86,86,118,309,86,86,547,86,86,86,86,667,650,664,131,131,86,86,56,131,131,131,131,131,131,131,131,86,307,86,86,86,664,238,650,86,86,717,86,118,86,86,315,86,59,86,86,574,549,131,131,340,57,436,86,86,86,86,86,86,458,708,499,691,62,86,650,86,86,694,86,86,86,319,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,171,86,549,694,131,131,131,131,131,131,131,131,131,77,86,86,139,86,502,86,86,86,667,595,131,131,131,86,12,86,13,86,609,131,131,131,131,86,86,86,625,86,669,86,86,182,129,86,5,694,104,86,86,86,86,131,131,86,86,386,171,86,86,86,345,86,324,86,589,86,213,36,131,131,131,131,131,86,86,86,86,104,131,131,131,141,290,80,677,86,86,86,267,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,667,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,515,86,86,33,136,669,86,711,515,86,86,550,640,86,104,708,515,86,159,372,717,86,86,444,515,86,86,663,37,86,563,460,86,390,624,702,131,131,131,131,389,59,708,86,86,341,208,708,635,295,69,108,431,508,100,190,131,131,131,131,131,131,131,131,86,86,86,649,516,660,131,131,86,86,86,218,631,708,131,131,131,131,131,131,131,131,131,131,86,86,341,575,238,514,131,131,86,86,86,218,291,708,307,131,86,86,306,367,708,131,131,131,86,378,697,86,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,615,253,86,86,86,292,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,104,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,69,86,341,553,549,86,307,86,86,645,275,455,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,708,131,131,131,131,131,131,86,86,86,86,86,86,667,460,86,86,86,86,86,86,86,86,86,86,86,86,717,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,667,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,171,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,104,86,667,459,131,131,131,131,131,131,86,458,225,86,86,86,516,549,11,390,405,86,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,460,44,218,197,711,515,131,131,131,131,664,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,307,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,308,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,640,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,118,307,104,286,591,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,549,86,86,681,86,86,75,185,314,582,86,358,496,474,86,104,131,86,86,86,86,146,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,171,86,640,131,131,131,131,131,131,131,131,246,503,689,339,674,81,258,415,439,128,562,366,414,246,503,689,583,222,557,316,636,665,186,355,95,670,246,503,689,339,674,557,258,415,439,186,355,95,670,246,503,689,446,644,536,652,331,532,335,440,274,421,297,570,74,425,364,425,606,552,403,509,134,365,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,218,218,218,498,218,218,577,627,551,497,572,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,553,354,236,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,296,455,131,131,456,243,103,86,41,459,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,9,276,158,716,393,564,383,489,401,654,210,654,131,131,131,640,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,650,86,86,86,86,86,86,717,667,563,563,563,86,549,102,686,133,246,605,86,448,86,86,207,307,131,131,131,641,86,177,611,445,373,194,584,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,308,307,171,86,86,86,86,86,86,86,717,86,86,86,86,86,460,131,131,650,86,86,86,694,708,86,86,694,86,458,131,131,131,131,131,131,667,694,289,650,667,131,131,86,640,131,131,664,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,171,131,131,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,460,86,86,86,86,86,86,86,86,86,86,86,86,86,458,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,640,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,466,203,149,429,94,432,160,687,539,63,237,283,192,248,348,259,427,526,396,676,254,468,487,212,327,623,49,633,322,493,434,688,357,361,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131,131]);
var mappingStr = "صلى الله عليه وسلمجل جلالهキロメートルrad∕s2エスクードキログラムキロワットグラムトンクルゼイロサンチームパーセントピアストルファラッドブッシェルヘクタールマンションミリバールレントゲン′′′′1⁄10viii(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)∫∫∫∫(오전)(오후)アパートアルファアンペアイニングエーカーカラットカロリーキュリーギルダークローネサイクルシリングバーレルフィートポイントマイクロミクロンメガトンリットルルーブル株式会社kcalm∕s2c∕kgاكبرمحمدصلعمرسولریال1⁄41⁄23⁄4 ̈́ྲཱྀླཱྀ ̈͂ ̓̀ ̓́ ̓͂ ̔̀ ̔́ ̔͂ ̈̀‵‵‵a/ca/sc/oc/utelfax1⁄71⁄91⁄32⁄31⁄52⁄53⁄54⁄51⁄65⁄61⁄83⁄85⁄87⁄8xii0⁄3∮∮∮(1)(2)(3)(4)(5)(6)(7)(8)(9)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)(m)(n)(o)(p)(q)(r)(s)(t)(u)(v)(w)(x)(y)(z)::====(ᄀ)(ᄂ)(ᄃ)(ᄅ)(ᄆ)(ᄇ)(ᄉ)(ᄋ)(ᄌ)(ᄎ)(ᄏ)(ᄐ)(ᄑ)(ᄒ)(가)(나)(다)(라)(마)(바)(사)(아)(자)(차)(카)(타)(파)(하)(주)(一)(二)(三)(四)(五)(六)(七)(八)(九)(十)(月)(火)(水)(木)(金)(土)(日)(株)(有)(社)(名)(特)(財)(祝)(労)(代)(呼)(学)(監)(企)(資)(協)(祭)(休)(自)(至)pte10月11月12月ergltdアールインチウォンオンスオームカイリガロンガンマギニーケースコルナコーポセンチダースノットハイツパーツピクルフランペニヒヘルツペンスページベータボルトポンドホールホーンマイルマッハマルクヤードヤールユアンルピー10点11点12点13点14点15点16点17点18点19点20点21点22点23点24点hpabardm2dm3khzmhzghzthzmm2cm2km2mm3cm3km3kpampagpalogmilmolppmv∕ma∕m10日11日12日13日14日15日16日17日18日19日20日21日22日23日24日25日26日27日28日29日30日31日galffifflשּׁשּׂ ٌّ ٍّ َّ ُّ ِّ ّٰـَّـُّـِّتجمتحجتحمتخمتمجتمحتمخجمححميحمىسحجسجحسجىسمحسمجسممصححصممشحمشجيشمخشممضحىضخمطمحطممطميعجمعممعمىغممغميغمىفخمقمحقمملحملحيلحىلججلخملمحمحجمحيمجحمجممخممجخهمجهممنحمنحىنجمنجىنمينمىيممبخيتجيتجىتخيتخىتميتمىجميجحىجمىسخىصحيشحيضحيلجيلمييحييجييميمميقمينحيعميكمينجحمخيلجمكممجحيحجيمجيفميبحيسخينجيصلےقلے𝅘𝅥𝅮𝅘𝅥𝅯𝅘𝅥𝅰𝅘𝅥𝅱𝅘𝅥𝅲𝆹𝅥𝅮𝆺𝅥𝅮𝆹𝅥𝅯𝆺𝅥𝅯〔s〕ppv〔本〕〔三〕〔二〕〔安〕〔点〕〔打〕〔盗〕〔勝〕〔敗〕 ̄ ́ ̧ssi̇ijl·ʼndžljnjdz ̆ ̇ ̊ ̨ ̃ ̋ ιեւاٴوٴۇٴيٴक़ख़ग़ज़ड़ढ़फ़य़ড়ঢ়য়ਲ਼ਸ਼ਖ਼ਗ਼ਜ਼ਫ਼ଡ଼ଢ଼ําໍາຫນຫມགྷཌྷདྷབྷཛྷཀྵཱཱིུྲྀླྀྒྷྜྷྡྷྦྷྫྷྐྵaʾἀιἁιἂιἃιἄιἅιἆιἇιἠιἡιἢιἣιἤιἥιἦιἧιὠιὡιὢιὣιὤιὥιὦιὧιὰιαιάιᾶι ͂ὴιηιήιῆιὼιωιώιῶι ̳!! ̅???!!?rs°c°fnosmtmivix⫝̸ ゙ ゚よりコト333435참고주의363738394042444546474849503月4月5月6月7月8月9月hgevギガデシドルナノピコビルペソホンリラレムdaauovpciu平成昭和大正明治naμakakbmbgbpfnfμfμgmgμlmldlklfmnmμmpsnsμsmsnvμvkvpwnwμwmwkwkωmωbqcccddbgyhainkkktlnlxphprsrsvwbstմնմեմիվնմխיִײַשׁשׂאַאָאּבּגּדּהּוּזּטּיּךּכּלּמּנּסּףּפּצּקּרּתּוֹבֿכֿפֿאלئائەئوئۇئۆئۈئېئىئجئحئمئيبجبمبىبيتىتيثجثمثىثيخحضجضمطحظمغجفجفحفىفيقحقىقيكاكجكحكخكلكىكينخنىنيهجهىهييىذٰرٰىٰئرئزئنبزبنترتزتنثرثزثنمانرنزننيريزئخئهبهتهصخنههٰثهسهشهطىطيعىعيغىغيسىسيشىشيصىصيضىضيشخشرسرصرضراً ًـًـّ ْـْلآلألإ𝅗𝅥0,1,2,3,4,5,6,7,8,9,wzhvsdwcmcmddjほかココàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįĵķĺļľłńņňŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷÿźżɓƃƅɔƈɖɗƌǝəɛƒɠɣɩɨƙɯɲɵơƣƥʀƨʃƭʈưʊʋƴƶʒƹƽǎǐǒǔǖǘǚǜǟǡǣǥǧǩǫǭǯǵƕƿǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟƞȣȥȧȩȫȭȯȱȳⱥȼƚⱦɂƀʉʌɇɉɋɍɏɦɹɻʁʕͱͳʹͷ;ϳέίόύβγδεζθκλνξοπρστυφχψϊϋϗϙϛϝϟϡϣϥϧϩϫϭϯϸϻͻͼͽѐёђѓєѕіїјљњћќѝўџабвгдежзийклмнопрстуфхцчшщъыьэюяѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯաբգդզէըթժլծկհձղճյշոչպջռստրցփքօֆ་ⴧⴭნᏰᏱᏲᏳᏴᏵꙋɐɑᴂɜᴖᴗᴝᴥɒɕɟɡɥɪᵻʝɭᶅʟɱɰɳɴɸʂƫᴜʐʑḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿἐἑἒἓἔἕἰἱἲἳἴἵἶἷὀὁὂὃὄὅὑὓὕὗᾰᾱὲΐῐῑὶΰῠῡὺῥ`ὸ‐+−∑〈〉ⰰⰱⰲⰳⰴⰵⰶⰷⰸⰹⰺⰻⰼⰽⰾⰿⱀⱁⱂⱃⱄⱅⱆⱇⱈⱉⱊⱋⱌⱍⱎⱏⱐⱑⱒⱓⱔⱕⱖⱗⱘⱙⱚⱛⱜⱝⱞⱡɫᵽɽⱨⱪⱬⱳⱶȿɀⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳬⳮⳳⵡ母龟丨丶丿乙亅亠人儿入冂冖冫几凵刀力勹匕匚匸卜卩厂厶又口囗士夂夊夕女子宀寸小尢尸屮山巛工己巾干幺广廴廾弋弓彐彡彳心戈戶手支攴文斗斤方无曰欠止歹殳毋比毛氏气爪父爻爿片牙牛犬玄玉瓜瓦甘生用田疋疒癶白皮皿目矛矢石示禸禾穴立竹米糸缶网羊羽老而耒耳聿肉臣臼舌舛舟艮色艸虍虫血行衣襾見角言谷豆豕豸貝赤走足身車辛辰辵邑酉釆里長門阜隶隹雨靑非面革韋韭音頁風飛食首香馬骨高髟鬥鬯鬲鬼魚鳥鹵鹿麥麻黃黍黑黹黽鼎鼓鼠鼻齊齒龍龜龠.〒卄卅ᄁᆪᆬᆭᄄᆰᆱᆲᆳᆴᆵᄚᄈᄡᄊ짜ᅢᅣᅤᅥᅦᅧᅨᅩᅪᅫᅬᅭᅮᅯᅰᅱᅲᅳᅴᅵᄔᄕᇇᇈᇌᇎᇓᇗᇙᄜᇝᇟᄝᄞᄠᄢᄣᄧᄩᄫᄬᄭᄮᄯᄲᄶᅀᅇᅌᇱᇲᅗᅘᅙᆄᆅᆈᆑᆒᆔᆞᆡ上中下甲丙丁天地問幼箏우秘男適優印注項写左右医宗夜テヌモヨヰヱヲꙁꙃꙅꙇꙉꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝺꝼᵹꝿꞁꞃꞅꞇꞌꞑꞓꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩɬʞʇꭓꞵꞷꬷꭒᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯ豈更賈滑串句契喇奈懶癩羅蘿螺裸邏樂洛烙珞落酪駱亂卵欄爛蘭鸞嵐濫藍襤拉臘蠟廊朗浪狼郎來冷勞擄櫓爐盧蘆虜路露魯鷺碌祿綠菉錄論壟弄籠聾牢磊賂雷壘屢樓淚漏累縷陋勒肋凜凌稜綾菱陵讀拏諾丹寧怒率異北磻便復不泌數索參塞省葉說殺沈拾若掠略亮兩凉梁糧良諒量勵呂廬旅濾礪閭驪麗黎曆歷轢年憐戀撚漣煉璉秊練聯輦蓮連鍊列劣咽烈裂廉念捻殮簾獵令囹嶺怜玲瑩羚聆鈴零靈領例禮醴隸惡了僚寮尿料燎療蓼遼暈阮劉杻柳流溜琉留硫紐類戮陸倫崙淪輪律慄栗隆利吏履易李梨泥理痢罹裏裡離匿溺吝燐璘藺隣鱗麟林淋臨笠粒狀炙識什茶刺切度拓糖宅洞暴輻降廓兀嗀塚晴凞猪益礼神祥福靖精蘒諸逸都飯飼館鶴郞隷侮僧免勉勤卑喝嘆器塀墨層悔慨憎懲敏既暑梅海渚漢煮爫琢碑祉祈祐祖禍禎穀突節縉繁署者臭艹著褐視謁謹賓贈辶難響頻恵𤋮舘並况全侀充冀勇勺啕喙嗢墳奄奔婢嬨廒廙彩徭惘慎愈慠戴揄搜摒敖望杖滛滋瀞瞧爵犯瑱甆画瘝瘟盛直睊着磌窱类絛缾荒華蝹襁覆調請諭變輸遲醙鉶陼韛頋鬒𢡊𢡄𣏕㮝䀘䀹𥉉𥳐𧻓齃龎עםٱٻپڀٺٿٹڤڦڄڃچڇڍڌڎڈژڑکگڳڱںڻۀہھۓڭۋۅۉ、〖〗—–_{}【】《》「」『』[]#&*-<>\\$%@ءؤة\"'^|~⦅⦆・ゥャ¢£¬¦¥₩│←↑→↓■○𐐨𐐩𐐪𐐫𐐬𐐭𐐮𐐯𐐰𐐱𐐲𐐳𐐴𐐵𐐶𐐷𐐸𐐹𐐺𐐻𐐼𐐽𐐾𐐿𐑀𐑁𐑂𐑃𐑄𐑅𐑆𐑇𐑈𐑉𐑊𐑋𐑌𐑍𐑎𐑏𐓘𐓙𐓚𐓛𐓜𐓝𐓞𐓟𐓠𐓡𐓢𐓣𐓤𐓥𐓦𐓧𐓨𐓩𐓪𐓫𐓬𐓭𐓮𐓯𐓰𐓱𐓲𐓳𐓴𐓵𐓶𐓷𐓸𐓹𐓺𐓻𐳀𐳁𐳂𐳃𐳄𐳅𐳆𐳇𐳈𐳉𐳊𐳋𐳌𐳍𐳎𐳏𐳐𐳑𐳒𐳓𐳔𐳕𐳖𐳗𐳘𐳙𐳚𐳛𐳜𐳝𐳞𐳟𐳠𐳡𐳢𐳣𐳤𐳥𐳦𐳧𐳨𐳩𐳪𐳫𐳬𐳭𐳮𐳯𐳰𐳱𐳲𑣀𑣁𑣂𑣃𑣄𑣅𑣆𑣇𑣈𑣉𑣊𑣋𑣌𑣍𑣎𑣏𑣐𑣑𑣒𑣓𑣔𑣕𑣖𑣗𑣘𑣙𑣚𑣛𑣜𑣝𑣞𑣟ıȷ∇∂𞤢𞤣𞤤𞤥𞤦𞤧𞤨𞤩𞤪𞤫𞤬𞤭𞤮𞤯𞤰𞤱𞤲𞤳𞤴𞤵𞤶𞤷𞤸𞤹𞤺𞤻𞤼𞤽𞤾𞤿𞥀𞥁𞥂𞥃ٮڡٯ字双多解交映無前後再新初終販声吹演投捕遊指禁空合満申割営配得可丽丸乁𠄢你侻倂偺備像㒞𠘺兔兤具𠔜㒹內𠕋冗冤仌冬𩇟刃㓟刻剆剷㔕包匆卉博即卽卿𠨬灰及叟𠭣叫叱吆咞吸呈周咢哶唐啓啣善喫喳嗂圖圗噑噴壮城埴堍型堲報墬𡓤売壷夆夢奢𡚨𡛪姬娛娧姘婦㛮嬈嬾𡧈寃寘寳𡬘寿将㞁屠峀岍𡷤嵃𡷦嵮嵫嵼巡巢㠯巽帨帽幩㡢𢆃㡼庰庳庶𪎒𢌱舁弢㣇𣊸𦇚形彫㣣徚忍志忹悁㤺㤜𢛔惇慈慌慺憲憤憯懞戛扝抱拔捐𢬌挽拼捨掃揤𢯱搢揅掩㨮摩摾撝摷㩬敬𣀊旣書晉㬙㬈㫤冒冕最暜肭䏙朡杞杓𣏃㭉柺枅桒𣑭梎栟椔楂榣槪檨𣚣櫛㰘次𣢧歔㱎歲殟殻𣪍𡴋𣫺汎𣲼沿泍汧洖派浩浸涅𣴞洴港湮㴳滇𣻑淹潮𣽞𣾎濆瀹瀛㶖灊災灷炭𠔥煅𤉣熜爨牐𤘈犀犕𤜵𤠔獺王㺬玥㺸瑇瑜璅瓊㼛甤𤰶甾𤲒𢆟瘐𤾡𤾸𥁄㿼䀈𥃳𥃲𥄙𥄳眞真瞋䁆䂖𥐝硎䃣𥘦𥚚𥛅秫䄯穊穏𥥼𥪧䈂𥮫篆築䈧𥲀糒䊠糨糣紀𥾆絣䌁緇縂繅䌴𦈨𦉇䍙𦋙罺𦌾羕翺𦓚𦔣聠𦖨聰𣍟䏕育脃䐋脾媵𦞧𦞵𣎓𣎜舄辞䑫芑芋芝劳花芳芽苦𦬼茝荣莭茣莽菧荓菊菌菜𦰶𦵫𦳕䔫蓱蓳蔖𧏊蕤𦼬䕝䕡𦾱𧃒䕫虐虧虩蚩蚈蜎蛢蜨蝫螆蟡蠁䗹衠𧙧裗裞䘵裺㒻𧢮𧥦䚾䛇誠𧲨貫賁贛起𧼯𠠄跋趼跰𠣞軔𨗒𨗭邔郱鄑𨜮鄛鈸鋗鋘鉼鏹鐕𨯺開䦕閷𨵷䧦雃嶲霣𩅅𩈚䩮䩶韠𩐊䪲𩒖頩𩖶飢䬳餩馧駂駾䯎𩬰鱀鳽䳎䳭鵧𪃎䳸𪄅𪈎𪊑䵖黾鼅鼏鼖𪘀";

function mapChar(codePoint) {
  if (codePoint >= 0x30000) {
    // High planes are special cased.
    if (codePoint >= 0xE0100 && codePoint <= 0xE01EF)
      return 18874368;
    return 0;
  }
  return blocks[blockIdxes[codePoint >> 4]][codePoint & 15];
}

return {
  mapStr: mappingStr,
  mapChar: mapChar
};
}));

},{}],19:[function(require,module,exports){
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['punycode', './idna-map'], function(punycode, idna_map) {
      return factory(punycode, idna_map);
    });
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('punycode'), require('./idna-map'));
  }
  else {
    root.uts46 = factory(root.punycode, root.idna_map);
  }
}(this, function(punycode, idna_map) {

  function mapLabel(label, useStd3ASCII, transitional) {
    var mapped = [];
    var chars = punycode.ucs2.decode(label);
    for (var i = 0; i < chars.length; i++) {
      var cp = chars[i];
      var ch = punycode.ucs2.encode([chars[i]]);
      var composite = idna_map.mapChar(cp);
      var flags = (composite >> 23);
      var kind = (composite >> 21) & 3;
      var index = (composite >> 5) & 0xffff;
      var length = composite & 0x1f;
      var value = idna_map.mapStr.substr(index, length);
      if (kind === 0 || (useStd3ASCII && (flags & 1))) {
        throw new Error("Illegal char " + ch);
      }
      else if (kind === 1) {
        mapped.push(value);
      }
      else if (kind === 2) {
        mapped.push(transitional ? value : ch);
      }
      /* istanbul ignore next */
      else if (kind === 3) {
        mapped.push(ch);
      }
    }

    var newLabel = mapped.join("").normalize("NFC");
    return newLabel;
  }

  function process(domain, transitional, useStd3ASCII) {
    /* istanbul ignore if */
    if (useStd3ASCII === undefined)
      useStd3ASCII = false;
    var mappedIDNA = mapLabel(domain, useStd3ASCII, transitional);

    // Step 3. Break
    var labels = mappedIDNA.split(".");

    // Step 4. Convert/Validate
    labels = labels.map(function(label) {
      if (label.startsWith("xn--")) {
        label = punycode.decode(label.substring(4));
        validateLabel(label, useStd3ASCII, false);
      }
      else {
        validateLabel(label, useStd3ASCII, transitional);
      }
      return label;
    });

    return labels.join(".");
  }

  function validateLabel(label, useStd3ASCII, transitional) {
    // 2. The label must not contain a U+002D HYPHEN-MINUS character in both the
    // third position and fourth positions.
    if (label[2] === '-' && label[3] === '-')
      throw new Error("Failed to validate " + label);

    // 3. The label must neither begin nor end with a U+002D HYPHEN-MINUS
    // character.
    if (label.startsWith('-') || label.endsWith('-'))
      throw new Error("Failed to validate " + label);

    // 4. The label must not contain a U+002E ( . ) FULL STOP.
    // this should nerver happen as label is chunked internally by this character
    /* istanbul ignore if */
    if (label.includes('.'))
      throw new Error("Failed to validate " + label);

    if (mapLabel(label, useStd3ASCII, transitional) !== label)
      throw new Error("Failed to validate " + label);

    // 5. The label must not begin with a combining mark, that is:
    // General_Category=Mark.
    var ch = label.codePointAt(0);
    if (idna_map.mapChar(ch) & (0x2 << 23))
      throw new Error("Label contains illegal character: " + ch);
  }

  function toAscii(domain, options) {
    if (options === undefined)
      options = {};
    var transitional = 'transitional' in options ? options.transitional : true;
    var useStd3ASCII = 'useStd3ASCII' in options ? options.useStd3ASCII : false;
    var verifyDnsLength = 'verifyDnsLength' in options ? options.verifyDnsLength : false;
    var labels = process(domain, transitional, useStd3ASCII).split('.');
    var asciiLabels = labels.map(punycode.toASCII);
    var asciiString = asciiLabels.join('.');
    var i;
    if (verifyDnsLength) {
      if (asciiString.length < 1 || asciiString.length > 253) {
        throw new Error("DNS name has wrong length: " + asciiString);
      }
      for (i = 0; i < asciiLabels.length; i++) {//for .. of replacement
        var label = asciiLabels[i];
        if (label.length < 1 || label.length > 63)
          throw new Error("DNS label has wrong length: " + label);
      }
    }
    return asciiString;
  }

  function toUnicode(domain, options) {
    if (options === undefined)
      options = {};
    var useStd3ASCII = 'useStd3ASCII' in options ? options.useStd3ASCII : false;
    return process(domain, false, useStd3ASCII);
  }

  return {
    toUnicode: toUnicode,
    toAscii: toAscii,
  };
}));

},{"./idna-map":18,"punycode":13}],20:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],21:[function(require,module,exports){
(function (process,global){(function (){
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.5.7
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
            0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
            2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
            2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
            2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array'];

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(bits, padding, type);
    }
    return method;
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createShakeOutputMethod(bits, padding, type);
    }
    return method;
  };

  var algorithms = [
    {name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod},
    {name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod},
    {name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod}
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits  = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name +'_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    var notString = typeof message !== 'string';
    if (notString && message.constructor === ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var length = message.length, blocks = this.blocks, byteCount = this.byteCount,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.finalize = function () {
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
               HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
               HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
               HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      if (extraBytes > 0) {
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      }
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      if (extraBytes > 0) {
        array[offset] = block & 0xFF;
      }
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
        b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
        b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
        b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (var i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":24}],22:[function(require,module,exports){
(function (process,global){(function (){
/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA512_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428A2F98, 0xD728AE22, 0x71374491, 0x23EF65CD,
    0xB5C0FBCF, 0xEC4D3B2F, 0xE9B5DBA5, 0x8189DBBC,
    0x3956C25B, 0xF348B538, 0x59F111F1, 0xB605D019,
    0x923F82A4, 0xAF194F9B, 0xAB1C5ED5, 0xDA6D8118,
    0xD807AA98, 0xA3030242, 0x12835B01, 0x45706FBE,
    0x243185BE, 0x4EE4B28C, 0x550C7DC3, 0xD5FFB4E2,
    0x72BE5D74, 0xF27B896F, 0x80DEB1FE, 0x3B1696B1,
    0x9BDC06A7, 0x25C71235, 0xC19BF174, 0xCF692694,
    0xE49B69C1, 0x9EF14AD2, 0xEFBE4786, 0x384F25E3,
    0x0FC19DC6, 0x8B8CD5B5, 0x240CA1CC, 0x77AC9C65,
    0x2DE92C6F, 0x592B0275, 0x4A7484AA, 0x6EA6E483,
    0x5CB0A9DC, 0xBD41FBD4, 0x76F988DA, 0x831153B5,
    0x983E5152, 0xEE66DFAB, 0xA831C66D, 0x2DB43210,
    0xB00327C8, 0x98FB213F, 0xBF597FC7, 0xBEEF0EE4,
    0xC6E00BF3, 0x3DA88FC2, 0xD5A79147, 0x930AA725,
    0x06CA6351, 0xE003826F, 0x14292967, 0x0A0E6E70,
    0x27B70A85, 0x46D22FFC, 0x2E1B2138, 0x5C26C926,
    0x4D2C6DFC, 0x5AC42AED, 0x53380D13, 0x9D95B3DF,
    0x650A7354, 0x8BAF63DE, 0x766A0ABB, 0x3C77B2A8,
    0x81C2C92E, 0x47EDAEE6, 0x92722C85, 0x1482353B,
    0xA2BFE8A1, 0x4CF10364, 0xA81A664B, 0xBC423001,
    0xC24B8B70, 0xD0F89791, 0xC76C51A3, 0x0654BE30,
    0xD192E819, 0xD6EF5218, 0xD6990624, 0x5565A910,
    0xF40E3585, 0x5771202A, 0x106AA070, 0x32BBD1B8,
    0x19A4C116, 0xB8D2D0C8, 0x1E376C08, 0x5141AB53,
    0x2748774C, 0xDF8EEB99, 0x34B0BCB5, 0xE19B48A8,
    0x391C0CB3, 0xC5C95A63, 0x4ED8AA4A, 0xE3418ACB,
    0x5B9CCA4F, 0x7763E373, 0x682E6FF3, 0xD6B2B8A3,
    0x748F82EE, 0x5DEFB2FC, 0x78A5636F, 0x43172F60,
    0x84C87814, 0xA1F0AB72, 0x8CC70208, 0x1A6439EC,
    0x90BEFFFA, 0x23631E28, 0xA4506CEB, 0xDE82BDE9,
    0xBEF9A3F7, 0xB2C67915, 0xC67178F2, 0xE372532B,
    0xCA273ECE, 0xEA26619C, 0xD186B8C7, 0x21C0C207,
    0xEADA7DD6, 0xCDE0EB1E, 0xF57D4F7F, 0xEE6ED178,
    0x06F067AA, 0x72176FBA, 0x0A637DC5, 0xA2C898A6,
    0x113F9804, 0xBEF90DAE, 0x1B710B35, 0x131C471B,
    0x28DB77F5, 0x23047D84, 0x32CAAB7B, 0x40C72493,
    0x3C9EBE0A, 0x15C9BEBC, 0x431D67C4, 0x9C100D4C,
    0x4CC5D4BE, 0xCB3E42B6, 0x597F299C, 0xFC657E2A,
    0x5FCB6FAB, 0x3AD6FAEC, 0x6C44198C, 0x4A475817
  ];

  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA512_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, bits) {
    return function (message) {
      return new Sha512(bits, true).update(message)[outputType]();
    };
  };

  var createMethod = function (bits) {
    var method = createOutputMethod('hex', bits);
    method.create = function () {
      return new Sha512(bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, bits);
    }
    return method;
  };

  var createHmacOutputMethod = function (outputType, bits) {
    return function (key, message) {
      return new HmacSha512(key, bits, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (bits) {
    var method = createHmacOutputMethod('hex', bits);
    method.create = function (key) {
      return new HmacSha512(key, bits);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, bits);
    }
    return method;
  };

  function Sha512(bits, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (bits == 384) {
      this.h0h = 0xCBBB9D5D;
      this.h0l = 0xC1059ED8;
      this.h1h = 0x629A292A;
      this.h1l = 0x367CD507;
      this.h2h = 0x9159015A;
      this.h2l = 0x3070DD17;
      this.h3h = 0x152FECD8;
      this.h3l = 0xF70E5939;
      this.h4h = 0x67332667;
      this.h4l = 0xFFC00B31;
      this.h5h = 0x8EB44A87;
      this.h5l = 0x68581511;
      this.h6h = 0xDB0C2E0D;
      this.h6l = 0x64F98FA7;
      this.h7h = 0x47B5481D;
      this.h7l = 0xBEFA4FA4;
    } else if (bits == 256) {
      this.h0h = 0x22312194;
      this.h0l = 0xFC2BF72C;
      this.h1h = 0x9F555FA3;
      this.h1l = 0xC84C64C2;
      this.h2h = 0x2393B86B;
      this.h2l = 0x6F53B151;
      this.h3h = 0x96387719;
      this.h3l = 0x5940EABD;
      this.h4h = 0x96283EE2;
      this.h4l = 0xA88EFFE3;
      this.h5h = 0xBE5E1E25;
      this.h5l = 0x53863992;
      this.h6h = 0x2B0199FC;
      this.h6l = 0x2C85B8AA;
      this.h7h = 0x0EB72DDC;
      this.h7l = 0x81C52CA2;
    } else if (bits == 224) {
      this.h0h = 0x8C3D37C8;
      this.h0l = 0x19544DA2;
      this.h1h = 0x73E19966;
      this.h1l = 0x89DCD4D6;
      this.h2h = 0x1DFAB7AE;
      this.h2l = 0x32FF9C82;
      this.h3h = 0x679DD514;
      this.h3l = 0x582F9FCF;
      this.h4h = 0x0F6D2B69;
      this.h4l = 0x7BD44DA8;
      this.h5h = 0x77E36F73;
      this.h5l = 0x04C48942;
      this.h6h = 0x3F9D85A8;
      this.h6l = 0x6A1D36C8;
      this.h7h = 0x1112E6AD;
      this.h7l = 0x91D692A1;
    } else { // 512
      this.h0h = 0x6A09E667;
      this.h0l = 0xF3BCC908;
      this.h1h = 0xBB67AE85;
      this.h1l = 0x84CAA73B;
      this.h2h = 0x3C6EF372;
      this.h2l = 0xFE94F82B;
      this.h3h = 0xA54FF53A;
      this.h3l = 0x5F1D36F1;
      this.h4h = 0x510E527F;
      this.h4l = 0xADE682D1;
      this.h5h = 0x9B05688C;
      this.h5l = 0x2B3E6C1F;
      this.h6h = 0x1F83D9AB;
      this.h6l = 0xFB41BD6B;
      this.h7h = 0x5BE0CD19;
      this.h7l = 0x137E2179;
    }
    this.bits = bits;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
  }

  Sha512.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[1] = blocks[2] = blocks[3] = blocks[4] =
        blocks[5] = blocks[6] = blocks[7] = blocks[8] =
        blocks[9] = blocks[10] = blocks[11] = blocks[12] =
        blocks[13] = blocks[14] = blocks[15] = blocks[16] =
        blocks[17] = blocks[18] = blocks[19] = blocks[20] =
        blocks[21] = blocks[22] = blocks[23] = blocks[24] =
        blocks[25] = blocks[26] = blocks[27] = blocks[28] =
        blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 128; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 128; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 128) {
        this.block = blocks[32];
        this.start = i - 128;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha512.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[32] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[32];
    if (i >= 112) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
    }
    blocks[30] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[31] = this.bytes << 3;
    this.hash();
  };

  Sha512.prototype.hash = function () {
    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      blocks = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4,
      abh, abl, dah, dal, cdh, cdl, bch, bcl,
      majh, majl, t1h, t1l, t2h, t2l, chh, chl;

    for (j = 32; j < 160; j += 2) {
      t1h = blocks[j - 30];
      t1l = blocks[j - 29];
      s0h = ((t1h >>> 1) | (t1l << 31)) ^ ((t1h >>> 8) | (t1l << 24)) ^ (t1h >>> 7);
      s0l = ((t1l >>> 1) | (t1h << 31)) ^ ((t1l >>> 8) | (t1h << 24)) ^ ((t1l >>> 7) | t1h << 25);

      t1h = blocks[j - 4];
      t1l = blocks[j - 3];
      s1h = ((t1h >>> 19) | (t1l << 13)) ^ ((t1l >>> 29) | (t1h << 3)) ^ (t1h >>> 6);
      s1l = ((t1l >>> 19) | (t1h << 13)) ^ ((t1h >>> 29) | (t1l << 3)) ^ ((t1l >>> 6) | t1h << 26);

      t1h = blocks[j - 32];
      t1l = blocks[j - 31];
      t2h = blocks[j - 14];
      t2l = blocks[j - 13];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);

      blocks[j] = (c4 << 16) | (c3 & 0xFFFF);
      blocks[j + 1] = (c2 << 16) | (c1 & 0xFFFF);
    }

    var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
    bch = bh & ch;
    bcl = bl & cl;
    for (j = 0; j < 160; j += 8) {
      s0h = ((ah >>> 28) | (al << 4)) ^ ((al >>> 2) | (ah << 30)) ^ ((al >>> 7) | (ah << 25));
      s0l = ((al >>> 28) | (ah << 4)) ^ ((ah >>> 2) | (al << 30)) ^ ((ah >>> 7) | (al << 25));

      s1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((el >>> 9) | (eh << 23));
      s1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((eh >>> 9) | (el << 23));

      abh = ah & bh;
      abl = al & bl;
      majh = abh ^ (ah & ch) ^ bch;
      majl = abl ^ (al & cl) ^ bcl;

      chh = (eh & fh) ^ (~eh & gh);
      chl = (el & fl) ^ (~el & gl);

      t1h = blocks[j];
      t1l = blocks[j + 1];
      t2h = K[j];
      t2l = K[j + 1];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (hl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (dl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (dh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      hh = (c4 << 16) | (c3 & 0xFFFF);
      hl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      dh = (c4 << 16) | (c3 & 0xFFFF);
      dl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((dh >>> 28) | (dl << 4)) ^ ((dl >>> 2) | (dh << 30)) ^ ((dl >>> 7) | (dh << 25));
      s0l = ((dl >>> 28) | (dh << 4)) ^ ((dh >>> 2) | (dl << 30)) ^ ((dh >>> 7) | (dl << 25));

      s1h = ((hh >>> 14) | (hl << 18)) ^ ((hh >>> 18) | (hl << 14)) ^ ((hl >>> 9) | (hh << 23));
      s1l = ((hl >>> 14) | (hh << 18)) ^ ((hl >>> 18) | (hh << 14)) ^ ((hh >>> 9) | (hl << 23));

      dah = dh & ah;
      dal = dl & al;
      majh = dah ^ (dh & bh) ^ abh;
      majl = dal ^ (dl & bl) ^ abl;

      chh = (hh & eh) ^ (~hh & fh);
      chl = (hl & el) ^ (~hl & fl);

      t1h = blocks[j + 2];
      t1l = blocks[j + 3];
      t2h = K[j + 2];
      t2l = K[j + 3];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (gl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (cl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ch & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      gh = (c4 << 16) | (c3 & 0xFFFF);
      gl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ch = (c4 << 16) | (c3 & 0xFFFF);
      cl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((ch >>> 28) | (cl << 4)) ^ ((cl >>> 2) | (ch << 30)) ^ ((cl >>> 7) | (ch << 25));
      s0l = ((cl >>> 28) | (ch << 4)) ^ ((ch >>> 2) | (cl << 30)) ^ ((ch >>> 7) | (cl << 25));

      s1h = ((gh >>> 14) | (gl << 18)) ^ ((gh >>> 18) | (gl << 14)) ^ ((gl >>> 9) | (gh << 23));
      s1l = ((gl >>> 14) | (gh << 18)) ^ ((gl >>> 18) | (gh << 14)) ^ ((gh >>> 9) | (gl << 23));

      cdh = ch & dh;
      cdl = cl & dl;
      majh = cdh ^ (ch & ah) ^ dah;
      majl = cdl ^ (cl & al) ^ dal;

      chh = (gh & hh) ^ (~gh & eh);
      chl = (gl & hl) ^ (~gl & el);

      t1h = blocks[j + 4];
      t1l = blocks[j + 5];
      t2h = K[j + 4];
      t2l = K[j + 5];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (fl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (bl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (bh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      fh = (c4 << 16) | (c3 & 0xFFFF);
      fl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      bh = (c4 << 16) | (c3 & 0xFFFF);
      bl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((bh >>> 28) | (bl << 4)) ^ ((bl >>> 2) | (bh << 30)) ^ ((bl >>> 7) | (bh << 25));
      s0l = ((bl >>> 28) | (bh << 4)) ^ ((bh >>> 2) | (bl << 30)) ^ ((bh >>> 7) | (bl << 25));

      s1h = ((fh >>> 14) | (fl << 18)) ^ ((fh >>> 18) | (fl << 14)) ^ ((fl >>> 9) | (fh << 23));
      s1l = ((fl >>> 14) | (fh << 18)) ^ ((fl >>> 18) | (fh << 14)) ^ ((fh >>> 9) | (fl << 23));

      bch = bh & ch;
      bcl = bl & cl;
      majh = bch ^ (bh & dh) ^ cdh;
      majl = bcl ^ (bl & dl) ^ cdl;

      chh = (fh & gh) ^ (~fh & hh);
      chl = (fl & gl) ^ (~fl & hl);

      t1h = blocks[j + 6];
      t1l = blocks[j + 7];
      t2h = K[j + 6];
      t2l = K[j + 7];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (el & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (al & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ah & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      eh = (c4 << 16) | (c3 & 0xFFFF);
      el = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ah = (c4 << 16) | (c3 & 0xFFFF);
      al = (c2 << 16) | (c1 & 0xFFFF);
    }

    c1 = (h0l & 0xFFFF) + (al & 0xFFFF);
    c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
    c3 = (h0h & 0xFFFF) + (ah & 0xFFFF) + (c2 >>> 16);
    c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);

    this.h0h = (c4 << 16) | (c3 & 0xFFFF);
    this.h0l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h1l & 0xFFFF) + (bl & 0xFFFF);
    c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
    c3 = (h1h & 0xFFFF) + (bh & 0xFFFF) + (c2 >>> 16);
    c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);

    this.h1h = (c4 << 16) | (c3 & 0xFFFF);
    this.h1l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h2l & 0xFFFF) + (cl & 0xFFFF);
    c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
    c3 = (h2h & 0xFFFF) + (ch & 0xFFFF) + (c2 >>> 16);
    c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);

    this.h2h = (c4 << 16) | (c3 & 0xFFFF);
    this.h2l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h3l & 0xFFFF) + (dl & 0xFFFF);
    c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
    c3 = (h3h & 0xFFFF) + (dh & 0xFFFF) + (c2 >>> 16);
    c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);

    this.h3h = (c4 << 16) | (c3 & 0xFFFF);
    this.h3l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h4l & 0xFFFF) + (el & 0xFFFF);
    c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
    c3 = (h4h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
    c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);

    this.h4h = (c4 << 16) | (c3 & 0xFFFF);
    this.h4l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h5l & 0xFFFF) + (fl & 0xFFFF);
    c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
    c3 = (h5h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
    c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);

    this.h5h = (c4 << 16) | (c3 & 0xFFFF);
    this.h5l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h6l & 0xFFFF) + (gl & 0xFFFF);
    c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
    c3 = (h6h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
    c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);

    this.h6h = (c4 << 16) | (c3 & 0xFFFF);
    this.h6l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h7l & 0xFFFF) + (hl & 0xFFFF);
    c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
    c3 = (h7h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
    c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);

    this.h7h = (c4 << 16) | (c3 & 0xFFFF);
    this.h7l = (c2 << 16) | (c1 & 0xFFFF);
  };

  Sha512.prototype.hex = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var hex = HEX_CHARS[(h0h >> 28) & 0x0F] + HEX_CHARS[(h0h >> 24) & 0x0F] +
      HEX_CHARS[(h0h >> 20) & 0x0F] + HEX_CHARS[(h0h >> 16) & 0x0F] +
      HEX_CHARS[(h0h >> 12) & 0x0F] + HEX_CHARS[(h0h >> 8) & 0x0F] +
      HEX_CHARS[(h0h >> 4) & 0x0F] + HEX_CHARS[h0h & 0x0F] +
      HEX_CHARS[(h0l >> 28) & 0x0F] + HEX_CHARS[(h0l >> 24) & 0x0F] +
      HEX_CHARS[(h0l >> 20) & 0x0F] + HEX_CHARS[(h0l >> 16) & 0x0F] +
      HEX_CHARS[(h0l >> 12) & 0x0F] + HEX_CHARS[(h0l >> 8) & 0x0F] +
      HEX_CHARS[(h0l >> 4) & 0x0F] + HEX_CHARS[h0l & 0x0F] +
      HEX_CHARS[(h1h >> 28) & 0x0F] + HEX_CHARS[(h1h >> 24) & 0x0F] +
      HEX_CHARS[(h1h >> 20) & 0x0F] + HEX_CHARS[(h1h >> 16) & 0x0F] +
      HEX_CHARS[(h1h >> 12) & 0x0F] + HEX_CHARS[(h1h >> 8) & 0x0F] +
      HEX_CHARS[(h1h >> 4) & 0x0F] + HEX_CHARS[h1h & 0x0F] +
      HEX_CHARS[(h1l >> 28) & 0x0F] + HEX_CHARS[(h1l >> 24) & 0x0F] +
      HEX_CHARS[(h1l >> 20) & 0x0F] + HEX_CHARS[(h1l >> 16) & 0x0F] +
      HEX_CHARS[(h1l >> 12) & 0x0F] + HEX_CHARS[(h1l >> 8) & 0x0F] +
      HEX_CHARS[(h1l >> 4) & 0x0F] + HEX_CHARS[h1l & 0x0F] +
      HEX_CHARS[(h2h >> 28) & 0x0F] + HEX_CHARS[(h2h >> 24) & 0x0F] +
      HEX_CHARS[(h2h >> 20) & 0x0F] + HEX_CHARS[(h2h >> 16) & 0x0F] +
      HEX_CHARS[(h2h >> 12) & 0x0F] + HEX_CHARS[(h2h >> 8) & 0x0F] +
      HEX_CHARS[(h2h >> 4) & 0x0F] + HEX_CHARS[h2h & 0x0F] +
      HEX_CHARS[(h2l >> 28) & 0x0F] + HEX_CHARS[(h2l >> 24) & 0x0F] +
      HEX_CHARS[(h2l >> 20) & 0x0F] + HEX_CHARS[(h2l >> 16) & 0x0F] +
      HEX_CHARS[(h2l >> 12) & 0x0F] + HEX_CHARS[(h2l >> 8) & 0x0F] +
      HEX_CHARS[(h2l >> 4) & 0x0F] + HEX_CHARS[h2l & 0x0F] +
      HEX_CHARS[(h3h >> 28) & 0x0F] + HEX_CHARS[(h3h >> 24) & 0x0F] +
      HEX_CHARS[(h3h >> 20) & 0x0F] + HEX_CHARS[(h3h >> 16) & 0x0F] +
      HEX_CHARS[(h3h >> 12) & 0x0F] + HEX_CHARS[(h3h >> 8) & 0x0F] +
      HEX_CHARS[(h3h >> 4) & 0x0F] + HEX_CHARS[h3h & 0x0F];
    if (bits >= 256) {
      hex += HEX_CHARS[(h3l >> 28) & 0x0F] + HEX_CHARS[(h3l >> 24) & 0x0F] +
        HEX_CHARS[(h3l >> 20) & 0x0F] + HEX_CHARS[(h3l >> 16) & 0x0F] +
        HEX_CHARS[(h3l >> 12) & 0x0F] + HEX_CHARS[(h3l >> 8) & 0x0F] +
        HEX_CHARS[(h3l >> 4) & 0x0F] + HEX_CHARS[h3l & 0x0F];
    }
    if (bits >= 384) {
      hex += HEX_CHARS[(h4h >> 28) & 0x0F] + HEX_CHARS[(h4h >> 24) & 0x0F] +
        HEX_CHARS[(h4h >> 20) & 0x0F] + HEX_CHARS[(h4h >> 16) & 0x0F] +
        HEX_CHARS[(h4h >> 12) & 0x0F] + HEX_CHARS[(h4h >> 8) & 0x0F] +
        HEX_CHARS[(h4h >> 4) & 0x0F] + HEX_CHARS[h4h & 0x0F] +
        HEX_CHARS[(h4l >> 28) & 0x0F] + HEX_CHARS[(h4l >> 24) & 0x0F] +
        HEX_CHARS[(h4l >> 20) & 0x0F] + HEX_CHARS[(h4l >> 16) & 0x0F] +
        HEX_CHARS[(h4l >> 12) & 0x0F] + HEX_CHARS[(h4l >> 8) & 0x0F] +
        HEX_CHARS[(h4l >> 4) & 0x0F] + HEX_CHARS[h4l & 0x0F] +
        HEX_CHARS[(h5h >> 28) & 0x0F] + HEX_CHARS[(h5h >> 24) & 0x0F] +
        HEX_CHARS[(h5h >> 20) & 0x0F] + HEX_CHARS[(h5h >> 16) & 0x0F] +
        HEX_CHARS[(h5h >> 12) & 0x0F] + HEX_CHARS[(h5h >> 8) & 0x0F] +
        HEX_CHARS[(h5h >> 4) & 0x0F] + HEX_CHARS[h5h & 0x0F] +
        HEX_CHARS[(h5l >> 28) & 0x0F] + HEX_CHARS[(h5l >> 24) & 0x0F] +
        HEX_CHARS[(h5l >> 20) & 0x0F] + HEX_CHARS[(h5l >> 16) & 0x0F] +
        HEX_CHARS[(h5l >> 12) & 0x0F] + HEX_CHARS[(h5l >> 8) & 0x0F] +
        HEX_CHARS[(h5l >> 4) & 0x0F] + HEX_CHARS[h5l & 0x0F];
    }
    if (bits == 512) {
      hex += HEX_CHARS[(h6h >> 28) & 0x0F] + HEX_CHARS[(h6h >> 24) & 0x0F] +
        HEX_CHARS[(h6h >> 20) & 0x0F] + HEX_CHARS[(h6h >> 16) & 0x0F] +
        HEX_CHARS[(h6h >> 12) & 0x0F] + HEX_CHARS[(h6h >> 8) & 0x0F] +
        HEX_CHARS[(h6h >> 4) & 0x0F] + HEX_CHARS[h6h & 0x0F] +
        HEX_CHARS[(h6l >> 28) & 0x0F] + HEX_CHARS[(h6l >> 24) & 0x0F] +
        HEX_CHARS[(h6l >> 20) & 0x0F] + HEX_CHARS[(h6l >> 16) & 0x0F] +
        HEX_CHARS[(h6l >> 12) & 0x0F] + HEX_CHARS[(h6l >> 8) & 0x0F] +
        HEX_CHARS[(h6l >> 4) & 0x0F] + HEX_CHARS[h6l & 0x0F] +
        HEX_CHARS[(h7h >> 28) & 0x0F] + HEX_CHARS[(h7h >> 24) & 0x0F] +
        HEX_CHARS[(h7h >> 20) & 0x0F] + HEX_CHARS[(h7h >> 16) & 0x0F] +
        HEX_CHARS[(h7h >> 12) & 0x0F] + HEX_CHARS[(h7h >> 8) & 0x0F] +
        HEX_CHARS[(h7h >> 4) & 0x0F] + HEX_CHARS[h7h & 0x0F] +
        HEX_CHARS[(h7l >> 28) & 0x0F] + HEX_CHARS[(h7l >> 24) & 0x0F] +
        HEX_CHARS[(h7l >> 20) & 0x0F] + HEX_CHARS[(h7l >> 16) & 0x0F] +
        HEX_CHARS[(h7l >> 12) & 0x0F] + HEX_CHARS[(h7l >> 8) & 0x0F] +
        HEX_CHARS[(h7l >> 4) & 0x0F] + HEX_CHARS[h7l & 0x0F];
    }
    return hex;
  };

  Sha512.prototype.toString = Sha512.prototype.hex;

  Sha512.prototype.digest = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var arr = [
      (h0h >> 24) & 0xFF, (h0h >> 16) & 0xFF, (h0h >> 8) & 0xFF, h0h & 0xFF,
      (h0l >> 24) & 0xFF, (h0l >> 16) & 0xFF, (h0l >> 8) & 0xFF, h0l & 0xFF,
      (h1h >> 24) & 0xFF, (h1h >> 16) & 0xFF, (h1h >> 8) & 0xFF, h1h & 0xFF,
      (h1l >> 24) & 0xFF, (h1l >> 16) & 0xFF, (h1l >> 8) & 0xFF, h1l & 0xFF,
      (h2h >> 24) & 0xFF, (h2h >> 16) & 0xFF, (h2h >> 8) & 0xFF, h2h & 0xFF,
      (h2l >> 24) & 0xFF, (h2l >> 16) & 0xFF, (h2l >> 8) & 0xFF, h2l & 0xFF,
      (h3h >> 24) & 0xFF, (h3h >> 16) & 0xFF, (h3h >> 8) & 0xFF, h3h & 0xFF
    ];

    if (bits >= 256) {
      arr.push((h3l >> 24) & 0xFF, (h3l >> 16) & 0xFF, (h3l >> 8) & 0xFF, h3l & 0xFF);
    }
    if (bits >= 384) {
      arr.push(
        (h4h >> 24) & 0xFF, (h4h >> 16) & 0xFF, (h4h >> 8) & 0xFF, h4h & 0xFF,
        (h4l >> 24) & 0xFF, (h4l >> 16) & 0xFF, (h4l >> 8) & 0xFF, h4l & 0xFF,
        (h5h >> 24) & 0xFF, (h5h >> 16) & 0xFF, (h5h >> 8) & 0xFF, h5h & 0xFF,
        (h5l >> 24) & 0xFF, (h5l >> 16) & 0xFF, (h5l >> 8) & 0xFF, h5l & 0xFF
      );
    }
    if (bits == 512) {
      arr.push(
        (h6h >> 24) & 0xFF, (h6h >> 16) & 0xFF, (h6h >> 8) & 0xFF, h6h & 0xFF,
        (h6l >> 24) & 0xFF, (h6l >> 16) & 0xFF, (h6l >> 8) & 0xFF, h6l & 0xFF,
        (h7h >> 24) & 0xFF, (h7h >> 16) & 0xFF, (h7h >> 8) & 0xFF, h7h & 0xFF,
        (h7l >> 24) & 0xFF, (h7l >> 16) & 0xFF, (h7l >> 8) & 0xFF, h7l & 0xFF
      );
    }
    return arr;
  };

  Sha512.prototype.array = Sha512.prototype.digest;

  Sha512.prototype.arrayBuffer = function () {
    this.finalize();

    var bits = this.bits;
    var buffer = new ArrayBuffer(bits / 8);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0h);
    dataView.setUint32(4, this.h0l);
    dataView.setUint32(8, this.h1h);
    dataView.setUint32(12, this.h1l);
    dataView.setUint32(16, this.h2h);
    dataView.setUint32(20, this.h2l);
    dataView.setUint32(24, this.h3h);

    if (bits >= 256) {
      dataView.setUint32(28, this.h3l);
    }
    if (bits >= 384) {
      dataView.setUint32(32, this.h4h);
      dataView.setUint32(36, this.h4l);
      dataView.setUint32(40, this.h5h);
      dataView.setUint32(44, this.h5l);
    }
    if (bits == 512) {
      dataView.setUint32(48, this.h6h);
      dataView.setUint32(52, this.h6l);
      dataView.setUint32(56, this.h7h);
      dataView.setUint32(60, this.h7l);
    }
    return buffer;
  };

  Sha512.prototype.clone = function () {
    var hash = new Sha512(this.bits, false);
    this.copyTo(hash);
    return hash;
  };

  Sha512.prototype.copyTo = function (hash) {
    var i = 0, attrs = [
      'h0h', 'h0l', 'h1h', 'h1l', 'h2h', 'h2l', 'h3h', 'h3l', 'h4h', 'h4l', 'h5h', 'h5l', 'h6h', 'h6l', 'h7h', 'h7l',
      'start', 'bytes', 'hBytes', 'finalized', 'hashed', 'lastByteIndex'
    ];
    for (i = 0; i < attrs.length; ++i) {
      hash[attrs[i]] = this[attrs[i]];
    }
    for (i = 0; i < this.blocks.length; ++i) {
      hash.blocks[i] = this.blocks[i];
    }
  };

  function HmacSha512(key, bits, sharedMemory) {
    var notString, type = typeof key;
    if (type !== 'string') {
      if (type === 'object') {
        if (key === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var length = key.length;
    if (!notString) {
      var bytes = [], length = key.length, index = 0, code;
      for (var i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    }

    if (key.length > 128) {
      key = (new Sha512(bits, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (var i = 0; i < 128; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha512.call(this, bits, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha512.prototype = new Sha512();

  HmacSha512.prototype.finalize = function () {
    Sha512.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha512.call(this, this.bits, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha512.prototype.finalize.call(this);
    }
  };

  HmacSha512.prototype.clone = function () {
    var hash = new HmacSha512([], this.bits, false);
    this.copyTo(hash);
    hash.inner = this.inner;
    for (var i = 0; i < this.oKeyPad.length; ++i) {
      hash.oKeyPad[i] = this.oKeyPad[i];
    }
    return hash;
  };

  var exports = createMethod(512);
  exports.sha512 = exports;
  exports.sha384 = createMethod(384);
  exports.sha512_256 = createMethod(256);
  exports.sha512_224 = createMethod(224);
  exports.sha512.hmac = createHmacMethod(512);
  exports.sha384.hmac = createHmacMethod(384);
  exports.sha512_256.hmac = createHmacMethod(256);
  exports.sha512_224.hmac = createHmacMethod(224);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha512 = exports.sha512;
    root.sha384 = exports.sha384;
    root.sha512_256 = exports.sha512_256;
    root.sha512_224 = exports.sha512_224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":24}],23:[function(require,module,exports){
const alphabet = '13456789abcdefghijkmnopqrstuwxyz'

/**
 * Encode provided Uint8Array using the Nano-specific Base-32 implementeation.
 * @param {Uint8Array} view Input buffer formatted as a Uint8Array
 * @returns {string}
 */
function encode (view) {
  if (view.constructor !== Uint8Array) {
    throw new Error('View must be a Uint8Array!')
  }
  const length = view.length
  const leftover = (length * 8) % 5
  const offset = leftover === 0 ? 0 : 5 - leftover

  let value = 0
  let output = ''
  let bits = 0

  for (var i = 0; i < length; i++) {
    value = (value << 8) | view[i]
    bits += 8

    while (bits >= 5) {
      output += alphabet[(value >>> (bits + offset - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - (bits + offset))) & 31]
  }

  return output
}

function readChar (char) {
  var idx = alphabet.indexOf(char)

  if (idx === -1) {
    throw new Error('Invalid character found: ' + char)
  }

  return idx
}

/**
 * Decodes a Nano-implementation Base32 encoded string into a Uint8Array
 * @param {string} input A Nano-Base32 encoded string
 * @returns {Uint8Array}
 */
function decode (input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string!')
  }
  var length = input.length
  const leftover = (length * 5) % 8
  const offset = leftover === 0 ? 0 : 8 - leftover

  var bits = 0
  var value = 0

  var index = 0
  var output = new Uint8Array(Math.ceil(length * 5 / 8))

  for (var i = 0; i < length; i++) {
    value = (value << 5) | readChar(input[i])
    bits += 5

    if (bits >= 8) {
      output[index++] = (value >>> (bits + offset - 8)) & 255
      bits -= 8
    }
  }
  if (bits > 0) {
    output[index++] = (value << (bits + offset - 8)) & 255
  }

  if (leftover !== 0) {
    output = output.slice(1)
  }
  return output
}

module.exports = {
  encode,
  decode
}

},{}],24:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],25:[function(require,module,exports){
// Extracted from https://github.com/crypto-browserify/ripemd160
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ARRAY16 = new Array(16);
    var zl = initU8Array([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
        1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
        4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
    ]);
    var zr = initU8Array([
        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
        6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
        15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
        8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
        12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
    ]);
    var sl = initU8Array([
        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
        7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
        11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
        11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
        9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
    ]);
    var sr = initU8Array([
        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
        9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
        9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
        15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
        8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
    ]);
    var hl = initU32Array([0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]);
    var hr = initU32Array([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000]);
    function rotl(x, n) {
        return (x << n) | (x >>> (32 - n));
    }
    function fn1(a, b, c, d, e, m, k, s) {
        return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + e) | 0;
    }
    function fn2(a, b, c, d, e, m, k, s) {
        return (rotl((a + ((b & c) | ((~b) & d)) + m + k) | 0, s) + e) | 0;
    }
    function fn3(a, b, c, d, e, m, k, s) {
        return (rotl((a + ((b | (~c)) ^ d) + m + k) | 0, s) + e) | 0;
    }
    function fn4(a, b, c, d, e, m, k, s) {
        return (rotl((a + ((b & d) | (c & (~d))) + m + k) | 0, s) + e) | 0;
    }
    function fn5(a, b, c, d, e, m, k, s) {
        return (rotl((a + (b ^ (c | (~d))) + m + k) | 0, s) + e) | 0;
    }
    function readInt32LE(buffer, offset) {
        offset >>>= 0;
        return (buffer[offset])
            | (buffer[offset + 1] << 8)
            | (buffer[offset + 2] << 16)
            | (buffer[offset + 3] << 24);
    }
    function writeUInt32LE(buffer, value, offset) {
        value = +value;
        offset >>>= 0;
        buffer[offset + 3] = (value >>> 24);
        buffer[offset + 2] = (value >>> 16);
        buffer[offset + 1] = (value >>> 8);
        buffer[offset] = (value & 0xff);
        return offset + 4;
    }
    function writeInt32LE(buffer, value, offset) {
        value = +value;
        offset >>>= 0;
        buffer[offset] = (value & 0xff);
        buffer[offset + 1] = (value >>> 8);
        buffer[offset + 2] = (value >>> 16);
        buffer[offset + 3] = (value >>> 24);
        return offset + 4;
    }
    function initU32Array(data) {
        if (typeof Uint32Array !== 'undefined') {
            return new Uint32Array(data);
        }
        else {
            return data;
        }
    }
    function initU8Array(data) {
        if (typeof Uint8Array !== 'undefined') {
            return new Uint8Array(data);
        }
        else {
            return data;
        }
    }
    function createU8Array(size) {
        if (typeof Uint8Array !== 'undefined') {
            return new Uint8Array(size);
        }
        else {
            return new Array(size);
        }
    }
    var RIPEMD160 = /** @class */ (function () {
        function RIPEMD160() {
            this._block = createU8Array(64);
            this._blockSize = 64;
            this._blockOffset = 0;
            this._length = [0, 0, 0, 0];
            this._finalized = false;
            this._a = 0x67452301;
            this._b = 0xefcdab89;
            this._c = 0x98badcfe;
            this._d = 0x10325476;
            this._e = 0xc3d2e1f0;
        }
        RIPEMD160.prototype.update = function (data) {
            if (this._finalized)
                throw new Error('Digest already called');
            // consume data
            var block = this._block;
            var offset = 0;
            while (this._blockOffset + data.length - offset >= this._blockSize) {
                for (var i = this._blockOffset; i < this._blockSize;)
                    block[i++] = data[offset++];
                this._update();
                this._blockOffset = 0;
            }
            while (offset < data.length)
                block[this._blockOffset++] = data[offset++];
            // update length
            for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
                this._length[j] += carry;
                carry = (this._length[j] / 0x0100000000) | 0;
                if (carry > 0)
                    this._length[j] -= 0x0100000000 * carry;
            }
            return this;
        };
        RIPEMD160.prototype._update = function () {
            var words = ARRAY16;
            for (var j = 0; j < 16; ++j) {
                words[j] = readInt32LE(this._block, j * 4);
            }
            var al = this._a | 0;
            var bl = this._b | 0;
            var cl = this._c | 0;
            var dl = this._d | 0;
            var el = this._e | 0;
            var ar = this._a | 0;
            var br = this._b | 0;
            var cr = this._c | 0;
            var dr = this._d | 0;
            var er = this._e | 0;
            // computation
            for (var i = 0; i < 80; i += 1) {
                var tl = void 0;
                var tr = void 0;
                if (i < 16) {
                    tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
                    tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
                }
                else if (i < 32) {
                    tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
                    tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
                }
                else if (i < 48) {
                    tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
                    tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
                }
                else if (i < 64) {
                    tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
                    tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
                }
                else { // if (i<80) {
                    tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
                    tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
                }
                al = el;
                el = dl;
                dl = rotl(cl, 10);
                cl = bl;
                bl = tl;
                ar = er;
                er = dr;
                dr = rotl(cr, 10);
                cr = br;
                br = tr;
            }
            // update state
            var t = (this._b + cl + dr) | 0;
            this._b = (this._c + dl + er) | 0;
            this._c = (this._d + el + ar) | 0;
            this._d = (this._e + al + br) | 0;
            this._e = (this._a + bl + cr) | 0;
            this._a = t;
        };
        RIPEMD160.prototype.digest = function () {
            if (this._finalized) {
                throw new Error('Digest already called');
            }
            this._finalized = true;
            // create padding and handle blocks
            this._block[this._blockOffset++] = 0x80;
            if (this._blockOffset > 56) {
                this._block.fill(0, this._blockOffset, 64);
                this._update();
                this._blockOffset = 0;
            }
            this._block.fill(0, this._blockOffset, 56);
            writeUInt32LE(this._block, this._length[0], 56);
            writeUInt32LE(this._block, this._length[1], 60);
            this._update();
            // produce result
            var buffer = createU8Array(20);
            writeInt32LE(buffer, this._a, 0);
            writeInt32LE(buffer, this._b, 4);
            writeInt32LE(buffer, this._c, 8);
            writeInt32LE(buffer, this._d, 12);
            writeInt32LE(buffer, this._e, 16);
            // reset state
            this._block.fill(0);
            this._blockOffset = 0;
            for (var i = 0; i < 4; ++i) {
                this._length[i] = 0;
            }
            return buffer;
        };
        return RIPEMD160;
    }());
    exports.RIPEMD160 = RIPEMD160;
    exports.default = RIPEMD160;
});

},{}],26:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":12}],27:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.SHAKE=exports.SHA3Hash=exports.SHA3=exports.Keccak=void 0;var _buffer=require("buffer");var _sponge=_interopRequireDefault(require("./sponge"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var createHash=function createHash(_ref){var allowedSizes=_ref.allowedSizes,defaultSize=_ref.defaultSize,padding=_ref.padding;return function Hash(){var _this=this;var size=arguments.length>0&&arguments[0]!==undefined?arguments[0]:defaultSize;if(!this||this.constructor!==Hash){return new Hash(size)}if(allowedSizes&&!allowedSizes.includes(size)){throw new Error("Unsupported hash length")}var sponge=new _sponge["default"]({capacity:size});this.update=function(input){var encoding=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"utf8";if(_buffer.Buffer.isBuffer(input)){sponge.absorb(input);return _this}if(typeof input==="string"){return _this.update(_buffer.Buffer.from(input,encoding))}throw new TypeError("Not a string or buffer")};this.digest=function(){var formatOrOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"binary";var options=typeof formatOrOptions==="string"?{format:formatOrOptions}:formatOrOptions;var buffer=sponge.squeeze({buffer:options.buffer,padding:options.padding||padding});if(options.format&&options.format!=="binary"){return buffer.toString(options.format)}return buffer};this.reset=function(){sponge.reset();return _this};return this}};var Keccak=createHash({allowedSizes:[224,256,384,512],defaultSize:512,padding:1});exports.Keccak=Keccak;var SHA3=createHash({allowedSizes:[224,256,384,512],defaultSize:512,padding:6});exports.SHA3=SHA3;var SHAKE=createHash({allowedSizes:[128,256],defaultSize:256,padding:31});exports.SHAKE=SHAKE;var SHA3Hash=Keccak;exports.SHA3Hash=SHA3Hash;SHA3.SHA3Hash=SHA3Hash;var _default=SHA3;exports["default"]=_default;
},{"./sponge":28,"buffer":12}],28:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _buffer=require("buffer");var _permute=_interopRequireDefault(require("./permute"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var xorWords=function xorWords(I,O){for(var i=0;i<I.length;i+=8){var o=i/4;O[o]^=I[i+7]<<24|I[i+6]<<16|I[i+5]<<8|I[i+4];O[o+1]^=I[i+3]<<24|I[i+2]<<16|I[i+1]<<8|I[i]}return O};var readWords=function readWords(I,O){for(var o=0;o<O.length;o+=8){var i=o/4;O[o]=I[i+1];O[o+1]=I[i+1]>>>8;O[o+2]=I[i+1]>>>16;O[o+3]=I[i+1]>>>24;O[o+4]=I[i];O[o+5]=I[i]>>>8;O[o+6]=I[i]>>>16;O[o+7]=I[i]>>>24}return O};var Sponge=function Sponge(_ref){var _this=this;var capacity=_ref.capacity,padding=_ref.padding;var keccak=(0,_permute["default"])();var stateSize=200;var blockSize=capacity/8;var queueSize=stateSize-capacity/4;var queueOffset=0;var state=new Uint32Array(stateSize/4);var queue=_buffer.Buffer.allocUnsafe(queueSize);this.absorb=function(buffer){for(var i=0;i<buffer.length;i++){queue[queueOffset]=buffer[i];queueOffset+=1;if(queueOffset>=queueSize){xorWords(queue,state);keccak(state);queueOffset=0}}return _this};this.squeeze=function(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var output={buffer:options.buffer||_buffer.Buffer.allocUnsafe(blockSize),padding:options.padding||padding,queue:_buffer.Buffer.allocUnsafe(queue.length),state:new Uint32Array(state.length)};queue.copy(output.queue);for(var i=0;i<state.length;i++){output.state[i]=state[i]}output.queue.fill(0,queueOffset);output.queue[queueOffset]|=output.padding;output.queue[queueSize-1]|=128;xorWords(output.queue,output.state);for(var offset=0;offset<output.buffer.length;offset+=queueSize){keccak(output.state);readWords(output.state,output.buffer.slice(offset,offset+queueSize))}return output.buffer};this.reset=function(){queue.fill(0);state.fill(0);queueOffset=0;return _this};return this};var _default=Sponge;exports["default"]=_default;
},{"./permute":31,"buffer":12}],29:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _copy=_interopRequireDefault(require("../copy"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var chi=function chi(_ref){var A=_ref.A,C=_ref.C;for(var y=0;y<25;y+=5){for(var x=0;x<5;x++){(0,_copy["default"])(A,y+x)(C,x)}for(var _x=0;_x<5;_x++){var xy=(y+_x)*2;var x1=(_x+1)%5*2;var x2=(_x+2)%5*2;A[xy]^=~C[x1]&C[x2];A[xy+1]^=~C[x1+1]&C[x2+1]}}};var _default=chi;exports["default"]=_default;
},{"../copy":30}],30:[function(require,module,exports){
"use strict";var copy=function copy(I,i){return function(O,o){var oi=o*2;var ii=i*2;O[oi]=I[ii];O[oi+1]=I[ii+1]}};module.exports=copy;
},{}],31:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _chi=_interopRequireDefault(require("./chi"));var _iota=_interopRequireDefault(require("./iota"));var _rhoPi=_interopRequireDefault(require("./rho-pi"));var _theta=_interopRequireDefault(require("./theta"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var permute=function permute(){var C=new Uint32Array(10);var D=new Uint32Array(10);var W=new Uint32Array(2);return function(A){for(var roundIndex=0;roundIndex<24;roundIndex++){(0,_theta["default"])({A:A,C:C,D:D,W:W});(0,_rhoPi["default"])({A:A,C:C,W:W});(0,_chi["default"])({A:A,C:C});(0,_iota["default"])({A:A,roundIndex:roundIndex})}C.fill(0);D.fill(0);W.fill(0)}};var _default=permute;exports["default"]=_default;
},{"./chi":29,"./iota":32,"./rho-pi":34,"./theta":37}],32:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _roundConstants=_interopRequireDefault(require("./round-constants"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var iota=function iota(_ref){var A=_ref.A,roundIndex=_ref.roundIndex;var i=roundIndex*2;A[0]^=_roundConstants["default"][i];A[1]^=_roundConstants["default"][i+1]};var _default=iota;exports["default"]=_default;
},{"./round-constants":33}],33:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var ROUND_CONSTANTS=new Uint32Array([0,1,0,32898,2147483648,32906,2147483648,2147516416,0,32907,0,2147483649,2147483648,2147516545,2147483648,32777,0,138,0,136,0,2147516425,0,2147483658,0,2147516555,2147483648,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,0,32778,2147483648,2147483658,2147483648,2147516545,2147483648,32896,0,2147483649,2147483648,2147516424]);var _default=ROUND_CONSTANTS;exports["default"]=_default;
},{}],34:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _piShuffles=_interopRequireDefault(require("./pi-shuffles"));var _rhoOffsets=_interopRequireDefault(require("./rho-offsets"));var _copy=_interopRequireDefault(require("../copy"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var rhoPi=function rhoPi(_ref){var A=_ref.A,C=_ref.C,W=_ref.W;(0,_copy["default"])(A,1)(W,0);var H=0;var L=0;var Wi=0;var ri=32;for(var i=0;i<24;i++){var j=_piShuffles["default"][i];var r=_rhoOffsets["default"][i];(0,_copy["default"])(A,j)(C,0);H=W[0];L=W[1];ri=32-r;Wi=r<32?0:1;W[Wi]=H<<r|L>>>ri;W[(Wi+1)%2]=L<<r|H>>>ri;(0,_copy["default"])(W,0)(A,j);(0,_copy["default"])(C,0)(W,0)}};var _default=rhoPi;exports["default"]=_default;
},{"../copy":30,"./pi-shuffles":35,"./rho-offsets":36}],35:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var PI_SHUFFLES=[10,7,11,17,18,3,5,16,8,21,24,4,15,23,19,13,12,2,20,14,22,9,6,1];var _default=PI_SHUFFLES;exports["default"]=_default;
},{}],36:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var RHO_OFFSETS=[1,3,6,10,15,21,28,36,45,55,2,14,27,41,56,8,25,43,62,18,39,61,20,44];var _default=RHO_OFFSETS;exports["default"]=_default;
},{}],37:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _copy=_interopRequireDefault(require("../copy"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var theta=function theta(_ref){var A=_ref.A,C=_ref.C,D=_ref.D,W=_ref.W;var H=0;var L=0;for(var x=0;x<5;x++){var x20=x*2;var x21=(x+5)*2;var x22=(x+10)*2;var x23=(x+15)*2;var x24=(x+20)*2;C[x20]=A[x20]^A[x21]^A[x22]^A[x23]^A[x24];C[x20+1]=A[x20+1]^A[x21+1]^A[x22+1]^A[x23+1]^A[x24+1]}for(var _x=0;_x<5;_x++){(0,_copy["default"])(C,(_x+1)%5)(W,0);H=W[0];L=W[1];W[0]=H<<1|L>>>31;W[1]=L<<1|H>>>31;D[_x*2]=C[(_x+4)%5*2]^W[0];D[_x*2+1]=C[(_x+4)%5*2+1]^W[1];for(var y=0;y<25;y+=5){A[(y+_x)*2]^=D[_x*2];A[(y+_x)*2+1]^=D[_x*2+1]}}};var _default=theta;exports["default"]=_default;
},{"../copy":30}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.toNameData = exports.supportsNameData = exports.toBytes = exports.toCoinAddrData = exports.supportsCoinAddrData = exports.toAddress = exports.toAddrData = exports.supportsAddrData = exports.toResolverData = exports.toBoolean = exports.supportsInterface = void 0;
var hex_1 = require("./hex");
// eip-165
var supportsInterface = function (interfaceId) { return "0x01ffc9a7" + hex_1.stripHexPrefix(interfaceId) + "00000000000000000000000000000000000000000000000000000000"; };
exports.supportsInterface = supportsInterface;
var toBoolean = function (result) { return (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000'); };
exports.toBoolean = toBoolean;
// registry
var toResolverData = function (node) { return '0x0178b8bf' + hex_1.stripHexPrefix(node); };
exports.toResolverData = toResolverData;
// addr
var ADDR_METHOD_SIG = '0x3b3b57de';
exports.supportsAddrData = exports.supportsInterface(ADDR_METHOD_SIG);
var toAddrData = function (node) { return ADDR_METHOD_SIG + hex_1.stripHexPrefix(node); };
exports.toAddrData = toAddrData;
var toAddress = function (result) { return '0x' + result.slice(-40); };
exports.toAddress = toAddress;
// coin addr
var COIN_ADDR_METHOD_SIG = '0xf1cb7e06';
exports.supportsCoinAddrData = exports.supportsInterface(COIN_ADDR_METHOD_SIG);
var toCoinAddrData = function (node, coinType) { return COIN_ADDR_METHOD_SIG + hex_1.stripHexPrefix(node) + coinType.toString(16).padStart(64, '0'); };
exports.toCoinAddrData = toCoinAddrData;
var toBytes = function (result) { return result.slice(130, 130 + parseInt(result.slice(66, 130), 16) * 2); };
exports.toBytes = toBytes;
// name
var NAME_METHOD_SIG = '0x691f3431';
exports.supportsNameData = exports.supportsInterface(NAME_METHOD_SIG);
var toNameData = function (node) { return NAME_METHOD_SIG + hex_1.stripHexPrefix(node); };
exports.toNameData = toNameData;
var toString = function (result) {
    var hex = exports.toBytes(result);
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex[i] + hex[i + 1], 16));
    return str;
};
exports.toString = toString;

},{"./hex":42}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_BYTES = exports.ZERO_ADDRESS = void 0;
exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.ZERO_BYTES = '';

},{}],40:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameResolverContract = exports.CoinAddrResolverContract = exports.AddrResolverContract = exports.RegistryContract = void 0;
var abi_1 = require("./abi");
var BaseContract = /** @class */ (function () {
    function BaseContract(address, ethCall) {
        this.address = address;
        this.ethCall = ethCall;
    }
    return BaseContract;
}());
var EIP165Contract = /** @class */ (function (_super) {
    __extends(EIP165Contract, _super);
    function EIP165Contract(address, ethCall, interfaceId) {
        var _this = _super.call(this, address, ethCall) || this;
        _this.isInterfaceSupported = function () { return _this.ethCall(_this.address, _this.interfaceId).then(abi_1.toBoolean); };
        _this.interfaceId = interfaceId;
        return _this;
    }
    return EIP165Contract;
}(BaseContract));
var RegistryContract = /** @class */ (function (_super) {
    __extends(RegistryContract, _super);
    function RegistryContract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getResolver = function (node) { return _this.ethCall(_this.address, abi_1.toResolverData(node)).then(abi_1.toAddress); };
        return _this;
    }
    return RegistryContract;
}(BaseContract));
exports.RegistryContract = RegistryContract;
var AddrResolverContract = /** @class */ (function (_super) {
    __extends(AddrResolverContract, _super);
    function AddrResolverContract(address, ethCall) {
        var _this = _super.call(this, address, ethCall, abi_1.supportsAddrData) || this;
        _this.getAddr = function (node) { return _this.ethCall(_this.address, abi_1.toAddrData(node)).then(abi_1.toAddress); };
        return _this;
    }
    return AddrResolverContract;
}(EIP165Contract));
exports.AddrResolverContract = AddrResolverContract;
var CoinAddrResolverContract = /** @class */ (function (_super) {
    __extends(CoinAddrResolverContract, _super);
    function CoinAddrResolverContract(address, ethCall) {
        var _this = _super.call(this, address, ethCall, abi_1.supportsCoinAddrData) || this;
        _this.getCoinAddr = function (node, coinType) { return _this.ethCall(_this.address, abi_1.toCoinAddrData(node, coinType)).then(abi_1.toBytes); };
        return _this;
    }
    return CoinAddrResolverContract;
}(EIP165Contract));
exports.CoinAddrResolverContract = CoinAddrResolverContract;
var NameResolverContract = /** @class */ (function (_super) {
    __extends(NameResolverContract, _super);
    function NameResolverContract(address, ethCall) {
        var _this = _super.call(this, address, ethCall, abi_1.supportsNameData) || this;
        _this.getName = function (node) { return _this.ethCall(_this.address, abi_1.toNameData(node)).then(abi_1.toString); };
        return _this;
    }
    return NameResolverContract;
}(EIP165Contract));
exports.NameResolverContract = NameResolverContract;

},{"./abi":38}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_NO_NAME_SET = exports.ERROR_NOT_NAME_RESOLVER = exports.ERROR_NO_REVERSE_RECORD = exports.ERROR_NO_COIN_ADDR_SET = exports.ERROR_NO_ADDR_SET = exports.ERROR_NOT_COIN_ADDR = exports.ERROR_NOT_ADDR = exports.ERROR_NO_RESOLVER = void 0;
exports.ERROR_NO_RESOLVER = 'Domain has no resolver';
exports.ERROR_NOT_ADDR = 'Domain has no addr resolver';
exports.ERROR_NOT_COIN_ADDR = 'Domain has no coin addr resolver';
exports.ERROR_NO_ADDR_SET = 'Domain has no address set';
exports.ERROR_NO_COIN_ADDR_SET = 'Domain has no coin address set';
exports.ERROR_NO_REVERSE_RECORD = 'Address has no reverse record';
exports.ERROR_NOT_NAME_RESOLVER = 'Reverse record has no name resolver';
exports.ERROR_NO_NAME_SET = 'Reverse record has no name set';

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripHexPrefix = void 0;
var stripHexPrefix = function (hex) { return hex.slice(2); };
exports.stripHexPrefix = stripHexPrefix;

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_1 = require("./resolver");
exports.default = resolver_1.Resolver;

},{"./resolver":44}],44:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolver = void 0;
// eslint-disable-next-line
/// <reference path="index.d.ts"/>
var eth_ens_namehash_1 = require("eth-ens-namehash");
var crypto_addr_codec_1 = require("crypto-addr-codec");
var address_encoder_1 = require("@ensdomains/address-encoder");
var rpc_1 = require("./rpc");
var errors = __importStar(require("./errors"));
var contracts_1 = require("./contracts");
var constants_1 = require("./constants");
var reverse_1 = require("./reverse");
var Resolver = /** @class */ (function () {
    function Resolver(config) {
        var _a;
        var ethCall = rpc_1.ethCallFactory((_a = config.fetch) !== null && _a !== void 0 ? _a : fetch, config.rpcUrl);
        this.registry = new contracts_1.RegistryContract(config.registryAddress, ethCall);
        this.addrResolverContractFactory = function (address) { return new contracts_1.AddrResolverContract(address, ethCall); };
        this.coinAddrResolverContractFactory = function (address) { return new contracts_1.CoinAddrResolverContract(address, ethCall); };
        this.nameResolverContractFactory = function (address) { return new contracts_1.NameResolverContract(address, ethCall); };
        this.defaultCoinType = config.defaultCoinType;
        this.addrEncoder = config.addrEncoder;
    }
    Resolver.prototype._addr = function (resolverAddress, node) {
        return __awaiter(this, void 0, void 0, function () {
            var addrResolverContract, supportsAddr, addr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addrResolverContract = this.addrResolverContractFactory(resolverAddress);
                        return [4 /*yield*/, addrResolverContract.isInterfaceSupported()];
                    case 1:
                        supportsAddr = _a.sent();
                        if (!supportsAddr)
                            throw new Error(errors.ERROR_NOT_ADDR);
                        return [4 /*yield*/, addrResolverContract.getAddr(node)];
                    case 2:
                        addr = _a.sent();
                        if (addr === constants_1.ZERO_ADDRESS)
                            throw new Error(errors.ERROR_NO_ADDR_SET);
                        return [2 /*return*/, this.addrEncoder(Buffer.from(addr.slice(2), 'hex'))];
                }
            });
        });
    };
    Resolver.prototype._coinAddr = function (resolverAddress, node, coinType) {
        return __awaiter(this, void 0, void 0, function () {
            var coinAddrResolverContract, supportsCoinAddr, addr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coinAddrResolverContract = this.coinAddrResolverContractFactory(resolverAddress);
                        return [4 /*yield*/, coinAddrResolverContract.isInterfaceSupported()];
                    case 1:
                        supportsCoinAddr = _a.sent();
                        if (!supportsCoinAddr)
                            throw new Error(errors.ERROR_NOT_COIN_ADDR);
                        return [4 /*yield*/, coinAddrResolverContract.getCoinAddr(node, coinType)];
                    case 2:
                        addr = _a.sent();
                        if (addr === constants_1.ZERO_BYTES)
                            throw new Error(errors.ERROR_NO_COIN_ADDR_SET);
                        return [2 /*return*/, address_encoder_1.formatsByCoinType[coinType].encoder(Buffer.from(addr, 'hex'))];
                }
            });
        });
    };
    Resolver.prototype.addr = function (domain, coinType) {
        return __awaiter(this, void 0, void 0, function () {
            var node, resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = eth_ens_namehash_1.hash(domain);
                        return [4 /*yield*/, this.registry.getResolver(node)];
                    case 1:
                        resolverAddress = _a.sent();
                        if (resolverAddress === constants_1.ZERO_ADDRESS)
                            throw new Error(errors.ERROR_NO_RESOLVER);
                        if (!(!coinType && coinType !== 0 || coinType === this.defaultCoinType)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._addr(resolverAddress, node)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this._coinAddr(resolverAddress, node, coinType)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Resolver.prototype.reverse = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var reverseRecord, resolverAddress, nameResolverContract, supportsName, name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reverseRecord = reverse_1.getReverseRecord(address);
                        return [4 /*yield*/, this.registry.getResolver(reverseRecord)];
                    case 1:
                        resolverAddress = _a.sent();
                        if (resolverAddress == constants_1.ZERO_ADDRESS)
                            throw new Error(errors.ERROR_NO_REVERSE_RECORD);
                        nameResolverContract = this.nameResolverContractFactory(resolverAddress);
                        return [4 /*yield*/, nameResolverContract.isInterfaceSupported()];
                    case 2:
                        supportsName = _a.sent();
                        if (!supportsName)
                            throw new Error(errors.ERROR_NOT_NAME_RESOLVER);
                        return [4 /*yield*/, nameResolverContract.getName(reverseRecord)];
                    case 3:
                        name = _a.sent();
                        if (!name)
                            throw new Error(errors.ERROR_NO_NAME_SET);
                        return [2 /*return*/, name];
                }
            });
        });
    };
    Resolver.forRskMainnet = function (config) { return new Resolver(__assign({ registryAddress: '0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5', rpcUrl: 'https://public-node.rsk.co', addrEncoder: function (buff) { return crypto_addr_codec_1.toChecksumAddress("0x" + buff.toString('hex'), 30); }, defaultCoinType: 137 }, config)); };
    Resolver.forRskTestnet = function (config) { return new Resolver(__assign({ registryAddress: '0x7d284aaac6e925aad802a53c0c69efe3764597b8', rpcUrl: 'https://public-node.testnet.rsk.co', addrEncoder: function (buff) { return crypto_addr_codec_1.toChecksumAddress("0x" + buff.toString('hex'), 31); }, defaultCoinType: 137 }, config)); };
    return Resolver;
}());
exports.Resolver = Resolver;

}).call(this)}).call(this,require("buffer").Buffer)
},{"./constants":39,"./contracts":40,"./errors":41,"./reverse":45,"./rpc":46,"@ensdomains/address-encoder":1,"buffer":12,"crypto-addr-codec":15,"eth-ens-namehash":17}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReverseRecord = void 0;
var eth_ens_namehash_1 = require("eth-ens-namehash");
var hex_1 = require("./hex");
var getReverseRecord = function (address) { return eth_ens_namehash_1.hash(hex_1.stripHexPrefix(address) + ".addr.reverse"); };
exports.getReverseRecord = getReverseRecord;

},{"./hex":42,"eth-ens-namehash":17}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethCallFactory = void 0;
var ethCallFactory = function (fetch, rpcUrl) { return function (to, data) { return fetch(rpcUrl, {
    method: 'post',
    body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_call',
        id: 666,
        params: [{ to: to, data: data }, 'latest']
    }),
    headers: { 'Content-Type': 'application/json' },
}).then(function (res) { return res.json(); })
    .then(function (_a) {
    var result = _a.result, error = _a.error, id = _a.id;
    if (id !== 666)
        throw new Error('Invalid RPC response: id mismatch');
    if (error)
        throw new Error('RPC Call error: ' + JSON.stringify(error));
    return result;
}); }; };
exports.ethCallFactory = ethCallFactory;

},{}]},{},[43])(43)
});
