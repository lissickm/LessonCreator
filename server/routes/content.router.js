const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newContent = req.body;
    const queryText = `INSERT INTO content ("description", "url", "lesson_id", "prior_content") VALUES ($1, $2, $3, $4)`


    const queryValues = [
        newContent.description,
        newContent.url,
        newContent.lesson_id,
        newContent.prior_content
    ]

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('error in completing new content query', error);
            res.sendStatus(500);
        });

})




module.exports = router;