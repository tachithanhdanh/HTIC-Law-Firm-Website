(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{5157:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return S}});let r=n(7677),o=n(4848),i=r._(n(6540)),s=n(6847),u=n(7785),l=n(2772),c=n(1278),a=n(6185),f=n(7644),d=n(6334),h=n(5157),p=n(296),_=n(1903),m=new Set;function y(e,t,n,r){if((0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let S=i.default.forwardRef(function(e,t){let n,r;let{href:l,as:m,children:S,prefetch:g=null,passHref:b,replace:j,shallow:R,scroll:C,locale:F,onClick:O,onMouseEnter:x,onTouchStart:z,legacyBehavior:k=!1,...M}=e;n=S,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let P=i.default.useContext(f.RouterContext),E=!1!==g,{href:w,as:T}=i.default.useMemo(()=>{if(!P){let e=v(l);return{href:e,as:m?v(m):e}}let[e,t]=(0,s.resolveHref)(P,l,!0);return{href:e,as:m?(0,s.resolveHref)(P,m):t||e}},[P,l,m]),A=i.default.useRef(w),I=i.default.useRef(T);k&&(r=i.default.Children.only(n));let L=k?r&&"object"==typeof r&&r.ref:t,[N,q,U]=(0,d.useIntersection)({rootMargin:"200px"}),D=i.default.useCallback(e=>{(I.current!==T||A.current!==w)&&(U(),I.current=T,A.current=w),N(e)},[T,w,U,N]),K=(0,_.useMergedRef)(D,L);i.default.useEffect(()=>{P&&q&&E&&y(P,w,T,{locale:F})},[T,w,q,F,E,null==P?void 0:P.locale,P]);let B={ref:K,onClick(e){k||"function"!=typeof O||O(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,l){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,u.isLocalURL)(n))||(e.preventDefault(),(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})())}(e,P,w,T,j,R,C,F)},onMouseEnter(e){k||"function"!=typeof x||x(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&y(P,w,T,{locale:F,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){k||"function"!=typeof z||z(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&y(P,w,T,{locale:F,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(T))B.href=T;else if(!k||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==F?F:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,h.getDomainLocale)(T,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);B.href=t||(0,p.addBasePath)((0,a.addLocale)(T,e,null==P?void 0:P.defaultLocale))}return k?i.default.cloneElement(r,B):(0,o.jsx)("a",{...M,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(6540),o=n(4959),i="function"==typeof IntersectionObserver,s=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!i,[a,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),s.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[h,a,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(6540);function o(e,t){let n=(0,r.useRef)(()=>{}),o=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),o.current()):(n.current=i(e,r),o.current=i(t,r))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2532:(e,t,n)=>{"use strict";var r=n(7836);n(9750);var o=n(6540),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(o),s=void 0!==r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?s:o;c(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var a=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},f={};function d(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return f[r]||(f[r]="jsx-"+a(e+"-"+n)),f[r]}function h(e,t){var n=e+t;return f[n]||(f[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=d(r,n);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return h(o,e)}):[h(o,t)]}}return{styleId:d(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),_=o.createContext(null);_.displayName="StyleSheetContext";var m=i.default.useInsertionEffect||i.default.useLayoutEffect,y=new p;function v(e){var t=y||o.useContext(_);return t&&m(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=v},5703:(e,t,n)=>{"use strict";e.exports=n(2532).style},9750:()=>{},1106:(e,t,n)=>{e.exports=n(6397)}}]);