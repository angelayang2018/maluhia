import React from "react";
import { Link } from "react-router-dom";

export default function Listings() {
  return (
    <div className = "listings">
      <img src = "https://i.ibb.co/Dt8Wzvq/flower.png" alt = "Flower Icon" />
      <h3>OUR CONDOS</h3>
      <h1>Indulge in serenity</h1>
      <p>
        Experience the beauty of Maui while unwinding in our tranquil oasis,
        perfect for a relaxing getaway or romantic escape.
      </p>
      {condos.map((condo, index) => (
        <div className = "condolistings" key={index}>
          <Link to = {condo.link}>
          <img
            src={condo.image}
            alt="Maui Vista Living Room Facing Towards the Lanai"
          />
          </Link>
          <h2>{condo.name}</h2>
          <p>{condo.description}</p>
        </div>
      ))}
    </div>
  );
}

const condos = [
  {
    name: "Maui Vista",
    image: "https://i.ibb.co/4TJKvY3/mauivistalivingroom.png",
    link: "/mauivista",
    description:
      "2 Bedrooms - 2 Bathrooms - Sleeps 6 adults - Beach access and breathtaking views from Lanai",
  },
  {
    name: "Hai Kale",
    image: "https://i.ibb.co/dJF2pZZ/haikalelivingroom.png",
    link: "/haikale",
    description: "1 Bedrooms - 1 Bathrooms - Sleeps 4 adults - Beach front",
  },
];
