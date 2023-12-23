import TextView from "./TextView.js";
import ChangeTextBtn from "./changeTextBtn.js";
import { globalState } from "./observer.js";

const app = document.querySelector("#app");

const textView = new TextView();
const changeTextBtn = new ChangeTextBtn();
console.log(textView);
console.log(changeTextBtn);

app.appendChild(textView.$target);
app.appendChild(changeTextBtn.$target);
console.log(globalState);
