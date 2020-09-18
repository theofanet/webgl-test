import { mat4, mat3 } from "gl-matrix";


interface IShaderSrclist {
    [key: number]: string[]
}

interface IShaderConstructor {
    new (srcList: IShaderSrclist)
}

interface IShader {
    Bind(): void,
    Unbind(): void,

    CompileSrc(type: GLenum, src: string): WebGLShader,
    GetUniformLocation(name: string): WebGLUniformLocation,

    SetInt(name: string, value: number): void;
    
    SetFloat(name: string, value: number): void;
    SetFloat2(name: string, value: [number, number]): void;
    SetFloat3(name: string, value: [number, number, number]): void;
    SetFloat4(name: string, value: [number, number, number, number]): void;

    SetMat4(name: string, value: mat4): void;
    SetMat3(name: string, value: mat3): void;

    ID: WebGLProgram,
    UniformLocations: {[key: string]: WebGLUniformLocation},
}

export {
    IShaderConstructor,
    IShaderSrclist,
    IShader
}