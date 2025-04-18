import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import whirlpoolImage from "../assets/whirlpool-galaxy.webp"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function WhirlpoolGalaxy() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"120%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Whirlpool Galaxy (M51)</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Whirlpool Galaxy (M51) is one of the most well-known and visually stunning galaxies in the sky, located about 31 million light-years away in the constellation Canes Venatici. This spiral galaxy is particularly famous for its interacting structure with the smaller NGC 5195 galaxy, making it a remarkable subject for study in the field of galactic dynamics.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: 31 million light-years</li>
                <li>Diameter: 76,000 light-years</li>
                <li>Stars: Approx. 160 billion</li>
                <li>Visible: Best observed in the Northern Hemisphere</li>
                <li>Part of the Virgo Cluster</li>
              </ul>
            </p>
            <p>
              The Whirlpool Galaxy’s interaction with NGC 5195 creates spiral arms that are rich in star formation, making it one of the most well-studied galaxies in the universe. The gravitational pull between the two galaxies causes waves of new star formation, contributing to its unique appearance.
            </p>
            <p>
              With a diameter of 76,000 light-years, the Whirlpool Galaxy contains approximately 160 billion stars. It provides astronomers with insights into the processes of galaxy formation and the evolution of spiral galaxies.
            </p>
          </div>

          <div className="card-image-container">
            <img src={whirlpoolImage} alt="Whirlpool Galaxy" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default WhirlpoolGalaxy;
