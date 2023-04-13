{
  type Text = string;
  const name: Text = 'ellie';
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'ellie',
    age: 12,
  };
  
  // String Literal Types
  type Name = 'name';
  // let ellieName: Name = 'my name'; error
  let ellieName: Name = 'name'

  console.log(ellieName);
}
