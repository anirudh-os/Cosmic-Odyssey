import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file
import triangulumImage from "../assets/Triangulum-Galaxy.jpg"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function TriangulumGalaxy() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"125%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Triangulum Galaxy (M33)</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Triangulum Galaxy (M33) is the second-closest large spiral galaxy to the Milky Way, located about 2.73 million light-years away. Despite its proximity, it’s difficult to spot with the naked eye due to its low surface brightness. It is most often seen with binoculars or a telescope as a faint pinwheel-shaped object.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: 2.73 million light-years</li>
                <li>Diameter: 60,000 light-years</li>
                <li>Stars: Approx. 40 billion</li>
                <li>Visible: Challenging to see with the naked eye</li>
                <li>Part of the Local Group of galaxies</li>
              </ul>
            </p>
            <p>
              The Triangulum Galaxy is the third-largest member of the Local Group, which includes the Milky Way and Andromeda. It has been linked to the Andromeda Galaxy by a stream of hydrogen gas, suggesting the two might eventually collide. Over time, the Triangulum galaxy could be absorbed by Andromeda or participate in the collision between the Milky Way and Andromeda.
            </p>
            <p>
              With a diameter of about 60,000 light-years, Triangulum contains around 40 billion stars, much fewer than the Milky Way’s 100-400 billion. Despite its modest size, the galaxy offers astronomers insights into galaxy formation and evolution.
            </p>
          </div>

          <div className="card-image-container">
            <img src={triangulumImage} alt="Triangulum Galaxy" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default TriangulumGalaxy;
