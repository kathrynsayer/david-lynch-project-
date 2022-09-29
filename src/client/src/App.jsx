import { useState, useEffect } from "react";

function App() {
  let [testState, setTestState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/films")
      .then((res) => res.json())
      .then((data) => setTestState(data))
      .catch((err) => {
        console.error(err);
        setTestState("Could not connect to test api endpoint :(");
      });
  }, [testState]);

  return (
    <div className="App">
      <header>
        <h1>Basic Mern Starter Template</h1>
        <hr />
        {testState.map((film) => <p key={film.FilmId}>{film.Title}</p>)}
      </header>
    </div>
  );
}

export default App;
