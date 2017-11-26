const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');
const visionUrl = `https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en&subscription-key=9d069a245b6e460aa7d646948c1864be`;
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
        const data = event.data.val();


        request({
            url: visionUrl,
            method: 'POST',
            json: { url: data.url }
        }, (error, response, body) => {
            let name = 'default';
            console.log(error, response, body)
            if (body && body.categories && body.categories.length) {
                name = body.categories[0].name;
            }

            firestore.collection('items').add({
                depositDate: timestamp,
                name: name
            }); //  TODO: GET NAME GOOGLE VISION
            
            console.log('image uploaded url:', data.url, name);
        });
    });

exports.testFunc = functions.database.ref('/tests')
    .onWrite(event => {
        // TODO: HANDLE UPLOAD STUFF
        console.log('test works');
    });