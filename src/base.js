import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3iCOc8CFzDlZ7kM6FqRfjztZAOQK3TjM",
  authDomain: "catch-of-the-day-938d5.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-938d5.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
