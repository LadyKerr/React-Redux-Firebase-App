const functions = require("firebase-functions");
const admin = require("firebase-admin");
//we can use the admin SDK now to interact with authentication service and firestore service
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Planner, React-App");
});

//a function to add the document in a notification collection in the database
//whenever an action is added, we can call this function to create a notification
exports.createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification) //add the notification that we received
    .then(doc => console.log("notification added", doc));
};

//we are creating a function called projectCreated then attaching it to the
//firestore is listening for when a project is created in the project collection
//when a new project is created, we want to fire the call back furnction onCreate to do something (notrify user that a new project was created)
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const projectData = doc.data(); //here we have access to the content, title, etc of the new project created in firestore
    //here we specify the properties of the notification; what do we want to display in the notification component?
    const notification = {
      content: "Added a new project",
      user: `${projectData.authorFirstName} ${projectData.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return this.createNotification(notification); //notification will be added to the notification collection in firestore and log message to the console.
  });

  

//once deployed the function will run on request via the specific url (its like an endpoint for the function)
