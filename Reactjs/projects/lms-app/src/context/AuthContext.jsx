import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register Function
  const register = async (email, password, displayName, role = 'user') => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update profile
      await updateProfile(userCredential.user, { displayName });

      // Store user role in Firestore (Optional/Best Effort)
      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email,
          displayName,
          role: role,
          createdAt: new Date().toISOString()
        });
      } catch (fsError) {
        console.warn("Firestore user creation failed, but Auth succeeded:", fsError);
      }

      const userWithRole = { ...userCredential.user, role };
      setUser(userWithRole);
      return userWithRole;
    } catch (error) {
      throw error;
    }
  };

  // Login Function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Fetch user role from Firestore
      let role = 'user';
      try {
        const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
        if (userDoc.exists()) {
          role = userDoc.data().role;
        }
      } catch (fsError) {
        console.warn("Could not fetch role from Firestore:", fsError);
      }

      const userWithRole = { ...userCredential.user, role };
      setUser(userWithRole);
      return userWithRole;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        let role = 'user';
        try {
          // Fetch role
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            role = userDoc.data().role;
          }
        } catch (error) {
          console.warn("Error fetching user role on state change:", error);
        }
        setUser({ ...currentUser, role });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
