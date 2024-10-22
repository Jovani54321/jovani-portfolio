import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/testIMAGE.jpeg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h2 className="skills--section--heading">About Me</h2>
          <p className="hero--section-description">
            Hi! I'm Jovani, a passionate Computer Engineering student at the University of South Florida.
            I am currently a junior with experience in both full-stack web development and programming languages such as Python, C, C++, and more!
          </p>
          <p className="hero--section-description">
            When I'm not coding, you can find me on the soccer field with friends,
            playing video games, or trying to build something I thought was cool!
          </p>
          <div className="education--section--card">
            {/* <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div> */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title"><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
              <p className="skills--section--description">
                <ul>
                  <li>Computer Engineering</li>
                  <li>University of South Florida</li>
                  <li>Expected Graduation: May 2026</li>
                  <li>Current GPA: 4.00/4.00</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
