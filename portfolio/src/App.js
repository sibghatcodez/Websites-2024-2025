import './App.css';
import CV from './WebCV.png';
import SibghatIdeas from './WebsitesPictures/SibghatIdeas.jpg';
import BalochSquad from './WebsitesPictures/BalochSquad.png';

function App() {

  const websiteArray = [
    {
      name: "Sibghat Ideas",
      link: "https://sibghatideas.netlify.app/",
      image: require('./WebsitesPictures/SibghatIdeas.jpg'),
      introduction: "SibghatIdeas is a learning platform designed to teach HTML in Urdu, making it easier for students to grasp web development concepts. It simplifies English documentation into an accessible format for everyone.",
      technologies: "HTML, CSS, REACT, JAVASCRIPT",
    },
    {
      name: "Baloch Squad",
      link: "https://balochsquad.netlify.app/",
      image: require('./WebsitesPictures/BalochSquad.png'),
      introduction: "BalochSquad is a platform where we document our cricket matches. From match locations and dates to overs, scores, and wickets, we keep track of every detail as we compete with other teams.",
      technologies: "HTML, CSS, REACT, JAVASCRIPT, REDUX, FIREBASE",
    }
  ]
  function getList(website) {
    return websiteArray[website].technologies.split(",");
  }
  return (
    // everything will be inside the main class.
    //container only contains of two front pages.
    //portfolio class is to showcase websites and games made.
    //construction
    <div className="main">
      <div className="container">

        <div className="info">
          <p id="craft">GAME DEVELOPER</p>
          <h2 id='me'>I'm Sibghat Ullah</h2>
          <div className="buttons">
            <button id="about_me" className="hvr-shadow-radial hvr-buzz">PORTFOLIO</button>
            <button id="hire_me" className="hvr-shadow-radial hvr-buzz-out"><a href="https://www.linkedin.com/in/sibghat-ullah-84a66321b/" target="_blank">HIRE ME</a></button>
          </div>
        </div>

        <div className="intro">
          <img src={CV} alt="intro_picture" />
        </div>
      </div>

      <h1 id="WebsiteHeading">WEBSITES THAT I MADE</h1>
      <div className="portfolio">
        
        <div id="container">

          <div className="website-details">

            <h1>{websiteArray[0].name}</h1>

            <p>{websiteArray[0].introduction}</p>


            <div className="control">

              <button className="btn"><a href={websiteArray[0].link} target="_blank">
                <span className="tag">WEB</span>
                <span className="redirect"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                <span className="redirect-btn">REDIRECT</span>
              </a></button>

            </div>

          </div>

          <div className="website-image">

            <img src={websiteArray[0].image} alt=""/>


            <div className="information">
              <h2> TECHNOLOGIES</h2>
              <ul>
        {getList(0).map((tech, index) => (
          <li key={index}><strong>{tech.trim()}</strong></li>
        ))}
      </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;