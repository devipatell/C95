
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCvQ0VxmIgjE-uF-Rnn5r9TvMtkvHhDyLA",
      authDomain: "lets-chat-ae2e4.firebaseapp.com",
      databaseURL: "https://lets-chat-ae2e4-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ae2e4",
      storageBucket: "lets-chat-ae2e4.appspot.com",
      messagingSenderId: "837028151259",
      appId: "1:837028151259:web:de8faf2e12ceff316b31fe"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

