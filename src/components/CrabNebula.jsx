import React from "react";
import "../css/common_card.css"; // Link to the separate CSS file
import crabNebulaImage from "../assets/crab-nebula.webp"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function CrabNebula() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"135%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Crab Nebula (NGC 1952, M1)</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Crab Nebula (NGC 1952, M1) is one of the most intensely studied bright nebulae in the sky, located in the constellation Taurus, approximately 6,500 light-years away from Earth. It is about 10 light-years in diameter and is believed to be the remnant of a supernova explosion observed by Chinese astronomers on July 4, 1054. This event was visible during the day for 23 days and at night for almost 2 years.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: 6,500 light-years</li>
                <li>Diameter: 10 light-years</li>
                <li>Supernova Observation: July 4, 1054</li>
                <li>Discovered: 1731 by John Bevis</li>
                <li>Cataloged: 1758 as M1 by Charles Messier</li>
                <li>Expansion Rate: 1,100 km/s</li>
              </ul>
            </p>
            <p>
              The Crab Nebula is famous for its association with the Crab Pulsar (NP 0532), discovered in the late 1960s at the center of the nebula. The pulsar is the collapsed remnant of the supernova and emits radiation across the entire electromagnetic spectrum—from radio waves to gamma rays—at a rate of 30 flashes per second.
            </p>
            <p>
              The pulsar provides the energy that sustains the nebula's glow. The Crab Nebula remains one of the most important objects in the study of stellar remnants, offering insights into the life cycle of stars and the formation of neutron stars.
            </p>
          </div>

          <div className="card-image-container">
            <img src={crabNebulaImage} alt="Crab Nebula" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default CrabNebula;
