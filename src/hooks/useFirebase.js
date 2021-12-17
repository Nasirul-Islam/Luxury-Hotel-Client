import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isloding, setIsloding] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    // create User With Email And Password 
    const emailLogin = (email, password, displayName, location, navigate) => {
        setIsloding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName }
                setUser(newUser);
                // save user to db
                saveusertodb(newUser, 'POST');
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
                const user = result.user
                setUser(user);
                // save user to db
                saveusertodb(user, 'PUT');
                // redirect
                const destination = location?.state?.from || '/';
                navigate(destination);
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
    }, [auth]);
    // load admin
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email]);
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
    // save user to database
    const saveusertodb = (user, method) => {
        fetch('http://localhost:5000/user', {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return {
        user,
        errorMessage,
        isloding,
        admin,
        googleLogin,
        emailLogin,
        signInWithEmail,
        logout,
    }
}

export default useFirebase;