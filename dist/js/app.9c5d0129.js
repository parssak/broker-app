(function(e){function t(t){for(var a,l,o=t[0],c=t[1],s=t[2],u=0,b=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function l(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0942c1a7":"eb391d55","chunk-0945692b":"f9ef8bc0","chunk-42b2c344":"253d4ebf"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=l(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/broker-app/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,i,l){var o=Object(a["B"])("Nav"),c=Object(a["B"])("router-view"),s=Object(a["B"])("Footer");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(o),Object(a["k"])(c),Object(a["k"])(s)],64)}var i=n("9b19"),l=n.n(i),o={class:"bg-accent","aria-labelledby":"footer-heading"},c=Object(a["k"])("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),s={class:"max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8"},u={class:"grid md:grid-cols-2 gap-8"},d=Object(a["k"])("img",{class:"h-9 w-auto",src:l.a,alt:"Company Name"},null,-1),b={class:"grid sm:grid-cols-2 gap-8"},f=Object(a["k"])("h3",{class:"mb-3  footer-heading"},"Navigation",-1),p={class:"space-y-1"},m=Object(a["i"])('<div><h3 class="mb-3 footer-heading">Contact Us</h3><div class="space-y-4"><address class="not-italic"> Street <br> City, Province POSTAL CODE </address><a href="tel:+19056379255" class="block with-underline w-max hover:text-accent">Phone: xxx-xxx-xxxx </a><a href="mailto:info@teccweb.com" class="block with-underline w-max hover:text-accent">Email: email@email.com</a></div></div>',1),O=Object(a["k"])("div",{class:"\n          mt-8\n          pt-8\n          border-t border-gray-200\n          md:flex md:items-center md:justify-between\n        "},[Object(a["k"])("p",{class:"text-base text-white"}," © Copyright 2021 Company Name ")],-1);function v(e,t,n,r,i,l){var v=Object(a["B"])("router-link");return Object(a["v"])(),Object(a["g"])("footer",o,[c,Object(a["k"])("div",s,[Object(a["k"])("div",u,[Object(a["k"])(v,{to:"/"},{default:Object(a["I"])((function(){return[d]})),_:1}),Object(a["k"])("div",b,[Object(a["k"])("div",null,[f,Object(a["k"])("div",p,[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(v,{key:e.label,class:"\n                  block\n                  with-underline\n                  w-max\n                  transition\n                  hover:text-accent\n                  capitalize\n                ",to:e.path},{default:Object(a["I"])((function(){return[Object(a["j"])(Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128))])]),m])]),O])])}var j=n("b0ea"),h={setup:function(){return{navigation:j["l"]}}};h.render=v;var g=h,y={class:"max-w-7xl mx-auto px-4 sm:px-6"},k={class:"\n          flex\n          justify-between\n          items-center\n          py-6\n          md:justify-start md:space-x-5\n        "},w={class:"flex justify-start lg:w-0 flex-1"},x=Object(a["k"])("span",{class:"sr-only"},"Company Name",-1),I=Object(a["k"])("div",{class:"flex items-center"},[Object(a["k"])("img",{class:"h-7 w-auto",src:l.a,alt:"Company Name"})],-1),P={class:"-mr-2 -my-2 md:hidden"},B=Object(a["k"])("span",{class:"sr-only"},"Open menu",-1),C={class:"\n            rounded-lg\n            shadow-lg\n            ring-1 ring-black ring-opacity-5\n            bg-gray-200\n            divide-y-2 divide-gray-50\n          "},_={class:"pt-5 pb-6 px-5"},M={class:"flex items-center justify-between"},S=Object(a["k"])("img",{class:"h-5 w-auto",src:l.a,alt:"Company name"},null,-1),A={class:"-mr-2"},z=Object(a["k"])("span",{class:"sr-only"},"Close menu",-1),D={class:"mt-6"},E={class:"grid gap-y-8"},N={class:"nav-item-mobile__text"},F=Object(a["k"])("div",{class:"nav-gap"},null,-1);function L(e,t,n,r,i,l){var o=Object(a["B"])("router-link"),c=Object(a["B"])("MenuIcon"),s=Object(a["B"])("PopoverButton"),u=Object(a["B"])("NavItem"),d=Object(a["B"])("PopoverGroup"),b=Object(a["B"])("XIcon"),f=Object(a["B"])("PopoverPanel"),p=Object(a["B"])("Popover");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(p,{class:"fixed left-0 w-full top-0 z-20 bg-accent-red shadow"},{default:Object(a["I"])((function(){return[Object(a["k"])("div",y,[Object(a["k"])("div",k,[Object(a["k"])("div",w,[Object(a["k"])(o,{to:"/"},{default:Object(a["I"])((function(){return[x,I]})),_:1})]),Object(a["k"])("div",P,[Object(a["k"])(s,{class:"\n              rounded-md\n              p-2\n              inline-flex\n              items-center\n              justify-center\n              text-white\n              hover:text-gray-500\n              transition\n              hover:bg-white\n            "},{default:Object(a["I"])((function(){return[B,Object(a["k"])(c,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})]),Object(a["k"])(d,{as:"nav",class:"hidden md:flex space-x-3 lg:space-x-5 xl:space-x-7"},{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(u,{path:e.path,key:e.label,dropdownItems:e.dropdownItems},{default:Object(a["I"])((function(){return[Object(a["j"])(Object(a["D"])(e.label),1)]})),_:2},1032,["path","dropdownItems"])})),128))]})),_:1})])]),Object(a["k"])(a["c"],{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Object(a["I"])((function(){return[Object(a["k"])(f,{focus:"",class:"\n          absolute\n          top-0\n          inset-x-0\n          z-10\n          p-2\n          transition\n          transform\n          origin-top-right\n          md:hidden\n        "},{default:Object(a["I"])((function(){return[Object(a["k"])("div",C,[Object(a["k"])("div",_,[Object(a["k"])("div",M,[Object(a["k"])(o,{to:"/"},{default:Object(a["I"])((function(){return[S]})),_:1}),Object(a["k"])("div",A,[Object(a["k"])(s,{class:"\n                    rounded-md\n                    p-2\n                    inline-flex\n                    items-center\n                    justify-center\n                    transition\n                    hover:bg-accent-lightest\n                  "},{default:Object(a["I"])((function(){return[z,Object(a["k"])(b,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})])]),Object(a["k"])("div",D,[Object(a["k"])("nav",E,[Object(a["k"])(s,null,{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.navigation,(function(e){return Object(a["v"])(),Object(a["g"])(o,{key:e.label,to:e.path,class:"nav-item-mobile"},{default:Object(a["I"])((function(){return[Object(a["k"])("span",N,Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])])])]})),_:1})]})),_:1})]})),_:1}),F],64)}var R={key:0,class:"flex items-center -mr-2"},T=Object(a["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-2 h-5 w-5 group-transition",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),U={class:"\n                rounded-lg\n                shadow-lg\n                ring-1 ring-black ring-opacity-5\n                overflow-hidden\n              "},W={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},$={class:"\n                        text-sm\n                        lg:text-base\n                        font-medium\n                        capitalize\n                        text-gray-900\n                      "},q={key:1,class:"nav-item"};function H(e,t,n,r,i,l){var o=Object(a["B"])("router-link"),c=Object(a["B"])("PopoverButton"),s=Object(a["B"])("PopoverPanel"),u=Object(a["B"])("Popover");return Object(a["v"])(),Object(a["g"])("div",null,[n.dropdownItems&&n.dropdownItems.length>0?(Object(a["v"])(),Object(a["g"])("div",R,[Object(a["k"])(u,{class:"relative"},{default:Object(a["I"])((function(){return[Object(a["k"])(c,{class:"\n            group\n            rounded-md\n            inline-flex\n            items-center\n            text-base\n            font-medium\n            capitalize\n            whitespace-nowrap\n            transition\n            hover:text-accent\n            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,\n          ",onClick:t[1]||(t[1]=Object(a["K"])((function(){}),["stop"]))},{default:Object(a["I"])((function(){return[Object(a["k"])(o,{to:n.path},{default:Object(a["I"])((function(){return[Object(a["A"])(e.$slots,"default")]})),_:3},8,["to"]),T]})),_:1}),Object(a["k"])(a["c"],{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:Object(a["I"])((function(){return[Object(a["k"])(s,{class:"\n              absolute\n              right-0\n              mt-3\n              transform\n              z-10\n              px-2\n              w-screen\n              max-w-sm\n              sm:px-0\n              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n            "},{default:Object(a["I"])((function(){return[Object(a["k"])("div",U,[Object(a["k"])("div",W,[Object(a["k"])(c,null,{default:Object(a["I"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(n.dropdownItems,(function(e){return Object(a["v"])(),Object(a["g"])(o,{key:e.label,to:e.path,class:"\n                      -m-3\n                      p-3\n                      flex\n                      items-start\n                      rounded-lg\n                      transition\n                      hover:bg-gray-50\n                    "},{default:Object(a["I"])((function(){return[Object(a["k"])("p",$,Object(a["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])]})),_:1})]})),_:1})]})),_:1})])):(Object(a["v"])(),Object(a["g"])("div",q,[Object(a["k"])(o,{to:n.path},{default:Object(a["I"])((function(){return[Object(a["A"])(e.$slots,"default")]})),_:3},8,["to"])]))])}var G=n("d511"),J={name:"NavItem",components:{Popover:G["f"],PopoverButton:G["g"],PopoverPanel:G["i"]},props:{path:String,dropdownItems:{type:Array,required:!1}}};J.render=H;var X=J,K=n("9510"),Y={components:{Popover:G["f"],PopoverButton:G["g"],PopoverGroup:G["h"],PopoverPanel:G["i"],MenuIcon:K["c"],XIcon:K["g"],NavItem:X},setup:function(){return{navigation:j["l"]}}};Y.render=L;var Q=Y,V={components:{Nav:Q,Footer:g}};V.render=r;var Z=V,ee=n("6c02"),te=Object(ee["a"])({history:Object(ee["b"])("/broker-app/"),routes:j["o"],scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),ne=te;n("ba8c");Object(a["f"])(Z).use(ne).mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.1fac0dce.svg"},b0ea:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"o",(function(){return c})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"q",(function(){return b})),n.d(t,"m",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"r",(function(){return O})),n.d(t,"g",(function(){return v})),n.d(t,"p",(function(){return j})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"c",(function(){return k})),n.d(t,"n",(function(){return w}));n("d3b7"),n("3ca3"),n("ddb0");var a=n("b85c"),r=(n("d81d"),n("ac1f"),n("1276"),n("c740"),n("caad"),n("2532"),n("99af"),function(e){return e.map((function(e){return{path:e.path,component:e.component}}))}),i=function(e){var t,n=[],r=Object(a["a"])(e);try{var i=function(){var e=t.value;if(e.hidden)return"continue";var a=e.path.split("/")[1],r=n.findIndex((function(e){return e.path==="/".concat(a)}));-1===r?n.push({path:"/".concat(a),label:e.label,dropdownItems:[]}):e.path.includes(":")||n[r].dropdownItems.push({path:e.path,label:e.label})};for(r.s();!(t=r.n()).done;)i()}catch(l){r.e(l)}finally{r.f()}return n},l="broker-app",o=[{path:"/",label:"home",component:function(){return n.e("chunk-42b2c344").then(n.bind(null,"7abe"))},hidden:!1},{path:"/about",label:"about",component:function(){return n.e("chunk-0945692b").then(n.bind(null,"613f"))},hidden:!1},{path:"/contact",label:"contact",component:function(){return n.e("chunk-0942c1a7").then(n.bind(null,"0648"))},hidden:!1}],c=r(o),s=i(o),u=[{id:"commercial-less-3",label:"Commercial &/or Construction (Less than $3 million total value)"},{id:"commercial-greater-3",label:"Commercial &/or Construction (More than $3 million total value)"}],d=[{id:"charge-1st",label:"1st"},{id:"charge-2nd",label:"2nd"},{id:"charge-3rd",label:"3rd"},{id:"charge-bridge",label:"Bridge"}],b=[{id:"term-1yr",label:"1 year"},{id:"term-18m",label:"18 months"},{id:"term-3yr",label:"3 years"},{id:"term-5yr",label:"5 years"},{id:"term-10yr",label:"10 years"},{id:"term-25yr",label:"25 years"},{id:"term-30yr",label:"30 years"},{id:"term-other",label:"Other"}],f=[{id:"industrial-manufacturing-facility",label:"Industrial - Manufacturing Facility"},{id:"industrial-warehouse/distribution-facility",label:"Industrial - Warehouse/Distribution Facility"},{id:"industrial-flex/multi-purpose-facility",label:"Industrial - Flex/Multi-Purpose Facility"},{id:"retail-enclosed shopping mall",label:"Retail - Enclosed Shopping Mall"},{id:"retail-shopping plaza or strip mall",label:"Retail - Shopping Plaza or Strip Mall"},{id:"retail-pad/standalone building",label:"Retail - Pad/Standalone Building"},{id:"office-office building",label:"Office - Office Building"},{id:"office-suite or condominium",label:"Office - Suite or Condominium"},{id:"office-professional suites (dental, medical, legal, etc.)",label:"Office - Professional Suites (Dental, Medical, Legal, etc.)"},{id:"multi-family residential units (mfru) - condominiums,",label:"Multi-Family Residential Units (MFRU) - Condominiums,"},{id:"apartment buildings, commercial/offices",label:"Apartment Buildings, Commercial/Offices"},{id:"multi-dwelling unit (mdu) - townhomes, condominiums,",label:"Multi-Dwelling Unit (MDU) - Townhomes, Condominiums,"},{id:"apartment buildings",label:"Apartment Buildings"},{id:"residential homes/estates",label:"Residential Homes/Estates"},{id:"hotel & lodging",label:"Hotel & Lodging"},{id:"restaurant",label:"Restaurant"},{id:"cottage",label:"Cottage"},{id:"land",label:"Land"}],p=[{id:"urban",label:"Urban"},{id:"rural",label:"Rural"},{id:"either",label:"Either"}],m=[{id:"ac-yes",label:"Yes"},{id:"ac-no",label:"No"},{id:"ac-not-relevant",label:"Not relevant"}],O=[{id:"water-municipal",label:"Municipal"},{id:"water-well",label:"Well Water"},{id:"water-either",label:"Either"}],v=[{id:"heat-forced-air",label:"Forced Air/Furnace"},{id:"heat-oil",label:"Heating Oil"},{id:"heat-propane",label:"Propane"},{id:"heat-any",label:"Any"}],j=[{id:"sewage-municipal",label:"Municipal"},{id:"sewage-septic",label:"Septic"},{id:"sewage-either",label:"Either"}],h=[{id:"loan-interest-only",label:"Interest Only"},{id:"loan-amortized",label:"Amortized"},{id:"loan-closed",label:"Closed"},{id:"loan-open",label:"Open"}],g=[{id:"bankruptcy-previous",label:"Previous Bankruptcy",description:"(Any Borrowers/Officers/Directors/Officers)"},{id:"bankruptcy-current",label:"Current Bankruptcy",description:"(Any Borrowers/Officers/Directors/Officers)"}],y=[{id:"consumer-previous",label:"Previous Consumer Proposal",description:"(Any Borrowers/Officers/Directors/Officers)"},{id:"consumer-current",label:"Current Consumer Proposal",description:"(Any Borrowers/Officers/Directors/Officers)"}],k=[{id:"investment",label:"Investment"},{id:"improvements",label:"Improvements (minor)"},{id:"renovation",label:"Renovation (major)"},{id:"purchase-land-only",label:"Purchase Land Only"},{id:"purchase-land-with-existing-structure",label:"Purchase Land with Existing Structure"},{id:"construction",label:"Construction"},{id:"purchase-plus-construction",label:"Purchase + Construction"},{id:"mortgage-arrears",label:"Mortgage Arrears"},{id:"other",label:"Other"}],w=[{id:"must-be-provided",label:"Must be provided"},{id:"needed-future",label:"Will need to be provided in the future"},{id:"either",label:"Either"}]},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.9c5d0129.js.map