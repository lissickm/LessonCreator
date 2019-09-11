const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log("in get route");
    
    let chosenCourseID = 2
    const queryText = `SELECT id, name, description, course_id FROM lesson WHERE course_id=$1`
    pool.query(queryText, [chosenCourseID])
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT individual course query', error);
            res.sendStatus(500);
        });
});




module.exports = router;