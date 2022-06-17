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
} from "firebase/firestore";

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
const docRef = doc(db, "orders", "b7XPF9UwtpcV86BdVhaX");
let deletereq = await deleteDoc(docRef);
//this is deleting the post

//realtiem
const q = query(
  collRef,
  where("name", "==", "yash"),
  orderBy("restaurantName", "desc")
);
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

export { app };
