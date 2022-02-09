#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;


void main() {
  vec2 coord = vTexCoord;

  // vec2 st = gl_FragCoord.xy/u_resolution.xy;

  // R = dependent on pixel location in x-axis, from 0 to 1, G = 0, B = 0, A = 1
  gl_FragColor = vec4(coord.x - 0.2, coord.y - 0.1, 0.4, 0.7);
}
