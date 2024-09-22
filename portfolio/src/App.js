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

        <div id="container">

          <div className="product-details">

            <h1>SIBGHAT IDEAS</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio ad deleniti saepe enim perspiciatis necessitatibus cupiditate ratione! Asperiores officiis tenetur dolore expedita consequatur minima explicabo provident recusandae vero accusantium! lorem0500</p>


            <div className="control">

              <button className="btn">
                <span className="price">WEB</span>
                <span className="shopping-cart"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                <span className="buy">REDIRECT</span>
              </button>

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

      </div>
      <div className="portfolio">

<div id="container">

  <div className="product-details">

    <h1>SIBGHAT IDEAS</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio ad deleniti saepe enim perspiciatis necessitatibus cupiditate ratione! Asperiores officiis tenetur dolore expedita consequatur minima explicabo provident recusandae vero accusantium! lorem0500</p>


    <div className="control">

      <button className="btn">
        <span className="price">WEB</span>
        <span className="shopping-cart"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
        <span className="buy">REDIRECT</span>
      </button>

    </div>

  </div>

  <div className="product-image">

    <img src={SibghatIdeas} alt=""/>


      <div className="information">
        <h2> TECHNOLOGIES</h2>
        <ul>
          <li><strong>JAVASCRIPT</strong></li>
          <li><strong>CSS</strong></li>
          <li><strong>HTML</strong></li>
          <li><strong>REACT</strong></li>
          <li><strong>REDUX</strong></li>

        </ul>
      </div>

  </div>
</div>

</div>


    </div>
  );
}

export default App;