const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newContent = req.body;
    console.log('post new content:', newContent);
    const queryText = `INSERT INTO content ("description", "url", "lesson_id", "prior_content") VALUES ($1, $2, $3, $4)`


    const queryValues = [
        newContent.description,
        newContent.url,
        newContent.chosenLessonID,
        newContent.prior_content
    ]

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('error in completing new content query', error);
            res.sendStatus(500);
        });

})

router.get('/prior/:id', (req, res) => {
    let priorContentID = req.params.id;
    const queryText = `SELECT * FROM content WHERE "lesson_id"=$1 AND "prior_content">0`;
    pool.query(queryText, [priorContentID])
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT content query', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    console.log('in put route')
    const contentEdit = req.body;
    const contentID = req.params.id
    console.log(req.body);
    const queryText = `UPDATE content
SET description=$1, url=$2
WHERE id=$3`;

    const queryValues = [
        contentEdit.description,
        contentEdit.url,
        contentID
    ]

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('error in completing lesson edit query', error);
            res.sendStatus(500);
        });
});




module.exports = router;