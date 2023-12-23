export default class Observer {
  constructor() {
    this._observers = new Set();
  }
  // View에서 render메소드를 등록하는 함수
  subscribe(observer) {
    this._observers.add(observer);
  }
  // Model이 상태가 변경이 될 때 View가 등록한 render함수들을 호출하는 함수
  notify() {
    this._observers.forEach((observer) => observer());
  }
}
