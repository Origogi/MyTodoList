import {db} from '../db/database.js';

export async function findById(id) {
  return db.execute('SELECT * FROM users WHERE id = ?', [id]).then((result) => {
    console.log(result);
    return result[0][0];
  });
}

export async function findByUsername(username) {
  return db.execute('SELECT * FROM users WHERE username = ?', [username]).then((result) => {
    console.log(result);
    return result[0][0];
  });
}

export async function createUser(user) {
  return db.execute(
    'INSERT INTO users (username, password, name, email, url) VALUES (?, ?, ?, ?, ?)',
    [user.username, user.password, user.name, user.email, user.url]
  ).then((result) => {
    console.log(result[0].insertId);
    return result;
  });


}
