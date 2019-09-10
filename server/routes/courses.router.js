const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT id, name, description FROM course';
    pool.query(queryText)
        .then((result) => {res.send(result.rows);})
        .catch((error) => {
            console.log('Error completing SELECT course query', error);
            res.sendStatus(500);
        });
});



module.exports = router;