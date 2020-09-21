import { GLRun, VertexBuffer, IndexBuffer, VertexArray, Shader, Camera3D, Camera2D, EventWindowResize } from "../../";


const vertices2D = new Float32Array([
    // front
    -.5, -.5, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    .5, -.5, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0,
    .5,  .5, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
    -.5,  .5, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0
]);

const indices2D = new Int16Array([
    0, 3, 2,
    2, 1, 0
]);


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

let va3D, va2D;
let shader;
let camera2D, camera3D;

function onKeyDown(e){
    let pos = camera2D.Position;
    if(e.keyCode == 65)
        pos[0] -= 1;
    else if(e.keyCode == 68)
        pos[0] += 1;
    camera2D.SetPosition(pos);
}

function InitScene() {
    const { gl } = this.GLContext;

    camera2D = new Camera2D();
    camera2D.SetPosition([-1, 0, 0]);

    camera3D = new Camera3D();
    camera3D.SetPosition([5, 5, 5]);

    document.addEventListener("keydown", onKeyDown);

    // 2D
    let vb = new VertexBuffer(vertices2D);
    vb.AddAttrib(3, gl.FLOAT);
    vb.AddAttrib(2, gl.FLOAT);
    vb.AddAttrib(3, gl.FLOAT);

    let ib = new IndexBuffer(indices2D);

    va2D = new VertexArray();
    va2D.AddVertexBuffer(vb);
    va2D.SetIndexBuffer(ib);

    // 3D
    vb = new VertexBuffer(vertices);
    vb.AddAttrib(3, gl.FLOAT);
    vb.AddAttrib(2, gl.FLOAT);
    vb.AddAttrib(3, gl.FLOAT);

    ib = new IndexBuffer(indices);

    va3D = new VertexArray();
    va3D.AddVertexBuffer(vb);
    va3D.SetIndexBuffer(ib);

    // Shader
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

    shader.SetMat4("u_ViewProjection", camera2D.ProjectionViewMatrix);
    va2D.Draw();

    shader.SetMat4("u_ViewProjection", camera3D.ProjectionViewMatrix);
    va3D.Draw();
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