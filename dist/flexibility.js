!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var l in r)("object"==typeof exports?exports:e)[l]=r[l]}}(this,function(){return function(e){function t(l){if(r[l])return r[l].exports;var n=r[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,l){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([function(e,t){function r(e,t,r){for(var l=e.length,n=-1;++n<l;)n in e&&(r=t(r,e[n],n));return r}e.exports=r},function(e,t,r){function l(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"};if(e instanceof Element){var r=e.hasAttribute("data-style"),l=r?e.getAttribute("data-style"):e.getAttribute("style")||"";r||e.setAttribute("data-style",l),f(t,window.getComputedStyle&&getComputedStyle(e)||{}),n(t,e.currentStyle||{}),o(t,l);for(var i in t)t[i]=a(t,i,e);var s=e.getBoundingClientRect();t.offsetHeight=s.height||e.offsetHeight,t.offsetWidth=s.width||e.offsetWidth}return{element:e,style:t}}function n(e,t){for(var r in e){if(r in t)e[r]=t[r];else{var l=r.replace(/[A-Z]/g,"-$&").toLowerCase();l in t&&(e[r]=t[l])}}"-js-display"in t&&(e.display=t["-js-display"])}function o(e,t){for(var r;r=i.exec(t);){e[r[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()})]=r[2]}}function f(e,t){for(var r in e){r in t&&!s.test(r)&&(e[r]=t[r])}}e.exports=l;var i=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,s=/^(alignSelf|height|width)$/,a=r(16)},function(e,t,r){function l(e){o(e);var t=e.element.style,r="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=n(e.flexStyle[r[0]]-e.flexStyle[r[0]+"InnerBefore"]-e.flexStyle[r[0]+"InnerAfter"]-e.flexStyle[r[0]+"BorderBefore"]-e.flexStyle[r[0]+"BorderAfter"]),t.height=n(e.flexStyle[r[1]]-e.flexStyle[r[1]+"InnerBefore"]-e.flexStyle[r[1]+"InnerAfter"]-e.flexStyle[r[1]+"BorderBefore"]-e.flexStyle[r[1]+"BorderAfter"]);for(var l,f=-1;l=e.children[++f];){var i=l.element.style,s="inline"===l.mainAxis?["main","cross"]:["cross","main"];i.boxSizing="content-box",i.display="block",i.position="absolute","auto"!==l.flexStyle[s[0]]&&(i.width=n(l.flexStyle[s[0]]-l.flexStyle[s[0]+"InnerBefore"]-l.flexStyle[s[0]+"InnerAfter"]-l.flexStyle[s[0]+"BorderBefore"]-l.flexStyle[s[0]+"BorderAfter"])),"auto"!==l.flexStyle[s[1]]&&(i.height=n(l.flexStyle[s[1]]-l.flexStyle[s[1]+"InnerBefore"]-l.flexStyle[s[1]+"InnerAfter"]-l.flexStyle[s[1]+"BorderBefore"]-l.flexStyle[s[1]+"BorderAfter"])),i.top=n(l.flexStyle[s[1]+"Start"]),i.left=n(l.flexStyle[s[0]+"Start"]),i.marginTop=n(l.flexStyle[s[1]+"Before"]),i.marginRight=n(l.flexStyle[s[0]+"After"]),i.marginBottom=n(l.flexStyle[s[1]+"After"]),i.marginLeft=n(l.flexStyle[s[0]+"Before"])}}function n(e){return"string"==typeof e?e:Math.max(e,0)+"px"}e.exports=l;var o=r(11)},function(e,t){e.exports=function e(t,e){var r="row"===e||"row-reverse"===e,l=t.mainAxis;if(l){r&&"inline"===l||!r&&"block"===l||(t.flexStyle={main:t.flexStyle.cross,cross:t.flexStyle.main,mainOffset:t.flexStyle.crossOffset,crossOffset:t.flexStyle.mainOffset,mainBefore:t.flexStyle.crossBefore,mainAfter:t.flexStyle.crossAfter,crossBefore:t.flexStyle.mainBefore,crossAfter:t.flexStyle.mainAfter,mainInnerBefore:t.flexStyle.crossInnerBefore,mainInnerAfter:t.flexStyle.crossInnerAfter,crossInnerBefore:t.flexStyle.mainInnerBefore,crossInnerAfter:t.flexStyle.mainInnerAfter,mainBorderBefore:t.flexStyle.crossBorderBefore,mainBorderAfter:t.flexStyle.crossBorderAfter,crossBorderBefore:t.flexStyle.mainBorderBefore,crossBorderAfter:t.flexStyle.mainBorderAfter})}else t.flexStyle=r?{main:t.style.width,cross:t.style.height,mainOffset:t.style.offsetWidth,crossOffset:t.style.offsetHeight,mainBefore:t.style.marginLeft,mainAfter:t.style.marginRight,crossBefore:t.style.marginTop,crossAfter:t.style.marginBottom,mainInnerBefore:t.style.paddingLeft,mainInnerAfter:t.style.paddingRight,crossInnerBefore:t.style.paddingTop,crossInnerAfter:t.style.paddingBottom,mainBorderBefore:t.style.borderLeftWidth,mainBorderAfter:t.style.borderRightWidth,crossBorderBefore:t.style.borderTopWidth,crossBorderAfter:t.style.borderBottomWidth}:{main:t.style.height,cross:t.style.width,mainOffset:t.style.offsetHeight,crossOffset:t.style.offsetWidth,mainBefore:t.style.marginTop,mainAfter:t.style.marginBottom,crossBefore:t.style.marginLeft,crossAfter:t.style.marginRight,mainInnerBefore:t.style.paddingTop,mainInnerAfter:t.style.paddingBottom,crossInnerBefore:t.style.paddingLeft,crossInnerAfter:t.style.paddingRight,mainBorderBefore:t.style.borderTopWidth,mainBorderAfter:t.style.borderBottomWidth,crossBorderBefore:t.style.borderLeftWidth,crossBorderAfter:t.style.borderRightWidth},"content-box"===t.style.boxSizing&&("number"==typeof t.flexStyle.main&&(t.flexStyle.main+=t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),"number"==typeof t.flexStyle.cross&&(t.flexStyle.cross+=t.flexStyle.crossInnerBefore+t.flexStyle.crossInnerAfter+t.flexStyle.crossBorderBefore+t.flexStyle.crossBorderAfter));t.mainAxis=r?"inline":"block",t.crossAxis=r?"block":"inline","number"==typeof t.style.flexBasis&&(t.flexStyle.main=t.style.flexBasis+t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),t.flexStyle.mainOuter=t.flexStyle.main,t.flexStyle.crossOuter=t.flexStyle.cross,"auto"===t.flexStyle.mainOuter&&(t.flexStyle.mainOuter=t.flexStyle.mainOffset),"auto"===t.flexStyle.crossOuter&&(t.flexStyle.crossOuter=t.flexStyle.crossOffset),"number"==typeof t.flexStyle.mainBefore&&(t.flexStyle.mainOuter+=t.flexStyle.mainBefore),"number"==typeof t.flexStyle.mainAfter&&(t.flexStyle.mainOuter+=t.flexStyle.mainAfter),"number"==typeof t.flexStyle.crossBefore&&(t.flexStyle.crossOuter+=t.flexStyle.crossBefore),"number"==typeof t.flexStyle.crossAfter&&(t.flexStyle.crossOuter+=t.flexStyle.crossAfter)}},function(e,t,r){function l(e){var t=[];return n(e,t),t}function n(e,t){for(var r,l=o(e),i=[],s=-1;r=e.childNodes[++s];){var a=3===r.nodeType&&!/^\s*$/.test(r.nodeValue);if(l&&a){var c=r;r=e.insertBefore(document.createElement("flex-item"),c),r.appendChild(c)}if(r instanceof Element){var y=n(r,t);if(l){var x=r.style;x.display="inline-block",x.position="absolute",y.style=f(r).style,i.push(y)}}}var S={element:e,children:i};return l&&(S.style=f(e).style,t.push(S)),S}function o(e){var t=e instanceof Element,r=t&&e.getAttribute("data-style"),l=t&&e.currentStyle&&e.currentStyle["-js-display"];return i.test(r)||s.test(l)}e.exports=l;var f=r(1),i=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,s=/^(inline-)?flex$/i},function(e,t,r){function l(e){for(var t,r=-1;t=e[++r];)n(t)}e.exports=l;var n=r(2)},function(e,t){e.exports=function(e){var t,r,l,n=-1;if(e.lines.length>1&&"flex-start"===e.style.alignContent)for(t=0;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;l=e.lines[++n];)l.crossStart=t,t+=l.cross;else if(e.lines.length>1&&"space-between"===e.style.alignContent)for(r=e.flexStyle.crossSpace/(e.lines.length-1),t=0;l=e.lines[++n];)l.crossStart=t,t+=l.cross+r;else if(e.lines.length>1&&"space-around"===e.style.alignContent)for(r=2*e.flexStyle.crossSpace/(2*e.lines.length),t=r/2;l=e.lines[++n];)l.crossStart=t,t+=l.cross+r;else for(r=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;l=e.lines[++n];)l.crossStart=t,l.cross+=r,t+=l.cross}},function(e,t){e.exports=function(e){for(var t,r=-1;line=e.lines[++r];)for(t=-1;child=line.children[++t];){var l=child.style.alignSelf;"auto"===l&&(l=e.style.alignItems),"flex-start"===l?child.flexStyle.crossStart=line.crossStart:"flex-end"===l?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===l?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},function(e,t,r){var l=r(0);e.exports=function(e){if(e.mainSpace>0){var t=l(e.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0);t>0&&(e.main=l(e.children,function(r,l){return"auto"===l.flexStyle.main?l.flexStyle.main=l.flexStyle.mainOffset+parseFloat(l.style.flexGrow)/t*e.mainSpace:l.flexStyle.main+=parseFloat(l.style.flexGrow)/t*e.mainSpace,l.flexStyle.mainOuter=l.flexStyle.main+l.flexStyle.mainBefore+l.flexStyle.mainAfter,r+l.flexStyle.mainOuter},0),e.mainSpace=0)}}},function(e,t,r){var l=r(0);e.exports=function(e){if(e.mainSpace<0){var t=l(e.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0);t>0&&(e.main=l(e.children,function(r,l){return l.flexStyle.main+=parseFloat(l.style.flexShrink)/t*e.mainSpace,l.flexStyle.mainOuter=l.flexStyle.main+l.flexStyle.mainBefore+l.flexStyle.mainAfter,r+l.flexStyle.mainOuter},0),e.mainSpace=0)}}},function(e,t,r){var l=r(0);e.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var r,n=-1;r=e.children[++n];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+r.flexStyle.mainOuter?(t.main+=r.flexStyle.mainOuter,t.cross=Math.max(t.cross,r.flexStyle.crossOuter)):e.lines.push(t={main:r.flexStyle.mainOuter,cross:r.flexStyle.crossOuter,children:[]}),t.children.push(r);e.flexStyle.mainLines=l(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=l(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},function(e,t,r){function l(e){for(var t,l=-1;t=e.children[++l];)r(3)(t,e.style.flexDirection);r(3)(e,e.style.flexDirection),r(15)(e),r(10)(e),r(6)(e),l=-1;for(var n;n=e.lines[++l];)n.mainSpace=e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter-n.main,r(8)(n),r(9)(n),r(14)(n),r(13)(n),r(12)(n,e.style.justifyContent,e);r(7)(e)}e.exports=l},function(e,t){e.exports=function(e,t,r){var l,n,o,f=r.flexStyle.mainInnerBefore,i=-1;if("flex-end"===t)for(l=e.mainSpace,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter;else if("center"===t)for(l=e.mainSpace/2,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter;else if("space-between"===t)for(n=e.mainSpace/(e.children.length-1),l=0,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter+n;else if("space-around"===t)for(n=2*e.mainSpace/(2*e.children.length),l=n/2,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter+n;else for(l=0,l+=f;o=e.children[++i];)o.flexStyle.mainStart=l,l+=o.flexStyle.mainOuter}},function(e,t){e.exports=function(e){for(var t,r=-1;t=e.children[++r];){var l=0;"auto"===t.flexStyle.crossBefore&&++l,"auto"===t.flexStyle.crossAfter&&++l;var n=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=n/l),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=n/l),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},function(e,t){e.exports=function(e){for(var t,r=0,l=-1;t=e.children[++l];)"auto"===t.flexStyle.mainBefore&&++r,"auto"===t.flexStyle.mainAfter&&++r;if(r>0){for(l=-1;t=e.children[++l];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/r),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/r),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},function(e,t){var r=/^(column|row)-reverse$/;e.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),r.test(e.style.flexDirection)&&e.children.reverse()}},function(e,t){function r(e,t,r){var o=e[t],s=String(o).match(n);if(!s){var a=t.match(i);if(a){return"none"===e["border"+a[1]+"Style"]?0:f[o]||0}return o}var c=s[1],y=s[2];return"px"===y?1*c:"cm"===y?.3937*c*96:"in"===y?96*c:"mm"===y?.3937*c*96/10:"pc"===y?12*c*96/72:"pt"===y?96*c/72:"rem"===y?16*c:l(o,r)}function l(e,t){o.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(o,t.nextSibling);var r=o.offsetWidth;return t.parentNode.removeChild(o),r}e.exports=r;var n=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,o=document.createElement("div"),f={medium:4,none:0,thick:6,thin:2},i=/^border(Bottom|Left|Right|Top)Width$/},function(e,t,r){function l(e){i(f(e))}/*! Flexibility 2.0.0 | MIT Licensed | github.com/jonathantneal/flexibility */
var n=r(1),o=r(2),f=r(4),i=r(5);e.exports=l,e.exports.read=n,e.exports.write=o,e.exports.readAll=f,e.exports.writeAll=i}])});