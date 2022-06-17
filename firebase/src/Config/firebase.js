// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC02_hdO043ziiIedAIMCz_XbkgvgYiOHc",
  authDomain: "yashrajillusion2.firebaseapp.com",
  databaseURL: "https://yashrajillusion2-default-rtdb.firebaseio.com",
  projectId: "yashrajillusion2",
  storageBucket: "yashrajillusion2.appspot.com",
  messagingSenderId: "1060282771238",
  appId: "1:1060282771238:web:73006581cd0bc3665643e7",
  measurementId: "G-PNY5NPWMZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore(app);

//collection ref
const collRef = collection(db, "orders");

const res = await getDocs(collRef);
// console.log(res.docs); it return documnet
let data = [];
try {
  res.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
  console.log(data);
} catch (error) {
  console.log(error.message);
}
//create a post req
// let post = await addDoc(collRef, { name: "yash" });

//first is db second is collection third is id that you wan't to delete
const docRef = doc(db, "orders", "11rL5LUH45dV8YbEW9qX");
// let deletereq = await deleteDoc(docRef);
//this is deleting the post

//realtiem
const q = query(collRef, orderBy("createdAt"));
// where("name", "==", "yash")
//orderBy("name")
onSnapshot(q, (snap) => {
  let data = [];
  try {
    snap.forEach((doc) =>
      data.push({ ...doc.data(), id: doc.id, createAt: serverTimestamp })
    );
  } catch (error) {
    console.log(error.message);
  }

  console.log(data);
});

//firestore queries
//queries
// const q = query(collRef, where('name', '==', "yash"))

//get a single item
// let res1 = await getDoc(docRef);
onSnapshot(docRef, (doc) => {
  //every time listen if user update their data as well
  console.log(doc.data());
});

//update document
let res1 = await updateDoc(docRef, {
  restaurantName: "Maha Laxmi Sweets",
});

//firebase auth
// getAuth()
const auth = getAuth();
/*
try {
  let res2 = await createUserWithEmailAndPassword(
    auth,
    "yskyrakjk2@gmail.com",
    "123456"
  );
  console.log(res2.user);
} catch (error) {
  console.log(error.message);
}
*/

//logout
/*
try {
  let res3 = await signOut(auth);
} catch (e) {
  console.log(e.message);
}
*/
//sign in

/*
signInWithEmailAndPassword(auth, "skyrakjk2@gmail.com", "123456")
.then((cred) => console.log(cred))
.catch((e) => console.log(e.message));
*/

onAuthStateChanged(auth, (user) => {
  console.log(user);
});

//for unsubcribe just we need to assign a variable to subscribe that retun function we have to invoke it
export { app };
