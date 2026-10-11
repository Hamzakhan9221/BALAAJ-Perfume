import sultan from "../assets/Sultan.jpeg";
import hoorain from "../assets/Hoorain.jpeg";
import signature from "../assets/Signature.jpeg";
import wisaal from "../assets/Wisaal.jpeg";

export const perfumes = [
  {
    id: 1,
    type: "perfume",
    name: "Sultan by Balaaj – Arabian Oud 50ml",
    price: 3000,
    image: sultan,
    color: "#3a2a1a",
    tag: "New",
  },
  {
    id: 2,
    type: "perfume",
    name: "HOORAIN by BALAAJ – Floral 60ml",
    price: 5000,
    image: hoorain,
    color: "#5b2340",
    tag: "New",
  },
  {
    id: 3,
    type: "perfume",
    name: "Balaaj Signature Gold – Royal EDP",
    price: 6000,
    image: signature,
    color: "#a8812f",
    tag: "Sold Out",
    soldOut: true,
  },
  {
    id: 4,
    type: "perfume",
    name: "WISAAL by BALAAJ – Luxury 50ml",
    price: 2999,
    image: wisaal,
    color: "#1f3a5b",
  },
];

export const belts = [
  { id: 11, type: "belt", name: "Formal Dark Blue Leather Belt", price: 4000, color: "#1f2f4f" },
  { id: 12, type: "belt", name: "Casual Brown Leather Belt", price: 4000, color: "#5a3a22" },
  { id: 13, type: "belt", name: "Maroon Premium Cow Leather Belt", price: 4000, color: "#5b1a24" },
  { id: 14, type: "belt", name: "Suede Brown Leather Belt", price: 4000, color: "#6b4a2e" },
];