"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[4848],{76157:function(e,n,t){t.r(n);var l=t(4769),o=t(27378),a=t(2634),s=t(91523),r=t(91448),i=t(29416),c=t(9608),p=["Malaysia","China","Japan","Singapore","Iraq","Kuwait","Iran","Jordan","Slovenia","Germany","France","Spain","Nicaragua","Ecuador","Brazil","Argentina","Guinea","Nigeria","Morocco","Tanzania"],d=["Asia","Middle east","Europe","South America","Africa"];n.default=function(){var e=o.useState(),n=e[0],t=e[1],u=o.useState([]),h=u[0],m=u[1],f=o.useState([]),b=f[0],g=f[1],w=(0,r.b)([{key:"controls",items:[{key:"multiple",label:"multiple",controlType:"Checkbox",initialValue:!1},{key:"searchable",label:"searchable",controlType:"Checkbox",initialValue:!1},{key:"clearable",label:"clearable",controlType:"Checkbox",initialValue:!1},{key:"disabled",label:"disabled",controlType:"Checkbox",initialValue:!1},{key:"useGroups",label:"Render in groups",description:"Wrap dropdown items with optgroup to group them",controlType:"Checkbox",initialValue:!1},{key:"useDividers",label:"Add dividers",description:"Dividers are added using div with className dropdown-divider",controlType:"Checkbox",initialValue:!1}]}]),y=w.renderForm,v=w.state.controls;return o.useEffect((function(){var e=[];if(v.useGroups){var n=[];p.forEach((function(t,a){n.push(o.createElement("option",{key:"item-"+a,value:t},t)),Math.round((a+1)/4)===(a+1)/4&&(e.push(o.createElement("optgroup",{key:"group-"+a,label:d[Math.floor(a/4)]},(0,l.Z)(n))),v.useDividers&&e.push(o.createElement("div",{key:"divider-"+a,className:"dropdown-divider"})),n=[])}))}else p.forEach((function(n,t){e.push(o.createElement("option",{key:"item-"+t,value:n},n)),v.useDividers&&Math.round((t+1)/4)===(t+1)/4&&e.push(o.createElement("div",{key:"divider-"+t,className:"dropdown-divider"}))}));g(e)}),[v.useGroups,v.useDividers]),o.createElement(a.Z,{mainFile:c,example:o.createElement("div",{className:"w-100"},o.createElement(s.L,{value:v.multiple?h:n,onChange:v.multiple?null:function(e){return t(e.target.value)},onMultipleChange:m,placeholder:"Select...",multiple:!!v.multiple,searchable:!!v.searchable,clearable:!!v.clearable,disabled:!!v.disabled},b)),code:'<Dropdown value={value} onChange={e => setValue(e.target.value)}>\n    <option value="first">First</option>\n    <option value="Second">Second</option>\n    <option value="third">Third</option>\n</Dropdown>',controls:y(),note:o.createElement(o.Fragment,null,o.createElement("h4",null,"Select multiple"),o.createElement("p",null,"The native select element exposes APIs similar to an HTML input element. Passing a value and retrieving a value from the element using the change event is all the same. However, if you are using the dropdown with ",o.createElement("code",null,"multiple")," enabled, the native APIs will change. To get a list of the selected options in a multi-select element, you need to do the following:"),o.createElement(i.O,{language:"typescript"},"function changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {\n    const selectedOptions: string[] = Array.from(event.target.options)\n        .filter((option) => option.selected)\n        .map((option) => option.value);\n    \n    setValue(selectedOptions);\n}"),o.createElement("p",null,"This might not be as convenient to work with as the rest of the elements, therefore, we have provided 2 ways of simplifying this interaction"),o.createElement("ol",null,o.createElement("li",null,"Using ",o.createElement("code",null,"onMultipleChange"),":"),o.createElement("p",null,"Dropdown component allows you to pass your setter function to ",o.createElement("code",null,"onMultipleChange")," directly which returns an array of selected options like this:"),o.createElement(i.O,{language:"jsx"},'<Dropdown value={value} onMultipleChange={setValue} multiple>\n    <option value="1">First</option>\n    <option value="2">Second</option>\n    <option value="3">Third</option>\n    <option value="4">Fourth</option>\n</Dropdown>'),o.createElement("br",null),o.createElement("li",null,"Using ",o.createElement("code",null,"getValueOfMultipleSelect")),o.createElement("p",null,"We also exported a method ",o.createElement("code",null,"getValueOfMultipleSelect")," for you to use that will just do the extraction of the values for you. This is especially useful if you have a generic ",o.createElement("code",null,"changeHandler")," method. For example:"),o.createElement(i.O,{language:"typescript"},'function genericChangeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {\n    if (event.target.multiple) { // Dropdowns\n        setValue(getValueOfMultipleSelect(event.target));\n    } else if (event.target.type === "checkbox") { // Checkboxes\n        setValue(event.target.checked);\n    } else { // Everything else\n        setValue(event.target.value);\n    }\n}')))})}},9608:function(e,n,t){t.r(n),n.default='import { randomId } from "@sebgroup/frontend-tools/randomId";\nimport classnames from "classnames";\nimport React from "react";\nimport { createPortal } from "react-dom";\nimport { CloseButton } from "../CloseButton";\nimport { FeedbackIndicator, Indicator } from "../FeedbackIndicator/FeedbackIndicator";\nimport { Key } from "../utils/keyboardHelper";\nimport { CustomDropdownItem } from "./CustomDropdownItem";\nimport { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";\nimport type { BodyScrollOptions } from "body-scroll-lock";\n\nconst bodyScrollOptions: BodyScrollOptions = {\n    reserveScrollBarGap: true,\n};\n\nimport "./dropdown.scss";\n\nexport interface DropdownText {\n    selectAll?: string;\n    noResult?: string;\n    emptyList?: string;\n    search?: string;\n}\n\nconst defaultText: Required<DropdownText> = {\n    selectAll: "Select all",\n    emptyList: "List is empty",\n    noResult: "No result",\n    search: "Search...",\n};\n\nexport function getValueOfMultipleSelect(selectOptions: Array<HTMLOptionElement>): string[] {\n    return Array.from(selectOptions)\n        .filter((option) => option.selected)\n        .map((option) => option.value);\n}\n\n// This solution is meant to fix Gatsby build which complains that document and window doesn\'t exist in server-side rendering\nconst safeDocument: Document | null = typeof document !== "undefined" ? document : null;\nconst safeWindow: Window | null = typeof window !== "undefined" ? window : null;\n\nexport type DropdownProps = Omit<JSX.IntrinsicElements["select"], "value"> & {\n    /** Props for the select\'s wrapper (div) */\n    wrapperProps?: JSX.IntrinsicElements["div"];\n    /** The value of the dropdown */\n    value?: string | string[];\n    /** An event triggered when a select of type multiple is changed returning an array of the selected values */\n    onMultipleChange?: (selected: string[]) => void;\n    /** Allows searching throw the dropdown */\n    searchable?: boolean;\n    /** Allows clearing the dropdown with a clear button */\n    clearable?: boolean;\n    /** Allows setting custom label to be displayed for selected item */\n    selectedLabel?: string | ((value: string | string[]) => string | string[]);\n    /** Custom texts to be dispalyed in different parts of the dropdown */\n    text?: DropdownText;\n    /** Indicator for error, warning or success */\n    indicator?: Indicator;\n};\n\nexport const Dropdown: React.FC<DropdownProps> = React.forwardRef(\n    ({ wrapperProps = {}, text = {}, onMultipleChange, searchable, clearable, selectedLabel, indicator, ...props }: DropdownProps, ref) => {\n        const [dropdownId] = React.useState<string>(randomId("dd-"));\n        const [toggleId] = React.useState<string>(randomId("ddt-"));\n        const [selectAllId] = React.useState<string>(randomId("sa-"));\n        const [show, setShow] = React.useState<boolean>(false);\n        const [allSelected, setAllSelected] = React.useState<boolean>(false);\n        const [searchKeyword, setSearchKeyword] = React.useState<string>("");\n        const [menuStyle, setMenuStyle] = React.useState<React.CSSProperties>({});\n        const [label, setLabel] = React.useState<string>();\n        const [selectRef, setSelectRef] = React.useState<HTMLSelectElement>(null);\n        const [selectRefOptions, setSelectRefOptions] = React.useState<Array<HTMLOptionElement>>([]);\n        // focused index should be defaulted to the first valued option (not `select-all` option) if dropdown is not searchable\n        const [focusedIndex, setFocusedIndex] = React.useState<number>(searchable ? -1 : props.multiple ? 1 : 0);\n        const buttonRef = React.useRef<HTMLButtonElement>();\n        const dropdownRef = React.useRef<HTMLDivElement>();\n        const menuRef = React.useRef<HTMLUListElement>();\n        const searchRef = React.useRef<HTMLInputElement>();\n\n        const [prestine, setPrestine] = React.useState<boolean>(true);\n\n        const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(safeWindow?.navigator?.userAgent);\n\n        const handleDropdownMenuOpen = React.useCallback(() => {\n            setShow(true);\n            disableBodyScroll(menuRef.current, bodyScrollOptions);\n        }, [menuRef]);\n\n        const handleDropdownMenuClose = React.useCallback(() => {\n            setShow(false);\n            enableBodyScroll(menuRef.current);\n        }, [menuRef]);\n\n        const changeValue = React.useCallback(\n            (value: string) => {\n                if (props.multiple) {\n                    const current = selectRefOptions.find((option) => option.value === value);\n                    current.selected = !current.selected;\n                } else {\n                    selectRef.value = value;\n                    handleDropdownMenuClose();\n                }\n                selectRef.dispatchEvent(new Event("change", { bubbles: true }));\n                props.multiple && onMultipleChange && onMultipleChange(getValueOfMultipleSelect(selectRefOptions));\n            },\n            [props.multiple, selectRef, selectRefOptions, onMultipleChange, handleDropdownMenuClose]\n        );\n\n        const getOptionsRef = React.useCallback(() => Array.from(menuRef.current?.querySelectorAll<HTMLLIElement>(".custom-control") || []), [searchKeyword]);\n\n        const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => changeValue(e.target.value), [changeValue]);\n\n        const selectAll = React.useCallback(\n            (forceValue?: boolean | React.ChangeEvent<HTMLInputElement>) => {\n                selectRefOptions.forEach((option: HTMLOptionElement) => {\n                    if (!option.disabled) {\n                        option.selected = typeof forceValue === "boolean" ? forceValue : !allSelected;\n                    } else {\n                        option.selected = false;\n                    }\n                });\n                typeof forceValue === "boolean" && (selectRef.value = "");\n                selectRef.dispatchEvent(new Event("change", { bubbles: true }));\n                props.multiple && onMultipleChange && onMultipleChange(getValueOfMultipleSelect(selectRefOptions));\n            },\n            [allSelected, props.multiple, selectRefOptions, selectRef]\n        );\n\n        const isAllSelected = React.useCallback((): boolean => {\n            return selectRefOptions.every((option: HTMLOptionElement) => {\n                return option.disabled ? true : option.selected;\n            });\n        }, [selectRefOptions]);\n\n        const toggleMenu = React.useCallback(\n            (event: React.MouseEvent<HTMLButtonElement>) => {\n                if (show) {\n                    handleDropdownMenuClose();\n                } else {\n                    const rect = event.currentTarget.getBoundingClientRect();\n                    const top: number = rect.top + rect.height;\n                    const left: number = rect.left;\n                    const bottom: number = window.innerHeight - rect.y + 4;\n                    const minWidth: number = rect.width;\n                    if (window.innerHeight - top < 200) {\n                        setMenuStyle({ minWidth, bottom, left, maxHeight: rect.y - 10 });\n                    } else {\n                        setMenuStyle({ minWidth, top, left, maxHeight: window.innerHeight - top - 12 });\n                    }\n                    handleDropdownMenuOpen();\n                }\n                prestine && setPrestine(false);\n            },\n            [show, prestine, handleDropdownMenuOpen, handleDropdownMenuClose]\n        );\n\n        const toggleOption = React.useCallback(\n            (e: React.KeyboardEvent) => {\n                const optionRef: HTMLLIElement = getOptionsRef()[focusedIndex];\n\n                if (optionRef) {\n                    e.preventDefault();\n                    optionRef.classList.contains("select-all") ? selectAll() : changeValue(optionRef.querySelector("input")?.value);\n                }\n            },\n            [focusedIndex, changeValue, getOptionsRef, selectAll]\n        );\n\n        const onChange = React.useCallback(\n            (event: React.ChangeEvent<HTMLSelectElement>) => {\n                props.multiple && onMultipleChange && onMultipleChange(getValueOfMultipleSelect(Array.from(event.target.options)));\n                props.onChange && props.onChange(event);\n            },\n            [props.multiple, props.onChange, onMultipleChange]\n        );\n\n        const onDropDownKeyDown = React.useCallback(\n            (e: React.KeyboardEvent) => {\n                const optionsRef: Array<HTMLLIElement> = getOptionsRef();\n\n                switch (e.key) {\n                    case Key.Escape:\n                        handleDropdownMenuClose();\n                        break;\n                    case Key.ArrowDown:\n                    case Key.ArrowUp:\n                        e.preventDefault();\n                        const direction: number = e.key === Key.ArrowDown ? 1 : -1;\n                        setFocusedIndex((focusedIndex) => (focusedIndex + direction + optionsRef.length) % optionsRef.length);\n                        break;\n                    case Key.Home:\n                        setFocusedIndex(0);\n                        break;\n                    case Key.End:\n                        setFocusedIndex(optionsRef.length - 1);\n                        break;\n                    case Key.Enter:\n                        toggleOption(e);\n                        !props.multiple && handleDropdownMenuClose();\n                        break;\n                    case Key.Space:\n                        !searchable && toggleOption(e);\n                        !props.multiple && handleDropdownMenuClose();\n                        break;\n                    case Key.Tab:\n                        e.preventDefault();\n                        handleDropdownMenuClose();\n                        break;\n                    default:\n                        if (!searchable) {\n                            // TODO: printable characters keyboard support @see https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html\n                        }\n                        break;\n                }\n            },\n            [props.multiple, searchable, getOptionsRef, toggleOption, handleDropdownMenuClose]\n        );\n\n        const onSearchInputKeyDown = React.useCallback(\n            (e: React.KeyboardEvent) => {\n                switch (e.key) {\n                    case Key.Escape:\n                        e.stopPropagation();\n                        setSearchKeyword("");\n                        handleDropdownMenuClose();\n                        break;\n                    case Key.Space:\n                        e.stopPropagation();\n                        break;\n                }\n            },\n            [handleDropdownMenuClose]\n        );\n\n        /** TODO: Can be extracted to a component */\n        const getOptions = () => {\n            /**\n             * running index should exclude the `select-all` option as it is not part of this function scope,\n             * hence the initial value for it should be determine if the `select-all` option is visible on screen.\n             *\n             * `select-all` option is only visible when search keyword is empty or multiple flag is true\n             */\n            let runningIndex: number = searchKeyword.length > 0 || !props.multiple ? 0 : 1;\n            const list = React.Children.map(props.children, (Child) => {\n                if (!React.isValidElement(Child)) {\n                    return Child;\n                } else {\n                    const type: string = (Child.type as any)?.name || Child.type;\n                    const filteredBySearch = (element: React.ReactElement<any>): boolean => {\n                        if (searchKeyword) {\n                            if (React.isValidElement<any>(element)) {\n                                const keyword: string = searchKeyword.toLowerCase().trim();\n                                const text: string = String(element.props?.children).toLowerCase().trim();\n                                return text.indexOf(keyword) < 0;\n                            } else {\n                                return true;\n                            }\n                        }\n                        return false;\n                    };\n                    /** Radio buttons should be grouped with a name */\n                    const name: string = props.multiple ? null : toggleId;\n                    switch (type) {\n                        case "option":\n                            return filteredBySearch(Child) ? null : (\n                                <CustomDropdownItem\n                                    {...Child.props}\n                                    multiple={props.multiple}\n                                    name={name}\n                                    value={Child.props.value}\n                                    checked={Array.isArray(props.value) ? props.value.includes(Child.props.value) : props.value == Child.props.value}\n                                    focused={focusedIndex === runningIndex++}\n                                    onChange={handleChange}\n                                >\n                                    {Child.props.children}\n                                </CustomDropdownItem>\n                            );\n                        case "optgroup":\n                            const label = <label className="optgroup-label">{Child.props?.label}</label>;\n                            return [\n                                searchKeyword ? null : label,\n                                ...React.Children.toArray(Child.props.children).map((groupChild: React.ReactElement<any>) => {\n                                    return filteredBySearch(groupChild) ? null : (\n                                        <CustomDropdownItem\n                                            {...groupChild.props}\n                                            multiple={props.multiple}\n                                            name={name}\n                                            value={groupChild.props.value}\n                                            checked={Array.isArray(props.value) ? props.value.includes(groupChild.props.value) : props.value == groupChild.props.value}\n                                            focused={focusedIndex === runningIndex++}\n                                            onChange={handleChange}\n                                        >\n                                            {groupChild.props.children}\n                                        </CustomDropdownItem>\n                                    );\n                                }),\n                            ];\n                        default:\n                            return searchKeyword ? null : Child;\n                    }\n                }\n            });\n            return list?.length ? list : searchKeyword ? <p>{text.noResult || defaultText.noResult}</p> : <p>{text.emptyList || defaultText.emptyList}</p>;\n        };\n\n        const measuredSelectRef = React.useCallback((node: HTMLSelectElement) => {\n            if (typeof ref === "function") {\n                // to pass ref back to parents\n                ref(node);\n            } else if (!!ref) {\n                (ref as any).current = node;\n            }\n            if (node !== null) {\n                setSelectRef(node);\n            }\n        }, []);\n\n        React.useEffect(() => {\n            !isMobile && props.multiple && setAllSelected(isAllSelected());\n        }, [props.value, props.multiple, isAllSelected]);\n\n        React.useEffect(() => {\n            !searchable && setSearchKeyword("");\n        }, [searchable]);\n\n        React.useEffect(() => {\n            if (!!selectRef) {\n                setSelectRefOptions(Array.from(selectRef.options));\n            }\n        }, [selectRef]);\n\n        React.useEffect(() => {\n            if (!isMobile) {\n                const detectBlur = (event: MouseEvent) => {\n                    if (!dropdownRef.current.contains(event.target as any) && !menuRef.current.contains(event.target as any)) {\n                        handleDropdownMenuClose();\n                    }\n                };\n\n                const handleScroll = (event: WheelEvent): void => {\n                    if (!menuRef.current.contains(event.target as any)) {\n                        handleDropdownMenuClose();\n                    }\n                };\n\n                if (show) {\n                    (searchable ? searchRef : menuRef).current?.focus();\n                    const selectedOption = menuRef.current?.querySelector<HTMLLIElement>(".custom-control.selected");\n                    selectedOption && setFocusedIndex(getOptionsRef().indexOf(selectedOption));\n                    document.addEventListener("click", detectBlur);\n                    window.addEventListener("wheel", handleScroll);\n                } else {\n                    !prestine && buttonRef.current?.focus();\n                    document.removeEventListener("click", detectBlur);\n                    window.removeEventListener("wheel", handleScroll);\n                }\n\n                return () => {\n                    document.removeEventListener("click", detectBlur);\n                    window.removeEventListener("wheel", handleScroll);\n                };\n            }\n        }, [show, prestine, handleDropdownMenuClose]);\n\n        React.useEffect(() => {\n            if (selectedLabel && typeof selectedLabel === "string") {\n                !isMobile && setLabel(selectedLabel || props.placeholder);\n            } else if (selectedLabel && typeof selectedLabel === "function") {\n                const newLabel: string | string[] = selectedLabel(props.value);\n                !isMobile && setLabel((Array.isArray(newLabel) ? newLabel.join(", ") : newLabel) || props.placeholder);\n            } else {\n                !isMobile && setLabel((Array.isArray(props.value) ? props.value.join(", ") : props.value) || props.placeholder);\n            }\n        }, [props.value, props.placeholder, selectedLabel]);\n\n        React.useEffect(() => {\n            // scroll the focused item into view\n            getOptionsRef()?.[focusedIndex]?.scrollIntoView?.(false);\n        }, [focusedIndex, getOptionsRef]);\n\n        React.useEffect(() => {\n            return () => {\n                clearAllBodyScrollLocks();\n            };\n        }, []);\n\n        return (\n            <div {...wrapperProps} className={classnames("rc custom-dropdown", wrapperProps.className)}>\n                {!isMobile && (\n                    <div className={classnames("dropdown", { show, clearable })} ref={dropdownRef}>\n                        <FeedbackIndicator type={indicator?.type} message={null}>\n                            <button\n                                ref={buttonRef}\n                                className="btn btn-secondary dropdown-toggle"\n                                type="button"\n                                id={toggleId}\n                                data-toggle="dropdown"\n                                aria-expanded={show || null}\n                                aria-haspopup="listbox"\n                                aria-labelledby={`${props["aria-labelledby"] ? `${props["aria-labelledby"]} ` : ""}${toggleId}`}\n                                onClick={toggleMenu}\n                                disabled={props.disabled}\n                            >\n                                <span>{label}</span>\n                            </button>\n                        </FeedbackIndicator>\n                        {clearable && <CloseButton onClick={() => selectAll(false)} disabled={props.disabled} />}\n                        {!safeDocument\n                            ? null\n                            : createPortal(\n                                  <ul\n                                      ref={menuRef}\n                                      className={classnames("rc dropdown-menu", { show })}\n                                      role="listbox"\n                                      aria-labelledby={props["aria-labelledby"]}\n                                      aria-activedescendant={show ? getOptionsRef()[focusedIndex]?.querySelector<HTMLInputElement>("input").id : null}\n                                      style={{ ...menuStyle }}\n                                      tabIndex={-1}\n                                      onKeyDown={onDropDownKeyDown}\n                                  >\n                                      {searchable && (\n                                          <input\n                                              ref={searchRef}\n                                              type="text"\n                                              className="form-control"\n                                              role="combobox"\n                                              aria-activedescendant={show ? getOptionsRef()[focusedIndex]?.querySelector<HTMLInputElement>("input").id : null}\n                                              aria-autocomplete="list"\n                                              aria-expanded={show}\n                                              aria-haspopup="true"\n                                              aria-owns={dropdownId}\n                                              placeholder={text.search || defaultText.search}\n                                              value={searchKeyword}\n                                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}\n                                              onKeyDown={onSearchInputKeyDown}\n                                          />\n                                      )}\n                                      {/* Select all button */}\n                                      {props.multiple && !searchKeyword ? (\n                                          React.Children.count(props.children) ? (\n                                              <>\n                                                  <li className={classnames("custom-control custom-checkbox select-all", { focused: focusedIndex === 0 })}>\n                                                      <input id={selectAllId} name="inline" type="checkbox" className="custom-control-input" checked={allSelected} hidden onChange={selectAll} />\n                                                      <label className="custom-control-label" htmlFor={selectAllId}>\n                                                          {text.selectAll || defaultText.selectAll}\n                                                      </label>\n                                                  </li>\n                                                  <div className="dropdown-divider" />\n                                              </>\n                                          ) : (\n                                              text.emptyList || defaultText.emptyList\n                                          )\n                                      ) : null}\n\n                                      {getOptions()}\n                                  </ul>,\n                                  safeDocument.body\n                              )}\n                    </div>\n                )}\n                <FeedbackIndicator type={indicator?.type} message={indicator?.message}>\n                    <select {...props} ref={measuredSelectRef} onChange={onChange} className={classnames("custom-select", props.className)} hidden={!isMobile}>\n                        {/* select always picks the first item by default. Therefore the first needs to be initialized here */}\n                        {!props.value && (\n                            <option disabled value="" hidden>\n                                {props.placeholder}\n                            </option>\n                        )}\n                        {React.Children.toArray(props.children).filter((Child: any) => ["option", "optgroup"].includes(Child.type))}\n                    </select>\n                </FeedbackIndicator>\n\n                {clearable && isMobile && <CloseButton onClick={() => selectAll(false)} disabled={props.disabled} />}\n            </div>\n        );\n    }\n);\n'}}]);
//# sourceMappingURL=component---src-pages-docs-dropdown-tsx-9332779928481e0bb9bb.js.map