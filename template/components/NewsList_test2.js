// do something!
//12월 28일
//import axios from "axios";
const $root = document.querySelector("#root");

const NEWS_API__KEY1 = "4b5fcfae84d64b68ab6bd73c347c8004";
const NEWS_API__KEY2 = "9d8be12d479a435ab2ec5ac3cfc249b5";
const PAGESIZE = 5;
let PAGE = 1;

//newList 컴포넌트의 <div class="news-list-container">
//     <article class="news-list"> 만들기
const createContainer = () => {
  const $fragment = document.createDocumentFragment();
  const $container = document.createElement("div");
  $container.className = "news-list-container";
  const $article = document.createElement("article");
  $article.className = "news-list";

  $container.appendChild($article);
  $fragment.appendChild($container);
  $root.appendChild($fragment);
};

// <section class="news-item"> 만들어서 붙여주기
const getNewsArticle = async (category = "all") => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${
      category === "all" ? "" : category
    }&page=${PAGE++}&pageSize=${PAGESIZE}&apiKey=${NEWS_API__KEY1}`
  );
  const data = res.data.articles;
  console.log(data);

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

    document.querySelector(".news-list").appendChild($newsItem);
  });

  makeScrollObserver();
  const $newsListCon = document.querySelector(".news-list-container");
  if (PAGE > 2) {
    $newsListCon.removeChild($newsListCon.lastElementChild);
  }
  if (data.length === 0) {
    $newsListCon.removeChild($newsListCon.lastElementChild);
  }
};

const makeScrollObserver = () => {
  const $scrollObserver = document.createElement("div");
  $scrollObserver.className = "scroll-observer";
  $scrollObserver.innerHTML = `
  <img src="img/ball-triangle.svg" alt="Loading..." />
  `;

  document.querySelector(".news-list-container").appendChild($scrollObserver);
};

const createIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting }) => {
      //  console.log(entry);
      if (isIntersecting) {
        getNewsArticle();
      } else {
        //      console.log("false");
      }
    });
  });

  const $scrollObserve = document.querySelector(".scroll-observer");
  //console.log($scrollObserve);
  observer.observe($scrollObserve);
};

const NewsList = async () => {
  createContainer();
  await getNewsArticle();
  createIntersectionObserver();
};

export { NewsList };

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
