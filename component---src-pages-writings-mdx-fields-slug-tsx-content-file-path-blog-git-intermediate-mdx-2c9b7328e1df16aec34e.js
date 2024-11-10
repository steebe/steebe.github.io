/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-git-intermediate-mdx-2c9b7328e1df16aec34e.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[157],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var r=n(4836);t.M=void 0;var a=r(n(434)),i=r(n(7071)),o=r(n(7294)),l=r(n(5697)),s=["children"],c=o.default.forwardRef((function(e,t){var n=e.children,r=(0,i.default)(e,s);return o.default.createElement("a",(0,a.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),n)}));t.M=c,c.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}},6385:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1151),a=n(7294);function i(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",em:"em",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"The Deck Itself"),"\n",a.createElement(t.h2,null,a.createElement(t.a,{href:"https://steebe.github.io/git-intermediate-deck/#/"},"git-intermediate")),"\n",a.createElement(t.h1,null,"Teaching Git"),"\n",a.createElement(t.p,null,"While working for a large company whose technological aspirations were dwarfed by its six-tiered leadership's inability to understand technology, I found myself in a position that should have annoyed any developer."),"\n",a.createElement(t.p,null,"Teaching is luckily something I ",a.createElement(t.em,null,"found")," enjoyable at one point in my life; I was fortunate enough to have the means and opportunity to be a teaching assistant (TA) and student assistant (SA) at my alma mater, ",a.createElement(t.a,{href:"http://www.buffalo.edu/"},"The University at Buffalo"),". My duties as a TA taught me patience, discipline, and understanding. I didn't anticipate I'd have to tap into those attributes so heavily in an industry setting day-to-day, but nevertheless I found myself having to harness them simply to channel some empathy for a group of developers who had no knowledge (or interest for that matter) in proper version control & repository hygiene."),"\n",a.createElement(t.p,null,"If I had to take a stab in the dark, I would guess that of every five developers I've had the opportunity to chat with, two have experienced working with the kinds of colleagues I'm describing. Perhaps you know of them too, the developers that..."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Email zip files of the latest state of their local repository to the entire team"),"\n",a.createElement(t.li,null,"Push directly to master, or a protected branch, without review"),"\n",a.createElement(t.li,null,"Never establish a protected branch"),"\n",a.createElement(t.li,null,"Perform merges of a single branch that contains over 100 new commits"),"\n",a.createElement(t.li,null,"Introduce sensitive credentials or other secrets to the remote repository, and then simply delete the repository weeks later after realizing the mistake\n** ...two to three times a quarter"),"\n"),"\n",a.createElement(t.p,null,"After a few weeks of slowly losing my sanity while watching these examples unfold in repositories I was meant to contribute to, I felt that I didn't need to come to grips with this reality. Instead, I approached my management with a simple, yet stern request for new repositories that I would own. I locked down master, published README.md files with strict development requirements (checkstyles for Java, husky TS Lint checks for JS projects, code coverage requirements, the whole nine...), and wrote & conducted the presentation found below. I even came up with an ",a.createElement(t.a,{href:"https://github.com/steebe/git-intermediate-practice"},"example repository")," with pre-configured branches that would allow those who cloned it to test all of the commands I introduce in the presentation."),"\n",a.createElement(t.p,null,"I set up a webhook on the example repository's remote clone operatiton to notify me when individuals cloned it for practice. Not a single hit."),"\n",a.createElement(t.p,null,"Emails continued pouring into my inbox containing zipped up repositories in a dirty state with changes."),"\n",a.createElement(t.p,null,'"Architects" continued bastardizing their "protected" branches.'),"\n",a.createElement(t.p,null,"I didn't lose my sanity, though, and I didn't give in to malpractice. If you find yourself in a frustrating situation that requires a bit of back-pedalling, please feel free to steal this in an effort to preserve even more sanity."),"\n",a.createElement(t.h2,null,a.createElement(t.a,{href:"https://steebe.github.io/git-intermediate-deck/#/"},"git-intermediate")),"\n",a.createElement(t.h3,null,"Made with ",a.createElement(t.a,{href:"https://revealjs.com"},"reveal.js")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},l=n(8351),s=n(6653);const c=e=>{let{data:t,children:n}=e;return a.createElement(l.Z,null,a.createElement("p",{className:s.hT},a.createElement("i",null,t.mdx.frontmatter.date),a.createElement("br",null),t.mdx.frontmatter.updated&&a.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),a.createElement("div",{className:s.v_},n))};function u(e){return a.createElement(c,e,a.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(4160),i=n(757),o=n(5707),l="layout-module--nav-link-item--fbd31",s=n(4184),c=n.n(s);const u="steebe - ",h={HOME:u+"HOME",PHOTOS:u+"PHOTOS",TOOLS:u+"TOOLS",BLOG:u+"BLOG",ABOUT:u+"ABOUT"};let d=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(u,""),this.linkPath="/",t){case h.HOME:this.linkPath="/";break;case h.PHOTOS:this.linkPath="/photos";break;case h.TOOLS:this.linkPath="/tools";break;case h.BLOG:this.linkPath="/writings";break;case h.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var m=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,s=null==n?void 0:n.includes("photos"),u=null==n?void 0:n.includes("tool"),m=null==n?void 0:n.includes("about"),f=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),p=[new d("/"===n||!u&&!m&&!f&&!s,h.HOME),new d(u,h.TOOLS),new d(f,h.BLOG),new d(m,h.ABOUT)];return r.createElement("div",{className:"layout-module--container--4f29e"},r.createElement("title",null,p.filter((e=>e.current)).map((e=>e.title))),r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--a181c"},p.map((e=>r.createElement("li",{key:e.title,className:l},r.createElement(a.rU,{to:e.linkPath,className:c()(e.classNames)},e.linkLabel)))))),r.createElement("main",null,t),r.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},r.createElement("div",{className:"layout-module--resume--53a60"},r.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),r.createElement(i.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${l}`,rel:"noreferrer"},"GITHUB"),r.createElement(i.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return a},cP:function(){return i},hr:function(){return r}});var r="globals-module--centered-text--f1021",a="globals-module--nav-link-current-item--312f0",i="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return i},hT:function(){return r},v_:function(){return a}});var r="writings-module--date--4bb92",a="writings-module--post--fa2ad",i="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return i}});var r=n(7294);const a=r.createContext({});function i(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-git-intermediate-mdx-2c9b7328e1df16aec34e.js.map