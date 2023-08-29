import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(async (nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAlV1wriJZTGukYVajdGkBOKOUoPEZqJF8",
    authDomain: "nuxt-fire-95549.firebaseapp.com",
    projectId: "nuxt-fire-95549",
    storageBucket: "nuxt-fire-95549.appspot.com",
    messagingSenderId: "21060294861",
    appId: "1:21060294861:web:3ec99bad0ea49d11db3184",
    measurementId: "G-M7JFQNRP5H",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
