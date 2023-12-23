export default class TextView {
  constructor({ model }) {
    this.$target = document.createElement("div");
    this.TextModel = model;
    this.TextModel.subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    const text = this.TextModel.getText();
    this.$target.innerHTML = `
                <div>${text}</div>
                `;
  }
}
