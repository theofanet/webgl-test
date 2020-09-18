import { mat4, glMatrix } from "gl-matrix";
import { GLContext } from "./core";
class Camera {
    constructor() {
        this.Position = [0, 0, 0];
        this.ProjectionMatrix = mat4.create();
        this.ViewMatrix = mat4.create();
        this.ProjectionViewMatrix = mat4.create();
        this.SetPosition = (position) => {
            this.Position = position;
            this.RecalculateProjectionViewMatrix();
        };
        this.RecalculateProjectionViewMatrix = () => {
            console.log("JJ");
        };
    }
}
class Camera3D extends Camera {
    constructor() {
        super();
        this.Up = [0, 1, 0];
        this.Front = [0, 0, 0];
        this.RecalculateProjectionViewMatrix = () => {
            this.ViewMatrix = mat4.create();
            this.ProjectionViewMatrix = mat4.create();
            mat4.lookAt(this.ViewMatrix, this.Position, this.Front, this.Up);
            mat4.multiply(this.ProjectionViewMatrix, this.ProjectionMatrix, this.ViewMatrix);
            console.log(this.Position);
        };
        const { canvas } = GLContext;
        mat4.perspective(this.ProjectionMatrix, glMatrix.toRadian(90.0), canvas.width / canvas.height, 0.1, 100.0);
    }
}
export { Camera, Camera3D };
//# sourceMappingURL=cameras.js.map