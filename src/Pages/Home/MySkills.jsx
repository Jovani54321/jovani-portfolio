import data from "../../data/index.json";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
          {/* LANGUAGES */}
          <div className="skills-animation-test">
          <div className="skills--section--card">
            {/* <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div> */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Lanugages</h3>
              <div className="bullets--test">
                <div className="bullet--section--1">
                  <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> Python</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> C</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> C++</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> RISC-V</h4></li>
                    </ul>
                  </p>
                </div>
                <div className="bullet--section--2">
                <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> Verilog</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> HTML</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> CSS</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> JavaScript</h4></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* FRAMEWORKS */}
          <div className="skills-animation-test">
          <div className="skills--section--card">
            {/* <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div> */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Frameworks</h3>
              <div className="bullets--test">
                <div className="bullet--section--1">
                  <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> React</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Node.js</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Express.js</h4></li>
                    </ul>
                  </p>
                </div>
                <div className="bullet--section--2">
                <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> jQuery</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Bootstrap</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Axios</h4></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* CERTIFICATIONS */}
          <div className="skills-animation-test">
          <div className="skills--section--card">
            {/* <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div> */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Certifications</h3>
              <div className="bullets--test">
                <div className="bullet--section--1">
                  <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> Fusion360</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Inventor</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> AutoCAD</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Revit</h4></li>
                    </ul>
                  </p>
                </div>
                <div className="bullet--section--2">
                <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h4><IoMdCheckmarkCircleOutline /> Word</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Excel</h4></li>
                      <li><h4><IoMdCheckmarkCircleOutline /> Powerpoint</h4></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* COURSEWORK */}
          <div className="skills-animation-test">
          <div className="skills--section--card">
            {/* <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div> */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Relavent Coursework</h3>
              <div className="bullets--test">
                <div className="bullet--section--1">
                  <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h5><IoMdCheckmarkCircleOutline /> Data Structures</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Computer Architecture</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Program Design</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Discrete Structures</h5></li>
                    </ul>
                  </p>
                </div>
                <div className="bullet--section--2">
                <p className="bullet--section--description">
                    <ul className="skills-bullets">
                      <li><h5><IoMdCheckmarkCircleOutline /> Linear Systems</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Electrical Systems</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Electronic Materials</h5></li>
                      <li><h5><IoMdCheckmarkCircleOutline /> Differential Equations</h5></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}
