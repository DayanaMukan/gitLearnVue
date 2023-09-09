
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC34PSlAYt26ej0l65KiFgcWpLQ7ufV-iU",
  authDomain: "learn-vue-66781.firebaseapp.com",
  projectId: "learn-vue-66781",
  storageBucket: "learn-vue-66781.appspot.com",
  messagingSenderId: "156820387289",
  appId: "1:156820387289:web:e60ed48dd33fd469c895c8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
