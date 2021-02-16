const express = require('express');
const app = express();

//  Sets up a self-contained environment (think - biodome) 
const port = process.env.PORT || 5050;

// this catches every route request - every time location bar changed, function runs
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(port);
    
    // NEXT is the original route request i.e. /api/users
    next(); // => send the user to the route they requested
})

// use the API route file to handle API routes (/api/users, /api/user/id, etc)
app.use("/api", require("./routes/api"));

// Run the app at the PORT 
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})