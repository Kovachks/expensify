import * as firebase from 'firebase';  


// Initialize Firebase
const config = {
    apiKey: "AIzaSyDlvrC9flDooZyzBZR2-KEYjmh3Oi-IqAg",
    authDomain: "expensify-e4a77.firebaseapp.com",
    databaseURL: "https://expensify-e4a77.firebaseio.com",
    projectId: "expensify-e4a77",
    storageBucket: "expensify-e4a77.appspot.com",
    messagingSenderId: "487824397426"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Keith Kovach',
    age: 28,
    isSingle: false,
    location: {
        city: 'Charlotte',
        state: 'NC',
        country: 'United States'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(29);
database.ref('location/city').set('Dillworth')

database.ref('attributes').set({
    height: 78,
    weight: 200
})