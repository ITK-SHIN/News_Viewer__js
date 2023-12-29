// do something!
import Nav from "./components/Nav.js";
import NewsList from "./components/NewsList.js";

const $rootElement = document.getElementById("root");
const NavState = { category: "all" };

const proxyData = new Proxy(NavState, {
  set: async (target, prop, value) => {
    Reflect.set(target, prop, value);
    const newsListElement = new NewsList(proxyData);
    await newsListElement.updateNewsList();
    const container = $rootElement.querySelector(".news-list-container");

    if (container === null) {
      $rootElement.appendChild(newsListElement.element);
    } else {
      container.replaceWith(newsListElement.element);
      return;
    }
  },
});

const navElement = new Nav(proxyData);
$rootElement.appendChild(navElement.element);

const newsList = new NewsList(proxyData);
await newsList.updateNewsList();

$rootElement.appendChild(newsList.element);
