import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isloding, setIsloding] = useState(true);
    const auth = getAuth();
    // create User With Email And Password 
    const emailLogin = (email, password, displayName, location, navigate) => {
        setIsloding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName }
                setUser(newUser);
                // update profile
                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                }).catch((error) => {
                });
                // redirect
                const destination = location?.state?.from || '/';
                navigate(destination);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsloding(false));
    }
    // signIn With Email And Password
    const signInWithEmail = (email, password, location, navigate) => {
        setIsloding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsloding(false));
    }
    // Google Login 
    const googleLogin = (location, navigate) => {
        setIsloding(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setUser(result.user);
                setErrorMessage('');
            }).catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsloding(false));
    }
    // On Auth State Changed 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloding(false)
        });
        return () => unsubscribe;
    }, [auth])
    // logOut 
    const logout = () => {
        setIsloding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsloding(false));
    }
    return {
        user,
        errorMessage,
        isloding,
        googleLogin,
        emailLogin,
        signInWithEmail,
        logout,
    }
}

export default useFirebase;