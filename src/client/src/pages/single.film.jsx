import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleFilmPage(props) {
    let [movie, setMovie] = useState(null);
    let { id } = useParams();
    let [count, setCount] = useState(Number(id));
    console.log("this is count", count)
    let [list, setList] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5001/api/films/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMovie(data[0])
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             setMovie("Could not connect to test api endpoint :(");
    //         });
    // }, []);
    async function fetchFilms () {
        let res = await fetch(`http://localhost:5001/api/films/`);
        let data = await res.json();
        setList(data)
    }

    function findFilm() {
        setMovie(list.find((mov) => mov.FilmId == count));
        console.log("list", list, "movie", movie)
    }

    useEffect(() => {
        if (list.length == 0) fetchFilms();
        else findFilm();
    }, [count, list]);


    function nextMovie() {
        if (count >= 10) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    }
    function lastMovie() {
        if (count == 1) {
            setCount(10);
        } else {
            setCount(count - 1);
        }
    }

    if (movie) {
        let moviePath = movie.PosterImageURL.slice(2);

        return (
            <div className="singleFilm" style={{ backgroundImage: 'url(/img/redroom.jpeg)' }} >
                <div>
                    <img src={require(`../images/${moviePath}`)} alt={`${movie.Title} Poster`} />
                </div>
                <div>
                    <h1>{movie.Title} ({movie.ReleaseYear})</h1>
                    <h2></h2>
                    <p>{movie.Description}</p>
                    <p>{movie.RunningTime} minutes. </p>

                    <div id="dirPadRight">
                        <button
                            id="dirPadRightButton"
                            className="invisible-button"
                            onClick={nextMovie}
                        >
                        </button>
                    </div>
                    <div id="dirPadLeft">
                        <button
                            id="dirPadLeftButton"
                            className="invisible-button"
                            onClick={lastMovie}
                        > butt
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleFilmPage;