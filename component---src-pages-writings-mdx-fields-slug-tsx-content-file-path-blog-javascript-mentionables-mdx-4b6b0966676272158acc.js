/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-javascript-mentionables-mdx-4b6b0966676272158acc.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[552],{4184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)l.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var l=n(4836);t.M=void 0;var r=l(n(434)),a=l(n(7071)),o=l(n(7294)),i=l(n(5697)),s=["children"],c=o.default.forwardRef((function(e,t){var n=e.children,l=(0,a.default)(e,s);return o.default.createElement("a",(0,r.default)({ref:t},l,{onClick:function(e){"function"==typeof l.onClick&&l.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),l.target&&"_self"!==l.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:l.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=l.href)}}):t&&(document.location=l.href),!1}}),n)}));t.M=c,c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},6544:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",em:"em",ol:"ol",li:"li"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Concepts"),"\n",r.createElement(t.h2,null,"Short-circuit Evaluation"),"\n",r.createElement(t.p,null,"In any line that evaluates multiple conditions, JS does its best to short-\ncircuit what needs to be evaluated."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-JavaScript"},'// LHS is evaluated and returned as true (RHS ignored)\nconsole.log("me" || "you");\n\n// 1st condition evaluated as false yields third condition evaluation & return\n// (returns true due to two true expressions "you" and "you")\nconsole.log(0 ? ("me || me") : ("you" && "you"))\n')),"\n",r.createElement(t.h2,null,"Automatic Type Conversion (Via Type Coercion)"),"\n",r.createElement(t.p,null,"JS does its best to allow any types to be compared and returned. Its interpreter\nperforms ",r.createElement(t.em,null,"type coercion"),' on the values it is "confused" about.'),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-JavaScript"},'console.log(8 * null);  // converts null to 0, returns 0\nconsole.log("5" - 1);   // converts "5" to 5, returns 4\nconsole.log("5" + 1);   // converts 1 to "1", returns "51"\nconsole.log("five" * 2);// cannot perform conversion on "five", returns NaN\n')),"\n",r.createElement(t.p,null,"Note that the type coercion being performed is heavily dependent on the\n",r.createElement(t.em,null,"operation"),"; The values being evaluated and converted are secondary in\ncomparison."),"\n",r.createElement(t.h2,null,"Variables & Data Binding"),"\n",r.createElement(t.p,null,"There are three keywords that represent assigning a value to a variable:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.em,null,"var")," - allows for defining a global variable. When ",r.createElement(t.em,null,"var")," is used in the context of a local block, the associated variable can be accessed outside said block."),"\n",r.createElement(t.li,null,r.createElement(t.em,null,"let")," - introduced in ES2015. Allows for defining a local variable whose scope is exactly the block it belongs to."),"\n",r.createElement(t.li,null,r.createElement(t.em,null,"const")," - when used in assignment, behaves like ",r.createElement(t.em,null,"final")," in Java. The associated variables behave just like variables defined with ",r.createElement(t.em,null,"let"),", only they cannot be modified at all in the future."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(8351),s=n(6653);const c=e=>{let{data:t,children:n}=e;return r.createElement(i.Z,null,r.createElement("p",{className:s.hT},r.createElement("i",null,t.mdx.frontmatter.date),r.createElement("br",null),t.mdx.frontmatter.updated&&r.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),r.createElement("div",{className:s.v_},n))};function u(e){return r.createElement(c,e,r.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var l=n(7294),r=n(4160),a=n(757),o=n(5707),i="layout-module--nav-link-item--fbd31",s=n(4184),c=n.n(s);const u="steebe - ",d={HOME:u+"HOME",PHOTOS:u+"PHOTOS",TOOLS:u+"TOOLS",BLOG:u+"BLOG",ABOUT:u+"ABOUT"};let m=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(u,""),this.linkPath="/",t){case d.HOME:this.linkPath="/";break;case d.PHOTOS:this.linkPath="/photos";break;case d.TOOLS:this.linkPath="/tools";break;case d.BLOG:this.linkPath="/writings";break;case d.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var f=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,s=null==n?void 0:n.includes("photos"),u=null==n?void 0:n.includes("tool"),f=null==n?void 0:n.includes("about"),h=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),p=[new m("/"===n||!u&&!f&&!h&&!s,d.HOME),new m(u,d.TOOLS),new m(h,d.BLOG),new m(f,d.ABOUT)];return l.createElement("div",{className:"layout-module--container--4f29e"},l.createElement("title",null,p.filter((e=>e.current)).map((e=>e.title))),l.createElement("nav",null,l.createElement("ul",{className:"layout-module--nav-links--a181c"},p.map((e=>l.createElement("li",{key:e.title,className:i},l.createElement(r.rU,{to:e.linkPath,className:c()(e.classNames)},e.linkLabel)))))),l.createElement("main",null,t),l.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},l.createElement("div",{className:"layout-module--resume--53a60"},l.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),l.createElement(a.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${i}`,rel:"noreferrer"},"GITHUB"),l.createElement(a.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return r},cP:function(){return a},hr:function(){return l}});var l="globals-module--centered-text--f1021",r="globals-module--nav-link-current-item--312f0",a="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return a},hT:function(){return l},v_:function(){return r}});var l="writings-module--date--4bb92",r="writings-module--post--fa2ad",a="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return a}});var l=n(7294);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-javascript-mentionables-mdx-4b6b0966676272158acc.js.map