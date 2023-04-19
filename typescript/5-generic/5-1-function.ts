{
  function checkNotNullBad(arg: number | null | undefined): number {
    if (!arg) {
      throw new Error("not valid number");
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result);

  function checkNotNull<T>(arg: T | null): T {
    if (!arg) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number: number = checkNotNull(333);
  console.log(number);
  const boal: boolean = checkNotNull(true);
  console.log(boal);
}
