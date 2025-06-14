import{r as f,j as R}from"./react-CdjQE9Lx.js";import{ac as z,ad as F,ae as h,af as b,ag as E}from"./vendor-s-JYBGUH.js";import"./react-dom-EE2IDW0c.js";const B=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,_=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function N(l){const{colorStops:v=["#5227FF","#7cff67","#5227FF"],amplitude:x=1,blend:p=.5}=l,i=f.useRef(l);i.current=l;const d=f.useRef(null);return f.useEffect(()=>{const e=d.current;if(!e)return;const a=new z({alpha:!0,premultipliedAlpha:!0,antialias:!0}),o=a.gl;o.clearColor(0,0,0,0),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.canvas.style.backgroundColor="transparent";let r;function s(){if(!e)return;const t=e.offsetWidth,n=e.offsetHeight;a.setSize(t,n),r&&(r.uniforms.uResolution.value=[t,n])}window.addEventListener("resize",s);const u=new F(o);u.attributes.uv&&delete u.attributes.uv;const g=v.map(t=>{const n=new h(t);return[n.r,n.g,n.b]});r=new b(o,{vertex:B,fragment:_,uniforms:{uTime:{value:0},uAmplitude:{value:x},uColorStops:{value:g},uResolution:{value:[e.offsetWidth,e.offsetHeight]},uBlend:{value:p}}});const y=new E(o,{geometry:u,program:r});e.appendChild(o.canvas);let c=0;const C=t=>{c=requestAnimationFrame(C);const{time:n=t*.01,speed:S=1}=i.current;r.uniforms.uTime.value=n*S*.1,r.uniforms.uAmplitude.value=i.current.amplitude??1,r.uniforms.uBlend.value=i.current.blend??p;const w=i.current.colorStops??v;r.uniforms.uColorStops.value=w.map(A=>{const m=new h(A);return[m.r,m.g,m.b]}),a.render({scene:y})};return c=requestAnimationFrame(C),s(),()=>{var t;cancelAnimationFrame(c),window.removeEventListener("resize",s),e&&o.canvas.parentNode===e&&e.removeChild(o.canvas),(t=o.getExtension("WEBGL_lose_context"))==null||t.loseContext()}},[x]),R.jsx("div",{ref:d,className:"aurora-container"})}export{N as default};
