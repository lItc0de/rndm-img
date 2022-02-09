#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 aPosition;
varying vec4 vertexColor;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // Scale to make the output fit the canvas
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  vertexColor = vec4(0.5, 0.0, 0.0, 1.0);
  gl_Position = positionVec4;
}
