"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[339],{45772:function(e,l,t){t.r(l),t.d(l,{default:function(){return m}});var n=t(27378),o=t(45141),s=t(30808),a=t(75418),r=t(508),c=t.n(r),i=["wrapperProps","label","inline"],p=n.forwardRef((function(e,l){var t=e.wrapperProps,o=e.label,r=e.inline,p=(0,s.Z)(e,i),d=n.useState(p.id),m=d[0],u=d[1];return n.useEffect((function(){return u(p.id||(o?(0,a.k)("toggle-"):null))}),[p.id]),n.createElement("div",Object.assign({},t,{className:c()("rc","custom-control","custom-slide-toggle",{inline:r},null==t?void 0:t.className)}),n.createElement("input",Object.assign({},p,{ref:l,className:c()("custom-control-input",p.className),id:m,type:"checkbox",role:p.role||"switch"})),o&&n.createElement("label",{className:"custom-control-label",htmlFor:m},o))})),d=t(57518),m=function(){var e,l,s=t(20465),a="Lorem ipsum",r=[{key:"controls",items:[{key:"label",value:a,label:"Label",placeholder:"Label",controlType:"Text"},{label:"Optional configurations",key:"checkboxes",controlType:"Option",options:[{label:"disabled",value:"disabled",key:"disabled"}]}]}],c=(0,d.b)(r),i=c[0],m=c[1].controls;return n.createElement(o.Z,{mainFile:s,example:n.createElement(p,{name:"myToggle",disabled:(e="disabled",null===(l=m.checkboxes)||void 0===l?void 0:l.find((function(l){return l===e}))),label:(null==m?void 0:m.label)||a}),code:'<Toggle name="myToggle" value={this.state.toggleValue} onChange={(event) => { this.setState({ toggleValue: event.target.checked }); }} />',controls:i()})}},20465:function(e,l,t){t.r(l),l.default='import React from "react";\nimport { randomId } from "@sebgroup/frontend-tools/randomId";\nimport classnames from "classnames";\nimport "./toggle.scss";\n\nexport type ToggleProps = JSX.IntrinsicElements["input"] & {\n    /** Element label */\n    label?: string;\n    /** to set if the toggle is inline with other element */\n    inline?: boolean;\n    /** properties that related to div element */\n    wrapperProps?: JSX.IntrinsicElements["div"];\n};\n/** A Slide toggle allows the user to change between two states */\nexport const Toggle: React.FC<ToggleProps> = React.forwardRef(({ wrapperProps, label, inline, ...props }: ToggleProps, ref: React.ForwardedRef<HTMLInputElement>) => {\n    const [id, setId] = React.useState<string>(props.id);\n\n    React.useEffect(() => setId(props.id || (!!label ? randomId("toggle-") : null)), [props.id]);\n\n    return (\n        <div {...wrapperProps} className={classnames("rc", "custom-control", "custom-slide-toggle", { inline }, wrapperProps?.className)}>\n            <input {...props} ref={ref} className={classnames("custom-control-input", props.className)} id={id} type="checkbox" role={props.role || "switch"} />\n            {label && (\n                <label className="custom-control-label" htmlFor={id}>\n                    {label}\n                </label>\n            )}\n        </div>\n    );\n});\n'}}]);
//# sourceMappingURL=component---src-pages-docs-toggle-tsx-755080b15e04f4a0b50f.js.map