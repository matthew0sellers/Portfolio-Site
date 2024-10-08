import React, { useRef, useState } from "react";
// import './App.css'

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"; // For Firestore
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"; // For Auth
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3XNJ5kUYr8VCTdqCOLE0Pi4jkLnBsOhY",
  authDomain: "matts-chat-349d4.firebaseapp.com",
  projectId: "matts-chat-349d4",
  storageBucket: "matts-chat-349d4.appspot.com",
  messagingSenderId: "816245672649",
  appId: "1:816245672649:web:1b0f29a3f6c3ab464f1b18",
  measurementId: "G-ZR0X1E4557",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const FirebaseApp = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Live Chat</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

const SignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button onClick={() => signOut(auth)}> Sign Out </button>
    )
  );
};

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button type="submit" disabled={!formValue}>
          Send a Message
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={"https://api.adorable.io/avatars/23/abott@adorable.png"}
        alt="Avatar"
      />
      <p>{text}</p>
    </div>
  );
};

export default FirebaseApp;
