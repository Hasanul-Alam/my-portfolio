import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const loginWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          // console.log('current user: ', currentUser)
          setLoading(false);
        });
        return () => {
          return unSubscribe();
        }
      },[])

      const logout = () => {
        setLoading(true);
        return signOut(auth)
      }

      const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        loginWithEmailPassword,
        logout
      }
    
      return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;


