const express = require('express');
// Express router handles incoming req and directs them to where they need to go
// Like a traffic cop
const router = express.Router();

// Import the SQL connection script
const connect = require("../config/sqlConfig");

// Think of route handlers like PHP functions like redirect_to
router.get("/", (req, res) => {
    // Run SQL query here
    // res.json(query result)

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
});

// Movies Route handler
router.get("/movies", (req, res) => {
    // Run an SQL query -> get all movies from DB
    connect.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function(error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;

          res.json(results);
        });
    });
});

// Give route a dynamic handler that can accept parameters
// This will get individual movies  

// Same as using PHP $_GET["id"],
// We are passing in the ID via the route: /api/movies/1 
router.get("/movies/:id", (req, res) => {
    // Run an SQL query -> get all movies from DB
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, function (error, results) {
        if (error) throw error;
        
        // console.log("Results:", results);

        res.json(results);
      });
    
});





module.exports = router;