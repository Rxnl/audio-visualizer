var Ge=SpotiKit.React,g=Ge,{createContext:Oe,useCallback:B,useContext:ue,useEffect:X,useMemo:ce,useRef:Ee,useState:O}=Ge;var We=`.spotikit-app:has(> .spotikit-visualizer) {\r
	position: relative;\r
	min-height: 100%;\r
}\r
.spotikit-visualizer {\r
	position: absolute;\r
	inset: 0;\r
	min-height: 240px;\r
	background: transparent;\r
	color: #fff;\r
	overflow: hidden;\r
	font-family: var(--encore-body-font-stack, system-ui, sans-serif);\r
}\r
.spotikit-visualizer--popup {\r
	position: fixed;\r
}\r
.spotikit-visualizer > canvas,\r
.spotikit-visualizer-status {\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	transform: translate(-50%, -50%);\r
}\r
.spotikit-visualizer-status {\r
	width: min(80%, 460px);\r
	text-align: center;\r
	font-size: clamp(16px, 3vw, 24px);\r
	font-weight: 600;\r
}\r
.spotikit-visualizer-controls {\r
	position: absolute;\r
	top: 12px;\r
	right: 12px;\r
}\r
.spotikit-visualizer-controls summary {\r
	display: grid;\r
	place-items: center;\r
	width: 40px;\r
	height: 40px;\r
	margin-left: auto;\r
	border-radius: 50%;\r
	background: #242424;\r
	cursor: pointer;\r
	list-style: none;\r
}\r
.spotikit-visualizer-controls summary::-webkit-details-marker {\r
	display: none;\r
}\r
.spotikit-visualizer-settings {\r
	display: grid;\r
	gap: 12px;\r
	margin-top: 8px;\r
	padding: 14px;\r
	border-radius: 8px;\r
	background: #242424;\r
	font-size: 14px;\r
}\r
.spotikit-visualizer-settings label {\r
	display: flex;\r
	gap: 8px;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.spotikit-visualizer button,\r
.spotikit-visualizer select {\r
	border: 1px solid #717171;\r
	border-radius: 6px;\r
	padding: 6px 9px;\r
	background: #353535;\r
	color: inherit;\r
	font: inherit;\r
	cursor: pointer;\r
}\r
.spotikit-visualizer :is(button, select, summary):hover {\r
	background: #484848;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle:not(:has(details[open], :focus-visible)) {\r
	cursor: none;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle details:not([open], :hover, :focus-within) {\r
	opacity: 0;\r
}\r
`;function Ce(){return g.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},g.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},g.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),g.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})),g.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},g.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}),g.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"})))}var J=Oe(()=>{});function _e(t){let[a,i]=O(t?.fullscreenElement??null);return X(()=>{if(!t)return;let r=()=>i(t.fullscreenElement);return r(),t.addEventListener("fullscreenchange",r),()=>t.removeEventListener("fullscreenchange",r)},[t]),a}function Ve(t,a=5e3){let[i,r]=O(!0);return X(()=>{if(!t)return;let s=i,f=o=>{s!==o&&(s=o,r(o))},p=0,c=()=>{f(!0),clearTimeout(p),p=setTimeout(()=>f(!1),a)};return c(),t.addEventListener("mousemove",c),()=>{clearTimeout(p),t.removeEventListener("mousemove",c)}},[t]),i}function oe(t){let{contextType:a,onInit:i,onDispose:r,onResize:s,onRender:f,style:p,data:c,isEnabled:o}=t,e=Ee(null),[u,n]=O(null),l=B((d,h)=>{let v=Math.round(d.clientWidth*h.devicePixelRatio),m=Math.round(d.clientHeight*h.devicePixelRatio),{width:y,height:S}=t.sizeConstraint?.(v,m)??{width:v,height:m};d.width===y&&d.height===S||(d.width=y,d.height=S)},[]);return X(()=>{if(!i)return;let d=e.current;if(!d)return;let h=d.ownerDocument.defaultView;if(!h)return;let v=d.getContext(a),m=i(v);return l(d,h),s(v,m),n(m),()=>r?.(v,m)},[a,i,r]),X(()=>{if(!o||!u||!f)return;let d=e.current;if(!d)return;let h=d.ownerDocument.defaultView;if(!h)return;let v=d.getContext(a),m=0,y=S=>{u&&(f(v,c,u,S),m=h.requestAnimationFrame(y))};return m=h.requestAnimationFrame(y),()=>{m&&h.cancelAnimationFrame(m)}},[a,f,c,u,o]),X(()=>{if(!e.current)return;let d=e.current.ownerDocument.defaultView;if(!d)return;let h=new d.ResizeObserver(()=>{let v=e.current;if(!v)return;let m=v.ownerDocument.defaultView;if(!m)return;l(v,m);let y=v.getContext(a);y&&u&&s(y,u)});return h.observe(e.current),()=>h.disconnect()},[a,s,u]),g.createElement("canvas",{ref:e,style:{...p||{},...o?{}:{visibility:"hidden"}}})}function P(t,a,i){let r=0,s=t.length;for(;s-r>1;){let f=Math.floor((s+r)/2);a(t[f],f)<=i?r=f:s=f}return r}function H(t){return Math.min(Math.max(Math.pow(10,t/20),0),1)}function Xe(t){return t*t*(3-2*t)}function D(t,a,i,r,s){return t=(t-a)/(i-a),t=t*(s-r)+r,t}function St(t,a,i,r,s,f){return t=(t-a)/(i-a),t=r(t),t=t*(f-s)+s,t}function fe(t,a){return-.5*(t.x-a.x)*(t.y+a.y)}function Re(t,a,i,r,s){let f=P(t,a,s),p=t[f];if(f>t.length-2)return i(p,f);let c=t[f+1];return St(s,a(p,f),a(c,f+1),r,i(p,f),i(c,f+1))}function He(t,a,i){if(i==0)return Re(t,o=>o.x,o=>o.y,o=>o,a);let r=a-i/2,s=a+i/2,f=P(t,o=>o.x,r),p=P(t,o=>o.x,s),c=0;if(f==p){let o=t[f];if(f>t.length-2)return o.y;let e=t[f+1],u=D(r,o.x,e.x,o.y,e.y),n=D(s,o.x,e.x,o.y,e.y);return(u+n)/2}else{let o=t[f],e=t[f+1],u={x:r,y:D(r,o.x,e.x,o.y,e.y)};c=fe(u,e);for(let n=f+1;n<p;n++)o=e,e=t[n+1],c+=fe(o,e);o=e,p>t.length-2?c+=o.y*(s-o.x):(e=t[p+1],u={x:s,y:D(s,o.x,e.x,o.y,e.y)},c+=fe(o,u))}return c/i}function qe(t,a){let i=P(t,p=>p.x,a),r=t[i];if(i+1>=t.length)return(r.accumulatedIntegral??0)+r.y*(a-r.x);let s=t[i+1],f={x:a,y:D(a,r.x,s.x,r.y,s.y)};return(r.accumulatedIntegral??0)+fe(r,f)}var _=Uint8Array,le=Uint16Array,Tt=Int32Array,Ye=new _([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ze=new _([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Et=new _([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$e=function(t,a){for(var i=new le(31),r=0;r<31;++r)i[r]=a+=1<<t[r-1];for(var s=new Tt(i[30]),r=1;r<30;++r)for(var f=i[r];f<i[r+1];++f)s[f]=f-i[r]<<5|r;return{b:i,r:s}},Ke=$e(Ye,2),je=Ke.b,Rt=Ke.r;je[28]=258,Rt[258]=28;var Qe=$e(Ze,0),wt=Qe.b,jt=Qe.r,Pe=new le(32768);for(E=0;E<32768;++E)$=(E&43690)>>1|(E&21845)<<1,$=($&52428)>>2|($&13107)<<2,$=($&61680)>>4|($&3855)<<4,Pe[E]=(($&65280)>>8|($&255)<<8)>>1;var $,E,ve=(function(t,a,i){for(var r=t.length,s=0,f=new le(a);s<r;++s)t[s]&&++f[t[s]-1];var p=new le(a);for(s=1;s<a;++s)p[s]=p[s-1]+f[s-1]<<1;var c;if(i){c=new le(1<<a);var o=15-a;for(s=0;s<r;++s)if(t[s])for(var e=s<<4|t[s],u=a-t[s],n=p[t[s]-1]++<<u,l=n|(1<<u)-1;n<=l;++n)c[Pe[n]>>o]=e}else for(c=new le(r),s=0;s<r;++s)t[s]&&(c[s]=Pe[p[t[s]-1]++]>>15-t[s]);return c}),me=new _(288);for(E=0;E<144;++E)me[E]=8;var E;for(E=144;E<256;++E)me[E]=9;var E;for(E=256;E<280;++E)me[E]=7;var E;for(E=280;E<288;++E)me[E]=8;var E,Je=new _(32);for(E=0;E<32;++E)Je[E]=5;var E;var At=ve(me,9,1);var Dt=ve(Je,5,1),Fe=function(t){for(var a=t[0],i=1;i<t.length;++i)t[i]>a&&(a=t[i]);return a},q=function(t,a,i){var r=a/8|0;return(t[r]|t[r+1]<<8)>>(a&7)&i},ze=function(t,a){var i=a/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(a&7)},Lt=function(t){return(t+7)/8|0},Ct=function(t,a,i){return(a==null||a<0)&&(a=0),(i==null||i>t.length)&&(i=t.length),new _(t.subarray(a,i))};var Ft=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Y=function(t,a,i){var r=new Error(a||Ft[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,Y),!i)throw r;return r},zt=function(t,a,i,r){var s=t.length,f=r?r.length:0;if(!s||a.f&&!a.l)return i||new _(0);var p=!i,c=p||a.i!=2,o=a.i;p&&(i=new _(s*3));var e=function(be){var Se=i.length;if(be>Se){var Te=new _(Math.max(Se*2,be));Te.set(i),i=Te}},u=a.f||0,n=a.p||0,l=a.b||0,d=a.l,h=a.d,v=a.m,m=a.n,y=s*8;do{if(!d){u=q(t,n,1);var S=q(t,n+1,3);if(n+=3,S)if(S==1)d=At,h=Dt,v=9,m=5;else if(S==2){var T=q(t,n,31)+257,C=q(t,n+10,15)+4,L=T+q(t,n+5,31)+1;n+=14;for(var I=new _(L),U=new _(19),b=0;b<C;++b)U[Et[b]]=q(t,n+b*3,7);n+=C*3;for(var F=Fe(U),k=(1<<F)-1,x=ve(U,F,1),b=0;b<L;){var z=x[q(t,n,k)];n+=z&15;var R=z>>4;if(R<16)I[b++]=R;else{var G=0,M=0;for(R==16?(M=3+q(t,n,3),n+=2,G=I[b-1]):R==17?(M=3+q(t,n,7),n+=3):R==18&&(M=11+q(t,n,127),n+=7);M--;)I[b++]=G}}var te=I.subarray(0,T),V=I.subarray(T);v=Fe(te),m=Fe(V),d=ve(te,v,1),h=ve(V,m,1)}else Y(1);else{var R=Lt(n)+4,w=t[R-4]|t[R-3]<<8,A=R+w;if(A>s){o&&Y(0);break}c&&e(l+w),i.set(t.subarray(R,A),l),a.b=l+=w,a.p=n=A*8,a.f=u;continue}if(n>y){o&&Y(0);break}}c&&e(l+131072);for(var K=(1<<v)-1,Ae=(1<<m)-1,de=n;;de=n){var G=d[ze(t,n)&K],j=G>>4;if(n+=G&15,n>y){o&&Y(0);break}if(G||Y(2),j<256)i[l++]=j;else if(j==256){de=n,d=null;break}else{var ye=j-254;if(j>264){var b=j-257,Q=Ye[b];ye=q(t,n,(1<<Q)-1)+je[b],n+=Q}var se=h[ze(t,n)&Ae],Z=se>>4;se||Y(3),n+=se&15;var V=wt[Z];if(Z>3){var Q=Ze[Z];V+=ze(t,n)&(1<<Q)-1,n+=Q}if(n>y){o&&Y(0);break}c&&e(l+131072);var xe=l+ye;if(l<V){var ge=f-V,De=Math.min(V,xe);for(ge+l<0&&Y(3);l<De;++l)i[l]=r[ge+l]}for(;l<xe;++l)i[l]=i[l-V]}}a.l=d,a.p=de,a.b=l,a.f=u,d&&(u=1,a.m=v,a.d=h,a.n=m)}while(!u);return l!=i.length&&p?Ct(i,0,l):i.subarray(0,l)};var Pt=new _(0);var Ut=function(t,a){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Y(6,"invalid zlib data"),(t[1]>>5&1)==+!a&&Y(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function et(t,a){return zt(t.subarray(Ut(t,a&&a.dictionary),-4),{i:2},a&&a.out,a&&a.dictionary)}var It=typeof TextDecoder<"u"&&new TextDecoder,kt=0;try{It.decode(Pt,{stream:!0}),kt=1}catch{}function Mt(t){t=t.replace(/-/g,"+").replace(/_/g,"/");let a=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),i=et(a),r=new TextDecoder().decode(i).split(" ").map(e=>parseInt(e)),s=[];if(r.length<3)return s;let f=r.shift(),c=r.shift()/f,o=r.shift();if(r.length<o)return s;for(let e=0;e<o;e++){let u=[],n=r.shift();if(r.length<n+(o-e-1))return s;for(let l=0;l<n;l++){let d=r.shift()*c;u.push(l==0?d:u[l-1]+d)}s.push(u)}return s}function we(t){let{rhythm_version:a,rhythmstring:i}=t.track;if(!(a!==1||!i))try{let r=Mt(i);if(r.length&&r.every(s=>s.every(Number.isFinite)))return r}catch{}}var N=class{static{this.correctLatency=!0}static{this.references=0}static addReference(){this.references++,this.resume()}static removeReference(){if(this.references--,this.references===0){let a=this.context;this.context=void 0,a?.close().catch(()=>{})}}static setCorrectLatency(a){this.correctLatency=a,a?this.resume():this.context?.suspend().catch(()=>{})}static resume(){if(!(!this.correctLatency||!this.references||typeof AudioContext!="function"))try{this.context??=new AudioContext,this.context.state!=="running"&&this.context.resume().catch(()=>{})}catch{}}static getProgress(){let a=this.correctLatency&&this.context?.outputLatency||0;return Math.max(0,SpotiKit.Player.position/1e3-a)}};var tt=[1,2],ae=10,ee=20,he=10,Bt=[{name:"Beats",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.beats?.length,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis.beats;if(!s)return;let f=P(s,c=>c.start,i.start),p=P(s,c=>c.start,i.end);t.lineWidth=1,t.strokeStyle="#FFFFFF33",t.beginPath();for(let c=f;c<=p;c++){let e=s[c].start,u=D(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Bars",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.bars?.length,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis.bars;if(!s)return;let f=P(s,c=>c.start,i.start),p=P(s,c=>c.start,i.end);t.lineWidth=3,t.strokeStyle="#FFFFFF66",t.beginPath();for(let c=f;c<=p;c++){let e=s[c].start,u=D(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Position",layer:"overlay",isSupported:t=>!0,render:(t,a,i,r)=>{t.lineWidth=5,t.strokeStyle=t.fillStyle="white",t.beginPath();let s=D(i.current,i.start,i.end,r.x,r.x+r.width);t.moveTo(s,r.y),t.lineTo(s,r.y+r.height),t.stroke();let f=10;t.beginPath(),t.moveTo(s-f,r.y),t.lineTo(s+f,r.y),t.lineTo(s,r.y+f),t.lineTo(s-f,r.y),t.moveTo(s-f,r.y+r.height),t.lineTo(s+f,r.y+r.height),t.lineTo(s,r.y+r.height-f),t.lineTo(s-f,r.y+r.height),t.fill()}},{name:"Loudness",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis;if(!s)return;let f=P(s.segments,o=>o.start,i.start),p=P(s.segments,o=>o.start,i.end),c=o=>H(o);t.lineWidth=2,t.strokeStyle="white",t.beginPath();for(let o=f;o<=p+1&&o<s.segments.length;o++){let e=s.segments[o],u=D(e.start,i.start,i.end,r.x,r.x+r.width),n=D(c(e.loudness_start),0,1,r.y+r.height,r.y),l=D(e.start+e.loudness_max_time,i.start,i.end,r.x,r.x+r.width),d=D(c(e.loudness_max),0,1,r.y+r.height,r.y);if(o===f?t.moveTo(u,n):t.lineTo(u,n),t.lineTo(l,d),o===s.segments.length-1){let h=D(e.start+e.duration,i.start,i.end,r.x,r.x+r.width),v=D(c(e.loudness_end),0,1,r.y+r.height,r.y);t.lineTo(h,v)}}t.stroke()}},{name:"Confidence",layer:"content",height:.25,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis;if(!s)return;let f=P(s.segments,c=>c.start,i.start),p=P(s.segments,c=>c.start,i.end);t.beginPath();for(let c=f;c<=p;c++){let o=s.segments[c],e=D(o.start,i.start,i.end,r.x,r.x+r.width),u=D(o.start+o.duration,i.start,i.end,r.x,r.x+r.width);t.fillStyle=`rgba(255, 255, 255, ${o.confidence})`,t.fillRect(e,r.y,u-e,r.height)}t.fill()}},{name:"Timbre",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis;if(!s)return;let f=r.height/12,p=P(s.segments,o=>o.start,i.start),c=P(s.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=(Math.sqrt(5)-1)/2,u=o*e;t.beginPath();for(let n=p;n<=c;n++){let l=s.segments[n],d=D(Math.tanh(.02*l.timbre[o]),-1,1,0,1),h=D(l.start,i.start,i.end,r.x,r.x+r.width),v=D(l.start+l.duration,i.start,i.end,r.x,r.x+r.width),m=r.y+o/12*r.height;t.fillStyle=`hsla(${u*360}, 100%, 70%, ${d})`,t.fillRect(h,m,v-h,f)}t.fill()}}},{name:"Pitches",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,a,i,r)=>{let s=a.trackData.audioAnalysis;if(!s)return;let f=r.height/12,p=P(s.segments,o=>o.start,i.start),c=P(s.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=o/12;t.beginPath();for(let u=p;u<=c;u++){let n=s.segments[u],l=D(n.start,i.start,i.end,r.x,r.x+r.width),d=D(n.start+n.duration,i.start,i.end,r.x,r.x+r.width),h=r.y+o/12*r.height;t.fillStyle=`hsla(${e*360}, 100%, 70%, ${n.pitches[o]})`,t.fillRect(l,h,d-l,f)}t.fill()}}},{name:"Rhythm",layer:"content",height:.5,isSupported:t=>!!t.rhythm,render:(t,a,i,r)=>{let s=a.rhythm;if(!s)return;let f=r.height/s.length,p=Math.min(f,20),c=p/2/r.width*(i.end-i.start);t.fillStyle="white",t.beginPath();for(let o=s.length-1;o>=0;o--){let e=P(s[o],n=>n,i.start-c),u=P(s[o],n=>n,i.end+c);for(let n=e;n<=u;n++){let l=D(s[o][n],i.start,i.end,r.x,r.x+r.width),d=r.y+o*f;t.rect(l-p/2,d,p,f)}}t.fill()}}];function Ue(t){let a=ue(J),[i,r,s]=ce(()=>{let o=t.trackData.audioAnalysis,e={trackData:t.trackData,rhythm:we(o)},u=Bt.filter(h=>h.isSupported(e)),n=o.bars??[],l=n.reduce((h,v)=>h+v.duration,0)/n.length,d=Number.isFinite(l)&&l>0?l:1;return[u,d,e]},[t.trackData]),f=B(o=>o?{isError:!1}:(a("Error: 2D rendering is not supported"),{isError:!0}),[]),p=B((o,e)=>{e.isError},[]),c=B((o,e,u)=>{if(u.isError||!o)return;o.clearRect(0,0,o.canvas.width,o.canvas.height);let n=N.getProgress(),l=n-tt[0]*e.barDuration,d=n+tt[1]*e.barDuration,h={start:l,end:d,current:n},v=(T,C,L)=>{o.save(),o.font=`${ee}px sans-serif`,o.textAlign="center",o.fillStyle="white",o.rotate(Math.PI*3/2),o.fillText(T,-(C+L/2),ee,L),o.restore()},m=(T,C)=>{o.save(),o.beginPath(),o.rect(C.x,C.y,C.width,C.height),o.clip(),T.render(o,e.processedTrackData,h,C),o.restore()};for(let T of e.supportedSections)T.layer==="background"&&m(T,{x:ee+he,y:0,width:o.canvas.width-ee-he,height:o.canvas.height});let y=e.supportedSections.filter(T=>T.layer==="content"),S=o.canvas.height-ae*(y.length-1),R=y.reduce((T,C)=>T+C.height,0),w=0,A=0;for(let T of y){let C=D(w,0,R,0,S)+A*ae,L=D(w+T.height,0,R,0,S)+A*ae;w+=T.height,A++,m(T,{x:ee+he,y:C,width:o.canvas.width-ee-he,height:L-C}),v(T.name,C,L-C),A<y.length&&(o.lineWidth=1,o.strokeStyle="#AAAAAA",o.beginPath(),o.moveTo(ae/2,L+ae/2),o.lineTo(o.canvas.width-ae/2,L+ae/2),o.stroke())}for(let T of e.supportedSections)T.layer==="overlay"&&m(T,{x:ee+he,y:0,width:o.canvas.width-ee-he,height:o.canvas.height})},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{barDuration:r,supportedSections:i,processedTrackData:s},contextType:"2d",onInit:f,onResize:p,onRender:c,style:{width:"100%",height:"100%"}})}var rt=`#version 300 es

in vec2 inPosition;
out vec2 fragUV;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
}
`,nt=`#version 300 es
precision highp float;

uniform float uNoiseOffset;
uniform float uAmplitude;
uniform int uSeed;

uniform float uDotSpacing;
uniform float uDotOffset;

uniform float uSphereRadius;
uniform float uFeather;

uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;

in vec2 fragUV;
out vec2 outColor;

// https://github.com/Auburn/FastNoiseLite

const float FREQUENCY = 0.01;

const float GAIN = 0.5;
const float LACUNARITY = 1.5;
const float FRACTAL_BOUNDING = 1.0 / 1.75;

const ivec3 PRIMES = ivec3(501125321, 1136930381, 1720413743);

const float GRADIENTS_3D[] = float[](
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    1., 1., 0., 0.,  0.,-1., 1., 0., -1., 1., 0., 0.,  0.,-1.,-1., 0.
);

float smootherStep(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
vec3 smootherStep(vec3 coord) {
    return vec3(smootherStep(coord.x), smootherStep(coord.y), smootherStep(coord.z));
}

int hash(int seed, ivec3 primed) {
    return (seed ^ primed.x ^ primed.y ^ primed.z) * 0x27d4eb2d;
}

float gradCoord(int seed, ivec3 primed, vec3 d) {
    int hash = hash(seed, primed);
    hash ^= hash >> 15;
    hash &= 63 << 2;
    return d.x * GRADIENTS_3D[hash] + d.y * GRADIENTS_3D[hash | 1] + d.z * GRADIENTS_3D[hash | 2];
}

float perlinSingle(int seed, vec3 coord) {
    ivec3 coord0 = ivec3(floor(coord));
    vec3 d0 = coord - vec3(coord0);
    vec3 d1 = d0 - 1.0;
    vec3 s = smootherStep(d0);
    coord0 *= PRIMES;
    ivec3 coord1 = coord0 + PRIMES;
    float xf00 = mix(gradCoord(seed,                              coord0,                     d0), gradCoord(seed,          ivec3(coord1.x, coord0.yz),      vec3(d1.x, d0.yz)), s.x);
    float xf10 = mix(gradCoord(seed, ivec3(coord0.x, coord1.y, coord0.z), vec3(d0.x, d1.y, d0.z)), gradCoord(seed,          ivec3(coord1.xy, coord0.z),      vec3(d1.xy, d0.z)), s.x);
    float xf01 = mix(gradCoord(seed,          ivec3(coord0.xy, coord1.z),      vec3(d0.xy, d1.z)), gradCoord(seed, ivec3(coord1.x, coord0.y, coord1.z), vec3(d1.x, d0.y, d1.z)), s.x);
    float xf11 = mix(gradCoord(seed,          ivec3(coord0.x, coord1.yz),      vec3(d0.x, d1.yz)), gradCoord(seed,                              coord1,                     d1), s.x);
    float yf0 = mix(xf00, xf10, s.y);
    float yf1 = mix(xf01, xf11, s.y);
    return mix(yf0, yf1, s.z) * 0.964921414852142333984375f;
}

float fractalNoise(vec3 coord) {
    return perlinSingle(uSeed, coord) * FRACTAL_BOUNDING
        + perlinSingle(uSeed + 1, coord * LACUNARITY) * FRACTAL_BOUNDING * GAIN
        + perlinSingle(uSeed + 2, coord * LACUNARITY * LACUNARITY) * FRACTAL_BOUNDING * GAIN * GAIN;
}

void main() {
    float noise = fractalNoise(vec3(fragUV * uNoiseFrequency, uNoiseOffset)) * uNoiseAmplitude;
    vec3 dotCenter = vec3(fragUV * uDotSpacing + uDotOffset + noise, (noise + 0.5 * uNoiseAmplitude) * uAmplitude * 0.4);
    
    float distanceFromCenter = length(dotCenter);
    dotCenter /= distanceFromCenter;
    distanceFromCenter = min(uSphereRadius, distanceFromCenter);
    dotCenter *= distanceFromCenter;

    float featherRadius = uSphereRadius - uFeather;
    float featherStrength = 1.0 - clamp((distanceFromCenter - featherRadius) / uFeather, 0.0, 1.0);
    dotCenter *= featherStrength * (uSphereRadius / distanceFromCenter - 1.0) + 1.0;

    dotCenter.y *= -1.0;
    outColor = dotCenter.xy;
}
`;var it=`#version 300 es

uniform int uDotCount;
uniform float uDotRadius;
uniform float uDotRadiusPX;

uniform sampler2D uParticleTexture;

in vec2 inPosition;

out vec2 fragUV;
out float fragDotRadiusPX;

void main() {
    ivec2 dotIndex = ivec2(gl_InstanceID % uDotCount, gl_InstanceID / uDotCount);
    vec2 dotCenter = texelFetch(uParticleTexture, dotIndex, 0).xy;

    gl_Position = vec4(dotCenter + inPosition * uDotRadius * (1.0 + 1.0 / uDotRadiusPX), 0.0, 1.0);
    fragUV = inPosition;
    fragDotRadiusPX = uDotRadiusPX + 1.0;
}
`,ot=`#version 300 es
precision highp float;

in vec2 fragUV;
in float fragDotRadiusPX;
out float outColor;

void main() {
    float t = clamp((1.0 - length(fragUV)) * fragDotRadiusPX, 0.0, 1.0);
    outColor = t;
}
`;var at=`#version 300 es

uniform float uBlurRadius;
uniform vec2 uBlurDirection;

in vec2 inPosition;

out vec2 fragUV;
flat out vec2 fragBlurDirection;
flat out int fragSupport;
flat out vec3 fragGaussCoefficients;

float calculateGaussianTotal(int support, vec3 fragGaussCoefficients) {
    float total = fragGaussCoefficients.x;
    for (int i = 1; i < support; i++) {
        fragGaussCoefficients.xy *= fragGaussCoefficients.yz;
        total += 2.0 * fragGaussCoefficients.x;
    }
    return total;
}

void main() {
    fragSupport = int(ceil(1.5 * uBlurRadius)) * 2;
    fragGaussCoefficients = vec3(1.0 / (sqrt(2.0 * 3.14159265) * uBlurRadius), exp(-0.5 / (uBlurRadius * uBlurRadius)), 0.0);
    fragGaussCoefficients.z = fragGaussCoefficients.y * fragGaussCoefficients.y;
    fragGaussCoefficients.x /= calculateGaussianTotal(fragSupport, fragGaussCoefficients);

    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragBlurDirection = uBlurDirection;
}
`,st=`#version 300 es
precision highp float;

uniform sampler2D uInputTexture;

in vec2 fragUV;
flat in vec2 fragBlurDirection;
flat in int fragSupport;
flat in vec3 fragGaussCoefficients;

out float outColor;

void main() {
    vec3 gaussCoefficients = fragGaussCoefficients;
    outColor = gaussCoefficients.x * texture(uInputTexture, fragUV).r;

    for (int i = 1; i < fragSupport; i += 2) {
        gaussCoefficients.xy *= gaussCoefficients.yz;
        float coefficientSum = gaussCoefficients.x;
        gaussCoefficients.xy *= gaussCoefficients.yz;
        coefficientSum += gaussCoefficients.x;

        float pixelRatio = gaussCoefficients.x / coefficientSum;
        vec2 offset = (float(i) + pixelRatio) * fragBlurDirection;

        outColor += coefficientSum * (texture(uInputTexture, fragUV + offset).r + texture(uInputTexture, fragUV - offset).r);
    }
}
`;var ut=`#version 300 es

uniform vec3 uOutputColor;
in vec2 inPosition;

out vec2 fragUV;
out vec3 fragOutputColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragOutputColor = uOutputColor;
}
`,ct=`#version 300 es
precision highp float;

uniform sampler2D uBlurredTexture;
uniform sampler2D uOriginalTexture;

in vec2 fragUV;
in vec3 fragOutputColor;

out vec4 outColor;

void main() {
    float value = max(texture(uBlurredTexture, fragUV).r, texture(uOriginalTexture, fragUV).r);
    outColor = vec4(fragOutputColor * value, value);
}
`;var ft=.75,Ie=900;function Nt(t,a,i,r,s){t.wasPlaying&&!i&&(t.pauseStartedAt=a,t.pauseSpeed=s);let f=Math.min(a-t.pauseStartedAt,Ie)/Ie,p=t.pauseSpeed*(Ie/1e3)*f*(1-f/2);return i&&(t.offset+=p,t.pauseSpeed=0),t.wasPlaying=i,r+t.offset+(i?0:p)}function ke(t){let a=ue(J),i=t.trackData.audioAnalysis,r=ce(()=>{if(!i)return[{x:0,y:0}];let e=i.segments,u=e.flatMap(n=>n.loudness_max_time?[{x:n.start,y:H(n.loudness_start)},{x:n.start+n.loudness_max_time,y:H(n.loudness_max)}]:[{x:n.start,y:H(n.loudness_start)}]);if(e.length){u[0].accumulatedIntegral=0;for(let l=1;l<u.length;l++){let d=u[l-1],h=u[l];h.accumulatedIntegral=(d.accumulatedIntegral??0)+fe(d,h)}let n=e[e.length-1];u.push({x:n.start+n.duration,y:H(n.loudness_end)})}return u},[i]),s=i.meta?.timestamp??0,f=B(e=>{if(!e)return a("Error: WebGL2 is not supported"),{isError:!0};if(!e.getExtension("EXT_color_buffer_float"))return a("Error: Rendering to floating-point textures is not supported"),{isError:!0};let u=(re,ne,ie)=>{let W=e.createShader(re);if(e.shaderSource(W,ne),e.compileShader(W),!e.getShaderParameter(W,e.COMPILE_STATUS)&&!e.isContextLost()){let pe=`Error: Failed to compile '${ie}' shader`,Le=e.getShaderInfoLog(W);return console.error(`[Visualizer] ${pe}`,Le),a(pe),null}return W},n=(re,ne,ie)=>{let W=e.createProgram();if(e.attachShader(W,re),e.attachShader(W,ne),e.linkProgram(W),e.deleteShader(re),e.deleteShader(ne),!e.getProgramParameter(W,e.LINK_STATUS)&&!e.isContextLost()){let pe=`Error: Failed to link '${ie}' shader`,Le=e.getProgramInfoLog(W);return console.error(`[Visualizer] ${pe}`,Le),a(pe),null}return W},l=re=>{let ne=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,ne);let ie=e.createTexture();return e.bindTexture(e.TEXTURE_2D,ie),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,re),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie,0),{framebuffer:ne,texture:ie}},d=u(e.VERTEX_SHADER,rt,"particle vertex");if(!d)return{isError:!0};let h=u(e.FRAGMENT_SHADER,nt,"particle fragment");if(!h)return{isError:!0};let v=n(d,h,"particle");if(!v)return{isError:!0};let m=e.getAttribLocation(v,"inPosition"),y=e.getUniformLocation(v,"uNoiseOffset"),S=e.getUniformLocation(v,"uAmplitude"),R=e.getUniformLocation(v,"uSeed"),w=e.getUniformLocation(v,"uDotSpacing"),A=e.getUniformLocation(v,"uDotOffset"),T=e.getUniformLocation(v,"uSphereRadius"),C=e.getUniformLocation(v,"uFeather"),L=e.getUniformLocation(v,"uNoiseFrequency"),I=e.getUniformLocation(v,"uNoiseAmplitude"),U=u(e.VERTEX_SHADER,it,"dot vertex");if(!U)return{isError:!0};let b=u(e.FRAGMENT_SHADER,ot,"dot fragment");if(!b)return{isError:!0};let F=n(U,b,"dot");if(!F)return{isError:!0};let k=e.getAttribLocation(F,"inPosition"),x=e.getUniformLocation(F,"uDotCount"),z=e.getUniformLocation(F,"uDotRadius"),G=e.getUniformLocation(F,"uDotRadiusPX"),M=e.getUniformLocation(F,"uParticleTexture"),te=u(e.VERTEX_SHADER,at,"blur vertex");if(!te)return{isError:!0};let V=u(e.FRAGMENT_SHADER,st,"blur fragment");if(!V)return{isError:!0};let K=n(te,V,"blur");if(!K)return{isError:!0};let Ae=e.getAttribLocation(K,"inPosition"),de=e.getUniformLocation(K,"uBlurRadius"),j=e.getUniformLocation(K,"uBlurDirection"),ye=e.getUniformLocation(K,"uInputTexture"),Q=u(e.VERTEX_SHADER,ut,"finalize vertex");if(!Q)return{isError:!0};let se=u(e.FRAGMENT_SHADER,ct,"finalize fragment");if(!se)return{isError:!0};let Z=n(Q,se,"finalize");if(!Z)return{isError:!0};let xe=e.getAttribLocation(Z,"inPosition"),ge=e.getUniformLocation(Z,"uOutputColor"),De=e.getUniformLocation(Z,"uBlurredTexture"),be=e.getUniformLocation(Z,"uOriginalTexture"),{framebuffer:Se,texture:Te}=l(e.NEAREST),{framebuffer:pt,texture:vt}=l(e.NEAREST),{framebuffer:mt,texture:yt}=l(e.LINEAR),{framebuffer:xt,texture:gt}=l(e.NEAREST),Ne=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,Ne),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.enable(e.BLEND),e.blendEquation(e.MAX),{isError:!1,particleShader:v,dotShader:F,blurShader:K,finalizeShader:Z,viewportSize:0,particleTextureSize:0,motion:{wasPlaying:!1,pauseStartedAt:0,pauseSpeed:0,offset:0},inPositionLoc:m,inPositionLocDot:k,inPositionLocBlur:Ae,inPositionLocFinalize:xe,uNoiseOffsetLoc:y,uAmplitudeLoc:S,uSeedLoc:R,uDotSpacingLoc:w,uDotOffsetLoc:A,uSphereRadiusLoc:T,uFeatherLoc:C,uNoiseFrequencyLoc:L,uNoiseAmplitudeLoc:I,uDotCountLoc:x,uDotRadiusLoc:z,uDotRadiusPXLoc:G,uParticleTextureLoc:M,uBlurRadiusLoc:de,uBlurDirectionLoc:j,uBlurInputTextureLoc:ye,uOutputColorLoc:ge,uBlurredTextureLoc:De,uOriginalTextureLoc:be,quadBuffer:Ne,particleFramebuffer:Se,particleTexture:Te,dotFramebuffer:pt,dotTexture:vt,blurXFramebuffer:mt,blurXTexture:yt,blurYFramebuffer:xt,blurYTexture:gt}},[]),p=B((e,u)=>{!e||u.isError||(e.deleteBuffer(u.quadBuffer),[u.particleTexture,u.dotTexture,u.blurXTexture,u.blurYTexture].forEach(n=>e.deleteTexture(n)),[u.particleFramebuffer,u.dotFramebuffer,u.blurXFramebuffer,u.blurYFramebuffer].forEach(n=>e.deleteFramebuffer(n)),[u.particleShader,u.dotShader,u.blurShader,u.finalizeShader].forEach(n=>e.deleteProgram(n)))},[]),c=B((e,u)=>{u.isError||!e||(u.viewportSize=Math.min(e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindTexture(e.TEXTURE_2D,u.dotTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurXTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurYTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null))},[]),o=B((e,u,n,l)=>{if(n.isError||!e)return;let d=N.getProgress(),h=He(u.amplitudeCurve,d,.15),v=ft*(.5*d+qe(u.amplitudeCurve,d)),m=Nt(n.motion,l,SpotiKit.Player.isPlaying,v,ft*(.5+h)),y=u.seed,S=322,R=.9/S,w=R*.5*n.viewportSize,A=.9,T=-.9/2,C=D(h,0,1,.75*.9,.9),L=Math.pow(h+3,2)*(45/1568),I=4,U=.32*.9;n.particleTextureSize!==S&&(n.particleTextureSize=S,e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,S,S,0,e.RG,e.FLOAT,null)),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.particleFramebuffer),e.viewport(0,0,S,S),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.particleShader),e.uniform1f(n.uNoiseOffsetLoc,m),e.uniform1f(n.uAmplitudeLoc,h),e.uniform1i(n.uSeedLoc,y),e.uniform1f(n.uDotSpacingLoc,A),e.uniform1f(n.uDotOffsetLoc,T),e.uniform1f(n.uSphereRadiusLoc,C),e.uniform1f(n.uFeatherLoc,L),e.uniform1f(n.uNoiseFrequencyLoc,I),e.uniform1f(n.uNoiseAmplitudeLoc,U),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLoc),e.vertexAttribPointer(n.inPositionLoc,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.dotFramebuffer),e.viewport(0,0,n.viewportSize,n.viewportSize),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.dotShader),e.uniform1i(n.uDotCountLoc,S),e.uniform1f(n.uDotRadiusLoc,R),e.uniform1f(n.uDotRadiusPXLoc,w),e.uniform1i(n.uParticleTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocDot),e.vertexAttribPointer(n.inPositionLocDot,2,e.FLOAT,!1,0,0),e.drawArraysInstanced(e.TRIANGLE_FAN,0,4,S*S),e.bindFramebuffer(e.FRAMEBUFFER,n.blurXFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.blurShader),e.uniform1f(n.uBlurRadiusLoc,.01*n.viewportSize),e.uniform2f(n.uBlurDirectionLoc,1/n.viewportSize,0),e.uniform1i(n.uBlurInputTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocBlur),e.vertexAttribPointer(n.inPositionLocBlur,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,n.blurYFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.uBlurDirectionLoc,0,1/n.viewportSize),e.bindTexture(e.TEXTURE_2D,n.blurXTexture),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.finalizeShader),e.uniform3f(n.uOutputColorLoc,(u.themeColor>>16&255)/255,(u.themeColor>>8&255)/255,(u.themeColor&255)/255),e.uniform1i(n.uBlurredTextureLoc,0),e.uniform1i(n.uOriginalTextureLoc,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.blurYTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocFinalize),e.vertexAttribPointer(n.inPositionLocFinalize,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{themeColor:parseInt(t.trackData.color.slice(1),16),seed:s,amplitudeCurve:r},contextType:"webgl2",onInit:f,onDispose:p,onResize:c,onRender:o,style:{width:"100%",height:"100%",objectFit:"contain"},sizeConstraint:(e,u)=>{let n=Math.min(e,u);return{width:n,height:n}}})}function Me(t){let a=ue(J),i=t.trackData.audioAnalysis,r=ce(()=>{if(!i)return[];let c=i.segments,o=we(i)??[[]],e=.4,u=.2,n=.4,l=e/Math.sqrt(2)*8,d=12*o.length,h=[];for(let m=0;m<c.length;m++){let y=c[m],S=H(y.loudness_start),R=H(y.loudness_max),w=y.start+y.loudness_max_time,A=y.pitches,T=w-l,C=w+l,L=o.map(b=>{let F=P(b,x=>x,T),k=P(b,x=>x,C);return b.slice(F,k).map(x=>Math.exp(-Math.pow((x-w)/e,2))).reduce((x,z)=>x+z,0)+u}),I=Math.max(...L);for(let b=0;b<L.length;b++)L[b]/=I;let U=Array(d);for(let b=0;b<L.length;b++){let F=L.length===1?1:D(b,0,L.length-1,.2,.6);for(let k=0;k<12;k++){let x=Re([...L.entries()],M=>M[0],M=>M[1],Xe,b+k/12),z=A.reduce((M,te)=>M+te,0)/A.length,G=A[k]*F+z*(1-F);U[12*b+k]=x*G}}if(h.push([y.start,...U.map(b=>b*S)]),h.push([w,...U.map(b=>b*R)]),m==c.length-1){let b=H(y.loudness_end);h.push([y.start+y.duration,...U.map(F=>F*b)])}}let v=Array(d).fill(0).map(m=>Array(h.length));for(let m=0;m<d;m++){let y=0,S={x:0,y:0},R={x:0,y:0};for(let w=0;w<h.length;w++){let A={x:h[w][0],y:h[w][m+1]},T=A.x+A.y/n,C=R.x+R.y/n;if(T>C){if(R.x!==S.x){let L=(A.y-S.y)/(A.x-S.x),I=S.y-L*S.x,U=-n,F=(R.y-U*R.x-I)/(L-U),k=L*F+I;v[m][y]={x:F,y:k},y++}R=A,v[m][y]=A,y++}S=A}v[m].length=y}return v},[i]),s=B(c=>c?{isError:!1}:(a("Error: 2D rendering is not supported"),{isError:!0}),[]),f=B((c,o)=>{o.isError},[]),p=B((c,o,e)=>{if(e.isError||!c)return;let u=N.getProgress();c.clearRect(0,0,c.canvas.width,c.canvas.height),c.fillStyle=o.themeColor;let n=o.spectrumData.length;if(!n)return;let l=c.canvas.width/n*.7,d=(c.canvas.width-l*n)/(n+1);for(let h=0;h<n;h++){let v=o.spectrumData[h];if(!v.length)continue;let m=Re(v,y=>y.x,y=>y.y,y=>y,Math.max(u,v[0].x));c.fillRect(d*(h+1)+l*h,c.canvas.height-m*c.canvas.height,l,m*c.canvas.height)}},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{themeColor:t.trackData.color,spectrumData:r},contextType:"2d",onInit:s,onResize:f,onRender:p,style:{width:"100%",height:"100%"}})}var lt="#535353",Be={ncs:{name:"NCS",renderer:ke},spectrum:{name:"Spectrum",renderer:Me},debug:{name:"Debug",renderer:Ue}};async function ht(t){let a=t.images?.[0]?.url??t.album?.images?.[0]?.url,[i,r]=await Promise.all([SpotiKit.Audio.analysis(t.uri),Promise.resolve().then(()=>SpotiKit.Colors.extract(a??t.uri)).catch(()=>{})]);if(!i?.track||!i.segments?.length)throw new Error("Spotify returned no audio segments.");let s=[r?.light,r?.raw].find(f=>f&&/^#[0-9a-f]{6}$/i.test(f));return{audioAnalysis:i,color:s??lt}}function Gt(){try{let t=localStorage.getItem("spotikit-visualizer.renderer");if(t==="ncs"||t==="spectrum"||t==="debug")return t}catch{}return"ncs"}function dt({popup:t=!1,initialMode:a}){let[i,r]=O(()=>a??Gt()),[s,f]=O(()=>SpotiKit.Player.track),[p,c]=O(),[o,e]=O(0),[u,n]=O(),[l,d]=O(N.correctLatency),[h,v]=O(null),m=Ee(null),y=h?.ownerDocument,S=_e(y)===h&&h!==null,R=Ve(y),w=s?.uri??"",A=w.startsWith("spotify:track:"),T=p?.uri===w?p:void 0,C=Be[i].renderer;X(()=>{let x=()=>f(SpotiKit.Player.track),z=SpotiKit.Player.on("track",x);return x(),z},[]),X(()=>{if(!s||!A)return;let x=!0;return c(void 0),ht(s).then(z=>{x&&c({uri:w,data:z})},z=>{console.warn("[Visualizer] Audio analysis unavailable",z),x&&c({uri:w,error:"\u0410\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u043A\u0430."})}),()=>{x=!1}},[w,A,o]),X(()=>(N.addReference(),()=>N.removeReference()),[]);function L(x){if(r(x),n(void 0),!t)try{localStorage.setItem("spotikit-visualizer.renderer",x)}catch{}}function I(){c(void 0),e(x=>x+1)}async function U(){if(!(!h||!y))try{S?await y.exitFullscreen():await h.requestFullscreen(),m.current&&(m.current.open=!1)}catch{SpotiKit.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C.")}}async function b(){let x=null;try{if(x=window.open("","","popup,width=960,height=540"),!x){let M=window.documentPictureInPicture;M&&(x=await M.requestWindow({width:960,height:540}))}if(!x)throw new Error("Popup unavailable");x.document.title="Visualizer",x.document.body.style.margin="0";let z=x.document.body.appendChild(x.document.createElement("div")),G=SpotiKit.ReactDOM.createRoot(z);x.addEventListener("pagehide",()=>G.unmount(),{once:!0}),G.render(g.createElement(dt,{popup:!0,initialMode:i}))}catch(z){x?.close(),console.warn("[Visualizer] Could not open a window",z),SpotiKit.notify("\u041A\u043B\u0438\u0435\u043D\u0442 Spotify \u043D\u0435 \u0441\u043C\u043E\u0433 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E.")}}let F=w?A?T?.error??u:"\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u043A\u043E\u0432.":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0442\u0440\u0435\u043A, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440.",k=A&&!T;return g.createElement("div",{className:`spotikit-visualizer${t?" spotikit-visualizer--popup":""}${S&&!R?" spotikit-visualizer--idle":""}`,ref:v,onPointerDown:()=>N.resume(),onKeyDown:x=>{N.resume(),x.key==="Escape"&&m.current?.open&&(m.current.open=!1)}},g.createElement("style",null,We),T?.data&&!u&&g.createElement(J.Provider,{value:n},g.createElement(C,{key:`${w}:${i}`,isEnabled:!0,trackData:T.data})),k&&g.createElement("div",{className:"spotikit-visualizer-status",role:"status","aria-label":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0430\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0430"},g.createElement(Ce,null)),!k&&F&&g.createElement("div",{className:"spotikit-visualizer-status",role:"status"},g.createElement("p",null,F),T?.error&&g.createElement("button",{type:"button",onClick:I},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C")),g.createElement("details",{className:"spotikit-visualizer-controls",ref:m},g.createElement("summary",{"aria-label":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430",title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430"},g.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},g.createElement("circle",{cx:"5",cy:"12",r:"1.8"}),g.createElement("circle",{cx:"12",cy:"12",r:"1.8"}),g.createElement("circle",{cx:"19",cy:"12",r:"1.8"}))),g.createElement("div",{className:"spotikit-visualizer-settings"},g.createElement("label",null,"\u0420\u0435\u0436\u0438\u043C",g.createElement("select",{value:i,onChange:x=>L(x.currentTarget.value)},Object.entries(Be).map(([x,z])=>g.createElement("option",{key:x,value:x},z.name)))),g.createElement("label",null,g.createElement("input",{type:"checkbox",checked:l,onChange:x=>{let z=x.currentTarget.checked;d(z),N.setCorrectLatency(z)}}),"\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0443"),g.createElement("button",{type:"button",onClick:U},S?"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430":"\u041D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D"),!t&&g.createElement("button",{type:"button",onClick:b},"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u043A\u043D\u0435"))))}export{dt as default};
