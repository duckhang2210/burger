const orm = require('../config/orm.js');

let burger = {
    all: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: (cols, vals, cb) => {
      orm.insertOne("burgers", cols, vals, (res) => {
        cb(res);
      });
    },
    update: (objColVals, condition, cb) => {
      orm.updateOne("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;