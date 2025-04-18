import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import andromedaImage from "../assets/Andromeda-Galaxy.jpg"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function AndromedaGalaxy() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"135%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Andromeda Galaxy</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Andromeda Galaxy (M31, NGC 224) is the nearest large galaxy to the Milky Way, located about 2.48 million light-years from Earth. It is a spiral galaxy with a diameter of approximately 200,000 light-years. The Andromeda Galaxy is one of the few galaxies visible to the naked eye, appearing as a milky blur in the night sky.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: 2.48 million light-years</li>
                <li>Diameter: 200,000 light-years</li>
                <li>Type: Spiral galaxy</li>
                <li>Visible from Earth: Naked-eye visibility</li>
                <li>Past collisions with smaller galaxies have shaped its structure</li>
              </ul>
            </p>
            <p>
              The Andromeda Galaxy has a complex history of interactions with other galaxies. It has merged with smaller galaxies, resulting in features like the star streams and clouds found in its outer regions. Its companion galaxy, M32, shows signs of having been a more massive galaxy before losing much of its outer structure due to interactions with Andromeda.
            </p>
            <p>
              Andromeda is expected to collide with the Milky Way in about 4.5 billion years, forming a new, larger galaxy. This collision will significantly alter the structure of both galaxies, though individual stars are unlikely to collide due to the vast distances between them.
            </p>
          </div>

          <div className="card-image-container">
            <img src={andromedaImage} alt="Andromeda Galaxy" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default AndromedaGalaxy;
