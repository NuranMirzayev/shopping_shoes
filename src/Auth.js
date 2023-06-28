import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAy0RGP17fnoXaIXHQ9YJjOFMBng2uIyps",
    authDomain: "auth-shoes.firebaseapp.com",
    projectId: "auth-shoes",
    storageBucket: "auth-shoes.appspot.com",
    messagingSenderId: "977011423716",
    appId: "1:977011423716:web:702b8040c85dae55a62ff1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();


// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//     .then((res) => {
//         console.log(res);
//         // const nameGoogle = res.user.displayName;
//         // const email = res.user.email;
//         // const photoGoogle = res.user.photoURL;
//                 dispatch(setGoogle({
//                     emailGoogle: user.email,
//                     idGoogle: user.uid,
//                     tokenGoogle: user.refreshToken

//                 }))
        
//         localStorage.setItem("nameGoogle", nameGoogle)
//         localStorage.setItem("email", email)
//         localStorage.setItem("photoGoogle", photoGoogle)

//     }).catch((error) => {
//         console.log(error);
        
//     })
// };

// export const googleOut = () => {
//     const auth = getAuth();
//     signOut(auth)
//     .then(() => {
        
//         localStorage.removeItem("email")
//         localStorage.removeItem("nameGoogle")
//         localStorage.removeItem("photoGoogle")
// }).catch((error) => {
//         console.log(error);

// });
// }