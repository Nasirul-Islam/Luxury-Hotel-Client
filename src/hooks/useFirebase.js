import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const auth = getAuth();
    // create User With Email And Password 
    const emailLogin = (email, password, displayName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    // signIn With Email And Password
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    // Google Login 
    const googleLogin = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                // The signed-in user info.
                setUser(result.user);
            }).catch((error) => {
                setErrorMessage(error.message);
            });
    }
    // On Auth State Changed 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [auth])
    // logOut 
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        errorMessage,
        googleLogin,
        emailLogin,
        signInWithEmail,
        logout,
    }
}

export default useFirebase;