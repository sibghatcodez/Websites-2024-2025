import './App.css';
import CV from './WebCV.png';
import SibghatIdeas from './WebsitesPictures/SibghatIdeas.jpg';
import BalochSquad from './WebsitesPictures/BalochSquad.png';

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

        <div id="container">

          <div className="product-details">

            <h1>SIBGHAT IDEAS</h1>

            <p>SibghatIdeas is a learning platform designed to teach HTML in Urdu, making it easier for students to grasp web development concepts. It simplifies English documentation into an accessible format for everyone.</p>


            <div className="control">

              <button className="btn"><a href="https://sibghatideas.netlify.app/" target="_blank">
                <span className="price">WEB</span>
                <span className="shopping-cart"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                <span className="buy">REDIRECT</span>
                </a></button>

            </div>

          </div>

          <div className="product-image">

            <img src={SibghatIdeas} alt=""/>


              <div className="information">
                <h2> TECHNOLOGIES</h2>
                <ul>
                  <li><strong>JAVASCRIPT  </strong> </li>
                  <li><strong>HTML  </strong></li>
                  <li><strong>CSS </strong></li>
                  <li><strong>REACT </strong></li>

                </ul>
              </div>

          </div>
        </div>



<div id="container">

  <div className="product-details">

    <h1>BALOCH SQUAD</h1>

    <p>BalochSquad is a platform where we document our cricket matches. From match locations and dates to overs, scores, and wickets, we keep track of every detail as we compete with other teams.</p>


    <div className="control">

      <button className="btn"><a href="https://balochsquad.netlify.app/" target="_blank">
        <span className="price">WEB</span>
        <span className="shopping-cart"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
        <span className="buy">REDIRECT</span>
        </a></button>

    </div>

  </div>

  <div className="product-image">

    <img src={BalochSquad} alt=""/>


      <div className="information">
        <h2> TECHNOLOGIES</h2>
        <ul>
          <li><strong>JAVASCRIPT</strong></li>
          <li><strong>CSS</strong></li>
          <li><strong>HTML</strong></li>
          <li><strong>REACT</strong></li>
          <li><strong>REDUX</strong></li>
          <li><strong>FIREBASE</strong></li>

        </ul>
      </div>

  </div>
</div>

</div>
    </div>
  );
}

export default App;