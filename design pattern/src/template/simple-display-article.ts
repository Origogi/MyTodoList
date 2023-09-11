import DisplayArticleTemplate from "./display-article-template";
import Article from "./article";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
    constructor(article : Article) {
        super(article);
    }


    titleHtml() {
        return `<h1>${this.article.title}</h1>`;
    }
    contentHtml() {
        const items = this.article.content.map((content) => `<li>${content}</li>`).join("");
        return `<ul>${items}</ul>`;
    }
    footerHtml() {
        return `<h3>${this.article.footer}</h3>`;
    }
}