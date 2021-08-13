const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCT9AewP8LtRNMgygboBO07azk0oKp5Rus",
  authDomain: "paws-c257e.firebaseapp.com",
  projectId: "paws-c257e",
});

const db = firebase.firestore();

const AdoptData = [
  {
    id: 1,
    image: "",
    name: "Simba",
    gender: "Male",
    age: "10 months",
    breed: "Shih Tzu",
    vaccinated: true,
    petFriendly: false,
    specialNeeds: true,
    childFriendly: false,
  },
  {
    id: 2,
    image: "",
    name: "Leelo",
    gender: "Male",
    age: "7 years",
    breed: "Mixed",
    vaccinated: true,
    petFriendly: false,
    specialNeeds: false,
    childFriendly: false,
  },
  {
    id: 3,
    image: "",
    name: "Mylo",
    gender: "Female",
    age: "6 months",
    breed: "Mixed",
    vaccinated: true,
    petFriendly: true,
    specialNeeds: false,
    childFriendly: false,
  },
  {
    id: 4,
    image: "",
    name: "River",
    gender: "Male",
    age: "1 year",
    breed: "Labrador",
    vaccinated: true,
    petFriendly: false,
    specialNeeds: false,
    childFriendly: true,
  },
];

AdoptData.forEach((obj) => {
  db.collection("Adopt")
    .add(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
