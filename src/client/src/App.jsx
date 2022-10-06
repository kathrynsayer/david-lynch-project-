import './styles/homepage.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HomePage } from "./pages";
import SingleFilmPage from './pages/single.film';

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;