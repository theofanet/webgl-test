import { vec3, mat4 } from "gl-matrix";


interface ICamera {
    Position: vec3,

    SetPosition(position: vec3): void;

    ProjectionMatrix: mat4, 
    ViewMatrix: mat4,
    ProjectionViewMatrix: mat4,

    RecalculateProjectionViewMatrix(): void
};

interface ICamera3D extends ICamera {
    Up: vec3, 
    Front: vec3
}

export {
    ICamera, ICamera3D
}