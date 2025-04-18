import { useState } from "react";
import "../css/styles1.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo2.svg";
import spaceVideo from "../assets/Space1.mp4";
import ton618 from "../assets/ton618.webp";
import milkyWay from "../assets/milky_way.jpg";
import mars from "../assets/mars.jpg";
import Alpha_Centauri from "../assets/Alpha-Centauri.jpg";
import sirius from "../assets/Sirius-Star.jpg";
import andromeda from "../assets/Andromeda-Galaxy.jpg";
import triangulum from "../assets/Triangulum-Galaxy.jpg";
import whirlpool from "../assets/whirlpool-galaxy.webp";
import crabNebula from "../assets/crab-nebula.webp";
import magellanicCloud from "../assets/Magellanic-Cloud.webp";
import polaris from "../assets/Polaris.webp";
import betelgeuse from "../assets/Betelgeuse.jpg";

function Home() {
  const [sizeValue, setSize] = useState(0);
  const [showMore, setShowMore] = useState(false); // State to control card visibility

  const handleExploreMoreClick = (e) => {
    e.preventDefault(); // Prevent default link behavior (navigation)
    setShowMore(!showMore); // Toggle the visibility of the remaining cards
  };

  return (
    <div>
      <nav id="navbar">
        <div className="navbar-container">
          <button className="hamburger" id="hamburger" onClick={() => setSize(150)}>
            ☰
          </button>
          <header id="logo-header">
            <img id="logo" src={logo} alt="logo" />
            <p>Cosmic Odyssey</p>
          </header>
          <div id="details">
            <div id="nav_info">
              <Link to="/contact">Contact</Link>
              <a href="#">About</a>
            </div>
            <Link to="/signup">
              <button id="sign_up" className="button">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button id="sign_in" className="button">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div id="sidebar" className="sidebar" style={{ width: sizeValue + "px" }}>
          <button className="closebtn" id="closebtn" onClick={() => setSize(0)}>
            &times;
          </button>
          <a href="#">Community</a>
          <a href="#">Resources</a>
          <a href="#">News</a>
        </div>
      </nav>

      <div id="hero">
        <video autoPlay muted loop id="hero-video" preload="auto">
          <source src={spaceVideo} type="video/mp4" />
        </video>
        <div id="hero-overlay">
          <h1 style={{color:"ghostwhite",}}>Welcome to Cosmic Odyssey</h1>
          <p style={{color:"black",fontWeight:"20px"}}>Your Space Encyclopedia</p>
          <a
            href="#"
            className="cta-button"
            onClick={handleExploreMoreClick} // Attach the click handler
            >
            Explore More
          </a>
        </div>
      </div>

      {/* Display the first 3 cards */}
      <div id="cards3">
        <Link to="/ton618" className="card" id="card1">
          <img src={ton618} alt="TON 618" />
          TON 618
          <p>
            TON 618 is, strictly speaking, a quasar, but the name also refers to the supermassive black hole (more properly TON 618*) that powers it, which is one of the largest ever discovered
          </p>
        </Link>
        <Link to="/milkyway" className="card" id="card2">
          <img src={milkyWay} alt="Milky Way" />
          MILKY WAY
          <p>
            Milky Way Galaxy, large spiral system consisting of several hundred billion stars, one of which is the Sun. It takes its name from the Milky Way, the irregular luminous band of stars and gas clouds that stretches across the sky as seen from Earth
          </p>
        </Link>
        <Link to="/mars" className="card" id="card3">
          <img src={mars} alt="Mars" />
          MARS
          <p>
            Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars, is one of Earth's two closest planetary neighbors
          </p>
        </Link>
      </div>

      {/* Display the next 6 cards with conditional rendering */}
      {showMore && (
        <div id="cards6" className={`animated-cards ${showMore ? 'visible' : ''}`}>
          <Link to="/alphaCentauri" className="card" id="card4">
            <img src={Alpha_Centauri} alt="Alpha Centauri" />
            ALPHA CENTAURI
            <p>
              Alpha Centauri, triple star system, the faintest component of which, Proxima Centauri, is the closest star to the Sun, about 4.2 light-years distant.
            </p>
          </Link>
          <Link to="/sirius" className="card" id="card5">
            <img src={sirius} alt="Sirius" />
            SIRIUS
            <p>
              Sirius, brightest star in the night sky. It is a binary star in the constellation Canis Major.
            </p>
          </Link>
          <Link to="/andromedagalaxy" className="card" id="card6">
            <img src={andromeda} alt="Andromeda Galaxy" />
            ANDROMEDA GALAXY
            <p>
              Andromeda Galaxy, great spiral galaxy in the constellation Andromeda, the nearest large galaxy.
            </p>
          </Link>
        </div>
      )}

      {/* Display the next 3 cards (cards 7 to 9) with conditional rendering */}
      {showMore && (
        <div id="cards9" className={`animated-cards ${showMore ? 'visible' : ''}`}>
          <Link to="/triangulumgalaxy" className="card" id="card7">
            <img src={triangulum} alt="Triangulum Galaxy" />
            TRIANGULUM GALAXY
            <p>
              Triangulum Galaxy, is the third-largest member of the Local Group of galaxies, after the Andromeda galaxy
            </p>
          </Link>
          <Link to="/whirlpoolgalaxy" className="card" id="card8">
            <img src={whirlpool} alt="Whirlpool Galaxy" />
            WHIRLPOOL GALAXY
            <p>
              The Whirlpool Galaxy is actively forming new stars, with its spiral arms rich in hydrogen gas, which fuels star formation
            </p>
          </Link>
          <Link to="/crabNebula" className="card" id="card9">
            <img src={crabNebula} alt="Crab Nebula" />
            CRAB NEBULA
            <p>
              The Carina Nebula is a vast star-forming region located about 7,500 light-years away in the constellation Carina.
            </p>
          </Link>
        </div>
      )}

      {/* Display the last set of 3 cards (cards 10 to 12) with conditional rendering */}
      {showMore && (
        <div id="cards12" className={`animated-cards ${showMore ? 'visible' : ''}`}>
          <Link to="/magellanicCloud" className="card" id="card10">
            <img src={magellanicCloud} alt="Magellanic Cloud" />
            MAGELLANIC CLOUD
            <p>
              Nearly 200,000 light-years from Earth, the Large Magellanic Cloud, a satellite galaxy of the Milky Way, floats in space, in a long and slow dance around our galaxy. Vast clouds of gas within it slowly collapse to form new stars.
            </p>
          </Link>
          <Link to="/polaris" className="card" id="card11">
            <img src={polaris} alt="Polaris" />
            POLARIS
            <p>
              Polaris, Earth’s present northern polestar, or North Star, at the end of the “handle” of the so-called Little Dipper in the constellation Ursa Minor.Polaris is actually a triple star system.
            </p>
          </Link>
          <Link to="/betelgeuse" className="card" id="card12">
            <img src={betelgeuse} alt="Betelgeuse" />
            BETELGEUSE
            <p>
              Betelgeuse, second brightest star in the constellation Orion, marking the eastern shoulder of the hunter.Betelgeuse is a red supergiant star roughly 764 times as large as the Sun. For comparison, the diameter of Mars’s orbit around the Sun is 328 times the Sun’s diameter.
            </p>
          </Link>
        </div>
      )}

      <div className="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Home;
