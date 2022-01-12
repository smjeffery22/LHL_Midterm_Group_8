const express = require('express');
const router = express.Router();

const itemsRoutes = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => {
        const menuItems = data.rows;
        res.render('index', { menuItems });
      })
      .catch((err) => console.log(err.message));
  });

  return router;
};

module.exports = itemsRoutes;
