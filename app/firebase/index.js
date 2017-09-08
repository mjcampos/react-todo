import firebase from 'firebase';

// Initialize Firebase
try {
	var config = {
		apiKey: "AIzaSyAg3P8tUHcOFQLOMZYD8W26UhTM1zN5-Bc",
		authDomain: "campos-todo-app-d1cd5.firebaseapp.com",
		databaseURL: "https://campos-todo-app-d1cd5.firebaseio.com",
		projectId: "campos-todo-app-d1cd5",
		storageBucket: "campos-todo-app-d1cd5.appspot.com",
		messagingSenderId: "495538126387"
	};

	firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;