import styles from "./styles.module.css";

import LeBron from "../../assets/images/LeBronSlide.png";
import Kobe from "../../assets/images/KobeSlide.png";

export default function Slide() {
  return (
    <>
      <section id={styles.slide_section}>
        <div className="container">
          <div id="carouselExample" className="carousel slide" data-bs-interval="5000">
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className={styles.slide}>
                  <img src={LeBron} alt="LeBron James" />
                  <p>
                    Aos 39 anos, LeBron James atingiu a marca de 40 mil pontos
                    na temporada regular da NBA
                  </p>
                </div>
                <div className={styles.slide}>
                  <img src={Kobe} alt="Kobe Bryant" />
                  <p>
                    Morte de Kobe Bryant: piloto de helicóptero ficou
                    desorientado com mau tempo
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className={styles.slide}>
                  <img src={Kobe} alt="Kobe Bryant" />
                  <p>
                    Morte de Kobe Bryant: piloto de helicóptero ficou
                    desorientado com mau tempo
                  </p>
                </div>
                <div className={styles.slide}>
                  <img src={LeBron} alt="LeBron James" />
                  <p>
                    Aos 39 anos, LeBron James atingiu a marca de 40 mil pontos
                    na temporada regular da NBA
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
