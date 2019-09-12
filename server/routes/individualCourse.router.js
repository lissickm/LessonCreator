const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// /api/details/2
router.get('/:id', (req, res) => {
    console.log("in get route", req.params.id);
    
    let chosenCourseID = req.params.id;
    const queryText = `SELECT id, name, description, course_id FROM lesson WHERE course_id=$1`;
    pool.query(queryText, [chosenCourseID])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error completing SELECT individual course query', error);
            res.sendStatus(500);
        });
});




module.exports = router;