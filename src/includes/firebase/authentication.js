import firebase from 'firebase';

class Firebase {

    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyDd4vcbA7M4zgMb034Tti5h_uWvXPMOphc",
            authDomain: "simple-todo-app-c370f.firebaseapp.com",
            databaseURL: "https://simple-todo-app-c370f.firebaseio.com",
            storageBucket: "simple-todo-app-c370f.appspot.com"
        });
    }

}

module.exports = Firebase;