let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  },
];

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users = [...users, created];
  console.log(`Created user: ${user.username}`);

  return created.id;
}
