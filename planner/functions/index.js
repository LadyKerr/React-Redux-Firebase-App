const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//we are creating a function called hello world then attaching it to the
//https on functions and then we telling it on Request we want to send the message
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Planner React-App!");
});

//once deployed the function will run on request via the specific url (its like an endpoint for the function)
