function e(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o}!function(){const e={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,e)}catch(e){}globalThis.process={env:e}}();const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${r}`);class o{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,p=0;const{strings:u,values:{length:m}}=e;for(;p<m;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)a(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=u[p],s=c.exec(t)[2],i=s.toLowerCase()+"$lit$",r=e.getAttribute(i);e.removeAttribute(i);const o=r.split(n);this.parts.push({type:"attribute",index:h,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(n),o=r.length-1;for(let t=0;t<o;t++){let s,n=r[t];if(""===n)s=d();else{const e=c.exec(n);null!==e&&a(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(n)}i.insertBefore(s,e),this.parts.push({type:"node",index:++h})}""===r[o]?(i.insertBefore(d(),e),s.push(e)):e.data=r[o],p+=o}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(d(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(s.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=r.pop()}for(const e of s)e.parentNode.removeChild(e)}}const a=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:s},parts:i}=e,r=document.createTreeWalker(s,133,null,!1);let n=u(i),o=i[n],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,n=u(i,n),o=i[n]}d.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},u=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(l(t))return s}return-1};const m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),f={},v={};class y{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,d=r.nextNode();for(;o<i.length;)if(n=i[o],l(n)){for(;a<n.index;)a++,"TEMPLATE"===d.nodeName&&(s.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=s.pop(),d=r.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}const _=` ${i} `;class w{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const a=c.exec(e);t+=null===a?e+(s?_:r):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(S(e)||!b(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||S(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const r of e)s=t[i],void 0===s&&(s=new N(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class T extends x{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let E=!1;(()=>{try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class k{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=$(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function V(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(i);return s=t.keyString.get(r),void 0===s&&(s=new o(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const O=new Map,D=new WeakMap;const U=new class{handleAttributeExpressions(e,t,s,i){const r=t[0];if("."===r){return new T(e,t.slice(1),s).parts}return"@"===r?[new k(e,t.slice(1),i.eventContext)]:"?"===r?[new P(e,t.slice(1),s)]:new x(e,t,s).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const M=(e,...t)=>new w(e,t,"html",U),R=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const z=e=>t=>{const s=R(t.type,e);let r=O.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},O.set(s,r));let n=r.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(i);if(n=r.keyString.get(a),void 0===n){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),n=new o(t,s),r.keyString.set(a,n)}return r.stringsArray.set(t.strings,n),n},j=["html","svg"],q=new Set,F=(e,t,s)=>{q.add(e);const i=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{j.forEach(t=>{const s=O.get(R(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),h(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:r}=e;if(null==s)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let o=u(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=p(t),s.parentNode.insertBefore(t,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=u(r,o);return}o=u(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=H){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||H}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=I){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||B,r="function"==typeof i?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||B.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=H){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(void 0!==r){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;const J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function Y(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):J(e,t)}const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class Z extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==X&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return X}}Z.finalized=!0,Z.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=D.has(t),o=L&&11===t.nodeType&&!!t.host,a=o&&!q.has(r),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=D.get(t);void 0===r&&(s(t,t.firstChild),D.set(t,r=new N(Object.assign({templateFactory:V},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:z(r)},i)),a){const e=D.get(l);D.delete(l);const i=e.value instanceof y?e.value.template:void 0;F(r,l,i),s(t,t.firstChild),t.appendChild(l),D.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};let ee=class extends Z{constructor(){super(),this.busLines=[],this.businformation=[];const e=this.getAttribute("station"),t=JSON.parse(this.getAttribute("busLines"));e&&t&&(this.busLines=t,this.station=e,this.fetchData())}setConfig(e){this.validateConfig(e),this.busLines=e.busLines,this.station=e.station,this.fetchData()}validateConfig(e){if(!e.station||!e.busLines)throw new Error("You need to pass station & busLines")}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>{this.refresh()},3e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}fetchData(){this.businformation=[];const e=Math.floor((new Date).getTime()/1e3),t=`https://app.busnearby.co.il/stopSearch?query=${this.station}&locale=he`;fetch(t).then(e=>e.json()).then(t=>{const s=`https://api.busnearby.co.il/directions/index/stops/1:${t[0].stop_id}/stoptimes?numberOfDepartures=1&timeRange=86400&startTime=${e}&locale=he`;return this.stopName=t[0].stop_name,fetch(s)}).then(e=>e.json()).then(e=>{e.filter(e=>{var t,s;return!((null===(s=null===(t=e.pattern.destStop)||void 0===t?void 0:t.code)||void 0===s?void 0:s.toString())===this.station.toString())&&e.times.find(e=>this.busLines.map(e=>e.toString()).includes(e.routeShortName))}).forEach(e=>{const t=e.times[0],s=new Date(1e3*t.serviceDay),i=new Date,r=s.getDate()!==i.getDate();this.businformation.push({lineNumber:t.routeShortName,realTimeArrivalDate:this.secondsToDateOriginal(t.realtimeArrival,r),realTimeArrivalFromNow:this.getArrivalTimeDiff(t.realtimeArrival,r),realTimeArrivalDelay:t.arrivalDelay/60,isRealTime:t.realtime,destination:e.pattern.destStop.city,agency:e.pattern.route.agency})}),this.requestUpdate(),this.lastUpdated=new Date})}secondsToDateOriginal(e,t=!1){const s=new Date;return t&&s.setDate(s.getDate()+1),s.setHours(0,0,e),s}getArrivalTimeDiff(e,t=!1){const s=new Date;return(this.secondsToDateOriginal(e,t).getTime()-s.getTime())/1e3/60}getRealTimeArrivalFromNowText(e){return e>=120?`${Math.round(e/60)} hours`:e>=1&&e<=120?`${Math.round(e)} min`:`${60*e} sec`}getDelayMessage(e){const t=e>=0?"delay":"earlier";return e>=60||0===e?"":e>=1?`${Math.round(e)} min ${t}`:`${Math.round(Math.abs(60*e))} sec ${t}`}refresh(){this.fetchData(),this.handleRefreshClick()}handleRefreshClick(){const e=this.shadowRoot.querySelector(".refresh");e.classList.add("spin"),setTimeout(()=>{e.classList.remove("spin")},1e3)}getColorByAgency(e){switch(e){case"3":return"rgb(1, 131, 105)";case"15":return"rgb(247, 143, 30)";default:return"blue"}}getLastUpdated(){var e;return null===(e=this.lastUpdated)||void 0===e?void 0:e.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})}render(){return M`
      <div class="station-name">
        <span class="refresh" @click="${()=>this.refresh()}"
          >${this.getRefreshSvg()}</span
        >
        <span>${this.stopName}</span>
      </div>
      <div class="updated">
        Last updated:
        ${this.getLastUpdated()}
      </div>

      <div>
        ${this.businformation.map(e=>M`
            <div class="item">
              <div class="main-row">
                <div
                  class="lineNumber"
                  style="background-color: ${this.getColorByAgency(e.agency.id)}"
                >
                  ${e.lineNumber}
                </div>
                <div class="destDest">${e.destination}</div>
                <div class="time">
                  <div class="signal">${this.getSignalSvg()}</div>
                  <div>
                    ${this.getRealTimeArrivalFromNowText(e.realTimeArrivalFromNow)}
                  </div>
                </div>
                <div
                  class="delay"
                  style="color: ${e.realTimeArrivalDelay>=0?"red":"green"}"
                >
                  ${this.getDelayMessage(e.realTimeArrivalDelay)}
                </div>
              </div>

              <!--              <div class="extra">-->
              <!--                <div>-->
              <!--                  Real time arrival date:-->
              <!--                  ${new Date(e.realTimeArrivalDate).toLocaleString()}-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Real time arrival from now:-->
              <!--                  ${e.realTimeArrivalFromNow} minutes-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Real time arrival delay: ${e.realTimeArrivalDelay}-->
              <!--                  minutes-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Is real time: ${e.isRealTime?"Yes":"No"}-->
              <!--                </div>-->
              <!--              </div>-->

              <!--            </div>-->
              <!-- -->
            </div>
          `)}
      </div>
    `}getSignalSvg(){return M`<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      height="10px"
      width="10px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 455 455"
      xml:space="preserve"
    >
      <g>
        <path
          d="M67.5,320C30.28,320,0,350.28,0,387.5S30.28,455,67.5,455s67.5-30.28,67.5-67.5S104.72,320,67.5,320z M67.5,440   C38.552,440,15,416.449,15,387.5S38.552,335,67.5,335s52.5,23.551,52.5,52.5S96.448,440,67.5,440z"
        />
        <path
          d="M67.5,160C46.822,160,30,176.822,30,197.5S46.822,235,67.5,235c84.089,0,152.5,68.411,152.5,152.5   c0,20.678,16.822,37.5,37.5,37.5s37.5-16.822,37.5-37.5c0-60.768-23.664-117.898-66.633-160.867   C185.397,183.664,128.268,160,67.5,160z M257.5,410c-12.406,0-22.5-10.093-22.5-22.5C235,295.14,159.859,220,67.5,220   C55.094,220,45,209.907,45,197.5S55.094,175,67.5,175c56.761,0,110.124,22.104,150.26,62.24C257.896,277.375,280,330.739,280,387.5   C280,399.907,269.906,410,257.5,410z"
        />
        <path
          d="M424.532,236.656c-19.519-46.148-47.454-87.585-83.028-123.16c-35.576-35.576-77.013-63.511-123.16-83.029   C170.547,10.25,119.796,0,67.5,0C46.822,0,30,16.822,30,37.5S46.822,75,67.5,75C239.813,75,380,215.187,380,387.5   c0,20.678,16.822,37.5,37.5,37.5s37.5-16.822,37.5-37.5C455,335.205,444.749,284.454,424.532,236.656z M417.5,410   c-12.406,0-22.5-10.093-22.5-22.5C395,206.916,248.084,60,67.5,60C55.094,60,45,49.907,45,37.5S55.094,15,67.5,15   c50.277,0,99.063,9.852,145,29.282c44.359,18.762,84.194,45.618,118.396,79.82c34.203,34.202,61.059,74.037,79.821,118.397   c19.43,45.939,29.282,94.724,29.282,145C440,399.907,429.906,410,417.5,410z"
        />
      </g>
    </svg>`}getRefreshSvg(){return M`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="svg-icon"
      style="width: 15px; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden; margin-inline-end: 5px"
      viewBox="0 0 1302 1024"
      version="1.1"
    >
      <path
        d="M336.473043 508.638609c-13.423304-13.423304-34.949565-13.423304-48.083478 0l-74.050782 74.150956C191.710609 442.323478 237.534609 299.074783 338.142609 198.366609c83.556174-83.656348 194.782609-129.825391 312.987826-129.825392 118.205217 0 229.431652 46.169043 313.266087 129.825392 13.412174 13.423304 34.938435 13.423304 48.072348 0 13.133913-13.434435 13.412174-34.971826 0-48.128C916.057043 53.715478 787.500522 0.278261 651.130435 0.278261c-136.370087 0-264.926609 53.158957-361.338435 149.960348-116.535652 116.669217-169.349565 283.14713-142.514087 445.696l-87.195826-87.296c-13.412174-13.423304-34.927304-13.423304-48.061217 0-13.423304 13.434435-13.423304 34.971826 0 48.128l138.050782 138.206608c6.700522 6.722783 15.36 10.073043 24.030609 10.073044 8.659478 0 17.318957-3.350261 24.041739-10.073044l138.039652-138.206608c13.690435-13.156174 13.690435-34.693565 0.278261-48.128zM1290.24 508.638609l-138.050783-138.206609c-13.412174-13.434435-34.927304-13.434435-48.061217 0L966.077217 508.638609c-13.412174 13.434435-13.412174 34.971826 0 48.128 13.412174 13.423304 34.927304 13.423304 48.061218 0l77.968695-78.057739c9.794783 129.257739-35.205565 254.319304-127.710608 346.64626-83.556174 83.656348-194.782609 129.814261-313.266087 129.814261S421.698783 909.022609 337.864348 825.35513c-13.412174-13.434435-34.938435-13.434435-48.072348 0-13.412174 13.434435-13.412174 34.971826 0 48.128C386.203826 970.006261 514.760348 1023.443478 651.130435 1023.443478c136.370087 0 264.926609-53.158957 361.338435-149.960348 106.473739-106.607304 158.45287-250.412522 147.545043-398.970434l82.16487 82.253913c6.711652 6.711652 15.36 10.073043 24.041739 10.073043 8.648348 0 17.318957-3.361391 24.019478-10.073043 13.423304-13.156174 13.423304-34.693565 0-48.128z"
        fill="blue"
      />
    </svg>`}};var te;ee.styles=((e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new Q(s,K)})`
    :host {
      padding: 16px 10px;
      max-width: 800px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, none);
      box-sizing: border-box;
      border-radius: var(--ha-card-border-radius, 12px);
      border-width: var(--ha-card-border-width, 1px);
      border-style: solid;
      border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
      color: var(--primary-text-color);
      display: block;
      transition: all 0.3s ease-out 0s;
      position: relative;
      font-size: 14px;
    }

    .item {
      border: 1px solid black;
      padding: 15px 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .lineNumber {
      width: 25px;
      padding-left: 4px;
      padding-right: 4px;
      text-align: center;
      background-color: rgb(247, 143, 30);
      color: rgb(255, 255, 255);
      border-radius: 2px;
    }
    
    .isTomorrow {
      
    }

    .station-name {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
    }

    .time {
      display: flex;
      width: 100px;
    }

    .destDest {
      width: 200px;
      margin-inline-start: 30px;
    }

    .delay {
      margin-inline-start: 30px;
      font-size: 12px;
      color: red;
      display: flex;
      align-items: center;
      min-width: 78px;
    }

    .main-row {
      display: flex;
      align-items: center;
    }

    .signal {
      width: 20px;
      height: 20px;
      color: green;
    }

    .spin {
      animation-name: spin;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .refresh {
    }

    .updated {
      text-align: center;
      font-size: 12px;
      margin-bottom: 5px;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,e([Y()],ee.prototype,"config",void 0),e([Y()],ee.prototype,"hass",void 0),e([Y()],ee.prototype,"station",void 0),ee=e([(te="silent-bus",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(te,e):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(te,e))],ee),customElements.define("silent-bus",ee),window.customCards=window.customCards||[],window.customCards.push({type:"silent-bus",name:"dfgdgft",preview:!1,description:"dfgdfgdfg"});
