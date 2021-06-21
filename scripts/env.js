const firebaseConfig = {
    apiKey: "AIzaSyCwGIcne0V3VQO59uviRQ4gozd9Zij2w8M",
    authDomain: "sitenoticiasweb-31d4e.firebaseapp.com",
    projectId: "sitenoticiasweb-31d4e",
    storageBucket: "sitenoticiasweb-31d4e.appspot.com",
    messagingSenderId: "863421860688",
    appId: "1:863421860688:web:bf08c58af976223501ba55"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();