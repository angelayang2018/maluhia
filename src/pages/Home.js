import React from "react";
import Divider from "../components/Divider";
import CarouselLarge from "../components/CarouselLarge";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home_hero">
        <div>
        
          <img src="https://i.ibb.co/Dt8Wzvq/flower.png" alt="Flower Icon" />
          <h2>Essence of Maui Living</h2>
          <p>
            With pristine beaches just a short stroll away, you can spend your
            days basking in the sun, snorkeling in crystal-clear waters, or
            simply unwinding with a tropical drink in hand.{" "}
          </p>
          <Link to = "/listings"><Button>Explore Condos</Button></Link>
        </div>
      </div>

      <Divider></Divider>
      <CarouselLarge></CarouselLarge>
    </div>
  );
}
