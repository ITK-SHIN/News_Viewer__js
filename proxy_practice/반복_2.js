let user = {};

user = new Proxy(user, {
  ownKeys(target) {
    return ["a", "b", "c"];
  },

  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

for (let key in user) console.log(key);

console.log(Object.keys(user)); // []
console.log(Object.values(user)); // []
