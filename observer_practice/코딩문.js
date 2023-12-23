class Subject {
  constructor() {
    this.observers = [];
  }
  //구독자 리스트 얻기
  getObserversList() {
    return this.observers;
  }

  //구독자
  subscribe(observer) {
    this.observers.push(observer);
  }

  //비구독자
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  //모두에게 알리기
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name); // this.constructor는 Subject
      } catch (err) {
        console.error("error", err);
      }
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(subj) {
    console.log(`${this.name}: notified from ${subj} class!`);
  }
}

const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

console.log(subj.getObserversList());

subj.notifyAll();
