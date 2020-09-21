import { mat4, glMatrix } from "gl-matrix";
import { GLContext } from "./core";
import { EventWindowResize, SubEvent } from "./events";
class Camera {
    constructor() {
        this.Position = [0, 0, 0];
        this.ProjectionMatrix = mat4.create();
        this.ViewMatrix = mat4.create();
        this.ProjectionViewMatrix = mat4.create();
        this.SetPosition = (position) => {
            this.Position = position;
            this.RecalculateViewMatrix();
        };
        this.RecalculateViewMatrix = () => { };
        this.RecalculateProjectionMatrix = () => { };
        this.RecalculateProjectionViewMatrix = () => {
            mat4.identity(this.ProjectionViewMatrix);
            mat4.multiply(this.ProjectionViewMatrix, this.ProjectionMatrix, this.ViewMatrix);
        };
    }
}
class Camera3D extends Camera {
    constructor() {
        super();
        this.Up = [0, 1, 0];
        this.Front = [0, 0, 0];
        this.FOV = 90.0;
        this.SetFOV = (FOV) => {
            this.FOV = FOV;
            this.RecalculateProjectionMatrix();
        };
        this.RecalculateViewMatrix = () => {
            mat4.lookAt(this.ViewMatrix, this.Position, this.Front, this.Up);
            this.RecalculateProjectionViewMatrix();
        };
        this.RecalculateProjectionMatrix = () => {
            const { canvas } = GLContext;
            mat4.perspective(this.ProjectionMatrix, glMatrix.toRadian(this.FOV), canvas.width / canvas.height, 0.1, 100.0);
            this.RecalculateProjectionViewMatrix();
        };
        this.RecalculateProjectionMatrix();
        this.RecalculateViewMatrix();
        SubEvent(EventWindowResize, _ => {
            this.RecalculateProjectionMatrix();
            return true;
        });
    }
}
class Camera2D extends Camera {
    constructor() {
        super();
        this.Rotation = [0, 0, 0];
        this.ZoomLevel = 1.0;
        this.SetZoomLevel = (zoom) => {
            this.ZoomLevel = zoom;
            this.RecalculateProjectionMatrix();
        };
        this.SetRotation = (rotation) => {
            this.Rotation = rotation;
            this.RecalculateViewMatrix();
        };
        this.RecalculateViewMatrix = () => {
            this.ViewMatrix = mat4.create();
            mat4.identity(this.ViewMatrix);
            mat4.translate(this.ViewMatrix, this.ViewMatrix, this.Position);
            mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[0], [1, 0, 0]);
            mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[1], [0, 1, 0]);
            mat4.rotate(this.ViewMatrix, this.ViewMatrix, this.Rotation[2], [0, 0, 1]);
            mat4.invert(this.ViewMatrix, this.ViewMatrix);
            this.RecalculateProjectionViewMatrix();
        };
        this.RecalculateProjectionMatrix = () => {
            const { canvas } = GLContext;
            let aspectRatio = canvas.width / canvas.height;
            mat4.ortho(this.ProjectionMatrix, -aspectRatio * this.ZoomLevel, aspectRatio * this.ZoomLevel, -this.ZoomLevel, this.ZoomLevel, -1.0, 1.0);
            this.RecalculateProjectionViewMatrix();
        };
        this.RecalculateProjectionMatrix();
        this.RecalculateViewMatrix();
        SubEvent(EventWindowResize, _ => {
            this.RecalculateProjectionMatrix();
            return true;
        });
    }
}
export { Camera, Camera2D, Camera3D };
//# sourceMappingURL=cameras.js.map