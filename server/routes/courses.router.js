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


router.post('/', (req, res) => {
    const newCourse = req.body;
    const queryText = `INSERT INTO course ("name", "description", "creator_id") VALUES ($1, $2, $3)`

    const queryValues = [
        newCourse.name,
        newCourse.description,
        newCourse.creator_id
    ]

    pool.query(queryText, queryValues)
        .then(() => {res.sendStatus(201);})
        .catch((error) => {
            console.log('error in completing new course query', error);
            res.sendStatus(500);   
        });
});

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "course" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in delete course: ', error);
        res.sendStatus(500);
    })
});


module.exports = router;