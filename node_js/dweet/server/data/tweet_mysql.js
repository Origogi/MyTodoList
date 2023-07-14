import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import { User } from "./auth_mysql.js";

const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

const Tweet_mysql = sequelize.define("tweet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
Tweet_mysql.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    "id",
    "text",
    "createdAt",
    "userId",
    [Sequelize.col("user.name"), "name"],
    [Sequelize.col("user.username"), "username"],
    [Sequelize.col("user.url"), "url"],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function create(text, userId) {
  return Tweet_mysql.create({
    text,
    userId,
  }).then((data) => {
    return this.getById(data.dataValues.id);
  });
}

export async function getAll() {
  return Tweet_mysql.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
  });
}

export async function getAllByUsername(username) {
  return Tweet_mysql.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: {
        username,
      },
    },
  });
}

export async function getById(id) {
  return Tweet_mysql.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function remove(id) {
  return Tweet_mysql.findByPk(id).then((tweet) => {
    return tweet.destroy();
  });
}

export async function update(id, text) {
  return Tweet_mysql.findByPk(id, INCLUDE_USER).then((tweet) => {
    tweet.text = text;
    return tweet.save();
  });
}
