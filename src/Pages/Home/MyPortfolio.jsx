import data from "../../data/index.json";
import { FaGithub } from "react-icons/fa";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">My Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src="./img/placeholder-image.png" alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">
                Data Structures Quizzer
              </h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique
              </p>
            </div>
            <div className="project--buttons">
              <button className="text-sm portfolio--link">Github</button>
              <button className="text-sm portfolio--link">Live Demo</button>
            </div>
          </div>
        </div>
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src="./img/placeholder-image-1.png" alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Workout Coach</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique
              </p>
            </div>
            <div className="project--buttons">
              <a
                href="https://github.com/Jovani54321/fitness-coach"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-sm portfolio--link">Github</button>
              </a>
              <button className="text-sm portfolio--link">Live Demo</button>
            </div>
          </div>
        </div>
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src="./img/placeholder-image-2.png" alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">
                Wall-Following Robot
              </h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique
              </p>
            </div>
            <div className="project--buttons">
              <button className="text-sm portfolio--link">Github</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
