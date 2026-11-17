var Ge=SpotiKit.React,g=Ge,{createContext:Ne,useCallback:M,useContext:ue,useEffect:X,useMemo:ce,useRef:Ee,useState:O}=Ge;var Oe=`.spotikit-app:has(> .spotikit-visualizer) {
	position: relative;
	min-height: 100%;
}
.spotikit-visualizer {
	position: absolute;
	inset: 0;
	min-height: 240px;
	background: #080808;
	color: #fff;
	overflow: hidden;
	font-family: var(--encore-body-font-stack, system-ui, sans-serif);
}
.spotikit-visualizer--popup {
	position: fixed;
}
.spotikit-visualizer > canvas,
.spotikit-visualizer-status {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.spotikit-visualizer-status {
	width: min(80%, 460px);
	text-align: center;
	font-size: clamp(16px, 3vw, 24px);
	font-weight: 600;
}
.spotikit-visualizer-controls {
	position: absolute;
	top: 12px;
	right: 12px;
}
.spotikit-visualizer-controls summary {
	display: grid;
	place-items: center;
	width: 40px;
	height: 40px;
	margin-left: auto;
	border-radius: 50%;
	background: #242424;
	cursor: pointer;
	list-style: none;
}
.spotikit-visualizer-controls summary::-webkit-details-marker {
	display: none;
}
.spotikit-visualizer-settings {
	display: grid;
	gap: 12px;
	margin-top: 8px;
	padding: 14px;
	border-radius: 8px;
	background: #242424;
	font-size: 14px;
}
.spotikit-visualizer-settings label {
	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: space-between;
}
.spotikit-visualizer button,
.spotikit-visualizer select {
	border: 1px solid #717171;
	border-radius: 6px;
	padding: 6px 9px;
	background: #353535;
	color: inherit;
	font: inherit;
	cursor: pointer;
}
.spotikit-visualizer :is(button, select, summary):hover {
	background: #484848;
}
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle:not(:has(details[open], :focus-visible)) {
	cursor: none;
}
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle details:not([open], :hover, :focus-within) {
	opacity: 0;
}
`;function Ce(){return g.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},g.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},g.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),g.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})),g.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},g.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}),g.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"})))}var J=Ne(()=>{});function We(t){let[s,i]=O(t?.fullscreenElement??null);return X(()=>{if(!t)return;let r=()=>i(t.fullscreenElement);return r(),t.addEventListener("fullscreenchange",r),()=>t.removeEventListener("fullscreenchange",r)},[t]),s}function _e(t,s=5e3){let[i,r]=O(!0);return X(()=>{if(!t)return;let a=i,f=o=>{a!==o&&(a=o,r(o))},m=0,c=()=>{f(!0),clearTimeout(m),m=setTimeout(()=>f(!1),s)};return c(),t.addEventListener("mousemove",c),()=>{clearTimeout(m),t.removeEventListener("mousemove",c)}},[t]),i}function oe(t){let{contextType:s,onInit:i,onDispose:r,onResize:a,onRender:f,style:m,data:c,isEnabled:o}=t,e=Ee(null),[u,n]=O(null),l=M((p,h)=>{let v=Math.round(p.clientWidth*h.devicePixelRatio),d=Math.round(p.clientHeight*h.devicePixelRatio),{width:y,height:A}=t.sizeConstraint?.(v,d)??{width:v,height:d};p.width===y&&p.height===A||(p.width=y,p.height=A)},[]);return X(()=>{if(!i)return;let p=e.current;if(!p)return;let h=p.ownerDocument.defaultView;if(!h)return;let v=p.getContext(s),d=i(v);return l(p,h),a(v,d),n(d),()=>r?.(v,d)},[s,i,r]),X(()=>{if(!o||!u||!f)return;let p=e.current;if(!p)return;let h=p.ownerDocument.defaultView;if(!h)return;let v=p.getContext(s),d=0,y=A=>{u&&(f(v,c,u,A),d=h.requestAnimationFrame(y))};return d=h.requestAnimationFrame(y),()=>{d&&h.cancelAnimationFrame(d)}},[s,f,c,u,o]),X(()=>{if(!e.current)return;let p=e.current.ownerDocument.defaultView;if(!p)return;let h=new p.ResizeObserver(()=>{let v=e.current;if(!v)return;let d=v.ownerDocument.defaultView;if(!d)return;l(v,d);let y=v.getContext(s);y&&u&&a(y,u)});return h.observe(e.current),()=>h.disconnect()},[s,a,u]),g.createElement("canvas",{ref:e,style:{...m||{},...o?{}:{visibility:"hidden"}}})}function U(t,s,i){let r=0,a=t.length;for(;a-r>1;){let f=Math.floor((a+r)/2);s(t[f],f)<=i?r=f:a=f}return r}function H(t){return Math.min(Math.max(Math.pow(10,t/20),0),1)}function Ve(t){return t*t*(3-2*t)}function w(t,s,i,r,a){return t=(t-s)/(i-s),t=t*(a-r)+r,t}function gt(t,s,i,r,a,f){return t=(t-s)/(i-s),t=r(t),t=t*(f-a)+a,t}function fe(t,s){return-.5*(t.x-s.x)*(t.y+s.y)}function Re(t,s,i,r,a){let f=U(t,s,a),m=t[f];if(f>t.length-2)return i(m,f);let c=t[f+1];return gt(a,s(m,f),s(c,f+1),r,i(m,f),i(c,f+1))}function Xe(t,s,i){if(i==0)return Re(t,o=>o.x,o=>o.y,o=>o,s);let r=s-i/2,a=s+i/2,f=U(t,o=>o.x,r),m=U(t,o=>o.x,a),c=0;if(f==m){let o=t[f];if(f>t.length-2)return o.y;let e=t[f+1],u=w(r,o.x,e.x,o.y,e.y),n=w(a,o.x,e.x,o.y,e.y);return(u+n)/2}else{let o=t[f],e=t[f+1],u={x:r,y:w(r,o.x,e.x,o.y,e.y)};c=fe(u,e);for(let n=f+1;n<m;n++)o=e,e=t[n+1],c+=fe(o,e);o=e,m>t.length-2?c+=o.y*(a-o.x):(e=t[m+1],u={x:a,y:w(a,o.x,e.x,o.y,e.y)},c+=fe(o,u))}return c/i}function He(t,s){let i=U(t,m=>m.x,s),r=t[i];if(i+1>=t.length)return(r.accumulatedIntegral??0)+r.y*(s-r.x);let a=t[i+1],f={x:s,y:w(s,r.x,a.x,r.y,a.y)};return(r.accumulatedIntegral??0)+fe(r,f)}var _=Uint8Array,le=Uint16Array,bt=Int32Array,qe=new _([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ye=new _([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tt=new _([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ze=function(t,s){for(var i=new le(31),r=0;r<31;++r)i[r]=s+=1<<t[r-1];for(var a=new bt(i[30]),r=1;r<30;++r)for(var f=i[r];f<i[r+1];++f)a[f]=f-i[r]<<5|r;return{b:i,r:a}},$e=Ze(qe,2),Ke=$e.b,St=$e.r;Ke[28]=258,St[258]=28;var je=Ze(Ye,0),Et=je.b,Zt=je.r,Ue=new le(32768);for(S=0;S<32768;++S)$=(S&43690)>>1|(S&21845)<<1,$=($&52428)>>2|($&13107)<<2,$=($&61680)>>4|($&3855)<<4,Ue[S]=(($&65280)>>8|($&255)<<8)>>1;var $,S,ve=(function(t,s,i){for(var r=t.length,a=0,f=new le(s);a<r;++a)t[a]&&++f[t[a]-1];var m=new le(s);for(a=1;a<s;++a)m[a]=m[a-1]+f[a-1]<<1;var c;if(i){c=new le(1<<s);var o=15-s;for(a=0;a<r;++a)if(t[a])for(var e=a<<4|t[a],u=s-t[a],n=m[t[a]-1]++<<u,l=n|(1<<u)-1;n<=l;++n)c[Ue[n]>>o]=e}else for(c=new le(r),a=0;a<r;++a)t[a]&&(c[a]=Ue[m[t[a]-1]++]>>15-t[a]);return c}),me=new _(288);for(S=0;S<144;++S)me[S]=8;var S;for(S=144;S<256;++S)me[S]=9;var S;for(S=256;S<280;++S)me[S]=7;var S;for(S=280;S<288;++S)me[S]=8;var S,Qe=new _(32);for(S=0;S<32;++S)Qe[S]=5;var S;var Rt=ve(me,9,1);var wt=ve(Qe,5,1),Fe=function(t){for(var s=t[0],i=1;i<t.length;++i)t[i]>s&&(s=t[i]);return s},q=function(t,s,i){var r=s/8|0;return(t[r]|t[r+1]<<8)>>(s&7)&i},ze=function(t,s){var i=s/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(s&7)},At=function(t){return(t+7)/8|0},Dt=function(t,s,i){return(s==null||s<0)&&(s=0),(i==null||i>t.length)&&(i=t.length),new _(t.subarray(s,i))};var Lt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Y=function(t,s,i){var r=new Error(s||Lt[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,Y),!i)throw r;return r},Ct=function(t,s,i,r){var a=t.length,f=r?r.length:0;if(!a||s.f&&!s.l)return i||new _(0);var m=!i,c=m||s.i!=2,o=s.i;m&&(i=new _(a*3));var e=function(be){var Te=i.length;if(be>Te){var Se=new _(Math.max(Te*2,be));Se.set(i),i=Se}},u=s.f||0,n=s.p||0,l=s.b||0,p=s.l,h=s.d,v=s.m,d=s.n,y=a*8;do{if(!p){u=q(t,n,1);var A=q(t,n+1,3);if(n+=3,A)if(A==1)p=Rt,h=wt,v=9,d=5;else if(A==2){var T=q(t,n,31)+257,C=q(t,n+10,15)+4,L=T+q(t,n+5,31)+1;n+=14;for(var G=new _(L),P=new _(19),b=0;b<C;++b)P[Tt[b]]=q(t,n+b*3,7);n+=C*3;for(var F=Fe(P),I=(1<<F)-1,x=ve(P,F,1),b=0;b<L;){var z=x[q(t,n,I)];n+=z&15;var D=z>>4;if(D<16)G[b++]=D;else{var N=0,k=0;for(D==16?(k=3+q(t,n,3),n+=2,N=G[b-1]):D==17?(k=3+q(t,n,7),n+=3):D==18&&(k=11+q(t,n,127),n+=7);k--;)G[b++]=N}}var te=G.subarray(0,T),V=G.subarray(T);v=Fe(te),d=Fe(V),p=ve(te,v,1),h=ve(V,d,1)}else Y(1);else{var D=At(n)+4,E=t[D-4]|t[D-3]<<8,R=D+E;if(R>a){o&&Y(0);break}c&&e(l+E),i.set(t.subarray(D,R),l),s.b=l+=E,s.p=n=R*8,s.f=u;continue}if(n>y){o&&Y(0);break}}c&&e(l+131072);for(var K=(1<<v)-1,Ae=(1<<d)-1,de=n;;de=n){var N=p[ze(t,n)&K],j=N>>4;if(n+=N&15,n>y){o&&Y(0);break}if(N||Y(2),j<256)i[l++]=j;else if(j==256){de=n,p=null;break}else{var ye=j-254;if(j>264){var b=j-257,Q=qe[b];ye=q(t,n,(1<<Q)-1)+Ke[b],n+=Q}var se=h[ze(t,n)&Ae],Z=se>>4;se||Y(3),n+=se&15;var V=Et[Z];if(Z>3){var Q=Ye[Z];V+=ze(t,n)&(1<<Q)-1,n+=Q}if(n>y){o&&Y(0);break}c&&e(l+131072);var xe=l+ye;if(l<V){var ge=f-V,De=Math.min(V,xe);for(ge+l<0&&Y(3);l<De;++l)i[l]=r[ge+l]}for(;l<xe;++l)i[l]=i[l-V]}}s.l=p,s.p=de,s.b=l,s.f=u,p&&(u=1,s.m=v,s.d=h,s.n=d)}while(!u);return l!=i.length&&m?Dt(i,0,l):i.subarray(0,l)};var Ft=new _(0);var zt=function(t,s){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Y(6,"invalid zlib data"),(t[1]>>5&1)==+!s&&Y(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function Je(t,s){return Ct(t.subarray(zt(t,s&&s.dictionary),-4),{i:2},s&&s.out,s&&s.dictionary)}var Ut=typeof TextDecoder<"u"&&new TextDecoder,Pt=0;try{Ut.decode(Ft,{stream:!0}),Pt=1}catch{}function It(t){t=t.replace(/-/g,"+").replace(/_/g,"/");let s=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),i=Je(s),r=new TextDecoder().decode(i).split(" ").map(e=>parseInt(e)),a=[];if(r.length<3)return a;let f=r.shift(),c=r.shift()/f,o=r.shift();if(r.length<o)return a;for(let e=0;e<o;e++){let u=[],n=r.shift();if(r.length<n+(o-e-1))return a;for(let l=0;l<n;l++){let p=r.shift()*c;u.push(l==0?p:u[l-1]+p)}a.push(u)}return a}function we(t){let{rhythm_version:s,rhythmstring:i}=t.track;if(!(s!==1||!i))try{let r=It(i);if(r.length&&r.every(a=>a.every(Number.isFinite)))return r}catch{}}var B=class{static{this.correctLatency=!0}static{this.references=0}static addReference(){this.references++,this.resume()}static removeReference(){if(this.references--,this.references===0){let s=this.context;this.context=void 0,s?.close().catch(()=>{})}}static setCorrectLatency(s){this.correctLatency=s,s?this.resume():this.context?.suspend().catch(()=>{})}static resume(){if(!(!this.correctLatency||!this.references||typeof AudioContext!="function"))try{this.context??=new AudioContext,this.context.state!=="running"&&this.context.resume().catch(()=>{})}catch{}}static getProgress(){let s=this.correctLatency&&this.context?.outputLatency||0;return Math.max(0,SpotiKit.Player.position/1e3-s)}};var et=[1,2],ae=10,ee=20,he=10,kt=[{name:"Beats",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.beats?.length,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis.beats;if(!a)return;let f=U(a,c=>c.start,i.start),m=U(a,c=>c.start,i.end);t.lineWidth=1,t.strokeStyle="#FFFFFF33",t.beginPath();for(let c=f;c<=m;c++){let e=a[c].start,u=w(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Bars",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.bars?.length,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis.bars;if(!a)return;let f=U(a,c=>c.start,i.start),m=U(a,c=>c.start,i.end);t.lineWidth=3,t.strokeStyle="#FFFFFF66",t.beginPath();for(let c=f;c<=m;c++){let e=a[c].start,u=w(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Position",layer:"overlay",isSupported:t=>!0,render:(t,s,i,r)=>{t.lineWidth=5,t.strokeStyle=t.fillStyle="white",t.beginPath();let a=w(i.current,i.start,i.end,r.x,r.x+r.width);t.moveTo(a,r.y),t.lineTo(a,r.y+r.height),t.stroke();let f=10;t.beginPath(),t.moveTo(a-f,r.y),t.lineTo(a+f,r.y),t.lineTo(a,r.y+f),t.lineTo(a-f,r.y),t.moveTo(a-f,r.y+r.height),t.lineTo(a+f,r.y+r.height),t.lineTo(a,r.y+r.height-f),t.lineTo(a-f,r.y+r.height),t.fill()}},{name:"Loudness",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=U(a.segments,o=>o.start,i.start),m=U(a.segments,o=>o.start,i.end),c=o=>H(o);t.lineWidth=2,t.strokeStyle="white",t.beginPath();for(let o=f;o<=m+1&&o<a.segments.length;o++){let e=a.segments[o],u=w(e.start,i.start,i.end,r.x,r.x+r.width),n=w(c(e.loudness_start),0,1,r.y+r.height,r.y),l=w(e.start+e.loudness_max_time,i.start,i.end,r.x,r.x+r.width),p=w(c(e.loudness_max),0,1,r.y+r.height,r.y);if(o===f?t.moveTo(u,n):t.lineTo(u,n),t.lineTo(l,p),o===a.segments.length-1){let h=w(e.start+e.duration,i.start,i.end,r.x,r.x+r.width),v=w(c(e.loudness_end),0,1,r.y+r.height,r.y);t.lineTo(h,v)}}t.stroke()}},{name:"Confidence",layer:"content",height:.25,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=U(a.segments,c=>c.start,i.start),m=U(a.segments,c=>c.start,i.end);t.beginPath();for(let c=f;c<=m;c++){let o=a.segments[c],e=w(o.start,i.start,i.end,r.x,r.x+r.width),u=w(o.start+o.duration,i.start,i.end,r.x,r.x+r.width);t.fillStyle=`rgba(255, 255, 255, ${o.confidence})`,t.fillRect(e,r.y,u-e,r.height)}t.fill()}},{name:"Timbre",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,m=U(a.segments,o=>o.start,i.start),c=U(a.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=(Math.sqrt(5)-1)/2,u=o*e;t.beginPath();for(let n=m;n<=c;n++){let l=a.segments[n],p=w(Math.tanh(.02*l.timbre[o]),-1,1,0,1),h=w(l.start,i.start,i.end,r.x,r.x+r.width),v=w(l.start+l.duration,i.start,i.end,r.x,r.x+r.width),d=r.y+o/12*r.height;t.fillStyle=`hsla(${u*360}, 100%, 70%, ${p})`,t.fillRect(h,d,v-h,f)}t.fill()}}},{name:"Pitches",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,m=U(a.segments,o=>o.start,i.start),c=U(a.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=o/12;t.beginPath();for(let u=m;u<=c;u++){let n=a.segments[u],l=w(n.start,i.start,i.end,r.x,r.x+r.width),p=w(n.start+n.duration,i.start,i.end,r.x,r.x+r.width),h=r.y+o/12*r.height;t.fillStyle=`hsla(${e*360}, 100%, 70%, ${n.pitches[o]})`,t.fillRect(l,h,p-l,f)}t.fill()}}},{name:"Rhythm",layer:"content",height:.5,isSupported:t=>!!t.rhythm,render:(t,s,i,r)=>{let a=s.rhythm;if(!a)return;let f=r.height/a.length,m=Math.min(f,20),c=m/2/r.width*(i.end-i.start);t.fillStyle="white",t.beginPath();for(let o=a.length-1;o>=0;o--){let e=U(a[o],n=>n,i.start-c),u=U(a[o],n=>n,i.end+c);for(let n=e;n<=u;n++){let l=w(a[o][n],i.start,i.end,r.x,r.x+r.width),p=r.y+o*f;t.rect(l-m/2,p,m,f)}}t.fill()}}];function Pe(t){let s=ue(J),[i,r,a]=ce(()=>{let o=t.trackData.audioAnalysis,e={trackData:t.trackData,rhythm:we(o)},u=kt.filter(h=>h.isSupported(e)),n=o.bars??[],l=n.reduce((h,v)=>h+v.duration,0)/n.length,p=Number.isFinite(l)&&l>0?l:1;return[u,p,e]},[t.trackData]),f=M(o=>o?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),m=M((o,e)=>{e.isError},[]),c=M((o,e,u)=>{if(u.isError||!o)return;o.clearRect(0,0,o.canvas.width,o.canvas.height);let n=B.getProgress(),l=n-et[0]*e.barDuration,p=n+et[1]*e.barDuration,h={start:l,end:p,current:n},v=(T,C,L)=>{o.save(),o.font=`${ee}px sans-serif`,o.textAlign="center",o.fillStyle="white",o.rotate(Math.PI*3/2),o.fillText(T,-(C+L/2),ee,L),o.restore()},d=(T,C)=>{o.save(),o.beginPath(),o.rect(C.x,C.y,C.width,C.height),o.clip(),T.render(o,e.processedTrackData,h,C),o.restore()};for(let T of e.supportedSections)T.layer==="background"&&d(T,{x:ee+he,y:0,width:o.canvas.width-ee-he,height:o.canvas.height});let y=e.supportedSections.filter(T=>T.layer==="content"),A=o.canvas.height-ae*(y.length-1),D=y.reduce((T,C)=>T+C.height,0),E=0,R=0;for(let T of y){let C=w(E,0,D,0,A)+R*ae,L=w(E+T.height,0,D,0,A)+R*ae;E+=T.height,R++,d(T,{x:ee+he,y:C,width:o.canvas.width-ee-he,height:L-C}),v(T.name,C,L-C),R<y.length&&(o.lineWidth=1,o.strokeStyle="#AAAAAA",o.beginPath(),o.moveTo(ae/2,L+ae/2),o.lineTo(o.canvas.width-ae/2,L+ae/2),o.stroke())}for(let T of e.supportedSections)T.layer==="overlay"&&d(T,{x:ee+he,y:0,width:o.canvas.width-ee-he,height:o.canvas.height})},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{barDuration:r,supportedSections:i,processedTrackData:a},contextType:"2d",onInit:f,onResize:m,onRender:c,style:{width:"100%",height:"100%"}})}var tt=`#version 300 es

in vec2 inPosition;
out vec2 fragUV;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
}
`,rt=`#version 300 es
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
`;var nt=`#version 300 es

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
`,it=`#version 300 es
precision highp float;

in vec2 fragUV;
in float fragDotRadiusPX;
out float outColor;

void main() {
    float t = clamp((1.0 - length(fragUV)) * fragDotRadiusPX, 0.0, 1.0);
    outColor = t;
}
`;var ot=`#version 300 es

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
`,at=`#version 300 es
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
`;var st=`#version 300 es

uniform vec3 uOutputColor;
in vec2 inPosition;

out vec2 fragUV;
out vec3 fragOutputColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragOutputColor = uOutputColor;
}
`,ut=`#version 300 es
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
`;function Ie(t){let s=ue(J),i=t.trackData.audioAnalysis,r=ce(()=>{if(!i)return[{x:0,y:0}];let e=i.segments,u=e.flatMap(n=>n.loudness_max_time?[{x:n.start,y:H(n.loudness_start)},{x:n.start+n.loudness_max_time,y:H(n.loudness_max)}]:[{x:n.start,y:H(n.loudness_start)}]);if(e.length){u[0].accumulatedIntegral=0;for(let l=1;l<u.length;l++){let p=u[l-1],h=u[l];h.accumulatedIntegral=(p.accumulatedIntegral??0)+fe(p,h)}let n=e[e.length-1];u.push({x:n.start+n.duration,y:H(n.loudness_end)})}return u},[i]),a=i.meta?.timestamp??0,f=M(e=>{if(!e)return s("Error: WebGL2 is not supported"),{isError:!0};if(!e.getExtension("EXT_color_buffer_float"))return s("Error: Rendering to floating-point textures is not supported"),{isError:!0};let u=(re,ne,ie)=>{let W=e.createShader(re);if(e.shaderSource(W,ne),e.compileShader(W),!e.getShaderParameter(W,e.COMPILE_STATUS)&&!e.isContextLost()){let pe=`Error: Failed to compile '${ie}' shader`,Le=e.getShaderInfoLog(W);return console.error(`[Visualizer] ${pe}`,Le),s(pe),null}return W},n=(re,ne,ie)=>{let W=e.createProgram();if(e.attachShader(W,re),e.attachShader(W,ne),e.linkProgram(W),e.deleteShader(re),e.deleteShader(ne),!e.getProgramParameter(W,e.LINK_STATUS)&&!e.isContextLost()){let pe=`Error: Failed to link '${ie}' shader`,Le=e.getProgramInfoLog(W);return console.error(`[Visualizer] ${pe}`,Le),s(pe),null}return W},l=re=>{let ne=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,ne);let ie=e.createTexture();return e.bindTexture(e.TEXTURE_2D,ie),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,re),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie,0),{framebuffer:ne,texture:ie}},p=u(e.VERTEX_SHADER,tt,"particle vertex");if(!p)return{isError:!0};let h=u(e.FRAGMENT_SHADER,rt,"particle fragment");if(!h)return{isError:!0};let v=n(p,h,"particle");if(!v)return{isError:!0};let d=e.getAttribLocation(v,"inPosition"),y=e.getUniformLocation(v,"uNoiseOffset"),A=e.getUniformLocation(v,"uAmplitude"),D=e.getUniformLocation(v,"uSeed"),E=e.getUniformLocation(v,"uDotSpacing"),R=e.getUniformLocation(v,"uDotOffset"),T=e.getUniformLocation(v,"uSphereRadius"),C=e.getUniformLocation(v,"uFeather"),L=e.getUniformLocation(v,"uNoiseFrequency"),G=e.getUniformLocation(v,"uNoiseAmplitude"),P=u(e.VERTEX_SHADER,nt,"dot vertex");if(!P)return{isError:!0};let b=u(e.FRAGMENT_SHADER,it,"dot fragment");if(!b)return{isError:!0};let F=n(P,b,"dot");if(!F)return{isError:!0};let I=e.getAttribLocation(F,"inPosition"),x=e.getUniformLocation(F,"uDotCount"),z=e.getUniformLocation(F,"uDotRadius"),N=e.getUniformLocation(F,"uDotRadiusPX"),k=e.getUniformLocation(F,"uParticleTexture"),te=u(e.VERTEX_SHADER,ot,"blur vertex");if(!te)return{isError:!0};let V=u(e.FRAGMENT_SHADER,at,"blur fragment");if(!V)return{isError:!0};let K=n(te,V,"blur");if(!K)return{isError:!0};let Ae=e.getAttribLocation(K,"inPosition"),de=e.getUniformLocation(K,"uBlurRadius"),j=e.getUniformLocation(K,"uBlurDirection"),ye=e.getUniformLocation(K,"uInputTexture"),Q=u(e.VERTEX_SHADER,st,"finalize vertex");if(!Q)return{isError:!0};let se=u(e.FRAGMENT_SHADER,ut,"finalize fragment");if(!se)return{isError:!0};let Z=n(Q,se,"finalize");if(!Z)return{isError:!0};let xe=e.getAttribLocation(Z,"inPosition"),ge=e.getUniformLocation(Z,"uOutputColor"),De=e.getUniformLocation(Z,"uBlurredTexture"),be=e.getUniformLocation(Z,"uOriginalTexture"),{framebuffer:Te,texture:Se}=l(e.NEAREST),{framebuffer:ht,texture:dt}=l(e.NEAREST),{framebuffer:pt,texture:vt}=l(e.LINEAR),{framebuffer:mt,texture:yt}=l(e.NEAREST),Be=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,Be),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.enable(e.BLEND),e.blendEquation(e.MAX),{isError:!1,particleShader:v,dotShader:F,blurShader:K,finalizeShader:Z,viewportSize:0,particleTextureSize:0,inPositionLoc:d,inPositionLocDot:I,inPositionLocBlur:Ae,inPositionLocFinalize:xe,uNoiseOffsetLoc:y,uAmplitudeLoc:A,uSeedLoc:D,uDotSpacingLoc:E,uDotOffsetLoc:R,uSphereRadiusLoc:T,uFeatherLoc:C,uNoiseFrequencyLoc:L,uNoiseAmplitudeLoc:G,uDotCountLoc:x,uDotRadiusLoc:z,uDotRadiusPXLoc:N,uParticleTextureLoc:k,uBlurRadiusLoc:de,uBlurDirectionLoc:j,uBlurInputTextureLoc:ye,uOutputColorLoc:ge,uBlurredTextureLoc:De,uOriginalTextureLoc:be,quadBuffer:Be,particleFramebuffer:Te,particleTexture:Se,dotFramebuffer:ht,dotTexture:dt,blurXFramebuffer:pt,blurXTexture:vt,blurYFramebuffer:mt,blurYTexture:yt}},[]),m=M((e,u)=>{!e||u.isError||(e.deleteBuffer(u.quadBuffer),[u.particleTexture,u.dotTexture,u.blurXTexture,u.blurYTexture].forEach(n=>e.deleteTexture(n)),[u.particleFramebuffer,u.dotFramebuffer,u.blurXFramebuffer,u.blurYFramebuffer].forEach(n=>e.deleteFramebuffer(n)),[u.particleShader,u.dotShader,u.blurShader,u.finalizeShader].forEach(n=>e.deleteProgram(n)))},[]),c=M((e,u)=>{u.isError||!e||(u.viewportSize=Math.min(e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindTexture(e.TEXTURE_2D,u.dotTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurXTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurYTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null))},[]),o=M((e,u,n)=>{if(n.isError||!e)return;let l=B.getProgress(),p=(.5*l+He(u.amplitudeCurve,l))*75*.01,h=Xe(u.amplitudeCurve,l,.15),v=u.seed,d=322,y=.9/d,A=y*.5*n.viewportSize,D=.9,E=-.9/2,R=w(h,0,1,.75*.9,.9),T=Math.pow(h+3,2)*(45/1568),C=4,L=.32*.9;n.particleTextureSize!==d&&(n.particleTextureSize=d,e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,d,d,0,e.RG,e.FLOAT,null)),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.particleFramebuffer),e.viewport(0,0,d,d),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.particleShader),e.uniform1f(n.uNoiseOffsetLoc,p),e.uniform1f(n.uAmplitudeLoc,h),e.uniform1i(n.uSeedLoc,v),e.uniform1f(n.uDotSpacingLoc,D),e.uniform1f(n.uDotOffsetLoc,E),e.uniform1f(n.uSphereRadiusLoc,R),e.uniform1f(n.uFeatherLoc,T),e.uniform1f(n.uNoiseFrequencyLoc,C),e.uniform1f(n.uNoiseAmplitudeLoc,L),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLoc),e.vertexAttribPointer(n.inPositionLoc,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.dotFramebuffer),e.viewport(0,0,n.viewportSize,n.viewportSize),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.dotShader),e.uniform1i(n.uDotCountLoc,d),e.uniform1f(n.uDotRadiusLoc,y),e.uniform1f(n.uDotRadiusPXLoc,A),e.uniform1i(n.uParticleTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocDot),e.vertexAttribPointer(n.inPositionLocDot,2,e.FLOAT,!1,0,0),e.drawArraysInstanced(e.TRIANGLE_FAN,0,4,d*d),e.bindFramebuffer(e.FRAMEBUFFER,n.blurXFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.blurShader),e.uniform1f(n.uBlurRadiusLoc,.01*n.viewportSize),e.uniform2f(n.uBlurDirectionLoc,1/n.viewportSize,0),e.uniform1i(n.uBlurInputTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocBlur),e.vertexAttribPointer(n.inPositionLocBlur,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,n.blurYFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.uBlurDirectionLoc,0,1/n.viewportSize),e.bindTexture(e.TEXTURE_2D,n.blurXTexture),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.finalizeShader),e.uniform3f(n.uOutputColorLoc,(u.themeColor>>16&255)/255,(u.themeColor>>8&255)/255,(u.themeColor&255)/255),e.uniform1i(n.uBlurredTextureLoc,0),e.uniform1i(n.uOriginalTextureLoc,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.blurYTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocFinalize),e.vertexAttribPointer(n.inPositionLocFinalize,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{themeColor:parseInt(t.trackData.color.slice(1),16),seed:a,amplitudeCurve:r},contextType:"webgl2",onInit:f,onDispose:m,onResize:c,onRender:o,style:{width:"100%",height:"100%",objectFit:"contain"},sizeConstraint:(e,u)=>{let n=Math.min(e,u);return{width:n,height:n}}})}function ke(t){let s=ue(J),i=t.trackData.audioAnalysis,r=ce(()=>{if(!i)return[];let c=i.segments,o=we(i)??[[]],e=.4,u=.2,n=.4,l=e/Math.sqrt(2)*8,p=12*o.length,h=[];for(let d=0;d<c.length;d++){let y=c[d],A=H(y.loudness_start),D=H(y.loudness_max),E=y.start+y.loudness_max_time,R=y.pitches,T=E-l,C=E+l,L=o.map(b=>{let F=U(b,x=>x,T),I=U(b,x=>x,C);return b.slice(F,I).map(x=>Math.exp(-Math.pow((x-E)/e,2))).reduce((x,z)=>x+z,0)+u}),G=Math.max(...L);for(let b=0;b<L.length;b++)L[b]/=G;let P=Array(p);for(let b=0;b<L.length;b++){let F=L.length===1?1:w(b,0,L.length-1,.2,.6);for(let I=0;I<12;I++){let x=Re([...L.entries()],k=>k[0],k=>k[1],Ve,b+I/12),z=R.reduce((k,te)=>k+te,0)/R.length,N=R[I]*F+z*(1-F);P[12*b+I]=x*N}}if(h.push([y.start,...P.map(b=>b*A)]),h.push([E,...P.map(b=>b*D)]),d==c.length-1){let b=H(y.loudness_end);h.push([y.start+y.duration,...P.map(F=>F*b)])}}let v=Array(p).fill(0).map(d=>Array(h.length));for(let d=0;d<p;d++){let y=0,A={x:0,y:0},D={x:0,y:0};for(let E=0;E<h.length;E++){let R={x:h[E][0],y:h[E][d+1]},T=R.x+R.y/n,C=D.x+D.y/n;if(T>C){if(D.x!==A.x){let L=(R.y-A.y)/(R.x-A.x),G=A.y-L*A.x,P=-n,F=(D.y-P*D.x-G)/(L-P),I=L*F+G;v[d][y]={x:F,y:I},y++}D=R,v[d][y]=R,y++}A=R}v[d].length=y}return v},[i]),a=M(c=>c?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),f=M((c,o)=>{o.isError},[]),m=M((c,o,e)=>{if(e.isError||!c)return;let u=B.getProgress();c.clearRect(0,0,c.canvas.width,c.canvas.height),c.fillStyle=o.themeColor;let n=o.spectrumData.length;if(!n)return;let l=c.canvas.width/n*.7,p=(c.canvas.width-l*n)/(n+1);for(let h=0;h<n;h++){let v=o.spectrumData[h];if(!v.length)continue;let d=Re(v,y=>y.x,y=>y.y,y=>y,Math.max(u,v[0].x));c.fillRect(p*(h+1)+l*h,c.canvas.height-d*c.canvas.height,l,d*c.canvas.height)}},[]);return g.createElement(oe,{isEnabled:t.isEnabled,data:{themeColor:t.trackData.color,spectrumData:r},contextType:"2d",onInit:a,onResize:f,onRender:m,style:{width:"100%",height:"100%"}})}var ct="#535353",Me={ncs:{name:"NCS",renderer:Ie},spectrum:{name:"Spectrum",renderer:ke},debug:{name:"Debug",renderer:Pe}};async function ft(t){let s=t.images?.[0]?.url??t.album?.images?.[0]?.url,[i,r]=await Promise.all([SpotiKit.Audio.analysis(t.uri),Promise.resolve().then(()=>SpotiKit.Colors.extract(s??t.uri)).catch(()=>{})]);if(!i?.track||!i.segments?.length)throw new Error("Spotify returned no audio segments.");let a=[r?.light,r?.raw].find(f=>f&&/^#[0-9a-f]{6}$/i.test(f));return{audioAnalysis:i,color:a??ct}}function Mt(){try{let t=localStorage.getItem("spotikit-visualizer.renderer");if(t==="ncs"||t==="spectrum"||t==="debug")return t}catch{}return"ncs"}function lt({popup:t=!1,initialMode:s}){let[i,r]=O(()=>s??Mt()),[a,f]=O(()=>SpotiKit.Player.track),[m,c]=O(),[o,e]=O(0),[u,n]=O(),[l,p]=O(B.correctLatency),[h,v]=O(null),d=Ee(null),y=h?.ownerDocument,A=We(y)===h&&h!==null,D=_e(y),E=a?.uri??"",R=E.startsWith("spotify:track:"),T=m?.uri===E?m:void 0,C=Me[i].renderer;X(()=>{let x=()=>f(SpotiKit.Player.track),z=SpotiKit.Player.on("track",x);return x(),z},[]),X(()=>{if(!a||!R)return;let x=!0;return c(void 0),ft(a).then(z=>{x&&c({uri:E,data:z})},z=>{console.warn("[Visualizer] Audio analysis unavailable",z),x&&c({uri:E,error:"\u0410\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u043A\u0430."})}),()=>{x=!1}},[E,R,o]),X(()=>(B.addReference(),()=>B.removeReference()),[]);function L(x){if(r(x),n(void 0),!t)try{localStorage.setItem("spotikit-visualizer.renderer",x)}catch{}}function G(){c(void 0),e(x=>x+1)}async function P(){if(!(!h||!y))try{A?await y.exitFullscreen():await h.requestFullscreen(),d.current&&(d.current.open=!1)}catch{SpotiKit.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C.")}}async function b(){let x=null;try{if(x=window.open("","","popup,width=960,height=540"),!x){let k=window.documentPictureInPicture;k&&(x=await k.requestWindow({width:960,height:540}))}if(!x)throw new Error("Popup unavailable");x.document.title="Visualizer",x.document.body.style.margin="0";let z=x.document.body.appendChild(x.document.createElement("div")),N=SpotiKit.ReactDOM.createRoot(z);x.addEventListener("pagehide",()=>N.unmount(),{once:!0}),N.render(g.createElement(lt,{popup:!0,initialMode:i}))}catch(z){x?.close(),console.warn("[Visualizer] Could not open a window",z),SpotiKit.notify("\u041A\u043B\u0438\u0435\u043D\u0442 Spotify \u043D\u0435 \u0441\u043C\u043E\u0433 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E.")}}let F=E?R?T?.error??u:"\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u043A\u043E\u0432.":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0442\u0440\u0435\u043A, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440.",I=R&&!T;return g.createElement("div",{className:`spotikit-visualizer${t?" spotikit-visualizer--popup":""}${A&&!D?" spotikit-visualizer--idle":""}`,ref:v,onPointerDown:()=>B.resume(),onKeyDown:x=>{B.resume(),x.key==="Escape"&&d.current?.open&&(d.current.open=!1)}},g.createElement("style",null,Oe),T?.data&&!u&&g.createElement(J.Provider,{value:n},g.createElement(C,{key:`${E}:${i}`,isEnabled:!0,trackData:T.data})),I&&g.createElement("div",{className:"spotikit-visualizer-status",role:"status","aria-label":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0430\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0430"},g.createElement(Ce,null)),!I&&F&&g.createElement("div",{className:"spotikit-visualizer-status",role:"status"},g.createElement("p",null,F),T?.error&&g.createElement("button",{type:"button",onClick:G},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C")),g.createElement("details",{className:"spotikit-visualizer-controls",ref:d},g.createElement("summary",{"aria-label":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430",title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430"},g.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},g.createElement("circle",{cx:"5",cy:"12",r:"1.8"}),g.createElement("circle",{cx:"12",cy:"12",r:"1.8"}),g.createElement("circle",{cx:"19",cy:"12",r:"1.8"}))),g.createElement("div",{className:"spotikit-visualizer-settings"},g.createElement("label",null,"\u0420\u0435\u0436\u0438\u043C",g.createElement("select",{value:i,onChange:x=>L(x.currentTarget.value)},Object.entries(Me).map(([x,z])=>g.createElement("option",{key:x,value:x},z.name)))),g.createElement("label",null,g.createElement("input",{type:"checkbox",checked:l,onChange:x=>{let z=x.currentTarget.checked;p(z),B.setCorrectLatency(z)}}),"\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0443"),g.createElement("button",{type:"button",onClick:P},A?"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430":"\u041D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D"),!t&&g.createElement("button",{type:"button",onClick:b},"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u043A\u043D\u0435"))))}export{lt as default};
