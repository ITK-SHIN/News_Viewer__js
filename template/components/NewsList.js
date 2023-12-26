// do something!
//import axios from "axios";

const NEWS_API__KEY1 = "4b5fcfae84d64b68ab6bd73c347c8004";
const NEWS_API__KEY2 = "9d8be12d479a435ab2ec5ac3cfc249b5";
const PAGESIZE = 5;
let PAGE = 1;
const $root = document.querySelector("#root");

const getFirstNewsArticle = async () => {
  const $fragment = document.createDocumentFragment();
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=business&page=${PAGE++}&pageSize=${PAGESIZE}&apiKey=${NEWS_API__KEY2}`
  );
  const data = res.data.articles;
  console.log(data);
  const $container = document.createElement("div");
  const $article = document.createElement("article");
  $container.className = "news-list-container";
  $article.className = "news-list";

  data.forEach((item) => {
    const { title, url } = item;
    let { description, urlToImage } = item;
    urlToImage =
      urlToImage ??
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    description = description ?? "";
    const $newsItem = document.createElement("section");
    $newsItem.className = "news-item";
    $newsItem.innerHTML = `
    <div class="thumbnail">
    <a href=${url} target="_blank" rel="noopener noreferrer">
    <img src=${urlToImage} alt="thumbnail" />
    </a>
    </div>
    <div class="contents">
    <h2>
    <a href=${url} target="_blank" rel="noopener noreferrer">
    ${title}
    </a>
    </h2>
    <p>
    ${description}
    </p>
    </div>
    `;
    $article.appendChild($newsItem);
  });

  $container.appendChild($article);
  $fragment.appendChild($container);
  $root.appendChild($fragment);

  scrollObserver();
};

const scrollObserver = () => {
  const $scrollObserver = document.createElement("div");
  $scrollObserver.className = "scroll-observer";
  $scrollObserver.innerHTML = `
  <img src="img/ball-triangle.svg" alt="Loading..." />
  `;

  document.querySelector(".news-list-container").appendChild($scrollObserver);
};

const getNewsArticle = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=business&page=${PAGE++}&pageSize=${PAGESIZE}&apiKey=${NEWS_API__KEY2}`
  );

  const $article = document.querySelector(".news-list");
  const data = res.data.articles;

  data.forEach((item) => {
    const { title, url } = item;
    let { description, urlToImage } = item;
    urlToImage =
      urlToImage ??
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    description = description ?? "";
    const $newsItem = document.createElement("section");
    $newsItem.className = "news-item";
    $newsItem.innerHTML = `
    <div class="thumbnail">
    <a href=${url} target="_blank" rel="noopener noreferrer">
    <img src=${urlToImage} alt="thumbnail" />
    </a>
    </div>
    <div class="contents">
    <h2>
    <a href=${url} target="_blank" rel="noopener noreferrer">
    ${title}
    </a>
    </h2>
    <p>
    ${description}
    </p>
    </div>
    `;
    $article.appendChild($newsItem);
  });

  console.log(data);
  data.length !== 0 ? scrollObserver() : null;
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      getNewsArticle();
    } else {
      console.log("false");
    }
  });
};

const observeScrollOb = () => {
  const observer = new IntersectionObserver(callback);
  const $scrollObserve = document.querySelector(".scroll-observer");
  //console.log($scrollObserve);
  observer.observe($scrollObserve);
};

const NewsList = async () => {
  await getFirstNewsArticle();
  observeScrollOb();
};

export default NewsList;

/*
const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
*/
/*
business
entertainment
general
health
science
sports
technology
*/
