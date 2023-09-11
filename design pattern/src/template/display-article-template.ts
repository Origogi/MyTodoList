import Article from "./article";

export default abstract class DisplayArticleTemplate {
  protected constructor(protected article: Article) {}

  // 재정의 불가능
  public readonly displayHtml = () => {
    return `
            <div class="article">
                ${this.titleHtml()}
                ${this.contentHtml()}
                ${this.footerHtml()}
            </div>
        `;
  };

  protected abstract titleHtml(): string;

  protected abstract contentHtml(): string;

  protected abstract footerHtml(): string;
}
