import { useState, useEffect } from "react";
import firebaseInitilization from "./../Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
firebaseInitilization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loding, setLoding] = useState(true);
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const auth = getAuth();

  //log out
  const logOut = () => {
    setLoding(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => {
        setLoding(false);
      });
  };

  //login with google
  const logInWithGoogle = (location, history) => {
    setLoding(true);
    const Googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        const destination = location?.state?.from || "/";
        history.push(destination);
      })
      .catch((error) => {})
      .finally(() => {
        setLoding(false);
      });
  };
  //register user
  const registerUser = (email, password, name, history) => {
    setLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email: email, displayName: name };
        // console.log(newUser);
        setUser(newUser);
        //save user data to server
        saveUser(email, name, "post");
        setAuthError("");
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  //sign in with email and pass
  const signInwithEmail = (email, password, location, history) => {
    setLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        const user = userCredential.user;
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoding(false);
      });
  };
  //manage user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoding(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoding(false);
    });
  }, [user.email]);

  //save user to sarver
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch("https://arcane-beach-88686.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  //cheack user admin
  useEffect(() => {
    fetch(`https://arcane-beach-88686.herokuapp.com/users/admin/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setIsAdmin(result.admin);
      });
  }, [user.email]);

  //return
  return {
    isAdmin,
    user,
    logOut,
    loding,
    logInWithGoogle,
    signInwithEmail,
    registerUser,
    authError,
  };
};
export default useFirebase;
