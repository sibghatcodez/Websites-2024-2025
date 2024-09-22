import './App.css';
import CV from './WebCV.png';
import WEBSITES from './WEBSITES.jpg'
import SibghatIdeas from './WebsitesPictures/sibghatIdeas.jpg';

function App() {
  return (
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


      <div className="portfolio">

      <div class="four">
          <h1><span>PORTFOLIO</span> WEBSITES I <em>MADE</em></h1>
      </div>
        
        <div className="card" data-aos="fade-up">
          <img src={SibghatIdeas} alt="SIBGHAT_IDEAS_LOOK" />
          <section className="description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt veritatis itaque quas voluptates. Soluta accusantium ab quaerat provident fugit!</p>
            <button>read more.</button>
          </section>
         </div>
      </div>


    </div>
  );
}

export default App;