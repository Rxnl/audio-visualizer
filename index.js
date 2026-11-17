/*! SpotiKit port by rxnl. Based on Spicetify Visualizer by Konsl (MIT). Tested with Spotify 1.3.9.2055. */
var We=SpotiKit.React,v=We,{createContext:Ve,useCallback:N,useContext:le,useEffect:$,useMemo:he,useRef:Ae,useState:W}=We;var Xe=`.spotikit-app:has(> .spotikit-visualizer) {\r
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
`;function Fe(){return v.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},v.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},v.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}),v.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"})),v.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor",strokeWidth:"2"},v.createElement("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}),v.createElement("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"})))}function ue(t){let{contextType:s,onInit:o,onDispose:r,onResize:a,onRender:c,style:d,data:f,isEnabled:i}=t,e=Ae(null),[u,n]=W(null),l=N((h,p)=>{let m=Math.round(h.clientWidth*p.devicePixelRatio),y=Math.round(h.clientHeight*p.devicePixelRatio),{width:g,height:b}=t.sizeConstraint?.(m,y)??{width:m,height:y};h.width===g&&h.height===b||(h.width=g,h.height=b)},[]);return $(()=>{if(!o)return;let h=e.current;if(!h)return;let p=h.ownerDocument.defaultView;if(!p)return;let m=h.getContext(s),y=o(m);return l(h,p),a(m,y),n(y),()=>r?.(m,y)},[s,o,r]),$(()=>{if(!i||!u||!c)return;let h=e.current;if(!h)return;let p=h.ownerDocument.defaultView;if(!p)return;let m=h.getContext(s),y=0,g=b=>{u&&(c(m,f,u,b),y=p.requestAnimationFrame(g))};return y=p.requestAnimationFrame(g),()=>{y&&p.cancelAnimationFrame(y)}},[s,c,f,u,i]),$(()=>{if(!e.current)return;let h=e.current.ownerDocument.defaultView;if(!h)return;let p=new h.ResizeObserver(()=>{let m=e.current;if(!m)return;let y=m.ownerDocument.defaultView;if(!y)return;l(m,y);let g=m.getContext(s);g&&u&&a(g,u)});return p.observe(e.current),()=>p.disconnect()},[s,a,u]),v.createElement("canvas",{ref:e,style:{...d||{},...i?{}:{visibility:"hidden"}}})}function F(t,s,o){let r=0,a=t.length;for(;a-r>1;){let c=Math.floor((a+r)/2);s(t[c],c)<=o?r=c:a=c}return r}function Z(t){return Math.min(Math.max(Math.pow(10,t/20),0),1)}function He(t){return t*t*(3-2*t)}function R(t,s,o,r,a){return t=(t-s)/(o-s),t=t*(a-r)+r,t}function At(t,s,o,r,a,c){return t=(t-s)/(o-s),t=r(t),t=t*(c-a)+a,t}function pe(t,s){return-.5*(t.x-s.x)*(t.y+s.y)}function Re(t,s,o,r,a){let c=F(t,s,a),d=t[c];if(c>t.length-2)return o(d,c);let f=t[c+1];return At(a,s(d,c),s(f,c+1),r,o(d,c),o(f,c+1))}function qe(t,s,o){if(o==0)return Re(t,i=>i.x,i=>i.y,i=>i,s);let r=s-o/2,a=s+o/2,c=F(t,i=>i.x,r),d=F(t,i=>i.x,a),f=0;if(c==d){let i=t[c];if(c>t.length-2)return i.y;let e=t[c+1],u=R(r,i.x,e.x,i.y,e.y),n=R(a,i.x,e.x,i.y,e.y);return(u+n)/2}else{let i=t[c],e=t[c+1],u={x:r,y:R(r,i.x,e.x,i.y,e.y)};f=pe(u,e);for(let n=c+1;n<d;n++)i=e,e=t[n+1],f+=pe(i,e);i=e,d>t.length-2?f+=i.y*(a-i.x):(e=t[d+1],u={x:a,y:R(a,i.x,e.x,i.y,e.y)},f+=pe(i,u))}return f/o}function Ye(t,s){let o=F(t,d=>d.x,s),r=t[o];if(o+1>=t.length)return(r.accumulatedIntegral??0)+r.y*(s-r.x);let a=t[o+1],c={x:s,y:R(s,r.x,a.x,r.y,a.y)};return(r.accumulatedIntegral??0)+pe(r,c)}var $e=`#version 300 es

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
`;var ee=Ve(()=>{});var B=class{static{this.correctLatency=!0}static{this.references=0}static addReference(){this.references++,this.resume()}static removeReference(){if(this.references--,this.references===0){let s=this.context;this.context=void 0,s?.close().catch(()=>{})}}static setCorrectLatency(s){this.correctLatency=s,s?this.resume():this.context?.suspend().catch(()=>{})}static resume(){if(!(!this.correctLatency||!this.references||typeof AudioContext!="function"))try{this.context??=new AudioContext,this.context.state!=="running"&&this.context.resume().catch(()=>{})}catch{}}static getProgress(){let s=this.correctLatency&&this.context?.outputLatency||0;return Math.max(0,SpotiKit.Player.position/1e3-s)}};var rt=.75,ke=900;function Rt(t,s,o,r,a){t.wasPlaying&&!o&&(t.pauseStartedAt=s,t.pauseSpeed=a);let c=Math.min(s-t.pauseStartedAt,ke)/ke,d=t.pauseSpeed*(ke/1e3)*c*(1-c/2);return o&&(t.offset+=d,t.pauseSpeed=0),t.wasPlaying=o,r+t.offset+(o?0:d)}function ye(t){let s=le(ee),o=t.trackData.audioAnalysis,r=he(()=>{if(!o)return[{x:0,y:0}];let e=o.segments,u=e.flatMap(n=>n.loudness_max_time?[{x:n.start,y:Z(n.loudness_start)},{x:n.start+n.loudness_max_time,y:Z(n.loudness_max)}]:[{x:n.start,y:Z(n.loudness_start)}]);if(e.length){u[0].accumulatedIntegral=0;for(let l=1;l<u.length;l++){let h=u[l-1],p=u[l];p.accumulatedIntegral=(h.accumulatedIntegral??0)+pe(h,p)}let n=e[e.length-1];u.push({x:n.start+n.duration,y:Z(n.loudness_end)})}return u},[o]),a=o?.meta?.timestamp??0,c=N(e=>{if(!e)return s("Error: WebGL2 is not supported"),{isError:!0};if(!e.getExtension("EXT_color_buffer_float"))return s("Error: Rendering to floating-point textures is not supported"),{isError:!0};let u=(ie,se,ae)=>{let V=e.createShader(ie);if(e.shaderSource(V,se),e.compileShader(V),!e.getShaderParameter(V,e.COMPILE_STATUS)&&!e.isContextLost()){let me=`Error: Failed to compile '${ae}' shader`,ze=e.getShaderInfoLog(V);return console.error(`[Visualizer] ${me}`,ze),s(me),null}return V},n=(ie,se,ae)=>{let V=e.createProgram();if(e.attachShader(V,ie),e.attachShader(V,se),e.linkProgram(V),e.deleteShader(ie),e.deleteShader(se),!e.getProgramParameter(V,e.LINK_STATUS)&&!e.isContextLost()){let me=`Error: Failed to link '${ae}' shader`,ze=e.getProgramInfoLog(V);return console.error(`[Visualizer] ${me}`,ze),s(me),null}return V},l=ie=>{let se=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,se);let ae=e.createTexture();return e.bindTexture(e.TEXTURE_2D,ae),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,ie),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,ie),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0),{framebuffer:se,texture:ae}},h=u(e.VERTEX_SHADER,$e,"particle vertex");if(!h)return{isError:!0};let p=u(e.FRAGMENT_SHADER,Ze,"particle fragment");if(!p)return{isError:!0};let m=n(h,p,"particle");if(!m)return{isError:!0};let y=e.getAttribLocation(m,"inPosition"),g=e.getUniformLocation(m,"uNoiseOffset"),b=e.getUniformLocation(m,"uAmplitude"),E=e.getUniformLocation(m,"uSeed"),L=e.getUniformLocation(m,"uDotSpacing"),D=e.getUniformLocation(m,"uDotOffset"),S=e.getUniformLocation(m,"uSphereRadius"),C=e.getUniformLocation(m,"uFeather"),A=e.getUniformLocation(m,"uNoiseFrequency"),M=e.getUniformLocation(m,"uNoiseAmplitude"),k=u(e.VERTEX_SHADER,Ke,"dot vertex");if(!k)return{isError:!0};let x=u(e.FRAGMENT_SHADER,je,"dot fragment");if(!x)return{isError:!0};let z=n(k,x,"dot");if(!z)return{isError:!0};let U=e.getAttribLocation(z,"inPosition"),I=e.getUniformLocation(z,"uDotCount"),H=e.getUniformLocation(z,"uDotRadius"),_=e.getUniformLocation(z,"uDotRadiusPX"),G=e.getUniformLocation(z,"uParticleTexture"),J=u(e.VERTEX_SHADER,Qe,"blur vertex");if(!J)return{isError:!0};let O=u(e.FRAGMENT_SHADER,Je,"blur fragment");if(!O)return{isError:!0};let q=n(J,O,"blur");if(!q)return{isError:!0};let T=e.getAttribLocation(q,"inPosition"),P=e.getUniformLocation(q,"uBlurRadius"),Y=e.getUniformLocation(q,"uBlurDirection"),oe=e.getUniformLocation(q,"uInputTexture"),re=u(e.VERTEX_SHADER,et,"finalize vertex");if(!re)return{isError:!0};let fe=u(e.FRAGMENT_SHADER,tt,"finalize fragment");if(!fe)return{isError:!0};let Q=n(re,fe,"finalize");if(!Q)return{isError:!0};let Se=e.getAttribLocation(Q,"inPosition"),Te=e.getUniformLocation(Q,"uOutputColor"),Le=e.getUniformLocation(Q,"uBlurredTexture"),Ee=e.getUniformLocation(Q,"uOriginalTexture"),{framebuffer:Ce,texture:we}=l(e.NEAREST),{framebuffer:xt,texture:bt}=l(e.NEAREST),{framebuffer:St,texture:Tt}=l(e.LINEAR),{framebuffer:Et,texture:Ct}=l(e.NEAREST),_e=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,_e),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.enable(e.BLEND),e.blendEquation(e.MAX),{isError:!1,particleShader:m,dotShader:z,blurShader:q,finalizeShader:Q,viewportSize:0,particleTextureSize:0,motion:{wasPlaying:!1,pauseStartedAt:0,pauseSpeed:0,offset:0},inPositionLoc:y,inPositionLocDot:U,inPositionLocBlur:T,inPositionLocFinalize:Se,uNoiseOffsetLoc:g,uAmplitudeLoc:b,uSeedLoc:E,uDotSpacingLoc:L,uDotOffsetLoc:D,uSphereRadiusLoc:S,uFeatherLoc:C,uNoiseFrequencyLoc:A,uNoiseAmplitudeLoc:M,uDotCountLoc:I,uDotRadiusLoc:H,uDotRadiusPXLoc:_,uParticleTextureLoc:G,uBlurRadiusLoc:P,uBlurDirectionLoc:Y,uBlurInputTextureLoc:oe,uOutputColorLoc:Te,uBlurredTextureLoc:Le,uOriginalTextureLoc:Ee,quadBuffer:_e,particleFramebuffer:Ce,particleTexture:we,dotFramebuffer:xt,dotTexture:bt,blurXFramebuffer:St,blurXTexture:Tt,blurYFramebuffer:Et,blurYTexture:Ct}},[]),d=N((e,u)=>{!e||u.isError||(e.deleteBuffer(u.quadBuffer),[u.particleTexture,u.dotTexture,u.blurXTexture,u.blurYTexture].forEach(n=>e.deleteTexture(n)),[u.particleFramebuffer,u.dotFramebuffer,u.blurXFramebuffer,u.blurYFramebuffer].forEach(n=>e.deleteFramebuffer(n)),[u.particleShader,u.dotShader,u.blurShader,u.finalizeShader].forEach(n=>e.deleteProgram(n)))},[]),f=N((e,u)=>{u.isError||!e||(u.viewportSize=Math.min(e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindTexture(e.TEXTURE_2D,u.dotTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurXTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,u.blurYTexture),e.texImage2D(e.TEXTURE_2D,0,e.R8,u.viewportSize,u.viewportSize,0,e.RED,e.UNSIGNED_BYTE,null))},[]),i=N((e,u,n,l)=>{if(n.isError||!e)return;let h=B.getProgress(),p=qe(u.amplitudeCurve,h,.15),m=rt*(.5*h+Ye(u.amplitudeCurve,h)),y=Rt(n.motion,l,SpotiKit.Player.isPlaying,m,rt*(.5+p)),g=u.seed,b=322,E=.9/b,L=E*.5*n.viewportSize,D=.9,S=-.9/2,C=R(p,0,1,.75*.9,.9),A=Math.pow(p+3,2)*(45/1568),M=4,k=.32*.9;n.particleTextureSize!==b&&(n.particleTextureSize=b,e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,b,b,0,e.RG,e.FLOAT,null)),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.particleFramebuffer),e.viewport(0,0,b,b),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.particleShader),e.uniform1f(n.uNoiseOffsetLoc,y),e.uniform1f(n.uAmplitudeLoc,p),e.uniform1i(n.uSeedLoc,g),e.uniform1f(n.uDotSpacingLoc,D),e.uniform1f(n.uDotOffsetLoc,S),e.uniform1f(n.uSphereRadiusLoc,C),e.uniform1f(n.uFeatherLoc,A),e.uniform1f(n.uNoiseFrequencyLoc,M),e.uniform1f(n.uNoiseAmplitudeLoc,k),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLoc),e.vertexAttribPointer(n.inPositionLoc,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,n.dotFramebuffer),e.viewport(0,0,n.viewportSize,n.viewportSize),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.dotShader),e.uniform1i(n.uDotCountLoc,b),e.uniform1f(n.uDotRadiusLoc,E),e.uniform1f(n.uDotRadiusPXLoc,L),e.uniform1i(n.uParticleTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.particleTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocDot),e.vertexAttribPointer(n.inPositionLocDot,2,e.FLOAT,!1,0,0),e.drawArraysInstanced(e.TRIANGLE_FAN,0,4,b*b),e.bindFramebuffer(e.FRAMEBUFFER,n.blurXFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.blurShader),e.uniform1f(n.uBlurRadiusLoc,.01*n.viewportSize),e.uniform2f(n.uBlurDirectionLoc,1/n.viewportSize,0),e.uniform1i(n.uBlurInputTextureLoc,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocBlur),e.vertexAttribPointer(n.inPositionLocBlur,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,n.blurYFramebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform2f(n.uBlurDirectionLoc,0,1/n.viewportSize),e.bindTexture(e.TEXTURE_2D,n.blurXTexture),e.drawArrays(e.TRIANGLE_FAN,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n.finalizeShader),e.uniform3f(n.uOutputColorLoc,(u.themeColor>>16&255)/255,(u.themeColor>>8&255)/255,(u.themeColor&255)/255),e.uniform1i(n.uBlurredTextureLoc,0),e.uniform1i(n.uOriginalTextureLoc,1),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.blurYTexture),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n.dotTexture),e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.inPositionLocFinalize),e.vertexAttribPointer(n.inPositionLocFinalize,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},[]);return v.createElement(ue,{isEnabled:t.isEnabled,data:{themeColor:parseInt(t.trackData.color.slice(1),16),seed:a,amplitudeCurve:r},contextType:"webgl2",onInit:c,onDispose:d,onResize:f,onRender:i,style:{width:"100%",height:"100%",objectFit:"contain"},sizeConstraint:(e,u)=>{let n=Math.min(e,u);return{width:n,height:n}}})}function nt(t){let[s,o]=W(t?.fullscreenElement??null);return $(()=>{if(!t)return;let r=()=>o(t.fullscreenElement);return r(),t.addEventListener("fullscreenchange",r),()=>t.removeEventListener("fullscreenchange",r)},[t]),s}function ot(t,s=5e3){let[o,r]=W(!0);return $(()=>{if(!t)return;let a=o,c=i=>{a!==i&&(a=i,r(i))},d=0,f=()=>{c(!0),clearTimeout(d),d=setTimeout(()=>c(!1),s)};return f(),t.addEventListener("mousemove",f),()=>{clearTimeout(d),t.removeEventListener("mousemove",f)}},[t]),o}var X=Uint8Array,de=Uint16Array,Dt=Int32Array,it=new X([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),st=new X([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lt=new X([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),at=function(t,s){for(var o=new de(31),r=0;r<31;++r)o[r]=s+=1<<t[r-1];for(var a=new Dt(o[30]),r=1;r<30;++r)for(var c=o[r];c<o[r+1];++c)a[c]=c-o[r]<<5|r;return{b:o,r:a}},ut=at(it,2),ct=ut.b,zt=ut.r;ct[28]=258,zt[258]=28;var ft=at(st,0),Ft=ft.b,xr=ft.r,Ie=new de(32768);for(w=0;w<32768;++w)te=(w&43690)>>1|(w&21845)<<1,te=(te&52428)>>2|(te&13107)<<2,te=(te&61680)>>4|(te&3855)<<4,Ie[w]=((te&65280)>>8|(te&255)<<8)>>1;var te,w,ge=(function(t,s,o){for(var r=t.length,a=0,c=new de(s);a<r;++a)t[a]&&++c[t[a]-1];var d=new de(s);for(a=1;a<s;++a)d[a]=d[a-1]+c[a-1]<<1;var f;if(o){f=new de(1<<s);var i=15-s;for(a=0;a<r;++a)if(t[a])for(var e=a<<4|t[a],u=s-t[a],n=d[t[a]-1]++<<u,l=n|(1<<u)-1;n<=l;++n)f[Ie[n]>>i]=e}else for(f=new de(r),a=0;a<r;++a)t[a]&&(f[a]=Ie[d[t[a]-1]++]>>15-t[a]);return f}),xe=new X(288);for(w=0;w<144;++w)xe[w]=8;var w;for(w=144;w<256;++w)xe[w]=9;var w;for(w=256;w<280;++w)xe[w]=7;var w;for(w=280;w<288;++w)xe[w]=8;var w,lt=new X(32);for(w=0;w<32;++w)lt[w]=5;var w;var kt=ge(xe,9,1);var Pt=ge(lt,5,1),Pe=function(t){for(var s=t[0],o=1;o<t.length;++o)t[o]>s&&(s=t[o]);return s},K=function(t,s,o){var r=s/8|0;return(t[r]|t[r+1]<<8)>>(s&7)&o},Ue=function(t,s){var o=s/8|0;return(t[o]|t[o+1]<<8|t[o+2]<<16)>>(s&7)},Ut=function(t){return(t+7)/8|0},It=function(t,s,o){return(s==null||s<0)&&(s=0),(o==null||o>t.length)&&(o=t.length),new X(t.subarray(s,o))};var Mt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],j=function(t,s,o){var r=new Error(s||Mt[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,j),!o)throw r;return r},Nt=function(t,s,o,r){var a=t.length,c=r?r.length:0;if(!a||s.f&&!s.l)return o||new X(0);var d=!o,f=d||s.i!=2,i=s.i;d&&(o=new X(a*3));var e=function(Ee){var Ce=o.length;if(Ee>Ce){var we=new X(Math.max(Ce*2,Ee));we.set(o),o=we}},u=s.f||0,n=s.p||0,l=s.b||0,h=s.l,p=s.d,m=s.m,y=s.n,g=a*8;do{if(!h){u=K(t,n,1);var b=K(t,n+1,3);if(n+=3,b)if(b==1)h=kt,p=Pt,m=9,y=5;else if(b==2){var S=K(t,n,31)+257,C=K(t,n+10,15)+4,A=S+K(t,n+5,31)+1;n+=14;for(var M=new X(A),k=new X(19),x=0;x<C;++x)k[Lt[x]]=K(t,n+x*3,7);n+=C*3;for(var z=Pe(k),U=(1<<z)-1,I=ge(k,z,1),x=0;x<A;){var H=I[K(t,n,U)];n+=H&15;var E=H>>4;if(E<16)M[x++]=E;else{var _=0,G=0;for(E==16?(G=3+K(t,n,3),n+=2,_=M[x-1]):E==17?(G=3+K(t,n,7),n+=3):E==18&&(G=11+K(t,n,127),n+=7);G--;)M[x++]=_}}var J=M.subarray(0,S),O=M.subarray(S);m=Pe(J),y=Pe(O),h=ge(J,m,1),p=ge(O,y,1)}else j(1);else{var E=Ut(n)+4,L=t[E-4]|t[E-3]<<8,D=E+L;if(D>a){i&&j(0);break}f&&e(l+L),o.set(t.subarray(E,D),l),s.b=l+=L,s.p=n=D*8,s.f=u;continue}if(n>g){i&&j(0);break}}f&&e(l+131072);for(var q=(1<<m)-1,T=(1<<y)-1,P=n;;P=n){var _=h[Ue(t,n)&q],Y=_>>4;if(n+=_&15,n>g){i&&j(0);break}if(_||j(2),Y<256)o[l++]=Y;else if(Y==256){P=n,h=null;break}else{var oe=Y-254;if(Y>264){var x=Y-257,re=it[x];oe=K(t,n,(1<<re)-1)+ct[x],n+=re}var fe=p[Ue(t,n)&T],Q=fe>>4;fe||j(3),n+=fe&15;var O=Ft[Q];if(Q>3){var re=st[Q];O+=Ue(t,n)&(1<<re)-1,n+=re}if(n>g){i&&j(0);break}f&&e(l+131072);var Se=l+oe;if(l<O){var Te=c-O,Le=Math.min(O,Se);for(Te+l<0&&j(3);l<Le;++l)o[l]=r[Te+l]}for(;l<Se;++l)o[l]=o[l-O]}}s.l=h,s.p=P,s.b=l,s.f=u,h&&(u=1,s.m=m,s.d=p,s.n=y)}while(!u);return l!=o.length&&d?It(o,0,l):o.subarray(0,l)};var Bt=new X(0);var Gt=function(t,s){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&j(6,"invalid zlib data"),(t[1]>>5&1)==+!s&&j(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function ht(t,s){return Nt(t.subarray(Gt(t,s&&s.dictionary),-4),{i:2},s&&s.out,s&&s.dictionary)}var Ot=typeof TextDecoder<"u"&&new TextDecoder,_t=0;try{Ot.decode(Bt,{stream:!0}),_t=1}catch{}function Wt(t){t=t.replace(/-/g,"+").replace(/_/g,"/");let s=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),o=ht(s),r=new TextDecoder().decode(o).split(" ").map(e=>parseInt(e)),a=[];if(r.length<3)return a;let c=r.shift(),f=r.shift()/c,i=r.shift();if(r.length<i)return a;for(let e=0;e<i;e++){let u=[],n=r.shift();if(r.length<n+(i-e-1))return a;for(let l=0;l<n;l++){let h=r.shift()*f;u.push(l==0?h:u[l-1]+h)}a.push(u)}return a}function De(t){let{rhythm_version:s,rhythmstring:o}=t.track;if(!(s!==1||!o))try{let r=Wt(o);if(r.length&&r.every(a=>a.every(Number.isFinite)))return r}catch{}}var pt=[1,2],ce=10,ne=20,ve=10,Vt=[{name:"Beats",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.beats?.length,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis.beats;if(!a)return;let c=F(a,f=>f.start,o.start),d=F(a,f=>f.start,o.end);t.lineWidth=1,t.strokeStyle="#FFFFFF33",t.beginPath();for(let f=c;f<=d;f++){let e=a[f].start,u=R(e,o.start,o.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Bars",layer:"background",isSupported:t=>!!t.trackData.audioAnalysis.bars?.length,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis.bars;if(!a)return;let c=F(a,f=>f.start,o.start),d=F(a,f=>f.start,o.end);t.lineWidth=3,t.strokeStyle="#FFFFFF66",t.beginPath();for(let f=c;f<=d;f++){let e=a[f].start,u=R(e,o.start,o.end,r.x,r.x+r.width);t.moveTo(u,r.y),t.lineTo(u,r.y+r.height)}t.stroke()}},{name:"Position",layer:"overlay",isSupported:t=>!0,render:(t,s,o,r)=>{t.lineWidth=5,t.strokeStyle=t.fillStyle="white",t.beginPath();let a=R(o.current,o.start,o.end,r.x,r.x+r.width);t.moveTo(a,r.y),t.lineTo(a,r.y+r.height),t.stroke();let c=10;t.beginPath(),t.moveTo(a-c,r.y),t.lineTo(a+c,r.y),t.lineTo(a,r.y+c),t.lineTo(a-c,r.y),t.moveTo(a-c,r.y+r.height),t.lineTo(a+c,r.y+r.height),t.lineTo(a,r.y+r.height-c),t.lineTo(a-c,r.y+r.height),t.fill()}},{name:"Loudness",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let c=F(a.segments,i=>i.start,o.start),d=F(a.segments,i=>i.start,o.end),f=i=>Z(i);t.lineWidth=2,t.strokeStyle="white",t.beginPath();for(let i=c;i<=d+1&&i<a.segments.length;i++){let e=a.segments[i],u=R(e.start,o.start,o.end,r.x,r.x+r.width),n=R(f(e.loudness_start),0,1,r.y+r.height,r.y),l=R(e.start+e.loudness_max_time,o.start,o.end,r.x,r.x+r.width),h=R(f(e.loudness_max),0,1,r.y+r.height,r.y);if(i===c?t.moveTo(u,n):t.lineTo(u,n),t.lineTo(l,h),i===a.segments.length-1){let p=R(e.start+e.duration,o.start,o.end,r.x,r.x+r.width),m=R(f(e.loudness_end),0,1,r.y+r.height,r.y);t.lineTo(p,m)}}t.stroke()}},{name:"Confidence",layer:"content",height:.25,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let c=F(a.segments,f=>f.start,o.start),d=F(a.segments,f=>f.start,o.end);t.beginPath();for(let f=c;f<=d;f++){let i=a.segments[f],e=R(i.start,o.start,o.end,r.x,r.x+r.width),u=R(i.start+i.duration,o.start,o.end,r.x,r.x+r.width);t.fillStyle=`rgba(255, 255, 255, ${i.confidence})`,t.fillRect(e,r.y,u-e,r.height)}t.fill()}},{name:"Timbre",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let c=r.height/12,d=F(a.segments,i=>i.start,o.start),f=F(a.segments,i=>i.start,o.end);for(let i=0;i<12;i++){let e=(Math.sqrt(5)-1)/2,u=i*e;t.beginPath();for(let n=d;n<=f;n++){let l=a.segments[n],h=R(Math.tanh(.02*l.timbre[i]),-1,1,0,1),p=R(l.start,o.start,o.end,r.x,r.x+r.width),m=R(l.start+l.duration,o.start,o.end,r.x,r.x+r.width),y=r.y+i/12*r.height;t.fillStyle=`hsla(${u*360}, 100%, 70%, ${h})`,t.fillRect(p,y,m-p,c)}t.fill()}}},{name:"Pitches",layer:"content",height:1,isSupported:t=>!!t.trackData.audioAnalysis,render:(t,s,o,r)=>{let a=s.trackData.audioAnalysis;if(!a)return;let c=r.height/12,d=F(a.segments,i=>i.start,o.start),f=F(a.segments,i=>i.start,o.end);for(let i=0;i<12;i++){let e=i/12;t.beginPath();for(let u=d;u<=f;u++){let n=a.segments[u],l=R(n.start,o.start,o.end,r.x,r.x+r.width),h=R(n.start+n.duration,o.start,o.end,r.x,r.x+r.width),p=r.y+i/12*r.height;t.fillStyle=`hsla(${e*360}, 100%, 70%, ${n.pitches[i]})`,t.fillRect(l,p,h-l,c)}t.fill()}}},{name:"Rhythm",layer:"content",height:.5,isSupported:t=>!!t.rhythm,render:(t,s,o,r)=>{let a=s.rhythm;if(!a)return;let c=r.height/a.length,d=Math.min(c,20),f=d/2/r.width*(o.end-o.start);t.fillStyle="white",t.beginPath();for(let i=a.length-1;i>=0;i--){let e=F(a[i],n=>n,o.start-f),u=F(a[i],n=>n,o.end+f);for(let n=e;n<=u;n++){let l=R(a[i][n],o.start,o.end,r.x,r.x+r.width),h=r.y+i*c;t.rect(l-d/2,h,d,c)}}t.fill()}}];function Me(t){let s=le(ee),[o,r,a]=he(()=>{let i=t.trackData.audioAnalysis,e={trackData:t.trackData,rhythm:De(i)},u=Vt.filter(p=>p.isSupported(e)),n=i.bars??[],l=n.reduce((p,m)=>p+m.duration,0)/n.length,h=Number.isFinite(l)&&l>0?l:1;return[u,h,e]},[t.trackData]),c=N(i=>i?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),d=N((i,e)=>{e.isError},[]),f=N((i,e,u)=>{if(u.isError||!i)return;i.clearRect(0,0,i.canvas.width,i.canvas.height);let n=B.getProgress(),l=n-pt[0]*e.barDuration,h=n+pt[1]*e.barDuration,p={start:l,end:h,current:n},m=(S,C,A)=>{i.save(),i.font=`${ne}px sans-serif`,i.textAlign="center",i.fillStyle="white",i.rotate(Math.PI*3/2),i.fillText(S,-(C+A/2),ne,A),i.restore()},y=(S,C)=>{i.save(),i.beginPath(),i.rect(C.x,C.y,C.width,C.height),i.clip(),S.render(i,e.processedTrackData,p,C),i.restore()};for(let S of e.supportedSections)S.layer==="background"&&y(S,{x:ne+ve,y:0,width:i.canvas.width-ne-ve,height:i.canvas.height});let g=e.supportedSections.filter(S=>S.layer==="content"),b=i.canvas.height-ce*(g.length-1),E=g.reduce((S,C)=>S+C.height,0),L=0,D=0;for(let S of g){let C=R(L,0,E,0,b)+D*ce,A=R(L+S.height,0,E,0,b)+D*ce;L+=S.height,D++,y(S,{x:ne+ve,y:C,width:i.canvas.width-ne-ve,height:A-C}),m(S.name,C,A-C),D<g.length&&(i.lineWidth=1,i.strokeStyle="#AAAAAA",i.beginPath(),i.moveTo(ce/2,A+ce/2),i.lineTo(i.canvas.width-ce/2,A+ce/2),i.stroke())}for(let S of e.supportedSections)S.layer==="overlay"&&y(S,{x:ne+ve,y:0,width:i.canvas.width-ne-ve,height:i.canvas.height})},[]);return v.createElement(ue,{isEnabled:t.isEnabled,data:{barDuration:r,supportedSections:o,processedTrackData:a},contextType:"2d",onInit:c,onResize:d,onRender:f,style:{width:"100%",height:"100%"}})}function Ne(t){let s=le(ee),o=t.trackData.audioAnalysis,r=he(()=>{if(!o)return[];let f=o.segments,i=De(o)??[[]],e=.4,u=.2,n=.4,l=e/Math.sqrt(2)*8,h=12*i.length,p=[];for(let y=0;y<f.length;y++){let g=f[y],b=Z(g.loudness_start),E=Z(g.loudness_max),L=g.start+g.loudness_max_time,D=g.pitches,S=L-l,C=L+l,A=i.map(x=>{let z=F(x,I=>I,S),U=F(x,I=>I,C);return x.slice(z,U).map(I=>Math.exp(-Math.pow((I-L)/e,2))).reduce((I,H)=>I+H,0)+u}),M=Math.max(...A);for(let x=0;x<A.length;x++)A[x]/=M;let k=Array(h);for(let x=0;x<A.length;x++){let z=A.length===1?1:R(x,0,A.length-1,.2,.6);for(let U=0;U<12;U++){let I=Re([...A.entries()],G=>G[0],G=>G[1],He,x+U/12),H=D.reduce((G,J)=>G+J,0)/D.length,_=D[U]*z+H*(1-z);k[12*x+U]=I*_}}if(p.push([g.start,...k.map(x=>x*b)]),p.push([L,...k.map(x=>x*E)]),y==f.length-1){let x=Z(g.loudness_end);p.push([g.start+g.duration,...k.map(z=>z*x)])}}let m=Array(h).fill(0).map(y=>Array(p.length));for(let y=0;y<h;y++){let g=0,b={x:0,y:0},E={x:0,y:0};for(let L=0;L<p.length;L++){let D={x:p[L][0],y:p[L][y+1]},S=D.x+D.y/n,C=E.x+E.y/n;if(S>C){if(E.x!==b.x){let A=(D.y-b.y)/(D.x-b.x),M=b.y-A*b.x,k=-n,z=(E.y-k*E.x-M)/(A-k),U=A*z+M;m[y][g]={x:z,y:U},g++}E=D,m[y][g]=D,g++}b=D}m[y].length=g}return m},[o]),a=N(f=>f?{isError:!1}:(s("Error: 2D rendering is not supported"),{isError:!0}),[]),c=N((f,i)=>{i.isError},[]),d=N((f,i,e)=>{if(e.isError||!f)return;let u=B.getProgress();f.clearRect(0,0,f.canvas.width,f.canvas.height),f.fillStyle=i.themeColor;let n=i.spectrumData.length;if(!n)return;let l=f.canvas.width/n*.7,h=(f.canvas.width-l*n)/(n+1);for(let p=0;p<n;p++){let m=i.spectrumData[p];if(!m.length)continue;let y=Re(m,g=>g.x,g=>g.y,g=>g,Math.max(u,m[0].x));f.fillRect(h*(p+1)+l*p,f.canvas.height-y*f.canvas.height,l,y*f.canvas.height)}},[]);return v.createElement(ue,{isEnabled:t.isEnabled,data:{themeColor:t.trackData.color,spectrumData:r},contextType:"2d",onInit:a,onResize:c,onRender:d,style:{width:"100%",height:"100%"}})}var be="#535353",Be={ncs:{name:"NCS",renderer:ye},spectrum:{name:"Spectrum",renderer:Ne},debug:{name:"Debug",renderer:Me}};async function dt(t){let s=t.images?.[0]?.url??t.album?.images?.[0]?.url,[o,r]=await Promise.all([Promise.resolve().then(async()=>{let c=await SpotiKit.Audio.analysis(t.uri);if(!c?.track||!c.segments?.length)throw new Error("Spotify returned no audio segments.");return c}).catch(c=>{console.warn("[Visualizer] Audio analysis unavailable",c)}),Promise.resolve().then(()=>SpotiKit.Colors.extract(s??t.uri)).catch(()=>{})]),a=[r?.light,r?.raw].find(c=>c&&/^#[0-9a-f]{6}$/i.test(c));return{audioAnalysis:o,color:a??be}}var mt="spotikit-visualizer.sphere-color",yt="spotikit-visualizer.use-cover-color",Ge=new EventTarget,Oe={customColor:null,useCoverColor:!0};try{let t=localStorage.getItem(mt),s=t&&/^#[0-9a-f]{6}$/i.test(t)?t:null,o=localStorage.getItem(yt);Oe={customColor:s,useCoverColor:o===null?s===null:o!=="false"}}catch{}function Xt(t){return Ge.addEventListener("change",t),()=>Ge.removeEventListener("change",t)}function Ht(){return Oe}function vt(t){Oe=t;try{localStorage.setItem(yt,String(t.useCoverColor)),t.customColor!==null&&localStorage.setItem(mt,t.customColor)}catch{}Ge.dispatchEvent(new Event("change"))}function qt(){try{let t=localStorage.getItem("spotikit-visualizer.renderer");if(t==="ncs"||t==="spectrum"||t==="debug")return t}catch{}return"ncs"}function gt({popup:t=!1,initialMode:s}){let[o,r]=W(()=>s??qt()),{customColor:a,useCoverColor:c}=v.useSyncExternalStore(Xt,Ht),[d,f]=W(()=>SpotiKit.Player.track),[i,e]=W(),[u,n]=W(0),[l,h]=W(),[p,m]=W(B.correctLatency),[y,g]=W(null),b=Ae(null),E=y?.ownerDocument,L=nt(E)===y&&y!==null,D=ot(E),S=d?.uri??"",C=S.startsWith("spotify:track:"),A=i?.uri===S?i:void 0,M=Be[o].renderer,k=A?.data,x=a??k?.color??be,z=o==="ncs"&&!c?x:k?.color??be,U=k?.audioAnalysis?{audioAnalysis:k.audioAnalysis,color:z}:void 0,I=C&&A!==void 0&&!U;$(()=>{let T=()=>f(SpotiKit.Player.track),P=SpotiKit.Player.on("track",T);return T(),P},[]),$(()=>{if(!d||!C)return;let T=!0;return e(void 0),dt(d).then(P=>{T&&e({uri:S,data:P})}),()=>{T=!1}},[S,C,u]),$(()=>(B.addReference(),()=>B.removeReference()),[]);function H(T){if(r(T),h(void 0),!t)try{localStorage.setItem("spotikit-visualizer.renderer",T)}catch{}}function _(){e(void 0),n(T=>T+1)}async function G(){if(!(!y||!E))try{L?await E.exitFullscreen():await y.requestFullscreen(),b.current&&(b.current.open=!1)}catch{SpotiKit.notify("Could not switch fullscreen mode.")}}async function J(){let T=null;try{if(T=window.open("","","popup,width=960,height=540"),!T){let oe=window.documentPictureInPicture;oe&&(T=await oe.requestWindow({width:960,height:540}))}if(!T)throw new Error("Popup unavailable");T.document.title="Visualizer",T.document.body.style.margin="0";let P=T.document.body.appendChild(T.document.createElement("div")),Y=SpotiKit.ReactDOM.createRoot(P);T.addEventListener("pagehide",()=>Y.unmount(),{once:!0}),Y.render(v.createElement(gt,{popup:!0,initialMode:o}))}catch(P){T?.close(),console.warn("[Visualizer] Could not open a window",P),SpotiKit.notify("Spotify could not open a separate window.")}}let O=S?C?l??(I&&o!=="ncs"?"Audio analysis is unavailable for this track.":void 0):"Visualization is available for music tracks.":"Play a track to start the visualizer.",q=C&&!A;return v.createElement("div",{className:`spotikit-visualizer${t?" spotikit-visualizer--popup":""}${L&&!D?" spotikit-visualizer--idle":""}`,ref:g,onPointerDown:()=>B.resume(),onKeyDown:T=>{B.resume(),T.key==="Escape"&&b.current?.open&&(b.current.open=!1)}},v.createElement("style",null,Xe),U&&!l&&v.createElement(ee.Provider,{value:h},v.createElement(M,{key:`${S}:${o}`,isEnabled:!0,trackData:U})),I&&o==="ncs"&&!l&&v.createElement(ee.Provider,{value:h},v.createElement(ye,{key:S,isEnabled:!0,trackData:{color:z}}),v.createElement("div",{className:"spotikit-visualizer-fallback"},v.createElement("span",{role:"status"},"Audio analysis unavailable \xB7 Ambient motion"),v.createElement("button",{className:"spotikit-visualizer-retry",type:"button",onClick:_},"Retry"))),q&&v.createElement("div",{className:"spotikit-visualizer-status",role:"status","aria-label":"Loading audio analysis"},v.createElement(Fe,null)),!q&&O&&v.createElement("div",{className:"spotikit-visualizer-status",role:"status"},v.createElement("p",null,O),I&&!l&&v.createElement(v.Fragment,null,v.createElement("button",{className:"spotikit-visualizer-retry",type:"button",onClick:_},"Retry"),v.createElement("button",{type:"button",onClick:()=>H("ncs")},"Use ambient NCS"))),v.createElement("details",{className:"spotikit-visualizer-controls",ref:b},v.createElement("summary",{"aria-label":"Visualizer settings",title:"Visualizer settings"},v.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor","aria-hidden":"true"},v.createElement("circle",{cx:"5",cy:"12",r:"1.8"}),v.createElement("circle",{cx:"12",cy:"12",r:"1.8"}),v.createElement("circle",{cx:"19",cy:"12",r:"1.8"}))),v.createElement("div",{className:"spotikit-visualizer-settings"},v.createElement("label",null,"Mode",v.createElement("select",{value:o,onChange:T=>H(T.currentTarget.value)},Object.entries(Be).map(([T,P])=>v.createElement("option",{key:T,value:T},P.name)))),o==="ncs"&&v.createElement(v.Fragment,null,v.createElement("label",null,"Use cover art color",v.createElement("input",{type:"checkbox",checked:c,onChange:T=>{let P=T.currentTarget.checked;vt({customColor:P?a:x,useCoverColor:P})}})),v.createElement("label",null,"Sphere color",v.createElement("input",{type:"color",value:x,disabled:c,onChange:T=>vt({customColor:T.currentTarget.value,useCoverColor:!1})}))),v.createElement("label",null,v.createElement("input",{type:"checkbox",checked:p,onChange:T=>{let P=T.currentTarget.checked;m(P),B.setCorrectLatency(P)}}),"Compensate for audio latency"),v.createElement("button",{type:"button",onClick:G},L?"Exit fullscreen":"Enter fullscreen"),!t&&v.createElement("button",{type:"button",onClick:J},"Open in a separate window"))))}export{gt as default};
