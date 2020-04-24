(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),r=a.n(o),i=a("NmYn"),l=a.n(i),s=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+f.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===n,i=new RegExp(n+"(?!-)"),s=a.replace(i,o);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(d.b)(j.Link,{className:v.link,to:""+s},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},o))))))},n}(r.a.Component),k=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,m=b.tabs,f=b.title,j=b.theme,v=b.description,y=b.keywords,P=n.data.site.pathPrefix,C=P?o.pathname.replace(P,""):o.pathname,N=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:j,pageTitle:f,pageDescription:v,pageKeywords:y,titleType:u},Object(d.b)(h,{title:r?Object(d.b)(r,null):f,label:"label",tabs:m}),m&&Object(d.b)(w,{slug:C,tabs:m,currentTab:N}),Object(d.b)(k.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:o,slug:C,tabs:m,currentTab:N}),Object(d.b)(s.a,null))}},X5xc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(s,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Multiple Cloud Pak Installation"),Object(n.b)("p",null,"This section describes the findings of a group, participating in a residency\nproject in January 2020, to install more than one IBM Cloud Pak in the same\ncluster. During the limited time duration of the residency, the group\nwas able to test two combinations, as follows:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4i-cp4a/"}),"Installing Cloud Pak for Integration first Cloud Pak for\nApplications second")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",r({parentName:"li"},{href:"../cp4a-cp4i/"}),"Installing Cloud Pak for Applications first Cloud Pak for\nIntegration second"))),Object(n.b)("p",null,"Each chapter in this section links to the steps to install each of the\nrespective Cloud Paks in the test. Generally, there is no change to the\nstandard Cloud Pak installation instructions for these multiple Cloud Pak\nscenarios."),Object(n.b)("p",null,"However, there are some configuration steps recommended to avoid potential\nconflicts where both Cloud Paks include the same component.\nEach chapter describes those special steps to take, based on the group’s\nexperience, to avoid problems. It is important to note that these\ndescriptions reflect the state of the Cloud Paks in January 2020. In all\ncases, it is recommended to follow the official product Documentation\nin the ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter"}),"Knowledge Center")," as\nyour authoritive source of knowledge."),Object(n.b)("p",null,"The links below direct you to the other sections of this Playbook\ndescribing the\ninstallation and configuration of the IBM Cloud Paks tested in\nthis project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../apps/cp4a_overview"}),"IBM Cloud Pak™ for Applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../integration/introduction"}),"IBM Cloud Pak™ for Integration"))),Object(n.b)("h2",null,"Official IBM Cloud Paks Documentation"),Object(n.b)("p",null,"Always consult the IBM product documentation as your first source of knowledge\nfor installing IBM Cloud Paks. In the Knowledge Center, you can select\nthe most current version of the Cloud Pak you are working on."),Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter"},"IBM Knowledge Center"))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-multipak-multipak-overview-index-mdx-d0c9ef86574d74f190ac.js.map