import { GLContext } from "./core";
import { IVertexArray } from "./interfaces/arrays";
import { IIndexBuffer, IVertexBuffer } from "./interfaces/buffers";


class VertexArray implements IVertexArray {
    ID: WebGLVertexArrayObject = null;
    VBs: IVertexBuffer[] = [];
    IB: IIndexBuffer = null;
    
    constructor() {
        const { gl } = GLContext;
        this.ID = gl.createVertexArray();
    }

    Bind = (): void => {
        const { gl } = GLContext;
        gl.bindVertexArray(this.ID);
    };

    Unbind = (): void => {
        const { gl } = GLContext;
        gl.bindVertexArray(null);
    };

    Draw = (): void => {
        const { gl } = GLContext;
        this.Bind();
        gl.drawElements(gl.TRIANGLES, this.IB.Count, gl.UNSIGNED_SHORT, 0);
    };

    AddVertexBuffer = (buffer: IVertexBuffer): void => {
        const { gl } = GLContext;
        this.Bind();
        buffer.Bind();
        for(let a of buffer.Attribs){
            gl.enableVertexAttribArray(a.index);
            gl.vertexAttribPointer(a.index, a.size, a.type, a.normalized, buffer.Stride, a.offset);
        }
        this.VBs.push(buffer);
    };

    SetIndexBuffer = (buffer: IIndexBuffer): void => {
        this.Bind();
        buffer.Bind();
        this.IB = buffer;
    };
}

export {
    VertexArray
};