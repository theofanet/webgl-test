import { 
    IEvent, IEventCallback, IEventSubscribs, ISubEvent, ITriggerEvent,
    IEventKeyPressed, IEventKeyReleased, IEventMouseButtonPressed, IEventMouseButtonReleased, 
    IEventMouseMove, IEventMouseScroll,
    IEventWindowResize
} from "./interfaces/events";


var SUBSCRIBERS: IEventSubscribs = {};


const SubEvent: ISubEvent = (eventClass: any, callback: IEventCallback): void => {
    const eventKey = new eventClass().constructor.name;
    if(!SUBSCRIBERS[eventKey])
        SUBSCRIBERS[eventKey] = [];
    SUBSCRIBERS[eventKey].push(callback);
}

const TriggerEvent: ITriggerEvent = (event: any): void => {
    const eventKey = event.constructor.name;
    
    if(SUBSCRIBERS[eventKey]){
        for(let cb of SUBSCRIBERS[eventKey])
            if(cb(event))
                return;
    }
}

class Event implements IEvent { }

class EventWindowResize extends Event implements IEventWindowResize {
    Width: number = 0;
    Height: number = 0;
    constructor(width: number, height: number) {
        super();
        this.Width = width;
        this.Height = height;
    }
}

class EventKeyPressed extends Event implements IEventKeyPressed {
    Keycode: number = 0;
    constructor(keycode: number) {
        super();
        this.Keycode = keycode;
    }
}

class EventKeyReleased extends Event implements IEventKeyReleased {
    Keycode: number = 0;
    constructor(keycode: number) {
        super();
        this.Keycode = keycode;
    }
}

class EventMouseButtonPressed extends Event implements IEventMouseButtonPressed {
    Button: number = 0;
    constructor(button: number) {
        super();
        this.Button = button;
    }
}

class EventMouseButtonReleased extends Event implements IEventMouseButtonReleased {
    Button: number = 0;
    constructor(button: number) {
        super();
        this.Button = button;
    }
}

class EventMouseMove extends Event implements IEventMouseMove {
    X: number = 0;
    Y: number = 0;
    constructor(x: number, y: number) {
        super();
        this.X = x;
        this.Y = y;
    }
}

class EventMouseScroll extends Event implements IEventMouseScroll{
    X: number = 0;
    Y: number = 0;
    constructor(x: number, y: number) {
        super();
        this.X = x;
        this.Y = y;
    }
}


export {
    Event, 
    EventWindowResize,
    EventMouseButtonPressed, EventMouseButtonReleased, EventMouseMove, EventMouseScroll,
    EventKeyPressed, EventKeyReleased,    

    SubEvent, TriggerEvent, IEventCallback
}