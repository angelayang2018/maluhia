import React from "react";
import Wave from "react-wavify";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap/all";

export default function WaveTransition({ children }) {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={1500}
        onEnter={() => {
          window.scrollTo({ top: 0, left: 0 });
          gsap
            .timeline({ paused: true })
            .set(".wave_container", {
              yPercent: -100,
            })
            .to(".wave_container", {
              yPercent: 0,
              delay: 0.5,
              duration: 1,
              ease: "power2.in"
            })
            .play();
        }}
        
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(".wave_container", {
              yPercent: -100,
              duration: 1,
              ease: "power2.in"
            })
            .play();
        }}
      >
        <div>
          <div className="wave_container">
            <Wave
              fill="#5B668B"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 40,
                amplitude: 40,
                speed: 0.25,
                points: 3,
              }}
            ></Wave>
            <div className="bottom_wave"></div>
          </div>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
}
