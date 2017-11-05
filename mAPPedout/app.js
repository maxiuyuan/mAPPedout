
function submitClick(){
  var name = document.getElementById("why").value;
  var desc = document.getElementById('desc').value;
  var loca = document.getElementById('local').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var submit = document.getElementById('submit');

  var geocoder = new google.maps.Geocoder();
  var address = loca;

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();

      var firebaseRef = firebase.database().ref("events");
      var newPostKey = firebase.database().ref().child('events').push().key;

      var postData = {
          name: name,
          description: desc,
          latitude: latitude,
          longitude: longitude,
          date: date,
          id: newPostKey,
          time: time,
        };

     console.log(postData);
     console.log(newPostKey);
  firebaseRef.child(newPostKey).set(postData);
    }
  });
}

 /*var firebaseRef = firebase.database().ref("events");
  var newPostKey = firebase.database().ref().child('events').push().key;

  var postData = {
      name: name,
      description: desc,
      latitude: latitude,
      longitude: longitude,
      date: date,
      id: newPostKey,
      time: time,
    };

 console.log(postData);
 console.log(newPostKey);


    //firebaseRef.child(newPostKey).set(postData);

 console.log(postData);
  };




/*(function(){


  const config = {
    apiKey: "AIzaSyBG_PpA5pndDy11vIDpvZQcDxZSjPY9mVA",
    authDomain: "mappedout-bb4db.firebaseapp.com",
    databaseURL: "https://mappedout-bb4db.firebaseio.com",
    projectId: "mappedout-bb4db",
    storageBucket: "mappedout-bb4db.appspot.com",
    messagingSenderId: "145866489357"
  };
  firebase.initializeApp(config);



//get login-page
  const user =document.getElementById('user');
  const userPass =document.getElementById('userPass');
  const signUpEmail =document.getElementById('signUpEmail');
  const signUpPass =document.getElementById('signUpPass');
  const appLogin =document.getElementById('appLogin');
  const appCreate =document.getElementById('appCreate');

  appLogin.addEventListener('click', e=>{
    const email = user.value;
    const pass = userPass.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
  })

  appCreate.addEventListener('click', e=>{
    const email = user.value;
    const pass = userPass.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
  })

  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log(firebaseUser);
    }
    else{
      console.log('not logged in');
    }
  })

}());*/
