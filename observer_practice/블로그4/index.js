import ChangeTextBtn from "./ChangeTextBtn.js";
import TextModel from "./TextModel.js";
import TextView from "./TextView.js";

const app = document.querySelector("#app");

const textModel = new TextModel();
const textView = new TextView({ model: textModel });
const changeTextBtn = new ChangeTextBtn({ model: textModel });
console.log(textModel);
console.log(textView);
console.log(changeTextBtn);

app.appendChild(textView.$target);
app.appendChild(changeTextBtn.$target);
