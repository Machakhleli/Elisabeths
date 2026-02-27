// src/data/services.js
import portraitMain from "../assets/Sh.m.png";
import familyMain from "../assets/family.png";
import maternityMain from "../assets/maternity.jpg";
import commercialMain from "../assets/commercial.png";

export const serviceList = [
  {
    id: "srv-portraits",
    title: "Portraits",
    image: portraitMain,
    duration: "3 hours",
    price: "Price Varies",
    path: "/portfolio/portrait", // Matches the route in App.jsx
  },
  {
    id: "srv-family",
    title: "Family",
    image: familyMain,
    duration: "3 hours",
    price: "Price Varies",
    path: "/portfolio/family", // Matches the route in App.jsx
  },
  {
    id: "srv-maternity",
    title: "Maternity",
    image: maternityMain,
    duration: "3 hours",
    price: "Price Varies",
    path: "/portfolio/maternity", // Matches the route in App.jsx
  },
  {
    id: "srv-commercial",
    title: "Commercial",
    image: commercialMain,
    duration: "3 hours",
    price: "Price Varies",
    path: "/portfolio/commercial", // Matches the route in App.jsx
  },
];
