let user = {
  _name: "Guest",
  get name() {
    return this._name;
  },
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop]; // (*) target = user
  },
});

let admin = {
  __proto__: userProxy,
  _name: "Admin",
};

// Expected: Admin
console.log(admin.name); // outputs: Guest (?!?)
