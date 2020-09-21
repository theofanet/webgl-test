import { IGLApp, IGLConfiguration, IGLRun, IGLContext } from "./interfaces/core";
import { IEventCallback, EventWindowResize, TriggerEvent } from "./events";


var GLContext: IGLContext = {
    canvas: null,
    gl: null
};

const OnWindowResized = () => {
    const { innerWidth, innerHeight } = window;
    GLContext.canvas.setAttribute("width", `${innerWidth}`);
    GLContext.canvas.setAttribute("Height", `${innerHeight}`);
    GLContext.gl.viewport(0, 0, innerWidth, innerHeight);
    TriggerEvent(new EventWindowResize(innerWidth, innerHeight));
}

const GLRun: IGLRun = (app: IGLApp, conf: IGLConfiguration): void => {
    GLContext.canvas = document.createElement("canvas");
    GLContext.canvas.id = conf.CanvasID;
    GLContext.canvas.setAttribute("width", `${conf.Width}`);
    GLContext.canvas.setAttribute("Height", `${conf.Height}`);
    document.body.appendChild(GLContext.canvas);

    GLContext.gl = GLContext.canvas.getContext("webgl2");
    app.GLContext = GLContext;

    window.addEventListener("resize", () => OnWindowResized());

    app.Init();

    const MainLoop: FrameRequestCallback = () => {
        app.Update();
        app.Draw();
        requestAnimationFrame(MainLoop);
    }

    MainLoop(0);
};

export {
    GLRun,
    GLContext
}