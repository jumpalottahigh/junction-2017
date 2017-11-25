const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://junction-2017.firebaseio.com/",
    storageBucket: "junction-2017.appspot.com",
    projectId: "junction-2017"
});

exports.handleImageUpload = functions.database.ref('/uploads/{uploadKey}')
    .onCreate(event => {
        // TODO: HANDLE UPLOAD STUFF
        // 1. Firestore connect
        const firestore = admin.firestore();
        console.log(firestore);
        const timestamp = new Date().getTime();
        firestore.collection('items').add({
            depositDate: timestamp,
            name: 'kissa' 
        }); //  TODO: GET NAME GOOGLE VISION


        const data = event.data.val();
        console.log('image uploaded url:', data.url);
    });

exports.testFunc = functions.database.ref('/tests')
    .onWrite(event => {
        // TODO: HANDLE UPLOAD STUFF
        console.log('test works');
    });