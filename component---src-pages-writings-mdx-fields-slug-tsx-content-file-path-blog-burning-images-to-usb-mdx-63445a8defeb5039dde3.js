/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-burning-images-to-usb-mdx-63445a8defeb5039dde3.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[463],{4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var a=n(4836);t.M=void 0;var r=a(n(434)),l=a(n(7071)),o=a(n(7294)),i=a(n(5697)),s=["children"],c=o.default.forwardRef((function(e,t){var n=e.children,a=(0,l.default)(e,s);return o.default.createElement("a",(0,r.default)({ref:t},a,{onClick:function(e){"function"==typeof a.onClick&&a.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),a.target&&"_self"!==a.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:a.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=a.href)}}):t&&(document.location=a.href),!1}}),n)}));t.M=c,c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},9650:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(1151),r=n(7294);function l(e){const t=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Become the Trogdor of ISOs"),"\n",r.createElement(t.p,null,"On MacOS, there exist a few darwin executables that come in handy in regards to\nmaking external disks bootable."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Download an image you want to install to another local machine"),"\n",r.createElement(t.li,null,"Follow these steps within your favorite MacOS terminal application:"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"$ hdiutil convert -format UDRW -o /path/to/target.img /path/to/source.iso\n$ man hdiutil # Since you probably don't know what you just did...\n$ mv /path/to/target.img.dmg /path/to/target.img\n$ # Seems dumb, because it is. MacOS appends .dmg to the target image.\n$ # Insert your USB drive now!\n$ diskutil list\n$ sudo dd if=/path/to/converted.img of=/dev/rdiskN bs=1m\n$ # Wait for an annoyingly arbitrary amount of time.\n$ diskutil eject /dev/diskN\n$ # Actually super important. Ignore any warnings that MacOS throws at you.\n")),"\n",r.createElement(t.ol,{start:"3"},"\n",r.createElement(t.li,null,"Plug it into the machine you want to ~~brick~~ install the image to and boot up in that one mode that lets you mess around with the BIOS!"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(8351),s=n(6653);const c=e=>{let{data:t,children:n}=e;return r.createElement(i.Z,null,r.createElement("p",{className:s.hT},r.createElement("i",null,t.mdx.frontmatter.date),r.createElement("br",null),t.mdx.frontmatter.updated&&r.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),r.createElement("div",{className:s.v_},n))};function u(e){return r.createElement(c,e,r.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7294),r=n(4160),l=n(757),o=n(5707),i="layout-module--nav-link-item--fbd31",s=n(4184),c=n.n(s);const u="steebe - ",d={HOME:u+"HOME",PHOTOS:u+"PHOTOS",TOOLS:u+"TOOLS",BLOG:u+"BLOG",ABOUT:u+"ABOUT"};let m=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(u,""),this.linkPath="/",t){case d.HOME:this.linkPath="/";break;case d.PHOTOS:this.linkPath="/photos";break;case d.TOOLS:this.linkPath="/tools";break;case d.BLOG:this.linkPath="/writings";break;case d.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var f=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,s=null==n?void 0:n.includes("photos"),u=null==n?void 0:n.includes("tool"),f=null==n?void 0:n.includes("about"),h=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),p=[new m("/"===n||!u&&!f&&!h&&!s,d.HOME),new m(u,d.TOOLS),new m(h,d.BLOG),new m(f,d.ABOUT)];return a.createElement("div",{className:"layout-module--container--4f29e"},a.createElement("title",null,p.filter((e=>e.current)).map((e=>e.title))),a.createElement("nav",null,a.createElement("ul",{className:"layout-module--nav-links--a181c"},p.map((e=>a.createElement("li",{key:e.title,className:i},a.createElement(r.rU,{to:e.linkPath,className:c()(e.classNames)},e.linkLabel)))))),a.createElement("main",null,t),a.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},a.createElement("div",{className:"layout-module--resume--53a60"},a.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),a.createElement(l.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${i}`,rel:"noreferrer"},"GITHUB"),a.createElement(l.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return r},cP:function(){return l},hr:function(){return a}});var a="globals-module--centered-text--f1021",r="globals-module--nav-link-current-item--312f0",l="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return l},hT:function(){return a},v_:function(){return r}});var a="writings-module--date--4bb92",r="writings-module--post--fa2ad",l="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return l}});var a=n(7294);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-burning-images-to-usb-mdx-63445a8defeb5039dde3.js.map