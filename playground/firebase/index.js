import firebase from "firebase";

 var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,  
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
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