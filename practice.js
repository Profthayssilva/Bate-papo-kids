var firebaseConfig = {
  apiKey: "AIzaSyC3b3zbcR7dUSfmI-snzX5xKclbpa5fl80",
  authDomain: "eassimquefazmarkting.firebaseapp.com",
  databaseURL: "https://eassimquefazmarkting-default-rtdb.firebaseio.com",
  projectId: "eassimquefazmarkting",
 storageBucket: "eassimquefazmarkting.appspot.com",
  messagingSenderId: "722971396077",
  appId: "1:722971396077:web:8d79a7409e12288137c9e4"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}
