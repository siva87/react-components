"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[4025],{66663:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.FORMATS=n.FORMAT_PLAIN=n.FORMAT_HTML=void 0;var t="html";n.FORMAT_HTML=t;var a="plain";n.FORMAT_PLAIN=a;var r=[t,a];n.FORMATS=r},63599:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.LINE_ENDINGS=void 0;n.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},43089:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SUPPORTED_PLATFORMS=void 0;n.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},98106:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.WORDS=void 0;n.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},88946:function(e,n,t){n.fH=void 0;var a,r=t(98106),l=(a=t(62321))&&a.__esModule?a:{default:a};n.fH=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.count,t=void 0===n?1:n,a=e.format,o=void 0===a?"plain":a,i=e.paragraphLowerBound,c=void 0===i?3:i,s=e.paragraphUpperBound,u=void 0===s?7:s,d=e.random,f=e.sentenceLowerBound,m=void 0===f?5:f,b=e.sentenceUpperBound,p=void 0===b?15:b,v=e.units,h=void 0===v?"sentences":v,g=e.words,w=void 0===g?r.WORDS:g,S=e.suffix,E=void 0===S?"":S,T={random:d,sentencesPerParagraph:{max:u,min:c},words:w,wordsPerSentence:{max:p,min:m}},R=new l.default(T,o,E);switch(h){case"paragraphs":case"paragraph":return R.generateParagraphs(t);case"sentences":case"sentence":return R.generateSentences(t);case"words":case"word":return R.generateWords(t);default:return""}}},62321:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,r=t(66663),l=t(63599),o=(a=t(61432))&&a.__esModule?a:{default:a},i=t(23093);function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.FORMAT_PLAIN,a=arguments.length>2?arguments[2]:void 0;if(c(this,e),u(this,"generator",void 0),u(this,"format",void 0),u(this,"suffix",void 0),-1===r.FORMATS.indexOf(t.toLowerCase()))throw new Error("".concat(t," is an invalid format. Please use ").concat(r.FORMATS.join(" or "),"."));this.format=t.toLowerCase(),this.suffix=a,this.generator=new o.default(n)}var n,t,a;return n=e,(t=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,i.isReactNative)()&&(0,i.isNode)()&&(0,i.isWindows)()?l.LINE_ENDINGS.WIN32:l.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===r.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var n=this;return e.map((function(e){return n.formatString(e)}))}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var n=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,i.makeArrayOfStrings)(e,n)).join(this.getLineEnding())}}])&&s(n.prototype,t),a&&s(n,a),e}();n.default=d},61432:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(98106),r=t(23093);function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.sentencesPerParagraph,r=void 0===t?{max:7,min:3}:t,o=n.wordsPerSentence,c=void 0===o?{max:15,min:5}:o,s=n.random,u=(n.seed,n.words),d=void 0===u?a.WORDS:u;if(l(this,e),i(this,"sentencesPerParagraph",void 0),i(this,"wordsPerSentence",void 0),i(this,"random",void 0),i(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(c.min>c.max)throw new Error("Minimum number of words per sentence (".concat(c.min,") cannot exceed maximum (").concat(c.max,")."));this.sentencesPerParagraph=r,this.words=d,this.wordsPerSentence=c,this.random=s||Math.random}var n,t,c;return n=e,(t=[{key:"generateRandomInteger",value:function(e,n){return Math.floor(this.random()*(n-e+1)+e)}},{key:"generateRandomWords",value:function(e){var n=this,t=this.wordsPerSentence,a=t.min,l=t.max,o=e||this.generateRandomInteger(a,l);return(0,r.makeArrayOfLength)(o).reduce((function(e,t){return"".concat(n.pluckRandomWord()," ").concat(e)}),"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,r.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var n=this,t=this.sentencesPerParagraph,a=t.min,l=t.max,o=e||this.generateRandomInteger(a,l);return(0,r.makeArrayOfLength)(o).reduce((function(e,t){return"".concat(n.generateRandomSentence()," ").concat(e)}),"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,n=this.generateRandomInteger(0,e);return this.words[n]}}])&&o(n.prototype,t),c&&o(n,c),e}();n.default=c},43249:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e){var n=e.trim();return n.charAt(0).toUpperCase()+n.slice(1)};n.default=t},23093:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"capitalize",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"isNode",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"isReactNative",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"isWindows",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(n,"makeArrayOfLength",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var a=s(t(43249)),r=s(t(26570)),l=s(t(90079)),o=s(t(83292)),i=s(t(16210)),c=s(t(1485));function s(e){return e&&e.__esModule?e:{default:e}}},26570:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){return!!e.exports};n.default=t},90079:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){return"undefined"!=typeof navigator&&"ReactNative"===navigator.product};n.default=t},83292:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(43089),r=function(){return"undefined"!=typeof process&&process.platform===a.SUPPORTED_PLATFORMS.WIN32};n.default=r},16210:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,n){return n}))};n.default=t},1485:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(23093),r=function(e,n){return(0,a.makeArrayOfLength)(e).map((function(){return n()}))};n.default=r},712:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(4769),r=t(27378),l=t(45141),o=t(26563),i=t(57518),c=t(88946);function s(e,n){return function n(t){return void 0===t&&(t=0),function(e){for(var n=[],t=0;t<e;t++)n.push(t);return n}(e[t]).map((function(a){return Object.assign({},(l=Math.floor(30*Math.random()),{firstName:(0,c.fH)({units:"words",count:1}),lastName:(0,c.fH)({units:"words",count:1}),age:l,status:l%2==0?"single":"in relationship"}),{subRows:e[t+1]?n(t+1):void 0,rowContentDetail:r.createElement("p",{className:"details"}," ",(0,c.fH)({units:"sentences",count:2})," ")});var l}))}()}var u=t(75236);function d(e,n){var t;return null===(t=n.checkboxes)||void 0===t?void 0:t.find((function(n){return n===e}))}var f=t(56263),m=t(68131),b=t(50778),p=t(74710),v=t(56770),h=[{label:"First Name",accessor:"firstName"},{label:"Last Name",accessor:"lastName"},{label:"Age",accessor:"age"},{label:"Status",accessor:"status"}],g=function(){var e=r.useState(0),n=e[0],t=e[1],c=r.useState(0),g=c[0],w=c[1],S=r.useState(10),E=S[0],T=S[1],R=r.useState(""),y=R[0],x=R[1],C=r.useState({checked:!1,indeterminate:!1}),N=C[0],k=C[1],O=r.useState([]),P=O[0],j=O[1],M=r.useState([]),_=M[0],A=M[1],H=(0,i.b)([{key:"controls",items:[{label:"Configurable options",key:"checkboxes",controlType:"Option",options:[{label:"Enable Sorting",value:"enableSorting",key:"enableSorting"},{label:"Row Selection",value:"enableRowSelection",key:"enableRowSelection"},{label:"Enable pagination",value:"enablePagination",key:"enablePagination"},{label:"Enable sub rows",value:"enableSubRows",key:"enableSubRows"},{label:"Enable searching",value:"enableSearch",key:"enableSearch"},{label:"Enable filter",value:"enableFilter",key:"enableFilter"},{label:"Enable dark theme",value:"enableDark",key:"enableDark"}]}]}]),D=H[0],I=H[1].controls,L=d("enableSorting",I),F=d("enableRowSelection",I),B=d("enablePagination",I),W=d("enableSubRows",I),q=d("enableSearch",I),K=d("enableFilter",I),U=d("enableDark",I),Z=r.useMemo((function(){return s([B?100:10,5])}),[B]),z=r.useState((0,a.Z)(Z)),V=z[0],X=z[1],G=r.useCallback((function(e){x(e.target.value),X((0,m.IH)(Z,e.target.value,["lastName"]))}),[y]);return r.useEffect((function(){return X((0,m.Dw)(Z,_))}),[_]),r.useEffect((function(){return j([])}),[K]),r.useEffect((function(){return w(Math.floor(Z.length/E))}),[E,Z]),r.useEffect((function(){return X(B?(0,m.V6)(Z,E,n):Z)}),[n,E,Z,B]),r.createElement(l.Z,{mainFile:v,exampleTheme:U?"dark":null,example:r.createElement("div",{className:"w-100"},r.createElement(o.iA,{theme:U?"dark":"light",onSort:L?function(e){return e&&X((0,m.qr)(V,e.accessor,e.sortDirection))}:null,onRowSelect:F?function(e,n){var t=(0,m.cK)(e,V,"firstName",n),a=t.data,r=t.isAllSelected,l=t.isIndeterminate;k({checked:r,indeterminate:l}),X(a)}:null,onRowExpand:W?function(e,n){X(V.map((function(t){return t.firstName===n&&(t.expanded=e),t})))}:null},r.createElement(o.xD,null,r.createElement(o.SC,N,h.map((function(e,n){return r.createElement(o.xs,Object.assign({},e,{key:n}),e.label)})))),r.createElement(o.RM,null,V.map((function(e,n){var t;return r.createElement(r.Fragment,{key:"row-"+n},r.createElement(o.SC,{uniqueKey:e.firstName,checked:e.checked,isExpanded:e.expanded},h.map((function(n,t){return r.createElement(o.pj,Object.assign({},n,{key:t}),e[n.accessor])}))),W&&(null===(t=e.subRows)||void 0===t?void 0:t.map((function(e,n){return r.createElement(o.SC,{isSubRow:!0,key:"rowsub-"+n},h.map((function(t,a){return r.createElement(o.pj,Object.assign({},t,{key:"rowsub-"+n+"-"+a}),e[t.accessor])})))}))))}))),B&&r.createElement("tfoot",null,r.createElement("tr",null,r.createElement("td",{colSpan:4},r.createElement(b.v,{start:1,end:g,value:n,onPageChange:t})))))),code:"<Table>\n    <TableHeader>\n        <TableRow>\n            <TableHeaderCell>TableHeaderCell1</TableHeaderCell>\n            <TableHeaderCell>TableHeaderCell2</TableHeaderCell>\n        </TableRow>\n    </TableHeader>\n    <TableBody>\n        <TableRow>\n            <TableCell>TableCell1</TableCell>\n            <TableCell>TableCell2</TableCell>\n        </TableRow>\n    </TableBody>\n</Table>",controls:r.createElement(r.Fragment,null,K&&r.createElement("div",{className:"filter-holder"},r.createElement("label",null,"Filter by status"),r.createElement(u.L,{value:P,onMultipleChange:function(e){var n=(0,a.Z)(_),t=n.findIndex((function(e){return"status"===e.accessor})),r={accessor:"status",value:e};t>-1?n[t]=r:n.push(r),A(n),j(e)},placeholder:"Select filter...",multiple:!0},["single","in relationship"].map((function(e,n){return r.createElement("option",{key:n,value:e},e)})))),B&&r.createElement("div",{className:"filter-holder"},r.createElement(f.f,{name:"textInput3",label:"Pagination size",placeholder:"Pagination size",value:E,onChange:function(e){return T(isNaN(parseInt(e.target.value))?10:parseInt(e.target.value))}})),q&&r.createElement("div",{className:"filter-holder"},r.createElement(f.f,{name:"textInput2",label:"Search last name",placeholder:"Search by last name",value:y,onChange:G})),D()),note:r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("h3",null,"Using built-in table row selection function"),r.createElement("p",null,"The developer will just need to pass in ",r.createElement("code",null,"onRowSelect")," callback function in ",r.createElement("code",null,"<Table />")," and Checkbox will be appended automatically to rows."),"An example can be found below:",r.createElement(p.O,{language:"jsx"},"<Table onRowSelect={(event: React.ChangeEvent<HTMLInputElement>, rowUniqueKey: string) => console.log(event, rowUniqueKey)}>\n    <TableHeader>...</TableHeader>\n    <TableBody>\n        <TableRow uniqueKey={row.id} checked={row.checked}>\n            ...\n        </TableRow>\n    </TableBody>\n</Table>")),r.createElement("div",{className:"mt-5"},r.createElement("h3",null,"Using built-in table row expand function"),r.createElement("p",null,"The developer will just need to pass in ",r.createElement("code",null,"onRowExpand")," callback function in ",r.createElement("code",null,"<Table />")," and collapse icon will be appended automatically to rows."),"An example can be found below:",r.createElement(p.O,{language:"jsx"},"<Table onRowExpand={(isExpanded: boolean, rowUniqueKey: string) => console.log(isExpanded, rowUniqueKey)}>\n    <TableHeader>...</TableHeader>\n    <TableBody>\n        <TableRow uniqueKey={row.id} isExpanded={row.expanded}>\n            ...\n        </TableRow>\n    </TableBody>\n</Table>")),r.createElement("div",{className:"mt-5"},r.createElement("h3",null,"Using built-in onSort function"),r.createElement("p",null,"The developer will just need to pass in ",r.createElement("code",null,"onSort")," callback function in ",r.createElement("code",null,"<Table />")," and sort icon will be appended automatically to header."),"An example can be found below:",r.createElement(p.O,{language:"jsx"},"<Table onSort={sortedColumn: SortedColumn) => console.log(sortedColumn)}>\n    <TableHeader>...</TableHeader>\n    <TableBody>...</TableBody>\n</Table>"),r.createElement("h4",{className:"mt-4"},"Disabling sort on column"),r.createElement("p",null,"The developer can disable sort on specific column."),"An example can be found below:",r.createElement(p.O,{language:"jsx"},'<Table onSort={sortedColumn: SortedColumn) => console.log(sortedColumn)}>\n    <TableHeader>\n        <TableRow>\n            <TableHeaderCell accessor="id" disableSort>ID</TableHeaderCell>\n            <TableHeaderCell accessor="name">Name</TableHeaderCell>\n        </TableRow>\n    </TableHeader>\n    <TableBody>...</TableBody>\n</Table>'),r.createElement("h4",{className:"mt-4"},"Setting default sort direction on column"),r.createElement("p",null,"The developer can specify sort direction on column. Currently only support single sort column."),"An example can be found below:",r.createElement(p.O,{language:"jsx"},'<Table onSort={sortedColumn: SortedColumn) => console.log(sortedColumn)}>\n    <TableHeader>\n        <TableRow>\n            <TableHeaderCell accessor="id" sortDirection={SortDirection.ASC}>ID</TableHeaderCell>\n            <TableHeaderCell accessor="name">Name</TableHeaderCell>\n        </TableRow>\n    </TableHeader>\n    <TableBody>...</TableBody>\n</Table>')))})}},50778:function(e,n,t){t.d(n,{v:function(){return c}});var a=t(30808),r=(t(40205),t(27378)),l=t(31852),o=t(3035),i=["start","end","hrefMask"],c=r.memo(r.forwardRef((function(e,n){var t=e.start,c=void 0===t?1:t,s=e.end,u=e.hrefMask,d=(0,a.Z)(e,i),f=r.useState([]),m=f[0],b=f[1];return r.useEffect((function(){for(var e=[],n=c;n<=s;n++)e.push(n);b(e)}),[c,s]),r.createElement(l.t,Object.assign({},d,{ref:n}),m.map((function(e,n){return r.createElement(o.T,{key:n,href:null!=u&&u.includes("$i")?u.replace("$i",e.toString()):null},e)})))})))},3035:function(e,n,t){t.d(n,{T:function(){return c}});var a=t(30808),r=t(27378),l=t(508),o=t.n(l),i=["href"],c=r.memo(r.forwardRef((function(e,n){var t=e.href,l=(0,a.Z)(e,i);return r.createElement("li",Object.assign({},l,{ref:n,className:o()("page-item",{active:l["data-active"],disabled:l["data-disabled"]},l.className)}),r.createElement("a",{className:"page-link",href:t||"#",onClick:function(e){return e.preventDefault()},"aria-disabled":l["data-disabled"]},l.children))})))},31852:function(e,n,t){t.d(n,{t:function(){return f}});var a=t(4769),r=t(30808),l=t(27378),o=t(508),i=t.n(o),c=t(3035),s=["navs","offset","onPageChange","size","useDotNav","showFirstAndLast","value"],u=l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),d=l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",d:"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}),l.createElement("path",{fillRule:"evenodd",d:"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),f=l.memo(l.forwardRef((function(e,n){var t,o,f,m,b,p,v,h,g,w=e.navs,S=void 0===w?{}:w,E=e.offset,T=void 0===E?5:E,R=e.onPageChange,y=e.size,x=void 0===y?"md":y,C=e.useDotNav,N=e.showFirstAndLast,k=e.value,O=void 0===k?0:k,P=(0,r.Z)(e,s),j=l.Children.count(P.children),M=j-1,_=j<2||0===O,A=j<2||O===M,H=function(){var e=l.Children.map(P.children,(function(e,n){return l.isValidElement(e)?l.cloneElement(e,{"data-active":O===n,"data-index-number":n,key:n,onClick:function(e){R&&R(parseInt(e.currentTarget.dataset.indexNumber,10))}}):e}))||[];if(T){var n=O-Math.floor(T/2),t=O+Math.floor(T/2),r=n,o=t;n<0&&(o=(o+=0-n)>M?M:o),t>M&&(r=(r-=t-M)<0?0:r);var i=e.filter((function(e,n){return n>=r&&n<=o}));if(!C){var s,u,d,f;if(parseInt(null===(s=i[0])||void 0===s?void 0:s.props["data-index-number"],10)>0)i=[l.createElement(c.T,{className:"pre-ellipsis",key:"pre-ellipsis","data-disabled":!0,href:null===(d=P.children[0])||void 0===d||null===(f=d.props)||void 0===f?void 0:f.href},"...")].concat((0,a.Z)(i));parseInt(null===(u=i[i.length-1])||void 0===u?void 0:u.props["data-index-number"],10)<M&&i.push(l.createElement(c.T,{className:"post-ellipsis",key:"post-ellipsis","data-index-number":M,"data-disabled":!0},"..."))}return i}return e}(),D=N&&!C||C&&!_&&0!=H[0].props["data-index-number"],I=N&&!C||C&&!A&&H[H.length-1].props["data-index-number"]!=M,L=_||"pre-ellipsis"!==H[0].key,F=A||"post-ellipsis"!==H[H.length-1].key;return l.createElement("nav",Object.assign({},P,{ref:n,className:i()("rc",P.className)}),l.createElement("ul",{className:i()("pagination",(t={},t["pagination-"+x]=x,t.dotnav=C,t))},P.children&&l.createElement(l.Fragment,null,D&&l.createElement(c.T,{className:"first-nav",onClick:function(){return!L&&R(0)},"data-disabled":L,href:null===(o=P.children[0])||void 0===o||null===(f=o.props)||void 0===f?void 0:f.href},(null==S?void 0:S.first)||d),!C&&l.createElement(c.T,{className:"previous-nav",onClick:function(){return!_&&R(O-1)},"data-disabled":_,href:null===(m=P.children[O-1])||void 0===m||null===(b=m.props)||void 0===b?void 0:b.href},(null==S?void 0:S.previous)||u),H,!C&&l.createElement(c.T,{className:"next-nav",onClick:function(){return!A&&R(O+1)},"data-disabled":A,href:null===(p=P.children[O+1])||void 0===p||null===(v=p.props)||void 0===v?void 0:v.href},(null==S?void 0:S.next)||l.cloneElement(u,{className:"h-flipped"})),I&&l.createElement(c.T,{className:"last-nav",onClick:function(){return!F&&R(M)},"data-disabled":F,href:null===(h=P.children[M])||void 0===h||null===(g=h.props)||void 0===g?void 0:g.href},(null==S?void 0:S.last)||l.cloneElement(d,{className:"h-flipped"})))))})))},26563:function(e,n,t){t.d(n,{iA:function(){return u},RM:function(){return p},pj:function(){return g},xD:function(){return b},xs:function(){return m},SC:function(){return R}});var a=t(30808),r=t(27378),l=t(508),o=t.n(l),i={tableState:{sortedColumn:null,expandedRows:[]},setTableState:null,onRowSelect:null,onRowExpand:null,onSort:null},c=r.createContext(i),s=["onRowSelect","onRowExpand","onSort","sortedColumn","theme","className"],u=r.memo(r.forwardRef((function(e,n){var t=e.onRowSelect,l=e.onRowExpand,i=e.onSort,u=e.sortedColumn,d=e.theme,f=void 0===d?"light":d,m=e.className,b=(0,a.Z)(e,s),p=r.useState({expandedRows:[],sortedColumn:u}),v=p[0],h=p[1];return r.createElement(c.Provider,{value:{tableState:v,onSort:i,onRowSelect:t,onRowExpand:l,setTableState:h}},r.createElement("table",Object.assign({},b,{className:o()("table",m,f),ref:n})))}))),d=t(79684),f=["accessor","disableSort","className","sortDirection","onClick"],m=r.forwardRef((function(e,n){var t=e.accessor,l=e.disableSort,i=e.className,s=e.sortDirection,u=e.onClick,m=(0,a.Z)(e,f),b=r.useContext(c),p=r.useState(null),v=p[0],h=p[1],g=r.useState(d.S.ASC),w=g[0],S=g[1],E=r.useState(!1),T=E[0],R=E[1],y=r.useCallback((function(){var e,n=v&&v.accessor===t?Object.assign({},v,{sortDirection:(e=v.sortDirection,e===d.S.ASC?d.S.DESC:d.S.ASC)}):{accessor:t,sortDirection:d.S.DESC};b.setTableState(Object.assign({},b.tableState,{sortedColumn:n})),n&&b.onSort(n)}),[v,b]);return r.useEffect((function(){R(!l&&!!b.onSort)}),[l,b.onSort]),r.useEffect((function(){h(b.tableState.sortedColumn)}),[b.tableState.sortedColumn]),r.useEffect((function(){s&&b.onSort&&b.setTableState(Object.assign({},b.tableState,{sortedColumn:{accessor:t,sortDirection:s}}))}),[s,b.onSort]),r.useEffect((function(){S(T&&(null==v?void 0:v.accessor)===t?null==v?void 0:v.sortDirection:null)}),[T,v]),r.createElement("th",Object.assign({},m,{className:o()(i,{sort:T,"sort-asc":T&&w===d.S.ASC,"sort-desc":T&&w===d.S.DESC}),onClick:T?y:u,ref:n}))}));m.displayName="TableHeaderCell";var b=r.forwardRef((function(e,n){var t=Object.assign({},e);return r.createElement("thead",Object.assign({},t,{ref:n}),1===r.Children.count(t.children)&&r.isValidElement(t.children)?r.cloneElement(t.children,{isHeaderRow:!0,index:-1}):r.Children.map(t.children,(function(e,n){var t;return r.isValidElement(e)&&"TableRow"===(null==e||null===(t=e.type)||void 0===t?void 0:t.displayName)?r.cloneElement(e,{index:n,hideSelect:!e.props.isHeaderRow}):e})))}));b.displayName="TableHeader";var p=r.forwardRef((function(e,n){var t,a=Object.assign({},e),l=r.useCallback((function(e,n){var a,l=r.isValidElement(e)&&"TableRow"===(null==e||null===(a=e.type)||void 0===a?void 0:a.displayName);return l&&!e.props.isSubRow&&(t=e.props.uniqueKey),l?r.cloneElement(e,{index:n,parentKey:t}):e}),[]);return r.createElement("tbody",Object.assign({},a,{ref:n}),r.Children.map(a.children,(function(e,n){return(null==e?void 0:e.type)===r.Fragment?r.cloneElement(e,{children:r.Children.map(e.props.children,(function(e,n){return l(e,n)}))}):l(e,n)})))}));p.displayName="TableBody";var v=t(4769),h=t(86756),g=r.forwardRef((function(e,n){var t=Object.assign({},e);return r.createElement("td",Object.assign({},t,{ref:n}))}));g.displayName="TableCell";var w=t(75418),S=["className","isHeaderRow","hideSelect","uniqueKey","parentKey","checked","indeterminate","isSubRow","isExpanded"],E=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},r.createElement("path",{d:"M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"})),T=r.createElement("svg",{name:"angle-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},r.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"})),R=r.forwardRef((function(e,n){var t,l=e.className,i=e.isHeaderRow,s=e.hideSelect,u=e.uniqueKey,d=e.parentKey,f=e.checked,b=void 0!==f&&f,p=e.indeterminate,R=void 0!==p&&p,y=e.isSubRow,x=void 0!==y&&y,C=e.isExpanded,N=void 0!==C&&C,k=(0,a.Z)(e,S),O=r.useContext(c),P=r.useState(u),j=P[0],M=P[1],_=r.useState(!1),A=_[0],H=_[1],D=r.useState(N),I=D[0],L=D[1],F=r.useState(N),B=F[0],W=F[1],q=r.useState(null),K=q[0],U=q[1],Z=r.useState((null===(t=O.tableState)||void 0===t?void 0:t.expandedRows)||[]),z=Z[0],V=Z[1],X=r.useCallback((function(){var e=(0,v.Z)(z),n=e.indexOf(j);if(N&&-1===n)e.push(j);else if(n>-1){var t=e.indexOf(j);e.splice(t,1)}O.setTableState(Object.assign({},O.tableState,{expandedRows:e})),V(e)}),[N,j]);r.useEffect((function(){M(i?"all":u||(0,w.k)("table-row"))}),[u,i]),r.useEffect((function(){V(O.tableState.expandedRows||[])}),[O.tableState.expandedRows]),r.useEffect((function(){L(N),x||i||!O.onRowExpand||X()}),[N,X]),r.useEffect((function(){U(i?{disableSort:!0}:null)}),[i]),r.useEffect((function(){W(!(i||x))}),[i,x]),r.useEffect((function(){O.onRowExpand&&H(x&&z.indexOf(d)>-1)}),[z]);var G=i?m:g;return r.createElement("tr",Object.assign({},k,{ref:n,className:o()(l,{"sub-row":x,expanded:N,collapsible:B&&!!O.onRowExpand,show:A})}),!!O.onRowExpand&&r.createElement(G,Object.assign({},K,{className:o()({"collapse-control":B})}),B&&r.createElement("button",{className:"btn btn-sm",onClick:function(){return O.onRowExpand(!N,j)}},r.createElement("div",{className:"icon-holder"},I?E:T))),!!O.onRowSelect&&r.createElement(G,Object.assign({},K,{className:o()({"select-control":!(s||x)})}),!(s||x)&&r.createElement(h.X,{checked:b,ref:function(e){e&&(e.indeterminate=R&&!b)},name:"tb_checkbox_"+j,id:"tb_checkbox_"+j,onChange:function(e){return O.onRowSelect(e,j)}})),k.children)}));R.displayName="TableRow";t(68131)},68131:function(e,n,t){t.d(n,{qr:function(){return l},Dw:function(){return o},IH:function(){return i},V6:function(){return c},cK:function(){return s}});var a=t(4769),r=t(79684);function l(e,n,t){var l;void 0===e&&(e=[]);var o=(null===(l=window.navigator)||void 0===l?void 0:l.languages)||["sw","en"];return(0,a.Z)(e).sort((function(e,a){return t===r.S.ASC?isNaN(a[n])&&isNaN(e[n])?String(e[n]).localeCompare(String(a[n]),o,{sensitivity:"base",ignorePunctuation:!0}):e[n]-a[n]:isNaN(a[n])&&isNaN(e[n])?String(a[n]).localeCompare(String(e[n]),o,{sensitivity:"base",ignorePunctuation:!0}):a[n]-e[n]}))}function o(e,n){return e.filter((function(e){return 0===n.length||n.every((function(n){return Array.isArray(n.value)?0===n.value.length||n.value.indexOf(e[n.accessor])>-1:e[n.accessor]===n.value}))}))}function i(e,n,t){return(0,a.Z)(e).filter((function(e){var a=String(n);return null==t?void 0:t.some((function(n){var t=!1,r=n,l=new RegExp(a,"gi");return null===e[r]||void 0===e[r]?t=!1:"string"==typeof e[r]?t=e[r].search(l)>-1:"number"==typeof e[r]&&(t=-1!==String(e[r]).search(l)),t}))}))}function c(e,n,t){if(n&&(null==e?void 0:e.length)>0){var a=t*n,r=n+a;return null==e?void 0:e.slice(a,r)}return e}function s(e,n,t,a){var r=e.target,l=!0,o=!1,i=null==n?void 0:n.map((function(e){return e[t]!==a&&"all"!==a||(e.checked=r.checked),l=l&&e.checked,o=o||e.checked,e}));return{data:i,isAllSelected:!!i&&l,isIndeterminate:o&&!l}}},79684:function(e,n,t){var a;t.d(n,{S:function(){return a}}),function(e){e.ASC="ASC",e.DESC="DESC"}(a||(a={}))},56770:function(e,n,t){t.r(n),n.default='import React from "react";\nimport classnames from "classnames";\nimport { SortedColumn, TableContext } from "./TableContextProvider";\nimport "./table.scss";\n\nexport type TableTheme = "light" | "dark";\n\nexport type TableProps = JSX.IntrinsicElements["table"] & {\n    /** callback when row is selected */\n    onRowSelect?: (event: React.ChangeEvent<HTMLInputElement>, rowKey: string) => void;\n    /** callback when row is expanded */\n    onRowExpand?: (isExpanded: boolean, rowKey: string) => void;\n    /** table theme */\n    theme?: TableTheme;\n    /** callback when column is sorted */\n    onSort?: (sortedColumn: SortedColumn) => void;\n    /** preset sorted column */\n    sortedColumn?: SortedColumn;\n};\n\nexport const Table: React.FunctionComponent<TableProps> = React.memo(\n    React.forwardRef(({ onRowSelect, onRowExpand, onSort, sortedColumn, theme = "light", className, ...props }: TableProps, ref: React.ForwardedRef<HTMLTableElement>): React.ReactElement<void> => {\n        const [tableState, setTableState] = React.useState({ expandedRows: [], sortedColumn });\n        return (\n            <TableContext.Provider value={{ tableState, onSort, onRowSelect, onRowExpand, setTableState }}>\n                <table {...props} className={classnames("table", className, theme)} ref={ref} />\n            </TableContext.Provider>\n        );\n    })\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-table-tsx-6ba4ba109e6b8ef7f980.js.map