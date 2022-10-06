import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  let [testState, setTestState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/films")
      .then((res) => res.json())
      .then((data) => setTestState(data))
      .catch((err) => {
        console.error(err);
        setTestState("Could not connect to test api endpoint :(");
      });
  }, []);

  return (
    <div className="Homepage" style={{ backgroundImage: 'url(/img/bluevelvetbackground.jpeg)' }} > 
      <header>
        <h1>Welcome to the David Lynch Filmography</h1>
        <ul>
        {testState.map((film) => {
          return <li key={film.FilmId}>
            <Link to={`/films/${film.FilmId}`}>{film.Title}</Link>
          </li>
        })}
      </ul>
       </header>
    </div>
  );
}

export default HomePage;