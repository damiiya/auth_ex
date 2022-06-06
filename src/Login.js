import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./shared/firebase";

const Login = () => {
  const id_ref = React.useRef();
  const pw_ref = React.useRef();

  const loginFB = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);
  };

  return (
    <div>
      ID : <input ref={id_ref} /> <br />
      PASSWORD : <input ref={pw_ref} />
      <br />
      <button onClick={loginFB}>로그인</button>
    </div>
  );
};

export default Login;
