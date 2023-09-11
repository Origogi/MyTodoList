import Article from "./article";
import SimpleDisplayArticle from "./simple-display-article";
import DisplayArticleTemplate from "./display-article-template";
import EditableDisplayArticle from "./editable-display-article";

console.log("Template Pattern!!");

const article = new Article(
  "Design Pattern",
  [
    "Template Method Pattern",
    "Strategy Pattern",
    "Observer Pattern",
    "Factory Method Pattern",
  ],
  "Gof Design Pattern"
);

let display: DisplayArticleTemplate = new SimpleDisplayArticle(article);

const element = document.querySelector(".content");

if (element) {
  element.innerHTML = display.displayHtml();
}

document.querySelector(".edit-mode")?.addEventListener("click", (e) => {
  if ((<HTMLInputElement>e.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  if (element) {
    element.innerHTML = display.displayHtml();
  }
});
