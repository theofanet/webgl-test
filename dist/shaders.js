import { GLContext } from "./core";
const Shader = class Shader {
    constructor(srcList) {
        this.ID = null;
        this.UniformLocations = {};
        this.Bind = () => {
            const { gl } = GLContext;
            gl.useProgram(this.ID);
        };
        this.Unbind = () => {
            const { gl } = GLContext;
            gl.useProgram(null);
        };
        this.CompileSrc = (type, src) => {
            const { gl } = GLContext;
            let s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            let compileStatus = gl.getShaderParameter(s, gl.COMPILE_STATUS);
            if (!compileStatus)
                console.error(`Shader error: ${gl.getShaderInfoLog(s)}`);
            return s;
        };
        this.GetUniformLocation = (name) => {
            if (!this.UniformLocations[name]) {
                const { gl } = GLContext;
                this.UniformLocations[name] = gl.getUniformLocation(this.ID, name);
            }
            return this.UniformLocations[name];
        };
        this.SetInt = (name, value) => {
            const { gl } = GLContext;
            gl.uniform1i(this.GetUniformLocation(name), value);
        };
        this.SetFloat = (name, value) => {
            const { gl } = GLContext;
            gl.uniform1f(this.GetUniformLocation(name), value);
        };
        this.SetFloat2 = (name, value) => {
            const { gl } = GLContext;
            gl.uniform2f(this.GetUniformLocation(name), ...value);
        };
        this.SetFloat3 = (name, value) => {
            const { gl } = GLContext;
            gl.uniform3f(this.GetUniformLocation(name), ...value);
        };
        this.SetFloat4 = (name, value) => {
            const { gl } = GLContext;
            gl.uniform4f(this.GetUniformLocation(name), ...value);
        };
        this.SetMat3 = (name, value) => {
            const { gl } = GLContext;
            gl.uniformMatrix3fv(this.GetUniformLocation(name), false, value);
        };
        this.SetMat4 = (name, value) => {
            const { gl } = GLContext;
            gl.uniformMatrix4fv(this.GetUniformLocation(name), false, value);
        };
        const { gl } = GLContext;
        this.ID = gl.createProgram();
        for (const type in srcList) {
            for (const src of srcList[type])
                gl.attachShader(this.ID, this.CompileSrc(type, src));
        }
        gl.linkProgram(this.ID);
    }
};
export { Shader };
//# sourceMappingURL=shaders.js.map