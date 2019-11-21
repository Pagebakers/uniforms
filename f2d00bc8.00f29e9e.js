(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(66),n(226),n(33),n(27),n(26),n(67),n(0);var r=n(234);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={id:"tutorials-creating-custom-theme",title:"Creating a custom theme"},s=[{value:"Copy theme source",id:"copy-theme-source",children:[]},{value:"Import newly created theme",id:"import-newly-created-theme",children:[]},{value:"Referenced issues and pull requests",id:"referenced-issues-and-pull-requests",children:[]}],i={rightToc:s},c="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We've made hundreds of custom components across dozens of projects, including complete custom themes.\nMost of them began as source forks of ",Object(r.b)("inlineCode",{parentName:"p"},"uniforms-unstyled")," - one simply copies the source\nand imports ",Object(r.b)("inlineCode",{parentName:"p"},"./some/project/path/uniforms-custom-theme-with-a-cool-name"),"."),Object(r.b)("p",null,"For the purposes of this tutorial we will be using ",Object(r.b)("inlineCode",{parentName:"p"},"uniforms-custom-theme")," as our custom theme name."),Object(r.b)("h3",{id:"copy-theme-source"},"Copy theme source"),Object(r.b)("p",null,"Copy source of ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/vazco/uniforms/tree/master/packages/uniforms-unstyled"}),"uniforms-unstyled")," package from uniforms repository, or any other provided theme that you would like to extend, and put it somewhere inside your project, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"./uniforms-custom-theme"),"."),Object(r.b)("p",null,"Now you can start making changes to your own custom theme!"),Object(r.b)("h3",{id:"import-newly-created-theme"},"Import newly created theme"),Object(r.b)("p",null,"Instead of importing themes from ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," (original uniforms theme packages), simply import theme from your local path."),Object(r.b)("p",null,"That's all!"),Object(r.b)("h3",{id:"referenced-issues-and-pull-requests"},"Referenced issues and pull requests"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/vazco/uniforms/issues/433"}),"#433"),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/vazco/uniforms/issues/609#issuecomment-545079686"}),"#609"),"\n",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/vazco/uniforms/pull/612#issuecomment-545643935"}),"#612")))}u.isMDXComponent=!0},226:function(e,t,n){"use strict";var r=n(3),o=n(69)(!1),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!n(34)(a)),"Array",{indexOf:function(e){return s?a.apply(this,arguments)||0:o(this,e,arguments[1])}})},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r),a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,l=p[i+"."+m]||p[m]||u[m]||a;return n?o.a.createElement(l,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(l,Object.assign({},{ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);