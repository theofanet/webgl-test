import { IIndexBuffer, IVertexBuffer, IAttribPointer, IBuffer } from "./interfaces/buffers";
import { GLContext } from "./core";


const GetTypeSize = (type: GLenum): number => {
    const { gl } = GLContext;

    switch(type){
        case gl.FLOAT:
            return Float32Array.BYTES_PER_ELEMENT;
        case gl.INT:
            return Int32Array.BYTES_PER_ELEMENT;
        case gl.UNSIGNED_INT:
            return Uint16Array.BYTES_PER_ELEMENT;
        default:
            throw Error("GetTypeSize: Type not supproted");
    }
}

class Buffer implements IBuffer {
    ID: WebGLBuffer;
    Size: number;
    Count: number;
    BufferUsage: GLenum;
    BufferType: GLenum;
    
    constructor(type: GLenum, data: any, size: number, count: number, usage: GLenum) {
        const { gl } = GLContext;

        this.Size = size;
        this.Count = count;
        this.BufferUsage = usage;
        this.BufferType = type;

        this.ID = gl.createBuffer();
        this.Bind();
        gl.bufferData(this.BufferType, data, this.BufferUsage);
    }

    Bind = (): void => {
        const { gl } = GLContext;
        gl.bindBuffer(this.BufferType, this.ID);
    }

    Unbind = (): void => {
        const { gl } = GLContext;
        gl.bindBuffer(this.BufferType, null);
    }
}

class VertexBuffer extends Buffer implements IVertexBuffer {
    Attribs: IAttribPointer[];
    Stride: number;

    constructor(vertices: Float32Array) {
        super(GLContext.gl.ARRAY_BUFFER, vertices, vertices.length * 4, vertices.length, GLContext.gl.STATIC_DRAW);
        this.Stride = 0;
        this.Attribs = [];
    }

    AddAttrib = (count: number, type: GLenum, normalized: boolean=false): void => {
        this.Attribs.push({
            index: this.Attribs.length,
            size: count, 
            type,
            normalized,
            offset: this.Stride
        });
        this.Stride += count * GetTypeSize(type);
    }
}

class IndexBuffer extends Buffer implements IIndexBuffer {
    constructor(indices: Uint16Array) {
        super(GLContext.gl.ELEMENT_ARRAY_BUFFER, indices, indices.length * 4, indices.length, GLContext.gl.STATIC_DRAW);
    }
}

export {
    VertexBuffer,
    IndexBuffer
}