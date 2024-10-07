import{L as qt,d as N,c as Q,t as M,v as j,x as m,M as T,N as w,O as Gt,_ as rt,g as dt,r as Kt,z as E,C as jt,D as Tt,B as Jt,y as Wt}from"./BDL-CmaN.js";const Yt=""+new URL("profile.B-Q9ycjo.png",import.meta.url).href,Dt=qt({isDarkMode:!1}),Xt={getIsDarkMode:()=>Dt.isDarkMode},Zt={setIsDarkMode(t){Dt.isDarkMode=t}},O={...Xt,...Zt},te={class:"noSelect flex md:p-2 gap-2 md:gap-28 lg:gap-2 lg:mx-32 2xl:mx-48"},ee=Gt('<div class="flex-1 flex-col" data-v-a65c9c8a><h1 class="text-2xl md:text-[2rem] font-semibold" data-v-a65c9c8a>¡Hola!</h1><p class="text-justify md:text-[2rem]" data-v-a65c9c8a> Me llamo <b data-v-a65c9c8a>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes y escalables. </p><button class="button-default" data-v-a65c9c8a><span class="ns-button__content" data-v-a65c9c8a>Download CV</span></button></div>',1),ne={class:"flex justify-center items-center rounded-b-full"},oe=["src"],se=N({__name:"index",setup(t){const e=Q(()=>O.getIsDarkMode());return(n,s)=>(M(),j("div",te,[ee,m("div",ne,[m("img",{class:T([w(e)?"bg-Content":"bg-light","card rounded-b-full w-40 md:w-52"]),src:w(Yt),alt:""},null,10,oe)])]))}}),re=rt(se,[["__scopeId","data-v-a65c9c8a"]]),L=/^[a-z0-9]+(-[a-z0-9]+)*$/,U=(t,e,n,s="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:s,prefix:a,name:c};return e&&!R(l)?null:l}const r=o[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return e&&!R(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:r};return e&&!R(c,n)?null:c}return null},R=(t,e)=>t?!!((t.provider===""||t.provider.match(L))&&(e&&t.prefix===""||t.prefix.match(L))&&t.name.match(L)):!1,Pt=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),q=Object.freeze({...Pt,...H}),X=Object.freeze({...q,body:"",hidden:!1});function ie(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function pt(t,e){const n=ie(t,e);for(const s in X)s in H?s in t&&!(s in n)&&(n[s]=H[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function ce(t,e){const n=t.icons,s=t.aliases||Object.create(null),o=Object.create(null);function r(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=s[i]&&s[i].parent,a=c&&r(c);a&&(o[i]=[c].concat(a))}return o[i]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(r),o}function ae(t,e,n){const s=t.icons,o=t.aliases||Object.create(null);let r={};function i(c){r=pt(s[c]||o[c],r)}return i(e),n.forEach(i),pt(t,r)}function Et(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const s=ce(t);for(const o in s){const r=s[o];r&&(e(o,ae(t,o,r)),n.push(o))}return n}const le={provider:"",aliases:{},not_found:{},...Pt};function W(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Lt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!W(t,le))return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(L)||typeof r.body!="string"||!W(r,X))return null}const s=e.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(L)||typeof i!="string"||!n[i]&&!s[i]||!W(r,X))return null}return e}const ht=Object.create(null);function fe(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function k(t,e){const n=ht[t]||(ht[t]=Object.create(null));return n[e]||(n[e]=fe(t,e))}function it(t,e){return Lt(e)?Et(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function ue(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let F=!1;function Ot(t){return typeof t=="boolean"&&(F=t),F}function de(t){const e=typeof t=="string"?U(t,!0,F):t;if(e){const n=k(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function pe(t,e){const n=U(t,!0,F);if(!n)return!1;const s=k(n.provider,n.prefix);return ue(s,n.name,e)}function he(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),F&&!e&&!t.prefix){let o=!1;return Lt(t)&&(t.prefix="",Et(t,(r,i)=>{i&&pe(r,i)&&(o=!0)})),o}const n=t.prefix;if(!R({provider:e,prefix:n,name:"a"}))return!1;const s=k(e,n);return!!it(s,t)}const Ft=Object.freeze({width:null,height:null}),At=Object.freeze({...Ft,...H}),ge=/(-?[0-9.]*[0-9]+[0-9.]*)/g,me=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function gt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(ge);if(s===null||!s.length)return t;const o=[];let r=s.shift(),i=me.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}function be(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const o=t.indexOf(">",s),r=t.indexOf("</"+e);if(o===-1||r===-1)break;const i=t.indexOf(">",r);if(i===-1)break;n+=t.slice(o+1,r).trim(),t=t.slice(0,s).trim()+t.slice(i+1)}return{defs:n,content:t}}function ye(t,e){return t?"<defs>"+t+"</defs>"+e:e}function xe(t,e,n){const s=be(t);return ye(s.defs,e+s.content+n)}const ve=t=>t==="unset"||t==="undefined"||t==="none";function we(t,e){const n={...q,...t},s={...At,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(g=>{const u=[],C=g.hFlip,I=g.vFlip;let v=g.rotate;C?I?v+=2:(u.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),u.push("scale(-1 1)"),o.top=o.left=0):I&&(u.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),u.push("scale(1 -1)"),o.top=o.left=0);let y;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:y=o.height/2+o.top,u.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:u.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,u.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}v%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),u.length&&(r=xe(r,'<g transform="'+u.join(" ")+'">',"</g>"))});const i=s.width,c=s.height,a=o.width,l=o.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?l:c,f=gt(d,a/l)):(f=i==="auto"?a:i,d=c===null?gt(f,l/a):c==="auto"?l:c);const h={},b=(g,u)=>{ve(u)||(h[g]=u.toString())};b("width",f),b("height",d);const _=[o.left,o.top,a,l];return h.viewBox=_.join(" "),{attributes:h,viewBox:_,body:r}}const _e=/\sid="(\S+)"/g,Ie="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Se=0;function ke(t,e=Ie){const n=[];let s;for(;s=_e.exec(t);)n.push(s[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const i=typeof e=="function"?e(r):e+(Se++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const Z=Object.create(null);function Ce(t,e){Z[t]=e}function tt(t){return Z[t]||Z[""]}function ct(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const at=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],V=[];for(;P.length>0;)P.length===1||Math.random()>.5?V.push(P.shift()):V.push(P.pop());at[""]=ct({resources:["https://api.iconify.design"].concat(V)});function Me(t,e){const n=ct(e);return n===null?!1:(at[t]=n,!0)}function lt(t){return at[t]}const je=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let mt=je();function Te(t,e){const n=lt(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const r=e+".json?icons=";s=n.maxURL-o-n.path.length-r.length}return s}function De(t){return t===404}const Pe=(t,e,n)=>{const s=[],o=Te(t,e),r="icons";let i={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(s.push(i),i={type:r,provider:t,prefix:e,icons:[]},c=a.length),i.icons.push(a)}),s.push(i),s};function Ee(t){if(typeof t=="string"){const e=lt(t);if(e)return e.path}return"/"}const Le=(t,e,n)=>{if(!mt){n("abort",424);return}let s=Ee(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});s+=r+".json?"+a.toString();break}case"custom":{const r=e.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;mt(t+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{n(De(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},Oe={prepare:Pe,send:Le};function Fe(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,c=o.name,a=n[r]||(n[r]=Object.create(null)),l=a[i]||(a[i]=k(r,i));let f;c in l.icons?f=e.loaded:i===""||l.missing.has(c)?f=e.missing:f=e.pending;const d={provider:r,prefix:i,name:c};f.push(d)}),e}function Nt(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(o=>o.id!==e))})}function Ae(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,o=t.prefix;e.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(t.icons[l])i.loaded.push({provider:s,prefix:o,name:l});else if(t.missing.has(l))i.missing.push({provider:s,prefix:o,name:l});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Nt([t],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Ne=0;function $e(t,e,n){const s=Ne++,o=Nt.bind(null,n,s);if(!e.pending.length)return o;const r={id:s,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}function Be(t,e=!0,n=!1){const s=[];return t.forEach(o=>{const r=typeof o=="string"?U(o,e,n):o;r&&s.push(r)}),s}var Re={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ve(t,e,n,s){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let p=t.resources.slice(0);for(i=[];p.length>1;){const x=Math.floor(Math.random()*p.length);i.push(p[x]),p=p.slice(0,x).concat(p.slice(x+1))}i=i.concat(p)}else i=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a="pending",l=0,f,d=null,h=[],b=[];typeof s=="function"&&b.push(s);function _(){d&&(clearTimeout(d),d=null)}function g(){a==="pending"&&(a="aborted"),_(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function u(p,x){x&&(b=[]),typeof p=="function"&&b.push(p)}function C(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:h.length,subscribe:u,abort:g}}function I(){a="failed",b.forEach(p=>{p(void 0,f)})}function v(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function y(p,x,D){const $=x!=="success";switch(h=h.filter(S=>S!==p),a){case"pending":break;case"failed":if($||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){f=D,I();return}if($){f=D,h.length||(i.length?J():I());return}if(_(),v(),!t.random){const S=t.resources.indexOf(p.resource);S!==-1&&S!==t.index&&(t.index=S)}a="completed",b.forEach(S=>{S(D)})}function J(){if(a!=="pending")return;_();const p=i.shift();if(p===void 0){if(h.length){d=setTimeout(()=>{_(),a==="pending"&&(v(),I())},t.timeout);return}I();return}const x={status:"pending",resource:p,callback:(D,$)=>{y(x,D,$)}};h.push(x),l++,d=setTimeout(J,t.rotate),n(p,e,x.callback)}return setTimeout(J),C}function $t(t){const e={...Re,...t};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const f=Ve(e,c,a,(d,h)=>{s(),l&&l(d,h)});return n.push(f),f}function r(c){return n.find(a=>c(a))||null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:s}}function bt(){}const Y=Object.create(null);function ze(t){if(!Y[t]){const e=lt(t);if(!e)return;const n=$t(e),s={config:e,redundancy:n};Y[t]=s}return Y[t]}function He(t,e,n){let s,o;if(typeof t=="string"){const r=tt(t);if(!r)return n(void 0,424),bt;o=r.send;const i=ze(t);i&&(s=i.redundancy)}else{const r=ct(t);if(r){s=$t(r);const i=t.resources?t.resources[0]:"",c=tt(i);c&&(o=c.send)}}return!s||!o?(n(void 0,424),bt):s.query(e,o,n)().abort}const yt="iconify2",A="iconify",Bt=A+"-count",xt=A+"-version",Rt=36e5,Qe=168,Ue=50;function et(t,e){try{return t.getItem(e)}catch{}}function ft(t,e,n){try{return t.setItem(e,n),!0}catch{}}function vt(t,e){try{t.removeItem(e)}catch{}}function nt(t,e){return ft(t,Bt,e.toString())}function ot(t){return parseInt(et(t,Bt))||0}const G={local:!0,session:!0},Vt={local:new Set,session:new Set};let ut=!1;function qe(t){ut=t}let B=typeof window>"u"?{}:window;function zt(t){const e=t+"Storage";try{if(B&&B[e]&&typeof B[e].length=="number")return B[e]}catch{}G[t]=!1}function Ht(t,e){const n=zt(t);if(!n)return;const s=et(n,xt);if(s!==yt){if(s){const c=ot(n);for(let a=0;a<c;a++)vt(n,A+a.toString())}ft(n,xt,yt),nt(n,0);return}const o=Math.floor(Date.now()/Rt)-Qe,r=c=>{const a=A+c.toString(),l=et(n,a);if(typeof l=="string"){try{const f=JSON.parse(l);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,c))return!0}catch{}vt(n,a)}};let i=ot(n);for(let c=i-1;c>=0;c--)r(c)||(c===i-1?(i--,nt(n,i)):Vt[t].add(c))}function Qt(){if(!ut){qe(!0);for(const t in G)Ht(t,e=>{const n=e.data,s=e.provider,o=n.prefix,r=k(s,o);if(!it(r,n).length)return!1;const i=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function Ge(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in G)Ht(s,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function Ke(t,e){ut||Qt();function n(s){let o;if(!G[s]||!(o=zt(s)))return;const r=Vt[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=ot(o),i>=Ue||!nt(o,i+1))return;const c={cached:Math.floor(Date.now()/Rt),provider:t.provider,data:e};return ft(o,A+i.toString(),JSON.stringify(c))}e.lastModified&&!Ge(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function wt(){}function Je(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ae(t)}))}function We(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=tt(n)))return;r.prepare(n,s,o).forEach(c=>{He(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=it(t,a);if(!l.length)return;const f=t.pendingIcons;f&&l.forEach(d=>{f.delete(d)}),Ke(t,a)}catch(l){console.error(l)}Je(t)})})}))}const Ye=(t,e)=>{const n=Be(t,!0,Ot()),s=Fe(n);if(!s.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(s.loaded,s.missing,s.pending,wt)}),()=>{a=!1}}const o=Object.create(null),r=[];let i,c;return s.pending.forEach(a=>{const{provider:l,prefix:f}=a;if(f===c&&l===i)return;i=l,c=f,r.push(k(l,f));const d=o[l]||(o[l]=Object.create(null));d[f]||(d[f]=[])}),s.pending.forEach(a=>{const{provider:l,prefix:f,name:d}=a,h=k(l,f),b=h.pendingIcons||(h.pendingIcons=new Set);b.has(d)||(b.add(d),o[l][f].push(d))}),r.forEach(a=>{const{provider:l,prefix:f}=a;o[l][f].length&&We(a,o[l][f])}),e?$e(e,s,r):wt};function Xe(t,e){const n={...t};for(const s in e){const o=e[s],r=typeof o;s in Ft?(o===null||o&&(r==="string"||r==="number"))&&(n[s]=o):r===typeof n[s]&&(n[s]=s==="rotate"?o%4:o)}return n}const Ze=/[\s,]+/;function tn(t,e){e.split(Ze).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function en(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:s(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return e}function nn(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function on(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function sn(t){return"data:image/svg+xml,"+on(t)}function rn(t){return'url("'+sn(t)+'")'}const _t={...At,inline:!1},cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},an={display:"inline-block"},st={backgroundColor:"currentColor"},Ut={backgroundColor:"transparent"},It={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},St={webkitMask:st,mask:st,background:Ut};for(const t in St){const e=St[t];for(const n in It)e[t+n]=It[n]}const z={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";z[t+"-flip"]=e,z[t.slice(0,1)+"-flip"]=e,z[t+"Flip"]=e});function kt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Ct=(t,e)=>{const n=Xe(_t,e),s={...cn},o=e.mode||"svg",r={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let g in e){const u=e[g];if(u!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&tn(n,u);break;case"color":r.color=u;break;case"rotate":typeof u=="string"?n[g]=en(u):typeof u=="number"&&(n[g]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete s["aria-hidden"];break;default:{const C=z[g];C?(u===!0||u==="true"||u===1)&&(n[C]=!0):_t[g]===void 0&&(s[g]=u)}}}const a=we(t,n),l=a.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),o==="svg"){s.style={...r,...c},Object.assign(s,l);let g=0,u=e.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),s.innerHTML=ke(a.body,u?()=>u+"ID"+g++:"iconifyVue"),dt("svg",s)}const{body:f,width:d,height:h}=t,b=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),_=nn(f,{...l,width:d+"",height:h+""});return s.style={...r,"--svg":rn(_),width:kt(l.width),height:kt(l.height),...an,...b?st:Ut,...c},dt("span",s)};Ot(!0);Ce("",Oe);if(typeof document<"u"&&typeof window<"u"){Qt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!he(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Me(n,o)||console.error(s)}catch{console.error(s)}}}}const ln={...q,body:""},Mt=N({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=U(t,!1,!0))===null)return this.abortLoading(),null;const s=de(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:Ye([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:s,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return Ct(ln,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Ct({...q,...e.data},n)}}),K=t=>(jt("data-v-dd7d7c18"),t=t(),Tt(),t),fn={class:"navigation-buttons flex gap-4"},un=K(()=>m("span",{class:"ns-button__content"},"Active",-1)),dn=[un],pn=K(()=>m("span",{class:"ns-button__content"},"Default",-1)),hn=[pn],gn={class:"theme-toggle-container"},mn={type:"button",class:"inline-flex items-center rounded-full bg-white p-1 text-sm font-semibold text-indigo-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},bn=K(()=>m("span",{class:"text-sm"},"Dark",-1)),yn={type:"button",class:"inline-flex items-center rounded-full p-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50/25"},xn=K(()=>m("span",{class:"text-sm"},"Light",-1)),vn=N({__name:"Header_",setup(t){const e=Q({get:()=>O.getIsDarkMode(),set:s=>O.setIsDarkMode(s)}),n=Kt();return(s,o)=>(M(),j("div",{class:T([w(e)?"bg-Content":"bg-light","header-navigation content flex items-center py-3 justify-between"])},[m("div",fn,[m("button",{type:"button",class:T([[w(n)===0?"button-default active":"button-default"],"button-default"]),onClick:o[0]||(o[0]=r=>n.value=0)},dn,2),m("button",{type:"button",class:T([w(n)===1?"button-default active":"button-default","button-default"]),onClick:o[1]||(o[1]=r=>n.value=1)},hn,2)]),m("div",gn,[w(e)?(M(),j("div",{key:1,class:"light-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer",onClick:o[3]||(o[3]=r=>e.value=!1)},[m("button",yn,[E(w(Mt),{icon:"solar:sun-fog-broken",height:"25",ssr:!0})]),xn])):(M(),j("div",{key:0,class:"dark-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer text-indigo-500",onClick:o[2]||(o[2]=r=>e.value=!0)},[m("button",mn,[E(w(Mt),{icon:"solar:moon-fog-linear",height:"25",ssr:!0})]),bn]))])],2))}}),wn=rt(vn,[["__scopeId","data-v-dd7d7c18"]]),_n=t=>(jt("data-v-a403a09f"),t=t(),Tt(),t),In={class:"footer-content"},Sn=_n(()=>m("a",{href:"https://github.com/CarlosNaro",target:"_blank"},"Developer Naro",-1)),kn=N({__name:"Footer_",setup(t){const e=new Date().getFullYear(),n=Q(()=>O.getIsDarkMode());return(s,o)=>(M(),j("footer",{class:T([w(n)?"bg-Content":"bg-light","footer content"])},[m("div",In,[m("b",null,[Jt("©"+Wt(w(e))+", ",1),Sn])])],2))}}),Cn=rt(kn,[["__scopeId","data-v-a403a09f"]]),Mn={class:"content flex-1"},Tn=N({__name:"index",setup(t){const e=Q(()=>O.getIsDarkMode());return(n,s)=>{const o=re;return M(),j("div",{class:T([{dark:w(e)},"flex flex-col h-screen"])},[E(wn),m("main",Mn,[E(o)]),E(Cn)],2)}}});export{Tn as default};
