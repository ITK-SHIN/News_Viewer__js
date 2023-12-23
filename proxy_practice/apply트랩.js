function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

////함수 객체의 length 프로퍼티는 함수를 정의할 떄 선언한 매개변수의 개수를 가리킨다.
//[deepdive[256]
console.log(sayHi.length); // 1 (함수 정의부에서 명시한 인수의 개수)
sayHi = delay(sayHi, 3000);

sayHi("John");

console.log(sayHi.length); // 0 (래퍼 함수 정의부엔 인수가 없음)

//Proxy 객체는 타깃 객체에 모든 것을 전달해주므로 훨씬 강력합니다.

//래퍼 함수 대신 Proxy를 사용해봅시다.
function delay1(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

sayHi = delay1(sayHi, 3000);

console.log(sayHi.length); // // 1 (*) 프락시는 "get length" 연산까지 타깃 객체에 전달해줍니다.

sayHi("John1"); // / Hello, John! (3초 후)
