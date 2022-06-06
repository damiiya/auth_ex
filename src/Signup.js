import React from "react";
import { auth, db } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Signup = () => {
  const id_ref = React.useRef();
  const name_ref = React.useRef();
  const pw_ref = React.useRef();

  const signupFB = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    const user_data = await addDoc(collection(db, "users"), {
      user_id: id_ref.current.value,
      name: name_ref.current.value,
    });
    console.log(user_data.id);
  };

  return (
    <div>
      ID : <input ref={id_ref} /> <br />
      NAME : <input ref={name_ref} /> <br />
      PASSWORD : <input ref={pw_ref} />
      <button onClick={signupFB}>회원가입</button>
    </div>
  );
};

export default Signup;
