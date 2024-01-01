import categories from "../constants/categories.js";
import { categoryProxy } from "../state/categoryState.js";

// do something!
class Nav {
  #categories;

  #$container;

  constructor($container) {
    this.#$container = $container;
    this.#categories = categories; //categorries를 담은 객체
    this.render();
    this.addEvent();
  }

  addEvent() {
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("category-item") &&
        categoryProxy.category !== e.target.id
      ) {
        this.#$container.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        categoryProxy.category = e.target.id;
      }
    });
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `<nav class="category-list">
    <ul>
      ${this.#categories
        .map(
          (category) =>
            `<li id=${category.id} class="category-item ${
              category.id === categoryProxy.category && "active"
            }">${category.name}</li>`
        )
        .join("")}
    </ul>
  </nav>`;
    this.#$container.appendChild(template.content);
  }
}

export default Nav;
