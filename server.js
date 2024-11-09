const express = require('express');


// create express app
const app = express();

// Setup server port
const port = 7777;

/**
 * Code to parse request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const app_v1 = require('./modules/v1/route_manager')
app.use('/api/v1', app_v1);

// listen for requests
try {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });

} catch (error) {
    console.log("Failed to start server.", error);

}









