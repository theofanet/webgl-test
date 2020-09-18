import { GLContext } from "./core";
class VertexArray {
    constructor() {
        this.ID = null;
        this.VBs = [];
        this.IB = null;
        this.Bind = () => {
            const { gl } = GLContext;
            gl.bindVertexArray(this.ID);
        };
        this.Unbind = () => {
            const { gl } = GLContext;
            gl.bindVertexArray(null);
        };
        this.Draw = () => {
            const { gl } = GLContext;
            this.Bind();
            gl.drawElements(gl.TRIANGLES, this.IB.Count, gl.UNSIGNED_SHORT, 0);
        };
        this.AddVertexBuffer = (buffer) => {
            const { gl } = GLContext;
            this.Bind();
            buffer.Bind();
            for (let a of buffer.Attribs) {
                gl.enableVertexAttribArray(a.index);
                gl.vertexAttribPointer(a.index, a.size, a.type, a.normalized, buffer.Stride, a.offset);
            }
            this.VBs.push(buffer);
        };
        this.SetIndexBuffer = (buffer) => {
            this.Bind();
            buffer.Bind();
            this.IB = buffer;
        };
        const { gl } = GLContext;
        this.ID = gl.createVertexArray();
    }
}
export { VertexArray };
//# sourceMappingURL=arrays.js.map