import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { updateProfile } from "firebase/auth";

const updateUserProfile = (name, photoURL) => {
  if(auth.currentUser) {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
  }
  return Promise.reject("No user logged in");
}


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInuser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log("current user in auth state change", currentUser)
        setUser(currentUser)
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
}, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInuser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
    }



    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);

};

export default AuthProvider;