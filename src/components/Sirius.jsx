import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import siriusImage from "../assets/Sirius-Star.jpg"; // Corrected to match file name
import spaceVideo from "../assets/Space3.mp4";

function Sirius() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"140%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Sirius</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              Sirius, the brightest star in the night sky, has an apparent magnitude of −1.46. It is a binary star system in the constellation Canis Major. The primary component is a blue-white star, 25.4 times more luminous than the Sun, with a radius 1.71 times that of the Sun and a surface temperature of 9,940 K. It is located 8.6 light-years from Earth, making it one of the closest stars to our solar system.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Apparent magnitude: −1.46</li>
                <li>Distance: 8.6 light-years</li>
                <li>Luminosity: 25.4 times that of the Sun</li>
                <li>Surface temperature: 9,940 K</li>
                <li>Binary star system with Sirius B, a white dwarf</li>
                <li>Visible from: The entire Earth, visible in the Southern and Northern Hemispheres</li>
              </ul>
            </p>
            <p>
              Sirius A, the primary star, is significantly more luminous than the Sun, with a surface temperature much higher than that of our star. The companion star, Sirius B, is a white dwarf, and its discovery marked the first identification of such a star. The two stars orbit each other with an eccentric orbit, and the separation is about 20 times the Earth's distance from the Sun.
            </p>
            <p>
              Sirius has been a subject of astronomical study due to its proximity, brightness, and binary nature. The star system’s high luminosity and the presence of a white dwarf make it an interesting object for understanding stellar evolution.
            </p>
          </div>

          <div className="card-image-container">
            <img src={siriusImage} alt="Sirius" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Sirius;
