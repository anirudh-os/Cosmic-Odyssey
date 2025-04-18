import React from "react";
import "../css/common_card.css"; // Link to the separate CSS file
import magellanicCloudImage from "../assets/Magellanic-Cloud.webp"; // Corrected to match file name
import spaceVideo from "../assets/Space1.mp4";

function MagellanicCloud() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto" style={{height:"146%"}}>
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>Magellanic Clouds</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              The Magellanic Clouds are two satellite galaxies of the Milky Way, named after Portuguese navigator Ferdinand Magellan. They were discovered by his crew during their first voyage around the world (1519–1522). Initially thought to be part of the Milky Way, they were later recognized as separate galaxies in the 20th century after Edwin Hubble confirmed the extragalactic nature of galaxies.
            </p>
            <p>
              <strong>Quick Facts:</strong>
              <ul>
                <li>Distance: Large Magellanic Cloud (160,000 light-years), Small Magellanic Cloud (190,000 light-years)</li>
                <li>Size: Large Magellanic Cloud (14,000 light-years), Small Magellanic Cloud (7,000 light-years)</li>
                <li>Visible: Southern Hemisphere, not visible from most northern latitudes</li>
                <li>Age: Approximately 13 billion years</li>
                <li>Notable Stars: R136a1, the most massive star known, 265 times the mass of the Sun</li>
              </ul>
            </p>
            <p>
              The Magellanic Clouds are irregular galaxies that are about 22° apart in the sky, near the south celestial pole. The Large Magellanic Cloud (LMC) spans about 5° in the sky, while the Small Magellanic Cloud (SMC) measures less than 2° across. Both galaxies are currently in orbit around the Milky Way and have experienced several tidal encounters with each other and with our galaxy.
            </p>
            <p>
              The Magellanic Clouds are known for their active stellar formation. The Tarantula Nebula (30 Doradus), located in the LMC, is the largest region of ionized gas in the Local Group and contains some of the most massive stars. The Hubble Space Telescope has provided detailed views of star clusters, nebulae, and the types of stars that can now be studied with unprecedented detail.
            </p>
          </div>

          <div className="card-image-container">
            <img src={magellanicCloudImage} alt="Magellanic Cloud" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default MagellanicCloud;
