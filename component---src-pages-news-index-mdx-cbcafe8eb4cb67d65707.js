(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"013z":function(t,e,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),n=a("q1tI"),b=a.n(n),o=a("NmYn"),c=a.n(o),l=a("OKom"),i=a("k4MR"),p=a("TSYQ"),s=a.n(p),d=a("QH2O"),m=a("qKvR"),u=function(t){var e,a=t.title,r=t.tabs,n=void 0===r?[]:r;return Object(m.b)("div",{className:s()(d.pageHeader,(e={},e[d.withTabs]=n.length,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},O=a("pEPl"),j=a("BAC9"),f=function(t){var e=t.relativePagePath,a=t.repository,r=O.data.site.siteMetadata.repository,n=a||r,b=n.baseUrl,o=n.subDirectory,c=b+"/edit/"+n.branch+o+"/src/pages"+e;return b?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),h=a("I8xM");var v=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=e.map((function(t){var e,n=c()(t,{lower:!0}),b=n===r,o=new RegExp(r+"(?!-)"),l=a.replace(o,n);return Object(m.b)("li",{key:t,className:s()((e={},e[h.selectedItem]=b,e),h.listItem)},Object(m.b)(N.Link,{className:h.link,to:""+l},t))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:h.list},n))))))},r}(b.a.Component),y=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,b=t.Title,o=e.frontmatter,p=void 0===o?{}:o,s=e.relativePagePath,d=e.titleType,O=p.tabs,j=p.title,N=p.theme,h=p.description,w=p.keywords,x=r.data.site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,P=O?k.split("/").filter(Boolean).slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(m.b)(i.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:h,pageKeywords:w,titleType:d},Object(m.b)(u,{title:b?Object(m.b)(b,null):j,label:"label",tabs:O}),O&&Object(m.b)(v,{slug:k,tabs:O,currentTab:P}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:s})),Object(m.b)(g.a,{pageContext:e,location:n,slug:k,tabs:O,currentTab:P}),Object(m.b)(l.a,null))}},pEPl:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(t){t.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},tpJo:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return i}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}var o={},c={_frontmatter:o},l=n.a;function i(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,["components"]);return Object(r.b)(l,b({},c,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The latest updates to the IBM Cloud Pak\nPlaybook are below."),Object(r.b)("img",{src:"/assets/playbook/Newspaper.jpg",alt:null}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Latest Updates"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Date "," "," "," "))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Updated ",Object(r.b)("a",b({parentName:"td"},{href:"https://ocp42.cloudpak8s.io/apps/cp4a_overview/"}),"Cloud Pak for Applications")," section to version 4.1"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-04-21")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Updated ",Object(r.b)("a",b({parentName:"td"},{href:"https://ocp42.cloudpak8s.io/integration/cp4i-introduction/"}),"Cloud Pak for Integration")," section to version 2020.1.1"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-04-20")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Added troubleshooting to ",Object(r.b)("a",b({parentName:"td"},{href:"https://ocp42.cloudpak8s.io/ocp/openshift4_aws/"}),"Installing OpenShift on AWS")),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-04-09")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"More detail to ",Object(r.b)("a",b({parentName:"td"},{href:"https://ocp42.cloudpak8s.io/contribute/"}),"Contribution Guide")),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-04-03")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Added ",Object(r.b)("a",b({parentName:"td"},{href:"../mcm/edge/"}),"IBM Edge Computing Manager Installation")),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-04-02")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Updated ",Object(r.b)("a",b({parentName:"td"},{href:"../mcm/cp4mcm_mcm_install/"}),"CP for Multicloud MCM Installation")," to version 1.3"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-03-30")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Updated ",Object(r.b)("a",b({parentName:"td"},{href:"../security/introduction/"}),"CP for Security")," to version 1.2"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2020-03-30")))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-index-mdx-cbcafe8eb4cb67d65707.js.map