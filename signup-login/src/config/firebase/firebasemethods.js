import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import app from "./firebaseconfig";

const auth = getAuth();

let SignValUser = (objprop)=>{
  return createUserWithEmailAndPassword(auth, objprop.email, objprop.password);
    
};

// let logoutUserval = ()=>{
//     signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
// }
// let CheckUser = ()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
// }

export default SignValUser;