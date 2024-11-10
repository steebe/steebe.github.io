/*! For license information please see component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-redshift-notes-mdx-7cb08ca64562d393583f.js.LICENSE.txt */
(self.webpackChunksteebe_dev=self.webpackChunksteebe_dev||[]).push([[304],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},757:function(e,t,n){"use strict";var r=n(4836);t.M=void 0;var l=r(n(434)),a=r(n(7071)),o=r(n(7294)),s=r(n(5697)),c=["children"],i=o.default.forwardRef((function(e,t){var n=e.children,r=(0,a.default)(e,c);return o.default.createElement("a",(0,l.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),n)}));t.M=i,i.propTypes={href:s.default.string,target:s.default.string,onClick:s.default.func}},7352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1151),l=n(7294);function a(e){const t=Object.assign({p:"p",a:"a",hr:"hr",h2:"h2",h3:"h3",code:"code",strong:"strong",pre:"pre",em:"em",h4:"h4"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Below are helpful commands I don't want to forget for Redshift admin and use. Those interested in a small torching\nof Redshift as a product are welcome to read the ",l.createElement(t.a,{href:"./redshift-opinion"},"sibling post"),"."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,null,"Querying"),"\n",l.createElement(t.h3,null,'A Distinct "',l.createElement(t.code,null,"DISTINCT"),'"'),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"PostgreSQL")," users might be familiar with the ability to use ",l.createElement(t.code,null,"DISTINCT")," as an expression evaluator, rather\nthan a clause, to reduce the result set down to records that only include the value evaluated by the\nexpression."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"MySQL")," users might be used to leveraging ",l.createElement(t.code,null,"GROUP BY")," in a different way than normal\nto do the same."),"\n",l.createElement(t.p,null,"I.E: if I have a table, ",l.createElement(t.code,null,"orders"),":"),"\n",l.createElement("table",{border:1,frame:"outside"},l.createElement("tr",null,l.createElement("th",null,"id"),l.createElement("th",null,"customerId")),l.createElement("tr",null,l.createElement("td",null,"1"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"2"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"3"),l.createElement("td",null,"1"))),"\n",l.createElement(t.p,null,"Our first customer was keeping the lights on, and proved that the ",l.createElement(t.code,null,"orders")," table has a many:one\nrelationship with the ",l.createElement(t.code,null,"customers")," table."),"\n",l.createElement(t.p,null,"Suppose we need to pull the latest order for each customer, in a world where there is not just\na sole customer placing orders. Additionally, the context of the report involves many other fields are being\naggregated across dozens of other tables. ",l.createElement(t.code,null,"LIMIT 1")," is not coming to the rescue."),"\n",l.createElement(t.p,null,"Postgres allows for:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"SELECT\n    DISTINCT ON(customerId) customerId,\n    id\nFROM orders\nORDER BY customerId, id DESC;\n")),"\n",l.createElement(t.p,null,"Okay, cool. Weird, but cool. The developer specifies they ",l.createElement(t.em,null,"only")," want unique ",l.createElement(t.code,null,"customerId")," values\nin their results, but want the respective order information along with it. Postgres constructs\ngroups based on the argument provided to ",l.createElement(t.code,null,"DISTINCT ON"),", then omits any records that break the unique\nvalue specified. The ",l.createElement(t.code,null,"ORDER BY")," gives the developer control over precedence on which distinct records\nto honor."),"\n",l.createElement(t.p,null,"MySQL perhaps helps visualize this better, literally making the developer create the groups themselves:\n",l.createElement(t.code,null,"ORDER BY"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"WITH disctinct_customer_id_orders AS (\n    SELECT\n        id\n    FROM orders\n    GROUP BY customerId\n)\nSELECT * FROM distinct_customer_id_orders ORDER BY id DESC;\n")),"\n",l.createElement(t.p,null,"It's still not perfect, either, because the ",l.createElement(t.code,null,"ORDER BY")," should happen in the first query, but hey, MySQL tries."),"\n",l.createElement(t.h4,null,"Redshift does neither..."),"\n",l.createElement(t.p,null,"...yet I don't hate how Redshift achieves the same outcome, strictly from the developer\nexperience side of things:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"SELECT\n    *\nFROM (\n    SELECT\n        id,\n        customerId,\n        RANK() OVER (PARTITION BY customerId ORDER BY id DESC) AS customer_id_rank\n    FROM orders\n) as ranked_orders\nWHERE ranked_orders.customer_id_rank = 1;\n")),"\n",l.createElement(t.p,null,"Where Redshift could have continued reinventing an already finished, rehashed,\nre-spoked wheel of relational-algebra powered query engines, it instead took the modest route."),"\n",l.createElement(t.p,null,"The developer is welcome to rewrite ",l.createElement(t.code,null,"GROUP BY")," on Amazon's behalf. Also, the developer gets a bonus\ncolumn in their toolkit to play with. It's okay that the result set grew though, because it's powered\nby a warehouse meant for Big Data!"),"\n",l.createElement(t.h2,null,"Administering"),"\n",l.createElement(t.h3,null,"Groups & Users"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"-- Create groups\nCREATE GROUP MY_GROUP [WITH USER (user1, user2,...)];\n\n-- View all user groups (as cluster admin)\nSELECT * from PG_GROUP;\n\n-- View all users in a group\nSELECT usename FROM pg_user, pg_group\nWHERE pg_user.usesysid = ANY(pg_group.grolist)\n  AND pg_group.groname = '<group-name>';\n\n-- Apply to entire schema\nGRANT ALL ON SCHEMA my_schema TO GROUP my_group;\n\n-- Apply to specific tables\nGRANT SELECT ON TABLE my_table TO my_user;\n\n-- Apply read-only access to specific (or all) tables in a single schema\nGRANT SELECT ON ALL TABLES IN SCHEMA my_schema TO my_user;\n\n-- Create user\nCREATE USER my_user PASSWORD '<pass-string>';\n\n-- Create user under specific group\nCREATE USER my_user IN GROUP my_group PASSWORD 'pass';\n\n-- Alter existing user\nALTER USER my_user PASSWORD 'new-pass';\n")),"\n",l.createElement(t.h3,null,"Cluster Metadata"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"-- View tables within a Schema\nselect distinct tablename from pg_table_def where schemaname = '<schema-name>';\n\n-- View all schemas in a cluster\nselect * from pg_namespace;\n\n-- View connection activity within a cluster\nselect * from stl_connection_log\nwhere recordtime > '2021-02-07 00:00:00' and username in ('user1', 'user2')\norder by recordtime DESC;\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},s=n(8351),c=n(6653);const i=e=>{let{data:t,children:n}=e;return l.createElement(s.Z,null,l.createElement("p",{className:c.hT},l.createElement("i",null,t.mdx.frontmatter.date),l.createElement("br",null),t.mdx.frontmatter.updated&&l.createElement("i",null,"(Updated on ",t.mdx.frontmatter.updated,")")),l.createElement("div",{className:c.v_},n))};function u(e){return l.createElement(i,e,l.createElement(o,e))}},8351:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),l=n(4160),a=n(757),o=n(5707),s="layout-module--nav-link-item--fbd31",c=n(4184),i=n.n(c);const u="steebe - ",d={HOME:u+"HOME",PHOTOS:u+"PHOTOS",TOOLS:u+"TOOLS",BLOG:u+"BLOG",ABOUT:u+"ABOUT"};let m=function(e,t){switch(this.current=e,this.title=t,this.linkLabel=t.replace(u,""),this.linkPath="/",t){case d.HOME:this.linkPath="/";break;case d.PHOTOS:this.linkPath="/photos";break;case d.TOOLS:this.linkPath="/tools";break;case d.BLOG:this.linkPath="/writings";break;case d.ABOUT:this.linkPath="/about"}this.classNames=[o.cP,e?o.H_:null]};var h=e=>{let{children:t}=e;const n="undefined"!=typeof window?window.location.pathname:void 0,c=null==n?void 0:n.includes("photos"),u=null==n?void 0:n.includes("tool"),h=null==n?void 0:n.includes("about"),p=(null==n?void 0:n.endsWith("writings"))||(null==n?void 0:n.endsWith("writings/"))||(null==n?void 0:n.includes("writings")),E=[new m("/"===n||!u&&!h&&!p&&!c,d.HOME),new m(u,d.TOOLS),new m(p,d.BLOG),new m(h,d.ABOUT)];return r.createElement("div",{className:"layout-module--container--4f29e"},r.createElement("title",null,E.filter((e=>e.current)).map((e=>e.title))),r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--a181c"},E.map((e=>r.createElement("li",{key:e.title,className:s},r.createElement(l.rU,{to:e.linkPath,className:i()(e.classNames)},e.linkLabel)))))),r.createElement("main",null,t),r.createElement("footer",{className:`${o.hr} layout-module--footer--f8364`},r.createElement("div",{className:"layout-module--resume--53a60"},r.createElement("a",{href:"./steve_bass_resume.pdf",className:o.cP,target:"_blank"},"RESUME")),r.createElement(a.M,{href:"https://www.github.com/steebe",target:"_blank",className:`${o.cP} ${s}`,rel:"noreferrer"},"GITHUB"),r.createElement(a.M,{href:"https://www.linkedin.com/in/steebe",target:"_blank",className:o.cP,rel:"noreferrer"},"LINKEDIN")))}},5707:function(e,t,n){"use strict";n.d(t,{Gn:function(){return o},H_:function(){return l},cP:function(){return a},hr:function(){return r}});var r="globals-module--centered-text--f1021",l="globals-module--nav-link-current-item--312f0",a="globals-module--nav-link-text--78591",o="globals-module--site-image--59f09"},6653:function(e,t,n){"use strict";n.d(t,{YT:function(){return a},hT:function(){return r},v_:function(){return l}});var r="writings-module--date--4bb92",l="writings-module--post--fa2ad",a="writings-module--preview-container--33267"},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return a}});var r=n(7294);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-writings-mdx-fields-slug-tsx-content-file-path-blog-redshift-notes-mdx-7cb08ca64562d393583f.js.map