var SUBSCRIBERS = {};
const SubEvent = (eventClass, callback) => {
    const eventKey = new eventClass().constructor.name;
    if (!SUBSCRIBERS[eventKey])
        SUBSCRIBERS[eventKey] = [];
    SUBSCRIBERS[eventKey].push(callback);
};
const TriggerEvent = (event) => {
    const eventKey = event.constructor.name;
    if (SUBSCRIBERS[eventKey]) {
        for (let cb of SUBSCRIBERS[eventKey])
            if (cb(event))
                return;
    }
};
class Event {
}
class EventWindowResize extends Event {
    constructor(width, height) {
        super();
        this.Width = 0;
        this.Height = 0;
        this.Width = width;
        this.Height = height;
    }
}
class EventKeyPressed extends Event {
    constructor(keycode) {
        super();
        this.Keycode = 0;
        this.Keycode = keycode;
    }
}
class EventKeyReleased extends Event {
    constructor(keycode) {
        super();
        this.Keycode = 0;
        this.Keycode = keycode;
    }
}
class EventMouseButtonPressed extends Event {
    constructor(button) {
        super();
        this.Button = 0;
        this.Button = button;
    }
}
class EventMouseButtonReleased extends Event {
    constructor(button) {
        super();
        this.Button = 0;
        this.Button = button;
    }
}
class EventMouseMove extends Event {
    constructor(x, y) {
        super();
        this.X = 0;
        this.Y = 0;
        this.X = x;
        this.Y = y;
    }
}
class EventMouseScroll extends Event {
    constructor(x, y) {
        super();
        this.X = 0;
        this.Y = 0;
        this.X = x;
        this.Y = y;
    }
}
export { Event, EventWindowResize, EventMouseButtonPressed, EventMouseButtonReleased, EventMouseMove, EventMouseScroll, EventKeyPressed, EventKeyReleased, SubEvent, TriggerEvent };
//# sourceMappingURL=events.js.map