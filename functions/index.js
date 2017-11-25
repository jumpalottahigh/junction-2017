const functions = require('firebase-functions');

exports.handleImageUpload = functions.database.ref('/uploads/{uploadKey}')
    .onCreate(event => {
        // TODO: HANDLE UPLOAD STUFF
        const data = event.data.val();
        console.log('image uploaded url:', data.url);
    });

exports.testFunc = functions.database.ref('/tests')
    .onWrite(event => {
        // TODO: HANDLE UPLOAD STUFF
        console.log('test works');
    });