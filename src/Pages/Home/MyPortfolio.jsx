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
              Developed an interactive quiz tool aimed at helping students reinforce their understanding of various data structures.
              </p>
              <br />
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
              Collaborated with a team to develop a workout recommendation system utilizing data structures such as maps, heaps, priority queues, and more.
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
              Developed a wall-following robot using Arduino for control and a 3D-printed body.
              </p>
              <br />
              <br />
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
