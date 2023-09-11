import DisplayArticleTemplate from "./display-article-template";
import Article from "./article";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article);
  }

  titleHtml() {
    return `<div><span>제목</span><input value="${this.article.title}"></div>`;
  }

  contentHtml() {
    const items = this.article.content.map((item) => `${item}\n`);
    return `<span>내용</span><br/><textarea cols="50" rows="5">${items.join(
      ""
    )}</textarea>`;
  }

  footerHtml() {
    return `<h3>${this.article.footer}</h3>`;
  }
}
