import React from "react";
import portraitMain from "../assets/Sh.m.png";

export default function Services() {
  return (
    <div>
      <h1>SERVICES</h1>
      <div className="Portraits">
        <img src={portraitMain} alt="portrait sections main photo" />
        <div className="w-sm h-svh bg-white">
          <h2>Portraits</h2>
          <span>3 hr</span>
          <span> Price Varies</span>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
