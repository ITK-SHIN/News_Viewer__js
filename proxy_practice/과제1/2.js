/* //음수 인덱스를 사용해 배열 요소에 접근하기
let array = [1, 2, 3];

array[-1]; // 3, 마지막 요소
array[-2]; // 2, 뒤에서 두 번째 요소
array[-3]; // 1, 뒤에서 세 번째 요소
 */

let array = [1, 2, 3];

array = new Proxy(array, {
  /* 여기에 코드를 작성하세요. */
  get(target, prop) {
    if (prop < 0) {
      return target[target.length + prop];
    } else {
      return target[prop];
    }
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
