(function(e){function t(t){for(var r,l,c=t[0],o=t[1],s=t[2],u=0,b=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0942c1a7":"eb391d55","chunk-0945692b":"f9ef8bc0","chunk-7b0313b1":"2493a6a9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=l(e);var s=new Error;i=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/broker-app/",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,i,l){var c=Object(r["B"])("Nav"),o=Object(r["B"])("router-view"),s=Object(r["B"])("Footer");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(c),Object(r["k"])(o),Object(r["k"])(s)],64)}var i=n("9b19"),l=n.n(i),c={class:"bg-accent","aria-labelledby":"footer-heading"},o=Object(r["k"])("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),s={class:"max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8"},u={class:"grid md:grid-cols-2 gap-8"},d=Object(r["k"])("img",{class:"h-9 w-auto",src:l.a,alt:"Commercial by knnct"},null,-1),b={class:"grid sm:grid-cols-2 gap-8"},f=Object(r["k"])("h3",{class:"mb-3  footer-heading"},"Navigation",-1),p={class:"space-y-1"},m=Object(r["i"])('<div><h3 class="mb-3 footer-heading">Contact Us</h3><div class="space-y-4"><address class="not-italic"> Street <br> City, Province POSTAL CODE </address><a href="tel:+19056379255" class="block with-underline w-max hover:text-accent">Phone: xxx-xxx-xxxx </a><a href="mailto:info@teccweb.com" class="block with-underline w-max hover:text-accent">Email: email@email.com</a></div></div>',1),O=Object(r["k"])("div",{class:"\n          mt-8\n          pt-8\n          border-t border-gray-200\n          md:flex md:items-center md:justify-between\n        "},[Object(r["k"])("p",{class:"text-base text-white"}," © Copyright 2021 Commercial by knnct ")],-1);function j(e,t,n,a,i,l){var j=Object(r["B"])("router-link");return Object(r["v"])(),Object(r["g"])("footer",c,[o,Object(r["k"])("div",s,[Object(r["k"])("div",u,[Object(r["k"])(j,{to:"/"},{default:Object(r["I"])((function(){return[d]})),_:1}),Object(r["k"])("div",b,[Object(r["k"])("div",null,[f,Object(r["k"])("div",p,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(j,{key:e.label,class:"\n                  block\n                  with-underline\n                  w-max\n                  transition\n                  hover:text-accent\n                  capitalize\n                ",to:e.path},{default:Object(r["I"])((function(){return[Object(r["j"])(Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))])]),m])]),O])])}var v=n("b0ea"),h={setup:function(){return{navigation:v["l"]}}};h.render=j;var g=h,y={class:"max-w-7xl mx-auto px-4 sm:px-6"},k={class:"\n          flex\n          justify-between\n          items-center\n          py-6\n          md:justify-start md:space-x-5\n        "},w={class:"flex justify-start lg:w-0 flex-1"},x=Object(r["k"])("span",{class:"sr-only"},"Commercial by knnct",-1),I=Object(r["k"])("div",{class:"flex items-center"},[Object(r["k"])("img",{class:"h-7 w-auto",src:l.a,alt:"Commercial by knnct"})],-1),P={class:"-mr-2 -my-2 md:hidden"},B=Object(r["k"])("span",{class:"sr-only"},"Open menu",-1),C={class:"\n            rounded-lg\n            shadow-lg\n            ring-1 ring-black ring-opacity-5\n            bg-gray-200\n            divide-y-2 divide-gray-50\n          "},_={class:"pt-5 pb-6 px-5"},M={class:"flex items-center justify-between"},S=Object(r["k"])("img",{class:"h-5 w-auto",src:l.a,alt:"Commercial by knnct"},null,-1),A={class:"-mr-2"},z=Object(r["k"])("span",{class:"sr-only"},"Close menu",-1),D={class:"mt-6"},E={class:"grid gap-y-8"},F={class:"nav-item-mobile__text"},L=Object(r["k"])("div",{class:"nav-gap"},null,-1);function R(e,t,n,a,i,l){var c=Object(r["B"])("router-link"),o=Object(r["B"])("MenuIcon"),s=Object(r["B"])("PopoverButton"),u=Object(r["B"])("NavItem"),d=Object(r["B"])("PopoverGroup"),b=Object(r["B"])("XIcon"),f=Object(r["B"])("PopoverPanel"),p=Object(r["B"])("Popover");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(p,{class:"fixed left-0 w-full top-0 z-20 bg-accent-red shadow"},{default:Object(r["I"])((function(){return[Object(r["k"])("div",y,[Object(r["k"])("div",k,[Object(r["k"])("div",w,[Object(r["k"])(c,{to:"/"},{default:Object(r["I"])((function(){return[x,I]})),_:1})]),Object(r["k"])("div",P,[Object(r["k"])(s,{class:"\n              rounded-md\n              p-2\n              inline-flex\n              items-center\n              justify-center\n              text-white\n              hover:text-gray-500\n              transition\n              hover:bg-white\n            "},{default:Object(r["I"])((function(){return[B,Object(r["k"])(o,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})]),Object(r["k"])(d,{as:"nav",class:"hidden md:flex space-x-3 lg:space-x-5 xl:space-x-7"},{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(u,{path:e.path,key:e.label,dropdownItems:e.dropdownItems},{default:Object(r["I"])((function(){return[Object(r["j"])(Object(r["D"])(e.label),1)]})),_:2},1032,["path","dropdownItems"])})),128))]})),_:1})])]),Object(r["k"])(r["c"],{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Object(r["I"])((function(){return[Object(r["k"])(f,{focus:"",class:"\n          absolute\n          top-0\n          inset-x-0\n          z-10\n          p-2\n          transition\n          transform\n          origin-top-right\n          md:hidden\n        "},{default:Object(r["I"])((function(){return[Object(r["k"])("div",C,[Object(r["k"])("div",_,[Object(r["k"])("div",M,[Object(r["k"])(c,{to:"/"},{default:Object(r["I"])((function(){return[S]})),_:1}),Object(r["k"])("div",A,[Object(r["k"])(s,{class:"\n                    rounded-md\n                    p-2\n                    inline-flex\n                    items-center\n                    justify-center\n                    transition\n                    hover:bg-accent-lightest\n                  "},{default:Object(r["I"])((function(){return[z,Object(r["k"])(b,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})])]),Object(r["k"])("div",D,[Object(r["k"])("nav",E,[Object(r["k"])(s,null,{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(c,{key:e.label,to:e.path,class:"nav-item-mobile"},{default:Object(r["I"])((function(){return[Object(r["k"])("span",F,Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])])])]})),_:1})]})),_:1})]})),_:1}),L],64)}var N={key:0,class:"flex items-center -mr-2"},T=Object(r["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-2 h-5 w-5 group-transition",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),U={class:"\n                rounded-lg\n                shadow-lg\n                ring-1 ring-black ring-opacity-5\n                overflow-hidden\n              "},W={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},$={class:"\n                        text-sm\n                        lg:text-base\n                        font-medium\n                        capitalize\n                        text-gray-900\n                      "},q={key:1,class:"nav-item"};function H(e,t,n,a,i,l){var c=Object(r["B"])("router-link"),o=Object(r["B"])("PopoverButton"),s=Object(r["B"])("PopoverPanel"),u=Object(r["B"])("Popover");return Object(r["v"])(),Object(r["g"])("div",null,[n.dropdownItems&&n.dropdownItems.length>0?(Object(r["v"])(),Object(r["g"])("div",N,[Object(r["k"])(u,{class:"relative"},{default:Object(r["I"])((function(){return[Object(r["k"])(o,{class:"\n            group\n            rounded-md\n            inline-flex\n            items-center\n            text-base\n            font-medium\n            capitalize\n            whitespace-nowrap\n            transition\n            hover:text-accent\n            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,\n          ",onClick:t[1]||(t[1]=Object(r["K"])((function(){}),["stop"]))},{default:Object(r["I"])((function(){return[Object(r["k"])(c,{to:n.path},{default:Object(r["I"])((function(){return[Object(r["A"])(e.$slots,"default")]})),_:3},8,["to"]),T]})),_:1}),Object(r["k"])(r["c"],{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:Object(r["I"])((function(){return[Object(r["k"])(s,{class:"\n              absolute\n              right-0\n              mt-3\n              transform\n              z-10\n              px-2\n              w-screen\n              max-w-sm\n              sm:px-0\n              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n            "},{default:Object(r["I"])((function(){return[Object(r["k"])("div",U,[Object(r["k"])("div",W,[Object(r["k"])(o,null,{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(n.dropdownItems,(function(e){return Object(r["v"])(),Object(r["g"])(c,{key:e.label,to:e.path,class:"\n                      -m-3\n                      p-3\n                      flex\n                      items-start\n                      rounded-lg\n                      transition\n                      hover:bg-gray-50\n                    "},{default:Object(r["I"])((function(){return[Object(r["k"])("p",$,Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])]})),_:1})]})),_:1})]})),_:1})])):(Object(r["v"])(),Object(r["g"])("div",q,[Object(r["k"])(c,{to:n.path},{default:Object(r["I"])((function(){return[Object(r["A"])(e.$slots,"default")]})),_:3},8,["to"])]))])}var G=n("d511"),J={name:"NavItem",components:{Popover:G["f"],PopoverButton:G["g"],PopoverPanel:G["i"]},props:{path:String,dropdownItems:{type:Array,required:!1}}};J.render=H;var X=J,K=n("9510"),Y={components:{Popover:G["f"],PopoverButton:G["g"],PopoverGroup:G["h"],PopoverPanel:G["i"],MenuIcon:K["c"],XIcon:K["g"],NavItem:X},setup:function(){return{navigation:v["l"]}}};Y.render=R;var Q=Y,V={components:{Nav:Q,Footer:g}};V.render=a;var Z=V,ee=n("6c02"),te=Object(ee["a"])({history:Object(ee["b"])("/broker-app/"),routes:v["o"]}),ne=te;n("ba8c");Object(r["f"])(Z).use(ne).mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.1fac0dce.svg"},b0ea:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"o",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"q",(function(){return b})),n.d(t,"m",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"r",(function(){return O})),n.d(t,"g",(function(){return j})),n.d(t,"p",(function(){return v})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"c",(function(){return k})),n.d(t,"n",(function(){return w}));n("d3b7"),n("3ca3"),n("ddb0");var r=n("b85c"),a=(n("d81d"),n("ac1f"),n("1276"),n("c740"),n("caad"),n("2532"),n("99af"),function(e){return e.map((function(e){return{path:e.path,component:e.component}}))}),i=function(e){var t,n=[],a=Object(r["a"])(e);try{var i=function(){var e=t.value;if(e.hidden)return"continue";var r=e.path.split("/")[1],a=n.findIndex((function(e){return e.path==="/".concat(r)}));-1===a?n.push({path:"/".concat(r),label:e.label,dropdownItems:[]}):e.path.includes(":")||n[a].dropdownItems.push({path:e.path,label:e.label})};for(a.s();!(t=a.n()).done;)i()}catch(l){a.e(l)}finally{a.f()}return n},l="broker-app",c=[{path:"/",label:"home",component:function(){return n.e("chunk-7b0313b1").then(n.bind(null,"7abe"))},hidden:!1},{path:"/about",label:"about",component:function(){return n.e("chunk-0945692b").then(n.bind(null,"613f"))},hidden:!1},{path:"/contact",label:"contact",component:function(){return n.e("chunk-0942c1a7").then(n.bind(null,"0648"))},hidden:!1}],o=a(c),s=i(c),u=[{id:"commercial-less-3",label:"Commercial &/or Construction (Less than $3 million total value)"},{id:"commercial-greater-3",label:"Commercial &/or Construction (More than $3 million total value)"}],d=[{id:"charge-1st",label:"1st"},{id:"charge-2nd",label:"2nd"},{id:"charge-3rd",label:"3rd"},{id:"charge-bridge",label:"Bridge"}],b=[{id:"term-1yr",label:"1 year"},{id:"term-18m",label:"18 months"},{id:"term-3yr",label:"3 years"},{id:"term-5yr",label:"5 years"},{id:"term-10yr",label:"10 years"},{id:"term-25yr",label:"25 years"},{id:"term-30yr",label:"30 years"},{id:"term-other",label:"Other"}],f=[{id:"industrial-manufacturing-facility",label:"Industrial - Manufacturing Facility"},{id:"industrial-warehouse/distribution-facility",label:"Industrial - Warehouse/Distribution Facility"},{id:"industrial-flex/multi-purpose-facility",label:"Industrial - Flex/Multi-Purpose Facility"},{id:"retail-enclosed shopping mall",label:"Retail - Enclosed Shopping Mall"},{id:"retail-shopping plaza or strip mall",label:"Retail - Shopping Plaza or Strip Mall"},{id:"retail-pad/standalone building",label:"Retail - Pad/Standalone Building"},{id:"office-office building",label:"Office - Office Building"},{id:"office-suite or condominium",label:"Office - Suite or Condominium"},{id:"office-professional suites (dental, medical, legal, etc.)",label:"Office - Professional Suites (Dental, Medical, Legal, etc.)"},{id:"multi-family residential units (mfru) - condominiums,",label:"Multi-Family Residential Units (MFRU) - Condominiums,"},{id:"apartment buildings, commercial/offices",label:"Apartment Buildings, Commercial/Offices"},{id:"multi-dwelling unit (mdu) - townhomes, condominiums,",label:"Multi-Dwelling Unit (MDU) - Townhomes, Condominiums,"},{id:"apartment buildings",label:"Apartment Buildings"},{id:"residential homes/estates",label:"Residential Homes/Estates"},{id:"hotel & lodging",label:"Hotel & Lodging"},{id:"restaurant",label:"Restaurant"},{id:"cottage",label:"Cottage"},{id:"land",label:"Land"}],p=[{id:"urban",label:"Urban"},{id:"rural",label:"Rural"},{id:"either",label:"Either"}],m=[{id:"ac-yes",label:"Yes"},{id:"ac-no",label:"No"},{id:"ac-not-relevant",label:"Not relevant"}],O=[{id:"water-municipal",label:"Municipal"},{id:"water-well",label:"Well Water"},{id:"water-either",label:"Either"}],j=[{id:"heat-forced-air",label:"Forced Air/Furnace"},{id:"heat-oil",label:"Heating Oil"},{id:"heat-propane",label:"Propane"},{id:"heat-any",label:"Any"}],v=[{id:"sewage-municipal",label:"Municipal"},{id:"sewage-septic",label:"Septic"},{id:"sewage-either",label:"Either"}],h=[{id:"loan-interest-only",label:"Interest Only"},{id:"loan-amortized",label:"Amortized"},{id:"loan-closed",label:"Closed"},{id:"loan-open",label:"Open"}],g=[{id:"bankruptcy-previous",label:"Previous Bankruptcy",description:"(Any Borrowers/Officers/Directors/Officers)"},{id:"bankruptcy-current",label:"Current Bankruptcy",description:"(Any Borrowers/Officers/Directors/Officers)"}],y=[{id:"consumer-previous",label:"Previous Consumer Proposal",description:"(Any Borrowers/Officers/Directors/Officers)"},{id:"consumer-current",label:"Current Consumer Proposal",description:"(Any Borrowers/Officers/Directors/Officers)"}],k=[{id:"investment",label:"Investment"},{id:"improvements",label:"Improvements (minor)"},{id:"renovation",label:"Renovation (major)"},{id:"purchase-land-only",label:"Purchase Land Only"},{id:"purchase-land-with-existing-structure",label:"Purchase Land with Existing Structure"},{id:"construction",label:"Construction"},{id:"purchase-plus-construction",label:"Purchase + Construction"},{id:"mortgage-arrears",label:"Mortgage Arrears"},{id:"other",label:"Other"}],w=[{id:"must-be-provided",label:"Must be provided"},{id:"needed-future",label:"Will need to be provided in the future"},{id:"either",label:"Either"}]},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.37e73f18.js.map