import React from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function FlowerIcon() {
  useGSAP(() => {
    gsap.to(".flower", {
      duration: 5,
      rotate: 360,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <img
      className="flower"
      src="https://i.ibb.co/Dt8Wzvq/flower.png"
      alt="Flower Icon"
    />
  );
}
