export default abstract class Animal {
  protected constructor(protected name: string) {}

  abstract sound(): void;
}
