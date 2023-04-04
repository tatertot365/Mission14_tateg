import React from 'react';
import Home from './Home';
import Movies from './Movies';
import Podcasts from './Podcasts';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../movies/movieList';

// This is the navbar component that will be used on every page.
const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink exact to="/" className="navbar-brand">
                        My App
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/movies"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    Movies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/podcasts"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    Podcasts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/podcasts" element={<Podcasts />} />
            </Routes>
        </Router>
    );
};

export default Navbar;
