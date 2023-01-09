"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[2489],{1678:function(e,n,o){o.r(n);var t=o(29416),l=o(2634),a=o(38535),s=o(91448),i=o(76166),r=o(44236),c=o(27378),d=o(95284),u=[{key:"sm",label:"sm",value:"sm",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"md",label:"md",value:"md",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{key:"lg",label:"lg",value:"lg",additionalProps:{wrapperProps:{className:"d-inline-block"}}}],m=[{label:"default",value:"default",key:"default",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{label:"left",value:"left",key:"left",additionalProps:{wrapperProps:{className:"d-inline-block"}}},{label:"right",value:"right",key:"bottom",additionalProps:{wrapperProps:{className:"d-inline-block"}}}];n.default=function(){var e=c.useState(!1),n=e[0],o=e[1],p=c.useRef(),f=(0,s.b)([{key:"controls",items:[{key:"size",label:"Size",controlType:"Radio",options:u,initialValue:u[1].value},{key:"position",label:"Position",controlType:"Radio",options:m,initialValue:m[0].value},{key:"centered",label:"centered",controlType:"Checkbox",initialValue:!1},{key:"fullscreen",label:"fullscreen",controlType:"Checkbox",initialValue:!1},{key:"trapfocus",label:"trapfocus",description:"Deprecated. Trap focus would be enabled by default.",controlType:"Checkbox",initialValue:!0},{key:"autoFocus",label:"autoFocus",description:"Automatically focus on first focusable element. Auto focus will be enabled by default.",controlType:"Checkbox",initialValue:!0},{key:"onEscape",label:"onEscape",controlType:"Checkbox",initialValue:!1},{key:"onBackdropDismiss",label:"onBackdropDismiss",controlType:"Checkbox",initialValue:!1}]}]),b=f.renderForm,E=f.state.controls,g=c.useCallback((function(){var e;o(!1),null===(e=p.current)||void 0===e||e.focus()}),[]),v=E,h=v.position,y=v.size,k=v.fullscreen,M=v.centered,L=v.trapfocus,R=v.autoFocus;return c.createElement(l.Z,{mainFile:d,example:c.createElement(c.Fragment,null,c.createElement(a.z,{ref:p,onClick:function(){return o(!n)}},"Toggle Modal"),c.createElement(i.u,{toggle:n,position:h,size:y,fullscreen:k,centered:M,trapfocus:L,autoFocus:R,onEscape:E.onEscape?g:null,onBackdropDismiss:E.onBackdropDismiss?g:null,"aria-labelledby":"modalHeader","aria-describedby":"modalDescription"},c.createElement("div",{id:"modalDescription",className:"modal-body order-1"},E.trapfocus||E.autoFocus?c.createElement("form",null,c.createElement("fieldset",null,c.createElement("legend",null,"Use tab to see focus trap in action"),c.createElement(r.f,{label:"Firstname"}),c.createElement(r.f,{label:"Lastname"}),c.createElement(a.z,{className:"mt-3",type:"button"},"Submit"))):c.createElement(c.Fragment,null,c.createElement("p",null,"Voluptate beatae quo est perferendis quam ut illum repellat voluptatem. Saepe deleniti voluptas impedit quidem ut rerum. Voluptatibus laboriosam sit libero deleniti accusamus debitis quia nobis alias. Quod voluptatem id et consequatur suscipit odio cumque vero ut. Ut ullam nisi qui. Doloremque libero nihil omnis porro nihil quo."),c.createElement("p",null,"Maxime recusandae cum. Quisquam facere quia corporis debitis. Illo itaque vel magni est dolores ut voluptatem nisi ullam. Ea nihil ipsa et dolor non illum iste quis. Sunt dolores sunt non porro."))),c.createElement("div",{className:"modal-footer order-2"},c.createElement(a.z,{onClick:g},"Close Modal")),c.createElement("div",{className:"modal-header order-0"},c.createElement("h3",{id:"modalHeader"},"Header"),c.createElement("button",{className:"close",type:"button",onClick:g})))),code:'<Modal toggle={toggle}>\n    <div className="modal-header">Header content</div>\n    <div className="modal-body">Modal content here</div>\n    <div className="modal-footer">Footer content</div>\n</Modal>',controls:b(),note:c.createElement(c.Fragment,null,c.createElement("h3",null,"Modal header, body and footer"),c.createElement("p",null,"Defining the modal's header, body and footer is done in a declarative style. Meaning that the developer is responsive for declaring these parts individually if needed. Remember to pass the following class names:"),c.createElement("ul",null,c.createElement("li",null,c.createElement("code",null,"modal-header")," for the ",c.createElement("code",null,"div")," representing the header"),c.createElement("li",null,c.createElement("code",null,"modal-body")," for the ",c.createElement("code",null,"div")," representing the body"),c.createElement("li",null,c.createElement("code",null,"modal-footer")," for the ",c.createElement("code",null,"div")," representing the footer")),"An example can be found below:",c.createElement(t.O,{language:"jsx"},'<Modal>\n    <div className="modal-header">Header content here</div>\n    <div className="modal-body">Body content here</div>\n    <div className="modal-footer">Footer content here</div>\n</Modal>'),c.createElement("hr",null),c.createElement("h3",null,"Header close button"),c.createElement("p",null,"To add a close button to the modal's header just pass a button of class \"close\" and it will be aligned correctly. You don't need to pass any content inside the button as it will be populated automatically with an × sign."),c.createElement(t.O,{language:"jsx"},'<Modal>\n    <div className="modal-header">\n        <h3>Modal header text</h3>\n        <button className="close" type="button" onClick={dismiss} />\n    </div>\n</Modal>'))})}},38535:function(e,n,o){o.d(n,{z:function(){return r}});var t=o(30808),l=o(27378),a=o(508),s=o.n(a),i=["theme","size","block"],r=l.memo(l.forwardRef((function(e,n){var o,a=e.theme,r=void 0===a?"primary":a,c=e.size,d=e.block,u=(0,t.Z)(e,i);return l.createElement("button",Object.assign({},u,{ref:n,className:s()("rc","btn","btn-"+r,(o={},o["btn-"+c]=c,o["btn-block"]=d,o),u.className)}),u.children)})))},76166:function(e,n,o){o.d(n,{u:function(){return p}});var t=o(30808),l=o(508),a=o.n(l),s=o(27378),i=o(31542),r=o(39275),c=o(40156),d=["autoFocus","centered","size","fullscreen","onEscape","onBackdropDismiss","position","toggle"],u="input, button, a",m="undefined"!=typeof document?document:null,p=s.memo(s.forwardRef((function(e,n){var o,l,p=e.autoFocus,f=void 0===p||p,b=e.centered,E=e.size,g=e.fullscreen,v=e.onEscape,h=e.onBackdropDismiss,y=e.position,k=e.toggle,M=(0,t.Z)(e,d),L=(0,r.H)(n),R=s.useState(!0),C=R[0],F=R[1],T=s.useCallback((function(e){switch(e.key){case c.s.Escape:v&&v(e);break;case c.s.Tab:e.preventDefault();var n=Array.from(L.current.querySelectorAll(u)),o=n.length;if(o>0){var t,l=n.indexOf(document.activeElement);null===(t=n[(l+(e.shiftKey?-1:1)+o)%o])||void 0===t||t.focus()}}}),[L,v]);return s.useEffect((function(){return k?(C&&F(!1),document.body.classList.add("modal-open")):document.body.classList.remove("modal-open"),function(){return document.body.classList.remove("modal-open")}}),[k]),m?(0,i.createPortal)(s.createElement("div",Object.assign({},M,{className:a()("rc","modal",(o={show:k,hide:!k&&!C,"modal-centered":b,"modal-aside":y&&"default"!==y&&!g},o["modal-aside-"+[y]]=y&&"default"!==y&&!g,o["modal-fullscreen"]=g,o),M.className),role:M.role||"dialog",tabIndex:M.tabIndex||-1,"aria-modal":"true",onClick:function(e){M.onClick&&M.onClick(e);var n=e.target;h&&n.classList.contains("rc")&&n.classList.contains("modal")&&h(e)},onAnimationEnd:function(e){var n;(M.onAnimationEnd&&M.onAnimationEnd(e),g&&k&&f&&!L.current.contains(document.activeElement))&&(null===(n=L.current.querySelector(u))||void 0===n||n.focus())},onKeyDown:T}),s.createElement("div",{ref:L,role:"document",className:a()("modal-dialog",(l={},l["modal-"+E]=E,l)),onAnimationEnd:function(){var e;k&&f&&!L.current.contains(document.activeElement)&&(null===(e=L.current.querySelector(u))||void 0===e||e.focus())}},s.createElement("div",{className:"modal-content"},M.children))),m.body):null})))},39275:function(e,n,o){o.d(n,{H:function(){return t.H},b:function(){return l.b}});var t=o(74118),l=o(91448)},95284:function(e,n,o){o.r(n),n.default='import classnames from "classnames";\nimport React from "react";\nimport { createPortal } from "react-dom";\nimport { useCombinedRefs } from "../hooks";\nimport { Key } from "../utils";\nimport "./modal.scss";\n\nexport type ModalPosition = "left" | "right" | "default";\nexport type ModalSize = "lg" | "md" | "sm";\ntype FocusableElements = HTMLInputElement | HTMLButtonElement | HTMLAnchorElement;\n\nexport type ModalProps = JSX.IntrinsicElements["div"] & {\n    /** Centers the modal in the middle of the screen. Default is `false` */\n    centered?: boolean;\n    /** Size of modal `lg` | `md` | `sm` */\n    size?: ModalSize;\n    /** Toggle fullscreen modal, default is `false` */\n    fullscreen?: boolean;\n    /** Event triggered when escape key is triggered */\n    onEscape?: (e: KeyboardEvent) => void;\n    /** Event triggered when the backdrop is clicked */\n    onBackdropDismiss?: React.MouseEventHandler<HTMLDivElement>;\n    /** Modal position. Available positions: `left`, `right` */\n    position?: ModalPosition;\n    /** Modal toggle */\n    toggle?: boolean;\n    /** @deprecated since version 6.0.0. Trap focus would be enabled by default. */\n    trapFocus?: boolean;\n    /** Automatically focuses on the first focusable element in the modal dialog */\n    autoFocus?: boolean;\n};\n\nconst FOCUSABLE_ELEMENTS_SELECTOR: string = "input, button, a";\n// This solution is meant to fix Gatsby build which complains that document doesn\'t exist in server-side rendering\nconst safeDocument: Document | null = typeof document !== "undefined" ? document : null;\n\n/** The modal component provides a solid foundation for creating dialogs or slideout modals */\nexport const Modal: React.FC<ModalProps> = React.memo(\n    React.forwardRef(({ autoFocus = true, centered, size, fullscreen, onEscape, onBackdropDismiss, position, toggle, ...props }: ModalProps, ref: React.ForwardedRef<HTMLDivElement>) => {\n        const dialogRef: React.MutableRefObject<HTMLDivElement> = useCombinedRefs(ref);\n        const [isPristine, setIsPristine] = React.useState<boolean>(true);\n\n        const onDialogKeyDown = React.useCallback<(e: React.KeyboardEvent) => void>(\n            (e: React.KeyboardEvent) => {\n                switch (e.key) {\n                    case Key.Escape:\n                        onEscape && onEscape(e as unknown as KeyboardEvent);\n                        break;\n                    case Key.Tab:\n                        // focus on next focusable element and trap the focus within the dialog (focus trap)\n                        e.preventDefault();\n                        const focusableElements: FocusableElements[] = Array.from(dialogRef.current.querySelectorAll<FocusableElements>(FOCUSABLE_ELEMENTS_SELECTOR));\n                        const focusableElementsLength: number = focusableElements.length;\n\n                        if (focusableElementsLength > 0) {\n                            const currentFocusedIndex: number = focusableElements.indexOf(document.activeElement as FocusableElements);\n                            const direction: number = e.shiftKey ? -1 : 1;\n                            const nextFocusIndex: number = (currentFocusedIndex + direction + focusableElementsLength) % focusableElementsLength;\n                            focusableElements[nextFocusIndex]?.focus();\n                        }\n\n                        break;\n                }\n            },\n            [dialogRef, onEscape]\n        );\n\n        React.useEffect(() => {\n            if (toggle) {\n                isPristine && setIsPristine(false);\n                document.body.classList.add("modal-open");\n            } else {\n                document.body.classList.remove("modal-open");\n            }\n\n            return () => document.body.classList.remove("modal-open");\n        }, [toggle]);\n\n        return !safeDocument\n            ? null\n            : createPortal(\n                  <div\n                      {...props}\n                      className={classnames(\n                          "rc",\n                          "modal",\n                          {\n                              show: toggle,\n                              hide: !toggle && !isPristine,\n                              "modal-centered": centered,\n                              "modal-aside": position && position !== "default" && !fullscreen,\n                              [`modal-aside-${[position]}`]: position && position !== "default" && !fullscreen,\n                              "modal-fullscreen": fullscreen,\n                          },\n                          props.className\n                      )}\n                      role={props.role || "dialog"}\n                      tabIndex={props.tabIndex || -1}\n                      aria-modal="true"\n                      onClick={(e) => {\n                          props.onClick && props.onClick(e);\n                          const target: HTMLDivElement = e.target as any;\n\n                          if (onBackdropDismiss && target.classList.contains("rc") && target.classList.contains("modal")) {\n                              onBackdropDismiss(e);\n                          }\n                      }}\n                      onAnimationEnd={(e) => {\n                          props.onAnimationEnd && props.onAnimationEnd(e);\n\n                          if (fullscreen && toggle && autoFocus && !dialogRef.current.contains(document.activeElement)) {\n                              dialogRef.current.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)?.focus();\n                          }\n                      }}\n                      onKeyDown={onDialogKeyDown}\n                  >\n                      <div\n                          ref={dialogRef}\n                          role="document"\n                          className={classnames("modal-dialog", { [`modal-${size}`]: size })}\n                          onAnimationEnd={() => {\n                              if (toggle && autoFocus && !dialogRef.current.contains(document.activeElement)) {\n                                  dialogRef.current.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)?.focus();\n                              }\n                          }}\n                      >\n                          <div className="modal-content">{props.children}</div>\n                      </div>\n                  </div>,\n                  safeDocument.body\n              );\n    })\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-modal-tsx-6f89bd14ed18e847aa3f.js.map