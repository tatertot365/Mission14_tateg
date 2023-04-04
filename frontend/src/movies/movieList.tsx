import { Movie } from './movies';
import { useState } from 'react';
import { useEffect } from 'react';

// This component is responsible for fetching the list of movies from the backend
function MovieList() {
    // The state variable movieData is initialized to an empty array
    const [movieData, setMovieData] = useState<Movie[]>([]);

    // The fetchMovies function is responsible for fetching the list of movies from the backend
    const fetchMovies = async () => {
        const response = await fetch('https://localhost:4000/movie');
        const data = await response.json();
        setMovieData(data);
    };

    // The useEffect hook is responsible for calling the fetchMovies function
    useEffect(() => {
        fetchMovies();
    }, []);

    // The JSX code below is responsible for rendering the table of movies
    return (
        <>
            <div className="row">
                <h4>The best movies!</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Movie ID</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Edited</th>
                        <th>Lent To</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {movieData.map((movie) => (
                        <tr key={movie.movieId}>
                            <td>{movie.movieId}</td>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>{movie.category}</td>
                            <td>{movie.director}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.edited}</td>
                            <td>{movie.lentTo}</td>
                            <td>{movie.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MovieList;
