import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  let [testState, setTestState] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5001/")
  //     .then((res) => res.json())
  //     .then((data) => setTestState(data))
  //     .catch((err) => {
  //       console.error(err);
  //       setTestState("Could not connect to test api endpoint :(");
  //     });
  // }, []);

  return (
    <div className="Homepage" style={{ backgroundImage: 'url(/img/bluevelvetbackground.jpeg)' }} > 
      <header>
      <Link to= {`/MenuPage`}><h1>Welcome</h1></Link>
        {/* <ul>
        {testState.map((film) => {
          return <li key={film.FilmId}> */}
          {/* </li>
        })}
      </ul> */}
       </header>
    </div>
  );
}

export default HomePage;