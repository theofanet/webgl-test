import { GLContext } from "./core";
import { IShader, IShaderSrclist, IShaderConstructor } from "./interfaces/shaders";
import { mat4, mat3 } from "gl-matrix";


const Shader: IShaderConstructor = class Shader implements IShader{
    ID: WebGLProgram = null;
    UniformLocations: {[key: string]: WebGLUniformLocation} = {};

    constructor(srcList: IShaderSrclist) {
        const { gl } = GLContext;

        this.ID = gl.createProgram();

        for(const type in srcList){
            for(const src of srcList[type])
                gl.attachShader(this.ID, this.CompileSrc((type as any), src));
        }
    
        gl.linkProgram(this.ID);
    }

    Bind = () => {
        const { gl } = GLContext;
        gl.useProgram(this.ID);
    };

    Unbind = () => {
        const { gl } = GLContext;
        gl.useProgram(null);
    };

    CompileSrc = (type: GLenum, src: string): WebGLShader => {
        const { gl } = GLContext;

        let s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        
        let compileStatus = gl.getShaderParameter(s, gl.COMPILE_STATUS);
        if(!compileStatus)
            console.error(`Shader error: ${gl.getShaderInfoLog(s)}`);

        return s;
    };

    GetUniformLocation = (name: string): WebGLUniformLocation => {
        if(!this.UniformLocations[name]){
            const { gl } = GLContext;
            this.UniformLocations[name] = gl.getUniformLocation(this.ID, name);
        }

        return this.UniformLocations[name];
    };

    SetInt = (name: string, value: number): void => {
        const { gl } = GLContext;
        gl.uniform1i(this.GetUniformLocation(name), value);
    }

    SetFloat = (name: string, value: number): void => {
        const { gl } = GLContext;
        gl.uniform1f(this.GetUniformLocation(name), value);
    }

    SetFloat2 = (name: string, value: [number, number]): void => {
        const { gl } = GLContext;
        gl.uniform2f(this.GetUniformLocation(name), ...value);
    }

    SetFloat3 = (name: string, value: [number, number, number]): void => {
        const { gl } = GLContext;
        gl.uniform3f(this.GetUniformLocation(name), ...value);
    }

    SetFloat4 = (name: string, value: [number, number, number, number]): void => {
        const { gl } = GLContext;
        gl.uniform4f(this.GetUniformLocation(name), ...value);
    }

    SetMat3 = (name: string, value: mat3): void => {
        const { gl } = GLContext;
        gl.uniformMatrix3fv(this.GetUniformLocation(name), false, value);
    }

    SetMat4 = (name: string, value: mat4): void => {
        const { gl } = GLContext;
        gl.uniformMatrix4fv(this.GetUniformLocation(name), false, value);
    }
}

export { Shader };