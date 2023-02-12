let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create on intance!");
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

// Object.freeze methode : consuming code cannot modify the instance
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;