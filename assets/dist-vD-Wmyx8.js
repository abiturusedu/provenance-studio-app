function e(){globalThis.DOMMatrix===void 0&&(globalThis.DOMMatrix=class{constructor(e){Array.isArray(e)&&e.length===6?(this.a=e[0],this.b=e[1],this.c=e[2],this.d=e[3],this.e=e[4],this.f=e[5]):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}translateSelf(e,t=0){return this.e=this.a*e+this.c*t+this.e,this.f=this.b*e+this.d*t+this.f,this}scaleSelf(e,t=e){return this.a*=e,this.b*=e,this.c*=t,this.d*=t,this}})}function t(){e()}let n;const r=globalThis.process?.release?.name===`node`;async function i(e,t={}){let{getDocument:n}=await o(),i={};if(r)try{let e=import.meta.resolve(`pdfjs-dist/package.json`);i={disableFontFace:!0,standardFontDataUrl:new URL(`./standard_fonts/`,e).href,cMapUrl:new URL(`./cmaps/`,e).href,cMapPacked:!0}}catch{}return await n({data:e,useSystemFonts:!0,...i,...t}).promise}async function a(e,t,n){let r=c(e)?e:await i(e,n);try{return await t(r)}finally{r!==e&&await r.loadingTask.destroy()}}async function o(){return n||await s(),n}async function s(e,{reload:r=!1}={}){if(!n||r){if(t(),e)try{n=await l(e());return}catch(e){throw Error(`PDF.js could not be resolved: ${e}`)}try{n=await import(`./pdfjs-CqRykb4E.js`)}catch(e){throw Error(`Serverless PDF.js bundle could not be resolved: ${e}`)}}}function c(e){return typeof e==`object`&&!!e&&`_pdfInfo`in e}async function l(e){let t=await e;return t.default||t}
/**
* Derived from the PDF.js project by the Mozilla Foundation.
* @see https://github.com/mozilla/pdf.js/blob/b8de9a372f9bbf7e33adb362eeae5ef1919dba73/src/display/canvas_factory.js#L18
* @license Apache-2.0
*/
/**
* Derived from the PDF.js project by the Mozilla Foundation.
* @see https://github.com/mozilla/pdf.js/blob/b8de9a372f9bbf7e33adb362eeae5ef1919dba73/src/display/canvas_factory.js#L18
* @license Apache-2.0
*/
const u=[`xmp:createdate`,`xmp:modifydate`,`xmp:metadatadate`,`xap:createdate`,`xap:modifydate`,`xap:metadatadate`];async function d(e,t={}){return await a(e,async e=>{let n=await e.getMetadata(),r={...n.info},i=n.metadata;if(t.parseDates){let{PDFDateString:e}=await o();if(r.CreationDate&&=e.toDateObject(r.CreationDate),r.ModDate&&=e.toDateObject(r.ModDate),i){let e=i.constructor;i=new e({parsedData:new Map(Array.from(i,([e,t])=>[e,u.includes(e)&&t?f(t):t])),rawData:i.getRaw()})}}return{info:r,metadata:i||{}}})}function f(e){if(!e)return;let t=Date.parse(e);if(!Number.isNaN(t))return new Date(t)}async function p(e,t={}){let{mergePages:n=!1}=t;return await a(e,async e=>{let t=await Promise.all(Array.from({length:e.numPages},(t,n)=>m(e,n+1)));return{totalPages:e.numPages,text:n?h(t):t}})}async function m(e,t){return(await(await e.getPage(t)).getTextContent()).items.filter(e=>e.str!=null).map(e=>e.str+(e.hasEOL?`
`:``)).join(``)}function h(e){return e.join(`
`).replace(/[^\S\n]+/g,` `).replace(/ ?\n ?/g,`
`).replace(/\n{3,}/g,`

`)}const g=async(...e)=>(await s(),await d(...e)),_=async(...e)=>(await s(),await p(...e));export{_ as extractText,i as getDocumentProxy,g as getMeta};