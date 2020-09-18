import { ICamera, ICamera3D } from "./interfaces/cameras";
import { vec3, mat4, glMatrix, vec4 } from "gl-matrix";
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

    RecalculateProjectionViewMatrix = (): void => {
        console.log("JJ");
    };
}

class Camera3D extends Camera implements ICamera3D {
    Up: vec3 = [0, 1, 0];
    Front: vec3 = [0, 0, 0];

    constructor(){
        super();
        const { canvas } = GLContext;
        mat4.perspective(this.ProjectionMatrix, glMatrix.toRadian(90.0), canvas.width/canvas.height, 0.1, 100.0);
    }

    RecalculateProjectionViewMatrix = (): void => {
        this.ViewMatrix = mat4.create();
        this.ProjectionViewMatrix = mat4.create();
        mat4.lookAt(this.ViewMatrix, this.Position, this.Front, this.Up);
        mat4.multiply(this.ProjectionViewMatrix, this.ProjectionMatrix, this.ViewMatrix);
        console.log(this.Position);
    };
}


export { 
    Camera,
    Camera3D
}   