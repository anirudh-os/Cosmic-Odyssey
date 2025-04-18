import React from "react";
import { Link } from "react-router-dom";
import "../css/common_card.css"; // Link to the separate CSS file

import ton618 from "../assets/ton618.webp"; // Image for TON 618
import spaceVideo from "../assets/Space1.mp4";

function TON_618() {
  return (
    <div className="card-page">
      <video autoPlay muted loop className="Back-video" preload="auto">
          <source src={spaceVideo} type="video/mp4" />
        </video>
      <div id="card-content">
        <div className="card-header">
          <h1>TON 618</h1>
        </div>

        <div className="card-description-wrapper">
          <div className="card-description">
            <p>
              TON 618 is, strictly speaking, a quasar, but the name also refers to
              the supermassive black hole (more properly TON 618*) that powers it,
              which is one of the largest ever discovered.
            </p>
            <p>
              Taking its name from the Tonantzintla Observatory in Mexico, it was
              first observed and catalogued by astronomers Braulio Iriarte and Enrique
              Chavira in 1957.
            </p>
            <p>
              TON 618 lies some 18.2 billion lightyears from Earth, in the constellation
              Canes Venatici.
            </p>
            <p>
              When first observed, TON 618 was thought to be a blue star. Then in 1970
              a radio survey conducted in Italy detected radio emissions coming from the
              object, identifying it as a quasar.
            </p>
            <p>
              A quasar is a type of active galactic nucleus (AGN). An AGN is a region in
              the centre of a galaxy that emits significant amounts of electromagnetic
              radiation, which comes from the material falling into the supermassive black
              hole that lies at the galaxy’s very heart.
            </p>
            <p>
              With about 40 billion times the mass of the Sun and a diameter about 30-40
              times that of our Solar System, TON 618 is a strong contender for the title
              of ‘largest black hole ever discovered’.
            </p>
            <p>
              Though it’s worth noting that there are various ways you can compare black
              holes. So while TON 618 would be many astronomers’ pick for the top spot,
              there are a couple of others, Phoenix A* and the snappily-named SDSS
              J140821.67+025733.2, that also have their supporters.
            </p>
          </div>

          <div className="card-image-container">
            <img src={ton618} alt="TON 618" className="card-img" />
          </div>
        </div>
      </div>

      <div id="footer" style={{bottom:"10px"}}>
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default TON_618;
