import { GLContext } from "./core";
const GetTypeSize = (type) => {
    const { gl } = GLContext;
    switch (type) {
        case gl.FLOAT:
            return Float32Array.BYTES_PER_ELEMENT;
        case gl.INT:
            return Int32Array.BYTES_PER_ELEMENT;
        case gl.UNSIGNED_INT:
            return Uint16Array.BYTES_PER_ELEMENT;
        default:
            throw Error("GetTypeSize: Type not supproted");
    }
};
class Buffer {
    constructor(type, data, size, count, usage) {
        this.Bind = () => {
            const { gl } = GLContext;
            gl.bindBuffer(this.BufferType, this.ID);
        };
        this.Unbind = () => {
            const { gl } = GLContext;
            gl.bindBuffer(this.BufferType, null);
        };
        const { gl } = GLContext;
        this.Size = size;
        this.Count = count;
        this.BufferUsage = usage;
        this.BufferType = type;
        this.ID = gl.createBuffer();
        this.Bind();
        gl.bufferData(this.BufferType, data, this.BufferUsage);
    }
}
class VertexBuffer extends Buffer {
    constructor(vertices) {
        super(GLContext.gl.ARRAY_BUFFER, vertices, vertices.length * 4, vertices.length, GLContext.gl.STATIC_DRAW);
        this.AddAttrib = (count, type, normalized = false) => {
            this.Attribs.push({
                index: this.Attribs.length,
                size: count,
                type,
                normalized,
                offset: this.Stride
            });
            this.Stride += count * GetTypeSize(type);
        };
        this.Stride = 0;
        this.Attribs = [];
    }
}
class IndexBuffer extends Buffer {
    constructor(indices) {
        super(GLContext.gl.ELEMENT_ARRAY_BUFFER, indices, indices.length * 4, indices.length, GLContext.gl.STATIC_DRAW);
    }
}
export { VertexBuffer, IndexBuffer };
//# sourceMappingURL=buffers.js.map