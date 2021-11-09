var firebaseConfig = {
  apiKey: "AIzaSyBZWIVcwIN7ngf8_XMqNfwC-zQUUx2YXdw",

  authDomain: "myfirepro-fecdf.firebaseapp.com",

  databaseURL: "https://myfirepro-fecdf-default-rtdb.firebaseio.com",

  projectId: "myfirepro-fecdf",

  storageBucket: "myfirepro-fecdf.appspot.com",

  messagingSenderId: "914668800487",

  appId: "1:914668800487:web:1d3138a1595ae5961ad542"
}
firebase.initializeApp(firebaseConfig);

function login(){
    
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
     var user=firebase.auth().currentUser;
     user.sendEmailVerification().then(function(){
         window.alert("send verification")
     }).catch(function(error){
         window.alert("error");
     
     });
  
  }