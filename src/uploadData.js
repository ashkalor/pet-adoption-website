const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
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

const CharityList = [
  {
    id: 1,
    logo: "",
    title: "Stray Relief and Animal Welfare",
    url: "www.strawindia.org",
    donateLink: "www.strawindia.org/donate.aspx",
  },
  {
    id: 2,
    logo: "",
    title: "People for Animals Bangalore",
    url: "https://peopleforanimalsbangalore.org",
    donateLink: "https://peopleforanimalsbangalore.org/donate",
  },
  {
    id: 3,
    logo: logo3,
    title: "Karuna Animal Welfare ",
    url: "https://karunaanimalwelfare.org",
    donateLink: "https://karunaanimalwelfare.org/pet-adoption/",
  },
  {
    id: 4,
    logo: logo4,
    title: "Raahat for Animals",
    url: "https://raahatforanimals.org",
    donateLink: "https://raahatforanimals.org/donate",
  },
  {
    id: 5,
    logo: logo5,
    title: "Blue Cross of India",
    url: "https://bluecrossofindia.org",
    donateLink: "https://bluecrossofindia.org/donate-now",
  },
  {
    id: 6,
    logo: "",
    title: "Humane Animal Society",
    url: "https://www.hasindia.org",
    donateLink: "https://www.hasindia.org/donate/",
  },
  {
    id: 7,
    logo: "",
    title: "Sarvodaya Sevabhavi Samstha",
    url: "http://www.sarvodayavets.org",
    donateLink: "http://www.sarvodayavets.org",
  },
];

const ShelterData = [
  {
    id: 1,
    logo: "",
    name: "Charlie’s Animal Rescue Centre",
    contact: "09035999372",
    address:
      "Survey No. 124/1, Mittaganahalli Cross, Kogilu, Near Reva College, Yelahanka.",
    state: "Karnataka",
    city: "Bangalore",
    pin: "560063",
    timings: "11:00 AM to 4:00 PM (Mon-Sat)",
  },
  {
    id: 2,
    logo: "",
    name: "Karuna Animal Shelter",
    contact: "08023411181",
    address: "Veterinary College Campus, Hebbal.",
    state: "Karnataka",
    city: "Bangalore",
    pin: "560024",
    timings: "9:30 AM to 4:30 PM (Mon-Sun)",
  },
  {
    id: 3,
    logo: "",
    name: "The Voice of Stray Dogs",
    contact: "info@strays.in",
    address:
      "1st Floor, Pine Valley Building, Embassy Golf Links, Off Intermediate Ring Road.",
    state: "Karnataka",
    city: "Bangalore",
    pin: "560071",
    timings: "9:00 AM to 6:00 PM (Mon-Sat)",
  },
  {
    id: 4,
    logo: "",
    name: "Animal Rights Fund",
    contact: "09845009681",
    address: "Kumarakrupa Road, Gandhi Nagar",
    state: "Karnataka",
    city: "Bangalore",
    pin: "560009",
    timings: "9:00 AM to 5:00 PM (Mon-Sat)",
  },
];

ShelterData.forEach((obj) => {
  db.collection("Shelter")
    .add(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
