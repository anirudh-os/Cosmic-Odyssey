import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import marsImage from "../assets/mars.jpg"; // Update to the correct image path
import spaceVideo from "../assets/Space1.mp4";

function Mars() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"120%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Mars</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              Mars, the fourth planet from the Sun, is known as the "Red Planet" due to the iron oxide on its surface, giving it a reddish appearance. It was once warmer and wetter, with evidence of ancient riverbeds and lakes.
            </p>
            <p>
              <strong>Mars quick facts:</strong>
              <ul>
                <li>Radius: 2,106 miles (3,390 km)</li>
                <li>Distance from the Sun: 1.5 AU (142 million miles)</li>
                <li>Day Length: 24.6 hours (Sol)</li>
                <li>Year Length: 687 Earth days</li>
                <li>Moons: Phobos and Deimos</li>
                <li>Atmosphere: Thin, mostly carbon dioxide</li>
                <li>Temperature: Ranges from 70°F (20°C) to -225°F (-153°C)</li>
              </ul>
            </p>
            <p>
              Mars' surface has many geological features such as the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that stretches over 3,000 miles.
            </p>
            <p>
              While there's no liquid water today, evidence suggests Mars had rivers and lakes billions of years ago. Currently, water exists in the form of ice and briny water in the polar regions.
            </p>
          </div>

          <div className="card-image-container">
            <img src={marsImage} alt="Mars" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Mars;
