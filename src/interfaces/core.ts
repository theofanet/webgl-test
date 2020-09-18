interface IGLConfiguration {
    CanvasID: string,
    Width: Number,
    Height: Number
}

interface IGLContext {
    canvas: HTMLCanvasElement,
    gl: WebGL2RenderingContext
}

interface IGLApp {
    Init(): void,
    Draw(): void,
    Update(): void,
    GLContext?: IGLContext
}

type IGLRun = (app: IGLApp, conf: IGLConfiguration) => void;

export {
    IGLConfiguration,
    IGLApp,
    IGLRun, 
    IGLContext
};