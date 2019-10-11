export  class Observer {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, func) {
 
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(func);
  }

  emit(eventName, data) {
  
    if (this.events[eventName]) {
      this.events[eventName].forEach(func => {
        func(data);
      });
    }
  }

  unsubscribe(eventName, func) {
    this.events[eventName] = this.events[eventName].filter(
      eventFn => func !== eventFn
    );
  }
}