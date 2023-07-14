import { getUsers } from "../db/database.js";
import MongoDb from "mongodb";

export async function findById(id) {
  console.log(id);
  return getUsers()
    .findOne({ _id: new MongoDb.ObjectId(id) })
    .then(mapOptionalUser);
}

export async function findByUsername(username) {
  return getUsers().findOne({ username }).then(mapOptionalUser);
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
