let user = {
  name: "John",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

for (let key in user) console.log(key);

console.log(Object.keys(user));
console.log(Object.values(user));
