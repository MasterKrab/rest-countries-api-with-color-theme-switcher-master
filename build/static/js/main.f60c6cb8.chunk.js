(this["webpackJsonprest-countries-api-with-color-theme-switcher-master"]=this["webpackJsonprest-countries-api-with-color-theme-switcher-master"]||[]).push([[0],{49:function(e,n,t){"use strict";t.r(n);var r,a,i,o,c,l=t(0),s=t.n(l),d=t(30),h=t.n(d),m=t(7),f=t(3),p=t(2),b=t(11),u=t(5),j={light:{backgroundColor:"hsl(0, 0%, 98%)",elementColor:"hsl(0, 0%, 100%)",textColor:"hsl(200, 15%, 8%)",inputTextColor:"hsl(0, 0%, 52%)"},dark:{backgroundColor:"hsl(207, 26%, 17%)",elementColor:"hsl(209, 23%, 22%)",textColor:"hsl(0, 0%, 100%)",inputTextColor:"hsl(0, 0%, 100%)"}},x=t(34),g=t(31),O=t.n(g),w=t(1),y=p.d.input(r||(r=Object(f.a)(["\n  appearance: none;\n  cursor: pointer;\n  \n  &::after{\n    content: \"\\f186\";\n    font-family: 'Font Awesome 5 Free';\n    color: #000;\n    transition: color 0.5s;\n  }\n  \n  &:checked::after{\n    color: #fff;\n    font-weight: 800;\n  }\n"],["\n  appearance: none;\n  cursor: pointer;\n  \n  &::after{\n    content: \"\\\\f186\";\n    font-family: 'Font Awesome 5 Free';\n    color: #000;\n    transition: color 0.5s;\n  }\n  \n  &:checked::after{\n    color: #fff;\n    font-weight: 800;\n  }\n"]))),v=p.d.label(a||(a=Object(f.a)(["\n  font-weight: 600;\n  margin-left: 0.5rem;\n  cursor: pointer;\n"]))),k=function(e){var n=e.handleTheme,t=e.theme;return Object(w.jsxs)("div",{children:[Object(w.jsx)(y,{onChange:n,defaultChecked:"dark"===t,id:"dark-mode",type:"checkbox",name:"dark-mode"}),Object(w.jsx)(v,{htmlFor:"dark-mode",children:"Dark mode"})]})},C=p.d.header(i||(i=Object(f.a)(["\n  background-color: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.2s;\n"])),(function(e){return e.theme.elementColor})),E=p.d.h1(o||(o=Object(f.a)(["\n  font-size: 1.2rem;\n  font-weight: 600;\n  \n  @media screen and (min-width: 768px){\n    font-size: 1.7rem;\n  }\n"]))),S=p.d.div(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  max-width: 1285px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),M=function(e){var n=e.handleTheme,t=e.theme;return Object(w.jsx)(C,{children:Object(w.jsxs)(S,{children:[Object(w.jsx)(E,{children:"Where in the world?"}),Object(w.jsx)(k,{handleTheme:n,theme:t})]})})},Z=t(21),P=t(22),F=t(15),z=t.n(F);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function A(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var I=l.createElement("animate",{attributeName:"stroke-dashoffset",repeatCount:"indefinite",dur:"1.7543859649122806s",keyTimes:"0;1",values:"0;256.58892822265625"});function N(e,n){var t=e.title,r=e.titleId,a=A(e,["title","titleId"]);return l.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:n,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,l.createElement("path",{fill:"none",stroke:"#337ab7",strokeWidth:8,strokeDasharray:"42.76482137044271 42.76482137044271",d:"M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z",strokeLinecap:"round",style:{transform:"scale(0.8)",transformOrigin:"50px 50px"}},I))}var B,L,R,D,W,J,Y,X,q,G,H,K,Q,U,V,$,_,ee,ne,te,re,ae,ie,oe,ce=l.forwardRef(N),le=(t.p,t(26)),se=t.n(le),de=t(33),he=function(e){var n=Object(l.useState)([]),t=Object(m.a)(n,2),r=t[0],a=t[1],i=Object(l.useState)(!0),o=Object(m.a)(i,2),c=o[0],s=o[1];return Object(l.useEffect)((function(){(function(){var n=Object(de.a)(se.a.mark((function n(){var t,r;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,fetch(e);case 3:return t=n.sent,n.next=6,t.json();case 6:r=n.sent,a(r),s(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e]),[r,c]},me=p.d.ul(B||(B=Object(f.a)(["\n  list-style: none;\n  padding-left: 0;\n  \n  & li{\n    margin-bottom: 0.7rem;\n  }\n"]))),fe=p.d.span(L||(L=Object(f.a)(["\n  font-weight: bold;\n"]))),pe=p.d.article(R||(R=Object(f.a)(["\n  background-color: ",";\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n  \n  @media screen and (min-width: 768px){\n    transition: transform 0.2s;\n    \n    &:hover{\n      transform: scale(1.05);\n    }\n  }\n  \n  \n  & div{\n    padding: 1rem 1.5rem;\n  }\n"])),(function(e){return e.theme.elementColor})),be=p.d.figure(D||(D=Object(f.a)(["\n  margin: 0;\n  \n  & img{\n    width: 100%;\n  }\n"]))),ue=Object(p.d)(b.b)(W||(W=Object(f.a)(["\n  color: inherit;\n  text-decoration: none;\n"]))),je=function(e){var n=e.countryName,t=e.flag,r=e.population,a=e.region,i=e.capital,o=e.alpha3Code;return Object(w.jsxs)(pe,{children:[Object(w.jsx)(ue,{to:"/details/".concat(o),children:Object(w.jsx)(be,{children:Object(w.jsx)("img",{src:t,alt:"flag of ".concat(n)})})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:Object(w.jsx)(ue,{to:"/details/".concat(o),children:n})}),Object(w.jsxs)(me,{children:[Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Population: "}),r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Region: "}),a]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Capital: "}),i]})]})]})]})},xe=function(){return Object(p.c)(J||(J=Object(f.a)(["\n    outline: 2px dashed ",";\n    outline-offset: 5px;\n    position: relative;\n    z-index: 20;\n"])),(function(e){return e.theme.textColor}))},ge=p.d.form(Y||(Y=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n\n  @media screen and (min-width: 768px){ \n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 40px;\n  }\n"]))),Oe=p.d.div(X||(X=Object(f.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);\n"]))),we=p.d.input(q||(q=Object(f.a)(["\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n\n  @media screen and (min-width: 768px) {\n    width: 480px;\n  }\n  \n  &::placeholder{\n    color: inherit\n  }\n\n  &:focus{\n    ","\n  }\n  \n  &::-webkit-search-cancel-button {\n    appearance: none;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    width: 15px;\n    height: 15px;\n    background-color: ",";\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n    margin-right: 1rem;\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.elementColor}),(function(e){return e.theme.inputTextColor}),xe(),(function(e){return e.theme.textColor})),ye=p.d.button(G||(G=Object(f.a)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 1rem 2rem;\n  cursor: pointer;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  -webkit-tap-highlight-color: transparent;\n\n  &:focus{\n    ","\n  }\n"])),(function(e){return e.theme.elementColor}),(function(e){return e.theme.inputTextColor}),xe()),ve=p.d.div(H||(H=Object(f.a)(['\n    position: relative;\n    width: min-content;\n  \n    &::after{\n      content: "";\n      position: absolute;\n      top: 22px;\n      right: 15px;\n      width: 12px;\n      height: 7px;\n      z-index: 20;\n      color: #000;\n      background: ',";\n      clip-path: polygon(12% 11%, 48% 72%, 82% 14%, 90% 29%, 48% 100%, 5% 27%);\n    }\n"])),(function(e){return e.theme.textColor})),ke=p.d.select(K||(K=Object(f.a)(["\n  appearance: none;\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 1rem;\n  border-radius: 5px;\n  width: 200px;\n  margin-bottom: 1rem;\n  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);\n  \n  &:focus{\n    ","\n  }\n  \n  & option{\n    margin-top: 1rem;\n    border: none;\n    border-radius: 5px;\n  }\n"])),(function(e){return e.theme.elementColor}),(function(e){return e.theme.textColor}),xe()),Ce=p.d.div(Q||(Q=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 500px));\n  justify-content: center;\n  align-items: start;\n  gap: 70px;\n  margin-top: 2rem;\n\n  @media screen and (min-width: 1024px){\n    grid-template-columns: repeat(auto-fit, minmax(250px, 265px));\n    justify-content: space-between;\n    margin-top: 3rem;\n  }\n\n  @media screen and (min-width: 1220px) {\n    justify-content: space-between;\n  }\n"]))),Ee=Object(p.d)(ce)(U||(U=Object(f.a)(["\n  grid-column: span 2;\n"]))),Se=p.d.h2(V||(V=Object(f.a)(["\n  text-align: center;\n  grid-column: span 2;\n"]))),Me=function(){var e=Object(l.useState)(""),n=Object(m.a)(e,2),t=n[0],r=n[1],a=Object(l.useState)(""),i=Object(m.a)(a,2),o=i[0],c=i[1],s=Object(l.useState)(""),d=Object(m.a)(s,2),h=d[0],f=d[1],p=he("https://restcountries.eu/rest/v2/".concat(h)),b=Object(m.a)(p,2),u=b[0],j=b[1],x=function(){t.length>0?f("name/".concat(t)):f("")};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(ge,{onSubmit:function(e){e.preventDefault(),x()},children:[Object(w.jsxs)(Oe,{children:[Object(w.jsx)(we,{onChange:function(e){r(e.target.value),x()},type:"search",name:"search","aria-label":"Search for a country",placeholder:"Search for a country...",value:t}),Object(w.jsx)(ye,{"aria-label":"Search",children:Object(w.jsx)(Z.a,{"aria-hidden":!0,icon:P.b})})]}),Object(w.jsx)(ve,{children:Object(w.jsxs)(ke,{value:o,onChange:function(e){c(e.target.value),0===o.length?f(""):(f("region/".concat(e.target.value)),r(""))},name:"regions","aria-label":"Filter by region",children:[Object(w.jsx)("option",{value:"",children:"Filter by region"}),["Africa","Americas","Asia","Europe","Oceania"].map((function(e){return Object(w.jsx)("option",{value:e,children:e},z()())}))]})})]}),Object(w.jsx)(Ce,{"aria-live":"polite",children:j?Object(w.jsx)(Ee,{}):u.length>0?u.map((function(e){return Object(w.jsx)(je,{countryName:e.name,flag:e.flag,population:e.population,region:e.region,capital:e.capital,alpha3Code:e.alpha3Code},z()())})):Object(w.jsx)(Se,{children:"We did not find any country according to the search"})})]})},Ze=p.d.div($||($=Object(f.a)(["\n  max-width: 1285px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Pe=Object(p.d)(b.b)(_||(_=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 135px;\n  height: 40px;\n  background-color: ",";\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n  color: ",";\n  text-decoration: none;\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-top: 70px;\n  margin-bottom: 70px;\n  transition: background-color 0.2s;\n  \n  & svg{\n    color: inherit;\n    margin-right: 0.5rem;\n  }\n"])),(function(e){return e.theme.elementColor}),(function(e){return e.theme.textColor})),Fe=p.d.article(ee||(ee=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  margin-top: 2rem;\n  margin-bottom: 5rem;\n  \n  @media screen and (min-width: 1024px){\n    grid-template-columns: repeat(2, 1fr);  \n    gap: 150px;\n  }\n"]))),ze=p.d.h2(ne||(ne=Object(f.a)(["\n  font-size: 2.3rem;\n  margin-bottom: 0.5rem;\n"]))),Te=p.d.div(te||(te=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ae=p.d.div(re||(re=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  \n  @media screen and (min-width: 1024px){\n    flex-direction: row;  \n    gap: 30px;\n  }\n\n  @media screen and (min-width: 1220px){\n    gap: 115px;\n  }\n"]))),Ie=p.d.div(ae||(ae=Object(f.a)(["\n  margin-top: auto;\n  margin-bottom: 1rem;\n  \n  @media screen and (min-width: 1024px){\n    display: flex;\n  }\n"]))),Ne=p.d.ul(ie||(ie=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  list-style: none;\n  padding-left: 0;\n\n  @media screen and (min-width: 1024px){\n    margin-left: 1rem;\n    width: 70%;\n  }\n"]))),Be=Object(p.d)(b.b)(oe||(oe=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100px;\n  height: 30px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  background-color: ",";\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n  color: inherit;\n  text-decoration: none;\n  border-radius: 5px;\n"])),(function(e){return e.theme.elementColor})),Le=function(e){var n=e.match,t=he("https://restcountries.eu/rest/v2/alpha/".concat(n.params.code)),r=Object(m.a)(t,2),a=r[0],i=r[1],o=he("https://restcountries.eu/rest/v2/all"),c=Object(m.a)(o,2),l=c[0],s=c[1],d=a.name,h=a.flag,f=a.nativeName,p=a.population,b=a.region,u=a.capital,j=a.subregion,x=a.topLevelDomain,g=a.currencies,O=a.languages,y=a.borders;return Object(w.jsxs)(Ze,{children:[Object(w.jsxs)(Pe,{to:"/",children:[Object(w.jsx)(Z.a,{icon:P.a,"aria-hidden":!0}),"Back"]}),i?Object(w.jsx)(ce,{}):Object(w.jsxs)(Fe,{children:[Object(w.jsx)("img",{src:h,alt:"flag of ".concat(d)}),Object(w.jsxs)(Te,{children:[Object(w.jsx)(ze,{children:d}),Object(w.jsxs)(Ae,{children:[Object(w.jsxs)(me,{children:[Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Native Name: "}),f]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Population: "}),p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Region: "}),b]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Sub Region: "}),j]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Capital: "}),u]})]}),Object(w.jsxs)(me,{children:[Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Top Level Domain: "}),x]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Currencies: "}),g.map((function(e){return e.name})).join(", ")]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(fe,{children:"Languages: "}),O.map((function(e){return e.name})).join(", ")]})]})]}),y.length>0&&Object(w.jsxs)(Ie,{children:[Object(w.jsx)("h3",{children:"Border countries: "}),Object(w.jsx)(Ne,{children:!s&&y.map((function(e){var n=l.find((function(n){return n.alpha3Code===e}));return Object(w.jsx)("li",{children:Object(w.jsx)(Be,{to:e,children:n.name})},z()())}))})]})]})]})]})};function Re(){return(Re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function De(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var We=l.createElement("path",{id:"aabd4afe-642c-4327-a3f2-08ec89276309","data-name":"Path 482",d:"M305.95759,803.97637s-12.753-31.391,25.505-54.934Z",transform:"translate(-157.39961 -95.84172)",fill:"#f0f0f0"}),Je=l.createElement("path",{id:"e302a207-98de-4798-aedc-79a63cff2427","data-name":"Path 483",d:"M290.27363,803.40533s-3.89-22.374-34-22.182Z",transform:"translate(-157.39961 -95.84172)",fill:"#f0f0f0"}),Ye=l.createElement("path",{id:"e16a8a0b-115e-4877-a9d6-27a72cf85b73","data-name":"Path 482",d:"M732.95759,803.97637s-12.753-31.391,25.505-54.934Z",transform:"translate(-157.39961 -95.84172)",fill:"#f0f0f0"}),Xe=l.createElement("path",{id:"b0706b48-08e0-43ea-ab25-36cfaee90c12","data-name":"Path 483",d:"M717.27363,803.40533s-3.89-22.374-34-22.182Z",transform:"translate(-157.39961 -95.84172)",fill:"#f0f0f0"}),qe=l.createElement("circle",{cx:565.05368,cy:394.03053,r:110.8529,fill:"#f0f0f0"}),Ge=l.createElement("polygon",{points:"565.358 394.03 565.663 394.03 571.145 708.317 559.572 708.317 565.358 394.03",fill:"#f0f0f0"}),He=l.createElement("circle",{cx:803.05368,cy:479.08542,r:80.8529,fill:"#f0f0f0"}),Ke=l.createElement("polygon",{points:"803.276 479.085 803.498 479.085 807.496 708.317 799.055 708.317 803.276 479.085",fill:"#f0f0f0"}),Qe=l.createElement("path",{d:"M512.72772,575.74828a10.6636,10.6636,0,0,0,8.99946-13.652L552.462,539.92876l-18.40925-6.99159-26.364,22.12251a10.72142,10.72142,0,0,0,5.03894,20.6886Z",transform:"translate(-157.39961 -95.84172)",fill:"#ffb6b6"}),Ue=l.createElement("polygon",{points:"332.796 697.353 323.037 697.352 318.394 659.71 332.798 659.71 332.796 697.353",fill:"#ffb6b6"}),Ve=l.createElement("path",{d:"M492.68433,802.65467l-31.4677-.00116v-.398a12.24876,12.24876,0,0,1,12.24811-12.24791h.00077l19.2194.00078Z",transform:"translate(-157.39961 -95.84172)",fill:"#2f2e41"}),$e=l.createElement("polygon",{points:"258.253 697.353 248.494 697.352 243.852 659.71 258.255 659.71 258.253 697.353",fill:"#ffb6b6"}),_e=l.createElement("path",{d:"M418.14189,802.65467l-31.4677-.00116v-.398a12.24876,12.24876,0,0,1,12.2481-12.24791h.00078l19.2194.00078Z",transform:"translate(-157.39961 -95.84172)",fill:"#2f2e41"}),en=l.createElement("polygon",{points:"265.791 488.031 245.109 601.135 237.875 690.973 261.361 689.818 274.73 602.578 307.96 526.618 317.85 689.608 339.47 689.678 351.103 483.507 265.791 488.031",fill:"#2f2e41"}),nn=l.createElement("path",{d:"M511.15006,454.415l-28.9889-11.5343-33.25612,3.805L420.71221,462.271s8.624,108.15764-3.87664,133.52747c0,0,10.016,13.87358,50.82643,10.48683,0,0,39.75312-5.02431,40.73853-18.06008s1.19332-36.737,1.19332-36.737l13.7989-47.55075Z",transform:"translate(-157.39961 -95.84172)",fill:"#337ab7"}),tn=l.createElement("path",{d:"M432.044,464.353l-11.33183-2.082s-12.05733,5.28675-11.93358,21.04064-21.30125,68.5705,4.33154,70.78479S432.044,516.64233,432.044,516.64233Z",transform:"translate(-157.39961 -95.84172)",fill:"#337ab7"}),rn=l.createElement("path",{d:"M501.95577,461.12606l9.19429-6.71109s14.03761,3.17112,19.23007,14.47145c0,0,57.56571,41.74991,41.73193,57.58369s-48.11032,35.3215-48.11032,35.3215l-11.95038-13.53107,29.64882-26.85964-24.323-22.15808Z",transform:"translate(-157.39961 -95.84172)",fill:"#337ab7"}),an=l.createElement("path",{d:"M487.25519,412.89322a23.79938,23.79938,0,0,1-47.59875,0v-.91349a23.79938,23.79938,0,0,1,47.5805.91349Z",transform:"translate(-157.39961 -95.84172)",fill:"#ffb6b6"}),on=l.createElement("path",{d:"M467.0732,409.05658c1.52248-.24969,3.17286-.4872,4.537.21315,2.96578,1.51639,2.28371,5.81587,3.90361,8.65377.63944,1.12664,1.67473,2.04621,2.101,3.26419s.16444,2.74046.83432,3.91581c.96831,1.69909,3.59306,1.94877,5.31648.93785a8.45465,8.45465,0,0,0,3.33726-4.7075c.57245-1.61992,1.05354-3.41036,2.436-4.47a5.16406,5.16406,0,0,0,1.33369-1.09009,3.28853,3.28853,0,0,0,.31669-1.86351c0-4.11678-.63944-7.3079.2923-11.29679,1.492-6.43095,2.85617-9.60989-1.86961-14.37829a16.35142,16.35142,0,0,0-8.90345-4.55526c-3.045-.49937-7.52712,3.75139-10.60862,3.654-7.83771-.31059-14.45135-7.56976-21.92369-5.22515a15.4197,15.4197,0,0,0-8.05085,5.92549c-3.65394,5.38348-3.3251,7.46623-2.79528,13.89109a2.37518,2.37518,0,0,0,.408,1.37023c.27406.32886.71861.50547.98656.84041a2.07669,2.07669,0,0,1,.3045,1.49813,10.07846,10.07846,0,0,1-.7247,3.045,1.25445,1.25445,0,0,0-.10962,1.09619,1.10836,1.10836,0,0,0,.609.41411c3.04495,1.09619,6.33352-1.017,9.59161-.96221s6.35178,2.235,9.71342,1.76C461.07465,410.53034,464.08307,409.54986,467.0732,409.05658Z",transform:"translate(-157.39961 -95.84172)",fill:"#2f2e41"}),cn=l.createElement("path",{d:"M466.91564,541.3665a2.839,2.839,0,0,1-.62927.16221l-26.42713,3.689a2.844,2.844,0,0,1-3.0613-1.8043l-22.74754-59.191a2.85615,2.85615,0,0,1,2.044-3.81247l.00014,0,24.852-5.54586a2.27074,2.27074,0,0,0,.55162-.20179l24.17208-12.63793a2.82911,2.82911,0,0,1,.58762-.22869l26.60157-7.0917a2.85071,2.85071,0,0,1,3.402,1.73517l19.83447,51.61088a2.842,2.842,0,0,1-.37523,2.73061l-6.85952,9.21159a2.85239,2.85239,0,0,1-1.26638.96006l-14.991,5.76115a2.255,2.255,0,0,0-.3115.14808L467.312,541.17827A2.85632,2.85632,0,0,1,466.91564,541.3665Z",transform:"translate(-157.39961 -95.84172)",fill:"#fff"}),ln=l.createElement("path",{d:"M479.21094,462.59444l-3.37808.90095-8.95188,2.38755-.016.00366-12.2558,6.40829-4.54822,2.37858-.00212.00081-6.831,3.57118-.18734.0422-7.09623,1.58249-3.42961.76682-13.9882,3.12134,21.95971,57.14092,14.41468-2.01148,3.53438-.49425,7.53322-1.0528.08744-.01126,24.207-13.87392,14.72819-5.66016,6.72448-9.02982-19.11548-49.74007Z",transform:"translate(-157.39961 -95.84172)",fill:"#e4e4e4"}),sn=l.createElement("rect",{x:420.95351,y:481.09788,width:78.01578,height:3.47642,transform:"translate(-299.99264 101.29638) rotate(-21.02215)",fill:"#fff"}),dn=l.createElement("rect",{x:425.11051,y:491.91473,width:78.01578,height:3.47642,transform:"translate(-303.59627 103.50757) rotate(-21.02215)",fill:"#fff"}),hn=l.createElement("rect",{x:433.5076,y:513.76471,width:78.01578,height:3.47642,transform:"translate(-310.87559 107.97414) rotate(-21.02215)",fill:"#fff"}),mn=l.createElement("polygon",{points:"321.811 366.753 343.613 423.483 340.368 424.73 318.433 367.654 321.811 366.753",fill:"#fff"}),fn=l.createElement("polygon",{points:"297.21 376.453 292.733 388.91 291.181 393.23 287.56 403.312 286.784 405.467 286.007 407.633 284.985 410.476 277.646 430.901 275.738 425.936 281.722 409.28 283.076 405.509 283.274 404.959 284.875 400.5 286.895 394.878 288.448 390.556 292.659 378.833 292.661 378.832 297.21 376.453",fill:"#fff"}),pn=l.createElement("polygon",{points:"278.545 384.028 301.035 442.552 297.501 443.046 275.115 384.795 278.545 384.028",fill:"#fff"}),bn=l.createElement("circle",{cx:273.73095,cy:429.7149,r:10.35285,fill:"#ffb6b6"}),un=l.createElement("circle",{cx:701.22511,cy:183.97567,r:183.97568,fill:"#e4e4e4"}),jn=l.createElement("polygon",{points:"700.72 183.975 700.214 183.975 691.116 705.577 710.323 705.577 700.72 183.975",fill:"#e4e4e4"}),xn=l.createElement("path",{d:"M992.39961,803.64322h-834a1,1,0,0,1,0-2h834a1,1,0,0,1,0,2Z",transform:"translate(-157.39961 -95.84172)",fill:"#cacaca"});function gn(e,n){var t=e.title,r=e.titleId,a=De(e,["title","titleId"]);return l.createElement("svg",Re({id:"ffcf1f7b-abca-46b6-8e43-585f7256c1ae","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:885.20079,height:708.31655,viewBox:"0 0 885.20079 708.31655",ref:n,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,We,Je,Ye,Xe,qe,Ge,He,Ke,Qe,Ue,Ve,$e,_e,en,nn,tn,rn,an,on,cn,ln,sn,dn,hn,mn,fn,pn,bn,un,l.createElement("path",{d:"M994.46643,156.93609A183.99,183.99,0,0,1,687.90857,351.65056,183.99152,183.99152,0,1,0,994.46643,156.93609Z",transform:"translate(-157.39961 -95.84172)",opacity:.1,style:{isolation:"isolate"}}),jn,xn)}var On,wn,yn,vn,kn,Cn,En=l.forwardRef(gn),Sn=(t.p,p.d.div(On||(On=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5rem;\n  max-width: 1285px;  \n  margin-left: auto;\n  margin-right: auto; \n  text-align: center;\n  \n  @media screen and (min-width: 1024px){\n    flex-direction: row;\n  }\n"])))),Mn=p.d.h2(wn||(wn=Object(f.a)(["\n  font-size: 2.5rem;\n"]))),Zn=Object(p.d)(En)(yn||(yn=Object(f.a)(["\n  width: 100%;\n  max-width: 500px;\n  height: 500px;\n"]))),Pn=Object(p.d)(b.b)(vn||(vn=Object(f.a)(["\n  display: inline-block;\n  background-color: ",";\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n  color: inherit;\n  text-decoration: none;\n  padding: 1rem;\n  border-radius: 5px;\n  margin-top: 1rem;\n  \n  &:hover{\n    text-decoration: underline;\n  }\n"])),(function(e){return e.theme.elementColor})),Fn=function(){return Object(w.jsxs)(Sn,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(Mn,{children:"404 Not Found"}),Object(w.jsx)("p",{children:"We could not find the page you are looking for."}),Object(w.jsx)(Pn,{to:"/",children:"Back to home"})]}),Object(w.jsx)(Zn,{"aria-hidden":!0})]})};O.a.load({google:{families:["Nunito Sans"]},custom:{families:["Font Awesome 5 Free"],urls:["https://use.fontawesome.com/releases/v5.15.2/css/all.css"]}});var zn=Object(p.b)(kn||(kn=Object(f.a)(["\n  html{\n    background-color: ",";\n    color: ",';\n    font-family: "Nunito Sans", sans-serif;\n    box-sizing: border-box;\n    transition: background-color 0.2s;\n  }\n  \n  *{\n    box-sizing: inherit;\n  }\n  \n  body{\n    &::-webkit-scrollbar{\n      width: 8px;\n    }\n\n    &::-webkit-scrollbar-track{\n      background-color: ',";\n    }\n\n    &::-webkit-scrollbar-thumb{\n      border-radius: 5px;\n      background-color: ",";\n    }\n  }\n  \n  img{\n    max-width: 100%;\n  }\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.elementColor}),(function(e){return e.theme.textColor})),Tn=p.d.main(Cn||(Cn=Object(f.a)(["\n  display: grid;\n  grid-template-columns: minmax(min-content, 1285px);\n  justify-content: center;\n  padding: 1rem;\n"]))),An=function(){var e=Object(l.useState)(localStorage.getItem("theme")||"light"),n=Object(m.a)(e,2),t=n[0],r=n[1];return Object(w.jsxs)(p.a,{theme:"light"===t?j.light:j.dark,children:[Object(w.jsx)(x.a,{}),Object(w.jsx)(zn,{}),Object(w.jsxs)(b.a,{children:[Object(w.jsx)(M,{handleTheme:function(){var e="light"===t?"dark":"light";r(e),localStorage.setItem("theme",e)},theme:t}),Object(w.jsx)(Tn,{children:Object(w.jsxs)(u.d,{children:[Object(w.jsx)(u.b,{exact:!0,path:"/details/:code",component:Le}),Object(w.jsx)(u.b,{exact:!0,path:"/",component:Me}),Object(w.jsx)(u.b,{exact:!0,path:"/not-found",component:Fn}),Object(w.jsx)(u.b,{path:"/*",children:Object(w.jsx)(u.a,{to:"/not-found"})})]})})]})]})};h.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(An,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f60c6cb8.chunk.js.map