import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { setDoc, doc } from '@firebase/firestore'
import { db } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      const docRef = doc(db, 'users', cred.user.uid)
      const payload = {
        email: email,
      }
      setDoc(docRef, payload);
    })
    .catch(err => { console.log(err); })
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
