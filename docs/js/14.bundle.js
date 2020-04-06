(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1085:function(e,t){e.exports="<hr> <p>title: Checkbox componentid: component-checkbox variantid: default guid: &quot;checkbox-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: CheckBox Component\nComponent: &quot;CheckBox&quot;\nSelector: &quot;&lt;CheckBox/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/CheckBox&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>CheckBox</code> and the selector is <code>&lt;CheckBox/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;CheckBox\n    name=&quot;checkbox&quot;\n    label=&quot;Checkbox label&quot;\n    checked={this.state.checkbox}\n    onChange={(event) =&gt; { this.setState({ checkbox: event.target.checked }); }}\n/&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>checked</td> <td><code>boolean</code></td> <td>The checked value</td> </tr> <tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>description?</td> <td><code>string</code></td> <td>A option description</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disabled status</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Id property</td> </tr> <tr> <td>inline?</td> <td><code>boolean</code></td> <td>Renders inline checkbox</td> </tr> <tr> <td>label</td> <td><code>string</code></td> <td>Checkbox label</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>Name property</td> </tr> <tr> <td>onChange</td> <td><code>(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On change action</td> </tr> <tr> <td>reference?</td> <td><code>React.RefObject&lt;HTMLInputElement&gt;</code></td> <td>React Ref obj</td> </tr> <tr> <td>topLabel?</td> <td><code>string</code></td> <td>A label which shows on top of component</td> </tr> <tr> <td>condensed?</td> <td><code>boolean</code></td> <td>Condenses the checkboxes. Usefull when rendering them below each other</td> </tr> </tbody></table> "},168:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o(477),a=o(481),r=o(460),i=o.n(r),l=o(1085);t.default=function(){var e=c.useState(!0),t=e[0],o=e[1],r=c.useState(!1),s=r[0],d=r[1],u=c.useState(!0),m=u[0],b=u[1],p=c.useState(0),h=p[0],f=p[1],k=c.useState("");k[0],k[1];return c.createElement("div",{className:"route-template container"},c.createElement("div",{className:"info-holder"},c.createElement("div",{className:"info"},c.createElement("div",{className:"md-file"},c.createElement(i.a,{innerHTML:!0},l))),c.createElement("div",{className:"info"},c.createElement("h2",null,"Output"),c.createElement("p",null,"Here are few checkboxes with different configurations:"),c.createElement("div",{className:"result"+(2===h?" wide":"")},c.createElement(a.a,{list:[{text:"Normal"},{text:"Condensed"},{text:"Inline"}],activeTab:h,onClick:f}),c.createElement(n.a,{name:"checkbox1",label:"Checkbox 1",checked:t,onChange:function(e){return o(e.target.checked)},condensed:1===h,inline:2===h}),c.createElement(n.a,{name:"checkbox2",label:"Checkbox 2",checked:s,onChange:function(e){return d(e.target.checked)},condensed:1===h,inline:2===h,description:"Some description"}),c.createElement(n.a,{name:"checkbox3",label:"Disabled",checked:m,onChange:function(e){return b(e.target.checked)},condensed:1===h,inline:2===h,disabled:!0})))))}},477:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var c=o(0),n=o(118),a=(o(478),function(e){var t=c.useState(e.id),o=t[0],a=t[1],r=c.useState(""),i=r[0],l=r[1];return c.useEffect((function(){a(e.id?o:Object(n.a)("checkbox-"))}),[e.id]),c.useEffect((function(){var t="form-group custom-checkbox";t+=e.inline?" inline":"",t+=e.condensed?" condensed":"",t+=e.className?" "+e.className:"",l(t)}),[e.inline,e.condensed,e.className]),c.createElement("div",{className:i},c.createElement("div",{className:"input-field"},e.topLabel&&c.createElement("label",{htmlFor:o,className:"checkbox-toplabel"},e.topLabel),c.createElement("div",{className:"custom-control"},c.createElement("input",{type:"checkbox",className:"custom-control-input",id:o,disabled:e.disabled,name:e.name,checked:e.checked,onChange:e.onChange,ref:e.reference}),c.createElement("label",{className:"custom-control-label",htmlFor:o},e.label,e.description&&c.createElement("span",{className:"checkbox-description"},e.description)))))})},478:function(e,t,o){var c=o(64),n=o(479);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},r=(c(n,a),n.locals?n.locals:{});e.exports=r},479:function(e,t,o){(t=o(56)(!1)).push([e.i,".form-group.custom-checkbox>.input-field>.custom-control{display:flex;align-items:center;height:100%;padding-left:0;height:44px}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-label,.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input{left:13px}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input:focus+label,.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input:active+label{box-shadow:inset 0 0 0 0.1rem rgba(65,176,238,0.5)}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input:disabled ~ .custom-control-label>.checkbox-description{color:#cecece}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input:not(:disabled){cursor:pointer}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-input:not(:disabled) ~ .custom-control-label{cursor:pointer}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-label{height:100%;width:100%;display:flex;align-items:center;padding-left:40px;padding-right:16px}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-label:before,.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-label:after{left:12px;top:14px}.form-group.custom-checkbox>.input-field>.custom-control>.custom-control-label>.checkbox-description{color:#868686;display:inline-block;margin-left:8px}.form-group.custom-checkbox.inline{display:inline-block}.form-group.custom-checkbox.inline:not(:first-child)>.custom-control{margin-left:15px}.form-group.custom-checkbox.condensed{margin:0}\n",""]),e.exports=t},481:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var c=o(0),n=(o(482),function(e){var t=[];return c.createElement("div",{className:"custom-tabs"+(e.className?" "+e.className:""),id:e.id},c.createElement("ul",{className:"nav nav-tabs",role:"tablist","aria-label":"tabs"},e.list&&e.list.map((function(o,n){return c.createElement("li",{key:n,className:"nav-item"+(n===e.activeTab?" active":"")+(o.disabled?" disabled":"")},c.createElement("a",{className:"nav-link"+(n===e.activeTab?" active":"")+(o.disabled?" disabled":""),onClick:function(t){return function(t,o){e.onClick&&!e.list[o].disabled&&e.onClick(o)}(0,n)},onKeyDown:function(o){return function(o,c){if(e.activeTab<e.list.length&&e.activeTab>=0){var n=e.list[e.activeTab-1]&&!e.list[e.activeTab-1].disabled;if(("arrowleft"===o.key.toLowerCase()||"arrowdown"===o.key.toLowerCase())&&n&&e.onClick)(a=t[e.activeTab-1]).setAttribute("aria-selected","true"),a.setAttribute("tabIndex","0"),a.setAttribute("class","nav-link active"),a.focus(),e.onClick(e.activeTab-1);else if("arrowright"!==o.key.toLowerCase()&&"arrowup"!==o.key.toLowerCase()||e.list[e.activeTab+1].disabled||!e.onClick){if("enter"===o.key.toLowerCase()||" "===o.key||"space"===o.key.toLowerCase()){(a=t[c]).setAttribute("aria-selected","true"),a.setAttribute("tabIndex","0"),a.setAttribute("class","nav-link active"),a.focus(),e.onClick(c)}}else{var a;(a=t[e.activeTab+1]).setAttribute("aria-selected","true"),a.setAttribute("tabIndex","0"),a.setAttribute("class","nav-link active"),a.focus(),e.onClick(e.activeTab+1)}}}(o,n)},role:"tab","aria-selected":n===e.activeTab,"aria-controls":"link-"+o.text,ref:function(e){t[n]=e},tabIndex:0},o.text))}))))})},482:function(e,t,o){var c=o(64),n=o(483);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},r=(c(n,a),n.locals?n.locals:{});e.exports=r},483:function(e,t,o){(t=o(56)(!1)).push([e.i,".custom-tabs .nav-tabs .nav-item:not(.active) .nav-link{color:#41B0EE;cursor:pointer}.custom-tabs .nav-tabs .nav-item.disabled .nav-link{cursor:default;color:#868686}\n",""]),e.exports=t}}]);