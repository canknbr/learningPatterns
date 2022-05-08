// let counter = 0;
// class Counter {
//   constructor() {
//     this.counter = 0;
//   }
//   getInstance() {
//     return this;
//   }
//   getCounter() {
//     return counter;
//   }
//   increment() {
//     return ++counter;
//   }
//   decrement() {
//     return --counter;
//   }
// }

const user = {
  name: 'can kanbur',
  age: 29,
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(`getting ${prop} and ${target[prop]}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(
      `setting ${prop} to ${value} and modifying ${target.name} object`
    );
    return (target[prop] = value);
  },
});

console.log(proxyUser.name);
proxyUser.nationaly = 'turkish';
