import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDsi1EBXspd8sPyAAZtT9tcyGOFOB_y578",
  authDomain: "setc-integrated-system.firebaseapp.com",
  databaseURL: "https://setc-integrated-system.firebaseio.com",
  projectId: "setc-integrated-system",
  storageBucket: "setc-integrated-system.appspot.com",
  messagingSenderId: "772615264551",
  appId: "1:772615264551:web:5c6e76b1292519e8303102"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()

// export const featuresMap = async () => {
//   const snapshot=  await db.collection('features_map').get();
//   return snapshot.forEach((doc) => {
//     doc.data()
//   });
// }

export default firebase