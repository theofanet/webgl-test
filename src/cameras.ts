import { ICamera, ICamera3D, ICamera2D } from "./interfaces/cameras";
import { vec3, mat4, glMatrix } from "gl-matrix";
import { GLContext } from "./core";


class Camera implements ICamera {
    Position: vec3 = [0, 0, 0];

    ProjectionMatrix: mat4 = mat4.create(); 
    ViewMatrix: mat4 = mat4.create();
    ProjectionViewMatrix: mat4 = mat4.create();

    SetPosition = (position: vec3): void => {
        this.Position = position;
        this.RecalculateProjectionViewMatrix();
    }

    RecalculateViewMatrix = (): void => { throw new Error("Not implemented;"); };
    RecalculateProjectionMatrix = (): void => { throw new Error("Not implemented;"); };

    RecalculateProjectionViewMatrix = (): void => { 
        this.ProjectionViewMatrix = mat4.create();
        mat4.multiply(this.ProjectionViewMatrix, this.ProjectionMatrix, this.ViewMatrix);
    };
}

class Camera3D extends Camera implements ICamera3D {
    Up: vec3 = [0, 1, 0];
    Front: vec3 = [0, 0, 0];
    FOV: number = 90.0;

    constructor(){
        super();
        this.RecalculateProjectionMatrix();
        this.RecalculateViewMatrix();
    }

    SetFOV = (FOV: number): void => {
        this.FOV = FOV;
        this.RecalculateProjectionMatrix();
    }

    RecalculateViewMatrix = (): void => {
        this.ViewMatrix = mat4.create();
        mat4.lookAt(this.ViewMatrix, this.Position, this.Front, this.Up);
        this.RecalculateProjectionViewMatrix();
    }

    RecalculateProjectionMatrix = (): void => {
        const { canvas } = GLContext;
        mat4.perspective(this.ProjectionMatrix, glMatrix.toRadian(this.FOV), canvas.width/canvas.height, 0.1, 100.0);
        this.RecalculateProjectionViewMatrix();
    }
}

class Camera2D extends Camera implements ICamera2D {
    Rotation: vec3 = [0, 0, 0];
    ZoomLevel: number = 1.0;

    SetZoomLevel = (zoom: number): void => {
        this.ZoomLevel = zoom;
        this.RecalculateProjectionMatrix();
    };

    SetRotation = (rotation: vec3): void => {
        this.Rotation = rotation;
        this.RecalculateViewMatrix();
    }

    RecalculateViewMatrix = (): void => {
        this.ViewMatrix = mat4.create();
        mat4.identity(this.ViewMatrix);
        mat4.translate(this.ViewMatrix, this.ViewMatrix, this.Position);
        mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[0], [1, 0, 0]);
        mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[1], [0, 1, 0]);
        mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[2], [0, 0, 1]);
        mat4.invert(this.ViewMatrix, this.ViewMatrix);
        this.RecalculateProjectionViewMatrix();
    }

    RecalculateProjectionMatrix = (): void => {
        const { canvas } = GLContext;
        let aspectRatio = canvas.width / canvas.height;
        mat4.ortho(this.ProjectionMatrix, 
            -aspectRatio * this.ZoomLevel, aspectRatio * this.ZoomLevel, 
            -this.ZoomLevel, this.ZoomLevel, 
            -1.0, 1.0
        );
        this.RecalculateProjectionViewMatrix();
    }
}


export { 
    Camera,
    Camera2D, Camera3D
}   