import React from "react";

export default function Mauivista() {
  return (
    <div>
      <h1>Welcome to Maui Vista</h1>

      <section>
        <h3>MAUI VISTA</h3>
        <h2>Oceanview Tranquility</h2>
        <p>
          Escape to our serene 2-bedroom, 2-bathroom Maui condo, ideal for small
          families or couples seeking relaxation. With a lanai offering stunning
          sea views, this tranquil retreat is perfect for unwinding and enjoying
          picturesque sunsets. Surrounded by lush greenery, the condo provides a
          tropical oasis, with landscaped grounds for leisurely walks. Fully
          equipped with modern amenities and a maximum occupancy of 6, our condo
          offers a peaceful and luxurious stay for your Maui getaway.
        </p>
      </section>

      <section>
        <h3>AMENITIES</h3>
        <h2>This condo comes with</h2>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Get an impression</h2>
        <button>Book your stay</button>
      </section>

      <section>
        <h3>LOCATION</h3>
        <h2>Explore the vibrant coastal town of kihei</h2>

        <div>
          <h3>500 METERS</h3>
          <h2>Shops at Wailea</h2>
          <p>
            A short drive away is neighboring Wailea where you can find luxury
            shopping and fine dining. A world of luxury and style nestled
            against the backdrop of Maui's stunning coastline awaits.
          </p>
          <button>Learn more</button>
        </div>
      </section>

      <section>
        <h3>DISCOVER PARADISE</h3>
        <h2>VISIT MAUI VISTA</h2>
        <button>Book your stay</button>
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
