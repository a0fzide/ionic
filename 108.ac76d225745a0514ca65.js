(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{WyMW:function(n,e,t){"use strict";t.r(e),t.d(e,"IonSpinner",function(){return o});var r=t("dlMz"),i=t("zGDL"),s={lines:{dur:1e3,lines:12,fn:function(n,e,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/t-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/t-n+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(n,e,t){var r=n*e/t-n+"ms",i=2*Math.PI*e/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,e,t){var r=e/t,i=n*r-n+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}}},o=function(){function n(){this.paused=!1}return n.prototype.getName=function(){return this.name||this.config.get("spinner")||("ios"===this.mode?"lines":"crescent")},n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(i.c)(this.color),(n={},n["spinner-"+this.getName()]=!0,n["spinner-paused"]=!!this.paused||this.config.getBoolean("_testing"),n))}},n.prototype.render=function(){var n=this.getName(),e=s[n]||s.lines,t="number"==typeof this.duration&&this.duration>10?this.duration:e.dur,r=[];if(void 0!==e.circles)for(var i=0;i<e.circles;i++)r.push(a(e,t,i,e.circles));else if(void 0!==e.lines)for(i=0;i<e.lines;i++)r.push(c(e,t,i,e.lines));return r},Object.defineProperty(n,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-spinner-h{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-h{color:var(--ion-color-base)}svg.sc-ion-spinner{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl].sc-ion-spinner-h   svg.sc-ion-spinner, [dir=rtl]   .sc-ion-spinner-h   svg.sc-ion-spinner{right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.spinner-lines.sc-ion-spinner-h   line.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   line.sc-ion-spinner{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-h   svg.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}.spinner-bubbles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}.spinner-circles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}.spinner-crescent.sc-ion-spinner-h   circle.sc-ion-spinner{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}.spinner-dots.sc-ion-spinner-h   circle.sc-ion-spinner{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}.spinner-paused.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"},enumerable:!0,configurable:!0}),n}();function a(n,e,t,i){var s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("circle",{transform:"translate(32,32)",r:s.r}))}function c(n,e,t,i){var s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}}}]);