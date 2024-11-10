/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-java-codestyle-mdx-9bba893c3a07529ea43a.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[385],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var r=n(4836);t.M=void 0;var l=r(n(434)),a=r(n(7071)),o=r(n(7294)),i=r(n(5697)),c=["children"],u=o.default.forwardRef((function(e,t){var n=e.children,r=(0,a.default)(e,c);return o.default.createElement("a",(0,l.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),n)}));t.M=u,u.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},9699:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(1151),l=n(7294);function a(e){const t=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"All Hail the Repo"),"\n",l.createElement(t.h2,null,"Style & Smell"),"\n",l.createElement(t.h2,null,"Coverage"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-xml"},"\x3c!-- Code Coverage --\x3e\n<plugin>\n  <groupId>org.jacoco</groupId>\n  <artifactId>jacoco-maven-plugin</artifactId>\n  <version>0.8.5-SNAPSHOT</version>\n  <executions>\n    \x3c!-- Establishes target/site/ --\x3e\n    <execution>\n        <id>prepare-agent</id>\n        <goals>\n            <goal>prepare-agent</goal>\n        </goals>\n    </execution>\n\n    \x3c!-- Publishes coverage report to target/site/ --\x3e\n    <execution>\n        <id>report</id>\n        <phase>test</phase>\n        <goals>\n            <goal>report</goal>\n        </goals>\n    </execution>\n\n    \x3c!--\n    Ensures the coverage is of a certain threshold during the verify lifecycle\n    https://www.eclemma.org/jacoco/trunk/doc/check-mojo.html\n    --\x3e\n    <execution>\n      <id>check</id>\n      <goals>\n        <goal>check</goal>\n      </goals>\n      <configuration>\n        <rules>\n          <rule>\n            <element>PACKAGE</element>\n            <includes>\n              <include>me.stevebass.rootpackage.**</include>\n            </includes>\n            <limits>\n              <limit>\n                <counter>LINE</counter>\n                <value>COVEREDRATIO</value>\n                <minimum>0.80</minimum>\n              </limit>\n            </limits>\n          </rule>\n        </rules>\n      </configuration>\n    </execution>\n  </executions>\n\n  \x3c!-- Global config for all JaCoCo behavior --\x3e\n  <configuration>\n    <excludes>\n      <exclude>**/*MyMainClass.java</exclude>\n    </excludes>\n  </configuration>\n</plugin>\n</plugins>\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(8351),c=n(6653);const u=e=>{let{data:t,children:n}=e;return l.createElement(i.Z,null,l.createElement("p",{className:c.hT},l.createElement("i",null,t.mdx.frontmatter.date),l.createElement("br",null),t.mdx.frontmatter.updated&&l.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),l.createElement("div",{className:c.v_},n))};function s(e){return l.createElement(u,e,l.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),l=n(4160),a=n(757),o=n(5707),i="layout-module--nav-link-item--fbd31",c=n(4184),u=n.n(c);const s="steebe - ",d={HOME:s+"HOME",PHOTOS:s+"PHOTOS",TOOLS:s+"TOOLS",BLOG:s+"BLOG",ABOUT:s+"ABOUT"};let f=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(s,""),this.linkPath="/",t){case d.HOME:this.linkPath="/";break;case d.PHOTOS:this.linkPath="/photos";break;case d.TOOLS:this.linkPath="/tools";break;case d.BLOG:this.linkPath="/writings";break;case d.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var m=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,c=null==n?void 0:n.includes("photos"),s=null==n?void 0:n.includes("tool"),m=null==n?void 0:n.includes("about"),p=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),h=[new f("/"===n||!s&&!m&&!p&&!c,d.HOME),new f(s,d.TOOLS),new f(p,d.BLOG),new f(m,d.ABOUT)];return r.createElement("div",{className:"layout-module--container--4f29e"},r.createElement("title",null,h.filter((e=>e.current)).map((e=>e.title))),r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--a181c"},h.map((e=>r.createElement("li",{key:e.title,className:i},r.createElement(l.rU,{to:e.linkPath,className:u()(e.classNames)},e.linkLabel)))))),r.createElement("main",null,t),r.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},r.createElement("div",{className:"layout-module--resume--53a60"},r.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),r.createElement(a.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${i}`,rel:"noreferrer"},"GITHUB"),r.createElement(a.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return l},cP:function(){return a},hr:function(){return r}});var r="globals-module--centered-text--f1021",l="globals-module--nav-link-current-item--312f0",a="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return a},hT:function(){return r},v_:function(){return l}});var r="writings-module--date--4bb92",l="writings-module--post--fa2ad",a="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return a}});var r=n(7294);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-java-codestyle-mdx-9bba893c3a07529ea43a.js.map