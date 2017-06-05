import firebase from "firebase";

 var config = {
    apiKey: "AIzaSyBuF7GFOkUKY1BE4UGklBYDHCALcJmcdDg",
    authDomain: "jtt-todo-app.firebaseapp.com",
    databaseURL: "https://jtt-todo-app.firebaseio.com",
    projectId: "jtt-todo-app",
    storageBucket: "jtt-todo-app.appspot.com",
    messagingSenderId: "205352226925"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: "Todo App",
        version: "1.0.0"
    },
    isRunning: true,
    user: {
        name: "Joe",
        age: 25
    },  

});

var todosRef =  firebaseRef.child("todos");
// todosRef.once("value").then((snapshot)=> {

// })


todosRef.on("child_added", (snapshot)=>{
    console.log("child_added", snapshot.key, snapshot.val());
})



todosRef.push({
    name: "Eat a cookie"
})

todosRef.push({
    name: "Bake a cake"
})