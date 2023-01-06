(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function u(){}function I(e){return e()}function S(){return Object.create(null)}function b(e){e.forEach(I)}function T(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function R(e){return Object.keys(e).length===0}function B(e,...t){if(e==null)return u;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function K(e,t,n){e.$$.on_destroy.push(B(t,n))}function D(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function J(){return G("")}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}let m;function p(e){m=e}function P(){if(!m)throw new Error("Function called outside component initialization");return m}function q(e){P().$$.on_mount.push(e)}function z(e){P().$$.on_destroy.push(e)}const h=[],M=[],g=[],j=[],V=Promise.resolve();let $=!1;function W(){$||($=!0,V.then(F))}function w(e){g.push(e)}const y=new Set;let _=0;function F(){const e=m;do{for(;_<h.length;){const t=h[_];_++,p(t),X(t.$$)}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];y.has(n)||(y.add(n),n())}g.length=0}while(h.length);for(;j.length;)j.pop()();$=!1,y.clear(),p(e)}function X(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}const Y=new Set;function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||w(()=>{const i=e.$$.on_mount.map(I).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...i):b(i),e.$$.on_mount=[]}),c.forEach(w)}function te(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(h.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,r,o,c,i,f=[-1]){const l=m;p(e);const s=e.$$={fragment:null,ctx:[],props:c,update:u,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:S(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};i&&i(s.root);let E=!1;if(s.ctx=n?n(e,t.props||{},(a,v,...N)=>{const L=N.length?N[0]:v;return s.ctx&&o(s.ctx[a],s.ctx[a]=L)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](L),E&&ne(e,a)),v}):[],s.update(),E=!0,b(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=Q(t.target);s.fragment&&s.fragment.l(a),a.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),F()}p(l)}class re{$destroy(){te(this,1),this.$destroy=u}$on(t,n){if(!T(n))return u;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!R(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const d=[];function se(e,t=u){let n;const r=new Set;function o(f){if(U(e,f)&&(e=f,n)){const l=!d.length;for(const s of r)s[1](),d.push(s,e);if(l){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function c(f){o(f(e))}function i(f,l=u){const s=[f,l];return r.add(s),r.size===1&&(n=t(o)||u),f(e),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:o,update:c,subscribe:i}}async function ce(e,t={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},o=(()=>{try{return window.GetParentResourceName()}catch{return"resource-name"}})();try{return await(await fetch(`https://${o}/${e}`,n)).json()}catch{}}const ie=()=>{const e={show:se(!1)};return{...e,...{closeUI(){e.show.set(!1),ce("closeUI")},receiveShowMessage(){e.show.set(!0)}}}},k=ie();function ue(){function e(t){switch(t.data.action){case"open":k.receiveShowMessage()}}q(()=>window.addEventListener("message",e)),z(()=>window.removeEventListener("message",e))}function fe(){function e(t){t.key=="Escape"&&k.closeUI()}q(()=>window.addEventListener("keyup",e)),z(()=>window.removeEventListener("keyup",e))}function le(e={}){window.dispatchEvent(new MessageEvent("message",{data:e}))}function ae(){setTimeout(()=>{le({action:"open"})},200)}function A(e){let t,n;return{c(){t=C("main"),n=C("div"),n.innerHTML='<p class="text-center">Hello from svelte land!</p>',O(n,"class","bg-dark-400 text-2xl text-white p-5"),O(t,"class","min-h-screen bg-transparent")},m(r,o){H(r,t,o),D(t,n)},p:u,d(r){r&&x(t)}}}function de(e){let t,n=e[0]&&A();return{c(){n&&n.c(),t=J()},m(r,o){n&&n.m(r,o),H(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=A(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:u,o:u,d(r){n&&n.d(r),r&&x(t)}}}function he(e,t,n){let r;const{show:o}=k;return K(e,o,c=>n(0,r=c)),ue(),fe(),ae(),[r,o]}class pe extends re{constructor(t){super(),oe(this,t,he,de,U,{})}}new pe({target:document.getElementById("app")});