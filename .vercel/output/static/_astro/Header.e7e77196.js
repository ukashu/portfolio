import{R as o}from"./index.03be2d59.js";import{j as a}from"./jsx-runtime.b9e88e07.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=o.createContext&&o.createContext(f),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},i.apply(this,arguments)},g=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]]);return t};function h(e){return e&&e.map(function(r,t){return o.createElement(r.tag,i({key:t},r.attr),h(r.child))})}function x(e){return function(r){return o.createElement(b,i({attr:i({},e.attr)},r),h(e.child))}}function b(e){var r=function(t){var n=e.attr,l=e.size,s=e.title,d=g(e,["attr","size","title"]),u=l||t.size||"1em",c;return t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:c,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return m!==void 0?o.createElement(m.Consumer,null,function(t){return r(t)}):r(f)}function j(e){return x({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(e)}function N(){return a.jsxs("header",{className:"min-h-1/5 z-10 flex flex-row items-center justify-evenly gap-1 pb-20 sm:px-32",children:[a.jsx("a",{href:"https://github.com/",children:a.jsx(j,{size:"1.5em",onClick:()=>console.log("clicked")})}),a.jsx("p",{className:" text-base",children:"johndoe@gmail.com"}),a.jsx("strong",{className:" text-lg font-semibold",children:a.jsx("p",{children:"+76 123456789"})}),a.jsxs("p",{className:" text-lg",children:[a.jsx("button",{onClick:()=>console.log("hellolololo"),children:"ENG"})," / ",a.jsx("button",{children:"PL"})]})]})}export{N as default};