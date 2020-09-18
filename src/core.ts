import { IGLApp, IGLConfiguration, IGLRun, IGLContext } from "./interfaces/core";


var GLContext: IGLContext = {
    canvas: null,
    gl: null
};

const GLRun: IGLRun = (app: IGLApp, conf: IGLConfiguration): void => {
    GLContext.canvas = document.createElement("canvas");
    GLContext.canvas.id = conf.CanvasID;
    GLContext.canvas.setAttribute("width", `${conf.Width}`);
    GLContext.canvas.setAttribute("Height", `${conf.Height}`);
    document.body.appendChild(GLContext.canvas);

    GLContext.gl = GLContext.canvas.getContext("webgl2");
    app.GLContext = GLContext;

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