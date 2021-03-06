const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Gets all maps for the list in the left nav.
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("maps")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
};

