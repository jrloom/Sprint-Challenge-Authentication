const db = require("../database/dbConfig");

function findUser(filter) {
  return db("users").where(filter);
}

function findUserById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

async function insert(user) {
  const [id] = await db("users").insert(user);
  return findUserById(id);
}

module.exports = {
  findUser,
  findUserById,
  insert
};
