import logo from "./logo.svg";
import "./App.css";
import { auth, db } from "./shared/firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

import React from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [is_login, setIsLogin] = React.useState(false);

  console.log(auth.currentUser);

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const logout = () => {
    signOut(auth).then(() => {
      setIsLogin(false);
    });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <div className="App">
      <Signup />
      {is_login ? (
        <div>
          <p>환영합니다!</p>
          <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
