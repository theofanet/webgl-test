import { GLRun, VertexBuffer, IndexBuffer, VertexArray, Shader, Camera3D } from "../../";
import { mat4, glMatrix } from "gl-matrix";

const vertices = new Float32Array([
    // front
    -1.0, -1.0,  1.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    1.0, -1.0,  1.0, 1.0, 0.0, 0.0, 0.0, 1.0,
    1.0,  1.0,  1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
    -1.0,  1.0,  1.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    // top
    -1.0,  1.0,  1.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    1.0,  1.0,  1.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    1.0,  1.0, -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
    -1.0,  1.0, -1.0, 0.0, 1.0, 0.0, 1.0, 0.0,
    // back
    1.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    -1.0, -1.0, -1.0, 1.0, 0.0, 0.0, 0.0, 1.0,
    -1.0,  1.0, -1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
    1.0,  1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    // bottom
    -1.0, -1.0, -1.0, 0.0, 0.0, 0.0, -1.0, 0.0,
    1.0, -1.0, -1.0, 1.0, 0.0, 0.0, -1.0, 0.0,
    1.0, -1.0,  1.0, 1.0, 1.0, 0.0, -1.0, 0.0,
    -1.0, -1.0,  1.0, 0.0, 1.0, 0.0, -1.0, 0.0,
    // left
    -1.0, -1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
    -1.0, -1.0,  1.0, 1.0, 0.0, -1.0, 0.0, 0.0,
    -1.0,  1.0,  1.0, 1.0, 1.0, -1.0, 0.0, 0.0,
    -1.0,  1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 0.0,
    // right
    1.0, -1.0,  1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
    1.0, -1.0, -1.0, 1.0, 0.0, 1.0, 0.0, 0.0,
    1.0,  1.0, -1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
    1.0,  1.0,  1.0, 0.0, 1.0, 1.0, 0.0, 0.0
]);
  
const indices = new Int16Array([
    // front
    0,  1,  2,
    2,  3,  0,
    // top
    4,  5,  6,
    6,  7,  4,
    // back
    8,  9, 10,
    10, 11,  8,
    // bottom
    12, 13, 14,
    14, 15, 12,
    // left
    16, 17, 18,
    18, 19, 16,
    // right
    20, 21, 22,
    22, 23, 20
]);

const VERTEX_SHADER = `#version 300 es

layout(location=0) in vec3 a_Position;
layout(location=1) in vec3 a_TextPosition;
layout(location=2) in vec3 a_Normal;

uniform mat4 u_ViewProjection;

void main(){
    gl_Position = u_ViewProjection * vec4(a_Position, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

out vec4 color;

void main(){
    color = vec4(1.0, 0.0, 0.0, 1.0);
}`;

let va;
let shader;
let camera;

function onKeyDown(e){
    let pos = camera.Position;
    if(e.keyCode == 65)
        pos[0] -= 1;
    else if(e.keyCode == 68)
        pos[0] += 1;
    camera.SetPosition(pos);
    console.log(e.keyCode);
}

function InitScene() {
    const { canvas, gl } = this.GLContext;

    camera = new Camera3D();
    camera.SetPosition([5, 5, 5]);

    document.addEventListener("keydown", onKeyDown);

    let vb = new VertexBuffer(vertices);
    vb.AddAttrib(3, gl.FLOAT);
    vb.AddAttrib(2, gl.FLOAT);
    vb.AddAttrib(3, gl.FLOAT);

    let ib = new IndexBuffer(indices);

    va = new VertexArray();
    va.AddVertexBuffer(vb);
    va.SetIndexBuffer(ib);

    shader = new Shader({
        [gl.VERTEX_SHADER]: [VERTEX_SHADER],
        [gl.FRAGMENT_SHADER]: [FRAGMENT_SHADER]
    });
}

function UpdateScene() {

}

function DrawScene() {
    const { gl } = this.GLContext;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    shader.Bind();
    shader.SetMat4("u_ViewProjection", camera.ProjectionViewMatrix);

    va.Draw();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style = "margin:0;padding:0;";

    const { innerWidth, innerHeight } = window;
    const conf = {
        CanvasID: "screen",
        Width: innerWidth,
        Height: innerHeight
    }

    const app = {
        Init: InitScene, 
        Update: UpdateScene, 
        Draw: DrawScene
    };

    GLRun(app, conf);
});