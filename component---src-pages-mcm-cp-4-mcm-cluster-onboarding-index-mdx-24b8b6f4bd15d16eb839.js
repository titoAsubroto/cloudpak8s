(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var r=n("pOBw"),a=n("q1tI"),o=n.n(a),c=n("NmYn"),i=n.n(c),s=n("OKom"),b=n("k4MR"),l=n("TSYQ"),p=n.n(l),u=n("QH2O"),m=n("qKvR"),d=function(e){var t,n=e.title,r=e.tabs,a=void 0===r?[]:r;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=a.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},n)))))},g=n("pEPl"),O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,r=g.data.site.siteMetadata.repository,a=n||r,o=a.baseUrl,c=a.subDirectory,i=o+"/edit/"+a.branch+c+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},h=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var N=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=i()(e,{lower:!0}),o=a===r,c=new RegExp(r+"(?!-)"),s=n.replace(c,a);return Object(m.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(m.b)(f.Link,{className:v.link,to:""+s},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},a))))))},r}(o.a.Component),y=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,c=t.frontmatter,l=void 0===c?{}:c,p=t.relativePagePath,u=t.titleType,g=l.tabs,O=l.title,f=l.theme,v=l.description,x=l.keywords,w=r.data.site.pathPrefix,k=w?a.pathname.replace(w,""):a.pathname,C=g?k.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:g,homepage:!1,theme:f,pageTitle:O,pageDescription:v,pageKeywords:x,titleType:u},Object(m.b)(d,{title:o?Object(m.b)(o,null):O,label:"label",tabs:g}),g&&Object(m.b)(N,{slug:k,tabs:g,currentTab:C}),Object(m.b)(y.a,{padded:!0},n,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(h.a,{pageContext:t,location:a,slug:k,tabs:g,currentTab:C}),Object(m.b)(s.a,null))}},NTnW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},s=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Onboarding a Kubernetes Cluster"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1.")," To add a new cluster, go to the ",Object(r.b)("strong",{parentName:"p"},"MCM UI"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.")," Using the menu in the top-left corner, navigate to ",Object(r.b)("strong",{parentName:"p"},"Automate Infrastructure")," > ",Object(r.b)("strong",{parentName:"p"},"Clusters")," "),Object(r.b)("img",{src:"/assets/img/cp4mcm/cluster_onboarding_1.png",alt:"Graphic"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.")," Select ",Object(r.b)("strong",{parentName:"p"},"Add Cluster")),Object(r.b)("img",{src:"/assets/img/cp4mcm/cluster_onboarding_2.png",alt:"Graphic"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"4.")," Select ",Object(r.b)("strong",{parentName:"p"},"Import an existing cluster")),Object(r.b)("img",{src:"/assets/img/cp4mcm/cluster_onboarding_4.png",alt:"Graphic"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"5.")," Enter the same name for ",Object(r.b)("inlineCode",{parentName:"p"},"Cluster name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Namespace"),". This restriction is a temporary limitation in the MCM UI."),Object(r.b)("img",{src:"/assets/img/cp4mcm/cluster_onboarding_5.png",alt:"Graphic"}),Object(r.b)("p",null,"Click “Generate Command” button to get the configuration command."),Object(r.b)("img",{src:"/assets/img/cp4mcm/mcm_klusterlet_import_command.png",alt:"Graphic"}),Object(r.b)("p",null,"Go to the managed cluster cli and run the command copied from the above. Your output should look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  6412    0  6412    0     0   2872      0 --:--:--  0:00:02 --:--:--  2872\ncustomresourcedefinition.apiextensions.k8s.io/endpoints.multicloud.ibm.com configured\nnamespace/multicluster-endpoint configured\nsecret/klusterlet-bootstrap configured\nsecret/multicluster-endpoint-operator-pull-secret configured\nserviceaccount/ibm-multicluster-endpoint-operator configured\nclusterrolebinding.rbac.authorization.k8s.io/ibm-multicluster-endpoint-operator configured\ndeployment.apps/ibm-multicluster-endpoint-operator configured\nendpoint.multicloud.ibm.com/endpoint created\n\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note:")," Run the command again if the error below occurs:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'deployment.apps/ibm-multicluster-endpoint-operator created\nerror: unable to recognize "STDIN": no matches for kind "Endpoint" in version "multicloud.ibm.com/v1beta1"\n')))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-cluster-onboarding-index-mdx-24b8b6f4bd15d16eb839.js.map