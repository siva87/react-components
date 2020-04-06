(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1159:function(e,t,r){var o=r(64),n=r(1160);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},s=(o(n,a),n.locals?n.locals:{});e.exports=s},1160:function(e,t,r){(t=r(56)(!1)).push([e.i,'.form-group.custom-stepper{display:inline-block}.form-group.custom-stepper .stepper-container{height:44px;border-radius:4px;overflow:hidden;padding:0}.form-group.custom-stepper .stepper-container:not(.disabled){background-color:#fff;border:1px solid #868686}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled),.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled){cursor:pointer;color:#0092E1}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled):hover,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled):hover{background-color:#41B0EE;color:#fff}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled):active,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled):active{background-color:#0092E1}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement.disabled,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment.disabled{background-color:#e9e9e9;color:#adadad}.form-group.custom-stepper .stepper-container:not(.disabled):hover{border-color:#41B0EE}.form-group.custom-stepper .stepper-container.disabled{background-color:#343434;border:1px solid #494949}.form-group.custom-stepper .stepper-container.disabled [class^="stepper-"]{color:#494949}.form-group.custom-stepper .stepper-container [class^="stepper-"]{display:inline-flex;align-items:center;justify-content:center;height:100%;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group.custom-stepper .stepper-container .stepper-decrement,.form-group.custom-stepper .stepper-container .stepper-increment{padding:0 10px;will-change:background-color, color;transition:background-color 200ms,color 200ms;padding-bottom:3px;font-size:38px;font-weight:100;line-height:0;border:none;background:transparent;border:1px solid transparent;outline:none;box-shadow:none}.form-group.custom-stepper .stepper-container .stepper-decrement:focus,.form-group.custom-stepper .stepper-container .stepper-increment:focus{border-color:#41B0EE}.form-group.custom-stepper .stepper-container .stepper-decrement>span,.form-group.custom-stepper .stepper-container .stepper-increment>span{padding-bottom:5px}.form-group.custom-stepper .stepper-container .stepper-preview{min-width:64px;text-align:center;font-size:24px}.form-group.custom-stepper .stepper-container.has-warning,.form-group.custom-stepper .stepper-container.has-warning:hover{border-bottom:1px solid #F8A000}.form-group.custom-stepper .stepper-input{display:none}.form-group.custom-stepper .alert{padding:5px;background:transparent}.form-group.custom-stepper .alert.alert-danger{border-color:#f03529;color:#f03529}.form-group.custom-stepper .alert.alert-warning{border-color:#f8a000;color:#f8a000}\n',""]),e.exports=t},1161:function(e,t){e.exports="<hr> <p>title: Stepper componentid: component-stepper variantid: default guid: &quot;stepper-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Stepper Component\nModule: &quot;Stepper&quot;\nSelector: &quot;&lt;Stepper/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Stepper&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element Information</h2> <p>This Angular component supports customization and configurations. The component name is <code>Stepper</code> and the selector is <code>&lt;Stepper/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Stepper value={this.state.stepperValue} min={0} max={10} onIncrease={() =&gt; { this.setState({ stepperValue:\nthis.state.stepperValue + 1 } }} onDecrease={() =&gt; { this.setState({ stepperValue: this.state.stepperValue - 1 } }} /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class can be passed here</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disable</td> </tr> <tr> <td>error?</td> <td><code>string</code></td> <td>Error message</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Id property</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>Element label</td> </tr> <tr> <td>max</td> <td><code>number</code></td> <td>Max value</td> </tr> <tr> <td>min</td> <td><code>number</code></td> <td>Min value</td> </tr> <tr> <td>name?</td> <td><code>string</code></td> <td>Name property</td> </tr> <tr> <td>onDecrease</td> <td><code>(event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td> <td>On decrease event</td> </tr> <tr> <td>onIncrease</td> <td><code>(event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td> <td>On increase event</td> </tr> <tr> <td>reference?</td> <td><code>React.RefObject&lt;any&gt;</code></td> <td>React Ref obj</td> </tr> <tr> <td>value</td> <td><code>number</code></td> <td>The current value</td> </tr> <tr> <td>warning?</td> <td><code>string</code></td> <td>Warning message</td> </tr> </tbody></table> "},196:function(e,t,r){"use strict";r.r(t);var o=r(0),n=(r(1159),r(118)),a=function(e){var t=o.useState(""),r=t[0],a=t[1];return o.useEffect((function(){a(e.id?e.id:Object(n.a)("stepper-"))}),[e.id]),o.createElement("div",{className:"form-group custom-stepper"+(e.className?" "+e.className:"")},e.label&&o.createElement("label",{className:"custom-label"},e.label),o.createElement("div",{className:"stepper-container"+(e.disabled?" disabled":"")},o.createElement("button",{className:"stepper-decrement"+(e.value===e.min?" disabled":""),onClick:e.value>e.min&&!e.disabled?e.onDecrease:null,"aria-controls":r,"aria-labelledby":"decrement"},o.createElement("span",null,"−")),o.createElement("div",{className:"stepper-preview"},o.createElement("span",null,e.value)),o.createElement("button",{className:"stepper-increment"+(e.value===e.max?" disabled":""),onClick:e.value<e.max&&!e.disabled?e.onIncrease:null,"aria-controls":r,"aria-labelledby":"increment"},o.createElement("span",null,"+"))),o.createElement("input",{className:"stepper-input",id:r,name:e.name,value:e.value,type:"number",min:e.min,max:e.max,readOnly:!0,disabled:e.disabled,ref:e.reference,"aria-live":"assertive"}),e.warning&&!e.error&&o.createElement("div",{className:"alert alert-warning"},e.warning),e.error&&o.createElement("div",{className:"alert alert-danger"},e.error))},s=r(460),p=r.n(s),d=r(1161);t.default=function(){var e=o.useState(1),t=e[0],r=e[1];return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(p.a,{innerHTML:!0},d))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here are sample outputs"),o.createElement("div",{className:"result"},o.createElement(a,{value:t,min:0,max:10,label:"Stepper label",onIncrease:function(){return r(t+1)},onDecrease:function(){return r(t-1)}})),o.createElement("div",{className:"result"},o.createElement(a,{value:t,min:0,max:10,label:"Disabled Stepper",onIncrease:function(){return r(t+1)},onDecrease:function(){return r(t-1)},disabled:!0})))))}}}]);