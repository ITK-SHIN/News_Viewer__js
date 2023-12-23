//_name 속성을 ​​가진 user 객체와 이에 대한 getter가 있다.
let user = {
  _name: "Guest",
  get name() {
    return this._name;
  },
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop];
  },
});

console.log(userProxy.name); // Guest
