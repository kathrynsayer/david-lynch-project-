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
    async function fetchFilms() {
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
            <div className="singleFilm" >
                <div id="singleFilmGrid" style={{ backgroundImage: 'url(/img/redroom.jpeg)' }} >
                    <div className="imageDiv">
                        <img id="tvImage" src={require(`../images/${moviePath}`)} alt={`${movie.Title} Poster`} />
                    </div>
                    <div id="tvContainer">
                        <img id="tvFrame" src={require(`../images/NicePng_tv-png_2820738.png`)} alt="tv frame" />
                    </div>

                    <div id="big-right-button-container">
                        <button
                            id="big-right-button"
                            onClick={nextMovie}
                        >next
                        </button>
                    </div>
                    <div id="big-left-button-container">
                        <button
                            id="big-left-button"
                            onClick={lastMovie}
                        > previous
                        </button>
                    </div>
                </div>
                <div className="text">
                    <h1>{movie.Title} ({movie.ReleaseYear})</h1>
                    <p>{movie.Description} {movie.RunningTime} minutes. </p>
                    <div id="small-right-button-container">
                        <button
                            id="small-right-button"
                            onClick={nextMovie}
                            >img={require(`../images/right_button.png`)}</button>
                    </div>
                    <div id="small-left-button-container">
                        <button
                            id="small-left-button"
                            onClick={lastMovie}>
                            previous</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleFilmPage;