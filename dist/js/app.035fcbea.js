(function(e){function t(t){for(var n,u,a=t[0],i=t[1],d=t[2],p=0,l=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},c={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/product-card/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1725:function(e){e.exports=JSON.parse('{"images":["https://cdn1.ozone.ru/s3/multimedia-5/wc1200/6103353881.jpg","https://cdn1.ozone.ru/s3/multimedia-8/wc1200/6103353884.jpg","https://cdn1.ozone.ru/s3/multimedia-l/wc1200/6103353897.jpg"]}')},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,o,u){var a=Object(n["s"])("ProductCard");return Object(n["n"])(),Object(n["d"])(a,{product:c.product},null,8,["product"])}Object(n["p"])("data-v-be447ee0");var o={class:"product-card"};function u(e,t,r,c,u,a){var i=Object(n["s"])("ProductCardImage"),d=Object(n["s"])("ProductCardBody");return Object(n["n"])(),Object(n["e"])("div",o,[Object(n["g"])(i,{images:r.product.images},null,8,["images"]),Object(n["g"])(d)])}Object(n["o"])(),Object(n["p"])("data-v-9ce28108");var a={class:"product-card-image"},i=["src"],d={class:"swiper-overlay"},s=["onMouseover"];function p(e,t,r,c,o,u){var p=Object(n["s"])("swiper-slide"),l=Object(n["s"])("swiper");return Object(n["n"])(),Object(n["e"])("div",a,[Object(n["g"])(l,{"slides-per-view":1,centeredSlides:!0,pagination:c.pagination,onSwiper:c.onSwiper},{default:Object(n["u"])((function(){return[(Object(n["n"])(!0),Object(n["e"])(n["a"],null,Object(n["r"])(c.imageList,(function(e){return Object(n["n"])(),Object(n["d"])(p,null,{default:Object(n["u"])((function(){return[Object(n["f"])("img",{src:e},null,8,i)]})),_:2},1024)})),256)),Object(n["f"])("div",d,[(Object(n["n"])(!0),Object(n["e"])(n["a"],null,Object(n["r"])(c.imageList,(function(e,t){return Object(n["n"])(),Object(n["e"])("div",{class:"swiper-overlay-el",onMouseover:function(e){return c.onMouseOver(t)}},null,40,s)})),256))])]})),_:1},8,["pagination","onSwiper"])])}Object(n["o"])();var l=r("2909"),f=r("6d3b"),b=r("5dc8"),O=r("90ea"),j=r("a16a");r("e25d");f["a"].use([b["a"]]);var v={name:"ProductCardImage",components:{Swiper:O["a"],SwiperSlide:j["a"]},props:{images:{type:[Array,String],default:"./assets/noimage.jpg"}},setup:function(e){var t=Object(n["b"])((function(){return Object(l["a"])(e.images)})),r={clickable:!0},c=Object(n["q"])(null);function o(e){c.value=e}function u(e){c.value.slideTo(e)}return{imageList:t,pagination:r,onSwiper:o,onMouseOver:u,swiperRef:c}}};r("da6e");v.render=p,v.__scopeId="data-v-9ce28108";var g=v;function m(e,t,r,n,c,o){return null}var w={name:"ProductCardBody",props:{msg:String}};w.render=m;var y=w,h={name:"ProductCard",components:{ProductCardImage:g,ProductCardBody:y},props:{product:{type:Object,default:function(){}}}};r("b8f9");h.render=u,h.__scopeId="data-v-be447ee0";var P=h,S=r("1725"),_={name:"App",components:{ProductCard:P},setup:function(){return{product:S}}};r("a988");_.render=c;var C=_;Object(n["c"])(C).mount("#app")},"66f1":function(e,t,r){},a988:function(e,t,r){"use strict";r("bfc2")},b8f9:function(e,t,r){"use strict";r("66f1")},bfc2:function(e,t,r){},d6ed:function(e,t,r){},da6e:function(e,t,r){"use strict";r("d6ed")}});
//# sourceMappingURL=app.035fcbea.js.map