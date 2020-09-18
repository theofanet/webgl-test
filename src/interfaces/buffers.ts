interface IBuffer {
    ID: WebGLBuffer,
    
    Bind():  void,
    Unbind():  void,

    Count: number,
    Size: number,

    BufferType: GLenum,
    BufferUsage: GLenum
};

interface IAttribPointer {
    index: number,
    size: number,
    type: GLenum,
    normalized: boolean,
    offset: number
};

interface IVertexBuffer extends IBuffer {
    AddAttrib(count: number, type: GLenum, normalized?: boolean): void,
    Attribs: IAttribPointer[],
    Stride: number
};

interface IIndexBuffer extends IBuffer {

};

export { 
    IVertexBuffer,
    IIndexBuffer,
    IAttribPointer,
    IBuffer
}