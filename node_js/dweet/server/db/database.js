import MongoDb from "mongodb";
import { config } from "../config.js";
import SQ from "sequelize";

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});


export async function connectDB() {
  return MongoDb.MongoClient.connect(config.db.host).then((client) => {
    return client.db();
  });
}
