// do something!
class Nav {
  constructor(data) {
    this.data = data;
    this.$navElement = document.createElement("nav");
    this.$navElement.className = "category-list";
    this.$navElement.innerHTML = `<ul>
          <li id="all" class="category-item active">전체보기</li>
          <li id="business" class="category-item">비즈니스</li>
          <li id="entertainment" class="category-item">엔터테인먼트</li>
          <li id="health" class="category-item">건강</li>
          <li id="science" class="category-item">과학</li>
          <li id="sports" class="category-item">스포츠</li>
          <li id="technology" class="category-item">기술</li>
          </ul>`;
    //p793 참고
    this.$navElement.addEventListener(
      "click",
      this.selectedCategoryList.bind(this)
    );
  }

  selectedCategoryList(e) {
    if (!e.target.matches(".category-list >ul >li")) return;
    [...e.currentTarget.firstElementChild.children].forEach(($list) => {
      $list.classList.toggle("active", $list === e.target);

      if ($list === e.target) {
        this.data.category = e.target.id;
      }
    });
    console.log(this.data);
  }

  get element() {
    return this.$navElement;
  }
}

export default Nav;
