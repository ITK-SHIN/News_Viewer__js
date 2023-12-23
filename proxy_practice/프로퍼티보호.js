let user = {
  name: "John",
  _password: "비밀",
  checkPassword(value) {
    return value === this._password;
  },
};

console.log(user._password);

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error(" 읽기 : 접근이 제한됨.");
    }
    let value = target[prop];
    return typeof value === "function" ? value.bind(target) : value;
  },

  set(target, prop, val) {
    if (prop.startsWith("_")) {
      throw new Error("쓰기 : 접근이 제한됨");
    } else {
      target[prop] = val;
      return true;
    }
  },

  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("삭제 : 접근이 제한됨");
    } else {
      delete target[prop];
      return true;
    }
  },

  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

try {
  alert(user._password);
} catch (e) {
  console.log(e.message);
}

try {
  user._password = "test";
} catch (e) {
  console.log(e.message);
}
try {
  delete user._password;
} catch (e) {
  console.log(e.message);
}

for (let key in user) console.log(key);
