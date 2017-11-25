// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCSQuDt3Iln5yQ8dqRhefvV5HWq07vDQzk',
    authDomain: '<your-project-authdomain>',
    databaseURL: 'https://junction-2017.firebaseio.com/',
    projectId: 'junction-2017',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
