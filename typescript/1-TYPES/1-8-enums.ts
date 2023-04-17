{
  // 타입스트립트에서는 enum 대신 유니온을 더 추천한다. 왜냐하면 타입이 보장되지 않기 때문이다.
  enum Days {
    Monday = 3,
    Tuesday, //1
    Wednesdady,
    Friday,
    Saturday,
    Sunday,
  }
  let day: Days = 0; // 에러가 발생하지 않는다.
  day = Days.Friday;
  // day = 14;  // 에러가 발생하지 않는다.
  console.log(Days.Friday);
}
