import { vec3, mat4 } from "gl-matrix";


interface ICamera {
    Position: vec3,

    SetPosition(position: vec3): void;

    ProjectionMatrix: mat4, 
    ViewMatrix: mat4,
    ProjectionViewMatrix: mat4,

    RecalculateViewMatrix(): void,
    RecalculateProjectionMatrix(): void,
    RecalculateProjectionViewMatrix(): void
};

interface ICamera3D extends ICamera {
    FOV: Number,
    Up: vec3, 
    Front: vec3,

    SetFOV(FOV: number): void
}

interface ICamera2D extends ICamera {
    Rotation: vec3,
    ZoomLevel: number,

    SetZoomLevel(zoom: number): void,
    SetRotation(rotation: vec3): void
}

export {
    ICamera, 
    ICamera2D, ICamera3D
}