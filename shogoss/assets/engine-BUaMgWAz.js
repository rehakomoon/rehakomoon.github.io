var Vp=Object.defineProperty;var Wp=(e,t,i)=>t in e?Vp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var H=(e,t,i)=>Wp(e,typeof t!="symbol"?t+"":t,i);import{c as Gp}from"./index-CfhzqTp-.js";/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Br=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Hp=Object.getOwnPropertyNames,jp=Object.prototype.hasOwnProperty,Kp=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),E=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(r){throw i=[r],r}},Ut=(e,t)=>{for(var i in t)Br(e,i,{get:t[i],enumerable:!0})},Qp=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Hp(t))!jp.call(e,a)&&a!==i&&Br(e,a,{get:()=>t[a],enumerable:!(r=Fp(t,a))||r.enumerable});return e},pi=e=>Qp(Br({},"__esModule",{value:!0}),e),yt,qe,pt,la,Yo,Jo=E(()=>{"use strict";yt=new Map,qe=[],pt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=yt.get(e);if(r===void 0)yt.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let a=qe.indexOf(e);a!==-1&&qe.splice(a,1);for(let s=0;s<qe.length;s++)if(yt.get(qe[s]).priority<=i){qe.splice(s,0,e);return}qe.push(e)}return}throw new TypeError("not a valid backend")},la=async e=>{let t=yt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Yo=async e=>{let t=e.executionProviders||[],i=t.map(u=>typeof u=="string"?u:u.name),r=i.length===0?qe:i,a,s=[],n=new Set;for(let u of r){let l=await la(u);typeof l=="string"?s.push({name:u,err:l}):(a||(a=l),a===l&&n.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of s)i.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>n.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Zp=E(()=>{"use strict";Jo()}),eu,Xp=E(()=>{"use strict";eu="1.30.0"}),hi,de,tu=E(()=>{"use strict";Xp(),hi="warning",de={wasm:{},webgl:{},webgpu:{},versions:{common:eu},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);hi=e}},get logLevel(){return hi}},Object.defineProperty(de,"logLevel",{enumerable:!0})}),te,Yp=E(()=>{"use strict";tu(),te=de}),iu,ru,Jp=E(()=>{"use strict";iu=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=s*a,p=0,c=d,f=d*2,h=-1;n==="RGBA"?(p=0,c=d,f=d*2,h=d*3):n==="RGB"?(p=0,c=d,f=d*2):n==="RBG"&&(p=0,f=d,c=d*2);for(let g=0;g<s;g++)for(let y=0;y<a;y++){let _=(e.data[p++]-l[0])*u[0],m=(e.data[c++]-l[1])*u[1],w=(e.data[f++]-l[2])*u[2],$=h===-1?255:(e.data[h++]-l[3])*u[3];r.fillStyle="rgba("+_+","+m+","+w+","+$+")",r.fillRect(y,g,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ru=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let a,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,f=0,h=1,g=2,y=3,_=0,m=p,w=p*2,$=-1;o==="RGBA"?(_=0,m=p,w=p*2,$=p*3):o==="RGB"?(_=0,m=p,w=p*2):o==="RBG"&&(_=0,w=p,m=p*2),r=i.createImageData(a,s);for(let v=0;v<s*a;f+=c,h+=c,g+=c,y+=c,v++)r.data[f]=(e.data[_++]-d[0])*l[0],r.data[h]=(e.data[m++]-d[1])*l[1],r.data[g]=(e.data[w++]-d[2])*l[2],r.data[y]=$===-1?255:(e.data[$++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),Nt,au,su,nu,ou,uu,ec=E(()=>{"use strict";Rr(),Nt=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=i*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,c=0,f=1,h=2,g=3,y=0,_=l,m=l*2,w=-1;o==="RGB"&&(p=3,c=0,f=1,h=2,g=-1),u==="RGBA"?w=l*3:u==="RBG"?(y=0,m=l,_=l*2):u==="BGR"&&(m=0,_=l,y=l*2);for(let $=0;$<l;$++,c+=p,h+=p,f+=p,g+=p)d[y++]=(e[c]+n[0])/s[0],d[_++]=(e[f]+n[1])/s[1],d[m++]=(e[h]+n[2])/s[2],w!==-1&&g!==-1&&(d[w++]=(e[g]+n[3])/s[3]);return u==="RGBA"?new ge("float32",d,[1,4,i,r]):new ge("float32",d,[1,3,i,r])},au=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(i){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=c,o.width=f}else o.tensorFormat="RGBA",o.height=c,o.width=f;p.drawImage(e,0,0),n=p.getImageData(0,0,f,c).data}else throw new Error("Can not access image data")}else if(r){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let c=u();c.width=p,c.height=d;let f=l(c);if(f!=null)f.putImageData(e,0,0),n=f.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,f=e.width;return p.drawImage(e,0,0,f,c),n=p.getImageData(0,0,f,c).data,o.height=c,o.width=f,Nt(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,p)=>{let c=u(),f=l(c);if(!e||!f)return p();let h=new Image;h.crossOrigin="Anonymous",h.src=e,h.onload=()=>{c.width=h.width,c.height=h.height,f.drawImage(h,0,0,c.width,c.height);let g=f.getImageData(0,0,c.width,c.height);o.height=c.height,o.width=c.width,d(Nt(g.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Nt(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},su=(e,t)=>{let{width:i,height:r,download:a,dispose:s}=t,n=[1,r,i,4];return new ge({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},nu=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new ge({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:a,dispose:s})},ou=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new ge({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:a,dispose:s})},uu=(e,t,i)=>new ge({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),Je,zt,fi,lu,tc=E(()=>{"use strict";Je=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),fi=!1,lu=()=>{if(!fi){fi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Je.set("int64",BigInt64Array),zt.set(BigInt64Array,"int64")),t&&(Je.set("uint64",BigUint64Array),zt.set(BigUint64Array,"uint64")),r?(Je.set("float16",i),zt.set(i,"float16")):Je.set("float16",Uint16Array)}}}),du,pu,ic=E(()=>{"use strict";Rr(),du=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},pu=(e,t)=>{switch(e.location){case"cpu":return new ge(e.type,e.data,t);case"cpu-pinned":return new ge({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ge({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ge({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ge({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ge,Rr=E(()=>{"use strict";Jp(),ec(),tc(),ic(),ge=class{constructor(e,t,i){lu();let r,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=Je.get(r);if(!n)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(r=e,o=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let u=Je.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?n=u.from(t,BigInt):n=u.from(t)}else if(t instanceof u)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",n=e;else if(u==="boolean")r="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",n=Uint8Array.from(e);else{let u=zt.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=n,this.dataLocation="cpu"}let s=du(a);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=a,this.size=s}static async fromImage(e,t){return au(e,t)}static fromTexture(e,t){return su(e,t)}static fromGpuBuffer(e,t){return nu(e,t)}static fromMLTensor(e,t){return ou(e,t)}static fromPinnedBuffer(e,t,i){return uu(e,t,i)}toDataURL(e){return iu(this,e)}toImageData(e){return ru(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return pu(this,e)}}}),Ee,cu=E(()=>{"use strict";Rr(),Ee=ge}),ti,mi,Oe,ze,it,rt,hu=E(()=>{"use strict";tu(),ti=(e,t)=>{(typeof de.trace>"u"?!de.wasm.trace:!de.trace)||console.timeStamp(`${e}::ORT::${t}`)},mi=(e,t)=>{var a;let i=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<i.length;s++){if(r&&!i[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${i[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),ti("CPU",n);return}i[s].includes("TRACE_FUNC")&&(r=!0)}},Oe=e=>{(typeof de.trace>"u"?!de.wasm.trace:!de.trace)||mi("BEGIN",e)},ze=e=>{(typeof de.trace>"u"?!de.wasm.trace:!de.trace)||mi("END",e)},it=e=>{(typeof de.trace>"u"?!de.wasm.trace:!de.trace)||console.time(`ORT::${e}`)},rt=e=>{(typeof de.trace>"u"?!de.wasm.trace:!de.trace)||console.timeEnd(`ORT::${e}`)}}),fu,rc=E(()=>{"use strict";Jo(),cu(),hu(),fu=class mu{constructor(t){this.handler=t}async run(t,i,r){Oe(),it("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof Ee||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Ee)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let l of i){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(i);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let c=i[p];(c===null||c instanceof Ee)&&(l=!0,n=!1,a[p]=c)}if(l){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(n)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,s),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Ee?u[l]=d:u[l]=new Ee(d.type,d.data,d.dims)}return rt("InferenceSession.run"),ze(),u}async release(){return this.handler.dispose()}static async create(t,i,r,a){Oe(),it("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,c=t.byteLength;if(typeof i=="object"&&i!==null)n=i;else if(typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(c=t.byteLength-p,typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||p+c>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,p,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Yo(n),l=await o.createInferenceSessionHandler(s,u);return rt("InferenceSession.create"),ze(),new mu(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Rt,ac=E(()=>{"use strict";rc(),Rt=fu}),sc=E(()=>{"use strict"}),nc=E(()=>{"use strict"}),oc=E(()=>{"use strict"}),uc=E(()=>{"use strict"}),lc={};Ut(lc,{InferenceSession:()=>Rt,TRACE:()=>ti,TRACE_EVENT_BEGIN:()=>it,TRACE_EVENT_END:()=>rt,TRACE_FUNC_BEGIN:()=>Oe,TRACE_FUNC_END:()=>ze,Tensor:()=>Ee,env:()=>te,registerBackend:()=>pt});var we=E(()=>{"use strict";Zp(),Yp(),ac(),cu(),sc(),nc(),hu(),oc(),uc()}),Mr=E(()=>{"use strict"}),gu={};Ut(gu,{default:()=>_u});var gi,_i,_u,dc=E(()=>{"use strict";var e;bp(),ot(),Pr(),gi="ort-wasm-proxy-worker",_i=((e=globalThis.self)==null?void 0:e.name)===gi,_i&&(self.onmessage=t=>{let{type:i,in:r}=t.data;try{switch(i){case"init-wasm":Ur(r.wasm).then(()=>{ta(r).then(()=>{postMessage({type:i})},a=>{postMessage({type:i,err:a})})},a=>{postMessage({type:i,err:a})});break;case"init-ep":{let{epName:a,env:s}=r;ia(s,a).then(()=>{postMessage({type:i})},n=>{postMessage({type:i,err:n})});break}case"copy-from":{let{buffer:a}=r,s=ui(a);postMessage({type:i,out:s});break}case"create":{let{model:a,options:s}=r;ra(a,s).then(n=>{postMessage({type:i,out:n})},n=>{postMessage({type:i,err:n})});break}case"release":aa(r),postMessage({type:i});break;case"run":{let{sessionId:a,inputIndices:s,inputs:n,outputIndices:o,options:u}=r;sa(a,s,n,o,new Array(o.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:l},oa([...n,...l]))},l=>{postMessage({type:i,err:l})});break}case"end-profiling":na(r),postMessage({type:i});break;default:}}catch(a){postMessage({type:i,err:a})}}),_u=_i?null:t=>new Worker(t??me,{type:"module",name:gi})}),yi,da,pa,me,Dr,qt,ca,ha,wi,fa,$i,yu,vi,wu,Pr=E(()=>{"use strict";Mr(),yi=typeof location>"u"?void 0:location.origin,da=import.meta.url>"file:"&&import.meta.url<"file;",pa=()=>{if(da){let e=URL;return new URL(new e("ort.min.mjs",import.meta.url).href,yi).href}return import.meta.url},me=pa(),Dr=()=>{if(me&&!me.startsWith("blob:"))return me.substring(0,me.lastIndexOf("/")+1)},qt=(e,t)=>{try{let i=t??me;return(i?new URL(e,i):new URL(e)).origin===yi}catch{return!1}},ca=(e,t)=>{let i=t??me;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},ha=(e,t)=>`${t??"./"}${e}`,wi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},fa=async e=>(await import(e)).default,$i=(dc(),pi(gu)).default,yu=async()=>{if(!me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(qt(me))return[void 0,$i()];let e=await wi(me);return[e,$i(e)]},vi=void 0,wu=async(e,t,i,r)=>{let a=vi&&!(e||t);if(a)if(me)a=qt(me)||r&&!i;else if(r&&!i)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,vi];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??ca(s,t),o=i&&n&&!qt(n,t),u=o?await wi(n):n??ha(s,t);return[o?u:void 0,await fa(u)]}}}),bi,Lt,wt,xi,ma,ga,_a,Ur,ie,ot=E(()=>{"use strict";Pr(),Lt=!1,wt=!1,xi=!1,ma=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ga=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},_a=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ur=async e=>{if(Lt)return Promise.resolve();if(wt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(xi)throw new Error("previous call to 'initializeWebAssembly()' failed.");wt=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!_a())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ga())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ma();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a==null?void 0:a.mjs,o=(n==null?void 0:n.href)??n,u=a==null?void 0:a.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[p,c]=await wu(o,s,i>1,!!d||!!l),f=!1,h=[];if(t>0&&h.push(new Promise(g=>{setTimeout(()=>{f=!0,g()},t)})),h.push(new Promise((g,y)=>{let _={numThreads:i};if(d)_.wasmBinary=d,_.locateFile=m=>m;else if(l||s)_.locateFile=m=>l??s+m;else if(o&&o.indexOf("blob:")!==0)_.locateFile=m=>new URL(m,o).href;else if(p){let m=Dr();m&&(_.locateFile=w=>m+w)}c(_).then(m=>{wt=!1,Lt=!0,bi=m,g(),p&&URL.revokeObjectURL(p)},m=>{wt=!1,xi=!0,y(m)})})),await Promise.race(h),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ie=()=>{if(Lt&&bi)return bi;throw new Error("WebAssembly is not initialized yet.")}}),Ie,ii,J,Nr=E(()=>{"use strict";ot(),Ie=(e,t)=>{let i=ie(),r=i.lengthBytesUTF8(e)+1,a=i._malloc(r);return i.stringToUTF8(e,a,r),t.push(a),a},ii=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")ii(s,n+".",i,r);else if(typeof s=="string"||typeof s=="number")r(n,s.toString());else if(typeof s=="boolean")r(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},J=e=>{let t=ie(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetLastError(a,a+r);let s=Number(t.getValue(a,r===4?"i32":"i64")),n=t.getValue(a+r,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(i)}}}),$u,pc=E(()=>{"use strict";ot(),Nr(),$u=e=>{let t=ie(),i=0,r=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Ie(e.tag,r)),i=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),i===0&&J("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ii(e.extra,"",new WeakSet,(n,o)=>{let u=Ie(n,r),l=Ie(o,r);t._OrtAddRunConfigEntry(i,u,l)!==0&&J(`Can't set a run config entry: ${n} - ${o}.`)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(n=>t._free(n)),s}}}),ya,wa,$a,Ke,va,vu,cc=E(()=>{"use strict";ot(),Nr(),ya=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},wa=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},$a=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Ke=(e,t,i,r)=>{let a=Ie(t,r),s=Ie(i,r);ie()._OrtAddSessionConfigEntry(e,a,s)!==0&&J(`Can't set a session config entry: ${t} - ${i}.`)},va=async(e,t,i)=>{let r=t.executionProviders;for(let a of r){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",Ke(e,"session.disable_quant_qdq","1",i),Ke(e,"session.disable_qdq_constant_folding","1",i),typeof a!="string"){let p=a==null?void 0:a.deviceType;p&&Ke(e,"deviceType",p,i)}break;case"webgpu":if(s="JS",typeof a!="string"){let p=a;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ke(e,"preferredLayout",p.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Ie(s,i),u=n.length,l=0,d=0;if(u>0){l=ie()._malloc(u*ie().PTR_SIZE),i.push(l),d=ie()._malloc(u*ie().PTR_SIZE),i.push(d);for(let p=0;p<u;p++)ie().setValue(l+p*ie().PTR_SIZE,n[p][0],"*"),ie().setValue(d+p*ie().PTR_SIZE,n[p][1],"*")}await ie()._OrtAppendExecutionProvider(e,o,l,d,u)!==0&&J(`Can't append execution provider: ${s}.`)}},vu=async e=>{let t=ie(),i=0,r=[],a=e||{};$a(a);try{let s=ya(a.graphOptimizationLevel??"all"),n=wa(a.executionMode??"sequential"),o=typeof a.logId=="string"?Ie(a.logId,r):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof a.optimizedModelFilePath=="string"?Ie(a.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,o,u,l,d),i===0&&J("Can't create session options."),a.executionProviders&&await va(i,a,r),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ke(i,"enableGraphCapture",a.enableGraphCapture.toString(),r)}if(a.freeDimensionOverrides)for(let[p,c]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let f=Ie(p,r);t._OrtAddFreeDimensionOverride(i,f,c)!==0&&J(`Can't set a free dimension override: ${p} - ${c}.`)}return a.extra!==void 0&&ii(a.extra,"",new WeakSet,(p,c)=>{Ke(i,p,c,r)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&J("Can't release session options."),r.forEach(n=>t._free(n)),s}}}),et,De,tt,ci,ri,qr,Lr,mr,V=E(()=>{"use strict";et=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},De=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},tt=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return i>0?Math.ceil(r*i):void 0},ci=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ri=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},qr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Lr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",mr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Vr,bu=E(()=>{"use strict";Mr(),Vr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let n=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(s,n,l).set(u),n+=l}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ba,xa,ka,Sa,Wr,Ta,Q,Pe=E(()=>{"use strict";V(),ba=["V","I","W","E","F"],xa=(e,t)=>{console.log(`[${ba[e]},${new Date().toISOString()}]${t}`)},Wr=(e,t)=>{ka=e,Sa=t},Ta=(e,t)=>{let i=ri(e),r=ri(ka);i>=r&&xa(i,typeof t=="function"?t():t)},Q=(...e)=>{Sa&&Ta(...e)}}),Ia,mt,k,ai,xu,ku,Su,G=E(()=>{"use strict";Ia=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},mt=class{static calcShape(e,t,i=!1){let r=e.length,a=t.length;if(r===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(i){if(r<2||a<2)return;let o=Ia.calcMatMulShape([e[r-2],e[r-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=i?3:1;o<=s;o++){let u=r-o<0?1:e[r-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)n[s-o]=Math.max(u,l);else{if(d>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let i=e.length,r=t.length;if(i>r)return!1;for(let a=1;a<=i;a++)if(e[i-a]!==1&&e[i-a]!==t[r-a])return!1;return!0}},k=class Jt{static size(t){return Jt.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let a=new Array(r),s=r-1;for(;s>=0;){if(t[s]%i===0){a[s]=t[s]/i;break}if(i%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,i/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Jt.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Jt.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let a=1;for(let s=i;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let a=i-3;a>=0;--a)r[a]=r[a+1]*t[a+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((a,s)=>a+i[s]+i[s+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,a)=>r===i[a])}},ai=class Ge{static adjustPoolAttributes(t,i,r,a,s,n){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<i.length-2;o++)o>=r.length?r.push(i[o+2]):r[o]=i[o+2];for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=r[o]||n[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,a,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Ge.adjustPadAndReturnShape(t[u+(n?1:2)],i[u],r[u],a[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,i,r,a,s,n,o,u=0){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let l=[i[0],i[1]];return Ge.computeShapeHelper(t,i,l,r,a,s,n,o,u),l}static computeConvOutputShape(t,i,r,a,s,n,o){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],i[0]];return Ge.computeShapeHelper(!1,t,u,r,a,s,n,o),u}static computeShapeHelper(t,i,r,a,s,n,o,u,l=0){if(t)for(let d=0;d<i.length-2;d++)r.push(1);else for(let d=0;d<i.length-2;d++)r.push(Ge.adjustPadAndReturnShape(i[d+2],a[d],s[d],n[d],o,d,d+i.length-2,u,l))}static computeOutputSize(t,i,r,a,s){let n=Math.floor(t/i)+1;return s===1&&(n=Math.ceil(t/i)+1,(n-1)*i>=r+a&&(n-=1)),n}static adjustPadAndReturnShape(t,i,r,a,s,n,o,u,l=0){let d=r*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[n]=0,s[o]=0,Ge.computeOutputSize(t-d,i,t,0,l);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=(Math.floor((t+i-1)/i)-1)*i+a-t;return s[n]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),s[o]=p-s[n],Ge.computeOutputSize(t+s[n]+s[o]-d,i,t,s[n],l)}default:throw new Error("Unsupported AutoPad type")}else return Ge.computeOutputSize(t+s[n]+s[o]-d,i,t,s[n],l)}},xu=class{static getShapeOfGemmResult(e,t,i,r,a){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let u=-1;if(r?(o=i[0],u=1):(o=i[1],u=0),i[u]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(a&&!mt.isValidBroadcast(a,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},ku=-34028234663852886e22,Su=34028234663852886e22}),Gr,Tu=E(()=>{"use strict";V(),Gr=(e,t)=>new(ci(t))(e)}),ki,Ea,Si,za,Ti,Ca,Ii,Ei,zi,Oa,Iu,hc=E(()=>{"use strict";V(),Pe(),ki=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ea=(e,t)=>{if(t==="int32")return e;let i=ki.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let r=i/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let a=e.byteLength/r,s=new(ci(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let o=0;o<a;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[o]=Number(u)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Si=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let a=BigInt64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(r,Number);return new Uint8Array(a.buffer)}case"uint8":{if(r.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(r,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},za=1,Ti=()=>za++,Ca=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ii=(e,t)=>{let i=ki.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,a)=>r*a)*i/8):0},Ei=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:i,tensor:r,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=i,this.mlTensor=r,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ii(this.dataType,this.tensorShape)}destroy(){Q("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),i=Si(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return new Uint8Array(i).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((r,a)=>r===i[a])}setIsDataConverted(e){this.isDataConverted=e}},zi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,r){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!(s!=null&&s.input.dataTypes.includes(t))){if(n=Ca.get(t),!n||!(s!=null&&s.input.dataTypes.includes(n)))throw new Error(`WebNN backend does not support data type: ${t}`);Q("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,i))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ii(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,o,!0,!0,n),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ea(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Q("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,i;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Si(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Oa=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ti();return this.tensorTrackersById.set(e,new zi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,r,a){Q("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${r}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,i,r,a)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){Q("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,r){let a=this.getMLContext(e),s=Ti(),n=new Ei({sessionId:e,context:a,tensor:t,dataType:i,shape:r});return this.tensorTrackersById.set(s,new zi(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,i,r,a,s,n){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,i)){Q("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${i}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Q("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${i}}`);let u=await o.createTensor({dataType:n??t,shape:i,dimensions:i,usage:r,writable:a,readable:s});return new Ei({sessionId:e,context:o,tensor:u,dataType:t,shape:i,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Iu=(...e)=>new Oa(...e)}),$t,Aa,Eu,fc=E(()=>{"use strict";V(),ot(),Tu(),hc(),Pe(),$t=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Aa=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((a,s)=>a===r[s]&&e[a]===t[a])},Eu=class{constructor(e){this.tensorManager=Iu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Wr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Q("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Q("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)Q("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let i=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(i=>Aa(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(a=>a.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Q("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,r,a){let s=$t.get(i);if(!s)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,a)}async createTemporaryTensor(e,t,i){Q("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let r=$t.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,r,i,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ie().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Q("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return Gr(i,t)}}registerMLTensor(e,t,i,r){let a=$t.get(i);if(!a)throw new Error(`Unsupported ONNX data type: ${i}`);let s=this.tensorManager.registerTensor(e,t,a,r);return Q("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}isGraphOutput(e,t){let i=this.sessionGraphOutputs.get(e);return i?i.includes(t):!1}isGraphInputOutputTypeSupported(e,t,i=!0){let r=$t.get(et(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:i?!!(a!=null&&a.input.dataTypes.includes(r)):!!(a!=null&&a.output.dataTypes.includes(r))}flush(){}}}),Fr=E(()=>{"use strict"}),Ci,Vt,Wt,Ba,Ra,Oi,gr,Ma,zu,mc=E(()=>{"use strict";Pe(),Fr(),Ci=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Vt=[],Wt=e=>Math.ceil(Number(e)/16)*16,Ba=e=>{for(let t=0;t<Vt.length;t++){let i=Vt[t];if(e<=i)return i}return Math.ceil(e/16)*16},Ra=1,Oi=()=>Ra++,gr=async(e,t,i,r)=>{let a=Wt(i),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,i)),u}else return new Uint8Array(o.slice(0,i))}finally{s.destroy()}},Ma=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ci)Vt.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,r=t.byteOffset,a=t.byteLength,s=Wt(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);if(s===a&&r%4===0)this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,i,r,a);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,o,0,s)}Q("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Wt(i.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(i.gpuData.buffer,0,r.gpuData.buffer,0,a)}registerExternalBuffer(e,t,i){let r;if(i){if(r=i[0],e===i[1])return Q("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Oi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Q("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Q("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Ba(e),r,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(i);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:i,usage:t}):r=this.backend.device.createBuffer({size:i,usage:t})}else r=this.backend.device.createBuffer({size:i,usage:t});let n={id:Oi(),type:0,buffer:r};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Q("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Q("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await gr(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ci.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Q("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},zu=(...e)=>new Ma(...e)}),Da,Y,ae=E(()=>{"use strict";Da=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Y=e=>new Da(e)}),gt,Gt,ue,oe,N,re,_r,ct,He,P,vt,T,R,Cu,Hr,Pa,Ou,F=E(()=>{"use strict";V(),G(),gt=64,Gt=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ue=(e,t=1)=>{let i=Gt(e,t);return typeof i=="string"?i:i[0]},oe=(e,t=1)=>{let i=Gt(e,t);return typeof i=="string"?i:i[1]},N=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:k.computeStrides(i)})}),t},re=e=>e%4===0?4:e%2===0?2:1,_r=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,ct=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,He=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,P=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,vt=(e,t,i,r,a)=>{let s=typeof i=="number",n=s?i:i.length,o=[...new Array(n).keys()],u=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,l=Gt(t,a),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],c={indices:u,value:d,storage:p,tensor:t},f=z=>typeof z=="string"?z:`${z}u`,h={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},g=s?"uniforms.":"",y=`${g}${e}_shape`,_=`${g}${e}_strides`,m="";for(let z=0;z<n-1;z++)m+=`
    let dim${z} = current / ${P(_,z,n)};
    let rest${z} = current % ${P(_,z,n)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;m+=`indices[${n-1}] = current;`;let w=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${m}
    return indices;
  }`,$=z=>(h.offsetToIndices=!0,n<2?z:`o2i_${e}(${z})`),v=[];if(n>=2)for(let z=n-1;z>=0;z--)v.push(`${P(_,z,n)} * (indices[${z}])`);let b=n<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${v.join("+")};
  }`,x=z=>(h.indicesToOffset=!0,n<2?z:`i2o_${e}(${z})`),S=(...z)=>n===0?"0u":`${c.indices}(${z.map(f).join(",")})`,I=(z,B)=>n<2?`${z}`:`${P(z,B,n)}`,C=(z,B,D)=>n<2?`${z}=${D};`:`${P(z,B,n)}=${D};`,L={},M=(z,B)=>{h.broadcastedIndicesToOffset=!0;let D=`${B.name}broadcastedIndicesTo${e}Offset`;if(D in L)return`${D}(${z})`;let A=[];for(let ee=n-1;ee>=0;ee--){let Ae=B.indicesGet("outputIndices",ee+B.rank-n);A.push(`${I(_,ee)} * (${Ae} % ${I(y,ee)})`)}return L[D]=`fn ${D}(outputIndices: ${B.type.indices}) -> u32 {
             return ${A.length>0?A.join("+"):"0u"};
           }`,`${D}(${z})`},U=(z,B)=>(()=>{if(c.storage===c.value)return`${e}[${z}]=${B};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${B}), select(0u, 0xFFFFFFFFu, ${B} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${B}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${B}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),j=z=>(()=>{if(c.storage===c.value)return`${e}[${z}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${z}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${z}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),K=n<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${d} {
    return ${j(`i2o_${e}(indices)`)};
  }`,q=n<2?"":(()=>{let z=o.map(D=>`d${D}: u32`).join(", "),B=o.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${z}) -> ${d} {
    return get_${e}ByIndices(${S(B)});
  }`})(),W=(...z)=>{if(z.length!==n)throw new Error(`indices length must be ${n}`);let B=z.map(f).join(",");return n===0?j("0u"):n===1?j(B[0]):(h.get=!0,h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}(${B})`)},se=z=>n<2?j(z):(h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}ByIndices(${z})`),O=n<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${d}) {
    ${U(`i2o_${e}(indices)`,"value")}
  }`,Z=n<2?"":(()=>{let z=o.map(D=>`d${D}: u32`).join(", "),B=o.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${z}, value: ${d}) {
    set_${e}ByIndices(${S(B)}, value);
  }`})();return{impl:()=>{let z=[],B=!1;return h.offsetToIndices&&(z.push(w),B=!0),h.indicesToOffset&&(z.push(b),B=!0),h.broadcastedIndicesToOffset&&(Object.values(L).forEach(D=>z.push(D)),B=!0),h.set&&(z.push(Z),B=!0),h.setByIndices&&(z.push(O),B=!0),h.get&&(z.push(q),B=!0),h.getByIndices&&(z.push(K),B=!0),!s&&B&&z.unshift(`const ${y} = ${c.indices}(${i.join(",")});`,`const ${_} = ${c.indices}(${k.computeStrides(i).join(",")});`),z.join(`
`)},type:c,offsetToIndices:$,indicesToOffset:x,broadcastedIndicesToOffset:M,indices:S,indicesGet:I,indicesSet:C,set:(...z)=>{if(z.length!==n+1)throw new Error(`indices length must be ${n}`);let B=z[n];if(typeof B!="string")throw new Error("value must be string");let D=z.slice(0,n).map(f).join(",");return n===0?U("0u",B):n===1?U(D[0],B):(h.set=!0,h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}(${D}, ${B})`)},setByOffset:U,setByIndices:(z,B)=>n<2?U(z,B):(h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${B});`),get:W,getByOffset:j,getByIndices:se,usage:r,name:e,strides:_,shape:y,rank:n}},T=(e,t,i,r=1)=>vt(e,t,i,"input",r),R=(e,t,i,r=1)=>vt(e,t,i,"output",r),Cu=(e,t,i)=>vt(e,t,i,"atomicOutput",1),Hr=(e,t,i,r=1)=>vt(e,t,i,"internal",r),Pa=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=gt){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${r})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:r}of this.uniforms)if(r&&r>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(r/4)}>`);else{let a=r==null||r===1?i:`vec${r}<${i}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ou=(e,t)=>new Pa(e,t)}),Ua,Ai,Na,qa,La,Va,_e,Au,Bu,je=E(()=>{"use strict";V(),G(),ae(),F(),Ua=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ai=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Na=(e,t)=>k.sortBasedOnPerm(e,Ai(e.length,t)),qa=(e,t,i,r)=>{let a=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},La=(e,t)=>{let i=[],r=[];for(let a=0;a<e.length;++a)e[a]!==1&&i.push(e[a]),e[t[a]]!==1&&r.push(t[a]);return{newShape:i,newPerm:r}},Va=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},_e=(e,t)=>{let i=e.dataType,r=e.dims.length,a=Ai(r,t),s=Na(e.dims,a),n=e.dims,o=s,u=r<2||Va(a,e.dims),l;if(u)return l=h=>{let g=T("input",i,n,4),y=R("output",i,o,4);return`
  ${h.registerUniform("output_size","u32").declareVariables(g,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let h=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(h/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=La(e.dims,a),c=k.areEqual(p,[2,3,1]),f=k.areEqual(p,[3,1,2]);if(d.length===2||c||f){n=c?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,o=[n[1],n[0]];let h=16;return l=g=>{let y=T("a",i,n.length),_=R("output",i,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${h+1}>, ${h}>;
  ${g.mainStart([h,h,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${h} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${h}u + local_id.x;
    let input_row = workgroup_id_x * ${h}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${y.getByIndices(`${y.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${h}u + local_id.x;
    let output_row = workgroup_id_y * ${h}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/h),y:Math.ceil(o[0]/h)},programUniforms:[{type:12,data:g},...N(n,o)]}},getShaderSource:l}}return l=h=>{let g=T("a",i,n.length),y=R("output",i,o.length);return`
  ${h.registerUniform("output_size","u32").declareVariables(g,y)}

  ${qa(a,r,g,y)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let h=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...N(n,o)]}},getShaderSource:l}},Au=(e,t)=>{Ua(e.inputs,t.perm),e.compute(_e(e.inputs[0],t.perm))},Bu=e=>Y({perm:e.perm})}),Wa,Ga,Fa,Ha,ja,Ka,Qa,Za,Xa,Ya,be,Ru,Mu,Du,Pu,Uu,Nu,qu,Lu,Vu,Wu,gc=E(()=>{"use strict";V(),G(),F(),jr(),je(),Wa={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ga={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fa={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ha={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ja=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Ka=(e,t)=>{let i=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&i.push(e[s]);let a=t.map(s=>e[s]);return[i,a]},Qa=(e,t)=>{let i=e.length+t.length,r=[],a=0;for(let s=0;s<i;s++)t.indexOf(s)===-1?r.push(e[a++]):r.push(1);return r},Za=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Xa=(e,t)=>{let i=[];if(!Za(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},Ya=(e,t,i,r,a,s,n)=>{let o=i[0].dims,u=k.size(s),l=k.size(n),d=T("_A",i[0].dataType,o),p=R("output",a,s),c=64;u===1&&(c=256);let f=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `,h=g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fa[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Wa[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ga[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ha[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${c}`,inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},be=(e,t,i,r)=>{let a=e.inputs.length===1?i:yr(e.inputs,i),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((f,h)=>h));let n=k.normalizeAxes(s,e.inputs[0].dims.length),o=n,u=e.inputs[0],l=Xa(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(_e(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=ja(o.length,u.dims.length));let[d,p]=Ka(u.dims,o),c=d;a.keepDims&&(c=Qa(d,n)),e.compute(Ya(t,a.cacheKey,[u],r,e.inputs[0].dataType,c,p),{inputs:[u]})},Ru=(e,t)=>{be(e,"ReduceMeanShared",t,"mean")},Mu=(e,t)=>{be(e,"ReduceL1Shared",t,"l1")},Du=(e,t)=>{be(e,"ReduceL2Shared",t,"l2")},Pu=(e,t)=>{be(e,"ReduceLogSumExpShared",t,"logSumExp")},Uu=(e,t)=>{be(e,"ReduceMaxShared",t,"max")},Nu=(e,t)=>{be(e,"ReduceMinShared",t,"min")},qu=(e,t)=>{be(e,"ReduceProdShared",t,"prod")},Lu=(e,t)=>{be(e,"ReduceSumShared",t,"sum")},Vu=(e,t)=>{be(e,"ReduceSumSquareShared",t,"sumSquare")},Wu=(e,t)=>{be(e,"ReduceLogSumShared",t,"logSum")}}),xe,Ja,si,yr,ke,es,ts,is,rs,as,ss,ns,os,us,ls,Se,Gu,Fu,Hu,ju,Ku,Qu,Zu,Xu,Yu,Ju,jr=E(()=>{"use strict";V(),G(),ae(),F(),gc(),xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ja=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],si=(e,t,i,r,a,s,n=!1,o=!1)=>{let u=[],l=i[0].dims,d=l.length,p=k.normalizeAxes(a,d),c=!o&&p.length===0;l.forEach((g,y)=>{c||p.indexOf(y)>=0?n&&u.push(1):u.push(g)});let f=u.length,h=k.size(u);return{name:e,shaderCache:t,getShaderSource:g=>{let y=[],_=T("_A",i[0].dataType,d),m=R("output",s,f),w=r(_,m,p),$=w[2];for(let v=0,b=0;v<d;v++)c||p.indexOf(v)>=0?(n&&b++,$=`for(var j${v}: u32 = 0; j${v} < ${l[v]}; j${v}++) {
                  ${w[2].includes("last_index")?`let last_index = j${v};`:""}
                  ${_.indicesSet("input_indices",v,`j${v}`)}
                  ${$}
                }`):(y.push(`${_.indicesSet("input_indices",v,m.indicesGet("output_indices",b))};`),b++);return`

        ${g.registerUniform("output_size","u32").declareVariables(_,m)}

        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${y.join(`
`)}
          ${w[0]}       // init ops for reduce max/min
          ${w[1]}
          ${$}
          ${w[3]}
          ${w.length===4?m.setByOffset("global_idx","value"):w.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...N(l,u)]})}},yr=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),Y({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ke=(e,t,i,r)=>{let a=e.inputs,s=a.length===1?i:yr(a,i);e.compute(si(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Ja:r,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},es=(e,t)=>{xe(e.inputs),ke(e,"ReduceLogSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},ts=(e,t)=>{xe(e.inputs),ke(e,"ReduceL1",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},is=(e,t)=>{xe(e.inputs),ke(e,"ReduceL2",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},rs=(e,t)=>{xe(e.inputs),ke(e,"ReduceLogSumExp",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},as=(e,t)=>{xe(e.inputs),ke(e,"ReduceMax",t,(i,r,a)=>{let s=[];for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(i.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},ss=(e,t)=>{xe(e.inputs),ke(e,"ReduceMean",t,(i,r,a)=>{let s=1;for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},ns=(e,t)=>{xe(e.inputs),ke(e,"ReduceMin",t,(i,r,a)=>{let s=[];for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},os=(e,t)=>{xe(e.inputs),ke(e,"ReduceProd",t,(i,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},us=(e,t)=>{xe(e.inputs),ke(e,"ReduceSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},ls=(e,t)=>{xe(e.inputs),ke(e,"ReduceSumSquare",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Se=(e,t,i)=>{if(t.length===0)return i;let r=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:a*=e[s];return a<32&&r>1024},Gu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ss(e,t):Ru(e,t)},Fu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ts(e,t):Mu(e,t)},Hu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?is(e,t):Du(e,t)},ju=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rs(e,t):Pu(e,t)},Ku=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?as(e,t):Uu(e,t)},Qu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ns(e,t):Nu(e,t)},Zu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?os(e,t):qu(e,t)},Xu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?us(e,t):Lu(e,t)},Yu=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ls(e,t):Vu(e,t)},Ju=(e,t)=>{Se(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?es(e,t):Wu(e,t)}}),Bi,el,tl,wr,_c=E(()=>{"use strict";V(),ae(),jr(),Bi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},el=(e,t)=>{Bi(e.inputs);let i=(r,a,s)=>{let n=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(si("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},tl=(e,t)=>{Bi(e.inputs);let i=(r,a,s)=>{let n=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(si("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},wr=e=>Y(e)}),ds,Ft,ps,cs,hs,Pt,fs,il,Kr=E(()=>{"use strict";V(),G(),Fr(),F(),ds=(e,t)=>{let i=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=i.dims[0],l=i.dims[1],d=i.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,c=p,f=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let w of t.qkvHiddenSizes)if(w%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let h=l;if(p!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+c+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(n){if(c!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=n.dims[3])}let y=h+g,_=-1,m=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:y,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:f,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ft=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ps=(e,t,i,r,a,s,n,o)=>{let u=re(n?1:s),l=64,d=s/u;d<l&&(l=32);let p=Math.ceil(s/u/l),c=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:d},{type:12,data:p}],f=ue(e.dataType,u),h=oe(1,u),g=["type"];n&&g.push("type"),o&&g.push("type");let y=_=>{let m=R("x",e.dataType,e.dims,u),w=[m],$=n?T("seq_lens",n.dataType,n.dims):void 0;$&&w.push($);let v=o?T("total_sequence_length_input",o.dataType,o.dims):void 0;v&&w.push(v);let b=oe(e.dataType),x=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(x).declareVariables(...w)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ft($,v,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${h}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${h}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${h}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${h}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${m.type.value}(${b}(1.0) / ${b}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${h}(x[offset + i]);
        x[offset + i] = ${m.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${m.type.value}(${b}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:g},getShaderSource:y,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*i},programUniforms:c})}},cs=(e,t,i,r,a,s,n,o,u)=>{let l=n+s.kvSequenceLength,d=[s.batchSize,s.numHeads,s.sequenceLength,l],p=e>1&&r,c=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=p?[s.batchSize,c,l,s.headSize]:void 0,h=s.nReps?s.nReps:1,g=s.scale===0?1/Math.sqrt(s.headSize):s.scale,y=re(s.headSize),_=s.headSize/y,m=12,w={x:Math.ceil(l/m),y:Math.ceil(s.sequenceLength/m),z:s.batchSize*s.numHeads},$=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:g},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:h}],v=p&&r&&k.size(r.dims)>0,b=["type","type"];v&&b.push("type"),a&&b.push("type"),o&&b.push("type"),u&&b.push("type");let x=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=I=>{let C=T("q",t.dataType,t.dims,y),L=T("key",i.dataType,i.dims,y),M=[C,L];if(v){let O=T("past_key",r.dataType,r.dims,y);M.push(O)}a&&M.push(T("attention_bias",a.dataType,a.dims));let U=o?T("seq_lens",o.dataType,o.dims):void 0;U&&M.push(U);let j=u?T("total_sequence_length_input",u.dataType,u.dims):void 0;j&&M.push(j);let K=R("output",t.dataType,d),q=[K];p&&q.push(R("present_key",t.dataType,f,y));let W=oe(1,y),se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${C.type.storage}, ${m*m}>;
  ${I.registerUniforms(se).declareVariables(...M,...q)}
  ${I.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${h===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${h===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ft(U,j,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${v&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${W}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${v&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${W}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(y){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${y}`)}})()};
        output[outputIdx] = ${K.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${y};${a!==void 0};${r!==void 0};${e}`,inputDependencies:b},getRunData:()=>({outputs:x,dispatchGroup:w,programUniforms:$}),getShaderSource:S}},hs=(e,t,i,r,a,s,n=void 0,o=void 0)=>{let u=s+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=e>1&&r,c=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=p?[a.batchSize,c,u,a.headSize]:void 0,h=[a.batchSize,a.sequenceLength,d],g=12,y={x:Math.ceil(a.vHeadSize/g),y:Math.ceil(a.sequenceLength/g),z:a.batchSize*a.numHeads},_=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:d},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:l}],m=p&&r&&k.size(r.dims)>0,w=["type","type"];m&&w.push("type"),n&&w.push("type"),o&&w.push("type");let $=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&$.push({dims:f,dataType:t.dataType,gpuDataType:0});let v=b=>{let x=T("probs",t.dataType,t.dims),S=T("v",i.dataType,i.dims),I=[x,S];m&&I.push(T("past_value",r.dataType,r.dims));let C=n?T("seq_lens",n.dataType,n.dims):void 0;n&&I.push(C);let L=o?T("total_sequence_length_input",o.dataType,o.dims):void 0;o&&I.push(L);let M=[R("output",t.dataType,h)];p&&M.push(R("present_value",t.dataType,f));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;
  var<workgroup> tileQ: array<${x.type.value}, ${g*g}>;
  var<workgroup> tileV: array<${x.type.value}, ${g*g}>;
  ${b.registerUniforms(U).declareVariables(...I,...M)}
  ${b.mainStart([g,g,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ft(C,L,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${m&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${x.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:w},getRunData:()=>({outputs:$,dispatchGroup:y,programUniforms:_}),getShaderSource:v}},Pt=(e,t,i,r,a,s,n,o,u,l,d=void 0,p=void 0)=>{let c=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),f=c>1?n:void 0,h=c>1?o:void 0,g=c>1?l.pastSequenceLength:0,y=g+l.kvSequenceLength,_=u&&k.size(u.dims)>0?u:void 0,m=[t,i];f&&k.size(f.dims)>0&&m.push(f),_&&m.push(_),d&&m.push(d),p&&m.push(p);let w=e.compute(cs(c,t,i,f,_,l,g,d,p),{inputs:m,outputs:c>1?[-1,1]:[-1]})[0];e.compute(ps(w,l.batchSize,l.numHeads,g,l.sequenceLength,y,d,p),{inputs:d&&p?[w,d,p]:[w],outputs:[]});let $=[w,r];h&&k.size(h.dims)>0&&$.push(h),d&&$.push(d),p&&$.push(p),e.compute(hs(c,w,r,h,l,g,d,p),{inputs:$,outputs:c>1?[0,2]:[0]})},fs=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let c=R("output_q",u[0].dataType,i),f=R("output_k",u[0].dataType,i),h=R("output_v",u[0].dataType,i),g=T("input",u[0].dataType,u[0].dims),y=T("weight",u[1].dataType,u[1].dims),_=T("bias",u[2].dataType,u[2].dims),m=g.type.storage,w=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${m}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${m}, ${n*n}>;
  var<workgroup> tileWeightK: array<${m}, ${n*n}>;
  var<workgroup> tileWeightV: array<${m}, ${n*n}>;
  ${p.registerUniforms(w).declareVariables(g,y,_,c,f,h)}
  ${p.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},il=(e,t)=>{let i=ds(e.inputs,t),[r,a,s]=fs(e,i);return Pt(e,r,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),ms,gs,_s,rl,yc=E(()=>{"use strict";we(),V(),G(),ae(),F(),ms=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,a,s)=>{let n=a.length;if(n!==r.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((o,u)=>{if(o!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},gs=(e,t)=>{let{epsilon:i,spatial:r,format:a}=t,s=e[0].dims,n=r?re(s[s.length-1]):1,o=a==="NHWC"&&s.length>1?n:1,u=k.size(s)/n,l=r,d=l?s.length:s,p=T("x",e[0].dataType,e[0].dims,n),c=T("scale",e[1].dataType,e[1].dims,o),f=T("bias",e[2].dataType,e[2].dims,o),h=T("inputMean",e[3].dataType,e[3].dims,o),g=T("inputVar",e[4].dataType,e[4].dims,o),y=R("y",e[0].dataType,d,n),_=()=>{let w="";if(r)w=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")w=`
            ${y.indicesSet("outputIndices","0","0")}
            let cOffset = ${y.indicesToOffset("outputIndices")};`;else{w=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let $=1;$<c.rank;$++)w+=`cIndices[${$}] = outputIndices[${$}];`;w+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return w},m=w=>`
  const epsilon = ${i};
  ${w.registerUniform("outputSize","u32").declareVariables(p,c,f,h,g,y)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${y.offsetToIndices(`global_idx * ${n}`)};
    ${_()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${h.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${y.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${n}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...N(s)]:[{type:12,data:u}]})}},_s=e=>Y(e),rl=(e,t)=>{let{inputs:i,outputCount:r}=e,a=_s({...t,outputCount:r});if(te.webgpu.validateInputContent&&ms(i,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(gs(i,a))}}),ys,ws,al,wc=E(()=>{"use strict";G(),F(),ys=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ws=e=>{let t=e[0].dims,i=e[0].dims[2],r=k.size(t)/4,a=e[0].dataType,s=T("input",a,t,4),n=T("bias",a,[i],4),o=T("residual",a,t,4),u=R("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${i}u / 4;
  ${l.declareVariables(s,n,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},al=e=>{ys(e.inputs),e.compute(ws(e.inputs))}}),$s,X,sl,nl,ol,ul,ll,dl,pl,cl,hl,vs,fl,ml,gl,_l,Ct,yl,ei,wl,$l,vl,bl,xl,kl,Sl,Tl,Il,El,zl,Cl,Ol,Al,Bl,Rl,Ml,Ri,Dl,$r,vr,Pl,Ul,Nl,bs,xs,ql,Qr=E(()=>{"use strict";V(),G(),ae(),F(),$s=(e,t,i,r,a,s,n)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=T("inputData",i,[o],4),d=R("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return n&&p.push(...n),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},X=(e,t,i,r,a,s=e.dataType,n,o)=>{let u=[{type:12,data:Math.ceil(k.size(e.dims)/4)}];return n&&u.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>$s(l,k.size(e.dims),e.dataType,s,i,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(k.size(l[0].dims)/64/4)},programUniforms:u})}},sl=e=>{e.compute(X(e.inputs[0],"Abs","abs"))},nl=e=>{e.compute(X(e.inputs[0],"Acos","acos"))},ol=e=>{e.compute(X(e.inputs[0],"Acosh","acosh"))},ul=e=>{e.compute(X(e.inputs[0],"Asin","asin"))},ll=e=>{e.compute(X(e.inputs[0],"Asinh","asinh"))},dl=e=>{e.compute(X(e.inputs[0],"Atan","atan"))},pl=e=>{e.compute(X(e.inputs[0],"Atanh","atanh"))},cl=e=>Y(e),hl=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(X(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},vs=e=>{let t,i,r=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Y({min:t,max:i})},fl=(e,t)=>{let i=t||vs(e.inputs),r=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},ml=e=>{e.compute(X(e.inputs[0],"Ceil","ceil"))},gl=e=>{e.compute(X(e.inputs[0],"Cos","cos"))},_l=e=>{e.compute(X(e.inputs[0],"Cosh","cosh"))},Ct=e=>Y(e),yl=(e,t)=>{let i=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ei=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,wl=e=>{let t=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,ei(t)))},$l=e=>{e.compute(X(e.inputs[0],"Exp","exp"))},vl=e=>{e.compute(X(e.inputs[0],"Floor","floor"))},bl=e=>{let t=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,ei(t)))},xl=(e,t)=>{let i=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},kl=e=>{e.compute(X(e.inputs[0],"Not",t=>`!${t}`))},Sl=e=>{e.compute(X(e.inputs[0],"Neg",t=>`-${t}`))},Tl=e=>{e.compute(X(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Il=e=>{let t=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},El=e=>{e.compute(X(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},zl=e=>Y(e),Cl=(e,t)=>{let i=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Ol=e=>{let t=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"HardSwish",i=>`${i} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${i} + vec4<${t}>(0.5)))`))},Al=e=>{e.compute(X(e.inputs[0],"Sin","sin"))},Bl=e=>{e.compute(X(e.inputs[0],"Sinh","sinh"))},Rl=e=>{e.compute(X(e.inputs[0],"Sqrt","sqrt"))},Ml=e=>{e.compute(X(e.inputs[0],"Tan","tan"))},Ri=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Dl=e=>{e.compute(X(e.inputs[0],"Tanh",Ri))},$r=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ri("v")};
}
`,vr=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Pl=e=>{let t=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"FastGelu",vr,$r(t),void 0,e.inputs[0].dataType))},Ul=(e,t)=>{let i=oe(e.inputs[0].dataType);return e.compute(X(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Nl=e=>{e.compute(X(e.inputs[0],"Log","log"))},bs=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,xs=e=>`quick_gelu_impl(${e})`,ql=(e,t)=>{let i=oe(e.inputs[0].dataType);e.compute(X(e.inputs[0],"QuickGelu",xs,bs(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ks,Ss,Ll,$c=E(()=>{"use strict";G(),F(),Qr(),ks=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ss=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=T("input",e[0].dataType,e[0].dims,4),r=T("bias",e[0].dataType,[e[0].dims[2]],4),a=R("output",e[0].dataType,t,4),s=k.size(t)/4,n=ue(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(i,r,a)}

  ${ei(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ll=e=>{ks(e.inputs),e.compute(Ss(e.inputs))}}),Ts,Is,Te,Vl,Wl,Gl,Fl,Hl,jl,Kl,Ql,Zl,Xl,vc=E(()=>{"use strict";V(),G(),F(),Ts=(e,t,i,r,a,s,n,o,u,l,d,p)=>{let c,f;typeof o=="string"?c=f=(m,w)=>`${o}((${m}),(${w}))`:typeof o=="function"?c=f=o:(c=o.scalar,f=o.vector);let h=R("outputData",d,r.length,4),g=T("aData",u,t.length,4),y=T("bData",l,i.length,4),_;if(a)if(s){let m=k.size(t)===1,w=k.size(i)===1,$=t.length>0&&t[t.length-1]%4===0,v=i.length>0&&i[i.length-1]%4===0;m||w?_=h.setByOffset("global_idx",f(m?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):_=`
            let outputIndices = ${h.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",h)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",h)};
            ${h.setByOffset("global_idx",f(n||$?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||v?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=h.setByOffset("global_idx",f(g.getByOffset("global_idx"),y.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=(w,$,v="")=>{let b=`aData[indexA${$}][componentA${$}]`,x=`bData[indexB${$}][componentB${$}]`;return`
            let outputIndices${$} = ${h.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offsetA${$} = ${g.broadcastedIndicesToOffset(`outputIndices${$}`,h)};
            let offsetB${$} = ${y.broadcastedIndicesToOffset(`outputIndices${$}`,h)};
            let indexA${$} = offsetA${$} / 4u;
            let indexB${$} = offsetB${$} / 4u;
            let componentA${$} = offsetA${$} % 4u;
            let componentB${$} = offsetB${$} % 4u;
            ${w}[${$}] = ${v}(${c(b,x)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,y,h)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Is=(e,t,i,r,a,s,n=i.dataType)=>{let o=i.dims.map(Number),u=r.dims.map(Number),l=!k.areEqual(o,u),d=o,p=k.size(o),c=!1,f=!1,h=[l];if(l){let g=mt.calcShape(o,u,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g.slice(),p=k.size(d);let y=k.size(o)===1,_=k.size(u)===1,m=o.length>0&&o[o.length-1]%4===0,w=u.length>0&&u[u.length-1]%4===0;h.push(y),h.push(_),h.push(m),h.push(w);let $=1;for(let v=1;v<d.length;v++){let b=o[o.length-v],x=u[u.length-v];if(b===x)$*=b;else break}$%4===0?(f=!0,c=!0):(y||_||m||w)&&(c=!0)}else c=!0;return h.push(c),{name:e,shaderCache:{hint:t+h.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>Ts(g,o,u,d,c,l,f,a,i.dataType,r.dataType,n,s),getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(k.size(d)/4)},...N(o,u,d)]})}},Te=(e,t,i,r,a,s)=>{e.compute(Is(t,a??"",e.inputs[0],e.inputs[1],i,r,s))},Vl=e=>{Te(e,"Add",(t,i)=>`${t}+${i}`)},Wl=e=>{Te(e,"Div",(t,i)=>`${t}/${i}`)},Gl=e=>{Te(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},Fl=e=>{Te(e,"Mul",(t,i)=>`${t}*${i}`)},Hl=e=>{let t=T("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Te(e,"Pow",{scalar:(i,r)=>`pow_custom(${i},${r})`,vector:(i,r)=>`pow_vector_custom(${i},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},jl=e=>{Te(e,"Sub",(t,i)=>`${t}-${i}`)},Kl=e=>{Te(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},Ql=e=>{Te(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},Zl=e=>{Te(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},Xl=e=>{Te(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),Es,zs,Cs,Os,Yl,Jl,bc=E(()=>{"use strict";V(),G(),ae(),F(),Es=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],a=r.dataType,s=r.dims.length;e.forEach((n,o)=>{if(o!==i){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},zs=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Cs=(e,t)=>{let i=e.length,r=[];for(let a=0;a<i;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));i===1?r.push(s):a===0?r.push(`if (inputIndex == ${a}u) { ${s} }`):a===i-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${a}) { ${s} }`)}return r.join(`
`)},Os=(e,t,i,r)=>{let a=k.size(i),s=new Array(e.length),n=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:a}];for(let g=0;g<e.length;++g)o+=e[g].dims[t],s[g]=o,l.push(e[g].dims.length),n[g]=T(`input${g}`,r,l[g]),u.push("rank"),d.push({type:12,data:s[g]});for(let g=0;g<e.length;++g)d.push(...N(e[g].dims));d.push(...N(i));let p=R("output",r,i.length),c=p.indicesGet("indices",t),f=Array.from(Array(s.length).keys()).map(g=>`uniforms.sizeInConcatAxis${g}`).join(","),h=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let y=0;y<e.length;y++)g.registerUniform(`sizeInConcatAxis${y}`,"u32");return g.declareVariables(...n,p)})()}

  ${zs(s.length,f)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${f});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Cs(n,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},Yl=(e,t)=>{let i=e.inputs,r=i[0].dims,a=k.normalizeAxis(t.axis,r.length);Es(i,a);let s=r.slice();s[a]=i.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let n=i.filter(o=>k.size(o.dims)>0);e.compute(Os(n,a,s,i[0].dataType),{inputs:n})},Jl=e=>Y({axis:e.axis})}),at,st,nt,Zr,ut=E(()=>{"use strict";V(),G(),at=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},st=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},nt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Zr=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[i,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=(e==null?void 0:e.activation_params)||[ku,Su];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:i}}return{activation:t}}}),pe,ed,Xr=E(()=>{"use strict";pe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ed=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),td,xc=E(()=>{"use strict";td=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Mt,Yr,Jr=E(()=>{"use strict";V(),G(),F(),ut(),Mt=(e,t,i,r,a)=>{let s=r-i;return`
      ${Array.from({length:i}).map((n,o)=>`
      if (${P(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,P(a,o+s,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Yr=(e,t,i,r,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n[n.length-2],l=o[o.length-1],d=n[n.length-1],p=re(l),c=re(d),f=re(u),h=k.size(i)/p/f,g=e.length>2,y=r?r.slice(0,-2):i.slice(0,-2),_=[k.size(y),u,l],m=[{type:12,data:h},{type:12,data:u},{type:12,data:l},{type:12,data:d}];st(t,m),m.push(...N(y,n,o)),g&&m.push(...N(e[2].dims)),m.push(...N(_));let w=$=>{let v=Hr("batch_dims",e[0].dataType,y.length),b=T("a",e[0].dataType,n.length,c),x=T("b",e[1].dataType,o.length,p),S=R("output",e[0].dataType,_.length,p),I=ue(S.type.tensor),C=at(t,S.type.value,I),L=[b,x],M="";if(g){let K=a?p:1;L.push(T("bias",e[2].dataType,e[2].dims.length,K)),M=`${a?`value += bias[col / ${K}];`:`value += ${S.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];nt(t,U);let j=()=>{let K=`var a_data: ${b.type.value};`;for(let q=0;q<c;q++)K+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${p}];`;for(let q=0;q<f;q++){K+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${c}];`;for(let W=0;W<c;W++)K+=`
            values[${q}] = fma(${x.type.value}(a_data${c===1?"":`[${W}]`}), b_data${W}, values[${q}]);
`}return K};return`
  ${$.registerUniforms(U).registerInternalVariables(v).declareVariables(...L,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${v.offsetToIndices("batch")};`}

    var a_indices: ${b.type.indices};
    ${Mt("a_indices",b,b.rank-2,v.rank,"batch_indices")}
    ${b.indicesSet("a_indices",b.rank-2,0)}
    ${b.indicesSet("a_indices",b.rank-1,0)}
    let a_offset = ${b.indicesToOffset("a_indices")};

    var b_indices: ${x.type.indices};
    ${Mt("b_indices",x,x.rank-2,v.rank,"batch_indices")}
    ${x.indicesSet("b_indices",x.rank-2,0)}
    ${x.indicesSet("b_indices",x.rank-1,0)}
    let b_offset = ${x.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${j()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${M}
      ${C}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${c};${f};${a}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:w}}}),As,Bs,br,Mi,Rs,xr,Ms,ni,ea=E(()=>{"use strict";V(),G(),F(),ut(),Jr(),Xr(),As=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bs=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,br=(e,t,i="f32",r,a=!1,s=32,n=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=a?u:s,p=a?s:u,c=d/t[0],f=s/t[1];if(!((a&&c===4&&e[1]===4||!a&&(c===3||c===4))&&d%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${i}>, ${d/c}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${l/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${As(a,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Bs(a,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Mi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Rs=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xr=(e,t,i="f32",r,a=!1,s=32,n=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=a?l:s,c=a?s:l;if(!(c%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let f=c/t[1],h=p/t[0],g=s/t[1],y=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Mi(a,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${h};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${h}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Mi(a,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Rs(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${p}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${d}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${y}
  }
`},Ms=(e,t,i,r,a=!1)=>{let[s,n,o,u]=r,l=ue(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${pe(e,l)} {
      var value = ${pe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${Mt("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${pe(e,l)} {
      var value = ${pe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Mt("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${pe(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${pe(e,l)}(bias[row])`};`:""}
        ${i}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ni=(e,t,i,r,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n.slice(0,-2),l=o.slice(0,-2),d=r?r.slice(0,-2):i.slice(0,-2),p=k.size(d),c=n[n.length-2],f=n[n.length-1],h=o[o.length-1],g=f%4===0&&h%4===0,y=c<=8?[4,1,1]:[4,4,1],_=[8,8,1],m=[Math.ceil(h/_[0]/y[0]),Math.ceil(c/_[1]/y[1]),Math.ceil(p/_[2]/y[2])],w=g?4:1,$=[...u,c,f/w],v=$.length,b=[...l,f,h/w],x=b.length,S=[p,c,h/w],I=[{type:6,data:c},{type:6,data:h},{type:6,data:f}];st(t,I),I.push(...N(d,$,b));let C=["rank","rank"],L=e.length>2;L&&(I.push(...N(e[2].dims)),C.push("rank")),I.push(...N(S));let M=U=>{let j=d.length,K=Hr("batchDims",e[0].dataType,j,1),q=ue(e[0].dataType),W=T("a",e[0].dataType,v,w),se=T("b",e[1].dataType,x,w),O=R("result",e[0].dataType,S.length,w),Z=[W,se];if(L){let ee=a?w:1;Z.push(T("bias",e[2].dataType,e[2].dims.length,ee))}let z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];nt(t,z);let B=ue(O.type.tensor),D=at(t,O.type.value,B),A=Ms(w,L,D,[K,W,se,O],a);return`
  ${U.registerUniforms(z).registerInternalVariables(K).declareVariables(...Z,O)}
  ${A}
  ${g?br(y,_,q,K):xr(y,_,q,K)}
                   `};return{name:"MatMul",shaderCache:{hint:`${y};${t.activation};${g};${a}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:I}),getShaderSource:M}}}),Ds,id,kc=E(()=>{"use strict";V(),Pe(),F(),ut(),Xr(),xc(),ea(),Ds=(e,t,i,r,a=!1,s,n=4,o=4,u=4,l="f32")=>{let d=I=>{switch(I){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${I} is not supported.`)}},p=I=>{switch(I){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${I} is not supported.`)}},c=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,h=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",y=e?"row":"col",_=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${y} / outWidth;
    let outCol = ${y} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${pe(n,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${h} && xCol >= 0 && xCol < ${g}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(n)}
    }
    return resData;`,w=e?t&&r?`
    let col = colIn * ${n};
    ${m}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${pe(n,l)}(0.0);`:r&&i?`
    let col = colIn * ${n};
    ${m}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${pe(n,l)}(0.0);`,$=e?r&&i?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${pe(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${pe(o,l)}(0.0);`,v=pe(u,l),b=pe(e?n:o,l),x=pe(e?o:n,l),S=at(s,v,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${b} {
      ${e?w:$}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${x} {
      ${e?$:w}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${v}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${ed(a)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},id=(e,t,i,r,a,s,n,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=i[0],c=l?i[2]:i[3],f=l?i[1]:i[2],h=l?i[3]:i[1],g=l&&(d%4===0||d%3===0)&&h%4===0,y=l?h:c*f,_=l?c*f:h,m=[8,8,1],w=r<=8?[4,1,1]:[4,4,1],$=[Math.ceil(y/m[0]/w[0]),Math.ceil(_/m[1]/w[1]),Math.ceil(p/m[2]/w[2])];Q("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${$}`);let v=g?l&&d%4!==0?3:4:1,b=m[1]*w[1],x=m[0]*w[0],S=Math.max(m[0]*v,m[1]),I=r%b===0,C=a%x===0,L=s%S===0,M=g?[v,4,4]:[1,1,1],U=[{type:6,data:r},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];st(t,U),U.push(...N(e[0].dims,e[1].dims));let j=["rank","rank"];n&&(U.push(...N(e[2].dims)),j.push("rank")),U.push(...N(i));let K=q=>{let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];nt(t,W);let se=g?4:1,O=ue(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${O}>`:O}) {
        result[flatIndex] = ${g?`vec4<${O}>`:O}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${O}>`:O}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,z=T("x",e[0].dataType,e[0].dims.length,v===3?1:v),B=T("w",e[1].dataType,e[1].dims.length,se),D=[z,B],A=R("result",e[0].dataType,i.length,se);if(n){let ee=T("bias",e[2].dataType,e[2].dims.length,se);D.push(ee),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${O}>`:O} {
          return bias[coords.${l?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${td("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(W).declareVariables(...D,A)}
        ${Z}
        ${Ds(l,I,C,L,n,t,M[0],M[1],M[2],O)}
        ${g?br(w,m,O,void 0,!l,S):xr(w,m,O,void 0,!l,S,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${v};${g};${I};${C};${L};${b};${x};${S}`,inputDependencies:j},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:U}),getShaderSource:K}}}),Ps,Di,bt,Us,Pi,Ns,rd,ad,Sc=E(()=>{"use strict";V(),Pe(),G(),F(),ut(),Xr(),Ps=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Di=e=>typeof e=="number"?[e,e,e]:e,bt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Us=(e,t,i,r=1)=>{let a=bt(t,r);return Math.floor((e[0]*(i-1)-i+a)/2)},Pi=(e,t,i,r,a)=>{a==null&&(a=Us(e,t[0],r[0]));let s=[0,0,0,i];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/r[n]+1));return s},Ns=(e,t,i,r,a,s,n,o,u,l)=>{let d,p,c,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let h=Pi([t,i,r,1],[o,u,l],1,[a,s,n],e);p=h[0],c=h[1],f=h[2]}else if(Array.isArray(e)){if(!e.every((g,y,_)=>g===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let h=Pi([t,i,r,1],[o,u,l],1,[a,s,n],e[0]);p=h[0],c=h[1],f=h[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),c=Math.ceil(i/s),f=Math.ceil(r/n);let h=(p-1)*a+o-t,g=(c-1)*s+u-i,y=(f-1)*n+l-r,_=Math.floor(h/2),m=h-_,w=Math.floor(g/2),$=g-w,v=Math.floor(y/2),b=y-v;d={top:w,bottom:$,left:v,right:b,front:_,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:c,outWidth:f}},rd=(e,t,i,r,a,s=!1,n="channelsLast")=>{let o,u,l,d,p;if(n==="channelsLast")[o,u,l,d,p]=e;else if(n==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${n}`);let[c,,f,h,g]=t,[y,_,m]=Di(i),[w,$,v]=Di(r),b=bt(f,w),x=bt(h,$),S=bt(g,v),{padInfo:I,outDepth:C,outHeight:L,outWidth:M}=Ns(a,u,l,d,y,_,m,b,x,S),U=s?c*p:c,j=[0,0,0,0,0];return n==="channelsFirst"?j=[o,U,C,L,M]:n==="channelsLast"&&(j=[o,C,L,M,U]),{batchSize:o,dataFormat:n,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:C,outHeight:L,outWidth:M,outChannels:U,padInfo:I,strideDepth:y,strideHeight:_,strideWidth:m,filterDepth:f,filterHeight:h,filterWidth:g,effectiveFilterDepth:b,effectiveFilterHeight:x,effectiveFilterWidth:S,dilationDepth:w,dilationHeight:$,dilationWidth:v,inShape:e,outShape:j,filterShape:t}},ad=(e,t,i,r,a,s)=>{let n=s==="channelsLast",o=n?e[0].dims[3]:e[0].dims[1],u=!1,l=[64,1,1],d={x:i.map((m,w)=>w)},p=[Math.ceil(Ps(d.x.map(m=>i[m]))/l[0]),1,1];Q("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let c=u?n&&o%4!==0?3:4:1,f=k.size(i),h=[{type:12,data:f},{type:12,data:r},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];st(t,h),h.push(...N(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(h.push(...N(e[2].dims)),g.push("rank")),h.push(...N(i));let _=m=>{let w=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];nt(t,w);let $=u?4:1,v=ue(e[0].dataType),b=T("x",e[0].dataType,e[0].dims.length,c===3?1:c),x=T("W",e[1].dataType,e[1].dims.length,$),S=[b,x],I=R("result",e[0].dataType,i.length,$),C="";if(y){let U=T("bias",e[2].dataType,e[2].dims.length,$);S.push(U),C+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${u?`vec4<${v}>`:v} {
          return bias[${n?P("coords",4,5):P("coords",1,5)}${u?"/ 4":""}];
        }`}let L=pe(c,v),M=at(t,L,v);return`
            ${C}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${v} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${v} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
          ${m.registerUniforms(w).declareVariables(...S,I)}
          ${m.mainStart()}
          ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${P("coords",0,b.rank)};
              let d2 = ${n?P("coords",b.rank-1,b.rank):P("coords",1,b.rank)};
              let xFRCCorner = vec3<u32>(${n?P("coords",1,b.rank):P("coords",2,b.rank)},
              ${n?P("coords",2,b.rank):P("coords",3,b.rank)},
              ${n?P("coords",3,b.rank):P("coords",4,b.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?P("uniforms.x_shape",1,b.rank):P("uniforms.x_shape",2,b.rank)};
              let xShapeZ = ${n?P("uniforms.x_shape",2,b.rank):P("uniforms.x_shape",3,b.rank)};
              let xShapeW = ${n?P("uniforms.x_shape",3,b.rank):P("uniforms.x_shape",4,b.rank)};
              let xShapeU = ${n?P("uniforms.x_shape",4,b.rank):P("uniforms.x_shape",1,b.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${v}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<${v}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${v}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${v}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<${v}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${v}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${v}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<${v}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${v}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${v}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${M}
              result[global_idx] = ${v}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${c};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:h}),getShaderSource:_}}}),sd,nd,Tc=E(()=>{"use strict";V(),G(),F(),ut(),sd=(e,t,i,r)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?i[3]:i[1],d=l/t.group,p=u&&d>=4?re(l):1,c=k.size(i)/p,f=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];st(t,f),f.push(...N(n,[o[0],o[1],o[2],o[3]/p]));let h=a?["rank","rank","rank"]:["rank","rank"];f.push(...N([i[0],i[1],i[2],i[3]/p]));let g=y=>{let _=R("output",e[0].dataType,i.length,p),m=ue(_.type.tensor),w=at(t,_.type.value,m),$=T("x",e[0].dataType,n.length),v=T("w",e[1].dataType,o.length,p),b=[$,v];a&&b.push(T("b",e[2].dataType,e[2].dims,p));let x=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];nt(t,x);let S=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${$.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${v.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${$.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${v.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${y.registerUniforms(x).declareVariables(...b,_)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${S}
    ${s}
    ${w}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:g}},nd=(e,t,i,r)=>{let a=e.length>2,s=re(i[3]),n=re(i[2]),o=k.size(i)/s/n,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],d=[i[0],i[1],i[2],i[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];st(t,p),p.push(...N(u,l,d));let c=(n-1)*t.strides[1]+l[1],f=h=>{let g=R("output",e[0].dataType,d.length,s),y=ue(g.type.tensor),_=at(t,g.type.value,y),m=T("x",e[0].dataType,u.length,s),w=T("w",e[1].dataType,l.length,s),$=[m,w];a&&$.push(T("b",e[2].dataType,e[2].dims,s));let v=a?"value += b[output_channel];":"",b=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return nt(t,b),`
  ${h.registerUniforms(b).declareVariables(...$,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${c}>;
    var values: array<${g.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${w.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${v}
      ${_}
      ${g.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${c};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:f}}}),qs,Ht,Ls,jt,kr,Ui,Vs,Ws,Sr,Ic=E(()=>{"use strict";G(),kc(),Sc(),ea(),Tc(),ut(),Jr(),je(),qs=(e,t,i,r,a,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,l=t[0],d=t.slice(2).map((c,f)=>c+(c-1)*(i[f]-1)),p=o.map((c,f)=>c+r[f]+r[f+u]).map((c,f)=>Math.floor((c-d[f]+a[f])/a[f]));return p.splice(0,0,n),p.splice(s?3:1,0,l),p},Ht=[2,3,1,0],Ls=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},jt=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let s=2;s<t[1].dims.length;++s)i[s-2]===0&&(i[s-2]=t[1].dims[s]);let r=e.pads.slice();ai.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:i,pads:r}),a},kr=e=>{let t=Zr(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:i,dilations:a,group:s,kernelShape:n,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ui=(e,t,i,r)=>{let a=i.format==="NHWC",s=qs(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,a);if(i.group!==1){let b=[t[0]];if(a){let x=e.kernelCustomData.wT??e.compute(_e(t[1],Ht),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x),b.push(x)}else b.push(t[1]);t.length===3&&b.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(nd(b,i,s,r),{inputs:b}):e.compute(sd(b,i,s,r),{inputs:b});return}let n=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],d=t[1].dims[2],p=t[1].dims[3],c=s[a?1:2],f=s[a?2:3],h=s[a?3:1],g=a&&d===o&&p===u&&i.pads[0]===0&&i.pads[1]===0;if(g||d===1&&p===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let b=s[0],x,S,I,C=[];if(a){let U=e.kernelCustomData.wT??e.compute(_e(t[1],Ht),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),g){let j=o*u*l;x=t[0].reshape([1,b,j]),S=U.reshape([1,j,h]),I=[1,b,h]}else x=t[0].reshape([b,o*u,l]),S=U.reshape([1,l,h]),I=[b,c*f,h];C.push(x),C.push(S)}else x=t[0].reshape([b,l,o*u]),S=t[1].reshape([1,h,l]),I=[b,h,c*f],C.push(S),C.push(x);n&&C.push(t[2]);let L=I[2],M=C[0].dims[C[0].dims.length-1];L<8&&M<8?e.compute(Yr(C,i,s,I,a,r),{inputs:C}):e.compute(ni(C,i,s,I,a,r),{inputs:C});return}let y=!0,_=e.kernelCustomData.wT??e.compute(_e(t[1],Ht),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let m=[t[0],_];n&&m.push(t[2]);let w=a?c*f:h,$=a?h:c*f,v=d*p*l;e.compute(id(m,i,s,w,$,v,n,y,r),{inputs:m})},Vs=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=jt({...t,pads:a,strides:s,dilations:n,kernelShape:o},r);Ui(e,r,u,l=>i?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Ws=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",a=jt(i,t),s=i.autoPad==="NOTSET"?i.pads:i.autoPad,n=rd(t[0].dims,t[1].dims,i.strides,i.dilations,s,!1,r);e.compute(ad(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],r))},Sr=(e,t)=>{if(Ls(e.inputs,t),e.inputs[0].dims.length===3)Vs(e,t);else if(e.inputs[0].dims.length===5)Ws(e,e.inputs,t);else{let i=jt(t,e.inputs);Ui(e,e.inputs,i)}}}),od,Ec=E(()=>{"use strict";V(),Pe(),G(),F(),od=(e,t,i)=>{let r=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,u=o[2]/n,l=o[3],d=s?re(u):1,p=s&&l===1&&u>=4,c=p?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-c,h=s?re(l):1,g=s?l===1?d:h:1,y=k.size(a)/h,_=[Math.ceil(y/64),1,1];Q("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let m=["rank","rank"],w=[t.strides[0],t.strides[1]],$=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],v=[t.dilations[0],t.dilations[1]],b=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],x=[b[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),b[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:y},{type:12,data:w},{type:12,data:$},{type:12,data:v},{type:12,data:b},{type:6,data:x},{type:12,data:c},{type:12,data:u},{type:12,data:l},...N(e[0].dims,e[1].dims)];r&&(S.push(...N(e[2].dims)),m.push("rank")),S.push(...N(a));let I=C=>{let L=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:w.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:b.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],M=ue(e[0].dataType),U=s?1:2,j=s?2:3,K=s?3:1,q=T("W",e[1].dataType,e[1].dims.length,g),W=T("Dy",e[0].dataType,e[0].dims.length,d),se=[W,q];r&&se.push(T("bias",e[2].dataType,[a[K]].length,h));let O=R("result",e[0].dataType,a.length,h),Z=()=>{let D="";if(p)d===4?D+=`
        let xValue = ${W.getByOffset("x_offset")};
        let wValue = ${q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?D+=`
          dotProd = dotProd + dot(vec4<${M}>(${W.getByOffset("x_offset")}, ${W.getByOffset("x_offset + 1u")}), vec4<${M}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(D+=`
          dotProd = dotProd + dot(vec4<${M}>(${W.getByOffset("x_offset")}, ${W.getByOffset("x_offset + 1u")}, ${W.getByOffset("x_offset + 2u")}, ${W.getByOffset("x_offset + 3u")}), vec4<${M}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}, ${q.getByOffset("w_offset + 2u")}, ${q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${s?W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):W.get("batch","inputChannel","idyR","idyC")};
        `,d===1)D+=`
          let w_offset = ${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${q.getByOffset(`w_offset / ${g}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let A=0;A<d;A++)D+=`
            let wValue${A} = ${q.getByOffset(`${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${A}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${A}] * wValue${A};`;return D},z=()=>{if(f===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let D="";if(d===1){D+="dotProd = dotProd";for(let A=0;A<f;A++)D+=`
            + ${W.getByOffset(`x_offset + ${A}`)} * ${q.getByOffset(`w_offset + ${A}`)}`;D+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);D+=`
          let xValue = ${W.getByOffset("x_offset")};
          let wValue = ${q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},B=`
            let outputIndices = ${O.offsetToIndices(`global_idx * ${h}`)};
            let batch = ${O.indicesGet("outputIndices",0)};
            let d1 = ${O.indicesGet("outputIndices",K)};
            let r = ${O.indicesGet("outputIndices",U)};
            let c = ${O.indicesGet("outputIndices",j)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${O.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${M}(dyRCorner) + ${M}(wR)) / ${M}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${M}(uniforms.Dy_shape[${U}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${M}(dyCCorner) + ${M}(wC)) / ${M}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${M}(uniforms.Dy_shape[${j}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${W.indicesToOffset(`${W.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${q.indicesToOffset(`${q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${g};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${Z()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${z()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${h}]`:""};
            ${O.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(L).declareVariables(...se,O)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${B}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${g}${h}${p}${f}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:i?i(a):a,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:I}}}),Gs,Fs,Hs,Ni,ud,js,qi,Ks,ld,zc=E(()=>{"use strict";Ec(),ut(),je(),Gs=(e,t,i,r,a,s)=>(e-1)*t+i+(r-1)*a+1-s,Fs=(e,t,i,r,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=s,i[a]=e-s):t==="SAME_LOWER"&&(i[r]=e-s,i[a]=s)},Hs=(e,t,i,r,a,s,n,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let c=e[0],f=t[o?3:1]*a;for(let h=0,g=e.length-d-(o?1:0);h<d;++h,++g){let y=e[g],_=p?y*n[h]:l[h],m=Gs(y,n[h],s[h],t[g],i[h],_);Fs(m,r,s,h,h+d),p&&l.push(n[h]*(y-1)+u[h]+(t[g]-1)*i[h]+1-s[h]-s[h+d])}l.splice(0,0,c),l.splice(o?3:1,0,f)},Ni=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,c)=>p*c,1)===0){i.length=0;for(let p=2;p<t[1].dims.length;++p)i.push(t[1].dims[p])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}Hs(o,i,u,e.autoPad,e.group,a,l,r,n,s);let d=Object.assign({},e);return Object.assign(d,{kernelShape:i,pads:a,outputPadding:n,outputShape:s,dilations:u,strides:l}),d},ud=e=>{let t=Zr(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:r,format:i,dilations:a,group:s,kernelShape:n,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},js=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},qi=(e,t,i,r)=>{let a=e.kernelCustomData.wT??e.compute(_e(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(od(s,i,r),{inputs:s})},Ks=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=Ni({...t,pads:o,strides:n,dilations:s,kernelShape:a,outputPadding:u},r);qi(e,r,l,d=>i?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ld=(e,t)=>{if(js(e.inputs,t),e.inputs[0].dims.length===3)Ks(e,t);else{let i=Ni(t,e.inputs);qi(e,e.inputs,i)}}}),Qs,dd,pd,Cc=E(()=>{"use strict";V(),G(),ae(),F(),Qs=(e,t,i,r)=>{let a=k.size(t),s=t.length,n=T("input",e,s),o=R("output",e,s),u=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),l=k.normalizeAxis(u,s),d=p=>{let c=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,f=P("uniforms.input_shape","uniforms.axis",s),h=r.reverse?c+(r.exclusive?" + 1":""):"0",g=r.reverse?f:c+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${h};
                  let last : i32 = ${g};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...N(t,t)]}),getShaderSource:d}},dd=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,a=e.inputs[1];e.compute(Qs(r,i,a,t),{inputs:[0]})},pd=e=>{let t=e.exclusive===1,i=e.reverse===1;return Y({exclusive:t,reverse:i})}}),Zs,Xs,Ys,cd,hd,Oc=E(()=>{"use strict";V(),G(),ae(),F(),Zs=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xs=(e,t,i,r)=>{let a=[];a.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let s=0;s<t;++s)a.push(i.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},Ys=(e,t)=>{let i,r,a,s,n,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([i,r,a,s]=e.dims,n=d?[i,r,a,l,l,s/l**2]:[i,r,a,s/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=d?[i,l,l,s/l**2,r,a]:[i,s/l**2,l,l,r,a],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(n),c=p.dims.length,f=e.dataType,h=T("a",f,c),g=R("output",f,c),y=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(h,g)}

  ${Xs(o,c,h,g)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",h.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let m=u?[i,r*l,a*l,s/l**2]:[i,s/l**2,r*l,a*l],w=k.size(m),$=p.dims,v=k.sortBasedOnPerm($,o);return{outputs:[{dims:m,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...N($,v)]}},getShaderSource:y}},cd=(e,t)=>{Zs(e.inputs),e.compute(Ys(e.inputs[0],t))},hd=e=>Y({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Re,xt,Kt,Li,Le,Js,en,tn,Vi,Wi,Gi,rn,an,Fi,sn,fd,md,Ac=E(()=>{"use strict";V(),G(),ae(),F(),Re=256,xt=512,Kt=2*Math.PI,Li=e=>{let t=[],i=e;for(let r of[4,2,3,5])for(;i%r===0;)t.push(r),i/=r;return i===1?t:void 0},Le=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Js=(e,t,i,r,a)=>{let s=i/e,n=xt-r,o=l=>`smem[${n}u + base + ${l*t}u]`,u=`  for (var t = local_idx; t < ${s}u; t += ${Re}u) {
`;u+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,u+=`    var leg: array<vec2<f32>, 5>;
`;for(let l=0;l<e;l++){let d=`${r}u + t + ${l*s}u`;if(l===0)u+=`    leg[0] = smem[${d}];
`;else{let p=a*Kt*l/(e*t);u+=`    { let a = ${Le(p)} * angleUnit; leg[${l}] = cmul(smem[${d}], vec2<f32>(cos(a), sin(a))); }
`}}if(u+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)u+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let l=a<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";u+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,u+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,u+=`    let oddRot = ${l};
`,u+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,u+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let l=0;l<e;l++){let d=["leg[0]"];for(let p=1;p<e;p++){let c=a*Kt*(p*l)/e,f=Le(Math.cos(c)),h=Le(Math.sin(c));d.push(`vec2<f32>(leg[${p}].x*${f} - leg[${p}].y*${h}, leg[${p}].x*${h} + leg[${p}].y*${f})`)}u+=`    ${o(l)} = ${d.join(" + ")};
`}return`${u}  }
  workgroupBarrier();
`},en=(e,t,i)=>{let r="",a=1,s=0;for(let n of e)r+=Js(n,a,t,s,i),a*=n,s=xt-s;return{code:r,resultOffset:s}},tn=(e,t,i,r,a)=>{let s=e.dims,n=s.length,o=s[n-1],u=s[t],l=i&&r?(u-1)*2:u;a!==void 0&&(l=a);let d=i&&r?1:2,p=r&&!i?Math.floor(l/2)+1:l,c=s.slice();c[t]=p,c[n-1]=d;let f=1;for(let g=t+1;g<n-1;g++)f*=s[g];let h=k.size(s)/o/u;return{dataType:e.dataType,outputDims:c,length:l,signalLength:u,inner:f,batch:h,inputComponents:o,outputComponents:d,outputLength:p,inverse:i,onesided:r}},Vi=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Wi=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Gi=(e,t,i)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,i),rn=e=>{let{dataType:t,length:i,inputComponents:r,outputComponents:a,inverse:s,onesided:n}=e,o=oe(t),u=s?1:-1,l=s?1/i:1,d=Li(i),p=c=>{let f=T("x",t,[1]),h=R("y",t,[1]),g=v=>{let b=`inBase + (${v}) * uniforms.inner * ${r}u`,x=`f32(${f.getByOffset(b)})`,S=r===2?`f32(${f.getByOffset(`${b} + 1u`)})`:"0.0";return`vec2<f32>(${x}, ${S})`},y;if(s&&n){let v=Math.floor(i/2)+1,b=i%2===0?`select(provided, provided - 1u, provided == ${v}u)`:"provided";y=`
    let provided = min(uniforms.signalLength, ${v}u);
    for (var i = local_idx; i < ${i}u; i += ${Re}u) {
      if (i < provided) { smem[i] = ${g("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${b}; k += ${Re}u) {
      let h = smem[k];
      smem[${i}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else y=`
    let loadCount = min(uniforms.signalLength, ${i}u);
    for (var i = local_idx; i < ${i}u; i += ${Re}u) {
      if (i < loadCount) { smem[i] = ${g("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:_,resultOffset:m}=en(d,i,u),w=l===1?`smem[${m}u + i]`:`smem[${m}u + i] * ${Le(l)}`,$=a===2?h.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Gi(c,f,h)}
  var<workgroup> smem: array<vec2<f32>, ${2*xt}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${c.mainStart(Re)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    ${y}
${_}    for (var i = local_idx; i < uniforms.outputLength; i += ${Re}u) {
      let v = ${w};
      let off = outBase + i * uniforms.inner * ${a}u;
      ${h.setByOffset("off",`${o}(v.x)`)}
      ${$}
    }
  }`};return{name:"DFT",shaderCache:{hint:Vi(e,"fft"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Wi(e),dispatchGroup:{x:e.batch}})}},an=e=>{let{dataType:t,length:i,inputComponents:r,outputComponents:a,inverse:s,onesided:n}=e,o=oe(t),u=s?1:-1,l=s?1/i:1,d=p=>{let c=T("x",t,[1]),f=R("y",t,[1]),h=w=>{let $=`inBase + (${w}) * uniforms.inner * ${r}u`,v=`f32(${c.getByOffset($)})`,b=r===2?`f32(${c.getByOffset(`${$} + 1u`)})`:"0.0";return`vec2<f32>(${v}, ${b})`},g=s&&n?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(i/2)+1}u);
    if (k < provided) { return ${h("k")}; }
    let m = ${i}u - k;
    if (m < provided) {
      let h = ${h("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${h("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,y=`
      let angle = ${Le(u*Kt)} * f32(knMod) / ${Le(i)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${i}u) { knMod -= ${i}u; }`,_=a===2?f.setByOffset("off + 1u",`${o}(v.y)`):"",m=l===1?"acc":`acc * ${Le(l)}`;return`
  ${Gi(p,c,f)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g}
  ${p.mainStart(Re)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${Re}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${i}u; n++) {${y}
      }
      let v = ${m};
      let off = outBase + k * uniforms.inner * ${a}u;
      ${f.setByOffset("off",`${o}(v.x)`)}
      ${_}
    }
  }`};return{name:"DFT",shaderCache:{hint:Vi(e,"direct"),inputDependencies:["type"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Wi(e),dispatchGroup:{x:e.batch}})}},Fi=e=>{if(!e||e.dataType===0)return;if(k.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},sn=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let i=t[t.length-1];if(i!==1&&i!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},fd=(e,t)=>{sn(e.inputs);let i=e.inputs[0],r=i.dims.length,a=t.inverse!==0,s=t.onesided!==0,n=Fi(e.inputs[1]);if(n!==void 0&&n<=0)throw new Error("dft_length must be greater than zero.");let o=k.normalizeAxis(Fi(e.inputs[2])??t.axis,r);if(o===r-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(a&&s&&i.dims[r-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let u=tn(i,o,a,s,n);if(u.length<=0)throw new Error(`Invalid DFT length: ${u.length}`);let l=u.length<=xt&&Li(u.length)!==void 0?rn(u):an(u);e.compute(l,{inputs:[0]})},md=e=>Y({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Qt,kt,Hi,nn,on,un,ln,ji,dn,gd,_d,Bc=E(()=>{"use strict";V(),G(),ae(),F(),Qt="[a-zA-Z]|\\.\\.\\.",kt="("+Qt+")+",Hi="^"+kt+"$",nn="("+kt+",)*"+kt,on="^"+nn+"$",un=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},ln=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,r]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(on)))throw new Error("Invalid LHS term");if(i.split(",").forEach((s,n)=>{let o=e[n].dims.slice();if(!s.match(RegExp(Hi)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,n);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(kt)))throw new Error("Invalid RHS");(a=r.match(RegExp(Qt,"g")))==null||a.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,i){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(i)}else r={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,r)}processTerm(e,t,i,r=-1){let a=i.length,s=!1,n=[],o=0;if(!e.match(RegExp(Hi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Qt,"g")),l=new un(r);return u==null||u.forEach((d,p)=>{if(d==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let c=a-u.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(n=i.slice(o,o+c),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<n.length;f++){let h=String.fromCharCode(48+f);l.addSymbol(h,p+f),this.addSymbol(h,i[o++],r)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,i[o++],r)}),l}},ji=e=>e+"_max",dn=(e,t,i,r)=>{let a=e.map(l=>l.length).map((l,d)=>T(`input${d}`,t,l)),s=k.size(r),n=R("output",t,r.length),o=[...i.symbolToInfo.keys()].filter(l=>!i.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",c="var sum = 0.0;",f="sum += prod;",h=[],g=[],y=[],_=[],m=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach(($,v)=>{var b;if(i.rhs.symbolToIndices.has(v)){let x=(b=i.rhs.symbolToIndices.get(v))==null?void 0:b[0];x!==void 0&&i.lhs.forEach((S,I)=>{if($.inputIndices.includes(I)){let C=S.symbolToIndices.get(v);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(L=>{d.push(`${a[I].indicesSet(`input${I}Indices`,L,n.indicesGet("outputIndices",x))}`)})}})}else i.lhs.forEach((x,S)=>{if($.inputIndices.includes(S)){let I=x.symbolToIndices.get(v);if(I===void 0)throw new Error("Invalid symbol error");I.forEach(C=>{h.push(`${a[S].indicesSet(`input${S}Indices`,C,`${v}`)}`)}),_.push(`prod *= ${a[S].getByIndices(`input${S}Indices`)};`)}}),g.push(`for(var ${v}: u32 = 0; ${v} < uniforms.${ji(v)}; ${v}++) {`),y.push("}")});let w=m?[...d,`let sum = ${a.map(($,v)=>$.getByIndices(`input${v}Indices`)).join(" * ")};`]:[...d,c,...g,...h,p,..._,f,...y];return`
            ${l.registerUniforms(o.map($=>({name:`${ji($)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map(($,v)=>`var input${v}Indices: ${a[v].type.indices};`).join(`
`)}
            ${w.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>i.symbolToInfo.has(p)).map(p=>{var c;return{type:12,data:((c=i.symbolToInfo.get(p))==null?void 0:c.dimValue)||0}});l.push({type:12,data:s});let d=e.map((p,c)=>[...N(p)]).reduce((p,c)=>p.concat(c),l);return d.push(...N(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}},getShaderSource:u}},gd=(e,t)=>{let i=new ln(e.inputs,t.equation),r=i.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(dn(a,e.inputs[0].dataType,i,r))},_d=e=>{let t=e.equation.replace(/\s+/g,"");return Y({equation:t})}}),pn,Ki,cn,hn,yd,Rc=E(()=>{"use strict";V(),G(),F(),pn=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,a=t.length<i.length?0:t.length-i.length;for(;r<i.length&&a<t.length;++r,++a)if(i[r]!==t[a]&&i[r]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ki=(e,t)=>{let i=e.length-t.length,r=[];for(let a=0;a<i;++a)r.push(e[a]);for(let a=0;a<t.length;++a)r.push(t[a]===1?e[a+i]:t[a]);return r},cn=(e,t)=>e.length>t.length?Ki(e,t):Ki(t,e),hn=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=cn(t,i),a=e[0].dataType,s=a===9||k.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(k.size(r)/o),l=p=>{let c=T("input",a,t.length,n),f=R("output",a,r.length,o),h;if(a===9){let g=(y,_,m="")=>`
          let outputIndices${_} = ${f.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${c.broadcastedIndicesToOffset(`outputIndices${_}`,f)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${y}[${_}] = ${m}(${c.getByOffset(`index${_}`)}[component${_}]);
        `;h=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else h=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${c.getByOffset(`inputOffset / ${n}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(c,f)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${h}`},d=[{type:12,data:u},...N(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},yd=e=>{pn(e.inputs),e.compute(hn(e.inputs),{inputs:[0]})}}),fn,wd,Mc=E(()=>{"use strict";V(),G(),F(),Qr(),fn=e=>{let t=e[0].dataType,i=k.size(e[0].dims),r=k.size(e[1].dims),a=r%4===0,s=n=>{let o=T("x",t,[1],4),u=T("bias",t,[1],4),l=R("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,c=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(d).declareVariables(o,u,l)}

    ${$r(oe(t))}

    ${n.mainStart(gt)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",vr("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/gt/4)}})}},wd=e=>{e.inputs.length<2||k.size(e.inputs[1].dims)===0?Pl(e):e.compute(fn(e.inputs))}}),mn,gn,$d,vd,Dc=E(()=>{"use strict";V(),G(),ae(),F(),mn=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},gn=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=k.normalizeAxis(t.axis,a),n=i.slice(0);n.splice(s,1,...r);let o=i[s],u=e[0].dataType===9?4:1,l=Math.ceil(k.size(n)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:s},...N(e[0].dims,e[1].dims,n)],p=c=>{let f=T("data",e[0].dataType,e[0].dims.length,u),h=T("inputIndices",e[1].dataType,e[1].dims.length),g=R("output",e[0].dataType,n.length,u),y=m=>{let w=r.length,$=`var indicesIndices${m}  = ${h.type.indices}(0);`;for(let v=0;v<w;v++)$+=`${w>1?`indicesIndices${m}[${v}]`:`indicesIndices${m}`} = ${n.length>1?`outputIndices${m}[uniforms.axis + ${v}]`:`outputIndices${m}`};`;$+=`
          var idx${m} = ${h.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${f.type.indices};
        `;for(let v=0,b=0;v<a;v++)v===s?($+=`${a>1?`dataIndices${m}[${v}]`:`dataIndices${m}`} = u32(idx${m});`,b+=w):($+=`${a>1?`dataIndices${m}[${v}]`:`dataIndices${m}`} = ${n.length>1?`outputIndices${m}[${b}]`:`outputIndices${m}`};`,b++);return $},_;if(e[0].dataType===9){let m=(w,$,v="")=>`
          let outputIndices${$} = ${g.offsetToIndices(`outputOffset + ${$}u`)};
          ${y($)};
          let offset${$} = ${f.indicesToOffset(`dataIndices${$}`)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${w}[${$}] = ${v}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${g.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${g.offsetToIndices("global_idx")};
      ${y("")};
      let value = ${f.getByIndices("dataIndices")};
      ${g.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,g)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},$d=e=>Y({axis:e.axis}),vd=(e,t)=>{let i=e.inputs;mn(i),e.compute(gn(e.inputs,t))}}),_n,bd,xd,Pc=E(()=>{"use strict";V(),G(),F(),_n=(e,t,i,r,a,s,n,o,u)=>{let l=[{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:u}],d=[s];l.push(...N(t.dims,d));let p=c=>{let f=T("indices_data",t.dataType,t.dims.length),h=R("input_slice_offsets_data",12,1,1),g=[f,h],y=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(...g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},bd=(e,t)=>{let i=e.inputs,r=i[0].dims,a=i[0].dataType,s=i[1].dims,n=s[s.length-1],o=k.sizeToDimension(s,s.length-1),u=k.sizeFromDimension(r,t.batchDims+n),l=k.sizeToDimension(r,t.batchDims),d=k.sizeFromDimension(r,t.batchDims),p=o/l,c=new Array(n),f=u;for(let $=0;$<n;++$)c[n-1-$]=f,f*=r[t.batchDims+n-1-$];let h=_n(e,i[1],c,t.batchDims,r,o,p,d,n),g=t.batchDims+n;if(g>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let y=s.slice(0,-1).concat(r.slice(g)),_=k.size(y),m=[{type:12,data:_},{type:12,data:u},...N(i[0].dims,h.dims,y)],w=$=>{let v=T("data",i[0].dataType,i[0].dims.length),b=T("slice_offsets",12,h.dims.length),x=R("output",i[0].dataType,y.length);return`
          ${$.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(v,b,x)}
            ${$.mainStart()}
            ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:y,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:m}),getShaderSource:w},{inputs:[i[0],h]})},xd=e=>({batchDims:e.batch_dims,cacheKey:""})}),yn,wn,kd,Sd,Uc=E(()=>{"use strict";V(),G(),ae(),F(),yn=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=k.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===i?Math.ceil(o/r)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},wn=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=k.normalizeAxis(t.gatherAxis,a),n=k.normalizeAxis(t.quantizeAxis,a),o=i.slice(0);o.splice(s,1,...r);let u=k.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...N(...e.map((f,h)=>f.dims),o)],c=f=>{let h=T("data",e[0].dataType,e[0].dims.length),g=T("inputIndices",e[1].dataType,e[1].dims.length),y=T("scales",e[2].dataType,e[2].dims.length),_=e.length>3?T("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=R("output",l,o.length),w=[h,g,y];_&&w.push(_);let $=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms($).declareVariables(...w,m)}
        ${f.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${g.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${g.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${h.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${h.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${g.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[s]};
        }
        ${h.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${h.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${h.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${h.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${y.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${y.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${y.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${oe(l)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,h)=>h!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,h)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:c}},kd=(e,t)=>{let i=e.inputs;yn(i,t),e.compute(wn(e.inputs,t))},Sd=e=>Y({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),$n,vn,Td,Id,Nc=E(()=>{"use strict";V(),G(),ae(),F(),$n=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},vn=(e,t)=>{let i=e[0].dims,r=e[0].dataType,a=i.length,s=e[1].dims,n=e[1].dataType,o=k.normalizeAxis(t.axis,a),u=i[o],l=s.slice(0),d=k.size(l),p=T("input",r,a),c=T("indicesInput",n,s.length),f=R("output",r,l.length),h=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return h.push(...N(i,s,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:g=>`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,c,f)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},Td=e=>Y({axis:e.axis}),Id=(e,t)=>{let i=e.inputs;$n(i),e.compute(vn(e.inputs,t))}}),bn,xn,Ed,zd,qc=E(()=>{"use strict";V(),G(),F(),bn=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},xn=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[a,s,n]=xu.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[a,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(s/u),d=Math.ceil(a/u),p=!0,c=k.size(o),f=[{type:12,data:p?l:c},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(f.push(...N(e[2].dims)),h.push("rank")),f.push(...N(o));let g=_=>{let m="";t.transA&&t.transB?m="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?m="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?m="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(m="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let w=t.alpha===1?"":"value *= uniforms.alpha;",$=T("a",e[0].dataType,e[0].dims),v=T("b",e[1].dataType,e[1].dims),b=$.type.value,x=null,S=[$,v];e.length===3&&(x=T("c",e[2].dataType,e[2].dims.length),S.push(x));let I=R("output",e[0].dataType,o.length);S.push(I);let C=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(C).declareVariables(...S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${b}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${m}
    }

    ${w}
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${b}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},y=_=>{let m=T("a",e[0].dataType,e[0].dims),w=T("b",e[1].dataType,e[1].dims),$=null,v=[m,w];e.length===3&&($=T("c",e[2].dataType,e[2].dims.length),v.push($));let b=R("output",e[0].dataType,o.length);v.push(b);let x=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",I="";t.transA&&t.transB?(I=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(I=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(I=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(I=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let C=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(x).declareVariables(...v)}
  var<workgroup> tile_a: array<array<${m.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${w.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${b.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${I}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${S}
      }
      workgroupBarrier();
    }

    ${C}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${$!=null?`let cOffset = ${$.broadcastedIndicesToOffset("vec2(m, n)",b)}; value += ${b.type.value}(uniforms.beta) * ${$.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:f}),getShaderSource:y}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:g}},Ed=e=>{let t=e.transA,i=e.transB,r=e.alpha,a=e.beta;return{transA:t,transB:i,alpha:r,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},zd=(e,t)=>{bn(e.inputs),e.compute(xn(e.inputs,t))}}),Ce,Me,Qe,Ze,kn,Sn,Tn,In,En,zn,Cn,On,Cd,Od,Lc=E(()=>{"use strict";V(),G(),ae(),F(),[Ce,Me,Qe,Ze]=[0,1,2,3],kn=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Sn=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Tn=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,In=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,En=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,zn=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ce}] = batch;
     indices[${Me}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Qe}] = u32(r);
            indices[${Ze}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Qe}] = u32(clamp(r, 0, H - 1));
          indices[${Ze}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Qe}] = gs_reflect(r, border[1], border[3]);
          indices[${Ze}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Cn=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ce}], indices[${Me}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ce}], indices[${Me}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ce}], indices[${Me}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ce}], indices[${Me}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ce}], indices[${Me}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ce}], indices[${Me}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,On=(e,t)=>{let i=T("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=T("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ce,Me,Qe,Ze]=[0,3,1,2]);let n=R("output",e[0].dataType,s.length),o=i.type.value,u=k.size(s),l=[{type:12,data:u},...N(e[0].dims,r,s)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(i,a,n)}
  ${Sn}
  ${Tn(o)}
  ${In(t)}
  ${En(t)}
  ${zn(i,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Qe}]);
      let W_in = i32(uniforms.x_shape[${Ze}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ce}], indices[${Qe}], indices[${Ze}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Cn(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let c=k.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}},getShaderSource:d}},Cd=(e,t)=>{kn(e.inputs),e.compute(On(e.inputs,t))},Od=e=>Y({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),he,An,Ad,Qi,Bn,Ot,Bd,Rd=E(()=>{"use strict";V(),G(),ae(),Fr(),Kr(),F(),je(),he=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,An=(e,t)=>{let i=e[0],r=he(e,1),a=he(e,2),s=he(e,3),n=he(e,4),o=he(e,5),u=he(e,6),l=he(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=i.dims[0],p=i.dims[1],c=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],f=p,h=0,g=0,y=Math.floor(c/t.numHeads);if(u&&l&&k.size(u.dims)&&k.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==y)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==y)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=u.dims[2],g=u.dims[2]}else if(u&&k.size(u.dims)||l&&k.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&k.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(s&&k.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=h+f,w=0;if(n&&k.size(n.dims)>0){w=8;let x=n.dims;throw x.length===1?x[0]===d?w=1:x[0]===3*d+2&&(w=3):x.length===2&&x[0]===d&&x[1]===m&&(w=5),w===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let $=!1,v=c;if(a&&k.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');v=a.dims[1]*a.dims[3],$=!0}}let b=!1;if(n&&k.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&k.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:m,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:y,vHeadSize:Math.floor(v/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:b,passPastInKv:$,qkvFormat:_}},Ad=e=>Y({...e}),Qi=Y({perm:[0,2,1,3]}),Bn=(e,t,i,r,a,s,n)=>{let o=[r,a,s],u=k.size(o),l=[{type:12,data:u},{type:12,data:n},{type:12,data:s}],d=p=>{let c=R("qkv_with_bias",t.dataType,o),f=T("qkv",t.dataType,o),h=T("bias",i.dataType,o),g=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(g).declareVariables(f,h,c)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,i],outputs:[-1]})[0]},Ot=(e,t,i,r,a,s,n,o)=>{let u=s;if(n&&k.size(n.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Bn(e,s,n,t,r,i*a,o),u=u.reshape([t,r,i,a]),i===1||r===1?u:e.compute(_e(u,Qi.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,i,a])),i===1||r===1?u:e.compute(_e(u,Qi.perm),{inputs:[u],outputs:[-1]})[0]},Bd=(e,t)=>{let i=An(e.inputs,t),r=e.inputs[0],a=he(e.inputs,1),s=he(e.inputs,2),n=he(e.inputs,3),o=he(e.inputs,4),u=he(e.inputs,5),l=he(e.inputs,6),d=he(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let p=a&&s&&a.dims.length===4&&s.dims.length===4,c=Ot(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,n,0);if(p)return Pt(e,c,a,s,o,void 0,l,d,u,i);if(!a||!s)throw new Error("key and value must be provided");let f=Ot(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,a,n,i.hiddenSize),h=Ot(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,s,n,2*i.hiddenSize);Pt(e,c,f,h,o,void 0,l,d,u,i)}}),Rn,Mn,Dn,Pn,Tr,Md,Dd,Pd=E(()=>{"use strict";V(),G(),ae(),F(),Rn=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mn=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>i.push(Number(a))),r=i.length),Y({numOutputs:r,axis:t.axis,splitSizes:i})},Dn=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${P("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Pn=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let a=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(a):r===0?i.push(`if (output_number == ${r}u) { ${a} }`):r===t-1?i.push(`else { ${a} }`):i.push(`else if (output_number == ${r}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Tr=(e,t)=>{let i=e[0].dims,r=k.size(i),a=e[0].dataType,s=k.normalizeAxis(t.axis,i.length),n=new Array(t.numOutputs),o=T("input",a,i.length),u=new Array(t.numOutputs),l=[],d=[],p=0,c=[{type:12,data:r}];for(let h=0;h<t.numOutputs;h++){p+=t.splitSizes[h],u[h]=p;let g=i.slice();g[s]=t.splitSizes[h],d.push(g),n[h]=R(`output${h}`,a,g.length),l.push({dims:d[h],dataType:e[0].dataType})}c.push({type:12,data:u},...N(i,...d));let f=h=>`
  ${h.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...n)}
  ${Dn(u.length)}
  ${Pn(n)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${P("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:c})}},Md=(e,t)=>{Rn(e.inputs);let i=e.inputs.length===1?t:Mn(e.inputs,t);e.compute(Tr(e.inputs,i),{inputs:[0]})},Dd=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Y({axis:t,numOutputs:r,splitSizes:i})}}),Un,oi,Ud,Nd=E(()=>{"use strict";V(),G(),ae(),F(),Un=(e,t)=>{let[i,r,a,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!k.areEqual(r.dims,[])&&!k.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!k.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=i.dims[0],l=i.dims[i.dims.length-2],d=a.dims[0],p=k.sizeFromDimension(i.dims,1)/l,c=o===0?a.dims[1]*2:p/n;if(o>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(c/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},oi=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],o=k.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=a===0?d*2:l/r,c=new Array(n,u,l/p,p-d),f=k.computeStrides(c),h=[{type:1,data:s},{type:12,data:c},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...N(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=y=>{let _=T("input",e[0].dataType,e[0].dims.length),m=T("position_ids",e[1].dataType,e[1].dims.length),w=T("cos_cache",e[2].dataType,e[2].dims.length),$=T("sin_cache",e[3].dataType,e[3].dims.length),v=R("output",e[0].dataType,e[0].dims.length);return y.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${y.declareVariables(_,m,w,$,v)}

        ${y.mainStart(gt)}
          let half_rotary_emb_dim = uniforms.${w.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",R("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${_.getByOffset("i")} * ${w.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${v.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${w.get("position_id","bsnh[3]")};
            ${v.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${v.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Y({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(c)/gt)},programUniforms:h})}},Ud=(e,t)=>{Un(e.inputs,t),e.compute(oi(e.inputs,t))}}),Nn,qn,Zi,Ln,qd,Vc=E(()=>{"use strict";ae(),V(),Kr(),Rd(),Pd(),je(),Nd(),F(),Nn=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=i.dims[0],l=i.dims[1],d=i.dims.length===3?o?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],p=l,c=0,f=!r||r.dims.length===0,h=Math.floor(f?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);f&&(d=h*t.numHeads);let g=s&&s.dims.length!==0,y=n&&n.dims.length!==0;if(g&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===h)throw new Error("BSNH pastKey/pastValue is not supported");if(g&&y){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(g||y)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==h)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==h)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let m=0,w=!1,$=t.kvNumHeads?h*t.kvNumHeads:d;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(p!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');$=a.dims[2]}else{if(p!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');$=a.dims[1]*a.dims[3],w=!0}}let v=e.length>4?e[5]:void 0;if(v){if(v.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let b=v.dims.reduce((x,S)=>x*S,1);if(b!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${b}.`);for(let x=0;x<v.dims.length;x++)if(v.dims[x]!==1&&v.dims[x]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${x}] = ${v.dims[x]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:c,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:$,headSize:h,vHeadSize:Math.floor($/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:w,qkvFormat:_}},qn=Y({perm:[0,2,1,3]}),Zi=(e,t,i)=>{let r=t,a=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize]),r=e.compute(_e(r,qn.perm),{inputs:[r],outputs:[-1]})[0]),r},Ln=(e,t,i,r)=>{let a=7,s=["type","type"],n=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let p=T("seq_lens",i.dataType,i.dims),c=T("total_seq_lens",r.dataType,r.dims),f=R("pos_ids",a,n),h=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(h).declareVariables(p,c,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${c.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},qd=(e,t)=>{var $;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let i=Nn(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if((($=e.inputs[1])==null?void 0:$.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=Y({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,d*i.headSize,d*i.headSize]}),[c,f,h]=!a&&!s?e.compute(Tr([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,a,s],g,y;if(t.doRotary){let v=e.compute(Ln(i.batchSize,i.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],b=e.inputs[7],x=e.inputs[8],S=Y({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),I=[c,v,b,x],C=[-1];g=e.compute(oi(I,S),{inputs:I,outputs:C})[0],I.splice(0,1,f);let L=Y({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});y=e.compute(oi(I,L),{inputs:I,outputs:C})[0]}let _=Ot(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?g:c,void 0,0),m=Zi(e,t.doRotary?y:f,i),w=Zi(e,h,i);Pt(e,_,m,w,void 0,void 0,n,o,void 0,i,u,l)}}),Xi,Vn,Wn,Ld,Wc=E(()=>{"use strict";V(),G(),je(),F(),Xi=(e,t,i,r,a,s,n,o)=>{let u=re(s),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=a*n,c=64;p===1&&(c=256);let f=[a,n,s/u],h=[a,n,2],g=["rank","type","type"],y=[];y.push(...N(f,h));let _=m=>{let w=T("x",t.dataType,3,u),$=T("scale",i.dataType,i.dims),v=T("bias",r.dataType,r.dims),b=R("output",1,3,2),x=[w,$,v,b];return`
  var<workgroup> workgroup_shared : array<${d}, ${c}>;
  const workgroup_size = ${c}u;
  ${m.declareVariables(...x)}
  ${m.mainStart(c)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${w.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${He("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${He("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:h,dataType:1}],dispatchGroup:{x:p},programUniforms:y}),getShaderSource:_},{inputs:[t,i,r],outputs:[-1]})[0]},Vn=(e,t,i)=>{let r=t[0].dims,a=r,s=2,n=r[0],o=r[1],u=k.sizeFromDimension(r,s),l=re(u),d=k.size(a)/l,p=Xi(e,t[0],t[1],t[2],n,u,o,i.epsilon),c=[n,o,u/l],f=[n,o],h=["type","none"],g=y=>{let _=T("x",t[0].dataType,c.length,l),m=T("scale_shift",1,f.length,2),w=R("output",t[0].dataType,c.length,l),$=[_,m,w];return`
  ${y.registerUniform("output_size","u32").declareVariables(...$)}
  ${y.mainStart()}
  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${w.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${w.type.value}(scale_shift.x) + ${w.type.value}(scale_shift.y);
      ${w.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...N(c,f,c)]}),getShaderSource:g},{inputs:[t[0],p]})},Wn=(e,t,i)=>{let r=t[0].dims,a=r,s=r[0],n=r[r.length-1],o=k.sizeFromDimension(r,1)/n,u=re(n),l=k.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(n/u)}],p=["type","type"],c=!1,f=[0,r.length-1];for(let _=0;_<r.length-2;_++)c=c||r[_+1]!==1,f.push(_+1);c=c&&r[r.length-1]!==1;let h=c?e.compute(_e(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(_,m)=>r[f[m]])),g=Xi(e,h,t[1],t[2],s,o,n,i.epsilon),y=_=>{let m=ue(t[0].dataType),w=u===1?"vec2f":`mat${u}x2f`,$=x=>{let S=x===0?"x":"y",I=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${m}(${I}(scale.${S}))`;case 2:return`vec2<${m}>(${I}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${m}>(${I}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},v=T("input",t[0].dataType,t[0].dims,u),b=R("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${v.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${w}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${b.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${$(0)}, ${$(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:y},{inputs:[t[0],g]})},Ld=(e,t)=>{t.format==="NHWC"?Wn(e,e.inputs,t):Vn(e,e.inputs,t)}}),Gn,Fn,Vd,Gc=E(()=>{"use strict";V(),G(),F(),Gn=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Fn=(e,t,i)=>{let r=t.simplified,a=e[0].dims,s=e[1],n=!r&&e[2],o=a,u=k.normalizeAxis(t.axis,a.length),l=k.sizeToDimension(a,u),d=k.sizeFromDimension(a,u),p=k.size(s.dims),c=n?k.size(n.dims):0;if(p!==d||n&&c!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let f=[];for(let v=0;v<a.length;++v)v<u?f.push(a[v]):f.push(1);let h=re(d),g=["type","type"],y=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/h)},{type:1,data:t.epsilon}];n&&g.push("type");let _=i>1,m=i>2,w=v=>{let b=ue(e[0].dataType),x=[T("x",e[0].dataType,e[0].dims,h),T("scale",s.dataType,s.dims,h)];n&&x.push(T("bias",n.dataType,n.dims,h)),x.push(R("output",e[0].dataType,o,h)),_&&x.push(R("mean_data_output",1,f)),m&&x.push(R("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${v.registerUniforms(S).declareVariables(...x)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${_r("f32",h)};
    var mean_square_vector = ${_r("f32",h)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ct(b,h,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${He("mean_vector",h)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${He("mean_square_vector",h)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ct(b,h,"x[j + offset]")};
      let f32scale = ${ct(b,h,"scale[j]")};
      output[j + offset] = ${x[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${ct(b,h,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},$=[{dims:o,dataType:e[0].dataType}];return _&&$.push({dims:f,dataType:1}),m&&$.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${h};${i};${r}`,inputDependencies:g},getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:w}},Vd=(e,t)=>{Gn(e.inputs),e.compute(Fn(e.inputs,t,e.outputCount))}}),Hn,Wd,Fc=E(()=>{"use strict";G(),Jr(),ea(),Hn=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wd=e=>{Hn(e.inputs);let t=mt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(Yr(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=k.size(e.inputs[0].dims.slice(0,-2)),n=k.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let o=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,i]),l=[1,s,i],d=[o,u];e.compute(ni(d,{activation:""},t,l),{inputs:d})}else e.compute(ni(e.inputs,{activation:""},t))}}}),jn,Kn,Qn,Gd,Fd,Hc=E(()=>{"use strict";V(),G(),ae(),F(),jn=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!k.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(k.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(k.size(u)!==l)throw new Error("zeroPoints input size error.")}},Kn=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,n=t.n,o=i.slice(0,r-2),u=k.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=re(t.k),c=re(l),f=re(n),h=o.concat([a,n]),g=a>1&&n/f%2===0?2:1,y=k.size(h)/f/g,_=64,m=[],w=[u,a,s/p],$=k.convertShape(e[1].dims).slice();$.splice(-1,1,l/c),m.push(...N(w)),m.push(...N($)),m.push(...N(e[2].dims)),e.length===4&&m.push(...N(k.convertShape(e[3].dims)));let v=[u,a,n/f];m.push(...N(v));let b=x=>{let S=w.length,I=T("a",e[0].dataType,S,p),C=T("b",12,$.length,c),L=T("scales",e[2].dataType,e[2].dims.length),M=[I,C,L],U=e.length===4?T("zero_points",12,e[3].dims.length):void 0;U&&M.push(U);let j=v.length,K=R("output",e[0].dataType,j,f),q=ue(e[0].dataType),W=(()=>{switch(p){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${p}-component is not supported.`)}})(),se=Math.floor(32/t.bits),O=Math.floor(se/8),Z=()=>{let D="";for(let A=0;A<O;A++){let ee=A*t.bits*4,Ae=ee+t.bits;D+=`
          // reuse a data (pass ${A})
            var input_offset${A>0?A:""} = ${A===0?I.indicesToOffset(`${I.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${A>0?A:""}: ${W};
            for (var j${A>0?A:""}: u32 = 0; j${A>0?A:""} < ${8/p}; j${A>0?A:""}++) {
              a_data${A>0?A:""}[j${A>0?A:""}] = ${I.getByOffset(`input_offset${A>0?A:""}`)};
              input_offset${A>0?A:""}++;
            }
          `;for(let ce=0;ce<f*g;ce++)D+=`
            b_value = ${c===1?`b${ce}_data`:`b${ce}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${A*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ee}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ae}u) & b_mask);`}
            b_quantized_values = ${W}(${Array.from({length:4},($e,ve)=>`${q}(b_value_lower[${ve}]), ${q}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${p===1?`${W}(${Array.from({length:8},($e,ve)=>`(b_quantized_values[${ve}] - ${U?`zero_point${ce}`:"zero_point"}) * scale${ce}`).join(", ")});`:`(b_quantized_values - ${W}(${Array(8).fill(`${U?`zero_point${ce}`:"zero_point"}`).join(",")})) * scale${ce};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(ce/f)}]${f>1?`[${ce%f}]`:""} += ${Array.from({length:8/p},($e,ve)=>`${p===1?`a_data${A>0?A:""}[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data${A>0?A:""}[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `}return D},z=()=>{let D=`
            var col_index = col * ${f};
            ${U?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${q}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let A=0;A<f*g;A++)D+=`
            let scale${A} = ${L.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${A} = ${q}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},B=()=>{let D=`col_index = col * ${f};`;for(let A=0;A<f*g;A++)D+=`
            let b${A}_data = ${C.getByIndices(`${C.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${W};
            var b_dequantized_values: ${W};`,D};return`
        var<workgroup> workgroup_shared: array<${K.type.value}, ${g*_}>;
        ${x.declareVariables(...M,K)}
        ${x.mainStart([_,1,1])}
          let output_indices = ${K.offsetToIndices(`(global_idx / ${_}) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${z()}
            for (var word: u32 = 0; word < ${l}; word += ${c}) {
              ${B()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${Z()}
                word_offset += ${se/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${K.setByIndices(`${K.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${c};${f};${g};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:y},programUniforms:m}),getShaderSource:b}},Qn=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,n=t.n,o=i.slice(0,r-2),u=k.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=re(t.k),c=re(l),f=o.concat([a,n]),h=128,g=n%8===0?8:n%4===0?4:1,y=h/g,_=Math.floor(32/t.bits),m=y*c*_,w=m/p,$=m/t.blockSize,v=k.size(f)/g,b=[],x=[u,a,s/p],S=k.convertShape(e[1].dims).slice();S.splice(-1,1,l/c),b.push(...N(x)),b.push(...N(S)),b.push(...N(e[2].dims)),e.length===4&&b.push(...N(k.convertShape(e[3].dims)));let I=[u,a,n];b.push(...N(I));let C=L=>{let M=x.length,U=T("a",e[0].dataType,M,p),j=T("b",12,S.length,c),K=T("scales",e[2].dataType,e[2].dims.length),q=[U,j,K],W=e.length===4?T("zero_points",12,e[3].dims.length):void 0;W&&q.push(W);let se=I.length,O=R("output",e[0].dataType,se),Z=ue(e[0].dataType),z=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${U.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${O.type.value}, ${y}>, ${g}>;
        ${L.declareVariables(...q,O)}
        ${L.mainStart([y,g,1])}
          let output_indices = ${O.offsetToIndices(`workgroup_index * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${$} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${h})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${U.getByIndices(`${U.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${U.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${$} + local_id.x;
            ${W?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${K.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${j.getByIndices(`${j.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${c}; i++) {
              let b_value = ${c===1?"b_data":"b_data[i]"};
              ${(()=>{let B=Math.floor(_/8),D="";for(let A=0;A<B;A++){let ee=A*t.bits*4,Ae=ee+t.bits;D+=`
              ${z()}
              {${t.bits===2?`
                let half_word = b_value >> ${A*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ee}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ae}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(ce,$e)=>`${Z}(b_value_lower[${$e}]), ${Z}(b_value_upper[${$e}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ce,$e)=>`${`dot(a_data${$e}, b_dequantized_values[${$e}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return D})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${g}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            for (var b = 0u; b < ${y}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${O.setByIndices(`${O.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${c};${y};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:C}},Gd=(e,t)=>{jn(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Qn(e.inputs,t)):e.compute(Kn(e.inputs,t))},Fd=e=>Y(e)}),Zn,Xn,Yn,Jn,eo,to,io,ro,Hd,jc=E(()=>{"use strict";V(),G(),F(),Zn=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Xn=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
            k = i32(${e.indicesGet("indices",a)}) - ${P("uniforms.pads",a,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${P("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${P("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Yn=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${P("uniforms.pads",a,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${P("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${P("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${P("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Jn=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${P("uniforms.pads",a,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${P("uniforms.x_shape",a,t)})) {
                  k = i32(${P("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${P("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},eo=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${P("uniforms.pads",a,i)};
                if (k < 0)  {
                  k += i32(${P("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${P("uniforms.x_shape",a,t)})) {
                  k -= i32(${P("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${P("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},to=(e,t,i)=>{switch(i.mode){case 0:return Xn(e,t,i.pads.length);case 1:return Yn(e,t,i.pads.length);case 2:return Jn(e,t,i.pads.length);case 3:return eo(e,t,i.pads.length);default:throw new Error("Invalid mode")}},io=(e,t)=>{let i=k.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,a=k.size(i),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...N(e[0].dims,i));let o=["rank"],u=l=>{let d=R("output",e[0].dataType,i.length),p=T("x",e[0].dataType,r.length),c=p.type.value,f=to(d,r.length,t),h=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&h.push({name:"constant_value",type:n?c:"f32"}),`
            ${l.registerUniforms(h).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(i)/64)},programUniforms:s}),getShaderSource:u}},ro=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(i[u]),s[Number(o[u])+a]=Number(i[u+o.length])}else i.forEach((o,u)=>s[Number(u)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:r,pads:n}}else return t},Hd=(e,t)=>{Zn(e.inputs);let i=ro(e.inputs,t);e.compute(io(e.inputs,i),{inputs:[0]})}}),St,Yi,Ji,er,tr,ao,so,ir,rr,jd,Kd,ar,Qd,Zd,sr,Xd,Yd,Jd,ep,Kc=E(()=>{"use strict";we(),V(),G(),F(),St=e=>{if(te.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Yi=(e,t,i)=>{let r=t.format==="NHWC",a=e.dims.slice();r&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],l=t.pads.slice();ai.adjustPoolAttributes(i,a,n,o,u,l);let d=ai.computePoolOutputShape(i,a,o,u,n,l,t.autoPad,t.ceilMode),p=Object.assign({},t);s?Object.assign(p,{kernelShape:n,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:n,strides:o,pads:l,cacheKey:t.cacheKey});let c=d.slice();return c.push(c.splice(1,1)[0]),[p,r?c:d]},Ji=(e,t)=>{let i=t.format==="NHWC",r=k.size(e),a=k.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);s.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],h=t.strides[t.strides.length-2],g=t.pads[t.pads.length/2-2],y=t.pads[t.pads.length-2];c=!!(g+y),s.push({type:12,data:f},{type:12,data:h},{type:12,data:g},{type:12,data:y}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,p,c]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=k.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[s,n,!!u,!1,!1]}},er=(e,t,i,r,a,s,n,o,u,l,d,p)=>{let c=a.format==="NHWC",f=t.type.value,h=R("output",t.type.tensor,r);if(a.kernelShape.length<=2){let g="",y="",_="",m=i-(c?2:1);if(d?g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let w=i-(c?3:2);p?y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${w}] < 0 || xIndices[${w}] >= uniforms.x_shape[${w}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${y}
              ${g}
              ${_}
              ${n}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let g=a.kernelShape.length,y=a.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var offsets: array<u32, ${g}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${g-1}u; j++) {
                  offsets[j] = offset / ${P("uniforms.kernelStrides","j",g)};
                  offset -= offsets[j] * ${P("uniforms.kernelStrides","j",g)};
                }
                offsets[${g-1}] = offset;

                isPad = false;
                for (var j = ${i-g}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${P("uniforms.strides",`j - ${i-g}u`,g)}
                    + offsets[j - ${i-g}u] - ${P("uniforms.pads","j - 2u",y)};
                  ${_}
              }
              ${n}

              output[global_idx] = value;
            }`}},tr=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ao=e=>`${tr(e)};${e.countIncludePad}`,so=e=>`${tr(e)};${e.storageOrder};${e.dilations}`,ir=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),rr=(e,t,i,r)=>{let[a,s]=Yi(t,r,i),n=T("x",t.dataType,t.dims.length),o=n.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,f,h]=Ji(s,a);d.push(...N(t.dims,s));let g=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${c};${f};${h}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(s)/64)},programUniforms:d}),getShaderSource:y=>er(y,n,t.dims.length,s.length,a,u,l,0,p,c,f,h)}},jd=e=>{let t=e.count_include_pad!==0,i=ir(e);if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:ao(r)}},Kd=(e,t)=>{St(e.inputs),e.compute(rr("AveragePool",e.inputs[0],!1,t))},ar={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Qd=e=>{let t=e.format;return{format:t,...ar,cacheKey:t}},Zd=(e,t)=>{St(e.inputs),e.compute(rr("GlobalAveragePool",e.inputs[0],!0,t))},sr=(e,t,i,r)=>{let[a,s]=Yi(t,r,i),n=`
      value = max(x_val, value);
    `,o="",u=T("x",t.dataType,t.dims.length),l=["rank"],[d,p,c,f,h]=Ji(s,a);return d.push(...N(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${c};${f};${h}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(s)/64)},programUniforms:d}),getShaderSource:g=>er(g,u,t.dims.length,s.length,a,n,o,t.dataType===10?-65504:-1e5,p,c,f,h)}},Xd=(e,t)=>{St(e.inputs),e.compute(sr("MaxPool",e.inputs[0],!1,t))},Yd=e=>{let t=e.storage_order,i=e.dilations,r=ir(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let a={storageOrder:t,dilations:i,...r,cacheKey:""};return{...a,cacheKey:so(a)}},Jd=e=>{let t=e.format;return{format:t,...ar,cacheKey:t}},ep=(e,t)=>{St(e.inputs),e.compute(sr("GlobalMaxPool",e.inputs[0],!0,t))}}),no,oo,tp,ip,Qc=E(()=>{"use strict";V(),G(),ae(),F(),no=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},oo=(e,t)=>{let i=k.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,a=r===3,s=e[0].dims,n=e[1].dataType,o=k.size(s),u=r===3||r===2,l=u?[Math.ceil(k.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,c=p?u?[Math.ceil(k.size(p.dims)/4)]:p.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,h=f===!1&&d.length===1,g=re(o),y=f&&(!u||g===4),_=y?g:1,m=y&&!u?g:1,w=T("input",u?12:r,l.length,m),$=T("scale",n,d.length),v=p?T("zero_point",u?12:r,c.length):void 0,b=R("output",n,s.length,_),x=[w,$];v&&x.push(v);let S=[l,d];p&&S.push(c);let I=[{type:12,data:o/_},{type:12,data:i},{type:12,data:t.blockSize},...N(...S,s)],C=L=>{let M=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${L.registerUniforms(M).declareVariables(...x,b)}
      ${L.mainStart()}
          ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${b.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${w.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${w.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${$.getByOffset("0")}`:h?`
            let scale_index = ${b.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${v?f?u?`
                let zero_point_input = ${v.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${v.getByOffset("0")}`:h?u?`
                let zero_point_index = ${b.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${v.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${b.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${v.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${v.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${v.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":w.type.value}(0);`};
      // Compute and write output
      ${b.setByOffset("global_idx",`${b.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:I})}},tp=(e,t)=>{no(e.inputs,t),e.compute(oo(e.inputs,t))},ip=e=>Y({axis:e.axis,blockSize:e.blockSize})}),uo,lo,rp,Zc=E(()=>{"use strict";we(),V(),F(),uo=(e,t,i)=>{let r=e===t,a=e<t&&i<0,s=e>t&&i>0;if(r||a||s)throw new Error("Range these inputs' contents are invalid.")},lo=(e,t,i,r)=>{let a=Math.abs(Math.ceil((t-e)/i)),s=[a],n=a,o=[{type:12,data:n},{type:r,data:e},{type:r,data:i},...N(s)],u=l=>{let d=R("output",r,s.length),p=d.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(c).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},rp=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),te.webgpu.validateInputContent&&uo(t,i,r),e.compute(lo(t,i,r,e.inputs[0].dataType),{inputs:[]})}}),po,co,ap,sp,Xc=E(()=>{"use strict";V(),G(),ae(),F(),po=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${a}bitcast<${r}>(oldValue) + (${i})${s}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${a}max(bitcast<f32>(oldValue), (${i}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${a}min(bitcast<${r}>(oldValue), (${i}))${s}`;case"mul":return`${a}(bitcast<${r}>(oldValue) * (${i}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},co=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i,s=1,n=Math.ceil(k.sizeToDimension(r,r.length-1)/s),o=r[r.length-1],u=k.sizeFromDimension(i,o),l=[{type:12,data:n},{type:12,data:o},{type:12,data:u},...N(e[1].dims,e[2].dims,a)],d=p=>{let c=T("indices",e[1].dataType,e[1].dims.length),f=T("updates",e[2].dataType,e[2].dims.length,s),h=t.reduction!=="none"&&t.reduction!==""?Cu("output",e[0].dataType,a.length):R("output",e[0].dataType,a.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(c,f,h)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${po(t.reduction,"output[data_offset + i]","value",h.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:d}},ap=e=>Y({reduction:e.reduction}),sp=(e,t)=>{e.compute(co(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ho,fo,mo,nr,go,_o,yo,wo,$o,vo,bo,xo,or,ko,So,To,Io,Eo,np,op,Yc=E(()=>{"use strict";V(),G(),ae(),F(),ho=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},fo=(e,t,i)=>{t.every(a=>a>=0&&a<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((a,s)=>r[a]=e[s]),r},mo=(e,t,i,r,a,s)=>{let[n,o,u]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(d=>s.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ho(r,t),t.axes.length>0&&fo(r,t.axes,l).forEach((d,p)=>r[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>a.push(Number(d))),a.length!==0&&a.length!==l&&i>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof a<"u"&&r.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},nr=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,go=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${nr("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${nr("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",_o=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",yo=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),a=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,n)=>{r[s]=a[n],r[n+i]=a[t.length+n]}),r):a},wo=(e,t,i,r)=>{let a=[];if(i.length>0)if(r.length>0){if(e.forEach(s=>a.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,n)=>a[s]=i[n])}else i.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},$o=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return i.axes.length>0?(i.axes.forEach(s=>t[s]=r),i.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},vo=(e,t,i,r,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${P("uniforms.scales","i",r)};
        var roi_low = ${P("uniforms.roi","i",a)};
        var roi_hi = ${P("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${P("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${P("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,bo=(e,t,i,r,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${P("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${P("uniforms.roi","i",s)};
          var roi_hi = ${P("uniforms.roi",`i + ${i.length}`,s)};
          var input_shape_i = ${P("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${P("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,xo=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${P("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,or=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",ko=(e,t,i,r,a)=>{let[s,n,o,u]=i.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${i[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${i[o]} - 1))`)};
      ${or(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${n}];
      var col:${l} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${i[n]} - 1) || col < 0 || col > (${i[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${i[n]} - 1));
      col = max(0, min(col, ${i[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},So=(e,t,i,r,a,s,n,o,u,l)=>{let d=i.length===2,p=!0,[c,f]=d?[0,1]:p?[2,3]:[1,2],h=e.type.value,g=y=>{let _=y===c?"row":"col";return`
      fn ${_}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${r[y]}, ${i[y]}, ${s[y]}, ${s[y]} + ${i.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${i[y]} - 1))) {
          return ${u};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${_}: ${h} = originalIdx + ${h}(i);
          if (${_} < 0 || ${_} >= ${i[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${_} = max(0, min(${_}, ${i[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${_})`)};
          data[i + 1] = ${y===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(c)};
    ${g(f)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},To=(e,t,i,r,a)=>{let[s,n,o,u,l]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${i[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${i[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${i[u]} - 1))`)};
      ${or(e,l,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${n}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${i[n]} - 1) || height < 0 || height > (${i[o]} - 1) || width < 0 || (width > ${i[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${i[n]} - 1));
      height = max(0, min(height, ${i[o]} - 1));
      width = max(0, min(width, ${i[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Io=(e,t,i,r,a,s)=>{let n=e.dims,o=yo(s,t.axes,n.length),u=wo(n,r,a,t.axes),l=r.slice();r.length===0&&(l=n.map((m,w)=>m===0?1:u[w]/m),t.keepAspectRatioPolicy!=="stretch"&&(u=$o(n,l,t)));let d=R("output",e.dataType,u.length),p=T("input",e.dataType,n.length),c=k.size(u),f=n.length===u.length&&n.every((m,w)=>m===u[w]),h=t.coordinateTransformMode==="tf_crop_and_resize",g=t.extrapolationValue,y=p.type.value,_=m=>`
      ${f?"":`
      ${go(t.coordinateTransformMode,y)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${xo(p,n)};
              ${_o(t.nearestMode,i,y)};
              ${bo(p,d,n,u,l.length,o.length,h)};
              `;case"linear":return`
              ${vo(d,n,u,l.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${ko(p,d,n,h,g)}`;if(n.length===3||n.length===5)return`${To(p,d,n,h,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${So(p,d,n,u,l,o,t.cubicCoeffA,h,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${f}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:l},{type:1,data:o},...N(n,u)]})}},Eo=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},np=(e,t)=>{let i=[],r=[],a=[],s=Eo(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");mo(e.inputs,t,s,i,r,a),e.compute(Io(e.inputs[0],t,s,i,r,a),{inputs:[0]})},op=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Y({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),zo,Co,up,Jc=E(()=>{"use strict";V(),G(),F(),zo=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Co=(e,t,i,r)=>{let a=t.simplified,s=e[0].dims,n=k.size(s),o=s,u=n,l=s.slice(-1)[0],d=r?s.slice(0,-1).concat(1):[],p=!a&&e.length>3,c=e.length>4,f=r&&i>1,h=r&&i>2,g=i>3,y=64,_=re(l),m=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],w=v=>{let b=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],x=[T("x",e[0].dataType,e[0].dims,_),T("skip",e[1].dataType,e[1].dims,_),T("gamma",e[2].dataType,e[2].dims,_)];p&&x.push(T("beta",e[3].dataType,e[3].dims,_)),c&&x.push(T("bias",e[4].dataType,e[4].dims,_)),x.push(R("output",e[0].dataType,o,_)),f&&x.push(R("mean_output",1,d)),h&&x.push(R("inv_std_output",1,d)),g&&x.push(R("input_skip_bias_sum",e[0].dataType,o,_));let S=ue(e[0].dataType),I=ue(1,_);return`

      ${v.registerUniforms(b).declareVariables(...x)}
      var<workgroup> sum_shared : array<${I}, ${y}>;
      var<workgroup> sum_squared_shared : array<${I}, ${y}>;

      ${v.mainStart([y,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${y};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${y};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${y-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":S+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ct(S,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${y};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${He("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${He("square_sum",_)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${h?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},$=[{dims:o,dataType:e[0].dataType}];return i>1&&$.push({dims:d,dataType:1}),i>2&&$.push({dims:d,dataType:1}),i>3&&$.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${h};${g}`,inputDependencies:e.map((v,b)=>"type")},getShaderSource:w,getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:m})}},up=(e,t)=>{zo(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(Co(e.inputs,t,e.outputCount,!1),{outputs:i})}}),Oo,Tt,Ao,ur,Bo,Ro,lp,dp,eh=E(()=>{"use strict";V(),G(),ae(),F(),Oo=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Tt=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},Ao=(e,t)=>{if(e.length>1){let i=Tt(e,1),r=Tt(e,2),a=Tt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),Y({starts:i,ends:r,axes:a})}else return t},ur=(e,t,i,r,a)=>{let s=e;return e<0&&(s+=i[r[t]]),a[t]<0?Math.max(0,Math.min(s,i[r[t]]-1)):Math.max(0,Math.min(s,i[r[t]]))},Bo=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${P("uniforms.input_shape","i",i.length)};
            let steps_i = ${P("uniforms.steps","i",i.length)};
            let signs_i = ${P("uniforms.signs","i",i.length)};
            let starts_i = ${P("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ro=(e,t)=>{let i=e[0].dims,r=k.size(i),a=t.axes.length>0?k.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],s=Tt(e,4);s.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((_,m)=>ur(_,m,i,a,s)),o=t.ends.map((_,m)=>ur(_,m,i,a,s));if(a.length!==n.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==i.length)for(let _=0;_<i.length;++_)a.includes(_)||(n.splice(_,0,0),o.splice(_,0,i[_]),s.splice(_,0,1));let u=s.map(_=>Math.sign(_));s.forEach((_,m,w)=>{if(_<0){let $=(o[m]-n[m])/_,v=n[m],b=v+$*s[m];n[m]=b,o[m]=v,w[m]=-_}});let l=i.slice(0);a.forEach((_,m)=>{l[_]=Math.ceil((o[_]-n[_])/s[_])});let d={dims:l,dataType:e[0].dataType},p=R("output",e[0].dataType,l.length),c=T("input",e[0].dataType,e[0].dims.length),f=k.size(l),h=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],g=[{type:12,data:f},{type:12,data:n},{type:6,data:u},{type:12,data:s},...N(e[0].dims,l)],y=_=>`
      ${_.registerUniforms(h).declareVariables(c,p)}
        ${Bo(c,p,i)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:g})}},lp=(e,t)=>{Oo(e.inputs,t);let i=Ao(e.inputs,t);e.compute(Ro(e.inputs,i),{inputs:[0]})},dp=e=>{let t=e.starts,i=e.ends,r=e.axes;return Y({starts:t,ends:i,axes:r})}}),Mo,Do,pp,cp,th=E(()=>{"use strict";V(),G(),ae(),je(),F(),Mo=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Do=(e,t)=>{let i=e.inputs[0],r=i.dims,a=k.size(r),s=r.length,n=k.normalizeAxis(t.axis,s),o=n<r.length-1,u,l=[];o?(l=Array.from({length:s},(x,S)=>S),l[n]=s-1,l[s-1]=n,u=e.compute(_e(i,l),{inputs:[i],outputs:[-1]})[0]):u=i;let d=u.dims,p=d[s-1],c=a/p,f=re(p),h=p/f,g=64;c===1&&(g=256);let y=(x,S)=>S===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:S===2?`max(${x}.x, ${x}.y)`:S===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,_=T("x",u.dataType,u.dims,f),m=R("result",u.dataType,u.dims,f),w=_.type.value,$=ue(u.dataType)==="f32"?`var threadMax = ${w}(-3.4028234663852886e+38f);`:`var threadMax = ${w}(-65504.0h);`,v=x=>`
      var<workgroup> rowMaxShared : ${w};
      var<workgroup> rowSumShared : ${w};
      var<workgroup> threadShared : array<${w}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${w} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${w}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(_,m)}
      ${x.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${w}(${y("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${w}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${w}(${He("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${w}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,b=e.compute({name:"Softmax",shaderCache:{hint:`${f};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:c},programUniforms:[{type:6,data:h}]}),getShaderSource:v},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(_e(b,l),{inputs:[b]})},pp=(e,t)=>{Mo(e.inputs),Do(e,t)},cp=e=>Y({axis:e.axis})}),lr,Po,Uo,No,hp,ih=E(()=>{"use strict";V(),G(),F(),lr=e=>Array.from(e.getBigInt64Array(),Number),Po=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(lr(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Uo=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},No=(e,t)=>{let i=e[0].dims,r=t??lr(e[1]),a=Uo(i,r),s=k.size(a),n=e[0].dataType,o=T("input",n,i.length),u=R("output",n,a.length),l=d=>`
      const inputShape = ${o.indices(...i)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...N(e[0].dims,a)]}),getShaderSource:l}},hp=e=>{Po(e.inputs),e.compute(No(e.inputs),{inputs:[0]})}}),qo,Lo,fp,rh=E(()=>{"use strict";V(),G(),F(),qo=(e,t,i,r,a)=>{let s=R("output_data",a,i.length,4),n=T("a_data",t[1].dataType,t[1].dims.length,4),o=T("b_data",t[2].dataType,t[2].dims.length,4),u=T("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,c,f)=>`select(${c}, ${p}, ${f})`;if(!r)l=s.setByOffset("global_idx",d(n.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(c,f,h="")=>{let g=`a_data[index_a${f}][component_a${f}]`,y=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${s.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${n.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${c}[${f}] = ${h}(${d(g,y,_)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Lo=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,a=e[1].dataType,s=!(k.areEqual(t,i)&&k.areEqual(i,r)),n=t,o=k.size(t);if(s){let l=mt.calcShape(mt.calcShape(t,i,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");n=l,o=k.size(n)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>qo(l,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...N(r,t,i,n)]})}},fp=e=>{e.compute(Lo(e.inputs))}}),mp,ah=E(()=>{"use strict";_c(),Kr(),yc(),wc(),$c(),vc(),bc(),Ic(),zc(),Cc(),Oc(),Ac(),Bc(),Rc(),Mc(),Dc(),Pc(),Uc(),Nc(),qc(),Lc(),Vc(),Wc(),Gc(),Fc(),Hc(),Rd(),jc(),Kc(),Qc(),Zc(),Xc(),jr(),Yc(),Nd(),Jc(),eh(),th(),Pd(),ih(),je(),Qr(),rh(),mp=new Map([["Abs",[sl]],["Acos",[nl]],["Acosh",[ol]],["Add",[Vl]],["ArgMax",[tl,wr]],["ArgMin",[el,wr]],["Asin",[ul]],["Asinh",[ll]],["Atan",[dl]],["Atanh",[pl]],["Attention",[il]],["AveragePool",[Kd,jd]],["BatchNormalization",[rl]],["BiasAdd",[al]],["BiasSplitGelu",[Ll]],["Cast",[hl,cl]],["Ceil",[ml]],["Clip",[fl]],["Concat",[Yl,Jl]],["Conv",[Sr,kr]],["ConvTranspose",[ld,ud]],["Cos",[gl]],["Cosh",[_l]],["CumSum",[dd,pd]],["DepthToSpace",[cd,hd]],["DequantizeLinear",[tp,ip]],["DFT",[fd,md]],["Div",[Wl]],["Einsum",[gd,_d]],["Elu",[yl,Ct]],["Equal",[Gl]],["Erf",[wl]],["Exp",[$l]],["Expand",[yd]],["FastGelu",[wd]],["Floor",[vl]],["FusedConv",[Sr,kr]],["Gather",[vd,$d]],["GatherElements",[Id,Td]],["GatherBlockQuantized",[kd,Sd]],["GatherND",[bd,xd]],["Gelu",[bl]],["Gemm",[zd,Ed]],["GlobalAveragePool",[Zd,Qd]],["GlobalMaxPool",[ep,Jd]],["Greater",[Kl]],["GreaterOrEqual",[Zl]],["GridSample",[Cd,Od]],["GroupQueryAttention",[qd]],["HardSigmoid",[Cl,zl]],["HardSwish",[Ol]],["InstanceNormalization",[Ld]],["LayerNormalization",[Vd]],["LeakyRelu",[xl,Ct]],["Less",[Ql]],["LessOrEqual",[Xl]],["Log",[Nl]],["MatMul",[Wd]],["MatMulNBits",[Gd,Fd]],["MaxPool",[Xd,Yd]],["Mul",[Fl]],["MultiHeadAttention",[Bd,Ad]],["Neg",[Sl]],["Not",[kl]],["Pad",[Hd]],["Pow",[Hl]],["QuickGelu",[ql,Ct]],["Range",[rp]],["Reciprocal",[Tl]],["ReduceMin",[Qu]],["ReduceMean",[Gu]],["ReduceMax",[Ku]],["ReduceSum",[Xu]],["ReduceProd",[Zu]],["ReduceL1",[Fu]],["ReduceL2",[Hu]],["ReduceLogSum",[Ju]],["ReduceLogSumExp",[ju]],["ReduceSumSquare",[Yu]],["Relu",[Il]],["Resize",[np,op]],["RotaryEmbedding",[Ud]],["ScatterND",[sp,ap]],["Sigmoid",[El]],["Sin",[Al]],["Sinh",[Bl]],["Slice",[lp,dp]],["SkipLayerNormalization",[up]],["Split",[Md,Dd]],["Sqrt",[Rl]],["Softmax",[pp,cp]],["Sub",[jl]],["Tan",[Ml]],["Tanh",[Dl]],["ThresholdedRelu",[Ul,Ct]],["Tile",[hp]],["Transpose",[Au,Bu]],["Where",[fp]]])}),gp,sh=E(()=>{"use strict";we(),Pe(),F(),gp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,r,a){Oe(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of i)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}n.setPipeline(e.computePipeline),n.setBindGroup(0,u),n.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ze(e.programInfo.name)}dispose(){}build(e,t){Oe(e.name);let i=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{i.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let a=Ou(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${r.join(`
`)}
${a.additionalImplementations}
${s}`,o=i.createShaderModule({code:n,label:e.name});Q("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let u=i.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return ze(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&i<=a&&r<=a)return[t,i,r];let s=t*i*r,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),_p={};Ut(_p,{WebGpuBackend:()=>yp});var Vo,Wo,Go,yp,nh=E(()=>{"use strict";we(),V(),Pe(),Tu(),mc(),ah(),sh(),Vo=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let a=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${a}`);break}case"rank":{let s=e[r].dims.length;i.push(`${a};${s}`);break}case"dims":{let s=e[r].dims.join(",");i.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},Wo=(e,t,i)=>{var a,s;let r=e.name;return(a=e.shaderCache)!=null&&a.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${Vo(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Go=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},yp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},a=o=>t.features.has(o)&&i.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(r);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Go(n),this.gpuDataManager=zu(this),this.programManager=new gp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Wr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Oe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let s=i[a],n=s.kernelId,o=this.kernels.get(n),u=o.kernelType,l=o.kernelName,d=s.programName,p=s.inputTensorViews,c=s.outputTensorViews,f=t[a*2],h=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let g=Number(f-this.queryTimeBase),y=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(g)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(_=>({dims:_.dims,dataType:De(_.dataType)})),outputsMetadata:c.map(_=>({dims:_.dims,dataType:De(_.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:g,endTime:y});else{let _="";p.forEach((w,$)=>{_+=`input[${$}]: [${w.dims}] | ${De(w.dataType)}, `});let m="";c.forEach((w,$)=>{m+=`output[${$}]: [${w.dims}] | ${De(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${_}${m}start time: ${g} ns, execution time: ${y-g} ns`)}ti("GPU",`${d}::${f}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),ze()}run(e,t,i,r,a,s){Oe(e.name);let n=[];for(let m=0;m<t.length;++m){let w=t[m].data;if(w===0)continue;let $=this.gpuDataManager.get(w);if(!$)throw new Error(`no GPU data for input: ${w}`);n.push($)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=i.length===0?o.map((m,w)=>w):i;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],c=[];for(let m=0;m<o.length;++m){if(!Number.isInteger(d[m])||d[m]<-3||d[m]>=s)throw new Error(`Invalid output index: ${d[m]}`);if(d[m]===-3)continue;let w=d[m]===-1,$=d[m]===-2,v=w||$?a(o[m].dataType,o[m].dims):r(d[m],o[m].dataType,o[m].dims);if(p.push(v),v.data===0)continue;let b=this.gpuDataManager.get(v.data);if(!b)throw new Error(`no GPU data for output: ${v.data}`);if(w&&this.temporaryData.push(b),$){let x=this.kernelPersistentData.get(this.currentKernelId);x||(x=[],this.kernelPersistentData.set(this.currentKernelId,x)),x.push(b)}c.push(b)}if(n.length!==t.length||c.length!==p.length){if(c.length===0)return ze(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let m=0,w=[];l.forEach(x=>{let S=typeof x.data=="number"?[x.data]:x.data;if(S.length===0)return;let I=x.type===10?2:4,C,L;x.type===10?(L=S.length>4?16:S.length>2?8:S.length*I,C=S.length>4?16:I*S.length):(L=S.length<=2?S.length*I:16,C=16),m=Math.ceil(m/L)*L,w.push(m);let M=x.type===10?8:4;m+=S.length>4?Math.ceil(S.length/M)*C:S.length*I});let $=16;m=Math.ceil(m/$)*$;let v=new ArrayBuffer(m);l.forEach((x,S)=>{let I=w[S],C=typeof x.data=="number"?[x.data]:x.data;if(x.type===6)new Int32Array(v,I,C.length).set(C);else if(x.type===12)new Uint32Array(v,I,C.length).set(C);else if(x.type===10)new Uint16Array(v,I,C.length).set(C);else if(x.type===1)new Float32Array(v,I,C.length).set(C);else throw new Error(`Unsupported uniform type: ${De(x.type)}`)});let b=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(b.buffer,0,v,0,m),this.gpuDataManager.release(b.id),f={offset:0,size:m,buffer:b.buffer}}let h=this.programManager.normalizeDispatchGroupSize(u),g=h[1]===1&&h[2]===1,y=Wo(e,t,g),_=this.programManager.getArtifact(y);if(_||(_=this.programManager.build(e,h),this.programManager.setArtifact(y,_),Q("info",()=>`[artifact] key: ${y}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let m=0;m<l.length;m++){let w=l[m],$=w.type,v=typeof w.data=="number"?1:w.data.length,[b,x]=_.uniformVariablesInfo[m];if($!==b||v!==x)throw new Error(`Uniform variable ${m} mismatch: expect type ${b} with size ${x}, got type ${$} with size ${v} in program "${_.programInfo.name}".`)}}if(Q("info",()=>`[ProgramManager] run "${e.name}" (key=${y}) with ${h[0]}x${h[1]}x${h[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(_,n,c,h,f),ze(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,r){let a=mp.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:a[0],attributes:[a[1],i]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let a=r.kernelType,s=r.kernelName,n=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Q("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(l){return i.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${l}`)),1}finally{u&&i.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${s}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,r){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(i,r,s);return a.set(t,[n,i]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let r=await gr(this,e,t);return Gr(r.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Q("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Q("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Q("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let r=0;r<i;r++){let a=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),wp={};Ut(wp,{init:()=>$p});var Zt,Fo,$p,oh=E(()=>{"use strict";V(),Pe(),G(),fc(),Zt=class vp{constructor(t,i,r,a){this.module=t,this.dataType=i,this.data=r,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(k.size(t)!==k.size(this.dims))throw new Error("Invalid new shape");return new vp(this.module,this.dataType,this.data,t)}},Fo=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,a=i/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*a++,s));let n=Number(e.getValue(r*a++,s));this.outputCount=Number(e.getValue(r*a++,s)),this.customDataOffset=Number(e.getValue(r*a++,"*")),this.customDataSize=Number(e.getValue(r*a++,s));let o=[];for(let u=0;u<n;u++){let l=Number(e.getValue(r*a++,s)),d=Number(e.getValue(r*a++,"*")),p=Number(e.getValue(r*a++,s)),c=[];for(let f=0;f<p;f++)c.push(Number(e.getValue(r*a++,s)));o.push(new Zt(e,l,d,c))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let i=((n=t==null?void 0:t.inputs)==null?void 0:n.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],a=(o,u,l)=>new Zt(this.module,u,this.output(o,l),l),s=(o,u)=>{let l=tt(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Zt(this.module,o,d,u)};return this.backend.run(e,i,r,a,s,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let r=this.module.PTR_SIZE,a=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+r*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(i)}}},$p=async(e,t,i,r)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(nh(),pi(_p)).WebGpuBackend,n=new s;await n.initialize(i,r),a("webgpu",[n,o=>n.alloc(Number(o)),o=>n.free(o),(o,u,l,d=!1)=>{if(d)Q("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),n.memcpy(Number(o),Number(u));else{Q("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));n.upload(Number(u),p)}},async(o,u,l)=>{Q("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await n.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>n.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>n.releaseKernel(o),(o,u,l,d)=>{Q("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new Fo(t,n,Number(u));return n.computeKernel(Number(o),p,d)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new Eu(i);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,u,l,d)=>s.ensureTensor(n,o,u,l,d),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o),(n,o)=>s.registerMLContext(n,o),!!i.trace])}}}),Ho,ta,ia,Ve,jo,dr,ui,ra,aa,pr,sa,na,oa,bp=E(()=>{"use strict";we(),pc(),cc(),V(),ot(),Nr(),bu(),Ho=(e,t)=>{ie()._OrtInit(e,t)!==0&&J("Can't initialize onnxruntime.")},ta=async e=>{Ho(e.wasm.numThreads,ri(e.logLevel))},ia=async(e,t)=>{var r,a;(a=(r=ie()).asyncInit)==null||a.call(r);let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(oh(),pi(wp)).init;t==="webgpu"&&await s("webgpu",ie(),e,i),t==="webnn"&&await s("webnn",ie(),e)}},Ve=new Map,jo=e=>{let t=ie(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,a,a+r)!==0&&J("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+r,s))]}finally{t.stackRestore(i)}},dr=(e,t)=>{let i=ie(),r=i.stackSave(),a=0;try{let s=i.PTR_SIZE,n=i.stackAlloc(2*s);i._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&J("Can't get session input/output metadata.");let o=Number(i.getValue(n,"*"));a=Number(i.getValue(n+s,"*"));let u=i.HEAP32[a/4];if(u===0)return[o,0];let l=i.HEAPU32[a/4+1],d=[];for(let p=0;p<l;p++){let c=Number(i.getValue(a+8+p*s,"*"));d.push(c!==0?i.UTF8ToString(c):Number(i.getValue(a+8+(p+l)*s,"*")))}return[o,u,d]}finally{i.stackRestore(r),a!==0&&i._OrtFree(a)}},ui=e=>{let t=ie(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},ra=async(e,t)=>{var p,c,f,h;let i,r,a=ie();Array.isArray(e)?[i,r]=e:e.buffer===a.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=ui(e);let s=0,n=0,o=0,u=[],l=[],d=[];try{if([n,u]=await vu(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let S=[];for(let I of t.externalData){let C=typeof I=="string"?I:I.path,L=typeof I=="string"?I:I.data;S.push(Vr(L).then(M=>{a.mountExternalData(C,M)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof S!="string"){let I=S,C=I==null?void 0:I.context,L=I==null?void 0:I.gpuDevice,M=I==null?void 0:I.deviceType,U=I==null?void 0:I.powerPreference;C?a.currentContext=C:L?a.currentContext=await a.webnnCreateMLContext(L):a.currentContext=await a.webnnCreateMLContext({deviceType:M,powerPreference:U})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(i,r,n),(p=a.webgpuOnCreateSession)==null||p.call(a,s),s===0&&J("Can't create a session."),(c=a.jsepOnCreateSession)==null||c.call(a),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[g,y]=jo(s),_=!!(t!=null&&t.enableGraphCapture),m=[],w=[],$=[],v=[],b=[];for(let S=0;S<g;S++){let[I,C,L]=dr(s,S);I===0&&J("Can't get an input name."),l.push(I);let M=a.UTF8ToString(I);m.push(M),$.push(C===0?{name:M,isTensor:!1}:{name:M,isTensor:!0,type:De(C),shape:L})}for(let S=0;S<y;S++){let[I,C,L]=dr(s,S+g);I===0&&J("Can't get an output name."),d.push(I);let M=a.UTF8ToString(I);w.push(M),v.push(C===0?{name:M,isTensor:!1}:{name:M,isTensor:!0,type:De(C),shape:L});{if(_&&(t==null?void 0:t.preferredOutputLocation)===void 0){b.push("gpu-buffer");continue}let U=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[M])??"cpu",j=a.webnnIsGraphOutput;if(U==="cpu"&&j&&j(s,M)){b.push("ml-tensor-cpu-output");continue}if(U!=="cpu"&&U!=="cpu-pinned"&&U!=="gpu-buffer"&&U!=="ml-tensor")throw new Error(`Not supported preferred output location: ${U}.`);if(_&&U!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${U}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(U)}}let x=null;return b.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(s),o===0&&J("Can't create IO binding."),x={handle:o,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>mr(S))}),Ve.set(s,[s,l,d,x,_,!1]),[s,m,w,$,v]}catch(g){throw l.forEach(y=>a._OrtFree(y)),d.forEach(y=>a._OrtFree(y)),o!==0&&a._OrtReleaseBinding(o)!==0&&J("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&J("Can't release session."),g}finally{a._free(i),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&J("Can't release session options."),u.forEach(g=>a._free(g)),(h=a.unmountExternalData)==null||h.call(a)}},aa=e=>{var u,l,d;let t=ie(),i=Ve.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,a,s,n,o]=i;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&J("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&J("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),a.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&J("Can't release session."),Ve.delete(e)},pr=async(e,t,i,r,a,s,n=!1)=>{if(!e){t.push(0);return}let o=ie(),u=o.PTR_SIZE,l=e[0],d=e[1],p=e[3],c=p,f,h;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;h=tt(et(l),d);{let m=o.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=m(r,s,_,h)}}else if(p==="ml-tensor"){let _=e[2].mlTensor;h=tt(et(l),d);let m=o.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=m(r,_,et(l),d)}else{let _=e[2];if(Array.isArray(_)){h=u*_.length,f=o._malloc(h),i.push(f);for(let m=0;m<_.length;m++){if(typeof _[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);o.setValue(f+m*u,Ie(_[m],i),"*")}}else{let m=o.webnnIsGraphInput,w=o.webnnIsGraphOutput;if(l!=="string"&&m&&w){let $=o.UTF8ToString(a);if(m(r,$)||w(r,$)){let v=et(l);h=tt(v,d),c="ml-tensor";let b=o.webnnCreateTemporaryTensor,x=o.webnnUploadTensor;if(!b||!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await b(r,v,d);x(S,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),f=S}else h=_.byteLength,f=o._malloc(h),i.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,h),f)}else h=_.byteLength,f=o._malloc(h),i.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,h),f)}}let g=o.stackSave(),y=o.stackAlloc(4*d.length);try{d.forEach((m,w)=>o.setValue(y+w*u,m,u===4?"i32":"i64"));let _=o._OrtCreateTensor(et(l),f,h,y,d.length,mr(c));_===0&&J(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(_)}finally{o.stackRestore(g)}},sa=async(e,t,i,r,a,s)=>{var M,U,j,K;let n=ie(),o=n.PTR_SIZE,u=Ve.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],c=u[3],f=u[4],h=u[5],g=t.length,y=r.length,_=0,m=[],w=[],$=[],v=[],b=[],x=n.stackSave(),S=n.stackAlloc(g*o),I=n.stackAlloc(g*o),C=n.stackAlloc(y*o),L=n.stackAlloc(y*o);try{[_,m]=$u(s),it("wasm prepareInputOutputTensor");for(let O=0;O<g;O++)await pr(i[O],w,v,e,d[t[O]],t[O],f);for(let O=0;O<y;O++)await pr(a[O],$,v,e,p[r[O]],g+r[O],f);rt("wasm prepareInputOutputTensor");for(let O=0;O<g;O++)n.setValue(S+O*o,w[O],"*"),n.setValue(I+O*o,d[t[O]],"*");for(let O=0;O<y;O++)n.setValue(C+O*o,$[O],"*"),n.setValue(L+O*o,p[r[O]],"*");if(c&&!h){let{handle:O,outputPreferredLocations:Z,outputPreferredLocationsEncoded:z}=c;if(d.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${d.length}).`);it("wasm bindInputsOutputs");for(let B=0;B<g;B++){let D=t[B];await n._OrtBindInput(O,d[D],w[B])!==0&&J(`Can't bind input[${B}] for session=${e}.`)}for(let B=0;B<y;B++){let D=r[B];(M=a[B])!=null&&M[3]?(b.push($[B]),n._OrtBindOutput(O,p[D],$[B],0)!==0&&J(`Can't bind pre-allocated output[${B}] for session=${e}.`)):n._OrtBindOutput(O,p[D],0,z[D])!==0&&J(`Can't bind output[${B}] to ${Z[B]} for session=${e}.`)}rt("wasm bindInputsOutputs"),Ve.set(e,[l,d,p,c,f,!0])}(U=n.jsepOnRunStart)==null||U.call(n,l),(j=n.webnnOnRunStart)==null||j.call(n,l);let q;c?q=await n._OrtRunWithBinding(l,c.handle,y,C,_):q=await n._OrtRun(l,I,S,g,L,y,C,_),q!==0&&J("failed to call OrtRun().");let W=[],se=[];it("wasm ProcessOutputTensor");for(let O=0;O<y;O++){let Z=Number(n.getValue(C+O*o,"*"));if(Z===$[O]||b.includes($[O])){W.push(a[O]),Z!==$[O]&&n._OrtReleaseTensor(Z)!==0&&J("Can't release tensor.");continue}let z=n.stackSave(),B=n.stackAlloc(4*o),D=!1,A,ee=0;try{n._OrtGetTensorData(Z,B,B+o,B+2*o,B+3*o)!==0&&J(`Can't access output tensor data on index ${O}.`);let Ae=o===4?"i32":"i64",ce=Number(n.getValue(B,Ae));ee=n.getValue(B+o,"*");let $e=n.getValue(B+o*2,"*"),ve=Number(n.getValue(B+o*3,Ae)),Ue=[];for(let le=0;le<ve;le++)Ue.push(Number(n.getValue($e+le*o,Ae)));n._OrtFree($e)!==0&&J("Can't free memory for tensor dims.");let Ne=Ue.reduce((le,ne)=>le*ne,1);A=De(ce);let _t=c==null?void 0:c.outputPreferredLocations[r[O]];if(A==="string"){if(_t==="gpu-buffer"||_t==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let le=[];for(let ne=0;ne<Ne;ne++){let Be=n.getValue(ee+ne*o,"*"),qp=n.getValue(ee+(ne+1)*o,"*"),Lp=ne===Ne-1?void 0:qp-Be;le.push(n.UTF8ToString(Be,Lp))}W.push([A,Ue,le,"cpu"])}else if(_t==="gpu-buffer"&&Ne>0){let le=n.jsepGetBuffer;if(!le)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ne=le(ee),Be=tt(ce,Ne);if(Be===void 0||!qr(A))throw new Error(`Unsupported data type: ${A}`);D=!0,W.push([A,Ue,{gpuBuffer:ne,download:n.jsepCreateDownloader(ne,Be,A),dispose:()=>{n._OrtReleaseTensor(Z)!==0&&J("Can't release tensor.")}},"gpu-buffer"])}else if(_t==="ml-tensor"&&Ne>0){let le=n.webnnEnsureTensor,ne=n.webnnIsGraphInputOutputTypeSupported;if(!le||!ne)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(tt(ce,Ne)===void 0||!Lr(A))throw new Error(`Unsupported data type: ${A}`);if(!ne(e,A,!1))throw new Error(`preferredLocation "ml-tensor" for ${A} output is not supported by current WebNN Context.`);let Be=await le(e,ee,ce,Ue,!1);D=!0,W.push([A,Ue,{mlTensor:Be,download:n.webnnCreateMLTensorDownloader(ee,A),dispose:()=>{n.webnnReleaseTensorId(ee),n._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(_t==="ml-tensor-cpu-output"&&Ne>0){let le=n.webnnCreateMLTensorDownloader(ee,A)(),ne=W.length;D=!0,se.push((async()=>{let Be=[ne,await le];return n.webnnReleaseTensorId(ee),n._OrtReleaseTensor(Z),Be})()),W.push([A,Ue,[],"cpu"])}else{let le=ci(A),ne=new le(Ne);new Uint8Array(ne.buffer,ne.byteOffset,ne.byteLength).set(n.HEAPU8.subarray(ee,ee+ne.byteLength)),W.push([A,Ue,ne,"cpu"])}}finally{n.stackRestore(z),A==="string"&&ee&&n._free(ee),D||n._OrtReleaseTensor(Z)}}c&&!f&&(n._OrtClearBoundOutputs(c.handle)!==0&&J("Can't clear bound outputs."),Ve.set(e,[l,d,p,c,f,!1]));for(let[O,Z]of await Promise.all(se))W[O][2]=Z;return rt("wasm ProcessOutputTensor"),W}finally{(K=n.webnnOnRunEnd)==null||K.call(n,l),n.stackRestore(x),w.forEach(q=>n._OrtReleaseTensor(q)),$.forEach(q=>n._OrtReleaseTensor(q)),v.forEach(q=>n._free(q)),_!==0&&n._OrtReleaseRunOptions(_),m.forEach(q=>n._free(q))}},na=e=>{let t=ie(),i=Ve.get(e);if(!i)throw new Error("invalid session id");let r=i[0],a=t._OrtEndProfiling(r);a===0&&J("Can't get an profile file name."),t._OrtFree(a)},oa=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),We,fe,lt,It,Et,Xt,cr,Yt,Xe,Ye,Ko,xp,kp,Sp,Tp,Ip,Ep,zp,Cp=E(()=>{"use strict";we(),bp(),ot(),Pr(),We=()=>!!te.wasm.proxy&&typeof document<"u",lt=!1,It=!1,Et=!1,Yt=new Map,Xe=(e,t)=>{let i=Yt.get(e);i?i.push(t):Yt.set(e,[t])},Ye=()=>{if(lt||!It||Et||!fe)throw new Error("worker not ready")},Ko=e=>{switch(e.data.type){case"init-wasm":lt=!1,e.data.err?(Et=!0,cr[1](e.data.err)):(It=!0,cr[0]()),Xt&&(URL.revokeObjectURL(Xt),Xt=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Yt.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},xp=async()=>{if(!It){if(lt)throw new Error("multiple calls to 'initWasm()' detected.");if(Et)throw new Error("previous call to 'initWasm()' failed.");if(lt=!0,We())return new Promise((e,t)=>{fe==null||fe.terminate(),yu().then(([i,r])=>{try{fe=r,fe.onerror=s=>t(s),fe.onmessage=Ko,cr=[e,t];let a={type:"init-wasm",in:te};if(!a.in.wasm.wasmPaths&&i){let s=Dr();s&&(a.in.wasm.wasmPaths=s)}fe.postMessage(a),Xt=i}catch(a){t(a)}},t)});try{await Ur(te.wasm),await ta(te),It=!0}catch(e){throw Et=!0,e}finally{lt=!1}}},kp=async e=>{if(We())return Ye(),new Promise((t,i)=>{Xe("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:te}};fe.postMessage(r)});await ia(te,e)},Sp=async e=>We()?(Ye(),new Promise((t,i)=>{Xe("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};fe.postMessage(r,[e.buffer])})):ui(e),Tp=async(e,t)=>{if(We()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ye(),new Promise((i,r)=>{Xe("create",[i,r]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),fe.postMessage(a,s)})}else return ra(e,t)},Ip=async e=>{if(We())return Ye(),new Promise((t,i)=>{Xe("release",[t,i]);let r={type:"release",in:e};fe.postMessage(r)});aa(e)},Ep=async(e,t,i,r,a,s)=>{if(We()){if(i.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ye(),new Promise((n,o)=>{Xe("run",[n,o]);let u=i,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};fe.postMessage(l,oa(u))})}else return sa(e,t,i,r,a,s)},zp=async e=>{if(We())return Ye(),new Promise((t,i)=>{Xe("end-profiling",[t,i]);let r={type:"end-profiling",in:e};fe.postMessage(r)});na(e)}}),hr,Qo,Op,uh=E(()=>{"use strict";we(),Cp(),V(),Mr(),bu(),hr=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Qo=e=>{switch(e[3]){case"cpu":return new Ee(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!qr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:a}=e[2];return Ee.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:a})}case"ml-tensor":{let t=e[0];if(!Lr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:a}=e[2];return Ee.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Op=class{async fetchModelAndCopyToWasmMemory(e){return Sp(await Vr(e))}async loadModel(e,t){Oe();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Tp(i,t),ze()}async dispose(){return Ip(this.sessionId)}async run(e,t,i){Oe();let r=[],a=[];Object.entries(e).forEach(p=>{let c=p[0],f=p[1],h=this.inputNames.indexOf(c);if(h===-1)throw new Error(`invalid input '${c}'`);r.push(f),a.push(h)});let s=[],n=[];Object.entries(t).forEach(p=>{let c=p[0],f=p[1],h=this.outputNames.indexOf(c);if(h===-1)throw new Error(`invalid output '${c}'`);s.push(f),n.push(h)});let o=r.map((p,c)=>hr(p,()=>`input "${this.inputNames[a[c]]}"`)),u=s.map((p,c)=>p?hr(p,()=>`output "${this.outputNames[n[c]]}"`):null),l=await Ep(this.sessionId,a,o,n,u,i),d={};for(let p=0;p<l.length;p++)d[this.outputNames[n[p]]]=s[p]??Qo(l[p]);return ze(),d}startProfiling(){}endProfiling(){zp(this.sessionId)}}}),Ap={};Ut(Ap,{OnnxruntimeWebAssemblyBackend:()=>Er,initializeFlags:()=>Ir,wasmBackend:()=>Bp});var Ir,Er,Bp,lh=E(()=>{"use strict";we(),Cp(),uh(),Ir=()=>{(typeof te.wasm.initTimeout!="number"||te.wasm.initTimeout<0)&&(te.wasm.initTimeout=0);let e=te.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),te.wasm.simd=!1),typeof te.wasm.proxy!="boolean"&&(te.wasm.proxy=!1),typeof te.wasm.trace!="boolean"&&(te.wasm.trace=!1),typeof te.wasm.numThreads!="number"||!Number.isInteger(te.wasm.numThreads)||te.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)te.wasm.numThreads=1;else{let t=typeof navigator>"u"?Kp("node:os").cpus().length:navigator.hardwareConcurrency;te.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Er=class{async init(e){Ir(),await xp(),await kp(e)}async createInferenceSessionHandler(e,t){let i=new Op;return await i.loadModel(e,t),i}},Bp=new Er});we();we();we();var dh="1.30.0";{let e=(lh(),pi(Ap)).wasmBackend;pt("webgpu",e,5),pt("webnn",e,5),pt("cpu",e,10),pt("wasm",e,10)}Object.defineProperty(te.versions,"web",{value:dh,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const At=51,Fe=81,ph=153,ht=82,ch=8,ua=At*Fe,Rp=ph*Fe,li=ch*Fe;let dt=null;function hh(e){if(dt)return dt;const t=e??fh();return dt=(async()=>await(await import(t)).default())(),dt.catch(()=>{dt=null}),dt}function fh(){const e="./",t=`${e.endsWith("/")?e:e+"/"}engine/shogoss_core.js`;return typeof location<"u"?new URL(t,location.href).href:t}class ye{constructor(t,i){H(this,"ptr");H(this,"length");H(this,"freed",!1);this.M=t,this.length=Math.max(1,i),this.ptr=t._malloc(this.length*4)}view(t=this.length){return this.M.HEAPF32.subarray(this.ptr/4,this.ptr/4+t)}set(t,i=0){this.M.HEAPF32.set(t,this.ptr/4+i)}fill(t,i=this.length){this.M.HEAPF32.fill(t,this.ptr/4,this.ptr/4+i)}free(){this.freed||(this.M._free(this.ptr),this.freed=!0)}}class Mp{constructor(){H(this,"hasMlh",!1);H(this,"pairwiseD",0)}async evaluate(t,i){return{n:i,piece:new Float32Array(i*Rp),stone:new Float32Array(i*ht),value:new Float32Array(i),pe:new Float32Array(i*li),se:new Float32Array(i*li),jpc:new Float32Array(i*ht),jnp:new Float32Array(i*ht),mlh:null,qe:null,ke:null}}dispose(){}}async function mh(e,t){const i=await fetch(e);if(!i.ok)throw new Error(`モデルの取得に失敗: ${i.status} ${e}`);const r=Number(i.headers.get("content-length")??0)||void 0;if(!i.body||!t)return new Uint8Array(await i.arrayBuffer());const a=i.body.getReader(),s=[];let n=0;for(;;){const{done:l,value:d}=await a.read();if(l)break;s.push(d),n+=d.length,t({phase:"download",loaded:n,total:r})}const o=new Uint8Array(n);let u=0;for(const l of s)o.set(l,u),u+=l.length;return o}class ft{constructor(t,i,r){H(this,"hasMlh");H(this,"pairwiseD");H(this,"info");H(this,"hasPair");this.session=t,this.manifest=i,this.hasMlh=i.has_mlh,this.pairwiseD=i.pairwise_d,this.hasPair=i.pairwise_d>0,this.info=r}static async create(t){var d;const i=t.onProgress;i==null||i({phase:"manifest"});const r=await fetch(t.manifestUrl);if(!r.ok)throw new Error(`manifest の取得に失敗: ${r.status} ${t.manifestUrl}`);const a=await r.json(),s=(t.preferWebGpu??!0)&&typeof navigator<"u"&&"gpu"in navigator;let n=a.file,o=a.dtype;s&&a.dtype==="fp16"&&((d=a.files)!=null&&d.fp32)&&await gh()===!1&&(n=a.files.fp32,o="fp32",console.info("[evaluator] adapter に shader-f16 が無いので fp32 モデルを使う"));const u=new URL(n,t.manifestUrl).href,l=await mh(u,i);return ft.createFromBytes({...a,file:n,dtype:o},l,t)}static async createFromBytes(t,i,r){const a=r.onProgress;r.wasmPaths&&(te.wasm.wasmPaths=r.wasmPaths);const s=typeof crossOriginIsolated<"u"&&crossOriginIsolated;te.wasm.numThreads=s?Math.min(4,typeof navigator<"u"&&navigator.hardwareConcurrency||1):1,a==null||a({phase:"session"});const n=(r.preferWebGpu??!0)&&typeof navigator<"u"&&"gpu"in navigator;let o=null,u="wasm",l=null;if(n)try{l=await _h(),o=await Rt.create(i,{executionProviders:["webgpu"],graphOptimizationLevel:"all"}),u="webgpu"}catch(m){console.warn("[evaluator] WebGPU EP 初期化失敗 → wasm EP",m),o=null}o||(o=await Rt.create(i,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),u="wasm");let d=new ft(o,t,{backend:u,gpuAdapterSeen:l!==null,adapter:l,modelName:t.name,dtype:t.dtype,msPerBatch:null});a==null||a({phase:"warmup"});const p=r.warmupBatchSizes??[1,2,3,4,5,6,7],c=async m=>{for(const w of p)await m.evaluate(new Float32Array(w*At*Fe),w)};let f=!0;try{await c(d),r.selfTestObs&&(f=await d.selfTest(r.selfTestObs))}catch(m){console.warn("[evaluator] warm-up 失敗",m),f=!1}if(!f&&u==="webgpu"){console.warn("[evaluator] WebGPU の self-test 不通過 → wasm EP に切り替え"),await o.release();const m=await Rt.create(i,{executionProviders:["wasm"],graphOptimizationLevel:"all"});if(d=new ft(m,t,{backend:"wasm",gpuAdapterSeen:l!==null,adapter:l,modelName:t.name,dtype:t.dtype,msPerBatch:null}),await c(d),r.selfTestObs&&!await d.selfTest(r.selfTestObs))throw new Error("NN の self-test に失敗 (wasm EP でも参照出力と一致しない)")}else if(!f)throw new Error("NN の self-test に失敗 (参照出力と一致しない)");const h=p[p.length-1],g=new Float32Array(h*At*Fe),y=5,_=performance.now();for(let m=0;m<y;m++)await d.evaluate(g,h);return d.info.msPerBatch=(performance.now()-_)/y,a==null||a({phase:"ready"}),d}async selfTest(t){const i=this.manifest.initial_reference;if(!i)return!0;const r=await this.evaluate(t,1),a=n=>{let o=0;for(let u=1;u<n.length;u++)n[u]>n[o]&&(o=u);return o},s=Number.isFinite(r.value[0])&&Math.abs(r.value[0]-i.value)<.02&&a(r.piece)===i.piece_argmax&&a(r.stone)===i.stone_argmax;return s||console.warn(`[evaluator] self-test: value ${r.value[0]} (ref ${i.value}), piece argmax ${a(r.piece)} (ref ${i.piece_argmax}), stone argmax ${a(r.stone)} (ref ${i.stone_argmax})`),s}async evaluate(t,i){const r=new Ee("float32",t.subarray(0,i*At*Fe),[i,At,9,9]),a=await this.session.run({obs:r}),s=n=>{const o=a[n];if(!o)throw new Error(`ONNX 出力 ${n} が無い`);return o.data};return{n:i,piece:s("piece"),stone:s("stone"),value:s("value"),pe:s("joint_pe"),se:s("joint_se"),jpc:s("joint_pass_col"),jnp:s("joint_no_piece_row"),mlh:this.hasMlh?s("mlh"):null,qe:this.hasPair?s("pair_qe"):null,ke:this.hasPair?s("pair_ke"):null}}async dispose(){await this.session.release()}}async function gh(){try{const e=navigator.gpu;if(!e)return null;const t=await e.requestAdapter();return!t||!t.features?null:t.features.has("shader-f16")}catch{return null}}async function _h(){try{const e=navigator.gpu;if(!e)return null;const t=await e.requestAdapter();if(!t)return null;const i=t.info??(t.requestAdapterInfo?await t.requestAdapterInfo():void 0);return i&&[i.vendor,i.architecture,i.description].filter(Boolean).join(" ")||"WebGPU"}catch{return null}}const yh=5;function zr(e,t,i){const r=e.HEAP32,a=t/4,s=new Array(i);for(let n=0;n<i;n++){const o=a+n*yh;s[n]={from:r[o],to:r[o+1],pt:r[o+2],prom:r[o+3],stone:r[o+4]}}return s}function wh(e,t){return e.from===t.from&&e.to===t.to&&e.pt===t.pt&&e.prom===t.prom&&e.stone===t.stone}function $h(e,t){for(let i=0;i<e.length;i++)if(wh(e[i],t))return i;return-1}function di(e){return`${e.from},${e.to},${e.pt},${e.prom},${e.stone}`}const Cr=["香","杏","桂","圭","銀","全","金","キ","超","ル","ナ","ビ","ク","ポ","と","石"],vh=15,bh=new Set([1,3,5,8,14]);function xh(e){return bh.has(e)}const kh=[0,2,4,6],Sh=["ongoing","black_win","white_win","draw"],Th=[null,"nipo","king_captured","both_kings_captured","twice_pass","king_captured_and_nipo","max_turn","repetition"];function Dp(e={}){return{num_simulations:200,c_puct:1.21,batch_size:7,virtual_loss:.49,fpu_parent_relative:!0,fpu_reduction:0,moves_left_utility_coef:0,moves_left_q_threshold:.8,moves_left_scale:20,draw_score_root:0,tactical_bias:.001,leaf_capture_check_enabled:!0,leaf_capture_check_include_surround:!0,dirichlet_alpha:.3,dirichlet_epsilon:.25,prior_temperature:1,...e}}class Pp{constructor(t){H(this,"s");this.s=t>>>0||2654435769}next(){let t=this.s;return t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,this.s=t,t}float(){return this.next()/4294967296}int(t){return Math.floor(this.float()*t)}}class Ih{constructor(t,i,r){H(this,"obs");H(this,"piece");H(this,"stone");H(this,"value");H(this,"pe");H(this,"se");H(this,"jpc");H(this,"jnp");H(this,"mlh");H(this,"qe");H(this,"ke");const a=Math.max(1,i);this.obs=new ye(t,a*ua),this.piece=new ye(t,a*Rp),this.stone=new ye(t,a*ht),this.value=new ye(t,a),this.pe=new ye(t,a*li),this.se=new ye(t,a*li),this.jpc=new ye(t,a*ht),this.jnp=new ye(t,a*ht),this.mlh=new ye(t,a),this.qe=new ye(t,a*Math.max(1,r)*Fe),this.ke=new ye(t,a*Math.max(1,r)*Fe)}free(){for(const t of[this.obs,this.piece,this.stone,this.value,this.pe,this.se,this.jpc,this.jnp,this.mlh,this.qe,this.ke])t.free()}}class Up{constructor(t,i,r,a={}){H(this,"cpp",null);H(this,"buf");H(this,"stats",{evalMs:0,evalCalls:0,runMs:0,sims:0});H(this,"rng");this.M=t,this.evaluator=i,this.config=r,this.opts=a,this.buf=new Ih(t,Math.max(1,r.batch_size),i.pairwiseD),this.rng=new Pp(a.seed??Date.now()&2147483647)}get reuseTree(){return this.opts.reuseTree??!1}get core(){return this.cpp}reset(){this.cpp&&(this.cpp.delete(),this.cpp=null)}dispose(){this.reset(),this.buf.free()}async evalInto(t){const i=performance.now(),r=await this.evaluator.evaluate(this.buf.obs.view(t*ua),t);this.stats.evalMs+=performance.now()-i,this.stats.evalCalls+=1,this.buf.piece.set(r.piece),this.buf.stone.set(r.stone),this.buf.value.set(r.value),this.buf.pe.set(r.pe),this.buf.se.set(r.se),this.buf.jpc.set(r.jpc),this.buf.jnp.set(r.jnp),r.mlh&&this.buf.mlh.set(r.mlh),r.qe&&r.ke&&(this.buf.qe.set(r.qe),this.buf.ke.set(r.ke))}get pairD(){return this.evaluator.pairwiseD}async run(t){const i=performance.now(),r=this.config;(this.cpp===null||!this.reuseTree)&&(this.reset(),this.cpp=new this.M.Mcts(t.core,r,this.rng.next(),this.opts.addDirichletNoise??!1));const a=this.cpp;if(a.rootTerminal())return this.stats.runMs+=performance.now()-i,{visits:new Int32Array(0),legal:[],isTerminal:!0};if(!a.rootIsExpanded()){a.fillRootObs(this.buf.obs.ptr),await this.evalInto(1);const f=this.buf;a.applyRootEval(f.piece.ptr,f.stone.ptr,f.value.view(1)[0],f.pe.ptr,f.se.ptr,f.jpc.ptr,f.jnp.ptr,f.qe.ptr,f.ke.ptr,this.pairD)}if(a.rootNLegal()===0){if(this.stats.runMs+=performance.now()-i,!t.isTerminal()){const f=t.legalMoves();if(f.length>0)return{visits:new Int32Array(f.length).fill(1),legal:f,isTerminal:!1}}return{visits:new Int32Array(0),legal:[],isTerminal:!0}}const s=Math.max(1,r.batch_size),n=this.buf;let o=0;const u=r.num_simulations;for(;o<u;){const f=Math.min(s,u-o),h=a.prepareBatch(f,n.obs.ptr);h>0&&await this.evalInto(h),a.applyBatch(n.piece.ptr,n.stone.ptr,n.value.ptr,n.pe.ptr,n.se.ptr,n.jpc.ptr,n.jnp.ptr,this.evaluator.hasMlh?n.mlh.ptr:0,n.qe.ptr,n.ke.ptr,this.pairD),o+=f}this.stats.sims+=o;const l=a.visitCountLen(),d=this.M.HEAP32.slice(a.visitPtr()/4,a.visitPtr()/4+l),p=a.legalCount(),c=zr(this.M,a.legalPtr(),p);return this.stats.runMs+=performance.now()-i,{visits:d,legal:c,isTerminal:!1}}rootPriors(){if(!this.cpp)return new Float32Array(0);const t=this.cpp.priorLen();return this.M.HEAPF32.slice(this.cpp.priorPtr()/4,this.cpp.priorPtr()/4+t)}selectAction(t){const i=t.visits;if(i.length===0)throw new Error("選択可能なアクションがない");let r=-1;for(let s=0;s<i.length;s++)i[s]>r&&(r=i[s]);if(r<=0)return this.rng.int(i.length);const a=[];for(let s=0;s<i.length;s++)i[s]===r&&a.push(s);return a.length===1?a[0]:a[this.rng.int(a.length)]}rootBestActionQ(){return this.cpp?this.cpp.rootBestActionQ():0}rootValueQ(){return this.cpp?this.cpp.rootValueQ():0}rootVisitTotal(){return this.cpp?this.cpp.rootVisitTotal():0}advance(t){!this.reuseTree||!this.cpp||this.cpp.advanceRoot(t)}extractPvByAdvance(t,i=12){const r=this.cpp;if(!r)return[];const a=[];let s=t;for(let n=0;n<i&&!(r.rootTerminal()||!r.rootIsExpanded()||r.rootNLegal()===0);n++){const o=zr(this.M,r.legalPtr(),r.legalCount());if(s<0||s>=o.length||(a.push(o[s]),!r.advanceRoot(s)))break;const u=r.visitCountLen();if(u===0)break;const l=this.M.HEAP32.subarray(r.visitPtr()/4,r.visitPtr()/4+u);let d=0;for(let p=1;p<u;p++)l[p]>l[d]&&(d=p);if(l[d]<=0)break;s=d}return a}}const Eh=1e3,zh=2,Ch=1.5;class Oh{constructor(t,i){this.M=t,this.evaluator=i}makeMcts(t,i=!1){return new Up(this.M,this.evaluator,Dp({num_simulations:t,moves_left_utility_coef:this.evaluator.hasMlh?.15:0}),{reuseTree:i,addDirichletNoise:!1})}async think(t,i){if(i<=0)return this.thinkGreedy(t);const r=Math.max(100,Math.floor(i/8)),a=this.makeMcts(Math.min(r,i),!0);try{const s=await this.searchWithExtension(a,t,i,Math.min(r,i));if(!s||s.legal.length===0)throw new Error("AI が指す合法手が存在しない (終局状態か?)");return this.finishSearch(a,s)}finally{a.dispose()}}async thinkWithWarm(t,i,r){if(i<=0)return this.thinkGreedy(t);try{const a=r.core,s=t.legalMoves();if(!a||!a.rootIsExpanded()||a.rootTerminal()||a.rootNLegal()===0||a.rootNLegal()!==s.length)return await this.think(t,i);const n=Math.max(1,r.config.num_simulations);let o=await r.run(t);if(o.isTerminal||o.legal.length===0)return await this.think(t,i);const u=new Set(o.legal.map(di)),l=new Set(s.map(di));if(u.size!==l.size||[...u].some(p=>!l.has(p)))return console.warn("[aiPlayer] warm tree 局面不一致 → 通常 think"),await this.think(t,i);let d=n;for(;d<i;)if(o=await r.run(t),d+=n,o.isTerminal||o.legal.length===0)return await this.think(t,i);return this.finishSearch(r,o)}catch(a){return console.warn("[aiPlayer] warm think 失敗 → 通常 think",a),await this.think(t,i)}finally{r.dispose()}}async searchWithExtension(t,i,r,a){let s=0,n=null;for(;s<r;)if(n=await t.run(i),s+=a,n.isTerminal||n.legal.length===0)return n;if(!n)return null;if(r<Eh||n.legal.length<2)return n;const o=Math.floor(r*zh);for(;s<o;){const u=Array.from(n.visits).sort((l,d)=>d-l);if(u.length<2||u[0]>=Ch*Math.max(1,u[1]))break;if(n=await t.run(i),s+=a,n.isTerminal||n.legal.length===0)return n}return s>r&&console.info(`[think] 難所延長: ${r} → ${s} sims`),n}finishSearch(t,i){const r=t.selectAction(i),a=i.legal[r],s=t.rootBestActionQ(),n=t.rootVisitTotal(),o=t.extractPvByAdvance(r);return{action:a,value:s,pv:o.length>0?o:[a],visits:n}}async thinkGreedy(t){const i=t.legalMoves();if(i.length===0)throw new Error("AI が指す合法手が存在しない (終局状態か?)");const r=this.makeMcts(0,!1);try{const a=await r.run(t),s=r.rootPriors();if(a.isTerminal||s.length===0||a.legal.length===0)return{action:i[0],value:0,pv:[i[0]],visits:0};let n=0;for(let u=1;u<s.length;u++)s[u]>s[n]&&(n=u);const o=a.legal[n];return{action:o,value:r.rootValueQ(),pv:[o],visits:0}}finally{r.dispose()}}}class Ah{constructor(t,i){H(this,"rng");this.M=t,this.rng=new Pp(i??Date.now()&2147483647)}async think(t,i){const r=t.legalMoves();if(r.length===0)throw new Error("random: 合法手が存在しない");if(i<=0){const s=r[this.rng.int(r.length)];return{action:s,value:0,pv:[s],visits:0}}const a=new Up(this.M,new Mp,Dp({num_simulations:i,c_puct:1.5,batch_size:1,virtual_loss:1,fpu_parent_relative:!1,tactical_bias:0}),{reuseTree:!1,seed:this.rng.next()});try{const s=await a.run(t);if(s.isTerminal||s.legal.length===0){const p=r[this.rng.int(r.length)];return{action:p,value:0,pv:[p],visits:0}}const n=a.selectAction(s),o=s.legal[n],u=a.rootBestActionQ(),l=a.rootVisitTotal(),d=a.extractPvByAdvance(n);return{action:o,value:u,pv:d.length>0?d:[o],visits:l}}finally{a.dispose()}}}function fr(e){return Gp({y:Math.floor(e/9),x:e%9})}function Bt(e){return e===0?"黒":"白"}function Bh(e){const t=[];for(let r=0;r<9;r++){const a=[];for(let s=0;s<9;s++){const n=e.core.cell(r,s);if(n<0){a.push(null);continue}const o=n&31,u=n>>5;a.push({kind:o===vh?"石":"駒",prof:Cr[o]??"?",side:Bt(u),promoted:xh(o)})}t.push(a)}const i=r=>{const a=[];for(const s of kh){const n=e.core.capturedCount(r,s);for(let o=0;o<n;o++)a.push(Cr[s])}return a};return{cells:t,hand_black:i(0),hand_white:i(1),captured_stones_black:e.core.capturedStones(0),captured_stones_white:e.core.capturedStones(1)}}function Dt(e){let t=null;return e.to>=0&&(t={from:e.from>=0?fr(e.from):null,to:fr(e.to),piece_type:Cr[e.pt]??"?",promotion:e.prom!==0}),{piece:t,stone:e.stone>=0?fr(e.stone):null}}function Rh(e,t){return{index:t,...Dt(e)}}function Mh(e,t,i){for(let r=0;r<e.length;r++){const a=Dt(e[r]),s=t==null&&a.piece===null||t!=null&&a.piece!==null&&(t.from??null)===a.piece.from&&t.to===a.piece.to&&t.piece_type===a.piece.piece_type&&(t.promotion??!1)===a.piece.promotion,n=(i??null)===a.stone;if(s&&n)return r}return-1}function Dh(e){return Sh[e]??"ongoing"}function Ph(e){return Th[e]??null}function Uh(e){return e===1?"黒":e===2?"白":null}class Or{constructor(t,i){H(this,"core");H(this,"legalCache",null);this.M=t,this.core=new t.Env(i)}reset(){this.core.reset(),this.legalCache=null}isTerminal(){return this.core.isTerminal()}get currentPlayer(){return this.core.currentPlayer()}get moveNumber(){return this.core.moveNumber()}get status(){return this.core.status()}get reason(){return this.core.reason()}get historyLength(){return this.core.historyLength()}legalMoves(){if(this.legalCache)return this.legalCache;const t=this.core.legalCount();return this.legalCache=zr(this.M,this.core.legalPtr(),t),this.legalCache}step(t){if(!this.core.step(t))throw new Error(`env.step: 不正な index ${t} (legal=${this.legalMoves().length})`);this.legalCache=null}stepAction(t){const i=$h(this.legalMoves(),t);if(i<0)throw new Error("env.stepAction: 合法手に存在しない手");return this.step(i),i}undo(t){const i=this.core.undo(t);return i>0&&(this.legalCache=null),i}obs(){const t=new ye(this.M,ua);try{return this.core.fillObs(t.ptr),t.view().slice()}finally{t.free()}}dispose(){this.core.delete()}}const Zo=200,Nh=8;class qh{constructor(t,i,r,a,s){H(this,"env");H(this,"engine");H(this,"stopped",!1);H(this,"task",null);H(this,"lastResult",null);H(this,"maxVisits");this.env=new Or(t,r.core.maxMoves());for(const n of a)this.env.stepAction(n);this.engine=i.makeMcts(Zo,!0),this.maxVisits=Nh*Math.max(s,Zo)}start(){this.task=this.loop()}async loop(){try{for(;!this.stopped&&!(this.engine.rootVisitTotal()>=this.maxVisits);){const t=await this.engine.run(this.env);if(t.isTerminal||t.legal.length===0)break;this.lastResult=t,await new Promise(i=>setTimeout(i,0))}}catch(t){console.warn("[ponder] 背景探索が異常終了 (無視して続行)",t)}}async stop(){if(this.stopped=!0,this.task){try{await this.task}catch{}this.task=null}}advanceWith(t){const i=this.lastResult;if(!i||i.legal.length===0)return this.dispose(),null;const r=di(t),a=i.legal.findIndex(n=>di(n)===r);if(a<0)return this.dispose(),null;this.engine.advance(a);const s=this.engine.core;return!s||!s.rootIsExpanded()||s.rootTerminal()?(this.dispose(),null):(this.env.dispose(),this.engine)}get visitTotal(){return this.engine.rootVisitTotal()}dispose(){this.engine.dispose(),this.env.dispose()}}const Xo=1e9,Np="best";function Lh(){const e=new Uint8Array(6);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(e);else for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return Array.from(e,t=>t.toString(16).padStart(2,"0")).join("")}function Vh(){const e="./",t=`${e.endsWith("/")?e:e+"/"}models/${Np}/manifest.json`;return typeof location<"u"?new URL(t,location.href).href:t}class Ar{constructor(t,i,r){H(this,"sessions",new Map);H(this,"ai");H(this,"random");H(this,"info");this.M=t,this.evaluator=i,this.ai=new Oh(t,i),this.random=new Ah(t),this.info=r}static async create(t={}){var s;(s=t.onProgress)==null||s.call(t,{phase:"core"});const i=await hh(t.coreUrl);let r,a;if(t.flatEvaluator)r=new Mp,a={kind:"local",backend:"flat",gpuAdapterSeen:!1,adapter:null,modelName:"flat",dtype:"-",msPerBatch:null,batchSize:7,runsInWorker:t.runsInWorker??!1};else{const n=new Or(i,Xo),o=n.obs();n.dispose();const u=await ft.create({manifestUrl:t.manifestUrl??Vh(),preferWebGpu:t.preferWebGpu??!0,wasmPaths:t.ortWasmPaths,onProgress:t.onProgress,selfTestObs:o}),l=u.info;r=u,a={kind:"local",backend:l.backend,gpuAdapterSeen:l.gpuAdapterSeen,adapter:l.adapter,modelName:l.modelName,dtype:l.dtype,msPerBatch:l.msPerBatch,batchSize:7,runsInWorker:t.runsInWorker??!1}}return new Ar(i,r,a)}static createWithEvaluator(t,i){const r=i instanceof ft?i.info:null;return new Ar(t,i,{kind:"local",backend:(r==null?void 0:r.backend)??"flat",gpuAdapterSeen:(r==null?void 0:r.gpuAdapterSeen)??!1,adapter:(r==null?void 0:r.adapter)??null,modelName:(r==null?void 0:r.modelName)??"flat",dtype:(r==null?void 0:r.dtype)??"-",msPerBatch:(r==null?void 0:r.msPerBatch)??null,batchSize:7,runsInWorker:!1})}getInfo(){return this.info}async listCheckpoints(){return{names:[Np]}}async createGame(t={}){const i=t.black??{kind:"human"},r=t.white??{kind:"random",simulations:200};for(const n of[i,r])if(n.kind==="ai"&&!n.checkpoint)throw new Error("AI プレイヤーには checkpoint が必須");const a=new Or(this.M,Xo),s={id:Lh(),env:a,black:i,white:r,history:[],evaluations:[],ponder:null,warm:null,warmForMove:-1,busy:Promise.resolve()};return this.sessions.set(s.id,s),this.toState(s,null)}async getState(t){const i=this.session(t);return this.toState(i,i.history.length>0?i.history[i.history.length-1]:null)}async submitMove(t,i){const r=this.session(t);return this.locked(r,async()=>{if(r.env.isTerminal())throw new Error("既に終局している");if(this.configFor(r,r.env.currentPlayer).kind!=="human")throw new Error("現在のプレイヤーは AI。先に ai_move を呼ぶこと");const s=r.env.legalMoves();let n;if(i.index!==void 0&&i.index!==null){if(n=i.index,n<0||n>=s.length)throw new Error(`index ${n} is out of range (legal_moves len = ${s.length})`)}else if(n=Mh(s,i.piece,i.stone),n<0)throw new Error("指定された (piece, stone) に一致する合法手が存在しない");const o=s[n],u=Bt(r.env.currentPlayer),l=r.history.length;let d=null;return r.ponder&&(await r.ponder.stop(),d=r.ponder.advanceWith(o),r.ponder=null),this.stepAndRecord(r,o),this.setWarm(r,d),r.evaluations.push({move_index:l,side:u,black_engine_value:null,white_engine_value:null,pv:[]}),this.toState(r,o)})}async requestAiMove(t){const i=this.session(t);return this.locked(i,async()=>{if(i.env.isTerminal())throw new Error("既に終局している");const r=this.configFor(i,i.env.currentPlayer);if(r.kind==="human")throw new Error("現在のプレイヤーは人間");const a=Bt(i.env.currentPlayer),s=i.history.length;i.ponder&&(await i.ponder.stop(),i.ponder.dispose(),i.ponder=null);const n=r.kind==="ai"?this.ai:this.random,o=r.simulations??200;let u=null;r.kind==="ai"&&i.warm&&i.warmForMove===i.env.moveNumber?u=i.warm:i.warm&&i.warm.dispose(),i.warm=null,i.warmForMove=-1;let l;u&&r.kind==="ai"?(console.info(`[ponder] hit: warm visits=${u.rootVisitTotal()} + think ${o}`),l=await this.ai.thinkWithWarm(i.env,o,u)):l=await n.think(i.env,o);const d=l.action;this.stepAndRecord(i,d),r.kind==="ai"&&r.ponder&&o>0&&!i.env.isTerminal()&&this.configFor(i,i.env.currentPlayer).kind==="human"&&(i.ponder=new qh(this.M,this.ai,i.env,i.history,o),i.ponder.start());const p=a==="黒"?l.value:-l.value;return i.evaluations.push({move_index:s,side:a,black_engine_value:a==="黒"?p:null,white_engine_value:a==="白"?p:null,pv:l.pv.map(Dt)}),this.toState(i,d)})}async undoMove(t,i){const r=this.session(t);return this.locked(r,async()=>{if(await this.stopPonder(r),r.history.length===0)throw new Error("巻き戻せる手がありません");if(i!=null){let s=0;for(;r.history.length>0&&s<i;)this.popOne(r),s++}else{const s=new Set;if(r.black.kind==="human"&&s.add("黒"),r.white.kind==="human"&&s.add("白"),s.size===0)this.popOne(r);else for(;r.history.length>0&&(this.popOne(r),!s.has(Bt(r.env.currentPlayer))););}const a=r.history.length>0?r.history[r.history.length-1]:null;return this.toState(r,a)})}async endGame(t){const i=this.sessions.get(t);i&&(await this.stopPonder(i),this.sessions.delete(t),i.env.dispose())}async dispose(){for(const t of[...this.sessions.keys()])await this.endGame(t);await this.evaluator.dispose()}session(t){const i=this.sessions.get(t);if(!i)throw new Error("game_id not found");return i}locked(t,i){const r=t.busy.then(i,i);return t.busy=r.catch(()=>{}),r}configFor(t,i){return i===0?t.black:t.white}stepAndRecord(t,i){t.history.push(i),t.env.stepAction(i)}popOne(t){t.env.undo(1),t.history.pop(),t.evaluations.length>0&&t.evaluations.pop()}setWarm(t,i){t.warm&&t.warm!==i&&t.warm.dispose(),t.warm=i,t.warmForMove=i?t.env.moveNumber:-1}async stopPonder(t){t.ponder&&(await t.ponder.stop(),t.ponder.dispose(),t.ponder=null),this.setWarm(t,null)}toState(t,i){const r=t.env.isTerminal()?[]:t.env.legalMoves(),a=t.history.map(Dt);return{game_id:t.id,board:Bh(t.env),current_player:Bt(t.env.currentPlayer),move_number:t.env.moveNumber,status:Dh(t.env.status),reason:Ph(t.env.reason),winner:Uh(t.env.status),last_move:i?Dt(i):null,legal_moves:r.map(Rh),move_history:a,evaluations:t.evaluations.map(s=>({...s,pv:[...s.pv]})),black:t.black,white:t.white}}}export{Np as LOCAL_CHECKPOINT_NAME,Ar as LocalEngine,Xo as NO_MAX_MOVES};
