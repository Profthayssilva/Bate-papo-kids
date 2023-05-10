var firebaseConfig = {
  apiKey: "AIzaSyC3b3zbcR7dUSfmI-snzX5xKclbpa5fl80",
  authDomain: "eassimquefazmarkting.firebaseapp.com",
  databaseURL: "https://eassimquefazmarkting-default-rtdb.firebaseio.com",
  projectId: "eassimquefazmarkting",
 storageBucket: "eassimquefazmarkting.appspot.com",
  messagingSenderId: "722971396077",
  appId: "1:722971396077:web:8d79a7409e12288137c9e4"
  };
  


  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "batePapoKids_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
 Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "batePapoKids_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

