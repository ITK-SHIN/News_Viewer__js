// set(target, property, value, receiver):

let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val === "number") {
      target[prop] = val;
      return true; //  값을 쓰는 게 성공 처리시 [[Set]]은 반드시 true를 반환해야 한다.
    } else {
      return false; //  값을 쓰는 게 실패 처리시 [[Set]]은 반드시 false를 반환해야 한다.
    }
  },
});

numbers.push(1);
numbers.push(2);
console.log("Length is: " + numbers.length);

try {
  numbers.push("test");
} catch (e) {
  console.log(`에러방생 ${e}`);
}
console.log(numbers);
