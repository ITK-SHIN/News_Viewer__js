import Observer from "./observer.js";

export default class TextModel extends Observer {
  constructor() {
    super();
    this.text = "hello world";
  }

  getText() {
    return this.text;
  }

  setText(text) {
    this.text = text; //상태 변경
    this.notify(); // 등록된 렌더링 함수들 호출
  }
}
