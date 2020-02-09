import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAUxhsX1Hvby9L_wHo3h0hLAK6_6a_AjdE",
    authDomain: "photowall-673df.firebaseapp.com",
    databaseURL: "https://photowall-673df.firebaseio.com",
    projectId: "photowall-673df",
    storageBucket: "photowall-673df.appspot.com",
    messagingSenderId: "748557805484",
    appId: "1:748557805484:web:bd370251a81a48ea6d3c09",
    measurementId: "G-JRX3TNW7L4"
};

firebase.initializeApp(config)



const database = firebase.database()

export { database }

