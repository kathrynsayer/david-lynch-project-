import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuPage() {
  let [filmsArray, setFilmsArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/films")
      .then((res) => res.json())
      .then((data) => setFilmsArray(data))
      .catch((err) => {
        console.error(err);
        setFilmsArray("Could not connect to test api endpoint :(");
      });
  }, []);
  console.log(filmsArray)



  return (
    < div className="MenuPage" style={{ backgroundImage: 'url(/img/bluevelvetbackground.jpeg)' }} >
      <header>
        <h1>Please select a film to learn more</h1>
        <ul>
          {filmsArray.map((movie) => {

            let moviePath = movie.PosterImageURL.slice(2);


            return <li key={movie.FilmId}>
              <Link to={`/films/${movie.FilmId}`}>
                <img id="tvImage" src={require(`../images/${moviePath}`)} alt={`${movie.Title} Poster`} />
              </Link>
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}
export default MenuPage;

