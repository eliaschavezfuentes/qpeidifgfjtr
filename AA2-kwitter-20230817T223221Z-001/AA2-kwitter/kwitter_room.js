
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = { apiKey: "AIzaSyC5Izt5kfZyGmLhQKBxDg-dy4sw-FuT-Ws", authDomain: "kwitter2222222.firebaseapp.com", databaseURL:
"https://kwitter2222222-default-rtdb.firebaseio.com",
projectId: "kwitter2222222", storageBucket: "kwitter2222222.appspot.com", messagingSenderId: "189777402490", appId: "1:189777402490:web:fced00455f5873209979c3" }; firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
        user_name = localStorage.getItem("user_name");
        room_name = localStorage.getitem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            puporse: "adding room name"
      });}
      localSterage.setitem("room_name", _room_name)
      windou.localetion.replase("kwitter_page.html");}

      
function getData(){
firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Inicia código
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
          //Termina código
        }
      });
    });
  }
