import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import app from "./firebaseconfig";

const auth = getAuth();


let loginUserval = (objprop)=>{
    return  signInWithEmailAndPassword(auth, objprop.email, objprop.password)
    
  }

  export default loginUserval;