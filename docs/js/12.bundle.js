(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1257:function(t,o,e){var r=e(64),n=e(1258);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1},a=(r(n,i),n.locals?n.locals:{});t.exports=a},1258:function(t,o,e){(o=e(56)(!1)).push([t.i,".text-label{display:inline-block}.text-label>.custom-label-value{display:flex;align-items:center;font-weight:500}\n",""]),t.exports=o},1259:function(t,o){t.exports="<hr> <p>title: Text Label componentid: component-textlabel variantid: default guid: &quot;textlabel-guid-default-component-react&quot;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Text Label Component\nComponent: &quot;TextLabel&quot;\nSelector: &quot;&lt;TextLabel/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/TextLabel&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>TextLabel</code> and the selector is <code>&lt;TextLabel/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;TextLabel name=&quot;textname&quot; value=&quot;Some text value&quot; label=&quot;Some text label&quot; /&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class can be passed here</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>label?</td> <td><code>string</code></td> <td>Element label</td> </tr> <tr> <td>name?</td> <td><code>string</code></td> <td>element name</td> </tr> <tr> <td>value</td> <td><code>string</code></td> <td>The current value</td> </tr> </tbody></table> "},198:function(t,o,e){"use strict";e.r(o);var r=e(0),n=(e(1257),r.memo((function(t){return r.createElement("div",{className:"text-label"+(t.className?" "+t.className:""),id:t.id},t.label&&r.createElement("label",{className:"custom-label"},t.label),r.createElement("div",{className:"custom-label-value"},t.value))}))),i=e(695),a=e(460),l=e.n(a),s=e(1259);o.default=function(){return r.createElement("div",{className:"route-template container"},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(l.a,{innerHTML:!0},s))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here is the basic bootstrap one:"),r.createElement("div",{className:"result"},r.createElement(n,{value:"400,000 kr",label:"Current savings"})),r.createElement("p",null,"An example with passing ReactNode as the value (tooltip):"),r.createElement("div",{className:"result"},r.createElement(n,{value:r.createElement(r.Fragment,null,"400,000 kr",r.createElement(i.a,{className:"ml-1",position:"top-right"})),label:"Current savings"})))))}},691:function(t,o,e){var r=e(64),n=e(692);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1},a=(r(n,i),n.locals?n.locals:{});t.exports=a},692:function(t,o,e){(o=e(56)(!1)).push([t.i,'.tooltip-container{position:relative}.tooltip-container .tooltip-reference{position:relative;margin:auto;display:inline-block;z-index:0;cursor:pointer}.tooltip-container .tooltip-reference .default-content{height:25px;width:25px}.tooltip-container .tooltip-reference .default-content svg{width:100%;height:100%;pointer-events:none;vertical-align:top}.overlay-container .tooltip{position:relative}.overlay-container .tooltip>.tooltip-arrow{position:absolute;display:block;width:13px;overflow:hidden;background:transparent;pointer-events:none;height:0;opacity:0}.overlay-container .tooltip>.tooltip-arrow::before{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:15px;height:15px;margin:auto;content:"";pointer-events:auto}.overlay-container .tooltip>.tooltip-inner{padding:8px 10px;position:relative;max-width:300px;max-height:500px;overflow:auto;height:0;opacity:0}.overlay-container .tooltip>.tooltip-inner>.message-container{min-width:120px;padding:5px 10px 10px;text-align:center}.overlay-container .tooltip>.tooltip-inner>.message-container .title{font-weight:bold;margin-bottom:5px}.overlay-container .tooltip>.tooltip-inner>.message-container .message-list-item:not(:first-child){margin-top:10px}.overlay-container .tooltip>.tooltip-inner>.message-container .message{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.overlay-container .tooltip.default .tooltip-inner{background-color:#000;color:#fff}.overlay-container .tooltip.default .tooltip-arrow:before{background-color:#000}.overlay-container .tooltip.default .tooltip-arrow:after{border-color:transparent transparent #000 #000}.overlay-container .tooltip.light .tooltip-inner{background-color:#e9e9e9;color:#000}.overlay-container .tooltip.light .tooltip-arrow:before{background-color:#e9e9e9}.overlay-container .tooltip.light .tooltip-arrow:after{border-color:transparent transparent #e9e9e9 #e9e9e9}.overlay-container .tooltip.danger .tooltip-inner{background-color:#F03529;color:#fff}.overlay-container .tooltip.danger .tooltip-arrow:before{background-color:#F03529}.overlay-container .tooltip.danger .tooltip-arrow:after{border-color:transparent transparent #F03529 #F03529}.overlay-container .tooltip.warning .tooltip-inner{background-color:#FFC500;color:#fff}.overlay-container .tooltip.warning .tooltip-arrow:before{background-color:#FFC500}.overlay-container .tooltip.warning .tooltip-arrow:after{border-color:transparent transparent #FFC500 #FFC500}.overlay-container .tooltip.success .tooltip-inner{background-color:#60cd18;color:#fff}.overlay-container .tooltip.success .tooltip-arrow:before{background-color:#60cd18}.overlay-container .tooltip.success .tooltip-arrow:after{border-color:transparent transparent #60cd18 #60cd18}.overlay-container .tooltip.primary .tooltip-inner{background-color:#41B0EE;color:#fff}.overlay-container .tooltip.primary .tooltip-arrow:before{background-color:#41B0EE}.overlay-container .tooltip.primary .tooltip-arrow:after{border-color:transparent transparent #41B0EE #41B0EE}.overlay-container .tooltip.purple .tooltip-inner{background-color:#673AB6;color:#fff}.overlay-container .tooltip.purple .tooltip-arrow:before{background-color:#673AB6}.overlay-container .tooltip.purple .tooltip-arrow:after{border-color:transparent transparent #673AB6 #673AB6}.overlay-container.left>.tooltip>.tooltip-arrow,.overlay-container.right>.tooltip>.tooltip-arrow{top:50%;transform:translateY(-50%)}.overlay-container.left-bottom>.tooltip>.tooltip-arrow,.overlay-container.right-bottom>.tooltip>.tooltip-arrow{bottom:5px}.overlay-container.left-top>.tooltip>.tooltip-arrow,.overlay-container.right-top>.tooltip>.tooltip-arrow{top:5px}.overlay-container.top>.tooltip>.tooltip-arrow,.overlay-container.bottom>.tooltip>.tooltip-arrow{left:50%;transform:translateX(-50%)}.overlay-container.top-left>.tooltip>.tooltip-arrow,.overlay-container.bottom-left>.tooltip>.tooltip-arrow{left:5px}.overlay-container.top-right>.tooltip>.tooltip-arrow,.overlay-container.bottom-right>.tooltip>.tooltip-arrow{right:5px}.overlay-container.top,.overlay-container.top-left,.overlay-container.top-right{padding-bottom:4px}.overlay-container.top>.tooltip>.tooltip-arrow,.overlay-container.top-left>.tooltip>.tooltip-arrow,.overlay-container.top-right>.tooltip>.tooltip-arrow{bottom:-8px}.overlay-container.top>.tooltip>.tooltip-arrow::before,.overlay-container.top-left>.tooltip>.tooltip-arrow::before,.overlay-container.top-right>.tooltip>.tooltip-arrow::before{transform:translateY(-6.53553px) rotate(45deg)}.overlay-container.right,.overlay-container.right-top,.overlay-container.right-bottom{padding-left:4px}.overlay-container.right>.tooltip>.tooltip-arrow,.overlay-container.right-top>.tooltip>.tooltip-arrow,.overlay-container.right-bottom>.tooltip>.tooltip-arrow{left:-8px}.overlay-container.right>.tooltip>.tooltip-arrow::before,.overlay-container.right-top>.tooltip>.tooltip-arrow::before,.overlay-container.right-bottom>.tooltip>.tooltip-arrow::before{transform:translateX(6.53553px) rotate(45deg)}.overlay-container.bottom,.overlay-container.bottom-left,.overlay-container.bottom-right{padding-top:4px}.overlay-container.bottom>.tooltip>.tooltip-arrow,.overlay-container.bottom-left>.tooltip>.tooltip-arrow,.overlay-container.bottom-right>.tooltip>.tooltip-arrow{top:-8px}.overlay-container.bottom>.tooltip>.tooltip-arrow::before,.overlay-container.bottom-left>.tooltip>.tooltip-arrow::before,.overlay-container.bottom-right>.tooltip>.tooltip-arrow::before{transform:translateY(6.53553px) rotate(45deg)}.overlay-container.left,.overlay-container.left-top,.overlay-container.left-bottom{padding-right:4px}.overlay-container.left>.tooltip>.tooltip-arrow,.overlay-container.left-top>.tooltip>.tooltip-arrow,.overlay-container.left-bottom>.tooltip>.tooltip-arrow{right:-8px}.overlay-container.left>.tooltip>.tooltip-arrow::before,.overlay-container.left-top>.tooltip>.tooltip-arrow::before,.overlay-container.left-bottom>.tooltip>.tooltip-arrow::before{transform:translateX(-6.53553px) rotate(45deg)}.overlay-container.show>.tooltip>.tooltip-arrow,.overlay-container:focus>.tooltip>.tooltip-arrow{height:13px;opacity:1}.overlay-container.show>.tooltip>.tooltip-inner,.overlay-container:focus>.tooltip>.tooltip-inner{height:auto;opacity:1}\n',""]),t.exports=o},693:function(t,o,e){var r=e(64),n=e(694);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1},a=(r(n,i),n.locals?n.locals:{});t.exports=a},694:function(t,o,e){(o=e(56)(!1)).push([t.i,".overlay-container{position:absolute;z-index:1;height:0;opacity:0;transition:height 0ms, opacity 150ms ease-in-out}.overlay-container:focus{height:auto;opacity:1}\n",""]),t.exports=o},695:function(t,o,e){"use strict";e.d(o,"a",(function(){return d}));var r=e(65),n=e(0),i=(e(691),e(118)),a=(e(693),e(119)),l=e.n(a),s={top:{x:"horizontal-center",y:"top"},right:{x:"right",y:"vertical-center"},bottom:{x:"horizontal-center",y:"bottom"},left:{x:"left",y:"vertical-center"},"top-left":{x:"side-left",y:"top"},"top-right":{x:"side-right",y:"top"},"bottom-left":{x:"side-left",y:"bottom"},"bottom-right":{x:"side-right",y:"bottom"},"left-top":{x:"left",y:"side-top"},"left-bottom":{x:"left",y:"side-bottom"},"right-top":{x:"right",y:"side-top"},"right-bottom":{x:"right",y:"side-bottom"}},c=function(){function t(t,o){this.defaultPositionsList=["top","left","right","bottom","bottom-left","bottom-right","left-bottom","left-top","right-bottom","right-top","top-left","top-right"],this.referenceElement=t,this.disableAutoPosition=o}return t.prototype.addOverlayContainer=function(t){t&&(this.overlayElement=t)},t.prototype.disableAutoPlacement=function(t){this.disableAutoPosition=t},t.prototype.getPosition=function(t){return this.disableAutoPosition?(this.getOverlayPositionCoord(t),this.currentPlacementWithCoord=this.getPlacement(t)):this.currentPlacementWithCoord=this.setPositionWithinViewport(t),this.currentPlacementWithCoord},t.prototype.setPositionWithinViewport=function(t){var o=this;if(this.isElementOverflow(t)){var e=Object(r.d)(this.defaultPositionsList);e.splice(e.indexOf(t),1);var n=null;return e.some((function(t){if(!o.isElementOverflow(t))return n=o.getPlacement(t),!0})),n}return this.getPlacement(t)},t.prototype.getNewStyle=function(){return this.currentPosition?{left:this.currentPosition.left+"px",top:this.currentPosition.top+"px"}:null},t.prototype.getOverlayPositionCoord=function(t){var o=this.overlayElement.getBoundingClientRect(),e=s[t];if(e){var r=this.getPointPosition(e.y),n=this.getPointPosition(e.x);this.currentPosition={top:r,left:n,bottom:r+o.height,right:n+o.width}}else this.currentPosition=null},t.prototype.getPointPosition=function(t){var o=this.referenceElement.getBoundingClientRect(),e=this.overlayElement.getBoundingClientRect(),r=0;switch(t){case"vertical-center":r=o.bottom-e.height/2-o.height/2;break;case"horizontal-center":r=o.left-e.width/2+o.width/2;break;case"side-top":r=o.bottom-o.height;break;case"side-bottom":r=o.bottom-e.height;break;case"side-left":r=o.left;break;case"side-right":r=o.right-e.width;break;case"bottom":r=o.bottom;break;case"left":r=o.left-e.width;break;case"right":r=o.right;break;default:r=o.top-e.height}return r},t.prototype.isElementOverflow=function(t){return this.getOverlayPositionCoord(t),!this.currentPosition||this.currentPosition.left<0||this.currentPosition.top<0||this.currentPosition.right>window.innerWidth||this.currentPosition.bottom>window.innerHeight},t.prototype.getPlacement=function(t){return{coord:this.getNewStyle(),position:t}},t}(),p=function(t){var o=n.useRef(null),e=n.useState(null),r=e[0],i=e[1],a=n.useState(null),s=a[0],p=a[1];n.useEffect((function(){s&&s.disableAutoPlacement(t.disableAutoPosition)}),[t.disableAutoPosition]),n.useEffect((function(){p((function(){var e=new c(t.overlayReference(),t.disableAutoPosition);return e.addOverlayContainer(o.current),e}))}),[t.overlayReference]),n.useEffect((function(){return t.show?d():o.current.blur(),window.addEventListener("scroll",u,!0),function(){window.removeEventListener("scroll",u,!0)}}),[t.show]);var u=n.useCallback((function(o){var e=o.target;t.show&&e.contains(t.overlayReference())&&i(s.getPosition(t.position||"top"))}),[t.show,t.position]),d=function(){o.current.focus();var e=s.getPosition(t.position||"top");i(e)};return l.a.createPortal(n.createElement("div",{className:"overlay-container "+(r?r.position:t.position||"top"),ref:o,tabIndex:-1,onBlur:t.onBlur,"aria-hidden":!t.show,style:r?r.coord:{}},t.children),document.body)},u=n.createElement("svg",{name:"info-circle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{d:"M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"})),d=function(t){function o(o){var e=t.call(this,o)||this;return e.containerRef=n.createRef(),e.forceShow=function(){!e.state.visible&&e.onTooltipToggle(null,!0)},e.onTooltipContentBlur=function(t){var o=t.relatedTarget||document.activeElement;"click"===e.props.trigger&&document.getElementById(e.state.referenceId).contains(o)||e.onTooltipToggle(t,!1)},e.onHover=function(t,o){(e.props.triggerOnHover||"hover"===e.props.trigger)&&e.onTooltipToggle(t,o)},e.onClickEvent=function(t){(!e.props.trigger&&!e.props.triggerOnHover||"click"===e.props.trigger)&&e.onTooltipToggle(t)},e.onMouseEnterEvent=function(t){return e.onHover(t,!0)},e.onMouseLeaveEvent=function(t){return e.onHover(t,!1)},e.onTouchStartEvent=function(t){return e.onHover(t,!0)},e.onTouchEndEvent=function(t){return e.onHover(t,!1)},e.onFocusEvent=function(t){return"focus"===e.props.trigger&&e.onTooltipToggle(t)},e.onTooltipToggle=function(t,o){var r=void 0!==o?o:!e.state.visible;e.setState({visible:r},(function(){e.props.onVisibleChange&&e.props.onVisibleChange(t,r),e.props.onClick&&e.props.onClick(t)}))},e.state={visible:!1,referenceId:Object(i.a)("tooltip-ref")},e.forceDismiss=e.forceDismiss.bind(e),e}return Object(r.b)(o,t),o.prototype.componentDidUpdate=function(){(this.props.message||this.props.messageGroup||this.props.onClick||this.props.title||this.props.customSvg||this.props.triggerOnHover||this.props.width)&&console.warn("message, messageGroup, onClick, title, customSvg, triggerOnHover, and width attributes will be deprecated soon.")},o.prototype.forceDismiss=function(t){console.log("forceDismiss is deprecating. Tooltip will be hidden if it lost focus")},o.prototype.render=function(){var t=this;return n.createElement("div",{className:"tooltip-container"+(this.props.className?" "+this.props.className:""),id:this.props.id},n.createElement("div",{id:this.state.referenceId,ref:this.containerRef,className:"tooltip-reference",tabIndex:-1,onClick:this.onClickEvent,onMouseEnter:this.onMouseEnterEvent,onMouseLeave:this.onMouseLeaveEvent,onTouchStart:this.onTouchStartEvent,onTouchEnd:this.onTouchEndEvent,onFocus:this.onFocusEvent},this.props.children||n.createElement("div",{className:"default-content"},this.props.customSvg?this.props.customSvg:u)),n.createElement(h,Object(r.a)({},this.props,{onContentBlur:this.onTooltipContentBlur,show:this.state.visible,tooltipReference:function(){return t.containerRef.current}})))},o}(n.Component),h=function(t){return n.createElement(p,{show:t.show,onBlur:t.onContentBlur,position:t.position,disableAutoPosition:t.disableAutoPosition,overlayReference:t.tooltipReference},n.createElement("div",{className:"tooltip "+(t.theme||"default")+" "+(t.show?"show":""),role:"tooltip"},n.createElement("div",{className:"tooltip-arrow"}),n.createElement("div",{className:"tooltip-inner"},t.content?t.content:t.messageGroup?n.createElement(f,Object(r.a)({},t)):n.createElement(m,Object(r.a)({},t)))))},m=function(t){return n.createElement("div",{className:"message-container",style:{width:(t.width||120)+"px"}},t.title&&n.createElement("div",{className:"title"},t.title),n.createElement("div",{className:"message"},t.message||"Tooltip is empty. Please pass a message."))},f=function(t){return n.createElement("div",{className:"message-container",style:{width:(t.width||120)+"px"}},t.messageGroup.map((function(t,o){return n.createElement("div",{key:o,className:"message-list-item"},t.title&&n.createElement("div",{className:"title"},t.title),t.message&&n.createElement("div",{className:"message"},t.message))})))}}}]);