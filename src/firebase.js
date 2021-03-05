import React, {createContext, useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {pinActions} from './actions'

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
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



// const FirebaseContext = createContext()
// export{FirebaseContext}

// export default ({children}) => {
//   const dispatch = useDispatch()

//   let firebase = {
//     app: null,
//     database: null
//   }

//   if(!app.apps.length) {
//     app.initializeApp(firebaseConfig);

//     firebase = {
//       app: app,
//       database: app.database(),

//       api: {
//         getPins
//       }
//     }
//   }

//   function getPins () {
//     firebase.database.ref('fatures_map').once('value', snapshot => {
//       let features = [];
    
//       snapshot.forEach(item => {
//         let id = item.key;
//         let data = item.val();
  
//         features.push({
//           id: id,
//           name: data.name,
//           type: data.type,
//           x: data.x,
//           y: data.y,
//           z: data.z
//         })
//       });

//       dispatch(pinActions.setPin(features))
//     })
//   }

//   return (
//     <FirebaseContext.Provider value={firebase}>
//         {children}
//     </FirebaseContext.Provider>
//   )
// }

export default firebase