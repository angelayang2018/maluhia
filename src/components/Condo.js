import React from "react";
import Divider from "./Divider";
import Carousel from "./Carousel";
import Button from "./Button";
import FlowerIcon from "./FlowerIcon";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


export default function Condo() {
  


  return (
    <div className="condo">
      <div className="condo_home">
        <img src="https://i.ibb.co/W0LcjQ0/mauivista.webp" alt="mauivista" />
        <img className="wave" src="wave.svg" alt="wave" />
      </div>
      <h1 className="welcome_text">Welcome to Maui Vista</h1>

      <section className="condo_description">
        <div className="condo_des_container">
          <FlowerIcon />
          <h3>MAUI VISTA</h3>
          <h2>Oceanview Tranquility </h2>
          <p>
            Escape to our serene 2-bedroom, 2-bathroom Maui condo, ideal for
            small families or couples seeking relaxation. With a lanai offering
            stunning sea views, this tranquil retreat is perfect for unwinding
            and enjoying picturesque sunsets. Surrounded by lush greenery, the
            condo provides a tropical oasis, with landscaped grounds for
            leisurely walks. Fully equipped with modern amenities and a maximum
            occupancy of 6, our condo offers a peaceful and luxurious stay for
            your Maui getaway.
          </p>
          <img
            src="https://i.ibb.co/WDkFFsS/mauivistafloorplan.png"
            alt="mauivistafloorplan"
          />
        </div>
        <div className="condo_des_images">
          <img
            src="https://i.ibb.co/G9tDxps/waterripples-1.png"
            alt="waterripples-1"
          />
          <img
            src="https://i.ibb.co/w6DB8Lf/mauivistalivingroomlong.png"
            alt="mauivistalivingroomlong"
          />
          <img
            src="https://i.ibb.co/RC2XrZJ/kambeachlong.png"
            alt="kambeachlong"
          />
        </div>
      </section>

      <Divider></Divider>

      <section className="amenities">
        <img
          src="https://i.ibb.co/G9b6KG5/mauivistaflowers.png"
          alt="Maui Vista Flowers near Tennis Courts"
        />
        <div>
          <h3>AMENITIES</h3>
          <h2>This condo comes with</h2>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="condo_gallery">
        <FlowerIcon/>
        <h2>Get an impression</h2>
        <Carousel></Carousel>
        <a href = "https://www.airbnb.com/rooms/51288731?source_impression_id=p3_1709247247_nL2nulQKJTDvkySV"><Button>Book your stay</Button></a>
      </section>

      <Divider></Divider>

      <section className="condo_town">
        <h3>LOCATION</h3>
        <h2>Explore the vibrant coastal town of kihei</h2>
        <div className="tempImage"></div>

        <div>
          <h3>500 METERS</h3>
          <h2>Shops at Wailea</h2>
          <p>
            A short drive away is neighboring Wailea where you can find luxury
            shopping and fine dining. A world of luxury and style nestled
            against the backdrop of Maui's stunning coastline awaits.
          </p>
          <Button>Learn more</Button>
        </div>
      </section>

      <section className="condo_banner">
        <img
          src="https://i.ibb.co/m0hY4nw/whiteflower.png"
          alt="White Flower Icon"
          border="0"
        ></img>
        <h3>DISCOVER PARADISE</h3>
        <h2>Visit maui vista</h2>
        <Button>Book your stay</Button>
      </section>

    </div>
  );
}

const amenities = [
  "Air Conditioning",
  "Beach Access",
  "Free Parking",
  "Patio/ Lanai",
  "TV",
  "Washer and Dryer",
  "Kitchen and cooking basics",
  "WiFi",
  "Dishes and Silverware",
  "Coffee Maker",
  "Hair dryer",
  "Towels",
  "Iron",
  "Smart lock",
];

const words = [
  "Picturesque",
  "Beachside",
  "Tropical",
  "Idyllic",
  "Comfortable",
  "Sunny",
];
