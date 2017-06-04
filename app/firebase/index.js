import firebase from "firebase";

//try catch to make firebase only initialize once
try {
    var config = {
        apiKey: "AIzaSyBuF7GFOkUKY1BE4UGklBYDHCALcJmcdDg",
        authDomain: "jtt-todo-app.firebaseapp.com",
        databaseURL: "https://jtt-todo-app.firebaseio.com",
        projectId: "jtt-todo-app",
        storageBucket: "jtt-todo-app.appspot.com",
        messagingSenderId: "205352226925"
    };
    
    firebase.initializeApp(config);

} catch(error) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
