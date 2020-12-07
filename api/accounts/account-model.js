const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db('accounts');
  },
  getById(id) {
    return db('accounts').where({id}).first();
  },
  create(post) {
    return db('accounts').insert(post);
  },
  update(id, post) {
    return db('accounts').where({id}).update(post);
  },
  delete(id) {
    return db('accounts').where({id}).del();
  }
};