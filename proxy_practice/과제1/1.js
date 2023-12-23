//존재하지 않는 프로퍼티를 읽으려고 할 때 에러 던지기

//존재하지 않는 프로퍼티 값을 읽으려고 하면 보통은 undefined가 반환됩니다.

//undefined 대신 에러를 던지는 프락시를 만들어봅시다.

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    /* 여기에 코드를 작성하세요. */
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
        //return target[prop];
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`);
      }
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist "age"
