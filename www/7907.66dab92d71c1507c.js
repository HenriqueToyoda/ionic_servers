"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7907],{7907:(u,a,e)=>{e.r(a),e.d(a,{ShareWeb:()=>s});var n=e(5861),t=e(7423);class s extends t.Uw{canShare(){return(0,n.Z)(function*(){return"undefined"!=typeof navigator&&navigator.share?{value:!0}:{value:!1}})()}share(r){var i=this;return(0,n.Z)(function*(){if("undefined"==typeof navigator||!navigator.share)throw i.unavailable("Share API not available in this browser");return yield navigator.share({title:r.title,text:r.text,url:r.url}),{}})()}}}}]);