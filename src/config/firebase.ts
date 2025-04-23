import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFTdIe9Ughol0peEDPVVSdpkf5RUMLMZY",
  authDomain: "eitrade2024b1.firebaseapp.com",
  projectId: "eitrade2024b1",
  storageBucket: "eitrade2024b1.appspot.com",
  messagingSenderId: "366290893146",
  appId: "1:366290893146:web:313c234c7ab54ceee2db63",
  measurementId: "G-E4DNPF1JZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
auth.useDeviceLanguage(); // Set language to device default

// Initialize provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, googleProvider, analytics };
export default app;