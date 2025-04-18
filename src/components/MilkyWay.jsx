import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import milkyway from "../assets/milky_way.jpg"; // Update to the correct image path
import spaceVideo from "../assets/Space1.mp4";

function MilkyWay() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"146%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>The Milky Way</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Milky Way is a barred spiral galaxy around 13.6 billion years old with large pivoting arms stretching out across the cosmos.
            </p>
            <p>
              <strong>Milky Way quick facts:</strong>
              <ul>
                <li>Galaxy type: Barred spiral</li>
                <li>Age: 13.6 billion years (and counting)</li>
                <li>Size: 100,000 light-years across</li>
                <li>Number of stars: about 200 billion</li>
                <li>Rotation time: 250 million years</li>
              </ul>
            </p>
            <p>
              Our home galaxy's disk is about 100,000 light-years in diameter and just 1000 light-years thick, according to Las Cumbres Observatory.
            </p>
            <p>
              Just as Earth orbits the sun, the solar system orbits the center of the Milky Way. Despite hurtling through space at speeds of around 515,000mph (828,000kmph), our solar system takes approximately 250 million years to complete a single revolution, according to Interesting Engineering. The last time our planet was in this position, dinosaurs were just emerging and mammals were yet to evolve.
            </p>
            <p>
              If the center of the Milky Way were a city, we would be living in suburbia, about 25,000 to 30,000 light-years from the city center. Life in the outskirts is good; we find ourselves nestled in one of the smaller neighborhoods, the Orion-Cygnus Arm, sandwiched between larger Perseus and Carina-Sagittarius arms. If we were to travel inwards towards the city center, we would find the Scutum-Centaurus and Norma arms.
            </p>
          </div>

          <div className="card-image-container">
            <img src={milkyway} alt="Milky Way" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer" style={{bottom:"0px",marginBottom:"0px"}}>
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default MilkyWay;
