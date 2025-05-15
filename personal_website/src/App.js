import logo from './logo.svg';
import './App.css';
import './Nav.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#home">Gowtham</a>
          <div className="menu">
            <a href="#about">About</a>
            <div className="projects_dropdown">
              <a href="#projects">Projects</a>
              <span className="dropdown_icon"> ▾</span>
              <div className="projects_dropdown_content">
                <a href="#project1">American Express</a>
                <a href="#project2">PayPal</a>
                <a href="#project3">Kaiser Permanente</a>
                <a href="#project3">SportsMe</a>
                <a href="#project3">AppLogz(Private SDK)</a>
                <a href="#project3">View All</a>
              </div>
            </div>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
