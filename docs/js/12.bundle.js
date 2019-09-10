(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1005:function(e,t,o){var n=o(1006);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(58)(n,r);n.locals&&(e.exports=n.locals)},1006:function(e,t,o){(e.exports=o(54)(!1)).push([e.i,".video-holder-component > .div-tag {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n",""])},1007:function(e,t){e.exports='<hr>\n<p>title: Video Holder\ncomponentid: component-videoholder\nvariantid: default</p>\n<h2 id="guid-videoholder-guid-default-component-react">guid: &#39;videoholder-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Video Holder Component\nComponent: &quot;Video&quot;\nSelector: &quot;&lt;Video/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Video&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component supports customization and configurations. The component name is <code>Video</code> and the selector is <code>&lt;Video/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Video\n    name=&quot;myYoutubeVideo&quot;\n    src={youtubeVideoSrc}\n    width=&quot;535px&quot;\n    height=&quot;300px&quot;\n    sourceType=&quot;stream&quot;\n    showControls={true}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>src</td>\n<td><code>string</code></td>\n<td>your image source, it can be string<sup>1</sup></td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string</code></td>\n<td>this is css width such as 100% or 300px</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string</code></td>\n<td>this is css height such as 100% or 300px</td>\n</tr>\n<tr>\n<td>name</td>\n<td><code>string</code></td>\n<td>element name</td>\n</tr>\n<tr>\n<td>sourceType</td>\n<td><code>string</code></td>\n<td><code>local</code> for locally stored video, <code>stream</code> for streamed video</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n<tr>\n<td>autoplay?</td>\n<td><code>boolean</code></td>\n<td>enable autoplay (some browser don&#39;t support this feature)</td>\n</tr>\n<tr>\n<td>loop?</td>\n<td><code>boolean</code></td>\n<td>enable loop after video is finished</td>\n</tr>\n<tr>\n<td>showControls?</td>\n<td><code>boolean</code></td>\n<td>show controls (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>showInfo?</td>\n<td><code>boolean</code></td>\n<td>show video information (<code>stream</code> only) (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>allowFullScreen?</td>\n<td><code>boolean</code></td>\n<td>allow toggling full screen (default: <code>false</code>)</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li>Video source is obtained either:<ul>\n<li><code>Local</code>: use <code>require()</code> method to require the video into your source code and use the returned string as <code>src</code>.</li>\n<li><code>Stream</code>: grab only the url from the <strong>embed</strong> sharing option and use it as <code>src</code>.</li>\n</ul>\n</li>\n</ol>\n'},1008:function(e,t,o){e.exports=o.p+"assets/videos/sample.mp4"},1033:function(e,t,o){"use strict";o.r(t);var n=o(36),r=o(0),d=(o(1005),function(e){return r.createElement("div",{className:"video-holder-component"+(e.className?" "+e.className:"")},"local"===e.sourceType&&r.createElement("video",{width:e.width,height:e.height,controls:e.showControls,autoPlay:e.autoplay,loop:e.loop,muted:!!e.autoplay},r.createElement("source",{src:e.src}),"Your browser does not support the video tag."),"stream"===e.sourceType&&r.createElement("iframe",{src:e.src+"?html5=1&amp;rel=0"+(e.showControls?"&amp;controls=1":"&amp;controls=0")+(e.showInfo?"&amp;showinfo=1&amp;title=1&amp;byline=1&amp;portrait=1":"&amp;showinfo=0&amp;title=0&amp;byline=0&amp;portrait=0")+(e.loop?"&amp;loop=1":"&amp;loop=0")+(e.autoplay?"&amp;autoplay=1":"&amp;autoplay=0"),width:e.width,height:e.height,frameBorder:0,allowFullScreen:e.allowFullScreen}))}),a=o(398),l=o(399).default,c=o(1007),s=o(1008),i=function(e){function t(t){return e.call(this,t)||this}return n.b(t,e),t.prototype.render=function(){var e=Object(a.a)(this.props.location.search,"mode");return r.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(l,{innerHTML:!0},c))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here are sample of a locally stored video (no controls, autoplay, loop)"),r.createElement("div",{className:"result wide"},r.createElement(d,{name:"myVideo",src:s,width:"535px",height:"300px",sourceType:"local",autoplay:!0,loop:!0})),r.createElement("p",null,"Here are sample video streamed from ",r.createElement("em",null,r.createElement("b",null,"Vimeo™"))),r.createElement("div",{className:"result wide"},r.createElement(d,{name:"myVimeoVideo",src:"https://player.vimeo.com/video/259422408",width:"535px",height:"300px",sourceType:"stream"})),r.createElement("p",null,"Here are sample video streamed from ",r.createElement("em",null,r.createElement("b",null,"YouTube™"))),r.createElement("div",{className:"result wide"},r.createElement(d,{name:"myYoutubeVideo",src:"https://www.youtube.com/embed/f19fctL72CY",width:"535px",height:"300px",sourceType:"stream",showControls:!0})))))},t}(r.Component);t.default=i},398:function(e,t,o){"use strict";function n(e,t){var o=RegExp("[?&]"+t+"=([^&]*)").exec(e);return o&&decodeURIComponent(o[1].replace(/\+/g," "))}o.d(t,"a",function(){return n})}}]);