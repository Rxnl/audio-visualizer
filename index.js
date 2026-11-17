/*! SpotiKit port by rxnl. Based on Spicetify Visualizer by Konsl (MIT). */
var We=SpotiKit.React,y=We,{createContext:Ve,useCallback:N,useContext:fe,useEffect:X,useMemo:le,useRef:Ce,useState:O}=We;var Xe=`.spotikit-app:has(> .spotikit-visualizer) {\r
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
	background: transparent;\r
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
.spotikit-visualizer-settings input[type="color"] {\r
	width: 34px;\r
	height: 28px;\r
	padding: 2px;\r
	border: 1px solid #717171;\r
	border-radius: 6px;\r
	background: transparent;\r
	cursor: pointer;\r
}\r
.spotikit-visualizer-settings input[type="color"]:disabled {\r
	opacity: 0.5;\r
	cursor: default;\r
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
.spotikit-visualizer :is(button, select):hover {\r
	background: #484848;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle:not(:has(details[open], :focus-visible)) {\r
	cursor: none;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle details:not([open], :hover, :focus-within) {\r
	opacity: 0;\r
}\r
`;function ze(){return y.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},y.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},y.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),y.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})),y.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},y.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}),y.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"})))}var te=Ve(()=>{});function He(t){let[s,o]=O(t?.fullscreenElement??null);return X(()=>{if(!t)return;let r=()=>o(t.fullscreenElement);return r(),t.addEventListener("fullscreenchange",r),()=>t.removeEventListener("fullscreenchange",r)},[t]),s}function qe(t,s=5e3){let[o,r]=O(!0);return X(()=>{if(!t)return;let a=o,f=i=>{a!==i&&(a=i,r(i))},d=0,c=()=>{f(!0),clearTimeout(d),d=setTimeout(()=>f(!1),s)};return c(),t.addEventListener("mousemove",c),()=>{clearTimeout(d),t.removeEventListener("mousemove",c)}},[t]),o}function se(t){let{contextType:s,onInit:o,onDispose:r,onResize:a,onRender:f,style:d,data:c,isEnabled:i}=t,e=Ce(null),[u,n]=O(null),l=N((h,p)=>{let v=Math.round(h.clientWidth*p.devicePixelRatio),m=Math.round(h.clientHeight*p.devicePixelRatio),{width:x,height:S}=t.sizeConstraint?.(v,m)??{width:v,height:m};h.width===x&&h.height===S||(h.width=x,h.height=S)},[]);return X(()=>{if(!o)return;let h=e.current;if(!h)return;let p=h.ownerDocument.defaultView;if(!p)return;let v=h.getContext(s),m=o(v);return l(h,p),a(v,m),n(m),()=>r?.(v,m)},[s,o,r]),X(()=>{if(!i||!u||!f)return;let h=e.current;if(!h)return;let p=h.ownerDocument.defaultView;if(!p)return;let v=h.getContext(s),m=0,x=S=>{u&&(f(v,c,u,S),m=p.requestAnimationFrame(x))};return m=p.requestAnimationFrame(x),()=>{m&&p.cancelAnimationFrame(m)}},[s,f,c,u,i]),X(()=>{if(!e.current)return;let h=e.current.ownerDocument.defaultView;if(!h)return;let p=new h.ResizeObserver(()=>{let v=e.current;if(!v)return;let m=v.ownerDocument.defaultView;if(!m)return;l(v,m);let x=v.getContext(s);x&&u&&a(x,u)});return p.observe(e.current),()=>p.disconnect()},[s,a,u]),y.createElement("canvas",{ref:e,style:{...d||{},...i?{}:{visibility:"hidden"}}})}function U(t,s,o){let r=0,a=t.length;for(;a-r>1;){let f=Math.floor((a+r)/2);s(t[f],f)<=o?r=f:a=f}return r}function H(t){return Math.min(Math.max(Math.pow(10,t/20),0),1)}function Ye(t){return t*t*(3-2*t)}function A(t,s,o,r,a){return t=(t-s)/(o-s),t=t*(a-r)+r,t}function Rt(t,s,o,r,a,f){return t=(t-s)/(o-s),t=r(t),t=t*(f-a)+a,t}function he(t,s){return-.5*(t.x-s.x)*(t.y+s.y)}function we(t,s,o,r,a){let f=U(t,s,a),d=t[f];if(f>t.length-2)return o(d,f);let c=t[f+1];return Rt(a,s(d,f),s(c,f+1),r,o(d,f),o(c,f+1))}function $e(t,s,o){if(o==0)return we(t,i=>i.x,i=>i.y,i=>i,s);let r=s-o/2,a=s+o/2,f=U(t,i=>i.x,r),d=U(t,i=>i.x,a),c=0;if(f==d){let i=t[f];if(f>t.length-2)return i.y;let e=t[f+1],u=A(r,i.x,e.x,i.y,e.y),n=A(a,i.x,e.x,i.y,e.y);return(u+n)/2}else{let i=t[f],e=t[f+1],u={x:r,y:A(r,i.x,e.x,i.y,e.y)};c=he(u,e);for(let n=f+1;n<d;n++)i=e,e=t[n+1],c+=he(i,e);i=e,d>t.length-2?c+=i.y*(a-i.x):(e=t[d+1],u={x:a,y:A(a,i.x,e.x,i.y,e.y)},c+=he(i,u))}return c/o}function Ze(t,s){let o=U(t,d=>d.x,s),r=t[o];if(o+1>=t.length)return(r.accumulatedIntegral??0)+r.y*(s-r.x);let a=t[o+1],f={x:s,y:A(s,r.x,a.x,r.y,a.y)};return(r.accumulatedIntegral??0)+he(r,f)}var V=Uint8Array,pe=Uint16Array,At=Int32Array,Ke=new V([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),je=new V([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dt=new V([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qe=function(t,s){for(var o=new pe(31),r=0;r<31;++r)o[r]=s+=1<<t[r-1];for(var a=new At(o[30]),r=1;r<30;++r)for(var f=o[r];f<o[r+1];++f)a[f]=f-o[r]<<5|r;return{b:o,r:a}},Je=Qe(Ke,2),et=Je.b,Lt=Je.r;et[28]=258,Lt[258]=28;var tt=Qe(je,0),zt=tt.b,or=tt.r,Pe=new pe(32768);for(w=0;w<32768;++w)j=(w&43690)>>1|(w&21845)<<1,j=(j&52428)>>2|(j&13107)<<2,j=(j&61680)>>4|(j&3855)<<4,Pe[w]=((j&65280)>>8|(j&255)<<8)>>1;var j,w,me=(function(t,s,o){for(var r=t.length,a=0,f=new pe(s);a<r;++a)t[a]&&++f[t[a]-1];var d=new pe(s);for(a=1;a<s;++a)d[a]=d[a-1]+f[a-1]<<1;var c;if(o){c=new pe(1<<s);var i=15-s;for(a=0;a<r;++a)if(t[a])for(var e=a<<4|t[a],u=s-t[a],n=d[t[a]-1]++<<u,l=n|(1<<u)-1;n<=l;++n)c[Pe[n]>>i]=e}else for(c=new pe(r),a=0;a<r;++a)t[a]&&(c[a]=Pe[d[t[a]-1]++]>>15-t[a]);return c}),ye=new V(288);for(w=0;w<144;++w)ye[w]=8;var w;for(w=144;w<256;++w)ye[w]=9;var w;for(w=256;w<280;++w)ye[w]=7;var w;for(w=280;w<288;++w)ye[w]=8;var w,rt=new V(32);for(w=0;w<32;++w)rt[w]=5;var w;var Ft=me(ye,9,1);var Ut=me(rt,5,1),Fe=function(t){for(var s=t[0],o=1;o<t.length;++o)t[o]>s&&(s=t[o]);return s},q=function(t,s,o){var r=s/8|0;return(t[r]|t[r+1]<<8)>>(s&7)&o},Ue=function(t,s){var o=s/8|0;return(t[o]|t[o+1]<<8|t[o+2]<<16)>>(s&7)},Pt=function(t){return(t+7)/8|0},kt=function(t,s,o){return(s==null||s<0)&&(s=0),(o==null||o>t.length)&&(o=t.length),new V(t.subarray(s,o))};var It=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Y=function(t,s,o){var r=new Error(s||It[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,Y),!o)throw r;return r},Mt=function(t,s,o,r){var a=t.length,f=r?r.length:0;if(!a||s.f&&!s.l)return o||new V(0);var d=!o,c=d||s.i!=2,i=s.i;d&&(o=new V(a*3));var e=function(Se){var Te=o.length;if(Se>Te){var Ee=new V(Math.max(Te*2,Se));Ee.set(o),o=Ee}},u=s.f||0,n=s.p||0,l=s.b||0,h=s.l,p=s.d,v=s.m,m=s.n,x=a*8;do{if(!h){u=q(t,n,1);var S=q(t,n+1,3);if(n+=3,S)if(S==1)h=Ft,p=Ut,v=9,m=5;else if(S==2){var T=q(t,n,31)+257,R=q(t,n+10,15)+4,C=T+q(t,n+5,31)+1;n+=14;for(var k=new V(C),P=new V(19),b=0;b<R;++b)P[Dt[b]]=q(t,n+b*3,7);n+=R*3;for(var F=Fe(P),I=(1<<F)-1,M=me(P,F,1),b=0;b<C;){var $=M[q(t,n,I)];n+=$&15;var E=$>>4;if(E<16)k[b++]=E;else{var _=0,B=0;for(E==16?(B=3+q(t,n,3),n+=2,_=k[b-1]):E==17?(B=3+q(t,n,7),n+=3):E==18&&(B=11+q(t,n,127),n+=7);B--;)k[b++]=_}}var Z=k.subarray(0,T),g=k.subarray(T);v=Fe(Z),m=Fe(g),h=me(Z,v,1),p=me(g,m,1)}else Y(1);else{var E=Pt(n)+4,z=t[E-4]|t[E-3]<<8,D=E+z;if(D>a){i&&Y(0);break}c&&e(l+z),o.set(t.subarray(E,D),l),s.b=l+=z,s.p=n=D*8,s.f=u;continue}if(n>x){i&&Y(0);break}}c&&e(l+131072);for(var L=(1<<v)-1,ue=(1<<m)-1,Q=n;;Q=n){var _=h[Ue(t,n)&L],J=_>>4;if(n+=_&15,n>x){i&&Y(0);break}if(_||Y(2),J<256)o[l++]=J;else if(J==256){Q=n,h=null;break}else{var ge=J-254;if(J>264){var b=J-257,ee=Ke[b];ge=q(t,n,(1<<ee)-1)+et[b],n+=ee}var ce=p[Ue(t,n)&ue],K=ce>>4;ce||Y(3),n+=ce&15;var g=zt[K];if(K>3){var ee=je[K];g+=Ue(t,n)&(1<<ee)-1,n+=ee}if(n>x){i&&Y(0);break}c&&e(l+131072);var xe=l+ge;if(l<g){var be=f-g,De=Math.min(g,xe);for(be+l<0&&Y(3);l<De;++l)o[l]=r[be+l]}for(;l<xe;++l)o[l]=o[l-g]}}s.l=h,s.p=Q,s.b=l,s.f=u,h&&(u=1,s.m=v,s.d=p,s.n=m)}while(!u);return l!=o.length&&d?kt(o,0,l):o.subarray(0,l)};var Bt=new V(0);var Nt=function(t,s){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Y(6,"invalid zlib data"),(t[1]>>5&1)==+!s&&Y(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function nt(t,s){return Mt(t.subarray(Nt(t,s&&s.dictionary),-4),{i:2},s&&s.out,s&&s.dictionary)}var Gt=typeof TextDecoder<"u"&&new TextDecoder,Ot=0;try{Gt.decode(Bt,{stream:!0}),Ot=1}catch{}function _t(t){t=t.replace(/-/g,"+").replace(/_/g,"/");let s=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),o=nt(s),r=new TextDecoder().decode(o).split(" ").map(e=>parseInt(e)),a=[];if(r.length<3)return a;let f=r.shift(),c=r.shift()/f,i=r.shift();if(r.length<i)return a;for(let e=0;e<i;e++){let u=[],n=r.shift();if(r.length<n+(i-e-1))return a;for(let l=0;l<n;l++){let h=r.shift()*c;u.push(l==0?h:u[l-1]+h)}a.push(u)}return a}function Re(t){let{rhythm_version:s,rhythmstring:o}=t.track;if(!(s!==1||!o))try{let r=_t(o);if(r.length&&r.every(a=>a.every(Number.isFinite)))return r}catch{}}var G=class{static{this.correctLatency=!0}static{this.references=0}static addReference(){this.references++,this.resume()}static removeReference(){if(this.references--,this.references===0){let s=this.context;this.context=void 0,s?.close().catch(()=>{})}}static setCorrectLatency(s){this.correctLatency=s,s?this.resume():this.context?.suspend().catch(()=>{})}static resume(){if(!(!this.correctLatency||!this.references||typeof AudioContext!="function"))try{this.context??=new AudioContext,this.context.state!=="running"&&this.context.resume().catch(()=>{})}catch{}}static getProgress(){let s=this.correctLatency&&this.context?.outputLatency||0;return Math.max(0,SpotiKit.Player.position/1e3-s)}};var ot=[1,2],ae=10,re=20,de=10,Wt=[{name:"Beats",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.beats?.length,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis.beats;if(!a)return;let f=U(a,c=>c.start,o.start),d=U(a,c=>c.start,o.end);t.lineWidth=1,t.strokeStyle="#FFFFFF33",t.beginPath();for(let c=f;c<=d;c++){let e=a[c].start,u=A(e,o.start,o.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Bars",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.bars?.length,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis.bars;if(!a)return;let f=U(a,c=>c.start,o.start),d=U(a,c=>c.start,o.end);t.lineWidth=3,t.strokeStyle="#FFFFFF66",t.beginPath();for(let c=f;c<=d;c++){let e=a[c].start,u=A(e,o.start,o.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Position",layer:"overlay",isSupported:t=>!0,render:(t,s,o,r)=>{t.lineWidth=5,t.strokeStyle=t.fillStyle="white",t.beginPath();let a=A(o.current,o.start,o.end,r.x,r.x+r.width);t.moveTo(a,r.y),t.lineTo(a,r.y+r.height),t.stroke();let f=10;t.beginPath(),t.moveTo(a-f,r.y),t.lineTo(a+f,r.y),t.lineTo(a,r.y+f),t.lineTo(a-f,r.y),t.moveTo(a-f,r.y+r.height),t.lineTo(a+f,r.y+r.height),t.lineTo(a,r.y+r.height-f),t.lineTo(a-f,r.y+r.height),t.fill()}},{name:"Loudness",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=U(a.segments,i=>i.start,o.start),d=U(a.segments,i=>i.start,o.end),c=i=>H(i);t.lineWidth=2,t.strokeStyle="white",t.beginPath();for(let i=f;i<=d+1&&i<a.segments.length;i++){let e=a.segments[i],u=A(e.start,o.start,o.end,r.x,r.x+r.width),n=A(c(e.loudness_start),0,1,r.y+r.height,r.y),l=A(e.start+e.loudness_max_time,o.start,o.end,r.x,r.x+r.width),h=A(c(e.loudness_max),0,1,r.y+r.height,r.y);if(i===f?t.moveTo(u,n):t.lineTo(u,n),t.lineTo(l,h),i===a.segments.length-1){let p=A(e.start+e.duration,o.start,o.end,r.x,r.x+r.width),v=A(c(e.loudness_end),0,1,r.y+r.height,r.y);t.lineTo(p,v)}}t.stroke()}},{name:"Confidence",layer:"content",height:.25,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=U(a.segments,c=>c.start,o.start),d=U(a.segments,c=>c.start,o.end);t.beginPath();for(let c=f;c<=d;c++){let i=a.segments[c],e=A(i.start,o.start,o.end,r.x,r.x+r.width),u=A(i.start+i.duration,o.start,o.end,r.x,r.x+r.width);t.fillStyle=`rgba(255, 255, 255, ${i.confidence})`,t.fillRect(e,r.y,u-e,r.height)}t.fill()}},{name:"Timbre",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,d=U(a.segments,i=>i.start,o.start),c=U(a.segments,i=>i.start,o.end);for(let i=0;i<12;i++){let e=(Math.sqrt(5)-1)/2,u=i*e;t.beginPath();for(let n=d;n<=c;n++){let l=a.segments[n],h=A(Math.tanh(.02*l.timbre[i]),-1,1,0,1),p=A(l.start,o.start,o.end,r.x,r.x+r.width),v=A(l.start+l.duration,o.start,o.end,r.x,r.x+r.width),m=r.y+i/12*r.height;t.fillStyle=`hsla(${u*360}, 100%, 70%, ${h})`,t.fillRect(p,m,v-p,f)}t.fill()}}},{name:"Pitches",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,d=U(a.segments,i=>i.start,o.start),c=U(a.segments,i=>i.start,o.end);for(let i=0;i<12;i++){let e=i/12;t.beginPath();for(let u=d;u<=c;u++){let n=a.segments[u],l=A(n.start,o.start,o.end,r.x,r.x+r.width),h=A(n.start+n.duration,o.start,o.end,r.x,r.x+r.width),p=r.y+i/12*r.height;t.fillStyle=`hsla(${e*360}, 100%, 70%, ${n.pitches[i]})`,t.fillRect(l,p,h-l,f)}t.fill()}}},{name:"Rhythm",layer:"content",height:.5,isSupported:t=>!!t.rhythm,render:(t,s,o,r)=>{let a=s.rhythm;if(!a)return;let f=r.height/a.length,d=Math.min(f,20),c=d/2/r.width*(o.end-o.start);t.fillStyle="white",t.beginPath();for(let i=a.length-1;i>=0;i--){let e=U(a[i],n=>n,o.start-c),u=U(a[i],n=>n,o.end+c);for(let n=e;n<=u;n++){let l=A(a[i][n],o.start,o.end,r.x,r.x+r.width),h=r.y+i*f;t.rect(l-d/2,h,d,f)}}t.fill()}}];function ke(t){let s=fe(te),[o,r,a]=le(()=>{let i=t.trackData.audioAnalysis,e={trackData:t.trackData,rhythm:Re(i)},u=Wt.filter(p=>p.isSupported(e)),n=i.bars??[],l=n.reduce((p,v)=>p+v.duration,0)/n.length,h=Number.isFinite(l)&&l>0?l:1;return[u,h,e]},[t.trackData]),f=N(i=>i?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),d=N((i,e)=>{e.isError},[]),c=N((i,e,u)=>{if(u.isError||!i)return;i.clearRect(0,0,i.canvas.width,i.canvas.height);let n=G.getProgress(),l=n-ot[0]*e.barDuration,h=n+ot[1]*e.barDuration,p={start:l,end:h,current:n},v=(T,R,C)=>{i.save(),i.font=`${re}px sans-serif`,i.textAlign="center",i.fillStyle="white",i.rotate(Math.PI*3/2),i.fillText(T,-(R+C/2),re,C),i.restore()},m=(T,R)=>{i.save(),i.beginPath(),i.rect(R.x,R.y,R.width,R.height),i.clip(),T.render(i,e.processedTrackData,p,R),i.restore()};for(let T of e.supportedSections)T.layer==="background"&&m(T,{x:re+de,y:0,width:i.canvas.width-re-de,height:i.canvas.height});let x=e.supportedSections.filter(T=>T.layer==="content"),S=i.canvas.height-ae*(x.length-1),E=x.reduce((T,R)=>T+R.height,0),z=0,D=0;for(let T of x){let R=A(z,0,E,0,S)+D*ae,C=A(z+T.height,0,E,0,S)+D*ae;z+=T.height,D++,m(T,{x:re+de,y:R,width:i.canvas.width-re-de,height:C-R}),v(T.name,R,C-R),D<x.length&&(i.lineWidth=1,i.strokeStyle="#AAAAAA",i.beginPath(),i.moveTo(ae/2,C+ae/2),i.lineTo(i.canvas.width-ae/2,C+ae/2),i.stroke())}for(let T of e.supportedSections)T.layer==="overlay"&&m(T,{x:re+de,y:0,width:i.canvas.width-re-de,height:i.canvas.height})},[]);return y.createElement(se,{isEnabled:t.isEnabled,data:{barDuration:r,supportedSections:o,processedTrackData:a},contextType:"2d",onInit:f,onResize:d,onRender:c,style:{width:"100%",height:"100%"}})}var it=`#version 300 es

in vec2 inPosition;
out vec2 fragUV;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
}
`,st=`#version 300 es
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
`;var at=`#version 300 es

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
`,ut=`#version 300 es
precision highp float;

in vec2 fragUV;
in float fragDotRadiusPX;
out float outColor;

void main() {
    float t = clamp((1.0 - length(fragUV)) * fragDotRadiusPX, 0.0, 1.0);
    outColor = t;
}
`;var ct=`#version 300 es

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
`,ft=`#version 300 es
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
`;var lt=`#version 300 es

uniform vec3 uOutputColor;
in vec2 inPosition;

out vec2 fragUV;
out vec3 fragOutputColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragOutputColor = uOutputColor;
}
`,ht=`#version 300 es
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
`;var pt=.75,Ie=900;function Vt(t,s,o,r,a){t.wasPlaying&&!o&&(t.pauseStartedAt=s,t.pauseSpeed=a);let f=Math.min(s-t.pauseStartedAt,Ie)/Ie,d=t.pauseSpeed*(Ie/1e3)*f*(1-f/2);return o&&(t.offset+=d,t.pauseSpeed=0),t.wasPlaying=o,r+t.offset+(o?0:d)}function Me(t){let s=fe(te),o=t.trackData.audioAnalysis,r=le(()=>{if(!o)return[{x:0,y:0}];let e=o.segments,u=e.flatMap(n=>n.loudness_max_time?[{x:n.start,y:H(n.loudness_start)},{x:n.start+n.loudness_max_time,y:H(n.loudness_max)}]:[{x:n.start,y:H(n.loudness_start)}]);if(e.length){u[0].accumulatedIntegral=0;for(let l=1;l<u.length;l++){let h=u[l-1],p=u[l];p.accumulatedIntegral=(h.accumulatedIntegral??0)+he(h,p)}let n=e[e.length-1];u.push({x:n.start+n.duration,y:H(n.loudness_end)})}return u},[o]),a=o.meta?.timestamp??0,f=N(e=>{if(!e)return s("Error: WebGL2 is not supported"),{isError:!0};if(!e.getExtension("EXT_color_buffer_float"))return s("Error: Rendering to floating-point textures is not supported"),{isError:!0};let u=(ne,oe,ie)=>{let W=e.createShader(ne);if(e.shaderSource(W,oe),e.compileShader(W),!e.getShaderParameter(W,e.COMPILE_STATUS)&&!e.isContextLost()){let ve=`Error: Failed to compile '${ie}' shader`,Le=e.getShaderInfoLog(W);return console.error(`[Visualizer] ${ve}`,Le),s(ve),null}return W},n=(ne,oe,ie)=>{let W=e.createProgram();if(e.attachShader(W,ne),e.attachShader(W,oe),e.linkProgram(W),e.deleteShader(ne),e.deleteShader(oe),!e.getProgramParameter(W,e.LINK_STATUS)&&!e.isContextLost()){let ve=`Error: Failed to link '${ie}' shader`,Le=e.getProgramInfoLog(W);return console.error(`[Visualizer] ${ve}`,Le),s(ve),null}return W},l=ne=>{let oe=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,oe);let ie=e.createTexture();return e.bindTexture(e.TEXTURE_2D,ie),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,ne),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,ne),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie,0),{framebuffer:oe,texture:ie}},h=u(e.VERTEX_SHADER,it,"particle vertex");if(!h)return{isError:!0};let p=u(e.FRAGMENT_SHADER,st,"particle fragment");if(!p)return{isError:!0};let v=n(h,p,"particle");if(!v)return{isError:!0};let m=e.getAttribLocation(v,"inPosition"),x=e.getUniformLocation(v,"uNoiseOffset"),S=e.getUniformLocation(v,"uAmplitude"),E=e.getUniformLocation(v,"uSeed"),z=e.getUniformLocation(v,"uDotSpacing"),D=e.getUniformLocation(v,"uDotOffset"),T=e.getUniformLocation(v,"uSphereRadius"),R=e.getUniformLocation(v,"uFeather"),C=e.getUniformLocation(v,"uNoiseFrequency"),k=e.getUniformLocation(v,"uNoiseAmplitude"),P=u(e.VERTEX_SHADER,at,"dot vertex");if(!P)return{isError:!0};let b=u(e.FRAGMENT_SHADER,ut,"dot fragment");if(!b)return{isError:!0};let F=n(P,b,"dot");if(!F)return{isError:!0};let I=e.getAttribLocation(F,"inPosition"),M=e.getUniformLocation(F,"uDotCount"),$=e.getUniformLocation(F,"uDotRadius"),_=e.getUniformLocation(F,"uDotRadiusPX"),B=e.getUniformLocation(F,"uParticleTexture"),Z=u(e.VERTEX_SHADER,ct,"blur vertex");if(!Z)return{isError:!0};let g=u(e.FRAGMENT_SHADER,ft,"blur fragment");if(!g)return{isError:!0};let L=n(Z,g,"blur");if(!L)return{isError:!0};let ue=e.getAttribLocation(L,"inPosition"),Q=e.getUniformLocation(L,"uBlurRadius"),J=e.getUniformLocation(L,"uBlurDirection"),ge=e.getUniformLocation(L,"uInputTexture"),ee=u(e.VERTEX_SHADER,lt,"finalize vertex");if(!ee)return{isError:!0};let ce=u(e.FRAGMENT_SHADER,ht,"finalize fragment");if(!ce)return{isError:!0};let K=n(ee,ce,"finalize");if(!K)return{isError:!0};let xe=e.getAttribLocation(K,"inPosition"),be=e.getUniformLocation(K,"uOutputColor"),De=e.getUniformLocation(K,"uBlurredTexture"),Se=e.getUniformLocation(K,"uOriginalTexture"),{framebuffer:Te,texture:Ee}=l(e.NEAREST),{framebuffer:xt,texture:bt}=l(e.NEAREST),{framebuffer:St,texture:Tt}=l(e.LINEAR),{framebuffer:Et,texture:Ct}=l(e.NEAREST),_e=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,_e),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.enable(e.BLEND),e.blendEquation(e.MAX),{isError:!1,particleShader:v,dotShader:F,blurShader:L,finalizeShader:K,viewportSize:0,particleTextureSize:0,motion:{wasPlaying:!1,pauseStartedAt:0,pauseSpeed:0,offset:0},inPositionLoc:m,inPositionLocDot:I,inPositionLocBlur:ue,inPositionLocFinalize:xe,uNoiseOffsetLoc:x,uAmplitudeLoc:S,uSeedLoc:E,uDotSpacingLoc:z,uDotOffsetLoc:D,uSphereRadiusLoc:T,uFeatherLoc:R,uNoiseFrequencyLoc:C,uNoiseAmplitudeLoc:k,uDotCountLoc:M,uDotRadiusLoc:$,uDotRadiusPXLoc:_,uParticleTextureLoc:B,uBlurRadiusLoc:Q,uBlurDirectionLoc:J,uBlurInputTextureLoc:ge,uOutputColorLoc:be,uBlurredTextureLoc:De,uOriginalTextureLoc:Se,quadBuffer:_e,particleFramebuffer:Te,particleTexture:Ee,dotFramebuffer:xt,dotTexture:bt,blurXFramebuffer:St,blurXTexture:Tt,blurYFramebuffer:Et,blurYTexture:Ct}},[]),d=N((e,u)=>{!e||u.isError||(e.deleteBuffer(u.quadBuffer),[u.particleTexture,u.dotTexture,u.blurXTexture,u.blurYTexture].forEach(n=>e.deleteTexture(n)),[u.particleFramebuffer,u.dotFramebuffer,u.blurXFramebuffer,u.blurYFramebuffer].forEach(n=>e.deleteFramebuffer(n)),[u.particleShader,u.dotShader,u.blurShader,u.finalizeShader].forEach(n=>e.deleteProgram(n)))},[]),c=N((e,u)=>{u.isError||!e||(u.viewportSize=Math.min(e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindTexture(e.TEXTURE_2D,u.dotTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurXTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurYTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null))},[]),i=N((e,u,n,l)=>{if(n.isError||!e)return;let h=G.getProgress(),p=$e(u.amplitudeCurve,h,.15),v=pt*(.5*h+Ze(u.amplitudeCurve,h)),m=Vt(n.motion,l,SpotiKit.Player.isPlaying,v,pt*(.5+p)),x=u.seed,S=322,E=.9/S,z=E*.5*n.viewportSize,D=.9,T=-.9/2,R=A(p,0,1,.75*.9,.9),C=Math.pow(p+3,2)*(45/1568),k=4,P=.32*.9;n.particleTextureSize!==S&&(n.particleTextureSize=S,e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,S,S,0,e.RG,e.FLOAT,null)),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.particleFramebuffer),e.viewport(0,0,S,S),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.particleShader),e.uniform1f(n.uNoiseOffsetLoc,m),e.uniform1f(n.uAmplitudeLoc,p),e.uniform1i(n.uSeedLoc,x),e.uniform1f(n.uDotSpacingLoc,D),e.uniform1f(n.uDotOffsetLoc,T),e.uniform1f(n.uSphereRadiusLoc,R),e.uniform1f(n.uFeatherLoc,C),e.uniform1f(n.uNoiseFrequencyLoc,k),e.uniform1f(n.uNoiseAmplitudeLoc,P),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLoc),e.vertexAttribPointer(n.inPositionLoc,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.dotFramebuffer),e.viewport(0,0,n.viewportSize,n.viewportSize),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.dotShader),e.uniform1i(n.uDotCountLoc,S),e.uniform1f(n.uDotRadiusLoc,E),e.uniform1f(n.uDotRadiusPXLoc,z),e.uniform1i(n.uParticleTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocDot),e.vertexAttribPointer(n.inPositionLocDot,2,e.FLOAT,!1,0,0),e.drawArraysInstanced(e.TRIANGLE_FAN,0,4,S*S),e.bindFramebuffer(e.FRAMEBUFFER,n.blurXFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.blurShader),e.uniform1f(n.uBlurRadiusLoc,.01*n.viewportSize),e.uniform2f(n.uBlurDirectionLoc,1/n.viewportSize,0),e.uniform1i(n.uBlurInputTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocBlur),e.vertexAttribPointer(n.inPositionLocBlur,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,n.blurYFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.uBlurDirectionLoc,0,1/n.viewportSize),e.bindTexture(e.TEXTURE_2D,n.blurXTexture),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.finalizeShader),e.uniform3f(n.uOutputColorLoc,(u.themeColor>>16&255)/255,(u.themeColor>>8&255)/255,(u.themeColor&255)/255),e.uniform1i(n.uBlurredTextureLoc,0),e.uniform1i(n.uOriginalTextureLoc,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.blurYTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocFinalize),e.vertexAttribPointer(n.inPositionLocFinalize,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},[]);return y.createElement(se,{isEnabled:t.isEnabled,data:{themeColor:parseInt(t.trackData.color.slice(1),16),seed:a,amplitudeCurve:r},contextType:"webgl2",onInit:f,onDispose:d,onResize:c,onRender:i,style:{width:"100%",height:"100%",objectFit:"contain"},sizeConstraint:(e,u)=>{let n=Math.min(e,u);return{width:n,height:n}}})}function Be(t){let s=fe(te),o=t.trackData.audioAnalysis,r=le(()=>{if(!o)return[];let c=o.segments,i=Re(o)??[[]],e=.4,u=.2,n=.4,l=e/Math.sqrt(2)*8,h=12*i.length,p=[];for(let m=0;m<c.length;m++){let x=c[m],S=H(x.loudness_start),E=H(x.loudness_max),z=x.start+x.loudness_max_time,D=x.pitches,T=z-l,R=z+l,C=i.map(b=>{let F=U(b,M=>M,T),I=U(b,M=>M,R);return b.slice(F,I).map(M=>Math.exp(-Math.pow((M-z)/e,2))).reduce((M,$)=>M+$,0)+u}),k=Math.max(...C);for(let b=0;b<C.length;b++)C[b]/=k;let P=Array(h);for(let b=0;b<C.length;b++){let F=C.length===1?1:A(b,0,C.length-1,.2,.6);for(let I=0;I<12;I++){let M=we([...C.entries()],B=>B[0],B=>B[1],Ye,b+I/12),$=D.reduce((B,Z)=>B+Z,0)/D.length,_=D[I]*F+$*(1-F);P[12*b+I]=M*_}}if(p.push([x.start,...P.map(b=>b*S)]),p.push([z,...P.map(b=>b*E)]),m==c.length-1){let b=H(x.loudness_end);p.push([x.start+x.duration,...P.map(F=>F*b)])}}let v=Array(h).fill(0).map(m=>Array(p.length));for(let m=0;m<h;m++){let x=0,S={x:0,y:0},E={x:0,y:0};for(let z=0;z<p.length;z++){let D={x:p[z][0],y:p[z][m+1]},T=D.x+D.y/n,R=E.x+E.y/n;if(T>R){if(E.x!==S.x){let C=(D.y-S.y)/(D.x-S.x),k=S.y-C*S.x,P=-n,F=(E.y-P*E.x-k)/(C-P),I=C*F+k;v[m][x]={x:F,y:I},x++}E=D,v[m][x]=D,x++}S=D}v[m].length=x}return v},[o]),a=N(c=>c?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),f=N((c,i)=>{i.isError},[]),d=N((c,i,e)=>{if(e.isError||!c)return;let u=G.getProgress();c.clearRect(0,0,c.canvas.width,c.canvas.height),c.fillStyle=i.themeColor;let n=i.spectrumData.length;if(!n)return;let l=c.canvas.width/n*.7,h=(c.canvas.width-l*n)/(n+1);for(let p=0;p<n;p++){let v=i.spectrumData[p];if(!v.length)continue;let m=we(v,x=>x.x,x=>x.y,x=>x,Math.max(u,v[0].x));c.fillRect(h*(p+1)+l*p,c.canvas.height-m*c.canvas.height,l,m*c.canvas.height)}},[]);return y.createElement(se,{isEnabled:t.isEnabled,data:{themeColor:t.trackData.color,spectrumData:r},contextType:"2d",onInit:a,onResize:f,onRender:d,style:{width:"100%",height:"100%"}})}var Ae="#535353",Ne={ncs:{name:"NCS",renderer:Me},spectrum:{name:"Spectrum",renderer:Be},debug:{name:"Debug",renderer:ke}};async function dt(t){let s=t.images?.[0]?.url??t.album?.images?.[0]?.url,[o,r]=await Promise.all([SpotiKit.Audio.analysis(t.uri),Promise.resolve().then(()=>SpotiKit.Colors.extract(s??t.uri)).catch(()=>{})]);if(!o?.track||!o.segments?.length)throw new Error("Spotify returned no audio segments.");let a=[r?.light,r?.raw].find(f=>f&&/^#[0-9a-f]{6}$/i.test(f));return{audioAnalysis:o,color:a??Ae}}var mt="spotikit-visualizer.sphere-color",yt="spotikit-visualizer.use-cover-color",Ge=new EventTarget,Oe={customColor:null,useCoverColor:!0};try{let t=localStorage.getItem(mt),s=t&&/^#[0-9a-f]{6}$/i.test(t)?t:null,o=localStorage.getItem(yt);Oe={customColor:s,useCoverColor:o===null?s===null:o!=="false"}}catch{}function Xt(t){return Ge.addEventListener("change",t),()=>Ge.removeEventListener("change",t)}function Ht(){return Oe}function vt(t){Oe=t;try{localStorage.setItem(yt,String(t.useCoverColor)),t.customColor!==null&&localStorage.setItem(mt,t.customColor)}catch{}Ge.dispatchEvent(new Event("change"))}function qt(){try{let t=localStorage.getItem("spotikit-visualizer.renderer");if(t==="ncs"||t==="spectrum"||t==="debug")return t}catch{}return"ncs"}function gt({popup:t=!1,initialMode:s}){let[o,r]=O(()=>s??qt()),{customColor:a,useCoverColor:f}=y.useSyncExternalStore(Xt,Ht),[d,c]=O(()=>SpotiKit.Player.track),[i,e]=O(),[u,n]=O(0),[l,h]=O(),[p,v]=O(G.correctLatency),[m,x]=O(null),S=Ce(null),E=m?.ownerDocument,z=He(E)===m&&m!==null,D=qe(E),T=d?.uri??"",R=T.startsWith("spotify:track:"),C=i?.uri===T?i:void 0,k=Ne[o].renderer,P=C?.data,b=a??P?.color??Ae,F=P&&o==="ncs"&&!f?{...P,color:b}:P;X(()=>{let g=()=>c(SpotiKit.Player.track),L=SpotiKit.Player.on("track",g);return g(),L},[]),X(()=>{if(!d||!R)return;let g=!0;return e(void 0),dt(d).then(L=>{g&&e({uri:T,data:L})},L=>{console.warn("[Visualizer] Audio analysis unavailable",L),g&&e({uri:T,error:"\u0410\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u043A\u0430."})}),()=>{g=!1}},[T,R,u]),X(()=>(G.addReference(),()=>G.removeReference()),[]);function I(g){if(r(g),h(void 0),!t)try{localStorage.setItem("spotikit-visualizer.renderer",g)}catch{}}function M(){e(void 0),n(g=>g+1)}async function $(){if(!(!m||!E))try{z?await E.exitFullscreen():await m.requestFullscreen(),S.current&&(S.current.open=!1)}catch{SpotiKit.notify("Could not switch fullscreen mode.")}}async function _(){let g=null;try{if(g=window.open("","","popup,width=960,height=540"),!g){let Q=window.documentPictureInPicture;Q&&(g=await Q.requestWindow({width:960,height:540}))}if(!g)throw new Error("Popup unavailable");g.document.title="Visualizer",g.document.body.style.margin="0";let L=g.document.body.appendChild(g.document.createElement("div")),ue=SpotiKit.ReactDOM.createRoot(L);g.addEventListener("pagehide",()=>ue.unmount(),{once:!0}),ue.render(y.createElement(gt,{popup:!0,initialMode:o}))}catch(L){g?.close(),console.warn("[Visualizer] Could not open a window",L),SpotiKit.notify("Spotify could not open a separate window.")}}let B=T?R?C?.error??l:"\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u043A\u043E\u0432.":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0442\u0440\u0435\u043A, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440.",Z=R&&!C;return y.createElement("div",{className:`spotikit-visualizer${t?" spotikit-visualizer--popup":""}${z&&!D?" spotikit-visualizer--idle":""}`,ref:x,onPointerDown:()=>G.resume(),onKeyDown:g=>{G.resume(),g.key==="Escape"&&S.current?.open&&(S.current.open=!1)}},y.createElement("style",null,Xe),F&&!l&&y.createElement(te.Provider,{value:h},y.createElement(k,{key:`${T}:${o}`,isEnabled:!0,trackData:F})),Z&&y.createElement("div",{className:"spotikit-visualizer-status",role:"status","aria-label":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0430\u0443\u0434\u0438\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0430"},y.createElement(ze,null)),!Z&&B&&y.createElement("div",{className:"spotikit-visualizer-status",role:"status"},y.createElement("p",null,B),C?.error&&y.createElement("button",{type:"button",onClick:M},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C")),y.createElement("details",{className:"spotikit-visualizer-controls",ref:S},y.createElement("summary",{"aria-label":"Visualizer settings",title:"Visualizer settings"},y.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},y.createElement("circle",{cx:"5",cy:"12",r:"1.8"}),y.createElement("circle",{cx:"12",cy:"12",r:"1.8"}),y.createElement("circle",{cx:"19",cy:"12",r:"1.8"}))),y.createElement("div",{className:"spotikit-visualizer-settings"},y.createElement("label",null,"Mode",y.createElement("select",{value:o,onChange:g=>I(g.currentTarget.value)},Object.entries(Ne).map(([g,L])=>y.createElement("option",{key:g,value:g},L.name)))),o==="ncs"&&y.createElement(y.Fragment,null,y.createElement("label",null,"Use cover art color",y.createElement("input",{type:"checkbox",checked:f,onChange:g=>{let L=g.currentTarget.checked;vt({customColor:L?a:b,useCoverColor:L})}})),y.createElement("label",null,"Sphere color",y.createElement("input",{type:"color",value:b,disabled:f,onChange:g=>vt({customColor:g.currentTarget.value,useCoverColor:!1})}))),y.createElement("label",null,y.createElement("input",{type:"checkbox",checked:p,onChange:g=>{let L=g.currentTarget.checked;v(L),G.setCorrectLatency(L)}}),"Compensate for audio latency"),y.createElement("button",{type:"button",onClick:$},z?"Exit fullscreen":"Enter fullscreen"),!t&&y.createElement("button",{type:"button",onClick:_},"Open in a separate window"))))}export{gt as default};
