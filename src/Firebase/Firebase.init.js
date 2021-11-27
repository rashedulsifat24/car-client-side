import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const firebaseInitilization = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInitilization;
