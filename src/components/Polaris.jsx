import React from "react";
import "../css/common_card.css"; // Link to the separate CSS file
import polarisImage from "../assets/Polaris.webp"; // Corrected image path
import spaceVideo from "../assets/Space1.mp4";

function Polaris() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"100%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Polaris - The North Star</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              Polaris, or the North Star, is famous for appearing nearly stationary in the northern sky while other stars seem to rotate around it. It marks the direction due north and has guided travelers for centuries. Despite common belief, it's not the brightest star, ranking 48th in brightness.
            </p>
            <p>
              Located about 434 light-years away, Polaris is a yellow supergiant, shining with the luminosity of 1,260 suns. It is part of a triple star system, with the primary star, Polaris A, being the brightest. Polaris is also a Cepheid variable star, which means its brightness fluctuates periodically.
            </p>
            <p>
              The star's position makes it a reliable navigation tool, especially in the Northern Hemisphere. It has served as a celestial guide for sailors and even escaped slaves seeking freedom in the past.
            </p>
          </div>

          <div className="card-image-container">
            <img src={polarisImage} alt="Polaris" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Polaris;
