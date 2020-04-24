(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),r=a.n(o),i=a("NmYn"),l=a.n(i),s=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===n,i=new RegExp(n+"(?!-)"),s=a.replace(i,o);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(u.b)(N.Link,{className:f.link,to:""+s},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},o))))))},n}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,h=b.tabs,O=b.title,N=b.theme,f=b.description,w=b.keywords,C=n.data.site.pathPrefix,k=C?o.pathname.replace(C,""):o.pathname,x=h?k.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:m},Object(u.b)(d,{title:r?Object(u.b)(r,null):O,label:"label",tabs:h}),h&&Object(u.b)(y,{slug:k,tabs:h,currentTab:x}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:o,slug:k,tabs:h,currentTab:x}),Object(u.b)(s.a,null))}},Uk5B:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(s,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#begin-installation"}),"Begin Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#validate-installation"}),"Validate installation"))),Object(n.b)("h3",null,"Introduction"),Object(n.b)("p",null,"This page contains guidance on how to configure the Asset Repository\nrelease for both on-prem and IBM Cloud."),Object(n.b)("h3",null,"Prepare Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You have a few choices on where you can deploy the Asset Repository.\nYou can either deploy it to the ",Object(n.b)("inlineCode",{parentName:"li"},"integration")," namespace or wherever your\nplatform navigator is installed, or in some cases (like IBM Cloud) where a\nseparate namespace will be created for the asset repository."),Object(n.b)("li",{parentName:"ol"},"The Asset Repository Requires the use of persistent storage, like\ngluster-fs and/or ceph.  Note that there are some parts of the Asset Repo\nthat work better with block storage (like Cloudant).  These will be called\nout in the installation instructions below."),Object(n.b)("li",{parentName:"ol"},"To use the remote syncing capability into github, a publically facing\ngithub account is required.  More info on this can be found\n",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/asset_repo.html"}),"here"),"."),Object(n.b)("li",{parentName:"ol"},"Note that the default replica set size for the install for all of the\nasset repo components is 3.  For POC/Dev type systems, you can scale these\nback to one replica to save resources.  However note this is ",Object(n.b)("em",{parentName:"li"},"NOT"),"\nrecommended for production systems."),Object(n.b)("li",{parentName:"ol"},"You might need to add permissions for your namespace, depending on\nwhere you are installing the asset repository.  Use the following commands\nand replace the last ","<","namespace",">"," argument with your targeted\nnamespace.  If you are installing this into the same namespace where the\nplatform navigator is located, use that namespace (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"integration"),").")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:&lt;namespace&gt;\noc adm policy add-scc-to-group anyuid system:serviceaccounts:&lt;namespace&gt;\n")),Object(n.b)("h3",null,"Begin Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"li"},"Create Instance")," inside\nthe ",Object(n.b)("strong",{parentName:"li"},"Asset Repo")," tile."),Object(n.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(n.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Configure")),Object(n.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"li"},"asset-repo")),Object(n.b)("li",{parentName:"ol"},"Enter Target Namespace.  As indicated above, this can be in\nthe ",Object(n.b)("inlineCode",{parentName:"li"},"integration")," namespace or another namespace setup for you."),Object(n.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(n.b)("li",{parentName:"ol"},"Tick the license agreement box."),Object(n.b)("li",{parentName:"ol"},"Under Parameters -> Quick start\na. Hostname of the ingress proxy to be configured - This will be your\nproxy node for your install."),Object(n.b)("li",{parentName:"ol"},"Click All Parameters twisty"),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret -> Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\nace namespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for your\nenvironment."),Object(n.b)("li",{parentName:"ol"},"Untick the ",Object(n.b)("inlineCode",{parentName:"li"},"Production usage")," checkbox."),Object(n.b)("li",{parentName:"ol"},"Double check that the ",Object(n.b)("inlineCode",{parentName:"li"},"Platform Navigator Namespace")," is set properly\nfor your environment."),Object(n.b)("li",{parentName:"ol"},"For ",Object(n.b)("inlineCode",{parentName:"li"},"Cloudant metadata store storage class")," set that value to your\nblock storageclass.  Non-block will work fine here too, but block will\ndefinitely be faster."),Object(n.b)("li",{parentName:"ol"},"As you go through the chart, you can scale down the replicas\nfor ",Object(n.b)("inlineCode",{parentName:"li"},"Cloudant"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Catalog API"),", ",Object(n.b)("inlineCode",{parentName:"li"},"DC main"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Portal Catalog"),",\n",Object(n.b)("inlineCode",{parentName:"li"},"Asset Storage"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Portal Common")," and ",Object(n.b)("inlineCode",{parentName:"li"},"Catalog Remotes")," from 3 to 1."),Object(n.b)("li",{parentName:"ol"},"Be sure to also set the ",Object(n.b)("inlineCode",{parentName:"li"},"Asset storage Storage Class")," and\n",Object(n.b)("inlineCode",{parentName:"li"},"Catalog remotes Storage Class")," to your non-block storage."),Object(n.b)("li",{parentName:"ol"},"Scroll down and then Click ",Object(n.b)("strong",{parentName:"li"},"Install")," to fire off the chart\ninstallation")),Object(n.b)("h3",null,"Validate installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Here is a representation of all pods running\n",Object(n.b)("img",r({parentName:"li"},{src:"/assets/img/integration/deploy-asset-repo/16.asset-repo-pods.png",alt:null})))))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-asset-repo-index-mdx-60cf24f87621e01e5278.js.map