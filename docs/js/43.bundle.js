(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1255:function(t,e){t.exports="<hr> <p>title: TextBoxGroup componentid: component-input variantid: group guid: &quot;input-textboxgroup-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: TextBoxGroup Component\nComponent: &quot;TextBoxGroup&quot;\nSelector: &quot;&lt;TextBoxGroup/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/TextBoxGroup&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>TextBoxGroup</code> and the selector is <code>&lt;TextBoxGroup/&gt;</code>. This component support custom svg icon, which can be fully style via css classes. We use SVG code directly as we can change its color or size at any moment, like when you are hover over. Rememer to change the color of SVG, you should target svg and use <code>fill</code> property instead of <code>color</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;TextBoxGroup name=&quot;textInput&quot; placeholder=&quot;Text Box placeholder&quot; value={this.state.textBox} onChange={(event) =&gt; {\nthis.setState({ textBoxGroupValue: event.target.value }); }} /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>autoComplete?</td> <td><code>on</code> or <code>off</code></td> <td>Enable autocomplete</td> </tr> <tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>disabled?</td> <td><code>boolean</code></td> <td>Disable input element. (default: <code>false</code>)</td> </tr> <tr> <td>error?</td> <td><code>string</code></td> <td>Error text</td> </tr> <tr> <td>focus?</td> <td><code>boolean</code></td> <td>Enable autofocus. (default: <code>false</code>)</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Id string</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>The small label on top of the textbox</td> </tr> <tr> <td>leftIcon?</td> <td><code>any</code></td> <td>Left, You can pass a component or a <code>SVG</code> directly here</td> </tr> <tr> <td>leftText?</td> <td><code>string</code></td> <td>Left side text</td> </tr> <tr> <td>leftTitle?</td> <td><code>string</code></td> <td>Left side HTML title</td> </tr> <tr> <td>maxLength?</td> <td><code>number</code></td> <td>Input max length</td> </tr> <tr> <td>minLength?</td> <td><code>number</code></td> <td>Input min length</td> </tr> <tr> <td>name</td> <td><code>string</code></td> <td>Name string</td> </tr> <tr> <td>onBlur?</td> <td><code>(event: React.FocusEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;blur&#39;</code> event</td> </tr> <tr> <td>onChange</td> <td><code>(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;change&#39;</code> event</td> </tr> <tr> <td>onFocus?</td> <td><code>(event: React.FocusEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;focus&#39;</code> event</td> </tr> <tr> <td>onKeyDown?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keydown&#39;</code> event</td> </tr> <tr> <td>onKeyPress?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keypress&#39;</code> event</td> </tr> <tr> <td>onKeyUp?</td> <td><code>(event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td> <td>On <code>&#39;keyup&#39;</code> event</td> </tr> <tr> <td>onLeftClick?</td> <td><code>(event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td> <td>Click event on Left icon</td> </tr> <tr> <td>onRightClick?</td> <td><code>(event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td> <td>Click event on Right icon</td> </tr> <tr> <td>pattern?</td> <td><code>string</code></td> <td>Pattern string</td> </tr> <tr> <td>placeholder?</td> <td><code>string</code></td> <td>Placeholder text</td> </tr> <tr> <td>readOnly?</td> <td><code>boolean</code></td> <td>Make input element readonly. (default: <code>false</code>)</td> </tr> <tr> <td>reference?</td> <td><code>React.RefObject&lt;HTMLInputElement&gt;</code></td> <td>React Ref obj</td> </tr> <tr> <td>required?</td> <td><code>boolean</code></td> <td>Required atribute</td> </tr> <tr> <td>rightIcon?</td> <td><code>any</code></td> <td>Right, You can pass a component or a <code>SVG</code> directly here</td> </tr> <tr> <td>rightText?</td> <td><code>string</code></td> <td>Right side text</td> </tr> <tr> <td>rightTitle?</td> <td><code>string</code></td> <td>Right side HTML title</td> </tr> <tr> <td>showErrorMessage?</td> <td><code>boolean</code></td> <td>Show or hide the error message<sup>1</sup>(default: <code>true</code>)</td> </tr> <tr> <td>success</td> <td><code>boolean</code></td> <td>Success status</td> </tr> <tr> <td>type?</td> <td><code>string</code></td> <td>Input type. (default: <code>&#39;text&#39;</code>)</td> </tr> <tr> <td>value</td> <td>`string</td> <td>number`</td> </tr> </tbody></table> <h2 id=footnote>Footnote</h2> <ol> <li>Showing or hiding the error message does not affect the <span style=color:red>red</span> border indicator for the property <code>error</code></li> </ol> "},176:function(t,e,d){"use strict";d.r(e);var o=d(0),r=d(120),n=d(460),c=d.n(n),a=d(1255),l=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},o.createElement("title",null,"regular_black"),o.createElement("path",{d:"M137.5,102.1V40.4a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v61.7a3,3,0,0,0,3,3H134.5A3,3,0,0,0,137.5,102.1ZM112,91.3v7.7H30.5V91.3a3,3,0,0,0-3-3,6.1,6.1,0,0,1-6.1-6.1,3,3,0,0,0-3-3H11V63h7.5a3,3,0,0,0,3-3,6.1,6.1,0,0,1,6.1-6.1,3,3,0,0,0,3-3V43.4H112v7.5a3,3,0,0,0,3,3A6.1,6.1,0,0,1,121,60a3,3,0,0,0,3,3h7.5V79.3H124a3,3,0,0,0-3,3,6.1,6.1,0,0,1-6.1,6.1A3,3,0,0,0,112,91.3ZM131.5,57h-4.9a12.1,12.1,0,0,0-8.7-8.7V43.4h13.6ZM24.5,43.4v4.9A12.1,12.1,0,0,0,15.9,57H11V43.4ZM11,85.3h4.9A12.1,12.1,0,0,0,24.5,94v5.1H11ZM118,99.1V94a12.1,12.1,0,0,0,8.7-8.7h4.9V99.1Z"}),o.createElement("path",{d:"M151.3,115.8V54.2h-6v58.7H21.7v6H148.3A3,3,0,0,0,151.3,115.8Z"}),o.createElement("path",{d:"M159,67.9v58.7H35.5v6H162a3,3,0,0,0,3-3V67.9Z"}),o.createElement("path",{d:"M71.3,88.8A17.5,17.5,0,1,1,88.8,71.3,17.5,17.5,0,0,1,71.3,88.8Zm0-29A11.5,11.5,0,1,0,82.8,71.3,11.5,11.5,0,0,0,71.3,59.8Z"})),i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},o.createElement("title",null,"regular_black"),o.createElement("path",{d:"M149.1,165h-6V132.3c0-18.8-14.2-34.8-32.5-36.8l-24,15.9a3,3,0,0,1-3.3,0L59.2,95.5C41,97.7,26.9,113.6,26.9,132.3V165h-6V132.3c0-22.5,16.7-40.9,38.8-42.9a3,3,0,0,1,1.9.5L85,105.3l23.2-15.4a3,3,0,0,1,1.9-.5c21.9,1.8,39,20.7,39,42.9Z"}),o.createElement("path",{d:"M85,86.4A31.7,31.7,0,0,1,53.4,54.8V36.6a31.6,31.6,0,1,1,63.3,0V54.8A31.7,31.7,0,0,1,85,86.4Zm0-75.5A25.7,25.7,0,0,0,59.4,36.6V54.8a25.6,25.6,0,0,0,51.3,0V36.6A25.7,25.7,0,0,0,85,10.9Z"}));e.default=function(){var t=o.useState(""),e=t[0],d=t[1],n=o.useState(""),s=n[0],u=n[1],h=o.useState("Not good"),p=h[0],m=h[1],g=o.useState("All good"),v=g[0],f=g[1];return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(c.a,{innerHTML:!0},a))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"text box group with right text:"),o.createElement("div",{className:"result"},o.createElement(r.a,{name:"textInput",label:"Textbox group label",placeholder:"Text Box PlaceHolder",value:e,onChange:function(t){return d(t.target.value)},rightText:"kr"})),o.createElement("p",null,"text box group with left icon and disabled:"),o.createElement("div",{className:"result"},o.createElement(r.a,{name:"textInput2",placeholder:"Text Box PlaceHolder",value:s,onChange:function(t){return u(t.target.value)},leftIcon:l,disabled:!0})),o.createElement("p",null,"text box group with both sides and error:"),o.createElement("div",{className:"result"},o.createElement(r.a,{name:"textInput3",placeholder:"Text Box PlaceHolder",value:p,onChange:function(t){return m(t.target.value)},leftIcon:l,rightIcon:i,onLeftClick:function(){return alert("Im clicking on Left icon")},onRightClick:function(){return alert("Im clicking on Right icon")},leftTitle:"Click to view more of the left",rightTitle:"Click to view more of the right",error:"some error message"})),o.createElement("p",null,"text box group with both sides and error:"),o.createElement("div",{className:"result"},o.createElement(r.a,{name:"textInput3",placeholder:"Text Box PlaceHolder",value:v,onChange:function(t){return f(t.target.value)},leftIcon:l,rightIcon:i,onLeftClick:function(){return alert("Im clicking on Left icon")},onRightClick:function(){return alert("Im clicking on Right icon")},leftTitle:"Click to view more of the left",rightTitle:"Click to view more of the right",success:!0})))))}}}]);