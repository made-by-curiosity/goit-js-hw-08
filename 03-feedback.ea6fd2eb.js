function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=p();if(j(e))return h(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,v&&r?b(e):(r=o=void 0,a)}function w(){var e=p(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(x,t),b(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]'),submitBtn:document.querySelector('button[type="submit"]')},S=JSON.parse(localStorage.getItem("feedback-form-state"));let j=S||{};S&&(b.emailInput.value=j.email||"",b.textarea.value=j.message||""),b.form.addEventListener("input",e(t)((function(e){const t=e.target.name,n=e.target.value;j[t]=n,console.log(j),localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),b.submitBtn.addEventListener("click",e(t)((function(e){e.preventDefault(),b.form.reset(),localStorage.clear(),j={}}),500));
//# sourceMappingURL=03-feedback.ea6fd2eb.js.map
