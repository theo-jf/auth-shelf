const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('hi')
  const queryTxt = `
                SELECT * FROM item`;
  pool.query(queryTxt)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error getting items on server side', err);
      res.sendStatus(500);
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  const newItem = req.body;

  sqlText = `INSERT INTO "item"
                ("description", "image_url", "user_id")
                VALUES
                ($1, $2, $3);`

  pool.query(sqlText, [newItem.description, newItem.image_url, req.user.id])
    .then(response => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('/api/shelf POST query error', error);
      res.sendStatus(500);
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  deleteId = req.params.id;
  
  sqlText = `DELETE FROM "item"
              WHERE "id" = $1
              AND "user_id" = $2;`
  console.log(req.user.id);
  pool.query(sqlText, [deleteId, req.user.id])
  .then(response => {
    console.log(response);
    if (response.rowCount === 0) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
  .catch(error => {
    console.log('/api/shelf DELETE query error', error);
    res.sendStatus(500);
  })


});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
