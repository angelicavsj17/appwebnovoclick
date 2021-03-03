import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyADBa742oFrVWpLXCLVQooJQynII8lV1Bc",
        authDomain: "novoclik-8b897.firebaseapp.com",
        databaseURL: "https://novoclik-8b897-default-rtdb.firebaseio.com",
        projectId: "novoclik-8b897",
        storageBucket: "novoclik-8b897.appspot.com",
        messagingSenderId: "442127182411",
        appId: "1:442127182411:web:c994c53eceb35faef07bce",
        measurementId: "G-4ECJPYC8K1"

})

 const db = firebaseApp.firestore()
  export {db};

  export const firebaseAnalytics = firebase.analytics();