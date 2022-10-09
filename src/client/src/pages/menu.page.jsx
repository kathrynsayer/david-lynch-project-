import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuPage() {
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

  // if (movie) {
  //     let moviePath = movie.PosterImageURL.slice(2);
  

  return (
    < div className="MenuPage" style={{ backgroundImage: 'url(/img/bluevelvetbackground.jpeg)' }} >
      <header>
        <h1>Please select a film to learn more</h1>
        <ul>
          {testState.map((film) => {
            return <li key={film.FilmId}>
              <Link to={`/films/${film.FilmId}`}>
                {/* <img id="tvImage" src={require(`../images/${moviePath}`)} alt={`${movie.Title} Poster`} /> */}
              </Link>
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}
export default MenuPage;

