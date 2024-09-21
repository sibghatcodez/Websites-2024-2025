import './App.css';
import Sibs from './sibghat.png';

function App() {
  return (
    <div className="main">
      <div className="container">

        <div className="info">
          <p id="craft">GAME DEVELOPER</p>
          <h2 id='me'>I'm Sibghat Ullah</h2>
          <div className="buttons">
            <button id="about_me">PORTFOLIO</button>
            <button id="hire_me"><a href="https://www.linkedin.com/in/sibghat-ullah-84a66321b/" target="_blank">HIRE ME</a></button>
          </div>
        </div>
        {/* <div className="image">
        <img src={Sibs} alt="My_Picture" />
      </div> */}
        <div className="intro">

            <h1>Education</h1>
          <div className="education">
            <p><span id="period">2011-2022</span> Matriculation of Science from Board of Secondary Education</p>
            &nbsp;
            <p><span id="period">2022-2024</span> Inter of Computer Science from Board of Intermediate</p>
            &nbsp;
            <p><span id="period">2024-present</span> Bachelor of Computer Science from University of Sindh</p>
          </div>

            <h1>Skills</h1>
          <div className="skills">
            <p>Game Development</p>
            &nbsp;
            <p>Web Development</p>
            &nbsp;
            <p>Git Version Control</p>
          </div>

            <h1>Softwares</h1>
          <div className="softwares">
            <p>Unity Engine</p>
            &nbsp;
            <p>VS Code</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;