import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import alphaCentauriImage from "../assets/Alpha-Centauri.jpg"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function AlphaCentauri() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"130%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Alpha Centauri</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              Alpha Centauri is a star system consisting of three stars: Alpha Centauri A, Alpha Centauri B, and Proxima Centauri. Located 4.2 to 4.4 light-years from Earth, it is the closest star system to our Sun. Proxima Centauri, a red dwarf, is the closest star to Earth after the Sun, at just over 4.24 light-years away. Alpha Centauri A and B are both similar to the Sun but are farther from Earth.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: 4.2 - 4.4 light-years</li>
                <li>Components: Alpha Centauri A, B, and Proxima Centauri</li>
                <li>Proxima Centauri: Closest star to Earth after the Sun</li>
                <li>Brightness: 4th brightest system in the sky</li>
                <li>Visible from: The Southern Hemisphere</li>
                <li>Scientific Interest: Potential for habitable exoplanets and interstellar exploration</li>
              </ul>
            </p>
            <p>
              Alpha Centauri A and B form a binary system, orbiting each other in a wide elliptical orbit. Proxima Centauri, much farther from the binary pair, orbits them at a distance of 0.2 light-years. Due to its proximity and brightness, Alpha Centauri has been a key focus for astronomical studies, particularly for the search for exoplanets in the habitable zone. In 2016, an Earth-sized exoplanet, Proxima b, was discovered orbiting Proxima Centauri, sparking interest in the possibility of life beyond our solar system.
            </p>
          </div>

          <div className="card-image-container">
            <img src={alphaCentauriImage} alt="Alpha Centauri" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default AlphaCentauri;
