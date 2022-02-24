(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(314),t.b),l=new URL(t(370),t.b),p=new URL(t(940),t.b),u=i()(o()),f=s()(d),m=s()(l),b=s()(p);u.push([n.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+f+");\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'BodyFont';\n    src: url("+m+");\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'BodyFont';\n    /*font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;*/\n    color: whitesmoke;\n    background-image: url("+b+");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n}\n\nh1 {\n    margin: 5px;\n}\n\nbutton {\n    font-family: 'BodyFont';\n    font-size: 30px;\n    font-weight: bold;\n    width: 200px;\n    color: whitesmoke;\n    font-weight: bold;\n    background-color: rgba(0, 23, 29, 0.534);\n    border-style: solid;\n    border-radius: 5px;\n    padding: 8px;\n    transition: all .07s ease;\n}\n\nimg {\n   height: 200px;\n   width: auto; \n   object-fit: cover;\n   border-radius: 35%;\n   border-style: double;\n   border-color: rgba(75, 154, 165, 0.795);   \n   border-width: 8px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 5px;\n    width: 1030px;\n}\n\n.header {\n    font-family: 'MyFont';\n    width: 1030px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n    border-width: 5px;\n    border-radius: 5px;\n    border-style: solid;\n    border-color: black;\n    margin: 3px;\n    padding: 8px;\n    background-color: rgba(0, 21, 41, 0.856);\n}\n\nh1.restaurant-name {\n    padding: 15px;\n    font-size: 70px;\n    padding-bottom: 3px;\n}\n\nh3.restaurant-name {\n    margin: 0px;\n    font-size: 20px;\n}\n\n.tabs {\n    display: flex;\n    column-gap: 140px;\n}\n\n.info {\n    width: 1030px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n    border-width: 5px;\n    border-radius: 5px;\n    border-style: solid;\n    border-color: black;\n    margin: 3px;\n    padding: 8px;\n    background-color: rgba(0, 21, 41, 0.856);\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\np.intro {\n    margin: 10px;\n    font-size: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.home-img {\n    height: 350px;\n    width: 450px;\n    border-radius:50%;\n}\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    column-gap: 30px;\n    /*flex-direction: column;*/\n}\n\n.meal {\n    flex: 0;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 320px;\n    height: 340px;\n    background-color: rgba(0, 0, 0, 0.562);\n    padding: 10px;\n    border-radius: 20px;\n}\n\nh4.name {\n    font-size: 22px;\n    margin: 5px;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    font-size: 30px;\n    row-gap: 10px;\n}\n\n.map {\n    border-radius: 10px;\n    border-style: none;\n}\n\n.footer {\n    width: 1055px;\n    display: flex;\n    height: 40px;\n    font-size: 18px;\n    font-weight: bold;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.849);\n    justify-content: center;\n    align-items: center;\n}\n\n.hidden {\n    display: none;\n    visibility: hidden;\n}\n\n.selected {\n    background-color: rgba(114, 114, 114, 0.685);\n    color: rgb(27, 39, 51);\n    border-style: none;\n    transform: scale(1.05);\n}\n\n.hovered {\n    background-color: rgba(114, 114, 114, 0.685);\n}",""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},940:(n,e,t)=>{n.exports=t.p+"c5ef79306c18429bcbb5.jpg"},677:(n,e,t)=>{n.exports=t.p+"c7dd43f4151e7c07aca1.jpg"},973:(n,e,t)=>{n.exports=t.p+"27565e44a2b7d765c1de.jpg"},430:(n,e,t)=>{n.exports=t.p+"54a71a8d4a565c575707.jpg"},113:(n,e,t)=>{n.exports=t.p+"bb4671db967cc8fa1d80.jpg"},214:(n,e,t)=>{n.exports=t.p+"6ebb03b127d5ab68394e.jpg"},920:(n,e,t)=>{n.exports=t.p+"e9080ada9a88e8e5455c.jpg"},370:(n,e,t)=>{n.exports=t.p+"e1030acdd4dae4a559c0.otf"},314:(n,e,t)=>{n.exports=t.p+"83234297fb80dc4a454c.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(940);var b=t(214);t(920),t(677),t(973),t(430),t(113);const g=document.getElementById("content");g.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("h1");e.classList.add("restaurant-name"),e.innerHTML="Oishii Ramen";const t=document.createElement("h3");t.classList.add("restaurant-name"),t.innerHTML="おいしいらめん";const r=document.createElement("div");r.classList.add("tabs");const o=document.createElement("button");o.classList.add("home-button"),o.innerHTML="Home";const a=document.createElement("button");a.classList.add("menu-button"),a.innerHTML="Menu";const i=document.createElement("button");return i.classList.add("contact-button"),i.innerHTML="Contact",r.appendChild(o),r.appendChild(a),r.appendChild(i),n.appendChild(e),n.appendChild(t),n.appendChild(r),n}()),g.appendChild(function(){const n=document.createElement("div");n.classList.add("info"),n.appendChild(function(){const n=document.createElement("p");n.classList.add("intro"),n.innerHTML="The tastiest and best ramen in town. Come visit us now!",(new Image).src=b;const e=document.createElement("p");e.classList.add("intro"),e.innerHTML="Serving tastiness since 1995"}())}())})()})();