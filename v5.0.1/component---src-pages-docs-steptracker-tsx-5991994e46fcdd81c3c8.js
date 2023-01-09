"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[2740],{15537:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(27378),r=n(45141),i=n(57518),s=n(30808),a=n(508),o=n.n(a),c=["label","isActive"],p=l.forwardRef((function(e,t){var n=e.label,r=e.isActive,i=(0,s.Z)(e,c);return l.createElement("div",Object.assign({ref:t,className:o()("text",{active:r})},i),l.createElement("div",{className:"name"},n))})),m=["labelPosition","list","onClick","orientation","step","useNumbers"],u=l.createElement("svg",{name:"check",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.createElement("path",{d:"M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"})),b=l.memo(l.forwardRef((function(e,t){var n=e.labelPosition,r=void 0===n?"bottom":n,i=e.list,a=e.onClick,c=e.orientation,b=void 0===c?"horizontal":c,d=e.step,v=e.useNumbers,k=(0,s.Z)(e,m),f=l.useState("vertical"===b),h=f[0],y=f[1],S=l.useState([]),g=S[0],C=S[1],E=l.useCallback((function(e){return 100/(g.length-1)*e+"%"}),[g]),w=l.useCallback((function(e,t){var n;return(n={})[e]=E(t),n}),[E]);return l.useEffect((function(){y("vertical"===b)}),[b]),l.useEffect((function(){C((i||l.Children.toArray(k.children)).map((function(e,t){return t})))}),[k.children,i]),l.createElement("div",Object.assign({},k,{ref:t,className:o()("rc step-tracker",b,r,k.className,{clickable:a})}),l.createElement("div",{className:"step-wrapper"},l.createElement("div",{className:"line"},l.createElement("div",{className:"progress",style:w(h?"height":"width",d)})),g.map((function(e){return l.createElement("div",{className:"step"+(d===e?" active":"")+(v?" numbered":""),style:w(h?"top":"left",e),onClick:function(){return a&&a(e)},key:e},l.createElement("div",{className:"step-border"}),u,l.createElement("div",{className:"number"},e+1))}))),l.createElement("div",{className:"text-wrapper"},null==i?void 0:i.map((function(e,t){return l.createElement(p,Object.assign({key:t,isActive:d===t,style:h?null:w("width",1)},e))})),l.Children.map(k.children,(function(e,t){return l.isValidElement(e)?l.cloneElement(e,{isActive:d===t,style:h?null:w("width",1)}):e}))))}))),d=l.memo((function(){var e,t,s,a,o=n(3153),c=[{label:"vertical",value:"vertical",key:"vertical"},{label:"horizontal",value:"horizontal",key:"horizontal"}],m=[{label:"bottom",value:"bottom",key:"bottom"},{label:"top",value:"top",key:"top"},{label:"right",value:"right",key:"right"},{label:"left",value:"left",key:"left"}],u=l.useState(0),d=u[0],v=u[1],k=l.useMemo((function(){return[{key:"controls",items:[{key:"orientation",value:c[0].value,label:"Orientation",options:c,controlType:"Dropdown"},{key:"direction",value:m[0].value,label:"Direction",options:m,controlType:"Dropdown"},{key:"step",value:d,min:0,max:3,label:"Step",controlType:"Stepper"},{label:"Use numbers",key:"useNumbers",value:!1,controlType:"Checkbox"}]}]}),[d]),f=(0,i.b)(k),h=f[0],y=f[1],S=f[2];return l.useEffect((function(){var e;v(null===(e=y.controls)||void 0===e?void 0:e.step)}),[null===(e=y.controls)||void 0===e?void 0:e.step]),l.useEffect((function(){d!==y.controls.step&&S(Object.assign({},y,{controls:Object.assign({},y.controls,{step:d})}))}),[d]),l.createElement(r.Z,{mainFile:o,example:l.createElement(b,{step:d,onClick:v,orientation:null===(t=y.controls)||void 0===t?void 0:t.orientation,labelPosition:null===(s=y.controls)||void 0===s?void 0:s.direction,useNumbers:null===(a=y.controls)||void 0===a?void 0:a.useNumbers},[{label:"First"},{label:"Second"},{label:"Third"},{label:"Forth"}].map((function(e,t){return l.createElement(p,{label:e.label,key:t})}))),code:'<StepTracker list={[{ label: "hello" }]} step={0} onClick={null} />',controls:h()})}))},3153:function(e,t,n){n.r(t),t.default='import React from "react";\nimport classnames from "classnames";\nimport "./steptracker.scss";\nimport StepLabel, { StepLabelProps } from "./StepLabel";\n\nconst checkIcon: JSX.Element = (\n    <svg name="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n        <path d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z" />\n    </svg>\n);\n\nexport type StepTrackerLabelPosition = "right" | "left" | "bottom" | "top";\nexport type StepTrackerLabelOrientation = "horizontal" | "vertical";\n\nexport type StepTrackerProps = Omit<JSX.IntrinsicElements["div"], "onClick"> & {\n    /** Position of label in step tracker */\n    labelPosition?: StepTrackerLabelPosition;\n    /** list of item in step tracker */\n    list?: Array<StepLabelProps>;\n    /** callback when step tracker item clicked */\n    onClick?: (index: number) => void;\n    /** To display step tracker vertically or horizontally */\n    orientation?: StepTrackerLabelOrientation;\n    /** Current/ active step */\n    step: number;\n    /** Use numbers for each step */\n    useNumbers?: boolean;\n};\n/** Step trackers illustrate the steps in a multi step process */\nexport const StepTracker: React.FC<StepTrackerProps> = React.memo(\n    React.forwardRef(({ labelPosition = "bottom", list, onClick, orientation = "horizontal", step, useNumbers, ...props }: StepTrackerProps, ref: React.ForwardedRef<HTMLDivElement>) => {\n        const [isVertical, setIsVertical] = React.useState<boolean>(orientation === "vertical");\n        const [stepList, setStepList] = React.useState<Array<number>>([]);\n\n        const getProgress = React.useCallback(\n            (pos: number): string => {\n                return (100 / (stepList.length - 1)) * pos + "%";\n            },\n            [stepList]\n        );\n\n        const getStyles = React.useCallback(\n            (key: keyof React.CSSProperties, pos: number): React.CSSProperties => {\n                return { [key]: getProgress(pos) };\n            },\n            [getProgress]\n        );\n\n        React.useEffect(() => {\n            setIsVertical(orientation === "vertical");\n        }, [orientation]);\n\n        React.useEffect(() => {\n            setStepList((list ? list : React.Children.toArray(props.children)).map((value: null, i: number) => i));\n        }, [props.children, list]);\n\n        return (\n            <div {...props} ref={ref} className={classnames("rc step-tracker", orientation, labelPosition, props.className, { clickable: onClick })}>\n                <div className="step-wrapper">\n                    <div className="line">\n                        <div className="progress" style={getStyles(isVertical ? "height" : "width", step)} />\n                    </div>\n                    {stepList.map((i: number) => (\n                        <div\n                            className={"step" + (step === i ? " active" : "") + (useNumbers ? " numbered" : "")}\n                            style={getStyles(isVertical ? "top" : "left", i)}\n                            onClick={() => onClick && onClick(i)}\n                            key={i}\n                        >\n                            <div className="step-border" />\n                            {checkIcon}\n                            <div className="number">{i + 1}</div>\n                        </div>\n                    ))}\n                </div>\n                <div className="text-wrapper">\n                    {list?.map((item: StepLabelProps, i: number) => (\n                        <StepLabel key={i} isActive={step === i} style={isVertical ? null : getStyles("width", 1)} {...item} />\n                    ))}\n                    {React.Children.map(props.children, (Child: React.ReactElement<StepLabelProps>, i: number) =>\n                        React.isValidElement<React.FC<StepLabelProps>>(Child)\n                            ? React.cloneElement<any>(Child, {\n                                  isActive: step === i,\n                                  style: isVertical ? null : getStyles("width", 1),\n                              })\n                            : Child\n                    )}\n                </div>\n            </div>\n        );\n    })\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-steptracker-tsx-5991994e46fcdd81c3c8.js.map