import { IVertexBuffer, IIndexBuffer } from "./buffers";


interface IVertexArray {
    ID: WebGLVertexArrayObject,

    Bind(): void,
    Unbind(): void,

    Draw(): void,

    AddVertexBuffer(buffer: IVertexBuffer): void,
    SetIndexBuffer(buffer: IIndexBuffer): void,

    VBs: IVertexBuffer[],
    IB: IIndexBuffer
};

export {
    IVertexArray
}