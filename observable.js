export default class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(fn) {
        this.observers.push(fn);
    }

    notifyObservers(data) {
        this.observers.forEach(fn => fn(data));
    }
}