{
  const obj = {
    name: 'ellie',
  };
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];
  type Gender = Animal['gender'];
  type Keys = keyof Animal;
  const key : Keys = 'age'
}
