(this.webpackJsonpteam=this.webpackJsonpteam||[]).push([[5],{535:function(e,t,n){"use strict";var o=n(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(583)),r=o(n(578)),i=o(n(0)),u=o(n(8)),l=n(228),s=n(138),c=n(584),f=n(585);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.emoji,n=e.skin,o=e.set,a=e.data;return(0,l.getData)(t,n,o,a)},b=function(e){var t=p(e),n=t.sheet_x,o=t.sheet_y,a=100/(e.sheetColumns-1),r=100/(e.sheetRows-1);return"".concat(a*n,"% ").concat(r*o,"%")},g=function(e){var t=e.emoji,n=e.skin,o=e.set,a=e.data;return(0,l.getSanitizedData)(t,n,o,a)},h=function(e){return!isNaN(e-parseFloat(e))},k=function e(t){for(var n in t.data.compressed&&(0,s.uncompress)(t.data),e.defaultProps)void 0==t[n]&&void 0!=e.defaultProps[n]&&(t[n]=e.defaultProps[n]);var o=p(t);if(!o)return t.fallback?t.fallback(null,t):null;var r=o.unified,u=o.custom,c=o.short_names,f=o.imageUrl,d={},k=t.children,j="emoji-mart-emoji",v=r&&(0,l.unifiedToNative)(r),y=[v].concat(c).filter(Boolean).join(", "),O=null;if(!r&&!u)return t.fallback?t.fallback(o,t):null;if(t.tooltip&&(O=c[0]),t.native&&r)j+=" emoji-mart-emoji-native",d={fontSize:t.size},k=v,t.forceSize&&(d.display="inline-block",d.width=t.size,d.height=t.size,d.wordBreak="keep-all");else if(u)j+=" emoji-mart-emoji-custom",d={width:t.size,height:t.size,display:"inline-block"},d=o.spriteUrl?m({},d,{backgroundImage:"url(".concat(o.spriteUrl,")"),backgroundSize:"".concat(100*t.sheetColumns,"% ").concat(100*t.sheetRows,"%"),backgroundPosition:b(t)}):m({},d,{backgroundImage:"url(".concat(f,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"});else{if(!(void 0==o["has_img_".concat(t.set)]||o["has_img_".concat(t.set)]))return t.fallback?t.fallback(o,t):null;d={width:t.size,height:t.size,display:"inline-block",backgroundImage:"url(".concat(t.backgroundImageFn(t.set,t.sheetSize),")"),backgroundSize:"".concat(100*t.sheetColumns,"% ").concat(100*t.sheetRows,"%"),backgroundPosition:b(t)}}var P={name:"span",props:{}};return t.onClick&&t.useButton&&(P.name="button",P.props={type:"button"}),t.html?(d=function(e){var t=document.createElement("div");for(var n in e){var o=e[n];h(o)&&(o+="px"),t.style[n]=o}return t.getAttribute("style")}(d),"<".concat(P.name," style='").concat(d,"' aria-label='").concat(y,"' ").concat(O?"title='".concat(O,"'"):""," class='").concat(j,"'>").concat(k||"","</").concat(P.name,">")):i.default.createElement(P.name,(0,a.default)({onClick:function(e){return function(e,t){t.onClick&&(0,t.onClick)(g(t),e)}(e,t)},onMouseEnter:function(e){return function(e,t){t.onOver&&(0,t.onOver)(g(t),e)}(e,t)},onMouseLeave:function(e){return function(e,t){t.onLeave&&(0,t.onLeave)(g(t),e)}(e,t)},"aria-label":y,title:O,className:j},P.props),i.default.createElement("span",{style:d},k))};k.propTypes=m({},c.EmojiPropTypes,{data:u.default.object.isRequired}),k.defaultProps=f.EmojiDefaultProps;var j=k;t.default=j},578:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},583:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},584:function(e,t,n){"use strict";var o=n(103);Object.defineProperty(t,"__esModule",{value:!0}),t.PickerPropTypes=t.EmojiPropTypes=void 0;var a=o(n(8)),r={data:a.default.object.isRequired,onOver:a.default.func,onLeave:a.default.func,onClick:a.default.func,fallback:a.default.func,backgroundImageFn:a.default.func,native:a.default.bool,forceSize:a.default.bool,tooltip:a.default.bool,useButton:a.default.bool,skin:a.default.oneOf([1,2,3,4,5,6]),sheetSize:a.default.oneOf([16,20,32,64]),sheetColumns:a.default.number,sheetRows:a.default.number,set:a.default.oneOf(["apple","google","twitter","facebook"]),size:a.default.number.isRequired,emoji:a.default.oneOfType([a.default.string,a.default.object]).isRequired};t.EmojiPropTypes=r;var i={onClick:a.default.func,onSelect:a.default.func,onSkinChange:a.default.func,perLine:a.default.number,emojiSize:a.default.number,i18n:a.default.object,style:a.default.object,title:a.default.string,emoji:a.default.string,color:a.default.string,set:r.set,skin:r.skin,native:a.default.bool,backgroundImageFn:r.backgroundImageFn,sheetSize:r.sheetSize,emojisToShowFilter:a.default.func,showPreview:a.default.bool,showSkinTones:a.default.bool,emojiTooltip:r.tooltip,useButton:r.useButton,theme:a.default.oneOf(["auto","light","dark"]),include:a.default.arrayOf(a.default.string),exclude:a.default.arrayOf(a.default.string),recent:a.default.arrayOf(a.default.string),autoFocus:a.default.bool,enableFrequentEmojiSort:a.default.bool,custom:a.default.arrayOf(a.default.shape({name:a.default.string.isRequired,short_names:a.default.arrayOf(a.default.string).isRequired,emoticons:a.default.arrayOf(a.default.string),keywords:a.default.arrayOf(a.default.string),imageUrl:a.default.string,spriteUrl:a.default.string,sheet_x:a.default.number,sheet_y:a.default.number,size:a.default.number,sheetColumns:a.default.number,sheetRows:a.default.number})),skinEmoji:a.default.string,notFound:a.default.func,notFoundEmoji:a.default.string,icons:a.default.object};t.PickerPropTypes=i},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmojiDefaultProps=t.PickerDefaultProps=void 0;var o={skin:1,set:"apple",sheetSize:64,sheetColumns:57,sheetRows:57,native:!1,forceSize:!1,tooltip:!1,useButton:!0,backgroundImageFn:function(e,t){return"https://unpkg.com/emoji-datasource-".concat(e,"@").concat("5.0.1","/img/").concat(e,"/sheets-256/").concat(t,".png")}};t.EmojiDefaultProps=o;var a={onClick:function(){},onSelect:function(){},onSkinChange:function(){},emojiSize:24,perLine:9,i18n:{},style:{},title:"Emoji Mart\u2122",emoji:"department_store",color:"#ae65c5",set:o.set,theme:"light",skin:null,defaultSkin:o.skin,native:o.native,sheetSize:o.sheetSize,backgroundImageFn:o.backgroundImageFn,emojisToShowFilter:null,showPreview:!0,showSkinTones:!0,emojiTooltip:o.tooltip,useButton:o.useButton,autoFocus:!1,enableFrequentEmojiSort:!1,custom:[],skinEmoji:"",notFound:function(){},notFoundEmoji:"sleuth_or_spy",icons:{}};t.PickerDefaultProps=a}}]);
//# sourceMappingURL=5.2305534f.chunk.js.map