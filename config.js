import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCUjA7E4L9Yjhvy6FWVl0849T0_yg1j8qw",
    authDomain: "e-library-3e4fc.firebaseapp.com",
    projectId: "e-library-3e4fc",
    storageBucket: "e-library-3e4fc.appspot.com",
    messagingSenderId: "57886684988",
    appId: "1:57886684988:web:173103d1e74db27d3ed039"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();
