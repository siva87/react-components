(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{180:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(835),r.memo((function(e){return r.createElement("div",{className:"custom-breadcrumb"+(e.className?" "+e.className:""),id:e.id},r.createElement("nav",{"aria-label":"breadcrumb"},r.createElement("ol",{className:"breadcrumb"},e.list.map((function(t,n){return r.createElement("li",{key:n,className:"breadcrumb-item"+(n===e.list.length-1?" active":""),onClick:function(t){return function(t,n){t!==e.list.length-1&&e.onClick&&e.onClick(t,n)}(n,t)}},t)})))))}))),c=n(444).default,o=n(837),l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},r.createElement("title",null,"regular_black"),r.createElement("path",{d:"M149.1,165h-6V132.3c0-18.8-14.2-34.8-32.5-36.8l-24,15.9a3,3,0,0,1-3.3,0L59.2,95.5C41,97.7,26.9,113.6,26.9,132.3V165h-6V132.3c0-22.5,16.7-40.9,38.8-42.9a3,3,0,0,1,1.9.5L85,105.3l23.2-15.4a3,3,0,0,1,1.9-.5c21.9,1.8,39,20.7,39,42.9Z"}),r.createElement("path",{d:"M85,86.4A31.7,31.7,0,0,1,53.4,54.8V36.6a31.6,31.6,0,1,1,63.3,0V54.8A31.7,31.7,0,0,1,85,86.4Zm0-75.5A25.7,25.7,0,0,0,59.4,36.6V54.8a25.6,25.6,0,0,0,51.3,0V36.6A25.7,25.7,0,0,0,85,10.9Z"})),i=["First","Second","Third"],d=[l,"Details"];t.default=function(){return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(c,{innerHTML:!0},o))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here are sample outputs"),r.createElement("div",{className:"result"},r.createElement(a,{list:i,onClick:function(e){return alert("Should navigate to "+i[e])}})),r.createElement("p",null,"Passing icons as a breadcrumb item"),r.createElement("div",{className:"result"},r.createElement(a,{list:d,onClick:function(e){return alert("Should navigate to "+e)}})))))}},835:function(e,t,n){var r=n(836);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(58)(r,a);r.locals&&(e.exports=r.locals)},836:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".custom-breadcrumb ol.breadcrumb li.breadcrumb-item{font-size:16px}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active){color:#0092e1;cursor:pointer}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active)>svg{fill:#0092e1;width:16px;height:16px}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover{color:#05578c}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover>svg{fill:#05578c}\n",""])},837:function(e,t){e.exports='<hr>\n<p>title: Breadcrumb\ncomponentid: component-breadcrumb\nvariantid: default\nguid: &quot;breadcrumb-guid-default-component-react&quot;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Breadcrumb Component\nComponent: &quot;Breadcrumb&quot;\nSelector: &quot;&lt;Breadcrumb/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Breadcrumb&quot;\nType: UI Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>Breadcrumb</code> and the selector is <code>&lt;Breadcrumb/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Breadcrumb list=&quot;{breadcrumbListObj}&quot; onClick=&quot;{clickHandler}&quot; /&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Element class</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>Element id</td>\n</tr>\n<tr>\n<td>list</td>\n<td>`Array&lt;string</td>\n<td>React.ReactNode&gt;`</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>(i: number, e?: React.MouseEvent&lt;HTMLLIElement&gt;) =&gt; void</code></td>\n<td>Callback triggered when a breadcrumb is clicked</td>\n</tr>\n</tbody></table>\n'}}]);