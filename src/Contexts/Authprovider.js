import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
export const AuthContext = createContext()
const auth = getAuth(app)
const Authprovider = ({ children }) => {

    const creatUser = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const signIn = (email, password) =>{
   
          return signInWithEmailAndPassword(auth, email, password)
       }
    const authInfo = {
        creatUser,
        signIn
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;