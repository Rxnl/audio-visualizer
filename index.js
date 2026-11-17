/*! SpotiKit port by rxnl. Based on Spicetify Visualizer by Konsl (MIT). Tested with Spotify 1.3.9.2055. */
var We=SpotiKit.React,y=We,{createContext:Ve,useCallback:M,useContext:he,useEffect:$,useMemo:pe,useRef:Re,useState:W}=We;var Xe=`.spotikit-app:has(> .spotikit-visualizer) {\r
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
.spotikit-visualizer-fallback {\r
	position: absolute;\r
	top: 16px;\r
	inset-inline: 60px;\r
	display: flex;\r
	flex-wrap: wrap;\r
	align-items: center;\r
	justify-content: center;\r
	gap: 8px;\r
	text-align: center;\r
	font-size: 13px;\r
	text-shadow: 0 1px 4px #000;\r
}\r
.spotikit-visualizer-status button + button {\r
	margin-inline-start: 8px;\r
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
.spotikit-visualizer button.spotikit-visualizer-retry {\r
	border: 0;\r
	border-radius: 0;\r
	padding: 0;\r
	background: transparent;\r
	text-decoration: underline;\r
	text-underline-offset: 0.18em;\r
}\r
.spotikit-visualizer-retry:focus-visible {\r
	outline: 2px solid currentColor;\r
	outline-offset: 3px;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle:not(:has(details[open], :focus-visible)) {\r
	cursor: none;\r
}\r
.spotikit-visualizer:fullscreen.spotikit-visualizer--idle details:not([open], :hover, :focus-within) {\r
	opacity: 0;\r
}\r
`;function Fe(){return y.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},y.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},y.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),y.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})),y.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},y.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}),y.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"})))}function ue(t){let{contextType:s,onInit:i,onDispose:r,onResize:a,onRender:f,style:v,data:c,isEnabled:o}=t,e=Re(null),[u,n]=W(null),l=M((p,d)=>{let m=Math.round(p.clientWidth*d.devicePixelRatio),h=Math.round(p.clientHeight*d.devicePixelRatio),{width:g,height:w}=t.sizeConstraint?.(m,h)??{width:m,height:h};p.width===g&&p.height===w||(p.width=g,p.height=w)},[]);return $(()=>{if(!i)return;let p=e.current;if(!p)return;let d=p.ownerDocument.defaultView;if(!d)return;let m=p.getContext(s),h=i(m);return l(p,d),a(m,h),n(h),()=>r?.(m,h)},[s,i,r]),$(()=>{if(!o||!u||!f)return;let p=e.current;if(!p)return;let d=p.ownerDocument.defaultView;if(!d)return;let m=p.getContext(s),h=0,g=w=>{u&&(f(m,c,u,w),h=d.requestAnimationFrame(g))};return h=d.requestAnimationFrame(g),()=>{h&&d.cancelAnimationFrame(h)}},[s,f,c,u,o]),$(()=>{if(!e.current)return;let p=e.current.ownerDocument.defaultView;if(!p)return;let d=new p.ResizeObserver(()=>{let m=e.current;if(!m)return;let h=m.ownerDocument.defaultView;if(!h)return;l(m,h);let g=m.getContext(s);g&&u&&a(g,u)});return d.observe(e.current),()=>d.disconnect()},[s,a,u]),y.createElement("canvas",{ref:e,style:{...v||{},...o?{}:{visibility:"hidden"}}})}function F(t,s,i){let r=0,a=t.length;for(;a-r>1;){let f=Math.floor((a+r)/2);s(t[f],f)<=i?r=f:a=f}return r}function Z(t){return Math.min(Math.max(Math.pow(10,t/20),0),1)}function He(t){return t*t*(3-2*t)}function A(t,s,i,r,a){return t=(t-s)/(i-s),t=t*(a-r)+r,t}function Rt(t,s,i,r,a,f){return t=(t-s)/(i-s),t=r(t),t=t*(f-a)+a,t}function ce(t,s){return-.5*(t.x-s.x)*(t.y+s.y)}function Ae(t,s,i,r,a){let f=F(t,s,a),v=t[f];if(f>t.length-2)return i(v,f);let c=t[f+1];return Rt(a,s(v,f),s(c,f+1),r,i(v,f),i(c,f+1))}function qe(t,s,i){if(i==0)return Ae(t,o=>o.x,o=>o.y,o=>o,s);let r=s-i/2,a=s+i/2,f=F(t,o=>o.x,r),v=F(t,o=>o.x,a),c=0;if(f==v){let o=t[f];if(f>t.length-2)return o.y;let e=t[f+1],u=A(r,o.x,e.x,o.y,e.y),n=A(a,o.x,e.x,o.y,e.y);return(u+n)/2}else{let o=t[f],e=t[f+1],u={x:r,y:A(r,o.x,e.x,o.y,e.y)};c=ce(u,e);for(let n=f+1;n<v;n++)o=e,e=t[n+1],c+=ce(o,e);o=e,v>t.length-2?c+=o.y*(a-o.x):(e=t[v+1],u={x:a,y:A(a,o.x,e.x,o.y,e.y)},c+=ce(o,u))}return c/i}function Ye(t,s){let i=F(t,v=>v.x,s),r=t[i];if(i+1>=t.length)return(r.accumulatedIntegral??0)+r.y*(s-r.x);let a=t[i+1],f={x:s,y:A(s,r.x,a.x,r.y,a.y)};return(r.accumulatedIntegral??0)+ce(r,f)}var $e=`#version 300 es

in vec2 inPosition;
out vec2 fragUV;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
}
`,Ze=`#version 300 es
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
`;var Ke=`#version 300 es

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
`,je=`#version 300 es
precision highp float;

in vec2 fragUV;
in float fragDotRadiusPX;
out float outColor;

void main() {
    float t = clamp((1.0 - length(fragUV)) * fragDotRadiusPX, 0.0, 1.0);
    outColor = t;
}
`;var Qe=`#version 300 es

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
`,Je=`#version 300 es
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
`;var et=`#version 300 es

uniform vec3 uOutputColor;
in vec2 inPosition;

out vec2 fragUV;
out vec3 fragOutputColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragOutputColor = uOutputColor;
}
`,tt=`#version 300 es
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
`;var ee=Ve(()=>{});var N=class{static{this.correctLatency=!0}static{this.references=0}static addReference(){this.references++,this.resume()}static removeReference(){if(this.references--,this.references===0){let s=this.context;this.context=void 0,s?.close().catch(()=>{})}}static setCorrectLatency(s){this.correctLatency=s,s?this.resume():this.context?.suspend().catch(()=>{})}static resume(){if(!(!this.correctLatency||!this.references||typeof AudioContext!="function"))try{this.context??=new AudioContext,this.context.state!=="running"&&this.context.resume().catch(()=>{})}catch{}}static getProgress(){let s=this.correctLatency&&this.context?.outputLatency||0;return Math.max(0,SpotiKit.Player.position/1e3-s)}};var rt=.75,ke=900,At=180;function Dt(t,s,i,r){if(!i&&t.wasPlaying!==void 0){if(t.wasPlaying&&(t.pause={time:s,phase:t.phase,speed:rt*(.5+t.amplitude)}),t.pause){let c=Math.min(s-t.pause.time,ke)/ke,o=t.pause.speed*(ke/1e3)*c*(1-c/2);t.phase=t.pause.phase+o}t.wasPlaying=!1;return}let a=N.getProgress(),f=qe(r,a,.15),v=rt*(.5*a+Ye(r,a));if(t.wasPlaying===!1&&i){t.offset=t.phase-v,t.resume={time:s,amplitude:t.amplitude},t.pause=void 0,t.wasPlaying=!0;return}if(t.resume){let c=Math.min((s-t.resume.time)/At,1);t.amplitude=t.resume.amplitude+(f-t.resume.amplitude)*c,c===1&&(t.resume=void 0)}else t.amplitude=f;t.phase=v+t.offset,t.wasPlaying=i}function ye(t){let s=he(ee),i=t.trackData.audioAnalysis,r=pe(()=>{if(!i)return[{x:0,y:0}];let e=i.segments,u=e.flatMap(n=>n.loudness_max_time?[{x:n.start,y:Z(n.loudness_start)},{x:n.start+n.loudness_max_time,y:Z(n.loudness_max)}]:[{x:n.start,y:Z(n.loudness_start)}]);if(e.length){u[0].accumulatedIntegral=0;for(let d=1;d<u.length;d++){let m=u[d-1],h=u[d];h.accumulatedIntegral=(m.accumulatedIntegral??0)+ce(m,h)}let n=e[e.length-1],l={x:n.start+n.duration,y:Z(n.loudness_end)},p=u[u.length-1];u.push({...l,accumulatedIntegral:(p.accumulatedIntegral??0)+ce(p,l)})}return u},[i]),a=i?.meta?.timestamp??0,f=M(e=>{if(!e)return s("Error: WebGL2 is not supported"),{isError:!0};if(!e.getExtension("EXT_color_buffer_float"))return s("Error: Rendering to floating-point textures is not supported"),{isError:!0};let u=(oe,se,ae)=>{let V=e.createShader(oe);if(e.shaderSource(V,se),e.compileShader(V),!e.getShaderParameter(V,e.COMPILE_STATUS)&&!e.isContextLost()){let me=`Error: Failed to compile '${ae}' shader`,ze=e.getShaderInfoLog(V);return console.error(`[Visualizer] ${me}`,ze),s(me),null}return V},n=(oe,se,ae)=>{let V=e.createProgram();if(e.attachShader(V,oe),e.attachShader(V,se),e.linkProgram(V),e.deleteShader(oe),e.deleteShader(se),!e.getProgramParameter(V,e.LINK_STATUS)&&!e.isContextLost()){let me=`Error: Failed to link '${ae}' shader`,ze=e.getProgramInfoLog(V);return console.error(`[Visualizer] ${me}`,ze),s(me),null}return V},l=oe=>{let se=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,se);let ae=e.createTexture();return e.bindTexture(e.TEXTURE_2D,ae),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,oe),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,oe),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0),{framebuffer:se,texture:ae}},p=u(e.VERTEX_SHADER,$e,"particle vertex");if(!p)return{isError:!0};let d=u(e.FRAGMENT_SHADER,Ze,"particle fragment");if(!d)return{isError:!0};let m=n(p,d,"particle");if(!m)return{isError:!0};let h=e.getAttribLocation(m,"inPosition"),g=e.getUniformLocation(m,"uNoiseOffset"),w=e.getUniformLocation(m,"uAmplitude"),E=e.getUniformLocation(m,"uSeed"),L=e.getUniformLocation(m,"uDotSpacing"),D=e.getUniformLocation(m,"uDotOffset"),b=e.getUniformLocation(m,"uSphereRadius"),T=e.getUniformLocation(m,"uFeather"),R=e.getUniformLocation(m,"uNoiseFrequency"),B=e.getUniformLocation(m,"uNoiseAmplitude"),P=u(e.VERTEX_SHADER,Ke,"dot vertex");if(!P)return{isError:!0};let x=u(e.FRAGMENT_SHADER,je,"dot fragment");if(!x)return{isError:!0};let z=n(P,x,"dot");if(!z)return{isError:!0};let U=e.getAttribLocation(z,"inPosition"),I=e.getUniformLocation(z,"uDotCount"),H=e.getUniformLocation(z,"uDotRadius"),_=e.getUniformLocation(z,"uDotRadiusPX"),G=e.getUniformLocation(z,"uParticleTexture"),J=u(e.VERTEX_SHADER,Qe,"blur vertex");if(!J)return{isError:!0};let O=u(e.FRAGMENT_SHADER,Je,"blur fragment");if(!O)return{isError:!0};let q=n(J,O,"blur");if(!q)return{isError:!0};let S=e.getAttribLocation(q,"inPosition"),k=e.getUniformLocation(q,"uBlurRadius"),Y=e.getUniformLocation(q,"uBlurDirection"),ie=e.getUniformLocation(q,"uInputTexture"),re=u(e.VERTEX_SHADER,et,"finalize vertex");if(!re)return{isError:!0};let le=u(e.FRAGMENT_SHADER,tt,"finalize fragment");if(!le)return{isError:!0};let Q=n(re,le,"finalize");if(!Q)return{isError:!0};let Se=e.getAttribLocation(Q,"inPosition"),Ee=e.getUniformLocation(Q,"uOutputColor"),Le=e.getUniformLocation(Q,"uBlurredTexture"),Te=e.getUniformLocation(Q,"uOriginalTexture"),{framebuffer:Ce,texture:we}=l(e.NEAREST),{framebuffer:xt,texture:bt}=l(e.NEAREST),{framebuffer:St,texture:Et}=l(e.LINEAR),{framebuffer:Tt,texture:Ct}=l(e.NEAREST),_e=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,_e),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.enable(e.BLEND),e.blendEquation(e.MAX),{isError:!1,particleShader:m,dotShader:z,blurShader:q,finalizeShader:Q,viewportSize:0,particleTextureSize:0,motion:{amplitude:0,phase:0,offset:0},inPositionLoc:h,inPositionLocDot:U,inPositionLocBlur:S,inPositionLocFinalize:Se,uNoiseOffsetLoc:g,uAmplitudeLoc:w,uSeedLoc:E,uDotSpacingLoc:L,uDotOffsetLoc:D,uSphereRadiusLoc:b,uFeatherLoc:T,uNoiseFrequencyLoc:R,uNoiseAmplitudeLoc:B,uDotCountLoc:I,uDotRadiusLoc:H,uDotRadiusPXLoc:_,uParticleTextureLoc:G,uBlurRadiusLoc:k,uBlurDirectionLoc:Y,uBlurInputTextureLoc:ie,uOutputColorLoc:Ee,uBlurredTextureLoc:Le,uOriginalTextureLoc:Te,quadBuffer:_e,particleFramebuffer:Ce,particleTexture:we,dotFramebuffer:xt,dotTexture:bt,blurXFramebuffer:St,blurXTexture:Et,blurYFramebuffer:Tt,blurYTexture:Ct}},[]),v=M((e,u)=>{!e||u.isError||(e.deleteBuffer(u.quadBuffer),[u.particleTexture,u.dotTexture,u.blurXTexture,u.blurYTexture].forEach(n=>e.deleteTexture(n)),[u.particleFramebuffer,u.dotFramebuffer,u.blurXFramebuffer,u.blurYFramebuffer].forEach(n=>e.deleteFramebuffer(n)),[u.particleShader,u.dotShader,u.blurShader,u.finalizeShader].forEach(n=>e.deleteProgram(n)))},[]),c=M((e,u)=>{u.isError||!e||(u.viewportSize=Math.min(e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindTexture(e.TEXTURE_2D,u.dotTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurXTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurYTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null))},[]),o=M((e,u,n,l)=>{if(n.isError||!e)return;Dt(n.motion,l,SpotiKit.Player.isPlaying,u.amplitudeCurve);let{amplitude:p,phase:d}=n.motion,m=u.seed,h=322,g=.9/h,w=g*.5*n.viewportSize,E=.9,L=-.9/2,D=A(p,0,1,.75*.9,.9),b=Math.pow(p+3,2)*(45/1568),T=4,R=.32*.9;n.particleTextureSize!==h&&(n.particleTextureSize=h,e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,h,h,0,e.RG,e.FLOAT,null)),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.particleFramebuffer),e.viewport(0,0,h,h),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.particleShader),e.uniform1f(n.uNoiseOffsetLoc,d),e.uniform1f(n.uAmplitudeLoc,p),e.uniform1i(n.uSeedLoc,m),e.uniform1f(n.uDotSpacingLoc,E),e.uniform1f(n.uDotOffsetLoc,L),e.uniform1f(n.uSphereRadiusLoc,D),e.uniform1f(n.uFeatherLoc,b),e.uniform1f(n.uNoiseFrequencyLoc,T),e.uniform1f(n.uNoiseAmplitudeLoc,R),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLoc),e.vertexAttribPointer(n.inPositionLoc,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.dotFramebuffer),e.viewport(0,0,n.viewportSize,n.viewportSize),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.dotShader),e.uniform1i(n.uDotCountLoc,h),e.uniform1f(n.uDotRadiusLoc,g),e.uniform1f(n.uDotRadiusPXLoc,w),e.uniform1i(n.uParticleTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocDot),e.vertexAttribPointer(n.inPositionLocDot,2,e.FLOAT,!1,0,0),e.drawArraysInstanced(e.TRIANGLE_FAN,0,4,h*h),e.bindFramebuffer(e.FRAMEBUFFER,n.blurXFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.blurShader),e.uniform1f(n.uBlurRadiusLoc,.01*n.viewportSize),e.uniform2f(n.uBlurDirectionLoc,1/n.viewportSize,0),e.uniform1i(n.uBlurInputTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocBlur),e.vertexAttribPointer(n.inPositionLocBlur,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,n.blurYFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.uBlurDirectionLoc,0,1/n.viewportSize),e.bindTexture(e.TEXTURE_2D,n.blurXTexture),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.finalizeShader),e.uniform3f(n.uOutputColorLoc,(u.themeColor>>16&255)/255,(u.themeColor>>8&255)/255,(u.themeColor&255)/255),e.uniform1i(n.uBlurredTextureLoc,0),e.uniform1i(n.uOriginalTextureLoc,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.blurYTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocFinalize),e.vertexAttribPointer(n.inPositionLocFinalize,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},[]);return y.createElement(ue,{isEnabled:t.isEnabled,data:{themeColor:parseInt(t.trackData.color.slice(1),16),seed:a,amplitudeCurve:r},contextType:"webgl2",onInit:f,onDispose:v,onResize:c,onRender:o,style:{width:"100%",height:"100%",objectFit:"contain"},sizeConstraint:(e,u)=>{let n=Math.min(e,u);return{width:n,height:n}}})}function nt(t){let[s,i]=W(t?.fullscreenElement??null);return $(()=>{if(!t)return;let r=()=>i(t.fullscreenElement);return r(),t.addEventListener("fullscreenchange",r),()=>t.removeEventListener("fullscreenchange",r)},[t]),s}function it(t,s=5e3){let[i,r]=W(!0);return $(()=>{if(!t)return;let a=i,f=o=>{a!==o&&(a=o,r(o))},v=0,c=()=>{f(!0),clearTimeout(v),v=setTimeout(()=>f(!1),s)};return c(),t.addEventListener("mousemove",c),()=>{clearTimeout(v),t.removeEventListener("mousemove",c)}},[t]),i}var X=Uint8Array,de=Uint16Array,Lt=Int32Array,ot=new X([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),st=new X([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zt=new X([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),at=function(t,s){for(var i=new de(31),r=0;r<31;++r)i[r]=s+=1<<t[r-1];for(var a=new Lt(i[30]),r=1;r<30;++r)for(var f=i[r];f<i[r+1];++f)a[f]=f-i[r]<<5|r;return{b:i,r:a}},ut=at(ot,2),ct=ut.b,Ft=ut.r;ct[28]=258,Ft[258]=28;var ft=at(st,0),kt=ft.b,br=ft.r,Ie=new de(32768);for(C=0;C<32768;++C)te=(C&43690)>>1|(C&21845)<<1,te=(te&52428)>>2|(te&13107)<<2,te=(te&61680)>>4|(te&3855)<<4,Ie[C]=((te&65280)>>8|(te&255)<<8)>>1;var te,C,ge=(function(t,s,i){for(var r=t.length,a=0,f=new de(s);a<r;++a)t[a]&&++f[t[a]-1];var v=new de(s);for(a=1;a<s;++a)v[a]=v[a-1]+f[a-1]<<1;var c;if(i){c=new de(1<<s);var o=15-s;for(a=0;a<r;++a)if(t[a])for(var e=a<<4|t[a],u=s-t[a],n=v[t[a]-1]++<<u,l=n|(1<<u)-1;n<=l;++n)c[Ie[n]>>o]=e}else for(c=new de(r),a=0;a<r;++a)t[a]&&(c[a]=Ie[v[t[a]-1]++]>>15-t[a]);return c}),xe=new X(288);for(C=0;C<144;++C)xe[C]=8;var C;for(C=144;C<256;++C)xe[C]=9;var C;for(C=256;C<280;++C)xe[C]=7;var C;for(C=280;C<288;++C)xe[C]=8;var C,lt=new X(32);for(C=0;C<32;++C)lt[C]=5;var C;var Pt=ge(xe,9,1);var Ut=ge(lt,5,1),Pe=function(t){for(var s=t[0],i=1;i<t.length;++i)t[i]>s&&(s=t[i]);return s},K=function(t,s,i){var r=s/8|0;return(t[r]|t[r+1]<<8)>>(s&7)&i},Ue=function(t,s){var i=s/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(s&7)},It=function(t){return(t+7)/8|0},Mt=function(t,s,i){return(s==null||s<0)&&(s=0),(i==null||i>t.length)&&(i=t.length),new X(t.subarray(s,i))};var Nt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],j=function(t,s,i){var r=new Error(s||Nt[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,j),!i)throw r;return r},Bt=function(t,s,i,r){var a=t.length,f=r?r.length:0;if(!a||s.f&&!s.l)return i||new X(0);var v=!i,c=v||s.i!=2,o=s.i;v&&(i=new X(a*3));var e=function(Te){var Ce=i.length;if(Te>Ce){var we=new X(Math.max(Ce*2,Te));we.set(i),i=we}},u=s.f||0,n=s.p||0,l=s.b||0,p=s.l,d=s.d,m=s.m,h=s.n,g=a*8;do{if(!p){u=K(t,n,1);var w=K(t,n+1,3);if(n+=3,w)if(w==1)p=Pt,d=Ut,m=9,h=5;else if(w==2){var b=K(t,n,31)+257,T=K(t,n+10,15)+4,R=b+K(t,n+5,31)+1;n+=14;for(var B=new X(R),P=new X(19),x=0;x<T;++x)P[zt[x]]=K(t,n+x*3,7);n+=T*3;for(var z=Pe(P),U=(1<<z)-1,I=ge(P,z,1),x=0;x<R;){var H=I[K(t,n,U)];n+=H&15;var E=H>>4;if(E<16)B[x++]=E;else{var _=0,G=0;for(E==16?(G=3+K(t,n,3),n+=2,_=B[x-1]):E==17?(G=3+K(t,n,7),n+=3):E==18&&(G=11+K(t,n,127),n+=7);G--;)B[x++]=_}}var J=B.subarray(0,b),O=B.subarray(b);m=Pe(J),h=Pe(O),p=ge(J,m,1),d=ge(O,h,1)}else j(1);else{var E=It(n)+4,L=t[E-4]|t[E-3]<<8,D=E+L;if(D>a){o&&j(0);break}c&&e(l+L),i.set(t.subarray(E,D),l),s.b=l+=L,s.p=n=D*8,s.f=u;continue}if(n>g){o&&j(0);break}}c&&e(l+131072);for(var q=(1<<m)-1,S=(1<<h)-1,k=n;;k=n){var _=p[Ue(t,n)&q],Y=_>>4;if(n+=_&15,n>g){o&&j(0);break}if(_||j(2),Y<256)i[l++]=Y;else if(Y==256){k=n,p=null;break}else{var ie=Y-254;if(Y>264){var x=Y-257,re=ot[x];ie=K(t,n,(1<<re)-1)+ct[x],n+=re}var le=d[Ue(t,n)&S],Q=le>>4;le||j(3),n+=le&15;var O=kt[Q];if(Q>3){var re=st[Q];O+=Ue(t,n)&(1<<re)-1,n+=re}if(n>g){o&&j(0);break}c&&e(l+131072);var Se=l+ie;if(l<O){var Ee=f-O,Le=Math.min(O,Se);for(Ee+l<0&&j(3);l<Le;++l)i[l]=r[Ee+l]}for(;l<Se;++l)i[l]=i[l-O]}}s.l=p,s.p=k,s.b=l,s.f=u,p&&(u=1,s.m=m,s.d=d,s.n=h)}while(!u);return l!=i.length&&v?Mt(i,0,l):i.subarray(0,l)};var Gt=new X(0);var Ot=function(t,s){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&j(6,"invalid zlib data"),(t[1]>>5&1)==+!s&&j(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function ht(t,s){return Bt(t.subarray(Ot(t,s&&s.dictionary),-4),{i:2},s&&s.out,s&&s.dictionary)}var _t=typeof TextDecoder<"u"&&new TextDecoder,Wt=0;try{_t.decode(Gt,{stream:!0}),Wt=1}catch{}function Vt(t){t=t.replace(/-/g,"+").replace(/_/g,"/");let s=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),i=ht(s),r=new TextDecoder().decode(i).split(" ").map(e=>parseInt(e)),a=[];if(r.length<3)return a;let f=r.shift(),c=r.shift()/f,o=r.shift();if(r.length<o)return a;for(let e=0;e<o;e++){let u=[],n=r.shift();if(r.length<n+(o-e-1))return a;for(let l=0;l<n;l++){let p=r.shift()*c;u.push(l==0?p:u[l-1]+p)}a.push(u)}return a}function De(t){let{rhythm_version:s,rhythmstring:i}=t.track;if(!(s!==1||!i))try{let r=Vt(i);if(r.length&&r.every(a=>a.every(Number.isFinite)))return r}catch{}}var pt=[1,2],fe=10,ne=20,ve=10,Xt=[{name:"Beats",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.beats?.length,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis.beats;if(!a)return;let f=F(a,c=>c.start,i.start),v=F(a,c=>c.start,i.end);t.lineWidth=1,t.strokeStyle="#FFFFFF33",t.beginPath();for(let c=f;c<=v;c++){let e=a[c].start,u=A(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Bars",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.bars?.length,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis.bars;if(!a)return;let f=F(a,c=>c.start,i.start),v=F(a,c=>c.start,i.end);t.lineWidth=3,t.strokeStyle="#FFFFFF66",t.beginPath();for(let c=f;c<=v;c++){let e=a[c].start,u=A(e,i.start,i.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Position",layer:"overlay",isSupported:t=>!0,render:(t,s,i,r)=>{t.lineWidth=5,t.strokeStyle=t.fillStyle="white",t.beginPath();let a=A(i.current,i.start,i.end,r.x,r.x+r.width);t.moveTo(a,r.y),t.lineTo(a,r.y+r.height),t.stroke();let f=10;t.beginPath(),t.moveTo(a-f,r.y),t.lineTo(a+f,r.y),t.lineTo(a,r.y+f),t.lineTo(a-f,r.y),t.moveTo(a-f,r.y+r.height),t.lineTo(a+f,r.y+r.height),t.lineTo(a,r.y+r.height-f),t.lineTo(a-f,r.y+r.height),t.fill()}},{name:"Loudness",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=F(a.segments,o=>o.start,i.start),v=F(a.segments,o=>o.start,i.end),c=o=>Z(o);t.lineWidth=2,t.strokeStyle="white",t.beginPath();for(let o=f;o<=v+1&&o<a.segments.length;o++){let e=a.segments[o],u=A(e.start,i.start,i.end,r.x,r.x+r.width),n=A(c(e.loudness_start),0,1,r.y+r.height,r.y),l=A(e.start+e.loudness_max_time,i.start,i.end,r.x,r.x+r.width),p=A(c(e.loudness_max),0,1,r.y+r.height,r.y);if(o===f?t.moveTo(u,n):t.lineTo(u,n),t.lineTo(l,p),o===a.segments.length-1){let d=A(e.start+e.duration,i.start,i.end,r.x,r.x+r.width),m=A(c(e.loudness_end),0,1,r.y+r.height,r.y);t.lineTo(d,m)}}t.stroke()}},{name:"Confidence",layer:"content",height:.25,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=F(a.segments,c=>c.start,i.start),v=F(a.segments,c=>c.start,i.end);t.beginPath();for(let c=f;c<=v;c++){let o=a.segments[c],e=A(o.start,i.start,i.end,r.x,r.x+r.width),u=A(o.start+o.duration,i.start,i.end,r.x,r.x+r.width);t.fillStyle=`rgba(255, 255, 255, ${o.confidence})`,t.fillRect(e,r.y,u-e,r.height)}t.fill()}},{name:"Timbre",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,v=F(a.segments,o=>o.start,i.start),c=F(a.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=(Math.sqrt(5)-1)/2,u=o*e;t.beginPath();for(let n=v;n<=c;n++){let l=a.segments[n],p=A(Math.tanh(.02*l.timbre[o]),-1,1,0,1),d=A(l.start,i.start,i.end,r.x,r.x+r.width),m=A(l.start+l.duration,i.start,i.end,r.x,r.x+r.width),h=r.y+o/12*r.height;t.fillStyle=`hsla(${u*360}, 100%, 70%, ${p})`,t.fillRect(d,h,m-d,f)}t.fill()}}},{name:"Pitches",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,i,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let f=r.height/12,v=F(a.segments,o=>o.start,i.start),c=F(a.segments,o=>o.start,i.end);for(let o=0;o<12;o++){let e=o/12;t.beginPath();for(let u=v;u<=c;u++){let n=a.segments[u],l=A(n.start,i.start,i.end,r.x,r.x+r.width),p=A(n.start+n.duration,i.start,i.end,r.x,r.x+r.width),d=r.y+o/12*r.height;t.fillStyle=`hsla(${e*360}, 100%, 70%, ${n.pitches[o]})`,t.fillRect(l,d,p-l,f)}t.fill()}}},{name:"Rhythm",layer:"content",height:.5,isSupported:t=>!!t.rhythm,render:(t,s,i,r)=>{let a=s.rhythm;if(!a)return;let f=r.height/a.length,v=Math.min(f,20),c=v/2/r.width*(i.end-i.start);t.fillStyle="white",t.beginPath();for(let o=a.length-1;o>=0;o--){let e=F(a[o],n=>n,i.start-c),u=F(a[o],n=>n,i.end+c);for(let n=e;n<=u;n++){let l=A(a[o][n],i.start,i.end,r.x,r.x+r.width),p=r.y+o*f;t.rect(l-v/2,p,v,f)}}t.fill()}}];function Me(t){let s=he(ee),[i,r,a]=pe(()=>{let o=t.trackData.audioAnalysis,e={trackData:t.trackData,rhythm:De(o)},u=Xt.filter(d=>d.isSupported(e)),n=o.bars??[],l=n.reduce((d,m)=>d+m.duration,0)/n.length,p=Number.isFinite(l)&&l>0?l:1;return[u,p,e]},[t.trackData]),f=M(o=>o?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),v=M((o,e)=>{e.isError},[]),c=M((o,e,u)=>{if(u.isError||!o)return;o.clearRect(0,0,o.canvas.width,o.canvas.height);let n=N.getProgress(),l=n-pt[0]*e.barDuration,p=n+pt[1]*e.barDuration,d={start:l,end:p,current:n},m=(b,T,R)=>{o.save(),o.font=`${ne}px sans-serif`,o.textAlign="center",o.fillStyle="white",o.rotate(Math.PI*3/2),o.fillText(b,-(T+R/2),ne,R),o.restore()},h=(b,T)=>{o.save(),o.beginPath(),o.rect(T.x,T.y,T.width,T.height),o.clip(),b.render(o,e.processedTrackData,d,T),o.restore()};for(let b of e.supportedSections)b.layer==="background"&&h(b,{x:ne+ve,y:0,width:o.canvas.width-ne-ve,height:o.canvas.height});let g=e.supportedSections.filter(b=>b.layer==="content"),w=o.canvas.height-fe*(g.length-1),E=g.reduce((b,T)=>b+T.height,0),L=0,D=0;for(let b of g){let T=A(L,0,E,0,w)+D*fe,R=A(L+b.height,0,E,0,w)+D*fe;L+=b.height,D++,h(b,{x:ne+ve,y:T,width:o.canvas.width-ne-ve,height:R-T}),m(b.name,T,R-T),D<g.length&&(o.lineWidth=1,o.strokeStyle="#AAAAAA",o.beginPath(),o.moveTo(fe/2,R+fe/2),o.lineTo(o.canvas.width-fe/2,R+fe/2),o.stroke())}for(let b of e.supportedSections)b.layer==="overlay"&&h(b,{x:ne+ve,y:0,width:o.canvas.width-ne-ve,height:o.canvas.height})},[]);return y.createElement(ue,{isEnabled:t.isEnabled,data:{barDuration:r,supportedSections:i,processedTrackData:a},contextType:"2d",onInit:f,onResize:v,onRender:c,style:{width:"100%",height:"100%"}})}function Ne(t){let s=he(ee),i=t.trackData.audioAnalysis,r=pe(()=>{if(!i)return[];let c=i.segments,o=De(i)??[[]],e=.4,u=.2,n=.4,l=e/Math.sqrt(2)*8,p=12*o.length,d=[];for(let h=0;h<c.length;h++){let g=c[h],w=Z(g.loudness_start),E=Z(g.loudness_max),L=g.start+g.loudness_max_time,D=g.pitches,b=L-l,T=L+l,R=o.map(x=>{let z=F(x,I=>I,b),U=F(x,I=>I,T);return x.slice(z,U).map(I=>Math.exp(-Math.pow((I-L)/e,2))).reduce((I,H)=>I+H,0)+u}),B=Math.max(...R);for(let x=0;x<R.length;x++)R[x]/=B;let P=Array(p);for(let x=0;x<R.length;x++){let z=R.length===1?1:A(x,0,R.length-1,.2,.6);for(let U=0;U<12;U++){let I=Ae([...R.entries()],G=>G[0],G=>G[1],He,x+U/12),H=D.reduce((G,J)=>G+J,0)/D.length,_=D[U]*z+H*(1-z);P[12*x+U]=I*_}}if(d.push([g.start,...P.map(x=>x*w)]),d.push([L,...P.map(x=>x*E)]),h==c.length-1){let x=Z(g.loudness_end);d.push([g.start+g.duration,...P.map(z=>z*x)])}}let m=Array(p).fill(0).map(h=>Array(d.length));for(let h=0;h<p;h++){let g=0,w={x:0,y:0},E={x:0,y:0};for(let L=0;L<d.length;L++){let D={x:d[L][0],y:d[L][h+1]},b=D.x+D.y/n,T=E.x+E.y/n;if(b>T){if(E.x!==w.x){let R=(D.y-w.y)/(D.x-w.x),B=w.y-R*w.x,P=-n,z=(E.y-P*E.x-B)/(R-P),U=R*z+B;m[h][g]={x:z,y:U},g++}E=D,m[h][g]=D,g++}w=D}m[h].length=g}return m},[i]),a=M(c=>c?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),f=M((c,o)=>{o.isError},[]),v=M((c,o,e)=>{if(e.isError||!c)return;let u=N.getProgress();c.clearRect(0,0,c.canvas.width,c.canvas.height),c.fillStyle=o.themeColor;let n=o.spectrumData.length;if(!n)return;let l=c.canvas.width/n*.7,p=(c.canvas.width-l*n)/(n+1);for(let d=0;d<n;d++){let m=o.spectrumData[d];if(!m.length)continue;let h=Ae(m,g=>g.x,g=>g.y,g=>g,Math.max(u,m[0].x));c.fillRect(p*(d+1)+l*d,c.canvas.height-h*c.canvas.height,l,h*c.canvas.height)}},[]);return y.createElement(ue,{isEnabled:t.isEnabled,data:{themeColor:t.trackData.color,spectrumData:r},contextType:"2d",onInit:a,onResize:f,onRender:v,style:{width:"100%",height:"100%"}})}var be="#535353",Be={ncs:{name:"NCS",renderer:ye},spectrum:{name:"Spectrum",renderer:Ne},debug:{name:"Debug",renderer:Me}};async function dt(t){let s=t.images?.[0]?.url??t.album?.images?.[0]?.url,[i,r]=await Promise.all([Promise.resolve().then(async()=>{let f=await SpotiKit.Audio.analysis(t.uri);if(!f?.track||!f.segments?.length)throw new Error("Spotify returned no audio segments.");return f}).catch(f=>{console.warn("[Visualizer] Audio analysis unavailable",f)}),Promise.resolve().then(()=>SpotiKit.Colors.extract(s??t.uri)).catch(()=>{})]),a=[r?.light,r?.raw].find(f=>f&&/^#[0-9a-f]{6}$/i.test(f));return{audioAnalysis:i,color:a??be}}var mt="spotikit-visualizer.sphere-color",yt="spotikit-visualizer.use-cover-color",Ge=new EventTarget,Oe={customColor:null,useCoverColor:!0};try{let t=localStorage.getItem(mt),s=t&&/^#[0-9a-f]{6}$/i.test(t)?t:null,i=localStorage.getItem(yt);Oe={customColor:s,useCoverColor:i===null?s===null:i!=="false"}}catch{}function Ht(t){return Ge.addEventListener("change",t),()=>Ge.removeEventListener("change",t)}function qt(){return Oe}function vt(t){Oe=t;try{localStorage.setItem(yt,String(t.useCoverColor)),t.customColor!==null&&localStorage.setItem(mt,t.customColor)}catch{}Ge.dispatchEvent(new Event("change"))}function Yt(){try{let t=localStorage.getItem("spotikit-visualizer.renderer");if(t==="ncs"||t==="spectrum"||t==="debug")return t}catch{}return"ncs"}function gt({popup:t=!1,initialMode:s}){let[i,r]=W(()=>s??Yt()),{customColor:a,useCoverColor:f}=y.useSyncExternalStore(Ht,qt),[v,c]=W(()=>SpotiKit.Player.track),[o,e]=W(),[u,n]=W(0),[l,p]=W(),[d,m]=W(N.correctLatency),[h,g]=W(null),w=Re(null),E=h?.ownerDocument,L=nt(E)===h&&h!==null,D=it(E),b=v?.uri??"",T=b.startsWith("spotify:track:"),R=o?.uri===b?o:void 0,B=Be[i].renderer,P=R?.data,x=a??P?.color??be,z=i==="ncs"&&!f?x:P?.color??be,U=P?.audioAnalysis?{audioAnalysis:P.audioAnalysis,color:z}:void 0,I=T&&R!==void 0&&!U;$(()=>{let S=()=>c(SpotiKit.Player.track),k=SpotiKit.Player.on("track",S);return S(),k},[]),$(()=>{if(!v||!T)return;let S=!0;return e(void 0),dt(v).then(k=>{S&&e({uri:b,data:k})}),()=>{S=!1}},[b,T,u]),$(()=>(N.addReference(),()=>N.removeReference()),[]);function H(S){if(r(S),p(void 0),!t)try{localStorage.setItem("spotikit-visualizer.renderer",S)}catch{}}function _(){e(void 0),n(S=>S+1)}async function G(){if(!(!h||!E))try{L?await E.exitFullscreen():await h.requestFullscreen(),w.current&&(w.current.open=!1)}catch{SpotiKit.notify("Could not switch fullscreen mode.")}}async function J(){let S=null;try{if(S=window.open("","","popup,width=960,height=540"),!S){let ie=window.documentPictureInPicture;ie&&(S=await ie.requestWindow({width:960,height:540}))}if(!S)throw new Error("Popup unavailable");S.document.title="Visualizer",S.document.body.style.margin="0";let k=S.document.body.appendChild(S.document.createElement("div")),Y=SpotiKit.ReactDOM.createRoot(k);S.addEventListener("pagehide",()=>Y.unmount(),{once:!0}),Y.render(y.createElement(gt,{popup:!0,initialMode:i}))}catch(k){S?.close(),console.warn("[Visualizer] Could not open a window",k),SpotiKit.notify("Spotify could not open a separate window.")}}let O=b?T?l??(I&&i!=="ncs"?"Audio analysis is unavailable for this track.":void 0):"Visualization is available for music tracks.":"Play a track to start the visualizer.",q=T&&!R;return y.createElement("div",{className:`spotikit-visualizer${t?" spotikit-visualizer--popup":""}${L&&!D?" spotikit-visualizer--idle":""}`,ref:g,onPointerDown:()=>N.resume(),onKeyDown:S=>{N.resume(),S.key==="Escape"&&w.current?.open&&(w.current.open=!1)}},y.createElement("style",null,Xe),U&&!l&&y.createElement(ee.Provider,{value:p},y.createElement(B,{key:`${b}:${i}`,isEnabled:!0,trackData:U})),I&&i==="ncs"&&!l&&y.createElement(ee.Provider,{value:p},y.createElement(ye,{key:b,isEnabled:!0,trackData:{color:z}}),y.createElement("div",{className:"spotikit-visualizer-fallback"},y.createElement("span",{role:"status"},"Audio analysis unavailable \xB7 Ambient motion"),y.createElement("button",{className:"spotikit-visualizer-retry",type:"button",onClick:_},"Retry"))),q&&y.createElement("div",{className:"spotikit-visualizer-status",role:"status","aria-label":"Loading audio analysis"},y.createElement(Fe,null)),!q&&O&&y.createElement("div",{className:"spotikit-visualizer-status",role:"status"},y.createElement("p",null,O),I&&!l&&y.createElement(y.Fragment,null,y.createElement("button",{className:"spotikit-visualizer-retry",type:"button",onClick:_},"Retry"),y.createElement("button",{type:"button",onClick:()=>H("ncs")},"Use ambient NCS"))),y.createElement("details",{className:"spotikit-visualizer-controls",ref:w},y.createElement("summary",{"aria-label":"Visualizer settings",title:"Visualizer settings"},y.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},y.createElement("circle",{cx:"5",cy:"12",r:"1.8"}),y.createElement("circle",{cx:"12",cy:"12",r:"1.8"}),y.createElement("circle",{cx:"19",cy:"12",r:"1.8"}))),y.createElement("div",{className:"spotikit-visualizer-settings"},y.createElement("label",null,"Mode",y.createElement("select",{value:i,onChange:S=>H(S.currentTarget.value)},Object.entries(Be).map(([S,k])=>y.createElement("option",{key:S,value:S},k.name)))),i==="ncs"&&y.createElement(y.Fragment,null,y.createElement("label",null,"Use cover art color",y.createElement("input",{type:"checkbox",checked:f,onChange:S=>{let k=S.currentTarget.checked;vt({customColor:k?a:x,useCoverColor:k})}})),y.createElement("label",null,"Sphere color",y.createElement("input",{type:"color",value:x,disabled:f,onChange:S=>vt({customColor:S.currentTarget.value,useCoverColor:!1})}))),y.createElement("label",null,y.createElement("input",{type:"checkbox",checked:d,onChange:S=>{let k=S.currentTarget.checked;m(k),N.setCorrectLatency(k)}}),"Compensate for audio latency"),y.createElement("button",{type:"button",onClick:G},L?"Exit fullscreen":"Enter fullscreen"),!t&&y.createElement("button",{type:"button",onClick:J},"Open in a separate window"))))}export{gt as default};
