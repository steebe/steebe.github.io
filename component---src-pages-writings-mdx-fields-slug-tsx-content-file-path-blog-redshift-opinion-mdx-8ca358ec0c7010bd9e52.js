/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-redshift-opinion-mdx-8ca358ec0c7010bd9e52.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[313],{4184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)l.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var l=n(4836);t.M=void 0;var a=l(n(434)),r=l(n(7071)),o=l(n(7294)),i=l(n(5697)),s=["children"],c=o.default.forwardRef((function(e,t){var n=e.children,l=(0,r.default)(e,s);return o.default.createElement("a",(0,a.default)({ref:t},l,{onClick:function(e){"function"==typeof l.onClick&&l.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),l.target&&"_self"!==l.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:l.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=l.href)}}):t&&(document.location=l.href),!1}}),n)}));t.M=c,c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},9133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",em:"em",strong:"strong",ol:"ol"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Redshift: Body Hiding as a Service"),"\n",a.createElement(t.p,null,"When I started writing this post, it was to be a single, helpful guide for myself. Before long, it turned into a pretty\ngnarly rant about Redshift as a product, rather than a truly marvelous technical solution. The helpful guide still does\nexist, for what it's worth. Check it out as a ",a.createElement(t.a,{href:"./redshift-notes"},"sibling post"),"."),"\n",a.createElement(t.p,null,'In full disclosure: I do work with an organization that has adopted Redshift as an internal tool for various reporting\npurposes, as of mid-to-late 2021. In hindsight, the decision to bring it in as a tool likely had little to do with\nits prowess and capabilities, and more to do with certain personnel confusing the term "growth" for "infinite amounts of\ncash to blow".'),"\n",a.createElement(t.p,null,"We leveraged I/O as follows:"),"\n",a.createElement("table",{className:"three-column",border:1,frame:"void",rules:"rows"},a.createElement("tr",null,a.createElement("th",null,"Frequency"),a.createElement("th",null,"Operation"),a.createElement("th",null,"Mechanism")),a.createElement("tr",null,a.createElement("td",null,"Once"),a.createElement("td",null,a.createElement("b",null,"WRITE")," all tables from external, primary datasource(s)"),a.createElement("td",null,"AWS DMS + Vendor integration")),a.createElement("tr",null,a.createElement("td",null,"Ad-hoc"),a.createElement("td",null,a.createElement("b",null,"WRITE")," custom views to cache aggregate data used solely for reporting purposes"),a.createElement("td",null,"AWS Redshift Console + DBMS Tools")),a.createElement("tr",null,a.createElement("td",null,"Ad-hoc"),a.createElement("td",null,a.createElement("b",null,"WRITE")," DDL changes that have occurred on the primary datasource(s)"),a.createElement("td",null,"AWS DMS")),a.createElement("tr",null,a.createElement("td",null,"Ad-hoc"),a.createElement("td",null,a.createElement("b",null,"READ")," from various tables and views"),a.createElement("td",null,"DBMS Tools + other query tools")),a.createElement("tr",null,a.createElement("td",null,"Regularly"),a.createElement("td",null,a.createElement("b",null,"READ")," from various tables and views"),a.createElement("td",null,"Scheduled, and systemic processes"))),"\n",a.createElement(t.p,null,"Those ",a.createElement(t.code,null,"WRITE")," operations are inevitable, regardless of the destination data source, sure. But they specifically require\ngoing through AWS managed toolchains, either S3 for a ",a.createElement(t.code,null,"COPY")," or via AWS Database Migration Service for table mapping\nor other ETL jobs."),"\n",a.createElement(t.p,null,"Allow me to pause my uppity browbeating for a moment. I personally find the tooling behind Redshift to be badass. It:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"is run on its own custom flavor of SQL"),"\n",a.createElement(t.li,null,'can [allegedly] act as a decent "big-data" solution, offering scaling up to PB of data quickly'),"\n",a.createElement(t.li,null,"comes with training wheels:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"a phenomenal documentation layer"),"\n",a.createElement(t.li,null,"a web-based query console"),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"Being badass never lets one off the hook, though. I'm sure you could ask Bezos."),"\n",a.createElement(t.h2,null,"PaaS vs. DBaaS"),"\n",a.createElement(t.p,null,"Look at those ",a.createElement(t.code,null,"WRITE"),"s again. None of them are from an SDK. None of them are from a code base.\nIn fact, it seems that (obligatory: ",a.createElement(t.em,null,"at the time of writing this"),") Redshift really still doesn't cater to\ndevelopment teams as a primary data source for server applications."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Its SDKs cater to managing Redshift clusters and its assets, rather than invoking queries"),"\n",a.createElement(t.li,null,"The official Data API documentation includes instructions on how to map result sets by hand to JDBC objects"),"\n",a.createElement(t.li,null,"There is no official supported ORM for Redshift"),"\n",a.createElement(t.li,null,"The client-side SDK seems to be exactly what it would have taken to construct the Amazon internal cluster management\nUI within the AWS management console"),"\n"),"\n",a.createElement(t.p,null,"I'm not trying to build a case that Redshift was at all designed for the purpose of acting as a server application's\nprimary datasource. It's important to acknowledge that it's a profoundly accessible data storage solution with seemingly\ngreat potential for scale, and capability of catering to various use-cases. Oh, also, by accessible I mean, \"widely\nadoptable for those with a credit card burning a hole in their pocket.\""),"\n",a.createElement(t.p,null,"However, I think it seems obvious as to ",a.createElement(t.em,null,"why")," this purpose was not its goal in the first place. In fact, recalling the\nI/O operations I expressed above, it's truly no mystery as to why there are no official Amazon-led connectors/SDKs/ORM\nlibraries that bind any particular language to Redshift capabilities:"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,a.createElement(t.em,null,"If the programmatic capabilities a developer has with a platform are to create and manage new infrastructure, then\nthe platform remains a platform to be managed, rather than a tool to be leveraged."))),"\n",a.createElement(t.p,null,"It might be in Amazon's best interest, strictly from a margins and maintenance cost perspective, that Redshift remain a\npure PaaS product. Unfortunately, when developers (and not data scientists) are the ones responsible for the operations\ninvolving Redshift I/O, it becomes painfully clear that it's simply a SQL database with a bunch of added cost."),"\n",a.createElement(t.h2,null,"DBaaS..."),"\n",a.createElement(t.p,null,"Amazon's own Relational Database Service (RDS) contrasts with Redshift in ways that really helped me arrive to my\nconclusion."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"RDS virtual instances have smaller downtime on average over Redshift clusters during re-scaling/elastic resizing"),"\n",a.createElement(t.li,null,"RDS is cheaper, on average, per use case (",a.createElement(t.em,null,"at the time of writing"),")","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"An RDS ",a.createElement(t.code,null,"db.t3.large")," (1 core, 2vCPUs, 8GB RAM) is $0.136/hour, vs. the minimal cluster charge of $0.25/hour on Redshift"),"\n"),"\n"),"\n",a.createElement(t.li,null,'Allegedly, Redshift\'s query optimizer, famous for making its "big data" capabilities a reality, make it slower on average\nthan RDS for queries under the several million record count'),"\n"),"\n",a.createElement(t.p,null,"Redshift was marketed well, and perhaps even had the best of intentions to disrupt the market of big data tools. It\ncertainly smells like a big custom SQL database cloud with purposeful dependencies that hike the cost of using it\neffectively. It seems that it is most effectively serving entities who have so much data to play with that dumping it\nin a central place to stream outwards in creative ways. I hope their pockets are deep. So does Amazon, I'm sure."),"\n",a.createElement(t.h2,null,"References"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.aws.amazon.com/redshift/latest/dg/r_WF_RANK.html"},"Redshift Rank")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/1IliGkQIwR0h3EjXoA9VysJm9QIqdBKGN/view?usp=share_link"},"Redshift Data API")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/18UDxpeWf7nJSs01qHaGm0-MW8PMEVTdg/view?usp=share_link"},"Redshift SDK Examples")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/1nG9r9bQvD8NN_m22jpk2J2KoxY6ggKej/view?usp=share_link"},"Redshift Java SDK Overview")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/1ZlVAF3TvrXLSb-V4jGkc89RJCfXmwSVO/view?usp=share_link"},"Redshift Python SDK Overview")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/1LwYngIharMybl_PHUEQzvyvsT3YGP3oa/view?usp=share_link"},"Redshift Client-side SDK")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://drive.google.com/file/d/19cm58920poSyw_Z3QwvmPKG57bvlqhwa/view?usp=share_link"},"RDS vs. Redshift Analysis"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"This is from ",a.createElement(t.a,{href:"https://hevodata.com/"},"Hevo"),', an ETL and "data pipeline" platform. Not necessarily a competitor to, and\nlists Redshift as a source they work with out of the box. Take that as you will...'),"\n"),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(8351),s=n(6653);const c=e=>{let{data:t,children:n}=e;return a.createElement(i.Z,null,a.createElement("p",{className:s.hT},a.createElement("i",null,t.mdx.frontmatter.date),a.createElement("br",null),t.mdx.frontmatter.updated&&a.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),a.createElement("div",{className:s.v_},n))};function u(e){return a.createElement(c,e,a.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var l=n(7294),a=n(4160),r=n(757),o=n(5707),i="layout-module--nav-link-item--fbd31",s=n(4184),c=n.n(s);const u="steebe - ",m={HOME:u+"HOME",PHOTOS:u+"PHOTOS",TOOLS:u+"TOOLS",BLOG:u+"BLOG",ABOUT:u+"ABOUT"};let d=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(u,""),this.linkPath="/",t){case m.HOME:this.linkPath="/";break;case m.PHOTOS:this.linkPath="/photos";break;case m.TOOLS:this.linkPath="/tools";break;case m.BLOG:this.linkPath="/writings";break;case m.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var h=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,s=null==n?void 0:n.includes("photos"),u=null==n?void 0:n.includes("tool"),h=null==n?void 0:n.includes("about"),f=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),p=[new d("/"===n||!u&&!h&&!f&&!s,m.HOME),new d(u,m.TOOLS),new d(f,m.BLOG),new d(h,m.ABOUT)];return l.createElement("div",{className:"layout-module--container--4f29e"},l.createElement("title",null,p.filter((e=>e.current)).map((e=>e.title))),l.createElement("nav",null,l.createElement("ul",{className:"layout-module--nav-links--a181c"},p.map((e=>l.createElement("li",{key:e.title,className:i},l.createElement(a.rU,{to:e.linkPath,className:c()(e.classNames)},e.linkLabel)))))),l.createElement("main",null,t),l.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},l.createElement("div",{className:"layout-module--resume--53a60"},l.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),l.createElement(r.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${i}`,rel:"noreferrer"},"GITHUB"),l.createElement(r.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return a},cP:function(){return r},hr:function(){return l}});var l="globals-module--centered-text--f1021",a="globals-module--nav-link-current-item--312f0",r="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return r},hT:function(){return l},v_:function(){return a}});var l="writings-module--date--4bb92",a="writings-module--post--fa2ad",r="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-redshift-opinion-mdx-8ca358ec0c7010bd9e52.js.map