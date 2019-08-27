(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1051:function(n,t,e){"use strict";e.r(t);var o=e(36),a=e(0),i=(e(826),function(n){function t(t){var e=n.call(this,t)||this;return e.state={open:!1,close:!1},e}return o.b(t,n),t.prototype.componentDidMount=function(){!0===this.props.toggle&&this.setState({open:!0})},t.prototype.componentDidUpdate=function(n){this.props.toggle!==n.toggle&&this.setState({open:!n.toggle,close:n.toggle})},t.prototype.render=function(){return a.createElement("div",{className:"custom-dialogue"+(this.state.open?" open-dialogue":"")+(this.state.close?" close-dialogue":"")},a.createElement("div",{className:"dialogue-container"+(this.props.className?" "+this.props.className:"")},a.createElement("div",{className:"dialogue"+(this.props.desc?" with-desc":""),onClick:function(n){return n.stopPropagation()}},this.props.header&&a.createElement("div",{className:"dialogue-header"},this.props.header),this.props.desc&&a.createElement("div",{className:"dialogue-desc"},this.props.desc),a.createElement("div",{className:"dialogue-footer"},this.props.secondaryBtn&&this.props.secondaryAction&&a.createElement("div",{className:"dialogue-action secondary-action"},a.createElement("button",{className:"btn btn-secondary dialogue-button",onClick:this.props.secondaryAction},this.props.secondaryBtn)),this.props.primaryBtn&&this.props.primaryAction&&a.createElement("div",{className:"dialogue-action primary-action"},a.createElement("button",{className:"btn btn-primary dialogue-button",onClick:this.props.primaryAction},this.props.primaryBtn)),!this.props.primaryBtn&&!this.props.secondaryBtn&&a.createElement("div",{className:"dialogue-action primary-action"},a.createElement("button",{className:"btn btn-primary dialogue-button",onClick:this.props.primaryAction&&this.props.primaryAction},"Close"))))))},t}(a.Component)),r=e(406),d=e(398),l=e(399).default,s=e(828),c=function(n){function t(t){var e=n.call(this,t)||this;return e.state={dialogue:!1},e}return o.b(t,n),t.prototype.render=function(){var n=this,t=Object(d.a)(this.props.location.search,"mode");return a.createElement("div",{className:"route-template "+("dl"===t||"DL"===t?"brief":"")},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(l,{innerHTML:!0},s))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs"),a.createElement("div",{className:"result"},a.createElement(r.a,{label:"Trigger dialogue",onClick:function(){n.setState({dialogue:!0})}}),a.createElement(i,{header:"Are you sure?",desc:"Lorem ipsum dolor sit amet, ius quis veniam ad, mea id nemore probatus sensibus. Sed  lorem everti menandri cu, habeo.",toggle:this.state.dialogue,primaryBtn:"Yes, delete it!",secondaryBtn:"Cancel",secondaryAction:function(){n.setState({dialogue:!1})},primaryAction:function(){n.setState({dialogue:!1})}})))))},t}(a.Component);t.default=c},398:function(n,t,e){"use strict";function o(n,t){var e=RegExp("[?&]"+t+"=([^&]*)").exec(n);return e&&decodeURIComponent(e[1].replace(/\+/g," "))}e.d(t,"a",function(){return o})},406:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var o=e(0),a=(e(407),o.memo(function(n){return o.createElement("button",{type:"button",disabled:n.disabled,className:"btn"+(n.theme?" btn-"+n.theme:" btn-primary")+(n.className?" "+n.className:"")+(n.icon?n.iconPosition?" icon-"+n.iconPosition:" icon-left":""),title:n.title,onClick:function(t){n.onClick&&n.onClick(t)}},o.createElement("div",{className:"button-content"},o.createElement("div",{className:"button-label"},n.label),n.icon&&o.createElement("div",{className:"svg-holder"},n.icon)))}))},407:function(n,t,e){var o=e(408);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(58)(o,a);o.locals&&(n.exports=o.locals)},408:function(n,t,e){(n.exports=e(54)(!1)).push([n.i,"button.btn .button-content {\n  padding-top: 0;\n  padding-bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  button.btn .button-content > .button-label {\n    line-height: 1px;\n    height: 24px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1; }\n  button.btn .button-content > .svg-holder {\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    overflow: hidden;\n    line-height: 0;\n    flex-shrink: 1; }\n    button.btn .button-content > .svg-holder > svg {\n      width: 100%;\n      height: 100%; }\n\nbutton.btn:not(.btn-lg):not(.btn-sm) {\n  min-width: 120px;\n  height: 42px; }\n\nbutton.btn.btn-anchor {\n  background: transparent;\n  border: 0;\n  color: #007AC7; }\n  button.btn.btn-anchor:hover {\n    background: transparent;\n    color: #0092E1;\n    text-decoration: underline; }\n  button.btn.btn-anchor:active {\n    color: #007AC7; }\n  button.btn.btn-anchor:active, button.btn.btn-anchor:focus {\n    background: transparent;\n    text-decoration: underline; }\n\nbutton.btn.btn-primary > .button-content > .svg-holder > svg {\n  fill: #fff; }\n\nbutton.btn:not(.btn-primary) > .button-content > .svg-holder > svg {\n  fill: #0092E1; }\n\nbutton.btn.icon-left > .button-content {\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n  button.btn.icon-left > .button-content > .svg-holder {\n    margin-right: 5px; }\n\nbutton.btn.icon-right > .button-content > .svg-holder {\n  margin-left: 5px; }\n",""])},826:function(n,t,e){var o=e(827);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(58)(o,a);o.locals&&(n.exports=o.locals)},827:function(n,t,e){(n.exports=e(54)(!1)).push([n.i,".custom-dialogue .dialogue-container {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 20;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.7);\n  transform: translateY(100%);\n  opacity: 0; }\n  .custom-dialogue .dialogue-container .dialogue {\n    display: block;\n    position: relative;\n    border-radius: 3px;\n    color: #000;\n    background: #FFF;\n    width: 512px;\n    overflow: hidden;\n    z-index: 21;\n    top: 45%;\n    opacity: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-50%);\n    -webkit-transition: 300ms;\n    -moz-transition: 300ms;\n    -o-transition: 300ms;\n    transition: 300ms;\n    box-shadow: 0 7px 28px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22); }\n    .custom-dialogue .dialogue-container .dialogue > .dialogue-header {\n      text-align: center;\n      font-size: 24px;\n      line-height: 1;\n      padding: 16px;\n      font-weight: 500; }\n    .custom-dialogue .dialogue-container .dialogue > .dialogue-desc {\n      position: relative;\n      overflow: auto;\n      padding: 16px;\n      padding-bottom: 32px; }\n    .custom-dialogue .dialogue-container .dialogue > .dialogue-footer {\n      position: relative;\n      text-align: right;\n      padding: 16px; }\n      .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action {\n        min-width: 120px;\n        display: inline-block; }\n        .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button {\n          min-width: 120px;\n          font-size: 16px;\n          box-shadow: none; }\n          .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button.btn-primary {\n            background: #0092E1; }\n            .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button.btn-primary:hover {\n              background: #007AC7; }\n            .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button.btn-primary:active {\n              background-color: #05578c !important; }\n          .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button.btn-secondary {\n            border: 1px solid #0092E1; }\n          .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button:active, .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button:hover, .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button:focus {\n            color: #fff;\n            box-shadow: none !important;\n            outline: 0 !important; }\n        .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action:first-child {\n          padding-right: 16px; }\n    .custom-dialogue .dialogue-container .dialogue.with-desc .dialogue-header {\n      text-align: left;\n      border-bottom: 1px solid #dedede; }\n\n@media only screen and (max-width: 768px) {\n  .custom-dialogue .dialogue-container .dialogue {\n    width: 500px; }\n    .custom-dialogue .dialogue-container .dialogue > .contents .input-holder .label-text {\n      width: 100%; } }\n\n@media only screen and (max-width: 520px) {\n  .custom-dialogue .dialogue-container .dialogue {\n    width: 90%; } }\n\n@media only screen and (min-width: 421px) {\n  .custom-dialogue.open-dialogue .dialogue-container {\n    -webkit-animation: container-fade-in 300ms forwards;\n    -moz-animation: container-fade-in 300ms forwards;\n    -o-animation: container-fade-in 300ms forwards;\n    animation: container-fade-in 300ms forwards; }\n    .custom-dialogue.open-dialogue .dialogue-container .dialogue {\n      top: 50%;\n      opacity: 1; }\n  .custom-dialogue.close-dialogue .dialogue-container {\n    -webkit-animation: container-fade-out 300ms forwards;\n    -moz-animation: container-fade-out 300ms forwards;\n    -o-animation: container-fade-out 300ms forwards;\n    animation: container-fade-out 300ms forwards; } }\n\n@media only screen and (max-width: 420px) {\n  .custom-dialogue.open-dialogue .dialogue-container {\n    -webkit-animation: container-fade-in 300ms forwards;\n    -moz-animation: container-fade-in 300ms forwards;\n    -o-animation: container-fade-in 300ms forwards;\n    animation: container-fade-in 300ms forwards; }\n    .custom-dialogue.open-dialogue .dialogue-container .dialogue {\n      transform: translateY(0);\n      opacity: 1; }\n  .custom-dialogue.close-dialogue .dialogue-container {\n    -webkit-animation: container-fade-out 600ms forwards;\n    -moz-animation: container-fade-out 600ms forwards;\n    -o-animation: container-fade-out 600ms forwards;\n    animation: container-fade-out 600ms forwards; }\n  .custom-dialogue .dialogue-container .dialogue {\n    top: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    opacity: 0;\n    transform: translateY(-50%);\n    border-radius: 0;\n    transition: all 300ms; }\n    .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action {\n      width: 50%; }\n      .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action:first-child {\n        padding-right: 8px; }\n      .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action:last-child {\n        padding-left: 8px; }\n      .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action .dialogue-button {\n        width: 100%;\n        min-width: 0; }\n      .custom-dialogue .dialogue-container .dialogue > .dialogue-footer .dialogue-action:first-child:last-child {\n        width: 100%;\n        padding: 0; } }\n\n@media only screen and (max-width: 375px) {\n  .custom-dialogue .dialogue-container .dialogue > .dialogue-footer button.btn.dialogue-button {\n    font-size: 13px; } }\n\n@keyframes container-fade-in {\n  0% {\n    transform: translateY(100%);\n    opacity: 0; }\n  1% {\n    transform: translateY(0);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes container-fade-out {\n  0% {\n    transform: translateY(0%);\n    opacity: 1; }\n  99% {\n    transform: translateY(0%);\n    opacity: 0; }\n  100% {\n    transform: translateY(100%);\n    opacity: 0; } }\n\n@keyframes container-fade-out-delayed {\n  0% {\n    transform: translateY(0%);\n    opacity: 1; }\n  99% {\n    transform: translateY(0%);\n    opacity: 0; }\n  100% {\n    transform: translateY(100%);\n    opacity: 0; } }\n\n@keyframes dialogue-slide-in {\n  0% {\n    transform: translateY(-50%);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes dialogue-slide-out {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-50%);\n    opacity: 0; } }\n",""])},828:function(n,t){n.exports='<hr>\n<p>title: Dialogue\ncomponentid: component-dialogue\nvariantid: default</p>\n<h2 id="guid-dialogue-guid-default-component-react">guid: &#39;dialogue-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Dialogue Component\nComponent: &quot;Dialogue&quot;\nSelector: &quot;&lt;Dialogue/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Dialogue&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>Dialogue</code> and the selector is <code>&lt;Dialogue/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Dialogue\n    header=&quot;Are you sure?&quot;\n    desc=&quot;Lorem ipsum dolor sit amet, ius quis veniam ad, mea id nemore probatus sensibus. Sed  lorem everti menandri cu, habeo.&quot;\n    toggle={this.state.dialogue}\n    secondaryAction={() =&gt; { this.setState({ dialogue: false }) }}\n    primaryAction={() =&gt; { this.setState({ dialogue: false }) }}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>toggle</td>\n<td><code>boolean</code></td>\n<td>show or hide the popup</td>\n</tr>\n<tr>\n<td>header?</td>\n<td><code>string</code></td>\n<td>header text</td>\n</tr>\n<tr>\n<td>desc?</td>\n<td><code>string</code></td>\n<td>description text</td>\n</tr>\n<tr>\n<td>primaryBtn?</td>\n<td><code>string</code></td>\n<td>primary btn text</td>\n</tr>\n<tr>\n<td>secondaryBtn?</td>\n<td><code>string</code></td>\n<td>secondary btn text</td>\n</tr>\n<tr>\n<td>primaryAction?</td>\n<td><code>() =&gt; void</code></td>\n<td>click event fired when primary button is clicked</td>\n</tr>\n<tr>\n<td>secondaryAction?</td>\n<td><code>() =&gt; void</code></td>\n<td>click event fired when secondary button is clicked</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n</tbody></table>\n'}}]);