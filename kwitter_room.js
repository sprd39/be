const firebaseConfig = {
    apiKey: "AIzaSyDzjH33y5Yjd7zikCZ4tqWkP6Gu8ruTuDE",
    authDomain: "kwitter-8238b.firebaseapp.com",
    databaseURL: "https://kwitter-8238b-default-rtdb.firebaseio.com",
    projectId: "kwitter-8238b",
    storageBucket: "kwitter-8238b.appspot.com",
    messagingSenderId: "674709079125",
    appId: "1:674709079125:web:8ddd2b96aa684b9279c0dc"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
    
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "index.html";
}

