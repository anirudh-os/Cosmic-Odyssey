import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import betelgeuseImage from "../assets/Betelgeuse.jpg"; // Correct image import
import spaceVideo from "../assets/Space1.mp4";

function Betelgeuse() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"100%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Betelgeuse - The Giant's Shoulder</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              Betelgeuse, the second-brightest star in the constellation Orion, marks the hunter's eastern shoulder. Known for its deep red color, it is one of the most luminous stars visible in the night sky. Betelgeuse is a variable star, and its apparent magnitude typically hovers around 0.6. However, it experienced a “Great Dimming” in late 2019, dimming to a magnitude of 1.6 due to a giant ejection of gas and dust.
            </p>
            <p>
              This red supergiant is about 764 times the size of the Sun and is located roughly 548 light-years away from Earth. Over the past 100,000 years, Betelgeuse has shed immense shells of material, the largest extending nearly 7.5 light-years in radius. It is a fascinating object for both astronomers and stargazers alike.
            </p>
          </div>

          <div className="card-image-container">
            <img src={betelgeuseImage} alt="Betelgeuse" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Betelgeuse;
