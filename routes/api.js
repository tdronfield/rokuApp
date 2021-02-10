const express = require('express');
// Express router handles incoming req and directs them to where they need to go
// Like a traffic cop
const router = express.Router();

// Think of route handlers like PHP functions like redirect_to
router.get("/", (req, res) => {
    // res.json = echo json_encode in php
    res.json({message: "you hit the api route"});
});

// This is the /api/users route handler
router.get("/users", (req, res) => {
    // Run SQL query here
    // res.json(query result here)
    // This is like echoing/writing a message into the browser
    // Just like PHP
    res.json({message: "all users route"});
})

module.exports = router;