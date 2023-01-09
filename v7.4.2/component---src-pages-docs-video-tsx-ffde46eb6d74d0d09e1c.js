"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[3141],{31122:function(e,o,n){n.r(o),n.d(o,{default:function(){return d}});var t=n(27378),l=n(2634),a=n(508),i=n.n(a),r={autoplay:{keys:["autoplay"]},allowFullScreen:{keys:["fs"]},showControls:{keys:["controls"]},playsinline:{keys:["playsinline"]},showCaptions:{keys:["cc_load_policy"]},color:{keys:["color"]},disableKeyboardInteraction:{keys:["disablekb"]},enableAPIControl:{keys:["enablejsapi"]},endTime:{keys:["end"]},loop:{keys:["loop"]},language:{keys:["cc_lang_pref","hl"]},showVideoAnnotations:{keys:["iv_load_policy"],values:{oldValue:!1,newValue:3}},youtubeListType:{keys:["listType"]},youtubeList:{keys:["list"]},hideBranding:{keys:["modestbranding"]},origin:{keys:["origin"]},playlist:{keys:["playlist"]},showRelatedVideosFromDifferentChannel:{keys:["rel"]},startTime:{keys:["start"]},widgetReferrer:{keys:["widget_referrer"]}},s={autoplay:{keys:["autoplay"]},autopause:{keys:["autopause"]},setBackgroundAsTransparent:{keys:["background"]},showOwnerName:{keys:["byline"]},showControls:{keys:["controls"]},allowSessionTracking:{keys:["dnt"]},vimeoFunMode:{keys:["fun"]},color:{keys:["color"]},loop:{keys:["loop"]},muted:{keys:["muted"]},playsinline:{keys:["playsinline"]},showOwnerPortrait:{keys:["portrait"]},quality:{keys:["quality"]},showPlaybackSpeedSetting:{keys:["speed"]},language:{keys:["texttrack"]},showTitle:{keys:["title"]},startTime:{keys:["t"],conjunctionSymbol:"#"}},p=function(e){var o=t.useState(""),n=o[0],l=o[1],a=t.useCallback((function(e){var o=e.src+"?html5=1",n=o.toLowerCase().indexOf("vimeo")>-1?s:r,t=Object.keys(e),a="";Object.keys(n).filter((function(o){return t.indexOf(o)>-1&&null!==e[o]&&void 0!==e[o]})).map((function(o){var t=n[o];t.keys.map((function(n){a+=""+(t.conjunctionSymbol||"&")+n+"="+(t.values&&t.values.oldValue===e[o]?t.values.newValue:"boolean"==typeof e[o]?e[o]?1:0:e[o])}))})),l(o+=a)}),[e]);return t.useEffect((function(){a(e)}),[e]),t.createElement("div",{className:i()("rc","video-holder-component",e.className),id:e.id},t.createElement("iframe",{title:e.title,src:n,height:e.height,width:e.width,allowFullScreen:e.allowFullScreen,name:e.name,frameBorder:0}))},u=n(91448),d=function(){var e="https://www.youtube.com/embed/f19fctL72CY",o=n(70820),a=[n(31602)],i="300px",r="535px",s=[{label:"allowFullScreen",value:"allowFullScreen",key:"allowFullScreen"},{label:"loop",value:"loop",key:"loop"},{label:"autoplay",value:"autoplay",key:"autoplay"},{label:"showControls",value:"showControls",key:"showControls"}],d=[].concat(s,[{label:"hideBranding",value:"hideBranding",key:"hideBranding"},{label:"showVideoAnnotations",value:"showVideoAnnotations",key:"showVideoAnnotations"}]),c=[{key:"controls",items:[{key:"src",initialValue:e,label:"Source",placeholder:"Source of video",controlType:"Text"},{key:"width",initialValue:r,label:"Width",placeholder:"Width of video",controlType:"Text"},{key:"height",initialValue:i,label:"Height",placeholder:"Height of video",controlType:"Text"},{key:"language",initialValue:null,label:"Language",placeholder:"Language of video player",controlType:"Text"},{key:"startTime",initialValue:null,label:"Start time of playback",placeholder:"Playback starts at",controlType:"Text"},{key:"endTime",initialValue:null,label:"End time of playback",placeholder:"Playback ends at",controlType:"Text"},{label:"Optional configurations",key:"checkboxes",initialValue:s.map((function(e){return e.value})),controlType:"Option",options:d}]}],y=(0,u.b)(c),m=y.renderForm,h=y.state.controls,b=function(e){var o;return null===(o=h.checkboxes)||void 0===o?void 0:o.some((function(o){return o===e}))};return t.createElement(l.Z,{mainFile:o,importedFiles:a,example:t.createElement(p,{name:"myVideo",title:"Sample Video",src:(null==h?void 0:h.src)||e,width:(null==h?void 0:h.width)||r,height:(null==h?void 0:h.height)||i,language:null==h?void 0:h.language,startTime:null==h?void 0:h.startTime,autoplay:b("autoplay"),allowFullScreen:b("allowFullScreen"),loop:b("loop"),showControls:b("showControls"),hideBranding:b("hideBranding"),showVideoAnnotations:b("showVideoAnnotations")}),code:'<Video [src]="src"\n        [width]="width"\n        [height]="height"\n    />',controls:t.createElement(t.Fragment,null,m(),t.createElement("div",null,t.createElement("label",null,"Source samples"),t.createElement("p",null,"Vimeo: https://player.vimeo.com/video/259422408"),t.createElement("p",null,"Youtube: https://www.youtube.com/embed/f19fctL72CY")))})}},70820:function(e,o,n){n.r(o),o.default='import React from "react";\nimport classnames from "classnames";\nimport { VideoProps, Mapper, YoutubeAPI, VimeoAPI, MapperItem } from "./types-definition";\nimport { vimeoKeysMapper, youtubeKeysMapper } from "./api-mapper";\nimport "./video.scss";\n\n/** A video component is an React component for playing videos */\nexport const Video: React.FC<VideoProps> = (props: VideoProps) => {\n    const [src, setSrc] = React.useState<string>("");\n    const vimeoVideoPrefix: string = "vimeo";\n\n    const formatParams = React.useCallback(\n        (props) => {\n            let newSrc: string = `${props.src}?html5=1`;\n            const keysMapper: Partial<Mapper<YoutubeAPI> | Mapper<VimeoAPI>> = newSrc.toLowerCase().indexOf(vimeoVideoPrefix) > -1 ? vimeoKeysMapper : youtubeKeysMapper;\n            const listOfPropKeys: Array<string> = Object.keys(props);\n            let newParams: string = "";\n            Object.keys(keysMapper)\n                .filter((item: string) => listOfPropKeys.indexOf(item) > -1 && props[item] !== null && props[item] !== undefined)\n                .map((item: string) => {\n                    const mapper: MapperItem<YoutubeAPI | VimeoAPI> = keysMapper[item];\n                    mapper.keys.map((key: string) => {\n                        newParams += `${mapper.conjunctionSymbol || "&"}${key}=${\n                            mapper.values && mapper.values.oldValue === props[item] ? mapper.values.newValue : typeof props[item] === "boolean" ? (props[item] ? 1 : 0) : props[item]\n                        }`;\n                    });\n                });\n            newSrc += newParams;\n            setSrc(newSrc);\n        },\n        [props]\n    );\n\n    React.useEffect(() => {\n        formatParams(props);\n    }, [props]);\n\n    return (\n        <div className={classnames("rc", "video-holder-component", props.className)} id={props.id}>\n            <iframe title={props.title} src={src} height={props.height} width={props.width} allowFullScreen={props.allowFullScreen} name={props.name} frameBorder={0} />\n        </div>\n    );\n};\n'},31602:function(e,o,n){n.r(o),o.default='export interface VideoProps {\n    /** Allow video to be played in full screen mode */\n    allowFullScreen?: boolean;\n    /** `Support Vimeo only` prevent the player from tracking session data, including cookies */\n    allowSessionTracking?: boolean;\n    /** `Support Vimeo only` pause the current video when another Vimeo video on the same page starts to play */\n    autopause?: boolean;\n    /** Play video automatically */\n    autoplay?: boolean;\n    /** Element class name */\n    className?: string;\n    /** Color value of the video controls: Youtube player only supports `red` | `white` */\n    color?: "red" | "white" | string;\n    /** `Support Youtube only` disable keyboard controls */\n    disableKeyboardInteraction?: boolean;\n    /** `Support Youtube only` enables the player to be controlled via IFrame Player API calls */\n    enableAPIControl?: boolean;\n    /** Element height */\n    height: string;\n    /** `Support Youtube only` hides YouTube logo */\n    hideBranding?: boolean;\n    /** Element ID */\n    id?: string;\n    /** Video player\'s interface language */\n    language?: string;\n    /** Loop video */\n    loop?: boolean;\n    /** `Support Vimeo only` the playback quality of the video */\n    muted?: boolean;\n    /** Element name */\n    name: string;\n    /** `Support Youtube only` provides an extra security measure for the IFrame API */\n    origin?: string;\n    /** `Support Youtube only` specifies a comma-separated list of video IDs to play */\n    playlist?: string;\n    /** controls whether videos play inline or fullscreen in an HTML5 player on iOS or mobile devices */\n    playsinline?: boolean;\n    /** `Support Vimeo only` the playback quality of the video */\n    quality?: "240p" | "360p" | "540p" | "720p" | "1080p" | "2k" | "4k";\n    /** `Support Vimeo only` set the background of the player area to transparent */\n    setBackgroundAsTransparent?: boolean;\n    /** `Support Vimeo only` display video as a background video */\n    showAsBackgroundVideo?: boolean;\n    /** `Support Youtube only` show captions */\n    showCaptions?: boolean;\n    /** Show video controls */\n    showControls?: boolean;\n    /** `Support Vimeo only` show owner\'s name */\n    showOwnerName?: boolean;\n    /** `Support Vimeo only` show owner\'s portrait */\n    showOwnerPortrait?: boolean;\n    /** `Support Vimeo only` show speed setting */\n    showPlaybackSpeedSetting?: boolean;\n    /** `Support Youtube only` if it\'s set to false, related videos will come from the same channel as the video that was just played, default: `true` */\n    showRelatedVideosFromDifferentChannel?: boolean;\n    /** `Support Vimeo only` display the video\'s title. */\n    showTitle?: boolean;\n    /** `Support Youtube only` shows video annotations, default: `true` */\n    showVideoAnnotations?: boolean;\n    /** Element source */\n    src: string;\n    /** Begin playing the video at the given number of seconds */\n    startTime?: number;\n    /** `Support Youtube only` specifies the time, measured in seconds from the start of the video, when the player should stop playing the video. */\n    endTime?: number;\n    /** Video title */\n    title?: string;\n    /** `Support Vimeo only` to enable informal error messages in the player */\n    vimeoFunMode?: boolean;\n    /** `Support Youtube only` identifies the URL where the player is embedded */\n    widgetReferrer?: string;\n    /** Element width */\n    width: string;\n    /** `Support Youtube only` identifies the list that will load in the player */\n    youtubeList?: string;\n    /** `Support Youtube only` identifies the type of list that will load in the player */\n    youtubeListType?: "user_uploads" | "playlist";\n}\n\nexport type MapperItem<T> = { keys: Array<keyof T>; values?: { oldValue: T[keyof T]; newValue: any }; conjunctionSymbol?: "&" | "#" };\n\nexport type Mapper<T> = Record<keyof VideoProps, MapperItem<T>>;\n\ninterface CommonAPI {\n    /** Play video automatically */\n    autoplay?: boolean;\n    /** Show video controls */\n    controls?: boolean;\n    /** Loop video */\n    loop?: boolean;\n    playsinline?: boolean;\n}\n\nexport interface YoutubeAPI extends CommonAPI {\n    cc_lang_pref?: string;\n    cc_load_policy?: boolean;\n    color?: "red" | "white";\n    disablekb?: boolean;\n    enablejsapi?: boolean;\n    end?: number;\n    fs?: boolean;\n    hl?: string;\n    iv_load_policy?: 1 | 3;\n    listType?: "search" | "user_uploads" | "playlist";\n    list?: string;\n    modestbranding?: boolean;\n    origin?: string;\n    playlist?: string;\n    rel?: boolean;\n    start?: number;\n    widget_referrer?: string;\n}\n\nexport interface VimeoAPI extends CommonAPI {\n    autopause?: boolean;\n    background?: boolean;\n    byline?: boolean;\n    color?: string;\n    dnt?: boolean;\n    fun?: boolean;\n    muted?: boolean;\n    portrait?: boolean;\n    quality?: "240p" | "360p" | "540p" | "720p" | "1080p" | "2k" | "4k";\n    speed?: boolean;\n    t?: string;\n    texttrack?: string;\n    title?: boolean;\n    transparent?: boolean;\n}\n'}}]);
//# sourceMappingURL=component---src-pages-docs-video-tsx-ffde46eb6d74d0d09e1c.js.map