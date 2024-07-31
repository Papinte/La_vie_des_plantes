(()=>{"use strict";var e,t,r,o={3593:(e,t,r)=>{r.r(t);const o=window.wp.blocks,n=window.wc.wcSettings,c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-filters","version":"1.0.0","title":"Product Filters (Experimental)","description":"Let shoppers filter products displayed on the page.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true},"color":{"background":true,"text":true},"multiple":false,"interactivity":true,"typography":{"fontSize":true,"textAlign":true}},"textdomain":"woocommerce","usesContext":["postId"],"providesContext":{},"attributes":{},"viewScript":"wc-product-filters-frontend","example":{}}');var i=r(1609);const l=window.wp.blockEditor;var s=r(7723);const a=window.wc.wcBlocksData,u=window.wp.data;var p=r(6087),d=r(923),w=r.n(d);function f(e){const t=(0,p.useRef)(e);return w()(e,t.current)||(t.current=e),t.current}const m=window.wc.wcTypes,h=window.wp.components,v=[["core/heading",{level:3,style:{typography:{fontSize:"24px"}},content:(0,s.__)("Filters","woocommerce")}],["woocommerce/product-filter",{filterType:"active-filters",heading:(0,s.__)("Active","woocommerce")}],["woocommerce/product-filter",{filterType:"price-filter",heading:(0,s.__)("Price","woocommerce")}],["woocommerce/product-filter",{filterType:"stock-filter",heading:(0,s.__)("Status","woocommerce")}],["woocommerce/product-filter",{filterType:"attribute-filter",heading:(0,s.__)("Attribute","woocommerce"),attributeId:0}],["woocommerce/product-filter",{filterType:"rating-filter",heading:(0,s.__)("Rating","woocommerce")}]];var g=r(851);const b={icon:()=>(0,i.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)("path",{d:"M19 3H5C4.4 3 4 3.4 4 4V11C4 11.5 4.4 12 5 12H19C19.5 12 20 11.6 20 11V4C20 3.4 19.6 3 19 3ZM5.5 10.5V10.1L7.3 8.8L8.6 9.6C8.9 9.8 9.3 9.8 9.5 9.5L11 8.1L13.4 10.5H5.5ZM18.5 10.5H15.6L11.6 6.5C11.3 6.2 10.8 6.2 10.5 6.5L8.9 8L7.7 7.2C7.4 7 7.1 7 6.8 7.2L5.5 8.2V4.5H18.5V10.5Z",fill:"currentColor"}),(0,i.createElement)("rect",{x:"4.75",y:"15.5",width:"5",height:"4.5",rx:"1",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),(0,i.createElement)("rect",{x:"12.25",y:"15.5",width:"5",height:"4.5",rx:"1",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})),edit:({})=>{const e=(0,l.useBlockProps)(),{results:t,isLoading:r}=(e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:n={},shouldSelect:c=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=(0,p.useRef)({results:[],isLoading:!0}),l=f(n),s=f(o),d=(()=>{const[,e]=(0,p.useState)();return(0,p.useCallback)((t=>{e((()=>{throw t}))}),[])})(),w=(0,u.useSelect)((e=>{if(!c)return null;const o=e(a.COLLECTIONS_STORE_KEY),n=[t,r,l,s],i=o.getCollectionError(...n);if(i){if(!(0,m.isError)(i))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(i)}return{results:o.getCollection(...n),isLoading:!o.hasFinishedResolution("getCollection",n)}}),[t,r,s,l,c]);return null!==w&&(i.current=w),i.current})({namespace:"/wc/store/v1",resourceName:"products/attributes"}),o=t.reduce(((e,t)=>null===e||t.count>e.count?t:e),null),n=((e,t)=>null===t?e:e.map((e=>{const r=e[0],o=e[1];return"woocommerce/product-filter"===r&&"attribute-filter"===(null==o?void 0:o.filterType)?[r,{...o,heading:t.name,attributeId:t.id}]:e})))(v,o);return r?(0,i.createElement)(h.Spinner,null):(0,i.createElement)("div",{...e},(0,i.createElement)(l.InnerBlocks,{templateLock:!1,template:n}))},save:()=>{const e=l.useBlockProps.save({className:(0,g.A)("wc-block-product-filters")}),t=l.useInnerBlocksProps.save(e);return(0,i.createElement)("div",{...t})}};(()=>{const{experimentalBlocksEnabled:e}=(0,n.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()&&(0,o.registerBlockType)(c,b)},1609:e=>{e.exports=window.React},6087:e=>{e.exports=window.wp.element},7723:e=>{e.exports=window.wp.i18n},923:e=>{e.exports=window.wp.isShallowEqual}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,c),r.exports}c.m=o,e=[],c.O=(t,r,o,n)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],l=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(c.O).every((e=>c.O[e](r[s])))?r.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(u--,1);var a=o();void 0!==a&&(t=a)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&o&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(n,i),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=5870,(()=>{var e={5870:0};c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,l,s]=r,a=0;if(i.some((t=>0!==e[t]))){for(o in l)c.o(l,o)&&(c.m[o]=l[o]);if(s)var u=s(c)}for(t&&t(r);a<i.length;a++)n=i[a],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=c.O(void 0,[94],(()=>c(3593)));i=c.O(i),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filters"]=i})();