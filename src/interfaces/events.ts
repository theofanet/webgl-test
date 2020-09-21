interface IEvent {
    // static Key: string
    // static GetKey(): string
}

type IEventCallback = (event: IEvent) => boolean;
type ISubEvent = (eventKey: any, callback: IEventCallback) => void;
type ITriggerEvent = (event: any) => void;

type IEventSubscribs = {
    [key: string]: IEventCallback[]
};


// Events Interfaces
interface IEventWindowResize extends IEvent {
    Width: number,
    Height: number
}

interface IEventKey extends IEvent {
    Keycode: number
};

interface IEventMouseButton extends IEvent {
    Button: number
};

interface IEventKeyPressed extends IEventKey {}
interface IEventKeyReleased extends IEventKey {}
interface IEventMouseButtonPressed extends IEventMouseButton {}
interface IEventMouseButtonReleased extends IEventMouseButton {}
interface IEventMouseScroll extends IEvent {
    X: number,
    Y: number
}
interface IEventMouseMove extends IEvent {
    X: number,
    Y: number
}

export {
    IEvent,
    IEventCallback,
    ISubEvent,
    ITriggerEvent, 
    IEventSubscribs, 

    IEventWindowResize,
    IEventKeyPressed, IEventKeyReleased,
    IEventMouseButtonPressed, IEventMouseButtonReleased,
    IEventMouseScroll, IEventMouseMove
}