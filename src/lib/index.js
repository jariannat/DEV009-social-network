import { getAuth, createUserWithEmailAndPassword, /*signInWithEmailAndPassword,*/ signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.js';
import { async } from "regenerator-runtime";

const auth = getAuth(app);

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

export const createUser = async (userEmail, userPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessageText = error.message;
    throw new Error(`Error al registrar usuario: ${errorCode} - ${errorMessageText}`);
  }
};
/*const auth1 = firebase.auth();
auth.signInWithPopup(GoogleAuthProvider).then((result) => {
  const user = result.user;
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.

}).catch((error) => {
  const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  // An error occurred.
});*/
const provider = new GoogleAuthProvider();

export function signInWithGoogle(){

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })  
};

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });