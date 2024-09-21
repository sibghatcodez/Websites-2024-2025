import './App.css';
import Sibs from './sibghat.png';

function App() {
  return (
    <div className="container">

      <div className="info">
        <p id="craft">GAME DEVELOPER</p>
        <h2 id='me'>I'm Sibghat Baloch</h2>
        <div className="buttons">
          <button id="about_me">MORE ABOUT ME</button>
          <button id="hire_me">HIRE ME</button>
        </div>
      </div>
      <div className="image">
        <img src={Sibs} alt="My_Picture" />
      </div>
    </div>
  );
}

export default App;